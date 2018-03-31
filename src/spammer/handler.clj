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

(def directory (clojure.java.io/file "bulkinput"))
(def files (file-seq directory))

(defroutes app-routes
  (GET "/" []
    (do
      (pln "New server!!!")
      (resp/content-type (resp/resource-response "index.html" {:root "spamux"}) "text/html")))

  (GET "/rawfiles" []
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

  (GET "/build" req
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

  (GET "/start" req
    (let [{:keys [cookies params]} req]
      (prn :start-params params)
      (do
        (reset! cumulative-stats {})
        (reset! gStart (System/currentTimeMillis))
        (reset! batch-is-running? true)
        (go
          (run-batch (:filename params))
          (swap! cumulative-stats
            #(merge-with + % @latest-summary-stats))
          (reset! batch-is-running? false))
        {:status  200
         :headers {"Content-Type" "text/html"}
         :body    "<b>Stop!</b>"})))

  (GET "/batchstats" []
    (let [stats (or @latest-summary-stats
                  {:no-stats "Click 'Start' to gen some"})]
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string stats)}))

  (GET "/runningstats" []
    (let [stats (running-stats)]
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string stats)}))

  (GET "/checkjob" []
    (do
      (pln :checking!!!job!!! @batch-is-running?)
      {:status  200
       :headers {"Content-Type" "application/json"}
       :body    (generate-string
                  {:status
                   (if @batch-is-running?
                    :running :complete)})}))

  (GET "/stop" []
    (do
      (batch-abort)
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Start</b>"}))

  (route/not-found "Not Found"))

(def app
  (-> app-routes
    ;; (wrap-file "/")
    (wrap-resource "spamux/out")
    (wrap-resource "spamux")
    (wrap-content-type)
    (wrap-defaults site-defaults)))

