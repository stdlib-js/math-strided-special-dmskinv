"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=u(function(C,q){
var l=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-inv/dist');function _(e,r,i,a,n,s,t){return l(e,r,i,a,n,s,t,R)}q.exports=_
});var o=u(function(D,m){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-inv/dist');function b(e,r,i,a,n,s,t,f,j,x){return E(e,r,i,a,n,s,t,f,j,x,O)}m.exports=b
});var k=u(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=d(),h=o();g(c,"ndarray",h);p.exports=c
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=k(),v,y=z(w(__dirname,"./native.js"));y instanceof Error?v=A:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
