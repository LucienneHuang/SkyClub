import{Q as S}from"./QImg.08cde18d.js";import{_ as le,V as te,s as n,a8 as E,K as oe,b as L,o as d,c as F,f as t,k as r,e as m,F as P,a0 as D,aS as re,i as g,X as f,$ as p,r as ie,a as j,z as se,Q as O,Z as $,t as N,a2 as ne,a3 as de,a1 as ue}from"./index.c8f9d440.js";import{a as me,Q as u}from"./QCard.ba089e82.js";import{Q as z}from"./QInput.77b6713d.js";import{Q as W}from"./QSelect.f27ec8d3.js";import{Q as pe}from"./QEditor.92acb9f3.js";import{Q as ce}from"./use-fullscreen.d5a83cf7.js";import{Q as G}from"./QCardActions.8d6a0330.js";import{Q as ge}from"./QForm.a35d9800.js";import{Q as fe}from"./QDialog.ecfd1e3a.js";import{Q as ye,a as ve,b as _}from"./QResponsive.a70910cb.js";import{C as _e}from"./ClosePopup.529459c1.js";import{u as be}from"./use-quasar.38f3816b.js";/* empty css                */import"./use-ratio.a95bd297.js";import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";import"./QChip.4887a838.js";import"./QItem.679a406a.js";import"./QMenu.f753cafe.js";import"./scroll.beb93c22.js";import"./focusout.dd8c9852.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";import"./use-prevent-scroll.3ca7a14d.js";import"./QList.154434ca.js";import"./QMarkupTable.b3c0d831.js";const c=b=>(ne("data-v-2889aca5"),b=b(),de(),b),he={id:"form"},we=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u6A19\u984C",-1)),xe=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u91D1\u984D",-1)),qe=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5E63\u503C",-1)),Ve=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u6578\u91CF",-1)),Ie=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5167\u6587",-1)),ke=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5206\u985E",-1)),ze=c(()=>m("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u4E0A\u67B6",-1)),Qe={key:1},Me=c(()=>m("div",{id:"title",class:"q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable"},"\u5168\u90E8\u5546\u54C1\u7BA1\u7406",-1)),Ce={id:"container",class:"flex justify-center q-px-xl q-pb-xl"},Se={__name:"ProductsManagement",setup(b){const K=te(),i=be(),h=n(""),w=n(6),y=n(!1),X=()=>{y.value=!y.value,y.value===!0?i.notify({type:"positive",message:"\u52A0\u4E0A\u5DF2\u4E0A\u50B3\uFF0C\u6700\u591A\u516D\u5F35\u3002"}):i.notify({type:"negative",message:"\u53D6\u6D88"})},Z=[{name:"user",required:!0,label:"\u8CE3\u5BB6",align:"center",field:"user",sortable:!0},{name:"image",required:!0,label:"\u9996\u5716",align:"center",field:"image",sortable:!1},{name:"name",required:!0,label:"\u540D\u7A31",align:"center",field:"name",sortable:!0},{name:"category",required:!0,label:"\u5206\u985E",align:"center",field:"category",sortable:!0},{name:"sell",required:!0,label:"\u4E0A\u67B6",align:"center",field:"sell",sortable:!0},{name:"edit",required:!0,label:"\u7DE8\u8F2F",align:"center",field:"edit",sortable:!1}],Q=E([]),M=async()=>{try{const{data:l}=await D.get("/products/all",{params:{search:h.value}});Q.splice(0,Q.length,...l.result)}catch(l){i.notify({type:"negative",message:l.response.data.message})}};M();const s={required:l=>!!l||"\u6B04\u4F4D\u5FC5\u586B",numberRequired:l=>!isNaN(l)&&l>0||"\u4E0D\u5F97\u5C0F\u65BC 0",currencyRequired:l=>U.includes(l)||"\u6C92\u6709\u8A72\u5E63\u503C",categoryRequired:l=>B.includes(l)||"\u6C92\u6709\u8A72\u5206\u985E"},v=n(!1),H=()=>{v.value=!v.value},C=n([]),x=n([]),e=E({user:K.user,name:"",price:0,currency:"",MaxNumber:0,oldImg:"",oldImgs:[],image:[],images:[],description:"",category:"",sell:!1}),U=["\u53F0\u5E63"],B=["\u5B63\u7968","\u79AE\u5305","\u5468\u908A","\u5176\u4ED6"],q=n(!1),R=n(""),J=l=>{v.value=!1,y.value=!1,q.value=!0,e.image=l.image,e.images=[],x.value=[],e.oldImg=l.image,e.oldImgs=[...l.images],e.name=l.name,e.price=l.price,e.currency=l.currency,e.MaxNumber=l.MaxNumber,e.description=l.description,e.category=l.category,e.sell=l.sell,R.value=l._id,w.value=6-l.images.length},Y=l=>{const o=e.oldImgs.findIndex(k=>k===l);e.oldImgs.splice(o,1),w.value=6-e.oldImgs.length},ee=async()=>{try{const l=new FormData;l.append("name",e.name),l.append("price",e.price),l.append("currency",e.currency),l.append("MaxNumber",e.MaxNumber),l.append("description",e.description),l.append("category",e.category),l.append("sell",e.sell),e.image.length===0||typeof e.image=="string"?l.append("image",e.oldImg):l.append("image",e.image[0].file),e.images.length>=1&&e.images.forEach(o=>{l.append("images",o.file)}),e.oldImgs.length>=1&&e.oldImgs.forEach(o=>{l.append("oldImgs",o)}),await D.patch("/products/"+R.value,l),await ue.fire({icon:"success",title:"\u66F4\u65B0\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#F198AF",confirmButtonColor:"#F198AF",width:"20rem"}),C.value="",x.value=[],e.image=[],e.images=[],v.value=!1,M()}catch(l){i.notify({type:"negative",message:l.response.data.message})}},V=n(""),I=n(""),T=()=>{window.innerWidth>975?(V.value=12,I.value=5):window.innerWidth>1200?(V.value=5,I.value=5):(V.value=2,I.value=2)};return T(),window.addEventListener("resize",()=>{T()}),oe(h,async(l,o)=>{M()}),(l,o)=>{const k=L("VueFileAgent"),ae=L("router-link");return d(),F(P,null,[t(fe,{modelValue:q.value,"onUpdate:modelValue":o[12]||(o[12]=a=>q.value=a),persistent:""},{default:r(()=>[m("div",he,[t(ge,{onSubmit:re(ee,["prevent"])},{default:r(()=>[t(me,{class:"flex column justify-center items-center q-pa-lg q-ma-xl"},{default:r(()=>[t(u,{horizontal:""},{default:r(()=>[v.value?(d(),g(k,{key:0,maxSize:"1MB",deletable:!0,accept:"image/jpg,image/jpeg,image/png",helpText:"\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94",modelValue:e.image,"onUpdate:modelValue":o[0]||(o[0]=a=>e.image=a),rawModelValue:C.value,"onUpdate:rawModelValue":o[1]||(o[1]=a=>C.value=a),errorText:{type:"\u6A94\u6848\u985E\u578B\u4E0D\u5408\u6CD5\u3002\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94\u3002",size:"\u6A94\u6848\u5927\u5C0F\u4E0D\u5F97\u5927\u65BC1MB"}},null,8,["modelValue","rawModelValue"])):(d(),g(f,{key:1,onClick:H},{default:r(()=>[t(S,{src:e.oldImg,style:{width:"160px",height:"160px","border-radius":"0"}},null,8,["src"])]),_:1}))]),_:1}),t(u,{horizontal:""},{default:r(()=>[we,t(z,{color:"primary",type:"text",modelValue:e.name,"onUpdate:modelValue":o[2]||(o[2]=a=>e.name=a),rules:[s.required]},null,8,["modelValue","rules"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[xe,t(z,{color:"primary",type:"number",modelValue:e.price,"onUpdate:modelValue":o[3]||(o[3]=a=>e.price=a),modelModifiers:{number:!0},rules:[s.required,s.numberRequired]},null,8,["modelValue","rules"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[qe,t(W,{color:"primary",modelValue:e.currency,"onUpdate:modelValue":o[4]||(o[4]=a=>e.currency=a),options:U,label:"\u5E63\u503C",rules:[s.required,s.currencyRequired]},null,8,["modelValue","rules"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[Ve,t(z,{color:"primary",type:"number",modelValue:e.MaxNumber,"onUpdate:modelValue":o[5]||(o[5]=a=>e.MaxNumber=a),modelModifiers:{number:!0},rules:[s.required,s.numberRequired]},null,8,["modelValue","rules"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[Ie,t(pe,{rules:[s.required],"max-height":"20rem",modelValue:e.description,"onUpdate:modelValue":o[6]||(o[6]=a=>e.description=a),class:"q-my-md",dense:p(i).screen.lt.md,toolbar:[[{label:p(i).lang.editor.align,icon:p(i).iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],[{label:p(i).lang.editor.formatting,icon:p(i).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:p(i).lang.editor.fontSize,icon:p(i).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:p(i).lang.editor.defaultFont,icon:p(i).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["rules","modelValue","dense","toolbar"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[ke,t(W,{color:"primary",modelValue:e.category,"onUpdate:modelValue":o[7]||(o[7]=a=>e.category=a),options:B,label:"\u5206\u985E",rules:[s.required,s.categoryRequired]},null,8,["modelValue","rules"])]),_:1}),t(u,{horizontal:""},{default:r(()=>[ze,t(ce,{class:"q-mt-sm",color:"primary",modelValue:e.sell,"onUpdate:modelValue":o[8]||(o[8]=a=>e.sell=a)},null,8,["modelValue"])]),_:1}),t(G,{class:"q-mt-sm"},{default:r(()=>[t(f,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"primary",label:"\u66F4\u591A\u5716\u7247",onClick:X})]),_:1}),e.oldImgs.length>=1?(d(),g(u,{key:0,class:"flex justify-center"},{default:r(()=>[(d(!0),F(P,null,ie(e.oldImgs,(a,A)=>(d(),g(f,{key:A,onClick:Fe=>Y(a)},{default:r(()=>[t(S,{src:a,style:{width:"160px",height:"160px","border-radius":"0"}},null,8,["src"])]),_:2},1032,["onClick"]))),128))]),_:1})):j("",!0),y.value?(d(),g(u,{key:1,horizontal:""},{default:r(()=>[w.value>0?(d(),g(k,{key:0,multiple:!0,maxFiles:w.value,maxSize:"1MB",deletable:!0,accept:"image/jpg,image/jpeg,image/png",helpText:"\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94\uFF0C\u52A0\u4E0A\u5DF2\u4E0A\u50B3\uFF0C\u6700\u591A\u516D\u5F35\u3002",modelValue:e.images,"onUpdate:modelValue":o[9]||(o[9]=a=>e.images=a),errorText:{type:"\u6A94\u6848\u985E\u578B\u4E0D\u5408\u6CD5\u3002\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94\u3002",size:"\u6A94\u6848\u5927\u5C0F\u4E0D\u5F97\u5927\u65BC1MB"},rawModelValue:x.value,"onUpdate:rawModelValue":o[10]||(o[10]=a=>x.value=a)},null,8,["maxFiles","modelValue","rawModelValue"])):(d(),F("div",Qe,"\u5716\u7247\u6700\u591A\u516D\u5F35\uFF0C\u8ACB\u522A\u9664\u5716\u7247\u518D\u65B0\u589E\u3002"))]),_:1})):j("",!0),t(G,{class:"q-mt-sm"},{default:r(()=>[se(t(f,{type:"submit",unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",color:"primary",label:"\u9001\u51FA"},null,512),[[_e]]),t(f,{unelevated:"",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",color:"primary",label:"\u53D6\u6D88",onClick:o[11]||(o[11]=a=>q.value=!1)})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1},8,["modelValue"]),Me,m("div",Ce,[t(ye,{id:"wh",ratio:V.value/I.value},{default:r(()=>[t(ve,{"rows-per-page-options":[10,0],columns:Z,"row-key":"name",rows:Q},{"top-right":r(()=>[t(z,{color:"white",filled:"",clearable:"",borderless:"",dense:"",debounce:"300",modelValue:h.value,"onUpdate:modelValue":o[13]||(o[13]=a=>h.value=a),placeholder:"\u8ACB\u8F38\u5165\u5546\u54C1\u95DC\u9375\u5B57"},{append:r(()=>[t(O,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-user":r(a=>[t(_,{props:a},{default:r(()=>[$(N(a.row.user.nickname)+" \uFF08"+N(a.row.user._id)+"\uFF09 ",1)]),_:2},1032,["props"])]),"body-cell-image":r(a=>[t(_,{props:a},{default:r(()=>[t(S,{src:a.value,"spinner-color":"white",style:{height:"140px",width:"180px"}},null,8,["src"])]),_:2},1032,["props"])]),"body-cell-name":r(a=>[t(_,{props:a},{default:r(()=>[t(ae,{to:"/trade/"+a.row._id},{default:r(()=>[$(N(a.row.name),1)]),_:2},1032,["to"])]),_:2},1032,["props"])]),"body-cell-sell":r(a=>[t(_,{props:a},{default:r(()=>[a.value?(d(),g(O,{key:0,name:"mdi-check"})):j("",!0)]),_:2},1032,["props"])]),"body-cell-edit":r(a=>[t(_,{props:a},{default:r(()=>[t(f,{round:"",color:"primary",onClick:A=>J(a.row),icon:"mdi-file-document-edit"},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])]),_:1},8,["ratio"])])],64)}}};var ia=le(Se,[["__scopeId","data-v-2889aca5"]]);export{ia as default};
