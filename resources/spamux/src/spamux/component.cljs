(ns spamux.component
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln now]]
            [tiltontec.cell.base :refer [ia-type unbound]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.integrity
             :refer-macros [with-cc with-integrity]
             :refer []]

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

            [cemerick.url :refer (url url-encode)]
            [cljs.pprint :as pp]))

(def current-job-id (atom nil))

(declare fmo)

(defn job-status-view [md-name title job-starter]
  (div {:style "min-width:144px"}
    (b title)
    (p
      {:content (cF (or (when-let [s (<mget me :jobstatus)]
                          (str/capitalize (name (:status s))))
                      "Initial"))
       :style   "margin:12px;font-size:1em"}
      {:name      md-name
       :value     (cF (<mget me :jobstatus))
       :recheck   (cI 0)
       :chk       (cF (when-let [job-id (and (<mget me :recheck)
                                             (<mget (fmo me job-starter) :job-id))]
                        (send-xhr :get-runnin
                          (str "checkjob?job-id=" job-id))))

       :jobstatus (cF+ [:obs (fn-obs
                               (when (some #{(:status new)} ["pending" "running"])
                                 (js/setTimeout
                                   #(with-cc
                                      (mswap!> me :recheck inc)) 50)))]
                    (when-let [xhr (<mget me :chk)]
                      (if-let [r (xhr-response xhr)]
                        (if (= 200 (:status r))
                          (merge {:when (now)}
                            (:body r))
                          (throw "job-start failed"))
                        cache)))

       :job-id    (cF (when-let [js (<mget me :jobstatus)]
                        (:job-id js)))})))
