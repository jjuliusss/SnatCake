(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function GE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ly={exports:{}},_u={},Oy={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),QE=Symbol.for("react.portal"),YE=Symbol.for("react.fragment"),XE=Symbol.for("react.strict_mode"),JE=Symbol.for("react.profiler"),ZE=Symbol.for("react.provider"),eT=Symbol.for("react.context"),tT=Symbol.for("react.forward_ref"),nT=Symbol.for("react.suspense"),rT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),Yp=Symbol.iterator;function sT(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jy=Object.assign,Fy={};function vs(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uy(){}Uy.prototype=vs.prototype;function kd(t,e,n){this.props=t,this.context=e,this.refs=Fy,this.updater=n||My}var xd=kd.prototype=new Uy;xd.constructor=kd;jy(xd,vs.prototype);xd.isPureReactComponent=!0;var Xp=Array.isArray,zy=Object.prototype.hasOwnProperty,Ad={current:null},By={key:!0,ref:!0,__self:!0,__source:!0};function $y(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)zy.call(e,r)&&!By.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xo,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function oT(t,e){return{$$typeof:Xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xo}function aT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jp=/\/+/g;function wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aT(""+t.key):e.toString(36)}function sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xo:case QE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wc(o,0):r,Xp(i)?(n="",t!=null&&(n=t.replace(Jp,"$&/")+"/"),sl(i,e,n,"",function(h){return h})):i!=null&&(Cd(i)&&(i=oT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+wc(s,l);o+=sl(s,e,n,u,i)}else if(u=sT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+wc(s,l++),o+=sl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},ol={transition:null},uT={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Ad};function Hy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=vs;ie.Fragment=YE;ie.Profiler=JE;ie.PureComponent=kd;ie.StrictMode=XE;ie.Suspense=nT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;ie.act=Hy;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)zy.call(e,u)&&!By.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Xo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:eT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZE,_context:t},t.Consumer=t};ie.createElement=$y;ie.createFactory=function(t){var e=$y.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:tT,render:t}};ie.isValidElement=Cd;ie.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:lT}};ie.memo=function(t,e){return{$$typeof:rT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};ie.unstable_act=Hy;ie.useCallback=function(t,e){return Et.current.useCallback(t,e)};ie.useContext=function(t){return Et.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Et.current.useEffect(t,e)};ie.useId=function(){return Et.current.useId()};ie.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Et.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};ie.useRef=function(t){return Et.current.useRef(t)};ie.useState=function(t){return Et.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Et.current.useTransition()};ie.version="18.3.1";Oy.exports=ie;var $=Oy.exports;const cT=GE($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT=$,dT=Symbol.for("react.element"),fT=Symbol.for("react.fragment"),pT=Object.prototype.hasOwnProperty,mT=hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gT={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pT.call(e,r)&&!gT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dT,type:t,key:s,ref:o,props:i,_owner:mT.current}}_u.Fragment=fT;_u.jsx=Wy;_u.jsxs=Wy;Ly.exports=_u;var _=Ly.exports,ah={},qy={exports:{}},Bt={},Ky={exports:{}},Gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var X=U.length;U.push(q);e:for(;0<X;){var de=X-1>>>1,ye=U[de];if(0<i(ye,q))U[de]=q,U[X]=ye,X=de;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],X=U.pop();if(X!==q){U[0]=X;e:for(var de=0,ye=U.length,Xt=ye>>>1;de<Xt;){var Ue=2*(de+1)-1,St=U[Ue],Vt=Ue+1,kt=U[Vt];if(0>i(St,X))Vt<ye&&0>i(kt,St)?(U[de]=kt,U[Vt]=X,de=Vt):(U[de]=St,U[Ue]=X,de=Ue);else if(Vt<ye&&0>i(kt,X))U[de]=kt,U[Vt]=X,de=Vt;else break e}}return q}function i(U,q){var X=U.sortIndex-q.sortIndex;return X!==0?X:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,p=3,A=!1,C=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=U)r(h),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(h)}}function V(U){if(N=!1,x(U),!C)if(n(u)!==null)C=!0,Re(j);else{var q=n(h);q!==null&&ge(V,q.startTime-U)}}function j(U,q){C=!1,N&&(N=!1,S(y),y=-1),A=!0;var X=p;try{for(x(q),m=n(u);m!==null&&(!(m.expirationTime>q)||U&&!k());){var de=m.callback;if(typeof de=="function"){m.callback=null,p=m.priorityLevel;var ye=de(m.expirationTime<=q);q=t.unstable_now(),typeof ye=="function"?m.callback=ye:m===n(u)&&r(u),x(q)}else r(u);m=n(u)}if(m!==null)var Xt=!0;else{var Ue=n(h);Ue!==null&&ge(V,Ue.startTime-q),Xt=!1}return Xt}finally{m=null,p=X,A=!1}}var z=!1,v=null,y=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function R(){if(v!==null){var U=t.unstable_now();I=U;var q=!0;try{q=v(!0,U)}finally{q?T():(z=!1,v=null)}}else z=!1}var T;if(typeof w=="function")T=function(){w(R)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,It=Oe.port2;Oe.port1.onmessage=R,T=function(){It.postMessage(null)}}else T=function(){D(R,0)};function Re(U){v=U,z||(z=!0,T())}function ge(U,q){y=D(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){C||A||(C=!0,Re(j))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var X=p;p=q;try{return U()}finally{p=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=p;p=U;try{return q()}finally{p=X}},t.unstable_scheduleCallback=function(U,q,X){var de=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,U){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=X+ye,U={id:f++,callback:q,priorityLevel:U,startTime:X,expirationTime:ye,sortIndex:-1},X>de?(U.sortIndex=X,e(h,U),n(u)===null&&U===n(h)&&(N?(S(y),y=-1):N=!0,ge(V,X-de))):(U.sortIndex=ye,e(u,U),C||A||(C=!0,Re(j))),U},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(U){var q=p;return function(){var X=p;p=q;try{return U.apply(this,arguments)}finally{p=X}}}})(Gy);Ky.exports=Gy;var yT=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T=$,zt=yT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qy=new Set,ko={};function mi(t,e){is(t,e),is(t+"Capture",e)}function is(t,e){for(ko[t]=e,t=0;t<e.length;t++)Qy.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,vT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zp={},em={};function wT(t){return lh.call(em,t)?!0:lh.call(Zp,t)?!1:vT.test(t)?em[t]=!0:(Zp[t]=!0,!1)}function ET(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TT(t,e,n,r){if(e===null||typeof e>"u"||ET(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rd=/[\-:]([a-z])/g;function Pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rd,Pd);ot[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rd,Pd);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rd,Pd);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TT(e,n,i,r)&&(n=null),r||i===null?wT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=_T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),uh=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Jy=Symbol.for("react.offscreen"),tm=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Ec;function to(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var Tc=!1;function Ic(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function IT(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function dh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case Di:return"Portal";case uh:return"Profiler";case bd:return"StrictMode";case ch:return"Suspense";case hh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case Dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:dh(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return dh(t(e))}catch{}}return null}function ST(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kT(t){var e=Zy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=kT(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fh(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function ph(t,e){t_(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&mh(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mh(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function im(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function n_(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,i_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xT=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){xT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AT=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(AT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eh=null,Ki=null,Gi=null;function om(t){if(t=ea(t)){if(typeof Eh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Iu(e),Eh(t.stateNode,t.type,e))}}function a_(t){Ki?Gi?Gi.push(t):Gi=[t]:Ki=t}function l_(){if(Ki){var t=Ki,e=Gi;if(Gi=Ki=null,om(t),e)for(t=0;t<e.length;t++)om(e[t])}}function u_(t,e){return t(e)}function c_(){}var Sc=!1;function h_(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return u_(t,e,n)}finally{Sc=!1,(Ki!==null||Gi!==null)&&(c_(),l_())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Th=!1;if(On)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){Th=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{Th=!1}function CT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var co=!1,Cl=null,Rl=!1,Ih=null,RT={onError:function(t){co=!0,Cl=t}};function PT(t,e,n,r,i,s,o,l,u){co=!1,Cl=null,CT.apply(RT,arguments)}function NT(t,e,n,r,i,s,o,l,u){if(PT.apply(this,arguments),co){if(co){var h=Cl;co=!1,Cl=null}else throw Error(F(198));Rl||(Rl=!0,Ih=h)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function am(t){if(gi(t)!==t)throw Error(F(188))}function bT(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return am(i),t;if(s===r)return am(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function f_(t){return t=bT(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=zt.unstable_scheduleCallback,lm=zt.unstable_cancelCallback,DT=zt.unstable_shouldYield,VT=zt.unstable_requestPaint,je=zt.unstable_now,LT=zt.unstable_getCurrentPriorityLevel,Od=zt.unstable_ImmediatePriority,g_=zt.unstable_UserBlockingPriority,Pl=zt.unstable_NormalPriority,OT=zt.unstable_LowPriority,y_=zt.unstable_IdlePriority,vu=null,_n=null;function MT(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:UT,jT=Math.log,FT=Math.LN2;function UT(t){return t>>>=0,t===0?32:31-(jT(t)/FT|0)|0}var Va=64,La=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ro(l):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function zT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=zT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Sh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function $T(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,jd,E_,T_,I_,kh=!1,Oa=[],dr=null,fr=null,pr=null,Co=new Map,Ro=new Map,rr=[],HT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Gs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WT(t,e,n,r,i){switch(e){case"focusin":return dr=Gs(dr,t,e,n,r,i),!0;case"dragenter":return fr=Gs(fr,t,e,n,r,i),!0;case"mouseover":return pr=Gs(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Co.set(s,Gs(Co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Gs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function S_(t){var e=Yr(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,I_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wh=r,n.target.dispatchEvent(r),wh=null}else return e=ea(n),e!==null&&jd(e),t.blockedOn=n,!1;e.shift()}return!0}function cm(t,e,n){al(t)&&n.delete(e)}function qT(){kh=!1,dr!==null&&al(dr)&&(dr=null),fr!==null&&al(fr)&&(fr=null),pr!==null&&al(pr)&&(pr=null),Co.forEach(cm),Ro.forEach(cm)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,kh||(kh=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,qT)))}function Po(t){function e(i){return Qs(i,t)}if(0<Oa.length){Qs(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Qs(dr,t),fr!==null&&Qs(fr,t),pr!==null&&Qs(pr,t),Co.forEach(e),Ro.forEach(e),n=0;n<rr.length;n++)r=rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)S_(n),n.blockedOn===null&&rr.shift()}var Qi=Wn.ReactCurrentBatchConfig,bl=!0;function KT(t,e,n,r){var i=me,s=Qi.transition;Qi.transition=null;try{me=1,Fd(t,e,n,r)}finally{me=i,Qi.transition=s}}function GT(t,e,n,r){var i=me,s=Qi.transition;Qi.transition=null;try{me=4,Fd(t,e,n,r)}finally{me=i,Qi.transition=s}}function Fd(t,e,n,r){if(bl){var i=xh(t,e,n,r);if(i===null)Lc(t,e,r,Dl,n),um(t,r);else if(WT(i,t,e,n,r))r.stopPropagation();else if(um(t,r),e&4&&-1<HT.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&w_(s),s=xh(t,e,n,r),s===null&&Lc(t,e,r,Dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var Dl=null;function xh(t,e,n,r){if(Dl=null,t=Ld(r),t=Yr(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function k_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case Od:return 1;case g_:return 4;case Pl:case OT:return 16;case y_:return 536870912;default:return 16}default:return 16}}var ur=null,Ud=null,ll=null;function x_(){if(ll)return ll;var t,e=Ud,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ll=i.slice(t,1<r?1-r:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function hm(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:hm,this.isPropagationStopped=hm,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=$t(ws),Zo=be({},ws,{view:0,detail:0}),QT=$t(Zo),xc,Ac,Ys,wu=be({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(xc=t.screenX-Ys.screenX,Ac=t.screenY-Ys.screenY):Ac=xc=0,Ys=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),dm=$t(wu),YT=be({},wu,{dataTransfer:0}),XT=$t(YT),JT=be({},Zo,{relatedTarget:0}),Cc=$t(JT),ZT=be({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=$t(ZT),t1=be({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n1=$t(t1),r1=be({},ws,{data:0}),fm=$t(r1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o1[t])?!!e[t]:!1}function Bd(){return a1}var l1=be({},Zo,{key:function(t){if(t.key){var e=i1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u1=$t(l1),c1=be({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=$t(c1),h1=be({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),d1=$t(h1),f1=be({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=$t(f1),m1=be({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=$t(m1),y1=[9,13,27,32],$d=On&&"CompositionEvent"in window,ho=null;On&&"documentMode"in document&&(ho=document.documentMode);var _1=On&&"TextEvent"in window&&!ho,A_=On&&(!$d||ho&&8<ho&&11>=ho),mm=" ",gm=!1;function C_(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function v1(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(gm=!0,mm);case"textInput":return t=e.data,t===mm&&gm?null:t;default:return null}}function w1(t,e){if(Li)return t==="compositionend"||!$d&&C_(t,e)?(t=x_(),ll=Ud=ur=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A_&&e.locale!=="ko"?null:e.data;default:return null}}var E1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E1[t.type]:e==="textarea"}function P_(t,e,n,r){a_(r),e=Vl(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,No=null;function T1(t){z_(t,0)}function Eu(t){var e=ji(t);if(e_(e))return t}function I1(t,e){if(t==="change")return e}var N_=!1;if(On){var Rc;if(On){var Pc="oninput"in document;if(!Pc){var _m=document.createElement("div");_m.setAttribute("oninput","return;"),Pc=typeof _m.oninput=="function"}Rc=Pc}else Rc=!1;N_=Rc&&(!document.documentMode||9<document.documentMode)}function vm(){fo&&(fo.detachEvent("onpropertychange",b_),No=fo=null)}function b_(t){if(t.propertyName==="value"&&Eu(No)){var e=[];P_(e,No,t,Ld(t)),h_(T1,e)}}function S1(t,e,n){t==="focusin"?(vm(),fo=e,No=n,fo.attachEvent("onpropertychange",b_)):t==="focusout"&&vm()}function k1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(No)}function x1(t,e){if(t==="click")return Eu(e)}function A1(t,e){if(t==="input"||t==="change")return Eu(e)}function C1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:C1;function bo(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,e){var n=wm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wm(n)}}function D_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function V_(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function Hd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R1(t){var e=V_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D_(n.ownerDocument.documentElement,n)){if(r!==null&&Hd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Em(n,s);var o=Em(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=On&&"documentMode"in document&&11>=document.documentMode,Oi=null,Ah=null,po=null,Ch=!1;function Tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||Oi==null||Oi!==Al(r)||(r=Oi,"selectionStart"in r&&Hd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&bo(po,r)||(po=r,r=Vl(Ah,"onSelect"),0<r.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionend:ja("Transition","TransitionEnd")},Nc={},L_={};On&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Tu(t){if(Nc[t])return Nc[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Nc[t]=e[n];return t}var O_=Tu("animationend"),M_=Tu("animationiteration"),j_=Tu("animationstart"),F_=Tu("transitionend"),U_=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){U_.set(t,e),mi(e,[t])}for(var bc=0;bc<Im.length;bc++){var Dc=Im[bc],N1=Dc.toLowerCase(),b1=Dc[0].toUpperCase()+Dc.slice(1);Mr(N1,"on"+b1)}Mr(O_,"onAnimationEnd");Mr(M_,"onAnimationIteration");Mr(j_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(F_,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NT(r,e,void 0,t),t.currentTarget=null}function z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Sm(i,l,h),s=u}}}if(Rl)throw t=Ih,Rl=!1,Ih=null,t}function Ie(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(B_(e,t,2,!1),n.add(r))}function Vc(t,e,n){var r=0;e&&(r|=4),B_(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[Fa]){t[Fa]=!0,Qy.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,Vc("selectionchange",!1,e))}}function B_(t,e,n,r){switch(k_(e)){case 1:var i=KT;break;case 4:i=GT;break;default:i=Fd}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Yr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}h_(function(){var h=s,f=Ld(n),m=[];e:{var p=U_.get(t);if(p!==void 0){var A=zd,C=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":A=u1;break;case"focusin":C="focus",A=Cc;break;case"focusout":C="blur",A=Cc;break;case"beforeblur":case"afterblur":A=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=XT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=d1;break;case O_:case M_:case j_:A=e1;break;case F_:A=p1;break;case"scroll":A=QT;break;case"wheel":A=g1;break;case"copy":case"cut":case"paste":A=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=pm}var N=(e&4)!==0,D=!N&&t==="scroll",S=N?p!==null?p+"Capture":null:p;N=[];for(var w=h,x;w!==null;){x=w;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,S!==null&&(V=Ao(w,S),V!=null&&N.push(Vo(w,V,x)))),D)break;w=w.return}0<N.length&&(p=new A(p,C,null,n,f),m.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",p&&n!==wh&&(C=n.relatedTarget||n.fromElement)&&(Yr(C)||C[Mn]))break e;if((A||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,A?(C=n.relatedTarget||n.toElement,A=h,C=C?Yr(C):null,C!==null&&(D=gi(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(A=null,C=h),A!==C)){if(N=dm,V="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=pm,V="onPointerLeave",S="onPointerEnter",w="pointer"),D=A==null?p:ji(A),x=C==null?p:ji(C),p=new N(V,w+"leave",A,n,f),p.target=D,p.relatedTarget=x,V=null,Yr(f)===h&&(N=new N(S,w+"enter",C,n,f),N.target=x,N.relatedTarget=D,V=N),D=V,A&&C)t:{for(N=A,S=C,w=0,x=N;x;x=Ai(x))w++;for(x=0,V=S;V;V=Ai(V))x++;for(;0<w-x;)N=Ai(N),w--;for(;0<x-w;)S=Ai(S),x--;for(;w--;){if(N===S||S!==null&&N===S.alternate)break t;N=Ai(N),S=Ai(S)}N=null}else N=null;A!==null&&km(m,p,A,N,!1),C!==null&&D!==null&&km(m,D,C,N,!0)}}e:{if(p=h?ji(h):window,A=p.nodeName&&p.nodeName.toLowerCase(),A==="select"||A==="input"&&p.type==="file")var j=I1;else if(ym(p))if(N_)j=A1;else{j=k1;var z=S1}else(A=p.nodeName)&&A.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(j=x1);if(j&&(j=j(t,h))){P_(m,j,n,f);break e}z&&z(t,p,h),t==="focusout"&&(z=p._wrapperState)&&z.controlled&&p.type==="number"&&mh(p,"number",p.value)}switch(z=h?ji(h):window,t){case"focusin":(ym(z)||z.contentEditable==="true")&&(Oi=z,Ah=h,po=null);break;case"focusout":po=Ah=Oi=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,Tm(m,n,f);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":Tm(m,n,f)}var v;if($d)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Li?C_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(A_&&n.locale!=="ko"&&(Li||y!=="onCompositionStart"?y==="onCompositionEnd"&&Li&&(v=x_()):(ur=f,Ud="value"in ur?ur.value:ur.textContent,Li=!0)),z=Vl(h,y),0<z.length&&(y=new fm(y,t,null,n,f),m.push({event:y,listeners:z}),v?y.data=v:(v=R_(n),v!==null&&(y.data=v)))),(v=_1?v1(t,n):w1(t,n))&&(h=Vl(h,"onBeforeInput"),0<h.length&&(f=new fm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}z_(m,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ao(t,n),s!=null&&r.unshift(Vo(t,s,i)),s=Ao(t,e),s!=null&&r.push(Vo(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function km(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ao(n,s),u!=null&&o.unshift(Vo(n,u,l))):i||(u=Ao(n,s),u!=null&&o.push(Vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var V1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function xm(t){return(typeof t=="string"?t:""+t).replace(V1,`
`).replace(L1,"")}function Ua(t,e,n){if(e=xm(e),xm(t)!==e&&n)throw Error(F(425))}function Ll(){}var Rh=null,Ph=null;function Nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(j1)}:bh;function j1(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),yn="__reactFiber$"+Es,Lo="__reactProps$"+Es,Mn="__reactContainer$"+Es,Dh="__reactEvents$"+Es,F1="__reactListeners$"+Es,U1="__reactHandles$"+Es;function Yr(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[yn])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[yn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Iu(t){return t[Lo]||null}var Vh=[],Fi=-1;function jr(t){return{current:t}}function xe(t){0>Fi||(t.current=Vh[Fi],Vh[Fi]=null,Fi--)}function we(t,e){Fi++,Vh[Fi]=t.current,t.current=e}var Cr={},mt=jr(Cr),Nt=jr(!1),ii=Cr;function ss(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Ol(){xe(Nt),xe(mt)}function Rm(t,e,n){if(mt.current!==Cr)throw Error(F(168));we(mt,e),we(Nt,n)}function $_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,ST(t)||"Unknown",i));return be({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ii=mt.current,we(mt,t),we(Nt,Nt.current),!0}function Pm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=$_(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,xe(Nt),xe(mt),we(mt,t)):xe(Nt),we(Nt,n)}var Rn=null,Su=!1,Mc=!1;function H_(t){Rn===null?Rn=[t]:Rn.push(t)}function z1(t){Su=!0,H_(t)}function Fr(){if(!Mc&&Rn!==null){Mc=!0;var t=0,e=me;try{var n=Rn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Su=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),m_(Od,Fr),i}finally{me=e,Mc=!1}}return null}var Ui=[],zi=0,jl=null,Fl=0,Ht=[],Wt=0,si=null,Pn=1,Nn="";function Kr(t,e){Ui[zi++]=Fl,Ui[zi++]=jl,jl=t,Fl=e}function W_(t,e,n){Ht[Wt++]=Pn,Ht[Wt++]=Nn,Ht[Wt++]=si,si=t;var r=Pn;t=Nn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-on(e)+i|n<<i|r,Nn=s+t}else Pn=1<<s|n<<i|r,Nn=t}function Wd(t){t.return!==null&&(Kr(t,1),W_(t,1,0))}function qd(t){for(;t===jl;)jl=Ui[--zi],Ui[zi]=null,Fl=Ui[--zi],Ui[zi]=null;for(;t===si;)si=Ht[--Wt],Ht[Wt]=null,Nn=Ht[--Wt],Ht[Wt]=null,Pn=Ht[--Wt],Ht[Wt]=null}var Ut=null,jt=null,Ce=!1,nn=null;function q_(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,jt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:Pn,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,jt=null,!0):!1;default:return!1}}function Lh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oh(t){if(Ce){var e=jt;if(e){var n=e;if(!Nm(t,e)){if(Lh(t))throw Error(F(418));e=mr(n.nextSibling);var r=Ut;e&&Nm(t,e)?q_(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Ut=t)}}else{if(Lh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ce=!1,Ut=t}}}function bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function za(t){if(t!==Ut)return!1;if(!Ce)return bm(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nh(t.type,t.memoizedProps)),e&&(e=jt)){if(Lh(t))throw K_(),Error(F(418));for(;e;)q_(t,e),e=mr(e.nextSibling)}if(bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Ut?mr(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=jt;t;)t=mr(t.nextSibling)}function os(){jt=Ut=null,Ce=!1}function Kd(t){nn===null?nn=[t]:nn.push(t)}var B1=Wn.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function G_(t){function e(S,w){if(t){var x=S.deletions;x===null?(S.deletions=[w],S.flags|=16):x.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=vr(S,w),S.index=0,S.sibling=null,S}function s(S,w,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<w?(S.flags|=2,w):x):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,x,V){return w===null||w.tag!==6?(w=Hc(x,S.mode,V),w.return=S,w):(w=i(w,x),w.return=S,w)}function u(S,w,x,V){var j=x.type;return j===Vi?f(S,w,x.props.children,V,x.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&Dm(j)===w.type)?(V=i(w,x.props),V.ref=Xs(S,w,x),V.return=S,V):(V=gl(x.type,x.key,x.props,null,S.mode,V),V.ref=Xs(S,w,x),V.return=S,V)}function h(S,w,x,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Wc(x,S.mode,V),w.return=S,w):(w=i(w,x.children||[]),w.return=S,w)}function f(S,w,x,V,j){return w===null||w.tag!==7?(w=ni(x,S.mode,V,j),w.return=S,w):(w=i(w,x),w.return=S,w)}function m(S,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Hc(""+w,S.mode,x),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Na:return x=gl(w.type,w.key,w.props,null,S.mode,x),x.ref=Xs(S,null,w),x.return=S,x;case Di:return w=Wc(w,S.mode,x),w.return=S,w;case tr:var V=w._init;return m(S,V(w._payload),x)}if(no(w)||qs(w))return w=ni(w,S.mode,x,null),w.return=S,w;Ba(S,w)}return null}function p(S,w,x,V){var j=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return j!==null?null:l(S,w,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:return x.key===j?u(S,w,x,V):null;case Di:return x.key===j?h(S,w,x,V):null;case tr:return j=x._init,p(S,w,j(x._payload),V)}if(no(x)||qs(x))return j!==null?null:f(S,w,x,V,null);Ba(S,x)}return null}function A(S,w,x,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(x)||null,l(w,S,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Na:return S=S.get(V.key===null?x:V.key)||null,u(w,S,V,j);case Di:return S=S.get(V.key===null?x:V.key)||null,h(w,S,V,j);case tr:var z=V._init;return A(S,w,x,z(V._payload),j)}if(no(V)||qs(V))return S=S.get(x)||null,f(w,S,V,j,null);Ba(w,V)}return null}function C(S,w,x,V){for(var j=null,z=null,v=w,y=w=0,E=null;v!==null&&y<x.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=p(S,v,x[y],V);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(S,v),w=s(I,w,y),z===null?j=I:z.sibling=I,z=I,v=E}if(y===x.length)return n(S,v),Ce&&Kr(S,y),j;if(v===null){for(;y<x.length;y++)v=m(S,x[y],V),v!==null&&(w=s(v,w,y),z===null?j=v:z.sibling=v,z=v);return Ce&&Kr(S,y),j}for(v=r(S,v);y<x.length;y++)E=A(v,S,y,x[y],V),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),w=s(E,w,y),z===null?j=E:z.sibling=E,z=E);return t&&v.forEach(function(k){return e(S,k)}),Ce&&Kr(S,y),j}function N(S,w,x,V){var j=qs(x);if(typeof j!="function")throw Error(F(150));if(x=j.call(x),x==null)throw Error(F(151));for(var z=j=null,v=w,y=w=0,E=null,I=x.next();v!==null&&!I.done;y++,I=x.next()){v.index>y?(E=v,v=null):E=v.sibling;var k=p(S,v,I.value,V);if(k===null){v===null&&(v=E);break}t&&v&&k.alternate===null&&e(S,v),w=s(k,w,y),z===null?j=k:z.sibling=k,z=k,v=E}if(I.done)return n(S,v),Ce&&Kr(S,y),j;if(v===null){for(;!I.done;y++,I=x.next())I=m(S,I.value,V),I!==null&&(w=s(I,w,y),z===null?j=I:z.sibling=I,z=I);return Ce&&Kr(S,y),j}for(v=r(S,v);!I.done;y++,I=x.next())I=A(v,S,y,I.value,V),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),w=s(I,w,y),z===null?j=I:z.sibling=I,z=I);return t&&v.forEach(function(R){return e(S,R)}),Ce&&Kr(S,y),j}function D(S,w,x,V){if(typeof x=="object"&&x!==null&&x.type===Vi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:e:{for(var j=x.key,z=w;z!==null;){if(z.key===j){if(j=x.type,j===Vi){if(z.tag===7){n(S,z.sibling),w=i(z,x.props.children),w.return=S,S=w;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===tr&&Dm(j)===z.type){n(S,z.sibling),w=i(z,x.props),w.ref=Xs(S,z,x),w.return=S,S=w;break e}n(S,z);break}else e(S,z);z=z.sibling}x.type===Vi?(w=ni(x.props.children,S.mode,V,x.key),w.return=S,S=w):(V=gl(x.type,x.key,x.props,null,S.mode,V),V.ref=Xs(S,w,x),V.return=S,S=V)}return o(S);case Di:e:{for(z=x.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(S,w.sibling),w=i(w,x.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Wc(x,S.mode,V),w.return=S,S=w}return o(S);case tr:return z=x._init,D(S,w,z(x._payload),V)}if(no(x))return C(S,w,x,V);if(qs(x))return N(S,w,x,V);Ba(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,x),w.return=S,S=w):(n(S,w),w=Hc(x,S.mode,V),w.return=S,S=w),o(S)):n(S,w)}return D}var as=G_(!0),Q_=G_(!1),Ul=jr(null),zl=null,Bi=null,Gd=null;function Qd(){Gd=Bi=zl=null}function Yd(t){var e=Ul.current;xe(Ul),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){zl=t,Gd=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(Gd!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(zl===null)throw Error(F(308));Bi=t,zl.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var Xr=null;function Xd(t){Xr===null?Xr=[t]:Xr.push(t)}function Y_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xd(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Xd(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}function Vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,r){var i=t.updateQueue;nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var p=l.lane,A=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(p=e,A=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){m=C.call(A,m,p);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,p=typeof C=="function"?C.call(A,m,p):C,p==null)break e;m=be({},m,p);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else A={eventTime:A,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=m}}function Lm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ta={},vn=jr(ta),Oo=jr(ta),Mo=jr(ta);function Jr(t){if(t===ta)throw Error(F(174));return t}function Zd(t,e){switch(we(Mo,e),we(Oo,t),we(vn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yh(e,t)}xe(vn),we(vn,e)}function ls(){xe(vn),xe(Oo),xe(Mo)}function J_(t){Jr(Mo.current);var e=Jr(vn.current),n=yh(e,t.type);e!==n&&(we(Oo,t),we(vn,n))}function ef(t){Oo.current===t&&(xe(vn),xe(Oo))}var Pe=jr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function tf(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var hl=Wn.ReactCurrentDispatcher,Fc=Wn.ReactCurrentBatchConfig,oi=0,Ne=null,Ke=null,Ze=null,Hl=!1,mo=!1,jo=0,$1=0;function ut(){throw Error(F(321))}function nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function rf(t,e,n,r,i,s){if(oi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?K1:G1,t=n(r,i),mo){s=0;do{if(mo=!1,jo=0,25<=s)throw Error(F(301));s+=1,Ze=Ke=null,e.updateQueue=null,hl.current=Q1,t=n(r,i)}while(mo)}if(hl.current=Wl,e=Ke!==null&&Ke.next!==null,oi=0,Ze=Ke=Ne=null,Hl=!1,e)throw Error(F(300));return t}function sf(){var t=jo!==0;return jo=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Yt(){if(Ke===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Ze===null?Ne.memoizedState:Ze.next;if(e!==null)Ze=e,Ke=t;else{if(t===null)throw Error(F(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?Ne.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Fo(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((oi&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Ne.lanes|=f,ai|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Yt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function ev(t,e){var n=Ne,r=Yt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,of(rv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Uo(9,nv.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));oi&30||tv(n,e,i)}return i}function tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&sv(t)}function rv(t,e,n){return n(function(){iv(e)&&sv(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function sv(t){var e=jn(t,1);e!==null&&an(e,t,1,-1)}function Om(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=q1.bind(null,Ne,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ov(){return Yt().memoizedState}function dl(t,e,n,r){var i=mn();Ne.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function ku(t,e,n,r){var i=Yt();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&nf(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function Mm(t,e){return dl(8390656,8,t,e)}function of(t,e){return ku(2048,8,t,e)}function av(t,e){return ku(4,2,t,e)}function lv(t,e){return ku(4,4,t,e)}function uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cv(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,uv.bind(null,e,t),n)}function af(){}function hv(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dv(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fv(t,e,n){return oi&21?(hn(n,e)||(n=__(),Ne.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function H1(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{me=n,Fc.transition=r}}function pv(){return Yt().memoizedState}function W1(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mv(t))gv(e,n);else if(n=Y_(t,e,n,r),n!==null){var i=wt();an(n,t,r,i),yv(n,e,r)}}function q1(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mv(t))gv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,Xd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Y_(t,e,i,r),n!==null&&(i=wt(),an(n,t,r,i),yv(n,e,r))}}function mv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function gv(t,e){mo=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Md(t,n)}}var Wl={readContext:Qt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},K1={readContext:Qt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:Mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=W1.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:af,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=H1.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=mn();if(Ce){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));oi&30||tv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mm(rv.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,nv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=et.identifierPrefix;if(Ce){var n=Nn,r=Pn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G1={readContext:Qt,useCallback:hv,useContext:Qt,useEffect:of,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:Uc,useRef:ov,useState:function(){return Uc(Fo)},useDebugValue:af,useDeferredValue:function(t){var e=Yt();return fv(e,Ke.memoizedState,t)},useTransition:function(){var t=Uc(Fo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},Q1={readContext:Qt,useCallback:hv,useContext:Qt,useEffect:of,useImperativeHandle:cv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:zc,useRef:ov,useState:function(){return zc(Fo)},useDebugValue:af,useDeferredValue:function(t){var e=Yt();return Ke===null?e.memoizedState=t:fv(e,Ke.memoizedState,t)},useTransition:function(){var t=zc(Fo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function en(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xu={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=_r(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(an(e,t,i,r),cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=_r(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(an(e,t,i,r),cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=_r(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(an(e,t,r,n),cl(e,t,r))}};function jm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,r)||!bo(i,s):!0}function _v(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qt(s):(i=bt(e)?ii:mt.current,r=e.contextTypes,s=(r=r!=null)?ss(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xu.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Jd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qt(s):(s=bt(e)?ii:mt.current,i.context=ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xu.enqueueReplaceState(i,i.state,null),Bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,e){try{var n="",r=e;do n+=IT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Y1=typeof WeakMap=="function"?WeakMap:Map;function vv(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,Yh=r),Uh(t,e)},n}function wv(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Um(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Y1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cI.bind(null,t,e,n),e.then(t,t))}function zm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var X1=Wn.ReactCurrentOwner,Pt=!1;function vt(t,e,n,r){e.child=t===null?Q_(e,null,n,r):as(e,t.child,n,r)}function $m(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=rf(t,e,n,r,s,i),n=sf(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ce&&n&&Wd(e),e.flags|=1,vt(t,e,r,i),e.child)}function Hm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ev(t,e,s,r,i)):(t=gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ev(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(bo(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return zh(t,e,n,r,i)}function Tv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Hi,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Hi,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Hi,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Hi,Ot),Ot|=r;return vt(t,e,i,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zh(t,e,n,r,i){var s=bt(n)?ii:mt.current;return s=ss(e,s),Yi(e,i),n=rf(t,e,n,r,s,i),r=sf(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(Ce&&r&&Wd(e),e.flags|=1,vt(t,e,n,i),e.child)}function Wm(t,e,n,r,i){if(bt(n)){var s=!0;Ml(e)}else s=!1;if(Yi(e,i),e.stateNode===null)fl(t,e),_v(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Qt(h):(h=bt(n)?ii:mt.current,h=ss(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Fm(e,o,r,h),nr=!1;var p=e.memoizedState;o.state=p,Bl(e,r,o,i),u=e.memoizedState,l!==r||p!==u||Nt.current||nr?(typeof f=="function"&&(jh(e,n,f,r),u=e.memoizedState),(l=nr||jm(e,n,l,r,p,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:en(e.type,l),o.props=h,m=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qt(u):(u=bt(n)?ii:mt.current,u=ss(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||p!==u)&&Fm(e,o,r,u),nr=!1,p=e.memoizedState,o.state=p,Bl(e,r,o,i);var C=e.memoizedState;l!==m||p!==C||Nt.current||nr?(typeof A=="function"&&(jh(e,n,A,r),C=e.memoizedState),(h=nr||jm(e,n,h,r,p,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Bh(t,e,n,r,s,i)}function Bh(t,e,n,r,i,s){Iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pm(e,n,!1),Fn(t,e,s);r=e.stateNode,X1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=as(e,t.child,null,s),e.child=as(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&Pm(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),Zd(t,e.containerInfo)}function qm(t,e,n,r,i){return os(),Kd(i),e.flags|=256,vt(t,e,n,r),e.child}var $h={dehydrated:null,treeContext:null,retryLane:0};function Hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Pe,i&1),t===null)return Oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hh(n),e.memoizedState=$h,t):lf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return J1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$h,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&Kd(r),as(e,t.child,null,n),t=lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function J1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(F(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&as(e,t.child,null,o),e.child.memoizedState=Hh(o),e.memoizedState=$h,s);if(!(e.mode&1))return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Bc(s,r,void 0),$a(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),an(r,t,i,-1))}return pf(),r=Bc(Error(F(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=mr(i.nextSibling),Ut=e,Ce=!0,nn=null,t!==null&&(Ht[Wt++]=Pn,Ht[Wt++]=Nn,Ht[Wt++]=si,Pn=t.id,Nn=t.overflow,si=e),e=lf(e,r.children),e.flags|=4096,e)}function Km(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mh(t.return,e,n)}function $c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Km(t,n,e);else if(t.tag===19)Km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Z1(t,e,n){switch(e.tag){case 3:Sv(e),os();break;case 5:J_(e);break;case 1:bt(e.type)&&Ml(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?kv(t,e,n):(we(Pe,Pe.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Tv(t,e,n)}return Fn(t,e,n)}var Av,Wh,Cv,Rv;Av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wh=function(){};Cv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(vn.current);var s=null;switch(n){case"input":i=fh(t,i),r=fh(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=gh(t,i),r=gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ll)}_h(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ko.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ko.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ie("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eI(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return bt(e.type)&&Ol(),ct(e),null;case 3:return r=e.stateNode,ls(),xe(Nt),xe(mt),tf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nn!==null&&(Zh(nn),nn=null))),Wh(t,e),ct(e),null;case 5:ef(e);var i=Jr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ct(e),null}if(t=Jr(vn.current),za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)Ie(io[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":nm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":im(r,s),Ie("invalid",r)}_h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),i=["children",""+l]):ko.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":ba(r),rm(r,s,!0);break;case"textarea":ba(r),sm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ll)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Lo]=r,Av(t,e,!1,!1),e.stateNode=t;e:{switch(o=vh(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)Ie(io[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":nm(t,r),i=fh(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":im(t,r),i=gh(t,r),Ie("invalid",t);break;default:i=r}_h(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?o_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xo(t,u):typeof u=="number"&&xo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ko.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",t):u!=null&&Nd(t,s,u,o))}switch(n){case"input":ba(t),rm(t,r,!1);break;case"textarea":ba(t),sm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Jr(Mo.current),Jr(vn.current),za(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ct(e),null;case 13:if(xe(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&jt!==null&&e.mode&1&&!(e.flags&128))K_(),os(),e.flags|=98560,s=!1;else if(s=za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[yn]=e}else os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),s=!1}else nn!==null&&(Zh(nn),nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):pf())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return ls(),Wh(t,e),t===null&&Do(e.stateNode.containerInfo),ct(e),null;case 10:return Yd(e.type._context),ct(e),null;case 17:return bt(e.type)&&Ol(),ct(e),null;case 19:if(xe(Pe),s=e.memoizedState,s===null)return ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>cs&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ct(e),null}else 2*je()-s.renderingStartTime>cs&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return ff(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function tI(t,e){switch(qd(e),e.tag){case 1:return bt(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ls(),xe(Nt),xe(mt),tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ef(e),null;case 13:if(xe(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Pe),null;case 4:return ls(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var Ha=!1,ft=!1,nI=typeof WeakSet=="function"?WeakSet:Set,W=null;function $i(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function qh(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Gm=!1;function rI(t,e){if(Rh=bl,t=V_(),Hd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,p=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(A=m.firstChild)!==null;)p=m,m=A;for(;;){if(m===t)break t;if(p===n&&++h===i&&(l=o),p===s&&++f===r&&(u=o),(A=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ph={focusedElem:t,selectionRange:n},bl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,D=C.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:en(e.type,N),D);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Le(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=Gm,Gm=!1,C}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qh(e,n,s)}i=i.next}while(i!==r)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Lo],delete e[Dh],delete e[F1],delete e[U1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qh(t,e,n),t=t.sibling;t!==null;)Qh(t,e,n),t=t.sibling}var nt=null,tn=!1;function Zn(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:ft||$i(n,e);case 6:var r=nt,i=tn;nt=null,Zn(t,e,n),nt=r,tn=i,nt!==null&&(tn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(tn?(t=nt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Po(t)):Oc(nt,n.stateNode));break;case 4:r=nt,i=tn,nt=n.stateNode.containerInfo,tn=!0,Zn(t,e,n),nt=r,tn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qh(n,e,o),i=i.next}while(i!==r)}Zn(t,e,n);break;case 1:if(!ft&&($i(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}Zn(t,e,n);break;case 21:Zn(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,Zn(t,e,n),ft=r):Zn(t,e,n);break;default:Zn(t,e,n)}}function Ym(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nI),e.forEach(function(r){var i=dI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,tn=!1;break e;case 3:nt=l.stateNode.containerInfo,tn=!0;break e;case 4:nt=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(nt===null)throw Error(F(160));bv(s,o,i),nt=null,tn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Le(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zt(e,t),pn(t),r&4){try{go(3,t,t.return),Au(3,t)}catch(N){Le(t,t.return,N)}try{go(5,t,t.return)}catch(N){Le(t,t.return,N)}}break;case 1:Zt(e,t),pn(t),r&512&&n!==null&&$i(n,n.return);break;case 5:if(Zt(e,t),pn(t),r&512&&n!==null&&$i(n,n.return),t.flags&32){var i=t.stateNode;try{xo(i,"")}catch(N){Le(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&t_(i,s),vh(l,o);var h=vh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?o_(i,m):f==="dangerouslySetInnerHTML"?i_(i,m):f==="children"?xo(i,m):Nd(i,f,m,h)}switch(l){case"input":ph(i,s);break;case"textarea":n_(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?qi(i,!!s.multiple,A,!1):p!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Lo]=s}catch(N){Le(t,t.return,N)}}break;case 6:if(Zt(e,t),pn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Le(t,t.return,N)}}break;case 3:if(Zt(e,t),pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(N){Le(t,t.return,N)}break;case 4:Zt(e,t),pn(t);break;case 13:Zt(e,t),pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hf=je())),r&4&&Ym(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(h=ft)||f,Zt(e,t),ft=h):Zt(e,t),pn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(m=W=f;W!==null;){switch(p=W,A=p.child,p.tag){case 0:case 11:case 14:case 15:go(4,p,p.return);break;case 1:$i(p,p.return);var C=p.stateNode;if(typeof C.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Le(r,n,N)}}break;case 5:$i(p,p.return);break;case 22:if(p.memoizedState!==null){Jm(m);continue}}A!==null?(A.return=p,W=A):Jm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=s_("display",o))}catch(N){Le(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){Le(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Zt(e,t),pn(t),r&4&&Ym(t);break;case 21:break;default:Zt(e,t),pn(t)}}function pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var s=Qm(t);Qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qm(t);Gh(t,l,o);break;default:throw Error(F(161))}}catch(u){Le(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iI(t,e,n){W=t,Vv(t)}function Vv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ft;l=Ha;var h=ft;if(Ha=o,(ft=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Zm(i):u!==null?(u.return=o,W=u):Zm(i);for(;s!==null;)W=s,Vv(s),s=s.sibling;W=i,Ha=l,ft=h}Xm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Xm(t)}}function Xm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Au(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:en(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ft||e.flags&512&&Kh(e)}catch(p){Le(e,e.return,p)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Jm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Zm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(u){Le(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Le(e,i,u)}}var s=e.return;try{Kh(e)}catch(u){Le(e,s,u)}break;case 5:var o=e.return;try{Kh(e)}catch(u){Le(e,o,u)}}}catch(u){Le(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var sI=Math.ceil,ql=Wn.ReactCurrentDispatcher,uf=Wn.ReactCurrentOwner,Gt=Wn.ReactCurrentBatchConfig,he=0,et=null,Be=null,st=0,Ot=0,Hi=jr(0),Qe=0,zo=null,ai=0,Cu=0,cf=0,yo=null,Ct=null,hf=0,cs=1/0,Cn=null,Kl=!1,Yh=null,yr=null,Wa=!1,cr=null,Gl=0,_o=0,Xh=null,pl=-1,ml=0;function wt(){return he&6?je():pl!==-1?pl:pl=je()}function _r(t){return t.mode&1?he&2&&st!==0?st&-st:B1.transition!==null?(ml===0&&(ml=__()),ml):(t=me,t!==0||(t=window.event,t=t===void 0?16:k_(t.type)),t):1}function an(t,e,n,r){if(50<_o)throw _o=0,Xh=null,Error(F(185));Jo(t,n,r),(!(he&2)||t!==et)&&(t===et&&(!(he&2)&&(Cu|=n),Qe===4&&ir(t,st)),Dt(t,r),n===1&&he===0&&!(e.mode&1)&&(cs=je()+500,Su&&Fr()))}function Dt(t,e){var n=t.callbackNode;BT(t,e);var r=Nl(t,t===et?st:0);if(r===0)n!==null&&lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lm(n),e===1)t.tag===0?z1(eg.bind(null,t)):H_(eg.bind(null,t)),M1(function(){!(he&6)&&Fr()}),n=null;else{switch(v_(r)){case 1:n=Od;break;case 4:n=g_;break;case 16:n=Pl;break;case 536870912:n=y_;break;default:n=Pl}n=Bv(n,Lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lv(t,e){if(pl=-1,ml=0,he&6)throw Error(F(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Nl(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=he;he|=2;var s=Mv();(et!==t||st!==e)&&(Cn=null,cs=je()+500,ti(t,e));do try{lI();break}catch(l){Ov(t,l)}while(!0);Qd(),ql.current=s,he=i,Be!==null?e=0:(et=null,st=0,e=Qe)}if(e!==0){if(e===2&&(i=Sh(t),i!==0&&(r=i,e=Jh(t,i))),e===1)throw n=zo,ti(t,0),ir(t,r),Dt(t,je()),n;if(e===6)ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!oI(i)&&(e=Ql(t,r),e===2&&(s=Sh(t),s!==0&&(r=s,e=Jh(t,s))),e===1))throw n=zo,ti(t,0),ir(t,r),Dt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Gr(t,Ct,Cn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=hf+500-je(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bh(Gr.bind(null,t,Ct,Cn),e);break}Gr(t,Ct,Cn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sI(r/1960))-r,10<r){t.timeoutHandle=bh(Gr.bind(null,t,Ct,Cn),r);break}Gr(t,Ct,Cn);break;case 5:Gr(t,Ct,Cn);break;default:throw Error(F(329))}}}return Dt(t,je()),t.callbackNode===n?Lv.bind(null,t):null}function Jh(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(ti(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Zh(e)),t}function Zh(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function oI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~cf,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function eg(t){if(he&6)throw Error(F(327));Xi();var e=Nl(t,0);if(!(e&1))return Dt(t,je()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=Sh(t);r!==0&&(e=r,n=Jh(t,r))}if(n===1)throw n=zo,ti(t,0),ir(t,e),Dt(t,je()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,Ct,Cn),Dt(t,je()),null}function df(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(cs=je()+500,Su&&Fr())}}function li(t){cr!==null&&cr.tag===0&&!(he&6)&&Xi();var e=he;he|=1;var n=Gt.transition,r=me;try{if(Gt.transition=null,me=1,t)return t()}finally{me=r,Gt.transition=n,he=e,!(he&6)&&Fr()}}function ff(){Ot=Hi.current,xe(Hi)}function ti(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O1(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:ls(),xe(Nt),xe(mt),tf();break;case 5:ef(r);break;case 4:ls();break;case 13:xe(Pe);break;case 19:xe(Pe);break;case 10:Yd(r.type._context);break;case 22:case 23:ff()}n=n.return}if(et=t,Be=t=vr(t.current,null),st=Ot=e,Qe=0,zo=null,cf=Cu=ai=0,Ct=yo=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function Ov(t,e){do{var n=Be;try{if(Qd(),hl.current=Wl,Hl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hl=!1}if(oi=0,Ze=Ke=Ne=null,mo=!1,jo=0,uf.current=null,n===null||n.return===null){Qe=1,zo=e,Be=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=zm(o);if(A!==null){A.flags&=-257,Bm(A,o,l,s,e),A.mode&1&&Um(s,h,e),e=A,u=h;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){Um(s,h,e),pf();break e}u=Error(F(426))}}else if(Ce&&l.mode&1){var D=zm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Bm(D,o,l,s,e),Kd(us(u,l));break e}}s=u=us(u,l),Qe!==4&&(Qe=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=vv(s,u,e);Vm(s,S);break e;case 1:l=u;var w=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=wv(s,l,e);Vm(s,V);break e}}s=s.return}while(s!==null)}Fv(n)}catch(j){e=j,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Mv(){var t=ql.current;return ql.current=Wl,t===null?Wl:t}function pf(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),et===null||!(ai&268435455)&&!(Cu&268435455)||ir(et,st)}function Ql(t,e){var n=he;he|=2;var r=Mv();(et!==t||st!==e)&&(Cn=null,ti(t,e));do try{aI();break}catch(i){Ov(t,i)}while(!0);if(Qd(),he=n,ql.current=r,Be!==null)throw Error(F(261));return et=null,st=0,Qe}function aI(){for(;Be!==null;)jv(Be)}function lI(){for(;Be!==null&&!DT();)jv(Be)}function jv(t){var e=zv(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?Fv(t):Be=e,uf.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tI(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Be=null;return}}else if(n=eI(n,e,Ot),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Qe===0&&(Qe=5)}function Gr(t,e,n){var r=me,i=Gt.transition;try{Gt.transition=null,me=1,uI(t,e,n,r)}finally{Gt.transition=i,me=r}return null}function uI(t,e,n,r){do Xi();while(cr!==null);if(he&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($T(t,s),t===et&&(Be=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,Bv(Pl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=me;me=1;var l=he;he|=4,uf.current=null,rI(t,n),Dv(n,t),R1(Ph),bl=!!Rh,Ph=Rh=null,t.current=n,iI(n),VT(),he=l,me=o,Gt.transition=s}else t.current=n;if(Wa&&(Wa=!1,cr=t,Gl=i),s=t.pendingLanes,s===0&&(yr=null),MT(n.stateNode),Dt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Kl)throw Kl=!1,t=Yh,Yh=null,t;return Gl&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===Xh?_o++:(_o=0,Xh=t):_o=0,Fr(),null}function Xi(){if(cr!==null){var t=v_(Gl),e=Gt.transition,n=me;try{if(Gt.transition=null,me=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Gl=0,he&6)throw Error(F(331));var i=he;for(he|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:go(8,f,s)}var m=f.child;if(m!==null)m.return=f,W=m;else for(;W!==null;){f=W;var p=f.sibling,A=f.return;if(Pv(f),f===h){W=null;break}if(p!==null){p.return=A,W=p;break}W=A}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,W=S;break e}W=s.return}}var w=t.current;for(W=w;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=w;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Au(9,l)}}catch(j){Le(l,l.return,j)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(he=i,Fr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(vu,t)}catch{}r=!0}return r}finally{me=n,Gt.transition=e}}return!1}function tg(t,e,n){e=us(n,e),e=vv(t,e,1),t=gr(t,e,1),e=wt(),t!==null&&(Jo(t,1,e),Dt(t,e))}function Le(t,e,n){if(t.tag===3)tg(t,t,n);else for(;e!==null;){if(e.tag===3){tg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=us(n,t),t=wv(e,t,1),e=gr(e,t,1),t=wt(),e!==null&&(Jo(e,1,t),Dt(e,t));break}}e=e.return}}function cI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(Qe===4||Qe===3&&(st&130023424)===st&&500>je()-hf?ti(t,0):cf|=n),Dt(t,e)}function Uv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=wt();t=jn(t,e),t!==null&&(Jo(t,e,n),Dt(t,n))}function hI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uv(t,n)}function dI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Uv(t,n)}var zv;zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,Z1(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ce&&e.flags&1048576&&W_(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fl(t,e),t=e.pendingProps;var i=ss(e,mt.current);Yi(e,n),i=rf(null,e,r,t,i,n);var s=sf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jd(e),i.updater=xu,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=Bh(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Wd(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pI(r),t=en(r,t),i){case 0:e=zh(null,e,r,t,n);break e;case 1:e=Wm(null,e,r,t,n);break e;case 11:e=$m(null,e,r,t,n);break e;case 14:e=Hm(null,e,r,en(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),zh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),Wm(t,e,r,i,n);case 3:e:{if(Sv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X_(t,e),Bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=us(Error(F(423)),e),e=qm(t,e,r,n,i);break e}else if(r!==i){i=us(Error(F(424)),e),e=qm(t,e,r,n,i);break e}else for(jt=mr(e.stateNode.containerInfo.firstChild),Ut=e,Ce=!0,nn=null,n=Q_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(os(),r===i){e=Fn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return J_(e),t===null&&Oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nh(r,i)?o=null:s!==null&&Nh(r,s)&&(e.flags|=32),Iv(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Oh(e),null;case 13:return kv(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=as(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),$m(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Ul,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Ln(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Mh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=Qt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=en(r,e.pendingProps),i=en(r.type,i),Hm(t,e,r,i,n);case 15:return Ev(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:en(r,i),fl(t,e),e.tag=1,bt(r)?(t=!0,Ml(e)):t=!1,Yi(e,n),_v(e,r,i),Fh(e,r,i,n),Bh(null,e,r,!0,t,n);case 19:return xv(t,e,n);case 22:return Tv(t,e,n)}throw Error(F(156,e.tag))};function Bv(t,e){return m_(t,e)}function fI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new fI(t,e,n,r)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pI(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dd)return 11;if(t===Vd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return ni(n.children,i,s,e);case bd:o=8,i|=8;break;case uh:return t=Kt(12,n,e,i|2),t.elementType=uh,t.lanes=s,t;case ch:return t=Kt(13,n,e,i),t.elementType=ch,t.lanes=s,t;case hh:return t=Kt(19,n,e,i),t.elementType=hh,t.lanes=s,t;case Jy:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case Xy:o=9;break e;case Dd:o=11;break e;case Vd:o=14;break e;case tr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ni(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=Jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gf(t,e,n,r,i,s,o,l,u){return t=new mI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jd(s),t}function gI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $v(t){if(!t)return Cr;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(bt(n))return $_(t,n,e)}return e}function Hv(t,e,n,r,i,s,o,l,u){return t=gf(n,r,!0,t,i,s,o,l,u),t.context=$v(null),n=t.current,r=wt(),i=_r(n),s=Ln(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,Jo(t,i,r),Dt(t,r),t}function Pu(t,e,n,r){var i=e.current,s=wt(),o=_r(i);return n=$v(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(an(t,i,o,s),cl(t,i,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ng(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yf(t,e){ng(t,e),(t=t.alternate)&&ng(t,e)}function yI(){return null}var Wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function _f(t){this._internalRoot=t}Nu.prototype.render=_f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Pu(t,e,null,null)};Nu.prototype.unmount=_f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Pu(null,t,null,null)}),e[Mn]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=T_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&S_(t)}};function vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rg(){}function _I(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Yl(o);s.call(h)}}var o=Hv(e,r,t,0,null,!1,!1,"",rg);return t._reactRootContainer=o,t[Mn]=o.current,Do(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Yl(u);l.call(h)}}var u=gf(t,0,!1,null,null,!1,!1,"",rg);return t._reactRootContainer=u,t[Mn]=u.current,Do(t.nodeType===8?t.parentNode:t),li(function(){Pu(e,u,n,r)}),u}function Du(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Yl(o);l.call(u)}}Pu(e,o,t,i)}else o=_I(n,e,t,i,r);return Yl(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Md(e,n|1),Dt(e,je()),!(he&6)&&(cs=je()+500,Fr()))}break;case 13:li(function(){var r=jn(t,1);if(r!==null){var i=wt();an(r,t,1,i)}}),yf(t,1)}};jd=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=wt();an(e,t,134217728,n)}yf(t,134217728)}};E_=function(t){if(t.tag===13){var e=_r(t),n=jn(t,e);if(n!==null){var r=wt();an(n,t,e,r)}yf(t,e)}};T_=function(){return me};I_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Eh=function(t,e,n){switch(e){case"input":if(ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Iu(r);if(!i)throw Error(F(90));e_(r),ph(r,i)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};u_=df;c_=li;var vI={usingClientEntryPoint:!1,Events:[ea,ji,Iu,a_,l_,df]},Zs={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wI={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||yI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{vu=qa.inject(wI),_n=qa}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vI;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(e))throw Error(F(200));return gI(t,e,null,n)};Bt.createRoot=function(t,e){if(!vf(t))throw Error(F(299));var n=!1,r="",i=Wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gf(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Do(t.nodeType===8?t.parentNode:t),new _f(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return li(t)};Bt.hydrate=function(t,e,n){if(!bu(e))throw Error(F(200));return Du(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hv(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nu(e)};Bt.render=function(t,e,n){if(!bu(e))throw Error(F(200));return Du(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!bu(t))throw Error(F(40));return t._reactRootContainer?(li(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Bt.unstable_batchedUpdates=df;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Du(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(t){console.error(t)}}qv(),qy.exports=Bt;var EI=qy.exports,ig=EI;ah.createRoot=ig.createRoot,ah.hydrateRoot=ig.hydrateRoot;const TI=()=>{};var sg={};/**
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
 */const Kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},II=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(p=64)),r.push(n[f],n[m],n[p],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new SI;const p=s<<2|l>>4;if(r.push(p),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kI=function(t){const e=Kv(t);return Gv.encodeByteArray(e,!0)},Xl=function(t){return kI(t).replace(/\./g,"")},Qv=function(t){try{return Gv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AI=()=>xI().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process>"u"||typeof sg>"u")return;const t=sg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qv(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return TI()||AI()||CI()||RI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yv=t=>{var e,n;return(n=(e=Vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},PI=t=>{const e=Yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xv=()=>{var t;return(t=Vu())==null?void 0:t.config},Jv=t=>{var e;return(e=Vu())==null?void 0:e[`_${t}`]};/**
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
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xl(JSON.stringify(n)),Xl(JSON.stringify(o)),""].join(".")}const vo={};function DI(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function VI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let og=!1;function e0(t,e){if(typeof window>"u"||typeof document>"u"||!Ts(window.location.host)||vo[t]===e||vo[t]||og)return;vo[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=DI().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,A){p.setAttribute("width","24"),p.setAttribute("id",A),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{og=!0,o()},p}function f(p,A){p.setAttribute("id",A),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=VI(r),A=n("text"),C=document.getElementById(A)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),S=n("preprendIcon"),w=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const x=p.element;l(x),f(D,N);const V=h();u(w,S),x.append(w,C,D,V),document.body.appendChild(x)}s?(C.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function OI(){var e;const t=(e=Vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UI(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zI(){return!OI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BI(){try{return typeof indexedDB=="object"}catch{return!1}}function $I(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const HI="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new qn(i,l,r)}}function WI(t,e){return t.replace(qI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;function KI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ag(s)&&ag(o)){if(!Rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ag(t){return t!==null&&typeof t=="object"}/**
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
 */function ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function GI(t,e){const n=new QI(t,e);return n.subscribe.bind(n)}class QI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class XI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZI(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JI(t){return t===Qr?void 0:t}function ZI(t){return t.instantiationMode==="EAGER"}/**
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
 */class eS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const tS={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},nS=oe.INFO,rS={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},iS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=nS,this._logHandler=iS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const sS=(t,e)=>e.some(n=>t instanceof n);let lg,ug;function oS(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aS(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,ed=new WeakMap,n0=new WeakMap,Kc=new WeakMap,Ef=new WeakMap;function lS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,t)}).catch(()=>{}),Ef.set(e,t),e}function uS(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cS(t){td=t(td)}function hS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return n0.set(r,e.sort?e.sort():[e]),wr(r)}:aS().includes(t)?function(...e){return t.apply(Gc(this),e),wr(t0.get(this))}:function(...e){return wr(t.apply(Gc(this),e))}}function dS(t){return typeof t=="function"?hS(t):(t instanceof IDBTransaction&&uS(t),sS(t,oS())?new Proxy(t,td):t)}function wr(t){if(t instanceof IDBRequest)return lS(t);if(Kc.has(t))return Kc.get(t);const e=dS(t);return e!==t&&(Kc.set(t,e),Ef.set(e,t)),e}const Gc=t=>Ef.get(t);function fS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const pS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],Qc=new Map;function cg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Qc.set(e,s),s}cS(t=>({...t,get:(e,n,r)=>cg(e,n)||t.get(e,n,r),has:(e,n)=>!!cg(e,n)||t.has(e,n)}));/**
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
 */class gS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",hg="0.14.8";/**
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
 */const Un=new wf("@firebase/app"),_S="@firebase/app-compat",vS="@firebase/analytics-compat",wS="@firebase/analytics",ES="@firebase/app-check-compat",TS="@firebase/app-check",IS="@firebase/auth",SS="@firebase/auth-compat",kS="@firebase/database",xS="@firebase/data-connect",AS="@firebase/database-compat",CS="@firebase/functions",RS="@firebase/functions-compat",PS="@firebase/installations",NS="@firebase/installations-compat",bS="@firebase/messaging",DS="@firebase/messaging-compat",VS="@firebase/performance",LS="@firebase/performance-compat",OS="@firebase/remote-config",MS="@firebase/remote-config-compat",jS="@firebase/storage",FS="@firebase/storage-compat",US="@firebase/firestore",zS="@firebase/ai",BS="@firebase/firestore-compat",$S="firebase",HS="12.9.0";/**
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
 */const rd="[DEFAULT]",WS={[nd]:"fire-core",[_S]:"fire-core-compat",[wS]:"fire-analytics",[vS]:"fire-analytics-compat",[TS]:"fire-app-check",[ES]:"fire-app-check-compat",[IS]:"fire-auth",[SS]:"fire-auth-compat",[kS]:"fire-rtdb",[xS]:"fire-data-connect",[AS]:"fire-rtdb-compat",[CS]:"fire-fn",[RS]:"fire-fn-compat",[PS]:"fire-iid",[NS]:"fire-iid-compat",[bS]:"fire-fcm",[DS]:"fire-fcm-compat",[VS]:"fire-perf",[LS]:"fire-perf-compat",[OS]:"fire-rc",[MS]:"fire-rc-compat",[jS]:"fire-gcs",[FS]:"fire-gcs-compat",[US]:"fire-fst",[BS]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[$S]:"fire-js-all"};/**
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
 */const Jl=new Map,qS=new Map,id=new Map;function dg(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(id.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of Jl.values())dg(n,t);for(const n of qS.values())dg(n,t);return!0}function Tf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const KS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new na("app","Firebase",KS);/**
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
 */class GS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=HS;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Er.create("bad-app-name",{appName:String(i)});if(n||(n=Xv()),!n)throw Er.create("no-options");const s=Jl.get(i);if(s){if(Rr(n,s.options)&&Rr(r,s.config))return s;throw Er.create("duplicate-app",{appName:i})}const o=new eS(i);for(const u of id.values())o.addComponent(u);const l=new GS(n,r,o);return Jl.set(i,l),l}function i0(t=rd){const e=Jl.get(t);if(!e&&t===rd&&Xv())return r0();if(!e)throw Er.create("no-app",{appName:t});return e}function Tr(t,e,n){let r=WS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(o.join(" "));return}hs(new ui(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const QS="firebase-heartbeat-database",YS=1,Bo="firebase-heartbeat-store";let Yc=null;function s0(){return Yc||(Yc=fS(QS,YS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function XS(t){try{const n=(await s0()).transaction(Bo),r=await n.objectStore(Bo).get(o0(t));return await n.done,r}catch(e){if(e instanceof qn)Un.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function fg(t,e){try{const r=(await s0()).transaction(Bo,"readwrite");await r.objectStore(Bo).put(e,o0(t)),await r.done}catch(n){if(n instanceof qn)Un.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JS=1024,ZS=30;class ek{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ZS){const o=rk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pg(),{heartbeatsToSend:r,unsentEntries:i}=tk(this._heartbeatsCache.heartbeats),s=Xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function pg(){return new Date().toISOString().substring(0,10)}function tk(t,e=JS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BI()?$I().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return fg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mg(t){return Xl(JSON.stringify({version:2,heartbeats:t})).length}function rk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ik(t){hs(new ui("platform-logger",e=>new gS(e),"PRIVATE")),hs(new ui("heartbeat",e=>new ek(e),"PRIVATE")),Tr(nd,hg,t),Tr(nd,hg,"esm2020"),Tr("fire-js","")}ik("");var sk="firebase",ok="12.9.0";/**
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
 */Tr(sk,ok,"app");function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ak=a0,l0=new na("auth","Firebase",a0());/**
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
 */const Zl=new wf("@firebase/auth");function lk(t,...e){Zl.logLevel<=oe.WARN&&Zl.warn(`Auth (${Is}): ${t}`,...e)}function yl(t,...e){Zl.logLevel<=oe.ERROR&&Zl.error(`Auth (${Is}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw If(t,...e)}function wn(t,...e){return If(t,...e)}function u0(t,e,n){const r={...ak(),[e]:n};return new na("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return u0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l0.create(t,...e)}function J(t,e,...n){if(!t)throw If(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Bn(t,e){t||bn(e)}/**
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
 */function sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function uk(){return gg()==="http:"||gg()==="https:"}function gg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ck(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uk()||jI()||"connection"in navigator)?navigator.onLine:!0}function hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=LI()||FI()}get(){return ck()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sf(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pk=new ia(3e4,6e4);function Lu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ss(t,e,n,r,i={}){return h0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ra({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return MI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(h.credentials="include"),c0.fetch()(await f0(t,t.config.apiHost,n,l),h)})}async function h0(t,e,n){t._canInitEmulator=!1;const r={...dk,...e};try{const i=new mk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ka(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ka(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw u0(t,f,h);zn(t,f)}}catch(i){if(i instanceof qn)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function d0(t,e,n,r,i={}){const s=await Ss(t,e,n,r,i);return"mfaPendingCredential"in s&&zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function f0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Sf(t.config,i):`${t.config.apiScheme}://${i}`;return fk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class mk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),pk.get())})}}function Ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function gk(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function eu(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yk(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=kf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(Xc(i.auth_time)),issuedAtTime:wo(Xc(i.iat)),expirationTime:wo(Xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function kf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qv(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yg(t){const e=kf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&_k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await $o(t,eu(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?p0(i.providerUserInfo):[],o=Ek(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function wk(t){const e=yt(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ek(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function p0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Tk(t,e){const n=await h0(t,{},async()=>{const r=ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await f0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(u.credentials="include"),c0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ik(t,e){return Ss(t,"POST","/v2/accounts:revokeToken",Lu(t,e))}/**
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
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function er(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new od(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $o(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yk(this,e)}reload(){return wk(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await $o(this,gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:A,providerData:C,stsTokenManager:N}=n;J(m&&N,e,"internal-error");const D=Ji.fromJSON(this.name,N);J(typeof m=="string",e,"internal-error"),er(r,e.name),er(i,e.name),J(typeof p=="boolean",e,"internal-error"),J(typeof A=="boolean",e,"internal-error"),er(s,e.name),er(o,e.name),er(l,e.name),er(u,e.name),er(h,e.name),er(f,e.name);const S=new sn({uid:m,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(S.providerData=C.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?p0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ji;l.updateFromIdToken(r);const u=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const _g=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=_g.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_g.set(t,e),e)}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const vg=m0;/**
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
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_l(this.userKey,i.apiKey,s),this.fullPersistenceKey=_l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await eu(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(Dn(vg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Dn(vg);const o=_l(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const p=await eu(e,{idToken:f}).catch(()=>{});if(!p)break;m=await sn._fromGetAccountInfoResponse(e,p,f)}else m=sn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Zi(s,e,r))}}/**
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
 */function wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(T0(e))return"Webos";if(y0(e))return"Safari";if((e.includes("chrome/")||_0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=gt()){return/firefox\//i.test(t)}function y0(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _0(t=gt()){return/crios\//i.test(t)}function v0(t=gt()){return/iemobile/i.test(t)}function w0(t=gt()){return/android/i.test(t)}function E0(t=gt()){return/blackberry/i.test(t)}function T0(t=gt()){return/webos/i.test(t)}function xf(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sk(t=gt()){var e;return xf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function kk(){return UI()&&document.documentMode===10}function I0(t=gt()){return xf(t)||w0(t)||T0(t)||E0(t)||/windows phone/i.test(t)||v0(t)}/**
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
 */function S0(t,e=[]){let n;switch(t){case"Browser":n=wg(gt());break;case"Worker":n=`${wg(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
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
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Ak(t,e={}){return Ss(t,"GET","/v2/passwordPolicy",Lu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Ck=6;class Rk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ck,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Pk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eg(this),this.idTokenSubscription=new Eg(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eu(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Ir(this));const n=e?yt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ak(this),n=new Rk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ik(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ou(t){return yt(t)}class Eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=GI(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nk(t){Af=t}function bk(t){return Af.loadJS(t)}function Dk(){return Af.gapiScript}function Vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Lk(t,e){const n=Tf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rr(s,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function Ok(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mk(t,e,n){const r=Ou(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=k0(e),{host:o,port:l}=jk(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Rr(h,r.config.emulator)&&Rr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?(Zv(`${s}//${o}${u}`),e0("Auth",!0)):Fk()}function k0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jk(t){const e=k0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Tg(o)}}}function Tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class x0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
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
 */async function es(t,e){return d0(t,"POST","/v1/accounts:signInWithIdp",Lu(t,e))}/**
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
 */const Uk="http://localhost";class ci extends x0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:Uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ra(n)}return e}}/**
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
 */class A0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends A0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends sa{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends sa{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends sa{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function zk(t,e){return d0(t,"POST","/v1/accounts:signUp",Lu(t,e))}/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),o=Ig(r);return new Pr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ig(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ig(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Bk(t){var i;if(rn(t.app))return Promise.reject(Ir(t));const e=Ou(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Pr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await zk(e,{returnSecureToken:!0}),r=await Pr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class nu extends qn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nu(e,n,r,i)}}function C0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nu._fromErrorAndOperation(t,s,e,r):s})}async function $k(t,e,n=!1){const r=await $o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
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
 */async function Hk(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const s=await $o(t,C0(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=kf(s.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Pr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),s}}/**
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
 */async function Wk(t,e,n=!1){if(rn(t.app))return Promise.reject(Ir(t));const r="signIn",i=await C0(t,r,e),s=await Pr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function qk(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function Kk(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function Gk(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}const ru="__sak";/**
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
 */class R0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ru,"1"),this.storage.removeItem(ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Qk=1e3,Yk=10;class P0 extends R0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const Xk=P0;/**
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
 */class N0 extends R0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N0.type="SESSION";const b0=N0;/**
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
 */function Jk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Jk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
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
 */function Cf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Cf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const p=m;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function ex(t){En().location.href=t}/**
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
 */function D0(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function rx(){return D0()?self:null}/**
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
 */const V0="firebaseLocalStorageDb",ix=1,iu="firebaseLocalStorage",L0="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ju(t,e){return t.transaction([iu],e?"readwrite":"readonly").objectStore(iu)}function sx(){const t=indexedDB.deleteDatabase(V0);return new oa(t).toPromise()}function ad(){const t=indexedDB.open(V0,ix);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(iu,{keyPath:L0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(iu)?e(r):(r.close(),await sx(),e(await ad()))})})}async function Sg(t,e,n){const r=ju(t,!0).put({[L0]:e,value:n});return new oa(r).toPromise()}async function ox(t,e){const n=ju(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function kg(t,e){const n=ju(t,!0).delete(e);return new oa(n).toPromise()}const ax=800,lx=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(rx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await tx(),!this.activeServiceWorker)return;this.sender=new Zk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Sg(e,ru,"1"),await kg(e,ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ox(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ju(i,!1).getAll();return new oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ax)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const ux=O0;new ia(3e4,6e4);/**
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
 */function cx(t,e){return e?Dn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rf extends x0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hx(t){return Wk(t.auth,new Rf(t),t.bypassAuthState)}function dx(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Hk(n,new Rf(t),t.bypassAuthState)}async function fx(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),$k(n,new Rf(t),t.bypassAuthState)}/**
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
 */class M0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hx;case"linkViaPopup":case"linkViaRedirect":return fx;case"reauthViaPopup":case"reauthViaRedirect":return dx;default:zn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const px=new ia(2e3,1e4);class Wi extends M0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Cf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,px.get())};e()}}Wi.currentPopupAction=null;/**
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
 */const mx="pendingRedirect",vl=new Map;class gx extends M0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vl.get(this.auth._key());if(!e){try{const r=await yx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vl.set(this.auth._key(),e)}return this.bypassAuthState||vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yx(t,e){const n=wx(e),r=vx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _x(t,e){vl.set(t._key(),e)}function vx(t){return Dn(t._redirectPersistence)}function wx(t){return _l(mx,t.config.apiKey,t.name)}async function Ex(t,e,n=!1){if(rn(t.app))return Promise.reject(Ir(t));const r=Ou(t),i=cx(r,e),o=await new gx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Tx=10*60*1e3;class Ix{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!j0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tx&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function j0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return j0(t);default:return!1}}/**
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
 */async function kx(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
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
 */const xx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ax=/^https?/;async function Cx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kx(t);for(const n of e)try{if(Rx(n))return}catch{}zn(t,"unauthorized-domain")}function Rx(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ax.test(n))return!1;if(xx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Px=new ia(3e4,6e4);function Ag(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nx(t){return new Promise((e,n)=>{var i,s,o;function r(){Ag(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ag(),n(wn(t,"network-request-failed"))},timeout:Px.get()})}if((s=(i=En().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=En().gapi)!=null&&o.load)r();else{const l=Vk("iframefcb");return En()[l]=()=>{gapi.load?r():n(wn(t,"network-request-failed"))},bk(`${Dk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw wl=null,e})}let wl=null;function bx(t){return wl=wl||Nx(t),wl}/**
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
 */const Dx=new ia(5e3,15e3),Vx="__/auth/iframe",Lx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jx(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,Lx):`https://${t.config.authDomain}/${Vx}`,r={apiKey:e.apiKey,appName:t.name,v:Is},i=Mx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ra(r).slice(1)}`}async function Fx(t){const e=await bx(t),n=En().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:jx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},Dx.get());function u(){En().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Ux={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zx=500,Bx=600,$x="_blank",Hx="http://localhost";class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wx(t,e,n,r=zx,i=Bx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Ux,width:r.toString(),height:i.toString(),top:s,left:o},h=gt().toLowerCase();n&&(l=_0(h)?$x:n),g0(h)&&(e=e||Hx,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[A,C])=>`${p}${A}=${C},`,"");if(Sk(h)&&l!=="_self")return qx(e||"",l),new Cg(null);const m=window.open(e||"",l,f);J(m,t,"popup-blocked");try{m.focus()}catch{}return new Cg(m)}function qx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kx="__/auth/handler",Gx="emulator/auth/handler",Qx=encodeURIComponent("fac");async function Rg(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:i};if(e instanceof A0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof sa){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Qx}=${encodeURIComponent(u)}`:"";return`${Yx(t)}?${ra(l).slice(1)}${h}`}function Yx({config:t}){return t.emulator?Sf(t,Gx):`https://${t.authDomain}/${Kx}`}/**
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
 */const Jc="webStorageSupport";class Xx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=Ex,this._overrideRedirectResult=_x}async _openPopup(e,n,r,i){var o;Bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Rg(e,n,r,sd(),i);return Wx(e,s,Cf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rg(e,n,r,sd(),i);return ex(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fx(e),r=new Ix(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Jc];s!==void 0&&n(!!s),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I0()||y0()||xf()}}const Jx=Xx;var Pg="@firebase/auth",Ng="1.12.0";/**
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
 */class Zx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tA(t){hs(new ui("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(t)},h=new Pk(r,i,s,u);return Ok(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new ui("auth-internal",e=>{const n=Ou(e.getProvider("auth").getImmediate());return(r=>new Zx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(Pg,Ng,eA(t)),Tr(Pg,Ng,"esm2020")}/**
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
 */const nA=5*60,rA=Jv("authIdTokenMaxAge")||nA;let bg=null;const iA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rA)return;const i=n==null?void 0:n.token;bg!==i&&(bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sA(t=i0()){const e=Tf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Lk(t,{popupRedirectResolver:Jx,persistence:[ux,Xk,b0]}),r=Jv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=iA(s.toString());Kk(n,o,()=>o(n.currentUser)),qk(n,l=>o(l))}}const i=Yv("auth");return i&&Mk(n,`http://${i}`),n}function oA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Nk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tA("Browser");var Dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sr,F0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(I,k,R){for(var T=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)T[Oe-2]=arguments[Oe];return y.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);const I=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)I[k]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(k=0;k<16;++k)I[k]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],k=v.g[2];let R=v.g[3],T;T=y+(R^E&(k^R))+I[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[3]+3250441966&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[7]+4249261313&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[11]+2304563134&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(R^E&(k^R))+I[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(k^y&(E^k))+I[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=k+(E^R&(y^E))+I[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=E+(y^k&(R^y))+I[15]+1236535329&4294967295,E=k+(T<<22&4294967295|T>>>10),T=y+(k^R&(E^k))+I[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[0]+3921069994&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[4]+3889429448&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[8]+1163531501&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(k^R&(E^k))+I[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^k&(y^E))+I[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=k+(y^E&(R^y))+I[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(k^R))+I[12]+2368359562&4294967295,E=k+(T<<20&4294967295|T>>>12),T=y+(E^k^R)+I[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[14]+4259657740&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[10]+3200236656&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[6]+76029189&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(E^k^R)+I[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^k)+I[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=k+(R^y^E)+I[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=E+(k^R^y)+I[2]+3299628645&4294967295,E=k+(T<<23&4294967295|T>>>9),T=y+(k^(E|~R))+I[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[5]+4237533241&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[1]+2240044497&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[13]+1309151649&4294967295,E=k+(T<<21&4294967295|T>>>11),T=y+(k^(E|~R))+I[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~k))+I[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=k+(y^(R|~E))+I[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=E+(R^(k|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,I=this.C;let k=this.h,R=0;for(;R<y;){if(k==0)for(;R<=E;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(I[k++]=v.charCodeAt(R++),k==this.blockSize){i(this,I),k=0;break}}else for(;R<y;)if(I[k++]=v[R++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)v[y++]=this.g[E]>>>I&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let I=!0;for(let k=v.length-1;k>=0;k--){const R=v[k]|0;I&&R==y||(E[k]=R,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return D(h(-v));const y=[];let E=1;for(let I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return D(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(y,8));let I=m;for(let R=0;R<v.length;R+=8){var k=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+k),y);k<8?(k=h(Math.pow(y,k)),I=I.j(k).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var m=u(0),p=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+D(this).toString(v);const y=h(Math.pow(v,6));var E=this;let I="";for(;;){const k=V(E,y).g;E=S(E,k.j(y));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=k,C(E))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=S(this,v),N(v)?-1:C(v)?0:1};function D(v){const y=v.g.length,E=[];for(let I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(p)}t.abs=function(){return N(this)?D(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let I=0;for(let k=0;k<=y;k++){let R=I+(this.i(k)&65535)+(v.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);I=T>>>16,R&=65535,T&=65535,E[k]=T<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(D(y))}t.j=function(v){if(C(this)||C(v))return m;if(N(this))return N(v)?D(this).j(D(v)):D(D(this).j(v));if(N(v))return D(this.j(D(v)));if(this.l(A)<0&&v.l(A)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<v.g.length;k++){const R=this.i(I)>>>16,T=this.i(I)&65535,Oe=v.i(k)>>>16,It=v.i(k)&65535;E[2*I+2*k]+=T*It,w(E,2*I+2*k),E[2*I+2*k+1]+=R*It,w(E,2*I+2*k+1),E[2*I+2*k+1]+=T*Oe,w(E,2*I+2*k+1),E[2*I+2*k+2]+=R*Oe,w(E,2*I+2*k+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function w(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function x(v,y){this.g=v,this.h=y}function V(v,y){if(C(y))throw Error("division by zero");if(C(v))return new x(m,m);if(N(v))return y=V(D(v),y),new x(D(y.g),D(y.h));if(N(y))return y=V(v,D(y)),new x(D(y.g),y.h);if(v.g.length>30){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=p,I=y;I.l(v)<=0;)E=j(E),I=j(I);var k=z(E,1),R=z(I,1);for(I=z(I,2),E=z(E,2);!C(I);){var T=R.add(I);T.l(v)<=0&&(k=k.add(E),R=T),I=z(I,1),E=z(E,1)}return y=S(v,k.j(y)),new x(k,y)}for(k=m;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(E),T=R.j(y);N(T)||T.l(v)>0;)E-=I,R=h(E),T=R.j(y);C(R)&&(R=p),k=k.add(R),v=S(v,T)}return new x(k,v)}t.B=function(v){return V(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function j(v){const y=v.g.length+1,E=[];for(let I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function z(v,y){const E=y>>5;y%=32;const I=v.g.length-E,k=[];for(let R=0;R<I;R++)k[R]=y>0?v.i(R+E)>>>y|v.i(R+E+1)<<32-y:v.i(R+E);return new o(k,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,F0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Sr=o}).apply(typeof Dg<"u"?Dg:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U0,so,z0,El,ld,B0,$0,H0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,b){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return c.prototype[P].apply(g,B)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function C(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const b=P.length||0;a.length=d+b;for(let B=0;B<b;B++)a[d+B]=P[B]}else a.push(P)}}class N{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const g=x.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var x=new N(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,z=!1,v=new w,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){D(d)}var c=x;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,c){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(Oe,k),Oe.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var It="closure_listenable_"+(Math.random()*1e6|0),Re=0;function ge(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++Re,this.da=this.fa=!1}function U(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function q(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function X(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function de(a){const c={};for(const d in a)c[d]=a[d];return c}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xt(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let b=0;b<ye.length;b++)d=ye[b],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function Ue(a){this.src=a,this.g={},this.h=0}Ue.prototype.add=function(a,c,d,g,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const B=Vt(a,c,g,P);return B>-1?(c=a[B],d||(c.fa=!1)):(c=new ge(c,this.src,b,!!g,P),c.fa=d,a.push(c)),c};function St(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),b;(b=P>=0)&&Array.prototype.splice.call(g,P,1),b&&(U(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Vt(a,c,d,g){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==g)return P}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),Jt={};function vi(a,c,d,g,P){if(Array.isArray(c)){for(let b=0;b<c.length;b++)vi(a,c[b],d,g,P);return null}return d=Ei(d),a&&a[It]?a.J(c,d,l(g)?!!g.capture:!1,P):fa(a,c,d,!1,g,P)}function fa(a,c,d,g,P,b){if(!c)throw Error("Invalid event type");const B=l(P)?!!P.capture:!!P;let ne=wi(a);if(ne||(a[kt]=ne=new Ue(a)),d=ne.add(c,d,g,B,b),d.proxy)return d;if(g=pa(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(P=B),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(Rs(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pa(){function a(d){return c.call(a.src,a.listener,d)}const c=rc;return a}function ma(a,c,d,g,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)ma(a,c[b],d,g,P);else g=l(g)?!!g.capture:!!g,d=Ei(d),a&&a[It]?(a=a.i,b=String(c).toString(),b in a.g&&(c=a.g[b],d=Vt(c,d,g,P),d>-1&&(U(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[b],a.h--)))):a&&(a=wi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Vt(c,d,g,P)),(d=a>-1?c[a]:null)&&xt(d))}function xt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[It])St(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Rs(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=wi(c))?(St(d,a),d.h==0&&(d.src=null,c[kt]=null)):U(a)}}}function Rs(a){return a in Jt?Jt[a]:Jt[a]="on"+a}function rc(a,c){if(a.da)a=!0;else{c=new Oe(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&xt(a),a=d.call(g,c)}return a}function wi(a){return a=a[kt],a instanceof Ue?a:null}var Ps="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ei(a){return typeof a=="function"?a:(a[Ps]||(a[Ps]=function(c){return a.handleEvent(c)}),a[Ps])}function We(){I.call(this),this.i=new Ue(this),this.M=this,this.G=null}m(We,I),We.prototype[It]=!0,We.prototype.removeEventListener=function(a,c,d,g){ma(this,a,c,d,g)};function tt(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new k(c,a);else if(c instanceof k)c.target=c.target||a;else{var P=c;c=new k(g,a),Xt(c,P)}P=!0;let b,B;if(d)for(B=d.length-1;B>=0;B--)b=c.g=d[B],P=lt(b,g,!0,c)&&P;if(b=c.g=a,P=lt(b,g,!0,c)&&P,P=lt(b,g,!1,c)&&P,d)for(B=0;B<d.length;B++)b=c.g=d[B],P=lt(b,g,!1,c)&&P}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)U(d[g]);delete a.g[c],a.h--}}this.G=null},We.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},We.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function lt(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let b=0;b<c.length;++b){const B=c[b];if(B&&!B.da&&B.capture==d){const ne=B.listener,qe=B.ha||B.src;B.fa&&St(a.i,B),P=ne.call(qe,g)!==!1&&P}}return P&&!g.defaultPrevented}function ic(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function ga(a){a.g=ic(()=>{a.g=null,a.i&&(a.i=!1,ga(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ti extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ga(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(a){I.call(this),this.h=a,this.g={}}m(Br,I);var Ii=[];function ya(a){q(a.g,function(c,d){this.g.hasOwnProperty(d)&&xt(c)},a),a.g={}}Br.prototype.N=function(){Br.Z.N.call(this),ya(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=o.JSON.stringify,sc=o.JSON.parse,_a=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function va(){}function bs(){}var M={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Q(){k.call(this,"d")}m(Q,k);function te(){k.call(this,"c")}m(te,k);var ue={},fe=null;function re(){return fe=fe||new We}ue.Ia="serverreachability";function se(a){k.call(this,ue.Ia,a)}m(se,k);function ve(a){const c=re();tt(c,new se(c))}ue.STAT_EVENT="statevent";function Ae(a,c){k.call(this,ue.STAT_EVENT,a),this.stat=c}m(Ae,k);function Ee(a){const c=re();tt(c,new Ae(c,a))}ue.Ja="timingevent";function An(a,c){k.call(this,ue.Ja,a),this.size=c}m(An,k);function Ds(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function xE(a,c,d,g,P,b){a.info(function(){if(a.g)if(b){var B="",ne=b.split("&");for(let _e=0;_e<ne.length;_e++){var qe=ne[_e].split("=");if(qe.length>1){const Xe=qe[0];qe=qe[1];const fn=Xe.split("_");B=fn.length>=2&&fn[1]=="type"?B+(Xe+"="+qe+"&"):B+(Xe+"=redacted&")}}}else B=null;else B=b;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+B})}function AE(a,c,d,g,P,b,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+b+" "+B})}function Si(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+RE(a,d)+(g?" "+g:"")})}function CE(a,c){a.info(function(){return"TIMEOUT: "+c})}Vs.prototype.info=function(){};function RE(a,c){if(!a.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Ns(b)}catch{return c}}var wa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},dp;function oc(){}m(oc,va),oc.prototype.g=function(){return new XMLHttpRequest},dp=new oc;function Ls(a){return encodeURIComponent(String(a))}function PE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Kn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new Br(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fp}function fp(){this.i=null,this.g="",this.h=!1}var pp={},ac={};function lc(a,c,d){a.M=1,a.A=Ta(dn(c)),a.u=d,a.R=!0,mp(a,null)}function mp(a,c){a.F=Date.now(),Ea(a),a.B=dn(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Cp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new fp,a.g=qp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Ti(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ii[0]=P.toString()),P=Ii);for(let b=0;b<P.length;b++){const B=vi(d,P[b],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.J?de(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ve(),xE(a.i,a.v,a.B,a.l,a.S,a.u)}Kn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Yn(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const ne=Yn(this.g),qe=this.g.ya(),_e=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||Lp(this.g)))){this.K||ne!=4||qe==7||(qe==8||_e<=0?ve(3):ve(2)),uc(this);var c=this.g.ca();this.X=c;var d=NE(this);if(this.o=c==200,AE(this.i,this.v,this.B,this.l,this.S,ne,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var b=g;break t}}b=null}if(a=b)Si(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cc(this,a);else{this.o=!1,this.m=3,Ee(12),$r(this),Os(this);break e}}if(this.R){a=!0;let Xe;for(;!this.K&&this.C<d.length;)if(Xe=bE(this,d),Xe==ac){ne==4&&(this.m=4,Ee(14),a=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==pp){this.m=4,Ee(15),Si(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Si(this.i,this.l,Xe,null),cc(this,Xe);if(gp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||d.length!=0||this.h.h||(this.m=1,Ee(16),a=!1),this.o=this.o&&a,!a)Si(this.i,this.l,d,"[Invalid Chunked Response]"),$r(this),Os(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),_c(B),B.P=!0,Ee(11))}}else Si(this.i,this.l,d,null),cc(this,d);ne==4&&$r(this),this.o&&!this.K&&(ne==4?Bp(this.j,this):(this.o=!1,Ea(this)))}else qE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ee(12)):(this.m=0,Ee(13)),$r(this),Os(this)}}}catch{}finally{}};function NE(a){if(!gp(a))return a.g.la();const c=Lp(a.g);if(c==="")return"";let d="";const g=c.length,P=Yn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $r(a),Os(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<g;b++)a.h.h=!0,d+=a.h.i.decode(c[b],{stream:!(P&&b==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function gp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function bE(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?ac:(d=Number(c.substring(d,g)),isNaN(d)?pp:(g+=1,g+d>c.length?ac:(c=c.slice(g,g+d),a.C=g+d,c)))}Kn.prototype.cancel=function(){this.K=!0,$r(this)};function Ea(a){a.T=Date.now()+a.H,yp(a,a.H)}function yp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ds(h(a.aa,a),c)}function uc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(CE(this.i,this.B),this.M!=2&&(ve(),Ee(17)),$r(this),this.m=2,Os(this)):yp(this,this.T-a)};function Os(a){a.j.I==0||a.K||Bp(a.j,a)}function $r(a){uc(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,ya(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function cc(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||hc(d.h,a))){if(!a.L&&hc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Aa(d),ka(d);else break e;yc(d),Ee(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ds(h(d.Va,d),6e3));wp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Wr(d,11)}else if((a.L||d.g==a)&&Aa(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let _e=P[c];const Xe=_e[0];if(!(Xe<=d.K))if(d.K=Xe,_e=_e[1],d.I==2)if(_e[0]=="c"){d.M=_e[1],d.ba=_e[2];const fn=_e[3];fn!=null&&(d.ka=fn,d.j.info("VER="+d.ka));const qr=_e[4];qr!=null&&(d.za=qr,d.j.info("SVER="+d.za));const Xn=_e[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(g=1.5*Xn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Jn=a.g;if(Jn){const Ra=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var b=g.h;b.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(dc(b,b.h),b.h=null))}if(g.G){const vc=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(g.wa=vc,Te(g.J,g.G,vc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var B=a;if(g.na=Wp(g,g.L?g.ba:null,g.W),B.L){Ep(g.h,B);var ne=B,qe=g.O;qe&&(ne.H=qe),ne.D&&(uc(ne),Ea(ne)),g.g=B}else Up(g);d.i.length>0&&xa(d)}else _e[0]!="stop"&&_e[0]!="close"||Wr(d,7);else d.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Wr(d,7):gc(d):_e[0]!="noop"&&d.l&&d.l.qa(_e),d.A=0)}}ve(4)}catch{}}var DE=class{constructor(a,c){this.g=a,this.map=c}};function _p(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wp(a){return a.h?1:a.g?a.g.size:0}function hc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function dc(a,c){a.g?a.g.add(c):a.h=c}function Ep(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}_p.prototype.cancel=function(){if(this.i=Tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var Ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,b=null;g>=0?(P=a[d].substring(0,g),b=a[d].substring(g+1)):P=a[d],c(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Gn?(this.l=a.l,Ms(this,a.j),this.o=a.o,this.g=a.g,js(this,a.u),this.h=a.h,fc(this,Rp(a.i)),this.m=a.m):a&&(c=String(a).match(Ip))?(this.l=!1,Ms(this,c[1]||"",!0),this.o=Fs(c[2]||""),this.g=Fs(c[3]||"",!0),js(this,c[4]),this.h=Fs(c[5]||"",!0),fc(this,c[6]||"",!0),this.m=Fs(c[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}Gn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Us(c,Sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Us(c,Sp,!0),"@"),a.push(Ls(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Us(d,d.charAt(0)=="/"?ME:OE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Us(d,FE)),a.join("")},Gn.prototype.resolve=function(a){const c=dn(this);let d=!!a.j;d?Ms(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)js(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let B=0;B<P.length;){const ne=P[B++];ne=="."?g&&B==P.length&&b.push(""):ne==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),g&&B==P.length&&b.push("")):(b.push(ne),g=!0)}g=b.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?fc(c,Rp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function dn(a){return new Gn(a)}function Ms(a,c,d){a.j=d?Fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function js(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function fc(a,c,d){c instanceof zs?(a.i=c,UE(a.i,a.l)):(d||(c=Us(c,jE)),a.i=new zs(c,a.l))}function Te(a,c,d){a.i.set(c,d)}function Ta(a){return Te(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,LE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function LE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sp=/[#\/\?@]/g,OE=/[#\?:]/g,ME=/[#\?]/g,jE=/[#\?@]/g,FE=/#/g;function zs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Hr(a){a.g||(a.g=new Map,a.h=0,a.i&&VE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=zs.prototype,t.add=function(a,c){Hr(this),this.i=null,a=ki(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function kp(a,c){Hr(a),c=ki(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function xp(a,c){return Hr(a),c=ki(a,c),a.g.has(c)}t.forEach=function(a,c){Hr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function Ap(a,c){Hr(a);let d=[];if(typeof c=="string")xp(a,c)&&(d=d.concat(a.g.get(ki(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Hr(this),this.i=null,a=ki(this,a),xp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Ap(this,a),a.length>0?String(a[0]):c):c};function Cp(a,c,d){kp(a,c),d.length>0&&(a.i=null,a.g.set(ki(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=Ls(d);d=Ap(this,d);for(let b=0;b<d.length;b++){let B=P;d[b]!==""&&(B+="="+Ls(d[b])),a.push(B)}}return this.i=a.join("&")};function Rp(a){const c=new zs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ki(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function UE(a,c){c&&!a.j&&(Hr(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(kp(this,g),Cp(this,P,d))},a)),a.j=c}function zE(a,c){const d=new Vs;if(o.Image){const g=new Image;g.onload=f(Qn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Qn,d,"TestLoadImage: error",!1,c,g),g.onabort=f(Qn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Qn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function BE(a,c){const d=new Vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(P),b.ok?Qn(d,"TestPingServer: ok",!0,c):Qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Qn(d,"TestPingServer: error",!1,c)})}function Qn(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function $E(){this.g=new _a}function pc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(pc,va),pc.prototype.g=function(){return new Ia(this.i,this.h)};function Ia(a,c){We.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ia,We),t=Ia.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Bs(this):$s(this),this.readyState==3&&Pp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Na=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,$s(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Np(a){let c="";return q(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function mc(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Np(d),typeof a=="string"?d!=null&&Ls(d):Te(a,c,d))}function Ve(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ve,We);var HE=/^https?$/i,WE=["POST","PUT"];t=Ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dp.g(),this.g.onreadystatechange=p(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){bp(this,b);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())d.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(WE,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){bp(this,b)}};function bp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Dp(a),Sa(a)}function Dp(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,tt(this,"complete"),tt(this,"abort"),Sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sa(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Vp(this):this.Xa())},t.Xa=function(){Vp(this)};function Vp(a){if(a.h&&typeof s<"u"){if(a.v&&Yn(a)==4)setTimeout(a.Ca.bind(a),0);else if(tt(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=b===0){let B=String(a.D).match(Ip)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!HE.test(B?B.toLowerCase():"")}d=g}if(d)tt(a,"complete"),tt(a,"success");else{a.o=6;try{var P=Yn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Dp(a)}}finally{Sa(a)}}}}function Sa(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||tt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),sc(c)}};function Lp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qE(a){const c={};a=(a.g&&Yn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=PE(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[P]||[];c[P]=b,b.push(d)}X(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Op(a){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hs("baseRetryDelayMs",5e3,a),this.Za=Hs("retryDelaySeedMs",1e4,a),this.Ta=Hs("forwardChannelMaxRetries",2,a),this.va=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new _p(a&&a.concurrentRequestLimit),this.Ba=new $E,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Op.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){Ee(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Wp(this,null,this.W),xa(this)};function gc(a){if(Mp(a),a.I==3){var c=a.V++,d=dn(a.J);if(Te(d,"SID",a.M),Te(d,"RID",c),Te(d,"TYPE","terminate"),Ws(a,d),c=new Kn(a,a.j,c),c.M=2,c.A=Ta(dn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=qp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Ea(c)}Hp(a)}function ka(a){a.g&&(_c(a),a.g.cancel(),a.g=null)}function Mp(a){ka(a),a.v&&(o.clearTimeout(a.v),a.v=null),Aa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function xa(a){if(!vp(a.h)&&!a.m){a.m=!0;var c=a.Ea;j||y(),z||(j(),z=!0),v.add(c,a),a.D=0}}function KE(a,c){return wp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ds(h(a.Ea,a,c),$p(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Kn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=de(b),Xt(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Fp(this,P,c),d=dn(this.J),Te(d,"RID",a),Te(d,"CVER",22),this.G&&Te(d,"X-HTTP-Session-Id",this.G),Ws(this,d),b&&(this.R?c="headers="+Ls(Np(b))+"&"+c:this.u&&mc(d,this.u,b)),dc(this.h,P),this.Ra&&Te(d,"TYPE","init"),this.S?(Te(d,"$req",c),Te(d,"SID","null"),P.U=!0,lc(P,d,null)):lc(P,d,c),this.I=2}}else this.I==3&&(a?jp(this,a):this.i.length==0||vp(this.h)||jp(this))};function jp(a,c){var d;c?d=c.l:d=a.V++;const g=dn(a.J);Te(g,"SID",a.M),Te(g,"RID",d),Te(g,"AID",a.K),Ws(a,g),a.u&&a.o&&mc(g,a.u,a.o),d=new Kn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Fp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),dc(a.h,d),lc(d,g,c)}function Ws(a,c){a.H&&q(a.H,function(d,g){Te(c,g,d)}),a.l&&q({},function(d,g){Te(c,g,d)})}function Fp(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ne=-1;for(;;){const qe=["count="+d];ne==-1?d>0?(ne=P[0].g,qe.push("ofs="+ne)):ne=0:qe.push("ofs="+ne);let _e=!0;for(let Xe=0;Xe<d;Xe++){var b=P[Xe].g;const fn=P[Xe].map;if(b-=ne,b<0)ne=Math.max(0,P[Xe].g-100),_e=!1;else try{b="req"+b+"_"||"";try{var B=fn instanceof Map?fn:Object.entries(fn);for(const[qr,Xn]of B){let Jn=Xn;l(Xn)&&(Jn=Ns(Xn)),qe.push(b+qr+"="+encodeURIComponent(Jn))}}catch(qr){throw qe.push(b+"type="+encodeURIComponent("_badmap")),qr}}catch{g&&g(fn)}}if(_e){B=qe.join("&");break e}}B=void 0}return a=a.i.splice(0,d),c.G=a,B}function Up(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;j||y(),z||(j(),z=!0),v.add(c,a),a.A=0}}function yc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ds(h(a.Da,a),$p(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ds(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ee(10),ka(this),zp(this))};function _c(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zp(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=dn(a.na);Te(c,"RID","rpc"),Te(c,"SID",a.M),Te(c,"AID",a.K),Te(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Te(c,"TO",a.ia),Te(c,"TYPE","xmlhttp"),Ws(a,c),a.u&&a.o&&mc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ta(dn(c)),d.u=null,d.R=!0,mp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ka(this),yc(this),Ee(19))};function Aa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bp(a,c){var d=null;if(a.g==c){Aa(a),_c(a),a.g=null;var g=2}else if(hc(a.h,c))d=c.G,Ep(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=re(),tt(g,new An(g,d)),xa(a)}else Up(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&KE(a,c)||g==2&&yc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function $p(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Wr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new Gn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ms(g,"https"),Ta(g),P?zE(g.toString(),d):BE(g.toString(),d)}else Ee(2);a.I=0,a.l&&a.l.pa(c),Hp(a),Mp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function Hp(a){if(a.I=0,a.ja=[],a.l){const c=Tp(a.h);(c.length!=0||a.i.length!=0)&&(C(a.ja,c),C(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Wp(a,c,d){var g=d instanceof Gn?dn(d):new Gn(d);if(g.g!="")c&&(g.g=c+"."+g.g),js(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const b=new Gn(null);g&&Ms(b,g),c&&(b.g=c),P&&js(b,P),d&&(b.h=d),g=b}return d=a.G,c=a.wa,d&&c&&Te(g,d,c),Te(g,"VER",a.ka),Ws(a,g),g}function qp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ve(new pc({ab:d})):new Ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kp(){}t=Kp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ca(){}Ca.prototype.g=function(a,c){return new Lt(a,c)};function Lt(a,c){We.call(this),this.g=new Op(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new xi(this)}m(Lt,We),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){gc(this.g)},Lt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ns(a),a=d);c.i.push(new DE(c.Ya++,a)),c.I==3&&xa(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,Lt.Z.N.call(this)};function Gp(a){Q.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(Gp,Q);function Qp(){te.call(this),this.status=1}m(Qp,te);function xi(a){this.g=a}m(xi,Kp),xi.prototype.ra=function(){tt(this.g,"a")},xi.prototype.qa=function(a){tt(this.g,new Gp(a))},xi.prototype.pa=function(a){tt(this.g,new Qp)},xi.prototype.oa=function(){tt(this.g,"b")},Ca.prototype.createWebChannel=Ca.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,H0=function(){return new Ca},$0=function(){return re()},B0=ue,ld={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,El=wa,hp.COMPLETE="complete",z0=hp,bs.EventType=M,M.OPEN="a",M.CLOSE="b",M.ERROR="c",M.MESSAGE="d",We.prototype.listen=We.prototype.J,so=bs,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,U0=Ve}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let ks="12.9.0";function aA(t){ks=t}/**
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
 */const hi=new wf("@firebase/firestore");function Ci(){return hi.logLevel}function H(t,...e){if(hi.logLevel<=oe.DEBUG){const n=e.map(Pf);hi.debug(`Firestore (${ks}): ${t}`,...n)}}function $n(t,...e){if(hi.logLevel<=oe.ERROR){const n=e.map(Pf);hi.error(`Firestore (${ks}): ${t}`,...n)}}function di(t,...e){if(hi.logLevel<=oe.WARN){const n=e.map(Pf);hi.warn(`Firestore (${ks}): ${t}`,...n)}}function Pf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,W0(t,r,n)}function W0(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $n(r),new Error(r)}function pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||W0(e,i,r)}function ee(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class uA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cA{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class hA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=pA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ud(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Zc(i)===Zc(s)?ae(i,s):Zc(i)?1:-1}return ae(t.length,e.length)}const mA=55296,gA=57343;function Zc(t){const e=t.charCodeAt(0);return e>=mA&&e<=gA}function ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Lg="__name__";class gn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=gn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=gn.isNumericId(e),i=gn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?gn.extractNumericId(e).compare(gn.extractNumericId(n)):ud(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Sr.fromString(e.substring(4,e.length-2))}}class Se extends gn{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const yA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends gn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return yA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lg}static keyField(){return new it([Lg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}/**
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
 */function K0(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _A(t,e,n,r){if(e===!0&&r===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Og(t){if(!G.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Mg(t){if(G.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function G0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function bf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bf(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function aa(t,e){if(!G0(t))throw new K(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const jg=-62135596800,Fg=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Fg);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<jg)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fg}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(aa(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:$e("string",ke._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ke(0,0))}static max(){return new Z(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ho=-1;function vA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Nr(i,G.empty(),e)}function wA(t){return new Nr(t.readTime,t.key,Ho)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(Z.min(),G.empty(),Ho)}static max(){return new Nr(Z.max(),G.empty(),Ho)}}function EA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const TA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xs(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==TA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function SA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fu.ce=-1;/**
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
 */const Df=-1;function Uu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function kA(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Q0="";function xA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ug(e)),e=AA(t.get(n),e);return Ug(e)}function AA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Q0:n+="";break;default:n+=s}}return n}function Ug(t){return t+Q0+""}/**
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
 */function zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class De{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bg(this.data.getIterator())}getIteratorFrom(e){return new Bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Ye(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class X0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new X0("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const CA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=CA.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */const J0="server_timestamp",Z0="__type__",ew="__previous_value__",tw="__local_write_time__";function Vf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Z0])==null?void 0:r.stringValue)===J0}function zu(t){const e=t.mapValue.fields[ew];return Vf(e)?zu(e):e}function Wo(t){const e=br(t.mapValue.fields[tw].timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class RA{constructor(e,n,r,i,s,o,l,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=m}}const ou="(default)";class qo{constructor(e,n){this.projectId=e,this.database=n||ou}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===ou}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}function PA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(t.options.projectId,e)}/**
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
 */const nw="__type__",NA="__max__",Ya={mapValue:{}},rw="__vector__",au="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vf(t)?4:DA(t)?9007199254740991:bA(t)?10:11:Y(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=br(i.timestampValue),l=br(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Dr(i.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(zg(o)!==zg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!kn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Ko(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return $g(t.timestampValue,e.timestampValue);case 4:return $g(Wo(t),Wo(e));case 5:return ud(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Dr(s),u=Dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Me(s.latitude),Me(o.latitude));return l!==0?l:ae(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var p,A,C,N;const l=s.fields||{},u=o.fields||{},h=(p=l[au])==null?void 0:p.arrayValue,f=(A=u[au])==null?void 0:A.arrayValue,m=ae(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:Hg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ya.mapValue&&o===Ya.mapValue)return 0;if(s===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const p=ud(u[m],f[m]);if(p!==0)return p;const A=fs(l[u[m]],h[f[m]]);if(A!==0)return A}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function $g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=br(t),r=br(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Hg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=fs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function ps(t){return cd(t)}function cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cd(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Tl(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zu(t);return e?16+Tl(e):16;case 5:return 2*t.stringValue.length;case 6:return Dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Tl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ur(r.fields,(s,o)=>{i+=s.length+Tl(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function hd(t){return!!t&&"integerValue"in t}function Lf(t){return!!t&&"arrayValue"in t}function Wg(t){return!!t&&"nullValue"in t}function qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Il(t){return!!t&&"mapValue"in t}function bA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[nw])==null?void 0:r.stringValue)===rw}function Eo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return{...t}}function DA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NA}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Il(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Eo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Il(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ur(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Eo(this.value))}}function iw(t){const e=[];return Ur(t.fields,(n,r)=>{const i=new it([n]);if(Il(r)){const s=iw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,Z.min(),Z.min(),Z.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,Z.min(),Z.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,Z.min(),Z.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lu{constructor(e,n){this.position=e,this.inclusive=n}}function Kg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uu{constructor(e,n="asc"){this.field=e,this.dir=n}}function VA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sw{}class Ge extends sw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OA(e,n,r):n==="array-contains"?new FA(e,r):n==="in"?new UA(e,r):n==="not-in"?new zA(e,r):n==="array-contains-any"?new BA(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new MA(e,r):new jA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fs(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends sw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new xn(e,n)}matches(e){return ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ow(t){return t.op==="and"}function aw(t){return LA(t)&&ow(t)}function LA(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function dd(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(aw(t))return t.filters.map(e=>dd(e)).join(",");{const e=t.filters.map(n=>dd(n)).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.field.isEqual(i.field)&&kn(r.value,i.value)}(t,e):t instanceof xn?function(r,i){return i instanceof xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lw(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function uw(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"}(t):"Filter"}class OA extends Ge{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class MA extends Ge{constructor(e,n){super(e,"in",n),this.keys=cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jA extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class FA extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lf(n)&&Ko(n.arrayValue,this.value)}}class UA extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class zA extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ko(this.value.arrayValue,n)}}class BA extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class $A{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Qg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $A(t,e,n,r,i,s,o)}function Of(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.Te=n}return e.Te}function Mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gg(t.startAt,e.startAt)&&Gg(t.endAt,e.endAt)}function fd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function HA(t,e,n,r,i,s,o,l){return new Bu(t,e,n,r,i,s,o,l)}function $u(t){return new Bu(t)}function Yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WA(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function qA(t){return t.collectionGroup!==null}function To(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new uu(s,r))}),n.has(it.keyField().canonicalString())||e.Ie.push(new uu(it.keyField(),r))}return e.Ie}function Tn(t){const e=ee(t);return e.Ee||(e.Ee=KA(e,To(t))),e.Ee}function KA(t,e){if(t.limitType==="F")return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new uu(i.field,s)});const n=t.endAt?new lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lu(t.startAt.position,t.startAt.inclusive):null;return Qg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pd(t,e,n){return new Bu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hu(t,e){return Mf(Tn(t),Tn(e))&&t.limitType===e.limitType}function hw(t){return`${Of(Tn(t))}|lt:${t.limitType}`}function Ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uw(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ps(i)).join(",")),`Target(${r})`}(Tn(t))}; limitType=${t.limitType})`}function Wu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of To(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Kg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,To(r),i)||r.endAt&&!function(o,l,u){const h=Kg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,To(r),i))}(t,e)}function GA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dw(t){return(e,n)=>{let r=!1;for(const i of To(t)){const s=QA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QA(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?fs(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
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
 */const YA=new De(G.comparator);function Hn(){return YA}const fw=new De(G.comparator);function oo(...t){let e=fw;for(const n of t)e=e.insert(n.key,n);return e}function pw(t){let e=fw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return Io()}function mw(){return Io()}function Io(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const XA=new De(G.comparator),JA=new Ye(G.comparator);function le(...t){let e=JA;for(const n of t)e=e.add(n);return e}const ZA=new Ye(ae);function eC(){return ZA}/**
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
 */function jf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function gw(t){return{integerValue:""+t}}function tC(t,e){return kA(e)?gw(e):jf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qu{constructor(){this._=void 0}}function nC(t,e,n){return t instanceof cu?function(i,s){const o={fields:{[Z0]:{stringValue:J0},[tw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vf(s)&&(s=zu(s)),s&&(o.fields[ew]=s),{mapValue:o}}(n,e):t instanceof ms?_w(t,e):t instanceof Go?vw(t,e):function(i,s){const o=yw(i,s),l=Xg(o)+Xg(i.Ae);return hd(o)&&hd(i.Ae)?gw(l):jf(i.serializer,l)}(t,e)}function rC(t,e,n){return t instanceof ms?_w(t,e):t instanceof Go?vw(t,e):n}function yw(t,e){return t instanceof hu?function(r){return hd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class cu extends qu{}class ms extends qu{constructor(e){super(),this.elements=e}}function _w(t,e){const n=ww(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends qu{constructor(e){super(),this.elements=e}}function vw(t,e){let n=ww(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class hu extends qu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xg(t){return Me(t.integerValue||t.doubleValue)}function ww(t){return Lf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iC{constructor(e,n){this.field=e,this.transform=n}}function sC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ms&&i instanceof ms||r instanceof Go&&i instanceof Go?ds(r.elements,i.elements,kn):r instanceof hu&&i instanceof hu?kn(r.Ae,i.Ae):r instanceof cu&&i instanceof cu}(t.transform,e.transform)}class oC{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ku{}function Ew(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iw(t.key,un.none()):new la(t.key,t.data,un.none());{const n=t.data,r=Rt.empty();let i=new Ye(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Ft(i.toArray()),un.none())}}function aC(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=Zg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!Sl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Tw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!Sl(s.precondition,o))return l;const h=s.value.clone(),f=ey(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,l,u){if(!Sl(s.precondition,o))return l;const h=ey(s.fieldTransforms,u,o),f=o.data;return f.setAll(Tw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return Sl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yw(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Jg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ds(r,i,(s,o)=>sC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Ku{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Ku{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Tw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zg(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rC(o,l,n[i]))}return r}function ey(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nC(s,o,e))}return r}class Iw extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends Ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Ew(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Jg(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Jg(n,r))}}class Ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return XA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ff(e,n,r,i)}}/**
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
 */class hC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class dC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ce;function fC(t){switch(t){case O.OK:return Y(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function Sw(t){if(t===void 0)return $n("GRPC error has no .code"),O.UNKNOWN;switch(t){case ze.OK:return O.OK;case ze.CANCELLED:return O.CANCELLED;case ze.UNKNOWN:return O.UNKNOWN;case ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ze.INTERNAL:return O.INTERNAL;case ze.UNAVAILABLE:return O.UNAVAILABLE;case ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ze.NOT_FOUND:return O.NOT_FOUND;case ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ze.ABORTED:return O.ABORTED;case ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ze.DATA_LOSS:return O.DATA_LOSS;default:return Y(39323,{code:t})}}(ce=ze||(ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function pC(){return new TextEncoder}/**
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
 */const mC=new Sr([4294967295,4294967295],0);function ty(t){const e=pC().encode(t),n=new F0;return n.update(e),new Uint8Array(n.digest())}function ny(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Sr([n,r],0),new Sr([i,s],0)]}class Uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Sr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Sr.fromNumber(r)));return i.compare(mC)===1&&(i=new Sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ty(e),[r,i]=ny(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=ty(e),[r,i]=ny(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gu(Z.min(),i,new De(ae),Hn(),le())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,le(),le(),le())}}/**
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
 */class kl{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=i}}class kw{constructor(e,n){this.targetId=e,this.Ce=n}}class xw{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ry{constructor(){this.ve=0,this.Fe=iy(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new ua(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=iy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class gC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hn(),this.He=Xa(),this.Je=Xa(),this.Ze=new De(ae)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(fd(s))if(r===0){const o=new G(s.path);this.et(n,o,pt.newNoDocument(o,Z.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Dr(r).toUint8Array()}catch(u){if(u instanceof X0)return di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Uf(o,i,s)}catch(u){return di(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&fd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=le();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Gu(e,n,this.Ze,this.je,r);return this.je=Hn(),this.He=Xa(),this.Je=Xa(),this.Ze=new De(ae),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ry,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ye(ae),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ye(ae),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ry),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new De(G.comparator)}function iy(){return new De(G.comparator)}const yC={asc:"ASCENDING",desc:"DESCENDING"},_C={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vC={and:"AND",or:"OR"};class wC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function md(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EC(t,e){return du(t,e.toTimestamp())}function In(t){return pe(!!t,49232),Z.fromTimestamp(function(n){const r=br(n);return new ke(r.seconds,r.nanos)}(t))}function zf(t,e){return gd(t,e).canonicalString()}function gd(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Cw(t){const e=Se.fromString(t);return pe(Dw(e),10190,{key:e.toString()}),e}function yd(t,e){return zf(t.databaseId,e.path)}function eh(t,e){const n=Cw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(Pw(n))}function Rw(t,e){return zf(t.databaseId,e)}function TC(t){const e=Cw(t);return e.length===4?Se.emptyPath():Pw(e)}function _d(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pw(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sy(t,e,n){return{name:yd(t,e),fields:n.value.mapValue.fields}}function IC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string",58123),at.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Sw(h.code);return new K(f,h.message||"")}(o);n=new xw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=eh(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):Z.min(),l=new Rt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new kl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=eh(t,r.document),s=r.readTime?In(r.readTime):Z.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new kl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=eh(t,r.document),s=r.removedTargetIds||[];n=new kl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dC(i,s),l=r.targetId;n=new kw(l,o)}}return n}function SC(t,e){let n;if(e instanceof la)n={update:sy(t,e.key,e.value)};else if(e instanceof Iw)n={delete:yd(t,e.key)};else if(e instanceof zr)n={update:sy(t,e.key,e.data),updateMask:DC(e.fieldMask)};else{if(!(e instanceof uC))return Y(16599,{dt:e.type});n={verify:yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof cu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function kC(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?In(i.updateTime):In(s);return o.isEqual(Z.min())&&(o=In(s)),new oC(o,i.transformResults||[])}(n,e))):[]}function xC(t,e){return{documents:[Rw(t,e.path)]}}function AC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rw(t,i);const s=function(h){if(h.length!==0)return bw(xn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:Pi(p.field),direction:PC(p.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=md(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function CC(t){let e=TC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const p=Nw(m);return p instanceof xn&&aw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(p=>function(C){return new uu(Ni(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(m){let p;return p=typeof m=="object"?m.value:m,Uu(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(m){const p=!!m.before,A=m.values||[];return new lu(A,p)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const p=!m.before,A=m.values||[];return new lu(A,p)}(n.endAt)),HA(e,i,o,s,l,"F",u,h)}function RC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>Nw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function PC(t){return yC[t]}function NC(t){return _C[t]}function bC(t){return vC[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return it.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof Ge?function(n){if(n.op==="=="){if(qg(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(Wg(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qg(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(Wg(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:NC(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(i=>bw(i));return r.length===1?r[0]:{compositeFilter:{op:bC(n.op),filters:r}}}(t):Y(54877,{filter:t})}function DC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Vw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class hr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VC{constructor(e){this.yt=e}}function LC(t){const e=CC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pd(e,e.limit,"L"):e}/**
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
 */class OC{constructor(){this.Sn=new MC}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Nr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class MC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const oy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lw=41943040;class At{static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Lw,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class gs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new gs(0)}static ar(){return new gs(-1)}}/**
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
 */const ay="LruGarbageCollector",jC=1048576;function ly([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class FC{constructor(e){this.Pr=e,this.buffer=new Ye(ly),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ly(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(ay,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?H(ay,"Ignoring IndexedDB error during garbage collection: ",n):await xs(n)}await this.Ar(3e5)})}}class zC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Fu.ce);const r=new FC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(oy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ci()<=oe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function BC(t,e){return new zC(t,e)}/**
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
 */class $C{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&So(r.mutation,i,Ft.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Hn();const o=Io(),l=function(){return Io()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof zr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),So(f.mutation,h,f.mutation.getFieldMask(),ke.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new HC(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Io();let i=new De((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ft.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=mw();f.forEach(p=>{if(!s.has(p)){const A=Ew(n.get(p),r.get(p));A!==null&&m.set(p,A),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return WA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Zr());let l=Ho,u=s;return o.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:pw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(m,p){return new Bu(p,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,p)=>{o=o.insert(m,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let l=oo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&So(f.mutation,h,Ft.empty(),ke.now()),Wu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class qC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:In(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:LC(i.bundledQuery),readTime:In(i.readTime)}}(n)),L.resolve()}}/**
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
 */class KC{constructor(){this.overlays=new De(G.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Zr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hC(n,r));let s=this.Lr.get(n);s===void 0&&(s=le(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class GC{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Bf{constructor(){this.kr=new Ye(Je.Kr),this.qr=new Ye(Je.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Je(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Je(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new Se([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new Se([])),r=new Je(n,e),i=new Je(n,e+1);let s=le();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||ae(e.Hr,n.Hr)}static Ur(e,n){return ae(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
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
 */class QC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ye(Je.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Df:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ae);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Je(new G(s),0);let l=new Ye(ae);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Je(n,0),i=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YC{constructor(e){this.ti=e,this.docs=function(){return new De(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||EA(wA(f),r)<=0||(i.has(f.key)||Wu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XC(this)}getSize(e){return L.resolve(this.size)}}class XC extends $C{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class JC{constructor(e){this.persistence=e,this.ri=new yi(n=>Of(n),Mf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.ii=0,this.si=new Bf,this.targetCount=0,this.oi=gs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class Ow{constructor(e,n){this._i={},this.overlays={},this.ai=new Fu(0),this.ui=!1,this.ui=!0,this.ci=new GC,this.referenceDelegate=e(this),this.li=new JC(this),this.indexManager=new OC,this.remoteDocumentCache=function(i){return new YC(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new VC(n),this.Pi=new qC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new QC(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new ZC(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class ZC extends IA{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Ri=new Bf,this.Ai=null}static Vi(e){return new $f(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=G.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class fu{constructor(e,n){this.persistence=e,this.fi=new yi(r=>xA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=BC(this,n)}static Vi(e,n){return new fu(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Tl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class e2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class t2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return zI()?8:SA(gt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new e2;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ci()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Ci()<=oe.DEBUG&&H("QueryEngine","Query:",Ri(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ci()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tn(n))):L.resolve())}gs(e,n){if(Yg(n))return L.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pd(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,pd(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Yg(n)||i.isEqual(Z.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ss(n,o,r,i)?L.resolve(null):(Ci()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ri(n)),this.Ds(e,o,n,vA(i,Ho)).next(l=>l))})}bs(e,n){let r=new Ye(dw(e));return n.forEach((i,s)=>{Wu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Ci()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ri(n)),this.fs.getDocumentsMatchingQuery(e,n,Nr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Wf="LocalStore",n2=3e8;class r2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new De(ae),this.Fs=new yi(s=>Of(s),Mf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function i2(t,e,n,r){return new r2(t,e,n,r)}async function Mw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function s2(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,p=m.keys();let A=L.resolve();return p.forEach(C=>{A=A.next(()=>f.getEntry(u,C)).next(N=>{const D=h.docVersions.get(C);pe(D!==null,48541),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function o2(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const p=i.get(m);if(!p)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,m)));let A=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(N,D,S){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=n2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,A,f)&&l.push(n.li.updateTargetData(s,A))});let u=Hn(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(a2(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Z.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function a2(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Wf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function l2(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Df),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function u2(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function vd(t,e,n){const r=ee(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!As(o))throw o;H(Wf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function uy(t,e,n){const r=ee(t);let i=Z.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=ee(u),p=m.Fs.get(f);return p!==void 0?L.resolve(m.vs.get(p)):m.li.getTargetData(h,f)}(r,o,Tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:le())).next(l=>(c2(r,GA(e),l),{documents:l,ks:s})))}function c2(t,e,n){let r=t.Ms.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class cy{constructor(){this.activeTargetIds=eC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class h2{constructor(){this.vo=new cy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class d2{Mo(e){}shutdown(){}}/**
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
 */const hy="ConnectivityMonitor";class dy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(hy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(hy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ja=null;function wd(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
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
 */const th="RestConnection",f2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class p2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===ou?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=wd(),l=this.Qo(e,n.toUriEncodedString());H(th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=Ts(h);return this.zo(e,l,u,r,f).then(m=>(H(th,`Received RPC '${e}' ${o}: `,m),m),m=>{throw di(th,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=f2[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class m2{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ht="WebChannelConnection",eo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ts extends p2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ts.c_){const e=$0();eo(e,B0.STAT_EVENT,n=>{n.stat===ld.PROXY?H(ht,"STAT_EVENT: detected buffering proxy"):n.stat===ld.NOPROXY&&H(ht,"STAT_EVENT: detected no buffering proxy")}),ts.c_=!0}}zo(e,n,r,i,s){const o=wd();return new Promise((l,u)=>{const h=new U0;h.setWithCredentials(!0),h.listenOnce(z0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case El.NO_ERROR:const m=h.getResponseJson();H(ht,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case El.TIMEOUT:H(ht,`RPC '${e}' ${o} timed out`),u(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const p=h.getStatus();if(H(ht,`RPC '${e}' ${o} failed with status:`,p,"response text:",h.getResponseText()),p>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const N=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(C.status);u(new K(N,C.message))}else u(new K(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new K(O.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(ht,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);H(ht,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=wd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");H(ht,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let m=!1,p=!1;const A=new m2({Ho:C=>{p?H(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(H(ht,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(ht,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Jo:()=>f.close()});return eo(f,so.EventType.OPEN,()=>{p||(H(ht,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),eo(f,so.EventType.CLOSE,()=>{p||(p=!0,H(ht,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(f))}),eo(f,so.EventType.ERROR,C=>{p||(p=!0,di(ht,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),A.o_(new K(O.UNAVAILABLE,"The operation could not be completed")))}),eo(f,so.EventType.MESSAGE,C=>{var N;if(!p){const D=C.data[0];pe(!!D,16349);const S=D,w=(S==null?void 0:S.error)||((N=S[0])==null?void 0:N.error);if(w){H(ht,`RPC '${e}' stream ${i} received error:`,w);const x=w.status;let V=function(v){const y=ze[v];if(y!==void 0)return Sw(y)}(x),j=w.message;x==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&di(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=O.INTERNAL,j="Unknown error status: "+x+" with message "+w.message),p=!0,A.o_(new K(V,j)),f.close()}else H(ht,`RPC '${e}' stream ${i} received:`,D),A.__(D)}}),ts.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return H0()}}/**
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
 */function g2(t){return new ts(t)}function nh(){return typeof document<"u"?document:null}/**
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
 */function Qu(t){return new wC(t,!0)}/**
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
 */ts.c_=!1;class Fw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const fy="PersistentStream";class Uw{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Fw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.H_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(fy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(fy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class y2 extends Uw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=IC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?In(o.readTime):Z.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=_d(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=fd(u)?{documents:xC(s,u)}:{query:AC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Aw(s,o.resumeToken);const h=md(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=du(s,o.snapshotVersion.toTimestamp());const h=md(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=RC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=_d(this.serializer),n.removeTarget=e,this.K_(n)}}class _2 extends Uw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=kC(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=_d(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SC(this.serializer,r))};this.K_(n)}}/**
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
 */class v2{}class w2 extends v2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,gd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,gd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function E2(t,e,n,r){return new w2(t,e,n,r)}class T2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($n(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fi="RemoteStore";class I2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{_i(this)&&(H(fi,"Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.Ea.add(4),await ca(h),h.Va.set("Unknown"),h.Ea.delete(4),await Yu(h)}(this))})}),this.Va=new T2(r,i)}}async function Yu(t){if(_i(t))for(const e of t.Ra)await e(!0)}async function ca(t){for(const e of t.Ra)await e(!1)}function zw(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Qf(n)?Gf(n):Cs(n).O_()&&Kf(n,e))}function qf(t,e){const n=ee(t),r=Cs(n);n.Ia.delete(e),r.O_()&&Bw(n,e),n.Ia.size===0&&(r.O_()?r.L_():_i(n)&&n.Va.set("Unknown"))}function Kf(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Cs(t).Z_(e)}function Bw(t,e){t.da.$e(e),Cs(t).X_(e)}function Gf(t){t.da=new gC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Cs(t).start(),t.Va.ua()}function Qf(t){return _i(t)&&!Cs(t).x_()&&t.Ia.size>0}function _i(t){return ee(t).Ea.size===0}function $w(t){t.da=void 0}async function S2(t){t.Va.set("Online")}async function k2(t){t.Ia.forEach((e,n)=>{Kf(t,e)})}async function x2(t,e){$w(t),Qf(t)?(t.Va.ha(e),Gf(t)):t.Va.set("Unknown")}async function A2(t,e,n){if(t.Va.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){H(fi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof kl?t.da.Xe(e):e instanceof kw?t.da.st(e):t.da.tt(e),!n.isEqual(Z.min()))try{const r=await jw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),Bw(s,u);const m=new hr(f.target,u,h,f.sequenceNumber);Kf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(fi,"Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!As(e))throw e;t.Ea.add(1),await ca(t),t.Va.set("Offline"),n||(n=()=>jw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(fi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Yu(t)})}function Hw(t,e){return e().catch(n=>pu(t,n,e))}async function Xu(t){const e=ee(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Df;for(;C2(e);)try{const i=await l2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,R2(e,i)}catch(i){await pu(e,i)}Ww(e)&&qw(e)}function C2(t){return _i(t)&&t.Ta.length<10}function R2(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Ww(t){return _i(t)&&!Lr(t).x_()&&t.Ta.length>0}function qw(t){Lr(t).start()}async function P2(t){Lr(t).ra()}async function N2(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function b2(t,e,n){const r=t.Ta.shift(),i=Ff.from(r,e,n);await Hw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xu(t)}async function D2(t,e){e&&Lr(t).Y_&&await async function(r,i){if(function(o){return fC(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();Lr(r).B_(),await Hw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xu(r)}}(t,e),Ww(t)&&qw(t)}async function py(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H(fi,"RemoteStore received new credentials");const r=_i(n);n.Ea.add(3),await ca(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Yu(n)}async function V2(t,e){const n=ee(t);e?(n.Ea.delete(2),await Yu(n)):e||(n.Ea.add(2),await ca(n),n.Va.set("Unknown"))}function Cs(t){return t.ma||(t.ma=function(n,r,i){const s=ee(n);return s.sa(),new y2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:S2.bind(null,t),Yo:k2.bind(null,t),t_:x2.bind(null,t),J_:A2.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Qf(t)?Gf(t):t.Va.set("Unknown")):(await t.ma.stop(),$w(t))})),t.ma}function Lr(t){return t.fa||(t.fa=function(n,r,i){const s=ee(n);return s.sa(),new _2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:P2.bind(null,t),t_:D2.bind(null,t),ta:N2.bind(null,t),na:b2.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Xu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(fi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Yf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Yf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if($n("AsyncQueue",`${e}: ${t}`),As(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ns{static emptySet(e){return new ns(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new De(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class my{constructor(){this.ga=new De(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ys(e,n,ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class L2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class O2{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=gy(),s.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new K(O.ABORTED,"Firestore shutting down"))}}function gy(){return new yi(t=>hw(t),Hu)}async function Kw(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new L2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Xf(o,`Initialization of query '${Ri(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Jf(n)}async function Gw(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function M2(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ba)l.Fa(i)&&(r=!0);o.wa=i}}r&&Jf(n)}function j2(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function Jf(t){t.Ca.forEach(e=>{e.next()})}var Ed,yy;(yy=Ed||(Ed={})).Ma="default",yy.Cache="cache";class Qw{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ed.Cache}}/**
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
 */class Yw{constructor(e){this.key=e}}class Xw{constructor(e){this.key=e}}class F2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=le(),this.mutatedKeys=le(),this.eu=dw(e),this.tu=new ns(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new my,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const p=i.get(f),A=Wu(this.query,m)?m:null,C=!!p&&this.mutatedKeys.has(p.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;p&&A?p.data.isEqual(A.data)?C!==N&&(r.track({type:3,doc:A}),D=!0):this.su(p,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!p&&A?(r.track({type:0,doc:A}),D=!0):p&&!A&&(r.track({type:1,doc:p}),D=!0,(u||h)&&(l=!0)),D&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(A,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:D})}};return N(A)-N(C)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new ys(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new my,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Xw(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Yw(r))}),n}cu(e){this.Za=e.ks,this.Ya=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Zf="SyncEngine";class U2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class z2{constructor(e){this.key=e,this.hu=!1}}class B2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>hw(l),Hu),this.Iu=new Map,this.Eu=new Set,this.Ru=new De(G.comparator),this.Au=new Map,this.Vu=new Bf,this.du={},this.mu=new Map,this.fu=gs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $2(t,e,n=!0){const r=rE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Jw(r,e,n,!0),i}async function H2(t,e){const n=rE(t);await Jw(n,e,!0,!1)}async function Jw(t,e,n,r){const i=await u2(t.localStore,Tn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await W2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&zw(t.remoteStore,i),l}async function W2(t,e,n,r,i){t.pu=(m,p,A)=>async function(N,D,S,w){let x=D.view.ru(S);x.Ss&&(x=await uy(N.localStore,D.query,!1).then(({documents:v})=>D.view.ru(v,x)));const V=w&&w.targetChanges.get(D.targetId),j=w&&w.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(x,N.isPrimaryClient,V,j);return vy(N,D.targetId,z.au),z.snapshot}(t,m,p,A);const s=await uy(t.localStore,e,!0),o=new F2(e,s.ks),l=o.ru(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);vy(t,n,h.au);const f=new U2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function q2(t,e,n){const r=ee(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Hu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&qf(r.remoteStore,i.targetId),Td(r,i.targetId)}).catch(xs)):(Td(r,i.targetId),await vd(r.localStore,i.targetId,!0))}async function K2(t,e){const n=ee(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qf(n.remoteStore,r.targetId))}async function G2(t,e,n){const r=tR(t);try{const i=await function(o,l){const u=ee(o),h=ke.now(),f=l.reduce((A,C)=>A.add(C.key),le());let m,p;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let C=Hn(),N=le();return u.xs.getEntries(A,f).next(D=>{C=D,C.forEach((S,w)=>{w.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,C)).next(D=>{m=D;const S=[];for(const w of l){const x=lC(w,m.get(w.key).overlayedDocument);x!=null&&S.push(new zr(w.key,x,iw(x.value.mapValue),un.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(D=>{p=D;const S=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(A,D.batchId,S)})}).then(()=>({batchId:p.batchId,changes:pw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new De(ae)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,i.batchId,n),await ha(r,i.changes),await Xu(r.remoteStore)}catch(i){const s=Xf(i,"Failed to persist write");n.reject(s)}}async function Zw(t,e){const n=ee(t);try{const r=await o2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?pe(o.hu,14607):i.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await ha(n,r,e)}catch(r){await xs(r)}}function _y(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const p of m.ba)p.va(l)&&(h=!0)}),h&&Jf(u)}(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q2(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new De(G.comparator);o=o.insert(s,pt.newNoDocument(s,Z.min()));const l=le().add(s),u=new Gu(Z.min(),new Map,new De(ae),o,l);await Zw(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),ep(r)}else await vd(r.localStore,e,!1).then(()=>Td(r,e,n)).catch(xs)}async function Y2(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await s2(n.localStore,e);tE(n,r,null),eE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await xs(i)}}async function X2(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(pe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);tE(r,e,n),eE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await xs(i)}}function eE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function tE(t,e,n){const r=ee(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||nE(t,r)})}function nE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(qf(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ep(t))}function vy(t,e,n){for(const r of n)r instanceof Yw?(t.Vu.addReference(r.key,e),J2(t,r)):r instanceof Xw?(H(Zf,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||nE(t,r.key)):Y(19791,{wu:r})}function J2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(Zf,"New document in limbo: "+n),t.Eu.add(r),ep(t))}function ep(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(Se.fromString(e)),r=t.fu.next();t.Au.set(r,new z2(n)),t.Ru=t.Ru.insert(n,r),zw(t.remoteStore,new hr(Tn($u(n.path)),r,"TargetPurposeLimboResolution",Fu.ce))}}async function ha(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Hf.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,p=>L.forEach(p.Ts,A=>f.persistence.referenceDelegate.addReference(m,p.targetId,A)).next(()=>L.forEach(p.Is,A=>f.persistence.referenceDelegate.removeReference(m,p.targetId,A)))))}catch(m){if(!As(m))throw m;H(Wf,"Failed to update sequence numbers: "+m)}for(const m of h){const p=m.targetId;if(!m.fromCache){const A=f.vs.get(p),C=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(p,N)}}}(r.localStore,s))}async function Z2(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H(Zf,"User change. New user:",e.toKey());const r=await Mw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(O.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.Ns)}}function eR(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function rE(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q2.bind(null,e),e.Pu.J_=M2.bind(null,e.eventManager),e.Pu.yu=j2.bind(null,e.eventManager),e}function tR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Y2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X2.bind(null,e),e}class mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return i2(this.persistence,new t2,e.initialUser,this.serializer)}Cu(e){return new Ow($f.Vi,this.serializer)}Du(e){return new h2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mu.provider={build:()=>new mu};class nR extends mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Ow(r=>fu.Vi(r,n),this.serializer)}}class Id{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z2.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new O2}()}createDatastore(e){const n=Qu(e.databaseInfo.databaseId),r=g2(e.databaseInfo);return E2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new I2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>_y(this.syncEngine,n,0),function(){return dy.v()?new dy:new d2}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new B2(i,s,o,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H(fi,"RemoteStore shutting down."),s.Ea.add(5),await ca(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Id.provider={build:()=>new Id};/**
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
 */class iE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Or="FirestoreClient";class rR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iR(t);H(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>py(e.remoteStore,i)),t._onlineComponents=e}async function iR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Or,"Using user provided OfflineComponentProvider");try{await rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;di("Error using user provided cache. Falling back to memory cache: "+n),await rh(t,new mu)}}else H(Or,"Using default OfflineComponentProvider"),await rh(t,new nR(void 0));return t._offlineComponents}async function sE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Or,"Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(H(Or,"Using default OnlineComponentProvider"),await wy(t,new Id))),t._onlineComponents}function sR(t){return sE(t).then(e=>e.syncEngine)}async function Sd(t){const e=await sE(t),n=e.eventManager;return n.onListen=$2.bind(null,e.syncEngine),n.onUnlisten=q2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=K2.bind(null,e.syncEngine),n}function oR(t,e,n,r){const i=new iE(r),s=new Qw(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Kw(await Sd(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>Gw(await Sd(t),s))}}function aR(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new iE({next:p=>{f.Nu(),o.enqueueAndForget(()=>Gw(s,m));const A=p.docs.has(l);!A&&p.fromCache?h.reject(new K(O.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&p.fromCache&&u&&u.source==="server"?h.reject(new K(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),m=new Qw($u(l.path),f,{includeMetadataChanges:!0,Ka:!0});return Kw(s,m)}(await Sd(t),t.asyncQueue,e,n,r)),r.promise}function lR(t,e){const n=new kr;return t.asyncQueue.enqueueAndForget(async()=>G2(await sR(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function oE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const uR="ComponentProvider",Ey=new Map;function cR(t,e,n,r,i){return new RA(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,oE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const aE="firestore.googleapis.com",Ty=!0;class Iy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aE,this.ssl=Ty}else this.host=e.host,this.ssl=e.ssl??Ty;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jC)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_A("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Iy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Iy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lA;switch(r.type){case"firstParty":return new dA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ey.get(n);r&&(H(uR,"Removing Datastore"),Ey.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){var h;t=ln(t,Ju);const i=Ts(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Zv(`https://${l}`),e0("Firestore",!0)),s.host!==aE&&s.host!==l&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Rr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=dt.MOCK_USER;else{f=bI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new dt(p)}t._authCredentials=new uA(new q0(f,m))}}/**
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
 */class Zu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zu(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(aa(n,Fe._jsonSchema))return new Fe(e,r||null,new G(Se.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:$e("string",Fe._jsonSchemaVersion),referencePath:$e("string")};class xr extends Zu{constructor(e,n,r){super(e,n,$u(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new G(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function Vn(t,e,...n){if(t=yt(t),K0("collection","path",e),t instanceof Ju){const r=Se.fromString(e,...n);return Mg(r),new xr(t,null,r)}{if(!(t instanceof Fe||t instanceof xr))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Mg(r),new xr(t.firestore,null,r)}}function _s(t,e,...n){if(t=yt(t),arguments.length===1&&(e=Nf.newId()),K0("doc","path",e),t instanceof Ju){const r=Se.fromString(e,...n);return Og(r),new Fe(t,null,new G(r))}{if(!(t instanceof Fe||t instanceof xr))throw new K(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Og(r),new Fe(t.firestore,t instanceof xr?t.converter:null,new G(r))}}/**
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
 */const Sy="AsyncQueue";class ky{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Fw(this,"async_queue_retry"),this._c=()=>{const r=nh();r&&H(Sy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new kr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;H(Sy,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$n("INTERNAL UNHANDLED ERROR: ",xy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Yf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Y(47125,{Pc:xy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function xy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pi extends Ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ky,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ky(e),this._firestoreClient=void 0,await e}}}function dR(t,e){const n=typeof t=="object"?t:i0(),r=typeof t=="string"?t:ou,i=Tf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PI("firestore");s&&hR(i,...s)}return i}function tp(t){if(t._terminated)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fR(t),t._firestoreClient}function fR(t){var r,i,s,o;const e=t._freezeSettings(),n=cR(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(at.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(aa(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:$e("string",qt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class np{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ec{constructor(e){this._methodName=e}}/**
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
 */class Sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Sn._jsonSchemaVersion}}static fromJSON(e){if(aa(e,Sn._jsonSchema))return new Sn(e.latitude,e.longitude)}}Sn._jsonSchemaVersion="firestore/geoPoint/1.0",Sn._jsonSchema={type:$e("string",Sn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(aa(e,cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new cn(e.vectorValues);throw new K(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:$e("string",cn._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const pR=/^__.*__$/;class mR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class lE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class tc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new tc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return gu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(uE(this.dataSource)&&pR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class gR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qu(e)}createContext(e,n,r,i=!1){return new tc({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rp(t){const e=t._freezeSettings(),n=Qu(t._databaseId);return new gR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cE(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);sp("Data must be an object, but it was:",o,r);const l=hE(r,o);let u,h;if(s.merge)u=new Ft(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const p=Qo(e,m,n);if(!o.contains(p))throw new K(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);pE(f,p)||f.push(p)}u=new Ft(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new mR(new Rt(l),u,h)}class nc extends ec{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function yR(t,e,n){return new tc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ip extends ec{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=yR(this,e,!0),r=this.Ac.map(s=>da(s,n)),i=new ms(r);return new iC(e.path,i)}isEqual(e){return e instanceof ip&&Rr(this.Ac,e.Ac)}}function _R(t,e,n,r){const i=t.createContext(1,e,n);sp("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Ur(r,(u,h)=>{const f=fE(e,u,n);h=yt(h);const m=i.childContextForFieldPath(f);if(h instanceof nc)s.push(f);else{const p=da(h,m);p!=null&&(s.push(f),o.set(f,p))}});const l=new Ft(s);return new lE(o,l,i.fieldTransforms)}function vR(t,e,n,r,i,s){const o=t.createContext(1,e,n),l=[Qo(e,r,n)],u=[i];if(s.length%2!=0)throw new K(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(Qo(e,s[p])),u.push(s[p+1]);const h=[],f=Rt.empty();for(let p=l.length-1;p>=0;--p)if(!pE(h,l[p])){const A=l[p];let C=u[p];C=yt(C);const N=o.childContextForFieldPath(A);if(C instanceof nc)h.push(A);else{const D=da(C,N);D!=null&&(h.push(A),f.set(A,D))}}const m=new Ft(h);return new lE(f,m,o.fieldTransforms)}function da(t,e){if(dE(t=yt(t)))return sp("Unsupported field value:",e,t),hE(t,e);if(t instanceof ec)return function(r,i){if(!uE(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=da(l,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:du(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:du(i.serializer,s)}}if(r instanceof Sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:Aw(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof cn)return function(o,l){const u=o instanceof cn?o.toArray():o;return{mapValue:{fields:{[nw]:{stringValue:rw},[au]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return jf(l.serializer,f)})}}}}}}(r,i);if(Vw(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${bf(r)}`)}(t,e)}function hE(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ur(t,(r,i)=>{const s=da(i,e.childContextForField(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Sn||t instanceof qt||t instanceof Fe||t instanceof ec||t instanceof cn||Vw(t))}function sp(t,e,n){if(!dE(n)||!G0(n)){const r=bf(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Qo(t,e,n){if((e=yt(e))instanceof np)return e._internalPath;if(typeof e=="string")return fE(t,e);throw gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const wR=new RegExp("[~\\*/\\[\\]]");function fE(t,e,n){if(e.search(wR)>=0)throw gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new np(...e.split("."))._internalPath}catch{throw gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(O.INVALID_ARGUMENT,l+t+u)}function pE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ER{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ur(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[au].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Me(o.doubleValue));return new cn(n)}convertGeoPoint(e){return new Sn(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=br(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);pe(Dw(r),9688,{name:e});const i=new qo(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mE extends ER{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function TR(...t){return new ip("arrayUnion",t)}const Ay="@firebase/firestore",Cy="4.11.0";/**
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
 */function Ry(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class gE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IR extends gE{data(){return super.data()}}/**
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
 */function SR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function yE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ri extends gE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ri._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ri._jsonSchemaVersion="firestore/documentSnapshot/1.0",ri._jsonSchema={type:$e("string",ri._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class xl extends ri{data(e={}){return super.data(e)}}class rs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:kR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function kR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */rs._jsonSchemaVersion="firestore/querySnapshot/1.0",rs._jsonSchema={type:$e("string",rs._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};/**
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
 */function xR(t){t=ln(t,Fe);const e=ln(t.firestore,pi),n=tp(e);return aR(n,t._key).then(r=>_E(e,t,r))}function ih(t,e,n){t=ln(t,Fe);const r=ln(t.firestore,pi),i=yE(t.converter,e,n),s=rp(r);return op(r,[cE(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,un.none())])}function yu(t,e,n,...r){t=ln(t,Fe);const i=ln(t.firestore,pi),s=rp(i);let o;return o=typeof(e=yt(e))=="string"||e instanceof np?vR(s,"updateDoc",t._key,e,n,r):_R(s,"updateDoc",t._key,e),op(i,[o.toMutation(t._key,un.exists(!0))])}function bi(t,e){const n=ln(t.firestore,pi),r=_s(t),i=yE(t.converter,e),s=rp(t.firestore);return op(n,[cE(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function Za(t,...e){var h,f,m;t=yt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ry(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Ry(e[r])){const p=e[r];e[r]=(h=p.next)==null?void 0:h.bind(p),e[r+1]=(f=p.error)==null?void 0:f.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let s,o,l;if(t instanceof Fe)o=ln(t.firestore,pi),l=$u(t._key.path),s={next:p=>{e[r]&&e[r](_E(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=ln(t,Zu);o=ln(p.firestore,pi),l=p._query;const A=new mE(o);s={next:C=>{e[r]&&e[r](new rs(o,A,p,C))},error:e[r+1],complete:e[r+2]},SR(t._query)}const u=tp(o);return oR(u,l,i,s)}function op(t,e){const n=tp(t);return lR(n,e)}function _E(t,e,n){const r=n.docs.get(e._key),i=new mE(t);return new ri(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){aA(Is),hs(new ui("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new pi(new cA(r.getProvider("auth-internal")),new fA(o,r.getProvider("app-check-internal")),PA(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Tr(Ay,Cy,e),Tr(Ay,Cy,"esm2020")})();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=t=>{const e=CR(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=$.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>$.createElement("svg",{ref:u,...RR,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:vE("lucide",i),...!s&&!PR(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>$.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(t,e)=>{const n=$.forwardRef(({className:r,...i},s)=>$.createElement(NR,{ref:s,iconNode:e,className:vE(`lucide-${AR(Py(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Py(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],DR=He("arrow-left",bR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],sh=He("camera",VR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],OR=He("check",LR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],jR=He("circle-x",MR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],UR=He("clock",FR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Ny=He("image",zR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],$R=He("info",BR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ap=He("lock",HR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],qR=He("log-out",WR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],wE=He("message-square",KR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lp=He("plus",GR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],YR=He("search",QR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],JR=He("send",XR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],up=He("shield-check",ZR);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],tP=He("smile",eP);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],rP=He("upload",nP);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],EE=He("user-plus",iP);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],TE=He("users",sP);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],aP=He("video",oP);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yo=He("x",lP),uP=`
  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
  .floating-icon {
    position: absolute;
    animation: float 6s ease-in-out infinite;
    opacity: 0.6;
    pointer-events: none;
    z-index: 0;
  }
`,cp=()=>_.jsxs(_.Fragment,{children:[_.jsx("style",{dangerouslySetInnerHTML:{__html:uP}}),_.jsxs("div",{className:"fixed inset-0 overflow-hidden pointer-events-none z-0",children:[_.jsx("div",{className:"floating-icon text-4xl",style:{top:"10%",left:"10%",animationDelay:"0s"},children:"🐍"}),_.jsx("div",{className:"floating-icon text-5xl",style:{top:"20%",right:"15%",animationDelay:"1s"},children:"💖"}),_.jsx("div",{className:"floating-icon text-4xl",style:{top:"45%",left:"20%",animationDelay:"2s"},children:"😘"}),_.jsx("div",{className:"floating-icon text-3xl",style:{bottom:"30%",left:"15%",animationDelay:"3s"},children:"😶‍🌫️"}),_.jsx("div",{className:"floating-icon text-5xl",style:{bottom:"15%",right:"10%",animationDelay:"4s"},children:"🐱"}),_.jsx("div",{className:"floating-icon text-4xl",style:{top:"70%",left:"40%",animationDelay:"1.5s"},children:"💕"}),_.jsx("div",{className:"floating-icon text-4xl",style:{top:"30%",right:"40%",animationDelay:"0.5s"},children:"🥰"}),_.jsx("div",{className:"floating-icon text-5xl",style:{bottom:"40%",right:"30%",animationDelay:"2.5s"},children:"💝"})]})]}),by=!0;let oh,el,Mt;const _t=t=>btoa(encodeURIComponent(t)),tl=t=>{try{return decodeURIComponent(atob(t))}catch{return t}},IE=async t=>{const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")},nl=()=>Vn(Mt,"chat_rooms"),rl=()=>Vn(Mt,"secure_messages"),Dy=()=>Vn(Mt,"custom_stickers"),cP=()=>Vn(Mt,"user_directory"),il=t=>_s(Mt,"users",_t(t)),hP=()=>Vn(Mt,"activity_logs"),ei=async(t,e,n={})=>{if(Mt)try{await bi(hP(),{action:t,username:_t(e),details:n,timestamp:Date.now()})}catch{}},dP=30*60*1e3,Vy=10*1024*1024,fP=24*1024*1024,pP=["😀","😃","😄","😁","😆","😅","😂","🤣","🥲","☺️","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","👍","👎","👏","🙌","👐","🤲","🤝","🙏","✌️","🤞","🖖","🤘","🤙","🖐","✋","👌","🤌","🤏","👈","👉","👆","👇","☝️","✊","👊","🤛","🤜","🤚","👋","🤟","🔥","🎉","✨","🌟","💫","💥","💢","💦","💨","💤","💩","👻","💀","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"],SE=()=>{try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t,n=e.createOscillator(),r=e.createGain();n.type="sawtooth",n.frequency.setValueAtTime(800,e.currentTime),n.frequency.setValueAtTime(600,e.currentTime+.2),n.frequency.setValueAtTime(800,e.currentTime+.4),n.frequency.setValueAtTime(600,e.currentTime+.6),n.frequency.setValueAtTime(800,e.currentTime+.8),n.frequency.setValueAtTime(600,e.currentTime+1),r.gain.setValueAtTime(.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+1.5),n.connect(r),r.connect(e.destination),n.start(),n.stop(e.currentTime+1.5)}catch{}};function mP(){const[t,e]=$.useState(!1),[n,r]=$.useState(null),[i,s]=$.useState(null),[o,l]=$.useState(!0),[u,h]=$.useState(!0),[f,m]=$.useState(""),[p,A]=$.useState([]),[C,N]=$.useState(null),[D,S]=$.useState([]),[w,x]=$.useState(""),[V,j]=$.useState([]),[z,v]=$.useState([]),[y,E]=$.useState(!1),[I,k]=$.useState(!1),[R,T]=$.useState(!1),[Oe,It]=$.useState(!1),[Re,ge]=$.useState(""),[U,q]=$.useState(null),[X,de]=$.useState(1),[ye,Xt]=$.useState(!1),Ue=$.useRef(null),St=$.useRef({oldHeight:0,isLoadingMore:!1}),Vt=$.useRef(null),kt=$.useRef(null),Jt=$.useRef(null),vi=$.useRef(null),fa=$.useRef(null);$.useEffect(()=>{const M=document.querySelector("link[rel*='icon']")||document.createElement("link");M.type="image/svg+xml",M.rel="shortcut icon",M.href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😶‍🌫️</text></svg>",document.getElementsByTagName("head")[0].appendChild(M)},[]),$.useEffect(()=>{(async()=>{try{const Q=await fetch("https://snatcake.tronghieu1042.workers.dev");if(!Q.ok)throw new Error("Failed to fetch config");const te=await Q.json();if(!te||!te.projectId)throw new Error("Cấu hình Firebase không hợp lệ (thiếu projectId). Hãy kiểm tra biến môi trường trong Cloudflare Worker.");oh=r0(te),el=sA(oh),Mt=dR(oh),e(!0)}catch(Q){console.error(Q),m("Không thể tải cấu hình bảo mật từ Cloudflare Worker."),h(!1)}})()},[]),$.useEffect(()=>{if(!t)return;if(!el){h(!1),m("Chưa cấu hình Firebase Web SDK hợp lệ.");return}(async()=>{try{await Bk(el)}catch{h(!1)}})();const Q=Gk(el,async te=>{r(te),te&&h(!1)});return()=>Q()},[t]);const pa=()=>{l(!0),S([]),N(null),lt("Ứng dụng đã tự động khóa để bảo mật.")},ma=()=>{s(null),l(!0),S([]),N(null)},xt=()=>{kt.current&&clearTimeout(kt.current),kt.current=setTimeout(()=>{pa()},dP)};$.useEffect(()=>{if(!o&&i)return window.addEventListener("mousemove",xt),window.addEventListener("keydown",xt),window.addEventListener("click",xt),window.addEventListener("scroll",xt),xt(),()=>{window.removeEventListener("mousemove",xt),window.removeEventListener("keydown",xt),window.removeEventListener("click",xt),window.removeEventListener("scroll",xt),kt.current&&clearTimeout(kt.current)}},[o,i]),$.useEffect(()=>{de(1),Xt(!1),St.current={oldHeight:0,isLoadingMore:!1}},[C==null?void 0:C.id]),$.useEffect(()=>{if(!n||!Mt||o||!i)return;const M=Za(cP(),te=>{v(te.docs.map(ue=>tl(ue.id)))}),Q=Za(nl(),te=>{const fe=te.docs.map(re=>{const se=re.data();return{id:re.id,...se,allowedUsers:se.allowedUsers?se.allowedUsers.map(tl):[],createdBy:se.createdBy?tl(se.createdBy):"Unknown"}}).filter(re=>re.allowedUsers.includes(i.username));fe.sort((re,se)=>(se.createdAt||0)-(re.createdAt||0)),A(fe),N(re=>re&&(fe.find(se=>se.id===re.id)||re))});return()=>{M(),Q()}},[n,o,i,Mt]),$.useEffect(()=>{if(!n||!Mt||o){o&&D.length>0&&S([]);return}const M=Za(Dy(),te=>j(te.docs.map(ue=>({id:ue.id,...ue.data()}))));let Q=()=>{};return C&&(Q=Za(rl(),te=>{const fe=te.docs.map(re=>({id:re.id,...re.data(),senderName:re.data().senderName?tl(re.data().senderName):"Unknown"})).filter(re=>re.roomId===C.id).sort((re,se)=>(re.timestamp||0)-(se.timestamp||0));S(fe)})),()=>{M(),Q()}},[n,o,C,Mt]);const Rs=[...new Set(D.map(M=>new Date(M.timestamp).setHours(0,0,0,0)))].sort((M,Q)=>Q-M),rc=Rs.slice(0,X),wi=D.filter(M=>rc.includes(new Date(M.timestamp).setHours(0,0,0,0))),Ps=M=>{const Q=new Date(M),te=new Date,ue=new Date(te);return ue.setDate(ue.getDate()-1),Q.toDateString()===te.toDateString()?"Hôm nay":Q.toDateString()===ue.toDateString()?"Hôm qua":Q.toLocaleDateString("vi-VN")};let Ei=[],We="";wi.forEach(M=>{const Q=Ps(M.timestamp);Q!==We&&(Ei.push({type:"divider",label:Q,id:`div-${Q}-${M.timestamp}`}),We=Q),Ei.push({type:"message",...M})});const tt=M=>{M.target.scrollTop===0&&X<Rs.length&&!St.current.isLoadingMore&&(St.current={oldHeight:M.target.scrollHeight,isLoadingMore:!0},Xt(!0),setTimeout(()=>{de(Q=>Q+1)},500))};$.useEffect(()=>{Ue.current&&requestAnimationFrame(()=>{Ue.current&&(St.current.isLoadingMore?(Ue.current.scrollTop=Ue.current.scrollHeight-St.current.oldHeight,St.current.isLoadingMore=!1,Xt(!1)):Ue.current.scrollTop=Ue.current.scrollHeight)})},[wi.length]);const lt=M=>{ge(M),setTimeout(()=>ge(""),3e3)},ic=async(M,Q)=>{let te=[...Q];te.includes(i.username)||te.push(i.username);try{const ue=await bi(nl(),{name:M.trim(),allowedUsers:te.map(_t),createdAt:Date.now(),createdBy:_t(i.username)});await ei("CREATE_ROOM",i.username,{roomName:_t(M.trim()),roomId:ue.id}),await bi(rl(),{roomId:ue.id,senderId:"system",senderName:_t("Hệ thống"),text:`Tổ chat "${M.trim()}" được tạo bởi ${i.username}.`,isSystem:!0,timestamp:Date.now()}),lt("Đã tạo Tổ chat mới!")}catch{lt("Lỗi khi tạo Tổ.")}},ga=async M=>{if(!(!C||!M))try{await yu(_s(nl(),C.id),{allowedUsers:TR(_t(M))}),await bi(rl(),{roomId:C.id,senderId:"system",senderName:_t("Hệ thống"),text:`${i.username} đã thêm thành viên "${M}" vào Tổ chat.`,isSystem:!0,timestamp:Date.now()}),await ei("ADD_MEMBER",i.username,{roomId:C.id,addedUser:_t(M)}),lt(`Đã thêm ${M} vào Tổ!`)}catch{lt("Lỗi khi thêm thành viên.")}},Ti=async(M,Q=null,te=null)=>{if(!(!M.trim()&&!Q||o||!i||!n||!C)){k(!1),T(!1);try{await bi(rl(),{roomId:C.id,senderId:_t(i.username),senderName:_t(i.username),text:M.trim(),mediaUrl:Q,mediaType:te,timestamp:Date.now()}),x(""),xt()}catch{lt("Không thể gửi tin nhắn. Có thể vượt dung lượng.")}}},Br=M=>{const Q=M.target.files[0];if(!Q||!C)return;if(Q.size>Vy)return lt("Ảnh nền quá lớn.");const te=new FileReader;te.onload=ue=>{const fe=new Image;fe.onload=async()=>{const re=document.createElement("canvas");let se=fe.width,ve=fe.height;const Ae=1920;se>ve&&se>Ae?(ve*=Ae/se,se=Ae):ve>Ae&&(se*=Ae/ve,ve=Ae),re.width=se,re.height=ve,re.getContext("2d").drawImage(fe,0,0,se,ve);try{await yu(_s(nl(),C.id),{bgUrl:re.toDataURL("image/jpeg",.6)}),lt("Đã thay đổi hình nền phòng chat!")}catch{}},fe.src=ue.target.result},te.readAsDataURL(Q),M.target.value=null},Ii=(M,Q)=>{var ue;const te=M.target?M.target.files[0]:(ue=M.files)==null?void 0:ue[0];if(te){if(Q==="video"){if(te.size>fP)return lt("Video quá lớn.");const fe=new FileReader;fe.onloadend=()=>Ti("",fe.result,Q),fe.readAsDataURL(te)}else if(Q==="image"){if(te.size>Vy)return lt("Ảnh quá lớn.");const fe=new FileReader;fe.onload=re=>{const se=new Image;se.onload=()=>{const ve=document.createElement("canvas");let Ae=se.width,Ee=se.height;const An=1200;Ae>Ee&&Ae>An?(Ee*=An/Ae,Ae=An):Ee>An&&(Ae*=An/Ee,Ee=An),ve.width=Ae,ve.height=Ee,ve.getContext("2d").drawImage(se,0,0,Ae,Ee),q(ve.toDataURL("image/jpeg",.7)),T(!1)},se.src=re.target.result},fe.readAsDataURL(te)}M.target&&(M.target.value=null)}},ya=M=>{var te;const Q=(te=M.clipboardData)==null?void 0:te.items;if(Q){for(let ue=0;ue<Q.length;ue++)if(Q[ue].type.indexOf("image")!==-1){const fe=Q[ue].getAsFile();if(fe){M.preventDefault(),Ii({files:[fe]},"image");return}}}},Ns=M=>{const Q=M.target.files[0];if(!Q)return;const te=new FileReader;te.onload=ue=>{const fe=new Image;fe.onload=async()=>{const re=document.createElement("canvas");let se=fe.width,ve=fe.height;const Ae=300;se>ve&&se>Ae?(ve*=Ae/se,se=Ae):ve>Ae&&(se*=Ae/ve,ve=Ae),re.width=se,re.height=ve,re.getContext("2d").drawImage(fe,0,0,se,ve);try{await bi(Dy(),{url:re.toDataURL("image/png"),addedBy:i.username,timestamp:Date.now()}),lt("Đã tải lên sticker mới!")}catch{}},fe.src=ue.target.result},te.readAsDataURL(Q),M.target.value=null},sc=async()=>{E(!0),T(!1);try{const M=await navigator.mediaDevices.getUserMedia({video:!0});vi.current=M,Jt.current&&(Jt.current.srcObject=M)}catch{E(!1)}},_a=()=>{vi.current&&vi.current.getTracks().forEach(M=>M.stop()),E(!1)},va=()=>{if(!Jt.current)return;const M=document.createElement("canvas");M.width=Jt.current.videoWidth,M.height=Jt.current.videoHeight,M.getContext("2d").drawImage(Jt.current,0,0,M.width,M.height),q(M.toDataURL("image/jpeg",.7)),_a()},bs=()=>{Ti(w,U,U?"image":null),q(null)};return u?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-pink-50 text-pink-500",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"})}):f?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-pink-50 p-4",children:_.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-xl border-2 border-red-200 text-center",children:[_.jsx("div",{className:"text-red-500 font-bold text-lg mb-2",children:"Lỗi Kết Nối"}),_.jsx("p",{className:"text-gray-600",children:f})]})}):n?i?o?_.jsx(vP,{profile:i,onUnlock:()=>l(!1),onReset:()=>s(null)}):_.jsxs("div",{className:"h-[100dvh] w-full bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-800 font-sans flex flex-col relative overflow-hidden",children:[_.jsx(cp,{}),_.jsxs("header",{className:"sticky top-0 z-50 flex-shrink-0 bg-white/80 backdrop-blur-xl border-b-2 border-pink-200 p-4 flex items-center justify-between shadow-sm",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[C?_.jsx("button",{onClick:()=>{N(null),S([])},className:"p-2 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-pink-500 border border-pink-200",children:_.jsx(DR,{className:"w-5 h-5"})}):_.jsx("div",{className:"bg-pink-100 p-2 rounded-xl border border-pink-200",children:_.jsx(up,{className:"text-pink-500 w-6 h-6"})}),_.jsxs("div",{className:C?"cursor-pointer hover:bg-white/50 p-1 px-2 rounded-xl transition-colors group":"",onClick:()=>C&&It(!0),children:[_.jsx("h1",{className:"text-lg font-bold text-gray-800 truncate max-w-[150px] sm:max-w-xs",children:C?C.name:"Hang Chat"}),_.jsxs("p",{className:"text-xs text-pink-500 flex items-center gap-1 font-medium",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-400 animate-pulse"}),C?_.jsxs("span",{className:"group-hover:text-pink-600 transition-colors",children:[C.allowedUsers.length," thành viên (Nhấn xem)"]}):"Hi Hi"]})]})]}),_.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[_.jsxs("div",{className:"text-right hidden sm:block group relative cursor-help",children:[_.jsx("p",{className:"text-sm text-gray-500",children:"Tài khoản:"}),_.jsx("p",{className:"font-semibold text-gray-800 group-hover:text-pink-500 transition-colors",children:i.username}),_.jsxs("div",{className:"absolute top-full right-0 mt-2 w-56 bg-white border-2 border-pink-200 rounded-xl shadow-xl shadow-pink-200/50 p-3 hidden group-hover:block z-50",children:[_.jsx("p",{className:"text-xs text-gray-500 mb-2 border-b border-pink-100 pb-1 font-bold",children:"Lịch sử hoạt động"}),_.jsxs("div",{className:"space-y-1 text-left",children:[_.jsx("p",{className:"text-xs text-gray-500",children:"Tạo tài khoản lúc:"}),_.jsx("p",{className:"text-xs font-mono text-pink-500 font-medium",children:i.createdAt?new Date(i.createdAt).toLocaleString("vi-VN"):"Chưa rõ"}),_.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Đăng nhập lần cuối:"}),_.jsx("p",{className:"text-xs font-mono text-blue-500 font-medium",children:i.lastLoginAt?new Date(i.lastLoginAt).toLocaleString("vi-VN"):"Vừa xong"})]})]})]}),C&&_.jsxs(_.Fragment,{children:[_.jsx("button",{onClick:()=>{var M;return(M=fa.current)==null?void 0:M.click()},className:"p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500 border border-transparent hover:border-pink-200",title:"Đổi hình nền",children:_.jsx(Ny,{className:"w-5 h-5"})}),_.jsx("input",{type:"file",accept:"image/*",className:"hidden",ref:fa,onChange:Br})]}),_.jsx("button",{onClick:pa,className:"p-2 hover:bg-pink-50 rounded-full transition-colors text-gray-500 hover:text-pink-500 border border-transparent hover:border-pink-200",title:"Khóa Tổ",children:_.jsx(ap,{className:"w-5 h-5"})}),!C&&_.jsx("button",{onClick:ma,className:"p-2 hover:bg-red-50 rounded-full transition-colors text-gray-500 hover:text-red-500 border border-transparent hover:border-red-200",title:"Đăng xuất",children:_.jsx(qR,{className:"w-5 h-5"})})]})]}),C?_.jsxs("div",{className:"flex-1 relative overflow-hidden flex flex-col z-10",children:[C.bgUrl&&_.jsx("div",{className:"absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none",style:{backgroundImage:`url(${C.bgUrl})`}}),_.jsxs("main",{ref:Ue,onScroll:tt,className:"relative z-10 flex-1 overflow-y-auto p-4 space-y-4",children:[D.length===0?_.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-gray-400 gap-4 opacity-70 mt-20",children:[_.jsx(wE,{className:"w-16 h-16 text-pink-300"}),_.jsx("p",{className:"font-medium",children:"Bắt đầu cuộc trò chuyện bảo mật."})]}):_.jsxs(_.Fragment,{children:[ye&&_.jsx("div",{className:"text-center text-[10px] font-bold text-pink-400 py-2 animate-pulse uppercase tracking-widest",children:"Đang tải thêm lịch sử..."}),Ei.map(M=>M.type==="divider"?_.jsx("div",{className:"flex justify-center my-6 relative z-10",children:_.jsx("span",{className:"bg-white/70 backdrop-blur-md text-pink-500 font-bold text-[10px] px-4 py-1.5 rounded-full border border-pink-200 shadow-sm uppercase tracking-widest",children:M.label})},M.id):_.jsx(yP,{msg:M,isMine:M.senderId===_t(i.username)},M.id))]}),_.jsx("div",{ref:Vt})]}),_.jsxs("footer",{className:"relative z-20 flex-shrink-0 bg-white/80 backdrop-blur-xl p-4 border-t-2 border-pink-200",children:[I&&_.jsxs("div",{className:"absolute bottom-full mb-2 right-4 bg-white border-2 border-pink-200 rounded-2xl p-4 shadow-xl shadow-pink-200/30 w-80 max-h-80 overflow-y-auto flex flex-col gap-3",children:[_.jsx("div",{className:"grid grid-cols-6 gap-2",children:pP.map(M=>_.jsx("button",{onClick:()=>Ti(M,null,"text"),className:"text-2xl hover:bg-pink-50 p-1 rounded-xl transition-transform hover:scale-125 border border-transparent hover:border-pink-100",children:M},M))}),V.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"h-px bg-pink-100 w-full my-1"}),_.jsx("div",{className:"grid grid-cols-4 gap-2",children:V.map(M=>_.jsx("button",{onClick:()=>Ti("",M.url,"sticker"),className:"hover:bg-pink-50 p-1 rounded-xl border border-transparent hover:border-pink-100",children:_.jsx("img",{src:M.url,alt:"sticker",className:"w-full h-auto object-contain rounded"})},M.id))})]}),_.jsxs("label",{className:"mt-2 flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-500 font-bold p-3 rounded-xl cursor-pointer text-sm transition-colors border-2 border-pink-200",children:[_.jsx(rP,{className:"w-4 h-4"})," Tải Sticker Lên ",_.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:Ns})]})]}),R&&_.jsxs("div",{className:"absolute bottom-full mb-2 left-4 bg-white border-2 border-pink-200 rounded-2xl p-2 shadow-xl shadow-pink-200/30 flex flex-col gap-1 w-64",children:[_.jsxs("label",{className:"flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl cursor-pointer transition-colors font-medium border border-transparent hover:border-pink-100",children:[_.jsx(Ny,{className:"text-blue-400 w-5 h-5 flex-shrink-0"})," ",_.jsx("span",{className:"text-sm",children:"Gửi Hình"}),_.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:M=>Ii(M,"image")})]}),_.jsxs("label",{className:"flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl cursor-pointer transition-colors font-medium border border-transparent hover:border-pink-100",children:[_.jsx(aP,{className:"text-purple-400 w-5 h-5 flex-shrink-0"})," ",_.jsx("span",{className:"text-sm",children:"Gửi Video"}),_.jsx("input",{type:"file",accept:"video/*",className:"hidden",onChange:M=>Ii(M,"video")})]}),_.jsxs("button",{onClick:sc,className:"flex items-center gap-3 p-3 hover:bg-pink-50 text-gray-700 rounded-xl text-left transition-colors font-medium border border-transparent hover:border-pink-100",children:[_.jsx(sh,{className:"text-pink-400 w-5 h-5 flex-shrink-0"})," ",_.jsx("span",{className:"text-sm",children:"Chụp Webcam"})]})]}),_.jsxs("div",{className:"flex items-end gap-2 max-w-5xl mx-auto",children:[_.jsx("button",{onClick:()=>{T(!R),k(!1)},className:`p-3 rounded-full transition-colors ${R?"bg-pink-500 text-white shadow-md border-2 border-pink-500":"bg-white text-gray-500 hover:text-pink-500 hover:bg-pink-50 shadow-sm border-2 border-pink-200"}`,children:_.jsx(lp,{className:"w-5 h-5"})}),_.jsx("button",{onClick:()=>{k(!I),T(!1)},className:`p-3 rounded-full transition-colors ${I?"bg-yellow-400 text-white shadow-md border-2 border-yellow-400":"bg-white text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 shadow-sm border-2 border-pink-200"}`,children:_.jsx(tP,{className:"w-5 h-5"})}),_.jsxs("div",{className:"flex-1 bg-white rounded-2xl flex flex-col justify-center p-1.5 border-2 border-pink-200 focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-200 shadow-sm transition-all",children:[U&&_.jsxs("div",{className:"relative self-start mb-1 ml-2 mt-1",children:[_.jsx("img",{src:U,alt:"preview",className:"h-24 rounded-xl border border-pink-200 object-cover shadow-sm"}),_.jsx("button",{onClick:()=>q(null),className:"absolute -top-2 -right-2 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 border border-pink-100 rounded-full p-1 shadow-md transition-colors",children:_.jsx(Yo,{className:"w-4 h-4"})})]}),_.jsxs("div",{className:"flex items-end w-full",children:[_.jsx("textarea",{value:w,onChange:M=>x(M.target.value),onKeyDown:M=>{M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),bs())},onPaste:ya,placeholder:"Nhập tin nhắn...",className:"flex-1 bg-transparent text-gray-800 p-2 outline-none resize-none max-h-32 min-h-[44px]",rows:1}),_.jsx("button",{onClick:bs,disabled:!w.trim()&&!U,className:"p-2 mb-1 mr-1 bg-pink-400 hover:bg-pink-500 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl transition-colors shadow-sm border border-transparent shrink-0",children:_.jsx(JR,{className:"w-5 h-5"})})]})]})]})]})]}):_.jsx(gP,{rooms:p,onCreate:ic,onSelect:N,profile:i,allUsers:z}),Re&&_.jsxs("div",{className:"absolute top-20 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 font-bold px-6 py-3 rounded-full shadow-2xl border-2 border-pink-200 z-50 text-sm animate-fade-in-down flex items-center gap-2",children:[_.jsx("div",{className:"w-2 h-2 bg-pink-400 rounded-full animate-ping"})," ",Re]}),Oe&&C&&_.jsx(wP,{room:C,allUsers:z,onClose:()=>It(!1),onAddMember:ga}),y&&_.jsx("div",{className:"fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4",children:_.jsxs("div",{className:"relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border-2 border-pink-300 shadow-2xl shadow-pink-200",children:[_.jsxs("div",{className:"flex justify-between items-center p-5 border-b-2 border-pink-100",children:[_.jsxs("h3",{className:"text-gray-800 font-bold flex items-center gap-2 text-lg",children:[_.jsx(sh,{className:"w-5 h-5 text-pink-400"})," Chụp Ảnh"]}),_.jsx("button",{onClick:_a,className:"text-gray-400 hover:text-pink-500 bg-pink-50 border border-pink-200 rounded-full p-2",children:_.jsx(Yo,{className:"w-5 h-5"})})]}),_.jsx("div",{className:"relative bg-black aspect-video flex items-center justify-center",children:_.jsx("video",{ref:Jt,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover"})}),_.jsx("div",{className:"p-6 flex justify-center bg-gray-50 border-t-2 border-pink-100",children:_.jsx("button",{onClick:va,className:"bg-pink-500 hover:bg-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center border-4 border-pink-200 shadow-lg active:scale-95",children:_.jsx(sh,{className:"w-7 h-7"})})})]})})]}):_.jsx(_P,{db:Mt,onComplete:M=>s(M)}):_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-pink-50",children:_.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"})})}function gP({rooms:t,onCreate:e,onSelect:n,profile:r,allUsers:i}){const[s,o]=$.useState(!1),[l,u]=$.useState(""),[h,f]=$.useState([]),m=p=>{p.preventDefault(),l.trim()&&(e(l,h),u(""),f([]),o(!1))};return _.jsx("main",{className:"flex-1 overflow-y-auto p-4 flex flex-col items-center relative z-10",children:_.jsxs("div",{className:"w-full max-w-2xl space-y-6 mt-4",children:[s?_.jsxs("form",{onSubmit:m,className:"bg-white/90 backdrop-blur-xl border-2 border-pink-200 rounded-[32px] p-8 shadow-xl shadow-pink-200/50 space-y-5 overflow-visible",children:[_.jsxs("div",{className:"flex justify-between items-center mb-2",children:[_.jsxs("h3",{className:"text-xl font-bold text-gray-800 flex items-center gap-2",children:[_.jsx(up,{className:"text-pink-500"})," Xây Tổ"]}),_.jsx("button",{type:"button",onClick:()=>o(!1),className:"text-gray-400 hover:text-pink-500 p-2 rounded-full hover:bg-pink-50",children:_.jsx(Yo,{className:"w-5 h-5"})})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-bold text-gray-600 mb-2",children:"Tên Tổ Chat"}),_.jsx("input",{type:"text",value:l,onChange:p=>u(p.target.value),required:!0,placeholder:"VD: Họp Tổ Dân Phố",className:"w-full bg-white border-2 border-pink-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors"})]}),_.jsxs("div",{className:"relative",children:[_.jsx("label",{className:"block text-sm font-bold text-gray-600 mb-2",children:"Thêm thành viên"}),_.jsx(kE,{availableUsers:i.filter(p=>p!==r.username),selectedUsers:h,onAdd:p=>f([...h,p]),onRemove:p=>f(h.filter(A=>A!==p))})]}),_.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-4 px-4 rounded-xl mt-4 transition-all shadow-md border border-pink-400",children:"Xây Tổ Thoai"})]}):_.jsxs("button",{onClick:()=>o(!0),className:"w-full border-4 border-dashed border-pink-300 hover:border-pink-500 bg-white/50 hover:bg-white/80 rounded-[32px] p-8 flex flex-col items-center justify-center gap-3 transition-all text-pink-500 shadow-sm group",children:[_.jsx("div",{className:"bg-pink-100 group-hover:bg-pink-200 p-4 rounded-full transition-colors border-2 border-pink-200",children:_.jsx(lp,{className:"w-8 h-8"})}),_.jsx("span",{className:"font-bold text-xl text-gray-700",children:"Xây Tổ Chat Mới"})]}),_.jsxs("div",{className:"space-y-4",children:[_.jsxs("h2",{className:"text-lg font-bold text-gray-700 flex items-center gap-2 border-b-2 border-pink-200 pb-3",children:[_.jsx(wE,{className:"w-5 h-5 text-pink-400"})," Các Tổ bạn đang tham gia"]}),t.length===0?_.jsx("div",{className:"bg-white/50 backdrop-blur-sm rounded-[32px] border-2 border-pink-200 p-10 text-center",children:_.jsx("p",{className:"text-gray-500 font-medium",children:"Bạn chưa tham gia Tổ chat nào."})}):_.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:t.map(p=>_.jsxs("div",{onClick:()=>n(p),className:"relative bg-white/70 backdrop-blur-md border-2 border-pink-200 hover:border-pink-400 rounded-3xl p-5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm group flex flex-col gap-3 overflow-hidden",children:[p.bgUrl&&_.jsx("div",{className:"absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none",style:{backgroundImage:`url(${p.bgUrl})`}}),_.jsx("h3",{className:"relative z-10 font-black text-gray-800 text-lg truncate group-hover:text-pink-500 transition-colors",children:p.name}),_.jsxs("div",{className:"relative z-10 flex items-center justify-between mt-auto",children:[_.jsxs("p",{className:"text-xs text-gray-500 font-medium flex items-center gap-1 truncate",children:[_.jsx(TE,{className:"w-3.5 h-3.5 flex-shrink-0 text-pink-300"})," ",p.allowedUsers.join(", ")]}),_.jsx("div",{className:"bg-pink-100 text-pink-600 border border-pink-300 text-[10px] px-3 py-1.5 rounded-full font-bold ml-2 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-colors",children:"Dô liền"})]})]},p.id))})]})]})})}function yP({msg:t,isMine:e}){const n=t.timestamp?new Date(t.timestamp).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}):"";return t.isSystem?_.jsx("div",{className:"flex justify-center my-4 relative z-10",children:_.jsxs("div",{className:"bg-pink-50 text-pink-500 font-medium text-xs px-4 py-2 rounded-full border-2 border-pink-200 flex items-center gap-2 shadow-sm",children:[_.jsx($R,{className:"w-4 h-4 text-blue-400"}),_.jsx("span",{children:t.text}),_.jsxs("span",{className:"opacity-50 ml-1",children:["(",n,")"]})]})}):_.jsx("div",{className:`flex flex-col ${e?"items-end":"items-start"} mb-4 relative z-10`,children:_.jsxs("div",{className:"flex items-end gap-2 max-w-[85%] sm:max-w-[70%]",children:[!e&&_.jsx("div",{className:"w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-pink-500 mb-1 flex-shrink-0 shadow-sm border-2 border-pink-200",children:t.senderName.charAt(0).toUpperCase()}),_.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[!e&&_.jsx("span",{className:"text-[11px] font-bold text-gray-500 px-1 ml-1 mb-1",children:t.senderName}),_.jsxs("div",{className:`p-3.5 rounded-2xl relative group shadow-sm ${e?"bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-br-sm border border-pink-500":"bg-white text-gray-800 rounded-bl-sm border border-pink-200"}`,children:[t.mediaUrl&&_.jsxs("div",{className:"mb-2 rounded-xl overflow-hidden border border-black/5",children:[t.mediaType==="image"&&_.jsx("img",{src:t.mediaUrl,alt:"attachment",className:"max-w-full max-h-64 object-cover",loading:"lazy"}),t.mediaType==="video"&&_.jsx("video",{src:t.mediaUrl,controls:!0,className:"max-w-full max-h-64 object-cover"}),t.mediaType==="sticker"&&_.jsx("img",{src:t.mediaUrl,alt:"sticker",className:"w-32 h-32 object-contain",loading:"lazy"})]}),t.text&&_.jsx("p",{className:"whitespace-pre-wrap break-words leading-relaxed text-sm font-medium",children:t.text}),_.jsx("span",{className:`text-[10px] mt-1.5 block opacity-80 ${e?"text-pink-100 text-right":"text-gray-400"}`,children:n})]})]})]})})}function _P({db:t,onComplete:e}){const[n,r]=$.useState(1),[i,s]=$.useState(""),[o,l]=$.useState(""),[u,h]=$.useState(""),[f,m]=$.useState(""),[p,A]=$.useState(!1),[C,N]=$.useState(!1),[D,S]=$.useState(null),[w,x]=$.useState(""),[V,j]=$.useState(""),[z,v]=$.useState(!1),[y,E]=$.useState(0),[I,k]=$.useState(0),[R,T]=$.useState(0);$.useEffect(()=>{if(I>0){const Re=setInterval(()=>{const ge=Math.ceil((I-Date.now())/1e3);ge<=0?(k(0),E(0),j(""),clearInterval(Re)):T(ge)},1e3);return()=>clearInterval(Re)}},[I]);const Oe=async Re=>{if(Re.preventDefault(),I>0)return;j("");const ge=i.trim();if(ge.length<3)return j("Tên đăng nhập phải có ít nhất 3 ký tự.");v(!0);try{const U=await xR(il(ge));U.exists()?(A(!0),x(U.data().pin),S(U.data())):(A(!1),S(null)),N(!1),r(2)}catch{j("Lỗi kết nối máy chủ.")}v(!1)},It=async Re=>{if(Re.preventDefault(),I>0)return;j("");const ge=i.trim();if(p&&C&&f!=="190999201001"){j("Mã bí mật (Secret Code) không chính xác!");return}if(!/^\d{6}$/.test(o))return j("Mã PIN phải bao gồm chính xác 6 chữ số.");v(!0);try{const U=await IE(o),q=Date.now();if(p)if(C){if(o!==u){j("Mã PIN xác nhận không khớp."),v(!1);return}await yu(il(ge),{pin:U,lastLoginAt:q}),await ei("RESET_PIN",ge),e({username:ge,pin:U,createdAt:D.createdAt,lastLoginAt:q})}else{if(U!==w){E(de=>{const ye=de+1;return ye>=5?(j("Khóa tạm thời do nhập sai quá nhiều!"),k(Date.now()+6e4),SE(),ei("BRUTE_FORCE_WARNING",ge,{attempts:ye})):j(`Mã PIN không đúng (Sai ${ye}/5).`),ye}),l(""),v(!1);return}E(0),await yu(il(ge),{lastLoginAt:q});const X=by?Vn(t,"user_directory"):Vn(t,"artifacts",typeof __app_id<"u"?__app_id:"secure-chat","public","data","user_directory");await ih(_s(X,_t(ge)),{joinedAt:D.joinedAt||q,lastLoginAt:q},{merge:!0}),await ei("LOGIN",ge),e({username:ge,pin:U,createdAt:D.createdAt,lastLoginAt:q})}else{if(o!==u){j("Mã PIN xác nhận không khớp."),v(!1);return}const X={username:ge,pin:U,createdAt:q,lastLoginAt:q};await ih(il(ge),{username:_t(ge),pin:U,createdAt:q,lastLoginAt:q});const de=by?Vn(t,"user_directory"):Vn(t,"artifacts",typeof __app_id<"u"?__app_id:"secure-chat","public","data","user_directory");await ih(_s(de,_t(ge)),{joinedAt:q,lastLoginAt:q}),await ei("SIGNUP",ge),e(X)}}catch{j("Lỗi hệ thống khi đăng nhập.")}v(!1)};return _.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 font-sans text-gray-800",children:[_.jsx(cp,{}),_.jsx("div",{className:"max-w-md w-full bg-white/80 backdrop-blur-xl border-2 border-pink-200 p-8 rounded-[40px] shadow-2xl shadow-pink-200/50 relative overflow-hidden z-10",children:I>0?_.jsxs("div",{className:"text-center mb-6 mt-4 w-full",children:[_.jsx("div",{className:"w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 shadow-inner bg-red-100 border-red-300",children:_.jsx(ap,{className:"w-10 h-10 text-red-500 animate-bounce"})}),_.jsx("h2",{className:"text-2xl font-black mb-2 text-red-500",children:"CẢNH BÁO!"}),_.jsx("p",{className:"text-red-500 font-bold mb-2",children:"Nhập sai quá nhiều lần!"}),_.jsxs("div",{className:"text-5xl font-black text-red-400 my-6",children:[R,"s"]}),_.jsx("p",{className:"text-sm text-gray-500",children:"Vui lòng đợi để thử lại."})]}):_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("div",{className:"bg-pink-400 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-pink-200 rotate-3 border-2 border-pink-200",children:_.jsx(up,{className:"w-10 h-10 text-white"})}),_.jsx("h2",{className:"text-2xl font-black text-gray-800",children:"Tham Gia Tổ Chat"}),_.jsx("p",{className:"text-gray-500 font-medium text-sm mt-2",children:n===1?"Nhập tên để đăng nhập hoặc tạo mới nha.":p?C?`Khôi phục PIN cho: ${i}`:`Đăng nhập: ${i}`:`Tạo mã PIN cho: ${i}`})]}),V&&_.jsx("div",{className:"bg-red-50 text-red-500 font-bold p-3 rounded-xl mb-5 text-sm border-2 border-red-200 text-center",children:V}),n===1?_.jsxs("form",{onSubmit:Oe,className:"space-y-5",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-bold text-gray-600 mb-2",children:"Tên Đăng Nhập / Hiển Thị"}),_.jsx("input",{type:"text",value:i,onChange:Re=>s(Re.target.value),className:"w-full bg-white border-2 border-pink-200 rounded-2xl px-5 py-4 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors",placeholder:"VD: dandan, meomeo",disabled:z,autoFocus:!0})]}),_.jsx("button",{type:"submit",disabled:z,className:"w-full bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-2xl mt-4 transition-all shadow-lg border border-pink-400 flex justify-center items-center gap-2",children:z?_.jsx("span",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}):"Tiếp Tục"})]}):_.jsxs("form",{onSubmit:It,className:"space-y-4",children:[p&&C&&_.jsxs("div",{className:"mb-4 bg-pink-50/50 p-4 rounded-2xl border-2 border-pink-200",children:[_.jsx("label",{className:"block text-sm font-bold text-blue-500 mb-2",children:"Mã bí mật (Secret Code)"}),_.jsx("input",{type:"password",value:f,onChange:Re=>m(Re.target.value),className:"w-full bg-white border-2 border-pink-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-400",placeholder:"Nhập mã bí mật để cấp lại PIN",disabled:z,autoFocus:!0})]}),_.jsxs("div",{className:`grid ${p&&!C?"grid-cols-1":"grid-cols-2 gap-4"}`,children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-bold text-gray-600 mb-2",children:C?"PIN Mới (6 số)":"Mã PIN (6 số)"}),_.jsx("input",{type:"password",maxLength:"6",inputMode:"numeric",value:o,onChange:Re=>l(Re.target.value.replace(/\D/g,"")),className:"w-full bg-white border-2 border-pink-200 rounded-2xl px-4 py-4 text-gray-800 tracking-widest text-center text-xl focus:outline-none focus:border-pink-400 transition-colors",placeholder:"••••••",disabled:z,autoFocus:!C})]}),(!p||C)&&_.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-bold text-gray-600 mb-2",children:"Xác Nhận PIN"}),_.jsx("input",{type:"password",maxLength:"6",inputMode:"numeric",value:u,onChange:Re=>h(Re.target.value.replace(/\D/g,"")),className:"w-full bg-white border-2 border-pink-200 rounded-2xl px-4 py-4 text-gray-800 tracking-widest text-center text-xl focus:outline-none focus:border-pink-400 transition-colors",placeholder:"••••••",disabled:z})]})]}),p&&!C&&_.jsx("div",{className:"text-right mt-1",children:_.jsx("button",{type:"button",onClick:()=>N(!0),className:"text-sm font-bold text-blue-500 hover:text-blue-600 underline transition-colors",children:"Quên mã PIN?"})}),_.jsxs("div",{className:"flex gap-3 mt-6 pt-4 border-t-2 border-pink-100",children:[_.jsx("button",{type:"button",onClick:()=>{r(1),l(""),h(""),m(""),N(!1),j("")},disabled:z,className:"px-5 py-4 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200 rounded-2xl text-gray-500 font-bold transition-colors",children:"←"}),_.jsx("button",{type:"submit",disabled:z,className:"flex-1 bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-4 px-4 rounded-2xl shadow-lg border border-pink-400 flex justify-center items-center gap-2 transition-all",children:z?_.jsx("span",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white"}):p?C?"Khôi phục PIN":"Mở Khóa":"Tạo & Đăng Nhập"})]})]})]})})]})}function vP({profile:t,onUnlock:e,onReset:n}){const[r,i]=$.useState(""),[s,o]=$.useState(""),[l,u]=$.useState(0),[h,f]=$.useState(0),[m,p]=$.useState(0),A=N=>{h>0||i(D=>D.length<6?(o(""),D+N):D)},C=()=>{h>0||i(N=>N.slice(0,-1))};return $.useEffect(()=>{const N=D=>{h>0||(/^[0-9]$/.test(D.key)?A(D.key):D.key==="Backspace"&&C())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[h]),$.useEffect(()=>{let N=!1;return(async()=>{if(r.length===6){const S=await IE(r);if(N)return;S===t.pin?(u(0),e()):(u(w=>{const x=w+1;return x===5?(o("Khóa tạm thời do nhập sai quá nhiều!"),f(Date.now()+6e4),SE(),ei("BRUTE_FORCE_WARNING",t.username,{attempts:x})):x<5&&o(`Mã PIN không đúng (Sai ${x}/5)`),x}),setTimeout(()=>{N||i("")},500))}})(),()=>{N=!0}},[r,t.pin,t.username,e]),$.useEffect(()=>{if(h>0){const N=setInterval(()=>{const D=Math.ceil((h-Date.now())/1e3);D<=0?(f(0),u(0),o(""),clearInterval(N)):p(D)},1e3);return()=>clearInterval(N)}},[h]),_.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 font-sans text-gray-800",children:[_.jsx(cp,{}),_.jsxs("div",{className:"max-w-sm w-full bg-white/80 backdrop-blur-xl border-2 border-pink-200 p-10 rounded-[48px] shadow-2xl shadow-pink-200/50 flex flex-col items-center z-10 relative",children:[_.jsx("div",{className:`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-4 shadow-inner transition-colors ${h>0?"bg-red-100 border-red-300":"bg-pink-100 border-pink-200"}`,children:_.jsx(ap,{className:`w-10 h-10 ${h>0?"text-red-500 animate-bounce":"text-pink-500"}`})}),_.jsx("h2",{className:`text-2xl font-black mb-1 ${h>0?"text-red-500":"text-gray-800"}`,children:h>0?"CẢNH BÁO!":"Đã Khóa Tổ"}),h>0?_.jsxs("div",{className:"text-center mb-6 mt-2 w-full",children:[_.jsx("p",{className:"text-red-500 font-bold mb-2",children:"Nhập sai quá nhiều lần!"}),_.jsxs("div",{className:"text-5xl font-black text-red-400 my-6",children:[m,"s"]}),_.jsx("p",{className:"text-sm text-gray-500",children:"Vui lòng đợi để thử lại."})]}):_.jsxs(_.Fragment,{children:[_.jsxs("p",{className:"text-sm text-gray-500 mb-8 text-center font-medium",children:["Xin chào ",_.jsx("span",{className:"text-pink-500 font-bold",children:t.username}),". Nhập PIN để mở khóa."]}),_.jsx("div",{className:"flex justify-center gap-3 mb-8 h-4",children:[...Array(6)].map((N,D)=>_.jsx("div",{className:`w-3.5 h-3.5 rounded-full transition-all duration-300 border border-pink-300 ${D<r.length?"bg-pink-500 shadow-md scale-110":"bg-pink-100"}`},D))}),s&&_.jsx("p",{className:"text-red-500 font-bold text-sm mb-4 h-5 animate-pulse",children:s}),!s&&_.jsx("p",{className:"h-5 mb-4"}),_.jsxs("div",{className:"grid grid-cols-3 gap-4 w-full max-w-[260px]",children:[[1,2,3,4,5,6,7,8,9].map(N=>_.jsx("button",{onClick:()=>A(N.toString()),className:"h-16 rounded-2xl bg-white hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-2xl font-bold text-pink-500 shadow-sm transition-colors active:scale-95",children:N},N)),_.jsx("div",{className:"col-start-2",children:_.jsx("button",{onClick:()=>A("0"),className:"w-full h-16 rounded-2xl bg-white hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-2xl font-bold text-pink-500 shadow-sm transition-colors active:scale-95",children:"0"})}),_.jsx("button",{onClick:C,className:"h-16 rounded-2xl bg-gray-50 hover:bg-pink-100 border-2 border-pink-100 hover:border-pink-300 text-gray-400 flex items-center justify-center transition-colors active:scale-95",children:_.jsx(Yo,{className:"w-6 h-6"})})]})]}),h===0&&_.jsx("button",{onClick:n,className:"mt-10 text-sm font-bold text-blue-500 hover:text-blue-600 underline transition-colors",children:"Đăng nhập lại / Quên mã PIN?"})]})]})}function kE({availableUsers:t,selectedUsers:e,onAdd:n,onRemove:r}){const[i,s]=$.useState(""),[o,l]=$.useState(!1),u=t.filter(f=>!e.includes(f)&&f.toLowerCase().includes(i.toLowerCase())),h=()=>{const f=i.trim();f&&!e.includes(f)&&(n(f),s(""),l(!1))};return _.jsxs("div",{className:"relative w-full",children:[_.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:e.map(f=>_.jsxs("span",{className:"bg-blue-100 border border-blue-200 text-blue-600 px-3 py-1.5 rounded-xl text-sm font-bold flex items-center gap-1 shadow-sm",children:[f," ",_.jsx("button",{type:"button",onClick:()=>r(f),className:"hover:text-red-400 text-blue-400",children:_.jsx(jR,{className:"w-4 h-4"})})]},f))}),_.jsxs("div",{className:"relative",children:[_.jsx(YR,{className:"w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"}),_.jsx("input",{type:"text",value:i,onChange:f=>{s(f.target.value),l(!0)},onFocus:()=>l(!0),onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),h())},className:"w-full bg-white border-2 border-pink-200 rounded-xl pl-12 pr-4 py-3.5 text-gray-800 focus:outline-none focus:border-pink-400 transition-colors",placeholder:"Nhập tên để tìm kiếm hoặc nhấn Enter để thêm..."}),o&&i.trim()!==""&&_.jsxs("div",{className:"absolute z-50 mt-2 w-full bg-white border-2 border-pink-200 rounded-2xl shadow-xl max-h-48 overflow-y-auto overflow-hidden",children:[u.length>0&&u.map(f=>_.jsxs("div",{onClick:()=>{n(f),s(""),l(!1)},className:"px-5 py-3 hover:bg-pink-50 border-b border-pink-50 cursor-pointer flex items-center justify-between transition-colors text-gray-700 font-bold",children:[f," ",_.jsx(EE,{className:"w-4 h-4 text-pink-400"})]},f)),!u.some(f=>f.toLowerCase()===i.trim().toLowerCase())&&_.jsxs("div",{onClick:h,className:"px-5 py-4 hover:bg-pink-50 cursor-pointer flex items-center justify-between transition-colors text-blue-500 font-bold border-t border-pink-200 bg-gray-50/50",children:['Thêm tài khoản "',i.trim(),'" ',_.jsx(lp,{className:"w-4 h-4"})]})]})]})]})}function wP({room:t,allUsers:e,onClose:n,onAddMember:r}){const[i,s]=$.useState([]),o=()=>{i.forEach(l=>r(l)),s([])};return _.jsx("div",{className:"fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4",children:_.jsxs("div",{className:"relative w-full max-w-md bg-white border-2 border-pink-200 rounded-[32px] shadow-2xl shadow-pink-200/50 overflow-visible",children:[_.jsxs("div",{className:"flex justify-between items-center p-6 border-b-2 border-pink-200 bg-pink-50/30 rounded-t-[32px]",children:[_.jsxs("h3",{className:"text-gray-800 font-black flex items-center gap-2 text-xl",children:[_.jsx(TE,{className:"w-6 h-6 text-pink-400"})," Quản lý thành viên"]}),_.jsx("button",{onClick:n,className:"text-gray-400 hover:text-pink-500 bg-white border border-pink-200 rounded-full p-2 shadow-sm transition-colors",children:_.jsx(Yo,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"p-6 space-y-6",children:[_.jsxs("div",{className:"bg-pink-50/50 p-4 rounded-2xl border-2 border-pink-100",children:[_.jsxs("h4",{className:"text-gray-700 text-sm font-bold flex items-center gap-2 mb-1",children:[_.jsx(UR,{className:"w-4 h-4 text-pink-400"})," Log Tổ Chat"]}),_.jsxs("p",{className:"text-xs text-gray-500 font-medium ml-6",children:["Tạo lúc: ",t.createdAt?new Date(t.createdAt).toLocaleString("vi-VN"):"Chưa rõ"]})]}),_.jsxs("div",{children:[_.jsxs("h4",{className:"text-gray-600 text-sm font-bold mb-3 flex items-center gap-2",children:[_.jsx(OR,{className:"w-4 h-4 text-green-500"})," Đã tham gia (",t.allowedUsers.length,")"]}),_.jsx("div",{className:"flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1",children:t.allowedUsers.map(l=>_.jsxs("span",{className:"bg-white border-2 border-pink-200 text-gray-700 font-bold px-3 py-1.5 rounded-full text-sm shadow-sm",children:[l," ",l===t.createdBy&&_.jsx("span",{className:"text-pink-500 text-xs ml-1",children:"(Trưởng phòng)"})]},l))})]}),_.jsxs("div",{className:"border-t-2 border-pink-100 pt-5 relative",children:[_.jsxs("h4",{className:"text-gray-600 text-sm font-bold mb-3 flex items-center gap-2",children:[_.jsx(EE,{className:"w-4 h-4 text-blue-500"})," Thêm thành viên mới"]}),_.jsx(kE,{availableUsers:e.filter(l=>!t.allowedUsers.includes(l)),selectedUsers:i,onAdd:l=>s([...i,l]),onRemove:l=>s(i.filter(u=>u!==l))}),i.length>0&&_.jsxs("button",{onClick:o,className:"w-full mt-4 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow-md border border-blue-400 transition-all",children:["Xác nhận thêm (",i.length,")"]})]})]})]})})}ah.createRoot(document.getElementById("root")).render(_.jsx(cT.StrictMode,{children:_.jsx(mP,{})}));
