(ns spamux.job
  (:require
    [tiltontec.util.core :refer [pln now]]
    [tiltontec.cell.base :refer [ia-type unbound when-bound]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
    [tiltontec.cell.observer :refer-macros [fn-obs]]

    [tiltontec.cell.synapse
     :refer-macros [with-synapse]
     :refer []]

    [tiltontec.model.core
     :refer [make matrix mx-par <mget <mget mset!> mset!> mswap!>
             mxi-find mxu-find-name mxu-find-type mxu-find-id
             fmo fmov]
     :as md]

    [tiltontec.cell.integrity
     :refer-macros [with-cc with-integrity]
     :refer []]

    [tiltontec.webmx.gen :refer [evt-tag target-value]
     :refer-macros [h1 h2 h3 h4 h5 input div span button p b a li ul
                    select option label]]

    [tiltontec.xhr
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map xhr-response
             xhr?-ok-body xhr-poller syn-xhr-ok-body]]

    [cljs.pprint :as pp]
    [clojure.string :as str]))

(defn mx-find-matrix [mx]
  (mxu-find-type mx :spamux.core/spamux))

(defn make-xhr-job
  "Make a matrix incarnation of a todo on initial entry"
  [islots]
  (assert (:uri islots))

  (apply md/make (flatten (into []
                            (merge
                              {
                               :type     ::job
                               :created  (now)
                               :job-type :clean
                               :job-id   (cF (:job-id (syn-xhr-ok-body me :jidx
                                                        (:uri @me))))

                               :status   (cF (when-let [job-id (<mget me :job-id)]
                                             (let [poller (xhr-poller :check-job
                                                            (str "checkjob?job-id=" job-id)
                                                            (fn [response]
                                                              (some #{(:status response)} ["pending" "running"]))
                                                            1000)]
                                               (<mget poller :response))))
                               :stopped  (cI nil
                                           :obs (fn-obs
                                                  (when new
                                                    (when (:job-id @me) ;; paranoia
                                                      (send-xhr (str "stop?job-id=" (:job-id @me)))))))
                               }
                              islots)))))

(defn mtx-job [mx]
  (<mget (mx-find-matrix mx) :job))

(defn mtx-job-id [mx]
  (when-let [job (mtx-job mx)]
    (<mget job :job-id)))

(defn mtx-job-type [mx]
  (when-let [job (mtx-job mx)]
    (:job-type @job)))

(defn mtx-job-running?
  ([me]
   (mtx-job-running? me nil))
  ([me matching-type]
   (when-let [job (mtx-job me)]
     (when (or (nil? matching-type)
             (= matching-type (:job-type @job)))
       (let [status (:status (<mget job :status))
             sum (some #{status}
                   ["complete" "aborted"])]
         (empty? sum))))))

(defn job-start-button [job-type disabler jobber]
  (button
    {
     :class    "pure-button"
     :disabled (cF (when (not= (<mget me :action) :stop)
                     (or
                       (mtx-job-running? me)
                       (disabler me))))

     :onclick  #(let [me (evt-tag %)]
                  (case (<mget me :action)
                    :stop (mset!> (mtx-job me) :stopped true)
                    :start (mset!> (mx-find-matrix me) :job
                             (jobber me))))

     :style    "margin:18px"

     :content  (cF (str/capitalize (name (<mget me :action))))
     }
    {
     :action (cF (if (mtx-job-running? me job-type)
                 :stop :start))
     }))


