// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.gentle_intro');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.html');
goog.require('tiltontec.webmx.gen');
goog.require('cljs_http.client');



tiltontec.webmx.example.gentle_intro.matrix_build_BANG_ = (function tiltontec$webmx$example$gentle_intro$matrix_build_BANG_(){
return tiltontec.webmx.example.gentle_intro.gentle_intro_models.call(null);
});
tiltontec.webmx.example.gentle_intro.gentle_intro_ls_key = "matrixcljs-gentle-intro";
tiltontec.webmx.example.gentle_intro.edit_intro_instructions = "Edit function matrix-build! in todomx/gentle_intro.cljs to try other examples.";
tiltontec.webmx.example.gentle_intro.gentle_intro_input_cells = (function tiltontec$webmx$example$gentle_intro$gentle_intro_input_cells(){
tiltontec.util.core.pln.call(null,"----- Part A: An input cell and its accessors ---------------------------------");

var todos_23550 = tiltontec.cell.core.cI.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wash car","mow lawn"], null));
tiltontec.util.core.pln.call(null,"wrapped value:",tiltontec.cell.evaluate.c_get.call(null,todos_23550));

tiltontec.cell.core.c_reset_BANG_.call(null,todos_23550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["learn Mandarin"], null));

tiltontec.util.core.pln.call(null,"changed value:",tiltontec.cell.evaluate.c_get.call(null,todos_23550));

tiltontec.util.core.pln.call(null,"----- Part B: observers let the matrix have useful effect -------------------");

tiltontec.webmx.html.io_clear_storage.call(null);

var todos_23551 = tiltontec.cell.core.cI.call(null,null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new_value,prior_value,cell){
return tiltontec.webmx.html.io_upsert.call(null,tiltontec.webmx.example.gentle_intro.gentle_intro_ls_key,JSON.stringify(tiltontec.util.core.map_to_json.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todos","todos",630308868),new_value], null))));
}));
cljs.core.println.call(null,"Storage before cI reset says:",tiltontec.webmx.html.io_read.call(null,tiltontec.webmx.example.gentle_intro.gentle_intro_ls_key));

tiltontec.util.core.pln.call(null,"Storing a couple of todos...");

tiltontec.cell.core.c_reset_BANG_.call(null,todos_23551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wash dog","learn Mandarin"], null));

cljs.core.println.call(null,"localStorage after reset says:",tiltontec.webmx.html.io_read.call(null,tiltontec.webmx.example.gentle_intro.gentle_intro_ls_key));

return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","dummyApp","tiltontec.webmx.example.gentle-intro/dummyApp",-542482125),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Input cells"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Input cells, accessors, and observers connecting matrix to world"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23541 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Gentle Intro: Input cells")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23541,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23543 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Gentle Intro: Input cells"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23543;
}});})(_STAR_par_STAR_23541,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Input cells, accessors, and observers connecting matrix to world")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23545 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Input cells, accessors, and observers connecting matrix to world"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23545;
}});})(x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"(see JS console for output)->")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23547 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23547;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23549 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.example.gentle_intro.edit_intro_instructions;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23549;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23541,me,cell,slot_name,cache))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23541;
}})))], null));
});
tiltontec.webmx.example.gentle_intro.gentle_intro_formulaic_cells = (function tiltontec$webmx$example$gentle_intro$gentle_intro_formulaic_cells(){
var todos = tiltontec.cell.core.cI.call(null,cljs.core.PersistentVector.EMPTY);
var add_todo = ((function (todos){
return (function (todo){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"procedural-adding-todo!!!","procedural-adding-todo!!!",2065223871));

return tiltontec.cell.core.c_reset_BANG_.call(null,todos,cljs.core.conj.call(null,tiltontec.cell.base.c_value.call(null,todos),todo));
});})(todos))
;
var clear_todos = ((function (todos,add_todo){
return (function (){
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"procedural-clearing-todos!!!","procedural-clearing-todos!!!",994732470));

return tiltontec.cell.core.c_reset_BANG_.call(null,todos,null);
});})(todos,add_todo))
;
var todo_count = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),((function (todos,add_todo,clear_todos){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.call(null,"HTML soon:",cljs.pprint.cl_format.call(null,null,"<strong>~a</strong>  item~:P remaining",new$));
});})(todos,add_todo,clear_todos))
,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),"rule: counting todos!"),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"c-get","c-get",183713010,null),new cljs.core.Symbol(null,"todos","todos",-2024126901,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (todos,add_todo,clear_todos){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
tiltontec.util.core.pln.call(null,"rule: counting todos!");

return cljs.core.count.call(null,tiltontec.cell.evaluate.c_get.call(null,todos));
});})(todos,add_todo,clear_todos))
);
var todos_empty = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),((function (todos,add_todo,clear_todos,todo_count){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.call(null,"obs: empty:",new$);
});})(todos,add_todo,clear_todos,todo_count))
,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),"rule: testing empty!"),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),cljs.core.list(new cljs.core.Symbol(null,"c-get","c-get",183713010,null),new cljs.core.Symbol(null,"todo-count","todo-count",1249774014,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (todos,add_todo,clear_todos,todo_count){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
tiltontec.util.core.pln.call(null,"rule: testing empty!");

return (tiltontec.cell.evaluate.c_get.call(null,todo_count) === (0));
});})(todos,add_todo,clear_todos,todo_count))
);
var html_hidden = tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),((function (todos,add_todo,clear_todos,todo_count,todos_empty){
return (function (slot,me,new$,old,c){
return tiltontec.util.core.pln.call(null,"obs: hidden:",new$);
});})(todos,add_todo,clear_todos,todo_count,todos_empty))
,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"pln","pln",-2099967607,null),"rule: testing if dom should be hidden"),cljs.core.list(new cljs.core.Symbol(null,"c-get","c-get",183713010,null),new cljs.core.Symbol(null,"todos-empty","todos-empty",965778423,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (todos,add_todo,clear_todos,todo_count,todos_empty){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
tiltontec.util.core.pln.call(null,"rule: testing if dom should be hidden");

return tiltontec.cell.evaluate.c_get.call(null,todos_empty);
});})(todos,add_todo,clear_todos,todo_count,todos_empty))
);
tiltontec.util.core.pln.call(null,"starting value of hidden",tiltontec.cell.evaluate.c_get.call(null,html_hidden));

add_todo.call(null,"clean dishes");

add_todo.call(null,"file taxes");

return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","dummyApp","tiltontec.webmx.example.gentle-intro/dummyApp",-542482125),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Formulaic cells"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Formulaic cells, matrix HTML"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23552 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Gentle Intro: Formulaic cells")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23554 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Gentle Intro: Formulaic cells"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23554;
}});})(_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Formulaic cells, matrix HTML")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23556 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Formulaic cells, matrix HTML"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23556;
}});})(x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"(see JS console for output)->")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23558 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23558;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23560 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.example.gentle_intro.edit_intro_instructions;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23560;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23552,me,cell,slot_name,cache,todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23552;
}});})(todos,add_todo,clear_todos,todo_count,todos_empty,html_hidden))
))], null));
});
tiltontec.webmx.example.gentle_intro.gentle_intro_models = (function tiltontec$webmx$example$gentle_intro$gentle_intro_models(){
var to_do = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","todo","tiltontec.webmx.example.gentle-intro/todo",-1861962445),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.example.gentle_intro.gentle_intro_ls_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4.call(null))].join(''),new cljs.core.Keyword(null,"created","created",-704993748),tiltontec.util.core.now.call(null),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.cI.call(null,"Sell car"),new cljs.core.Keyword(null,"versions","versions",536521978),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"obs","obs",-664011444),(function (slot,me,new$,old,c){
return tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"version","version",425292698),new$,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"title","title",636505583)));
}),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"title","title",636505583)),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.Symbol(null,"unbound","unbound",274204873,null)),(0),new cljs.core.Symbol(null,"cache","cache",403508473,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"title","title",636505583)))){
return (((cljs.core._EQ_.call(null,cache,tiltontec.cell.base.unbound))?(0):cache) + (1));
} else {
return null;
}
})),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.cI.call(null,false),new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.cell.core.cI.call(null,null));
tiltontec.model.core.mset_BANG__GT_.call(null,to_do,new cljs.core.Keyword(null,"title","title",636505583),"Sell car and boat");

return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","dummyApp","tiltontec.webmx.example.gentle-intro/dummyApp",-542482125),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro: Models"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"Models: objects with cells as properties"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"(see JS console for output)->"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (to_do){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23561 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Gentle Intro: Models")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23563 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Gentle Intro: Models"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23563;
}});})(_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Models: objects with cells as properties")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23565 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Models: objects with cells as properties"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23565;
}});})(x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"(see JS console for output)->")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23567 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"(see JS console for output)->"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23567;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"edit-intro-instructions","edit-intro-instructions",1259985562,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23569 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto____$3 = tiltontec.webmx.example.gentle_intro.edit_intro_instructions;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23569;
}});})(x__7617__auto____$2,x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23561,me,cell,slot_name,cache,to_do))
));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$3);
})(),x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23561;
}});})(to_do))
))], null));
});
tiltontec.webmx.example.gentle_intro.to_do = (42);
goog.exportSymbol('tiltontec.webmx.example.gentle_intro.to_do', tiltontec.webmx.example.gentle_intro.to_do);
tiltontec.webmx.example.gentle_intro.gentle_intro_to_Tag = (function tiltontec$webmx$example$gentle_intro$gentle_intro_to_Tag(){
var to_do = tiltontec.model.core.make.call(null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","todo","tiltontec.webmx.example.gentle-intro/todo",-1861962445),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.cI.call(null,"Sell car"),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.cI.call(null,true));
var completed = ((function (to_do){
return (function (p1__23570_SHARP_){
return tiltontec.model.core._LT_mget.call(null,p1__23570_SHARP_,new cljs.core.Keyword(null,"completed","completed",-486056503));
});})(to_do))
;
var title = ((function (to_do,completed){
return (function (p1__23571_SHARP_){
return tiltontec.model.core._LT_mget.call(null,p1__23571_SHARP_,new cljs.core.Keyword(null,"title","title",636505583));
});})(to_do,completed))
;
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.gentle-intro","dummyApp","tiltontec.webmx.example.gentle-intro/dummyApp",-542482125),new cljs.core.Keyword(null,"mx-dom","mx-dom",-1445377107),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.gen.make_tag.call(null,"div",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"margin:24px"], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"h1","h1",-256355935,null),cljs.core.PersistentArrayMap.EMPTY,"Gentle Intro to Tag&trade;"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),cljs.core.PersistentArrayMap.EMPTY,"(click below to toggle whether to-do has been done)"),cljs.core.list(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("tag","*webmx-trace*","tag/*webmx-trace*",1985238883,null),"toggle"], null),cljs.core.list(new cljs.core.Symbol(null,"mset!>","mset!>",-1433510611,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null),new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"completed","completed",1154475024,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null)))))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol("str","join","str/join",881653206,null),";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"color:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"completed","completed",1154475024,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null)),"red","green"))], null))),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"completed","completed",1154475024,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null))," (done)")))], null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (to_do,completed,title){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23572 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = tiltontec.webmx.gen.make_tag.call(null,"h1",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"Gentle Intro to Tag&trade;")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23574 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"Gentle Intro to Tag&trade;"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23574;
}});})(_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$1 = tiltontec.webmx.gen.make_tag.call(null,"p",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),"(click below to toggle whether to-do has been done)")),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23576 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"(click below to toggle whether to-do has been done)"))));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23576;
}});})(x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title))
));
return cljs.core._conj.call(null,(function (){var x__7617__auto____$2 = tiltontec.webmx.gen.make_tag.call(null,"p",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title){
return (function (){
var _STAR_webmx_trace_STAR_23578 = tiltontec.webmx.html._STAR_webmx_trace_STAR_;
tiltontec.webmx.html._STAR_webmx_trace_STAR_ = "toggle";

try{return tiltontec.model.core.mset_BANG__GT_.call(null,to_do,new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.not.call(null,completed.call(null,to_do)));
}finally {tiltontec.webmx.html._STAR_webmx_trace_STAR_ = _STAR_webmx_trace_STAR_23578;
}});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title))
,new cljs.core.Keyword(null,"style","style",-496642736),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("str","join","str/join",881653206,null),";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"color:",cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"completed","completed",1154475024,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null)),"red","green"))], null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return clojure.string.join.call(null,";",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["background-color:white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("color:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(completed.call(null,to_do))?"red":"green"))].join('')], null));
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title))
),new cljs.core.Keyword(null,"content","content",15833224),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),cljs.core.list(new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"completed","completed",1154475024,null),new cljs.core.Symbol(null,"to-do","to-do",518075274,null))," (done)"))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title){
return (function (slot_c_SHARP___$1){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(title.call(null,to_do)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(completed.call(null,to_do))?" (done)":null))].join('');
});})(x__7617__auto____$1,x__7617__auto__,_STAR_par_STAR_23572,me,cell,slot_name,cache,to_do,completed,title))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto____$2);
})(),x__7617__auto____$1);
})(),x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23572;
}});})(to_do,completed,title))
))], null));
});

//# sourceMappingURL=gentle_intro.js.map