(ns spamux.email-input-builder
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type unbound]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.integrity
             :refer-macros [with-cc with-integrity]
             :refer []]

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


            [cemerick.url :refer (url url-encode)]
            [cljs.pprint :as pp]))

(declare build-email-file-button)

(defn raw-email-file-builder []
  (div {:style "border:2px;border-color:red"}
    (p "Build a new file, if you like.")
    (input
      {:name "email-volume"
       :type "number"
       :placeholder "Number of K emails"
       :onchange #(do
                    ;; todo validate
                    (println :emk (target-value %))
                    (mset!> (evt-tag %) :value (target-value %)))}
      {:value (cI nil)})
    (build-email-file-button)))

(defn build-email-file-button []
  (button
    {:class   "pure-button"
     :style "margin-left:18px"
     :disabled (cF (nil? (<mget (mxu-find-name me "email-volume") :value)))

     :onclick #(let [me (do (evt-tag %))]
                 (assert me)
                 (mset!> me :job-key
                   (case (<mget me :job-key)
                     nil :start
                     :start :stop
                     :stop :start)))


     :content (cF (or (when-let [xhr (<mget me :ae)]
                        (when-let [r (xhr-response xhr)]
                          (if (= 200 (:status r))
                            (:body r)
                            (str "<b>Something happened: " (:status r) "</b>"))))
                    "<b>Build</b>"))}

    {:job-key (cI nil)
     :ae      (cF (when-let [job (<mget me :job-key)]
                    (send-xhr
                      (case job
                        :start (str "build?volumek="
                                 (let [fw (mxu-find-name me "email-volume")]
                                   (assert fw)
                                   (<mget fw :value)))
                        :stop "stop"))))}))
