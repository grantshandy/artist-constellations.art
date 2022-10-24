var Lg=Object.defineProperty;var Rg=(n,e,t)=>e in n?Lg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Dg=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Da=(n,e,t)=>(Rg(n,typeof e!="symbol"?e+"":e,t),t),Ru=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var ti=(n,e,t)=>(Ru(n,e,"read from private field"),t?t.call(n):e.get(n)),Xs=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Dn=(n,e,t,i)=>(Ru(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),Oa=(n,e,t,i)=>({set _(r){Dn(n,e,r,t)},get _(){return ti(n,e,i)}});var N3=Dg(Bi=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ac(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ig=Ac(Og);function kd(n){return!!n||n===""}function Cc(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=wt(i)?kg(i):Cc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(wt(n))return n;if(nt(n))return n}}const Ng=/;(?![^(]*\))/g,Fg=/:(.+)/;function kg(n){const e={};return n.split(Ng).forEach(t=>{if(t){const i=t.split(Fg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pc(n){let e="";if(wt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=Pc(n[t]);i&&(e+=i+" ")}else if(nt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function zg(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=zs(n[i],e[i]);return t}function zs(n,e){if(n===e)return!0;let t=Du(n),i=Du(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Es(n),i=Es(e),t||i)return n===e;if(t=Ne(n),i=Ne(e),t||i)return t&&i?zg(n,e):!1;if(t=nt(n),i=nt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zs(n[o],e[o]))return!1}}return String(n)===String(e)}function Lc(n,e){return n.findIndex(t=>zs(t,e))}const wn=n=>wt(n)?n:n==null?"":Ne(n)||nt(n)&&(n.toString===Ud||!Ue(n.toString))?JSON.stringify(n,zd,2):String(n),zd=(n,e)=>e&&e.__v_isRef?zd(n,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:jr(e)?{[`Set(${e.size})`]:[...e.values()]}:nt(e)&&!Ne(e)&&!Hd(e)?String(e):e,Qe={},Dr=[],pn=()=>{},Bg=()=>!1,Ug=/^on[^a-z]/,sa=n=>Ug.test(n),Rc=n=>n.startsWith("onUpdate:"),At=Object.assign,Dc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hg=Object.prototype.hasOwnProperty,Ge=(n,e)=>Hg.call(n,e),Ne=Array.isArray,Or=n=>Bs(n)==="[object Map]",jr=n=>Bs(n)==="[object Set]",Du=n=>Bs(n)==="[object Date]",Ue=n=>typeof n=="function",wt=n=>typeof n=="string",Es=n=>typeof n=="symbol",nt=n=>n!==null&&typeof n=="object",Bd=n=>nt(n)&&Ue(n.then)&&Ue(n.catch),Ud=Object.prototype.toString,Bs=n=>Ud.call(n),Vg=n=>Bs(n).slice(8,-1),Hd=n=>Bs(n)==="[object Object]",Oc=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Oo=Ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Gg=/-(\w)/g,Pn=oa(n=>n.replace(Gg,(e,t)=>t?t.toUpperCase():"")),Wg=/\B([A-Z])/g,$r=oa(n=>n.replace(Wg,"-$1").toLowerCase()),aa=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ia=oa(n=>n?`on${aa(n)}`:""),jo=(n,e)=>!Object.is(n,e),Io=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},$o=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Vd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ou;const jg=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xn;class $g{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){xn=this}off(){xn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function qg(n,e=xn){e&&e.active&&e.effects.push(n)}const Ic=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Gd=n=>(n.w&bi)>0,Wd=n=>(n.n&bi)>0,Xg=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=bi},Yg=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Gd(r)&&!Wd(r)?r.delete(n):e[t++]=r,r.w&=~bi,r.n&=~bi}e.length=t}},zl=new WeakMap;let ps=0,bi=1;const Bl=30;let un;const $i=Symbol(""),Ul=Symbol("");class Nc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qg(this,i)}run(){if(!this.active)return this.fn();let e=un,t=_i;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=un,un=this,_i=!0,bi=1<<++ps,ps<=Bl?Xg(this):Iu(this),this.fn()}finally{ps<=Bl&&Yg(this),bi=1<<--ps,un=this.parent,_i=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Iu(this),this.onStop&&this.onStop(),this.active=!1)}}function Iu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let _i=!0;const jd=[];function qr(){jd.push(_i),_i=!1}function Xr(){const n=jd.pop();_i=n===void 0?!0:n}function jt(n,e,t){if(_i&&un){let i=zl.get(n);i||zl.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Ic()),$d(r)}}function $d(n,e){let t=!1;ps<=Bl?Wd(n)||(n.n|=bi,t=!Gd(n)):t=!n.has(un),t&&(n.add(un),un.deps.push(n))}function Xn(n,e,t,i,r,s){const o=zl.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?Oc(t)&&a.push(o.get("length")):(a.push(o.get($i)),Or(n)&&a.push(o.get(Ul)));break;case"delete":Ne(n)||(a.push(o.get($i)),Or(n)&&a.push(o.get(Ul)));break;case"set":Or(n)&&a.push(o.get($i));break}if(a.length===1)a[0]&&Hl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Hl(Ic(l))}}function Hl(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&Nu(i);for(const i of t)i.computed||Nu(i)}function Nu(n,e){(n!==un||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Kg=Ac("__proto__,__v_isRef,__isVue"),qd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Es)),Zg=Fc(),Jg=Fc(!1,!0),Qg=Fc(!0),Fu=e_();function e_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)jt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qr();const i=Ze(this)[e].apply(this,t);return Xr(),i}}),n}function Fc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?g_:Jd:e?Zd:Kd).get(i))return i;const o=Ne(i);if(!n&&o&&Ge(Fu,r))return Reflect.get(Fu,r,s);const a=Reflect.get(i,r,s);return(Es(r)?qd.has(r):Kg(r))||(n||jt(i,"get",r),e)?a:Ot(a)?o&&Oc(r)?a:a.value:nt(a)?n?Qd(a):Bc(a):a}}const t_=Xd(),n_=Xd(!0);function Xd(n=!1){return function(t,i,r,s){let o=t[i];if(Ts(o)&&Ot(o)&&!Ot(r))return!1;if(!n&&(!Vl(r)&&!Ts(r)&&(o=Ze(o),r=Ze(r)),!Ne(t)&&Ot(o)&&!Ot(r)))return o.value=r,!0;const a=Ne(t)&&Oc(i)?Number(i)<t.length:Ge(t,i),l=Reflect.set(t,i,r,s);return t===Ze(s)&&(a?jo(r,o)&&Xn(t,"set",i,r):Xn(t,"add",i,r)),l}}function i_(n,e){const t=Ge(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Xn(n,"delete",e,void 0),i}function r_(n,e){const t=Reflect.has(n,e);return(!Es(e)||!qd.has(e))&&jt(n,"has",e),t}function s_(n){return jt(n,"iterate",Ne(n)?"length":$i),Reflect.ownKeys(n)}const Yd={get:Zg,set:t_,deleteProperty:i_,has:r_,ownKeys:s_},o_={get:Qg,set(n,e){return!0},deleteProperty(n,e){return!0}},a_=At({},Yd,{get:Jg,set:n_}),kc=n=>n,la=n=>Reflect.getPrototypeOf(n);function Ys(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(e!==s&&jt(r,"get",e),jt(r,"get",s));const{has:o}=la(r),a=i?kc:t?Vc:Hc;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Ks(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(n!==r&&jt(i,"has",n),jt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Zs(n,e=!1){return n=n.__v_raw,!e&&jt(Ze(n),"iterate",$i),Reflect.get(n,"size",n)}function ku(n){n=Ze(n);const e=Ze(this);return la(e).has.call(e,n)||(e.add(n),Xn(e,"add",n,n)),this}function zu(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=la(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?jo(e,o)&&Xn(t,"set",n,e):Xn(t,"add",n,e),this}function Bu(n){const e=Ze(this),{has:t,get:i}=la(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Xn(e,"delete",n,void 0),s}function Uu(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&Xn(n,"clear",void 0,void 0),t}function Js(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?kc:n?Vc:Hc;return!n&&jt(a,"iterate",$i),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Qs(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=Or(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?kc:e?Vc:Hc;return!e&&jt(s,"iterate",l?Ul:$i),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ni(n){return function(...e){return n==="delete"?!1:this}}function l_(){const n={get(s){return Ys(this,s)},get size(){return Zs(this)},has:Ks,add:ku,set:zu,delete:Bu,clear:Uu,forEach:Js(!1,!1)},e={get(s){return Ys(this,s,!1,!0)},get size(){return Zs(this)},has:Ks,add:ku,set:zu,delete:Bu,clear:Uu,forEach:Js(!1,!0)},t={get(s){return Ys(this,s,!0)},get size(){return Zs(this,!0)},has(s){return Ks.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Js(!0,!1)},i={get(s){return Ys(this,s,!0,!0)},get size(){return Zs(this,!0)},has(s){return Ks.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qs(s,!1,!1),t[s]=Qs(s,!0,!1),e[s]=Qs(s,!1,!0),i[s]=Qs(s,!0,!0)}),[n,t,e,i]}const[c_,u_,f_,h_]=l_();function zc(n,e){const t=e?n?h_:f_:n?u_:c_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ge(t,r)&&r in i?t:i,r,s)}const d_={get:zc(!1,!1)},p_={get:zc(!1,!0)},m_={get:zc(!0,!1)},Kd=new WeakMap,Zd=new WeakMap,Jd=new WeakMap,g_=new WeakMap;function __(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v_(n){return n.__v_skip||!Object.isExtensible(n)?0:__(Vg(n))}function Bc(n){return Ts(n)?n:Uc(n,!1,Yd,d_,Kd)}function y_(n){return Uc(n,!1,a_,p_,Zd)}function Qd(n){return Uc(n,!0,o_,m_,Jd)}function Uc(n,e,t,i,r){if(!nt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=v_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Ir(n){return Ts(n)?Ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ts(n){return!!(n&&n.__v_isReadonly)}function Vl(n){return!!(n&&n.__v_isShallow)}function ep(n){return Ir(n)||Ts(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function tp(n){return $o(n,"__v_skip",!0),n}const Hc=n=>nt(n)?Bc(n):n,Vc=n=>nt(n)?Qd(n):n;function x_(n){_i&&un&&(n=Ze(n),$d(n.dep||(n.dep=Ic())))}function b_(n,e){n=Ze(n),n.dep&&Hl(n.dep)}function Ot(n){return!!(n&&n.__v_isRef===!0)}function w_(n){return Ot(n)?n.value:n}const M_={get:(n,e,t)=>w_(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ot(r)&&!Ot(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function np(n){return Ir(n)?n:new Proxy(n,M_)}var ip;class S_{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ip]=!1,this._dirty=!0,this.effect=new Nc(e,()=>{this._dirty||(this._dirty=!0,b_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return x_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ip="__v_isReadonly";function E_(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=pn):(i=n.get,r=n.set),new S_(i,r,s||!r,t)}function vi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ca(s,e,t)}return r}function tn(n,e,t,i){if(Ue(n)){const s=vi(n,e,t,i);return s&&Bd(s)&&s.catch(o=>{ca(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(tn(n[s],e,t,i));return r}function ca(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){vi(l,null,10,[n,o,a]);return}}T_(n,t,r,i)}function T_(n,e,t,i=!0){console.error(n)}let As=!1,Gl=!1;const Tt=[];let Tn=0;const Nr=[];let Un=null,Ii=0;const rp=Promise.resolve();let Gc=null;function A_(n){const e=Gc||rp;return n?e.then(this?n.bind(this):n):e}function C_(n){let e=Tn+1,t=Tt.length;for(;e<t;){const i=e+t>>>1;Cs(Tt[i])<n?e=i+1:t=i}return e}function Wc(n){(!Tt.length||!Tt.includes(n,As&&n.allowRecurse?Tn+1:Tn))&&(n.id==null?Tt.push(n):Tt.splice(C_(n.id),0,n),sp())}function sp(){!As&&!Gl&&(Gl=!0,Gc=rp.then(ap))}function P_(n){const e=Tt.indexOf(n);e>Tn&&Tt.splice(e,1)}function L_(n){Ne(n)?Nr.push(...n):(!Un||!Un.includes(n,n.allowRecurse?Ii+1:Ii))&&Nr.push(n),sp()}function Hu(n,e=As?Tn+1:0){for(;e<Tt.length;e++){const t=Tt[e];t&&t.pre&&(Tt.splice(e,1),e--,t())}}function op(n){if(Nr.length){const e=[...new Set(Nr)];if(Nr.length=0,Un){Un.push(...e);return}for(Un=e,Un.sort((t,i)=>Cs(t)-Cs(i)),Ii=0;Ii<Un.length;Ii++)Un[Ii]();Un=null,Ii=0}}const Cs=n=>n.id==null?1/0:n.id,R_=(n,e)=>{const t=Cs(n)-Cs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ap(n){Gl=!1,As=!0,Tt.sort(R_);const e=pn;try{for(Tn=0;Tn<Tt.length;Tn++){const t=Tt[Tn];t&&t.active!==!1&&vi(t,null,14)}}finally{Tn=0,Tt.length=0,op(),As=!1,Gc=null,(Tt.length||Nr.length)&&ap()}}function D_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Qe;h&&(r=t.map(p=>p.trim())),f&&(r=t.map(Vd))}let a,l=i[a=Ia(e)]||i[a=Ia(Pn(e))];!l&&s&&(l=i[a=Ia($r(e))]),l&&tn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,tn(c,n,6,r)}}function lp(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const u=lp(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(nt(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):At(o,s),nt(n)&&i.set(n,o),o)}function ua(n,e){return!n||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(n,e[0].toLowerCase()+e.slice(1))||Ge(n,$r(e))||Ge(n,e))}let Qt=null,fa=null;function qo(n){const e=Qt;return Qt=n,fa=n&&n.type.__scopeId||null,e}function O_(n){fa=n}function I_(){fa=null}function N_(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Ju(-1);const s=qo(e);let o;try{o=n(...r)}finally{qo(s),i._d&&Ju(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Na(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=n;let d,_;const w=qo(n);try{if(t.shapeFlag&4){const b=r||i;d=Mn(u.call(b,b,f,s,p,h,g)),_=l}else{const b=e;d=Mn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:F_(l)}}catch(b){bs.length=0,ca(b,n,1),d=Wn(mn)}let M=d;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:y}=M;b.length&&y&7&&(o&&b.some(Rc)&&(_=k_(_,o)),M=wi(M,_))}return t.dirs&&(M=wi(M),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&(M.transition=t.transition),d=M,qo(w),d}const F_=n=>{let e;for(const t in n)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=n[t]);return e},k_=(n,e)=>{const t={};for(const i in n)(!Rc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function z_(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ua(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ua(t,s))return!0}return!1}function B_({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const U_=n=>n.__isSuspense;function H_(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):L_(n)}function V_(n,e){if(yt){let t=yt.provides;const i=yt.parent&&yt.parent.provides;i===t&&(t=yt.provides=Object.create(i)),t[n]=e}}function Fa(n,e,t=!1){const i=yt||Qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const Gu={};function ka(n,e,t){return cp(n,e,t)}function cp(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Qe){const a=yt;let l,c=!1,u=!1;if(Ot(n)?(l=()=>n.value,c=Vl(n)):Ir(n)?(l=()=>n,i=!0):Ne(n)?(u=!0,c=n.some(_=>Ir(_)||Vl(_)),l=()=>n.map(_=>{if(Ot(_))return _.value;if(Ir(_))return Ui(_);if(Ue(_))return vi(_,a,2)})):Ue(n)?e?l=()=>vi(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),tn(n,a,3,[h])}:l=pn,e&&i){const _=l;l=()=>Ui(_())}let f,h=_=>{f=d.onStop=()=>{vi(_,a,4)}};if(Rs)return h=pn,e?t&&tn(e,a,3,[l(),u?[]:void 0,h]):l(),pn;let p=u?[]:Gu;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((w,M)=>jo(w,p[M])):jo(_,p)))&&(f&&f(),tn(e,a,3,[_,p===Gu?void 0:p,h]),p=_)}else d.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>kt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Wc(g));const d=new Nc(l,m);return e?t?g():p=d.run():r==="post"?kt(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&Dc(a.scope.effects,d)}}function G_(n,e,t){const i=this.proxy,r=wt(n)?n.includes(".")?up(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=yt;zr(this);const a=cp(r,s.bind(i),t);return o?zr(o):qi(),a}function up(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ui(n,e){if(!nt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ot(n))Ui(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)Ui(n[t],e);else if(jr(n)||Or(n))n.forEach(t=>{Ui(t,e)});else if(Hd(n))for(const t in n)Ui(n[t],e);return n}function W_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pp(()=>{n.isMounted=!0}),mp(()=>{n.isUnmounting=!0}),n}const Yt=[Function,Array],j_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(n,{slots:e}){const t=Rv(),i=W_();let r;return()=>{const s=e.default&&hp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==mn){o=m;break}}const a=Ze(n),{mode:l}=a;if(i.isLeaving)return za(o);const c=Wu(o);if(!c)return za(o);const u=Wl(c,a,i,t);jl(c,u);const f=t.subTree,h=f&&Wu(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,p=!0)}if(h&&h.type!==mn&&(!Ni(c,h)||p)){const m=Wl(h,a,i,t);if(jl(h,m),l==="out-in")return i.isLeaving=!0,m.afterLeave=()=>{i.isLeaving=!1,t.update()},za(o);l==="in-out"&&c.type!==mn&&(m.delayLeave=(d,_,w)=>{const M=fp(i,h);M[String(h.key)]=h,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},$_=j_;function fp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Wl(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=e,M=String(n.key),b=fp(t,n),y=(x,C)=>{x&&tn(x,i,9,C)},A=(x,C)=>{const I=C[1];y(x,C),Ne(x)?x.every(q=>q.length<=1)&&I():x.length<=1&&I()},O={mode:s,persisted:o,beforeEnter(x){let C=a;if(!t.isMounted)if(r)C=m||a;else return;x._leaveCb&&x._leaveCb(!0);const I=b[M];I&&Ni(n,I)&&I.el._leaveCb&&I.el._leaveCb(),y(C,[x])},enter(x){let C=l,I=c,q=u;if(!t.isMounted)if(r)C=d||l,I=_||c,q=w||u;else return;let ne=!1;const G=x._enterCb=D=>{ne||(ne=!0,D?y(q,[x]):y(I,[x]),O.delayedLeave&&O.delayedLeave(),x._enterCb=void 0)};C?A(C,[x,G]):G()},leave(x,C){const I=String(n.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return C();y(f,[x]);let q=!1;const ne=x._leaveCb=G=>{q||(q=!0,C(),G?y(g,[x]):y(p,[x]),x._leaveCb=void 0,b[I]===n&&delete b[I])};b[I]=n,h?A(h,[x,ne]):ne()},clone(x){return Wl(x,e,t,i)}};return O}function za(n){if(ha(n))return n=wi(n),n.children=null,n}function Wu(n){return ha(n)?n.children?n.children[0]:void 0:n}function jl(n,e){n.shapeFlag&6&&n.component?jl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Zt?(o.patchFlag&128&&r++,i=i.concat(hp(o.children,e,a))):(e||o.type!==mn)&&i.push(a!=null?wi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const No=n=>!!n.type.__asyncLoader,ha=n=>n.type.__isKeepAlive;function q_(n,e){dp(n,"a",e)}function X_(n,e){dp(n,"da",e)}function dp(n,e,t=yt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(da(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ha(r.parent.vnode)&&Y_(i,e,t,r),r=r.parent}}function Y_(n,e,t,i){const r=da(e,n,i,!0);gp(()=>{Dc(i[e],r)},t)}function da(n,e,t=yt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qr(),zr(t);const a=tn(e,t,n,o);return qi(),Xr(),a});return i?r.unshift(s):r.push(s),s}}const Kn=n=>(e,t=yt)=>(!Rs||n==="sp")&&da(n,(...i)=>e(...i),t),K_=Kn("bm"),pp=Kn("m"),Z_=Kn("bu"),J_=Kn("u"),mp=Kn("bum"),gp=Kn("um"),Q_=Kn("sp"),ev=Kn("rtg"),tv=Kn("rtc");function nv(n,e=yt){da("ec",n,e)}function es(n,e){const t=Qt;if(t===null)return n;const i=ma(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Qe]=e[s];Ue(o)&&(o={mounted:o,updated:o}),o.deep&&Ui(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qr(),tn(l,t,8,[n.el,a,n,e]),Xr())}}const _p="components";function Xo(n,e){return rv(_p,n,!0,e)||n}const iv=Symbol();function rv(n,e,t=!0,i=!1){const r=Qt||yt;if(r){const s=r.type;if(n===_p){const a=Fv(s,!1);if(a&&(a===e||a===Pn(e)||a===aa(Pn(e))))return s}const o=ju(r[n]||s[n],e)||ju(r.appContext[n],e);return!o&&i?s:o}}function ju(n,e){return n&&(n[e]||n[Pn(e)]||n[aa(Pn(e))])}function vp(n,e,t,i){let r;const s=t&&t[i];if(Ne(n)||wt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(nt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const $l=n=>n?Pp(n)?ma(n)||n.proxy:$l(n.parent):null,Yo=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$emit:n=>n.emit,$options:n=>jc(n),$forceUpdate:n=>n.f||(n.f=()=>Wc(n.update)),$nextTick:n=>n.n||(n.n=A_.bind(n.proxy)),$watch:n=>G_.bind(n)}),sv={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Qe&&Ge(i,e))return o[e]=1,i[e];if(r!==Qe&&Ge(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ge(c,e))return o[e]=3,s[e];if(t!==Qe&&Ge(t,e))return o[e]=4,t[e];ql&&(o[e]=0)}}const u=Yo[e];let f,h;if(u)return e==="$attrs"&&jt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Qe&&Ge(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ge(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Qe&&Ge(r,e)?(r[e]=t,!0):i!==Qe&&Ge(i,e)?(i[e]=t,!0):Ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Qe&&Ge(n,o)||e!==Qe&&Ge(e,o)||(a=s[0])&&Ge(a,o)||Ge(i,o)||Ge(Yo,o)||Ge(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ql=!0;function ov(n){const e=jc(n),t=n.proxy,i=n.ctx;ql=!1,e.beforeCreate&&$u(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:M,unmounted:b,render:y,renderTracked:A,renderTriggered:O,errorCaptured:x,serverPrefetch:C,expose:I,inheritAttrs:q,components:ne,directives:G,filters:D}=e;if(c&&av(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const re in o){const Z=o[re];Ue(Z)&&(i[re]=Z.bind(t))}if(r){const re=r.call(t,t);nt(re)&&(n.data=Bc(re))}if(ql=!0,s)for(const re in s){const Z=s[re],$=Ue(Z)?Z.bind(t,t):Ue(Z.get)?Z.get.bind(t,t):pn,k=!Ue(Z)&&Ue(Z.set)?Z.set.bind(t):pn,ee=zv({get:$,set:k});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>ee.value,set:Q=>ee.value=Q})}if(a)for(const re in a)yp(a[re],i,t,re);if(l){const re=Ue(l)?l.call(t):l;Reflect.ownKeys(re).forEach(Z=>{V_(Z,re[Z])})}u&&$u(u,n,"c");function U(re,Z){Ne(Z)?Z.forEach($=>re($.bind(t))):Z&&re(Z.bind(t))}if(U(K_,f),U(pp,h),U(Z_,p),U(J_,g),U(q_,m),U(X_,d),U(nv,x),U(tv,A),U(ev,O),U(mp,w),U(gp,b),U(Q_,C),Ne(I))if(I.length){const re=n.exposed||(n.exposed={});I.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>t[Z],set:$=>t[Z]=$})})}else n.exposed||(n.exposed={});y&&n.render===pn&&(n.render=y),q!=null&&(n.inheritAttrs=q),ne&&(n.components=ne),G&&(n.directives=G)}function av(n,e,t=pn,i=!1){Ne(n)&&(n=Xl(n));for(const r in n){const s=n[r];let o;nt(s)?"default"in s?o=Fa(s.from||r,s.default,!0):o=Fa(s.from||r):o=Fa(s),Ot(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function $u(n,e,t){tn(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function yp(n,e,t,i){const r=i.includes(".")?up(t,i):()=>t[i];if(wt(n)){const s=e[n];Ue(s)&&ka(r,s)}else if(Ue(n))ka(r,n.bind(t));else if(nt(n))if(Ne(n))n.forEach(s=>yp(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&ka(r,s,n)}}function jc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ko(l,c,o,!0)),Ko(l,e,o)),nt(e)&&s.set(e,l),l}function Ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ko(n,s,t,!0),r&&r.forEach(o=>Ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=lv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const lv={data:qu,props:Di,emits:Di,methods:Di,computed:Di,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Di,directives:Di,watch:uv,provide:qu,inject:cv};function qu(n,e){return e?n?function(){return At(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function cv(n,e){return Di(Xl(n),Xl(e))}function Xl(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function Di(n,e){return n?At(At(Object.create(null),n),e):e}function uv(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function fv(n,e,t,i=!1){const r={},s={};$o(s,pa,1),n.propsDefaults=Object.create(null),xp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:y_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function hv(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ua(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ge(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Pn(h);r[g]=Yl(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{xp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ge(e,f)&&((u=$r(f))===f||!Ge(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Yl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ge(e,f)&&!0)&&(delete s[f],c=!0)}c&&Xn(n,"set","$attrs")}function xp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oo(l))continue;const c=e[l];let u;r&&Ge(r,u=Pn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ua(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||Qe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Yl(r,l,f,c[f],n,!Ge(c,f))}}return o}function Yl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ge(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(zr(r),i=c[t]=l.call(null,e),qi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===$r(t))&&(i=!0))}return i}function bp(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ue(n)){const u=f=>{l=!0;const[h,p]=bp(f,e,!0);At(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return nt(n)&&i.set(n,Dr),Dr;if(Ne(s))for(let u=0;u<s.length;u++){const f=Pn(s[u]);Xu(f)&&(o[f]=Qe)}else if(s)for(const u in s){const f=Pn(u);if(Xu(f)){const h=s[u],p=o[f]=Ne(h)||Ue(h)?{type:h}:h;if(p){const g=Zu(Boolean,p.type),m=Zu(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ge(p,"default"))&&a.push(f)}}}const c=[o,a];return nt(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"}function Yu(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Ku(n,e){return Yu(n)===Yu(e)}function Zu(n,e){return Ne(e)?e.findIndex(t=>Ku(t,n)):Ue(e)&&Ku(e,n)?0:-1}const wp=n=>n[0]==="_"||n==="$stable",$c=n=>Ne(n)?n.map(Mn):[Mn(n)],dv=(n,e,t)=>{if(e._n)return e;const i=N_((...r)=>$c(e(...r)),t);return i._c=!1,i},Mp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(wp(r))continue;const s=n[r];if(Ue(s))e[r]=dv(r,s,i);else if(s!=null){const o=$c(s);e[r]=()=>o}}},Sp=(n,e)=>{const t=$c(e);n.slots.default=()=>t},pv=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),$o(e,"_",t)):Mp(e,n.slots={})}else n.slots={},e&&Sp(n,e);$o(n.slots,pa,1)},mv=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Qe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(At(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Mp(e,r)),o=e}else e&&(Sp(n,e),o={default:1});if(s)for(const a in r)!wp(a)&&!(a in o)&&delete r[a]};function Ep(){return{app:null,config:{isNativeTag:Bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gv=0;function _v(n,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!nt(r)&&(r=null);const s=Ep(),o=new Set;let a=!1;const l=s.app={_uid:gv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Wn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,ma(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Kl(n,e,t,i,r=!1){if(Ne(n)){n.forEach((h,p)=>Kl(h,e&&(Ne(e)?e[p]:e),t,i,r));return}if(No(i)&&!r)return;const s=i.shapeFlag&4?ma(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(wt(c)?(u[c]=null,Ge(f,c)&&(f[c]=null)):Ot(c)&&(c.value=null)),Ue(l))vi(l,a,12,[o,u]);else{const h=wt(l),p=Ot(l);if(h||p){const g=()=>{if(n.f){const m=h?Ge(f,l)?f[l]:u[l]:l.value;r?Ne(m)&&Dc(m,s):Ne(m)?m.includes(s)||m.push(s):h?(u[l]=[s],Ge(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ge(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,kt(g,t)):g()}}}const kt=H_;function vv(n){return yv(n)}function yv(n,e){const t=jg();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=pn,insertStaticContent:g}=n,m=(L,v,T,S=null,z=null,X=null,K=!1,ie=null,pe=!!v.dynamicChildren)=>{if(L===v)return;L&&!Ni(L,v)&&(S=j(L),Q(L,z,X,!0),L=null),v.patchFlag===-2&&(pe=!1,v.dynamicChildren=null);const{type:le,ref:P,shapeFlag:E}=v;switch(le){case qc:d(L,v,T,S);break;case mn:_(L,v,T,S);break;case Ba:L==null&&w(v,T,S,K);break;case Zt:ne(L,v,T,S,z,X,K,ie,pe);break;default:E&1?y(L,v,T,S,z,X,K,ie,pe):E&6?G(L,v,T,S,z,X,K,ie,pe):(E&64||E&128)&&le.process(L,v,T,S,z,X,K,ie,pe,ve)}P!=null&&z&&Kl(P,L&&L.ref,X,v||L,!v)},d=(L,v,T,S)=>{if(L==null)i(v.el=a(v.children),T,S);else{const z=v.el=L.el;v.children!==L.children&&c(z,v.children)}},_=(L,v,T,S)=>{L==null?i(v.el=l(v.children||""),T,S):v.el=L.el},w=(L,v,T,S)=>{[L.el,L.anchor]=g(L.children,v,T,S,L.el,L.anchor)},M=({el:L,anchor:v},T,S)=>{let z;for(;L&&L!==v;)z=h(L),i(L,T,S),L=z;i(v,T,S)},b=({el:L,anchor:v})=>{let T;for(;L&&L!==v;)T=h(L),r(L),L=T;r(v)},y=(L,v,T,S,z,X,K,ie,pe)=>{K=K||v.type==="svg",L==null?A(v,T,S,z,X,K,ie,pe):C(L,v,z,X,K,ie,pe)},A=(L,v,T,S,z,X,K,ie)=>{let pe,le;const{type:P,props:E,shapeFlag:H,transition:ae,dirs:he}=L;if(pe=L.el=o(L.type,X,E&&E.is,E),H&8?u(pe,L.children):H&16&&x(L.children,pe,null,S,z,X&&P!=="foreignObject",K,ie),he&&Ai(L,null,S,"created"),E){for(const Me in E)Me!=="value"&&!Oo(Me)&&s(pe,Me,null,E[Me],X,L.children,S,z,W);"value"in E&&s(pe,"value",null,E.value),(le=E.onVnodeBeforeMount)&&yn(le,S,L)}O(pe,L,L.scopeId,K,S),he&&Ai(L,null,S,"beforeMount");const ye=(!z||z&&!z.pendingBranch)&&ae&&!ae.persisted;ye&&ae.beforeEnter(pe),i(pe,v,T),((le=E&&E.onVnodeMounted)||ye||he)&&kt(()=>{le&&yn(le,S,L),ye&&ae.enter(pe),he&&Ai(L,null,S,"mounted")},z)},O=(L,v,T,S,z)=>{if(T&&p(L,T),S)for(let X=0;X<S.length;X++)p(L,S[X]);if(z){let X=z.subTree;if(v===X){const K=z.vnode;O(L,K,K.scopeId,K.slotScopeIds,z.parent)}}},x=(L,v,T,S,z,X,K,ie,pe=0)=>{for(let le=pe;le<L.length;le++){const P=L[le]=ie?di(L[le]):Mn(L[le]);m(null,P,v,T,S,z,X,K,ie)}},C=(L,v,T,S,z,X,K)=>{const ie=v.el=L.el;let{patchFlag:pe,dynamicChildren:le,dirs:P}=v;pe|=L.patchFlag&16;const E=L.props||Qe,H=v.props||Qe;let ae;T&&Ci(T,!1),(ae=H.onVnodeBeforeUpdate)&&yn(ae,T,v,L),P&&Ai(v,L,T,"beforeUpdate"),T&&Ci(T,!0);const he=z&&v.type!=="foreignObject";if(le?I(L.dynamicChildren,le,ie,T,S,he,X):K||Z(L,v,ie,null,T,S,he,X,!1),pe>0){if(pe&16)q(ie,v,E,H,T,S,z);else if(pe&2&&E.class!==H.class&&s(ie,"class",null,H.class,z),pe&4&&s(ie,"style",E.style,H.style,z),pe&8){const ye=v.dynamicProps;for(let Me=0;Me<ye.length;Me++){const N=ye[Me],Y=E[N],Ee=H[N];(Ee!==Y||N==="value")&&s(ie,N,Y,Ee,z,L.children,T,S,W)}}pe&1&&L.children!==v.children&&u(ie,v.children)}else!K&&le==null&&q(ie,v,E,H,T,S,z);((ae=H.onVnodeUpdated)||P)&&kt(()=>{ae&&yn(ae,T,v,L),P&&Ai(v,L,T,"updated")},S)},I=(L,v,T,S,z,X,K)=>{for(let ie=0;ie<v.length;ie++){const pe=L[ie],le=v[ie],P=pe.el&&(pe.type===Zt||!Ni(pe,le)||pe.shapeFlag&70)?f(pe.el):T;m(pe,le,P,null,S,z,X,K,!0)}},q=(L,v,T,S,z,X,K)=>{if(T!==S){if(T!==Qe)for(const ie in T)!Oo(ie)&&!(ie in S)&&s(L,ie,T[ie],null,K,v.children,z,X,W);for(const ie in S){if(Oo(ie))continue;const pe=S[ie],le=T[ie];pe!==le&&ie!=="value"&&s(L,ie,le,pe,K,v.children,z,X,W)}"value"in S&&s(L,"value",T.value,S.value)}},ne=(L,v,T,S,z,X,K,ie,pe)=>{const le=v.el=L?L.el:a(""),P=v.anchor=L?L.anchor:a("");let{patchFlag:E,dynamicChildren:H,slotScopeIds:ae}=v;ae&&(ie=ie?ie.concat(ae):ae),L==null?(i(le,T,S),i(P,T,S),x(v.children,T,P,z,X,K,ie,pe)):E>0&&E&64&&H&&L.dynamicChildren?(I(L.dynamicChildren,H,T,z,X,K,ie),(v.key!=null||z&&v===z.subTree)&&Tp(L,v,!0)):Z(L,v,T,P,z,X,K,ie,pe)},G=(L,v,T,S,z,X,K,ie,pe)=>{v.slotScopeIds=ie,L==null?v.shapeFlag&512?z.ctx.activate(v,T,S,K,pe):D(v,T,S,z,X,K,pe):F(L,v,pe)},D=(L,v,T,S,z,X,K)=>{const ie=L.component=Lv(L,S,z);if(ha(L)&&(ie.ctx.renderer=ve),Dv(ie),ie.asyncDep){if(z&&z.registerDep(ie,U),!L.el){const pe=ie.subTree=Wn(mn);_(null,pe,v,T)}return}U(ie,L,v,T,z,X,K)},F=(L,v,T)=>{const S=v.component=L.component;if(z_(L,v,T))if(S.asyncDep&&!S.asyncResolved){re(S,v,T);return}else S.next=v,P_(S.update),S.update();else v.el=L.el,S.vnode=v},U=(L,v,T,S,z,X,K)=>{const ie=()=>{if(L.isMounted){let{next:P,bu:E,u:H,parent:ae,vnode:he}=L,ye=P,Me;Ci(L,!1),P?(P.el=he.el,re(L,P,K)):P=he,E&&Io(E),(Me=P.props&&P.props.onVnodeBeforeUpdate)&&yn(Me,ae,P,he),Ci(L,!0);const N=Na(L),Y=L.subTree;L.subTree=N,m(Y,N,f(Y.el),j(Y),L,z,X),P.el=N.el,ye===null&&B_(L,N.el),H&&kt(H,z),(Me=P.props&&P.props.onVnodeUpdated)&&kt(()=>yn(Me,ae,P,he),z)}else{let P;const{el:E,props:H}=v,{bm:ae,m:he,parent:ye}=L,Me=No(v);if(Ci(L,!1),ae&&Io(ae),!Me&&(P=H&&H.onVnodeBeforeMount)&&yn(P,ye,v),Ci(L,!0),E&&Ce){const N=()=>{L.subTree=Na(L),Ce(E,L.subTree,L,z,null)};Me?v.type.__asyncLoader().then(()=>!L.isUnmounted&&N()):N()}else{const N=L.subTree=Na(L);m(null,N,T,S,L,z,X),v.el=N.el}if(he&&kt(he,z),!Me&&(P=H&&H.onVnodeMounted)){const N=v;kt(()=>yn(P,ye,N),z)}(v.shapeFlag&256||ye&&No(ye.vnode)&&ye.vnode.shapeFlag&256)&&L.a&&kt(L.a,z),L.isMounted=!0,v=T=S=null}},pe=L.effect=new Nc(ie,()=>Wc(le),L.scope),le=L.update=()=>pe.run();le.id=L.uid,Ci(L,!0),le()},re=(L,v,T)=>{v.component=L;const S=L.vnode.props;L.vnode=v,L.next=null,hv(L,v.props,S,T),mv(L,v.children,T),qr(),Hu(),Xr()},Z=(L,v,T,S,z,X,K,ie,pe=!1)=>{const le=L&&L.children,P=L?L.shapeFlag:0,E=v.children,{patchFlag:H,shapeFlag:ae}=v;if(H>0){if(H&128){k(le,E,T,S,z,X,K,ie,pe);return}else if(H&256){$(le,E,T,S,z,X,K,ie,pe);return}}ae&8?(P&16&&W(le,z,X),E!==le&&u(T,E)):P&16?ae&16?k(le,E,T,S,z,X,K,ie,pe):W(le,z,X,!0):(P&8&&u(T,""),ae&16&&x(E,T,S,z,X,K,ie,pe))},$=(L,v,T,S,z,X,K,ie,pe)=>{L=L||Dr,v=v||Dr;const le=L.length,P=v.length,E=Math.min(le,P);let H;for(H=0;H<E;H++){const ae=v[H]=pe?di(v[H]):Mn(v[H]);m(L[H],ae,T,null,z,X,K,ie,pe)}le>P?W(L,z,X,!0,!1,E):x(v,T,S,z,X,K,ie,pe,E)},k=(L,v,T,S,z,X,K,ie,pe)=>{let le=0;const P=v.length;let E=L.length-1,H=P-1;for(;le<=E&&le<=H;){const ae=L[le],he=v[le]=pe?di(v[le]):Mn(v[le]);if(Ni(ae,he))m(ae,he,T,null,z,X,K,ie,pe);else break;le++}for(;le<=E&&le<=H;){const ae=L[E],he=v[H]=pe?di(v[H]):Mn(v[H]);if(Ni(ae,he))m(ae,he,T,null,z,X,K,ie,pe);else break;E--,H--}if(le>E){if(le<=H){const ae=H+1,he=ae<P?v[ae].el:S;for(;le<=H;)m(null,v[le]=pe?di(v[le]):Mn(v[le]),T,he,z,X,K,ie,pe),le++}}else if(le>H)for(;le<=E;)Q(L[le],z,X,!0),le++;else{const ae=le,he=le,ye=new Map;for(le=he;le<=H;le++){const Re=v[le]=pe?di(v[le]):Mn(v[le]);Re.key!=null&&ye.set(Re.key,le)}let Me,N=0;const Y=H-he+1;let Ee=!1,Pe=0;const Te=new Array(Y);for(le=0;le<Y;le++)Te[le]=0;for(le=ae;le<=E;le++){const Re=L[le];if(N>=Y){Q(Re,z,X,!0);continue}let ze;if(Re.key!=null)ze=ye.get(Re.key);else for(Me=he;Me<=H;Me++)if(Te[Me-he]===0&&Ni(Re,v[Me])){ze=Me;break}ze===void 0?Q(Re,z,X,!0):(Te[ze-he]=le+1,ze>=Pe?Pe=ze:Ee=!0,m(Re,v[ze],T,null,z,X,K,ie,pe),N++)}const De=Ee?xv(Te):Dr;for(Me=De.length-1,le=Y-1;le>=0;le--){const Re=he+le,ze=v[Re],V=Re+1<P?v[Re+1].el:S;Te[le]===0?m(null,ze,T,V,z,X,K,ie,pe):Ee&&(Me<0||le!==De[Me]?ee(ze,T,V,2):Me--)}}},ee=(L,v,T,S,z=null)=>{const{el:X,type:K,transition:ie,children:pe,shapeFlag:le}=L;if(le&6){ee(L.component.subTree,v,T,S);return}if(le&128){L.suspense.move(v,T,S);return}if(le&64){K.move(L,v,T,ve);return}if(K===Zt){i(X,v,T);for(let E=0;E<pe.length;E++)ee(pe[E],v,T,S);i(L.anchor,v,T);return}if(K===Ba){M(L,v,T);return}if(S!==2&&le&1&&ie)if(S===0)ie.beforeEnter(X),i(X,v,T),kt(()=>ie.enter(X),z);else{const{leave:E,delayLeave:H,afterLeave:ae}=ie,he=()=>i(X,v,T),ye=()=>{E(X,()=>{he(),ae&&ae()})};H?H(X,he,ye):ye()}else i(X,v,T)},Q=(L,v,T,S=!1,z=!1)=>{const{type:X,props:K,ref:ie,children:pe,dynamicChildren:le,shapeFlag:P,patchFlag:E,dirs:H}=L;if(ie!=null&&Kl(ie,null,T,L,!0),P&256){v.ctx.deactivate(L);return}const ae=P&1&&H,he=!No(L);let ye;if(he&&(ye=K&&K.onVnodeBeforeUnmount)&&yn(ye,v,L),P&6)se(L.component,T,S);else{if(P&128){L.suspense.unmount(T,S);return}ae&&Ai(L,null,v,"beforeUnmount"),P&64?L.type.remove(L,v,T,z,ve,S):le&&(X!==Zt||E>0&&E&64)?W(le,v,T,!1,!0):(X===Zt&&E&384||!z&&P&16)&&W(pe,v,T),S&&ue(L)}(he&&(ye=K&&K.onVnodeUnmounted)||ae)&&kt(()=>{ye&&yn(ye,v,L),ae&&Ai(L,null,v,"unmounted")},T)},ue=L=>{const{type:v,el:T,anchor:S,transition:z}=L;if(v===Zt){ce(T,S);return}if(v===Ba){b(L);return}const X=()=>{r(T),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(L.shapeFlag&1&&z&&!z.persisted){const{leave:K,delayLeave:ie}=z,pe=()=>K(T,X);ie?ie(L.el,X,pe):pe()}else X()},ce=(L,v)=>{let T;for(;L!==v;)T=h(L),r(L),L=T;r(v)},se=(L,v,T)=>{const{bum:S,scope:z,update:X,subTree:K,um:ie}=L;S&&Io(S),z.stop(),X&&(X.active=!1,Q(K,L,v,T)),ie&&kt(ie,v),kt(()=>{L.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},W=(L,v,T,S=!1,z=!1,X=0)=>{for(let K=X;K<L.length;K++)Q(L[K],v,T,S,z)},j=L=>L.shapeFlag&6?j(L.component.subTree):L.shapeFlag&128?L.suspense.next():h(L.anchor||L.el),oe=(L,v,T)=>{L==null?v._vnode&&Q(v._vnode,null,null,!0):m(v._vnode||null,L,v,null,null,null,T),Hu(),op(),v._vnode=L},ve={p:m,um:Q,m:ee,r:ue,mt:D,mc:x,pc:Z,pbc:I,n:j,o:n};let me,Ce;return e&&([me,Ce]=e(ve)),{render:oe,hydrate:me,createApp:_v(oe,me)}}function Ci({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Tp(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),t||Tp(o,a))}}function xv(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const bv=n=>n.__isTeleport,Zt=Symbol(void 0),qc=Symbol(void 0),mn=Symbol(void 0),Ba=Symbol(void 0),bs=[];let hn=null;function st(n=!1){bs.push(hn=n?null:[])}function wv(){bs.pop(),hn=bs[bs.length-1]||null}let Ps=1;function Ju(n){Ps+=n}function Ap(n){return n.dynamicChildren=Ps>0?hn||Dr:null,wv(),Ps>0&&hn&&hn.push(n),n}function vt(n,e,t,i,r,s){return Ap(Le(n,e,t,i,r,s,!0))}function Ls(n,e,t,i,r){return Ap(Wn(n,e,t,i,r,!0))}function Mv(n){return n?n.__v_isVNode===!0:!1}function Ni(n,e){return n.type===e.type&&n.key===e.key}const pa="__vInternal",Cp=({key:n})=>n!=null?n:null,Fo=({ref:n,ref_key:e,ref_for:t})=>n!=null?wt(n)||Ot(n)||Ue(n)?{i:Qt,r:n,k:e,f:!!t}:n:null;function Le(n,e=null,t=null,i=0,r=null,s=n===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cp(e),ref:e&&Fo(e),scopeId:fa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Xc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),Ps>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const Wn=Sv;function Sv(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===iv)&&(n=mn),Mv(n)){const a=wi(n,e,!0);return t&&Xc(a,t),Ps>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag|=-2,a}if(kv(n)&&(n=n.__vccOpts),e){e=Ev(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Pc(a)),nt(l)&&(ep(l)&&!Ne(l)&&(l=At({},l)),e.style=Cc(l))}const o=wt(n)?1:U_(n)?128:bv(n)?64:nt(n)?4:Ue(n)?2:0;return Le(n,e,t,i,r,o,s,!0)}function Ev(n){return n?ep(n)||pa in n?At({},n):n:null}function wi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Av(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Cp(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Zt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&wi(n.ssContent),ssFallback:n.ssFallback&&wi(n.ssFallback),el:n.el,anchor:n.anchor}}function Tv(n=" ",e=0){return Wn(qc,null,n,e)}function Bn(n="",e=!1){return e?(st(),Ls(mn,null,n)):Wn(mn,null,n)}function Mn(n){return n==null||typeof n=="boolean"?Wn(mn):Ne(n)?Wn(Zt,null,n.slice()):typeof n=="object"?di(n):Wn(qc,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:wi(n)}function Xc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Xc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(pa in e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[Tv(e)]):t=8);n.children=e,n.shapeFlag|=t}function Av(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Pc([e.class,i.class]));else if(r==="style")e.style=Cc([e.style,i.style]);else if(sa(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function yn(n,e,t,i=null){tn(n,e,7,[t,i])}const Cv=Ep();let Pv=0;function Lv(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Cv,s={uid:Pv++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new $g(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bp(i,r),emitsOptions:lp(i,r),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:i.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=D_.bind(null,s),n.ce&&n.ce(s),s}let yt=null;const Rv=()=>yt||Qt,zr=n=>{yt=n,n.scope.on()},qi=()=>{yt&&yt.scope.off(),yt=null};function Pp(n){return n.vnode.shapeFlag&4}let Rs=!1;function Dv(n,e=!1){Rs=e;const{props:t,children:i}=n.vnode,r=Pp(n);fv(n,t,r,e),pv(n,i);const s=r?Ov(n,e):void 0;return Rs=!1,s}function Ov(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=tp(new Proxy(n.ctx,sv));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Nv(n):null;zr(n),qr();const s=vi(i,n,0,[n.props,r]);if(Xr(),qi(),Bd(s)){if(s.then(qi,qi),e)return s.then(o=>{Qu(n,o,e)}).catch(o=>{ca(o,n,0)});n.asyncDep=s}else Qu(n,s,e)}else Lp(n,e)}function Qu(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:nt(e)&&(n.setupState=np(e)),Lp(n,t)}let ef;function Lp(n,e,t){const i=n.type;if(!n.render){if(!e&&ef&&!i.render){const r=i.template||jc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=At(At({isCustomElement:s,delimiters:a},o),l);i.render=ef(r,c)}}n.render=i.render||pn}zr(n),qr(),ov(n),Xr(),qi()}function Iv(n){return new Proxy(n.attrs,{get(e,t){return jt(n,"get","$attrs"),e[t]}})}function Nv(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Iv(n))},slots:n.slots,emit:n.emit,expose:e}}function ma(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(np(tp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Yo)return Yo[t](n)}}))}function Fv(n,e=!0){return Ue(n)?n.displayName||n.name:n.name||e&&n.__name}function kv(n){return Ue(n)&&"__vccOpts"in n}const zv=(n,e)=>E_(n,e,Rs),Bv="3.2.41",Uv="http://www.w3.org/2000/svg",Fi=typeof document<"u"?document:null,tf=Fi&&Fi.createElement("template"),Hv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Fi.createElementNS(Uv,n):Fi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Fi.createTextNode(n),createComment:n=>Fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tf.innerHTML=i?`<svg>${n}</svg>`:n;const a=tf.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Vv(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Gv(n,e,t){const i=n.style,r=wt(t);if(t&&!r){for(const s in t)Zl(i,s,t[s]);if(e&&!wt(e))for(const s in e)t[s]==null&&Zl(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const nf=/\s*!important$/;function Zl(n,e,t){if(Ne(t))t.forEach(i=>Zl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wv(n,e);nf.test(t)?n.setProperty($r(i),t.replace(nf,""),"important"):n[i]=t}}const rf=["Webkit","Moz","ms"],Ua={};function Wv(n,e){const t=Ua[e];if(t)return t;let i=Pn(e);if(i!=="filter"&&i in n)return Ua[e]=i;i=aa(i);for(let r=0;r<rf.length;r++){const s=rf[r]+i;if(s in n)return Ua[e]=s}return e}const sf="http://www.w3.org/1999/xlink";function jv(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(sf,e.slice(6,e.length)):n.setAttributeNS(sf,e,t);else{const s=Ig(e);t==null||s&&!kd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function $v(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=kd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Yc(n,e,t,i){n.addEventListener(e,t,i)}function qv(n,e,t,i){n.removeEventListener(e,t,i)}function Xv(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Yv(e);if(i){const c=s[e]=Jv(i,r);Yc(n,a,c,l)}else o&&(qv(n,a,o,l),s[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function Yv(n){let e;if(of.test(n)){e={};let i;for(;i=n.match(of);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$r(n.slice(2)),e]}let Ha=0;const Kv=Promise.resolve(),Zv=()=>Ha||(Kv.then(()=>Ha=0),Ha=Date.now());function Jv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;tn(Qv(i,t.value),e,5,[i])};return t.value=n,t.attached=Zv(),t}function Qv(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const af=/^on[a-z]/,e0=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Vv(n,i,r):e==="style"?Gv(n,t,i):sa(e)?Rc(e)||Xv(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t0(n,e,i,r))?$v(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jv(n,e,i,r))};function t0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&af.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||af.test(e)&&wt(t)?!1:e in n}const n0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$_.props;const Zo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Io(e,t):e},i0={deep:!0,created(n,e,t){n._assign=Zo(t),Yc(n,"change",()=>{const i=n._modelValue,r=Ds(n),s=n.checked,o=n._assign;if(Ne(i)){const a=Lc(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(jr(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(Rp(n,s))})},mounted:lf,beforeUpdate(n,e,t){n._assign=Zo(t),lf(n,e,t)}};function lf(n,{value:e,oldValue:t},i){n._modelValue=e,Ne(e)?n.checked=Lc(e,i.props.value)>-1:jr(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=zs(e,Rp(n,!0)))}const eo={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=jr(e);Yc(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Vd(Ds(o)):Ds(o));n._assign(n.multiple?r?new Set(s):s:s[0])}),n._assign=Zo(i)},mounted(n,{value:e}){cf(n,e)},beforeUpdate(n,e,t){n._assign=Zo(t)},updated(n,{value:e}){cf(n,e)}};function cf(n,e){const t=n.multiple;if(!(t&&!Ne(e)&&!jr(e))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=Ds(s);if(t)Ne(e)?s.selected=Lc(e,o)>-1:s.selected=e.has(o);else if(zs(Ds(s),e)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ds(n){return"_value"in n?n._value:n.value}function Rp(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const r0=At({patchProp:e0},Hv);let uf;function s0(){return uf||(uf=vv(r0))}const o0=(...n)=>{const e=s0().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=a0(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function a0(n){return wt(n)?document.querySelector(n):n}const Us=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},l0="2ed0e6e8b06842fb854cb15e1690a7b5",c0="user-follow-read user-top-read",u0={name:"LoginPage",methods:{login(){window.location.href=`https://accounts.spotify.com/authorize?client_id=${l0}&response_type=token&redirect_uri=${window.location.origin}&scope=${c0}&show_dialog=true`}}},f0={class:"bg-[url(/screenshot.png)] bg-no-repeat bg-cover bg-center bg-fixed flex"},h0={class:"grow backdrop-blur-sm p-5 md:p-0 md:grid md:place-items-center"},d0={class:"w-6/7 md:w-fit space-y-3"},p0=Le("div",{class:"rounded-md shadow-2xl text-center p-4 bg-base03"},[Le("main",null,[Le("h1",{class:"text-3xl font-bold text-base1"},"Artist Constellations"),Le("p",{class:"text-base0"}," View the artists you listen to on Spotify in a 3D constellations! "),Le("a",{href:"https://github.com/grantshandy/artist-constellations.art",class:"text-base0 underline"}," View Source Code ")])],-1),m0={class:"w-full flex shadow-lg hover:shadow-2xl"};function g0(n,e,t,i,r,s){return st(),vt("div",f0,[Le("div",h0,[Le("div",d0,[p0,Le("div",m0,[Le("button",{onClick:e[0]||(e[0]=(...o)=>s.login&&s.login(...o)),class:"grow px-2 py-1 text-xl select-none rounded-md bg-base03 hover:bg-base02-tint font-semibold text-base1 hover:text-base01-tint"}," Start Here ")])])])])}const _0=Us(u0,[["render",g0]]),v0={name:"UserInfo",props:["me"]},y0={class:"w-full flow-root px-2 py-1 rounded-md bg-base02 space-x-3 select-none shadow-md items-center"},x0={class:"float-left align-middle font-bold text-sm md:text-base"},b0=["src"];function w0(n,e,t,i,r,s){return st(),vt("div",y0,[Le("p",x0," User: "+wn(t.me.display_name.charAt(0).toUpperCase()+t.me.display_name.slice(1)),1),Le("img",{src:t.me.images[0].url,alt:"Profile Picture",class:"float-right w-6 h-6 rounded-full"},null,8,b0)])}const M0=Us(v0,[["render",w0]]);class S0{constructor(e){Da(this,"value");Da(this,"next");this.value=e}}var bn,Wi,ji;class E0{constructor(){Xs(this,bn,void 0);Xs(this,Wi,void 0);Xs(this,ji,void 0);this.clear()}enqueue(e){const t=new S0(e);ti(this,bn)?(ti(this,Wi).next=t,Dn(this,Wi,t)):(Dn(this,bn,t),Dn(this,Wi,t)),Oa(this,ji)._++}dequeue(){const e=ti(this,bn);if(!!e)return Dn(this,bn,ti(this,bn).next),Oa(this,ji)._--,e.value}clear(){Dn(this,bn,void 0),Dn(this,Wi,void 0),Dn(this,ji,0)}get size(){return ti(this,ji)}*[Symbol.iterator](){let e=ti(this,bn);for(;e;)yield e.value,e=e.next}}bn=new WeakMap,Wi=new WeakMap,ji=new WeakMap;function T0(n){if(!((Number.isInteger(n)||n===Number.POSITIVE_INFINITY)&&n>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const e=new E0;let t=0;const i=()=>{t--,e.size>0&&e.dequeue()()},r=async(a,l,c)=>{t++;const u=(async()=>a(...c))();l(u);try{await u}catch{}i()},s=(a,l,c)=>{e.enqueue(r.bind(void 0,a,l,c)),(async()=>(await Promise.resolve(),t<n&&e.size>0&&e.dequeue()()))()},o=(a,...l)=>new Promise(c=>{s(a,c,l)});return Object.defineProperties(o,{activeCount:{get:()=>t},pendingCount:{get:()=>e.size},clearQueue:{value:()=>{e.clear()}}}),o}function Dp(n){var o,a;let e=n.name,t=n.genres,i=n.id,r=n.popularity,s=(a=(o=n==null?void 0:n.images[0])==null?void 0:o.url)!=null?a:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png";return{name:e,genres:t,id:i,img:s,popularity:r}}async function A0(){let n=await ff(),e=n.cursor,t=n.artists;for(;e!=null;){let i=await ff(e);e=i.cursor,i.artists.forEach(function(r){t.push(r)})}return t}async function C0(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/top-tracks?market=US`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&er(),t.error;return t.tracks}async function ff(n){let e;n==null?e="https://api.spotify.com/v1/me/following?type=artist&limit=50":e=`https://api.spotify.com/v1/me/following?type=artist&after=${n}&limit=50`;let i=await(await fetch(e,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(i.error)throw(i.error.status=401)&&er(),i.error;let r=new Array;i.artists.items.forEach(function(o){r.push(Dp(o))});let s=i.artists.cursors.after;return{artists:r,cursor:s}}async function P0(){let e=await(await fetch("https://api.spotify.com/v1/me",{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(e.error)throw e.error.status==401&&er(),e.error;return e}async function L0(n){let e=[];n.forEach(function(s){e.push(s.id)});let t=T0(3),i=await Promise.all(n.map(s=>t(()=>R0(s)))).catch(s=>{throw s}),r=[];for(const s of i)for(const o of s.relatedArtists)if(e.includes(o.id)){let a={source:s.id,target:o.id},l={source:o.id,target:s.id};!r.includes(a)&&!r.includes(l)&&r.push(a)}return r}async function R0(n){let t=await(await fetch(`https://api.spotify.com/v1/artists/${n.id}/related-artists`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&er(),t.error;let i=[];return t.artists.forEach(function(r){i.push({name:r.name,id:r.id})}),{name:n.name,id:n.id,relatedArtists:i}}async function D0(n){let t=await(await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${n}&limit=50`,{headers:{Authorization:`Bearer ${localStorage.getItem("userToken")}`}})).json();if(t.error)throw t.error.status==401&&er(),t.error;let i=[];return t.items.forEach(function(r){i.push(Dp(r))}),i}function er(){localStorage.removeItem("userToken"),localStorage.removeItem("lastLoggedIn"),window.location.href=window.location.href.split("?")[0].split("#")[0]}const O0={name:"ArtistInfo",props:{artist:Object},data(){return{topTracks:null}},methods:{async revealTopTracks(){this.topTracks=await C0(this.artist).catch(n=>{this.error=n}),console.log(this.topTracks)}}},I0={class:"overflow-y-auto rounded-md shadow-md"},N0={class:"rounded-md bg-base03 shadow-md py-2 space-y-2 text-center"},F0=["href"],k0={class:"md:text-2xl font-semibold mb-2"},z0=["src"],B0={class:"text-sm italic"},U0={key:0},H0=Le("p",{class:"font-bold"},"Genres:",-1),V0={class:"text-sm ml-2"};function G0(n,e,t,i,r,s){return st(),vt("div",I0,[Le("div",N0,[Le("a",{href:"https://open.spotify.com/artist/"+t.artist.id,target:"_blank",rel:"noopener noreferrer",class:"block"},[Le("p",k0,wn(t.artist.name),1),Le("img",{src:t.artist.img,alt:"Artist Profile Picture",class:"rounded-md w-2/3 mx-auto"},null,8,z0)],8,F0),Le("p",B0,"Popularity: "+wn(t.artist.popularity)+"%",1),t.artist.genres.length>0?(st(),vt("div",U0,[H0,(st(!0),vt(Zt,null,vp(t.artist.genres,o=>(st(),vt("div",{key:o},[Le("p",V0,"\u2022 "+wn(o),1)]))),128))])):Bn("",!0)])])}const W0=Us(O0,[["render",G0]]);function Op(n,e){return function(){return n.apply(e,arguments)}}const{toString:Ip}=Object.prototype,{getPrototypeOf:Kc}=Object,Zc=(n=>e=>{const t=Ip.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=n=>(n=n.toLowerCase(),e=>Zc(e)===n),ga=n=>e=>typeof e===n,{isArray:Hs}=Array,Jl=ga("undefined");function j0(n){return n!==null&&!Jl(n)&&n.constructor!==null&&!Jl(n.constructor)&&Yr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Np=Zn("ArrayBuffer");function $0(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Np(n.buffer),e}const q0=ga("string"),Yr=ga("function"),Fp=ga("number"),kp=n=>n!==null&&typeof n=="object",X0=n=>n===!0||n===!1,ko=n=>{if(Zc(n)!=="object")return!1;const e=Kc(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Y0=Zn("Date"),K0=Zn("File"),Z0=Zn("Blob"),J0=Zn("FileList"),Q0=n=>kp(n)&&Yr(n.pipe),ey=n=>{const e="[object FormData]";return n&&(typeof FormData=="function"&&n instanceof FormData||Ip.call(n)===e||Yr(n.toString)&&n.toString()===e)},ty=Zn("URLSearchParams"),ny=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _a(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Hs(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function Ql(){const n={},e=(t,i)=>{ko(n[i])&&ko(t)?n[i]=Ql(n[i],t):ko(t)?n[i]=Ql({},t):Hs(t)?n[i]=t.slice():n[i]=t};for(let t=0,i=arguments.length;t<i;t++)arguments[t]&&_a(arguments[t],e);return n}const iy=(n,e,t,{allOwnKeys:i}={})=>(_a(e,(r,s)=>{t&&Yr(r)?n[s]=Op(r,t):n[s]=r},{allOwnKeys:i}),n),ry=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),sy=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},oy=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&Kc(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},ay=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},ly=n=>{if(!n)return null;if(Hs(n))return n;let e=n.length;if(!Fp(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},cy=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Kc(Uint8Array)),uy=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},fy=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},hy=Zn("HTMLFormElement"),dy=n=>n.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),hf=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),py=Zn("RegExp"),zp=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};_a(t,(r,s)=>{e(r,s,n)!==!1&&(i[s]=r)}),Object.defineProperties(n,i)},my=n=>{zp(n,(e,t)=>{const i=n[t];if(!!Yr(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+t+"'")})}})},gy=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Hs(n)?i(n):i(String(n).split(e)),t},_y=()=>{},vy=(n,e)=>(n=+n,Number.isFinite(n)?n:e),_e={isArray:Hs,isArrayBuffer:Np,isBuffer:j0,isFormData:ey,isArrayBufferView:$0,isString:q0,isNumber:Fp,isBoolean:X0,isObject:kp,isPlainObject:ko,isUndefined:Jl,isDate:Y0,isFile:K0,isBlob:Z0,isRegExp:py,isFunction:Yr,isStream:Q0,isURLSearchParams:ty,isTypedArray:cy,isFileList:J0,forEach:_a,merge:Ql,extend:iy,trim:ny,stripBOM:ry,inherits:sy,toFlatObject:oy,kindOf:Zc,kindOfTest:Zn,endsWith:ay,toArray:ly,forEachEntry:uy,matchAll:fy,isHTMLForm:hy,hasOwnProperty:hf,hasOwnProp:hf,reduceDescriptors:zp,freezeMethods:my,toObjectSet:gy,toCamelCase:dy,noop:_y,toFiniteNumber:vy};function $e(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}_e.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Bp=$e.prototype,Up={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Up[n]={value:n}});Object.defineProperties($e,Up);Object.defineProperty(Bp,"isAxiosError",{value:!0});$e.from=(n,e,t,i,r,s)=>{const o=Object.create(Bp);return _e.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),$e.call(o,n.message,e,t,i,r),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};var yy=typeof self=="object"?self.FormData:window.FormData;function ec(n){return _e.isPlainObject(n)||_e.isArray(n)}function Hp(n){return _e.endsWith(n,"[]")?n.slice(0,-2):n}function df(n,e,t){return n?n.concat(e).map(function(r,s){return r=Hp(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function xy(n){return _e.isArray(n)&&!n.some(ec)}const by=_e.toFlatObject(_e,{},null,function(e){return/^is[A-Z]/.test(e)});function wy(n){return n&&_e.isFunction(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator]}function va(n,e,t){if(!_e.isObject(n))throw new TypeError("target must be an object");e=e||new(yy||FormData),t=_e.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,d){return!_e.isUndefined(d[m])});const i=t.metaTokens,r=t.visitor||u,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&wy(e);if(!_e.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(_e.isDate(g))return g.toISOString();if(!l&&_e.isBlob(g))throw new $e("Blob is not supported. Use a Buffer instead.");return _e.isArrayBuffer(g)||_e.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,m,d){let _=g;if(g&&!d&&typeof g=="object"){if(_e.endsWith(m,"{}"))m=i?m:m.slice(0,-2),g=JSON.stringify(g);else if(_e.isArray(g)&&xy(g)||_e.isFileList(g)||_e.endsWith(m,"[]")&&(_=_e.toArray(g)))return m=Hp(m),_.forEach(function(M,b){!(_e.isUndefined(M)||M===null)&&e.append(o===!0?df([m],b,s):o===null?m:m+"[]",c(M))}),!1}return ec(g)?!0:(e.append(df(d,m,s),c(g)),!1)}const f=[],h=Object.assign(by,{defaultVisitor:u,convertValue:c,isVisitable:ec});function p(g,m){if(!_e.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(g),_e.forEach(g,function(_,w){(!(_e.isUndefined(_)||_===null)&&r.call(e,_,_e.isString(w)?w.trim():w,m,h))===!0&&p(_,m?m.concat(w):[w])}),f.pop()}}if(!_e.isObject(n))throw new TypeError("data must be an object");return p(n),e}function pf(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Jc(n,e){this._pairs=[],n&&va(n,this,e)}const Vp=Jc.prototype;Vp.append=function(e,t){this._pairs.push([e,t])};Vp.toString=function(e){const t=e?function(i){return e.call(this,i,pf)}:pf;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function My(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Gp(n,e,t){if(!e)return n;const i=t&&t.encode||My,r=t&&t.serialize;let s;if(r?s=r(e,t):s=_e.isURLSearchParams(e)?e.toString():new Jc(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class mf{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_e.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Wp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Sy=typeof URLSearchParams<"u"?URLSearchParams:Jc,Ey=FormData,Ty=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),jn={isBrowser:!0,classes:{URLSearchParams:Sy,FormData:Ey,Blob},isStandardBrowserEnv:Ty,protocols:["http","https","file","blob","url","data"]};function Ay(n,e){return va(n,new jn.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,s){return jn.isNode&&_e.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Cy(n){return _e.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Py(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function jp(n){function e(t,i,r,s){let o=t[s++];const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&_e.isArray(r)?r.length:o,l?(_e.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!_e.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&_e.isArray(r[o])&&(r[o]=Py(r[o])),!a)}if(_e.isFormData(n)&&_e.isFunction(n.entries)){const t={};return _e.forEachEntry(n,(i,r)=>{e(Cy(i),r,t,0)}),t}return null}function Ly(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new $e("Request failed with status code "+t.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const Ry=jn.isStandardBrowserEnv?function(){return{write:function(t,i,r,s,o,a){const l=[];l.push(t+"="+encodeURIComponent(i)),_e.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),_e.isString(s)&&l.push("path="+s),_e.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){const i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Dy(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Oy(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}function $p(n,e){return n&&!Dy(e)?Oy(n,e):e}const Iy=jn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(o){const a=_e.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function Vs(n,e,t){$e.call(this,n==null?"canceled":n,$e.ERR_CANCELED,e,t),this.name="CanceledError"}_e.inherits(Vs,$e,{__CANCEL__:!0});function Ny(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}const Fy=_e.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ky=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&Fy[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},gf=Symbol("internals"),qp=Symbol("defaults");function ms(n){return n&&String(n).trim().toLowerCase()}function zo(n){return n===!1||n==null?n:_e.isArray(n)?n.map(zo):String(n)}function zy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}function _f(n,e,t,i){if(_e.isFunction(i))return i.call(this,e,t);if(!!_e.isString(e)){if(_e.isString(i))return e.indexOf(i)!==-1;if(_e.isRegExp(i))return i.test(e)}}function By(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Uy(n,e){const t=_e.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}function ts(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}function nn(n,e){n&&this.set(n),this[qp]=e||null}Object.assign(nn.prototype,{set:function(n,e,t){const i=this;function r(s,o,a){const l=ms(o);if(!l)throw new Error("header name must be a non-empty string");const c=ts(i,l);c&&a!==!0&&(i[c]===!1||a===!1)||(i[c||o]=zo(s))}return _e.isPlainObject(n)?_e.forEach(n,(s,o)=>{r(s,o,e)}):r(e,n,t),this},get:function(n,e){if(n=ms(n),!n)return;const t=ts(this,n);if(t){const i=this[t];if(!e)return i;if(e===!0)return zy(i);if(_e.isFunction(e))return e.call(this,i,t);if(_e.isRegExp(e))return e.exec(i);throw new TypeError("parser must be boolean|regexp|function")}},has:function(n,e){if(n=ms(n),n){const t=ts(this,n);return!!(t&&(!e||_f(this,this[t],t,e)))}return!1},delete:function(n,e){const t=this;let i=!1;function r(s){if(s=ms(s),s){const o=ts(t,s);o&&(!e||_f(t,t[o],o,e))&&(delete t[o],i=!0)}}return _e.isArray(n)?n.forEach(r):r(n),i},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(n){const e=this,t={};return _e.forEach(this,(i,r)=>{const s=ts(t,r);if(s){e[s]=zo(i),delete e[r];return}const o=n?By(r):String(r).trim();o!==r&&delete e[r],e[o]=zo(i),t[o]=!0}),this},toJSON:function(n){const e=Object.create(null);return _e.forEach(Object.assign({},this[qp]||null,this),(t,i)=>{t==null||t===!1||(e[i]=n&&_e.isArray(t)?t.join(", "):t)}),e}});Object.assign(nn,{from:function(n){return _e.isString(n)?new this(ky(n)):n instanceof this?n:new this(n)},accessor:function(n){const t=(this[gf]=this[gf]={accessors:{}}).accessors,i=this.prototype;function r(s){const o=ms(s);t[o]||(Uy(i,s),t[o]=!0)}return _e.isArray(n)?n.forEach(r):r(n),this}});nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);_e.freezeMethods(nn.prototype);_e.freezeMethods(nn);function Hy(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),t[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function vf(n,e){let t=0;const i=Hy(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-t,l=i(a),c=s<=o;t=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0};u[e?"download":"upload"]=!0,n(u)}}function yf(n){return new Promise(function(t,i){let r=n.data;const s=nn.from(n.headers).normalize(),o=n.responseType;let a;function l(){n.cancelToken&&n.cancelToken.unsubscribe(a),n.signal&&n.signal.removeEventListener("abort",a)}_e.isFormData(r)&&jn.isStandardBrowserEnv&&s.setContentType(!1);let c=new XMLHttpRequest;if(n.auth){const p=n.auth.username||"",g=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+g))}const u=$p(n.baseURL,n.url);c.open(n.method.toUpperCase(),Gp(u,n.params,n.paramsSerializer),!0),c.timeout=n.timeout;function f(){if(!c)return;const p=nn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:n,request:c};Ly(function(_){t(_),l()},function(_){i(_),l()},m),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){!c||(i(new $e("Request aborted",$e.ECONNABORTED,n,c)),c=null)},c.onerror=function(){i(new $e("Network Error",$e.ERR_NETWORK,n,c)),c=null},c.ontimeout=function(){let g=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const m=n.transitional||Wp;n.timeoutErrorMessage&&(g=n.timeoutErrorMessage),i(new $e(g,m.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,n,c)),c=null},jn.isStandardBrowserEnv){const p=(n.withCredentials||Iy(u))&&n.xsrfCookieName&&Ry.read(n.xsrfCookieName);p&&s.set(n.xsrfHeaderName,p)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&_e.forEach(s.toJSON(),function(g,m){c.setRequestHeader(m,g)}),_e.isUndefined(n.withCredentials)||(c.withCredentials=!!n.withCredentials),o&&o!=="json"&&(c.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&c.addEventListener("progress",vf(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",vf(n.onUploadProgress)),(n.cancelToken||n.signal)&&(a=p=>{!c||(i(!p||p.type?new Vs(null,n,c):p),c.abort(),c=null)},n.cancelToken&&n.cancelToken.subscribe(a),n.signal&&(n.signal.aborted?a():n.signal.addEventListener("abort",a)));const h=Ny(u);if(h&&jn.protocols.indexOf(h)===-1){i(new $e("Unsupported protocol "+h+":",$e.ERR_BAD_REQUEST,n));return}c.send(r||null)})}const xf={http:yf,xhr:yf},bf={getAdapter:n=>{if(_e.isString(n)){const e=xf[n];if(!n)throw Error(_e.hasOwnProp(n)?`Adapter '${n}' is not available in the build`:`Can not resolve adapter '${n}'`);return e}if(!_e.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:xf},Vy={"Content-Type":"application/x-www-form-urlencoded"};function Gy(){let n;return typeof XMLHttpRequest<"u"?n=bf.getAdapter("xhr"):typeof process<"u"&&_e.kindOf(process)==="process"&&(n=bf.getAdapter("http")),n}function Wy(n,e,t){if(_e.isString(n))try{return(e||JSON.parse)(n),_e.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Kr={transitional:Wp,adapter:Gy(),transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=_e.isObject(e);if(s&&_e.isHTMLForm(e)&&(e=new FormData(e)),_e.isFormData(e))return r&&r?JSON.stringify(jp(e)):e;if(_e.isArrayBuffer(e)||_e.isBuffer(e)||_e.isStream(e)||_e.isFile(e)||_e.isBlob(e))return e;if(_e.isArrayBufferView(e))return e.buffer;if(_e.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Ay(e,this.formSerializer).toString();if((a=_e.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return va(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),Wy(e)):e}],transformResponse:[function(e){const t=this.transitional||Kr.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&_e.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jn.classes.FormData,Blob:jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};_e.forEach(["delete","get","head"],function(e){Kr.headers[e]={}});_e.forEach(["post","put","patch"],function(e){Kr.headers[e]=_e.merge(Vy)});function Va(n,e){const t=this||Kr,i=e||t,r=nn.from(i.headers);let s=i.data;return _e.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Xp(n){return!!(n&&n.__CANCEL__)}function Ga(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Vs}function wf(n){return Ga(n),n.headers=nn.from(n.headers),n.data=Va.call(n,n.transformRequest),(n.adapter||Kr.adapter)(n).then(function(i){return Ga(n),i.data=Va.call(n,n.transformResponse,i),i.headers=nn.from(i.headers),i},function(i){return Xp(i)||(Ga(n),i&&i.response&&(i.response.data=Va.call(n,n.transformResponse,i.response),i.response.headers=nn.from(i.response.headers))),Promise.reject(i)})}function Os(n,e){e=e||{};const t={};function i(c,u){return _e.isPlainObject(c)&&_e.isPlainObject(u)?_e.merge(c,u):_e.isPlainObject(u)?_e.merge({},u):_e.isArray(u)?u.slice():u}function r(c){if(_e.isUndefined(e[c])){if(!_e.isUndefined(n[c]))return i(void 0,n[c])}else return i(n[c],e[c])}function s(c){if(!_e.isUndefined(e[c]))return i(void 0,e[c])}function o(c){if(_e.isUndefined(e[c])){if(!_e.isUndefined(n[c]))return i(void 0,n[c])}else return i(void 0,e[c])}function a(c){if(c in e)return i(n[c],e[c]);if(c in n)return i(void 0,n[c])}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return _e.forEach(Object.keys(n).concat(Object.keys(e)),function(u){const f=l[u]||r,h=f(u);_e.isUndefined(h)&&f!==a||(t[u]=h)}),t}const Yp="1.1.3",Qc={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Qc[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Mf={};Qc.transitional=function(e,t,i){function r(s,o){return"[Axios v"+Yp+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new $e(r(o," has been removed"+(t?" in "+t:"")),$e.ERR_DEPRECATED);return t&&!Mf[o]&&(Mf[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function jy(n,e,t){if(typeof n!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new $e("option "+s+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const tc={assertOptions:jy,validators:Qc},ii=tc.validators;class Xi{constructor(e){this.defaults=e,this.interceptors={request:new mf,response:new mf}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Os(this.defaults,t);const{transitional:i,paramsSerializer:r}=t;i!==void 0&&tc.assertOptions(i,{silentJSONParsing:ii.transitional(ii.boolean),forcedJSONParsing:ii.transitional(ii.boolean),clarifyTimeoutError:ii.transitional(ii.boolean)},!1),r!==void 0&&tc.assertOptions(r,{encode:ii.function,serialize:ii.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const s=t.headers&&_e.merge(t.headers.common,t.headers[t.method]);s&&_e.forEach(["delete","get","head","post","put","patch","common"],function(g){delete t.headers[g]}),t.headers=new nn(t.headers,s);const o=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(t)===!1||(a=a&&g.synchronous,o.unshift(g.fulfilled,g.rejected))});const l=[];this.interceptors.response.forEach(function(g){l.push(g.fulfilled,g.rejected)});let c,u=0,f;if(!a){const p=[wf.bind(this),void 0];for(p.unshift.apply(p,o),p.push.apply(p,l),f=p.length,c=Promise.resolve(t);u<f;)c=c.then(p[u++],p[u++]);return c}f=o.length;let h=t;for(u=0;u<f;){const p=o[u++],g=o[u++];try{h=p(h)}catch(m){g.call(this,m);break}}try{c=wf.call(this,h)}catch(p){return Promise.reject(p)}for(u=0,f=l.length;u<f;)c=c.then(l[u++],l[u++]);return c}getUri(e){e=Os(this.defaults,e);const t=$p(e.baseURL,e.url);return Gp(t,e.params,e.paramsSerializer)}}_e.forEach(["delete","get","head","options"],function(e){Xi.prototype[e]=function(t,i){return this.request(Os(i||{},{method:e,url:t,data:(i||{}).data}))}});_e.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Os(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Xi.prototype[e]=t(),Xi.prototype[e+"Form"]=t(!0)});class eu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Vs(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new eu(function(r){e=r}),cancel:e}}}function $y(n){return function(t){return n.apply(null,t)}}function qy(n){return _e.isObject(n)&&n.isAxiosError===!0}function Kp(n){const e=new Xi(n),t=Op(Xi.prototype.request,e);return _e.extend(t,Xi.prototype,e,{allOwnKeys:!0}),_e.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Kp(Os(n,r))},t}const It=Kp(Kr);It.Axios=Xi;It.CanceledError=Vs;It.CancelToken=eu;It.isCancel=Xp;It.VERSION=Yp;It.toFormData=va;It.AxiosError=$e;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=$y;It.isAxiosError=qy;It.formToJSON=n=>jp(_e.isHTMLForm(n)?new FormData(n):n);const Zp="Z2hwX0tWdWlqRkdaNjMwN2dkTXptbUhVNWp3cGFJS05WcjFhYlRYUA==";async function Xy(n,e,t,i){let r=atob(Zp),s={nodes:Yy(n),displayName:e,userId:t,graphType:i,date:new Date().toISOString()},o=`${t}-${i}.json`,a=await Ky(o);return console.log(a),await It({method:"PUT",url:`https://api.github.com/repos/artistconstellations-db/database/contents/${o}`,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${r}`},data:{message:`Adding ${i} for ${e}`,sha:a,content:btoa(JSON.stringify(s))}}),o}function Yy(n){let e=[];return n.forEach(t=>{e.push({name:t.name,id:t.id,genres:t.genres,img:t.img,popularity:t.popularity})}),e}async function Ky(n){let e=atob(Zp);return await It({method:"GET",url:`https://api.github.com/repos/artistconstellations-db/database/contents/${n}`,headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e}`}}).catch(t=>(console.log(`Error fetching file: ${t}`),null)).then(t=>(console.log(t.data),t.data.sha))}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="145",Sn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zy=0,Sf=1,Jy=2,Jp=1,Qy=2,gs=3,Br=0,Wt=1,mi=2,yi=0,Fr=1,Ef=2,Tf=3,Af=4,ex=5,Ar=100,tx=101,nx=102,Cf=103,Pf=104,ix=200,rx=201,sx=202,ox=203,Qp=204,em=205,ax=206,lx=207,cx=208,ux=209,fx=210,hx=0,dx=1,px=2,nc=3,mx=4,gx=5,_x=6,vx=7,nu=0,yx=1,xx=2,$n=0,bx=1,wx=2,Mx=3,Sx=4,Ex=5,tm=300,Ur=301,Hr=302,ic=303,rc=304,ya=306,sc=1e3,fn=1001,oc=1002,zt=1003,Lf=1004,Rf=1005,Gt=1006,Tx=1007,xa=1008,Zi=1009,Ax=1010,Cx=1011,nm=1012,Px=1013,Hi=1014,Vi=1015,Is=1016,Lx=1017,Rx=1018,kr=1020,Dx=1021,Ox=1022,Cn=1023,Ix=1024,Nx=1025,Yi=1026,Vr=1027,Fx=1028,kx=1029,zx=1030,Bx=1031,Ux=1033,Wa=33776,ja=33777,$a=33778,qa=33779,Df=35840,Of=35841,If=35842,Nf=35843,Hx=36196,Ff=37492,kf=37496,zf=37808,Bf=37809,Uf=37810,Hf=37811,Vf=37812,Gf=37813,Wf=37814,jf=37815,$f=37816,qf=37817,Xf=37818,Yf=37819,Kf=37820,Zf=37821,Jf=36492,Ji=3e3,lt=3001,Vx=3200,Gx=3201,im=0,Wx=1,Hn="srgb",Gi="srgb-linear",Xa=7680,jx=519,ac=35044,Qf="300 es",lc=1035;class _n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,eh=180/Math.PI;function xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function $x(n,e){return(n%e+e)%e}function Ka(n,e,t){return(1-t)*n+t*e}function th(n){return(n&n-1)===0&&n!==0}function cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(){en.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],m=r[0],d=r[3],_=r[6],w=r[1],M=r[4],b=r[7],y=r[2],A=r[5],O=r[8];return s[0]=o*m+a*w+l*y,s[3]=o*d+a*M+l*A,s[6]=o*_+a*b+l*O,s[1]=c*m+u*w+f*y,s[4]=c*d+u*M+f*A,s[7]=c*_+u*b+f*O,s[2]=h*m+p*w+g*y,s[5]=h*d+p*M+g*A,s[8]=h*_+p*b+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(r*c-u*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function rm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Za={[Hn]:{[Gi]:Ki},[Gi]:{[Hn]:Bo}},sn={legacyMode:!0,get workingColorSpace(){return Gi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Za[e]&&Za[e][t]!==void 0){const i=Za[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},on={h:0,s:0,l:0},to={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function no(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Gi){return this.r=e,this.g=t,this.b=i,sn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Gi){if(e=$x(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return sn.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,sn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,sn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,sn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Hn){const i=sm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return sn.fromWorkingColorSpace(no(this,dt),e),Et(dt.r*255,0,255)<<16^Et(dt.g*255,0,255)<<8^Et(dt.b*255,0,255)<<0}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gi){sn.fromWorkingColorSpace(no(this,dt),t);const i=dt.r,r=dt.g,s=dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Gi){return sn.fromWorkingColorSpace(no(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Hn){return sn.fromWorkingColorSpace(no(this,dt),e),e!==Hn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=i,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(to);const i=Ka(on.h,to.h,t),r=Ka(on.s,to.s,t),s=Ka(on.l,to.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=sm;let ar;class om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=Ns("canvas")),ar.width=e.width,ar.height=e.height;const i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ki(t[i]/255)*255):t[i]=Ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class am{constructor(e=null){this.isSource=!0,this.uuid=xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qa(r[o].image)):s.push(Qa(r[o]))}else s=Qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?om.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class $t extends _n{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=fn,r=fn,s=Gt,o=xa,a=Cn,l=Zi,c=1,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=xi(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case oc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case oc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=tm;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(p+1)/2,y=(_+1)/2,A=(u+h)/4,O=(f+m)/4,x=(g+d)/4;return M>b&&M>y?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=O/i):b>y?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=x/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=O/s,r=x/s),this.set(i,r,s,t),this}let w=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(f-m)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends _n{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new am(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lm extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xx extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==g){let d=1-a;const _=l*h+c*p+u*g+f*m,w=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const y=Math.sqrt(M),A=Math.atan2(y,_*w);d=Math.sin(d*A)/y,a=Math.sin(a*A)/y}const b=a*w;if(l=l*d+h*b,c=c*d+p*b,u=u*d+g*b,f=f*d+m*b,d===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new B,nh=new gn;class tr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pi)}else i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox),tl.applyMatrix4(e.matrixWorld),this.union(tl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),io.subVectors(this.max,ns),lr.subVectors(e.a,ns),cr.subVectors(e.b,ns),ur.subVectors(e.c,ns),ri.subVectors(cr,lr),si.subVectors(ur,cr),Li.subVectors(lr,ur);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Li.z,Li.y,ri.z,0,-ri.x,si.z,0,-si.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-si.y,si.x,0,-Li.y,Li.x,0];return!nl(t,lr,cr,ur,io)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,lr,cr,ur,io))?!1:(ro.crossVectors(ri,si),t=[ro.x,ro.y,ro.z],nl(t,lr,cr,ur,io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],Pi=new B,tl=new tr,lr=new B,cr=new B,ur=new B,ri=new B,si=new B,Li=new B,ns=new B,io=new B,ro=new B,Ri=new B;function nl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ri.fromArray(n,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yx=new tr,ih=new B,so=new B,il=new B;class ba{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(il.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?so.set(0,0,1).multiplyScalar(e.radius):so.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ih.copy(e.center).add(so)),this.expandByPoint(ih.copy(e.center).sub(so)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new B,rl=new B,oo=new B,oi=new B,sl=new B,ao=new B,ol=new B;class iu{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.direction).multiplyScalar(t).add(this.origin),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){rl.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(oo),a=oi.dot(this.direction),l=-oi.dot(oo),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(oo).multiplyScalar(h).add(rl),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){sl.subVectors(t,e),ao.subVectors(i,e),ol.crossVectors(sl,ao);let o=this.direction.dot(ol),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(ao.crossVectors(oi,ao));if(l<0)return null;const c=a*this.direction.dot(sl.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(ol);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kx,e,Zx)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),ai.crossVectors(i,Ht),ai.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),ai.crossVectors(i,Ht)),ai.normalize(),lo.crossVectors(Ht,ai),r[0]=ai.x,r[4]=lo.x,r[8]=Ht.x,r[1]=ai.y,r[5]=lo.y,r[9]=Ht.y,r[2]=ai.z,r[6]=lo.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],m=i[6],d=i[10],_=i[14],w=i[3],M=i[7],b=i[11],y=i[15],A=r[0],O=r[4],x=r[8],C=r[12],I=r[1],q=r[5],ne=r[9],G=r[13],D=r[2],F=r[6],U=r[10],re=r[14],Z=r[3],$=r[7],k=r[11],ee=r[15];return s[0]=o*A+a*I+l*D+c*Z,s[4]=o*O+a*q+l*F+c*$,s[8]=o*x+a*ne+l*U+c*k,s[12]=o*C+a*G+l*re+c*ee,s[1]=u*A+f*I+h*D+p*Z,s[5]=u*O+f*q+h*F+p*$,s[9]=u*x+f*ne+h*U+p*k,s[13]=u*C+f*G+h*re+p*ee,s[2]=g*A+m*I+d*D+_*Z,s[6]=g*O+m*q+d*F+_*$,s[10]=g*x+m*ne+d*U+_*k,s[14]=g*C+m*G+d*re+_*ee,s[3]=w*A+M*I+b*D+y*Z,s[7]=w*O+M*q+b*F+y*$,s[11]=w*x+M*ne+b*U+y*k,s[15]=w*C+M*G+b*re+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+m*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+d*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],w=f*d*c-m*h*c+m*l*p-a*d*p-f*l*_+a*h*_,M=g*h*c-u*d*c-g*l*p+o*d*p+u*l*_-o*h*_,b=u*m*c-g*f*c+g*a*p-o*m*p-u*a*_+o*f*_,y=g*f*l-u*m*l-g*a*h+o*m*h+u*a*d-o*f*d,A=t*w+i*M+r*b+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/A;return e[0]=w*O,e[1]=(m*h*s-f*d*s-m*r*p+i*d*p+f*r*_-i*h*_)*O,e[2]=(a*d*s-m*l*s+m*r*c-i*d*c-a*r*_+i*l*_)*O,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*O,e[4]=M*O,e[5]=(u*d*s-g*h*s+g*r*p-t*d*p-u*r*_+t*h*_)*O,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*O,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*O,e[8]=b*O,e[9]=(g*f*s-u*m*s-g*i*p+t*m*p+u*i*_-t*f*_)*O,e[10]=(o*m*s-g*a*s+g*i*c-t*m*c-o*i*_+t*a*_)*O,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*O,e[12]=y*O,e[13]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*d+t*f*d)*O,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*d-t*a*d)*O,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,m=o*u,d=o*f,_=a*f,w=l*c,M=l*u,b=l*f,y=i.x,A=i.y,O=i.z;return r[0]=(1-(m+_))*y,r[1]=(p+b)*y,r[2]=(g-M)*y,r[3]=0,r[4]=(p-b)*A,r[5]=(1-(h+_))*A,r[6]=(d+w)*A,r[7]=0,r[8]=(g+M)*O,r[9]=(d-w)*O,r[10]=(1-(h+m))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fr.set(r[0],r[1],r[2]).length();const o=fr.set(r[4],r[5],r[6]).length(),a=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fr=new B,an=new it,Kx=new B(0,0,0),Zx=new B(1,1,1),ai=new B,lo=new B,Ht=new B,rh=new it,sh=new gn;class Gs{constructor(e=0,t=0,i=0,r=Gs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Gs.DefaultOrder="XYZ";Gs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jx=0;const oh=new B,hr=new gn,Nn=new it,co=new B,is=new B,Qx=new B,eb=new gn,ah=new B(1,0,0),lh=new B(0,1,0),ch=new B(0,0,1),tb={type:"added"},uh={type:"removed"};class bt extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DefaultUp.clone();const e=new B,t=new Gs,i=new gn,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new en}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DefaultMatrixWorldAutoUpdate,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?co.copy(e):co.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(is,co,this.up):Nn.lookAt(co,is,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Nn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DefaultUp=new B(0,1,0);bt.DefaultMatrixAutoUpdate=!0;bt.DefaultMatrixWorldAutoUpdate=!0;const ln=new B,Fn=new B,al=new B,kn=new B,dr=new B,pr=new B,fh=new B,ll=new B,cl=new B,ul=new B;class An{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Fn.subVectors(i,t),al.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Fn),l=ln.dot(al),c=Fn.dot(Fn),u=Fn.dot(al),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,kn),l.set(0,0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Fn.subVectors(e,t),ln.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),ln.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return An.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;dr.subVectors(r,i),pr.subVectors(s,i),ll.subVectors(e,i);const l=dr.dot(ll),c=pr.dot(ll);if(l<=0&&c<=0)return t.copy(i);cl.subVectors(e,r);const u=dr.dot(cl),f=pr.dot(cl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(dr,o);ul.subVectors(e,s);const p=dr.dot(ul),g=pr.dot(ul);if(g>=0&&p<=g)return t.copy(s);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(pr,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return fh.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(fh,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(i).addScaledVector(dr,o).addScaledVector(pr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nb=0;class nr extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Fr,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qp,this.blendDst=em,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class su extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new B,uo=new be;class rn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class cm extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class um extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ib=0;const Kt=new it,fl=new bt,mr=new B,Vt=new tr,rs=new tr,_t=new B;class Nt extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?um:cm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new en().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Vt.min,rs.min),Vt.expandByPoint(_t),_t.addVectors(Vt.max,rs.max),Vt.expandByPoint(_t)):(Vt.expandByPoint(rs.min),Vt.expandByPoint(rs.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(mr.fromBufferAttribute(e,c),_t.add(mr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new B,u[I]=new B;const f=new B,h=new B,p=new B,g=new be,m=new be,d=new be,_=new B,w=new B;function M(I,q,ne){f.fromArray(r,I*3),h.fromArray(r,q*3),p.fromArray(r,ne*3),g.fromArray(o,I*2),m.fromArray(o,q*2),d.fromArray(o,ne*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const G=1/(m.x*d.y-d.x*m.y);!isFinite(G)||(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(G),w.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(G),c[I].add(_),c[q].add(_),c[ne].add(_),u[I].add(w),u[q].add(w),u[ne].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,q=b.length;I<q;++I){const ne=b[I],G=ne.start,D=ne.count;for(let F=G,U=G+D;F<U;F+=3)M(i[F+0],i[F+1],i[F+2])}const y=new B,A=new B,O=new B,x=new B;function C(I){O.fromArray(s,I*3),x.copy(O);const q=c[I];y.copy(q),y.sub(O.multiplyScalar(O.dot(q))).normalize(),A.crossVectors(x,q);const G=A.dot(u[I])<0?-1:1;l[I*4]=y.x,l[I*4+1]=y.y,l[I*4+2]=y.z,l[I*4+3]=G}for(let I=0,q=b.length;I<q;++I){const ne=b[I],G=ne.start,D=ne.count;for(let F=G,U=G+D;F<U;F+=3)C(i[F+0]),C(i[F+1]),C(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new it,gr=new iu,hl=new ba,li=new B,ci=new B,ui=new B,dl=new B,pl=new B,ml=new B,fo=new B,ho=new B,po=new B,mo=new be,go=new be,_o=new be,gl=new B,vo=new B;class dn extends bt{constructor(e=new Nt,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),e.ray.intersectsSphere(hl)===!1)||(hh.copy(s).invert(),gr.copy(e.ray).applyMatrix4(hh),i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,p=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,A=b;y<A;y+=3){const O=a.getX(y),x=a.getX(y+1),C=a.getX(y+2);o=yo(this,w,e,gr,l,c,u,f,h,O,x,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const M=a.getX(_),b=a.getX(_+1),y=a.getX(_+2);o=yo(this,r,e,gr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=r[_.materialIndex],M=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=M,A=b;y<A;y+=3){const O=y,x=y+1,C=y+2;o=yo(this,w,e,gr,l,c,u,f,h,O,x,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const M=_,b=_+1,y=_+2;o=yo(this,r,e,gr,l,c,u,f,h,M,b,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function rb(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==mi,a),l===null)return null;vo.copy(a),vo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vo);return c<t.near||c>t.far?null:{distance:c,point:vo.clone(),object:n}}function yo(n,e,t,i,r,s,o,a,l,c,u,f){li.fromBufferAttribute(r,c),ci.fromBufferAttribute(r,u),ui.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){fo.set(0,0,0),ho.set(0,0,0),po.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const d=h[g],_=s[g];d!==0&&(dl.fromBufferAttribute(_,c),pl.fromBufferAttribute(_,u),ml.fromBufferAttribute(_,f),o?(fo.addScaledVector(dl,d),ho.addScaledVector(pl,d),po.addScaledVector(ml,d)):(fo.addScaledVector(dl.sub(li),d),ho.addScaledVector(pl.sub(ci),d),po.addScaledVector(ml.sub(ui),d)))}li.add(fo),ci.add(ho),ui.add(po)}n.isSkinnedMesh&&(n.boneTransform(c,li),n.boneTransform(u,ci),n.boneTransform(f,ui));const p=rb(n,e,t,i,li,ci,ui,gl);if(p){a&&(mo.fromBufferAttribute(a,c),go.fromBufferAttribute(a,u),_o.fromBufferAttribute(a,f),p.uv=An.getUV(gl,li,ci,ui,mo,go,_o,new be)),l&&(mo.fromBufferAttribute(l,c),go.fromBufferAttribute(l,u),_o.fromBufferAttribute(l,f),p.uv2=An.getUV(gl,li,ci,ui,mo,go,_o,new be));const g={a:c,b:u,c:f,normal:new B,materialIndex:0};An.getNormal(li,ci,ui,g.normal),p.face=g}return p}class Ws extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function g(m,d,_,w,M,b,y,A,O,x,C){const I=b/O,q=y/x,ne=b/2,G=y/2,D=A/2,F=O+1,U=x+1;let re=0,Z=0;const $=new B;for(let k=0;k<U;k++){const ee=k*q-G;for(let Q=0;Q<F;Q++){const ue=Q*I-ne;$[m]=ue*w,$[d]=ee*M,$[_]=D,c.push($.x,$.y,$.z),$[m]=0,$[d]=0,$[_]=A>0?1:-1,u.push($.x,$.y,$.z),f.push(Q/O),f.push(1-k/x),re+=1}}for(let k=0;k<x;k++)for(let ee=0;ee<O;ee++){const Q=h+ee+F*k,ue=h+ee+F*(k+1),ce=h+(ee+1)+F*(k+1),se=h+(ee+1)+F*k;l.push(Q,ue,se),l.push(ue,ce,se),Z+=6}a.addGroup(p,Z,C),p+=Z,h+=re}}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function St(n){const e={};for(let t=0;t<n.length;t++){const i=Gr(n[t]);for(const r in i)e[r]=i[r]}return e}function sb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const fm={clone:Gr,merge:St};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hm extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends hm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=90,vr=1;class lb extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Jt(_r,vr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new B(1,0,0)),this.add(r);const s=new Jt(_r,vr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new B(-1,0,0)),this.add(s);const o=new Jt(_r,vr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new B(0,1,0)),this.add(o);const a=new Jt(_r,vr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new B(0,-1,0)),this.add(a);const l=new Jt(_r,vr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new B(0,0,1)),this.add(l);const c=new Jt(_r,vr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new B(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class dm extends $t{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cb extends Mi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ws(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:yi});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===xa&&(t.minFilter=Gt),new lb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const _l=new B,ub=new B,fb=new en;class pi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_l.subVectors(i,t).cross(ub.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(_l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fb.getNormalMatrix(e),r=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new ba,xo=new B;class ou{constructor(e=new pi,t=new pi,i=new pi,r=new pi,s=new pi,o=new pi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],p=i[9],g=i[10],m=i[11],d=i[12],_=i[13],w=i[14],M=i[15];return t[0].setComponents(a-r,f-l,m-h,M-d).normalize(),t[1].setComponents(a+r,f+l,m+h,M+d).normalize(),t[2].setComponents(a+s,f+c,m+p,M+_).normalize(),t[3].setComponents(a-s,f-c,m-p,M-_).normalize(),t[4].setComponents(a-o,f-u,m-g,M-w).normalize(),t[5].setComponents(a+o,f+u,m+g,M+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class au extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const w=_*h-o;for(let M=0;M<c;M++){const b=M*f-s;g.push(b,-w,0),m.push(0,0,1),d.push(M/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const M=w+c*_,b=w+c*(_+1),y=w+1+c*(_+1),A=w+1+c*_;p.push(M,b,A),p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(m,3)),this.setAttribute("uv",new ut(d,2))}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb="vec3 transformed = vec3( position );",xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,wb=`#ifdef USE_IRIDESCENCE
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
#endif`,Mb=`#ifdef USE_BUMPMAP
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Db=`#define PI 3.141592653589793
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
}`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ub=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,tw=`uniform bool receiveShadow;
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
#endif`,nw=`#if defined( USE_ENVMAP )
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
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ow=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,aw=`PhysicalMaterial material;
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
#endif`,lw=`struct PhysicalMaterial {
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
}`,cw=`
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mw=`#ifdef USE_MORPHNORMALS
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
#endif`,Sw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
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
#endif`,Tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Aw=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Iw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$w=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qw=`float getShadowMask() {
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
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,Kw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n1=`#ifdef USE_TRANSMISSION
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
#endif`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,s1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,o1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,a1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,l1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,c1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#include <envmap_common_pars_fragment>
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
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,T1=`#define LAMBERT
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
}`,A1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,R1=`#define PHONG
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
}`,D1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,I1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,F1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,H1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:db,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:vb,begin_vertex:yb,beginnormal_vertex:xb,bsdfs:bb,iridescence_fragment:wb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:Eb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Cb,color_pars_fragment:Pb,color_pars_vertex:Lb,color_vertex:Rb,common:Db,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Nb,displacementmap_vertex:Fb,emissivemap_fragment:kb,emissivemap_pars_fragment:zb,encodings_fragment:Bb,encodings_pars_fragment:Ub,envmap_fragment:Hb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:Gb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:nw,envmap_vertex:jb,fog_vertex:$b,fog_pars_vertex:qb,fog_fragment:Xb,fog_pars_fragment:Yb,gradientmap_pars_fragment:Kb,lightmap_fragment:Zb,lightmap_pars_fragment:Jb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:ow,lights_physical_fragment:aw,lights_physical_pars_fragment:lw,lights_fragment_begin:cw,lights_fragment_maps:uw,lights_fragment_end:fw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:dw,logdepthbuf_pars_vertex:pw,logdepthbuf_vertex:mw,map_fragment:gw,map_pars_fragment:_w,map_particle_fragment:vw,map_particle_pars_fragment:yw,metalnessmap_fragment:xw,metalnessmap_pars_fragment:bw,morphcolor_vertex:ww,morphnormal_vertex:Mw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Ew,normal_fragment_begin:Tw,normal_fragment_maps:Aw,normal_pars_fragment:Cw,normal_pars_vertex:Pw,normal_vertex:Lw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Dw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:Iw,iridescence_pars_fragment:Nw,output_fragment:Fw,packing:kw,premultiplied_alpha_fragment:zw,project_vertex:Bw,dithering_fragment:Uw,dithering_pars_fragment:Hw,roughnessmap_fragment:Vw,roughnessmap_pars_fragment:Gw,shadowmap_pars_fragment:Ww,shadowmap_pars_vertex:jw,shadowmap_vertex:$w,shadowmask_pars_fragment:qw,skinbase_vertex:Xw,skinning_pars_vertex:Yw,skinning_vertex:Kw,skinnormal_vertex:Zw,specularmap_fragment:Jw,specularmap_pars_fragment:Qw,tonemapping_fragment:e1,tonemapping_pars_fragment:t1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:o1,uv2_pars_fragment:a1,uv2_pars_vertex:l1,uv2_vertex:c1,worldpos_vertex:u1,background_vert:f1,background_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distanceRGBA_vert:_1,distanceRGBA_frag:v1,equirect_vert:y1,equirect_frag:x1,linedashed_vert:b1,linedashed_frag:w1,meshbasic_vert:M1,meshbasic_frag:S1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:C1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:R1,meshphong_frag:D1,meshphysical_vert:O1,meshphysical_frag:I1,meshtoon_vert:N1,meshtoon_frag:F1,points_vert:k1,points_frag:z1,shadow_vert:B1,shadow_frag:U1,sprite_vert:H1,sprite_frag:V1},we={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}}},En={basic:{uniforms:St([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:St([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:St([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:St([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:St([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:St([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:St([we.points,we.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:St([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:St([we.common,we.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:St([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:St([we.sprite,we.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:St([we.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:St([we.common,we.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:St([we.lights,we.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};En.physical={uniforms:St([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function G1(n,e,t,i,r,s){const o=new Xe(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(m,d){let _=!1,w=d.isScene===!0?d.background:null;w&&w.isTexture&&(w=e.get(w));const M=n.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ya)?(c===void 0&&(c=new dn(new Ws(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Gr(En.cube.uniforms),vertexShader:En.cube.vertexShader,fragmentShader:En.cube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||f!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new dn(new au(2,2),new Yn({name:"BackgroundMaterial",uniforms:Gr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function W1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function f(D,F,U,re,Z){let $=!1;if(o){const k=m(re,U,F);c!==k&&(c=k,p(c.object)),$=_(D,re,U,Z),$&&w(D,re,U,Z)}else{const k=F.wireframe===!0;(c.geometry!==re.id||c.program!==U.id||c.wireframe!==k)&&(c.geometry=re.id,c.program=U.id,c.wireframe=k,$=!0)}Z!==null&&t.update(Z,34963),($||u)&&(u=!1,x(D,F,U,re),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,F,U){const re=U.wireframe===!0;let Z=a[D.id];Z===void 0&&(Z={},a[D.id]=Z);let $=Z[F.id];$===void 0&&($={},Z[F.id]=$);let k=$[re];return k===void 0&&(k=d(h()),$[re]=k),k}function d(D){const F=[],U=[],re=[];for(let Z=0;Z<r;Z++)F[Z]=0,U[Z]=0,re[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:re,object:D,attributes:{},index:null}}function _(D,F,U,re){const Z=c.attributes,$=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const ce=Z[Q];let se=$[Q];if(se===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ce===void 0||ce.attribute!==se||se&&ce.data!==se.data)return!0;k++}return c.attributesNum!==k||c.index!==re}function w(D,F,U,re){const Z={},$=F.attributes;let k=0;const ee=U.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let ce=$[Q];ce===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const se={};se.attribute=ce,ce&&ce.data&&(se.data=ce.data),Z[Q]=se,k++}c.attributes=Z,c.attributesNum=k,c.index=re}function M(){const D=c.newAttributes;for(let F=0,U=D.length;F<U;F++)D[F]=0}function b(D){y(D,0)}function y(D,F){const U=c.newAttributes,re=c.enabledAttributes,Z=c.attributeDivisors;U[D]=1,re[D]===0&&(n.enableVertexAttribArray(D),re[D]=1),Z[D]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),Z[D]=F)}function A(){const D=c.newAttributes,F=c.enabledAttributes;for(let U=0,re=F.length;U<re;U++)F[U]!==D[U]&&(n.disableVertexAttribArray(U),F[U]=0)}function O(D,F,U,re,Z,$){i.isWebGL2===!0&&(U===5124||U===5125)?n.vertexAttribIPointer(D,F,U,Z,$):n.vertexAttribPointer(D,F,U,re,Z,$)}function x(D,F,U,re){if(i.isWebGL2===!1&&(D.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Z=re.attributes,$=U.getAttributes(),k=F.defaultAttributeValues;for(const ee in $){const Q=$[ee];if(Q.location>=0){let ue=Z[ee];if(ue===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const ce=ue.normalized,se=ue.itemSize,W=t.get(ue);if(W===void 0)continue;const j=W.buffer,oe=W.type,ve=W.bytesPerElement;if(ue.isInterleavedBufferAttribute){const me=ue.data,Ce=me.stride,L=ue.offset;if(me.isInstancedInterleavedBuffer){for(let v=0;v<Q.locationSize;v++)y(Q.location+v,me.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let v=0;v<Q.locationSize;v++)b(Q.location+v);n.bindBuffer(34962,j);for(let v=0;v<Q.locationSize;v++)O(Q.location+v,se/Q.locationSize,oe,ce,Ce*ve,(L+se/Q.locationSize*v)*ve)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<Q.locationSize;me++)y(Q.location+me,ue.meshPerAttribute);D.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<Q.locationSize;me++)b(Q.location+me);n.bindBuffer(34962,j);for(let me=0;me<Q.locationSize;me++)O(Q.location+me,se/Q.locationSize,oe,ce,se*ve,se/Q.locationSize*me*ve)}}else if(k!==void 0){const ce=k[ee];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(Q.location,ce);break;case 3:n.vertexAttrib3fv(Q.location,ce);break;case 4:n.vertexAttrib4fv(Q.location,ce);break;default:n.vertexAttrib1fv(Q.location,ce)}}}}A()}function C(){ne();for(const D in a){const F=a[D];for(const U in F){const re=F[U];for(const Z in re)g(re[Z].object),delete re[Z];delete F[U]}delete a[D]}}function I(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const U in F){const re=F[U];for(const Z in re)g(re[Z].object),delete re[Z];delete F[U]}delete a[D.id]}function q(D){for(const F in a){const U=a[F];if(U[D.id]===void 0)continue;const re=U[D.id];for(const Z in re)g(re[Z].object),delete re[Z];delete U[D.id]}}function ne(){G(),u=!0,c!==l&&(c=l,p(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:q,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function j1(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function $1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),w=n.getParameter(36349),M=h>0,b=o||e.has("OES_texture_float"),y=M&&b,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function q1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new pi,a=new en,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,p,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const w=s?0:i,M=w*4;let b=_.clippingState||null;l.value=b,b=u(g,h,M,p);for(let y=0;y!==M;++y)b[y]=t[y];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let M=0,b=p;M!==m;++M,b+=4)o.copy(f[M]).applyMatrix4(w,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function X1(n){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=Ur:a===rc&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ic||a===rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cb(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wa extends hm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cr=4,dh=[.125,.215,.35,.446,.526,.582],ki=20,vl=new wa,ph=new Xe;let yl=null;const Oi=(1+Math.sqrt(5))/2,xr=1/Oi,mh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Oi,xr),new B(0,Oi,-xr),new B(xr,0,Oi),new B(-xr,0,Oi),new B(Oi,xr,0),new B(-Oi,xr,0)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Is,format:Cn,encoding:Ji,depthBuffer:!1},r=_h(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(s)),this._blurMaterial=K1(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ph),u.toneMapping=$n,u.autoClear=!1;const p=new su({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new dn(new Ws,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(ph),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const M=this._cubeSize;bo(r,w*M,_>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ur||e.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(r-1)%mh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):ki;d>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ki}`);const _=[];let w=0;for(let O=0;O<ki;++O){const x=O/m,C=Math.exp(-x*x/2);_.push(C),O===0?w+=C:O<d&&(w+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/w;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const b=this._sizeLods[r],y=3*b*(r>M-Cr?r-M+Cr:0),A=4*(this._cubeSize-b);bo(t,y,A,3*b,2*b),l.setRenderTarget(t),l.render(f,vl)}}function Y1(n){const e=[],t=[],i=[];let r=n;const s=n-Cr+1+dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Cr?l=dh[o-n+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,w=new Float32Array(m*g*p),M=new Float32Array(d*g*p),b=new Float32Array(_*g*p);for(let A=0;A<p;A++){const O=A%3*2/3-1,x=A>2?0:-1,C=[O,x,0,O+2/3,x,0,O+2/3,x+1,0,O,x,0,O+2/3,x+1,0,O,x+1,0];w.set(C,m*g*A),M.set(h,d*g*A);const I=[A,A,A,A,A,A];b.set(I,_*g*A)}const y=new Nt;y.setAttribute("position",new rn(w,m)),y.setAttribute("uv",new rn(M,d)),y.setAttribute("faceIndex",new rn(b,_)),e.push(y),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _h(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function K1(n,e,t){const i=new Float32Array(ki),r=new B(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lu(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vh(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}function Z1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===rc,u=l===Ur||l===Hr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new gh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new gh(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function J1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Q1(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let M=0,b=w.length;M<b;M+=3){const y=w[M+0],A=w[M+1],O=w[M+2];h.push(y,A,A,O,O,y)}}else{const w=g.array;m=g.version;for(let M=0,b=w.length/3-1;M<b;M+=3){const y=M+0,A=M+1,O=M+2;h.push(y,A,A,O,O,y)}}const d=new(rm(h)?um:cm)(h,1);d.version=m;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eM(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function tM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nM(n,e){return n[0]-e[0]}function iM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let U=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var g=U;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),y===!0&&(I=2),A===!0&&(I=3);let q=u.attributes.position.count*I,ne=1;q>e.maxTextureSize&&(ne=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const G=new Float32Array(q*ne*4*d),D=new lm(G,q,ne,d);D.type=Vi,D.needsUpdate=!0;const F=I*4;for(let re=0;re<d;re++){const Z=O[re],$=x[re],k=C[re],ee=q*ne*4*re;for(let Q=0;Q<Z.count;Q++){const ue=Q*F;b===!0&&(o.fromBufferAttribute(Z,Q),G[ee+ue+0]=o.x,G[ee+ue+1]=o.y,G[ee+ue+2]=o.z,G[ee+ue+3]=0),y===!0&&(o.fromBufferAttribute($,Q),G[ee+ue+4]=o.x,G[ee+ue+5]=o.y,G[ee+ue+6]=o.z,G[ee+ue+7]=0),A===!0&&(o.fromBufferAttribute(k,Q),G[ee+ue+8]=o.x,G[ee+ue+9]=o.y,G[ee+ue+10]=o.z,G[ee+ue+11]=k.itemSize===4?o.w:1)}}_={count:d,texture:D,size:new be(q,ne)},s.set(u,_),u.addEventListener("dispose",U)}let w=0;for(let b=0;b<p.length;b++)w+=p[b];const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",p),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=i[u.id];if(d===void 0||d.length!==m){d=[];for(let y=0;y<m;y++)d[y]=[y,0];i[u.id]=d}for(let y=0;y<m;y++){const A=d[y];A[0]=y,A[1]=p[y]}d.sort(iM);for(let y=0;y<8;y++)y<m&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(nM);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const A=a[y],O=A[0],x=A[1];O!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+y)!==_[O]&&u.setAttribute("morphTarget"+y,_[O]),w&&u.getAttribute("morphNormal"+y)!==w[O]&&u.setAttribute("morphNormal"+y,w[O]),r[y]=x,M+=x):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),w&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function sM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const mm=new $t,gm=new lm,_m=new Xx,vm=new dm,xh=[],bh=[],wh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function Zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xh[r];if(s===void 0&&(s=new Float32Array(r),xh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function uM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),mt(t,i)}}function fM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),mt(t,i)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;wh.set(i),n.uniformMatrix4fv(this.addr,!1,wh),mt(t,i)}}function dM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pM(n,e){const t=this.cache;pt(t,e)||(n.uniform2iv(this.addr,e),mt(t,e))}function mM(n,e){const t=this.cache;pt(t,e)||(n.uniform3iv(this.addr,e),mt(t,e))}function gM(n,e){const t=this.cache;pt(t,e)||(n.uniform4iv(this.addr,e),mt(t,e))}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;pt(t,e)||(n.uniform2uiv(this.addr,e),mt(t,e))}function yM(n,e){const t=this.cache;pt(t,e)||(n.uniform3uiv(this.addr,e),mt(t,e))}function xM(n,e){const t=this.cache;pt(t,e)||(n.uniform4uiv(this.addr,e),mt(t,e))}function bM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||mm,r)}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_m,r)}function MM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||vm,r)}function SM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gm,r)}function EM(n){switch(n){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return uM;case 35675:return fM;case 35676:return hM;case 5124:case 35670:return dM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return _M;case 36294:return vM;case 36295:return yM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return SM}}function TM(n,e){n.uniform1fv(this.addr,e)}function AM(n,e){const t=Zr(e,this.size,2);n.uniform2fv(this.addr,t)}function CM(n,e){const t=Zr(e,this.size,3);n.uniform3fv(this.addr,t)}function PM(n,e){const t=Zr(e,this.size,4);n.uniform4fv(this.addr,t)}function LM(n,e){const t=Zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RM(n,e){const t=Zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DM(n,e){const t=Zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OM(n,e){n.uniform1iv(this.addr,e)}function IM(n,e){n.uniform2iv(this.addr,e)}function NM(n,e){n.uniform3iv(this.addr,e)}function FM(n,e){n.uniform4iv(this.addr,e)}function kM(n,e){n.uniform1uiv(this.addr,e)}function zM(n,e){n.uniform2uiv(this.addr,e)}function BM(n,e){n.uniform3uiv(this.addr,e)}function UM(n,e){n.uniform4uiv(this.addr,e)}function HM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||mm,s[o])}function VM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_m,s[o])}function GM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||vm,s[o])}function WM(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||gm,s[o])}function jM(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return PM;case 35674:return LM;case 35675:return RM;case 35676:return DM;case 5124:case 35670:return OM;case 35667:case 35671:return IM;case 35668:case 35672:return NM;case 35669:case 35673:return FM;case 5125:return kM;case 36294:return zM;case 36295:return BM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}class $M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=EM(t.type)}}class qM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=jM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Eh(n,e){n.seq.push(e),n.map[e.id]=e}function YM(n,e,t){const i=n.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),o=xl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eh(t,c===void 0?new $M(a,n,e):new qM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new XM(a),Eh(t,f)),t=f}}}class Uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Th(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let KM=0;function ZM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function JM(n){switch(n){case Ji:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ah(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ZM(n.getShaderSource(e),o)}else return r}function QM(n,e){const t=JM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eS(n,e){let t;switch(e){case bx:t="Linear";break;case wx:t="Reinhard";break;case Mx:t="OptimizedCineon";break;case Sx:t="ACESFilmic";break;case Ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tS(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_s).join(`
`)}function nS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function iS(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _s(n){return n!==""}function Ch(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(n){return n.replace(rS,sS)}function sS(n,e){const t=Ve[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uc(t)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(n){return n.replace(oS,aS)}function aS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gs&&(e="SHADOWMAP_TYPE_VSM"),e}function cS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Hr:e="ENVMAP_TYPE_CUBE";break;case ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function fS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case yx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function hS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lS(t),c=cS(t),u=uS(t),f=fS(t),h=hS(t),p=t.isWebGL2?"":tS(t),g=nS(s),m=r.createProgram();let d,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(_s).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(_s).join(`
`),_.length>0&&(_+=`
`)):(d=[Rh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),_=[p,Rh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$n?eS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,QM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),o=uc(o),o=Ch(o,t),o=Ph(o,t),a=uc(a),a=Ch(a,t),a=Ph(a,t),o=Lh(o),a=Lh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=w+d+o,b=w+_+a,y=Th(r,35633,M),A=Th(r,35632,b);if(r.attachShader(m,y),r.attachShader(m,A),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(y).trim(),q=r.getShaderInfoLog(A).trim();let ne=!0,G=!0;if(r.getProgramParameter(m,35714)===!1){ne=!1;const D=Ah(r,y,"vertex"),F=Ah(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+D+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||q==="")&&(G=!1);G&&(this.diagnostics={runnable:ne,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:q,prefix:_}})}r.deleteShader(y),r.deleteShader(A);let O;this.getUniforms=function(){return O===void 0&&(O=new Uo(r,m)),O};let x;return this.getAttributes=function(){return x===void 0&&(x=iS(r,m)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}let pS=0;class mS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gS(e),t.set(e,i)),i}}class gS{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}}function _S(n,e,t,i,r,s,o){const a=new ru,l=new mS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,C,I,q,ne){const G=q.fog,D=ne.geometry,F=x.isMeshStandardMaterial?q.environment:null,U=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),re=!!U&&U.mapping===ya?U.image.height:null,Z=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const $=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=$!==void 0?$.length:0;let ee=0;D.morphAttributes.position!==void 0&&(ee=1),D.morphAttributes.normal!==void 0&&(ee=2),D.morphAttributes.color!==void 0&&(ee=3);let Q,ue,ce,se;if(Z){const Ce=En[Z];Q=Ce.vertexShader,ue=Ce.fragmentShader}else Q=x.vertexShader,ue=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const W=n.getRenderTarget(),j=x.alphaTest>0,oe=x.clearcoat>0,ve=x.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:x.type,vertexShader:Q,fragmentShader:ue,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Ji,map:!!x.map,matcap:!!x.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:re,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Wx,tangentSpaceNormalMap:x.normalMapType===im,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===lt,clearcoat:oe,clearcoatMap:oe&&!!x.clearcoatMap,clearcoatRoughnessMap:oe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!x.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!x.iridescenceMap,iridescenceThicknessMap:ve&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Fr,alphaMap:!!x.alphaMap,alphaTest:j,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:$n,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mi,flipSided:x.side===Wt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)C.push(I),C.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(_(C,x),w(C,x),C.push(n.outputEncoding)),C.push(x.customProgramCacheKey),C.join()}function _(x,C){x.push(C.precision),x.push(C.outputEncoding),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.combine),x.push(C.vertexUvs),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function w(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),x.push(a.mask)}function M(x){const C=g[x.type];let I;if(C){const q=En[C];I=fm.clone(q.uniforms)}else I=x.uniforms;return I}function b(x,C){let I;for(let q=0,ne=c.length;q<ne;q++){const G=c[q];if(G.cacheKey===C){I=G,++I.usedTimes;break}}return I===void 0&&(I=new dS(n,C,x,s),c.push(I)),I}function y(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:O}}function vS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function yS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Oh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,m,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?i.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||yS),i.length>1&&i.sort(h||Dh),r.length>1&&r.sort(h||Dh)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function xS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Oh,n.set(i,[o])):r>=s.length?(o=new Oh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function wS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MS=0;function SS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ES(n,e){const t=new bS,i=wS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,o=new it,a=new it;function l(u,f){let h=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let m=0,d=0,_=0,w=0,M=0,b=0,y=0,A=0,O=0,x=0;u.sort(SS);const C=f!==!0?Math.PI:1;for(let q=0,ne=u.length;q<ne;q++){const G=u[q],D=G.color,F=G.intensity,U=G.distance,re=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)h+=D.r*F*C,p+=D.g*F*C,g+=D.b*F*C;else if(G.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(G.sh.coefficients[Z],F);else if(G.isDirectionalLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*C),G.castShadow){const $=G.shadow,k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.directionalShadow[m]=k,r.directionalShadowMap[m]=re,r.directionalShadowMatrix[m]=G.shadow.matrix,b++}r.directional[m]=Z,m++}else if(G.isSpotLight){const Z=t.get(G);Z.position.setFromMatrixPosition(G.matrixWorld),Z.color.copy(D).multiplyScalar(F*C),Z.distance=U,Z.coneCos=Math.cos(G.angle),Z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Z.decay=G.decay,r.spot[_]=Z;const $=G.shadow;if(G.map&&(r.spotLightMap[O]=G.map,O++,$.updateMatrices(G),G.castShadow&&x++),r.spotLightMatrix[_]=$.matrix,G.castShadow){const k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,r.spotShadow[_]=k,r.spotShadowMap[_]=re,A++}_++}else if(G.isRectAreaLight){const Z=t.get(G);Z.color.copy(D).multiplyScalar(F),Z.halfWidth.set(G.width*.5,0,0),Z.halfHeight.set(0,G.height*.5,0),r.rectArea[w]=Z,w++}else if(G.isPointLight){const Z=t.get(G);if(Z.color.copy(G.color).multiplyScalar(G.intensity*C),Z.distance=G.distance,Z.decay=G.decay,G.castShadow){const $=G.shadow,k=i.get(G);k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,r.pointShadow[d]=k,r.pointShadowMap[d]=re,r.pointShadowMatrix[d]=G.shadow.matrix,y++}r.point[d]=Z,d++}else if(G.isHemisphereLight){const Z=t.get(G);Z.skyColor.copy(G.color).multiplyScalar(F*C),Z.groundColor.copy(G.groundColor).multiplyScalar(F*C),r.hemi[M]=Z,M++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==m||I.pointLength!==d||I.spotLength!==_||I.rectAreaLength!==w||I.hemiLength!==M||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==A||I.numSpotMaps!==O)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=w,r.point.length=d,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=A+O-x,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=x,I.directionalLength=m,I.pointLength=d,I.spotLength=_,I.rectAreaLength=w,I.hemiLength=M,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=A,I.numSpotMaps=O,r.version=MS++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let w=0,M=u.length;w<M;w++){const b=u[w];if(b.isDirectionalLight){const y=r.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),h++}else if(b.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const y=r.rectArea[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const y=r.hemi[d];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Ih(n,e){const t=new ES(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function TS(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ih(n,e),t.set(s,[l])):o>=a.length?(l=new Ih(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class AS extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`;function RS(n,e,t){let i=new ou;const r=new be,s=new be,o=new xt,a=new AS({depthPacking:Gx}),l=new CS,c={},u=t.maxTextureSize,f={0:Wt,1:Br,2:mi},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:PS,fragmentShader:LS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new dn(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp,this.render=function(b,y,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const O=n.getRenderTarget(),x=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let q=0,ne=b.length;q<ne;q++){const G=b[q],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null){const re=this.type!==gs?{minFilter:zt,magFilter:zt}:{};D.map=new Mi(r.x,r.y,re),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const U=D.getViewportCount();for(let re=0;re<U;re++){const Z=D.getViewport(re);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(o),D.updateMatrices(G,re),i=D.getFrustum(),M(y,A,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===gs&&_(D,A),D.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(O,x,C)};function _(b,y){const A=e.update(m);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(y,null,A,h,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(y,null,A,p,m,null)}function w(b,y,A,O,x,C){let I=null;const q=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0?I=q:I=A.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const ne=I.uuid,G=y.uuid;let D=c[ne];D===void 0&&(D={},c[ne]=D);let F=D[G];F===void 0&&(F=I.clone(),D[G]=F),I=F}return I.visible=y.visible,I.wireframe=y.wireframe,C===gs?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:f[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaTest,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=O,I.farDistance=x),I}function M(b,y,A,O,x){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===gs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const q=e.update(b),ne=b.material;if(Array.isArray(ne)){const G=q.groups;for(let D=0,F=G.length;D<F;D++){const U=G[D],re=ne[U.materialIndex];if(re&&re.visible){const Z=w(b,re,O,A.near,A.far,x);n.renderBufferDirect(A,null,q,Z,b,U)}}}else if(ne.visible){const G=w(b,ne,O,A.near,A.far,x);n.renderBufferDirect(A,null,q,G,b,null)}}const I=b.children;for(let q=0,ne=I.length;q<ne;q++)M(I[q],y,A,O,x)}}function DS(n,e,t){const i=t.isWebGL2;function r(){let V=!1;const Ae=new xt;let xe=null;const ge=new xt(0,0,0,0);return{setMask:function(Se){xe!==Se&&!V&&(n.colorMask(Se,Se,Se,Se),xe=Se)},setLocked:function(Se){V=Se},setClear:function(Se,Fe,tt,ct,Qn){Qn===!0&&(Se*=ct,Fe*=ct,tt*=ct),Ae.set(Se,Fe,tt,ct),ge.equals(Ae)===!1&&(n.clearColor(Se,Fe,tt,ct),ge.copy(Ae))},reset:function(){V=!1,xe=null,ge.set(-1,0,0,0)}}}function s(){let V=!1,Ae=null,xe=null,ge=null;return{setTest:function(Se){Se?j(2929):oe(2929)},setMask:function(Se){Ae!==Se&&!V&&(n.depthMask(Se),Ae=Se)},setFunc:function(Se){if(xe!==Se){switch(Se){case hx:n.depthFunc(512);break;case dx:n.depthFunc(519);break;case px:n.depthFunc(513);break;case nc:n.depthFunc(515);break;case mx:n.depthFunc(514);break;case gx:n.depthFunc(518);break;case _x:n.depthFunc(516);break;case vx:n.depthFunc(517);break;default:n.depthFunc(515)}xe=Se}},setLocked:function(Se){V=Se},setClear:function(Se){ge!==Se&&(n.clearDepth(Se),ge=Se)},reset:function(){V=!1,Ae=null,xe=null,ge=null}}}function o(){let V=!1,Ae=null,xe=null,ge=null,Se=null,Fe=null,tt=null,ct=null,Qn=null;return{setTest:function(ot){V||(ot?j(2960):oe(2960))},setMask:function(ot){Ae!==ot&&!V&&(n.stencilMask(ot),Ae=ot)},setFunc:function(ot,Rn,qt){(xe!==ot||ge!==Rn||Se!==qt)&&(n.stencilFunc(ot,Rn,qt),xe=ot,ge=Rn,Se=qt)},setOp:function(ot,Rn,qt){(Fe!==ot||tt!==Rn||ct!==qt)&&(n.stencilOp(ot,Rn,qt),Fe=ot,tt=Rn,ct=qt)},setLocked:function(ot){V=ot},setClear:function(ot){Qn!==ot&&(n.clearStencil(ot),Qn=ot)},reset:function(){V=!1,Ae=null,xe=null,ge=null,Se=null,Fe=null,tt=null,ct=null,Qn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,M=null,b=null,y=null,A=null,O=null,x=null,C=!1,I=null,q=null,ne=null,G=null,D=null;const F=n.getParameter(35661);let U=!1,re=0;const Z=n.getParameter(7938);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),U=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),U=re>=2);let $=null,k={};const ee=n.getParameter(3088),Q=n.getParameter(2978),ue=new xt().fromArray(ee),ce=new xt().fromArray(Q);function se(V,Ae,xe){const ge=new Uint8Array(4),Se=n.createTexture();n.bindTexture(V,Se),n.texParameteri(V,10241,9728),n.texParameteri(V,10240,9728);for(let Fe=0;Fe<xe;Fe++)n.texImage2D(Ae+Fe,0,6408,1,1,0,6408,5121,ge);return Se}const W={};W[3553]=se(3553,3553,1),W[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),j(2929),l.setFunc(nc),z(!1),X(Sf),j(2884),T(yi);function j(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function oe(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function ve(V,Ae){return p[V]!==Ae?(n.bindFramebuffer(V,Ae),p[V]=Ae,i&&(V===36009&&(p[36160]=Ae),V===36160&&(p[36009]=Ae)),!0):!1}function me(V,Ae){let xe=m,ge=!1;if(V)if(xe=g.get(Ae),xe===void 0&&(xe=[],g.set(Ae,xe)),V.isWebGLMultipleRenderTargets){const Se=V.texture;if(xe.length!==Se.length||xe[0]!==36064){for(let Fe=0,tt=Se.length;Fe<tt;Fe++)xe[Fe]=36064+Fe;xe.length=Se.length,ge=!0}}else xe[0]!==36064&&(xe[0]=36064,ge=!0);else xe[0]!==1029&&(xe[0]=1029,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Ce(V){return d!==V?(n.useProgram(V),d=V,!0):!1}const L={[Ar]:32774,[tx]:32778,[nx]:32779};if(i)L[Cf]=32775,L[Pf]=32776;else{const V=e.get("EXT_blend_minmax");V!==null&&(L[Cf]=V.MIN_EXT,L[Pf]=V.MAX_EXT)}const v={[ix]:0,[rx]:1,[sx]:768,[Qp]:770,[fx]:776,[cx]:774,[ax]:772,[ox]:769,[em]:771,[ux]:775,[lx]:773};function T(V,Ae,xe,ge,Se,Fe,tt,ct){if(V===yi){_===!0&&(oe(3042),_=!1);return}if(_===!1&&(j(3042),_=!0),V!==ex){if(V!==w||ct!==C){if((M!==Ar||A!==Ar)&&(n.blendEquation(32774),M=Ar,A=Ar),ct)switch(V){case Fr:n.blendFuncSeparate(1,771,1,771);break;case Ef:n.blendFunc(1,1);break;case Tf:n.blendFuncSeparate(0,769,0,1);break;case Af:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Fr:n.blendFuncSeparate(770,771,1,771);break;case Ef:n.blendFunc(770,1);break;case Tf:n.blendFuncSeparate(0,769,0,1);break;case Af:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,O=null,x=null,w=V,C=ct}return}Se=Se||Ae,Fe=Fe||xe,tt=tt||ge,(Ae!==M||Se!==A)&&(n.blendEquationSeparate(L[Ae],L[Se]),M=Ae,A=Se),(xe!==b||ge!==y||Fe!==O||tt!==x)&&(n.blendFuncSeparate(v[xe],v[ge],v[Fe],v[tt]),b=xe,y=ge,O=Fe,x=tt),w=V,C=null}function S(V,Ae){V.side===mi?oe(2884):j(2884);let xe=V.side===Wt;Ae&&(xe=!xe),z(xe),V.blending===Fr&&V.transparent===!1?T(yi):T(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const ge=V.stencilWrite;c.setTest(ge),ge&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?j(32926):oe(32926)}function z(V){I!==V&&(V?n.frontFace(2304):n.frontFace(2305),I=V)}function X(V){V!==Zy?(j(2884),V!==q&&(V===Sf?n.cullFace(1029):V===Jy?n.cullFace(1028):n.cullFace(1032))):oe(2884),q=V}function K(V){V!==ne&&(U&&n.lineWidth(V),ne=V)}function ie(V,Ae,xe){V?(j(32823),(G!==Ae||D!==xe)&&(n.polygonOffset(Ae,xe),G=Ae,D=xe)):oe(32823)}function pe(V){V?j(3089):oe(3089)}function le(V){V===void 0&&(V=33984+F-1),$!==V&&(n.activeTexture(V),$=V)}function P(V,Ae,xe){xe===void 0&&($===null?xe=33984+F-1:xe=$);let ge=k[xe];ge===void 0&&(ge={type:void 0,texture:void 0},k[xe]=ge),(ge.type!==V||ge.texture!==Ae)&&($!==xe&&(n.activeTexture(xe),$=xe),n.bindTexture(V,Ae||W[V]),ge.type=V,ge.texture=Ae)}function E(){const V=k[$];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(V){ue.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ue.copy(V))}function Te(V){ce.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ce.copy(V))}function De(V,Ae){let xe=f.get(Ae);xe===void 0&&(xe=new WeakMap,f.set(Ae,xe));let ge=xe.get(V);ge===void 0&&(ge=n.getUniformBlockIndex(Ae,V.name),xe.set(V,ge))}function Re(V,Ae){const ge=f.get(Ae).get(V);u.get(V)!==ge&&(n.uniformBlockBinding(Ae,ge,V.__bindingPointIndex),u.set(V,ge))}function ze(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,k={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,M=null,b=null,y=null,A=null,O=null,x=null,C=!1,I=null,q=null,ne=null,G=null,D=null,ue.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:j,disable:oe,bindFramebuffer:ve,drawBuffers:me,useProgram:Ce,setBlending:T,setMaterial:S,setFlipSided:z,setCullFace:X,setLineWidth:K,setPolygonOffset:ie,setScissorTest:pe,activeTexture:le,bindTexture:P,unbindTexture:E,compressedTexImage2D:H,texImage2D:Y,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:N,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:ye,scissor:Pe,viewport:Te,reset:ze}}function OS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return _?new OffscreenCanvas(P,E):Ns("canvas")}function M(P,E,H,ae){let he=1;if((P.width>ae||P.height>ae)&&(he=ae/Math.max(P.width,P.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ye=E?cc:Math.floor,Me=ye(he*P.width),N=ye(he*P.height);m===void 0&&(m=w(Me,N));const Y=H?w(Me,N):m;return Y.width=Me,Y.height=N,Y.getContext("2d").drawImage(P,0,0,Me,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Me+"x"+N+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return th(P.width)&&th(P.height)}function y(P){return a?!1:P.wrapS!==fn||P.wrapT!==fn||P.minFilter!==zt&&P.minFilter!==Gt}function A(P,E){return P.generateMipmaps&&E&&P.minFilter!==zt&&P.minFilter!==Gt}function O(P){n.generateMipmap(P)}function x(P,E,H,ae,he=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye=E;return E===6403&&(H===5126&&(ye=33326),H===5131&&(ye=33325),H===5121&&(ye=33321)),E===33319&&(H===5126&&(ye=33328),H===5131&&(ye=33327),H===5121&&(ye=33323)),E===6408&&(H===5126&&(ye=34836),H===5131&&(ye=34842),H===5121&&(ye=ae===lt&&he===!1?35907:32856),H===32819&&(ye=32854),H===32820&&(ye=32855)),(ye===33325||ye===33326||ye===33327||ye===33328||ye===34842||ye===34836)&&e.get("EXT_color_buffer_float"),ye}function C(P,E,H){return A(P,H)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==Gt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){return P===zt||P===Lf||P===Rf?9728:9729}function q(P){const E=P.target;E.removeEventListener("dispose",q),G(E),E.isVideoTexture&&g.delete(E)}function ne(P){const E=P.target;E.removeEventListener("dispose",ne),F(E)}function G(P){const E=i.get(P);if(E.__webglInit===void 0)return;const H=P.source,ae=d.get(H);if(ae){const he=ae[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(P),Object.keys(ae).length===0&&d.delete(H)}i.remove(P)}function D(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const H=P.source,ae=d.get(H);delete ae[E.__cacheKey],o.memory.textures--}function F(P){const E=P.texture,H=i.get(P),ae=i.get(E);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)n.deleteFramebuffer(H.__webglFramebuffer[he]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[he]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let he=0;he<H.__webglColorRenderbuffer.length;he++)H.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[he]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let he=0,ye=E.length;he<ye;he++){const Me=i.get(E[he]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(E[he])}i.remove(E),i.remove(P)}let U=0;function re(){U=0}function Z(){const P=U;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),U+=1,P}function $(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function k(P,E){const H=i.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,P,E);return}}t.bindTexture(3553,H.__webglTexture,33984+E)}function ee(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){oe(H,P,E);return}t.bindTexture(35866,H.__webglTexture,33984+E)}function Q(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){oe(H,P,E);return}t.bindTexture(32879,H.__webglTexture,33984+E)}function ue(P,E){const H=i.get(P);if(P.version>0&&H.__version!==P.version){ve(H,P,E);return}t.bindTexture(34067,H.__webglTexture,33984+E)}const ce={[sc]:10497,[fn]:33071,[oc]:33648},se={[zt]:9728,[Lf]:9984,[Rf]:9986,[Gt]:9729,[Tx]:9985,[xa]:9987};function W(P,E,H){if(H?(n.texParameteri(P,10242,ce[E.wrapS]),n.texParameteri(P,10243,ce[E.wrapT]),(P===32879||P===35866)&&n.texParameteri(P,32882,ce[E.wrapR]),n.texParameteri(P,10240,se[E.magFilter]),n.texParameteri(P,10241,se[E.minFilter])):(n.texParameteri(P,10242,33071),n.texParameteri(P,10243,33071),(P===32879||P===35866)&&n.texParameteri(P,32882,33071),(E.wrapS!==fn||E.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,10240,I(E.magFilter)),n.texParameteri(P,10241,I(E.minFilter)),E.minFilter!==zt&&E.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function j(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",q));const ae=E.source;let he=d.get(ae);he===void 0&&(he={},d.set(ae,he));const ye=$(E);if(ye!==P.__cacheKey){he[ye]===void 0&&(he[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),he[ye].usedTimes++;const Me=he[P.__cacheKey];Me!==void 0&&(he[P.__cacheKey].usedTimes--,Me.usedTimes===0&&D(E)),P.__cacheKey=ye,P.__webglTexture=he[ye].texture}return H}function oe(P,E,H){let ae=3553;E.isDataArrayTexture&&(ae=35866),E.isData3DTexture&&(ae=32879);const he=j(P,E),ye=E.source;t.bindTexture(ae,P.__webglTexture,33984+H);const Me=i.get(ye);if(ye.version!==Me.__version||he===!0){t.activeTexture(33984+H),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const N=y(E)&&b(E.image)===!1;let Y=M(E.image,N,!1,u);Y=le(E,Y);const Ee=b(Y)||a,Pe=s.convert(E.format,E.encoding);let Te=s.convert(E.type),De=x(E.internalFormat,Pe,Te,E.encoding,E.isVideoTexture);W(ae,E,Ee);let Re;const ze=E.mipmaps,V=a&&E.isVideoTexture!==!0,Ae=Me.__version===void 0||he===!0,xe=C(E,Y,Ee);if(E.isDepthTexture)De=6402,a?E.type===Vi?De=36012:E.type===Hi?De=33190:E.type===kr?De=35056:De=33189:E.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Yi&&De===6402&&E.type!==nm&&E.type!==Hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Hi,Te=s.convert(E.type)),E.format===Vr&&De===6402&&(De=34041,E.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=kr,Te=s.convert(E.type))),Ae&&(V?t.texStorage2D(3553,1,De,Y.width,Y.height):t.texImage2D(3553,0,De,Y.width,Y.height,0,Pe,Te,null));else if(E.isDataTexture)if(ze.length>0&&Ee){V&&Ae&&t.texStorage2D(3553,xe,De,ze[0].width,ze[0].height);for(let ge=0,Se=ze.length;ge<Se;ge++)Re=ze[ge],V?t.texSubImage2D(3553,ge,0,0,Re.width,Re.height,Pe,Te,Re.data):t.texImage2D(3553,ge,De,Re.width,Re.height,0,Pe,Te,Re.data);E.generateMipmaps=!1}else V?(Ae&&t.texStorage2D(3553,xe,De,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Pe,Te,Y.data)):t.texImage2D(3553,0,De,Y.width,Y.height,0,Pe,Te,Y.data);else if(E.isCompressedTexture){V&&Ae&&t.texStorage2D(3553,xe,De,ze[0].width,ze[0].height);for(let ge=0,Se=ze.length;ge<Se;ge++)Re=ze[ge],E.format!==Cn?Pe!==null?V?t.compressedTexSubImage2D(3553,ge,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(3553,ge,De,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?t.texSubImage2D(3553,ge,0,0,Re.width,Re.height,Pe,Te,Re.data):t.texImage2D(3553,ge,De,Re.width,Re.height,0,Pe,Te,Re.data)}else if(E.isDataArrayTexture)V?(Ae&&t.texStorage3D(35866,xe,De,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Pe,Te,Y.data)):t.texImage3D(35866,0,De,Y.width,Y.height,Y.depth,0,Pe,Te,Y.data);else if(E.isData3DTexture)V?(Ae&&t.texStorage3D(32879,xe,De,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Pe,Te,Y.data)):t.texImage3D(32879,0,De,Y.width,Y.height,Y.depth,0,Pe,Te,Y.data);else if(E.isFramebufferTexture){if(Ae)if(V)t.texStorage2D(3553,xe,De,Y.width,Y.height);else{let ge=Y.width,Se=Y.height;for(let Fe=0;Fe<xe;Fe++)t.texImage2D(3553,Fe,De,ge,Se,0,Pe,Te,null),ge>>=1,Se>>=1}}else if(ze.length>0&&Ee){V&&Ae&&t.texStorage2D(3553,xe,De,ze[0].width,ze[0].height);for(let ge=0,Se=ze.length;ge<Se;ge++)Re=ze[ge],V?t.texSubImage2D(3553,ge,0,0,Pe,Te,Re):t.texImage2D(3553,ge,De,Pe,Te,Re);E.generateMipmaps=!1}else V?(Ae&&t.texStorage2D(3553,xe,De,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Pe,Te,Y)):t.texImage2D(3553,0,De,Pe,Te,Y);A(E,Ee)&&O(ae),Me.__version=ye.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ve(P,E,H){if(E.image.length!==6)return;const ae=j(P,E),he=E.source;t.bindTexture(34067,P.__webglTexture,33984+H);const ye=i.get(he);if(he.version!==ye.__version||ae===!0){t.activeTexture(33984+H),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let ge=0;ge<6;ge++)!Me&&!N?Y[ge]=M(E.image[ge],!1,!0,c):Y[ge]=N?E.image[ge].image:E.image[ge],Y[ge]=le(E,Y[ge]);const Ee=Y[0],Pe=b(Ee)||a,Te=s.convert(E.format,E.encoding),De=s.convert(E.type),Re=x(E.internalFormat,Te,De,E.encoding),ze=a&&E.isVideoTexture!==!0,V=ye.__version===void 0||ae===!0;let Ae=C(E,Ee,Pe);W(34067,E,Pe);let xe;if(Me){ze&&V&&t.texStorage2D(34067,Ae,Re,Ee.width,Ee.height);for(let ge=0;ge<6;ge++){xe=Y[ge].mipmaps;for(let Se=0;Se<xe.length;Se++){const Fe=xe[Se];E.format!==Cn?Te!==null?ze?t.compressedTexSubImage2D(34069+ge,Se,0,0,Fe.width,Fe.height,Te,Fe.data):t.compressedTexImage2D(34069+ge,Se,Re,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+ge,Se,0,0,Fe.width,Fe.height,Te,De,Fe.data):t.texImage2D(34069+ge,Se,Re,Fe.width,Fe.height,0,Te,De,Fe.data)}}}else{xe=E.mipmaps,ze&&V&&(xe.length>0&&Ae++,t.texStorage2D(34067,Ae,Re,Y[0].width,Y[0].height));for(let ge=0;ge<6;ge++)if(N){ze?t.texSubImage2D(34069+ge,0,0,0,Y[ge].width,Y[ge].height,Te,De,Y[ge].data):t.texImage2D(34069+ge,0,Re,Y[ge].width,Y[ge].height,0,Te,De,Y[ge].data);for(let Se=0;Se<xe.length;Se++){const tt=xe[Se].image[ge].image;ze?t.texSubImage2D(34069+ge,Se+1,0,0,tt.width,tt.height,Te,De,tt.data):t.texImage2D(34069+ge,Se+1,Re,tt.width,tt.height,0,Te,De,tt.data)}}else{ze?t.texSubImage2D(34069+ge,0,0,0,Te,De,Y[ge]):t.texImage2D(34069+ge,0,Re,Te,De,Y[ge]);for(let Se=0;Se<xe.length;Se++){const Fe=xe[Se];ze?t.texSubImage2D(34069+ge,Se+1,0,0,Te,De,Fe.image[ge]):t.texImage2D(34069+ge,Se+1,Re,Te,De,Fe.image[ge])}}}A(E,Pe)&&O(34067),ye.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function me(P,E,H,ae,he){const ye=s.convert(H.format,H.encoding),Me=s.convert(H.type),N=x(H.internalFormat,ye,Me,H.encoding);i.get(E).__hasExternalTextures||(he===32879||he===35866?t.texImage3D(he,0,N,E.width,E.height,E.depth,0,ye,Me,null):t.texImage2D(he,0,N,E.width,E.height,0,ye,Me,null)),t.bindFramebuffer(36160,P),ie(E)?h.framebufferTexture2DMultisampleEXT(36160,ae,he,i.get(H).__webglTexture,0,K(E)):n.framebufferTexture2D(36160,ae,he,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(P,E,H){if(n.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let ae=33189;if(H||ie(E)){const he=E.depthTexture;he&&he.isDepthTexture&&(he.type===Vi?ae=36012:he.type===Hi&&(ae=33190));const ye=K(E);ie(E)?h.renderbufferStorageMultisampleEXT(36161,ye,ae,E.width,E.height):n.renderbufferStorageMultisample(36161,ye,ae,E.width,E.height)}else n.renderbufferStorage(36161,ae,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const ae=K(E);H&&ie(E)===!1?n.renderbufferStorageMultisample(36161,ae,35056,E.width,E.height):ie(E)?h.renderbufferStorageMultisampleEXT(36161,ae,35056,E.width,E.height):n.renderbufferStorage(36161,34041,E.width,E.height),n.framebufferRenderbuffer(36160,33306,36161,P)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let he=0;he<ae.length;he++){const ye=ae[he],Me=s.convert(ye.format,ye.encoding),N=s.convert(ye.type),Y=x(ye.internalFormat,Me,N,ye.encoding),Ee=K(E);H&&ie(E)===!1?n.renderbufferStorageMultisample(36161,Ee,Y,E.width,E.height):ie(E)?h.renderbufferStorageMultisampleEXT(36161,Ee,Y,E.width,E.height):n.renderbufferStorage(36161,Y,E.width,E.height)}}n.bindRenderbuffer(36161,null)}function L(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const ae=i.get(E.depthTexture).__webglTexture,he=K(E);if(E.depthTexture.format===Yi)ie(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,he):n.framebufferTexture2D(36160,36096,3553,ae,0);else if(E.depthTexture.format===Vr)ie(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,he):n.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function v(P){const E=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");L(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[ae],P,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function T(P,E,H){const ae=i.get(P);E!==void 0&&me(ae.__webglFramebuffer,P,P.texture,36064,3553),H!==void 0&&v(P)}function S(P){const E=P.texture,H=i.get(P),ae=i.get(E);P.addEventListener("dispose",ne),P.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,o.memory.textures++);const he=P.isWebGLCubeRenderTarget===!0,ye=P.isWebGLMultipleRenderTargets===!0,Me=b(P)||a;if(he){H.__webglFramebuffer=[];for(let N=0;N<6;N++)H.__webglFramebuffer[N]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),ye)if(r.drawBuffers){const N=P.texture;for(let Y=0,Ee=N.length;Y<Ee;Y++){const Pe=i.get(N[Y]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&ie(P)===!1){const N=ye?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const Ee=N[Y];H.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[Y]);const Pe=s.convert(Ee.format,Ee.encoding),Te=s.convert(Ee.type),De=x(Ee.internalFormat,Pe,Te,Ee.encoding,P.isXRRenderTarget===!0),Re=K(P);n.renderbufferStorageMultisample(36161,Re,De,P.width,P.height),n.framebufferRenderbuffer(36160,36064+Y,36161,H.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(36161,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(he){t.bindTexture(34067,ae.__webglTexture),W(34067,E,Me);for(let N=0;N<6;N++)me(H.__webglFramebuffer[N],P,E,36064,34069+N);A(E,Me)&&O(34067),t.unbindTexture()}else if(ye){const N=P.texture;for(let Y=0,Ee=N.length;Y<Ee;Y++){const Pe=N[Y],Te=i.get(Pe);t.bindTexture(3553,Te.__webglTexture),W(3553,Pe,Me),me(H.__webglFramebuffer,P,Pe,36064+Y,3553),A(Pe,Me)&&O(3553)}t.unbindTexture()}else{let N=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?N=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,ae.__webglTexture),W(N,E,Me),me(H.__webglFramebuffer,P,E,36064,N),A(E,Me)&&O(N),t.unbindTexture()}P.depthBuffer&&v(P)}function z(P){const E=b(P)||a,H=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ae=0,he=H.length;ae<he;ae++){const ye=H[ae];if(A(ye,E)){const Me=P.isWebGLCubeRenderTarget?34067:3553,N=i.get(ye).__webglTexture;t.bindTexture(Me,N),O(Me),t.unbindTexture()}}}function X(P){if(a&&P.samples>0&&ie(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],H=P.width,ae=P.height;let he=16384;const ye=[],Me=P.stencilBuffer?33306:36096,N=i.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){ye.push(36064+Ee),P.depthBuffer&&ye.push(Me);const Pe=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(Pe===!1&&(P.depthBuffer&&(he|=256),P.stencilBuffer&&(he|=1024)),Y&&n.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[Ee]),Pe===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),Y){const Te=i.get(E[Ee]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Te,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,he,9728),p&&n.invalidateFramebuffer(36008,ye)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ee,36161,N.__webglColorRenderbuffer[Ee]);const Pe=i.get(E[Ee]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ee,3553,Pe,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function K(P){return Math.min(f,P.samples)}function ie(P){const E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(P){const E=o.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function le(P,E){const H=P.encoding,ae=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===lc||H!==Ji&&(H===lt?a===!1?e.has("EXT_sRGB")===!0&&ae===Cn?(P.format=lc,P.minFilter=Gt,P.generateMipmaps=!1):E=om.sRGBToLinear(E):(ae!==Cn||he!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),E}this.allocateTextureUnit=Z,this.resetTextureUnits=re,this.setTexture2D=k,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=ue,this.rebindTextures=T,this.setupRenderTarget=S,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=v,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ie}function IS(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Zi)return 5121;if(s===Lx)return 32819;if(s===Rx)return 32820;if(s===Ax)return 5120;if(s===Cx)return 5122;if(s===nm)return 5123;if(s===Px)return 5124;if(s===Hi)return 5125;if(s===Vi)return 5126;if(s===Is)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dx)return 6406;if(s===Cn)return 6408;if(s===Ix)return 6409;if(s===Nx)return 6410;if(s===Yi)return 6402;if(s===Vr)return 34041;if(s===Fx)return 6403;if(s===Ox)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===lc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===kx)return 36244;if(s===zx)return 33319;if(s===Bx)return 33320;if(s===Ux)return 36249;if(s===Wa||s===ja||s===$a||s===qa)if(o===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Df||s===Of||s===If||s===Nf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Df)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===If)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ff||s===kf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ff)return o===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zf||s===Bf||s===Uf||s===Hf||s===Vf||s===Gf||s===Wf||s===jf||s===$f||s===qf||s===Xf||s===Yf||s===Kf||s===Zf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$f)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zf)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jf)return o===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===kr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class NS extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){const w=new Pr;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class kS extends $t{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Yi&&(i=Hi),i===void 0&&u===Vr&&(i=kr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1}}class zS extends _n{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],w=[],M=new Jt;M.layers.enable(1),M.viewport=new xt;const b=new Jt;b.layers.enable(2),b.viewport=new xt;const y=[M,b],A=new NS;A.layers.enable(1),A.layers.enable(2);let O=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let k=_[$];return k===void 0&&(k=new bl,_[$]=k),k.getTargetRaySpace()},this.getControllerGrip=function($){let k=_[$];return k===void 0&&(k=new bl,_[$]=k),k.getGripSpace()},this.getHand=function($){let k=_[$];return k===void 0&&(k=new bl,_[$]=k),k.getHandSpace()};function C($){const k=w.indexOf($.inputSource);if(k===-1)return;const ee=_[k];ee!==void 0&&ee.dispatchEvent({type:$.type,data:$.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",q);for(let $=0;$<_.length;$++){const k=w[$];k!==null&&(w[$]=null,_[$].disconnect(k))}O=null,x=null,e.setRenderTarget(m),h=null,f=null,u=null,r=null,d=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),d=new Mi(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:Zi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,ee=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,k=g.stencil?Vr:Yi,ee=g.stencil?kr:Hi);const ue={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),d=new Mi(f.textureWidth,f.textureHeight,{format:Cn,type:Zi,depthTexture:new kS(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(d);ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q($){for(let k=0;k<$.removed.length;k++){const ee=$.removed[k],Q=w.indexOf(ee);Q>=0&&(w[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:ee}))}for(let k=0;k<$.added.length;k++){const ee=$.added[k];let Q=w.indexOf(ee);if(Q===-1){for(let ce=0;ce<_.length;ce++)if(ce>=w.length){w.push(ee),Q=ce;break}else if(w[ce]===null){w[ce]=ee,Q=ce;break}if(Q===-1)break}const ue=_[Q];ue&&ue.dispatchEvent({type:"connected",data:ee})}}const ne=new B,G=new B;function D($,k,ee){ne.setFromMatrixPosition(k.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const Q=ne.distanceTo(G),ue=k.projectionMatrix.elements,ce=ee.projectionMatrix.elements,se=ue[14]/(ue[10]-1),W=ue[14]/(ue[10]+1),j=(ue[9]+1)/ue[5],oe=(ue[9]-1)/ue[5],ve=(ue[8]-1)/ue[0],me=(ce[8]+1)/ce[0],Ce=se*ve,L=se*me,v=Q/(-ve+me),T=v*-ve;k.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(T),$.translateZ(v),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const S=se+v,z=W+v,X=Ce-T,K=L+(Q-T),ie=j*W/z*S,pe=oe*W/z*S;$.projectionMatrix.makePerspective(X,K,ie,pe,S,z)}function F($,k){k===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(k.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;A.near=b.near=M.near=$.near,A.far=b.far=M.far=$.far,(O!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),O=A.near,x=A.far);const k=$.parent,ee=A.cameras;F(A,k);for(let ue=0;ue<ee.length;ue++)F(ee[ue],k);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),$.matrix.copy(A.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);const Q=$.children;for(let ue=0,ce=Q.length;ue<ce;ue++)Q[ue].updateMatrixWorld(!0);ee.length===2?D(A,M,b):A.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function($){f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)};let U=null;function re($,k){if(c=k.getViewerPose(l||o),p=k,c!==null){const ee=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Q=!1;ee.length!==A.cameras.length&&(A.cameras.length=0,Q=!0);for(let ue=0;ue<ee.length;ue++){const ce=ee[ue];let se=null;if(h!==null)se=h.getViewport(ce);else{const j=u.getViewSubImage(f,ce);se=j.viewport,ue===0&&(e.setRenderTargetTextures(d,j.colorTexture,f.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(d))}let W=y[ue];W===void 0&&(W=new Jt,W.layers.enable(ue),W.viewport=new xt,y[ue]=W),W.matrix.fromArray(ce.transform.matrix),W.projectionMatrix.fromArray(ce.projectionMatrix),W.viewport.set(se.x,se.y,se.width,se.height),ue===0&&A.matrix.copy(W.matrix),Q===!0&&A.cameras.push(W)}}for(let ee=0;ee<_.length;ee++){const Q=w[ee],ue=_[ee];Q!==null&&ue!==void 0&&ue.update(Q,k,l||o)}U&&U($,k),p=null}const Z=new pm;Z.setAnimationLoop(re),this.setAnimationLoop=function($){U=$},this.dispose=function(){}}}function BS(n,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),c(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),p(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Wt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Wt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let M;d.aoMap?M=d.aoMap:d.lightMap&&(M=d.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=w*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M;d.map?M=d.map:d.alphaMap&&(M=d.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Wt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function US(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(w,M){const b=M.program;i.uniformBlockBinding(w,b)}function c(w,M){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",d));const y=M.program;i.updateUBOMapping(w,y);const A=e.render.frame;s[w.id]!==A&&(h(w),s[w.id]=A)}function u(w){const M=f();w.__bindingPointIndex=M;const b=n.createBuffer(),y=w.__size,A=w.usage;return n.bindBuffer(35345,b),n.bufferData(35345,y,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,M,b),b}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const M=r[w.id],b=w.uniforms,y=w.__cache;n.bindBuffer(35345,M);for(let A=0,O=b.length;A<O;A++){const x=b[A];if(p(x,A,y)===!0){const C=x.value,I=x.__offset;typeof C=="number"?(x.__data[0]=C,n.bufferSubData(35345,I,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):C.toArray(x.__data),n.bufferSubData(35345,I,x.__data))}}n.bindBuffer(35345,null)}function p(w,M,b){const y=w.value;if(b[M]===void 0)return typeof y=="number"?b[M]=y:b[M]=y.clone(),!0;if(typeof y=="number"){if(b[M]!==y)return b[M]=y,!0}else{const A=b[M];if(A.equals(y)===!1)return A.copy(y),!0}return!1}function g(w){const M=w.uniforms;let b=0;const y=16;let A=0;for(let O=0,x=M.length;O<x;O++){const C=M[O],I=m(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,O>0){A=b%y;const q=y-A;A!==0&&q-I.boundary<0&&(b+=y-A,C.__offset=b)}b+=I.storage}return A=b%y,A>0&&(b+=y-A),w.__size=b,w.__cache={},this}function m(w){const M=w.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function d(w){const M=w.target;M.removeEventListener("dispose",d);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function HS(){const n=Ns("canvas");return n.style.display="block",n}function ym(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:HS(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ji,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,w=0,M=null,b=-1,y=null;const A=new xt,O=new xt;let x=null,C=e.width,I=e.height,q=1,ne=null,G=null;const D=new xt(0,0,C,I),F=new xt(0,0,C,I);let U=!1;const re=new ou;let Z=!1,$=!1,k=null;const ee=new it,Q=new be,ue=new B,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return M===null?q:1}let W=t;function j(R,te){for(let fe=0;fe<R.length;fe++){const J=R[fe],de=e.getContext(J,te);if(de!==null)return de}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",ze,!1),W===null){const te=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&te.shift(),W=j(te,R),W===null)throw j(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,ve,me,Ce,L,v,T,S,z,X,K,ie,pe,le,P,E,H,ae,he,ye,Me,N,Y,Ee;function Pe(){oe=new J1(W),ve=new $1(W,oe,n),oe.init(ve),N=new IS(W,oe,ve),me=new DS(W,oe,ve),Ce=new tM,L=new vS,v=new OS(W,oe,me,L,ve,N,Ce),T=new X1(m),S=new Z1(m),z=new hb(W,ve),Y=new W1(W,oe,z,ve),X=new Q1(W,z,Ce,Y),K=new sM(W,X,z,Ce),he=new rM(W,ve,v),E=new q1(L),ie=new _S(m,T,S,oe,ve,Y,E),pe=new BS(m,L),le=new xS,P=new TS(oe,ve),ae=new G1(m,T,me,K,u,o),H=new RS(m,K,ve),Ee=new US(W,Ce,ve,me),ye=new j1(W,oe,Ce,ve),Me=new eM(W,oe,Ce,ve),Ce.programs=ie.programs,m.capabilities=ve,m.extensions=oe,m.properties=L,m.renderLists=le,m.shadowMap=H,m.state=me,m.info=Ce}Pe();const Te=new zS(m,W);this.xr=Te,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(C,I,!1))},this.getSize=function(R){return R.set(C,I)},this.setSize=function(R,te,fe){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,I=te,e.width=Math.floor(R*q),e.height=Math.floor(te*q),fe!==!1&&(e.style.width=R+"px",e.style.height=te+"px"),this.setViewport(0,0,R,te)},this.getDrawingBufferSize=function(R){return R.set(C*q,I*q).floor()},this.setDrawingBufferSize=function(R,te,fe){C=R,I=te,q=fe,e.width=Math.floor(R*fe),e.height=Math.floor(te*fe),this.setViewport(0,0,R,te)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,te,fe,J){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,te,fe,J),me.viewport(A.copy(D).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,te,fe,J){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,te,fe,J),me.scissor(O.copy(F).multiplyScalar(q).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(R){me.setScissorTest(U=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){G=R},this.getClearColor=function(R){return R.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(R=!0,te=!0,fe=!0){let J=0;R&&(J|=16384),te&&(J|=256),fe&&(J|=1024),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),le.dispose(),P.dispose(),L.dispose(),T.dispose(),S.dispose(),K.dispose(),Y.dispose(),Ee.dispose(),ie.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Fe),Te.removeEventListener("sessionend",tt),k&&(k.dispose(),k=null),ct.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const R=Ce.autoReset,te=H.enabled,fe=H.autoUpdate,J=H.needsUpdate,de=H.type;Pe(),Ce.autoReset=R,H.enabled=te,H.autoUpdate=fe,H.needsUpdate=J,H.type=de}function ze(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function V(R){const te=R.target;te.removeEventListener("dispose",V),Ae(te)}function Ae(R){xe(R),L.remove(R)}function xe(R){const te=L.get(R).programs;te!==void 0&&(te.forEach(function(fe){ie.releaseProgram(fe)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,te,fe,J,de,Oe){te===null&&(te=ce);const ke=de.isMesh&&de.matrixWorld.determinant()<0,He=Tg(R,te,fe,J,de);me.setMaterial(J,ke);let Be=fe.index;const Ke=fe.attributes.position;if(Be===null){if(Ke===void 0||Ke.count===0)return}else if(Be.count===0)return;let We=1;J.wireframe===!0&&(Be=X.getWireframeAttribute(fe),We=2),Y.setup(de,J,He,fe,Be);let je,at=ye;Be!==null&&(je=z.get(Be),at=Me,at.setIndex(je));const Ei=Be!==null?Be.count:Ke.count,ir=fe.drawRange.start*We,rr=fe.drawRange.count*We,vn=Oe!==null?Oe.start*We:0,Ye=Oe!==null?Oe.count*We:1/0,sr=Math.max(ir,vn),ft=Math.min(Ei,ir+rr,vn+Ye)-1,Xt=Math.max(0,ft-sr+1);if(Xt!==0){if(de.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*se()),at.setMode(1)):at.setMode(4);else if(de.isLine){let ei=J.linewidth;ei===void 0&&(ei=1),me.setLineWidth(ei*se()),de.isLineSegments?at.setMode(1):de.isLineLoop?at.setMode(2):at.setMode(3)}else de.isPoints?at.setMode(0):de.isSprite&&at.setMode(4);if(de.isInstancedMesh)at.renderInstances(sr,Xt,de.count);else if(fe.isInstancedBufferGeometry){const ei=Math.min(fe.instanceCount,fe._maxInstanceCount);at.renderInstances(sr,Xt,ei)}else at.render(sr,Xt)}},this.compile=function(R,te){function fe(J,de,Oe){J.transparent===!0&&J.side===mi?(J.side=Wt,J.needsUpdate=!0,qs(J,de,Oe),J.side=Br,J.needsUpdate=!0,qs(J,de,Oe),J.side=mi):qs(J,de,Oe)}h=P.get(R),h.init(),g.push(h),R.traverseVisible(function(J){J.isLight&&J.layers.test(te.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights(m.physicallyCorrectLights),R.traverse(function(J){const de=J.material;if(de)if(Array.isArray(de))for(let Oe=0;Oe<de.length;Oe++){const ke=de[Oe];fe(ke,R,J)}else fe(de,R,J)}),g.pop(),h=null};let ge=null;function Se(R){ge&&ge(R)}function Fe(){ct.stop()}function tt(){ct.start()}const ct=new pm;ct.setAnimationLoop(Se),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(R){ge=R,Te.setAnimationLoop(R),R===null?ct.stop():ct.start()},Te.addEventListener("sessionstart",Fe),Te.addEventListener("sessionend",tt),this.render=function(R,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(te),te=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,te,M),h=P.get(R,g.length),h.init(),g.push(h),ee.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),re.setFromProjectionMatrix(ee),$=this.localClippingEnabled,Z=E.init(this.clippingPlanes,$,te),f=le.get(R,p.length),f.init(),p.push(f),Qn(R,te,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(ne,G),Z===!0&&E.beginShadows();const fe=h.state.shadowsArray;if(H.render(fe,R,te),Z===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(f,R),h.setupLights(m.physicallyCorrectLights),te.isArrayCamera){const J=te.cameras;for(let de=0,Oe=J.length;de<Oe;de++){const ke=J[de];ot(f,R,ke,ke.viewport)}}else ot(f,R,te);M!==null&&(v.updateMultisampleRenderTarget(M),v.updateRenderTargetMipmap(M)),R.isScene===!0&&R.onAfterRender(m,R,te),Y.resetDefaultState(),b=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Qn(R,te,fe,J){if(R.visible===!1)return;if(R.layers.test(te.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(te);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const ke=K.update(R),He=R.material;He.visible&&f.push(R,ke,He,fe,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Ce.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ce.render.frame),!R.frustumCulled||re.intersectsObject(R))){J&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const ke=K.update(R),He=R.material;if(Array.isArray(He)){const Be=ke.groups;for(let Ke=0,We=Be.length;Ke<We;Ke++){const je=Be[Ke],at=He[je.materialIndex];at&&at.visible&&f.push(R,ke,at,fe,ue.z,je)}}else He.visible&&f.push(R,ke,He,fe,ue.z,null)}}const Oe=R.children;for(let ke=0,He=Oe.length;ke<He;ke++)Qn(Oe[ke],te,fe,J)}function ot(R,te,fe,J){const de=R.opaque,Oe=R.transmissive,ke=R.transparent;h.setupLightsView(fe),Oe.length>0&&Rn(de,te,fe),J&&me.viewport(A.copy(J)),de.length>0&&qt(de,te,fe),Oe.length>0&&qt(Oe,te,fe),ke.length>0&&qt(ke,te,fe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Rn(R,te,fe){const J=ve.isWebGL2;k===null&&(k=new Mi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Is:Zi,minFilter:xa,samples:J&&s===!0?4:0})),m.getDrawingBufferSize(Q),J?k.setSize(Q.x,Q.y):k.setSize(cc(Q.x),cc(Q.y));const de=m.getRenderTarget();m.setRenderTarget(k),m.clear();const Oe=m.toneMapping;m.toneMapping=$n,qt(R,te,fe),m.toneMapping=Oe,v.updateMultisampleRenderTarget(k),v.updateRenderTargetMipmap(k),m.setRenderTarget(de)}function qt(R,te,fe){const J=te.isScene===!0?te.overrideMaterial:null;for(let de=0,Oe=R.length;de<Oe;de++){const ke=R[de],He=ke.object,Be=ke.geometry,Ke=J===null?ke.material:J,We=ke.group;He.layers.test(fe.layers)&&Eg(He,te,fe,Be,Ke,We)}}function Eg(R,te,fe,J,de,Oe){R.onBeforeRender(m,te,fe,J,de,Oe),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),de.onBeforeRender(m,te,fe,J,R,Oe),de.transparent===!0&&de.side===mi?(de.side=Wt,de.needsUpdate=!0,m.renderBufferDirect(fe,te,J,de,R,Oe),de.side=Br,de.needsUpdate=!0,m.renderBufferDirect(fe,te,J,de,R,Oe),de.side=mi):m.renderBufferDirect(fe,te,J,de,R,Oe),R.onAfterRender(m,te,fe,J,de,Oe)}function qs(R,te,fe){te.isScene!==!0&&(te=ce);const J=L.get(R),de=h.state.lights,Oe=h.state.shadowsArray,ke=de.state.version,He=ie.getParameters(R,de.state,Oe,te,fe),Be=ie.getProgramCacheKey(He);let Ke=J.programs;J.environment=R.isMeshStandardMaterial?te.environment:null,J.fog=te.fog,J.envMap=(R.isMeshStandardMaterial?S:T).get(R.envMap||J.environment),Ke===void 0&&(R.addEventListener("dispose",V),Ke=new Map,J.programs=Ke);let We=Ke.get(Be);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===ke)return Pu(R,He),We}else He.uniforms=ie.getUniforms(R),R.onBuild(fe,He,m),R.onBeforeCompile(He,m),We=ie.acquireProgram(He,Be),Ke.set(Be,We),J.uniforms=He.uniforms;const je=J.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=E.uniform),Pu(R,He),J.needsLights=Cg(R),J.lightsStateVersion=ke,J.needsLights&&(je.ambientLightColor.value=de.state.ambient,je.lightProbe.value=de.state.probe,je.directionalLights.value=de.state.directional,je.directionalLightShadows.value=de.state.directionalShadow,je.spotLights.value=de.state.spot,je.spotLightShadows.value=de.state.spotShadow,je.rectAreaLights.value=de.state.rectArea,je.ltc_1.value=de.state.rectAreaLTC1,je.ltc_2.value=de.state.rectAreaLTC2,je.pointLights.value=de.state.point,je.pointLightShadows.value=de.state.pointShadow,je.hemisphereLights.value=de.state.hemi,je.directionalShadowMap.value=de.state.directionalShadowMap,je.directionalShadowMatrix.value=de.state.directionalShadowMatrix,je.spotShadowMap.value=de.state.spotShadowMap,je.spotLightMatrix.value=de.state.spotLightMatrix,je.spotLightMap.value=de.state.spotLightMap,je.pointShadowMap.value=de.state.pointShadowMap,je.pointShadowMatrix.value=de.state.pointShadowMatrix);const at=We.getUniforms(),Ei=Uo.seqWithValue(at.seq,je);return J.currentProgram=We,J.uniformsList=Ei,We}function Pu(R,te){const fe=L.get(R);fe.outputEncoding=te.outputEncoding,fe.instancing=te.instancing,fe.skinning=te.skinning,fe.morphTargets=te.morphTargets,fe.morphNormals=te.morphNormals,fe.morphColors=te.morphColors,fe.morphTargetsCount=te.morphTargetsCount,fe.numClippingPlanes=te.numClippingPlanes,fe.numIntersection=te.numClipIntersection,fe.vertexAlphas=te.vertexAlphas,fe.vertexTangents=te.vertexTangents,fe.toneMapping=te.toneMapping}function Tg(R,te,fe,J,de){te.isScene!==!0&&(te=ce),v.resetTextureUnits();const Oe=te.fog,ke=J.isMeshStandardMaterial?te.environment:null,He=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Ji,Be=(J.isMeshStandardMaterial?S:T).get(J.envMap||ke),Ke=J.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,We=!!J.normalMap&&!!fe.attributes.tangent,je=!!fe.morphAttributes.position,at=!!fe.morphAttributes.normal,Ei=!!fe.morphAttributes.color,ir=J.toneMapped?m.toneMapping:$n,rr=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,vn=rr!==void 0?rr.length:0,Ye=L.get(J),sr=h.state.lights;if(Z===!0&&($===!0||R!==y)){const Ut=R===y&&J.id===b;E.setState(J,R,Ut)}let ft=!1;J.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==sr.state.version||Ye.outputEncoding!==He||de.isInstancedMesh&&Ye.instancing===!1||!de.isInstancedMesh&&Ye.instancing===!0||de.isSkinnedMesh&&Ye.skinning===!1||!de.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Be||J.fog===!0&&Ye.fog!==Oe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==E.numPlanes||Ye.numIntersection!==E.numIntersection)||Ye.vertexAlphas!==Ke||Ye.vertexTangents!==We||Ye.morphTargets!==je||Ye.morphNormals!==at||Ye.morphColors!==Ei||Ye.toneMapping!==ir||ve.isWebGL2===!0&&Ye.morphTargetsCount!==vn)&&(ft=!0):(ft=!0,Ye.__version=J.version);let Xt=Ye.currentProgram;ft===!0&&(Xt=qs(J,te,de));let ei=!1,Qr=!1,Pa=!1;const Pt=Xt.getUniforms(),Ti=Ye.uniforms;if(me.useProgram(Xt.program)&&(ei=!0,Qr=!0,Pa=!0),J.id!==b&&(b=J.id,Qr=!0),ei||y!==R){if(Pt.setValue(W,"projectionMatrix",R.projectionMatrix),ve.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),y!==R&&(y=R,Qr=!0,Pa=!0),J.isShaderMaterial||J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshStandardMaterial||J.envMap){const Ut=Pt.map.cameraPosition;Ut!==void 0&&Ut.setValue(W,ue.setFromMatrixPosition(R.matrixWorld))}(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial||J.isShadowMaterial||de.isSkinnedMesh)&&Pt.setValue(W,"viewMatrix",R.matrixWorldInverse)}if(de.isSkinnedMesh){Pt.setOptional(W,de,"bindMatrix"),Pt.setOptional(W,de,"bindMatrixInverse");const Ut=de.skeleton;Ut&&(ve.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(W,"boneTexture",Ut.boneTexture,v),Pt.setValue(W,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const La=fe.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0&&ve.isWebGL2===!0)&&he.update(de,fe,J,Xt),(Qr||Ye.receiveShadow!==de.receiveShadow)&&(Ye.receiveShadow=de.receiveShadow,Pt.setValue(W,"receiveShadow",de.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ti.envMap.value=Be,Ti.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Qr&&(Pt.setValue(W,"toneMappingExposure",m.toneMappingExposure),Ye.needsLights&&Ag(Ti,Pa),Oe&&J.fog===!0&&pe.refreshFogUniforms(Ti,Oe),pe.refreshMaterialUniforms(Ti,J,q,I,k),Uo.upload(W,Ye.uniformsList,Ti,v)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Uo.upload(W,Ye.uniformsList,Ti,v),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Pt.setValue(W,"center",de.center),Pt.setValue(W,"modelViewMatrix",de.modelViewMatrix),Pt.setValue(W,"normalMatrix",de.normalMatrix),Pt.setValue(W,"modelMatrix",de.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ut=J.uniformsGroups;for(let Ra=0,Pg=Ut.length;Ra<Pg;Ra++)if(ve.isWebGL2){const Lu=Ut[Ra];Ee.update(Lu,Xt),Ee.bind(Lu,Xt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xt}function Ag(R,te){R.ambientLightColor.needsUpdate=te,R.lightProbe.needsUpdate=te,R.directionalLights.needsUpdate=te,R.directionalLightShadows.needsUpdate=te,R.pointLights.needsUpdate=te,R.pointLightShadows.needsUpdate=te,R.spotLights.needsUpdate=te,R.spotLightShadows.needsUpdate=te,R.rectAreaLights.needsUpdate=te,R.hemisphereLights.needsUpdate=te}function Cg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(R,te,fe){L.get(R.texture).__webglTexture=te,L.get(R.depthTexture).__webglTexture=fe;const J=L.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=fe===void 0,J.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,te){const fe=L.get(R);fe.__webglFramebuffer=te,fe.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(R,te=0,fe=0){M=R,_=te,w=fe;let J=!0;if(R){const Be=L.get(R);Be.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),J=!1):Be.__webglFramebuffer===void 0?v.setupRenderTarget(R):Be.__hasExternalTextures&&v.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture)}let de=null,Oe=!1,ke=!1;if(R){const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(ke=!0);const Ke=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(de=Ke[te],Oe=!0):ve.isWebGL2&&R.samples>0&&v.useMultisampledRTT(R)===!1?de=L.get(R).__webglMultisampledFramebuffer:de=Ke,A.copy(R.viewport),O.copy(R.scissor),x=R.scissorTest}else A.copy(D).multiplyScalar(q).floor(),O.copy(F).multiplyScalar(q).floor(),x=U;if(me.bindFramebuffer(36160,de)&&ve.drawBuffers&&J&&me.drawBuffers(R,de),me.viewport(A),me.scissor(O),me.setScissorTest(x),Oe){const Be=L.get(R.texture);W.framebufferTexture2D(36160,36064,34069+te,Be.__webglTexture,fe)}else if(ke){const Be=L.get(R.texture),Ke=te||0;W.framebufferTextureLayer(36160,36064,Be.__webglTexture,fe||0,Ke)}b=-1},this.readRenderTargetPixels=function(R,te,fe,J,de,Oe,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(He=He[ke]),He){me.bindFramebuffer(36160,He);try{const Be=R.texture,Ke=Be.format,We=Be.type;if(Ke!==Cn&&N.convert(Ke)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=We===Is&&(oe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&oe.has("EXT_color_buffer_float"));if(We!==Zi&&N.convert(We)!==W.getParameter(35738)&&!(We===Vi&&(ve.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=R.width-J&&fe>=0&&fe<=R.height-de&&W.readPixels(te,fe,J,de,N.convert(Ke),N.convert(We),Oe)}finally{const Be=M!==null?L.get(M).__webglFramebuffer:null;me.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(R,te,fe=0){const J=Math.pow(2,-fe),de=Math.floor(te.image.width*J),Oe=Math.floor(te.image.height*J);v.setTexture2D(te,0),W.copyTexSubImage2D(3553,fe,0,0,R.x,R.y,de,Oe),me.unbindTexture()},this.copyTextureToTexture=function(R,te,fe,J=0){const de=te.image.width,Oe=te.image.height,ke=N.convert(fe.format),He=N.convert(fe.type);v.setTexture2D(fe,0),W.pixelStorei(37440,fe.flipY),W.pixelStorei(37441,fe.premultiplyAlpha),W.pixelStorei(3317,fe.unpackAlignment),te.isDataTexture?W.texSubImage2D(3553,J,R.x,R.y,de,Oe,ke,He,te.image.data):te.isCompressedTexture?W.compressedTexSubImage2D(3553,J,R.x,R.y,te.mipmaps[0].width,te.mipmaps[0].height,ke,te.mipmaps[0].data):W.texSubImage2D(3553,J,R.x,R.y,ke,He,te.image),J===0&&fe.generateMipmaps&&W.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(R,te,fe,J,de=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=R.max.x-R.min.x+1,ke=R.max.y-R.min.y+1,He=R.max.z-R.min.z+1,Be=N.convert(J.format),Ke=N.convert(J.type);let We;if(J.isData3DTexture)v.setTexture3D(J,0),We=32879;else if(J.isDataArrayTexture)v.setTexture2DArray(J,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,J.flipY),W.pixelStorei(37441,J.premultiplyAlpha),W.pixelStorei(3317,J.unpackAlignment);const je=W.getParameter(3314),at=W.getParameter(32878),Ei=W.getParameter(3316),ir=W.getParameter(3315),rr=W.getParameter(32877),vn=fe.isCompressedTexture?fe.mipmaps[0]:fe.image;W.pixelStorei(3314,vn.width),W.pixelStorei(32878,vn.height),W.pixelStorei(3316,R.min.x),W.pixelStorei(3315,R.min.y),W.pixelStorei(32877,R.min.z),fe.isDataTexture||fe.isData3DTexture?W.texSubImage3D(We,de,te.x,te.y,te.z,Oe,ke,He,Be,Ke,vn.data):fe.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(We,de,te.x,te.y,te.z,Oe,ke,He,Be,vn.data)):W.texSubImage3D(We,de,te.x,te.y,te.z,Oe,ke,He,Be,Ke,vn),W.pixelStorei(3314,je),W.pixelStorei(32878,at),W.pixelStorei(3316,Ei),W.pixelStorei(3315,ir),W.pixelStorei(32877,rr),de===0&&J.generateMipmaps&&W.generateMipmap(We),me.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?v.setTextureCube(R,0):R.isData3DTexture?v.setTexture3D(R,0):R.isDataArrayTexture?v.setTexture2DArray(R,0):v.setTexture2D(R,0),me.unbindTexture()},this.resetState=function(){_=0,w=0,M=null,me.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class VS extends ym{}VS.prototype.isWebGL1Renderer=!0;class GS extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class WS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new B;class Jo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cu extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let br;const ss=new B,wr=new B,Mr=new B,Sr=new be,os=new be,xm=new it,wo=new B,as=new B,Mo=new B,Nh=new be,wl=new be,Fh=new be;class bm extends bt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new WS(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Jo(i,3,0,!1)),br.setAttribute("uv",new Jo(i,2,3,!1))}this.geometry=br,this.material=e!==void 0?e:new cu,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Mr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;So(wo.set(-.5,-.5,0),Mr,o,wr,r,s),So(as.set(.5,-.5,0),Mr,o,wr,r,s),So(Mo.set(.5,.5,0),Mr,o,wr,r,s),Nh.set(0,0),wl.set(1,0),Fh.set(1,1);let a=e.ray.intersectTriangle(wo,as,Mo,!1,ss);if(a===null&&(So(as.set(-.5,.5,0),Mr,o,wr,r,s),wl.set(0,1),a=e.ray.intersectTriangle(wo,Mo,as,!1,ss),a===null))return;const l=e.ray.origin.distanceTo(ss);l<e.near||l>e.far||t.push({distance:l,point:ss.clone(),uv:An.getUV(ss,wo,as,Mo,Nh,wl,Fh,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(n,e,t,i,r,s){Sr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(os.x=s*Sr.x-r*Sr.y,os.y=r*Sr.x+s*Sr.y):os.copy(Sr),n.copy(e),n.x+=os.x,n.y+=os.y,n.applyMatrix4(xm)}class wm extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kh=new B,zh=new B,Bh=new it,Ml=new iu,Eo=new ba;class jS extends bt{constructor(e=new Nt,t=new wm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)kh.fromBufferAttribute(t,r-1),zh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=kh.distanceTo(zh);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Eo.radius+=s,e.ray.intersectsSphere(Eo)===!1)return;Bh.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new B,u=new B,f=new B,h=new B,p=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let M=_,b=w-1;M<b;M+=p){const y=g.getX(M),A=g.getX(M+1);if(c.fromBufferAttribute(d,y),u.fromBufferAttribute(d,A),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let M=_,b=w-1;M<b;M+=p){if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,M+1),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new be:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,r=[],s=[],o=[],a=new B,l=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Et(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Et(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mm extends Jn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new be,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $S extends Mm{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function uu(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const To=new B,Sl=new uu,El=new uu,Tl=new uu;class qS extends Jn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new B){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(To.subVectors(r[0],r[1]).add(r[0]),c=To);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(To.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=To),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p),d=Math.pow(h.distanceToSquared(u),p);m<1e-4&&(m=1),g<1e-4&&(g=m),d<1e-4&&(d=m),Sl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,m,d),El.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,m,d),Tl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,m,d)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),El.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Tl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Sl.calc(l),El.calc(l),Tl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function XS(n,e){const t=1-n;return t*t*e}function YS(n,e){return 2*(1-n)*n*e}function KS(n,e){return n*n*e}function ws(n,e,t,i){return XS(n,e)+YS(n,t)+KS(n,i)}function ZS(n,e){const t=1-n;return t*t*t*e}function JS(n,e){const t=1-n;return 3*t*t*n*e}function QS(n,e){return 3*(1-n)*n*n*e}function eE(n,e){return n*n*n*e}function Ms(n,e,t,i,r){return ZS(n,e)+JS(n,t)+QS(n,i)+eE(n,r)}class tE extends Jn{constructor(e=new be,t=new be,i=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new be){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ms(e,r.x,s.x,o.x,a.x),Ms(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sm extends Jn{constructor(e=new B,t=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ms(e,r.x,s.x,o.x,a.x),Ms(e,r.y,s.y,o.y,a.y),Ms(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nE extends Jn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new be;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iE extends Jn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rE extends Jn{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends Jn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ws(e,r.x,s.x,o.x),ws(e,r.y,s.y,o.y),ws(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sE extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Uh(a,l.x,c.x,u.x,f.x),Uh(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var oE=Object.freeze({__proto__:null,ArcCurve:$S,CatmullRomCurve3:qS,CubicBezierCurve:tE,CubicBezierCurve3:Sm,EllipseCurve:Mm,LineCurve:nE,LineCurve3:iE,QuadraticBezierCurve:rE,QuadraticBezierCurve3:fu,SplineCurve:sE});class Sa extends Nt{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const m=[],d=i/2;let _=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function w(){const b=new B,y=new B;let A=0;const O=(t-e)/i;for(let x=0;x<=s;x++){const C=[],I=x/s,q=I*(t-e)+e;for(let ne=0;ne<=r;ne++){const G=ne/r,D=G*l+a,F=Math.sin(D),U=Math.cos(D);y.x=q*F,y.y=-I*i+d,y.z=q*U,f.push(y.x,y.y,y.z),b.set(F,O,U).normalize(),h.push(b.x,b.y,b.z),p.push(G,1-I),C.push(g++)}m.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const I=m[C][x],q=m[C+1][x],ne=m[C+1][x+1],G=m[C][x+1];u.push(I,q,G),u.push(q,ne,G),A+=6}c.addGroup(_,A,0),_+=A}function M(b){const y=g,A=new be,O=new B;let x=0;const C=b===!0?e:t,I=b===!0?1:-1;for(let ne=1;ne<=r;ne++)f.push(0,d*I,0),h.push(0,I,0),p.push(.5,.5),g++;const q=g;for(let ne=0;ne<=r;ne++){const D=ne/r*l+a,F=Math.cos(D),U=Math.sin(D);O.x=C*U,O.y=d*I,O.z=C*F,f.push(O.x,O.y,O.z),h.push(0,I,0),A.x=F*.5+.5,A.y=U*.5*I+.5,p.push(A.x,A.y),g++}for(let ne=0;ne<r;ne++){const G=y+ne,D=q+ne;b===!0?u.push(D,D+1,G):u.push(D+1,D,G),x+=3}c.addGroup(_,x,b===!0?1:2),_+=x}}static fromJSON(e){return new Sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hu extends Sa{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ea extends Nt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],g=[],m=[],d=[];for(let _=0;_<=i;_++){const w=[],M=_/i;let b=0;_==0&&o==0?b=.5/t:_==i&&l==Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const A=y/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),d.push(A+b,1-M),w.push(c++)}u.push(w)}for(let _=0;_<i;_++)for(let w=0;w<t;w++){const M=u[_][w+1],b=u[_][w],y=u[_+1][w],A=u[_+1][w+1];(_!==0||o>0)&&p.push(M,b,A),(_!==i-1||l<Math.PI)&&p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(m,3)),this.setAttribute("uv",new ut(d,2))}static fromJSON(e){return new Ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class du extends Nt{constructor(e=new fu(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new be;let u=new B;const f=[],h=[],p=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function m(){for(let M=0;M<t;M++)d(M);d(s===!1?t:0),w(),_()}function d(M){u=e.getPointAt(M/t,u);const b=o.normals[M],y=o.binormals[M];for(let A=0;A<=r;A++){const O=A/r*Math.PI*2,x=Math.sin(O),C=-Math.cos(O);l.x=C*b.x+x*y.x,l.y=C*b.y+x*y.y,l.z=C*b.z+x*y.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,f.push(a.x,a.y,a.z)}}function _(){for(let M=1;M<=t;M++)for(let b=1;b<=r;b++){const y=(r+1)*(M-1)+(b-1),A=(r+1)*M+(b-1),O=(r+1)*M+b,x=(r+1)*(M-1)+b;g.push(y,A,x),g.push(A,O,x)}}function w(){for(let M=0;M<=t;M++)for(let b=0;b<=r;b++)c.x=M/t,c.y=b/r,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new du(new oE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class aE extends nr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=im,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const cE=new lE;class Em{constructor(e){this.manager=e!==void 0?e:cE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class uE extends Em{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ns("img");function l(){u(),Hh.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Tm extends Em{constructor(e){super(e)}load(e,t,i,r){const s=new $t,o=new uE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Am extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Al=new it,Vh=new B,Gh=new B;class fE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hE extends fE{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dE extends Am{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DefaultUp),this.updateMatrix(),this.target=new bt,this.shadow=new hE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pE extends Am{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wh(){return(typeof performance>"u"?Date:performance).now()}class Pm{constructor(e,t,i=0,r=1/0){this.ray=new iu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return fc(e,this,i,t),i.sort(jh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)fc(e[r],this,i,t);return i.sort(jh),i}}function jh(n,e){return n.distance-e.distance}function fc(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)fc(r[s],e,t,!0)}}class hc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const Er=new pi,fi=new Pm,ls=new be,$h=new B,Ao=new B,Cl=new B,qh=new it;class mE extends _n{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,s=null;const o=[],a=this;function l(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",m),i.addEventListener("pointerleave",m)}function c(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",m),i.removeEventListener("pointerleave",m),i.style.cursor=""}function u(){c()}function f(){return e}function h(){return fi}function p(_){if(a.enabled!==!1){if(d(_),fi.setFromCamera(ls,t),r){fi.ray.intersectPlane(Er,Ao)&&r.position.copy(Ao.sub($h).applyMatrix4(qh)),a.dispatchEvent({type:"drag",object:r});return}if(_.pointerType==="mouse"||_.pointerType==="pen")if(o.length=0,fi.setFromCamera(ls,t),fi.intersectObjects(e,!0,o),o.length>0){const w=o[0].object;Er.setFromNormalAndCoplanarPoint(t.getWorldDirection(Er.normal),Cl.setFromMatrixPosition(w.matrixWorld)),s!==w&&s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null),s!==w&&(a.dispatchEvent({type:"hoveron",object:w}),i.style.cursor="pointer",s=w)}else s!==null&&(a.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null)}}function g(_){a.enabled!==!1&&(d(_),o.length=0,fi.setFromCamera(ls,t),fi.intersectObjects(e,!0,o),o.length>0&&(r=a.transformGroup===!0?e[0]:o[0].object,Er.setFromNormalAndCoplanarPoint(t.getWorldDirection(Er.normal),Cl.setFromMatrixPosition(r.matrixWorld)),fi.ray.intersectPlane(Er,Ao)&&(qh.copy(r.parent.matrixWorld).invert(),$h.copy(Ao).sub(Cl.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function m(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=s?"pointer":"auto")}function d(_){const w=i.getBoundingClientRect();ls.x=(_.clientX-w.left)/w.width*2-1,ls.y=-(_.clientY-w.top)/w.height*2+1}l(),this.enabled=!0,this.transformGroup=!1,this.activate=l,this.deactivate=c,this.dispose=u,this.getObjects=f,this.getRaycaster=h}}function gE(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function s(){var o,a=i.length,l,c=0,u=0,f=0;for(o=0;o<a;++o)l=i[o],c+=l.x||0,u+=l.y||0,f+=l.z||0;for(c=(c/a-n)*r,u=(u/a-e)*r,f=(f/a-t)*r,o=0;o<a;++o)l=i[o],c&&(l.x-=c),u&&(l.y-=u),f&&(l.z-=f)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(n=+o,s):n},s.y=function(o){return arguments.length?(e=+o,s):e},s.z=function(o){return arguments.length?(t=+o,s):t},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function _E(n){var e=+this._x.call(null,n);return Lm(this.cover(e),e,n)}function Lm(n,e,t){if(isNaN(e))return n;var i,r=n._root,s={data:t},o=n._x0,a=n._x1,l,c,u,f,h;if(!r)return n._root=s,n;for(;r.length;)if((u=e>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[f=+u]))return i[f]=s,n;if(c=+n._x.call(null,r.data),e===c)return s.next=r,i?i[f]=s:n._root=s,n;do i=i?i[f]=new Array(2):n._root=new Array(2),(u=e>=(l=(o+a)/2))?o=l:a=l;while((f=+u)==(h=+(c>=l)));return i[h]=r,i[f]=s,n}function vE(n){var e,t=n.length,i,r=new Array(t),s=1/0,o=-1/0;for(e=0;e<t;++e)isNaN(i=+this._x.call(null,n[e]))||(r[e]=i,i<s&&(s=i),i>o&&(o=i));if(s>o)return this;for(this.cover(s).cover(o),e=0;e<t;++e)Lm(this,r[e],n[e]);return this}function yE(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,s,o;e>n||n>=t;)switch(o=+(n<e),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function xE(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function bE(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function qn(n,e,t){this.node=n,this.x0=e,this.x1=t}function wE(n,e){var t,i=this._x0,r,s,o=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new qn(l,i,o)),e==null?e=1/0:(i=n-e,o=n+e);c=a.pop();)if(!(!(l=c.node)||(r=c.x0)>o||(s=c.x1)<i))if(l.length){var f=(r+s)/2;a.push(new qn(l[1],f,s),new qn(l[0],r,f)),(u=+(n>=f))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var h=Math.abs(n-+this._x.call(null,l.data));h<e&&(e=h,i=n-h,o=n+h,t=l.data)}return t}function ME(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._x1,l,c,u,f,h;if(!t)return this;if(t.length)for(;;){if((u=l>=(c=(o+a)/2))?o=c:a=c,e=t,!(t=t[f=+u]))return this;if(!t.length)break;e[f+1&1]&&(i=e,h=f)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[f]=s:delete e[f],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=s,this)}function SE(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function EE(){return this._root}function TE(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function AE(n){var e=[],t,i=this._root,r,s,o;for(i&&e.push(new qn(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&e.push(new qn(r,a,o)),(r=i[0])&&e.push(new qn(r,s,a))}return this}function CE(n){var e=[],t=[],i;for(this._root&&e.push(new qn(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&e.push(new qn(s,o,l)),(s=r[1])&&e.push(new qn(s,l,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function PE(n){return n[0]}function LE(n){return arguments.length?(this._x=n,this):this._x}function Rm(n,e){var t=new pu(e==null?PE:e,NaN,NaN);return n==null?t:t.addAll(n)}function pu(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Xh(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Bt=Rm.prototype=pu.prototype;Bt.copy=function(){var n=new pu(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Xh(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Xh(i));return n};Bt.add=_E;Bt.addAll=vE;Bt.cover=yE;Bt.data=xE;Bt.extent=bE;Bt.find=wE;Bt.remove=ME;Bt.removeAll=SE;Bt.root=EE;Bt.size=TE;Bt.visit=AE;Bt.visitAfter=CE;Bt.x=LE;function RE(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Dm(this.cover(e,t),e,t,n)}function Dm(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,u=n._y1,f,h,p,g,m,d,_,w;if(!s)return n._root=o,n;for(;s.length;)if((m=e>=(f=(a+c)/2))?a=f:c=f,(d=t>=(h=(l+u)/2))?l=h:u=h,r=s,!(s=s[_=d<<1|m]))return r[_]=o,n;if(p=+n._x.call(null,s.data),g=+n._y.call(null,s.data),e===p&&t===g)return o.next=s,r?r[_]=o:n._root=o,n;do r=r?r[_]=new Array(4):n._root=new Array(4),(m=e>=(f=(a+c)/2))?a=f:c=f,(d=t>=(h=(l+u)/2))?l=h:u=h;while((_=d<<1|m)===(w=(g>=h)<<1|p>=f));return r[w]=s,r[_]=o,n}function DE(n){var e,t,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(o[t]=r,a[t]=s,r<l&&(l=r),r>u&&(u=r),s<c&&(c=s),s>f&&(f=s));if(l>u||c>f)return this;for(this.cover(l,c).cover(u,f),t=0;t<i;++t)Dm(this,o[t],a[t],n[t]);return this}function OE(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var o=r-t||1,a=this._root,l,c;t>n||n>=r||i>e||e>=s;)switch(c=(e<i)<<1|n<t,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=t+o,s=i+o;break;case 1:t=r-o,s=i+o;break;case 2:r=t+o,i=s-o;break;case 3:t=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function IE(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function NE(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Dt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function FE(n,e,t){var i,r=this._x0,s=this._y0,o,a,l,c,u=this._x1,f=this._y1,h=[],p=this._root,g,m;for(p&&h.push(new Dt(p,r,s,u,f)),t==null?t=1/0:(r=n-t,s=e-t,u=n+t,f=e+t,t*=t);g=h.pop();)if(!(!(p=g.node)||(o=g.x0)>u||(a=g.y0)>f||(l=g.x1)<r||(c=g.y1)<s))if(p.length){var d=(o+l)/2,_=(a+c)/2;h.push(new Dt(p[3],d,_,l,c),new Dt(p[2],o,_,d,c),new Dt(p[1],d,a,l,_),new Dt(p[0],o,a,d,_)),(m=(e>=_)<<1|n>=d)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-m],h[h.length-1-m]=g)}else{var w=n-+this._x.call(null,p.data),M=e-+this._y.call(null,p.data),b=w*w+M*M;if(b<t){var y=Math.sqrt(t=b);r=n-y,s=e-y,u=n+y,f=e+y,i=p.data}}return i}function kE(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,f,h,p,g,m,d,_;if(!t)return this;if(t.length)for(;;){if((g=u>=(h=(o+l)/2))?o=h:l=h,(m=f>=(p=(a+c)/2))?a=p:c=p,e=t,!(t=t[d=m<<1|g]))return this;if(!t.length)break;(e[d+1&3]||e[d+2&3]||e[d+3&3])&&(i=e,_=d)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[d]=s:delete e[d],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[_]=t:this._root=t),this):(this._root=s,this)}function zE(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function BE(){return this._root}function UE(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function HE(n){var e=[],t,i=this._root,r,s,o,a,l;for(i&&e.push(new Dt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.x1,l=t.y1)&&i.length){var c=(s+a)/2,u=(o+l)/2;(r=i[3])&&e.push(new Dt(r,c,u,a,l)),(r=i[2])&&e.push(new Dt(r,s,u,c,l)),(r=i[1])&&e.push(new Dt(r,c,o,a,u)),(r=i[0])&&e.push(new Dt(r,s,o,c,u))}return this}function VE(n){var e=[],t=[],i;for(this._root&&e.push(new Dt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,u=(o+l)/2,f=(a+c)/2;(s=r[0])&&e.push(new Dt(s,o,a,u,f)),(s=r[1])&&e.push(new Dt(s,u,a,l,f)),(s=r[2])&&e.push(new Dt(s,o,f,u,c)),(s=r[3])&&e.push(new Dt(s,u,f,l,c))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function GE(n){return n[0]}function WE(n){return arguments.length?(this._x=n,this):this._x}function jE(n){return n[1]}function $E(n){return arguments.length?(this._y=n,this):this._y}function Om(n,e,t){var i=new mu(e==null?GE:e,t==null?jE:t,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function mu(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Yh(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ft=Om.prototype=mu.prototype;Ft.copy=function(){var n=new mu(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Yh(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Yh(i));return n};Ft.add=RE;Ft.addAll=DE;Ft.cover=OE;Ft.data=IE;Ft.extent=NE;Ft.find=FE;Ft.remove=kE;Ft.removeAll=zE;Ft.root=BE;Ft.size=UE;Ft.visit=HE;Ft.visitAfter=VE;Ft.x=WE;Ft.y=$E;function qE(n){var e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return Im(this.cover(e,t,i),e,t,i,n)}function Im(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var s,o=n._root,a={data:r},l=n._x0,c=n._y0,u=n._z0,f=n._x1,h=n._y1,p=n._z1,g,m,d,_,w,M,b,y,A,O,x;if(!o)return n._root=a,n;for(;o.length;)if((b=e>=(g=(l+f)/2))?l=g:f=g,(y=t>=(m=(c+h)/2))?c=m:h=m,(A=i>=(d=(u+p)/2))?u=d:p=d,s=o,!(o=o[O=A<<2|y<<1|b]))return s[O]=a,n;if(_=+n._x.call(null,o.data),w=+n._y.call(null,o.data),M=+n._z.call(null,o.data),e===_&&t===w&&i===M)return a.next=o,s?s[O]=a:n._root=a,n;do s=s?s[O]=new Array(8):n._root=new Array(8),(b=e>=(g=(l+f)/2))?l=g:f=g,(y=t>=(m=(c+h)/2))?c=m:h=m,(A=i>=(d=(u+p)/2))?u=d:p=d;while((O=A<<2|y<<1|b)===(x=(M>=d)<<2|(w>=m)<<1|_>=g));return s[x]=o,s[O]=a,n}function XE(n){var e,t,i=n.length,r,s,o,a=new Array(i),l=new Array(i),c=new Array(i),u=1/0,f=1/0,h=1/0,p=-1/0,g=-1/0,m=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||isNaN(o=+this._z.call(null,e))||(a[t]=r,l[t]=s,c[t]=o,r<u&&(u=r),r>p&&(p=r),s<f&&(f=s),s>g&&(g=s),o<h&&(h=o),o>m&&(m=o));if(u>p||f>g||h>m)return this;for(this.cover(u,f,h).cover(p,g,m),t=0;t<i;++t)Im(this,a[t],l[t],c[t],n[t]);return this}function YE(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,l=(s=Math.floor(t))+1;else{for(var c=o-i||1,u=this._root,f,h;i>n||n>=o||r>e||e>=a||s>t||t>=l;)switch(h=(t<s)<<2|(e<r)<<1|n<i,f=new Array(8),f[h]=u,u=f,c*=2,h){case 0:o=i+c,a=r+c,l=s+c;break;case 1:i=o-c,a=r+c,l=s+c;break;case 2:o=i+c,r=a-c,l=s+c;break;case 3:i=o-c,r=a-c,l=s+c;break;case 4:o=i+c,a=r+c,s=l-c;break;case 5:i=o-c,a=r+c,s=l-c;break;case 6:o=i+c,r=a-c,s=l-c;break;case 7:i=o-c,r=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function KE(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function ZE(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Je(n,e,t,i,r,s,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function JE(n,e,t,i){var r,s=this._x0,o=this._y0,a=this._z0,l,c,u,f,h,p,g=this._x1,m=this._y1,d=this._z1,_=[],w=this._root,M,b;for(w&&_.push(new Je(w,s,o,a,g,m,d)),i==null?i=1/0:(s=n-i,o=e-i,a=t-i,g=n+i,m=e+i,d=t+i,i*=i);M=_.pop();)if(!(!(w=M.node)||(l=M.x0)>g||(c=M.y0)>m||(u=M.z0)>d||(f=M.x1)<s||(h=M.y1)<o||(p=M.z1)<a))if(w.length){var y=(l+f)/2,A=(c+h)/2,O=(u+p)/2;_.push(new Je(w[7],y,A,O,f,h,p),new Je(w[6],l,A,O,y,h,p),new Je(w[5],y,c,O,f,A,p),new Je(w[4],l,c,O,y,A,p),new Je(w[3],y,A,u,f,h,O),new Je(w[2],l,A,u,y,h,O),new Je(w[1],y,c,u,f,A,O),new Je(w[0],l,c,u,y,A,O)),(b=(t>=O)<<2|(e>=A)<<1|n>=y)&&(M=_[_.length-1],_[_.length-1]=_[_.length-1-b],_[_.length-1-b]=M)}else{var x=n-+this._x.call(null,w.data),C=e-+this._y.call(null,w.data),I=t-+this._z.call(null,w.data),q=x*x+C*C+I*I;if(q<i){var ne=Math.sqrt(i=q);s=n-ne,o=e-ne,a=t-ne,g=n+ne,m=e+ne,d=t+ne,r=w.data}}return r}function QE(n){if(isNaN(h=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,f=this._z1,h,p,g,m,d,_,w,M,b,y,A;if(!t)return this;if(t.length)for(;;){if((w=h>=(m=(o+c)/2))?o=m:c=m,(M=p>=(d=(a+u)/2))?a=d:u=d,(b=g>=(_=(l+f)/2))?l=_:f=_,e=t,!(t=t[y=b<<2|M<<1|w]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(i=e,A=y)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[y]=s:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[A]=t:this._root=t),this):(this._root=s,this)}function eT(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function tT(){return this._root}function nT(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function iT(n){var e=[],t,i=this._root,r,s,o,a,l,c,u;for(i&&e.push(new Je(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,s=t.x0,o=t.y0,a=t.z0,l=t.x1,c=t.y1,u=t.z1)&&i.length){var f=(s+l)/2,h=(o+c)/2,p=(a+u)/2;(r=i[7])&&e.push(new Je(r,f,h,p,l,c,u)),(r=i[6])&&e.push(new Je(r,s,h,p,f,c,u)),(r=i[5])&&e.push(new Je(r,f,o,p,l,h,u)),(r=i[4])&&e.push(new Je(r,s,o,p,f,h,u)),(r=i[3])&&e.push(new Je(r,f,h,a,l,c,p)),(r=i[2])&&e.push(new Je(r,s,h,a,f,c,p)),(r=i[1])&&e.push(new Je(r,f,o,a,l,h,p)),(r=i[0])&&e.push(new Je(r,s,o,a,f,h,p))}return this}function rT(n){var e=[],t=[],i;for(this._root&&e.push(new Je(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,c=i.x1,u=i.y1,f=i.z1,h=(o+c)/2,p=(a+u)/2,g=(l+f)/2;(s=r[0])&&e.push(new Je(s,o,a,l,h,p,g)),(s=r[1])&&e.push(new Je(s,h,a,l,c,p,g)),(s=r[2])&&e.push(new Je(s,o,p,l,h,u,g)),(s=r[3])&&e.push(new Je(s,h,p,l,c,u,g)),(s=r[4])&&e.push(new Je(s,o,a,g,h,p,f)),(s=r[5])&&e.push(new Je(s,h,a,g,c,p,f)),(s=r[6])&&e.push(new Je(s,o,p,g,h,u,f)),(s=r[7])&&e.push(new Je(s,h,p,g,c,u,f))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function sT(n){return n[0]}function oT(n){return arguments.length?(this._x=n,this):this._x}function aT(n){return n[1]}function lT(n){return arguments.length?(this._y=n,this):this._y}function cT(n){return n[2]}function uT(n){return arguments.length?(this._z=n,this):this._z}function Nm(n,e,t,i){var r=new gu(e==null?sT:e,t==null?aT:t,i==null?cT:i,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function gu(n,e,t,i,r,s,o,a,l){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function Kh(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ct=Nm.prototype=gu.prototype;Ct.copy=function(){var n=new gu(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Kh(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=Kh(i));return n};Ct.add=qE;Ct.addAll=XE;Ct.cover=YE;Ct.data=KE;Ct.extent=ZE;Ct.find=JE;Ct.remove=QE;Ct.removeAll=eT;Ct.root=tT;Ct.size=nT;Ct.visit=iT;Ct.visitAfter=rT;Ct.x=oT;Ct.y=lT;Ct.z=uT;function Gn(n){return function(){return n}}function Vn(n){return(n()-.5)*1e-6}function fT(n){return n.index}function Zh(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function hT(n){var e=fT,t=h,i,r=Gn(30),s,o,a,l,c,u,f=1;n==null&&(n=[]);function h(_){return 1/Math.min(l[_.source.index],l[_.target.index])}function p(_){for(var w=0,M=n.length;w<f;++w)for(var b=0,y,A,O,x=0,C=0,I=0,q,ne;b<M;++b)y=n[b],A=y.source,O=y.target,x=O.x+O.vx-A.x-A.vx||Vn(u),a>1&&(C=O.y+O.vy-A.y-A.vy||Vn(u)),a>2&&(I=O.z+O.vz-A.z-A.vz||Vn(u)),q=Math.sqrt(x*x+C*C+I*I),q=(q-s[b])/q*_*i[b],x*=q,C*=q,I*=q,O.vx-=x*(ne=c[b]),a>1&&(O.vy-=C*ne),a>2&&(O.vz-=I*ne),A.vx+=x*(ne=1-ne),a>1&&(A.vy+=C*ne),a>2&&(A.vz+=I*ne)}function g(){if(!!o){var _,w=o.length,M=n.length,b=new Map(o.map((A,O)=>[e(A,O,o),A])),y;for(_=0,l=new Array(w);_<M;++_)y=n[_],y.index=_,typeof y.source!="object"&&(y.source=Zh(b,y.source)),typeof y.target!="object"&&(y.target=Zh(b,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(_=0,c=new Array(M);_<M;++_)y=n[_],c[_]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);i=new Array(M),m(),s=new Array(M),d()}}function m(){if(!!o)for(var _=0,w=n.length;_<w;++_)i[_]=+t(n[_],_,n)}function d(){if(!!o)for(var _=0,w=n.length;_<w;++_)s[_]=+r(n[_],_,n)}return p.initialize=function(_,...w){o=_,u=w.find(M=>typeof M=="function")||Math.random,a=w.find(M=>[1,2,3].includes(M))||2,g()},p.links=function(_){return arguments.length?(n=_,g(),p):n},p.id=function(_){return arguments.length?(e=_,p):e},p.iterations=function(_){return arguments.length?(f=+_,p):f},p.strength=function(_){return arguments.length?(t=typeof _=="function"?_:Gn(+_),m(),p):t},p.distance=function(_){return arguments.length?(r=typeof _=="function"?_:Gn(+_),d(),p):r},p}var dT={value:()=>{}};function Fm(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new Ho(t)}function Ho(n){this._=n}function pT(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}Ho.prototype=Fm.prototype={constructor:Ho,on:function(n,e){var t=this._,i=pT(n+"",t),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=mT(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<o;)if(r=(n=i[s]).type)t[r]=Jh(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Jh(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Ho(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function mT(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Jh(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=dT,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Wr=0,vs=0,cs=0,km=1e3,Qo,ys,ea=0,Qi=0,Ta=0,Fs=typeof performance=="object"&&performance.now?performance:Date,zm=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Bm(){return Qi||(zm(gT),Qi=Fs.now()+Ta)}function gT(){Qi=0}function dc(){this._call=this._time=this._next=null}dc.prototype=Um.prototype={constructor:dc,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Bm():+t)+(e==null?0:+e),!this._next&&ys!==this&&(ys?ys._next=this:Qo=this,ys=this),this._call=n,this._time=t,pc()},stop:function(){this._call&&(this._call=null,this._time=1/0,pc())}};function Um(n,e,t){var i=new dc;return i.restart(n,e,t),i}function _T(){Bm(),++Wr;for(var n=Qo,e;n;)(e=Qi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Wr}function Qh(){Qi=(ea=Fs.now())+Ta,Wr=vs=0;try{_T()}finally{Wr=0,yT(),Qi=0}}function vT(){var n=Fs.now(),e=n-ea;e>km&&(Ta-=e,ea=n)}function yT(){for(var n,e=Qo,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Qo=t);ys=n,pc(i)}function pc(n){if(!Wr){vs&&(vs=clearTimeout(vs));var e=n-Qi;e>24?(n<1/0&&(vs=setTimeout(Qh,n-Fs.now()-Ta)),cs&&(cs=clearInterval(cs))):(cs||(ea=Fs.now(),cs=setInterval(vT,km)),Wr=1,zm(Qh))}}const xT=1664525,bT=1013904223,ed=4294967296;function wT(){let n=1;return()=>(n=(xT*n+bT)%ed)/ed}var td=3;function Pl(n){return n.x}function nd(n){return n.y}function MT(n){return n.z}var ST=10,ET=Math.PI*(3-Math.sqrt(5)),TT=Math.PI*20/(9+Math.sqrt(221));function AT(n,e){e=e||2;var t=Math.min(td,Math.max(1,Math.round(e))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,u=Um(p),f=Fm("tick","end"),h=wT();n==null&&(n=[]);function p(){g(),f.call("tick",i),r<s&&(u.stop(),f.call("end",i))}function g(_){var w,M=n.length,b;_===void 0&&(_=1);for(var y=0;y<_;++y)for(r+=(a-r)*o,c.forEach(function(A){A(r)}),w=0;w<M;++w)b=n[w],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),t>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),t>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return i}function m(){for(var _=0,w=n.length,M;_<w;++_){if(M=n[_],M.index=_,M.fx!=null&&(M.x=M.fx),M.fy!=null&&(M.y=M.fy),M.fz!=null&&(M.z=M.fz),isNaN(M.x)||t>1&&isNaN(M.y)||t>2&&isNaN(M.z)){var b=ST*(t>2?Math.cbrt(.5+_):t>1?Math.sqrt(.5+_):_),y=_*ET,A=_*TT;t===1?M.x=b:t===2?(M.x=b*Math.cos(y),M.y=b*Math.sin(y)):(M.x=b*Math.sin(y)*Math.cos(A),M.y=b*Math.cos(y),M.z=b*Math.sin(y)*Math.sin(A))}(isNaN(M.vx)||t>1&&isNaN(M.vy)||t>2&&isNaN(M.vz))&&(M.vx=0,t>1&&(M.vy=0),t>2&&(M.vz=0))}}function d(_){return _.initialize&&_.initialize(n,h,t),_}return m(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(_){return arguments.length?(t=Math.min(td,Math.max(1,Math.round(_))),c.forEach(d),i):t},nodes:function(_){return arguments.length?(n=_,m(),c.forEach(d),i):n},alpha:function(_){return arguments.length?(r=+_,i):r},alphaMin:function(_){return arguments.length?(s=+_,i):s},alphaDecay:function(_){return arguments.length?(o=+_,i):+o},alphaTarget:function(_){return arguments.length?(a=+_,i):a},velocityDecay:function(_){return arguments.length?(l=1-_,i):1-l},randomSource:function(_){return arguments.length?(h=_,c.forEach(d),i):h},force:function(_,w){return arguments.length>1?(w==null?c.delete(_):c.set(_,d(w)),i):c.get(_)},find:function(){var _=Array.prototype.slice.call(arguments),w=_.shift()||0,M=(t>1?_.shift():null)||0,b=(t>2?_.shift():null)||0,y=_.shift()||1/0,A=0,O=n.length,x,C,I,q,ne,G;for(y*=y,A=0;A<O;++A)ne=n[A],x=w-ne.x,C=M-(ne.y||0),I=b-(ne.z||0),q=x*x+C*C+I*I,q<y&&(G=ne,y=q);return G},on:function(_,w){return arguments.length>1?(f.on(_,w),i):f.on(_)}}}function CT(){var n,e,t,i,r,s=Gn(-30),o,a=1,l=1/0,c=.81;function u(g){var m,d=n.length,_=(e===1?Rm(n,Pl):e===2?Om(n,Pl,nd):e===3?Nm(n,Pl,nd,MT):null).visitAfter(h);for(r=g,m=0;m<d;++m)t=n[m],_.visit(p)}function f(){if(!!n){var g,m=n.length,d;for(o=new Array(m),g=0;g<m;++g)d=n[g],o[d.index]=+s(d,g,n)}}function h(g){var m=0,d,_,w=0,M,b,y,A,O=g.length;if(O){for(M=b=y=A=0;A<O;++A)(d=g[A])&&(_=Math.abs(d.value))&&(m+=d.value,w+=_,M+=_*(d.x||0),b+=_*(d.y||0),y+=_*(d.z||0));m*=Math.sqrt(4/O),g.x=M/w,e>1&&(g.y=b/w),e>2&&(g.z=y/w)}else{d=g,d.x=d.data.x,e>1&&(d.y=d.data.y),e>2&&(d.z=d.data.z);do m+=o[d.data.index];while(d=d.next)}g.value=m}function p(g,m,d,_,w){if(!g.value)return!0;var M=[d,_,w][e-1],b=g.x-t.x,y=e>1?g.y-t.y:0,A=e>2?g.z-t.z:0,O=M-m,x=b*b+y*y+A*A;if(O*O/c<x)return x<l&&(b===0&&(b=Vn(i),x+=b*b),e>1&&y===0&&(y=Vn(i),x+=y*y),e>2&&A===0&&(A=Vn(i),x+=A*A),x<a&&(x=Math.sqrt(a*x)),t.vx+=b*g.value*r/x,e>1&&(t.vy+=y*g.value*r/x),e>2&&(t.vz+=A*g.value*r/x)),!0;if(g.length||x>=l)return;(g.data!==t||g.next)&&(b===0&&(b=Vn(i),x+=b*b),e>1&&y===0&&(y=Vn(i),x+=y*y),e>2&&A===0&&(A=Vn(i),x+=A*A),x<a&&(x=Math.sqrt(a*x)));do g.data!==t&&(O=o[g.data.index]*r/x,t.vx+=b*O,e>1&&(t.vy+=y*O),e>2&&(t.vz+=A*O));while(g=g.next)}return u.initialize=function(g,...m){n=g,i=m.find(d=>typeof d=="function")||Math.random,e=m.find(d=>[1,2,3].includes(d))||2,f()},u.strength=function(g){return arguments.length?(s=typeof g=="function"?g:Gn(+g),f(),u):s},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u.theta=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u}function PT(n,e,t,i){var r,s,o=Gn(.1),a,l;typeof n!="function"&&(n=Gn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function c(f){for(var h=0,p=r.length;h<p;++h){var g=r[h],m=g.x-e||1e-6,d=(g.y||0)-t||1e-6,_=(g.z||0)-i||1e-6,w=Math.sqrt(m*m+d*d+_*_),M=(l[h]-w)*a[h]*f/w;g.vx+=m*M,s>1&&(g.vy+=d*M),s>2&&(g.vz+=_*M)}}function u(){if(!!r){var f,h=r.length;for(a=new Array(h),l=new Array(h),f=0;f<h;++f)l[f]=+n(r[f],f,r),a[f]=isNaN(l[f])?0:+o(r[f],f,r)}}return c.initialize=function(f,...h){r=f,s=h.find(p=>[1,2,3].includes(p))||2,u()},c.strength=function(f){return arguments.length?(o=typeof f=="function"?f:Gn(+f),u(),c):o},c.radius=function(f){return arguments.length?(n=typeof f=="function"?f:Gn(+f),u(),c):n},c.x=function(f){return arguments.length?(e=+f,c):e},c.y=function(f){return arguments.length?(t=+f,c):t},c.z=function(f){return arguments.length?(i=+f,c):i},c}var _u=function(e){RT(e);var t=LT(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function LT(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var s=e[t];return s||(s=e[t]=[]),s.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var s=typeof i!="function";if(s)delete e[t];else for(var o=e[t],a=0;a<o.length;++a)o[a].callback===i&&o.splice(a,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var s=0;s<i.length;++s){var o=i[s];o.callback.apply(o.ctx,r)}return n}}}function RT(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var DT=IT,OT=_u;function IT(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,s=n.multigraph?b:M,o=[],a=U,l=U,c=U,u=U,f={version:20,addNode:m,addLink:w,removeLink:x,removeNode:_,getNode:d,getNodeCount:y,getLinkCount:A,getEdgeCount:A,getLinksCount:A,getNodesCount:y,getLinks:O,forEachNode:$,forEachLinkedNode:G,forEachLink:ne,beginUpdate:c,endUpdate:u,clear:q,hasLink:I,hasNode:d,getLink:I};return OT(f),h(),f;function h(){var k=f.on;f.on=ee;function ee(){return f.beginUpdate=c=re,f.endUpdate=u=Z,a=p,l=g,f.on=k,k.apply(f,arguments)}}function p(k,ee){o.push({link:k,changeType:ee})}function g(k,ee){o.push({node:k,changeType:ee})}function m(k,ee){if(k===void 0)throw new Error("Invalid node identifier");c();var Q=d(k);return Q?(Q.data=ee,l(Q,"update")):(Q=new NT(k,ee),l(Q,"add")),e.set(k,Q),u(),Q}function d(k){return e.get(k)}function _(k){var ee=d(k);if(!ee)return!1;c();var Q=ee.links;return Q&&(Q.forEach(C),ee.links=null),e.delete(k),l(ee,"remove"),u(),!0}function w(k,ee,Q){c();var ue=d(k)||m(k),ce=d(ee)||m(ee),se=s(k,ee,Q),W=t.has(se.id);return t.set(se.id,se),id(ue,se),k!==ee&&id(ce,se),a(se,W?"update":"add"),u(),se}function M(k,ee,Q){var ue=Co(k,ee),ce=t.get(ue);return ce?(ce.data=Q,ce):new rd(k,ee,Q,ue)}function b(k,ee,Q){var ue=Co(k,ee),ce=i.hasOwnProperty(ue);if(ce||I(k,ee)){ce||(i[ue]=0);var se="@"+ ++i[ue];ue=Co(k+se,ee+se)}return new rd(k,ee,Q,ue)}function y(){return e.size}function A(){return t.size}function O(k){var ee=d(k);return ee?ee.links:null}function x(k,ee){return ee!==void 0&&(k=I(k,ee)),C(k)}function C(k){if(!k||!t.get(k.id))return!1;c(),t.delete(k.id);var ee=d(k.fromId),Q=d(k.toId);return ee&&ee.links.delete(k),Q&&Q.links.delete(k),a(k,"remove"),u(),!0}function I(k,ee){if(!(k===void 0||ee===void 0))return t.get(Co(k,ee))}function q(){c(),$(function(k){_(k.id)}),u()}function ne(k){if(typeof k=="function")for(var ee=t.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}function G(k,ee,Q){var ue=d(k);if(ue&&ue.links&&typeof ee=="function")return Q?F(ue.links,k,ee):D(ue.links,k,ee)}function D(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value,j=W.fromId===ee?W.toId:W.fromId;if(ue=Q(e.get(j),W),ue)return!0;se=ce.next()}}function F(k,ee,Q){for(var ue,ce=k.values(),se=ce.next();!se.done;){var W=se.value;if(W.fromId===ee&&(ue=Q(e.get(W.toId),W),ue))return!0;se=ce.next()}}function U(){}function re(){r+=1}function Z(){r-=1,r===0&&o.length>0&&(f.fire("changed",o),o.length=0)}function $(k){if(typeof k!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+k);for(var ee=e.values(),Q=ee.next();!Q.done;){if(k(Q.value))return!0;Q=ee.next()}}}function NT(n,e){this.id=n,this.links=null,this.data=e}function id(n,e){n.links?n.links.add(e):n.links=new Set([e])}function rd(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Co(n,e){return n.toString()+"\u{1F449} "+e.toString()}var vu={exports:{}},js={exports:{}},Hm=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const FT=Hm;var Jr=function(e){return t;function t(i,r){let s=r&&r.indent||0,o=r&&r.join!==void 0?r.join:`
`,a=Array(s+1).join(" "),l=[];for(let c=0;c<e;++c){let u=FT(c),f=c===0?"":a;l.push(f+i.replace(/{var}/g,u))}return l.join(o)}};const Vm=Jr;js.exports=kT;js.exports.generateCreateBodyFunctionBody=Gm;js.exports.getVectorCode=jm;js.exports.getBodyCode=Wm;function kT(n,e){let t=Gm(n,e),{Body:i}=new Function(t)();return i}function Gm(n,e){return`
${jm(n,e)}
${Wm(n)}
return {Body: Body, Vector: Vector};
`}function Wm(n){let e=Vm(n),t=e("{var}",{join:", "});return`
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
};`}function jm(n,e){let t=Vm(n),i="";return e&&(i=`${t(`
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
  };`}var Si={exports:{}};const yu=Jr,hi=Hm;Si.exports=zT;Si.exports.generateQuadTreeFunctionBody=$m;Si.exports.getInsertStackCode=Zm;Si.exports.getQuadNodeCode=Km;Si.exports.isSamePosition=qm;Si.exports.getChildBodyCode=Ym;Si.exports.setChildBodyCode=Xm;function zT(n){let e=$m(n);return new Function(e)()}function $m(n){let e=yu(n),t=Math.pow(2,n);return`
${Zm()}
${Km(n)}
${qm(n)}
${Ym(n)}
${Xm(n)}

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
`)}}function qm(n){let e=yu(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Xm(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let s=r===0?"  ":"  else ";i.push(`${s}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function Ym(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function Km(n){let e=yu(n),t=Math.pow(2,n);var i=`
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
`)}}function Zm(){return`
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
`}var xu={exports:{}};xu.exports=UT;xu.exports.generateFunctionBody=Jm;const BT=Jr;function UT(n){let e=Jm(n);return new Function("bodies","settings","random",e)}function Jm(n){let e=BT(n);return`
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
`}var bu={exports:{}};const HT=Jr;bu.exports=VT;bu.exports.generateCreateDragForceFunctionBody=Qm;function VT(n){let e=Qm(n);return new Function("options",e)}function Qm(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${HT(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var wu={exports:{}};const GT=Jr;wu.exports=WT;wu.exports.generateCreateSpringForceFunctionBody=eg;function WT(n){let e=eg(n);return new Function("options","random",e)}function eg(n){let e=GT(n);return`
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
`}var Mu={exports:{}};const jT=Jr;Mu.exports=$T;Mu.exports.generateIntegratorFunctionBody=tg;function $T(n){let e=tg(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function tg(n){let e=jT(n);return`
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
`}var Ll,sd;function qT(){if(sd)return Ll;sd=1,Ll=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Ll}var Rl,od;function XT(){if(od)return Rl;od=1,Rl=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),s=typeof t[i],o=!r||typeof e[i]!==s;o?e[i]=t[i]:s==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Rl}var us={exports:{}},ad;function YT(){if(ad)return us.exports;ad=1,us.exports=n,us.exports.random=n,us.exports.randomIterator=a;function n(l){var c=typeof l=="number"?l:+new Date;return new e(c)}function e(l){this.seed=l}e.prototype.next=o,e.prototype.nextDouble=s,e.prototype.uniform=s,e.prototype.gaussian=t;function t(){var l,c,u;do c=this.nextDouble()*2-1,u=this.nextDouble()*2-1,l=c*c+u*u;while(l>=1||l===0);return c*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,c=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*c/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function s(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function o(l){return Math.floor(this.nextDouble()*l)}function a(l,c){var u=c||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:h,shuffle:f};function f(){var p,g,m;for(p=l.length-1;p>0;--p)g=u.next(p+1),m=l[g],l[g]=l[p],l[p]=m;return l}function h(p){var g,m,d;for(g=l.length-1;g>0;--g)m=u.next(g+1),d=l[m],l[m]=l[g],l[g]=d,p(d);l.length&&p(l[0])}}return us.exports}var ng=nA,KT=js.exports,ZT=Si.exports,JT=xu.exports,QT=bu.exports,eA=wu.exports,tA=Mu.exports,ld={};function nA(n){var e=qT(),t=XT(),i=_u;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=ld[n.dimensions];if(!r){var s=n.dimensions;r={Body:KT(s,n.debug),createQuadTree:ZT(s),createBounds:JT(s),createDragForce:QT(s),createSpringForce:eA(s),integrate:tA(s)},ld[s]=r}var o=r.Body,a=r.createQuadTree,l=r.createBounds,c=r.createDragForce,u=r.createSpringForce,f=r.integrate,h=F=>new o(F),p=YT().random(42),g=[],m=[],d=a(n,p),_=l(g,n,p),w=u(n,p),M=c(n),b=0,y=[],A=new Map,O=0;I("nbody",G),I("spring",D);var x={bodies:g,quadTree:d,springs:m,settings:n,addForce:I,removeForce:q,getForces:ne,step:function(){for(var F=0;F<y.length;++F)y[F](O);var U=f(g,n.timeStep,n.adaptiveTimeStepWeight);return O+=1,U},addBody:function(F){if(!F)throw new Error("Body is required");return g.push(F),F},addBodyAt:function(F){if(!F)throw new Error("Body position is required");var U=h(F);return g.push(U),U},removeBody:function(F){if(!!F){var U=g.indexOf(F);if(!(U<0))return g.splice(U,1),g.length===0&&_.reset(),!0}},addSpring:function(F,U,re,Z){if(!F||!U)throw new Error("Cannot add null spring to force simulator");typeof re!="number"&&(re=-1);var $=new e(F,U,re,Z>=0?Z:-1);return m.push($),$},getTotalMovement:function(){return b},removeSpring:function(F){if(!!F){var U=m.indexOf(F);if(U>-1)return m.splice(U,1),!0}},getBestNewBodyPosition:function(F){return _.getBestNewPosition(F)},getBBox:C,getBoundingBox:C,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(F){return F!==void 0?(n.gravity=F,d.options({gravity:F}),this):n.gravity},theta:function(F){return F!==void 0?(n.theta=F,d.options({theta:F}),this):n.theta},random:p};return iA(n,x),i(x),x;function C(){return _.update(),_.box}function I(F,U){if(A.has(F))throw new Error("Force "+F+" is already added");A.set(F,U),y.push(U)}function q(F){var U=y.indexOf(A.get(F));U<0||(y.splice(U,1),A.delete(F))}function ne(){return A}function G(){if(g.length!==0){d.insertBodies(g);for(var F=g.length;F--;){var U=g[F];U.isPinned||(U.reset(),d.updateBodyForce(U),M.update(U))}}}function D(){for(var F=m.length;F--;)w.update(m[F])}}function iA(n,e){for(var t in n)rA(n,e,t)}function rA(n,e,t){if(!!n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}vu.exports=oA;vu.exports.simulator=ng;var sA=_u;function oA(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||ng,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?G:ne;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var s=new Map,o={},a=0,l=i.settings.springTransform||aA;M(),d();var c=!1,u={step:function(){if(a===0)return f(!0),!0;var D=i.step();u.lastMove=D,u.fire("step");var F=D/a,U=F<=.01;return f(U),U},getNodePosition:function(D){return q(D).pos},setNodePosition:function(D){var F=q(D);F.setPosition.apply(F,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(D){var F=o[D];if(F)return{from:F.from.pos,to:F.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:h,pinNode:function(D,F){var U=q(D.id);U.isPinned=!!F},isNodePinned:function(D){return q(D.id).isPinned},dispose:function(){n.off("changed",w),u.fire("disposed")},getBody:m,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return sA(u),u;function f(D){c!==D&&(c=D,_(D))}function h(D){s.forEach(D)}function p(){var D=0,F=0;return h(function(U){D+=Math.abs(U.force.x),F+=Math.abs(U.force.y)}),Math.sqrt(D*D+F*F)}function g(D,F){var U;if(F===void 0)typeof D!="object"?U=D:U=D.id;else{var re=n.hasLink(D,F);if(!re)return;U=re.id}return o[U]}function m(D){return s.get(D)}function d(){n.on("changed",w)}function _(D){u.fire("stable",D)}function w(D){for(var F=0;F<D.length;++F){var U=D[F];U.changeType==="add"?(U.node&&b(U.node.id),U.link&&A(U.link)):U.changeType==="remove"&&(U.node&&y(U.node),U.link&&O(U.link))}a=n.getNodesCount()}function M(){a=0,n.forEachNode(function(D){b(D.id),a+=1}),n.forEachLink(A)}function b(D){var F=s.get(D);if(!F){var U=n.getNode(D);if(!U)throw new Error("initBody() was called with unknown node id");var re=U.position;if(!re){var Z=x(U);re=i.getBestNewBodyPosition(Z)}F=i.addBodyAt(re),F.id=D,s.set(D,F),C(D),I(U)&&(F.isPinned=!0)}}function y(D){var F=D.id,U=s.get(F);U&&(s.delete(F),i.removeBody(U))}function A(D){C(D.fromId),C(D.toId);var F=s.get(D.fromId),U=s.get(D.toId),re=i.addSpring(F,U,D.length);l(D,re),o[D.id]=re}function O(D){var F=o[D.id];if(F){var U=n.getNode(D.fromId),re=n.getNode(D.toId);U&&C(U.id),re&&C(re.id),delete o[D.id],i.removeSpring(F)}}function x(D){var F=[];if(!D.links)return F;for(var U=Math.min(D.links.length,2),re=0;re<U;++re){var Z=D.links[re],$=Z.fromId!==D.id?s.get(Z.fromId):s.get(Z.toId);$&&$.pos&&F.push($)}return F}function C(D){var F=s.get(D);if(F.mass=r(D),Number.isNaN(F.mass))throw new Error("Node mass should be a number")}function I(D){return D&&(D.isPinned||D.data&&D.data.isPinned)}function q(D){var F=s.get(D);return F||(b(D),F=s.get(D)),F}function ne(D){var F=n.getLinks(D);return F?1+F.length/3:1}function G(D){var F=n.getLinks(D);return F?1+F.size/3:1}}function aA(){}function mc(n,e,t){var i,r,s,o,a;e==null&&(e=100);function l(){var u=Date.now()-o;u<e&&u>=0?i=setTimeout(l,e-u):(i=null,t||(a=n.apply(s,r),s=r=null))}var c=function(){s=this,r=arguments,o=Date.now();var u=t&&!i;return i||(i=setTimeout(l,e)),u&&(a=n.apply(s,r),s=r=null),a};return c.clear=function(){i&&(clearTimeout(i),i=null)},c.flush=function(){i&&(a=n.apply(s,r),s=r=null,clearTimeout(i),i=null)},c}mc.debounce=mc;var lA=mc;function cA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function cd(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function uA(n,e,t){return e&&cd(n.prototype,e),t&&cd(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function fA(n,e){return hA(n)||dA(n,e)||pA(n,e)||mA()}function hA(n){if(Array.isArray(n))return n}function dA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function pA(n,e){if(!!n){if(typeof n=="string")return ud(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ud(n,e)}}function ud(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function mA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gA=uA(function n(e,t){var i=t.default,r=i===void 0?null:i,s=t.triggerUpdate,o=s===void 0?!0:s,a=t.onChange,l=a===void 0?function(c,u){}:a;cA(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=o,this.onChange=l});function Su(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,s=n.methods,o=s===void 0?{}:s,a=n.aliases,l=a===void 0?{}:a,c=n.init,u=c===void 0?function(){}:c,f=n.update,h=f===void 0?function(){}:f,p=Object.keys(r).map(function(g){return new gA(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),d={};function _(b){return w(b,g),M(),_}var w=function(y,A){u.call(_,y,m,A),m.initialised=!0},M=lA(function(){!m.initialised||(h.call(_,m,d),d={})},1);return p.forEach(function(b){_[b.name]=y(b);function y(A){var O=A.name,x=A.triggerUpdate,C=x===void 0?!1:x,I=A.onChange,q=I===void 0?function(D,F){}:I,ne=A.defaultVal,G=ne===void 0?null:ne;return function(D){var F=m[O];if(!arguments.length)return F;var U=D===void 0?G:D;return m[O]=U,q.call(_,U,m,F),!d.hasOwnProperty(O)&&(d[O]=F),C&&M(),_}}}),Object.keys(o).forEach(function(b){_[b]=function(){for(var y,A=arguments.length,O=new Array(A),x=0;x<A;x++)O[x]=arguments[x];return(y=o[b]).call.apply(y,[_,m].concat(O))}}),Object.entries(l).forEach(function(b){var y=fA(b,2),A=y[0],O=y[1];return _[A]=_[O]}),_.resetProps=function(){return p.forEach(function(b){_[b.name](b.defaultVal)}),_},_.resetProps(),m._rerender=M,_}}var qe=function(n){return n instanceof Function?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class fd extends Map{constructor(e,t=yA){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(hd(this,e))}has(e){return super.has(hd(this,e))}set(e,t){return super.set(_A(this,e),t)}delete(e){return super.delete(vA(this,e))}}function hd({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function _A({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function vA({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function yA(n){return n!==null&&typeof n=="object"?n.valueOf():n}function xA(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function bA(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function wA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function MA(n,e){if(n==null)return{};var t=wA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function SA(n,e){return AA(n)||PA(n,e)||ig(n,e)||RA()}function EA(n){return TA(n)||CA(n)||ig(n)||LA()}function TA(n){if(Array.isArray(n))return gc(n)}function AA(n){if(Array.isArray(n))return n}function CA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function PA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function ig(n,e){if(!!n){if(typeof n=="string")return gc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gc(n,e)}}function gc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function LA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function OA(n){var e=DA(n,"string");return typeof e=="symbol"?e:String(e)}var dd=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),s=n.reduce(function(a,l){var c=a,u=l;return r.forEach(function(f,h){var p=f.keyAccessor,g=f.isProp,m;if(g){var d=u,_=d[p],w=MA(d,[p].map(OA));m=_,u=w}else m=p(u,h);h+1<r.length?(c.hasOwnProperty(m)||(c[m]={}),c=c[m]):t?(c.hasOwnProperty(m)||(c[m]=[]),c[m].push(u)):c[m]=u}),a},{});t instanceof Function&&function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c===r.length?Object.keys(l).forEach(function(u){return l[u]=t(l[u])}):Object.values(l).forEach(function(u){return a(u,c+1)})}(s);var o=s;return i&&(o=[],function a(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];c.length===r.length?o.push({keys:c,vals:l}):Object.entries(l).forEach(function(u){var f=SA(u,2),h=f[0],p=f[1];return a(p,[].concat(EA(c),[h]))})}(s),e instanceof Array&&e.length===0&&o.length===1&&(o[0].keys=[])),o};function pd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function IA(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pd(Object(t),!0).forEach(function(i){rg(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function rg(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function NA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function FA(n,e){if(n==null)return{};var t=NA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function sg(n,e){return zA(n)||UA(n,e)||og(n,e)||VA()}function ta(n){return kA(n)||BA(n)||og(n)||HA()}function kA(n){if(Array.isArray(n))return _c(n)}function zA(n){if(Array.isArray(n))return n}function BA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function UA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function og(n,e){if(!!n){if(typeof n=="string")return _c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _c(n,e)}}function _c(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function HA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var GA=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function WA(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var o=dd(n,t,!1),a=dd(e,t,!1),l=Object.assign({},o,a);Object.entries(l).forEach(function(c){var u=sg(c,2),f=u[0],h=u[1],p=o.hasOwnProperty(f)?a.hasOwnProperty(f)?"update":"exit":"enter";i[p].push(p==="update"?[o[f],a[f]]:h)})}else{var r=new Set(n),s=new Set(e);new Set([].concat(ta(r),ta(s))).forEach(function(c){var u=r.has(c)?s.has(c)?"update":"exit":"enter";i[u].push(u==="update"?[c,c]:c)})}return i}function jA(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,s=t.dataBindAttr,o=s===void 0?"__data":s,a=t.idAccessor,l=t.purge,c=l===void 0?!1:l,u=function(d){return d.hasOwnProperty(o)},f=e.filter(function(m){return!u(m)}),h=e.filter(u).map(function(m){return m[o]}),p=n,g=c?{enter:p,exit:h,update:[]}:WA(h,p,a);return g.update=g.update.map(function(m){var d=sg(m,2),_=d[0],w=d[1];return _!==w&&(w[r]=_[r],w[r][o]=w),w}),g.exit=g.exit.concat(f.map(function(m){return rg({},r,m)})),g}function $A(n,e,t,i,r){var s=r.createObj,o=s===void 0?function(x){return{}}:s,a=r.updateObj,l=a===void 0?function(x,C){}:a,c=r.exitObj,u=c===void 0?function(x){}:c,f=r.objBindAttr,h=f===void 0?"__obj":f,p=r.dataBindAttr,g=p===void 0?"__data":p,m=FA(r,GA),d=jA(n,e,IA({objBindAttr:h,dataBindAttr:g},m)),_=d.enter,w=d.update,M=d.exit;M.forEach(function(x){var C=x[h];delete x[h],u(C),i(C)});var b=A(_),y=[].concat(ta(_),ta(w));O(y),b.forEach(t);function A(x){var C=[];return x.forEach(function(I){var q=o(I);q&&(q[g]=I,I[h]=q,C.push(q))}),C}function O(x){x.forEach(function(C){var I=C[h];I&&(I[g]=C,l(I,C))})}}function qA(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const md=Symbol("implicit");function ag(){var n=new fd,e=[],t=[],i=md;function r(s){let o=n.get(s);if(o===void 0){if(i!==md)return i;n.set(s,o=e.push(s)-1)}return t[o%t.length]}return r.domain=function(s){if(!arguments.length)return e.slice();e=[],n=new fd;for(const o of s)n.has(o)||n.set(o,e.push(o)-1);return r},r.range=function(s){return arguments.length?(t=Array.from(s),r):t.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return ag(e,t).unknown(i)},qA.apply(r,arguments),r}function XA(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const YA=XA("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");var lg={exports:{}};(function(n){(function(e){var t=/^\s+/,i=/\s+$/,r=0,s=e.round,o=e.min,a=e.max,l=e.random;function c(v,T){if(v=v||"",T=T||{},v instanceof c)return v;if(!(this instanceof c))return new c(v,T);var S=u(v);this._originalInput=v,this._r=S.r,this._g=S.g,this._b=S.b,this._a=S.a,this._roundA=s(100*this._a)/100,this._format=T.format||S.format,this._gradientType=T.gradientType,this._r<1&&(this._r=s(this._r)),this._g<1&&(this._g=s(this._g)),this._b<1&&(this._b=s(this._b)),this._ok=S.ok,this._tc_id=r++}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var v=this.toRgb();return(v.r*299+v.g*587+v.b*114)/1e3},getLuminance:function(){var v=this.toRgb(),T,S,z,X,K,ie;return T=v.r/255,S=v.g/255,z=v.b/255,T<=.03928?X=T/12.92:X=e.pow((T+.055)/1.055,2.4),S<=.03928?K=S/12.92:K=e.pow((S+.055)/1.055,2.4),z<=.03928?ie=z/12.92:ie=e.pow((z+.055)/1.055,2.4),.2126*X+.7152*K+.0722*ie},setAlpha:function(v){return this._a=$(v),this._roundA=s(100*this._a)/100,this},toHsv:function(){var v=g(this._r,this._g,this._b);return{h:v.h*360,s:v.s,v:v.v,a:this._a}},toHsvString:function(){var v=g(this._r,this._g,this._b),T=s(v.h*360),S=s(v.s*100),z=s(v.v*100);return this._a==1?"hsv("+T+", "+S+"%, "+z+"%)":"hsva("+T+", "+S+"%, "+z+"%, "+this._roundA+")"},toHsl:function(){var v=h(this._r,this._g,this._b);return{h:v.h*360,s:v.s,l:v.l,a:this._a}},toHslString:function(){var v=h(this._r,this._g,this._b),T=s(v.h*360),S=s(v.s*100),z=s(v.l*100);return this._a==1?"hsl("+T+", "+S+"%, "+z+"%)":"hsla("+T+", "+S+"%, "+z+"%, "+this._roundA+")"},toHex:function(v){return d(this._r,this._g,this._b,v)},toHexString:function(v){return"#"+this.toHex(v)},toHex8:function(v){return _(this._r,this._g,this._b,this._a,v)},toHex8String:function(v){return"#"+this.toHex8(v)},toRgb:function(){return{r:s(this._r),g:s(this._g),b:s(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+s(this._r)+", "+s(this._g)+", "+s(this._b)+")":"rgba("+s(this._r)+", "+s(this._g)+", "+s(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:s(k(this._r,255)*100)+"%",g:s(k(this._g,255)*100)+"%",b:s(k(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%)":"rgba("+s(k(this._r,255)*100)+"%, "+s(k(this._g,255)*100)+"%, "+s(k(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:re[d(this._r,this._g,this._b,!0)]||!1},toFilter:function(v){var T="#"+w(this._r,this._g,this._b,this._a),S=T,z=this._gradientType?"GradientType = 1, ":"";if(v){var X=c(v);S="#"+w(X._r,X._g,X._b,X._a)}return"progid:DXImageTransform.Microsoft.gradient("+z+"startColorstr="+T+",endColorstr="+S+")"},toString:function(v){var T=!!v;v=v||this._format;var S=!1,z=this._a<1&&this._a>=0,X=!T&&z&&(v==="hex"||v==="hex6"||v==="hex3"||v==="hex4"||v==="hex8"||v==="name");return X?v==="name"&&this._a===0?this.toName():this.toRgbString():(v==="rgb"&&(S=this.toRgbString()),v==="prgb"&&(S=this.toPercentageRgbString()),(v==="hex"||v==="hex6")&&(S=this.toHexString()),v==="hex3"&&(S=this.toHexString(!0)),v==="hex4"&&(S=this.toHex8String(!0)),v==="hex8"&&(S=this.toHex8String()),v==="name"&&(S=this.toName()),v==="hsl"&&(S=this.toHslString()),v==="hsv"&&(S=this.toHsvString()),S||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(v,T){var S=v.apply(null,[this].concat([].slice.call(T)));return this._r=S._r,this._g=S._g,this._b=S._b,this.setAlpha(S._a),this},lighten:function(){return this._applyModification(A,arguments)},brighten:function(){return this._applyModification(O,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(M,arguments)},saturate:function(){return this._applyModification(b,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(C,arguments)},_applyCombination:function(v,T){return v.apply(null,[this].concat([].slice.call(T)))},analogous:function(){return this._applyCombination(D,arguments)},complement:function(){return this._applyCombination(I,arguments)},monochromatic:function(){return this._applyCombination(F,arguments)},splitcomplement:function(){return this._applyCombination(G,arguments)},triad:function(){return this._applyCombination(q,arguments)},tetrad:function(){return this._applyCombination(ne,arguments)}},c.fromRatio=function(v,T){if(typeof v=="object"){var S={};for(var z in v)v.hasOwnProperty(z)&&(z==="a"?S[z]=v[z]:S[z]=W(v[z]));v=S}return c(v,T)};function u(v){var T={r:0,g:0,b:0},S=1,z=null,X=null,K=null,ie=!1,pe=!1;return typeof v=="string"&&(v=Ce(v)),typeof v=="object"&&(me(v.r)&&me(v.g)&&me(v.b)?(T=f(v.r,v.g,v.b),ie=!0,pe=String(v.r).substr(-1)==="%"?"prgb":"rgb"):me(v.h)&&me(v.s)&&me(v.v)?(z=W(v.s),X=W(v.v),T=m(v.h,z,X),ie=!0,pe="hsv"):me(v.h)&&me(v.s)&&me(v.l)&&(z=W(v.s),K=W(v.l),T=p(v.h,z,K),ie=!0,pe="hsl"),v.hasOwnProperty("a")&&(S=v.a)),S=$(S),{ok:ie,format:v.format||pe,r:o(255,a(T.r,0)),g:o(255,a(T.g,0)),b:o(255,a(T.b,0)),a:S}}function f(v,T,S){return{r:k(v,255)*255,g:k(T,255)*255,b:k(S,255)*255}}function h(v,T,S){v=k(v,255),T=k(T,255),S=k(S,255);var z=a(v,T,S),X=o(v,T,S),K,ie,pe=(z+X)/2;if(z==X)K=ie=0;else{var le=z-X;switch(ie=pe>.5?le/(2-z-X):le/(z+X),z){case v:K=(T-S)/le+(T<S?6:0);break;case T:K=(S-v)/le+2;break;case S:K=(v-T)/le+4;break}K/=6}return{h:K,s:ie,l:pe}}function p(v,T,S){var z,X,K;v=k(v,360),T=k(T,100),S=k(S,100);function ie(P,E,H){return H<0&&(H+=1),H>1&&(H-=1),H<1/6?P+(E-P)*6*H:H<1/2?E:H<2/3?P+(E-P)*(2/3-H)*6:P}if(T===0)z=X=K=S;else{var pe=S<.5?S*(1+T):S+T-S*T,le=2*S-pe;z=ie(le,pe,v+1/3),X=ie(le,pe,v),K=ie(le,pe,v-1/3)}return{r:z*255,g:X*255,b:K*255}}function g(v,T,S){v=k(v,255),T=k(T,255),S=k(S,255);var z=a(v,T,S),X=o(v,T,S),K,ie,pe=z,le=z-X;if(ie=z===0?0:le/z,z==X)K=0;else{switch(z){case v:K=(T-S)/le+(T<S?6:0);break;case T:K=(S-v)/le+2;break;case S:K=(v-T)/le+4;break}K/=6}return{h:K,s:ie,v:pe}}function m(v,T,S){v=k(v,360)*6,T=k(T,100),S=k(S,100);var z=e.floor(v),X=v-z,K=S*(1-T),ie=S*(1-X*T),pe=S*(1-(1-X)*T),le=z%6,P=[S,ie,K,K,pe,S][le],E=[pe,S,S,ie,K,K][le],H=[K,K,pe,S,S,ie][le];return{r:P*255,g:E*255,b:H*255}}function d(v,T,S,z){var X=[se(s(v).toString(16)),se(s(T).toString(16)),se(s(S).toString(16))];return z&&X[0].charAt(0)==X[0].charAt(1)&&X[1].charAt(0)==X[1].charAt(1)&&X[2].charAt(0)==X[2].charAt(1)?X[0].charAt(0)+X[1].charAt(0)+X[2].charAt(0):X.join("")}function _(v,T,S,z,X){var K=[se(s(v).toString(16)),se(s(T).toString(16)),se(s(S).toString(16)),se(j(z))];return X&&K[0].charAt(0)==K[0].charAt(1)&&K[1].charAt(0)==K[1].charAt(1)&&K[2].charAt(0)==K[2].charAt(1)&&K[3].charAt(0)==K[3].charAt(1)?K[0].charAt(0)+K[1].charAt(0)+K[2].charAt(0)+K[3].charAt(0):K.join("")}function w(v,T,S,z){var X=[se(j(z)),se(s(v).toString(16)),se(s(T).toString(16)),se(s(S).toString(16))];return X.join("")}c.equals=function(v,T){return!v||!T?!1:c(v).toRgbString()==c(T).toRgbString()},c.random=function(){return c.fromRatio({r:l(),g:l(),b:l()})};function M(v,T){T=T===0?0:T||10;var S=c(v).toHsl();return S.s-=T/100,S.s=ee(S.s),c(S)}function b(v,T){T=T===0?0:T||10;var S=c(v).toHsl();return S.s+=T/100,S.s=ee(S.s),c(S)}function y(v){return c(v).desaturate(100)}function A(v,T){T=T===0?0:T||10;var S=c(v).toHsl();return S.l+=T/100,S.l=ee(S.l),c(S)}function O(v,T){T=T===0?0:T||10;var S=c(v).toRgb();return S.r=a(0,o(255,S.r-s(255*-(T/100)))),S.g=a(0,o(255,S.g-s(255*-(T/100)))),S.b=a(0,o(255,S.b-s(255*-(T/100)))),c(S)}function x(v,T){T=T===0?0:T||10;var S=c(v).toHsl();return S.l-=T/100,S.l=ee(S.l),c(S)}function C(v,T){var S=c(v).toHsl(),z=(S.h+T)%360;return S.h=z<0?360+z:z,c(S)}function I(v){var T=c(v).toHsl();return T.h=(T.h+180)%360,c(T)}function q(v){var T=c(v).toHsl(),S=T.h;return[c(v),c({h:(S+120)%360,s:T.s,l:T.l}),c({h:(S+240)%360,s:T.s,l:T.l})]}function ne(v){var T=c(v).toHsl(),S=T.h;return[c(v),c({h:(S+90)%360,s:T.s,l:T.l}),c({h:(S+180)%360,s:T.s,l:T.l}),c({h:(S+270)%360,s:T.s,l:T.l})]}function G(v){var T=c(v).toHsl(),S=T.h;return[c(v),c({h:(S+72)%360,s:T.s,l:T.l}),c({h:(S+216)%360,s:T.s,l:T.l})]}function D(v,T,S){T=T||6,S=S||30;var z=c(v).toHsl(),X=360/S,K=[c(v)];for(z.h=(z.h-(X*T>>1)+720)%360;--T;)z.h=(z.h+X)%360,K.push(c(z));return K}function F(v,T){T=T||6;for(var S=c(v).toHsv(),z=S.h,X=S.s,K=S.v,ie=[],pe=1/T;T--;)ie.push(c({h:z,s:X,v:K})),K=(K+pe)%1;return ie}c.mix=function(v,T,S){S=S===0?0:S||50;var z=c(v).toRgb(),X=c(T).toRgb(),K=S/100,ie={r:(X.r-z.r)*K+z.r,g:(X.g-z.g)*K+z.g,b:(X.b-z.b)*K+z.b,a:(X.a-z.a)*K+z.a};return c(ie)},c.readability=function(v,T){var S=c(v),z=c(T);return(e.max(S.getLuminance(),z.getLuminance())+.05)/(e.min(S.getLuminance(),z.getLuminance())+.05)},c.isReadable=function(v,T,S){var z=c.readability(v,T),X,K;switch(K=!1,X=L(S),X.level+X.size){case"AAsmall":case"AAAlarge":K=z>=4.5;break;case"AAlarge":K=z>=3;break;case"AAAsmall":K=z>=7;break}return K},c.mostReadable=function(v,T,S){var z=null,X=0,K,ie,pe,le;S=S||{},ie=S.includeFallbackColors,pe=S.level,le=S.size;for(var P=0;P<T.length;P++)K=c.readability(v,T[P]),K>X&&(X=K,z=c(T[P]));return c.isReadable(v,z,{level:pe,size:le})||!ie?z:(S.includeFallbackColors=!1,c.mostReadable(v,["#fff","#000"],S))};var U=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},re=c.hexNames=Z(U);function Z(v){var T={};for(var S in v)v.hasOwnProperty(S)&&(T[v[S]]=S);return T}function $(v){return v=parseFloat(v),(isNaN(v)||v<0||v>1)&&(v=1),v}function k(v,T){ue(v)&&(v="100%");var S=ce(v);return v=o(T,a(0,parseFloat(v))),S&&(v=parseInt(v*T,10)/100),e.abs(v-T)<1e-6?1:v%T/parseFloat(T)}function ee(v){return o(1,a(0,v))}function Q(v){return parseInt(v,16)}function ue(v){return typeof v=="string"&&v.indexOf(".")!=-1&&parseFloat(v)===1}function ce(v){return typeof v=="string"&&v.indexOf("%")!=-1}function se(v){return v.length==1?"0"+v:""+v}function W(v){return v<=1&&(v=v*100+"%"),v}function j(v){return e.round(parseFloat(v)*255).toString(16)}function oe(v){return Q(v)/255}var ve=function(){var v="[-\\+]?\\d+%?",T="[-\\+]?\\d*\\.\\d+%?",S="(?:"+T+")|(?:"+v+")",z="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?",X="[\\s|\\(]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")[,|\\s]+("+S+")\\s*\\)?";return{CSS_UNIT:new RegExp(S),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+X),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+X),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+X),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function me(v){return!!ve.CSS_UNIT.exec(v)}function Ce(v){v=v.replace(t,"").replace(i,"").toLowerCase();var T=!1;if(U[v])v=U[v],T=!0;else if(v=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var S;return(S=ve.rgb.exec(v))?{r:S[1],g:S[2],b:S[3]}:(S=ve.rgba.exec(v))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=ve.hsl.exec(v))?{h:S[1],s:S[2],l:S[3]}:(S=ve.hsla.exec(v))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=ve.hsv.exec(v))?{h:S[1],s:S[2],v:S[3]}:(S=ve.hsva.exec(v))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=ve.hex8.exec(v))?{r:Q(S[1]),g:Q(S[2]),b:Q(S[3]),a:oe(S[4]),format:T?"name":"hex8"}:(S=ve.hex6.exec(v))?{r:Q(S[1]),g:Q(S[2]),b:Q(S[3]),format:T?"name":"hex"}:(S=ve.hex4.exec(v))?{r:Q(S[1]+""+S[1]),g:Q(S[2]+""+S[2]),b:Q(S[3]+""+S[3]),a:oe(S[4]+""+S[4]),format:T?"name":"hex8"}:(S=ve.hex3.exec(v))?{r:Q(S[1]+""+S[1]),g:Q(S[2]+""+S[2]),b:Q(S[3]+""+S[3]),format:T?"name":"hex"}:!1}function L(v){var T,S;return v=v||{level:"AA",size:"small"},T=(v.level||"AA").toUpperCase(),S=(v.size||"small").toLowerCase(),T!=="AA"&&T!=="AAA"&&(T="AA"),S!=="small"&&S!=="large"&&(S="small"),{level:T,size:S}}n.exports?n.exports=c:window.tinycolor=c})(Math)})(lg);const cg=lg.exports;function gd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ug(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gd(Object(t),!0).forEach(function(i){Eu(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):gd(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function vc(n){return vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vc(n)}function KA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _d(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function ZA(n,e,t){return e&&_d(n.prototype,e),t&&_d(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Eu(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function JA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ia(n,e)}function na(n){return na=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},na(n)}function ia(n,e){return ia=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ia(n,e)}function fg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vo(n,e,t){return fg()?Vo=Reflect.construct.bind():Vo=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&ia(c,o.prototype),c},Vo.apply(null,arguments)}function QA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function eC(n,e){if(n==null)return{};var t=QA(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,i)||(t[i]=n[i]))}return t}function hg(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tC(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return hg(n)}function nC(n){var e=fg();return function(){var i=na(n),r;if(e){var s=na(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return tC(this,r)}}function vd(n,e){return rC(n)||oC(n,e)||dg(n,e)||lC()}function cn(n){return iC(n)||sC(n)||dg(n)||aC()}function iC(n){if(Array.isArray(n))return yc(n)}function rC(n){if(Array.isArray(n))return n}function sC(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function oC(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function dg(n,e){if(!!n){if(typeof n=="string")return yc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yc(n,e)}}function yc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function aC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cC=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},uC=function n(e){e.geometry&&e.geometry.dispose(),e.material&&cC(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},pg=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),uC(t)}},fC=["objFilter"];function fs(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,s=eC(t,fC);return $A(n,e.children.filter(r),function(o){return e.add(o)},function(o){e.remove(o),pg(o)},ug({objBindAttr:"__threeObj"},s))}var Po=function(e){return isNaN(e)?parseInt(cg(e).toHex(),16):e},yd=function(e){return isNaN(e)?cg(e).getAlpha():1},hC=ag(YA);function xd(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=hC(e(i))})}function dC(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.nodeFilter,o=s===void 0?function(){return!0}:s,a=r.onLoopError,l=a===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:a,c={};t.forEach(function(p){return c[e(p)]={data:p,out:[],depth:-1,skip:!o(p)}}),i.forEach(function(p){var g=p.source,m=p.target,d=b(g),_=b(m);if(!c.hasOwnProperty(d))throw"Missing source node with id: ".concat(d);if(!c.hasOwnProperty(_))throw"Missing target node with id: ".concat(_);var w=c[d],M=c[_];w.out.push(M);function b(y){return vc(y)==="object"?e(y):y}});var u=[];h(Object.values(c));var f=Object.assign.apply(Object,[{}].concat(cn(Object.entries(c).filter(function(p){var g=vd(p,2),m=g[1];return!m.skip}).map(function(p){var g=vd(p,2),m=g[0],d=g[1];return Eu({},m,d.depth)}))));return f;function h(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,d=0,_=p.length;d<_;d++){var w=p[d];if(g.indexOf(w)!==-1){var M=function(){var b=[].concat(cn(g.slice(g.indexOf(w))),[w]).map(function(y){return e(y.data)});return u.some(function(y){return y.length===b.length&&y.every(function(A,O){return A===b[O]})})||(u.push(b),l(b)),"continue"}();if(M==="continue")continue}m>w.depth&&(w.depth=m,h(w.out,[].concat(cn(g),[w]),m+(w.skip?0:1)))}}}var Ie=window.THREE?window.THREE:{Group:Pr,Mesh:dn,MeshLambertMaterial:aE,Color:Xe,BufferGeometry:Nt,BufferAttribute:rn,Matrix4:it,Vector3:B,SphereGeometry:Ea,CylinderGeometry:Sa,TubeGeometry:du,ConeGeometry:hu,Line:jS,LineBasicMaterial:wm,QuadraticBezierCurve3:fu,CubicBezierCurve3:Sm,Box3:tr},bd={graph:DT,forcelayout:vu.exports},pC=2,wd=new Ie.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Lo=new Ie.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",mC=Su({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(s,o){s.forEach(function(a){delete a[o],delete a["v".concat(o)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),s(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick()),e.graphData.nodes.forEach(function(f){var h=f.__threeObj;if(!!h){var p=t?f:e.layout.getNodePosition(f[e.nodeId]);h.position.x=p.x,h.position.y=p.y||0,h.position.z=p.z||0}});var o=qe(e.linkWidth),a=qe(e.linkCurvature),l=qe(e.linkCurveRotation),c=qe(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var h=f.__lineObj;if(!!h){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=p[t?"source":"from"],m=p[t?"target":"to"];if(!(!g||!m||!g.hasOwnProperty("x")||!m.hasOwnProperty("x"))){u(f);var d=c(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?h.children[1]:h,{start:{x:g.x,y:g.y,z:g.z},end:{x:m.x,y:m.y,z:m.z}},f)&&!d)){var _=30,w=f.__curve,M=h.children.length?h.children[0]:h;if(M.type==="Line"){if(w)M.geometry.setFromPoints(w.getPoints(_));else{var b=M.geometry.getAttribute("position");(!b||!b.array||b.array.length!==6)&&M.geometry[wd]("position",b=new Ie.BufferAttribute(new Float32Array(2*3),3)),b.array[0]=g.x,b.array[1]=g.y||0,b.array[2]=g.z||0,b.array[3]=m.x,b.array[4]=m.y||0,b.array[5]=m.z||0,b.needsUpdate=!0}M.geometry.computeBoundingSphere()}else if(M.type==="Mesh")if(w){M.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(M.position.set(0,0,0),M.rotation.set(0,0,0),M.scale.set(1,1,1));var q=Math.ceil(o(f)*10)/10,ne=q/2,G=new Ie.TubeGeometry(w,_,ne,e.linkResolution,!1);M.geometry.dispose(),M.geometry=G}else{if(!M.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var y=Math.ceil(o(f)*10)/10,A=y/2,O=new Ie.CylinderGeometry(A,A,1,e.linkResolution,1,!1);O[Lo](new Ie.Matrix4().makeTranslation(0,1/2,0)),O[Lo](new Ie.Matrix4().makeRotationX(Math.PI/2)),M.geometry.dispose(),M.geometry=O}var x=new Ie.Vector3(g.x,g.y||0,g.z||0),C=new Ie.Vector3(m.x,m.y||0,m.z||0),I=x.distanceTo(C);M.position.x=x.x,M.position.y=x.y,M.position.z=x.z,M.scale.z=I,M.parent.localToWorld(C),M.lookAt(C)}}}}});function u(f){var h=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),p=h[t?"source":"from"],g=h[t?"target":"to"];if(!(!p||!g||!p.hasOwnProperty("x")||!g.hasOwnProperty("x"))){var m=a(f);if(!m)f.__curve=null;else{var d=new Ie.Vector3(p.x,p.y||0,p.z||0),_=new Ie.Vector3(g.x,g.y||0,g.z||0),w=d.distanceTo(_),M,b=l(f);if(w>0){var y=g.x-p.x,A=g.y-p.y||0,O=new Ie.Vector3().subVectors(_,d),x=O.clone().multiplyScalar(m).cross(y!==0||A!==0?new Ie.Vector3(0,0,1):new Ie.Vector3(0,1,0)).applyAxisAngle(O.normalize(),b).add(new Ie.Vector3().addVectors(d,_).divideScalar(2));M=new Ie.QuadraticBezierCurve3(d,x,_)}else{var C=m*70,I=-b,q=I+Math.PI/2;M=new Ie.CubicBezierCurve3(d,new Ie.Vector3(C*Math.cos(q),C*Math.sin(q),0).add(d),new Ie.Vector3(C*Math.cos(I),C*Math.sin(I),0).add(d),_)}f.__curve=M}}}}function r(){var o=qe(e.linkDirectionalArrowRelPos),a=qe(e.linkDirectionalArrowLength),l=qe(e.nodeVal);e.graphData.links.forEach(function(c){var u=c.__arrowObj;if(!!u){var f=t?c:e.layout.getLinkPosition(e.layout.graph.getLink(c.source,c.target).id),h=f[t?"source":"from"],p=f[t?"target":"to"];if(!(!h||!p||!h.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.sqrt(Math.max(0,l(h)||1))*e.nodeRelSize,m=Math.sqrt(Math.max(0,l(p)||1))*e.nodeRelSize,d=a(c),_=o(c),w=c.__curve?function(x){return c.__curve.getPoint(x)}:function(x){var C=function(q,ne,G,D){return ne[q]+(G[q]-ne[q])*D||0};return{x:C("x",h,p,x),y:C("y",h,p,x),z:C("z",h,p,x)}},M=c.__curve?c.__curve.getLength():Math.sqrt(["x","y","z"].map(function(x){return Math.pow((p[x]||0)-(h[x]||0),2)}).reduce(function(x,C){return x+C},0)),b=g+d+(M-g-m-d)*_,y=w(b/M),A=w((b-d)/M);["x","y","z"].forEach(function(x){return u.position[x]=A[x]});var O=Vo(Ie.Vector3,cn(["x","y","z"].map(function(x){return y[x]})));u.parent.localToWorld(O),u.lookAt(O)}}})}function s(){var o=qe(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var l=a.__photonsObj&&a.__photonsObj.children,c=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!c||!c.length)&&(!l||!l.length))){var u=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),f=u[t?"source":"from"],h=u[t?"target":"to"];if(!(!f||!h||!f.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var p=o(a),g=a.__curve?function(d){return a.__curve.getPoint(d)}:function(d){var _=function(M,b,y,A){return b[M]+(y[M]-b[M])*A||0};return{x:_("x",f,h,d),y:_("y",f,h,d),z:_("z",f,h,d)}},m=[].concat(cn(l||[]),cn(c||[]));m.forEach(function(d,_){var w=d.parent.__linkThreeObjType==="singleHopPhotons";if(d.hasOwnProperty("__progressRatio")||(d.__progressRatio=w?0:_/l.length),d.__progressRatio+=p,d.__progressRatio>=1)if(!w)d.__progressRatio=d.__progressRatio%1;else{d.parent.remove(d),pg(d);return}var M=d.__progressRatio,b=g(M);["x","y","z"].forEach(function(y){return d.position[y]=b[y]})})}}})}},emitParticle:function(e,t){if(t){if(!t.__singleHopPhotonsObj){var i=new Ie.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=qe(e.linkDirectionalParticleWidth),s=Math.ceil(r(t)*10)/10/2,o=e.linkDirectionalParticleResolution,a=new Ie.SphereGeometry(s,o,o),l=qe(e.linkColor),c=qe(e.linkDirectionalParticleColor),u=c(t)||l(t)||"#f0f0f0",f=new Ie.Color(Po(u)),h=e.linkOpacity*3,p=new Ie.MeshLambertMaterial({color:f,transparent:!0,opacity:h});t.__singleHopPhotonsObj.add(new Ie.Mesh(a,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(s){var o=[];if(s.geometry){s.geometry.computeBoundingBox();var a=new Ie.Box3;a.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),o.push(a)}return o.concat.apply(o,cn((s.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,cn(["x","y","z"].map(function(r){return Eu({},r,[bA(i,function(s){return s.min[r]}),xA(i,function(s){return s.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:AT().force("link",hT()).force("charge",CT()).force("center",gE()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(se){return se.some(function(W){return t.hasOwnProperty(W)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&xd(e.graphData.nodes,qe(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&xd(e.graphData.links,qe(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=qe(e.nodeThreeObject),s=qe(e.nodeThreeObjectExtend),o=qe(e.nodeVal),a=qe(e.nodeColor),l=qe(e.nodeVisibility),c={},u={};fs(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(se){return se.__graphObjType==="node"},createObj:function(se){var W=r(se),j=s(se);W&&e.nodeThreeObject===W&&(W=W.clone());var oe;return W&&!j?oe=W:(oe=new Ie.Mesh,oe.__graphDefaultObj=!0,W&&j&&oe.add(W)),oe.__graphObjType="node",oe},updateObj:function(se,W){if(se.__graphDefaultObj){var j=o(W)||1,oe=Math.cbrt(j)*e.nodeRelSize,ve=e.nodeResolution;(!se.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||se.geometry.parameters.radius!==oe||se.geometry.parameters.widthSegments!==ve)&&(c.hasOwnProperty(j)||(c[j]=new Ie.SphereGeometry(oe,ve,ve)),se.geometry.dispose(),se.geometry=c[j]);var me=a(W),Ce=new Ie.Color(Po(me||"#ffffaa")),L=e.nodeOpacity*yd(me);(se.material.type!=="MeshLambertMaterial"||!se.material.color.equals(Ce)||se.material.opacity!==L)&&(u.hasOwnProperty(me)||(u[me]=new Ie.MeshLambertMaterial({color:Ce,transparent:!0,opacity:L})),se.material.dispose(),se.material=u[me])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var f=qe(e.linkThreeObject),h=qe(e.linkThreeObjectExtend),p=qe(e.linkMaterial),g=qe(e.linkVisibility),m=qe(e.linkColor),d=qe(e.linkWidth),_={},w={},M={},b=e.graphData.links.filter(g);if(fs(b,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(se){return se.__graphObjType==="link"},createObj:function(se){var W=f(se),j=h(se);W&&e.linkThreeObject===W&&(W=W.clone());var oe;if(!W||j){var ve=!!d(se);if(ve)oe=new Ie.Mesh;else{var me=new Ie.BufferGeometry;me[wd]("position",new Ie.BufferAttribute(new Float32Array(2*3),3)),oe=new Ie.Line(me)}}var Ce;return W?j?(Ce=new Ie.Group,Ce.__graphDefaultObj=!0,Ce.add(oe),Ce.add(W)):Ce=W:(Ce=oe,Ce.__graphDefaultObj=!0),Ce.renderOrder=10,Ce.__graphObjType="link",Ce},updateObj:function(se,W){if(se.__graphDefaultObj){var j=se.children.length?se.children[0]:se,oe=Math.ceil(d(W)*10)/10,ve=!!oe;if(ve){var me=oe/2,Ce=e.linkResolution;if(!j.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||j.geometry.parameters.radiusTop!==me||j.geometry.parameters.radialSegments!==Ce){if(!_.hasOwnProperty(oe)){var L=new Ie.CylinderGeometry(me,me,1,Ce,1,!1);L[Lo](new Ie.Matrix4().makeTranslation(0,1/2,0)),L[Lo](new Ie.Matrix4().makeRotationX(Math.PI/2)),_[oe]=L}j.geometry.dispose(),j.geometry=_[oe]}}var v=p(W);if(v)j.material=v;else{var T=m(W),S=new Ie.Color(Po(T||"#f0f0f0")),z=e.linkOpacity*yd(T),X=ve?"MeshLambertMaterial":"LineBasicMaterial";if(j.material.type!==X||!j.material.color.equals(S)||j.material.opacity!==z){var K=ve?w:M;K.hasOwnProperty(T)||(K[T]=new Ie[X]({color:S,transparent:z<1,opacity:z,depthWrite:z>=1})),j.material.dispose(),j.material=K[T]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=qe(e.linkDirectionalArrowLength),A=qe(e.linkDirectionalArrowColor);fs(b.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(se){return se.__linkThreeObjType==="arrow"},createObj:function(){var se=new Ie.Mesh(void 0,new Ie.MeshLambertMaterial({transparent:!0}));return se.__linkThreeObjType="arrow",se},updateObj:function(se,W){var j=y(W),oe=e.linkDirectionalArrowResolution;if(!se.geometry.type.match(/^Cone(Buffer)?Geometry$/)||se.geometry.parameters.height!==j||se.geometry.parameters.radialSegments!==oe){var ve=new Ie.ConeGeometry(j*.25,j,oe);ve.translate(0,j/2,0),ve.rotateX(Math.PI/2),se.geometry.dispose(),se.geometry=ve}se.material.color=new Ie.Color(A(W)||m(W)||"#f0f0f0"),se.material.opacity=e.linkOpacity*3}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var O=qe(e.linkDirectionalParticles),x=qe(e.linkDirectionalParticleWidth),C=qe(e.linkDirectionalParticleColor),I={},q={};fs(b.filter(O),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(se){return se.__linkThreeObjType==="photons"},createObj:function(){var se=new Ie.Group;return se.__linkThreeObjType="photons",se},updateObj:function(se,W){var j=Math.round(Math.abs(O(W))),oe=!!se.children.length&&se.children[0],ve=Math.ceil(x(W)*10)/10/2,me=e.linkDirectionalParticleResolution,Ce;oe&&oe.geometry.parameters.radius===ve&&oe.geometry.parameters.widthSegments===me?Ce=oe.geometry:(q.hasOwnProperty(ve)||(q[ve]=new Ie.SphereGeometry(ve,me,me)),Ce=q[ve],oe&&oe.geometry.dispose());var L=C(W)||m(W)||"#f0f0f0",v=new Ie.Color(Po(L)),T=e.linkOpacity*3,S;oe&&oe.material.color.equals(v)&&oe.material.opacity===T?S=oe.material:(I.hasOwnProperty(L)||(I[L]=new Ie.MeshLambertMaterial({color:v,transparent:!0,opacity:T})),S=I[L],oe&&oe.material.dispose()),fs(cn(new Array(j)).map(function(z,X){return{idx:X}}),se,{idAccessor:function(X){return X.idx},createObj:function(){return new Ie.Mesh(Ce,S)},updateObj:function(X){X.geometry=Ce,X.material=S}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(ce){ce.source=ce[e.linkSource],ce.target=ce[e.linkTarget]});var ne=e.forceEngine!=="ngraph",G;if(ne){(G=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var D=e.d3ForceLayout.force("link");D&&D.id(function(ce){return ce[e.nodeId]}).links(e.graphData.links);var F=e.dagMode&&dC(e.graphData,function(ce){return ce[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,cn(Object.values(F||[]))),re=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*pC*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var Z=function(se,W){return function(j){return se?(F[j[e.nodeId]]-U/2)*re*(W?-1:1):void 0}},$=Z(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),k=Z(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),ee=Z(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(ce){ce.fx=$(ce),ce.fy=k(ce),ce.fz=ee(ce)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?PT(function(ce){var se=F[ce[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-se:se)*re}).strength(function(ce){return e.dagNodeFilter(ce)?1:0}):null)}else{var Q=bd.graph();e.graphData.nodes.forEach(function(ce){Q.addNode(ce[e.nodeId])}),e.graphData.links.forEach(function(ce){Q.addLink(ce.source,ce.target)}),G=bd.forcelayout(Q,ug({dimensions:e.numDimensions},e.ngraphPhysics)),G.graph=Q}for(var ue=0;ue<e.warmupTicks&&!(ne&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);ue++)G[ne?"tick":"step"]();e.layout=G,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function gC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){JA(o,r);var s=nC(o);function o(){var a;KA(this,o);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return a=s.call.apply(s,[this].concat(c)),a.__kapsuleInstance=n().apply(void 0,[].concat(cn(t?[hg(a)]:[]),c)),a}return ZA(o)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var s,o=(s=this.__kapsuleInstance)[r].apply(s,arguments);return o===this.__kapsuleInstance?this:o}}),i}var _C=window.THREE?window.THREE:{Group:Pr},mg=gC(mC,_C.Group,!0);const Dl={type:"change"},Ol={type:"start"},Il={type:"end"};class vC extends _n{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Sn.ROTATE,MIDDLE:Sn.DOLLY,RIGHT:Sn.PAN},this.target=new B;const s=1e-6,o=new B;let a=1,l=r.NONE,c=r.NONE,u=0,f=0,h=0;const p=new B,g=new be,m=new be,d=new B,_=new be,w=new be,M=new be,b=new be,y=[],A={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const j=i.domElement.getBoundingClientRect(),oe=i.domElement.ownerDocument.documentElement;i.screen.left=j.left+window.pageXOffset-oe.clientLeft,i.screen.top=j.top+window.pageYOffset-oe.clientTop,i.screen.width=j.width,i.screen.height=j.height};const O=function(){const j=new be;return function(ve,me){return j.set((ve-i.screen.left)/i.screen.width,(me-i.screen.top)/i.screen.height),j}}(),x=function(){const j=new be;return function(ve,me){return j.set((ve-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-me))/i.screen.width),j}}();this.rotateCamera=function(){const j=new B,oe=new gn,ve=new B,me=new B,Ce=new B,L=new B;return function(){L.set(m.x-g.x,m.y-g.y,0);let T=L.length();T?(p.copy(i.object.position).sub(i.target),ve.copy(p).normalize(),me.copy(i.object.up).normalize(),Ce.crossVectors(me,ve).normalize(),me.setLength(m.y-g.y),Ce.setLength(m.x-g.x),L.copy(me.add(Ce)),j.crossVectors(L,p).normalize(),T*=i.rotateSpeed,oe.setFromAxisAngle(j,T),p.applyQuaternion(oe),i.object.up.applyQuaternion(oe),d.copy(j),h=T):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),oe.setFromAxisAngle(d,h),p.applyQuaternion(oe),i.object.up.applyQuaternion(oe)),g.copy(m)}}(),this.zoomCamera=function(){let j;l===r.TOUCH_ZOOM_PAN?(j=u/f,u=f,i.object.isPerspectiveCamera?p.multiplyScalar(j):i.object.isOrthographicCamera?(i.object.zoom/=j,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(j=1+(w.y-_.y)*i.zoomSpeed,j!==1&&j>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(j):i.object.isOrthographicCamera?(i.object.zoom/=j,i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?_.copy(w):_.y+=(w.y-_.y)*this.dynamicDampingFactor)},this.panCamera=function(){const j=new be,oe=new B,ve=new B;return function(){if(j.copy(b).sub(M),j.lengthSq()){if(i.object.isOrthographicCamera){const Ce=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,L=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;j.x*=Ce,j.y*=L}j.multiplyScalar(p.length()*i.panSpeed),ve.copy(p).cross(i.object.up).setLength(j.x),ve.add(oe.copy(i.object.up).setLength(j.y)),i.object.position.add(ve),i.target.add(ve),i.staticMoving?M.copy(b):M.add(j.subVectors(b,M).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),_.copy(w)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),_.copy(w)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>s&&(i.dispatchEvent(Dl),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>s||a!==i.object.zoom)&&(i.dispatchEvent(Dl),o.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Dl),o.copy(i.object.position),a=i.object.zoom};function C(j){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(j.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",q)),ue(j),j.pointerType==="touch"?$(j):F(j))}function I(j){i.enabled!==!1&&(j.pointerType==="touch"?k(j):U(j))}function q(j){i.enabled!==!1&&(j.pointerType==="touch"?ee(j):re(),ce(j),y.length===0&&(i.domElement.releasePointerCapture(j.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",q)))}function ne(j){ce(j)}function G(j){i.enabled!==!1&&(window.removeEventListener("keydown",G),c===r.NONE&&(j.code===i.keys[r.ROTATE]&&!i.noRotate?c=r.ROTATE:j.code===i.keys[r.ZOOM]&&!i.noZoom?c=r.ZOOM:j.code===i.keys[r.PAN]&&!i.noPan&&(c=r.PAN)))}function D(){i.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",G))}function F(j){if(l===r.NONE)switch(j.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(m.copy(x(j.pageX,j.pageY)),g.copy(m)):oe===r.ZOOM&&!i.noZoom?(_.copy(O(j.pageX,j.pageY)),w.copy(_)):oe===r.PAN&&!i.noPan&&(M.copy(O(j.pageX,j.pageY)),b.copy(M)),i.dispatchEvent(Ol)}function U(j){const oe=c!==r.NONE?c:l;oe===r.ROTATE&&!i.noRotate?(g.copy(m),m.copy(x(j.pageX,j.pageY))):oe===r.ZOOM&&!i.noZoom?w.copy(O(j.pageX,j.pageY)):oe===r.PAN&&!i.noPan&&b.copy(O(j.pageX,j.pageY))}function re(){l=r.NONE,i.dispatchEvent(Il)}function Z(j){if(i.enabled!==!1&&i.noZoom!==!0){switch(j.preventDefault(),j.deltaMode){case 2:_.y-=j.deltaY*.025;break;case 1:_.y-=j.deltaY*.01;break;default:_.y-=j.deltaY*25e-5;break}i.dispatchEvent(Ol),i.dispatchEvent(Il)}}function $(j){switch(se(j),y.length){case 1:l=r.TOUCH_ROTATE,m.copy(x(y[0].pageX,y[0].pageY)),g.copy(m);break;default:l=r.TOUCH_ZOOM_PAN;const oe=y[0].pageX-y[1].pageX,ve=y[0].pageY-y[1].pageY;f=u=Math.sqrt(oe*oe+ve*ve);const me=(y[0].pageX+y[1].pageX)/2,Ce=(y[0].pageY+y[1].pageY)/2;M.copy(O(me,Ce)),b.copy(M);break}i.dispatchEvent(Ol)}function k(j){switch(se(j),y.length){case 1:g.copy(m),m.copy(x(j.pageX,j.pageY));break;default:const oe=W(j),ve=j.pageX-oe.x,me=j.pageY-oe.y;f=Math.sqrt(ve*ve+me*me);const Ce=(j.pageX+oe.x)/2,L=(j.pageY+oe.y)/2;b.copy(O(Ce,L));break}}function ee(j){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,m.copy(x(j.pageX,j.pageY)),g.copy(m);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let oe=0;oe<y.length;oe++)if(y[oe].pointerId!==j.pointerId){const ve=A[y[oe].pointerId];m.copy(x(ve.x,ve.y)),g.copy(m);break}break}i.dispatchEvent(Il)}function Q(j){i.enabled!==!1&&j.preventDefault()}function ue(j){y.push(j)}function ce(j){delete A[j.pointerId];for(let oe=0;oe<y.length;oe++)if(y[oe].pointerId==j.pointerId){y.splice(oe,1);return}}function se(j){let oe=A[j.pointerId];oe===void 0&&(oe=new be,A[j.pointerId]=oe),oe.set(j.pageX,j.pageY)}function W(j){const oe=j.pointerId===y[0].pointerId?y[1]:y[0];return A[oe.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",ne),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",q),window.removeEventListener("keydown",G),window.removeEventListener("keyup",D)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",C),this.domElement.addEventListener("pointercancel",ne),this.domElement.addEventListener("wheel",Z,{passive:!1}),window.addEventListener("keydown",G),window.addEventListener("keyup",D),this.handleResize(),this.update()}}const Md={type:"change"},Nl={type:"start"},Sd={type:"end"};class yC extends _n{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sn.ROTATE,MIDDLE:Sn.DOLLY,RIGHT:Sn.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",le),this._domElementKeyEvents=N},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Md),i.update(),s=r.NONE},this.update=function(){const N=new B,Y=new gn().setFromUnitVectors(e.up,new B(0,1,0)),Ee=Y.clone().invert(),Pe=new B,Te=new gn,De=2*Math.PI;return function(){const ze=i.object.position;N.copy(ze).sub(i.target),N.applyQuaternion(Y),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&C(O()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let V=i.minAzimuthAngle,Ae=i.maxAzimuthAngle;return isFinite(V)&&isFinite(Ae)&&(V<-Math.PI?V+=De:V>Math.PI&&(V-=De),Ae<-Math.PI?Ae+=De:Ae>Math.PI&&(Ae-=De),V<=Ae?a.theta=Math.max(V,Math.min(Ae,a.theta)):a.theta=a.theta>(V+Ae)/2?Math.max(V,a.theta):Math.min(Ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),N.setFromSpherical(a),N.applyQuaternion(Ee),ze.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Pe.distanceToSquared(i.object.position)>o||8*(1-Te.dot(i.object.quaternion))>o?(i.dispatchEvent(Md),Pe.copy(i.object.position),Te.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",T),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",z),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",le)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new hc,l=new hc;let c=1;const u=new B;let f=!1;const h=new be,p=new be,g=new be,m=new be,d=new be,_=new be,w=new be,M=new be,b=new be,y=[],A={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function x(){return Math.pow(.95,i.zoomSpeed)}function C(N){l.theta-=N}function I(N){l.phi-=N}const q=function(){const N=new B;return function(Ee,Pe){N.setFromMatrixColumn(Pe,0),N.multiplyScalar(-Ee),u.add(N)}}(),ne=function(){const N=new B;return function(Ee,Pe){i.screenSpacePanning===!0?N.setFromMatrixColumn(Pe,1):(N.setFromMatrixColumn(Pe,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(Ee),u.add(N)}}(),G=function(){const N=new B;return function(Ee,Pe){const Te=i.domElement;if(i.object.isPerspectiveCamera){const De=i.object.position;N.copy(De).sub(i.target);let Re=N.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),q(2*Ee*Re/Te.clientHeight,i.object.matrix),ne(2*Pe*Re/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(Ee*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),ne(Pe*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(N){i.object.isPerspectiveCamera?c/=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(N){i.object.isPerspectiveCamera?c*=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/N)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(N){h.set(N.clientX,N.clientY)}function re(N){w.set(N.clientX,N.clientY)}function Z(N){m.set(N.clientX,N.clientY)}function $(N){p.set(N.clientX,N.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(p),i.update()}function k(N){M.set(N.clientX,N.clientY),b.subVectors(M,w),b.y>0?D(x()):b.y<0&&F(x()),w.copy(M),i.update()}function ee(N){d.set(N.clientX,N.clientY),_.subVectors(d,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(d),i.update()}function Q(N){N.deltaY<0?F(x()):N.deltaY>0&&D(x()),i.update()}function ue(N){let Y=!1;switch(N.code){case i.keys.UP:G(0,i.keyPanSpeed),Y=!0;break;case i.keys.BOTTOM:G(0,-i.keyPanSpeed),Y=!0;break;case i.keys.LEFT:G(i.keyPanSpeed,0),Y=!0;break;case i.keys.RIGHT:G(-i.keyPanSpeed,0),Y=!0;break}Y&&(N.preventDefault(),i.update())}function ce(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);h.set(N,Y)}}function se(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),Y=.5*(y[0].pageY+y[1].pageY);m.set(N,Y)}}function W(){const N=y[0].pageX-y[1].pageX,Y=y[0].pageY-y[1].pageY,Ee=Math.sqrt(N*N+Y*Y);w.set(0,Ee)}function j(){i.enableZoom&&W(),i.enablePan&&se()}function oe(){i.enableZoom&&W(),i.enableRotate&&ce()}function ve(N){if(y.length==1)p.set(N.pageX,N.pageY);else{const Ee=Me(N),Pe=.5*(N.pageX+Ee.x),Te=.5*(N.pageY+Ee.y);p.set(Pe,Te)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const Y=i.domElement;C(2*Math.PI*g.x/Y.clientHeight),I(2*Math.PI*g.y/Y.clientHeight),h.copy(p)}function me(N){if(y.length===1)d.set(N.pageX,N.pageY);else{const Y=Me(N),Ee=.5*(N.pageX+Y.x),Pe=.5*(N.pageY+Y.y);d.set(Ee,Pe)}_.subVectors(d,m).multiplyScalar(i.panSpeed),G(_.x,_.y),m.copy(d)}function Ce(N){const Y=Me(N),Ee=N.pageX-Y.x,Pe=N.pageY-Y.y,Te=Math.sqrt(Ee*Ee+Pe*Pe);M.set(0,Te),b.set(0,Math.pow(M.y/w.y,i.zoomSpeed)),D(b.y),w.copy(M)}function L(N){i.enableZoom&&Ce(N),i.enablePan&&me(N)}function v(N){i.enableZoom&&Ce(N),i.enableRotate&&ve(N)}function T(N){i.enabled!==!1&&(y.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",z)),ae(N),N.pointerType==="touch"?P(N):K(N))}function S(N){i.enabled!==!1&&(N.pointerType==="touch"?E(N):ie(N))}function z(N){he(N),y.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",z)),i.dispatchEvent(Sd),s=r.NONE}function X(N){he(N)}function K(N){let Y;switch(N.button){case 0:Y=i.mouseButtons.LEFT;break;case 1:Y=i.mouseButtons.MIDDLE;break;case 2:Y=i.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Sn.DOLLY:if(i.enableZoom===!1)return;re(N),s=r.DOLLY;break;case Sn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;Z(N),s=r.PAN}else{if(i.enableRotate===!1)return;U(N),s=r.ROTATE}break;case Sn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;U(N),s=r.ROTATE}else{if(i.enablePan===!1)return;Z(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nl)}function ie(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;$(N);break;case r.DOLLY:if(i.enableZoom===!1)return;k(N);break;case r.PAN:if(i.enablePan===!1)return;ee(N);break}}function pe(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(Nl),Q(N),i.dispatchEvent(Sd))}function le(N){i.enabled===!1||i.enablePan===!1||ue(N)}function P(N){switch(ye(N),y.length){case 1:switch(i.touches.ONE){case or.ROTATE:if(i.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case or.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case or.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(),s=r.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;oe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Nl)}function E(N){switch(ye(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;v(N),i.update();break;default:s=r.NONE}}function H(N){i.enabled!==!1&&N.preventDefault()}function ae(N){y.push(N)}function he(N){delete A[N.pointerId];for(let Y=0;Y<y.length;Y++)if(y[Y].pointerId==N.pointerId){y.splice(Y,1);return}}function ye(N){let Y=A[N.pointerId];Y===void 0&&(Y=new be,A[N.pointerId]=Y),Y.set(N.pageX,N.pageY)}function Me(N){const Y=N.pointerId===y[0].pointerId?y[1]:y[0];return A[Y.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",T),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}const xC={type:"change"};class bC extends _n{constructor(e,t){super(),this.object=e,this.domElement=t,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,s=new gn,o=new B;this.tmpQuaternion=new gn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new B(0,0,0),this.rotationVector=new B(0,0,0),this.keydown=function(h){if(!h.altKey){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(h){switch(h.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(h){if(this.dragToLook)this.status++;else{switch(h.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(h){if(!this.dragToLook||this.status>0){const p=this.getContainerDimensions(),g=p.size[0]/2,m=p.size[1]/2;this.moveState.yawLeft=-(h.pageX-p.offset[0]-g)/g,this.moveState.pitchDown=(h.pageY-p.offset[1]-m)/m,this.updateRotationVector()}},this.pointerup=function(h){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(h.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(h){const p=h*i.movementSpeed,g=h*i.rollSpeed;i.object.translateX(i.moveVector.x*p),i.object.translateY(i.moveVector.y*p),i.object.translateZ(i.moveVector.z*p),i.tmpQuaternion.set(i.rotationVector.x*g,i.rotationVector.y*g,i.rotationVector.z*g,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(o.distanceToSquared(i.object.position)>r||8*(1-s.dot(i.object.quaternion))>r)&&(i.dispatchEvent(xC),s.copy(i.object.quaternion),o.copy(i.object.position))},this.updateMovementVector=function(){const h=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-h+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Ed),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",a),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",u),window.removeEventListener("keyup",f)};const a=this.pointermove.bind(this),l=this.pointerdown.bind(this),c=this.pointerup.bind(this),u=this.keydown.bind(this),f=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Ed),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",a),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",u),window.addEventListener("keyup",f),this.updateMovementVector(),this.updateRotationVector()}}function Ed(n){n.preventDefault()}const Td={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Aa{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const wC=new wa(-1,1,1,-1,0,1),Tu=new Nt;Tu.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3));Tu.setAttribute("uv",new ut([0,2,0,0,2,0],2));class MC{constructor(e){this._mesh=new dn(Tu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ad extends Aa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fm.clone(e.uniforms),this.material=new Yn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new MC(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Cd extends Aa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class SC extends Aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class EC{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new be);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Td===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ad===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ad(Td),this.clock=new Cm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cd!==void 0&&(o instanceof Cd?i=!0:o instanceof SC&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new wa(-1,1,1,-1,0,1);const gg=new Nt;gg.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3));gg.setAttribute("uv",new ut([0,2,0,0,2,0],2));class TC extends Aa{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}function xc(){return xc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},xc.apply(this,arguments)}function AC(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ks(n,e){return ks=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ks(n,e)}function CC(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ks(n,e)}function bc(n){return bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},bc(n)}function PC(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function LC(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Go(n,e,t){return LC()?Go=Reflect.construct.bind():Go=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&ks(c,o.prototype),c},Go.apply(null,arguments)}function wc(n){var e=typeof Map=="function"?new Map:void 0;return wc=function(i){if(i===null||!PC(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Go(i,arguments,bc(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ks(r,i)},wc(n)}var Lr=function(n){CC(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,AC(i)}return e}(wc(Error));function Fl(n){return Math.round(n*255)}function RC(n,e,t){return Fl(n)+","+Fl(e)+","+Fl(t)}function Pd(n,e,t,i){if(i===void 0&&(i=RC),e===0)return i(t,t,t);var r=(n%360+360)%360/60,s=(1-Math.abs(2*t-1))*e,o=s*(1-Math.abs(r%2-1)),a=0,l=0,c=0;r>=0&&r<1?(a=s,l=o):r>=1&&r<2?(a=o,l=s):r>=2&&r<3?(l=s,c=o):r>=3&&r<4?(l=o,c=s):r>=4&&r<5?(a=o,c=s):r>=5&&r<6&&(a=s,c=o);var u=t-s/2,f=a+u,h=l+u,p=c+u;return i(f,h,p)}var Ld={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function DC(n){if(typeof n!="string")return n;var e=n.toLowerCase();return Ld[e]?"#"+Ld[e]:n}var OC=/^#[a-fA-F0-9]{6}$/,IC=/^#[a-fA-F0-9]{8}$/,NC=/^#[a-fA-F0-9]{3}$/,FC=/^#[a-fA-F0-9]{4}$/,kl=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,kC=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,zC=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,BC=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Au(n){if(typeof n!="string")throw new Lr(3);var e=DC(n);if(e.match(OC))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(IC)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(NC))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(FC)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=kl.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var s=kC.exec(e.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var o=zC.exec(e);if(o){var a=parseInt(""+o[1],10),l=parseInt(""+o[2],10)/100,c=parseInt(""+o[3],10)/100,u="rgb("+Pd(a,l,c)+")",f=kl.exec(u);if(!f)throw new Lr(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var h=BC.exec(e.substring(0,50));if(h){var p=parseInt(""+h[1],10),g=parseInt(""+h[2],10)/100,m=parseInt(""+h[3],10)/100,d="rgb("+Pd(p,g,m)+")",_=kl.exec(d);if(!_)throw new Lr(4,e,d);return{red:parseInt(""+_[1],10),green:parseInt(""+_[2],10),blue:parseInt(""+_[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new Lr(5)}var UC=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Rd=UC;function Tr(n){var e=n.toString(16);return e.length===1?"0"+e:e}function Dd(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return Rd("#"+Tr(n)+Tr(e)+Tr(t));if(typeof n=="object"&&e===void 0&&t===void 0)return Rd("#"+Tr(n.red)+Tr(n.green)+Tr(n.blue));throw new Lr(6)}function HC(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Au(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?Dd(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Dd(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Lr(7)}function _g(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):_g(n,e,r)}}function VC(n){return _g(n,n.length,[])}function GC(n,e,t){return Math.max(n,Math.min(e,t))}function WC(n,e){if(e==="transparent")return e;var t=Au(e),i=typeof t.alpha=="number"?t.alpha:1,r=xc({},t,{alpha:GC(0,1,(i*100+parseFloat(n)*100)/100)});return HC(r)}var jC=VC(WC),$C=jC,Ss={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Ss.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Ss.Bounce.In(n*2)*.5:Ss.Bounce.Out(n*2-1)*.5+.5}}},xs;typeof self>"u"&&typeof process<"u"&&process.hrtime?xs=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?xs=self.performance.now.bind(self.performance):Date.now!==void 0?xs=Date.now:xs=function(){return new Date().getTime()};var zi=xs,vg=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=zi()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Rr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Rr.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Rr.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Rr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Rr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},Cu=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),yg=new vg,qC=function(){function n(e,t){t===void 0&&(t=yg),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ss.Linear.None,this._interpolationFunction=Rr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=Cu.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?zi()+parseFloat(e):e:zi(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(c){var u=i[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var f in o)t[s][f]=o[f];r[s]=a?[]:{},this._setupProperties(o,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=zi()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=zi()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=zi()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),XC="18.6.4",YC=Cu.nextId,Ln=yg,KC=Ln.getAll.bind(Ln),ZC=Ln.removeAll.bind(Ln),JC=Ln.add.bind(Ln),QC=Ln.remove.bind(Ln),e2=Ln.update.bind(Ln),Bi={Easing:Ss,Group:vg,Interpolation:Rr,now:zi,Sequence:Cu,nextId:YC,Tween:qC,VERSION:XC,getAll:KC,removeAll:ZC,add:JC,remove:QC,update:e2};function t2(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var n2=`.scene-nav-info {
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
}`;t2(n2);function i2(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r2(n,e){return o2(n)||l2(n,e)||xg(n,e)||u2()}function hs(n){return s2(n)||a2(n)||xg(n)||c2()}function s2(n){if(Array.isArray(n))return Mc(n)}function o2(n){if(Array.isArray(n))return n}function a2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function l2(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function xg(n,e){if(!!n){if(typeof n=="string")return Mc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Mc(n,e)}}function Mc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function c2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rt=window.THREE?window.THREE:{WebGLRenderer:ym,Scene:GS,PerspectiveCamera:Jt,Raycaster:Pm,TextureLoader:Tm,Vector2:be,Vector3:B,Box3:tr,Color:Xe,Mesh:dn,SphereGeometry:Ea,MeshBasicMaterial:su,BackSide:Wt,EventDispatcher:_n,MOUSE:Sn,Quaternion:gn,Spherical:hc,Clock:Cm},bg=Su({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(s){return s.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(s){return e.hoverFilter(s.object)}).sort(function(s,o){return e.hoverOrderComparator(s.object,o.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&qe(e.tooltipContent)(t)||"",e.hoverObj=t)}Bi.update()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var s=e.camera;if(t&&e.initialised){var o=t,a=i||{x:0,y:0,z:0};if(!r)u(o),f(a);else{var l=Object.assign({},s.position),c=h();new Bi.Tween(l).to(o,r).easing(Bi.Easing.Quadratic.Out).onUpdate(u).start(),new Bi.Tween(c).to(a,r/3).easing(Bi.Easing.Quadratic.Out).onUpdate(f).start()}return this}return Object.assign({},s.position,{lookAt:h()});function u(p){var g=p.x,m=p.y,d=p.z;g!==void 0&&(s.position.x=g),m!==void 0&&(s.position.y=m),d!==void 0&&(s.position.z=d)}function f(p){var g=new rt.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:s.lookAt(g)}function h(){return Object.assign(new rt.Vector3(0,0,-1e3).applyQuaternion(s.quaternion).add(s.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,s=new Array(r>3?r-3:0),o=3;o<r;o++)s[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,s),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,s=e.camera;if(t){var o=new rt.Vector3(0,0,0),a=Math.max.apply(Math,hs(Object.entries(t).map(function(p){var g=r2(p,2),m=g[0],d=g[1];return Math.max.apply(Math,hs(d.map(function(_){return Math.abs(o[m]-_)})))})))*2,l=(1-r*2/e.height)*s.fov,c=a/Math.atan(l*Math.PI/180),u=c/s.aspect,f=Math.max(c,u);if(f>0){var h=o.clone().sub(s.position).normalize().multiplyScalar(-f);this.cameraPosition(h,o,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new rt.Box3(new rt.Vector3(0,0,0),new rt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(s){return i.expandByObject(s)}),Object.assign.apply(Object,hs(["x","y","z"].map(function(s){return i2({},s,[i.min[s],i.max[s]])})))):null},getScreenCoords:function(e,t,i,r){var s=new rt.Vector3(t,i,r);return s.project(this.camera()),{x:(s.x+1)*e.width/2,y:-(s.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=new rt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new rt.Raycaster;return o.setFromCamera(s,e.camera),Object.assign({},o.ray.at(r,new rt.Vector3))},intersectingObjects:function(e,t,i){var r=new rt.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new rt.Raycaster;return s.params.Line.threshold=e.lineHoverPrecision,s.setFromCamera(r,e.camera),s.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new rt.Scene,camera:new rt.PerspectiveCamera,clock:new rt.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,s=r===void 0?"trackball":r,o=i.rendererConfig,a=o===void 0?{}:o,l=i.extraRenderers,c=l===void 0?[]:l,u=i.waitForLoadComplete,f=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[s]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new rt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return t.container.addEventListener(h,function(p){if(h==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(d){return Math.abs(d)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=m(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function m(d){var _=d.getBoundingClientRect(),w=window.pageXOffset||document.documentElement.scrollLeft,M=window.pageYOffset||document.documentElement.scrollTop;return{top:_.top+M,left:_.left+w}}},{passive:!0})}),t.container.addEventListener("pointerup",function(h){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&t.onClick(t.hoverObj||null,h,t.intersectionPoint),h.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,h,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(h){t.onRightClick&&h.preventDefault()}),t.renderer=new rt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=c,t.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",t.container.appendChild(h.domElement)}),t.postProcessingComposer=new EC(t.renderer),t.postProcessingComposer.addPass(new TC(t.scene,t.camera)),t.controls=new{trackball:vC,orbit:yC,fly:bC}[s](t.camera,t.renderer.domElement),s==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(s==="trackball"||s==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(hs(t.extraRenderers)).forEach(function(h){return h.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new rt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!f,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(hs(e.extraRenderers)).forEach(function(s){return s.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new rt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Au(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new rt.Color($C(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new rt.TextureLoader().load(e.backgroundImageUrl,function(s){e.skysphere.material=new rt.MeshBasicMaterial({map:s,side:rt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(s){return e.scene.remove(s)}),e.objects.forEach(function(s){return e.scene.add(s)}));function r(){e.loadComplete=e.scene.visible=!0}}});function f2(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var h2=`.graph-info-msg {
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
}`;f2(h2);function Od(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ro(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Od(Object(t),!0).forEach(function(i){$s(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Od(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function $s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ca(n){return d2(n)||p2(n)||m2(n)||g2()}function d2(n){if(Array.isArray(n))return Sc(n)}function p2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function m2(n,e){if(!!n){if(typeof n=="string")return Sc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Sc(n,e)}}function Sc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function g2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wg(n,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(o,a){a[n][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(s){for(var o=s[n],a=arguments.length,l=new Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];var u=o[r].apply(o,l);return u===o?this:u}}}}var Id=window.THREE?window.THREE:{AmbientLight:pE,DirectionalLight:dE,Vector3:B},_2=170,Mg=wg("forceGraph",mg),v2=Object.assign.apply(Object,Ca(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return $s({},n,Mg.linkProp(n))}))),y2=Object.assign.apply(Object,Ca(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return $s({},n,Mg.linkMethod(n))}))),Wo=wg("renderObjs",bg),x2=Object.assign.apply(Object,Ca(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return $s({},n,Wo.linkProp(n))}))),b2=Object.assign.apply(Object,Ca(["cameraPosition","postProcessingComposer"].map(function(n){return $s({},n,Wo.linkMethod(n))})).concat([{graph2ScreenCoords:Wo.linkMethod("getScreenCoords"),screen2GraphCoords:Wo.linkMethod("getSceneCoords")}])),w2=Su({props:Ro(Ro({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e)},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},v2),x2),methods:Ro(Ro({zoomToFit:function(e,t,i){for(var r,s=arguments.length,o=new Array(s>3?s-3:0),a=3;a<s;a++)o[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,o),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},y2),b2),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers;return{forceGraph:new mg,renderObjs:bg({controlType:t,rendererConfig:i,extraRenderers:r})}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),s=t.renderObjs.renderer(),o=t.renderObjs.controls();o.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*_2)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var c=t._dragControls=new mE(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,s.domElement);c.addEventListener("dragstart",function(u){o.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var f=zn(u.object).__data;!f.__initialFixedPos&&(f.__initialFixedPos={fx:f.fx,fy:f.fy,fz:f.fz}),!f.__initialPos&&(f.__initialPos={x:f.x,y:f.y,z:f.z}),["x","y","z"].forEach(function(h){return f["f".concat(h)]=f[h]}),s.domElement.classList.add("grabbable")}),c.addEventListener("drag",function(u){var f=zn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var h=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;f.position.add(g.clone().sub(p)),p.copy(g),g.copy(h)}var m=f.__data,d=f.position,_={x:d.x-m.x,y:d.y-m.y,z:d.z-m.z};["x","y","z"].forEach(function(w){return m["f".concat(w)]=m[w]=d[w]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),m.__dragged=!0,t.onNodeDrag(m,_)}),c.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var f=zn(u.object).__data;f.__disposeControlsAfterDrag&&(c.dispose(),delete f.__disposeControlsAfterDrag);var h=f.__initialFixedPos,p=f.__initialPos,g={x:p.x-f.x,y:p.y-f.y,z:p.z-f.z};h&&(["x","y","z"].forEach(function(m){var d="f".concat(m);h[d]===void 0&&delete f[d]}),delete f.__initialFixedPos,delete f.__initialPos,f.__dragged&&(delete f.__dragged,t.onNodeDragEnd(f,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(o.enabled=!0,o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),s.domElement.classList.remove("grabbable")})}}),t.renderObjs.objects([new Id.AmbientLight(12303291),new Id.DirectionalLight(16777215,.6),t.forceGraph]).hoverOrderComparator(function(l,c){var u=zn(l);if(!u)return 1;var f=zn(c);if(!f)return-1;var h=function(g){return g.__graphObjType==="node"};return h(f)-h(u)}).tooltipContent(function(l){var c=zn(l);return c&&qe(t["".concat(c.__graphObjType,"Label")])(c.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var c=zn(l);if(c!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,f=t.hoverObj?t.hoverObj.__data:null,h=c?c.__graphObjType:null,p=c?c.__data:null;if(u&&u!==h){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,f)}if(h){var m=t["on".concat(h==="node"?"Node":"Link","Hover")];m&&m(p,u===h?f:null)}s.domElement.classList[c&&t["on".concat(h==="node"?"Node":"Link","Click")]||!c&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=c}}).clickAfterDrag(!1).onClick(function(l,c){var u=zn(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];f&&f(u.__data,c)}else t.onBackgroundClick&&t.onBackgroundClick(c)}).onRightClick(function(l,c){var u=zn(l);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];f&&f(u.__data,c)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(c)}),this._animationCycle()}});function zn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function M2(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Nd(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function S2(n,e,t){return e&&Nd(n.prototype,e),t&&Nd(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function E2(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ec(n,e)}function ra(n){return ra=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ra(n)}function Ec(n,e){return Ec=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},Ec(n,e)}function T2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A2(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function C2(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A2(n)}function P2(n){var e=T2();return function(){var i=ra(n),r;if(e){var s=ra(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return C2(this,r)}}function Fd(n,e){return R2(n)||O2(n,e)||Sg(n,e)||N2()}function Do(n){return L2(n)||D2(n)||Sg(n)||I2()}function L2(n){if(Array.isArray(n))return Tc(n)}function R2(n){if(Array.isArray(n))return n}function D2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O2(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,o,a;try{for(t=t.call(n);!(r=(o=t.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,a=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw a}}return i}}function Sg(n,e){if(!!n){if(typeof n=="string")return Tc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Tc(n,e)}}function Tc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function I2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ds=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:Gt,Sprite:bm,SpriteMaterial:cu,Texture:$t},F2=function(n){E2(t,n);var e=P2(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return M2(this,t),i=e.call(this,new ds.SpriteMaterial),i._text="".concat(r),i._textHeight=s,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="Arial",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return S2(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,s=this._canvas,o=s.getContext("2d"),a=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=a.map(function(x){return x*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(x){return x*r.fontSize*.1}),f=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],h=f.map(function(x){return x*r.fontSize*.1}),p=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=g;var m=Math.max.apply(Math,Do(p.map(function(x){return o.measureText(x).width}))),d=this.fontSize*p.length;if(s.width=m+l[0]*2+h[0]*2,s.height=d+l[1]*2+h[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,l[0]){var _=l[0]/2;o.lineWidth=l[0],o.beginPath(),o.moveTo(_,u[0]),o.lineTo(_,s.height-u[3]),o.moveTo(s.width-_,u[1]),o.lineTo(s.width-_,s.height-u[2]),o.stroke()}if(l[1]){var w=l[1]/2;o.lineWidth=l[1],o.beginPath(),o.moveTo(Math.max(l[0],u[0]),w),o.lineTo(s.width-Math.max(l[0],u[1]),w),o.moveTo(Math.max(l[0],u[3]),s.height-w),o.lineTo(s.width-Math.max(l[0],u[2]),s.height-w),o.stroke()}if(this.borderRadius){var M=Math.max.apply(Math,Do(l)),b=M/2;o.lineWidth=M,o.beginPath(),[!!u[0]&&[u[0],b,b,u[0]],!!u[1]&&[s.width-u[1],s.width-b,b,u[1]],!!u[2]&&[s.width-u[2],s.width-b,s.height-b,s.height-u[2]],!!u[3]&&[u[3],b,s.height-b,s.height-u[3]]].filter(function(x){return x}).forEach(function(x){var C=Fd(x,4),I=C[0],q=C[1],ne=C[2],G=C[3];o.moveTo(I,ne),o.quadraticCurveTo(q,ne,q,G)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(l[0],u[0]),[[l[0],u[0],s.width-u[1],l[1],l[1],l[1]],[s.width-l[0],s.width-l[0],s.width-l[0],l[1],u[1],s.height-u[2]],[s.width-l[0],s.width-u[2],u[3],s.height-l[1],s.height-l[1],s.height-l[1]],[l[0],l[0],l[0],s.height-l[1],s.height-u[3],u[0]]].forEach(function(x){var C=Fd(x,6),I=C[0],q=C[1],ne=C[2],G=C[3],D=C[4],F=C[5];o.quadraticCurveTo(I,G,q,D),o.lineTo(ne,F)}),o.closePath(),o.fill()):o.fillRect(l[0],l[1],s.width-l[0]*2,s.height-l[1]*2)),o.translate.apply(o,Do(l)),o.translate.apply(o,Do(h)),o.font=g,o.fillStyle=this.color,o.textBaseline="bottom";var y=this.strokeWidth>0;y&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),p.forEach(function(x,C){var I=(m-o.measureText(x).width)/2,q=(C+1)*r.fontSize;y&&o.strokeText(x,I,q),o.fillText(x,I,q)}),this.material.map&&this.material.map.dispose();var A=this.material.map=new ds.Texture(s);A.minFilter=ds.LinearFilter,A.needsUpdate=!0;var O=this.textHeight*p.length+a[1]*2+f[1]*2;this.scale.set(O*s.width/s.height,O,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return ds.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(ds.Sprite);const k2={name:"MainPage",components:{UserInfo:M0,ArtistInfo:W0},data(){return{loading:null,error:null,me:null,nodes:[],links:[],genres:[],genreToSortBy:null,graph:null,graphType:"medium_term",nodeType:"dot",colorByPopularity:!1,currentArtist:null,shareModal:{view:!1,url:null,loading:null}}},async mounted(){localStorage.getItem("userToken")!=null&&(P0().then(n=>{this.me=n}).catch(n=>{this.error=n}),await this.buildGraph())},destroyed(){window.removeEventListener("resize",this.resizeGraph)},methods:{logout(){er()},async buildGraph(){this.graph=null,document.getElementById("graph").innerHTML=null,this.currentArtist=null,this.genreToSortBy=null,this.graphType=="following"?(this.loading="Loading... Getting the Users You Follow",this.nodes=await A0().catch(t=>{this.error=t})):this.graphType.includes("_term")&&(this.loading="Loading... Getting Your Top Items",this.nodes=await D0(this.graphType).catch(t=>{this.error=t})),this.genres=this.buildGenreList(this.nodes),this.loading="Loading... Building Links",this.links=await L0(this.nodes),this.loading=null,this.graph=w2();let n=this.$refs.graph.clientWidth,e=this.$refs.graph.clientHeight;this.graph(document.getElementById("graph")).graphData({nodes:this.nodes,links:this.links}).showNavInfo(!0).width(n).height(e).enableNodeDrag(!1).backgroundColor("#00000000").linkWidth(2).nodeRelSize(7).nodeLabel(t=>t.name).onNodeHover(t=>{t&&(this.currentArtist=t)}),this.updateNodeType(),this.updateNodeColor(),window.onresize=this.resizeGraph},resizeGraph(){let n=document.getElementById("content").clientWidth,e=document.getElementById("content").clientHeight;this.graph.width(n),this.graph.height(e)},updateNodeType(){this.nodeType=="dot"?(this.graph.nodeThreeObject(n=>{}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="image"?(this.graph.nodeThreeObject(n=>{let e=new Tm().load(n.img),t=new cu({map:e}),i=new bm(t);return i.scale.set(25,25),i}),this.graph.nodeLabel(n=>n.name)):this.nodeType=="text"&&(this.graph.nodeThreeObject(n=>{const e=new F2(n.name);return e.color="#ffffff",e.borderColor="#002b36",e.backgroundColor="#002b36",e.borderWidth=4,e.borderRadius=4,e.textHeight=8,e}),this.graph.nodeLabel(""))},updateNodeColor(){this.graph.nodeColor(n=>{if(this.colorByPopularity){let e=n.popularity;return`hsl(${e/100*360},${e}%,50%)`}else return"#ffffff"})},buildGenreList(n){let e={};n.forEach(function(i){i.genres.forEach(function(r){e[r]?e[r]+=1:e[r]=1})});let t=[];for(const i in e)e[i]>2&&t.push(i);return t},updateGenreSort(){if(this.genreToSortBy=="null"||this.genreToSortBy==null||!this.genreToSortBy){console.log("got null, going back to normal"),this.graph.graphData({nodes:this.nodes,links:this.links});return}else{let n=this.genreToSortBy,e=[],t=[];this.nodes.forEach(function(r){r.genres.includes(n)&&(e.push(r),t.push(r.id))});let i=[];this.links.forEach(function(r){t.includes(r.source.id)&&t.includes(r.target.id)&&i.push(r)}),this.graph.graphData({nodes:e,links:i})}},avgPopularity(){let n=0,e=0;this.nodes.forEach(function(i){n+=i.popularity,e++});let t=n/e;return Math.round(t)},async shareGraph(){this.shareModal.loading="Uploading Data",this.shareModal.view=!0;let n=await Xy(this.nodes,this.me.display_name,this.me.id,this.graphType);this.shareModal.url=`${window.location.origin}/?share=${n}`,this.shareModal.loading=!1}}},gt=n=>(O_("data-v-c74f0e9c"),n=n(),I_(),n),z2={class:"flex bg-base03 text-base0 grid grid-cols-1 md:grid-cols-5 grid-rows-6 md:grid-rows-1 p-3 md:p-4 lg:p-6 xl:p-10 gap-3 md:gap-4 lg:gap-6 xl:gap-10"},B2={class:"bg-base01 gap-0.5 col-span-1 md:col-span-4 row-span-4 md:row-span-1 shadow-md flex flex-col rounded-lg"},U2={class:"grow-0 gap-0.5 w-full h-8 md:h-10 lg:h-12 grid grid-cols-2 md:grid-cols-3 text-sm md:text-md bg-transparent"},H2=gt(()=>Le("option",{value:"following"},"Artists You Follow",-1)),V2=gt(()=>Le("option",{value:"short_term"},"Top Artists of the Month",-1)),G2=gt(()=>Le("option",{value:"medium_term"},"Top Artists of the Year",-1)),W2=gt(()=>Le("option",{value:"long_term"},"Top Artists of All Time",-1)),j2=[H2,V2,G2,W2],$2=gt(()=>Le("option",{value:"dot"},"View as Dots",-1)),q2=gt(()=>Le("option",{value:"image"},"View as Images",-1)),X2=gt(()=>Le("option",{value:"text"},"View as Text",-1)),Y2=[$2,q2,X2],K2=gt(()=>Le("option",{value:"null"},"All Genres",-1)),Z2=["value"],J2={id:"content",class:"grow bg-base02 md:rounded-br-md md:rounded-bl-md text-center flex"},Q2={ref:"graph",id:"graph",class:"grow select-none"},e3=gt(()=>Le("option",{value:"following"},"Artists You Follow",-1)),t3=gt(()=>Le("option",{value:"short_term"},"Top Artists of the past Month",-1)),n3=gt(()=>Le("option",{value:"medium_term"},"Top Artists of the past Year",-1)),i3=gt(()=>Le("option",{value:"long_term"},"Top Artists of All Time",-1)),r3=[e3,t3,n3,i3],s3={class:"bg-base02 rounded-md flex flex-col col-span-1 row-span-2 md:row-span-1 md:col-span-1 shadow-md space-y-2 p-2"},o3={key:0,class:"italic text-sm grow"},a3={key:1,class:"font-bold text-sm text-red grow"},l3={key:2,class:"grow gap-2 rounded-md grid grid-cols-2 md:flex md:flex-col overflow-y-auto"},c3={class:"bg-base03 rounded-md p-2 space-y-2 rounded-md shadow-md overflow-y-auto"},u3={class:"text-sm md:text-base text-center font-bold mx-1 mb-2"},f3={key:1,class:"space-y-2 select-none flex flex-col"},h3={for:"toggleB",class:"flex items-center cursor-pointer bg-base02 hover:bg-base02-tint py-1 px-2 rounded-md shadow-md"},d3={class:"relative"},p3=gt(()=>Le("div",{class:"block bg-base03 w-10 h-6 rounded-full"},null,-1)),m3=gt(()=>Le("div",{class:"dot absolute left-1 top-1 bg-[#1f4a54] w-4 h-4 rounded-full transition"},null,-1)),g3=gt(()=>Le("div",{class:"ml-3 font-semibold text-xs md:text-base"}," Color by Popularity ",-1)),_3={key:0,class:"inline-grid grid-cols-2 px-3 py-1 text-xs md:text-base text-[#ffffff] rounded-md shadow-md bg-gradient-to-r from-[#15803d] via-[#7e22ce] to-[#be185d]"},v3=gt(()=>Le("p",{class:"text-left"},"Less Popular",-1)),y3=gt(()=>Le("p",{class:"text-right"},"More Popular",-1)),x3=[v3,y3],b3={class:"grid grid-cols-2 md:grid-cols-1 gap-2"},w3={key:0,class:"fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] opacity-100 grid place-items-center"},M3={class:"rounded-md shadow-lg bg-base03 p-3 text-center text-base1"},S3=gt(()=>Le("h1",{class:"text-xl font-semibold"},"Share Your Graph",-1)),E3={key:0},T3={key:1},A3=gt(()=>Le("p",null,"Your graph is now available at",-1)),C3=["href"];function P3(n,e,t,i,r,s){const o=Xo("UserInfo"),a=Xo("ArtistInfo");return st(),vt("div",z2,[Le("div",B2,[Le("div",U2,[es(Le("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>r.graphType=l),onChange:e[1]||(e[1]=l=>s.buildGraph()),name:"graphType",class:"filter hidden md:inline-flex rounded-tl-md"},j2,544),[[eo,r.graphType]]),es(Le("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>r.nodeType=l),onChange:e[3]||(e[3]=l=>s.updateNodeType()),class:"filter rounded-tl-md md:rounded-none"},Y2,544),[[eo,r.nodeType]]),es(Le("select",{"onUpdate:modelValue":e[4]||(e[4]=l=>r.genreToSortBy=l),onChange:e[5]||(e[5]=l=>s.updateGenreSort()),class:"filter rounded-tr-md"},[K2,(st(!0),vt(Zt,null,vp(r.genres,l=>(st(),vt("option",{key:l,value:l}," Only "+wn(l.charAt(0).toUpperCase()+l.slice(1)),9,Z2))),128))],544),[[eo,r.genreToSortBy]])]),Le("div",J2,[Le("div",Q2,null,512)]),es(Le("select",{"onUpdate:modelValue":e[6]||(e[6]=l=>r.graphType=l),onChange:e[7]||(e[7]=l=>s.buildGraph()),class:"grow-0 filter md:hidden w-full h-8 rounded-br-md rounded-bl-md"},r3,544),[[eo,r.graphType]])]),Le("div",s3,[r.loading?(st(),vt("p",o3,wn(r.loading),1)):Bn("",!0),r.error?(st(),vt("p",a3,wn(r.error),1)):Bn("",!0),r.graph?(st(),vt("div",l3,[Le("div",c3,[Le("p",u3," Average Artist Popularity: "+wn(s.avgPopularity())+"% ",1),r.me?(st(),Ls(o,{key:0,me:r.me},null,8,["me"])):Bn("",!0),r.graph&&r.nodeType=="dot"?(st(),vt("div",f3,[Le("label",h3,[Le("div",d3,[es(Le("input",{type:"checkbox",id:"toggleB","onUpdate:modelValue":e[8]||(e[8]=l=>r.colorByPopularity=l),onChange:e[9]||(e[9]=(...l)=>s.updateNodeColor&&s.updateNodeColor(...l)),class:"sr-only"},null,544),[[i0,r.colorByPopularity]]),p3,m3]),g3]),r.colorByPopularity?(st(),vt("div",_3,x3)):Bn("",!0)])):Bn("",!0)]),r.currentArtist?(st(),Ls(a,{key:0,artist:r.currentArtist},null,8,["artist"])):Bn("",!0)])):Bn("",!0),Le("div",b3,[Le("button",{onClick:e[10]||(e[10]=(...l)=>s.shareGraph&&s.shareGraph(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"}," Share "),Le("button",{onClick:e[11]||(e[11]=(...l)=>s.logout&&s.logout(...l)),class:"px-2 py-1 rounded-md bg-base01 text-base03 font-bold w-full shadow-md hover:shadow-lg"}," Logout ")])]),r.shareModal.view?(st(),vt("div",w3,[Le("div",M3,[S3,r.shareModal.loading?(st(),vt("div",E3,[Le("p",null,"Loading: "+wn(r.shareModal.loading)+"...",1)])):(st(),vt("div",T3,[A3,Le("a",{class:"select-none underline",href:r.shareModal.url},wn(r.shareModal.url),9,C3)])),Le("button",{class:"bg-base02 mt-4 px-2 py-1 rounded-md",onClick:e[12]||(e[12]=l=>r.shareModal.view=!1)},"Close")])])):Bn("",!0)])}const L3=Us(k2,[["render",P3],["__scopeId","data-v-c74f0e9c"]]),R3={name:"App",components:{LoginPage:_0,MainPage:L3},data(){return{userToken:null}},created(){if(localStorage.getItem("lastLoggedIn")!=null){let e=Date.parse(localStorage.getItem("lastLoggedIn")),t=new Date,i=Math.abs(t-e),r=Math.floor(i/1e3/60);console.log(`Time since last login: ${r} minutes`),r>=60&&(localStorage.removeItem("lastLoggedIn"),er())}let n=window.location.hash.split("&")[0].split("=")[1];console.log(`Url Hash: ${n}`),n?(this.userToken=n,localStorage.setItem("userToken",n),localStorage.setItem("lastLoggedIn",new Date().toISOString())):this.userToken=localStorage.getItem("userToken"),console.log(`Temporary User Token: ${this.userToken}`)}},D3={class:"w-screen h-screen flex"};function O3(n,e,t,i,r,s){const o=Xo("MainPage"),a=Xo("LoginPage");return st(),vt("div",D3,[r.userToken?(st(),Ls(o,{key:0,class:"grow"})):(st(),Ls(a,{key:1,class:"grow"}))])}const I3=Us(R3,[["render",O3]]);o0(I3).mount("#app")});export default N3();
