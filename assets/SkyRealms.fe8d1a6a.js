import{Q as m,a as i}from"./QBreadcrumbs.2e8d6ad2.js";import{u as n}from"./use-quasar.d7c9087e.js";import{_,s as p,aJ as u,o as t,c as o,e as r,f as a,k as f,F as v,r as h,aK as y,a4 as g,a5 as x}from"./index.94d26764.js";import{R as k}from"./RealmCard.290688c4.js";import"./QImg.ab902833.js";import"./use-ratio.1af68843.js";import"./QCard.75b1fd4b.js";import"./use-dark.d0703fc8.js";const b=e=>(g("data-v-2c26d8e0"),e=e(),x(),e),q={id:"container",class:"q-ma-md"},R={id:"head",class:"q-my-md"},S=b(()=>r("div",{id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},"\u5340\u57DF\u4ECB\u7D39",-1)),B={id:"section",class:"flex justify-center"},w={__name:"SkyRealms",setup(e){const l=n(),c=p([]);return(async()=>{try{const{data:s}=await u.get("/articles/getRealms");c.value.push(...s.result)}catch{l.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}})(),(s,I)=>(t(),o("div",q,[r("div",R,[a(m,null,{default:f(()=>[a(i,{label:"Home",to:"/"}),a(i,{label:"\u5340\u57DF\u4ECB\u7D39"})]),_:1}),S]),r("div",B,[(t(!0),o(v,null,h(c.value,d=>(t(),o("div",{key:d._id,class:"q-mx-xl"},[a(k,y(d,{"data-aos":"flip-left","data-aos-duration":"800","data-aos-easing":"ease-in-out-back"}),null,16)]))),128))])]))}};var J=_(w,[["__scopeId","data-v-2c26d8e0"]]);export{J as default};