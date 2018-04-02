(ns spammer.handler
  (:require
    [clojure.core.async
     :refer [go chan go-loop <! <!! >!! >! timeout alt!!]]
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
    [ring.middleware.file :refer [wrap-file]]
    [ring.middleware.resource :refer [wrap-resource]]
    [ring.util.mime-type :refer [ext-mime-type]]
    [ring.middleware.content-type :refer [wrap-content-type]]
    [ring.util.response :as resp]
    [clojure.string :as str]
    [cheshire.core :refer :all]

    [spammer.job :refer :all]
    [spammer.batcher :refer :all]
    [spammer.genlist :refer :all]
    [clojure.pprint :as pp]
    [tiltontec.util.core :as ut]))

(declare job-start batch-abort job-not-found
  job-check running-stats req-job-id
  email-input-build email-input-list batch-stats)

(defroutes app-routes
  (GET "/" []
    (do
      (pln "New server!!!")
      (resp/content-type (resp/resource-response "index.html" {:root "spamux"}) "text/html")))

  (GET "/rawfiles" req
    (email-input-list req))

  (GET "/build" req
    (email-input-build req))

  (GET "/start" req
    (job-start req))

  (GET "/batchstats" req
    (batch-stats req))

  (GET "/runningstats" req
    (or (job-not-found req)
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string
                  (running-stats (req-job-id req)))}))

  (GET "/checkjob" req
    (job-check req))

  (GET "/stop" req
    (batch-abort req))

  (route/not-found "Not Found"))

(def app
  (-> app-routes
    (wrap-resource "spamux/out")
    (wrap-resource "spamux")
    (wrap-content-type)
    (wrap-defaults site-defaults)))


(defn job-start [req]
  (let [{:keys [cookies params]} req
        job-id (str (swap! latest-job-id inc))]
    ;;(pln :start-params params :job job-id)
    (assert (some #{(:job-type params)} ["build" "clean"]))

    (swap! gJobs assoc job-id
      (merge params
        {:job-id     job-id                                 ;; duh
         :full-stats {}
         :start      (System/currentTimeMillis)
         :status     :running}))

    ;; (pln :again (get @gJobs job-id))
    (go
      (email-file-to-sendfiles-mp job-id)
      (pln :job-fini! job-id)

      (swap! gJobs update-in [job-id :full-stats]
        #(merge-with + % (latest-summary-stats job-id)))

      (job-status-set job-id :complete))

    (pln :start-back job-id)

    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (generate-string {:job-id job-id})}))

(defn job-not-found-response [job-id]
  (pln :jnot-found!!!!! job-id)
  {:status  404
   :headers {"Content-Type" "application/json"}
   :body    (generate-string {:job-id job-id})})

(defn req-job-id [req]
  (get-in req [:params :job-id]))

(defn job-not-found [req]
  (when-not (req-job-id req)
    (pln :no-job)
    (ut/err "no job"))
  (when-not (get-job (req-job-id req))
    (job-not-found-response (req-job-id req))))

(defn batch-stats [req]
  (or (job-not-found req)
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (generate-string
                (latest-summary-stats (req-job-id req)))}))

(defn running-stats [job-id]
  (if (= :running (job-property job-id :status))
    (assoc
      (apply merge-with +
        (map #(select-keys @(:stats %)
                [:sent-ct :rejected-score :rejected-dup-addr
                 :rejected-overall-mean
                 :rejected-span-mean])
          (job-property job-id :workers)))
      :run-duration (- (now) (job-property job-id :start)))
    (latest-summary-stats job-id)))

(defn job-check [req]
  (or (job-not-found req)
    (do
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string
                  (select-keys
                    (get @gJobs (req-job-id req))
                    [:job-id :status]))})))

(defn batch-abort [req]
  (or (job-not-found req)
    (do
      (job-status-set (req-job-id req) :aborted)
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Start</b>"})))

(defn email-input-build [req]
  (let [{:keys [cookies params]} req]
    (prn :build-params params)
    (do
      (go
        (job-status-set (req-job-id req) :running)
        (email-raw-file-build (Integer/parseInt (:volumek params)))
        (job-status-set (req-job-id req) :complete)))
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    "building"}))

(defn email-input-list [req]
  (let [files (into []
                (map :name
                  (filter :file
                    (remove :hidden
                      (map bean
                        (file-seq
                          (clojure.java.io/file "bulkinput")))))))]
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (generate-string files)}))