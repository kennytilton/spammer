// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.todo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.tufte');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('tiltontec.webmx.html');



tiltontec.webmx.example.todo.TODO_LS_PREFIX = "todos-matrixcljs.";
tiltontec.webmx.example.todo.todo_list = (function tiltontec$webmx$example$todo$todo_list(){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.todo","todo-list","tiltontec.webmx.example.todo/todo-list",-1012085711),new cljs.core.Keyword(null,"items-raw","items-raw",153861709),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(new cljs.core.Symbol("tiltontec.cell.base","without-c-dependency","tiltontec.cell.base/without-c-dependency",-1335265675,null),cljs.core.list(new cljs.core.Symbol(null,"load-all","load-all",-1250839730,null))),new cljs.core.Keyword(null,"input?","input?",-1792843173),true,new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_depender_STAR_22889 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{return tiltontec.webmx.example.todo.load_all.call(null);
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22889;
}})),new cljs.core.Keyword(null,"items","items",1031954938),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-deleted","td-deleted",1307433269,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items-raw","items-raw",153861709))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,tiltontec.webmx.example.todo.td_deleted,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"items-raw","items-raw",153861709))));
})),new cljs.core.Keyword(null,"items-completed","items-completed",-1623327098),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.filter.call(null,tiltontec.webmx.example.todo.td_completed,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938))));
})),new cljs.core.Keyword(null,"items-active","items-active",-1058660354),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"td-completed","td-completed",61791800,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.doall.call(null,cljs.core.remove.call(null,tiltontec.webmx.example.todo.td_completed,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938))));
})),new cljs.core.Keyword(null,"empty?","empty?",-1564122972),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"items","items",1031954938)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return cljs.core.empty_QMARK_.call(null,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"items","items",1031954938)));
})));
});
/**
 * Make a matrix incarnation of a todo on initial entry
 */
tiltontec.webmx.example.todo.make_todo = (function tiltontec$webmx$example$todo$make_todo(islots){
var net_slots = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.example.todo","todo","tiltontec.webmx.example.todo/todo",895925797),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.webmx.example.todo.TODO_LS_PREFIX),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.util.core.uuidv4.call(null))].join(''),new cljs.core.Keyword(null,"created","created",-704993748),tiltontec.util.core.now.call(null),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.cI.call(null,null),new cljs.core.Keyword(null,"due-by","due-by",1079830021),tiltontec.cell.core.cI.call(null,(tiltontec.util.core.now.call(null) + (((((4) * (24)) * (60)) * (60)) * (1000)))),new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.cell.core.cI.call(null,null)], null));
var todo = cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,net_slots)));
tiltontec.webmx.example.todo.td_upsert.call(null,todo);

return todo;
});
tiltontec.webmx.example.todo.bulk_todo = (function tiltontec$webmx$example$todo$bulk_todo(prefix,ct){
var n__7696__auto__ = ct;
var n = (0);
while(true){
if((n < n__7696__auto__)){
tiltontec.webmx.example.todo.make_todo.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null));

var G__22890 = (n + (1));
n = G__22890;
continue;
} else {
return null;
}
break;
}
});
tiltontec.webmx.example.todo.td_created = (function tiltontec$webmx$example$todo$td_created(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"created","created",-704993748));
});
tiltontec.webmx.example.todo.td_title = (function tiltontec$webmx$example$todo$td_title(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"title","title",636505583));
});
tiltontec.webmx.example.todo.td_id = (function tiltontec$webmx$example$todo$td_id(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"id","id",-1388402092));
});
tiltontec.webmx.example.todo.td_due_by = (function tiltontec$webmx$example$todo$td_due_by(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"due-by","due-by",1079830021));
});
tiltontec.webmx.example.todo.td_completed = (function tiltontec$webmx$example$todo$td_completed(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503));
});
tiltontec.webmx.example.todo.td_deleted = (function tiltontec$webmx$example$todo$td_deleted(td){
return tiltontec.model.core._LT_mget.call(null,td,new cljs.core.Keyword(null,"deleted","deleted",-510100639));
});
tiltontec.webmx.example.todo.td_delete_BANG_ = (function tiltontec$webmx$example$todo$td_delete_BANG_(td){
if(cljs.core.truth_(td)){
} else {
throw (new Error("Assert failed: td"));
}

return tiltontec.model.core.mset_BANG__GT_.call(null,td,new cljs.core.Keyword(null,"deleted","deleted",-510100639),tiltontec.util.core.now.call(null));
});
tiltontec.webmx.example.todo.td_toggle_completed_BANG_ = (function tiltontec$webmx$example$todo$td_toggle_completed_BANG_(td){
return tiltontec.model.core.mset_BANG__GT_.call(null,td,new cljs.core.Keyword(null,"completed","completed",-486056503),(cljs.core.truth_(tiltontec.webmx.example.todo.td_completed.call(null,td))?null:tiltontec.util.core.now.call(null)));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.webmx.example.todo","todo","tiltontec.webmx.example.todo/todo",895925797)], null),(function (slot,me,new_val,old_val,c){
if(cljs.core._EQ_.call(null,old_val,tiltontec.cell.base.unbound)){
return null;
} else {
return tiltontec.webmx.example.todo.td_upsert.call(null,me);
}
}));
tiltontec.webmx.example.todo.load_all = (function tiltontec$webmx$example$todo$load_all(){
var keys = tiltontec.webmx.html.io_find.call(null,tiltontec.webmx.example.todo.TODO_LS_PREFIX);
return cljs.core.map.call(null,((function (keys){
return (function (td_id){
return tiltontec.webmx.example.todo.remake_todo.call(null,tiltontec.util.core.json_to_map.call(null,JSON.parse(tiltontec.webmx.html.io_read.call(null,td_id))));
});})(keys))
,tiltontec.webmx.html.io_find.call(null,tiltontec.webmx.example.todo.TODO_LS_PREFIX));
});
tiltontec.webmx.example.todo.remake_todo = (function tiltontec$webmx$example$todo$remake_todo(islots){
return cljs.core.apply.call(null,tiltontec.model.core.make,cljs.core.flatten.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.merge.call(null,islots,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.example.todo","todo","tiltontec.webmx.example.todo/todo",895925797),new cljs.core.Keyword(null,"title","title",636505583),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"completed","completed",-486056503),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$2(islots,false)),new cljs.core.Keyword(null,"due-by","due-by",1079830021),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"due-by","due-by",1079830021).cljs$core$IFn$_invoke$arity$1(islots)),new cljs.core.Keyword(null,"deleted","deleted",-510100639),(function (){var or__6772__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(islots);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return tiltontec.cell.core.cI.call(null,null);
}
})()], null)))));
});
tiltontec.webmx.example.todo.td_upsert = (function tiltontec$webmx$example$todo$td_upsert(td){
return tiltontec.webmx.html.io_upsert.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,td)),JSON.stringify(tiltontec.webmx.example.todo.td_to_json.call(null,td)));
});
tiltontec.webmx.example.todo.td_to_json = (function tiltontec$webmx$example$todo$td_to_json(todo){
return tiltontec.util.core.map_to_json.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7561__auto__ = (function tiltontec$webmx$example$todo$td_to_json_$_iter__22891(s__22892){
return (new cljs.core.LazySeq(null,(function (){
var s__22892__$1 = s__22892;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22892__$1);
if(temp__4657__auto__){
var s__22892__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22892__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__22892__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__22894 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__22893 = (0);
while(true){
if((i__22893 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__22893);
cljs.core.chunk_append.call(null,b__22894,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core._LT_mget.call(null,todo,k)], null));

var G__22895 = (i__22893 + (1));
i__22893 = G__22895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22894),tiltontec$webmx$example$todo$td_to_json_$_iter__22891.call(null,cljs.core.chunk_rest.call(null,s__22892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22894),null);
}
} else {
var k = cljs.core.first.call(null,s__22892__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,tiltontec.model.core._LT_mget.call(null,todo,k)], null),tiltontec$webmx$example$todo$td_to_json_$_iter__22891.call(null,cljs.core.rest.call(null,s__22892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"deleted","deleted",-510100639),new cljs.core.Keyword(null,"due-by","due-by",1079830021)], null));
})()));
});

//# sourceMappingURL=todo.js.map