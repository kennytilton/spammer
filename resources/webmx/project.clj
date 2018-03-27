(defproject com.tiltontec/webmx "0.1.0-SNAPSHOT"
  :description "A Web un-framework for the Matrix (dataflow library)"
  :url "https://github.com/kennytilton"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.671"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [funcool/bide "1.5.0"]
                 [clj-http "3.7.0"]
                 [cljs-http "0.1.44"]
                 [cheshire "5.8.0"]
                 [com.taoensso/tufte "1.1.2"]
                 [com.tiltontec/matrix "0.1.3-SNAPSHOT"]
                 [com.tiltontec/xhr "0.1.1-SNAPSHOT"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release" :target-path]
  :target-path "target")
