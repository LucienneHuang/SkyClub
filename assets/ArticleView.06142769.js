import{Q as _,a as l}from"./QBreadcrumbs.5e0de329.js";import{Q as m}from"./QImg.ad42b8d5.js";import{_ as v,aQ as h,s as p,aD as g,o as s,c as o,e as a,f as r,k as y,t as i,a as c,Z as f,i as n}from"./index.6b2ef3fc.js";import{u as x}from"./use-quasar.e36b9b6f.js";import"./use-ratio.361238d7.js";const b={id:"container",class:"q-ma-md"},q={id:"head",class:"q-my-md"},k={id:"title",class:"text-weight-bold non-selectable q-mt-md q-pl-md"},w={key:0},Q={id:"date",class:"text-h5 text-weight-bold non-selectable q-mt-md"},V={class:"flex justify-center"},B={key:0,class:"source"},N=["href"],A={key:1,class:"source"},H=["href"],I={id:"section",class:"q-pl-xl"},T=["innerHTML"],C={__name:"ArticleView",setup(D){const d=x(),u=h(),e=p({_id:"",title:"",original:"",translation:"",date:"",image:"",description:"",category:"",realms:"",quote:""});return(async()=>{try{const{data:t}=await g.get("/articles/"+u.query.articleId);e.value._id=t.result._id,e.value.title=t.result.title,e.value.original=t.result.original,e.value.translation=t.result.translation,e.value.date=t.result.date,e.value.image=t.result.image,e.value.description=t.result.description,e.value.category=t.result.category,e.value.realms=t.result.realms,e.value.quote=t.result.quote}catch(t){console.log(t),d.notify({type:"negative",message:"\u767C\u751F\u932F\u8AA4"})}})(),(t,E)=>(s(),o("div",b,[a("div",q,[r(_,null,{default:y(()=>[r(l,{label:"Home",to:"/"}),e.value.category==="\u5340\u57DF\u4ECB\u7D39"?(s(),n(l,{key:0,label:"\u5340\u57DF\u4ECB\u7D39",to:"/realms"})):(s(),n(l,{key:1,label:"\u6700\u65B0\u6D88\u606F",to:"/latestnews"})),r(l,{label:"\u6587\u7AE0"})]),_:1}),a("div",k,[e.value.realms!=="\u7121"?(s(),o("span",w,i(e.value.realms),1)):c("",!0),f(" "+i(e.value.title),1)]),a("div",Q,i(e.value.date),1)]),a("div",V,[r(m,{src:e.value.image,style:{width:"100%"}},null,8,["src"]),e.value.original!==""?(s(),o("div",B,[a("a",{href:e.value.original},"\u539F\u6587\u7DB2\u5740",8,N)])):c("",!0),e.value.translation!==""?(s(),o("div",A,[a("a",{href:e.value.translation},"\u7FFB\u8B6F\u4F86\u6E90",8,H)])):c("",!0)]),a("div",I,[a("p",{class:"text-h6",innerHTML:e.value.description},null,8,T)])]))}};var Z=v(C,[["__scopeId","data-v-295b809c"]]);export{Z as default};