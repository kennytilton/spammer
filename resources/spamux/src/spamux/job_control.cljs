(ns spamux.job-control
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln now]]
            [tiltontec.cell.base :refer [ia-type unbound when-bound ]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]
            [tiltontec.cell.integrity
             :refer-macros [with-cc with-integrity]
             :refer []]
            [tiltontec.cell.synapse
             :refer-macros [with-synapse]
             :refer []]

            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!> mswap!>
                     fasc mxi-find mxu-find-name mxu-find-type mxu-find-id
                     fmo fmov]
             :as md]

            [tiltontec.xhr
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response
                     syn-xhr-ok-body  xhr?-ok-body xhr?-response]]

            [tiltontec.webmx.gen :refer [evt-tag target-value]
             :refer-macros [h1 h2 h3 h4 h5 input div span button p b a li ul
                            select option label]]
            [tiltontec.webmx.html :refer [mxu-find-tag]]
            [tiltontec.webmx.widget :refer [tag-checkbox]]

            [cemerick.url :refer (url url-encode)]
            [cljs.pprint :as pp]

            [spamux.job :refer [mtx-job make-xhr-job mtx-job-running? mtx-job-id
                                job-start-button]]))

;;; --- builder interface --------------------------

(defn builder-panel []
  (div {:style {:padding      "9px"
                :min-width "350px"
                :border       "solid"
                :border-width "1px"
                :border-color "gray"}}
    (p (b "1. Build a new file to be cleaned."))

    (label {:for   "email-volume"
            :style "margin-right:6px"}
      "File size in thousands:")
    (input
      {:id "email-volume"
       :name        "email-volume"
       :type        "number"
       :style "text-align:right"
       :placeholder "Number of K emails"
       :oninput     #(mset!> (evt-tag %) :value (target-value %))
       }
      {:value (cI nil)})
    (p (build-email-file-button))))

(defn build-email-file-button []
  (job-start-button :build
    (fn [me]
      (nil? (fmov me "email-volume")))
    (fn [me]
      (make-xhr-job {
                     :job-type   :build
                     :uri (pp/cl-format nil "start?job-type=build&volumek=~a"
                            (let [fw (mxu-find-name me "email-volume")]
                              (assert fw)
                              (<mget fw :value)))
                     }))))

(declare  email-raw-files)

(defn cleaner-panel []
  (div {:style {:min-width "350px"
                :margin-left  "24px"
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
        "Generate output?" false
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

    (job-start-button :clean
      (fn [me]
        (let [raw-file (fmov me "email-file-raw")]
          (or (nil? raw-file)
            (= raw-file "<none>"))))
      (fn [me]
        (make-xhr-job {:job-type :clean
                       :uri      (pp/cl-format nil
                                   "start?job-type=clean&filename=~a&outputp=~a&logfail=~a"
                                   (fmov me "email-file-raw")
                                   (fmov me "output?" :on?)
                                   (fmov me "log-fails?" :on?))})))))



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
      {:value   (cI nil #_ "em-100k.edn")
       :options (cF (let [menu me
                          xhr (with-synapse (:getraws)
                                (when (or (when-let [job (mtx-job menu)]
                                            (and (= :build (:job-type @job))
                                                 (= "complete" (:status (<mget job :status)))))
                                        (= cache unbound))  ;; force initial load
                                  (send-xhr :get-raws "rawfiles")))]
                      (or (xhr?-ok-body xhr)
                        (when-bound cache))))}

      [(option {:enabled "false"
                :selected true
                :value   "<none>"} "Pick a file, any file.")
       (map (fn [s]
              (option {:selected false #_ (= s "em-100k.edn")} s))
         (<mget me :options))])))

