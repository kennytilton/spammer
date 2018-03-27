// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.pipeline.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.webmx.example.pipeline.pipeline');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.gen');
goog.require('cljs.core.async');


tiltontec.webmx.example.pipeline.core.mtx_pipeline = (function tiltontec$webmx$example$pipeline$core$mtx_pipeline(me){
return tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mxu_find_type.call(null,me,new cljs.core.Keyword("tiltontec.webmx.example.pipeline.core","pipedemo","tiltontec.webmx.example.pipeline.core/pipedemo",866539370)),new cljs.core.Keyword(null,"pipeline","pipeline",-401746042));
});
tiltontec.webmx.example.pipeline.core.matrix_build_BANG_ = (function tiltontec$webmx$example$pipeline$core$matrix_build_BANG_(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.pipeline.core","pipedemo","tiltontec.webmx.example.pipeline.core/pipedemo",866539370),new cljs.core.Keyword(null,"pipeline","pipeline",-401746042),tiltontec.webmx.example.pipeline.pipeline.pipe_start.call(null,tiltontec.webmx.example.pipeline.pipeline.make_pipeline.call(null,(1000),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (data){
return cljs.core.map.call(null,(function (p1__25810_SHARP_){
return (p1__25810_SHARP_ * (2));
}),data);
}),(function (data){
return cljs.core.map.call(null,(function (p1__25811_SHARP_){
return (p1__25811_SHARP_ + (100));
}),data);
}),(function (data){
return cljs.core.map.call(null,(function (p1__25812_SHARP_){
return (- p1__25812_SHARP_);
}),data);
})], null))),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),new cljs.core.Keyword(null,"me-is","me-is",-1380039400),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"ia-type","ia-type",551627990,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mtx","mtx",-549210915,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"mtx","mtx",-549210915,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"Hello, Pipeline!"),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"pipe-feed","pipe-feed",-519707966,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null)))], null),"Feed"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-fst: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"fst","fst",-1040014328))))], null)),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-in: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"input","input",556931961))))], null)),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"pipe-segs","pipe-segs",170138616,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"mtx","mtx",-549210915,null),new cljs.core.Keyword(null,"pipeline","pipeline",-401746042)))], null),cljs.core.list(new cljs.core.Symbol(null,"pipe-seg-view","pipe-seg-view",-972168156,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"k","k",-505765866,null))),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),new cljs.core.Keyword(null,"pipeout-runs!!!!!!!!!","pipeout-runs!!!!!!!!!",-1075841469),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-out: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379))))], null)))], null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_25813 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_25814 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"me-is","me-is",-1380039400),me,tiltontec.cell.base.ia_type.call(null,me));

var mtx = me;
if(cljs.core.truth_(mtx)){
} else {
throw (new Error("Assert failed: mtx"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"Hello, Pipeline!"),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"pipe-feed","pipe-feed",-519707966,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null)))], null),"Feed"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-fst: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"fst","fst",-1040014328))))], null)),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-in: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"input","input",556931961))))], null)),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"pipe-segs","pipe-segs",170138616,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"mtx","mtx",-549210915,null),new cljs.core.Keyword(null,"pipeline","pipeline",-401746042)))], null),cljs.core.list(new cljs.core.Symbol(null,"pipe-seg-view","pipe-seg-view",-972168156,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"k","k",-505765866,null))),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),new cljs.core.Keyword(null,"pipeout-runs!!!!!!!!!","pipeout-runs!!!!!!!!!",-1075841469),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-out: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_25815 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Hello, Pipeline!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_25817 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hello, Pipeline!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25817;
}});})(_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (){
return tiltontec.webmx.example.pipeline.core.pipe_feed.call(null,tiltontec.webmx.example.pipeline.core.mtx_pipeline.call(null,me__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)], null));
});})(x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Feed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_25819 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Feed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25819;
}});})(x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-fst: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"fst","fst",-1040014328)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("pipe-fst: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.pipeline.core.mtx_pipeline.call(null,me__$2),new cljs.core.Keyword(null,"fst","fst",-1040014328)))].join('');
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-in: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"input","input",556931961)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("pipe-in: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.pipeline.core.mtx_pipeline.call(null,me__$2),new cljs.core.Keyword(null,"input","input",556931961)))].join('');
});})(x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$4 = (function (){var iter__7561__auto__ = ((function (x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function tiltontec$webmx$example$pipeline$core$matrix_build_BANG__$_iter__25824(s__25825){
return (new cljs.core.LazySeq(null,((function (x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (){
var s__25825__$1 = s__25825;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25825__$1);
if(temp__4657__auto__){
var s__25825__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25825__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__25825__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__25827 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__25826 = (0);
while(true){
if((i__25826 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__25826);
cljs.core.chunk_append.call(null,b__25827,tiltontec.webmx.example.pipeline.core.pipe_seg_view.call(null,me__$1,k));

var G__25828 = (i__25826 + (1));
i__25826 = G__25828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25827),tiltontec$webmx$example$pipeline$core$matrix_build_BANG__$_iter__25824.call(null,cljs.core.chunk_rest.call(null,s__25825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25827),null);
}
} else {
var k = cljs.core.first.call(null,s__25825__$2);
return cljs.core.cons.call(null,tiltontec.webmx.example.pipeline.core.pipe_seg_view.call(null,me__$1,k),tiltontec$webmx$example$pipeline$core$matrix_build_BANG__$_iter__25824.call(null,cljs.core.rest.call(null,s__25825__$2)));
}
} else {
return null;
}
break;
}
});})(x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
,null,null));
});})(x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,tiltontec.model.core._LT_mget.call(null,mtx,new cljs.core.Keyword(null,"pipeline","pipeline",-401746042))));
})();
return cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = tiltontec.webmx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),new cljs.core.Keyword(null,"pipeout-runs!!!!!!!!!","pipeout-runs!!!!!!!!!",-1075841469),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"pipe-out: ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mtx-pipeline","mtx-pipeline",-1625035083,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"poutput","poutput",-1235468379)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipeout-runs!!!!!!!!!","pipeout-runs!!!!!!!!!",-1075841469),tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.pipeline.core.mtx_pipeline.call(null,me__$2),new cljs.core.Keyword(null,"poutput","poutput",-1235468379)));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("pipe-out: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.pipeline.core.mtx_pipeline.call(null,me__$2),new cljs.core.Keyword(null,"poutput","poutput",-1235468379)))].join('');
});})(x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_25815,me__$1,cell__$1,slot_name__$1,cache__$1,mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$5);
})(),x__7615__auto____$4);
})(),x__7615__auto____$3);
})(),x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25815;
}});})(mtx,_STAR_par_STAR_25814,_STAR_depender_STAR_25813,me,cell,slot_name,cache))
))], null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25814;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_25813;
}})));
});
tiltontec.webmx.example.pipeline.core.pipe_data = cljs.core.atom.call(null,null);
tiltontec.webmx.example.pipeline.core.pipe_fed = cljs.core.atom.call(null,null);
tiltontec.webmx.example.pipeline.core.pipe_gov = cljs.core.atom.call(null,(0));
tiltontec.webmx.example.pipeline.core.feed_pipe = (function tiltontec$webmx$example$pipeline$core$feed_pipe(){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,tiltontec.webmx.example.pipeline.core.pipe_data));
if(cljs.core.truth_(temp__4657__auto__)){
var datum = temp__4657__auto__;
if((cljs.core.deref.call(null,tiltontec.webmx.example.pipeline.core.pipe_gov) > (0))){
cljs.core.swap_BANG_.call(null,tiltontec.webmx.example.pipeline.core.pipe_gov,cljs.core._,(15));
} else {
cljs.core.reset_BANG_.call(null,tiltontec.webmx.example.pipeline.core.pipe_gov,(1000));

cljs.core.swap_BANG_.call(null,tiltontec.webmx.example.pipeline.core.pipe_data,cljs.core.rest);

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"feed-pipe-feeding","feed-pipe-feeding",-1106298741),datum);

var c__20051__auto___25839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20051__auto___25839,datum,temp__4657__auto__){
return (function (){
var f__20052__auto__ = (function (){var switch__20030__auto__ = ((function (c__20051__auto___25839,datum,temp__4657__auto__){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (1))){
var inst_25829 = cljs.core.deref.call(null,tiltontec.webmx.example.pipeline.core.pipe_fed);
var inst_25830 = tiltontec.model.core._LT_mget.call(null,inst_25829,new cljs.core.Keyword(null,"in-data","in-data",89576440));
var inst_25831 = cljs.core.async.put_BANG_.call(null,inst_25830,datum);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
return null;
}
});})(c__20051__auto___25839,datum,temp__4657__auto__))
;
return ((function (switch__20030__auto__,c__20051__auto___25839,datum,temp__4657__auto__){
return (function() {
var tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__ = null;
var tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____0 = (function (){
var statearr_25835 = [null,null,null,null,null,null,null];
(statearr_25835[(0)] = tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__);

(statearr_25835[(1)] = (1));

return statearr_25835;
});
var tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____1 = (function (state_25833){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e25836){if((e25836 instanceof Object)){
var ex__20034__auto__ = e25836;
var statearr_25837_25840 = state_25833;
(statearr_25837_25840[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25841 = state_25833;
state_25833 = G__25841;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$core$feed_pipe_$_state_machine__20031__auto__;
})()
;})(switch__20030__auto__,c__20051__auto___25839,datum,temp__4657__auto__))
})();
var state__20053__auto__ = (function (){var statearr_25838 = f__20052__auto__.call(null);
(statearr_25838[(6)] = c__20051__auto___25839);

return statearr_25838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(c__20051__auto___25839,datum,temp__4657__auto__))
);


}

return window.requestAnimationFrame(tiltontec.webmx.example.pipeline.core.feed_pipe);
} else {
return null;
}
});
tiltontec.webmx.example.pipeline.core.pipe_feed = (function tiltontec$webmx$example$pipeline$core$pipe_feed(pipe,data){
cljs.core.reset_BANG_.call(null,tiltontec.webmx.example.pipeline.core.pipe_fed,pipe);

cljs.core.reset_BANG_.call(null,tiltontec.webmx.example.pipeline.core.pipe_data,data);

tiltontec.webmx.example.pipeline.core.feed_pipe.call(null);

tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"past-feed-pipe-pulling","past-feed-pipe-pulling",-1330927892));

var dn_25853 = (0);
while(true){
if((dn_25853 < cljs.core.count.call(null,data))){
var c__20051__auto___25854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (dn_25853,c__20051__auto___25854){
return (function (){
var f__20052__auto__ = (function (){var switch__20030__auto__ = ((function (dn_25853,c__20051__auto___25854){
return (function (state_25847){
var state_val_25848 = (state_25847[(1)]);
if((state_val_25848 === (1))){
var inst_25842 = tiltontec.model.core._LT_mget.call(null,pipe,new cljs.core.Keyword(null,"out-data","out-data",-1440810430));
var state_25847__$1 = state_25847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25847__$1,(2),inst_25842);
} else {
if((state_val_25848 === (2))){
var inst_25844 = (state_25847[(2)]);
var inst_25845 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"drvr-bam-out","drvr-bam-out",-1755061736),inst_25844);
var state_25847__$1 = state_25847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25847__$1,inst_25845);
} else {
return null;
}
}
});})(dn_25853,c__20051__auto___25854))
;
return ((function (dn_25853,switch__20030__auto__,c__20051__auto___25854){
return (function() {
var tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__ = null;
var tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null];
(statearr_25849[(0)] = tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____1 = (function (state_25847){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_25847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__20034__auto__ = e25850;
var statearr_25851_25855 = state_25847;
(statearr_25851_25855[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25856 = state_25847;
state_25847 = G__25856;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__ = function(state_25847){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____1.call(this,state_25847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$core$pipe_feed_$_state_machine__20031__auto__;
})()
;})(dn_25853,switch__20030__auto__,c__20051__auto___25854))
})();
var state__20053__auto__ = (function (){var statearr_25852 = f__20052__auto__.call(null);
(statearr_25852[(6)] = c__20051__auto___25854);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(dn_25853,c__20051__auto___25854))
);


var G__25857 = (dn_25853 + (1));
dn_25853 = G__25857;
continue;
} else {
}
break;
}

return tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"driver-exiting","driver-exiting",-1105632232));
});
tiltontec.webmx.example.pipeline.core.pipe_seg_view = (function tiltontec$webmx$example$pipeline$core$pipe_seg_view(me,seg){
return tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"background:cyan"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h4","h4",-649572776,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Pipe Seg#",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null),new cljs.core.Keyword(null,"id","id",-1388402092)))),cljs.core.list(new cljs.core.Symbol(null,"h5","h5",-188625098,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"state:",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null),new cljs.core.Keyword(null,"fst","fst",-1040014328)),cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000))))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_25858 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h4",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Pipe Seg#",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null),new cljs.core.Keyword(null,"id","id",-1388402092))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_25858,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_25860 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Pipe Seg#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,seg,new cljs.core.Keyword(null,"id","id",-1388402092)))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25860;
}});})(_STAR_par_STAR_25858,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"h5",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"state:",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null),new cljs.core.Keyword(null,"fst","fst",-1040014328)),cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(1000)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_25858,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("state:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,seg,new cljs.core.Keyword(null,"fst","fst",-1040014328))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(1000)))].join('');
});})(x__7615__auto__,_STAR_par_STAR_25858,me__$1,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25858;
}})));
});
tiltontec.webmx.example.pipeline.core.clock = (function tiltontec$webmx$example$pipeline$core$clock(){
return tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"example-clock",new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"color:",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-name","mxu-find-name",887938412,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"timecolor","timecolor",709788352)),new cljs.core.Keyword(null,"value","value",305978217)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mxu_find_name.call(null,me,new cljs.core.Keyword(null,"timecolor","timecolor",709788352)),new cljs.core.Keyword(null,"value","value",305978217)))].join('');
})),new cljs.core.Keyword(null,"tick","tick",-835886976),tiltontec.cell.core.cI.call(null,false,new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),true),new cljs.core.Keyword(null,"ticker","ticker",214613162),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("js","setInterval","js/setInterval",2090002939,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"tick","tick",-835886976),true)),(1000))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return setInterval(((function (me,cell,slot_name,cache){
return (function (){
return tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"tick","tick",-835886976),true);
});})(me,cell,slot_name,cache))
,(1000));
})),new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"tick","tick",-835886976)),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)),new cljs.core.Symbol(null,".toTimeString",".toTimeString",879367720,null),cljs.core.list(new cljs.core.Symbol("str","split","str/split",1040947342,null)," "),new cljs.core.Symbol(null,"first","first",996428481,null)),"*checks watch*")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"tick","tick",-835886976)))){
return cljs.core.first.call(null,clojure.string.split.call(null,(new Date()).toTimeString()," "));
} else {
return "*checks watch*";
}
}))], null),cljs.core.PersistentArrayMap.EMPTY,null);
});

//# sourceMappingURL=core.js.map