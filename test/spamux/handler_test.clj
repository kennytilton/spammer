(ns spamux.handler-test
  (:require [clojure.test :refer :all]
            [clojure.string :as str]
            [ring.mock.request :as mock]
            [spamux.handler :refer :all]
            [cemerick.url :refer (url url-encode)]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) "Hello World"))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))

