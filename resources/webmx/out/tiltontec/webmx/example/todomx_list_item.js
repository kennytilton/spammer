// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.todomx_list_item');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('bide.core');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.synapse');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.html');
goog.require('tiltontec.xhr');
goog.require('tiltontec.webmx.gen');
goog.require('tiltontec.webmx.style');
goog.require('goog.dom');
goog.require('goog.dom.classlist');
goog.require('goog.editor.focus');
goog.require('goog.dom.selection');
goog.require('goog.events.Event');
goog.require('goog.dom.forms');
goog.require('tiltontec.webmx.example.todo');
goog.require('cljs_time.coerce');


tiltontec.webmx.example.todomx_list_item.todo_list_item = (function tiltontec$webmx$example$todomx_list_item$todo_list_item(me,todo,matrix){
return tiltontec.webmx.gen.make_tag.call(null,"li",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"selected?","selected?",-742502788)),"chosen"),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)),"completed")], null)),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(tiltontec.model.core._LT_mget.call(null,me__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788)))?"chosen":null),(cljs.core.truth_(tiltontec.webmx.example.todo.td_completed.call(null,todo))?"completed":null)], null);
})),new cljs.core.Keyword(null,"display","display",242065432),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route","route",1970422836,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Keyword(null,"route","route",329891309))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"All"),cljs.core.list(new cljs.core.Symbol(null,"xor","xor",520589273,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"route","route",1970422836,null),"Active"),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))),"block",new cljs.core.Keyword(null,"default","default",-1987822328),"none"),"block")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var temp__4655__auto__ = tiltontec.model.core._LT_mget.call(null,matrix,new cljs.core.Keyword(null,"route","route",329891309));
if(cljs.core.truth_(temp__4655__auto__)){
var route = temp__4655__auto__;
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,route,"All");
if(or__6772__auto__){
return or__6772__auto__;
} else {
return tiltontec.util.core.xor.call(null,cljs.core._EQ_.call(null,route,"Active"),tiltontec.webmx.example.todo.td_completed.call(null,todo));
}
})())){
return "block";
} else {
return "none";

}
} else {
return "block";
}
}))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"todo","todo",-1046442570),todo,new cljs.core.Keyword(null,"selected?","selected?",-742502788),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-tag","mxu-find-tag",1812104326,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ul","ul",-1349521403)),new cljs.core.Keyword(null,"selections","selections",-1277610233)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([todo]),tiltontec.model.core._LT_mget.call(null,tiltontec.webmx.html.mxu_find_tag.call(null,me__$1,new cljs.core.Keyword(null,"ul","ul",-1349521403)),new cljs.core.Keyword(null,"selections","selections",-1277610233)));
})),new cljs.core.Keyword(null,"editing","editing",1365491601),tiltontec.cell.core.cI.call(null,false)], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-toggle-completed!","td-toggle-completed!",1024639246,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-tag","mxu-find-tag",1812104326,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ul","ul",-1349521403))], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233))], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))))),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22936#","p1__22936#",-2004903049,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),cljs.core.list(new cljs.core.Symbol("dom","getAncestorByTagNameAndClass","dom/getAncestorByTagNameAndClass",1576389817,null),cljs.core.list(new cljs.core.Symbol(null,".-target",".-target",683579619,null),new cljs.core.Symbol(null,"p1__22936#","p1__22936#",-2004903049,null)),"li"),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol("dom","getElementByClass","dom/getElementByClass",-1709014822,null),"edit",new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null))], null),cljs.core.list(new cljs.core.Symbol("classlist","add","classlist/add",1850054952,null),new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),"editing"),cljs.core.list(new cljs.core.Symbol("webmx","input-editing-start","webmx/input-editing-start",1049857397,null),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null))),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22937#","p1__22937#",1677351270,null)], null),cljs.core.list(new cljs.core.Symbol(null,"todo-edit","todo-edit",573841998,null),new cljs.core.Symbol(null,"p1__22937#","p1__22937#",1677351270,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22938#","p1__22938#",-1302358765,null)], null),cljs.core.list(new cljs.core.Symbol(null,"todo-edit","todo-edit",573841998,null),new cljs.core.Symbol(null,"p1__22938#","p1__22938#",-1302358765,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22939 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))))),new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-toggle-completed!","td-toggle-completed!",1024639246,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-tag","mxu-find-tag",1812104326,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ul","ul",-1349521403))], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233))], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))))),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__22936#","p1__22936#",-2004903049,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),cljs.core.list(new cljs.core.Symbol("dom","getAncestorByTagNameAndClass","dom/getAncestorByTagNameAndClass",1576389817,null),cljs.core.list(new cljs.core.Symbol(null,".-target",".-target",683579619,null),new cljs.core.Symbol(null,"p1__22936#","p1__22936#",-2004903049,null)),"li"),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol("dom","getElementByClass","dom/getElementByClass",-1709014822,null),"edit",new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null))], null),cljs.core.list(new cljs.core.Symbol("classlist","add","classlist/add",1850054952,null),new cljs.core.Symbol(null,"li-dom","li-dom",627087753,null),"editing"),cljs.core.list(new cljs.core.Symbol("webmx","input-editing-start","webmx/input-editing-start",1049857397,null),new cljs.core.Symbol(null,"edt-dom","edt-dom",315193713,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),cljs.core.list(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"td-delete!","td-delete!",1322716646,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22943 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"toggle",new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
return !((tiltontec.webmx.example.todo.td_completed.call(null,todo) == null));
});})(_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
),new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (){
return tiltontec.webmx.example.todo.td_toggle_completed_BANG_.call(null,todo);
});})(_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-tag","mxu-find-tag",1812104326,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ul","ul",-1349521403))], null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233))], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"todo","todo",594088957,null),null], null), null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"curr-sel","curr-sel",-126764152,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
var selector = tiltontec.webmx.html.mxu_find_tag.call(null,me__$3,new cljs.core.Keyword(null,"ul","ul",-1349521403));
return ((function (selector,me__$3,cell__$2,slot_name__$2,cache__$2,x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (){
var curr_sel = tiltontec.model.core._LT_mget.call(null,selector,new cljs.core.Keyword(null,"selections","selections",-1277610233));
return tiltontec.model.core.mset_BANG__GT_.call(null,selector,new cljs.core.Keyword(null,"selections","selections",-1277610233),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([todo]),curr_sel))?cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([todo]),curr_sel):cljs.core.conj.call(null,curr_sel,todo)));
});
;})(selector,me__$3,cell__$2,slot_name__$2,cache__$2,x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
});})(x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
),new cljs.core.Keyword(null,"ondblclick","ondblclick",1587196472),((function (x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (p1__22936_SHARP_){
var li_dom = goog.dom.getAncestorByTagNameAndClass(p1__22936_SHARP_.target,"li");
var edt_dom = goog.dom.getElementByClass("edit",li_dom);
goog.dom.classlist.add(li_dom,"editing");

return tiltontec.webmx.html.input_editing_start.call(null,edt_dom,tiltontec.webmx.example.todo.td_title.call(null,todo));
});})(x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$2){
var me__$3 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$2);
var cell__$2 = slot_c_SHARP___$2;
var slot_name__$2 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$2);
var cache__$2 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$2);
if(cljs.core.truth_(me__$3)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22945 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$3;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.example.todo.td_title.call(null,todo);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22945;
}});})(x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"destroy",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (){
return tiltontec.webmx.example.todo.td_delete_BANG_.call(null,todo);
});})(x__7615__auto____$1,x__7615__auto__,_STAR_par_STAR_22943,me__$2,cell__$1,slot_name__$1,cache__$1,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$2);
})(),x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22943;
}});})(_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"edit",new cljs.core.Keyword(null,"onblur","onblur",689939618),((function (x__7615__auto__,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (p1__22937_SHARP_){
return tiltontec.webmx.example.todomx_list_item.todo_edit.call(null,p1__22937_SHARP_,todo);
});})(x__7615__auto__,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
,new cljs.core.Keyword(null,"onkeydown","onkeydown",859512715),((function (x__7615__auto__,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache){
return (function (p1__22938_SHARP_){
return tiltontec.webmx.example.todomx_list_item.todo_edit.call(null,p1__22938_SHARP_,todo);
});})(x__7615__auto__,_STAR_par_STAR_22939,me__$1,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22939;
}})));
});
tiltontec.webmx.example.todomx_list_item.todo_edit = (function tiltontec$webmx$example$todomx_list_item$todo_edit(e,todo){
var edt_dom = e.target;
var li_dom = goog.dom.getAncestorByTagNameAndClass(edt_dom,"li");
if(cljs.core.truth_(goog.dom.classlist.contains(li_dom,"editing"))){
var title = clojure.string.trim.call(null,goog.dom.forms.getValue(edt_dom));
var stop_editing = ((function (title,edt_dom,li_dom){
return (function (){
return goog.dom.classlist.remove(li_dom,"editing");
});})(title,edt_dom,li_dom))
;
if((cljs.core._EQ_.call(null,e.type,"blur")) || (cljs.core._EQ_.call(null,e.key,"Enter"))){
stop_editing.call(null);

if(cljs.core._EQ_.call(null,title,"")){
return tiltontec.webmx.example.todo.td_delete_BANG_.call(null,todo);
} else {
return tiltontec.model.core.mset_BANG__GT_.call(null,todo,new cljs.core.Keyword(null,"title","title",636505583),title);
}
} else {
if(cljs.core._EQ_.call(null,e.key,"Escape")){
return stop_editing.call(null);
} else {
return null;
}
}
} else {
return null;
}
});
tiltontec.webmx.example.todomx_list_item.de_whitespace = (function tiltontec$webmx$example$todomx_list_item$de_whitespace(s){
return clojure.string.replace.call(null,s,/\s/,"");
});
tiltontec.webmx.example.todomx_list_item.ae_by_brand = "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:~(~a~)&limit=3";
tiltontec.webmx.example.todomx_list_item.ae_explorer = (function tiltontec$webmx$example$todomx_list_item$ae_explorer(todo){
return tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"li-show",new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xhr","xhr",1462820676,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"ae","ae",1059137307))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aes","aes",1328193034,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-response","xhr-response",1612983320,null),new cljs.core.Symbol(null,"xhr","xhr",1462820676,null))], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"aex-aes!!!","aex-aes!!!",-118549145),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"aes","aes",1328193034,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"aes","aes",1328193034,null))),"display:block"))),"display:none")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var or__6772__auto__ = (function (){var temp__4657__auto__ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"ae","ae",1059137307));
if(cljs.core.truth_(temp__4657__auto__)){
var xhr = temp__4657__auto__;
var aes = tiltontec.xhr.xhr_response.call(null,xhr);
cljs.core.println.call(null,new cljs.core.Keyword(null,"aex-aes!!!","aex-aes!!!",-118549145),tiltontec.webmx.example.todo.td_title.call(null,todo),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(aes));

if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(aes))){
return "display:block";
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return "display:none";
}
})),new cljs.core.Keyword(null,"onclick","onclick",1297553739),(function (){
return alert("Feature not yet implemented");
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ae","ae",1059137307),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
if((cljs.core._EQ_.call(null,old,tiltontec.cell.base.unbound)) || ((old == null))){
return null;
} else {
return tiltontec.cell.evaluate.not_to_be.call(null,old);
}
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chk","chk",-1330817191,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-class","mxu-find-class",-1994281319,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"ae-autocheck")], null),cljs.core.list(new cljs.core.Symbol(null,"assert","assert",677428501,null),new cljs.core.Symbol(null,"chk","chk",-1330817191,null)),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"seeing-autocheck","seeing-autocheck",-1163005084),cljs.core.list(new cljs.core.Symbol(null,"tagfo","tagfo",-211567504,null),new cljs.core.Symbol(null,"chk","chk",-1330817191,null)),cljs.core.list(new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"chk","chk",-1330817191,null)))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"chk","chk",-1330817191,null),new cljs.core.Keyword(null,"on?","on?",-74017086)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"aex-looking-up!!!!","aex-looking-up!!!!",1140644455),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))),cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,new cljs.core.Symbol(null,"ae-by-brand","ae-by-brand",-1130001806,null),cljs.core.list(new cljs.core.Symbol(null,"td-title","td-title",-407888912,null),new cljs.core.Symbol(null,"todo","todo",594088957,null)))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var chk = tiltontec.webmx.html.mxu_find_class.call(null,me,"ae-autocheck");
if(cljs.core.truth_(chk)){
} else {
throw (new Error("Assert failed: chk"));
}

cljs.core.println.call(null,new cljs.core.Keyword(null,"seeing-autocheck","seeing-autocheck",-1163005084),tiltontec.webmx.html.tagfo.call(null,chk),new cljs.core.Keyword(null,"on?","on?",-74017086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chk)));

if(cljs.core.truth_(tiltontec.model.core._LT_mget.call(null,chk,new cljs.core.Keyword(null,"on?","on?",-74017086)))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"aex-looking-up!!!!","aex-looking-up!!!!",1140644455),tiltontec.webmx.example.todo.td_title.call(null,todo));

return tiltontec.xhr.send_xhr.call(null,cljs.pprint.cl_format.call(null,null,tiltontec.webmx.example.todomx_list_item.ae_by_brand,tiltontec.webmx.example.todo.td_title.call(null,todo)));
} else {
return null;
}
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"], null),"View Adverse Events"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22946 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"View Adverse Events")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_22946,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22948 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"View Adverse Events"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22948;
}});})(_STAR_par_STAR_22946,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22946;
}})));
});
tiltontec.webmx.example.todomx_list_item.due_by = (function tiltontec$webmx$example$todomx_list_item$due_by(todo){
return tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"date",new cljs.core.Keyword(null,"class","class",-2030961996),"due-by",new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"td-due-by","td-due-by",2079929613,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db$","db$",748272624,null),cljs.core.list(new cljs.core.Symbol("tmc","to-string","tmc/to-string",-333608044,null),cljs.core.list(new cljs.core.Symbol("tmc","from-long","tmc/from-long",825244876,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"db$","db$",748272624,null),(0),(10))))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22950 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var temp__4657__auto__ = tiltontec.webmx.example.todo.td_due_by.call(null,todo);
if(cljs.core.truth_(temp__4657__auto__)){
var db = temp__4657__auto__;
var db$ = cljs_time.coerce.to_string.call(null,cljs_time.coerce.from_long.call(null,db));
return cljs.core.subs.call(null,db$,(0),(10));
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22950;
}})),new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"make-css-inline","make-css-inline",-351681428,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"due","due",-114199786,null),cljs.core.list(new cljs.core.Symbol(null,"td-due-by","td-due-by",2079929613,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clock","clock",746230400,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-class","mxu-find-class",-1994281319,null),cljs.core.list(new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"std-clock")], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"due","due",-114199786,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Keyword(null,"clock","clock",-894301127)))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null)),"red",cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(24),(3600),(1000))),"orange",cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),(24),(3600),(1000))),"yellow",new cljs.core.Keyword(null,"default","default",-1987822328),"green")),new cljs.core.Symbol(null,"cache","cache",403508473,null)))))),new cljs.core.Keyword(null,"input?","input?",-1792843173),null,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22951 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return tiltontec.webmx.style.make_css_inline.call(null,me,new cljs.core.Keyword(null,"background-color","background-color",570434026),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"due","due",-114199786,null),cljs.core.list(new cljs.core.Symbol(null,"td-due-by","td-due-by",2079929613,null),new cljs.core.Symbol(null,"todo","todo",594088957,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clock","clock",746230400,null),cljs.core.list(new cljs.core.Symbol(null,"mxu-find-class","mxu-find-class",-1994281319,null),cljs.core.list(new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"me","me",1501524834,null))),"std-clock")], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"due","due",-114199786,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Keyword(null,"clock","clock",-894301127)))], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null)),"red",cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(24),(3600),(1000))),"orange",cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"time-left","time-left",-1025872546,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),(2),(24),(3600),(1000))),"yellow",new cljs.core.Keyword(null,"default","default",-1987822328),"green")),new cljs.core.Symbol(null,"cache","cache",403508473,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_depender_STAR_22951,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
var temp__4655__auto__ = tiltontec.webmx.example.todo.td_due_by.call(null,todo);
if(cljs.core.truth_(temp__4655__auto__)){
var due = temp__4655__auto__;
var temp__4655__auto____$1 = tiltontec.webmx.html.mxu_find_class.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me__$1)),"std-clock");
if(cljs.core.truth_(temp__4655__auto____$1)){
var clock = temp__4655__auto____$1;
var time_left = (due - tiltontec.model.core._LT_mget.call(null,clock,new cljs.core.Keyword(null,"clock","clock",-894301127)));
if((time_left < (0))){
return "red";
} else {
if((time_left < (((24) * (3600)) * (1000)))){
return "orange";
} else {
if((time_left < ((((2) * (24)) * (3600)) * (1000)))){
return "yellow";
} else {
return "green";

}
}
}
} else {
return cache__$1;
}
} else {
return null;
}
});})(_STAR_depender_STAR_22951,me,cell,slot_name,cache))
));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22951;
}})),new cljs.core.Keyword(null,"oninput","oninput",-709673265),(function (p1__22949_SHARP_){
return tiltontec.model.core.mset_BANG__GT_.call(null,todo,new cljs.core.Keyword(null,"due-by","due-by",1079830021),cljs_time.coerce.to_long.call(null,cljs_time.coerce.from_string.call(null,goog.dom.forms.getValue(p1__22949_SHARP_.target))));
})], null),cljs.core.PersistentArrayMap.EMPTY,null);
});
tiltontec.webmx.example.todomx_list_item.nih_interactions = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=~{4242~a~^+~}";
tiltontec.webmx.example.todomx_list_item.interaction_explorer = (function tiltontec$webmx$example$todomx_list_item$interaction_explorer(todo){
return tiltontec.webmx.gen.make_tag.call(null,"button",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"li-show",new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ias","ias",1932441146,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-response","xhr-response",1612983320,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"nih","nih",1175931135)))], null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"nih-inters!!!","nih-inters!!!",994396070),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"ias","ias",1932441146,null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),(200),cljs.core.list(new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Symbol(null,"ias","ias",1932441146,null))),"display:none")),"display:none")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var temp__4655__auto__ = tiltontec.xhr.xhr_response.call(null,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"nih","nih",1175931135)));
if(cljs.core.truth_(temp__4655__auto__)){
var ias = temp__4655__auto__;
cljs.core.println.call(null,new cljs.core.Keyword(null,"nih-inters!!!","nih-inters!!!",994396070),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(ias));

if(cljs.core.not_EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(ias))){
return "display:none";
} else {
return null;
}
} else {
return "display:none";
}
}))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nih","nih",1175931135),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rxcuis","rxcuis",1119306971,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1170620),(315971)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"println","println",-733595439,null),new cljs.core.Keyword(null,"nih-looking-up!!!!","nih-looking-up!!!!",-381649023),new cljs.core.Symbol(null,"rxcuis","rxcuis",1119306971,null)),cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),cljs.core.list(new cljs.core.Symbol("pp","cl-format","pp/cl-format",-1229841582,null),null,new cljs.core.Symbol(null,"nih-interactions","nih-interactions",-1690600880,null),new cljs.core.Symbol(null,"rxcuis","rxcuis",1119306971,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var rxcuis = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1170620),(315971)], null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"nih-looking-up!!!!","nih-looking-up!!!!",-381649023),rxcuis);

return tiltontec.xhr.send_xhr.call(null,cljs.pprint.cl_format.call(null,null,tiltontec.webmx.example.todomx_list_item.nih_interactions,rxcuis));
}))], null),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"], null),"View Interactions"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22952 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"font-size:0.7em;margin:2px;margin-top:0;vertical-align:top"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"View Interactions")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_22952,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_22954 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"View Interactions"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22954;
}});})(_STAR_par_STAR_22952,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_22952;
}})));
});

//# sourceMappingURL=todomx_list_item.js.map