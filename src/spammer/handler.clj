(ns spammer.handler
  (:require [clojure.core.async
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
            [spammer.batcher :refer :all]
            [spammer.genlist :refer :all]
            [clojure.pprint :as pp]))

(def cumulative-stats (atom nil))

(declare job-start job-check job-running-stats
  email-input-build email-input-list)


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

  (GET "/batchstats" []
    (let [stats (or @latest-summary-stats
                  {:no-stats "Click 'Start' to gen some"})]
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string stats)}))

  (GET "/runningstats" req
    (job-running-stats req))

  (GET "/checkjob" req
    (job-check req))

  (GET "/stop" []
    (do
      (batch-abort)
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Start</b>"}))

  (route/not-found "Not Found"))

(def app
  (-> app-routes
    (wrap-resource "spamux/out")
    (wrap-resource "spamux")
    (wrap-content-type)
    (wrap-defaults site-defaults)))

(defn job-start [req]
  (let [{:keys [cookies params]} req]
    (pln :start-params params)
    (do
      (reset! batch-id (:jobid params))
      (reset! cumulative-stats {})
      (reset! gStart (System/currentTimeMillis))
      (reset! batch-is-running? true)
      (go
        (email-file-to-sendfiles-mp
          (merge params
            {:outputp (= "true" (:outputp params))
             :logfail (= "true" (:logfail params))}))

        (swap! cumulative-stats
          #(merge-with + % @latest-summary-stats))
        (reset! batch-is-running? false))
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Stop!</b>"})))

(defn job-running-stats [req]
  (let [{:keys [cookies params]} req]
    (pln :job-check-params params)
    (pln :checking!!!job!!!
      (:jobid params) @batch-id @batch-is-running?)
    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (generate-string
                (cond
                  (not= (:jobid params) @batch-id)
                  {}

                  :default (running-stats)))}))

(defn job-check [req]
  (let [{:keys [cookies params]} req]
    (pln :job-check-params params)
    (pln :checking!!!job!!!
      (:jobid params) @batch-id @batch-is-running?)

    {:status  200
     :headers {"Content-Type" "application/json"}
     :body    (generate-string
                {:status
                 (cond
                   (not= (:jobid params) @batch-id)
                   :pending

                   @batch-is-running?
                   :running

                   :default :complete)})}))

(defn email-input-build [req]
  (let [{:keys [cookies params]} req]
    (prn :build-params params)
    (do
      (go
        (reset! batch-is-building? false)
        (email-raw-file-build (Integer/parseInt (:volumek params)))
        (reset! batch-is-building? false))
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Building...</b>"})))

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