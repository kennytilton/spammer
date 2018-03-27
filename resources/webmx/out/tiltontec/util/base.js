// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.util.base');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tiltontec.util.base._STAR_trx_QMARK__STAR_ = true;
tiltontec.util.base._STAR_trc_ensure_STAR_ = null;
tiltontec.util.base._STAR_trx_path_id_STAR_ = null;
tiltontec.util.base._STAR_trxdepth_STAR_ = (0);
tiltontec.util.base.last_trc = cljs.core.atom.call(null,(0));
tiltontec.util.base.call_trc$ = (function tiltontec$util$base$call_trc$(s,bits){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(bits)].join(''))].join('');
});
tiltontec.util.base.call_trc = (function tiltontec$util$base$call_trc(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8332 = arguments.length;
var i__7900__auto___8333 = (0);
while(true){
if((i__7900__auto___8333 < len__7899__auto___8332)){
args__7906__auto__.push((arguments[i__7900__auto___8333]));

var G__8334 = (i__7900__auto___8333 + (1));
i__7900__auto___8333 = G__8334;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic = (function (s,os){
if(tiltontec.util.base._STAR_trx_QMARK__STAR_){
if(cljs.core.truth_(s)){
var path = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,tiltontec.util.base._STAR_trxdepth_STAR_,"."));
return cljs.core.println.call(null,path,tiltontec.util.base.call_trc$.call(null,s,os));
} else {
return null;
}
} else {
return null;
}
});

tiltontec.util.base.call_trc.cljs$lang$maxFixedArity = (1);

tiltontec.util.base.call_trc.cljs$lang$applyTo = (function (seq8330){
var G__8331 = cljs.core.first.call(null,seq8330);
var seq8330__$1 = cljs.core.next.call(null,seq8330);
return tiltontec.util.base.call_trc.cljs$core$IFn$_invoke$arity$variadic(G__8331,seq8330__$1);
});

var ret__7939__auto___8339 = (function (){
tiltontec.util.base.trx = (function tiltontec$util$base$trx(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8340 = arguments.length;
var i__7900__auto___8341 = (0);
while(true){
if((i__7900__auto___8341 < len__7899__auto___8340)){
args__7906__auto__.push((arguments[i__7900__auto___8341]));

var G__8342 = (i__7900__auto___8341 + (1));
i__7900__auto___8341 = G__8342;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,label,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-trc","tiltontec.util.base/call-trc",242817092,null)),(function (){var x__7617__auto__ = ((!((label == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),vals)));
});

tiltontec.util.base.trx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.trx.cljs$lang$applyTo = (function (seq8335){
var G__8336 = cljs.core.first.call(null,seq8335);
var seq8335__$1 = cljs.core.next.call(null,seq8335);
var G__8337 = cljs.core.first.call(null,seq8335__$1);
var seq8335__$2 = cljs.core.next.call(null,seq8335__$1);
var G__8338 = cljs.core.first.call(null,seq8335__$2);
var seq8335__$3 = cljs.core.next.call(null,seq8335__$2);
return tiltontec.util.base.trx.cljs$core$IFn$_invoke$arity$variadic(G__8336,G__8337,G__8338,seq8335__$3);
});

return null;
})()
;
tiltontec.util.base.trx.cljs$lang$macro = true;

tiltontec.util.base.call_wtrx = (function tiltontec$util$base$call_wtrx(fn,lo,hi,trxargs){
var _STAR_trxdepth_STAR_8343 = tiltontec.util.base._STAR_trxdepth_STAR_;
tiltontec.util.base._STAR_trxdepth_STAR_ = (tiltontec.util.base._STAR_trxdepth_STAR_ + (1));

try{if(((lo <= tiltontec.util.base._STAR_trxdepth_STAR_)) && ((tiltontec.util.base._STAR_trxdepth_STAR_ <= hi))){
cljs.core.apply.call(null,tiltontec.util.base.call_trc,trxargs);
} else {
if((tiltontec.util.base._STAR_trxdepth_STAR_ > hi)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("wtrx exceeded max depth "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,tiltontec.util.base.call_trc$,cljs.core.first.call(null,trxargs),cljs.core.rest.call(null,trxargs)))].join('')));
} else {
}
}

return fn.call(null);
}finally {tiltontec.util.base._STAR_trxdepth_STAR_ = _STAR_trxdepth_STAR_8343;
}});
var ret__7939__auto___8352 = (function (){
tiltontec.util.base.wtrx = (function tiltontec$util$base$wtrx(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8353 = arguments.length;
var i__7900__auto___8354 = (0);
while(true){
if((i__7900__auto___8354 < len__7899__auto___8353)){
args__7906__auto__.push((arguments[i__7900__auto___8354]));

var G__8355 = (i__7900__auto___8354 + (1));
i__7900__auto___8354 = G__8355;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__8348,body){
var vec__8349 = p__8348;
var seq__8350 = cljs.core.seq.call(null,vec__8349);
var first__8351 = cljs.core.first.call(null,seq__8350);
var seq__8350__$1 = cljs.core.next.call(null,seq__8350);
var lo = first__8351;
var first__8351__$1 = cljs.core.first.call(null,seq__8350__$1);
var seq__8350__$2 = cljs.core.next.call(null,seq__8350__$1);
var hi = first__8351__$1;
var trxargs = seq__8350__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.base","call-wtrx","tiltontec.util.base/call-wtrx",-151750095,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = lo;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = hi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),trxargs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.util.base.wtrx.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.wtrx.cljs$lang$applyTo = (function (seq8344){
var G__8345 = cljs.core.first.call(null,seq8344);
var seq8344__$1 = cljs.core.next.call(null,seq8344);
var G__8346 = cljs.core.first.call(null,seq8344__$1);
var seq8344__$2 = cljs.core.next.call(null,seq8344__$1);
var G__8347 = cljs.core.first.call(null,seq8344__$2);
var seq8344__$3 = cljs.core.next.call(null,seq8344__$2);
return tiltontec.util.base.wtrx.cljs$core$IFn$_invoke$arity$variadic(G__8345,G__8346,G__8347,seq8344__$3);
});

return null;
})()
;
tiltontec.util.base.wtrx.cljs$lang$macro = true;

var ret__7939__auto___8360 = (function (){
tiltontec.util.base.prog1 = (function tiltontec$util$base$prog1(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8361 = arguments.length;
var i__7900__auto___8362 = (0);
while(true){
if((i__7900__auto___8362 < len__7899__auto___8361)){
args__7906__auto__.push((arguments[i__7900__auto___8362]));

var G__8363 = (i__7900__auto___8362 + (1));
i__7900__auto___8362 = G__8363;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8356__auto__","result__8356__auto__",-1603805802,null)),(function (){var x__7617__auto__ = cljs.core.first.call(null,body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core.rest.call(null,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__8356__auto__","result__8356__auto__",-1603805802,null)))));
});

tiltontec.util.base.prog1.cljs$lang$maxFixedArity = (2);

tiltontec.util.base.prog1.cljs$lang$applyTo = (function (seq8357){
var G__8358 = cljs.core.first.call(null,seq8357);
var seq8357__$1 = cljs.core.next.call(null,seq8357);
var G__8359 = cljs.core.first.call(null,seq8357__$1);
var seq8357__$2 = cljs.core.next.call(null,seq8357__$1);
return tiltontec.util.base.prog1.cljs$core$IFn$_invoke$arity$variadic(G__8358,G__8359,seq8357__$2);
});

return null;
})()
;
tiltontec.util.base.prog1.cljs$lang$macro = true;

var ret__7939__auto___8369 = (function (){
tiltontec.util.base.b_when = (function tiltontec$util$base$b_when(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8370 = arguments.length;
var i__7900__auto___8371 = (0);
while(true){
if((i__7900__auto___8371 < len__7899__auto___8370)){
args__7906__auto__.push((arguments[i__7900__auto___8371]));

var G__8372 = (i__7900__auto___8371 + (1));
i__7900__auto___8371 = G__8372;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((4) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((4)),(0),null)):null);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7907__auto__);
});

tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,var$,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = var$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
});

tiltontec.util.base.b_when.cljs$lang$maxFixedArity = (4);

tiltontec.util.base.b_when.cljs$lang$applyTo = (function (seq8364){
var G__8365 = cljs.core.first.call(null,seq8364);
var seq8364__$1 = cljs.core.next.call(null,seq8364);
var G__8366 = cljs.core.first.call(null,seq8364__$1);
var seq8364__$2 = cljs.core.next.call(null,seq8364__$1);
var G__8367 = cljs.core.first.call(null,seq8364__$2);
var seq8364__$3 = cljs.core.next.call(null,seq8364__$2);
var G__8368 = cljs.core.first.call(null,seq8364__$3);
var seq8364__$4 = cljs.core.next.call(null,seq8364__$3);
return tiltontec.util.base.b_when.cljs$core$IFn$_invoke$arity$variadic(G__8365,G__8366,G__8367,G__8368,seq8364__$4);
});

return null;
})()
;
tiltontec.util.base.b_when.cljs$lang$macro = true;

var ret__7939__auto___8377 = (function (){
tiltontec.util.base.unless = (function tiltontec$util$base$unless(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8378 = arguments.length;
var i__7900__auto___8379 = (0);
while(true){
if((i__7900__auto___8379 < len__7899__auto___8378)){
args__7906__auto__.push((arguments[i__7900__auto___8379]));

var G__8380 = (i__7900__auto___8379 + (1));
i__7900__auto___8379 = G__8380;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__7617__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),body)));
});

tiltontec.util.base.unless.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.unless.cljs$lang$applyTo = (function (seq8373){
var G__8374 = cljs.core.first.call(null,seq8373);
var seq8373__$1 = cljs.core.next.call(null,seq8373);
var G__8375 = cljs.core.first.call(null,seq8373__$1);
var seq8373__$2 = cljs.core.next.call(null,seq8373__$1);
var G__8376 = cljs.core.first.call(null,seq8373__$2);
var seq8373__$3 = cljs.core.next.call(null,seq8373__$2);
return tiltontec.util.base.unless.cljs$core$IFn$_invoke$arity$variadic(G__8374,G__8375,G__8376,seq8373__$3);
});

return null;
})()
;
tiltontec.util.base.unless.cljs$lang$macro = true;

var ret__7939__auto___8385 = (function (){
tiltontec.util.base.def_rmap_slots = (function tiltontec$util$base$def_rmap_slots(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8386 = arguments.length;
var i__7900__auto___8387 = (0);
while(true){
if((i__7900__auto___8387 < len__7899__auto___8386)){
args__7906__auto__.push((arguments[i__7900__auto___8387]));

var G__8388 = (i__7900__auto___8387 + (1));
i__7900__auto___8387 = G__8388;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7617__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = reader_prefix;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_slots.cljs$lang$applyTo = (function (seq8381){
var G__8382 = cljs.core.first.call(null,seq8381);
var seq8381__$1 = cljs.core.next.call(null,seq8381);
var G__8383 = cljs.core.first.call(null,seq8381__$1);
var seq8381__$2 = cljs.core.next.call(null,seq8381__$1);
var G__8384 = cljs.core.first.call(null,seq8381__$2);
var seq8381__$3 = cljs.core.next.call(null,seq8381__$2);
return tiltontec.util.base.def_rmap_slots.cljs$core$IFn$_invoke$arity$variadic(G__8382,G__8383,G__8384,seq8381__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_slots.cljs$lang$macro = true;

var ret__7939__auto___8393 = (function (){
tiltontec.util.base.def_rmap_meta_slots = (function tiltontec$util$base$def_rmap_meta_slots(var_args){
var args__7906__auto__ = [];
var len__7899__auto___8394 = arguments.length;
var i__7900__auto___8395 = (0);
while(true){
if((i__7900__auto___8395 < len__7899__auto___8394)){
args__7906__auto__.push((arguments[i__7900__auto___8395]));

var G__8396 = (i__7900__auto___8395 + (1));
i__7900__auto___8395 = G__8396;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader_prefix,slots){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (slot_SHARP_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__7617__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = reader_prefix;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return "";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot_SHARP_)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = cljs.core.keyword.call(null,slot_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ref","ref",-1364538802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
}),slots))));
});

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$maxFixedArity = (3);

tiltontec.util.base.def_rmap_meta_slots.cljs$lang$applyTo = (function (seq8389){
var G__8390 = cljs.core.first.call(null,seq8389);
var seq8389__$1 = cljs.core.next.call(null,seq8389);
var G__8391 = cljs.core.first.call(null,seq8389__$1);
var seq8389__$2 = cljs.core.next.call(null,seq8389__$1);
var G__8392 = cljs.core.first.call(null,seq8389__$2);
var seq8389__$3 = cljs.core.next.call(null,seq8389__$2);
return tiltontec.util.base.def_rmap_meta_slots.cljs$core$IFn$_invoke$arity$variadic(G__8390,G__8391,G__8392,seq8389__$3);
});

return null;
})()
;
tiltontec.util.base.def_rmap_meta_slots.cljs$lang$macro = true;

tiltontec.util.base.type_cljc = (function tiltontec$util$base$type_cljc(x){
var or__6774__auto__ = (function (){var temp__4657__auto__ = cljs.core.meta.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return cljs.core.type.call(null,x);
}
});

//# sourceMappingURL=base.js.map