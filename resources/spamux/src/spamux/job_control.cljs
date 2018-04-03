(ns spamux.job-control
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
            [cljs.pprint :as pp]
            [spamux.component :refer [ fmo fmov current-job-id]]))

(def jobs (atom {}))


(defn- eko [key value]
  (pln :eko!!! key value)
  value)

(declare start-button)

;; todo keep option choices in a cookie
(defn jcl-panel []
  (div {:style {:padding      "9px"
                :border       "solid"
                :border-width "1px"
                :border-color "gray"}}
    (div {:style "display:flex; flex-direction:row"}
      (tag-checkbox me "outputp"
        "Generate output?" true
        {:name  "outputp"
         :style "background:white;padding:6px"})

      (tag-checkbox me "log-fail-p"
        "Log fails?" false
        {:name  "log-fails"
         :style "background:white;padding:6px"})

      (tag-checkbox me "sample-fail-p"
        "Sample fails?" true
        {:name  "sample-fails"
         :style "background:white;padding:6px"})

      (tag-checkbox me "watch-progress"
        "Watch progress" true
        {:name  "watch-progress"
         :style "background:white;padding:6px"})

      (start-button))

    #_ (div {:style {:display        "flex"
                  :flex-direction "row"}}

      )))

(defn start-button []
  (button
    {:class    "pure-button"
     :disabled (cF (let [raw-file (fmov me "email-file-raw")]
                     (or (nil? raw-file)
                       (= raw-file "<none>"))))

     :onclick  #(let [me (evt-tag %)
                      jobstat (fmov me "job-status")]

                  (mset!> me :job-key
                    (cond
                      (nil? jobstat)
                      :start

                      (= "running" (:status jobstat))
                      :stop

                      :default :start)))

     :style    (cF (let [ltgreen "margin-left:24px;background:#8f8"
                         ltred "margin-left:24px;background:#f88"]
                     (or
                       (when-let [js (<mget me :jobstatus)]
                         (case (:status js)
                           "running" ltred
                           ltgreen))
                       ltgreen)))

     :content  (cF (or
                     (when-let [js (<mget me :jobstatus)]

                       (str "<b>" (case (:status js)
                                    "running" "Stop"
                                    "Start") "</b>"))
                     "<b>Start!</b>"))
     }
    {:name      :starter
     :job-key   (cI nil :ephemeral? true)
     :jobstatus (cF (fmov me "job-status"))

     :start     (cF (when-let [job (<mget me :job-key)]
                      (send-xhr
                        (case job
                          :start (pp/cl-format nil "start?job-type=clean&outputp=~a&logfail=~a&filename=~a"
                                   (fmov me "outputp" :on?)
                                   (fmov me "log-fail-p" :on?)
                                   (fmov me "email-file-raw"))

                          :stop (when-let [jid @current-job-id]
                                  (pp/cl-format nil "stop?job-id=~a" jid))))))

     :job-id    (cF+ [:obs (fn-obs (when new
                                     (reset! current-job-id new)))]
                  (when-let [xhr (<mget me :start)]
                    (when-let [r (xhr-response xhr)]
                      (if (= 200 (:status r))
                        (:job-id (:body r))
                        (throw (str "job start failed:" r))))))}))

(defn email-raw-files []
  (div {:class "pure-u-1 pure-u-md-1-3"
        :style "margin-bottom:18px"}
    (label {:for   "email-file-raw"
            :style "margin-right:6px"}
      "File to clean")
    (select {:id       "email-file-raw"
             :class    "pure-input-1-2"
             :style    "background:white"
             :onchange #(mset!> (evt-tag %) :value (target-value %))
             :xhr      (cF (let [bstat (<mget (mxu-find-name me :builder) :jobstatus)]
                             (pln :rawfiles-sees bstat)
                             (send-xhr :get-raws "rawfiles")))
             }
      {:value   (cI "em-1k.edn")                          ;; todo fix that this has to align with selected below
       :options (cF (when-let [xhr (<mget me :xhr)]
                      (when-let [r (xhr-response xhr)]
                        (when (= 200 (:status r))
                          (:body r)))))}
      [(option {:enabled "false" :value "<none>"} "Pick a file, any file.")
       (map (fn [n s]
              (option {:selected (= s "em-1k.edn")} s))
         (range)
         (<mget me :options))])))

