import{Q as q}from"./QInput.77b6713d.js";import{a as O,Q as b}from"./QCard.ba089e82.js";import{Q as T}from"./QSelect.f27ec8d3.js";import{_ as R,aF as j,s as z,a8 as H,u as B,a0 as Q,b as L,o as p,c as h,f as l,k as n,e,i as I,a as N,F as k,r as S,Z as x,t as m,X as _,aS as W,z as X,Q as Z,a2 as G,a3 as J,a1 as K}from"./index.c8f9d440.js";import{Q as Y}from"./QCardActions.8d6a0330.js";import{Q as ee}from"./QForm.a35d9800.js";import{Q as te}from"./QDialog.ecfd1e3a.js";import{Q as le,a as U}from"./QBreadcrumbs.f16f0441.js";import{Q as F}from"./QMarkupTable.b3c0d831.js";import{Q as ae}from"./QImg.08cde18d.js";import{C as oe}from"./ClosePopup.529459c1.js";import{u as se}from"./use-quasar.38f3816b.js";import{v as re}from"./index.41093a57.js";/* empty css                */import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";import"./QChip.4887a838.js";import"./QItem.679a406a.js";import"./QMenu.f753cafe.js";import"./scroll.beb93c22.js";import"./focusout.dd8c9852.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";import"./use-prevent-scroll.3ca7a14d.js";import"./use-ratio.a95bd297.js";const u=v=>(G("data-v-79decd30"),v=v(),J(),v),ne={id:"form"},de=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u59D3\u540D",-1)),ue=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u96FB\u8A71",-1)),ie=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u806F\u7D61\u5730\u5740",-1)),ce=u(()=>e("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u4ED8\u6B3E\u65B9\u5F0F",-1)),pe={id:"container",class:"q-ma-md"},me={id:"head",class:"q-my-md"},_e=u(()=>e("div",{id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},"\u8CFC\u7269\u8ECA",-1)),he={id:"section",class:"q-ma-xl"},ve=u(()=>e("thead",null,[e("tr",null,[e("td",{colspan:"7"},"\u6C92\u6709\u5546\u54C1")])],-1)),fe={colspan:"7"},ye={class:"text-h6"},Ce=u(()=>e("tr",null,[e("th"),e("th",null,[e("span",null,"\u5716\u7247")]),e("th",{class:"name"},[e("span",null,"\u540D\u7A31")]),e("th",null,[e("span",null,"\u55AE\u50F9")]),e("th",null,[e("span",null,"\u6578\u91CF")]),e("th",null,[e("span",null,"\u5C0F\u8A08")]),e("th",null,[e("span",null,"\u64CD\u4F5C")])],-1)),be={key:0},xe=u(()=>e("br",null,null,-1)),ge={class:"image"},qe={class:"name"},Qe={class:"price"},ke=u(()=>e("hr",null,null,-1)),Ve={class:"text-h4 text-weight-bold q-pt-sm non-selectable"},we={class:"text-red-10"},ze={__name:"CartView",setup(v){const $=j(),f=se(),r=z([]),y=z(!1),V=["\u8F49\u5E33","linepay","\u8CA8\u5230\u4ED8\u6B3E"],C={required:o=>!!o||"\u6B04\u4F4D\u5FC5\u586B",phone:o=>re.isMobilePhone(o,"zh-TW")||"\u624B\u6A5F\u683C\u5F0F\u932F\u8AA4",paymentRequired:o=>V.includes(o)||"\u6C92\u6709\u8A72\u5206\u985E"},d=H({realName:"",phoneNumber:"",address:"",payment:""}),g=async(o,a,i)=>{try{await Q.post("/users/cart",{seller:o,product:a,quantity:i});const t=r.value.findIndex(s=>s.seller._id===o),c=r.value[t].productCart.findIndex(s=>s.product._id===a);r.value[t].productCart[c].quantity+=i,r.value[t].productCart[c].quantity<=0&&r.value[t].productCart.splice(c,1),r.value[t].productCart.length<=0&&r.value.splice(t,1),f.notify({type:"positive",message:"\u66F4\u65B0\u6210\u529F"})}catch(t){f.notify({type:"negative",message:t.response.data.message})}},A=B(()=>r.value.reduce((o,a)=>{const i=a.productCart.reduce((t,c)=>t+c.quantity*c.product.price,0);return o+i},0)),D=B(()=>r.value.length>0&&!r.value.some(o=>o.productCart.some(a=>!a.product.sell))),E=async(o,a)=>{try{await Q.post("/orders",d),await K.fire({icon:"success",title:"\u8A02\u55AE\u5EFA\u7ACB\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#B0A9EC",confirmButtonColor:"#B0A9EC",width:"20rem"}),$.push("/member/orders")}catch(i){f.notify({type:"negative",message:i.response.data.message})}},P=()=>{y.value=!0};return(async()=>{try{const{data:o}=await Q.get("/users/cart");r.value.push(...o.result)}catch(o){f.notify({type:"negative",message:o.response.data.message})}})(),(o,a)=>{const i=L("router-link");return p(),h(k,null,[l(te,{modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=t=>y.value=t)},{default:n(()=>[e("div",ne,[l(ee,{onSubmit:W(E,["prevent"])},{default:n(()=>[l(O,{class:"flex column justify-center items-center q-pa-lg q-ma-xl"},{default:n(()=>[l(b,{horizontal:""},{default:n(()=>[de,l(q,{color:"accent",type:"text",label:"\u82E5\u70BA\u4EA4\u6613\u5BE6\u9AD4\u5546\u54C1(\u5468\u908A)\uFF0C\u8ACB\u8F38\u5165\u771F\u5BE6\u59D3\u540D\u65B9\u4FBF\u5BC4\u4EF6\u3002",modelValue:d.realName,"onUpdate:modelValue":a[0]||(a[0]=t=>d.realName=t),rules:[C.required],"hide-hint":""},null,8,["modelValue","rules"])]),_:1}),l(b,{horizontal:""},{default:n(()=>[ue,l(q,{color:"accent",type:"text",label:"\u8ACB\u8F38\u5165\u9023\u7D61\u96FB\u8A71\u3002","hide-hint":"",modelValue:d.phoneNumber,"onUpdate:modelValue":a[1]||(a[1]=t=>d.phoneNumber=t),rules:[C.required,C.phone]},null,8,["modelValue","rules"])]),_:1}),l(b,{horizontal:""},{default:n(()=>[ie,l(q,{color:"accent",type:"text",label:"\u8ACB\u8F38\u5165\u9001\u8CA8\u5730\u5740/\u597D\u53CB\u9023\u7D50\u3002","hide-hint":"",modelValue:d.address,"onUpdate:modelValue":a[2]||(a[2]=t=>d.address=t)},null,8,["modelValue"])]),_:1}),l(b,{horizontal:""},{default:n(()=>[ce,l(T,{options:V,color:"accent",label:"\u5206\u985E",modelValue:d.payment,"onUpdate:modelValue":a[3]||(a[3]=t=>d.payment=t),rules:[C.required]},null,8,["modelValue","rules"])]),_:1}),l(Y,{class:"q-mt-sm"},{default:n(()=>[X(l(_,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"accent",label:"\u9001\u51FA"},null,512),[[oe]]),l(_,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"accent",label:"\u53D6\u6D88",onClick:a[4]||(a[4]=t=>y.value=!1)})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["modelValue"]),e("div",pe,[e("div",me,[l(le,null,{default:n(()=>[l(U,{label:"Home",to:"/"}),l(U,{label:"\u8CFC\u7269\u8ECA"})]),_:1}),_e]),e("div",he,[r.value.length===0?(p(),I(F,{key:0},{default:n(()=>[ve]),_:1})):N("",!0),(p(!0),h(k,null,S(r.value,(t,c)=>(p(),I(F,{key:c,class:"q-mb-xl"},{default:n(()=>[e("thead",null,[e("tr",null,[e("th",fe,[e("span",ye,"\u8CE3\u5BB6\uFF1A"+m(t.seller.nickname)+"\uFF08"+m(t.seller._id)+"\uFF09",1)])]),Ce]),e("tbody",null,[(p(!0),h(k,null,S(t.productCart,(s,M)=>(p(),h("tr",{key:M,class:"text-center"},[e("td",null,[s.product.sell?N("",!0):(p(),h("span",be,[l(Z,{name:"mdi-alert",color:"red",size:"25px"}),xe,x("\u5DF2\u4E0B\u67B6")]))]),e("td",ge,[l(ae,{src:s.product.image,style:{height:"140px",width:"150px"}},null,8,["src"])]),e("td",qe,[l(i,{to:"/trade/"+s.product._id},{default:n(()=>[x(m(s.product.name),1)]),_:2},1032,["to"])]),e("td",null,m(s.product.price),1),e("td",null,[l(_,{round:"",color:"accent",icon:"mdi-minus",flat:"",onClick:w=>g(t.seller._id,s.product._id,-1)},null,8,["onClick"]),x(" "+m(s.quantity)+" ",1),l(_,{round:"",color:"accent",icon:"mdi-plus",flat:"",onClick:w=>g(t.seller._id,s.product._id,1)},null,8,["onClick"])]),e("td",null,m(s.quantity*s.product.price),1),e("td",null,[l(_,{round:"",color:"accent",icon:"mdi-delete",onClick:w=>g(t.seller._id,s.product._id,s.quantity*-1)},null,8,["onClick"])])]))),128))])]),_:2},1024))),128)),e("div",Qe,[ke,e("div",Ve,[x("\u5546\u54C1\u7E3D\u91D1\u984D\uFF1A"),e("span",we,m(A.value),1)]),l(_,{color:"accent",size:"18px",label:"\u524D\u5F80\u7D50\u5E33",onClick:P,disable:!D.value},null,8,["disable"])])])])],64)}}};var et=R(ze,[["__scopeId","data-v-79decd30"]]);export{et as default};
