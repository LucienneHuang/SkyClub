import{_ as h,X as v,s as Q,b as g,o as m,i as w,k as t,f as e,Z as x,a0 as c,e as o,$ as y,a1 as d,t as _,c as k,r as L,z as B,F as V,R as D}from"./index.a70a2635.js";import{Q as S,a as C,b as T,c as M,d as N}from"./QLayout.ad3287a3.js";import{Q as R}from"./QToolbar.31dde47c.js";import{a as l,Q as q}from"./QList.d403ecda.js";import{Q as r,a as n}from"./QItem.d107ef03.js";import{a as z}from"./QScrollArea.2786550b.js";import"./use-prevent-scroll.8fe66eea.js";import"./use-model-toggle.daedaead.js";import"./use-dark.5ecc7119.js";import"./format.865294d5.js";const A={class:"absolute-top flex column items-center q-my-xl"},F=["src"],H={class:"text-weight-bold text-h4 text-white name"},U={href:"#/member"},E={__name:"MemberLayout",setup(I){const i=v(),s=Q(!1);function f(){s.value=!s.value}const p=[{to:"/member/products",name:"\u500B\u4EBA\u5546\u54C1\u7BA1\u7406"},{to:"/member/sales",name:"\u51FA\u552E\u8A02\u55AE\u7BA1\u7406"},{to:"/member/orders",name:"\u8CFC\u8CB7\u8A02\u55AE\u67E5\u8A62"},{to:"/",name:"\u56DE\u9996\u9801"}];return(O,u)=>{const b=g("router-view");return m(),w(S,{view:"lHh lpR lff"},{default:t(()=>[e(T,{class:"text-white","height-hint":"98"},{default:t(()=>[e(R,null,{default:t(()=>[e(x,{class:"menuBtn",dense:"",flat:"",round:"",icon:"menu",onClick:f}),e(C,null,{default:t(()=>[c("\u7BA1\u7406\u54E1\u5F8C\u53F0")]),_:1})]),_:1})]),_:1}),e(M,{breakpoint:991,width:"300",class:"bg-secondary","show-if-above":"",modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=a=>s.value=a),side:"left"},{default:t(()=>[o("div",A,[e(y,{size:"8rem",class:"q-mb-lg shadow-9"},{default:t(()=>[o("img",{src:d(i).avatar},null,8,F)]),_:1}),o("div",H,[o("a",U,_(d(i).nickname),1)]),e(l,{inset:""})]),e(z,{style:{height:"calc(100% - 17rem)","margin-top":"17rem"}},{default:t(()=>[e(q,{padding:""},{default:t(()=>[e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(l,{inset:""})]),_:1})]),_:1}),(m(),k(V,null,L(p,a=>B(e(r,{key:a.to,to:a.to,class:"non-selectable",clickable:""},{default:t(()=>[e(n,null,{default:t(()=>[c(_(a.name),1)]),_:2},1024)]),_:2},1032,["to"]),[[D]])),64)),e(r,null,{default:t(()=>[e(n,null,{default:t(()=>[e(l,{inset:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(N,null,{default:t(()=>[e(b)]),_:1})]),_:1})}}};var ee=h(E,[["__scopeId","data-v-21cf4485"]]);export{ee as default};
