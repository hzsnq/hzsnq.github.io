import{a as z}from"./index-35b0e3a1.js";/* empty css                 *//* empty css                 *//* empty css                */import{d as D,r as _,o as Y,b as y,h as T,j as o,f as a,e as n,l as r,t as u,g as t,F as M,an as H,ao as J,x as A,y as U,_ as $,a5 as Q,U as S,c as P,a3 as ee,O as ae,R as le,X as te,Y as ne,i as oe,a9 as se,aa as ie,k as ce,m as re,a2 as ue,W as _e,E as de,a0 as pe,Z as me}from"./index-5a0eb1b1.js";import{u as ge}from"./AppMain.vue_vue_type_style_index_0_scoped_41d4e859_lang-bdfc2e53.js";import{i as ve,_ as fe}from"./index-79b2cd3e.js";/* empty css                             */import"./useUser-46e05e2c.js";const F=Symbol("enquiry"),be=d=>(A("data-v-fb9e2e25"),d=d(),U(),d),ye=be(()=>o("div",{class:"pop-top"},[o("div",{class:"title"},"View Enquiry"),o("div")],-1)),he={class:"form"},Ee=D({__name:"ViewEnquiry",setup(d){const{eId:k}=ve(F),i=_({});Y(()=>{x()});async function x(){let p={id:k.value};const[h,l]=await z.queryEnquiryById(p);!h&&l&&(console.log(l.data),i.value=(l==null?void 0:l.data)||{})}return(p,h)=>{const l=H,m=J;return y(),T(M,null,[ye,o("div",he,[a(m,{column:1,border:""},{default:n(()=>[a(l,{label:"ID","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u((e=t(i))==null?void 0:e.id),1)]}),_:1}),a(l,{label:"Name","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u((e=t(i))==null?void 0:e.name),1)]}),_:1}),a(l,{label:"Message","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.message)||"EMPTY"),1)]}),_:1}),a(l,{label:"Email","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u((e=t(i))==null?void 0:e.email),1)]}),_:1}),a(l,{label:"Create at","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u((e=t(i))==null?void 0:e.createAt),1)]}),_:1}),a(l,{label:"Update At","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.updateAt)||"EMPTY"),1)]}),_:1}),a(l,{label:"Phone","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.phone)||"EMPTY"),1)]}),_:1}),a(l,{label:"Interest","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.interest)||"EMPTY"),1)]}),_:1}),a(l,{label:"Suburb","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.suburb)||"EMPTY"),1)]}),_:1}),a(l,{label:"State","label-align":"center",align:"center"},{default:n(()=>{var e;return[r(u(((e=t(i))==null?void 0:e.state)||"EMPTY"),1)]}),_:1})]),_:1})])],64)}}});const we=$(Ee,[["__scopeId","data-v-fb9e2e25"]]),V=d=>(A("data-v-8fe4a556"),d=d(),U(),d),xe={class:"enquire"},qe=V(()=>o("div",{class:"title"},"Enquiry List",-1)),Ie=V(()=>o("div",{class:"sub-title"},"You have requests awaiting your approval",-1)),Ce={class:"tool-box"},Se={class:"flex"},Ve=V(()=>o("div",null,null,-1)),ke={class:"table"},Pe={class:"table-name"},Te={class:"pointer"},Me={class:"action"},Be=["onClick"],Ne={class:"pagination"},ze=V(()=>o("div",null,null,-1)),De=D({__name:"index",setup(d){const{setBreadcrumbList:k}=ge(),i=_(),x=[{name:"view",component:we}],p=_(null),h=[{value:0,label:"Email",name:"email"},{value:1,label:"Message",name:"message"},{value:2,label:"Name",name:"name"}],l=_(null),m=_(""),e=_([]),B=_(0),q=_(10),g=_(1),N=_(null);Y(()=>{E()});async function E(){var C,w;p.value=null;let v={pageSize:q.value,pageNum:g.value},c={};l.value!==null&&(c={[h[l.value].name]:m.value});const[I,f]=await z.queryEnquiries(c,v);!I&&f?(console.log(f.data),B.value=((C=f.data)==null?void 0:C.total)||0,e.value=((w=f.data)==null?void 0:w.list)||[]):console.log(I)}const L=v=>{g.value=v,E()},j=()=>{l.value=null,m.value="",g.value=1,E()},O=()=>{g.value=1,E()},R=v=>{k([{name:"View Enquiry"}]),p.value=x.findIndex(c=>c.name==="view"),N.value=v.id,i.value.handleIsShow()};return Q(F,{eId:N}),(v,c)=>{const I=ue,f=ee,C=ae,w=le,b=_e,K=de,W=pe,X=te,Z=me,G=ne;return y(),T(M,null,[o("div",xe,[qe,Ie,o("div",Ce,[o("div",Se,[a(f,{class:"select",modelValue:t(l),"onUpdate:modelValue":c[0]||(c[0]=s=>S(l)?l.value=s:null),clearable:"",placeholder:"Filter by"},{default:n(()=>[(y(),T(M,null,oe(h,s=>a(I,{key:s.value,label:s.label,value:s.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(C,{modelValue:t(m),"onUpdate:modelValue":c[1]||(c[1]=s=>S(m)?m.value=s:null),class:"m-lr-20",placeholder:"Search","prefix-icon":t(se),clearable:""},null,8,["modelValue","prefix-icon"]),a(w,{class:"text-white",type:"primary",color:"#BE9670",onClick:O},{default:n(()=>[r(" Search ")]),_:1}),a(w,{class:"text-828282",type:"primary",color:"#E8E8E8",onClick:j},{default:n(()=>[r(" Clear ")]),_:1})]),Ve]),o("div",ke,[t(e).length>0?(y(),P(X,{key:0,data:t(e),height:"600","row-style":{height:"80px"}},{default:n(()=>[a(b,{prop:"id",label:"Enquiry ID",align:"center"},{default:n(s=>[o("div",Pe,[o("span",null,u(s.row.id),1)])]),_:1}),a(b,{prop:"email",label:"Email",align:"left"}),a(b,{prop:"name",label:"Name",align:"left"}),a(b,{prop:"message",label:"Message"}),a(b,{prop:"createAt",label:"Create at"}),a(b,{prop:"",label:"Action",align:"center"},{default:n(s=>[o("div",Te,[a(W,{placement:"bottom",width:170,trigger:"hover"},{reference:n(()=>[a(K,{size:30,color:"#969696"},{default:n(()=>[a(t(ie))]),_:1})]),default:n(()=>[o("div",Me,[o("div",{class:"item",onClick:Ye=>R(s.row)},"View",8,Be)])]),_:2},1024)])]),_:1})]),_:1},8,["data"])):(y(),P(Z,{key:1,"image-size":200}))]),o("div",Ne,[ze,a(G,{background:"",layout:"total,consists of sizes, prev, pager, next, jumper, ->, slot",total:t(B),"page-size":t(q),"onUpdate:pageSize":c[2]||(c[2]=s=>S(q)?q.value=s:null),"current-page":t(g),"onUpdate:currentPage":c[3]||(c[3]=s=>S(g)?g.value=s:null),onCurrentChange:L},null,8,["total","page-size","current-page"])])]),a(t(fe),{ref_key:"rightPanel",ref:i,onBackFn:E},{content:n(()=>[t(p)!==null?(y(),P(ce(x[t(p)].component),{key:0})):re("",!0)]),_:1},512)],64)}}});const We=$(De,[["__scopeId","data-v-8fe4a556"]]);export{We as default};