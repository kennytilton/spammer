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
var _STAR_par_STAR_23184 = tiltontec.model.core._STAR_par_STAR_;
tiltontec.model.core._STAR_par_STAR_ = me;

try{if(cljs.core.truth_(tiltontec.model.core._STAR_par_STAR_)){
} else {
throw (new Error("Assert failed: tiltontec.model.core/*par*"));
}

return cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,(function (){var x__7617__auto__ = (function (){var ida = cljs.core.atom.call(null,(-1));
return cljs.core.doall.call(null,(function (){var iter__7563__auto__ = ((function (ida,_STAR_par_STAR_23184,me,cell,slot_name,cache){
return (function example$pipeline$make_pipeline_$_iter__23189(s__23190){
return (new cljs.core.LazySeq(null,((function (ida,_STAR_par_STAR_23184,me,cell,slot_name,cache){
return (function (){
var s__23190__$1 = s__23190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23190__$1);
if(temp__4657__auto__){
var s__23190__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23190__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__23190__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__23192 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__23191 = (0);
while(true){
if((i__23191 < size__7562__auto__)){
var proc = cljs.core._nth.call(null,c__7561__auto__,i__23191);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
cljs.core.chunk_append.call(null,b__23192,example.pipeline.make_pipe_seg.call(null,me,id,proc));

var G__23197 = (i__23191 + (1));
i__23191 = G__23197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23192),example$pipeline$make_pipeline_$_iter__23189.call(null,cljs.core.chunk_rest.call(null,s__23190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23192),null);
}
} else {
var proc = cljs.core.first.call(null,s__23190__$2);
var id = cljs.core.swap_BANG_.call(null,ida,cljs.core.inc);
return cljs.core.cons.call(null,example.pipeline.make_pipe_seg.call(null,me,id,proc),example$pipeline$make_pipeline_$_iter__23189.call(null,cljs.core.rest.call(null,s__23190__$2)));
}
} else {
return null;
}
break;
}
});})(ida,_STAR_par_STAR_23184,me,cell,slot_name,cache))
,null,null));
});})(ida,_STAR_par_STAR_23184,me,cell,slot_name,cache))
;
return iter__7563__auto__.call(null,processors);
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
}finally {tiltontec.model.core._STAR_par_STAR_ = _STAR_par_STAR_23184;
}})),new cljs.core.Keyword(null,"seg-id-map","seg-id-map",817226845),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw","raw",-1049784497,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seg","seg",-369048591,null),cljs.core.list(new cljs.core.Symbol(null,"<mget","<mget",-285244545,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"kids","kids",1156670771))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pseg-id","pseg-id",-1404192605,null),new cljs.core.Symbol(null,"seg","seg",-369048591,null)),new cljs.core.Symbol(null,"seg","seg",-369048591,null)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"raw","raw",-1049784497,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var raw = (function (){var iter__7563__auto__ = ((function (me,cell,slot_name,cache){
return (function example$pipeline$make_pipeline_$_iter__23193(s__23194){
return (new cljs.core.LazySeq(null,((function (me,cell,slot_name,cache){
return (function (){
var s__23194__$1 = s__23194;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23194__$1);
if(temp__4657__auto__){
var s__23194__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23194__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__23194__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__23196 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__23195 = (0);
while(true){
if((i__23195 < size__7562__auto__)){
var seg = cljs.core._nth.call(null,c__7561__auto__,i__23195);
cljs.core.chunk_append.call(null,b__23196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.pipeline.pseg_id.call(null,seg),seg], null));

var G__23198 = (i__23195 + (1));
i__23195 = G__23198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23196),example$pipeline$make_pipeline_$_iter__23193.call(null,cljs.core.chunk_rest.call(null,s__23194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23196),null);
}
} else {
var seg = cljs.core.first.call(null,s__23194__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.pipeline.pseg_id.call(null,seg),seg], null),example$pipeline$make_pipeline_$_iter__23193.call(null,cljs.core.rest.call(null,s__23194__$2)));
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
return iter__7563__auto__.call(null,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771)));
})();
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,raw);
})));
});
example.pipeline.make_pipe_seg = (function example$pipeline$make_pipe_seg(pipe,id,processor){
return tiltontec.model.core.make.call(null,new cljs.core.Keyword("example.pipeline","pipeseg","example.pipeline/pipeseg",1151361007),new cljs.core.Keyword(null,"par","par",-61778778),pipe,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"processor","processor",-16217796),processor,new cljs.core.Keyword(null,"in-rq","in-rq",-1457632673),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-data","in-data",89576440),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"in-ak","in-ak",-526980283),cljs.core.async.chan.call(null));
});
example.pipeline.pipe_seg_start = (function example$pipeline$pipe_seg_start(seg){
var c__22762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22762__auto__){
return (function (){
var f__22763__auto__ = (function (){var switch__22741__auto__ = ((function (c__22762__auto__){
return (function (state_23279){
var state_val_23280 = (state_23279[(1)]);
if((state_val_23280 === (7))){
var inst_23215 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23215)){
var statearr_23281_23339 = state_23279__$1;
(statearr_23281_23339[(1)] = (8));

} else {
var statearr_23282_23340 = state_23279__$1;
(statearr_23282_23340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (20))){
var inst_23240 = (state_23279[(7)]);
var inst_23200 = new cljs.core.Keyword(null,"pipe-out","pipe-out",-2110280080);
var inst_23201 = inst_23240;
var state_23279__$1 = (function (){var statearr_23283 = state_23279;
(statearr_23283[(8)] = inst_23200);

(statearr_23283[(9)] = inst_23201);

return statearr_23283;
})();
var statearr_23284_23341 = state_23279__$1;
(statearr_23284_23341[(2)] = null);

(statearr_23284_23341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (27))){
var inst_23261 = (state_23279[(2)]);
var inst_23200 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23285 = state_23279;
(statearr_23285[(8)] = inst_23200);

(statearr_23285[(9)] = inst_23201);

(statearr_23285[(10)] = inst_23261);

return statearr_23285;
})();
var statearr_23286_23342 = state_23279__$1;
(statearr_23286_23342[(2)] = null);

(statearr_23286_23342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (1))){
var inst_23199 = example.pipeline.pseg_next_seg.call(null,seg);
var inst_23200 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23287 = state_23279;
(statearr_23287[(8)] = inst_23200);

(statearr_23287[(11)] = inst_23199);

(statearr_23287[(9)] = inst_23201);

return statearr_23287;
})();
var statearr_23288_23343 = state_23279__$1;
(statearr_23288_23343[(2)] = null);

(statearr_23288_23343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (24))){
var inst_23255 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-putting-data-next","nil-putting-data-next",-328510321));
var state_23279__$1 = state_23279;
var statearr_23289_23344 = state_23279__$1;
(statearr_23289_23344[(2)] = inst_23255);

(statearr_23289_23344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (4))){
var inst_23275 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23290_23345 = state_23279__$1;
(statearr_23290_23345[(2)] = inst_23275);

(statearr_23290_23345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (15))){
var inst_23232 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23291_23346 = state_23279__$1;
(statearr_23291_23346[(2)] = inst_23232);

(statearr_23291_23346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (21))){
var inst_23246 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23292_23347 = state_23279__$1;
(statearr_23292_23347[(2)] = inst_23246);

(statearr_23292_23347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (31))){
var inst_23270 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"nil-off-get-next-ak","nil-off-get-next-ak",1742172853));
var state_23279__$1 = state_23279;
var statearr_23293_23348 = state_23279__$1;
(statearr_23293_23348[(2)] = inst_23270);

(statearr_23293_23348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (32))){
var inst_23272 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23294_23349 = state_23279__$1;
(statearr_23294_23349[(2)] = inst_23272);

(statearr_23294_23349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (13))){
var inst_23226 = (state_23279[(12)]);
var inst_23200 = new cljs.core.Keyword(null,"ak-data","ak-data",1405039544);
var inst_23201 = inst_23226;
var state_23279__$1 = (function (){var statearr_23295 = state_23279;
(statearr_23295[(8)] = inst_23200);

(statearr_23295[(9)] = inst_23201);

return statearr_23295;
})();
var statearr_23296_23350 = state_23279__$1;
(statearr_23296_23350[(2)] = null);

(statearr_23296_23350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (22))){
var inst_23199 = (state_23279[(11)]);
var inst_23201 = (state_23279[(9)]);
var inst_23248 = example.pipeline.pseg_in_rq.call(null,inst_23199);
var inst_23249 = cljs.core.async.put_BANG_.call(null,inst_23248,true);
var inst_23250 = example.pipeline.pseg_in_data.call(null,inst_23199);
var inst_23251 = cljs.core.async.put_BANG_.call(null,inst_23250,inst_23201);
var state_23279__$1 = (function (){var statearr_23297 = state_23279;
(statearr_23297[(13)] = inst_23249);

return statearr_23297;
})();
if(cljs.core.truth_(inst_23251)){
var statearr_23298_23351 = state_23279__$1;
(statearr_23298_23351[(1)] = (23));

} else {
var statearr_23299_23352 = state_23279__$1;
(statearr_23299_23352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (29))){
var inst_23266 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
if(cljs.core.truth_(inst_23266)){
var statearr_23300_23353 = state_23279__$1;
(statearr_23300_23353[(1)] = (30));

} else {
var statearr_23301_23354 = state_23279__$1;
(statearr_23301_23354[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (6))){
var inst_23213 = example.pipeline.pseg_in_rq.call(null,seg);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23279__$1,(7),inst_23213);
} else {
if((state_val_23280 === (28))){
var inst_23199 = (state_23279[(11)]);
var inst_23264 = example.pipeline.pseg_in_ak.call(null,inst_23199);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23279__$1,(29),inst_23264);
} else {
if((state_val_23280 === (25))){
var inst_23257 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23303_23355 = state_23279__$1;
(statearr_23303_23355[(2)] = inst_23257);

(statearr_23303_23355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (17))){
var inst_23201 = (state_23279[(9)]);
var inst_23236 = (state_23279[(2)]);
var tmp23302 = inst_23201;
var inst_23200 = new cljs.core.Keyword(null,"process-data","process-data",1368271805);
var inst_23201__$1 = tmp23302;
var state_23279__$1 = (function (){var statearr_23304 = state_23279;
(statearr_23304[(8)] = inst_23200);

(statearr_23304[(14)] = inst_23236);

(statearr_23304[(9)] = inst_23201__$1);

return statearr_23304;
})();
var statearr_23305_23356 = state_23279__$1;
(statearr_23305_23356[(2)] = null);

(statearr_23305_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (3))){
var inst_23277 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23279__$1,inst_23277);
} else {
if((state_val_23280 === (12))){
var inst_23226 = (state_23279[(12)]);
var inst_23226__$1 = (state_23279[(2)]);
var state_23279__$1 = (function (){var statearr_23306 = state_23279;
(statearr_23306[(12)] = inst_23226__$1);

return statearr_23306;
})();
if(cljs.core.truth_(inst_23226__$1)){
var statearr_23307_23357 = state_23279__$1;
(statearr_23307_23357[(1)] = (13));

} else {
var statearr_23308_23358 = state_23279__$1;
(statearr_23308_23358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (2))){
var inst_23200 = (state_23279[(8)]);
var state_23279__$1 = state_23279;
var G__23309_23359 = inst_23200;
var G__23309_23360__$1 = (((G__23309_23359 instanceof cljs.core.Keyword))?G__23309_23359.fqn:null);
switch (G__23309_23360__$1) {
case "exit":
var statearr_23310_23362 = state_23279__$1;
(statearr_23310_23362[(1)] = (5));


break;
case "init":
var statearr_23311_23363 = state_23279__$1;
(statearr_23311_23363[(1)] = (6));


break;
case "copy-data":
var statearr_23312_23364 = state_23279__$1;
(statearr_23312_23364[(1)] = (11));


break;
case "ak-data":
var statearr_23313_23365 = state_23279__$1;
(statearr_23313_23365[(1)] = (16));


break;
case "process-data":
var statearr_23314_23366 = state_23279__$1;
(statearr_23314_23366[(1)] = (18));


break;
case "relay-next":
var statearr_23315_23367 = state_23279__$1;
(statearr_23315_23367[(1)] = (22));


break;
case "pipe-out":
var statearr_23316_23368 = state_23279__$1;
(statearr_23316_23368[(1)] = (26));


break;
case "get-ak-from-next-seg":
var statearr_23317_23369 = state_23279__$1;
(statearr_23317_23369[(1)] = (28));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23309_23360__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (23))){
var inst_23200 = new cljs.core.Keyword(null,"get-ak-from-next-seg","get-ak-from-next-seg",998096295);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23318 = state_23279;
(statearr_23318[(8)] = inst_23200);

(statearr_23318[(9)] = inst_23201);

return statearr_23318;
})();
var statearr_23319_23370 = state_23279__$1;
(statearr_23319_23370[(2)] = null);

(statearr_23319_23370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (19))){
var inst_23240 = (state_23279[(7)]);
var inst_23200 = new cljs.core.Keyword(null,"relay-next","relay-next",649776130);
var inst_23201 = inst_23240;
var state_23279__$1 = (function (){var statearr_23320 = state_23279;
(statearr_23320[(8)] = inst_23200);

(statearr_23320[(9)] = inst_23201);

return statearr_23320;
})();
var statearr_23321_23371 = state_23279__$1;
(statearr_23321_23371[(2)] = null);

(statearr_23321_23371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (11))){
var inst_23224 = example.pipeline.pseg_in_data.call(null,seg);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23279__$1,(12),inst_23224);
} else {
if((state_val_23280 === (9))){
var inst_23219 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-out-on-rq","seg-out-on-rq",1496394983));
var inst_23200 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23322 = state_23279;
(statearr_23322[(8)] = inst_23200);

(statearr_23322[(15)] = inst_23219);

(statearr_23322[(9)] = inst_23201);

return statearr_23322;
})();
var statearr_23323_23372 = state_23279__$1;
(statearr_23323_23372[(2)] = null);

(statearr_23323_23372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (5))){
var inst_23203 = cljs.core.deref.call(null,seg);
var inst_23204 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_23203);
var inst_23205 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"closing-seg!!!","closing-seg!!!",-1972709560),inst_23204);
var inst_23206 = example.pipeline.pseg_in_rq.call(null,seg);
var inst_23207 = cljs.core.async.close_BANG_.call(null,inst_23206);
var inst_23208 = example.pipeline.pseg_in_data.call(null,seg);
var inst_23209 = cljs.core.async.close_BANG_.call(null,inst_23208);
var inst_23210 = example.pipeline.pseg_in_ak.call(null,seg);
var inst_23211 = cljs.core.async.close_BANG_.call(null,inst_23210);
var state_23279__$1 = (function (){var statearr_23324 = state_23279;
(statearr_23324[(16)] = inst_23207);

(statearr_23324[(17)] = inst_23209);

(statearr_23324[(18)] = inst_23205);

return statearr_23324;
})();
var statearr_23325_23373 = state_23279__$1;
(statearr_23325_23373[(2)] = inst_23211);

(statearr_23325_23373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (14))){
var inst_23230 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"seg-got-nil-data","seg-got-nil-data",262773951));
var state_23279__$1 = state_23279;
var statearr_23326_23374 = state_23279__$1;
(statearr_23326_23374[(2)] = inst_23230);

(statearr_23326_23374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (26))){
var inst_23201 = (state_23279[(9)]);
var inst_23259 = example.pipeline.pseg_pipe_out_data.call(null,seg);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23279__$1,(27),inst_23259,inst_23201);
} else {
if((state_val_23280 === (16))){
var inst_23234 = example.pipeline.pseg_in_ak.call(null,seg);
var state_23279__$1 = state_23279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23279__$1,(17),inst_23234,true);
} else {
if((state_val_23280 === (30))){
var inst_23200 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23327 = state_23279;
(statearr_23327[(8)] = inst_23200);

(statearr_23327[(9)] = inst_23201);

return statearr_23327;
})();
var statearr_23328_23375 = state_23279__$1;
(statearr_23328_23375[(2)] = null);

(statearr_23328_23375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (10))){
var inst_23222 = (state_23279[(2)]);
var state_23279__$1 = state_23279;
var statearr_23329_23376 = state_23279__$1;
(statearr_23329_23376[(2)] = inst_23222);

(statearr_23329_23376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (18))){
var inst_23199 = (state_23279[(11)]);
var inst_23201 = (state_23279[(9)]);
var inst_23239 = example.pipeline.pseg_processor.call(null,seg);
var inst_23240 = inst_23239.call(null,inst_23201);
var state_23279__$1 = (function (){var statearr_23330 = state_23279;
(statearr_23330[(7)] = inst_23240);

return statearr_23330;
})();
if(cljs.core.truth_(inst_23199)){
var statearr_23331_23377 = state_23279__$1;
(statearr_23331_23377[(1)] = (19));

} else {
var statearr_23332_23378 = state_23279__$1;
(statearr_23332_23378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23280 === (8))){
var inst_23200 = new cljs.core.Keyword(null,"copy-data","copy-data",-320904302);
var inst_23201 = null;
var state_23279__$1 = (function (){var statearr_23333 = state_23279;
(statearr_23333[(8)] = inst_23200);

(statearr_23333[(9)] = inst_23201);

return statearr_23333;
})();
var statearr_23334_23379 = state_23279__$1;
(statearr_23334_23379[(2)] = null);

(statearr_23334_23379[(1)] = (2));


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
});})(c__22762__auto__))
;
return ((function (switch__22741__auto__,c__22762__auto__){
return (function() {
var example$pipeline$pipe_seg_start_$_state_machine__22742__auto__ = null;
var example$pipeline$pipe_seg_start_$_state_machine__22742__auto____0 = (function (){
var statearr_23335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23335[(0)] = example$pipeline$pipe_seg_start_$_state_machine__22742__auto__);

(statearr_23335[(1)] = (1));

return statearr_23335;
});
var example$pipeline$pipe_seg_start_$_state_machine__22742__auto____1 = (function (state_23279){
while(true){
var ret_value__22743__auto__ = (function (){try{while(true){
var result__22744__auto__ = switch__22741__auto__.call(null,state_23279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22744__auto__;
}
break;
}
}catch (e23336){if((e23336 instanceof Object)){
var ex__22745__auto__ = e23336;
var statearr_23337_23380 = state_23279;
(statearr_23337_23380[(5)] = ex__22745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23381 = state_23279;
state_23279 = G__23381;
continue;
} else {
return ret_value__22743__auto__;
}
break;
}
});
example$pipeline$pipe_seg_start_$_state_machine__22742__auto__ = function(state_23279){
switch(arguments.length){
case 0:
return example$pipeline$pipe_seg_start_$_state_machine__22742__auto____0.call(this);
case 1:
return example$pipeline$pipe_seg_start_$_state_machine__22742__auto____1.call(this,state_23279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
example$pipeline$pipe_seg_start_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$0 = example$pipeline$pipe_seg_start_$_state_machine__22742__auto____0;
example$pipeline$pipe_seg_start_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$1 = example$pipeline$pipe_seg_start_$_state_machine__22742__auto____1;
return example$pipeline$pipe_seg_start_$_state_machine__22742__auto__;
})()
;})(switch__22741__auto__,c__22762__auto__))
})();
var state__22764__auto__ = (function (){var statearr_23338 = f__22763__auto__.call(null);
(statearr_23338[(6)] = c__22762__auto__);

return statearr_23338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22764__auto__);
});})(c__22762__auto__))
);

return c__22762__auto__;
});
example.pipeline.pipe_start = (function example$pipeline$pipe_start(pipe){
var segs = example.pipeline.pipe_segs.call(null,pipe);
var seq__23382_23455 = cljs.core.seq.call(null,segs);
var chunk__23383_23456 = null;
var count__23384_23457 = (0);
var i__23385_23458 = (0);
while(true){
if((i__23385_23458 < count__23384_23457)){
var seg_23459 = cljs.core._nth.call(null,chunk__23383_23456,i__23385_23458);
example.pipeline.pipe_seg_start.call(null,seg_23459);

var G__23460 = seq__23382_23455;
var G__23461 = chunk__23383_23456;
var G__23462 = count__23384_23457;
var G__23463 = (i__23385_23458 + (1));
seq__23382_23455 = G__23460;
chunk__23383_23456 = G__23461;
count__23384_23457 = G__23462;
i__23385_23458 = G__23463;
continue;
} else {
var temp__4657__auto___23464 = cljs.core.seq.call(null,seq__23382_23455);
if(temp__4657__auto___23464){
var seq__23382_23465__$1 = temp__4657__auto___23464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23382_23465__$1)){
var c__7594__auto___23466 = cljs.core.chunk_first.call(null,seq__23382_23465__$1);
var G__23467 = cljs.core.chunk_rest.call(null,seq__23382_23465__$1);
var G__23468 = c__7594__auto___23466;
var G__23469 = cljs.core.count.call(null,c__7594__auto___23466);
var G__23470 = (0);
seq__23382_23455 = G__23467;
chunk__23383_23456 = G__23468;
count__23384_23457 = G__23469;
i__23385_23458 = G__23470;
continue;
} else {
var seg_23471 = cljs.core.first.call(null,seq__23382_23465__$1);
example.pipeline.pipe_seg_start.call(null,seg_23471);

var G__23472 = cljs.core.next.call(null,seq__23382_23465__$1);
var G__23473 = null;
var G__23474 = (0);
var G__23475 = (0);
seq__23382_23455 = G__23472;
chunk__23383_23456 = G__23473;
count__23384_23457 = G__23474;
i__23385_23458 = G__23475;
continue;
}
} else {
}
}
break;
}

var ps0 = cljs.core.first.call(null,example.pipeline.pipe_segs.call(null,pipe));
var psn = cljs.core.last.call(null,example.pipeline.pipe_segs.call(null,pipe));
var c__22762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22762__auto__,ps0,psn,segs){
return (function (){
var f__22763__auto__ = (function (){var switch__22741__auto__ = ((function (c__22762__auto__,ps0,psn,segs){
return (function (state_23423){
var state_val_23424 = (state_23423[(1)]);
if((state_val_23424 === (7))){
var inst_23394 = (state_23423[(7)]);
var inst_23394__$1 = (state_23423[(2)]);
var inst_23395 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-got!","pipe-got!",-559173943),inst_23394__$1);
var state_23423__$1 = (function (){var statearr_23425 = state_23423;
(statearr_23425[(7)] = inst_23394__$1);

(statearr_23425[(8)] = inst_23395);

return statearr_23425;
})();
if(cljs.core.truth_(inst_23394__$1)){
var statearr_23426_23476 = state_23423__$1;
(statearr_23426_23476[(1)] = (8));

} else {
var statearr_23427_23477 = state_23423__$1;
(statearr_23427_23477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (1))){
var inst_23386 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23387 = null;
var state_23423__$1 = (function (){var statearr_23428 = state_23423;
(statearr_23428[(9)] = inst_23386);

(statearr_23428[(10)] = inst_23387);

return statearr_23428;
})();
var statearr_23429_23478 = state_23423__$1;
(statearr_23429_23478[(2)] = null);

(statearr_23429_23478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (4))){
var inst_23419 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23430_23479 = state_23423__$1;
(statearr_23430_23479[(2)] = inst_23419);

(statearr_23430_23479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (15))){
var inst_23386 = new cljs.core.Keyword(null,"exit","exit",351849638);
var inst_23387 = null;
var state_23423__$1 = (function (){var statearr_23431 = state_23423;
(statearr_23431[(9)] = inst_23386);

(statearr_23431[(10)] = inst_23387);

return statearr_23431;
})();
var statearr_23432_23480 = state_23423__$1;
(statearr_23432_23480[(2)] = null);

(statearr_23432_23480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (13))){
var inst_23410 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
if(cljs.core.truth_(inst_23410)){
var statearr_23433_23481 = state_23423__$1;
(statearr_23433_23481[(1)] = (14));

} else {
var statearr_23434_23482 = state_23423__$1;
(statearr_23434_23482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (6))){
var inst_23391 = cljs.core.deref.call(null,pipe);
var inst_23392 = new cljs.core.Keyword(null,"in-data","in-data",89576440).cljs$core$IFn$_invoke$arity$1(inst_23391);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(7),inst_23392);
} else {
if((state_val_23424 === (3))){
var inst_23421 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23423__$1,inst_23421);
} else {
if((state_val_23424 === (12))){
var inst_23408 = example.pipeline.pseg_in_ak.call(null,ps0);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(13),inst_23408);
} else {
if((state_val_23424 === (2))){
var inst_23386 = (state_23423[(9)]);
var state_23423__$1 = state_23423;
var G__23436_23483 = inst_23386;
var G__23436_23484__$1 = (((G__23436_23483 instanceof cljs.core.Keyword))?G__23436_23483.fqn:null);
switch (G__23436_23484__$1) {
case "exit":
var statearr_23437_23486 = state_23423__$1;
(statearr_23437_23486[(1)] = (5));


break;
case "init":
var statearr_23438_23487 = state_23423__$1;
(statearr_23438_23487[(1)] = (6));


break;
case "toggle-rq-first":
var statearr_23439_23488 = state_23423__$1;
(statearr_23439_23488[(1)] = (11));


break;
case "get-rq-ak":
var statearr_23440_23489 = state_23423__$1;
(statearr_23440_23489[(1)] = (12));


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23436_23484__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (11))){
var inst_23387 = (state_23423[(10)]);
var inst_23402 = example.pipeline.pseg_in_rq.call(null,ps0);
var inst_23403 = cljs.core.async.put_BANG_.call(null,inst_23402,true);
var inst_23404 = example.pipeline.pseg_in_data.call(null,ps0);
var inst_23405 = cljs.core.async.put_BANG_.call(null,inst_23404,inst_23387);
var tmp23435 = inst_23387;
var inst_23386 = new cljs.core.Keyword(null,"get-rq-ak","get-rq-ak",-366033966);
var inst_23387__$1 = tmp23435;
var state_23423__$1 = (function (){var statearr_23441 = state_23423;
(statearr_23441[(9)] = inst_23386);

(statearr_23441[(10)] = inst_23387__$1);

(statearr_23441[(11)] = inst_23403);

(statearr_23441[(12)] = inst_23405);

return statearr_23441;
})();
var statearr_23442_23490 = state_23423__$1;
(statearr_23442_23490[(2)] = null);

(statearr_23442_23490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (9))){
var state_23423__$1 = state_23423;
var statearr_23443_23491 = state_23423__$1;
(statearr_23443_23491[(2)] = new cljs.core.Keyword(null,"exit","exit",351849638));

(statearr_23443_23491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (5))){
var inst_23389 = tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"pipe-exiting","pipe-exiting",-470897642));
var state_23423__$1 = state_23423;
var statearr_23444_23492 = state_23423__$1;
(statearr_23444_23492[(2)] = inst_23389);

(statearr_23444_23492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (14))){
var inst_23386 = new cljs.core.Keyword(null,"init","init",-1875481434);
var inst_23387 = null;
var state_23423__$1 = (function (){var statearr_23445 = state_23423;
(statearr_23445[(9)] = inst_23386);

(statearr_23445[(10)] = inst_23387);

return statearr_23445;
})();
var statearr_23446_23493 = state_23423__$1;
(statearr_23446_23493[(2)] = null);

(statearr_23446_23493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (16))){
var inst_23416 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
var statearr_23447_23494 = state_23423__$1;
(statearr_23447_23494[(2)] = inst_23416);

(statearr_23447_23494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (10))){
var inst_23394 = (state_23423[(7)]);
var inst_23399 = (state_23423[(2)]);
var inst_23386 = inst_23399;
var inst_23387 = inst_23394;
var state_23423__$1 = (function (){var statearr_23448 = state_23423;
(statearr_23448[(9)] = inst_23386);

(statearr_23448[(10)] = inst_23387);

return statearr_23448;
})();
var statearr_23449_23495 = state_23423__$1;
(statearr_23449_23495[(2)] = null);

(statearr_23449_23495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23424 === (8))){
var state_23423__$1 = state_23423;
var statearr_23450_23496 = state_23423__$1;
(statearr_23450_23496[(2)] = new cljs.core.Keyword(null,"toggle-rq-first","toggle-rq-first",1792862055));

(statearr_23450_23496[(1)] = (10));


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
});})(c__22762__auto__,ps0,psn,segs))
;
return ((function (switch__22741__auto__,c__22762__auto__,ps0,psn,segs){
return (function() {
var example$pipeline$pipe_start_$_state_machine__22742__auto__ = null;
var example$pipeline$pipe_start_$_state_machine__22742__auto____0 = (function (){
var statearr_23451 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23451[(0)] = example$pipeline$pipe_start_$_state_machine__22742__auto__);

(statearr_23451[(1)] = (1));

return statearr_23451;
});
var example$pipeline$pipe_start_$_state_machine__22742__auto____1 = (function (state_23423){
while(true){
var ret_value__22743__auto__ = (function (){try{while(true){
var result__22744__auto__ = switch__22741__auto__.call(null,state_23423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22744__auto__;
}
break;
}
}catch (e23452){if((e23452 instanceof Object)){
var ex__22745__auto__ = e23452;
var statearr_23453_23497 = state_23423;
(statearr_23453_23497[(5)] = ex__22745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23498 = state_23423;
state_23423 = G__23498;
continue;
} else {
return ret_value__22743__auto__;
}
break;
}
});
example$pipeline$pipe_start_$_state_machine__22742__auto__ = function(state_23423){
switch(arguments.length){
case 0:
return example$pipeline$pipe_start_$_state_machine__22742__auto____0.call(this);
case 1:
return example$pipeline$pipe_start_$_state_machine__22742__auto____1.call(this,state_23423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
example$pipeline$pipe_start_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$0 = example$pipeline$pipe_start_$_state_machine__22742__auto____0;
example$pipeline$pipe_start_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$1 = example$pipeline$pipe_start_$_state_machine__22742__auto____1;
return example$pipeline$pipe_start_$_state_machine__22742__auto__;
})()
;})(switch__22741__auto__,c__22762__auto__,ps0,psn,segs))
})();
var state__22764__auto__ = (function (){var statearr_23454 = f__22763__auto__.call(null);
(statearr_23454[(6)] = c__22762__auto__);

return statearr_23454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22764__auto__);
});})(c__22762__auto__,ps0,psn,segs))
);

return c__22762__auto__;
});

//# sourceMappingURL=pipeline.js.map