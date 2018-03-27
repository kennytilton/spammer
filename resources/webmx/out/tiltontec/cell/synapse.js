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

return cljs.core.some.call(null,(function (p1__19910_SHARP_){
if(cljs.core._EQ_.call(null,synapse_id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__19910_SHARP_)))){
return p1__19910_SHARP_;
} else {
return null;
}
}),tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_));
});
var ret__7939__auto___19926 = (function (){
tiltontec.cell.synapse.with_synapse = (function tiltontec$cell$synapse$with_synapse(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19927 = arguments.length;
var i__7900__auto___19928 = (0);
while(true){
if((i__7900__auto___19928 < len__7899__auto___19927)){
args__7906__auto__.push((arguments[i__7900__auto___19928]));

var G__19929 = (i__7900__auto___19928 + (1));
i__7900__auto___19928 = G__19929;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19919,body){
var vec__19920 = p__19919;
var synapse_id = cljs.core.nth.call(null,vec__19920,(0),null);
var vec__19923 = cljs.core.nth.call(null,vec__19920,(1),null);
var seq__19924 = cljs.core.seq.call(null,vec__19923);
var closure_bindings = seq__19924;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__19911__auto__","existing-syn__19911__auto__",-1882927847,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","existing-syn","tiltontec.cell.synapse/existing-syn",959112904,null)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19912__auto__","synapse__19912__auto__",1531369463,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"existing-syn__19911__auto__","existing-syn__19911__auto__",-1882927847,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19913__auto__","new-syn__19913__auto__",680332761,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.util.core","rmap-setf","tiltontec.util.core/rmap-setf",829497923,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapses","synapses",-614206130)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","c-synapses","tiltontec.cell.base/c-synapses",-492443395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19913__auto__","new-syn__19913__auto__",680332761,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19913__auto__","new-syn__19913__auto__",680332761,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-syn__19913__auto__","new-syn__19913__auto__",680332761,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__19914__auto__","value__19914__auto__",-1488200571,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.integrity","with-integrity","tiltontec.cell.integrity/with-integrity",-1374442056,null)),(function (){var x__7617__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","ensure-value-is-current","tiltontec.cell.evaluate/ensure-value-is-current",-1882381435,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19912__auto__","synapse__19912__auto__",1531369463,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse","synapse",-1160900177)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.evaluate","record-dependency","tiltontec.cell.evaluate/record-dependency",1527354689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"synapse__19912__auto__","synapse__19912__auto__",1531369463,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"value__19914__auto__","value__19914__auto__",-1488200571,null)))));
});

tiltontec.cell.synapse.with_synapse.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.with_synapse.cljs$lang$applyTo = (function (seq19915){
var G__19916 = cljs.core.first.call(null,seq19915);
var seq19915__$1 = cljs.core.next.call(null,seq19915);
var G__19917 = cljs.core.first.call(null,seq19915__$1);
var seq19915__$2 = cljs.core.next.call(null,seq19915__$1);
var G__19918 = cljs.core.first.call(null,seq19915__$2);
var seq19915__$3 = cljs.core.next.call(null,seq19915__$2);
return tiltontec.cell.synapse.with_synapse.cljs$core$IFn$_invoke$arity$variadic(G__19916,G__19917,G__19918,seq19915__$3);
});

return null;
})()
;
tiltontec.cell.synapse.with_synapse.cljs$lang$macro = true;

tiltontec.cell.synapse.call_with_synapse = (function tiltontec$cell$synapse$call_with_synapse(synapse_id,cell_factory){
var existing_syn = tiltontec.cell.synapse.existing_syn.call(null,synapse_id);
var synapse = (function (){var or__6774__auto__ = existing_syn;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
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
var ret__7939__auto___19941 = (function (){
tiltontec.cell.synapse.cSyn = (function tiltontec$cell$synapse$cSyn(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19942 = arguments.length;
var i__7900__auto___19943 = (0);
while(true){
if((i__7900__auto___19943 < len__7899__auto___19942)){
args__7906__auto__.push((arguments[i__7900__auto___19943]));

var G__19944 = (i__7900__auto___19943 + (1));
i__7900__auto___19943 = G__19944;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((3) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((3)),(0),null)):null);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7907__auto__);
});

tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19934,body){
var vec__19935 = p__19934;
var synapse_id = cljs.core.nth.call(null,vec__19935,(0),null);
var vec__19938 = cljs.core.nth.call(null,vec__19935,(1),null);
var seq__19939 = cljs.core.seq.call(null,vec__19938);
var closure_bindings = seq__19939;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","call-with-synapse","tiltontec.cell.synapse/call-with-synapse",-146230646,null)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,closure_bindings))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.core","make-c-formula","tiltontec.cell.core/make-c-formula",-143496150,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"model","model",331153215)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-model","tiltontec.cell.synapse/c-model",-889022908,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.base","*depender*","tiltontec.cell.base/*depender*",1302959745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"slot","slot",240229571)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201)),(function (){var x__7617__auto__ = synapse_id;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code","code",1586293142)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = body;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"rule","rule",729973257)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.cell.synapse","c-fn","tiltontec.cell.synapse/c-fn",-1576151688,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});

tiltontec.cell.synapse.cSyn.cljs$lang$maxFixedArity = (3);

tiltontec.cell.synapse.cSyn.cljs$lang$applyTo = (function (seq19930){
var G__19931 = cljs.core.first.call(null,seq19930);
var seq19930__$1 = cljs.core.next.call(null,seq19930);
var G__19932 = cljs.core.first.call(null,seq19930__$1);
var seq19930__$2 = cljs.core.next.call(null,seq19930__$1);
var G__19933 = cljs.core.first.call(null,seq19930__$2);
var seq19930__$3 = cljs.core.next.call(null,seq19930__$2);
return tiltontec.cell.synapse.cSyn.cljs$core$IFn$_invoke$arity$variadic(G__19931,G__19932,G__19933,seq19930__$3);
});

return null;
})()
;
tiltontec.cell.synapse.cSyn.cljs$lang$macro = true;


//# sourceMappingURL=synapse.js.map