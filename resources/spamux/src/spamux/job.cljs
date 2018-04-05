(ns spamux.job
  (:require
    [tiltontec.util.core :refer [pln now]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
    [tiltontec.model.core :require [make] :as md]
    [spamux.utils :refer [xhr?-ok-body]]
    [cljs.pprint :as pp]))

(defn make-job
  "Make a matrix incarnation of a todo on initial entry"
  [islots]
  (assert (:filename islots))
  (let [net-slots (merge
                    {
                     :type      ::job
                     :created   (now)
                     :start-xhr (cF (send-xhr
                                      (case (<mget me :action)
                                        :start (pp/cl-format nil "start?job-type=clean&filename=~a&outputp=~a&logfail=~a"
                                                 (:job=type @me)
                                                 (:filename @me)
                                                 (:outputp @me)
                                                 (:log-fails? @me))

                                        :stop (when-let [jid (:job-id @me)]
                                                (pp/cl-format nil "stop?job-id=~a" jid)))))
                     :job-type :clean
                     :outputp false?
                     :log-fails? false?
                     ;; :filename must be supplied in islots
                     :job-id    (cF (when-let [body (xhr?-ok-body (<mget me :start-xhr))]
                                      (:job-id body)))
                     }
                    islots)

        job (apply md/make (flatten (into [] net-slots)))]


    job))

(defn mx-job [me]
  (let [mx (find-matrix me)]
    (assert mx)
    (<mget mx :job)))

(defn job-id [job]
  (when-let [b (xhr?-ok-body (<mget job :start-xhr))]
    (:job-id b)))