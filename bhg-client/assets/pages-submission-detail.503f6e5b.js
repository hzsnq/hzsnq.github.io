import{_ as t,a}from"./NavBar.c3c1f6a6.js";import{d as e,r as s,m as l,a as u,y as i,b as n,c as d,w as o,e as c,n as f,g as r,u as m,f as _,t as v,h as y,i as p,F as g,q as b,j as h}from"./index-5c3c44fe.js";import{d as C}from"./dayjs.min.8200664b.js";const j=a(e({__name:"detail",setup(a){const e=s({isNotification:!0,backgroundColor:"#fff",isBack:!0}),j=s(""),S=s({});l((t=>{j.value=(null==t?void 0:t.aId)||""})),u((()=>{!async function(){var t,a;let e={id:j.value};const[s,l]=await i.getAuditDetail(e);if(!s&&l&&(null==l?void 0:l.success)){if(console.log("🚀 ~ file: detail.vue:32 ~ getDetail ~ r:",null==l?void 0:l.data),null==(t=l.data)?void 0:t.entityContent){l.data.entityContent=JSON.parse(null==(a=l.data)?void 0:a.entityContent);let t=Object.entries(l.data.entityContent);const e=[];for(let a=0;a<t.length;a++){let s=Object.entries(t[a][1]),l={name:`current ${t[a][0]}`,value:s[0][0]},u={name:`new ${t[a][0]}`,value:s[0][1]};e.push(l),e.push(u)}console.log(e),l.data.entityContentShow=e}S.value=(null==l?void 0:l.data)||{},console.log(S.value)}}()}));const k=()=>{};return(a,s)=>{const l=t,u=h;return n(),d(u,{class:"common-bg"},{default:o((()=>[c(l,f(r(m(e))),null,16),c(u,{class:"system"},{default:o((()=>[c(u,{class:"title"},{default:o((()=>[_(v(m(S).auditType),1)])),_:1}),c(u,{class:"sub-title"},{default:o((()=>[_("Audit Result")])),_:1}),c(u,{class:"list"},{default:o((()=>[c(u,{class:"item"},{default:o((()=>[c(u,{class:"left"},{default:o((()=>[_("Submit Type")])),_:1}),c(u,{class:"right"},{default:o((()=>[_(v(m(S).auditType),1)])),_:1})])),_:1}),c(u,{class:"item"},{default:o((()=>[c(u,{class:"left"},{default:o((()=>[_("Submit Time")])),_:1}),c(u,{class:"right"},{default:o((()=>[_(v(m(C)(m(S).createdAt).format("YYYY.MM.DD")),1)])),_:1})])),_:1}),c(u,{class:"item"},{default:o((()=>[c(u,{class:"left"},{default:o((()=>[_("Status")])),_:1}),c(u,{class:"right"},{default:o((()=>[_(v(m(S).status),1)])),_:1})])),_:1})])),_:1}),c(u,{class:"sub-title"},{default:o((()=>[_("Details")])),_:1}),c(u,{class:"list"},{default:o((()=>[(n(!0),y(g,null,p(m(S).entityContentShow,((t,a)=>(n(),d(u,{class:"item",key:a},{default:o((()=>[c(u,{class:"left"},{default:o((()=>[_(v(t.name),1)])),_:2},1024),c(u,{class:"right"},{default:o((()=>[_(v(t.value),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),"Approved"!==m(S).status?(n(),d(u,{key:0,class:"btn",onClick:k},{default:o((()=>[_(" Re-submit ")])),_:1})):b("v-if",!0)])),_:1})])),_:1})}}}),[["__scopeId","data-v-84efe371"]]);export{j as default};