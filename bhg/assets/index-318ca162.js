import{a as g}from"./index-1beab65c.js";/* empty css                   *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                   *//* empty css                  */import{i as ue,_ as ke}from"./index-38ed8943.js";import"./useUser-7f9c8acd.js";import{d as pe,o as me,r as _,D as ie,b as f,g as y,i as m,t as oe,f as a,e as l,w as s,k as S,$ as ce,l as fe,F as U,h as F,c as R,J,E as ve,P as _e,N as be,O as Te,a0 as Ue,a1 as ye,a2 as Ce,a3 as De,H as Ie,_ as Ve,a as xe,a4 as de,a5 as Ne,T as O,V as Pe,W as Ye,a6 as qe,a7 as Se,a8 as Re,j as Le,v as Ae,x as Me,U as $e,a9 as Be,Z as Fe,X as ze}from"./index-298568e1.js";import{u as Oe}from"./AppMain.vue_vue_type_style_index_0_scoped_41d4e859_lang-b6e11d1a.js";/* empty css                     */import{C as ge}from"./CreatOrEditEntity.vue_vue_type_style_index_0_scoped_3ce8e608_lang-39aa2ba5.js";/* empty css                    */import{P as we}from"./index-e099722b.js";import{i as je}from"./validate-add6ff74.js";const Ke={class:"pop-top"},We={class:"title"},He={class:"form"},Je={key:0},Xe={class:"add-container"},Ze=pe({__name:"CreatOrEditClient",setup(j){const{cId:C}=ue(ge),{func:X}=ue(we);me(async()=>{await W(),await G(),await z(),C.value&&x()});const D=_([]),K=_([]),L=_([]),I=_(),t=ie({email:"",name:"",password:"asdf1234",password2:"asdf1234",countryCode:"",mobile:"",birth:"",beaverId:"",clientType:"",upperClient:"",level2UpperClientId:"",withheldTax:!1,tfNum:"",bsb:"",accountName:"",accountNumber:"",startDate:"",endDate:"",targetAmount:"",linkToValueup:!1,investmentCreateRequestList:[]}),M=ie({email:[{required:!0,message:"Please input Email",trigger:"blur"},{validator:(c,n,o)=>{n===""?o(new Error("Please input Email")):je(n)?o():o(new Error("Email format is incorrect!"))},trigger:"blur"}],password:[{required:!0,message:"Please input Password",trigger:"blur"},{min:8,max:16,message:"Length should be 8 to 16",trigger:"blur"}],password2:[{required:!0,message:"Please input Password",trigger:"blur"},{min:8,max:16,message:"Length should be 8 to 16",trigger:"blur"},{validator:(c,n,o)=>{n===""?o(new Error("Please input the Password again")):n!==t.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}]}),$=async c=>{c&&await c.validate((n,o)=>{n?(console.log("submit!"),C.value?H():w()):(J.error("Please enter correct content!"),console.log("error submit!",o))})};async function W(){let c={};const[n,o]=await g.queryUpperClients(c);!n&&o&&(L.value=(o==null?void 0:o.data)||[])}async function G(){let c={type:"client_type"};const[n,o]=await g.queryDictionary(c);!n&&o&&(K.value=(o==null?void 0:o.data)||[])}async function z(){let c={type:"investment_entity_type"};const[n,o]=await g.queryDictionary(c);!n&&o&&(D.value=(o==null?void 0:o.data)||[])}async function w(){let c=t;const[n,o]=await g.createClient(c);!n&&o&&o.success&&(J.success("Created successfully"),setTimeout(()=>{X()},1e3))}async function H(){let c={...t,id:C.value};const[n,o]=await g.editClient(c);!n&&o&&o.success&&(J.success("Edit successfully"),setTimeout(()=>{X()},1e3))}async function x(){var E,v,u,N,k,T,P,p,e,d,i,B,V,Y,b,Q,ee,le,te;let c={id:C.value};const[n,o]=await g.queryClientDetailByIdWhenEdit(c);!n&&o&&(console.log(o.data),t.email=((E=o.data)==null?void 0:E.email)||"",t.name=((v=o.data)==null?void 0:v.name)||"",t.countryCode=((u=o.data)==null?void 0:u.countryCode)||"",t.mobile=((N=o.data)==null?void 0:N.mobile)||"",t.birth=((k=o.data)==null?void 0:k.birth)||"",t.beaverId=((T=o.data)==null?void 0:T.beaverId)||"",t.clientType=String((P=o.data)==null?void 0:P.clientType)||"",t.upperClient=((p=o.data)==null?void 0:p.upperClient)||"",t.level2UpperClientId=((e=o.data)==null?void 0:e.level2UpperClientId)||"",t.withheldTax=((d=o.data)==null?void 0:d.withheldTax)||!1,t.tfNum=((i=o.data)==null?void 0:i.tfNum)||"",t.bsb=((B=o.data)==null?void 0:B.bsb)||"",t.accountName=((V=o.data)==null?void 0:V.accountName)||"",t.accountNumber=((Y=o.data)==null?void 0:Y.accountNumber)||"",t.startDate=((b=o.data)==null?void 0:b.startDate)||"",t.endDate=((Q=o.data)==null?void 0:Q.endDate)||"",t.targetAmount=((ee=o.data)==null?void 0:ee.targetAmount)||"",t.linkToValueup=((le=o.data)==null?void 0:le.linkToValueup)||!1,t.investmentCreateRequestList=((te=o.data)==null?void 0:te.investmentCreateRequestList)||[])}const h=()=>{t.investmentCreateRequestList.push({entityName:"",entityType:"",kycResult:!1})},ae=c=>{t.investmentCreateRequestList.splice(c,1)},ne=()=>{t.targetAmount>999999.99?t.targetAmount=999999.99:t.targetAmount=t.targetAmount.replace(/^\./,"0.").match(/^\d*(\.?\d{0,2})/g)[0]||""};return(c,n)=>{const o=ve,E=_e,v=be,u=Te,N=Ue,k=ye,T=Ce,P=De,p=Ie;return f(),y(U,null,[m("div",Ke,[m("div",We,oe(a(C)?"Edit Client":"Create Client"),1),m("div",null,[l(E,{type:"primary",color:"#4E9F1C",onClick:n[0]||(n[0]=e=>$(a(I)))},{default:s(()=>[S(oe(a(C)?"Edit Client":"New Client")+" ",1),l(o,null,{default:s(()=>[l(a(ce))]),_:1})]),_:1})])]),m("div",He,[l(p,{ref_key:"ruleFormRef",ref:I,model:a(t),rules:a(M),"label-width":"200px","status-icon":""},{default:s(()=>[l(u,{label:"Email",prop:"email"},{default:s(()=>[l(v,{modelValue:a(t).email,"onUpdate:modelValue":n[1]||(n[1]=e=>a(t).email=e)},null,8,["modelValue"])]),_:1}),a(C)?fe("",!0):(f(),y("div",Je,[l(u,{label:"Password",prop:"password"},{default:s(()=>[l(v,{modelValue:a(t).password,"onUpdate:modelValue":n[2]||(n[2]=e=>a(t).password=e),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1}),l(u,{label:"Password confirmation",prop:"password2"},{default:s(()=>[l(v,{modelValue:a(t).password2,"onUpdate:modelValue":n[3]||(n[3]=e=>a(t).password2=e),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1})])),l(u,{label:"Name",prop:"name"},{default:s(()=>[l(v,{modelValue:a(t).name,"onUpdate:modelValue":n[4]||(n[4]=e=>a(t).name=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Country code",prop:"countryCode"},{default:s(()=>[l(v,{modelValue:a(t).countryCode,"onUpdate:modelValue":n[5]||(n[5]=e=>a(t).countryCode=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Mobile",prop:"mobile"},{default:s(()=>[l(v,{modelValue:a(t).mobile,"onUpdate:modelValue":n[6]||(n[6]=e=>a(t).mobile=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Birth",prop:"birth"},{default:s(()=>[l(N,{modelValue:a(t).birth,"onUpdate:modelValue":n[7]||(n[7]=e=>a(t).birth=e),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"Beaver id",prop:"beaverId"},{default:s(()=>[l(v,{modelValue:a(t).beaverId,"onUpdate:modelValue":n[8]||(n[8]=e=>a(t).beaverId=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Client type",prop:"clientType"},{default:s(()=>[l(T,{modelValue:a(t).clientType,"onUpdate:modelValue":n[9]||(n[9]=e=>a(t).clientType=e),placeholder:"Select Client type"},{default:s(()=>[(f(!0),y(U,null,F(a(K),(e,d)=>(f(),R(k,{label:e.code,value:e.value,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"Level1 Upper Client",prop:"upperClient"},{default:s(()=>[l(T,{modelValue:a(t).upperClient,"onUpdate:modelValue":n[10]||(n[10]=e=>a(t).upperClient=e),placeholder:"Please Select"},{default:s(()=>[(f(!0),y(U,null,F(a(L),(e,d)=>(f(),R(k,{label:e.name,value:e.id,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"Level2 Upper Client",prop:"level2UpperClientId"},{default:s(()=>[l(T,{modelValue:a(t).level2UpperClientId,"onUpdate:modelValue":n[11]||(n[11]=e=>a(t).level2UpperClientId=e),placeholder:"Please Select"},{default:s(()=>[(f(!0),y(U,null,F(a(L),(e,d)=>(f(),R(k,{label:e.name,value:e.id,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"withheldTax",prop:"withheldTax"},{default:s(()=>[l(P,{modelValue:a(t).withheldTax,"onUpdate:modelValue":n[12]||(n[12]=e=>a(t).withheldTax=e),"active-text":"Yes","inactive-text":"No"},null,8,["modelValue"])]),_:1}),l(u,{label:"TFN",prop:"tfNum"},{default:s(()=>[l(v,{modelValue:a(t).tfNum,"onUpdate:modelValue":n[13]||(n[13]=e=>a(t).tfNum=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Bsb",prop:"bsb"},{default:s(()=>[l(v,{modelValue:a(t).bsb,"onUpdate:modelValue":n[14]||(n[14]=e=>a(t).bsb=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Account name",prop:"accountName"},{default:s(()=>[l(v,{modelValue:a(t).accountName,"onUpdate:modelValue":n[15]||(n[15]=e=>a(t).accountName=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Account number",prop:"accountNumber"},{default:s(()=>[l(v,{modelValue:a(t).accountNumber,"onUpdate:modelValue":n[16]||(n[16]=e=>a(t).accountNumber=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Start date",prop:"startDate"},{default:s(()=>[l(N,{modelValue:a(t).startDate,"onUpdate:modelValue":n[17]||(n[17]=e=>a(t).startDate=e),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"End date",prop:"endDate"},{default:s(()=>[l(N,{modelValue:a(t).endDate,"onUpdate:modelValue":n[18]||(n[18]=e=>a(t).endDate=e),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"Target amount",prop:"targetAmount"},{default:s(()=>[l(v,{modelValue:a(t).targetAmount,"onUpdate:modelValue":n[19]||(n[19]=e=>a(t).targetAmount=e),type:"number",onInput:ne},null,8,["modelValue"])]),_:1}),l(u,{label:"Link to valueup",prop:"linkToValueup"},{default:s(()=>[l(P,{modelValue:a(t).linkToValueup,"onUpdate:modelValue":n[20]||(n[20]=e=>a(t).linkToValueup=e)},null,8,["modelValue"])]),_:1}),l(u,{label:"Investment Entities",prop:"investmentCreateRequestList"},{default:s(()=>[m("div",Xe,[l(E,{type:"success",onClick:h},{default:s(()=>[S("Add")]),_:1})]),(f(!0),y(U,null,F(a(t).investmentCreateRequestList,(e,d)=>(f(),y("div",{class:"inner-form",key:d},[l(u,{label:"Entity type"},{default:s(()=>[l(T,{filterable:"",clearable:"",modelValue:e.entityType,"onUpdate:modelValue":i=>e.entityType=i,placeholder:"please select","no-data-text":"no data"},{default:s(()=>[(f(!0),y(U,null,F(a(D),i=>(f(),R(k,{key:i.code,label:i.code,value:i.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(u,{label:"Entity name"},{default:s(()=>[l(v,{modelValue:e.entityName,"onUpdate:modelValue":i=>e.entityName=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(u,{label:"Kyc result"},{default:s(()=>[l(P,{modelValue:e.kycResult,"onUpdate:modelValue":i=>e.kycResult=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(E,{type:"danger",onClick:i=>ae(d)},{default:s(()=>[S("Remove")]),_:2},1032,["onClick"])]))),128))]),_:1})]),_:1},8,["model","rules"])])],64)}}}),re=Ve(Ze,[["__scopeId","data-v-b7cb50a3"]]),se=j=>(Ae("data-v-421582f4"),j=j(),Me(),j),Ge={class:"client"},Qe=se(()=>m("div",{class:"title"},"Client List",-1)),el={class:"tool-box"},ll={class:"flex"},tl={class:"table"},al=["onClick"],nl={class:"pointer"},ol={class:"action"},sl=["onClick"],ul=["onClick"],il=["onClick"],dl=se(()=>m("span",null,"Are you sure to delete this?",-1)),rl={class:"dialog-footer"},pl={class:"pagination"},ml=se(()=>m("div",null,null,-1)),cl=pe({__name:"index",setup(j){const{setBreadcrumbList:C}=Oe(),X=xe(),D=_(),K=_(!0),L=[{name:"add",component:re},{name:"edit",component:re}],I=_(null),t=[{value:0,label:"Client",name:"name"},{value:1,label:"Email",name:"email"},{value:2,label:"Mobile",name:"mobile"}],Z=_([]),A=_(null),M=_(null),$=_(""),W=_([]),G=_(0),z=_(10),w=_(1),H=_(null),x=_(!1);me(()=>{h(),ae()});async function h(){var B,V,Y;I.value=null;let p={pageSize:z.value,pageNum:w.value},e={};A.value!==null&&(e={[t[A.value].name]:$.value}),M.value!==null&&(e={...e,clientType:(B=Z.value[M.value])==null?void 0:B.value});const[d,i]=await g.queryClients(e,p);K.value=!1,!d&&i?(console.log(i.data),G.value=((V=i.data)==null?void 0:V.total)||0,W.value=((Y=i.data)==null?void 0:Y.list)||[]):console.log(d)}async function ae(){let p={type:"client_type"};const[e,d]=await g.queryDictionary(p);!e&&d&&(Z.value=(d==null?void 0:d.data)||[])}const ne=p=>{w.value=p,h()},c=()=>{A.value=null,$.value="",w.value=1,h()},n=()=>{w.value=1,h()},o=()=>{C([{name:"Create Client"}]),I.value=L.findIndex(p=>p.name==="add"),H.value=null,D.value.handleIsShow()},E=p=>{C([{name:`${p.name}`}]),X.push({path:`/client/detail/${p.id}`}).catch(e=>{console.warn(e)})},v=p=>{C([{name:"Edit Client"}]),I.value=L.findIndex(e=>e.name==="edit"),H.value=p.id,D.value.handleIsShow()},u=()=>{x.value=!0},N=async p=>{const e={id:p.id},[d,i]=await g.delClient(e);!d&&i&&(i.data&&J.success("delete success"),x.value=!1,h())},k=async p=>{const e={id:p.id},[d,i]=await g.resetClientPassword(e);!d&&i&&i.data&&J.success("reset success")},T=()=>{D.value&&D.value.handleIsShow()},P=()=>{h()};return de(we,{func:T}),de(ge,{cId:H}),(p,e)=>{const d=ye,i=Ce,B=be,V=_e,Y=ve,b=$e,Q=Be,ee=Fe,le=Pe,te=ze,he=Ye,Ee=qe;return f(),y(U,null,[Ne((f(),y("div",Ge,[Qe,m("div",el,[m("div",ll,[l(i,{class:"select",modelValue:a(A),"onUpdate:modelValue":e[0]||(e[0]=r=>O(A)?A.value=r:null),clearable:"",placeholder:"Filter by"},{default:s(()=>[(f(),y(U,null,F(t,r=>l(d,{key:r.value,label:r.label,value:r.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(B,{modelValue:a($),"onUpdate:modelValue":e[1]||(e[1]=r=>O($)?$.value=r:null),class:"m-lr-20 width-200",placeholder:"Search","prefix-icon":a(Se),clearable:""},null,8,["modelValue","prefix-icon"]),l(V,{class:"text-white",type:"primary",color:"#BE9670",onClick:n},{default:s(()=>[S(" Search ")]),_:1}),l(V,{class:"text-828282",type:"primary",color:"#E8E8E8",onClick:c},{default:s(()=>[S(" Clear ")]),_:1}),l(i,{class:"select m-l-20",modelValue:a(M),"onUpdate:modelValue":e[2]||(e[2]=r=>O(M)?M.value=r:null),clearable:"",placeholder:"Client type",onChange:P},{default:s(()=>[(f(!0),y(U,null,F(a(Z),r=>(f(),R(d,{key:r.value,label:r.code,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),m("div",null,[l(V,{type:"primary",color:"#4E9F1C",onClick:o},{default:s(()=>[S(" New Client "),l(Y,null,{default:s(()=>[l(a(ce))]),_:1})]),_:1})])]),m("div",tl,[a(W).length>0?(f(),R(le,{key:0,data:a(W),height:"600","row-style":{height:"80px"}},{default:s(()=>[l(b,{prop:"id",label:"Client ID",align:"center"}),l(b,{prop:"name",label:"Client",align:"left",width:"180"},{default:s(r=>[m("div",{class:"table-name pointer",onClick:q=>E(r.row)},[m("span",null,oe(r.row.name),1)],8,al)]),_:1}),l(b,{prop:"birth",label:"Birth",align:"left"}),l(b,{prop:"email",label:"Email",width:"200"}),l(b,{prop:"mobile",label:"Mobile"}),l(b,{prop:"clientType",label:"Client Type"}),l(b,{prop:"",label:"Total Investment Amount",width:"150"}),l(b,{prop:"",label:"Pervious Month Investment Return (End of month)",width:"150"}),l(b,{prop:"",label:"Total current Investment Return",width:"150"}),l(b,{prop:"",label:"Action",align:"center",fixed:"right"},{default:s(r=>[m("div",nl,[l(ee,{placement:"bottom",width:170,trigger:"hover"},{reference:s(()=>[l(Y,{size:30,color:"#969696"},{default:s(()=>[l(a(Re))]),_:1})]),default:s(()=>[m("div",ol,[m("div",{class:"item",onClick:q=>E(r.row)},"View",8,sl),m("div",{class:"item",onClick:q=>v(r.row)},"Edit",8,ul),m("div",{class:"item",onClick:q=>k(r.row)},"Reset password",8,il),m("div",{class:"item",onClick:e[3]||(e[3]=q=>u())},"Delete"),l(Q,{modelValue:a(x),"onUpdate:modelValue":e[5]||(e[5]=q=>O(x)?x.value=q:null),title:"Message",width:"30%","align-center":""},{footer:s(()=>[m("span",rl,[l(V,{onClick:e[4]||(e[4]=q=>x.value=!1)},{default:s(()=>[S("Cancel")]),_:1}),l(V,{type:"primary",onClick:q=>N(r.row)},{default:s(()=>[S(" Confirm ")]),_:2},1032,["onClick"])])]),default:s(()=>[dl]),_:2},1032,["modelValue"])])]),_:2},1024)])]),_:1})]),_:1},8,["data"])):(f(),R(te,{key:1,"image-size":200}))]),m("div",pl,[ml,l(he,{background:"",layout:"total,consists of sizes, prev, pager, next, jumper, ->, slot",total:a(G),"page-size":a(z),"onUpdate:pageSize":e[6]||(e[6]=r=>O(z)?z.value=r:null),"current-page":a(w),"onUpdate:currentPage":e[7]||(e[7]=r=>O(w)?w.value=r:null),onCurrentChange:ne},null,8,["total","page-size","current-page"])])])),[[Ee,a(K)]]),l(a(ke),{ref_key:"rightPanel",ref:D,onBackFn:h},{content:s(()=>[a(I)!==null?(f(),R(Le(L[a(I)].component),{key:0})):fe("",!0)]),_:1},512)],64)}}});const xl=Ve(cl,[["__scopeId","data-v-421582f4"]]);export{xl as default};
