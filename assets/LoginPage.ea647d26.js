import{_ as C,aF as V,V as F,a8 as I,o as f,c as h,e as i,f as e,k as a,aS as B,X as u,Y as L,$ as U,Z as m,F as A,r as E,t as N,Q as g,a2 as P,a3 as D,aD as M,a1 as b}from"./index.e5ac4a96.js";import{Q as p,a as _}from"./QItem.2669ee84.js";import{Q as O,a as x}from"./QList.4843271d.js";import{Q as R}from"./QMenu.ae70849c.js";import{Q as T}from"./QToolbar.201c514e.js";import{a as $,Q as r}from"./QCard.4acf99d4.js";import{Q}from"./QInput.64d79ec0.js";import{Q as w}from"./QCardActions.24dfeaed.js";import{Q as j}from"./QForm.c6f386f2.js";import{v as z}from"./index.647e4c63.js";import{u as G}from"./use-quasar.52f987cc.js";import"./use-dark.fe7559c7.js";import"./scroll.dcfe61b8.js";import"./focusout.724155a4.js";import"./focus-manager.a1b6aa0a.js";const v=n=>(P("data-v-7f89af16"),n=n(),D(),n),X={class:"container"},Y={class:"bg_effect"},Z=v(()=>i("div",{id:"star"},null,-1)),H=["src"],J={class:"row flex-center login"},K=v(()=>i("div",{class:"title text-center text-h4 q-py-md non-selectable"},"\u767B\u5165\u6703\u54E1",-1)),W={__name:"LoginPage",setup(n){const k=G(),y=V(),d=F(),o=I({email:"",password:""}),s={required:t=>!!t||"\u6B04\u4F4D\u5FC5\u586B",email:t=>z.isEmail(t)||"\u4FE1\u7BB1\u683C\u5F0F\u932F\u8AA4",min:t=>t.length>=4||"\u9577\u5EA6\u5FC5\u9808\u5927\u65BC 4 \u500B\u5B57",max:t=>t.length<=20||"\u9577\u5EA6\u5FC5\u9808\u5C0F\u65BC 20 \u500B\u5B57"},q=async()=>{try{const{data:t}=await M.post("/users/login",o);await b.fire({icon:"success",title:"\u767B\u5165\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#F198AF",confirmButtonColor:"#F198AF",width:"20rem"}),d.login({user:t.result.user,token:t.result.token,email:t.result.email,nickname:t.result.nickname,avatar:t.result.avatar,cart:t.result.cart,role:t.result.role,block:t.result.block}),d.isBlock&&await b.fire({icon:"warning",title:"\u5E33\u865F\u505C\u6B0A\u4E2D",text:"\u66AB\u6642\u95DC\u9589\u4EA4\u6613\u529F\u80FD\uFF0C\u5DF2\u5B8C\u6210\u7684\u8A02\u55AE\u4E0D\u53D7\u5F71\u97FF\u3002",iconColor:"#ff0000",confirmButtonColor:"#ff0000",width:"30rem"}),y.push("/")}catch(t){k.notify({type:"negative",message:t.response.data.message})}},S=[{to:"/",label:"\u9996\u9801",icon:"home"},{to:"/latestnews",label:"\u6700\u65B0\u6D88\u606F",icon:"announcement"},{to:"/realms",label:"\u5340\u57DF",icon:"location_on"},{to:"/trade",label:"\u4EA4\u6613",icon:"local_mall"},{to:"/contact",label:"\u806F\u7D61",icon:"call"}];return(t,c)=>(f(),h("div",X,[i("div",Y,[Z,e(T,{class:"text-white q-px-lg q-pt-md",style:{height:"50px"}},{default:a(()=>[e(u,{class:"q-ml-auto",flat:"",round:"",dense:""},{default:a(()=>[e(L,null,{default:a(()=>[i("img",{src:U(d).avatar},null,8,H)]),_:1}),e(R,{square:"",class:"bg-primary text-center"},{default:a(()=>[e(O,{dense:""},{default:a(()=>[e(p,{clickable:""},{default:a(()=>[e(_,null,{default:a(()=>[m("USER")]),_:1})]),_:1}),e(x,{inset:""}),(f(),h(A,null,E(S,l=>e(p,{clickable:"",to:l.to,key:l.to},{default:a(()=>[e(_,null,{default:a(()=>[m(N(l.label),1)]),_:2},1024)]),_:2},1032,["to"])),64)),e(x,{inset:""}),e(p,{clickable:"",to:"/"},{default:a(()=>[e(_,null,{default:a(()=>[m("\u56DE\u9996\u9801")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),i("div",J,[e(j,{onSubmit:B(q,["prevent"])},{default:a(()=>[e($,null,{default:a(()=>[e(r,{horizontal:""},{default:a(()=>[e(r,{class:"left"}),e(r,{class:"right flex column justify-center"},{default:a(()=>[e(r,null,{default:a(()=>[K,e(Q,{modelValue:o.email,"onUpdate:modelValue":c[0]||(c[0]=l=>o.email=l),rules:[s.required,s.email],dark:"",class:"q-mb-xs",type:"email",label:"Email",hint:"\u8ACB\u8F38\u5165\u4FE1\u7BB1","hide-hint":"",filled:"",dense:"",clearable:"","hide-bottom-space":"","clear-icon":"backspace"},{prepend:a(()=>[e(g,{name:"mail"})]),_:1},8,["modelValue","rules"])]),_:1}),e(r,null,{default:a(()=>[e(Q,{modelValue:o.password,"onUpdate:modelValue":c[1]||(c[1]=l=>o.password=l),rules:[s.required,s.min,s.max],dark:"",class:"q-mb-xs",type:"password",label:"Password",hint:"\u8ACB\u8F38\u5165\u5BC6\u78BC","hide-hint":"",filled:"",dense:"","hide-bottom-space":"",maxlength:"20"},{prepend:a(()=>[e(g,{name:"vpn_key"})]),_:1},8,["modelValue","rules"])]),_:1}),e(w,{class:"q-mt-md q-px-lg",vertical:""},{default:a(()=>[e(u,{label:"LOGIN",type:"submit",color:"secondary","text-color":"dark",class:"text-weight-bold"}),e(w,{align:"center"},{default:a(()=>[e(u,{label:"\u8A3B\u518A\u6703\u54E1","text-color":"white",to:"/register",flat:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])])]))}};var fe=C(W,[["__scopeId","data-v-7f89af16"]]);export{fe as default};
