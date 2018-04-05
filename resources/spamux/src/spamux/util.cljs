(ns spamux.util
  (:require
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
    [clojure.string :as str]))


(defn xhr?-response
  "Tolerates nil XHR assuming will arrive later in data flow"
  [xhr]
  (when xhr
    (xhr-response xhr)))

(defn xhr?-ok-body [xhr]
  (when-let [r (xhr?-response xhr)]
    (when (= 200 (:status r))
      (:body r))))

(defn if-bound [x]
  (when (not= x unbound) x))

(defn mx-find-matrix [mx]
  (assert (mxu-find-type mx :spamux.core/spamux))
  (mxu-find-type mx :spamux.core/spamux))

;;; --- utils -------------------------------------------

(defn pln [& args]
  (locking *out*
    (println (str/join " " args))))

(defn xpln [& args])

(defn now []
  (.getTime (js/Date.)))


(defn eko [key value]
  (pln :eko!!! key value)
  value)
