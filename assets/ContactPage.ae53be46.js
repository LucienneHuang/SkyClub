import{Q as x,a as h}from"./QBreadcrumbs.f16f0441.js";import{Q as u}from"./QInput.77b6713d.js";import{a as v,Q as _}from"./QCard.ba089e82.js";import{_ as g,V as q,aF as w,a8 as y,o as Q,c as V,e as t,f as e,k as s,aS as C,X as k,a2 as S,a3 as B,aD as U,a1 as I}from"./index.c8f9d440.js";import{Q as z}from"./QCardActions.8d6a0330.js";import{Q as E}from"./QForm.a35d9800.js";import{v as F}from"./index.41093a57.js";import{u as P}from"./use-quasar.38f3816b.js";import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";const d=r=>(S("data-v-1b62f498"),r=r(),B(),r),j={id:"container",class:"q-ma-md"},N={id:"head",class:"q-my-md"},A=d(()=>t("div",{id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},"\u806F\u7D61\u6211\u5011",-1)),D={id:"section",class:"flex justify-center q-ma-xl"},H={id:"background",class:"q-ma-xl"},M=d(()=>t("div",{id:"backgroundtext",class:"text-white text-h4 text-weight-bold"},"Contact Us",-1)),R=d(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u540D\u7A31",-1)),X=d(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u4FE1\u7BB1",-1)),$=d(()=>t("div",{class:"text-h5 text-weight-bold text-white q-mr-md"},"\u5167\u5BB9",-1)),G={__name:"ContactPage",setup(r){const m=q(),p=P(),b=w();let c="";m.nickname!=="\u904A\u5BA2"?c=m.nickname:c="";const a=y({name:c,email:m.email,message:""}),n={required:l=>!!l||"\u6B04\u4F4D\u5FC5\u586B",email:l=>F.isEmail(l)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4"},f=async()=>{try{await U.post("/contactUs",a),await I.fire({icon:"success",title:"\u6210\u529F\u9001\u51FA",text:"\u975C\u5F85\u6211\u5011\u7684\u56DE\u8986"}),b.push("/")}catch{p.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}};return(l,o)=>(Q(),V("div",j,[t("div",N,[e(x,null,{default:s(()=>[e(h,{label:"Home",to:"/"}),e(h,{label:"\u806F\u7D61"})]),_:1}),A]),t("div",D,[t("div",H,[M,e(E,{onSubmit:C(f,["prevent"]),class:"q-ma-xl"},{default:s(()=>[e(v,{class:"bg-accent flex column justify-center items-center q-ma-xl"},{default:s(()=>[e(_,{class:"q-mb-sm",horizontal:""},{default:s(()=>[R,e(u,{type:"text",modelValue:a.name,"onUpdate:modelValue":o[0]||(o[0]=i=>a.name=i),rules:[n.required],dense:"",rounded:"",outlined:"","bg-color":"white",label:"\u7A31\u547C",hint:"\u8ACB\u8F38\u5165\u540D\u7A31","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(_,{class:"q-mb-sm",horizontal:""},{default:s(()=>[X,e(u,{type:"email",modelValue:a.email,"onUpdate:modelValue":o[1]||(o[1]=i=>a.email=i),rules:[n.required,n.email],rounded:"",outlined:"","bg-color":"white",label:"\u4FE1\u7BB1",hint:"\u8ACB\u8F38\u5165\u4FE1\u7BB1",dense:"","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(_,{class:"q-mb-sm",horizontal:""},{default:s(()=>[$,e(u,{type:"textarea",modelValue:a.message,"onUpdate:modelValue":o[2]||(o[2]=i=>a.message=i),rules:[n.required],rounded:"",outlined:"","bg-color":"white",label:"\u5167\u5BB9",hint:"\u8ACB\u8F38\u5165\u5167\u5BB9",dense:"","hide-hint":"",clearable:""},null,8,["modelValue","rules"])]),_:1}),e(z,{class:"q-mt-sm"},{default:s(()=>[e(k,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"primary",label:"\u9001\u51FA"})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]))}};var ae=g(G,[["__scopeId","data-v-1b62f498"]]);export{ae as default};
