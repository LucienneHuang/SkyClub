import{M as C,v as D,a5 as F,ar as T,E as q,as as f,s as P,a9 as Q,at as S,h as _,au as y,av as G,aw as K,u as m,B as L,ae as $}from"./index.bc7e349f.js";import{r as w,b as M}from"./focus-manager.a1b6aa0a.js";function U(){let e;const t=q();function n(){e=void 0}return C(n),D(n),{removeTick:n,registerTick(a){e=a,F(()=>{e===a&&(T(t)===!1&&e(),e=void 0)})}}}const c=[];function W(e){return c.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function O(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return f(e)}else if(e.__qPortal===!0){const n=f(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=f(e)}while(e!=null)}function z(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=O(e,t);continue}e.hide(t)}e=f(e)}}function A(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function J(e,t,n,a){const i=P(!1),u=P(!1);let r=null;const d={},p=a==="dialog"&&A(e);function k(v){if(v===!0){w(d),u.value=!0;return}u.value=!1,i.value===!1&&(p===!1&&r===null&&(r=G(!1,a)),i.value=!0,c.push(e.proxy),M(d))}function h(v){if(u.value=!1,v!==!0)return;w(d),i.value=!1;const g=c.indexOf(e.proxy);g!==-1&&c.splice(g,1),r!==null&&(K(r),r=null)}return Q(()=>{h(!0)}),e.proxy.__qPortal=!0,S(e.proxy,"contentEl",()=>t.value),{showPortal:k,hidePortal:h,portalIsActive:i,portalIsAccessible:u,renderPortal:()=>p===!0?n():i.value===!0?[_(y,{to:r},n())]:void 0}}const R={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function V(e,t=()=>{},n=()=>{}){return{transitionProps:m(()=>{const a=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:m(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const o=[];let l;function I(e){l=e.keyCode===27}function B(){l===!0&&(l=!1)}function N(e){l===!0&&(l=!1,L(e,27)===!0&&o[o.length-1](e))}function b(e){window[e]("keydown",I),window[e]("blur",B),window[e]("keyup",N),l=!1}function X(e){$.is.desktop===!0&&(o.push(e),o.length===1&&b("addEventListener"))}function Y(e){const t=o.indexOf(e);t>-1&&(o.splice(t,1),o.length===0&&b("removeEventListener"))}const s=[];function E(e){s[s.length-1](e)}function Z(e){$.is.desktop===!0&&(s.push(e),s.length===1&&document.body.addEventListener("focusin",E))}function x(e){const t=s.indexOf(e);t>-1&&(s.splice(t,1),s.length===0&&document.body.removeEventListener("focusin",E))}export{R as a,V as b,J as c,Z as d,Y as e,O as f,X as g,W as h,z as i,c as p,x as r,U as u};