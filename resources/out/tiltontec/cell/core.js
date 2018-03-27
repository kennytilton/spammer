// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.core');
goog.require('cljs.core');
goog.require('tiltontec.util.core');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
tiltontec.cell.core.make_cell = (function tiltontec$cell$core$make_cell(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19240 = arguments.length;
var i__7898__auto___19241 = (0);
while(true){
if((i__7898__auto___19241 < len__7897__auto___19240)){
args__7904__auto__.push((arguments[i__7898__auto___19241]));

var G__19242 = (i__7898__auto___19241 + (1));
i__7898__auto___19241 = G__19242;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((0) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7905__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"synapses","synapses",-614206130),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,(0),false,(0),new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq19239){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19239));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19244 = arguments.length;
var i__7898__auto___19245 = (0);
while(true){
if((i__7898__auto___19245 < len__7897__auto___19244)){
args__7904__auto__.push((arguments[i__7898__auto___19245]));

var G__19246 = (i__7898__auto___19245 + (1));
i__7898__auto___19245 = G__19246;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((0) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7905__auto__);
});

tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
var rule = new cljs.core.Keyword(null,"rule","rule",729973257).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(rule)){
} else {
throw (new Error("Assert failed: rule"));
}

if(cljs.core.fn_QMARK_.call(null,rule)){
} else {
throw (new Error("Assert failed: (fn? rule)"));
}

return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"useds","useds",621350967),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,(0),false,(0),new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),cljs.core.PersistentHashSet.EMPTY,true,false]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037)], null));
});

tiltontec.cell.core.make_c_formula.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq19243){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19243));
});

var ret__7937__auto___19255 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19256 = arguments.length;
var i__7898__auto___19257 = (0);
while(true){
if((i__7898__auto___19257 < len__7897__auto___19256)){
args__7904__auto__.push((arguments[i__7898__auto___19257]));

var G__19258 = (i__7898__auto___19257 + (1));
i__7898__auto___19257 = G__19258;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19251,body){
var vec__19252 = p__19251;
var c = cljs.core.nth.call(null,vec__19252,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7615__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),(function (){var x__7615__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cell","cell",-1890190685,null)),(function (){var x__7615__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-name","slot-name",-1592594798,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7615__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),(function (){var x__7615__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq19247){
var G__19248 = cljs.core.first.call(null,seq19247);
var seq19247__$1 = cljs.core.next.call(null,seq19247);
var G__19249 = cljs.core.first.call(null,seq19247__$1);
var seq19247__$2 = cljs.core.next.call(null,seq19247__$1);
var G__19250 = cljs.core.first.call(null,seq19247__$2);
var seq19247__$3 = cljs.core.next.call(null,seq19247__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__19248,G__19249,G__19250,seq19247__$3);
});

return null;
})()
;
tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;

var ret__7937__auto___19262 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19263 = arguments.length;
var i__7898__auto___19264 = (0);
while(true){
if((i__7898__auto___19264 < len__7897__auto___19263)){
args__7904__auto__.push((arguments[i__7898__auto___19264]));

var G__19265 = (i__7898__auto___19264 + (1));
i__7898__auto___19264 = G__19265;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-c#","slot-c#",1084398166,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq19259){
var G__19260 = cljs.core.first.call(null,seq19259);
var seq19259__$1 = cljs.core.next.call(null,seq19259);
var G__19261 = cljs.core.first.call(null,seq19259__$1);
var seq19259__$2 = cljs.core.next.call(null,seq19259__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__19260,G__19261,seq19259__$2);
});

return null;
})()
;
tiltontec.cell.core.c_fn.cljs$lang$macro = true;

var ret__7937__auto___19269 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19270 = arguments.length;
var i__7898__auto___19271 = (0);
while(true){
if((i__7898__auto___19271 < len__7897__auto___19270)){
args__7904__auto__.push((arguments[i__7898__auto___19271]));

var G__19272 = (i__7898__auto___19271 + (1));
i__7898__auto___19271 = G__19272;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cF.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq19266){
var G__19267 = cljs.core.first.call(null,seq19266);
var seq19266__$1 = cljs.core.next.call(null,seq19266);
var G__19268 = cljs.core.first.call(null,seq19266__$1);
var seq19266__$2 = cljs.core.next.call(null,seq19266__$1);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic(G__19267,G__19268,seq19266__$2);
});

return null;
})()
;
tiltontec.cell.core.cF.cljs$lang$macro = true;

var ret__7937__auto___19281 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19282 = arguments.length;
var i__7898__auto___19283 = (0);
while(true){
if((i__7898__auto___19283 < len__7897__auto___19282)){
args__7904__auto__.push((arguments[i__7898__auto___19283]));

var G__19284 = (i__7898__auto___19283 + (1));
i__7898__auto___19283 = G__19284;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19277,body){
var vec__19278 = p__19277;
var seq__19279 = cljs.core.seq.call(null,vec__19278);
var options = seq__19279;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq19273){
var G__19274 = cljs.core.first.call(null,seq19273);
var seq19273__$1 = cljs.core.next.call(null,seq19273);
var G__19275 = cljs.core.first.call(null,seq19273__$1);
var seq19273__$2 = cljs.core.next.call(null,seq19273__$1);
var G__19276 = cljs.core.first.call(null,seq19273__$2);
var seq19273__$3 = cljs.core.next.call(null,seq19273__$2);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__19274,G__19275,G__19276,seq19273__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true;

var ret__7937__auto___19288 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19289 = arguments.length;
var i__7898__auto___19290 = (0);
while(true){
if((i__7898__auto___19290 < len__7897__auto___19289)){
args__7904__auto__.push((arguments[i__7898__auto___19290]));

var G__19291 = (i__7898__auto___19290 + (1));
i__7898__auto___19290 = G__19291;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cFn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq19285){
var G__19286 = cljs.core.first.call(null,seq19285);
var seq19285__$1 = cljs.core.next.call(null,seq19285);
var G__19287 = cljs.core.first.call(null,seq19285__$1);
var seq19285__$2 = cljs.core.next.call(null,seq19285__$1);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic(G__19286,G__19287,seq19285__$2);
});

return null;
})()
;
tiltontec.cell.core.cFn.cljs$lang$macro = true;

var ret__7937__auto___19300 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19301 = arguments.length;
var i__7898__auto___19302 = (0);
while(true){
if((i__7898__auto___19302 < len__7897__auto___19301)){
args__7904__auto__.push((arguments[i__7898__auto___19302]));

var G__19303 = (i__7898__auto___19302 + (1));
i__7898__auto___19302 = G__19303;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19296,body){
var vec__19297 = p__19296;
var seq__19298 = cljs.core.seq.call(null,vec__19297);
var options = seq__19298;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq19292){
var G__19293 = cljs.core.first.call(null,seq19292);
var seq19292__$1 = cljs.core.next.call(null,seq19292);
var G__19294 = cljs.core.first.call(null,seq19292__$1);
var seq19292__$2 = cljs.core.next.call(null,seq19292__$1);
var G__19295 = cljs.core.first.call(null,seq19292__$2);
var seq19292__$3 = cljs.core.next.call(null,seq19292__$2);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__19293,G__19294,G__19295,seq19292__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true;

var ret__7937__auto___19307 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19308 = arguments.length;
var i__7898__auto___19309 = (0);
while(true){
if((i__7898__auto___19309 < len__7897__auto___19308)){
args__7904__auto__.push((arguments[i__7898__auto___19309]));

var G__19310 = (i__7898__auto___19309 + (1));
i__7898__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.c_Fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq19304){
var G__19305 = cljs.core.first.call(null,seq19304);
var seq19304__$1 = cljs.core.next.call(null,seq19304);
var G__19306 = cljs.core.first.call(null,seq19304__$1);
var seq19304__$2 = cljs.core.next.call(null,seq19304__$1);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic(G__19305,G__19306,seq19304__$2);
});

return null;
})()
;
tiltontec.cell.core.c_Fn.cljs$lang$macro = true;

var ret__7937__auto___19314 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19315 = arguments.length;
var i__7898__auto___19316 = (0);
while(true){
if((i__7898__auto___19316 < len__7897__auto___19315)){
args__7904__auto__.push((arguments[i__7898__auto___19316]));

var G__19317 = (i__7898__auto___19316 + (1));
i__7898__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cFn_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq19311){
var G__19312 = cljs.core.first.call(null,seq19311);
var seq19311__$1 = cljs.core.next.call(null,seq19311);
var G__19313 = cljs.core.first.call(null,seq19311__$1);
var seq19311__$2 = cljs.core.next.call(null,seq19311__$1);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic(G__19312,G__19313,seq19311__$2);
});

return null;
})()
;
tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true;

var ret__7937__auto___19322 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19323 = arguments.length;
var i__7898__auto___19324 = (0);
while(true){
if((i__7898__auto___19324 < len__7897__auto___19323)){
args__7904__auto__.push((arguments[i__7898__auto___19324]));

var G__19325 = (i__7898__auto___19324 + (1));
i__7898__auto___19324 = G__19325;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),args)));
});

tiltontec.cell.core.cFn_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq19318){
var G__19319 = cljs.core.first.call(null,seq19318);
var seq19318__$1 = cljs.core.next.call(null,seq19318);
var G__19320 = cljs.core.first.call(null,seq19318__$1);
var seq19318__$2 = cljs.core.next.call(null,seq19318__$1);
var G__19321 = cljs.core.first.call(null,seq19318__$2);
var seq19318__$3 = cljs.core.next.call(null,seq19318__$2);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic(G__19319,G__19320,G__19321,seq19318__$3);
});

return null;
})()
;
tiltontec.cell.core.cFn_until.cljs$lang$macro = true;

var ret__7937__auto___19329 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19330 = arguments.length;
var i__7898__auto___19331 = (0);
while(true){
if((i__7898__auto___19331 < len__7897__auto___19330)){
args__7904__auto__.push((arguments[i__7898__auto___19331]));

var G__19332 = (i__7898__auto___19331 + (1));
i__7898__auto___19331 = G__19332;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cFonce.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq19326){
var G__19327 = cljs.core.first.call(null,seq19326);
var seq19326__$1 = cljs.core.next.call(null,seq19326);
var G__19328 = cljs.core.first.call(null,seq19326__$1);
var seq19326__$2 = cljs.core.next.call(null,seq19326__$1);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic(G__19327,G__19328,seq19326__$2);
});

return null;
})()
;
tiltontec.cell.core.cFonce.cljs$lang$macro = true;

var ret__7937__auto___19336 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19337 = arguments.length;
var i__7898__auto___19338 = (0);
while(true){
if((i__7898__auto___19338 < len__7897__auto___19337)){
args__7904__auto__.push((arguments[i__7898__auto___19338]));

var G__19339 = (i__7898__auto___19338 + (1));
i__7898__auto___19338 = G__19339;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq19333){
var G__19334 = cljs.core.first.call(null,seq19333);
var seq19333__$1 = cljs.core.next.call(null,seq19333);
var G__19335 = cljs.core.first.call(null,seq19333__$1);
var seq19333__$2 = cljs.core.next.call(null,seq19333__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__19334,G__19335,seq19333__$2);
});

return null;
})()
;
tiltontec.cell.core.c_1.cljs$lang$macro = true;

var ret__7937__auto___19343 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19344 = arguments.length;
var i__7898__auto___19345 = (0);
while(true){
if((i__7898__auto___19345 < len__7897__auto___19344)){
args__7904__auto__.push((arguments[i__7898__auto___19345]));

var G__19346 = (i__7898__auto___19345 + (1));
i__7898__auto___19345 = G__19346;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","cFonce","tiltontec.cell.core/cFonce",1541505458,null)),body)));
});

tiltontec.cell.core.cF1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq19340){
var G__19341 = cljs.core.first.call(null,seq19340);
var seq19340__$1 = cljs.core.next.call(null,seq19340);
var G__19342 = cljs.core.first.call(null,seq19340__$1);
var seq19340__$2 = cljs.core.next.call(null,seq19340__$1);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic(G__19341,G__19342,seq19340__$2);
});

return null;
})()
;
tiltontec.cell.core.cF1.cljs$lang$macro = true;

var ret__7937__auto___19350 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19351 = arguments.length;
var i__7898__auto___19352 = (0);
while(true){
if((i__7898__auto___19352 < len__7897__auto___19351)){
args__7904__auto__.push((arguments[i__7898__auto___19352]));

var G__19353 = (i__7898__auto___19352 + (1));
i__7898__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cFdbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq19347){
var G__19348 = cljs.core.first.call(null,seq19347);
var seq19347__$1 = cljs.core.next.call(null,seq19347);
var G__19349 = cljs.core.first.call(null,seq19347__$1);
var seq19347__$2 = cljs.core.next.call(null,seq19347__$1);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic(G__19348,G__19349,seq19347__$2);
});

return null;
})()
;
tiltontec.cell.core.cFdbg.cljs$lang$macro = true;

var ret__7937__auto___19362 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19363 = arguments.length;
var i__7898__auto___19364 = (0);
while(true){
if((i__7898__auto___19364 < len__7897__auto___19363)){
args__7904__auto__.push((arguments[i__7898__auto___19364]));

var G__19365 = (i__7898__auto___19364 + (1));
i__7898__auto___19364 = G__19365;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19358,body){
var vec__19359 = p__19358;
var seq__19360 = cljs.core.seq.call(null,vec__19359);
var options = seq__19360;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq19354){
var G__19355 = cljs.core.first.call(null,seq19354);
var seq19354__$1 = cljs.core.next.call(null,seq19354);
var G__19356 = cljs.core.first.call(null,seq19354__$1);
var seq19354__$2 = cljs.core.next.call(null,seq19354__$1);
var G__19357 = cljs.core.first.call(null,seq19354__$2);
var seq19354__$3 = cljs.core.next.call(null,seq19354__$2);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic(G__19355,G__19356,G__19357,seq19354__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_.cljs$lang$macro = true;

var ret__7937__auto___19374 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19375 = arguments.length;
var i__7898__auto___19376 = (0);
while(true){
if((i__7898__auto___19376 < len__7897__auto___19375)){
args__7904__auto__.push((arguments[i__7898__auto___19376]));

var G__19377 = (i__7898__auto___19376 + (1));
i__7898__auto___19376 = G__19377;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19370,body){
var vec__19371 = p__19370;
var seq__19372 = cljs.core.seq.call(null,vec__19371);
var options = seq__19372;

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq19366){
var G__19367 = cljs.core.first.call(null,seq19366);
var seq19366__$1 = cljs.core.next.call(null,seq19366);
var G__19368 = cljs.core.first.call(null,seq19366__$1);
var seq19366__$2 = cljs.core.next.call(null,seq19366__$1);
var G__19369 = cljs.core.first.call(null,seq19366__$2);
var seq19366__$3 = cljs.core.next.call(null,seq19366__$2);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic(G__19367,G__19368,G__19369,seq19366__$3);
});

return null;
})()
;
tiltontec.cell.core.c_F.cljs$lang$macro = true;

var ret__7937__auto___19381 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19382 = arguments.length;
var i__7898__auto___19383 = (0);
while(true){
if((i__7898__auto___19383 < len__7897__auto___19382)){
args__7904__auto__.push((arguments[i__7898__auto___19383]));

var G__19384 = (i__7898__auto___19383 + (1));
i__7898__auto___19383 = G__19384;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

tiltontec.cell.core.c_Fdbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq19378){
var G__19379 = cljs.core.first.call(null,seq19378);
var seq19378__$1 = cljs.core.next.call(null,seq19378);
var G__19380 = cljs.core.first.call(null,seq19378__$1);
var seq19378__$2 = cljs.core.next.call(null,seq19378__$1);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic(G__19379,G__19380,seq19378__$2);
});

return null;
})()
;
tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true;

var ret__7937__auto___19393 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19394 = arguments.length;
var i__7898__auto___19395 = (0);
while(true){
if((i__7898__auto___19395 < len__7897__auto___19394)){
args__7904__auto__.push((arguments[i__7898__auto___19395]));

var G__19396 = (i__7898__auto___19395 + (1));
i__7898__auto___19395 = G__19396;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19389,body){
var vec__19390 = p__19389;
var seq__19391 = cljs.core.seq.call(null,vec__19390);
var kvs = seq__19391;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq19385){
var G__19386 = cljs.core.first.call(null,seq19385);
var seq19385__$1 = cljs.core.next.call(null,seq19385);
var G__19387 = cljs.core.first.call(null,seq19385__$1);
var seq19385__$2 = cljs.core.next.call(null,seq19385__$1);
var G__19388 = cljs.core.first.call(null,seq19385__$2);
var seq19385__$3 = cljs.core.next.call(null,seq19385__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__19386,G__19387,G__19388,seq19385__$3);
});

return null;
})()
;
tiltontec.cell.core.c_formula.cljs$lang$macro = true;

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19399 = arguments.length;
var i__7898__auto___19400 = (0);
while(true){
if((i__7898__auto___19400 < len__7897__auto___19399)){
args__7904__auto__.push((arguments[i__7898__auto___19400]));

var G__19401 = (i__7898__auto___19400 + (1));
i__7898__auto___19400 = G__19401;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs));
});

tiltontec.cell.core.cI.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq19397){
var G__19398 = cljs.core.first.call(null,seq19397);
var seq19397__$1 = cljs.core.next.call(null,seq19397);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(G__19398,seq19397__$1);
});

tiltontec.cell.core.cset_BANG__GT_ = (function tiltontec$cell$core$cset_BANG__GT_(c,new_value){

if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

if(tiltontec.cell.base._STAR_defer_changes_STAR_){
cljs.core.println.call(null,new cljs.core.Keyword(null,"c-reset-rejecting-undeferred!","c-reset-rejecting-undeferred!",1674321026));

throw (new Error(cljs.pprint.cl_format.call(null,"c-reset!> change to ~s must be deferred by wrapping it in WITH-INTEGRITY",tiltontec.cell.base.c_slot.call(null,c))));
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
var __pdata_or_pdata_ = (function (){var or__6772__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return taoensso.tufte.impl.pdata_proxy.call(null);
}
})();
if(cljs.core.truth_(__pdata_or_pdata_)){
var __t0 = taoensso.encore.now_nano.call(null);
var __result = tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot.call(null,c),((function (__t0,__pdata_or_pdata_){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
});})(__t0,__pdata_or_pdata_))
);
var __t1 = taoensso.encore.now_nano.call(null);
taoensso.tufte.impl.capture_time_BANG_.call(null,__pdata_or_pdata_,new cljs.core.Keyword(null,"outer-wi","outer-wi",1439098602),(__t1 - __t0));

return __result;
} else {
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),tiltontec.cell.base.c_slot.call(null,c),((function (__pdata_or_pdata_){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
});})(__pdata_or_pdata_))
);
}

}
}
});
tiltontec.cell.core.c_reset_BANG_ = (function tiltontec$cell$core$c_reset_BANG_(c,new_value){
return tiltontec.cell.core.cset_BANG__GT_.call(null,c,new_value);
});
tiltontec.cell.core.cswap_BANG__GT_ = (function tiltontec$cell$core$cswap_BANG__GT_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19405 = arguments.length;
var i__7898__auto___19406 = (0);
while(true){
if((i__7898__auto___19406 < len__7897__auto___19405)){
args__7904__auto__.push((arguments[i__7898__auto___19406]));

var G__19407 = (i__7898__auto___19406 + (1));
i__7898__auto___19406 = G__19407;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG__GT_.call(null,c,cljs.core.apply.call(null,swap_fn,tiltontec.cell.evaluate._LT_cget.call(null,c),swap_fn_args));
});

tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$applyTo = (function (seq19402){
var G__19403 = cljs.core.first.call(null,seq19402);
var seq19402__$1 = cljs.core.next.call(null,seq19402);
var G__19404 = cljs.core.first.call(null,seq19402__$1);
var seq19402__$2 = cljs.core.next.call(null,seq19402__$1);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19403,G__19404,seq19402__$2);
});

var ret__7937__auto___19410 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7615__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19408__auto__","c__19408__auto__",-87368228,null)),(function (){var x__7615__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__19409__auto__","new-value__19409__auto__",2070264217,null)),(function (){var x__7615__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19408__auto__","c__19408__auto__",-87368228,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__19409__auto__","new-value__19409__auto__",2070264217,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});
tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;

var ret__7937__auto___19411 = /**
 * Completely untested!!!!!!!!!!!!!!!
 */
tiltontec.cell.core.cset_next_BANG__GT_ = (function tiltontec$cell$core$cset_next_BANG__GT_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-reset-next!","tiltontec.cell.core/c-reset-next!",-485446424,null)),(function (){var x__7615__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});
tiltontec.cell.core.cset_next_BANG__GT_.cljs$lang$macro = true;

tiltontec.cell.core.call_c_reset_next_BANG_ = (function tiltontec$cell$core$call_c_reset_next_BANG_(c,new_value){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null)))){
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);
} else {
return tiltontec.cell.evaluate.c_value_assume.call(null,c,new_value,null);

}
});

//# sourceMappingURL=core.js.map