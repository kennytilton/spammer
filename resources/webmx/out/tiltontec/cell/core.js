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
var args__7906__auto__ = [];
var len__7899__auto___19242 = arguments.length;
var i__7900__auto___19243 = (0);
while(true){
if((i__7900__auto___19243 < len__7899__auto___19242)){
args__7906__auto__.push((arguments[i__7900__auto___19243]));

var G__19244 = (i__7900__auto___19243 + (1));
i__7900__auto___19243 = G__19244;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
});

tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
var options = cljs.core.apply.call(null,cljs.core.hash_map,kvs);
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"callers","callers",-1991542784),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ephemeral?","ephemeral?",-311673012),new cljs.core.Keyword(null,"synapses","synapses",-614206130),new cljs.core.Keyword(null,"pulse-observed","pulse-observed",595719633),new cljs.core.Keyword(null,"lazy","lazy",-424547181),new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),new cljs.core.Keyword(null,"pulse","pulse",-244494476),new cljs.core.Keyword(null,"input?","input?",-1792843173)],[cljs.core.PersistentHashSet.EMPTY,tiltontec.cell.base.unbound,false,cljs.core.PersistentHashSet.EMPTY,(0),false,(0),new cljs.core.Keyword(null,"nascent","nascent",443401807),(0),true]),options),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071)], null));
});

tiltontec.cell.core.make_cell.cljs$lang$maxFixedArity = (0);

tiltontec.cell.core.make_cell.cljs$lang$applyTo = (function (seq19241){
return tiltontec.cell.core.make_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19241));
});

tiltontec.cell.core.make_c_formula = (function tiltontec$cell$core$make_c_formula(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19246 = arguments.length;
var i__7900__auto___19247 = (0);
while(true){
if((i__7900__auto___19247 < len__7899__auto___19246)){
args__7906__auto__.push((arguments[i__7900__auto___19247]));

var G__19248 = (i__7900__auto___19247 + (1));
i__7900__auto___19247 = G__19248;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((0) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((0)),(0),null)):null);
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(argseq__7907__auto__);
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

tiltontec.cell.core.make_c_formula.cljs$lang$applyTo = (function (seq19245){
return tiltontec.cell.core.make_c_formula.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19245));
});

var ret__7939__auto___19257 = (function (){
tiltontec.cell.core.c_fn_var = (function tiltontec$cell$core$c_fn_var(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19258 = arguments.length;
var i__7900__auto___19259 = (0);
while(true){
if((i__7900__auto___19259 < len__7899__auto___19258)){
args__7906__auto__.push((arguments[i__7900__auto___19259]));

var G__19260 = (i__7900__auto___19259 + (1));
i__7900__auto___19259 = G__19260;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19253,body){
var vec__19254 = p__19253;
var c = cljs.core.nth.call(null,vec__19254,(0),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-model","tiltontec.cell.base/c-model",566190580,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cell","cell",-1890190685,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-name","slot-name",-1592594798,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache","cache",403508473,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-value","tiltontec.cell.base/c-value",-808509395,null)),(function (){var x__7617__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.c_fn_var.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_fn_var.cljs$lang$applyTo = (function (seq19249){
var G__19250 = cljs.core.first.call(null,seq19249);
var seq19249__$1 = cljs.core.next.call(null,seq19249);
var G__19251 = cljs.core.first.call(null,seq19249__$1);
var seq19249__$2 = cljs.core.next.call(null,seq19249__$1);
var G__19252 = cljs.core.first.call(null,seq19249__$2);
var seq19249__$3 = cljs.core.next.call(null,seq19249__$2);
return tiltontec.cell.core.c_fn_var.cljs$core$IFn$_invoke$arity$variadic(G__19250,G__19251,G__19252,seq19249__$3);
});

return null;
})()
;
tiltontec.cell.core.c_fn_var.cljs$lang$macro = true;

var ret__7939__auto___19264 = (function (){
tiltontec.cell.core.c_fn = (function tiltontec$cell$core$c_fn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19265 = arguments.length;
var i__7900__auto___19266 = (0);
while(true){
if((i__7900__auto___19266 < len__7899__auto___19265)){
args__7906__auto__.push((arguments[i__7900__auto___19266]));

var G__19267 = (i__7900__auto___19266 + (1));
i__7900__auto___19266 = G__19267;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn-var","tiltontec.cell.core/c-fn-var",-1960595436,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"slot-c#","slot-c#",1084398166,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
});

tiltontec.cell.core.c_fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_fn.cljs$lang$applyTo = (function (seq19261){
var G__19262 = cljs.core.first.call(null,seq19261);
var seq19261__$1 = cljs.core.next.call(null,seq19261);
var G__19263 = cljs.core.first.call(null,seq19261__$1);
var seq19261__$2 = cljs.core.next.call(null,seq19261__$1);
return tiltontec.cell.core.c_fn.cljs$core$IFn$_invoke$arity$variadic(G__19262,G__19263,seq19261__$2);
});

return null;
})()
;
tiltontec.cell.core.c_fn.cljs$lang$macro = true;

var ret__7939__auto___19271 = (function (){
tiltontec.cell.core.cF = (function tiltontec$cell$core$cF(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19272 = arguments.length;
var i__7900__auto___19273 = (0);
while(true){
if((i__7900__auto___19273 < len__7899__auto___19272)){
args__7906__auto__.push((arguments[i__7900__auto___19273]));

var G__19274 = (i__7900__auto___19273 + (1));
i__7900__auto___19273 = G__19274;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cF.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cF.cljs$lang$applyTo = (function (seq19268){
var G__19269 = cljs.core.first.call(null,seq19268);
var seq19268__$1 = cljs.core.next.call(null,seq19268);
var G__19270 = cljs.core.first.call(null,seq19268__$1);
var seq19268__$2 = cljs.core.next.call(null,seq19268__$1);
return tiltontec.cell.core.cF.cljs$core$IFn$_invoke$arity$variadic(G__19269,G__19270,seq19268__$2);
});

return null;
})()
;
tiltontec.cell.core.cF.cljs$lang$macro = true;

var ret__7939__auto___19283 = (function (){
tiltontec.cell.core.cF_PLUS_ = (function tiltontec$cell$core$cF_PLUS_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19284 = arguments.length;
var i__7900__auto___19285 = (0);
while(true){
if((i__7900__auto___19285 < len__7899__auto___19284)){
args__7906__auto__.push((arguments[i__7900__auto___19285]));

var G__19286 = (i__7900__auto___19285 + (1));
i__7900__auto___19285 = G__19286;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19279,body){
var vec__19280 = p__19279;
var seq__19281 = cljs.core.seq.call(null,vec__19280);
var options = seq__19281;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cF_PLUS_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_PLUS_.cljs$lang$applyTo = (function (seq19275){
var G__19276 = cljs.core.first.call(null,seq19275);
var seq19275__$1 = cljs.core.next.call(null,seq19275);
var G__19277 = cljs.core.first.call(null,seq19275__$1);
var seq19275__$2 = cljs.core.next.call(null,seq19275__$1);
var G__19278 = cljs.core.first.call(null,seq19275__$2);
var seq19275__$3 = cljs.core.next.call(null,seq19275__$2);
return tiltontec.cell.core.cF_PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__19276,G__19277,G__19278,seq19275__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_PLUS_.cljs$lang$macro = true;

var ret__7939__auto___19290 = (function (){
tiltontec.cell.core.cFn = (function tiltontec$cell$core$cFn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19291 = arguments.length;
var i__7900__auto___19292 = (0);
while(true){
if((i__7900__auto___19292 < len__7899__auto___19291)){
args__7906__auto__.push((arguments[i__7900__auto___19292]));

var G__19293 = (i__7900__auto___19292 + (1));
i__7900__auto___19292 = G__19293;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cFn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFn.cljs$lang$applyTo = (function (seq19287){
var G__19288 = cljs.core.first.call(null,seq19287);
var seq19287__$1 = cljs.core.next.call(null,seq19287);
var G__19289 = cljs.core.first.call(null,seq19287__$1);
var seq19287__$2 = cljs.core.next.call(null,seq19287__$1);
return tiltontec.cell.core.cFn.cljs$core$IFn$_invoke$arity$variadic(G__19288,G__19289,seq19287__$2);
});

return null;
})()
;
tiltontec.cell.core.cFn.cljs$lang$macro = true;

var ret__7939__auto___19302 = (function (){
tiltontec.cell.core.cF_PLUS_n = (function tiltontec$cell$core$cF_PLUS_n(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19303 = arguments.length;
var i__7900__auto___19304 = (0);
while(true){
if((i__7900__auto___19304 < len__7899__auto___19303)){
args__7906__auto__.push((arguments[i__7900__auto___19304]));

var G__19305 = (i__7900__auto___19304 + (1));
i__7900__auto___19304 = G__19305;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19298,body){
var vec__19299 = p__19298;
var seq__19300 = cljs.core.seq.call(null,vec__19299);
var options = seq__19300;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cF_PLUS_n.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_PLUS_n.cljs$lang$applyTo = (function (seq19294){
var G__19295 = cljs.core.first.call(null,seq19294);
var seq19294__$1 = cljs.core.next.call(null,seq19294);
var G__19296 = cljs.core.first.call(null,seq19294__$1);
var seq19294__$2 = cljs.core.next.call(null,seq19294__$1);
var G__19297 = cljs.core.first.call(null,seq19294__$2);
var seq19294__$3 = cljs.core.next.call(null,seq19294__$2);
return tiltontec.cell.core.cF_PLUS_n.cljs$core$IFn$_invoke$arity$variadic(G__19295,G__19296,G__19297,seq19294__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_PLUS_n.cljs$lang$macro = true;

var ret__7939__auto___19309 = (function (){
tiltontec.cell.core.c_Fn = (function tiltontec$cell$core$c_Fn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19310 = arguments.length;
var i__7900__auto___19311 = (0);
while(true){
if((i__7900__auto___19311 < len__7899__auto___19310)){
args__7906__auto__.push((arguments[i__7900__auto___19311]));

var G__19312 = (i__7900__auto___19311 + (1));
i__7900__auto___19311 = G__19312;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.c_Fn.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_Fn.cljs$lang$applyTo = (function (seq19306){
var G__19307 = cljs.core.first.call(null,seq19306);
var seq19306__$1 = cljs.core.next.call(null,seq19306);
var G__19308 = cljs.core.first.call(null,seq19306__$1);
var seq19306__$2 = cljs.core.next.call(null,seq19306__$1);
return tiltontec.cell.core.c_Fn.cljs$core$IFn$_invoke$arity$variadic(G__19307,G__19308,seq19306__$2);
});

return null;
})()
;
tiltontec.cell.core.c_Fn.cljs$lang$macro = true;

var ret__7939__auto___19316 = (function (){
tiltontec.cell.core.cFn_dbg = (function tiltontec$cell$core$cFn_dbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19317 = arguments.length;
var i__7900__auto___19318 = (0);
while(true){
if((i__7900__auto___19318 < len__7899__auto___19317)){
args__7906__auto__.push((arguments[i__7900__auto___19318]));

var G__19319 = (i__7900__auto___19318 + (1));
i__7900__auto___19318 = G__19319;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cFn_dbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFn_dbg.cljs$lang$applyTo = (function (seq19313){
var G__19314 = cljs.core.first.call(null,seq19313);
var seq19313__$1 = cljs.core.next.call(null,seq19313);
var G__19315 = cljs.core.first.call(null,seq19313__$1);
var seq19313__$2 = cljs.core.next.call(null,seq19313__$1);
return tiltontec.cell.core.cFn_dbg.cljs$core$IFn$_invoke$arity$variadic(G__19314,G__19315,seq19313__$2);
});

return null;
})()
;
tiltontec.cell.core.cFn_dbg.cljs$lang$macro = true;

var ret__7939__auto___19324 = (function (){
tiltontec.cell.core.cFn_until = (function tiltontec$cell$core$cFn_until(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19325 = arguments.length;
var i__7900__auto___19326 = (0);
while(true){
if((i__7900__auto___19326 < len__7899__auto___19325)){
args__7906__auto__.push((arguments[i__7900__auto___19326]));

var G__19327 = (i__7900__auto___19326 + (1));
i__7900__auto___19326 = G__19327;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),args)));
});

tiltontec.cell.core.cFn_until.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cFn_until.cljs$lang$applyTo = (function (seq19320){
var G__19321 = cljs.core.first.call(null,seq19320);
var seq19320__$1 = cljs.core.next.call(null,seq19320);
var G__19322 = cljs.core.first.call(null,seq19320__$1);
var seq19320__$2 = cljs.core.next.call(null,seq19320__$1);
var G__19323 = cljs.core.first.call(null,seq19320__$2);
var seq19320__$3 = cljs.core.next.call(null,seq19320__$2);
return tiltontec.cell.core.cFn_until.cljs$core$IFn$_invoke$arity$variadic(G__19321,G__19322,G__19323,seq19320__$3);
});

return null;
})()
;
tiltontec.cell.core.cFn_until.cljs$lang$macro = true;

var ret__7939__auto___19331 = (function (){
tiltontec.cell.core.cFonce = (function tiltontec$cell$core$cFonce(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19332 = arguments.length;
var i__7900__auto___19333 = (0);
while(true){
if((i__7900__auto___19333 < len__7899__auto___19332)){
args__7906__auto__.push((arguments[i__7900__auto___19333]));

var G__19334 = (i__7900__auto___19333 + (1));
i__7900__auto___19333 = G__19334;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cFonce.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFonce.cljs$lang$applyTo = (function (seq19328){
var G__19329 = cljs.core.first.call(null,seq19328);
var seq19328__$1 = cljs.core.next.call(null,seq19328);
var G__19330 = cljs.core.first.call(null,seq19328__$1);
var seq19328__$2 = cljs.core.next.call(null,seq19328__$1);
return tiltontec.cell.core.cFonce.cljs$core$IFn$_invoke$arity$variadic(G__19329,G__19330,seq19328__$2);
});

return null;
})()
;
tiltontec.cell.core.cFonce.cljs$lang$macro = true;

var ret__7939__auto___19338 = (function (){
tiltontec.cell.core.c_1 = (function tiltontec$cell$core$c_1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19339 = arguments.length;
var i__7900__auto___19340 = (0);
while(true){
if((i__7900__auto___19340 < len__7899__auto___19339)){
args__7906__auto__.push((arguments[i__7900__auto___19340]));

var G__19341 = (i__7900__auto___19340 + (1));
i__7900__auto___19340 = G__19341;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input?","input?",-1792843173)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","without-c-dependency","tiltontec.cell.core/without-c-dependency",-1335357661,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.c_1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_1.cljs$lang$applyTo = (function (seq19335){
var G__19336 = cljs.core.first.call(null,seq19335);
var seq19335__$1 = cljs.core.next.call(null,seq19335);
var G__19337 = cljs.core.first.call(null,seq19335__$1);
var seq19335__$2 = cljs.core.next.call(null,seq19335__$1);
return tiltontec.cell.core.c_1.cljs$core$IFn$_invoke$arity$variadic(G__19336,G__19337,seq19335__$2);
});

return null;
})()
;
tiltontec.cell.core.c_1.cljs$lang$macro = true;

var ret__7939__auto___19345 = (function (){
tiltontec.cell.core.cF1 = (function tiltontec$cell$core$cF1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19346 = arguments.length;
var i__7900__auto___19347 = (0);
while(true){
if((i__7900__auto___19347 < len__7899__auto___19346)){
args__7906__auto__.push((arguments[i__7900__auto___19347]));

var G__19348 = (i__7900__auto___19347 + (1));
i__7900__auto___19347 = G__19348;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","cFonce","tiltontec.cell.core/cFonce",1541505458,null)),body)));
});

tiltontec.cell.core.cF1.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cF1.cljs$lang$applyTo = (function (seq19342){
var G__19343 = cljs.core.first.call(null,seq19342);
var seq19342__$1 = cljs.core.next.call(null,seq19342);
var G__19344 = cljs.core.first.call(null,seq19342__$1);
var seq19342__$2 = cljs.core.next.call(null,seq19342__$1);
return tiltontec.cell.core.cF1.cljs$core$IFn$_invoke$arity$variadic(G__19343,G__19344,seq19342__$2);
});

return null;
})()
;
tiltontec.cell.core.cF1.cljs$lang$macro = true;

var ret__7939__auto___19352 = (function (){
tiltontec.cell.core.cFdbg = (function tiltontec$cell$core$cFdbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19353 = arguments.length;
var i__7900__auto___19354 = (0);
while(true){
if((i__7900__auto___19354 < len__7899__auto___19353)){
args__7906__auto__.push((arguments[i__7900__auto___19354]));

var G__19355 = (i__7900__auto___19354 + (1));
i__7900__auto___19354 = G__19355;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cFdbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cFdbg.cljs$lang$applyTo = (function (seq19349){
var G__19350 = cljs.core.first.call(null,seq19349);
var seq19349__$1 = cljs.core.next.call(null,seq19349);
var G__19351 = cljs.core.first.call(null,seq19349__$1);
var seq19349__$2 = cljs.core.next.call(null,seq19349__$1);
return tiltontec.cell.core.cFdbg.cljs$core$IFn$_invoke$arity$variadic(G__19350,G__19351,seq19349__$2);
});

return null;
})()
;
tiltontec.cell.core.cFdbg.cljs$lang$macro = true;

var ret__7939__auto___19364 = (function (){
tiltontec.cell.core.cF_ = (function tiltontec$cell$core$cF_(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19365 = arguments.length;
var i__7900__auto___19366 = (0);
while(true){
if((i__7900__auto___19366 < len__7899__auto___19365)){
args__7906__auto__.push((arguments[i__7900__auto___19366]));

var G__19367 = (i__7900__auto___19366 + (1));
i__7900__auto___19366 = G__19367;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19360,body){
var vec__19361 = p__19360;
var seq__19362 = cljs.core.seq.call(null,vec__19361);
var options = seq__19362;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.cF_.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.cF_.cljs$lang$applyTo = (function (seq19356){
var G__19357 = cljs.core.first.call(null,seq19356);
var seq19356__$1 = cljs.core.next.call(null,seq19356);
var G__19358 = cljs.core.first.call(null,seq19356__$1);
var seq19356__$2 = cljs.core.next.call(null,seq19356__$1);
var G__19359 = cljs.core.first.call(null,seq19356__$2);
var seq19356__$3 = cljs.core.next.call(null,seq19356__$2);
return tiltontec.cell.core.cF_.cljs$core$IFn$_invoke$arity$variadic(G__19357,G__19358,G__19359,seq19356__$3);
});

return null;
})()
;
tiltontec.cell.core.cF_.cljs$lang$macro = true;

var ret__7939__auto___19376 = (function (){
tiltontec.cell.core.c_F = (function tiltontec$cell$core$c_F(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19377 = arguments.length;
var i__7900__auto___19378 = (0);
while(true){
if((i__7900__auto___19378 < len__7899__auto___19377)){
args__7906__auto__.push((arguments[i__7900__auto___19378]));

var G__19379 = (i__7900__auto___19378 + (1));
i__7900__auto___19378 = G__19379;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19372,body){
var vec__19373 = p__19372;
var seq__19374 = cljs.core.seq.call(null,vec__19373);
var options = seq__19374;

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),options,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.core.c_F.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_F.cljs$lang$applyTo = (function (seq19368){
var G__19369 = cljs.core.first.call(null,seq19368);
var seq19368__$1 = cljs.core.next.call(null,seq19368);
var G__19370 = cljs.core.first.call(null,seq19368__$1);
var seq19368__$2 = cljs.core.next.call(null,seq19368__$1);
var G__19371 = cljs.core.first.call(null,seq19368__$2);
var seq19368__$3 = cljs.core.next.call(null,seq19368__$2);
return tiltontec.cell.core.c_F.cljs$core$IFn$_invoke$arity$variadic(G__19369,G__19370,G__19371,seq19368__$3);
});

return null;
})()
;
tiltontec.cell.core.c_F.cljs$lang$macro = true;

var ret__7939__auto___19383 = (function (){
tiltontec.cell.core.c_Fdbg = (function tiltontec$cell$core$c_Fdbg(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19384 = arguments.length;
var i__7900__auto___19385 = (0);
while(true){
if((i__7900__auto___19385 < len__7899__auto___19384)){
args__7906__auto__.push((arguments[i__7900__auto___19385]));

var G__19386 = (i__7900__auto___19385 + (1));
i__7900__auto___19385 = G__19386;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"lazy","lazy",-424547181)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"until-asked","until-asked",-1449069768)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"debug","debug",-1608172596)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
});

tiltontec.cell.core.c_Fdbg.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.c_Fdbg.cljs$lang$applyTo = (function (seq19380){
var G__19381 = cljs.core.first.call(null,seq19380);
var seq19380__$1 = cljs.core.next.call(null,seq19380);
var G__19382 = cljs.core.first.call(null,seq19380__$1);
var seq19380__$2 = cljs.core.next.call(null,seq19380__$1);
return tiltontec.cell.core.c_Fdbg.cljs$core$IFn$_invoke$arity$variadic(G__19381,G__19382,seq19380__$2);
});

return null;
})()
;
tiltontec.cell.core.c_Fdbg.cljs$lang$macro = true;

var ret__7939__auto___19395 = (function (){
tiltontec.cell.core.c_formula = (function tiltontec$cell$core$c_formula(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19396 = arguments.length;
var i__7900__auto___19397 = (0);
while(true){
if((i__7900__auto___19397 < len__7899__auto___19396)){
args__7906__auto__.push((arguments[i__7900__auto___19397]));

var G__19398 = (i__7900__auto___19397 + (1));
i__7900__auto___19397 = G__19398;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19391,body){
var vec__19392 = p__19391;
var seq__19393 = cljs.core.seq.call(null,vec__19392);
var kvs = seq__19393;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","unbound","tiltontec.cell.base/unbound",689136420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-fn","tiltontec.cell.core/c-fn",1198019642,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.keys)));
});

tiltontec.cell.core.c_formula.cljs$lang$maxFixedArity = (3);

tiltontec.cell.core.c_formula.cljs$lang$applyTo = (function (seq19387){
var G__19388 = cljs.core.first.call(null,seq19387);
var seq19387__$1 = cljs.core.next.call(null,seq19387);
var G__19389 = cljs.core.first.call(null,seq19387__$1);
var seq19387__$2 = cljs.core.next.call(null,seq19387__$1);
var G__19390 = cljs.core.first.call(null,seq19387__$2);
var seq19387__$3 = cljs.core.next.call(null,seq19387__$2);
return tiltontec.cell.core.c_formula.cljs$core$IFn$_invoke$arity$variadic(G__19388,G__19389,G__19390,seq19387__$3);
});

return null;
})()
;
tiltontec.cell.core.c_formula.cljs$lang$macro = true;

tiltontec.cell.core.cI = (function tiltontec$cell$core$cI(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19401 = arguments.length;
var i__7900__auto___19402 = (0);
while(true){
if((i__7900__auto___19402 < len__7899__auto___19401)){
args__7906__auto__.push((arguments[i__7900__auto___19402]));

var G__19403 = (i__7900__auto___19402 + (1));
i__7900__auto___19402 = G__19403;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic = (function (value,option_kvs){
return cljs.core.apply.call(null,tiltontec.cell.core.make_cell,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"input?","input?",-1792843173),true,option_kvs));
});

tiltontec.cell.core.cI.cljs$lang$maxFixedArity = (1);

tiltontec.cell.core.cI.cljs$lang$applyTo = (function (seq19399){
var G__19400 = cljs.core.first.call(null,seq19399);
var seq19399__$1 = cljs.core.next.call(null,seq19399);
return tiltontec.cell.core.cI.cljs$core$IFn$_invoke$arity$variadic(G__19400,seq19399__$1);
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
var __pdata_or_pdata_ = (function (){var or__6774__auto__ = taoensso.tufte.impl._STAR_pdata__STAR_;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
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
var args__7906__auto__ = [];
var len__7899__auto___19407 = arguments.length;
var i__7900__auto___19408 = (0);
while(true){
if((i__7900__auto___19408 < len__7899__auto___19407)){
args__7906__auto__.push((arguments[i__7900__auto___19408]));

var G__19409 = (i__7900__auto___19408 + (1));
i__7900__auto___19408 = G__19409;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (c,swap_fn,swap_fn_args){
return tiltontec.cell.core.cset_BANG__GT_.call(null,c,cljs.core.apply.call(null,swap_fn,tiltontec.cell.evaluate._LT_cget.call(null,c),swap_fn_args));
});

tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$maxFixedArity = (2);

tiltontec.cell.core.cswap_BANG__GT_.cljs$lang$applyTo = (function (seq19404){
var G__19405 = cljs.core.first.call(null,seq19404);
var seq19404__$1 = cljs.core.next.call(null,seq19404);
var G__19406 = cljs.core.first.call(null,seq19404__$1);
var seq19404__$2 = cljs.core.next.call(null,seq19404__$1);
return tiltontec.cell.core.cswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19405,G__19406,seq19404__$2);
});

var ret__7939__auto___19412 = tiltontec.cell.core.c_reset_next_BANG_ = (function tiltontec$cell$core$c_reset_next_BANG_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","*within-integrity*","tiltontec.cell.core/*within-integrity*",1558832389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-slot","tiltontec.cell.base/c-slot",1453031347,null)),(function (){var x__7617__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","ufb-add","tiltontec.cell.core/ufb-add",1421793642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"c-reset-next!","c-reset-next!",-1735615308)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opcode","opcode",311089360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defer-info","defer-info",-446799704,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19410__auto__","c__19410__auto__",220049015,null)),(function (){var x__7617__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__19411__auto__","new-value__19411__auto__",460507764,null)),(function (){var x__7617__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","call-c-reset-next!","tiltontec.cell.core/call-c-reset-next!",-970475516,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19410__auto__","c__19410__auto__",220049015,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-value__19411__auto__","new-value__19411__auto__",460507764,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});
tiltontec.cell.core.c_reset_next_BANG_.cljs$lang$macro = true;

var ret__7939__auto___19413 = /**
 * Completely untested!!!!!!!!!!!!!!!
 */
tiltontec.cell.core.cset_next_BANG__GT_ = (function tiltontec$cell$core$cset_next_BANG__GT_(_AMPERSAND_form,_AMPERSAND_env,f_c,f_new_value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","c-reset-next!","tiltontec.cell.core/c-reset-next!",-485446424,null)),(function (){var x__7617__auto__ = f_c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = f_new_value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
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