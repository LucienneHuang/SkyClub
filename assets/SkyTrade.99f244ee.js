import{Q as h,a as x}from"./QBreadcrumbs.f16f0441.js";import{_ as Q,s as r,K as m,x as b,aR as q,o as p,c as v,e as l,f as t,k as c,Z as _,F as w,r as O,aD as V,Q as B,aE as C}from"./index.c8f9d440.js";import{Q as S}from"./QInput.77b6713d.js";import{Q as y}from"./QChip.4887a838.js";import{Q as T}from"./QPagination.237999f0.js";import{u as E}from"./use-quasar.38f3816b.js";import{P as I}from"./ProductCard.37f23aa6.js";import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";import"./format.865294d5.js";import"./QImg.08cde18d.js";import"./use-ratio.a95bd297.js";import"./QCard.ba089e82.js";/* empty css                */const N={id:"container",class:"q-ma-md"},$={id:"head",class:"q-my-md"},F={id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md flex"},U={class:"q-mt-md q-ml-lg"},j={id:"section",class:"flex justify-center"},z={class:"q-pa-lg flex flex-center"},A={__name:"SkyTrade",setup(D){const k=E(),i=r([]),u=r("desc"),f=r(0),P=r(9),s=r(1),d=r(""),n=async()=>{try{const{data:a}=await V.get("/products",{params:{currentPage:s.value,productsPerPage:P.value,sortOrder:u.value,search:d.value}});i.value.splice(0,i.value.length,...a.result.data),f.value=a.result.count}catch{k.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}};n();const g=a=>{u.value=a};return m(s,async(a,e)=>{n()}),m(u,async(a,e)=>{s.value=1,n()}),m(d,async(a,e)=>{s.value=1,n()}),b(()=>{q.init()}),(a,e)=>(p(),v("div",N,[l("div",$,[t(h,null,{default:c(()=>[t(x,{label:"Home",to:"/"}),t(x,{label:"\u4EA4\u6613"})]),_:1}),l("div",F,[_("\u4EA4\u6613\u5C08\u5340 "),t(S,{class:"q-ml-md q-mt-sm",rounded:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=o=>d.value=o),color:"accent",label:"\u8ACB\u8F38\u5165\u5546\u54C1\u95DC\u9375\u5B57"},{append:c(()=>[t(B,{name:"search",color:"accent",size:"2.5rem"})]),_:1},8,["modelValue"])]),l("div",U,[t(y,{clickable:"",onClick:e[1]||(e[1]=o=>g("decs")),color:"accent","text-color":"white"},{default:c(()=>[_(" \u6700\u65B0 ")]),_:1}),t(y,{clickable:"",onClick:e[2]||(e[2]=o=>g("asc")),color:"accent","text-color":"white"},{default:c(()=>[_(" \u6700\u820A ")]),_:1})])]),l("div",j,[(p(!0),v(w,null,O(i.value,o=>(p(),v("div",{key:o._id},[t(I,C(o,{"data-aos":"flip-left","data-aos-duration":"1300","data-aos-easing":"ease-in-out-back"}),null,16)]))),128))]),l("div",z,[t(T,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=o=>s.value=o),max:f.value,"boundary-links":"","direction-links":""},null,8,["modelValue","max"])])]))}};var oe=Q(A,[["__scopeId","data-v-044d0175"]]);export{oe as default};
