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
            [cljs.pprint :as pp]))

(declare json-view)

(defn- eko [key value]
  (pln :eko!!! key value)
  value)

(declare start-button job-status)

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
         :style "background:white;padding:6px"}))

    (start-button)
    (job-status)))

(defn fmo [me id-name]
  (or (mxu-find-id me id-name)
    (mxu-find-name me id-name)
    (throw (str "fmo> not id or name " id-name))))

(defn fmov
  ([me id-name]
   (fmov me id-name :value))
  ([me id-name slot-name]
   (when-let [mx (fmo me id-name)]
     (if (contains? @mx slot-name)
       (<mget mx slot-name)
       (throw (str "fmov> " id-name " lacks " slot-name " property"))))))

(defonce job-id (atom (* 100 (rand-int 10000))))

(defn start-button []
  (button
    {:class    "pure-button"
     :disabled (cF (let [raw-file (fmov me "email-file-raw")]
                     (or (nil? raw-file)
                       (= raw-file "<none>"))))

     :onclick  #(let [me (evt-tag %)
                      jobstat (fmov me "job-status")]
                  (pln :start-sees (<mget me :job-key)
                    (fmov me "job-status"))
                  (mset!> me :job-key
                    (cond
                      (nil? jobstat) :start
                      (= "running" (:status jobstat)) :stop
                      :default (do (pln :start-defaulting jobstat)
                                   :start))))

     :style    (cF (let [ltgreen "background:#8f8"
                         ltred "background:#f88"]
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
     :job-key   (cI nil)

     :jobstatus (cF (fmov me "job-status"))

     :xhr       (cF (when-let [job (<mget me :job-key)]
                      (send-xhr
                        (case job
                          :start (let [uri (pp/cl-format nil "start?jobid=~d&outputp=~a&logfail=~a&filename=~a"
                                             (swap! job-id inc)
                                             (fmov me "outputp" :on?)
                                             (fmov me "log-fail-p" :on?)
                                             (fmov me "email-file-raw"))]
                                   (pln :starting! uri)
                                   uri)

                          :stop "stop"))))}))

(defn job-status []
  (p
    {:content (cF (or (when-let [s (<mget me :jobstatus)]
                        (str/capitalize (name (:status s))))
                    "Initial"))
     :style   "margin:12px"}
    {:name      "job-status"
     :value     (cF (<mget me :jobstatus))
     :recheck   (cI 0)
     :chk       (cF (when (and (= :start (<mget (fmo me :starter) :job-key))
                               (<mget me :recheck))
                      ;; (pln :chking-job!!!!)
                      (send-xhr :get-runnin
                        (pp/cl-format nil "checkjob?jobid=~d" @job-id)
                        {:accept :json})))

     :jobstatus (cF+ [:obs (fn-obs
                             ;;(pln :new-jstat new)
                             (when (some #{(:status new)} ["pending" "running"])
                               (js/setTimeout #(with-cc
                                                 ;;(pln :rechecking!)
                                                 (mswap!> me :recheck inc)) 500)))]
                  (when-let [xhr (<mget me :chk)]
                    (if-let [r (xhr-response xhr)]
                      (do
                        ;;(pln :chk! (:status r) (:body r))
                        (if (= 200 (:status r))
                          {:when   (now)
                           :status (:status (:body r))}
                          {:status :error}))
                      cache)))}))

(defn email-raw-files []
  (div {:class "pure-u-1 pure-u-md-1-3"
        :style "margin-bottom:18px"}
    (label {:for   "email-file-raw"
            :style "margin-right:6px"}
      "File to clean")
    (select {:id       "email-file-raw"
             :class    "pure-input-1-2"
             :onchange #(mset!> (evt-tag %) :value (target-value %))
             :xhr      (cF (send-xhr :get-raws "rawfiles" {:accept :json}))
             }
      {:value (cI "em-100k.edn") ;; todo fix that this has to align with selected below
       :options  (cF (when-let [xhr (<mget me :xhr)]
                       (when-let [r (xhr-response xhr)]
                         (when (= 200 (:status r))
                           (:body r)))))}
      [(option {:enabled "false" :value "<none>"} "Pick a file, any file.")
       (map (fn [n s]
              (option {:selected (= s "em-100k.edn")} s))
         (range)
         (<mget me :options))])))




