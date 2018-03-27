// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.xhr');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.cell.synapse');
goog.require('tiltontec.cell.integrity');
goog.require('tiltontec.util.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.core');
goog.require('tiltontec.model.core');
goog.require('cljs_http.client');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('cljs.core.async');
tiltontec.xhr.now = (function tiltontec$xhr$now(){
return (new Date()).getTime();
});
tiltontec.xhr._PLUS_xhr_sid_PLUS_ = cljs.core.atom.call(null,(-1));
tiltontec.xhr.xhr_init_BANG_ = (function tiltontec$xhr$xhr_init_BANG_(){
return cljs.core.reset_BANG_.call(null,tiltontec.xhr._PLUS_xhr_sid_PLUS_,(-1));
});
tiltontec.xhr.parse_json$ = (function tiltontec$xhr$parse_json$(var_args){
var G__22808 = arguments.length;
switch (G__22808) {
case 1:
return tiltontec.xhr.parse_json$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.parse_json$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.parse_json$.cljs$core$IFn$_invoke$arity$1 = (function (j$){
return tiltontec.xhr.parse_json$.call(null,j$,true);
});

tiltontec.xhr.parse_json$.cljs$core$IFn$_invoke$arity$2 = (function (j$,keywordize){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
return (cljs.core.truth_(keywordize)?clojure.walk.keywordize_keys:cljs.core.identity).call(null,cognitect.transit.read.call(null,r,j$));
});

tiltontec.xhr.parse_json$.cljs$lang$maxFixedArity = 2;

tiltontec.xhr.xhr_send = (function tiltontec$xhr$xhr_send(xhr){
var uri = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"uri","uri",-774711847));
cljs.core.swap_BANG_.call(null,xhr,cljs.core.assoc,new cljs.core.Keyword(null,"send-time","send-time",1485599345),tiltontec.xhr.now.call(null));

var c__22762__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22762__auto__,uri){
return (function (){
var f__22763__auto__ = (function (){var switch__22741__auto__ = ((function (c__22762__auto__,uri){
return (function (state_22864){
var state_val_22865 = (state_22864[(1)]);
if((state_val_22865 === (7))){
var inst_22815 = (state_22864[(7)]);
var inst_22833 = (function (){var response = inst_22815;
return ((function (response,inst_22815,state_val_22865,c__22762__auto__,uri){
return (function (opcode,defer_info){
return setTimeout(((function (response,inst_22815,state_val_22865,c__22762__auto__,uri){
return (function (){
var temp__4657__auto___22892 = new cljs.core.Keyword(null,"fake-delay","fake-delay",1684932478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr));
if(cljs.core.truth_(temp__4657__auto___22892)){
var d_22893 = temp__4657__auto___22892;
cljs.core.println.call(null,new cljs.core.Keyword(null,"fake-delayed!!!!!!","fake-delayed!!!!!!",1203291348),d_22893);
} else {
}

return tiltontec.model.core.md_reset_BANG_.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"body-parser","body-parser",1321837752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr)).call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))], null));
});})(response,inst_22815,state_val_22865,c__22762__auto__,uri))
,(function (){var or__6774__auto__ = new cljs.core.Keyword(null,"fake-delay","fake-delay",1684932478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return (0);
}
})());
});
;})(response,inst_22815,state_val_22865,c__22762__auto__,uri))
})();
var inst_22834 = tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"xhr-handler-sets-responded","xhr-handler-sets-responded",1889219512),inst_22833);
var state_22864__$1 = state_22864;
var statearr_22866_22894 = state_22864__$1;
(statearr_22866_22894[(2)] = inst_22834);

(statearr_22866_22894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (1))){
var inst_22810 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_22811 = [false];
var inst_22812 = cljs.core.PersistentHashMap.fromArrays(inst_22810,inst_22811);
var inst_22813 = cljs_http.client.get.call(null,uri,inst_22812);
var state_22864__$1 = state_22864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22864__$1,(2),inst_22813);
} else {
if((state_val_22865 === (4))){
var inst_22815 = (state_22864[(7)]);
var inst_22838 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22815);
var inst_22839 = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(inst_22815);
var inst_22840 = new cljs.core.Keyword(null,"error-text","error-text",2021893718).cljs$core$IFn$_invoke$arity$1(inst_22815);
var inst_22841 = cljs.core.prn.call(null,new cljs.core.Keyword(null,"NO-success","NO-success",-891187462),new cljs.core.Keyword(null,"stat","stat",-1370599836),inst_22838,new cljs.core.Keyword(null,"ecode","ecode",1339171690),inst_22839,new cljs.core.Keyword(null,"etext","etext",-1591605354),inst_22840);
var inst_22842 = tiltontec.cell.base.mdead_QMARK_.call(null,xhr);
var state_22864__$1 = (function (){var statearr_22867 = state_22864;
(statearr_22867[(8)] = inst_22841);

return statearr_22867;
})();
if(cljs.core.truth_(inst_22842)){
var statearr_22868_22895 = state_22864__$1;
(statearr_22868_22895[(1)] = (12));

} else {
var statearr_22869_22896 = state_22864__$1;
(statearr_22869_22896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (15))){
var inst_22855 = (state_22864[(2)]);
var state_22864__$1 = state_22864;
var statearr_22870_22897 = state_22864__$1;
(statearr_22870_22897[(2)] = inst_22855);

(statearr_22870_22897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (13))){
var inst_22815 = (state_22864[(7)]);
var inst_22857 = (function (){var response = inst_22815;
return ((function (response,inst_22815,state_val_22865,c__22762__auto__,uri){
return (function (opcode,defer_info){
return tiltontec.model.core.md_reset_BANG_.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"error-text","error-text",2021893718).cljs$core$IFn$_invoke$arity$1(response)], null)], null));
});
;})(response,inst_22815,state_val_22865,c__22762__auto__,uri))
})();
var inst_22858 = tiltontec.cell.integrity.call_with_integrity.call(null,new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.Keyword(null,"xhr-handler-sets-responded","xhr-handler-sets-responded",1889219512),inst_22857);
var state_22864__$1 = state_22864;
var statearr_22871_22898 = state_22864__$1;
(statearr_22871_22898[(2)] = inst_22858);

(statearr_22871_22898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (6))){
var inst_22821 = tiltontec.cell.base._STAR_depender_STAR_ = null;
var state_22864__$1 = (function (){var statearr_22872 = state_22864;
(statearr_22872[(9)] = inst_22821);

return statearr_22872;
})();
var statearr_22873_22899 = state_22864__$1;
(statearr_22873_22899[(2)] = null);

(statearr_22873_22899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (17))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22864,null,null,(16),(15));
var inst_22851 = cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_);
var inst_22852 = cljs.core.meta.call(null,xhr);
var inst_22853 = tiltontec.util.core.pln.call(null,inst_22851,new cljs.core.Keyword(null,"ignoring-response-to-dead-XHR!!!","ignoring-response-to-dead-XHR!!!",760030501),uri,inst_22852);
var state_22864__$1 = state_22864;
var statearr_22874_22900 = state_22864__$1;
(statearr_22874_22900[(2)] = inst_22853);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (3))){
var inst_22818 = tiltontec.cell.base.mdead_QMARK_.call(null,xhr);
var state_22864__$1 = state_22864;
if(cljs.core.truth_(inst_22818)){
var statearr_22875_22901 = state_22864__$1;
(statearr_22875_22901[(1)] = (6));

} else {
var statearr_22876_22902 = state_22864__$1;
(statearr_22876_22902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (12))){
var inst_22845 = tiltontec.cell.base._STAR_depender_STAR_ = null;
var state_22864__$1 = (function (){var statearr_22877 = state_22864;
(statearr_22877[(10)] = inst_22845);

return statearr_22877;
})();
var statearr_22878_22903 = state_22864__$1;
(statearr_22878_22903[(2)] = null);

(statearr_22878_22903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (2))){
var inst_22815 = (state_22864[(7)]);
var inst_22815__$1 = (state_22864[(2)]);
var inst_22816 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_22815__$1);
var state_22864__$1 = (function (){var statearr_22879 = state_22864;
(statearr_22879[(7)] = inst_22815__$1);

return statearr_22879;
})();
if(cljs.core.truth_(inst_22816)){
var statearr_22880_22904 = state_22864__$1;
(statearr_22880_22904[(1)] = (3));

} else {
var statearr_22881_22905 = state_22864__$1;
(statearr_22881_22905[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22864,null,null,(10),(9));
var inst_22827 = cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_);
var inst_22828 = cljs.core.meta.call(null,xhr);
var inst_22829 = tiltontec.util.core.pln.call(null,inst_22827,new cljs.core.Keyword(null,"ignoring-response-to-dead-XHR!!!","ignoring-response-to-dead-XHR!!!",760030501),uri,inst_22828);
var state_22864__$1 = state_22864;
var statearr_22882_22906 = state_22864__$1;
(statearr_22882_22906[(2)] = inst_22829);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (9))){
var inst_22831 = (state_22864[(2)]);
var state_22864__$1 = state_22864;
var statearr_22883_22907 = state_22864__$1;
(statearr_22883_22907[(2)] = inst_22831);

(statearr_22883_22907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (5))){
var inst_22862 = (state_22864[(2)]);
var state_22864__$1 = state_22864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22864__$1,inst_22862);
} else {
if((state_val_22865 === (14))){
var inst_22860 = (state_22864[(2)]);
var state_22864__$1 = state_22864;
var statearr_22884_22908 = state_22864__$1;
(statearr_22884_22908[(2)] = inst_22860);

(statearr_22884_22908[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (16))){
var inst_22846 = (state_22864[(2)]);
var inst_22847 = tiltontec.cell.base._STAR_depender_STAR_ = tiltontec.cell.base._STAR_depender_STAR_;
var state_22864__$1 = (function (){var statearr_22885 = state_22864;
(statearr_22885[(11)] = inst_22847);

(statearr_22885[(12)] = inst_22846);

return statearr_22885;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (10))){
var inst_22822 = (state_22864[(2)]);
var inst_22823 = tiltontec.cell.base._STAR_depender_STAR_ = tiltontec.cell.base._STAR_depender_STAR_;
var state_22864__$1 = (function (){var statearr_22886 = state_22864;
(statearr_22886[(13)] = inst_22822);

(statearr_22886[(14)] = inst_22823);

return statearr_22886;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22865 === (8))){
var inst_22836 = (state_22864[(2)]);
var state_22864__$1 = state_22864;
var statearr_22887_22909 = state_22864__$1;
(statearr_22887_22909[(2)] = inst_22836);

(statearr_22887_22909[(1)] = (5));


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
});})(c__22762__auto__,uri))
;
return ((function (switch__22741__auto__,c__22762__auto__,uri){
return (function() {
var tiltontec$xhr$xhr_send_$_state_machine__22742__auto__ = null;
var tiltontec$xhr$xhr_send_$_state_machine__22742__auto____0 = (function (){
var statearr_22888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22888[(0)] = tiltontec$xhr$xhr_send_$_state_machine__22742__auto__);

(statearr_22888[(1)] = (1));

return statearr_22888;
});
var tiltontec$xhr$xhr_send_$_state_machine__22742__auto____1 = (function (state_22864){
while(true){
var ret_value__22743__auto__ = (function (){try{while(true){
var result__22744__auto__ = switch__22741__auto__.call(null,state_22864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22744__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22744__auto__;
}
break;
}
}catch (e22889){if((e22889 instanceof Object)){
var ex__22745__auto__ = e22889;
var statearr_22890_22910 = state_22864;
(statearr_22890_22910[(5)] = ex__22745__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22743__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22911 = state_22864;
state_22864 = G__22911;
continue;
} else {
return ret_value__22743__auto__;
}
break;
}
});
tiltontec$xhr$xhr_send_$_state_machine__22742__auto__ = function(state_22864){
switch(arguments.length){
case 0:
return tiltontec$xhr$xhr_send_$_state_machine__22742__auto____0.call(this);
case 1:
return tiltontec$xhr$xhr_send_$_state_machine__22742__auto____1.call(this,state_22864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
tiltontec$xhr$xhr_send_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$0 = tiltontec$xhr$xhr_send_$_state_machine__22742__auto____0;
tiltontec$xhr$xhr_send_$_state_machine__22742__auto__.cljs$core$IFn$_invoke$arity$1 = tiltontec$xhr$xhr_send_$_state_machine__22742__auto____1;
return tiltontec$xhr$xhr_send_$_state_machine__22742__auto__;
})()
;})(switch__22741__auto__,c__22762__auto__,uri))
})();
var state__22764__auto__ = (function (){var statearr_22891 = f__22763__auto__.call(null);
(statearr_22891[(6)] = c__22762__auto__);

return statearr_22891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22764__auto__);
});})(c__22762__auto__,uri))
);

return c__22762__auto__;
});
tiltontec.xhr.xhr_status = (function tiltontec$xhr$xhr_status(xhr){
var or__6774__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192)));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return new cljs.core.Keyword(null,"no-response-yet","no-response-yet",417819532);
}
});
tiltontec.xhr.xhr_ok_body = (function tiltontec$xhr$xhr_ok_body(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.xhr_error = (function tiltontec$xhr$xhr_error(xhr){
var temp__4657__auto__ = tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core.truth_(temp__4657__auto__)){
var r = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
} else {
return null;
}
});
tiltontec.xhr.make_xhr = (function tiltontec$xhr$make_xhr(var_args){
var G__22914 = arguments.length;
switch (G__22914) {
case 1:
return tiltontec.xhr.make_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.make_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.make_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.make_xhr.call(null,uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.make_xhr.cljs$core$IFn$_invoke$arity$2 = (function (uri,attrs){
if(typeof uri === 'string'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("param uri <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> not a string")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(string? uri)")].join('')));
}

var xhr = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.xhr","xhr","tiltontec.xhr/xhr",-1043442749),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.swap_BANG_.call(null,tiltontec.xhr._PLUS_xhr_sid_PLUS_,cljs.core.inc),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"response","response",-1068424192),tiltontec.cell.core.cI.call(null,null),new cljs.core.Keyword(null,"select","select",1147833503),null,new cljs.core.Keyword(null,"body-parser","body-parser",1321837752),new cljs.core.Keyword(null,"body-parser","body-parser",1321837752).cljs$core$IFn$_invoke$arity$2(attrs,(function (p1__22912_SHARP_){
return cljs.core.identity.call(null,p1__22912_SHARP_);
})),new cljs.core.Keyword(null,"selection","selection",975998651),tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),cljs.core.list(new cljs.core.Symbol(null,"xhr-ok-body","xhr-ok-body",153742127,null),new cljs.core.Symbol(null,"me","me",1501524834,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",-754231827,null),cljs.core.list(new cljs.core.Symbol(null,"md-get","md-get",-1846886512,null),new cljs.core.Symbol(null,"me","me",1501524834,null),new cljs.core.Keyword(null,"select","select",1147833503))], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"ks","ks",-754231827,null)),new cljs.core.Symbol(null,"b","b",-1172211299,null)))),new cljs.core.Keyword(null,"value","value",305978217),tiltontec.cell.base.unbound,new cljs.core.Keyword(null,"rule","rule",729973257),(function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
var temp__4657__auto__ = tiltontec.xhr.xhr_ok_body.call(null,me);
if(cljs.core.truth_(temp__4657__auto__)){
var b = temp__4657__auto__;
var temp__4655__auto__ = tiltontec.model.core.md_get.call(null,me,new cljs.core.Keyword(null,"select","select",1147833503));
if(cljs.core.truth_(temp__4655__auto__)){
var ks = temp__4655__auto__;
return cljs.core.select_keys.call(null,b,ks);
} else {
return b;
}
} else {
return null;
}
})),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"body-parser","body-parser",1321837752))))));
return xhr;
});

tiltontec.xhr.make_xhr.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.xhr","xhr","tiltontec.xhr/xhr",-1043442749)], null),(function (me){
var seq__22916_22920 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__22917_22921 = null;
var count__22918_22922 = (0);
var i__22919_22923 = (0);
while(true){
if((i__22919_22923 < count__22918_22922)){
var k_22924 = cljs.core._nth.call(null,chunk__22917_22921,i__22919_22923);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_22924))){
tiltontec.cell.evaluate.not_to_be.call(null,k_22924);
} else {
}

var G__22925 = seq__22916_22920;
var G__22926 = chunk__22917_22921;
var G__22927 = count__22918_22922;
var G__22928 = (i__22919_22923 + (1));
seq__22916_22920 = G__22925;
chunk__22917_22921 = G__22926;
count__22918_22922 = G__22927;
i__22919_22923 = G__22928;
continue;
} else {
var temp__4657__auto___22929 = cljs.core.seq.call(null,seq__22916_22920);
if(temp__4657__auto___22929){
var seq__22916_22930__$1 = temp__4657__auto___22929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22916_22930__$1)){
var c__7594__auto___22931 = cljs.core.chunk_first.call(null,seq__22916_22930__$1);
var G__22932 = cljs.core.chunk_rest.call(null,seq__22916_22930__$1);
var G__22933 = c__7594__auto___22931;
var G__22934 = cljs.core.count.call(null,c__7594__auto___22931);
var G__22935 = (0);
seq__22916_22920 = G__22932;
chunk__22917_22921 = G__22933;
count__22918_22922 = G__22934;
i__22919_22923 = G__22935;
continue;
} else {
var k_22936 = cljs.core.first.call(null,seq__22916_22930__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_22936))){
tiltontec.cell.evaluate.not_to_be.call(null,k_22936);
} else {
}

var G__22937 = cljs.core.next.call(null,seq__22916_22930__$1);
var G__22938 = null;
var G__22939 = (0);
var G__22940 = (0);
seq__22916_22920 = G__22937;
chunk__22917_22921 = G__22938;
count__22918_22922 = G__22939;
i__22919_22923 = G__22940;
continue;
}
} else {
}
}
break;
}

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
tiltontec.xhr.send_xhr = (function tiltontec$xhr$send_xhr(var_args){
var G__22942 = arguments.length;
switch (G__22942) {
case 1:
return tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return tiltontec.xhr.send_xhr.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),uri,cljs.core.PersistentArrayMap.EMPTY);
});

tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x instanceof cljs.core.Keyword)){
return tiltontec.xhr.send_xhr.call(null,x,y,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(typeof x === 'string'){
return tiltontec.xhr.send_xhr.call(null,new cljs.core.Keyword(null,"anon","anon",-765650478),x,y);
} else {
throw (new Error(cljs.pprint.cl_format.call(null,"~&send-xhr cannot discriminate params ~a and ~a",x,y)));

}
}
});

tiltontec.xhr.send_xhr.cljs$core$IFn$_invoke$arity$3 = (function (name,uri,attrs){
tiltontec.util.core.countit.call(null,new cljs.core.Keyword(null,"send-xhr","send-xhr",1063487637));

return tiltontec.xhr.make_xhr.call(null,uri,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"send?","send?",1918149690),true], null),attrs));
});

tiltontec.xhr.send_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.xhr_response = (function tiltontec$xhr$xhr_response(xhr){
return tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
});
tiltontec.xhr.xhr_selection = (function tiltontec$xhr$xhr_selection(xhr){
return tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"selection","selection",975998651));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.xhr","xhr","tiltontec.xhr/xhr",-1043442749)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(cljs.core.empty_QMARK_.call(null,gained)){
return null;
} else {
return tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"ignoring-new-kid-xhrs!!!!!!!","ignoring-new-kid-xhrs!!!!!!!",1722116313),newv);

}
} else {
return null;
}
}));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send?","send?",1918149690),new cljs.core.Keyword("tiltontec.xhr","xhr","tiltontec.xhr/xhr",-1043442749)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.truth_(newv)){
return tiltontec.xhr.xhr_send.call(null,me);
} else {
return null;
}
}));
if(typeof tiltontec.xhr.xhr_name_to_map !== 'undefined'){
} else {
tiltontec.xhr.xhr_name_to_map = (function (){var method_table__7708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7711__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7712__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tiltontec.xhr","xhr-name-to-map"),((function (method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__){
return (function (p1__22944_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__22944_SHARP_));
});})(method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__,hierarchy__7712__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7712__auto__,method_table__7708__auto__,prefer_table__7709__auto__,method_cache__7710__auto__,cached_hierarchy__7711__auto__));
})();
}
cljs.core._add_method.call(null,tiltontec.xhr.xhr_name_to_map,new cljs.core.Keyword(null,"default","default",-1987822328),(function (xhr){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,xhr),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"selection","selection",975998651)),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"xhr-name-to-map-fell-thru","xhr-name-to-map-fell-thru",1396391297),new cljs.core.Keyword(null,"kids","kids",1156670771),(function (){var iter__7563__auto__ = (function tiltontec$xhr$iter__22945(s__22946){
return (new cljs.core.LazySeq(null,(function (){
var s__22946__$1 = s__22946;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22946__$1);
if(temp__4657__auto__){
var s__22946__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22946__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__22946__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__22948 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__22947 = (0);
while(true){
if((i__22947 < size__7562__auto__)){
var k = cljs.core._nth.call(null,c__7561__auto__,i__22947);
cljs.core.chunk_append.call(null,b__22948,tiltontec.xhr.xhr_to_map.call(null,k));

var G__22949 = (i__22947 + (1));
i__22947 = G__22949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22948),tiltontec$xhr$iter__22945.call(null,cljs.core.chunk_rest.call(null,s__22946__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22948),null);
}
} else {
var k = cljs.core.first.call(null,s__22946__$2);
return cljs.core.cons.call(null,tiltontec.xhr.xhr_to_map.call(null,k),tiltontec$xhr$iter__22945.call(null,cljs.core.rest.call(null,s__22946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr)));
})());
}));
tiltontec.xhr.xhr_to_map = (function tiltontec$xhr$xhr_to_map(xhr){
var G__22950 = cljs.core.type.call(null,xhr);
var G__22950__$1 = (((G__22950 instanceof cljs.core.Keyword))?G__22950.fqn:null);
switch (G__22950__$1) {
case "tiltontec.xhr/xhr":
return tiltontec.xhr.xhr_name_to_map.call(null,xhr);

break;
case "tiltontec.model.core/family":
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,xhr),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"par","par",-61778778),new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword(null,"cells-flushed","cells-flushed",-1653073949)),new cljs.core.Keyword(null,"kids","kids",1156670771),(function (){var iter__7563__auto__ = ((function (G__22950,G__22950__$1){
return (function tiltontec$xhr$xhr_to_map_$_iter__22951(s__22952){
return (new cljs.core.LazySeq(null,((function (G__22950,G__22950__$1){
return (function (){
var s__22952__$1 = s__22952;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22952__$1);
if(temp__4657__auto__){
var s__22952__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22952__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__22952__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__22954 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__22953 = (0);
while(true){
if((i__22953 < size__7562__auto__)){
var k = cljs.core._nth.call(null,c__7561__auto__,i__22953);
cljs.core.chunk_append.call(null,b__22954,tiltontec.xhr.xhr_to_map.call(null,k));

var G__22956 = (i__22953 + (1));
i__22953 = G__22956;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22954),tiltontec$xhr$xhr_to_map_$_iter__22951.call(null,cljs.core.chunk_rest.call(null,s__22952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22954),null);
}
} else {
var k = cljs.core.first.call(null,s__22952__$2);
return cljs.core.cons.call(null,tiltontec.xhr.xhr_to_map.call(null,k),tiltontec$xhr$xhr_to_map_$_iter__22951.call(null,cljs.core.rest.call(null,s__22952__$2)));
}
} else {
return null;
}
break;
}
});})(G__22950,G__22950__$1))
,null,null));
});})(G__22950,G__22950__$1))
;
return iter__7563__auto__.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,xhr)));
})());

break;
default:
return cljs.core.select_keys.call(null,xhr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"uri","uri",-774711847)], null));

}
});
tiltontec.xhr.xhr_status_key = (function tiltontec$xhr$xhr_status_key(xhr){
var temp__4655__auto__ = tiltontec.xhr.xhr_status.call(null,xhr);
if(cljs.core.truth_(temp__4655__auto__)){
var status = temp__4655__auto__;
var G__22957 = status;
switch (G__22957) {
case (200):
return new cljs.core.Keyword(null,"ok","ok",967785236);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),status], null);

}
} else {
return new cljs.core.Keyword(null,"unresponded","unresponded",195243890);
}
});
tiltontec.xhr.xhr_resolved = (function tiltontec$xhr$xhr_resolved(xhr){
if(cljs.core.truth_(tiltontec.xhr.xhr_response.call(null,xhr))){
return xhr;
} else {
return null;
}
});
tiltontec.xhr.xhr_error_QMARK_ = (function tiltontec$xhr$xhr_error_QMARK_(xhr){
return cljs.core.not_EQ_.call(null,(200),tiltontec.xhr.xhr_status.call(null,xhr));
});
tiltontec.xhr.xhrfo = (function tiltontec$xhr$xhrfo(xhr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.xhr.xhr_status_key.call(null,xhr),tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"uri","uri",-774711847))], null);
});
tiltontec.xhr.xhr_await = (function tiltontec$xhr$xhr_await(var_args){
var G__22960 = arguments.length;
switch (G__22960) {
case 1:
return tiltontec.xhr.xhr_await.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.xhr.xhr_await.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.xhr_await.cljs$core$IFn$_invoke$arity$1 = (function (xhr){
return tiltontec.xhr.xhr_await.call(null,xhr,(3));
});

tiltontec.xhr.xhr_await.cljs$core$IFn$_invoke$arity$2 = (function (xhr,max_seconds){
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("tiltontec.xhr","xhr","tiltontec.xhr/xhr",-1043442749),tiltontec.util.base.type_cljc.call(null,xhr)))){
return cljs.core.println.call(null,new cljs.core.Keyword(null,"xhr-await-passed-non-xhr","xhr-await-passed-non-xhr",1445672684));
} else {
if(cljs.core.truth_(tiltontec.xhr.xhr_response.call(null,xhr))){
return xhr;
} else {
if((max_seconds > (0))){
return setTimeout((function (){
var _STAR_depender_STAR_22961_22963 = tiltontec.cell.base._STAR_depender_STAR_;
tiltontec.cell.base._STAR_depender_STAR_ = null;

try{tiltontec.util.core.pln.call(null,cljs.core.deref.call(null,tiltontec.cell.base._PLUS_pulse_PLUS_),new cljs.core.Keyword(null,"xhr-await-sleeping-max","xhr-await-sleeping-max",-921679199),max_seconds,tiltontec.xhr.xhrfo.call(null,xhr));
}finally {tiltontec.cell.base._STAR_depender_STAR_ = _STAR_depender_STAR_22961_22963;
}
return tiltontec.xhr.xhr_await.call(null,xhr,(max_seconds - (1)));
}),(1000));
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"xhr-await-timeout!","xhr-await-timeout!",223238396),max_seconds,tiltontec.xhr.xhrfo.call(null,xhr));

return xhr;

}
}
}
});

tiltontec.xhr.xhr_await.cljs$lang$maxFixedArity = 2;

tiltontec.xhr.synaptic_xhr = (function tiltontec$xhr$synaptic_xhr(var_args){
var G__22965 = arguments.length;
switch (G__22965) {
case 2:
return tiltontec.xhr.synaptic_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.synaptic_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.synaptic_xhr.cljs$core$IFn$_invoke$arity$2 = (function (id,uri){
return tiltontec.xhr.synaptic_xhr.call(null,id,uri,true);
});

tiltontec.xhr.synaptic_xhr.cljs$core$IFn$_invoke$arity$3 = (function (id,uri,resolve_QMARK_){
return (cljs.core.truth_(resolve_QMARK_)?tiltontec.xhr.xhr_resolved:cljs.core.identity).call(null,(function (){var existing_syn__21643__auto__ = tiltontec.cell.synapse.existing_syn.call(null,id);
var synapse__21644__auto__ = (function (){var or__6774__auto__ = existing_syn__21643__auto__;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var new_syn__21645__auto__ = (function (){return tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.cell.base._STAR_depender_STAR_)),new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201),id,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"uri","uri",865819680,null))),new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248),true,new cljs.core.Keyword(null,"rule","rule",729973257),((function (or__6774__auto__,existing_syn__21643__auto__){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.xhr.send_xhr.call(null,id,uri);
});})(or__6774__auto__,existing_syn__21643__auto__))
);
})();
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn__21645__auto__));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn__21645__auto__);

return new_syn__21645__auto__;
}
})();
var value__21646__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn__21643__auto__,synapse__21644__auto__){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse__21644__auto__,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__21643__auto__,synapse__21644__auto__))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse__21644__auto__);

return value__21646__auto__;
})());
});

tiltontec.xhr.synaptic_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.send_unparsed_xhr = (function tiltontec$xhr$send_unparsed_xhr(var_args){
var G__22968 = arguments.length;
switch (G__22968) {
case 2:
return tiltontec.xhr.send_unparsed_xhr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.send_unparsed_xhr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.send_unparsed_xhr.cljs$core$IFn$_invoke$arity$2 = (function (id,uri){
return tiltontec.xhr.send_unparsed_xhr.call(null,id,uri,true);
});

tiltontec.xhr.send_unparsed_xhr.cljs$core$IFn$_invoke$arity$3 = (function (id,uri,resolve_QMARK_){
return (cljs.core.truth_(resolve_QMARK_)?tiltontec.xhr.xhr_await:cljs.core.identity).call(null,tiltontec.xhr.send_xhr.call(null,id,uri,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body-parser","body-parser",1321837752),cljs.core.identity], null)));
});

tiltontec.xhr.send_unparsed_xhr.cljs$lang$maxFixedArity = 3;

tiltontec.xhr.synaptic_xhr_unparsed = (function tiltontec$xhr$synaptic_xhr_unparsed(var_args){
var G__22971 = arguments.length;
switch (G__22971) {
case 2:
return tiltontec.xhr.synaptic_xhr_unparsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tiltontec.xhr.synaptic_xhr_unparsed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.xhr.synaptic_xhr_unparsed.cljs$core$IFn$_invoke$arity$2 = (function (id,uri){
return tiltontec.xhr.synaptic_xhr_unparsed.call(null,id,uri,true);
});

tiltontec.xhr.synaptic_xhr_unparsed.cljs$core$IFn$_invoke$arity$3 = (function (id,uri,resolve_QMARK_){
var xhr = (function (){var existing_syn__21643__auto__ = tiltontec.cell.synapse.existing_syn.call(null,id);
var synapse__21644__auto__ = (function (){var or__6774__auto__ = existing_syn__21643__auto__;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var new_syn__21645__auto__ = (function (){return tiltontec.cell.core.make_c_formula.call(null,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tiltontec.cell.base._STAR_depender_STAR_)),new cljs.core.Keyword(null,"slot","slot",240229571),id,new cljs.core.Keyword(null,"synapse-id","synapse-id",-120388201),id,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"send-xhr","send-xhr",-1590948132,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"uri","uri",865819680,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body-parser","body-parser",1321837752),new cljs.core.Symbol(null,"identity","identity",-1007039734,null)], null))),new cljs.core.Keyword(null,"synaptic?","synaptic?",-2113061248),true,new cljs.core.Keyword(null,"rule","rule",729973257),((function (or__6774__auto__,existing_syn__21643__auto__){
return (function (slot_c_SHARP_){
var me = tiltontec.cell.base.c_model.call(null,slot_c_SHARP_);
var cell = slot_c_SHARP_;
var slot_name = tiltontec.cell.base.c_slot.call(null,slot_c_SHARP_);
var cache = tiltontec.cell.base.c_value.call(null,slot_c_SHARP_);
return tiltontec.xhr.send_xhr.call(null,id,uri,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body-parser","body-parser",1321837752),cljs.core.identity], null));
});})(or__6774__auto__,existing_syn__21643__auto__))
);
})();
tiltontec.util.core.rmap_setf.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synapses","synapses",-614206130),tiltontec.cell.base._STAR_depender_STAR_], null),cljs.core.conj.call(null,tiltontec.cell.base.c_synapses.call(null,tiltontec.cell.base._STAR_depender_STAR_),new_syn__21645__auto__));

tiltontec.cell.evaluate.record_dependency.call(null,new_syn__21645__auto__);

return new_syn__21645__auto__;
}
})();
var value__21646__auto__ = tiltontec.cell.integrity.call_with_integrity.call(null,null,null,((function (existing_syn__21643__auto__,synapse__21644__auto__){
return (function (opcode,defer_info){
return tiltontec.cell.evaluate.ensure_value_is_current.call(null,synapse__21644__auto__,new cljs.core.Keyword(null,"synapse","synapse",-1160900177),tiltontec.cell.base._STAR_depender_STAR_);
});})(existing_syn__21643__auto__,synapse__21644__auto__))
);
tiltontec.cell.evaluate.record_dependency.call(null,synapse__21644__auto__);

return value__21646__auto__;
})();
if(cljs.core.truth_((function (){var or__6774__auto__ = cljs.core.not.call(null,resolve_QMARK_);
if(or__6774__auto__){
return or__6774__auto__;
} else {
return tiltontec.model.core.md_get.call(null,xhr,new cljs.core.Keyword(null,"response","response",-1068424192));
}
})())){
return xhr;
} else {
return null;
}
});

tiltontec.xhr.synaptic_xhr_unparsed.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=xhr.js.map