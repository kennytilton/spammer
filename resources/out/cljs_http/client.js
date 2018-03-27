// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6760__auto__ = v;
if(cljs.core.truth_(and__6760__auto__)){
return (v > (0));
} else {
return and__6760__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__28271_SHARP_,p2__28270_SHARP_){
var vec__28272 = clojure.string.split.call(null,p2__28270_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__28272,(0),null);
var v = cljs.core.nth.call(null,vec__28272,(1),null);
return cljs.core.assoc.call(null,p1__28271_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__28275_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__28275_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__28276){
var vec__28277 = p__28276;
var k = cljs.core.nth.call(null,vec__28277,(0),null);
var v = cljs.core.nth.call(null,vec__28277,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__28280_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28280_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6760__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6760__auto__){
var and__6760__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6760__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6760__auto____$1;
}
} else {
return and__6760__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__28281_SHARP_){
return cljs_http.client.decode_body.call(null,p1__28281_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28288 = arguments.length;
var i__7898__auto___28289 = (0);
while(true){
if((i__7898__auto___28289 < len__7897__auto___28288)){
args__7904__auto__.push((arguments[i__7898__auto___28289]));

var G__28290 = (i__7898__auto___28289 + (1));
i__7898__auto___28289 = G__28290;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__28284){
var vec__28285 = p__28284;
var default_headers = cljs.core.nth.call(null,vec__28285,(0),null);
return ((function (vec__28285,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6772__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__28285,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq28282){
var G__28283 = cljs.core.first.call(null,seq28282);
var seq28282__$1 = cljs.core.next.call(null,seq28282);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__28283,seq28282__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28297 = arguments.length;
var i__7898__auto___28298 = (0);
while(true){
if((i__7898__auto___28298 < len__7897__auto___28297)){
args__7904__auto__.push((arguments[i__7898__auto___28298]));

var G__28299 = (i__7898__auto___28298 + (1));
i__7898__auto___28298 = G__28299;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__28293){
var vec__28294 = p__28293;
var accept = cljs.core.nth.call(null,vec__28294,(0),null);
return ((function (vec__28294,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6772__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__28294,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq28291){
var G__28292 = cljs.core.first.call(null,seq28291);
var seq28291__$1 = cljs.core.next.call(null,seq28291);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__28292,seq28291__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28306 = arguments.length;
var i__7898__auto___28307 = (0);
while(true){
if((i__7898__auto___28307 < len__7897__auto___28306)){
args__7904__auto__.push((arguments[i__7898__auto___28307]));

var G__28308 = (i__7898__auto___28307 + (1));
i__7898__auto___28307 = G__28308;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__28302){
var vec__28303 = p__28302;
var content_type = cljs.core.nth.call(null,vec__28303,(0),null);
return ((function (vec__28303,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6772__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__28303,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq28300){
var G__28301 = cljs.core.first.call(null,seq28300);
var seq28300__$1 = cljs.core.next.call(null,seq28300);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__28301,seq28300__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__28309 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__28309__$1 = ((((!((map__28309 == null)))?((((map__28309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28309):map__28309);
var encoding = cljs.core.get.call(null,map__28309__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__28309__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__28313 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__28313__$1 = ((((!((map__28313 == null)))?((((map__28313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var decoding = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__28313,map__28313__$1,decoding,decoding_opts){
return (function (p1__28311_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__28311_SHARP_,decoding,decoding_opts);
});})(map__28313,map__28313__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__28313,map__28313__$1,decoding,decoding_opts,transit_decode){
return (function (p1__28312_SHARP_){
return cljs_http.client.decode_body.call(null,p1__28312_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__28313,map__28313__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__28315_SHARP_){
return cljs_http.client.decode_body.call(null,p1__28315_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__28316){
var map__28317 = p__28316;
var map__28317__$1 = ((((!((map__28317 == null)))?((((map__28317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var req = map__28317__$1;
var query_params = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__28319){
var map__28320 = p__28319;
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var request = map__28320__$1;
var form_params = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6760__auto__ = form_params;
if(cljs.core.truth_(and__6760__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6760__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__28322_28332 = cljs.core.seq.call(null,params);
var chunk__28323_28333 = null;
var count__28324_28334 = (0);
var i__28325_28335 = (0);
while(true){
if((i__28325_28335 < count__28324_28334)){
var vec__28326_28336 = cljs.core._nth.call(null,chunk__28323_28333,i__28325_28335);
var k_28337 = cljs.core.nth.call(null,vec__28326_28336,(0),null);
var v_28338 = cljs.core.nth.call(null,vec__28326_28336,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_28338)){
form_data.append(cljs.core.name.call(null,k_28337),cljs.core.first.call(null,v_28338),cljs.core.second.call(null,v_28338));
} else {
form_data.append(cljs.core.name.call(null,k_28337),v_28338);
}

var G__28339 = seq__28322_28332;
var G__28340 = chunk__28323_28333;
var G__28341 = count__28324_28334;
var G__28342 = (i__28325_28335 + (1));
seq__28322_28332 = G__28339;
chunk__28323_28333 = G__28340;
count__28324_28334 = G__28341;
i__28325_28335 = G__28342;
continue;
} else {
var temp__4657__auto___28343 = cljs.core.seq.call(null,seq__28322_28332);
if(temp__4657__auto___28343){
var seq__28322_28344__$1 = temp__4657__auto___28343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28322_28344__$1)){
var c__7592__auto___28345 = cljs.core.chunk_first.call(null,seq__28322_28344__$1);
var G__28346 = cljs.core.chunk_rest.call(null,seq__28322_28344__$1);
var G__28347 = c__7592__auto___28345;
var G__28348 = cljs.core.count.call(null,c__7592__auto___28345);
var G__28349 = (0);
seq__28322_28332 = G__28346;
chunk__28323_28333 = G__28347;
count__28324_28334 = G__28348;
i__28325_28335 = G__28349;
continue;
} else {
var vec__28329_28350 = cljs.core.first.call(null,seq__28322_28344__$1);
var k_28351 = cljs.core.nth.call(null,vec__28329_28350,(0),null);
var v_28352 = cljs.core.nth.call(null,vec__28329_28350,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_28352)){
form_data.append(cljs.core.name.call(null,k_28351),cljs.core.first.call(null,v_28352),cljs.core.second.call(null,v_28352));
} else {
form_data.append(cljs.core.name.call(null,k_28351),v_28352);
}

var G__28353 = cljs.core.next.call(null,seq__28322_28344__$1);
var G__28354 = null;
var G__28355 = (0);
var G__28356 = (0);
seq__28322_28332 = G__28353;
chunk__28323_28333 = G__28354;
count__28324_28334 = G__28355;
i__28325_28335 = G__28356;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__28357){
var map__28358 = p__28357;
var map__28358__$1 = ((((!((map__28358 == null)))?((((map__28358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28358):map__28358);
var request = map__28358__$1;
var multipart_params = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__28358__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6760__auto__ = multipart_params;
if(cljs.core.truth_(and__6760__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6760__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__28360_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__28360_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__28362){
var map__28363 = p__28362;
var map__28363__$1 = ((((!((map__28363 == null)))?((((map__28363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28363):map__28363);
var req = map__28363__$1;
var query_params = cljs.core.get.call(null,map__28363__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__28363,map__28363__$1,req,query_params){
return (function (p1__28361_SHARP_){
return cljs.core.merge.call(null,p1__28361_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__28363,map__28363__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28371 = arguments.length;
var i__7898__auto___28372 = (0);
while(true){
if((i__7898__auto___28372 < len__7897__auto___28371)){
args__7904__auto__.push((arguments[i__7898__auto___28372]));

var G__28373 = (i__7898__auto___28372 + (1));
i__7898__auto___28372 = G__28373;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__28367){
var vec__28368 = p__28367;
var credentials = cljs.core.nth.call(null,vec__28368,(0),null);
return ((function (vec__28368,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6772__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__28368,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq28365){
var G__28366 = cljs.core.first.call(null,seq28365);
var seq28365__$1 = cljs.core.next.call(null,seq28365);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__28366,seq28365__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28380 = arguments.length;
var i__7898__auto___28381 = (0);
while(true){
if((i__7898__auto___28381 < len__7897__auto___28380)){
args__7904__auto__.push((arguments[i__7898__auto___28381]));

var G__28382 = (i__7898__auto___28381 + (1));
i__7898__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28376){
var vec__28377 = p__28376;
var req = cljs.core.nth.call(null,vec__28377,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq28374){
var G__28375 = cljs.core.first.call(null,seq28374);
var seq28374__$1 = cljs.core.next.call(null,seq28374);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__28375,seq28374__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28389 = arguments.length;
var i__7898__auto___28390 = (0);
while(true){
if((i__7898__auto___28390 < len__7897__auto___28389)){
args__7904__auto__.push((arguments[i__7898__auto___28390]));

var G__28391 = (i__7898__auto___28390 + (1));
i__7898__auto___28390 = G__28391;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28385){
var vec__28386 = p__28385;
var req = cljs.core.nth.call(null,vec__28386,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq28383){
var G__28384 = cljs.core.first.call(null,seq28383);
var seq28383__$1 = cljs.core.next.call(null,seq28383);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__28384,seq28383__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28398 = arguments.length;
var i__7898__auto___28399 = (0);
while(true){
if((i__7898__auto___28399 < len__7897__auto___28398)){
args__7904__auto__.push((arguments[i__7898__auto___28399]));

var G__28400 = (i__7898__auto___28399 + (1));
i__7898__auto___28399 = G__28400;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28394){
var vec__28395 = p__28394;
var req = cljs.core.nth.call(null,vec__28395,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq28392){
var G__28393 = cljs.core.first.call(null,seq28392);
var seq28392__$1 = cljs.core.next.call(null,seq28392);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__28393,seq28392__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28407 = arguments.length;
var i__7898__auto___28408 = (0);
while(true){
if((i__7898__auto___28408 < len__7897__auto___28407)){
args__7904__auto__.push((arguments[i__7898__auto___28408]));

var G__28409 = (i__7898__auto___28408 + (1));
i__7898__auto___28408 = G__28409;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28403){
var vec__28404 = p__28403;
var req = cljs.core.nth.call(null,vec__28404,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq28401){
var G__28402 = cljs.core.first.call(null,seq28401);
var seq28401__$1 = cljs.core.next.call(null,seq28401);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__28402,seq28401__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28416 = arguments.length;
var i__7898__auto___28417 = (0);
while(true){
if((i__7898__auto___28417 < len__7897__auto___28416)){
args__7904__auto__.push((arguments[i__7898__auto___28417]));

var G__28418 = (i__7898__auto___28417 + (1));
i__7898__auto___28417 = G__28418;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28412){
var vec__28413 = p__28412;
var req = cljs.core.nth.call(null,vec__28413,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq28410){
var G__28411 = cljs.core.first.call(null,seq28410);
var seq28410__$1 = cljs.core.next.call(null,seq28410);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__28411,seq28410__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28425 = arguments.length;
var i__7898__auto___28426 = (0);
while(true){
if((i__7898__auto___28426 < len__7897__auto___28425)){
args__7904__auto__.push((arguments[i__7898__auto___28426]));

var G__28427 = (i__7898__auto___28426 + (1));
i__7898__auto___28426 = G__28427;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28421){
var vec__28422 = p__28421;
var req = cljs.core.nth.call(null,vec__28422,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq28419){
var G__28420 = cljs.core.first.call(null,seq28419);
var seq28419__$1 = cljs.core.next.call(null,seq28419);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__28420,seq28419__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28434 = arguments.length;
var i__7898__auto___28435 = (0);
while(true){
if((i__7898__auto___28435 < len__7897__auto___28434)){
args__7904__auto__.push((arguments[i__7898__auto___28435]));

var G__28436 = (i__7898__auto___28435 + (1));
i__7898__auto___28435 = G__28436;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28430){
var vec__28431 = p__28430;
var req = cljs.core.nth.call(null,vec__28431,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq28428){
var G__28429 = cljs.core.first.call(null,seq28428);
var seq28428__$1 = cljs.core.next.call(null,seq28428);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__28429,seq28428__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28443 = arguments.length;
var i__7898__auto___28444 = (0);
while(true){
if((i__7898__auto___28444 < len__7897__auto___28443)){
args__7904__auto__.push((arguments[i__7898__auto___28444]));

var G__28445 = (i__7898__auto___28444 + (1));
i__7898__auto___28444 = G__28445;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28439){
var vec__28440 = p__28439;
var req = cljs.core.nth.call(null,vec__28440,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq28437){
var G__28438 = cljs.core.first.call(null,seq28437);
var seq28437__$1 = cljs.core.next.call(null,seq28437);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__28438,seq28437__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7904__auto__ = [];
var len__7897__auto___28452 = arguments.length;
var i__7898__auto___28453 = (0);
while(true){
if((i__7898__auto___28453 < len__7897__auto___28452)){
args__7904__auto__.push((arguments[i__7898__auto___28453]));

var G__28454 = (i__7898__auto___28453 + (1));
i__7898__auto___28453 = G__28454;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__28448){
var vec__28449 = p__28448;
var req = cljs.core.nth.call(null,vec__28449,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq28446){
var G__28447 = cljs.core.first.call(null,seq28446);
var seq28446__$1 = cljs.core.next.call(null,seq28446);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__28447,seq28446__$1);
});


//# sourceMappingURL=client.js.map