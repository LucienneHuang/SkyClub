import{a as j,Q as M}from"./QCard.44961b50.js";import{_ as Z,aW as ee,s as E,aH as ae,o as L,c as U,f as c,k as d,e as _,t as $,F as Y,a0 as q,z as te,W,i as w,a1 as N,r as le,aY as se,a2 as ie,a3 as ne,a4 as re,a5 as oe}from"./index.ba439cff.js";import{Q as ce}from"./QCardActions.c78fe0d7.js";import{Q as de}from"./QDialog.29552595.js";import{Q as pe,a as V}from"./QBreadcrumbs.ab917c14.js";import{Q as G}from"./QImg.2662e198.js";import{Q as O}from"./QChip.74fd4d1b.js";import{a as ue}from"./QScrollArea.852c75f5.js";import{Q as me}from"./QInput.2cca6949.js";import{Q as fe}from"./QForm.b736d710.js";import{C as ge}from"./ClosePopup.050b1626.js";import{u as ve}from"./use-quasar.ee20863a.js";import{Q as he}from"./QSpinnerHearts.222b34a3.js";/* empty css                */import{e as ye,c as be,b as Ce,d as X,f as _e,a as K,S as xe,A as Le}from"./swiper.63e8ed35.js";/* empty css                   */import"./use-dark.69d94835.js";import"./use-prevent-scroll.0d45c8fb.js";import"./use-model-toggle.ad038e0e.js";import"./focusout.d66d2afd.js";import"./focus-manager.a1b6aa0a.js";import"./use-ratio.9a50bd66.js";import"./format.865294d5.js";function $e(h,e,S,m){return h.params.createElements&&Object.keys(m).forEach(u=>{if(!S[u]&&S.auto===!0){let r=ye(h.el,`.${m[u]}`)[0];r||(r=be("div",m[u]),r.className=m[u],h.el.append(r)),S[u]=r,e[u]=r}}),S}function D(h){return h===void 0&&(h=""),`.${h.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Be(h){let{swiper:e,extendParams:S,on:m,emit:u}=h;const r="swiper-pagination";S({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let B,C=0;const l=a=>(Array.isArray(a)?a:[a]).filter(t=>!!t);function z(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function i(a,t){const{bulletActiveClass:s}=e.params.pagination;!a||(a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${s}-${t}`),a=a[`${t==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${s}-${t}-${t}`)))}function A(a){const t=a.target.closest(D(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const s=X(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;const n=e.getSlideIndexByData(s),f=e.getSlideIndexByData(e.realIndex);n>e.slides.length-e.loopedSlides&&e.loopFix({direction:n>f?"next":"prev",activeSlideIndex:n,slideTo:!1}),e.slideToLoop(s)}else e.slideTo(s)}function y(){const a=e.rtl,t=e.params.pagination;if(z())return;let s=e.pagination.el;s=l(s);let n,f;const I=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,T=e.params.loop?Math.ceil(I/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(f=e.previousRealIndex||0,n=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex!="undefined"?(n=e.snapIndex,f=e.previousSnapIndex):(f=e.previousIndex||0,n=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const o=e.pagination.bullets;let x,b,Q;if(t.dynamicBullets&&(B=Ce(o[0],e.isHorizontal()?"width":"height",!0),s.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${B*(t.dynamicMainBullets+4)}px`}),t.dynamicMainBullets>1&&f!==void 0&&(C+=n-(f||0),C>t.dynamicMainBullets-1?C=t.dynamicMainBullets-1:C<0&&(C=0)),x=Math.max(n-C,0),b=x+(Math.min(o.length,t.dynamicMainBullets)-1),Q=(b+x)/2),o.forEach(p=>{const g=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(v=>`${t.bulletActiveClass}${v}`)].map(v=>typeof v=="string"&&v.includes(" ")?v.split(" "):v).flat();p.classList.remove(...g)}),s.length>1)o.forEach(p=>{const g=X(p);g===n?p.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),t.dynamicBullets&&(g>=x&&g<=b&&p.classList.add(...`${t.bulletActiveClass}-main`.split(" ")),g===x&&i(p,"prev"),g===b&&i(p,"next"))});else{const p=o[n];if(p&&p.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&o.forEach((g,v)=>{g.setAttribute("part",v===n?"bullet-active":"bullet")}),t.dynamicBullets){const g=o[x],v=o[b];for(let k=x;k<=b;k+=1)o[k]&&o[k].classList.add(...`${t.bulletActiveClass}-main`.split(" "));i(g,"prev"),i(v,"next")}}if(t.dynamicBullets){const p=Math.min(o.length,t.dynamicMainBullets+4),g=(B*p-B)/2-Q*B,v=a?"right":"left";o.forEach(k=>{k.style[e.isHorizontal()?v:"top"]=`${g}px`})}}s.forEach((o,x)=>{if(t.type==="fraction"&&(o.querySelectorAll(D(t.currentClass)).forEach(b=>{b.textContent=t.formatFractionCurrent(n+1)}),o.querySelectorAll(D(t.totalClass)).forEach(b=>{b.textContent=t.formatFractionTotal(T)})),t.type==="progressbar"){let b;t.progressbarOpposite?b=e.isHorizontal()?"vertical":"horizontal":b=e.isHorizontal()?"horizontal":"vertical";const Q=(n+1)/T;let p=1,g=1;b==="horizontal"?p=Q:g=Q,o.querySelectorAll(D(t.progressbarFillClass)).forEach(v=>{v.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${g})`,v.style.transitionDuration=`${e.params.speed}ms`})}t.type==="custom"&&t.renderCustom?(o.innerHTML=t.renderCustom(e,n+1,T),x===0&&u("paginationRender",o)):(x===0&&u("paginationRender",o),u("paginationUpdate",o)),e.params.watchOverflow&&e.enabled&&o.classList[e.isLocked?"add":"remove"](t.lockClass)})}function H(){const a=e.params.pagination;if(z())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let s=e.pagination.el;s=l(s);let n="";if(a.type==="bullets"){let f=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&f>t&&(f=t);for(let I=0;I<f;I+=1)a.renderBullet?n+=a.renderBullet.call(e,I,a.bulletClass):n+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?n=a.renderFraction.call(e,a.currentClass,a.totalClass):n=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?n=a.renderProgressbar.call(e,a.progressbarFillClass):n=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach(f=>{a.type!=="custom"&&(f.innerHTML=n||""),a.type==="bullets"&&e.pagination.bullets.push(...f.querySelectorAll(D(a.bulletClass)))}),a.type!=="custom"&&u("paginationRender",s[0])}function F(){e.params.pagination=$e(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(s=>_e(s,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=l(t),t.forEach(s=>{a.type==="bullets"&&a.clickable&&s.classList.add(a.clickableClass),s.classList.add(a.modifierClass+a.type),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(s.classList.add(`${a.modifierClass}${a.type}-dynamic`),C=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&s.classList.add(a.progressbarOppositeClass),a.clickable&&s.addEventListener("click",A),e.enabled||s.classList.add(a.lockClass)}))}function P(){const a=e.params.pagination;if(z())return;let t=e.pagination.el;t&&(t=l(t),t.forEach(s=>{s.classList.remove(a.hiddenClass),s.classList.remove(a.modifierClass+a.type),s.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&s.removeEventListener("click",A)})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...a.bulletActiveClass.split(" ")))}m("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=l(t),t.forEach(s=>{s.classList.remove(a.horizontalClass,a.verticalClass),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),m("init",()=>{e.params.pagination.enabled===!1?R():(F(),H(),y())}),m("activeIndexChange",()=>{typeof e.snapIndex=="undefined"&&y()}),m("snapIndexChange",()=>{y()}),m("snapGridLengthChange",()=>{H(),y()}),m("destroy",()=>{P()}),m("enable disable",()=>{let{el:a}=e.pagination;a&&(a=l(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),m("lock unlock",()=>{y()}),m("click",(a,t)=>{const s=t.target,n=l(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&n&&n.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const f=n[0].classList.contains(e.params.pagination.hiddenClass);u(f===!0?"paginationShow":"paginationHide"),n.forEach(I=>I.classList.toggle(e.params.pagination.hiddenClass))}});const J=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=l(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),F(),H(),y()},R=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=l(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),P()};Object.assign(e.pagination,{enable:J,disable:R,render:H,update:y,init:F,destroy:P})}const Se=h=>(re("data-v-86da0b92"),h=h(),oe(),h),we=Se(()=>_("div",{class:"text-h5 text-center"},"\u5546\u54C1\u5DF2\u4E0B\u67B6",-1)),Ae={id:"container"},Ie={id:"head",class:"q-mt-md"},ke={id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},Me={id:"section",class:"flex justify-center"},qe={class:"name text-weight-bold q-mb-md"},ze={class:"q-mb-sm"},Qe={class:"price text-weight-bold text-red-14"},De=["innerHTML"],He={class:"flex justify-center items-center"},Ee={__name:"ProductView",setup(h){const e=ve(),S=ee(),m=[Le,Be],u=E(!1),r=E(!1),B=E(1),C={required:i=>!!i||"\u6B04\u4F4D\u5FC5\u586B\uFF0C\u4E14\u4E0D\u5F97\u70BA 0",numberRequired:i=>!isNaN(i)&&i>0||"\u4E0D\u5F97\u5C0F\u65BC 0",limited:i=>i<=l.value.MaxNumber||"\u8D85\u904E\u5546\u54C1\u5269\u9918\u6578\u91CF"},l=E({_id:"",seller:"",sellername:"",name:"",price:0,currency:"",MaxNumber:0,image:"",images:[],description:"",category:"",sell:!0});(async()=>{try{e.loading.show({spinner:he,spinnerSize:140,message:"<h6>\u8CC7\u6599\u8F09\u5165\u4E2D\uFF0C\u8ACB\u8010\u5FC3\u7B49\u5019...</h6>",html:!0});const{data:i}=await ae.get("/products/"+S.params.id);l.value._id=i.result._id,l.value.seller=i.result.user._id,l.value.sellername=i.result.user.nickname,l.value.name=i.result.name,l.value.price=i.result.price,l.value.currency=i.result.currency,l.value.MaxNumber=i.result.MaxNumber,l.value.image=i.result.image,l.value.images=[...i.result.images],l.value.description=i.result.description,l.value.category=i.result.category,l.value.sell=i.result.sell,e.loading.hide(),l.value.sell===!1&&(u.value=!0)}catch{e.loading.hide(),e.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}})();const z=async()=>{try{r.value=!0,await ie.post("/users/cart",{product:l.value._id,seller:l.value.seller,quantity:B.value}),r.value=!1,await ne.fire({icon:"success",title:"\u65B0\u589E\u8CFC\u7269\u8ECA\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#B0A9EC",confirmButtonColor:"#B0A9EC",width:"20rem"})}catch(i){r.value=!1,e.notify({type:"negative",message:i.response.data.message})}};return(i,A)=>(L(),U(Y,null,[c(de,{modelValue:u.value,"onUpdate:modelValue":A[0]||(A[0]=y=>u.value=y),persistent:""},{default:d(()=>[c(j,{style:{width:"20rem"},class:"q-py-md"},{default:d(()=>[c(M,null,{default:d(()=>[we]),_:1}),c(M,{class:"q-pt-none text-h6 text-center"},{default:d(()=>[q(" \uFF0D\u5373\u5C07\u8DF3\u8F49\u5230\u4EA4\u6613\u4E3B\u9801\uFF0D ")]),_:1}),c(ce,{align:"center"},{default:d(()=>[te(c(W,{label:"OK",to:"/trade",color:"primary"},null,512),[[ge]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),_("div",Ae,[_("div",Ie,[c(pe,null,{default:d(()=>[c(V,{label:"Home",to:"/"}),c(V,{label:"\u4EA4\u6613",to:"/trade"}),c(V,{label:"\u5546\u54C1\u8CC7\u8A0A"})]),_:1}),_("div",ke,$(l.value.name),1)]),_("div",Me,[c(j,null,{default:d(()=>[c(M,{horizontal:"",class:"all"},{default:d(()=>[c(M,{class:"left"},{default:d(()=>[l.value.images.length!==0?(L(),w(N(xe),{key:0,modules:m,loop:!0,pagination:{clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1}},{default:d(()=>[(L(),w(N(K),{key:l.value.image},{default:d(()=>[c(G,{src:l.value.image},null,8,["src"])]),_:1})),(L(!0),U(Y,null,le(l.value.images,y=>(L(),w(N(K),{key:y},{default:d(()=>[c(G,{src:y},null,8,["src"])]),_:2},1024))),128))]),_:1})):(L(),w(G,{key:1,src:l.value.image},null,8,["src"]))]),_:1}),c(M,{class:"right q-my-sm q-px-lg"},{default:d(()=>[l.value.category==="\u5B63\u7968"?(L(),w(O,{key:0,color:"pink-3","text-color":"white",icon:"mdi-tag"},{default:d(()=>[q($(l.value.category),1)]),_:1})):l.value.category==="\u5468\u908A"?(L(),w(O,{key:1,color:`deep-purple-4
`,"text-color":"white",icon:"mdi-tag"},{default:d(()=>[q($(l.value.category),1)]),_:1})):l.value.category==="\u79AE\u5305"?(L(),w(O,{key:2,color:"cyan-4","text-color":"white",icon:"mdi-tag"},{default:d(()=>[q($(l.value.category),1)]),_:1})):(L(),w(O,{key:3,color:`blue-grey-8
`,"text-color":"white",icon:"mdi-tag"},{default:d(()=>[q($(l.value.category),1)]),_:1})),_("div",qe,$(l.value.name),1),_("div",ze,"\u8CE3\u5BB6:\xA0"+$(l.value.sellername)+"\uFF08"+$(l.value.seller)+"\uFF09",1),_("div",null,"\u5269\u9918\u6578\u91CF\uFF1A "+$(l.value.MaxNumber),1),_("div",Qe,"NT.\xA0"+$(l.value.price)+"\xA0",1),c(ue,{class:"scroll"},{default:d(()=>[_("div",{innerHTML:l.value.description,class:"q-mt-md description",style:{"font-size":"1.6rem"}},null,8,De)]),_:1}),c(fe,{onSubmit:se(z,["prevent"])},{default:d(()=>[_("div",null,[q(" \u8CFC\u8CB7\u6578\u91CF\uFF1A "),c(me,{rules:[C.required,C.numberRequired,C,C.limited],modelValue:B.value,"onUpdate:modelValue":A[1]||(A[1]=y=>B.value=y),modelModifiers:{number:!0},type:"number",style:{"max-width":"200px"}},null,8,["rules","modelValue"])]),c(M,null,{default:d(()=>[_("div",He,[c(W,{type:"submit",class:"buy",rounded:"",label:"Add To Cart",color:"accent",loading:r.value},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})])])],64))}};var ra=Z(Ee,[["__scopeId","data-v-86da0b92"]]);export{ra as default};
