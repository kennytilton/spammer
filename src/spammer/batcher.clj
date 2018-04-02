(ns spammer.batcher
  (:require
    [config.core :refer [env]]
    [clojure.string :as str]
    [clojure.pprint :as pp]
    [clojure.edn :as edn]
    [clojure.core.async :refer [go chan go-loop <! <!! >!! >!
                                timeout alt!!]]
    [clojure.tools.cli :refer [parse-opts] :as cli]
    [clojure.java.io :refer [make-parents]]
    [taoensso.tufte :as tufte :refer (defnp p profiled profile)]
    [taoensso.timbre :as log]
    [spammer.job :refer :all]
    [spammer.genlist :refer :all]))

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

(declare email-file-to-sendfiles-mp)

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
                 {:filename test-input-file
                  :verbose  verbose})))

  ;; WARNING: comment this out for use with REPL. Necessary, to
  ;; get standalone version to exit reliably.
  ;;
  ;;(shutdown-agents)
  )

(declare
  emw-email-consider
  span-mean-ok
  edn-dump)

(defn email-file-to-sendfiles-mp
  "[options]

  Produce one or more output files targeted
  for different SMTP servers constraining the sequence of emails
  in each to honor spam score constraints specified in config.edn
  and never to include two emails to the same address across all
  batches."
  [job-id]

  (let [{:keys [filename verbose outputp logfail]}
        (get-job job-id)
        fail-file (str
                    (:bulkmail-out-path env-hack)
                    "/job-" job-id
                    "/em-" job-id "-fail.edn")] ;; yes, redundant

    (when (or outputp logfail)
      ;; covers per worker files as well
      (make-parents fail-file))

    (pln :email!!!!! filename job-id verbose outputp logfail)



    (let [em-addrs-hit (ref #{})
          shared-chan (chan)

          workers (map (fn [id smtp-ip]
                         {:id        id
                          :smtp-ip   smtp-ip
                          :ch        shared-chan
                          :spit-file (str
                                       (:bulkmail-out-path env-hack)
                                       "/job-" job-id
                                       "/em-" smtp-ip ".edn")

                          :fail-file fail-file
                          :out-buff  (atom nil)
                          :addrs-hit em-addrs-hit


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
                      (:smtp env-hack)))

          work-procs (doall
                       (map (fn [w]
                              (go-loop []
                                (when-let [em-chunk (<! (:ch w))]
                                  (doseq [em em-chunk]
                                    (emw-email-consider w em))
                                  (recur))))
                         workers))]

      (swap! gJobs assoc-in [job-id :workers] workers)

      ;; --- initialize spit files with a header ----------------------
      ;; todo job-id also
      (doseq [w workers]
        (when (:spit-file w)
          (spit (:spit-file w)
            {:run-date (.toString (java.util.Date.))
             :smtp-ip  (:smtp-ip w)})))

      (when fail-file
        (spit fail-file
          {:run-date (.toString (java.util.Date.))
           :job-id   job-id}))

      ;; --- feed the workers ----------------------------------------

      (pln :feeding-off!!!! filename)

      (p :feed-workers
        (with-open [in (java.io.PushbackReader. (clojure.java.io/reader
                                                  (str "bulkinput/" filename)))]
          (pln :we-in! in)
          (let [edn-seq (repeatedly (partial edn/read {:eof :fini} in))]
            (doseq [em-chunk (take-while (partial not= :fini) edn-seq)]
              ;; todo switch to loop so we can break out
              (when (= :running (job-status job-id))

                (let [start (System/currentTimeMillis)]
                  (>!! shared-chan em-chunk)))))))

      ;; --- let the workers finish ----------------------------------

      (pln :waiting-on-workers)

      (loop [[work-proc & rest :as ps] work-procs]
        (when work-proc
          (when-let [out (alt!!
                           (timeout 100) :timeout
                           work-proc ([r] r))]
            ;;(pln :bam-worker-out work-proc)
            (recur rest))))

      ;; --- dump worker stats ---------------------------------------

      (when verbose
        (doseq [w workers]
          (pln)
          (pln (format "worker %d:" (:id w)))
          (pp/pprint @(:stats w))
          (pln)))

      ;; ---- dump summary stats -------------------------------------

      ;; comeback flush buffer here

      (let [start (job-property job-id :start)]
        (pln :reco-stats job-id)
        (swap! gJobs assoc-in [job-id :latest-summary-stats]
          (merge
            {:run-duration (- (now) start)}
            (apply merge-with +
              (map #(select-keys @(:stats %)
                      [:sent-ct :rejected-score :rejected-dup-addr
                       :rejected-overall-mean
                       :rejected-span-mean])
                workers))))

        (pp/pprint (latest-summary-stats job-id))

        (pln)
        (println :fini)))))

(defn fail-task [w task reason]
  (when (:fail-file w)
    (spit (:fail-file w)
      (assoc task
        :reason reason)
      :append true))
  (xpln :email-fail reason task)
  (swap! (:stats w) update-in [:fails]
    (fn [curr] (take-last 3 (conj curr
                              (assoc task
                                :reason reason)))))
  
  (swap! (:stats w) update-in [reason] inc))



(defnp emw-email-consider
  "[w (writer) task (email info)]
  Decide whether this writer should include this email in
  the batch, given its spam score and how it will affect the
  overall spam score of this writer's output and the running
  mean spam score of the most recent emails.

  Simply write to the writer's batch or ignore. Output is meaningless."

  [w task]

  ;;(pln :consider (:spam-score task) (:email-address task))

  (cond
    (> (:spam-score task) (:individual-max env-hack))
    (fail-task w task :rejected-score)

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
          (fail-task w task :rejected-dup-addr)

          (do
            (dosync (commute (:addrs-hit w) conj (:email-address task)))
            (swap! (:stats w) merge {:sent-ct        new-ct
                                     :spam-score-sum new-sum})

            (when (>= (count @(:out-buff w)) 500)
              (when (:spit-file w)
                (spit (:spit-file w) @(:out-buff w) :append true))
              (reset! (:out-buff w) nil))

            ;; todo flush this buffer at EOJ!!!

            (swap! (:out-buff w) conj task)))))))

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
        (xpln :okspan new-ct new-mean new-score (:last-n-mean-max env-hack))
        true)
      (do
        (xpln :failspan new-ct new-mean (:last-n-mean-max env-hack))
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

