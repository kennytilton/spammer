// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.cell.evaluate');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('taoensso.tufte');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.integrity');
cljs.core._STAR_print_level_STAR_ = (3);
tiltontec.cell.evaluate.ephemeral_reset = (function tiltontec$cell$evaluate$ephemeral_reset(rc){
if(cljs.core.truth_(tiltontec.cell.base.c_ephemeral_QMARK_.call(null,rc))){
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"ephemeral-reset","ephemeral-reset",-1442676603),rc,(function (opcode,defer_info){
var temp__4657__auto___19042 = new cljs.core.Keyword(null,"me","me",-139006693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc));
if(cljs.core.truth_(temp__4657__auto___19042)){
var me_19043 = temp__4657__auto___19042;
cljs.core.swap_BANG_.call(null,me_19043,cljs.core.assoc,new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rc)),null);
} else {
}

return cljs.core.swap_BANG_.call(null,rc,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),null);
}));
} else {
return null;
}
});
tiltontec.cell.evaluate.record_dependency = (function tiltontec$cell$evaluate$record_dependency(used){
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,used))){
return null;
} else {
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
} else {
throw (new Error("Assert failed: *depender*"));
}

tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"reco-dep!!!","reco-dep!!!",380319801),new cljs.core.Keyword(null,"used","used",-1414786177),tiltontec.cell.base.c_slot.call(null,used),new cljs.core.Keyword(null,"caller","caller",-1275362879),tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_));

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_useds.call(null,tiltontec.cell.base._STAR_depender_STAR_),used));

return tiltontec.cell.base.caller_ensure.call(null,used,tiltontec.cell.base._STAR_depender_STAR_);
}
});
/**
 * The key to data integrity: recursively check the known dependency
 *   graph to decide if we are current, and if not kick off recalculation
 *   and propagation.
 */
tiltontec.cell.evaluate.ensure_value_is_current = (function tiltontec$cell$evaluate$ensure_value_is_current(c,debug_id,ensurer){
if(tiltontec.cell.base._STAR_not_to_be_STAR_){
if(cljs.core.truth_(tiltontec.cell.base.c_unbound_QMARK_.call(null,c))){
tiltontec.util.base.call_trc.call(null,":unbound!!!",tiltontec.cell.base.c_slot);

return tiltontec.util.core.err.call(null,"evic> unbound slot %s of model %s",tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_model.call(null,c));
} else {
if(cljs.core.truth_(tiltontec.cell.base.c_valid_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_input_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$1)){
return cljs.core.not.call(null,(function (){var and__6760__auto____$2 = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$2)){
return (cljs.core._EQ_.call(null,tiltontec.cell.base.c_optimize.call(null,c),new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336))) && ((tiltontec.cell.base.c_value.call(null,c) == null));
} else {
return and__6760__auto____$2;
}
})());
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
return tiltontec.cell.base.c_value.call(null,c);
} else {
if(cljs.core.truth_((function (){var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var md = temp__4657__auto__;
return tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c));
} else {
return null;
}
})())){
return tiltontec.util.core.err.call(null,cljs.core.str,"evic> model %s of cell %s is dead",tiltontec.cell.base.c_model.call(null,c),c);
} else {
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core.not.call(null,tiltontec.cell.base.c_valid_QMARK_.call(null,c));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var G__19057 = cljs.core.seq.call(null,tiltontec.cell.base.c_useds.call(null,c));
var vec__19058 = G__19057;
var seq__19059 = cljs.core.seq.call(null,vec__19058);
var first__19060 = cljs.core.first.call(null,seq__19059);
var seq__19059__$1 = cljs.core.next.call(null,seq__19059);
var used = first__19060;
var urest = seq__19059__$1;
var G__19057__$1 = G__19057;
while(true){
var vec__19061 = G__19057__$1;
var seq__19062 = cljs.core.seq.call(null,vec__19061);
var first__19063 = cljs.core.first.call(null,seq__19062);
var seq__19062__$1 = cljs.core.next.call(null,seq__19062);
var used__$1 = first__19063;
var urest__$1 = seq__19062__$1;
if(cljs.core.truth_(used__$1)){
tiltontec.cell.evaluate.ensure_value_is_current.call(null,used__$1,new cljs.core.Keyword(null,"nested","nested",18943849),c);

var or__6772__auto____$1 = (tiltontec.cell.base.c_pulse_last_changed.call(null,used__$1) > tiltontec.cell.base.c_pulse.call(null,c));
if(or__6772__auto____$1){
return or__6772__auto____$1;
} else {
var G__19064 = urest__$1;
G__19057__$1 = G__19064;
continue;
}
} else {
return null;
}
break;
}
}
})())){
if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"evic","evic",1309656753),ensurer);
}

return tiltontec.cell.base.c_value.call(null,c);
} else {
tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"valid-uninfluenced","valid-uninfluenced",676756797));

return tiltontec.cell.base.c_value.call(null,c);

}
}
}
}
}
});
/**
 * The API for determing the value associated with a Cell.
 *   Ensures value is current, records any dependent, and
 *   notices if a standalone  cell has never been observed.
 */
tiltontec.cell.evaluate.c_get = (function tiltontec$cell$evaluate$c_get(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
var result__8420__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,(function (opcode,defer_info){
var prior_value = tiltontec.cell.base.c_value.call(null,c);
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
[cljs.core.str.cljs$core$IFn$_invoke$arity$1("asker="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_slot.call(null,tiltontec.cell.base._STAR_depender_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tiltontec.cell.base.c_md_name.call(null,tiltontec.cell.base._STAR_depender_STAR_))].join('');
} else {
}

var result__8420__auto__ = (function (){var ev = tiltontec.cell.evaluate.ensure_value_is_current.call(null,c,new cljs.core.Keyword(null,"c-read","c-read",-1481921085),null);
return ev;
})();
if(((tiltontec.cell.base.c_model.call(null,c) == null)) && (cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,c),new cljs.core.Keyword(null,"nascent","nascent",443401807))) && ((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c)))){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"cget","cget",1794378742));

tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
}

return result__8420__auto__;
}));
if(cljs.core.truth_(tiltontec.cell.base._STAR_depender_STAR_)){
tiltontec.cell.evaluate.record_dependency.call(null,c);
} else {
}

return result__8420__auto__;
} else {
if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))){
return cljs.core.deref.call(null,c);
} else {
return c;

}
}
});
tiltontec.cell.evaluate._LT_cget = (function tiltontec$cell$evaluate$_LT_cget(c){
return tiltontec.cell.evaluate.c_get.call(null,c);
});

/**
 * Calculate, link, record, and propagate.
 */
tiltontec.cell.evaluate.calculate_and_set = (function tiltontec$cell$evaluate$calculate_and_set(c,dbgid,dbgdata){
var vec__19065 = tiltontec.cell.evaluate.calculate_and_link.call(null,c);
var raw_value = cljs.core.nth.call(null,vec__19065,(0),null);
var propagation_code = cljs.core.nth.call(null,vec__19065,(1),null);
if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("calc-n-set"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(map? (clojure.core/deref c))")].join('')));
}

return tiltontec.cell.evaluate.c_value_assume.call(null,c,raw_value,propagation_code);
}
});
/**
 * The name is accurate: we do no more than invoke the
 *   rule of a formula and return its value*, but along the
 *   way the links between dependencies and dependents get
 *   determined anew.
 * 
 *   * Well, we also look to see if a synaptic cell has attached a
 *   propagaion code to a vector used to wrap the raw value, which we then unpack.
 */
tiltontec.cell.evaluate.calculate_and_link = (function tiltontec$cell$evaluate$calculate_and_link(c){
var _STAR_call_stack_STAR_19068 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_depender_STAR_19069 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_defer_changes_STAR_19070 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_call_stack_STAR_ = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_call_stack_STAR_);

tiltontec.cell.base._STAR_depender_STAR_ = c;

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"pre-rule-clear","pre-rule-clear",258781380));

if(cljs.core.truth_(tiltontec.cell.base.c_rule.call(null,c))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No rule in %s type %s"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slot","slot",240229571).cljs$core$IFn$_invoke$arity$1(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,cljs.core.deref.call(null,c)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c-rule c)")].join('')));
}

var raw_value = tiltontec.cell.base.c_rule.call(null,c).call(null,c);
var prop_code_QMARK_ = (function (){var and__6760__auto__ = tiltontec.cell.base.c_synaptic_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return (cljs.core.vector_QMARK_.call(null,raw_value)) && (cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905)));
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(prop_code_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,raw_value),new cljs.core.Keyword(null,"propagate","propagate",274376905).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,raw_value))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_value,null], null);
}
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_19070;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19069;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_19068;
}});
if(typeof tiltontec.cell.evaluate.c_awaken !== 'undefined'){
} else {
tiltontec.cell.evaluate.c_awaken = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","c-awaken"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (c){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,c));
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
tiltontec.util.base.call_trc.call(null,":awk-fallthru-entry",cljs.core.type.call(null,c),cljs.core.seq_QMARK_.call(null,c),cljs.core.coll_QMARK_.call(null,c),cljs.core.vector_QMARK_.call(null,c));

if(cljs.core.coll_QMARK_.call(null,c)){
return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = (function tiltontec$cell$evaluate$iter__19071(s__19072){
return (new cljs.core.LazySeq(null,(function (){
var s__19072__$1 = s__19072;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19072__$1);
if(temp__4657__auto__){
var s__19072__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19072__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__19072__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__19074 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__19073 = (0);
while(true){
if((i__19073 < size__7560__auto__)){
var ce = cljs.core._nth.call(null,c__7559__auto__,i__19073);
cljs.core.chunk_append.call(null,b__19074,tiltontec.cell.evaluate.c_awaken.call(null,ce));

var G__19075 = (i__19073 + (1));
i__19073 = G__19075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19074),tiltontec$cell$evaluate$iter__19071.call(null,cljs.core.chunk_rest.call(null,s__19072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19074),null);
}
} else {
var ce = cljs.core.first.call(null,s__19072__$2);
return cljs.core.cons.call(null,tiltontec.cell.evaluate.c_awaken.call(null,ce),tiltontec$cell$evaluate$iter__19071.call(null,cljs.core.rest.call(null,s__19072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,c);
})());
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"c-awaken-fall-thru","c-awaken-fall-thru",-2004606871),(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,c))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref-of","ref-of",1886926194),cljs.core.type.call(null,c),cljs.core.deref.call(null,c)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unref","unref",-1884894186),c,cljs.core.type.call(null,c)], null)));

}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","cell","tiltontec.cell.base/cell",608738071),(function (c){
if(cljs.core.truth_(tiltontec.cell.base.c_input_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-input? c)"));
}

if((cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c))){
var temp__4657__auto___19076 = tiltontec.cell.base.c_me.call(null,c);
if(cljs.core.truth_(temp__4657__auto___19076)){
var me_19077 = temp__4657__auto___19076;
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),me_19077], null),tiltontec.cell.base.c_value.call(null,c));
} else {
}

tiltontec.cell.observer.c_observe.call(null,c,new cljs.core.Keyword(null,"cell-awaken","cell-awaken",2137807704));

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.evaluate.c_awaken,new cljs.core.Keyword("tiltontec.cell.base","c-formula","tiltontec.cell.base/c-formula",-1020749037),(function (c){
var _STAR_depender_STAR_19078 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{if(cljs.core.truth_(tiltontec.cell.integrity.c_current_QMARK_.call(null,c))){
return null;
} else {
return tiltontec.cell.evaluate.calculate_and_set.call(null,c,new cljs.core.Keyword(null,"fn-c-awaken","fn-c-awaken",1597115821),null);
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19078;
}}));



tiltontec.cell.evaluate.md_slot_value_store = (function tiltontec$cell$evaluate$md_slot_value_store(me,slot,value){
if(cljs.core.truth_(me)){
} else {
throw (new Error("Assert failed: me"));
}

if(cljs.core.truth_(tiltontec.util.core.any_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (any-ref? me)"));
}

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slot,me], null),value);
});
/**
 * The Cell assumes a new value at awakening, on c-reset!, or
 * after formula recalculation.
 * 
 *   We record the new value, set the Cell state to :awake, make
 *   its pulse current, check to see if a formula cell can be
 *   optimized away, and then propagate to any dependent formula
 *   cells.
 */
tiltontec.cell.evaluate.c_value_assume = (function tiltontec$cell$evaluate$c_value_assume(c,new_value,propagation_code){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var result__8420__auto__ = new_value;
var _STAR_depender_STAR_19079_19081 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{var prior_value_19082 = tiltontec.cell.base.c_value.call(null,c);
var prior_state_19083 = tiltontec.cell.base.c_value_state.call(null,c);
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),c], null),new_value);

tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"awake","awake",1922840899));

if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c));
} else {
return and__6760__auto__;
}
})())){
tiltontec.cell.evaluate.md_slot_value_store.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c),new_value);
} else {
}

tiltontec.cell.integrity.c_pulse_update.call(null,c,new cljs.core.Keyword(null,"slotv-assume","slotv-assume",-1071260275));

if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([prior_state_19083]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"uncurrent","uncurrent",-217246265)], null)));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = cljs.core._EQ_.call(null,propagation_code,true);
if(or__6772__auto____$1){
return or__6772__auto____$1;
} else {
if(cljs.core._EQ_.call(null,propagation_code,false)){
return null;
} else {
return tiltontec.cell.evaluate.c_value_changed_QMARK_.call(null,c,new_value,prior_value_19082);
}
}
}
})())){
var callers_19084 = tiltontec.cell.base.c_callers.call(null,c);
var temp__4657__auto___19085 = (function (){var and__6760__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
return tiltontec.cell.base.c_optimize.call(null,c);
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto___19085)){
var optimize_19086 = temp__4657__auto___19085;
var G__19080_19087 = optimize_19086;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),G__19080_19087)){
if(cljs.core.truth_(tiltontec.cell.base.c_value.call(null,c))){
tiltontec.util.base.call_trc.call(null,null,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336),tiltontec.cell.base.c_slot.call(null,c));

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"when-value-t","when-value-t",1756613336));
} else {
}
} else {
if(cljs.core._EQ_.call(null,true,G__19080_19087)){
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_.call(null,c,prior_value_19082);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19080_19087)].join('')));

}
}
} else {
}

if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,propagation_code,new cljs.core.Keyword(null,"no-propagate","no-propagate",-573850970));
if(or__6772__auto__){
return or__6772__auto__;
} else {
return tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c);
}
})())){
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,c))){
} else {
throw (new Error("Assert failed: (map? (clojure.core/deref c))"));
}

tiltontec.cell.evaluate.propagate.call(null,c,prior_value_19082,callers_19084);
}
} else {
}
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19079_19081;
}
return result__8420__auto__;
});
tiltontec.cell.evaluate.unlink_from_used = (function tiltontec$cell$evaluate$unlink_from_used(c,why){

var iter__7561__auto___19092 = (function tiltontec$cell$evaluate$unlink_from_used_$_iter__19088(s__19089){
return (new cljs.core.LazySeq(null,(function (){
var s__19089__$1 = s__19089;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19089__$1);
if(temp__4657__auto__){
var s__19089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19089__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__19089__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__19091 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__19090 = (0);
while(true){
if((i__19090 < size__7560__auto__)){
var used = cljs.core._nth.call(null,c__7559__auto__,i__19090);
cljs.core.chunk_append.call(null,b__19091,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)));

var G__19093 = (i__19090 + (1));
i__19090 = G__19093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19091),tiltontec$cell$evaluate$unlink_from_used_$_iter__19088.call(null,cljs.core.chunk_rest.call(null,s__19089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19091),null);
}
} else {
var used = cljs.core.first.call(null,s__19089__$2);
return cljs.core.cons.call(null,tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callers","callers",-1991542784),used], null),cljs.core.disj.call(null,tiltontec.cell.base.c_callers.call(null,used),c)),tiltontec$cell$evaluate$unlink_from_used_$_iter__19088.call(null,cljs.core.rest.call(null,s__19089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__7561__auto___19092.call(null,tiltontec.cell.base.c_useds.call(null,c));

return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"useds","useds",621350967),c], null),cljs.core.PersistentHashSet.EMPTY);
});
tiltontec.cell.evaluate.md_cell_flush = (function tiltontec$cell$evaluate$md_cell_flush(c){
if(cljs.core.truth_(tiltontec.cell.base.c_ref_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (c-ref? c)"));
}

var temp__4657__auto__ = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949),me], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949).cljs$core$IFn$_invoke$arity$1(me),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.c_slot.call(null,c),tiltontec.cell.base.c_pulse_observed.call(null,c)], null)));
} else {
return null;
}
});
/**
 * Optimizes away cells who turn out not to depend on anyone, 
 *   saving a lot of work at runtime. A caller/user will not bother
 *   establishing a link, and when we get to models cget will 
 *   find a non-cell in a slot and Just Use It.
 */
tiltontec.cell.evaluate.optimize_away_QMARK__BANG_ = (function tiltontec$cell$evaluate$optimize_away_QMARK__BANG_(c,prior_value){
if(cljs.core.truth_((function (){var and__6760__auto__ = tiltontec.cell.base.c_formula_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = cljs.core.empty_QMARK_.call(null,tiltontec.cell.base.c_useds.call(null,c));
if(and__6760__auto____$1){
var and__6760__auto____$2 = tiltontec.cell.base.c_optimize.call(null,c);
if(cljs.core.truth_(and__6760__auto____$2)){
var and__6760__auto____$3 = cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c));
if(and__6760__auto____$3){
var and__6760__auto____$4 = tiltontec.cell.base.c_valid_QMARK_.call(null,c);
if(cljs.core.truth_(and__6760__auto____$4)){
return (cljs.core.not.call(null,tiltontec.cell.base.c_synaptic_QMARK_.call(null,c))) && (cljs.core.not.call(null,tiltontec.cell.base.c_input_QMARK_.call(null,c)));
} else {
return and__6760__auto____$4;
}
} else {
return and__6760__auto____$3;
}
} else {
return and__6760__auto____$2;
}
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),c], null),new cljs.core.Keyword(null,"optimized-away","optimized-away",876765856));

tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"opti-away","opti-away",1290785499));

var temp__4657__auto___19098 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(temp__4657__auto___19098)){
var me_19099 = temp__4657__auto___19098;
tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cz","cz",1670864932),me_19099], null),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me_19099)),tiltontec.cell.base.c_slot.call(null,c),null));

tiltontec.cell.evaluate.md_cell_flush.call(null,c);
} else {
}

var seq__19094_19100 = cljs.core.seq.call(null,cljs.core.seq.call(null,tiltontec.cell.base.c_callers.call(null,c)));
var chunk__19095_19101 = null;
var count__19096_19102 = (0);
var i__19097_19103 = (0);
while(true){
if((i__19097_19103 < count__19096_19102)){
var caller_19104 = cljs.core._nth.call(null,chunk__19095_19101,i__19097_19103);
cljs.core.swap_BANG_.call(null,caller_19104,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller_19104)));

tiltontec.cell.base.caller_drop.call(null,c,caller_19104);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_19104,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__19105 = seq__19094_19100;
var G__19106 = chunk__19095_19101;
var G__19107 = count__19096_19102;
var G__19108 = (i__19097_19103 + (1));
seq__19094_19100 = G__19105;
chunk__19095_19101 = G__19106;
count__19096_19102 = G__19107;
i__19097_19103 = G__19108;
continue;
} else {
var temp__4657__auto___19109 = cljs.core.seq.call(null,seq__19094_19100);
if(temp__4657__auto___19109){
var seq__19094_19110__$1 = temp__4657__auto___19109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19094_19110__$1)){
var c__7592__auto___19111 = cljs.core.chunk_first.call(null,seq__19094_19110__$1);
var G__19112 = cljs.core.chunk_rest.call(null,seq__19094_19110__$1);
var G__19113 = c__7592__auto___19111;
var G__19114 = cljs.core.count.call(null,c__7592__auto___19111);
var G__19115 = (0);
seq__19094_19100 = G__19112;
chunk__19095_19101 = G__19113;
count__19096_19102 = G__19114;
i__19097_19103 = G__19115;
continue;
} else {
var caller_19116 = cljs.core.first.call(null,seq__19094_19110__$1);
cljs.core.swap_BANG_.call(null,caller_19116,cljs.core.assoc,new cljs.core.Keyword(null,"useds","useds",621350967),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller_19116)));

tiltontec.cell.base.caller_drop.call(null,c,caller_19116);

tiltontec.cell.evaluate.ensure_value_is_current.call(null,caller_19116,new cljs.core.Keyword(null,"opti-used","opti-used",660350789),c);

var G__19117 = cljs.core.next.call(null,seq__19094_19110__$1);
var G__19118 = null;
var G__19119 = (0);
var G__19120 = (0);
seq__19094_19100 = G__19117;
chunk__19095_19101 = G__19118;
count__19096_19102 = G__19119;
i__19097_19103 = G__19120;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,c,tiltontec.cell.base.c_value.call(null,c));
} else {
return null;
}
});
tiltontec.cell.evaluate.c_quiesce = (function tiltontec$cell$evaluate$c_quiesce(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error("Assert failed: c"));
}

tiltontec.cell.base.unlink_from_callers.call(null,c);

tiltontec.cell.evaluate.unlink_from_used.call(null,c,new cljs.core.Keyword(null,"quiesce","quiesce",-798294121));

return cljs.core.reset_BANG_.call(null,c,new cljs.core.Keyword(null,"dead-c","dead-c",385485497));
});
tiltontec.cell.evaluate.not_to_be_self = (function tiltontec$cell$evaluate$not_to_be_self(me){
var seq__19121_19125 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"cz","cz",1670864932).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,me))));
var chunk__19122_19126 = null;
var count__19123_19127 = (0);
var i__19124_19128 = (0);
while(true){
if((i__19124_19128 < count__19123_19127)){
var c_19129 = cljs.core._nth.call(null,chunk__19122_19126,i__19124_19128);
if(cljs.core.truth_(c_19129)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_19129);
} else {
}

var G__19130 = seq__19121_19125;
var G__19131 = chunk__19122_19126;
var G__19132 = count__19123_19127;
var G__19133 = (i__19124_19128 + (1));
seq__19121_19125 = G__19130;
chunk__19122_19126 = G__19131;
count__19123_19127 = G__19132;
i__19124_19128 = G__19133;
continue;
} else {
var temp__4657__auto___19134 = cljs.core.seq.call(null,seq__19121_19125);
if(temp__4657__auto___19134){
var seq__19121_19135__$1 = temp__4657__auto___19134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19121_19135__$1)){
var c__7592__auto___19136 = cljs.core.chunk_first.call(null,seq__19121_19135__$1);
var G__19137 = cljs.core.chunk_rest.call(null,seq__19121_19135__$1);
var G__19138 = c__7592__auto___19136;
var G__19139 = cljs.core.count.call(null,c__7592__auto___19136);
var G__19140 = (0);
seq__19121_19125 = G__19137;
chunk__19122_19126 = G__19138;
count__19123_19127 = G__19139;
i__19124_19128 = G__19140;
continue;
} else {
var c_19141 = cljs.core.first.call(null,seq__19121_19135__$1);
if(cljs.core.truth_(c_19141)){
tiltontec.cell.evaluate.c_quiesce.call(null,c_19141);
} else {
}

var G__19142 = cljs.core.next.call(null,seq__19121_19135__$1);
var G__19143 = null;
var G__19144 = (0);
var G__19145 = (0);
seq__19121_19125 = G__19142;
chunk__19122_19126 = G__19143;
count__19123_19127 = G__19144;
i__19124_19128 = G__19145;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,me,null);

return tiltontec.util.core.rmap_meta_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.cell.base","state","tiltontec.cell.base/state",-1967920396),me], null),new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
if(typeof tiltontec.cell.evaluate.not_to_be !== 'undefined'){
} else {
tiltontec.cell.evaluate.not_to_be = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","not-to-be"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (me){
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,me))){
} else {
throw (new Error("Assert failed: (md-ref? me)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.cell.base.ia_type.call(null,me)], null);
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.Keyword(null,"default","default",-1987822328),(function (me){
return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
if(typeof tiltontec.cell.evaluate.unchanged_test !== 'undefined'){
} else {
/**
 * Cells does not propagate when nothing changes. By default, the
 *   test is =, but cells can inject a different test, and when we get
 *   to models it will be possible for a slot to have associated
 *   with it a different test.
 */
tiltontec.cell.evaluate.unchanged_test = (function (){var method_table__7706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7710__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.cell.evaluate","unchanged-test"),((function (method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__){
return (function (me,slot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(me)?cljs.core.type.call(null,cljs.core.deref.call(null,me)):null),slot], null);
});})(method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__,hierarchy__7710__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7710__auto__,method_table__7706__auto__,prefer_table__7707__auto__,method_cache__7708__auto__,cached_hierarchy__7709__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.cell.evaluate.unchanged_test,new cljs.core.Keyword(null,"default","default",-1987822328),(function (self,slotname){
return cljs.core._EQ_;
}));
tiltontec.cell.evaluate.c_value_changed_QMARK_ = (function tiltontec$cell$evaluate$c_value_changed_QMARK_(c,new_value,old_value){
return cljs.core.not.call(null,(function (){var or__6772__auto__ = new cljs.core.Keyword(null,"unchanged-if","unchanged-if",-923210106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c));
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return tiltontec.cell.evaluate.unchanged_test.call(null,tiltontec.cell.base.c_model.call(null,c),tiltontec.cell.base.c_slot.call(null,c));
}
})().call(null,new_value,old_value));
});
tiltontec.cell.evaluate._STAR_custom_propagater_STAR_ = null;

/**
 * A cell:
 *   - notifies its callers of its change;
 *   - calls any observer; and
 *   - if ephemeral, silently reverts to nil.
 */
tiltontec.cell.evaluate.propagate = (function tiltontec$cell$evaluate$propagate(c,prior_value,callers){
if(tiltontec.cell.integrity._STAR_one_pulse_QMARK__STAR_){
if(cljs.core.truth_(tiltontec.cell.evaluate._STAR_custom_propagater_STAR_)){
return tiltontec.cell.evaluate._STAR_custom_propagater_STAR_.call(null,c,prior_value);
} else {
return null;
}
} else {
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pulse-last-changed","pulse-last-changed",1035703380),c], null),cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_));

var _STAR_depender_STAR_19146 = tiltontec.cell.base._STAR_depender_STAR_;
var _STAR_call_stack_STAR_19147 = tiltontec.cell.base._STAR_call_stack_STAR_;
var _STAR_c_prop_depth_STAR_19148 = tiltontec.cell.base._STAR_c_prop_depth_STAR_;
var _STAR_defer_changes_STAR_19149 = tiltontec.cell.base._STAR_defer_changes_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

tiltontec.cell.base._STAR_call_stack_STAR_ = null;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = (tiltontec.cell.base._STAR_c_prop_depth_STAR_ + (1));

tiltontec.cell.base._STAR_defer_changes_STAR_ = true;

try{if(cljs.core.truth_((function (){var and__6760__auto__ = prior_value;
if(cljs.core.truth_(and__6760__auto__)){
var and__6760__auto____$1 = tiltontec.cell.base.c_model.call(null,c);
if(cljs.core.truth_(and__6760__auto____$1)){
return tiltontec.cell.base.md_slot_owning_QMARK_.call(null,cljs.core.type.call(null,tiltontec.cell.base.c_model.call(null,c)),tiltontec.cell.base.c_slot.call(null,c));
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
var temp__4657__auto___19154 = clojure.set.difference.call(null,tiltontec.util.core.set_ify.call(null,prior_value),tiltontec.util.core.set_ify.call(null,tiltontec.cell.base.c_value.call(null,c)));
if(cljs.core.truth_(temp__4657__auto___19154)){
var ownees_19155 = temp__4657__auto___19154;
var seq__19150_19156 = cljs.core.seq.call(null,ownees_19155);
var chunk__19151_19157 = null;
var count__19152_19158 = (0);
var i__19153_19159 = (0);
while(true){
if((i__19153_19159 < count__19152_19158)){
var ownee_19160 = cljs.core._nth.call(null,chunk__19151_19157,i__19153_19159);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_19160);

var G__19161 = seq__19150_19156;
var G__19162 = chunk__19151_19157;
var G__19163 = count__19152_19158;
var G__19164 = (i__19153_19159 + (1));
seq__19150_19156 = G__19161;
chunk__19151_19157 = G__19162;
count__19152_19158 = G__19163;
i__19153_19159 = G__19164;
continue;
} else {
var temp__4657__auto___19165__$1 = cljs.core.seq.call(null,seq__19150_19156);
if(temp__4657__auto___19165__$1){
var seq__19150_19166__$1 = temp__4657__auto___19165__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19150_19166__$1)){
var c__7592__auto___19167 = cljs.core.chunk_first.call(null,seq__19150_19166__$1);
var G__19168 = cljs.core.chunk_rest.call(null,seq__19150_19166__$1);
var G__19169 = c__7592__auto___19167;
var G__19170 = cljs.core.count.call(null,c__7592__auto___19167);
var G__19171 = (0);
seq__19150_19156 = G__19168;
chunk__19151_19157 = G__19169;
count__19152_19158 = G__19170;
i__19153_19159 = G__19171;
continue;
} else {
var ownee_19172 = cljs.core.first.call(null,seq__19150_19166__$1);
tiltontec.cell.evaluate.not_to_be.call(null,ownee_19172);

var G__19173 = cljs.core.next.call(null,seq__19150_19166__$1);
var G__19174 = null;
var G__19175 = (0);
var G__19176 = (0);
seq__19150_19156 = G__19173;
chunk__19151_19157 = G__19174;
count__19152_19158 = G__19175;
i__19153_19159 = G__19176;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

tiltontec.cell.evaluate.propagate_to_callers.call(null,c,callers);

if(cljs.core.truth_(tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c))){
} else {
if(cljs.core.truth_((function (){var or__6772__auto__ = (cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_) > tiltontec.cell.base.c_pulse_observed.call(null,c));
if(or__6772__auto__){
return or__6772__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,c)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854),new cljs.core.Keyword(null,"always","always",-1772028770),true], null));
}
})())){
tiltontec.cell.observer.c_observe.call(null,c,prior_value,new cljs.core.Keyword(null,"propagate","propagate",274376905));
} else {
}
}

return tiltontec.cell.evaluate.ephemeral_reset.call(null,c);
}finally {tiltontec.cell.base._STAR_defer_changes_STAR_ = _STAR_defer_changes_STAR_19149;

tiltontec.cell.base._STAR_c_prop_depth_STAR_ = _STAR_c_prop_depth_STAR_19148;

tiltontec.cell.base._STAR_call_stack_STAR_ = _STAR_call_stack_STAR_19147;

tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_19146;
}
}
});
tiltontec.cell.evaluate.propagate_to_callers = (function tiltontec$cell$evaluate$propagate_to_callers(c,callers){
if(cljs.core.empty_QMARK_.call(null,callers)){
return null;
} else {
var causation = cljs.core.cons.call(null,c,tiltontec.cell.base._STAR_causation_STAR_);
return tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"tell-dependents","tell-dependents",1916330388),c,((function (causation){
return (function (opcode,defer_info){
if(cljs.core.truth_(tiltontec.cell.base.mdead_QMARK_.call(null,tiltontec.cell.base.c_model.call(null,c)))){
return tiltontec.util.base.call_trc.call(null,"WHOAA!!!! dead by time :tell-deps dispatched; bailing",c);
} else {
var _STAR_causation_STAR_19177 = tiltontec.cell.base._STAR_causation_STAR_;
tiltontec.cell.base._STAR_causation_STAR_ = causation;

try{var seq__19178 = cljs.core.seq.call(null,cljs.core.seq.call(null,callers));
var chunk__19179 = null;
var count__19180 = (0);
var i__19181 = (0);
while(true){
if((i__19181 < count__19180)){
var caller = cljs.core._nth.call(null,chunk__19179,i__19181);
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__19182 = seq__19178;
var G__19183 = chunk__19179;
var G__19184 = count__19180;
var G__19185 = (i__19181 + (1));
seq__19178 = G__19182;
chunk__19179 = G__19183;
count__19180 = G__19184;
i__19181 = G__19185;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19178);
if(temp__4657__auto__){
var seq__19178__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19178__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__19178__$1);
var G__19186 = cljs.core.chunk_rest.call(null,seq__19178__$1);
var G__19187 = c__7592__auto__;
var G__19188 = cljs.core.count.call(null,c__7592__auto__);
var G__19189 = (0);
seq__19178 = G__19186;
chunk__19179 = G__19187;
count__19180 = G__19188;
i__19181 = G__19189;
continue;
} else {
var caller = cljs.core.first.call(null,seq__19178__$1);
if(cljs.core.truth_((function (){var or__6772__auto__ = cljs.core._EQ_.call(null,tiltontec.cell.base.c_state.call(null,caller),new cljs.core.Keyword(null,"quiesced","quiesced",421940903));
if(or__6772__auto__){
return or__6772__auto__;
} else {
var or__6772__auto____$1 = tiltontec.cell.integrity.c_current_QMARK_.call(null,caller);
if(cljs.core.truth_(or__6772__auto____$1)){
return or__6772__auto____$1;
} else {
var or__6772__auto____$2 = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([tiltontec.cell.base.c_lazy.call(null,caller)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.Keyword(null,"once-asked","once-asked",-1758934854)], null));
if(cljs.core.truth_(or__6772__auto____$2)){
return or__6772__auto____$2;
} else {
return (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),tiltontec.cell.base.c_useds.call(null,caller)))) && (cljs.core.not.call(null,tiltontec.cell.base.c_optimized_away_QMARK_.call(null,c)));
}
}
}
})())){
} else {
tiltontec.cell.evaluate.calculate_and_set.call(null,caller,new cljs.core.Keyword(null,"propagate","propagate",274376905),c);

}

var G__19190 = cljs.core.next.call(null,seq__19178__$1);
var G__19191 = null;
var G__19192 = (0);
var G__19193 = (0);
seq__19178 = G__19190;
chunk__19179 = G__19191;
count__19180 = G__19192;
i__19181 = G__19193;
continue;
}
} else {
return null;
}
}
break;
}
}finally {tiltontec.cell.base._STAR_causation_STAR_ = _STAR_causation_STAR_19177;
}}
});})(causation))
);
}
});

//# sourceMappingURL=evaluate.js.map