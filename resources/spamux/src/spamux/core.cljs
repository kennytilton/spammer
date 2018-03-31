(ns spamux.core
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type unbound]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]

            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!> mswap!>
                     mxi-find mxu-find-name mxu-find-type mxu-find-id]
             :as md]

            [tiltontec.xhr
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

            [tiltontec.webmx.gen :refer [evt-tag target-value]
             :refer-macros [h1 h2 h3 h4 h5 input div span button p b a li ul
                            select option label]]

            [tiltontec.webmx.html :refer [tag-dom-create *webmx-trace*]]

            [tiltontec.webmx.widget :refer [tag-checkbox]]

            [cljs.pprint :as pp]
            [taoensso.tufte :as tufte]
            [goog.dom :as dom]
            [cljs-time.coerce :as tmc]

            [spamux.mx-builder :as app]))

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

