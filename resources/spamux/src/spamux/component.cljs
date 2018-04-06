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
            [cljs.pprint :as pp]

            [spamux.util :refer [xhr?-ok-body if-bound mx-find-matrix]]
            [spamux.job :refer [mtx-job make-xhr-job]]
            ))


(defn job-status-view [title job-type]
  (div {:style "min-width:144px"
        :hidden (cF (nil? (<mget me :value)))}

    {:value (cF (when-let [job (mtx-job me)]
                  (when (= job-type (:job-type @job))
                    (when-let [s (<mget job :status)]
                      (str/capitalize (:status s))))))}

    (b title)
    (p
      {:content (cF (<mget (mx-par me) :value))
       :style   "margin:12px;font-size:1em"})))
