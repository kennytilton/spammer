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
    [tiltontec.cell.observer :refer-macros [fn-obs]]

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
     :refer [job-status-view stats-displayer fails-displayer]]

    [spamux.email-input-builder
     :refer [raw-email-file-builder]]

    [spamux.job-control
     :refer [jcl-panel email-raw-files]]

    [spamux.job :refer [make-xhr-job]]))


(enable-console-print!)

(tufte/add-basic-println-handler! {})

(def hbox {:display "flex"
           :flex-direction "row"})

(defn matrix-build! []
  (md/make ::spamux
    ;; start with one job at a time
    :job (cI nil)

    :mx-dom (cFonce (md/with-par me
                      (let [mtx me]
                        [(div {:style "margin:36px"}
                           (h1 {:class "bouncer"
                                :style "text-align: center"}
                             "Spam UX")
                           (h3 {:style "text-align: center"}
                             "<i>Detect yourself. Before they do.&trade;")

                           (div {:class "fazer"
                                 :style (merge hbox
                                          {:margin-top "24px"
                                           :align-items "stretch"})}
                             (raw-email-file-builder)
                             (jcl-panel))

                           (div {:class "fazer"
                                 :style (merge hbox
                                          {:margin-top "24px"})}

                             (job-status-view "Job status")
                             (stats-displayer)
                             (fails-displayer)))])))))

(let [root (dom/getElement "tagroot")
      app-matrix (matrix-build!)
      app-dom (binding [*webmx-trace* nil]                  ;; <-- set to nil if console too noisy
                (tag-dom-create
                  (md/<mget app-matrix :mx-dom)))

      start-ms (.getTime (js/Date.))
      start$ (tmc/to-string (tmc/from-long start-ms))]

  (set! (.-innerHTML root) nil)
  (dom/appendChild root app-dom)
  (when-let [route-starter (md/<mget app-matrix :router-starter)]
    (prn :starting-router)
    (route-starter)))

