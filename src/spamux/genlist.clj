(ns spamux.genlist
  (:require
    [clojure.spec.alpha :as s]
    [clojure.spec.gen.alpha :as gen]
    ))

(def email-domains
  #{"indeediot.com"
    "monstrous.com"
    "linkedarkpattern.com"
    "dired.com"
    "lice.com"
    "careershiller.com"
    "glassbore.com"})

(def email-regex
  #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")

(s/def ::email-address
  (s/with-gen
    (s/and string? #(re-matches email-regex %))
    #(->>
       (gen/tuple (gen/such-that not-empty (gen/string-alphanumeric))
         (s/gen email-domains))
       (gen/fmap (fn [[addr domain]] (str addr "@" domain))))))

(s/def ::email-body
  (s/with-gen
    (s/and string?)
    #(->>
       (gen/such-that not-empty (gen/string-alphanumeric))
       (gen/fmap (fn [msg] (str "Hi! Buy " msg " at half off!"))))))

(s/def ::spam-score
  (s/double-in :min 0.0 :max 1))

(s/def ::email-record
  (s/keys :req-un [::email-address ::spam-score]))

(defn email-records-test-gen
  ([] (repeatedly
        #(gen/generate (s/gen ::email-record))))
  ([n]
   (if (nil? n)
     (email-records-test-gen)
     (take n (email-records-test-gen)))))

(defn email-raw-file-build [volume-k]
  (let [chunk 100]
    (let [chunks (partition-all chunk
                   (email-records-test-gen (* volume-k 1000)))]
      (dorun
        (map (fn [n c]
               (spit (format "bulkinput/em-%dk.edn" volume-k chunk)
                 (into [] c) :append (pos? n)))
          (range)
          chunks)))))

;;; --- specs where dups are likely ---------------------

(def email-usernames
  #{"tom" "dick" "harry"})

(s/def ::email-address-duped
  (s/with-gen
    (s/and string? #(re-matches email-regex %))
    #(->>
       (gen/tuple (s/gen email-usernames)
         (s/gen (set (take 3 email-domains))))
       (gen/fmap (fn [[addr domain]] (str addr "@" domain))))))

(s/def ::email-record-duped
  (s/keys :req-un [::email-address-duped ::email-body ::spam-score]))

(defn email-records-duped-test-gen
  ([] (repeatedly
        #(gen/generate (s/gen ::email-record-duped))))
  ([n]
   (if (nil? n)
     (email-records-duped-test-gen)
     (take n (email-records-duped-test-gen)))))

