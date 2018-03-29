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
                     mxi-find mxu-find-name mxu-find-type]
             :as md]

            [tiltontec.xhr
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

            [tiltontec.webmx.gen :refer [evt-tag target-value]
             :refer-macros [h1 h2 h3 h4 h5 input div span button p b]]
            [tiltontec.webmx.html :refer [mxu-find-tag]]
            [tiltontec.webmx.widget :refer [tag-checkbox]]
            [cljs.pprint :as pp]))

(declare json-view)

(defn start-button []
  (button
    {:class "pure-button"
     :onclick #(let [me (do (evt-tag %))]
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
     :ae      (cF+ [:obs (fn-obs
                           (println :ae-obs new old))]
                (when-let [job (<mget me :job-key)]
                  (send-xhr (case job
                              :start "/start"
                              :stop "/stop"))))}))

(defn show-stats []
  (div {:style "margin-top:36px"}
    (button
      {:name    "stats-button"
       :class "pure-button"
       :onclick #(let [me (do (evt-tag %))]
                   (mset!> me :job-key :get-stats))
       :content "<b>Stats Snapshot</b>"}

      {:job-key (cI nil :ephemeral? true)

       :xhr     (cF+ [:obs (fn-obs
                             (println :xhr-obs new old))]
                  (when-let [job (<mget me :job-key)]
                    ;;(println :sending!!!start job)
                    (send-xhr :get-stats "/batchstats" {:accept :json})))

       :stats   (cF (when-let [xhr (<mget me :xhr)]
                      (when-let [r (xhr-response xhr)]
                        #_(println
                            (if (= 200 (:status r))
                              (:body r)
                              {:oops r}))
                        (if (= 200 (:status r))
                          (:body r)
                          {:oops (:status r)}))))})

    (div
      (json-view "Latest batch statistics"
        (<mget (md/mxu-find-name me "stats-button") :stats)))))

(defn json-view [title json]
  (div {:hidden (cF (nil? json))}
    (h3 title)
    (for [[k v] json]
      (div {:style {:display        "flex",
                    :flex-direction "row"}} {}
        (span {:style {:min-width "144px"
                       :margin "2px"}
               :content (str (str/join " "
                               (map str/capitalize
                                 (str/split (name k) #"-"))) ": ")})
        (span {:style {:min-width "72px"
                       :margin "2px"
                       :padding-right "2px"
                       :text-align "right"
                       :font-weight "bold"
                       :background "white"}
               :content (str v)})))))

(defn watch-stats-option [me]
  (tag-checkbox me "watch-progress"
    "Watch progress" false
    {:name  "watch-progress"
     :style "font-size:1.2em;margin:24px"}))

(defn watched-stats [me]
  (div {:hidden (cF (not (<mget (md/mxu-find-name me "watch-progress") :on?)))}
    {:name   "watcher"
     :reload (cI 0)                                         ;;d/f hackkk
     :xhr    (cF (when (and (<mget (md/mxu-find-name me "watch-progress") :on?)
                         (<mget me :reload))
                   ;;(pln :requesting-running!!!)
                   (send-xhr :get-runnin "/runningstats" {:accept :json})))
     :stats  (cF+ [:obs (fn-obs
                          (when new
                            (js/setTimeout #(with-cc
                                              (pln :reload!)
                                              (mswap!> me :reload inc)) 500)))]
               (or
                 (when-let [xhr (<mget me :xhr)]
                   ;;(pln :seeing-new-xhr)
                   (when-let [r (xhr-response xhr)]
                     (if (= 200 (:status r))
                       (assoc (:body r) :now (.getTime (js/Date.)))
                       {:oops (:status r)})))
                 (when-not (= cache unbound)                ;;(pln :cache-out cache)
                   cache)))}
    (div
      (h2 "Running stats")

      (div {:style {:display        "flex",
                    :flex-direction "row"}}
        (for [[group vkey] [["Latest" :latest]
                            ["Total" :cumulative]
                            ]]
          (div {:style "margin-left:36px"}
            {:name  "stat-group"
             :stats (cF (let [raw (<mget (mxu-find-name me "watcher") :stats)]
                          (vkey raw)))}
            (h3 group)
            (for [[lbl vkey] [["Duration" :run-duration]
                              ["Sent" :sent-ct]
                              ["Dup Email" :rejected-dup-addr]
                              ["High score" :rejected-score]
                              ["High mean" :rejected-overall-mean]
                              ["Span mean" :rejected-span-mean]]]
              (div {:style {:display        "flex",
                            :flex-direction "row"}} {}
                (span {:style {:min-width "96px"
                               :margin "2px"}
                       :content (str lbl ": ")})
                (span {:style {:min-width "72px"
                               :margin "2px"
                               :padding-right "2px"
                               :text-align "right"
                               :font-weight "bold"
                               :background "white"}
                       :content (cF (let [ss (mxu-find-name me "stat-group")]
                                      (when-let [stats (<mget ss :stats)]
                                        (str (vkey stats)))))})))))))))


(defn matrix-build! []
  ;;;;(pline/pipe-go)
  (md/make ::spamux
    :mx-dom (cFonce (md/with-par me
                      (let [mtx me]
                        (assert mtx)
                        [(div {:style "margin:36px"}
                           (h1 "Hello, SpamUX!")
                           (start-button)
                           (watch-stats-option me)
                           (watched-stats me)
                           #_ (show-stats))])))))
