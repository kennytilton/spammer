// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26341 = arguments.length;
switch (G__26341) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26342 = (function (f,blockable,meta26343){
this.f = f;
this.blockable = blockable;
this.meta26343 = meta26343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26344,meta26343__$1){
var self__ = this;
var _26344__$1 = this;
return (new cljs.core.async.t_cljs$core$async26342(self__.f,self__.blockable,meta26343__$1));
});

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26344){
var self__ = this;
var _26344__$1 = this;
return self__.meta26343;
});

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26343","meta26343",98192213,null)], null);
});

cljs.core.async.t_cljs$core$async26342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26342";

cljs.core.async.t_cljs$core$async26342.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async26342");
});

cljs.core.async.__GT_t_cljs$core$async26342 = (function cljs$core$async$__GT_t_cljs$core$async26342(f__$1,blockable__$1,meta26343){
return (new cljs.core.async.t_cljs$core$async26342(f__$1,blockable__$1,meta26343));
});

}

return (new cljs.core.async.t_cljs$core$async26342(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26348 = arguments.length;
switch (G__26348) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26351 = arguments.length;
switch (G__26351) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26354 = arguments.length;
switch (G__26354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26356 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26356);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26356,ret){
return (function (){
return fn1.call(null,val_26356);
});})(val_26356,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26358 = arguments.length;
switch (G__26358) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7696__auto___26360 = n;
var x_26361 = (0);
while(true){
if((x_26361 < n__7696__auto___26360)){
(a[x_26361] = (0));

var G__26362 = (x_26361 + (1));
x_26361 = G__26362;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26363 = (i + (1));
i = G__26363;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26364 = (function (flag,meta26365){
this.flag = flag;
this.meta26365 = meta26365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26366,meta26365__$1){
var self__ = this;
var _26366__$1 = this;
return (new cljs.core.async.t_cljs$core$async26364(self__.flag,meta26365__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26366){
var self__ = this;
var _26366__$1 = this;
return self__.meta26365;
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26365","meta26365",1940771259,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26364";

cljs.core.async.t_cljs$core$async26364.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async26364");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26364 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26364(flag__$1,meta26365){
return (new cljs.core.async.t_cljs$core$async26364(flag__$1,meta26365));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26364(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26367 = (function (flag,cb,meta26368){
this.flag = flag;
this.cb = cb;
this.meta26368 = meta26368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26369,meta26368__$1){
var self__ = this;
var _26369__$1 = this;
return (new cljs.core.async.t_cljs$core$async26367(self__.flag,self__.cb,meta26368__$1));
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26369){
var self__ = this;
var _26369__$1 = this;
return self__.meta26368;
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26368","meta26368",1208182307,null)], null);
});

cljs.core.async.t_cljs$core$async26367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26367";

cljs.core.async.t_cljs$core$async26367.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async26367");
});

cljs.core.async.__GT_t_cljs$core$async26367 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26367(flag__$1,cb__$1,meta26368){
return (new cljs.core.async.t_cljs$core$async26367(flag__$1,cb__$1,meta26368));
});

}

return (new cljs.core.async.t_cljs$core$async26367(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26370_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26371_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26371_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6772__auto__ = wport;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26372 = (i + (1));
i = G__26372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6772__auto__ = ret;
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6760__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6760__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6760__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___26378 = arguments.length;
var i__7898__auto___26379 = (0);
while(true){
if((i__7898__auto___26379 < len__7897__auto___26378)){
args__7904__auto__.push((arguments[i__7898__auto___26379]));

var G__26380 = (i__7898__auto___26379 + (1));
i__7898__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((1) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7905__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26375){
var map__26376 = p__26375;
var map__26376__$1 = ((((!((map__26376 == null)))?((((map__26376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26376):map__26376);
var opts = map__26376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26373){
var G__26374 = cljs.core.first.call(null,seq26373);
var seq26373__$1 = cljs.core.next.call(null,seq26373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26374,seq26373__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26382 = arguments.length;
switch (G__26382) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26295__auto___26428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___26428){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___26428){
return (function (state_26406){
var state_val_26407 = (state_26406[(1)]);
if((state_val_26407 === (7))){
var inst_26402 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26408_26429 = state_26406__$1;
(statearr_26408_26429[(2)] = inst_26402);

(statearr_26408_26429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (1))){
var state_26406__$1 = state_26406;
var statearr_26409_26430 = state_26406__$1;
(statearr_26409_26430[(2)] = null);

(statearr_26409_26430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (4))){
var inst_26385 = (state_26406[(7)]);
var inst_26385__$1 = (state_26406[(2)]);
var inst_26386 = (inst_26385__$1 == null);
var state_26406__$1 = (function (){var statearr_26410 = state_26406;
(statearr_26410[(7)] = inst_26385__$1);

return statearr_26410;
})();
if(cljs.core.truth_(inst_26386)){
var statearr_26411_26431 = state_26406__$1;
(statearr_26411_26431[(1)] = (5));

} else {
var statearr_26412_26432 = state_26406__$1;
(statearr_26412_26432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (13))){
var state_26406__$1 = state_26406;
var statearr_26413_26433 = state_26406__$1;
(statearr_26413_26433[(2)] = null);

(statearr_26413_26433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (6))){
var inst_26385 = (state_26406[(7)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26406__$1,(11),to,inst_26385);
} else {
if((state_val_26407 === (3))){
var inst_26404 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26406__$1,inst_26404);
} else {
if((state_val_26407 === (12))){
var state_26406__$1 = state_26406;
var statearr_26414_26434 = state_26406__$1;
(statearr_26414_26434[(2)] = null);

(statearr_26414_26434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (2))){
var state_26406__$1 = state_26406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26406__$1,(4),from);
} else {
if((state_val_26407 === (11))){
var inst_26395 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
if(cljs.core.truth_(inst_26395)){
var statearr_26415_26435 = state_26406__$1;
(statearr_26415_26435[(1)] = (12));

} else {
var statearr_26416_26436 = state_26406__$1;
(statearr_26416_26436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (9))){
var state_26406__$1 = state_26406;
var statearr_26417_26437 = state_26406__$1;
(statearr_26417_26437[(2)] = null);

(statearr_26417_26437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (5))){
var state_26406__$1 = state_26406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26418_26438 = state_26406__$1;
(statearr_26418_26438[(1)] = (8));

} else {
var statearr_26419_26439 = state_26406__$1;
(statearr_26419_26439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (14))){
var inst_26400 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26420_26440 = state_26406__$1;
(statearr_26420_26440[(2)] = inst_26400);

(statearr_26420_26440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (10))){
var inst_26392 = (state_26406[(2)]);
var state_26406__$1 = state_26406;
var statearr_26421_26441 = state_26406__$1;
(statearr_26421_26441[(2)] = inst_26392);

(statearr_26421_26441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26407 === (8))){
var inst_26389 = cljs.core.async.close_BANG_.call(null,to);
var state_26406__$1 = state_26406;
var statearr_26422_26442 = state_26406__$1;
(statearr_26422_26442[(2)] = inst_26389);

(statearr_26422_26442[(1)] = (10));


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
});})(c__26295__auto___26428))
;
return ((function (switch__26207__auto__,c__26295__auto___26428){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_26423 = [null,null,null,null,null,null,null,null];
(statearr_26423[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_26423[(1)] = (1));

return statearr_26423;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_26406){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26424){if((e26424 instanceof Object)){
var ex__26211__auto__ = e26424;
var statearr_26425_26443 = state_26406;
(statearr_26425_26443[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26444 = state_26406;
state_26406 = G__26444;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_26406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_26406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___26428))
})();
var state__26297__auto__ = (function (){var statearr_26426 = f__26296__auto__.call(null);
(statearr_26426[(6)] = c__26295__auto___26428);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___26428))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26445){
var vec__26446 = p__26445;
var v = cljs.core.nth.call(null,vec__26446,(0),null);
var p = cljs.core.nth.call(null,vec__26446,(1),null);
var job = vec__26446;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26295__auto___26617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results){
return (function (state_26453){
var state_val_26454 = (state_26453[(1)]);
if((state_val_26454 === (1))){
var state_26453__$1 = state_26453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26453__$1,(2),res,v);
} else {
if((state_val_26454 === (2))){
var inst_26450 = (state_26453[(2)]);
var inst_26451 = cljs.core.async.close_BANG_.call(null,res);
var state_26453__$1 = (function (){var statearr_26455 = state_26453;
(statearr_26455[(7)] = inst_26450);

return statearr_26455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26453__$1,inst_26451);
} else {
return null;
}
}
});})(c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results))
;
return ((function (switch__26207__auto__,c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_26456 = [null,null,null,null,null,null,null,null];
(statearr_26456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__);

(statearr_26456[(1)] = (1));

return statearr_26456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1 = (function (state_26453){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26457){if((e26457 instanceof Object)){
var ex__26211__auto__ = e26457;
var statearr_26458_26618 = state_26453;
(statearr_26458_26618[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26619 = state_26453;
state_26453 = G__26619;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = function(state_26453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1.call(this,state_26453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results))
})();
var state__26297__auto__ = (function (){var statearr_26459 = f__26296__auto__.call(null);
(statearr_26459[(6)] = c__26295__auto___26617);

return statearr_26459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___26617,res,vec__26446,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26460){
var vec__26461 = p__26460;
var v = cljs.core.nth.call(null,vec__26461,(0),null);
var p = cljs.core.nth.call(null,vec__26461,(1),null);
var job = vec__26461;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7696__auto___26620 = n;
var __26621 = (0);
while(true){
if((__26621 < n__7696__auto___26620)){
var G__26464_26622 = type;
var G__26464_26623__$1 = (((G__26464_26622 instanceof cljs.core.Keyword))?G__26464_26622.fqn:null);
switch (G__26464_26623__$1) {
case "compute":
var c__26295__auto___26625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26621,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (__26621,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function (state_26477){
var state_val_26478 = (state_26477[(1)]);
if((state_val_26478 === (1))){
var state_26477__$1 = state_26477;
var statearr_26479_26626 = state_26477__$1;
(statearr_26479_26626[(2)] = null);

(statearr_26479_26626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (2))){
var state_26477__$1 = state_26477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26477__$1,(4),jobs);
} else {
if((state_val_26478 === (3))){
var inst_26475 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26477__$1,inst_26475);
} else {
if((state_val_26478 === (4))){
var inst_26467 = (state_26477[(2)]);
var inst_26468 = process.call(null,inst_26467);
var state_26477__$1 = state_26477;
if(cljs.core.truth_(inst_26468)){
var statearr_26480_26627 = state_26477__$1;
(statearr_26480_26627[(1)] = (5));

} else {
var statearr_26481_26628 = state_26477__$1;
(statearr_26481_26628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (5))){
var state_26477__$1 = state_26477;
var statearr_26482_26629 = state_26477__$1;
(statearr_26482_26629[(2)] = null);

(statearr_26482_26629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (6))){
var state_26477__$1 = state_26477;
var statearr_26483_26630 = state_26477__$1;
(statearr_26483_26630[(2)] = null);

(statearr_26483_26630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26478 === (7))){
var inst_26473 = (state_26477[(2)]);
var state_26477__$1 = state_26477;
var statearr_26484_26631 = state_26477__$1;
(statearr_26484_26631[(2)] = inst_26473);

(statearr_26484_26631[(1)] = (3));


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
});})(__26621,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
;
return ((function (__26621,switch__26207__auto__,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_26485 = [null,null,null,null,null,null,null];
(statearr_26485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__);

(statearr_26485[(1)] = (1));

return statearr_26485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1 = (function (state_26477){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26486){if((e26486 instanceof Object)){
var ex__26211__auto__ = e26486;
var statearr_26487_26632 = state_26477;
(statearr_26487_26632[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26633 = state_26477;
state_26477 = G__26633;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = function(state_26477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1.call(this,state_26477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__;
})()
;})(__26621,switch__26207__auto__,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
})();
var state__26297__auto__ = (function (){var statearr_26488 = f__26296__auto__.call(null);
(statearr_26488[(6)] = c__26295__auto___26625);

return statearr_26488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(__26621,c__26295__auto___26625,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
);


break;
case "async":
var c__26295__auto___26634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26621,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (__26621,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (1))){
var state_26501__$1 = state_26501;
var statearr_26503_26635 = state_26501__$1;
(statearr_26503_26635[(2)] = null);

(statearr_26503_26635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (2))){
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(4),jobs);
} else {
if((state_val_26502 === (3))){
var inst_26499 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else {
if((state_val_26502 === (4))){
var inst_26491 = (state_26501[(2)]);
var inst_26492 = async.call(null,inst_26491);
var state_26501__$1 = state_26501;
if(cljs.core.truth_(inst_26492)){
var statearr_26504_26636 = state_26501__$1;
(statearr_26504_26636[(1)] = (5));

} else {
var statearr_26505_26637 = state_26501__$1;
(statearr_26505_26637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (5))){
var state_26501__$1 = state_26501;
var statearr_26506_26638 = state_26501__$1;
(statearr_26506_26638[(2)] = null);

(statearr_26506_26638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (6))){
var state_26501__$1 = state_26501;
var statearr_26507_26639 = state_26501__$1;
(statearr_26507_26639[(2)] = null);

(statearr_26507_26639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (7))){
var inst_26497 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26508_26640 = state_26501__$1;
(statearr_26508_26640[(2)] = inst_26497);

(statearr_26508_26640[(1)] = (3));


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
});})(__26621,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
;
return ((function (__26621,switch__26207__auto__,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_26509 = [null,null,null,null,null,null,null];
(statearr_26509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__);

(statearr_26509[(1)] = (1));

return statearr_26509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1 = (function (state_26501){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object)){
var ex__26211__auto__ = e26510;
var statearr_26511_26641 = state_26501;
(statearr_26511_26641[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26642 = state_26501;
state_26501 = G__26642;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__;
})()
;})(__26621,switch__26207__auto__,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
})();
var state__26297__auto__ = (function (){var statearr_26512 = f__26296__auto__.call(null);
(statearr_26512[(6)] = c__26295__auto___26634);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(__26621,c__26295__auto___26634,G__26464_26622,G__26464_26623__$1,n__7696__auto___26620,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26464_26623__$1)].join('')));

}

var G__26643 = (__26621 + (1));
__26621 = G__26643;
continue;
} else {
}
break;
}

var c__26295__auto___26644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___26644,jobs,results,process,async){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___26644,jobs,results,process,async){
return (function (state_26534){
var state_val_26535 = (state_26534[(1)]);
if((state_val_26535 === (1))){
var state_26534__$1 = state_26534;
var statearr_26536_26645 = state_26534__$1;
(statearr_26536_26645[(2)] = null);

(statearr_26536_26645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26535 === (2))){
var state_26534__$1 = state_26534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26534__$1,(4),from);
} else {
if((state_val_26535 === (3))){
var inst_26532 = (state_26534[(2)]);
var state_26534__$1 = state_26534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26534__$1,inst_26532);
} else {
if((state_val_26535 === (4))){
var inst_26515 = (state_26534[(7)]);
var inst_26515__$1 = (state_26534[(2)]);
var inst_26516 = (inst_26515__$1 == null);
var state_26534__$1 = (function (){var statearr_26537 = state_26534;
(statearr_26537[(7)] = inst_26515__$1);

return statearr_26537;
})();
if(cljs.core.truth_(inst_26516)){
var statearr_26538_26646 = state_26534__$1;
(statearr_26538_26646[(1)] = (5));

} else {
var statearr_26539_26647 = state_26534__$1;
(statearr_26539_26647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26535 === (5))){
var inst_26518 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26534__$1 = state_26534;
var statearr_26540_26648 = state_26534__$1;
(statearr_26540_26648[(2)] = inst_26518);

(statearr_26540_26648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26535 === (6))){
var inst_26515 = (state_26534[(7)]);
var inst_26520 = (state_26534[(8)]);
var inst_26520__$1 = cljs.core.async.chan.call(null,(1));
var inst_26521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26522 = [inst_26515,inst_26520__$1];
var inst_26523 = (new cljs.core.PersistentVector(null,2,(5),inst_26521,inst_26522,null));
var state_26534__$1 = (function (){var statearr_26541 = state_26534;
(statearr_26541[(8)] = inst_26520__$1);

return statearr_26541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26534__$1,(8),jobs,inst_26523);
} else {
if((state_val_26535 === (7))){
var inst_26530 = (state_26534[(2)]);
var state_26534__$1 = state_26534;
var statearr_26542_26649 = state_26534__$1;
(statearr_26542_26649[(2)] = inst_26530);

(statearr_26542_26649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26535 === (8))){
var inst_26520 = (state_26534[(8)]);
var inst_26525 = (state_26534[(2)]);
var state_26534__$1 = (function (){var statearr_26543 = state_26534;
(statearr_26543[(9)] = inst_26525);

return statearr_26543;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26534__$1,(9),results,inst_26520);
} else {
if((state_val_26535 === (9))){
var inst_26527 = (state_26534[(2)]);
var state_26534__$1 = (function (){var statearr_26544 = state_26534;
(statearr_26544[(10)] = inst_26527);

return statearr_26544;
})();
var statearr_26545_26650 = state_26534__$1;
(statearr_26545_26650[(2)] = null);

(statearr_26545_26650[(1)] = (2));


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
});})(c__26295__auto___26644,jobs,results,process,async))
;
return ((function (switch__26207__auto__,c__26295__auto___26644,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_26546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__);

(statearr_26546[(1)] = (1));

return statearr_26546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1 = (function (state_26534){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26547){if((e26547 instanceof Object)){
var ex__26211__auto__ = e26547;
var statearr_26548_26651 = state_26534;
(statearr_26548_26651[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26652 = state_26534;
state_26534 = G__26652;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = function(state_26534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1.call(this,state_26534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___26644,jobs,results,process,async))
})();
var state__26297__auto__ = (function (){var statearr_26549 = f__26296__auto__.call(null);
(statearr_26549[(6)] = c__26295__auto___26644);

return statearr_26549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___26644,jobs,results,process,async))
);


var c__26295__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto__,jobs,results,process,async){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto__,jobs,results,process,async){
return (function (state_26587){
var state_val_26588 = (state_26587[(1)]);
if((state_val_26588 === (7))){
var inst_26583 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26589_26653 = state_26587__$1;
(statearr_26589_26653[(2)] = inst_26583);

(statearr_26589_26653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (20))){
var state_26587__$1 = state_26587;
var statearr_26590_26654 = state_26587__$1;
(statearr_26590_26654[(2)] = null);

(statearr_26590_26654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (1))){
var state_26587__$1 = state_26587;
var statearr_26591_26655 = state_26587__$1;
(statearr_26591_26655[(2)] = null);

(statearr_26591_26655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (4))){
var inst_26552 = (state_26587[(7)]);
var inst_26552__$1 = (state_26587[(2)]);
var inst_26553 = (inst_26552__$1 == null);
var state_26587__$1 = (function (){var statearr_26592 = state_26587;
(statearr_26592[(7)] = inst_26552__$1);

return statearr_26592;
})();
if(cljs.core.truth_(inst_26553)){
var statearr_26593_26656 = state_26587__$1;
(statearr_26593_26656[(1)] = (5));

} else {
var statearr_26594_26657 = state_26587__$1;
(statearr_26594_26657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (15))){
var inst_26565 = (state_26587[(8)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26587__$1,(18),to,inst_26565);
} else {
if((state_val_26588 === (21))){
var inst_26578 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26595_26658 = state_26587__$1;
(statearr_26595_26658[(2)] = inst_26578);

(statearr_26595_26658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (13))){
var inst_26580 = (state_26587[(2)]);
var state_26587__$1 = (function (){var statearr_26596 = state_26587;
(statearr_26596[(9)] = inst_26580);

return statearr_26596;
})();
var statearr_26597_26659 = state_26587__$1;
(statearr_26597_26659[(2)] = null);

(statearr_26597_26659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (6))){
var inst_26552 = (state_26587[(7)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,(11),inst_26552);
} else {
if((state_val_26588 === (17))){
var inst_26573 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
if(cljs.core.truth_(inst_26573)){
var statearr_26598_26660 = state_26587__$1;
(statearr_26598_26660[(1)] = (19));

} else {
var statearr_26599_26661 = state_26587__$1;
(statearr_26599_26661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (3))){
var inst_26585 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26587__$1,inst_26585);
} else {
if((state_val_26588 === (12))){
var inst_26562 = (state_26587[(10)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,(14),inst_26562);
} else {
if((state_val_26588 === (2))){
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,(4),results);
} else {
if((state_val_26588 === (19))){
var state_26587__$1 = state_26587;
var statearr_26600_26662 = state_26587__$1;
(statearr_26600_26662[(2)] = null);

(statearr_26600_26662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (11))){
var inst_26562 = (state_26587[(2)]);
var state_26587__$1 = (function (){var statearr_26601 = state_26587;
(statearr_26601[(10)] = inst_26562);

return statearr_26601;
})();
var statearr_26602_26663 = state_26587__$1;
(statearr_26602_26663[(2)] = null);

(statearr_26602_26663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (9))){
var state_26587__$1 = state_26587;
var statearr_26603_26664 = state_26587__$1;
(statearr_26603_26664[(2)] = null);

(statearr_26603_26664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (5))){
var state_26587__$1 = state_26587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26604_26665 = state_26587__$1;
(statearr_26604_26665[(1)] = (8));

} else {
var statearr_26605_26666 = state_26587__$1;
(statearr_26605_26666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (14))){
var inst_26567 = (state_26587[(11)]);
var inst_26565 = (state_26587[(8)]);
var inst_26565__$1 = (state_26587[(2)]);
var inst_26566 = (inst_26565__$1 == null);
var inst_26567__$1 = cljs.core.not.call(null,inst_26566);
var state_26587__$1 = (function (){var statearr_26606 = state_26587;
(statearr_26606[(11)] = inst_26567__$1);

(statearr_26606[(8)] = inst_26565__$1);

return statearr_26606;
})();
if(inst_26567__$1){
var statearr_26607_26667 = state_26587__$1;
(statearr_26607_26667[(1)] = (15));

} else {
var statearr_26608_26668 = state_26587__$1;
(statearr_26608_26668[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (16))){
var inst_26567 = (state_26587[(11)]);
var state_26587__$1 = state_26587;
var statearr_26609_26669 = state_26587__$1;
(statearr_26609_26669[(2)] = inst_26567);

(statearr_26609_26669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (10))){
var inst_26559 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26610_26670 = state_26587__$1;
(statearr_26610_26670[(2)] = inst_26559);

(statearr_26610_26670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (18))){
var inst_26570 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26611_26671 = state_26587__$1;
(statearr_26611_26671[(2)] = inst_26570);

(statearr_26611_26671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (8))){
var inst_26556 = cljs.core.async.close_BANG_.call(null,to);
var state_26587__$1 = state_26587;
var statearr_26612_26672 = state_26587__$1;
(statearr_26612_26672[(2)] = inst_26556);

(statearr_26612_26672[(1)] = (10));


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
});})(c__26295__auto__,jobs,results,process,async))
;
return ((function (switch__26207__auto__,c__26295__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_26613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__);

(statearr_26613[(1)] = (1));

return statearr_26613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1 = (function (state_26587){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26614){if((e26614 instanceof Object)){
var ex__26211__auto__ = e26614;
var statearr_26615_26673 = state_26587;
(statearr_26615_26673[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26674 = state_26587;
state_26587 = G__26674;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto__,jobs,results,process,async))
})();
var state__26297__auto__ = (function (){var statearr_26616 = f__26296__auto__.call(null);
(statearr_26616[(6)] = c__26295__auto__);

return statearr_26616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto__,jobs,results,process,async))
);

return c__26295__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26676 = arguments.length;
switch (G__26676) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26679 = arguments.length;
switch (G__26679) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26682 = arguments.length;
switch (G__26682) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26295__auto___26731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___26731,tc,fc){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___26731,tc,fc){
return (function (state_26708){
var state_val_26709 = (state_26708[(1)]);
if((state_val_26709 === (7))){
var inst_26704 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26710_26732 = state_26708__$1;
(statearr_26710_26732[(2)] = inst_26704);

(statearr_26710_26732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (1))){
var state_26708__$1 = state_26708;
var statearr_26711_26733 = state_26708__$1;
(statearr_26711_26733[(2)] = null);

(statearr_26711_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (4))){
var inst_26685 = (state_26708[(7)]);
var inst_26685__$1 = (state_26708[(2)]);
var inst_26686 = (inst_26685__$1 == null);
var state_26708__$1 = (function (){var statearr_26712 = state_26708;
(statearr_26712[(7)] = inst_26685__$1);

return statearr_26712;
})();
if(cljs.core.truth_(inst_26686)){
var statearr_26713_26734 = state_26708__$1;
(statearr_26713_26734[(1)] = (5));

} else {
var statearr_26714_26735 = state_26708__$1;
(statearr_26714_26735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (13))){
var state_26708__$1 = state_26708;
var statearr_26715_26736 = state_26708__$1;
(statearr_26715_26736[(2)] = null);

(statearr_26715_26736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (6))){
var inst_26685 = (state_26708[(7)]);
var inst_26691 = p.call(null,inst_26685);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26691)){
var statearr_26716_26737 = state_26708__$1;
(statearr_26716_26737[(1)] = (9));

} else {
var statearr_26717_26738 = state_26708__$1;
(statearr_26717_26738[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (3))){
var inst_26706 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26708__$1,inst_26706);
} else {
if((state_val_26709 === (12))){
var state_26708__$1 = state_26708;
var statearr_26718_26739 = state_26708__$1;
(statearr_26718_26739[(2)] = null);

(statearr_26718_26739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (2))){
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26708__$1,(4),ch);
} else {
if((state_val_26709 === (11))){
var inst_26685 = (state_26708[(7)]);
var inst_26695 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26708__$1,(8),inst_26695,inst_26685);
} else {
if((state_val_26709 === (9))){
var state_26708__$1 = state_26708;
var statearr_26719_26740 = state_26708__$1;
(statearr_26719_26740[(2)] = tc);

(statearr_26719_26740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (5))){
var inst_26688 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26689 = cljs.core.async.close_BANG_.call(null,fc);
var state_26708__$1 = (function (){var statearr_26720 = state_26708;
(statearr_26720[(8)] = inst_26688);

return statearr_26720;
})();
var statearr_26721_26741 = state_26708__$1;
(statearr_26721_26741[(2)] = inst_26689);

(statearr_26721_26741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (14))){
var inst_26702 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
var statearr_26722_26742 = state_26708__$1;
(statearr_26722_26742[(2)] = inst_26702);

(statearr_26722_26742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (10))){
var state_26708__$1 = state_26708;
var statearr_26723_26743 = state_26708__$1;
(statearr_26723_26743[(2)] = fc);

(statearr_26723_26743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26709 === (8))){
var inst_26697 = (state_26708[(2)]);
var state_26708__$1 = state_26708;
if(cljs.core.truth_(inst_26697)){
var statearr_26724_26744 = state_26708__$1;
(statearr_26724_26744[(1)] = (12));

} else {
var statearr_26725_26745 = state_26708__$1;
(statearr_26725_26745[(1)] = (13));

}

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
});})(c__26295__auto___26731,tc,fc))
;
return ((function (switch__26207__auto__,c__26295__auto___26731,tc,fc){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_26726 = [null,null,null,null,null,null,null,null,null];
(statearr_26726[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_26726[(1)] = (1));

return statearr_26726;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_26708){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26727){if((e26727 instanceof Object)){
var ex__26211__auto__ = e26727;
var statearr_26728_26746 = state_26708;
(statearr_26728_26746[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26747 = state_26708;
state_26708 = G__26747;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_26708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_26708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___26731,tc,fc))
})();
var state__26297__auto__ = (function (){var statearr_26729 = f__26296__auto__.call(null);
(statearr_26729[(6)] = c__26295__auto___26731);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___26731,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26295__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto__){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto__){
return (function (state_26768){
var state_val_26769 = (state_26768[(1)]);
if((state_val_26769 === (7))){
var inst_26764 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26770_26788 = state_26768__$1;
(statearr_26770_26788[(2)] = inst_26764);

(statearr_26770_26788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (1))){
var inst_26748 = init;
var state_26768__$1 = (function (){var statearr_26771 = state_26768;
(statearr_26771[(7)] = inst_26748);

return statearr_26771;
})();
var statearr_26772_26789 = state_26768__$1;
(statearr_26772_26789[(2)] = null);

(statearr_26772_26789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (4))){
var inst_26751 = (state_26768[(8)]);
var inst_26751__$1 = (state_26768[(2)]);
var inst_26752 = (inst_26751__$1 == null);
var state_26768__$1 = (function (){var statearr_26773 = state_26768;
(statearr_26773[(8)] = inst_26751__$1);

return statearr_26773;
})();
if(cljs.core.truth_(inst_26752)){
var statearr_26774_26790 = state_26768__$1;
(statearr_26774_26790[(1)] = (5));

} else {
var statearr_26775_26791 = state_26768__$1;
(statearr_26775_26791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (6))){
var inst_26755 = (state_26768[(9)]);
var inst_26751 = (state_26768[(8)]);
var inst_26748 = (state_26768[(7)]);
var inst_26755__$1 = f.call(null,inst_26748,inst_26751);
var inst_26756 = cljs.core.reduced_QMARK_.call(null,inst_26755__$1);
var state_26768__$1 = (function (){var statearr_26776 = state_26768;
(statearr_26776[(9)] = inst_26755__$1);

return statearr_26776;
})();
if(inst_26756){
var statearr_26777_26792 = state_26768__$1;
(statearr_26777_26792[(1)] = (8));

} else {
var statearr_26778_26793 = state_26768__$1;
(statearr_26778_26793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (3))){
var inst_26766 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26768__$1,inst_26766);
} else {
if((state_val_26769 === (2))){
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26768__$1,(4),ch);
} else {
if((state_val_26769 === (9))){
var inst_26755 = (state_26768[(9)]);
var inst_26748 = inst_26755;
var state_26768__$1 = (function (){var statearr_26779 = state_26768;
(statearr_26779[(7)] = inst_26748);

return statearr_26779;
})();
var statearr_26780_26794 = state_26768__$1;
(statearr_26780_26794[(2)] = null);

(statearr_26780_26794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (5))){
var inst_26748 = (state_26768[(7)]);
var state_26768__$1 = state_26768;
var statearr_26781_26795 = state_26768__$1;
(statearr_26781_26795[(2)] = inst_26748);

(statearr_26781_26795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (10))){
var inst_26762 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26782_26796 = state_26768__$1;
(statearr_26782_26796[(2)] = inst_26762);

(statearr_26782_26796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26769 === (8))){
var inst_26755 = (state_26768[(9)]);
var inst_26758 = cljs.core.deref.call(null,inst_26755);
var state_26768__$1 = state_26768;
var statearr_26783_26797 = state_26768__$1;
(statearr_26783_26797[(2)] = inst_26758);

(statearr_26783_26797[(1)] = (10));


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
});})(c__26295__auto__))
;
return ((function (switch__26207__auto__,c__26295__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26208__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26208__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = cljs$core$async$reduce_$_state_machine__26208__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var cljs$core$async$reduce_$_state_machine__26208__auto____1 = (function (state_26768){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__26211__auto__ = e26785;
var statearr_26786_26798 = state_26768;
(statearr_26786_26798[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26799 = state_26768;
state_26768 = G__26799;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26208__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26208__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26208__auto____0;
cljs$core$async$reduce_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26208__auto____1;
return cljs$core$async$reduce_$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto__))
})();
var state__26297__auto__ = (function (){var statearr_26787 = f__26296__auto__.call(null);
(statearr_26787[(6)] = c__26295__auto__);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto__))
);

return c__26295__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26295__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto__,f__$1){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto__,f__$1){
return (function (state_26805){
var state_val_26806 = (state_26805[(1)]);
if((state_val_26806 === (1))){
var inst_26800 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26805__$1,(2),inst_26800);
} else {
if((state_val_26806 === (2))){
var inst_26802 = (state_26805[(2)]);
var inst_26803 = f__$1.call(null,inst_26802);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26805__$1,inst_26803);
} else {
return null;
}
}
});})(c__26295__auto__,f__$1))
;
return ((function (switch__26207__auto__,c__26295__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26208__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26208__auto____0 = (function (){
var statearr_26807 = [null,null,null,null,null,null,null];
(statearr_26807[(0)] = cljs$core$async$transduce_$_state_machine__26208__auto__);

(statearr_26807[(1)] = (1));

return statearr_26807;
});
var cljs$core$async$transduce_$_state_machine__26208__auto____1 = (function (state_26805){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26808){if((e26808 instanceof Object)){
var ex__26211__auto__ = e26808;
var statearr_26809_26811 = state_26805;
(statearr_26809_26811[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26812 = state_26805;
state_26805 = G__26812;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26208__auto__ = function(state_26805){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26208__auto____1.call(this,state_26805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26208__auto____0;
cljs$core$async$transduce_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26208__auto____1;
return cljs$core$async$transduce_$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto__,f__$1))
})();
var state__26297__auto__ = (function (){var statearr_26810 = f__26296__auto__.call(null);
(statearr_26810[(6)] = c__26295__auto__);

return statearr_26810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto__,f__$1))
);

return c__26295__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26814 = arguments.length;
switch (G__26814) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26295__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto__){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto__){
return (function (state_26839){
var state_val_26840 = (state_26839[(1)]);
if((state_val_26840 === (7))){
var inst_26821 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26841_26862 = state_26839__$1;
(statearr_26841_26862[(2)] = inst_26821);

(statearr_26841_26862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (1))){
var inst_26815 = cljs.core.seq.call(null,coll);
var inst_26816 = inst_26815;
var state_26839__$1 = (function (){var statearr_26842 = state_26839;
(statearr_26842[(7)] = inst_26816);

return statearr_26842;
})();
var statearr_26843_26863 = state_26839__$1;
(statearr_26843_26863[(2)] = null);

(statearr_26843_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (4))){
var inst_26816 = (state_26839[(7)]);
var inst_26819 = cljs.core.first.call(null,inst_26816);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26839__$1,(7),ch,inst_26819);
} else {
if((state_val_26840 === (13))){
var inst_26833 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26844_26864 = state_26839__$1;
(statearr_26844_26864[(2)] = inst_26833);

(statearr_26844_26864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (6))){
var inst_26824 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
if(cljs.core.truth_(inst_26824)){
var statearr_26845_26865 = state_26839__$1;
(statearr_26845_26865[(1)] = (8));

} else {
var statearr_26846_26866 = state_26839__$1;
(statearr_26846_26866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (3))){
var inst_26837 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26839__$1,inst_26837);
} else {
if((state_val_26840 === (12))){
var state_26839__$1 = state_26839;
var statearr_26847_26867 = state_26839__$1;
(statearr_26847_26867[(2)] = null);

(statearr_26847_26867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (2))){
var inst_26816 = (state_26839[(7)]);
var state_26839__$1 = state_26839;
if(cljs.core.truth_(inst_26816)){
var statearr_26848_26868 = state_26839__$1;
(statearr_26848_26868[(1)] = (4));

} else {
var statearr_26849_26869 = state_26839__$1;
(statearr_26849_26869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (11))){
var inst_26830 = cljs.core.async.close_BANG_.call(null,ch);
var state_26839__$1 = state_26839;
var statearr_26850_26870 = state_26839__$1;
(statearr_26850_26870[(2)] = inst_26830);

(statearr_26850_26870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (9))){
var state_26839__$1 = state_26839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26851_26871 = state_26839__$1;
(statearr_26851_26871[(1)] = (11));

} else {
var statearr_26852_26872 = state_26839__$1;
(statearr_26852_26872[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (5))){
var inst_26816 = (state_26839[(7)]);
var state_26839__$1 = state_26839;
var statearr_26853_26873 = state_26839__$1;
(statearr_26853_26873[(2)] = inst_26816);

(statearr_26853_26873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (10))){
var inst_26835 = (state_26839[(2)]);
var state_26839__$1 = state_26839;
var statearr_26854_26874 = state_26839__$1;
(statearr_26854_26874[(2)] = inst_26835);

(statearr_26854_26874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26840 === (8))){
var inst_26816 = (state_26839[(7)]);
var inst_26826 = cljs.core.next.call(null,inst_26816);
var inst_26816__$1 = inst_26826;
var state_26839__$1 = (function (){var statearr_26855 = state_26839;
(statearr_26855[(7)] = inst_26816__$1);

return statearr_26855;
})();
var statearr_26856_26875 = state_26839__$1;
(statearr_26856_26875[(2)] = null);

(statearr_26856_26875[(1)] = (2));


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
});})(c__26295__auto__))
;
return ((function (switch__26207__auto__,c__26295__auto__){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_26857 = [null,null,null,null,null,null,null,null];
(statearr_26857[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_26857[(1)] = (1));

return statearr_26857;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_26839){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_26839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e26858){if((e26858 instanceof Object)){
var ex__26211__auto__ = e26858;
var statearr_26859_26876 = state_26839;
(statearr_26859_26876[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26839;
state_26839 = G__26877;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_26839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_26839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto__))
})();
var state__26297__auto__ = (function (){var statearr_26860 = f__26296__auto__.call(null);
(statearr_26860[(6)] = c__26295__auto__);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto__))
);

return c__26295__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7441__auto__ = (((_ == null))?null:_);
var m__7442__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,_);
} else {
var m__7442__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7442__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,ch);
} else {
var m__7442__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m);
} else {
var m__7442__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26878 = (function (ch,cs,meta26879){
this.ch = ch;
this.cs = cs;
this.meta26879 = meta26879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26880,meta26879__$1){
var self__ = this;
var _26880__$1 = this;
return (new cljs.core.async.t_cljs$core$async26878(self__.ch,self__.cs,meta26879__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26880){
var self__ = this;
var _26880__$1 = this;
return self__.meta26879;
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26879","meta26879",-453282780,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26878";

cljs.core.async.t_cljs$core$async26878.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async26878");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26878 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26878(ch__$1,cs__$1,meta26879){
return (new cljs.core.async.t_cljs$core$async26878(ch__$1,cs__$1,meta26879));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26878(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26295__auto___27100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27100,cs,m,dchan,dctr,done){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27100,cs,m,dchan,dctr,done){
return (function (state_27015){
var state_val_27016 = (state_27015[(1)]);
if((state_val_27016 === (7))){
var inst_27011 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27017_27101 = state_27015__$1;
(statearr_27017_27101[(2)] = inst_27011);

(statearr_27017_27101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (20))){
var inst_26914 = (state_27015[(7)]);
var inst_26926 = cljs.core.first.call(null,inst_26914);
var inst_26927 = cljs.core.nth.call(null,inst_26926,(0),null);
var inst_26928 = cljs.core.nth.call(null,inst_26926,(1),null);
var state_27015__$1 = (function (){var statearr_27018 = state_27015;
(statearr_27018[(8)] = inst_26927);

return statearr_27018;
})();
if(cljs.core.truth_(inst_26928)){
var statearr_27019_27102 = state_27015__$1;
(statearr_27019_27102[(1)] = (22));

} else {
var statearr_27020_27103 = state_27015__$1;
(statearr_27020_27103[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (27))){
var inst_26883 = (state_27015[(9)]);
var inst_26958 = (state_27015[(10)]);
var inst_26956 = (state_27015[(11)]);
var inst_26963 = (state_27015[(12)]);
var inst_26963__$1 = cljs.core._nth.call(null,inst_26956,inst_26958);
var inst_26964 = cljs.core.async.put_BANG_.call(null,inst_26963__$1,inst_26883,done);
var state_27015__$1 = (function (){var statearr_27021 = state_27015;
(statearr_27021[(12)] = inst_26963__$1);

return statearr_27021;
})();
if(cljs.core.truth_(inst_26964)){
var statearr_27022_27104 = state_27015__$1;
(statearr_27022_27104[(1)] = (30));

} else {
var statearr_27023_27105 = state_27015__$1;
(statearr_27023_27105[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (1))){
var state_27015__$1 = state_27015;
var statearr_27024_27106 = state_27015__$1;
(statearr_27024_27106[(2)] = null);

(statearr_27024_27106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (24))){
var inst_26914 = (state_27015[(7)]);
var inst_26933 = (state_27015[(2)]);
var inst_26934 = cljs.core.next.call(null,inst_26914);
var inst_26892 = inst_26934;
var inst_26893 = null;
var inst_26894 = (0);
var inst_26895 = (0);
var state_27015__$1 = (function (){var statearr_27025 = state_27015;
(statearr_27025[(13)] = inst_26933);

(statearr_27025[(14)] = inst_26892);

(statearr_27025[(15)] = inst_26895);

(statearr_27025[(16)] = inst_26894);

(statearr_27025[(17)] = inst_26893);

return statearr_27025;
})();
var statearr_27026_27107 = state_27015__$1;
(statearr_27026_27107[(2)] = null);

(statearr_27026_27107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (39))){
var state_27015__$1 = state_27015;
var statearr_27030_27108 = state_27015__$1;
(statearr_27030_27108[(2)] = null);

(statearr_27030_27108[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (4))){
var inst_26883 = (state_27015[(9)]);
var inst_26883__$1 = (state_27015[(2)]);
var inst_26884 = (inst_26883__$1 == null);
var state_27015__$1 = (function (){var statearr_27031 = state_27015;
(statearr_27031[(9)] = inst_26883__$1);

return statearr_27031;
})();
if(cljs.core.truth_(inst_26884)){
var statearr_27032_27109 = state_27015__$1;
(statearr_27032_27109[(1)] = (5));

} else {
var statearr_27033_27110 = state_27015__$1;
(statearr_27033_27110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (15))){
var inst_26892 = (state_27015[(14)]);
var inst_26895 = (state_27015[(15)]);
var inst_26894 = (state_27015[(16)]);
var inst_26893 = (state_27015[(17)]);
var inst_26910 = (state_27015[(2)]);
var inst_26911 = (inst_26895 + (1));
var tmp27027 = inst_26892;
var tmp27028 = inst_26894;
var tmp27029 = inst_26893;
var inst_26892__$1 = tmp27027;
var inst_26893__$1 = tmp27029;
var inst_26894__$1 = tmp27028;
var inst_26895__$1 = inst_26911;
var state_27015__$1 = (function (){var statearr_27034 = state_27015;
(statearr_27034[(18)] = inst_26910);

(statearr_27034[(14)] = inst_26892__$1);

(statearr_27034[(15)] = inst_26895__$1);

(statearr_27034[(16)] = inst_26894__$1);

(statearr_27034[(17)] = inst_26893__$1);

return statearr_27034;
})();
var statearr_27035_27111 = state_27015__$1;
(statearr_27035_27111[(2)] = null);

(statearr_27035_27111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (21))){
var inst_26937 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27039_27112 = state_27015__$1;
(statearr_27039_27112[(2)] = inst_26937);

(statearr_27039_27112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (31))){
var inst_26963 = (state_27015[(12)]);
var inst_26967 = done.call(null,null);
var inst_26968 = cljs.core.async.untap_STAR_.call(null,m,inst_26963);
var state_27015__$1 = (function (){var statearr_27040 = state_27015;
(statearr_27040[(19)] = inst_26967);

return statearr_27040;
})();
var statearr_27041_27113 = state_27015__$1;
(statearr_27041_27113[(2)] = inst_26968);

(statearr_27041_27113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (32))){
var inst_26958 = (state_27015[(10)]);
var inst_26956 = (state_27015[(11)]);
var inst_26955 = (state_27015[(20)]);
var inst_26957 = (state_27015[(21)]);
var inst_26970 = (state_27015[(2)]);
var inst_26971 = (inst_26958 + (1));
var tmp27036 = inst_26956;
var tmp27037 = inst_26955;
var tmp27038 = inst_26957;
var inst_26955__$1 = tmp27037;
var inst_26956__$1 = tmp27036;
var inst_26957__$1 = tmp27038;
var inst_26958__$1 = inst_26971;
var state_27015__$1 = (function (){var statearr_27042 = state_27015;
(statearr_27042[(10)] = inst_26958__$1);

(statearr_27042[(22)] = inst_26970);

(statearr_27042[(11)] = inst_26956__$1);

(statearr_27042[(20)] = inst_26955__$1);

(statearr_27042[(21)] = inst_26957__$1);

return statearr_27042;
})();
var statearr_27043_27114 = state_27015__$1;
(statearr_27043_27114[(2)] = null);

(statearr_27043_27114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (40))){
var inst_26983 = (state_27015[(23)]);
var inst_26987 = done.call(null,null);
var inst_26988 = cljs.core.async.untap_STAR_.call(null,m,inst_26983);
var state_27015__$1 = (function (){var statearr_27044 = state_27015;
(statearr_27044[(24)] = inst_26987);

return statearr_27044;
})();
var statearr_27045_27115 = state_27015__$1;
(statearr_27045_27115[(2)] = inst_26988);

(statearr_27045_27115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (33))){
var inst_26974 = (state_27015[(25)]);
var inst_26976 = cljs.core.chunked_seq_QMARK_.call(null,inst_26974);
var state_27015__$1 = state_27015;
if(inst_26976){
var statearr_27046_27116 = state_27015__$1;
(statearr_27046_27116[(1)] = (36));

} else {
var statearr_27047_27117 = state_27015__$1;
(statearr_27047_27117[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (13))){
var inst_26904 = (state_27015[(26)]);
var inst_26907 = cljs.core.async.close_BANG_.call(null,inst_26904);
var state_27015__$1 = state_27015;
var statearr_27048_27118 = state_27015__$1;
(statearr_27048_27118[(2)] = inst_26907);

(statearr_27048_27118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (22))){
var inst_26927 = (state_27015[(8)]);
var inst_26930 = cljs.core.async.close_BANG_.call(null,inst_26927);
var state_27015__$1 = state_27015;
var statearr_27049_27119 = state_27015__$1;
(statearr_27049_27119[(2)] = inst_26930);

(statearr_27049_27119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (36))){
var inst_26974 = (state_27015[(25)]);
var inst_26978 = cljs.core.chunk_first.call(null,inst_26974);
var inst_26979 = cljs.core.chunk_rest.call(null,inst_26974);
var inst_26980 = cljs.core.count.call(null,inst_26978);
var inst_26955 = inst_26979;
var inst_26956 = inst_26978;
var inst_26957 = inst_26980;
var inst_26958 = (0);
var state_27015__$1 = (function (){var statearr_27050 = state_27015;
(statearr_27050[(10)] = inst_26958);

(statearr_27050[(11)] = inst_26956);

(statearr_27050[(20)] = inst_26955);

(statearr_27050[(21)] = inst_26957);

return statearr_27050;
})();
var statearr_27051_27120 = state_27015__$1;
(statearr_27051_27120[(2)] = null);

(statearr_27051_27120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (41))){
var inst_26974 = (state_27015[(25)]);
var inst_26990 = (state_27015[(2)]);
var inst_26991 = cljs.core.next.call(null,inst_26974);
var inst_26955 = inst_26991;
var inst_26956 = null;
var inst_26957 = (0);
var inst_26958 = (0);
var state_27015__$1 = (function (){var statearr_27052 = state_27015;
(statearr_27052[(10)] = inst_26958);

(statearr_27052[(11)] = inst_26956);

(statearr_27052[(27)] = inst_26990);

(statearr_27052[(20)] = inst_26955);

(statearr_27052[(21)] = inst_26957);

return statearr_27052;
})();
var statearr_27053_27121 = state_27015__$1;
(statearr_27053_27121[(2)] = null);

(statearr_27053_27121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (43))){
var state_27015__$1 = state_27015;
var statearr_27054_27122 = state_27015__$1;
(statearr_27054_27122[(2)] = null);

(statearr_27054_27122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (29))){
var inst_26999 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27055_27123 = state_27015__$1;
(statearr_27055_27123[(2)] = inst_26999);

(statearr_27055_27123[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (44))){
var inst_27008 = (state_27015[(2)]);
var state_27015__$1 = (function (){var statearr_27056 = state_27015;
(statearr_27056[(28)] = inst_27008);

return statearr_27056;
})();
var statearr_27057_27124 = state_27015__$1;
(statearr_27057_27124[(2)] = null);

(statearr_27057_27124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (6))){
var inst_26947 = (state_27015[(29)]);
var inst_26946 = cljs.core.deref.call(null,cs);
var inst_26947__$1 = cljs.core.keys.call(null,inst_26946);
var inst_26948 = cljs.core.count.call(null,inst_26947__$1);
var inst_26949 = cljs.core.reset_BANG_.call(null,dctr,inst_26948);
var inst_26954 = cljs.core.seq.call(null,inst_26947__$1);
var inst_26955 = inst_26954;
var inst_26956 = null;
var inst_26957 = (0);
var inst_26958 = (0);
var state_27015__$1 = (function (){var statearr_27058 = state_27015;
(statearr_27058[(29)] = inst_26947__$1);

(statearr_27058[(30)] = inst_26949);

(statearr_27058[(10)] = inst_26958);

(statearr_27058[(11)] = inst_26956);

(statearr_27058[(20)] = inst_26955);

(statearr_27058[(21)] = inst_26957);

return statearr_27058;
})();
var statearr_27059_27125 = state_27015__$1;
(statearr_27059_27125[(2)] = null);

(statearr_27059_27125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (28))){
var inst_26974 = (state_27015[(25)]);
var inst_26955 = (state_27015[(20)]);
var inst_26974__$1 = cljs.core.seq.call(null,inst_26955);
var state_27015__$1 = (function (){var statearr_27060 = state_27015;
(statearr_27060[(25)] = inst_26974__$1);

return statearr_27060;
})();
if(inst_26974__$1){
var statearr_27061_27126 = state_27015__$1;
(statearr_27061_27126[(1)] = (33));

} else {
var statearr_27062_27127 = state_27015__$1;
(statearr_27062_27127[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (25))){
var inst_26958 = (state_27015[(10)]);
var inst_26957 = (state_27015[(21)]);
var inst_26960 = (inst_26958 < inst_26957);
var inst_26961 = inst_26960;
var state_27015__$1 = state_27015;
if(cljs.core.truth_(inst_26961)){
var statearr_27063_27128 = state_27015__$1;
(statearr_27063_27128[(1)] = (27));

} else {
var statearr_27064_27129 = state_27015__$1;
(statearr_27064_27129[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (34))){
var state_27015__$1 = state_27015;
var statearr_27065_27130 = state_27015__$1;
(statearr_27065_27130[(2)] = null);

(statearr_27065_27130[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (17))){
var state_27015__$1 = state_27015;
var statearr_27066_27131 = state_27015__$1;
(statearr_27066_27131[(2)] = null);

(statearr_27066_27131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (3))){
var inst_27013 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27015__$1,inst_27013);
} else {
if((state_val_27016 === (12))){
var inst_26942 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27067_27132 = state_27015__$1;
(statearr_27067_27132[(2)] = inst_26942);

(statearr_27067_27132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (2))){
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27015__$1,(4),ch);
} else {
if((state_val_27016 === (23))){
var state_27015__$1 = state_27015;
var statearr_27068_27133 = state_27015__$1;
(statearr_27068_27133[(2)] = null);

(statearr_27068_27133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (35))){
var inst_26997 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27069_27134 = state_27015__$1;
(statearr_27069_27134[(2)] = inst_26997);

(statearr_27069_27134[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (19))){
var inst_26914 = (state_27015[(7)]);
var inst_26918 = cljs.core.chunk_first.call(null,inst_26914);
var inst_26919 = cljs.core.chunk_rest.call(null,inst_26914);
var inst_26920 = cljs.core.count.call(null,inst_26918);
var inst_26892 = inst_26919;
var inst_26893 = inst_26918;
var inst_26894 = inst_26920;
var inst_26895 = (0);
var state_27015__$1 = (function (){var statearr_27070 = state_27015;
(statearr_27070[(14)] = inst_26892);

(statearr_27070[(15)] = inst_26895);

(statearr_27070[(16)] = inst_26894);

(statearr_27070[(17)] = inst_26893);

return statearr_27070;
})();
var statearr_27071_27135 = state_27015__$1;
(statearr_27071_27135[(2)] = null);

(statearr_27071_27135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (11))){
var inst_26914 = (state_27015[(7)]);
var inst_26892 = (state_27015[(14)]);
var inst_26914__$1 = cljs.core.seq.call(null,inst_26892);
var state_27015__$1 = (function (){var statearr_27072 = state_27015;
(statearr_27072[(7)] = inst_26914__$1);

return statearr_27072;
})();
if(inst_26914__$1){
var statearr_27073_27136 = state_27015__$1;
(statearr_27073_27136[(1)] = (16));

} else {
var statearr_27074_27137 = state_27015__$1;
(statearr_27074_27137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (9))){
var inst_26944 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27075_27138 = state_27015__$1;
(statearr_27075_27138[(2)] = inst_26944);

(statearr_27075_27138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (5))){
var inst_26890 = cljs.core.deref.call(null,cs);
var inst_26891 = cljs.core.seq.call(null,inst_26890);
var inst_26892 = inst_26891;
var inst_26893 = null;
var inst_26894 = (0);
var inst_26895 = (0);
var state_27015__$1 = (function (){var statearr_27076 = state_27015;
(statearr_27076[(14)] = inst_26892);

(statearr_27076[(15)] = inst_26895);

(statearr_27076[(16)] = inst_26894);

(statearr_27076[(17)] = inst_26893);

return statearr_27076;
})();
var statearr_27077_27139 = state_27015__$1;
(statearr_27077_27139[(2)] = null);

(statearr_27077_27139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (14))){
var state_27015__$1 = state_27015;
var statearr_27078_27140 = state_27015__$1;
(statearr_27078_27140[(2)] = null);

(statearr_27078_27140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (45))){
var inst_27005 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27079_27141 = state_27015__$1;
(statearr_27079_27141[(2)] = inst_27005);

(statearr_27079_27141[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (26))){
var inst_26947 = (state_27015[(29)]);
var inst_27001 = (state_27015[(2)]);
var inst_27002 = cljs.core.seq.call(null,inst_26947);
var state_27015__$1 = (function (){var statearr_27080 = state_27015;
(statearr_27080[(31)] = inst_27001);

return statearr_27080;
})();
if(inst_27002){
var statearr_27081_27142 = state_27015__$1;
(statearr_27081_27142[(1)] = (42));

} else {
var statearr_27082_27143 = state_27015__$1;
(statearr_27082_27143[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (16))){
var inst_26914 = (state_27015[(7)]);
var inst_26916 = cljs.core.chunked_seq_QMARK_.call(null,inst_26914);
var state_27015__$1 = state_27015;
if(inst_26916){
var statearr_27083_27144 = state_27015__$1;
(statearr_27083_27144[(1)] = (19));

} else {
var statearr_27084_27145 = state_27015__$1;
(statearr_27084_27145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (38))){
var inst_26994 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27085_27146 = state_27015__$1;
(statearr_27085_27146[(2)] = inst_26994);

(statearr_27085_27146[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (30))){
var state_27015__$1 = state_27015;
var statearr_27086_27147 = state_27015__$1;
(statearr_27086_27147[(2)] = null);

(statearr_27086_27147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (10))){
var inst_26895 = (state_27015[(15)]);
var inst_26893 = (state_27015[(17)]);
var inst_26903 = cljs.core._nth.call(null,inst_26893,inst_26895);
var inst_26904 = cljs.core.nth.call(null,inst_26903,(0),null);
var inst_26905 = cljs.core.nth.call(null,inst_26903,(1),null);
var state_27015__$1 = (function (){var statearr_27087 = state_27015;
(statearr_27087[(26)] = inst_26904);

return statearr_27087;
})();
if(cljs.core.truth_(inst_26905)){
var statearr_27088_27148 = state_27015__$1;
(statearr_27088_27148[(1)] = (13));

} else {
var statearr_27089_27149 = state_27015__$1;
(statearr_27089_27149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (18))){
var inst_26940 = (state_27015[(2)]);
var state_27015__$1 = state_27015;
var statearr_27090_27150 = state_27015__$1;
(statearr_27090_27150[(2)] = inst_26940);

(statearr_27090_27150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (42))){
var state_27015__$1 = state_27015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27015__$1,(45),dchan);
} else {
if((state_val_27016 === (37))){
var inst_26883 = (state_27015[(9)]);
var inst_26974 = (state_27015[(25)]);
var inst_26983 = (state_27015[(23)]);
var inst_26983__$1 = cljs.core.first.call(null,inst_26974);
var inst_26984 = cljs.core.async.put_BANG_.call(null,inst_26983__$1,inst_26883,done);
var state_27015__$1 = (function (){var statearr_27091 = state_27015;
(statearr_27091[(23)] = inst_26983__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_26984)){
var statearr_27092_27151 = state_27015__$1;
(statearr_27092_27151[(1)] = (39));

} else {
var statearr_27093_27152 = state_27015__$1;
(statearr_27093_27152[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27016 === (8))){
var inst_26895 = (state_27015[(15)]);
var inst_26894 = (state_27015[(16)]);
var inst_26897 = (inst_26895 < inst_26894);
var inst_26898 = inst_26897;
var state_27015__$1 = state_27015;
if(cljs.core.truth_(inst_26898)){
var statearr_27094_27153 = state_27015__$1;
(statearr_27094_27153[(1)] = (10));

} else {
var statearr_27095_27154 = state_27015__$1;
(statearr_27095_27154[(1)] = (11));

}

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
});})(c__26295__auto___27100,cs,m,dchan,dctr,done))
;
return ((function (switch__26207__auto__,c__26295__auto___27100,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26208__auto__ = null;
var cljs$core$async$mult_$_state_machine__26208__auto____0 = (function (){
var statearr_27096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27096[(0)] = cljs$core$async$mult_$_state_machine__26208__auto__);

(statearr_27096[(1)] = (1));

return statearr_27096;
});
var cljs$core$async$mult_$_state_machine__26208__auto____1 = (function (state_27015){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27097){if((e27097 instanceof Object)){
var ex__26211__auto__ = e27097;
var statearr_27098_27155 = state_27015;
(statearr_27098_27155[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27015;
state_27015 = G__27156;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26208__auto__ = function(state_27015){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26208__auto____1.call(this,state_27015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26208__auto____0;
cljs$core$async$mult_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26208__auto____1;
return cljs$core$async$mult_$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27100,cs,m,dchan,dctr,done))
})();
var state__26297__auto__ = (function (){var statearr_27099 = f__26296__auto__.call(null);
(statearr_27099[(6)] = c__26295__auto___27100);

return statearr_27099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27100,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27158 = arguments.length;
switch (G__27158) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,ch);
} else {
var m__7442__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,ch);
} else {
var m__7442__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m);
} else {
var m__7442__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,state_map);
} else {
var m__7442__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7441__auto__ = (((m == null))?null:m);
var m__7442__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,m,mode);
} else {
var m__7442__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7904__auto__ = [];
var len__7897__auto___27170 = arguments.length;
var i__7898__auto___27171 = (0);
while(true){
if((i__7898__auto___27171 < len__7897__auto___27170)){
args__7904__auto__.push((arguments[i__7898__auto___27171]));

var G__27172 = (i__7898__auto___27171 + (1));
i__7898__auto___27171 = G__27172;
continue;
} else {
}
break;
}

var argseq__7905__auto__ = ((((3) < args__7904__auto__.length))?(new cljs.core.IndexedSeq(args__7904__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7905__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27164){
var map__27165 = p__27164;
var map__27165__$1 = ((((!((map__27165 == null)))?((((map__27165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27165):map__27165);
var opts = map__27165__$1;
var statearr_27167_27173 = state;
(statearr_27167_27173[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__27165,map__27165__$1,opts){
return (function (val){
var statearr_27168_27174 = state;
(statearr_27168_27174[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27165,map__27165__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_27169_27175 = state;
(statearr_27169_27175[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27160){
var G__27161 = cljs.core.first.call(null,seq27160);
var seq27160__$1 = cljs.core.next.call(null,seq27160);
var G__27162 = cljs.core.first.call(null,seq27160__$1);
var seq27160__$2 = cljs.core.next.call(null,seq27160__$1);
var G__27163 = cljs.core.first.call(null,seq27160__$2);
var seq27160__$3 = cljs.core.next.call(null,seq27160__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27161,G__27162,G__27163,seq27160__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27176 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27177){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27177 = meta27177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27178,meta27177__$1){
var self__ = this;
var _27178__$1 = this;
return (new cljs.core.async.t_cljs$core$async27176(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27177__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27178){
var self__ = this;
var _27178__$1 = this;
return self__.meta27177;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27177","meta27177",2066105173,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27176";

cljs.core.async.t_cljs$core$async27176.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27176");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27176 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27176(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27177){
return (new cljs.core.async.t_cljs$core$async27176(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27177));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27176(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26295__auto___27340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27280){
var state_val_27281 = (state_27280[(1)]);
if((state_val_27281 === (7))){
var inst_27195 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27282_27341 = state_27280__$1;
(statearr_27282_27341[(2)] = inst_27195);

(statearr_27282_27341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (20))){
var inst_27207 = (state_27280[(7)]);
var state_27280__$1 = state_27280;
var statearr_27283_27342 = state_27280__$1;
(statearr_27283_27342[(2)] = inst_27207);

(statearr_27283_27342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (27))){
var state_27280__$1 = state_27280;
var statearr_27284_27343 = state_27280__$1;
(statearr_27284_27343[(2)] = null);

(statearr_27284_27343[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (1))){
var inst_27182 = (state_27280[(8)]);
var inst_27182__$1 = calc_state.call(null);
var inst_27184 = (inst_27182__$1 == null);
var inst_27185 = cljs.core.not.call(null,inst_27184);
var state_27280__$1 = (function (){var statearr_27285 = state_27280;
(statearr_27285[(8)] = inst_27182__$1);

return statearr_27285;
})();
if(inst_27185){
var statearr_27286_27344 = state_27280__$1;
(statearr_27286_27344[(1)] = (2));

} else {
var statearr_27287_27345 = state_27280__$1;
(statearr_27287_27345[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (24))){
var inst_27231 = (state_27280[(9)]);
var inst_27254 = (state_27280[(10)]);
var inst_27240 = (state_27280[(11)]);
var inst_27254__$1 = inst_27231.call(null,inst_27240);
var state_27280__$1 = (function (){var statearr_27288 = state_27280;
(statearr_27288[(10)] = inst_27254__$1);

return statearr_27288;
})();
if(cljs.core.truth_(inst_27254__$1)){
var statearr_27289_27346 = state_27280__$1;
(statearr_27289_27346[(1)] = (29));

} else {
var statearr_27290_27347 = state_27280__$1;
(statearr_27290_27347[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (4))){
var inst_27198 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27198)){
var statearr_27291_27348 = state_27280__$1;
(statearr_27291_27348[(1)] = (8));

} else {
var statearr_27292_27349 = state_27280__$1;
(statearr_27292_27349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (15))){
var inst_27225 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27225)){
var statearr_27293_27350 = state_27280__$1;
(statearr_27293_27350[(1)] = (19));

} else {
var statearr_27294_27351 = state_27280__$1;
(statearr_27294_27351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (21))){
var inst_27230 = (state_27280[(12)]);
var inst_27230__$1 = (state_27280[(2)]);
var inst_27231 = cljs.core.get.call(null,inst_27230__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27232 = cljs.core.get.call(null,inst_27230__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27233 = cljs.core.get.call(null,inst_27230__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27280__$1 = (function (){var statearr_27295 = state_27280;
(statearr_27295[(9)] = inst_27231);

(statearr_27295[(13)] = inst_27232);

(statearr_27295[(12)] = inst_27230__$1);

return statearr_27295;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27280__$1,(22),inst_27233);
} else {
if((state_val_27281 === (31))){
var inst_27262 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27262)){
var statearr_27296_27352 = state_27280__$1;
(statearr_27296_27352[(1)] = (32));

} else {
var statearr_27297_27353 = state_27280__$1;
(statearr_27297_27353[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (32))){
var inst_27239 = (state_27280[(14)]);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27280__$1,(35),out,inst_27239);
} else {
if((state_val_27281 === (33))){
var inst_27230 = (state_27280[(12)]);
var inst_27207 = inst_27230;
var state_27280__$1 = (function (){var statearr_27298 = state_27280;
(statearr_27298[(7)] = inst_27207);

return statearr_27298;
})();
var statearr_27299_27354 = state_27280__$1;
(statearr_27299_27354[(2)] = null);

(statearr_27299_27354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (13))){
var inst_27207 = (state_27280[(7)]);
var inst_27214 = inst_27207.cljs$lang$protocol_mask$partition0$;
var inst_27215 = (inst_27214 & (64));
var inst_27216 = inst_27207.cljs$core$ISeq$;
var inst_27217 = (cljs.core.PROTOCOL_SENTINEL === inst_27216);
var inst_27218 = (inst_27215) || (inst_27217);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27218)){
var statearr_27300_27355 = state_27280__$1;
(statearr_27300_27355[(1)] = (16));

} else {
var statearr_27301_27356 = state_27280__$1;
(statearr_27301_27356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (22))){
var inst_27239 = (state_27280[(14)]);
var inst_27240 = (state_27280[(11)]);
var inst_27238 = (state_27280[(2)]);
var inst_27239__$1 = cljs.core.nth.call(null,inst_27238,(0),null);
var inst_27240__$1 = cljs.core.nth.call(null,inst_27238,(1),null);
var inst_27241 = (inst_27239__$1 == null);
var inst_27242 = cljs.core._EQ_.call(null,inst_27240__$1,change);
var inst_27243 = (inst_27241) || (inst_27242);
var state_27280__$1 = (function (){var statearr_27302 = state_27280;
(statearr_27302[(14)] = inst_27239__$1);

(statearr_27302[(11)] = inst_27240__$1);

return statearr_27302;
})();
if(cljs.core.truth_(inst_27243)){
var statearr_27303_27357 = state_27280__$1;
(statearr_27303_27357[(1)] = (23));

} else {
var statearr_27304_27358 = state_27280__$1;
(statearr_27304_27358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (36))){
var inst_27230 = (state_27280[(12)]);
var inst_27207 = inst_27230;
var state_27280__$1 = (function (){var statearr_27305 = state_27280;
(statearr_27305[(7)] = inst_27207);

return statearr_27305;
})();
var statearr_27306_27359 = state_27280__$1;
(statearr_27306_27359[(2)] = null);

(statearr_27306_27359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (29))){
var inst_27254 = (state_27280[(10)]);
var state_27280__$1 = state_27280;
var statearr_27307_27360 = state_27280__$1;
(statearr_27307_27360[(2)] = inst_27254);

(statearr_27307_27360[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (6))){
var state_27280__$1 = state_27280;
var statearr_27308_27361 = state_27280__$1;
(statearr_27308_27361[(2)] = false);

(statearr_27308_27361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (28))){
var inst_27250 = (state_27280[(2)]);
var inst_27251 = calc_state.call(null);
var inst_27207 = inst_27251;
var state_27280__$1 = (function (){var statearr_27309 = state_27280;
(statearr_27309[(7)] = inst_27207);

(statearr_27309[(15)] = inst_27250);

return statearr_27309;
})();
var statearr_27310_27362 = state_27280__$1;
(statearr_27310_27362[(2)] = null);

(statearr_27310_27362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (25))){
var inst_27276 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27311_27363 = state_27280__$1;
(statearr_27311_27363[(2)] = inst_27276);

(statearr_27311_27363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (34))){
var inst_27274 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27312_27364 = state_27280__$1;
(statearr_27312_27364[(2)] = inst_27274);

(statearr_27312_27364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (17))){
var state_27280__$1 = state_27280;
var statearr_27313_27365 = state_27280__$1;
(statearr_27313_27365[(2)] = false);

(statearr_27313_27365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (3))){
var state_27280__$1 = state_27280;
var statearr_27314_27366 = state_27280__$1;
(statearr_27314_27366[(2)] = false);

(statearr_27314_27366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (12))){
var inst_27278 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27280__$1,inst_27278);
} else {
if((state_val_27281 === (2))){
var inst_27182 = (state_27280[(8)]);
var inst_27187 = inst_27182.cljs$lang$protocol_mask$partition0$;
var inst_27188 = (inst_27187 & (64));
var inst_27189 = inst_27182.cljs$core$ISeq$;
var inst_27190 = (cljs.core.PROTOCOL_SENTINEL === inst_27189);
var inst_27191 = (inst_27188) || (inst_27190);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27191)){
var statearr_27315_27367 = state_27280__$1;
(statearr_27315_27367[(1)] = (5));

} else {
var statearr_27316_27368 = state_27280__$1;
(statearr_27316_27368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (23))){
var inst_27239 = (state_27280[(14)]);
var inst_27245 = (inst_27239 == null);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27245)){
var statearr_27317_27369 = state_27280__$1;
(statearr_27317_27369[(1)] = (26));

} else {
var statearr_27318_27370 = state_27280__$1;
(statearr_27318_27370[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (35))){
var inst_27265 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27265)){
var statearr_27319_27371 = state_27280__$1;
(statearr_27319_27371[(1)] = (36));

} else {
var statearr_27320_27372 = state_27280__$1;
(statearr_27320_27372[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (19))){
var inst_27207 = (state_27280[(7)]);
var inst_27227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27207);
var state_27280__$1 = state_27280;
var statearr_27321_27373 = state_27280__$1;
(statearr_27321_27373[(2)] = inst_27227);

(statearr_27321_27373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (11))){
var inst_27207 = (state_27280[(7)]);
var inst_27211 = (inst_27207 == null);
var inst_27212 = cljs.core.not.call(null,inst_27211);
var state_27280__$1 = state_27280;
if(inst_27212){
var statearr_27322_27374 = state_27280__$1;
(statearr_27322_27374[(1)] = (13));

} else {
var statearr_27323_27375 = state_27280__$1;
(statearr_27323_27375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (9))){
var inst_27182 = (state_27280[(8)]);
var state_27280__$1 = state_27280;
var statearr_27324_27376 = state_27280__$1;
(statearr_27324_27376[(2)] = inst_27182);

(statearr_27324_27376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (5))){
var state_27280__$1 = state_27280;
var statearr_27325_27377 = state_27280__$1;
(statearr_27325_27377[(2)] = true);

(statearr_27325_27377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (14))){
var state_27280__$1 = state_27280;
var statearr_27326_27378 = state_27280__$1;
(statearr_27326_27378[(2)] = false);

(statearr_27326_27378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (26))){
var inst_27240 = (state_27280[(11)]);
var inst_27247 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27240);
var state_27280__$1 = state_27280;
var statearr_27327_27379 = state_27280__$1;
(statearr_27327_27379[(2)] = inst_27247);

(statearr_27327_27379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (16))){
var state_27280__$1 = state_27280;
var statearr_27328_27380 = state_27280__$1;
(statearr_27328_27380[(2)] = true);

(statearr_27328_27380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (38))){
var inst_27270 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27329_27381 = state_27280__$1;
(statearr_27329_27381[(2)] = inst_27270);

(statearr_27329_27381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (30))){
var inst_27231 = (state_27280[(9)]);
var inst_27232 = (state_27280[(13)]);
var inst_27240 = (state_27280[(11)]);
var inst_27257 = cljs.core.empty_QMARK_.call(null,inst_27231);
var inst_27258 = inst_27232.call(null,inst_27240);
var inst_27259 = cljs.core.not.call(null,inst_27258);
var inst_27260 = (inst_27257) && (inst_27259);
var state_27280__$1 = state_27280;
var statearr_27330_27382 = state_27280__$1;
(statearr_27330_27382[(2)] = inst_27260);

(statearr_27330_27382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (10))){
var inst_27182 = (state_27280[(8)]);
var inst_27203 = (state_27280[(2)]);
var inst_27204 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27205 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27206 = cljs.core.get.call(null,inst_27203,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27207 = inst_27182;
var state_27280__$1 = (function (){var statearr_27331 = state_27280;
(statearr_27331[(7)] = inst_27207);

(statearr_27331[(16)] = inst_27204);

(statearr_27331[(17)] = inst_27206);

(statearr_27331[(18)] = inst_27205);

return statearr_27331;
})();
var statearr_27332_27383 = state_27280__$1;
(statearr_27332_27383[(2)] = null);

(statearr_27332_27383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (18))){
var inst_27222 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27333_27384 = state_27280__$1;
(statearr_27333_27384[(2)] = inst_27222);

(statearr_27333_27384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (37))){
var state_27280__$1 = state_27280;
var statearr_27334_27385 = state_27280__$1;
(statearr_27334_27385[(2)] = null);

(statearr_27334_27385[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (8))){
var inst_27182 = (state_27280[(8)]);
var inst_27200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27182);
var state_27280__$1 = state_27280;
var statearr_27335_27386 = state_27280__$1;
(statearr_27335_27386[(2)] = inst_27200);

(statearr_27335_27386[(1)] = (10));


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
}
}
}
}
}
}
});})(c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26207__auto__,c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26208__auto__ = null;
var cljs$core$async$mix_$_state_machine__26208__auto____0 = (function (){
var statearr_27336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27336[(0)] = cljs$core$async$mix_$_state_machine__26208__auto__);

(statearr_27336[(1)] = (1));

return statearr_27336;
});
var cljs$core$async$mix_$_state_machine__26208__auto____1 = (function (state_27280){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27337){if((e27337 instanceof Object)){
var ex__26211__auto__ = e27337;
var statearr_27338_27387 = state_27280;
(statearr_27338_27387[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27388 = state_27280;
state_27280 = G__27388;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26208__auto__ = function(state_27280){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26208__auto____1.call(this,state_27280);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26208__auto____0;
cljs$core$async$mix_$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26208__auto____1;
return cljs$core$async$mix_$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26297__auto__ = (function (){var statearr_27339 = f__26296__auto__.call(null);
(statearr_27339[(6)] = c__26295__auto___27340);

return statearr_27339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7441__auto__ = (((p == null))?null:p);
var m__7442__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7442__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7441__auto__ = (((p == null))?null:p);
var m__7442__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,p,v,ch);
} else {
var m__7442__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27390 = arguments.length;
switch (G__27390) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7441__auto__ = (((p == null))?null:p);
var m__7442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,p);
} else {
var m__7442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7441__auto__ = (((p == null))?null:p);
var m__7442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7441__auto__)]);
if(!((m__7442__auto__ == null))){
return m__7442__auto__.call(null,p,v);
} else {
var m__7442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7442__auto____$1 == null))){
return m__7442__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27394 = arguments.length;
switch (G__27394) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6772__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6772__auto__)){
return or__6772__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6772__auto__,mults){
return (function (p1__27392_SHARP_){
if(cljs.core.truth_(p1__27392_SHARP_.call(null,topic))){
return p1__27392_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27392_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27395 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27396){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27396 = meta27396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27397,meta27396__$1){
var self__ = this;
var _27397__$1 = this;
return (new cljs.core.async.t_cljs$core$async27395(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27396__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27397){
var self__ = this;
var _27397__$1 = this;
return self__.meta27396;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27396","meta27396",769629117,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27395";

cljs.core.async.t_cljs$core$async27395.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27395");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27395 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27396){
return (new cljs.core.async.t_cljs$core$async27395(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27396));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27395(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26295__auto___27515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27515,mults,ensure_mult,p){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27515,mults,ensure_mult,p){
return (function (state_27469){
var state_val_27470 = (state_27469[(1)]);
if((state_val_27470 === (7))){
var inst_27465 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27471_27516 = state_27469__$1;
(statearr_27471_27516[(2)] = inst_27465);

(statearr_27471_27516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (20))){
var state_27469__$1 = state_27469;
var statearr_27472_27517 = state_27469__$1;
(statearr_27472_27517[(2)] = null);

(statearr_27472_27517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (1))){
var state_27469__$1 = state_27469;
var statearr_27473_27518 = state_27469__$1;
(statearr_27473_27518[(2)] = null);

(statearr_27473_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (24))){
var inst_27448 = (state_27469[(7)]);
var inst_27457 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27448);
var state_27469__$1 = state_27469;
var statearr_27474_27519 = state_27469__$1;
(statearr_27474_27519[(2)] = inst_27457);

(statearr_27474_27519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (4))){
var inst_27400 = (state_27469[(8)]);
var inst_27400__$1 = (state_27469[(2)]);
var inst_27401 = (inst_27400__$1 == null);
var state_27469__$1 = (function (){var statearr_27475 = state_27469;
(statearr_27475[(8)] = inst_27400__$1);

return statearr_27475;
})();
if(cljs.core.truth_(inst_27401)){
var statearr_27476_27520 = state_27469__$1;
(statearr_27476_27520[(1)] = (5));

} else {
var statearr_27477_27521 = state_27469__$1;
(statearr_27477_27521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (15))){
var inst_27442 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27478_27522 = state_27469__$1;
(statearr_27478_27522[(2)] = inst_27442);

(statearr_27478_27522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (21))){
var inst_27462 = (state_27469[(2)]);
var state_27469__$1 = (function (){var statearr_27479 = state_27469;
(statearr_27479[(9)] = inst_27462);

return statearr_27479;
})();
var statearr_27480_27523 = state_27469__$1;
(statearr_27480_27523[(2)] = null);

(statearr_27480_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (13))){
var inst_27424 = (state_27469[(10)]);
var inst_27426 = cljs.core.chunked_seq_QMARK_.call(null,inst_27424);
var state_27469__$1 = state_27469;
if(inst_27426){
var statearr_27481_27524 = state_27469__$1;
(statearr_27481_27524[(1)] = (16));

} else {
var statearr_27482_27525 = state_27469__$1;
(statearr_27482_27525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (22))){
var inst_27454 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27454)){
var statearr_27483_27526 = state_27469__$1;
(statearr_27483_27526[(1)] = (23));

} else {
var statearr_27484_27527 = state_27469__$1;
(statearr_27484_27527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (6))){
var inst_27450 = (state_27469[(11)]);
var inst_27448 = (state_27469[(7)]);
var inst_27400 = (state_27469[(8)]);
var inst_27448__$1 = topic_fn.call(null,inst_27400);
var inst_27449 = cljs.core.deref.call(null,mults);
var inst_27450__$1 = cljs.core.get.call(null,inst_27449,inst_27448__$1);
var state_27469__$1 = (function (){var statearr_27485 = state_27469;
(statearr_27485[(11)] = inst_27450__$1);

(statearr_27485[(7)] = inst_27448__$1);

return statearr_27485;
})();
if(cljs.core.truth_(inst_27450__$1)){
var statearr_27486_27528 = state_27469__$1;
(statearr_27486_27528[(1)] = (19));

} else {
var statearr_27487_27529 = state_27469__$1;
(statearr_27487_27529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (25))){
var inst_27459 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27488_27530 = state_27469__$1;
(statearr_27488_27530[(2)] = inst_27459);

(statearr_27488_27530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (17))){
var inst_27424 = (state_27469[(10)]);
var inst_27433 = cljs.core.first.call(null,inst_27424);
var inst_27434 = cljs.core.async.muxch_STAR_.call(null,inst_27433);
var inst_27435 = cljs.core.async.close_BANG_.call(null,inst_27434);
var inst_27436 = cljs.core.next.call(null,inst_27424);
var inst_27410 = inst_27436;
var inst_27411 = null;
var inst_27412 = (0);
var inst_27413 = (0);
var state_27469__$1 = (function (){var statearr_27489 = state_27469;
(statearr_27489[(12)] = inst_27411);

(statearr_27489[(13)] = inst_27410);

(statearr_27489[(14)] = inst_27413);

(statearr_27489[(15)] = inst_27412);

(statearr_27489[(16)] = inst_27435);

return statearr_27489;
})();
var statearr_27490_27531 = state_27469__$1;
(statearr_27490_27531[(2)] = null);

(statearr_27490_27531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (3))){
var inst_27467 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else {
if((state_val_27470 === (12))){
var inst_27444 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27491_27532 = state_27469__$1;
(statearr_27491_27532[(2)] = inst_27444);

(statearr_27491_27532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (2))){
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,(4),ch);
} else {
if((state_val_27470 === (23))){
var state_27469__$1 = state_27469;
var statearr_27492_27533 = state_27469__$1;
(statearr_27492_27533[(2)] = null);

(statearr_27492_27533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (19))){
var inst_27450 = (state_27469[(11)]);
var inst_27400 = (state_27469[(8)]);
var inst_27452 = cljs.core.async.muxch_STAR_.call(null,inst_27450);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27469__$1,(22),inst_27452,inst_27400);
} else {
if((state_val_27470 === (11))){
var inst_27410 = (state_27469[(13)]);
var inst_27424 = (state_27469[(10)]);
var inst_27424__$1 = cljs.core.seq.call(null,inst_27410);
var state_27469__$1 = (function (){var statearr_27493 = state_27469;
(statearr_27493[(10)] = inst_27424__$1);

return statearr_27493;
})();
if(inst_27424__$1){
var statearr_27494_27534 = state_27469__$1;
(statearr_27494_27534[(1)] = (13));

} else {
var statearr_27495_27535 = state_27469__$1;
(statearr_27495_27535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (9))){
var inst_27446 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27496_27536 = state_27469__$1;
(statearr_27496_27536[(2)] = inst_27446);

(statearr_27496_27536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (5))){
var inst_27407 = cljs.core.deref.call(null,mults);
var inst_27408 = cljs.core.vals.call(null,inst_27407);
var inst_27409 = cljs.core.seq.call(null,inst_27408);
var inst_27410 = inst_27409;
var inst_27411 = null;
var inst_27412 = (0);
var inst_27413 = (0);
var state_27469__$1 = (function (){var statearr_27497 = state_27469;
(statearr_27497[(12)] = inst_27411);

(statearr_27497[(13)] = inst_27410);

(statearr_27497[(14)] = inst_27413);

(statearr_27497[(15)] = inst_27412);

return statearr_27497;
})();
var statearr_27498_27537 = state_27469__$1;
(statearr_27498_27537[(2)] = null);

(statearr_27498_27537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (14))){
var state_27469__$1 = state_27469;
var statearr_27502_27538 = state_27469__$1;
(statearr_27502_27538[(2)] = null);

(statearr_27502_27538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (16))){
var inst_27424 = (state_27469[(10)]);
var inst_27428 = cljs.core.chunk_first.call(null,inst_27424);
var inst_27429 = cljs.core.chunk_rest.call(null,inst_27424);
var inst_27430 = cljs.core.count.call(null,inst_27428);
var inst_27410 = inst_27429;
var inst_27411 = inst_27428;
var inst_27412 = inst_27430;
var inst_27413 = (0);
var state_27469__$1 = (function (){var statearr_27503 = state_27469;
(statearr_27503[(12)] = inst_27411);

(statearr_27503[(13)] = inst_27410);

(statearr_27503[(14)] = inst_27413);

(statearr_27503[(15)] = inst_27412);

return statearr_27503;
})();
var statearr_27504_27539 = state_27469__$1;
(statearr_27504_27539[(2)] = null);

(statearr_27504_27539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (10))){
var inst_27411 = (state_27469[(12)]);
var inst_27410 = (state_27469[(13)]);
var inst_27413 = (state_27469[(14)]);
var inst_27412 = (state_27469[(15)]);
var inst_27418 = cljs.core._nth.call(null,inst_27411,inst_27413);
var inst_27419 = cljs.core.async.muxch_STAR_.call(null,inst_27418);
var inst_27420 = cljs.core.async.close_BANG_.call(null,inst_27419);
var inst_27421 = (inst_27413 + (1));
var tmp27499 = inst_27411;
var tmp27500 = inst_27410;
var tmp27501 = inst_27412;
var inst_27410__$1 = tmp27500;
var inst_27411__$1 = tmp27499;
var inst_27412__$1 = tmp27501;
var inst_27413__$1 = inst_27421;
var state_27469__$1 = (function (){var statearr_27505 = state_27469;
(statearr_27505[(12)] = inst_27411__$1);

(statearr_27505[(13)] = inst_27410__$1);

(statearr_27505[(17)] = inst_27420);

(statearr_27505[(14)] = inst_27413__$1);

(statearr_27505[(15)] = inst_27412__$1);

return statearr_27505;
})();
var statearr_27506_27540 = state_27469__$1;
(statearr_27506_27540[(2)] = null);

(statearr_27506_27540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (18))){
var inst_27439 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27507_27541 = state_27469__$1;
(statearr_27507_27541[(2)] = inst_27439);

(statearr_27507_27541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (8))){
var inst_27413 = (state_27469[(14)]);
var inst_27412 = (state_27469[(15)]);
var inst_27415 = (inst_27413 < inst_27412);
var inst_27416 = inst_27415;
var state_27469__$1 = state_27469;
if(cljs.core.truth_(inst_27416)){
var statearr_27508_27542 = state_27469__$1;
(statearr_27508_27542[(1)] = (10));

} else {
var statearr_27509_27543 = state_27469__$1;
(statearr_27509_27543[(1)] = (11));

}

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
});})(c__26295__auto___27515,mults,ensure_mult,p))
;
return ((function (switch__26207__auto__,c__26295__auto___27515,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_27510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27510[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_27510[(1)] = (1));

return statearr_27510;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27469){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27511){if((e27511 instanceof Object)){
var ex__26211__auto__ = e27511;
var statearr_27512_27544 = state_27469;
(statearr_27512_27544[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27545 = state_27469;
state_27469 = G__27545;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27515,mults,ensure_mult,p))
})();
var state__26297__auto__ = (function (){var statearr_27513 = f__26296__auto__.call(null);
(statearr_27513[(6)] = c__26295__auto___27515);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27515,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27547 = arguments.length;
switch (G__27547) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27550 = arguments.length;
switch (G__27550) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27553 = arguments.length;
switch (G__27553) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26295__auto___27620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27592){
var state_val_27593 = (state_27592[(1)]);
if((state_val_27593 === (7))){
var state_27592__$1 = state_27592;
var statearr_27594_27621 = state_27592__$1;
(statearr_27594_27621[(2)] = null);

(statearr_27594_27621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (1))){
var state_27592__$1 = state_27592;
var statearr_27595_27622 = state_27592__$1;
(statearr_27595_27622[(2)] = null);

(statearr_27595_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (4))){
var inst_27556 = (state_27592[(7)]);
var inst_27558 = (inst_27556 < cnt);
var state_27592__$1 = state_27592;
if(cljs.core.truth_(inst_27558)){
var statearr_27596_27623 = state_27592__$1;
(statearr_27596_27623[(1)] = (6));

} else {
var statearr_27597_27624 = state_27592__$1;
(statearr_27597_27624[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (15))){
var inst_27588 = (state_27592[(2)]);
var state_27592__$1 = state_27592;
var statearr_27598_27625 = state_27592__$1;
(statearr_27598_27625[(2)] = inst_27588);

(statearr_27598_27625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (13))){
var inst_27581 = cljs.core.async.close_BANG_.call(null,out);
var state_27592__$1 = state_27592;
var statearr_27599_27626 = state_27592__$1;
(statearr_27599_27626[(2)] = inst_27581);

(statearr_27599_27626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (6))){
var state_27592__$1 = state_27592;
var statearr_27600_27627 = state_27592__$1;
(statearr_27600_27627[(2)] = null);

(statearr_27600_27627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (3))){
var inst_27590 = (state_27592[(2)]);
var state_27592__$1 = state_27592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27592__$1,inst_27590);
} else {
if((state_val_27593 === (12))){
var inst_27578 = (state_27592[(8)]);
var inst_27578__$1 = (state_27592[(2)]);
var inst_27579 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27578__$1);
var state_27592__$1 = (function (){var statearr_27601 = state_27592;
(statearr_27601[(8)] = inst_27578__$1);

return statearr_27601;
})();
if(cljs.core.truth_(inst_27579)){
var statearr_27602_27628 = state_27592__$1;
(statearr_27602_27628[(1)] = (13));

} else {
var statearr_27603_27629 = state_27592__$1;
(statearr_27603_27629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (2))){
var inst_27555 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27556 = (0);
var state_27592__$1 = (function (){var statearr_27604 = state_27592;
(statearr_27604[(7)] = inst_27556);

(statearr_27604[(9)] = inst_27555);

return statearr_27604;
})();
var statearr_27605_27630 = state_27592__$1;
(statearr_27605_27630[(2)] = null);

(statearr_27605_27630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (11))){
var inst_27556 = (state_27592[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27592,(10),Object,null,(9));
var inst_27565 = chs__$1.call(null,inst_27556);
var inst_27566 = done.call(null,inst_27556);
var inst_27567 = cljs.core.async.take_BANG_.call(null,inst_27565,inst_27566);
var state_27592__$1 = state_27592;
var statearr_27606_27631 = state_27592__$1;
(statearr_27606_27631[(2)] = inst_27567);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27592__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (9))){
var inst_27556 = (state_27592[(7)]);
var inst_27569 = (state_27592[(2)]);
var inst_27570 = (inst_27556 + (1));
var inst_27556__$1 = inst_27570;
var state_27592__$1 = (function (){var statearr_27607 = state_27592;
(statearr_27607[(7)] = inst_27556__$1);

(statearr_27607[(10)] = inst_27569);

return statearr_27607;
})();
var statearr_27608_27632 = state_27592__$1;
(statearr_27608_27632[(2)] = null);

(statearr_27608_27632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (5))){
var inst_27576 = (state_27592[(2)]);
var state_27592__$1 = (function (){var statearr_27609 = state_27592;
(statearr_27609[(11)] = inst_27576);

return statearr_27609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27592__$1,(12),dchan);
} else {
if((state_val_27593 === (14))){
var inst_27578 = (state_27592[(8)]);
var inst_27583 = cljs.core.apply.call(null,f,inst_27578);
var state_27592__$1 = state_27592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27592__$1,(16),out,inst_27583);
} else {
if((state_val_27593 === (16))){
var inst_27585 = (state_27592[(2)]);
var state_27592__$1 = (function (){var statearr_27610 = state_27592;
(statearr_27610[(12)] = inst_27585);

return statearr_27610;
})();
var statearr_27611_27633 = state_27592__$1;
(statearr_27611_27633[(2)] = null);

(statearr_27611_27633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (10))){
var inst_27560 = (state_27592[(2)]);
var inst_27561 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27592__$1 = (function (){var statearr_27612 = state_27592;
(statearr_27612[(13)] = inst_27560);

return statearr_27612;
})();
var statearr_27613_27634 = state_27592__$1;
(statearr_27613_27634[(2)] = inst_27561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27592__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27593 === (8))){
var inst_27574 = (state_27592[(2)]);
var state_27592__$1 = state_27592;
var statearr_27614_27635 = state_27592__$1;
(statearr_27614_27635[(2)] = inst_27574);

(statearr_27614_27635[(1)] = (5));


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
});})(c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26207__auto__,c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_27615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27615[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_27615[(1)] = (1));

return statearr_27615;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27592){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27616){if((e27616 instanceof Object)){
var ex__26211__auto__ = e27616;
var statearr_27617_27636 = state_27592;
(statearr_27617_27636[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27592;
state_27592 = G__27637;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26297__auto__ = (function (){var statearr_27618 = f__26296__auto__.call(null);
(statearr_27618[(6)] = c__26295__auto___27620);

return statearr_27618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27620,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27640 = arguments.length;
switch (G__27640) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___27694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27694,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27694,out){
return (function (state_27672){
var state_val_27673 = (state_27672[(1)]);
if((state_val_27673 === (7))){
var inst_27651 = (state_27672[(7)]);
var inst_27652 = (state_27672[(8)]);
var inst_27651__$1 = (state_27672[(2)]);
var inst_27652__$1 = cljs.core.nth.call(null,inst_27651__$1,(0),null);
var inst_27653 = cljs.core.nth.call(null,inst_27651__$1,(1),null);
var inst_27654 = (inst_27652__$1 == null);
var state_27672__$1 = (function (){var statearr_27674 = state_27672;
(statearr_27674[(7)] = inst_27651__$1);

(statearr_27674[(8)] = inst_27652__$1);

(statearr_27674[(9)] = inst_27653);

return statearr_27674;
})();
if(cljs.core.truth_(inst_27654)){
var statearr_27675_27695 = state_27672__$1;
(statearr_27675_27695[(1)] = (8));

} else {
var statearr_27676_27696 = state_27672__$1;
(statearr_27676_27696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (1))){
var inst_27641 = cljs.core.vec.call(null,chs);
var inst_27642 = inst_27641;
var state_27672__$1 = (function (){var statearr_27677 = state_27672;
(statearr_27677[(10)] = inst_27642);

return statearr_27677;
})();
var statearr_27678_27697 = state_27672__$1;
(statearr_27678_27697[(2)] = null);

(statearr_27678_27697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (4))){
var inst_27642 = (state_27672[(10)]);
var state_27672__$1 = state_27672;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27672__$1,(7),inst_27642);
} else {
if((state_val_27673 === (6))){
var inst_27668 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27679_27698 = state_27672__$1;
(statearr_27679_27698[(2)] = inst_27668);

(statearr_27679_27698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (3))){
var inst_27670 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27672__$1,inst_27670);
} else {
if((state_val_27673 === (2))){
var inst_27642 = (state_27672[(10)]);
var inst_27644 = cljs.core.count.call(null,inst_27642);
var inst_27645 = (inst_27644 > (0));
var state_27672__$1 = state_27672;
if(cljs.core.truth_(inst_27645)){
var statearr_27681_27699 = state_27672__$1;
(statearr_27681_27699[(1)] = (4));

} else {
var statearr_27682_27700 = state_27672__$1;
(statearr_27682_27700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (11))){
var inst_27642 = (state_27672[(10)]);
var inst_27661 = (state_27672[(2)]);
var tmp27680 = inst_27642;
var inst_27642__$1 = tmp27680;
var state_27672__$1 = (function (){var statearr_27683 = state_27672;
(statearr_27683[(10)] = inst_27642__$1);

(statearr_27683[(11)] = inst_27661);

return statearr_27683;
})();
var statearr_27684_27701 = state_27672__$1;
(statearr_27684_27701[(2)] = null);

(statearr_27684_27701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (9))){
var inst_27652 = (state_27672[(8)]);
var state_27672__$1 = state_27672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27672__$1,(11),out,inst_27652);
} else {
if((state_val_27673 === (5))){
var inst_27666 = cljs.core.async.close_BANG_.call(null,out);
var state_27672__$1 = state_27672;
var statearr_27685_27702 = state_27672__$1;
(statearr_27685_27702[(2)] = inst_27666);

(statearr_27685_27702[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (10))){
var inst_27664 = (state_27672[(2)]);
var state_27672__$1 = state_27672;
var statearr_27686_27703 = state_27672__$1;
(statearr_27686_27703[(2)] = inst_27664);

(statearr_27686_27703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27673 === (8))){
var inst_27651 = (state_27672[(7)]);
var inst_27642 = (state_27672[(10)]);
var inst_27652 = (state_27672[(8)]);
var inst_27653 = (state_27672[(9)]);
var inst_27656 = (function (){var cs = inst_27642;
var vec__27647 = inst_27651;
var v = inst_27652;
var c = inst_27653;
return ((function (cs,vec__27647,v,c,inst_27651,inst_27642,inst_27652,inst_27653,state_val_27673,c__26295__auto___27694,out){
return (function (p1__27638_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27638_SHARP_);
});
;})(cs,vec__27647,v,c,inst_27651,inst_27642,inst_27652,inst_27653,state_val_27673,c__26295__auto___27694,out))
})();
var inst_27657 = cljs.core.filterv.call(null,inst_27656,inst_27642);
var inst_27642__$1 = inst_27657;
var state_27672__$1 = (function (){var statearr_27687 = state_27672;
(statearr_27687[(10)] = inst_27642__$1);

return statearr_27687;
})();
var statearr_27688_27704 = state_27672__$1;
(statearr_27688_27704[(2)] = null);

(statearr_27688_27704[(1)] = (2));


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
});})(c__26295__auto___27694,out))
;
return ((function (switch__26207__auto__,c__26295__auto___27694,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_27689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27689[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_27689[(1)] = (1));

return statearr_27689;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27672){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27690){if((e27690 instanceof Object)){
var ex__26211__auto__ = e27690;
var statearr_27691_27705 = state_27672;
(statearr_27691_27705[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27672;
state_27672 = G__27706;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27694,out))
})();
var state__26297__auto__ = (function (){var statearr_27692 = f__26296__auto__.call(null);
(statearr_27692[(6)] = c__26295__auto___27694);

return statearr_27692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27694,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27708 = arguments.length;
switch (G__27708) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___27753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27753,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27753,out){
return (function (state_27732){
var state_val_27733 = (state_27732[(1)]);
if((state_val_27733 === (7))){
var inst_27714 = (state_27732[(7)]);
var inst_27714__$1 = (state_27732[(2)]);
var inst_27715 = (inst_27714__$1 == null);
var inst_27716 = cljs.core.not.call(null,inst_27715);
var state_27732__$1 = (function (){var statearr_27734 = state_27732;
(statearr_27734[(7)] = inst_27714__$1);

return statearr_27734;
})();
if(inst_27716){
var statearr_27735_27754 = state_27732__$1;
(statearr_27735_27754[(1)] = (8));

} else {
var statearr_27736_27755 = state_27732__$1;
(statearr_27736_27755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (1))){
var inst_27709 = (0);
var state_27732__$1 = (function (){var statearr_27737 = state_27732;
(statearr_27737[(8)] = inst_27709);

return statearr_27737;
})();
var statearr_27738_27756 = state_27732__$1;
(statearr_27738_27756[(2)] = null);

(statearr_27738_27756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (4))){
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27732__$1,(7),ch);
} else {
if((state_val_27733 === (6))){
var inst_27727 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
var statearr_27739_27757 = state_27732__$1;
(statearr_27739_27757[(2)] = inst_27727);

(statearr_27739_27757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (3))){
var inst_27729 = (state_27732[(2)]);
var inst_27730 = cljs.core.async.close_BANG_.call(null,out);
var state_27732__$1 = (function (){var statearr_27740 = state_27732;
(statearr_27740[(9)] = inst_27729);

return statearr_27740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27732__$1,inst_27730);
} else {
if((state_val_27733 === (2))){
var inst_27709 = (state_27732[(8)]);
var inst_27711 = (inst_27709 < n);
var state_27732__$1 = state_27732;
if(cljs.core.truth_(inst_27711)){
var statearr_27741_27758 = state_27732__$1;
(statearr_27741_27758[(1)] = (4));

} else {
var statearr_27742_27759 = state_27732__$1;
(statearr_27742_27759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (11))){
var inst_27709 = (state_27732[(8)]);
var inst_27719 = (state_27732[(2)]);
var inst_27720 = (inst_27709 + (1));
var inst_27709__$1 = inst_27720;
var state_27732__$1 = (function (){var statearr_27743 = state_27732;
(statearr_27743[(10)] = inst_27719);

(statearr_27743[(8)] = inst_27709__$1);

return statearr_27743;
})();
var statearr_27744_27760 = state_27732__$1;
(statearr_27744_27760[(2)] = null);

(statearr_27744_27760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (9))){
var state_27732__$1 = state_27732;
var statearr_27745_27761 = state_27732__$1;
(statearr_27745_27761[(2)] = null);

(statearr_27745_27761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (5))){
var state_27732__$1 = state_27732;
var statearr_27746_27762 = state_27732__$1;
(statearr_27746_27762[(2)] = null);

(statearr_27746_27762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (10))){
var inst_27724 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
var statearr_27747_27763 = state_27732__$1;
(statearr_27747_27763[(2)] = inst_27724);

(statearr_27747_27763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (8))){
var inst_27714 = (state_27732[(7)]);
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27732__$1,(11),out,inst_27714);
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
});})(c__26295__auto___27753,out))
;
return ((function (switch__26207__auto__,c__26295__auto___27753,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_27748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27748[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_27748[(1)] = (1));

return statearr_27748;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27732){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27749){if((e27749 instanceof Object)){
var ex__26211__auto__ = e27749;
var statearr_27750_27764 = state_27732;
(statearr_27750_27764[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27765 = state_27732;
state_27732 = G__27765;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27732);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27753,out))
})();
var state__26297__auto__ = (function (){var statearr_27751 = f__26296__auto__.call(null);
(statearr_27751[(6)] = c__26295__auto___27753);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27753,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27767 = (function (f,ch,meta27768){
this.f = f;
this.ch = ch;
this.meta27768 = meta27768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27769,meta27768__$1){
var self__ = this;
var _27769__$1 = this;
return (new cljs.core.async.t_cljs$core$async27767(self__.f,self__.ch,meta27768__$1));
});

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27769){
var self__ = this;
var _27769__$1 = this;
return self__.meta27768;
});

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27770 = (function (f,ch,meta27768,_,fn1,meta27771){
this.f = f;
this.ch = ch;
this.meta27768 = meta27768;
this._ = _;
this.fn1 = fn1;
this.meta27771 = meta27771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27772,meta27771__$1){
var self__ = this;
var _27772__$1 = this;
return (new cljs.core.async.t_cljs$core$async27770(self__.f,self__.ch,self__.meta27768,self__._,self__.fn1,meta27771__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27772){
var self__ = this;
var _27772__$1 = this;
return self__.meta27771;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27766_SHARP_){
return f1.call(null,(((p1__27766_SHARP_ == null))?null:self__.f.call(null,p1__27766_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27768","meta27768",205474411,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27767","cljs.core.async/t_cljs$core$async27767",-1871568762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27771","meta27771",-1923581863,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27770";

cljs.core.async.t_cljs$core$async27770.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27770");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27770 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27770(f__$1,ch__$1,meta27768__$1,___$2,fn1__$1,meta27771){
return (new cljs.core.async.t_cljs$core$async27770(f__$1,ch__$1,meta27768__$1,___$2,fn1__$1,meta27771));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27770(self__.f,self__.ch,self__.meta27768,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6760__auto__ = ret;
if(cljs.core.truth_(and__6760__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6760__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27768","meta27768",205474411,null)], null);
});

cljs.core.async.t_cljs$core$async27767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27767";

cljs.core.async.t_cljs$core$async27767.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27767");
});

cljs.core.async.__GT_t_cljs$core$async27767 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27767(f__$1,ch__$1,meta27768){
return (new cljs.core.async.t_cljs$core$async27767(f__$1,ch__$1,meta27768));
});

}

return (new cljs.core.async.t_cljs$core$async27767(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27773 = (function (f,ch,meta27774){
this.f = f;
this.ch = ch;
this.meta27774 = meta27774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27775,meta27774__$1){
var self__ = this;
var _27775__$1 = this;
return (new cljs.core.async.t_cljs$core$async27773(self__.f,self__.ch,meta27774__$1));
});

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27775){
var self__ = this;
var _27775__$1 = this;
return self__.meta27774;
});

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27774","meta27774",865721440,null)], null);
});

cljs.core.async.t_cljs$core$async27773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27773";

cljs.core.async.t_cljs$core$async27773.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27773");
});

cljs.core.async.__GT_t_cljs$core$async27773 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27773(f__$1,ch__$1,meta27774){
return (new cljs.core.async.t_cljs$core$async27773(f__$1,ch__$1,meta27774));
});

}

return (new cljs.core.async.t_cljs$core$async27773(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27776 = (function (p,ch,meta27777){
this.p = p;
this.ch = ch;
this.meta27777 = meta27777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27778,meta27777__$1){
var self__ = this;
var _27778__$1 = this;
return (new cljs.core.async.t_cljs$core$async27776(self__.p,self__.ch,meta27777__$1));
});

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27778){
var self__ = this;
var _27778__$1 = this;
return self__.meta27777;
});

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27776.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27777","meta27777",-148211131,null)], null);
});

cljs.core.async.t_cljs$core$async27776.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27776.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27776";

cljs.core.async.t_cljs$core$async27776.cljs$lang$ctorPrWriter = (function (this__7383__auto__,writer__7384__auto__,opt__7385__auto__){
return cljs.core._write.call(null,writer__7384__auto__,"cljs.core.async/t_cljs$core$async27776");
});

cljs.core.async.__GT_t_cljs$core$async27776 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27776(p__$1,ch__$1,meta27777){
return (new cljs.core.async.t_cljs$core$async27776(p__$1,ch__$1,meta27777));
});

}

return (new cljs.core.async.t_cljs$core$async27776(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27780 = arguments.length;
switch (G__27780) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___27820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___27820,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___27820,out){
return (function (state_27801){
var state_val_27802 = (state_27801[(1)]);
if((state_val_27802 === (7))){
var inst_27797 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27803_27821 = state_27801__$1;
(statearr_27803_27821[(2)] = inst_27797);

(statearr_27803_27821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (1))){
var state_27801__$1 = state_27801;
var statearr_27804_27822 = state_27801__$1;
(statearr_27804_27822[(2)] = null);

(statearr_27804_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (4))){
var inst_27783 = (state_27801[(7)]);
var inst_27783__$1 = (state_27801[(2)]);
var inst_27784 = (inst_27783__$1 == null);
var state_27801__$1 = (function (){var statearr_27805 = state_27801;
(statearr_27805[(7)] = inst_27783__$1);

return statearr_27805;
})();
if(cljs.core.truth_(inst_27784)){
var statearr_27806_27823 = state_27801__$1;
(statearr_27806_27823[(1)] = (5));

} else {
var statearr_27807_27824 = state_27801__$1;
(statearr_27807_27824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (6))){
var inst_27783 = (state_27801[(7)]);
var inst_27788 = p.call(null,inst_27783);
var state_27801__$1 = state_27801;
if(cljs.core.truth_(inst_27788)){
var statearr_27808_27825 = state_27801__$1;
(statearr_27808_27825[(1)] = (8));

} else {
var statearr_27809_27826 = state_27801__$1;
(statearr_27809_27826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (3))){
var inst_27799 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27801__$1,inst_27799);
} else {
if((state_val_27802 === (2))){
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27801__$1,(4),ch);
} else {
if((state_val_27802 === (11))){
var inst_27791 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27810_27827 = state_27801__$1;
(statearr_27810_27827[(2)] = inst_27791);

(statearr_27810_27827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (9))){
var state_27801__$1 = state_27801;
var statearr_27811_27828 = state_27801__$1;
(statearr_27811_27828[(2)] = null);

(statearr_27811_27828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (5))){
var inst_27786 = cljs.core.async.close_BANG_.call(null,out);
var state_27801__$1 = state_27801;
var statearr_27812_27829 = state_27801__$1;
(statearr_27812_27829[(2)] = inst_27786);

(statearr_27812_27829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (10))){
var inst_27794 = (state_27801[(2)]);
var state_27801__$1 = (function (){var statearr_27813 = state_27801;
(statearr_27813[(8)] = inst_27794);

return statearr_27813;
})();
var statearr_27814_27830 = state_27801__$1;
(statearr_27814_27830[(2)] = null);

(statearr_27814_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (8))){
var inst_27783 = (state_27801[(7)]);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27801__$1,(11),out,inst_27783);
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
});})(c__26295__auto___27820,out))
;
return ((function (switch__26207__auto__,c__26295__auto___27820,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_27815 = [null,null,null,null,null,null,null,null,null];
(statearr_27815[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_27815[(1)] = (1));

return statearr_27815;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27801){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27816){if((e27816 instanceof Object)){
var ex__26211__auto__ = e27816;
var statearr_27817_27831 = state_27801;
(statearr_27817_27831[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27832 = state_27801;
state_27801 = G__27832;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___27820,out))
})();
var state__26297__auto__ = (function (){var statearr_27818 = f__26296__auto__.call(null);
(statearr_27818[(6)] = c__26295__auto___27820);

return statearr_27818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___27820,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27834 = arguments.length;
switch (G__27834) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26295__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto__){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto__){
return (function (state_27897){
var state_val_27898 = (state_27897[(1)]);
if((state_val_27898 === (7))){
var inst_27893 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27899_27937 = state_27897__$1;
(statearr_27899_27937[(2)] = inst_27893);

(statearr_27899_27937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (20))){
var inst_27863 = (state_27897[(7)]);
var inst_27874 = (state_27897[(2)]);
var inst_27875 = cljs.core.next.call(null,inst_27863);
var inst_27849 = inst_27875;
var inst_27850 = null;
var inst_27851 = (0);
var inst_27852 = (0);
var state_27897__$1 = (function (){var statearr_27900 = state_27897;
(statearr_27900[(8)] = inst_27849);

(statearr_27900[(9)] = inst_27851);

(statearr_27900[(10)] = inst_27874);

(statearr_27900[(11)] = inst_27852);

(statearr_27900[(12)] = inst_27850);

return statearr_27900;
})();
var statearr_27901_27938 = state_27897__$1;
(statearr_27901_27938[(2)] = null);

(statearr_27901_27938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (1))){
var state_27897__$1 = state_27897;
var statearr_27902_27939 = state_27897__$1;
(statearr_27902_27939[(2)] = null);

(statearr_27902_27939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (4))){
var inst_27838 = (state_27897[(13)]);
var inst_27838__$1 = (state_27897[(2)]);
var inst_27839 = (inst_27838__$1 == null);
var state_27897__$1 = (function (){var statearr_27903 = state_27897;
(statearr_27903[(13)] = inst_27838__$1);

return statearr_27903;
})();
if(cljs.core.truth_(inst_27839)){
var statearr_27904_27940 = state_27897__$1;
(statearr_27904_27940[(1)] = (5));

} else {
var statearr_27905_27941 = state_27897__$1;
(statearr_27905_27941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (15))){
var state_27897__$1 = state_27897;
var statearr_27909_27942 = state_27897__$1;
(statearr_27909_27942[(2)] = null);

(statearr_27909_27942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (21))){
var state_27897__$1 = state_27897;
var statearr_27910_27943 = state_27897__$1;
(statearr_27910_27943[(2)] = null);

(statearr_27910_27943[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (13))){
var inst_27849 = (state_27897[(8)]);
var inst_27851 = (state_27897[(9)]);
var inst_27852 = (state_27897[(11)]);
var inst_27850 = (state_27897[(12)]);
var inst_27859 = (state_27897[(2)]);
var inst_27860 = (inst_27852 + (1));
var tmp27906 = inst_27849;
var tmp27907 = inst_27851;
var tmp27908 = inst_27850;
var inst_27849__$1 = tmp27906;
var inst_27850__$1 = tmp27908;
var inst_27851__$1 = tmp27907;
var inst_27852__$1 = inst_27860;
var state_27897__$1 = (function (){var statearr_27911 = state_27897;
(statearr_27911[(8)] = inst_27849__$1);

(statearr_27911[(9)] = inst_27851__$1);

(statearr_27911[(11)] = inst_27852__$1);

(statearr_27911[(12)] = inst_27850__$1);

(statearr_27911[(14)] = inst_27859);

return statearr_27911;
})();
var statearr_27912_27944 = state_27897__$1;
(statearr_27912_27944[(2)] = null);

(statearr_27912_27944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (22))){
var state_27897__$1 = state_27897;
var statearr_27913_27945 = state_27897__$1;
(statearr_27913_27945[(2)] = null);

(statearr_27913_27945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (6))){
var inst_27838 = (state_27897[(13)]);
var inst_27847 = f.call(null,inst_27838);
var inst_27848 = cljs.core.seq.call(null,inst_27847);
var inst_27849 = inst_27848;
var inst_27850 = null;
var inst_27851 = (0);
var inst_27852 = (0);
var state_27897__$1 = (function (){var statearr_27914 = state_27897;
(statearr_27914[(8)] = inst_27849);

(statearr_27914[(9)] = inst_27851);

(statearr_27914[(11)] = inst_27852);

(statearr_27914[(12)] = inst_27850);

return statearr_27914;
})();
var statearr_27915_27946 = state_27897__$1;
(statearr_27915_27946[(2)] = null);

(statearr_27915_27946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (17))){
var inst_27863 = (state_27897[(7)]);
var inst_27867 = cljs.core.chunk_first.call(null,inst_27863);
var inst_27868 = cljs.core.chunk_rest.call(null,inst_27863);
var inst_27869 = cljs.core.count.call(null,inst_27867);
var inst_27849 = inst_27868;
var inst_27850 = inst_27867;
var inst_27851 = inst_27869;
var inst_27852 = (0);
var state_27897__$1 = (function (){var statearr_27916 = state_27897;
(statearr_27916[(8)] = inst_27849);

(statearr_27916[(9)] = inst_27851);

(statearr_27916[(11)] = inst_27852);

(statearr_27916[(12)] = inst_27850);

return statearr_27916;
})();
var statearr_27917_27947 = state_27897__$1;
(statearr_27917_27947[(2)] = null);

(statearr_27917_27947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (3))){
var inst_27895 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27897__$1,inst_27895);
} else {
if((state_val_27898 === (12))){
var inst_27883 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27918_27948 = state_27897__$1;
(statearr_27918_27948[(2)] = inst_27883);

(statearr_27918_27948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (2))){
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27897__$1,(4),in$);
} else {
if((state_val_27898 === (23))){
var inst_27891 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27919_27949 = state_27897__$1;
(statearr_27919_27949[(2)] = inst_27891);

(statearr_27919_27949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (19))){
var inst_27878 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27920_27950 = state_27897__$1;
(statearr_27920_27950[(2)] = inst_27878);

(statearr_27920_27950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (11))){
var inst_27849 = (state_27897[(8)]);
var inst_27863 = (state_27897[(7)]);
var inst_27863__$1 = cljs.core.seq.call(null,inst_27849);
var state_27897__$1 = (function (){var statearr_27921 = state_27897;
(statearr_27921[(7)] = inst_27863__$1);

return statearr_27921;
})();
if(inst_27863__$1){
var statearr_27922_27951 = state_27897__$1;
(statearr_27922_27951[(1)] = (14));

} else {
var statearr_27923_27952 = state_27897__$1;
(statearr_27923_27952[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (9))){
var inst_27885 = (state_27897[(2)]);
var inst_27886 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27897__$1 = (function (){var statearr_27924 = state_27897;
(statearr_27924[(15)] = inst_27885);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27886)){
var statearr_27925_27953 = state_27897__$1;
(statearr_27925_27953[(1)] = (21));

} else {
var statearr_27926_27954 = state_27897__$1;
(statearr_27926_27954[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (5))){
var inst_27841 = cljs.core.async.close_BANG_.call(null,out);
var state_27897__$1 = state_27897;
var statearr_27927_27955 = state_27897__$1;
(statearr_27927_27955[(2)] = inst_27841);

(statearr_27927_27955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (14))){
var inst_27863 = (state_27897[(7)]);
var inst_27865 = cljs.core.chunked_seq_QMARK_.call(null,inst_27863);
var state_27897__$1 = state_27897;
if(inst_27865){
var statearr_27928_27956 = state_27897__$1;
(statearr_27928_27956[(1)] = (17));

} else {
var statearr_27929_27957 = state_27897__$1;
(statearr_27929_27957[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (16))){
var inst_27881 = (state_27897[(2)]);
var state_27897__$1 = state_27897;
var statearr_27930_27958 = state_27897__$1;
(statearr_27930_27958[(2)] = inst_27881);

(statearr_27930_27958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27898 === (10))){
var inst_27852 = (state_27897[(11)]);
var inst_27850 = (state_27897[(12)]);
var inst_27857 = cljs.core._nth.call(null,inst_27850,inst_27852);
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27897__$1,(13),out,inst_27857);
} else {
if((state_val_27898 === (18))){
var inst_27863 = (state_27897[(7)]);
var inst_27872 = cljs.core.first.call(null,inst_27863);
var state_27897__$1 = state_27897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27897__$1,(20),out,inst_27872);
} else {
if((state_val_27898 === (8))){
var inst_27851 = (state_27897[(9)]);
var inst_27852 = (state_27897[(11)]);
var inst_27854 = (inst_27852 < inst_27851);
var inst_27855 = inst_27854;
var state_27897__$1 = state_27897;
if(cljs.core.truth_(inst_27855)){
var statearr_27931_27959 = state_27897__$1;
(statearr_27931_27959[(1)] = (10));

} else {
var statearr_27932_27960 = state_27897__$1;
(statearr_27932_27960[(1)] = (11));

}

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
});})(c__26295__auto__))
;
return ((function (switch__26207__auto__,c__26295__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____0 = (function (){
var statearr_27933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27933[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__);

(statearr_27933[(1)] = (1));

return statearr_27933;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____1 = (function (state_27897){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e27934){if((e27934 instanceof Object)){
var ex__26211__auto__ = e27934;
var statearr_27935_27961 = state_27897;
(statearr_27935_27961[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27962 = state_27897;
state_27897 = G__27962;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__ = function(state_27897){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____1.call(this,state_27897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26208__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto__))
})();
var state__26297__auto__ = (function (){var statearr_27936 = f__26296__auto__.call(null);
(statearr_27936[(6)] = c__26295__auto__);

return statearr_27936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto__))
);

return c__26295__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27964 = arguments.length;
switch (G__27964) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27967 = arguments.length;
switch (G__27967) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27970 = arguments.length;
switch (G__27970) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___28017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___28017,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___28017,out){
return (function (state_27994){
var state_val_27995 = (state_27994[(1)]);
if((state_val_27995 === (7))){
var inst_27989 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_27996_28018 = state_27994__$1;
(statearr_27996_28018[(2)] = inst_27989);

(statearr_27996_28018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (1))){
var inst_27971 = null;
var state_27994__$1 = (function (){var statearr_27997 = state_27994;
(statearr_27997[(7)] = inst_27971);

return statearr_27997;
})();
var statearr_27998_28019 = state_27994__$1;
(statearr_27998_28019[(2)] = null);

(statearr_27998_28019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (4))){
var inst_27974 = (state_27994[(8)]);
var inst_27974__$1 = (state_27994[(2)]);
var inst_27975 = (inst_27974__$1 == null);
var inst_27976 = cljs.core.not.call(null,inst_27975);
var state_27994__$1 = (function (){var statearr_27999 = state_27994;
(statearr_27999[(8)] = inst_27974__$1);

return statearr_27999;
})();
if(inst_27976){
var statearr_28000_28020 = state_27994__$1;
(statearr_28000_28020[(1)] = (5));

} else {
var statearr_28001_28021 = state_27994__$1;
(statearr_28001_28021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (6))){
var state_27994__$1 = state_27994;
var statearr_28002_28022 = state_27994__$1;
(statearr_28002_28022[(2)] = null);

(statearr_28002_28022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (3))){
var inst_27991 = (state_27994[(2)]);
var inst_27992 = cljs.core.async.close_BANG_.call(null,out);
var state_27994__$1 = (function (){var statearr_28003 = state_27994;
(statearr_28003[(9)] = inst_27991);

return statearr_28003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27994__$1,inst_27992);
} else {
if((state_val_27995 === (2))){
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27994__$1,(4),ch);
} else {
if((state_val_27995 === (11))){
var inst_27974 = (state_27994[(8)]);
var inst_27983 = (state_27994[(2)]);
var inst_27971 = inst_27974;
var state_27994__$1 = (function (){var statearr_28004 = state_27994;
(statearr_28004[(7)] = inst_27971);

(statearr_28004[(10)] = inst_27983);

return statearr_28004;
})();
var statearr_28005_28023 = state_27994__$1;
(statearr_28005_28023[(2)] = null);

(statearr_28005_28023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (9))){
var inst_27974 = (state_27994[(8)]);
var state_27994__$1 = state_27994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27994__$1,(11),out,inst_27974);
} else {
if((state_val_27995 === (5))){
var inst_27974 = (state_27994[(8)]);
var inst_27971 = (state_27994[(7)]);
var inst_27978 = cljs.core._EQ_.call(null,inst_27974,inst_27971);
var state_27994__$1 = state_27994;
if(inst_27978){
var statearr_28007_28024 = state_27994__$1;
(statearr_28007_28024[(1)] = (8));

} else {
var statearr_28008_28025 = state_27994__$1;
(statearr_28008_28025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (10))){
var inst_27986 = (state_27994[(2)]);
var state_27994__$1 = state_27994;
var statearr_28009_28026 = state_27994__$1;
(statearr_28009_28026[(2)] = inst_27986);

(statearr_28009_28026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27995 === (8))){
var inst_27971 = (state_27994[(7)]);
var tmp28006 = inst_27971;
var inst_27971__$1 = tmp28006;
var state_27994__$1 = (function (){var statearr_28010 = state_27994;
(statearr_28010[(7)] = inst_27971__$1);

return statearr_28010;
})();
var statearr_28011_28027 = state_27994__$1;
(statearr_28011_28027[(2)] = null);

(statearr_28011_28027[(1)] = (2));


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
});})(c__26295__auto___28017,out))
;
return ((function (switch__26207__auto__,c__26295__auto___28017,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_28012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28012[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_28012[(1)] = (1));

return statearr_28012;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_27994){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_27994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e28013){if((e28013 instanceof Object)){
var ex__26211__auto__ = e28013;
var statearr_28014_28028 = state_27994;
(statearr_28014_28028[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28029 = state_27994;
state_27994 = G__28029;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_27994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_27994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___28017,out))
})();
var state__26297__auto__ = (function (){var statearr_28015 = f__26296__auto__.call(null);
(statearr_28015[(6)] = c__26295__auto___28017);

return statearr_28015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___28017,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28031 = arguments.length;
switch (G__28031) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___28097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___28097,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___28097,out){
return (function (state_28069){
var state_val_28070 = (state_28069[(1)]);
if((state_val_28070 === (7))){
var inst_28065 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28071_28098 = state_28069__$1;
(statearr_28071_28098[(2)] = inst_28065);

(statearr_28071_28098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (1))){
var inst_28032 = (new Array(n));
var inst_28033 = inst_28032;
var inst_28034 = (0);
var state_28069__$1 = (function (){var statearr_28072 = state_28069;
(statearr_28072[(7)] = inst_28033);

(statearr_28072[(8)] = inst_28034);

return statearr_28072;
})();
var statearr_28073_28099 = state_28069__$1;
(statearr_28073_28099[(2)] = null);

(statearr_28073_28099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (4))){
var inst_28037 = (state_28069[(9)]);
var inst_28037__$1 = (state_28069[(2)]);
var inst_28038 = (inst_28037__$1 == null);
var inst_28039 = cljs.core.not.call(null,inst_28038);
var state_28069__$1 = (function (){var statearr_28074 = state_28069;
(statearr_28074[(9)] = inst_28037__$1);

return statearr_28074;
})();
if(inst_28039){
var statearr_28075_28100 = state_28069__$1;
(statearr_28075_28100[(1)] = (5));

} else {
var statearr_28076_28101 = state_28069__$1;
(statearr_28076_28101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (15))){
var inst_28059 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28077_28102 = state_28069__$1;
(statearr_28077_28102[(2)] = inst_28059);

(statearr_28077_28102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (13))){
var state_28069__$1 = state_28069;
var statearr_28078_28103 = state_28069__$1;
(statearr_28078_28103[(2)] = null);

(statearr_28078_28103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (6))){
var inst_28034 = (state_28069[(8)]);
var inst_28055 = (inst_28034 > (0));
var state_28069__$1 = state_28069;
if(cljs.core.truth_(inst_28055)){
var statearr_28079_28104 = state_28069__$1;
(statearr_28079_28104[(1)] = (12));

} else {
var statearr_28080_28105 = state_28069__$1;
(statearr_28080_28105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (3))){
var inst_28067 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28069__$1,inst_28067);
} else {
if((state_val_28070 === (12))){
var inst_28033 = (state_28069[(7)]);
var inst_28057 = cljs.core.vec.call(null,inst_28033);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(15),out,inst_28057);
} else {
if((state_val_28070 === (2))){
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28069__$1,(4),ch);
} else {
if((state_val_28070 === (11))){
var inst_28049 = (state_28069[(2)]);
var inst_28050 = (new Array(n));
var inst_28033 = inst_28050;
var inst_28034 = (0);
var state_28069__$1 = (function (){var statearr_28081 = state_28069;
(statearr_28081[(7)] = inst_28033);

(statearr_28081[(10)] = inst_28049);

(statearr_28081[(8)] = inst_28034);

return statearr_28081;
})();
var statearr_28082_28106 = state_28069__$1;
(statearr_28082_28106[(2)] = null);

(statearr_28082_28106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (9))){
var inst_28033 = (state_28069[(7)]);
var inst_28047 = cljs.core.vec.call(null,inst_28033);
var state_28069__$1 = state_28069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28069__$1,(11),out,inst_28047);
} else {
if((state_val_28070 === (5))){
var inst_28037 = (state_28069[(9)]);
var inst_28033 = (state_28069[(7)]);
var inst_28042 = (state_28069[(11)]);
var inst_28034 = (state_28069[(8)]);
var inst_28041 = (inst_28033[inst_28034] = inst_28037);
var inst_28042__$1 = (inst_28034 + (1));
var inst_28043 = (inst_28042__$1 < n);
var state_28069__$1 = (function (){var statearr_28083 = state_28069;
(statearr_28083[(12)] = inst_28041);

(statearr_28083[(11)] = inst_28042__$1);

return statearr_28083;
})();
if(cljs.core.truth_(inst_28043)){
var statearr_28084_28107 = state_28069__$1;
(statearr_28084_28107[(1)] = (8));

} else {
var statearr_28085_28108 = state_28069__$1;
(statearr_28085_28108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (14))){
var inst_28062 = (state_28069[(2)]);
var inst_28063 = cljs.core.async.close_BANG_.call(null,out);
var state_28069__$1 = (function (){var statearr_28087 = state_28069;
(statearr_28087[(13)] = inst_28062);

return statearr_28087;
})();
var statearr_28088_28109 = state_28069__$1;
(statearr_28088_28109[(2)] = inst_28063);

(statearr_28088_28109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (10))){
var inst_28053 = (state_28069[(2)]);
var state_28069__$1 = state_28069;
var statearr_28089_28110 = state_28069__$1;
(statearr_28089_28110[(2)] = inst_28053);

(statearr_28089_28110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28070 === (8))){
var inst_28033 = (state_28069[(7)]);
var inst_28042 = (state_28069[(11)]);
var tmp28086 = inst_28033;
var inst_28033__$1 = tmp28086;
var inst_28034 = inst_28042;
var state_28069__$1 = (function (){var statearr_28090 = state_28069;
(statearr_28090[(7)] = inst_28033__$1);

(statearr_28090[(8)] = inst_28034);

return statearr_28090;
})();
var statearr_28091_28111 = state_28069__$1;
(statearr_28091_28111[(2)] = null);

(statearr_28091_28111[(1)] = (2));


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
});})(c__26295__auto___28097,out))
;
return ((function (switch__26207__auto__,c__26295__auto___28097,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_28092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28092[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_28092[(1)] = (1));

return statearr_28092;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_28069){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_28069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e28093){if((e28093 instanceof Object)){
var ex__26211__auto__ = e28093;
var statearr_28094_28112 = state_28069;
(statearr_28094_28112[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28113 = state_28069;
state_28069 = G__28113;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_28069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_28069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___28097,out))
})();
var state__26297__auto__ = (function (){var statearr_28095 = f__26296__auto__.call(null);
(statearr_28095[(6)] = c__26295__auto___28097);

return statearr_28095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___28097,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28115 = arguments.length;
switch (G__28115) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26295__auto___28185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26295__auto___28185,out){
return (function (){
var f__26296__auto__ = (function (){var switch__26207__auto__ = ((function (c__26295__auto___28185,out){
return (function (state_28157){
var state_val_28158 = (state_28157[(1)]);
if((state_val_28158 === (7))){
var inst_28153 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28159_28186 = state_28157__$1;
(statearr_28159_28186[(2)] = inst_28153);

(statearr_28159_28186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (1))){
var inst_28116 = [];
var inst_28117 = inst_28116;
var inst_28118 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28157__$1 = (function (){var statearr_28160 = state_28157;
(statearr_28160[(7)] = inst_28118);

(statearr_28160[(8)] = inst_28117);

return statearr_28160;
})();
var statearr_28161_28187 = state_28157__$1;
(statearr_28161_28187[(2)] = null);

(statearr_28161_28187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (4))){
var inst_28121 = (state_28157[(9)]);
var inst_28121__$1 = (state_28157[(2)]);
var inst_28122 = (inst_28121__$1 == null);
var inst_28123 = cljs.core.not.call(null,inst_28122);
var state_28157__$1 = (function (){var statearr_28162 = state_28157;
(statearr_28162[(9)] = inst_28121__$1);

return statearr_28162;
})();
if(inst_28123){
var statearr_28163_28188 = state_28157__$1;
(statearr_28163_28188[(1)] = (5));

} else {
var statearr_28164_28189 = state_28157__$1;
(statearr_28164_28189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (15))){
var inst_28147 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28165_28190 = state_28157__$1;
(statearr_28165_28190[(2)] = inst_28147);

(statearr_28165_28190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (13))){
var state_28157__$1 = state_28157;
var statearr_28166_28191 = state_28157__$1;
(statearr_28166_28191[(2)] = null);

(statearr_28166_28191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (6))){
var inst_28117 = (state_28157[(8)]);
var inst_28142 = inst_28117.length;
var inst_28143 = (inst_28142 > (0));
var state_28157__$1 = state_28157;
if(cljs.core.truth_(inst_28143)){
var statearr_28167_28192 = state_28157__$1;
(statearr_28167_28192[(1)] = (12));

} else {
var statearr_28168_28193 = state_28157__$1;
(statearr_28168_28193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (3))){
var inst_28155 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else {
if((state_val_28158 === (12))){
var inst_28117 = (state_28157[(8)]);
var inst_28145 = cljs.core.vec.call(null,inst_28117);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28157__$1,(15),out,inst_28145);
} else {
if((state_val_28158 === (2))){
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,(4),ch);
} else {
if((state_val_28158 === (11))){
var inst_28121 = (state_28157[(9)]);
var inst_28125 = (state_28157[(10)]);
var inst_28135 = (state_28157[(2)]);
var inst_28136 = [];
var inst_28137 = inst_28136.push(inst_28121);
var inst_28117 = inst_28136;
var inst_28118 = inst_28125;
var state_28157__$1 = (function (){var statearr_28169 = state_28157;
(statearr_28169[(11)] = inst_28135);

(statearr_28169[(7)] = inst_28118);

(statearr_28169[(8)] = inst_28117);

(statearr_28169[(12)] = inst_28137);

return statearr_28169;
})();
var statearr_28170_28194 = state_28157__$1;
(statearr_28170_28194[(2)] = null);

(statearr_28170_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (9))){
var inst_28117 = (state_28157[(8)]);
var inst_28133 = cljs.core.vec.call(null,inst_28117);
var state_28157__$1 = state_28157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28157__$1,(11),out,inst_28133);
} else {
if((state_val_28158 === (5))){
var inst_28118 = (state_28157[(7)]);
var inst_28121 = (state_28157[(9)]);
var inst_28125 = (state_28157[(10)]);
var inst_28125__$1 = f.call(null,inst_28121);
var inst_28126 = cljs.core._EQ_.call(null,inst_28125__$1,inst_28118);
var inst_28127 = cljs.core.keyword_identical_QMARK_.call(null,inst_28118,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28128 = (inst_28126) || (inst_28127);
var state_28157__$1 = (function (){var statearr_28171 = state_28157;
(statearr_28171[(10)] = inst_28125__$1);

return statearr_28171;
})();
if(cljs.core.truth_(inst_28128)){
var statearr_28172_28195 = state_28157__$1;
(statearr_28172_28195[(1)] = (8));

} else {
var statearr_28173_28196 = state_28157__$1;
(statearr_28173_28196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (14))){
var inst_28150 = (state_28157[(2)]);
var inst_28151 = cljs.core.async.close_BANG_.call(null,out);
var state_28157__$1 = (function (){var statearr_28175 = state_28157;
(statearr_28175[(13)] = inst_28150);

return statearr_28175;
})();
var statearr_28176_28197 = state_28157__$1;
(statearr_28176_28197[(2)] = inst_28151);

(statearr_28176_28197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (10))){
var inst_28140 = (state_28157[(2)]);
var state_28157__$1 = state_28157;
var statearr_28177_28198 = state_28157__$1;
(statearr_28177_28198[(2)] = inst_28140);

(statearr_28177_28198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28158 === (8))){
var inst_28121 = (state_28157[(9)]);
var inst_28117 = (state_28157[(8)]);
var inst_28125 = (state_28157[(10)]);
var inst_28130 = inst_28117.push(inst_28121);
var tmp28174 = inst_28117;
var inst_28117__$1 = tmp28174;
var inst_28118 = inst_28125;
var state_28157__$1 = (function (){var statearr_28178 = state_28157;
(statearr_28178[(7)] = inst_28118);

(statearr_28178[(14)] = inst_28130);

(statearr_28178[(8)] = inst_28117__$1);

return statearr_28178;
})();
var statearr_28179_28199 = state_28157__$1;
(statearr_28179_28199[(2)] = null);

(statearr_28179_28199[(1)] = (2));


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
});})(c__26295__auto___28185,out))
;
return ((function (switch__26207__auto__,c__26295__auto___28185,out){
return (function() {
var cljs$core$async$state_machine__26208__auto__ = null;
var cljs$core$async$state_machine__26208__auto____0 = (function (){
var statearr_28180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28180[(0)] = cljs$core$async$state_machine__26208__auto__);

(statearr_28180[(1)] = (1));

return statearr_28180;
});
var cljs$core$async$state_machine__26208__auto____1 = (function (state_28157){
while(true){
var ret_value__26209__auto__ = (function (){try{while(true){
var result__26210__auto__ = switch__26207__auto__.call(null,state_28157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26210__auto__;
}
break;
}
}catch (e28181){if((e28181 instanceof Object)){
var ex__26211__auto__ = e28181;
var statearr_28182_28200 = state_28157;
(statearr_28182_28200[(5)] = ex__26211__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28201 = state_28157;
state_28157 = G__28201;
continue;
} else {
return ret_value__26209__auto__;
}
break;
}
});
cljs$core$async$state_machine__26208__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26208__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26208__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26208__auto____0;
cljs$core$async$state_machine__26208__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26208__auto____1;
return cljs$core$async$state_machine__26208__auto__;
})()
;})(switch__26207__auto__,c__26295__auto___28185,out))
})();
var state__26297__auto__ = (function (){var statearr_28183 = f__26296__auto__.call(null);
(statearr_28183[(6)] = c__26295__auto___28185);

return statearr_28183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26297__auto__);
});})(c__26295__auto___28185,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map