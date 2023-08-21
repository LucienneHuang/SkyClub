import{Q as L}from"./use-fullscreen.d5a83cf7.js";import{a as A,Q as i}from"./QCard.ba089e82.js";import{Q as n}from"./QInput.77b6713d.js";import{Q as M}from"./QImg.08cde18d.js";import{_ as T,s as f,a8 as U,b as $,o as u,c as h,f as t,k as a,e as d,F as C,a0 as z,aS as j,r as F,i as E,z as O,X as g,Q as W,Z as N,t as V,a2 as P,a3 as R,a1 as X}from"./index.c8f9d440.js";import{Q as Z}from"./QCardActions.8d6a0330.js";import{Q as G}from"./QForm.a35d9800.js";import{Q as H}from"./QDialog.ecfd1e3a.js";import{Q as J,a as K,b}from"./QResponsive.a70910cb.js";import{C as Y}from"./ClosePopup.529459c1.js";import{u as ee}from"./use-quasar.38f3816b.js";/* empty css                */import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";import"./use-ratio.a95bd297.js";import"./use-prevent-scroll.3ca7a14d.js";import"./scroll.beb93c22.js";import"./focusout.dd8c9852.js";import"./QList.154434ca.js";import"./QMarkupTable.b3c0d831.js";import"./QSelect.f27ec8d3.js";import"./QChip.4887a838.js";import"./QItem.679a406a.js";import"./QMenu.f753cafe.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";const s=p=>(P("data-v-2ef49bba"),p=p(),R(),p),te={id:"form"},le=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg text-h6"},"\u51FA\u8CA8",-1)),ae=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8A02\u55AE\u7DE8\u865F",-1)),oe=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CE3\u5BB6\uFF29\uFF24 ",-1)),re=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CB7\u5BB6\u59D3\u540D",-1)),de=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CB7\u5BB6\u96FB\u8A71",-1)),se=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u65B9\u5F0F",-1)),ne=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5546\u54C1\u7E3D\u984D",-1)),ie=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8A02\u55AE\u65E5\u671F",-1)),me=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u4ED8\u6B3E\u65B9\u5F0F",-1)),ue={class:"text-center"},pe=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5546\u54C1\u540D\u7A31",-1)),ce=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u6578\u91CF",-1)),ye=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u55AE\u50F9",-1)),_e=s(()=>d("div",{id:"title",class:"q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable"},"\u51FA\u552E\u8A02\u55AE\u7BA1\u7406",-1)),fe={id:"container",class:"flex justify-center q-px-xl q-pb-xl"},he={key:0},be={key:1},ve={__name:"SalesManagement",setup(p){const x=ee(),q=f(""),c=f(!1),S=[{name:"datedetail",required:!0,label:"\u4EA4\u6613\u65E5\u671F",align:"center",field:"datedetail",sortable:!0},{name:"_id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:"_id",sortable:!1},{name:"buyer",required:!0,label:"\u8CB7\u5BB6",align:"center",field:"buyer",sortable:!1},{name:"total",required:!0,label:"\u7E3D\u91D1\u984D",align:"center",field:"total",sortable:!1},{name:"check",required:!0,label:"\u51FA\u8CA8\u72C0\u614B",align:"center",field:"check",sortable:!1},{name:"detail",required:!0,label:"\u8A73\u7D30\u8CC7\u8A0A",align:"center",field:"detail",sortable:!1}],v=U([]),w=async()=>{try{const{data:r}=await z.get("/orders/all");v.splice(0,v.length,...r.result)}catch(r){console.log(r),x.notify({type:"negative",message:r.response.data.message})}};w();const l=U({_id:"",buyer:"",realName:"",phoneNumber:"",address:"",payment:"",total:"",date:"",cart:[],check:!1}),D=r=>{c.value=!0,l._id=r._id,l.buyer=r.user.nickname+`\uFF08${r.user._id}\uFF09`,l.realName=r.realName,l.phoneNumber=r.phoneNumber,l.address=r.address,l.payment=r.payment,l.total=r.total,l.check=r.check,l.date=new Date(r.date).toLocaleString(),l.cart=[...r.cart]},I=async()=>{try{await z.patch("/orders/"+l._id,l),await X.fire({icon:"success",title:"\u66F4\u65B0\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#A6D8D4",confirmButtonColor:"#A6D8D4",width:"20rem"}),w()}catch(r){x.notify({type:"negative",message:r.response.data.message})}},y=f(""),_=f(""),k=()=>{window.innerWidth>975?(y.value=12,_.value=5):window.innerWidth>1200?(y.value=5,_.value=5):(y.value=2,_.value=2)};return k(),window.addEventListener("resize",()=>{k()}),(r,o)=>{const B=$("router-link");return u(),h(C,null,[t(H,{modelValue:c.value,"onUpdate:modelValue":o[10]||(o[10]=e=>c.value=e)},{default:a(()=>[d("div",te,[t(G,{onSubmit:j(I,["prevent"])},{default:a(()=>[t(A,null,{default:a(()=>[t(i,null,{default:a(()=>[t(i,{horizontal:"",class:"flex justify-center"},{default:a(()=>[le,t(L,{style:{"margin-top":"12px"},color:"primary",modelValue:l.check,"onUpdate:modelValue":o[0]||(o[0]=e=>l.check=e)},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[ae,t(n,{type:"text",readonly:"",modelValue:l._id,"onUpdate:modelValue":o[1]||(o[1]=e=>l._id=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[oe,t(n,{type:"text",readonly:"",modelValue:l.buyer,"onUpdate:modelValue":o[2]||(o[2]=e=>l.buyer=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"two"},{default:a(()=>[re,t(n,{type:"text",readonly:"",modelValue:l.realName,"onUpdate:modelValue":o[3]||(o[3]=e=>l.realName=e),color:"primary"},null,8,["modelValue"]),de,t(n,{type:"text",readonly:"",modelValue:l.phoneNumber,"onUpdate:modelValue":o[4]||(o[4]=e=>l.phoneNumber=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[se,t(n,{type:"text",readonly:"",modelValue:l.address,"onUpdate:modelValue":o[5]||(o[5]=e=>l.address=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"two"},{default:a(()=>[ne,t(n,{type:"text",readonly:"",modelValue:l.total,"onUpdate:modelValue":o[6]||(o[6]=e=>l.total=e),color:"primary"},null,8,["modelValue"]),ie,t(n,{type:"text",readonly:"",modelValue:l.date,"onUpdate:modelValue":o[7]||(o[7]=e=>l.date=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"q-mb-sm"},{default:a(()=>[me,t(n,{type:"text",readonly:"",modelValue:l.payment,"onUpdate:modelValue":o[8]||(o[8]=e=>l.payment=e),color:"primary"},null,8,["modelValue"])]),_:1}),(u(!0),h(C,null,F(l.cart,(e,Q)=>(u(),E(i,{key:Q,style:{background:"rgb(228, 228, 228)"},class:"q-mb-md"},{default:a(()=>[d("div",ue,[t(B,{to:"/trade/"+e.product._id},{default:a(()=>[t(M,{src:e.product.image,style:{width:"150px",height:"120px"}},null,8,["src"])]),_:2},1032,["to"])]),t(i,{horizontal:""},{default:a(()=>[pe,t(n,{type:"text",readonly:"",modelValue:e.product.name,"onUpdate:modelValue":m=>e.product.name=m,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{horizontal:"",class:"two"},{default:a(()=>[ce,t(n,{type:"text",readonly:"",modelValue:e.quantity,"onUpdate:modelValue":m=>e.quantity=m,color:"primary"},null,8,["modelValue","onUpdate:modelValue"]),ye,t(n,{type:"text",readonly:"",modelValue:e.product.price,"onUpdate:modelValue":m=>e.product.price=m,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(Z,{class:"flex justify-center q-mb-md"},{default:a(()=>[O(t(g,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"primary",label:"\u9001\u51FA"},null,512),[[Y]]),t(g,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"primary",label:"\u53D6\u6D88",onClick:o[9]||(o[9]=e=>c.value=!1)})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["modelValue"]),_e,d("div",fe,[t(J,{id:"wh",ratio:y.value/_.value},{default:a(()=>[t(K,{columns:S,"row-key":"name",rows:v,"rows-per-page-options":[10,0]},{"top-right":a(()=>[t(n,{color:"white",filled:"",clearable:"",borderless:"",dense:"",debounce:"300",modelValue:q.value,"onUpdate:modelValue":o[11]||(o[11]=e=>q.value=e),placeholder:"\u8ACB\u8F38\u5165\u51FA\u552E\u8A02\u55AE\u7DE8\u865F"},{append:a(()=>[t(W,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-buyer":a(e=>[t(b,{props:e},{default:a(()=>[N(V(e.row.user.nickname)+" \uFF08"+V(e.row.user._id)+"\uFF09 ",1)]),_:2},1032,["props"])]),"body-cell-datedetail":a(e=>[t(b,{props:e},{default:a(()=>[N(V(new Date(e.row.date).toLocaleString()),1)]),_:2},1032,["props"])]),"body-cell-check":a(e=>[t(b,{props:e},{default:a(()=>[e.value?(u(),h("div",he,"\u5DF2\u51FA\u8CA8")):(u(),h("div",be,"\u6E96\u5099\u4E2D"))]),_:2},1032,["props"])]),"body-cell-detail":a(e=>[t(b,{props:e},{default:a(()=>[t(g,{round:"",color:"primary",onClick:Q=>D(e.row),icon:"mdi-file-document-edit"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])]),_:1},8,["ratio"])])],64)}}};var Re=T(ve,[["__scopeId","data-v-2ef49bba"]]);export{Re as default};
