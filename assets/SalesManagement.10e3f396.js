import{Q as A}from"./use-fullscreen.ddf93c1c.js";import{a as M,Q as i}from"./QCard.84c047ef.js";import{Q as n}from"./QInput.97394c2d.js";import{Q as O}from"./QImg.c5b36a72.js";import{_ as T,s as v,ab as U,u as $,b as j,o as p,c as g,f as t,k as a,e as d,F as C,a2 as z,aW as F,r as W,i as E,z as R,Z as V,Q as P,a0 as N,t as x,a4 as Z,a5 as G,a3 as H}from"./index.a70a2635.js";import{Q as J}from"./QCardActions.23839453.js";import{Q as K}from"./QForm.6df761fc.js";import{Q as X}from"./QDialog.217bbef1.js";import{Q as Y,a as ee,b}from"./QResponsive.5d759d4e.js";import{C as te}from"./ClosePopup.b68cd120.js";import{u as le}from"./use-quasar.e245089a.js";/* empty css                */import"./use-dark.5ecc7119.js";import"./focus-manager.a1b6aa0a.js";import"./use-ratio.1f96d319.js";import"./use-prevent-scroll.8fe66eea.js";import"./use-model-toggle.daedaead.js";import"./focusout.eadb2519.js";import"./QList.d403ecda.js";import"./QMarkupTable.f3915622.js";import"./QSelect.b2658e36.js";import"./QChip.02361b47.js";import"./QItem.d107ef03.js";import"./QMenu.207fd04d.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";const s=c=>(Z("data-v-b8210ad6"),c=c(),G(),c),ae={id:"form"},oe=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg text-h6"},"\u51FA\u8CA8",-1)),re=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8A02\u55AE\u7DE8\u865F",-1)),de=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CE3\u5BB6\uFF29\uFF24 ",-1)),se=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CB7\u5BB6\u59D3\u540D",-1)),ne=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8CB7\u5BB6\u96FB\u8A71",-1)),ie=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u65B9\u5F0F",-1)),me=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5546\u54C1\u7E3D\u984D",-1)),ue=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u8A02\u55AE\u65E5\u671F",-1)),pe=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u4ED8\u6B3E\u65B9\u5F0F",-1)),ce={class:"text-center"},_e=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5546\u54C1\u540D\u7A31",-1)),ye=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u6578\u91CF",-1)),fe=s(()=>d("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u55AE\u50F9",-1)),he=s(()=>d("div",{id:"title",class:"q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable"},"\u51FA\u552E\u8A02\u55AE\u7BA1\u7406",-1)),ve={id:"container",class:"flex justify-center q-px-xl q-pb-xl"},ge={key:0},be={key:1},Ve={__name:"SalesManagement",setup(c){const q=le(),m=v(""),_=v(!1),S=[{name:"datedetail",required:!0,label:"\u4EA4\u6613\u65E5\u671F",align:"center",field:"datedetail",sortable:!0},{name:"_id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:"_id",sortable:!1},{name:"buyer",required:!0,label:"\u8CB7\u5BB6",align:"center",field:"buyer",sortable:!1},{name:"total",required:!0,label:"\u7E3D\u91D1\u984D",align:"center",field:"total",sortable:!1},{name:"check",required:!0,label:"\u51FA\u8CA8\u72C0\u614B",align:"center",field:"check",sortable:!1},{name:"detail",required:!0,label:"\u8A73\u7D30\u8CC7\u8A0A",align:"center",field:"detail",sortable:!1}],y=U([]),w=async()=>{try{const{data:r}=await z.get("/orders/all");y.splice(0,y.length,...r.result),console.log(y)}catch(r){console.log(r),q.notify({type:"negative",message:r.response.data.message})}};w();const l=U({_id:"",seller:"",realName:"",phoneNumber:"",address:"",payment:"",total:"",date:"",cart:[],check:!1}),D=r=>{_.value=!0,l._id=r._id,l.seller=r.seller.nickname+`\uFF08${r.seller._id}\uFF09`,l.realName=r.realName,l.phoneNumber=r.phoneNumber,l.address=r.address,l.payment=r.payment,l.total=r.total,l.check=r.check,l.date=new Date(r.date).toLocaleString(),l.cart=[...r.cart]},I=async()=>{try{await z.patch("/orders/"+l._id,l),await H.fire({icon:"success",title:"\u66F4\u65B0\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#A6D8D4",confirmButtonColor:"#A6D8D4",width:"20rem"}),w()}catch(r){q.notify({type:"negative",message:r.response.data.message})}},B=$(()=>y.filter(r=>m.value?r.user.nickname.indexOf(m.value)>-1||r._id.indexOf(m.value)>-1:!0)),f=v(""),h=v(""),k=()=>{window.innerWidth>975?(f.value=12,h.value=5):window.innerWidth>1200?(f.value=5,h.value=5):(f.value=2,h.value=2)};return k(),window.addEventListener("resize",()=>{k()}),(r,o)=>{const L=j("router-link");return p(),g(C,null,[t(X,{modelValue:_.value,"onUpdate:modelValue":o[10]||(o[10]=e=>_.value=e)},{default:a(()=>[d("div",ae,[t(K,{onSubmit:F(I,["prevent"])},{default:a(()=>[t(M,null,{default:a(()=>[t(i,null,{default:a(()=>[t(i,{horizontal:"",class:"flex justify-center"},{default:a(()=>[oe,t(A,{style:{"margin-top":"12px"},color:"primary",modelValue:l.check,"onUpdate:modelValue":o[0]||(o[0]=e=>l.check=e)},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[re,t(n,{type:"text",readonly:"",modelValue:l._id,"onUpdate:modelValue":o[1]||(o[1]=e=>l._id=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[de,t(n,{type:"text",readonly:"",modelValue:l.seller,"onUpdate:modelValue":o[2]||(o[2]=e=>l.seller=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"two"},{default:a(()=>[se,t(n,{type:"text",readonly:"",modelValue:l.realName,"onUpdate:modelValue":o[3]||(o[3]=e=>l.realName=e),color:"primary"},null,8,["modelValue"]),ne,t(n,{type:"text",readonly:"",modelValue:l.phoneNumber,"onUpdate:modelValue":o[4]||(o[4]=e=>l.phoneNumber=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:""},{default:a(()=>[ie,t(n,{type:"text",readonly:"",modelValue:l.address,"onUpdate:modelValue":o[5]||(o[5]=e=>l.address=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"two"},{default:a(()=>[me,t(n,{type:"text",readonly:"",modelValue:l.total,"onUpdate:modelValue":o[6]||(o[6]=e=>l.total=e),color:"primary"},null,8,["modelValue"]),ue,t(n,{type:"text",readonly:"",modelValue:l.date,"onUpdate:modelValue":o[7]||(o[7]=e=>l.date=e),color:"primary"},null,8,["modelValue"])]),_:1}),t(i,{horizontal:"",class:"q-mb-sm"},{default:a(()=>[pe,t(n,{type:"text",readonly:"",modelValue:l.payment,"onUpdate:modelValue":o[8]||(o[8]=e=>l.payment=e),color:"primary"},null,8,["modelValue"])]),_:1}),(p(!0),g(C,null,W(l.cart,(e,Q)=>(p(),E(i,{key:Q,style:{background:"rgb(228, 228, 228)"},class:"q-mb-md"},{default:a(()=>[d("div",ce,[t(L,{to:"/trade/"+e.product._id},{default:a(()=>[t(O,{src:e.product.image,style:{width:"150px",height:"120px"}},null,8,["src"])]),_:2},1032,["to"])]),t(i,{horizontal:""},{default:a(()=>[_e,t(n,{type:"text",readonly:"",modelValue:e.product.name,"onUpdate:modelValue":u=>e.product.name=u,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{horizontal:"",class:"two"},{default:a(()=>[ye,t(n,{type:"text",readonly:"",modelValue:e.quantity,"onUpdate:modelValue":u=>e.quantity=u,color:"primary"},null,8,["modelValue","onUpdate:modelValue"]),fe,t(n,{type:"text",readonly:"",modelValue:e.product.price,"onUpdate:modelValue":u=>e.product.price=u,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(J,{class:"flex justify-center q-mb-md"},{default:a(()=>[R(t(V,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"primary",label:"\u9001\u51FA"},null,512),[[te]]),t(V,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"primary",label:"\u53D6\u6D88",onClick:o[9]||(o[9]=e=>_.value=!1)})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["modelValue"]),he,d("div",ve,[t(Y,{id:"wh",ratio:f.value/h.value},{default:a(()=>[t(ee,{rows:B.value,columns:S,"row-key":"name","rows-per-page-options":[10,0]},{"top-right":a(()=>[t(n,{color:"white",filled:"",clearable:"",borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":o[11]||(o[11]=e=>m.value=e),placeholder:"\u8ACB\u8F38\u5165\u51FA\u552E\u8A02\u55AE\u7DE8\u865F"},{append:a(()=>[t(P,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-buyer":a(e=>[t(b,{props:e},{default:a(()=>[N(x(e.row.user.nickname)+" \uFF08"+x(e.row.user._id)+"\uFF09 ",1)]),_:2},1032,["props"])]),"body-cell-datedetail":a(e=>[t(b,{props:e},{default:a(()=>[N(x(new Date(e.row.date).toLocaleString()),1)]),_:2},1032,["props"])]),"body-cell-check":a(e=>[t(b,{props:e},{default:a(()=>[e.value?(p(),g("div",ge,"\u5DF2\u51FA\u8CA8")):(p(),g("div",be,"\u6E96\u5099\u4E2D"))]),_:2},1032,["props"])]),"body-cell-detail":a(e=>[t(b,{props:e},{default:a(()=>[t(V,{round:"",color:"primary",onClick:Q=>D(e.row),icon:"mdi-file-document-edit"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])]),_:1},8,["ratio"])])],64)}}};var Ge=T(Ve,[["__scopeId","data-v-b8210ad6"]]);export{Ge as default};
