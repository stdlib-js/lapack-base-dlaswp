"use strict";var E=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var _=E(function(er,F){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-dswap/dist').ndarray,M=32;function U(i,r,u,n,a,e,p,v,y,t,q){var o,m,x,w,R,b,f,j,h,l,g,s;if(v>0?o=p-e:o=e-p,o+=1,H([u,n])){for(f=q,j=0,l=e;j<o;j++,l+=v)w=y[f],w!==l&&Q(i,r,n,a+l*u,r,n,a+w*u),f+=t;return r}if(m=J(i/M)*M,m!==0)for(h=0;h<m;h+=M)for(f=q,j=0,l=e;j<o;j++,l+=v){if(w=y[f],w!==l)for(R=a+l*u,b=a+w*u,g=h;g<h+M;g++)s=g*n,x=r[R+s],r[R+s]=r[b+s],r[b+s]=x;f+=t}if(m!==i)for(f=q,j=0,l=e;j<o;j++,l+=v){if(w=y[f],w!==l)for(R=a+l*u,b=a+w*u,g=m;g<i;g++)s=g*n,x=r[R+s],r[R+s]=r[b+s],r[b+s]=x;f+=t}return r}F.exports=U
});var K=E(function(ur,B){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),$=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),d=_();function L(i,r,u,n,a,e,p,v){var y,t,q,o,m;if(!W(i))throw new TypeError(O('1xhFx',i));if(X(i)&&n<$(1,r))throw new RangeError(O('1xhG4',r,n));if(v>0)t=1,m=a;else if(v<0)t=-1,m=a+(a-e)*v,y=a,a=e,e=y;else return u;return Y(i)?(q=1,o=n):(q=n,o=1),d(r,u,q,o,0,a,e,t,p,v,m)}B.exports=L
});var T=E(function(vr,S){
var D=_();function N(i,r,u,n,a,e,p,v,y,t,q){var o;return v<0?(q+=p*t,t*=-1,o=e,e=p,p=o,v=-1):(q+=e*t,v=1),D(i,r,u,n,a,e,p,v,y,t,q)}S.exports=N
});var z=E(function(ir,c){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),P=T();V(Z,"ndarray",P);c.exports=Z
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=z(),C,G=k(I(__dirname,"./native.js"));A(G)?C=rr:C=G;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
