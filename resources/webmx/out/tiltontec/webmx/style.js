// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.style');
goog.require('cljs.core');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.base');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('clojure.string');
tiltontec.webmx.style.tag_dom = (function tiltontec$webmx$style$tag_dom(me){
var id = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6774__auto__ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
var temp__4655__auto__ = goog.dom.getElement([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__4655__auto__)){
var dom = temp__4655__auto__;
return tiltontec.model.core.backdoor_reset_BANG_.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857),dom);
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"no-element","no-element",470772656),id,new cljs.core.Keyword(null,"found","found",-584700170));
}
}
});
tiltontec.webmx.style.make_css_inline = (function tiltontec$webmx$style$make_css_inline(var_args){
var args__7906__auto__ = [];
var len__7899__auto___21691 = arguments.length;
var i__7900__auto___21692 = (0);
while(true){
if((i__7900__auto___21692 < len__7899__auto___21691)){
args__7906__auto__.push((arguments[i__7900__auto___21692]));

var G__21693 = (i__7900__auto___21692 + (1));
i__7900__auto___21692 = G__21693;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((1) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((1)),(0),null)):null);
return tiltontec.webmx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7907__auto__);
});

tiltontec.webmx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic = (function (tag,stylings){
if(cljs.core.truth_(tiltontec.webmx.base.tag_QMARK_.call(null,tag))){
} else {
throw (new Error("Assert failed: (tag? tag)"));
}

return cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.css","css","tiltontec.webmx.css/css",-258560441),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"css-keys","css-keys",876048944),(function (){var iter__7563__auto__ = (function tiltontec$webmx$style$iter__21681(s__21682){
return (new cljs.core.LazySeq(null,(function (){
var s__21682__$1 = s__21682;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21682__$1);
if(temp__4657__auto__){
var s__21682__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21682__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__21682__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__21684 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__21683 = (0);
while(true){
if((i__21683 < size__7562__auto__)){
var vec__21685 = cljs.core._nth.call(null,c__7561__auto__,i__21683);
var k = cljs.core.nth.call(null,vec__21685,(0),null);
var _ = cljs.core.nth.call(null,vec__21685,(1),null);
cljs.core.chunk_append.call(null,b__21684,k);

var G__21694 = (i__21683 + (1));
i__21683 = G__21694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21684),tiltontec$webmx$style$iter__21681.call(null,cljs.core.chunk_rest.call(null,s__21682__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21684),null);
}
} else {
var vec__21688 = cljs.core.first.call(null,s__21682__$2);
var k = cljs.core.nth.call(null,vec__21688,(0),null);
var _ = cljs.core.nth.call(null,vec__21688,(1),null);
return cljs.core.cons.call(null,k,tiltontec$webmx$style$iter__21681.call(null,cljs.core.rest.call(null,s__21682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__.call(null,cljs.core.partition.call(null,(2),stylings));
})(),stylings);
});

tiltontec.webmx.style.make_css_inline.cljs$lang$maxFixedArity = (1);

tiltontec.webmx.style.make_css_inline.cljs$lang$applyTo = (function (seq21679){
var G__21680 = cljs.core.first.call(null,seq21679);
var seq21679__$1 = cljs.core.next.call(null,seq21679);
return tiltontec.webmx.style.make_css_inline.cljs$core$IFn$_invoke$arity$variadic(G__21680,seq21679__$1);
});

tiltontec.webmx.style.style_string = (function tiltontec$webmx$style$style_string(s){
if(typeof s === 'string'){
return s;
} else {
if(cljs.core.map_QMARK_.call(null,s)){
return clojure.string.join.call(null,";",(function (){var iter__7563__auto__ = (function tiltontec$webmx$style$style_string_$_iter__21695(s__21696){
return (new cljs.core.LazySeq(null,(function (){
var s__21696__$1 = s__21696;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21696__$1);
if(temp__4657__auto__){
var s__21696__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21696__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__21696__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__21698 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__21697 = (0);
while(true){
if((i__21697 < size__7562__auto__)){
var vec__21699 = cljs.core._nth.call(null,c__7561__auto__,i__21697);
var k = cljs.core.nth.call(null,vec__21699,(0),null);
var v = cljs.core.nth.call(null,vec__21699,(1),null);
cljs.core.chunk_append.call(null,b__21698,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v));

var G__21705 = (i__21697 + (1));
i__21697 = G__21705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),tiltontec$webmx$style$style_string_$_iter__21695.call(null,cljs.core.chunk_rest.call(null,s__21696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21698),null);
}
} else {
var vec__21702 = cljs.core.first.call(null,s__21696__$2);
var k = cljs.core.nth.call(null,vec__21702,(0),null);
var v = cljs.core.nth.call(null,vec__21702,(1),null);
return cljs.core.cons.call(null,cljs.pprint.cl_format.call(null,null,"~a:~a",cljs.core.name.call(null,k),v),tiltontec$webmx$style$style_string_$_iter__21695.call(null,cljs.core.rest.call(null,s__21696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__.call(null,s);
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("tiltontec.webmx.css","css","tiltontec.webmx.css/css",-258560441),tiltontec.cell.base.ia_type.call(null,s))){
return tiltontec.webmx.style.style_string.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,s),new cljs.core.Keyword(null,"css-keys","css-keys",876048944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))));
} else {
return cljs.core.println.call(null,new cljs.core.Keyword(null,"ss-unknown","ss-unknown",-2022604565),cljs.core.type.call(null,s));

}
}
}
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.webmx.css","css","tiltontec.webmx.css/css",-258560441)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var dom = tiltontec.webmx.style.tag_dom.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
return goog.style.setStyle(dom,cljs.core.name.call(null,slot),newv);
} else {
return null;
}
}));

//# sourceMappingURL=style.js.map