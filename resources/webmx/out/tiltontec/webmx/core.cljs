(ns tiltontec.webmx.core
  (:require
    [clojure.string :as str]

    [taoensso.tufte :as tufte :refer [defnp p profiled profile]]
    [cljs-time.coerce :refer [from-long to-string] :as tmc]


    [tiltontec.model.core :as md]

    [goog.dom :as dom]
    [tiltontec.webmx.html :refer [tag-dom-create *webmx-trace*]]

    ;;[tiltontec.webmx.example.pipeline.core :as app] ;; use pipeline.html to get css
    [tiltontec.webmx.example.spamux.core :as app]
    ;;[tiltontec.webmx.example.startwatch :as app] ;; use startwatch.html to get css

    )
  (:import [goog.date UtcDateTime]))

(enable-console-print!)

(tufte/add-basic-println-handler! {})

(let [root (dom/getElement "tagroot")

      app-matrix (app/matrix-build!)

      app-dom (binding [*webmx-trace* nil]                  ;; <-- set to nil if console too noisy
                (tag-dom-create
                  (md/<mget app-matrix :mx-dom)))

      start-ms (.getTime (js/Date.))
      start$ (tmc/to-string (tmc/from-long start-ms))]

  ;; (prn :start!!!! start-ms start$)

  ;;(prn :app-dom!!!! (str app-dom))

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom)
  (when-let [route-starter (md/<mget app-matrix :router-starter)]
    (prn :starting-router)
    (route-starter)))
