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
return cljs.core.apply.call(null,cljs.core.dissoc,m,(function (){var iter__7563__auto__ = (function tiltontec$webmx$html$map_less_nils_$_iter__21708(s__21709){
return (new cljs.core.LazySeq(null,(function (){
var s__21709__$1 = s__21709;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21709__$1);
if(temp__4657__auto__){
var s__21709__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21709__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__21709__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__21711 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__21710 = (0);
while(true){
if((i__21710 < size__7562__auto__)){
var vec__21712 = cljs.core._nth.call(null,c__7561__auto__,i__21710);
var k = cljs.core.nth.call(null,vec__21712,(0),null);
var v = cljs.core.nth.call(null,vec__21712,(1),null);
if((v == null)){
cljs.core.chunk_append.call(null,b__21711,k);

var G__21718 = (i__21710 + (1));
i__21710 = G__21718;
continue;
} else {
var G__21719 = (i__21710 + (1));
i__21710 = G__21719;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21711),tiltontec$webmx$html$map_less_nils_$_iter__21708.call(null,cljs.core.chunk_rest.call(null,s__21709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21711),null);
}
} else {
var vec__21715 = cljs.core.first.call(null,s__21709__$2);
var k = cljs.core.nth.call(null,vec__21715,(0),null);
var v = cljs.core.nth.call(null,vec__21715,(1),null);
if((v == null)){
return cljs.core.cons.call(null,k,tiltontec$webmx$html$map_less_nils_$_iter__21708.call(null,cljs.core.rest.call(null,s__21709__$2)));
} else {
var G__21720 = cljs.core.rest.call(null,s__21709__$2);
s__21709__$1 = G__21720;
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
return iter__7563__auto__.call(null,m);
})());
});
tiltontec.webmx.html.tag_dom = (function tiltontec$webmx$html$tag_dom(me){
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
tiltontec.webmx.html.tag_attrs = (function tiltontec$webmx$html$tag_attrs(mx){
var beef = cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__7563__auto__ = (function tiltontec$webmx$html$tag_attrs_$_iter__21721(s__21722){
return (new cljs.core.LazySeq(null,(function (){
var s__21722__$1 = s__21722;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21722__$1);
if(temp__4657__auto__){
var s__21722__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21722__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__21722__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__21724 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__21723 = (0);
while(true){
if((i__21723 < size__7562__auto__)){
var k = cljs.core._nth.call(null,c__7561__auto__,i__21723);
cljs.core.chunk_append.call(null,b__21724,(function (){var temp__4657__auto____$1 = tiltontec.model.core._LT_mget.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(function (){var G__21725 = k;
var G__21725__$1 = (((G__21725 instanceof cljs.core.Keyword))?G__21725.fqn:null);
switch (G__21725__$1) {
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

var G__21728 = (i__21723 + (1));
i__21723 = G__21728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21724),tiltontec$webmx$html$tag_attrs_$_iter__21721.call(null,cljs.core.chunk_rest.call(null,s__21722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21724),null);
}
} else {
var k = cljs.core.first.call(null,s__21722__$2);
return cljs.core.cons.call(null,(function (){var temp__4657__auto____$1 = tiltontec.model.core._LT_mget.call(null,mx,k);
if(cljs.core.truth_(temp__4657__auto____$1)){
var v = temp__4657__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(function (){var G__21726 = k;
var G__21726__$1 = (((G__21726 instanceof cljs.core.Keyword))?G__21726.fqn:null);
switch (G__21726__$1) {
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
})(),tiltontec$webmx$html$tag_attrs_$_iter__21721.call(null,cljs.core.rest.call(null,s__21722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__.call(null,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mx)));
})());
return cljs.core.apply.call(null,cljs.core.js_obj,cljs.core.apply.call(null,cljs.core.concat,beef));
});
tiltontec.webmx.html.tag_dom_create = (function tiltontec$webmx$html$tag_dom_create(var_args){
var G__21732 = arguments.length;
switch (G__21732) {
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
var seq__21733_21738 = cljs.core.seq.call(null,me);
var chunk__21734_21739 = null;
var count__21735_21740 = (0);
var i__21736_21741 = (0);
while(true){
if((i__21736_21741 < count__21735_21740)){
var tag_21742 = cljs.core._nth.call(null,chunk__21734_21739,i__21736_21741);
if(cljs.core.truth_(tag_21742)){
goog.dom.appendChild(frag,tiltontec.webmx.html.tag_dom_create.call(null,tag_21742));
} else {
}

var G__21743 = seq__21733_21738;
var G__21744 = chunk__21734_21739;
var G__21745 = count__21735_21740;
var G__21746 = (i__21736_21741 + (1));
seq__21733_21738 = G__21743;
chunk__21734_21739 = G__21744;
count__21735_21740 = G__21745;
i__21736_21741 = G__21746;
continue;
} else {
var temp__4657__auto___21747 = cljs.core.seq.call(null,seq__21733_21738);
if(temp__4657__auto___21747){
var seq__21733_21748__$1 = temp__4657__auto___21747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21733_21748__$1)){
var c__7594__auto___21749 = cljs.core.chunk_first.call(null,seq__21733_21748__$1);
var G__21750 = cljs.core.chunk_rest.call(null,seq__21733_21748__$1);
var G__21751 = c__7594__auto___21749;
var G__21752 = cljs.core.count.call(null,c__7594__auto___21749);
var G__21753 = (0);
seq__21733_21738 = G__21750;
chunk__21734_21739 = G__21751;
count__21735_21740 = G__21752;
i__21736_21741 = G__21753;
continue;
} else {
var tag_21754 = cljs.core.first.call(null,seq__21733_21748__$1);
if(cljs.core.truth_(tag_21754)){
goog.dom.appendChild(frag,tiltontec.webmx.html.tag_dom_create.call(null,tag_21754));
} else {
}

var G__21755 = cljs.core.next.call(null,seq__21733_21748__$1);
var G__21756 = null;
var G__21757 = (0);
var G__21758 = (0);
seq__21733_21738 = G__21755;
chunk__21734_21739 = G__21756;
count__21735_21740 = G__21757;
i__21736_21741 = G__21758;
continue;
}
} else {
}
}
break;
}

return frag;
} else {
var temp__4657__auto___21759 = (function (){var or__6774__auto__ = dbg;
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return tiltontec.webmx.html._STAR_webmx_trace_STAR_;
}
})();
if(cljs.core.truth_(temp__4657__auto___21759)){
var dbg_21760__$1 = temp__4657__auto___21759;
tiltontec.util.core.pln.call(null,new cljs.core.Keyword(null,"tag-dom-create","tag-dom-create",1943906167),dbg_21760__$1,tiltontec.webmx.html.tagfo.call(null,me));
} else {
}

var dom = cljs.core.apply.call(null,goog.dom.createDom,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"tag","tag",-1290361223)),tiltontec.webmx.html.tag_attrs.call(null,me),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__21730_SHARP_){
return tiltontec.webmx.html.tag_dom_create.call(null,p1__21730_SHARP_,dbg);
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
var or__6774__auto__ = keyword.call(null,tiltontec.webmx.html._PLUS_true_html_PLUS_);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
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
var seq__21761 = cljs.core.seq.call(null,lost);
var chunk__21762 = null;
var count__21763 = (0);
var i__21764 = (0);
while(true){
if((i__21764 < count__21763)){
var oldk = cljs.core._nth.call(null,chunk__21762,i__21764);
pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-dropping","obs-tag-kids-dropping",-1908908283),tiltontec.webmx.html.tagfo.call(null,oldk));

tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__21773 = seq__21761;
var G__21774 = chunk__21762;
var G__21775 = count__21763;
var G__21776 = (i__21764 + (1));
seq__21761 = G__21773;
chunk__21762 = G__21774;
count__21763 = G__21775;
i__21764 = G__21776;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21761);
if(temp__4657__auto__){
var seq__21761__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21761__$1)){
var c__7594__auto__ = cljs.core.chunk_first.call(null,seq__21761__$1);
var G__21777 = cljs.core.chunk_rest.call(null,seq__21761__$1);
var G__21778 = c__7594__auto__;
var G__21779 = cljs.core.count.call(null,c__7594__auto__);
var G__21780 = (0);
seq__21761 = G__21777;
chunk__21762 = G__21778;
count__21763 = G__21779;
i__21764 = G__21780;
continue;
} else {
var oldk = cljs.core.first.call(null,seq__21761__$1);
pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,oldk));

if(typeof oldk === 'string'){
} else {
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-dropping","obs-tag-kids-dropping",-1908908283),tiltontec.webmx.html.tagfo.call(null,oldk));

tiltontec.cell.evaluate.not_to_be.call(null,oldk);
}

var G__21781 = cljs.core.next.call(null,seq__21761__$1);
var G__21782 = null;
var G__21783 = (0);
var G__21784 = (0);
seq__21761 = G__21781;
chunk__21762 = G__21782;
count__21763 = G__21783;
i__21764 = G__21784;
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
var seq__21765_21785 = cljs.core.seq.call(null,lost);
var chunk__21766_21786 = null;
var count__21767_21787 = (0);
var i__21768_21788 = (0);
while(true){
if((i__21768_21788 < count__21767_21787)){
var oldk_21789 = cljs.core._nth.call(null,chunk__21766_21786,i__21768_21788);
if(typeof oldk_21789 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_21789);
}

var G__21790 = seq__21765_21785;
var G__21791 = chunk__21766_21786;
var G__21792 = count__21767_21787;
var G__21793 = (i__21768_21788 + (1));
seq__21765_21785 = G__21790;
chunk__21766_21786 = G__21791;
count__21767_21787 = G__21792;
i__21768_21788 = G__21793;
continue;
} else {
var temp__4657__auto___21794 = cljs.core.seq.call(null,seq__21765_21785);
if(temp__4657__auto___21794){
var seq__21765_21795__$1 = temp__4657__auto___21794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21765_21795__$1)){
var c__7594__auto___21796 = cljs.core.chunk_first.call(null,seq__21765_21795__$1);
var G__21797 = cljs.core.chunk_rest.call(null,seq__21765_21795__$1);
var G__21798 = c__7594__auto___21796;
var G__21799 = cljs.core.count.call(null,c__7594__auto___21796);
var G__21800 = (0);
seq__21765_21785 = G__21797;
chunk__21766_21786 = G__21798;
count__21767_21787 = G__21799;
i__21768_21788 = G__21800;
continue;
} else {
var oldk_21801 = cljs.core.first.call(null,seq__21765_21795__$1);
if(typeof oldk_21801 === 'string'){
} else {
tiltontec.cell.evaluate.not_to_be.call(null,oldk_21801);
}

var G__21802 = cljs.core.next.call(null,seq__21765_21795__$1);
var G__21803 = null;
var G__21804 = (0);
var G__21805 = (0);
seq__21765_21785 = G__21802;
chunk__21766_21786 = G__21803;
count__21767_21787 = G__21804;
i__21768_21788 = G__21805;
continue;
}
} else {
}
}
break;
}

var seq__21769_21806 = cljs.core.seq.call(null,newv);
var chunk__21770_21807 = null;
var count__21771_21808 = (0);
var i__21772_21809 = (0);
while(true){
if((i__21772_21809 < count__21771_21808)){
var newk_21810 = cljs.core._nth.call(null,chunk__21770_21807,i__21772_21809);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_21810]),oldv))?pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,newk_21810)):(function (){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-building-new-dom","obs-tag-kids-building-new-dom",-1849437170),tiltontec.webmx.html.tagfo.call(null,newk_21810));

return tiltontec.webmx.html.tag_dom_create.call(null,newk_21810);
})()
));

var G__21811 = seq__21769_21806;
var G__21812 = chunk__21770_21807;
var G__21813 = count__21771_21808;
var G__21814 = (i__21772_21809 + (1));
seq__21769_21806 = G__21811;
chunk__21770_21807 = G__21812;
count__21771_21808 = G__21813;
i__21772_21809 = G__21814;
continue;
} else {
var temp__4657__auto___21815 = cljs.core.seq.call(null,seq__21769_21806);
if(temp__4657__auto___21815){
var seq__21769_21816__$1 = temp__4657__auto___21815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21769_21816__$1)){
var c__7594__auto___21817 = cljs.core.chunk_first.call(null,seq__21769_21816__$1);
var G__21818 = cljs.core.chunk_rest.call(null,seq__21769_21816__$1);
var G__21819 = c__7594__auto___21817;
var G__21820 = cljs.core.count.call(null,c__7594__auto___21817);
var G__21821 = (0);
seq__21769_21806 = G__21818;
chunk__21770_21807 = G__21819;
count__21771_21808 = G__21820;
i__21772_21809 = G__21821;
continue;
} else {
var newk_21822 = cljs.core.first.call(null,seq__21769_21816__$1);
goog.dom.appendChild(frag,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([newk_21822]),oldv))?pdom.removeChild(tiltontec.webmx.html.tag_dom.call(null,newk_21822)):(function (){
cljs.core.println.call(null,new cljs.core.Keyword(null,"obs-tag-kids-building-new-dom","obs-tag-kids-building-new-dom",-1849437170),tiltontec.webmx.html.tagfo.call(null,newk_21822));

return tiltontec.webmx.html.tag_dom_create.call(null,newk_21822);
})()
));

var G__21823 = cljs.core.next.call(null,seq__21769_21816__$1);
var G__21824 = null;
var G__21825 = (0);
var G__21826 = (0);
seq__21769_21806 = G__21823;
chunk__21770_21807 = G__21824;
count__21771_21808 = G__21825;
i__21772_21809 = G__21826;
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
var G__21827 = slot;
var G__21827__$1 = (((G__21827 instanceof cljs.core.Keyword))?G__21827.fqn:null);
switch (G__21827__$1) {
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
return tiltontec.model.core.fget.call(null,(function (p1__21829_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,class$),tiltontec.model.core._LT_mget.call(null,p1__21829_SHARP_,new cljs.core.Keyword(null,"class","class",-2030961996)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.webmx.html.mxu_find_tag = (function tiltontec$webmx$html$mxu_find_tag(where,tag){
return tiltontec.model.core.fget.call(null,(function (p1__21830_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,tag),tiltontec.model.core._LT_mget.call(null,p1__21830_SHARP_,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
}),where,new cljs.core.Keyword(null,"me?","me?",-625404259),false,new cljs.core.Keyword(null,"up?","up?",77854972),true);
});
/**
 * Search up the matrix from node 'where' looking for element with class
 */
tiltontec.webmx.html.mxu_find_id = (function tiltontec$webmx$html$mxu_find_id(where,id){
return tiltontec.model.core.fget.call(null,(function (p1__21831_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,id),tiltontec.model.core._LT_mget.call(null,p1__21831_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092)));
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
var G__21832 = cljs.core.rest.call(null,keys);
var G__21833 = ((clojure.string.starts_with_QMARK_.call(null,cljs.core.first.call(null,keys),key_prefix))?cljs.core.conj.call(null,found,cljs.core.first.call(null,keys)):found);
keys = G__21832;
found = G__21833;
continue;
} else {
return found;
}
break;
}
});
tiltontec.webmx.html.io_truncate = (function tiltontec$webmx$html$io_truncate(key_prefix){
var seq__21834 = cljs.core.seq.call(null,tiltontec.webmx.html.io_find.call(null,key_prefix));
var chunk__21835 = null;
var count__21836 = (0);
var i__21837 = (0);
while(true){
if((i__21837 < count__21836)){
var key = cljs.core._nth.call(null,chunk__21835,i__21837);
tiltontec.webmx.html.io_delete.call(null,key);

var G__21838 = seq__21834;
var G__21839 = chunk__21835;
var G__21840 = count__21836;
var G__21841 = (i__21837 + (1));
seq__21834 = G__21838;
chunk__21835 = G__21839;
count__21836 = G__21840;
i__21837 = G__21841;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21834);
if(temp__4657__auto__){
var seq__21834__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21834__$1)){
var c__7594__auto__ = cljs.core.chunk_first.call(null,seq__21834__$1);
var G__21842 = cljs.core.chunk_rest.call(null,seq__21834__$1);
var G__21843 = c__7594__auto__;
var G__21844 = cljs.core.count.call(null,c__7594__auto__);
var G__21845 = (0);
seq__21834 = G__21842;
chunk__21835 = G__21843;
count__21836 = G__21844;
i__21837 = G__21845;
continue;
} else {
var key = cljs.core.first.call(null,seq__21834__$1);
tiltontec.webmx.html.io_delete.call(null,key);

var G__21846 = cljs.core.next.call(null,seq__21834__$1);
var G__21847 = null;
var G__21848 = (0);
var G__21849 = (0);
seq__21834 = G__21846;
chunk__21835 = G__21847;
count__21836 = G__21848;
i__21837 = G__21849;
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