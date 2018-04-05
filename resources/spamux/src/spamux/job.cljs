(ns spamux.src.spamux.job
  (:require
    [tiltontec.util.core :refer [pln now]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
    [tiltontec.model.core :require [make] :as md]
    [spamux.utils :refer [xhr?-ok-body ]]))

(defn make-job
  "Make a matrix incarnation of a todo on initial entry"
  [islots]

  (let [net-slots (merge
                    {
                     :type      ::job
                     :created   (now)
                     :start-xhr (cI nil)
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