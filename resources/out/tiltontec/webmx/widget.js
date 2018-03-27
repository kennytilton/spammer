// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.widget');
goog.require('cljs.core');
goog.require('goog.events.Event');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.gen');
tiltontec.webmx.widget.tag_checkbox = (function tiltontec$webmx$widget$tag_checkbox(var_args){
var G__23152 = arguments.length;
switch (G__23152) {
case 6:
return tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 5:
return tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$6 = (function (me,id,label_text,initial_state,attrs,aux){
return tiltontec.webmx.gen.make_tag.call(null,"div",cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on?","on?",-74017086),tiltontec.cell.core.cI.call(null,initial_state)], null),aux),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),cljs.core.list(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"id","id",252129435,null),"box"),new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"onchange","onchange",1355467329),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"mswap!>","mswap!>",595396156,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23149#","p1__23149#",-2088931324,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"p1__23149#","p1__23149#",-2088931324,null))))),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.list(new cljs.core.Symbol(null,"cF","cF",1227355241,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086)))], null)),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"label-text","label-text",73559146,null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"id","id",252129435,null),"box"),new cljs.core.Keyword(null,"style","style",-496642736),"margin-left:0.5em",new cljs.core.Keyword(null,"onclick","onclick",1297553739),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null),cljs.core.list(new cljs.core.Symbol("event","preventDefault","event/preventDefault",-171361443,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.list(new cljs.core.Symbol(null,"mswap!>","mswap!>",595396156,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"on?","on?",-74017086),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__23150#","p1__23150#",1806113590,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"p1__23150#","p1__23150#",1806113590,null)))))], null),new cljs.core.Symbol(null,"label-text","label-text",73559146,null))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me__$1 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
if(cljs.core.truth_(me__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23153 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$1;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = tiltontec.webmx.gen.make_tag.call(null,"input",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box")].join(''),new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"checkbox",new cljs.core.Keyword(null,"onchange","onchange",1355467329),((function (_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (e){
goog.events.Event.preventDefault(e);

return tiltontec.model.core.mswap_BANG__GT_.call(null,me__$1,new cljs.core.Keyword(null,"on?","on?",-74017086),((function (_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (p1__23149_SHARP_){
return cljs.core.not.call(null,p1__23149_SHARP_);
});})(_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
);
});})(_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
,new cljs.core.Keyword(null,"checked","checked",-50955819),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),cljs.core.list(new cljs.core.Symbol(null,"mx-par","mx-par",2020993659,null),new cljs.core.Symbol(null,"me","me",1501524834,null)),new cljs.core.Keyword(null,"on?","on?",-74017086))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
return tiltontec.model.core._LT_mget.call(null,tiltontec.model.core.mx_par.call(null,me__$2),new cljs.core.Keyword(null,"on?","on?",-74017086));
});})(_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
)], null),cljs.core.PersistentArrayMap.EMPTY,null);
return cljs.core._conj.call(null,(function (){var x__7615__auto____$1 = (cljs.core.truth_(label_text)?tiltontec.webmx.gen.make_tag.call(null,"label",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"for","for",-1323786319),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),"margin-left:0.5em",new cljs.core.Keyword(null,"onclick","onclick",1297553739),((function (x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (e){
goog.events.Event.preventDefault(e);

return tiltontec.model.core.mswap_BANG__GT_.call(null,me__$1,new cljs.core.Keyword(null,"on?","on?",-74017086),((function (x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (p1__23150_SHARP_){
return cljs.core.not.call(null,p1__23150_SHARP_);
});})(x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
);
});})(x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
], null),cljs.core.PersistentArrayMap.EMPTY,tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol("clojure.core","assert","clojure.core/assert",1581062626,null),new cljs.core.Symbol(null,"me","me",1501524834,null),"no me for cFkids"),cljs.core.list(new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null),new cljs.core.Symbol(null,"label-text","label-text",73559146,null))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),((function (x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache){
return (function (slot_c_SHARP___$1){
var me__$2 = tiltontec.cell.base.c_model.call(null,slot_c_SHARP___$1);
var cell__$1 = slot_c_SHARP___$1;
var slot_name__$1 = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP___$1);
var cache__$1 = tiltontec.cell.base.c_value.call(null,slot_c_SHARP___$1);
if(cljs.core.truth_(me__$2)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("no me for cFkids"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

var _STAR_par_STAR_23155 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me__$2;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto____$1 = label_text;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23155;
}});})(x__7615__auto__,_STAR_par_STAR_23153,me__$1,cell,slot_name,cache))
)):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto____$1);
})(),x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23153;
}})));
});

tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$5 = (function (me,id,label_text,initial_state,attrs){
return tiltontec.webmx.widget.tag_checkbox.call(null,me,id,label_text,initial_state,attrs,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$4 = (function (me,id,label_text,initial_state){
return tiltontec.webmx.widget.tag_checkbox.call(null,me,id,label_text,initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$3 = (function (me,id,label_text){
return tiltontec.webmx.widget.tag_checkbox.call(null,me,id,label_text,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.webmx.widget.tag_checkbox.cljs$core$IFn$_invoke$arity$2 = (function (me,id){
return tiltontec.webmx.widget.tag_checkbox.call(null,me,id,null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.webmx.widget.tag_checkbox.cljs$lang$maxFixedArity = 6;


//# sourceMappingURL=widget.js.map