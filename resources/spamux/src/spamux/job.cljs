(ns spamux.job
  (:require
    [tiltontec.util.core :refer [pln now]]
    [tiltontec.cell.base :refer [ia-type unbound]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
    [tiltontec.cell.observer :refer-macros [fn-obs]]

    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
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

    [tiltontec.xhr
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

    [spamux.util :refer [xhr?-ok-body mx-find-matrix if-bound
                         xhr-poller]]
    [cljs.pprint :as pp]))

(defn syn-xhr-ok-body [me id uri]
  (when-let [r (xhr-response
                 (with-synapse (id)
                   (send-xhr uri)))]
    (when (= 200 (:status r))
      (:body r))))


(defn make-job
  "Make a matrix incarnation of a todo on initial entry"
  [islots]
  (assert (:filename islots))

  (let [net-slots (merge
                    {
                     :type       ::job
                     :created    (now)
                     :job-type   :clean
                     :output?    false
                     :log-fails? false

                     :job-id     (cF (:job-id (syn-xhr-ok-body me :jidx
                                                (pp/cl-format nil
                                                  "start?job-type=~a&filename=~a&outputp=~a&logfail=~a"
                                                  (name (:job-type @me))
                                                  (:filename @me) ;; :filename must be supplied in islots
                                                  (:output @me)
                                                  (:log-fails? @me)))))

                     :status     (cF (when-let [job-id (<mget me :job-id)]
                                       (let [poller (xhr-poller :check-job
                                                      (str "checkjob?job-id=" job-id)
                                                      (fn [response]
                                                        (some #{(:status response)} ["pending" "running"])))]
                                         (<mget poller :response))))
                     }
                    islots)

        job (do                                             ;;(pln :netslots net-slots)
              (apply md/make (flatten (into [] net-slots))))]

    job))


(defn mtx-job [mx]
  (<mget (mx-find-matrix mx) :job))

(defn mtx-job-id [mx]
  (when-let [job (mtx-job mx)]
    (<mget job :job-id)))
