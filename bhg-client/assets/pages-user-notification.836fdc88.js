import{_ as a,a as s}from"./NavBar.c3c1f6a6.js";import{d as e,r as t,a as o,y as n,b as i,c as l,w as c,e as u,n as m,g as f,u as d,f as g,h as r,i as _,F as v,j as p,t as N}from"./index-5c3c44fe.js";import{u as h}from"./useLocale.1b37ce39.js";const w=s(e({__name:"notification",setup(s){h();const e=t({isNotification:!0,backgroundColor:"#fff",isBack:!0}),w=[{name:"",date:"2023.10.25",message:"You have a new message."},{name:"",date:"2023.10.25",message:"You have a new message."},{name:"",date:"2023.10.25",message:"You have a new message."},{name:"",date:"2023.10.25",message:"You have a new message."}];return o((()=>{!async function(){let a={pageNum:1,pageSize:10};const[s,e]=await n.getNotify(a);!s&&e&&(null==e?void 0:e.success)&&console.log("🚀 ~ file: NavBar.vue:62 ~ getNotify ~ r:",e)}()})),(s,t)=>{const o=a,n=p;return i(),l(n,{class:"common-bg"},{default:c((()=>[u(o,m(f(d(e))),null,16),u(n,{class:"notification"},{default:c((()=>[u(n,{class:"title"},{default:c((()=>[g("Notification")])),_:1}),u(n,{class:"list"},{default:c((()=>[(i(),r(v,null,_(w,((a,s)=>u(n,{class:"item",key:s},{default:c((()=>[u(n,{class:"left"},{default:c((()=>[g(N(a.date),1)])),_:2},1024),u(n,{class:"right"},{default:c((()=>[g(N(a.message),1)])),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-35c699e4"]]);export{w as default};