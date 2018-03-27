// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.example.pipeline.pipeline');
goog.require('cljs.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.model.core');
goog.require('tiltontec.util.core');
goog.require('cljs.core.async');
tiltontec.webmx.example.pipeline.pipeline.pipe_segs = (function tiltontec$webmx$example$pipeline$pipeline$pipe_segs(pipe){
return tiltontec.model.core._LT_mget.call(null,pipe,new cljs.core.Keyword(null,"kids","kids",1156670771));
});
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_by_id = (function tiltontec$webmx$example$pipeline$pipeline$pipe_seg_by_id(pipe,id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pipe)),id);
});
tiltontec.webmx.example.pipeline.pipeline.pseg_pipe = (function tiltontec$webmx$example$pipeline$pipeline$pseg_pipe(seg){
return new cljs.core.Keyword(null,"par","par",-61778778).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_id = (function tiltontec$webmx$example$pipeline$pipeline$pseg_id(seg){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq = (function tiltontec$webmx$example$pipeline$pipeline$pseg_in_rq(seg){
return new cljs.core.Keyword(null,"in-rq","in-rq",-1457632673).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak = (function tiltontec$webmx$example$pipeline$pipeline$pseg_in_ak(seg){
return new cljs.core.Keyword(null,"in-ak","in-ak",-526980283).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_in_data = (function tiltontec$webmx$example$pipeline$pipeline$pseg_in_data(seg){
return new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_next_seg = (function tiltontec$webmx$example$pipeline$pipeline$pseg_next_seg(seg){
return tiltontec.webmx.example.pipeline.pipeline.pipe_seg_by_id.call(null,tiltontec.webmx.example.pipeline.pipeline.pseg_pipe.call(null,seg),(tiltontec.webmx.example.pipeline.pipeline.pseg_id.call(null,seg) + (1)));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_pipe_out_data = (function tiltontec$webmx$example$pipeline$pipeline$pseg_pipe_out_data(seg){
return new cljs.core.Keyword(null,"out-data","out-data",-1440810430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.webmx.example.pipeline.pipeline.pseg_pipe.call(null,seg)));
});
tiltontec.webmx.example.pipeline.pipeline.pseg_processor = (function tiltontec$webmx$example$pipeline$pipeline$pseg_processor(seg){
return new cljs.core.Keyword(null,"processor","processor",-16217796).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,seg));
});
tiltontec.webmx.example.pipeline.pipeline.make_pipeline = (function tiltontec$webmx$example$pipeline$pipeline$make_pipeline(delay,processors){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.model.core","family","tiltontec.model.core/family",-623513184),new cljs.core.Keyword(null,"in-data","in-data",89576440),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-data","out-data",-1440810430),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"fst","fst",-1040014328),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807)),new cljs.core.Keyword(null,"input","input",556931961),tiltontec.cell.core.cI.call(null,null),new cljs.core.Keyword(null,"poutput","poutput",-1235468379),tiltontec.cell.core.cI.call(null,null),new cljs.core.Keyword(null,"delay","delay",-574225219),delay,new cljs.core.Keyword(null,"kids","kids",1156670771),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"the-kids","the-kids",1487890778,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ida","ida",-874572717,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(-1))], null),cljs.core.list(new cljs.core.Symbol(null,"doall","doall",988520834,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"proc","proc",-643106804,null),new cljs.core.Symbol(null,"processors","processors",319278700,null),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.list(new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"ida","ida",-874572717,null),new cljs.core.Symbol(null,"inc","inc",324505433,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"make-pipe-seg","make-pipe-seg",2135758044,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"proc","proc",-643106804,null))))))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var _STAR_par_STAR_25483 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = (function (){var ida = cljs.core.atom.call(null,(-1));
return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = ((function (ida,_STAR_par_STAR_25483,me,cell,slot_name,cache){
return (function tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25488(s__25489){
return (new cljs.core.LazySeq(null,((function (ida,_STAR_par_STAR_25483,me,cell,slot_name,cache){
return (function (){
var s__25489__$1 = s__25489;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25489__$1);
if(temp__4657__auto__){
var s__25489__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25489__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__25489__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__25491 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__25490 = (0);
while(true){
if((i__25490 < size__7560__auto__)){
var proc = cljs.core._nth.call(null,c__7559__auto__,i__25490);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
cljs.core.chunk_append.call(null,b__25491,tiltontec.webmx.example.pipeline.pipeline.make_pipe_seg.call(null,me,id,proc));

var G__25496 = (i__25490 + (1));
i__25490 = G__25496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25491),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25488.call(null,cljs.core.chunk_rest.call(null,s__25489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25491),null);
}
} else {
var proc = cljs.core.first.call(null,s__25489__$2);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
return cljs.core.cons.call(null,tiltontec.webmx.example.pipeline.pipeline.make_pipe_seg.call(null,me,id,proc),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25488.call(null,cljs.core.rest.call(null,s__25489__$2)));
}
} else {
return null;
}
break;
}
});})(ida,_STAR_par_STAR_25483,me,cell,slot_name,cache))
,null,null));
});})(ida,_STAR_par_STAR_25483,me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,processors);
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_25483;
}})),new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw","raw",-1049784497,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seg","seg",-369048591,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"kids","kids",1156670771))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pseg-id","pseg-id",-1404192605,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null)),new cljs.core.Symbol(null,"seg","seg",-369048591,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"raw","raw",-1049784497,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var raw = (function (){var iter__7561__auto__ = ((function (me,cell,slot_name,cache){
return (function tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25492(s__25493){
return (new cljs.core.LazySeq(null,((function (me,cell,slot_name,cache){
return (function (){
var s__25493__$1 = s__25493;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25493__$1);
if(temp__4657__auto__){
var s__25493__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25493__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__25493__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__25495 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__25494 = (0);
while(true){
if((i__25494 < size__7560__auto__)){
var seg = cljs.core._nth.call(null,c__7559__auto__,i__25494);
cljs.core.chunk_append.call(null,b__25495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.example.pipeline.pipeline.pseg_id.call(null,seg),seg], null));

var G__25497 = (i__25494 + (1));
i__25494 = G__25497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25495),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25492.call(null,cljs.core.chunk_rest.call(null,s__25493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25495),null);
}
} else {
var seg = cljs.core.first.call(null,s__25493__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.example.pipeline.pipeline.pseg_id.call(null,seg),seg], null),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__25492.call(null,cljs.core.rest.call(null,s__25493__$2)));
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
tiltontec.webmx.example.pipeline.pipeline.pl_delay = (function tiltontec$webmx$example$pipeline$pipeline$pl_delay(p){
return tiltontec.model.core._LT_mget.call(null,p,new cljs.core.Keyword(null,"delay","delay",-574225219));
});
tiltontec.webmx.example.pipeline.pipeline.make_pipe_seg = (function tiltontec$webmx$example$pipeline$pipeline$make_pipe_seg(pipe,id,processor){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("tiltontec.webmx.example.pipeline.pipeline","pipeseg","tiltontec.webmx.example.pipeline.pipeline/pipeseg",-504855484),new cljs.core.Keyword(null,"par","par",-61778778),pipe,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"processor","processor",-16217796),processor,new cljs.core.Keyword(null,"in-rq","in-rq",-1457632673),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-data","in-data",89576440),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-ak","in-ak",-526980283),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"fst","fst",-1040014328),tiltontec.cell.core.cI.call(null,new cljs.core.Keyword(null,"nascent","nascent",443401807)));
});
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_start = (function tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start(seg){
var c__20051__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20051__auto__){
return (function (){
var f__20052__auto__ = (function (){var switch__20030__auto__ = ((function (c__20051__auto__){
return (function (state_25581){
var state_val_25582 = (state_25581[(1)]);
if((state_val_25582 === (7))){
var inst_25515 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25515)){
var statearr_25583_25643 = state_25581__$1;
(statearr_25583_25643[(1)] = (8));

} else {
var statearr_25584_25644 = state_25581__$1;
(statearr_25584_25644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (20))){
var inst_25539 = (state_25581[(7)]);
var inst_25499 = new cljs.core.Keyword(null,"pipe-out","pipe-out",-2110280080);
var inst_25500 = inst_25539;
var state_25581__$1 = (function (){var statearr_25585 = state_25581;
(statearr_25585[(8)] = inst_25499);

(statearr_25585[(9)] = inst_25500);

return statearr_25585;
})();
var statearr_25586_25645 = state_25581__$1;
(statearr_25586_25645[(2)] = null);

(statearr_25586_25645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (27))){
var inst_25500 = (state_25581[(9)]);
var inst_25561 = (state_25581[(2)]);
var inst_25562 = tiltontec.webmx.example.pipeline.pipeline.pseg_pipe.call(null,seg);
var inst_25563 = tiltontec.model.core.mset_BANG__GT_.call(null,inst_25562,new cljs.core.Keyword(null,"poutput","poutput",-1235468379),inst_25500);
var inst_25499 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_25500__$1 = null;
var state_25581__$1 = (function (){var statearr_25587 = state_25581;
(statearr_25587[(8)] = inst_25499);

(statearr_25587[(9)] = inst_25500__$1);

(statearr_25587[(10)] = inst_25563);

(statearr_25587[(11)] = inst_25561);

return statearr_25587;
})();
var statearr_25588_25646 = state_25581__$1;
(statearr_25588_25646[(2)] = null);

(statearr_25588_25646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (1))){
var inst_25498 = tiltontec.webmx.example.pipeline.pipeline.pseg_next_seg.call(null,seg);
var inst_25499 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_25500 = null;
var state_25581__$1 = (function (){var statearr_25589 = state_25581;
(statearr_25589[(8)] = inst_25499);

(statearr_25589[(9)] = inst_25500);

(statearr_25589[(12)] = inst_25498);

return statearr_25589;
})();
var statearr_25590_25647 = state_25581__$1;
(statearr_25590_25647[(2)] = null);

(statearr_25590_25647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (24))){
var inst_25554 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-putting-data-next","nil-putting-data-next",-328510321));
var state_25581__$1 = state_25581;
var statearr_25591_25648 = state_25581__$1;
(statearr_25591_25648[(2)] = inst_25554);

(statearr_25591_25648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (4))){
var inst_25577 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25592_25649 = state_25581__$1;
(statearr_25592_25649[(2)] = inst_25577);

(statearr_25592_25649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (15))){
var inst_25531 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25593_25650 = state_25581__$1;
(statearr_25593_25650[(2)] = inst_25531);

(statearr_25593_25650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (21))){
var inst_25545 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25594_25651 = state_25581__$1;
(statearr_25594_25651[(2)] = inst_25545);

(statearr_25594_25651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (31))){
var inst_25572 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-off-get-next-ak","nil-off-get-next-ak",1742172853));
var state_25581__$1 = state_25581;
var statearr_25595_25652 = state_25581__$1;
(statearr_25595_25652[(2)] = inst_25572);

(statearr_25595_25652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (32))){
var inst_25574 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25596_25653 = state_25581__$1;
(statearr_25596_25653[(2)] = inst_25574);

(statearr_25596_25653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (13))){
var inst_25525 = (state_25581[(13)]);
var inst_25499 = new cljs.core.Keyword(null,"ak-data","ak-data",1405039544);
var inst_25500 = inst_25525;
var state_25581__$1 = (function (){var statearr_25597 = state_25581;
(statearr_25597[(8)] = inst_25499);

(statearr_25597[(9)] = inst_25500);

return statearr_25597;
})();
var statearr_25598_25654 = state_25581__$1;
(statearr_25598_25654[(2)] = null);

(statearr_25598_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (22))){
var inst_25500 = (state_25581[(9)]);
var inst_25498 = (state_25581[(12)]);
var inst_25547 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,inst_25498);
var inst_25548 = cljs.core.async.put_BANG_.call(null,inst_25547,true);
var inst_25549 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,inst_25498);
var inst_25550 = cljs.core.async.put_BANG_.call(null,inst_25549,inst_25500);
var state_25581__$1 = (function (){var statearr_25599 = state_25581;
(statearr_25599[(14)] = inst_25548);

return statearr_25599;
})();
if(cljs.core.truth_(inst_25550)){
var statearr_25600_25655 = state_25581__$1;
(statearr_25600_25655[(1)] = (23));

} else {
var statearr_25601_25656 = state_25581__$1;
(statearr_25601_25656[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (29))){
var inst_25568 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25568)){
var statearr_25602_25657 = state_25581__$1;
(statearr_25602_25657[(1)] = (30));

} else {
var statearr_25603_25658 = state_25581__$1;
(statearr_25603_25658[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (6))){
var inst_25513 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,seg);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(7),inst_25513);
} else {
if((state_val_25582 === (28))){
var inst_25498 = (state_25581[(12)]);
var inst_25566 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,inst_25498);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(29),inst_25566);
} else {
if((state_val_25582 === (25))){
var inst_25556 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25605_25659 = state_25581__$1;
(statearr_25605_25659[(2)] = inst_25556);

(statearr_25605_25659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (17))){
var inst_25500 = (state_25581[(9)]);
var inst_25535 = (state_25581[(2)]);
var tmp25604 = inst_25500;
var inst_25499 = new cljs.core.Keyword(null,"process-data","process-data",1368271805);
var inst_25500__$1 = tmp25604;
var state_25581__$1 = (function (){var statearr_25606 = state_25581;
(statearr_25606[(8)] = inst_25499);

(statearr_25606[(15)] = inst_25535);

(statearr_25606[(9)] = inst_25500__$1);

return statearr_25606;
})();
var statearr_25607_25660 = state_25581__$1;
(statearr_25607_25660[(2)] = null);

(statearr_25607_25660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (3))){
var inst_25579 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25581__$1,inst_25579);
} else {
if((state_val_25582 === (12))){
var inst_25525 = (state_25581[(13)]);
var inst_25525__$1 = (state_25581[(2)]);
var state_25581__$1 = (function (){var statearr_25608 = state_25581;
(statearr_25608[(13)] = inst_25525__$1);

return statearr_25608;
})();
if(cljs.core.truth_(inst_25525__$1)){
var statearr_25609_25661 = state_25581__$1;
(statearr_25609_25661[(1)] = (13));

} else {
var statearr_25610_25662 = state_25581__$1;
(statearr_25610_25662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (2))){
var inst_25499 = (state_25581[(8)]);
var inst_25502 = tiltontec.model.core.mset_BANG__GT_.call(null,seg,new cljs.core.Keyword(null,"fst","fst",-1040014328),inst_25499);
var state_25581__$1 = (function (){var statearr_25611 = state_25581;
(statearr_25611[(16)] = inst_25502);

return statearr_25611;
})();
var G__25612_25663 = inst_25499;
var G__25612_25664__$1 = (((G__25612_25663 instanceof cljs.core.Keyword))?G__25612_25663.fqn:null);
switch (G__25612_25664__$1) {
case "exit":
var statearr_25613_25666 = state_25581__$1;
(statearr_25613_25666[(1)] = (5));


break;
case "init":
var statearr_25614_25667 = state_25581__$1;
(statearr_25614_25667[(1)] = (6));


break;
case "copy-data":
var statearr_25615_25668 = state_25581__$1;
(statearr_25615_25668[(1)] = (11));


break;
case "ak-data":
var statearr_25616_25669 = state_25581__$1;
(statearr_25616_25669[(1)] = (16));


break;
case "process-data":
var statearr_25617_25670 = state_25581__$1;
(statearr_25617_25670[(1)] = (18));


break;
case "relay-next":
var statearr_25618_25671 = state_25581__$1;
(statearr_25618_25671[(1)] = (22));


break;
case "pipe-out":
var statearr_25619_25672 = state_25581__$1;
(statearr_25619_25672[(1)] = (26));


break;
case "get-ak-from-next-seg":
var statearr_25620_25673 = state_25581__$1;
(statearr_25620_25673[(1)] = (28));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25612_25664__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (23))){
var inst_25499 = new cljs.core.Keyword(null,"get-ak-from-next-seg","get-ak-from-next-seg",998096295);
var inst_25500 = null;
var state_25581__$1 = (function (){var statearr_25621 = state_25581;
(statearr_25621[(8)] = inst_25499);

(statearr_25621[(9)] = inst_25500);

return statearr_25621;
})();
var statearr_25622_25674 = state_25581__$1;
(statearr_25622_25674[(2)] = null);

(statearr_25622_25674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (19))){
var inst_25539 = (state_25581[(7)]);
var inst_25499 = new cljs.core.Keyword(null,"relay-next","relay-next",649776130);
var inst_25500 = inst_25539;
var state_25581__$1 = (function (){var statearr_25623 = state_25581;
(statearr_25623[(8)] = inst_25499);

(statearr_25623[(9)] = inst_25500);

return statearr_25623;
})();
var statearr_25624_25675 = state_25581__$1;
(statearr_25624_25675[(2)] = null);

(statearr_25624_25675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (11))){
var inst_25523 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,seg);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(12),inst_25523);
} else {
if((state_val_25582 === (9))){
var inst_25499 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_25500 = null;
var state_25581__$1 = (function (){var statearr_25625 = state_25581;
(statearr_25625[(8)] = inst_25499);

(statearr_25625[(9)] = inst_25500);

return statearr_25625;
})();
var statearr_25626_25676 = state_25581__$1;
(statearr_25626_25676[(2)] = null);

(statearr_25626_25676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (5))){
var inst_25503 = cljs.core.deref.call(null,seg);
var inst_25504 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_25503);
var inst_25505 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"closing-seg!!!","closing-seg!!!",-1972709560),inst_25504);
var inst_25506 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,seg);
var inst_25507 = cljs.core.async.close_BANG_.call(null,inst_25506);
var inst_25508 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,seg);
var inst_25509 = cljs.core.async.close_BANG_.call(null,inst_25508);
var inst_25510 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,seg);
var inst_25511 = cljs.core.async.close_BANG_.call(null,inst_25510);
var state_25581__$1 = (function (){var statearr_25627 = state_25581;
(statearr_25627[(17)] = inst_25509);

(statearr_25627[(18)] = inst_25507);

(statearr_25627[(19)] = inst_25505);

return statearr_25627;
})();
var statearr_25628_25677 = state_25581__$1;
(statearr_25628_25677[(2)] = inst_25511);

(statearr_25628_25677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (14))){
var inst_25529 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-got-nil-data","seg-got-nil-data",262773951));
var state_25581__$1 = state_25581;
var statearr_25629_25678 = state_25581__$1;
(statearr_25629_25678[(2)] = inst_25529);

(statearr_25629_25678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (26))){
var inst_25500 = (state_25581[(9)]);
var inst_25558 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"piping-out!!!!","piping-out!!!!",809238368),inst_25500);
var inst_25559 = tiltontec.webmx.example.pipeline.pipeline.pseg_pipe_out_data.call(null,seg);
var state_25581__$1 = (function (){var statearr_25630 = state_25581;
(statearr_25630[(20)] = inst_25558);

return statearr_25630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25581__$1,(27),inst_25559,inst_25500);
} else {
if((state_val_25582 === (16))){
var inst_25533 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,seg);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25581__$1,(17),inst_25533,true);
} else {
if((state_val_25582 === (30))){
var inst_25499 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_25500 = null;
var state_25581__$1 = (function (){var statearr_25631 = state_25581;
(statearr_25631[(8)] = inst_25499);

(statearr_25631[(9)] = inst_25500);

return statearr_25631;
})();
var statearr_25632_25679 = state_25581__$1;
(statearr_25632_25679[(2)] = null);

(statearr_25632_25679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (10))){
var inst_25521 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25633_25680 = state_25581__$1;
(statearr_25633_25680[(2)] = inst_25521);

(statearr_25633_25680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (18))){
var inst_25500 = (state_25581[(9)]);
var inst_25498 = (state_25581[(12)]);
var inst_25538 = tiltontec.webmx.example.pipeline.pipeline.pseg_processor.call(null,seg);
var inst_25539 = inst_25538.call(null,inst_25500);
var state_25581__$1 = (function (){var statearr_25634 = state_25581;
(statearr_25634[(7)] = inst_25539);

return statearr_25634;
})();
if(cljs.core.truth_(inst_25498)){
var statearr_25635_25681 = state_25581__$1;
(statearr_25635_25681[(1)] = (19));

} else {
var statearr_25636_25682 = state_25581__$1;
(statearr_25636_25682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (8))){
var inst_25499 = new cljs.core.Keyword(null,"copy-data","copy-data",-320904302);
var inst_25500 = null;
var state_25581__$1 = (function (){var statearr_25637 = state_25581;
(statearr_25637[(8)] = inst_25499);

(statearr_25637[(9)] = inst_25500);

return statearr_25637;
})();
var statearr_25638_25683 = state_25581__$1;
(statearr_25638_25683[(2)] = null);

(statearr_25638_25683[(1)] = (2));


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
});})(c__20051__auto__))
;
return ((function (switch__20030__auto__,c__20051__auto__){
return (function() {
var tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__ = null;
var tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____0 = (function (){
var statearr_25639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25639[(0)] = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__);

(statearr_25639[(1)] = (1));

return statearr_25639;
});
var tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1 = (function (state_25581){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_25581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e25640){if((e25640 instanceof Object)){
var ex__20034__auto__ = e25640;
var statearr_25641_25684 = state_25581;
(statearr_25641_25684[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25685 = state_25581;
state_25581 = G__25685;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__ = function(state_25581){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1.call(this,state_25581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__;
})()
;})(switch__20030__auto__,c__20051__auto__))
})();
var state__20053__auto__ = (function (){var statearr_25642 = f__20052__auto__.call(null);
(statearr_25642[(6)] = c__20051__auto__);

return statearr_25642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(c__20051__auto__))
);

return c__20051__auto__;
});
tiltontec.webmx.example.pipeline.pipeline.pipe_start = (function tiltontec$webmx$example$pipeline$pipeline$pipe_start(pipe){
var segs = tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe);
var seq__25686_25763 = cljs.core.seq.call(null,segs);
var chunk__25687_25764 = null;
var count__25688_25765 = (0);
var i__25689_25766 = (0);
while(true){
if((i__25689_25766 < count__25688_25765)){
var seg_25767 = cljs.core._nth.call(null,chunk__25687_25764,i__25689_25766);
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_start.call(null,seg_25767);

var G__25768 = seq__25686_25763;
var G__25769 = chunk__25687_25764;
var G__25770 = count__25688_25765;
var G__25771 = (i__25689_25766 + (1));
seq__25686_25763 = G__25768;
chunk__25687_25764 = G__25769;
count__25688_25765 = G__25770;
i__25689_25766 = G__25771;
continue;
} else {
var temp__4657__auto___25772 = cljs.core.seq.call(null,seq__25686_25763);
if(temp__4657__auto___25772){
var seq__25686_25773__$1 = temp__4657__auto___25772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25686_25773__$1)){
var c__7592__auto___25774 = cljs.core.chunk_first.call(null,seq__25686_25773__$1);
var G__25775 = cljs.core.chunk_rest.call(null,seq__25686_25773__$1);
var G__25776 = c__7592__auto___25774;
var G__25777 = cljs.core.count.call(null,c__7592__auto___25774);
var G__25778 = (0);
seq__25686_25763 = G__25775;
chunk__25687_25764 = G__25776;
count__25688_25765 = G__25777;
i__25689_25766 = G__25778;
continue;
} else {
var seg_25779 = cljs.core.first.call(null,seq__25686_25773__$1);
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_start.call(null,seg_25779);

var G__25780 = cljs.core.next.call(null,seq__25686_25773__$1);
var G__25781 = null;
var G__25782 = (0);
var G__25783 = (0);
seq__25686_25763 = G__25780;
chunk__25687_25764 = G__25781;
count__25688_25765 = G__25782;
i__25689_25766 = G__25783;
continue;
}
} else {
}
}
break;
}

var ps0 = cljs.core.first.call(null,tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe));
var psn = cljs.core.last.call(null,tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe));
var c__20051__auto___25784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20051__auto___25784,ps0,psn,segs){
return (function (){
var f__20052__auto__ = (function (){var switch__20030__auto__ = ((function (c__20051__auto___25784,ps0,psn,segs){
return (function (state_25730){
var state_val_25731 = (state_25730[(1)]);
if((state_val_25731 === (7))){
var inst_25699 = (state_25730[(7)]);
var inst_25699__$1 = (state_25730[(2)]);
var inst_25700 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-got!","pipe-got!",-559173943),inst_25699__$1);
var inst_25701 = tiltontec.model.core.mset_BANG__GT_.call(null,pipe,new cljs.core.Keyword(null,"input","input",556931961),inst_25699__$1);
var state_25730__$1 = (function (){var statearr_25732 = state_25730;
(statearr_25732[(8)] = inst_25701);

(statearr_25732[(7)] = inst_25699__$1);

(statearr_25732[(9)] = inst_25700);

return statearr_25732;
})();
if(cljs.core.truth_(inst_25699__$1)){
var statearr_25733_25785 = state_25730__$1;
(statearr_25733_25785[(1)] = (8));

} else {
var statearr_25734_25786 = state_25730__$1;
(statearr_25734_25786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (1))){
var inst_25690 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_25691 = null;
var state_25730__$1 = (function (){var statearr_25735 = state_25730;
(statearr_25735[(10)] = inst_25691);

(statearr_25735[(11)] = inst_25690);

return statearr_25735;
})();
var statearr_25736_25787 = state_25730__$1;
(statearr_25736_25787[(2)] = null);

(statearr_25736_25787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (4))){
var inst_25726 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25737_25788 = state_25730__$1;
(statearr_25737_25788[(2)] = inst_25726);

(statearr_25737_25788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (15))){
var inst_25690 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_25691 = null;
var state_25730__$1 = (function (){var statearr_25738 = state_25730;
(statearr_25738[(10)] = inst_25691);

(statearr_25738[(11)] = inst_25690);

return statearr_25738;
})();
var statearr_25739_25789 = state_25730__$1;
(statearr_25739_25789[(2)] = null);

(statearr_25739_25789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (13))){
var inst_25717 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
if(cljs.core.truth_(inst_25717)){
var statearr_25740_25790 = state_25730__$1;
(statearr_25740_25790[(1)] = (14));

} else {
var statearr_25741_25791 = state_25730__$1;
(statearr_25741_25791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (6))){
var inst_25696 = cljs.core.deref.call(null,pipe);
var inst_25697 = new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(inst_25696);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(7),inst_25697);
} else {
if((state_val_25731 === (3))){
var inst_25728 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25730__$1,inst_25728);
} else {
if((state_val_25731 === (12))){
var inst_25715 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,ps0);
var state_25730__$1 = state_25730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25730__$1,(13),inst_25715);
} else {
if((state_val_25731 === (2))){
var inst_25690 = (state_25730[(11)]);
var inst_25693 = tiltontec.model.core.mset_BANG__GT_.call(null,pipe,new cljs.core.Keyword(null,"fst","fst",-1040014328),inst_25690);
var state_25730__$1 = (function (){var statearr_25743 = state_25730;
(statearr_25743[(12)] = inst_25693);

return statearr_25743;
})();
var G__25744_25792 = inst_25690;
var G__25744_25793__$1 = (((G__25744_25792 instanceof cljs.core.Keyword))?G__25744_25792.fqn:null);
switch (G__25744_25793__$1) {
case "exit":
var statearr_25745_25795 = state_25730__$1;
(statearr_25745_25795[(1)] = (5));


break;
case "init":
var statearr_25746_25796 = state_25730__$1;
(statearr_25746_25796[(1)] = (6));


break;
case "toggle-rq-first":
var statearr_25747_25797 = state_25730__$1;
(statearr_25747_25797[(1)] = (11));


break;
case "get-rq-ak":
var statearr_25748_25798 = state_25730__$1;
(statearr_25748_25798[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25744_25793__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (11))){
var inst_25691 = (state_25730[(10)]);
var inst_25708 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,ps0);
var inst_25709 = cljs.core.async.put_BANG_.call(null,inst_25708,true);
var inst_25710 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"putting-data-to-seg-0","putting-data-to-seg-0",1203125767),inst_25691);
var inst_25711 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,ps0);
var inst_25712 = cljs.core.async.put_BANG_.call(null,inst_25711,inst_25691);
var tmp25742 = inst_25691;
var inst_25690 = new cljs.core.Keyword(null,"get-rq-ak","get-rq-ak",-366033966);
var inst_25691__$1 = tmp25742;
var state_25730__$1 = (function (){var statearr_25749 = state_25730;
(statearr_25749[(10)] = inst_25691__$1);

(statearr_25749[(13)] = inst_25709);

(statearr_25749[(14)] = inst_25712);

(statearr_25749[(11)] = inst_25690);

(statearr_25749[(15)] = inst_25710);

return statearr_25749;
})();
var statearr_25750_25799 = state_25730__$1;
(statearr_25750_25799[(2)] = null);

(statearr_25750_25799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (9))){
var state_25730__$1 = state_25730;
var statearr_25751_25800 = state_25730__$1;
(statearr_25751_25800[(2)] = new cljs.core.Keyword(null,"exit","exit",351849638));

(statearr_25751_25800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (5))){
var inst_25694 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-exiting","pipe-exiting",-470897642));
var state_25730__$1 = state_25730;
var statearr_25752_25801 = state_25730__$1;
(statearr_25752_25801[(2)] = inst_25694);

(statearr_25752_25801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (14))){
var inst_25690 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_25691 = null;
var state_25730__$1 = (function (){var statearr_25753 = state_25730;
(statearr_25753[(10)] = inst_25691);

(statearr_25753[(11)] = inst_25690);

return statearr_25753;
})();
var statearr_25754_25802 = state_25730__$1;
(statearr_25754_25802[(2)] = null);

(statearr_25754_25802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (16))){
var inst_25723 = (state_25730[(2)]);
var state_25730__$1 = state_25730;
var statearr_25755_25803 = state_25730__$1;
(statearr_25755_25803[(2)] = inst_25723);

(statearr_25755_25803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (10))){
var inst_25699 = (state_25730[(7)]);
var inst_25705 = (state_25730[(2)]);
var inst_25690 = inst_25705;
var inst_25691 = inst_25699;
var state_25730__$1 = (function (){var statearr_25756 = state_25730;
(statearr_25756[(10)] = inst_25691);

(statearr_25756[(11)] = inst_25690);

return statearr_25756;
})();
var statearr_25757_25804 = state_25730__$1;
(statearr_25757_25804[(2)] = null);

(statearr_25757_25804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25731 === (8))){
var state_25730__$1 = state_25730;
var statearr_25758_25805 = state_25730__$1;
(statearr_25758_25805[(2)] = new cljs.core.Keyword(null,"toggle-rq-first","toggle-rq-first",1792862055));

(statearr_25758_25805[(1)] = (10));


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
});})(c__20051__auto___25784,ps0,psn,segs))
;
return ((function (switch__20030__auto__,c__20051__auto___25784,ps0,psn,segs){
return (function() {
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__ = null;
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0 = (function (){
var statearr_25759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25759[(0)] = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__);

(statearr_25759[(1)] = (1));

return statearr_25759;
});
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1 = (function (state_25730){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_25730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e25760){if((e25760 instanceof Object)){
var ex__20034__auto__ = e25760;
var statearr_25761_25806 = state_25730;
(statearr_25761_25806[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25807 = state_25730;
state_25730 = G__25807;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__ = function(state_25730){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1.call(this,state_25730);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__;
})()
;})(switch__20030__auto__,c__20051__auto___25784,ps0,psn,segs))
})();
var state__20053__auto__ = (function (){var statearr_25762 = f__20052__auto__.call(null);
(statearr_25762[(6)] = c__20051__auto___25784);

return statearr_25762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(c__20051__auto___25784,ps0,psn,segs))
);


return pipe;
});

//# sourceMappingURL=pipeline.js.map