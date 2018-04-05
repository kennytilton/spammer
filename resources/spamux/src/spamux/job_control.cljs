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
                     fasc mxi-find mxu-find-name mxu-find-type mxu-find-id
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
            [spamux.util
             :refer [mx-find-matrix xhr?-ok-body xhr?-response]]
            [spamux.job :refer [make-job]]))

(declare start-button email-raw-files)

(defn jcl-panel []
  (pln :jclp tiltontec.model.core/*par*)
  (div {:style {:margin-top   "12px"
                :padding      "9px"
                :border       "solid"
                :border-width "1px"
                :border-color "gray"}}
    (div
      (p "<b>2. Configure the cleaning.</b>")
      (email-raw-files))
    (div {:style "display:flex; flex-direction:row"}
      (span "Job options: ")
      (tag-checkbox me "output?"
        "Generate output?" true
        {:name  "output?"
         :style "background:white;padding:6px"})

      (tag-checkbox me "log-fails?"
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
         :style "background:white;padding:6px"}))

    (start-button)))

(defn start-button []
  (pln :starter tiltontec.model.core/*par*)
  (button
    {:class    "pure-button"
     :disabled (cF (let [raw-file (fmov me "email-file-raw")]
                     (or (nil? raw-file)
                       (= raw-file "<none>"))))

     :onclick  #(let [me (evt-tag %)]
                  (mset!> (mx-find-matrix me) :job
                    #_ (make-job {:filename "em-4k.edn"})
                    (make-job {
                               :job-type   :clean
                               :filename   (fmov me "email-file-raw")
                               :output?    (fmov me "output?" :on?)
                               :log-fails? (fmov me "log-fails?" :on?)
                               })))

     :style    (cF (let [ltgreen "margin-left:24px;background:#8f8"
                         ltred "margin-left:24px;background:#f88"]
                     ;; todo make better
                     (or
                       (if-let [info nil #_ (fmov me :job-info)]
                         (case (:status info)
                           "running" ltred
                           ltgreen))
                       ltgreen)))

     :content  (cF "Clean" #_(str/string-capitalize (<mget me :action)))
     }
    {:name   :starter
     :action :start #_ (cF (if-let [info (fmov me :job-info)]
                   (case (:status info)
                     "running" :stop
                     :start)
                   :start))
     }))

(defn job-info [title job-starter]
  (div {:style "min-width:144px"}
    (b title)
    (p
      {:content (cF (or #_(when-let [s (<mget me :jobstatus)]
                            (str/capitalize (name (:status s))))
                      "Initial"))
       :style   "margin:12px;font-size:1em"}
      {:name    :job-info
       :value   (cF (<mget me :info))
       })))

#_(when-let [google (with-synapse (:s-goog)
                      (send-unparsed-xhr :s-goog "http://google.com" false))])

(defn email-raw-files []
  (div {:class "pure-u-1 pure-u-md-1-3"
        :style "margin-bottom:18px"}

    (label {:for   "email-file-raw"
            :style "margin-right:6px"}
      "File to clean:")

    (select {:id       "email-file-raw"
             :class    "pure-input-1-2"
             :style    "background:white"
             :onchange #(mset!> (evt-tag %) :value (target-value %))}
      {:value   (cI "em-4k.edn")
       :reload  nil ;; hhack (cF (:status (<mget (mxu-find-name me :builder) :jobstatus)))
       :xhr     (cF (let [bstat (<mget me :reload)]
                      (send-xhr :get-raws "rawfiles")))

       :options (cF (xhr?-ok-body (<mget me :xhr)))}

      [(option {:enabled  "false"
                :selected true?
                :value    "<none>"} "Pick a file, any file.")
       (map (fn [n s]
              (option {:selected (= s "em-4k.edn")} s))
         (range)
         (<mget me :options))])))