(ns tiltontec.webmx.example.spamux.core
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
            [webmx.src.tiltontec.webmx.example.spamux.progress-viewer
             :refer [show-stats watch-stats-option watched-stats]]
            [webmx.src.tiltontec.webmx.example.spamux.email-input-builder
             :refer [raw-email-file-builder]]
            [cemerick.url :refer (url url-encode)]
            [cljs.pprint :as pp]))

(declare json-view)

(defn eko [key value]
  (pln :eko!!! key value)
  value)

(defn start-button []
  (button
    {:class   "pure-button"
     :disabled (cF (println :find)
                (let [raw-select (mxu-find-id me "email-file-raw")]
                  (assert raw-select)
                  (let [val (<mget raw-select :value)]
                    (or (nil? val)
                      (= val "<none>")))))

     :onclick #(let [me (do (evt-tag %))]
                 (assert me)
                 (mset!> me :job-key
                   (case (<mget me :job-key)
                     nil :start
                     :start :stop
                     :stop :start)))

     :style   (cF (case (<mget me :job-key)
                    :stop "background:#8f8"
                    :start "background:#f88"
                    "background:#8f8"))

     :content (cF (or (when-let [xhr (<mget me :ae)]
                        (when-let [r (xhr-response xhr)]
                          (if (= 200 (:status r))
                            (:body r)
                            "<b>Something happened.</b>")))
                    "<b>Start</b>"))}
    {:job-key (cI nil)
     :ae      (cF (when-let [job (<mget me :job-key)]
                    (send-xhr
                      (case job
                        :start (str "start?filename="
                                 (let [fw (mxu-find-id me "email-file-raw")]
                                   (assert fw)
                                   (<mget fw :value)))
                        :stop "stop")
                      #_ ;; figure out how to talk to localhost
                      (str (merge
                             (url (str "http://"
                                 (case job
                                   :start "start"
                                   :stop "stop")))
                             #_
                             {:filename
                              (let [fw (mxu-find-id me "email-file-raw")]
                                (assert fw)
                                (<mget fw :value))})))))}))

(defn email-raw-files []
  (div {:class "pure-u-1 pure-u-md-1-3"
        :style "margin-bottom:18px"}
    (label {:for   "email-file-raw"
            :style "margin-right:6px"}
      "File to clean")
    (select {:id       "email-file-raw"
             :class    "pure-input-1-2"
             :onchange #(do
                          (println :emraw (target-value %))
                          (mset!> (evt-tag %) :value (target-value %)))
             :xhr      (cF (send-xhr :get-raws "/rawfiles" {:accept :json}))
             :options  (cF (when-let [xhr (<mget me :xhr)]
                             (when-let [r (xhr-response xhr)]
                               (when (= 200 (:status r))
                                 (:body r)))))}
      {:value (cI "em-100000-100.edn")} ;; todo cleanup
      #_(option {:enabled "false" :selected true :value "<none>"}
        "Pick a file, any file.")
      (map (fn [n s]
             (option {:selected (= n 0)} s))
        (range)
        (<mget me :options)))))


(defn matrix-build! []
  (md/make ::spamux
    :mx-dom (cFonce (md/with-par me
                      (let [mtx me]
                        (assert mtx)
                        [(div {:style "margin:36px"}
                           (h1 "Hello, SpamUX!")
                           (raw-email-file-builder)
                           (p "First, pick a file to make spam-detector-proof.")
                           (email-raw-files)
                           (start-button)
                           (watch-stats-option me)
                           (watched-stats me)
                           #_(show-stats))])))))
