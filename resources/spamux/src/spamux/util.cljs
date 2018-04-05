(ns spamux.util
  (:require
    [tiltontec.xhr
            :refer [make-xhr send-xhr send-unparsed-xhr xhr-send xhr-await xhr-status
                    xhr-status-key xhr-resolved xhr-error xhr-error? xhrfo synaptic-xhr synaptic-xhr-unparsed
                    xhr-selection xhr-to-map xhr-name-to-map xhr-response]]))


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