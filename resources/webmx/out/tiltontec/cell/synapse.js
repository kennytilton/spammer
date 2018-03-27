// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.synapse');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
tiltontec.cell.synapse.existing_syn = (function tiltontec$cell$synapse$existing_syn(synapse_id){
if((synapse_id instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Synapse ID must be a keyword"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(keyword? synapse-id)")].join('')));
}

if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("You attempted to create synapse "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(synapse_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" outside a Cell formula. Synapses serve containing Cells.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*depender*")].join('')));
}

return cljs.core.some.call(null,(function (p1__19908_SHARP_){
if(cljs.core._EQ_.call(null,synapse_id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__19908_SHARP_)))){
return p1__19908_SHARP_;
} else {
return null;
}
}),tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_));
});
var ret__7937__auto___19924 = (function (){
tiltontec.cell.synapse.with_synapse = (function tiltontec$cell$synapse$with_synapse(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19925 = arguments.length;
var i__7898__auto___19926 = (0);
while(true){
if((i__7898__auto___19926 < len__7897__auto___19925)){
args__7904__auto__.push((arguments[i__7898__auto___19926]));

var G__19927 = (i__7898__auto___19926 + (1));
i__7898__auto___19926 = G__19927;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19917,body){
var vec__19918 = p__19917;
var synapse_id = cljs.core.nth.call(null,vec__19918,(0),null);
var vec__19921 = cljs.core.nth.call(null,vec__19918,(1),null);
var seq__19922 = cljs.core.seq.call(null,vec__19921);
var closure_bindings = seq__19922;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__19909__auto__","existing-syn__19909__auto__",-1005723698,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","existing-syn","tiltontec.cell.synapse/existing-syn",959112904,null)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19910__auto__","synapse__19910__auto__",47385031,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__19909__auto__","existing-syn__19909__auto__",-1005723698,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19911__auto__","new-syn__19911__auto__",-1794686348,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.core","rmap-setf","tiltontec.util.core/rmap-setf",829497923,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapses","synapses",-614206130)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-synapses","tiltontec.cell.base/c-synapses",-492443395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19911__auto__","new-syn__19911__auto__",-1794686348,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19911__auto__","new-syn__19911__auto__",-1794686348,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19911__auto__","new-syn__19911__auto__",-1794686348,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__19912__auto__","value__19912__auto__",48043135,null)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null)),(function (){var x__7615__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","ensure-value-is-current","tiltontec.cell.evaluate/ensure-value-is-current",-1882381435,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19910__auto__","synapse__19910__auto__",47385031,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse","synapse",-1160900177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19910__auto__","synapse__19910__auto__",47385031,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__19912__auto__","value__19912__auto__",48043135,null)))));
});

tiltontec.cell.synapse.with_synapse.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.with_synapse.cljs$lang$applyTo = (function (seq19913){
var G__19914 = cljs.core.first.call(null,seq19913);
var seq19913__$1 = cljs.core.next.call(null,seq19913);
var G__19915 = cljs.core.first.call(null,seq19913__$1);
var seq19913__$2 = cljs.core.next.call(null,seq19913__$1);
var G__19916 = cljs.core.first.call(null,seq19913__$2);
var seq19913__$3 = cljs.core.next.call(null,seq19913__$2);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic(G__19914,G__19915,G__19916,seq19913__$3);
});

return null;
})()
;
tiltontec.cell.synapse.with_synapse.cljs$lang$macro = true;

tiltontec.cell.synapse.call_with_synapse = (function tiltontec$cell$synapse$call_with_synapse(synapse_id,cell_factory){
var existing_syn = tiltontec.cell.synapse.existing_syn.call(null,synapse_id);
var synapse = (function (){var or__6772__auto__ = existing_syn;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
var new_syn = cell_factory.call(null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"building-synapse","building-synapse",-277429802),cljs.core.unquote.call(null,synapse_id));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn);

return new_syn;
}
})();
var value = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn,synapse){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn,synapse))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse);

return value;
});
var ret__7937__auto___19939 = (function (){
tiltontec.cell.synapse.cSyn = (function tiltontec$cell$synapse$cSyn(var_args){
var args__7904__auto__ = [];
var len__7897__auto___19940 = arguments.length;
var i__7898__auto___19941 = (0);
while(true){
if((i__7898__auto___19941 < len__7897__auto___19940)){
args__7904__auto__.push((arguments[i__7898__auto___19941]));

var G__19942 = (i__7898__auto___19941 + (1));
i__7898__auto___19941 = G__19942;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19932,body){
var vec__19933 = p__19932;
var synapse_id = cljs.core.nth.call(null,vec__19933,(0),null);
var vec__19936 = cljs.core.nth.call(null,vec__19933,(1),null);
var seq__19937 = cljs.core.seq.call(null,vec__19936);
var closure_bindings = seq__19937;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","call-with-synapse","tiltontec.cell.synapse/call-with-synapse",-146230646,null)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7615__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-model","tiltontec.cell.synapse/c-model",-889022908,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7615__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7615__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7615__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
});

tiltontec.cell.synapse.cSyn.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.cSyn.cljs$lang$applyTo = (function (seq19928){
var G__19929 = cljs.core.first.call(null,seq19928);
var seq19928__$1 = cljs.core.next.call(null,seq19928);
var G__19930 = cljs.core.first.call(null,seq19928__$1);
var seq19928__$2 = cljs.core.next.call(null,seq19928__$1);
var G__19931 = cljs.core.first.call(null,seq19928__$2);
var seq19928__$3 = cljs.core.next.call(null,seq19928__$2);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic(G__19929,G__19930,G__19931,seq19928__$3);
});

return null;
})()
;
tiltontec.cell.synapse.cSyn.cljs$lang$macro = true;


//# sourceMappingURL=synapse.js.map