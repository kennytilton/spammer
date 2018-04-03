(ns spamux.progress-viewer
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type unbound]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.integrity
             :refer-macros [with-cc with-integrity]
             :refer []]
            [tiltontec.cell.synapse
             :refer-macros [with-synapse]]

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
            [tiltontec.webmx.html :refer [mxu-find-tag]]
            [tiltontec.webmx.widget :refer [tag-checkbox]]

            [spamux.component :refer [fmo fmov current-job-id]]
            [cljs.pprint :as pp]))

(declare json-view stats-displayer)

(defn watched-stats [me]
  (div
    {:hidden (cF (or
                   (not (<mget (md/mxu-find-name me "watch-progress") :on?))
                   (not (<mget (fmo me :starter) :job-id))))}
    {:name   "watcher"
     :reload (cI 0)
     :xhr    (cF (when (and (<mget (fmo me "watch-progress") :on?)
                            (<mget me :reload))
                   (let [job-status (fmov me "job-status")]
                     ;;;(pln :jobstat-val!!!!!!!! job-status)
                     (when (some #{(:status job-status)} ["pending" "running"])
                       (send-xhr :get-runnin
                         (pp/cl-format nil "runningstats?job-id=~a" @current-job-id)
                         {:accept :json})))))

     :stats  (cF+ [:obs (fn-obs
                          (when new
                            ;;(pln :watcher-stats!!! new)
                            (js/setTimeout #(with-cc
                                              (mswap!> me :reload inc)) 1000)))]
               (or
                 (when-let [xhr (<mget me :xhr)]
                   (when-let [r (xhr-response xhr)]
                     (if (= 200 (:status r))
                       (assoc (:body r) :now (.getTime (js/Date.)))
                       {:oops (:status r)})))
                 (when-not (= cache unbound)                ;;(pln :cache-out cache)
                   cache)))}
    (div
      (b "Running stats")
      (stats-displayer "watcher"))))

(defn stats-displayer
  ([source-name]
   (stats-displayer source-name :stats))
  ([source-name source-property]
   (div {:style "margin-left:36px"}
     {:name  "stat-group"
      :stats (cF (<mget (mxu-find-name me source-name) source-property))}

     (for [[lbl vkey fmtr] [["Duration" :run-duration
                             (fn [val]
                               (pp/cl-format nil "~,3f" (/ val 1000.0)))]
                            ["Sent" :sent-ct]
                            ["Dup Email" :rejected-dup-addr]
                            ["High score" :rejected-score]
                            ["High mean" :rejected-overall-mean]
                            ["Span mean" :rejected-span-mean]]]
       (div {:style {:display        "flex",
                     :flex-direction "row"}} {}
         (span {:style   {:min-width "96px"
                          :margin    "2px"}
                :content (str lbl ": ")})
         (span {:style   {:min-width     "72px"
                          :margin        "2px"
                          :padding-right "2px"
                          :text-align    "right"
                          :font-weight   "bold"
                          :background    "white"}
                :content (let [f (or fmtr str)]
                           (cF (let [ss (mxu-find-name me "stat-group")]
                                 (when-let [stats (<mget ss :stats)]
                                   (f (vkey stats))))))}))))))


(defn fails-displayer
  ([source-name]
   (fails-displayer source-name :stats))
  ([source-name source-property]
   (div {:style "margin-left:36px"
         :hidden (cF (or
                       (not (<mget (md/mxu-find-name me "sample-fails") :on?))
                       (not (<mget (fmo me :starter) :job-id))))}
     {:name  "fails-group"
      :fails (cF (let [src (mxu-find-name me source-name)]
                   (let [fails (:fails (<mget src source-property))]
                     (or fails (when (not= cache unbound)
                                 cache)))))}
     (b "Fails")
     (span {:content (cF (str (<mget (fmo me "fails-group") :fails)))}))))
