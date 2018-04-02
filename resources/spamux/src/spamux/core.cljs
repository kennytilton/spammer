(ns spamux.core
  (:require
    ;; --- utis ------------
    ;; [clojure.string :as str]
    [cljs.pprint :as pp]
    [taoensso.tufte :as tufte]
    [goog.dom :as dom]
    [cljs-time.coerce :as tmc]

    ;; --- matrix ------------
    [tiltontec.util.core :refer [pln]]
    [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]

    [tiltontec.model.core
     :refer [matrix mx-par <mget <mget mset!> mset!> mswap!>
             mxi-find mxu-find-name mxu-find-type mxu-find-id]
     :as md]

    ;; --- mxWeb and XHR


    [tiltontec.webmx.gen :refer [evt-tag target-value]
     :refer-macros [h1 h2 h3 h4 h5 input div span button p b a li ul
                    select option label]]

    [tiltontec.webmx.html :refer [tag-dom-create *webmx-trace*]]

    [tiltontec.webmx.widget :refer [tag-checkbox]]

    ;; --- the beef --------------------------------
    [spamux.progress-viewer
     :refer [show-stats watch-stats-option watched-stats]]

    [spamux.email-input-builder
     :refer [raw-email-file-builder]]

    [spamux.job-control
     :refer [jcl-panel email-raw-files]]))

(enable-console-print!)

(tufte/add-basic-println-handler! {})

(defn matrix-build! []
  (md/make ::spamux
    :mx-dom (cFonce (md/with-par me
                      (let [mtx me]
                        (assert mtx)
                        [(div {:style "margin:36px"}
                           (h1 "SpamUX")
                           (p "<i>Detect yourself before they do.")
                           (raw-email-file-builder)
                           (p "First, pick a file to make spam-detector-proof.")
                           (email-raw-files)
                           (jcl-panel)
                           (div {:style {:display        "flex"
                                         :flex-direction "row"}}
                             (div {:style "min-width:288px"}
                               (watch-stats-option me)
                               (watched-stats me))
                             (show-stats)))])))))

(let [root (dom/getElement "tagroot")

      app-matrix (matrix-build!)

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

