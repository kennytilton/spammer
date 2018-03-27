// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.tufte');
goog.require('cljs_time.coerce');
goog.require('tiltontec.model.core');
goog.require('goog.dom');
goog.require('tiltontec.webmx.html');
goog.require('tiltontec.webmx.example.spamux.core');
goog.require('goog.date.UtcDateTime');
cljs.core.enable_console_print_BANG_.call(null);
taoensso.tufte.add_basic_println_handler_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var root_23175 = goog.dom.getElement("tagroot");
var app_matrix_23176 = tiltontec.webmx.example.spamux.core.matrix_build_BANG_.call(null);
var app_dom_23177 = (function (){var _STAR_webmx_trace_STAR_23174 = tiltontec.webmx.html._STAR_webmx_trace_STAR_;
tiltontec.webmx.html._STAR_webmx_trace_STAR_ = null;

try{return tiltontec.webmx.html.tag_dom_create.call(null,tiltontec.model.core._LT_mget.call(null,app_matrix_23176,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107)));
}finally {tiltontec.webmx.html._STAR_webmx_trace_STAR_ = _STAR_webmx_trace_STAR_23174;
}})();
var start_ms_23178 = (new Date()).getTime();
var start$_23179 = cljs_time.coerce.to_string.call(null,cljs_time.coerce.from_long.call(null,start_ms_23178));
root_23175.innerHTML = null;

goog.dom.appendChild(root_23175,app_dom_23177);

var temp__4657__auto___23180 = tiltontec.model.core._LT_mget.call(null,app_matrix_23176,new cljs.core.Keyword(null,"router-starter","router-starter",-629272961));
if(cljs.core.truth_(temp__4657__auto___23180)){
var route_starter_23181 = temp__4657__auto___23180;
cljs.core.prn.call(null,new cljs.core.Keyword(null,"starting-router","starting-router",1953751589));

route_starter_23181.call(null);
} else {
}

//# sourceMappingURL=core.js.map