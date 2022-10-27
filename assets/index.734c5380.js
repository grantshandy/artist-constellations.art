var Bg=Object.defineProperty;var zg=(n,e,t)=>e in n?Bg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ug=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Oa=(n,e,t)=>(zg(n,typeof e!="symbol"?e+"":e,t),t),Nu=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var ti=(n,e,t)=>(Nu(n,e,"read from private field"),t?t.call(n):e.get(n)),Ks=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},On=(n,e,t,i)=>(Nu(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),Ia=(n,e,t,i)=>({set _(r){On(n,e,r,t)},get _(){return ti(n,e,i)}});var LP=Ug(zi=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Lc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Hg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vg=Lc(Hg);function Gd(n){return!!n||n===""}function Rc(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Mt(i)?jg(i):Rc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Mt(n))return n;if(st(n))return n}}const Gg=/;(?![^(]*\))/g,Wg=/:(.+)/;function jg(n){const e={};return n.split(Gg).forEach(t=>{if(t){const i=t.split(Wg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dc(n){let e="";if(Mt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=Dc(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function $g(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Hs(n[i],e[i]);return t}function Hs(n,e){if(n===e)return!0;let t=Fu(n),i=Fu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ps(n),i=Ps(e),t||i)return n===e;if(t=Ne(n),i=Ne(e),t||i)return t&&i?$g(n,e):!1;if(t=st(n),i=st(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Hs(n[o],e[o]))return!1}}return String(n)===String(e)}function Oc(n,e){return n.findIndex(t=>Hs(t,e))}const ht=n=>Mt(n)?n:n==null?"":Ne(n)||st(n)&&(n.toString===$d||!He(n.toString))?JSON.stringify(n,Wd,2):String(n),Wd=(n,e)=>e&&e.__v_isRef?Wd(n,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Xr(e)?{[`Set(${e.size})`]:[...e.values()]}:st(e)&&!Ne(e)&&!qd(e)?String(e):e,nt={},Nr=[],gn=()=>{},qg=()=>!1,Xg=/^on[^a-z]/,oa=n=>Xg.test(n),Ic=n=>n.startsWith("onUpdate:"),Pt=Object.assign,Nc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Yg=Object.prototype.hasOwnProperty,je=(n,e)=>Yg.call(n,e),Ne=Array.isArray,Fr=n=>Vs(n)==="[object Map]",Xr=n=>Vs(n)==="[object Set]",Fu=n=>Vs(n)==="[object Date]",He=n=>typeof n=="function",Mt=n=>typeof n=="string",Ps=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",jd=n=>st(n)&&He(n.then)&&He(n.catch),$d=Object.prototype.toString,Vs=n=>$d.call(n),Kg=n=>Vs(n).slice(8,-1),qd=n=>Vs(n)==="[object Object]",Fc=n=>Mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,No=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zg=/-(\w)/g,Ln=aa(n=>n.replace(Zg,(e,t)=>t?t.toUpperCase():"")),Jg=/\B([A-Z])/g,Yr=aa(n=>n.replace(Jg,"-$1").toLowerCase()),la=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=aa(n=>n?`on${la(n)}`:""),qo=(n,e)=>!Object.is(n,e),Fo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Xo=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Xd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ku;const Qg=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let wn;class e_{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=wn,!e&&wn&&(this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=wn;try{return wn=this,e()}finally{wn=t}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function t_(n,e=wn){e&&e.active&&e.effects.push(n)}const kc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Yd=n=>(n.w&bi)>0,Kd=n=>(n.n&bi)>0,n_=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},i_=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Yd(r)&&!Kd(r)?r.delete(n):e[t++]=r,r.w&=~bi,r.n&=~bi}e.length=t}},Ul=new WeakMap;let _s=0,bi=1;const Hl=30;let hn;const $i=Symbol(""),Vl=Symbol("");class Bc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,t_(this,i)}run(){if(!this.active)return this.fn();let e=hn,t=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,_i=!0,bi=1<<++_s,_s<=Hl?n_(this):Bu(this),this.fn()}finally{_s<=Hl&&i_(this),bi=1<<--_s,hn=this.parent,_i=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Bu(this),this.onStop&&this.onStop(),this.active=!1)}}function Bu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let _i=!0;const Zd=[];function Kr(){Zd.push(_i),_i=!1}function Zr(){const n=Zd.pop();_i=n===void 0?!0:n}function Xt(n,e,t){if(_i&&hn){let i=Ul.get(n);i||Ul.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=kc()),Jd(r)}}function Jd(n,e){let t=!1;_s<=Hl?Kd(n)||(n.n|=bi,t=!Yd(n)):t=!n.has(hn),t&&(n.add(hn),hn.deps.push(n))}function Xn(n,e,t,i,r,s){const o=Ul.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?Fc(t)&&a.push(o.get("length")):(a.push(o.get($i)),Fr(n)&&a.push(o.get(Vl)));break;case"delete":Ne(n)||(a.push(o.get($i)),Fr(n)&&a.push(o.get(Vl)));break;case"set":Fr(n)&&a.push(o.get($i));break}if(a.length===1)a[0]&&Gl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Gl(kc(l))}}function Gl(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&zu(i);for(const i of t)i.computed||zu(i)}function zu(n,e){(n!==hn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const r_=Lc("__proto__,__v_isRef,__isVue"),Qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ps)),s_=zc(),o_=zc(!1,!0),a_=zc(!0),Uu=l_();function l_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Qe(this);for(let s=0,o=this.length;s<o;s++)Xt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Kr();const i=Qe(this)[e].apply(this,t);return Zr(),i}}),n}function zc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?M_:rp:e?ip:np).get(i))return i;const o=Ne(i);if(!n&&o&&je(Uu,r))return Reflect.get(Uu,r,s);const a=Reflect.get(i,r,s);return(Ps(r)?Qd.has(r):r_(r))||(n||Xt(i,"get",r),e)?a:Ft(a)?o&&Fc(r)?a:a.value:st(a)?n?sp(a):Vc(a):a}}const c_=ep(),u_=ep(!0);function ep(n=!1){return function(t,i,r,s){let o=t[i];if(Ls(o)&&Ft(o)&&!Ft(r))return!1;if(!n&&(!Wl(r)&&!Ls(r)&&(o=Qe(o),r=Qe(r)),!Ne(t)&&Ft(o)&&!Ft(r)))return o.value=r,!0;const a=Ne(t)&&Fc(i)?Number(i)<t.length:je(t,i),l=Reflect.set(t,i,r,s);return t===Qe(s)&&(a?qo(r,o)&&Xn(t,"set",i,r):Xn(t,"add",i,r)),l}}function f_(n,e){const t=je(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Xn(n,"delete",e,void 0),i}function h_(n,e){const t=Reflect.has(n,e);return(!Ps(e)||!Qd.has(e))&&Xt(n,"has",e),t}function d_(n){return Xt(n,"iterate",Ne(n)?"length":$i),Reflect.ownKeys(n)}const tp={get:s_,set:c_,deleteProperty:f_,has:h_,ownKeys:d_},p_={get:a_,set(n,e){return!0},deleteProperty(n,e){return!0}},m_=Pt({},tp,{get:o_,set:u_}),Uc=n=>n,ca=n=>Reflect.getPrototypeOf(n);function Zs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Qe(n),s=Qe(e);t||(e!==s&&Xt(r,"get",e),Xt(r,"get",s));const{has:o}=ca(r),a=i?Uc:t?jc:Wc;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Js(n,e=!1){const t=this.__v_raw,i=Qe(t),r=Qe(n);return e||(n!==r&&Xt(i,"has",n),Xt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Qs(n,e=!1){return n=n.__v_raw,!e&&Xt(Qe(n),"iterate",$i),Reflect.get(n,"size",n)}function Hu(n){n=Qe(n);const e=Qe(this);return ca(e).has.call(e,n)||(e.add(n),Xn(e,"add",n,n)),this}function Vu(n,e){e=Qe(e);const t=Qe(this),{has:i,get:r}=ca(t);let s=i.call(t,n);s||(n=Qe(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?qo(e,o)&&Xn(t,"set",n,e):Xn(t,"add",n,e),this}function Gu(n){const e=Qe(this),{has:t,get:i}=ca(e);let r=t.call(e,n);r||(n=Qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Xn(e,"delete",n,void 0),s}function Wu(){const n=Qe(this),e=n.size!==0,t=n.clear();return e&&Xn(n,"clear",void 0,void 0),t}function eo(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Uc:n?jc:Wc;return!n&&Xt(a,"iterate",$i),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function to(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=Fr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Uc:e?jc:Wc;return!e&&Xt(s,"iterate",l?Vl:$i),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ni(n){return function(...e){return n==="delete"?!1:this}}function g_(){const n={get(s){return Zs(this,s)},get size(){return Qs(this)},has:Js,add:Hu,set:Vu,delete:Gu,clear:Wu,forEach:eo(!1,!1)},e={get(s){return Zs(this,s,!1,!0)},get size(){return Qs(this)},has:Js,add:Hu,set:Vu,delete:Gu,clear:Wu,forEach:eo(!1,!0)},t={get(s){return Zs(this,s,!0)},get size(){return Qs(this,!0)},has(s){return Js.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:eo(!0,!1)},i={get(s){return Zs(this,s,!0,!0)},get size(){return Qs(this,!0)},has(s){return Js.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:eo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=to(s,!1,!1),t[s]=to(s,!0,!1),e[s]=to(s,!1,!0),i[s]=to(s,!0,!0)}),[n,t,e,i]}const[__,v_,y_,x_]=g_();function Hc(n,e){const t=e?n?x_:y_:n?v_:__;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(je(t,r)&&r in i?t:i,r,s)}const b_={get:Hc(!1,!1)},w_={get:Hc(!1,!0)},S_={get:Hc(!0,!1)},np=new WeakMap,ip=new WeakMap,rp=new WeakMap,M_=new WeakMap;function E_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T_(n){return n.__v_skip||!Object.isExtensible(n)?0:E_(Kg(n))}function Vc(n){return Ls(n)?n:Gc(n,!1,tp,b_,np)}function A_(n){return Gc(n,!1,m_,w_,ip)}function sp(n){return Gc(n,!0,p_,S_,rp)}function Gc(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=T_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function kr(n){return Ls(n)?kr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ls(n){return!!(n&&n.__v_isReadonly)}function Wl(n){return!!(n&&n.__v_isShallow)}function op(n){return kr(n)||Ls(n)}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function ap(n){return Xo(n,"__v_skip",!0),n}const Wc=n=>st(n)?Vc(n):n,jc=n=>st(n)?sp(n):n;function C_(n){_i&&hn&&(n=Qe(n),Jd(n.dep||(n.dep=kc())))}function P_(n,e){n=Qe(n),n.dep&&Gl(n.dep)}function Ft(n){return!!(n&&n.__v_isRef===!0)}function L_(n){return Ft(n)?n.value:n}const R_={get:(n,e,t)=>L_(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ft(r)&&!Ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function lp(n){return kr(n)?n:new Proxy(n,R_)}var cp;class D_{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[cp]=!1,this._dirty=!0,this.effect=new Bc(e,()=>{this._dirty||(this._dirty=!0,P_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Qe(this);return C_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cp="__v_isReadonly";function O_(n,e,t=!1){let i,r;const s=He(n);return s?(i=n,r=gn):(i=n.get,r=n.set),new D_(i,r,s||!r,t)}function vi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ua(s,e,t)}return r}function rn(n,e,t,i){if(He(n)){const s=vi(n,e,t,i);return s&&jd(s)&&s.catch(o=>{ua(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(rn(n[s],e,t,i));return r}function ua(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){vi(l,null,10,[n,o,a]);return}}I_(n,t,r,i)}function I_(n,e,t,i=!0){console.error(n)}let Rs=!1,jl=!1;const Ct=[];let An=0;const Br=[];let Un=null,Ii=0;const up=Promise.resolve();let $c=null;function N_(n){const e=$c||up;return n?e.then(this?n.bind(this):n):e}function F_(n){let e=An+1,t=Ct.length;for(;e<t;){const i=e+t>>>1;Ds(Ct[i])<n?e=i+1:t=i}return e}function qc(n){(!Ct.length||!Ct.includes(n,Rs&&n.allowRecurse?An+1:An))&&(n.id==null?Ct.push(n):Ct.splice(F_(n.id),0,n),fp())}function fp(){!Rs&&!jl&&(jl=!0,$c=up.then(dp))}function k_(n){const e=Ct.indexOf(n);e>An&&Ct.splice(e,1)}function B_(n){Ne(n)?Br.push(...n):(!Un||!Un.includes(n,n.allowRecurse?Ii+1:Ii))&&Br.push(n),fp()}function ju(n,e=Rs?An+1:0){for(;e<Ct.length;e++){const t=Ct[e];t&&t.pre&&(Ct.splice(e,1),e--,t())}}function hp(n){if(Br.length){const e=[...new Set(Br)];if(Br.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,i)=>Ds(t)-Ds(i)),Ii=0;Ii<Un.length;Ii++)Un[Ii]();Un=null,Ii=0}}const Ds=n=>n.id==null?1/0:n.id,z_=(n,e)=>{const t=Ds(n)-Ds(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function dp(n){jl=!1,Rs=!0,Ct.sort(z_);const e=gn;try{for(An=0;An<Ct.length;An++){const t=Ct[An];t&&t.active!==!1&&vi(t,null,14)}}finally{An=0,Ct.length=0,hp(),Rs=!1,$c=null,(Ct.length||Br.length)&&dp()}}function U_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||nt;h&&(r=t.map(d=>d.trim())),f&&(r=t.map(Xd))}let a,l=i[a=Na(e)]||i[a=Na(Ln(e))];!l&&s&&(l=i[a=Na(Yr(e))]),l&&rn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rn(c,n,6,r)}}function pp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=pp(c,e,!0);u&&(a=!0,Pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Pt(o,s),st(n)&&i.set(n,o),o)}function fa(n,e){return!n||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),je(n,e[0].toLowerCase()+e.slice(1))||je(n,Yr(e))||je(n,e))}let tn=null,ha=null;function Yo(n){const e=tn;return tn=n,ha=n&&n.type.__scopeId||null,e}function H_(n){ha=n}function V_(){ha=null}function G_(n,e=tn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&nf(-1);const s=Yo(e);let o;try{o=n(...r)}finally{Yo(s),i._d&&nf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fa(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:m}=n;let p,_;const v=Yo(n);try{if(t.shapeFlag&4){const b=r||i;p=Mn(u.call(b,b,f,s,d,h,g)),_=l}else{const b=e;p=Mn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:W_(l)}}catch(b){Es.length=0,ua(b,n,1),p=Wn(_n)}let w=p;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:x}=w;b.length&&x&7&&(o&&b.some(Ic)&&(_=j_(_,o)),w=wi(w,_))}return t.dirs&&(w=wi(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),p=w,Yo(v),p}const W_=n=>{let e;for(const t in n)(t==="class"||t==="style"||oa(t))&&((e||(e={}))[t]=n[t]);return e},j_=(n,e)=>{const t={};for(const i in n)(!Ic(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $_(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!fa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!fa(t,s))return!0}return!1}function q_({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const X_=n=>n.__isSuspense;function Y_(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):B_(n)}function K_(n,e){if(bt){let t=bt.provides;const i=bt.parent&&bt.parent.provides;i===t&&(t=bt.provides=Object.create(i)),t[n]=e}}function ka(n,e,t=!1){const i=bt||tn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i.proxy):e}}const qu={};function Ba(n,e,t){return mp(n,e,t)}function mp(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=nt){const a=bt;let l,c=!1,u=!1;if(Ft(n)?(l=()=>n.value,c=Wl(n)):kr(n)?(l=()=>n,i=!0):Ne(n)?(u=!0,c=n.some(_=>kr(_)||Wl(_)),l=()=>n.map(_=>{if(Ft(_))return _.value;if(kr(_))return Ui(_);if(He(_))return vi(_,a,2)})):He(n)?e?l=()=>vi(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),rn(n,a,3,[h])}:l=gn,e&&i){const _=l;l=()=>Ui(_())}let f,h=_=>{f=p.onStop=()=>{vi(_,a,4)}};if(Is)return h=gn,e?t&&rn(e,a,3,[l(),u?[]:void 0,h]):l(),gn;let d=u?[]:qu;const g=()=>{if(!!p.active)if(e){const _=p.run();(i||c||(u?_.some((v,w)=>qo(v,d[w])):qo(_,d)))&&(f&&f(),rn(e,a,3,[_,d===qu?void 0:d,h]),d=_)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>zt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>qc(g));const p=new Bc(l,m);return e?t?g():d=p.run():r==="post"?zt(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&Nc(a.scope.effects,p)}}function Z_(n,e,t){const i=this.proxy,r=Mt(n)?n.includes(".")?gp(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=bt;Hr(this);const a=mp(r,s.bind(i),t);return o?Hr(o):Xi(),a}function gp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ui(n,e){if(!st(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ft(n))Ui(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)Ui(n[t],e);else if(Xr(n)||Fr(n))n.forEach(t=>{Ui(t,e)});else if(qd(n))for(const t in n)Ui(n[t],e);return n}function J_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xp(()=>{n.isMounted=!0}),bp(()=>{n.isUnmounting=!0}),n}const Jt=[Function,Array],Q_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},setup(n,{slots:e}){const t=Bv(),i=J_();let r;return()=>{const s=e.default&&vp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==_n){o=m;break}}const a=Qe(n),{mode:l}=a;if(i.isLeaving)return za(o);const c=Xu(o);if(!c)return za(o);const u=$l(c,a,i,t);ql(c,u);const f=t.subTree,h=f&&Xu(f);let d=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,d=!0)}if(h&&h.type!==_n&&(!Ni(c,h)||d)){const m=$l(h,a,i,t);if(ql(h,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,t.update()},za(o);l==="in-out"&&c.type!==_n&&(m.delayLeave=(p,_,v)=>{const w=_p(i,h);w[String(h.key)]=h,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return o}}},ev=Q_;function _p(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function $l(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:_,onAppearCancelled:v}=e,w=String(n.key),b=_p(t,n),x=(S,C)=>{S&&rn(S,i,9,C)},T=(S,C)=>{const I=C[1];x(S,C),Ne(S)?S.every(j=>j.length<=1)&&I():S.length<=1&&I()},D={mode:s,persisted:o,beforeEnter(S){let C=a;if(!t.isMounted)if(r)C=m||a;else return;S._leaveCb&&S._leaveCb(!0);const I=b[w];I&&Ni(n,I)&&I.el._leaveCb&&I.el._leaveCb(),x(C,[S])},enter(S){let C=l,I=c,j=u;if(!t.isMounted)if(r)C=p||l,I=_||c,j=v||u;else return;let te=!1;const G=S._enterCb=O=>{te||(te=!0,O?x(j,[S]):x(I,[S]),D.delayedLeave&&D.delayedLeave(),S._enterCb=void 0)};C?T(C,[S,G]):G()},leave(S,C){const I=String(n.key);if(S._enterCb&&S._enterCb(!0),t.isUnmounting)return C();x(f,[S]);let j=!1;const te=S._leaveCb=G=>{j||(j=!0,C(),G?x(g,[S]):x(d,[S]),S._leaveCb=void 0,b[I]===n&&delete b[I])};b[I]=n,h?T(h,[S,te]):te()},clone(S){return $l(S,e,t,i)}};return D}function za(n){if(da(n))return n=wi(n),n.children=null,n}function Xu(n){return da(n)?n.children?n.children[0]:void 0:n}function ql(n,e){n.shapeFlag&6&&n.component?ql(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function vp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===jt?(o.patchFlag&128&&r++,i=i.concat(vp(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?wi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const ko=n=>!!n.type.__asyncLoader,da=n=>n.type.__isKeepAlive;function tv(n,e){yp(n,"a",e)}function nv(n,e){yp(n,"da",e)}function yp(n,e,t=bt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(pa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)da(r.parent.vnode)&&iv(i,e,t,r),r=r.parent}}function iv(n,e,t,i){const r=pa(e,n,i,!0);wp(()=>{Nc(i[e],r)},t)}function pa(n,e,t=bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Kr(),Hr(t);const a=rn(e,t,n,o);return Xi(),Zr(),a});return i?r.unshift(s):r.push(s),s}}const Kn=n=>(e,t=bt)=>(!Is||n==="sp")&&pa(n,(...i)=>e(...i),t),rv=Kn("bm"),xp=Kn("m"),sv=Kn("bu"),ov=Kn("u"),bp=Kn("bum"),wp=Kn("um"),av=Kn("sp"),lv=Kn("rtg"),cv=Kn("rtc");function uv(n,e=bt){pa("ec",n,e)}function ar(n,e){const t=tn;if(t===null)return n;const i=ga(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=nt]=e[s];He(o)&&(o={mounted:o,updated:o}),o.deep&&Ui(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Kr(),rn(l,t,8,[n.el,a,n,e]),Zr())}}const Sp="components";function Ms(n,e){return hv(Sp,n,!0,e)||n}const fv=Symbol();function hv(n,e,t=!0,i=!1){const r=tn||bt;if(r){const s=r.type;if(n===Sp){const a=Gv(s,!1);if(a&&(a===e||a===Ln(e)||a===la(Ln(e))))return s}const o=Yu(r[n]||s[n],e)||Yu(r.appContext[n],e);return!o&&i?s:o}}function Yu(n,e){return n&&(n[e]||n[Ln(e)]||n[la(Ln(e))])}function Xl(n,e,t,i){let r;const s=t&&t[i];if(Ne(n)||Mt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(st(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const Yl=n=>n?Np(n)?ga(n)||n.proxy:Yl(n.parent):null,Ko=Pt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Yl(n.parent),$root:n=>Yl(n.root),$emit:n=>n.emit,$options:n=>Xc(n),$forceUpdate:n=>n.f||(n.f=()=>qc(n.update)),$nextTick:n=>n.n||(n.n=N_.bind(n.proxy)),$watch:n=>Z_.bind(n)}),dv={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==nt&&je(i,e))return o[e]=1,i[e];if(r!==nt&&je(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&je(c,e))return o[e]=3,s[e];if(t!==nt&&je(t,e))return o[e]=4,t[e];Kl&&(o[e]=0)}}const u=Ko[e];let f,h;if(u)return e==="$attrs"&&Xt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&je(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,je(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==nt&&je(r,e)?(r[e]=t,!0):i!==nt&&je(i,e)?(i[e]=t,!0):je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==nt&&je(n,o)||e!==nt&&je(e,o)||(a=s[0])&&je(a,o)||je(i,o)||je(Ko,o)||je(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Kl=!0;function pv(n){const e=Xc(n),t=n.proxy,i=n.ctx;Kl=!1,e.beforeCreate&&Ku(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:v,destroyed:w,unmounted:b,render:x,renderTracked:T,renderTriggered:D,errorCaptured:S,serverPrefetch:C,expose:I,inheritAttrs:j,components:te,directives:G,filters:O}=e;if(c&&mv(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const re in o){const Z=o[re];He(Z)&&(i[re]=Z.bind(t))}if(r){const re=r.call(t,t);st(re)&&(n.data=Vc(re))}if(Kl=!0,s)for(const re in s){const Z=s[re],q=He(Z)?Z.bind(t,t):He(Z.get)?Z.get.bind(t,t):gn,k=!He(Z)&&He(Z.set)?Z.set.bind(t):gn,ee=jv({get:q,set:k});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ee.value,set:Q=>ee.value=Q})}if(a)for(const re in a)Mp(a[re],i,t,re);if(l){const re=He(l)?l.call(t):l;Reflect.ownKeys(re).forEach(Z=>{K_(Z,re[Z])})}u&&Ku(u,n,"c");function U(re,Z){Ne(Z)?Z.forEach(q=>re(q.bind(t))):Z&&re(Z.bind(t))}if(U(rv,f),U(xp,h),U(sv,d),U(ov,g),U(tv,m),U(nv,p),U(uv,S),U(cv,T),U(lv,D),U(bp,v),U(wp,b),U(av,C),Ne(I))if(I.length){const re=n.exposed||(n.exposed={});I.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>t[Z],set:q=>t[Z]=q})})}else n.exposed||(n.exposed={});x&&n.render===gn&&(n.render=x),j!=null&&(n.inheritAttrs=j),te&&(n.components=te),G&&(n.directives=G)}function mv(n,e,t=gn,i=!1){Ne(n)&&(n=Zl(n));for(const r in n){const s=n[r];let o;st(s)?"default"in s?o=ka(s.from||r,s.default,!0):o=ka(s.from||r):o=ka(s),Ft(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ku(n,e,t){rn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Mp(n,e,t,i){const r=i.includes(".")?gp(t,i):()=>t[i];if(Mt(n)){const s=e[n];He(s)&&Ba(r,s)}else if(He(n))Ba(r,n.bind(t));else if(st(n))if(Ne(n))n.forEach(s=>Mp(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Ba(r,s,n)}}function Xc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Zo(l,c,o,!0)),Zo(l,e,o)),st(e)&&s.set(e,l),l}function Zo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Zo(n,s,t,!0),r&&r.forEach(o=>Zo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=gv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gv={data:Zu,props:Di,emits:Di,methods:Di,computed:Di,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:Di,directives:Di,watch:vv,provide:Zu,inject:_v};function Zu(n,e){return e?n?function(){return Pt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function _v(n,e){return Di(Zl(n),Zl(e))}function Zl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function It(n,e){return n?[...new Set([].concat(n,e))]:e}function Di(n,e){return n?Pt(Pt(Object.create(null),n),e):e}function vv(n,e){if(!n)return e;if(!e)return n;const t=Pt(Object.create(null),n);for(const i in e)t[i]=It(n[i],e[i]);return t}function yv(n,e,t,i=!1){const r={},s={};Xo(s,ma,1),n.propsDefaults=Object.create(null),Ep(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:A_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xv(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(fa(n.emitsOptions,h))continue;const d=e[h];if(l)if(je(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Ln(h);r[g]=Jl(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Ep(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!je(e,f)&&((u=Yr(f))===f||!je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Jl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!je(e,f)&&!0)&&(delete s[f],c=!0)}c&&Xn(n,"set","$attrs")}function Ep(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(No(l))continue;const c=e[l];let u;r&&je(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:fa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Jl(r,l,f,c[f],n,!je(c,f))}}return o}function Jl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=je(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&He(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Hr(r),i=c[t]=l.call(null,e),Xi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Yr(t))&&(i=!0))}return i}function Tp(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,d]=Tp(f,e,!0);Pt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Nr),Nr;if(Ne(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);Ju(f)&&(o[f]=nt)}else if(s)for(const u in s){const f=Ln(u);if(Ju(f)){const h=s[u],d=o[f]=Ne(h)||He(h)?{type:h}:h;if(d){const g=tf(Boolean,d.type),m=tf(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||je(d,"default"))&&a.push(f)}}}const c=[o,a];return st(n)&&i.set(n,c),c}function Ju(n){return n[0]!=="$"}function Qu(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function ef(n,e){return Qu(n)===Qu(e)}function tf(n,e){return Ne(e)?e.findIndex(t=>ef(t,n)):He(e)&&ef(e,n)?0:-1}const Ap=n=>n[0]==="_"||n==="$stable",Yc=n=>Ne(n)?n.map(Mn):[Mn(n)],bv=(n,e,t)=>{if(e._n)return e;const i=G_((...r)=>Yc(e(...r)),t);return i._c=!1,i},Cp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ap(r))continue;const s=n[r];if(He(s))e[r]=bv(r,s,i);else if(s!=null){const o=Yc(s);e[r]=()=>o}}},Pp=(n,e)=>{const t=Yc(e);n.slots.default=()=>t},wv=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Qe(e),Xo(e,"_",t)):Cp(e,n.slots={})}else n.slots={},e&&Pp(n,e);Xo(n.slots,ma,1)},Sv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=nt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Cp(e,r)),o=e}else e&&(Pp(n,e),o={default:1});if(s)for(const a in r)!Ap(a)&&!(a in o)&&delete r[a]};function Lp(){return{app:null,config:{isNativeTag:qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mv=0;function Ev(n,e){return function(i,r=null){He(i)||(i=Object.assign({},i)),r!=null&&!st(r)&&(r=null);const s=Lp(),o=new Set;let a=!1;const l=s.app={_uid:Mv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$v,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Wn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,ga(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ql(n,e,t,i,r=!1){if(Ne(n)){n.forEach((h,d)=>Ql(h,e&&(Ne(e)?e[d]:e),t,i,r));return}if(ko(i)&&!r)return;const s=i.shapeFlag&4?ga(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Mt(c)?(u[c]=null,je(f,c)&&(f[c]=null)):Ft(c)&&(c.value=null)),He(l))vi(l,a,12,[o,u]);else{const h=Mt(l),d=Ft(l);if(h||d){const g=()=>{if(n.f){const m=h?je(f,l)?f[l]:u[l]:l.value;r?Ne(m)&&Nc(m,s):Ne(m)?m.includes(s)||m.push(s):h?(u[l]=[s],je(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,je(f,l)&&(f[l]=o)):d&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,zt(g,t)):g()}}}const zt=Y_;function Tv(n){return Av(n)}function Av(n,e){const t=Qg();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=gn,insertStaticContent:g}=n,m=(L,y,A,M=null,B=null,X=null,K=!1,ie=null,pe=!!y.dynamicChildren)=>{if(L===y)return;L&&!Ni(L,y)&&(M=$(L),Q(L,B,X,!0),L=null),y.patchFlag===-2&&(pe=!1,y.dynamicChildren=null);const{type:le,ref:P,shapeFlag:E}=y;switch(le){case Kc:p(L,y,A,M);break;case _n:_(L,y,A,M);break;case Ua:L==null&&v(y,A,M,K);break;case jt:te(L,y,A,M,B,X,K,ie,pe);break;default:E&1?x(L,y,A,M,B,X,K,ie,pe):E&6?G(L,y,A,M,B,X,K,ie,pe):(E&64||E&128)&&le.process(L,y,A,M,B,X,K,ie,pe,ve)}P!=null&&B&&Ql(P,L&&L.ref,X,y||L,!y)},p=(L,y,A,M)=>{if(L==null)i(y.el=a(y.children),A,M);else{const B=y.el=L.el;y.children!==L.children&&c(B,y.children)}},_=(L,y,A,M)=>{L==null?i(y.el=l(y.children||""),A,M):y.el=L.el},v=(L,y,A,M)=>{[L.el,L.anchor]=g(L.children,y,A,M,L.el,L.anchor)},w=({el:L,anchor:y},A,M)=>{let B;for(;L&&L!==y;)B=h(L),i(L,A,M),L=B;i(y,A,M)},b=({el:L,anchor:y})=>{let A;for(;L&&L!==y;)A=h(L),r(L),L=A;r(y)},x=(L,y,A,M,B,X,K,ie,pe)=>{K=K||y.type==="svg",L==null?T(y,A,M,B,X,K,ie,pe):C(L,y,B,X,K,ie,pe)},T=(L,y,A,M,B,X,K,ie)=>{let pe,le;const{type:P,props:E,shapeFlag:H,transition:ae,dirs:he}=L;if(pe=L.el=o(L.type,X,E&&E.is,E),H&8?u(pe,L.children):H&16&&S(L.children,pe,null,M,B,X&&P!=="foreignObject",K,ie),he&&Ai(L,null,M,"created"),E){for(const Me in E)Me!=="value"&&!No(Me)&&s(pe,Me,null,E[Me],X,L.children,M,B,W);"value"in E&&s(pe,"value",null,E.value),(le=E.onVnodeBeforeMount)&&bn(le,M,L)}D(pe,L,L.scopeId,K,M),he&&Ai(L,null,M,"beforeMount");const ye=(!B||B&&!B.pendingBranch)&&ae&&!ae.persisted;ye&&ae.beforeEnter(pe),i(pe,y,A),((le=E&&E.onVnodeMounted)||ye||he)&&zt(()=>{le&&bn(le,M,L),ye&&ae.enter(pe),he&&Ai(L,null,M,"mounted")},B)},D=(L,y,A,M,B)=>{if(A&&d(L,A),M)for(let X=0;X<M.length;X++)d(L,M[X]);if(B){let X=B.subTree;if(y===X){const K=B.vnode;D(L,K,K.scopeId,K.slotScopeIds,B.parent)}}},S=(L,y,A,M,B,X,K,ie,pe=0)=>{for(let le=pe;le<L.length;le++){const P=L[le]=ie?di(L[le]):Mn(L[le]);m(null,P,y,A,M,B,X,K,ie)}},C=(L,y,A,M,B,X,K)=>{const ie=y.el=L.el;let{patchFlag:pe,dynamicChildren:le,dirs:P}=y;pe|=L.patchFlag&16;const E=L.props||nt,H=y.props||nt;let ae;A&&Ci(A,!1),(ae=H.onVnodeBeforeUpdate)&&bn(ae,A,y,L),P&&Ai(y,L,A,"beforeUpdate"),A&&Ci(A,!0);const he=B&&y.type!=="foreignObject";if(le?I(L.dynamicChildren,le,ie,A,M,he,X):K||Z(L,y,ie,null,A,M,he,X,!1),pe>0){if(pe&16)j(ie,y,E,H,A,M,B);else if(pe&2&&E.class!==H.class&&s(ie,"class",null,H.class,B),pe&4&&s(ie,"style",E.style,H.style,B),pe&8){const ye=y.dynamicProps;for(let Me=0;Me<ye.length;Me++){const N=ye[Me],Y=E[N],Te=H[N];(Te!==Y||N==="value")&&s(ie,N,Y,Te,B,L.children,A,M,W)}}pe&1&&L.children!==y.children&&u(ie,y.children)}else!K&&le==null&&j(ie,y,E,H,A,M,B);((ae=H.onVnodeUpdated)||P)&&zt(()=>{ae&&bn(ae,A,y,L),P&&Ai(y,L,A,"updated")},M)},I=(L,y,A,M,B,X,K)=>{for(let ie=0;ie<y.length;ie++){const pe=L[ie],le=y[ie],P=pe.el&&(pe.type===jt||!Ni(pe,le)||pe.shapeFlag&70)?f(pe.el):A;m(pe,le,P,null,M,B,X,K,!0)}},j=(L,y,A,M,B,X,K)=>{if(A!==M){if(A!==nt)for(const ie in A)!No(ie)&&!(ie in M)&&s(L,ie,A[ie],null,K,y.children,B,X,W);for(const ie in M){if(No(ie))continue;const pe=M[ie],le=A[ie];pe!==le&&ie!=="value"&&s(L,ie,le,pe,K,y.children,B,X,W)}"value"in M&&s(L,"value",A.value,M.value)}},te=(L,y,A,M,B,X,K,ie,pe)=>{const le=y.el=L?L.el:a(""),P=y.anchor=L?L.anchor:a("");let{patchFlag:E,dynamicChildren:H,slotScopeIds:ae}=y;ae&&(ie=ie?ie.concat(ae):ae),L==null?(i(le,A,M),i(P,A,M),S(y.children,A,P,B,X,K,ie,pe)):E>0&&E&64&&H&&L.dynamicChildren?(I(L.dynamicChildren,H,A,B,X,K,ie),(y.key!=null||B&&y===B.subTree)&&Rp(L,y,!0)):Z(L,y,A,P,B,X,K,ie,pe)},G=(L,y,A,M,B,X,K,ie,pe)=>{y.slotScopeIds=ie,L==null?y.shapeFlag&512?B.ctx.activate(y,A,M,K,pe):O(y,A,M,B,X,K,pe):F(L,y,pe)},O=(L,y,A,M,B,X,K)=>{const ie=L.component=kv(L,M,B);if(da(L)&&(ie.ctx.renderer=ve),zv(ie),ie.asyncDep){if(B&&B.registerDep(ie,U),!L.el){const pe=ie.subTree=Wn(_n);_(null,pe,y,A)}return}U(ie,L,y,A,B,X,K)},F=(L,y,A)=>{const M=y.component=L.component;if($_(L,y,A))if(M.asyncDep&&!M.asyncResolved){re(M,y,A);return}else M.next=y,k_(M.update),M.update();else y.el=L.el,M.vnode=y},U=(L,y,A,M,B,X,K)=>{const ie=()=>{if(L.isMounted){let{next:P,bu:E,u:H,parent:ae,vnode:he}=L,ye=P,Me;Ci(L,!1),P?(P.el=he.el,re(L,P,K)):P=he,E&&Fo(E),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&bn(Me,ae,P,he),Ci(L,!0);const N=Fa(L),Y=L.subTree;L.subTree=N,m(Y,N,f(Y.el),$(Y),L,B,X),P.el=N.el,ye===null&&q_(L,N.el),H&&zt(H,B),(Me=P.props&&P.props.onVnodeUpdated)&&zt(()=>bn(Me,ae,P,he),B)}else{let P;const{el:E,props:H}=y,{bm:ae,m:he,parent:ye}=L,Me=ko(y);if(Ci(L,!1),ae&&Fo(ae),!Me&&(P=H&&H.onVnodeBeforeMount)&&bn(P,ye,y),Ci(L,!0),E&&Pe){const N=()=>{L.subTree=Fa(L),Pe(E,L.subTree,L,B,null)};Me?y.type.__asyncLoader().then(()=>!L.isUnmounted&&N()):N()}else{const N=L.subTree=Fa(L);m(null,N,A,M,L,B,X),y.el=N.el}if(he&&zt(he,B),!Me&&(P=H&&H.onVnodeMounted)){const N=y;zt(()=>bn(P,ye,N),B)}(y.shapeFlag&256||ye&&ko(ye.vnode)&&ye.vnode.shapeFlag&256)&&L.a&&zt(L.a,B),L.isMounted=!0,y=A=M=null}},pe=L.effect=new Bc(ie,()=>qc(le),L.scope),le=L.update=()=>pe.run();le.id=L.uid,Ci(L,!0),le()},re=(L,y,A)=>{y.component=L;const M=L.vnode.props;L.vnode=y,L.next=null,xv(L,y.props,M,A),Sv(L,y.children,A),Kr(),ju(),Zr()},Z=(L,y,A,M,B,X,K,ie,pe=!1)=>{const le=L&&L.children,P=L?L.shapeFlag:0,E=y.children,{patchFlag:H,shapeFlag:ae}=y;if(H>0){if(H&128){k(le,E,A,M,B,X,K,ie,pe);return}else if(H&256){q(le,E,A,M,B,X,K,ie,pe);return}}ae&8?(P&16&&W(le,B,X),E!==le&&u(A,E)):P&16?ae&16?k(le,E,A,M,B,X,K,ie,pe):W(le,B,X,!0):(P&8&&u(A,""),ae&16&&S(E,A,M,B,X,K,ie,pe))},q=(L,y,A,M,B,X,K,ie,pe)=>{L=L||Nr,y=y||Nr;const le=L.length,P=y.length,E=Math.min(le,P);let H;for(H=0;H<E;H++){const ae=y[H]=pe?di(y[H]):Mn(y[H]);m(L[H],ae,A,null,B,X,K,ie,pe)}le>P?W(L,B,X,!0,!1,E):S(y,A,M,B,X,K,ie,pe,E)},k=(L,y,A,M,B,X,K,ie,pe)=>{let le=0;const P=y.length;let E=L.length-1,H=P-1;for(;le<=E&&le<=H;){const ae=L[le],he=y[le]=pe?di(y[le]):Mn(y[le]);if(Ni(ae,he))m(ae,he,A,null,B,X,K,ie,pe);else break;le++}for(;le<=E&&le<=H;){const ae=L[E],he=y[H]=pe?di(y[H]):Mn(y[H]);if(Ni(ae,he))m(ae,he,A,null,B,X,K,ie,pe);else break;E--,H--}if(le>E){if(le<=H){const ae=H+1,he=ae<P?y[ae].el:M;for(;le<=H;)m(null,y[le]=pe?di(y[le]):Mn(y[le]),A,he,B,X,K,ie,pe),le++}}else if(le>H)for(;le<=E;)Q(L[le],B,X,!0),le++;else{const ae=le,he=le,ye=new Map;for(le=he;le<=H;le++){const Re=y[le]=pe?di(y[le]):Mn(y[le]);Re.key!=null&&ye.set(Re.key,le)}let Me,N=0;const Y=H-he+1;let Te=!1,Le=0;const Ae=new Array(Y);for(le=0;le<Y;le++)Ae[le]=0;for(le=ae;le<=E;le++){const Re=L[le];if(N>=Y){Q(Re,B,X,!0);continue}let Be;if(Re.key!=null)Be=ye.get(Re.key);else for(Me=he;Me<=H;Me++)if(Ae[Me-he]===0&&Ni(Re,y[Me])){Be=Me;break}Be===void 0?Q(Re,B,X,!0):(Ae[Be-he]=le+1,Be>=Le?Le=Be:Te=!0,m(Re,y[Be],A,null,B,X,K,ie,pe),N++)}const De=Te?Cv(Ae):Nr;for(Me=De.length-1,le=Y-1;le>=0;le--){const Re=he+le,Be=y[Re],V=Re+1<P?y[Re+1].el:M;Ae[le]===0?m(null,Be,A,V,B,X,K,ie,pe):Te&&(Me<0||le!==De[Me]?ee(Be,A,V,2):Me--)}}},ee=(L,y,A,M,B=null)=>{const{el:X,type:K,transition:ie,children:pe,shapeFlag:le}=L;if(le&6){ee(L.component.subTree,y,A,M);return}if(le&128){L.suspense.move(y,A,M);return}if(le&64){K.move(L,y,A,ve);return}if(K===jt){i(X,y,A);for(let E=0;E<pe.length;E++)ee(pe[E],y,A,M);i(L.anchor,y,A);return}if(K===Ua){w(L,y,A);return}if(M!==2&&le&1&&ie)if(M===0)ie.beforeEnter(X),i(X,y,A),zt(()=>ie.enter(X),B);else{const{leave:E,delayLeave:H,afterLeave:ae}=ie,he=()=>i(X,y,A),ye=()=>{E(X,()=>{he(),ae&&ae()})};H?H(X,he,ye):ye()}else i(X,y,A)},Q=(L,y,A,M=!1,B=!1)=>{const{type:X,props:K,ref:ie,children:pe,dynamicChildren:le,shapeFlag:P,patchFlag:E,dirs:H}=L;if(ie!=null&&Ql(ie,null,A,L,!0),P&256){y.ctx.deactivate(L);return}const ae=P&1&&H,he=!ko(L);let ye;if(he&&(ye=K&&K.onVnodeBeforeUnmount)&&bn(ye,y,L),P&6)se(L.component,A,M);else{if(P&128){L.suspense.unmount(A,M);return}ae&&Ai(L,null,y,"beforeUnmount"),P&64?L.type.remove(L,y,A,B,ve,M):le&&(X!==jt||E>0&&E&64)?W(le,y,A,!1,!0):(X===jt&&E&384||!B&&P&16)&&W(pe,y,A),M&&ue(L)}(he&&(ye=K&&K.onVnodeUnmounted)||ae)&&zt(()=>{ye&&bn(ye,y,L),ae&&Ai(L,null,y,"unmounted")},A)},ue=L=>{const{type:y,el:A,anchor:M,transition:B}=L;if(y===jt){ce(A,M);return}if(y===Ua){b(L);return}const X=()=>{r(A),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(L.shapeFlag&1&&B&&!B.persisted){const{leave:K,delayLeave:ie}=B,pe=()=>K(A,X);ie?ie(L.el,X,pe):pe()}else X()},ce=(L,y)=>{let A;for(;L!==y;)A=h(L),r(L),L=A;r(y)},se=(L,y,A)=>{const{bum:M,scope:B,update:X,subTree:K,um:ie}=L;M&&Fo(M),B.stop(),X&&(X.active=!1,Q(K,L,y,A)),ie&&zt(ie,y),zt(()=>{L.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},W=(L,y,A,M=!1,B=!1,X=0)=>{for(let K=X;K<L.length;K++)Q(L[K],y,A,M,B)},$=L=>L.shapeFlag&6?$(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el),oe=(L,y,A)=>{L==null?y._vnode&&Q(y._vnode,null,null,!0):m(y._vnode||null,L,y,null,null,null,A),ju(),hp(),y._vnode=L},ve={p:m,um:Q,m:ee,r:ue,mt:O,mc:S,pc:Z,pbc:I,n:$,o:n};let me,Pe;return e&&([me,Pe]=e(ve)),{render:oe,hydrate:me,createApp:Ev(oe,me)}}function Ci({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rp(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),t||Rp(o,a))}}function Cv(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Pv=n=>n.__isTeleport,jt=Symbol(void 0),Kc=Symbol(void 0),_n=Symbol(void 0),Ua=Symbol(void 0),Es=[];let pn=null;function Ue(n=!1){Es.push(pn=n?null:[])}function Lv(){Es.pop(),pn=Es[Es.length-1]||null}let Os=1;function nf(n){Os+=n}function Dp(n){return n.dynamicChildren=Os>0?pn||Nr:null,Lv(),Os>0&&pn&&pn.push(n),n}function We(n,e,t,i,r,s){return Dp(be(n,e,t,i,r,s,!0))}function qi(n,e,t,i,r){return Dp(Wn(n,e,t,i,r,!0))}function Rv(n){return n?n.__v_isVNode===!0:!1}function Ni(n,e){return n.type===e.type&&n.key===e.key}const ma="__vInternal",Op=({key:n})=>n!=null?n:null,Bo=({ref:n,ref_key:e,ref_for:t})=>n!=null?Mt(n)||Ft(n)||He(n)?{i:tn,r:n,k:e,f:!!t}:n:null;function be(n,e=null,t=null,i=0,r=null,s=n===jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Op(e),ref:e&&Bo(e),scopeId:ha,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Zc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Mt(t)?8:16),Os>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const Wn=Dv;function Dv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===fv)&&(n=_n),Rv(n)){const a=wi(n,e,!0);return t&&Zc(a,t),Os>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag|=-2,a}if(Wv(n)&&(n=n.__vccOpts),e){e=Ov(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=Dc(a)),st(l)&&(op(l)&&!Ne(l)&&(l=Pt({},l)),e.style=Rc(l))}const o=Mt(n)?1:X_(n)?128:Pv(n)?64:st(n)?4:He(n)?2:0;return be(n,e,t,i,r,o,s,!0)}function Ov(n){return n?op(n)||ma in n?Pt({},n):n:null}function wi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Iv(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Op(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(Bo(e)):[r,Bo(e)]:Bo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),el:n.el,anchor:n.anchor}}function Ip(n=" ",e=0){return Wn(Kc,null,n,e)}function et(n="",e=!1){return e?(Ue(),qi(_n,null,n)):Wn(_n,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Wn(_n):Ne(n)?Wn(jt,null,n.slice()):typeof n=="object"?di(n):Wn(Kc,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function Zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Zc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ma in e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),i&64?(t=16,e=[Ip(e)]):t=8);n.children=e,n.shapeFlag|=t}function Iv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dc([e.class,i.class]));else if(r==="style")e.style=Rc([e.style,i.style]);else if(oa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function bn(n,e,t,i=null){rn(n,e,7,[t,i])}const Nv=Lp();let Fv=0;function kv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Nv,s={uid:Fv++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new e_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tp(i,r),emitsOptions:pp(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=U_.bind(null,s),n.ce&&n.ce(s),s}let bt=null;const Bv=()=>bt||tn,Hr=n=>{bt=n,n.scope.on()},Xi=()=>{bt&&bt.scope.off(),bt=null};function Np(n){return n.vnode.shapeFlag&4}let Is=!1;function zv(n,e=!1){Is=e;const{props:t,children:i}=n.vnode,r=Np(n);yv(n,t,r,e),wv(n,i);const s=r?Uv(n,e):void 0;return Is=!1,s}function Uv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ap(new Proxy(n.ctx,dv));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Vv(n):null;Hr(n),Kr();const s=vi(i,n,0,[n.props,r]);if(Zr(),Xi(),jd(s)){if(s.then(Xi,Xi),e)return s.then(o=>{rf(n,o,e)}).catch(o=>{ua(o,n,0)});n.asyncDep=s}else rf(n,s,e)}else Fp(n,e)}function rf(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=lp(e)),Fp(n,t)}let sf;function Fp(n,e,t){const i=n.type;if(!n.render){if(!e&&sf&&!i.render){const r=i.template||Xc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Pt(Pt({isCustomElement:s,delimiters:a},o),l);i.render=sf(r,c)}}n.render=i.render||gn}Hr(n),Kr(),pv(n),Zr(),Xi()}function Hv(n){return new Proxy(n.attrs,{get(e,t){return Xt(n,"get","$attrs"),e[t]}})}function Vv(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Hv(n))},slots:n.slots,emit:n.emit,expose:e}}function ga(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(lp(ap(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ko)return Ko[t](n)}}))}function Gv(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function Wv(n){return He(n)&&"__vccOpts"in n}const jv=(n,e)=>O_(n,e,Is),$v="3.2.41",qv="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,of=Fi&&Fi.createElement("template"),Xv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Fi.createElementNS(qv,n):Fi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{of.innerHTML=i?`<svg>${n}</svg>`:n;const a=of.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Yv(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Kv(n,e,t){const i=n.style,r=Mt(t);if(t&&!r){for(const s in t)ec(i,s,t[s]);if(e&&!Mt(e))for(const s in e)t[s]==null&&ec(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const af=/\s*!important$/;function ec(n,e,t){if(Ne(t))t.forEach(i=>ec(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zv(n,e);af.test(t)?n.setProperty(Yr(i),t.replace(af,""),"important"):n[i]=t}}const lf=["Webkit","Moz","ms"],Ha={};function Zv(n,e){const t=Ha[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return Ha[e]=i;i=la(i);for(let r=0;r<lf.length;r++){const s=lf[r]+i;if(s in n)return Ha[e]=s}return e}const cf="http://www.w3.org/1999/xlink";function Jv(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(cf,e.slice(6,e.length)):n.setAttributeNS(cf,e,t);else{const s=Vg(e);t==null||s&&!Gd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Qv(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Gd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Jc(n,e,t,i){n.addEventListener(e,t,i)}function e0(n,e,t,i){n.removeEventListener(e,t,i)}function t0(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=n0(e);if(i){const c=s[e]=s0(i,r);Jc(n,a,c,l)}else o&&(e0(n,a,o,l),s[e]=void 0)}}const uf=/(?:Once|Passive|Capture)$/;function n0(n){let e;if(uf.test(n)){e={};let i;for(;i=n.match(uf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Yr(n.slice(2)),e]}let Va=0;const i0=Promise.resolve(),r0=()=>Va||(i0.then(()=>Va=0),Va=Date.now());function s0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rn(o0(i,t.value),e,5,[i])};return t.value=n,t.attached=r0(),t}function o0(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ff=/^on[a-z]/,a0=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Yv(n,i,r):e==="style"?Kv(n,t,i):oa(e)?Ic(e)||t0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):l0(n,e,i,r))?Qv(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Jv(n,e,i,r))};function l0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&ff.test(e)&&He(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||ff.test(e)&&Mt(t)?!1:e in n}const c0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ev.props;const Jo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Fo(e,t):e},hf={deep:!0,created(n,e,t){n._assign=Jo(t),Jc(n,"change",()=>{const i=n._modelValue,r=Ns(n),s=n.checked,o=n._assign;if(Ne(i)){const a=Oc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Xr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(kp(n,s))})},mounted:df,beforeUpdate(n,e,t){n._assign=Jo(t),df(n,e,t)}};function df(n,{value:e,oldValue:t},i){n._modelValue=e,Ne(e)?n.checked=Oc(e,i.props.value)>-1:Xr(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Hs(e,kp(n,!0)))}const no={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Xr(e);Jc(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Xd(Ns(o)):Ns(o));n._assign(n.multiple?r?new Set(s):s:s[0])}),n._assign=Jo(i)},mounted(n,{value:e}){pf(n,e)},beforeUpdate(n,e,t){n._assign=Jo(t)},updated(n,{value:e}){pf(n,e)}};function pf(n,e){const t=n.multiple;if(!(t&&!Ne(e)&&!Xr(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=Ns(s);if(t)Ne(e)?s.selected=Oc(e,o)>-1:s.selected=e.has(o);else if(Hs(Ns(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ns(n){return"_value"in n?n._value:n.value}function kp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const u0=Pt({patchProp:a0},Xv);let mf;function f0(){return mf||(mf=Tv(u0))}const h0=(...n)=>{const e=f0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=d0(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function d0(n){return Mt(n)?document.querySelector(n):n}const Jr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},p0="2ed0e6e8b06842fb854cb15e1690a7b5",m0="user-follow-read user-top-read",g0={name:"LoginPage",methods:{login(){window.location.href=`https://accounts.spotify.com/authorize?client_id=${p0}&response_type=token&redirect_uri=${window.location.origin}&scope=${m0}&show_dialog=true`}}},_0={class:"bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"},v0={class:"grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center"},y0={class:"w-6/7 md:w-fit space-y-3"},x0=be("div",{class:"rounded-md shadow-2xl text-center p-4 bg-base03"},[be("main",null,[be("h1",{class:"text-3xl font-bold text-base1"},"Artist Constellations"),be("p",{class:"text-base0"}," View the artists you listen to on Spotify in a 3D constellations! "),be("a",{href:"https://github.com/grantshandy/artist-constellations.art",class:"text-base0 underline"}," View Source Code ")])],-1),b0={class:"w-full flex shadow-lg hover:shadow-2xl"};function w0(n,e,t,i,r,s){return Ue(),We("div",_0,[be("div",v0,[be("div",y0,[x0,be("div",b0,[be("button",{onClick:e[0]||(e[0]=(...o)=>s.login&&s.login(...o)),class:"grow px-2 py-1 text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"}," Start Here ")])])])])}const S0=Jr(g0,[["render",w0]]),M0={name:"UserInfo",props:["me"],data(){return{displayName:null,share:!1}},created(){this.me.displayName?(this.displayName=this.me.displayName,this.share=!0):this.me.display_name&&(this.displayName=this.me.display_name)}},E0={class:"w-full flow-root px-2 py-1 rounded-md bg-base02 space-x-3 select-none shadow-md items-center"},T0={class:"float-left align-middle font-bold text-sm md:text-base"},A0={key:0},C0=["src"];function P0(n,e,t,i,r,s){return Ue(),We("div",E0,[be("p",T0,[r.share?(Ue(),We("span",A0,"Other")):et("",!0),Ip(" User: "+ht(r.displayName.charAt(0).toUpperCase()+r.displayName.slice(1)),1)]),t.me.images?(Ue(),We("img",{key:0,src:t.me.images[0].url,alt:"Profile Picture",class:"float-right w-6 h-6 rounded-full"},null,8,C0)):et("",!0)])}const L0=Jr(M0,[["render",P0]]);class R0{constructor(e){Oa(this,"value");Oa(this,"next");this.value=e}}var Sn,Wi,ji;class D0{constructor(){Ks(this,Sn,void 0);Ks(this,Wi,void 0);Ks(this,ji,void 0);this.clear()}enqueue(e){const t=new R0(e);ti(this,Sn)?(ti(this,Wi).next=t,On(this,Wi,t)):(On(this,Sn,t),On(this,Wi,t)),Ia(this,ji)._++}dequeue(){const e=ti(this,Sn);if(!!e)return On(this,Sn,ti(this,Sn).next),Ia(this,ji)._--,e.value}clear(){On(this,Sn,void 0),On(this,Wi,void 0),On(this,ji,0)}get size(){return ti(this,ji)}*[Symbol.iterator](){let e=ti(this,Sn);for(;e;)yield e.value,e=e.next}}Sn=new WeakMap,Wi=new WeakMap,ji=new WeakMap;function O0(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new D0;let t=0;const i=()=>{t--,e.size>0&&e.dequeue()()},r=async(a,l,c)=>{t++;const u=(async()=>a(...c))();l(u);try{await u}catch{}i()},s=(a,l,c)=>{e.enqueue(r.bind(void 0,a,l,c)),(async()=>(await Promise.resolve(),t<n&&e.size>0&&e.dequeue()()))()},o=(a,...l)=>new Promise(c=>{s(a,c,l)});return Object.defineProperties(o,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),o}function Bp(n){var o,a;let e=n.name,t=n.genres,i=n.id,r=n.popularity,s=(a=(o=n==null?void 0:n.images[0])==null?void 0:o.url)!=null?a:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png";return{name:e,genres:t,id:i,img:s,popularity:r}}async function I0(){let n=await gf(),e=n.cursor,t=n.artists;for(;e!=null;){let i=await gf(e);e=i.cursor,i.artists.forEach(function(r){t.push(r)})}return t}async function N0(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/top-tracks?market=US`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&tr(),t.error;return t.tracks}async function gf(n){let e;n==null?e="https://api.spotify.com/v1/me/following?type=artist&limit=50":e=`https://api.spotify.com/v1/me/following?type=artist&after=${n}&limit=50`;let i=await(await fetch(e,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(i.error)throw(i.error.status=401)&&tr(),i.error;let r=new Array;i.artists.items.forEach(function(o){r.push(Bp(o))});let s=i.artists.cursors.after;return{artists:r,cursor:s}}async function F0(){let e=await(await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(e.error)throw e.error.status==401&&tr(),e.error;return e}async function k0(n){let e=[];n.forEach(function(s){e.push(s.id)});let t=O0(2),i=await Promise.all(n.map(s=>t(()=>B0(s)))).catch(s=>{throw s}),r=[];for(const s of i)for(const o of s.relatedArtists)if(e.includes(o.id)){let a={source:s.id,target:o.id},l={source:o.id,target:s.id};!r.includes(a)&&!r.includes(l)&&r.push(a)}return r}async function B0(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/related-artists`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&tr(),t.error;let i=[];return t.artists.forEach(function(r){i.push({name:r.name,id:r.id})}),{name:n.name,id:n.id,relatedArtists:i}}async function z0(n){let t=await(await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${n}&limit=50`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&tr(),t.error;let i=[];return t.items.forEach(function(r){i.push(Bp(r))}),i}function tr(){localStorage.removeItem("userToken"),localStorage.removeItem("lastLoggedIn"),window.location.href=window.location.href.split("?")[0].split("#")[0]}const U0={name:"ArtistInfo",props:{artist:Object},data(){return{topTracks:null}},methods:{async revealTopTracks(){this.topTracks=await N0(this.artist).catch(n=>{this.error=n}),console.log(this.topTracks)}}},H0={class:"overflow-y-auto rounded-md shadow-md"},V0={class:"rounded-md bg-base03 shadow-md py-2 space-y-2 text-center"},G0=["href"],W0={class:"md:text-2xl font-semibold mb-2"},j0=["src"],$0={class:"text-sm italic"},q0={key:0},X0=be("p",{class:"font-bold"},"Owners:",-1),Y0={class:"text-sm"},K0={key:1},Z0=be("p",{class:"font-bold"},"Genres:",-1),J0={class:"text-sm"};function Q0(n,e,t,i,r,s){return Ue(),We("div",H0,[be("div",V0,[be("a",{href:"https://open.spotify.com/artist/"+t.artist.id,target:"_blank",rel:"noopener noreferrer",class:"block"},[be("p",W0,ht(t.artist.name),1),be("img",{src:t.artist.img,alt:"Artist Profile Picture",class:"rounded-md w-2/3 mx-auto"},null,8,j0)],8,G0),be("p",$0,"Popularity: "+ht(t.artist.popularity)+"%",1),t.artist.owners.length>0?(Ue(),We("div",q0,[X0,(Ue(!0),We(jt,null,Xl(t.artist.owners,o=>(Ue(),We("div",{key:o},[be("p",Y0,"\u2022 "+ht(o),1)]))),128))])):et("",!0),t.artist.genres.length>0?(Ue(),We("div",K0,[Z0,(Ue(!0),We(jt,null,Xl(t.artist.genres,o=>(Ue(),We("div",{key:o},[be("p",J0,"\u2022 "+ht(o),1)]))),128))])):et("",!0)])])}const ey=Jr(U0,[["render",Q0]]);function zp(n,e){return function(){return n.apply(e,arguments)}}const{toString:Up}=Object.prototype,{getPrototypeOf:Qc}=Object,eu=(n=>e=>{const t=Up.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=n=>(n=n.toLowerCase(),e=>eu(e)===n),_a=n=>e=>typeof e===n,{isArray:Gs}=Array,tc=_a("undefined");function ty(n){return n!==null&&!tc(n)&&n.constructor!==null&&!tc(n.constructor)&&Qr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Hp=Zn("ArrayBuffer");function ny(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Hp(n.buffer),e}const iy=_a("string"),Qr=_a("function"),Vp=_a("number"),Gp=n=>n!==null&&typeof n=="object",ry=n=>n===!0||n===!1,zo=n=>{if(eu(n)!=="object")return!1;const e=Qc(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},sy=Zn("Date"),oy=Zn("File"),ay=Zn("Blob"),ly=Zn("FileList"),cy=n=>Gp(n)&&Qr(n.pipe),uy=n=>{const e="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||Up.call(n)===e||Qr(n.toString)&&n.toString()===e)},fy=Zn("URLSearchParams"),hy=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function va(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Gs(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function nc(){const n={},e=(t,i)=>{zo(n[i])&&zo(t)?n[i]=nc(n[i],t):zo(t)?n[i]=nc({},t):Gs(t)?n[i]=t.slice():n[i]=t};for(let t=0,i=arguments.length;t<i;t++)arguments[t]&&va(arguments[t],e);return n}const dy=(n,e,t,{allOwnKeys:i}={})=>(va(e,(r,s)=>{t&&Qr(r)?n[s]=zp(r,t):n[s]=r},{allOwnKeys:i}),n),py=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),my=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},gy=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Qc(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},_y=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},vy=n=>{if(!n)return null;if(Gs(n))return n;let e=n.length;if(!Vp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},yy=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Qc(Uint8Array)),xy=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},by=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},wy=Zn("HTMLFormElement"),Sy=n=>n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),_f=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),My=Zn("RegExp"),Wp=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};va(t,(r,s)=>{e(r,s,n)!==!1&&(i[s]=r)}),Object.defineProperties(n,i)},Ey=n=>{Wp(n,(e,t)=>{const i=n[t];if(!!Qr(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+t+"'")})}})},Ty=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Gs(n)?i(n):i(String(n).split(e)),t},Ay=()=>{},Cy=(n,e)=>(n=+n,Number.isFinite(n)?n:e),_e={isArray:Gs,isArrayBuffer:Hp,isBuffer:ty,isFormData:uy,isArrayBufferView:ny,isString:iy,isNumber:Vp,isBoolean:ry,isObject:Gp,isPlainObject:zo,isUndefined:tc,isDate:sy,isFile:oy,isBlob:ay,isRegExp:My,isFunction:Qr,isStream:cy,isURLSearchParams:fy,isTypedArray:yy,isFileList:ly,forEach:va,merge:nc,extend:dy,trim:hy,stripBOM:py,inherits:my,toFlatObject:gy,kindOf:eu,kindOfTest:Zn,endsWith:_y,toArray:vy,forEachEntry:xy,matchAll:by,isHTMLForm:wy,hasOwnProperty:_f,hasOwnProp:_f,reduceDescriptors:Wp,freezeMethods:Ey,toObjectSet:Ty,toCamelCase:Sy,noop:Ay,toFiniteNumber:Cy};function Xe(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}_e.inherits(Xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jp=Xe.prototype,$p={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{$p[n]={value:n}});Object.defineProperties(Xe,$p);Object.defineProperty(jp,"isAxiosError",{value:!0});Xe.from=(n,e,t,i,r,s)=>{const o=Object.create(jp);return _e.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Xe.call(o,n.message,e,t,i,r),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Py(n){var e=n.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Ly=typeof self=="object"?self.FormData:window.FormData;function ic(n){return _e.isPlainObject(n)||_e.isArray(n)}function qp(n){return _e.endsWith(n,"[]")?n.slice(0,-2):n}function vf(n,e,t){return n?n.concat(e).map(function(r,s){return r=qp(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function Ry(n){return _e.isArray(n)&&!n.some(ic)}const Dy=_e.toFlatObject(_e,{},null,function(e){return/^is[A-Z]/.test(e)});function Oy(n){return n&&_e.isFunction(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator]}function ya(n,e,t){if(!_e.isObject(n))throw new TypeError("target must be an object");e=e||new(Ly||FormData),t=_e.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,p){return!_e.isUndefined(p[m])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&Oy(e);if(!_e.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(_e.isDate(g))return g.toISOString();if(!l&&_e.isBlob(g))throw new Xe("Blob is not supported. Use a Buffer instead.");return _e.isArrayBuffer(g)||_e.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,m,p){let _=g;if(g&&!p&&typeof g=="object"){if(_e.endsWith(m,"{}"))m=i?m:m.slice(0,-2),g=JSON.stringify(g);else if(_e.isArray(g)&&Ry(g)||_e.isFileList(g)||_e.endsWith(m,"[]")&&(_=_e.toArray(g)))return m=qp(m),_.forEach(function(w,b){!(_e.isUndefined(w)||w===null)&&e.append(o===!0?vf([m],b,s):o===null?m:m+"[]",c(w))}),!1}return ic(g)?!0:(e.append(vf(p,m,s),c(g)),!1)}const f=[],h=Object.assign(Dy,{defaultVisitor:u,convertValue:c,isVisitable:ic});function d(g,m){if(!_e.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(g),_e.forEach(g,function(_,v){(!(_e.isUndefined(_)||_===null)&&r.call(e,_,_e.isString(v)?v.trim():v,m,h))===!0&&d(_,m?m.concat(v):[v])}),f.pop()}}if(!_e.isObject(n))throw new TypeError("data must be an object");return d(n),e}function yf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function tu(n,e){this._pairs=[],n&&ya(n,this,e)}const Xp=tu.prototype;Xp.append=function(e,t){this._pairs.push([e,t])};Xp.toString=function(e){const t=e?function(i){return e.call(this,i,yf)}:yf;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Iy(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yp(n,e,t){if(!e)return n;const i=t&&t.encode||Iy,r=t&&t.serialize;let s;if(r?s=r(e,t):s=_e.isURLSearchParams(e)?e.toString():new tu(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class xf{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_e.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Kp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ny=typeof URLSearchParams<"u"?URLSearchParams:tu,Fy=FormData,ky=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jn={isBrowser:!0,classes:{URLSearchParams:Ny,FormData:Fy,Blob},isStandardBrowserEnv:ky,protocols:["http","https","file","blob","url","data"]};function By(n,e){return ya(n,new jn.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,s){return jn.isNode&&_e.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function zy(n){return _e.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Uy(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function Zp(n){function e(t,i,r,s){let o=t[s++];const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&_e.isArray(r)?r.length:o,l?(_e.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!_e.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&_e.isArray(r[o])&&(r[o]=Uy(r[o])),!a)}if(_e.isFormData(n)&&_e.isFunction(n.entries)){const t={};return _e.forEachEntry(n,(i,r)=>{e(zy(i),r,t,0)}),t}return null}function Hy(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Xe("Request failed with status code "+t.status,[Xe.ERR_BAD_REQUEST,Xe.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Vy=jn.isStandardBrowserEnv?function(){return{write:function(t,i,r,s,o,a){const l=[];l.push(t+"="+encodeURIComponent(i)),_e.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),_e.isString(s)&&l.push("path="+s),_e.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Gy(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Wy(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function Jp(n,e){return n&&!Gy(e)?Wy(n,e):e}const jy=jn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(o){const a=_e.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Ws(n,e,t){Xe.call(this,n==null?"canceled":n,Xe.ERR_CANCELED,e,t),this.name="CanceledError"}_e.inherits(Ws,Xe,{__CANCEL__:!0});function $y(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}const qy=_e.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Xy=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&qy[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},bf=Symbol("internals"),Qp=Symbol("defaults");function vs(n){return n&&String(n).trim().toLowerCase()}function Uo(n){return n===!1||n==null?n:_e.isArray(n)?n.map(Uo):String(n)}function Yy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}function wf(n,e,t,i){if(_e.isFunction(i))return i.call(this,e,t);if(!!_e.isString(e)){if(_e.isString(i))return e.indexOf(i)!==-1;if(_e.isRegExp(i))return i.test(e)}}function Ky(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Zy(n,e){const t=_e.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}function rs(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}function sn(n,e){n&&this.set(n),this[Qp]=e||null}Object.assign(sn.prototype,{set:function(n,e,t){const i=this;function r(s,o,a){const l=vs(o);if(!l)throw new Error("header name must be a non-empty string");const c=rs(i,l);c&&a!==!0&&(i[c]===!1||a===!1)||(i[c||o]=Uo(s))}return _e.isPlainObject(n)?_e.forEach(n,(s,o)=>{r(s,o,e)}):r(e,n,t),this},get:function(n,e){if(n=vs(n),!n)return;const t=rs(this,n);if(t){const i=this[t];if(!e)return i;if(e===!0)return Yy(i);if(_e.isFunction(e))return e.call(this,i,t);if(_e.isRegExp(e))return e.exec(i);throw new TypeError("parser must be boolean|regexp|function")}},has:function(n,e){if(n=vs(n),n){const t=rs(this,n);return!!(t&&(!e||wf(this,this[t],t,e)))}return!1},delete:function(n,e){const t=this;let i=!1;function r(s){if(s=vs(s),s){const o=rs(t,s);o&&(!e||wf(t,t[o],o,e))&&(delete t[o],i=!0)}}return _e.isArray(n)?n.forEach(r):r(n),i},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(n){const e=this,t={};return _e.forEach(this,(i,r)=>{const s=rs(t,r);if(s){e[s]=Uo(i),delete e[r];return}const o=n?Ky(r):String(r).trim();o!==r&&delete e[r],e[o]=Uo(i),t[o]=!0}),this},toJSON:function(n){const e=Object.create(null);return _e.forEach(Object.assign({},this[Qp]||null,this),(t,i)=>{t==null||t===!1||(e[i]=n&&_e.isArray(t)?t.join(", "):t)}),e}});Object.assign(sn,{from:function(n){return _e.isString(n)?new this(Xy(n)):n instanceof this?n:new this(n)},accessor:function(n){const t=(this[bf]=this[bf]={accessors:{}}).accessors,i=this.prototype;function r(s){const o=vs(s);t[o]||(Zy(i,s),t[o]=!0)}return _e.isArray(n)?n.forEach(r):r(n),this}});sn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);_e.freezeMethods(sn.prototype);_e.freezeMethods(sn);function Jy(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),t[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<e)return;const d=u&&c-u;return d?Math.round(h*1e3/d):void 0}}function Sf(n,e){let t=0;const i=Jy(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-t,l=i(a),c=s<=o;t=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0};u[e?"download":"upload"]=!0,n(u)}}function Mf(n){return new Promise(function(t,i){let r=n.data;const s=sn.from(n.headers).normalize(),o=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}_e.isFormData(r)&&jn.isStandardBrowserEnv&&s.setContentType(!1);let c=new XMLHttpRequest;if(n.auth){const d=n.auth.username||"",g=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(d+":"+g))}const u=Jp(n.baseURL,n.url);c.open(n.method.toUpperCase(),Yp(u,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function f(){if(!c)return;const d=sn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:n,request:c};Hy(function(_){t(_),l()},function(_){i(_),l()},m),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){!c||(i(new Xe("Request aborted",Xe.ECONNABORTED,n,c)),c=null)},c.onerror=function(){i(new Xe("Network Error",Xe.ERR_NETWORK,n,c)),c=null},c.ontimeout=function(){let g=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const m=n.transitional||Kp;n.timeoutErrorMessage&&(g=n.timeoutErrorMessage),i(new Xe(g,m.clarifyTimeoutError?Xe.ETIMEDOUT:Xe.ECONNABORTED,n,c)),c=null},jn.isStandardBrowserEnv){const d=(n.withCredentials||jy(u))&&n.xsrfCookieName&&Vy.read(n.xsrfCookieName);d&&s.set(n.xsrfHeaderName,d)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&_e.forEach(s.toJSON(),function(g,m){c.setRequestHeader(m,g)}),_e.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),o&&o!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",Sf(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Sf(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=d=>{!c||(i(!d||d.type?new Ws(null,n,c):d),c.abort(),c=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const h=$y(u);if(h&&jn.protocols.indexOf(h)===-1){i(new Xe("Unsupported protocol "+h+":",Xe.ERR_BAD_REQUEST,n));return}c.send(r||null)})}const Ef={http:Mf,xhr:Mf},Tf={getAdapter:n=>{if(_e.isString(n)){const e=Ef[n];if(!n)throw Error(_e.hasOwnProp(n)?`Adapter '${n}' is not available in the build`:`Can not resolve adapter '${n}'`);return e}if(!_e.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:Ef},Qy={"Content-Type":"application/x-www-form-urlencoded"};function ex(){let n;return typeof XMLHttpRequest<"u"?n=Tf.getAdapter("xhr"):typeof process<"u"&&_e.kindOf(process)==="process"&&(n=Tf.getAdapter("http")),n}function tx(n,e,t){if(_e.isString(n))try{return(e||JSON.parse)(n),_e.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const es={transitional:Kp,adapter:ex(),transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=_e.isObject(e);if(s&&_e.isHTMLForm(e)&&(e=new FormData(e)),_e.isFormData(e))return r&&r?JSON.stringify(Zp(e)):e;if(_e.isArrayBuffer(e)||_e.isBuffer(e)||_e.isStream(e)||_e.isFile(e)||_e.isBlob(e))return e;if(_e.isArrayBufferView(e))return e.buffer;if(_e.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return By(e,this.formSerializer).toString();if((a=_e.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ya(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),tx(e)):e}],transformResponse:[function(e){const t=this.transitional||es.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&_e.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Xe.from(a,Xe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jn.classes.FormData,Blob:jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_e.forEach(["delete","get","head"],function(e){es.headers[e]={}});_e.forEach(["post","put","patch"],function(e){es.headers[e]=_e.merge(Qy)});function Ga(n,e){const t=this||es,i=e||t,r=sn.from(i.headers);let s=i.data;return _e.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function em(n){return!!(n&&n.__CANCEL__)}function Wa(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ws}function Af(n){return Wa(n),n.headers=sn.from(n.headers),n.data=Ga.call(n,n.transformRequest),(n.adapter||es.adapter)(n).then(function(i){return Wa(n),i.data=Ga.call(n,n.transformResponse,i),i.headers=sn.from(i.headers),i},function(i){return em(i)||(Wa(n),i&&i.response&&(i.response.data=Ga.call(n,n.transformResponse,i.response),i.response.headers=sn.from(i.response.headers))),Promise.reject(i)})}function Fs(n,e){e=e||{};const t={};function i(c,u){return _e.isPlainObject(c)&&_e.isPlainObject(u)?_e.merge(c,u):_e.isPlainObject(u)?_e.merge({},u):_e.isArray(u)?u.slice():u}function r(c){if(_e.isUndefined(e[c])){if(!_e.isUndefined(n[c]))return i(void 0,n[c])}else return i(n[c],e[c])}function s(c){if(!_e.isUndefined(e[c]))return i(void 0,e[c])}function o(c){if(_e.isUndefined(e[c])){if(!_e.isUndefined(n[c]))return i(void 0,n[c])}else return i(void 0,e[c])}function a(c){if(c in e)return i(n[c],e[c]);if(c in n)return i(void 0,n[c])}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return _e.forEach(Object.keys(n).concat(Object.keys(e)),function(u){const f=l[u]||r,h=f(u);_e.isUndefined(h)&&f!==a||(t[u]=h)}),t}const tm="1.1.3",nu={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{nu[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Cf={};nu.transitional=function(e,t,i){function r(s,o){return"[Axios v"+tm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Xe(r(o," has been removed"+(t?" in "+t:"")),Xe.ERR_DEPRECATED);return t&&!Cf[o]&&(Cf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function nx(n,e,t){if(typeof n!="object")throw new Xe("options must be an object",Xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new Xe("option "+s+" must be "+l,Xe.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Xe("Unknown option "+s,Xe.ERR_BAD_OPTION)}}const rc={assertOptions:nx,validators:nu},ii=rc.validators;class Yi{constructor(e){this.defaults=e,this.interceptors={request:new xf,response:new xf}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Fs(this.defaults,t);const{transitional:i,paramsSerializer:r}=t;i!==void 0&&rc.assertOptions(i,{silentJSONParsing:ii.transitional(ii.boolean),forcedJSONParsing:ii.transitional(ii.boolean),clarifyTimeoutError:ii.transitional(ii.boolean)},!1),r!==void 0&&rc.assertOptions(r,{encode:ii.function,serialize:ii.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const s=t.headers&&_e.merge(t.headers.common,t.headers[t.method]);s&&_e.forEach(["delete","get","head","post","put","patch","common"],function(g){delete t.headers[g]}),t.headers=new sn(t.headers,s);const o=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(a=a&&g.synchronous,o.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let c,u=0,f;if(!a){const d=[Af.bind(this),void 0];for(d.unshift.apply(d,o),d.push.apply(d,l),f=d.length,c=Promise.resolve(t);u<f;)c=c.then(d[u++],d[u++]);return c}f=o.length;let h=t;for(u=0;u<f;){const d=o[u++],g=o[u++];try{h=d(h)}catch(m){g.call(this,m);break}}try{c=Af.call(this,h)}catch(d){return Promise.reject(d)}for(u=0,f=l.length;u<f;)c=c.then(l[u++],l[u++]);return c}getUri(e){e=Fs(this.defaults,e);const t=Jp(e.baseURL,e.url);return Yp(t,e.params,e.paramsSerializer)}}_e.forEach(["delete","get","head","options"],function(e){Yi.prototype[e]=function(t,i){return this.request(Fs(i||{},{method:e,url:t,data:(i||{}).data}))}});_e.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Fs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Yi.prototype[e]=t(),Yi.prototype[e+"Form"]=t(!0)});class iu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ws(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new iu(function(r){e=r}),cancel:e}}}function ix(n){return function(t){return n.apply(null,t)}}function rx(n){return _e.isObject(n)&&n.isAxiosError===!0}function nm(n){const e=new Yi(n),t=zp(Yi.prototype.request,e);return _e.extend(t,Yi.prototype,e,{allOwnKeys:!0}),_e.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return nm(Fs(n,r))},t}const Lt=nm(es);Lt.Axios=Yi;Lt.CanceledError=Ws;Lt.CancelToken=iu;Lt.isCancel=em;Lt.VERSION=tm;Lt.toFormData=ya;Lt.AxiosError=Xe;Lt.Cancel=Lt.CanceledError;Lt.all=function(e){return Promise.all(e)};Lt.spread=ix;Lt.isAxiosError=rx;Lt.formToJSON=n=>Zp(_e.isHTMLForm(n)?new FormData(n):n);var im={exports:{}};function sx(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ja={exports:{}};const ox={},ax=Object.freeze(Object.defineProperty({__proto__:null,default:ox},Symbol.toStringTag,{value:"Module"})),lx=Py(ax);var Pf;function rm(){return Pf||(Pf=1,function(n,e){(function(t,i){n.exports=i()})(Lr,function(){var t=t||function(i,r){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof Lr<"u"&&Lr.crypto&&(s=Lr.crypto),!s&&typeof sx=="function")try{s=lx}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function v(){}return function(w){var b;return v.prototype=w,b=new v,v.prototype=null,b}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(v){var w=a(this);return v&&w.mixIn(v),(!w.hasOwnProperty("init")||this.init===w.init)&&(w.init=function(){w.$super.init.apply(this,arguments)}),w.init.prototype=w,w.$super=this,w},create:function(){var v=this.extend();return v.init.apply(v,arguments),v},init:function(){},mixIn:function(v){for(var w in v)v.hasOwnProperty(w)&&(this[w]=v[w]);v.hasOwnProperty("toString")&&(this.toString=v.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=c.WordArray=u.extend({init:function(v,w){v=this.words=v||[],w!=r?this.sigBytes=w:this.sigBytes=v.length*4},toString:function(v){return(v||d).stringify(this)},concat:function(v){var w=this.words,b=v.words,x=this.sigBytes,T=v.sigBytes;if(this.clamp(),x%4)for(var D=0;D<T;D++){var S=b[D>>>2]>>>24-D%4*8&255;w[x+D>>>2]|=S<<24-(x+D)%4*8}else for(var C=0;C<T;C+=4)w[x+C>>>2]=b[C>>>2];return this.sigBytes+=T,this},clamp:function(){var v=this.words,w=this.sigBytes;v[w>>>2]&=4294967295<<32-w%4*8,v.length=i.ceil(w/4)},clone:function(){var v=u.clone.call(this);return v.words=this.words.slice(0),v},random:function(v){for(var w=[],b=0;b<v;b+=4)w.push(o());return new f.init(w,v)}}),h=l.enc={},d=h.Hex={stringify:function(v){for(var w=v.words,b=v.sigBytes,x=[],T=0;T<b;T++){var D=w[T>>>2]>>>24-T%4*8&255;x.push((D>>>4).toString(16)),x.push((D&15).toString(16))}return x.join("")},parse:function(v){for(var w=v.length,b=[],x=0;x<w;x+=2)b[x>>>3]|=parseInt(v.substr(x,2),16)<<24-x%8*4;return new f.init(b,w/2)}},g=h.Latin1={stringify:function(v){for(var w=v.words,b=v.sigBytes,x=[],T=0;T<b;T++){var D=w[T>>>2]>>>24-T%4*8&255;x.push(String.fromCharCode(D))}return x.join("")},parse:function(v){for(var w=v.length,b=[],x=0;x<w;x++)b[x>>>2]|=(v.charCodeAt(x)&255)<<24-x%4*8;return new f.init(b,w)}},m=h.Utf8={stringify:function(v){try{return decodeURIComponent(escape(g.stringify(v)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(v){return g.parse(unescape(encodeURIComponent(v)))}},p=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(v){typeof v=="string"&&(v=m.parse(v)),this._data.concat(v),this._nDataBytes+=v.sigBytes},_process:function(v){var w,b=this._data,x=b.words,T=b.sigBytes,D=this.blockSize,S=D*4,C=T/S;v?C=i.ceil(C):C=i.max((C|0)-this._minBufferSize,0);var I=C*D,j=i.min(I*4,T);if(I){for(var te=0;te<I;te+=D)this._doProcessBlock(x,te);w=x.splice(0,I),b.sigBytes-=j}return new f.init(w,j)},clone:function(){var v=u.clone.call(this);return v._data=this._data.clone(),v},_minBufferSize:0});c.Hasher=p.extend({cfg:u.extend(),init:function(v){this.cfg=this.cfg.extend(v),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(v){return this._append(v),this._process(),this},finalize:function(v){v&&this._append(v);var w=this._doFinalize();return w},blockSize:16,_createHelper:function(v){return function(w,b){return new v.init(b).finalize(w)}},_createHmacHelper:function(v){return function(w,b){return new _.HMAC.init(v,b).finalize(w)}}});var _=l.algo={};return l}(Math);return t})}(ja)),ja.exports}(function(n,e){(function(t,i){n.exports=i(rm())})(Lr,function(t){return function(){var i=t,r=i.lib,s=r.WordArray,o=r.Hasher,a=i.algo,l=[],c=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var h=this._hash.words,d=h[0],g=h[1],m=h[2],p=h[3],_=h[4],v=0;v<80;v++){if(v<16)l[v]=u[f+v]|0;else{var w=l[v-3]^l[v-8]^l[v-14]^l[v-16];l[v]=w<<1|w>>>31}var b=(d<<5|d>>>27)+_+l[v];v<20?b+=(g&m|~g&p)+1518500249:v<40?b+=(g^m^p)+1859775393:v<60?b+=(g&m|g&p|m&p)-1894007588:b+=(g^m^p)-899497514,_=p,p=m,m=g<<30|g>>>2,g=d,d=b}h[0]=h[0]+d|0,h[1]=h[1]+g|0,h[2]=h[2]+m|0,h[3]=h[3]+p|0,h[4]=h[4]+_|0},_doFinalize:function(){var u=this._data,f=u.words,h=this._nDataBytes*8,d=u.sigBytes*8;return f[d>>>5]|=128<<24-d%32,f[(d+64>>>9<<4)+14]=Math.floor(h/4294967296),f[(d+64>>>9<<4)+15]=h,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});i.SHA1=o._createHelper(c),i.HmacSHA1=o._createHmacHelper(c)}(),t.SHA1})})(im);const cx=im.exports;var sm={exports:{}};(function(n,e){(function(t,i){n.exports=i(rm())})(Lr,function(t){return function(){var i=t,r=i.lib,s=r.WordArray,o=i.enc;o.Base64={stringify:function(l){var c=l.words,u=l.sigBytes,f=this._map;l.clamp();for(var h=[],d=0;d<u;d+=3)for(var g=c[d>>>2]>>>24-d%4*8&255,m=c[d+1>>>2]>>>24-(d+1)%4*8&255,p=c[d+2>>>2]>>>24-(d+2)%4*8&255,_=g<<16|m<<8|p,v=0;v<4&&d+v*.75<u;v++)h.push(f.charAt(_>>>6*(3-v)&63));var w=f.charAt(64);if(w)for(;h.length%4;)h.push(w);return h.join("")},parse:function(l){var c=l.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<u.length;h++)f[u.charCodeAt(h)]=h}var d=u.charAt(64);if(d){var g=l.indexOf(d);g!==-1&&(c=g)}return a(l,c,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(l,c,u){for(var f=[],h=0,d=0;d<c;d++)if(d%4){var g=u[l.charCodeAt(d-1)]<<d%4*2,m=u[l.charCodeAt(d)]>>>6-d%4*2,p=g|m;f[h>>>2]|=p<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64})})(sm);const ux=sm.exports,ru="Z2hwX0tWdWlqRkdaNjMwN2dkTXptbUhVNWp3cGFJS05WcjFhYlRYUA==";async function fx(n,e,t,i){let r=atob(ru),s={nodes:px(n),displayName:e,userId:t,graphType:i,date:new Date().toISOString()},o=ux.stringify(cx(`${t}${i}`)).slice(0,7).replace("/","A").toUpperCase(),a=await hx(o);return console.log(a),await Lt({method:"PUT",url:`https://api.github.com/repos/artistconstellations-db/database/contents/${o}`,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${r}`},data:{message:`Adding ${i} for ${e}`,sha:a,content:btoa(btoa(JSON.stringify(s)))}}),o}async function hx(n){let e=atob(ru);return await Lt({method:"GET",url:`https://api.github.com/repos/artistconstellations-db/database/contents/${n}`,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e}`}}).catch(t=>{if(t.response.status==404)return null}).then(t=>t?t.status==404?null:t.data.sha:null)}async function dx(n){let e=atob(ru),t=await Lt({response:"GET",url:`https://api.github.com/repos/artistconstellations-db/database/contents/${n}`,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e}`},responseType:"text"});return JSON.parse(atob(atob(JSON.parse(t.data).content)))}function px(n){let e=[];return n.forEach(t=>{e.push({name:t.name,id:t.id,genres:t.genres,img:t.img,popularity:t.popularity})}),e}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const su="145",En={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mx=0,Lf=1,gx=2,om=1,_x=2,ys=3,Vr=0,qt=1,mi=2,yi=0,zr=1,Rf=2,Df=3,Of=4,vx=5,Pr=100,yx=101,xx=102,If=103,Nf=104,bx=200,wx=201,Sx=202,Mx=203,am=204,lm=205,Ex=206,Tx=207,Ax=208,Cx=209,Px=210,Lx=0,Rx=1,Dx=2,sc=3,Ox=4,Ix=5,Nx=6,Fx=7,ou=0,kx=1,Bx=2,$n=0,zx=1,Ux=2,Hx=3,Vx=4,Gx=5,cm=300,Gr=301,Wr=302,oc=303,ac=304,xa=306,lc=1e3,dn=1001,cc=1002,Ut=1003,Ff=1004,kf=1005,$t=1006,Wx=1007,ba=1008,Ji=1009,jx=1010,$x=1011,um=1012,qx=1013,Hi=1014,Vi=1015,ks=1016,Xx=1017,Yx=1018,Ur=1020,Kx=1021,Zx=1022,Pn=1023,Jx=1024,Qx=1025,Ki=1026,jr=1027,eb=1028,tb=1029,nb=1030,ib=1031,rb=1033,$a=33776,qa=33777,Xa=33778,Ya=33779,Bf=35840,zf=35841,Uf=35842,Hf=35843,sb=36196,Vf=37492,Gf=37496,Wf=37808,jf=37809,$f=37810,qf=37811,Xf=37812,Yf=37813,Kf=37814,Zf=37815,Jf=37816,Qf=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,Qi=3e3,ft=3001,ob=3200,ab=3201,fm=0,lb=1,Hn="srgb",Gi="srgb-linear",Ka=7680,cb=519,uc=35044,sh="300 es",fc=1035;class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Za=Math.PI/180,oh=180/Math.PI;function xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function ub(n,e){return(n%e+e)%e}function Ja(n,e,t){return(1-t)*n+t*e}function ah(n){return(n&n-1)===0&&n!==0}function hc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(){nn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],m=r[0],p=r[3],_=r[6],v=r[1],w=r[4],b=r[7],x=r[2],T=r[5],D=r[8];return s[0]=o*m+a*v+l*x,s[3]=o*p+a*w+l*T,s[6]=o*_+a*b+l*D,s[1]=c*m+u*v+f*x,s[4]=c*p+u*w+f*T,s[7]=c*_+u*b+f*D,s[2]=h*m+d*v+g*x,s[5]=h*p+d*w+g*T,s[8]=h*_+d*b+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function hm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ho(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Qa={[Hn]:{[Gi]:Zi},[Gi]:{[Hn]:Ho}},an={legacyMode:!0,get workingColorSpace(){return Gi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Qa[e]&&Qa[e][t]!==void 0){const i=Qa[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},ln={h:0,s:0,l:0},io={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ro(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Gi){return this.r=e,this.g=t,this.b=i,an.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Gi){if(e=ub(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=el(o,s,e+1/3),this.g=el(o,s,e),this.b=el(o,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,an.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,an.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,an.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,an.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Hn){const i=dm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return an.fromWorkingColorSpace(ro(this,_t),e),At(_t.r*255,0,255)<<16^At(_t.g*255,0,255)<<8^At(_t.b*255,0,255)<<0}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gi){an.fromWorkingColorSpace(ro(this,_t),t);const i=_t.r,r=_t.g,s=_t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gi){return an.fromWorkingColorSpace(ro(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Hn){return an.fromWorkingColorSpace(ro(this,_t),e),e!==Hn?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=i,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(io);const i=Ja(ln.h,io.h,t),r=Ja(ln.s,io.s,t),s=Ja(ln.l,io.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ke.NAMES=dm;let cr;class pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=Bs("canvas")),cr.width=e.width,cr.height=e.height;const i=cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mm{constructor(e=null){this.isSource=!0,this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tl(r[o].image)):s.push(tl(r[o]))}else s=tl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fb=0;class Yt extends yn{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=dn,r=dn,s=$t,o=ba,a=Pn,l=Ji,c=1,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=xi(),this.name="",this.source=new mm(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=cm;class wt{constructor(e=0,t=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(d+1)/2,x=(_+1)/2,T=(u+h)/4,D=(f+m)/4,S=(g+p)/4;return w>b&&w>x?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=D/i):b>x?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=T/r,s=S/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=D/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-m)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends yn{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$t,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gm extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hb extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==d||u!==g){let p=1-a;const _=l*h+c*d+u*g+f*m,v=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const x=Math.sqrt(w),T=Math.atan2(x,_*v);p=Math.sin(p*T)/x,a=Math.sin(a*T)/x}const b=a*v;if(l=l*p+h*b,c=c*p+d*b,u=u*p+g*b,f=f*p+m*b,p===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new z,lh=new vn;class nr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pi)}else i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox),il.applyMatrix4(e.matrixWorld),this.union(il);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),so.subVectors(this.max,ss),ur.subVectors(e.a,ss),fr.subVectors(e.b,ss),hr.subVectors(e.c,ss),ri.subVectors(fr,ur),si.subVectors(hr,fr),Li.subVectors(ur,hr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Li.z,Li.y,ri.z,0,-ri.x,si.z,0,-si.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-si.y,si.x,0,-Li.y,Li.x,0];return!rl(t,ur,fr,hr,so)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ur,fr,hr,so))?!1:(oo.crossVectors(ri,si),t=[oo.x,oo.y,oo.z],rl(t,ur,fr,hr,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new z,new z,new z,new z,new z,new z,new z,new z],Pi=new z,il=new nr,ur=new z,fr=new z,hr=new z,ri=new z,si=new z,Li=new z,ss=new z,so=new z,oo=new z,Ri=new z;function rl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ri.fromArray(n,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const db=new nr,ch=new z,ao=new z,sl=new z;class wa{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):db.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const t=sl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(sl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?ao.set(0,0,1).multiplyScalar(e.radius):ao.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ch.copy(e.center).add(ao)),this.expandByPoint(ch.copy(e.center).sub(ao)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new z,ol=new z,lo=new z,oi=new z,al=new z,co=new z,ll=new z;class au{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.direction).multiplyScalar(t).add(this.origin),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ol.copy(e).add(t).multiplyScalar(.5),lo.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ol);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lo),a=oi.dot(this.direction),l=-oi.dot(lo),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(lo).multiplyScalar(h).add(ol),d}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){al.subVectors(t,e),co.subVectors(i,e),ll.crossVectors(al,co);let o=this.direction.dot(ll),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(co.crossVectors(oi,co));if(l<0)return null;const c=a*this.direction.dot(al.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(ll);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pb,e,mb)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ai.crossVectors(i,Gt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ai.crossVectors(i,Gt)),ai.normalize(),uo.crossVectors(Gt,ai),r[0]=ai.x,r[4]=uo.x,r[8]=Gt.x,r[1]=ai.y,r[5]=uo.y,r[9]=Gt.y,r[2]=ai.z,r[6]=uo.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],m=i[6],p=i[10],_=i[14],v=i[3],w=i[7],b=i[11],x=i[15],T=r[0],D=r[4],S=r[8],C=r[12],I=r[1],j=r[5],te=r[9],G=r[13],O=r[2],F=r[6],U=r[10],re=r[14],Z=r[3],q=r[7],k=r[11],ee=r[15];return s[0]=o*T+a*I+l*O+c*Z,s[4]=o*D+a*j+l*F+c*q,s[8]=o*S+a*te+l*U+c*k,s[12]=o*C+a*G+l*re+c*ee,s[1]=u*T+f*I+h*O+d*Z,s[5]=u*D+f*j+h*F+d*q,s[9]=u*S+f*te+h*U+d*k,s[13]=u*C+f*G+h*re+d*ee,s[2]=g*T+m*I+p*O+_*Z,s[6]=g*D+m*j+p*F+_*q,s[10]=g*S+m*te+p*U+_*k,s[14]=g*C+m*G+p*re+_*ee,s[3]=v*T+w*I+b*O+x*Z,s[7]=v*D+w*j+b*F+x*q,s[11]=v*S+w*te+b*U+x*k,s[15]=v*C+w*G+b*re+x*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+m*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],v=f*p*c-m*h*c+m*l*d-a*p*d-f*l*_+a*h*_,w=g*h*c-u*p*c-g*l*d+o*p*d+u*l*_-o*h*_,b=u*m*c-g*f*c+g*a*d-o*m*d-u*a*_+o*f*_,x=g*f*l-u*m*l-g*a*h+o*m*h+u*a*p-o*f*p,T=t*v+i*w+r*b+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=v*D,e[1]=(m*h*s-f*p*s-m*r*d+i*p*d+f*r*_-i*h*_)*D,e[2]=(a*p*s-m*l*s+m*r*c-i*p*c-a*r*_+i*l*_)*D,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*D,e[4]=w*D,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*_+t*h*_)*D,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*D,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*D,e[8]=b*D,e[9]=(g*f*s-u*m*s-g*i*d+t*m*d+u*i*_-t*f*_)*D,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*_+t*a*_)*D,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*D,e[12]=x*D,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*p+t*f*p)*D,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*p-t*a*p)*D,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,m=o*u,p=o*f,_=a*f,v=l*c,w=l*u,b=l*f,x=i.x,T=i.y,D=i.z;return r[0]=(1-(m+_))*x,r[1]=(d+b)*x,r[2]=(g-w)*x,r[3]=0,r[4]=(d-b)*T,r[5]=(1-(h+_))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(g+w)*D,r[9]=(p-v)*D,r[10]=(1-(h+m))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=dr.set(r[0],r[1],r[2]).length();const o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const c=1/s,u=1/o,f=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new z,cn=new ot,pb=new z(0,0,0),mb=new z(1,1,1),ai=new z,uo=new z,Gt=new z,uh=new ot,fh=new vn;class js{constructor(e=0,t=0,i=0,r=js.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}js.DefaultOrder="XYZ";js.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class lu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gb=0;const hh=new z,pr=new vn,Fn=new ot,fo=new z,os=new z,_b=new z,vb=new vn,dh=new z(1,0,0),ph=new z(0,1,0),mh=new z(0,0,1),yb={type:"added"},gh={type:"removed"};class St extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DefaultUp.clone();const e=new z,t=new js,i=new vn,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new nn}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=St.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DefaultMatrixWorldAutoUpdate,this.layers=new lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(os,fo,this.up):Fn.lookAt(fo,os,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Fn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(yb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,_b),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DefaultUp=new z(0,1,0);St.DefaultMatrixAutoUpdate=!0;St.DefaultMatrixWorldAutoUpdate=!0;const un=new z,kn=new z,cl=new z,Bn=new z,mr=new z,gr=new z,_h=new z,ul=new z,fl=new z,hl=new z;class Cn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){un.subVectors(r,t),kn.subVectors(i,t),cl.subVectors(e,t);const o=un.dot(un),a=un.dot(kn),l=un.dot(cl),c=kn.dot(kn),u=kn.dot(cl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bn),l.set(0,0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,i,r){return un.subVectors(i,t),kn.subVectors(e,t),un.cross(kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),un.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Cn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;mr.subVectors(r,i),gr.subVectors(s,i),ul.subVectors(e,i);const l=mr.dot(ul),c=gr.dot(ul);if(l<=0&&c<=0)return t.copy(i);fl.subVectors(e,r);const u=mr.dot(fl),f=gr.dot(fl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(mr,o);hl.subVectors(e,s);const d=mr.dot(hl),g=gr.dot(hl);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gr,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return _h.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(_h,a);const _=1/(p+m+h);return o=m*_,a=h*_,t.copy(i).addScaledVector(mr,o).addScaledVector(gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xb=0;class ir extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=zr,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=am,this.blendDst=lm,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cu extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new z,ho=new we;class on{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=uc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _m extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vm extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pt extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bb=0;const Qt=new ot,dl=new St,_r=new z,Wt=new nr,as=new nr,xt=new z;class kt extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hm(e)?vm:_m)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Wt.min,as.min),Wt.expandByPoint(xt),xt.addVectors(Wt.max,as.max),Wt.expandByPoint(xt)):(Wt.expandByPoint(as.min),Wt.expandByPoint(as.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),xt.add(_r)),r=Math.max(r,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new z,u[I]=new z;const f=new z,h=new z,d=new z,g=new we,m=new we,p=new we,_=new z,v=new z;function w(I,j,te){f.fromArray(r,I*3),h.fromArray(r,j*3),d.fromArray(r,te*3),g.fromArray(o,I*2),m.fromArray(o,j*2),p.fromArray(o,te*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const G=1/(m.x*p.y-p.x*m.y);!isFinite(G)||(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(G),v.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(G),c[I].add(_),c[j].add(_),c[te].add(_),u[I].add(v),u[j].add(v),u[te].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,j=b.length;I<j;++I){const te=b[I],G=te.start,O=te.count;for(let F=G,U=G+O;F<U;F+=3)w(i[F+0],i[F+1],i[F+2])}const x=new z,T=new z,D=new z,S=new z;function C(I){D.fromArray(s,I*3),S.copy(D);const j=c[I];x.copy(j),x.sub(D.multiplyScalar(D.dot(j))).normalize(),T.crossVectors(S,j);const G=T.dot(u[I])<0?-1:1;l[I*4]=x.x,l[I*4+1]=x.y,l[I*4+2]=x.z,l[I*4+3]=G}for(let I=0,j=b.length;I<j;++I){const te=b[I],G=te.start,O=te.count;for(let F=G,U=G+O;F<U;F+=3)C(i[F+0]),C(i[F+1]),C(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[d++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new ot,vr=new au,pl=new wa,li=new z,ci=new z,ui=new z,ml=new z,gl=new z,_l=new z,po=new z,mo=new z,go=new z,_o=new we,vo=new we,yo=new we,vl=new z,xo=new z;class mn extends St{constructor(e=new kt,t=new cu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),e.ray.intersectsSphere(pl)===!1)||(vh.copy(s).invert(),vr.copy(e.ray).applyMatrix4(vh),i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,d=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const _=d[m],v=r[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,T=b;x<T;x+=3){const D=a.getX(x),S=a.getX(x+1),C=a.getX(x+2);o=bo(this,v,e,vr,l,c,u,f,h,D,S,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,v=p;_<v;_+=3){const w=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);o=bo(this,r,e,vr,l,c,u,f,h,w,b,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const _=d[m],v=r[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,T=b;x<T;x+=3){const D=x,S=x+1,C=x+2;o=bo(this,v,e,vr,l,c,u,f,h,D,S,C),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,v=p;_<v;_+=3){const w=_,b=_+1,x=_+2;o=bo(this,r,e,vr,l,c,u,f,h,w,b,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function wb(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==mi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function bo(n,e,t,i,r,s,o,a,l,c,u,f){li.fromBufferAttribute(r,c),ci.fromBufferAttribute(r,u),ui.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){po.set(0,0,0),mo.set(0,0,0),go.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=h[g],_=s[g];p!==0&&(ml.fromBufferAttribute(_,c),gl.fromBufferAttribute(_,u),_l.fromBufferAttribute(_,f),o?(po.addScaledVector(ml,p),mo.addScaledVector(gl,p),go.addScaledVector(_l,p)):(po.addScaledVector(ml.sub(li),p),mo.addScaledVector(gl.sub(ci),p),go.addScaledVector(_l.sub(ui),p)))}li.add(po),ci.add(mo),ui.add(go)}n.isSkinnedMesh&&(n.boneTransform(c,li),n.boneTransform(u,ci),n.boneTransform(f,ui));const d=wb(n,e,t,i,li,ci,ui,vl);if(d){a&&(_o.fromBufferAttribute(a,c),vo.fromBufferAttribute(a,u),yo.fromBufferAttribute(a,f),d.uv=Cn.getUV(vl,li,ci,ui,_o,vo,yo,new we)),l&&(_o.fromBufferAttribute(l,c),vo.fromBufferAttribute(l,u),yo.fromBufferAttribute(l,f),d.uv2=Cn.getUV(vl,li,ci,ui,_o,vo,yo,new we));const g={a:c,b:u,c:f,normal:new z,materialIndex:0};Cn.getNormal(li,ci,ui,g.normal),d.face=g}return d}class $s extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function g(m,p,_,v,w,b,x,T,D,S,C){const I=b/D,j=x/S,te=b/2,G=x/2,O=T/2,F=D+1,U=S+1;let re=0,Z=0;const q=new z;for(let k=0;k<U;k++){const ee=k*j-G;for(let Q=0;Q<F;Q++){const ue=Q*I-te;q[m]=ue*v,q[p]=ee*w,q[_]=O,c.push(q.x,q.y,q.z),q[m]=0,q[p]=0,q[_]=T>0?1:-1,u.push(q.x,q.y,q.z),f.push(Q/D),f.push(1-k/S),re+=1}}for(let k=0;k<S;k++)for(let ee=0;ee<D;ee++){const Q=h+ee+F*k,ue=h+ee+F*(k+1),ce=h+(ee+1)+F*(k+1),se=h+(ee+1)+F*k;l.push(Q,ue,se),l.push(ue,ce,se),Z+=6}a.addGroup(d,Z,C),d+=Z,h+=re}}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=$r(n[t]);for(const r in i)e[r]=i[r]}return e}function Sb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const ym={clone:$r,merge:Tt};var Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=Sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xm extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends xm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=90,xr=1;class Tb extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new en(yr,xr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(1,0,0)),this.add(r);const s=new en(yr,xr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new en(yr,xr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new en(yr,xr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new en(yr,xr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new en(yr,xr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class bm extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ab extends Si{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $s(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:$r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:yi});s.uniforms.tEquirect.value=t;const o=new mn(r,s),a=t.minFilter;return t.minFilter===ba&&(t.minFilter=$t),new Tb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const yl=new z,Cb=new z,Pb=new nn;class pi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yl.subVectors(i,t).cross(Cb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pb.getNormalMatrix(e),r=this.coplanarPoint(yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new wa,wo=new z;class uu{constructor(e=new pi,t=new pi,i=new pi,r=new pi,s=new pi,o=new pi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],m=i[11],p=i[12],_=i[13],v=i[14],w=i[15];return t[0].setComponents(a-r,f-l,m-h,w-p).normalize(),t[1].setComponents(a+r,f+l,m+h,w+p).normalize(),t[2].setComponents(a+s,f+c,m+d,w+_).normalize(),t[3].setComponents(a-s,f-c,m-d,w-_).normalize(),t[4].setComponents(a-o,f-u,m-g,w-v).normalize(),t[5].setComponents(a+o,f+u,m+g,w+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Lb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class fu extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const v=_*h-o;for(let w=0;w<c;w++){const b=w*f-s;g.push(b,-v,0),m.push(0,0,1),p.push(w/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const w=v+c*_,b=v+c*(_+1),x=v+1+c*(_+1),T=v+1+c*_;d.push(w,b,T),d.push(b,x,T)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(p,2))}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb="vec3 transformed = vec3( position );",Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iw="gl_FragColor = linearToOutputTexel( gl_FragColor );",rw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ww=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ew=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Tw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Aw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ow=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u1=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,f1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,w1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,S1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,M1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,E1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,T1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,A1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,O1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,F1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:Rb,alphamap_pars_fragment:Db,alphatest_fragment:Ob,alphatest_pars_fragment:Ib,aomap_fragment:Nb,aomap_pars_fragment:Fb,begin_vertex:kb,beginnormal_vertex:Bb,bsdfs:zb,iridescence_fragment:Ub,bumpmap_pars_fragment:Hb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:Gb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:jb,color_fragment:$b,color_pars_fragment:qb,color_pars_vertex:Xb,color_vertex:Yb,common:Kb,cube_uv_reflection_fragment:Zb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:Qb,displacementmap_vertex:ew,emissivemap_fragment:tw,emissivemap_pars_fragment:nw,encodings_fragment:iw,encodings_pars_fragment:rw,envmap_fragment:sw,envmap_common_pars_fragment:ow,envmap_pars_fragment:aw,envmap_pars_vertex:lw,envmap_physical_pars_fragment:xw,envmap_vertex:cw,fog_vertex:uw,fog_pars_vertex:fw,fog_fragment:hw,fog_pars_fragment:dw,gradientmap_pars_fragment:pw,lightmap_fragment:mw,lightmap_pars_fragment:gw,lights_lambert_fragment:_w,lights_lambert_pars_fragment:vw,lights_pars_begin:yw,lights_toon_fragment:bw,lights_toon_pars_fragment:ww,lights_phong_fragment:Sw,lights_phong_pars_fragment:Mw,lights_physical_fragment:Ew,lights_physical_pars_fragment:Tw,lights_fragment_begin:Aw,lights_fragment_maps:Cw,lights_fragment_end:Pw,logdepthbuf_fragment:Lw,logdepthbuf_pars_fragment:Rw,logdepthbuf_pars_vertex:Dw,logdepthbuf_vertex:Ow,map_fragment:Iw,map_pars_fragment:Nw,map_particle_fragment:Fw,map_particle_pars_fragment:kw,metalnessmap_fragment:Bw,metalnessmap_pars_fragment:zw,morphcolor_vertex:Uw,morphnormal_vertex:Hw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Gw,normal_fragment_begin:Ww,normal_fragment_maps:jw,normal_pars_fragment:$w,normal_pars_vertex:qw,normal_vertex:Xw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:Kw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:Qw,output_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:_1,tonemapping_fragment:v1,tonemapping_pars_fragment:y1,transmission_fragment:x1,transmission_pars_fragment:b1,uv_pars_fragment:w1,uv_pars_vertex:S1,uv_vertex:M1,uv2_pars_fragment:E1,uv2_pars_vertex:T1,uv2_vertex:A1,worldpos_vertex:C1,background_vert:P1,background_frag:L1,cube_vert:R1,cube_frag:D1,depth_vert:O1,depth_frag:I1,distanceRGBA_vert:N1,distanceRGBA_frag:F1,equirect_vert:k1,equirect_frag:B1,linedashed_vert:z1,linedashed_frag:U1,meshbasic_vert:H1,meshbasic_frag:V1,meshlambert_vert:G1,meshlambert_frag:W1,meshmatcap_vert:j1,meshmatcap_frag:$1,meshnormal_vert:q1,meshnormal_frag:X1,meshphong_vert:Y1,meshphong_frag:K1,meshphysical_vert:Z1,meshphysical_frag:J1,meshtoon_vert:Q1,meshtoon_frag:eS,points_vert:tS,points_frag:nS,shadow_vert:iS,shadow_frag:rS,sprite_vert:sS,sprite_frag:oS},Se={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nn},uv2Transform:{value:new nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}}},Tn={basic:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Tt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Tt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Tt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Tt([Se.points,Se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Tt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Tt([Se.common,Se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Tt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Tt([Se.sprite,Se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new nn},t2D:{value:null}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},cube:{uniforms:Tt([Se.envmap,{opacity:{value:1}}]),vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Tt([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Tt([Se.lights,Se.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Tn.physical={uniforms:Tt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};function aS(n,e,t,i,r,s){const o=new Ke(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function d(m,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const w=n.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xa)?(c===void 0&&(c=new mn(new $s(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:$r(Tn.cube.uniforms),vertexShader:Tn.cube.vertexShader,fragmentShader:Tn.cube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new mn(new fu(2,2),new Yn({name:"BackgroundMaterial",uniforms:$r(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function lS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(O,F,U,re,Z){let q=!1;if(o){const k=m(re,U,F);c!==k&&(c=k,d(c.object)),q=_(O,re,U,Z),q&&v(O,re,U,Z)}else{const k=F.wireframe===!0;(c.geometry!==re.id||c.program!==U.id||c.wireframe!==k)&&(c.geometry=re.id,c.program=U.id,c.wireframe=k,q=!0)}Z!==null&&t.update(Z,34963),(q||u)&&(u=!1,S(O,F,U,re),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,F,U){const re=U.wireframe===!0;let Z=a[O.id];Z===void 0&&(Z={},a[O.id]=Z);let q=Z[F.id];q===void 0&&(q={},Z[F.id]=q);let k=q[re];return k===void 0&&(k=p(h()),q[re]=k),k}function p(O){const F=[],U=[],re=[];for(let Z=0;Z<r;Z++)F[Z]=0,U[Z]=0,re[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:re,object:O,attributes:{},index:null}}function _(O,F,U,re){const Z=c.attributes,q=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const ce=Z[Q];let se=q[Q];if(se===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),ce===void 0||ce.attribute!==se||se&&ce.data!==se.data)return!0;k++}return c.attributesNum!==k||c.index!==re}function v(O,F,U,re){const Z={},q=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let ce=q[Q];ce===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor));const se={};se.attribute=ce,ce&&ce.data&&(se.data=ce.data),Z[Q]=se,k++}c.attributes=Z,c.attributesNum=k,c.index=re}function w(){const O=c.newAttributes;for(let F=0,U=O.length;F<U;F++)O[F]=0}function b(O){x(O,0)}function x(O,F){const U=c.newAttributes,re=c.enabledAttributes,Z=c.attributeDivisors;U[O]=1,re[O]===0&&(n.enableVertexAttribArray(O),re[O]=1),Z[O]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),Z[O]=F)}function T(){const O=c.newAttributes,F=c.enabledAttributes;for(let U=0,re=F.length;U<re;U++)F[U]!==O[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function D(O,F,U,re,Z,q){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(O,F,U,Z,q):n.vertexAttribPointer(O,F,U,re,Z,q)}function S(O,F,U,re){if(i.isWebGL2===!1&&(O.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const Z=re.attributes,q=U.getAttributes(),k=F.defaultAttributeValues;for(const ee in q){const Q=q[ee];if(Q.location>=0){let ue=Z[ee];if(ue===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const ce=ue.normalized,se=ue.itemSize,W=t.get(ue);if(W===void 0)continue;const $=W.buffer,oe=W.type,ve=W.bytesPerElement;if(ue.isInterleavedBufferAttribute){const me=ue.data,Pe=me.stride,L=ue.offset;if(me.isInstancedInterleavedBuffer){for(let y=0;y<Q.locationSize;y++)x(Q.location+y,me.meshPerAttribute);O.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let y=0;y<Q.locationSize;y++)b(Q.location+y);n.bindBuffer(34962,$);for(let y=0;y<Q.locationSize;y++)D(Q.location+y,se/Q.locationSize,oe,ce,Pe*ve,(L+se/Q.locationSize*y)*ve)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)x(Q.location+me,ue.meshPerAttribute);O.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<Q.locationSize;me++)b(Q.location+me);n.bindBuffer(34962,$);for(let me=0;me<Q.locationSize;me++)D(Q.location+me,se/Q.locationSize,oe,ce,se*ve,se/Q.locationSize*me*ve)}}else if(k!==void 0){const ce=k[ee];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Q.location,ce);break;case 3:n.vertexAttrib3fv(Q.location,ce);break;case 4:n.vertexAttrib4fv(Q.location,ce);break;default:n.vertexAttrib1fv(Q.location,ce)}}}}T()}function C(){te();for(const O in a){const F=a[O];for(const U in F){const re=F[U];for(const Z in re)g(re[Z].object),delete re[Z];delete F[U]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const F=a[O.id];for(const U in F){const re=F[U];for(const Z in re)g(re[Z].object),delete re[Z];delete F[U]}delete a[O.id]}function j(O){for(const F in a){const U=a[F];if(U[O.id]===void 0)continue;const re=U[O.id];for(const Z in re)g(re[Z].object),delete re[Z];delete U[O.id]}}function te(){G(),u=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:w,enableAttribute:b,disableUnusedAttributes:T}}function cS(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function uS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),_=n.getParameter(36348),v=n.getParameter(36349),w=h>0,b=o||e.has("OES_texture_float"),x=w&&b,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:T}}function fS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new pi,a=new nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,d,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,w=v*4;let b=_.clippingState||null;l.value=b,b=u(g,h,w,d);for(let x=0;x!==w;++x)b[x]=t[x];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,b=d;w!==m;++w,b+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function hS(n){let e=new WeakMap;function t(o,a){return a===oc?o.mapping=Gr:a===ac&&(o.mapping=Wr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===oc||a===ac)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ab(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sa extends xm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,yh=[.125,.215,.35,.446,.526,.582],ki=20,xl=new Sa,xh=new Ke;let bl=null;const Oi=(1+Math.sqrt(5))/2,wr=1/Oi,bh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Oi,wr),new z(0,Oi,-wr),new z(wr,0,Oi),new z(-wr,0,Oi),new z(Oi,wr,0),new z(-Oi,wr,0)];class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){bl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl),e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ks,format:Pn,encoding:Qi,depthBuffer:!1},r=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(s)),this._blurMaterial=pS(s,e,t)}return r}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xh),u.toneMapping=$n,u.autoClear=!1;const d=new cu({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new mn(new $s,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(xh),m=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;So(r,v*w,_>2?w:0,w,w),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gr||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;So(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bh[(r-1)%bh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new mn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ki-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const _=[];let v=0;for(let D=0;D<ki;++D){const S=D/m,C=Math.exp(-S*S/2);_.push(C),D===0?v+=C:D<p&&(v+=2*C)}for(let D=0;D<_.length;D++)_[D]=_[D]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const b=this._sizeLods[r],x=3*b*(r>w-Rr?r-w+Rr:0),T=4*(this._cubeSize-b);So(t,x,T,3*b,2*b),l.setRenderTarget(t),l.render(f,xl)}}function dS(n){const e=[],t=[],i=[];let r=n;const s=n-Rr+1+yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Rr?l=yh[o-n+Rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,_=1,v=new Float32Array(m*g*d),w=new Float32Array(p*g*d),b=new Float32Array(_*g*d);for(let T=0;T<d;T++){const D=T%3*2/3-1,S=T>2?0:-1,C=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];v.set(C,m*g*T),w.set(h,p*g*T);const I=[T,T,T,T,T,T];b.set(I,_*g*T)}const x=new kt;x.setAttribute("position",new on(v,m)),x.setAttribute("uv",new on(w,p)),x.setAttribute("faceIndex",new on(b,_)),e.push(x),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){const i=new Si(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pS(n,e,t){const i=new Float32Array(ki),r=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Mh(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Eh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,u=l===Gr||l===Wr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new wh(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _S(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let w=0,b=v.length;w<b;w+=3){const x=v[w+0],T=v[w+1],D=v[w+2];h.push(x,T,T,D,D,x)}}else{const v=g.array;m=g.version;for(let w=0,b=v.length/3-1;w<b;w+=3){const x=w+0,T=w+1,D=w+2;h.push(x,T,T,D,D,x)}}const p=new(hm(h)?vm:_m)(h,1);p.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function vS(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function yS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function xS(n,e){return n[0]-e[0]}function bS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let U=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),x===!0&&(I=2),T===!0&&(I=3);let j=u.attributes.position.count*I,te=1;j>e.maxTextureSize&&(te=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const G=new Float32Array(j*te*4*p),O=new gm(G,j,te,p);O.type=Vi,O.needsUpdate=!0;const F=I*4;for(let re=0;re<p;re++){const Z=D[re],q=S[re],k=C[re],ee=j*te*4*re;for(let Q=0;Q<Z.count;Q++){const ue=Q*F;b===!0&&(o.fromBufferAttribute(Z,Q),G[ee+ue+0]=o.x,G[ee+ue+1]=o.y,G[ee+ue+2]=o.z,G[ee+ue+3]=0),x===!0&&(o.fromBufferAttribute(q,Q),G[ee+ue+4]=o.x,G[ee+ue+5]=o.y,G[ee+ue+6]=o.z,G[ee+ue+7]=0),T===!0&&(o.fromBufferAttribute(k,Q),G[ee+ue+8]=o.x,G[ee+ue+9]=o.y,G[ee+ue+10]=o.z,G[ee+ue+11]=k.itemSize===4?o.w:1)}}_={count:p,texture:O,size:new we(j,te)},s.set(u,_),u.addEventListener("dispose",U)}let v=0;for(let b=0;b<d.length;b++)v+=d[b];const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=i[u.id];if(p===void 0||p.length!==m){p=[];for(let x=0;x<m;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<m;x++){const T=p[x];T[0]=x,T[1]=d[x]}p.sort(bS);for(let x=0;x<8;x++)x<m&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(xS);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const T=a[x],D=T[0],S=T[1];D!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+x)!==_[D]&&u.setAttribute("morphTarget"+x,_[D]),v&&u.getAttribute("morphNormal"+x)!==v[D]&&u.setAttribute("morphNormal"+x,v[D]),r[x]=S,w+=S):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const b=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function SS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Sm=new Yt,Mm=new gm,Em=new hb,Tm=new bm,Th=[],Ah=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Th[r];if(s===void 0&&(s=new Float32Array(r),Th[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=Ah[e];t===void 0&&(t=new Int32Array(e),Ah[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function CS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),yt(t,i)}}function PS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),yt(t,i)}}function LS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(vt(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),yt(t,i)}}function RS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;vt(t,e)||(n.uniform2iv(this.addr,e),yt(t,e))}function OS(n,e){const t=this.cache;vt(t,e)||(n.uniform3iv(this.addr,e),yt(t,e))}function IS(n,e){const t=this.cache;vt(t,e)||(n.uniform4iv(this.addr,e),yt(t,e))}function NS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FS(n,e){const t=this.cache;vt(t,e)||(n.uniform2uiv(this.addr,e),yt(t,e))}function kS(n,e){const t=this.cache;vt(t,e)||(n.uniform3uiv(this.addr,e),yt(t,e))}function BS(n,e){const t=this.cache;vt(t,e)||(n.uniform4uiv(this.addr,e),yt(t,e))}function zS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Sm,r)}function US(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Em,r)}function HS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tm,r)}function VS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mm,r)}function GS(n){switch(n){case 5126:return MS;case 35664:return ES;case 35665:return TS;case 35666:return AS;case 35674:return CS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return RS;case 35667:case 35671:return DS;case 35668:case 35672:return OS;case 35669:case 35673:return IS;case 5125:return NS;case 36294:return FS;case 36295:return kS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return HS;case 36289:case 36303:case 36311:case 36292:return VS}}function WS(n,e){n.uniform1fv(this.addr,e)}function jS(n,e){const t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function $S(n,e){const t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function qS(n,e){const t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function XS(n,e){const t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YS(n,e){const t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function KS(n,e){const t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZS(n,e){n.uniform1iv(this.addr,e)}function JS(n,e){n.uniform2iv(this.addr,e)}function QS(n,e){n.uniform3iv(this.addr,e)}function eM(n,e){n.uniform4iv(this.addr,e)}function tM(n,e){n.uniform1uiv(this.addr,e)}function nM(n,e){n.uniform2uiv(this.addr,e)}function iM(n,e){n.uniform3uiv(this.addr,e)}function rM(n,e){n.uniform4uiv(this.addr,e)}function sM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sm,s[o])}function oM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Em,s[o])}function aM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tm,s[o])}function lM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mm,s[o])}function cM(n){switch(n){case 5126:return WS;case 35664:return jS;case 35665:return $S;case 35666:return qS;case 35674:return XS;case 35675:return YS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class uM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=GS(t.type)}}class fM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=cM(t.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function Rh(n,e){n.seq.push(e),n.map[e.id]=e}function dM(n,e,t){const i=n.name,r=i.length;for(wl.lastIndex=0;;){const s=wl.exec(i),o=wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rh(t,c===void 0?new uM(a,n,e):new fM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new hM(a),Rh(t,f)),t=f}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);dM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let pM=0;function mM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function gM(n){switch(n){case Qi:return["Linear","( value )"];case ft:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Oh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mM(n.getShaderSource(e),o)}else return r}function _M(n,e){const t=gM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vM(n,e){let t;switch(e){case zx:t="Linear";break;case Ux:t="Reinhard";break;case Hx:t="OptimizedCineon";break;case Vx:t="ACESFilmic";break;case Gx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function xM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xs(n){return n!==""}function Ih(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(wM,SM)}function SM(n,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dc(t)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(n){return n.replace(MM,EM)}function EM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===om?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function AM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gr:case Wr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wr:e="ENVMAP_MODE_REFRACTION";break}return e}function PM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case kx:e="ENVMAP_BLENDING_MIX";break;case Bx:e="ENVMAP_BLENDING_ADD";break}return e}function LM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function RM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=TM(t),c=AM(t),u=CM(t),f=PM(t),h=LM(t),d=t.isWebGL2?"":yM(t),g=xM(s),m=r.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(xs).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(xs).join(`
`),_.length>0&&(_+=`
`)):(p=[kh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),_=[d,kh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ge.tonemapping_pars_fragment:"",t.toneMapping!==$n?vM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,_M("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),o=dc(o),o=Ih(o,t),o=Nh(o,t),a=dc(a),a=Ih(a,t),a=Nh(a,t),o=Fh(o),a=Fh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=v+p+o,b=v+_+a,x=Dh(r,35633,w),T=Dh(r,35632,b);if(r.attachShader(m,x),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(x).trim(),j=r.getShaderInfoLog(T).trim();let te=!0,G=!0;if(r.getProgramParameter(m,35714)===!1){te=!1;const O=Oh(r,x,"vertex"),F=Oh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||j==="")&&(G=!1);G&&(this.diagnostics={runnable:te,programLog:C,vertexShader:{log:I,prefix:p},fragmentShader:{log:j,prefix:_}})}r.deleteShader(x),r.deleteShader(T);let D;this.getUniforms=function(){return D===void 0&&(D=new Vo(r,m)),D};let S;return this.getAttributes=function(){return S===void 0&&(S=bM(r,m)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=T,this}let DM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IM(e),t.set(e,i)),i}}class IM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function NM(n,e,t,i,r,s,o){const a=new lu,l=new OM,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S,C,I,j,te){const G=j.fog,O=te.geometry,F=S.isMeshStandardMaterial?j.environment:null,U=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),re=!!U&&U.mapping===xa?U.image.height:null,Z=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=q!==void 0?q.length:0;let ee=0;O.morphAttributes.position!==void 0&&(ee=1),O.morphAttributes.normal!==void 0&&(ee=2),O.morphAttributes.color!==void 0&&(ee=3);let Q,ue,ce,se;if(Z){const Pe=Tn[Z];Q=Pe.vertexShader,ue=Pe.fragmentShader}else Q=S.vertexShader,ue=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const W=n.getRenderTarget(),$=S.alphaTest>0,oe=S.clearcoat>0,ve=S.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:S.type,vertexShader:Q,fragmentShader:ue,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Qi,map:!!S.map,matcap:!!S.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:re,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===lb,tangentSpaceNormalMap:S.normalMapType===fm,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===ft,clearcoat:oe,clearcoatMap:oe&&!!S.clearcoatMap,clearcoatRoughnessMap:oe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!S.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!S.iridescenceMap,iridescenceThicknessMap:ve&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===zr,alphaMap:!!S.alphaMap,alphaTest:$,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!O.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:$n,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mi,flipSided:S.side===qt,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)C.push(I),C.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(C,S),v(C,S),C.push(n.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function _(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function v(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),S.push(a.mask)}function w(S){const C=g[S.type];let I;if(C){const j=Tn[C];I=ym.clone(j.uniforms)}else I=S.uniforms;return I}function b(S,C){let I;for(let j=0,te=c.length;j<te;j++){const G=c[j];if(G.cacheKey===C){I=G,++I.usedTimes;break}}return I===void 0&&(I=new RM(n,C,S,s),c.push(I)),I}function x(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:D}}function FM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,m,p){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=p),e++,_}function a(f,h,d,g,m,p){const _=o(f,h,d,g,m,p);d.transmission>0?i.push(_):d.transparent===!0?r.push(_):t.push(_)}function l(f,h,d,g,m,p){const _=o(f,h,d,g,m,p);d.transmission>0?i.unshift(_):d.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||kM),i.length>1&&i.sort(h||Bh),r.length>1&&r.sort(h||Bh)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zh,n.set(i,[o])):r>=s.length?(o=new zh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function UM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let HM=0;function VM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function GM(n,e){const t=new zM,i=UM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new ot,a=new ot;function l(u,f){let h=0,d=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let m=0,p=0,_=0,v=0,w=0,b=0,x=0,T=0,D=0,S=0;u.sort(VM);const C=f!==!0?Math.PI:1;for(let j=0,te=u.length;j<te;j++){const G=u[j],O=G.color,F=G.intensity,U=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)h+=O.r*F*C,d+=O.g*F*C,g+=O.b*F*C;else if(G.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(G.sh.coefficients[Z],F);else if(G.isDirectionalLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*C),G.castShadow){const q=G.shadow,k=i.get(G);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=re,r.directionalShadowMatrix[m]=G.shadow.matrix,b++}r.directional[m]=Z,m++}else if(G.isSpotLight){const Z=t.get(G);Z.position.setFromMatrixPosition(G.matrixWorld),Z.color.copy(O).multiplyScalar(F*C),Z.distance=U,Z.coneCos=Math.cos(G.angle),Z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Z.decay=G.decay,r.spot[_]=Z;const q=G.shadow;if(G.map&&(r.spotLightMap[D]=G.map,D++,q.updateMatrices(G),G.castShadow&&S++),r.spotLightMatrix[_]=q.matrix,G.castShadow){const k=i.get(G);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,r.spotShadow[_]=k,r.spotShadowMap[_]=re,T++}_++}else if(G.isRectAreaLight){const Z=t.get(G);Z.color.copy(O).multiplyScalar(F),Z.halfWidth.set(G.width*.5,0,0),Z.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=Z,v++}else if(G.isPointLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*C),Z.distance=G.distance,Z.decay=G.decay,G.castShadow){const q=G.shadow,k=i.get(G);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=re,r.pointShadowMatrix[p]=G.shadow.matrix,x++}r.point[p]=Z,p++}else if(G.isHemisphereLight){const Z=t.get(G);Z.skyColor.copy(G.color).multiplyScalar(F*C),Z.groundColor.copy(G.groundColor).multiplyScalar(F*C),r.hemi[w]=Z,w++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==w||I.numDirectionalShadows!==b||I.numPointShadows!==x||I.numSpotShadows!==T||I.numSpotMaps!==D)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=v,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=T+D-S,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=S,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=w,I.numDirectionalShadows=b,I.numPointShadows=x,I.numSpotShadows=T,I.numSpotMaps=D,r.version=HM++)}function c(u,f){let h=0,d=0,g=0,m=0,p=0;const _=f.matrixWorldInverse;for(let v=0,w=u.length;v<w;v++){const b=u[v];if(b.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),h++}else if(b.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const x=r.rectArea[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const x=r.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function Uh(n,e){const t=new GM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function WM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Uh(n,e),t.set(s,[l])):o>=a.length?(l=new Uh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class jM extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YM(n,e,t){let i=new uu;const r=new we,s=new we,o=new wt,a=new jM({depthPacking:ab}),l=new $M,c={},u=t.maxTextureSize,f={0:qt,1:Vr,2:mi},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:qM,fragmentShader:XM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new mn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=om,this.render=function(b,x,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const D=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,te=b.length;j<te;j++){const G=b[j],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const F=O.getFrameExtents();if(r.multiply(F),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,O.mapSize.y=s.y)),O.map===null){const re=this.type!==ys?{minFilter:Ut,magFilter:Ut}:{};O.map=new Si(r.x,r.y,re),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const U=O.getViewportCount();for(let re=0;re<U;re++){const Z=O.getViewport(re);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(o),O.updateMatrices(G,re),i=O.getFrustum(),w(x,T,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===ys&&_(O,T),O.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(D,S,C)};function _(b,x){const T=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Si(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(x,null,T,h,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(x,null,T,d,m,null)}function v(b,x,T,D,S,C){let I=null;const j=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(j!==void 0?I=j:I=T.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const te=I.uuid,G=x.uuid;let O=c[te];O===void 0&&(O={},c[te]=O);let F=O[G];F===void 0&&(F=I.clone(),O[G]=F),I=F}return I.visible=x.visible,I.wireframe=x.wireframe,C===ys?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:f[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaTest,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=D,I.farDistance=S),I}function w(b,x,T,D,S){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===ys)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const j=e.update(b),te=b.material;if(Array.isArray(te)){const G=j.groups;for(let O=0,F=G.length;O<F;O++){const U=G[O],re=te[U.materialIndex];if(re&&re.visible){const Z=v(b,re,D,T.near,T.far,S);n.renderBufferDirect(T,null,j,Z,b,U)}}}else if(te.visible){const G=v(b,te,D,T.near,T.far,S);n.renderBufferDirect(T,null,j,G,b,null)}}const I=b.children;for(let j=0,te=I.length;j<te;j++)w(I[j],x,T,D,S)}}function KM(n,e,t){const i=t.isWebGL2;function r(){let V=!1;const Ce=new wt;let xe=null;const ge=new wt(0,0,0,0);return{setMask:function(Ee){xe!==Ee&&!V&&(n.colorMask(Ee,Ee,Ee,Ee),xe=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Fe,rt,dt,Qn){Qn===!0&&(Ee*=dt,Fe*=dt,rt*=dt),Ce.set(Ee,Fe,rt,dt),ge.equals(Ce)===!1&&(n.clearColor(Ee,Fe,rt,dt),ge.copy(Ce))},reset:function(){V=!1,xe=null,ge.set(-1,0,0,0)}}}function s(){let V=!1,Ce=null,xe=null,ge=null;return{setTest:function(Ee){Ee?$(2929):oe(2929)},setMask:function(Ee){Ce!==Ee&&!V&&(n.depthMask(Ee),Ce=Ee)},setFunc:function(Ee){if(xe!==Ee){switch(Ee){case Lx:n.depthFunc(512);break;case Rx:n.depthFunc(519);break;case Dx:n.depthFunc(513);break;case sc:n.depthFunc(515);break;case Ox:n.depthFunc(514);break;case Ix:n.depthFunc(518);break;case Nx:n.depthFunc(516);break;case Fx:n.depthFunc(517);break;default:n.depthFunc(515)}xe=Ee}},setLocked:function(Ee){V=Ee},setClear:function(Ee){ge!==Ee&&(n.clearDepth(Ee),ge=Ee)},reset:function(){V=!1,Ce=null,xe=null,ge=null}}}function o(){let V=!1,Ce=null,xe=null,ge=null,Ee=null,Fe=null,rt=null,dt=null,Qn=null;return{setTest:function(ct){V||(ct?$(2960):oe(2960))},setMask:function(ct){Ce!==ct&&!V&&(n.stencilMask(ct),Ce=ct)},setFunc:function(ct,Dn,Kt){(xe!==ct||ge!==Dn||Ee!==Kt)&&(n.stencilFunc(ct,Dn,Kt),xe=ct,ge=Dn,Ee=Kt)},setOp:function(ct,Dn,Kt){(Fe!==ct||rt!==Dn||dt!==Kt)&&(n.stencilOp(ct,Dn,Kt),Fe=ct,rt=Dn,dt=Kt)},setLocked:function(ct){V=ct},setClear:function(ct){Qn!==ct&&(n.clearStencil(ct),Qn=ct)},reset:function(){V=!1,Ce=null,xe=null,ge=null,Ee=null,Fe=null,rt=null,dt=null,Qn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,_=!1,v=null,w=null,b=null,x=null,T=null,D=null,S=null,C=!1,I=null,j=null,te=null,G=null,O=null;const F=n.getParameter(35661);let U=!1,re=0;const Z=n.getParameter(7938);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),U=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),U=re>=2);let q=null,k={};const ee=n.getParameter(3088),Q=n.getParameter(2978),ue=new wt().fromArray(ee),ce=new wt().fromArray(Q);function se(V,Ce,xe){const ge=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(V,Ee),n.texParameteri(V,10241,9728),n.texParameteri(V,10240,9728);for(let Fe=0;Fe<xe;Fe++)n.texImage2D(Ce+Fe,0,6408,1,1,0,6408,5121,ge);return Ee}const W={};W[3553]=se(3553,3553,1),W[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(sc),B(!1),X(Lf),$(2884),A(yi);function $(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function oe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function ve(V,Ce){return d[V]!==Ce?(n.bindFramebuffer(V,Ce),d[V]=Ce,i&&(V===36009&&(d[36160]=Ce),V===36160&&(d[36009]=Ce)),!0):!1}function me(V,Ce){let xe=m,ge=!1;if(V)if(xe=g.get(Ce),xe===void 0&&(xe=[],g.set(Ce,xe)),V.isWebGLMultipleRenderTargets){const Ee=V.texture;if(xe.length!==Ee.length||xe[0]!==36064){for(let Fe=0,rt=Ee.length;Fe<rt;Fe++)xe[Fe]=36064+Fe;xe.length=Ee.length,ge=!0}}else xe[0]!==36064&&(xe[0]=36064,ge=!0);else xe[0]!==1029&&(xe[0]=1029,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Pe(V){return p!==V?(n.useProgram(V),p=V,!0):!1}const L={[Pr]:32774,[yx]:32778,[xx]:32779};if(i)L[If]=32775,L[Nf]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(L[If]=V.MIN_EXT,L[Nf]=V.MAX_EXT)}const y={[bx]:0,[wx]:1,[Sx]:768,[am]:770,[Px]:776,[Ax]:774,[Ex]:772,[Mx]:769,[lm]:771,[Cx]:775,[Tx]:773};function A(V,Ce,xe,ge,Ee,Fe,rt,dt){if(V===yi){_===!0&&(oe(3042),_=!1);return}if(_===!1&&($(3042),_=!0),V!==vx){if(V!==v||dt!==C){if((w!==Pr||T!==Pr)&&(n.blendEquation(32774),w=Pr,T=Pr),dt)switch(V){case zr:n.blendFuncSeparate(1,771,1,771);break;case Rf:n.blendFunc(1,1);break;case Df:n.blendFuncSeparate(0,769,0,1);break;case Of:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zr:n.blendFuncSeparate(770,771,1,771);break;case Rf:n.blendFunc(770,1);break;case Df:n.blendFuncSeparate(0,769,0,1);break;case Of:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,x=null,D=null,S=null,v=V,C=dt}return}Ee=Ee||Ce,Fe=Fe||xe,rt=rt||ge,(Ce!==w||Ee!==T)&&(n.blendEquationSeparate(L[Ce],L[Ee]),w=Ce,T=Ee),(xe!==b||ge!==x||Fe!==D||rt!==S)&&(n.blendFuncSeparate(y[xe],y[ge],y[Fe],y[rt]),b=xe,x=ge,D=Fe,S=rt),v=V,C=null}function M(V,Ce){V.side===mi?oe(2884):$(2884);let xe=V.side===qt;Ce&&(xe=!xe),B(xe),V.blending===zr&&V.transparent===!1?A(yi):A(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const ge=V.stencilWrite;c.setTest(ge),ge&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(32926):oe(32926)}function B(V){I!==V&&(V?n.frontFace(2304):n.frontFace(2305),I=V)}function X(V){V!==mx?($(2884),V!==j&&(V===Lf?n.cullFace(1029):V===gx?n.cullFace(1028):n.cullFace(1032))):oe(2884),j=V}function K(V){V!==te&&(U&&n.lineWidth(V),te=V)}function ie(V,Ce,xe){V?($(32823),(G!==Ce||O!==xe)&&(n.polygonOffset(Ce,xe),G=Ce,O=xe)):oe(32823)}function pe(V){V?$(3089):oe(3089)}function le(V){V===void 0&&(V=33984+F-1),q!==V&&(n.activeTexture(V),q=V)}function P(V,Ce,xe){xe===void 0&&(q===null?xe=33984+F-1:xe=q);let ge=k[xe];ge===void 0&&(ge={type:void 0,texture:void 0},k[xe]=ge),(ge.type!==V||ge.texture!==Ce)&&(q!==xe&&(n.activeTexture(xe),q=xe),n.bindTexture(V,Ce||W[V]),ge.type=V,ge.texture=Ce)}function E(){const V=k[q];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(V){ue.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ue.copy(V))}function Ae(V){ce.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ce.copy(V))}function De(V,Ce){let xe=f.get(Ce);xe===void 0&&(xe=new WeakMap,f.set(Ce,xe));let ge=xe.get(V);ge===void 0&&(ge=n.getUniformBlockIndex(Ce,V.name),xe.set(V,ge))}function Re(V,Ce){const ge=f.get(Ce).get(V);u.get(V)!==ge&&(n.uniformBlockBinding(Ce,ge,V.__bindingPointIndex),u.set(V,ge))}function Be(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,k={},d={},g=new WeakMap,m=[],p=null,_=!1,v=null,w=null,b=null,x=null,T=null,D=null,S=null,C=!1,I=null,j=null,te=null,G=null,O=null,ue.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:$,disable:oe,bindFramebuffer:ve,drawBuffers:me,useProgram:Pe,setBlending:A,setMaterial:M,setFlipSided:B,setCullFace:X,setLineWidth:K,setPolygonOffset:ie,setScissorTest:pe,activeTexture:le,bindTexture:P,unbindTexture:E,compressedTexImage2D:H,texImage2D:Y,texImage3D:Te,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:N,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:ye,scissor:Le,viewport:Ae,reset:Be}}function ZM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return _?new OffscreenCanvas(P,E):Bs("canvas")}function w(P,E,H,ae){let he=1;if((P.width>ae||P.height>ae)&&(he=ae/Math.max(P.width,P.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ye=E?hc:Math.floor,Me=ye(he*P.width),N=ye(he*P.height);m===void 0&&(m=v(Me,N));const Y=H?v(Me,N):m;return Y.width=Me,Y.height=N,Y.getContext("2d").drawImage(P,0,0,Me,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+N+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return ah(P.width)&&ah(P.height)}function x(P){return a?!1:P.wrapS!==dn||P.wrapT!==dn||P.minFilter!==Ut&&P.minFilter!==$t}function T(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ut&&P.minFilter!==$t}function D(P){n.generateMipmap(P)}function S(P,E,H,ae,he=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye=E;return E===6403&&(H===5126&&(ye=33326),H===5131&&(ye=33325),H===5121&&(ye=33321)),E===33319&&(H===5126&&(ye=33328),H===5131&&(ye=33327),H===5121&&(ye=33323)),E===6408&&(H===5126&&(ye=34836),H===5131&&(ye=34842),H===5121&&(ye=ae===ft&&he===!1?35907:32856),H===32819&&(ye=32854),H===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function C(P,E,H){return T(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==Ut&&P.minFilter!==$t?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){return P===Ut||P===Ff||P===kf?9728:9729}function j(P){const E=P.target;E.removeEventListener("dispose",j),G(E),E.isVideoTexture&&g.delete(E)}function te(P){const E=P.target;E.removeEventListener("dispose",te),F(E)}function G(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,ae=p.get(H);if(ae){const he=ae[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(P),Object.keys(ae).length===0&&p.delete(H)}i.remove(P)}function O(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const H=P.source,ae=p.get(H);delete ae[E.__cacheKey],o.memory.textures--}function F(P){const E=P.texture,H=i.get(P),ae=i.get(E);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)n.deleteFramebuffer(H.__webglFramebuffer[he]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[he]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let he=0;he<H.__webglColorRenderbuffer.length;he++)H.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[he]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,ye=E.length;he<ye;he++){const Me=i.get(E[he]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[he])}i.remove(E),i.remove(P)}let U=0;function re(){U=0}function Z(){const P=U;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),U+=1,P}function q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function k(P,E){const H=i.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,P,E);return}}t.bindTexture(3553,H.__webglTexture,33984+E)}function ee(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){oe(H,P,E);return}t.bindTexture(35866,H.__webglTexture,33984+E)}function Q(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){oe(H,P,E);return}t.bindTexture(32879,H.__webglTexture,33984+E)}function ue(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ve(H,P,E);return}t.bindTexture(34067,H.__webglTexture,33984+E)}const ce={[lc]:10497,[dn]:33071,[cc]:33648},se={[Ut]:9728,[Ff]:9984,[kf]:9986,[$t]:9729,[Wx]:9985,[ba]:9987};function W(P,E,H){if(H?(n.texParameteri(P,10242,ce[E.wrapS]),n.texParameteri(P,10243,ce[E.wrapT]),(P===32879||P===35866)&&n.texParameteri(P,32882,ce[E.wrapR]),n.texParameteri(P,10240,se[E.magFilter]),n.texParameteri(P,10241,se[E.minFilter])):(n.texParameteri(P,10242,33071),n.texParameteri(P,10243,33071),(P===32879||P===35866)&&n.texParameteri(P,32882,33071),(E.wrapS!==dn||E.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,10240,I(E.magFilter)),n.texParameteri(P,10241,I(E.minFilter)),E.minFilter!==Ut&&E.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ks&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function $(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",j));const ae=E.source;let he=p.get(ae);he===void 0&&(he={},p.set(ae,he));const ye=q(E);if(ye!==P.__cacheKey){he[ye]===void 0&&(he[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),he[ye].usedTimes++;const Me=he[P.__cacheKey];Me!==void 0&&(he[P.__cacheKey].usedTimes--,Me.usedTimes===0&&O(E)),P.__cacheKey=ye,P.__webglTexture=he[ye].texture}return H}function oe(P,E,H){let ae=3553;E.isDataArrayTexture&&(ae=35866),E.isData3DTexture&&(ae=32879);const he=$(P,E),ye=E.source;t.bindTexture(ae,P.__webglTexture,33984+H);const Me=i.get(ye);if(ye.version!==Me.__version||he===!0){t.activeTexture(33984+H),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const N=x(E)&&b(E.image)===!1;let Y=w(E.image,N,!1,u);Y=le(E,Y);const Te=b(Y)||a,Le=s.convert(E.format,E.encoding);let Ae=s.convert(E.type),De=S(E.internalFormat,Le,Ae,E.encoding,E.isVideoTexture);W(ae,E,Te);let Re;const Be=E.mipmaps,V=a&&E.isVideoTexture!==!0,Ce=Me.__version===void 0||he===!0,xe=C(E,Y,Te);if(E.isDepthTexture)De=6402,a?E.type===Vi?De=36012:E.type===Hi?De=33190:E.type===Ur?De=35056:De=33189:E.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ki&&De===6402&&E.type!==um&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,Ae=s.convert(E.type)),E.format===jr&&De===6402&&(De=34041,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,Ae=s.convert(E.type))),Ce&&(V?t.texStorage2D(3553,1,De,Y.width,Y.height):t.texImage2D(3553,0,De,Y.width,Y.height,0,Le,Ae,null));else if(E.isDataTexture)if(Be.length>0&&Te){V&&Ce&&t.texStorage2D(3553,xe,De,Be[0].width,Be[0].height);for(let ge=0,Ee=Be.length;ge<Ee;ge++)Re=Be[ge],V?t.texSubImage2D(3553,ge,0,0,Re.width,Re.height,Le,Ae,Re.data):t.texImage2D(3553,ge,De,Re.width,Re.height,0,Le,Ae,Re.data);E.generateMipmaps=!1}else V?(Ce&&t.texStorage2D(3553,xe,De,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Le,Ae,Y.data)):t.texImage2D(3553,0,De,Y.width,Y.height,0,Le,Ae,Y.data);else if(E.isCompressedTexture){V&&Ce&&t.texStorage2D(3553,xe,De,Be[0].width,Be[0].height);for(let ge=0,Ee=Be.length;ge<Ee;ge++)Re=Be[ge],E.format!==Pn?Le!==null?V?t.compressedTexSubImage2D(3553,ge,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(3553,ge,De,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(3553,ge,0,0,Re.width,Re.height,Le,Ae,Re.data):t.texImage2D(3553,ge,De,Re.width,Re.height,0,Le,Ae,Re.data)}else if(E.isDataArrayTexture)V?(Ce&&t.texStorage3D(35866,xe,De,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Le,Ae,Y.data)):t.texImage3D(35866,0,De,Y.width,Y.height,Y.depth,0,Le,Ae,Y.data);else if(E.isData3DTexture)V?(Ce&&t.texStorage3D(32879,xe,De,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Le,Ae,Y.data)):t.texImage3D(32879,0,De,Y.width,Y.height,Y.depth,0,Le,Ae,Y.data);else if(E.isFramebufferTexture){if(Ce)if(V)t.texStorage2D(3553,xe,De,Y.width,Y.height);else{let ge=Y.width,Ee=Y.height;for(let Fe=0;Fe<xe;Fe++)t.texImage2D(3553,Fe,De,ge,Ee,0,Le,Ae,null),ge>>=1,Ee>>=1}}else if(Be.length>0&&Te){V&&Ce&&t.texStorage2D(3553,xe,De,Be[0].width,Be[0].height);for(let ge=0,Ee=Be.length;ge<Ee;ge++)Re=Be[ge],V?t.texSubImage2D(3553,ge,0,0,Le,Ae,Re):t.texImage2D(3553,ge,De,Le,Ae,Re);E.generateMipmaps=!1}else V?(Ce&&t.texStorage2D(3553,xe,De,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Le,Ae,Y)):t.texImage2D(3553,0,De,Le,Ae,Y);T(E,Te)&&D(ae),Me.__version=ye.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ve(P,E,H){if(E.image.length!==6)return;const ae=$(P,E),he=E.source;t.bindTexture(34067,P.__webglTexture,33984+H);const ye=i.get(he);if(he.version!==ye.__version||ae===!0){t.activeTexture(33984+H),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let ge=0;ge<6;ge++)!Me&&!N?Y[ge]=w(E.image[ge],!1,!0,c):Y[ge]=N?E.image[ge].image:E.image[ge],Y[ge]=le(E,Y[ge]);const Te=Y[0],Le=b(Te)||a,Ae=s.convert(E.format,E.encoding),De=s.convert(E.type),Re=S(E.internalFormat,Ae,De,E.encoding),Be=a&&E.isVideoTexture!==!0,V=ye.__version===void 0||ae===!0;let Ce=C(E,Te,Le);W(34067,E,Le);let xe;if(Me){Be&&V&&t.texStorage2D(34067,Ce,Re,Te.width,Te.height);for(let ge=0;ge<6;ge++){xe=Y[ge].mipmaps;for(let Ee=0;Ee<xe.length;Ee++){const Fe=xe[Ee];E.format!==Pn?Ae!==null?Be?t.compressedTexSubImage2D(34069+ge,Ee,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(34069+ge,Ee,Re,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(34069+ge,Ee,0,0,Fe.width,Fe.height,Ae,De,Fe.data):t.texImage2D(34069+ge,Ee,Re,Fe.width,Fe.height,0,Ae,De,Fe.data)}}}else{xe=E.mipmaps,Be&&V&&(xe.length>0&&Ce++,t.texStorage2D(34067,Ce,Re,Y[0].width,Y[0].height));for(let ge=0;ge<6;ge++)if(N){Be?t.texSubImage2D(34069+ge,0,0,0,Y[ge].width,Y[ge].height,Ae,De,Y[ge].data):t.texImage2D(34069+ge,0,Re,Y[ge].width,Y[ge].height,0,Ae,De,Y[ge].data);for(let Ee=0;Ee<xe.length;Ee++){const rt=xe[Ee].image[ge].image;Be?t.texSubImage2D(34069+ge,Ee+1,0,0,rt.width,rt.height,Ae,De,rt.data):t.texImage2D(34069+ge,Ee+1,Re,rt.width,rt.height,0,Ae,De,rt.data)}}else{Be?t.texSubImage2D(34069+ge,0,0,0,Ae,De,Y[ge]):t.texImage2D(34069+ge,0,Re,Ae,De,Y[ge]);for(let Ee=0;Ee<xe.length;Ee++){const Fe=xe[Ee];Be?t.texSubImage2D(34069+ge,Ee+1,0,0,Ae,De,Fe.image[ge]):t.texImage2D(34069+ge,Ee+1,Re,Ae,De,Fe.image[ge])}}}T(E,Le)&&D(34067),ye.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function me(P,E,H,ae,he){const ye=s.convert(H.format,H.encoding),Me=s.convert(H.type),N=S(H.internalFormat,ye,Me,H.encoding);i.get(E).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,N,E.width,E.height,E.depth,0,ye,Me,null):t.texImage2D(he,0,N,E.width,E.height,0,ye,Me,null)),t.bindFramebuffer(36160,P),ie(E)?h.framebufferTexture2DMultisampleEXT(36160,ae,he,i.get(H).__webglTexture,0,K(E)):n.framebufferTexture2D(36160,ae,he,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Pe(P,E,H){if(n.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let ae=33189;if(H||ie(E)){const he=E.depthTexture;he&&he.isDepthTexture&&(he.type===Vi?ae=36012:he.type===Hi&&(ae=33190));const ye=K(E);ie(E)?h.renderbufferStorageMultisampleEXT(36161,ye,ae,E.width,E.height):n.renderbufferStorageMultisample(36161,ye,ae,E.width,E.height)}else n.renderbufferStorage(36161,ae,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const ae=K(E);H&&ie(E)===!1?n.renderbufferStorageMultisample(36161,ae,35056,E.width,E.height):ie(E)?h.renderbufferStorageMultisampleEXT(36161,ae,35056,E.width,E.height):n.renderbufferStorage(36161,34041,E.width,E.height),n.framebufferRenderbuffer(36160,33306,36161,P)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let he=0;he<ae.length;he++){const ye=ae[he],Me=s.convert(ye.format,ye.encoding),N=s.convert(ye.type),Y=S(ye.internalFormat,Me,N,ye.encoding),Te=K(E);H&&ie(E)===!1?n.renderbufferStorageMultisample(36161,Te,Y,E.width,E.height):ie(E)?h.renderbufferStorageMultisampleEXT(36161,Te,Y,E.width,E.height):n.renderbufferStorage(36161,Y,E.width,E.height)}}n.bindRenderbuffer(36161,null)}function L(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ae=i.get(E.depthTexture).__webglTexture,he=K(E);if(E.depthTexture.format===Ki)ie(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,he):n.framebufferTexture2D(36160,36096,3553,ae,0);else if(E.depthTexture.format===jr)ie(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,he):n.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function y(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");L(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=n.createRenderbuffer(),Pe(E.__webglDepthbuffer[ae],P,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Pe(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function A(P,E,H){const ae=i.get(P);E!==void 0&&me(ae.__webglFramebuffer,P,P.texture,36064,3553),H!==void 0&&y(P)}function M(P){const E=P.texture,H=i.get(P),ae=i.get(E);P.addEventListener("dispose",te),P.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,o.memory.textures++);const he=P.isWebGLCubeRenderTarget===!0,ye=P.isWebGLMultipleRenderTargets===!0,Me=b(P)||a;if(he){H.__webglFramebuffer=[];for(let N=0;N<6;N++)H.__webglFramebuffer[N]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),ye)if(r.drawBuffers){const N=P.texture;for(let Y=0,Te=N.length;Y<Te;Y++){const Le=i.get(N[Y]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ie(P)===!1){const N=ye?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const Te=N[Y];H.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[Y]);const Le=s.convert(Te.format,Te.encoding),Ae=s.convert(Te.type),De=S(Te.internalFormat,Le,Ae,Te.encoding,P.isXRRenderTarget===!0),Re=K(P);n.renderbufferStorageMultisample(36161,Re,De,P.width,P.height),n.framebufferRenderbuffer(36160,36064+Y,36161,H.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(36161,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(he){t.bindTexture(34067,ae.__webglTexture),W(34067,E,Me);for(let N=0;N<6;N++)me(H.__webglFramebuffer[N],P,E,36064,34069+N);T(E,Me)&&D(34067),t.unbindTexture()}else if(ye){const N=P.texture;for(let Y=0,Te=N.length;Y<Te;Y++){const Le=N[Y],Ae=i.get(Le);t.bindTexture(3553,Ae.__webglTexture),W(3553,Le,Me),me(H.__webglFramebuffer,P,Le,36064+Y,3553),T(Le,Me)&&D(3553)}t.unbindTexture()}else{let N=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?N=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,ae.__webglTexture),W(N,E,Me),me(H.__webglFramebuffer,P,E,36064,N),T(E,Me)&&D(N),t.unbindTexture()}P.depthBuffer&&y(P)}function B(P){const E=b(P)||a,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0,he=H.length;ae<he;ae++){const ye=H[ae];if(T(ye,E)){const Me=P.isWebGLCubeRenderTarget?34067:3553,N=i.get(ye).__webglTexture;t.bindTexture(Me,N),D(Me),t.unbindTexture()}}}function X(P){if(a&&P.samples>0&&ie(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,ae=P.height;let he=16384;const ye=[],Me=P.stencilBuffer?33306:36096,N=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){ye.push(36064+Te),P.depthBuffer&&ye.push(Me);const Le=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(Le===!1&&(P.depthBuffer&&(he|=256),P.stencilBuffer&&(he|=1024)),Y&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[Te]),Le===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),Y){const Ae=i.get(E[Te]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ae,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,he,9728),d&&n.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Te,36161,N.__webglColorRenderbuffer[Te]);const Le=i.get(E[Te]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Te,3553,Le,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function K(P){return Math.min(f,P.samples)}function ie(P){const E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(P){const E=o.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function le(P,E){const H=P.encoding,ae=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===fc||H!==Qi&&(H===ft?a===!1?e.has("EXT_sRGB")===!0&&ae===Pn?(P.format=fc,P.minFilter=$t,P.generateMipmaps=!1):E=pm.sRGBToLinear(E):(ae!==Pn||he!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),E}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=ue,this.rebindTextures=A,this.setupRenderTarget=M,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ie}function JM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Ji)return 5121;if(s===Xx)return 32819;if(s===Yx)return 32820;if(s===jx)return 5120;if(s===$x)return 5122;if(s===um)return 5123;if(s===qx)return 5124;if(s===Hi)return 5125;if(s===Vi)return 5126;if(s===ks)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kx)return 6406;if(s===Pn)return 6408;if(s===Jx)return 6409;if(s===Qx)return 6410;if(s===Ki)return 6402;if(s===jr)return 34041;if(s===eb)return 6403;if(s===Zx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tb)return 36244;if(s===nb)return 33319;if(s===ib)return 33320;if(s===rb)return 36249;if(s===$a||s===qa||s===Xa||s===Ya)if(o===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bf||s===zf||s===Uf||s===Hf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sb)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vf||s===Gf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vf)return o===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wf||s===jf||s===$f||s===qf||s===Xf||s===Yf||s===Kf||s===Zf||s===Jf||s===Qf||s===eh||s===th||s===nh||s===ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qf)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===th)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nh)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ih)return o===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rh)return o===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ur?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class QM extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eE={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const v=new Dr;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const _=c.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class tE extends Yt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ki&&(i=Hi),i===void 0&&u===jr&&(i=Ur),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class nE extends yn{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],v=[],w=new en;w.layers.enable(1),w.viewport=new wt;const b=new en;b.layers.enable(2),b.viewport=new wt;const x=[w,b],T=new QM;T.layers.enable(1),T.layers.enable(2);let D=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let k=_[q];return k===void 0&&(k=new Sl,_[q]=k),k.getTargetRaySpace()},this.getControllerGrip=function(q){let k=_[q];return k===void 0&&(k=new Sl,_[q]=k),k.getGripSpace()},this.getHand=function(q){let k=_[q];return k===void 0&&(k=new Sl,_[q]=k),k.getHandSpace()};function C(q){const k=v.indexOf(q.inputSource);if(k===-1)return;const ee=_[k];ee!==void 0&&ee.dispatchEvent({type:q.type,data:q.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",j);for(let q=0;q<_.length;q++){const k=v[q];k!==null&&(v[q]=null,_[q].disconnect(k))}D=null,S=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,p=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),p=new Si(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:Ji,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,ee=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,k=g.stencil?jr:Ki,ee=g.stencil?Ur:Hi);const ue={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),p=new Si(f.textureWidth,f.textureHeight,{format:Pn,type:Ji,depthTexture:new tE(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function j(q){for(let k=0;k<q.removed.length;k++){const ee=q.removed[k],Q=v.indexOf(ee);Q>=0&&(v[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:ee}))}for(let k=0;k<q.added.length;k++){const ee=q.added[k];let Q=v.indexOf(ee);if(Q===-1){for(let ce=0;ce<_.length;ce++)if(ce>=v.length){v.push(ee),Q=ce;break}else if(v[ce]===null){v[ce]=ee,Q=ce;break}if(Q===-1)break}const ue=_[Q];ue&&ue.dispatchEvent({type:"connected",data:ee})}}const te=new z,G=new z;function O(q,k,ee){te.setFromMatrixPosition(k.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const Q=te.distanceTo(G),ue=k.projectionMatrix.elements,ce=ee.projectionMatrix.elements,se=ue[14]/(ue[10]-1),W=ue[14]/(ue[10]+1),$=(ue[9]+1)/ue[5],oe=(ue[9]-1)/ue[5],ve=(ue[8]-1)/ue[0],me=(ce[8]+1)/ce[0],Pe=se*ve,L=se*me,y=Q/(-ve+me),A=y*-ve;k.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(A),q.translateZ(y),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const M=se+y,B=W+y,X=Pe-A,K=L+(Q-A),ie=$*W/B*M,pe=oe*W/B*M;q.projectionMatrix.makePerspective(X,K,ie,pe,M,B)}function F(q,k){k===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(k.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;T.near=b.near=w.near=q.near,T.far=b.far=w.far=q.far,(D!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,S=T.far);const k=q.parent,ee=T.cameras;F(T,k);for(let ue=0;ue<ee.length;ue++)F(ee[ue],k);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),q.matrix.copy(T.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const Q=q.children;for(let ue=0,ce=Q.length;ue<ce;ue++)Q[ue].updateMatrixWorld(!0);ee.length===2?O(T,w,b):T.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(q){f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)};let U=null;function re(q,k){if(c=k.getViewerPose(l||o),d=k,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let Q=!1;ee.length!==T.cameras.length&&(T.cameras.length=0,Q=!0);for(let ue=0;ue<ee.length;ue++){const ce=ee[ue];let se=null;if(h!==null)se=h.getViewport(ce);else{const $=u.getViewSubImage(f,ce);se=$.viewport,ue===0&&(e.setRenderTargetTextures(p,$.colorTexture,f.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(p))}let W=x[ue];W===void 0&&(W=new en,W.layers.enable(ue),W.viewport=new wt,x[ue]=W),W.matrix.fromArray(ce.transform.matrix),W.projectionMatrix.fromArray(ce.projectionMatrix),W.viewport.set(se.x,se.y,se.width,se.height),ue===0&&T.matrix.copy(W.matrix),Q===!0&&T.cameras.push(W)}}for(let ee=0;ee<_.length;ee++){const Q=v[ee],ue=_[ee];Q!==null&&ue!==void 0&&ue.update(Q,k,l||o)}U&&U(q,k),d=null}const Z=new wm;Z.setAnimationLoop(re),this.setAnimationLoop=function(q){U=q},this.dispose=function(){}}}function iE(n,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function rE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,w){const b=w.program;i.uniformBlockBinding(v,b)}function c(v,w){let b=r[v.id];b===void 0&&(g(v),b=u(v),r[v.id]=b,v.addEventListener("dispose",p));const x=w.program;i.updateUBOMapping(v,x);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const w=f();v.__bindingPointIndex=w;const b=n.createBuffer(),x=v.__size,T=v.usage;return n.bindBuffer(35345,b),n.bufferData(35345,x,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,w,b),b}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const w=r[v.id],b=v.uniforms,x=v.__cache;n.bindBuffer(35345,w);for(let T=0,D=b.length;T<D;T++){const S=b[T];if(d(S,T,x)===!0){const C=S.value,I=S.__offset;typeof C=="number"?(S.__data[0]=C,n.bufferSubData(35345,I,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):C.toArray(S.__data),n.bufferSubData(35345,I,S.__data))}}n.bindBuffer(35345,null)}function d(v,w,b){const x=v.value;if(b[w]===void 0)return typeof x=="number"?b[w]=x:b[w]=x.clone(),!0;if(typeof x=="number"){if(b[w]!==x)return b[w]=x,!0}else{const T=b[w];if(T.equals(x)===!1)return T.copy(x),!0}return!1}function g(v){const w=v.uniforms;let b=0;const x=16;let T=0;for(let D=0,S=w.length;D<S;D++){const C=w[D],I=m(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,D>0){T=b%x;const j=x-T;T!==0&&j-I.boundary<0&&(b+=x-T,C.__offset=b)}b+=I.storage}return T=b%x,T>0&&(b+=x-T),v.__size=b,v.__cache={},this}function m(v){const w=v.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(v){const w=v.target;w.removeEventListener("dispose",p);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function _(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function sE(){const n=Bs("canvas");return n.style.display="block",n}function Am(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:sE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qi,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,_=0,v=0,w=null,b=-1,x=null;const T=new wt,D=new wt;let S=null,C=e.width,I=e.height,j=1,te=null,G=null;const O=new wt(0,0,C,I),F=new wt(0,0,C,I);let U=!1;const re=new uu;let Z=!1,q=!1,k=null;const ee=new ot,Q=new we,ue=new z,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return w===null?j:1}let W=t;function $(R,ne){for(let fe=0;fe<R.length;fe++){const J=R[fe],de=e.getContext(J,ne);if(de!==null)return de}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${su}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Be,!1),W===null){const ne=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&ne.shift(),W=$(ne,R),W===null)throw $(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,ve,me,Pe,L,y,A,M,B,X,K,ie,pe,le,P,E,H,ae,he,ye,Me,N,Y,Te;function Le(){oe=new gS(W),ve=new uS(W,oe,n),oe.init(ve),N=new JM(W,oe,ve),me=new KM(W,oe,ve),Pe=new yS,L=new FM,y=new ZM(W,oe,me,L,ve,N,Pe),A=new hS(m),M=new mS(m),B=new Lb(W,ve),Y=new lS(W,oe,B,ve),X=new _S(W,B,Pe,Y),K=new SS(W,X,B,Pe),he=new wS(W,ve,y),E=new fS(L),ie=new NM(m,A,M,oe,ve,Y,E),pe=new iE(m,L),le=new BM,P=new WM(oe,ve),ae=new aS(m,A,me,K,u,o),H=new YM(m,K,ve),Te=new rE(W,Pe,ve,me),ye=new cS(W,oe,Pe,ve),Me=new vS(W,oe,Pe,ve),Pe.programs=ie.programs,m.capabilities=ve,m.extensions=oe,m.properties=L,m.renderLists=le,m.shadowMap=H,m.state=me,m.info=Pe}Le();const Ae=new nE(m,W);this.xr=Ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(C,I,!1))},this.getSize=function(R){return R.set(C,I)},this.setSize=function(R,ne,fe){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,I=ne,e.width=Math.floor(R*j),e.height=Math.floor(ne*j),fe!==!1&&(e.style.width=R+"px",e.style.height=ne+"px"),this.setViewport(0,0,R,ne)},this.getDrawingBufferSize=function(R){return R.set(C*j,I*j).floor()},this.setDrawingBufferSize=function(R,ne,fe){C=R,I=ne,j=fe,e.width=Math.floor(R*fe),e.height=Math.floor(ne*fe),this.setViewport(0,0,R,ne)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,ne,fe,J){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,ne,fe,J),me.viewport(T.copy(O).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,ne,fe,J){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,ne,fe,J),me.scissor(D.copy(F).multiplyScalar(j).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(R){me.setScissorTest(U=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){G=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,ne=!0,fe=!0){let J=0;R&&(J|=16384),ne&&(J|=256),fe&&(J|=1024),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Be,!1),le.dispose(),P.dispose(),L.dispose(),A.dispose(),M.dispose(),K.dispose(),Y.dispose(),Te.dispose(),ie.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Fe),Ae.removeEventListener("sessionend",rt),k&&(k.dispose(),k=null),dt.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const R=Pe.autoReset,ne=H.enabled,fe=H.autoUpdate,J=H.needsUpdate,de=H.type;Le(),Pe.autoReset=R,H.enabled=ne,H.autoUpdate=fe,H.needsUpdate=J,H.type=de}function Be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function V(R){const ne=R.target;ne.removeEventListener("dispose",V),Ce(ne)}function Ce(R){xe(R),L.remove(R)}function xe(R){const ne=L.get(R).programs;ne!==void 0&&(ne.forEach(function(fe){ie.releaseProgram(fe)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,ne,fe,J,de,Oe){ne===null&&(ne=ce);const ke=de.isMesh&&de.matrixWorld.determinant()<0,Ve=Ig(R,ne,fe,J,de);me.setMaterial(J,ke);let ze=fe.index;const Je=fe.attributes.position;if(ze===null){if(Je===void 0||Je.count===0)return}else if(ze.count===0)return;let $e=1;J.wireframe===!0&&(ze=X.getWireframeAttribute(fe),$e=2),Y.setup(de,J,Ve,fe,ze);let qe,ut=ye;ze!==null&&(qe=B.get(ze),ut=Me,ut.setIndex(qe));const Ei=ze!==null?ze.count:Je.count,rr=fe.drawRange.start*$e,sr=fe.drawRange.count*$e,xn=Oe!==null?Oe.start*$e:0,Ze=Oe!==null?Oe.count*$e:1/0,or=Math.max(rr,xn),mt=Math.min(Ei,rr+sr,xn+Ze)-1,Zt=Math.max(0,mt-or+1);if(Zt!==0){if(de.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*se()),ut.setMode(1)):ut.setMode(4);else if(de.isLine){let ei=J.linewidth;ei===void 0&&(ei=1),me.setLineWidth(ei*se()),de.isLineSegments?ut.setMode(1):de.isLineLoop?ut.setMode(2):ut.setMode(3)}else de.isPoints?ut.setMode(0):de.isSprite&&ut.setMode(4);if(de.isInstancedMesh)ut.renderInstances(or,Zt,de.count);else if(fe.isInstancedBufferGeometry){const ei=Math.min(fe.instanceCount,fe._maxInstanceCount);ut.renderInstances(or,Zt,ei)}else ut.render(or,Zt)}},this.compile=function(R,ne){function fe(J,de,Oe){J.transparent===!0&&J.side===mi?(J.side=qt,J.needsUpdate=!0,Ys(J,de,Oe),J.side=Vr,J.needsUpdate=!0,Ys(J,de,Oe),J.side=mi):Ys(J,de,Oe)}h=P.get(R),h.init(),g.push(h),R.traverseVisible(function(J){J.isLight&&J.layers.test(ne.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights(m.physicallyCorrectLights),R.traverse(function(J){const de=J.material;if(de)if(Array.isArray(de))for(let Oe=0;Oe<de.length;Oe++){const ke=de[Oe];fe(ke,R,J)}else fe(de,R,J)}),g.pop(),h=null};let ge=null;function Ee(R){ge&&ge(R)}function Fe(){dt.stop()}function rt(){dt.start()}const dt=new wm;dt.setAnimationLoop(Ee),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(R){ge=R,Ae.setAnimationLoop(R),R===null?dt.stop():dt.start()},Ae.addEventListener("sessionstart",Fe),Ae.addEventListener("sessionend",rt),this.render=function(R,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(ne),ne=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,ne,w),h=P.get(R,g.length),h.init(),g.push(h),ee.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),re.setFromProjectionMatrix(ee),q=this.localClippingEnabled,Z=E.init(this.clippingPlanes,q,ne),f=le.get(R,d.length),f.init(),d.push(f),Qn(R,ne,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(te,G),Z===!0&&E.beginShadows();const fe=h.state.shadowsArray;if(H.render(fe,R,ne),Z===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(f,R),h.setupLights(m.physicallyCorrectLights),ne.isArrayCamera){const J=ne.cameras;for(let de=0,Oe=J.length;de<Oe;de++){const ke=J[de];ct(f,R,ke,ke.viewport)}}else ct(f,R,ne);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(m,R,ne),Y.resetDefaultState(),b=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Qn(R,ne,fe,J){if(R.visible===!1)return;if(R.layers.test(ne.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(ne);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const ke=K.update(R),Ve=R.material;Ve.visible&&f.push(R,ke,Ve,fe,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Pe.render.frame&&(R.skeleton.update(),R.skeleton.frame=Pe.render.frame),!R.frustumCulled||re.intersectsObject(R))){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const ke=K.update(R),Ve=R.material;if(Array.isArray(Ve)){const ze=ke.groups;for(let Je=0,$e=ze.length;Je<$e;Je++){const qe=ze[Je],ut=Ve[qe.materialIndex];ut&&ut.visible&&f.push(R,ke,ut,fe,ue.z,qe)}}else Ve.visible&&f.push(R,ke,Ve,fe,ue.z,null)}}const Oe=R.children;for(let ke=0,Ve=Oe.length;ke<Ve;ke++)Qn(Oe[ke],ne,fe,J)}function ct(R,ne,fe,J){const de=R.opaque,Oe=R.transmissive,ke=R.transparent;h.setupLightsView(fe),Oe.length>0&&Dn(de,ne,fe),J&&me.viewport(T.copy(J)),de.length>0&&Kt(de,ne,fe),Oe.length>0&&Kt(Oe,ne,fe),ke.length>0&&Kt(ke,ne,fe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Dn(R,ne,fe){const J=ve.isWebGL2;k===null&&(k=new Si(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?ks:Ji,minFilter:ba,samples:J&&s===!0?4:0})),m.getDrawingBufferSize(Q),J?k.setSize(Q.x,Q.y):k.setSize(hc(Q.x),hc(Q.y));const de=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Oe=m.toneMapping;m.toneMapping=$n,Kt(R,ne,fe),m.toneMapping=Oe,y.updateMultisampleRenderTarget(k),y.updateRenderTargetMipmap(k),m.setRenderTarget(de)}function Kt(R,ne,fe){const J=ne.isScene===!0?ne.overrideMaterial:null;for(let de=0,Oe=R.length;de<Oe;de++){const ke=R[de],Ve=ke.object,ze=ke.geometry,Je=J===null?ke.material:J,$e=ke.group;Ve.layers.test(fe.layers)&&Og(Ve,ne,fe,ze,Je,$e)}}function Og(R,ne,fe,J,de,Oe){R.onBeforeRender(m,ne,fe,J,de,Oe),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),de.onBeforeRender(m,ne,fe,J,R,Oe),de.transparent===!0&&de.side===mi?(de.side=qt,de.needsUpdate=!0,m.renderBufferDirect(fe,ne,J,de,R,Oe),de.side=Vr,de.needsUpdate=!0,m.renderBufferDirect(fe,ne,J,de,R,Oe),de.side=mi):m.renderBufferDirect(fe,ne,J,de,R,Oe),R.onAfterRender(m,ne,fe,J,de,Oe)}function Ys(R,ne,fe){ne.isScene!==!0&&(ne=ce);const J=L.get(R),de=h.state.lights,Oe=h.state.shadowsArray,ke=de.state.version,Ve=ie.getParameters(R,de.state,Oe,ne,fe),ze=ie.getProgramCacheKey(Ve);let Je=J.programs;J.environment=R.isMeshStandardMaterial?ne.environment:null,J.fog=ne.fog,J.envMap=(R.isMeshStandardMaterial?M:A).get(R.envMap||J.environment),Je===void 0&&(R.addEventListener("dispose",V),Je=new Map,J.programs=Je);let $e=Je.get(ze);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===ke)return Ou(R,Ve),$e}else Ve.uniforms=ie.getUniforms(R),R.onBuild(fe,Ve,m),R.onBeforeCompile(Ve,m),$e=ie.acquireProgram(Ve,ze),Je.set(ze,$e),J.uniforms=Ve.uniforms;const qe=J.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=E.uniform),Ou(R,Ve),J.needsLights=Fg(R),J.lightsStateVersion=ke,J.needsLights&&(qe.ambientLightColor.value=de.state.ambient,qe.lightProbe.value=de.state.probe,qe.directionalLights.value=de.state.directional,qe.directionalLightShadows.value=de.state.directionalShadow,qe.spotLights.value=de.state.spot,qe.spotLightShadows.value=de.state.spotShadow,qe.rectAreaLights.value=de.state.rectArea,qe.ltc_1.value=de.state.rectAreaLTC1,qe.ltc_2.value=de.state.rectAreaLTC2,qe.pointLights.value=de.state.point,qe.pointLightShadows.value=de.state.pointShadow,qe.hemisphereLights.value=de.state.hemi,qe.directionalShadowMap.value=de.state.directionalShadowMap,qe.directionalShadowMatrix.value=de.state.directionalShadowMatrix,qe.spotShadowMap.value=de.state.spotShadowMap,qe.spotLightMatrix.value=de.state.spotLightMatrix,qe.spotLightMap.value=de.state.spotLightMap,qe.pointShadowMap.value=de.state.pointShadowMap,qe.pointShadowMatrix.value=de.state.pointShadowMatrix);const ut=$e.getUniforms(),Ei=Vo.seqWithValue(ut.seq,qe);return J.currentProgram=$e,J.uniformsList=Ei,$e}function Ou(R,ne){const fe=L.get(R);fe.outputEncoding=ne.outputEncoding,fe.instancing=ne.instancing,fe.skinning=ne.skinning,fe.morphTargets=ne.morphTargets,fe.morphNormals=ne.morphNormals,fe.morphColors=ne.morphColors,fe.morphTargetsCount=ne.morphTargetsCount,fe.numClippingPlanes=ne.numClippingPlanes,fe.numIntersection=ne.numClipIntersection,fe.vertexAlphas=ne.vertexAlphas,fe.vertexTangents=ne.vertexTangents,fe.toneMapping=ne.toneMapping}function Ig(R,ne,fe,J,de){ne.isScene!==!0&&(ne=ce),y.resetTextureUnits();const Oe=ne.fog,ke=J.isMeshStandardMaterial?ne.environment:null,Ve=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Qi,ze=(J.isMeshStandardMaterial?M:A).get(J.envMap||ke),Je=J.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,$e=!!J.normalMap&&!!fe.attributes.tangent,qe=!!fe.morphAttributes.position,ut=!!fe.morphAttributes.normal,Ei=!!fe.morphAttributes.color,rr=J.toneMapped?m.toneMapping:$n,sr=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,xn=sr!==void 0?sr.length:0,Ze=L.get(J),or=h.state.lights;if(Z===!0&&(q===!0||R!==x)){const Vt=R===x&&J.id===b;E.setState(J,R,Vt)}let mt=!1;J.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==or.state.version||Ze.outputEncoding!==Ve||de.isInstancedMesh&&Ze.instancing===!1||!de.isInstancedMesh&&Ze.instancing===!0||de.isSkinnedMesh&&Ze.skinning===!1||!de.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==ze||J.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==E.numPlanes||Ze.numIntersection!==E.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==$e||Ze.morphTargets!==qe||Ze.morphNormals!==ut||Ze.morphColors!==Ei||Ze.toneMapping!==rr||ve.isWebGL2===!0&&Ze.morphTargetsCount!==xn)&&(mt=!0):(mt=!0,Ze.__version=J.version);let Zt=Ze.currentProgram;mt===!0&&(Zt=Ys(J,ne,de));let ei=!1,is=!1,La=!1;const Dt=Zt.getUniforms(),Ti=Ze.uniforms;if(me.useProgram(Zt.program)&&(ei=!0,is=!0,La=!0),J.id!==b&&(b=J.id,is=!0),ei||x!==R){if(Dt.setValue(W,"projectionMatrix",R.projectionMatrix),ve.logarithmicDepthBuffer&&Dt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),x!==R&&(x=R,is=!0,La=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const Vt=Dt.map.cameraPosition;Vt!==void 0&&Vt.setValue(W,ue.setFromMatrixPosition(R.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Dt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||de.isSkinnedMesh)&&Dt.setValue(W,"viewMatrix",R.matrixWorldInverse)}if(de.isSkinnedMesh){Dt.setOptional(W,de,"bindMatrix"),Dt.setOptional(W,de,"bindMatrixInverse");const Vt=de.skeleton;Vt&&(ve.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Dt.setValue(W,"boneTexture",Vt.boneTexture,y),Dt.setValue(W,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ra=fe.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&ve.isWebGL2===!0)&&he.update(de,fe,J,Zt),(is||Ze.receiveShadow!==de.receiveShadow)&&(Ze.receiveShadow=de.receiveShadow,Dt.setValue(W,"receiveShadow",de.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ti.envMap.value=ze,Ti.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),is&&(Dt.setValue(W,"toneMappingExposure",m.toneMappingExposure),Ze.needsLights&&Ng(Ti,La),Oe&&J.fog===!0&&pe.refreshFogUniforms(Ti,Oe),pe.refreshMaterialUniforms(Ti,J,j,I,k),Vo.upload(W,Ze.uniformsList,Ti,y)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vo.upload(W,Ze.uniformsList,Ti,y),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Dt.setValue(W,"center",de.center),Dt.setValue(W,"modelViewMatrix",de.modelViewMatrix),Dt.setValue(W,"normalMatrix",de.normalMatrix),Dt.setValue(W,"modelMatrix",de.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Vt=J.uniformsGroups;for(let Da=0,kg=Vt.length;Da<kg;Da++)if(ve.isWebGL2){const Iu=Vt[Da];Te.update(Iu,Zt),Te.bind(Iu,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Ng(R,ne){R.ambientLightColor.needsUpdate=ne,R.lightProbe.needsUpdate=ne,R.directionalLights.needsUpdate=ne,R.directionalLightShadows.needsUpdate=ne,R.pointLights.needsUpdate=ne,R.pointLightShadows.needsUpdate=ne,R.spotLights.needsUpdate=ne,R.spotLightShadows.needsUpdate=ne,R.rectAreaLights.needsUpdate=ne,R.hemisphereLights.needsUpdate=ne}function Fg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,ne,fe){L.get(R.texture).__webglTexture=ne,L.get(R.depthTexture).__webglTexture=fe;const J=L.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=fe===void 0,J.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,ne){const fe=L.get(R);fe.__webglFramebuffer=ne,fe.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(R,ne=0,fe=0){w=R,_=ne,v=fe;let J=!0;if(R){const ze=L.get(R);ze.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),J=!1):ze.__webglFramebuffer===void 0?y.setupRenderTarget(R):ze.__hasExternalTextures&&y.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture)}let de=null,Oe=!1,ke=!1;if(R){const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(ke=!0);const Je=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(de=Je[ne],Oe=!0):ve.isWebGL2&&R.samples>0&&y.useMultisampledRTT(R)===!1?de=L.get(R).__webglMultisampledFramebuffer:de=Je,T.copy(R.viewport),D.copy(R.scissor),S=R.scissorTest}else T.copy(O).multiplyScalar(j).floor(),D.copy(F).multiplyScalar(j).floor(),S=U;if(me.bindFramebuffer(36160,de)&&ve.drawBuffers&&J&&me.drawBuffers(R,de),me.viewport(T),me.scissor(D),me.setScissorTest(S),Oe){const ze=L.get(R.texture);W.framebufferTexture2D(36160,36064,34069+ne,ze.__webglTexture,fe)}else if(ke){const ze=L.get(R.texture),Je=ne||0;W.framebufferTextureLayer(36160,36064,ze.__webglTexture,fe||0,Je)}b=-1},this.readRenderTargetPixels=function(R,ne,fe,J,de,Oe,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){me.bindFramebuffer(36160,Ve);try{const ze=R.texture,Je=ze.format,$e=ze.type;if(Je!==Pn&&N.convert(Je)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=$e===ks&&(oe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&oe.has("EXT_color_buffer_float"));if($e!==Ji&&N.convert($e)!==W.getParameter(35738)&&!($e===Vi&&(ve.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=R.width-J&&fe>=0&&fe<=R.height-de&&W.readPixels(ne,fe,J,de,N.convert(Je),N.convert($e),Oe)}finally{const ze=w!==null?L.get(w).__webglFramebuffer:null;me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(R,ne,fe=0){const J=Math.pow(2,-fe),de=Math.floor(ne.image.width*J),Oe=Math.floor(ne.image.height*J);y.setTexture2D(ne,0),W.copyTexSubImage2D(3553,fe,0,0,R.x,R.y,de,Oe),me.unbindTexture()},this.copyTextureToTexture=function(R,ne,fe,J=0){const de=ne.image.width,Oe=ne.image.height,ke=N.convert(fe.format),Ve=N.convert(fe.type);y.setTexture2D(fe,0),W.pixelStorei(37440,fe.flipY),W.pixelStorei(37441,fe.premultiplyAlpha),W.pixelStorei(3317,fe.unpackAlignment),ne.isDataTexture?W.texSubImage2D(3553,J,R.x,R.y,de,Oe,ke,Ve,ne.image.data):ne.isCompressedTexture?W.compressedTexSubImage2D(3553,J,R.x,R.y,ne.mipmaps[0].width,ne.mipmaps[0].height,ke,ne.mipmaps[0].data):W.texSubImage2D(3553,J,R.x,R.y,ke,Ve,ne.image),J===0&&fe.generateMipmaps&&W.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(R,ne,fe,J,de=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,ke=R.max.y-R.min.y+1,Ve=R.max.z-R.min.z+1,ze=N.convert(J.format),Je=N.convert(J.type);let $e;if(J.isData3DTexture)y.setTexture3D(J,0),$e=32879;else if(J.isDataArrayTexture)y.setTexture2DArray(J,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,J.flipY),W.pixelStorei(37441,J.premultiplyAlpha),W.pixelStorei(3317,J.unpackAlignment);const qe=W.getParameter(3314),ut=W.getParameter(32878),Ei=W.getParameter(3316),rr=W.getParameter(3315),sr=W.getParameter(32877),xn=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;W.pixelStorei(3314,xn.width),W.pixelStorei(32878,xn.height),W.pixelStorei(3316,R.min.x),W.pixelStorei(3315,R.min.y),W.pixelStorei(32877,R.min.z),fe.isDataTexture||fe.isData3DTexture?W.texSubImage3D($e,de,ne.x,ne.y,ne.z,Oe,ke,Ve,ze,Je,xn.data):fe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D($e,de,ne.x,ne.y,ne.z,Oe,ke,Ve,ze,xn.data)):W.texSubImage3D($e,de,ne.x,ne.y,ne.z,Oe,ke,Ve,ze,Je,xn),W.pixelStorei(3314,qe),W.pixelStorei(32878,ut),W.pixelStorei(3316,Ei),W.pixelStorei(3315,rr),W.pixelStorei(32877,sr),de===0&&J.generateMipmaps&&W.generateMipmap($e),me.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?y.setTextureCube(R,0):R.isData3DTexture?y.setTexture3D(R,0):R.isDataArrayTexture?y.setTexture2DArray(R,0):y.setTexture2D(R,0),me.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,me.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class oE extends Am{}oE.prototype.isWebGL1Renderer=!0;class aE extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class lE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new z;class Qo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class du extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Sr;const ls=new z,Mr=new z,Er=new z,Tr=new we,cs=new we,Cm=new ot,Mo=new z,us=new z,Eo=new z,Hh=new we,Ml=new we,Vh=new we;class Pm extends St{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Sr===void 0){Sr=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lE(t,5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute("position",new Qo(i,3,0,!1)),Sr.setAttribute("uv",new Qo(i,2,3,!1))}this.geometry=Sr,this.material=e!==void 0?e:new du,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),Cm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Er.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;To(Mo.set(-.5,-.5,0),Er,o,Mr,r,s),To(us.set(.5,-.5,0),Er,o,Mr,r,s),To(Eo.set(.5,.5,0),Er,o,Mr,r,s),Hh.set(0,0),Ml.set(1,0),Vh.set(1,1);let a=e.ray.intersectTriangle(Mo,us,Eo,!1,ls);if(a===null&&(To(us.set(-.5,.5,0),Er,o,Mr,r,s),Ml.set(0,1),a=e.ray.intersectTriangle(Mo,Eo,us,!1,ls),a===null))return;const l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||t.push({distance:l,point:ls.clone(),uv:Cn.getUV(ls,Mo,us,Eo,Hh,Ml,Vh,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function To(n,e,t,i,r,s){Tr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(cs.x=s*Tr.x-r*Tr.y,cs.y=r*Tr.x+s*Tr.y):cs.copy(Tr),n.copy(e),n.x+=cs.x,n.y+=cs.y,n.applyMatrix4(Cm)}class Lm extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gh=new z,Wh=new z,jh=new ot,El=new au,Ao=new wa;class cE extends St{constructor(e=new kt,t=new Lm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gh.fromBufferAttribute(t,r-1),Wh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gh.distanceTo(Wh);e.setAttribute("lineDistance",new pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,e.ray.intersectsSphere(Ao)===!1)return;jh.copy(r).invert(),El.copy(e.ray).applyMatrix4(jh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,f=new z,h=new z,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let w=_,b=v-1;w<b;w+=d){const x=g.getX(w),T=g.getX(w+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,T),El.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let w=_,b=v-1;w<b;w+=d){if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),El.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new we:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new z,r=[],s=[],o=[],a=new z,l=new ot;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(At(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(At(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rm extends Jn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new we,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uE extends Rm{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Co=new z,Tl=new pu,Al=new pu,Cl=new pu;class fE extends Jn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Co.subVectors(r[0],r[1]).add(r[0]),c=Co);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Co.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Co),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Tl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,m,p),Al.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,m,p),Cl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Al.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Cl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Tl.calc(l),Al.calc(l),Cl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $h(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function hE(n,e){const t=1-n;return t*t*e}function dE(n,e){return 2*(1-n)*n*e}function pE(n,e){return n*n*e}function Ts(n,e,t,i){return hE(n,e)+dE(n,t)+pE(n,i)}function mE(n,e){const t=1-n;return t*t*t*e}function gE(n,e){const t=1-n;return 3*t*t*n*e}function _E(n,e){return 3*(1-n)*n*n*e}function vE(n,e){return n*n*n*e}function As(n,e,t,i,r){return mE(n,e)+gE(n,t)+_E(n,i)+vE(n,r)}class yE extends Jn{constructor(e=new we,t=new we,i=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(As(e,r.x,s.x,o.x,a.x),As(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dm extends Jn{constructor(e=new z,t=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(As(e,r.x,s.x,o.x,a.x),As(e,r.y,s.y,o.y,a.y),As(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xE extends Jn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new we;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bE extends Jn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wE extends Jn{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ts(e,r.x,s.x,o.x),Ts(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends Jn{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ts(e,r.x,s.x,o.x),Ts(e,r.y,s.y,o.y),Ts(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SE extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set($h(a,l.x,c.x,u.x,f.x),$h(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var ME=Object.freeze({__proto__:null,ArcCurve:uE,CatmullRomCurve3:fE,CubicBezierCurve:yE,CubicBezierCurve3:Dm,EllipseCurve:Rm,LineCurve:xE,LineCurve3:bE,QuadraticBezierCurve:wE,QuadraticBezierCurve3:mu,SplineCurve:SE});class Ea extends kt{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const m=[],p=i/2;let _=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function v(){const b=new z,x=new z;let T=0;const D=(t-e)/i;for(let S=0;S<=s;S++){const C=[],I=S/s,j=I*(t-e)+e;for(let te=0;te<=r;te++){const G=te/r,O=G*l+a,F=Math.sin(O),U=Math.cos(O);x.x=j*F,x.y=-I*i+p,x.z=j*U,f.push(x.x,x.y,x.z),b.set(F,D,U).normalize(),h.push(b.x,b.y,b.z),d.push(G,1-I),C.push(g++)}m.push(C)}for(let S=0;S<r;S++)for(let C=0;C<s;C++){const I=m[C][S],j=m[C+1][S],te=m[C+1][S+1],G=m[C][S+1];u.push(I,j,G),u.push(j,te,G),T+=6}c.addGroup(_,T,0),_+=T}function w(b){const x=g,T=new we,D=new z;let S=0;const C=b===!0?e:t,I=b===!0?1:-1;for(let te=1;te<=r;te++)f.push(0,p*I,0),h.push(0,I,0),d.push(.5,.5),g++;const j=g;for(let te=0;te<=r;te++){const O=te/r*l+a,F=Math.cos(O),U=Math.sin(O);D.x=C*U,D.y=p*I,D.z=C*F,f.push(D.x,D.y,D.z),h.push(0,I,0),T.x=F*.5+.5,T.y=U*.5*I+.5,d.push(T.x,T.y),g++}for(let te=0;te<r;te++){const G=x+te,O=j+te;b===!0?u.push(O,O+1,G):u.push(O+1,O,G),S+=3}c.addGroup(_,S,b===!0?1:2),_+=S}}static fromJSON(e){return new Ea(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gu extends Ea{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new gu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,d=[],g=[],m=[],p=[];for(let _=0;_<=i;_++){const v=[],w=_/i;let b=0;_==0&&o==0?b=.5/t:_==i&&l==Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const T=x/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+w*a),f.y=e*Math.cos(o+w*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),p.push(T+b,1-w),v.push(c++)}u.push(v)}for(let _=0;_<i;_++)for(let v=0;v<t;v++){const w=u[_][v+1],b=u[_][v],x=u[_+1][v],T=u[_+1][v+1];(_!==0||o>0)&&d.push(w,b,T),(_!==i-1||l<Math.PI)&&d.push(b,x,T)}this.setIndex(d),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(p,2))}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _u extends kt{constructor(e=new mu(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new we;let u=new z;const f=[],h=[],d=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function m(){for(let w=0;w<t;w++)p(w);p(s===!1?t:0),v(),_()}function p(w){u=e.getPointAt(w/t,u);const b=o.normals[w],x=o.binormals[w];for(let T=0;T<=r;T++){const D=T/r*Math.PI*2,S=Math.sin(D),C=-Math.cos(D);l.x=C*b.x+S*x.x,l.y=C*b.y+S*x.y,l.z=C*b.z+S*x.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function _(){for(let w=1;w<=t;w++)for(let b=1;b<=r;b++){const x=(r+1)*(w-1)+(b-1),T=(r+1)*w+(b-1),D=(r+1)*w+b,S=(r+1)*(w-1)+b;g.push(x,T,S),g.push(T,D,S)}}function v(){for(let w=0;w<=t;w++)for(let b=0;b<=r;b++)c.x=w/t,c.y=b/r,d.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _u(new ME[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class EE extends ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fm,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const qh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class TE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const AE=new TE;class Om{constructor(e){this.manager=e!==void 0?e:AE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class CE extends Om{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Bs("img");function l(){u(),qh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Im extends Om{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,o=new CE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Nm extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pl=new ot,Xh=new z,Yh=new z;class PE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LE extends PE{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RE extends Nm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DefaultUp),this.updateMatrix(),this.target=new St,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DE extends Nm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kh(){return(typeof performance>"u"?Date:performance).now()}class km{constructor(e,t,i=0,r=1/0){this.ray=new au(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new lu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return pc(e,this,i,t),i.sort(Zh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pc(e[r],this,i,t);return i.sort(Zh),i}}function Zh(n,e){return n.distance-e.distance}function pc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)pc(r[s],e,t,!0)}}class mc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=su);const Ar=new pi,fi=new km,fs=new we,Jh=new z,Po=new z,Ll=new z,Qh=new ot;class OE extends yn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,s=null;const o=[],a=this;function l(){i.addEventListener("pointermove",d),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",m),i.addEventListener("pointerleave",m)}function c(){i.removeEventListener("pointermove",d),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",m),i.removeEventListener("pointerleave",m),i.style.cursor=""}function u(){c()}function f(){return e}function h(){return fi}function d(_){if(a.enabled!==!1){if(p(_),fi.setFromCamera(fs,t),r){fi.ray.intersectPlane(Ar,Po)&&r.position.copy(Po.sub(Jh).applyMatrix4(Qh)),a.dispatchEvent({type:"drag",object:r});return}if(_.pointerType==="mouse"||_.pointerType==="pen")if(o.length=0,fi.setFromCamera(fs,t),fi.intersectObjects(e,!0,o),o.length>0){const v=o[0].object;Ar.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ar.normal),Ll.setFromMatrixPosition(v.matrixWorld)),s!==v&&s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null),s!==v&&(a.dispatchEvent({type:"hoveron",object:v}),i.style.cursor="pointer",s=v)}else s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null)}}function g(_){a.enabled!==!1&&(p(_),o.length=0,fi.setFromCamera(fs,t),fi.intersectObjects(e,!0,o),o.length>0&&(r=a.transformGroup===!0?e[0]:o[0].object,Ar.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ar.normal),Ll.setFromMatrixPosition(r.matrixWorld)),fi.ray.intersectPlane(Ar,Po)&&(Qh.copy(r.parent.matrixWorld).invert(),Jh.copy(Po).sub(Ll.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function m(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=s?"pointer":"auto")}function p(_){const v=i.getBoundingClientRect();fs.x=(_.clientX-v.left)/v.width*2-1,fs.y=-(_.clientY-v.top)/v.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=f,this.getRaycaster=h}}function IE(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=i.length,l,c=0,u=0,f=0;for(o=0;o<a;++o)l=i[o],c+=l.x||0,u+=l.y||0,f+=l.z||0;for(c=(c/a-n)*r,u=(u/a-e)*r,f=(f/a-t)*r,o=0;o<a;++o)l=i[o],c&&(l.x-=c),u&&(l.y-=u),f&&(l.z-=f)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(n=+o,s):n},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function NE(n){var e=+this._x.call(null,n);return Bm(this.cover(e),e,n)}function Bm(n,e,t){if(isNaN(e))return n;var i,r=n._root,s={data:t},o=n._x0,a=n._x1,l,c,u,f,h;if(!r)return n._root=s,n;for(;r.length;)if((u=e>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[f=+u]))return i[f]=s,n;if(c=+n._x.call(null,r.data),e===c)return s.next=r,i?i[f]=s:n._root=s,n;do i=i?i[f]=new Array(2):n._root=new Array(2),(u=e>=(l=(o+a)/2))?o=l:a=l;while((f=+u)==(h=+(c>=l)));return i[h]=r,i[f]=s,n}function FE(n){var e,t=n.length,i,r=new Array(t),s=1/0,o=-1/0;for(e=0;e<t;++e)isNaN(i=+this._x.call(null,n[e]))||(r[e]=i,i<s&&(s=i),i>o&&(o=i));if(s>o)return this;for(this.cover(s).cover(o),e=0;e<t;++e)Bm(this,r[e],n[e]);return this}function kE(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,s,o;e>n||n>=t;)switch(o=+(n<e),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function BE(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function zE(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function qn(n,e,t){this.node=n,this.x0=e,this.x1=t}function UE(n,e){var t,i=this._x0,r,s,o=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new qn(l,i,o)),e==null?e=1/0:(i=n-e,o=n+e);c=a.pop();)if(!(!(l=c.node)||(r=c.x0)>o||(s=c.x1)<i))if(l.length){var f=(r+s)/2;a.push(new qn(l[1],f,s),new qn(l[0],r,f)),(u=+(n>=f))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var h=Math.abs(n-+this._x.call(null,l.data));h<e&&(e=h,i=n-h,o=n+h,t=l.data)}return t}function HE(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._x1,l,c,u,f,h;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(o+a)/2))?o=c:a=c,e=t,!(t=t[f=+u]))return this;if(!t.length)break;e[f+1&1]&&(i=e,h=f)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[f]=s:delete e[f],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=s,this)}function VE(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function GE(){return this._root}function WE(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function jE(n){var e=[],t,i=this._root,r,s,o;for(i&&e.push(new qn(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&e.push(new qn(r,a,o)),(r=i[0])&&e.push(new qn(r,s,a))}return this}function $E(n){var e=[],t=[],i;for(this._root&&e.push(new qn(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&e.push(new qn(s,o,l)),(s=r[1])&&e.push(new qn(s,l,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function qE(n){return n[0]}function XE(n){return arguments.length?(this._x=n,this):this._x}function zm(n,e){var t=new vu(e==null?qE:e,NaN,NaN);return n==null?t:t.addAll(n)}function vu(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function ed(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ht=zm.prototype=vu.prototype;Ht.copy=function(){var n=new vu(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=ed(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=ed(i));return n};Ht.add=NE;Ht.addAll=FE;Ht.cover=kE;Ht.data=BE;Ht.extent=zE;Ht.find=UE;Ht.remove=HE;Ht.removeAll=VE;Ht.root=GE;Ht.size=WE;Ht.visit=jE;Ht.visitAfter=$E;Ht.x=XE;function YE(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Um(this.cover(e,t),e,t,n)}function Um(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,u=n._y1,f,h,d,g,m,p,_,v;if(!s)return n._root=o,n;for(;s.length;)if((m=e>=(f=(a+c)/2))?a=f:c=f,(p=t>=(h=(l+u)/2))?l=h:u=h,r=s,!(s=s[_=p<<1|m]))return r[_]=o,n;if(d=+n._x.call(null,s.data),g=+n._y.call(null,s.data),e===d&&t===g)return o.next=s,r?r[_]=o:n._root=o,n;do r=r?r[_]=new Array(4):n._root=new Array(4),(m=e>=(f=(a+c)/2))?a=f:c=f,(p=t>=(h=(l+u)/2))?l=h:u=h;while((_=p<<1|m)===(v=(g>=h)<<1|d>=f));return r[v]=s,r[_]=o,n}function KE(n){var e,t,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(o[t]=r,a[t]=s,r<l&&(l=r),r>u&&(u=r),s<c&&(c=s),s>f&&(f=s));if(l>u||c>f)return this;for(this.cover(l,c).cover(u,f),t=0;t<i;++t)Um(this,o[t],a[t],n[t]);return this}function ZE(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var o=r-t||1,a=this._root,l,c;t>n||n>=r||i>e||e>=s;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=t+o,s=i+o;break;case 1:t=r-o,s=i+o;break;case 2:r=t+o,i=s-o;break;case 3:t=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function JE(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function QE(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Nt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function eT(n,e,t){var i,r=this._x0,s=this._y0,o,a,l,c,u=this._x1,f=this._y1,h=[],d=this._root,g,m;for(d&&h.push(new Nt(d,r,s,u,f)),t==null?t=1/0:(r=n-t,s=e-t,u=n+t,f=e+t,t*=t);g=h.pop();)if(!(!(d=g.node)||(o=g.x0)>u||(a=g.y0)>f||(l=g.x1)<r||(c=g.y1)<s))if(d.length){var p=(o+l)/2,_=(a+c)/2;h.push(new Nt(d[3],p,_,l,c),new Nt(d[2],o,_,p,c),new Nt(d[1],p,a,l,_),new Nt(d[0],o,a,p,_)),(m=(e>=_)<<1|n>=p)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-m],h[h.length-1-m]=g)}else{var v=n-+this._x.call(null,d.data),w=e-+this._y.call(null,d.data),b=v*v+w*w;if(b<t){var x=Math.sqrt(t=b);r=n-x,s=e-x,u=n+x,f=e+x,i=d.data}}return i}function tT(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,f,h,d,g,m,p,_;if(!t)return this;if(t.length)for(;;){if((g=u>=(h=(o+l)/2))?o=h:l=h,(m=f>=(d=(a+c)/2))?a=d:c=d,e=t,!(t=t[p=m<<1|g]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,_=p)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[p]=s:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[_]=t:this._root=t),this):(this._root=s,this)}function nT(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function iT(){return this._root}function rT(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function sT(n){var e=[],t,i=this._root,r,s,o,a,l;for(i&&e.push(new Nt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.x1,l=t.y1)&&i.length){var c=(s+a)/2,u=(o+l)/2;(r=i[3])&&e.push(new Nt(r,c,u,a,l)),(r=i[2])&&e.push(new Nt(r,s,u,c,l)),(r=i[1])&&e.push(new Nt(r,c,o,a,u)),(r=i[0])&&e.push(new Nt(r,s,o,c,u))}return this}function oT(n){var e=[],t=[],i;for(this._root&&e.push(new Nt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,u=(o+l)/2,f=(a+c)/2;(s=r[0])&&e.push(new Nt(s,o,a,u,f)),(s=r[1])&&e.push(new Nt(s,u,a,l,f)),(s=r[2])&&e.push(new Nt(s,o,f,u,c)),(s=r[3])&&e.push(new Nt(s,u,f,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function aT(n){return n[0]}function lT(n){return arguments.length?(this._x=n,this):this._x}function cT(n){return n[1]}function uT(n){return arguments.length?(this._y=n,this):this._y}function Hm(n,e,t){var i=new yu(e==null?aT:e,t==null?cT:t,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function yu(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function td(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Bt=Hm.prototype=yu.prototype;Bt.copy=function(){var n=new yu(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=td(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=td(i));return n};Bt.add=YE;Bt.addAll=KE;Bt.cover=ZE;Bt.data=JE;Bt.extent=QE;Bt.find=eT;Bt.remove=tT;Bt.removeAll=nT;Bt.root=iT;Bt.size=rT;Bt.visit=sT;Bt.visitAfter=oT;Bt.x=lT;Bt.y=uT;function fT(n){var e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Vm(this.cover(e,t,i),e,t,i,n)}function Vm(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var s,o=n._root,a={data:r},l=n._x0,c=n._y0,u=n._z0,f=n._x1,h=n._y1,d=n._z1,g,m,p,_,v,w,b,x,T,D,S;if(!o)return n._root=a,n;for(;o.length;)if((b=e>=(g=(l+f)/2))?l=g:f=g,(x=t>=(m=(c+h)/2))?c=m:h=m,(T=i>=(p=(u+d)/2))?u=p:d=p,s=o,!(o=o[D=T<<2|x<<1|b]))return s[D]=a,n;if(_=+n._x.call(null,o.data),v=+n._y.call(null,o.data),w=+n._z.call(null,o.data),e===_&&t===v&&i===w)return a.next=o,s?s[D]=a:n._root=a,n;do s=s?s[D]=new Array(8):n._root=new Array(8),(b=e>=(g=(l+f)/2))?l=g:f=g,(x=t>=(m=(c+h)/2))?c=m:h=m,(T=i>=(p=(u+d)/2))?u=p:d=p;while((D=T<<2|x<<1|b)===(S=(w>=p)<<2|(v>=m)<<1|_>=g));return s[S]=o,s[D]=a,n}function hT(n){var e,t,i=n.length,r,s,o,a=new Array(i),l=new Array(i),c=new Array(i),u=1/0,f=1/0,h=1/0,d=-1/0,g=-1/0,m=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||isNaN(o=+this._z.call(null,e))||(a[t]=r,l[t]=s,c[t]=o,r<u&&(u=r),r>d&&(d=r),s<f&&(f=s),s>g&&(g=s),o<h&&(h=o),o>m&&(m=o));if(u>d||f>g||h>m)return this;for(this.cover(u,f,h).cover(d,g,m),t=0;t<i;++t)Vm(this,a[t],l[t],c[t],n[t]);return this}function dT(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,l=(s=Math.floor(t))+1;else{for(var c=o-i||1,u=this._root,f,h;i>n||n>=o||r>e||e>=a||s>t||t>=l;)switch(h=(t<s)<<2|(e<r)<<1|n<i,f=new Array(8),f[h]=u,u=f,c*=2,h){case 0:o=i+c,a=r+c,l=s+c;break;case 1:i=o-c,a=r+c,l=s+c;break;case 2:o=i+c,r=a-c,l=s+c;break;case 3:i=o-c,r=a-c,l=s+c;break;case 4:o=i+c,a=r+c,s=l-c;break;case 5:i=o-c,a=r+c,s=l-c;break;case 6:o=i+c,r=a-c,s=l-c;break;case 7:i=o-c,r=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function pT(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function mT(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function tt(n,e,t,i,r,s,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function gT(n,e,t,i){var r,s=this._x0,o=this._y0,a=this._z0,l,c,u,f,h,d,g=this._x1,m=this._y1,p=this._z1,_=[],v=this._root,w,b;for(v&&_.push(new tt(v,s,o,a,g,m,p)),i==null?i=1/0:(s=n-i,o=e-i,a=t-i,g=n+i,m=e+i,p=t+i,i*=i);w=_.pop();)if(!(!(v=w.node)||(l=w.x0)>g||(c=w.y0)>m||(u=w.z0)>p||(f=w.x1)<s||(h=w.y1)<o||(d=w.z1)<a))if(v.length){var x=(l+f)/2,T=(c+h)/2,D=(u+d)/2;_.push(new tt(v[7],x,T,D,f,h,d),new tt(v[6],l,T,D,x,h,d),new tt(v[5],x,c,D,f,T,d),new tt(v[4],l,c,D,x,T,d),new tt(v[3],x,T,u,f,h,D),new tt(v[2],l,T,u,x,h,D),new tt(v[1],x,c,u,f,T,D),new tt(v[0],l,c,u,x,T,D)),(b=(t>=D)<<2|(e>=T)<<1|n>=x)&&(w=_[_.length-1],_[_.length-1]=_[_.length-1-b],_[_.length-1-b]=w)}else{var S=n-+this._x.call(null,v.data),C=e-+this._y.call(null,v.data),I=t-+this._z.call(null,v.data),j=S*S+C*C+I*I;if(j<i){var te=Math.sqrt(i=j);s=n-te,o=e-te,a=t-te,g=n+te,m=e+te,p=t+te,r=v.data}}return r}function _T(n){if(isNaN(h=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,f=this._z1,h,d,g,m,p,_,v,w,b,x,T;if(!t)return this;if(t.length)for(;;){if((v=h>=(m=(o+c)/2))?o=m:c=m,(w=d>=(p=(a+u)/2))?a=p:u=p,(b=g>=(_=(l+f)/2))?l=_:f=_,e=t,!(t=t[x=b<<2|w<<1|v]))return this;if(!t.length)break;(e[x+1&7]||e[x+2&7]||e[x+3&7]||e[x+4&7]||e[x+5&7]||e[x+6&7]||e[x+7&7])&&(i=e,T=x)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[x]=s:delete e[x],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[T]=t:this._root=t),this):(this._root=s,this)}function vT(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function yT(){return this._root}function xT(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function bT(n){var e=[],t,i=this._root,r,s,o,a,l,c,u;for(i&&e.push(new tt(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.z0,l=t.x1,c=t.y1,u=t.z1)&&i.length){var f=(s+l)/2,h=(o+c)/2,d=(a+u)/2;(r=i[7])&&e.push(new tt(r,f,h,d,l,c,u)),(r=i[6])&&e.push(new tt(r,s,h,d,f,c,u)),(r=i[5])&&e.push(new tt(r,f,o,d,l,h,u)),(r=i[4])&&e.push(new tt(r,s,o,d,f,h,u)),(r=i[3])&&e.push(new tt(r,f,h,a,l,c,d)),(r=i[2])&&e.push(new tt(r,s,h,a,f,c,d)),(r=i[1])&&e.push(new tt(r,f,o,a,l,h,d)),(r=i[0])&&e.push(new tt(r,s,o,a,f,h,d))}return this}function wT(n){var e=[],t=[],i;for(this._root&&e.push(new tt(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,c=i.x1,u=i.y1,f=i.z1,h=(o+c)/2,d=(a+u)/2,g=(l+f)/2;(s=r[0])&&e.push(new tt(s,o,a,l,h,d,g)),(s=r[1])&&e.push(new tt(s,h,a,l,c,d,g)),(s=r[2])&&e.push(new tt(s,o,d,l,h,u,g)),(s=r[3])&&e.push(new tt(s,h,d,l,c,u,g)),(s=r[4])&&e.push(new tt(s,o,a,g,h,d,f)),(s=r[5])&&e.push(new tt(s,h,a,g,c,d,f)),(s=r[6])&&e.push(new tt(s,o,d,g,h,u,f)),(s=r[7])&&e.push(new tt(s,h,d,g,c,u,f))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function ST(n){return n[0]}function MT(n){return arguments.length?(this._x=n,this):this._x}function ET(n){return n[1]}function TT(n){return arguments.length?(this._y=n,this):this._y}function AT(n){return n[2]}function CT(n){return arguments.length?(this._z=n,this):this._z}function Gm(n,e,t,i){var r=new xu(e==null?ST:e,t==null?ET:t,i==null?AT:i,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function xu(n,e,t,i,r,s,o,a,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function nd(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Rt=Gm.prototype=xu.prototype;Rt.copy=function(){var n=new xu(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=nd(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=nd(i));return n};Rt.add=fT;Rt.addAll=hT;Rt.cover=dT;Rt.data=pT;Rt.extent=mT;Rt.find=gT;Rt.remove=_T;Rt.removeAll=vT;Rt.root=yT;Rt.size=xT;Rt.visit=bT;Rt.visitAfter=wT;Rt.x=MT;Rt.y=TT;Rt.z=CT;function Gn(n){return function(){return n}}function Vn(n){return(n()-.5)*1e-6}function PT(n){return n.index}function id(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function LT(n){var e=PT,t=h,i,r=Gn(30),s,o,a,l,c,u,f=1;n==null&&(n=[]);function h(_){return 1/Math.min(l[_.source.index],l[_.target.index])}function d(_){for(var v=0,w=n.length;v<f;++v)for(var b=0,x,T,D,S=0,C=0,I=0,j,te;b<w;++b)x=n[b],T=x.source,D=x.target,S=D.x+D.vx-T.x-T.vx||Vn(u),a>1&&(C=D.y+D.vy-T.y-T.vy||Vn(u)),a>2&&(I=D.z+D.vz-T.z-T.vz||Vn(u)),j=Math.sqrt(S*S+C*C+I*I),j=(j-s[b])/j*_*i[b],S*=j,C*=j,I*=j,D.vx-=S*(te=c[b]),a>1&&(D.vy-=C*te),a>2&&(D.vz-=I*te),T.vx+=S*(te=1-te),a>1&&(T.vy+=C*te),a>2&&(T.vz+=I*te)}function g(){if(!!o){var _,v=o.length,w=n.length,b=new Map(o.map((T,D)=>[e(T,D,o),T])),x;for(_=0,l=new Array(v);_<w;++_)x=n[_],x.index=_,typeof x.source!="object"&&(x.source=id(b,x.source)),typeof x.target!="object"&&(x.target=id(b,x.target)),l[x.source.index]=(l[x.source.index]||0)+1,l[x.target.index]=(l[x.target.index]||0)+1;for(_=0,c=new Array(w);_<w;++_)x=n[_],c[_]=l[x.source.index]/(l[x.source.index]+l[x.target.index]);i=new Array(w),m(),s=new Array(w),p()}}function m(){if(!!o)for(var _=0,v=n.length;_<v;++_)i[_]=+t(n[_],_,n)}function p(){if(!!o)for(var _=0,v=n.length;_<v;++_)s[_]=+r(n[_],_,n)}return d.initialize=function(_,...v){o=_,u=v.find(w=>typeof w=="function")||Math.random,a=v.find(w=>[1,2,3].includes(w))||2,g()},d.links=function(_){return arguments.length?(n=_,g(),d):n},d.id=function(_){return arguments.length?(e=_,d):e},d.iterations=function(_){return arguments.length?(f=+_,d):f},d.strength=function(_){return arguments.length?(t=typeof _=="function"?_:Gn(+_),m(),d):t},d.distance=function(_){return arguments.length?(r=typeof _=="function"?_:Gn(+_),p(),d):r},d}var RT={value:()=>{}};function Wm(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Go(t)}function Go(n){this._=n}function DT(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Go.prototype=Wm.prototype={constructor:Go,on:function(n,e){var t=this._,i=DT(n+"",t),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=OT(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(n=i[s]).type)t[r]=rd(t[r],n.name,e);else if(e==null)for(r in t)t[r]=rd(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Go(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function OT(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function rd(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=RT,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var qr=0,bs=0,hs=0,jm=1e3,ea,ws,ta=0,er=0,Aa=0,zs=typeof performance=="object"&&performance.now?performance:Date,$m=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function qm(){return er||($m(IT),er=zs.now()+Aa)}function IT(){er=0}function gc(){this._call=this._time=this._next=null}gc.prototype=Xm.prototype={constructor:gc,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?qm():+t)+(e==null?0:+e),!this._next&&ws!==this&&(ws?ws._next=this:ea=this,ws=this),this._call=n,this._time=t,_c()},stop:function(){this._call&&(this._call=null,this._time=1/0,_c())}};function Xm(n,e,t){var i=new gc;return i.restart(n,e,t),i}function NT(){qm(),++qr;for(var n=ea,e;n;)(e=er-n._time)>=0&&n._call.call(void 0,e),n=n._next;--qr}function sd(){er=(ta=zs.now())+Aa,qr=bs=0;try{NT()}finally{qr=0,kT(),er=0}}function FT(){var n=zs.now(),e=n-ta;e>jm&&(Aa-=e,ta=n)}function kT(){for(var n,e=ea,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ea=t);ws=n,_c(i)}function _c(n){if(!qr){bs&&(bs=clearTimeout(bs));var e=n-er;e>24?(n<1/0&&(bs=setTimeout(sd,n-zs.now()-Aa)),hs&&(hs=clearInterval(hs))):(hs||(ta=zs.now(),hs=setInterval(FT,jm)),qr=1,$m(sd))}}const BT=1664525,zT=1013904223,od=4294967296;function UT(){let n=1;return()=>(n=(BT*n+zT)%od)/od}var ad=3;function Rl(n){return n.x}function ld(n){return n.y}function HT(n){return n.z}var VT=10,GT=Math.PI*(3-Math.sqrt(5)),WT=Math.PI*20/(9+Math.sqrt(221));function jT(n,e){e=e||2;var t=Math.min(ad,Math.max(1,Math.round(e))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,u=Xm(d),f=Wm("tick","end"),h=UT();n==null&&(n=[]);function d(){g(),f.call("tick",i),r<s&&(u.stop(),f.call("end",i))}function g(_){var v,w=n.length,b;_===void 0&&(_=1);for(var x=0;x<_;++x)for(r+=(a-r)*o,c.forEach(function(T){T(r)}),v=0;v<w;++v)b=n[v],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return i}function m(){for(var _=0,v=n.length,w;_<v;++_){if(w=n[_],w.index=_,w.fx!=null&&(w.x=w.fx),w.fy!=null&&(w.y=w.fy),w.fz!=null&&(w.z=w.fz),isNaN(w.x)||t>1&&isNaN(w.y)||t>2&&isNaN(w.z)){var b=VT*(t>2?Math.cbrt(.5+_):t>1?Math.sqrt(.5+_):_),x=_*GT,T=_*WT;t===1?w.x=b:t===2?(w.x=b*Math.cos(x),w.y=b*Math.sin(x)):(w.x=b*Math.sin(x)*Math.cos(T),w.y=b*Math.cos(x),w.z=b*Math.sin(x)*Math.sin(T))}(isNaN(w.vx)||t>1&&isNaN(w.vy)||t>2&&isNaN(w.vz))&&(w.vx=0,t>1&&(w.vy=0),t>2&&(w.vz=0))}}function p(_){return _.initialize&&_.initialize(n,h,t),_}return m(),i={tick:g,restart:function(){return u.restart(d),i},stop:function(){return u.stop(),i},numDimensions:function(_){return arguments.length?(t=Math.min(ad,Math.max(1,Math.round(_))),c.forEach(p),i):t},nodes:function(_){return arguments.length?(n=_,m(),c.forEach(p),i):n},alpha:function(_){return arguments.length?(r=+_,i):r},alphaMin:function(_){return arguments.length?(s=+_,i):s},alphaDecay:function(_){return arguments.length?(o=+_,i):+o},alphaTarget:function(_){return arguments.length?(a=+_,i):a},velocityDecay:function(_){return arguments.length?(l=1-_,i):1-l},randomSource:function(_){return arguments.length?(h=_,c.forEach(p),i):h},force:function(_,v){return arguments.length>1?(v==null?c.delete(_):c.set(_,p(v)),i):c.get(_)},find:function(){var _=Array.prototype.slice.call(arguments),v=_.shift()||0,w=(t>1?_.shift():null)||0,b=(t>2?_.shift():null)||0,x=_.shift()||1/0,T=0,D=n.length,S,C,I,j,te,G;for(x*=x,T=0;T<D;++T)te=n[T],S=v-te.x,C=w-(te.y||0),I=b-(te.z||0),j=S*S+C*C+I*I,j<x&&(G=te,x=j);return G},on:function(_,v){return arguments.length>1?(f.on(_,v),i):f.on(_)}}}function $T(){var n,e,t,i,r,s=Gn(-30),o,a=1,l=1/0,c=.81;function u(g){var m,p=n.length,_=(e===1?zm(n,Rl):e===2?Hm(n,Rl,ld):e===3?Gm(n,Rl,ld,HT):null).visitAfter(h);for(r=g,m=0;m<p;++m)t=n[m],_.visit(d)}function f(){if(!!n){var g,m=n.length,p;for(o=new Array(m),g=0;g<m;++g)p=n[g],o[p.index]=+s(p,g,n)}}function h(g){var m=0,p,_,v=0,w,b,x,T,D=g.length;if(D){for(w=b=x=T=0;T<D;++T)(p=g[T])&&(_=Math.abs(p.value))&&(m+=p.value,v+=_,w+=_*(p.x||0),b+=_*(p.y||0),x+=_*(p.z||0));m*=Math.sqrt(4/D),g.x=w/v,e>1&&(g.y=b/v),e>2&&(g.z=x/v)}else{p=g,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do m+=o[p.data.index];while(p=p.next)}g.value=m}function d(g,m,p,_,v){if(!g.value)return!0;var w=[p,_,v][e-1],b=g.x-t.x,x=e>1?g.y-t.y:0,T=e>2?g.z-t.z:0,D=w-m,S=b*b+x*x+T*T;if(D*D/c<S)return S<l&&(b===0&&(b=Vn(i),S+=b*b),e>1&&x===0&&(x=Vn(i),S+=x*x),e>2&&T===0&&(T=Vn(i),S+=T*T),S<a&&(S=Math.sqrt(a*S)),t.vx+=b*g.value*r/S,e>1&&(t.vy+=x*g.value*r/S),e>2&&(t.vz+=T*g.value*r/S)),!0;if(g.length||S>=l)return;(g.data!==t||g.next)&&(b===0&&(b=Vn(i),S+=b*b),e>1&&x===0&&(x=Vn(i),S+=x*x),e>2&&T===0&&(T=Vn(i),S+=T*T),S<a&&(S=Math.sqrt(a*S)));do g.data!==t&&(D=o[g.data.index]*r/S,t.vx+=b*D,e>1&&(t.vy+=x*D),e>2&&(t.vz+=T*D));while(g=g.next)}return u.initialize=function(g,...m){n=g,i=m.find(p=>typeof p=="function")||Math.random,e=m.find(p=>[1,2,3].includes(p))||2,f()},u.strength=function(g){return arguments.length?(s=typeof g=="function"?g:Gn(+g),f(),u):s},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function qT(n,e,t,i){var r,s,o=Gn(.1),a,l;typeof n!="function"&&(n=Gn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function c(f){for(var h=0,d=r.length;h<d;++h){var g=r[h],m=g.x-e||1e-6,p=(g.y||0)-t||1e-6,_=(g.z||0)-i||1e-6,v=Math.sqrt(m*m+p*p+_*_),w=(l[h]-v)*a[h]*f/v;g.vx+=m*w,s>1&&(g.vy+=p*w),s>2&&(g.vz+=_*w)}}function u(){if(!!r){var f,h=r.length;for(a=new Array(h),l=new Array(h),f=0;f<h;++f)l[f]=+n(r[f],f,r),a[f]=isNaN(l[f])?0:+o(r[f],f,r)}}return c.initialize=function(f,...h){r=f,s=h.find(d=>[1,2,3].includes(d))||2,u()},c.strength=function(f){return arguments.length?(o=typeof f=="function"?f:Gn(+f),u(),c):o},c.radius=function(f){return arguments.length?(n=typeof f=="function"?f:Gn(+f),u(),c):n},c.x=function(f){return arguments.length?(e=+f,c):e},c.y=function(f){return arguments.length?(t=+f,c):t},c.z=function(f){return arguments.length?(i=+f,c):i},c}var bu=function(e){YT(e);var t=XT(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function XT(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var s=e[t];return s||(s=e[t]=[]),s.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var s=typeof i!="function";if(s)delete e[t];else for(var o=e[t],a=0;a<o.length;++a)o[a].callback===i&&o.splice(a,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var s=0;s<i.length;++s){var o=i[s];o.callback.apply(o.ctx,r)}return n}}}function YT(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var KT=JT,ZT=bu;function JT(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,s=n.multigraph?b:w,o=[],a=U,l=U,c=U,u=U,f={version:20,addNode:m,addLink:v,removeLink:S,removeNode:_,getNode:p,getNodeCount:x,getLinkCount:T,getEdgeCount:T,getLinksCount:T,getNodesCount:x,getLinks:D,forEachNode:q,forEachLinkedNode:G,forEachLink:te,beginUpdate:c,endUpdate:u,clear:j,hasLink:I,hasNode:p,getLink:I};return ZT(f),h(),f;function h(){var k=f.on;f.on=ee;function ee(){return f.beginUpdate=c=re,f.endUpdate=u=Z,a=d,l=g,f.on=k,k.apply(f,arguments)}}function d(k,ee){o.push({link:k,changeType:ee})}function g(k,ee){o.push({node:k,changeType:ee})}function m(k,ee){if(k===void 0)throw new Error("Invalid node identifier");c();var Q=p(k);return Q?(Q.data=ee,l(Q,"update")):(Q=new QT(k,ee),l(Q,"add")),e.set(k,Q),u(),Q}function p(k){return e.get(k)}function _(k){var ee=p(k);if(!ee)return!1;c();var Q=ee.links;return Q&&(Q.forEach(C),ee.links=null),e.delete(k),l(ee,"remove"),u(),!0}function v(k,ee,Q){c();var ue=p(k)||m(k),ce=p(ee)||m(ee),se=s(k,ee,Q),W=t.has(se.id);return t.set(se.id,se),cd(ue,se),k!==ee&&cd(ce,se),a(se,W?"update":"add"),u(),se}function w(k,ee,Q){var ue=Lo(k,ee),ce=t.get(ue);return ce?(ce.data=Q,ce):new ud(k,ee,Q,ue)}function b(k,ee,Q){var ue=Lo(k,ee),ce=i.hasOwnProperty(ue);if(ce||I(k,ee)){ce||(i[ue]=0);var se="@"+ ++i[ue];ue=Lo(k+se,ee+se)}return new ud(k,ee,Q,ue)}function x(){return e.size}function T(){return t.size}function D(k){var ee=p(k);return ee?ee.links:null}function S(k,ee){return ee!==void 0&&(k=I(k,ee)),C(k)}function C(k){if(!k||!t.get(k.id))return!1;c(),t.delete(k.id);var ee=p(k.fromId),Q=p(k.toId);return ee&&ee.links.delete(k),Q&&Q.links.delete(k),a(k,"remove"),u(),!0}function I(k,ee){if(!(k===void 0||ee===void 0))return t.get(Lo(k,ee))}function j(){c(),q(function(k){_(k.id)}),u()}function te(k){if(typeof k=="function")for(var ee=t.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}function G(k,ee,Q){var ue=p(k);if(ue&&ue.links&&typeof ee=="function")return Q?F(ue.links,k,ee):O(ue.links,k,ee)}function O(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value,$=W.fromId===ee?W.toId:W.fromId;if(ue=Q(e.get($),W),ue)return!0;se=ce.next()}}function F(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value;if(W.fromId===ee&&(ue=Q(e.get(W.toId),W),ue))return!0;se=ce.next()}}function U(){}function re(){r+=1}function Z(){r-=1,r===0&&o.length>0&&(f.fire("changed",o),o.length=0)}function q(k){if(typeof k!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+k);for(var ee=e.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}}function QT(n,e){this.id=n,this.links=null,this.data=e}function cd(n,e){n.links?n.links.add(e):n.links=new Set([e])}function ud(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Lo(n,e){return n.toString()+"\u{1F449} "+e.toString()}var wu={exports:{}},qs={exports:{}},Ym=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const eA=Ym;var ns=function(e){return t;function t(i,r){let s=r&&r.indent||0,o=r&&r.join!==void 0?r.join:`
`,a=Array(s+1).join(" "),l=[];for(let c=0;c<e;++c){let u=eA(c),f=c===0?"":a;l.push(f+i.replace(/{var}/g,u))}return l.join(o)}};const Km=ns;qs.exports=tA;qs.exports.generateCreateBodyFunctionBody=Zm;qs.exports.getVectorCode=Qm;qs.exports.getBodyCode=Jm;function tA(n,e){let t=Zm(n,e),{Body:i}=new Function(t)();return i}function Zm(n,e){return`
${Qm(n,e)}
${Jm(n)}
return {Body: Body, Vector: Vector};
`}function Jm(n){let e=Km(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Qm(n,e){let t=Km(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Mi={exports:{}};const Su=ns,hi=Ym;Mi.exports=nA;Mi.exports.generateQuadTreeFunctionBody=eg;Mi.exports.getInsertStackCode=sg;Mi.exports.getQuadNodeCode=rg;Mi.exports.isSamePosition=tg;Mi.exports.getChildBodyCode=ig;Mi.exports.setChildBodyCode=ng;function nA(n){let e=eg(n);return new Function(e)()}function eg(n){let e=Su(n),t=Math.pow(2,n);return`
${sg()}
${rg(n)}
${tg(n)}
${ig(n)}
${ng(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${o("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < \u03B8, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${hi(0)} - node.min_${hi(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${s()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(a){let l=[],c=Array(a+1).join(" ");for(let u=0;u<n;++u)l.push(c+`if (${hi(u)} > max_${hi(u)}) {`),l.push(c+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),l.push(c+`  min_${hi(u)} = max_${hi(u)};`),l.push(c+`  max_${hi(u)} = node.max_${hi(u)};`),l.push(c+"}");return l.join(`
`)}function s(){let a=Array(11).join(" "),l=[];for(let c=0;c<t;++c)l.push(a+`if (node.quad${c}) {`),l.push(a+`  queue[pushIdx] = node.quad${c};`),l.push(a+"  queueLength += 1;"),l.push(a+"  pushIdx += 1;"),l.push(a+"}");return l.join(`
`)}function o(a){let l=[];for(let c=0;c<t;++c)l.push(`${a}quad${c} = null;`);return l.join(`
`)}}function tg(n){let e=Su(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function ng(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let s=r===0?"  ":"  else ";i.push(`${s}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function ig(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function rg(n){let e=Su(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(s){let o=[];for(let a=0;a<t;++a)o.push(`${s}quad${a} = null;`);return o.join(`
`)}}function sg(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Mu={exports:{}};Mu.exports=rA;Mu.exports.generateFunctionBody=og;const iA=ns;function rA(n){let e=og(n);return new Function("bodies","settings","random",e)}function og(n){let e=iA(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Eu={exports:{}};const sA=ns;Eu.exports=oA;Eu.exports.generateCreateDragForceFunctionBody=ag;function oA(n){let e=ag(n);return new Function("options",e)}function ag(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${sA(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var Tu={exports:{}};const aA=ns;Tu.exports=lA;Tu.exports.generateCreateSpringForceFunctionBody=lg;function lA(n){let e=lg(n);return new Function("options","random",e)}function lg(n){let e=aA(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Au={exports:{}};const cA=ns;Au.exports=uA;Au.exports.generateIntegratorFunctionBody=cg;function uA(n){let e=cg(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function cg(n){let e=cA(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var Dl,fd;function fA(){if(fd)return Dl;fd=1,Dl=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Dl}var Ol,hd;function hA(){if(hd)return Ol;hd=1,Ol=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),s=typeof t[i],o=!r||typeof e[i]!==s;o?e[i]=t[i]:s==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Ol}var ds={exports:{}},dd;function dA(){if(dd)return ds.exports;dd=1,ds.exports=n,ds.exports.random=n,ds.exports.randomIterator=a;function n(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=o,e.prototype.nextDouble=s,e.prototype.uniform=s,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function s(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function o(l){return Math.floor(this.nextDouble()*l)}function a(l,c){var u=c||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:h,shuffle:f};function f(){var d,g,m;for(d=l.length-1;d>0;--d)g=u.next(d+1),m=l[g],l[g]=l[d],l[d]=m;return l}function h(d){var g,m,p;for(g=l.length-1;g>0;--g)m=u.next(g+1),p=l[m],l[m]=l[g],l[g]=p,d(p);l.length&&d(l[0])}}return ds.exports}var ug=xA,pA=qs.exports,mA=Mi.exports,gA=Mu.exports,_A=Eu.exports,vA=Tu.exports,yA=Au.exports,pd={};function xA(n){var e=fA(),t=hA(),i=bu;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=pd[n.dimensions];if(!r){var s=n.dimensions;r={Body:pA(s,n.debug),createQuadTree:mA(s),createBounds:gA(s),createDragForce:_A(s),createSpringForce:vA(s),integrate:yA(s)},pd[s]=r}var o=r.Body,a=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,f=r.integrate,h=F=>new o(F),d=dA().random(42),g=[],m=[],p=a(n,d),_=l(g,n,d),v=u(n,d),w=c(n),b=0,x=[],T=new Map,D=0;I("nbody",G),I("spring",O);var S={bodies:g,quadTree:p,springs:m,settings:n,addForce:I,removeForce:j,getForces:te,step:function(){for(var F=0;F<x.length;++F)x[F](D);var U=f(g,n.timeStep,n.adaptiveTimeStepWeight);return D+=1,U},addBody:function(F){if(!F)throw new Error("Body is required");return g.push(F),F},addBodyAt:function(F){if(!F)throw new Error("Body position is required");var U=h(F);return g.push(U),U},removeBody:function(F){if(!!F){var U=g.indexOf(F);if(!(U<0))return g.splice(U,1),g.length===0&&_.reset(),!0}},addSpring:function(F,U,re,Z){if(!F||!U)throw new Error("Cannot add null spring to force simulator");typeof re!="number"&&(re=-1);var q=new e(F,U,re,Z>=0?Z:-1);return m.push(q),q},getTotalMovement:function(){return b},removeSpring:function(F){if(!!F){var U=m.indexOf(F);if(U>-1)return m.splice(U,1),!0}},getBestNewBodyPosition:function(F){return _.getBestNewPosition(F)},getBBox:C,getBoundingBox:C,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(F){return F!==void 0?(n.gravity=F,p.options({gravity:F}),this):n.gravity},theta:function(F){return F!==void 0?(n.theta=F,p.options({theta:F}),this):n.theta},random:d};return bA(n,S),i(S),S;function C(){return _.update(),_.box}function I(F,U){if(T.has(F))throw new Error("Force "+F+" is already added");T.set(F,U),x.push(U)}function j(F){var U=x.indexOf(T.get(F));U<0||(x.splice(U,1),T.delete(F))}function te(){return T}function G(){if(g.length!==0){p.insertBodies(g);for(var F=g.length;F--;){var U=g[F];U.isPinned||(U.reset(),p.updateBodyForce(U),w.update(U))}}}function O(){for(var F=m.length;F--;)v.update(m[F])}}function bA(n,e){for(var t in n)wA(n,e,t)}function wA(n,e,t){if(!!n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}wu.exports=MA;wu.exports.simulator=ug;var SA=bu;function MA(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||ug,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?G:te;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var s=new Map,o={},a=0,l=i.settings.springTransform||EA;w(),p();var c=!1,u={step:function(){if(a===0)return f(!0),!0;var O=i.step();u.lastMove=O,u.fire("step");var F=O/a,U=F<=.01;return f(U),U},getNodePosition:function(O){return j(O).pos},setNodePosition:function(O){var F=j(O);F.setPosition.apply(F,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(O){var F=o[O];if(F)return{from:F.from.pos,to:F.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:h,pinNode:function(O,F){var U=j(O.id);U.isPinned=!!F},isNodePinned:function(O){return j(O.id).isPinned},dispose:function(){n.off("changed",v),u.fire("disposed")},getBody:m,getSpring:g,getForceVectorLength:d,simulator:i,graph:n,lastMove:0};return SA(u),u;function f(O){c!==O&&(c=O,_(O))}function h(O){s.forEach(O)}function d(){var O=0,F=0;return h(function(U){O+=Math.abs(U.force.x),F+=Math.abs(U.force.y)}),Math.sqrt(O*O+F*F)}function g(O,F){var U;if(F===void 0)typeof O!="object"?U=O:U=O.id;else{var re=n.hasLink(O,F);if(!re)return;U=re.id}return o[U]}function m(O){return s.get(O)}function p(){n.on("changed",v)}function _(O){u.fire("stable",O)}function v(O){for(var F=0;F<O.length;++F){var U=O[F];U.changeType==="add"?(U.node&&b(U.node.id),U.link&&T(U.link)):U.changeType==="remove"&&(U.node&&x(U.node),U.link&&D(U.link))}a=n.getNodesCount()}function w(){a=0,n.forEachNode(function(O){b(O.id),a+=1}),n.forEachLink(T)}function b(O){var F=s.get(O);if(!F){var U=n.getNode(O);if(!U)throw new Error("initBody() was called with unknown node id");var re=U.position;if(!re){var Z=S(U);re=i.getBestNewBodyPosition(Z)}F=i.addBodyAt(re),F.id=O,s.set(O,F),C(O),I(U)&&(F.isPinned=!0)}}function x(O){var F=O.id,U=s.get(F);U&&(s.delete(F),i.removeBody(U))}function T(O){C(O.fromId),C(O.toId);var F=s.get(O.fromId),U=s.get(O.toId),re=i.addSpring(F,U,O.length);l(O,re),o[O.id]=re}function D(O){var F=o[O.id];if(F){var U=n.getNode(O.fromId),re=n.getNode(O.toId);U&&C(U.id),re&&C(re.id),delete o[O.id],i.removeSpring(F)}}function S(O){var F=[];if(!O.links)return F;for(var U=Math.min(O.links.length,2),re=0;re<U;++re){var Z=O.links[re],q=Z.fromId!==O.id?s.get(Z.fromId):s.get(Z.toId);q&&q.pos&&F.push(q)}return F}function C(O){var F=s.get(O);if(F.mass=r(O),Number.isNaN(F.mass))throw new Error("Node mass should be a number")}function I(O){return O&&(O.isPinned||O.data&&O.data.isPinned)}function j(O){var F=s.get(O);return F||(b(O),F=s.get(O)),F}function te(O){var F=n.getLinks(O);return F?1+F.length/3:1}function G(O){var F=n.getLinks(O);return F?1+F.size/3:1}}function EA(){}function vc(n,e,t){var i,r,s,o,a;e==null&&(e=100);function l(){var u=Date.now()-o;u<e&&u>=0?i=setTimeout(l,e-u):(i=null,t||(a=n.apply(s,r),s=r=null))}var c=function(){s=this,r=arguments,o=Date.now();var u=t&&!i;return i||(i=setTimeout(l,e)),u&&(a=n.apply(s,r),s=r=null),a};return c.clear=function(){i&&(clearTimeout(i),i=null)},c.flush=function(){i&&(a=n.apply(s,r),s=r=null,clearTimeout(i),i=null)},c}vc.debounce=vc;var TA=vc;function AA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function md(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function CA(n,e,t){return e&&md(n.prototype,e),t&&md(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function PA(n,e){return LA(n)||RA(n,e)||DA(n,e)||OA()}function LA(n){if(Array.isArray(n))return n}function RA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function DA(n,e){if(!!n){if(typeof n=="string")return gd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gd(n,e)}}function gd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function OA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var IA=CA(function n(e,t){var i=t.default,r=i===void 0?null:i,s=t.triggerUpdate,o=s===void 0?!0:s,a=t.onChange,l=a===void 0?function(c,u){}:a;AA(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=o,this.onChange=l});function Cu(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,s=n.methods,o=s===void 0?{}:s,a=n.aliases,l=a===void 0?{}:a,c=n.init,u=c===void 0?function(){}:c,f=n.update,h=f===void 0?function(){}:f,d=Object.keys(r).map(function(g){return new IA(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),p={};function _(b){return v(b,g),w(),_}var v=function(x,T){u.call(_,x,m,T),m.initialised=!0},w=TA(function(){!m.initialised||(h.call(_,m,p),p={})},1);return d.forEach(function(b){_[b.name]=x(b);function x(T){var D=T.name,S=T.triggerUpdate,C=S===void 0?!1:S,I=T.onChange,j=I===void 0?function(O,F){}:I,te=T.defaultVal,G=te===void 0?null:te;return function(O){var F=m[D];if(!arguments.length)return F;var U=O===void 0?G:O;return m[D]=U,j.call(_,U,m,F),!p.hasOwnProperty(D)&&(p[D]=F),C&&w(),_}}}),Object.keys(o).forEach(function(b){_[b]=function(){for(var x,T=arguments.length,D=new Array(T),S=0;S<T;S++)D[S]=arguments[S];return(x=o[b]).call.apply(x,[_,m].concat(D))}}),Object.entries(l).forEach(function(b){var x=PA(b,2),T=x[0],D=x[1];return _[T]=_[D]}),_.resetProps=function(){return d.forEach(function(b){_[b.name](b.defaultVal)}),_},_.resetProps(),m._rerender=w,_}}var Ye=function(n){return n instanceof Function?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class _d extends Map{constructor(e,t=kA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(vd(this,e))}has(e){return super.has(vd(this,e))}set(e,t){return super.set(NA(this,e),t)}delete(e){return super.delete(FA(this,e))}}function vd({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function NA({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function FA({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function kA(n){return n!==null&&typeof n=="object"?n.valueOf():n}function BA(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function zA(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function UA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function HA(n,e){if(n==null)return{};var t=UA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function VA(n,e){return jA(n)||qA(n,e)||fg(n,e)||YA()}function GA(n){return WA(n)||$A(n)||fg(n)||XA()}function WA(n){if(Array.isArray(n))return yc(n)}function jA(n){if(Array.isArray(n))return n}function $A(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function qA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function fg(n,e){if(!!n){if(typeof n=="string")return yc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yc(n,e)}}function yc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function XA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ZA(n){var e=KA(n,"string");return typeof e=="symbol"?e:String(e)}var yd=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),s=n.reduce(function(a,l){var c=a,u=l;return r.forEach(function(f,h){var d=f.keyAccessor,g=f.isProp,m;if(g){var p=u,_=p[d],v=HA(p,[d].map(ZA));m=_,u=v}else m=d(u,h);h+1<r.length?(c.hasOwnProperty(m)||(c[m]={}),c=c[m]):t?(c.hasOwnProperty(m)||(c[m]=[]),c[m].push(u)):c[m]=u}),a},{});t instanceof Function&&function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return a(u,c+1)})}(s);var o=s;return i&&(o=[],function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?o.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var f=VA(u,2),h=f[0],d=f[1];return a(d,[].concat(GA(c),[h]))})}(s),e instanceof Array&&e.length===0&&o.length===1&&(o[0].keys=[])),o};function xd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function JA(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xd(Object(t),!0).forEach(function(i){hg(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):xd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function hg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function QA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function eC(n,e){if(n==null)return{};var t=QA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function dg(n,e){return nC(n)||rC(n,e)||pg(n,e)||oC()}function na(n){return tC(n)||iC(n)||pg(n)||sC()}function tC(n){if(Array.isArray(n))return xc(n)}function nC(n){if(Array.isArray(n))return n}function iC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function pg(n,e){if(!!n){if(typeof n=="string")return xc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return xc(n,e)}}function xc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function sC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var aC=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function lC(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var o=yd(n,t,!1),a=yd(e,t,!1),l=Object.assign({},o,a);Object.entries(l).forEach(function(c){var u=dg(c,2),f=u[0],h=u[1],d=o.hasOwnProperty(f)?a.hasOwnProperty(f)?"update":"exit":"enter";i[d].push(d==="update"?[o[f],a[f]]:h)})}else{var r=new Set(n),s=new Set(e);new Set([].concat(na(r),na(s))).forEach(function(c){var u=r.has(c)?s.has(c)?"update":"exit":"enter";i[u].push(u==="update"?[c,c]:c)})}return i}function cC(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,s=t.dataBindAttr,o=s===void 0?"__data":s,a=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(p){return p.hasOwnProperty(o)},f=e.filter(function(m){return!u(m)}),h=e.filter(u).map(function(m){return m[o]}),d=n,g=c?{enter:d,exit:h,update:[]}:lC(h,d,a);return g.update=g.update.map(function(m){var p=dg(m,2),_=p[0],v=p[1];return _!==v&&(v[r]=_[r],v[r][o]=v),v}),g.exit=g.exit.concat(f.map(function(m){return hg({},r,m)})),g}function uC(n,e,t,i,r){var s=r.createObj,o=s===void 0?function(S){return{}}:s,a=r.updateObj,l=a===void 0?function(S,C){}:a,c=r.exitObj,u=c===void 0?function(S){}:c,f=r.objBindAttr,h=f===void 0?"__obj":f,d=r.dataBindAttr,g=d===void 0?"__data":d,m=eC(r,aC),p=cC(n,e,JA({objBindAttr:h,dataBindAttr:g},m)),_=p.enter,v=p.update,w=p.exit;w.forEach(function(S){var C=S[h];delete S[h],u(C),i(C)});var b=T(_),x=[].concat(na(_),na(v));D(x),b.forEach(t);function T(S){var C=[];return S.forEach(function(I){var j=o(I);j&&(j[g]=I,I[h]=j,C.push(j))}),C}function D(S){S.forEach(function(C){var I=C[h];I&&(I[g]=C,l(I,C))})}}function fC(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const bd=Symbol("implicit");function mg(){var n=new _d,e=[],t=[],i=bd;function r(s){let o=n.get(s);if(o===void 0){if(i!==bd)return i;n.set(s,o=e.push(s)-1)}return t[o%t.length]}return r.domain=function(s){if(!arguments.length)return e.slice();e=[],n=new _d;for(const o of s)n.has(o)||n.set(o,e.push(o)-1);return r},r.range=function(s){return arguments.length?(t=Array.from(s),r):t.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return mg(e,t).unknown(i)},fC.apply(r,arguments),r}function hC(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const dC=hC("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");var gg={exports:{}};(function(n){(function(e){var t=/^\s+/,i=/\s+$/,r=0,s=e.round,o=e.min,a=e.max,l=e.random;function c(y,A){if(y=y||"",A=A||{},y instanceof c)return y;if(!(this instanceof c))return new c(y,A);var M=u(y);this._originalInput=y,this._r=M.r,this._g=M.g,this._b=M.b,this._a=M.a,this._roundA=s(100*this._a)/100,this._format=A.format||M.format,this._gradientType=A.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=M.ok,this._tc_id=r++}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var y=this.toRgb();return(y.r*299+y.g*587+y.b*114)/1e3},getLuminance:function(){var y=this.toRgb(),A,M,B,X,K,ie;return A=y.r/255,M=y.g/255,B=y.b/255,A<=.03928?X=A/12.92:X=e.pow((A+.055)/1.055,2.4),M<=.03928?K=M/12.92:K=e.pow((M+.055)/1.055,2.4),B<=.03928?ie=B/12.92:ie=e.pow((B+.055)/1.055,2.4),.2126*X+.7152*K+.0722*ie},setAlpha:function(y){return this._a=q(y),this._roundA=s(100*this._a)/100,this},toHsv:function(){var y=g(this._r,this._g,this._b);return{h:y.h*360,s:y.s,v:y.v,a:this._a}},toHsvString:function(){var y=g(this._r,this._g,this._b),A=s(y.h*360),M=s(y.s*100),B=s(y.v*100);return this._a==1?"hsv("+A+", "+M+"%, "+B+"%)":"hsva("+A+", "+M+"%, "+B+"%, "+this._roundA+")"},toHsl:function(){var y=h(this._r,this._g,this._b);return{h:y.h*360,s:y.s,l:y.l,a:this._a}},toHslString:function(){var y=h(this._r,this._g,this._b),A=s(y.h*360),M=s(y.s*100),B=s(y.l*100);return this._a==1?"hsl("+A+", "+M+"%, "+B+"%)":"hsla("+A+", "+M+"%, "+B+"%, "+this._roundA+")"},toHex:function(y){return p(this._r,this._g,this._b,y)},toHexString:function(y){return"#"+this.toHex(y)},toHex8:function(y){return _(this._r,this._g,this._b,this._a,y)},toHex8String:function(y){return"#"+this.toHex8(y)},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(k(this._r,255)*100)+"%",g:s(k(this._g,255)*100)+"%",b:s(k(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%)":"rgba("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:re[p(this._r,this._g,this._b,!0)]||!1},toFilter:function(y){var A="#"+v(this._r,this._g,this._b,this._a),M=A,B=this._gradientType?"GradientType = 1, ":"";if(y){var X=c(y);M="#"+v(X._r,X._g,X._b,X._a)}return"progid:DXImageTransform.Microsoft.gradient("+B+"startColorstr="+A+",endColorstr="+M+")"},toString:function(y){var A=!!y;y=y||this._format;var M=!1,B=this._a<1&&this._a>=0,X=!A&&B&&(y==="hex"||y==="hex6"||y==="hex3"||y==="hex4"||y==="hex8"||y==="name");return X?y==="name"&&this._a===0?this.toName():this.toRgbString():(y==="rgb"&&(M=this.toRgbString()),y==="prgb"&&(M=this.toPercentageRgbString()),(y==="hex"||y==="hex6")&&(M=this.toHexString()),y==="hex3"&&(M=this.toHexString(!0)),y==="hex4"&&(M=this.toHex8String(!0)),y==="hex8"&&(M=this.toHex8String()),y==="name"&&(M=this.toName()),y==="hsl"&&(M=this.toHslString()),y==="hsv"&&(M=this.toHsvString()),M||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(y,A){var M=y.apply(null,[this].concat([].slice.call(A)));return this._r=M._r,this._g=M._g,this._b=M._b,this.setAlpha(M._a),this},lighten:function(){return this._applyModification(T,arguments)},brighten:function(){return this._applyModification(D,arguments)},darken:function(){return this._applyModification(S,arguments)},desaturate:function(){return this._applyModification(w,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(x,arguments)},spin:function(){return this._applyModification(C,arguments)},_applyCombination:function(y,A){return y.apply(null,[this].concat([].slice.call(A)))},analogous:function(){return this._applyCombination(O,arguments)},complement:function(){return this._applyCombination(I,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(G,arguments)},triad:function(){return this._applyCombination(j,arguments)},tetrad:function(){return this._applyCombination(te,arguments)}},c.fromRatio=function(y,A){if(typeof y=="object"){var M={};for(var B in y)y.hasOwnProperty(B)&&(B==="a"?M[B]=y[B]:M[B]=W(y[B]));y=M}return c(y,A)};function u(y){var A={r:0,g:0,b:0},M=1,B=null,X=null,K=null,ie=!1,pe=!1;return typeof y=="string"&&(y=Pe(y)),typeof y=="object"&&(me(y.r)&&me(y.g)&&me(y.b)?(A=f(y.r,y.g,y.b),ie=!0,pe=String(y.r).substr(-1)==="%"?"prgb":"rgb"):me(y.h)&&me(y.s)&&me(y.v)?(B=W(y.s),X=W(y.v),A=m(y.h,B,X),ie=!0,pe="hsv"):me(y.h)&&me(y.s)&&me(y.l)&&(B=W(y.s),K=W(y.l),A=d(y.h,B,K),ie=!0,pe="hsl"),y.hasOwnProperty("a")&&(M=y.a)),M=q(M),{ok:ie,format:y.format||pe,r:o(255,a(A.r,0)),g:o(255,a(A.g,0)),b:o(255,a(A.b,0)),a:M}}function f(y,A,M){return{r:k(y,255)*255,g:k(A,255)*255,b:k(M,255)*255}}function h(y,A,M){y=k(y,255),A=k(A,255),M=k(M,255);var B=a(y,A,M),X=o(y,A,M),K,ie,pe=(B+X)/2;if(B==X)K=ie=0;else{var le=B-X;switch(ie=pe>.5?le/(2-B-X):le/(B+X),B){case y:K=(A-M)/le+(A<M?6:0);break;case A:K=(M-y)/le+2;break;case M:K=(y-A)/le+4;break}K/=6}return{h:K,s:ie,l:pe}}function d(y,A,M){var B,X,K;y=k(y,360),A=k(A,100),M=k(M,100);function ie(P,E,H){return H<0&&(H+=1),H>1&&(H-=1),H<1/6?P+(E-P)*6*H:H<1/2?E:H<2/3?P+(E-P)*(2/3-H)*6:P}if(A===0)B=X=K=M;else{var pe=M<.5?M*(1+A):M+A-M*A,le=2*M-pe;B=ie(le,pe,y+1/3),X=ie(le,pe,y),K=ie(le,pe,y-1/3)}return{r:B*255,g:X*255,b:K*255}}function g(y,A,M){y=k(y,255),A=k(A,255),M=k(M,255);var B=a(y,A,M),X=o(y,A,M),K,ie,pe=B,le=B-X;if(ie=B===0?0:le/B,B==X)K=0;else{switch(B){case y:K=(A-M)/le+(A<M?6:0);break;case A:K=(M-y)/le+2;break;case M:K=(y-A)/le+4;break}K/=6}return{h:K,s:ie,v:pe}}function m(y,A,M){y=k(y,360)*6,A=k(A,100),M=k(M,100);var B=e.floor(y),X=y-B,K=M*(1-A),ie=M*(1-X*A),pe=M*(1-(1-X)*A),le=B%6,P=[M,ie,K,K,pe,M][le],E=[pe,M,M,ie,K,K][le],H=[K,K,pe,M,M,ie][le];return{r:P*255,g:E*255,b:H*255}}function p(y,A,M,B){var X=[se(s(y).toString(16)),se(s(A).toString(16)),se(s(M).toString(16))];return B&&X[0].charAt(0)==X[0].charAt(1)&&X[1].charAt(0)==X[1].charAt(1)&&X[2].charAt(0)==X[2].charAt(1)?X[0].charAt(0)+X[1].charAt(0)+X[2].charAt(0):X.join("")}function _(y,A,M,B,X){var K=[se(s(y).toString(16)),se(s(A).toString(16)),se(s(M).toString(16)),se($(B))];return X&&K[0].charAt(0)==K[0].charAt(1)&&K[1].charAt(0)==K[1].charAt(1)&&K[2].charAt(0)==K[2].charAt(1)&&K[3].charAt(0)==K[3].charAt(1)?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function v(y,A,M,B){var X=[se($(B)),se(s(y).toString(16)),se(s(A).toString(16)),se(s(M).toString(16))];return X.join("")}c.equals=function(y,A){return!y||!A?!1:c(y).toRgbString()==c(A).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})};function w(y,A){A=A===0?0:A||10;var M=c(y).toHsl();return M.s-=A/100,M.s=ee(M.s),c(M)}function b(y,A){A=A===0?0:A||10;var M=c(y).toHsl();return M.s+=A/100,M.s=ee(M.s),c(M)}function x(y){return c(y).desaturate(100)}function T(y,A){A=A===0?0:A||10;var M=c(y).toHsl();return M.l+=A/100,M.l=ee(M.l),c(M)}function D(y,A){A=A===0?0:A||10;var M=c(y).toRgb();return M.r=a(0,o(255,M.r-s(255*-(A/100)))),M.g=a(0,o(255,M.g-s(255*-(A/100)))),M.b=a(0,o(255,M.b-s(255*-(A/100)))),c(M)}function S(y,A){A=A===0?0:A||10;var M=c(y).toHsl();return M.l-=A/100,M.l=ee(M.l),c(M)}function C(y,A){var M=c(y).toHsl(),B=(M.h+A)%360;return M.h=B<0?360+B:B,c(M)}function I(y){var A=c(y).toHsl();return A.h=(A.h+180)%360,c(A)}function j(y){var A=c(y).toHsl(),M=A.h;return[c(y),c({h:(M+120)%360,s:A.s,l:A.l}),c({h:(M+240)%360,s:A.s,l:A.l})]}function te(y){var A=c(y).toHsl(),M=A.h;return[c(y),c({h:(M+90)%360,s:A.s,l:A.l}),c({h:(M+180)%360,s:A.s,l:A.l}),c({h:(M+270)%360,s:A.s,l:A.l})]}function G(y){var A=c(y).toHsl(),M=A.h;return[c(y),c({h:(M+72)%360,s:A.s,l:A.l}),c({h:(M+216)%360,s:A.s,l:A.l})]}function O(y,A,M){A=A||6,M=M||30;var B=c(y).toHsl(),X=360/M,K=[c(y)];for(B.h=(B.h-(X*A>>1)+720)%360;--A;)B.h=(B.h+X)%360,K.push(c(B));return K}function F(y,A){A=A||6;for(var M=c(y).toHsv(),B=M.h,X=M.s,K=M.v,ie=[],pe=1/A;A--;)ie.push(c({h:B,s:X,v:K})),K=(K+pe)%1;return ie}c.mix=function(y,A,M){M=M===0?0:M||50;var B=c(y).toRgb(),X=c(A).toRgb(),K=M/100,ie={r:(X.r-B.r)*K+B.r,g:(X.g-B.g)*K+B.g,b:(X.b-B.b)*K+B.b,a:(X.a-B.a)*K+B.a};return c(ie)},c.readability=function(y,A){var M=c(y),B=c(A);return(e.max(M.getLuminance(),B.getLuminance())+.05)/(e.min(M.getLuminance(),B.getLuminance())+.05)},c.isReadable=function(y,A,M){var B=c.readability(y,A),X,K;switch(K=!1,X=L(M),X.level+X.size){case"AAsmall":case"AAAlarge":K=B>=4.5;break;case"AAlarge":K=B>=3;break;case"AAAsmall":K=B>=7;break}return K},c.mostReadable=function(y,A,M){var B=null,X=0,K,ie,pe,le;M=M||{},ie=M.includeFallbackColors,pe=M.level,le=M.size;for(var P=0;P<A.length;P++)K=c.readability(y,A[P]),K>X&&(X=K,B=c(A[P]));return c.isReadable(y,B,{level:pe,size:le})||!ie?B:(M.includeFallbackColors=!1,c.mostReadable(y,["#fff","#000"],M))};var U=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},re=c.hexNames=Z(U);function Z(y){var A={};for(var M in y)y.hasOwnProperty(M)&&(A[y[M]]=M);return A}function q(y){return y=parseFloat(y),(isNaN(y)||y<0||y>1)&&(y=1),y}function k(y,A){ue(y)&&(y="100%");var M=ce(y);return y=o(A,a(0,parseFloat(y))),M&&(y=parseInt(y*A,10)/100),e.abs(y-A)<1e-6?1:y%A/parseFloat(A)}function ee(y){return o(1,a(0,y))}function Q(y){return parseInt(y,16)}function ue(y){return typeof y=="string"&&y.indexOf(".")!=-1&&parseFloat(y)===1}function ce(y){return typeof y=="string"&&y.indexOf("%")!=-1}function se(y){return y.length==1?"0"+y:""+y}function W(y){return y<=1&&(y=y*100+"%"),y}function $(y){return e.round(parseFloat(y)*255).toString(16)}function oe(y){return Q(y)/255}var ve=function(){var y="[-\\+]?\\d+%?",A="[-\\+]?\\d*\\.\\d+%?",M="(?:"+A+")|(?:"+y+")",B="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",X="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?";return{CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+B),rgba:new RegExp("rgba"+X),hsl:new RegExp("hsl"+B),hsla:new RegExp("hsla"+X),hsv:new RegExp("hsv"+B),hsva:new RegExp("hsva"+X),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function me(y){return!!ve.CSS_UNIT.exec(y)}function Pe(y){y=y.replace(t,"").replace(i,"").toLowerCase();var A=!1;if(U[y])y=U[y],A=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var M;return(M=ve.rgb.exec(y))?{r:M[1],g:M[2],b:M[3]}:(M=ve.rgba.exec(y))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=ve.hsl.exec(y))?{h:M[1],s:M[2],l:M[3]}:(M=ve.hsla.exec(y))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=ve.hsv.exec(y))?{h:M[1],s:M[2],v:M[3]}:(M=ve.hsva.exec(y))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=ve.hex8.exec(y))?{r:Q(M[1]),g:Q(M[2]),b:Q(M[3]),a:oe(M[4]),format:A?"name":"hex8"}:(M=ve.hex6.exec(y))?{r:Q(M[1]),g:Q(M[2]),b:Q(M[3]),format:A?"name":"hex"}:(M=ve.hex4.exec(y))?{r:Q(M[1]+""+M[1]),g:Q(M[2]+""+M[2]),b:Q(M[3]+""+M[3]),a:oe(M[4]+""+M[4]),format:A?"name":"hex8"}:(M=ve.hex3.exec(y))?{r:Q(M[1]+""+M[1]),g:Q(M[2]+""+M[2]),b:Q(M[3]+""+M[3]),format:A?"name":"hex"}:!1}function L(y){var A,M;return y=y||{level:"AA",size:"small"},A=(y.level||"AA").toUpperCase(),M=(y.size||"small").toLowerCase(),A!=="AA"&&A!=="AAA"&&(A="AA"),M!=="small"&&M!=="large"&&(M="small"),{level:A,size:M}}n.exports?n.exports=c:window.tinycolor=c})(Math)})(gg);const _g=gg.exports;function wd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function vg(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?wd(Object(t),!0).forEach(function(i){Pu(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):wd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function bc(n){return bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bc(n)}function pC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Sd(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function mC(n,e,t){return e&&Sd(n.prototype,e),t&&Sd(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Pu(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function gC(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ra(n,e)}function ia(n){return ia=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ia(n)}function ra(n,e){return ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ra(n,e)}function yg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wo(n,e,t){return yg()?Wo=Reflect.construct.bind():Wo=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&ra(c,o.prototype),c},Wo.apply(null,arguments)}function _C(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function vC(n,e){if(n==null)return{};var t=_C(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function xg(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function yC(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xg(n)}function xC(n){var e=yg();return function(){var i=ia(n),r;if(e){var s=ia(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return yC(this,r)}}function Md(n,e){return wC(n)||MC(n,e)||bg(n,e)||TC()}function fn(n){return bC(n)||SC(n)||bg(n)||EC()}function bC(n){if(Array.isArray(n))return wc(n)}function wC(n){if(Array.isArray(n))return n}function SC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function MC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function bg(n,e){if(!!n){if(typeof n=="string")return wc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wc(n,e)}}function wc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function EC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var AC=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},CC=function n(e){e.geometry&&e.geometry.dispose(),e.material&&AC(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},wg=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),CC(t)}},PC=["objFilter"];function ps(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,s=vC(t,PC);return uC(n,e.children.filter(r),function(o){return e.add(o)},function(o){e.remove(o),wg(o)},vg({objBindAttr:"__threeObj"},s))}var Ro=function(e){return isNaN(e)?parseInt(_g(e).toHex(),16):e},Ed=function(e){return isNaN(e)?_g(e).getAlpha():1},LC=mg(dC);function Td(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=LC(e(i))})}function RC(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.nodeFilter,o=s===void 0?function(){return!0}:s,a=r.onLoopError,l=a===void 0?function(d){throw"Invalid DAG structure! Found cycle in node path: ".concat(d.join(" -> "),".")}:a,c={};t.forEach(function(d){return c[e(d)]={data:d,out:[],depth:-1,skip:!o(d)}}),i.forEach(function(d){var g=d.source,m=d.target,p=b(g),_=b(m);if(!c.hasOwnProperty(p))throw"Missing source node with id: ".concat(p);if(!c.hasOwnProperty(_))throw"Missing target node with id: ".concat(_);var v=c[p],w=c[_];v.out.push(w);function b(x){return bc(x)==="object"?e(x):x}});var u=[];h(Object.values(c));var f=Object.assign.apply(Object,[{}].concat(fn(Object.entries(c).filter(function(d){var g=Md(d,2),m=g[1];return!m.skip}).map(function(d){var g=Md(d,2),m=g[0],p=g[1];return Pu({},m,p.depth)}))));return f;function h(d){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,p=0,_=d.length;p<_;p++){var v=d[p];if(g.indexOf(v)!==-1){var w=function(){var b=[].concat(fn(g.slice(g.indexOf(v))),[v]).map(function(x){return e(x.data)});return u.some(function(x){return x.length===b.length&&x.every(function(T,D){return T===b[D]})})||(u.push(b),l(b)),"continue"}();if(w==="continue")continue}m>v.depth&&(v.depth=m,h(v.out,[].concat(fn(g),[v]),m+(v.skip?0:1)))}}}var Ie=window.THREE?window.THREE:{Group:Dr,Mesh:mn,MeshLambertMaterial:EE,Color:Ke,BufferGeometry:kt,BufferAttribute:on,Matrix4:ot,Vector3:z,SphereGeometry:Ta,CylinderGeometry:Ea,TubeGeometry:_u,ConeGeometry:gu,Line:cE,LineBasicMaterial:Lm,QuadraticBezierCurve3:mu,CubicBezierCurve3:Dm,Box3:nr},Ad={graph:KT,forcelayout:wu.exports},DC=2,Cd=new Ie.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Do=new Ie.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",OC=Cu({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(s,o){s.forEach(function(a){delete a[o],delete a["v".concat(o)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),s(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick()),e.graphData.nodes.forEach(function(f){var h=f.__threeObj;if(!!h){var d=t?f:e.layout.getNodePosition(f[e.nodeId]);h.position.x=d.x,h.position.y=d.y||0,h.position.z=d.z||0}});var o=Ye(e.linkWidth),a=Ye(e.linkCurvature),l=Ye(e.linkCurveRotation),c=Ye(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var h=f.__lineObj;if(!!h){var d=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=d[t?"source":"from"],m=d[t?"target":"to"];if(!(!g||!m||!g.hasOwnProperty("x")||!m.hasOwnProperty("x"))){u(f);var p=c(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(p?h.children[1]:h,{start:{x:g.x,y:g.y,z:g.z},end:{x:m.x,y:m.y,z:m.z}},f)&&!p)){var _=30,v=f.__curve,w=h.children.length?h.children[0]:h;if(w.type==="Line"){if(v)w.geometry.setFromPoints(v.getPoints(_));else{var b=w.geometry.getAttribute("position");(!b||!b.array||b.array.length!==6)&&w.geometry[Cd]("position",b=new Ie.BufferAttribute(new Float32Array(2*3),3)),b.array[0]=g.x,b.array[1]=g.y||0,b.array[2]=g.z||0,b.array[3]=m.x,b.array[4]=m.y||0,b.array[5]=m.z||0,b.needsUpdate=!0}w.geometry.computeBoundingSphere()}else if(w.type==="Mesh")if(v){w.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(w.position.set(0,0,0),w.rotation.set(0,0,0),w.scale.set(1,1,1));var j=Math.ceil(o(f)*10)/10,te=j/2,G=new Ie.TubeGeometry(v,_,te,e.linkResolution,!1);w.geometry.dispose(),w.geometry=G}else{if(!w.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var x=Math.ceil(o(f)*10)/10,T=x/2,D=new Ie.CylinderGeometry(T,T,1,e.linkResolution,1,!1);D[Do](new Ie.Matrix4().makeTranslation(0,1/2,0)),D[Do](new Ie.Matrix4().makeRotationX(Math.PI/2)),w.geometry.dispose(),w.geometry=D}var S=new Ie.Vector3(g.x,g.y||0,g.z||0),C=new Ie.Vector3(m.x,m.y||0,m.z||0),I=S.distanceTo(C);w.position.x=S.x,w.position.y=S.y,w.position.z=S.z,w.scale.z=I,w.parent.localToWorld(C),w.lookAt(C)}}}}});function u(f){var h=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),d=h[t?"source":"from"],g=h[t?"target":"to"];if(!(!d||!g||!d.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var m=a(f);if(!m)f.__curve=null;else{var p=new Ie.Vector3(d.x,d.y||0,d.z||0),_=new Ie.Vector3(g.x,g.y||0,g.z||0),v=p.distanceTo(_),w,b=l(f);if(v>0){var x=g.x-d.x,T=g.y-d.y||0,D=new Ie.Vector3().subVectors(_,p),S=D.clone().multiplyScalar(m).cross(x!==0||T!==0?new Ie.Vector3(0,0,1):new Ie.Vector3(0,1,0)).applyAxisAngle(D.normalize(),b).add(new Ie.Vector3().addVectors(p,_).divideScalar(2));w=new Ie.QuadraticBezierCurve3(p,S,_)}else{var C=m*70,I=-b,j=I+Math.PI/2;w=new Ie.CubicBezierCurve3(p,new Ie.Vector3(C*Math.cos(j),C*Math.sin(j),0).add(p),new Ie.Vector3(C*Math.cos(I),C*Math.sin(I),0).add(p),_)}f.__curve=w}}}}function r(){var o=Ye(e.linkDirectionalArrowRelPos),a=Ye(e.linkDirectionalArrowLength),l=Ye(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(!!u){var f=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),h=f[t?"source":"from"],d=f[t?"target":"to"];if(!(!h||!d||!h.hasOwnProperty("x")||!d.hasOwnProperty("x"))){var g=Math.sqrt(Math.max(0,l(h)||1))*e.nodeRelSize,m=Math.sqrt(Math.max(0,l(d)||1))*e.nodeRelSize,p=a(c),_=o(c),v=c.__curve?function(S){return c.__curve.getPoint(S)}:function(S){var C=function(j,te,G,O){return te[j]+(G[j]-te[j])*O||0};return{x:C("x",h,d,S),y:C("y",h,d,S),z:C("z",h,d,S)}},w=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(S){return Math.pow((d[S]||0)-(h[S]||0),2)}).reduce(function(S,C){return S+C},0)),b=g+p+(w-g-m-p)*_,x=v(b/w),T=v((b-p)/w);["x","y","z"].forEach(function(S){return u.position[S]=T[S]});var D=Wo(Ie.Vector3,fn(["x","y","z"].map(function(S){return x[S]})));u.parent.localToWorld(D),u.lookAt(D)}}})}function s(){var o=Ye(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var l=a.__photonsObj&&a.__photonsObj.children,c=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),f=u[t?"source":"from"],h=u[t?"target":"to"];if(!(!f||!h||!f.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var d=o(a),g=a.__curve?function(p){return a.__curve.getPoint(p)}:function(p){var _=function(w,b,x,T){return b[w]+(x[w]-b[w])*T||0};return{x:_("x",f,h,p),y:_("y",f,h,p),z:_("z",f,h,p)}},m=[].concat(fn(l||[]),fn(c||[]));m.forEach(function(p,_){var v=p.parent.__linkThreeObjType==="singleHopPhotons";if(p.hasOwnProperty("__progressRatio")||(p.__progressRatio=v?0:_/l.length),p.__progressRatio+=d,p.__progressRatio>=1)if(!v)p.__progressRatio=p.__progressRatio%1;else{p.parent.remove(p),wg(p);return}var w=p.__progressRatio,b=g(w);["x","y","z"].forEach(function(x){return p.position[x]=b[x]})})}}})}},emitParticle:function(e,t){if(t){if(!t.__singleHopPhotonsObj){var i=new Ie.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=Ye(e.linkDirectionalParticleWidth),s=Math.ceil(r(t)*10)/10/2,o=e.linkDirectionalParticleResolution,a=new Ie.SphereGeometry(s,o,o),l=Ye(e.linkColor),c=Ye(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",f=new Ie.Color(Ro(u)),h=e.linkOpacity*3,d=new Ie.MeshLambertMaterial({color:f,transparent:!0,opacity:h});t.__singleHopPhotonsObj.add(new Ie.Mesh(a,d))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(s){var o=[];if(s.geometry){s.geometry.computeBoundingBox();var a=new Ie.Box3;a.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),o.push(a)}return o.concat.apply(o,fn((s.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,fn(["x","y","z"].map(function(r){return Pu({},r,[zA(i,function(s){return s.min[r]}),BA(i,function(s){return s.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:jT().force("link",LT()).force("charge",$T()).force("center",IE()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(se){return se.some(function(W){return t.hasOwnProperty(W)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&Td(e.graphData.nodes,Ye(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&Td(e.graphData.links,Ye(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=Ye(e.nodeThreeObject),s=Ye(e.nodeThreeObjectExtend),o=Ye(e.nodeVal),a=Ye(e.nodeColor),l=Ye(e.nodeVisibility),c={},u={};ps(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(se){return se.__graphObjType==="node"},createObj:function(se){var W=r(se),$=s(se);W&&e.nodeThreeObject===W&&(W=W.clone());var oe;return W&&!$?oe=W:(oe=new Ie.Mesh,oe.__graphDefaultObj=!0,W&&$&&oe.add(W)),oe.__graphObjType="node",oe},updateObj:function(se,W){if(se.__graphDefaultObj){var $=o(W)||1,oe=Math.cbrt($)*e.nodeRelSize,ve=e.nodeResolution;(!se.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||se.geometry.parameters.radius!==oe||se.geometry.parameters.widthSegments!==ve)&&(c.hasOwnProperty($)||(c[$]=new Ie.SphereGeometry(oe,ve,ve)),se.geometry.dispose(),se.geometry=c[$]);var me=a(W),Pe=new Ie.Color(Ro(me||"#ffffaa")),L=e.nodeOpacity*Ed(me);(se.material.type!=="MeshLambertMaterial"||!se.material.color.equals(Pe)||se.material.opacity!==L)&&(u.hasOwnProperty(me)||(u[me]=new Ie.MeshLambertMaterial({color:Pe,transparent:!0,opacity:L})),se.material.dispose(),se.material=u[me])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var f=Ye(e.linkThreeObject),h=Ye(e.linkThreeObjectExtend),d=Ye(e.linkMaterial),g=Ye(e.linkVisibility),m=Ye(e.linkColor),p=Ye(e.linkWidth),_={},v={},w={},b=e.graphData.links.filter(g);if(ps(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(se){return se.__graphObjType==="link"},createObj:function(se){var W=f(se),$=h(se);W&&e.linkThreeObject===W&&(W=W.clone());var oe;if(!W||$){var ve=!!p(se);if(ve)oe=new Ie.Mesh;else{var me=new Ie.BufferGeometry;me[Cd]("position",new Ie.BufferAttribute(new Float32Array(2*3),3)),oe=new Ie.Line(me)}}var Pe;return W?$?(Pe=new Ie.Group,Pe.__graphDefaultObj=!0,Pe.add(oe),Pe.add(W)):Pe=W:(Pe=oe,Pe.__graphDefaultObj=!0),Pe.renderOrder=10,Pe.__graphObjType="link",Pe},updateObj:function(se,W){if(se.__graphDefaultObj){var $=se.children.length?se.children[0]:se,oe=Math.ceil(p(W)*10)/10,ve=!!oe;if(ve){var me=oe/2,Pe=e.linkResolution;if(!$.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||$.geometry.parameters.radiusTop!==me||$.geometry.parameters.radialSegments!==Pe){if(!_.hasOwnProperty(oe)){var L=new Ie.CylinderGeometry(me,me,1,Pe,1,!1);L[Do](new Ie.Matrix4().makeTranslation(0,1/2,0)),L[Do](new Ie.Matrix4().makeRotationX(Math.PI/2)),_[oe]=L}$.geometry.dispose(),$.geometry=_[oe]}}var y=d(W);if(y)$.material=y;else{var A=m(W),M=new Ie.Color(Ro(A||"#f0f0f0")),B=e.linkOpacity*Ed(A),X=ve?"MeshLambertMaterial":"LineBasicMaterial";if($.material.type!==X||!$.material.color.equals(M)||$.material.opacity!==B){var K=ve?v:w;K.hasOwnProperty(A)||(K[A]=new Ie[X]({color:M,transparent:B<1,opacity:B,depthWrite:B>=1})),$.material.dispose(),$.material=K[A]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var x=Ye(e.linkDirectionalArrowLength),T=Ye(e.linkDirectionalArrowColor);ps(b.filter(x),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(se){return se.__linkThreeObjType==="arrow"},createObj:function(){var se=new Ie.Mesh(void 0,new Ie.MeshLambertMaterial({transparent:!0}));return se.__linkThreeObjType="arrow",se},updateObj:function(se,W){var $=x(W),oe=e.linkDirectionalArrowResolution;if(!se.geometry.type.match(/^Cone(Buffer)?Geometry$/)||se.geometry.parameters.height!==$||se.geometry.parameters.radialSegments!==oe){var ve=new Ie.ConeGeometry($*.25,$,oe);ve.translate(0,$/2,0),ve.rotateX(Math.PI/2),se.geometry.dispose(),se.geometry=ve}se.material.color=new Ie.Color(T(W)||m(W)||"#f0f0f0"),se.material.opacity=e.linkOpacity*3}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var D=Ye(e.linkDirectionalParticles),S=Ye(e.linkDirectionalParticleWidth),C=Ye(e.linkDirectionalParticleColor),I={},j={};ps(b.filter(D),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(se){return se.__linkThreeObjType==="photons"},createObj:function(){var se=new Ie.Group;return se.__linkThreeObjType="photons",se},updateObj:function(se,W){var $=Math.round(Math.abs(D(W))),oe=!!se.children.length&&se.children[0],ve=Math.ceil(S(W)*10)/10/2,me=e.linkDirectionalParticleResolution,Pe;oe&&oe.geometry.parameters.radius===ve&&oe.geometry.parameters.widthSegments===me?Pe=oe.geometry:(j.hasOwnProperty(ve)||(j[ve]=new Ie.SphereGeometry(ve,me,me)),Pe=j[ve],oe&&oe.geometry.dispose());var L=C(W)||m(W)||"#f0f0f0",y=new Ie.Color(Ro(L)),A=e.linkOpacity*3,M;oe&&oe.material.color.equals(y)&&oe.material.opacity===A?M=oe.material:(I.hasOwnProperty(L)||(I[L]=new Ie.MeshLambertMaterial({color:y,transparent:!0,opacity:A})),M=I[L],oe&&oe.material.dispose()),ps(fn(new Array($)).map(function(B,X){return{idx:X}}),se,{idAccessor:function(X){return X.idx},createObj:function(){return new Ie.Mesh(Pe,M)},updateObj:function(X){X.geometry=Pe,X.material=M}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(ce){ce.source=ce[e.linkSource],ce.target=ce[e.linkTarget]});var te=e.forceEngine!=="ngraph",G;if(te){(G=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var O=e.d3ForceLayout.force("link");O&&O.id(function(ce){return ce[e.nodeId]}).links(e.graphData.links);var F=e.dagMode&&RC(e.graphData,function(ce){return ce[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,fn(Object.values(F||[]))),re=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*DC*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var Z=function(se,W){return function($){return se?(F[$[e.nodeId]]-U/2)*re*(W?-1:1):void 0}},q=Z(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),k=Z(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),ee=Z(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(ce){ce.fx=q(ce),ce.fy=k(ce),ce.fz=ee(ce)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?qT(function(ce){var se=F[ce[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-se:se)*re}).strength(function(ce){return e.dagNodeFilter(ce)?1:0}):null)}else{var Q=Ad.graph();e.graphData.nodes.forEach(function(ce){Q.addNode(ce[e.nodeId])}),e.graphData.links.forEach(function(ce){Q.addLink(ce.source,ce.target)}),G=Ad.forcelayout(Q,vg({dimensions:e.numDimensions},e.ngraphPhysics)),G.graph=Q}for(var ue=0;ue<e.warmupTicks&&!(te&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);ue++)G[te?"tick":"step"]();e.layout=G,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function IC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){gC(o,r);var s=xC(o);function o(){var a;pC(this,o);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return a=s.call.apply(s,[this].concat(c)),a.__kapsuleInstance=n().apply(void 0,[].concat(fn(t?[xg(a)]:[]),c)),a}return mC(o)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var s,o=(s=this.__kapsuleInstance)[r].apply(s,arguments);return o===this.__kapsuleInstance?this:o}}),i}var NC=window.THREE?window.THREE:{Group:Dr},Sg=IC(OC,NC.Group,!0);const Il={type:"change"},Nl={type:"start"},Fl={type:"end"};class FC extends yn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.target=new z;const s=1e-6,o=new z;let a=1,l=r.NONE,c=r.NONE,u=0,f=0,h=0;const d=new z,g=new we,m=new we,p=new z,_=new we,v=new we,w=new we,b=new we,x=[],T={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const $=i.domElement.getBoundingClientRect(),oe=i.domElement.ownerDocument.documentElement;i.screen.left=$.left+window.pageXOffset-oe.clientLeft,i.screen.top=$.top+window.pageYOffset-oe.clientTop,i.screen.width=$.width,i.screen.height=$.height};const D=function(){const $=new we;return function(ve,me){return $.set((ve-i.screen.left)/i.screen.width,(me-i.screen.top)/i.screen.height),$}}(),S=function(){const $=new we;return function(ve,me){return $.set((ve-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-me))/i.screen.width),$}}();this.rotateCamera=function(){const $=new z,oe=new vn,ve=new z,me=new z,Pe=new z,L=new z;return function(){L.set(m.x-g.x,m.y-g.y,0);let A=L.length();A?(d.copy(i.object.position).sub(i.target),ve.copy(d).normalize(),me.copy(i.object.up).normalize(),Pe.crossVectors(me,ve).normalize(),me.setLength(m.y-g.y),Pe.setLength(m.x-g.x),L.copy(me.add(Pe)),$.crossVectors(L,d).normalize(),A*=i.rotateSpeed,oe.setFromAxisAngle($,A),d.applyQuaternion(oe),i.object.up.applyQuaternion(oe),p.copy($),h=A):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),d.copy(i.object.position).sub(i.target),oe.setFromAxisAngle(p,h),d.applyQuaternion(oe),i.object.up.applyQuaternion(oe)),g.copy(m)}}(),this.zoomCamera=function(){let $;l===r.TOUCH_ZOOM_PAN?($=u/f,u=f,i.object.isPerspectiveCamera?d.multiplyScalar($):i.object.isOrthographicCamera?(i.object.zoom/=$,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):($=1+(v.y-_.y)*i.zoomSpeed,$!==1&&$>0&&(i.object.isPerspectiveCamera?d.multiplyScalar($):i.object.isOrthographicCamera?(i.object.zoom/=$,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?_.copy(v):_.y+=(v.y-_.y)*this.dynamicDampingFactor)},this.panCamera=function(){const $=new we,oe=new z,ve=new z;return function(){if($.copy(b).sub(w),$.lengthSq()){if(i.object.isOrthographicCamera){const Pe=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,L=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;$.x*=Pe,$.y*=L}$.multiplyScalar(d.length()*i.panSpeed),ve.copy(d).cross(i.object.up).setLength($.x),ve.add(oe.copy(i.object.up).setLength($.y)),i.object.position.add(ve),i.target.add(ve),i.staticMoving?w.copy(b):w.add($.subVectors(b,w).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(d.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,d.setLength(i.maxDistance)),_.copy(v)),d.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,d.setLength(i.minDistance)),_.copy(v)))},this.update=function(){d.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,d),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>s&&(i.dispatchEvent(Il),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>s||a!==i.object.zoom)&&(i.dispatchEvent(Il),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),d.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Il),o.copy(i.object.position),a=i.object.zoom};function C($){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture($.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",j)),ue($),$.pointerType==="touch"?q($):F($))}function I($){i.enabled!==!1&&($.pointerType==="touch"?k($):U($))}function j($){i.enabled!==!1&&($.pointerType==="touch"?ee($):re(),ce($),x.length===0&&(i.domElement.releasePointerCapture($.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",j)))}function te($){ce($)}function G($){i.enabled!==!1&&(window.removeEventListener("keydown",G),c===r.NONE&&($.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:$.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:$.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function O(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",G))}function F($){if(l===r.NONE)switch($.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(m.copy(S($.pageX,$.pageY)),g.copy(m)):oe===r.ZOOM&&!i.noZoom?(_.copy(D($.pageX,$.pageY)),v.copy(_)):oe===r.PAN&&!i.noPan&&(w.copy(D($.pageX,$.pageY)),b.copy(w)),i.dispatchEvent(Nl)}function U($){const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(g.copy(m),m.copy(S($.pageX,$.pageY))):oe===r.ZOOM&&!i.noZoom?v.copy(D($.pageX,$.pageY)):oe===r.PAN&&!i.noPan&&b.copy(D($.pageX,$.pageY))}function re(){l=r.NONE,i.dispatchEvent(Fl)}function Z($){if(i.enabled!==!1&&i.noZoom!==!0){switch($.preventDefault(),$.deltaMode){case 2:_.y-=$.deltaY*.025;break;case 1:_.y-=$.deltaY*.01;break;default:_.y-=$.deltaY*25e-5;break}i.dispatchEvent(Nl),i.dispatchEvent(Fl)}}function q($){switch(se($),x.length){case 1:l=r.TOUCH_ROTATE,m.copy(S(x[0].pageX,x[0].pageY)),g.copy(m);break;default:l=r.TOUCH_ZOOM_PAN;const oe=x[0].pageX-x[1].pageX,ve=x[0].pageY-x[1].pageY;f=u=Math.sqrt(oe*oe+ve*ve);const me=(x[0].pageX+x[1].pageX)/2,Pe=(x[0].pageY+x[1].pageY)/2;w.copy(D(me,Pe)),b.copy(w);break}i.dispatchEvent(Nl)}function k($){switch(se($),x.length){case 1:g.copy(m),m.copy(S($.pageX,$.pageY));break;default:const oe=W($),ve=$.pageX-oe.x,me=$.pageY-oe.y;f=Math.sqrt(ve*ve+me*me);const Pe=($.pageX+oe.x)/2,L=($.pageY+oe.y)/2;b.copy(D(Pe,L));break}}function ee($){switch(x.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,m.copy(S($.pageX,$.pageY)),g.copy(m);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let oe=0;oe<x.length;oe++)if(x[oe].pointerId!==$.pointerId){const ve=T[x[oe].pointerId];m.copy(S(ve.x,ve.y)),g.copy(m);break}break}i.dispatchEvent(Fl)}function Q($){i.enabled!==!1&&$.preventDefault()}function ue($){x.push($)}function ce($){delete T[$.pointerId];for(let oe=0;oe<x.length;oe++)if(x[oe].pointerId==$.pointerId){x.splice(oe,1);return}}function se($){let oe=T[$.pointerId];oe===void 0&&(oe=new we,T[$.pointerId]=oe),oe.set($.pageX,$.pageY)}function W($){const oe=$.pointerId===x[0].pointerId?x[1]:x[0];return T[oe.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",te),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",j),window.removeEventListener("keydown",G),window.removeEventListener("keyup",O)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",C),this.domElement.addEventListener("pointercancel",te),this.domElement.addEventListener("wheel",Z,{passive:!1}),window.addEventListener("keydown",G),window.addEventListener("keyup",O),this.handleResize(),this.update()}}const Pd={type:"change"},kl={type:"start"},Ld={type:"end"};class kC extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:lr.ROTATE,TWO:lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",le),this._domElementKeyEvents=N},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pd),i.update(),s=r.NONE},this.update=function(){const N=new z,Y=new vn().setFromUnitVectors(e.up,new z(0,1,0)),Te=Y.clone().invert(),Le=new z,Ae=new vn,De=2*Math.PI;return function(){const Be=i.object.position;N.copy(Be).sub(i.target),N.applyQuaternion(Y),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&C(D()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let V=i.minAzimuthAngle,Ce=i.maxAzimuthAngle;return isFinite(V)&&isFinite(Ce)&&(V<-Math.PI?V+=De:V>Math.PI&&(V-=De),Ce<-Math.PI?Ce+=De:Ce>Math.PI&&(Ce-=De),V<=Ce?a.theta=Math.max(V,Math.min(Ce,a.theta)):a.theta=a.theta>(V+Ce)/2?Math.max(V,a.theta):Math.min(Ce,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),N.setFromSpherical(a),N.applyQuaternion(Te),Be.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Le.distanceToSquared(i.object.position)>o||8*(1-Ae.dot(i.object.quaternion))>o?(i.dispatchEvent(Pd),Le.copy(i.object.position),Ae.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",A),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",le)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new mc,l=new mc;let c=1;const u=new z;let f=!1;const h=new we,d=new we,g=new we,m=new we,p=new we,_=new we,v=new we,w=new we,b=new we,x=[],T={};function D(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function C(N){l.theta-=N}function I(N){l.phi-=N}const j=function(){const N=new z;return function(Te,Le){N.setFromMatrixColumn(Le,0),N.multiplyScalar(-Te),u.add(N)}}(),te=function(){const N=new z;return function(Te,Le){i.screenSpacePanning===!0?N.setFromMatrixColumn(Le,1):(N.setFromMatrixColumn(Le,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(Te),u.add(N)}}(),G=function(){const N=new z;return function(Te,Le){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;N.copy(De).sub(i.target);let Re=N.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),j(2*Te*Re/Ae.clientHeight,i.object.matrix),te(2*Le*Re/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(Te*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),te(Le*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(N){i.object.isPerspectiveCamera?c/=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(N){i.object.isPerspectiveCamera?c*=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(N){h.set(N.clientX,N.clientY)}function re(N){v.set(N.clientX,N.clientY)}function Z(N){m.set(N.clientX,N.clientY)}function q(N){d.set(N.clientX,N.clientY),g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(d),i.update()}function k(N){w.set(N.clientX,N.clientY),b.subVectors(w,v),b.y>0?O(S()):b.y<0&&F(S()),v.copy(w),i.update()}function ee(N){p.set(N.clientX,N.clientY),_.subVectors(p,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(p),i.update()}function Q(N){N.deltaY<0?F(S()):N.deltaY>0&&O(S()),i.update()}function ue(N){let Y=!1;switch(N.code){case i.keys.UP:G(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:G(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:G(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:G(-i.keyPanSpeed,0),Y=!0;break}Y&&(N.preventDefault(),i.update())}function ce(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const N=.5*(x[0].pageX+x[1].pageX),Y=.5*(x[0].pageY+x[1].pageY);h.set(N,Y)}}function se(){if(x.length===1)m.set(x[0].pageX,x[0].pageY);else{const N=.5*(x[0].pageX+x[1].pageX),Y=.5*(x[0].pageY+x[1].pageY);m.set(N,Y)}}function W(){const N=x[0].pageX-x[1].pageX,Y=x[0].pageY-x[1].pageY,Te=Math.sqrt(N*N+Y*Y);v.set(0,Te)}function $(){i.enableZoom&&W(),i.enablePan&&se()}function oe(){i.enableZoom&&W(),i.enableRotate&&ce()}function ve(N){if(x.length==1)d.set(N.pageX,N.pageY);else{const Te=Me(N),Le=.5*(N.pageX+Te.x),Ae=.5*(N.pageY+Te.y);d.set(Le,Ae)}g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(d)}function me(N){if(x.length===1)p.set(N.pageX,N.pageY);else{const Y=Me(N),Te=.5*(N.pageX+Y.x),Le=.5*(N.pageY+Y.y);p.set(Te,Le)}_.subVectors(p,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(p)}function Pe(N){const Y=Me(N),Te=N.pageX-Y.x,Le=N.pageY-Y.y,Ae=Math.sqrt(Te*Te+Le*Le);w.set(0,Ae),b.set(0,Math.pow(w.y/v.y,i.zoomSpeed)),O(b.y),v.copy(w)}function L(N){i.enableZoom&&Pe(N),i.enablePan&&me(N)}function y(N){i.enableZoom&&Pe(N),i.enableRotate&&ve(N)}function A(N){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",B)),ae(N),N.pointerType==="touch"?P(N):K(N))}function M(N){i.enabled!==!1&&(N.pointerType==="touch"?E(N):ie(N))}function B(N){he(N),x.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(Ld),s=r.NONE}function X(N){he(N)}function K(N){let Y;switch(N.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case En.DOLLY:if(i.enableZoom===!1)return;re(N),s=r.DOLLY;break;case En.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;Z(N),s=r.PAN}else{if(i.enableRotate===!1)return;U(N),s=r.ROTATE}break;case En.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;U(N),s=r.ROTATE}else{if(i.enablePan===!1)return;Z(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kl)}function ie(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(N);break;case r.DOLLY:if(i.enableZoom===!1)return;k(N);break;case r.PAN:if(i.enablePan===!1)return;ee(N);break}}function pe(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(kl),Q(N),i.dispatchEvent(Ld))}function le(N){i.enabled===!1||i.enablePan===!1||ue(N)}function P(N){switch(ye(N),x.length){case 1:switch(i.touches.ONE){case lr.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case lr.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case lr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$(),s=r.TOUCH_DOLLY_PAN;break;case lr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(kl)}function E(N){switch(ye(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;y(N),i.update();break;default:s=r.NONE}}function H(N){i.enabled!==!1&&N.preventDefault()}function ae(N){x.push(N)}function he(N){delete T[N.pointerId];for(let Y=0;Y<x.length;Y++)if(x[Y].pointerId==N.pointerId){x.splice(Y,1);return}}function ye(N){let Y=T[N.pointerId];Y===void 0&&(Y=new we,T[N.pointerId]=Y),Y.set(N.pageX,N.pageY)}function Me(N){const Y=N.pointerId===x[0].pointerId?x[1]:x[0];return T[Y.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",A),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}const BC={type:"change"};class zC extends yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,s=new vn,o=new z;this.tmpQuaternion=new vn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new z(0,0,0),this.rotationVector=new z(0,0,0),this.keydown=function(h){if(!h.altKey){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(h){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(h){if(this.dragToLook)this.status++;else{switch(h.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(h){if(!this.dragToLook||this.status>0){const d=this.getContainerDimensions(),g=d.size[0]/2,m=d.size[1]/2;this.moveState.yawLeft=-(h.pageX-d.offset[0]-g)/g,this.moveState.pitchDown=(h.pageY-d.offset[1]-m)/m,this.updateRotationVector()}},this.pointerup=function(h){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(h.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(h){const d=h*i.movementSpeed,g=h*i.rollSpeed;i.object.translateX(i.moveVector.x*d),i.object.translateY(i.moveVector.y*d),i.object.translateZ(i.moveVector.z*d),i.tmpQuaternion.set(i.rotationVector.x*g,i.rotationVector.y*g,i.rotationVector.z*g,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(o.distanceToSquared(i.object.position)>r||8*(1-s.dot(i.object.quaternion))>r)&&(i.dispatchEvent(BC),s.copy(i.object.quaternion),o.copy(i.object.position))},this.updateMovementVector=function(){const h=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-h+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Rd),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",a),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",f)};const a=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),f=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Rd),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",a),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",f),this.updateMovementVector(),this.updateRotationVector()}}function Rd(n){n.preventDefault()}const Dd={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ca{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const UC=new Sa(-1,1,1,-1,0,1),Lu=new kt;Lu.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));Lu.setAttribute("uv",new pt([0,2,0,0,2,0],2));class HC{constructor(e){this._mesh=new mn(Lu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,UC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Od extends Ca{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ym.clone(e.uniforms),this.material=new Yn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new HC(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Id extends Ca{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class VC extends Ca{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class GC{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Si(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Dd===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Od===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Od(Dd),this.clock=new Fm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Id!==void 0&&(o instanceof Id?i=!0:o instanceof VC&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Sa(-1,1,1,-1,0,1);const Mg=new kt;Mg.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));Mg.setAttribute("uv",new pt([0,2,0,0,2,0],2));class WC extends Ca{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ke}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}function Sc(){return Sc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Sc.apply(this,arguments)}function jC(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Us(n,e){return Us=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Us(n,e)}function $C(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Us(n,e)}function Mc(n){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Mc(n)}function qC(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function XC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jo(n,e,t){return XC()?jo=Reflect.construct.bind():jo=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&Us(c,o.prototype),c},jo.apply(null,arguments)}function Ec(n){var e=typeof Map=="function"?new Map:void 0;return Ec=function(i){if(i===null||!qC(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return jo(i,arguments,Mc(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Us(r,i)},Ec(n)}var Or=function(n){$C(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,jC(i)}return e}(Ec(Error));function Bl(n){return Math.round(n*255)}function YC(n,e,t){return Bl(n)+","+Bl(e)+","+Bl(t)}function Nd(n,e,t,i){if(i===void 0&&(i=YC),e===0)return i(t,t,t);var r=(n%360+360)%360/60,s=(1-Math.abs(2*t-1))*e,o=s*(1-Math.abs(r%2-1)),a=0,l=0,c=0;r>=0&&r<1?(a=s,l=o):r>=1&&r<2?(a=o,l=s):r>=2&&r<3?(l=s,c=o):r>=3&&r<4?(l=o,c=s):r>=4&&r<5?(a=o,c=s):r>=5&&r<6&&(a=s,c=o);var u=t-s/2,f=a+u,h=l+u,d=c+u;return i(f,h,d)}var Fd={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function KC(n){if(typeof n!="string")return n;var e=n.toLowerCase();return Fd[e]?"#"+Fd[e]:n}var ZC=/^#[a-fA-F0-9]{6}$/,JC=/^#[a-fA-F0-9]{8}$/,QC=/^#[a-fA-F0-9]{3}$/,e2=/^#[a-fA-F0-9]{4}$/,zl=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,t2=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,n2=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,i2=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Ru(n){if(typeof n!="string")throw new Or(3);var e=KC(n);if(e.match(ZC))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(JC)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(QC))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(e2)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=zl.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var s=t2.exec(e.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var o=n2.exec(e);if(o){var a=parseInt(""+o[1],10),l=parseInt(""+o[2],10)/100,c=parseInt(""+o[3],10)/100,u="rgb("+Nd(a,l,c)+")",f=zl.exec(u);if(!f)throw new Or(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var h=i2.exec(e.substring(0,50));if(h){var d=parseInt(""+h[1],10),g=parseInt(""+h[2],10)/100,m=parseInt(""+h[3],10)/100,p="rgb("+Nd(d,g,m)+")",_=zl.exec(p);if(!_)throw new Or(4,e,p);return{red:parseInt(""+_[1],10),green:parseInt(""+_[2],10),blue:parseInt(""+_[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new Or(5)}var r2=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},kd=r2;function Cr(n){var e=n.toString(16);return e.length===1?"0"+e:e}function Bd(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return kd("#"+Cr(n)+Cr(e)+Cr(t));if(typeof n=="object"&&e===void 0&&t===void 0)return kd("#"+Cr(n.red)+Cr(n.green)+Cr(n.blue));throw new Or(6)}function s2(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Ru(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?Bd(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Bd(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Or(7)}function Eg(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):Eg(n,e,r)}}function o2(n){return Eg(n,n.length,[])}function a2(n,e,t){return Math.max(n,Math.min(e,t))}function l2(n,e){if(e==="transparent")return e;var t=Ru(e),i=typeof t.alpha=="number"?t.alpha:1,r=Sc({},t,{alpha:a2(0,1,(i*100+parseFloat(n)*100)/100)});return s2(r)}var c2=o2(l2),u2=c2,Cs={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Cs.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Cs.Bounce.In(n*2)*.5:Cs.Bounce.Out(n*2-1)*.5+.5}}},Ss;typeof self>"u"&&typeof process<"u"&&process.hrtime?Ss=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Ss=self.performance.now.bind(self.performance):Date.now!==void 0?Ss=Date.now:Ss=function(){return new Date().getTime()};var Bi=Ss,Tg=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Bi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Ir={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ir.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Ir.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Ir.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ir.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},Du=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Ag=new Tg,f2=function(){function n(e,t){t===void 0&&(t=Ag),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Cs.Linear.None,this._interpolationFunction=Ir.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Du.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Bi()+parseFloat(e):e:Bi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var f in o)t[s][f]=o[f];r[s]=a?[]:{},this._setupProperties(o,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Bi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Bi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Bi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),h2="18.6.4",d2=Du.nextId,Rn=Ag,p2=Rn.getAll.bind(Rn),m2=Rn.removeAll.bind(Rn),g2=Rn.add.bind(Rn),_2=Rn.remove.bind(Rn),v2=Rn.update.bind(Rn),zi={Easing:Cs,Group:Tg,Interpolation:Ir,now:Bi,Sequence:Du,nextId:d2,Tween:f2,VERSION:h2,getAll:p2,removeAll:m2,add:g2,remove:_2,update:v2};function y2(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var x2=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
}

.scene-container canvas:focus {
  outline: none;
}`;y2(x2);function b2(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w2(n,e){return M2(n)||T2(n,e)||Cg(n,e)||C2()}function ms(n){return S2(n)||E2(n)||Cg(n)||A2()}function S2(n){if(Array.isArray(n))return Tc(n)}function M2(n){if(Array.isArray(n))return n}function E2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function T2(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function Cg(n,e){if(!!n){if(typeof n=="string")return Tc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Tc(n,e)}}function Tc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function A2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lt=window.THREE?window.THREE:{WebGLRenderer:Am,Scene:aE,PerspectiveCamera:en,Raycaster:km,TextureLoader:Im,Vector2:we,Vector3:z,Box3:nr,Color:Ke,Mesh:mn,SphereGeometry:Ta,MeshBasicMaterial:cu,BackSide:qt,EventDispatcher:yn,MOUSE:En,Quaternion:vn,Spherical:mc,Clock:Fm},Pg=Cu({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(s){return s.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(s){return e.hoverFilter(s.object)}).sort(function(s,o){return e.hoverOrderComparator(s.object,o.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&Ye(e.tooltipContent)(t)||"",e.hoverObj=t)}zi.update()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var s=e.camera;if(t&&e.initialised){var o=t,a=i||{x:0,y:0,z:0};if(!r)u(o),f(a);else{var l=Object.assign({},s.position),c=h();new zi.Tween(l).to(o,r).easing(zi.Easing.Quadratic.Out).onUpdate(u).start(),new zi.Tween(c).to(a,r/3).easing(zi.Easing.Quadratic.Out).onUpdate(f).start()}return this}return Object.assign({},s.position,{lookAt:h()});function u(d){var g=d.x,m=d.y,p=d.z;g!==void 0&&(s.position.x=g),m!==void 0&&(s.position.y=m),p!==void 0&&(s.position.z=p)}function f(d){var g=new lt.Vector3(d.x,d.y,d.z);e.controls.target?e.controls.target=g:s.lookAt(g)}function h(){return Object.assign(new lt.Vector3(0,0,-1e3).applyQuaternion(s.quaternion).add(s.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,s=new Array(r>3?r-3:0),o=3;o<r;o++)s[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,s),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,s=e.camera;if(t){var o=new lt.Vector3(0,0,0),a=Math.max.apply(Math,ms(Object.entries(t).map(function(d){var g=w2(d,2),m=g[0],p=g[1];return Math.max.apply(Math,ms(p.map(function(_){return Math.abs(o[m]-_)})))})))*2,l=(1-r*2/e.height)*s.fov,c=a/Math.atan(l*Math.PI/180),u=c/s.aspect,f=Math.max(c,u);if(f>0){var h=o.clone().sub(s.position).normalize().multiplyScalar(-f);this.cameraPosition(h,o,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new lt.Box3(new lt.Vector3(0,0,0),new lt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(s){return i.expandByObject(s)}),Object.assign.apply(Object,ms(["x","y","z"].map(function(s){return b2({},s,[i.min[s],i.max[s]])})))):null},getScreenCoords:function(e,t,i,r){var s=new lt.Vector3(t,i,r);return s.project(this.camera()),{x:(s.x+1)*e.width/2,y:-(s.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=new lt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new lt.Raycaster;return o.setFromCamera(s,e.camera),Object.assign({},o.ray.at(r,new lt.Vector3))},intersectingObjects:function(e,t,i){var r=new lt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new lt.Raycaster;return s.params.Line.threshold=e.lineHoverPrecision,s.setFromCamera(r,e.camera),s.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new lt.Scene,camera:new lt.PerspectiveCamera,clock:new lt.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,s=r===void 0?"trackball":r,o=i.rendererConfig,a=o===void 0?{}:o,l=i.extraRenderers,c=l===void 0?[]:l,u=i.waitForLoadComplete,f=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[s]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new lt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return t.container.addEventListener(h,function(d){if(h==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&d.type==="pointermove"&&(d.pressure>0||t.isPointerPressed)&&(d.pointerType!=="touch"||d.movementX===void 0||[d.movementX,d.movementY].some(function(p){return Math.abs(p)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=m(t.container);t.pointerPos.x=d.pageX-g.left,t.pointerPos.y=d.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function m(p){var _=p.getBoundingClientRect(),v=window.pageXOffset||document.documentElement.scrollLeft,w=window.pageYOffset||document.documentElement.scrollTop;return{top:_.top+w,left:_.left+v}}},{passive:!0})}),t.container.addEventListener("pointerup",function(h){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&t.onClick(t.hoverObj||null,h,t.intersectionPoint),h.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,h,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(h){t.onRightClick&&h.preventDefault()}),t.renderer=new lt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",t.container.appendChild(h.domElement)}),t.postProcessingComposer=new GC(t.renderer),t.postProcessingComposer.addPass(new WC(t.scene,t.camera)),t.controls=new{trackball:FC,orbit:kC,fly:zC}[s](t.camera,t.renderer.domElement),s==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(s==="trackball"||s==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(ms(t.extraRenderers)).forEach(function(h){return h.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new lt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!f,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(ms(e.extraRenderers)).forEach(function(s){return s.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new lt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Ru(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new lt.Color(u2(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new lt.TextureLoader().load(e.backgroundImageUrl,function(s){e.skysphere.material=new lt.MeshBasicMaterial({map:s,side:lt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(s){return e.scene.remove(s)}),e.objects.forEach(function(s){return e.scene.add(s)}));function r(){e.loadComplete=e.scene.visible=!0}}});function P2(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var L2=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;P2(L2);function zd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Oo(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zd(Object(t),!0).forEach(function(i){Xs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Xs(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Pa(n){return R2(n)||D2(n)||O2(n)||I2()}function R2(n){if(Array.isArray(n))return Ac(n)}function D2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O2(n,e){if(!!n){if(typeof n=="string")return Ac(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ac(n,e)}}function Ac(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function I2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lg(n,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(o,a){a[n][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(s){for(var o=s[n],a=arguments.length,l=new Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];var u=o[r].apply(o,l);return u===o?this:u}}}}var Ud=window.THREE?window.THREE:{AmbientLight:DE,DirectionalLight:RE,Vector3:z},N2=170,Rg=Lg("forceGraph",Sg),F2=Object.assign.apply(Object,Pa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Xs({},n,Rg.linkProp(n))}))),k2=Object.assign.apply(Object,Pa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Xs({},n,Rg.linkMethod(n))}))),$o=Lg("renderObjs",Pg),B2=Object.assign.apply(Object,Pa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Xs({},n,$o.linkProp(n))}))),z2=Object.assign.apply(Object,Pa(["cameraPosition","postProcessingComposer"].map(function(n){return Xs({},n,$o.linkMethod(n))})).concat([{graph2ScreenCoords:$o.linkMethod("getScreenCoords"),screen2GraphCoords:$o.linkMethod("getSceneCoords")}])),U2=Cu({props:Oo(Oo({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e)},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},F2),B2),methods:Oo(Oo({zoomToFit:function(e,t,i){for(var r,s=arguments.length,o=new Array(s>3?s-3:0),a=3;a<s;a++)o[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,o),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},k2),z2),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new Sg,renderObjs:Pg({controlType:t,rendererConfig:i,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),s=t.renderObjs.renderer(),o=t.renderObjs.controls();o.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*N2)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new OE(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,s.domElement);c.addEventListener("dragstart",function(u){o.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var f=zn(u.object).__data;!f.__initialFixedPos&&(f.__initialFixedPos={fx:f.fx,fy:f.fy,fz:f.fz}),!f.__initialPos&&(f.__initialPos={x:f.x,y:f.y,z:f.z}),["x","y","z"].forEach(function(h){return f["f".concat(h)]=f[h]}),s.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var f=zn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var h=u.object.__initialPos,d=u.object.__prevPos,g=u.object.position;f.position.add(g.clone().sub(d)),d.copy(g),g.copy(h)}var m=f.__data,p=f.position,_={x:p.x-m.x,y:p.y-m.y,z:p.z-m.z};["x","y","z"].forEach(function(v){return m["f".concat(v)]=m[v]=p[v]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),m.__dragged=!0,t.onNodeDrag(m,_)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var f=zn(u.object).__data;f.__disposeControlsAfterDrag&&(c.dispose(),delete f.__disposeControlsAfterDrag);var h=f.__initialFixedPos,d=f.__initialPos,g={x:d.x-f.x,y:d.y-f.y,z:d.z-f.z};h&&(["x","y","z"].forEach(function(m){var p="f".concat(m);h[p]===void 0&&delete f[p]}),delete f.__initialFixedPos,delete f.__initialPos,f.__dragged&&(delete f.__dragged,t.onNodeDragEnd(f,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(o.enabled=!0,o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),s.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new Ud.AmbientLight(12303291),new Ud.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=zn(l);if(!u)return 1;var f=zn(c);if(!f)return-1;var h=function(g){return g.__graphObjType==="node"};return h(f)-h(u)}).tooltipContent(function(l){var c=zn(l);return c&&Ye(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=zn(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,f=t.hoverObj?t.hoverObj.__data:null,h=c?c.__graphObjType:null,d=c?c.__data:null;if(u&&u!==h){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,f)}if(h){var m=t["on".concat(h==="node"?"Node":"Link","Hover")];m&&m(d,u===h?f:null)}s.domElement.classList[c&&t["on".concat(h==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=zn(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];f&&f(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=zn(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];f&&f(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function zn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function H2(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Hd(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function V2(n,e,t){return e&&Hd(n.prototype,e),t&&Hd(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function G2(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Cc(n,e)}function sa(n){return sa=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},sa(n)}function Cc(n,e){return Cc=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},Cc(n,e)}function W2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function j2(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $2(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j2(n)}function q2(n){var e=W2();return function(){var i=sa(n),r;if(e){var s=sa(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return $2(this,r)}}function Vd(n,e){return Y2(n)||Z2(n,e)||Dg(n,e)||Q2()}function Io(n){return X2(n)||K2(n)||Dg(n)||J2()}function X2(n){if(Array.isArray(n))return Pc(n)}function Y2(n){if(Array.isArray(n))return n}function K2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Z2(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function Dg(n,e){if(!!n){if(typeof n=="string")return Pc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pc(n,e)}}function Pc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function J2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gs=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:$t,Sprite:Pm,SpriteMaterial:du,Texture:Yt},e3=function(n){G2(t,n);var e=q2(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return H2(this,t),i=e.call(this,new gs.SpriteMaterial),i._text="".concat(r),i._textHeight=s,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="Arial",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return V2(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,s=this._canvas,o=s.getContext("2d"),a=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=a.map(function(S){return S*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(S){return S*r.fontSize*.1}),f=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],h=f.map(function(S){return S*r.fontSize*.1}),d=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=g;var m=Math.max.apply(Math,Io(d.map(function(S){return o.measureText(S).width}))),p=this.fontSize*d.length;if(s.width=m+l[0]*2+h[0]*2,s.height=p+l[1]*2+h[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,l[0]){var _=l[0]/2;o.lineWidth=l[0],o.beginPath(),o.moveTo(_,u[0]),o.lineTo(_,s.height-u[3]),o.moveTo(s.width-_,u[1]),o.lineTo(s.width-_,s.height-u[2]),o.stroke()}if(l[1]){var v=l[1]/2;o.lineWidth=l[1],o.beginPath(),o.moveTo(Math.max(l[0],u[0]),v),o.lineTo(s.width-Math.max(l[0],u[1]),v),o.moveTo(Math.max(l[0],u[3]),s.height-v),o.lineTo(s.width-Math.max(l[0],u[2]),s.height-v),o.stroke()}if(this.borderRadius){var w=Math.max.apply(Math,Io(l)),b=w/2;o.lineWidth=w,o.beginPath(),[!!u[0]&&[u[0],b,b,u[0]],!!u[1]&&[s.width-u[1],s.width-b,b,u[1]],!!u[2]&&[s.width-u[2],s.width-b,s.height-b,s.height-u[2]],!!u[3]&&[u[3],b,s.height-b,s.height-u[3]]].filter(function(S){return S}).forEach(function(S){var C=Vd(S,4),I=C[0],j=C[1],te=C[2],G=C[3];o.moveTo(I,te),o.quadraticCurveTo(j,te,j,G)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(l[0],u[0]),[[l[0],u[0],s.width-u[1],l[1],l[1],l[1]],[s.width-l[0],s.width-l[0],s.width-l[0],l[1],u[1],s.height-u[2]],[s.width-l[0],s.width-u[2],u[3],s.height-l[1],s.height-l[1],s.height-l[1]],[l[0],l[0],l[0],s.height-l[1],s.height-u[3],u[0]]].forEach(function(S){var C=Vd(S,6),I=C[0],j=C[1],te=C[2],G=C[3],O=C[4],F=C[5];o.quadraticCurveTo(I,G,j,O),o.lineTo(te,F)}),o.closePath(),o.fill()):o.fillRect(l[0],l[1],s.width-l[0]*2,s.height-l[1]*2)),o.translate.apply(o,Io(l)),o.translate.apply(o,Io(h)),o.font=g,o.fillStyle=this.color,o.textBaseline="bottom";var x=this.strokeWidth>0;x&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),d.forEach(function(S,C){var I=(m-o.measureText(S).width)/2,j=(C+1)*r.fontSize;x&&o.strokeText(S,I,j),o.fillText(S,I,j)}),this.material.map&&this.material.map.dispose();var T=this.material.map=new gs.Texture(s);T.minFilter=gs.LinearFilter,T.needsUpdate=!0;var D=this.textHeight*d.length+a[1]*2+f[1]*2;this.scale.set(D*s.width/s.height,D,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return gs.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(gs.Sprite);const t3={name:"MainPage",components:{UserInfo:L0,ArtistInfo:ey},data(){return{loading:null,error:null,me:null,nodes:[],links:[],genres:[],genreToSortBy:null,graph:null,graphType:"medium_term",nodeType:"dot",colorByPopularity:!1,colorByUser:!1,currentArtist:null,shareModal:{view:!1,url:null,loading:null},share:{code:null,data:null}}},async mounted(){localStorage.getItem("userToken")!=null&&await F0().then(n=>{this.me=n}).catch(n=>{this.error=n}),this.share.code=localStorage.getItem("shareCode"),this.share.code&&(this.colorByUser=!0,this.loading="Loading... getting share data",this.share.data=await dx(this.share.code).catch(n=>{this.error=n}),this.loading=null,this.share.data.displayName==this.me.display_name?(console.log("You are viewing your own share code!"),this.share.data=null,this.share.code=null):this.graphType=`combine-${this.share.data.graphType}`),(this.share.data||localStorage.getItem("userToken"))&&await this.buildGraph()},destroyed(){window.removeEventListener("resize",this.resizeGraph)},methods:{logout(){tr()},async buildGraph(){if(this.graph=null,this.nodes=null,this.links=null,document.getElementById("graph").innerHTML=null,this.currentArtist=null,this.genreToSortBy=null,this.graphType=="following"?(this.loading="Loading... Getting the Users You Follow",this.nodes=await I0().catch(t=>{this.error=t.message})):this.graphType.includes("_term")&&(this.loading="Loading... Getting Your Top Items",this.nodes=await z0(this.graphType.replace("combine-","")).catch(t=>{this.error=t.message})),this.nodes&&this.nodes.forEach(t=>{t.owners=[this.me.display_name]}),this.share.data&&(this.graphType.includes("combine")||this.graphType.includes("share")))if(!this.nodes)this.share.data.nodes.forEach(t=>{t.owners=[this.share.data.displayName]}),this.nodes=this.share.data.nodes;else{let t=this.share.data.nodes.map(r=>r.id);this.nodes.forEach(r=>{t.includes(r.id)&&r.owners.push(this.share.data.displayName)});let i=this.nodes.map(r=>r.id);this.share.data.nodes.forEach(r=>{i.includes(r.id)||(r.owners=[this.share.data.displayName],this.nodes.push(r))})}this.genres=this.buildGenreList(this.nodes),this.loading="Loading... Building Links",this.links=await k0(this.nodes).catch(t=>{this.error=t}),this.loading=null,this.graph=U2();let n=this.$refs.graph.clientWidth,e=this.$refs.graph.clientHeight;this.graph(document.getElementById("graph")).graphData({nodes:this.nodes,links:this.links}).showNavInfo(!0).width(n).height(e).enableNodeDrag(!1).backgroundColor("#00000000").linkWidth(2).nodeRelSize(7).nodeLabel(t=>t.name).onNodeHover(t=>{t&&(this.currentArtist=t)}),this.updateNodeType(),this.updateNodeColor(),window.onresize=this.resizeGraph},resizeGraph(){let n=document.getElementById("content").clientWidth,e=document.getElementById("content").clientHeight;this.graph.width(n),this.graph.height(e)},updateNodeType(){this.nodeType=="dot"?(this.graph.nodeThreeObject(n=>{}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="image"?(this.graph.nodeThreeObject(n=>{let e=new Im().load(n.img),t=new du({map:e}),i=new Pm(t);return i.scale.set(25,25),i}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="text"&&(this.graph.nodeThreeObject(n=>{const e=new e3(n.name);return this.colorByUser?n.owners.length>1?(e.color="#ffffff",e.borderColor="#859900",e.backgroundColor="#859900"):n.owners[0]==this.me.display_name?(e.color="#ffffff",e.borderColor="#b58900",e.backgroundColor="#b58900"):n.owners[0]==this.share.data.displayName&&(e.color="#ffffff",e.borderColor="#2aa198",e.backgroundColor="#2aa198"):(e.color="#ffffff",e.borderColor="#002b36",e.backgroundColor="#002b36"),e.borderWidth=4,e.borderRadius=4,e.textHeight=8,e}),this.graph.nodeLabel(""))},updateNodeColor(n){n=="popularity"?this.colorByUser=!1:n=="user"&&(this.colorByPopularity=!1),this.graph.nodeColor(e=>{if(this.colorByPopularity){let t=e.popularity;return`hsl(${t/100*360},${t}%,50%)`}else if(this.colorByUser){if(e.owners.length>1)return"#859900";if(e.owners[0]==this.me.display_name)return"#b58900";if(e.owners[0]==this.share.data.displayName)return"#2aa198"}else return"#ffffff"})},buildGenreList(n){let e={};n.forEach(function(i){i.genres.forEach(function(r){e[r]?e[r]+=1:e[r]=1})});let t=[];for(const i in e)e[i]>2&&t.push(i);return t},updateGenreSort(){if(this.genreToSortBy=="null"||this.genreToSortBy==null||!this.genreToSortBy){this.graph.graphData({nodes:this.nodes,links:this.links});return}else{let n=this.genreToSortBy,e=[],t=[];this.nodes.forEach(function(r){r.genres.includes(n)&&(e.push(r),t.push(r.id))});let i=[];this.links.forEach(function(r){t.includes(r.source.id)&&t.includes(r.target.id)&&i.push(r)}),this.graph.graphData({nodes:e,links:i})}},avgPopularity(){let n=0,e=0;this.nodes.forEach(function(i){n+=i.popularity,e++});let t=n/e;return Math.round(t)},async shareGraph(){this.shareModal.loading="Uploading Data",this.shareModal.view=!0;let n=await fx(this.nodes,this.me.display_name,this.me.id,this.graphType);this.shareModal.url=`${window.location.origin}/?share=${n}`,this.shareModal.loading=null},removeShareCode(){localStorage.removeItem("shareCode"),window.location=window.location.origin}}},at=n=>(H_("data-v-bbe27658"),n=n(),V_(),n),n3={class:"flex bg-base03 text-base0 grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-1 p-3 md:p-4 lg:p-6 xl:p-10 gap-3 md:gap-4 lg:gap-6 xl:gap-10"},i3={class:"bg-base01 gap-0.5 col-span-1 md:col-span-4 row-span-4 md:row-span-1 shadow-md flex flex-col rounded-lg"},r3={class:"grow-0 gap-0.5 w-full h-8 md:h-10 lg:h-12 grid grid-cols-2 md:grid-cols-3 text-sm md:text-md bg-transparent"},s3=at(()=>be("option",{value:"following"},"Artists You Follow",-1)),o3={key:0,value:"combine-following"},a3=at(()=>be("option",{value:"short_term"},"Top Artists of the Month",-1)),l3={key:1,value:"combine-short_term"},c3=at(()=>be("option",{value:"medium_term"},"Top Artists of the Year",-1)),u3={key:2,value:"combine-medium_term"},f3=at(()=>be("option",{value:"long_term"},"Top Artists of All Time",-1)),h3={key:3,value:"combine-long_term"},d3={key:4,value:"share"},p3={key:5,value:"share"},m3={key:6,value:"share"},g3={key:7,value:"share"},_3=at(()=>be("option",{value:"dot"},"View as Dots",-1)),v3=at(()=>be("option",{value:"image"},"View as Images",-1)),y3=at(()=>be("option",{value:"text"},"View as Text",-1)),x3=[_3,v3,y3],b3=at(()=>be("option",{value:"null"},"All Genres",-1)),w3=["value"],S3={id:"content",class:"grow bg-base02 md:rounded-br-md md:rounded-bl-md text-center flex"},M3={ref:"graph",id:"graph",class:"grow select-none"},E3=at(()=>be("option",{value:"following"},"Artists You Follow",-1)),T3=at(()=>be("option",{value:"short_term"},"Top Artists of the past Month",-1)),A3=at(()=>be("option",{value:"medium_term"},"Top Artists of the past Year",-1)),C3=at(()=>be("option",{value:"long_term"},"Top Artists of All Time",-1)),P3=[E3,T3,A3,C3],L3={class:"bg-base02 rounded-md flex flex-col col-span-1 row-span-2 md:row-span-1 md:col-span-1 shadow-md space-y-2 p-2"},R3={key:0,class:"italic text-sm grow"},D3={key:1,class:"font-bold text-sm text-red grow"},O3={key:2,class:"grow gap-2 rounded-md grid grid-cols-2 md:flex md:flex-col overflow-y-auto"},I3={class:"bg-base03 rounded-md p-2 space-y-2 rounded-md shadow-md overflow-y-auto"},N3={class:"text-sm md:text-base text-center font-bold mx-1 mb-2"},F3={key:2,class:"space-y-2 select-none flex flex-col"},k3={for:"toggleB",class:"flex items-center cursor-pointer bg-base02 hover:bg-base02-tint py-1 px-2 rounded-md shadow-md"},B3={class:"relative"},z3=at(()=>be("div",{class:"block bg-base03 w-10 h-6 rounded-full"},null,-1)),U3=at(()=>be("div",{class:"dot absolute left-1 top-1 bg-[#1f4a54] w-4 h-4 rounded-full transition"},null,-1)),H3=at(()=>be("div",{class:"ml-3 font-semibold text-xs md:text-base"}," Color by Popularity ",-1)),V3={key:0,class:"inline-grid grid-cols-2 px-3 py-1 text-xs md:text-base text-[#ffffff] rounded-md shadow-md bg-gradient-to-r from-[#15803d] via-[#7e22ce] to-[#be185d]"},G3=at(()=>be("p",{class:"text-left"},"Less Popular",-1)),W3=at(()=>be("p",{class:"text-right"},"More Popular",-1)),j3=[G3,W3],$3={key:3,class:"space-y-2 select-none flex flex-col"},q3={for:"toggleC",class:"flex items-center cursor-pointer bg-base02 hover:bg-base02-tint py-1 px-2 rounded-md shadow-md"},X3={class:"relative"},Y3=at(()=>be("div",{class:"block bg-base03 w-10 h-6 rounded-full"},null,-1)),K3=at(()=>be("div",{class:"dot absolute left-1 top-1 bg-[#1f4a54] w-4 h-4 rounded-full transition"},null,-1)),Z3=at(()=>be("div",{class:"ml-3 font-semibold text-xs md:text-base"}," Color by User ",-1)),J3={key:0,class:"px-3 py-1 space-y-2 text-xs md:text-base bg-base02 rounded-md shadow-md"},Q3={class:"flow-root"},eP={class:"text-left float-left"},tP=at(()=>be("div",{class:"float-right rounded-full bg-yellow h-6 w-6"},null,-1)),nP={class:"flow-root"},iP={class:"text-left float-left"},rP=at(()=>be("div",{class:"float-right rounded-full bg-cyan h-6 w-6"},null,-1)),sP={class:"grid grid-cols-2 md:grid-cols-1 gap-2"},oP={key:0,class:"fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] grid place-items-center"},aP={class:"rounded-md shadow-lg bg-base03 p-3 text-center text-base1"},lP=at(()=>be("h1",{class:"text-xl font-semibold"},"Share Your Graph",-1)),cP={key:0},uP={key:1},fP=at(()=>be("p",null,"Your graph is now available at",-1)),hP=["href"];function dP(n,e,t,i,r,s){const o=Ms("UserInfo"),a=Ms("ArtistInfo");return Ue(),We("div",n3,[be("div",i3,[be("div",r3,[ar(be("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.graphType=l),onChange:e[1]||(e[1]=l=>s.buildGraph()),name:"graphType",class:"filter hidden md:inline-flex rounded-tl-md"},[s3,r.share.data&&r.share.data.graphType=="following"?(Ue(),We("option",o3," You and "+ht(r.share.data.displayName)+"'s Top Artists of the Month ",1)):et("",!0),a3,r.share.data&&r.share.data.graphType=="short_term"?(Ue(),We("option",l3," You and "+ht(r.share.data.displayName)+"'s Top Artists of the Month ",1)):et("",!0),c3,r.share.data&&r.share.data.graphType=="medium_term"?(Ue(),We("option",u3," You and "+ht(r.share.data.displayName)+"'s Top Artists of the Year ",1)):et("",!0),f3,r.share.data&&r.share.data.graphType=="long_term"?(Ue(),We("option",h3," You and "+ht(r.share.data.displayName)+"'s Top Artists of All Time ",1)):et("",!0),r.share.data&&r.share.data.graphType=="following"?(Ue(),We("option",d3," Artists "+ht(r.share.data.displayName)+" Follows ",1)):et("",!0),r.share.data&&r.share.data.graphType=="short_term"?(Ue(),We("option",p3,ht(r.share.data.displayName)+"'s Top Artists of the Month ",1)):et("",!0),r.share.data&&r.share.data.graphType=="medium_term"?(Ue(),We("option",m3,ht(r.share.data.displayName)+"'s Top Artists of the Year ",1)):et("",!0),r.share.data&&r.share.data.graphType=="long_term"?(Ue(),We("option",g3,ht(r.share.data.displayName)+"'s Top Artists of All Time ",1)):et("",!0)],544),[[no,r.graphType]]),ar(be("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.nodeType=l),onChange:e[3]||(e[3]=l=>s.updateNodeType()),class:"filter rounded-tl-md md:rounded-none"},x3,544),[[no,r.nodeType]]),ar(be("select",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.genreToSortBy=l),onChange:e[5]||(e[5]=l=>s.updateGenreSort()),class:"filter rounded-tr-md"},[b3,(Ue(!0),We(jt,null,Xl(r.genres,l=>(Ue(),We("option",{key:l,value:l}," Only "+ht(l.charAt(0).toUpperCase()+l.slice(1)),9,w3))),128))],544),[[no,r.genreToSortBy]])]),be("div",S3,[be("div",M3,null,512)]),ar(be("select",{"onUpdate:modelValue":e[6]||(e[6]=l=>r.graphType=l),onChange:e[7]||(e[7]=l=>s.buildGraph()),class:"grow-0 filter md:hidden w-full h-8 rounded-br-md rounded-bl-md"},P3,544),[[no,r.graphType]])]),be("div",L3,[r.loading?(Ue(),We("p",R3,ht(r.loading),1)):et("",!0),r.error?(Ue(),We("p",D3,ht(r.error),1)):et("",!0),r.graph?(Ue(),We("div",O3,[be("div",I3,[be("p",N3," Average Artist Popularity: "+ht(s.avgPopularity())+"% ",1),r.me?(Ue(),qi(o,{key:0,me:r.me},null,8,["me"])):et("",!0),r.share.data?(Ue(),qi(o,{key:1,me:r.share.data},null,8,["me"])):et("",!0),r.graph&&r.nodeType=="dot"?(Ue(),We("div",F3,[be("label",k3,[be("div",B3,[ar(be("input",{type:"checkbox",id:"toggleB","onUpdate:modelValue":e[8]||(e[8]=l=>r.colorByPopularity=l),onChange:e[9]||(e[9]=l=>s.updateNodeColor("popularity")),class:"sr-only"},null,544),[[hf,r.colorByPopularity]]),z3,U3]),H3]),r.colorByPopularity?(Ue(),We("div",V3,j3)):et("",!0)])):et("",!0),r.graph&&r.nodeType!="image"&&r.share.data?(Ue(),We("div",$3,[be("label",q3,[be("div",X3,[ar(be("input",{type:"checkbox",id:"toggleC","onUpdate:modelValue":e[10]||(e[10]=l=>r.colorByUser=l),onChange:e[11]||(e[11]=l=>s.updateNodeColor("user")&&s.updateNodeType()),class:"sr-only"},null,544),[[hf,r.colorByUser]]),Y3,K3]),Z3]),r.colorByUser?(Ue(),We("div",J3,[be("div",Q3,[be("p",eP,ht(this.me.display_name),1),tP]),be("div",nP,[be("p",iP,ht(this.share.data.displayName),1),rP])])):et("",!0)])):et("",!0)]),r.currentArtist?(Ue(),qi(a,{key:0,artist:r.currentArtist},null,8,["artist"])):et("",!0)])):et("",!0),be("div",sP,[be("button",{onClick:e[12]||(e[12]=(...l)=>s.shareGraph&&s.shareGraph(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"}," Share "),be("button",{onClick:e[13]||(e[13]=(...l)=>s.logout&&s.logout(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"}," Logout ")]),r.share.code?(Ue(),We("button",{key:3,onClick:e[14]||(e[14]=(...l)=>s.removeShareCode&&s.removeShareCode(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base02 font-bold w-full shadow-md hover:shadow-lg"}," Remove Share Code ")):et("",!0)]),r.shareModal.view?(Ue(),We("div",oP,[be("div",aP,[lP,r.shareModal.loading?(Ue(),We("div",cP,[be("p",null,"Loading: "+ht(r.shareModal.loading)+"...",1)])):(Ue(),We("div",uP,[fP,be("a",{class:"select-none underline",href:r.shareModal.url},ht(r.shareModal.url),9,hP)])),be("button",{class:"bg-base02 mt-4 px-2 py-1 rounded-md",onClick:e[15]||(e[15]=l=>r.shareModal.view=!1)}," Close ")])])):et("",!0)])}const pP=Jr(t3,[["render",dP],["__scopeId","data-v-bbe27658"]]),mP="2ed0e6e8b06842fb854cb15e1690a7b5",gP="user-follow-read user-top-read",_P={name:"ShareCodePage",props:{shareCode:String},created(){localStorage.setItem("shareCode",this.shareCode)},methods:{login(){window.location.href=`https://accounts.spotify.com/authorize?client_id=${mP}&response_type=token&redirect_uri=${window.location.origin}&scope=${gP}&show_dialog=true`}}},vP={class:"bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"},yP={class:"grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center"},xP={class:"w-6/7 md:w-fit space-y-3"},bP={class:"rounded-md shadow-2xl text-center p-4 bg-base03"},wP={class:"text-3xl font-bold text-base1"},SP={class:"w-full flex flex-col space-y-2"};function MP(n,e,t,i,r,s){return Ue(),We("div",vP,[be("div",yP,[be("div",xP,[be("div",bP,[be("h1",wP," Share Code "+ht(t.shareCode),1)]),be("div",SP,[be("button",{onClick:e[0]||(e[0]=(...o)=>s.login&&s.login(...o)),class:"grow px-2 py-1 shadow-lg hover:shadow-2xl text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"}," Login to Compare Your Artists ")])])])])}const EP=Jr(_P,[["render",MP]]),TP={name:"App",components:{LoginPage:S0,MainPage:pP,ShareCodePage:EP},data(){return{userToken:null,shareCode:null}},created(){if(localStorage.getItem("lastLoggedIn")!=null){let t=Date.parse(localStorage.getItem("lastLoggedIn")),i=new Date,r=Math.abs(i-t),s=Math.floor(r/1e3/60);console.log(`Time since last login: ${s} minutes`),s>=60&&(localStorage.removeItem("lastLoggedIn"),tr())}let n=window.location.hash.split("&")[0].split("=")[1];n?(this.userToken=n,localStorage.setItem("userToken",n),localStorage.setItem("lastLoggedIn",new Date().toISOString())):this.userToken=localStorage.getItem("userToken"),console.log(`User Token: ${this.userToken}`);let e=window.location.search.split("=")[1];e&&(e=e.slice(0,7),console.log(`Share Code: ${e}`),localStorage.setItem("shareCode",e),this.shareCode=e)}},AP={class:"w-screen h-screen flex"};function CP(n,e,t,i,r,s){const o=Ms("LoginPage"),a=Ms("ShareCodePage"),l=Ms("MainPage");return Ue(),We("div",AP,[!r.userToken&&!r.shareCode?(Ue(),qi(o,{key:0,class:"grow"})):et("",!0),r.shareCode&&!r.userToken?(Ue(),qi(a,{key:1,shareCode:r.shareCode,class:"grow"},null,8,["shareCode"])):et("",!0),r.userToken?(Ue(),qi(l,{key:2,class:"grow"})):et("",!0)])}const PP=Jr(TP,[["render",CP]]);h0(PP).mount("#app")});export default LP();
