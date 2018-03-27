// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.model.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.base');
/**
 * Each app will populate this with the root of its application matrix.
 */
tiltontec.model.core.matrix = cljs.core.atom.call(null,null);
tiltontec.model.core.md_name = (function tiltontec$model$core$md_name(me){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.md_get = (function tiltontec$model$core$md_get(me,slot){
if(cljs.core.truth_(me)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("md-get passed nil for me accessing slot: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("me")].join('')));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.evaluate.c_get.call(null,c);
} else {
return slot.call(null,cljs.core.deref.call(null,me));
}
} else {
return null;
}
});
tiltontec.model.core._LT_mget = (function tiltontec$model$core$_LT_mget(me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core.md_getx = (function tiltontec$model$core$md_getx(tag,me,slot){
return tiltontec.model.core.md_get.call(null,me,slot);
});
tiltontec.model.core._STAR_par_STAR_ = null;
var ret__7937__auto___19740 = (function (){
tiltontec.model.core.with_par = (function tiltontec$model$core$with_par(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19741 = arguments.length;
var i__7898__auto___19742 = (0);
while(true){
if((i__7898__auto___19742 < len__7897__auto___19741)){
args__7904__auto__.push((arguments[i__7898__auto___19742]));

var G__19743 = (i__7898__auto___19742 + (1));
i__7898__auto___19742 = G__19743;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,meform,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),(function (){var x__7615__auto__ = meform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),body)));
});

tiltontec.model.core.with_par.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.with_par.cljs$lang$applyTo = (function (seq19736){
var G__19737 = cljs.core.first.call(null,seq19736);
var seq19736__$1 = cljs.core.next.call(null,seq19736);
var G__19738 = cljs.core.first.call(null,seq19736__$1);
var seq19736__$2 = cljs.core.next.call(null,seq19736__$1);
var G__19739 = cljs.core.first.call(null,seq19736__$2);
var seq19736__$3 = cljs.core.next.call(null,seq19736__$2);
return tiltontec.model.core.with_par.cljs$core$IFn$_invoke$arity$variadic(G__19737,G__19738,G__19739,seq19736__$3);
});

return null;
})()
;
tiltontec.model.core.with_par.cljs$lang$macro = true;

tiltontec.model.core.md_reset_BANG_ = (function tiltontec$model$core$md_reset_BANG_(me,slot,new_value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"reset-oops","reset-oops",896366160));

cljs.core.println.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta.call(null,me));

cljs.core.println.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me)));

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,me),slot)){
return tiltontec.util.core.err.call(null,cljs.core.str,"change not mediated by cell ",slot,"/",tiltontec.cell.base.ia_type.call(null,me));
} else {
return tiltontec.util.core.err.call(null,cljs.core.str,"change to slot not mediated by cell and map lacks slot ",slot,"\n         ;; but has ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,cljs.core.deref.call(null,me)))].join(''));
}
}
});
tiltontec.model.core.mset_BANG__GT_ = (function tiltontec$model$core$mset_BANG__GT_(me,slot,new_value){
return tiltontec.model.core.md_reset_BANG_.call(null,me,slot,new_value);
});
tiltontec.model.core.mswap_BANG__GT_ = (function tiltontec$model$core$mswap_BANG__GT_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19748 = arguments.length;
var i__7898__auto___19749 = (0);
while(true){
if((i__7898__auto___19749 < len__7897__auto___19748)){
args__7904__auto__.push((arguments[i__7898__auto___19749]));

var G__19750 = (i__7898__auto___19749 + (1));
i__7898__auto___19749 = G__19750;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.model.core.mswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.model.core.mswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (me,slot,swap_fn,swap_fn_args){
return tiltontec.model.core.mset_BANG__GT_.call(null,me,slot,cljs.core.apply.call(null,swap_fn,tiltontec.model.core._LT_mget.call(null,me,slot),swap_fn_args));
});

tiltontec.model.core.mswap_BANG__GT_.cljs$lang$maxFixedArity = (3);

tiltontec.model.core.mswap_BANG__GT_.cljs$lang$applyTo = (function (seq19744){
var G__19745 = cljs.core.first.call(null,seq19744);
var seq19744__$1 = cljs.core.next.call(null,seq19744);
var G__19746 = cljs.core.first.call(null,seq19744__$1);
var seq19744__$2 = cljs.core.next.call(null,seq19744__$1);
var G__19747 = cljs.core.first.call(null,seq19744__$2);
var seq19744__$3 = cljs.core.next.call(null,seq19744__$2);
return tiltontec.model.core.mswap_BANG__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19745,G__19746,G__19747,seq19744__$3);
});

tiltontec.model.core.backdoor_reset_BANG__QMARK_ = (function tiltontec$model$core$backdoor_reset_BANG__QMARK_(me,slot,new_value){
var temp__4655__auto__ = tiltontec.model.base.md_cell.call(null,me,slot);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return tiltontec.cell.core.c_reset_BANG_.call(null,c,new_value);
} else {
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
}
});
tiltontec.model.core.backdoor_reset_BANG_ = (function tiltontec$model$core$backdoor_reset_BANG_(me,slot,new_value){
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),new_value);
});
tiltontec.model.core.make = (function tiltontec$model$core$make(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19764 = arguments.length;
var i__7898__auto___19765 = (0);
while(true){
if((i__7898__auto___19765 < len__7897__auto___19764)){
args__7904__auto__.push((arguments[i__7898__auto___19765]));

var G__19766 = (i__7898__auto___19765 + (1));
i__7898__auto___19765 = G__19766;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((0) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((0)),(0),null)):null);
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(argseq__7905__auto__);
});

tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic = (function (arg_list){
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,arg_list))){
return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),arg_list);
} else {
var iargs = cljs.core.apply.call(null,cljs.core.hash_map,arg_list);
var me = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"par","par",-61778778),tiltontec.model.core._STAR_par_STAR_], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (iargs){
return (function (p__19752){
var vec__19753 = p__19752;
var k = cljs.core.nth.call(null,vec__19753,(0),null);
var v = cljs.core.nth.call(null,vec__19753,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,v))?tiltontec.cell.base.unbound:v)],null));
});})(iargs))
,cljs.core.filter.call(null,((function (iargs){
return (function (p__19756){
var vec__19757 = p__19756;
var slot = cljs.core.nth.call(null,vec__19757,(0),null);
var v = cljs.core.nth.call(null,vec__19757,(1),null);
return !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348),slot));
});})(iargs))
,cljs.core.partition.call(null,(2),arg_list))))),new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"nascent","nascent",443401807)], null),cljs.core.select_keys.call(null,iargs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348)], null))));
if(cljs.core.truth_(cljs.core.meta.call(null,me))){
} else {
throw (new Error("Assert failed: (meta me)"));
}

tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.filter.call(null,((function (iargs,me){
return (function (p__19760){
var vec__19761 = p__19760;
var slot = cljs.core.nth.call(null,vec__19761,(0),null);
var v = cljs.core.nth.call(null,vec__19761,(1),null);
return tiltontec.model.base.md_install_cell.call(null,me,slot,v);
});})(iargs,me))
,cljs.core.partition.call(null,(2),arg_list)))));

tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"awaken","awaken",-1899628152),me,((function (iargs,me){
return (function (opcode,defer_info){
return tiltontec.model.base.md_awaken.call(null,me);
});})(iargs,me))
);

return me;

}
});

tiltontec.model.core.make.cljs$lang$maxFixedArity = (0);

tiltontec.model.core.make.cljs$lang$applyTo = (function (seq19751){
return tiltontec.model.core.make.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19751));
});

tiltontec.model.core.mm_obj = Object;
tiltontec.model.core.md_kids = (function tiltontec$model$core$md_kids(me){
return tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (_,___$1,newk,oldk,___$2){
if(cljs.core._EQ_.call(null,oldk,tiltontec.cell.base.unbound)){
return null;
} else {
var lostks = clojure.set.difference.call(null,cljs.core.set.call(null,oldk),cljs.core.set.call(null,newk));
if(cljs.core.empty_QMARK_.call(null,lostks)){
return null;
} else {
var seq__19767 = cljs.core.seq.call(null,lostks);
var chunk__19768 = null;
var count__19769 = (0);
var i__19770 = (0);
while(true){
if((i__19770 < count__19769)){
var k = cljs.core._nth.call(null,chunk__19768,i__19770);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__19771 = seq__19767;
var G__19772 = chunk__19768;
var G__19773 = count__19769;
var G__19774 = (i__19770 + (1));
seq__19767 = G__19771;
chunk__19768 = G__19772;
count__19769 = G__19773;
i__19770 = G__19774;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19767);
if(temp__4657__auto__){
var seq__19767__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19767__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__19767__$1);
var G__19775 = cljs.core.chunk_rest.call(null,seq__19767__$1);
var G__19776 = c__7592__auto__;
var G__19777 = cljs.core.count.call(null,c__7592__auto__);
var G__19778 = (0);
seq__19767 = G__19775;
chunk__19768 = G__19776;
count__19769 = G__19777;
i__19770 = G__19778;
continue;
} else {
var k = cljs.core.first.call(null,seq__19767__$1);
tiltontec.cell.evaluate.not_to_be.call(null,k);

var G__19779 = cljs.core.next.call(null,seq__19767__$1);
var G__19780 = null;
var G__19781 = (0);
var G__19782 = (0);
seq__19767 = G__19779;
chunk__19768 = G__19780;
count__19769 = G__19781;
i__19770 = G__19782;
continue;
}
} else {
return null;
}
}
break;
}
}
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184)], null),(function (me){
cljs.core.println.call(null,new cljs.core.Keyword(null,"family-not-to-be!","family-not-to-be!",996747952),me);

var seq__19783_19787 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__19784_19788 = null;
var count__19785_19789 = (0);
var i__19786_19790 = (0);
while(true){
if((i__19786_19790 < count__19785_19789)){
var k_19791 = cljs.core._nth.call(null,chunk__19784_19788,i__19786_19790);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_19791))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_19791);
} else {
}

var G__19792 = seq__19783_19787;
var G__19793 = chunk__19784_19788;
var G__19794 = count__19785_19789;
var G__19795 = (i__19786_19790 + (1));
seq__19783_19787 = G__19792;
chunk__19784_19788 = G__19793;
count__19785_19789 = G__19794;
i__19786_19790 = G__19795;
continue;
} else {
var temp__4657__auto___19796 = cljs.core.seq.call(null,seq__19783_19787);
if(temp__4657__auto___19796){
var seq__19783_19797__$1 = temp__4657__auto___19796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19783_19797__$1)){
var c__7592__auto___19798 = cljs.core.chunk_first.call(null,seq__19783_19797__$1);
var G__19799 = cljs.core.chunk_rest.call(null,seq__19783_19797__$1);
var G__19800 = c__7592__auto___19798;
var G__19801 = cljs.core.count.call(null,c__7592__auto___19798);
var G__19802 = (0);
seq__19783_19787 = G__19799;
chunk__19784_19788 = G__19800;
count__19785_19789 = G__19801;
i__19786_19790 = G__19802;
continue;
} else {
var k_19803 = cljs.core.first.call(null,seq__19783_19797__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_19803))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fm-not-to-be-kid!","fm-not-to-be-kid!",-2094387713));

tiltontec.cell.evaluate.not_to_be.call(null,k_19803);
} else {
}

var G__19804 = cljs.core.next.call(null,seq__19783_19797__$1);
var G__19805 = null;
var G__19806 = (0);
var G__19807 = (0);
seq__19783_19787 = G__19804;
chunk__19784_19788 = G__19805;
count__19785_19789 = G__19806;
i__19786_19790 = G__19807;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
tiltontec.model.core.mx_par = (function tiltontec$model$core$mx_par(me){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
});
tiltontec.model.core.fget_EQ_ = (function tiltontec$model$core$fget_EQ_(seek,poss){
if(cljs.core.truth_((function (){var or__6772__auto__ = tiltontec.util.core.any_ref_QMARK_.call(null,poss);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return typeof poss === 'string';
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("poss not ref "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(typeof poss === 'string')].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (any-ref? poss) (string? poss))")].join('')));
}

if(cljs.core.not.call(null,tiltontec.util.core.any_ref_QMARK_.call(null,poss))){
cljs.core.println.call(null,new cljs.core.Keyword(null,"fget=bailnotref","fget=bailnotref",-1507107200),poss);

return false;
} else {
if(cljs.core.fn_QMARK_.call(null,seek)){
return seek.call(null,poss);
} else {
if((seek instanceof cljs.core.Keyword)){
return (cljs.core._EQ_.call(null,seek,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,poss)))) || (cljs.core.isa_QMARK_.call(null,tiltontec.cell.base.ia_type.call(null,poss),seek));
} else {
tiltontec.util.base.call_trc.call(null,":fget=-else-pplain=!",seek);

return cljs.core._EQ_.call(null,seek,poss);

}
}
}
});
tiltontec.model.core.fasc = (function tiltontec$model$core$fasc(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19812 = arguments.length;
var i__7898__auto___19813 = (0);
while(true){
if((i__7898__auto___19813 < len__7897__auto___19812)){
args__7904__auto__.push((arguments[i__7898__auto___19813]));

var G__19814 = (i__7898__auto___19813 + (1));
i__7898__auto___19813 = G__19814;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6760__auto__ = where;
if(cljs.core.truth_(and__6760__auto__)){
return what;
} else {
return and__6760__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_19811 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{var or__6772__auto__ = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6760__auto____$1)){
return where;
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fasc.call(null,what,par,new cljs.core.Keyword(null,"me?","me?",-625404259),true);
} else {
return null;
}
})();
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fasc-must-failed","fasc-must-failed",845302164),what,where,options__$1);
} else {
return null;
}
}
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19811;
}} else {
return null;
}
});

tiltontec.model.core.fasc.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fasc.cljs$lang$applyTo = (function (seq19808){
var G__19809 = cljs.core.first.call(null,seq19808);
var seq19808__$1 = cljs.core.next.call(null,seq19808);
var G__19810 = cljs.core.first.call(null,seq19808__$1);
var seq19808__$2 = cljs.core.next.call(null,seq19808__$1);
return tiltontec.model.core.fasc.cljs$core$IFn$_invoke$arity$variadic(G__19809,G__19810,seq19808__$2);
});

tiltontec.model.core.nextsib = (function tiltontec$model$core$nextsib(mx){
var _STAR_depender_STAR_19815 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var sibs = tiltontec.model.core.md_kids.call(null,tiltontec.model.core.mx_par.call(null,mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.call(null,mx,cljs.core.first.call(null,sibs))){
return cljs.core.second.call(null,sibs);
} else {
var G__19816 = cljs.core.rest.call(null,sibs);
sibs = G__19816;
continue;
}
} else {
return null;
}
break;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19815;
}});
tiltontec.model.core.prevsib = (function tiltontec$model$core$prevsib(mx){
var _STAR_depender_STAR_19817 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var sibs = tiltontec.model.core.md_kids.call(null,tiltontec.model.core.mx_par.call(null,mx));
while(true){
if(cljs.core.truth_(sibs)){
if(cljs.core._EQ_.call(null,mx,cljs.core.first.call(null,sibs))){
return null;
} else {
if(cljs.core._EQ_.call(null,mx,cljs.core.second.call(null,sibs))){
return cljs.core.first.call(null,sibs);
} else {
var G__19818 = cljs.core.rest.call(null,sibs);
sibs = G__19818;
continue;

}
}
} else {
return null;
}
break;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19817;
}});
tiltontec.model.core.fget = (function tiltontec$model$core$fget(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19824 = arguments.length;
var i__7898__auto___19825 = (0);
while(true){
if((i__7898__auto___19825 < len__7897__auto___19824)){
args__7904__auto__.push((arguments[i__7898__auto___19825]));

var G__19826 = (i__7898__auto___19825 + (1));
i__7898__auto___19825 = G__19826;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic = (function (what,where,options){
if(cljs.core.truth_((function (){var and__6760__auto__ = where;
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = what;
if(cljs.core.truth_(and__6760__auto____$1)){
return tiltontec.util.core.any_ref_QMARK_.call(null,where);
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
var options__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),false,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"wocd?","wocd?",-195637516),true], null),cljs.core.apply.call(null,cljs.core.hash_map,options));
var _STAR_depender_STAR_19823 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"wocd?","wocd?",-195637516).cljs$core$IFn$_invoke$arity$1(options__$1))?null:tiltontec.cell.base._STAR_depender_STAR_);

try{if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,where))){
var or__6772__auto__ = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"me?","me?",-625404259).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.model.core.fget_EQ_.call(null,what,where);
if(cljs.core.truth_(and__6760__auto____$1)){
return where;
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"inside?","inside?",639243696).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,where,new cljs.core.Keyword(null,"kids","kids",1156670771));
if(cljs.core.truth_(temp__4655__auto__)){
var kids = temp__4655__auto__;
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-kids!!!","inside-kids!!!",-988551250),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));

var temp__4655__auto____$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"skip","skip",602715391).cljs$core$IFn$_invoke$arity$1(options__$1)]),kids);
if(cljs.core.truth_(temp__4655__auto____$1)){
var netkids = temp__4655__auto____$1;
return cljs.core.some.call(null,((function (netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6760__auto__,or__6772__auto__,_STAR_depender_STAR_19823,options__$1){
return (function (p1__19819_SHARP_){
return tiltontec.model.core.fget.call(null,what,p1__19819_SHARP_,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});})(netkids,temp__4655__auto____$1,kids,temp__4655__auto__,and__6760__auto__,or__6772__auto__,_STAR_depender_STAR_19823,options__$1))
,netkids);
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"no-net-kids","no-net-kids",1963649640));
}
} else {
return tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"inside-no-kids","inside-no-kids",-1437068961),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where)));
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = (function (){var and__6760__auto__ = new cljs.core.Keyword(null,"up?","up?",77854972).cljs$core$IFn$_invoke$arity$1(options__$1);
if(cljs.core.truth_(and__6760__auto__)){
var temp__4657__auto__ = new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,where));
if(cljs.core.truth_(temp__4657__auto__)){
var par = temp__4657__auto__;
return tiltontec.model.core.fget.call(null,what,par,new cljs.core.Keyword(null,"up?","up?",77854972),true,new cljs.core.Keyword(null,"me?","me?",-625404259),true,new cljs.core.Keyword(null,"skip","skip",602715391),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true);
} else {
return null;
}
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"must?","must?",1639898554).cljs$core$IFn$_invoke$arity$1(options__$1))){
return tiltontec.util.core.err.call(null,new cljs.core.Keyword(null,"fget-must-failed","fget-must-failed",237242954),what,where,options__$1);
} else {
return null;
}
}
}
}
} else {
return null;
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19823;
}} else {
return null;
}
});

tiltontec.model.core.fget.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.fget.cljs$lang$applyTo = (function (seq19820){
var G__19821 = cljs.core.first.call(null,seq19820);
var seq19820__$1 = cljs.core.next.call(null,seq19820);
var G__19822 = cljs.core.first.call(null,seq19820__$1);
var seq19820__$2 = cljs.core.next.call(null,seq19820__$1);
return tiltontec.model.core.fget.cljs$core$IFn$_invoke$arity$variadic(G__19821,G__19822,seq19820__$2);
});

tiltontec.model.core.fm_BANG_ = (function tiltontec$model$core$fm_BANG_(what,where){
return tiltontec.model.core.fget.call(null,what,where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"must?","must?",1639898554),true,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
var ret__7937__auto___19836 = (function (){
tiltontec.model.core.mdv_BANG_ = (function tiltontec$model$core$mdv_BANG_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19837 = arguments.length;
var i__7898__auto___19838 = (0);
while(true){
if((i__7898__auto___19838 < len__7897__auto___19837)){
args__7904__auto__.push((arguments[i__7898__auto___19838]));

var G__19839 = (i__7898__auto___19838 + (1));
i__7898__auto___19838 = G__19839;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((4) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((4)),(0),null)):null);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__7905__auto__);
});

tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,what,slot,p__19832){
var vec__19833 = p__19832;
var me = cljs.core.nth.call(null,vec__19833,(0),null);
var me__$1 = (function (){var or__6772__auto__ = me;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return new cljs.core.Symbol(null,"me","me",1501524834,null);
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","md-get","tiltontec.model.core/md-get",-1259532148,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","fm!","tiltontec.model.core/fm!",-726483993,null)),(function (){var x__7615__auto__ = what;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = me__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.mdv_BANG_.cljs$lang$maxFixedArity = (4);

tiltontec.model.core.mdv_BANG_.cljs$lang$applyTo = (function (seq19827){
var G__19828 = cljs.core.first.call(null,seq19827);
var seq19827__$1 = cljs.core.next.call(null,seq19827);
var G__19829 = cljs.core.first.call(null,seq19827__$1);
var seq19827__$2 = cljs.core.next.call(null,seq19827__$1);
var G__19830 = cljs.core.first.call(null,seq19827__$2);
var seq19827__$3 = cljs.core.next.call(null,seq19827__$2);
var G__19831 = cljs.core.first.call(null,seq19827__$3);
var seq19827__$4 = cljs.core.next.call(null,seq19827__$3);
return tiltontec.model.core.mdv_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19828,G__19829,G__19830,G__19831,seq19827__$4);
});

return null;
})()
;
tiltontec.model.core.mdv_BANG_.cljs$lang$macro = true;

/**
 * Search up the matrix from node 'where' looking for element with given name
 */
tiltontec.model.core.mxu_find_name = (function tiltontec$model$core$mxu_find_name(where,name){
return tiltontec.model.core.fget.call(null,(function (p1__19840_SHARP_){
return cljs.core._EQ_.call(null,name,tiltontec.model.core.md_get.call(null,p1__19840_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search matrix ascendants only from node 'me' for first with given tag
 */
tiltontec.model.core.mxu_find_type = (function tiltontec$model$core$mxu_find_type(me,type){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

return tiltontec.model.core.fasc.call(null,(function (visited){
return cljs.core._EQ_.call(null,type,tiltontec.cell.base.ia_type.call(null,visited));
}),me);
});
tiltontec.model.core.fmi_w_class = (function tiltontec$model$core$fmi_w_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__19841_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__19841_SHARP_))){
return cljs.core._EQ_.call(null,class$,tiltontec.model.core.md_get.call(null,p1__19841_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
/**
 * Search matrix below node 'where' for node with property and value
 */
tiltontec.model.core.mxi_find = (function tiltontec$model$core$mxi_find(where,property,value){
return tiltontec.model.core.fget.call(null,(function (p1__19842_SHARP_){
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,p1__19842_SHARP_))){
return cljs.core._EQ_.call(null,value,tiltontec.model.core.md_get.call(null,p1__19842_SHARP_,property));
} else {
return null;
}
}),where,new cljs.core.Keyword(null,"inside?","inside?",639243696),true,new cljs.core.Keyword(null,"up?","up?",77854972),false);
});
var ret__7937__auto___19846 = (function (){
tiltontec.model.core.the_kids = (function tiltontec$model$core$the_kids(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19847 = arguments.length;
var i__7898__auto___19848 = (0);
while(true){
if((i__7898__auto___19848 < len__7897__auto___19847)){
args__7904__auto__.push((arguments[i__7898__auto___19848]));

var G__19849 = (i__7898__auto___19848 + (1));
i__7898__auto___19848 = G__19849;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","*par*","tiltontec.model.core/*par*",1276645059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doall","cljs.core/doall",1093272293,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","remove","cljs.core/remove",20102034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.the_kids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.the_kids.cljs$lang$applyTo = (function (seq19843){
var G__19844 = cljs.core.first.call(null,seq19843);
var seq19843__$1 = cljs.core.next.call(null,seq19843);
var G__19845 = cljs.core.first.call(null,seq19843__$1);
var seq19843__$2 = cljs.core.next.call(null,seq19843__$1);
return tiltontec.model.core.the_kids.cljs$core$IFn$_invoke$arity$variadic(G__19844,G__19845,seq19843__$2);
});

return null;
})()
;
tiltontec.model.core.the_kids.cljs$lang$macro = true;

var ret__7937__auto___19853 = (function (){
tiltontec.model.core.cFkids = (function tiltontec$model$core$cFkids(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19854 = arguments.length;
var i__7898__auto___19855 = (0);
while(true){
if((i__7898__auto___19855 < len__7897__auto___19854)){
args__7904__auto__.push((arguments[i__7898__auto___19855]));

var G__19856 = (i__7898__auto___19855 + (1));
i__7898__auto___19855 = G__19856;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((2) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((2)),(0),null)):null);
return tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7905__auto__);
});

tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tree){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","cF","tiltontec.model.core/cF",-1537538283,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"me","me",1501524834,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"no me for cFkids"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","the-kids","tiltontec.model.core/the-kids",-1146365346,null)),tree)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.model.core.cFkids.cljs$lang$maxFixedArity = (2);

tiltontec.model.core.cFkids.cljs$lang$applyTo = (function (seq19850){
var G__19851 = cljs.core.first.call(null,seq19850);
var seq19850__$1 = cljs.core.next.call(null,seq19850);
var G__19852 = cljs.core.first.call(null,seq19850__$1);
var seq19850__$2 = cljs.core.next.call(null,seq19850__$1);
return tiltontec.model.core.cFkids.cljs$core$IFn$_invoke$arity$variadic(G__19851,G__19852,seq19850__$2);
});

return null;
})()
;
tiltontec.model.core.cFkids.cljs$lang$macro = true;

tiltontec.model.core.kid_values_kids = (function tiltontec$model$core$kid_values_kids(me,x_kids){
var x_kids__$1 = ((cljs.core._EQ_.call(null,x_kids,tiltontec.cell.base.unbound))?cljs.core.PersistentVector.EMPTY:x_kids);
var k_key = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-key","kid-key",-779444857));
var k_factory = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-factory","kid-factory",339890394));
if(cljs.core.truth_(k_key)){
} else {
throw (new Error("Assert failed: (and k-key)"));
}

if(cljs.core.truth_(k_factory)){
} else {
throw (new Error("Assert failed: (and k-factory)"));
}

return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = ((function (x_kids__$1,k_key,k_factory){
return (function tiltontec$model$core$kid_values_kids_$_iter__19857(s__19858){
return (new cljs.core.LazySeq(null,((function (x_kids__$1,k_key,k_factory){
return (function (){
var s__19858__$1 = s__19858;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19858__$1);
if(temp__4657__auto__){
var s__19858__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19858__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__19858__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__19860 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__19859 = (0);
while(true){
if((i__19859 < size__7560__auto__)){
var kid_value = cljs.core._nth.call(null,c__7559__auto__,i__19859);
cljs.core.chunk_append.call(null,b__19860,(function (){var or__6772__auto__ = cljs.core.some.call(null,((function (i__19859,kid_value,c__7559__auto__,size__7560__auto__,b__19860,s__19858__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid),k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(i__19859,kid_value,c__7559__auto__,size__7560__auto__,b__19860,s__19858__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var _STAR_par_STAR_19861 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19861;
}}
})());

var G__19863 = (i__19859 + (1));
i__19859 = G__19863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19860),tiltontec$model$core$kid_values_kids_$_iter__19857.call(null,cljs.core.chunk_rest.call(null,s__19858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19860),null);
}
} else {
var kid_value = cljs.core.first.call(null,s__19858__$2);
return cljs.core.cons.call(null,(function (){var or__6772__auto__ = cljs.core.some.call(null,((function (kid_value,s__19858__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory){
return (function (x_kid){
if(cljs.core._EQ_.call(null,kid_value,k_key.call(null,x_kid),k_key.call(null,x_kid))){
return x_kid;
} else {
return null;
}
});})(kid_value,s__19858__$2,temp__4657__auto__,x_kids__$1,k_key,k_factory))
,x_kids__$1);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var _STAR_par_STAR_19862 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{return k_factory.call(null,me,kid_value);
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_19862;
}}
})(),tiltontec$model$core$kid_values_kids_$_iter__19857.call(null,cljs.core.rest.call(null,s__19858__$2)));
}
} else {
return null;
}
break;
}
});})(x_kids__$1,k_key,k_factory))
,null,null));
});})(x_kids__$1,k_key,k_factory))
;
return iter__7561__auto__.call(null,tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"kid-values","kid-values",575730341)));
})());
});

//# sourceMappingURL=core.js.map