(ns spammer.job
  (:require [clojure.string :as str]))

(defonce latest-job-id (atom 0))
(declare pln xpln now)

(def gJobs (atom {}))
;(def xxx (atom {}))
;
;(swap! xxx assoc 1 {:aaa 42 :bbb []})
;
;(swap! xxx update-in [1 :aaa] inc)
;(swap! xxx assoc-in [1 :aaa] 0)

#_
(swap! gJobs assoc "01"
  (merge params
    {:full-stats {}
     :start      (System/currentTimeMillis)
     :status     :running}))

(defn get-job [job-id]
  (get @gJobs job-id))

(defn job-property [job-id property]
  ;;(pln :job-prop job-id property)
  (get-in @gJobs [job-id property]))

(defn latest-summary-stats [job-id]
  (job-property job-id :latest-summary-stats))

(defn job-status [job-id]
  ;;(pln :jobstat job-id)
  (job-property job-id :status))

(defn job-status-set [job-id status]
  (pln :jstat-set job-id status)
  (swap! gJobs assoc-in [job-id :status] status))

;;; --- utils -------------------------------------------

(defn pln [& args]
  (locking *out*
    (println (str/join " " args))))

(defn xpln [& args])

(defn now []
  (System/currentTimeMillis))