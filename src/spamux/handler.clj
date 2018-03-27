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
            [spamux.batcher :refer [batch-abort run-batch]]))

(declare pln)

(defroutes app-routes
  (GET "/" []
    (do
      (pln "New server!!!")
      (resp/content-type (resp/resource-response "index.html" {:root "webmx"}) "text/html")))

  (GET "/start" []
    (do
      (go (run-batch "em-300000-100.edn"))
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<h2>Stop!</h2>"}))

  (GET "/stop" []
    (do
      (batch-abort)
      {:status  200
       :headers {"Content-Type" "text/html"}
       :body    "<h2>Stopped!!</h2>"}))

  (route/not-found "Not Found"))



(defn my-content-type-response
  "Adds a content-type header to response. See: wrap-content-type."
  {:arglists '([response request] [response request options])
   :added "1.2"}
  [resp req & [opts]]
  (if (resp/get-header resp "Content-Type")
    (do (pln :using-header-ctype (resp/get-header resp "Content-Type")
          :for (:uri req))
        resp)
    (let [mime-type (ext-mime-type (:uri req) (:mime-types opts))]
      (pln :my-ctype-providing mime-type)
      (resp/content-type resp (or mime-type "application/octet-stream")))))

(defn my-wrap-content-type
  "Middleware that adds a content-type header to the response if one is not
  set by the handler. Uses the ring.util.mime-type/ext-mime-type function to
  guess the content-type from the file extension in the URI. If no
  content-type can be found, it defaults to 'application/octet-stream'.

  Accepts the following options:

  :mime-types - a map of filename extensions to mime-types that will be
                used in addition to the ones defined in
                ring.util.mime-types/default-mime-types"
  {:arglists '([handler] [handler options])}
  [handler & [opts]]
  (fn [req]
    ;; (pln :classpath (seq (.getURLs (java.lang.ClassLoader/getSystemClassLoader))))
    (pln :my-wrap-content-sees-req!!!! (:uri req) (:content-type req) (keys req) req)
    (when-let [resp (handler req)]
      (println :my-wrap-sees-resp resp)
      (my-content-type-response resp req opts))))

(def app
  (-> app-routes
    ;; (wrap-file "/")
    (wrap-resource "webmx/out")
    (wrap-resource "webmx")
    (wrap-content-type)
    (wrap-defaults site-defaults)))

(defn pln [& args]
  (locking *out*
    (println (str/join " " args))))