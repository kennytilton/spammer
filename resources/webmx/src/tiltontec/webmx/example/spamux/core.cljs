(ns tiltontec.webmx.example.spamux.core
  (:require [clojure.string :as str]
            [tiltontec.util.core :refer [pln]]
            [tiltontec.cell.base :refer [ia-type]]
            [tiltontec.cell.core :refer-macros [cF+ cF cFonce] :refer [cI]]
            [tiltontec.cell.observer :refer-macros [fn-obs]]

            [tiltontec.model.core
             :refer [matrix mx-par <mget <mget mset!> mset!> mxi-find mxu-find-name
                     mxu-find-type]
             :as md]

            [tiltontec.xhr
             :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                     xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                     xhr-selection xhr-to-map xhr-name-to-map xhr-response]]

            [tiltontec.webmx.gen :refer [evt-tag target-value]
             :refer-macros [h1 h4 h5 input div span button p]]
            [cljs.pprint :as pp]))

(defn matrix-build! []
  ;;;;(pline/pipe-go)
  (md/make ::spamux
    :mx-dom (cFonce (md/with-par me
                      (let [mtx me]
                        (assert mtx)
                        [(div {}
                           (h1 "Hello, SpamUX!?")
                           (button
                             {
                              :id      "startxhr"
                              :onclick #(let [me (mx-par (evt-tag %))]
                                          (println :starting? (keys @me) @me)
                                          (mset!> me :getnew true))
                              }
                             {
                              :getnew   (cI false :ephemeral? true)
                              :newtitle (cF (when-let [xhr (<mget me :ae)]
                                              (when-let [r (xhr-response xhr)]
                                                (println :bam!!!! r))))
                              :ae       (cF+ [:obs (fn-obs
                                                     (println :ae-obs new old))]
                                          (when (<mget me :getnew)
                                            (do
                                              (println :sending!!!-start)
                                              (send-xhr "/start"))))
                              }
                             (span {:content "Start?!"})))])))))



