(ns tiltontec.webmx.example.spamux.core
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type]]
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
    {:onclick #(let [me (do (evt-tag %))]
                 (mset!> me :job-key
                   (case (<mget me :job-key)
                     nil :start
                     :start :stop
                     :stop :start)))

     :style   (cF (case (<mget me :job-key)
                    :stop "background:green"
                    :start "background:red"
                    "background:green"))

     :content (cF (or (when-let [xhr (<mget me :ae)]
                        (when-let [r (xhr-response xhr)]
                          (if (= 200 (:status r))
                            (:body r)
                            "<b>Something happened.</b>")))
                    "<h2>Start</h2>"))}
    {:job-key (cI nil)
     :ae      (cF+ [:obs (fn-obs
                           (println :ae-obs new old))]
                (when-let [job (<mget me :job-key)]
                  (println :sending!!!-start job)
                  (send-xhr (case job
                              :start "/start"
                              :stop "/stop"))))}))

(defn show-stats []
  (div
    (button
      {:name    "stats-button"
       :onclick #(let [me (do (evt-tag %))]
                   (mset!> me :job-key :get-stats))
       :content "<b>See da Stats</b>"}

      {:job-key (cI nil :ephemeral? true)

       :xhr     (cF+ [:obs (fn-obs
                             (println :xhr-obs new old))]
                  (when-let [job (<mget me :job-key)]
                    (println :sending!!!start job)
                    (send-xhr :get-stats "/batchstats" {:accept :json})))

       :stats   (cF (when-let [xhr (<mget me :xhr)]
                      (when-let [r (xhr-response xhr)]
                        (println
                          (if (= 200 (:status r))
                            (:body r)
                            {:oops r}))
                        (if (= 200 (:status r))
                          (:body r)
                          {:oops (:status r)}))))})

    #_(div
        (for [[k v] (<mget (md/mxu-find-name me "stats-button") :stats)]
          (do (pln :stat k v)
              (p (b (str k " = " v))))))
    (div
      (json-view "Latest batch statistics"
        (<mget (md/mxu-find-name me "stats-button") :stats)))))

(defn json-view [title json]
  (div {:hidden (cF (nil? json))}
    (h3 title)
    (for [[k v] json]
      (p (b (str k " = " v))))))

(defn watch-stats-option [me]
  (tag-checkbox me "watch-progress"
    "Watch progress?" false
    {:name  "watch-progress"
     :style "font-size:1.2em;margin:24px"}))

(defn watched-stats [me]
  (div {}
    {:name   "watcher"
     :reload (cI 0)                                         ;;d/f hackkk
     :xhr    (cF (when (and (<mget (md/mxu-find-name me "watch-progress") :on?)
                         (<mget me :reload))
                   (pln :requesting-running!!!)
                   (send-xhr :get-runnin "/runningstats" {:accept :json})))
     :stats  (cF+ [:obs (fn-obs
                          (pln :obs-sees-new new)
                          (when new
                            (pln :obs-new!!!!)
                            (js/setTimeout #(with-cc
                                              (mswap!> me :reload inc)) 2000)))]
               (or
                 (when-let [xhr (<mget me :xhr)]
                   (pln :seeing-new-xhr)
                   (when-let [r (xhr-response xhr)]
                     (pln :seeing-response (:status r)(:body r))
                     #_(println
                         (if (= 200 (:status r))
                           (:body r)
                           {:oops r}))
                     (if (= 200 (:status r))
                       (assoc (:body r) :now (.getTime (js/Date.)))
                       {:oops (:status r)})))
                 (do (pln :cache-out cache)
                     cache)))}
    (div
      (h2 "Running stats")
      (div
        (h3 "Latest")
        (div {}
          {:name  "latest"
           :stats (cF (:latest (<mget (mxu-find-name me "watcher") :stats)))}
          (div
            "Duration:"
            (span {:content (cF (let [ss (<mget (mxu-find-name me "latest") :stats)]
                                  (pln :new-ss! ss)
                                  (str (:run-duration ss))))})))))))


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
                           (show-stats))])))))
