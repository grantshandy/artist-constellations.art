var wm=Object.defineProperty;var Mm=(n,e,t)=>e in n?wm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Sm=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var ha=(n,e,t)=>(Mm(n,typeof e!="symbol"?e+"":e,t),t),eu=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var qn=(n,e,t)=>(eu(n,e,"read from private field"),t?t.call(n):e.get(n)),Os=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},An=(n,e,t,i)=>(eu(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),da=(n,e,t,i)=>({set _(r){An(n,e,r,t)},get _(){return qn(n,e,i)}});var d2=Sm(Di=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Em=tc(Tm);function Xh(n){return!!n||n===""}function nc(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?Pm(i):nc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(vt(n))return n;if(et(n))return n}}const Am=/;(?![^(]*\))/g,Cm=/:(.+)/;function Pm(n){const e={};return n.split(Am).forEach(t=>{if(t){const i=t.split(Cm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ic(n){let e="";if(vt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=ic(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Lm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ts(n[i],e[i]);return t}function Ts(n,e){if(n===e)return!0;let t=tu(n),i=tu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ds(n),i=ds(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?Lm(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ts(n[o],e[o]))return!1}}return String(n)===String(e)}function rc(n,e){return n.findIndex(t=>Ts(t,e))}const ai=n=>vt(n)?n:n==null?"":Ie(n)||et(n)&&(n.toString===Kh||!Be(n.toString))?JSON.stringify(n,Yh,2):String(n),Yh=(n,e)=>e&&e.__v_isRef?Yh(n,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:kr(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!Ie(e)&&!Jh(e)?String(e):e,Ke={},Sr=[],un=()=>{},Rm=()=>!1,Dm=/^on[^a-z]/,Ho=n=>Dm.test(n),sc=n=>n.startsWith("onUpdate:"),St=Object.assign,oc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Om=Object.prototype.hasOwnProperty,He=(n,e)=>Om.call(n,e),Ie=Array.isArray,Tr=n=>Es(n)==="[object Map]",kr=n=>Es(n)==="[object Set]",tu=n=>Es(n)==="[object Date]",Be=n=>typeof n=="function",vt=n=>typeof n=="string",ds=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Zh=n=>et(n)&&Be(n.then)&&Be(n.catch),Kh=Object.prototype.toString,Es=n=>Kh.call(n),Im=n=>Es(n).slice(8,-1),Jh=n=>Es(n)==="[object Object]",ac=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,vo=tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Nm=/-(\w)/g,Sn=Go(n=>n.replace(Nm,(e,t)=>t?t.toUpperCase():"")),Fm=/\B([A-Z])/g,zr=Go(n=>n.replace(Fm,"-$1").toLowerCase()),Wo=Go(n=>n.charAt(0).toUpperCase()+n.slice(1)),pa=Go(n=>n?`on${Wo(n)}`:""),Co=(n,e)=>!Object.is(n,e),yo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Po=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Qh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nu;const km=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let gn;class zm{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=gn;try{return gn=this,e()}finally{gn=t}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Bm(n,e=gn){e&&e.active&&e.effects.push(n)}const lc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},ed=n=>(n.w&pi)>0,td=n=>(n.n&pi)>0,Um=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=pi},Vm=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];ed(r)&&!td(r)?r.delete(n):e[t++]=r,r.w&=~pi,r.n&=~pi}e.length=t}},gl=new WeakMap;let is=0,pi=1;const _l=30;let on;const Bi=Symbol(""),vl=Symbol("");class cc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Bm(this,i)}run(){if(!this.active)return this.fn();let e=on,t=ui;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=on,on=this,ui=!0,pi=1<<++is,is<=_l?Um(this):iu(this),this.fn()}finally{is<=_l&&Vm(this),pi=1<<--is,on=this.parent,ui=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){on===this?this.deferStop=!0:this.active&&(iu(this),this.onStop&&this.onStop(),this.active=!1)}}function iu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let ui=!0;const nd=[];function Br(){nd.push(ui),ui=!1}function Ur(){const n=nd.pop();ui=n===void 0?!0:n}function Ht(n,e,t){if(ui&&on){let i=gl.get(n);i||gl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=lc()),id(r)}}function id(n,e){let t=!1;is<=_l?td(n)||(n.n|=pi,t=!ed(n)):t=!n.has(on),t&&(n.add(on),on.deps.push(n))}function Vn(n,e,t,i,r,s){const o=gl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?ac(t)&&a.push(o.get("length")):(a.push(o.get(Bi)),Tr(n)&&a.push(o.get(vl)));break;case"delete":Ie(n)||(a.push(o.get(Bi)),Tr(n)&&a.push(o.get(vl)));break;case"set":Tr(n)&&a.push(o.get(Bi));break}if(a.length===1)a[0]&&yl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yl(lc(l))}}function yl(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&ru(i);for(const i of t)i.computed||ru(i)}function ru(n,e){(n!==on||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Hm=tc("__proto__,__v_isRef,__isVue"),rd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ds)),Gm=uc(),Wm=uc(!1,!0),jm=uc(!0),su=$m();function $m(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ye(this);for(let s=0,o=this.length;s<o;s++)Ht(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Br();const i=Ye(this)[e].apply(this,t);return Ur(),i}}),n}function uc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?lg:cd:e?ld:ad).get(i))return i;const o=Ie(i);if(!n&&o&&He(su,r))return Reflect.get(su,r,s);const a=Reflect.get(i,r,s);return(ds(r)?rd.has(r):Hm(r))||(n||Ht(i,"get",r),e)?a:Rt(a)?o&&ac(r)?a:a.value:et(a)?n?ud(a):dc(a):a}}const qm=sd(),Xm=sd(!0);function sd(n=!1){return function(t,i,r,s){let o=t[i];if(ps(o)&&Rt(o)&&!Rt(r))return!1;if(!n&&(!xl(r)&&!ps(r)&&(o=Ye(o),r=Ye(r)),!Ie(t)&&Rt(o)&&!Rt(r)))return o.value=r,!0;const a=Ie(t)&&ac(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===Ye(s)&&(a?Co(r,o)&&Vn(t,"set",i,r):Vn(t,"add",i,r)),l}}function Ym(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Vn(n,"delete",e,void 0),i}function Zm(n,e){const t=Reflect.has(n,e);return(!ds(e)||!rd.has(e))&&Ht(n,"has",e),t}function Km(n){return Ht(n,"iterate",Ie(n)?"length":Bi),Reflect.ownKeys(n)}const od={get:Gm,set:qm,deleteProperty:Ym,has:Zm,ownKeys:Km},Jm={get:jm,set(n,e){return!0},deleteProperty(n,e){return!0}},Qm=St({},od,{get:Wm,set:Xm}),fc=n=>n,jo=n=>Reflect.getPrototypeOf(n);function Is(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ye(n),s=Ye(e);t||(e!==s&&Ht(r,"get",e),Ht(r,"get",s));const{has:o}=jo(r),a=i?fc:t?gc:mc;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ns(n,e=!1){const t=this.__v_raw,i=Ye(t),r=Ye(n);return e||(n!==r&&Ht(i,"has",n),Ht(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Fs(n,e=!1){return n=n.__v_raw,!e&&Ht(Ye(n),"iterate",Bi),Reflect.get(n,"size",n)}function ou(n){n=Ye(n);const e=Ye(this);return jo(e).has.call(e,n)||(e.add(n),Vn(e,"add",n,n)),this}function au(n,e){e=Ye(e);const t=Ye(this),{has:i,get:r}=jo(t);let s=i.call(t,n);s||(n=Ye(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Co(e,o)&&Vn(t,"set",n,e):Vn(t,"add",n,e),this}function lu(n){const e=Ye(this),{has:t,get:i}=jo(e);let r=t.call(e,n);r||(n=Ye(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Vn(e,"delete",n,void 0),s}function cu(){const n=Ye(this),e=n.size!==0,t=n.clear();return e&&Vn(n,"clear",void 0,void 0),t}function ks(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ye(o),l=e?fc:n?gc:mc;return!n&&Ht(a,"iterate",Bi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function zs(n,e,t){return function(...i){const r=this.__v_raw,s=Ye(r),o=Tr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?fc:e?gc:mc;return!e&&Ht(s,"iterate",l?vl:Bi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Xn(n){return function(...e){return n==="delete"?!1:this}}function eg(){const n={get(s){return Is(this,s)},get size(){return Fs(this)},has:Ns,add:ou,set:au,delete:lu,clear:cu,forEach:ks(!1,!1)},e={get(s){return Is(this,s,!1,!0)},get size(){return Fs(this)},has:Ns,add:ou,set:au,delete:lu,clear:cu,forEach:ks(!1,!0)},t={get(s){return Is(this,s,!0)},get size(){return Fs(this,!0)},has(s){return Ns.call(this,s,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:ks(!0,!1)},i={get(s){return Is(this,s,!0,!0)},get size(){return Fs(this,!0)},has(s){return Ns.call(this,s,!0)},add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zs(s,!1,!1),t[s]=zs(s,!0,!1),e[s]=zs(s,!1,!0),i[s]=zs(s,!0,!0)}),[n,t,e,i]}const[tg,ng,ig,rg]=eg();function hc(n,e){const t=e?n?rg:ig:n?ng:tg;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const sg={get:hc(!1,!1)},og={get:hc(!1,!0)},ag={get:hc(!0,!1)},ad=new WeakMap,ld=new WeakMap,cd=new WeakMap,lg=new WeakMap;function cg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ug(n){return n.__v_skip||!Object.isExtensible(n)?0:cg(Im(n))}function dc(n){return ps(n)?n:pc(n,!1,od,sg,ad)}function fg(n){return pc(n,!1,Qm,og,ld)}function ud(n){return pc(n,!0,Jm,ag,cd)}function pc(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=ug(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Er(n){return ps(n)?Er(n.__v_raw):!!(n&&n.__v_isReactive)}function ps(n){return!!(n&&n.__v_isReadonly)}function xl(n){return!!(n&&n.__v_isShallow)}function fd(n){return Er(n)||ps(n)}function Ye(n){const e=n&&n.__v_raw;return e?Ye(e):n}function hd(n){return Po(n,"__v_skip",!0),n}const mc=n=>et(n)?dc(n):n,gc=n=>et(n)?ud(n):n;function hg(n){ui&&on&&(n=Ye(n),id(n.dep||(n.dep=lc())))}function dg(n,e){n=Ye(n),n.dep&&yl(n.dep)}function Rt(n){return!!(n&&n.__v_isRef===!0)}function pg(n){return Rt(n)?n.value:n}const mg={get:(n,e,t)=>pg(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function dd(n){return Er(n)?n:new Proxy(n,mg)}var pd;class gg{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[pd]=!1,this._dirty=!0,this.effect=new cc(e,()=>{this._dirty||(this._dirty=!0,dg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ye(this);return hg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}pd="__v_isReadonly";function _g(n,e,t=!1){let i,r;const s=Be(n);return s?(i=n,r=un):(i=n.get,r=n.set),new gg(i,r,s||!r,t)}function fi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){$o(s,e,t)}return r}function Jt(n,e,t,i){if(Be(n)){const s=fi(n,e,t,i);return s&&Zh(s)&&s.catch(o=>{$o(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jt(n[s],e,t,i));return r}function $o(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){fi(l,null,10,[n,o,a]);return}}vg(n,t,r,i)}function vg(n,e,t,i=!0){console.error(n)}let ms=!1,bl=!1;const Mt=[];let bn=0;const Ar=[];let In=null,Ai=0;const md=Promise.resolve();let _c=null;function yg(n){const e=_c||md;return n?e.then(this?n.bind(this):n):e}function xg(n){let e=bn+1,t=Mt.length;for(;e<t;){const i=e+t>>>1;gs(Mt[i])<n?e=i+1:t=i}return e}function vc(n){(!Mt.length||!Mt.includes(n,ms&&n.allowRecurse?bn+1:bn))&&(n.id==null?Mt.push(n):Mt.splice(xg(n.id),0,n),gd())}function gd(){!ms&&!bl&&(bl=!0,_c=md.then(vd))}function bg(n){const e=Mt.indexOf(n);e>bn&&Mt.splice(e,1)}function wg(n){Ie(n)?Ar.push(...n):(!In||!In.includes(n,n.allowRecurse?Ai+1:Ai))&&Ar.push(n),gd()}function uu(n,e=ms?bn+1:0){for(;e<Mt.length;e++){const t=Mt[e];t&&t.pre&&(Mt.splice(e,1),e--,t())}}function _d(n){if(Ar.length){const e=[...new Set(Ar)];if(Ar.length=0,In){In.push(...e);return}for(In=e,In.sort((t,i)=>gs(t)-gs(i)),Ai=0;Ai<In.length;Ai++)In[Ai]();In=null,Ai=0}}const gs=n=>n.id==null?1/0:n.id,Mg=(n,e)=>{const t=gs(n)-gs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function vd(n){bl=!1,ms=!0,Mt.sort(Mg);const e=un;try{for(bn=0;bn<Mt.length;bn++){const t=Mt[bn];t&&t.active!==!1&&fi(t,null,14)}}finally{bn=0,Mt.length=0,_d(),ms=!1,_c=null,(Mt.length||Ar.length)&&vd()}}function Sg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Ke;h&&(r=t.map(p=>p.trim())),f&&(r=t.map(Qh))}let a,l=i[a=pa(e)]||i[a=pa(Sn(e))];!l&&s&&(l=i[a=pa(zr(e))]),l&&Jt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Jt(c,n,6,r)}}function yd(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Be(n)){const l=c=>{const u=yd(c,e,!0);u&&(a=!0,St(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(et(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):St(o,s),et(n)&&i.set(n,o),o)}function qo(n,e){return!n||!Ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,zr(e))||He(n,e))}let Zt=null,Xo=null;function Lo(n){const e=Zt;return Zt=n,Xo=n&&n.type.__scopeId||null,e}function Tg(n){Xo=n}function Eg(){Xo=null}function Ag(n,e=Zt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bu(-1);const s=Lo(e);let o;try{o=n(...r)}finally{Lo(s),i._d&&bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ma(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const w=Lo(n);try{if(t.shapeFlag&4){const b=r||i;d=vn(u.call(b,b,f,s,p,h,g)),_=l}else{const b=e;d=vn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:Cg(l)}}catch(b){cs.length=0,$o(b,n,1),d=zn(fn)}let M=d;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:y}=M;b.length&&y&7&&(o&&b.some(sc)&&(_=Pg(_,o)),M=mi(M,_))}return t.dirs&&(M=mi(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),d=M,Lo(w),d}const Cg=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ho(t))&&((e||(e={}))[t]=n[t]);return e},Pg=(n,e)=>{const t={};for(const i in n)(!sc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Lg(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?fu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!qo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?fu(i,o,c):!0:!!o;return!1}function fu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!qo(t,s))return!0}return!1}function Rg({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Dg=n=>n.__isSuspense;function Og(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):wg(n)}function Ig(n,e){if(mt){let t=mt.provides;const i=mt.parent&&mt.parent.provides;i===t&&(t=mt.provides=Object.create(i)),t[n]=e}}function ga(n,e,t=!1){const i=mt||Zt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Be(e)?e.call(i.proxy):e}}const hu={};function _a(n,e,t){return xd(n,e,t)}function xd(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Ke){const a=mt;let l,c=!1,u=!1;if(Rt(n)?(l=()=>n.value,c=xl(n)):Er(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(_=>Er(_)||xl(_)),l=()=>n.map(_=>{if(Rt(_))return _.value;if(Er(_))return Oi(_);if(Be(_))return fi(_,a,2)})):Be(n)?e?l=()=>fi(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Jt(n,a,3,[h])}:l=un,e&&i){const _=l;l=()=>Oi(_())}let f,h=_=>{f=d.onStop=()=>{fi(_,a,4)}};if(ys)return h=un,e?t&&Jt(e,a,3,[l(),u?[]:void 0,h]):l(),un;let p=u?[]:hu;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((w,M)=>Co(w,p[M])):Co(_,p)))&&(f&&f(),Jt(e,a,3,[_,p===hu?void 0:p,h]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>It(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>vc(g));const d=new cc(l,m);return e?t?g():p=d.run():r==="post"?It(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&oc(a.scope.effects,d)}}function Ng(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?bd(i,n):()=>i[n]:n.bind(i,i);let s;Be(e)?s=e:(s=e.handler,t=e);const o=mt;Lr(this);const a=xd(r,s.bind(i),t);return o?Lr(o):Ui(),a}function bd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Oi(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Rt(n))Oi(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Oi(n[t],e);else if(kr(n)||Tr(n))n.forEach(t=>{Oi(t,e)});else if(Jh(n))for(const t in n)Oi(n[t],e);return n}function Fg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Td(()=>{n.isMounted=!0}),Ed(()=>{n.isUnmounting=!0}),n}const $t=[Function,Array],kg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$t,onEnter:$t,onAfterEnter:$t,onEnterCancelled:$t,onBeforeLeave:$t,onLeave:$t,onAfterLeave:$t,onLeaveCancelled:$t,onBeforeAppear:$t,onAppear:$t,onAfterAppear:$t,onAppearCancelled:$t},setup(n,{slots:e}){const t=M_(),i=Fg();let r;return()=>{const s=e.default&&Md(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==fn){o=m;break}}const a=Ye(n),{mode:l}=a;if(i.isLeaving)return va(o);const c=du(o);if(!c)return va(o);const u=wl(c,a,i,t);Ml(c,u);const f=t.subTree,h=f&&du(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(h&&h.type!==fn&&(!Ci(c,h)||p)){const m=wl(h,a,i,t);if(Ml(h,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,t.update()},va(o);l==="in-out"&&c.type!==fn&&(m.delayLeave=(d,_,w)=>{const M=wd(i,h);M[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},zg=kg;function wd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function wl(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=e,M=String(n.key),b=wd(t,n),y=(x,C)=>{x&&Jt(x,i,9,C)},A=(x,C)=>{const I=C[1];y(x,C),Ie(x)?x.every(q=>q.length<=1)&&I():x.length<=1&&I()},O={mode:s,persisted:o,beforeEnter(x){let C=a;if(!t.isMounted)if(r)C=m||a;else return;x._leaveCb&&x._leaveCb(!0);const I=b[M];I&&Ci(n,I)&&I.el._leaveCb&&I.el._leaveCb(),y(C,[x])},enter(x){let C=l,I=c,q=u;if(!t.isMounted)if(r)C=d||l,I=_||c,q=w||u;else return;let ne=!1;const G=x._enterCb=D=>{ne||(ne=!0,D?y(q,[x]):y(I,[x]),O.delayedLeave&&O.delayedLeave(),x._enterCb=void 0)};C?A(C,[x,G]):G()},leave(x,C){const I=String(n.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return C();y(f,[x]);let q=!1;const ne=x._leaveCb=G=>{q||(q=!0,C(),G?y(g,[x]):y(p,[x]),x._leaveCb=void 0,b[I]===n&&delete b[I])};b[I]=n,h?A(h,[x,ne]):ne()},clone(x){return wl(x,e,t,i)}};return O}function va(n){if(Yo(n))return n=mi(n),n.children=null,n}function du(n){return Yo(n)?n.children?n.children[0]:void 0:n}function Ml(n,e){n.shapeFlag&6&&n.component?Ml(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Md(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Xt?(o.patchFlag&128&&r++,i=i.concat(Md(o.children,e,a))):(e||o.type!==fn)&&i.push(a!=null?mi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const xo=n=>!!n.type.__asyncLoader,Yo=n=>n.type.__isKeepAlive;function Bg(n,e){Sd(n,"a",e)}function Ug(n,e){Sd(n,"da",e)}function Sd(n,e,t=mt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Zo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Yo(r.parent.vnode)&&Vg(i,e,t,r),r=r.parent}}function Vg(n,e,t,i){const r=Zo(e,n,i,!0);Ad(()=>{oc(i[e],r)},t)}function Zo(n,e,t=mt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Br(),Lr(t);const a=Jt(e,t,n,o);return Ui(),Ur(),a});return i?r.unshift(s):r.push(s),s}}const Gn=n=>(e,t=mt)=>(!ys||n==="sp")&&Zo(n,(...i)=>e(...i),t),Hg=Gn("bm"),Td=Gn("m"),Gg=Gn("bu"),Wg=Gn("u"),Ed=Gn("bum"),Ad=Gn("um"),jg=Gn("sp"),$g=Gn("rtg"),qg=Gn("rtc");function Xg(n,e=mt){Zo("ec",n,e)}function Wr(n,e){const t=Zt;if(t===null)return n;const i=Jo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ke]=e[s];Be(o)&&(o={mounted:o,updated:o}),o.deep&&Oi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Br(),Jt(l,t,8,[n.el,a,n,e]),Ur())}}const Cd="components";function Ro(n,e){return Zg(Cd,n,!0,e)||n}const Yg=Symbol();function Zg(n,e,t=!0,i=!1){const r=Zt||mt;if(r){const s=r.type;if(n===Cd){const a=C_(s,!1);if(a&&(a===e||a===Sn(e)||a===Wo(Sn(e))))return s}const o=pu(r[n]||s[n],e)||pu(r.appContext[n],e);return!o&&i?s:o}}function pu(n,e){return n&&(n[e]||n[Sn(e)]||n[Wo(Sn(e))])}function Pd(n,e,t,i){let r;const s=t&&t[i];if(Ie(n)||vt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const Sl=n=>n?Ud(n)?Jo(n)||n.proxy:Sl(n.parent):null,Do=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Sl(n.parent),$root:n=>Sl(n.root),$emit:n=>n.emit,$options:n=>yc(n),$forceUpdate:n=>n.f||(n.f=()=>vc(n.update)),$nextTick:n=>n.n||(n.n=yg.bind(n.proxy)),$watch:n=>Ng.bind(n)}),Kg={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Ke&&He(i,e))return o[e]=1,i[e];if(r!==Ke&&He(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Ke&&He(t,e))return o[e]=4,t[e];Tl&&(o[e]=0)}}const u=Do[e];let f,h;if(u)return e==="$attrs"&&Ht(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ke&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Ke&&He(r,e)?(r[e]=t,!0):i!==Ke&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Ke&&He(n,o)||e!==Ke&&He(e,o)||(a=s[0])&&He(a,o)||He(i,o)||He(Do,o)||He(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Tl=!0;function Jg(n){const e=yc(n),t=n.proxy,i=n.ctx;Tl=!1,e.beforeCreate&&mu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:M,unmounted:b,render:y,renderTracked:A,renderTriggered:O,errorCaptured:x,serverPrefetch:C,expose:I,inheritAttrs:q,components:ne,directives:G,filters:D}=e;if(c&&Qg(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const re in o){const K=o[re];Be(K)&&(i[re]=K.bind(t))}if(r){const re=r.call(t,t);et(re)&&(n.data=dc(re))}if(Tl=!0,s)for(const re in s){const K=s[re],$=Be(K)?K.bind(t,t):Be(K.get)?K.get.bind(t,t):un,k=!Be(K)&&Be(K.set)?K.set.bind(t):un,ee=L_({get:$,set:k});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ee.value,set:Q=>ee.value=Q})}if(a)for(const re in a)Ld(a[re],i,t,re);if(l){const re=Be(l)?l.call(t):l;Reflect.ownKeys(re).forEach(K=>{Ig(K,re[K])})}u&&mu(u,n,"c");function U(re,K){Ie(K)?K.forEach($=>re($.bind(t))):K&&re(K.bind(t))}if(U(Hg,f),U(Td,h),U(Gg,p),U(Wg,g),U(Bg,m),U(Ug,d),U(Xg,x),U(qg,A),U($g,O),U(Ed,w),U(Ad,b),U(jg,C),Ie(I))if(I.length){const re=n.exposed||(n.exposed={});I.forEach(K=>{Object.defineProperty(re,K,{get:()=>t[K],set:$=>t[K]=$})})}else n.exposed||(n.exposed={});y&&n.render===un&&(n.render=y),q!=null&&(n.inheritAttrs=q),ne&&(n.components=ne),G&&(n.directives=G)}function Qg(n,e,t=un,i=!1){Ie(n)&&(n=El(n));for(const r in n){const s=n[r];let o;et(s)?"default"in s?o=ga(s.from||r,s.default,!0):o=ga(s.from||r):o=ga(s),Rt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function mu(n,e,t){Jt(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ld(n,e,t,i){const r=i.includes(".")?bd(t,i):()=>t[i];if(vt(n)){const s=e[n];Be(s)&&_a(r,s)}else if(Be(n))_a(r,n.bind(t));else if(et(n))if(Ie(n))n.forEach(s=>Ld(s,e,t,i));else{const s=Be(n.handler)?n.handler.bind(t):e[n.handler];Be(s)&&_a(r,s,n)}}function yc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),et(e)&&s.set(e,l),l}function Oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Oo(n,s,t,!0),r&&r.forEach(o=>Oo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=e_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const e_={data:gu,props:Ti,emits:Ti,methods:Ti,computed:Ti,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ti,directives:Ti,watch:n_,provide:gu,inject:t_};function gu(n,e){return e?n?function(){return St(Be(n)?n.call(this,this):n,Be(e)?e.call(this,this):e)}:e:n}function t_(n,e){return Ti(El(n),El(e))}function El(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Ti(n,e){return n?St(St(Object.create(null),n),e):e}function n_(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function i_(n,e,t,i=!1){const r={},s={};Po(s,Ko,1),n.propsDefaults=Object.create(null),Rd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:fg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function r_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ye(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(qo(n.emitsOptions,h))continue;const p=e[h];if(l)if(He(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Sn(h);r[g]=Al(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Rd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=zr(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Al(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!He(e,f)&&!0)&&(delete s[f],c=!0)}c&&Vn(n,"set","$attrs")}function Rd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(vo(l))continue;const c=e[l];let u;r&&He(r,u=Sn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ye(t),c=a||Ke;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Al(r,l,f,c[f],n,!He(c,f))}}return o}function Al(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Lr(r),i=c[t]=l.call(null,e),Ui())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zr(t))&&(i=!0))}return i}function Dd(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Be(n)){const u=f=>{l=!0;const[h,p]=Dd(f,e,!0);St(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,Sr),Sr;if(Ie(s))for(let u=0;u<s.length;u++){const f=Sn(s[u]);_u(f)&&(o[f]=Ke)}else if(s)for(const u in s){const f=Sn(u);if(_u(f)){const h=s[u],p=o[f]=Ie(h)||Be(h)?{type:h}:h;if(p){const g=xu(Boolean,p.type),m=xu(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||He(p,"default"))&&a.push(f)}}}const c=[o,a];return et(n)&&i.set(n,c),c}function _u(n){return n[0]!=="$"}function vu(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function yu(n,e){return vu(n)===vu(e)}function xu(n,e){return Ie(e)?e.findIndex(t=>yu(t,n)):Be(e)&&yu(e,n)?0:-1}const Od=n=>n[0]==="_"||n==="$stable",xc=n=>Ie(n)?n.map(vn):[vn(n)],s_=(n,e,t)=>{if(e._n)return e;const i=Ag((...r)=>xc(e(...r)),t);return i._c=!1,i},Id=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Od(r))continue;const s=n[r];if(Be(s))e[r]=s_(r,s,i);else if(s!=null){const o=xc(s);e[r]=()=>o}}},Nd=(n,e)=>{const t=xc(e);n.slots.default=()=>t},o_=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ye(e),Po(e,"_",t)):Id(e,n.slots={})}else n.slots={},e&&Nd(n,e);Po(n.slots,Ko,1)},a_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ke;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(St(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Id(e,r)),o=e}else e&&(Nd(n,e),o={default:1});if(s)for(const a in r)!Od(a)&&!(a in o)&&delete r[a]};function Fd(){return{app:null,config:{isNativeTag:Rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l_=0;function c_(n,e){return function(i,r=null){Be(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=Fd(),o=new Set;let a=!1;const l=s.app={_uid:l_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:R_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=zn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Jo(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Cl(n,e,t,i,r=!1){if(Ie(n)){n.forEach((h,p)=>Cl(h,e&&(Ie(e)?e[p]:e),t,i,r));return}if(xo(i)&&!r)return;const s=i.shapeFlag&4?Jo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ke?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,He(f,c)&&(f[c]=null)):Rt(c)&&(c.value=null)),Be(l))fi(l,a,12,[o,u]);else{const h=vt(l),p=Rt(l);if(h||p){const g=()=>{if(n.f){const m=h?He(f,l)?f[l]:u[l]:l.value;r?Ie(m)&&oc(m,s):Ie(m)?m.includes(s)||m.push(s):h?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,He(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=Og;function u_(n){return f_(n)}function f_(n,e){const t=km();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=un,insertStaticContent:g}=n,m=(L,v,E,S=null,z=null,X=null,Z=!1,ie=null,pe=!!v.dynamicChildren)=>{if(L===v)return;L&&!Ci(L,v)&&(S=j(L),Q(L,z,X,!0),L=null),v.patchFlag===-2&&(pe=!1,v.dynamicChildren=null);const{type:le,ref:P,shapeFlag:T}=v;switch(le){case bc:d(L,v,E,S);break;case fn:_(L,v,E,S);break;case ya:L==null&&w(v,E,S,Z);break;case Xt:ne(L,v,E,S,z,X,Z,ie,pe);break;default:T&1?y(L,v,E,S,z,X,Z,ie,pe):T&6?G(L,v,E,S,z,X,Z,ie,pe):(T&64||T&128)&&le.process(L,v,E,S,z,X,Z,ie,pe,_e)}P!=null&&z&&Cl(P,L&&L.ref,X,v||L,!v)},d=(L,v,E,S)=>{if(L==null)i(v.el=a(v.children),E,S);else{const z=v.el=L.el;v.children!==L.children&&c(z,v.children)}},_=(L,v,E,S)=>{L==null?i(v.el=l(v.children||""),E,S):v.el=L.el},w=(L,v,E,S)=>{[L.el,L.anchor]=g(L.children,v,E,S,L.el,L.anchor)},M=({el:L,anchor:v},E,S)=>{let z;for(;L&&L!==v;)z=h(L),i(L,E,S),L=z;i(v,E,S)},b=({el:L,anchor:v})=>{let E;for(;L&&L!==v;)E=h(L),r(L),L=E;r(v)},y=(L,v,E,S,z,X,Z,ie,pe)=>{Z=Z||v.type==="svg",L==null?A(v,E,S,z,X,Z,ie,pe):C(L,v,z,X,Z,ie,pe)},A=(L,v,E,S,z,X,Z,ie)=>{let pe,le;const{type:P,props:T,shapeFlag:V,transition:ae,dirs:he}=L;if(pe=L.el=o(L.type,X,T&&T.is,T),V&8?u(pe,L.children):V&16&&x(L.children,pe,null,S,z,X&&P!=="foreignObject",Z,ie),he&&xi(L,null,S,"created"),T){for(const we in T)we!=="value"&&!vo(we)&&s(pe,we,null,T[we],X,L.children,S,z,W);"value"in T&&s(pe,"value",null,T.value),(le=T.onVnodeBeforeMount)&&mn(le,S,L)}O(pe,L,L.scopeId,Z,S),he&&xi(L,null,S,"beforeMount");const ve=(!z||z&&!z.pendingBranch)&&ae&&!ae.persisted;ve&&ae.beforeEnter(pe),i(pe,v,E),((le=T&&T.onVnodeMounted)||ve||he)&&It(()=>{le&&mn(le,S,L),ve&&ae.enter(pe),he&&xi(L,null,S,"mounted")},z)},O=(L,v,E,S,z)=>{if(E&&p(L,E),S)for(let X=0;X<S.length;X++)p(L,S[X]);if(z){let X=z.subTree;if(v===X){const Z=z.vnode;O(L,Z,Z.scopeId,Z.slotScopeIds,z.parent)}}},x=(L,v,E,S,z,X,Z,ie,pe=0)=>{for(let le=pe;le<L.length;le++){const P=L[le]=ie?si(L[le]):vn(L[le]);m(null,P,v,E,S,z,X,Z,ie)}},C=(L,v,E,S,z,X,Z)=>{const ie=v.el=L.el;let{patchFlag:pe,dynamicChildren:le,dirs:P}=v;pe|=L.patchFlag&16;const T=L.props||Ke,V=v.props||Ke;let ae;E&&bi(E,!1),(ae=V.onVnodeBeforeUpdate)&&mn(ae,E,v,L),P&&xi(v,L,E,"beforeUpdate"),E&&bi(E,!0);const he=z&&v.type!=="foreignObject";if(le?I(L.dynamicChildren,le,ie,E,S,he,X):Z||K(L,v,ie,null,E,S,he,X,!1),pe>0){if(pe&16)q(ie,v,T,V,E,S,z);else if(pe&2&&T.class!==V.class&&s(ie,"class",null,V.class,z),pe&4&&s(ie,"style",T.style,V.style,z),pe&8){const ve=v.dynamicProps;for(let we=0;we<ve.length;we++){const N=ve[we],Y=T[N],Se=V[N];(Se!==Y||N==="value")&&s(ie,N,Y,Se,z,L.children,E,S,W)}}pe&1&&L.children!==v.children&&u(ie,v.children)}else!Z&&le==null&&q(ie,v,T,V,E,S,z);((ae=V.onVnodeUpdated)||P)&&It(()=>{ae&&mn(ae,E,v,L),P&&xi(v,L,E,"updated")},S)},I=(L,v,E,S,z,X,Z)=>{for(let ie=0;ie<v.length;ie++){const pe=L[ie],le=v[ie],P=pe.el&&(pe.type===Xt||!Ci(pe,le)||pe.shapeFlag&70)?f(pe.el):E;m(pe,le,P,null,S,z,X,Z,!0)}},q=(L,v,E,S,z,X,Z)=>{if(E!==S){if(E!==Ke)for(const ie in E)!vo(ie)&&!(ie in S)&&s(L,ie,E[ie],null,Z,v.children,z,X,W);for(const ie in S){if(vo(ie))continue;const pe=S[ie],le=E[ie];pe!==le&&ie!=="value"&&s(L,ie,le,pe,Z,v.children,z,X,W)}"value"in S&&s(L,"value",E.value,S.value)}},ne=(L,v,E,S,z,X,Z,ie,pe)=>{const le=v.el=L?L.el:a(""),P=v.anchor=L?L.anchor:a("");let{patchFlag:T,dynamicChildren:V,slotScopeIds:ae}=v;ae&&(ie=ie?ie.concat(ae):ae),L==null?(i(le,E,S),i(P,E,S),x(v.children,E,P,z,X,Z,ie,pe)):T>0&&T&64&&V&&L.dynamicChildren?(I(L.dynamicChildren,V,E,z,X,Z,ie),(v.key!=null||z&&v===z.subTree)&&kd(L,v,!0)):K(L,v,E,P,z,X,Z,ie,pe)},G=(L,v,E,S,z,X,Z,ie,pe)=>{v.slotScopeIds=ie,L==null?v.shapeFlag&512?z.ctx.activate(v,E,S,Z,pe):D(v,E,S,z,X,Z,pe):F(L,v,pe)},D=(L,v,E,S,z,X,Z)=>{const ie=L.component=w_(L,S,z);if(Yo(L)&&(ie.ctx.renderer=_e),S_(ie),ie.asyncDep){if(z&&z.registerDep(ie,U),!L.el){const pe=ie.subTree=zn(fn);_(null,pe,v,E)}return}U(ie,L,v,E,z,X,Z)},F=(L,v,E)=>{const S=v.component=L.component;if(Lg(L,v,E))if(S.asyncDep&&!S.asyncResolved){re(S,v,E);return}else S.next=v,bg(S.update),S.update();else v.el=L.el,S.vnode=v},U=(L,v,E,S,z,X,Z)=>{const ie=()=>{if(L.isMounted){let{next:P,bu:T,u:V,parent:ae,vnode:he}=L,ve=P,we;bi(L,!1),P?(P.el=he.el,re(L,P,Z)):P=he,T&&yo(T),(we=P.props&&P.props.onVnodeBeforeUpdate)&&mn(we,ae,P,he),bi(L,!0);const N=ma(L),Y=L.subTree;L.subTree=N,m(Y,N,f(Y.el),j(Y),L,z,X),P.el=N.el,ve===null&&Rg(L,N.el),V&&It(V,z),(we=P.props&&P.props.onVnodeUpdated)&&It(()=>mn(we,ae,P,he),z)}else{let P;const{el:T,props:V}=v,{bm:ae,m:he,parent:ve}=L,we=xo(v);if(bi(L,!1),ae&&yo(ae),!we&&(P=V&&V.onVnodeBeforeMount)&&mn(P,ve,v),bi(L,!0),T&&Ae){const N=()=>{L.subTree=ma(L),Ae(T,L.subTree,L,z,null)};we?v.type.__asyncLoader().then(()=>!L.isUnmounted&&N()):N()}else{const N=L.subTree=ma(L);m(null,N,E,S,L,z,X),v.el=N.el}if(he&&It(he,z),!we&&(P=V&&V.onVnodeMounted)){const N=v;It(()=>mn(P,ve,N),z)}(v.shapeFlag&256||ve&&xo(ve.vnode)&&ve.vnode.shapeFlag&256)&&L.a&&It(L.a,z),L.isMounted=!0,v=E=S=null}},pe=L.effect=new cc(ie,()=>vc(le),L.scope),le=L.update=()=>pe.run();le.id=L.uid,bi(L,!0),le()},re=(L,v,E)=>{v.component=L;const S=L.vnode.props;L.vnode=v,L.next=null,r_(L,v.props,S,E),a_(L,v.children,E),Br(),uu(),Ur()},K=(L,v,E,S,z,X,Z,ie,pe=!1)=>{const le=L&&L.children,P=L?L.shapeFlag:0,T=v.children,{patchFlag:V,shapeFlag:ae}=v;if(V>0){if(V&128){k(le,T,E,S,z,X,Z,ie,pe);return}else if(V&256){$(le,T,E,S,z,X,Z,ie,pe);return}}ae&8?(P&16&&W(le,z,X),T!==le&&u(E,T)):P&16?ae&16?k(le,T,E,S,z,X,Z,ie,pe):W(le,z,X,!0):(P&8&&u(E,""),ae&16&&x(T,E,S,z,X,Z,ie,pe))},$=(L,v,E,S,z,X,Z,ie,pe)=>{L=L||Sr,v=v||Sr;const le=L.length,P=v.length,T=Math.min(le,P);let V;for(V=0;V<T;V++){const ae=v[V]=pe?si(v[V]):vn(v[V]);m(L[V],ae,E,null,z,X,Z,ie,pe)}le>P?W(L,z,X,!0,!1,T):x(v,E,S,z,X,Z,ie,pe,T)},k=(L,v,E,S,z,X,Z,ie,pe)=>{let le=0;const P=v.length;let T=L.length-1,V=P-1;for(;le<=T&&le<=V;){const ae=L[le],he=v[le]=pe?si(v[le]):vn(v[le]);if(Ci(ae,he))m(ae,he,E,null,z,X,Z,ie,pe);else break;le++}for(;le<=T&&le<=V;){const ae=L[T],he=v[V]=pe?si(v[V]):vn(v[V]);if(Ci(ae,he))m(ae,he,E,null,z,X,Z,ie,pe);else break;T--,V--}if(le>T){if(le<=V){const ae=V+1,he=ae<P?v[ae].el:S;for(;le<=V;)m(null,v[le]=pe?si(v[le]):vn(v[le]),E,he,z,X,Z,ie,pe),le++}}else if(le>V)for(;le<=T;)Q(L[le],z,X,!0),le++;else{const ae=le,he=le,ve=new Map;for(le=he;le<=V;le++){const Pe=v[le]=pe?si(v[le]):vn(v[le]);Pe.key!=null&&ve.set(Pe.key,le)}let we,N=0;const Y=V-he+1;let Se=!1,Ce=0;const Te=new Array(Y);for(le=0;le<Y;le++)Te[le]=0;for(le=ae;le<=T;le++){const Pe=L[le];if(N>=Y){Q(Pe,z,X,!0);continue}let ke;if(Pe.key!=null)ke=ve.get(Pe.key);else for(we=he;we<=V;we++)if(Te[we-he]===0&&Ci(Pe,v[we])){ke=we;break}ke===void 0?Q(Pe,z,X,!0):(Te[ke-he]=le+1,ke>=Ce?Ce=ke:Se=!0,m(Pe,v[ke],E,null,z,X,Z,ie,pe),N++)}const Le=Se?h_(Te):Sr;for(we=Le.length-1,le=Y-1;le>=0;le--){const Pe=he+le,ke=v[Pe],H=Pe+1<P?v[Pe+1].el:S;Te[le]===0?m(null,ke,E,H,z,X,Z,ie,pe):Se&&(we<0||le!==Le[we]?ee(ke,E,H,2):we--)}}},ee=(L,v,E,S,z=null)=>{const{el:X,type:Z,transition:ie,children:pe,shapeFlag:le}=L;if(le&6){ee(L.component.subTree,v,E,S);return}if(le&128){L.suspense.move(v,E,S);return}if(le&64){Z.move(L,v,E,_e);return}if(Z===Xt){i(X,v,E);for(let T=0;T<pe.length;T++)ee(pe[T],v,E,S);i(L.anchor,v,E);return}if(Z===ya){M(L,v,E);return}if(S!==2&&le&1&&ie)if(S===0)ie.beforeEnter(X),i(X,v,E),It(()=>ie.enter(X),z);else{const{leave:T,delayLeave:V,afterLeave:ae}=ie,he=()=>i(X,v,E),ve=()=>{T(X,()=>{he(),ae&&ae()})};V?V(X,he,ve):ve()}else i(X,v,E)},Q=(L,v,E,S=!1,z=!1)=>{const{type:X,props:Z,ref:ie,children:pe,dynamicChildren:le,shapeFlag:P,patchFlag:T,dirs:V}=L;if(ie!=null&&Cl(ie,null,E,L,!0),P&256){v.ctx.deactivate(L);return}const ae=P&1&&V,he=!xo(L);let ve;if(he&&(ve=Z&&Z.onVnodeBeforeUnmount)&&mn(ve,v,L),P&6)se(L.component,E,S);else{if(P&128){L.suspense.unmount(E,S);return}ae&&xi(L,null,v,"beforeUnmount"),P&64?L.type.remove(L,v,E,z,_e,S):le&&(X!==Xt||T>0&&T&64)?W(le,v,E,!1,!0):(X===Xt&&T&384||!z&&P&16)&&W(pe,v,E),S&&ue(L)}(he&&(ve=Z&&Z.onVnodeUnmounted)||ae)&&It(()=>{ve&&mn(ve,v,L),ae&&xi(L,null,v,"unmounted")},E)},ue=L=>{const{type:v,el:E,anchor:S,transition:z}=L;if(v===Xt){ce(E,S);return}if(v===ya){b(L);return}const X=()=>{r(E),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(L.shapeFlag&1&&z&&!z.persisted){const{leave:Z,delayLeave:ie}=z,pe=()=>Z(E,X);ie?ie(L.el,X,pe):pe()}else X()},ce=(L,v)=>{let E;for(;L!==v;)E=h(L),r(L),L=E;r(v)},se=(L,v,E)=>{const{bum:S,scope:z,update:X,subTree:Z,um:ie}=L;S&&yo(S),z.stop(),X&&(X.active=!1,Q(Z,L,v,E)),ie&&It(ie,v),It(()=>{L.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},W=(L,v,E,S=!1,z=!1,X=0)=>{for(let Z=X;Z<L.length;Z++)Q(L[Z],v,E,S,z)},j=L=>L.shapeFlag&6?j(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el),oe=(L,v,E)=>{L==null?v._vnode&&Q(v._vnode,null,null,!0):m(v._vnode||null,L,v,null,null,null,E),uu(),_d(),v._vnode=L},_e={p:m,um:Q,m:ee,r:ue,mt:D,mc:x,pc:K,pbc:I,n:j,o:n};let me,Ae;return e&&([me,Ae]=e(_e)),{render:oe,hydrate:me,createApp:c_(oe,me)}}function bi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function kd(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),t||kd(o,a))}}function h_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const d_=n=>n.__isTeleport,Xt=Symbol(void 0),bc=Symbol(void 0),fn=Symbol(void 0),ya=Symbol(void 0),cs=[];let ln=null;function ut(n=!1){cs.push(ln=n?null:[])}function p_(){cs.pop(),ln=cs[cs.length-1]||null}let _s=1;function bu(n){_s+=n}function zd(n){return n.dynamicChildren=_s>0?ln||Sr:null,p_(),_s>0&&ln&&ln.push(n),n}function Pt(n,e,t,i,r,s){return zd(De(n,e,t,i,r,s,!0))}function vs(n,e,t,i,r){return zd(zn(n,e,t,i,r,!0))}function m_(n){return n?n.__v_isVNode===!0:!1}function Ci(n,e){return n.type===e.type&&n.key===e.key}const Ko="__vInternal",Bd=({key:n})=>n!=null?n:null,bo=({ref:n,ref_key:e,ref_for:t})=>n!=null?vt(n)||Rt(n)||Be(n)?{i:Zt,r:n,k:e,f:!!t}:n:null;function De(n,e=null,t=null,i=0,r=null,s=n===Xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bd(e),ref:e&&bo(e),scopeId:Xo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(wc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),_s>0&&!o&&ln&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ln.push(l),l}const zn=g_;function g_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Yg)&&(n=fn),m_(n)){const a=mi(n,e,!0);return t&&wc(a,t),_s>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag|=-2,a}if(P_(n)&&(n=n.__vccOpts),e){e=__(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=ic(a)),et(l)&&(fd(l)&&!Ie(l)&&(l=St({},l)),e.style=nc(l))}const o=vt(n)?1:Dg(n)?128:d_(n)?64:et(n)?4:Be(n)?2:0;return De(n,e,t,i,r,o,s,!0)}function __(n){return n?fd(n)||Ko in n?St({},n):n:null}function mi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?y_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Bd(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(bo(e)):[r,bo(e)]:bo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mi(n.ssContent),ssFallback:n.ssFallback&&mi(n.ssFallback),el:n.el,anchor:n.anchor}}function v_(n=" ",e=0){return zn(bc,null,n,e)}function ri(n="",e=!1){return e?(ut(),vs(fn,null,n)):zn(fn,null,n)}function vn(n){return n==null||typeof n=="boolean"?zn(fn):Ie(n)?zn(Xt,null,n.slice()):typeof n=="object"?si(n):zn(bc,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mi(n)}function wc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ko in e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),i&64?(t=16,e=[v_(e)]):t=8);n.children=e,n.shapeFlag|=t}function y_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ic([e.class,i.class]));else if(r==="style")e.style=nc([e.style,i.style]);else if(Ho(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(n,e,t,i=null){Jt(n,e,7,[t,i])}const x_=Fd();let b_=0;function w_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||x_,s={uid:b_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dd(i,r),emitsOptions:yd(i,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:i.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Sg.bind(null,s),n.ce&&n.ce(s),s}let mt=null;const M_=()=>mt||Zt,Lr=n=>{mt=n,n.scope.on()},Ui=()=>{mt&&mt.scope.off(),mt=null};function Ud(n){return n.vnode.shapeFlag&4}let ys=!1;function S_(n,e=!1){ys=e;const{props:t,children:i}=n.vnode,r=Ud(n);i_(n,t,r,e),o_(n,i);const s=r?T_(n,e):void 0;return ys=!1,s}function T_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=hd(new Proxy(n.ctx,Kg));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?A_(n):null;Lr(n),Br();const s=fi(i,n,0,[n.props,r]);if(Ur(),Ui(),Zh(s)){if(s.then(Ui,Ui),e)return s.then(o=>{wu(n,o,e)}).catch(o=>{$o(o,n,0)});n.asyncDep=s}else wu(n,s,e)}else Vd(n,e)}function wu(n,e,t){Be(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=dd(e)),Vd(n,t)}let Mu;function Vd(n,e,t){const i=n.type;if(!n.render){if(!e&&Mu&&!i.render){const r=i.template||yc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:a},o),l);i.render=Mu(r,c)}}n.render=i.render||un}Lr(n),Br(),Jg(n),Ur(),Ui()}function E_(n){return new Proxy(n.attrs,{get(e,t){return Ht(n,"get","$attrs"),e[t]}})}function A_(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=E_(n))},slots:n.slots,emit:n.emit,expose:e}}function Jo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(dd(hd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Do)return Do[t](n)}}))}function C_(n,e=!0){return Be(n)?n.displayName||n.name:n.name||e&&n.__name}function P_(n){return Be(n)&&"__vccOpts"in n}const L_=(n,e)=>_g(n,e,ys),R_="3.2.41",D_="http://www.w3.org/2000/svg",Pi=typeof document<"u"?document:null,Su=Pi&&Pi.createElement("template"),O_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Pi.createElementNS(D_,n):Pi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Pi.createTextNode(n),createComment:n=>Pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Su.innerHTML=i?`<svg>${n}</svg>`:n;const a=Su.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function I_(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function N_(n,e,t){const i=n.style,r=vt(t);if(t&&!r){for(const s in t)Pl(i,s,t[s]);if(e&&!vt(e))for(const s in e)t[s]==null&&Pl(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Tu=/\s*!important$/;function Pl(n,e,t){if(Ie(t))t.forEach(i=>Pl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=F_(n,e);Tu.test(t)?n.setProperty(zr(i),t.replace(Tu,""),"important"):n[i]=t}}const Eu=["Webkit","Moz","ms"],xa={};function F_(n,e){const t=xa[e];if(t)return t;let i=Sn(e);if(i!=="filter"&&i in n)return xa[e]=i;i=Wo(i);for(let r=0;r<Eu.length;r++){const s=Eu[r]+i;if(s in n)return xa[e]=s}return e}const Au="http://www.w3.org/1999/xlink";function k_(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Au,e.slice(6,e.length)):n.setAttributeNS(Au,e,t);else{const s=Em(e);t==null||s&&!Xh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function z_(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Xh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Mc(n,e,t,i){n.addEventListener(e,t,i)}function B_(n,e,t,i){n.removeEventListener(e,t,i)}function U_(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=V_(e);if(i){const c=s[e]=W_(i,r);Mc(n,a,c,l)}else o&&(B_(n,a,o,l),s[e]=void 0)}}const Cu=/(?:Once|Passive|Capture)$/;function V_(n){let e;if(Cu.test(n)){e={};let i;for(;i=n.match(Cu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):zr(n.slice(2)),e]}let ba=0;const H_=Promise.resolve(),G_=()=>ba||(H_.then(()=>ba=0),ba=Date.now());function W_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jt(j_(i,t.value),e,5,[i])};return t.value=n,t.attached=G_(),t}function j_(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pu=/^on[a-z]/,$_=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?I_(n,i,r):e==="style"?N_(n,t,i):Ho(e)?sc(e)||U_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q_(n,e,i,r))?z_(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),k_(n,e,i,r))};function q_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Pu.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Pu.test(e)&&vt(t)?!1:e in n}const X_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};zg.props;const Io=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>yo(e,t):e},Y_={deep:!0,created(n,e,t){n._assign=Io(t),Mc(n,"change",()=>{const i=n._modelValue,r=xs(n),s=n.checked,o=n._assign;if(Ie(i)){const a=rc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(kr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Hd(n,s))})},mounted:Lu,beforeUpdate(n,e,t){n._assign=Io(t),Lu(n,e,t)}};function Lu(n,{value:e,oldValue:t},i){n._modelValue=e,Ie(e)?n.checked=rc(e,i.props.value)>-1:kr(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Ts(e,Hd(n,!0)))}const Bs={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=kr(e);Mc(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Qh(xs(o)):xs(o));n._assign(n.multiple?r?new Set(s):s:s[0])}),n._assign=Io(i)},mounted(n,{value:e}){Ru(n,e)},beforeUpdate(n,e,t){n._assign=Io(t)},updated(n,{value:e}){Ru(n,e)}};function Ru(n,e){const t=n.multiple;if(!(t&&!Ie(e)&&!kr(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=xs(s);if(t)Ie(e)?s.selected=rc(e,o)>-1:s.selected=e.has(o);else if(Ts(xs(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function xs(n){return"_value"in n?n._value:n.value}function Hd(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Z_=St({patchProp:$_},O_);let Du;function K_(){return Du||(Du=u_(Z_))}const J_=(...n)=>{const e=K_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Q_(i);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Q_(n){return vt(n)?document.querySelector(n):n}const As=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ev="2ed0e6e8b06842fb854cb15e1690a7b5",tv="user-follow-read user-top-read",nv={name:"LoginPage",methods:{login(){window.location.href=`https://accounts.spotify.com/authorize?client_id=${ev}&response_type=token&redirect_uri=${window.location.origin}&scope=${tv}&show_dialog=true`}}},iv={class:"bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"},rv={class:"grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center"},sv={class:"w-6/7 md:w-fit space-y-3"},ov=De("div",{class:"rounded-md shadow-2xl text-center p-4 bg-base03"},[De("main",null,[De("h1",{class:"text-3xl font-bold text-base1"},"Artist Constellations"),De("p",{class:"text-base0"}," View the artists you listen to on Spotify in a 3D constellations! ")])],-1),av={class:"w-full flex shadow-lg hover:shadow-2xl"};function lv(n,e,t,i,r,s){return ut(),Pt("div",iv,[De("div",rv,[De("div",sv,[ov,De("div",av,[De("button",{onClick:e[0]||(e[0]=(...o)=>s.login&&s.login(...o)),class:"grow px-2 py-1 text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"}," Start Here ")])])])])}const cv=As(nv,[["render",lv]]),uv={name:"UserInfo",props:["me"]},fv={class:"w-full flow-root px-2 py-1 rounded-md bg-base02 space-x-3 select-none shadow-md items-center"},hv={class:"float-left align-middle font-bold text-sm md:text-base"},dv=["src"];function pv(n,e,t,i,r,s){return ut(),Pt("div",fv,[De("p",hv," User: "+ai(t.me.display_name.charAt(0).toUpperCase()+t.me.display_name.slice(1)),1),De("img",{src:t.me.images[0].url,alt:"Profile Picture",class:"float-right w-6 h-6 rounded-full"},null,8,dv)])}const mv=As(uv,[["render",pv]]);class gv{constructor(e){ha(this,"value");ha(this,"next");this.value=e}}var _n,ki,zi;class _v{constructor(){Os(this,_n,void 0);Os(this,ki,void 0);Os(this,zi,void 0);this.clear()}enqueue(e){const t=new gv(e);qn(this,_n)?(qn(this,ki).next=t,An(this,ki,t)):(An(this,_n,t),An(this,ki,t)),da(this,zi)._++}dequeue(){const e=qn(this,_n);if(!!e)return An(this,_n,qn(this,_n).next),da(this,zi)._--,e.value}clear(){An(this,_n,void 0),An(this,ki,void 0),An(this,zi,0)}get size(){return qn(this,zi)}*[Symbol.iterator](){let e=qn(this,_n);for(;e;)yield e.value,e=e.next}}_n=new WeakMap,ki=new WeakMap,zi=new WeakMap;function vv(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new _v;let t=0;const i=()=>{t--,e.size>0&&e.dequeue()()},r=async(a,l,c)=>{t++;const u=(async()=>a(...c))();l(u);try{await u}catch{}i()},s=(a,l,c)=>{e.enqueue(r.bind(void 0,a,l,c)),(async()=>(await Promise.resolve(),t<n&&e.size>0&&e.dequeue()()))()},o=(a,...l)=>new Promise(c=>{s(a,c,l)});return Object.defineProperties(o,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),o}function Gd(n){var o,a;let e=n.name,t=n.genres,i=n.id,r=n.popularity,s=(a=(o=n==null?void 0:n.images[0])==null?void 0:o.url)!=null?a:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png";return{name:e,genres:t,id:i,img:s,popularity:r}}async function yv(){let n=await Ou(),e=n.cursor,t=n.artists;for(;e!=null;){let i=await Ou(e);e=i.cursor,i.artists.forEach(function(r){t.push(r)})}return t}async function xv(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/top-tracks?market=US`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&$i(),t.error;return t.tracks}async function Ou(n){let e;n==null?e="https://api.spotify.com/v1/me/following?type=artist&limit=50":e=`https://api.spotify.com/v1/me/following?type=artist&after=${n}&limit=50`;let i=await(await fetch(e,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(i.error)throw(i.error.status=401)&&$i(),i.error;let r=new Array;i.artists.items.forEach(function(o){r.push(Gd(o))});let s=i.artists.cursors.after;return{artists:r,cursor:s}}async function bv(){let e=await(await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(e.error)throw e.error.status==401&&$i(),e.error;return e}async function wv(n){let e=[];n.forEach(function(s){e.push(s.id)});let t=vv(4),i=await Promise.all(n.map(s=>t(()=>Mv(s)))),r=[];for(const s of i)for(const o of s.relatedArtists)if(e.includes(o.id)){let a={source:s.id,target:o.id},l={source:o.id,target:s.id};!r.includes(a)&&!r.includes(l)&&r.push(a)}return r}async function Mv(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/related-artists`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&$i(),t.error;let i=[];return t.artists.forEach(function(r){i.push({name:r.name,id:r.id})}),{name:n.name,id:n.id,relatedArtists:i}}async function Sv(n){let t=await(await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${n}&limit=50`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&$i(),t.error;let i=[];return t.items.forEach(function(r){i.push(Gd(r))}),i}function $i(){localStorage.removeItem("userToken"),localStorage.removeItem("lastLoggedIn"),window.location.href=window.location.href.split("?")[0].split("#")[0]}const Tv={name:"ArtistInfo",props:{artist:Object},data(){return{topTracks:null}},methods:{async revealTopTracks(){this.topTracks=await xv(this.artist).catch(n=>{this.error=n}),console.log(this.topTracks)}}},Ev={class:"overflow-y-auto"},Av={class:"rounded-md bg-base03 shadow-md py-2 space-y-2 text-center"},Cv=["href"],Pv={class:"md:text-2xl font-semibold mb-2"},Lv=["src"],Rv={class:"text-sm italic"},Dv={key:0},Ov=De("p",{class:"font-bold"},"Genres:",-1),Iv={class:"text-sm ml-2"};function Nv(n,e,t,i,r,s){return ut(),Pt("div",Ev,[De("div",Av,[De("a",{href:"https://open.spotify.com/artist/"+t.artist.id,target:"_blank",rel:"noopener noreferrer",class:"block"},[De("p",Pv,ai(t.artist.name),1),De("img",{src:t.artist.img,alt:"Artist Profile Picture",class:"rounded-md w-2/3 mx-auto"},null,8,Lv)],8,Cv),De("p",Rv,"Popularity: "+ai(t.artist.popularity)+"%",1),t.artist.genres.length>0?(ut(),Pt("div",Dv,[Ov,(ut(!0),Pt(Xt,null,Pd(t.artist.genres,o=>(ut(),Pt("div",{key:o},[De("p",Iv,"\u2022 "+ai(o),1)]))),128))])):ri("",!0)])])}const Fv=As(Tv,[["render",Nv]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="145",yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kv=0,Iu=1,zv=2,Wd=1,Bv=2,rs=3,Rr=0,Vt=1,li=2,hi=0,Cr=1,Nu=2,Fu=3,ku=4,Uv=5,yr=100,Vv=101,Hv=102,zu=103,Bu=104,Gv=200,Wv=201,jv=202,$v=203,jd=204,$d=205,qv=206,Xv=207,Yv=208,Zv=209,Kv=210,Jv=0,Qv=1,e0=2,Ll=3,t0=4,n0=5,i0=6,r0=7,Tc=0,s0=1,o0=2,Bn=0,a0=1,l0=2,c0=3,u0=4,f0=5,qd=300,Dr=301,Or=302,Rl=303,Dl=304,Qo=306,Ol=1e3,an=1001,Il=1002,Nt=1003,Uu=1004,Vu=1005,Ut=1006,h0=1007,ea=1008,Gi=1009,d0=1010,p0=1011,Xd=1012,m0=1013,Ii=1014,Ni=1015,bs=1016,g0=1017,_0=1018,Pr=1020,v0=1021,y0=1022,Mn=1023,x0=1024,b0=1025,Vi=1026,Ir=1027,w0=1028,M0=1029,S0=1030,T0=1031,E0=1033,wa=33776,Ma=33777,Sa=33778,Ta=33779,Hu=35840,Gu=35841,Wu=35842,ju=35843,A0=36196,$u=37492,qu=37496,Xu=37808,Yu=37809,Zu=37810,Ku=37811,Ju=37812,Qu=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,lf=37821,cf=36492,Wi=3e3,st=3001,C0=3200,P0=3201,Yd=0,L0=1,Nn="srgb",Fi="srgb-linear",Ea=7680,R0=519,Nl=35044,uf="300 es",Fl=1035;class dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Aa=Math.PI/180,ff=180/Math.PI;function di(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function D0(n,e){return(n%e+e)%e}function Ca(n,e,t){return(1-t)*n+t*e}function hf(n){return(n&n-1)===0&&n!==0}function kl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Je(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],m=r[0],d=r[3],_=r[6],w=r[1],M=r[4],b=r[7],y=r[2],A=r[5],O=r[8];return s[0]=o*m+a*w+l*y,s[3]=o*d+a*M+l*A,s[6]=o*_+a*b+l*O,s[1]=c*m+u*w+f*y,s[4]=c*d+u*M+f*A,s[7]=c*_+u*b+f*O,s[2]=h*m+p*w+g*y,s[5]=h*d+p*M+g*A,s[8]=h*_+p*b+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Pa={[Nn]:{[Fi]:Hi},[Fi]:{[Nn]:wo}},en={legacyMode:!0,get workingColorSpace(){return Fi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Pa[e]&&Pa[e][t]!==void 0){const i=Pa[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},tn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Vs(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Fi){return this.r=e,this.g=t,this.b=i,en.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Fi){if(e=D0(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=La(o,s,e+1/3),this.g=La(o,s,e),this.b=La(o,s,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,en.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,en.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,en.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,en.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nn){const i=Kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return en.fromWorkingColorSpace(Vs(this,ft),e),wt(ft.r*255,0,255)<<16^wt(ft.g*255,0,255)<<8^wt(ft.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fi){en.fromWorkingColorSpace(Vs(this,ft),t);const i=ft.r,r=ft.g,s=ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Fi){return en.fromWorkingColorSpace(Vs(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Nn){return en.fromWorkingColorSpace(Vs(this,ft),e),e!==Nn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=i,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(Us);const i=Ca(tn.h,Us.h,t),r=Ca(tn.s,Us.s,t),s=Ca(tn.l,Us.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=Kd;let Qi;class Jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ws("canvas")),Qi.width=e.width,Qi.height=e.height;const i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hi(t[i]/255)*255):t[i]=Hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qd{constructor(e=null){this.isSource=!0,this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ra(r[o].image)):s.push(Ra(r[o]))}else s=Ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O0=0;class Gt extends dn{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=an,r=an,s=Ut,o=ea,a=Mn,l=Gi,c=1,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=di(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=qd;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(p+1)/2,y=(_+1)/2,A=(u+h)/4,O=(f+m)/4,x=(g+d)/4;return M>b&&M>y?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=O/i):b>y?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=x/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=O/s,r=x/s),this.set(i,r,s,t),this}let w=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(f-m)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends dn{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ep extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class I0 extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==g){let d=1-a;const _=l*h+c*p+u*g+f*m,w=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),A=Math.atan2(y,_*w);d=Math.sin(d*A)/y,a=Math.sin(a*A)/y}const b=a*w;if(l=l*d+h*b,c=c*d+p*b,u=u*d+g*b,f=f*d+m*b,d===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new B,df=new hn;class qi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox),Oa.applyMatrix4(e.matrixWorld),this.union(Oa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Hs.subVectors(this.max,jr),er.subVectors(e.a,jr),tr.subVectors(e.b,jr),nr.subVectors(e.c,jr),Yn.subVectors(tr,er),Zn.subVectors(nr,tr),Mi.subVectors(er,nr);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-Mi.z,Mi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,Mi.z,0,-Mi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-Mi.y,Mi.x,0];return!Ia(t,er,tr,nr,Hs)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,er,tr,nr,Hs))?!1:(Gs.crossVectors(Yn,Zn),t=[Gs.x,Gs.y,Gs.z],Ia(t,er,tr,nr,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new B,new B,new B,new B,new B,new B,new B,new B],wi=new B,Oa=new qi,er=new B,tr=new B,nr=new B,Yn=new B,Zn=new B,Mi=new B,jr=new B,Hs=new B,Gs=new B,Si=new B;function Ia(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Si.fromArray(n,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const N0=new qi,pf=new B,Ws=new B,Na=new B;class ta{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):N0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Na.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Ws.set(0,0,1).multiplyScalar(e.radius):Ws.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(pf.copy(e.center).add(Ws)),this.expandByPoint(pf.copy(e.center).sub(Ws)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new B,Fa=new B,js=new B,Kn=new B,ka=new B,$s=new B,za=new B;class Ec{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.direction).multiplyScalar(t).add(this.origin),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fa.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=Kn.dot(this.direction),l=-Kn.dot(js),c=Kn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(js).multiplyScalar(h).add(Fa),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){ka.subVectors(t,e),$s.subVectors(i,e),za.crossVectors(ka,$s);let o=this.direction.dot(za),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot($s.crossVectors(Kn,$s));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(za);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F0,e,k0)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Jn.crossVectors(i,zt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Jn.crossVectors(i,zt)),Jn.normalize(),qs.crossVectors(zt,Jn),r[0]=Jn.x,r[4]=qs.x,r[8]=zt.x,r[1]=Jn.y,r[5]=qs.y,r[9]=zt.y,r[2]=Jn.z,r[6]=qs.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],w=i[3],M=i[7],b=i[11],y=i[15],A=r[0],O=r[4],x=r[8],C=r[12],I=r[1],q=r[5],ne=r[9],G=r[13],D=r[2],F=r[6],U=r[10],re=r[14],K=r[3],$=r[7],k=r[11],ee=r[15];return s[0]=o*A+a*I+l*D+c*K,s[4]=o*O+a*q+l*F+c*$,s[8]=o*x+a*ne+l*U+c*k,s[12]=o*C+a*G+l*re+c*ee,s[1]=u*A+f*I+h*D+p*K,s[5]=u*O+f*q+h*F+p*$,s[9]=u*x+f*ne+h*U+p*k,s[13]=u*C+f*G+h*re+p*ee,s[2]=g*A+m*I+d*D+_*K,s[6]=g*O+m*q+d*F+_*$,s[10]=g*x+m*ne+d*U+_*k,s[14]=g*C+m*G+d*re+_*ee,s[3]=w*A+M*I+b*D+y*K,s[7]=w*O+M*q+b*F+y*$,s[11]=w*x+M*ne+b*U+y*k,s[15]=w*C+M*G+b*re+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+m*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+d*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],w=f*d*c-m*h*c+m*l*p-a*d*p-f*l*_+a*h*_,M=g*h*c-u*d*c-g*l*p+o*d*p+u*l*_-o*h*_,b=u*m*c-g*f*c+g*a*p-o*m*p-u*a*_+o*f*_,y=g*f*l-u*m*l-g*a*h+o*m*h+u*a*d-o*f*d,A=t*w+i*M+r*b+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/A;return e[0]=w*O,e[1]=(m*h*s-f*d*s-m*r*p+i*d*p+f*r*_-i*h*_)*O,e[2]=(a*d*s-m*l*s+m*r*c-i*d*c-a*r*_+i*l*_)*O,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*O,e[4]=M*O,e[5]=(u*d*s-g*h*s+g*r*p-t*d*p-u*r*_+t*h*_)*O,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*O,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*O,e[8]=b*O,e[9]=(g*f*s-u*m*s-g*i*p+t*m*p+u*i*_-t*f*_)*O,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*_+t*a*_)*O,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*O,e[12]=y*O,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*d+t*f*d)*O,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*d-t*a*d)*O,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,m=o*u,d=o*f,_=a*f,w=l*c,M=l*u,b=l*f,y=i.x,A=i.y,O=i.z;return r[0]=(1-(m+_))*y,r[1]=(p+b)*y,r[2]=(g-M)*y,r[3]=0,r[4]=(p-b)*A,r[5]=(1-(h+_))*A,r[6]=(d+w)*A,r[7]=0,r[8]=(g+M)*O,r[9]=(d-w)*O,r[10]=(1-(h+m))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/o,f=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ir=new B,nn=new tt,F0=new B(0,0,0),k0=new B(1,1,1),Jn=new B,qs=new B,zt=new B,mf=new tt,gf=new hn;class Cs{constructor(e=0,t=0,i=0,r=Cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Cs.DefaultOrder="XYZ";Cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const _f=new B,rr=new hn,Ln=new tt,Xs=new B,$r=new B,B0=new B,U0=new hn,vf=new B(1,0,0),yf=new B(0,1,0),xf=new B(0,0,1),V0={type:"added"},bf={type:"removed"};class _t extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DefaultUp.clone();const e=new B,t=new Cs,i=new hn,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Kt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=_t.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DefaultMatrixWorldAutoUpdate,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(yf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(yf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xs.copy(e):Xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt($r,Xs,this.up):Ln.lookAt(Xs,$r,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(Ln),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(V0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DefaultUp=new B(0,1,0);_t.DefaultMatrixAutoUpdate=!0;_t.DefaultMatrixWorldAutoUpdate=!0;const rn=new B,Rn=new B,Ba=new B,Dn=new B,sr=new B,or=new B,wf=new B,Ua=new B,Va=new B,Ha=new B;class wn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Rn.subVectors(i,t),Ba.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Rn),l=rn.dot(Ba),c=Rn.dot(Rn),u=Rn.dot(Ba),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dn),l.set(0,0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Rn.subVectors(e,t),rn.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),rn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return wn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;sr.subVectors(r,i),or.subVectors(s,i),Ua.subVectors(e,i);const l=sr.dot(Ua),c=or.dot(Ua);if(l<=0&&c<=0)return t.copy(i);Va.subVectors(e,r);const u=sr.dot(Va),f=or.dot(Va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(sr,o);Ha.subVectors(e,s);const p=sr.dot(Ha),g=or.dot(Ha);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(or,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return wf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(wf,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(i).addScaledVector(sr,o).addScaledVector(or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let H0=0;class Xi extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Cr,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jd,this.blendDst=$d,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ll,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cc extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new B,Ys=new xe;class Qt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tp extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class np extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let G0=0;const qt=new tt,Ga=new _t,ar=new B,Bt=new qi,qr=new qi,pt=new B;class Dt extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?np:tp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Kt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Bt.min,qr.min),Bt.expandByPoint(pt),pt.addVectors(Bt.max,qr.max),Bt.expandByPoint(pt)):(Bt.expandByPoint(qr.min),Bt.expandByPoint(qr.max))}Bt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(e,c),pt.add(ar)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new B,u[I]=new B;const f=new B,h=new B,p=new B,g=new xe,m=new xe,d=new xe,_=new B,w=new B;function M(I,q,ne){f.fromArray(r,I*3),h.fromArray(r,q*3),p.fromArray(r,ne*3),g.fromArray(o,I*2),m.fromArray(o,q*2),d.fromArray(o,ne*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const G=1/(m.x*d.y-d.x*m.y);!isFinite(G)||(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(G),w.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(G),c[I].add(_),c[q].add(_),c[ne].add(_),u[I].add(w),u[q].add(w),u[ne].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,q=b.length;I<q;++I){const ne=b[I],G=ne.start,D=ne.count;for(let F=G,U=G+D;F<U;F+=3)M(i[F+0],i[F+1],i[F+2])}const y=new B,A=new B,O=new B,x=new B;function C(I){O.fromArray(s,I*3),x.copy(O);const q=c[I];y.copy(q),y.sub(O.multiplyScalar(O.dot(q))).normalize(),A.crossVectors(x,q);const G=A.dot(u[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=G}for(let I=0,q=b.length;I<q;++I){const ne=b[I],G=ne.start,D=ne.count;for(let F=G,U=G+D;F<U;F+=3)C(i[F+0]),C(i[F+1]),C(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new Qt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mf=new tt,lr=new Ec,Wa=new ta,Qn=new B,ei=new B,ti=new B,ja=new B,$a=new B,qa=new B,Zs=new B,Ks=new B,Js=new B,Qs=new xe,eo=new xe,to=new xe,Xa=new B,no=new B;class cn extends _t{constructor(e=new Dt,t=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),e.ray.intersectsSphere(Wa)===!1)||(Mf.copy(s).invert(),lr.copy(e.ray).applyMatrix4(Mf),i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,A=b;y<A;y+=3){const O=a.getX(y),x=a.getX(y+1),C=a.getX(y+2);o=io(this,w,e,lr,l,c,u,f,h,O,x,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const M=a.getX(_),b=a.getX(_+1),y=a.getX(_+2);o=io(this,r,e,lr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,A=b;y<A;y+=3){const O=y,x=y+1,C=y+2;o=io(this,w,e,lr,l,c,u,f,h,O,x,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const M=_,b=_+1,y=_+2;o=io(this,r,e,lr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function W0(n,e,t,i,r,s,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==li,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,r,s,o,a,l,c,u,f){Qn.fromBufferAttribute(r,c),ei.fromBufferAttribute(r,u),ti.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Zs.set(0,0,0),Ks.set(0,0,0),Js.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],_=s[g];d!==0&&(ja.fromBufferAttribute(_,c),$a.fromBufferAttribute(_,u),qa.fromBufferAttribute(_,f),o?(Zs.addScaledVector(ja,d),Ks.addScaledVector($a,d),Js.addScaledVector(qa,d)):(Zs.addScaledVector(ja.sub(Qn),d),Ks.addScaledVector($a.sub(ei),d),Js.addScaledVector(qa.sub(ti),d)))}Qn.add(Zs),ei.add(Ks),ti.add(Js)}n.isSkinnedMesh&&(n.boneTransform(c,Qn),n.boneTransform(u,ei),n.boneTransform(f,ti));const p=W0(n,e,t,i,Qn,ei,ti,Xa);if(p){a&&(Qs.fromBufferAttribute(a,c),eo.fromBufferAttribute(a,u),to.fromBufferAttribute(a,f),p.uv=wn.getUV(Xa,Qn,ei,ti,Qs,eo,to,new xe)),l&&(Qs.fromBufferAttribute(l,c),eo.fromBufferAttribute(l,u),to.fromBufferAttribute(l,f),p.uv2=wn.getUV(Xa,Qn,ei,ti,Qs,eo,to,new xe));const g={a:c,b:u,c:f,normal:new B,materialIndex:0};wn.getNormal(Qn,ei,ti,g.normal),p.face=g}return p}class Ps extends Dt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function g(m,d,_,w,M,b,y,A,O,x,C){const I=b/O,q=y/x,ne=b/2,G=y/2,D=A/2,F=O+1,U=x+1;let re=0,K=0;const $=new B;for(let k=0;k<U;k++){const ee=k*q-G;for(let Q=0;Q<F;Q++){const ue=Q*I-ne;$[m]=ue*w,$[d]=ee*M,$[_]=D,c.push($.x,$.y,$.z),$[m]=0,$[d]=0,$[_]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(Q/O),f.push(1-k/x),re+=1}}for(let k=0;k<x;k++)for(let ee=0;ee<O;ee++){const Q=h+ee+F*k,ue=h+ee+F*(k+1),ce=h+(ee+1)+F*(k+1),se=h+(ee+1)+F*k;l.push(Q,ue,se),l.push(ue,ce,se),K+=6}a.addGroup(p,K,C),p+=K,h+=re}}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Nr(n[t]);for(const r in i)e[r]=i[r]}return e}function j0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const ip={clone:Nr,merge:bt};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=j0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rp extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends rp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ff*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=90,ur=1;class X0 extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Yt(cr,ur,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new B(1,0,0)),this.add(r);const s=new Yt(cr,ur,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(-1,0,0)),this.add(s);const o=new Yt(cr,ur,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new B(0,1,0)),this.add(o);const a=new Yt(cr,ur,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new B(0,-1,0)),this.add(a);const l=new Yt(cr,ur,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new B(0,0,1)),this.add(l);const c=new Yt(cr,ur,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new B(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Bn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class sp extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Y0 extends gi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ps(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:hi});s.uniforms.tEquirect.value=t;const o=new cn(r,s),a=t.minFilter;return t.minFilter===ea&&(t.minFilter=Ut),new X0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ya=new B,Z0=new B,K0=new Kt;class oi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ya.subVectors(i,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ya),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||K0.getNormalMatrix(e),r=this.coplanarPoint(Ya).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new ta,ro=new B;class Pc{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],w=i[14],M=i[15];return t[0].setComponents(a-r,f-l,m-h,M-d).normalize(),t[1].setComponents(a+r,f+l,m+h,M+d).normalize(),t[2].setComponents(a+s,f+c,m+p,M+_).normalize(),t[3].setComponents(a-s,f-c,m-p,M-_).normalize(),t[4].setComponents(a-o,f-u,m-g,M-w).normalize(),t[5].setComponents(a+o,f+u,m+g,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function op(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function J0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Lc extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const w=_*h-o;for(let M=0;M<c;M++){const b=M*f-s;g.push(b,-w,0),m.push(0,0,1),d.push(M/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const M=w+c*_,b=w+c*(_+1),y=w+1+c*(_+1),A=w+1+c*_;p.push(M,b,A),p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(d,2))}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sy="vec3 transformed = vec3( position );",oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ay=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,ly=`#ifdef USE_IRIDESCENCE
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
#endif`,cy=`#ifdef USE_BUMPMAP
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vy=`#define PI 3.141592653589793
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
}`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xy=`vec3 transformedNormal = objectNormal;
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
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ey=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Vy=`uniform bool receiveShadow;
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
#endif`,Hy=`#if defined( USE_ENVMAP )
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
#endif`,Gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,qy=`PhysicalMaterial material;
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
#endif`,Xy=`struct PhysicalMaterial {
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
}`,Yy=`
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
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
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
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ox=`float getShadowMask() {
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nx=`#ifdef USE_SKINNING
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
#endif`,Fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$x=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Xx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#include <envmap_common_pars_fragment>
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
}`,tb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
}`,ib=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ab=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,hb=`#define LAMBERT
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
}`,db=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,gb=`#define NORMAL
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
}`,_b=`#define PHONG
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
}`,vb=`#define PHONG
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
}`,yb=`#define STANDARD
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
}`,xb=`#define STANDARD
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
}`,bb=`#define TOON
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
}`,wb=`#define TOON
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
}`,Mb=`uniform float size;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Eb=`uniform vec3 color;
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
}`,Ab=`uniform float rotation;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:Q0,alphamap_pars_fragment:ey,alphatest_fragment:ty,alphatest_pars_fragment:ny,aomap_fragment:iy,aomap_pars_fragment:ry,begin_vertex:sy,beginnormal_vertex:oy,bsdfs:ay,iridescence_fragment:ly,bumpmap_pars_fragment:cy,clipping_planes_fragment:uy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:dy,color_fragment:py,color_pars_fragment:my,color_pars_vertex:gy,color_vertex:_y,common:vy,cube_uv_reflection_fragment:yy,defaultnormal_vertex:xy,displacementmap_pars_vertex:by,displacementmap_vertex:wy,emissivemap_fragment:My,emissivemap_pars_fragment:Sy,encodings_fragment:Ty,encodings_pars_fragment:Ey,envmap_fragment:Ay,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Hy,envmap_vertex:Ry,fog_vertex:Dy,fog_pars_vertex:Oy,fog_fragment:Iy,fog_pars_fragment:Ny,gradientmap_pars_fragment:Fy,lightmap_fragment:ky,lightmap_pars_fragment:zy,lights_lambert_fragment:By,lights_lambert_pars_fragment:Uy,lights_pars_begin:Vy,lights_toon_fragment:Gy,lights_toon_pars_fragment:Wy,lights_phong_fragment:jy,lights_phong_pars_fragment:$y,lights_physical_fragment:qy,lights_physical_pars_fragment:Xy,lights_fragment_begin:Yy,lights_fragment_maps:Zy,lights_fragment_end:Ky,logdepthbuf_fragment:Jy,logdepthbuf_pars_fragment:Qy,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:rx,map_particle_pars_fragment:sx,metalnessmap_fragment:ox,metalnessmap_pars_fragment:ax,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:ux,morphtarget_vertex:fx,normal_fragment_begin:hx,normal_fragment_maps:dx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:bx,output_fragment:wx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Tx,dithering_fragment:Ex,dithering_pars_fragment:Ax,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Ox,skinbase_vertex:Ix,skinning_pars_vertex:Nx,skinning_vertex:Fx,skinnormal_vertex:kx,specularmap_fragment:zx,specularmap_pars_fragment:Bx,tonemapping_fragment:Ux,tonemapping_pars_fragment:Vx,transmission_fragment:Hx,transmission_pars_fragment:Gx,uv_pars_fragment:Wx,uv_pars_vertex:jx,uv_vertex:$x,uv2_pars_fragment:qx,uv2_pars_vertex:Xx,uv2_vertex:Yx,worldpos_vertex:Zx,background_vert:Kx,background_frag:Jx,cube_vert:Qx,cube_frag:eb,depth_vert:tb,depth_frag:nb,distanceRGBA_vert:ib,distanceRGBA_frag:rb,equirect_vert:sb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:fb,meshlambert_frag:hb,meshmatcap_vert:db,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:_b,meshphong_frag:vb,meshphysical_vert:yb,meshphysical_frag:xb,meshtoon_vert:bb,meshtoon_frag:wb,points_vert:Mb,points_frag:Sb,shadow_vert:Tb,shadow_frag:Eb,sprite_vert:Ab,sprite_frag:Cb},be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},xn={basic:{uniforms:bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:bt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:bt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:bt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:bt([be.points,be.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:bt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:bt([be.common,be.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:bt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:bt([be.sprite,be.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:bt([be.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:bt([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:bt([be.lights,be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:bt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function Pb(n,e,t,i,r,s){const o=new $e(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(m,d){let _=!1,w=d.isScene===!0?d.background:null;w&&w.isTexture&&(w=e.get(w));const M=n.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Qo)?(c===void 0&&(c=new cn(new Ps(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Nr(xn.cube.uniforms),vertexShader:xn.cube.vertexShader,fragmentShader:xn.cube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||f!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new cn(new Lc(2,2),new Hn({name:"BackgroundMaterial",uniforms:Nr(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function Lb(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function f(D,F,U,re,K){let $=!1;if(o){const k=m(re,U,F);c!==k&&(c=k,p(c.object)),$=_(D,re,U,K),$&&w(D,re,U,K)}else{const k=F.wireframe===!0;(c.geometry!==re.id||c.program!==U.id||c.wireframe!==k)&&(c.geometry=re.id,c.program=U.id,c.wireframe=k,$=!0)}K!==null&&t.update(K,34963),($||u)&&(u=!1,x(D,F,U,re),K!==null&&n.bindBuffer(34963,t.get(K).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,F,U){const re=U.wireframe===!0;let K=a[D.id];K===void 0&&(K={},a[D.id]=K);let $=K[F.id];$===void 0&&($={},K[F.id]=$);let k=$[re];return k===void 0&&(k=d(h()),$[re]=k),k}function d(D){const F=[],U=[],re=[];for(let K=0;K<r;K++)F[K]=0,U[K]=0,re[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:re,object:D,attributes:{},index:null}}function _(D,F,U,re){const K=c.attributes,$=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const ce=K[Q];let se=$[Q];if(se===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ce===void 0||ce.attribute!==se||se&&ce.data!==se.data)return!0;k++}return c.attributesNum!==k||c.index!==re}function w(D,F,U,re){const K={},$=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let ce=$[Q];ce===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const se={};se.attribute=ce,ce&&ce.data&&(se.data=ce.data),K[Q]=se,k++}c.attributes=K,c.attributesNum=k,c.index=re}function M(){const D=c.newAttributes;for(let F=0,U=D.length;F<U;F++)D[F]=0}function b(D){y(D,0)}function y(D,F){const U=c.newAttributes,re=c.enabledAttributes,K=c.attributeDivisors;U[D]=1,re[D]===0&&(n.enableVertexAttribArray(D),re[D]=1),K[D]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),K[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let U=0,re=F.length;U<re;U++)F[U]!==D[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function O(D,F,U,re,K,$){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(D,F,U,K,$):n.vertexAttribPointer(D,F,U,re,K,$)}function x(D,F,U,re){if(i.isWebGL2===!1&&(D.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const K=re.attributes,$=U.getAttributes(),k=F.defaultAttributeValues;for(const ee in $){const Q=$[ee];if(Q.location>=0){let ue=K[ee];if(ue===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const ce=ue.normalized,se=ue.itemSize,W=t.get(ue);if(W===void 0)continue;const j=W.buffer,oe=W.type,_e=W.bytesPerElement;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ae=me.stride,L=ue.offset;if(me.isInstancedInterleavedBuffer){for(let v=0;v<Q.locationSize;v++)y(Q.location+v,me.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let v=0;v<Q.locationSize;v++)b(Q.location+v);n.bindBuffer(34962,j);for(let v=0;v<Q.locationSize;v++)O(Q.location+v,se/Q.locationSize,oe,ce,Ae*_e,(L+se/Q.locationSize*v)*_e)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)y(Q.location+me,ue.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<Q.locationSize;me++)b(Q.location+me);n.bindBuffer(34962,j);for(let me=0;me<Q.locationSize;me++)O(Q.location+me,se/Q.locationSize,oe,ce,se*_e,se/Q.locationSize*me*_e)}}else if(k!==void 0){const ce=k[ee];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Q.location,ce);break;case 3:n.vertexAttrib3fv(Q.location,ce);break;case 4:n.vertexAttrib4fv(Q.location,ce);break;default:n.vertexAttrib1fv(Q.location,ce)}}}}A()}function C(){ne();for(const D in a){const F=a[D];for(const U in F){const re=F[U];for(const K in re)g(re[K].object),delete re[K];delete F[U]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const U in F){const re=F[U];for(const K in re)g(re[K].object),delete re[K];delete F[U]}delete a[D.id]}function q(D){for(const F in a){const U=a[F];if(U[D.id]===void 0)continue;const re=U[D.id];for(const K in re)g(re[K].object),delete re[K];delete U[D.id]}}function ne(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function Rb(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Db(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),M=h>0,b=o||e.has("OES_texture_float"),y=M&&b,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function Ob(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new oi,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,p,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const w=s?0:i,M=w*4;let b=_.clippingState||null;l.value=b,b=u(g,h,M,p);for(let y=0;y!==M;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,b=p;M!==m;++M,b+=4)o.copy(f[M]).applyMatrix4(w,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Ib(n){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=Dr:a===Dl&&(o.mapping=Or),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rl||a===Dl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Y0(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class na extends rp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,Sf=[.125,.215,.35,.446,.526,.582],Li=20,Za=new na,Tf=new $e;let Ka=null;const Ei=(1+Math.sqrt(5))/2,hr=1/Ei,Ef=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Ei,hr),new B(0,Ei,-hr),new B(hr,0,Ei),new B(-hr,0,Ei),new B(Ei,hr,0),new B(-Ei,hr,0)];class Af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ka=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka),e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:bs,format:Mn,encoding:Wi,depthBuffer:!1},r=Cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nb(s)),this._blurMaterial=Fb(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,i,r){const a=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tf),u.toneMapping=Bn,u.autoClear=!1;const p=new Cc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new cn(new Ps,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Tf),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;so(r,w*M,_>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;so(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ef[(r-1)%Ef.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Li-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):Li;d>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Li}`);const _=[];let w=0;for(let O=0;O<Li;++O){const x=O/m,C=Math.exp(-x*x/2);_.push(C),O===0?w+=C:O<d&&(w+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/w;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const b=this._sizeLods[r],y=3*b*(r>M-xr?r-M+xr:0),A=4*(this._cubeSize-b);so(t,y,A,3*b,2*b),l.setRenderTarget(t),l.render(f,Za)}}function Nb(n){const e=[],t=[],i=[];let r=n;const s=n-xr+1+Sf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xr?l=Sf[o-n+xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,w=new Float32Array(m*g*p),M=new Float32Array(d*g*p),b=new Float32Array(_*g*p);for(let A=0;A<p;A++){const O=A%3*2/3-1,x=A>2?0:-1,C=[O,x,0,O+2/3,x,0,O+2/3,x+1,0,O,x,0,O+2/3,x+1,0,O,x+1,0];w.set(C,m*g*A),M.set(h,d*g*A);const I=[A,A,A,A,A,A];b.set(I,_*g*A)}const y=new Dt;y.setAttribute("position",new Qt(w,m)),y.setAttribute("uv",new Qt(M,d)),y.setAttribute("faceIndex",new Qt(b,_)),e.push(y),r>xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cf(n,e,t){const i=new gi(n,e,t);return i.texture.mapping=Qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function so(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fb(n,e,t){const i=new Float32Array(Li),r=new B(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Pf(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Lf(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}function kb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rl||l===Dl,u=l===Dr||l===Or;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Af(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Af(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bb(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let M=0,b=w.length;M<b;M+=3){const y=w[M+0],A=w[M+1],O=w[M+2];h.push(y,A,A,O,O,y)}}else{const w=g.array;m=g.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const y=M+0,A=M+1,O=M+2;h.push(y,A,A,O,O,y)}}const d=new(Zd(h)?np:tp)(h,1);d.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Ub(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Vb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Hb(n,e){return n[0]-e[0]}function Gb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wb(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let U=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),y===!0&&(I=2),A===!0&&(I=3);let q=u.attributes.position.count*I,ne=1;q>e.maxTextureSize&&(ne=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const G=new Float32Array(q*ne*4*d),D=new ep(G,q,ne,d);D.type=Ni,D.needsUpdate=!0;const F=I*4;for(let re=0;re<d;re++){const K=O[re],$=x[re],k=C[re],ee=q*ne*4*re;for(let Q=0;Q<K.count;Q++){const ue=Q*F;b===!0&&(o.fromBufferAttribute(K,Q),G[ee+ue+0]=o.x,G[ee+ue+1]=o.y,G[ee+ue+2]=o.z,G[ee+ue+3]=0),y===!0&&(o.fromBufferAttribute($,Q),G[ee+ue+4]=o.x,G[ee+ue+5]=o.y,G[ee+ue+6]=o.z,G[ee+ue+7]=0),A===!0&&(o.fromBufferAttribute(k,Q),G[ee+ue+8]=o.x,G[ee+ue+9]=o.y,G[ee+ue+10]=o.z,G[ee+ue+11]=k.itemSize===4?o.w:1)}}_={count:d,texture:D,size:new xe(q,ne)},s.set(u,_),u.addEventListener("dispose",U)}let w=0;for(let b=0;b<p.length;b++)w+=p[b];const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=i[u.id];if(d===void 0||d.length!==m){d=[];for(let y=0;y<m;y++)d[y]=[y,0];i[u.id]=d}for(let y=0;y<m;y++){const A=d[y];A[0]=y,A[1]=p[y]}d.sort(Gb);for(let y=0;y<8;y++)y<m&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Hb);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const A=a[y],O=A[0],x=A[1];O!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[O]&&u.setAttribute("morphTarget"+y,_[O]),w&&u.getAttribute("morphNormal"+y)!==w[O]&&u.setAttribute("morphNormal"+y,w[O]),r[y]=x,M+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),w&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function jb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ap=new Gt,lp=new ep,cp=new I0,up=new sp,Rf=[],Df=[],Of=new Float32Array(16),If=new Float32Array(9),Nf=new Float32Array(4);function Vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rf[r];if(s===void 0&&(s=new Float32Array(r),Rf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ia(n,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $b(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function Zb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Nf.set(i),n.uniformMatrix2fv(this.addr,!1,Nf),dt(t,i)}}function Kb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),dt(t,i)}}function Jb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,i))return;Of.set(i),n.uniformMatrix4fv(this.addr,!1,Of),dt(t,i)}}function Qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ew(n,e){const t=this.cache;ht(t,e)||(n.uniform2iv(this.addr,e),dt(t,e))}function tw(n,e){const t=this.cache;ht(t,e)||(n.uniform3iv(this.addr,e),dt(t,e))}function nw(n,e){const t=this.cache;ht(t,e)||(n.uniform4iv(this.addr,e),dt(t,e))}function iw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rw(n,e){const t=this.cache;ht(t,e)||(n.uniform2uiv(this.addr,e),dt(t,e))}function sw(n,e){const t=this.cache;ht(t,e)||(n.uniform3uiv(this.addr,e),dt(t,e))}function ow(n,e){const t=this.cache;ht(t,e)||(n.uniform4uiv(this.addr,e),dt(t,e))}function aw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ap,r)}function lw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cp,r)}function cw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||up,r)}function uw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lp,r)}function fw(n){switch(n){case 5126:return $b;case 35664:return qb;case 35665:return Xb;case 35666:return Yb;case 35674:return Zb;case 35675:return Kb;case 35676:return Jb;case 5124:case 35670:return Qb;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function hw(n,e){n.uniform1fv(this.addr,e)}function dw(n,e){const t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function pw(n,e){const t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function mw(n,e){const t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function gw(n,e){const t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _w(n,e){const t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vw(n,e){const t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yw(n,e){n.uniform1iv(this.addr,e)}function xw(n,e){n.uniform2iv(this.addr,e)}function bw(n,e){n.uniform3iv(this.addr,e)}function ww(n,e){n.uniform4iv(this.addr,e)}function Mw(n,e){n.uniform1uiv(this.addr,e)}function Sw(n,e){n.uniform2uiv(this.addr,e)}function Tw(n,e){n.uniform3uiv(this.addr,e)}function Ew(n,e){n.uniform4uiv(this.addr,e)}function Aw(n,e,t){const i=this.cache,r=e.length,s=ia(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ap,s[o])}function Cw(n,e,t){const i=this.cache,r=e.length,s=ia(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cp,s[o])}function Pw(n,e,t){const i=this.cache,r=e.length,s=ia(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||up,s[o])}function Lw(n,e,t){const i=this.cache,r=e.length,s=ia(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lp,s[o])}function Rw(n){switch(n){case 5126:return hw;case 35664:return dw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return _w;case 35676:return vw;case 5124:case 35670:return yw;case 35667:case 35671:return xw;case 35668:case 35672:return bw;case 35669:case 35673:return ww;case 5125:return Mw;case 36294:return Sw;case 36295:return Tw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Dw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=fw(t.type)}}class Ow{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Rw(t.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function Ff(n,e){n.seq.push(e),n.map[e.id]=e}function Nw(n,e,t){const i=n.name,r=i.length;for(Ja.lastIndex=0;;){const s=Ja.exec(i),o=Ja.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ff(t,c===void 0?new Dw(a,n,e):new Ow(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Iw(a),Ff(t,f)),t=f}}}class Mo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function kf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Fw=0;function kw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zw(n){switch(n){case Wi:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function zf(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kw(n.getShaderSource(e),o)}else return r}function Bw(n,e){const t=zw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uw(n,e){let t;switch(e){case a0:t="Linear";break;case l0:t="Reinhard";break;case c0:t="OptimizedCineon";break;case u0:t="ACESFilmic";break;case f0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vw(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Hw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function Bf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(Ww,jw)}function jw(n,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zl(t)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(n){return n.replace($w,qw)}function qw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function Yw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Or:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function Kw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case s0:e="ENVMAP_BLENDING_MIX";break;case o0:e="ENVMAP_BLENDING_ADD";break}return e}function Jw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Qw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xw(t),c=Yw(t),u=Zw(t),f=Kw(t),h=Jw(t),p=t.isWebGL2?"":Vw(t),g=Hw(s),m=r.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(ss).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(ss).join(`
`),_.length>0&&(_+=`
`)):(d=[Hf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),_=[p,Hf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,Bw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=zl(o),o=Bf(o,t),o=Uf(o,t),a=zl(a),a=Bf(a,t),a=Uf(a,t),o=Vf(o),a=Vf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=w+d+o,b=w+_+a,y=kf(r,35633,M),A=kf(r,35632,b);if(r.attachShader(m,y),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(y).trim(),q=r.getShaderInfoLog(A).trim();let ne=!0,G=!0;if(r.getProgramParameter(m,35714)===!1){ne=!1;const D=zf(r,y,"vertex"),F=zf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+D+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||q==="")&&(G=!1);G&&(this.diagnostics={runnable:ne,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:q,prefix:_}})}r.deleteShader(y),r.deleteShader(A);let O;this.getUniforms=function(){return O===void 0&&(O=new Mo(r,m)),O};let x;return this.getAttributes=function(){return x===void 0&&(x=Gw(r,m)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Fw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new n1(e),t.set(e,i)),i}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(n,e,t,i,r,s,o){const a=new Ac,l=new t1,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,C,I,q,ne){const G=q.fog,D=ne.geometry,F=x.isMeshStandardMaterial?q.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),re=!!U&&U.mapping===Qo?U.image.height:null,K=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=$!==void 0?$.length:0;let ee=0;D.morphAttributes.position!==void 0&&(ee=1),D.morphAttributes.normal!==void 0&&(ee=2),D.morphAttributes.color!==void 0&&(ee=3);let Q,ue,ce,se;if(K){const Ae=xn[K];Q=Ae.vertexShader,ue=Ae.fragmentShader}else Q=x.vertexShader,ue=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const W=n.getRenderTarget(),j=x.alphaTest>0,oe=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:K,shaderName:x.type,vertexShader:Q,fragmentShader:ue,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Wi,map:!!x.map,matcap:!!x.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:re,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===L0,tangentSpaceNormalMap:x.normalMapType===Yd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===st,clearcoat:oe,clearcoatMap:oe&&!!x.clearcoatMap,clearcoatRoughnessMap:oe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Cr,alphaMap:!!x.alphaMap,alphaTest:j,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:Bn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===Vt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)C.push(I),C.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(C,x),w(C,x),C.push(n.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function _(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function w(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}function M(x){const C=g[x.type];let I;if(C){const q=xn[C];I=ip.clone(q.uniforms)}else I=x.uniforms;return I}function b(x,C){let I;for(let q=0,ne=c.length;q<ne;q++){const G=c[q];if(G.cacheKey===C){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Qw(n,C,x,s),c.push(I)),I}function y(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:O}}function r1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function s1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,m,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||s1),i.length>1&&i.sort(h||Gf),r.length>1&&r.sort(h||Gf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function o1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Wf,n.set(i,[o])):r>=s.length?(o=new Wf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function a1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function l1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let c1=0;function u1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function f1(n,e){const t=new a1,i=l1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,o=new tt,a=new tt;function l(u,f){let h=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let m=0,d=0,_=0,w=0,M=0,b=0,y=0,A=0,O=0,x=0;u.sort(u1);const C=f!==!0?Math.PI:1;for(let q=0,ne=u.length;q<ne;q++){const G=u[q],D=G.color,F=G.intensity,U=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)h+=D.r*F*C,p+=D.g*F*C,g+=D.b*F*C;else if(G.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(G.sh.coefficients[K],F);else if(G.isDirectionalLight){const K=t.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*C),G.castShadow){const $=G.shadow,k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=re,r.directionalShadowMatrix[m]=G.shadow.matrix,b++}r.directional[m]=K,m++}else if(G.isSpotLight){const K=t.get(G);K.position.setFromMatrixPosition(G.matrixWorld),K.color.copy(D).multiplyScalar(F*C),K.distance=U,K.coneCos=Math.cos(G.angle),K.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),K.decay=G.decay,r.spot[_]=K;const $=G.shadow;if(G.map&&(r.spotLightMap[O]=G.map,O++,$.updateMatrices(G),G.castShadow&&x++),r.spotLightMatrix[_]=$.matrix,G.castShadow){const k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.spotShadow[_]=k,r.spotShadowMap[_]=re,A++}_++}else if(G.isRectAreaLight){const K=t.get(G);K.color.copy(D).multiplyScalar(F),K.halfWidth.set(G.width*.5,0,0),K.halfHeight.set(0,G.height*.5,0),r.rectArea[w]=K,w++}else if(G.isPointLight){const K=t.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity*C),K.distance=G.distance,K.decay=G.decay,G.castShadow){const $=G.shadow,k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,r.pointShadow[d]=k,r.pointShadowMap[d]=re,r.pointShadowMatrix[d]=G.shadow.matrix,y++}r.point[d]=K,d++}else if(G.isHemisphereLight){const K=t.get(G);K.skyColor.copy(G.color).multiplyScalar(F*C),K.groundColor.copy(G.groundColor).multiplyScalar(F*C),r.hemi[M]=K,M++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==m||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==w||I.hemiLength!==M||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==A||I.numSpotMaps!==O)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=w,r.point.length=d,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=A+O-x,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=x,I.directionalLength=m,I.pointLength=d,I.spotLength=_,I.rectAreaLength=w,I.hemiLength=M,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=A,I.numSpotMaps=O,r.version=c1++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const b=u[w];if(b.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),h++}else if(b.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=r.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const y=r.hemi[d];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function jf(n,e){const t=new f1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function h1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new jf(n,e),t.set(s,[l])):o>=a.length?(l=new jf(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class d1 extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class p1 extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`;function _1(n,e,t){let i=new Pc;const r=new xe,s=new xe,o=new gt,a=new d1({depthPacking:P0}),l=new p1,c={},u=t.maxTextureSize,f={0:Vt,1:Rr,2:li},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new cn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wd,this.render=function(b,y,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const O=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(hi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let q=0,ne=b.length;q<ne;q++){const G=b[q],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null){const re=this.type!==rs?{minFilter:Nt,magFilter:Nt}:{};D.map=new gi(r.x,r.y,re),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const U=D.getViewportCount();for(let re=0;re<U;re++){const K=D.getViewport(re);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),I.viewport(o),D.updateMatrices(G,re),i=D.getFrustum(),M(y,A,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===rs&&_(D,A),D.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(O,x,C)};function _(b,y){const A=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(y,null,A,h,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(y,null,A,p,m,null)}function w(b,y,A,O,x,C){let I=null;const q=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0?I=q:I=A.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const ne=I.uuid,G=y.uuid;let D=c[ne];D===void 0&&(D={},c[ne]=D);let F=D[G];F===void 0&&(F=I.clone(),D[G]=F),I=F}return I.visible=y.visible,I.wireframe=y.wireframe,C===rs?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:f[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=O,I.farDistance=x),I}function M(b,y,A,O,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===rs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const q=e.update(b),ne=b.material;if(Array.isArray(ne)){const G=q.groups;for(let D=0,F=G.length;D<F;D++){const U=G[D],re=ne[U.materialIndex];if(re&&re.visible){const K=w(b,re,O,A.near,A.far,x);n.renderBufferDirect(A,null,q,K,b,U)}}}else if(ne.visible){const G=w(b,ne,O,A.near,A.far,x);n.renderBufferDirect(A,null,q,G,b,null)}}const I=b.children;for(let q=0,ne=I.length;q<ne;q++)M(I[q],y,A,O,x)}}function v1(n,e,t){const i=t.isWebGL2;function r(){let H=!1;const Ee=new gt;let ye=null;const ge=new gt(0,0,0,0);return{setMask:function(Me){ye!==Me&&!H&&(n.colorMask(Me,Me,Me,Me),ye=Me)},setLocked:function(Me){H=Me},setClear:function(Me,Ne,Qe,ot,jn){jn===!0&&(Me*=ot,Ne*=ot,Qe*=ot),Ee.set(Me,Ne,Qe,ot),ge.equals(Ee)===!1&&(n.clearColor(Me,Ne,Qe,ot),ge.copy(Ee))},reset:function(){H=!1,ye=null,ge.set(-1,0,0,0)}}}function s(){let H=!1,Ee=null,ye=null,ge=null;return{setTest:function(Me){Me?j(2929):oe(2929)},setMask:function(Me){Ee!==Me&&!H&&(n.depthMask(Me),Ee=Me)},setFunc:function(Me){if(ye!==Me){switch(Me){case Jv:n.depthFunc(512);break;case Qv:n.depthFunc(519);break;case e0:n.depthFunc(513);break;case Ll:n.depthFunc(515);break;case t0:n.depthFunc(514);break;case n0:n.depthFunc(518);break;case i0:n.depthFunc(516);break;case r0:n.depthFunc(517);break;default:n.depthFunc(515)}ye=Me}},setLocked:function(Me){H=Me},setClear:function(Me){ge!==Me&&(n.clearDepth(Me),ge=Me)},reset:function(){H=!1,Ee=null,ye=null,ge=null}}}function o(){let H=!1,Ee=null,ye=null,ge=null,Me=null,Ne=null,Qe=null,ot=null,jn=null;return{setTest:function(it){H||(it?j(2960):oe(2960))},setMask:function(it){Ee!==it&&!H&&(n.stencilMask(it),Ee=it)},setFunc:function(it,En,Wt){(ye!==it||ge!==En||Me!==Wt)&&(n.stencilFunc(it,En,Wt),ye=it,ge=En,Me=Wt)},setOp:function(it,En,Wt){(Ne!==it||Qe!==En||ot!==Wt)&&(n.stencilOp(it,En,Wt),Ne=it,Qe=En,ot=Wt)},setLocked:function(it){H=it},setClear:function(it){jn!==it&&(n.clearStencil(it),jn=it)},reset:function(){H=!1,Ee=null,ye=null,ge=null,Me=null,Ne=null,Qe=null,ot=null,jn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,M=null,b=null,y=null,A=null,O=null,x=null,C=!1,I=null,q=null,ne=null,G=null,D=null;const F=n.getParameter(35661);let U=!1,re=0;const K=n.getParameter(7938);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=re>=2);let $=null,k={};const ee=n.getParameter(3088),Q=n.getParameter(2978),ue=new gt().fromArray(ee),ce=new gt().fromArray(Q);function se(H,Ee,ye){const ge=new Uint8Array(4),Me=n.createTexture();n.bindTexture(H,Me),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let Ne=0;Ne<ye;Ne++)n.texImage2D(Ee+Ne,0,6408,1,1,0,6408,5121,ge);return Me}const W={};W[3553]=se(3553,3553,1),W[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(2929),l.setFunc(Ll),z(!1),X(Iu),j(2884),E(hi);function j(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function oe(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function _e(H,Ee){return p[H]!==Ee?(n.bindFramebuffer(H,Ee),p[H]=Ee,i&&(H===36009&&(p[36160]=Ee),H===36160&&(p[36009]=Ee)),!0):!1}function me(H,Ee){let ye=m,ge=!1;if(H)if(ye=g.get(Ee),ye===void 0&&(ye=[],g.set(Ee,ye)),H.isWebGLMultipleRenderTargets){const Me=H.texture;if(ye.length!==Me.length||ye[0]!==36064){for(let Ne=0,Qe=Me.length;Ne<Qe;Ne++)ye[Ne]=36064+Ne;ye.length=Me.length,ge=!0}}else ye[0]!==36064&&(ye[0]=36064,ge=!0);else ye[0]!==1029&&(ye[0]=1029,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(ye):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ye))}function Ae(H){return d!==H?(n.useProgram(H),d=H,!0):!1}const L={[yr]:32774,[Vv]:32778,[Hv]:32779};if(i)L[zu]=32775,L[Bu]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(L[zu]=H.MIN_EXT,L[Bu]=H.MAX_EXT)}const v={[Gv]:0,[Wv]:1,[jv]:768,[jd]:770,[Kv]:776,[Yv]:774,[qv]:772,[$v]:769,[$d]:771,[Zv]:775,[Xv]:773};function E(H,Ee,ye,ge,Me,Ne,Qe,ot){if(H===hi){_===!0&&(oe(3042),_=!1);return}if(_===!1&&(j(3042),_=!0),H!==Uv){if(H!==w||ot!==C){if((M!==yr||A!==yr)&&(n.blendEquation(32774),M=yr,A=yr),ot)switch(H){case Cr:n.blendFuncSeparate(1,771,1,771);break;case Nu:n.blendFunc(1,1);break;case Fu:n.blendFuncSeparate(0,769,0,1);break;case ku:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Cr:n.blendFuncSeparate(770,771,1,771);break;case Nu:n.blendFunc(770,1);break;case Fu:n.blendFuncSeparate(0,769,0,1);break;case ku:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,y=null,O=null,x=null,w=H,C=ot}return}Me=Me||Ee,Ne=Ne||ye,Qe=Qe||ge,(Ee!==M||Me!==A)&&(n.blendEquationSeparate(L[Ee],L[Me]),M=Ee,A=Me),(ye!==b||ge!==y||Ne!==O||Qe!==x)&&(n.blendFuncSeparate(v[ye],v[ge],v[Ne],v[Qe]),b=ye,y=ge,O=Ne,x=Qe),w=H,C=null}function S(H,Ee){H.side===li?oe(2884):j(2884);let ye=H.side===Vt;Ee&&(ye=!ye),z(ye),H.blending===Cr&&H.transparent===!1?E(hi):E(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const ge=H.stencilWrite;c.setTest(ge),ge&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ie(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?j(32926):oe(32926)}function z(H){I!==H&&(H?n.frontFace(2304):n.frontFace(2305),I=H)}function X(H){H!==kv?(j(2884),H!==q&&(H===Iu?n.cullFace(1029):H===zv?n.cullFace(1028):n.cullFace(1032))):oe(2884),q=H}function Z(H){H!==ne&&(U&&n.lineWidth(H),ne=H)}function ie(H,Ee,ye){H?(j(32823),(G!==Ee||D!==ye)&&(n.polygonOffset(Ee,ye),G=Ee,D=ye)):oe(32823)}function pe(H){H?j(3089):oe(3089)}function le(H){H===void 0&&(H=33984+F-1),$!==H&&(n.activeTexture(H),$=H)}function P(H,Ee,ye){ye===void 0&&($===null?ye=33984+F-1:ye=$);let ge=k[ye];ge===void 0&&(ge={type:void 0,texture:void 0},k[ye]=ge),(ge.type!==H||ge.texture!==Ee)&&($!==ye&&(n.activeTexture(ye),$=ye),n.bindTexture(H,Ee||W[H]),ge.type=H,ge.texture=Ee)}function T(){const H=k[$];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){ue.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ue.copy(H))}function Te(H){ce.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ce.copy(H))}function Le(H,Ee){let ye=f.get(Ee);ye===void 0&&(ye=new WeakMap,f.set(Ee,ye));let ge=ye.get(H);ge===void 0&&(ge=n.getUniformBlockIndex(Ee,H.name),ye.set(H,ge))}function Pe(H,Ee){const ge=f.get(Ee).get(H);u.get(H)!==ge&&(n.uniformBlockBinding(Ee,ge,H.__bindingPointIndex),u.set(H,ge))}function ke(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,k={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,M=null,b=null,y=null,A=null,O=null,x=null,C=!1,I=null,q=null,ne=null,G=null,D=null,ue.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:j,disable:oe,bindFramebuffer:_e,drawBuffers:me,useProgram:Ae,setBlending:E,setMaterial:S,setFlipSided:z,setCullFace:X,setLineWidth:Z,setPolygonOffset:ie,setScissorTest:pe,activeTexture:le,bindTexture:P,unbindTexture:T,compressedTexImage2D:V,texImage2D:Y,texImage3D:Se,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:we,texStorage3D:N,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:ve,scissor:Ce,viewport:Te,reset:ke}}function y1(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,T){return _?new OffscreenCanvas(P,T):ws("canvas")}function M(P,T,V,ae){let he=1;if((P.width>ae||P.height>ae)&&(he=ae/Math.max(P.width,P.height)),he<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ve=T?kl:Math.floor,we=ve(he*P.width),N=ve(he*P.height);m===void 0&&(m=w(we,N));const Y=V?w(we,N):m;return Y.width=we,Y.height=N,Y.getContext("2d").drawImage(P,0,0,we,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+we+"x"+N+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return hf(P.width)&&hf(P.height)}function y(P){return a?!1:P.wrapS!==an||P.wrapT!==an||P.minFilter!==Nt&&P.minFilter!==Ut}function A(P,T){return P.generateMipmaps&&T&&P.minFilter!==Nt&&P.minFilter!==Ut}function O(P){n.generateMipmap(P)}function x(P,T,V,ae,he=!1){if(a===!1)return T;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve=T;return T===6403&&(V===5126&&(ve=33326),V===5131&&(ve=33325),V===5121&&(ve=33321)),T===33319&&(V===5126&&(ve=33328),V===5131&&(ve=33327),V===5121&&(ve=33323)),T===6408&&(V===5126&&(ve=34836),V===5131&&(ve=34842),V===5121&&(ve=ae===st&&he===!1?35907:32856),V===32819&&(ve=32854),V===32820&&(ve=32855)),(ve===33325||ve===33326||ve===33327||ve===33328||ve===34842||ve===34836)&&e.get("EXT_color_buffer_float"),ve}function C(P,T,V){return A(P,V)===!0||P.isFramebufferTexture&&P.minFilter!==Nt&&P.minFilter!==Ut?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){return P===Nt||P===Uu||P===Vu?9728:9729}function q(P){const T=P.target;T.removeEventListener("dispose",q),G(T),T.isVideoTexture&&g.delete(T)}function ne(P){const T=P.target;T.removeEventListener("dispose",ne),F(T)}function G(P){const T=i.get(P);if(T.__webglInit===void 0)return;const V=P.source,ae=d.get(V);if(ae){const he=ae[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(P),Object.keys(ae).length===0&&d.delete(V)}i.remove(P)}function D(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const V=P.source,ae=d.get(V);delete ae[T.__cacheKey],o.memory.textures--}function F(P){const T=P.texture,V=i.get(P),ae=i.get(T);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)n.deleteFramebuffer(V.__webglFramebuffer[he]),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[he]);else{if(n.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let he=0;he<V.__webglColorRenderbuffer.length;he++)V.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[he]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,ve=T.length;he<ve;he++){const we=i.get(T[he]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(T[he])}i.remove(T),i.remove(P)}let U=0;function re(){U=0}function K(){const P=U;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),U+=1,P}function $(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function k(P,T){const V=i.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(V,P,T);return}}t.bindTexture(3553,V.__webglTexture,33984+T)}function ee(P,T){const V=i.get(P);if(P.version>0&&V.__version!==P.version){oe(V,P,T);return}t.bindTexture(35866,V.__webglTexture,33984+T)}function Q(P,T){const V=i.get(P);if(P.version>0&&V.__version!==P.version){oe(V,P,T);return}t.bindTexture(32879,V.__webglTexture,33984+T)}function ue(P,T){const V=i.get(P);if(P.version>0&&V.__version!==P.version){_e(V,P,T);return}t.bindTexture(34067,V.__webglTexture,33984+T)}const ce={[Ol]:10497,[an]:33071,[Il]:33648},se={[Nt]:9728,[Uu]:9984,[Vu]:9986,[Ut]:9729,[h0]:9985,[ea]:9987};function W(P,T,V){if(V?(n.texParameteri(P,10242,ce[T.wrapS]),n.texParameteri(P,10243,ce[T.wrapT]),(P===32879||P===35866)&&n.texParameteri(P,32882,ce[T.wrapR]),n.texParameteri(P,10240,se[T.magFilter]),n.texParameteri(P,10241,se[T.minFilter])):(n.texParameteri(P,10242,33071),n.texParameteri(P,10243,33071),(P===32879||P===35866)&&n.texParameteri(P,32882,33071),(T.wrapS!==an||T.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,10240,I(T.magFilter)),n.texParameteri(P,10241,I(T.minFilter)),T.minFilter!==Nt&&T.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(T.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===bs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(P,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function j(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",q));const ae=T.source;let he=d.get(ae);he===void 0&&(he={},d.set(ae,he));const ve=$(T);if(ve!==P.__cacheKey){he[ve]===void 0&&(he[ve]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),he[ve].usedTimes++;const we=he[P.__cacheKey];we!==void 0&&(he[P.__cacheKey].usedTimes--,we.usedTimes===0&&D(T)),P.__cacheKey=ve,P.__webglTexture=he[ve].texture}return V}function oe(P,T,V){let ae=3553;T.isDataArrayTexture&&(ae=35866),T.isData3DTexture&&(ae=32879);const he=j(P,T),ve=T.source;t.bindTexture(ae,P.__webglTexture,33984+V);const we=i.get(ve);if(ve.version!==we.__version||he===!0){t.activeTexture(33984+V),n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const N=y(T)&&b(T.image)===!1;let Y=M(T.image,N,!1,u);Y=le(T,Y);const Se=b(Y)||a,Ce=s.convert(T.format,T.encoding);let Te=s.convert(T.type),Le=x(T.internalFormat,Ce,Te,T.encoding,T.isVideoTexture);W(ae,T,Se);let Pe;const ke=T.mipmaps,H=a&&T.isVideoTexture!==!0,Ee=we.__version===void 0||he===!0,ye=C(T,Y,Se);if(T.isDepthTexture)Le=6402,a?T.type===Ni?Le=36012:T.type===Ii?Le=33190:T.type===Pr?Le=35056:Le=33189:T.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Vi&&Le===6402&&T.type!==Xd&&T.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ii,Te=s.convert(T.type)),T.format===Ir&&Le===6402&&(Le=34041,T.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Pr,Te=s.convert(T.type))),Ee&&(H?t.texStorage2D(3553,1,Le,Y.width,Y.height):t.texImage2D(3553,0,Le,Y.width,Y.height,0,Ce,Te,null));else if(T.isDataTexture)if(ke.length>0&&Se){H&&Ee&&t.texStorage2D(3553,ye,Le,ke[0].width,ke[0].height);for(let ge=0,Me=ke.length;ge<Me;ge++)Pe=ke[ge],H?t.texSubImage2D(3553,ge,0,0,Pe.width,Pe.height,Ce,Te,Pe.data):t.texImage2D(3553,ge,Le,Pe.width,Pe.height,0,Ce,Te,Pe.data);T.generateMipmaps=!1}else H?(Ee&&t.texStorage2D(3553,ye,Le,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Ce,Te,Y.data)):t.texImage2D(3553,0,Le,Y.width,Y.height,0,Ce,Te,Y.data);else if(T.isCompressedTexture){H&&Ee&&t.texStorage2D(3553,ye,Le,ke[0].width,ke[0].height);for(let ge=0,Me=ke.length;ge<Me;ge++)Pe=ke[ge],T.format!==Mn?Ce!==null?H?t.compressedTexSubImage2D(3553,ge,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(3553,ge,Le,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?t.texSubImage2D(3553,ge,0,0,Pe.width,Pe.height,Ce,Te,Pe.data):t.texImage2D(3553,ge,Le,Pe.width,Pe.height,0,Ce,Te,Pe.data)}else if(T.isDataArrayTexture)H?(Ee&&t.texStorage3D(35866,ye,Le,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Ce,Te,Y.data)):t.texImage3D(35866,0,Le,Y.width,Y.height,Y.depth,0,Ce,Te,Y.data);else if(T.isData3DTexture)H?(Ee&&t.texStorage3D(32879,ye,Le,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Ce,Te,Y.data)):t.texImage3D(32879,0,Le,Y.width,Y.height,Y.depth,0,Ce,Te,Y.data);else if(T.isFramebufferTexture){if(Ee)if(H)t.texStorage2D(3553,ye,Le,Y.width,Y.height);else{let ge=Y.width,Me=Y.height;for(let Ne=0;Ne<ye;Ne++)t.texImage2D(3553,Ne,Le,ge,Me,0,Ce,Te,null),ge>>=1,Me>>=1}}else if(ke.length>0&&Se){H&&Ee&&t.texStorage2D(3553,ye,Le,ke[0].width,ke[0].height);for(let ge=0,Me=ke.length;ge<Me;ge++)Pe=ke[ge],H?t.texSubImage2D(3553,ge,0,0,Ce,Te,Pe):t.texImage2D(3553,ge,Le,Ce,Te,Pe);T.generateMipmaps=!1}else H?(Ee&&t.texStorage2D(3553,ye,Le,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Ce,Te,Y)):t.texImage2D(3553,0,Le,Ce,Te,Y);A(T,Se)&&O(ae),we.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function _e(P,T,V){if(T.image.length!==6)return;const ae=j(P,T),he=T.source;t.bindTexture(34067,P.__webglTexture,33984+V);const ve=i.get(he);if(he.version!==ve.__version||ae===!0){t.activeTexture(33984+V),n.pixelStorei(37440,T.flipY),n.pixelStorei(37441,T.premultiplyAlpha),n.pixelStorei(3317,T.unpackAlignment),n.pixelStorei(37443,0);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let ge=0;ge<6;ge++)!we&&!N?Y[ge]=M(T.image[ge],!1,!0,c):Y[ge]=N?T.image[ge].image:T.image[ge],Y[ge]=le(T,Y[ge]);const Se=Y[0],Ce=b(Se)||a,Te=s.convert(T.format,T.encoding),Le=s.convert(T.type),Pe=x(T.internalFormat,Te,Le,T.encoding),ke=a&&T.isVideoTexture!==!0,H=ve.__version===void 0||ae===!0;let Ee=C(T,Se,Ce);W(34067,T,Ce);let ye;if(we){ke&&H&&t.texStorage2D(34067,Ee,Pe,Se.width,Se.height);for(let ge=0;ge<6;ge++){ye=Y[ge].mipmaps;for(let Me=0;Me<ye.length;Me++){const Ne=ye[Me];T.format!==Mn?Te!==null?ke?t.compressedTexSubImage2D(34069+ge,Me,0,0,Ne.width,Ne.height,Te,Ne.data):t.compressedTexImage2D(34069+ge,Me,Pe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+ge,Me,0,0,Ne.width,Ne.height,Te,Le,Ne.data):t.texImage2D(34069+ge,Me,Pe,Ne.width,Ne.height,0,Te,Le,Ne.data)}}}else{ye=T.mipmaps,ke&&H&&(ye.length>0&&Ee++,t.texStorage2D(34067,Ee,Pe,Y[0].width,Y[0].height));for(let ge=0;ge<6;ge++)if(N){ke?t.texSubImage2D(34069+ge,0,0,0,Y[ge].width,Y[ge].height,Te,Le,Y[ge].data):t.texImage2D(34069+ge,0,Pe,Y[ge].width,Y[ge].height,0,Te,Le,Y[ge].data);for(let Me=0;Me<ye.length;Me++){const Qe=ye[Me].image[ge].image;ke?t.texSubImage2D(34069+ge,Me+1,0,0,Qe.width,Qe.height,Te,Le,Qe.data):t.texImage2D(34069+ge,Me+1,Pe,Qe.width,Qe.height,0,Te,Le,Qe.data)}}else{ke?t.texSubImage2D(34069+ge,0,0,0,Te,Le,Y[ge]):t.texImage2D(34069+ge,0,Pe,Te,Le,Y[ge]);for(let Me=0;Me<ye.length;Me++){const Ne=ye[Me];ke?t.texSubImage2D(34069+ge,Me+1,0,0,Te,Le,Ne.image[ge]):t.texImage2D(34069+ge,Me+1,Pe,Te,Le,Ne.image[ge])}}}A(T,Ce)&&O(34067),ve.__version=he.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function me(P,T,V,ae,he){const ve=s.convert(V.format,V.encoding),we=s.convert(V.type),N=x(V.internalFormat,ve,we,V.encoding);i.get(T).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,N,T.width,T.height,T.depth,0,ve,we,null):t.texImage2D(he,0,N,T.width,T.height,0,ve,we,null)),t.bindFramebuffer(36160,P),ie(T)?h.framebufferTexture2DMultisampleEXT(36160,ae,he,i.get(V).__webglTexture,0,Z(T)):n.framebufferTexture2D(36160,ae,he,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ae(P,T,V){if(n.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let ae=33189;if(V||ie(T)){const he=T.depthTexture;he&&he.isDepthTexture&&(he.type===Ni?ae=36012:he.type===Ii&&(ae=33190));const ve=Z(T);ie(T)?h.renderbufferStorageMultisampleEXT(36161,ve,ae,T.width,T.height):n.renderbufferStorageMultisample(36161,ve,ae,T.width,T.height)}else n.renderbufferStorage(36161,ae,T.width,T.height);n.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const ae=Z(T);V&&ie(T)===!1?n.renderbufferStorageMultisample(36161,ae,35056,T.width,T.height):ie(T)?h.renderbufferStorageMultisampleEXT(36161,ae,35056,T.width,T.height):n.renderbufferStorage(36161,34041,T.width,T.height),n.framebufferRenderbuffer(36160,33306,36161,P)}else{const ae=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let he=0;he<ae.length;he++){const ve=ae[he],we=s.convert(ve.format,ve.encoding),N=s.convert(ve.type),Y=x(ve.internalFormat,we,N,ve.encoding),Se=Z(T);V&&ie(T)===!1?n.renderbufferStorageMultisample(36161,Se,Y,T.width,T.height):ie(T)?h.renderbufferStorageMultisampleEXT(36161,Se,Y,T.width,T.height):n.renderbufferStorage(36161,Y,T.width,T.height)}}n.bindRenderbuffer(36161,null)}function L(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const ae=i.get(T.depthTexture).__webglTexture,he=Z(T);if(T.depthTexture.format===Vi)ie(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,he):n.framebufferTexture2D(36160,36096,3553,ae,0);else if(T.depthTexture.format===Ir)ie(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,he):n.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function v(P){const T=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");L(T.__webglFramebuffer,P)}else if(V){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ae(T.__webglDepthbuffer[ae],P,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),Ae(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function E(P,T,V){const ae=i.get(P);T!==void 0&&me(ae.__webglFramebuffer,P,P.texture,36064,3553),V!==void 0&&v(P)}function S(P){const T=P.texture,V=i.get(P),ae=i.get(T);P.addEventListener("dispose",ne),P.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=T.version,o.memory.textures++);const he=P.isWebGLCubeRenderTarget===!0,ve=P.isWebGLMultipleRenderTargets===!0,we=b(P)||a;if(he){V.__webglFramebuffer=[];for(let N=0;N<6;N++)V.__webglFramebuffer[N]=n.createFramebuffer()}else{if(V.__webglFramebuffer=n.createFramebuffer(),ve)if(r.drawBuffers){const N=P.texture;for(let Y=0,Se=N.length;Y<Se;Y++){const Ce=i.get(N[Y]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ie(P)===!1){const N=ve?T:[T];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const Se=N[Y];V.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Y]);const Ce=s.convert(Se.format,Se.encoding),Te=s.convert(Se.type),Le=x(Se.internalFormat,Ce,Te,Se.encoding,P.isXRRenderTarget===!0),Pe=Z(P);n.renderbufferStorageMultisample(36161,Pe,Le,P.width,P.height),n.framebufferRenderbuffer(36160,36064+Y,36161,V.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(36161,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(he){t.bindTexture(34067,ae.__webglTexture),W(34067,T,we);for(let N=0;N<6;N++)me(V.__webglFramebuffer[N],P,T,36064,34069+N);A(T,we)&&O(34067),t.unbindTexture()}else if(ve){const N=P.texture;for(let Y=0,Se=N.length;Y<Se;Y++){const Ce=N[Y],Te=i.get(Ce);t.bindTexture(3553,Te.__webglTexture),W(3553,Ce,we),me(V.__webglFramebuffer,P,Ce,36064+Y,3553),A(Ce,we)&&O(3553)}t.unbindTexture()}else{let N=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?N=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,ae.__webglTexture),W(N,T,we),me(V.__webglFramebuffer,P,T,36064,N),A(T,we)&&O(N),t.unbindTexture()}P.depthBuffer&&v(P)}function z(P){const T=b(P)||a,V=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0,he=V.length;ae<he;ae++){const ve=V[ae];if(A(ve,T)){const we=P.isWebGLCubeRenderTarget?34067:3553,N=i.get(ve).__webglTexture;t.bindTexture(we,N),O(we),t.unbindTexture()}}}function X(P){if(a&&P.samples>0&&ie(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],V=P.width,ae=P.height;let he=16384;const ve=[],we=P.stencilBuffer?33306:36096,N=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){ve.push(36064+Se),P.depthBuffer&&ve.push(we);const Ce=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(Ce===!1&&(P.depthBuffer&&(he|=256),P.stencilBuffer&&(he|=1024)),Y&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[Se]),Ce===!0&&(n.invalidateFramebuffer(36008,[we]),n.invalidateFramebuffer(36009,[we])),Y){const Te=i.get(T[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Te,0)}n.blitFramebuffer(0,0,V,ae,0,0,V,ae,he,9728),p&&n.invalidateFramebuffer(36008,ve)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,N.__webglColorRenderbuffer[Se]);const Ce=i.get(T[Se]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,Ce,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function Z(P){return Math.min(f,P.samples)}function ie(P){const T=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pe(P){const T=o.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function le(P,T){const V=P.encoding,ae=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Fl||V!==Wi&&(V===st?a===!1?e.has("EXT_sRGB")===!0&&ae===Mn?(P.format=Fl,P.minFilter=Ut,P.generateMipmaps=!1):T=Jd.sRGBToLinear(T):(ae!==Mn||he!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),T}this.allocateTextureUnit=K,this.resetTextureUnits=re,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=ue,this.rebindTextures=E,this.setupRenderTarget=S,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=v,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ie}function x1(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Gi)return 5121;if(s===g0)return 32819;if(s===_0)return 32820;if(s===d0)return 5120;if(s===p0)return 5122;if(s===Xd)return 5123;if(s===m0)return 5124;if(s===Ii)return 5125;if(s===Ni)return 5126;if(s===bs)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===v0)return 6406;if(s===Mn)return 6408;if(s===x0)return 6409;if(s===b0)return 6410;if(s===Vi)return 6402;if(s===Ir)return 34041;if(s===w0)return 6403;if(s===y0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Fl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===M0)return 36244;if(s===S0)return 33319;if(s===T0)return 33320;if(s===E0)return 36249;if(s===wa||s===Ma||s===Sa||s===Ta)if(o===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hu||s===Gu||s===Wu||s===ju)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ju)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===A0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$u||s===qu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$u)return o===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qu)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xu||s===Yu||s===Zu||s===Ku||s===Ju||s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===of||s===af||s===lf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xu)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yu)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zu)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ku)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ju)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qu)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ef)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tf)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nf)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rf)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sf)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===of)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===af)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lf)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cf)return o===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Pr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class b1 extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w1={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const w=new br;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class M1 extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Vi,u!==Vi&&u!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Vi&&(i=Ii),i===void 0&&u===Ir&&(i=Pr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1}}class S1 extends dn{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],w=[],M=new Yt;M.layers.enable(1),M.viewport=new gt;const b=new Yt;b.layers.enable(2),b.viewport=new gt;const y=[M,b],A=new b1;A.layers.enable(1),A.layers.enable(2);let O=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let k=_[$];return k===void 0&&(k=new Qa,_[$]=k),k.getTargetRaySpace()},this.getControllerGrip=function($){let k=_[$];return k===void 0&&(k=new Qa,_[$]=k),k.getGripSpace()},this.getHand=function($){let k=_[$];return k===void 0&&(k=new Qa,_[$]=k),k.getHandSpace()};function C($){const k=w.indexOf($.inputSource);if(k===-1)return;const ee=_[k];ee!==void 0&&ee.dispatchEvent({type:$.type,data:$.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",q);for(let $=0;$<_.length;$++){const k=w[$];k!==null&&(w[$]=null,_[$].disconnect(k))}O=null,x=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,d=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),d=new gi(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:Gi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,ee=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,k=g.stencil?Ir:Vi,ee=g.stencil?Pr:Ii);const ue={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),d=new gi(f.textureWidth,f.textureHeight,{format:Mn,type:Gi,depthTexture:new M1(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(d);ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q($){for(let k=0;k<$.removed.length;k++){const ee=$.removed[k],Q=w.indexOf(ee);Q>=0&&(w[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:ee}))}for(let k=0;k<$.added.length;k++){const ee=$.added[k];let Q=w.indexOf(ee);if(Q===-1){for(let ce=0;ce<_.length;ce++)if(ce>=w.length){w.push(ee),Q=ce;break}else if(w[ce]===null){w[ce]=ee,Q=ce;break}if(Q===-1)break}const ue=_[Q];ue&&ue.dispatchEvent({type:"connected",data:ee})}}const ne=new B,G=new B;function D($,k,ee){ne.setFromMatrixPosition(k.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const Q=ne.distanceTo(G),ue=k.projectionMatrix.elements,ce=ee.projectionMatrix.elements,se=ue[14]/(ue[10]-1),W=ue[14]/(ue[10]+1),j=(ue[9]+1)/ue[5],oe=(ue[9]-1)/ue[5],_e=(ue[8]-1)/ue[0],me=(ce[8]+1)/ce[0],Ae=se*_e,L=se*me,v=Q/(-_e+me),E=v*-_e;k.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(E),$.translateZ(v),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const S=se+v,z=W+v,X=Ae-E,Z=L+(Q-E),ie=j*W/z*S,pe=oe*W/z*S;$.projectionMatrix.makePerspective(X,Z,ie,pe,S,z)}function F($,k){k===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(k.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;A.near=b.near=M.near=$.near,A.far=b.far=M.far=$.far,(O!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,x=A.far);const k=$.parent,ee=A.cameras;F(A,k);for(let ue=0;ue<ee.length;ue++)F(ee[ue],k);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),$.matrix.copy(A.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const Q=$.children;for(let ue=0,ce=Q.length;ue<ce;ue++)Q[ue].updateMatrixWorld(!0);ee.length===2?D(A,M,b):A.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function($){f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)};let U=null;function re($,k){if(c=k.getViewerPose(l||o),p=k,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Q=!1;ee.length!==A.cameras.length&&(A.cameras.length=0,Q=!0);for(let ue=0;ue<ee.length;ue++){const ce=ee[ue];let se=null;if(h!==null)se=h.getViewport(ce);else{const j=u.getViewSubImage(f,ce);se=j.viewport,ue===0&&(e.setRenderTargetTextures(d,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(d))}let W=y[ue];W===void 0&&(W=new Yt,W.layers.enable(ue),W.viewport=new gt,y[ue]=W),W.matrix.fromArray(ce.transform.matrix),W.projectionMatrix.fromArray(ce.projectionMatrix),W.viewport.set(se.x,se.y,se.width,se.height),ue===0&&A.matrix.copy(W.matrix),Q===!0&&A.cameras.push(W)}}for(let ee=0;ee<_.length;ee++){const Q=w[ee],ue=_[ee];Q!==null&&ue!==void 0&&ue.update(Q,k,l||o)}U&&U($,k),p=null}const K=new op;K.setAnimationLoop(re),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}function T1(n,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=w*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function E1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(w,M){const b=M.program;i.uniformBlockBinding(w,b)}function c(w,M){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",d));const y=M.program;i.updateUBOMapping(w,y);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function u(w){const M=f();w.__bindingPointIndex=M;const b=n.createBuffer(),y=w.__size,A=w.usage;return n.bindBuffer(35345,b),n.bufferData(35345,y,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,M,b),b}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=r[w.id],b=w.uniforms,y=w.__cache;n.bindBuffer(35345,M);for(let A=0,O=b.length;A<O;A++){const x=b[A];if(p(x,A,y)===!0){const C=x.value,I=x.__offset;typeof C=="number"?(x.__data[0]=C,n.bufferSubData(35345,I,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),n.bufferSubData(35345,I,x.__data))}}n.bindBuffer(35345,null)}function p(w,M,b){const y=w.value;if(b[M]===void 0)return typeof y=="number"?b[M]=y:b[M]=y.clone(),!0;if(typeof y=="number"){if(b[M]!==y)return b[M]=y,!0}else{const A=b[M];if(A.equals(y)===!1)return A.copy(y),!0}return!1}function g(w){const M=w.uniforms;let b=0;const y=16;let A=0;for(let O=0,x=M.length;O<x;O++){const C=M[O],I=m(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,O>0){A=b%y;const q=y-A;A!==0&&q-I.boundary<0&&(b+=y-A,C.__offset=b)}b+=I.storage}return A=b%y,A>0&&(b+=y-A),w.__size=b,w.__cache={},this}function m(w){const M=w.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function d(w){const M=w.target;M.removeEventListener("dispose",d);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function A1(){const n=ws("canvas");return n.style.display="block",n}function fp(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:A1(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wi,this.physicallyCorrectLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,w=0,M=null,b=-1,y=null;const A=new gt,O=new gt;let x=null,C=e.width,I=e.height,q=1,ne=null,G=null;const D=new gt(0,0,C,I),F=new gt(0,0,C,I);let U=!1;const re=new Pc;let K=!1,$=!1,k=null;const ee=new tt,Q=new xe,ue=new B,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return M===null?q:1}let W=t;function j(R,te){for(let fe=0;fe<R.length;fe++){const J=R[fe],de=e.getContext(J,te);if(de!==null)return de}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",ke,!1),W===null){const te=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&te.shift(),W=j(te,R),W===null)throw j(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,_e,me,Ae,L,v,E,S,z,X,Z,ie,pe,le,P,T,V,ae,he,ve,we,N,Y,Se;function Ce(){oe=new zb(W),_e=new Db(W,oe,n),oe.init(_e),N=new x1(W,oe,_e),me=new v1(W,oe,_e),Ae=new Vb,L=new r1,v=new y1(W,oe,me,L,_e,N,Ae),E=new Ib(m),S=new kb(m),z=new J0(W,_e),Y=new Lb(W,oe,z,_e),X=new Bb(W,z,Ae,Y),Z=new jb(W,X,z,Ae),he=new Wb(W,_e,v),T=new Ob(L),ie=new i1(m,E,S,oe,_e,Y,T),pe=new T1(m,L),le=new o1,P=new h1(oe,_e),ae=new Pb(m,E,me,Z,u,o),V=new _1(m,Z,_e),Se=new E1(W,Ae,_e,me),ve=new Rb(W,oe,Ae,_e),we=new Ub(W,oe,Ae,_e),Ae.programs=ie.programs,m.capabilities=_e,m.extensions=oe,m.properties=L,m.renderLists=le,m.shadowMap=V,m.state=me,m.info=Ae}Ce();const Te=new S1(m,W);this.xr=Te,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(C,I,!1))},this.getSize=function(R){return R.set(C,I)},this.setSize=function(R,te,fe){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,I=te,e.width=Math.floor(R*q),e.height=Math.floor(te*q),fe!==!1&&(e.style.width=R+"px",e.style.height=te+"px"),this.setViewport(0,0,R,te)},this.getDrawingBufferSize=function(R){return R.set(C*q,I*q).floor()},this.setDrawingBufferSize=function(R,te,fe){C=R,I=te,q=fe,e.width=Math.floor(R*fe),e.height=Math.floor(te*fe),this.setViewport(0,0,R,te)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,te,fe,J){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,te,fe,J),me.viewport(A.copy(D).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,te,fe,J){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,te,fe,J),me.scissor(O.copy(F).multiplyScalar(q).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(R){me.setScissorTest(U=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){G=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,te=!0,fe=!0){let J=0;R&&(J|=16384),te&&(J|=256),fe&&(J|=1024),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),le.dispose(),P.dispose(),L.dispose(),E.dispose(),S.dispose(),Z.dispose(),Y.dispose(),Se.dispose(),ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ne),Te.removeEventListener("sessionend",Qe),k&&(k.dispose(),k=null),ot.stop()};function Le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const R=Ae.autoReset,te=V.enabled,fe=V.autoUpdate,J=V.needsUpdate,de=V.type;Ce(),Ae.autoReset=R,V.enabled=te,V.autoUpdate=fe,V.needsUpdate=J,V.type=de}function ke(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function H(R){const te=R.target;te.removeEventListener("dispose",H),Ee(te)}function Ee(R){ye(R),L.remove(R)}function ye(R){const te=L.get(R).programs;te!==void 0&&(te.forEach(function(fe){ie.releaseProgram(fe)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,te,fe,J,de,Re){te===null&&(te=ce);const Fe=de.isMesh&&de.matrixWorld.determinant()<0,Ue=vm(R,te,fe,J,de);me.setMaterial(J,Fe);let ze=fe.index;const Xe=fe.attributes.position;if(ze===null){if(Xe===void 0||Xe.count===0)return}else if(ze.count===0)return;let Ge=1;J.wireframe===!0&&(ze=X.getWireframeAttribute(fe),Ge=2),Y.setup(de,J,Ue,fe,ze);let We,rt=ve;ze!==null&&(We=z.get(ze),rt=we,rt.setIndex(We));const vi=ze!==null?ze.count:Xe.count,Yi=fe.drawRange.start*Ge,Zi=fe.drawRange.count*Ge,pn=Re!==null?Re.start*Ge:0,qe=Re!==null?Re.count*Ge:1/0,Ki=Math.max(Yi,pn),lt=Math.min(vi,Yi+Zi,pn+qe)-1,jt=Math.max(0,lt-Ki+1);if(jt!==0){if(de.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*se()),rt.setMode(1)):rt.setMode(4);else if(de.isLine){let $n=J.linewidth;$n===void 0&&($n=1),me.setLineWidth($n*se()),de.isLineSegments?rt.setMode(1):de.isLineLoop?rt.setMode(2):rt.setMode(3)}else de.isPoints?rt.setMode(0):de.isSprite&&rt.setMode(4);if(de.isInstancedMesh)rt.renderInstances(Ki,jt,de.count);else if(fe.isInstancedBufferGeometry){const $n=Math.min(fe.instanceCount,fe._maxInstanceCount);rt.renderInstances(Ki,jt,$n)}else rt.render(Ki,jt)}},this.compile=function(R,te){function fe(J,de,Re){J.transparent===!0&&J.side===li?(J.side=Vt,J.needsUpdate=!0,Ds(J,de,Re),J.side=Rr,J.needsUpdate=!0,Ds(J,de,Re),J.side=li):Ds(J,de,Re)}h=P.get(R),h.init(),g.push(h),R.traverseVisible(function(J){J.isLight&&J.layers.test(te.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights(m.physicallyCorrectLights),R.traverse(function(J){const de=J.material;if(de)if(Array.isArray(de))for(let Re=0;Re<de.length;Re++){const Fe=de[Re];fe(Fe,R,J)}else fe(de,R,J)}),g.pop(),h=null};let ge=null;function Me(R){ge&&ge(R)}function Ne(){ot.stop()}function Qe(){ot.start()}const ot=new op;ot.setAnimationLoop(Me),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(R){ge=R,Te.setAnimationLoop(R),R===null?ot.stop():ot.start()},Te.addEventListener("sessionstart",Ne),Te.addEventListener("sessionend",Qe),this.render=function(R,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(te),te=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,te,M),h=P.get(R,g.length),h.init(),g.push(h),ee.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),re.setFromProjectionMatrix(ee),$=this.localClippingEnabled,K=T.init(this.clippingPlanes,$,te),f=le.get(R,p.length),f.init(),p.push(f),jn(R,te,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(ne,G),K===!0&&T.beginShadows();const fe=h.state.shadowsArray;if(V.render(fe,R,te),K===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(f,R),h.setupLights(m.physicallyCorrectLights),te.isArrayCamera){const J=te.cameras;for(let de=0,Re=J.length;de<Re;de++){const Fe=J[de];it(f,R,Fe,Fe.viewport)}}else it(f,R,te);M!==null&&(v.updateMultisampleRenderTarget(M),v.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(m,R,te),Y.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function jn(R,te,fe,J){if(R.visible===!1)return;if(R.layers.test(te.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(te);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const Fe=Z.update(R),Ue=R.material;Ue.visible&&f.push(R,Fe,Ue,fe,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ae.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ae.render.frame),!R.frustumCulled||re.intersectsObject(R))){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const Fe=Z.update(R),Ue=R.material;if(Array.isArray(Ue)){const ze=Fe.groups;for(let Xe=0,Ge=ze.length;Xe<Ge;Xe++){const We=ze[Xe],rt=Ue[We.materialIndex];rt&&rt.visible&&f.push(R,Fe,rt,fe,ue.z,We)}}else Ue.visible&&f.push(R,Fe,Ue,fe,ue.z,null)}}const Re=R.children;for(let Fe=0,Ue=Re.length;Fe<Ue;Fe++)jn(Re[Fe],te,fe,J)}function it(R,te,fe,J){const de=R.opaque,Re=R.transmissive,Fe=R.transparent;h.setupLightsView(fe),Re.length>0&&En(de,te,fe),J&&me.viewport(A.copy(J)),de.length>0&&Wt(de,te,fe),Re.length>0&&Wt(Re,te,fe),Fe.length>0&&Wt(Fe,te,fe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function En(R,te,fe){const J=_e.isWebGL2;k===null&&(k=new gi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?bs:Gi,minFilter:ea,samples:J&&s===!0?4:0})),m.getDrawingBufferSize(Q),J?k.setSize(Q.x,Q.y):k.setSize(kl(Q.x),kl(Q.y));const de=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Re=m.toneMapping;m.toneMapping=Bn,Wt(R,te,fe),m.toneMapping=Re,v.updateMultisampleRenderTarget(k),v.updateRenderTargetMipmap(k),m.setRenderTarget(de)}function Wt(R,te,fe){const J=te.isScene===!0?te.overrideMaterial:null;for(let de=0,Re=R.length;de<Re;de++){const Fe=R[de],Ue=Fe.object,ze=Fe.geometry,Xe=J===null?Fe.material:J,Ge=Fe.group;Ue.layers.test(fe.layers)&&_m(Ue,te,fe,ze,Xe,Ge)}}function _m(R,te,fe,J,de,Re){R.onBeforeRender(m,te,fe,J,de,Re),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),de.onBeforeRender(m,te,fe,J,R,Re),de.transparent===!0&&de.side===li?(de.side=Vt,de.needsUpdate=!0,m.renderBufferDirect(fe,te,J,de,R,Re),de.side=Rr,de.needsUpdate=!0,m.renderBufferDirect(fe,te,J,de,R,Re),de.side=li):m.renderBufferDirect(fe,te,J,de,R,Re),R.onAfterRender(m,te,fe,J,de,Re)}function Ds(R,te,fe){te.isScene!==!0&&(te=ce);const J=L.get(R),de=h.state.lights,Re=h.state.shadowsArray,Fe=de.state.version,Ue=ie.getParameters(R,de.state,Re,te,fe),ze=ie.getProgramCacheKey(Ue);let Xe=J.programs;J.environment=R.isMeshStandardMaterial?te.environment:null,J.fog=te.fog,J.envMap=(R.isMeshStandardMaterial?S:E).get(R.envMap||J.environment),Xe===void 0&&(R.addEventListener("dispose",H),Xe=new Map,J.programs=Xe);let Ge=Xe.get(ze);if(Ge!==void 0){if(J.currentProgram===Ge&&J.lightsStateVersion===Fe)return Jc(R,Ue),Ge}else Ue.uniforms=ie.getUniforms(R),R.onBuild(fe,Ue,m),R.onBeforeCompile(Ue,m),Ge=ie.acquireProgram(Ue,ze),Xe.set(ze,Ge),J.uniforms=Ue.uniforms;const We=J.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=T.uniform),Jc(R,Ue),J.needsLights=xm(R),J.lightsStateVersion=Fe,J.needsLights&&(We.ambientLightColor.value=de.state.ambient,We.lightProbe.value=de.state.probe,We.directionalLights.value=de.state.directional,We.directionalLightShadows.value=de.state.directionalShadow,We.spotLights.value=de.state.spot,We.spotLightShadows.value=de.state.spotShadow,We.rectAreaLights.value=de.state.rectArea,We.ltc_1.value=de.state.rectAreaLTC1,We.ltc_2.value=de.state.rectAreaLTC2,We.pointLights.value=de.state.point,We.pointLightShadows.value=de.state.pointShadow,We.hemisphereLights.value=de.state.hemi,We.directionalShadowMap.value=de.state.directionalShadowMap,We.directionalShadowMatrix.value=de.state.directionalShadowMatrix,We.spotShadowMap.value=de.state.spotShadowMap,We.spotLightMatrix.value=de.state.spotLightMatrix,We.spotLightMap.value=de.state.spotLightMap,We.pointShadowMap.value=de.state.pointShadowMap,We.pointShadowMatrix.value=de.state.pointShadowMatrix);const rt=Ge.getUniforms(),vi=Mo.seqWithValue(rt.seq,We);return J.currentProgram=Ge,J.uniformsList=vi,Ge}function Jc(R,te){const fe=L.get(R);fe.outputEncoding=te.outputEncoding,fe.instancing=te.instancing,fe.skinning=te.skinning,fe.morphTargets=te.morphTargets,fe.morphNormals=te.morphNormals,fe.morphColors=te.morphColors,fe.morphTargetsCount=te.morphTargetsCount,fe.numClippingPlanes=te.numClippingPlanes,fe.numIntersection=te.numClipIntersection,fe.vertexAlphas=te.vertexAlphas,fe.vertexTangents=te.vertexTangents,fe.toneMapping=te.toneMapping}function vm(R,te,fe,J,de){te.isScene!==!0&&(te=ce),v.resetTextureUnits();const Re=te.fog,Fe=J.isMeshStandardMaterial?te.environment:null,Ue=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Wi,ze=(J.isMeshStandardMaterial?S:E).get(J.envMap||Fe),Xe=J.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Ge=!!J.normalMap&&!!fe.attributes.tangent,We=!!fe.morphAttributes.position,rt=!!fe.morphAttributes.normal,vi=!!fe.morphAttributes.color,Yi=J.toneMapped?m.toneMapping:Bn,Zi=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,pn=Zi!==void 0?Zi.length:0,qe=L.get(J),Ki=h.state.lights;if(K===!0&&($===!0||R!==y)){const kt=R===y&&J.id===b;T.setState(J,R,kt)}let lt=!1;J.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ki.state.version||qe.outputEncoding!==Ue||de.isInstancedMesh&&qe.instancing===!1||!de.isInstancedMesh&&qe.instancing===!0||de.isSkinnedMesh&&qe.skinning===!1||!de.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ze||J.fog===!0&&qe.fog!==Re||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==T.numPlanes||qe.numIntersection!==T.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ge||qe.morphTargets!==We||qe.morphNormals!==rt||qe.morphColors!==vi||qe.toneMapping!==Yi||_e.isWebGL2===!0&&qe.morphTargetsCount!==pn)&&(lt=!0):(lt=!0,qe.__version=J.version);let jt=qe.currentProgram;lt===!0&&(jt=Ds(J,te,de));let $n=!1,Gr=!1,ca=!1;const Et=jt.getUniforms(),yi=qe.uniforms;if(me.useProgram(jt.program)&&($n=!0,Gr=!0,ca=!0),J.id!==b&&(b=J.id,Gr=!0),$n||y!==R){if(Et.setValue(W,"projectionMatrix",R.projectionMatrix),_e.logarithmicDepthBuffer&&Et.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),y!==R&&(y=R,Gr=!0,ca=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const kt=Et.map.cameraPosition;kt!==void 0&&kt.setValue(W,ue.setFromMatrixPosition(R.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Et.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||de.isSkinnedMesh)&&Et.setValue(W,"viewMatrix",R.matrixWorldInverse)}if(de.isSkinnedMesh){Et.setOptional(W,de,"bindMatrix"),Et.setOptional(W,de,"bindMatrixInverse");const kt=de.skeleton;kt&&(_e.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Et.setValue(W,"boneTexture",kt.boneTexture,v),Et.setValue(W,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ua=fe.morphAttributes;if((ua.position!==void 0||ua.normal!==void 0||ua.color!==void 0&&_e.isWebGL2===!0)&&he.update(de,fe,J,jt),(Gr||qe.receiveShadow!==de.receiveShadow)&&(qe.receiveShadow=de.receiveShadow,Et.setValue(W,"receiveShadow",de.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yi.envMap.value=ze,yi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Gr&&(Et.setValue(W,"toneMappingExposure",m.toneMappingExposure),qe.needsLights&&ym(yi,ca),Re&&J.fog===!0&&pe.refreshFogUniforms(yi,Re),pe.refreshMaterialUniforms(yi,J,q,I,k),Mo.upload(W,qe.uniformsList,yi,v)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Mo.upload(W,qe.uniformsList,yi,v),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Et.setValue(W,"center",de.center),Et.setValue(W,"modelViewMatrix",de.modelViewMatrix),Et.setValue(W,"normalMatrix",de.normalMatrix),Et.setValue(W,"modelMatrix",de.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const kt=J.uniformsGroups;for(let fa=0,bm=kt.length;fa<bm;fa++)if(_e.isWebGL2){const Qc=kt[fa];Se.update(Qc,jt),Se.bind(Qc,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function ym(R,te){R.ambientLightColor.needsUpdate=te,R.lightProbe.needsUpdate=te,R.directionalLights.needsUpdate=te,R.directionalLightShadows.needsUpdate=te,R.pointLights.needsUpdate=te,R.pointLightShadows.needsUpdate=te,R.spotLights.needsUpdate=te,R.spotLightShadows.needsUpdate=te,R.rectAreaLights.needsUpdate=te,R.hemisphereLights.needsUpdate=te}function xm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,te,fe){L.get(R.texture).__webglTexture=te,L.get(R.depthTexture).__webglTexture=fe;const J=L.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=fe===void 0,J.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,te){const fe=L.get(R);fe.__webglFramebuffer=te,fe.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(R,te=0,fe=0){M=R,_=te,w=fe;let J=!0;if(R){const ze=L.get(R);ze.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),J=!1):ze.__webglFramebuffer===void 0?v.setupRenderTarget(R):ze.__hasExternalTextures&&v.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture)}let de=null,Re=!1,Fe=!1;if(R){const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Fe=!0);const Xe=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(de=Xe[te],Re=!0):_e.isWebGL2&&R.samples>0&&v.useMultisampledRTT(R)===!1?de=L.get(R).__webglMultisampledFramebuffer:de=Xe,A.copy(R.viewport),O.copy(R.scissor),x=R.scissorTest}else A.copy(D).multiplyScalar(q).floor(),O.copy(F).multiplyScalar(q).floor(),x=U;if(me.bindFramebuffer(36160,de)&&_e.drawBuffers&&J&&me.drawBuffers(R,de),me.viewport(A),me.scissor(O),me.setScissorTest(x),Re){const ze=L.get(R.texture);W.framebufferTexture2D(36160,36064,34069+te,ze.__webglTexture,fe)}else if(Fe){const ze=L.get(R.texture),Xe=te||0;W.framebufferTextureLayer(36160,36064,ze.__webglTexture,fe||0,Xe)}b=-1},this.readRenderTargetPixels=function(R,te,fe,J,de,Re,Fe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ue=Ue[Fe]),Ue){me.bindFramebuffer(36160,Ue);try{const ze=R.texture,Xe=ze.format,Ge=ze.type;if(Xe!==Mn&&N.convert(Xe)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===bs&&(oe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ge!==Gi&&N.convert(Ge)!==W.getParameter(35738)&&!(Ge===Ni&&(_e.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=R.width-J&&fe>=0&&fe<=R.height-de&&W.readPixels(te,fe,J,de,N.convert(Xe),N.convert(Ge),Re)}finally{const ze=M!==null?L.get(M).__webglFramebuffer:null;me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(R,te,fe=0){const J=Math.pow(2,-fe),de=Math.floor(te.image.width*J),Re=Math.floor(te.image.height*J);v.setTexture2D(te,0),W.copyTexSubImage2D(3553,fe,0,0,R.x,R.y,de,Re),me.unbindTexture()},this.copyTextureToTexture=function(R,te,fe,J=0){const de=te.image.width,Re=te.image.height,Fe=N.convert(fe.format),Ue=N.convert(fe.type);v.setTexture2D(fe,0),W.pixelStorei(37440,fe.flipY),W.pixelStorei(37441,fe.premultiplyAlpha),W.pixelStorei(3317,fe.unpackAlignment),te.isDataTexture?W.texSubImage2D(3553,J,R.x,R.y,de,Re,Fe,Ue,te.image.data):te.isCompressedTexture?W.compressedTexSubImage2D(3553,J,R.x,R.y,te.mipmaps[0].width,te.mipmaps[0].height,Fe,te.mipmaps[0].data):W.texSubImage2D(3553,J,R.x,R.y,Fe,Ue,te.image),J===0&&fe.generateMipmaps&&W.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(R,te,fe,J,de=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=R.max.x-R.min.x+1,Fe=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,ze=N.convert(J.format),Xe=N.convert(J.type);let Ge;if(J.isData3DTexture)v.setTexture3D(J,0),Ge=32879;else if(J.isDataArrayTexture)v.setTexture2DArray(J,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,J.flipY),W.pixelStorei(37441,J.premultiplyAlpha),W.pixelStorei(3317,J.unpackAlignment);const We=W.getParameter(3314),rt=W.getParameter(32878),vi=W.getParameter(3316),Yi=W.getParameter(3315),Zi=W.getParameter(32877),pn=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;W.pixelStorei(3314,pn.width),W.pixelStorei(32878,pn.height),W.pixelStorei(3316,R.min.x),W.pixelStorei(3315,R.min.y),W.pixelStorei(32877,R.min.z),fe.isDataTexture||fe.isData3DTexture?W.texSubImage3D(Ge,de,te.x,te.y,te.z,Re,Fe,Ue,ze,Xe,pn.data):fe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ge,de,te.x,te.y,te.z,Re,Fe,Ue,ze,pn.data)):W.texSubImage3D(Ge,de,te.x,te.y,te.z,Re,Fe,Ue,ze,Xe,pn),W.pixelStorei(3314,We),W.pixelStorei(32878,rt),W.pixelStorei(3316,vi),W.pixelStorei(3315,Yi),W.pixelStorei(32877,Zi),de===0&&J.generateMipmaps&&W.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?v.setTextureCube(R,0):R.isData3DTexture?v.setTexture3D(R,0):R.isDataArrayTexture?v.setTexture2DArray(R,0):v.setTexture2D(R,0),me.unbindTexture()},this.resetState=function(){_=0,w=0,M=null,me.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class C1 extends fp{}C1.prototype.isWebGL1Renderer=!0;class P1 extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class L1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new B;class No{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new No(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dc extends Xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dr;const Xr=new B,pr=new B,mr=new B,gr=new xe,Yr=new xe,hp=new tt,oo=new B,Zr=new B,ao=new B,$f=new xe,el=new xe,qf=new xe;class dp extends _t{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new L1(t,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new No(i,3,0,!1)),dr.setAttribute("uv",new No(i,2,3,!1))}this.geometry=dr,this.material=e!==void 0?e:new Dc,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),hp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;lo(oo.set(-.5,-.5,0),mr,o,pr,r,s),lo(Zr.set(.5,-.5,0),mr,o,pr,r,s),lo(ao.set(.5,.5,0),mr,o,pr,r,s),$f.set(0,0),el.set(1,0),qf.set(1,1);let a=e.ray.intersectTriangle(oo,Zr,ao,!1,Xr);if(a===null&&(lo(Zr.set(-.5,.5,0),mr,o,pr,r,s),el.set(0,1),a=e.ray.intersectTriangle(oo,ao,Zr,!1,Xr),a===null))return;const l=e.ray.origin.distanceTo(Xr);l<e.near||l>e.far||t.push({distance:l,point:Xr.clone(),uv:wn.getUV(Xr,oo,Zr,ao,$f,el,qf,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lo(n,e,t,i,r,s){gr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Yr.x=s*gr.x-r*gr.y,Yr.y=r*gr.x+s*gr.y):Yr.copy(gr),n.copy(e),n.x+=Yr.x,n.y+=Yr.y,n.applyMatrix4(hp)}class pp extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xf=new B,Yf=new B,Zf=new tt,tl=new Ec,co=new ta;class R1 extends _t{constructor(e=new Dt,t=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Xf.fromBufferAttribute(t,r-1),Yf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xf.distanceTo(Yf);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(r),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Zf.copy(r).invert(),tl.copy(e.ray).applyMatrix4(Zf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,f=new B,h=new B,p=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let M=_,b=w-1;M<b;M+=p){const y=g.getX(M),A=g.getX(M+1);if(c.fromBufferAttribute(d,y),u.fromBufferAttribute(d,A),tl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let M=_,b=w-1;M<b;M+=p){if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,M+1),tl.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,r=[],s=[],o=[],a=new B,l=new tt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(wt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(wt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mp extends Wn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new xe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class D1 extends mp{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const uo=new B,nl=new Oc,il=new Oc,rl=new Oc;class O1 extends Wn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new B){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(uo.subVectors(r[0],r[1]).add(r[0]),c=uo);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(uo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),nl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,m,d),il.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,m,d),rl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),il.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),rl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(nl.calc(l),il.calc(l),rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function I1(n,e){const t=1-n;return t*t*e}function N1(n,e){return 2*(1-n)*n*e}function F1(n,e){return n*n*e}function us(n,e,t,i){return I1(n,e)+N1(n,t)+F1(n,i)}function k1(n,e){const t=1-n;return t*t*t*e}function z1(n,e){const t=1-n;return 3*t*t*n*e}function B1(n,e){return 3*(1-n)*n*n*e}function U1(n,e){return n*n*n*e}function fs(n,e,t,i,r){return k1(n,e)+z1(n,t)+B1(n,i)+U1(n,r)}class V1 extends Wn{constructor(e=new xe,t=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new xe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(e,r.x,s.x,o.x,a.x),fs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gp extends Wn{constructor(e=new B,t=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(e,r.x,s.x,o.x,a.x),fs(e,r.y,s.y,o.y,a.y),fs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H1 extends Wn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new xe;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G1 extends Wn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W1 extends Wn{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(us(e,r.x,s.x,o.x),us(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ic extends Wn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(us(e,r.x,s.x,o.x),us(e,r.y,s.y,o.y),us(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j1 extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Kf(a,l.x,c.x,u.x,f.x),Kf(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var $1=Object.freeze({__proto__:null,ArcCurve:D1,CatmullRomCurve3:O1,CubicBezierCurve:V1,CubicBezierCurve3:gp,EllipseCurve:mp,LineCurve:H1,LineCurve3:G1,QuadraticBezierCurve:W1,QuadraticBezierCurve3:Ic,SplineCurve:j1});class ra extends Dt{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const m=[],d=i/2;let _=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(p,2));function w(){const b=new B,y=new B;let A=0;const O=(t-e)/i;for(let x=0;x<=s;x++){const C=[],I=x/s,q=I*(t-e)+e;for(let ne=0;ne<=r;ne++){const G=ne/r,D=G*l+a,F=Math.sin(D),U=Math.cos(D);y.x=q*F,y.y=-I*i+d,y.z=q*U,f.push(y.x,y.y,y.z),b.set(F,O,U).normalize(),h.push(b.x,b.y,b.z),p.push(G,1-I),C.push(g++)}m.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const I=m[C][x],q=m[C+1][x],ne=m[C+1][x+1],G=m[C][x+1];u.push(I,q,G),u.push(q,ne,G),A+=6}c.addGroup(_,A,0),_+=A}function M(b){const y=g,A=new xe,O=new B;let x=0;const C=b===!0?e:t,I=b===!0?1:-1;for(let ne=1;ne<=r;ne++)f.push(0,d*I,0),h.push(0,I,0),p.push(.5,.5),g++;const q=g;for(let ne=0;ne<=r;ne++){const D=ne/r*l+a,F=Math.cos(D),U=Math.sin(D);O.x=C*U,O.y=d*I,O.z=C*F,f.push(O.x,O.y,O.z),h.push(0,I,0),A.x=F*.5+.5,A.y=U*.5*I+.5,p.push(A.x,A.y),g++}for(let ne=0;ne<r;ne++){const G=y+ne,D=q+ne;b===!0?u.push(D,D+1,G):u.push(D+1,D,G),x+=3}c.addGroup(_,x,b===!0?1:2),_+=x}}static fromJSON(e){return new ra(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends ra{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends Dt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const w=[],M=_/i;let b=0;_==0&&o==0?b=.5/t:_==i&&l==Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const A=y/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),d.push(A+b,1-M),w.push(c++)}u.push(w)}for(let _=0;_<i;_++)for(let w=0;w<t;w++){const M=u[_][w+1],b=u[_][w],y=u[_+1][w],A=u[_+1][w+1];(_!==0||o>0)&&p.push(M,b,A),(_!==i-1||l<Math.PI)&&p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(d,2))}static fromJSON(e){return new sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fc extends Dt{constructor(e=new Ic(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new xe;let u=new B;const f=[],h=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(p,2));function m(){for(let M=0;M<t;M++)d(M);d(s===!1?t:0),w(),_()}function d(M){u=e.getPointAt(M/t,u);const b=o.normals[M],y=o.binormals[M];for(let A=0;A<=r;A++){const O=A/r*Math.PI*2,x=Math.sin(O),C=-Math.cos(O);l.x=C*b.x+x*y.x,l.y=C*b.y+x*y.y,l.z=C*b.z+x*y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function _(){for(let M=1;M<=t;M++)for(let b=1;b<=r;b++){const y=(r+1)*(M-1)+(b-1),A=(r+1)*M+(b-1),O=(r+1)*M+b,x=(r+1)*(M-1)+b;g.push(y,A,x),g.push(A,O,x)}}function w(){for(let M=0;M<=t;M++)for(let b=0;b<=r;b++)c.x=M/t,c.y=b/r,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Fc(new $1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class q1 extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jf={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class X1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Y1=new X1;class _p{constructor(e){this.manager=e!==void 0?e:Y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Z1 extends _p{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jf.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ws("img");function l(){u(),Jf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vp extends _p{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,o=new Z1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class yp extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sl=new tt,Qf=new B,eh=new B;class K1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qf),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J1 extends K1{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q1 extends yp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DefaultUp),this.updateMatrix(),this.target=new _t,this.shadow=new J1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eM extends yp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function th(){return(typeof performance>"u"?Date:performance).now()}class bp{constructor(e,t,i=0,r=1/0){this.ray=new Ec(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Bl(e,this,i,t),i.sort(nh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bl(e[r],this,i,t);return i.sort(nh),i}}function nh(n,e){return n.distance-e.distance}function Bl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Bl(r[s],e,t,!0)}}class Ul{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const _r=new oi,ni=new bp,Kr=new xe,ih=new B,fo=new B,ol=new B,rh=new tt;class tM extends dn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,s=null;const o=[],a=this;function l(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",m),i.addEventListener("pointerleave",m)}function c(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",m),i.removeEventListener("pointerleave",m),i.style.cursor=""}function u(){c()}function f(){return e}function h(){return ni}function p(_){if(a.enabled!==!1){if(d(_),ni.setFromCamera(Kr,t),r){ni.ray.intersectPlane(_r,fo)&&r.position.copy(fo.sub(ih).applyMatrix4(rh)),a.dispatchEvent({type:"drag",object:r});return}if(_.pointerType==="mouse"||_.pointerType==="pen")if(o.length=0,ni.setFromCamera(Kr,t),ni.intersectObjects(e,!0,o),o.length>0){const w=o[0].object;_r.setFromNormalAndCoplanarPoint(t.getWorldDirection(_r.normal),ol.setFromMatrixPosition(w.matrixWorld)),s!==w&&s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null),s!==w&&(a.dispatchEvent({type:"hoveron",object:w}),i.style.cursor="pointer",s=w)}else s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null)}}function g(_){a.enabled!==!1&&(d(_),o.length=0,ni.setFromCamera(Kr,t),ni.intersectObjects(e,!0,o),o.length>0&&(r=a.transformGroup===!0?e[0]:o[0].object,_r.setFromNormalAndCoplanarPoint(t.getWorldDirection(_r.normal),ol.setFromMatrixPosition(r.matrixWorld)),ni.ray.intersectPlane(_r,fo)&&(rh.copy(r.parent.matrixWorld).invert(),ih.copy(fo).sub(ol.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function m(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=s?"pointer":"auto")}function d(_){const w=i.getBoundingClientRect();Kr.x=(_.clientX-w.left)/w.width*2-1,Kr.y=-(_.clientY-w.top)/w.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=f,this.getRaycaster=h}}function nM(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=i.length,l,c=0,u=0,f=0;for(o=0;o<a;++o)l=i[o],c+=l.x||0,u+=l.y||0,f+=l.z||0;for(c=(c/a-n)*r,u=(u/a-e)*r,f=(f/a-t)*r,o=0;o<a;++o)l=i[o],c&&(l.x-=c),u&&(l.y-=u),f&&(l.z-=f)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(n=+o,s):n},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function iM(n){var e=+this._x.call(null,n);return wp(this.cover(e),e,n)}function wp(n,e,t){if(isNaN(e))return n;var i,r=n._root,s={data:t},o=n._x0,a=n._x1,l,c,u,f,h;if(!r)return n._root=s,n;for(;r.length;)if((u=e>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[f=+u]))return i[f]=s,n;if(c=+n._x.call(null,r.data),e===c)return s.next=r,i?i[f]=s:n._root=s,n;do i=i?i[f]=new Array(2):n._root=new Array(2),(u=e>=(l=(o+a)/2))?o=l:a=l;while((f=+u)==(h=+(c>=l)));return i[h]=r,i[f]=s,n}function rM(n){var e,t=n.length,i,r=new Array(t),s=1/0,o=-1/0;for(e=0;e<t;++e)isNaN(i=+this._x.call(null,n[e]))||(r[e]=i,i<s&&(s=i),i>o&&(o=i));if(s>o)return this;for(this.cover(s).cover(o),e=0;e<t;++e)wp(this,r[e],n[e]);return this}function sM(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,s,o;e>n||n>=t;)switch(o=+(n<e),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function oM(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function aM(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Un(n,e,t){this.node=n,this.x0=e,this.x1=t}function lM(n,e){var t,i=this._x0,r,s,o=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new Un(l,i,o)),e==null?e=1/0:(i=n-e,o=n+e);c=a.pop();)if(!(!(l=c.node)||(r=c.x0)>o||(s=c.x1)<i))if(l.length){var f=(r+s)/2;a.push(new Un(l[1],f,s),new Un(l[0],r,f)),(u=+(n>=f))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var h=Math.abs(n-+this._x.call(null,l.data));h<e&&(e=h,i=n-h,o=n+h,t=l.data)}return t}function cM(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._x1,l,c,u,f,h;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(o+a)/2))?o=c:a=c,e=t,!(t=t[f=+u]))return this;if(!t.length)break;e[f+1&1]&&(i=e,h=f)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[f]=s:delete e[f],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=s,this)}function uM(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function fM(){return this._root}function hM(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function dM(n){var e=[],t,i=this._root,r,s,o;for(i&&e.push(new Un(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&e.push(new Un(r,a,o)),(r=i[0])&&e.push(new Un(r,s,a))}return this}function pM(n){var e=[],t=[],i;for(this._root&&e.push(new Un(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&e.push(new Un(s,o,l)),(s=r[1])&&e.push(new Un(s,l,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function mM(n){return n[0]}function gM(n){return arguments.length?(this._x=n,this):this._x}function Mp(n,e){var t=new kc(e==null?mM:e,NaN,NaN);return n==null?t:t.addAll(n)}function kc(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function sh(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ft=Mp.prototype=kc.prototype;Ft.copy=function(){var n=new kc(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=sh(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=sh(i));return n};Ft.add=iM;Ft.addAll=rM;Ft.cover=sM;Ft.data=oM;Ft.extent=aM;Ft.find=lM;Ft.remove=cM;Ft.removeAll=uM;Ft.root=fM;Ft.size=hM;Ft.visit=dM;Ft.visitAfter=pM;Ft.x=gM;function _M(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Sp(this.cover(e,t),e,t,n)}function Sp(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,u=n._y1,f,h,p,g,m,d,_,w;if(!s)return n._root=o,n;for(;s.length;)if((m=e>=(f=(a+c)/2))?a=f:c=f,(d=t>=(h=(l+u)/2))?l=h:u=h,r=s,!(s=s[_=d<<1|m]))return r[_]=o,n;if(p=+n._x.call(null,s.data),g=+n._y.call(null,s.data),e===p&&t===g)return o.next=s,r?r[_]=o:n._root=o,n;do r=r?r[_]=new Array(4):n._root=new Array(4),(m=e>=(f=(a+c)/2))?a=f:c=f,(d=t>=(h=(l+u)/2))?l=h:u=h;while((_=d<<1|m)===(w=(g>=h)<<1|p>=f));return r[w]=s,r[_]=o,n}function vM(n){var e,t,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(o[t]=r,a[t]=s,r<l&&(l=r),r>u&&(u=r),s<c&&(c=s),s>f&&(f=s));if(l>u||c>f)return this;for(this.cover(l,c).cover(u,f),t=0;t<i;++t)Sp(this,o[t],a[t],n[t]);return this}function yM(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var o=r-t||1,a=this._root,l,c;t>n||n>=r||i>e||e>=s;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=t+o,s=i+o;break;case 1:t=r-o,s=i+o;break;case 2:r=t+o,i=s-o;break;case 3:t=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function xM(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function bM(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Lt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function wM(n,e,t){var i,r=this._x0,s=this._y0,o,a,l,c,u=this._x1,f=this._y1,h=[],p=this._root,g,m;for(p&&h.push(new Lt(p,r,s,u,f)),t==null?t=1/0:(r=n-t,s=e-t,u=n+t,f=e+t,t*=t);g=h.pop();)if(!(!(p=g.node)||(o=g.x0)>u||(a=g.y0)>f||(l=g.x1)<r||(c=g.y1)<s))if(p.length){var d=(o+l)/2,_=(a+c)/2;h.push(new Lt(p[3],d,_,l,c),new Lt(p[2],o,_,d,c),new Lt(p[1],d,a,l,_),new Lt(p[0],o,a,d,_)),(m=(e>=_)<<1|n>=d)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-m],h[h.length-1-m]=g)}else{var w=n-+this._x.call(null,p.data),M=e-+this._y.call(null,p.data),b=w*w+M*M;if(b<t){var y=Math.sqrt(t=b);r=n-y,s=e-y,u=n+y,f=e+y,i=p.data}}return i}function MM(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,f,h,p,g,m,d,_;if(!t)return this;if(t.length)for(;;){if((g=u>=(h=(o+l)/2))?o=h:l=h,(m=f>=(p=(a+c)/2))?a=p:c=p,e=t,!(t=t[d=m<<1|g]))return this;if(!t.length)break;(e[d+1&3]||e[d+2&3]||e[d+3&3])&&(i=e,_=d)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[d]=s:delete e[d],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[_]=t:this._root=t),this):(this._root=s,this)}function SM(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function TM(){return this._root}function EM(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function AM(n){var e=[],t,i=this._root,r,s,o,a,l;for(i&&e.push(new Lt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.x1,l=t.y1)&&i.length){var c=(s+a)/2,u=(o+l)/2;(r=i[3])&&e.push(new Lt(r,c,u,a,l)),(r=i[2])&&e.push(new Lt(r,s,u,c,l)),(r=i[1])&&e.push(new Lt(r,c,o,a,u)),(r=i[0])&&e.push(new Lt(r,s,o,c,u))}return this}function CM(n){var e=[],t=[],i;for(this._root&&e.push(new Lt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,u=(o+l)/2,f=(a+c)/2;(s=r[0])&&e.push(new Lt(s,o,a,u,f)),(s=r[1])&&e.push(new Lt(s,u,a,l,f)),(s=r[2])&&e.push(new Lt(s,o,f,u,c)),(s=r[3])&&e.push(new Lt(s,u,f,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function PM(n){return n[0]}function LM(n){return arguments.length?(this._x=n,this):this._x}function RM(n){return n[1]}function DM(n){return arguments.length?(this._y=n,this):this._y}function Tp(n,e,t){var i=new zc(e==null?PM:e,t==null?RM:t,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function zc(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function oh(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ot=Tp.prototype=zc.prototype;Ot.copy=function(){var n=new zc(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=oh(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=oh(i));return n};Ot.add=_M;Ot.addAll=vM;Ot.cover=yM;Ot.data=xM;Ot.extent=bM;Ot.find=wM;Ot.remove=MM;Ot.removeAll=SM;Ot.root=TM;Ot.size=EM;Ot.visit=AM;Ot.visitAfter=CM;Ot.x=LM;Ot.y=DM;function OM(n){var e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Ep(this.cover(e,t,i),e,t,i,n)}function Ep(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var s,o=n._root,a={data:r},l=n._x0,c=n._y0,u=n._z0,f=n._x1,h=n._y1,p=n._z1,g,m,d,_,w,M,b,y,A,O,x;if(!o)return n._root=a,n;for(;o.length;)if((b=e>=(g=(l+f)/2))?l=g:f=g,(y=t>=(m=(c+h)/2))?c=m:h=m,(A=i>=(d=(u+p)/2))?u=d:p=d,s=o,!(o=o[O=A<<2|y<<1|b]))return s[O]=a,n;if(_=+n._x.call(null,o.data),w=+n._y.call(null,o.data),M=+n._z.call(null,o.data),e===_&&t===w&&i===M)return a.next=o,s?s[O]=a:n._root=a,n;do s=s?s[O]=new Array(8):n._root=new Array(8),(b=e>=(g=(l+f)/2))?l=g:f=g,(y=t>=(m=(c+h)/2))?c=m:h=m,(A=i>=(d=(u+p)/2))?u=d:p=d;while((O=A<<2|y<<1|b)===(x=(M>=d)<<2|(w>=m)<<1|_>=g));return s[x]=o,s[O]=a,n}function IM(n){var e,t,i=n.length,r,s,o,a=new Array(i),l=new Array(i),c=new Array(i),u=1/0,f=1/0,h=1/0,p=-1/0,g=-1/0,m=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||isNaN(o=+this._z.call(null,e))||(a[t]=r,l[t]=s,c[t]=o,r<u&&(u=r),r>p&&(p=r),s<f&&(f=s),s>g&&(g=s),o<h&&(h=o),o>m&&(m=o));if(u>p||f>g||h>m)return this;for(this.cover(u,f,h).cover(p,g,m),t=0;t<i;++t)Ep(this,a[t],l[t],c[t],n[t]);return this}function NM(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,l=(s=Math.floor(t))+1;else{for(var c=o-i||1,u=this._root,f,h;i>n||n>=o||r>e||e>=a||s>t||t>=l;)switch(h=(t<s)<<2|(e<r)<<1|n<i,f=new Array(8),f[h]=u,u=f,c*=2,h){case 0:o=i+c,a=r+c,l=s+c;break;case 1:i=o-c,a=r+c,l=s+c;break;case 2:o=i+c,r=a-c,l=s+c;break;case 3:i=o-c,r=a-c,l=s+c;break;case 4:o=i+c,a=r+c,s=l-c;break;case 5:i=o-c,a=r+c,s=l-c;break;case 6:o=i+c,r=a-c,s=l-c;break;case 7:i=o-c,r=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function FM(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function kM(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ze(n,e,t,i,r,s,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function zM(n,e,t,i){var r,s=this._x0,o=this._y0,a=this._z0,l,c,u,f,h,p,g=this._x1,m=this._y1,d=this._z1,_=[],w=this._root,M,b;for(w&&_.push(new Ze(w,s,o,a,g,m,d)),i==null?i=1/0:(s=n-i,o=e-i,a=t-i,g=n+i,m=e+i,d=t+i,i*=i);M=_.pop();)if(!(!(w=M.node)||(l=M.x0)>g||(c=M.y0)>m||(u=M.z0)>d||(f=M.x1)<s||(h=M.y1)<o||(p=M.z1)<a))if(w.length){var y=(l+f)/2,A=(c+h)/2,O=(u+p)/2;_.push(new Ze(w[7],y,A,O,f,h,p),new Ze(w[6],l,A,O,y,h,p),new Ze(w[5],y,c,O,f,A,p),new Ze(w[4],l,c,O,y,A,p),new Ze(w[3],y,A,u,f,h,O),new Ze(w[2],l,A,u,y,h,O),new Ze(w[1],y,c,u,f,A,O),new Ze(w[0],l,c,u,y,A,O)),(b=(t>=O)<<2|(e>=A)<<1|n>=y)&&(M=_[_.length-1],_[_.length-1]=_[_.length-1-b],_[_.length-1-b]=M)}else{var x=n-+this._x.call(null,w.data),C=e-+this._y.call(null,w.data),I=t-+this._z.call(null,w.data),q=x*x+C*C+I*I;if(q<i){var ne=Math.sqrt(i=q);s=n-ne,o=e-ne,a=t-ne,g=n+ne,m=e+ne,d=t+ne,r=w.data}}return r}function BM(n){if(isNaN(h=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,f=this._z1,h,p,g,m,d,_,w,M,b,y,A;if(!t)return this;if(t.length)for(;;){if((w=h>=(m=(o+c)/2))?o=m:c=m,(M=p>=(d=(a+u)/2))?a=d:u=d,(b=g>=(_=(l+f)/2))?l=_:f=_,e=t,!(t=t[y=b<<2|M<<1|w]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(i=e,A=y)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[y]=s:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[A]=t:this._root=t),this):(this._root=s,this)}function UM(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function VM(){return this._root}function HM(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function GM(n){var e=[],t,i=this._root,r,s,o,a,l,c,u;for(i&&e.push(new Ze(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.z0,l=t.x1,c=t.y1,u=t.z1)&&i.length){var f=(s+l)/2,h=(o+c)/2,p=(a+u)/2;(r=i[7])&&e.push(new Ze(r,f,h,p,l,c,u)),(r=i[6])&&e.push(new Ze(r,s,h,p,f,c,u)),(r=i[5])&&e.push(new Ze(r,f,o,p,l,h,u)),(r=i[4])&&e.push(new Ze(r,s,o,p,f,h,u)),(r=i[3])&&e.push(new Ze(r,f,h,a,l,c,p)),(r=i[2])&&e.push(new Ze(r,s,h,a,f,c,p)),(r=i[1])&&e.push(new Ze(r,f,o,a,l,h,p)),(r=i[0])&&e.push(new Ze(r,s,o,a,f,h,p))}return this}function WM(n){var e=[],t=[],i;for(this._root&&e.push(new Ze(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,c=i.x1,u=i.y1,f=i.z1,h=(o+c)/2,p=(a+u)/2,g=(l+f)/2;(s=r[0])&&e.push(new Ze(s,o,a,l,h,p,g)),(s=r[1])&&e.push(new Ze(s,h,a,l,c,p,g)),(s=r[2])&&e.push(new Ze(s,o,p,l,h,u,g)),(s=r[3])&&e.push(new Ze(s,h,p,l,c,u,g)),(s=r[4])&&e.push(new Ze(s,o,a,g,h,p,f)),(s=r[5])&&e.push(new Ze(s,h,a,g,c,p,f)),(s=r[6])&&e.push(new Ze(s,o,p,g,h,u,f)),(s=r[7])&&e.push(new Ze(s,h,p,g,c,u,f))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function jM(n){return n[0]}function $M(n){return arguments.length?(this._x=n,this):this._x}function qM(n){return n[1]}function XM(n){return arguments.length?(this._y=n,this):this._y}function YM(n){return n[2]}function ZM(n){return arguments.length?(this._z=n,this):this._z}function Ap(n,e,t,i){var r=new Bc(e==null?jM:e,t==null?qM:t,i==null?YM:i,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Bc(n,e,t,i,r,s,o,a,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function ah(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Tt=Ap.prototype=Bc.prototype;Tt.copy=function(){var n=new Bc(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=ah(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=ah(i));return n};Tt.add=OM;Tt.addAll=IM;Tt.cover=NM;Tt.data=FM;Tt.extent=kM;Tt.find=zM;Tt.remove=BM;Tt.removeAll=UM;Tt.root=VM;Tt.size=HM;Tt.visit=GM;Tt.visitAfter=WM;Tt.x=$M;Tt.y=XM;Tt.z=ZM;function kn(n){return function(){return n}}function Fn(n){return(n()-.5)*1e-6}function KM(n){return n.index}function lh(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function JM(n){var e=KM,t=h,i,r=kn(30),s,o,a,l,c,u,f=1;n==null&&(n=[]);function h(_){return 1/Math.min(l[_.source.index],l[_.target.index])}function p(_){for(var w=0,M=n.length;w<f;++w)for(var b=0,y,A,O,x=0,C=0,I=0,q,ne;b<M;++b)y=n[b],A=y.source,O=y.target,x=O.x+O.vx-A.x-A.vx||Fn(u),a>1&&(C=O.y+O.vy-A.y-A.vy||Fn(u)),a>2&&(I=O.z+O.vz-A.z-A.vz||Fn(u)),q=Math.sqrt(x*x+C*C+I*I),q=(q-s[b])/q*_*i[b],x*=q,C*=q,I*=q,O.vx-=x*(ne=c[b]),a>1&&(O.vy-=C*ne),a>2&&(O.vz-=I*ne),A.vx+=x*(ne=1-ne),a>1&&(A.vy+=C*ne),a>2&&(A.vz+=I*ne)}function g(){if(!!o){var _,w=o.length,M=n.length,b=new Map(o.map((A,O)=>[e(A,O,o),A])),y;for(_=0,l=new Array(w);_<M;++_)y=n[_],y.index=_,typeof y.source!="object"&&(y.source=lh(b,y.source)),typeof y.target!="object"&&(y.target=lh(b,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(_=0,c=new Array(M);_<M;++_)y=n[_],c[_]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);i=new Array(M),m(),s=new Array(M),d()}}function m(){if(!!o)for(var _=0,w=n.length;_<w;++_)i[_]=+t(n[_],_,n)}function d(){if(!!o)for(var _=0,w=n.length;_<w;++_)s[_]=+r(n[_],_,n)}return p.initialize=function(_,...w){o=_,u=w.find(M=>typeof M=="function")||Math.random,a=w.find(M=>[1,2,3].includes(M))||2,g()},p.links=function(_){return arguments.length?(n=_,g(),p):n},p.id=function(_){return arguments.length?(e=_,p):e},p.iterations=function(_){return arguments.length?(f=+_,p):f},p.strength=function(_){return arguments.length?(t=typeof _=="function"?_:kn(+_),m(),p):t},p.distance=function(_){return arguments.length?(r=typeof _=="function"?_:kn(+_),d(),p):r},p}var QM={value:()=>{}};function Cp(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new So(t)}function So(n){this._=n}function eS(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}So.prototype=Cp.prototype={constructor:So,on:function(n,e){var t=this._,i=eS(n+"",t),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=tS(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(n=i[s]).type)t[r]=ch(t[r],n.name,e);else if(e==null)for(r in t)t[r]=ch(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new So(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function tS(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function ch(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=QM,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Fr=0,os=0,Jr=0,Pp=1e3,Fo,as,ko=0,ji=0,oa=0,Ms=typeof performance=="object"&&performance.now?performance:Date,Lp=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Rp(){return ji||(Lp(nS),ji=Ms.now()+oa)}function nS(){ji=0}function Vl(){this._call=this._time=this._next=null}Vl.prototype=Dp.prototype={constructor:Vl,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Rp():+t)+(e==null?0:+e),!this._next&&as!==this&&(as?as._next=this:Fo=this,as=this),this._call=n,this._time=t,Hl()},stop:function(){this._call&&(this._call=null,this._time=1/0,Hl())}};function Dp(n,e,t){var i=new Vl;return i.restart(n,e,t),i}function iS(){Rp(),++Fr;for(var n=Fo,e;n;)(e=ji-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Fr}function uh(){ji=(ko=Ms.now())+oa,Fr=os=0;try{iS()}finally{Fr=0,sS(),ji=0}}function rS(){var n=Ms.now(),e=n-ko;e>Pp&&(oa-=e,ko=n)}function sS(){for(var n,e=Fo,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Fo=t);as=n,Hl(i)}function Hl(n){if(!Fr){os&&(os=clearTimeout(os));var e=n-ji;e>24?(n<1/0&&(os=setTimeout(uh,n-Ms.now()-oa)),Jr&&(Jr=clearInterval(Jr))):(Jr||(ko=Ms.now(),Jr=setInterval(rS,Pp)),Fr=1,Lp(uh))}}const oS=1664525,aS=1013904223,fh=4294967296;function lS(){let n=1;return()=>(n=(oS*n+aS)%fh)/fh}var hh=3;function al(n){return n.x}function dh(n){return n.y}function cS(n){return n.z}var uS=10,fS=Math.PI*(3-Math.sqrt(5)),hS=Math.PI*20/(9+Math.sqrt(221));function dS(n,e){e=e||2;var t=Math.min(hh,Math.max(1,Math.round(e))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,u=Dp(p),f=Cp("tick","end"),h=lS();n==null&&(n=[]);function p(){g(),f.call("tick",i),r<s&&(u.stop(),f.call("end",i))}function g(_){var w,M=n.length,b;_===void 0&&(_=1);for(var y=0;y<_;++y)for(r+=(a-r)*o,c.forEach(function(A){A(r)}),w=0;w<M;++w)b=n[w],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return i}function m(){for(var _=0,w=n.length,M;_<w;++_){if(M=n[_],M.index=_,M.fx!=null&&(M.x=M.fx),M.fy!=null&&(M.y=M.fy),M.fz!=null&&(M.z=M.fz),isNaN(M.x)||t>1&&isNaN(M.y)||t>2&&isNaN(M.z)){var b=uS*(t>2?Math.cbrt(.5+_):t>1?Math.sqrt(.5+_):_),y=_*fS,A=_*hS;t===1?M.x=b:t===2?(M.x=b*Math.cos(y),M.y=b*Math.sin(y)):(M.x=b*Math.sin(y)*Math.cos(A),M.y=b*Math.cos(y),M.z=b*Math.sin(y)*Math.sin(A))}(isNaN(M.vx)||t>1&&isNaN(M.vy)||t>2&&isNaN(M.vz))&&(M.vx=0,t>1&&(M.vy=0),t>2&&(M.vz=0))}}function d(_){return _.initialize&&_.initialize(n,h,t),_}return m(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(_){return arguments.length?(t=Math.min(hh,Math.max(1,Math.round(_))),c.forEach(d),i):t},nodes:function(_){return arguments.length?(n=_,m(),c.forEach(d),i):n},alpha:function(_){return arguments.length?(r=+_,i):r},alphaMin:function(_){return arguments.length?(s=+_,i):s},alphaDecay:function(_){return arguments.length?(o=+_,i):+o},alphaTarget:function(_){return arguments.length?(a=+_,i):a},velocityDecay:function(_){return arguments.length?(l=1-_,i):1-l},randomSource:function(_){return arguments.length?(h=_,c.forEach(d),i):h},force:function(_,w){return arguments.length>1?(w==null?c.delete(_):c.set(_,d(w)),i):c.get(_)},find:function(){var _=Array.prototype.slice.call(arguments),w=_.shift()||0,M=(t>1?_.shift():null)||0,b=(t>2?_.shift():null)||0,y=_.shift()||1/0,A=0,O=n.length,x,C,I,q,ne,G;for(y*=y,A=0;A<O;++A)ne=n[A],x=w-ne.x,C=M-(ne.y||0),I=b-(ne.z||0),q=x*x+C*C+I*I,q<y&&(G=ne,y=q);return G},on:function(_,w){return arguments.length>1?(f.on(_,w),i):f.on(_)}}}function pS(){var n,e,t,i,r,s=kn(-30),o,a=1,l=1/0,c=.81;function u(g){var m,d=n.length,_=(e===1?Mp(n,al):e===2?Tp(n,al,dh):e===3?Ap(n,al,dh,cS):null).visitAfter(h);for(r=g,m=0;m<d;++m)t=n[m],_.visit(p)}function f(){if(!!n){var g,m=n.length,d;for(o=new Array(m),g=0;g<m;++g)d=n[g],o[d.index]=+s(d,g,n)}}function h(g){var m=0,d,_,w=0,M,b,y,A,O=g.length;if(O){for(M=b=y=A=0;A<O;++A)(d=g[A])&&(_=Math.abs(d.value))&&(m+=d.value,w+=_,M+=_*(d.x||0),b+=_*(d.y||0),y+=_*(d.z||0));m*=Math.sqrt(4/O),g.x=M/w,e>1&&(g.y=b/w),e>2&&(g.z=y/w)}else{d=g,d.x=d.data.x,e>1&&(d.y=d.data.y),e>2&&(d.z=d.data.z);do m+=o[d.data.index];while(d=d.next)}g.value=m}function p(g,m,d,_,w){if(!g.value)return!0;var M=[d,_,w][e-1],b=g.x-t.x,y=e>1?g.y-t.y:0,A=e>2?g.z-t.z:0,O=M-m,x=b*b+y*y+A*A;if(O*O/c<x)return x<l&&(b===0&&(b=Fn(i),x+=b*b),e>1&&y===0&&(y=Fn(i),x+=y*y),e>2&&A===0&&(A=Fn(i),x+=A*A),x<a&&(x=Math.sqrt(a*x)),t.vx+=b*g.value*r/x,e>1&&(t.vy+=y*g.value*r/x),e>2&&(t.vz+=A*g.value*r/x)),!0;if(g.length||x>=l)return;(g.data!==t||g.next)&&(b===0&&(b=Fn(i),x+=b*b),e>1&&y===0&&(y=Fn(i),x+=y*y),e>2&&A===0&&(A=Fn(i),x+=A*A),x<a&&(x=Math.sqrt(a*x)));do g.data!==t&&(O=o[g.data.index]*r/x,t.vx+=b*O,e>1&&(t.vy+=y*O),e>2&&(t.vz+=A*O));while(g=g.next)}return u.initialize=function(g,...m){n=g,i=m.find(d=>typeof d=="function")||Math.random,e=m.find(d=>[1,2,3].includes(d))||2,f()},u.strength=function(g){return arguments.length?(s=typeof g=="function"?g:kn(+g),f(),u):s},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function mS(n,e,t,i){var r,s,o=kn(.1),a,l;typeof n!="function"&&(n=kn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function c(f){for(var h=0,p=r.length;h<p;++h){var g=r[h],m=g.x-e||1e-6,d=(g.y||0)-t||1e-6,_=(g.z||0)-i||1e-6,w=Math.sqrt(m*m+d*d+_*_),M=(l[h]-w)*a[h]*f/w;g.vx+=m*M,s>1&&(g.vy+=d*M),s>2&&(g.vz+=_*M)}}function u(){if(!!r){var f,h=r.length;for(a=new Array(h),l=new Array(h),f=0;f<h;++f)l[f]=+n(r[f],f,r),a[f]=isNaN(l[f])?0:+o(r[f],f,r)}}return c.initialize=function(f,...h){r=f,s=h.find(p=>[1,2,3].includes(p))||2,u()},c.strength=function(f){return arguments.length?(o=typeof f=="function"?f:kn(+f),u(),c):o},c.radius=function(f){return arguments.length?(n=typeof f=="function"?f:kn(+f),u(),c):n},c.x=function(f){return arguments.length?(e=+f,c):e},c.y=function(f){return arguments.length?(t=+f,c):t},c.z=function(f){return arguments.length?(i=+f,c):i},c}var Uc=function(e){_S(e);var t=gS(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function gS(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var s=e[t];return s||(s=e[t]=[]),s.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var s=typeof i!="function";if(s)delete e[t];else for(var o=e[t],a=0;a<o.length;++a)o[a].callback===i&&o.splice(a,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var s=0;s<i.length;++s){var o=i[s];o.callback.apply(o.ctx,r)}return n}}}function _S(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var vS=xS,yS=Uc;function xS(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,s=n.multigraph?b:M,o=[],a=U,l=U,c=U,u=U,f={version:20,addNode:m,addLink:w,removeLink:x,removeNode:_,getNode:d,getNodeCount:y,getLinkCount:A,getEdgeCount:A,getLinksCount:A,getNodesCount:y,getLinks:O,forEachNode:$,forEachLinkedNode:G,forEachLink:ne,beginUpdate:c,endUpdate:u,clear:q,hasLink:I,hasNode:d,getLink:I};return yS(f),h(),f;function h(){var k=f.on;f.on=ee;function ee(){return f.beginUpdate=c=re,f.endUpdate=u=K,a=p,l=g,f.on=k,k.apply(f,arguments)}}function p(k,ee){o.push({link:k,changeType:ee})}function g(k,ee){o.push({node:k,changeType:ee})}function m(k,ee){if(k===void 0)throw new Error("Invalid node identifier");c();var Q=d(k);return Q?(Q.data=ee,l(Q,"update")):(Q=new bS(k,ee),l(Q,"add")),e.set(k,Q),u(),Q}function d(k){return e.get(k)}function _(k){var ee=d(k);if(!ee)return!1;c();var Q=ee.links;return Q&&(Q.forEach(C),ee.links=null),e.delete(k),l(ee,"remove"),u(),!0}function w(k,ee,Q){c();var ue=d(k)||m(k),ce=d(ee)||m(ee),se=s(k,ee,Q),W=t.has(se.id);return t.set(se.id,se),ph(ue,se),k!==ee&&ph(ce,se),a(se,W?"update":"add"),u(),se}function M(k,ee,Q){var ue=ho(k,ee),ce=t.get(ue);return ce?(ce.data=Q,ce):new mh(k,ee,Q,ue)}function b(k,ee,Q){var ue=ho(k,ee),ce=i.hasOwnProperty(ue);if(ce||I(k,ee)){ce||(i[ue]=0);var se="@"+ ++i[ue];ue=ho(k+se,ee+se)}return new mh(k,ee,Q,ue)}function y(){return e.size}function A(){return t.size}function O(k){var ee=d(k);return ee?ee.links:null}function x(k,ee){return ee!==void 0&&(k=I(k,ee)),C(k)}function C(k){if(!k||!t.get(k.id))return!1;c(),t.delete(k.id);var ee=d(k.fromId),Q=d(k.toId);return ee&&ee.links.delete(k),Q&&Q.links.delete(k),a(k,"remove"),u(),!0}function I(k,ee){if(!(k===void 0||ee===void 0))return t.get(ho(k,ee))}function q(){c(),$(function(k){_(k.id)}),u()}function ne(k){if(typeof k=="function")for(var ee=t.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}function G(k,ee,Q){var ue=d(k);if(ue&&ue.links&&typeof ee=="function")return Q?F(ue.links,k,ee):D(ue.links,k,ee)}function D(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value,j=W.fromId===ee?W.toId:W.fromId;if(ue=Q(e.get(j),W),ue)return!0;se=ce.next()}}function F(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value;if(W.fromId===ee&&(ue=Q(e.get(W.toId),W),ue))return!0;se=ce.next()}}function U(){}function re(){r+=1}function K(){r-=1,r===0&&o.length>0&&(f.fire("changed",o),o.length=0)}function $(k){if(typeof k!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+k);for(var ee=e.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}}function bS(n,e){this.id=n,this.links=null,this.data=e}function ph(n,e){n.links?n.links.add(e):n.links=new Set([e])}function mh(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function ho(n,e){return n.toString()+"\u{1F449} "+e.toString()}var Vc={exports:{}},Ls={exports:{}},Op=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const wS=Op;var Hr=function(e){return t;function t(i,r){let s=r&&r.indent||0,o=r&&r.join!==void 0?r.join:`
`,a=Array(s+1).join(" "),l=[];for(let c=0;c<e;++c){let u=wS(c),f=c===0?"":a;l.push(f+i.replace(/{var}/g,u))}return l.join(o)}};const Ip=Hr;Ls.exports=MS;Ls.exports.generateCreateBodyFunctionBody=Np;Ls.exports.getVectorCode=kp;Ls.exports.getBodyCode=Fp;function MS(n,e){let t=Np(n,e),{Body:i}=new Function(t)();return i}function Np(n,e){return`
${kp(n,e)}
${Fp(n)}
return {Body: Body, Vector: Vector};
`}function Fp(n){let e=Ip(n),t=e("{var}",{join:", "});return`
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
};`}function kp(n,e){let t=Ip(n),i="";return e&&(i=`${t(`
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
  };`}var _i={exports:{}};const Hc=Hr,ii=Op;_i.exports=SS;_i.exports.generateQuadTreeFunctionBody=zp;_i.exports.getInsertStackCode=Gp;_i.exports.getQuadNodeCode=Hp;_i.exports.isSamePosition=Bp;_i.exports.getChildBodyCode=Vp;_i.exports.setChildBodyCode=Up;function SS(n){let e=zp(n);return new Function(e)()}function zp(n){let e=Hc(n),t=Math.pow(2,n);return`
${Gp()}
${Hp(n)}
${Bp(n)}
${Vp(n)}
${Up(n)}

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
        if ((node.max_${ii(0)} - node.min_${ii(0)}) / r < theta) {
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

`;function r(a){let l=[],c=Array(a+1).join(" ");for(let u=0;u<n;++u)l.push(c+`if (${ii(u)} > max_${ii(u)}) {`),l.push(c+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),l.push(c+`  min_${ii(u)} = max_${ii(u)};`),l.push(c+`  max_${ii(u)} = node.max_${ii(u)};`),l.push(c+"}");return l.join(`
`)}function s(){let a=Array(11).join(" "),l=[];for(let c=0;c<t;++c)l.push(a+`if (node.quad${c}) {`),l.push(a+`  queue[pushIdx] = node.quad${c};`),l.push(a+"  queueLength += 1;"),l.push(a+"  pushIdx += 1;"),l.push(a+"}");return l.join(`
`)}function o(a){let l=[];for(let c=0;c<t;++c)l.push(`${a}quad${c} = null;`);return l.join(`
`)}}function Bp(n){let e=Hc(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Up(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let s=r===0?"  ":"  else ";i.push(`${s}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function Vp(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function Hp(n){let e=Hc(n),t=Math.pow(2,n);var i=`
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
`)}}function Gp(){return`
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
`}var Gc={exports:{}};Gc.exports=ES;Gc.exports.generateFunctionBody=Wp;const TS=Hr;function ES(n){let e=Wp(n);return new Function("bodies","settings","random",e)}function Wp(n){let e=TS(n);return`
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
`}var Wc={exports:{}};const AS=Hr;Wc.exports=CS;Wc.exports.generateCreateDragForceFunctionBody=jp;function CS(n){let e=jp(n);return new Function("options",e)}function jp(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${AS(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var jc={exports:{}};const PS=Hr;jc.exports=LS;jc.exports.generateCreateSpringForceFunctionBody=$p;function LS(n){let e=$p(n);return new Function("options","random",e)}function $p(n){let e=PS(n);return`
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
`}var $c={exports:{}};const RS=Hr;$c.exports=DS;$c.exports.generateIntegratorFunctionBody=qp;function DS(n){let e=qp(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function qp(n){let e=RS(n);return`
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
`}var ll,gh;function OS(){if(gh)return ll;gh=1,ll=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return ll}var cl,_h;function IS(){if(_h)return cl;_h=1,cl=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),s=typeof t[i],o=!r||typeof e[i]!==s;o?e[i]=t[i]:s==="object"&&(e[i]=n(e[i],t[i]))}}return e}return cl}var Qr={exports:{}},vh;function NS(){if(vh)return Qr.exports;vh=1,Qr.exports=n,Qr.exports.random=n,Qr.exports.randomIterator=a;function n(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=o,e.prototype.nextDouble=s,e.prototype.uniform=s,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function s(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function o(l){return Math.floor(this.nextDouble()*l)}function a(l,c){var u=c||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:h,shuffle:f};function f(){var p,g,m;for(p=l.length-1;p>0;--p)g=u.next(p+1),m=l[g],l[g]=l[p],l[p]=m;return l}function h(p){var g,m,d;for(g=l.length-1;g>0;--g)m=u.next(g+1),d=l[m],l[m]=l[g],l[g]=d,p(d);l.length&&p(l[0])}}return Qr.exports}var Xp=HS,FS=Ls.exports,kS=_i.exports,zS=Gc.exports,BS=Wc.exports,US=jc.exports,VS=$c.exports,yh={};function HS(n){var e=OS(),t=IS(),i=Uc;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=yh[n.dimensions];if(!r){var s=n.dimensions;r={Body:FS(s,n.debug),createQuadTree:kS(s),createBounds:zS(s),createDragForce:BS(s),createSpringForce:US(s),integrate:VS(s)},yh[s]=r}var o=r.Body,a=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,f=r.integrate,h=F=>new o(F),p=NS().random(42),g=[],m=[],d=a(n,p),_=l(g,n,p),w=u(n,p),M=c(n),b=0,y=[],A=new Map,O=0;I("nbody",G),I("spring",D);var x={bodies:g,quadTree:d,springs:m,settings:n,addForce:I,removeForce:q,getForces:ne,step:function(){for(var F=0;F<y.length;++F)y[F](O);var U=f(g,n.timeStep,n.adaptiveTimeStepWeight);return O+=1,U},addBody:function(F){if(!F)throw new Error("Body is required");return g.push(F),F},addBodyAt:function(F){if(!F)throw new Error("Body position is required");var U=h(F);return g.push(U),U},removeBody:function(F){if(!!F){var U=g.indexOf(F);if(!(U<0))return g.splice(U,1),g.length===0&&_.reset(),!0}},addSpring:function(F,U,re,K){if(!F||!U)throw new Error("Cannot add null spring to force simulator");typeof re!="number"&&(re=-1);var $=new e(F,U,re,K>=0?K:-1);return m.push($),$},getTotalMovement:function(){return b},removeSpring:function(F){if(!!F){var U=m.indexOf(F);if(U>-1)return m.splice(U,1),!0}},getBestNewBodyPosition:function(F){return _.getBestNewPosition(F)},getBBox:C,getBoundingBox:C,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(F){return F!==void 0?(n.gravity=F,d.options({gravity:F}),this):n.gravity},theta:function(F){return F!==void 0?(n.theta=F,d.options({theta:F}),this):n.theta},random:p};return GS(n,x),i(x),x;function C(){return _.update(),_.box}function I(F,U){if(A.has(F))throw new Error("Force "+F+" is already added");A.set(F,U),y.push(U)}function q(F){var U=y.indexOf(A.get(F));U<0||(y.splice(U,1),A.delete(F))}function ne(){return A}function G(){if(g.length!==0){d.insertBodies(g);for(var F=g.length;F--;){var U=g[F];U.isPinned||(U.reset(),d.updateBodyForce(U),M.update(U))}}}function D(){for(var F=m.length;F--;)w.update(m[F])}}function GS(n,e){for(var t in n)WS(n,e,t)}function WS(n,e,t){if(!!n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}Vc.exports=$S;Vc.exports.simulator=Xp;var jS=Uc;function $S(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Xp,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?G:ne;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var s=new Map,o={},a=0,l=i.settings.springTransform||qS;M(),d();var c=!1,u={step:function(){if(a===0)return f(!0),!0;var D=i.step();u.lastMove=D,u.fire("step");var F=D/a,U=F<=.01;return f(U),U},getNodePosition:function(D){return q(D).pos},setNodePosition:function(D){var F=q(D);F.setPosition.apply(F,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(D){var F=o[D];if(F)return{from:F.from.pos,to:F.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:h,pinNode:function(D,F){var U=q(D.id);U.isPinned=!!F},isNodePinned:function(D){return q(D.id).isPinned},dispose:function(){n.off("changed",w),u.fire("disposed")},getBody:m,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return jS(u),u;function f(D){c!==D&&(c=D,_(D))}function h(D){s.forEach(D)}function p(){var D=0,F=0;return h(function(U){D+=Math.abs(U.force.x),F+=Math.abs(U.force.y)}),Math.sqrt(D*D+F*F)}function g(D,F){var U;if(F===void 0)typeof D!="object"?U=D:U=D.id;else{var re=n.hasLink(D,F);if(!re)return;U=re.id}return o[U]}function m(D){return s.get(D)}function d(){n.on("changed",w)}function _(D){u.fire("stable",D)}function w(D){for(var F=0;F<D.length;++F){var U=D[F];U.changeType==="add"?(U.node&&b(U.node.id),U.link&&A(U.link)):U.changeType==="remove"&&(U.node&&y(U.node),U.link&&O(U.link))}a=n.getNodesCount()}function M(){a=0,n.forEachNode(function(D){b(D.id),a+=1}),n.forEachLink(A)}function b(D){var F=s.get(D);if(!F){var U=n.getNode(D);if(!U)throw new Error("initBody() was called with unknown node id");var re=U.position;if(!re){var K=x(U);re=i.getBestNewBodyPosition(K)}F=i.addBodyAt(re),F.id=D,s.set(D,F),C(D),I(U)&&(F.isPinned=!0)}}function y(D){var F=D.id,U=s.get(F);U&&(s.delete(F),i.removeBody(U))}function A(D){C(D.fromId),C(D.toId);var F=s.get(D.fromId),U=s.get(D.toId),re=i.addSpring(F,U,D.length);l(D,re),o[D.id]=re}function O(D){var F=o[D.id];if(F){var U=n.getNode(D.fromId),re=n.getNode(D.toId);U&&C(U.id),re&&C(re.id),delete o[D.id],i.removeSpring(F)}}function x(D){var F=[];if(!D.links)return F;for(var U=Math.min(D.links.length,2),re=0;re<U;++re){var K=D.links[re],$=K.fromId!==D.id?s.get(K.fromId):s.get(K.toId);$&&$.pos&&F.push($)}return F}function C(D){var F=s.get(D);if(F.mass=r(D),Number.isNaN(F.mass))throw new Error("Node mass should be a number")}function I(D){return D&&(D.isPinned||D.data&&D.data.isPinned)}function q(D){var F=s.get(D);return F||(b(D),F=s.get(D)),F}function ne(D){var F=n.getLinks(D);return F?1+F.length/3:1}function G(D){var F=n.getLinks(D);return F?1+F.size/3:1}}function qS(){}function Gl(n,e,t){var i,r,s,o,a;e==null&&(e=100);function l(){var u=Date.now()-o;u<e&&u>=0?i=setTimeout(l,e-u):(i=null,t||(a=n.apply(s,r),s=r=null))}var c=function(){s=this,r=arguments,o=Date.now();var u=t&&!i;return i||(i=setTimeout(l,e)),u&&(a=n.apply(s,r),s=r=null),a};return c.clear=function(){i&&(clearTimeout(i),i=null)},c.flush=function(){i&&(a=n.apply(s,r),s=r=null,clearTimeout(i),i=null)},c}Gl.debounce=Gl;var XS=Gl;function YS(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function xh(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function ZS(n,e,t){return e&&xh(n.prototype,e),t&&xh(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function KS(n,e){return JS(n)||QS(n,e)||eT(n,e)||tT()}function JS(n){if(Array.isArray(n))return n}function QS(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function eT(n,e){if(!!n){if(typeof n=="string")return bh(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return bh(n,e)}}function bh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nT=ZS(function n(e,t){var i=t.default,r=i===void 0?null:i,s=t.triggerUpdate,o=s===void 0?!0:s,a=t.onChange,l=a===void 0?function(c,u){}:a;YS(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=o,this.onChange=l});function qc(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,s=n.methods,o=s===void 0?{}:s,a=n.aliases,l=a===void 0?{}:a,c=n.init,u=c===void 0?function(){}:c,f=n.update,h=f===void 0?function(){}:f,p=Object.keys(r).map(function(g){return new nT(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),d={};function _(b){return w(b,g),M(),_}var w=function(y,A){u.call(_,y,m,A),m.initialised=!0},M=XS(function(){!m.initialised||(h.call(_,m,d),d={})},1);return p.forEach(function(b){_[b.name]=y(b);function y(A){var O=A.name,x=A.triggerUpdate,C=x===void 0?!1:x,I=A.onChange,q=I===void 0?function(D,F){}:I,ne=A.defaultVal,G=ne===void 0?null:ne;return function(D){var F=m[O];if(!arguments.length)return F;var U=D===void 0?G:D;return m[O]=U,q.call(_,U,m,F),!d.hasOwnProperty(O)&&(d[O]=F),C&&M(),_}}}),Object.keys(o).forEach(function(b){_[b]=function(){for(var y,A=arguments.length,O=new Array(A),x=0;x<A;x++)O[x]=arguments[x];return(y=o[b]).call.apply(y,[_,m].concat(O))}}),Object.entries(l).forEach(function(b){var y=KS(b,2),A=y[0],O=y[1];return _[A]=_[O]}),_.resetProps=function(){return p.forEach(function(b){_[b.name](b.defaultVal)}),_},_.resetProps(),m._rerender=M,_}}var je=function(n){return n instanceof Function?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class wh extends Map{constructor(e,t=sT){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(Mh(this,e))}has(e){return super.has(Mh(this,e))}set(e,t){return super.set(iT(this,e),t)}delete(e){return super.delete(rT(this,e))}}function Mh({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function iT({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function rT({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function sT(n){return n!==null&&typeof n=="object"?n.valueOf():n}function oT(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function aT(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function lT(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function cT(n,e){if(n==null)return{};var t=lT(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function uT(n,e){return dT(n)||mT(n,e)||Yp(n,e)||_T()}function fT(n){return hT(n)||pT(n)||Yp(n)||gT()}function hT(n){if(Array.isArray(n))return Wl(n)}function dT(n){if(Array.isArray(n))return n}function pT(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mT(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function Yp(n,e){if(!!n){if(typeof n=="string")return Wl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wl(n,e)}}function Wl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function gT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vT(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function yT(n){var e=vT(n,"string");return typeof e=="symbol"?e:String(e)}var Sh=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),s=n.reduce(function(a,l){var c=a,u=l;return r.forEach(function(f,h){var p=f.keyAccessor,g=f.isProp,m;if(g){var d=u,_=d[p],w=cT(d,[p].map(yT));m=_,u=w}else m=p(u,h);h+1<r.length?(c.hasOwnProperty(m)||(c[m]={}),c=c[m]):t?(c.hasOwnProperty(m)||(c[m]=[]),c[m].push(u)):c[m]=u}),a},{});t instanceof Function&&function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return a(u,c+1)})}(s);var o=s;return i&&(o=[],function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?o.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var f=uT(u,2),h=f[0],p=f[1];return a(p,[].concat(fT(c),[h]))})}(s),e instanceof Array&&e.length===0&&o.length===1&&(o[0].keys=[])),o};function Th(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function xT(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Th(Object(t),!0).forEach(function(i){Zp(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Th(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Zp(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function bT(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function wT(n,e){if(n==null)return{};var t=bT(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function Kp(n,e){return ST(n)||ET(n,e)||Jp(n,e)||CT()}function zo(n){return MT(n)||TT(n)||Jp(n)||AT()}function MT(n){if(Array.isArray(n))return jl(n)}function ST(n){if(Array.isArray(n))return n}function TT(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ET(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function Jp(n,e){if(!!n){if(typeof n=="string")return jl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jl(n,e)}}function jl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function AT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var PT=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function LT(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var o=Sh(n,t,!1),a=Sh(e,t,!1),l=Object.assign({},o,a);Object.entries(l).forEach(function(c){var u=Kp(c,2),f=u[0],h=u[1],p=o.hasOwnProperty(f)?a.hasOwnProperty(f)?"update":"exit":"enter";i[p].push(p==="update"?[o[f],a[f]]:h)})}else{var r=new Set(n),s=new Set(e);new Set([].concat(zo(r),zo(s))).forEach(function(c){var u=r.has(c)?s.has(c)?"update":"exit":"enter";i[u].push(u==="update"?[c,c]:c)})}return i}function RT(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,s=t.dataBindAttr,o=s===void 0?"__data":s,a=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(d){return d.hasOwnProperty(o)},f=e.filter(function(m){return!u(m)}),h=e.filter(u).map(function(m){return m[o]}),p=n,g=c?{enter:p,exit:h,update:[]}:LT(h,p,a);return g.update=g.update.map(function(m){var d=Kp(m,2),_=d[0],w=d[1];return _!==w&&(w[r]=_[r],w[r][o]=w),w}),g.exit=g.exit.concat(f.map(function(m){return Zp({},r,m)})),g}function DT(n,e,t,i,r){var s=r.createObj,o=s===void 0?function(x){return{}}:s,a=r.updateObj,l=a===void 0?function(x,C){}:a,c=r.exitObj,u=c===void 0?function(x){}:c,f=r.objBindAttr,h=f===void 0?"__obj":f,p=r.dataBindAttr,g=p===void 0?"__data":p,m=wT(r,PT),d=RT(n,e,xT({objBindAttr:h,dataBindAttr:g},m)),_=d.enter,w=d.update,M=d.exit;M.forEach(function(x){var C=x[h];delete x[h],u(C),i(C)});var b=A(_),y=[].concat(zo(_),zo(w));O(y),b.forEach(t);function A(x){var C=[];return x.forEach(function(I){var q=o(I);q&&(q[g]=I,I[h]=q,C.push(q))}),C}function O(x){x.forEach(function(C){var I=C[h];I&&(I[g]=C,l(I,C))})}}function OT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Eh=Symbol("implicit");function Qp(){var n=new wh,e=[],t=[],i=Eh;function r(s){let o=n.get(s);if(o===void 0){if(i!==Eh)return i;n.set(s,o=e.push(s)-1)}return t[o%t.length]}return r.domain=function(s){if(!arguments.length)return e.slice();e=[],n=new wh;for(const o of s)n.has(o)||n.set(o,e.push(o)-1);return r},r.range=function(s){return arguments.length?(t=Array.from(s),r):t.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return Qp(e,t).unknown(i)},OT.apply(r,arguments),r}function IT(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const NT=IT("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");var em={exports:{}};(function(n){(function(e){var t=/^\s+/,i=/\s+$/,r=0,s=e.round,o=e.min,a=e.max,l=e.random;function c(v,E){if(v=v||"",E=E||{},v instanceof c)return v;if(!(this instanceof c))return new c(v,E);var S=u(v);this._originalInput=v,this._r=S.r,this._g=S.g,this._b=S.b,this._a=S.a,this._roundA=s(100*this._a)/100,this._format=E.format||S.format,this._gradientType=E.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=S.ok,this._tc_id=r++}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var v=this.toRgb();return(v.r*299+v.g*587+v.b*114)/1e3},getLuminance:function(){var v=this.toRgb(),E,S,z,X,Z,ie;return E=v.r/255,S=v.g/255,z=v.b/255,E<=.03928?X=E/12.92:X=e.pow((E+.055)/1.055,2.4),S<=.03928?Z=S/12.92:Z=e.pow((S+.055)/1.055,2.4),z<=.03928?ie=z/12.92:ie=e.pow((z+.055)/1.055,2.4),.2126*X+.7152*Z+.0722*ie},setAlpha:function(v){return this._a=$(v),this._roundA=s(100*this._a)/100,this},toHsv:function(){var v=g(this._r,this._g,this._b);return{h:v.h*360,s:v.s,v:v.v,a:this._a}},toHsvString:function(){var v=g(this._r,this._g,this._b),E=s(v.h*360),S=s(v.s*100),z=s(v.v*100);return this._a==1?"hsv("+E+", "+S+"%, "+z+"%)":"hsva("+E+", "+S+"%, "+z+"%, "+this._roundA+")"},toHsl:function(){var v=h(this._r,this._g,this._b);return{h:v.h*360,s:v.s,l:v.l,a:this._a}},toHslString:function(){var v=h(this._r,this._g,this._b),E=s(v.h*360),S=s(v.s*100),z=s(v.l*100);return this._a==1?"hsl("+E+", "+S+"%, "+z+"%)":"hsla("+E+", "+S+"%, "+z+"%, "+this._roundA+")"},toHex:function(v){return d(this._r,this._g,this._b,v)},toHexString:function(v){return"#"+this.toHex(v)},toHex8:function(v){return _(this._r,this._g,this._b,this._a,v)},toHex8String:function(v){return"#"+this.toHex8(v)},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(k(this._r,255)*100)+"%",g:s(k(this._g,255)*100)+"%",b:s(k(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%)":"rgba("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:re[d(this._r,this._g,this._b,!0)]||!1},toFilter:function(v){var E="#"+w(this._r,this._g,this._b,this._a),S=E,z=this._gradientType?"GradientType = 1, ":"";if(v){var X=c(v);S="#"+w(X._r,X._g,X._b,X._a)}return"progid:DXImageTransform.Microsoft.gradient("+z+"startColorstr="+E+",endColorstr="+S+")"},toString:function(v){var E=!!v;v=v||this._format;var S=!1,z=this._a<1&&this._a>=0,X=!E&&z&&(v==="hex"||v==="hex6"||v==="hex3"||v==="hex4"||v==="hex8"||v==="name");return X?v==="name"&&this._a===0?this.toName():this.toRgbString():(v==="rgb"&&(S=this.toRgbString()),v==="prgb"&&(S=this.toPercentageRgbString()),(v==="hex"||v==="hex6")&&(S=this.toHexString()),v==="hex3"&&(S=this.toHexString(!0)),v==="hex4"&&(S=this.toHex8String(!0)),v==="hex8"&&(S=this.toHex8String()),v==="name"&&(S=this.toName()),v==="hsl"&&(S=this.toHslString()),v==="hsv"&&(S=this.toHsvString()),S||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(v,E){var S=v.apply(null,[this].concat([].slice.call(E)));return this._r=S._r,this._g=S._g,this._b=S._b,this.setAlpha(S._a),this},lighten:function(){return this._applyModification(A,arguments)},brighten:function(){return this._applyModification(O,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(M,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(C,arguments)},_applyCombination:function(v,E){return v.apply(null,[this].concat([].slice.call(E)))},analogous:function(){return this._applyCombination(D,arguments)},complement:function(){return this._applyCombination(I,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(G,arguments)},triad:function(){return this._applyCombination(q,arguments)},tetrad:function(){return this._applyCombination(ne,arguments)}},c.fromRatio=function(v,E){if(typeof v=="object"){var S={};for(var z in v)v.hasOwnProperty(z)&&(z==="a"?S[z]=v[z]:S[z]=W(v[z]));v=S}return c(v,E)};function u(v){var E={r:0,g:0,b:0},S=1,z=null,X=null,Z=null,ie=!1,pe=!1;return typeof v=="string"&&(v=Ae(v)),typeof v=="object"&&(me(v.r)&&me(v.g)&&me(v.b)?(E=f(v.r,v.g,v.b),ie=!0,pe=String(v.r).substr(-1)==="%"?"prgb":"rgb"):me(v.h)&&me(v.s)&&me(v.v)?(z=W(v.s),X=W(v.v),E=m(v.h,z,X),ie=!0,pe="hsv"):me(v.h)&&me(v.s)&&me(v.l)&&(z=W(v.s),Z=W(v.l),E=p(v.h,z,Z),ie=!0,pe="hsl"),v.hasOwnProperty("a")&&(S=v.a)),S=$(S),{ok:ie,format:v.format||pe,r:o(255,a(E.r,0)),g:o(255,a(E.g,0)),b:o(255,a(E.b,0)),a:S}}function f(v,E,S){return{r:k(v,255)*255,g:k(E,255)*255,b:k(S,255)*255}}function h(v,E,S){v=k(v,255),E=k(E,255),S=k(S,255);var z=a(v,E,S),X=o(v,E,S),Z,ie,pe=(z+X)/2;if(z==X)Z=ie=0;else{var le=z-X;switch(ie=pe>.5?le/(2-z-X):le/(z+X),z){case v:Z=(E-S)/le+(E<S?6:0);break;case E:Z=(S-v)/le+2;break;case S:Z=(v-E)/le+4;break}Z/=6}return{h:Z,s:ie,l:pe}}function p(v,E,S){var z,X,Z;v=k(v,360),E=k(E,100),S=k(S,100);function ie(P,T,V){return V<0&&(V+=1),V>1&&(V-=1),V<1/6?P+(T-P)*6*V:V<1/2?T:V<2/3?P+(T-P)*(2/3-V)*6:P}if(E===0)z=X=Z=S;else{var pe=S<.5?S*(1+E):S+E-S*E,le=2*S-pe;z=ie(le,pe,v+1/3),X=ie(le,pe,v),Z=ie(le,pe,v-1/3)}return{r:z*255,g:X*255,b:Z*255}}function g(v,E,S){v=k(v,255),E=k(E,255),S=k(S,255);var z=a(v,E,S),X=o(v,E,S),Z,ie,pe=z,le=z-X;if(ie=z===0?0:le/z,z==X)Z=0;else{switch(z){case v:Z=(E-S)/le+(E<S?6:0);break;case E:Z=(S-v)/le+2;break;case S:Z=(v-E)/le+4;break}Z/=6}return{h:Z,s:ie,v:pe}}function m(v,E,S){v=k(v,360)*6,E=k(E,100),S=k(S,100);var z=e.floor(v),X=v-z,Z=S*(1-E),ie=S*(1-X*E),pe=S*(1-(1-X)*E),le=z%6,P=[S,ie,Z,Z,pe,S][le],T=[pe,S,S,ie,Z,Z][le],V=[Z,Z,pe,S,S,ie][le];return{r:P*255,g:T*255,b:V*255}}function d(v,E,S,z){var X=[se(s(v).toString(16)),se(s(E).toString(16)),se(s(S).toString(16))];return z&&X[0].charAt(0)==X[0].charAt(1)&&X[1].charAt(0)==X[1].charAt(1)&&X[2].charAt(0)==X[2].charAt(1)?X[0].charAt(0)+X[1].charAt(0)+X[2].charAt(0):X.join("")}function _(v,E,S,z,X){var Z=[se(s(v).toString(16)),se(s(E).toString(16)),se(s(S).toString(16)),se(j(z))];return X&&Z[0].charAt(0)==Z[0].charAt(1)&&Z[1].charAt(0)==Z[1].charAt(1)&&Z[2].charAt(0)==Z[2].charAt(1)&&Z[3].charAt(0)==Z[3].charAt(1)?Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0)+Z[3].charAt(0):Z.join("")}function w(v,E,S,z){var X=[se(j(z)),se(s(v).toString(16)),se(s(E).toString(16)),se(s(S).toString(16))];return X.join("")}c.equals=function(v,E){return!v||!E?!1:c(v).toRgbString()==c(E).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})};function M(v,E){E=E===0?0:E||10;var S=c(v).toHsl();return S.s-=E/100,S.s=ee(S.s),c(S)}function b(v,E){E=E===0?0:E||10;var S=c(v).toHsl();return S.s+=E/100,S.s=ee(S.s),c(S)}function y(v){return c(v).desaturate(100)}function A(v,E){E=E===0?0:E||10;var S=c(v).toHsl();return S.l+=E/100,S.l=ee(S.l),c(S)}function O(v,E){E=E===0?0:E||10;var S=c(v).toRgb();return S.r=a(0,o(255,S.r-s(255*-(E/100)))),S.g=a(0,o(255,S.g-s(255*-(E/100)))),S.b=a(0,o(255,S.b-s(255*-(E/100)))),c(S)}function x(v,E){E=E===0?0:E||10;var S=c(v).toHsl();return S.l-=E/100,S.l=ee(S.l),c(S)}function C(v,E){var S=c(v).toHsl(),z=(S.h+E)%360;return S.h=z<0?360+z:z,c(S)}function I(v){var E=c(v).toHsl();return E.h=(E.h+180)%360,c(E)}function q(v){var E=c(v).toHsl(),S=E.h;return[c(v),c({h:(S+120)%360,s:E.s,l:E.l}),c({h:(S+240)%360,s:E.s,l:E.l})]}function ne(v){var E=c(v).toHsl(),S=E.h;return[c(v),c({h:(S+90)%360,s:E.s,l:E.l}),c({h:(S+180)%360,s:E.s,l:E.l}),c({h:(S+270)%360,s:E.s,l:E.l})]}function G(v){var E=c(v).toHsl(),S=E.h;return[c(v),c({h:(S+72)%360,s:E.s,l:E.l}),c({h:(S+216)%360,s:E.s,l:E.l})]}function D(v,E,S){E=E||6,S=S||30;var z=c(v).toHsl(),X=360/S,Z=[c(v)];for(z.h=(z.h-(X*E>>1)+720)%360;--E;)z.h=(z.h+X)%360,Z.push(c(z));return Z}function F(v,E){E=E||6;for(var S=c(v).toHsv(),z=S.h,X=S.s,Z=S.v,ie=[],pe=1/E;E--;)ie.push(c({h:z,s:X,v:Z})),Z=(Z+pe)%1;return ie}c.mix=function(v,E,S){S=S===0?0:S||50;var z=c(v).toRgb(),X=c(E).toRgb(),Z=S/100,ie={r:(X.r-z.r)*Z+z.r,g:(X.g-z.g)*Z+z.g,b:(X.b-z.b)*Z+z.b,a:(X.a-z.a)*Z+z.a};return c(ie)},c.readability=function(v,E){var S=c(v),z=c(E);return(e.max(S.getLuminance(),z.getLuminance())+.05)/(e.min(S.getLuminance(),z.getLuminance())+.05)},c.isReadable=function(v,E,S){var z=c.readability(v,E),X,Z;switch(Z=!1,X=L(S),X.level+X.size){case"AAsmall":case"AAAlarge":Z=z>=4.5;break;case"AAlarge":Z=z>=3;break;case"AAAsmall":Z=z>=7;break}return Z},c.mostReadable=function(v,E,S){var z=null,X=0,Z,ie,pe,le;S=S||{},ie=S.includeFallbackColors,pe=S.level,le=S.size;for(var P=0;P<E.length;P++)Z=c.readability(v,E[P]),Z>X&&(X=Z,z=c(E[P]));return c.isReadable(v,z,{level:pe,size:le})||!ie?z:(S.includeFallbackColors=!1,c.mostReadable(v,["#fff","#000"],S))};var U=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},re=c.hexNames=K(U);function K(v){var E={};for(var S in v)v.hasOwnProperty(S)&&(E[v[S]]=S);return E}function $(v){return v=parseFloat(v),(isNaN(v)||v<0||v>1)&&(v=1),v}function k(v,E){ue(v)&&(v="100%");var S=ce(v);return v=o(E,a(0,parseFloat(v))),S&&(v=parseInt(v*E,10)/100),e.abs(v-E)<1e-6?1:v%E/parseFloat(E)}function ee(v){return o(1,a(0,v))}function Q(v){return parseInt(v,16)}function ue(v){return typeof v=="string"&&v.indexOf(".")!=-1&&parseFloat(v)===1}function ce(v){return typeof v=="string"&&v.indexOf("%")!=-1}function se(v){return v.length==1?"0"+v:""+v}function W(v){return v<=1&&(v=v*100+"%"),v}function j(v){return e.round(parseFloat(v)*255).toString(16)}function oe(v){return Q(v)/255}var _e=function(){var v="[-\\+]?\\d+%?",E="[-\\+]?\\d*\\.\\d+%?",S="(?:"+E+")|(?:"+v+")",z="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?",X="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?";return{CSS_UNIT:new RegExp(S),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+X),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+X),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+X),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function me(v){return!!_e.CSS_UNIT.exec(v)}function Ae(v){v=v.replace(t,"").replace(i,"").toLowerCase();var E=!1;if(U[v])v=U[v],E=!0;else if(v=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var S;return(S=_e.rgb.exec(v))?{r:S[1],g:S[2],b:S[3]}:(S=_e.rgba.exec(v))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=_e.hsl.exec(v))?{h:S[1],s:S[2],l:S[3]}:(S=_e.hsla.exec(v))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=_e.hsv.exec(v))?{h:S[1],s:S[2],v:S[3]}:(S=_e.hsva.exec(v))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=_e.hex8.exec(v))?{r:Q(S[1]),g:Q(S[2]),b:Q(S[3]),a:oe(S[4]),format:E?"name":"hex8"}:(S=_e.hex6.exec(v))?{r:Q(S[1]),g:Q(S[2]),b:Q(S[3]),format:E?"name":"hex"}:(S=_e.hex4.exec(v))?{r:Q(S[1]+""+S[1]),g:Q(S[2]+""+S[2]),b:Q(S[3]+""+S[3]),a:oe(S[4]+""+S[4]),format:E?"name":"hex8"}:(S=_e.hex3.exec(v))?{r:Q(S[1]+""+S[1]),g:Q(S[2]+""+S[2]),b:Q(S[3]+""+S[3]),format:E?"name":"hex"}:!1}function L(v){var E,S;return v=v||{level:"AA",size:"small"},E=(v.level||"AA").toUpperCase(),S=(v.size||"small").toLowerCase(),E!=="AA"&&E!=="AAA"&&(E="AA"),S!=="small"&&S!=="large"&&(S="small"),{level:E,size:S}}n.exports?n.exports=c:window.tinycolor=c})(Math)})(em);const tm=em.exports;function Ah(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function nm(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ah(Object(t),!0).forEach(function(i){Xc(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ah(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function $l(n){return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$l(n)}function FT(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ch(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function kT(n,e,t){return e&&Ch(n.prototype,e),t&&Ch(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Xc(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zT(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Uo(n,e)}function Bo(n){return Bo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Bo(n)}function Uo(n,e){return Uo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Uo(n,e)}function im(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function To(n,e,t){return im()?To=Reflect.construct.bind():To=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&Uo(c,o.prototype),c},To.apply(null,arguments)}function BT(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function UT(n,e){if(n==null)return{};var t=BT(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function rm(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function VT(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rm(n)}function HT(n){var e=im();return function(){var i=Bo(n),r;if(e){var s=Bo(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return VT(this,r)}}function Ph(n,e){return WT(n)||$T(n,e)||sm(n,e)||XT()}function sn(n){return GT(n)||jT(n)||sm(n)||qT()}function GT(n){if(Array.isArray(n))return ql(n)}function WT(n){if(Array.isArray(n))return n}function jT(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function $T(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function sm(n,e){if(!!n){if(typeof n=="string")return ql(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ql(n,e)}}function ql(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function qT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var YT=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},ZT=function n(e){e.geometry&&e.geometry.dispose(),e.material&&YT(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},om=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),ZT(t)}},KT=["objFilter"];function es(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,s=UT(t,KT);return DT(n,e.children.filter(r),function(o){return e.add(o)},function(o){e.remove(o),om(o)},nm({objBindAttr:"__threeObj"},s))}var po=function(e){return isNaN(e)?parseInt(tm(e).toHex(),16):e},Lh=function(e){return isNaN(e)?tm(e).getAlpha():1},JT=Qp(NT);function Rh(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=JT(e(i))})}function QT(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.nodeFilter,o=s===void 0?function(){return!0}:s,a=r.onLoopError,l=a===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:a,c={};t.forEach(function(p){return c[e(p)]={data:p,out:[],depth:-1,skip:!o(p)}}),i.forEach(function(p){var g=p.source,m=p.target,d=b(g),_=b(m);if(!c.hasOwnProperty(d))throw"Missing source node with id: ".concat(d);if(!c.hasOwnProperty(_))throw"Missing target node with id: ".concat(_);var w=c[d],M=c[_];w.out.push(M);function b(y){return $l(y)==="object"?e(y):y}});var u=[];h(Object.values(c));var f=Object.assign.apply(Object,[{}].concat(sn(Object.entries(c).filter(function(p){var g=Ph(p,2),m=g[1];return!m.skip}).map(function(p){var g=Ph(p,2),m=g[0],d=g[1];return Xc({},m,d.depth)}))));return f;function h(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,d=0,_=p.length;d<_;d++){var w=p[d];if(g.indexOf(w)!==-1){var M=function(){var b=[].concat(sn(g.slice(g.indexOf(w))),[w]).map(function(y){return e(y.data)});return u.some(function(y){return y.length===b.length&&y.every(function(A,O){return A===b[O]})})||(u.push(b),l(b)),"continue"}();if(M==="continue")continue}m>w.depth&&(w.depth=m,h(w.out,[].concat(sn(g),[w]),m+(w.skip?0:1)))}}}var Oe=window.THREE?window.THREE:{Group:br,Mesh:cn,MeshLambertMaterial:q1,Color:$e,BufferGeometry:Dt,BufferAttribute:Qt,Matrix4:tt,Vector3:B,SphereGeometry:sa,CylinderGeometry:ra,TubeGeometry:Fc,ConeGeometry:Nc,Line:R1,LineBasicMaterial:pp,QuadraticBezierCurve3:Ic,CubicBezierCurve3:gp,Box3:qi},Dh={graph:vS,forcelayout:Vc.exports},eE=2,Oh=new Oe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",mo=new Oe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",tE=qc({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(s,o){s.forEach(function(a){delete a[o],delete a["v".concat(o)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),s(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick()),e.graphData.nodes.forEach(function(f){var h=f.__threeObj;if(!!h){var p=t?f:e.layout.getNodePosition(f[e.nodeId]);h.position.x=p.x,h.position.y=p.y||0,h.position.z=p.z||0}});var o=je(e.linkWidth),a=je(e.linkCurvature),l=je(e.linkCurveRotation),c=je(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var h=f.__lineObj;if(!!h){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=p[t?"source":"from"],m=p[t?"target":"to"];if(!(!g||!m||!g.hasOwnProperty("x")||!m.hasOwnProperty("x"))){u(f);var d=c(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?h.children[1]:h,{start:{x:g.x,y:g.y,z:g.z},end:{x:m.x,y:m.y,z:m.z}},f)&&!d)){var _=30,w=f.__curve,M=h.children.length?h.children[0]:h;if(M.type==="Line"){if(w)M.geometry.setFromPoints(w.getPoints(_));else{var b=M.geometry.getAttribute("position");(!b||!b.array||b.array.length!==6)&&M.geometry[Oh]("position",b=new Oe.BufferAttribute(new Float32Array(2*3),3)),b.array[0]=g.x,b.array[1]=g.y||0,b.array[2]=g.z||0,b.array[3]=m.x,b.array[4]=m.y||0,b.array[5]=m.z||0,b.needsUpdate=!0}M.geometry.computeBoundingSphere()}else if(M.type==="Mesh")if(w){M.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(M.position.set(0,0,0),M.rotation.set(0,0,0),M.scale.set(1,1,1));var q=Math.ceil(o(f)*10)/10,ne=q/2,G=new Oe.TubeGeometry(w,_,ne,e.linkResolution,!1);M.geometry.dispose(),M.geometry=G}else{if(!M.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var y=Math.ceil(o(f)*10)/10,A=y/2,O=new Oe.CylinderGeometry(A,A,1,e.linkResolution,1,!1);O[mo](new Oe.Matrix4().makeTranslation(0,1/2,0)),O[mo](new Oe.Matrix4().makeRotationX(Math.PI/2)),M.geometry.dispose(),M.geometry=O}var x=new Oe.Vector3(g.x,g.y||0,g.z||0),C=new Oe.Vector3(m.x,m.y||0,m.z||0),I=x.distanceTo(C);M.position.x=x.x,M.position.y=x.y,M.position.z=x.z,M.scale.z=I,M.parent.localToWorld(C),M.lookAt(C)}}}}});function u(f){var h=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),p=h[t?"source":"from"],g=h[t?"target":"to"];if(!(!p||!g||!p.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var m=a(f);if(!m)f.__curve=null;else{var d=new Oe.Vector3(p.x,p.y||0,p.z||0),_=new Oe.Vector3(g.x,g.y||0,g.z||0),w=d.distanceTo(_),M,b=l(f);if(w>0){var y=g.x-p.x,A=g.y-p.y||0,O=new Oe.Vector3().subVectors(_,d),x=O.clone().multiplyScalar(m).cross(y!==0||A!==0?new Oe.Vector3(0,0,1):new Oe.Vector3(0,1,0)).applyAxisAngle(O.normalize(),b).add(new Oe.Vector3().addVectors(d,_).divideScalar(2));M=new Oe.QuadraticBezierCurve3(d,x,_)}else{var C=m*70,I=-b,q=I+Math.PI/2;M=new Oe.CubicBezierCurve3(d,new Oe.Vector3(C*Math.cos(q),C*Math.sin(q),0).add(d),new Oe.Vector3(C*Math.cos(I),C*Math.sin(I),0).add(d),_)}f.__curve=M}}}}function r(){var o=je(e.linkDirectionalArrowRelPos),a=je(e.linkDirectionalArrowLength),l=je(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(!!u){var f=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),h=f[t?"source":"from"],p=f[t?"target":"to"];if(!(!h||!p||!h.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.sqrt(Math.max(0,l(h)||1))*e.nodeRelSize,m=Math.sqrt(Math.max(0,l(p)||1))*e.nodeRelSize,d=a(c),_=o(c),w=c.__curve?function(x){return c.__curve.getPoint(x)}:function(x){var C=function(q,ne,G,D){return ne[q]+(G[q]-ne[q])*D||0};return{x:C("x",h,p,x),y:C("y",h,p,x),z:C("z",h,p,x)}},M=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(x){return Math.pow((p[x]||0)-(h[x]||0),2)}).reduce(function(x,C){return x+C},0)),b=g+d+(M-g-m-d)*_,y=w(b/M),A=w((b-d)/M);["x","y","z"].forEach(function(x){return u.position[x]=A[x]});var O=To(Oe.Vector3,sn(["x","y","z"].map(function(x){return y[x]})));u.parent.localToWorld(O),u.lookAt(O)}}})}function s(){var o=je(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var l=a.__photonsObj&&a.__photonsObj.children,c=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),f=u[t?"source":"from"],h=u[t?"target":"to"];if(!(!f||!h||!f.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var p=o(a),g=a.__curve?function(d){return a.__curve.getPoint(d)}:function(d){var _=function(M,b,y,A){return b[M]+(y[M]-b[M])*A||0};return{x:_("x",f,h,d),y:_("y",f,h,d),z:_("z",f,h,d)}},m=[].concat(sn(l||[]),sn(c||[]));m.forEach(function(d,_){var w=d.parent.__linkThreeObjType==="singleHopPhotons";if(d.hasOwnProperty("__progressRatio")||(d.__progressRatio=w?0:_/l.length),d.__progressRatio+=p,d.__progressRatio>=1)if(!w)d.__progressRatio=d.__progressRatio%1;else{d.parent.remove(d),om(d);return}var M=d.__progressRatio,b=g(M);["x","y","z"].forEach(function(y){return d.position[y]=b[y]})})}}})}},emitParticle:function(e,t){if(t){if(!t.__singleHopPhotonsObj){var i=new Oe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=je(e.linkDirectionalParticleWidth),s=Math.ceil(r(t)*10)/10/2,o=e.linkDirectionalParticleResolution,a=new Oe.SphereGeometry(s,o,o),l=je(e.linkColor),c=je(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",f=new Oe.Color(po(u)),h=e.linkOpacity*3,p=new Oe.MeshLambertMaterial({color:f,transparent:!0,opacity:h});t.__singleHopPhotonsObj.add(new Oe.Mesh(a,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(s){var o=[];if(s.geometry){s.geometry.computeBoundingBox();var a=new Oe.Box3;a.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),o.push(a)}return o.concat.apply(o,sn((s.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,sn(["x","y","z"].map(function(r){return Xc({},r,[aT(i,function(s){return s.min[r]}),oT(i,function(s){return s.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:dS().force("link",JM()).force("charge",pS()).force("center",nM()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(se){return se.some(function(W){return t.hasOwnProperty(W)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&Rh(e.graphData.nodes,je(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&Rh(e.graphData.links,je(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=je(e.nodeThreeObject),s=je(e.nodeThreeObjectExtend),o=je(e.nodeVal),a=je(e.nodeColor),l=je(e.nodeVisibility),c={},u={};es(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(se){return se.__graphObjType==="node"},createObj:function(se){var W=r(se),j=s(se);W&&e.nodeThreeObject===W&&(W=W.clone());var oe;return W&&!j?oe=W:(oe=new Oe.Mesh,oe.__graphDefaultObj=!0,W&&j&&oe.add(W)),oe.__graphObjType="node",oe},updateObj:function(se,W){if(se.__graphDefaultObj){var j=o(W)||1,oe=Math.cbrt(j)*e.nodeRelSize,_e=e.nodeResolution;(!se.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||se.geometry.parameters.radius!==oe||se.geometry.parameters.widthSegments!==_e)&&(c.hasOwnProperty(j)||(c[j]=new Oe.SphereGeometry(oe,_e,_e)),se.geometry.dispose(),se.geometry=c[j]);var me=a(W),Ae=new Oe.Color(po(me||"#ffffaa")),L=e.nodeOpacity*Lh(me);(se.material.type!=="MeshLambertMaterial"||!se.material.color.equals(Ae)||se.material.opacity!==L)&&(u.hasOwnProperty(me)||(u[me]=new Oe.MeshLambertMaterial({color:Ae,transparent:!0,opacity:L})),se.material.dispose(),se.material=u[me])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var f=je(e.linkThreeObject),h=je(e.linkThreeObjectExtend),p=je(e.linkMaterial),g=je(e.linkVisibility),m=je(e.linkColor),d=je(e.linkWidth),_={},w={},M={},b=e.graphData.links.filter(g);if(es(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(se){return se.__graphObjType==="link"},createObj:function(se){var W=f(se),j=h(se);W&&e.linkThreeObject===W&&(W=W.clone());var oe;if(!W||j){var _e=!!d(se);if(_e)oe=new Oe.Mesh;else{var me=new Oe.BufferGeometry;me[Oh]("position",new Oe.BufferAttribute(new Float32Array(2*3),3)),oe=new Oe.Line(me)}}var Ae;return W?j?(Ae=new Oe.Group,Ae.__graphDefaultObj=!0,Ae.add(oe),Ae.add(W)):Ae=W:(Ae=oe,Ae.__graphDefaultObj=!0),Ae.renderOrder=10,Ae.__graphObjType="link",Ae},updateObj:function(se,W){if(se.__graphDefaultObj){var j=se.children.length?se.children[0]:se,oe=Math.ceil(d(W)*10)/10,_e=!!oe;if(_e){var me=oe/2,Ae=e.linkResolution;if(!j.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||j.geometry.parameters.radiusTop!==me||j.geometry.parameters.radialSegments!==Ae){if(!_.hasOwnProperty(oe)){var L=new Oe.CylinderGeometry(me,me,1,Ae,1,!1);L[mo](new Oe.Matrix4().makeTranslation(0,1/2,0)),L[mo](new Oe.Matrix4().makeRotationX(Math.PI/2)),_[oe]=L}j.geometry.dispose(),j.geometry=_[oe]}}var v=p(W);if(v)j.material=v;else{var E=m(W),S=new Oe.Color(po(E||"#f0f0f0")),z=e.linkOpacity*Lh(E),X=_e?"MeshLambertMaterial":"LineBasicMaterial";if(j.material.type!==X||!j.material.color.equals(S)||j.material.opacity!==z){var Z=_e?w:M;Z.hasOwnProperty(E)||(Z[E]=new Oe[X]({color:S,transparent:z<1,opacity:z,depthWrite:z>=1})),j.material.dispose(),j.material=Z[E]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=je(e.linkDirectionalArrowLength),A=je(e.linkDirectionalArrowColor);es(b.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(se){return se.__linkThreeObjType==="arrow"},createObj:function(){var se=new Oe.Mesh(void 0,new Oe.MeshLambertMaterial({transparent:!0}));return se.__linkThreeObjType="arrow",se},updateObj:function(se,W){var j=y(W),oe=e.linkDirectionalArrowResolution;if(!se.geometry.type.match(/^Cone(Buffer)?Geometry$/)||se.geometry.parameters.height!==j||se.geometry.parameters.radialSegments!==oe){var _e=new Oe.ConeGeometry(j*.25,j,oe);_e.translate(0,j/2,0),_e.rotateX(Math.PI/2),se.geometry.dispose(),se.geometry=_e}se.material.color=new Oe.Color(A(W)||m(W)||"#f0f0f0"),se.material.opacity=e.linkOpacity*3}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var O=je(e.linkDirectionalParticles),x=je(e.linkDirectionalParticleWidth),C=je(e.linkDirectionalParticleColor),I={},q={};es(b.filter(O),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(se){return se.__linkThreeObjType==="photons"},createObj:function(){var se=new Oe.Group;return se.__linkThreeObjType="photons",se},updateObj:function(se,W){var j=Math.round(Math.abs(O(W))),oe=!!se.children.length&&se.children[0],_e=Math.ceil(x(W)*10)/10/2,me=e.linkDirectionalParticleResolution,Ae;oe&&oe.geometry.parameters.radius===_e&&oe.geometry.parameters.widthSegments===me?Ae=oe.geometry:(q.hasOwnProperty(_e)||(q[_e]=new Oe.SphereGeometry(_e,me,me)),Ae=q[_e],oe&&oe.geometry.dispose());var L=C(W)||m(W)||"#f0f0f0",v=new Oe.Color(po(L)),E=e.linkOpacity*3,S;oe&&oe.material.color.equals(v)&&oe.material.opacity===E?S=oe.material:(I.hasOwnProperty(L)||(I[L]=new Oe.MeshLambertMaterial({color:v,transparent:!0,opacity:E})),S=I[L],oe&&oe.material.dispose()),es(sn(new Array(j)).map(function(z,X){return{idx:X}}),se,{idAccessor:function(X){return X.idx},createObj:function(){return new Oe.Mesh(Ae,S)},updateObj:function(X){X.geometry=Ae,X.material=S}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(ce){ce.source=ce[e.linkSource],ce.target=ce[e.linkTarget]});var ne=e.forceEngine!=="ngraph",G;if(ne){(G=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var D=e.d3ForceLayout.force("link");D&&D.id(function(ce){return ce[e.nodeId]}).links(e.graphData.links);var F=e.dagMode&&QT(e.graphData,function(ce){return ce[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,sn(Object.values(F||[]))),re=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*eE*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var K=function(se,W){return function(j){return se?(F[j[e.nodeId]]-U/2)*re*(W?-1:1):void 0}},$=K(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),k=K(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),ee=K(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(ce){ce.fx=$(ce),ce.fy=k(ce),ce.fz=ee(ce)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?mS(function(ce){var se=F[ce[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-se:se)*re}).strength(function(ce){return e.dagNodeFilter(ce)?1:0}):null)}else{var Q=Dh.graph();e.graphData.nodes.forEach(function(ce){Q.addNode(ce[e.nodeId])}),e.graphData.links.forEach(function(ce){Q.addLink(ce.source,ce.target)}),G=Dh.forcelayout(Q,nm({dimensions:e.numDimensions},e.ngraphPhysics)),G.graph=Q}for(var ue=0;ue<e.warmupTicks&&!(ne&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);ue++)G[ne?"tick":"step"]();e.layout=G,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function nE(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){zT(o,r);var s=HT(o);function o(){var a;FT(this,o);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return a=s.call.apply(s,[this].concat(c)),a.__kapsuleInstance=n().apply(void 0,[].concat(sn(t?[rm(a)]:[]),c)),a}return kT(o)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var s,o=(s=this.__kapsuleInstance)[r].apply(s,arguments);return o===this.__kapsuleInstance?this:o}}),i}var iE=window.THREE?window.THREE:{Group:br},am=nE(tE,iE.Group,!0);const ul={type:"change"},fl={type:"start"},hl={type:"end"};class rE extends dn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.target=new B;const s=1e-6,o=new B;let a=1,l=r.NONE,c=r.NONE,u=0,f=0,h=0;const p=new B,g=new xe,m=new xe,d=new B,_=new xe,w=new xe,M=new xe,b=new xe,y=[],A={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const j=i.domElement.getBoundingClientRect(),oe=i.domElement.ownerDocument.documentElement;i.screen.left=j.left+window.pageXOffset-oe.clientLeft,i.screen.top=j.top+window.pageYOffset-oe.clientTop,i.screen.width=j.width,i.screen.height=j.height};const O=function(){const j=new xe;return function(_e,me){return j.set((_e-i.screen.left)/i.screen.width,(me-i.screen.top)/i.screen.height),j}}(),x=function(){const j=new xe;return function(_e,me){return j.set((_e-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-me))/i.screen.width),j}}();this.rotateCamera=function(){const j=new B,oe=new hn,_e=new B,me=new B,Ae=new B,L=new B;return function(){L.set(m.x-g.x,m.y-g.y,0);let E=L.length();E?(p.copy(i.object.position).sub(i.target),_e.copy(p).normalize(),me.copy(i.object.up).normalize(),Ae.crossVectors(me,_e).normalize(),me.setLength(m.y-g.y),Ae.setLength(m.x-g.x),L.copy(me.add(Ae)),j.crossVectors(L,p).normalize(),E*=i.rotateSpeed,oe.setFromAxisAngle(j,E),p.applyQuaternion(oe),i.object.up.applyQuaternion(oe),d.copy(j),h=E):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),oe.setFromAxisAngle(d,h),p.applyQuaternion(oe),i.object.up.applyQuaternion(oe)),g.copy(m)}}(),this.zoomCamera=function(){let j;l===r.TOUCH_ZOOM_PAN?(j=u/f,u=f,i.object.isPerspectiveCamera?p.multiplyScalar(j):i.object.isOrthographicCamera?(i.object.zoom/=j,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(j=1+(w.y-_.y)*i.zoomSpeed,j!==1&&j>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(j):i.object.isOrthographicCamera?(i.object.zoom/=j,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?_.copy(w):_.y+=(w.y-_.y)*this.dynamicDampingFactor)},this.panCamera=function(){const j=new xe,oe=new B,_e=new B;return function(){if(j.copy(b).sub(M),j.lengthSq()){if(i.object.isOrthographicCamera){const Ae=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,L=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;j.x*=Ae,j.y*=L}j.multiplyScalar(p.length()*i.panSpeed),_e.copy(p).cross(i.object.up).setLength(j.x),_e.add(oe.copy(i.object.up).setLength(j.y)),i.object.position.add(_e),i.target.add(_e),i.staticMoving?M.copy(b):M.add(j.subVectors(b,M).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),_.copy(w)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),_.copy(w)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>s&&(i.dispatchEvent(ul),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>s||a!==i.object.zoom)&&(i.dispatchEvent(ul),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(ul),o.copy(i.object.position),a=i.object.zoom};function C(j){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(j.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",q)),ue(j),j.pointerType==="touch"?$(j):F(j))}function I(j){i.enabled!==!1&&(j.pointerType==="touch"?k(j):U(j))}function q(j){i.enabled!==!1&&(j.pointerType==="touch"?ee(j):re(),ce(j),y.length===0&&(i.domElement.releasePointerCapture(j.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",q)))}function ne(j){ce(j)}function G(j){i.enabled!==!1&&(window.removeEventListener("keydown",G),c===r.NONE&&(j.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:j.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:j.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function D(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",G))}function F(j){if(l===r.NONE)switch(j.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(m.copy(x(j.pageX,j.pageY)),g.copy(m)):oe===r.ZOOM&&!i.noZoom?(_.copy(O(j.pageX,j.pageY)),w.copy(_)):oe===r.PAN&&!i.noPan&&(M.copy(O(j.pageX,j.pageY)),b.copy(M)),i.dispatchEvent(fl)}function U(j){const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(g.copy(m),m.copy(x(j.pageX,j.pageY))):oe===r.ZOOM&&!i.noZoom?w.copy(O(j.pageX,j.pageY)):oe===r.PAN&&!i.noPan&&b.copy(O(j.pageX,j.pageY))}function re(){l=r.NONE,i.dispatchEvent(hl)}function K(j){if(i.enabled!==!1&&i.noZoom!==!0){switch(j.preventDefault(),j.deltaMode){case 2:_.y-=j.deltaY*.025;break;case 1:_.y-=j.deltaY*.01;break;default:_.y-=j.deltaY*25e-5;break}i.dispatchEvent(fl),i.dispatchEvent(hl)}}function $(j){switch(se(j),y.length){case 1:l=r.TOUCH_ROTATE,m.copy(x(y[0].pageX,y[0].pageY)),g.copy(m);break;default:l=r.TOUCH_ZOOM_PAN;const oe=y[0].pageX-y[1].pageX,_e=y[0].pageY-y[1].pageY;f=u=Math.sqrt(oe*oe+_e*_e);const me=(y[0].pageX+y[1].pageX)/2,Ae=(y[0].pageY+y[1].pageY)/2;M.copy(O(me,Ae)),b.copy(M);break}i.dispatchEvent(fl)}function k(j){switch(se(j),y.length){case 1:g.copy(m),m.copy(x(j.pageX,j.pageY));break;default:const oe=W(j),_e=j.pageX-oe.x,me=j.pageY-oe.y;f=Math.sqrt(_e*_e+me*me);const Ae=(j.pageX+oe.x)/2,L=(j.pageY+oe.y)/2;b.copy(O(Ae,L));break}}function ee(j){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,m.copy(x(j.pageX,j.pageY)),g.copy(m);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let oe=0;oe<y.length;oe++)if(y[oe].pointerId!==j.pointerId){const _e=A[y[oe].pointerId];m.copy(x(_e.x,_e.y)),g.copy(m);break}break}i.dispatchEvent(hl)}function Q(j){i.enabled!==!1&&j.preventDefault()}function ue(j){y.push(j)}function ce(j){delete A[j.pointerId];for(let oe=0;oe<y.length;oe++)if(y[oe].pointerId==j.pointerId){y.splice(oe,1);return}}function se(j){let oe=A[j.pointerId];oe===void 0&&(oe=new xe,A[j.pointerId]=oe),oe.set(j.pageX,j.pageY)}function W(j){const oe=j.pointerId===y[0].pointerId?y[1]:y[0];return A[oe.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",ne),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",q),window.removeEventListener("keydown",G),window.removeEventListener("keyup",D)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",C),this.domElement.addEventListener("pointercancel",ne),this.domElement.addEventListener("wheel",K,{passive:!1}),window.addEventListener("keydown",G),window.addEventListener("keyup",D),this.handleResize(),this.update()}}const Ih={type:"change"},dl={type:"start"},Nh={type:"end"};class sE extends dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yn.ROTATE,MIDDLE:yn.DOLLY,RIGHT:yn.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",le),this._domElementKeyEvents=N},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ih),i.update(),s=r.NONE},this.update=function(){const N=new B,Y=new hn().setFromUnitVectors(e.up,new B(0,1,0)),Se=Y.clone().invert(),Ce=new B,Te=new hn,Le=2*Math.PI;return function(){const ke=i.object.position;N.copy(ke).sub(i.target),N.applyQuaternion(Y),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&C(O()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let H=i.minAzimuthAngle,Ee=i.maxAzimuthAngle;return isFinite(H)&&isFinite(Ee)&&(H<-Math.PI?H+=Le:H>Math.PI&&(H-=Le),Ee<-Math.PI?Ee+=Le:Ee>Math.PI&&(Ee-=Le),H<=Ee?a.theta=Math.max(H,Math.min(Ee,a.theta)):a.theta=a.theta>(H+Ee)/2?Math.max(H,a.theta):Math.min(Ee,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),N.setFromSpherical(a),N.applyQuaternion(Se),ke.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Ce.distanceToSquared(i.object.position)>o||8*(1-Te.dot(i.object.quaternion))>o?(i.dispatchEvent(Ih),Ce.copy(i.object.position),Te.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",V),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",le)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ul,l=new Ul;let c=1;const u=new B;let f=!1;const h=new xe,p=new xe,g=new xe,m=new xe,d=new xe,_=new xe,w=new xe,M=new xe,b=new xe,y=[],A={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function x(){return Math.pow(.95,i.zoomSpeed)}function C(N){l.theta-=N}function I(N){l.phi-=N}const q=function(){const N=new B;return function(Se,Ce){N.setFromMatrixColumn(Ce,0),N.multiplyScalar(-Se),u.add(N)}}(),ne=function(){const N=new B;return function(Se,Ce){i.screenSpacePanning===!0?N.setFromMatrixColumn(Ce,1):(N.setFromMatrixColumn(Ce,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(Se),u.add(N)}}(),G=function(){const N=new B;return function(Se,Ce){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;N.copy(Le).sub(i.target);let Pe=N.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),q(2*Se*Pe/Te.clientHeight,i.object.matrix),ne(2*Ce*Pe/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(Se*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),ne(Ce*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(N){i.object.isPerspectiveCamera?c/=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(N){i.object.isPerspectiveCamera?c*=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(N){h.set(N.clientX,N.clientY)}function re(N){w.set(N.clientX,N.clientY)}function K(N){m.set(N.clientX,N.clientY)}function $(N){p.set(N.clientX,N.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(p),i.update()}function k(N){M.set(N.clientX,N.clientY),b.subVectors(M,w),b.y>0?D(x()):b.y<0&&F(x()),w.copy(M),i.update()}function ee(N){d.set(N.clientX,N.clientY),_.subVectors(d,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(d),i.update()}function Q(N){N.deltaY<0?F(x()):N.deltaY>0&&D(x()),i.update()}function ue(N){let Y=!1;switch(N.code){case i.keys.UP:G(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:G(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:G(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:G(-i.keyPanSpeed,0),Y=!0;break}Y&&(N.preventDefault(),i.update())}function ce(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);h.set(N,Y)}}function se(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);m.set(N,Y)}}function W(){const N=y[0].pageX-y[1].pageX,Y=y[0].pageY-y[1].pageY,Se=Math.sqrt(N*N+Y*Y);w.set(0,Se)}function j(){i.enableZoom&&W(),i.enablePan&&se()}function oe(){i.enableZoom&&W(),i.enableRotate&&ce()}function _e(N){if(y.length==1)p.set(N.pageX,N.pageY);else{const Se=we(N),Ce=.5*(N.pageX+Se.x),Te=.5*(N.pageY+Se.y);p.set(Ce,Te)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(p)}function me(N){if(y.length===1)d.set(N.pageX,N.pageY);else{const Y=we(N),Se=.5*(N.pageX+Y.x),Ce=.5*(N.pageY+Y.y);d.set(Se,Ce)}_.subVectors(d,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(d)}function Ae(N){const Y=we(N),Se=N.pageX-Y.x,Ce=N.pageY-Y.y,Te=Math.sqrt(Se*Se+Ce*Ce);M.set(0,Te),b.set(0,Math.pow(M.y/w.y,i.zoomSpeed)),D(b.y),w.copy(M)}function L(N){i.enableZoom&&Ae(N),i.enablePan&&me(N)}function v(N){i.enableZoom&&Ae(N),i.enableRotate&&_e(N)}function E(N){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",z)),ae(N),N.pointerType==="touch"?P(N):Z(N))}function S(N){i.enabled!==!1&&(N.pointerType==="touch"?T(N):ie(N))}function z(N){he(N),y.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",z)),i.dispatchEvent(Nh),s=r.NONE}function X(N){he(N)}function Z(N){let Y;switch(N.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case yn.DOLLY:if(i.enableZoom===!1)return;re(N),s=r.DOLLY;break;case yn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;K(N),s=r.PAN}else{if(i.enableRotate===!1)return;U(N),s=r.ROTATE}break;case yn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;U(N),s=r.ROTATE}else{if(i.enablePan===!1)return;K(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(dl)}function ie(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;$(N);break;case r.DOLLY:if(i.enableZoom===!1)return;k(N);break;case r.PAN:if(i.enablePan===!1)return;ee(N);break}}function pe(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(dl),Q(N),i.dispatchEvent(Nh))}function le(N){i.enabled===!1||i.enablePan===!1||ue(N)}function P(N){switch(ve(N),y.length){case 1:switch(i.touches.ONE){case Ji.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Ji.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ji.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(),s=r.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(dl)}function T(N){switch(ve(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;_e(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;v(N),i.update();break;default:s=r.NONE}}function V(N){i.enabled!==!1&&N.preventDefault()}function ae(N){y.push(N)}function he(N){delete A[N.pointerId];for(let Y=0;Y<y.length;Y++)if(y[Y].pointerId==N.pointerId){y.splice(Y,1);return}}function ve(N){let Y=A[N.pointerId];Y===void 0&&(Y=new xe,A[N.pointerId]=Y),Y.set(N.pageX,N.pageY)}function we(N){const Y=N.pointerId===y[0].pointerId?y[1]:y[0];return A[Y.pointerId]}i.domElement.addEventListener("contextmenu",V),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}const oE={type:"change"};class aE extends dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,s=new hn,o=new B;this.tmpQuaternion=new hn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new B(0,0,0),this.rotationVector=new B(0,0,0),this.keydown=function(h){if(!h.altKey){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(h){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(h){if(this.dragToLook)this.status++;else{switch(h.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(h){if(!this.dragToLook||this.status>0){const p=this.getContainerDimensions(),g=p.size[0]/2,m=p.size[1]/2;this.moveState.yawLeft=-(h.pageX-p.offset[0]-g)/g,this.moveState.pitchDown=(h.pageY-p.offset[1]-m)/m,this.updateRotationVector()}},this.pointerup=function(h){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(h.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(h){const p=h*i.movementSpeed,g=h*i.rollSpeed;i.object.translateX(i.moveVector.x*p),i.object.translateY(i.moveVector.y*p),i.object.translateZ(i.moveVector.z*p),i.tmpQuaternion.set(i.rotationVector.x*g,i.rotationVector.y*g,i.rotationVector.z*g,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(o.distanceToSquared(i.object.position)>r||8*(1-s.dot(i.object.quaternion))>r)&&(i.dispatchEvent(oE),s.copy(i.object.quaternion),o.copy(i.object.position))},this.updateMovementVector=function(){const h=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-h+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Fh),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",a),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",f)};const a=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),f=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Fh),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",a),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",f),this.updateMovementVector(),this.updateRotationVector()}}function Fh(n){n.preventDefault()}const kh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class aa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const lE=new na(-1,1,1,-1,0,1),Yc=new Dt;Yc.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3));Yc.setAttribute("uv",new at([0,2,0,0,2,0],2));class cE{constructor(e){this._mesh=new cn(Yc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zh extends aa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ip.clone(e.uniforms),this.material=new Hn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Bh extends aa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class uE extends aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fE{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new xe);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],kh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),zh===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new zh(kh),this.clock=new xp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bh!==void 0&&(o instanceof Bh?i=!0:o instanceof uE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new na(-1,1,1,-1,0,1);const lm=new Dt;lm.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3));lm.setAttribute("uv",new at([0,2,0,0,2,0],2));class hE extends aa{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}function Xl(){return Xl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Xl.apply(this,arguments)}function dE(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ss(n,e){return Ss=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ss(n,e)}function pE(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Ss(n,e)}function Yl(n){return Yl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Yl(n)}function mE(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function gE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Eo(n,e,t){return gE()?Eo=Reflect.construct.bind():Eo=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&Ss(c,o.prototype),c},Eo.apply(null,arguments)}function Zl(n){var e=typeof Map=="function"?new Map:void 0;return Zl=function(i){if(i===null||!mE(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Eo(i,arguments,Yl(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ss(r,i)},Zl(n)}var wr=function(n){pE(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,dE(i)}return e}(Zl(Error));function pl(n){return Math.round(n*255)}function _E(n,e,t){return pl(n)+","+pl(e)+","+pl(t)}function Uh(n,e,t,i){if(i===void 0&&(i=_E),e===0)return i(t,t,t);var r=(n%360+360)%360/60,s=(1-Math.abs(2*t-1))*e,o=s*(1-Math.abs(r%2-1)),a=0,l=0,c=0;r>=0&&r<1?(a=s,l=o):r>=1&&r<2?(a=o,l=s):r>=2&&r<3?(l=s,c=o):r>=3&&r<4?(l=o,c=s):r>=4&&r<5?(a=o,c=s):r>=5&&r<6&&(a=s,c=o);var u=t-s/2,f=a+u,h=l+u,p=c+u;return i(f,h,p)}var Vh={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function vE(n){if(typeof n!="string")return n;var e=n.toLowerCase();return Vh[e]?"#"+Vh[e]:n}var yE=/^#[a-fA-F0-9]{6}$/,xE=/^#[a-fA-F0-9]{8}$/,bE=/^#[a-fA-F0-9]{3}$/,wE=/^#[a-fA-F0-9]{4}$/,ml=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ME=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,SE=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,TE=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Zc(n){if(typeof n!="string")throw new wr(3);var e=vE(n);if(e.match(yE))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(xE)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(bE))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(wE)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=ml.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var s=ME.exec(e.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var o=SE.exec(e);if(o){var a=parseInt(""+o[1],10),l=parseInt(""+o[2],10)/100,c=parseInt(""+o[3],10)/100,u="rgb("+Uh(a,l,c)+")",f=ml.exec(u);if(!f)throw new wr(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var h=TE.exec(e.substring(0,50));if(h){var p=parseInt(""+h[1],10),g=parseInt(""+h[2],10)/100,m=parseInt(""+h[3],10)/100,d="rgb("+Uh(p,g,m)+")",_=ml.exec(d);if(!_)throw new wr(4,e,d);return{red:parseInt(""+_[1],10),green:parseInt(""+_[2],10),blue:parseInt(""+_[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new wr(5)}var EE=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Hh=EE;function vr(n){var e=n.toString(16);return e.length===1?"0"+e:e}function Gh(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return Hh("#"+vr(n)+vr(e)+vr(t));if(typeof n=="object"&&e===void 0&&t===void 0)return Hh("#"+vr(n.red)+vr(n.green)+vr(n.blue));throw new wr(6)}function AE(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Zc(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?Gh(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Gh(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new wr(7)}function cm(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):cm(n,e,r)}}function CE(n){return cm(n,n.length,[])}function PE(n,e,t){return Math.max(n,Math.min(e,t))}function LE(n,e){if(e==="transparent")return e;var t=Zc(e),i=typeof t.alpha=="number"?t.alpha:1,r=Xl({},t,{alpha:PE(0,1,(i*100+parseFloat(n)*100)/100)});return AE(r)}var RE=CE(LE),DE=RE,hs={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-hs.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?hs.Bounce.In(n*2)*.5:hs.Bounce.Out(n*2-1)*.5+.5}}},ls;typeof self>"u"&&typeof process<"u"&&process.hrtime?ls=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?ls=self.performance.now.bind(self.performance):Date.now!==void 0?ls=Date.now:ls=function(){return new Date().getTime()};var Ri=ls,um=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=Ri()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Mr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Mr.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Mr.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Mr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Mr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},Kc=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),fm=new um,OE=function(){function n(e,t){t===void 0&&(t=fm),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=hs.Linear.None,this._interpolationFunction=Mr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Kc.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?Ri()+parseFloat(e):e:Ri(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var f in o)t[s][f]=o[f];r[s]=a?[]:{},this._setupProperties(o,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=Ri()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=Ri()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=Ri()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),IE="18.6.4",NE=Kc.nextId,Tn=fm,FE=Tn.getAll.bind(Tn),kE=Tn.removeAll.bind(Tn),zE=Tn.add.bind(Tn),BE=Tn.remove.bind(Tn),UE=Tn.update.bind(Tn),Di={Easing:hs,Group:um,Interpolation:Mr,now:Ri,Sequence:Kc,nextId:NE,Tween:OE,VERSION:IE,getAll:FE,removeAll:kE,add:zE,remove:BE,update:UE};function VE(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var HE=`.scene-nav-info {
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
}`;VE(HE);function GE(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function WE(n,e){return $E(n)||XE(n,e)||hm(n,e)||ZE()}function ts(n){return jE(n)||qE(n)||hm(n)||YE()}function jE(n){if(Array.isArray(n))return Kl(n)}function $E(n){if(Array.isArray(n))return n}function qE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function XE(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function hm(n,e){if(!!n){if(typeof n=="string")return Kl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Kl(n,e)}}function Kl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function YE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZE(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var nt=window.THREE?window.THREE:{WebGLRenderer:fp,Scene:P1,PerspectiveCamera:Yt,Raycaster:bp,TextureLoader:vp,Vector2:xe,Vector3:B,Box3:qi,Color:$e,Mesh:cn,SphereGeometry:sa,MeshBasicMaterial:Cc,BackSide:Vt,EventDispatcher:dn,MOUSE:yn,Quaternion:hn,Spherical:Ul,Clock:xp},dm=qc({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(s){return s.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(s){return e.hoverFilter(s.object)}).sort(function(s,o){return e.hoverOrderComparator(s.object,o.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&je(e.tooltipContent)(t)||"",e.hoverObj=t)}Di.update()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var s=e.camera;if(t&&e.initialised){var o=t,a=i||{x:0,y:0,z:0};if(!r)u(o),f(a);else{var l=Object.assign({},s.position),c=h();new Di.Tween(l).to(o,r).easing(Di.Easing.Quadratic.Out).onUpdate(u).start(),new Di.Tween(c).to(a,r/3).easing(Di.Easing.Quadratic.Out).onUpdate(f).start()}return this}return Object.assign({},s.position,{lookAt:h()});function u(p){var g=p.x,m=p.y,d=p.z;g!==void 0&&(s.position.x=g),m!==void 0&&(s.position.y=m),d!==void 0&&(s.position.z=d)}function f(p){var g=new nt.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:s.lookAt(g)}function h(){return Object.assign(new nt.Vector3(0,0,-1e3).applyQuaternion(s.quaternion).add(s.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,s=new Array(r>3?r-3:0),o=3;o<r;o++)s[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,s),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,s=e.camera;if(t){var o=new nt.Vector3(0,0,0),a=Math.max.apply(Math,ts(Object.entries(t).map(function(p){var g=WE(p,2),m=g[0],d=g[1];return Math.max.apply(Math,ts(d.map(function(_){return Math.abs(o[m]-_)})))})))*2,l=(1-r*2/e.height)*s.fov,c=a/Math.atan(l*Math.PI/180),u=c/s.aspect,f=Math.max(c,u);if(f>0){var h=o.clone().sub(s.position).normalize().multiplyScalar(-f);this.cameraPosition(h,o,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new nt.Box3(new nt.Vector3(0,0,0),new nt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(s){return i.expandByObject(s)}),Object.assign.apply(Object,ts(["x","y","z"].map(function(s){return GE({},s,[i.min[s],i.max[s]])})))):null},getScreenCoords:function(e,t,i,r){var s=new nt.Vector3(t,i,r);return s.project(this.camera()),{x:(s.x+1)*e.width/2,y:-(s.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=new nt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new nt.Raycaster;return o.setFromCamera(s,e.camera),Object.assign({},o.ray.at(r,new nt.Vector3))},intersectingObjects:function(e,t,i){var r=new nt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new nt.Raycaster;return s.params.Line.threshold=e.lineHoverPrecision,s.setFromCamera(r,e.camera),s.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new nt.Scene,camera:new nt.PerspectiveCamera,clock:new nt.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,s=r===void 0?"trackball":r,o=i.rendererConfig,a=o===void 0?{}:o,l=i.extraRenderers,c=l===void 0?[]:l,u=i.waitForLoadComplete,f=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[s]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new nt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return t.container.addEventListener(h,function(p){if(h==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(d){return Math.abs(d)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=m(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function m(d){var _=d.getBoundingClientRect(),w=window.pageXOffset||document.documentElement.scrollLeft,M=window.pageYOffset||document.documentElement.scrollTop;return{top:_.top+M,left:_.left+w}}},{passive:!0})}),t.container.addEventListener("pointerup",function(h){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&t.onClick(t.hoverObj||null,h,t.intersectionPoint),h.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,h,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(h){t.onRightClick&&h.preventDefault()}),t.renderer=new nt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",t.container.appendChild(h.domElement)}),t.postProcessingComposer=new fE(t.renderer),t.postProcessingComposer.addPass(new hE(t.scene,t.camera)),t.controls=new{trackball:rE,orbit:sE,fly:aE}[s](t.camera,t.renderer.domElement),s==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(s==="trackball"||s==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(ts(t.extraRenderers)).forEach(function(h){return h.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new nt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!f,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(ts(e.extraRenderers)).forEach(function(s){return s.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new nt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Zc(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new nt.Color(DE(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new nt.TextureLoader().load(e.backgroundImageUrl,function(s){e.skysphere.material=new nt.MeshBasicMaterial({map:s,side:nt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(s){return e.scene.remove(s)}),e.objects.forEach(function(s){return e.scene.add(s)}));function r(){e.loadComplete=e.scene.visible=!0}}});function KE(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var JE=`.graph-info-msg {
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
}`;KE(JE);function Wh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function go(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Wh(Object(t),!0).forEach(function(i){Rs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Wh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Rs(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function la(n){return QE(n)||eA(n)||tA(n)||nA()}function QE(n){if(Array.isArray(n))return Jl(n)}function eA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function tA(n,e){if(!!n){if(typeof n=="string")return Jl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Jl(n,e)}}function Jl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function nA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pm(n,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(o,a){a[n][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(s){for(var o=s[n],a=arguments.length,l=new Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];var u=o[r].apply(o,l);return u===o?this:u}}}}var jh=window.THREE?window.THREE:{AmbientLight:eM,DirectionalLight:Q1,Vector3:B},iA=170,mm=pm("forceGraph",am),rA=Object.assign.apply(Object,la(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Rs({},n,mm.linkProp(n))}))),sA=Object.assign.apply(Object,la(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Rs({},n,mm.linkMethod(n))}))),Ao=pm("renderObjs",dm),oA=Object.assign.apply(Object,la(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Rs({},n,Ao.linkProp(n))}))),aA=Object.assign.apply(Object,la(["cameraPosition","postProcessingComposer"].map(function(n){return Rs({},n,Ao.linkMethod(n))})).concat([{graph2ScreenCoords:Ao.linkMethod("getScreenCoords"),screen2GraphCoords:Ao.linkMethod("getSceneCoords")}])),lA=qc({props:go(go({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e)},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},rA),oA),methods:go(go({zoomToFit:function(e,t,i){for(var r,s=arguments.length,o=new Array(s>3?s-3:0),a=3;a<s;a++)o[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,o),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},sA),aA),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new am,renderObjs:dm({controlType:t,rendererConfig:i,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),s=t.renderObjs.renderer(),o=t.renderObjs.controls();o.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*iA)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new tM(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,s.domElement);c.addEventListener("dragstart",function(u){o.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var f=On(u.object).__data;!f.__initialFixedPos&&(f.__initialFixedPos={fx:f.fx,fy:f.fy,fz:f.fz}),!f.__initialPos&&(f.__initialPos={x:f.x,y:f.y,z:f.z}),["x","y","z"].forEach(function(h){return f["f".concat(h)]=f[h]}),s.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var f=On(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var h=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;f.position.add(g.clone().sub(p)),p.copy(g),g.copy(h)}var m=f.__data,d=f.position,_={x:d.x-m.x,y:d.y-m.y,z:d.z-m.z};["x","y","z"].forEach(function(w){return m["f".concat(w)]=m[w]=d[w]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),m.__dragged=!0,t.onNodeDrag(m,_)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var f=On(u.object).__data;f.__disposeControlsAfterDrag&&(c.dispose(),delete f.__disposeControlsAfterDrag);var h=f.__initialFixedPos,p=f.__initialPos,g={x:p.x-f.x,y:p.y-f.y,z:p.z-f.z};h&&(["x","y","z"].forEach(function(m){var d="f".concat(m);h[d]===void 0&&delete f[d]}),delete f.__initialFixedPos,delete f.__initialPos,f.__dragged&&(delete f.__dragged,t.onNodeDragEnd(f,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(o.enabled=!0,o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),s.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new jh.AmbientLight(12303291),new jh.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=On(l);if(!u)return 1;var f=On(c);if(!f)return-1;var h=function(g){return g.__graphObjType==="node"};return h(f)-h(u)}).tooltipContent(function(l){var c=On(l);return c&&je(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=On(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,f=t.hoverObj?t.hoverObj.__data:null,h=c?c.__graphObjType:null,p=c?c.__data:null;if(u&&u!==h){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,f)}if(h){var m=t["on".concat(h==="node"?"Node":"Link","Hover")];m&&m(p,u===h?f:null)}s.domElement.classList[c&&t["on".concat(h==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=On(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];f&&f(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=On(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];f&&f(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function On(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function cA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function $h(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function uA(n,e,t){return e&&$h(n.prototype,e),t&&$h(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function fA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ql(n,e)}function Vo(n){return Vo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Vo(n)}function Ql(n,e){return Ql=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},Ql(n,e)}function hA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dA(n)}function mA(n){var e=hA();return function(){var i=Vo(n),r;if(e){var s=Vo(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return pA(this,r)}}function qh(n,e){return _A(n)||yA(n,e)||gm(n,e)||bA()}function _o(n){return gA(n)||vA(n)||gm(n)||xA()}function gA(n){if(Array.isArray(n))return ec(n)}function _A(n){if(Array.isArray(n))return n}function vA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function gm(n,e){if(!!n){if(typeof n=="string")return ec(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ec(n,e)}}function ec(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function xA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ns=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:Ut,Sprite:dp,SpriteMaterial:Dc,Texture:Gt},wA=function(n){fA(t,n);var e=mA(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return cA(this,t),i=e.call(this,new ns.SpriteMaterial),i._text="".concat(r),i._textHeight=s,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="Arial",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return uA(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,s=this._canvas,o=s.getContext("2d"),a=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=a.map(function(x){return x*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(x){return x*r.fontSize*.1}),f=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],h=f.map(function(x){return x*r.fontSize*.1}),p=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=g;var m=Math.max.apply(Math,_o(p.map(function(x){return o.measureText(x).width}))),d=this.fontSize*p.length;if(s.width=m+l[0]*2+h[0]*2,s.height=d+l[1]*2+h[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,l[0]){var _=l[0]/2;o.lineWidth=l[0],o.beginPath(),o.moveTo(_,u[0]),o.lineTo(_,s.height-u[3]),o.moveTo(s.width-_,u[1]),o.lineTo(s.width-_,s.height-u[2]),o.stroke()}if(l[1]){var w=l[1]/2;o.lineWidth=l[1],o.beginPath(),o.moveTo(Math.max(l[0],u[0]),w),o.lineTo(s.width-Math.max(l[0],u[1]),w),o.moveTo(Math.max(l[0],u[3]),s.height-w),o.lineTo(s.width-Math.max(l[0],u[2]),s.height-w),o.stroke()}if(this.borderRadius){var M=Math.max.apply(Math,_o(l)),b=M/2;o.lineWidth=M,o.beginPath(),[!!u[0]&&[u[0],b,b,u[0]],!!u[1]&&[s.width-u[1],s.width-b,b,u[1]],!!u[2]&&[s.width-u[2],s.width-b,s.height-b,s.height-u[2]],!!u[3]&&[u[3],b,s.height-b,s.height-u[3]]].filter(function(x){return x}).forEach(function(x){var C=qh(x,4),I=C[0],q=C[1],ne=C[2],G=C[3];o.moveTo(I,ne),o.quadraticCurveTo(q,ne,q,G)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(l[0],u[0]),[[l[0],u[0],s.width-u[1],l[1],l[1],l[1]],[s.width-l[0],s.width-l[0],s.width-l[0],l[1],u[1],s.height-u[2]],[s.width-l[0],s.width-u[2],u[3],s.height-l[1],s.height-l[1],s.height-l[1]],[l[0],l[0],l[0],s.height-l[1],s.height-u[3],u[0]]].forEach(function(x){var C=qh(x,6),I=C[0],q=C[1],ne=C[2],G=C[3],D=C[4],F=C[5];o.quadraticCurveTo(I,G,q,D),o.lineTo(ne,F)}),o.closePath(),o.fill()):o.fillRect(l[0],l[1],s.width-l[0]*2,s.height-l[1]*2)),o.translate.apply(o,_o(l)),o.translate.apply(o,_o(h)),o.font=g,o.fillStyle=this.color,o.textBaseline="bottom";var y=this.strokeWidth>0;y&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),p.forEach(function(x,C){var I=(m-o.measureText(x).width)/2,q=(C+1)*r.fontSize;y&&o.strokeText(x,I,q),o.fillText(x,I,q)}),this.material.map&&this.material.map.dispose();var A=this.material.map=new ns.Texture(s);A.minFilter=ns.LinearFilter,A.needsUpdate=!0;var O=this.textHeight*p.length+a[1]*2+f[1]*2;this.scale.set(O*s.width/s.height,O,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return ns.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(ns.Sprite);const MA={name:"MainPage",components:{UserInfo:mv,ArtistInfo:Fv},data(){return{loading:null,error:null,me:null,nodes:[],links:[],genres:[],genreToSortBy:null,graph:null,graphType:"medium_term",nodeType:"dot",colorByPopularity:!1,currentArtist:null}},async mounted(){localStorage.getItem("userToken")!=null&&(bv().then(n=>{this.me=n}).catch(n=>{this.error=n}),await this.buildGraph())},destroyed(){window.removeEventListener("resize",this.resizeGraph)},methods:{logout(){$i()},async buildGraph(){this.graph=null,document.getElementById("graph").innerHTML=null,this.currentArtist=null,this.genreToSortBy=null,this.graphType=="following"?(this.loading="Loading... Getting the Users You Follow",this.nodes=await yv().catch(t=>{this.error=t})):this.graphType.includes("_term")&&(this.loading="Loading... Getting Your Top Items",this.nodes=await Sv(this.graphType).catch(t=>{this.error=t})),this.genres=this.buildGenreList(this.nodes),this.loading="Loading... Building Links",this.links=await wv(this.nodes),this.loading=null,this.graph=lA();let n=this.$refs.graph.clientWidth,e=this.$refs.graph.clientHeight;this.graph(document.getElementById("graph")).graphData({nodes:this.nodes,links:this.links}).showNavInfo(!0).width(n).height(e).enableNodeDrag(!1).backgroundColor("#00000000").linkWidth(2).nodeRelSize(7).nodeLabel(t=>t.name).onNodeHover(t=>{t&&(this.currentArtist=t)}),this.updateNodeType(),this.updateNodeColor(),window.onresize=this.resizeGraph},resizeGraph(){let n=document.getElementById("content").clientWidth,e=document.getElementById("content").clientHeight;this.graph.width(n),this.graph.height(e)},updateNodeType(){this.nodeType=="dot"?(this.graph.nodeThreeObject(n=>{}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="image"?(this.graph.nodeThreeObject(n=>{let e=new vp().load(n.img),t=new Dc({map:e}),i=new dp(t);return i.scale.set(25,25),i}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="text"&&(this.graph.nodeThreeObject(n=>{const e=new wA(n.name);return e.color="#ffffff",e.borderColor="#002b36",e.backgroundColor="#002b36",e.borderWidth=4,e.borderRadius=4,e.textHeight=8,e}),this.graph.nodeLabel(""))},updateNodeColor(){this.graph.nodeColor(n=>{if(this.colorByPopularity){let e=n.popularity;return`hsl(${e/100*360},${e}%,50%)`}else return"#ffffff"})},buildGenreList(n){let e={};n.forEach(function(i){i.genres.forEach(function(r){e[r]?e[r]+=1:e[r]=1})});let t=[];for(const i in e)e[i]>2&&t.push(i);return t},updateGenreSort(){if(this.genreToSortBy=="null"||this.genreToSortBy==null||!this.genreToSortBy){console.log("got null, going back to normal"),this.graph.graphData({nodes:this.nodes,links:this.links});return}else{let n=this.genreToSortBy,e=[],t=[];this.nodes.forEach(function(r){r.genres.includes(n)&&(e.push(r),t.push(r.id))});let i=[];this.links.forEach(function(r){t.includes(r.source.id)&&t.includes(r.target.id)&&i.push(r)}),this.graph.graphData({nodes:e,links:i})}},avgPopularity(){let n=0,e=0;this.nodes.forEach(function(i){n+=i.popularity,e++});let t=n/e;return Math.round(t)}}},yt=n=>(Tg("data-v-a207399f"),n=n(),Eg(),n),SA={class:"flex bg-base03 text-base0 grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-1 p-3 md:p-4 lg:p-6 xl:p-10 gap-3 md:gap-4 lg:gap-6 xl:gap-10"},TA={class:"bg-base01 gap-0.5 col-span-1 md:col-span-4 row-span-4 md:row-span-1 shadow-md flex flex-col rounded-lg"},EA={class:"grow-0 gap-0.5 w-full h-8 md:h-10 lg:h-12 grid grid-cols-2 md:grid-cols-3 text-sm md:text-md bg-transparent"},AA=yt(()=>De("option",{value:"following"},"Artists You Follow",-1)),CA=yt(()=>De("option",{value:"short_term"},"Top Artists of the Month",-1)),PA=yt(()=>De("option",{value:"medium_term"},"Top Artists of the Year",-1)),LA=yt(()=>De("option",{value:"long_term"},"Top Artists of All Time",-1)),RA=[AA,CA,PA,LA],DA=yt(()=>De("option",{value:"dot"},"View as Dots",-1)),OA=yt(()=>De("option",{value:"image"},"View as Images",-1)),IA=yt(()=>De("option",{value:"text"},"View as Text",-1)),NA=[DA,OA,IA],FA=yt(()=>De("option",{value:"null"},"All Genres",-1)),kA=["value"],zA={id:"content",class:"grow bg-base02 md:rounded-br-md md:rounded-bl-md text-center flex"},BA={ref:"graph",id:"graph",class:"grow select-none"},UA=yt(()=>De("option",{value:"following"},"Artists You Follow",-1)),VA=yt(()=>De("option",{value:"short_term"},"Top Artists of the past Month",-1)),HA=yt(()=>De("option",{value:"medium_term"},"Top Artists of the past Year",-1)),GA=yt(()=>De("option",{value:"long_term"},"Top Artists of All Time",-1)),WA=[UA,VA,HA,GA],jA={class:"bg-base02 rounded-md flex flex-col col-span-1 row-span-2 md:row-span-1 md:col-span-1 shadow-md space-y-2 p-2"},$A={key:0,class:"italic text-sm grow"},qA={key:1,class:"font-bold text-sm text-red grow"},XA={key:2,class:"grow gap-2 rounded-md grid grid-cols-2 md:flex md:flex-col overflow-y-auto"},YA={class:"bg-base03 rounded-md p-2 space-y-2 rounded-md shadow-md overflow-y-auto"},ZA={class:"text-sm md:text-base text-center font-bold mx-1 mb-2"},KA={key:1,class:"space-y-2 select-none flex flex-col"},JA={for:"toggleB",class:"flex items-center cursor-pointer bg-base02 hover:bg-base02-tint py-1 px-2 rounded-md shadow-md"},QA={class:"relative"},e2=yt(()=>De("div",{class:"block bg-base03 w-10 h-6 rounded-full"},null,-1)),t2=yt(()=>De("div",{class:"dot absolute left-1 top-1 bg-[#1f4a54] w-4 h-4 rounded-full transition"},null,-1)),n2=yt(()=>De("div",{class:"ml-3 font-semibold text-xs md:text-base"}," Color by Popularity ",-1)),i2={key:0,class:"inline-grid grid-cols-2 px-3 py-1 text-xs md:text-base text-[#ffffff] rounded-md shadow-md bg-gradient-to-r from-[#15803d] via-[#7e22ce] to-[#be185d]"},r2=yt(()=>De("p",{class:"text-left"},"Less Popular",-1)),s2=yt(()=>De("p",{class:"text-right"},"More Popular",-1)),o2=[r2,s2];function a2(n,e,t,i,r,s){const o=Ro("UserInfo"),a=Ro("ArtistInfo");return ut(),Pt("div",SA,[De("div",TA,[De("div",EA,[Wr(De("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.graphType=l),onChange:e[1]||(e[1]=l=>s.buildGraph()),name:"graphType",class:"filter hidden md:inline-flex rounded-tl-md"},RA,544),[[Bs,r.graphType]]),Wr(De("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.nodeType=l),onChange:e[3]||(e[3]=l=>s.updateNodeType()),class:"filter rounded-tl-md md:rounded-none"},NA,544),[[Bs,r.nodeType]]),Wr(De("select",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.genreToSortBy=l),onChange:e[5]||(e[5]=l=>s.updateGenreSort()),class:"filter rounded-tr-md"},[FA,(ut(!0),Pt(Xt,null,Pd(r.genres,l=>(ut(),Pt("option",{key:l,value:l}," Only "+ai(l.charAt(0).toUpperCase()+l.slice(1)),9,kA))),128))],544),[[Bs,r.genreToSortBy]])]),De("div",zA,[De("div",BA,null,512)]),Wr(De("select",{"onUpdate:modelValue":e[6]||(e[6]=l=>r.graphType=l),onChange:e[7]||(e[7]=l=>s.buildGraph()),class:"grow-0 filter md:hidden w-full h-8 rounded-br-md rounded-bl-md"},WA,544),[[Bs,r.graphType]])]),De("div",jA,[r.loading?(ut(),Pt("p",$A,ai(r.loading),1)):ri("",!0),r.error?(ut(),Pt("p",qA,ai(r.error),1)):ri("",!0),r.graph?(ut(),Pt("div",XA,[De("div",YA,[De("p",ZA," Average Artist Popularity: "+ai(s.avgPopularity())+"% ",1),r.me?(ut(),vs(o,{key:0,me:r.me},null,8,["me"])):ri("",!0),r.graph&&r.nodeType=="dot"?(ut(),Pt("div",KA,[De("label",JA,[De("div",QA,[Wr(De("input",{type:"checkbox",id:"toggleB","onUpdate:modelValue":e[8]||(e[8]=l=>r.colorByPopularity=l),onChange:e[9]||(e[9]=(...l)=>s.updateNodeColor&&s.updateNodeColor(...l)),class:"sr-only"},null,544),[[Y_,r.colorByPopularity]]),e2,t2]),n2]),r.colorByPopularity?(ut(),Pt("div",i2,o2)):ri("",!0)])):ri("",!0)]),r.currentArtist?(ut(),vs(a,{key:0,artist:r.currentArtist,class:"rounded-md shadow-md"},null,8,["artist"])):ri("",!0)])):ri("",!0),De("button",{onClick:e[10]||(e[10]=(...l)=>s.logout&&s.logout(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base03 space-x-3 font-bold w-full hover:shadow-lg"}," Logout ")])])}const l2=As(MA,[["render",a2],["__scopeId","data-v-a207399f"]]),c2={name:"App",components:{LoginPage:cv,MainPage:l2},data(){return{userToken:null}},created(){if(localStorage.getItem("lastLoggedIn")!=null){let e=Date.parse(localStorage.getItem("lastLoggedIn")),t=new Date,i=Math.abs(t-e),r=Math.floor(i/1e3/60);console.log(`Time since last login: ${r} minutes`),r>=60&&(localStorage.removeItem("lastLoggedIn"),$i())}let n=window.location.hash.split("&")[0].split("=")[1];console.log(`Url Hash: ${n}`),n?(this.userToken=n,localStorage.setItem("userToken",n),localStorage.setItem("lastLoggedIn",new Date().toISOString())):this.userToken=localStorage.getItem("userToken"),console.log(`Temporary User Token: ${this.userToken}`)}},u2={class:"w-screen h-screen flex"};function f2(n,e,t,i,r,s){const o=Ro("MainPage"),a=Ro("LoginPage");return ut(),Pt("div",u2,[r.userToken?(ut(),vs(o,{key:0,class:"grow"})):(ut(),vs(a,{key:1,class:"grow"}))])}const h2=As(c2,[["render",f2]]);J_(h2).mount("#app")});export default d2();
