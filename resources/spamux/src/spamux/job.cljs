(ns spamux.job
  (:require
    [tiltontec.util.core :refer [pln now]]
    [tiltontec.cell.base :refer [ia-type unbound]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
    [tiltontec.cell.observer :refer-macros [fn-obs]]

    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]

    [tiltontec.model.core
     :refer [make matrix mx-par <mget <mget mset!> mset!> mswap!>
             mxi-find mxu-find-name mxu-find-type mxu-find-id
             fmo fmov]
     :as md]

    [tiltontec.xhr
     :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
             xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
             xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

    [spamux.util :refer [xhr?-ok-body mx-find-matrix]]
    [cljs.pprint :as pp]))

(defn make-job
  "Make a matrix incarnation of a todo on initial entry"
  [islots]
  (assert (:filename islots))
  (pln :mj!!!!!!!!!!!! islots)


  (let [net-slots (merge
                    {
                     :type      ::job
                     :created   (now)
                     :start-xhr (cF (send-xhr
                                      (pp/cl-format nil
                                        "start?job-type=~a&filename=~a&outputp=~a&logfail=~a"
                                        (name (:job-type @me))
                                        (:filename @me)
                                        (:output? @me)
                                        (:log-fails? @me))))
                     :job-type :clean
                     :output? false
                     :log-fails? false
                     ;; :filename must be supplied in islots

                     :job-id  (cF (when-let [body (xhr?-ok-body (<mget me :start-xhr))]
                                      (pln :bingo-job!!! body)
                                      (:job-id body)))
                     :recheck (cI 0)
                     :chk     (cF (when-let [job-id (and (<mget me :recheck)
                                                         (<mget me :job-id))]
                                    (send-xhr :get-running
                                      (str "checkjob?job-id=" job-id))))

                     :info    (cF+ [:obs (fn-obs
                                           (when (some #{(:status new)} ["pending" "running"])
                                             (js/setTimeout
                                               #(with-cc
                                                  (mswap!> me :recheck inc)) 200)))]
                                (if-let [body (xhr?-ok-body (<mget me :chk))]
                                  (do (pln :running body)
                                      (merge {:when (now)} body))
                                  (if-bound cache)))
                     }
                    islots)

        job (do (pln :netslots net-slots)
                (apply md/make (flatten (into [] net-slots))))]


    job))


(defn mx-job [me]
  (let [mx (mx-find-matrix me)]
    (assert mx)
    (<mget mx :job)))

(defn job-id [job]
  (when-let [b (xhr?-ok-body (<mget job :start-xhr))]
    (:job-id b)))