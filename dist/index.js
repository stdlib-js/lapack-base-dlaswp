"use strict";var E=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var _=E(function(er,F){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-dswap/dist').ndarray,M=32;function U(v,r,o,n,a,e,p,u,y,t,q){var i,m,x,w,R,b,f,j,h,l,g,s;if(u>0?i=p-e:i=e-p,i+=1,H([o,n])){for(f=q,j=0,l=e;j<i;j++,l+=u)w=y[f],w!==l&&Q(v,r,n,a+l*o,r,n,a+w*o),f+=t;return r}if(m=J(v/M)*M,m!==0)for(h=0;h<m;h+=M)for(f=q,j=0,l=e;j<i;j++,l+=u){if(w=y[f],w!==l)for(R=a+l*o,b=a+w*o,g=h;g<h+M;g++)s=g*n,x=r[R+s],r[R+s]=r[b+s],r[b+s]=x;f+=t}if(m!==v)for(f=q,j=0,l=e;j<i;j++,l+=u){if(w=y[f],w!==l)for(R=a+l*o,b=a+w*o,g=m;g<v;g++)s=g*n,x=r[R+s],r[R+s]=r[b+s],r[b+s]=x;f+=t}return r}F.exports=U
});var K=E(function(ur,B){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),$=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),d=_();function L(v,r,o,n,a,e,p,u){var y,t,q,i,m;if(!W(v))throw new TypeError(O('1xhFx',v));if(X(v)&&n<$(1,r))throw new RangeError(O('1xhG4',r,n));if(u>0)t=1,m=a;else if(u<0)t=-1,m=a+(a-e)*u,y=a,a=e,e=y;else return o;return Y(v)?(q=1,i=n):(q=n,i=1),d(r,o,q,i,0,a,e,t,p,u,m)}B.exports=L
});var T=E(function(vr,S){
var D=_();function N(v,r,o,n,a,e,p,u,y,t,q){var i;return u<0?(q+=p*t,t*=-1,i=e,e=p,p=i,u=-1):(q+=e*t,u=1),D(v,r,o,n,a,e,p,u,y,t,q)}S.exports=N
});var z=E(function(ir,c){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),P=T();V(Z,"ndarray",P);c.exports=Z
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=z(),C,G=k(I(__dirname,"./native.js"));A(G)?C=rr:C=G;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
