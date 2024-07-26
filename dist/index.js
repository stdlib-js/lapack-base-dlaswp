"use strict";var R=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var F=R(function(rr,c){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-dswap/dist').ndarray,_=32;function U(v,r,o,n,a,e,q,u,y,t,m){var i,s,E,w,b,h,f,j,x,l,g,p;if(u>0?i=q-e:i=e-q,i+=1,H([o,n])){for(f=m,j=0,l=e;j<i;j++,l+=u)w=y[f],w!==l&&Q(v,r,n,a+l*o,r,n,a+w*o),f+=t;return r}if(s=J(v/_)*_,s!==0)for(x=0;x<s;x+=_)for(f=m,j=0,l=e;j<i;j++,l+=u){if(w=y[f],w!==l)for(b=a+l*o,h=a+w*o,g=x;g<x+_;g++)p=g*n,E=r[b+p],r[b+p]=r[h+p],r[h+p]=E;f+=t}if(s!==v)for(f=m,j=0,l=e;j<i;j++,l+=u){if(w=y[f],w!==l)for(b=a+l*o,h=a+w*o,g=s;g<v;g++)p=g*n,E=r[b+p],r[b+p]=r[h+p],r[h+p]=E;f+=t}return r}c.exports=U
});var K=R(function(ar,C){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/math-base-special-max/dist'),B=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=F();function $(v,r,o,n,a,e,q,u){var y,t,m,i,s;if(!W(v))throw new TypeError(B('1xhFx',v));if(v==="row-major"&&n<X(1,r))throw new RangeError(B('1xhG4',r,n));if(u>0)t=1,s=a;else if(u<0)t=-1,s=a+(a-e)*u,y=a,a=e,e=y;else return o;return v==="column-major"?(m=1,i=n):(m=n,i=1),Y(r,o,m,i,0,a,e,t,q,u,s)}C.exports=$
});var S=R(function(er,M){
var d=F();function L(v,r,o,n,a,e,q,u,y,t,m){var i;return u<0?(m+=q*t,t*=-1,i=e,e=q,q=i,u=-1):(m+=e*t,u=1),d(v,r,o,n,a,e,q,u,y,t,m)}M.exports=L
});var z=R(function(ur,Z){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=K(),N=S();D(T,"ndarray",N);Z.exports=T
});var V=require("path").join,P=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),k=z(),O,G=P(V(__dirname,"./native.js"));I(G)?O=k:O=G;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
