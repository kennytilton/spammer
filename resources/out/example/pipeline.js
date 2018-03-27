// Compiled by ClojureScript 1.9.671 {}
goog.provide('example.pipeline');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('cljs.core.async');
example.pipeline.pipe_segs = (function example$pipeline$pipe_segs(pipe){
return tiltontec.model.core._LT_mget.call(null,pipe,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
example.pipeline.pipe_seg_by_id = (function example$pipeline$pipe_seg_by_id(pipe,id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pipe)),id);
});
example.pipeline.pseg_pipe = (function example$pipeline$pseg_pipe(seg){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.pseg_id = (function example$pipeline$pseg_id(seg){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.pseg_in_rq = (function example$pipeline$pseg_in_rq(seg){
return new cljs.core.Keyword(null,"in-rq","in-rq",-1457632673).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.pseg_in_ak = (function example$pipeline$pseg_in_ak(seg){
return new cljs.core.Keyword(null,"in-ak","in-ak",-526980283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.pseg_in_data = (function example$pipeline$pseg_in_data(seg){
return new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.pseg_next_seg = (function example$pipeline$pseg_next_seg(seg){
return example.pipeline.pipe_seg_by_id.call(null,example.pipeline.pseg_pipe.call(null,seg),(example.pipeline.pseg_id.call(null,seg) + (1)));
});
example.pipeline.pseg_pipe_out_data = (function example$pipeline$pseg_pipe_out_data(seg){
return new cljs.core.Keyword(null,"out-data","out-data",-1440810430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,example.pipeline.pseg_pipe.call(null,seg)));
});
example.pipeline.pseg_processor = (function example$pipeline$pseg_processor(seg){
return new cljs.core.Keyword(null,"processor","processor",-16217796).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
example.pipeline.make_pipeline = (function example$pipeline$make_pipeline(in_chan,out_chan,processors){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184),new cljs.core.Keyword(null,"in-data","in-data",89576440),in_chan,new cljs.core.Keyword(null,"out-data","out-data",-1440810430),out_chan,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"the-kids","the-kids",1487890778,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ida","ida",-874572717,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(-1))], null),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proc","proc",-643106804,null),new cljs.core.Symbol(null,"processors","processors",319278700,null),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"ida","ida",-874572717,null),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"make-pipe-seg","make-pipe-seg",2135758044,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"proc","proc",-643106804,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_23518 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = (function (){var ida = cljs.core.atom.call(null,(-1));
return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = ((function (ida,_STAR_par_STAR_23518,me,cell,slot_name,cache){
return (function example$pipeline$make_pipeline_$_iter__23523(s__23524){
return (new cljs.core.LazySeq(null,((function (ida,_STAR_par_STAR_23518,me,cell,slot_name,cache){
return (function (){
var s__23524__$1 = s__23524;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23524__$1);
if(temp__4657__auto__){
var s__23524__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23524__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__23524__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__23526 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__23525 = (0);
while(true){
if((i__23525 < size__7560__auto__)){
var proc = cljs.core._nth.call(null,c__7559__auto__,i__23525);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
cljs.core.chunk_append.call(null,b__23526,example.pipeline.make_pipe_seg.call(null,me,id,proc));

var G__23531 = (i__23525 + (1));
i__23525 = G__23531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23526),example$pipeline$make_pipeline_$_iter__23523.call(null,cljs.core.chunk_rest.call(null,s__23524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23526),null);
}
} else {
var proc = cljs.core.first.call(null,s__23524__$2);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
return cljs.core.cons.call(null,example.pipeline.make_pipe_seg.call(null,me,id,proc),example$pipeline$make_pipeline_$_iter__23523.call(null,cljs.core.rest.call(null,s__23524__$2)));
}
} else {
return null;
}
break;
}
});})(ida,_STAR_par_STAR_23518,me,cell,slot_name,cache))
,null,null));
});})(ida,_STAR_par_STAR_23518,me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,processors);
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23518;
}})),new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw","raw",-1049784497,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seg","seg",-369048591,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"kids","kids",1156670771))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pseg-id","pseg-id",-1404192605,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null)),new cljs.core.Symbol(null,"seg","seg",-369048591,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"raw","raw",-1049784497,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var raw = (function (){var iter__7561__auto__ = ((function (me,cell,slot_name,cache){
return (function example$pipeline$make_pipeline_$_iter__23527(s__23528){
return (new cljs.core.LazySeq(null,((function (me,cell,slot_name,cache){
return (function (){
var s__23528__$1 = s__23528;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23528__$1);
if(temp__4657__auto__){
var s__23528__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23528__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__23528__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__23530 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__23529 = (0);
while(true){
if((i__23529 < size__7560__auto__)){
var seg = cljs.core._nth.call(null,c__7559__auto__,i__23529);
cljs.core.chunk_append.call(null,b__23530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.pipeline.pseg_id.call(null,seg),seg], null));

var G__23532 = (i__23529 + (1));
i__23529 = G__23532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23530),example$pipeline$make_pipeline_$_iter__23527.call(null,cljs.core.chunk_rest.call(null,s__23528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23530),null);
}
} else {
var seg = cljs.core.first.call(null,s__23528__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.pipeline.pseg_id.call(null,seg),seg], null),example$pipeline$make_pipeline_$_iter__23527.call(null,cljs.core.rest.call(null,s__23528__$2)));
}
} else {
return null;
}
break;
}
});})(me,cell,slot_name,cache))
,null,null));
});})(me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
})();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,raw);
})));
});
example.pipeline.make_pipe_seg = (function example$pipeline$make_pipe_seg(pipe,id,processor){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("example.pipeline","pipeseg","example.pipeline/pipeseg",1151361007),new cljs.core.Keyword(null,"par","par",-61778778),pipe,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"processor","processor",-16217796),processor,new cljs.core.Keyword(null,"in-rq","in-rq",-1457632673),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-data","in-data",89576440),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-ak","in-ak",-526980283),cljs.core.async.chan.call(null));
});
example.pipeline.pipe_seg_start = (function example$pipeline$pipe_seg_start(seg){
var c__22760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22760__auto__){
return (function (){
var f__22761__auto__ = (function (){var switch__22739__auto__ = ((function (c__22760__auto__){
return (function (state_23613){
var state_val_23614 = (state_23613[(1)]);
if((state_val_23614 === (7))){
var inst_23549 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
if(cljs.core.truth_(inst_23549)){
var statearr_23615_23673 = state_23613__$1;
(statearr_23615_23673[(1)] = (8));

} else {
var statearr_23616_23674 = state_23613__$1;
(statearr_23616_23674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (20))){
var inst_23574 = (state_23613[(7)]);
var inst_23534 = new cljs.core.Keyword(null,"pipe-out","pipe-out",-2110280080);
var inst_23535 = inst_23574;
var state_23613__$1 = (function (){var statearr_23617 = state_23613;
(statearr_23617[(8)] = inst_23535);

(statearr_23617[(9)] = inst_23534);

return statearr_23617;
})();
var statearr_23618_23675 = state_23613__$1;
(statearr_23618_23675[(2)] = null);

(statearr_23618_23675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (27))){
var inst_23595 = (state_23613[(2)]);
var inst_23534 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23619 = state_23613;
(statearr_23619[(10)] = inst_23595);

(statearr_23619[(8)] = inst_23535);

(statearr_23619[(9)] = inst_23534);

return statearr_23619;
})();
var statearr_23620_23676 = state_23613__$1;
(statearr_23620_23676[(2)] = null);

(statearr_23620_23676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (1))){
var inst_23533 = example.pipeline.pseg_next_seg.call(null,seg);
var inst_23534 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23621 = state_23613;
(statearr_23621[(11)] = inst_23533);

(statearr_23621[(8)] = inst_23535);

(statearr_23621[(9)] = inst_23534);

return statearr_23621;
})();
var statearr_23622_23677 = state_23613__$1;
(statearr_23622_23677[(2)] = null);

(statearr_23622_23677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (24))){
var inst_23589 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-putting-data-next","nil-putting-data-next",-328510321));
var state_23613__$1 = state_23613;
var statearr_23623_23678 = state_23613__$1;
(statearr_23623_23678[(2)] = inst_23589);

(statearr_23623_23678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (4))){
var inst_23609 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23624_23679 = state_23613__$1;
(statearr_23624_23679[(2)] = inst_23609);

(statearr_23624_23679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (15))){
var inst_23566 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23625_23680 = state_23613__$1;
(statearr_23625_23680[(2)] = inst_23566);

(statearr_23625_23680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (21))){
var inst_23580 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23626_23681 = state_23613__$1;
(statearr_23626_23681[(2)] = inst_23580);

(statearr_23626_23681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (31))){
var inst_23604 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-off-get-next-ak","nil-off-get-next-ak",1742172853));
var state_23613__$1 = state_23613;
var statearr_23627_23682 = state_23613__$1;
(statearr_23627_23682[(2)] = inst_23604);

(statearr_23627_23682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (32))){
var inst_23606 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23628_23683 = state_23613__$1;
(statearr_23628_23683[(2)] = inst_23606);

(statearr_23628_23683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (13))){
var inst_23560 = (state_23613[(12)]);
var inst_23534 = new cljs.core.Keyword(null,"ak-data","ak-data",1405039544);
var inst_23535 = inst_23560;
var state_23613__$1 = (function (){var statearr_23629 = state_23613;
(statearr_23629[(8)] = inst_23535);

(statearr_23629[(9)] = inst_23534);

return statearr_23629;
})();
var statearr_23630_23684 = state_23613__$1;
(statearr_23630_23684[(2)] = null);

(statearr_23630_23684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (22))){
var inst_23533 = (state_23613[(11)]);
var inst_23535 = (state_23613[(8)]);
var inst_23582 = example.pipeline.pseg_in_rq.call(null,inst_23533);
var inst_23583 = cljs.core.async.put_BANG_.call(null,inst_23582,true);
var inst_23584 = example.pipeline.pseg_in_data.call(null,inst_23533);
var inst_23585 = cljs.core.async.put_BANG_.call(null,inst_23584,inst_23535);
var state_23613__$1 = (function (){var statearr_23631 = state_23613;
(statearr_23631[(13)] = inst_23583);

return statearr_23631;
})();
if(cljs.core.truth_(inst_23585)){
var statearr_23632_23685 = state_23613__$1;
(statearr_23632_23685[(1)] = (23));

} else {
var statearr_23633_23686 = state_23613__$1;
(statearr_23633_23686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (29))){
var inst_23600 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
if(cljs.core.truth_(inst_23600)){
var statearr_23634_23687 = state_23613__$1;
(statearr_23634_23687[(1)] = (30));

} else {
var statearr_23635_23688 = state_23613__$1;
(statearr_23635_23688[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (6))){
var inst_23547 = example.pipeline.pseg_in_rq.call(null,seg);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23613__$1,(7),inst_23547);
} else {
if((state_val_23614 === (28))){
var inst_23533 = (state_23613[(11)]);
var inst_23598 = example.pipeline.pseg_in_ak.call(null,inst_23533);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23613__$1,(29),inst_23598);
} else {
if((state_val_23614 === (25))){
var inst_23591 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23637_23689 = state_23613__$1;
(statearr_23637_23689[(2)] = inst_23591);

(statearr_23637_23689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (17))){
var inst_23535 = (state_23613[(8)]);
var inst_23570 = (state_23613[(2)]);
var tmp23636 = inst_23535;
var inst_23534 = new cljs.core.Keyword(null,"process-data","process-data",1368271805);
var inst_23535__$1 = tmp23636;
var state_23613__$1 = (function (){var statearr_23638 = state_23613;
(statearr_23638[(8)] = inst_23535__$1);

(statearr_23638[(14)] = inst_23570);

(statearr_23638[(9)] = inst_23534);

return statearr_23638;
})();
var statearr_23639_23690 = state_23613__$1;
(statearr_23639_23690[(2)] = null);

(statearr_23639_23690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (3))){
var inst_23611 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23613__$1,inst_23611);
} else {
if((state_val_23614 === (12))){
var inst_23560 = (state_23613[(12)]);
var inst_23560__$1 = (state_23613[(2)]);
var state_23613__$1 = (function (){var statearr_23640 = state_23613;
(statearr_23640[(12)] = inst_23560__$1);

return statearr_23640;
})();
if(cljs.core.truth_(inst_23560__$1)){
var statearr_23641_23691 = state_23613__$1;
(statearr_23641_23691[(1)] = (13));

} else {
var statearr_23642_23692 = state_23613__$1;
(statearr_23642_23692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (2))){
var inst_23534 = (state_23613[(9)]);
var state_23613__$1 = state_23613;
var G__23643_23693 = inst_23534;
var G__23643_23694__$1 = (((G__23643_23693 instanceof cljs.core.Keyword))?G__23643_23693.fqn:null);
switch (G__23643_23694__$1) {
case "exit":
var statearr_23644_23696 = state_23613__$1;
(statearr_23644_23696[(1)] = (5));


break;
case "init":
var statearr_23645_23697 = state_23613__$1;
(statearr_23645_23697[(1)] = (6));


break;
case "copy-data":
var statearr_23646_23698 = state_23613__$1;
(statearr_23646_23698[(1)] = (11));


break;
case "ak-data":
var statearr_23647_23699 = state_23613__$1;
(statearr_23647_23699[(1)] = (16));


break;
case "process-data":
var statearr_23648_23700 = state_23613__$1;
(statearr_23648_23700[(1)] = (18));


break;
case "relay-next":
var statearr_23649_23701 = state_23613__$1;
(statearr_23649_23701[(1)] = (22));


break;
case "pipe-out":
var statearr_23650_23702 = state_23613__$1;
(statearr_23650_23702[(1)] = (26));


break;
case "get-ak-from-next-seg":
var statearr_23651_23703 = state_23613__$1;
(statearr_23651_23703[(1)] = (28));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23643_23694__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (23))){
var inst_23534 = new cljs.core.Keyword(null,"get-ak-from-next-seg","get-ak-from-next-seg",998096295);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23652 = state_23613;
(statearr_23652[(8)] = inst_23535);

(statearr_23652[(9)] = inst_23534);

return statearr_23652;
})();
var statearr_23653_23704 = state_23613__$1;
(statearr_23653_23704[(2)] = null);

(statearr_23653_23704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (19))){
var inst_23574 = (state_23613[(7)]);
var inst_23534 = new cljs.core.Keyword(null,"relay-next","relay-next",649776130);
var inst_23535 = inst_23574;
var state_23613__$1 = (function (){var statearr_23654 = state_23613;
(statearr_23654[(8)] = inst_23535);

(statearr_23654[(9)] = inst_23534);

return statearr_23654;
})();
var statearr_23655_23705 = state_23613__$1;
(statearr_23655_23705[(2)] = null);

(statearr_23655_23705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (11))){
var inst_23558 = example.pipeline.pseg_in_data.call(null,seg);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23613__$1,(12),inst_23558);
} else {
if((state_val_23614 === (9))){
var inst_23553 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-out-on-rq","seg-out-on-rq",1496394983));
var inst_23534 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23656 = state_23613;
(statearr_23656[(15)] = inst_23553);

(statearr_23656[(8)] = inst_23535);

(statearr_23656[(9)] = inst_23534);

return statearr_23656;
})();
var statearr_23657_23706 = state_23613__$1;
(statearr_23657_23706[(2)] = null);

(statearr_23657_23706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (5))){
var inst_23537 = cljs.core.deref.call(null,seg);
var inst_23538 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_23537);
var inst_23539 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"closing-seg!!!","closing-seg!!!",-1972709560),inst_23538);
var inst_23540 = example.pipeline.pseg_in_rq.call(null,seg);
var inst_23541 = cljs.core.async.close_BANG_.call(null,inst_23540);
var inst_23542 = example.pipeline.pseg_in_data.call(null,seg);
var inst_23543 = cljs.core.async.close_BANG_.call(null,inst_23542);
var inst_23544 = example.pipeline.pseg_in_ak.call(null,seg);
var inst_23545 = cljs.core.async.close_BANG_.call(null,inst_23544);
var state_23613__$1 = (function (){var statearr_23658 = state_23613;
(statearr_23658[(16)] = inst_23543);

(statearr_23658[(17)] = inst_23541);

(statearr_23658[(18)] = inst_23539);

return statearr_23658;
})();
var statearr_23659_23707 = state_23613__$1;
(statearr_23659_23707[(2)] = inst_23545);

(statearr_23659_23707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (14))){
var inst_23564 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-got-nil-data","seg-got-nil-data",262773951));
var state_23613__$1 = state_23613;
var statearr_23660_23708 = state_23613__$1;
(statearr_23660_23708[(2)] = inst_23564);

(statearr_23660_23708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (26))){
var inst_23535 = (state_23613[(8)]);
var inst_23593 = example.pipeline.pseg_pipe_out_data.call(null,seg);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23613__$1,(27),inst_23593,inst_23535);
} else {
if((state_val_23614 === (16))){
var inst_23568 = example.pipeline.pseg_in_ak.call(null,seg);
var state_23613__$1 = state_23613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23613__$1,(17),inst_23568,true);
} else {
if((state_val_23614 === (30))){
var inst_23534 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23661 = state_23613;
(statearr_23661[(8)] = inst_23535);

(statearr_23661[(9)] = inst_23534);

return statearr_23661;
})();
var statearr_23662_23709 = state_23613__$1;
(statearr_23662_23709[(2)] = null);

(statearr_23662_23709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (10))){
var inst_23556 = (state_23613[(2)]);
var state_23613__$1 = state_23613;
var statearr_23663_23710 = state_23613__$1;
(statearr_23663_23710[(2)] = inst_23556);

(statearr_23663_23710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (18))){
var inst_23533 = (state_23613[(11)]);
var inst_23535 = (state_23613[(8)]);
var inst_23573 = example.pipeline.pseg_processor.call(null,seg);
var inst_23574 = inst_23573.call(null,inst_23535);
var state_23613__$1 = (function (){var statearr_23664 = state_23613;
(statearr_23664[(7)] = inst_23574);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23533)){
var statearr_23665_23711 = state_23613__$1;
(statearr_23665_23711[(1)] = (19));

} else {
var statearr_23666_23712 = state_23613__$1;
(statearr_23666_23712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23614 === (8))){
var inst_23534 = new cljs.core.Keyword(null,"copy-data","copy-data",-320904302);
var inst_23535 = null;
var state_23613__$1 = (function (){var statearr_23667 = state_23613;
(statearr_23667[(8)] = inst_23535);

(statearr_23667[(9)] = inst_23534);

return statearr_23667;
})();
var statearr_23668_23713 = state_23613__$1;
(statearr_23668_23713[(2)] = null);

(statearr_23668_23713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22760__auto__))
;
return ((function (switch__22739__auto__,c__22760__auto__){
return (function() {
var example$pipeline$pipe_seg_start_$_state_machine__22740__auto__ = null;
var example$pipeline$pipe_seg_start_$_state_machine__22740__auto____0 = (function (){
var statearr_23669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23669[(0)] = example$pipeline$pipe_seg_start_$_state_machine__22740__auto__);

(statearr_23669[(1)] = (1));

return statearr_23669;
});
var example$pipeline$pipe_seg_start_$_state_machine__22740__auto____1 = (function (state_23613){
while(true){
var ret_value__22741__auto__ = (function (){try{while(true){
var result__22742__auto__ = switch__22739__auto__.call(null,state_23613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22742__auto__;
}
break;
}
}catch (e23670){if((e23670 instanceof Object)){
var ex__22743__auto__ = e23670;
var statearr_23671_23714 = state_23613;
(statearr_23671_23714[(5)] = ex__22743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23715 = state_23613;
state_23613 = G__23715;
continue;
} else {
return ret_value__22741__auto__;
}
break;
}
});
example$pipeline$pipe_seg_start_$_state_machine__22740__auto__ = function(state_23613){
switch(arguments.length){
case 0:
return example$pipeline$pipe_seg_start_$_state_machine__22740__auto____0.call(this);
case 1:
return example$pipeline$pipe_seg_start_$_state_machine__22740__auto____1.call(this,state_23613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
example$pipeline$pipe_seg_start_$_state_machine__22740__auto__.cljs$core$IFn$_invoke$arity$0 = example$pipeline$pipe_seg_start_$_state_machine__22740__auto____0;
example$pipeline$pipe_seg_start_$_state_machine__22740__auto__.cljs$core$IFn$_invoke$arity$1 = example$pipeline$pipe_seg_start_$_state_machine__22740__auto____1;
return example$pipeline$pipe_seg_start_$_state_machine__22740__auto__;
})()
;})(switch__22739__auto__,c__22760__auto__))
})();
var state__22762__auto__ = (function (){var statearr_23672 = f__22761__auto__.call(null);
(statearr_23672[(6)] = c__22760__auto__);

return statearr_23672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22762__auto__);
});})(c__22760__auto__))
);

return c__22760__auto__;
});
example.pipeline.pipe_start = (function example$pipeline$pipe_start(pipe){
var segs = example.pipeline.pipe_segs.call(null,pipe);
var seq__23716_23789 = cljs.core.seq.call(null,segs);
var chunk__23717_23790 = null;
var count__23718_23791 = (0);
var i__23719_23792 = (0);
while(true){
if((i__23719_23792 < count__23718_23791)){
var seg_23793 = cljs.core._nth.call(null,chunk__23717_23790,i__23719_23792);
example.pipeline.pipe_seg_start.call(null,seg_23793);

var G__23794 = seq__23716_23789;
var G__23795 = chunk__23717_23790;
var G__23796 = count__23718_23791;
var G__23797 = (i__23719_23792 + (1));
seq__23716_23789 = G__23794;
chunk__23717_23790 = G__23795;
count__23718_23791 = G__23796;
i__23719_23792 = G__23797;
continue;
} else {
var temp__4657__auto___23798 = cljs.core.seq.call(null,seq__23716_23789);
if(temp__4657__auto___23798){
var seq__23716_23799__$1 = temp__4657__auto___23798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23716_23799__$1)){
var c__7592__auto___23800 = cljs.core.chunk_first.call(null,seq__23716_23799__$1);
var G__23801 = cljs.core.chunk_rest.call(null,seq__23716_23799__$1);
var G__23802 = c__7592__auto___23800;
var G__23803 = cljs.core.count.call(null,c__7592__auto___23800);
var G__23804 = (0);
seq__23716_23789 = G__23801;
chunk__23717_23790 = G__23802;
count__23718_23791 = G__23803;
i__23719_23792 = G__23804;
continue;
} else {
var seg_23805 = cljs.core.first.call(null,seq__23716_23799__$1);
example.pipeline.pipe_seg_start.call(null,seg_23805);

var G__23806 = cljs.core.next.call(null,seq__23716_23799__$1);
var G__23807 = null;
var G__23808 = (0);
var G__23809 = (0);
seq__23716_23789 = G__23806;
chunk__23717_23790 = G__23807;
count__23718_23791 = G__23808;
i__23719_23792 = G__23809;
continue;
}
} else {
}
}
break;
}

var ps0 = cljs.core.first.call(null,example.pipeline.pipe_segs.call(null,pipe));
var psn = cljs.core.last.call(null,example.pipeline.pipe_segs.call(null,pipe));
var c__22760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22760__auto__,ps0,psn,segs){
return (function (){
var f__22761__auto__ = (function (){var switch__22739__auto__ = ((function (c__22760__auto__,ps0,psn,segs){
return (function (state_23757){
var state_val_23758 = (state_23757[(1)]);
if((state_val_23758 === (7))){
var inst_23728 = (state_23757[(7)]);
var inst_23728__$1 = (state_23757[(2)]);
var inst_23729 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-got!","pipe-got!",-559173943),inst_23728__$1);
var state_23757__$1 = (function (){var statearr_23759 = state_23757;
(statearr_23759[(8)] = inst_23729);

(statearr_23759[(7)] = inst_23728__$1);

return statearr_23759;
})();
if(cljs.core.truth_(inst_23728__$1)){
var statearr_23760_23810 = state_23757__$1;
(statearr_23760_23810[(1)] = (8));

} else {
var statearr_23761_23811 = state_23757__$1;
(statearr_23761_23811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (1))){
var inst_23720 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23721 = null;
var state_23757__$1 = (function (){var statearr_23762 = state_23757;
(statearr_23762[(9)] = inst_23721);

(statearr_23762[(10)] = inst_23720);

return statearr_23762;
})();
var statearr_23763_23812 = state_23757__$1;
(statearr_23763_23812[(2)] = null);

(statearr_23763_23812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (4))){
var inst_23753 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23764_23813 = state_23757__$1;
(statearr_23764_23813[(2)] = inst_23753);

(statearr_23764_23813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (15))){
var inst_23720 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_23721 = null;
var state_23757__$1 = (function (){var statearr_23765 = state_23757;
(statearr_23765[(9)] = inst_23721);

(statearr_23765[(10)] = inst_23720);

return statearr_23765;
})();
var statearr_23766_23814 = state_23757__$1;
(statearr_23766_23814[(2)] = null);

(statearr_23766_23814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (13))){
var inst_23744 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
if(cljs.core.truth_(inst_23744)){
var statearr_23767_23815 = state_23757__$1;
(statearr_23767_23815[(1)] = (14));

} else {
var statearr_23768_23816 = state_23757__$1;
(statearr_23768_23816[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (6))){
var inst_23725 = cljs.core.deref.call(null,pipe);
var inst_23726 = new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(inst_23725);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(7),inst_23726);
} else {
if((state_val_23758 === (3))){
var inst_23755 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else {
if((state_val_23758 === (12))){
var inst_23742 = example.pipeline.pseg_in_ak.call(null,ps0);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(13),inst_23742);
} else {
if((state_val_23758 === (2))){
var inst_23720 = (state_23757[(10)]);
var state_23757__$1 = state_23757;
var G__23770_23817 = inst_23720;
var G__23770_23818__$1 = (((G__23770_23817 instanceof cljs.core.Keyword))?G__23770_23817.fqn:null);
switch (G__23770_23818__$1) {
case "exit":
var statearr_23771_23820 = state_23757__$1;
(statearr_23771_23820[(1)] = (5));


break;
case "init":
var statearr_23772_23821 = state_23757__$1;
(statearr_23772_23821[(1)] = (6));


break;
case "toggle-rq-first":
var statearr_23773_23822 = state_23757__$1;
(statearr_23773_23822[(1)] = (11));


break;
case "get-rq-ak":
var statearr_23774_23823 = state_23757__$1;
(statearr_23774_23823[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23770_23818__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (11))){
var inst_23721 = (state_23757[(9)]);
var inst_23736 = example.pipeline.pseg_in_rq.call(null,ps0);
var inst_23737 = cljs.core.async.put_BANG_.call(null,inst_23736,true);
var inst_23738 = example.pipeline.pseg_in_data.call(null,ps0);
var inst_23739 = cljs.core.async.put_BANG_.call(null,inst_23738,inst_23721);
var tmp23769 = inst_23721;
var inst_23720 = new cljs.core.Keyword(null,"get-rq-ak","get-rq-ak",-366033966);
var inst_23721__$1 = tmp23769;
var state_23757__$1 = (function (){var statearr_23775 = state_23757;
(statearr_23775[(9)] = inst_23721__$1);

(statearr_23775[(11)] = inst_23739);

(statearr_23775[(10)] = inst_23720);

(statearr_23775[(12)] = inst_23737);

return statearr_23775;
})();
var statearr_23776_23824 = state_23757__$1;
(statearr_23776_23824[(2)] = null);

(statearr_23776_23824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (9))){
var state_23757__$1 = state_23757;
var statearr_23777_23825 = state_23757__$1;
(statearr_23777_23825[(2)] = new cljs.core.Keyword(null,"exit","exit",351849638));

(statearr_23777_23825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (5))){
var inst_23723 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-exiting","pipe-exiting",-470897642));
var state_23757__$1 = state_23757;
var statearr_23778_23826 = state_23757__$1;
(statearr_23778_23826[(2)] = inst_23723);

(statearr_23778_23826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (14))){
var inst_23720 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23721 = null;
var state_23757__$1 = (function (){var statearr_23779 = state_23757;
(statearr_23779[(9)] = inst_23721);

(statearr_23779[(10)] = inst_23720);

return statearr_23779;
})();
var statearr_23780_23827 = state_23757__$1;
(statearr_23780_23827[(2)] = null);

(statearr_23780_23827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (16))){
var inst_23750 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23781_23828 = state_23757__$1;
(statearr_23781_23828[(2)] = inst_23750);

(statearr_23781_23828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (10))){
var inst_23728 = (state_23757[(7)]);
var inst_23733 = (state_23757[(2)]);
var inst_23720 = inst_23733;
var inst_23721 = inst_23728;
var state_23757__$1 = (function (){var statearr_23782 = state_23757;
(statearr_23782[(9)] = inst_23721);

(statearr_23782[(10)] = inst_23720);

return statearr_23782;
})();
var statearr_23783_23829 = state_23757__$1;
(statearr_23783_23829[(2)] = null);

(statearr_23783_23829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (8))){
var state_23757__$1 = state_23757;
var statearr_23784_23830 = state_23757__$1;
(statearr_23784_23830[(2)] = new cljs.core.Keyword(null,"toggle-rq-first","toggle-rq-first",1792862055));

(statearr_23784_23830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22760__auto__,ps0,psn,segs))
;
return ((function (switch__22739__auto__,c__22760__auto__,ps0,psn,segs){
return (function() {
var example$pipeline$pipe_start_$_state_machine__22740__auto__ = null;
var example$pipeline$pipe_start_$_state_machine__22740__auto____0 = (function (){
var statearr_23785 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23785[(0)] = example$pipeline$pipe_start_$_state_machine__22740__auto__);

(statearr_23785[(1)] = (1));

return statearr_23785;
});
var example$pipeline$pipe_start_$_state_machine__22740__auto____1 = (function (state_23757){
while(true){
var ret_value__22741__auto__ = (function (){try{while(true){
var result__22742__auto__ = switch__22739__auto__.call(null,state_23757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22742__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object)){
var ex__22743__auto__ = e23786;
var statearr_23787_23831 = state_23757;
(statearr_23787_23831[(5)] = ex__22743__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23832 = state_23757;
state_23757 = G__23832;
continue;
} else {
return ret_value__22741__auto__;
}
break;
}
});
example$pipeline$pipe_start_$_state_machine__22740__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return example$pipeline$pipe_start_$_state_machine__22740__auto____0.call(this);
case 1:
return example$pipeline$pipe_start_$_state_machine__22740__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
example$pipeline$pipe_start_$_state_machine__22740__auto__.cljs$core$IFn$_invoke$arity$0 = example$pipeline$pipe_start_$_state_machine__22740__auto____0;
example$pipeline$pipe_start_$_state_machine__22740__auto__.cljs$core$IFn$_invoke$arity$1 = example$pipeline$pipe_start_$_state_machine__22740__auto____1;
return example$pipeline$pipe_start_$_state_machine__22740__auto__;
})()
;})(switch__22739__auto__,c__22760__auto__,ps0,psn,segs))
})();
var state__22762__auto__ = (function (){var statearr_23788 = f__22761__auto__.call(null);
(statearr_23788[(6)] = c__22760__auto__);

return statearr_23788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22762__auto__);
});})(c__22760__auto__,ps0,psn,segs))
);

return c__22760__auto__;
});

//# sourceMappingURL=pipeline.js.map