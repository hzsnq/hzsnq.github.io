import{_ as a,o as n,b as s,a as e,S as r,c as t,m as i,f as o,g as d,z as c}from"./index.6f6f940b.js";const u={class:"app-container"};var l=a({},[["render",function(a,e){return n(),s("div",u,"Admin 权限可见")}]]);const m={class:"app-container"};var f=a({},[["render",function(a,e){return n(),s("div",m,"Editor 权限可见")}]]);const p=e({__name:"index",setup(a){const s=r("admin"),e=t((()=>c().roles));return i((()=>{e.value.includes("admin")||(s.value="editor")})),(a,e)=>(n(),o(d("admin"===s.value?l:f)))}});export{p as default};
