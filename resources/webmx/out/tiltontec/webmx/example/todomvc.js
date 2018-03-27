// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.todomvc');
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
goog.require('tiltontec.webmx.example.todomx_list_item');





tiltontec.webmx.example.todomvc.matrix_build_BANG_ = (function tiltontec$webmx$example$todomvc$matrix_build_BANG_(){
return cljs.core.reset_BANG_.call(null,tiltontec.model.core.matrix,tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.todomvc","todoApp","tiltontec.webmx.example.todomvc/todoApp",-1449233993),new cljs.core.Keyword(null,"todos","todos",630308868),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("tiltontec.webmx.example.todo","todo-list","tiltontec.webmx.example.todo/todo-list",628445816,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22996 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return tiltontec.webmx.example.todo.todo_list.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22996;
}})),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("md","with-par","md/with-par",-1450243129,null),new cljs.core.Symbol(null,"me","me",1501524834,null),cljs.core.list(new cljs.core.Symbol(null,"landing-page","landing-page",-967020582,null)))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22997 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var _STAR_par_STAR_22998 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return tiltontec.webmx.example.todomvc.landing_page.call(null);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22998;
}}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22997;
}})),new cljs.core.Keyword(null,"route","route",329891309),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
if(cljs.core._EQ_.call(null,tiltontec.cell.base.unbound,old)){
return null;
} else {
return tiltontec.webmx.html.io_upsert.call(null,"todo-matrixcljs.route",new$);
}
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"io-read","io-read",736682236,null),"todo-matrixcljs.route"),"All")),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22999 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var or__6774__auto__ = tiltontec.webmx.html.io_read.call(null,"todo-matrixcljs.route");
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "All";
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22999;
}})),new cljs.core.Keyword(null,"router-starter","router-starter",-629272961),tiltontec.webmx.example.todomvc.start_router));
});
tiltontec.webmx.example.todomvc.start_router = (function tiltontec$webmx$example$todomvc$start_router(){
return bide.core.start_BANG_.call(null,bide.core.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"All","All",-2078402587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/active",new cljs.core.Keyword(null,"Active","Active",-2079032146)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/completed",new cljs.core.Keyword(null,"Completed","Completed",402352227)], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),(function (route,params,query){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"bam-route","bam-route",-581294985),route);

return tiltontec.model.core.mset_BANG__GT_.call(null,cljs.core.deref.call(null,tiltontec.model.core.matrix),new cljs.core.Keyword(null,"route","route",329891309),cljs.core.name.call(null,route));
})], null));
});




tiltontec.webmx.example.todomvc.landing_page = (function tiltontec$webmx$example$todomvc$landing_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todoapp"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"std-clock","std-clock",1286999068,null)),cljs.core.list(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry-field","todo-entry-field",-1722773886,null))),cljs.core.list(new cljs.core.Symbol(null,"todo-list-items","todo-list-items",-122105134,null)),cljs.core.list(new cljs.core.Symbol(null,"dashboard-footer","dashboard-footer",-1106288423,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23000 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.example.todomvc.std_clock.call(null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"header",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),"todos"),cljs.core.list(new cljs.core.Symbol(null,"todo-entry-field","todo-entry-field",-1722773886,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23000,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23004 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"todos")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23004,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23000,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23006 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"todos"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23006;
}});})(_STAR_par_STAR_23004,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23000,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.example.todomvc.todo_entry_field.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23004;
}});})(x__7617__auto__,_STAR_par_STAR_23000,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.example.todomvc.todo_list_items.call(null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.example.todomvc.dashboard_footer.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23000;
}}))),tiltontec.webmx.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"info"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),"Double-click a to-do list item to edit it."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23007 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Double-click a to-do list item to edit it.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23007,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23009 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Double-click a to-do list item to edit it."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23009;
}});})(_STAR_par_STAR_23007,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23007,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23011 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Created by <a href=\"https://github.com/kennytilton/kennytilton.github.io/blob/master/README.md\">Kenneth Tilton</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23011;
}});})(x__7617__auto__,_STAR_par_STAR_23007,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>.")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23007,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23013 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Inspired by <a href=\"https://github.com/lynaghk/todoFRP\">TodoFRP</a>."))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23013;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23007,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23007;
}})))], null);
});
tiltontec.webmx.example.todomvc.todo_entry_field = (function tiltontec$webmx$example$todomvc$todo_entry_field(){
return tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs doing?",new cljs.core.Keyword(null,"onkeypress","onkeypress",740819085),(function (p1__23014_SHARP_){
if(cljs.core._EQ_.call(null,p1__23014_SHARP_.key,"Enter")){
var raw = goog.dom.forms.getValue(p1__23014_SHARP_.target);
var title = clojure.string.trim.call(null,raw);
var todos = tiltontec.webmx.example.todomvc.mx_todos.call(null);
if(cljs.core._EQ_.call(null,title,"")){
} else {
tiltontec.model.core.mset_BANG__GT_.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709),cljs.core.conj.call(null,tiltontec.model.core._LT_mget.call(null,todos,new cljs.core.Keyword(null,"items-raw","items-raw",153861709)),(function (){var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = tiltontec.webmx.example.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.Keyword("tiltontec.webmx.example.todomvc","mktodo","tiltontec.webmx.example.todomvc/mktodo",257764745),(__t1 - __t0));

return __result;
} else {
return tiltontec.webmx.example.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null));
}
})()));
}

return goog.dom.forms.setValue(p1__23014_SHARP_.target,"");
} else {
return null;
}
})], null),cljs.core.PersistentArrayMap.EMPTY,null);
});
tiltontec.webmx.example.todomvc.todo_list_items = (function tiltontec$webmx$example$todomvc$todo_list_items(){
return tiltontec.webmx.gen.make_tag.call(null,"section",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"main",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_todos.call(null,me),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
}))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"toggle-all","toggle-all",-2099586420,null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.list(new cljs.core.Symbol(null,"cI","cI",480228135,null),null),new cljs.core.Keyword(null,"kid-values","kid-values",575730341),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"rte","rte",1174575981,null),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23015#","p1__23015#",405766058,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"p1__23015#","p1__23015#",405766058,null),new cljs.core.Keyword(null,"todo","todo",-1046442570))),new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)], null),cljs.core.list(new cljs.core.Symbol(null,"todo-list-item","todo-list-item",250361684,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"todo","todo",594088957,null),cljs.core.list(new cljs.core.Symbol(null,"mx-find-matrix","mx-find-matrix",1173112654,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23016 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.example.todomvc.toggle_all.call(null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-list"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selections","selections",-1277610233),tiltontec.cell.core.cI.call(null,null),new cljs.core.Keyword(null,"kid-values","kid-values",575730341),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rte","rte",1174575981,null),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"td-created","td-created",1922435389,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core.list(new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"rte","rte",1174575981,null),"All",new cljs.core.Keyword(null,"items","items",1031954938),"Completed",new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),"Active",new cljs.core.Keyword(null,"items-active","items-active",-1058660354)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var temp__4657__auto__ = tiltontec.webmx.example.todomvc.mx_route.call(null,me__$1);
if(cljs.core.truth_(temp__4657__auto__)){
var rte = temp__4657__auto__;
return cljs.core.sort_by.call(null,tiltontec.webmx.example.todo.td_created,tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_todos.call(null,me__$1),(function (){var G__23019 = rte;
switch (G__23019) {
case "All":
return new cljs.core.Keyword(null,"items","items",1031954938);

break;
case "Completed":
return new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098);

break;
case "Active":
return new cljs.core.Keyword(null,"items-active","items-active",-1058660354);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23019)].join('')));

}
})()));
} else {
return null;
}
});})(x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"kid-key","kid-key",-779444857),((function (x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache){
return (function (p1__23015_SHARP_){
return tiltontec.model.core._LT_mget.call(null,p1__23015_SHARP_,new cljs.core.Keyword(null,"todo","todo",-1046442570));
});})(x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache))
,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394),((function (x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache){
return (function (me__$1,todo){
return tiltontec.webmx.example.todomx_list_item.todo_list_item.call(null,me__$1,todo,tiltontec.webmx.example.todomvc.mx_find_matrix.call(null,me__$1));
});})(x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache))
], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"kid-values-kids","kid-values-kids",2028806910,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23020 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = tiltontec.model.core.kid_values_kids.call(null,me__$1,cache__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23020;
}});})(x__7617__auto__,_STAR_par_STAR_23016,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23016;
}})));
});
tiltontec.webmx.example.todomvc.toggle_all = (function tiltontec$webmx$example$todomvc$toggle_all(){
return tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822),new cljs.core.Keyword(null,"complete","complete",-500388775))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.every_QMARK_.call(null,tiltontec.webmx.example.todo.td_completed,tiltontec.webmx.example.todomvc.mx_todo_items.call(null,me))){
return new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822);
} else {
return new cljs.core.Keyword(null,"complete","complete",-500388775);
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23022#","p1__23022#",1650788817,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"action","action",829293503,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"action","action",-811238024))], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"p1__23022#","p1__23022#",1650788817,null)),cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"td","td",-1174502416,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null))], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Keyword(null,"complete","complete",-500388775)),cljs.core.list(new cljs.core.Symbol(null,"now","now",-9994004,null)))))))], null),"Mark all as complete"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23023 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"class","class",-2030961996),"toggle-all",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23023,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core._EQ_.call(null,tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"action","action",-811238024)),new cljs.core.Keyword(null,"uncomplete","uncomplete",-418347822));
});})(_STAR_par_STAR_23023,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"toggle-all",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7617__auto__,_STAR_par_STAR_23023,me,cell,slot_name,cache){
return (function (p1__23022_SHARP_){
var action = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"action","action",-811238024));
goog.events.Event.preventDefault(p1__23022_SHARP_);

var seq__23029 = cljs.core.seq.call(null,tiltontec.webmx.example.todomvc.mx_todo_items.call(null));
var chunk__23030 = null;
var count__23031 = (0);
var i__23032 = (0);
while(true){
if((i__23032 < count__23031)){
var td = cljs.core._nth.call(null,chunk__23030,i__23032);
tiltontec.model.core.mset_BANG__GT_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__23034 = seq__23029;
var G__23035 = chunk__23030;
var G__23036 = count__23031;
var G__23037 = (i__23032 + (1));
seq__23029 = G__23034;
chunk__23030 = G__23035;
count__23031 = G__23036;
i__23032 = G__23037;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23029);
if(temp__4657__auto__){
var seq__23029__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23029__$1)){
var c__7594__auto__ = cljs.core.chunk_first.call(null,seq__23029__$1);
var G__23038 = cljs.core.chunk_rest.call(null,seq__23029__$1);
var G__23039 = c__7594__auto__;
var G__23040 = cljs.core.count.call(null,c__7594__auto__);
var G__23041 = (0);
seq__23029 = G__23038;
chunk__23030 = G__23039;
count__23031 = G__23040;
i__23032 = G__23041;
continue;
} else {
var td = cljs.core.first.call(null,seq__23029__$1);
tiltontec.model.core.mset_BANG__GT_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),((cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"complete","complete",-500388775)))?tiltontec.util.core.now.call(null):null));

var G__23042 = cljs.core.next.call(null,seq__23029__$1);
var G__23043 = null;
var G__23044 = (0);
var G__23045 = (0);
seq__23029 = G__23042;
chunk__23030 = G__23043;
count__23031 = G__23044;
i__23032 = G__23045;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7617__auto__,_STAR_par_STAR_23023,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Mark all as complete")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23023,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23033 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Mark all as complete"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23033;
}});})(x__7617__auto__,_STAR_par_STAR_23023,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23023;
}})));
});
tiltontec.webmx.example.todomvc.ae_autocheck_QMARK_ = (function tiltontec$webmx$example$todomvc$ae_autocheck_QMARK_(){
return tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ae-autocheck",new cljs.core.Keyword(null,"class","class",-2030961996),"ae-autocheck",new cljs.core.Keyword(null,"onchange","onchange",1355467329),(function (p1__23046_SHARP_){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"divchg!!!","divchg!!!",-2044706303),p1__23046_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),"margin:24px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on?","on?",-74017086),tiltontec.cell.core.cI.call(null,false)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ae-autocheckbox",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"onchange","onchange",1355467329),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23047#","p1__23047#",-95113908,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on?","on?",1566514441,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086))], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"p1__23047#","p1__23047#",-95113908,null)),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"ae-chkbox-onchange","ae-chkbox-onchange",-1879084002),new cljs.core.Symbol(null,"on?","on?",1566514441,null),cljs.core.list(new cljs.core.Symbol(null,".-value",".-value",324050785,null),cljs.core.list(new cljs.core.Symbol(null,".-target",".-target",683579619,null),new cljs.core.Symbol(null,"p1__23047#","p1__23047#",-95113908,null)))),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"on?","on?",1566514441,null))))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"checked?????","checked?????",-472916552),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086))),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"ae-autocheckbox",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23048#","p1__23048#",338061936,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on?","on?",1566514441,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086))], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"p1__23048#","p1__23048#",338061936,null)),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"ae-label-click","ae-label-click",-460744339),new cljs.core.Symbol(null,"on?","on?",1566514441,null)),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"on?","on?",1566514441,null)))))], null),"Auto AE"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23049 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"ae-autocheckbox",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"onchange","onchange",1355467329),((function (_STAR_par_STAR_23049,me,cell,slot_name,cache){
return (function (p1__23047_SHARP_){
var on_QMARK_ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"on?","on?",-74017086));
goog.events.Event.preventDefault(p1__23047_SHARP_);

cljs.core.println.call(null,new cljs.core.Keyword(null,"ae-chkbox-onchange","ae-chkbox-onchange",-1879084002),on_QMARK_,p1__23047_SHARP_.target.value);

return tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.not.call(null,on_QMARK_));
});})(_STAR_par_STAR_23049,me,cell,slot_name,cache))
,new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"checked?????","checked?????",-472916552),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086))),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23049,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
cljs.core.println.call(null,new cljs.core.Keyword(null,"checked?????","checked?????",-472916552),tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"on?","on?",-74017086)));

return tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$1),new cljs.core.Keyword(null,"on?","on?",-74017086));
});})(_STAR_par_STAR_23049,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),"ae-autocheckbox",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7617__auto__,_STAR_par_STAR_23049,me,cell,slot_name,cache){
return (function (p1__23048_SHARP_){
var on_QMARK_ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"on?","on?",-74017086));
goog.events.Event.preventDefault(p1__23048_SHARP_);

cljs.core.println.call(null,new cljs.core.Keyword(null,"ae-label-click","ae-label-click",-460744339),on_QMARK_);

return tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.not.call(null,on_QMARK_));
});})(x__7617__auto__,_STAR_par_STAR_23049,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Auto AE")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23049,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23051 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Auto AE"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23051;
}});})(x__7617__auto__,_STAR_par_STAR_23049,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23049;
}})));
});
tiltontec.webmx.example.todomvc.std_clock = (function tiltontec$webmx$example$todomvc$std_clock(){
var steps = cljs.core.atom.call(null,(0));
return tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"std-clock",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"subs","subs",1453849536,null),cljs.core.list(new cljs.core.Symbol(null,".toDateString",".toDateString",-507911825,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"clock","clock",-894301127)))),(4))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (steps){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.subs.call(null,(new Date(tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"clock","clock",-894301127)))).toDateString(),(4));
});})(steps))
)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clock","clock",-894301127),tiltontec.cell.core.cI.call(null,tiltontec.util.core.now.call(null)),new cljs.core.Keyword(null,"ticker","ticker",214613162),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol("js","setInterval","js/setInterval",2090002939,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"steps","steps",1512098225,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null))),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time-step","time-step",-563344681,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(6),(3600),(1000)),new cljs.core.Symbol(null,"w","w",1994700528,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"clock","clock",-894301127))], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"clock","clock",-894301127),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"time-step","time-step",-563344681,null)))))),(1000))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (steps){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_23052 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return setInterval(((function (_STAR_depender_STAR_23052,me,cell,slot_name,cache,steps){
return (function (){
if((cljs.core.swap_BANG_.call(null,steps,cljs.core.dec) > (0))){
var time_step = (((6) * (3600)) * (1000));
var w = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"clock","clock",-894301127));
return tiltontec.model.core.mset_BANG__GT_.call(null,me,new cljs.core.Keyword(null,"clock","clock",-894301127),(w + time_step));
} else {
return null;
}
});})(_STAR_depender_STAR_23052,me,cell,slot_name,cache,steps))
,(1000));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_23052;
}});})(steps))
)], null),null);
});
tiltontec.webmx.example.todomvc.dashboard_footer = (function tiltontec$webmx$example$todomvc$dashboard_footer(){
return tiltontec.webmx.gen.make_tag.call(null,"footer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"footer",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"empty?","empty?",-1564122972))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_todos.call(null,me),new cljs.core.Keyword(null,"empty?","empty?",-1564122972));
}))], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null))))))], null)),cljs.core.list(new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null))))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"td","td",-1174502416,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"td","td",-1174502416,null))))], null),"Clear completed"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23053 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"todo-count",new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,"<strong>~a</strong>  item~:P remaining",cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todo-items","mx-todo-items",1815052395,null),new cljs.core.Symbol(null,"me","me",1501524834,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",cljs.core.count.call(null,cljs.core.remove.call(null,tiltontec.webmx.example.todo.td_completed,tiltontec.webmx.example.todomvc.mx_todo_items.call(null,me__$1))));
});})(_STAR_par_STAR_23053,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"filters"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"li","li",-1930876848,null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23087 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = (function (){var iter__7563__auto__ = ((function (_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function tiltontec$webmx$example$todomvc$dashboard_footer_$_iter__23104(s__23105){
return (new cljs.core.LazySeq(null,((function (_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (){
var s__23105__$1 = s__23105;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23105__$1);
if(temp__4657__auto__){
var s__23105__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23105__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__23105__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__23107 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__23106 = (0);
while(true){
if((i__23106 < size__7562__auto__)){
var vec__23108 = cljs.core._nth.call(null,c__7561__auto__,i__23106);
var label = cljs.core.nth.call(null,vec__23108,(0),null);
var route = cljs.core.nth.call(null,vec__23108,(1),null);
cljs.core.chunk_append.call(null,b__23107,tiltontec.webmx.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__23106,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23111 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__23106,_STAR_par_STAR_23111,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),tiltontec.webmx.example.todomvc.mx_route.call(null,me__$3))){
return "selected";
} else {
return null;
}
});})(i__23106,_STAR_par_STAR_23111,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (i__23106,_STAR_par_STAR_23111,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23113 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23113;
}});})(i__23106,_STAR_par_STAR_23111,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23111;
}});})(i__23106,vec__23108,label,route,c__7561__auto__,size__7562__auto__,b__23107,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
)));

var G__23130 = (i__23106 + (1));
i__23106 = G__23130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23107),tiltontec$webmx$example$todomvc$dashboard_footer_$_iter__23104.call(null,cljs.core.chunk_rest.call(null,s__23105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23107),null);
}
} else {
var vec__23114 = cljs.core.first.call(null,s__23105__$2);
var label = cljs.core.nth.call(null,vec__23114,(0),null);
var route = cljs.core.nth.call(null,vec__23114,(1),null);
return cljs.core.cons.call(null,tiltontec.webmx.gen.make_tag.call(null,"li",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected"))], null),new cljs.core.Symbol(null,"label","label",-936024965,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23117 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"a",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),route,new cljs.core.Keyword(null,"selector","selector",762528866),label,new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),cljs.core.list(new cljs.core.Symbol(null,"mx-route","mx-route",-232011096,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"selected")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23117,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$3)),tiltontec.webmx.example.todomvc.mx_route.call(null,me__$3))){
return "selected";
} else {
return null;
}
});})(_STAR_par_STAR_23117,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label","label",-936024965,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23117,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$3){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$3);
var cell__$3 = slot_c_SHARP___$3;
var slot_name__$3 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$3);
var cache__$3 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$3);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23119 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$1 = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23119;
}});})(_STAR_par_STAR_23117,me__$2,cell__$2,slot_name__$2,cache__$2,vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23117;
}});})(vec__23114,label,route,s__23105__$2,temp__4657__auto__,_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
)),tiltontec$webmx$example$todomvc$dashboard_footer_$_iter__23104.call(null,cljs.core.rest.call(null,s__23105__$2)));
}
} else {
return null;
}
break;
}
});})(_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
,null,null));
});})(_STAR_par_STAR_23087,me__$1,cell__$1,slot_name__$1,cache__$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
;
return iter__7563__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","#/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active","#/active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed","#/completed"], null)], null));
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23087;
}});})(x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear-completed",new cljs.core.Keyword(null,"hidden","hidden",-312506092),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-todos","mx-todos",1229326129,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return cljs.core.empty_QMARK_.call(null,tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_todos.call(null,me__$1),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098)));
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (){
var seq__23125 = cljs.core.seq.call(null,cljs.core.filter.call(null,tiltontec.webmx.example.todo.td_completed,tiltontec.webmx.example.todomvc.mx_todo_items.call(null)));
var chunk__23126 = null;
var count__23127 = (0);
var i__23128 = (0);
while(true){
if((i__23128 < count__23127)){
var td = cljs.core._nth.call(null,chunk__23126,i__23128);
tiltontec.webmx.example.todo.td_delete_BANG_.call(null,td);

var G__23131 = seq__23125;
var G__23132 = chunk__23126;
var G__23133 = count__23127;
var G__23134 = (i__23128 + (1));
seq__23125 = G__23131;
chunk__23126 = G__23132;
count__23127 = G__23133;
i__23128 = G__23134;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23125);
if(temp__4657__auto__){
var seq__23125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23125__$1)){
var c__7594__auto__ = cljs.core.chunk_first.call(null,seq__23125__$1);
var G__23135 = cljs.core.chunk_rest.call(null,seq__23125__$1);
var G__23136 = c__7594__auto__;
var G__23137 = cljs.core.count.call(null,c__7594__auto__);
var G__23138 = (0);
seq__23125 = G__23135;
chunk__23126 = G__23136;
count__23127 = G__23137;
i__23128 = G__23138;
continue;
} else {
var td = cljs.core.first.call(null,seq__23125__$1);
tiltontec.webmx.example.todo.td_delete_BANG_.call(null,td);

var G__23139 = cljs.core.next.call(null,seq__23125__$1);
var G__23140 = null;
var G__23141 = (0);
var G__23142 = (0);
seq__23125 = G__23139;
chunk__23126 = G__23140;
count__23127 = G__23141;
i__23128 = G__23142;
continue;
}
} else {
return null;
}
}
break;
}
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Clear completed")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23129 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Clear completed"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23129;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23053,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23053;
}})));
});
tiltontec.webmx.example.todomvc.mx_route = (function tiltontec$webmx$example$todomvc$mx_route(mx){
return tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_find_matrix.call(null,mx),new cljs.core.Keyword(null,"route","route",329891309));
});
/**
 * Given a node in the matrix, navigate to the root and read the todos. After
 *   the matrix is initially loaded (say in an event handler), one can pass nil
 *   and find the matrix in @matrix. Put another way, a starting node is required
 *   during the matrix's initial build.
 */
tiltontec.webmx.example.todomvc.mx_todos = (function tiltontec$webmx$example$todomvc$mx_todos(var_args){
var G__23144 = arguments.length;
switch (G__23144) {
case 0:
return tiltontec.webmx.example.todomvc.mx_todos.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.webmx.example.todomvc.mx_todos.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.webmx.example.todomvc.mx_todos.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.model.core._LT_mget.call(null,cljs.core.deref.call(null,tiltontec.model.core.matrix),new cljs.core.Keyword(null,"todos","todos",630308868));
});

tiltontec.webmx.example.todomvc.mx_todos.cljs$core$IFn$_invoke$arity$1 = (function (mx){
if((mx == null)){
return tiltontec.webmx.example.todomvc.mx_todos.call(null);
} else {
var mtrx = tiltontec.webmx.example.todomvc.mx_find_matrix.call(null,mx);
if(cljs.core.truth_(mtrx)){
} else {
throw (new Error("Assert failed: mtrx"));
}

return tiltontec.model.core._LT_mget.call(null,mtrx,new cljs.core.Keyword(null,"todos","todos",630308868));
}
});

tiltontec.webmx.example.todomvc.mx_todos.cljs$lang$maxFixedArity = 1;

tiltontec.webmx.example.todomvc.mx_todo_items = (function tiltontec$webmx$example$todomvc$mx_todo_items(var_args){
var G__23147 = arguments.length;
switch (G__23147) {
case 0:
return tiltontec.webmx.example.todomvc.mx_todo_items.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tiltontec.webmx.example.todomvc.mx_todo_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.webmx.example.todomvc.mx_todo_items.cljs$core$IFn$_invoke$arity$0 = (function (){
return tiltontec.webmx.example.todomvc.mx_todo_items.call(null,null);
});

tiltontec.webmx.example.todomvc.mx_todo_items.cljs$core$IFn$_invoke$arity$1 = (function (mx){
return tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.example.todomvc.mx_todos.call(null,mx),new cljs.core.Keyword(null,"items","items",1031954938));
});

tiltontec.webmx.example.todomvc.mx_todo_items.cljs$lang$maxFixedArity = 1;

tiltontec.webmx.example.todomvc.mx_find_matrix = (function tiltontec$webmx$example$todomvc$mx_find_matrix(mx){
return tiltontec.model.core.mxu_find_type.call(null,mx,new cljs.core.Keyword("tiltontec.webmx.example.todomvc","todoApp","tiltontec.webmx.example.todomvc/todoApp",-1449233993));
});

//# sourceMappingURL=todomvc.js.map