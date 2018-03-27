// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.mxintro.rxtrak');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('cljs_time.coerce');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.html');
goog.require('tiltontec.webmx.gen');
goog.require('tiltontec.webmx.style');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.editor.focus');
goog.require('goog.dom.selection');
goog.require('goog.events.Event');
goog.require('goog.dom.forms');
goog.require('tiltontec.webmx.example.todo');
tiltontec.webmx.mxintro.rxtrak.LISPNYC = "Lisp-NYC";
tiltontec.webmx.mxintro.rxtrak.lesson = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"slot","slot",240229571),new cljs.core.Keyword(null,"lesson-no","lesson-no",103637224),new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
return tiltontec.webmx.html.io_upsert.call(null,tiltontec.webmx.mxintro.rxtrak.LISPNYC,JSON.stringify(tiltontec.util.core.map_to_json.call(null,new$)));
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ljs","ljs",-910877606,null),cljs.core.list(new cljs.core.Symbol(null,"io-read","io-read",736682236,null),new cljs.core.Symbol(null,"LISPNYC","LISPNYC",-1864711778,null))], null),cljs.core.list(new cljs.core.Symbol(null,"json-to-map","json-to-map",-1944006507,null),cljs.core.list(new cljs.core.Symbol(null,".parse",".parse",-2107311323,null),new cljs.core.Symbol("js","JSON","js/JSON",1623081486,null),new cljs.core.Symbol(null,"ljs","ljs",-910877606,null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lesson","lesson",-375763528),(0)], null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23162 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var temp__4655__auto__ = tiltontec.webmx.html.io_read.call(null,tiltontec.webmx.mxintro.rxtrak.LISPNYC);
if(cljs.core.truth_(temp__4655__auto__)){
var ljs = temp__4655__auto__;
return tiltontec.util.core.json_to_map.call(null,JSON.parse(ljs));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lesson","lesson",-375763528),(0)], null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23162;
}}));
tiltontec.webmx.mxintro.rxtrak.back_forth = (function tiltontec$webmx$mxintro$rxtrak$back_forth(){
return tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"background","background",-863952629),"#ffd",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),"visibility:hidden")),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cswap!>","cswap!>",4424163,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23163#","p1__23163#",-341588558,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"p1__23163#","p1__23163#",-341588558,null)),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"p1__23163#","p1__23163#",-341588558,null)),(0)))))], null),"<< "),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,".reload",".reload",846811370,null),new cljs.core.Symbol("js","window.location","js/window.location",-1873500668,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),(0),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null)))),"display:block","visibility:hidden")),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cswap!>","cswap!>",4424163,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23164#","p1__23164#",-1765098647,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"p1__23164#","p1__23164#",-1765098647,null),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null)))),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"p1__23164#","p1__23164#",-1765098647,null)),new cljs.core.Symbol(null,"p1__23164#","p1__23164#",-1765098647,null)))))], null),">>"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23165 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))),"visibility:hidden")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if((new cljs.core.Keyword(null,"lesson","lesson",-375763528).cljs$core$IFn$_invoke$arity$1(tiltontec.cell.evaluate._LT_cget.call(null,tiltontec.webmx.mxintro.rxtrak.lesson)) === (0))){
return "visibility:hidden";
} else {
return null;
}
});})(_STAR_par_STAR_23165,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (_){
return tiltontec.cell.core.cswap_BANG__GT_.call(null,tiltontec.webmx.mxintro.rxtrak.lesson,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),((function (_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (p1__23163_SHARP_){
if((p1__23163_SHARP_ > (0))){
return (p1__23163_SHARP_ - (1));
} else {
return (0);
}
});})(_STAR_par_STAR_23165,me,cell,slot_name,cache))
);
});})(_STAR_par_STAR_23165,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"<< ")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23167 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"<< "))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23167;
}});})(_STAR_par_STAR_23165,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (){
return window.location.reload();
});})(x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),(0),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null)))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23169 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = cljs.core.second.call(null,cljs.core.nth.call(null,tiltontec.webmx.mxintro.rxtrak.lessons,(function (){var x__7108__auto__ = (0);
var y__7109__auto__ = new cljs.core.Keyword(null,"lesson","lesson",-375763528).cljs$core$IFn$_invoke$arity$1(tiltontec.cell.evaluate._LT_cget.call(null,tiltontec.webmx.mxintro.rxtrak.lesson));
return ((x__7108__auto__ > y__7109__auto__) ? x__7108__auto__ : y__7109__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23169;
}});})(x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Keyword(null,"lesson","lesson",-375763528),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"lesson","lesson",1264767999,null))),cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"lessons","lessons",-1234814689,null)))),"display:block","visibility:hidden")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if((new cljs.core.Keyword(null,"lesson","lesson",-375763528).cljs$core$IFn$_invoke$arity$1(tiltontec.cell.evaluate._LT_cget.call(null,tiltontec.webmx.mxintro.rxtrak.lesson)) < (cljs.core.count.call(null,tiltontec.webmx.mxintro.rxtrak.lessons) - (1)))){
return "display:block";
} else {
return "visibility:hidden";
}
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (e){
return tiltontec.cell.core.cswap_BANG__GT_.call(null,tiltontec.webmx.mxintro.rxtrak.lesson,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lesson","lesson",-375763528)], null),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (p1__23164_SHARP_){
if((p1__23164_SHARP_ < (cljs.core.count.call(null,tiltontec.webmx.mxintro.rxtrak.lessons) - (1)))){
return (p1__23164_SHARP_ + (1));
} else {
return p1__23164_SHARP_;
}
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
);
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),">>")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23171 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,">>"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23171;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23165,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23165;
}})));
});
tiltontec.webmx.mxintro.rxtrak.hellocz = "\n  (let [a (cI 0)\n        b (cF+ [:slot :b\n                :obs (fn-obs (println :OBS slot :new new))]\n            (min 2 (<cget a)))\n        c (cF (min 40 (* 10 (<cget a))))\n        x (cF (println :computing-x)\n            (+ (<cget b)\n              (<cget c)))\n        dump (fn [tag]\n               (println :DUMP tag :a (<cget a) :b (<cget b) :c (<cget c) :x (<cget x)))]\n    (dump :starting)\n    ;; note we now have standalone cells and per-cell observers.\n    ;; note the absence of explicit subscribe (even <cget goes away soon).\n\n    (cswap!> a inc)\n    ;; note the absence of explicit publish. cswap!> or cset!> suffice.\n    ;; note that X recomputes just once, tho B and C both change.\n    (dump :post-inc-a-to-one)\n\n    (cswap!> a inc)\n    (dump :post-inc-a-to-two)\n\n    (cswap!> a * 2)\n    ;; note that B observer no longer fires since B stays at 2\n    (dump :post-double-a-to-four)\n\n    (cset!> a 4)\n    ;; note that nothing runs since A was already 4\n    (dump :post-set-a-to-four-again)\n    )";
tiltontec.webmx.mxintro.rxtrak.hello_lisp_nyc = (function tiltontec$webmx$mxintro$rxtrak$hello_lisp_nyc(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"back-forth","back-forth",658610496,null)),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"Hello, Lisp NYC!"),cljs.core.list(new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alt","alt",-3214426),"I Love Lisp",new cljs.core.Keyword(null,"src","src",-1651076051),"resources/ilovelisp.jpeg"], null))], null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_23172 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.back_forth.call(null),tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Hello, Lisp NYC!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23172,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23173 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hello, Lisp NYC!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23173;
}});})(_STAR_par_STAR_23172,me,cell,slot_name,cache))
)),tiltontec.webmx.gen.make_tag.call(null,"img",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alt","alt",-3214426),"I Love Lisp",new cljs.core.Keyword(null,"src","src",-1651076051),"resources/ilovelisp.jpeg"], null),cljs.core.PersistentArrayMap.EMPTY,null)], null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23172;
}})));
});
tiltontec.webmx.mxintro.rxtrak.hello_cells = (function tiltontec$webmx$mxintro$rxtrak$hello_cells(){
var a_23179 = tiltontec.cell.core.cI.call(null,(0));
var b_23180 = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"slot","slot",240229571),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"obs","obs",-664011444),((function (a_23179){
return (function (slot,me,new$,old,c){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"OBS","OBS",-1071002083),slot,new cljs.core.Keyword(null,"new","new",-2085437848),new$);
});})(a_23179))
,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"min","min",2085523049,null),(2),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"a","a",-482876059,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (a_23179){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var x__7115__auto__ = (2);
var y__7116__auto__ = tiltontec.cell.evaluate._LT_cget.call(null,a_23179);
return ((x__7115__auto__ < y__7116__auto__) ? x__7115__auto__ : y__7116__auto__);
});})(a_23179))
);
var c_23181 = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"min","min",2085523049,null),(40),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(10),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"a","a",-482876059,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (a_23179,b_23180){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var x__7115__auto__ = (40);
var y__7116__auto__ = ((10) * tiltontec.cell.evaluate._LT_cget.call(null,a_23179));
return ((x__7115__auto__ < y__7116__auto__) ? x__7115__auto__ : y__7116__auto__);
});})(a_23179,b_23180))
);
var x_23182 = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"computing-x","computing-x",999979527)),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)),cljs.core.list(new cljs.core.Symbol(null,"<cget","<cget",617789209,null),new cljs.core.Symbol(null,"c","c",-122660552,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (a_23179,b_23180,c_23181){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
cljs.core.println.call(null,new cljs.core.Keyword(null,"computing-x","computing-x",999979527));

return (tiltontec.cell.evaluate._LT_cget.call(null,b_23180) + tiltontec.cell.evaluate._LT_cget.call(null,c_23181));
});})(a_23179,b_23180,c_23181))
);
var dump_23183 = ((function (a_23179,b_23180,c_23181,x_23182){
return (function (tag){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"DUMP","DUMP",940441502),tag,new cljs.core.Keyword(null,"a","a",-2123407586),tiltontec.cell.evaluate._LT_cget.call(null,a_23179),new cljs.core.Keyword(null,"b","b",1482224470),tiltontec.cell.evaluate._LT_cget.call(null,b_23180),new cljs.core.Keyword(null,"c","c",-1763192079),tiltontec.cell.evaluate._LT_cget.call(null,c_23181),new cljs.core.Keyword(null,"x","x",2099068185),tiltontec.cell.evaluate._LT_cget.call(null,x_23182));
});})(a_23179,b_23180,c_23181,x_23182))
;
dump_23183.call(null,new cljs.core.Keyword(null,"starting","starting",-1852141466));

tiltontec.cell.core.cswap_BANG__GT_.call(null,a_23179,cljs.core.inc);

dump_23183.call(null,new cljs.core.Keyword(null,"post-inc-a-to-one","post-inc-a-to-one",828339947));

tiltontec.cell.core.cswap_BANG__GT_.call(null,a_23179,cljs.core.inc);

dump_23183.call(null,new cljs.core.Keyword(null,"post-inc-a-to-two","post-inc-a-to-two",-1059693979));

tiltontec.cell.core.cswap_BANG__GT_.call(null,a_23179,cljs.core._STAR_,(2));

dump_23183.call(null,new cljs.core.Keyword(null,"post-double-a-to-four","post-double-a-to-four",-1377325679));

tiltontec.cell.core.cset_BANG__GT_.call(null,a_23179,(4));

dump_23183.call(null,new cljs.core.Keyword(null,"post-set-a-to-four-again","post-set-a-to-four-again",71316158));

return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"back-forth","back-forth",658610496,null)),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"Hello, Cells!"),cljs.core.list(new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"resources/smalldag.png"], null)),cljs.core.list(new cljs.core.Symbol(null,"h3","h3",-586824606,null),"Now with standalone cells and per-cell observers. (See console.)"),cljs.core.list(new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"48px"], null)], null),cljs.core.list(new cljs.core.Symbol("str","replace","str/replace",854058908,null),new cljs.core.Symbol(null,"hellocz","hellocz",-1907251704,null),/</,"&lt;"))], null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23174 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_23175 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.back_forth.call(null),tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Hello, Cells!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23176 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hello, Cells!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23176;
}});})(_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache))
)),tiltontec.webmx.gen.make_tag.call(null,"img",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"resources/smalldag.png"], null),cljs.core.PersistentArrayMap.EMPTY,null),tiltontec.webmx.gen.make_tag.call(null,"h3",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Now with standalone cells and per-cell observers. (See console.)")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23177 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Now with standalone cells and per-cell observers. (See console.)"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23177;
}});})(_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache))
)),tiltontec.webmx.gen.make_tag.call(null,"pre",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"48px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("str","replace","str/replace",854058908,null),new cljs.core.Symbol(null,"hellocz","hellocz",-1907251704,null),/</,"&lt;"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23178 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = clojure.string.replace.call(null,tiltontec.webmx.mxintro.rxtrak.hellocz,/</,"&lt;");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23178;
}});})(_STAR_par_STAR_23175,_STAR_depender_STAR_23174,me,cell,slot_name,cache))
))], null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23175;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23174;
}})));
});
tiltontec.webmx.mxintro.rxtrak.next_refill = (function tiltontec$webmx$mxintro$rxtrak$next_refill(mx){
return tiltontec.model.core._LT_mget.call(null,mx,new cljs.core.Keyword(null,"next-refill","next-refill",1377746898));
});
tiltontec.webmx.mxintro.rxtrak.drug_name = (function tiltontec$webmx$mxintro$rxtrak$drug_name(mx){
return tiltontec.model.core._LT_mget.call(null,mx,new cljs.core.Keyword(null,"title","title",636505583));
});
tiltontec.webmx.mxintro.rxtrak.refill_within = (function tiltontec$webmx$mxintro$rxtrak$refill_within(mx){
return tiltontec.model.core._LT_mget.call(null,mx,new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835));
});
tiltontec.webmx.mxintro.rxtrak.alarm_QMARK_ = (function tiltontec$webmx$mxintro$rxtrak$alarm_QMARK_(mx){
return tiltontec.model.core._LT_mget.call(null,mx,new cljs.core.Keyword(null,"alarm?","alarm?",-1533772825));
});
tiltontec.webmx.mxintro.rxtrak.ms_days = (function tiltontec$webmx$mxintro$rxtrak$ms_days(d){
return ((((d * (24)) * (60)) * (60)) * (1000));
});
tiltontec.webmx.mxintro.rxtrak.hellomd = "\n  (let [rx (md/make\n             :title \"adderall\"\n             :refills (cI 5)\n             :next-refill (cI (+ (now) (ms-days 5)))\n             :seconds-remaining (cF+ [:obs (fn-obs\n                                             (println :seconds-left new :for (drug-name me)))]\n                                  (int (/ (- (next-refill me) (now)) 1000))))]\n    (md/make\n      :mx-dom (cFonce (md/with-par me\n                        [(back-forth)\n                         (h1 \"Hello, Model!\")\n                         (h3 \"Model, yes. Working model, no.\")\n                         (span (str \"Seconds to \"\n                                 (drug-name rx)\n                                 \":\" (refill-within rx)))))]))))";
tiltontec.webmx.mxintro.rxtrak.hello_model = (function tiltontec$webmx$mxintro$rxtrak$hello_model(){
var rx = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"title","title",636505583),"adderall",new cljs.core.Keyword(null,"refills","refills",149846143),tiltontec.cell.core.cI.call(null,(5)),new cljs.core.Keyword(null,"next-refill","next-refill",1377746898),tiltontec.cell.core.cI.call(null,(tiltontec.util.core.now.call(null) + tiltontec.webmx.mxintro.rxtrak.ms_days.call(null,(5)))),new cljs.core.Keyword(null,"alarm?","alarm?",-1533772825),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),(1000)),cljs.core.list(new cljs.core.Symbol(null,"ms-days","ms-days",520993491,null),(2)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return ((tiltontec.webmx.mxintro.rxtrak.refill_within.call(null,me) * (1000)) < tiltontec.webmx.mxintro.rxtrak.ms_days.call(null,(2)));
})),new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),new$,new cljs.core.Keyword(null,"for","for",-1323786319),tiltontec.webmx.mxintro.rxtrak.drug_name.call(null,me));
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"int","int",-100885395,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"next-refill","next-refill",-1276688871,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"now","now",-9994004,null))),(1000)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return (((tiltontec.webmx.mxintro.rxtrak.next_refill.call(null,me) - tiltontec.util.core.now.call(null)) / (1000)) | (0));
})));
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"back-forth","back-forth",658610496,null)),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"Hello, Model!"),cljs.core.list(new cljs.core.Symbol(null,"h3","h3",-586824606,null),"Model, yes. Working model, no."),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px",new cljs.core.Keyword(null,"height","height",1025178622),"164px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"48px"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)," Get that refill!"))),cljs.core.list(new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px"], null)], null),cljs.core.list(new cljs.core.Symbol("str","replace","str/replace",854058908,null),new cljs.core.Symbol(null,"hellomd","hellomd",426948858,null),/</,"&lt;"))], null)),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (rx){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23184 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.back_forth.call(null),tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Hello, Model!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23185 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Hello, Model!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23185;
}});})(_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
)),tiltontec.webmx.gen.make_tag.call(null,"h3",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Model, yes. Working model, no.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23186 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Model, yes. Working model, no."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23186;
}});})(_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
)),tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px",new cljs.core.Keyword(null,"height","height",1025178622),"164px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"48px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"alarm","alarm",2066206946),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)," Get that refill!")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23187 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23187,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23189 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Seconds to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.mxintro.rxtrak.drug_name.call(null,rx)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" refill: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.mxintro.rxtrak.refill_within.call(null,rx))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23189;
}});})(_STAR_par_STAR_23187,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = (function (){var temp__4657__auto__ = tiltontec.webmx.mxintro.rxtrak.alarm_QMARK_.call(null,rx);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"alarm","alarm",2066206946),x);

return tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)," Get that refill!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x,temp__4657__auto__,x__7615__auto__,_STAR_par_STAR_23187,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23191 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Get that refill!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23191;
}});})(x,temp__4657__auto__,x__7615__auto__,_STAR_par_STAR_23187,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
));
} else {
return null;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23187;
}});})(_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
)),tiltontec.webmx.gen.make_tag.call(null,"pre",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("str","replace","str/replace",854058908,null),new cljs.core.Symbol(null,"hellomd","hellomd",426948858,null),/</,"&lt;"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23192 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = clojure.string.replace.call(null,tiltontec.webmx.mxintro.rxtrak.hellomd,/</,"&lt;");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23192;
}});})(_STAR_depender_STAR_23184,me,cell,slot_name,cache,rx))
))], null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23184;
}});})(rx))
));
});
tiltontec.webmx.mxintro.rxtrak.overdue_QMARK_ = (function tiltontec$webmx$mxintro$rxtrak$overdue_QMARK_(mx){
return tiltontec.model.core._LT_mget.call(null,mx,new cljs.core.Keyword(null,"overdue?","overdue?",1946198892));
});
tiltontec.webmx.mxintro.rxtrak.hello_matrix = (function tiltontec$webmx$mxintro$rxtrak$hello_matrix(){
return cljs.core.reset_BANG_.call(null,tiltontec.model.core.matrix,tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"time","time",1385887882),tiltontec.cell.core.cI.call(null,((tiltontec.util.core.now.call(null) / (1000)) | (0))),new cljs.core.Keyword(null,"ticker","ticker",214613162),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("js","setInterval","js/setInterval",2090002939,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"mswap!>","mswap!>",595396156,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Symbol(null,"inc","inc",324505433,null))),(1000))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23193 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return setInterval(((function (_STAR_depender_STAR_23193,me,cell,slot_name,cache){
return (function (){
return tiltontec.model.core.mswap_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
});})(_STAR_depender_STAR_23193,me,cell,slot_name,cache))
,(1000));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23193;
}})),new cljs.core.Keyword(null,"rx","rx",1627208482),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Symbol(null,"me","me",1501524834,null)], null),cljs.core.list(new cljs.core.Symbol("md","make","md/make",356485027,null),new cljs.core.Keyword(null,"title","title",636505583),"adderall",new cljs.core.Keyword(null,"refills","refills",149846143),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),(5)),new cljs.core.Keyword(null,"next-refill","next-refill",1377746898),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Keyword(null,"time","time",1385887882)),(5))),new cljs.core.Keyword(null,"alarm?","alarm?",-1533772825),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),(2))),new cljs.core.Keyword(null,"overdue?","overdue?",1946198892),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),cljs.core.list(new cljs.core.Symbol(null,"cF+","cF+",-993748223,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obs","obs",-664011444),cljs.core.list(new cljs.core.Symbol(null,"fn-obs","fn-obs",305587329,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Keyword(null,"for","for",-1323786319),cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"next-refill","next-refill",-1276688871,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Keyword(null,"time","time",1385887882))))))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23194 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var matrix = me;
return tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"title","title",636505583),"adderall",new cljs.core.Keyword(null,"refills","refills",149846143),tiltontec.cell.core.cI.call(null,(5)),new cljs.core.Keyword(null,"next-refill","next-refill",1377746898),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Keyword(null,"time","time",1385887882)),(5))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var _STAR_depender_STAR_23195 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return (tiltontec.model.core._LT_mget.call(null,matrix,new cljs.core.Keyword(null,"time","time",1385887882)) + (5));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23195;
}});})(matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"alarm?","alarm?",-1533772825),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),(2))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (tiltontec.webmx.mxintro.rxtrak.refill_within.call(null,me__$1) < (2));
});})(matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"overdue?","overdue?",1946198892),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (tiltontec.webmx.mxintro.rxtrak.refill_within.call(null,me__$1) < (0));
});})(matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),((function (matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache){
return (function (slot,me__$1,new$,old,c){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"refill-within","refill-within",-1725615835),new$,new cljs.core.Keyword(null,"for","for",-1323786319),tiltontec.webmx.mxintro.rxtrak.drug_name.call(null,me__$1));
});})(matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache))
,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"next-refill","next-refill",-1276688871,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Keyword(null,"time","time",1385887882)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return (tiltontec.webmx.mxintro.rxtrak.next_refill.call(null,me__$1) - tiltontec.model.core._LT_mget.call(null,matrix,new cljs.core.Keyword(null,"time","time",1385887882)));
});})(matrix,_STAR_depender_STAR_23194,me,cell,slot_name,cache))
));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23194;
}})),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rx","rx",-1027227287,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"rx","rx",1627208482))], null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"back-forth","back-forth",658610496,null)),cljs.core.list(new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"&#x211e;Trak"),cljs.core.list(new cljs.core.Symbol(null,"h3","h3",-586824606,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(9999))," A multi-model, working Matrix.")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px",new cljs.core.Keyword(null,"height","height",1025178622),"164px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"48px"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null)," Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)))),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null),"Get that refill!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"overdue?","overdue?",-708236877,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null)," C'mon, man!!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),"")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var rx = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"rx","rx",1627208482));
var _STAR_par_STAR_23196 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.back_forth.call(null),tiltontec.webmx.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"&#x211e;Trak"),cljs.core.list(new cljs.core.Symbol(null,"h3","h3",-586824606,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(9999))," A multi-model, working Matrix.")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px",new cljs.core.Keyword(null,"height","height",1025178622),"164px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"48px"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null)," Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)))),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null),"Get that refill!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"overdue?","overdue?",-708236877,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null)," C'mon, man!!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),"")))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23197 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"&#x211e;Trak")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23199 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"&#x211e;Trak"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23199;
}});})(_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"h3",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),(9999))," A multi-model, working Matrix."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23201 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(9999))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" A multi-model, working Matrix.")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23201;
}});})(x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"36px",new cljs.core.Keyword(null,"height","height",1025178622),"164px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"48px"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null)," Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)))),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null),"Get that refill!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF1","cF1",-304820224,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"overdue?","overdue?",-708236877,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"))], null)," C'mon, man!!"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),""))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23215 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content"], null)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null)," Seconds to ",cljs.core.list(new cljs.core.Symbol(null,"drug-name","drug-name",-1574206433,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))," refill: ",cljs.core.list(new cljs.core.Symbol(null,"refill-within","refill-within",-85084308,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23217 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Seconds to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.mxintro.rxtrak.drug_name.call(null,rx)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" refill: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.mxintro.rxtrak.refill_within.call(null,rx))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23217;
}});})(_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content")),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
var _STAR_depender_STAR_23220 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return tiltontec.webmx.style.make_css_inline.call(null,me__$3,new cljs.core.Keyword(null,"visibility","visibility",1338380893),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"alarm?","alarm?",106758702,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23220,me__$3,cell__$3,slot_name__$3,cache__$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$4);
var cell__$4 = slot_c_SHARP___$4;
var slot_name__$4 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$4);
var cache__$4 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$4);
if(cljs.core.truth_(tiltontec.webmx.mxintro.rxtrak.alarm_QMARK_.call(null,rx))){
return "visible";
} else {
return "hidden";
}
});})(_STAR_depender_STAR_23220,me__$3,cell__$3,slot_name__$3,cache__$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content");
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23220;
}});})(x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Get that refill!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23221 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Get that refill!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23221;
}});})(x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$4 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"overdue?","overdue?",-708236877,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content")),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
var _STAR_depender_STAR_23224 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return tiltontec.webmx.style.make_css_inline.call(null,me__$3,new cljs.core.Keyword(null,"visibility","visibility",1338380893),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"overdue?","overdue?",-708236877,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null)),"visible","hidden")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_23224,me__$3,cell__$3,slot_name__$3,cache__$3,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$4){
var me__$4 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$4);
var cell__$4 = slot_c_SHARP___$4;
var slot_name__$4 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$4);
var cache__$4 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$4);
if(cljs.core.truth_(tiltontec.webmx.mxintro.rxtrak.overdue_QMARK_.call(null,rx))){
return "visible";
} else {
return "hidden";
}
});})(_STAR_depender_STAR_23224,me__$3,cell__$3,slot_name__$3,cache__$3,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"content");
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23224;
}});})(x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)," C'mon, man!!")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23225 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," C'mon, man!!"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23225;
}});})(x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = tiltontec.webmx.gen.make_tag.call(null,"span",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23227 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,""))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23227;
}});})(x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_23215,me__$2,cell__$2,slot_name__$2,cache__$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$5);
})(),x__7615__auto____$4);
})(),x__7615__auto____$3);
})(),x__7615__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23215;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23197,me__$1,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23197;
}});})(_STAR_par_STAR_23196,rx,me,cell,slot_name,cache))
))], null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23196;
}}))));
});





tiltontec.webmx.mxintro.rxtrak.lessons = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.hello_lisp_nyc,"hello-lisp-nyc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.hello_cells,"hello-cells"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.hello_model,"hello-model"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.mxintro.rxtrak.hello_matrix,"hello-matrix"], null)], null);
tiltontec.webmx.mxintro.rxtrak.matrix_build_BANG_ = (function tiltontec$webmx$mxintro$rxtrak$matrix_build_BANG_(){
var lesson_no = new cljs.core.Keyword(null,"lesson","lesson",-375763528).cljs$core$IFn$_invoke$arity$1(tiltontec.cell.evaluate._LT_cget.call(null,tiltontec.webmx.mxintro.rxtrak.lesson));
return cljs.core.reset_BANG_.call(null,tiltontec.model.core.matrix,cljs.core.first.call(null,cljs.core.nth.call(null,tiltontec.webmx.mxintro.rxtrak.lessons,lesson_no)).call(null));
});
tiltontec.webmx.mxintro.rxtrak.start_router = (function tiltontec$webmx$mxintro$rxtrak$start_router(){
return bide.core.start_BANG_.call(null,bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (route,params,query){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"bam-route","bam-route",-581294985),route);

return tiltontec.model.core.mset_BANG__GT_.call(null,cljs.core.deref.call(null,tiltontec.model.core.matrix),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name.call(null,route));
})], null));
});

//# sourceMappingURL=rxtrak.js.map