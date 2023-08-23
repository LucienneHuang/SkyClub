import{p as ke,q as F,s as L,u as f,v as ue,x as nt,y as Ve,z as Oe,R as De,h as S,A as Qe,B as rt,C as st,Q as ae,D as Fe,E as oe,G as it,H as ce,I as ut,J as ct,K as B,L as ft,M as dt,N as vt,O as ze,P as Ee,S as ht,U as bt,V as mt,W as gt,_ as _t,X as yt,Y as wt,b as Ct,o as O,i as X,k as c,f as n,Z as me,e as H,$ as ge,a0 as j,a1 as G,t as ie,c as Y,r as _e,F as Z,a as ye,n as kt,a2 as xt,a3 as Tt,a4 as qt,a5 as St}from"./index.a70a2635.js";import{Q as pt,a as Be,b as Lt,c as Rt,d as $t}from"./QLayout.ad3287a3.js";import{u as Pt}from"./focus-manager.a1b6aa0a.js";import{Q as He,a as Qt}from"./QScrollArea.2786550b.js";import{u as we}from"./focusout.eadb2519.js";import{u as Ae}from"./use-model-toggle.daedaead.js";import{r as Bt}from"./rtl.b51694b1.js";import{Q as ee,a as J}from"./QItem.d107ef03.js";import{Q as Ie,a as Ce}from"./QList.d403ecda.js";import{Q as At}from"./QMenu.207fd04d.js";import{Q as Me}from"./QToolbar.31dde47c.js";import{Q as It}from"./QImg.c5b36a72.js";import{u as Mt}from"./use-quasar.e245089a.js";import{S as Vt,a as Ot,A as Dt}from"./swiper.5b5a7c64.js";import"./use-prevent-scroll.8fe66eea.js";import"./use-dark.5ecc7119.js";import"./format.865294d5.js";import"./use-ratio.1f96d319.js";let Ft=0;const zt=["click","keydown"],Et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ft++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ht(e,p,b,r){const t=ke(Ve,F);if(t===F)return console.error("QTab/QRouteTab component needs to be child of QTabs"),F;const{proxy:y}=oe(),w=L(null),T=L(null),$=L(null),A=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=f(()=>t.currentModel.value===e.name),_=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(r!==void 0?r.linkClass.value:"")),C=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),v=f(()=>e.disable===!0||t.hasFocus.value===!0||R.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function q(u,P){if(P!==!0&&w.value!==null&&w.value.focus(),e.disable===!0){r!==void 0&&r.hasRouterLink.value===!0&&Qe(u);return}if(r===void 0){t.updateModel({name:e.name}),b("click",u);return}if(r.hasRouterLink.value===!0){const l=(m={})=>{let I;const V=m.to===void 0||it(m.to,e.to)===!0?t.avoidRouteWatcher=Pt():null;return r.navigateToRouterLink(u,{...m,returnRouterError:!0}).catch(N=>{I=N}).then(N=>{if(V===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,I===void 0&&(N===void 0||N.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),m.returnRouterError===!0)return I!==void 0?Promise.reject(I):N})};b("click",u,l),u.defaultPrevented!==!0&&l();return}b("click",u)}function h(u){rt(u,[13,32])?q(u,!0):st(u)!==!0&&u.keyCode>=35&&u.keyCode<=40&&u.altKey!==!0&&u.metaKey!==!0&&t.onKbdNavigate(u.keyCode,y.$el)===!0&&Qe(u),b("keydown",u)}function i(){const u=t.tabProps.value.narrowIndicator,P=[],l=S("div",{ref:$,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&P.push(S(ae,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&P.push(S("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&P.push(e.alertIcon!==void 0?S(ae,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):S("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),u===!0&&P.push(l);const m=[S("div",{class:"q-focus-helper",tabindex:-1,ref:w}),S("div",{class:C.value},Fe(p.default,P))];return u===!1&&m.push(l),m}const M={name:f(()=>e.name),rootRef:T,tabIndicatorRef:$,routeData:r};ue(()=>{t.unregisterTab(M)}),nt(()=>{t.registerTab(M)});function U(u,P){const l={ref:T,class:_.value,tabindex:v.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:h,...P};return Oe(S(u,l,i()),[[De,A.value]])}return{renderTab:U,$tabs:t}}var te=ce({name:"QRouteTab",props:{...ut,...Et},emits:zt,setup(e,{slots:p,emit:b}){const r=ct({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:y}=Ht(e,p,b,{exact:f(()=>e.exact),...r});return B(()=>`${e.name} | ${e.exact} | ${(r.resolvedLink.value||{}).href}`,()=>{y.verifyRouteModel()}),()=>t(r.linkTag.value,r.linkAttrs.value)}});function Nt(e,p,b){const r=b===!0?["left","right"]:["top","bottom"];return`absolute-${p===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const Ut=["left","center","right","justify"];var Wt=ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ut.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:p,emit:b}){const{proxy:r}=oe(),{$q:t}=r,{registerTick:y}=we(),{registerTick:w}=we(),{registerTick:T}=we(),{registerTimeout:$,removeTimeout:A}=Ae(),{registerTimeout:R,removeTimeout:_}=Ae(),C=L(null),v=L(null),q=L(e.modelValue),h=L(!1),i=L(!0),M=L(!1),U=L(!1),u=[],P=L(0),l=L(!1);let m=null,I=null,V;const N=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Nt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ne=f(()=>{const a=P.value,o=q.value;for(let s=0;s<a;s++)if(u[s].name.value===o)return!0;return!1}),Ue=f(()=>`q-tabs__content--align-${h.value===!0?"left":U.value===!0?"justify":e.align}`),We=f(()=>`q-tabs row no-wrap items-center q-tabs--${h.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ke=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ue.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),le=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ne=f(()=>e.vertical!==!0&&t.lang.rtl===!0),de=f(()=>Bt===!1&&ne.value===!0);B(ne,K),B(()=>e.modelValue,a=>{ve({name:a,setCurrent:!0,skipEmit:!0})}),B(()=>e.outsideArrows,re);function ve({name:a,setCurrent:o,skipEmit:s}){q.value!==a&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&b("update:modelValue",a),(o===!0||e["onUpdate:modelValue"]===void 0)&&(je(q.value,a),q.value=a))}function re(){y(()=>{xe({width:C.value.offsetWidth,height:C.value.offsetHeight})})}function xe(a){if(le.value===void 0||v.value===null)return;const o=a[le.value.container],s=Math.min(v.value[le.value.scroll],Array.prototype.reduce.call(v.value.children,(x,g)=>x+(g[le.value.content]||0),0)),k=o>0&&s>o;h.value=k,k===!0&&w(K),U.value=o<parseInt(e.breakpoint,10)}function je(a,o){const s=a!=null&&a!==""?u.find(x=>x.name.value===a):null,k=o!=null&&o!==""?u.find(x=>x.name.value===o):null;if(s&&k){const x=s.tabIndicatorRef.value,g=k.tabIndicatorRef.value;m!==null&&(clearTimeout(m),m=null),x.style.transition="none",x.style.transform="none",g.style.transition="none",g.style.transform="none";const d=x.getBoundingClientRect(),Q=g.getBoundingClientRect();g.style.transform=e.vertical===!0?`translate3d(0,${d.top-Q.top}px,0) scale3d(1,${Q.height?d.height/Q.height:1},1)`:`translate3d(${d.left-Q.left}px,0,0) scale3d(${Q.width?d.width/Q.width:1},1,1)`,T(()=>{m=setTimeout(()=>{m=null,g.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",g.style.transform="none"},70)})}k&&h.value===!0&&W(k.rootRef.value)}function W(a){const{left:o,width:s,top:k,height:x}=v.value.getBoundingClientRect(),g=a.getBoundingClientRect();let d=e.vertical===!0?g.top-k:g.left-o;if(d<0){v.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(d),K();return}d+=e.vertical===!0?g.height-x:g.width-s,d>0&&(v.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(d),K())}function K(){const a=v.value;if(a===null)return;const o=a.getBoundingClientRect(),s=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);ne.value===!0?(i.value=Math.ceil(s+o.width)<a.scrollWidth-1,M.value=s>0):(i.value=s>0,M.value=e.vertical===!0?Math.ceil(s+o.height)<a.scrollHeight:Math.ceil(s+o.width)<a.scrollWidth)}function Te(a){I!==null&&clearInterval(I),I=setInterval(()=>{Xe(a)===!0&&z()},5)}function qe(){Te(de.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){Te(de.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){I!==null&&(clearInterval(I),I=null)}function Ge(a,o){const s=Array.prototype.filter.call(v.value.children,Q=>Q===o||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),k=s.length;if(k===0)return;if(a===36)return W(s[0]),s[0].focus(),!0;if(a===35)return W(s[k-1]),s[k-1].focus(),!0;const x=a===(e.vertical===!0?38:37),g=a===(e.vertical===!0?40:39),d=x===!0?-1:g===!0?1:void 0;if(d!==void 0){const Q=ne.value===!0?-1:1,D=s.indexOf(o)+d*Q;return D>=0&&D<k&&(W(s[D]),s[D].focus({preventScroll:!0})),!0}}const Je=f(()=>de.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,o)=>{a.scrollLeft=-o}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,o)=>{a.scrollTop=o}}:{get:a=>a.scrollLeft,set:(a,o)=>{a.scrollLeft=o}});function Xe(a){const o=v.value,{get:s,set:k}=Je.value;let x=!1,g=s(o);const d=a<g?-1:1;return g+=d*5,g<0?(x=!0,g=0):(d===-1&&g<=a||d===1&&g>=a)&&(x=!0,g=a),k(o,g),K(),x}function pe(a,o){for(const s in a)if(a[s]!==o[s])return!1;return!0}function Ye(){let a=null,o={matchedLen:0,queryDiff:9999,hrefLen:0};const s=u.filter(d=>d.routeData!==void 0&&d.routeData.hasRouterLink.value===!0),{hash:k,query:x}=r.$route,g=Object.keys(x).length;for(const d of s){const Q=d.routeData.exact.value===!0;if(d.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:D,query:he,matched:ot,href:lt}=d.routeData.resolvedLink.value,be=Object.keys(he).length;if(Q===!0){if(D!==k||be!==g||pe(x,he)===!1)continue;a=d.name.value;break}if(D!==""&&D!==k||be!==0&&pe(he,x)===!1)continue;const E={matchedLen:ot.length,queryDiff:g-be,hrefLen:lt.length-D.length};if(E.matchedLen>o.matchedLen){a=d.name.value,o=E;continue}else if(E.matchedLen!==o.matchedLen)continue;if(E.queryDiff<o.queryDiff)a=d.name.value,o=E;else if(E.queryDiff!==o.queryDiff)continue;E.hrefLen>o.hrefLen&&(a=d.name.value,o=E)}a===null&&u.some(d=>d.routeData===void 0&&d.name.value===q.value)===!0||ve({name:a,setCurrent:!0})}function Ze(a){if(A(),l.value!==!0&&C.value!==null&&a.target&&typeof a.target.closest=="function"){const o=a.target.closest(".q-tab");o&&C.value.contains(o)===!0&&(l.value=!0,h.value===!0&&W(o))}}function et(){$(()=>{l.value=!1},30)}function se(){Re.avoidRouteWatcher===!1?R(Ye):_()}function Le(){if(V===void 0){const a=B(()=>r.$route.fullPath,se);V=()=>{a(),V=void 0}}}function tt(a){u.push(a),P.value++,re(),a.routeData===void 0||r.$route===void 0?R(()=>{if(h.value===!0){const o=q.value,s=o!=null&&o!==""?u.find(k=>k.name.value===o):null;s&&W(s.rootRef.value)}}):(Le(),a.routeData.hasRouterLink.value===!0&&se())}function at(a){u.splice(u.indexOf(a),1),P.value--,re(),V!==void 0&&a.routeData!==void 0&&(u.every(o=>o.routeData===void 0)===!0&&V(),se())}const Re={currentModel:q,tabProps:N,hasFocus:l,hasActiveTab:Ne,registerTab:tt,unregisterTab:at,verifyRouteModel:se,updateModel:ve,onKbdNavigate:Ge,avoidRouteWatcher:!1};ft(Ve,Re);function $e(){m!==null&&clearTimeout(m),z(),V!==void 0&&V()}let Pe;return ue($e),dt(()=>{Pe=V!==void 0,$e()}),vt(()=>{Pe===!0&&Le(),re()}),()=>S("div",{ref:C,class:We.value,role:"tablist",onFocusin:Ze,onFocusout:et},[S(He,{onResize:xe}),S("div",{ref:v,class:Ke.value,onScroll:K},ze(p.default)),S(ae,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(i.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),S(ae,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}});const Kt={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function jt(){const{props:e,proxy:{$q:p}}=oe(),b=ke(Ee,F);if(b===F)return console.error("QPageSticky needs to be child of QLayout"),F;const r=f(()=>{const _=e.position;return{top:_.indexOf("top")>-1,right:_.indexOf("right")>-1,bottom:_.indexOf("bottom")>-1,left:_.indexOf("left")>-1,vertical:_==="top"||_==="bottom",horizontal:_==="left"||_==="right"}}),t=f(()=>b.header.offset),y=f(()=>b.right.offset),w=f(()=>b.footer.offset),T=f(()=>b.left.offset),$=f(()=>{let _=0,C=0;const v=r.value,q=p.lang.rtl===!0?-1:1;v.top===!0&&t.value!==0?C=`${t.value}px`:v.bottom===!0&&w.value!==0&&(C=`${-w.value}px`),v.left===!0&&T.value!==0?_=`${q*T.value}px`:v.right===!0&&y.value!==0&&(_=`${-q*y.value}px`);const h={transform:`translate(${_}, ${C})`};return e.offset&&(h.margin=`${e.offset[1]}px ${e.offset[0]}px`),v.vertical===!0?(T.value!==0&&(h[p.lang.rtl===!0?"right":"left"]=`${T.value}px`),y.value!==0&&(h[p.lang.rtl===!0?"left":"right"]=`${y.value}px`)):v.horizontal===!0&&(t.value!==0&&(h.top=`${t.value}px`),w.value!==0&&(h.bottom=`${w.value}px`)),h}),A=f(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function R(_){const C=ze(_.default);return S("div",{class:A.value,style:$.value},e.expand===!0?C:[S("div",C)])}return{$layout:b,getStickyContent:R}}var Gt=ce({name:"QPageScroller",props:{...Kt,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(e,{slots:p,emit:b}){const{proxy:{$q:r}}=oe(),{$layout:t,getStickyContent:y}=jt(),w=L(null);let T;const $=f(()=>t.height.value-(t.isContainer.value===!0?t.containerHeight.value:r.screen.height));function A(){return e.reverse===!0?$.value-t.scroll.value.position>e.scrollOffset:t.scroll.value.position>e.scrollOffset}const R=L(A());function _(){const i=A();R.value!==i&&(R.value=i)}function C(){e.reverse===!0?T===void 0&&(T=B($,_)):v()}B(t.scroll,_),B(()=>e.reverse,C);function v(){T!==void 0&&(T(),T=void 0)}function q(i){const M=bt(t.isContainer.value===!0?w.value:t.rootRef.value);mt(M,e.reverse===!0?t.height.value:0,e.duration),b("click",i)}function h(){return R.value===!0?S("div",{ref:w,class:"q-page-scroller",onClick:q},y(p)):null}return C(),ue(v),()=>S(ht,{name:"q-transition--fade"},h)}}),Jt=ce({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:p,emit:b}){const{proxy:{$q:r}}=oe(),t=ke(Ee,F);if(t===F)return console.error("QFooter needs to be child of QLayout"),F;const y=L(parseInt(e.heightHint,10)),w=L(!0),T=L(gt.value===!0||t.isContainer.value===!0?0:window.innerHeight),$=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||r.platform.is.ios&&t.isContainer.value===!0),A=f(()=>t.isContainer.value===!0?t.containerHeight.value:T.value),R=f(()=>{if(e.modelValue!==!0)return 0;if($.value===!0)return w.value===!0?y.value:0;const l=t.scroll.value.position+A.value+y.value-t.height.value;return l>0?l:0}),_=f(()=>e.modelValue!==!0||$.value===!0&&w.value!==!0),C=f(()=>e.modelValue===!0&&_.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+($.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(_.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+($.value!==!0?" hidden":""):"")),q=f(()=>{const l=t.rows.value.bottom,m={};return l[0]==="l"&&t.left.space===!0&&(m[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(m[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),m});function h(l,m){t.update("footer",l,m)}function i(l,m){l.value!==m&&(l.value=m)}function M({height:l}){i(y,l),h("size",l)}function U(){if(e.reveal!==!0)return;const{direction:l,position:m,inflectionPoint:I}=t.scroll.value;i(w,l==="up"||m-I<100||t.height.value-A.value-m-y.value<300)}function u(l){C.value===!0&&i(w,!0),b("focusin",l)}B(()=>e.modelValue,l=>{h("space",l),i(w,!0),t.animate()}),B(R,l=>{h("offset",l)}),B(()=>e.reveal,l=>{l===!1&&i(w,e.modelValue)}),B(w,l=>{t.animate(),b("reveal",l)}),B([y,t.scroll,t.height],U),B(()=>r.screen.height,l=>{t.isContainer.value!==!0&&i(T,l)});const P={};return t.instances.footer=P,e.modelValue===!0&&h("size",y.value),h("space",e.modelValue),h("offset",R.value),ue(()=>{t.instances.footer===P&&(t.instances.footer=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const l=Fe(p.default,[S(He,{debounce:0,onResize:M})]);return e.elevated===!0&&l.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S("footer",{class:v.value,style:q.value,onFocusin:u},l)}}}),Xt="/SkyClub/assets/logo.e24e071f.png";const fe=e=>(qt("data-v-58dea795"),e=e(),St(),e),Yt={href:"#",class:"logo flex items-center"},Zt=fe(()=>H("img",{src:Xt},null,-1)),ea=["src"],ta={class:"carousel"},aa={class:"text non-selectable"},oa=fe(()=>H("div",{class:"deco"},null,-1)),la=fe(()=>H("img",{src:"https://stickershop.line-scdn.net/stickershop/v1/sticker/297078240/android/sticker.png?v=1"},null,-1)),na=fe(()=>H("div",{class:"footer"},"\u6CF0\u5C71\u7DB2\u9801\u8A2D\u8A08\u9752\u5E74\u5C08\u73ED \u9EC3\u8513\u6E1D",-1)),ra={__name:"MainLayout",setup(e){const p=Mt(),b=yt(),{isLogin:r,isAdmin:t}=wt(b),y=L(!1);function w(){y.value=!y.value}const T=[{to:"/",label:"\u9996\u9801",icon:"home"},{to:"/latestnews",label:"\u6700\u65B0\u6D88\u606F",icon:"announcement"},{to:"/realms",label:"\u5340\u57DF\u4ECB\u7D39",icon:"location_on"},{to:"/trade",label:"\u4EA4\u6613\u5C08\u5340",icon:"local_mall"},{to:"/contact",label:"\u806F\u7D61\u6211\u5011",icon:"call"}],$=f(()=>[{to:"/admin",label:"\u7BA1\u7406\u5F8C\u53F0",show:r.value&&t.value},{to:"/member",label:"\u6703\u54E1\u5F8C\u53F0",show:r.value&&!t.value},{to:"/register",label:"\u8A3B\u518A",show:!r.value},{to:"/login",label:"\u767B\u5165",show:!r.value},{to:"/cart",label:"\u8CFC\u7269\u8ECA",show:r.value&&!t.value}]),A=[Dt],R=[{name:"img1",src:new URL("/SkyClub/assets/carousel1.78d11c3d.JPG",self.location).href,text:"\u61F7\u8457\u6EAB\u6696\u7684\u5FC3\u4E00\u540C\u5192\u96AA\u5427\u3002"},{name:"img2",src:new URL("/SkyClub/assets/carousel2.ed6ff49d.JPG",self.location).href,text:"\u5728\u5149\u9047\uFF0C\u9047\u898B\u4F60\u771F\u597D\u3002"},{name:"img3",src:new URL("/SkyClub/assets/carousel3.83efed9c.JPG",self.location).href,text:"PC \u7248\u5373\u5C07\u4E0A\u5E02\u3002"},{name:"img4",src:new URL("/SkyClub/assets/carousel4.c3aba401.JPG",self.location).href,text:"\u8B93 AURORA \u5E36\u9818\u4F60\u8E0F\u4E0A\u97F3\u6A02\u4E4B\u65C5\u3002"}],_=async()=>{try{await xt.delete("/users/logout"),b.logout(),await Tt.fire({icon:"success",title:"\u767B\u51FA\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#B0A9EC",confirmButtonColor:"#B0A9EC",width:"20rem"})}catch{p.notify({type:"negative",message:"\u767B\u51FA\u5931\u6557"})}},C=()=>{const v=document.querySelector("#navbar");window.scrollY>50?v.classList.add("solid-nav"):v.classList.remove("solid-nav")};return(v,q)=>{const h=Ct("router-view");return O(),X(pt,{onScroll:C,view:"hhh Lpr fff"},{default:c(()=>[n(Lt,{class:"text-white","height-hint":"98"},{default:c(()=>[n(Me,{id:"navbar",class:"row q-py-md"},{default:c(()=>[n(me,{class:"menuBtn",dense:"",flat:"",round:"",icon:"menu",onClick:w}),H("a",Yt,[n(ge,{size:"4rem"},{default:c(()=>[Zt]),_:1}),n(Be,{class:"col-md-2 text-weight-bold text-h4"},{default:c(()=>[j("\u5149\u9047 Club")]),_:1})]),n(Wt,{align:"center","active-color":"primary",class:"col-md-8 q-mt-md"},{default:c(()=>[n(te,{to:"/",label:"\u9996\u9801"}),n(te,{to:"/latestnews",label:"\u6700\u65B0\u6D88\u606F"}),n(te,{to:"/realms",label:"\u5340\u57DF\u4ECB\u7D39"}),n(te,{to:"/trade",label:"\u4EA4\u6613\u5C08\u5340"}),n(te,{to:"/contact",label:"\u806F\u7D61\u6211\u5011"})]),_:1}),n(me,{class:"q-ml-auto",flat:"",round:"",dense:""},{default:c(()=>[n(ge,null,{default:c(()=>[H("img",{src:G(b).avatar},null,8,ea)]),_:1}),n(At,{square:"",class:"bg-primary text-center"},{default:c(()=>[n(Ie,{dense:""},{default:c(()=>[n(ee,{clickable:""},{default:c(()=>[n(J,null,{default:c(()=>[j(ie(G(b).nickname),1)]),_:1})]),_:1}),n(Ce,{inset:""}),(O(!0),Y(Z,null,_e($.value,i=>(O(),Y(Z,{key:i.to},[i.show?(O(),X(ee,{key:0,clickable:"",to:i.to},{default:c(()=>[n(J,null,{default:c(()=>[j(ie(i.label),1)]),_:2},1024)]),_:2},1032,["to"])):ye("",!0)],64))),128)),G(r)?(O(),X(ee,{key:0,clickable:"",onClick:_},{default:c(()=>[n(J,null,{default:c(()=>[j("\u767B\u51FA")]),_:1})]),_:1})):ye("",!0),n(Ce,{inset:""}),n(ee,{clickable:"",href:"#"},{default:c(()=>[n(J,null,{default:c(()=>[j("\u56DE\u9996\u9801")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(G(Vt),{modules:A,loop:!0,autoplay:{delay:6e3,disableOnInteraction:!1}},{default:c(()=>[(O(),Y(Z,null,_e(R,i=>n(G(Ot),{key:i.name},{default:c(()=>[H("div",ta,[H("div",aa,ie(i.text),1),n(It,{src:i.src},null,8,["src"])])]),_:2},1024)),64))]),_:1}),oa]),_:1}),n(Rt,{"show-if-above":"",modelValue:y.value,"onUpdate:modelValue":q[0]||(q[0]=i=>y.value=i),side:"left",bordered:"",behavior:"mobile",class:kt(G(p).dark.isActive?"bg-grey-9":"bg-white")},{default:c(()=>[n(Qt,{class:"fit"},{default:c(()=>[n(Ie,null,{default:c(()=>[(O(),Y(Z,null,_e(T,(i,M)=>(O(),Y(Z,{key:i.to},[Oe((O(),X(ee,{clickable:"",active:i.label==="Outbox",to:i.to},{default:c(()=>[n(J,{avatar:""},{default:c(()=>[n(ae,{name:i.icon},null,8,["name"])]),_:2},1024),n(J,null,{default:c(()=>[j(ie(i.label),1)]),_:2},1024)]),_:2},1032,["active","to"])),[[De]]),i.separator?(O(),X(Ce,{key:"sep"+M})):ye("",!0)],64))),64))]),_:1})]),_:1})]),_:1},8,["modelValue","class"]),n($t,null,{default:c(()=>[n(Gt,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:c(()=>[n(me,{flat:""},{default:c(()=>[n(ge,{square:"",size:"70px"},{default:c(()=>[la]),_:1})]),_:1})]),_:1}),n(h)]),_:1}),n(Jt,{class:"bg-accent text-white"},{default:c(()=>[n(Me,null,{default:c(()=>[n(Be,null,{default:c(()=>[na]),_:1})]),_:1})]),_:1})]),_:1})}}};var qa=_t(ra,[["__scopeId","data-v-58dea795"]]);export{qa as default};
