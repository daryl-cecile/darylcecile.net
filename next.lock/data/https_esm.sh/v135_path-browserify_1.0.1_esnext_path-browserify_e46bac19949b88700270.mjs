/* esm.sh - esbuild bundle(path-browserify@1.0.1) esnext production */
import __Process$ from "/v135/node_process.js";
var z=Object.create;var C=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var E=(l,e)=>()=>(e||l((e={exports:{}}).exports,e),e.exports),J=(l,e)=>{for(var r in e)C(l,r,{get:e[r],enumerable:!0})},b=(l,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of T(e))!x.call(l,i)&&i!==r&&C(l,i,{get:()=>e[i],enumerable:!(t=D(e,i))||t.enumerable});return l},g=(l,e,r)=>(b(l,e,"default"),r&&b(r,e,"default")),w=(l,e,r)=>(r=l!=null?z(R(l)):{},b(e||!l||!l.__esModule?C(r,"default",{value:l,enumerable:!0}):r,l));var h=E((p,_)=>{"use strict";function c(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function y(l,e){for(var r="",t=0,i=-1,s=0,n,f=0;f<=l.length;++f){if(f<l.length)n=l.charCodeAt(f);else{if(n===47)break;n=47}if(n===47){if(!(i===f-1||s===1))if(i!==f-1&&s===2){if(r.length<2||t!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){a===-1?(r="",t=0):(r=r.slice(0,a),t=r.length-1-r.lastIndexOf("/")),i=f,s=0;continue}}else if(r.length===2||r.length===1){r="",t=0,i=f,s=0;continue}}e&&(r.length>0?r+="/..":r="..",t=2)}else r.length>0?r+="/"+l.slice(i+1,f):r=l.slice(i+1,f),t=f-i-1;i=f,s=0}else n===46&&s!==-1?++s:s=-1}return r}function q(l,e){var r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+t:r+l+t:t}var m={resolve:function(){for(var e="",r=!1,t,i=arguments.length-1;i>=-1&&!r;i--){var s;i>=0?s=arguments[i]:(t===void 0&&(t=__Process$.cwd()),s=t),c(s),s.length!==0&&(e=s+"/"+e,r=s.charCodeAt(0)===47)}return e=y(e,!r),r?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(c(e),e.length===0)return".";var r=e.charCodeAt(0)===47,t=e.charCodeAt(e.length-1)===47;return e=y(e,!r),e.length===0&&!r&&(e="."),e.length>0&&t&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return c(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];c(t),t.length>0&&(e===void 0?e=t:e+="/"+t)}return e===void 0?".":m.normalize(e)},relative:function(e,r){if(c(e),c(r),e===r||(e=m.resolve(e),r=m.resolve(r),e===r))return"";for(var t=1;t<e.length&&e.charCodeAt(t)===47;++t);for(var i=e.length,s=i-t,n=1;n<r.length&&r.charCodeAt(n)===47;++n);for(var f=r.length,a=f-n,v=s<a?s:a,u=-1,o=0;o<=v;++o){if(o===v){if(a>v){if(r.charCodeAt(n+o)===47)return r.slice(n+o+1);if(o===0)return r.slice(n+o)}else s>v&&(e.charCodeAt(t+o)===47?u=o:o===0&&(u=0));break}var k=e.charCodeAt(t+o),P=r.charCodeAt(n+o);if(k!==P)break;k===47&&(u=o)}var A="";for(o=t+u+1;o<=i;++o)(o===i||e.charCodeAt(o)===47)&&(A.length===0?A+="..":A+="/..");return A.length>0?A+r.slice(n+u):(n+=u,r.charCodeAt(n)===47&&++n,r.slice(n))},_makeLong:function(e){return e},dirname:function(e){if(c(e),e.length===0)return".";for(var r=e.charCodeAt(0),t=r===47,i=-1,s=!0,n=e.length-1;n>=1;--n)if(r=e.charCodeAt(n),r===47){if(!s){i=n;break}}else s=!1;return i===-1?t?"/":".":t&&i===1?"//":e.slice(0,i)},basename:function(e,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');c(e);var t=0,i=-1,s=!0,n;if(r!==void 0&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var f=r.length-1,a=-1;for(n=e.length-1;n>=0;--n){var v=e.charCodeAt(n);if(v===47){if(!s){t=n+1;break}}else a===-1&&(s=!1,a=n+1),f>=0&&(v===r.charCodeAt(f)?--f===-1&&(i=n):(f=-1,i=a))}return t===i?i=a:i===-1&&(i=e.length),e.slice(t,i)}else{for(n=e.length-1;n>=0;--n)if(e.charCodeAt(n)===47){if(!s){t=n+1;break}}else i===-1&&(s=!1,i=n+1);return i===-1?"":e.slice(t,i)}},extname:function(e){c(e);for(var r=-1,t=0,i=-1,s=!0,n=0,f=e.length-1;f>=0;--f){var a=e.charCodeAt(f);if(a===47){if(!s){t=f+1;break}continue}i===-1&&(s=!1,i=f+1),a===46?r===-1?r=f:n!==1&&(n=1):r!==-1&&(n=-1)}return r===-1||i===-1||n===0||n===1&&r===i-1&&r===t+1?"":e.slice(r,i)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return q("/",e)},parse:function(e){c(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return r;var t=e.charCodeAt(0),i=t===47,s;i?(r.root="/",s=1):s=0;for(var n=-1,f=0,a=-1,v=!0,u=e.length-1,o=0;u>=s;--u){if(t=e.charCodeAt(u),t===47){if(!v){f=u+1;break}continue}a===-1&&(v=!1,a=u+1),t===46?n===-1?n=u:o!==1&&(o=1):n!==-1&&(o=-1)}return n===-1||a===-1||o===0||o===1&&n===a-1&&n===f+1?a!==-1&&(f===0&&i?r.base=r.name=e.slice(1,a):r.base=r.name=e.slice(f,a)):(f===0&&i?(r.name=e.slice(1,n),r.base=e.slice(1,a)):(r.name=e.slice(f,n),r.base=e.slice(f,a)),r.ext=e.slice(n,a)),f>0?r.dir=e.slice(0,f-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};m.posix=m;_.exports=m});var d={};J(d,{_makeLong:()=>M,basename:()=>U,default:()=>I,delimiter:()=>Z,dirname:()=>Q,extname:()=>V,format:()=>W,isAbsolute:()=>G,join:()=>H,normalize:()=>F,parse:()=>X,posix:()=>j,relative:()=>K,resolve:()=>B,sep:()=>Y,win32:()=>$});var L=w(h());g(d,w(h()));var{resolve:B,normalize:F,isAbsolute:G,join:H,relative:K,_makeLong:M,dirname:Q,basename:U,extname:V,format:W,parse:X,sep:Y,delimiter:Z,win32:$,posix:j}=L,{default:S,...N}=L,I=S!==void 0?S:N;export{M as _makeLong,U as basename,I as default,Z as delimiter,Q as dirname,V as extname,W as format,G as isAbsolute,H as join,F as normalize,X as parse,j as posix,K as relative,B as resolve,Y as sep,$ as win32};
//# sourceMappingURL=path-browserify.mjs.map