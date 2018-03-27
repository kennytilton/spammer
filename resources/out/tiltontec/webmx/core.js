// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.tufte');
goog.require('cljs_time.coerce');
goog.require('tiltontec.model.core');
goog.require('goog.dom');
goog.require('tiltontec.webmx.html');
goog.require('tiltontec.webmx.example.pipeline.core');
goog.require('goog.date.UtcDateTime');
cljs.core.enable_console_print_BANG_.call(null);
taoensso.tufte.add_basic_println_handler_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var root_25864 = goog.dom.getElement("tagroot");
var app_matrix_25865 = tiltontec.webmx.example.pipeline.core.matrix_build_BANG_.call(null);
var app_dom_25866 = (function (){var _STAR_webmx_trace_STAR_25863 = tiltontec.webmx.html._STAR_webmx_trace_STAR_;
tiltontec.webmx.html._STAR_webmx_trace_STAR_ = null;

try{return tiltontec.webmx.html.tag_dom_create.call(null,tiltontec.model.core._LT_mget.call(null,app_matrix_25865,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107)));
}finally {tiltontec.webmx.html._STAR_webmx_trace_STAR_ = _STAR_webmx_trace_STAR_25863;
}})();
var start_ms_25867 = (new Date()).getTime();
var start$_25868 = cljs_time.coerce.to_string.call(null,cljs_time.coerce.from_long.call(null,start_ms_25867));
root_25864.innerHTML = null;

goog.dom.appendChild(root_25864,app_dom_25866);

var temp__4657__auto___25869 = tiltontec.model.core._LT_mget.call(null,app_matrix_25865,new cljs.core.Keyword(null,"router-starter","router-starter",-629272961));
if(cljs.core.truth_(temp__4657__auto___25869)){
var route_starter_25870 = temp__4657__auto___25869;
cljs.core.prn.call(null,new cljs.core.Keyword(null,"starting-router","starting-router",1953751589));

route_starter_25870.call(null);
} else {
}

//# sourceMappingURL=core.js.map