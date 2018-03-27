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
var _STAR_par_STAR_20289 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7615__auto__ = (function (){var ida = cljs.core.atom.call(null,(-1));
return cljs.core.doall.call(null,(function (){var iter__7561__auto__ = ((function (ida,_STAR_par_STAR_20289,me,cell,slot_name,cache){
return (function tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20294(s__20295){
return (new cljs.core.LazySeq(null,((function (ida,_STAR_par_STAR_20289,me,cell,slot_name,cache){
return (function (){
var s__20295__$1 = s__20295;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20295__$1);
if(temp__4657__auto__){
var s__20295__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20295__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__20295__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__20297 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__20296 = (0);
while(true){
if((i__20296 < size__7560__auto__)){
var proc = cljs.core._nth.call(null,c__7559__auto__,i__20296);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
cljs.core.chunk_append.call(null,b__20297,tiltontec.webmx.example.pipeline.pipeline.make_pipe_seg.call(null,me,id,proc));

var G__20302 = (i__20296 + (1));
i__20296 = G__20302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20297),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20294.call(null,cljs.core.chunk_rest.call(null,s__20295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20297),null);
}
} else {
var proc = cljs.core.first.call(null,s__20295__$2);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
return cljs.core.cons.call(null,tiltontec.webmx.example.pipeline.pipeline.make_pipe_seg.call(null,me,id,proc),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20294.call(null,cljs.core.rest.call(null,s__20295__$2)));
}
} else {
return null;
}
break;
}
});})(ida,_STAR_par_STAR_20289,me,cell,slot_name,cache))
,null,null));
});})(ida,_STAR_par_STAR_20289,me,cell,slot_name,cache))
;
return iter__7561__auto__.call(null,processors);
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7615__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_20289;
}})),new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw","raw",-1049784497,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seg","seg",-369048591,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"kids","kids",1156670771))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pseg-id","pseg-id",-1404192605,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null)),new cljs.core.Symbol(null,"seg","seg",-369048591,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"raw","raw",-1049784497,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var raw = (function (){var iter__7561__auto__ = ((function (me,cell,slot_name,cache){
return (function tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20298(s__20299){
return (new cljs.core.LazySeq(null,((function (me,cell,slot_name,cache){
return (function (){
var s__20299__$1 = s__20299;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__20299__$1);
if(temp__4657__auto__){
var s__20299__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20299__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__20299__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__20301 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__20300 = (0);
while(true){
if((i__20300 < size__7560__auto__)){
var seg = cljs.core._nth.call(null,c__7559__auto__,i__20300);
cljs.core.chunk_append.call(null,b__20301,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.example.pipeline.pipeline.pseg_id.call(null,seg),seg], null));

var G__20303 = (i__20300 + (1));
i__20300 = G__20303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20301),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20298.call(null,cljs.core.chunk_rest.call(null,s__20299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20301),null);
}
} else {
var seg = cljs.core.first.call(null,s__20299__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.example.pipeline.pipeline.pseg_id.call(null,seg),seg], null),tiltontec$webmx$example$pipeline$pipeline$make_pipeline_$_iter__20298.call(null,cljs.core.rest.call(null,s__20299__$2)));
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
return (function (state_20387){
var state_val_20388 = (state_20387[(1)]);
if((state_val_20388 === (7))){
var inst_20321 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
if(cljs.core.truth_(inst_20321)){
var statearr_20389_20449 = state_20387__$1;
(statearr_20389_20449[(1)] = (8));

} else {
var statearr_20390_20450 = state_20387__$1;
(statearr_20390_20450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (20))){
var inst_20345 = (state_20387[(7)]);
var inst_20305 = new cljs.core.Keyword(null,"pipe-out","pipe-out",-2110280080);
var inst_20306 = inst_20345;
var state_20387__$1 = (function (){var statearr_20391 = state_20387;
(statearr_20391[(8)] = inst_20305);

(statearr_20391[(9)] = inst_20306);

return statearr_20391;
})();
var statearr_20392_20451 = state_20387__$1;
(statearr_20392_20451[(2)] = null);

(statearr_20392_20451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (27))){
var inst_20306 = (state_20387[(9)]);
var inst_20367 = (state_20387[(2)]);
var inst_20368 = tiltontec.webmx.example.pipeline.pipeline.pseg_pipe.call(null,seg);
var inst_20369 = tiltontec.model.core.mset_BANG__GT_.call(null,inst_20368,new cljs.core.Keyword(null,"poutput","poutput",-1235468379),inst_20306);
var inst_20305 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_20306__$1 = null;
var state_20387__$1 = (function (){var statearr_20393 = state_20387;
(statearr_20393[(8)] = inst_20305);

(statearr_20393[(10)] = inst_20367);

(statearr_20393[(11)] = inst_20369);

(statearr_20393[(9)] = inst_20306__$1);

return statearr_20393;
})();
var statearr_20394_20452 = state_20387__$1;
(statearr_20394_20452[(2)] = null);

(statearr_20394_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (1))){
var inst_20304 = tiltontec.webmx.example.pipeline.pipeline.pseg_next_seg.call(null,seg);
var inst_20305 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_20306 = null;
var state_20387__$1 = (function (){var statearr_20395 = state_20387;
(statearr_20395[(8)] = inst_20305);

(statearr_20395[(9)] = inst_20306);

(statearr_20395[(12)] = inst_20304);

return statearr_20395;
})();
var statearr_20396_20453 = state_20387__$1;
(statearr_20396_20453[(2)] = null);

(statearr_20396_20453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (24))){
var inst_20360 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-putting-data-next","nil-putting-data-next",-328510321));
var state_20387__$1 = state_20387;
var statearr_20397_20454 = state_20387__$1;
(statearr_20397_20454[(2)] = inst_20360);

(statearr_20397_20454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (4))){
var inst_20383 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20398_20455 = state_20387__$1;
(statearr_20398_20455[(2)] = inst_20383);

(statearr_20398_20455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (15))){
var inst_20337 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20399_20456 = state_20387__$1;
(statearr_20399_20456[(2)] = inst_20337);

(statearr_20399_20456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (21))){
var inst_20351 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20400_20457 = state_20387__$1;
(statearr_20400_20457[(2)] = inst_20351);

(statearr_20400_20457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (31))){
var inst_20378 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-off-get-next-ak","nil-off-get-next-ak",1742172853));
var state_20387__$1 = state_20387;
var statearr_20401_20458 = state_20387__$1;
(statearr_20401_20458[(2)] = inst_20378);

(statearr_20401_20458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (32))){
var inst_20380 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20402_20459 = state_20387__$1;
(statearr_20402_20459[(2)] = inst_20380);

(statearr_20402_20459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (13))){
var inst_20331 = (state_20387[(13)]);
var inst_20305 = new cljs.core.Keyword(null,"ak-data","ak-data",1405039544);
var inst_20306 = inst_20331;
var state_20387__$1 = (function (){var statearr_20403 = state_20387;
(statearr_20403[(8)] = inst_20305);

(statearr_20403[(9)] = inst_20306);

return statearr_20403;
})();
var statearr_20404_20460 = state_20387__$1;
(statearr_20404_20460[(2)] = null);

(statearr_20404_20460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (22))){
var inst_20306 = (state_20387[(9)]);
var inst_20304 = (state_20387[(12)]);
var inst_20353 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,inst_20304);
var inst_20354 = cljs.core.async.put_BANG_.call(null,inst_20353,true);
var inst_20355 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,inst_20304);
var inst_20356 = cljs.core.async.put_BANG_.call(null,inst_20355,inst_20306);
var state_20387__$1 = (function (){var statearr_20405 = state_20387;
(statearr_20405[(14)] = inst_20354);

return statearr_20405;
})();
if(cljs.core.truth_(inst_20356)){
var statearr_20406_20461 = state_20387__$1;
(statearr_20406_20461[(1)] = (23));

} else {
var statearr_20407_20462 = state_20387__$1;
(statearr_20407_20462[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (29))){
var inst_20374 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
if(cljs.core.truth_(inst_20374)){
var statearr_20408_20463 = state_20387__$1;
(statearr_20408_20463[(1)] = (30));

} else {
var statearr_20409_20464 = state_20387__$1;
(statearr_20409_20464[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (6))){
var inst_20319 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,seg);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20387__$1,(7),inst_20319);
} else {
if((state_val_20388 === (28))){
var inst_20304 = (state_20387[(12)]);
var inst_20372 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,inst_20304);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20387__$1,(29),inst_20372);
} else {
if((state_val_20388 === (25))){
var inst_20362 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20411_20465 = state_20387__$1;
(statearr_20411_20465[(2)] = inst_20362);

(statearr_20411_20465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (17))){
var inst_20306 = (state_20387[(9)]);
var inst_20341 = (state_20387[(2)]);
var tmp20410 = inst_20306;
var inst_20305 = new cljs.core.Keyword(null,"process-data","process-data",1368271805);
var inst_20306__$1 = tmp20410;
var state_20387__$1 = (function (){var statearr_20412 = state_20387;
(statearr_20412[(8)] = inst_20305);

(statearr_20412[(9)] = inst_20306__$1);

(statearr_20412[(15)] = inst_20341);

return statearr_20412;
})();
var statearr_20413_20466 = state_20387__$1;
(statearr_20413_20466[(2)] = null);

(statearr_20413_20466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (3))){
var inst_20385 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20387__$1,inst_20385);
} else {
if((state_val_20388 === (12))){
var inst_20331 = (state_20387[(13)]);
var inst_20331__$1 = (state_20387[(2)]);
var state_20387__$1 = (function (){var statearr_20414 = state_20387;
(statearr_20414[(13)] = inst_20331__$1);

return statearr_20414;
})();
if(cljs.core.truth_(inst_20331__$1)){
var statearr_20415_20467 = state_20387__$1;
(statearr_20415_20467[(1)] = (13));

} else {
var statearr_20416_20468 = state_20387__$1;
(statearr_20416_20468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (2))){
var inst_20305 = (state_20387[(8)]);
var inst_20308 = tiltontec.model.core.mset_BANG__GT_.call(null,seg,new cljs.core.Keyword(null,"fst","fst",-1040014328),inst_20305);
var state_20387__$1 = (function (){var statearr_20417 = state_20387;
(statearr_20417[(16)] = inst_20308);

return statearr_20417;
})();
var G__20418_20469 = inst_20305;
var G__20418_20470__$1 = (((G__20418_20469 instanceof cljs.core.Keyword))?G__20418_20469.fqn:null);
switch (G__20418_20470__$1) {
case "exit":
var statearr_20419_20472 = state_20387__$1;
(statearr_20419_20472[(1)] = (5));


break;
case "init":
var statearr_20420_20473 = state_20387__$1;
(statearr_20420_20473[(1)] = (6));


break;
case "copy-data":
var statearr_20421_20474 = state_20387__$1;
(statearr_20421_20474[(1)] = (11));


break;
case "ak-data":
var statearr_20422_20475 = state_20387__$1;
(statearr_20422_20475[(1)] = (16));


break;
case "process-data":
var statearr_20423_20476 = state_20387__$1;
(statearr_20423_20476[(1)] = (18));


break;
case "relay-next":
var statearr_20424_20477 = state_20387__$1;
(statearr_20424_20477[(1)] = (22));


break;
case "pipe-out":
var statearr_20425_20478 = state_20387__$1;
(statearr_20425_20478[(1)] = (26));


break;
case "get-ak-from-next-seg":
var statearr_20426_20479 = state_20387__$1;
(statearr_20426_20479[(1)] = (28));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20418_20470__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (23))){
var inst_20305 = new cljs.core.Keyword(null,"get-ak-from-next-seg","get-ak-from-next-seg",998096295);
var inst_20306 = null;
var state_20387__$1 = (function (){var statearr_20427 = state_20387;
(statearr_20427[(8)] = inst_20305);

(statearr_20427[(9)] = inst_20306);

return statearr_20427;
})();
var statearr_20428_20480 = state_20387__$1;
(statearr_20428_20480[(2)] = null);

(statearr_20428_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (19))){
var inst_20345 = (state_20387[(7)]);
var inst_20305 = new cljs.core.Keyword(null,"relay-next","relay-next",649776130);
var inst_20306 = inst_20345;
var state_20387__$1 = (function (){var statearr_20429 = state_20387;
(statearr_20429[(8)] = inst_20305);

(statearr_20429[(9)] = inst_20306);

return statearr_20429;
})();
var statearr_20430_20481 = state_20387__$1;
(statearr_20430_20481[(2)] = null);

(statearr_20430_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (11))){
var inst_20329 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,seg);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20387__$1,(12),inst_20329);
} else {
if((state_val_20388 === (9))){
var inst_20305 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_20306 = null;
var state_20387__$1 = (function (){var statearr_20431 = state_20387;
(statearr_20431[(8)] = inst_20305);

(statearr_20431[(9)] = inst_20306);

return statearr_20431;
})();
var statearr_20432_20482 = state_20387__$1;
(statearr_20432_20482[(2)] = null);

(statearr_20432_20482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (5))){
var inst_20309 = cljs.core.deref.call(null,seg);
var inst_20310 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_20309);
var inst_20311 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"closing-seg!!!","closing-seg!!!",-1972709560),inst_20310);
var inst_20312 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,seg);
var inst_20313 = cljs.core.async.close_BANG_.call(null,inst_20312);
var inst_20314 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,seg);
var inst_20315 = cljs.core.async.close_BANG_.call(null,inst_20314);
var inst_20316 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,seg);
var inst_20317 = cljs.core.async.close_BANG_.call(null,inst_20316);
var state_20387__$1 = (function (){var statearr_20433 = state_20387;
(statearr_20433[(17)] = inst_20311);

(statearr_20433[(18)] = inst_20313);

(statearr_20433[(19)] = inst_20315);

return statearr_20433;
})();
var statearr_20434_20483 = state_20387__$1;
(statearr_20434_20483[(2)] = inst_20317);

(statearr_20434_20483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (14))){
var inst_20335 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-got-nil-data","seg-got-nil-data",262773951));
var state_20387__$1 = state_20387;
var statearr_20435_20484 = state_20387__$1;
(statearr_20435_20484[(2)] = inst_20335);

(statearr_20435_20484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (26))){
var inst_20306 = (state_20387[(9)]);
var inst_20364 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"piping-out!!!!","piping-out!!!!",809238368),inst_20306);
var inst_20365 = tiltontec.webmx.example.pipeline.pipeline.pseg_pipe_out_data.call(null,seg);
var state_20387__$1 = (function (){var statearr_20436 = state_20387;
(statearr_20436[(20)] = inst_20364);

return statearr_20436;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20387__$1,(27),inst_20365,inst_20306);
} else {
if((state_val_20388 === (16))){
var inst_20339 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,seg);
var state_20387__$1 = state_20387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20387__$1,(17),inst_20339,true);
} else {
if((state_val_20388 === (30))){
var inst_20305 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_20306 = null;
var state_20387__$1 = (function (){var statearr_20437 = state_20387;
(statearr_20437[(8)] = inst_20305);

(statearr_20437[(9)] = inst_20306);

return statearr_20437;
})();
var statearr_20438_20485 = state_20387__$1;
(statearr_20438_20485[(2)] = null);

(statearr_20438_20485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (10))){
var inst_20327 = (state_20387[(2)]);
var state_20387__$1 = state_20387;
var statearr_20439_20486 = state_20387__$1;
(statearr_20439_20486[(2)] = inst_20327);

(statearr_20439_20486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (18))){
var inst_20306 = (state_20387[(9)]);
var inst_20304 = (state_20387[(12)]);
var inst_20344 = tiltontec.webmx.example.pipeline.pipeline.pseg_processor.call(null,seg);
var inst_20345 = inst_20344.call(null,inst_20306);
var state_20387__$1 = (function (){var statearr_20440 = state_20387;
(statearr_20440[(7)] = inst_20345);

return statearr_20440;
})();
if(cljs.core.truth_(inst_20304)){
var statearr_20441_20487 = state_20387__$1;
(statearr_20441_20487[(1)] = (19));

} else {
var statearr_20442_20488 = state_20387__$1;
(statearr_20442_20488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20388 === (8))){
var inst_20305 = new cljs.core.Keyword(null,"copy-data","copy-data",-320904302);
var inst_20306 = null;
var state_20387__$1 = (function (){var statearr_20443 = state_20387;
(statearr_20443[(8)] = inst_20305);

(statearr_20443[(9)] = inst_20306);

return statearr_20443;
})();
var statearr_20444_20489 = state_20387__$1;
(statearr_20444_20489[(2)] = null);

(statearr_20444_20489[(1)] = (2));


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
var statearr_20445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20445[(0)] = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__);

(statearr_20445[(1)] = (1));

return statearr_20445;
});
var tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1 = (function (state_20387){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_20387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e20446){if((e20446 instanceof Object)){
var ex__20034__auto__ = e20446;
var statearr_20447_20490 = state_20387;
(statearr_20447_20490[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20491 = state_20387;
state_20387 = G__20491;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__ = function(state_20387){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1.call(this,state_20387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$pipeline$pipe_seg_start_$_state_machine__20031__auto__;
})()
;})(switch__20030__auto__,c__20051__auto__))
})();
var state__20053__auto__ = (function (){var statearr_20448 = f__20052__auto__.call(null);
(statearr_20448[(6)] = c__20051__auto__);

return statearr_20448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(c__20051__auto__))
);

return c__20051__auto__;
});
tiltontec.webmx.example.pipeline.pipeline.pipe_start = (function tiltontec$webmx$example$pipeline$pipeline$pipe_start(pipe){
var segs = tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe);
var seq__20492_20569 = cljs.core.seq.call(null,segs);
var chunk__20493_20570 = null;
var count__20494_20571 = (0);
var i__20495_20572 = (0);
while(true){
if((i__20495_20572 < count__20494_20571)){
var seg_20573 = cljs.core._nth.call(null,chunk__20493_20570,i__20495_20572);
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_start.call(null,seg_20573);

var G__20574 = seq__20492_20569;
var G__20575 = chunk__20493_20570;
var G__20576 = count__20494_20571;
var G__20577 = (i__20495_20572 + (1));
seq__20492_20569 = G__20574;
chunk__20493_20570 = G__20575;
count__20494_20571 = G__20576;
i__20495_20572 = G__20577;
continue;
} else {
var temp__4657__auto___20578 = cljs.core.seq.call(null,seq__20492_20569);
if(temp__4657__auto___20578){
var seq__20492_20579__$1 = temp__4657__auto___20578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20492_20579__$1)){
var c__7592__auto___20580 = cljs.core.chunk_first.call(null,seq__20492_20579__$1);
var G__20581 = cljs.core.chunk_rest.call(null,seq__20492_20579__$1);
var G__20582 = c__7592__auto___20580;
var G__20583 = cljs.core.count.call(null,c__7592__auto___20580);
var G__20584 = (0);
seq__20492_20569 = G__20581;
chunk__20493_20570 = G__20582;
count__20494_20571 = G__20583;
i__20495_20572 = G__20584;
continue;
} else {
var seg_20585 = cljs.core.first.call(null,seq__20492_20579__$1);
tiltontec.webmx.example.pipeline.pipeline.pipe_seg_start.call(null,seg_20585);

var G__20586 = cljs.core.next.call(null,seq__20492_20579__$1);
var G__20587 = null;
var G__20588 = (0);
var G__20589 = (0);
seq__20492_20569 = G__20586;
chunk__20493_20570 = G__20587;
count__20494_20571 = G__20588;
i__20495_20572 = G__20589;
continue;
}
} else {
}
}
break;
}

var ps0 = cljs.core.first.call(null,tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe));
var psn = cljs.core.last.call(null,tiltontec.webmx.example.pipeline.pipeline.pipe_segs.call(null,pipe));
var c__20051__auto___20590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20051__auto___20590,ps0,psn,segs){
return (function (){
var f__20052__auto__ = (function (){var switch__20030__auto__ = ((function (c__20051__auto___20590,ps0,psn,segs){
return (function (state_20536){
var state_val_20537 = (state_20536[(1)]);
if((state_val_20537 === (7))){
var inst_20505 = (state_20536[(7)]);
var inst_20505__$1 = (state_20536[(2)]);
var inst_20506 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-got!","pipe-got!",-559173943),inst_20505__$1);
var inst_20507 = tiltontec.model.core.mset_BANG__GT_.call(null,pipe,new cljs.core.Keyword(null,"input","input",556931961),inst_20505__$1);
var state_20536__$1 = (function (){var statearr_20538 = state_20536;
(statearr_20538[(8)] = inst_20506);

(statearr_20538[(7)] = inst_20505__$1);

(statearr_20538[(9)] = inst_20507);

return statearr_20538;
})();
if(cljs.core.truth_(inst_20505__$1)){
var statearr_20539_20591 = state_20536__$1;
(statearr_20539_20591[(1)] = (8));

} else {
var statearr_20540_20592 = state_20536__$1;
(statearr_20540_20592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (1))){
var inst_20496 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_20497 = null;
var state_20536__$1 = (function (){var statearr_20541 = state_20536;
(statearr_20541[(10)] = inst_20497);

(statearr_20541[(11)] = inst_20496);

return statearr_20541;
})();
var statearr_20542_20593 = state_20536__$1;
(statearr_20542_20593[(2)] = null);

(statearr_20542_20593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (4))){
var inst_20532 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
var statearr_20543_20594 = state_20536__$1;
(statearr_20543_20594[(2)] = inst_20532);

(statearr_20543_20594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (15))){
var inst_20496 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_20497 = null;
var state_20536__$1 = (function (){var statearr_20544 = state_20536;
(statearr_20544[(10)] = inst_20497);

(statearr_20544[(11)] = inst_20496);

return statearr_20544;
})();
var statearr_20545_20595 = state_20536__$1;
(statearr_20545_20595[(2)] = null);

(statearr_20545_20595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (13))){
var inst_20523 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
if(cljs.core.truth_(inst_20523)){
var statearr_20546_20596 = state_20536__$1;
(statearr_20546_20596[(1)] = (14));

} else {
var statearr_20547_20597 = state_20536__$1;
(statearr_20547_20597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (6))){
var inst_20502 = cljs.core.deref.call(null,pipe);
var inst_20503 = new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(inst_20502);
var state_20536__$1 = state_20536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20536__$1,(7),inst_20503);
} else {
if((state_val_20537 === (3))){
var inst_20534 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20536__$1,inst_20534);
} else {
if((state_val_20537 === (12))){
var inst_20521 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_ak.call(null,ps0);
var state_20536__$1 = state_20536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20536__$1,(13),inst_20521);
} else {
if((state_val_20537 === (2))){
var inst_20496 = (state_20536[(11)]);
var inst_20499 = tiltontec.model.core.mset_BANG__GT_.call(null,pipe,new cljs.core.Keyword(null,"fst","fst",-1040014328),inst_20496);
var state_20536__$1 = (function (){var statearr_20549 = state_20536;
(statearr_20549[(12)] = inst_20499);

return statearr_20549;
})();
var G__20550_20598 = inst_20496;
var G__20550_20599__$1 = (((G__20550_20598 instanceof cljs.core.Keyword))?G__20550_20598.fqn:null);
switch (G__20550_20599__$1) {
case "exit":
var statearr_20551_20601 = state_20536__$1;
(statearr_20551_20601[(1)] = (5));


break;
case "init":
var statearr_20552_20602 = state_20536__$1;
(statearr_20552_20602[(1)] = (6));


break;
case "toggle-rq-first":
var statearr_20553_20603 = state_20536__$1;
(statearr_20553_20603[(1)] = (11));


break;
case "get-rq-ak":
var statearr_20554_20604 = state_20536__$1;
(statearr_20554_20604[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20550_20599__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (11))){
var inst_20497 = (state_20536[(10)]);
var inst_20514 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_rq.call(null,ps0);
var inst_20515 = cljs.core.async.put_BANG_.call(null,inst_20514,true);
var inst_20516 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"putting-data-to-seg-0","putting-data-to-seg-0",1203125767),inst_20497);
var inst_20517 = tiltontec.webmx.example.pipeline.pipeline.pseg_in_data.call(null,ps0);
var inst_20518 = cljs.core.async.put_BANG_.call(null,inst_20517,inst_20497);
var tmp20548 = inst_20497;
var inst_20496 = new cljs.core.Keyword(null,"get-rq-ak","get-rq-ak",-366033966);
var inst_20497__$1 = tmp20548;
var state_20536__$1 = (function (){var statearr_20555 = state_20536;
(statearr_20555[(10)] = inst_20497__$1);

(statearr_20555[(11)] = inst_20496);

(statearr_20555[(13)] = inst_20518);

(statearr_20555[(14)] = inst_20515);

(statearr_20555[(15)] = inst_20516);

return statearr_20555;
})();
var statearr_20556_20605 = state_20536__$1;
(statearr_20556_20605[(2)] = null);

(statearr_20556_20605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (9))){
var state_20536__$1 = state_20536;
var statearr_20557_20606 = state_20536__$1;
(statearr_20557_20606[(2)] = new cljs.core.Keyword(null,"exit","exit",351849638));

(statearr_20557_20606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (5))){
var inst_20500 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-exiting","pipe-exiting",-470897642));
var state_20536__$1 = state_20536;
var statearr_20558_20607 = state_20536__$1;
(statearr_20558_20607[(2)] = inst_20500);

(statearr_20558_20607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (14))){
var inst_20496 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_20497 = null;
var state_20536__$1 = (function (){var statearr_20559 = state_20536;
(statearr_20559[(10)] = inst_20497);

(statearr_20559[(11)] = inst_20496);

return statearr_20559;
})();
var statearr_20560_20608 = state_20536__$1;
(statearr_20560_20608[(2)] = null);

(statearr_20560_20608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (16))){
var inst_20529 = (state_20536[(2)]);
var state_20536__$1 = state_20536;
var statearr_20561_20609 = state_20536__$1;
(statearr_20561_20609[(2)] = inst_20529);

(statearr_20561_20609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (10))){
var inst_20505 = (state_20536[(7)]);
var inst_20511 = (state_20536[(2)]);
var inst_20496 = inst_20511;
var inst_20497 = inst_20505;
var state_20536__$1 = (function (){var statearr_20562 = state_20536;
(statearr_20562[(10)] = inst_20497);

(statearr_20562[(11)] = inst_20496);

return statearr_20562;
})();
var statearr_20563_20610 = state_20536__$1;
(statearr_20563_20610[(2)] = null);

(statearr_20563_20610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20537 === (8))){
var state_20536__$1 = state_20536;
var statearr_20564_20611 = state_20536__$1;
(statearr_20564_20611[(2)] = new cljs.core.Keyword(null,"toggle-rq-first","toggle-rq-first",1792862055));

(statearr_20564_20611[(1)] = (10));


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
});})(c__20051__auto___20590,ps0,psn,segs))
;
return ((function (switch__20030__auto__,c__20051__auto___20590,ps0,psn,segs){
return (function() {
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__ = null;
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0 = (function (){
var statearr_20565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20565[(0)] = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__);

(statearr_20565[(1)] = (1));

return statearr_20565;
});
var tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1 = (function (state_20536){
while(true){
var ret_value__20032__auto__ = (function (){try{while(true){
var result__20033__auto__ = switch__20030__auto__.call(null,state_20536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20033__auto__;
}
break;
}
}catch (e20566){if((e20566 instanceof Object)){
var ex__20034__auto__ = e20566;
var statearr_20567_20612 = state_20536;
(statearr_20567_20612[(5)] = ex__20034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20613 = state_20536;
state_20536 = G__20613;
continue;
} else {
return ret_value__20032__auto__;
}
break;
}
});
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__ = function(state_20536){
switch(arguments.length){
case 0:
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0.call(this);
case 1:
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1.call(this,state_20536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____0;
tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto____1;
return tiltontec$webmx$example$pipeline$pipeline$pipe_start_$_state_machine__20031__auto__;
})()
;})(switch__20030__auto__,c__20051__auto___20590,ps0,psn,segs))
})();
var state__20053__auto__ = (function (){var statearr_20568 = f__20052__auto__.call(null);
(statearr_20568[(6)] = c__20051__auto___20590);

return statearr_20568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20053__auto__);
});})(c__20051__auto___20590,ps0,psn,segs))
);


return pipe;
});

//# sourceMappingURL=pipeline.js.map