import{Q as p}from"./QInput.77b6713d.js";import{a as Q,Q as m}from"./QCard.ba089e82.js";import{Q as V}from"./QSelect.f27ec8d3.js";import{_ as S,aF as A,s as _,a8 as C,b as F,o as U,c as k,e as s,f as t,k as i,aS as j,F as I,Q as B,z as R,X as q,$ as d,a2 as M,a3 as D,a0 as N,a1 as L}from"./index.c8f9d440.js";import{Q as O,a as P}from"./QPopupProxy.567818f6.js";import{Q as T}from"./QEditor.92acb9f3.js";import{Q as E}from"./use-fullscreen.d5a83cf7.js";import{Q as $}from"./QCardActions.8d6a0330.js";import{Q as G}from"./QForm.a35d9800.js";import{C as X}from"./ClosePopup.529459c1.js";import{u as H}from"./use-quasar.38f3816b.js";/* empty css                */import"./use-dark.b556ecaa.js";import"./focus-manager.a1b6aa0a.js";import"./QChip.4887a838.js";import"./QItem.679a406a.js";import"./QMenu.f753cafe.js";import"./scroll.beb93c22.js";import"./focusout.dd8c9852.js";import"./QDialog.ecfd1e3a.js";import"./use-prevent-scroll.3ca7a14d.js";import"./rtl.b51694b1.js";import"./format.865294d5.js";const n=c=>(M("data-v-37889148"),c=c(),D(),c),J=n(()=>s("div",{id:"title",class:"q-ml-xl q-my-lg q-pl-lg q-py-sm text-h4 text-weight-bold non-selectable"},"\u65B0\u589E\u6587\u7AE0",-1)),K={id:"container",class:"flex justify-center q-pa-lg"},W=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u6A19\u984C",-1)),Y=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5F15\u6587",-1)),Z=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5206\u985E",-1)),ee=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5340\u57DF",-1)),te=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u539F\u6587",-1)),ae=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u7FFB\u8B6F",-1)),oe=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u65E5\u671F",-1)),le={class:"row items-center justify-end"},ie=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u5167\u6587",-1)),se=n(()=>s("div",{class:"text-h7 q-mt-md q-mr-lg"},"\u986F\u793A\u6587\u7AE0",-1)),re={__name:"AddArticle",setup(c){const r=H(),v=A(),g=_([]),h=_([]),e=C({title:"",original:"",translation:"",date:"",image:[],description:"",category:"",realms:"",quote:"",display:!1}),x=["\u6700\u65B0\u6D88\u606F","\u5340\u57DF\u4ECB\u7D39"],b=["\u7121","\u6668\u5CF6","\u96F2\u91CE","\u96E8\u6797","\u971E\u8C37","\u66AE\u571F","\u7981\u95A3"],u={required:l=>!!l||"\u6B04\u4F4D\u5FC5\u586B",categoryRequired:l=>["\u6700\u65B0\u6D88\u606F","\u5340\u57DF\u4ECB\u7D39"].includes(l)||"\u6C92\u6709\u8A72\u5206\u985E",realmsRequired:l=>["\u7121","\u6668\u5CF6","\u96F2\u91CE","\u96E8\u6797","\u971E\u8C37","\u66AE\u571F","\u7981\u95A3"].includes(l)||"\u6C92\u6709\u8A72\u5206\u985E"},y=()=>{e.title="",e.original="",e.translation="",e.date="",e.image=[],e.description="",e.category="",e.realms="",e.quote="",e.display=!1,g.value=[],h.value=[]},f=_(!1),w=async()=>{if(e.image.length===0)return r.notify({type:"negative",message:"\u8ACB\u9078\u64C7\u5716\u7247"});try{f.value=!0;const l=new FormData;l.append("title",e.title),l.append("original",e.original),l.append("translation",e.translation),l.append("date",e.date),l.append("image",e.image[0].file),l.append("description",e.description),l.append("category",e.category),l.append("realms",e.realms),l.append("quote",e.quote),l.append("display",e.display),await N.post("/articles",l),f.value=!1,await L.fire({icon:"success",title:"\u65B0\u589E\u6210\u529F",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"},iconColor:"#F198AF",confirmButtonColor:"#F198AF",width:"20rem"}),v.push("/admin/articles")}catch(l){r.notify({type:"negative",message:l.response.data.message})}};return(l,a)=>{const z=F("VueFileAgent");return U(),k(I,null,[J,s("div",K,[t(G,{onReset:y,onSubmit:j(w,["prevent"])},{default:i(()=>[t(Q,{class:"flex column justify-center items-center q-pa-lg"},{default:i(()=>[t(z,{maxSize:"1MB",deletable:!0,accept:"image/jpg,image/jpeg,image/png",helpText:"\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94",modelValue:e.image,"onUpdate:modelValue":a[0]||(a[0]=o=>e.image=o),rawModelValue:g.value,"onUpdate:rawModelValue":a[1]||(a[1]=o=>g.value=o),errorText:{type:"\u6A94\u6848\u985E\u578B\u4E0D\u5408\u6CD5\u3002\u53EA\u63A5\u53D7 jpg, jpeg \u6216 png \u6A94\u3002",size:"\u6A94\u6848\u5927\u5C0F\u4E0D\u5F97\u5927\u65BC1MB"}},null,8,["modelValue","rawModelValue"]),t(m,{horizontal:""},{default:i(()=>[W,t(p,{type:"text",label:"\u8ACB\u8F38\u5165\u6587\u7AE0\u6A19\u984C",rules:[u.required],modelValue:e.title,"onUpdate:modelValue":a[2]||(a[2]=o=>e.title=o)},null,8,["rules","modelValue"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[Y,t(p,{type:"text",label:"\uFF08\u9078\u586B\uFF09",modelValue:e.quote,"onUpdate:modelValue":a[3]||(a[3]=o=>e.quote=o)},null,8,["modelValue"])]),_:1}),t(m,{horizontal:"",id:"select"},{default:i(()=>[Z,t(V,{options:x,label:"\u6587\u7AE0\u5206\u985E",rules:[u.required,u.categoryRequired],modelValue:e.category,"onUpdate:modelValue":a[4]||(a[4]=o=>e.category=o)},null,8,["rules","modelValue"]),ee,t(V,{options:b,label:"\u5340\u57DF\u5206\u985E",rules:[u.required,u.realmsRequired],modelValue:e.realms,"onUpdate:modelValue":a[5]||(a[5]=o=>e.realms=o)},null,8,["rules","modelValue"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[te,t(p,{type:"text",label:"\u8ACB\u8F38\u5165\u539F\u6587\u7DB2\u5740",modelValue:e.original,"onUpdate:modelValue":a[6]||(a[6]=o=>e.original=o)},null,8,["modelValue"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[ae,t(p,{type:"text",label:"\u8ACB\u8F38\u5165\u7FFB\u8B6F\u4F86\u6E90",modelValue:e.translation,"onUpdate:modelValue":a[7]||(a[7]=o=>e.translation=o)},null,8,["modelValue"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[oe,t(p,{label:"\u8ACB\u8F38\u5165\u6587\u7AE0\u65E5\u671F",modelValue:e.date,"onUpdate:modelValue":a[9]||(a[9]=o=>e.date=o),mask:"date",rules:["date"]},{append:i(()=>[t(B,{name:"event",class:"cursor-pointer"},{default:i(()=>[t(O,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:i(()=>[t(P,{modelValue:e.date,"onUpdate:modelValue":a[8]||(a[8]=o=>e.date=o)},{default:i(()=>[s("div",le,[R(t(q,{label:"Close",color:"primary",flat:""},null,512),[[X]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[ie,t(T,{rules:[u.required],"max-height":"20rem",modelValue:e.description,"onUpdate:modelValue":a[10]||(a[10]=o=>e.description=o),class:"q-my-md",dense:d(r).screen.lt.md,toolbar:[[{label:d(r).lang.editor.align,icon:d(r).iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],[{label:d(r).lang.editor.formatting,icon:d(r).iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:d(r).lang.editor.fontSize,icon:d(r).iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:d(r).lang.editor.defaultFont,icon:d(r).iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},null,8,["rules","modelValue","dense","toolbar"])]),_:1}),t(m,{horizontal:""},{default:i(()=>[se,t(E,{class:"q-mt-sm",modelValue:e.display,"onUpdate:modelValue":a[11]||(a[11]=o=>e.display=o)},null,8,["modelValue"])]),_:1}),t($,{class:"q-mt-sm"},{default:i(()=>[t(q,{type:"submit",unelevated:"",color:"primary",rounded:"",style:{width:"6rem"},size:"1rem",label:"\u9001\u51FA",loading:f.value},null,8,["loading"]),t(q,{type:"reset",unelevated:"",color:"primary",rounded:"",style:{width:"6rem"},size:"1rem",outline:"",label:"\u6E05\u9664",onClick:y})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])],64)}}};var Ue=S(re,[["__scopeId","data-v-37889148"]]);export{Ue as default};
