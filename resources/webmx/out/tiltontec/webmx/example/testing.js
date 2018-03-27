// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.testing');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.synapse');
goog.require('tiltontec.model.core');
goog.require('tiltontec.xhr');
goog.require('tiltontec.webmx.gen');
goog.require('tiltontec.webmx.style');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.editor.focus');
goog.require('goog.dom.selection');
goog.require('goog.events.Event');
goog.require('goog.dom.forms');
goog.require('cljs_http.client');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('cljs.pprint');
tiltontec.webmx.example.testing.test_page_3 = (function tiltontec$webmx$example$testing$test_page_3(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"xx",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (p1__23992_SHARP_){
var me = tiltontec.webmx.gen.evt_tag.call(null,p1__23992_SHARP_);
cljs.core.println.call(null,new cljs.core.Keyword(null,"xx-click!!","xx-click!!",-1505030797),p1__23992_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"clicks","clicks",673274951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));

return tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"clicks","clicks",673274951),(new cljs.core.Keyword(null,"clicks","clicks",673274951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)) + (1)));

})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clicks","clicks",673274951),tiltontec.cell.core.cI.call(null,(0))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Conten ?! Content rule",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951)),"|Ooops"),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"padding","padding",1660304693),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),cljs.core.list(new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"clicks","clicks",673274951))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(6)),"px"))))),new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style ?! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))))], null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color:red;background-color:#eee;padding:10px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style string! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))))], null)),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow",new cljs.core.Keyword(null,"padding","padding",1660304693),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(6)),"px")], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style ?! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))))], null)),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"subId",new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),"subvalue",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"subbing?","subbing?",565977949))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tgt","tgt",-1391314381,null),cljs.core.list(new cljs.core.Symbol(null,"evt-tag","evt-tag",-675015094,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null))], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),cljs.core.list(new cljs.core.Symbol(null,"evt-tag","evt-tag",-675015094,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)),new cljs.core.Keyword(null,"subbing?","subbing?",565977949),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"subbing?","subbing?",565977949))))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subbing?","subbing?",565977949),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),true)], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"subId"], null),"Sub label OK?")),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-input",new cljs.core.Keyword(null,"style","style",-496642736),"margin-top:24px"], null),"Time color: ",cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"timecolor","timecolor",709788352),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xx","xx",98327794,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"xx",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null),new cljs.core.Keyword(null,"id","id",-1388402092)))),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"xx","xx",98327794,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"xx","xx",98327794,null),new cljs.core.Keyword(null,"clicks","clicks",673274951))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["back-cyan","boulder"], null)))),new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),"#0ff")], null))),cljs.core.list(new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(40),new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"wrap","wrap",851669987),"hard",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tell me a story",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23995 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conten ?! Content rule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me),new cljs.core.Keyword(null,"clicks","clicks",673274951))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|Ooops")].join('');
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"padding","padding",1660304693),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),cljs.core.list(new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"clicks","clicks",673274951))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(6)),"px"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return tiltontec.webmx.style.make_css_inline.call(null,me__$1,new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"red",new cljs.core.Keyword(null,"padding","padding",1660304693),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),cljs.core.list(new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),new cljs.core.Keyword(null,"clicks","clicks",673274951))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(6)),"px"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var c = tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$2))),new cljs.core.Keyword(null,"clicks","clicks",673274951));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((c * (6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});})(me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
));
});})(x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core.odd_QMARK_.call(null,tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"clicks","clicks",673274951)));
});})(x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style ?! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Himom style ?! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"clicks","clicks",673274951)))].join('');
});})(x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
)], null),null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color:red;background-color:#eee;padding:10px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style string! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Himom style string! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"clicks","clicks",673274951)))].join('');
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
)], null),null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",-122660552,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow",new cljs.core.Keyword(null,"padding","padding",1660304693),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"c","c",-122660552,null),(6)),"px")], null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var c = tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"clicks","clicks",673274951));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"yellow",new cljs.core.Keyword(null,"padding","padding",1660304693),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((c * (6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('')], null);
});})(x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Himom style ?! ",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"clicks","clicks",673274951)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Himom style ?! "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"clicks","clicks",673274951)))].join('');
});})(x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
)], null),null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$4 = tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"subId",new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),"subvalue",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"subbing?","subbing?",565977949))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tgt","tgt",-1391314381,null),cljs.core.list(new cljs.core.Symbol(null,"evt-tag","evt-tag",-675015094,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null))], null),cljs.core.list(new cljs.core.Symbol(null,".stopPropagation",".stopPropagation",-1758290105,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),cljs.core.list(new cljs.core.Symbol(null,"evt-tag","evt-tag",-675015094,null),new cljs.core.Symbol(null,"p1__23993#","p1__23993#",-347955940,null)),new cljs.core.Keyword(null,"subbing?","subbing?",565977949),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"subbing?","subbing?",565977949))))))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subbing?","subbing?",565977949),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),true)], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"subId"], null),"Sub label OK?"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23999 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$4 = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"subId",new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),"subvalue",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"subbing?","subbing?",565977949))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return tiltontec.model.core._LT_mget.call(null,me__$2,new cljs.core.Keyword(null,"subbing?","subbing?",565977949));
});})(_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (p1__23993_SHARP_){
var tgt = tiltontec.webmx.gen.evt_tag.call(null,p1__23993_SHARP_);
p1__23993_SHARP_.stopPropagation();

return tiltontec.model.core.mset_BANG__GT_.call(null,tiltontec.webmx.gen.evt_tag.call(null,p1__23993_SHARP_),new cljs.core.Keyword(null,"subbing?","subbing?",565977949),cljs.core.not.call(null,tiltontec.model.core._LT_mget.call(null,me__$1,new cljs.core.Keyword(null,"subbing?","subbing?",565977949))));
});})(_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subbing?","subbing?",565977949),tiltontec.cell.core.cI.call(null,true)], null),null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = tiltontec.webmx.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"subId"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Sub label OK?")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$4,_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24001 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Sub label OK?"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24001;
}});})(x__7615__auto____$4,_STAR_par_STAR_23999,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$5);
})(),x__7615__auto____$4);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23999;
}});})(x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"color-input",new cljs.core.Keyword(null,"style","style",-496642736),"margin-top:24px"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Time color: ",cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"timecolor","timecolor",709788352),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xx","xx",98327794,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"xx",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null),new cljs.core.Keyword(null,"id","id",-1388402092)))),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"xx","xx",98327794,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"xx","xx",98327794,null),new cljs.core.Keyword(null,"clicks","clicks",673274951))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["back-cyan","boulder"], null)))),new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),"#0ff")], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24003 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"timecolor","timecolor",709788352),new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xx","xx",98327794,null),cljs.core.list(new cljs.core.Symbol(null,"fget","fget",1054684438,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"xx",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"p1__23994#","p1__23994#",-810554859,null),new cljs.core.Keyword(null,"id","id",-1388402092)))),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"xx","xx",98327794,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"xx","xx",98327794,null),new cljs.core.Keyword(null,"clicks","clicks",673274951))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["back-cyan","boulder"], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_24003,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var xx = tiltontec.model.core.fget.call(null,((function (me__$2,cell__$2,slot_name__$2,cache__$2,_STAR_par_STAR_24003,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache){
return (function (p1__23994_SHARP_){
return cljs.core._EQ_.call(null,"xx",tiltontec.model.core._LT_mget.call(null,p1__23994_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
});})(me__$2,cell__$2,slot_name__$2,cache__$2,_STAR_par_STAR_24003,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
,me__$2);
if(cljs.core.truth_(xx)){
} else {
throw (new Error("Assert failed: xx"));
}

if(cljs.core.even_QMARK_.call(null,tiltontec.model.core._LT_mget.call(null,xx,new cljs.core.Keyword(null,"clicks","clicks",673274951)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["back-cyan","boulder"], null);
} else {
return null;
}
});})(_STAR_par_STAR_24003,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
),new cljs.core.Keyword("webmx","type","webmx/type",1547312523),"text",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.cI.call(null,"#0ff")], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$5);
})(),"Time color: "))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24003;
}});})(x__7615__auto____$4,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_23995,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$6 = tiltontec.webmx.gen.make_tag.call(null,"textarea",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(40),new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"wrap","wrap",851669987),"hard",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tell me a story",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$6);
})(),x__7615__auto____$5);
})(),x__7615__auto____$4);
})(),x__7615__auto____$3);
})(),x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23995;
}})))], null);
});
tiltontec.webmx.example.testing.ae_adderall = "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:adderall&limit=1";
tiltontec.webmx.example.testing.flickr = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&format=json&api_key=6f93d9bd5fef5831ec592f0b527fdeff&user_id=9395899@N08";
tiltontec.webmx.example.testing.github = "https://api.github.com/";
tiltontec.webmx.example.testing.openstmap = "http://www.openstreetmap.org/#map=4/38.01/-95.84";
tiltontec.webmx.example.testing.mdn_css = "https://developer.mozilla.org/en-US/docs/Web/CSS/line-height?raw&section=Summary";
tiltontec.webmx.example.testing.ae_brand = "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~a&limit=~a";
tiltontec.webmx.example.testing.rx_nav_unk = "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=341248";
tiltontec.webmx.example.testing.evt_std = (function tiltontec$webmx$example$testing$evt_std(e){
e.stopPropagation();

return componentHandler.upgradeDom();
});
tiltontec.webmx.example.testing.test_page_4 = (function tiltontec$webmx$example$testing$test_page_4(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"h1",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-typography--display-2"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clojure NYC Meet-Up")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24007 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clojure NYC Meet-Up"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24007;
}}))),tiltontec.webmx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-typography--display-1"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"A Night to Remember")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24008 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"A Night to Remember"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24008;
}}))),tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"xx",new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (p1__24004_SHARP_){
var me = tiltontec.webmx.gen.evt_tag.call(null,p1__24004_SHARP_);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),"xx")){
cljs.core.println.call(null,new cljs.core.Keyword(null,"xx-click!!","xx-click!!",-1505030797),p1__24004_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)),new cljs.core.Keyword(null,"clicks","clicks",673274951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));

tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"clicks","clicks",673274951),(new cljs.core.Keyword(null,"clicks","clicks",673274951).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)) + (1)));

return tiltontec.webmx.example.testing.evt_std.call(null,p1__24004_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clicks","clicks",673274951),tiltontec.cell.core.cI.call(null,(0)),new cljs.core.Keyword(null,"brand","brand",557863343),"adderall"], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"running!","running!",1842896383),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Content?! Content rule",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"clicks","clicks",673274951)),"|Ooops")),cljs.core.list(new cljs.core.Symbol(null,"br","br",-1720330977,null)),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24005#","p1__24005#",473296155,null)], null),cljs.core.list(new cljs.core.Symbol(null,"evt-std","evt-std",863544128,null),new cljs.core.Symbol(null,"p1__24005#","p1__24005#",473296155,null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),"MDL Rizing"),cljs.core.list(new cljs.core.Symbol(null,"br","br",-1720330977,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xx","xx",98327794,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"id??","id??",451209605),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"xx",cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"xx","xx",98327794,null))))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"xx","xx",98327794,null),new cljs.core.Keyword(null,"clicks","clicks",673274951))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24006#","p1__24006#",-1780920383,null)], null),cljs.core.list(new cljs.core.Symbol(null,"evt-std","evt-std",863544128,null),new cljs.core.Symbol(null,"p1__24006#","p1__24006#",-1780920383,null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),"MDL Rizing Dyno")))),cljs.core.list(new cljs.core.Symbol(null,"br","br",-1720330977,null)),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ae","ae",1059137307),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"with-synapse","with-synapse",-2084245160,null),cljs.core.list(new cljs.core.Keyword(null,"github","github",567794498),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"rx-nav-unk","rx-nav-unk",480448365,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),"~a adverse event",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"brand","brand",557863343)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-response","xhr-response",1612983320,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ae","ae",1059137307)))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Booya!:",new cljs.core.Symbol(null,"r","r",1169147337,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24009 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = (function (){
cljs.core.println.call(null,new cljs.core.Keyword(null,"running!","running!",1842896383),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Content?! Content rule"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"clicks","clicks",673274951))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("|Ooops")].join('');
})()
;
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"br",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24005#","p1__24005#",473296155,null)], null),cljs.core.list(new cljs.core.Symbol(null,"evt-std","evt-std",863544128,null),new cljs.core.Symbol(null,"p1__24005#","p1__24005#",473296155,null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),"MDL Rizing"),cljs.core.list(new cljs.core.Symbol(null,"br","br",-1720330977,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xx","xx",98327794,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"id??","id??",451209605),cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"xx",cljs.core.list(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"xx","xx",98327794,null))))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"xx","xx",98327794,null),new cljs.core.Keyword(null,"clicks","clicks",673274951))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24006#","p1__24006#",-1780920383,null)], null),cljs.core.list(new cljs.core.Symbol(null,"evt-std","evt-std",863544128,null),new cljs.core.Symbol(null,"p1__24006#","p1__24006#",-1780920383,null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),"MDL Rizing Dyno"))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24015 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (p1__24005_SHARP_){
return tiltontec.webmx.example.testing.evt_std.call(null,p1__24005_SHARP_);
});})(_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"MDL Rizing")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24017 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"MDL Rizing"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24017;
}});})(_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"br",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$4 = (function (){var xx = tiltontec.model.core.mx_par.call(null,me__$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"id??","id??",451209605),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$1)));

if(cljs.core._EQ_.call(null,"xx",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xx)))){
} else {
throw (new Error("Assert failed: (= \"xx\" (:id (clojure.core/deref xx)))"));
}

if(cljs.core.odd_QMARK_.call(null,tiltontec.model.core._LT_mget.call(null,xx,new cljs.core.Keyword(null,"clicks","clicks",673274951)))){
return tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mdl-button mdl-js-button mdl-js-ripple-effect",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (xx,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (p1__24006_SHARP_){
return tiltontec.webmx.example.testing.evt_std.call(null,p1__24006_SHARP_);
});})(xx,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mdl","mdl",884206849),true], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"MDL Rizing Dyno")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (xx,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24019 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"MDL Rizing Dyno"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24019;
}});})(xx,x__7615__auto____$3,x__7615__auto____$2,_STAR_par_STAR_24015,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
));
} else {
return null;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$4);
})(),x__7615__auto____$3);
})(),x__7615__auto____$2);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24015;
}});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"br",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$4 = tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ae","ae",1059137307),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"with-synapse","with-synapse",-2084245160,null),cljs.core.list(new cljs.core.Keyword(null,"github","github",567794498),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"rx-nav-unk","rx-nav-unk",480448365,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var existing_syn__21641__auto__ = tiltontec.cell.synapse.existing_syn.call(null,new cljs.core.Keyword(null,"github","github",567794498));
var synapse__21642__auto__ = (function (){var or__6772__auto__ = existing_syn__21641__auto__;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var new_syn__21643__auto__ = (function (){return tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.cell.base._STAR_depender_STAR_)),new cljs.core.Keyword(null,"slot","slot",240229571),new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201),new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"rx-nav-unk","rx-nav-unk",480448365,null))),new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248),true,new cljs.core.Keyword(null,"rule","rule",729973257),((function (or__6772__auto__,existing_syn__21641__auto__,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return tiltontec.xhr.send_xhr.call(null,tiltontec.webmx.example.testing.rx_nav_unk);
});})(or__6772__auto__,existing_syn__21641__auto__,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
);
})();
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn__21643__auto__));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn__21643__auto__);

return new_syn__21643__auto__;
}
})();
var value__21644__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn__21641__auto__,synapse__21642__auto__,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse__21642__auto__,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__21641__auto__,synapse__21642__auto__,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse__21642__auto__);

return value__21644__auto__;
});})(x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),"~a adverse event",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"brand","brand",557863343)))),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"r","r",1169147337,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-response","xhr-response",1612983320,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ae","ae",1059137307)))], null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"Booya!:",new cljs.core.Symbol(null,"r","r",1169147337,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24023 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$4 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),"~a adverse event",cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"brand","brand",557863343))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_24023,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_24025 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$4 = cljs.pprint.cl_format.call(null,"~a adverse event",tiltontec.model.core._LT_mget.call(null,me__$2,new cljs.core.Keyword(null,"brand","brand",557863343)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$4);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24025;
}});})(_STAR_par_STAR_24023,me__$1,cell__$1,slot_name__$1,cache__$1,x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$5 = (function (){var temp__4657__auto__ = tiltontec.xhr.xhr_response.call(null,tiltontec.model.core._LT_mget.call(null,me__$1,new cljs.core.Keyword(null,"ae","ae",1059137307)));
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Booya!:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
} else {
return null;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$5);
})(),x__7615__auto____$4);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24023;
}});})(x__7615__auto____$3,x__7615__auto____$2,x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_24009,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$4);
})(),x__7615__auto____$3);
})(),x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24009;
}})))], null);
});
tiltontec.webmx.example.testing.matrix_build_BANG_ = (function tiltontec$webmx$example$testing$matrix_build_BANG_(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.testing","startwatch","tiltontec.webmx.example.testing/startwatch",358424204),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"test-page-4","test-page-4",-131551945,null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_24026 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_24027 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return tiltontec.webmx.example.testing.test_page_4.call(null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_24027;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_24026;
}})));
});

//# sourceMappingURL=testing.js.map