// Compiled by ClojureScript 1.9.671 {}
goog.provide('tiltontec.webmx.gen');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('cljs.pprint');
goog.require('tiltontec.cell.base');
goog.require('tiltontec.cell.evaluate');
goog.require('tiltontec.model.core');
tiltontec.webmx.gen.tagfo = (function tiltontec$webmx$gen$tagfo(me){
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,me),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
tiltontec.webmx.gen._PLUS_tag_sid_PLUS_ = cljs.core.atom.call(null,(-1));
tiltontec.webmx.gen.webmx_init_BANG_ = (function tiltontec$webmx$gen$webmx_init_BANG_(){
return cljs.core.reset_BANG_.call(null,tiltontec.webmx.gen._PLUS_tag_sid_PLUS_,(-1));
});
tiltontec.webmx.gen.tag_by_id = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tiltontec.webmx.gen.dom_tag = (function tiltontec$webmx$gen$dom_tag(dom){
if((dom == null)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"outthetop!!!","outthetop!!!",2015243775));

return null;
} else {
if(cljs.core._EQ_.call(null,"",dom.id)){
cljs.core.println.call(null,new cljs.core.Keyword(null,"no-id-try-pa","no-id-try-pa",1320579246),dom.parentNode);

return tiltontec.webmx.gen.dom_tag.call(null,dom.parentNode);
} else {
var tag = cljs.core.get.call(null,cljs.core.deref.call(null,tiltontec.webmx.gen.tag_by_id),dom.id);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("dom-webmx did not find js for id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom.id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of dom "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dom)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("tag")].join('')));
}

return tag;

}
}
});
tiltontec.webmx.gen.make_tag = (function tiltontec$webmx$gen$make_tag(tag,attrs,aux,cFkids){
var tag_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__6774__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__6774__auto__)){
return or__6774__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,tiltontec.webmx.gen._PLUS_tag_sid_PLUS_,cljs.core.inc))].join('');
}
})())].join('');
var mx_tag = cljs.core.apply.call(null,tiltontec.model.core.make,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("tiltontec.webmx.base","tag","tiltontec.webmx.base/tag",1307508641),new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"id","id",-1388402092),tag_id,new cljs.core.Keyword(null,"attr-keys","attr-keys",-1946151359),cljs.core.distinct.call(null,cljs.core.conj.call(null,cljs.core.keys.call(null,attrs),new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"kids","kids",1156670771),cFkids,cljs.core.concat.call(null,cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092))))),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,aux)))));
cljs.core.swap_BANG_.call(null,tiltontec.webmx.gen.tag_by_id,cljs.core.assoc,tag_id,mx_tag);

return mx_tag;
});
cljs.core._add_method.call(null,tiltontec.cell.evaluate.not_to_be,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tiltontec.webmx.base","tag","tiltontec.webmx.base/tag",1307508641)], null),(function (me){
var temp__4657__auto___19872 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me));
if(cljs.core.truth_(temp__4657__auto___19872)){
var style_19873 = temp__4657__auto___19872;
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,style_19873))){
tiltontec.cell.evaluate.not_to_be.call(null,style_19873);
} else {
}
} else {
}

var seq__19868_19874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"kids","kids",1156670771).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,me)));
var chunk__19869_19875 = null;
var count__19870_19876 = (0);
var i__19871_19877 = (0);
while(true){
if((i__19871_19877 < count__19870_19876)){
var k_19878 = cljs.core._nth.call(null,chunk__19869_19875,i__19871_19877);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_19878))){
tiltontec.cell.evaluate.not_to_be.call(null,k_19878);
} else {
}

var G__19879 = seq__19868_19874;
var G__19880 = chunk__19869_19875;
var G__19881 = count__19870_19876;
var G__19882 = (i__19871_19877 + (1));
seq__19868_19874 = G__19879;
chunk__19869_19875 = G__19880;
count__19870_19876 = G__19881;
i__19871_19877 = G__19882;
continue;
} else {
var temp__4657__auto___19883 = cljs.core.seq.call(null,seq__19868_19874);
if(temp__4657__auto___19883){
var seq__19868_19884__$1 = temp__4657__auto___19883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19868_19884__$1)){
var c__7594__auto___19885 = cljs.core.chunk_first.call(null,seq__19868_19884__$1);
var G__19886 = cljs.core.chunk_rest.call(null,seq__19868_19884__$1);
var G__19887 = c__7594__auto___19885;
var G__19888 = cljs.core.count.call(null,c__7594__auto___19885);
var G__19889 = (0);
seq__19868_19874 = G__19886;
chunk__19869_19875 = G__19887;
count__19870_19876 = G__19888;
i__19871_19877 = G__19889;
continue;
} else {
var k_19890 = cljs.core.first.call(null,seq__19868_19884__$1);
if(cljs.core.truth_(tiltontec.cell.base.md_ref_QMARK_.call(null,k_19890))){
tiltontec.cell.evaluate.not_to_be.call(null,k_19890);
} else {
}

var G__19891 = cljs.core.next.call(null,seq__19868_19884__$1);
var G__19892 = null;
var G__19893 = (0);
var G__19894 = (0);
seq__19868_19874 = G__19891;
chunk__19869_19875 = G__19892;
count__19870_19876 = G__19893;
i__19871_19877 = G__19894;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,tiltontec.webmx.gen.tag_by_id,cljs.core.dissoc,tiltontec.model.core._LT_mget.call(null,me,new cljs.core.Keyword(null,"id","id",-1388402092)));

return tiltontec.cell.evaluate.not_to_be_self.call(null,me);
}));
var ret__7939__auto___19895 = tiltontec.webmx.gen.deftag = (function tiltontec$webmx$gen$deftag(_AMPERSAND_form,_AMPERSAND_env,tag){
var kids = cljs.core.gensym.call(null,"kids");
var vargs = cljs.core.gensym.call(null,"vargs");
var tag_name = cljs.core.gensym.call(null,"webmx-name");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null)),(function (){var x__7617__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__7617__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","make-tag","tiltontec.webmx.gen/make-tag",-1026862997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","make-tag","tiltontec.webmx.gen/make-tag",-1026862997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","second","cljs.core/second",520555958,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = kids;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nthrest","cljs.core/nthrest",1634834275,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","cFkids","tiltontec.model.core/cFkids",-460878017,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = kids;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","make-tag","tiltontec.webmx.gen/make-tag",-1026862997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),(function (){var x__7617__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7617__auto__ = kids;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nthrest","cljs.core/nthrest",1634834275,null)),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","cFkids","tiltontec.model.core/cFkids",-460878017,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = kids;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",-1987822328)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","make-tag","tiltontec.webmx.gen/make-tag",-1026862997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = tag_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__7617__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.model.core","cFkids","tiltontec.model.core/cFkids",-460878017,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})(),(function (){var x__7617__auto__ = vargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})())));
});
tiltontec.webmx.gen.deftag.cljs$lang$macro = true;

var ret__7939__auto___19903 = (function (){
tiltontec.webmx.gen.deftags = (function tiltontec$webmx$gen$deftags(var_args){
var args__7906__auto__ = [];
var len__7899__auto___19904 = arguments.length;
var i__7900__auto___19905 = (0);
while(true){
if((i__7900__auto___19905 < len__7899__auto___19904)){
args__7906__auto__.push((arguments[i__7900__auto___19905]));

var G__19906 = (i__7900__auto___19905 + (1));
i__7900__auto___19905 = G__19906;
continue;
} else {
}
break;
}

var argseq__7907__auto__ = ((((2) < args__7906__auto__.length))?(new cljs.core.IndexedSeq(args__7906__auto__.slice((2)),(0),null)):null);
return tiltontec.webmx.gen.deftags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7907__auto__);
});

tiltontec.webmx.gen.deftags.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,tags){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var iter__7563__auto__ = (function tiltontec$webmx$gen$iter__19899(s__19900){
return (new cljs.core.LazySeq(null,(function (){
var s__19900__$1 = s__19900;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19900__$1);
if(temp__4657__auto__){
var s__19900__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19900__$2)){
var c__7561__auto__ = cljs.core.chunk_first.call(null,s__19900__$2);
var size__7562__auto__ = cljs.core.count.call(null,c__7561__auto__);
var b__19902 = cljs.core.chunk_buffer.call(null,size__7562__auto__);
if((function (){var i__19901 = (0);
while(true){
if((i__19901 < size__7562__auto__)){
var tag = cljs.core._nth.call(null,c__7561__auto__,i__19901);
cljs.core.chunk_append.call(null,b__19902,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","deftag","tiltontec.webmx.gen/deftag",-902815596,null)),(function (){var x__7617__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))));

var G__19907 = (i__19901 + (1));
i__19901 = G__19907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19902),tiltontec$webmx$gen$iter__19899.call(null,cljs.core.chunk_rest.call(null,s__19900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19902),null);
}
} else {
var tag = cljs.core.first.call(null,s__19900__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tiltontec.webmx.gen","deftag","tiltontec.webmx.gen/deftag",-902815596,null)),(function (){var x__7617__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7617__auto__);
})()))),tiltontec$webmx$gen$iter__19899.call(null,cljs.core.rest.call(null,s__19900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7563__auto__.call(null,tags);
})())));
});

tiltontec.webmx.gen.deftags.cljs$lang$maxFixedArity = (2);

tiltontec.webmx.gen.deftags.cljs$lang$applyTo = (function (seq19896){
var G__19897 = cljs.core.first.call(null,seq19896);
var seq19896__$1 = cljs.core.next.call(null,seq19896);
var G__19898 = cljs.core.first.call(null,seq19896__$1);
var seq19896__$2 = cljs.core.next.call(null,seq19896__$1);
return tiltontec.webmx.gen.deftags.cljs$core$IFn$_invoke$arity$variadic(G__19897,G__19898,seq19896__$2);
});

return null;
})()
;
tiltontec.webmx.gen.deftags.cljs$lang$macro = true;
















































































































































tiltontec.webmx.gen.deftags.call(null,tiltontec.webmx.gen.a,tiltontec.webmx.gen.abbr,tiltontec.webmx.gen.acronym,tiltontec.webmx.gen.address,tiltontec.webmx.gen.applet,tiltontec.webmx.gen.area,tiltontec.webmx.gen.article,tiltontec.webmx.gen.aside,tiltontec.webmx.gen.audio,tiltontec.webmx.gen.b,tiltontec.webmx.gen.base,tiltontec.webmx.gen.basefont,tiltontec.webmx.gen.bdi,tiltontec.webmx.gen.bdo,tiltontec.webmx.gen.bgsound,tiltontec.webmx.gen.big,tiltontec.webmx.gen.blink,tiltontec.webmx.gen.blockquote,tiltontec.webmx.gen.body,tiltontec.webmx.gen.br,tiltontec.webmx.gen.button,tiltontec.webmx.gen.canvas,tiltontec.webmx.gen.caption,tiltontec.webmx.gen.center,tiltontec.webmx.gen.cite,tiltontec.webmx.gen.code,tiltontec.webmx.gen.col,tiltontec.webmx.gen.colgroup,tiltontec.webmx.gen.command,tiltontec.webmx.gen.content,tiltontec.webmx.gen.data,tiltontec.webmx.gen.datalist,tiltontec.webmx.gen.dd,tiltontec.webmx.gen.del,tiltontec.webmx.gen.details,tiltontec.webmx.gen.dfn,tiltontec.webmx.gen.dialog,tiltontec.webmx.gen.dir,tiltontec.webmx.gen.div,tiltontec.webmx.gen.dl,tiltontec.webmx.gen.dt,tiltontec.webmx.gen.element,tiltontec.webmx.gen.em,tiltontec.webmx.gen.embed,tiltontec.webmx.gen.fieldset,tiltontec.webmx.gen.figcaption,tiltontec.webmx.gen.figure,tiltontec.webmx.gen.font,tiltontec.webmx.gen.footer,tiltontec.webmx.gen.form,tiltontec.webmx.gen.frame,tiltontec.webmx.gen.frameset,tiltontec.webmx.gen.h1,tiltontec.webmx.gen.h2,tiltontec.webmx.gen.h3,tiltontec.webmx.gen.h4,tiltontec.webmx.gen.h5,tiltontec.webmx.gen.h6,tiltontec.webmx.gen.head,tiltontec.webmx.gen.header,tiltontec.webmx.gen.hgroup,tiltontec.webmx.gen.hr,tiltontec.webmx.gen.html,tiltontec.webmx.gen.i,tiltontec.webmx.gen.iframe,tiltontec.webmx.gen.image,tiltontec.webmx.gen.img,tiltontec.webmx.gen.input,tiltontec.webmx.gen.ins,tiltontec.webmx.gen.isindex,tiltontec.webmx.gen.kbd,tiltontec.webmx.gen.keygen,tiltontec.webmx.gen.label,tiltontec.webmx.gen.legend,tiltontec.webmx.gen.li,tiltontec.webmx.gen.link,tiltontec.webmx.gen.listing,tiltontec.webmx.gen.main,tiltontec.webmx.gen.map,tiltontec.webmx.gen.mark,tiltontec.webmx.gen.marquee,tiltontec.webmx.gen.menu,tiltontec.webmx.gen.menuitem,tiltontec.webmx.gen.meta,tiltontec.webmx.gen.meter,tiltontec.webmx.gen.multicol,tiltontec.webmx.gen.nav,tiltontec.webmx.gen.nextid,tiltontec.webmx.gen.nobr,tiltontec.webmx.gen.noembed,tiltontec.webmx.gen.noframes,tiltontec.webmx.gen.noscript,tiltontec.webmx.gen.object,tiltontec.webmx.gen.ol,tiltontec.webmx.gen.optgroup,tiltontec.webmx.gen.option,tiltontec.webmx.gen.output,tiltontec.webmx.gen.p,tiltontec.webmx.gen.param,tiltontec.webmx.gen.picture,tiltontec.webmx.gen.plaintext,tiltontec.webmx.gen.pre,tiltontec.webmx.gen.progress,tiltontec.webmx.gen.q,tiltontec.webmx.gen.rp,tiltontec.webmx.gen.rt,tiltontec.webmx.gen.rtc,tiltontec.webmx.gen.ruby,tiltontec.webmx.gen.s,tiltontec.webmx.gen.samp,tiltontec.webmx.gen.script,tiltontec.webmx.gen.section,tiltontec.webmx.gen.select,tiltontec.webmx.gen.shadow,tiltontec.webmx.gen.slot,tiltontec.webmx.gen.small,tiltontec.webmx.gen.source,tiltontec.webmx.gen.spacer,tiltontec.webmx.gen.span,tiltontec.webmx.gen.strike,tiltontec.webmx.gen.strong,tiltontec.webmx.gen.style,tiltontec.webmx.gen.sub,tiltontec.webmx.gen.summary,tiltontec.webmx.gen.sup,tiltontec.webmx.gen.table,tiltontec.webmx.gen.tbody,tiltontec.webmx.gen.td,tiltontec.webmx.gen.template,tiltontec.webmx.gen.textarea,tiltontec.webmx.gen.tfoot,tiltontec.webmx.gen.th,tiltontec.webmx.gen.thead,tiltontec.webmx.gen.time,tiltontec.webmx.gen.title,tiltontec.webmx.gen.tr,tiltontec.webmx.gen.track,tiltontec.webmx.gen.tt,tiltontec.webmx.gen.u,tiltontec.webmx.gen.ul,tiltontec.webmx.gen.var$,tiltontec.webmx.gen.video,tiltontec.webmx.gen.wbr,tiltontec.webmx.gen.xmp);
tiltontec.webmx.gen.evt_tag = (function tiltontec$webmx$gen$evt_tag(e){
return tiltontec.webmx.gen.dom_tag.call(null,e.target);
});
tiltontec.webmx.gen.target_value = (function tiltontec$webmx$gen$target_value(evt){
return goog.dom.forms.getValue(evt.target);
});

//# sourceMappingURL=gen.js.map