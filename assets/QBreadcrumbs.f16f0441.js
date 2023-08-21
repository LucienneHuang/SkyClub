import{H as v,I as h,J as C,u as n,h as s,Q as k,D as q,aJ as _,aK as y,aL as Q,O as S}from"./index.c8f9d440.js";var $=v({name:"QBreadcrumbsEl",props:{...h,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:l}){const{linkTag:u,linkAttrs:o,linkClass:c,navigateOnClick:d}=C(),r=n(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+c.value:"q-breadcrumbs__el--disable"),...o.value,onClick:d})),i=n(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const t=[];return e.icon!==void 0&&t.push(s(k,{class:i.value,name:e.icon})),e.label!==void 0&&t.push(e.label),s(u.value,{...r.value},q(l.default,t))}}});const x=["",!0];var E=v({name:"QBreadcrumbs",props:{..._,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const u=y(e),o=n(()=>`flex items-center ${u.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),c=n(()=>e.separatorColor?` text-${e.separatorColor}`:""),d=n(()=>` text-${e.activeColor}`);return()=>{const r=Q(S(l.default));if(r.length===0)return;let i=1;const t=[],m=r.filter(a=>a.type!==void 0&&a.type.name==="QBreadcrumbsEl").length,g=l.separator!==void 0?l.separator:()=>e.separator;return r.forEach(a=>{if(a.type!==void 0&&a.type.name==="QBreadcrumbsEl"){const b=i<m,f=a.props!==null&&x.includes(a.props.disable),p=(b===!0?"":" q-breadcrumbs--last")+(f!==!0&&b===!0?d.value:"");i++,t.push(s("div",{class:`flex items-center${p}`},[a])),b===!0&&t.push(s("div",{class:"q-breadcrumbs__separator"+c.value},g()))}else t.push(a)}),s("div",{class:"q-breadcrumbs"},[s("div",{class:o.value},t)])}}});export{E as Q,$ as a};
