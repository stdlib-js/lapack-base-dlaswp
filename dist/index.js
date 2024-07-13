"use strict";var R=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var O=R(function(er,c){
var J=require('@stdlib/math-base-special-floor/dist'),L=require('@stdlib/blas-base-dswap/dist').ndarray,_=32;function M(e,a,r,u,v,i,t,o,l,w,m,p){var n,E,F,f,b,h,y,g,x,s,j,q;if(l>0?n=o-t:n=t-o,n+=1,e==="row-major"){for(y=p,g=0,s=t;g<n;g++,s+=l)f=w[y],f!==s&&L(a,r,v,i+s*u,r,v,i+f*u),y+=m;return r}if(E=J(a/_)*_,E!==0)for(x=0;x<E;x+=_)for(y=p,g=0,s=t;g<n;g++,s+=l){if(f=w[y],f!==s)for(b=i+s*u,h=i+f*u,j=x;j<x+_;j++)q=j*v,F=r[b+q],r[b+q]=r[h+q],r[h+q]=F;y+=m}if(E!==a)for(y=p,g=0,s=t;g<n;g++,s+=l){if(f=w[y],f!==s)for(b=i+s*u,h=i+f*u,j=E;j<a;j++)q=j*v,F=r[b+q],r[b+q]=r[h+q],r[h+q]=F;y+=m}return r}c.exports=M
});var C=R(function(ur,B){
var Q=require('@stdlib/blas-base-assert-is-layout/dist'),U=require('@stdlib/math-base-special-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),W=O();function X(e,a,r,u,v,i,t,o){var l,w,m,p,n;if(!Q(e))throw new TypeError(d('nullFx',e));if(e==="row-major"&&u<U(1,a))throw new RangeError(d("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",a,u));if(o>0)w=1,n=v;else if(o<0)w=-1,n=v+(v-i)*o,l=v,v=i,i=l;else return r;return e==="column-major"?(m=1,p=u):(m=u,p=1),W(e,a,r,m,p,0,v,i,w,t,o,n)}B.exports=X
});var S=R(function(vr,K){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),$=require('@stdlib/error-tools-fmtprodmsg/dist'),D=O();function N(e,a,r,u,v,i,t,o,l,w,m,p){var n;if(!Y(e))throw new TypeError($('nullFx',e));return l<0?(p+=o*m,m*=-1,n=t,t=o,o=n,l=-1):(p+=t*m,l=1),D(e,a,r,u,v,i,t,o,l,w,m,p)}K.exports=N
});var G=R(function(ir,z){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=C(),P=S();V(Z,"ndarray",P);z.exports=Z
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=G(),T,H=k(I(__dirname,"./native.js"));A(H)?T=rr:T=H;module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
