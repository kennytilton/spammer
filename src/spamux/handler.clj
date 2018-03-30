(ns spamux.handler
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
            [spamux.batcher :refer :all]
            [clojure.pprint :as pp]))

(def cumulative-stats (atom nil))

(def directory (clojure.java.io/file "bulkinput"))
(def files (file-seq directory))


(defroutes app-routes
  (GET "/" []
    (do
      (pln "New server!!!")
      (resp/content-type (resp/resource-response "index.html" {:root "webmx"}) "text/html")))

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

  (GET "/start" []
    (do
      (reset! cumulative-stats {})
      (reset! gStart (System/currentTimeMillis))
      (reset! batch-is-running? true)
      (go-loop []
        (run-batch "em-300000-100.edn")
        (swap! cumulative-stats
          #(merge-with + % @latest-summary-stats))
        (when @batch-is-running?
          (pln :rebatching!!!!!!!!!!!!)
          (pp/pprint @cumulative-stats)
          (recur )))
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<b>Stop!</b>"}))

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
    (wrap-resource "webmx/out")
    (wrap-resource "webmx")
    (wrap-content-type)
    (wrap-defaults site-defaults)))

