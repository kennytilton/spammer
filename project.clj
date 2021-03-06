(defproject spammer "0.1.0-SNAPSHOT"
  :description "A coding challenge turned full-stack Matrix proof of concept"
  :url "http://tiltontec.com"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/core.async "0.4.474"]
                 [org.clojure/test.check "0.9.0"]
                 [yogthos/config "0.8"]
                 [compojure "1.5.1"]
                 [com.taoensso/tufte "1.4.0"]
                 [com.taoensso/timbre "4.3.1"]
                 [org.clojure/tools.cli "0.3.5"]
                 [cheshire "5.8.0"]
                 [com.cemerick/url "0.1.1"]
                 [ring/ring-defaults "0.2.1"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler spammer.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
