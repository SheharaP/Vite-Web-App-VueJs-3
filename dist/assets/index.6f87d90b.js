(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ls(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vl=Ls(_l);function jo(t){return!!t||t===""}function Us(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?wl(r):Us(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(ue(t))return t}}const yl=/;(?![^(]*\))/g,bl=/:(.+)/;function wl(t){const e={};return t.split(yl).forEach(n=>{if(n){const r=n.split(bl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yr(t){let e="";if(de(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=yr(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Il=t=>de(t)?t:t==null?"":U(t)||ue(t)&&(t.toString===qo||!$(t.toString))?JSON.stringify(t,Vo,2):String(t),Vo=(t,e)=>e&&e.__v_isRef?Vo(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:zo(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!U(e)&&!Ko(e)?String(e):e,ee={},Zt=[],Ue=()=>{},El=()=>!1,Tl=/^on[^a-z]/,br=t=>Tl.test(t),Fs=t=>t.startsWith("onUpdate:"),_e=Object.assign,$s=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Al=Object.prototype.hasOwnProperty,W=(t,e)=>Al.call(t,e),U=Array.isArray,en=t=>wr(t)==="[object Map]",zo=t=>wr(t)==="[object Set]",$=t=>typeof t=="function",de=t=>typeof t=="string",Bs=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Wo=t=>ue(t)&&$(t.then)&&$(t.catch),qo=Object.prototype.toString,wr=t=>qo.call(t),Sl=t=>wr(t).slice(8,-1),Ko=t=>wr(t)==="[object Object]",Hs=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Jn=Ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rl=/-(\w)/g,Ge=Ir(t=>t.replace(Rl,(e,n)=>n?n.toUpperCase():"")),Cl=/\B([A-Z])/g,ln=Ir(t=>t.replace(Cl,"-$1").toLowerCase()),Er=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Ir(t=>t?`on${Er(t)}`:""),Sn=(t,e)=>!Object.is(t,e),Yn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},as=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let _i;const Ol=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class kl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&je&&(this.parent=je,this.index=(je.scopes||(je.scopes=[])).push(this)-1)}run(e){if(this.active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Pl(t,e=je){e&&e.active&&e.effects.push(t)}const js=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Go=t=>(t.w&Et)>0,Jo=t=>(t.n&Et)>0,xl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Et},Ml=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Go(s)&&!Jo(s)?s.delete(t):e[n++]=s,s.w&=~Et,s.n&=~Et}e.length=n}},cs=new WeakMap;let mn=0,Et=1;const ls=30;let De;const Mt=Symbol(""),us=Symbol("");class Vs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pl(this,r)}run(){if(!this.active)return this.fn();let e=De,n=bt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,bt=!0,Et=1<<++mn,mn<=ls?xl(this):vi(this),this.fn()}finally{mn<=ls&&Ml(this),Et=1<<--mn,De=this.parent,bt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(vi(this),this.onStop&&this.onStop(),this.active=!1)}}function vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bt=!0;const Yo=[];function un(){Yo.push(bt),bt=!1}function fn(){const t=Yo.pop();bt=t===void 0?!0:t}function Se(t,e,n){if(bt&&De){let r=cs.get(t);r||cs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=js()),Xo(s)}}function Xo(t,e){let n=!1;mn<=ls?Jo(t)||(t.n|=Et,n=!Go(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function st(t,e,n,r,s,i){const o=cs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Hs(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),en(t)&&a.push(o.get(us)));break;case"delete":U(t)||(a.push(o.get(Mt)),en(t)&&a.push(o.get(us)));break;case"set":en(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&fs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);fs(js(c))}}function fs(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&yi(r);for(const r of n)r.computed||yi(r)}function yi(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Nl=Ls("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bs)),Dl=zs(),Ll=zs(!1,!0),Ul=zs(!0),bi=Fl();function Fl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){un();const r=K(this)[e].apply(this,n);return fn(),r}}),t}function zs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?eu:ra:e?na:ta).get(r))return r;const o=U(r);if(!t&&o&&W(bi,s))return Reflect.get(bi,s,i);const a=Reflect.get(r,s,i);return(Bs(s)?Qo.has(s):Nl(s))||(t||Se(r,"get",s),e)?a:me(a)?o&&Hs(s)?a:a.value:ue(a)?t?sa(a):Un(a):a}}const $l=Zo(),Bl=Zo(!0);function Zo(t=!1){return function(n,r,s,i){let o=n[r];if(Rn(o)&&me(o)&&!me(s))return!1;if(!t&&!Rn(s)&&(ds(s)||(s=K(s),o=K(o)),!U(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=U(n)&&Hs(r)?Number(r)<n.length:W(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Sn(s,o)&&st(n,"set",r,s):st(n,"add",r,s)),c}}function Hl(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&st(t,"delete",e,void 0),r}function jl(t,e){const n=Reflect.has(t,e);return(!Bs(e)||!Qo.has(e))&&Se(t,"has",e),n}function Vl(t){return Se(t,"iterate",U(t)?"length":Mt),Reflect.ownKeys(t)}const ea={get:Dl,set:$l,deleteProperty:Hl,has:jl,ownKeys:Vl},zl={get:Ul,set(t,e){return!0},deleteProperty(t,e){return!0}},Wl=_e({},ea,{get:Ll,set:Bl}),Ws=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function jn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&Se(s,"get",e),Se(s,"get",i));const{has:o}=Tr(s),a=r?Ws:n?Gs:Cn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&Se(r,"has",t),Se(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function zn(t,e=!1){return t=t.__v_raw,!e&&Se(K(t),"iterate",Mt),Reflect.get(t,"size",t)}function wi(t){t=K(t);const e=K(this);return Tr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function Ii(t,e){e=K(e);const n=K(this),{has:r,get:s}=Tr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Sn(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function Ei(t){const e=K(this),{has:n,get:r}=Tr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function Ti(){const t=K(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function Wn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Ws:t?Gs:Cn;return!t&&Se(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function qn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ws:e?Gs:Cn;return!e&&Se(i,"iterate",c?us:Mt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function ql(){const t={get(i){return jn(this,i)},get size(){return zn(this)},has:Vn,add:wi,set:Ii,delete:Ei,clear:Ti,forEach:Wn(!1,!1)},e={get(i){return jn(this,i,!1,!0)},get size(){return zn(this)},has:Vn,add:wi,set:Ii,delete:Ei,clear:Ti,forEach:Wn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Wn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Wn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qn(i,!1,!1),n[i]=qn(i,!0,!1),e[i]=qn(i,!1,!0),r[i]=qn(i,!0,!0)}),[t,n,e,r]}const[Kl,Gl,Jl,Yl]=ql();function qs(t,e){const n=e?t?Yl:Jl:t?Gl:Kl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const Xl={get:qs(!1,!1)},Ql={get:qs(!1,!0)},Zl={get:qs(!0,!1)},ta=new WeakMap,na=new WeakMap,ra=new WeakMap,eu=new WeakMap;function tu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nu(t){return t.__v_skip||!Object.isExtensible(t)?0:tu(Sl(t))}function Un(t){return Rn(t)?t:Ks(t,!1,ea,Xl,ta)}function ru(t){return Ks(t,!1,Wl,Ql,na)}function sa(t){return Ks(t,!0,zl,Zl,ra)}function Ks(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tn(t){return Rn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function ds(t){return!!(t&&t.__v_isShallow)}function ia(t){return tn(t)||Rn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function oa(t){return or(t,"__v_skip",!0),t}const Cn=t=>ue(t)?Un(t):t,Gs=t=>ue(t)?sa(t):t;function aa(t){bt&&De&&(t=K(t),Xo(t.dep||(t.dep=js())))}function ca(t,e){t=K(t),t.dep&&fs(t.dep)}function me(t){return!!(t&&t.__v_isRef===!0)}function la(t){return ua(t,!1)}function su(t){return ua(t,!0)}function ua(t,e){return me(t)?t:new iu(t,e)}class iu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Cn(e)}get value(){return aa(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Sn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Cn(e),ca(this))}}function nn(t){return me(t)?t.value:t}const ou={get:(t,e,n)=>nn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fa(t){return tn(t)?t:new Proxy(t,ou)}class au{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vs(e,()=>{this._dirty||(this._dirty=!0,ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return aa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cu(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Ue):(r=t.get,s=t.set),new au(r,s,i||!s,n)}function wt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function Pe(t,e,n,r){if($(t)){const i=wt(t,e,n,r);return i&&Wo(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){wt(c,null,10,[t,o,a]);return}}lu(t,n,s,r)}function lu(t,e,n,r=!0){console.error(t)}let ar=!1,hs=!1;const Te=[];let Ze=0;const yn=[];let _n=null,Gt=0;const bn=[];let ht=null,Jt=0;const da=Promise.resolve();let Js=null,ps=null;function ha(t){const e=Js||da;return t?e.then(this?t.bind(this):t):e}function uu(t){let e=Ze+1,n=Te.length;for(;e<n;){const r=e+n>>>1;On(Te[r])<t?e=r+1:n=r}return e}function pa(t){(!Te.length||!Te.includes(t,ar&&t.allowRecurse?Ze+1:Ze))&&t!==ps&&(t.id==null?Te.push(t):Te.splice(uu(t.id),0,t),ga())}function ga(){!ar&&!hs&&(hs=!0,Js=da.then(va))}function fu(t){const e=Te.indexOf(t);e>Ze&&Te.splice(e,1)}function ma(t,e,n,r){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ga()}function du(t){ma(t,_n,yn,Gt)}function hu(t){ma(t,ht,bn,Jt)}function Sr(t,e=null){if(yn.length){for(ps=e,_n=[...new Set(yn)],yn.length=0,Gt=0;Gt<_n.length;Gt++)_n[Gt]();_n=null,Gt=0,ps=null,Sr(t,e)}}function _a(t){if(Sr(),bn.length){const e=[...new Set(bn)];if(bn.length=0,ht){ht.push(...e);return}for(ht=e,ht.sort((n,r)=>On(n)-On(r)),Jt=0;Jt<ht.length;Jt++)ht[Jt]();ht=null,Jt=0}}const On=t=>t.id==null?1/0:t.id;function va(t){hs=!1,ar=!0,Sr(t),Te.sort((n,r)=>On(n)-On(r));const e=Ue;try{for(Ze=0;Ze<Te.length;Ze++){const n=Te[Ze];n&&n.active!==!1&&wt(n,null,14)}}finally{Ze=0,Te.length=0,_a(),ar=!1,Js=null,(Te.length||yn.length||bn.length)&&va(t)}}function pu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ee;p&&(s=n.map(m=>m.trim())),h&&(s=n.map(as))}let a,c=r[a=zr(e)]||r[a=zr(Ge(e))];!c&&i&&(c=r[a=zr(ln(e))]),c&&Pe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pe(l,t,6,s)}}function ya(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const u=ya(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):_e(o,i),r.set(t,o),o)}function Rr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,ln(e))||W(t,e))}let ke=null,ba=null;function cr(t){const e=ke;return ke=t,ba=t&&t.type.__scopeId||null,e}function vn(t,e=ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=cr(e),o=t(...s);return cr(i),r._d&&Di(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Wr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:A,inheritAttrs:P}=t;let C,R;const D=cr(t);try{if(n.shapeFlag&4){const z=s||r;C=ze(u.call(z,z,h,i,m,p,A)),R=c}else{const z=e;C=ze(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),R=e.props?c:gu(c)}}catch(z){wn.length=0,Ar(z,t,1),C=ce(rt)}let H=C;if(R&&P!==!1){const z=Object.keys(R),{shapeFlag:se}=H;z.length&&se&7&&(o&&z.some(Fs)&&(R=mu(R,o)),H=Tt(H,R))}return n.dirs&&(H=Tt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),C=H,cr(D),C}const gu=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},mu=(t,e)=>{const n={};for(const r in t)(!Fs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _u(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ai(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Rr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ai(r,o,l):!0:!!o;return!1}function Ai(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function vu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yu=t=>t.__isSuspense;function bu(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):hu(t)}function Xn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function nt(t,e,n=!1){const r=fe||ke;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const Si={};function Qn(t,e,n){return wa(t,e,n)}function wa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){const a=fe;let c,l=!1,u=!1;if(me(t)?(c=()=>t.value,l=ds(t)):tn(t)?(c=()=>t,r=!0):U(t)?(u=!0,l=t.some(R=>tn(R)||ds(R)),c=()=>t.map(R=>{if(me(R))return R.value;if(tn(R))return Pt(R);if($(R))return wt(R,a,2)})):$(t)?e?c=()=>wt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pe(t,a,3,[p])}:c=Ue,e&&r){const R=c;c=()=>Pt(R())}let h,p=R=>{h=C.onStop=()=>{wt(R,a,4)}};if(Pn)return p=Ue,e?n&&Pe(e,a,3,[c(),u?[]:void 0,p]):c(),Ue;let m=u?[]:Si;const A=()=>{if(!!C.active)if(e){const R=C.run();(r||l||(u?R.some((D,H)=>Sn(D,m[H])):Sn(R,m)))&&(h&&h(),Pe(e,a,3,[R,m===Si?void 0:m,p]),m=R)}else C.run()};A.allowRecurse=!!e;let P;s==="sync"?P=A:s==="post"?P=()=>we(A,a&&a.suspense):P=()=>du(A);const C=new Vs(c,P);return e?n?A():m=C.run():s==="post"?we(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&$s(a.scope.effects,C)}}function wu(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ia(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=fe;on(this);const a=wa(s,i.bind(r),n);return o?on(o):Nt(),a}function Ia(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))Pt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(zo(t)||en(t))t.forEach(n=>{Pt(n,e)});else if(Ko(t))for(const n in t)Pt(t[n],e);return t}function Iu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ra(()=>{t.isMounted=!0}),Ca(()=>{t.isUnmounting=!0}),t}const Ce=[Function,Array],Eu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(t,{slots:e}){const n=lf(),r=Iu();let s;return()=>{const i=e.default&&Ta(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const P of i)if(P.type!==rt){o=P;break}}const a=K(t),{mode:c}=a;if(r.isLeaving)return qr(o);const l=Ri(o);if(!l)return qr(o);const u=gs(l,a,r,n);ms(l,u);const h=n.subTree,p=h&&Ri(h);let m=!1;const{getTransitionKey:A}=l.type;if(A){const P=A();s===void 0?s=P:P!==s&&(s=P,m=!0)}if(p&&p.type!==rt&&(!Ot(l,p)||m)){const P=gs(p,a,r,n);if(ms(p,P),c==="out-in")return r.isLeaving=!0,P.afterLeave=()=>{r.isLeaving=!1,n.update()},qr(o);c==="in-out"&&l.type!==rt&&(P.delayLeave=(C,R,D)=>{const H=Ea(r,p);H[String(p.key)]=p,C._leaveCb=()=>{R(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=D})}return o}}},Tu=Eu;function Ea(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function gs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:m,onLeaveCancelled:A,onBeforeAppear:P,onAppear:C,onAfterAppear:R,onAppearCancelled:D}=e,H=String(t.key),z=Ea(n,t),se=(V,G)=>{V&&Pe(V,r,9,G)},ae=(V,G)=>{const ie=G[1];se(V,G),U(V)?V.every(he=>he.length<=1)&&ie():V.length<=1&&ie()},ge={mode:i,persisted:o,beforeEnter(V){let G=a;if(!n.isMounted)if(s)G=P||a;else return;V._leaveCb&&V._leaveCb(!0);const ie=z[H];ie&&Ot(t,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),se(G,[V])},enter(V){let G=c,ie=l,he=u;if(!n.isMounted)if(s)G=C||c,ie=R||l,he=D||u;else return;let pe=!1;const Me=V._enterCb=lt=>{pe||(pe=!0,lt?se(he,[V]):se(ie,[V]),ge.delayedLeave&&ge.delayedLeave(),V._enterCb=void 0)};G?ae(G,[V,Me]):Me()},leave(V,G){const ie=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return G();se(h,[V]);let he=!1;const pe=V._leaveCb=Me=>{he||(he=!0,G(),Me?se(A,[V]):se(m,[V]),V._leaveCb=void 0,z[ie]===t&&delete z[ie])};z[ie]=t,p?ae(p,[V,pe]):pe()},clone(V){return gs(V,e,n,r)}};return ge}function qr(t){if(Cr(t))return t=Tt(t),t.children=null,t}function Ri(t){return Cr(t)?t.children?t.children[0]:void 0:t}function ms(t,e){t.shapeFlag&6&&t.component?ms(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ta(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&s++,r=r.concat(Ta(o.children,e,a))):(e||o.type!==rt)&&r.push(a!=null?Tt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Aa(t){return $(t)?{setup:t,name:t.name}:t}const Zn=t=>!!t.type.__asyncLoader,Cr=t=>t.type.__isKeepAlive;function Au(t,e){Sa(t,"a",e)}function Su(t,e){Sa(t,"da",e)}function Sa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Or(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Cr(s.parent.vnode)&&Ru(r,e,n,s),s=s.parent}}function Ru(t,e,n,r){const s=Or(e,t,r,!0);Oa(()=>{$s(r[e],s)},n)}function Or(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;un(),on(n);const a=Pe(e,n,t,o);return Nt(),fn(),a});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=fe)=>(!Pn||t==="sp")&&Or(t,e,n),Cu=ct("bm"),Ra=ct("m"),Ou=ct("bu"),ku=ct("u"),Ca=ct("bum"),Oa=ct("um"),Pu=ct("sp"),xu=ct("rtg"),Mu=ct("rtc");function Nu(t,e=fe){Or("ec",t,e)}function av(t,e){const n=ke;if(n===null)return t;const r=Mr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ee]=e[i];$(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function At(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(un(),Pe(c,n,8,[t.el,a,t,e]),fn())}}const ka="components";function _s(t,e){return Lu(ka,t,!0,e)||t}const Du=Symbol();function Lu(t,e,n=!0,r=!1){const s=ke||fe;if(s){const i=s.type;if(t===ka){const a=pf(i,!1);if(a&&(a===e||a===Ge(e)||a===Er(Ge(e))))return i}const o=Ci(s[t]||i[t],e)||Ci(s.appContext[t],e);return!o&&r?i:o}}function Ci(t,e){return t&&(t[e]||t[Ge(e)]||t[Er(Ge(e))])}function cv(t,e,n,r){let s;const i=n&&n[r];if(U(t)||de(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const vs=t=>t?Va(t)?Mr(t)||t.proxy:vs(t.parent):null,lr=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vs(t.parent),$root:t=>vs(t.root),$emit:t=>t.emit,$options:t=>xa(t),$forceUpdate:t=>t.f||(t.f=()=>pa(t.update)),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>wu.bind(t)}),Uu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ee&&W(r,e))return o[e]=1,r[e];if(s!==ee&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==ee&&W(n,e))return o[e]=4,n[e];ys&&(o[e]=0)}}const u=lr[e];let h,p;if(u)return e==="$attrs"&&Se(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ee&&W(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ee&&W(s,e)?(s[e]=n,!0):r!==ee&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&W(t,o)||e!==ee&&W(e,o)||(a=i[0])&&W(a,o)||W(r,o)||W(lr,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ys=!0;function Fu(t){const e=xa(t),n=t.proxy,r=t.ctx;ys=!1,e.beforeCreate&&Oi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:A,activated:P,deactivated:C,beforeDestroy:R,beforeUnmount:D,destroyed:H,unmounted:z,render:se,renderTracked:ae,renderTriggered:ge,errorCaptured:V,serverPrefetch:G,expose:ie,inheritAttrs:he,components:pe,directives:Me,filters:lt}=e;if(l&&$u(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const J=o[te];$(J)&&(r[te]=J.bind(n))}if(s){const te=s.call(n,n);ue(te)&&(t.data=Un(te))}if(ys=!0,i)for(const te in i){const J=i[te],Ie=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):Ue,Wt=!$(J)&&$(J.set)?J.set.bind(n):Ue,Xe=Oe({get:Ie,set:Wt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:$e=>Xe.value=$e})}if(a)for(const te in a)Pa(a[te],r,n,te);if(c){const te=$(c)?c.call(n):c;Reflect.ownKeys(te).forEach(J=>{Xn(J,te[J])})}u&&Oi(u,t,"c");function le(te,J){U(J)?J.forEach(Ie=>te(Ie.bind(n))):J&&te(J.bind(n))}if(le(Cu,h),le(Ra,p),le(Ou,m),le(ku,A),le(Au,P),le(Su,C),le(Nu,V),le(Mu,ae),le(xu,ge),le(Ca,D),le(Oa,z),le(Pu,G),U(ie))if(ie.length){const te=t.exposed||(t.exposed={});ie.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:Ie=>n[J]=Ie})})}else t.exposed||(t.exposed={});se&&t.render===Ue&&(t.render=se),he!=null&&(t.inheritAttrs=he),pe&&(t.components=pe),Me&&(t.directives=Me)}function $u(t,e,n=Ue,r=!1){U(t)&&(t=bs(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=nt(i.from||s,i.default,!0):o=nt(i.from||s):o=nt(i),me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Oi(t,e,n){Pe(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pa(t,e,n,r){const s=r.includes(".")?Ia(n,r):()=>n[r];if(de(t)){const i=e[t];$(i)&&Qn(s,i)}else if($(t))Qn(s,t.bind(n));else if(ue(t))if(U(t))t.forEach(i=>Pa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Qn(s,i,t)}}function xa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ur(c,l,o,!0)),ur(c,e,o)),i.set(e,c),c}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Bu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Bu={data:ki,props:Rt,emits:Rt,methods:Rt,computed:Rt,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Rt,directives:Rt,watch:ju,provide:ki,inject:Hu};function ki(t,e){return e?t?function(){return _e($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Hu(t,e){return Rt(bs(t),bs(e))}function bs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Rt(t,e){return t?_e(_e(Object.create(null),t),e):e}function ju(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Vu(t,e,n,r=!1){const s={},i={};or(i,xr,1),t.propsDefaults=Object.create(null),Ma(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ru(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Rr(t.emitsOptions,p))continue;const m=e[p];if(c)if(W(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const A=Ge(p);s[A]=ws(c,a,A,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Ma(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!W(e,h)&&((u=ln(h))===h||!W(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ws(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!W(e,h)&&!0)&&(delete i[h],l=!0)}l&&st(t,"set","$attrs")}function Ma(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Jn(c))continue;const l=e[c];let u;s&&W(s,u=Ge(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Rr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||ee;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ws(s,c,h,l[h],t,!W(l,h))}}return o}function ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(on(s),r=l[n]=c.call(null,e),Nt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}function Na(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[p,m]=Na(h,e,!0);_e(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Zt),Zt;if(U(i))for(let u=0;u<i.length;u++){const h=Ge(i[u]);Pi(h)&&(o[h]=ee)}else if(i)for(const u in i){const h=Ge(u);if(Pi(h)){const p=i[u],m=o[h]=U(p)||$(p)?{type:p}:p;if(m){const A=Ni(Boolean,m.type),P=Ni(String,m.type);m[0]=A>-1,m[1]=P<0||A<P,(A>-1||W(m,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Pi(t){return t[0]!=="$"}function xi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Mi(t,e){return xi(t)===xi(e)}function Ni(t,e){return U(e)?e.findIndex(n=>Mi(n,t)):$(e)&&Mi(e,t)?0:-1}const Da=t=>t[0]==="_"||t==="$stable",Ys=t=>U(t)?t.map(ze):[ze(t)],Wu=(t,e,n)=>{if(e._n)return e;const r=vn((...s)=>Ys(e(...s)),n);return r._c=!1,r},La=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Da(s))continue;const i=t[s];if($(i))e[s]=Wu(s,i,r);else if(i!=null){const o=Ys(i);e[s]=()=>o}}},Ua=(t,e)=>{const n=Ys(e);t.slots.default=()=>n},qu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),or(e,"_",n)):La(e,t.slots={})}else t.slots={},e&&Ua(t,e);or(t.slots,xr,1)},Ku=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,La(e,s)),o=e}else e&&(Ua(t,e),o={default:1});if(i)for(const a in s)!Da(a)&&!(a in o)&&delete s[a]};function Fa(){return{app:null,config:{isNativeTag:El,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gu=0;function Ju(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!ue(s)&&(s=null);const i=Fa(),o=new Set;let a=!1;const c=i.app={_uid:Gu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(c,...u)):$(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const p=ce(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Mr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Is(t,e,n,r,s=!1){if(U(t)){t.forEach((p,m)=>Is(p,e&&(U(e)?e[m]:e),n,r,s));return}if(Zn(r)&&!s)return;const i=r.shapeFlag&4?Mr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(de(l)?(u[l]=null,W(h,l)&&(h[l]=null)):me(l)&&(l.value=null)),$(c))wt(c,a,12,[o,u]);else{const p=de(c),m=me(c);if(p||m){const A=()=>{if(t.f){const P=p?u[c]:c.value;s?U(P)&&$s(P,i):U(P)?P.includes(i)||P.push(i):p?(u[c]=[i],W(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,W(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=bu;function Yu(t){return Xu(t)}function Xu(t,e){const n=Ol();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Ue,cloneNode:A,insertStaticContent:P}=t,C=(f,d,g,y=null,v=null,I=null,S=!1,w=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ot(f,d)&&(y=x(f),Re(f,v,I,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=d;switch(b){case Xs:R(f,d,g,y);break;case rt:D(f,d,g,y);break;case er:f==null&&H(d,g,y,S);break;case Ve:Me(f,d,g,y,v,I,S,w,E);break;default:O&1?ae(f,d,g,y,v,I,S,w,E):O&6?lt(f,d,g,y,v,I,S,w,E):(O&64||O&128)&&b.process(f,d,g,y,v,I,S,w,E,ne)}M!=null&&v&&Is(M,f&&f.ref,I,d||f,!d)},R=(f,d,g,y)=>{if(f==null)r(d.el=a(d.children),g,y);else{const v=d.el=f.el;d.children!==f.children&&l(v,d.children)}},D=(f,d,g,y)=>{f==null?r(d.el=c(d.children||""),g,y):d.el=f.el},H=(f,d,g,y)=>{[f.el,f.anchor]=P(f.children,d,g,y,f.el,f.anchor)},z=({el:f,anchor:d},g,y)=>{let v;for(;f&&f!==d;)v=p(f),r(f,g,y),f=v;r(d,g,y)},se=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},ae=(f,d,g,y,v,I,S,w,E)=>{S=S||d.type==="svg",f==null?ge(d,g,y,v,I,S,w,E):ie(f,d,v,I,S,w,E)},ge=(f,d,g,y,v,I,S,w)=>{let E,b;const{type:M,props:O,shapeFlag:N,transition:L,patchFlag:q,dirs:X}=f;if(f.el&&A!==void 0&&q===-1)E=f.el=A(f.el);else{if(E=f.el=o(f.type,I,O&&O.is,O),N&8?u(E,f.children):N&16&&G(f.children,E,null,y,v,I&&M!=="foreignObject",S,w),X&&At(f,null,y,"created"),O){for(const oe in O)oe!=="value"&&!Jn(oe)&&i(E,oe,null,O[oe],I,f.children,y,v,T);"value"in O&&i(E,"value",null,O.value),(b=O.onVnodeBeforeMount)&&He(b,y,f)}V(E,f,f.scopeId,S,y)}X&&At(f,null,y,"beforeMount");const Q=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;Q&&L.beforeEnter(E),r(E,d,g),((b=O&&O.onVnodeMounted)||Q||X)&&we(()=>{b&&He(b,y,f),Q&&L.enter(E),X&&At(f,null,y,"mounted")},v)},V=(f,d,g,y,v)=>{if(g&&m(f,g),y)for(let I=0;I<y.length;I++)m(f,y[I]);if(v){let I=v.subTree;if(d===I){const S=v.vnode;V(f,S,S.scopeId,S.slotScopeIds,v.parent)}}},G=(f,d,g,y,v,I,S,w,E=0)=>{for(let b=E;b<f.length;b++){const M=f[b]=w?pt(f[b]):ze(f[b]);C(null,M,d,g,y,v,I,S,w)}},ie=(f,d,g,y,v,I,S)=>{const w=d.el=f.el;let{patchFlag:E,dynamicChildren:b,dirs:M}=d;E|=f.patchFlag&16;const O=f.props||ee,N=d.props||ee;let L;g&&St(g,!1),(L=N.onVnodeBeforeUpdate)&&He(L,g,d,f),M&&At(d,f,g,"beforeUpdate"),g&&St(g,!0);const q=v&&d.type!=="foreignObject";if(b?he(f.dynamicChildren,b,w,g,y,q,I):S||Ie(f,d,w,null,g,y,q,I,!1),E>0){if(E&16)pe(w,d,O,N,g,y,v);else if(E&2&&O.class!==N.class&&i(w,"class",null,N.class,v),E&4&&i(w,"style",O.style,N.style,v),E&8){const X=d.dynamicProps;for(let Q=0;Q<X.length;Q++){const oe=X[Q],Ne=O[oe],qt=N[oe];(qt!==Ne||oe==="value")&&i(w,oe,Ne,qt,v,f.children,g,y,T)}}E&1&&f.children!==d.children&&u(w,d.children)}else!S&&b==null&&pe(w,d,O,N,g,y,v);((L=N.onVnodeUpdated)||M)&&we(()=>{L&&He(L,g,d,f),M&&At(d,f,g,"updated")},y)},he=(f,d,g,y,v,I,S)=>{for(let w=0;w<d.length;w++){const E=f[w],b=d[w],M=E.el&&(E.type===Ve||!Ot(E,b)||E.shapeFlag&70)?h(E.el):g;C(E,b,M,null,y,v,I,S,!0)}},pe=(f,d,g,y,v,I,S)=>{if(g!==y){for(const w in y){if(Jn(w))continue;const E=y[w],b=g[w];E!==b&&w!=="value"&&i(f,w,b,E,S,d.children,v,I,T)}if(g!==ee)for(const w in g)!Jn(w)&&!(w in y)&&i(f,w,g[w],null,S,d.children,v,I,T);"value"in y&&i(f,"value",g.value,y.value)}},Me=(f,d,g,y,v,I,S,w,E)=>{const b=d.el=f?f.el:a(""),M=d.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:N,slotScopeIds:L}=d;L&&(w=w?w.concat(L):L),f==null?(r(b,g,y),r(M,g,y),G(d.children,g,M,v,I,S,w,E)):O>0&&O&64&&N&&f.dynamicChildren?(he(f.dynamicChildren,N,g,v,I,S,w),(d.key!=null||v&&d===v.subTree)&&$a(f,d,!0)):Ie(f,d,g,M,v,I,S,w,E)},lt=(f,d,g,y,v,I,S,w,E)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?v.ctx.activate(d,g,y,S,E):zt(d,g,y,v,I,S,E):le(f,d,E)},zt=(f,d,g,y,v,I,S)=>{const w=f.component=cf(f,y,v);if(Cr(f)&&(w.ctx.renderer=ne),uf(w),w.asyncDep){if(v&&v.registerDep(w,te),!f.el){const E=w.subTree=ce(rt);D(null,E,d,g)}return}te(w,f,d,g,v,I,S)},le=(f,d,g)=>{const y=d.component=f.component;if(_u(f,d,g))if(y.asyncDep&&!y.asyncResolved){J(y,d,g);return}else y.next=d,fu(y.update),y.update();else d.el=f.el,y.vnode=d},te=(f,d,g,y,v,I,S)=>{const w=()=>{if(f.isMounted){let{next:M,bu:O,u:N,parent:L,vnode:q}=f,X=M,Q;St(f,!1),M?(M.el=q.el,J(f,M,S)):M=q,O&&Yn(O),(Q=M.props&&M.props.onVnodeBeforeUpdate)&&He(Q,L,M,q),St(f,!0);const oe=Wr(f),Ne=f.subTree;f.subTree=oe,C(Ne,oe,h(Ne.el),x(Ne),f,v,I),M.el=oe.el,X===null&&vu(f,oe.el),N&&we(N,v),(Q=M.props&&M.props.onVnodeUpdated)&&we(()=>He(Q,L,M,q),v)}else{let M;const{el:O,props:N}=d,{bm:L,m:q,parent:X}=f,Q=Zn(d);if(St(f,!1),L&&Yn(L),!Q&&(M=N&&N.onVnodeBeforeMount)&&He(M,X,d),St(f,!0),O&&B){const oe=()=>{f.subTree=Wr(f),B(O,f.subTree,f,v,null)};Q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&oe()):oe()}else{const oe=f.subTree=Wr(f);C(null,oe,g,y,f,v,I),d.el=oe.el}if(q&&we(q,v),!Q&&(M=N&&N.onVnodeMounted)){const oe=d;we(()=>He(M,X,oe),v)}(d.shapeFlag&256||X&&Zn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&we(f.a,v),f.isMounted=!0,d=g=y=null}},E=f.effect=new Vs(w,()=>pa(b),f.scope),b=f.update=()=>E.run();b.id=f.uid,St(f,!0),b()},J=(f,d,g)=>{d.component=f;const y=f.vnode.props;f.vnode=d,f.next=null,zu(f,d.props,y,g),Ku(f,d.children,g),un(),Sr(void 0,f.update),fn()},Ie=(f,d,g,y,v,I,S,w,E=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=d.children,{patchFlag:N,shapeFlag:L}=d;if(N>0){if(N&128){Xe(b,O,g,y,v,I,S,w,E);return}else if(N&256){Wt(b,O,g,y,v,I,S,w,E);return}}L&8?(M&16&&T(b,v,I),O!==b&&u(g,O)):M&16?L&16?Xe(b,O,g,y,v,I,S,w,E):T(b,v,I,!0):(M&8&&u(g,""),L&16&&G(O,g,y,v,I,S,w,E))},Wt=(f,d,g,y,v,I,S,w,E)=>{f=f||Zt,d=d||Zt;const b=f.length,M=d.length,O=Math.min(b,M);let N;for(N=0;N<O;N++){const L=d[N]=E?pt(d[N]):ze(d[N]);C(f[N],L,g,null,v,I,S,w,E)}b>M?T(f,v,I,!0,!1,O):G(d,g,y,v,I,S,w,E,O)},Xe=(f,d,g,y,v,I,S,w,E)=>{let b=0;const M=d.length;let O=f.length-1,N=M-1;for(;b<=O&&b<=N;){const L=f[b],q=d[b]=E?pt(d[b]):ze(d[b]);if(Ot(L,q))C(L,q,g,null,v,I,S,w,E);else break;b++}for(;b<=O&&b<=N;){const L=f[O],q=d[N]=E?pt(d[N]):ze(d[N]);if(Ot(L,q))C(L,q,g,null,v,I,S,w,E);else break;O--,N--}if(b>O){if(b<=N){const L=N+1,q=L<M?d[L].el:y;for(;b<=N;)C(null,d[b]=E?pt(d[b]):ze(d[b]),g,q,v,I,S,w,E),b++}}else if(b>N)for(;b<=O;)Re(f[b],v,I,!0),b++;else{const L=b,q=b,X=new Map;for(b=q;b<=N;b++){const Ee=d[b]=E?pt(d[b]):ze(d[b]);Ee.key!=null&&X.set(Ee.key,b)}let Q,oe=0;const Ne=N-q+1;let qt=!1,pi=0;const pn=new Array(Ne);for(b=0;b<Ne;b++)pn[b]=0;for(b=L;b<=O;b++){const Ee=f[b];if(oe>=Ne){Re(Ee,v,I,!0);continue}let Be;if(Ee.key!=null)Be=X.get(Ee.key);else for(Q=q;Q<=N;Q++)if(pn[Q-q]===0&&Ot(Ee,d[Q])){Be=Q;break}Be===void 0?Re(Ee,v,I,!0):(pn[Be-q]=b+1,Be>=pi?pi=Be:qt=!0,C(Ee,d[Be],g,null,v,I,S,w,E),oe++)}const gi=qt?Qu(pn):Zt;for(Q=gi.length-1,b=Ne-1;b>=0;b--){const Ee=q+b,Be=d[Ee],mi=Ee+1<M?d[Ee+1].el:y;pn[b]===0?C(null,Be,g,mi,v,I,S,w,E):qt&&(Q<0||b!==gi[Q]?$e(Be,g,mi,2):Q--)}}},$e=(f,d,g,y,v=null)=>{const{el:I,type:S,transition:w,children:E,shapeFlag:b}=f;if(b&6){$e(f.component.subTree,d,g,y);return}if(b&128){f.suspense.move(d,g,y);return}if(b&64){S.move(f,d,g,ne);return}if(S===Ve){r(I,d,g);for(let O=0;O<E.length;O++)$e(E[O],d,g,y);r(f.anchor,d,g);return}if(S===er){z(f,d,g);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),r(I,d,g),we(()=>w.enter(I),v);else{const{leave:O,delayLeave:N,afterLeave:L}=w,q=()=>r(I,d,g),X=()=>{O(I,()=>{q(),L&&L()})};N?N(I,q,X):X()}else r(I,d,g)},Re=(f,d,g,y=!1,v=!1)=>{const{type:I,props:S,ref:w,children:E,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:N}=f;if(w!=null&&Is(w,null,g,f,!0),M&256){d.ctx.deactivate(f);return}const L=M&1&&N,q=!Zn(f);let X;if(q&&(X=S&&S.onVnodeBeforeUnmount)&&He(X,d,f),M&6)k(f.component,g,y);else{if(M&128){f.suspense.unmount(g,y);return}L&&At(f,null,d,"beforeUnmount"),M&64?f.type.remove(f,d,g,v,ne,y):b&&(I!==Ve||O>0&&O&64)?T(b,d,g,!1,!0):(I===Ve&&O&384||!v&&M&16)&&T(E,d,g),y&&hn(f)}(q&&(X=S&&S.onVnodeUnmounted)||L)&&we(()=>{X&&He(X,d,f),L&&At(f,null,d,"unmounted")},g)},hn=f=>{const{type:d,el:g,anchor:y,transition:v}=f;if(d===Ve){_(g,y);return}if(d===er){se(f);return}const I=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:w}=v,E=()=>S(g,I);w?w(f.el,I,E):E()}else I()},_=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},k=(f,d,g)=>{const{bum:y,scope:v,update:I,subTree:S,um:w}=f;y&&Yn(y),v.stop(),I&&(I.active=!1,Re(S,f,d,g)),w&&we(w,d),we(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(f,d,g,y=!1,v=!1,I=0)=>{for(let S=I;S<f.length;S++)Re(f[S],d,g,y,v)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Y=(f,d,g)=>{f==null?d._vnode&&Re(d._vnode,null,null,!0):C(d._vnode||null,f,d,null,null,null,g),_a(),d._vnode=f},ne={p:C,um:Re,m:$e,r:hn,mt:zt,mc:G,pc:Ie,pbc:he,n:x,o:t};let j,B;return e&&([j,B]=e(ne)),{render:Y,hydrate:j,createApp:Ju(Y,j)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $a(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||$a(o,a))}}function Qu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Zu=t=>t.__isTeleport,Ve=Symbol(void 0),Xs=Symbol(void 0),rt=Symbol(void 0),er=Symbol(void 0),wn=[];let Le=null;function kr(t=!1){wn.push(Le=t?null:[])}function ef(){wn.pop(),Le=wn[wn.length-1]||null}let kn=1;function Di(t){kn+=t}function Ba(t){return t.dynamicChildren=kn>0?Le||Zt:null,ef(),kn>0&&Le&&Le.push(t),t}function Pr(t,e,n,r,s,i){return Ba(be(t,e,n,r,s,i,!0))}function lv(t,e,n,r,s){return Ba(ce(t,e,n,r,s,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Ot(t,e){return t.type===e.type&&t.key===e.key}const xr="__vInternal",Ha=({key:t})=>t!=null?t:null,tr=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||me(t)||$(t)?{i:ke,r:t,k:e,f:!!n}:t:null;function be(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&tr(e),scopeId:ba,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),kn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const ce=tf;function tf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Du)&&(t=rt),Es(t)){const a=Tt(t,e,!0);return n&&Qs(a,n),kn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(gf(t)&&(t=t.__vccOpts),e){e=nf(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=yr(a)),ue(c)&&(ia(c)&&!U(c)&&(c=_e({},c)),e.style=Us(c))}const o=de(t)?1:yu(t)?128:Zu(t)?64:ue(t)?4:$(t)?2:0;return be(t,e,n,r,s,o,i,!0)}function nf(t){return t?ia(t)||xr in t?_e({},t):t:null}function Tt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?sf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ha(a),ref:e&&e.ref?n&&s?U(s)?s.concat(tr(e)):[s,tr(e)]:tr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tt(t.ssContent),ssFallback:t.ssFallback&&Tt(t.ssFallback),el:t.el,anchor:t.anchor}}function ja(t=" ",e=0){return ce(Xs,null,t,e)}function rf(t,e){const n=ce(er,null,t);return n.staticCount=e,n}function ze(t){return t==null||typeof t=="boolean"?ce(rt):U(t)?ce(Ve,null,t.slice()):typeof t=="object"?pt(t):ce(Xs,null,String(t))}function pt(t){return t.el===null||t.memo?t:Tt(t)}function Qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(xr in e)?e._ctx=ke:s===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),r&64?(n=16,e=[ja(e)]):n=8);t.children=e,t.shapeFlag|=n}function sf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yr([e.class,r.class]));else if(s==="style")e.style=Us([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Pe(t,e,7,[n,r])}const of=Fa();let af=0;function cf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||of,i={uid:af++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(r,s),emitsOptions:ya(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pu.bind(null,i),t.ce&&t.ce(i),i}let fe=null;const lf=()=>fe||ke,on=t=>{fe=t,t.scope.on()},Nt=()=>{fe&&fe.scope.off(),fe=null};function Va(t){return t.vnode.shapeFlag&4}let Pn=!1;function uf(t,e=!1){Pn=e;const{props:n,children:r}=t.vnode,s=Va(t);Vu(t,n,s,e),qu(t,r);const i=s?ff(t,e):void 0;return Pn=!1,i}function ff(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oa(new Proxy(t.ctx,Uu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?hf(t):null;on(t),un();const i=wt(r,t,0,[t.props,s]);if(fn(),Nt(),Wo(i)){if(i.then(Nt,Nt),e)return i.then(o=>{Li(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else Li(t,i,e)}else za(t,e)}function Li(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=fa(e)),za(t,n)}let Ui;function za(t,e,n){const r=t.type;if(!t.render){if(!e&&Ui&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=Ui(s,l)}}t.render=r.render||Ue}on(t),un(),Fu(t),fn(),Nt()}function df(t){return new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}})}function hf(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=df(t))},slots:t.slots,emit:t.emit,expose:e}}function Mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fa(oa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in lr)return lr[n](t)}}))}function pf(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function gf(t){return $(t)&&"__vccOpts"in t}const Oe=(t,e)=>cu(t,e,Pn);function Wa(t,e,n){const r=arguments.length;return r===2?ue(e)&&!U(e)?Es(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Es(n)&&(n=[n]),ce(t,e,n))}const mf="3.2.37",_f="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Fi=kt&&kt.createElement("template"),vf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?kt.createElementNS(_f,t):kt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kt.createTextNode(t),createComment:t=>kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bf(t,e,n){const r=t.style,s=de(n);if(n&&!s){for(const i in n)Ts(r,i,n[i]);if(e&&!de(e))for(const i in e)n[i]==null&&Ts(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const $i=/\s*!important$/;function Ts(t,e,n){if(U(n))n.forEach(r=>Ts(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wf(t,e);$i.test(n)?t.setProperty(ln(r),n.replace($i,""),"important"):t[r]=n}}const Bi=["Webkit","Moz","ms"],Kr={};function wf(t,e){const n=Kr[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return Kr[e]=r;r=Er(r);for(let s=0;s<Bi.length;s++){const i=Bi[s]+r;if(i in t)return Kr[e]=i}return e}const Hi="http://www.w3.org/1999/xlink";function If(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n);else{const i=vl(e);n==null||i&&!jo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ef(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=jo(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[qa,Tf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let As=0;const Af=Promise.resolve(),Sf=()=>{As=0},Rf=()=>As||(Af.then(Sf),As=qa());function Yt(t,e,n,r){t.addEventListener(e,n,r)}function Cf(t,e,n,r){t.removeEventListener(e,n,r)}function Of(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kf(e);if(r){const l=i[e]=Pf(r,s);Yt(t,a,l,c)}else o&&(Cf(t,a,o,c),i[e]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function kf(t){let e;if(ji.test(t)){e={};let n;for(;n=t.match(ji);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ln(t.slice(2)),e]}function Pf(t,e){const n=r=>{const s=r.timeStamp||qa();(Tf||s>=n.attached-1)&&Pe(xf(r,n.value),e,5,[r])};return n.value=t,n.attached=Rf(),n}function xf(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vi=/^on[a-z]/,Mf=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?yf(t,r,s):e==="style"?bf(t,n,r):br(e)?Fs(e)||Of(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nf(t,e,r,s))?Ef(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),If(t,e,r,s))};function Nf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Vi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Vi.test(e)&&de(n)?!1:e in t}const Df={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tu.props;const zi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Yn(e,n):e};function Lf(t){t.target.composing=!0}function Wi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const uv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=zi(s);const i=r||s.props&&s.props.type==="number";Yt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=as(a)),t._assign(a)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",Lf),Yt(t,"compositionend",Wi),Yt(t,"change",Wi))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=zi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&as(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Uf=_e({patchProp:Mf},vf);let qi;function Ff(){return qi||(qi=Yu(Uf))}const $f=(...t)=>{const e=Ff().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Bf(t){return de(t)?document.querySelector(t):t}const Hf="/assets/logo.4b7191ae.png",Nr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},jf={setup(){let t=la(!1);return{showMenu:t,toggleNav:()=>t.value=!t.value}}},Vf={class:"bg-indigo-600"},zf={class:"container px-20 pt-15 pb-10 mx-auto ml-500 md:flex md:justify-between md:items-center"},Wf=be("img",{class:"p-0 mt-5 my-0 object-fill h-48 w-auto",src:Hf,alt:"logo"},null,-1),qf={class:"flex items-center justify-right"},Kf=ja("Springfield Pet Rescue "),Gf=be("button",{type:"button",class:"text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"},[be("svg",{viewBox:"0 0 20 20",class:"w-8 h-6 fill-current"},[be("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),Jf=[Gf],Yf=be("li",{class:"text-white text-lg font-bold hover:text-black cursor-pointer"},"Home",-1),Xf=be("li",{class:"text-white text-lg font-bold hover:text-black cursor-pointer"},"Find a pet",-1),Qf=be("li",{class:"text-white text-lg font-bold hover:text-black cursor-pointer"},"About Us",-1),Zf=be("li",{class:"text-white text-lg font-bold hover:text-black cursor-pointer"},"Events",-1);function ed(t,e,n,r,s,i){const o=_s("router-link");return kr(),Pr("div",Vf,[be("nav",zf,[Wf,be("div",qf,[ce(o,{to:"/",class:"text-xxl font-bold text-gray-100 mr-80 md:text-2xl md:mt-10"},{default:vn(()=>[Kf]),_:1}),be("div",{onClick:e[0]||(e[0]=(...a)=>r.toggleNav&&r.toggleNav(...a)),class:"flex md:hidden"},Jf)]),be("ul",{class:yr([r.showMenu?"flex":"hidden","flex-col mt-8 mx-20 space-y-4 space-x-20 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-8 md:mt-10"])},[ce(o,{to:"/"},{default:vn(()=>[Yf]),_:1}),ce(o,{to:"/pets"},{default:vn(()=>[Xf]),_:1}),ce(o,{to:"/about"},{default:vn(()=>[Qf]),_:1}),ce(o,{to:"/"}),Zf],2)])])}const td=Nr(jf,[["render",ed]]),nd={name:"App",components:{Navigation:td}},rd={id:"app"};function sd(t,e,n,r,s,i){const o=_s("Navigation"),a=_s("router-view");return kr(),Pr("div",rd,[ce(o),ce(a)])}const id=Nr(nd,[["render",sd]]);const od="modulepreload",ad=function(t){return"/"+t},Ki={},Kn=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=ad(s),s in Ki)return;Ki[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":od,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function cd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Gr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fe(s)?s.map(t):t(s)}return n}const In=()=>{},Fe=Array.isArray,ld=/\/$/,ud=t=>t.replace(ld,"");function Jr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=pd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function fd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&an(e.matched[r],n.matched[s])&&Ka(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function an(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ka(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hd(t[n],e[n]))return!1;return!0}function hd(t,e){return Fe(t)?Ji(t,e):Fe(e)?Ji(e,t):t===e}function Ji(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var xn;(function(t){t.pop="pop",t.push="push"})(xn||(xn={}));var En;(function(t){t.back="back",t.forward="forward",t.unknown=""})(En||(En={}));function gd(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ud(t)}const md=/^[^#]+#/;function _d(t,e){return t.replace(md,"#")+e}function vd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function yd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=vd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yi(t,e){return(history.state?history.state.position-e:-1)+t}const Ss=new Map;function bd(t,e){Ss.set(t,e)}function wd(t){const e=Ss.get(t);return Ss.delete(t),e}let Id=()=>location.protocol+"//"+location.host;function Ga(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gi(c,"")}return Gi(n,t)+r+s}function Ed(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Ga(t,location),A=n.value,P=e.value;let C=0;if(p){if(n.value=m,e.value=p,o&&o===A){o=null;return}C=P?p.position-P.position:0}else r(m);s.forEach(R=>{R(n.value,A,{delta:C,type:xn.pop,direction:C?C>0?En.forward:En.back:En.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const A=s.indexOf(p);A>-1&&s.splice(A,1)};return i.push(m),m}function u(){const{history:p}=window;!p.state||p.replaceState(Z({},p.state,{scroll:Dr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Xi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dr():null}}function Td(t){const{history:e,location:n}=window,r={value:Ga(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Id()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,Xi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:Dr()});i(u.current,u,!0);const h=Z({},Xi(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Ad(t){t=gd(t);const e=Td(t),n=Ed(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:_d.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Sd(t){return typeof t=="string"||t&&typeof t=="object"}function Ja(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ya=Symbol("");var Qi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qi||(Qi={}));function cn(t,e){return Z(new Error,{type:t,[Ya]:!0},e)}function Qe(t,e){return t instanceof Error&&Ya in t&&(e==null||!!(t.type&e))}const Zi="[^/]+?",Rd={sensitive:!1,strict:!1,start:!0,end:!0},Cd=/[.+*?^${}()[\]/\\]/g;function Od(t,e){const n=Z({},Rd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Cd,"\\$&"),m+=40;else if(p.type===1){const{value:A,repeatable:P,optional:C,regexp:R}=p;i.push({name:A,repeatable:P,optional:C});const D=R||Zi;if(D!==Zi){m+=10;try{new RegExp(`(${D})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${D}): `+z.message)}}let H=P?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(H=C&&l.length<2?`(?:/${H})`:"/"+H),C&&(H+="?"),s+=H,m+=20,C&&(m+=-8),P&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",A=i[p-1];h[A.name]=m&&A.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:A,repeatable:P,optional:C}=m,R=A in l?l[A]:"";if(Fe(R)&&!P)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const D=Fe(R)?R.join("/"):R;if(!D)if(C)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function kd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Pd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(eo(r))return 1;if(eo(s))return-1}return s.length-r.length}function eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xd={type:0,value:""},Md=/[a-zA-Z0-9_]/;function Nd(t){if(!t)return[[]];if(t==="/")return[[xd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Md.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Dd(t,e,n){const r=Od(Nd(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ld(t,e){const n=[],r=new Map;e=no({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const m=!p,A=Fd(u);A.aliasOf=p&&p.record;const P=no(e,u),C=[A];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of H)C.push(Z({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let R,D;for(const H of C){const{path:z}=H;if(h&&z[0]!=="/"){const se=h.record.path,ae=se[se.length-1]==="/"?"":"/";H.path=h.record.path+(z&&ae+z)}if(R=Dd(H,h,P),p?p.alias.push(R):(D=D||R,D!==R&&D.alias.push(R),m&&u.name&&!to(R)&&o(u.name)),A.children){const se=A.children;for(let ae=0;ae<se.length;ae++)i(se[ae],R,p&&p.children[ae])}p=p||R,c(R)}return D?()=>{o(D)}:In}function o(u){if(Ja(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Pd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Xa(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!to(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},A,P;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw cn(1,{location:u});P=p.record.name,m=Z(Ud(h.params,p.keys.filter(D=>!D.optional).map(D=>D.name)),u.params),A=p.stringify(m)}else if("path"in u)A=u.path,p=n.find(D=>D.re.test(A)),p&&(m=p.parse(A),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!p)throw cn(1,{location:u,currentLocation:h});P=p.record.name,m=Z({},h.params,u.params),A=p.stringify(m)}const C=[];let R=p;for(;R;)C.unshift(R.record),R=R.parent;return{name:P,path:A,params:m,matched:C,meta:Bd(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Fd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$d(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $d(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function to(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bd(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function no(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xa(t,e){return e.children.some(n=>n===t||Xa(t,n))}const Qa=/#/g,Hd=/&/g,jd=/\//g,Vd=/=/g,zd=/\?/g,Za=/\+/g,Wd=/%5B/g,qd=/%5D/g,ec=/%5E/g,Kd=/%60/g,tc=/%7B/g,Gd=/%7C/g,nc=/%7D/g,Jd=/%20/g;function Zs(t){return encodeURI(""+t).replace(Gd,"|").replace(Wd,"[").replace(qd,"]")}function Yd(t){return Zs(t).replace(tc,"{").replace(nc,"}").replace(ec,"^")}function Rs(t){return Zs(t).replace(Za,"%2B").replace(Jd,"+").replace(Qa,"%23").replace(Hd,"%26").replace(Kd,"`").replace(tc,"{").replace(nc,"}").replace(ec,"^")}function Xd(t){return Rs(t).replace(Vd,"%3D")}function Qd(t){return Zs(t).replace(Qa,"%23").replace(zd,"%3F")}function Zd(t){return t==null?"":Qd(t).replace(jd,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Za," "),o=i.indexOf("="),a=fr(o<0?i:i.slice(0,o)),c=o<0?null:fr(i.slice(o+1));if(a in e){let l=e[a];Fe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ro(t){let e="";for(let n in t){const r=t[n];if(n=Xd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&Rs(i)):[r&&Rs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function th(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nh=Symbol(""),so=Symbol(""),Lr=Symbol(""),rc=Symbol(""),Cs=Symbol("");function gn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(cn(4,{from:n,to:e})):h instanceof Error?a(h):Sd(h)?a(cn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Yr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(gt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=cd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&gt(p,n,r,i,o)()}))}}return s}function rh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function io(t){const e=nt(Lr),n=nt(rc),r=Oe(()=>e.resolve(nn(t.to))),s=Oe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(an.bind(null,u));if(p>-1)return p;const m=oo(c[l-2]);return l>1&&oo(u)===m&&h[h.length-1].path!==m?h.findIndex(an.bind(null,c[l-2])):p}),i=Oe(()=>s.value>-1&&ah(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Ka(n.params,r.value.params));function a(c={}){return oh(c)?e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(In):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const sh=Aa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:io,setup(t,{slots:e}){const n=Un(io(t)),{options:r}=nt(Lr),s=Oe(()=>({[ao(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ao(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ih=sh;function oh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ah(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function oo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ao=(t,e,n)=>t!=null?t:e!=null?e:n,ch=Aa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nt(Cs),s=Oe(()=>t.route||r.value),i=nt(so,0),o=Oe(()=>{let l=nn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Oe(()=>s.value.matched[o.value]);Xn(so,Oe(()=>o.value+1)),Xn(nh,a),Xn(Cs,s);const c=la();return Qn(()=>[c.value,a.value,t.name],([l,u,h],[p,m,A])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!an(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,p=h&&h.components[u];if(!p)return co(n.default,{Component:p,route:l});const m=h.props[u],A=m?m===!0?l.params:typeof m=="function"?m(l):m:null,C=Wa(p,Z({},A,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return co(n.default,{Component:C,route:l})||C}}});function co(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lh=ch;function uh(t){const e=Ld(t.routes,t),n=t.parseQuery||eh,r=t.stringifyQuery||ro,s=t.history,i=gn(),o=gn(),a=gn(),c=su(ft);let l=ft;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Gr.bind(null,_=>""+_),h=Gr.bind(null,Zd),p=Gr.bind(null,fr);function m(_,k){let T,x;return Ja(_)?(T=e.getRecordMatcher(_),x=k):x=_,e.addRoute(x,T)}function A(_){const k=e.getRecordMatcher(_);k&&e.removeRoute(k)}function P(){return e.getRoutes().map(_=>_.record)}function C(_){return!!e.getRecordMatcher(_)}function R(_,k){if(k=Z({},k||c.value),typeof _=="string"){const B=Jr(n,_,k.path),f=e.resolve({path:B.path},k),d=s.createHref(B.fullPath);return Z(B,f,{params:p(f.params),hash:fr(B.hash),redirectedFrom:void 0,href:d})}let T;if("path"in _)T=Z({},_,{path:Jr(n,_.path,k.path).path});else{const B=Z({},_.params);for(const f in B)B[f]==null&&delete B[f];T=Z({},_,{params:h(_.params)}),k.params=h(k.params)}const x=e.resolve(T,k),Y=_.hash||"";x.params=u(p(x.params));const ne=fd(r,Z({},_,{hash:Yd(Y),path:x.path})),j=s.createHref(ne);return Z({fullPath:ne,hash:Y,query:r===ro?th(_.query):_.query||{}},x,{redirectedFrom:void 0,href:j})}function D(_){return typeof _=="string"?Jr(n,_,c.value.path):Z({},_)}function H(_,k){if(l!==_)return cn(8,{from:k,to:_})}function z(_){return ge(_)}function se(_){return z(Z(D(_),{replace:!0}))}function ae(_){const k=_.matched[_.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let x=typeof T=="function"?T(_):T;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=D(x):{path:x},x.params={}),Z({query:_.query,hash:_.hash,params:"path"in x?{}:_.params},x)}}function ge(_,k){const T=l=R(_),x=c.value,Y=_.state,ne=_.force,j=_.replace===!0,B=ae(T);if(B)return ge(Z(D(B),{state:Y,force:ne,replace:j}),k||T);const f=T;f.redirectedFrom=k;let d;return!ne&&dd(r,x,T)&&(d=cn(16,{to:f,from:x}),Wt(x,x,!0,!1)),(d?Promise.resolve(d):G(f,x)).catch(g=>Qe(g)?Qe(g,2)?g:Ie(g):te(g,f,x)).then(g=>{if(g){if(Qe(g,2))return ge(Z({replace:j},D(g.to),{state:Y,force:ne}),k||f)}else g=he(f,x,!0,j,Y);return ie(f,x,g),g})}function V(_,k){const T=H(_,k);return T?Promise.reject(T):Promise.resolve()}function G(_,k){let T;const[x,Y,ne]=fh(_,k);T=Yr(x.reverse(),"beforeRouteLeave",_,k);for(const B of x)B.leaveGuards.forEach(f=>{T.push(gt(f,_,k))});const j=V.bind(null,_,k);return T.push(j),Kt(T).then(()=>{T=[];for(const B of i.list())T.push(gt(B,_,k));return T.push(j),Kt(T)}).then(()=>{T=Yr(Y,"beforeRouteUpdate",_,k);for(const B of Y)B.updateGuards.forEach(f=>{T.push(gt(f,_,k))});return T.push(j),Kt(T)}).then(()=>{T=[];for(const B of _.matched)if(B.beforeEnter&&!k.matched.includes(B))if(Fe(B.beforeEnter))for(const f of B.beforeEnter)T.push(gt(f,_,k));else T.push(gt(B.beforeEnter,_,k));return T.push(j),Kt(T)}).then(()=>(_.matched.forEach(B=>B.enterCallbacks={}),T=Yr(ne,"beforeRouteEnter",_,k),T.push(j),Kt(T))).then(()=>{T=[];for(const B of o.list())T.push(gt(B,_,k));return T.push(j),Kt(T)}).catch(B=>Qe(B,8)?B:Promise.reject(B))}function ie(_,k,T){for(const x of a.list())x(_,k,T)}function he(_,k,T,x,Y){const ne=H(_,k);if(ne)return ne;const j=k===ft,B=Xt?history.state:{};T&&(x||j?s.replace(_.fullPath,Z({scroll:j&&B&&B.scroll},Y)):s.push(_.fullPath,Y)),c.value=_,Wt(_,k,T,j),Ie()}let pe;function Me(){pe||(pe=s.listen((_,k,T)=>{if(!hn.listening)return;const x=R(_),Y=ae(x);if(Y){ge(Z(Y,{replace:!0}),x).catch(In);return}l=x;const ne=c.value;Xt&&bd(Yi(ne.fullPath,T.delta),Dr()),G(x,ne).catch(j=>Qe(j,12)?j:Qe(j,2)?(ge(j.to,x).then(B=>{Qe(B,20)&&!T.delta&&T.type===xn.pop&&s.go(-1,!1)}).catch(In),Promise.reject()):(T.delta&&s.go(-T.delta,!1),te(j,x,ne))).then(j=>{j=j||he(x,ne,!1),j&&(T.delta&&!Qe(j,8)?s.go(-T.delta,!1):T.type===xn.pop&&Qe(j,20)&&s.go(-1,!1)),ie(x,ne,j)}).catch(In)}))}let lt=gn(),zt=gn(),le;function te(_,k,T){Ie(_);const x=zt.list();return x.length?x.forEach(Y=>Y(_,k,T)):console.error(_),Promise.reject(_)}function J(){return le&&c.value!==ft?Promise.resolve():new Promise((_,k)=>{lt.add([_,k])})}function Ie(_){return le||(le=!_,Me(),lt.list().forEach(([k,T])=>_?T(_):k()),lt.reset()),_}function Wt(_,k,T,x){const{scrollBehavior:Y}=t;if(!Xt||!Y)return Promise.resolve();const ne=!T&&wd(Yi(_.fullPath,0))||(x||!T)&&history.state&&history.state.scroll||null;return ha().then(()=>Y(_,k,ne)).then(j=>j&&yd(j)).catch(j=>te(j,_,k))}const Xe=_=>s.go(_);let $e;const Re=new Set,hn={currentRoute:c,listening:!0,addRoute:m,removeRoute:A,hasRoute:C,getRoutes:P,resolve:R,options:t,push:z,replace:se,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:zt.add,isReady:J,install(_){const k=this;_.component("RouterLink",ih),_.component("RouterView",lh),_.config.globalProperties.$router=k,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(c)}),Xt&&!$e&&c.value===ft&&($e=!0,z(s.location).catch(Y=>{}));const T={};for(const Y in ft)T[Y]=Oe(()=>c.value[Y]);_.provide(Lr,k),_.provide(rc,Un(T)),_.provide(Cs,c);const x=_.unmount;Re.add(_),_.unmount=function(){Re.delete(_),Re.size<1&&(l=ft,pe&&pe(),pe=null,c.value=ft,$e=!1,le=!1),x()}}};return hn}function Kt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>an(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>an(l,c))||s.push(c))}return[n,r,s]}function fv(){return nt(Lr)}const dh={name:"HelloWorld",props:{msg:String}},hh={class:"hello"},ph={class:"text-3xl font-bold underline"};function gh(t,e,n,r,s,i){return kr(),Pr("div",hh,[be("h1",ph,Il(n.msg),1)])}const mh=Nr(dh,[["render",gh]]),_h="/assets/img1.0ad4b4ea.jpg",vh="/assets/img10.308f6b3d.jpg",yh="/assets/img6.d6981203.png",bh={name:"Home",components:{HelloWorld:mh}},wh={class:"home"},Ih=rf('<div class="px-40 mx-10 mt-10 py-10 bg-gradient-to-r from-cyan-500 to-amber-100 rounded"><h2 class="text-4xl text-white font-bold text-center">Our Vision &amp; Mission</h2><p class="text-center text-lg my-8"> By popularizing pet adoption, PetRescue has contributed to real social change for over 20 years. Numerous animals in need of rescue and rehabilitation in Liverpool have benefited from our efforts, as well as the Liverpool rescue community. We all still have a ton of hard, dirty work to do until every pet is safe, respected, and cherished. Learn more about our goal to save 100,000 adoptable, healthy pets annually.</p></div><div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"><div class="rounded overflow-hidden shadow-lg"><img class="w-full" src="'+_h+'" alt="Mountain"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">River</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span></div></div><div class="rounded overflow-hidden shadow-lg"><img class="w-full" src="'+vh+'" alt="River"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">Pooh and Tiger</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span></div></div><div class="rounded overflow-hidden shadow-lg"><img class="w-full" src="'+yh+'" alt="Forest"><div class="px-6 py-4"><div class="font-bold text-xl mb-2">Mickey</div><p class="text-gray-700 text-base"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil. </p></div><div class="px-6 pt-4 pb-2"><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span></div></div></div>',2),Eh=[Ih];function Th(t,e,n,r,s,i){return kr(),Pr("div",wh,Eh)}const Ah=Nr(bh,[["render",Th]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Rh=function(t){const e=sc(t);return ic.encodeByteArray(e,!0)},oc=function(t){return Rh(t).replace(/\./g,"")},Ch=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function ac(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ph(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xh(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cc(){return typeof indexedDB=="object"}function lc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Mh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="FirebaseError";class Ye extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nh,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Dh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ye(s,a,r)}}function Dh(t,e){return t.replace(Lh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function Uh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lo(i)&&lo(o)){if(!Mn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fh(t,e){const n=new $h(t,e);return n.subscribe.bind(n)}class $h{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xr),s.error===void 0&&(s.error=Xr),s.complete===void 0&&(s.complete=Xr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=1e3,jh=2,Vh=4*60*60*1e3,zh=.5;function uo(t,e=Hh,n=jh){const r=e*Math.pow(n,t),s=Math.round(zh*r*(Math.random()-.5)*2);return Math.min(Vh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){return t&&t._delegate?t._delegate:t}class Je{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Oh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kh(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qh(t){return t===Ct?void 0:t}function Kh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Jh={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Yh=re.INFO,Xh={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Qh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ei{constructor(e){this.name=e,this._logLevel=Yh,this._logHandler=Qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Zh=(t,e)=>e.some(n=>t instanceof n);let fo,ho;function ep(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tp(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uc=new WeakMap,Os=new WeakMap,fc=new WeakMap,Qr=new WeakMap,ti=new WeakMap;function np(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uc.set(n,t)}).catch(()=>{}),ti.set(e,t),e}function rp(t){if(Os.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Os.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Os.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sp(t){ks=t(ks)}function ip(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zr(this),e,...n);return fc.set(r,e.sort?e.sort():[e]),It(r)}:tp().includes(t)?function(...e){return t.apply(Zr(this),e),It(uc.get(this))}:function(...e){return It(t.apply(Zr(this),e))}}function op(t){return typeof t=="function"?ip(t):(t instanceof IDBTransaction&&rp(t),Zh(t,ep())?new Proxy(t,ks):t)}function It(t){if(t instanceof IDBRequest)return np(t);if(Qr.has(t))return Qr.get(t);const e=op(t);return e!==t&&(Qr.set(t,e),ti.set(e,t)),e}const Zr=t=>ti.get(t);function dc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return r&&o.addEventListener("upgradeneeded",c=>{r(It(o.result),c.oldVersion,c.newVersion,It(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ap=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],es=new Map;function po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(es.get(e))return es.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ap.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return es.set(e,i),i}sp(t=>({...t,get:(e,n,r)=>po(e,n)||t.get(e,n,r),has:(e,n)=>!!po(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(up(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function up(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ps="@firebase/app",go="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new ei("@firebase/app"),fp="@firebase/app-compat",dp="@firebase/analytics-compat",hp="@firebase/analytics",pp="@firebase/app-check-compat",gp="@firebase/app-check",mp="@firebase/auth",_p="@firebase/auth-compat",vp="@firebase/database",yp="@firebase/database-compat",bp="@firebase/functions",wp="@firebase/functions-compat",Ip="@firebase/installations",Ep="@firebase/installations-compat",Tp="@firebase/messaging",Ap="@firebase/messaging-compat",Sp="@firebase/performance",Rp="@firebase/performance-compat",Cp="@firebase/remote-config",Op="@firebase/remote-config-compat",kp="@firebase/storage",Pp="@firebase/storage-compat",xp="@firebase/firestore",Mp="@firebase/firestore-compat",Np="firebase",Dp="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",Lp={[Ps]:"fire-core",[fp]:"fire-core-compat",[hp]:"fire-analytics",[dp]:"fire-analytics-compat",[gp]:"fire-app-check",[pp]:"fire-app-check-compat",[mp]:"fire-auth",[_p]:"fire-auth-compat",[vp]:"fire-rtdb",[yp]:"fire-rtdb-compat",[bp]:"fire-fn",[wp]:"fire-fn-compat",[Ip]:"fire-iid",[Ep]:"fire-iid-compat",[Tp]:"fire-fcm",[Ap]:"fire-fcm-compat",[Sp]:"fire-perf",[Rp]:"fire-perf-compat",[Cp]:"fire-rc",[Op]:"fire-rc-compat",[kp]:"fire-gcs",[Pp]:"fire-gcs-compat",[xp]:"fire-fst",[Mp]:"fire-fst-compat","fire-js":"fire-js",[Np]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,xs=new Map;function Up(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function it(t){const e=t.name;if(xs.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;xs.set(e,t);for(const n of dr.values())Up(n,t);return!0}function dn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new jt("app","Firebase",Fp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=Dp;function Bp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:hc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ut.create("bad-app-name",{appName:String(r)});const s=dr.get(r);if(s){if(Mn(t,s.options)&&Mn(n,s.config))return s;throw Ut.create("duplicate-app",{appName:r})}const i=new Gh(r);for(const a of xs.values())i.addComponent(a);const o=new $p(t,n,i);return dr.set(r,o),o}function pc(t=hc){const e=dr.get(t);if(!e)throw Ut.create("no-app",{appName:t});return e}function We(t,e,n){var r;let s=(r=Lp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(a.join(" "));return}it(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firebase-heartbeat-database",jp=1,Nn="firebase-heartbeat-store";let ts=null;function gc(){return ts||(ts=dc(Hp,jp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),ts}async function Vp(t){var e;try{return(await gc()).transaction(Nn).objectStore(Nn).get(mc(t))}catch(n){if(n instanceof Ye)Lt.warn(n.message);else{const r=Ut.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Lt.warn(r.message)}}}async function mo(t,e){var n;try{const s=(await gc()).transaction(Nn,"readwrite");return await s.objectStore(Nn).put(e,mc(t)),s.done}catch(r){if(r instanceof Ye)Lt.warn(r.message);else{const s=Ut.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Lt.warn(s.message)}}}function mc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=1024,Wp=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_o();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Wp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_o(),{heartbeatsToSend:n,unsentEntries:r}=Kp(this._heartbeatsCache.heartbeats),s=oc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _o(){return new Date().toISOString().substring(0,10)}function Kp(t,e=zp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cc()?lc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vo(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){it(new Je("platform-logger",e=>new lp(e),"PRIVATE")),it(new Je("heartbeat",e=>new qp(e),"PRIVATE")),We(Ps,go,t),We(Ps,go,"esm2017"),We("fire-js","")}Jp("");function ni(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yp=_c,vc=new jt("auth","Firebase",_c());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new ei("@firebase/auth");function nr(t,...e){yo.logLevel<=re.ERROR&&yo.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw ri(t,...e)}function qe(t,...e){return ri(t,...e)}function Xp(t,e,n){const r=Object.assign(Object.assign({},Yp()),{[e]:n});return new jt("auth","Firebase",r).create(e,{appName:t.name})}function ri(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vc.create(t,...e)}function F(t,e,...n){if(!t)throw ri(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function at(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;function tt(t){at(t instanceof Function,"Expected a class definition");let e=bo.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t,e){const n=dn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mn(i,e!=null?e:{}))return s;ot(s,"already-initialized")}return n.initialize({options:e})}function Zp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eg(){return wo()==="http:"||wo()==="https:"}function wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eg()||ac()||"connection"in navigator)?navigator.onLine:!0}function ng(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=kh()||Ph()}get(){return tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new $n(3e4,6e4);function bc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,s={}){return wc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yc.fetch()(Ec(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function wc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rg),e);try{const s=new ig(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gn(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xp(t,u,l);ot(t,u)}}catch(s){if(s instanceof Ye)throw s;ot(t,"network-request-failed")}}async function Ic(t,e,n,r,s={}){const i=await Fr(t,e,n,r,s);return"mfaPendingCredential"in i&&ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ec(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?si(t.config,s):`${t.config.apiScheme}://${s}`}class ig{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),sg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function ag(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cg(t,e=!1){const n=Vt(t),r=await n.getIdToken(e),s=ii(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tn(ns(s.auth_time)),issuedAtTime:Tn(ns(s.iat)),expirationTime:Tn(ns(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ns(t){return Number(t)*1e3}function ii(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ch(r);return i?JSON.parse(i):(nr("Failed to decode base64 JWT payload"),null)}catch(i){return nr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function lg(t){const e=ii(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ye&&ug(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ug({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Dn(t,ag(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pg(i.providerUserInfo):[],a=hg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dg(t){const e=Vt(t);await hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pg(t){return t.map(e=>{var{providerId:n}=e,r=ni(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,e){const n=await wc(t,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ec(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ln;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ni(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cg(this,e)}reload(){return dg(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,og(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:z,isAnonymous:se,providerData:ae,stsTokenManager:ge}=n;F(H&&ge,e,"internal-error");const V=Ln.fromJSON(this.name,ge);F(typeof H=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),F(typeof z=="boolean",e,"internal-error"),F(typeof se=="boolean",e,"internal-error"),dt(m,e.name),dt(A,e.name),dt(P,e.name),dt(C,e.name),dt(R,e.name),dt(D,e.name);const G=new Dt({uid:H,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:se,photoURL:A,phoneNumber:m,tenantId:P,stsTokenManager:V,createdAt:R,lastLoginAt:D});return ae&&Array.isArray(ae)&&(G.providerData=ae.map(ie=>Object.assign({},ie))),C&&(G._redirectEventId=C),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ln;s.updateFromServerResponse(n);const i=new Dt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ac.type="NONE";const Io=Ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(tt(Io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(Io);const o=rr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Dt._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kc(e))return"Blackberry";if(Pc(e))return"Webos";if(oi(e))return"Safari";if((e.includes("chrome/")||Rc(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sc(t=ve()){return/firefox\//i.test(t)}function oi(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rc(t=ve()){return/crios\//i.test(t)}function Cc(t=ve()){return/iemobile/i.test(t)}function Oc(t=ve()){return/android/i.test(t)}function kc(t=ve()){return/blackberry/i.test(t)}function Pc(t=ve()){return/webos/i.test(t)}function $r(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mg(t=ve()){var e;return $r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _g(){return xh()&&document.documentMode===10}function xc(t=ve()){return $r(t)||Oc(t)||Pc(t)||kc(t)||/windows phone/i.test(t)||Cc(t)}function vg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e=[]){let n;switch(t){case"Browser":n=Eo(ve());break;case"Worker":n=`${Eo(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await hr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ng()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ai(t){return Vt(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fh(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return Ic(t,"POST","/v1/accounts:signInWithIdp",bc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="http://localhost";class Ft extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ni(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:wg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Bn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Bn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Bn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e){return Ic(t,"POST","/v1/accounts:signUp",bc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),o=Ao(r);return new $t({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ao(r);return new $t({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Ye{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pr(e,n,r,s)}}function Lc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pr._fromErrorAndOperation(t,i,e,r):i})}async function Eg(t,e,n=!1){const r=await Dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $t._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Dn(t,Lc(s,i,e,t),n);F(o.idToken,s,"internal-error");const a=ii(o.idToken);F(a,s,"internal-error");const{sub:c}=a;return F(t.uid===c,s,"user-mismatch"),$t._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ot(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t,e,n=!1){const r="signIn",s=await Lc(t,r,e),i=await $t._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dv(t,e,n){const r=ai(t),s=await Ig(r,{returnSecureToken:!0,email:e,password:n}),i=await $t._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Sg(t,e,n,r){return Vt(t).onAuthStateChanged(e,n,r)}const gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gr,"1"),this.storage.removeItem(gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){const t=ve();return oi(t)||$r(t)}const Cg=1e3,Og=10;class Fc extends Uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rg()&&vg(),this.fallbackToPolling=xc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_g()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Og):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fc.type="LOCAL";const kg=Fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$c.type="SESSION";const Bc=$c;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Br(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Pg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ci("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Mg(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Ng(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lg(){return Hc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="firebaseLocalStorageDb",Ug=1,mr="firebaseLocalStorage",Vc="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hr(t,e){return t.transaction([mr],e?"readwrite":"readonly").objectStore(mr)}function Fg(){const t=indexedDB.deleteDatabase(jc);return new Hn(t).toPromise()}function Ns(){const t=indexedDB.open(jc,Ug);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mr,{keyPath:Vc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mr)?e(r):(r.close(),await Fg(),e(await Ns()))})})}async function So(t,e,n){const r=Hr(t,!0).put({[Vc]:e,value:n});return new Hn(r).toPromise()}async function $g(t,e){const n=Hr(t,!1).get(e),r=await new Hn(n).toPromise();return r===void 0?null:r.value}function Ro(t,e){const n=Hr(t,!0).delete(e);return new Hn(n).toPromise()}const Bg=800,Hg=3;class zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(Lg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ng(),!this.activeServiceWorker)return;this.sender=new xg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await So(e,gr,"1"),await Ro(e,gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>So(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$g(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hr(s,!1).getAll();return new Hn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zc.type="LOCAL";const jg=zc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Vg().appendChild(r)})}function Wg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){return e?tt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kg(t){return Ag(t.auth,new li(t),t.bypassAuthState)}function Gg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Tg(n,new li(t),t.bypassAuthState)}async function Jg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Eg(n,new li(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return Gg;default:ot(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new $n(2e3,1e4);class Qt extends Wc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Yg.get())};e()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="pendingRedirect",sr=new Map;class Qg extends Wc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sr.get(this.auth._key());if(!e){try{const r=await Zg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sr.set(this.auth._key(),e)}return this.bypassAuthState||sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zg(t,e){const n=nm(e),r=tm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function em(t,e){sr.set(t._key(),e)}function tm(t){return tt(t._redirectPersistence)}function nm(t){return rr(Xg,t.config.apiKey,t.name)}async function rm(t,e,n=!1){const r=ai(t),s=qg(r,e),o=await new Qg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=10*60*1e3;class im{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!om(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Co(e))}saveEventToCache(e){this.cachedEventUids.add(Co(e)),this.lastProcessedEventTime=Date.now()}}function Co(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function om(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lm=/^https?/;async function um(t){if(t.config.emulator)return;const{authorizedDomains:e}=await am(t);for(const n of e)try{if(fm(n))return}catch{}ot(t,"unauthorized-domain")}function fm(t){const e=Ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lm.test(n))return!1;if(cm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new $n(3e4,6e4);function Oo(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hm(t){return new Promise((e,n)=>{var r,s,i;function o(){Oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oo(),n(qe(t,"network-request-failed"))},timeout:dm.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const a=Wg("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},zg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ir=null,e})}let ir=null;function pm(t){return ir=ir||hm(t),ir}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new $n(5e3,15e3),mm="__/auth/iframe",_m="emulator/auth/iframe",vm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ym=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bm(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?si(e,_m):`https://${t.config.authDomain}/${mm}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},s=ym.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fn(r).slice(1)}`}async function wm(t){const e=await pm(t),n=Ke().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:bm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Ke().setTimeout(()=>{i(o)},gm.get());function c(){Ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Em=500,Tm=600,Am="_blank",Sm="http://localhost";class ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rm(t,e,n,r=Em,s=Tm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Im),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=Rc(l)?Am:n),Sc(l)&&(e=e||Sm,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,A])=>`${p}${m}=${A},`,"");if(mg(l)&&a!=="_self")return Cm(e||"",a),new ko(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new ko(h)}function Cm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="__/auth/handler",km="emulator/auth/handler";function Po(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:s};if(e instanceof Dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Bn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Pm(t)}?${Fn(a).slice(1)}`}function Pm({config:t}){return t.emulator?si(t,km):`https://${t.authDomain}/${Om}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="webStorageSupport";class xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bc,this._completeRedirectFn=rm,this._overrideRedirectResult=em}async _openPopup(e,n,r,s){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Po(e,n,r,Ms(),s);return Rm(e,o,ci())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Mg(Po(e,n,r,Ms(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wm(e),r=new im(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rs,{type:rs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rs];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=um(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xc()||oi()||$r()}}const Mm=xm;var xo="@firebase/auth",Mo="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lm(t){it(new Je("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mc(t)},u=new bg(a,c,l);return Zp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),it(new Je("auth-internal",e=>{const n=ai(e.getProvider("auth").getImmediate());return(r=>new Nm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(xo,Mo,Dm(t)),We(xo,Mo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t=pc()){const e=dn(t,"auth");return e.isInitialized()?e.getImmediate():Qp(t,{popupRedirectResolver:Mm,persistence:[jg,kg,Bc]})}Lm("Browser");const Fm=()=>new Promise((t,e)=>{const n=Sg(Um(),r=>{n(),t(r)},e)}),$m=[{path:"/",name:"Home",component:Ah},{path:"/about",name:"About",component:()=>Kn(()=>import("./AboutView.a33aa0b8.js"),[])},{path:"/pets",name:"Pets",component:()=>Kn(()=>import("./PetsView.2ac9e6de.js"),[])},{path:"/news",name:"News",component:()=>Kn(()=>import("./NewsView.10f222ea.js"),[]),meta:{requiresAuth:!0}},{path:"/register",name:"Register",component:()=>Kn(()=>import("./RegisterView.24db8573.js"),[])}],Kc=uh({history:Ad(),routes:$m});Kc.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await Fm()?n():(alert("you don't have access"),n("/")):n()});var Bm="firebase",Hm="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(Bm,Hm,"app");const Gc="@firebase/installations",ui="0.5.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=1e4,Yc=`w:${ui}`,Xc="FIS_v2",jm="https://firebaseinstallations.googleapis.com/v1",Vm=60*60*1e3,zm="installations",Wm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bt=new jt(zm,Wm,qm);function Qc(t){return t instanceof Ye&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc({projectId:t}){return`${jm}/projects/${t}/installations`}function el(t){return{token:t.token,requestStatus:2,expiresIn:Gm(t.expiresIn),creationTime:Date.now()}}async function tl(t,e){const r=(await e.json()).error;return Bt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Km(t,{refreshToken:e}){const n=nl(t);return n.append("Authorization",Jm(e)),n}async function rl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Gm(t){return Number(t.replace("s","000"))}function Jm(t){return`${Xc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zc(t),s=nl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Xc,appId:t.appId,sdkVersion:Yc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await rl(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:el(l.authToken)}}else throw await tl("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=/^[cdef][\w-]{21}$/,Ds="";function Zm(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=e_(t);return Qm.test(n)?n:Ds}catch{return Ds}}function e_(t){return Xm(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map;function ol(t,e){const n=jr(t);al(n,e),t_(n,e)}function al(t,e){const n=il.get(t);if(!!n)for(const r of n)r(e)}function t_(t,e){const n=n_();n&&n.postMessage({key:t,fid:e}),r_()}let xt=null;function n_(){return!xt&&"BroadcastChannel"in self&&(xt=new BroadcastChannel("[Firebase] FID Change"),xt.onmessage=t=>{al(t.data.key,t.data.fid)}),xt}function r_(){il.size===0&&xt&&(xt.close(),xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebase-installations-database",i_=1,Ht="firebase-installations-store";let ss=null;function fi(){return ss||(ss=dc(s_,i_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ht)}}})),ss}async function _r(t,e){const n=jr(t),s=(await fi()).transaction(Ht,"readwrite"),i=s.objectStore(Ht),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ol(t,e.fid),e}async function cl(t){const e=jr(t),r=(await fi()).transaction(Ht,"readwrite");await r.objectStore(Ht).delete(e),await r.done}async function Vr(t,e){const n=jr(t),s=(await fi()).transaction(Ht,"readwrite"),i=s.objectStore(Ht),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ol(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t){let e;const n=await Vr(t.appConfig,r=>{const s=o_(r),i=a_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ds?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function o_(t){const e=t||{fid:Zm(),registrationStatus:0};return ll(e)}function a_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:l_(t)}:{installationEntry:e}}async function c_(t,e){try{const n=await Ym(t,e);return _r(t.appConfig,n)}catch(n){throw Qc(n)&&n.customData.serverCode===409?await cl(t.appConfig):await _r(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function l_(t){let e=await No(t.appConfig);for(;e.registrationStatus===1;)await sl(100),e=await No(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await di(t);return r||n}return e}function No(t){return Vr(t,e=>{if(!e)throw Bt.create("installation-not-found");return ll(e)})}function ll(t){return u_(t)?{fid:t.fid,registrationStatus:0}:t}function u_(t){return t.registrationStatus===1&&t.registrationTime+Jc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_({appConfig:t,heartbeatServiceProvider:e},n){const r=d_(t,n),s=Km(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Yc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await rl(()=>fetch(r,a));if(c.ok){const l=await c.json();return el(l)}else throw await tl("Generate Auth Token",c)}function d_(t,{fid:e}){return`${Zc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e=!1){let n;const r=await Vr(t.appConfig,i=>{if(!ul(i))throw Bt.create("not-registered");const o=i.authToken;if(!e&&g_(o))return i;if(o.requestStatus===1)return n=h_(t,e),i;{if(!navigator.onLine)throw Bt.create("app-offline");const a=__(i);return n=p_(t,a),a}});return n?await n:r.authToken}async function h_(t,e){let n=await Do(t.appConfig);for(;n.authToken.requestStatus===1;)await sl(100),n=await Do(t.appConfig);const r=n.authToken;return r.requestStatus===0?hi(t,e):r}function Do(t){return Vr(t,e=>{if(!ul(e))throw Bt.create("not-registered");const n=e.authToken;return v_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function p_(t,e){try{const n=await f_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await _r(t.appConfig,r),n}catch(n){if(Qc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cl(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _r(t.appConfig,r)}throw n}}function ul(t){return t!==void 0&&t.registrationStatus===2}function g_(t){return t.requestStatus===2&&!m_(t)}function m_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Vm}function __(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function v_(t){return t.requestStatus===1&&t.requestTime+Jc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_(t){const e=t,{installationEntry:n,registrationPromise:r}=await di(e);return r?r.catch(console.error):hi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e=!1){const n=t;return await w_(n),(await hi(n,e)).token}async function w_(t){const{registrationPromise:e}=await di(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){if(!t||!t.options)throw is("App Configuration");if(!t.name)throw is("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw is(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function is(t){return Bt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="installations",E_="installations-internal",T_=t=>{const e=t.getProvider("app").getImmediate(),n=I_(e),r=dn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},A_=t=>{const e=t.getProvider("app").getImmediate(),n=dn(e,fl).getImmediate();return{getId:()=>y_(n),getToken:s=>b_(n,s)}};function S_(){it(new Je(fl,T_,"PUBLIC")),it(new Je(E_,A_,"PRIVATE"))}S_();We(Gc,ui);We(Gc,ui,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="analytics",R_="firebase_id",C_="origin",O_=60*1e3,k_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new ei("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function P_(t,e){const n=document.createElement("script");n.src=`${dl}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function x_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function M_(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await hl(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ae.error(a)}t("config",s,i)}async function N_(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await hl(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ae.error(i)}}function D_(t,e,n,r){async function s(i,o,a){try{i==="event"?await N_(t,e,n,o,a):i==="config"?await M_(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ae.error(c)}}return s}function L_(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=D_(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function U_(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(dl))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new jt("analytics","Analytics",F_);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=30,B_=1e3;class H_{constructor(e={},n=B_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pl=new H_;function j_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function V_(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:j_(r)},i=k_.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function z_(t,e=pl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw xe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new K_;return setTimeout(async()=>{a.abort()},n!==void 0?n:O_),gl({appId:r,apiKey:s,measurementId:i},o,a,e)}async function gl(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=pl){var i,o;const{appId:a,measurementId:c}=t;try{await W_(r,e)}catch(l){if(c)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:a,measurementId:c};throw l}try{const l=await V_(t);return s.deleteThrottleMetadata(a),l}catch(l){const u=l;if(!q_(u)){if(s.deleteThrottleMetadata(a),c)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw l}const h=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?uo(n,s.intervalMillis,$_):uo(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(a,p),Ae.debug(`Calling attemptFetch again in ${h} millis`),gl(t,p,r,s)}}function W_(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function q_(t){if(!(t instanceof Ye)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class K_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function G_(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(){var t;if(cc())try{await lc()}catch(e){return Ae.warn(xe.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return Ae.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Y_(t,e,n,r,s,i,o){var a;const c=z_(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ae.error(m)),e.push(c);const l=J_().then(m=>{if(m)return r.getId()}),[u,h]=await Promise.all([c,l]);U_()||P_(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[C_]="firebase",p.update=!0,h!=null&&(p[R_]=h),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.app=e}_delete(){return delete An[this.app.options.appId],Promise.resolve()}}let An={},Lo=[];const Uo={};let os="dataLayer",Q_="gtag",Fo,ml,$o=!1;function Z_(){const t=[];if(ac()&&t.push("This is a browser extension environment."),Mh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:e});Ae.warn(n.message)}}function ev(t,e,n){Z_();const r=t.options.appId;if(!r)throw xe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(An[r]!=null)throw xe.create("already-exists",{id:r});if(!$o){x_(os);const{wrappedGtag:i,gtagCore:o}=L_(An,Lo,Uo,os,Q_);ml=i,Fo=o,$o=!0}return An[r]=Y_(t,Lo,Uo,e,Fo,os,n),new X_(t)}function tv(t=pc()){t=Vt(t);const e=dn(t,vr);return e.isInitialized()?e.getImmediate():nv(t)}function nv(t,e={}){const n=dn(t,vr);if(n.isInitialized()){const s=n.getImmediate();if(Mn(e,n.getOptions()))return s;throw xe.create("already-initialized")}return n.initialize({options:e})}function rv(t,e,n,r){t=Vt(t),G_(ml,An[t.app.options.appId],e,n,r).catch(s=>Ae.error(s))}const Bo="@firebase/analytics",Ho="0.8.0";function sv(){it(new Je(vr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ev(r,s,n)},"PUBLIC")),it(new Je("analytics-internal",t,"PRIVATE")),We(Bo,Ho),We(Bo,Ho,"esm2017");function t(e){try{const n=e.getProvider(vr).getImmediate();return{logEvent:(r,s,i)=>rv(n,r,s,i)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}sv();const iv={apiKey:"AIzaSyCeITAdiBLM1avkhiE57bJDh01bsWB_9hQ",authDomain:"web-dev---1.firebaseapp.com",projectId:"web-dev---1",storageBucket:"web-dev---1.appspot.com",messagingSenderId:"842189052831",appId:"1:842189052831:web:4ec17be4922d528009fbaa",measurementId:"G-JYB148N28C"},ov=Bp(iv);tv(ov);$f(id).use(Kc).mount("#app");export{Ve as F,Nr as _,be as a,ja as b,Pr as c,ce as d,cv as e,lv as f,dv as g,Um as h,kr as o,_s as r,Il as t,fv as u,uv as v,av as w};
