(ns spamux.email-input-builder
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln err]]
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
            [spamux.component :refer [job-status-view current-job-id]]
            [tiltontec.util.core :as ut]))

(declare build-email-file-button build-status)

(defn raw-email-file-builder []
  (div {:style {:padding      "9px"
                :border       "solid"
                :border-width "1px"
                :border-color "gray"}}
    (p (b "1. Build a new file, if you like."))
    (span "File size in thousands: ")
    (input
      {:name        "email-volume"
       :type        "number"
       :style "text-align:right"
       :placeholder "Number of K emails"
       :oninput     #(mset!> (evt-tag %) :value (target-value %))
       }
      {:value (cI nil)})
    (p (build-email-file-button))
    (job-status-view "build-status" "Build status" :builder)))

(defn build-email-file-button []
  (button
    {:class    "pure-button"
     :style    "margin-left:18px"
     :disabled (cF (nil? (fmov me "email-volume")))

     :onclick  #(let [me (do (evt-tag %))]
                  (assert me)
                  (cond
                    (> (fmov me "email-volume") 5000)
                    (js/alert "You will have to hack the code to exceed 5000k")

                    :default
                    (mset!> me :job-key
                      (case (<mget me :job-key)
                        nil :start
                        :start :stop
                        :stop :start))))

     :content  (cF (or (when-let [xhr (<mget me :xhr)]
                         (when-let [r (xhr-response xhr)]
                           (if (= 200 (:status r))
                             (:body r)
                             (str "<b>Something happened: " (:status r) "</b>"))))
                     "<b>Build</b>"))}

    {:name      :builder
     :job-key   (cI nil :ephemeral? true)
     :jobstatus (cF (fmov me "build-status"))

     :start     (cF (when-let [job (<mget me :job-key)]
                      (send-xhr
                        (case job
                          :start (pp/cl-format nil "build?volumek=~a"
                                   (let [fw (mxu-find-name me "email-volume")]
                                     (assert fw)
                                     (<mget fw :value)))

                          :stop (pp/cl-format nil "stop?job-id=~a"
                                  (<mget me :job-id)))
                        {:accept :json})))

     :job-id    (cF+ [:obs (fn-obs (when new
                                     (reset! current-job-id new)))]
                  (when-let [xhr (<mget me :start)]
                    (when-let [r (xhr-response xhr)]
                      (if (= 200 (:status r))
                        (:job-id (:body r))
                        (ut/err (str "job start failed:" r))))))
     :xhr       (cF (when-let [job (<mget me :build-key)]
                      (send-xhr
                        (case job
                          :start (str "build?volumek="
                                   (let [fw (mxu-find-name me "email-volume")]
                                     (assert fw)
                                     (<mget fw :value)))
                          :stop "buildstop"))))}))


