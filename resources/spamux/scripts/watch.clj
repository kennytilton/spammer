(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'spamux.core
   :output-to "out/spamux.js"
   :output-dir "out"})
