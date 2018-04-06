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
                     mxi-find mxu-find-name mxu-find-type mxu-find-id
                     fmo fmov]
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

            [cljs.pprint :as pp]

            [spamux.job :refer [mtx-job mtx-job-id mtx-job-type]]
            [spamux.util :refer [if-bound xhr-poller mx-find-matrix]]))

(declare json-view stats-displayer)

(defn job-status-view [title]
  (div {:style "min-width:144px"
        :hidden (cF (nil? (<mget me :value)))}

    {:value (cF (when-let [job (mtx-job me)]
                  (when-let [s (<mget job :status)]
                    (str/capitalize (:status s)))))}

    (b title)
    (p
      {:content (cF (<mget (mx-par me) :value))
       :style   "margin:12px;font-size:1em"})))

(defn watched-stats [me]
  (div
    {:hidden (cF (not (and
                        (<mget (md/mxu-find-name me "watch-progress") :on?)
                        (when-let [job (mtx-job me)]
                          (= :clean (:job-type @job))
                          (<mget job :job-id)))))}
    (div
      (b "Running stats")
      (stats-displayer))))


(defn stats-displayer []
  (div {:style "margin-left:36px"}
    {:name  "stat-group"
     :stats (cF
              (when-let [job-id (and
                                  (<mget (fmo me "watch-progress") :on?)
                                  (= :clean (mtx-job-type me))
                                  (mtx-job-id me))]

                (let [poller (xhr-poller :poll-running
                               (str "runningstats?job-id=" job-id)
                               (fn [response]
                                 (pln :fails!!!! (:fails response))
                                 (not= "complete"
                                   (:status response)))
                               3000)]
                  (<mget poller :response))))}

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
                          (cF (when-let [ss (mxu-find-name me "stat-group")]
                                (pln :bam!!ss ss)
                                (when-let [stats (<mget ss :stats)]
                                  (f (vkey stats))))))})))))

(def spam-format "~{<p :style 'background:#FCC;min-width:250px;max-width:250px'>~a</p>~}")

(defn fails-displayer []
  (div {:style  "margin-left:36px"
            :hidden (cF (not (and
                               (<mget (md/mxu-find-name me "sample-fails") :on?)
                               (mtx-job-id me)
                               (= :clean (mtx-job-type me)))))}
        {:name  "fails-group"
         :fails (cF (let [src (mxu-find-name me "stat-group")]
                      (assert src)
                      (let [fails (:fails (<mget src :stats))]
                        (or fails (if-bound cache)))))}
        (b "Fails")
        (div {:style   "background:#fdd"
              :content (cF (pp/cl-format nil spam-format
                             (map #(with-out-str (pp/pprint %))
                               (<mget (fmo me "fails-group") :fails))))})))
