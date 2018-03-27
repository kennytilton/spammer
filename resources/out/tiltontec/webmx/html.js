// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.html');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.pprint');
goog.require('tiltontec.util.base');
goog.require('tiltontec.util.core');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.observer');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
goog.require('tiltontec.webmx.style');
goog.require('goog.dom');
goog.require('goog.html.SafeHtml');
goog.require('goog.dom.classlist');
goog.require('goog.html.sanitizer.HtmlSanitizer');
goog.require('goog.editor.focus');
goog.require('goog.ui.Control');
goog.require('goog.dom.selection');
goog.require('goog.dom.forms');
goog.require('taoensso.tufte');
tiltontec.webmx.html._STAR_webmx_trace_STAR_ = false;
tiltontec.webmx.html.tagfo = (function tiltontec$webmx$html$tagfo(me){
if(typeof me === 'string'){
return "string";
} else {
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
}
});
tiltontec.webmx.html.dom_has_class = (function tiltontec$webmx$html$dom_has_class(dom,class$){
return goog.dom.classlist.contains(dom,class$);
});
tiltontec.webmx.html.dom_ancestor_by_class = (function tiltontec$webmx$html$dom_ancestor_by_class(dom,class$){
return goog.dom.getAncestorByTagNameAndClass(dom,null,class$);
});
tiltontec.webmx.html.dom_ancestor_by_tag = (function tiltontec$webmx$html$dom_ancestor_by_tag(dom,tag){
return goog.dom.getAncestorByTagNameAndClass(dom,tag);
});
tiltontec.webmx.html.map_less_nils = (function tiltontec$webmx$html$map_less_nils(m){
return cljs.core.apply.call(null,cljs.core.dissoc,m,(function (){var iter__7561__auto__ = (function tiltontec$webmx$html$map_less_nils_$_iter__22745(s__22746){
return (new cljs.core.LazySeq(null,(function (){
var s__22746__$1 = s__22746;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22746__$1);
if(temp__4657__auto__){
var s__22746__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22746__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__22746__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__22748 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__22747 = (0);
while(true){
if((i__22747 < size__7560__auto__)){
var vec__22749 = cljs.core._nth.call(null,c__7559__auto__,i__22747);
var k = cljs.core.nth.call(null,vec__22749,(0),null);
var v = cljs.core.nth.call(null,vec__22749,(1),null);
if((v == null)){
cljs.core.chunk_append.call(null,b__22748,k);

var G__22755 = (i__22747 + (1));
i__22747 = G__22755;
continue;
} else {
var G__22756 = (i__22747 + (1));
i__22747 = G__22756;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22748),tiltontec$webmx$html$map_less_nils_$_iter__22745.call(null,cljs.core.chunk_rest.call(null,s__22746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22748),null);
}
} else {
var vec__22752 = cljs.core.first.call(null,s__22746__$2);
var k = cljs.core.nth.call(null,vec__22752,(0),null);
var v = cljs.core.nth.call(null,vec__22752,(1),null);
if((v == null)){
return cljs.core.cons.call(null,k,tiltontec$webmx$html$map_less_nils_$_iter__22745.call(null,cljs.core.rest.call(null,s__22746__$2)));
} else {
var G__22757 = cljs.core.rest.call(null,s__22746__$2);
s__22746__$1 = G__22757;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,m);
})());
});
tiltontec.webmx.html.tag_dom = (function tiltontec$webmx$html$tag_dom(me){
var id = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

var or__6772__auto__ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"dom-cache","dom-cache",-2036866857));
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
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
tiltontec.webmx.html.tag_attrs = (function tiltontec$webmx$html$tag_attrs(mx){
var beef = cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7561__auto__ = (function tiltontec$webmx$html$tag_attrs_$_iter__22758(s__22759){
return (new cljs.core.LazySeq(null,(function (){
var s__22759__$1 = s__22759;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22759__$1);
if(temp__4657__auto__){
var s__22759__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22759__$2)){
var c__7559__auto__ = cljs.core.chunk_first.call(null,s__22759__$2);
var size__7560__auto__ = cljs.core.count.call(null,c__7559__auto__);
var b__22761 = cljs.core.chunk_buffer.call(null,size__7560__auto__);
if((function (){var i__22760 = (0);
while(true){
if((i__22760 < size__7560__auto__)){
var k = cljs.core._nth.call(null,c__7559__auto__,i__22760);
cljs.core.chunk_append.call(null,b__22761,(function (){var temp__4657__auto____$1 = tiltontec.model.core._LT_mget.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(function (){var G__22762 = k;
var G__22762__$1 = (((G__22762 instanceof cljs.core.Keyword))?G__22762.fqn:null);
switch (G__22762__$1) {
case "style":
return tiltontec.webmx.style.style_string.call(null,v);

break;
case "class":
if(cljs.core.coll_QMARK_.call(null,v)){
return clojure.string.join.call(null," ",v);
} else {
return v;
}

break;
default:
return v;

}
})()], null);
} else {
return null;
}
})());

var G__22765 = (i__22760 + (1));
i__22760 = G__22765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22761),tiltontec$webmx$html$tag_attrs_$_iter__22758.call(null,cljs.core.chunk_rest.call(null,s__22759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22761),null);
}
} else {
var k = cljs.core.first.call(null,s__22759__$2);
return cljs.core.cons.call(null,(function (){var temp__4657__auto____$1 = tiltontec.model.core._LT_mget.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(function (){var G__22763 = k;
var G__22763__$1 = (((G__22763 instanceof cljs.core.Keyword))?G__22763.fqn:null);
switch (G__22763__$1) {
case "style":
return tiltontec.webmx.style.style_string.call(null,v);

break;
case "class":
if(cljs.core.coll_QMARK_.call(null,v)){
return clojure.string.join.call(null," ",v);
} else {
return v;
}

break;
default:
return v;

}
})()], null);
} else {
return null;
}
})(),tiltontec$webmx$html$tag_attrs_$_iter__22758.call(null,cljs.core.rest.call(null,s__22759__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7561__auto__.call(null,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mx)));
})());
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.apply.call(null,cljs.core.concat,beef));
});
tiltontec.webmx.html.tag_dom_create = (function tiltontec$webmx$html$tag_dom_create(var_args){
var G__22769 = arguments.length;
switch (G__22769) {
case 1:
return tiltontec.webmx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tiltontec.webmx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tiltontec.webmx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$1 = (function (me){
return tiltontec.webmx.html.tag_dom_create.call(null,me,false);
});

tiltontec.webmx.html.tag_dom_create.cljs$core$IFn$_invoke$arity$2 = (function (me,dbg){
if(typeof me === 'string'){
return goog.dom.safeHtmlToNode(goog.html.sanitizer.HtmlSanitizer.sanitize(me));
} else {
if(cljs.core.coll_QMARK_.call(null,me)){
var frag = document.createDocumentFragment();
var seq__22770_22775 = cljs.core.seq.call(null,me);
var chunk__22771_22776 = null;
var count__22772_22777 = (0);
var i__22773_22778 = (0);
while(true){
if((i__22773_22778 < count__22772_22777)){
var tag_22779 = cljs.core._nth.call(null,chunk__22771_22776,i__22773_22778);
if(cljs.core.truth_(tag_22779)){
goog.dom.appendChild(frag,tiltontec.webmx.html.tag_dom_create.call(null,tag_22779));
} else {
}

var G__22780 = seq__22770_22775;
var G__22781 = chunk__22771_22776;
var G__22782 = count__22772_22777;
var G__22783 = (i__22773_22778 + (1));
seq__22770_22775 = G__22780;
chunk__22771_22776 = G__22781;
count__22772_22777 = G__22782;
i__22773_22778 = G__22783;
continue;
} else {
var temp__4657__auto___22784 = cljs.core.seq.call(null,seq__22770_22775);
if(temp__4657__auto___22784){
var seq__22770_22785__$1 = temp__4657__auto___22784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22770_22785__$1)){
var c__7592__auto___22786 = cljs.core.chunk_first.call(null,seq__22770_22785__$1);
var G__22787 = cljs.core.chunk_rest.call(null,seq__22770_22785__$1);
var G__22788 = c__7592__auto___22786;
var G__22789 = cljs.core.count.call(null,c__7592__auto___22786);
var G__22790 = (0);
seq__22770_22775 = G__22787;
chunk__22771_22776 = G__22788;
count__22772_22777 = G__22789;
i__22773_22778 = G__22790;
continue;
} else {
var tag_22791 = cljs.core.first.call(null,seq__22770_22785__$1);
if(cljs.core.truth_(tag_22791)){
goog.dom.appendChild(frag,tiltontec.webmx.html.tag_dom_create.call(null,tag_22791));
} else {
}

var G__22792 = cljs.core.next.call(null,seq__22770_22785__$1);
var G__22793 = null;
var G__22794 = (0);
var G__22795 = (0);
seq__22770_22775 = G__22792;
chunk__22771_22776 = G__22793;
count__22772_22777 = G__22794;
i__22773_22778 = G__22795;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
var temp__4657__auto___22796 = (function (){var or__6772__auto__ = dbg;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return tiltontec.webmx.html._STAR_webmx_trace_STAR_;
}
})();
if(cljs.core.truth_(temp__4657__auto___22796)){
var dbg_22797__$1 = temp__4657__auto___22796;
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"tag-dom-create","tag-dom-create",1943906167),dbg_22797__$1,tiltontec.webmx.html.tagfo.call(null,me));
} else {
}

var dom = cljs.core.apply.call(null,goog.dom.createDom,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)),tiltontec.webmx.html.tag_attrs.call(null,me),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__22767_SHARP_){
return tiltontec.webmx.html.tag_dom_create.call(null,p1__22767_SHARP_,dbg);
}),tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"kids","kids",1156670771))),(function (){var temp__4657__auto__ = tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(temp__4657__auto__)){
var c = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tiltontec.webmx.html.tag_dom_create.call(null,c)], null);
} else {
return null;
}
})()));
return dom;

}
}
});

tiltontec.webmx.html.tag_dom_create.cljs$lang$maxFixedArity = 2;

tiltontec.webmx.html._PLUS_true_html_PLUS_ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tiltontec.webmx.html","type","tiltontec.webmx.html/type",-686122626),"type"], null);
tiltontec.webmx.html.true_html = (function tiltontec$webmx$html$true_html(keyword){
var or__6772__auto__ = keyword.call(null,tiltontec.webmx.html._PLUS_true_html_PLUS_);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.name.call(null,keyword);
}
});
tiltontec.webmx.html.tag = (function tiltontec$webmx$html$tag(me){
return tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223));
});
tiltontec.webmx.html.tag_QMARK_ = (function tiltontec$webmx$html$tag_QMARK_(me){
return cljs.core._EQ_.call(null,tiltontec.util.base.type_cljc.call(null,me),new cljs.core.Keyword("tiltontec.webmx.base","tag","tiltontec.webmx.base/tag",1307508641));
});
cljs.core._add_method.call(null,tiltontec.cell.observer.observe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kids","kids",1156670771),new cljs.core.Keyword("tiltontec.webmx.base","tag","tiltontec.webmx.base/tag",1307508641)], null),(function (_,me,newv,oldv,___$1){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var pdom = tiltontec.webmx.html.tag_dom.call(null,me);
var lost = clojure.set.difference.call(null,cljs.core.set.call(null,oldv),cljs.core.set.call(null,newv));
var gained = clojure.set.difference.call(null,cljs.core.set.call(null,newv),cljs.core.set.call(null,oldv));
if(cljs.core.empty_QMARK_.call(null,gained)){
var seq__22798 = cljs.core.seq.call(null,lost);
var chunk__22799 = null;
var count__22800 = (0);
var i__22801 = (0);
while(true){
if((i__22801 < count__22800)){
var oldk = cljs.core._nth.call(null,chunk__22799,i__22801);
pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-dropping","obs-tag-kids-dropping",-1908908283),tiltontec.webmx.html.tagfo.call(null,oldk));

tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__22810 = seq__22798;
var G__22811 = chunk__22799;
var G__22812 = count__22800;
var G__22813 = (i__22801 + (1));
seq__22798 = G__22810;
chunk__22799 = G__22811;
count__22800 = G__22812;
i__22801 = G__22813;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22798);
if(temp__4657__auto__){
var seq__22798__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22798__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__22798__$1);
var G__22814 = cljs.core.chunk_rest.call(null,seq__22798__$1);
var G__22815 = c__7592__auto__;
var G__22816 = cljs.core.count.call(null,c__7592__auto__);
var G__22817 = (0);
seq__22798 = G__22814;
chunk__22799 = G__22815;
count__22800 = G__22816;
i__22801 = G__22817;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__22798__$1);
pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-dropping","obs-tag-kids-dropping",-1908908283),tiltontec.webmx.html.tagfo.call(null,oldk));

tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__22818 = cljs.core.next.call(null,seq__22798__$1);
var G__22819 = null;
var G__22820 = (0);
var G__22821 = (0);
seq__22798 = G__22818;
chunk__22799 = G__22819;
count__22800 = G__22820;
i__22801 = G__22821;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var frag = document.createDocumentFragment();
var seq__22802_22822 = cljs.core.seq.call(null,lost);
var chunk__22803_22823 = null;
var count__22804_22824 = (0);
var i__22805_22825 = (0);
while(true){
if((i__22805_22825 < count__22804_22824)){
var oldk_22826 = cljs.core._nth.call(null,chunk__22803_22823,i__22805_22825);
if(typeof oldk_22826 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_22826);
}

var G__22827 = seq__22802_22822;
var G__22828 = chunk__22803_22823;
var G__22829 = count__22804_22824;
var G__22830 = (i__22805_22825 + (1));
seq__22802_22822 = G__22827;
chunk__22803_22823 = G__22828;
count__22804_22824 = G__22829;
i__22805_22825 = G__22830;
continue;
} else {
var temp__4657__auto___22831 = cljs.core.seq.call(null,seq__22802_22822);
if(temp__4657__auto___22831){
var seq__22802_22832__$1 = temp__4657__auto___22831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22802_22832__$1)){
var c__7592__auto___22833 = cljs.core.chunk_first.call(null,seq__22802_22832__$1);
var G__22834 = cljs.core.chunk_rest.call(null,seq__22802_22832__$1);
var G__22835 = c__7592__auto___22833;
var G__22836 = cljs.core.count.call(null,c__7592__auto___22833);
var G__22837 = (0);
seq__22802_22822 = G__22834;
chunk__22803_22823 = G__22835;
count__22804_22824 = G__22836;
i__22805_22825 = G__22837;
continue;
} else {
var oldk_22838 = cljs.core.first.call(null,seq__22802_22832__$1);
if(typeof oldk_22838 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_22838);
}

var G__22839 = cljs.core.next.call(null,seq__22802_22832__$1);
var G__22840 = null;
var G__22841 = (0);
var G__22842 = (0);
seq__22802_22822 = G__22839;
chunk__22803_22823 = G__22840;
count__22804_22824 = G__22841;
i__22805_22825 = G__22842;
continue;
}
} else {
}
}
break;
}

var seq__22806_22843 = cljs.core.seq.call(null,newv);
var chunk__22807_22844 = null;
var count__22808_22845 = (0);
var i__22809_22846 = (0);
while(true){
if((i__22809_22846 < count__22808_22845)){
var newk_22847 = cljs.core._nth.call(null,chunk__22807_22844,i__22809_22846);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22847]),oldv))?pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,newk_22847)):(function (){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-building-new-dom","obs-tag-kids-building-new-dom",-1849437170),tiltontec.webmx.html.tagfo.call(null,newk_22847));

return tiltontec.webmx.html.tag_dom_create.call(null,newk_22847);
})()
));

var G__22848 = seq__22806_22843;
var G__22849 = chunk__22807_22844;
var G__22850 = count__22808_22845;
var G__22851 = (i__22809_22846 + (1));
seq__22806_22843 = G__22848;
chunk__22807_22844 = G__22849;
count__22808_22845 = G__22850;
i__22809_22846 = G__22851;
continue;
} else {
var temp__4657__auto___22852 = cljs.core.seq.call(null,seq__22806_22843);
if(temp__4657__auto___22852){
var seq__22806_22853__$1 = temp__4657__auto___22852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22806_22853__$1)){
var c__7592__auto___22854 = cljs.core.chunk_first.call(null,seq__22806_22853__$1);
var G__22855 = cljs.core.chunk_rest.call(null,seq__22806_22853__$1);
var G__22856 = c__7592__auto___22854;
var G__22857 = cljs.core.count.call(null,c__7592__auto___22854);
var G__22858 = (0);
seq__22806_22843 = G__22855;
chunk__22807_22844 = G__22856;
count__22808_22845 = G__22857;
i__22809_22846 = G__22858;
continue;
} else {
var newk_22859 = cljs.core.first.call(null,seq__22806_22853__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_22859]),oldv))?pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,newk_22859)):(function (){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-building-new-dom","obs-tag-kids-building-new-dom",-1849437170),tiltontec.webmx.html.tagfo.call(null,newk_22859));

return tiltontec.webmx.html.tag_dom_create.call(null,newk_22859);
})()
));

var G__22860 = cljs.core.next.call(null,seq__22806_22853__$1);
var G__22861 = null;
var G__22862 = (0);
var G__22863 = (0);
seq__22806_22843 = G__22860;
chunk__22807_22844 = G__22861;
count__22808_22845 = G__22862;
i__22809_22846 = G__22863;
continue;
}
} else {
}
}
break;
}

goog.dom.removeChildren(pdom);

return goog.dom.appendChild(pdom,frag);

}
} else {
return null;
}
}));
tiltontec.webmx.html._PLUS_inline_css_PLUS_ = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display","display",242065432)], null));
cljs.core._add_method.call(null,tiltontec.cell.observer.observe_by_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.webmx.base","tag","tiltontec.webmx.base/tag",1307508641)], null),(function (slot,me,newv,oldv,_){
if(cljs.core.not_EQ_.call(null,oldv,tiltontec.cell.base.unbound)){
var temp__4657__auto__ = tiltontec.webmx.html.tag_dom.call(null,me);
if(cljs.core.truth_(temp__4657__auto__)){
var dom = temp__4657__auto__;
if(tiltontec.webmx.html._STAR_webmx_trace_STAR_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null)))){
} else {
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"observing-tagtype","observing-tagtype",1053683678),tiltontec.webmx.html.tagfo.call(null,me),slot,newv,oldv);
}
} else {
}

if(cljs.core._EQ_.call(null,slot,new cljs.core.Keyword(null,"content","content",15833224))){
return window.requestAnimationFrame(((function (dom,temp__4657__auto__){
return (function (){
return dom.innerHTML = newv;
});})(dom,temp__4657__auto__))
);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([slot]),new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me))))){
var G__22864 = slot;
var G__22864__$1 = (((G__22864 instanceof cljs.core.Keyword))?G__22864.fqn:null);
switch (G__22864__$1) {
case "style":
return dom.style = tiltontec.webmx.style.style_string.call(null,newv);

break;
case "hidden":
return dom.hidden = newv;

break;
case "class":
return goog.dom.classlist.set(dom,((cljs.core.sequential_QMARK_.call(null,newv))?clojure.string.join.call(null," ",newv):newv));

break;
case "checked":
return dom.checked = newv;

break;
default:
return dom.setAttribute(cljs.core.name.call(null,slot),newv);

}
} else {
if(cljs.core.truth_(tiltontec.webmx.html._PLUS_inline_css_PLUS_.call(null,slot))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("webmx obs sees oldskool style: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')));
} else {
return null;
}
}
}
} else {
return null;
}
} else {
return null;
}
}));
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.webmx.html.mxu_find_class = (function tiltontec$webmx$html$mxu_find_class(where,class$){
return tiltontec.model.core.fget.call(null,(function (p1__22866_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,class$),tiltontec.model.core._LT_mget.call(null,p1__22866_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.webmx.html.mxu_find_tag = (function tiltontec$webmx$html$mxu_find_tag(where,tag){
return tiltontec.model.core.fget.call(null,(function (p1__22867_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,tag),tiltontec.model.core._LT_mget.call(null,p1__22867_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.webmx.html.mxu_find_id = (function tiltontec$webmx$html$mxu_find_id(where,id){
return tiltontec.model.core.fget.call(null,(function (p1__22868_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,id),tiltontec.model.core._LT_mget.call(null,p1__22868_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
tiltontec.webmx.html.io_upsert = (function tiltontec$webmx$html$io_upsert(key,val){
return window.localStorage.setItem(key,val);
});
tiltontec.webmx.html.io_read = (function tiltontec$webmx$html$io_read(key){
return window.localStorage.getItem(key);
});
tiltontec.webmx.html.io_delete = (function tiltontec$webmx$html$io_delete(key){
return window.localStorage.removeItem(key);
});
tiltontec.webmx.html.io_clear_storage = (function tiltontec$webmx$html$io_clear_storage(){
return window.localStorage.clear();
});
tiltontec.webmx.html.io_all_keys = (function tiltontec$webmx$html$io_all_keys(){
return Object.keys(window.localStorage);
});
tiltontec.webmx.html.io_find = (function tiltontec$webmx$html$io_find(key_prefix){
var keys = tiltontec.webmx.html.io_all_keys.call(null);
var found = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,keys)){
var G__22869 = cljs.core.rest.call(null,keys);
var G__22870 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__22869;
found = G__22870;
continue;
} else {
return found;
}
break;
}
});
tiltontec.webmx.html.io_truncate = (function tiltontec$webmx$html$io_truncate(key_prefix){
var seq__22871 = cljs.core.seq.call(null,tiltontec.webmx.html.io_find.call(null,key_prefix));
var chunk__22872 = null;
var count__22873 = (0);
var i__22874 = (0);
while(true){
if((i__22874 < count__22873)){
var key = cljs.core._nth.call(null,chunk__22872,i__22874);
tiltontec.webmx.html.io_delete.call(null,key);

var G__22875 = seq__22871;
var G__22876 = chunk__22872;
var G__22877 = count__22873;
var G__22878 = (i__22874 + (1));
seq__22871 = G__22875;
chunk__22872 = G__22876;
count__22873 = G__22877;
i__22874 = G__22878;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22871);
if(temp__4657__auto__){
var seq__22871__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22871__$1)){
var c__7592__auto__ = cljs.core.chunk_first.call(null,seq__22871__$1);
var G__22879 = cljs.core.chunk_rest.call(null,seq__22871__$1);
var G__22880 = c__7592__auto__;
var G__22881 = cljs.core.count.call(null,c__7592__auto__);
var G__22882 = (0);
seq__22871 = G__22879;
chunk__22872 = G__22880;
count__22873 = G__22881;
i__22874 = G__22882;
continue;
} else {
var key = cljs.core.first.call(null,seq__22871__$1);
tiltontec.webmx.html.io_delete.call(null,key);

var G__22883 = cljs.core.next.call(null,seq__22871__$1);
var G__22884 = null;
var G__22885 = (0);
var G__22886 = (0);
seq__22871 = G__22883;
chunk__22872 = G__22884;
count__22873 = G__22885;
i__22874 = G__22886;
continue;
}
} else {
return null;
}
}
break;
}
});
tiltontec.webmx.html.input_editing_start = (function tiltontec$webmx$html$input_editing_start(dom,initial_value){
goog.dom.forms.setValue(dom,initial_value);

goog.editor.focus.focusInputField(dom);

goog.dom.selection.setStart(dom,(0));

return goog.dom.selection.setEnd(dom,cljs.core.count.call(null,initial_value));
});

//# sourceMappingURL=html.js.map