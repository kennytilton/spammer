(ns spamux.batcher
  (:require
    [config.core :refer [env]]
    [clojure.string :as str]
    [clojure.pprint :as pp]
    [clojure.edn :as edn]
    [clojure.core.async :refer [go chan go-loop <! <!! >!! >!
                                timeout alt!!]]
    [clojure.tools.cli :refer [parse-opts] :as cli]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
    [taoensso.timbre :as log]
    [spamux.genlist :refer :all]))

(def spamgen-cli
  [["-t" "--test TESTFILE" "Just filename and extension of a file under bulkinput/"
    :id :test-input-file
    :default "em-100000-100.edn"
    ;; todo check here that file exists
    ;; :validate [#(<= 1 %) "Must be a number greater than one (1)"]
    ]
   ["-v" "--verbose"]

   ["-h" "--help"]])

(def env-hack
  ;; todo persuade lein bin and config to work together
  {
   :smtp              ["1.2.3.4" "10.20.30.40" "100.200.101.201"
                       "11.22.33.44" "111.112.113.114" "22.33.44.55"]
   :worker-ct         6
   :individual-max    0.3
   :overall-mean-max  0.05
   :last-n-mean-max   0.1
   :last-n-span       100
   :bulkmail-out-path "bulkmail"
   })

(declare pln now xpln email-file-to-sendfiles-mp)

#_(-main "-v")

(defn -main [& args]
  ;; uncomment during development so errors get through when async in play
  #_(Thread/setDefaultUncaughtExceptionHandler
      (reify Thread$UncaughtExceptionHandler
        (uncaughtException [_ thread ex]
          (log/error {:what      :uncaught-exception
                      :exception ex
                      :where     (str "Uncaught exception on" (.getName thread))}))))

  (let [input (cli/parse-opts args spamgen-cli)
        {:keys [options arguments summary errors]} input
        {:keys [verbose test-input-file help]} options]

    (cond
      errors (doseq [e errors]
               (println e))

      help (println "\nUsage:\n\n    spamgen <input-edn> options*\n\n"
             "Options:\n" (subs summary 1))

      :default (email-file-to-sendfiles-mp
                 (str "bulkinput/" test-input-file)
                 verbose)))

  ;; WARNING: comment this out for use with REPL. Necessary, to
  ;; get standalone version to exit reliably.
  ;;
  ;;(shutdown-agents)
  )

(defn run-batch [test-input-file]
  (email-file-to-sendfiles-mp
    (str "bulkinput/" test-input-file)
    false))

(declare
  emw-email-consider
  span-mean-ok
  edn-dump pln)

(def batch-is-running? (atom false))

(def gWorkers (atom nil))
(def gStart (atom (System/currentTimeMillis)))

(defn batch-abort []
  (reset! batch-is-running? false))

(def latest-summary-stats (atom nil))

(defn email-file-to-sendfiles-mp
  "[em-file (coll)]

  Produce one or more output files targeted
  for different SMTP servers constraining the sequence of emails
  in each to honor spam score constraints specified in config.edn
  and never to include two emails to the same address across all
  batches."
  [em-file verbose]

  (let [em-addrs-hit (ref #{})
        shared-chan (chan)
        spit-chan (chan)

        workers (reset! gWorkers
                  (map (fn [id smtp-ip]
                         {:id        id
                          :smtp-ip   smtp-ip
                          :ch        shared-chan
                          :spit-chan spit-chan
                          :out-buff  (atom nil)
                          :addrs-hit em-addrs-hit
                          :spit-file (str
                                       (:bulkmail-out-path env-hack) "/em-"
                                       smtp-ip ".edn")

                          :stats     (atom {:sent-ct               0
                                            :last-n-mean           0
                                            :spam-score-sum        0
                                            :rejected-score        0
                                            :rejected-dup-addr     0
                                            :rejected-overall-mean 0
                                            :rejected-span-mean    0})})
                    (range)
                    (take (min (count (:smtp env-hack))
                            (:worker-ct env-hack))
                      (:smtp env-hack))))

        work-procs (doall
                     (map (fn [w]
                            (go-loop []
                              (when-let [em-chunk (<! (:ch w))]
                                ;;(pln :got-chunk (count em-chunk))
                                (doseq [em em-chunk]
                                  (emw-email-consider w em))
                                (recur))))
                       workers))]

    ;; --- initialize spit files with a header ----------------------

    (doseq [w workers]
      (spit (:spit-file w)
        {:run-date (.toString (java.util.Date.))
         :smtp-ip  (:smtp-ip w)}))

    ;; --- start the spitter ---------------------------------------

    (let [spitters
          nil #_(doall (for [_ (range 5)]
                         (p :spitting
                           (go-loop []
                             (if-let [x (<! spit-chan)]
                               (let [[spit-file em] x]
                                 (xpln :sptting spit-file em)
                                 (spit spit-file em :append true)
                                 (recur))
                               (pln :spitter-out!!!!))))))]

      ;; --- feed the workers ----------------------------------------

      (pln :feeding!!!!)

      (let [wait (atom 0)]
        (p :feed-workers
          (with-open [in (java.io.PushbackReader. (clojure.java.io/reader em-file))]
            (let [edn-seq (repeatedly (partial edn/read {:eof :fini} in))]
              (doseq [em-chunk (take-while (partial not= :fini) edn-seq)]
                ;; todo switch to loop so we can break out
                (when @batch-is-running?
                  (let [start (System/currentTimeMillis)]
                    (>!! shared-chan em-chunk)
                    (swap! wait + (- (System/currentTimeMillis) start))))))))
        (pln :feeder-waited @wait :miilis))

      ;; --- let the workers finish ----------------------------------

      (pln :waiting-on-workers)

      (loop [[work-proc & rest :as ps] work-procs]
        (when work-proc
          (when-let [out (alt!!
                           (timeout 100) :timeout
                           work-proc ([r] r))]
            ;;(pln :bam-worker-out work-proc)
            (recur rest))))

      #_(do (pln :waitingonspitterc)

            (doseq [spitter spitters]
              (when-let [out (alt!!
                               (timeout 1000) :timeout
                               spitter ([r] r))]
                (print :spitwait out))))

      ;; --- dump worker stats ---------------------------------------

      (when verbose
        (doseq [w workers]
          (pln)
          (pln (format "worker %d:" (:id w)))
          (pp/pprint @(:stats w))
          (pln)))

      ;; ---- dump summary stats -------------------------------------

      (let [start @gStart]
        (reset! latest-summary-stats
          (merge
            {:run-duration (- (now) start)}
            (apply merge-with +
              (map #(select-keys @(:stats %)
                      [:sent-ct :rejected-score :rejected-dup-addr
                       :rejected-overall-mean
                       :rejected-span-mean])
                workers))))

        (pp/pprint @latest-summary-stats)

        (pln)
        (println :fini)))))

(defn running-stats []
  (if (not @batch-is-running?)
    {}
    (assoc
      (apply merge-with +
        (map #(select-keys @(:stats %)
                [:sent-ct :rejected-score :rejected-dup-addr
                 :rejected-overall-mean
                 :rejected-span-mean])
          @gWorkers))
      :run-duration (- (now) @gStart))))

(defnp emw-email-consider
  "[w (writer) task (email info)]
  Decide whether this writer should include this email in
  the batch, given its spam score and how it will affect the
  overall spam score of this writer's output and the running
  mean spam score of the most recent emails.

  Simply write to the writer's batch or ignore. Output is meaningless."

  [w task]

  (xpln :consider (:spam-score task) (:email-address task))

  (cond
    (> (:spam-score task) (:individual-max env-hack))
    (do
      (swap! (:stats w) update-in [:rejected-score] inc)
      (xpln :email-indy-bad :w (:id w) :score (:spam-score task)))

    :default
    (let [stats @(:stats w)
          new-sum (+ (:spam-score task) (:spam-score-sum stats))
          new-ct (inc (:sent-ct stats))]
      (cond
        (> (/ new-sum new-ct)
          (:overall-mean-max env-hack))
        (do (swap! (:stats w) update-in [:rejected-overall-mean] inc)
            (xpln :overall-email-mean-bad :score (:spam-score task)
              :new-mean (/ new-sum new-ct)
              :limit (:overall-mean-max env-hack)))

        (not (span-mean-ok w (:spam-score task)))
        ;; todo save to "try later" array to be possibly
        ;; incorporated later when running mean might drop
        (do (swap! (:stats w) update-in [:rejected-span-mean] inc)
            (pln :span-mean-bad (:spam-score task)))

        :default
        (if (get @(:addrs-hit w) (:email-address task))
          (swap! (:stats w) update-in [:rejected-dup-addr] inc)
          (do
            (dosync (commute (:addrs-hit w) conj (:email-address task)))
            (swap! (:stats w) merge {:sent-ct        new-ct
                                     :spam-score-sum new-sum})

            (xpln :sending-to (:spit-chan w) [(:spit-file w) task])

            (when (>= (count @(:out-buff w)) 500)
              (spit (:spit-file w) @(:out-buff w) :append true)
              (reset! (:out-buff w) nil))

            (swap! (:out-buff w) conj task)

            #_(>!! (:spit-chan w)
                [(:spit-file w) task])))))))

(defnp span-mean-ok
  "[w (writer) new-score (score of email being considered)]
  Decide if this new score, if included, will violate running mean score
  invariants specified in config.edn"

  [w new-score]

  (let [stats @(:stats w)
        last-n-mean (:last-n-mean stats)
        new-ct (min
                 (:last-n-span env-hack)
                 (inc (:sent-ct stats)))
        new-mean (+ last-n-mean
                   (/ (- new-score last-n-mean) new-ct))]
    (if (<= new-mean (:last-n-mean-max env-hack))
      (do
        (swap! (:stats w) assoc :last-n-mean new-mean)
        #_(pln :okspan new-ct new-mean new-score (:last-n-mean-max env-hack))
        true)
      (do
        #_(pln :failspan new-ct new-mean (:last-n-mean-max env-hack))
        false))))

;;; --- utilities -------------------------------------------------

(defn edn-dump                                              ;; todo turn into validator
  ([path]
   (edn-dump path (str "edn-dumping " path)))

  ([path banner]
   (println banner)
   (with-open [in (java.io.PushbackReader. (clojure.java.io/reader path))]
     (let [edn-seq (repeatedly (partial edn/read {:eof :fini} in))]
       (dorun (map println (take-while (partial not= :fini) edn-seq)))))))

(defn pln [& args]
  (locking *out*
    (println (str/join " " args))))

(defn xpln [& args])

(defn now []
  (System/currentTimeMillis))