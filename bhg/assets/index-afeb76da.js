import{a as U}from"./index-35b0e3a1.js";/* empty css                   *//* empty css                 *//* empty css                 *//* empty css                *//* empty css                  */import{i as pe,_ as Ue}from"./index-79b2cd3e.js";import{d as ye,o as be,r as f,G as ie,b as d,h as m,j as r,t as z,g as l,f as e,e as n,l as k,a1 as Ie,F as A,i as O,c as D,$ as me,as as _e,m as Z,U as G,K as J,E as he,R as Ce,a2 as Re,a3 as ke,P as De,a4 as Te,O as we,ad as qe,I as Be,W as Ee,X as Ve,ab as Ne,x as xe,y as $e,_ as Le,a5 as ve,a6 as ze,a7 as re,Y as Oe,a8 as je,a9 as Ke,aa as Me,k as Ge,a0 as Ye,Z as He}from"./index-5a0eb1b1.js";import{u as We}from"./AppMain.vue_vue_type_style_index_0_scoped_41d4e859_lang-bdfc2e53.js";/* empty css                     *//* empty css                    *//* empty css                  */import{P as Ae}from"./index-e099722b.js";import"./useUser-46e05e2c.js";const Fe=Symbol("referral"),Pe=F=>(xe("data-v-6acc49cb"),F=F(),$e(),F),Xe={class:"pop-top"},Ze={class:"title"},Je={class:"form"},Qe={class:"block padding-t-20"},el={class:"block padding-t-20"},ll={class:"flex"},tl={class:"level"},al={key:0,class:"list"},nl=["onClick"],ol={class:"text-cut"},sl={class:"level"},il={key:0,class:"list"},rl=["onClick"],dl={class:"text-cut"},ul={class:"block padding-t-20"},cl={key:0,class:"block padding-t-20"},fl=Pe(()=>r("div",{class:"table-title"},"Current Total Amount",-1)),pl={key:1,class:"block padding-t-20"},ml=Pe(()=>r("div",{class:"table-title"},"Commission Payment Records",-1)),_l={class:"dialog-footer"},vl=ye({__name:"CreateOrEditReferral",setup(F){const{rId:w}=pe(Fe),{func:T}=pe(Ae);be(async()=>{await te(),await ae(),w.value&&N()});const j=f([]),Y=f([]),P=f([]),S=f([]),E=f({}),V=f([]),H=f(),X=f(),i=ie({clientId:"",entityId:"",fundId:"",gst:!1,commissionRate:"",currency:"",referralAgreement:"",refList:[]}),g=f(!1),K=f("add"),R=f(null),$=f(null),u=ie({clientId:"",entityId:"",id:"",financeId:""}),Q=ie({clientId:[{required:!0,message:"Please select client",trigger:"change"}],entityId:[{required:!0,message:"Please select entity",trigger:"change"}],fundId:[{required:!0,message:"Please select fund",trigger:"change"}],gst:[{required:!0,message:"Please choose gst",trigger:"change"}],commissionRate:[{required:!0,message:"Please input Commission Rate",trigger:"blur"}],refList:[{required:!0,message:"Please input Referral",trigger:"blur"}]}),le=async s=>{s&&await s.validate((t,o)=>{if(t){if(console.log("submit!"),i.refList.length<=0){J.error("Please input Referral");return}i.referralAgreement=V.value.length>0?V.value[0].raw:"",w.value?q():c()}else J.error("Please enter correct content!"),console.log("error submit!",o)})};async function te(){let s={};const[t,o]=await U.getClientsNames(s);!t&&o&&(j.value=(o==null?void 0:o.data)||[])}async function ae(){let s={};const[t,o]=await U.getFundsNames(s);!t&&o&&(Y.value=(o==null?void 0:o.data)||[])}const ne=()=>{i.clientId?ue():(i.entityId="",P.value=[])},oe=()=>{u.clientId?I():(u.entityId="",S.value=[])};async function ue(){if(!i.clientId)return;let s={clientId:i.clientId};const[t,o]=await U.queryEntity(s);!t&&o&&(P.value=(o==null?void 0:o.data)||[])}async function I(){if(!u.clientId)return;let s={clientId:u.clientId};const[t,o]=await U.queryEntity(s);!t&&o&&(S.value=(o==null?void 0:o.data)||[])}async function c(){let s=i;const[t,o]=await U.createReferral(s);!t&&o&&o.success&&(J.success("Created successfully"),setTimeout(()=>{T()},1e3))}async function q(){let s={...i,id:w.value};console.log(s);const[t,o]=await U.updateReferral(s);!t&&o&&o.success&&(J.success("Edit successfully"),setTimeout(()=>{T()},1e3))}async function N(){var b,C,y,v,p,x,ee;let s={id:w.value};const[t,o]=await U.queryFinancingById(s);!t&&o&&(console.log(o.data),E.value=o.data,i.clientId=((b=o.data)==null?void 0:b.clientId)||"",i.entityId=((C=o.data)==null?void 0:C.entityId)||"",i.fundId=((y=o.data)==null?void 0:y.fundId)||"",i.gst=((v=o.data)==null?void 0:v.gst)||!1,i.refList=((p=o.data)==null?void 0:p.refList)||[],i.commissionRate=((x=o.data)==null?void 0:x.commissionRate)||"",i.currency=((ee=o.data)==null?void 0:ee.currency)||"")}const M=s=>{K.value="add",$.value=s,S.value=[],u.clientId="",u.entityId="",g.value=!0},L=async s=>{s&&await s.validate((t,o)=>{if(t){const b=j.value.find(y=>y.id===u.clientId),C=S.value.find(y=>y.id===u.entityId);K.value==="add"?i.refList.push({clientId:u.clientId,clientName:b.name,entityId:u.entityId,entityName:C.entityName,level:$.value}):(console.log("edit"),i.refList[R.value].clientId=u.clientId,i.refList[R.value].clientName=b.name,i.refList[R.value].entityName=C.entityName,i.refList[R.value].entityId=u.entityId),g.value=!1}else console.log("error submit!",o)})},B=s=>{i.refList.splice(s,1)},h=(s,t)=>{console.log(s),R.value=t,K.value="edit",u.clientId=Number(s.clientId),u.entityId=Number(s.entityId),$.value=s.level,s!=null&&s.id&&(u.id=s==null?void 0:s.id),s!=null&&s.financeId&&(u.financeId=s==null?void 0:s.financeId),S.value=[],I(),g.value=!0};return(s,t)=>{const o=he,b=Ce,C=Re,y=ke,v=De,p=Te,x=we,ee=qe,ce=Be,W=Ee,fe=Ve,Se=Ne;return d(),m(A,null,[r("div",Xe,[r("div",Ze,z(l(w)?"Edit Referral":"Create Referral"),1),r("div",null,[e(b,{type:"primary",color:"#4E9F1C",onClick:t[0]||(t[0]=a=>le(l(H)))},{default:n(()=>[k(z(l(w)?"Edit Referral":"New Referral")+" ",1),e(o,null,{default:n(()=>[e(l(Ie))]),_:1})]),_:1})])]),r("div",Je,[e(ce,{ref_key:"ruleFormRef",ref:H,model:l(i),rules:l(Q),"label-width":"200px","status-icon":""},{default:n(()=>[r("div",Qe,[e(v,{label:"Client",prop:"clientId"},{default:n(()=>[e(y,{modelValue:l(i).clientId,"onUpdate:modelValue":t[1]||(t[1]=a=>l(i).clientId=a),placeholder:"Please Client",filterable:"",clearable:"",onChange:ne},{default:n(()=>[(d(!0),m(A,null,O(l(j),(a,_)=>(d(),D(C,{label:a.name,value:a.id,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"Entity Name",prop:"entityId"},{default:n(()=>[e(y,{modelValue:l(i).entityId,"onUpdate:modelValue":t[2]||(t[2]=a=>l(i).entityId=a),placeholder:"Please Entity Name",filterable:"",clearable:""},{default:n(()=>[(d(!0),m(A,null,O(l(P),(a,_)=>(d(),D(C,{label:a.entityName,value:a.id,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"Fund",prop:"fundId"},{default:n(()=>[e(y,{modelValue:l(i).fundId,"onUpdate:modelValue":t[3]||(t[3]=a=>l(i).fundId=a),placeholder:"Please Fund",filterable:"",clearable:""},{default:n(()=>[(d(!0),m(A,null,O(l(Y),(a,_)=>(d(),D(C,{label:a.name,value:a.id,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"GST",prop:"gst"},{default:n(()=>[e(p,{modelValue:l(i).gst,"onUpdate:modelValue":t[4]||(t[4]=a=>l(i).gst=a),"active-text":"Yes","inactive-text":"No"},null,8,["modelValue"])]),_:1})]),r("div",el,[e(v,{label:"Referral",prop:"refList"},{default:n(()=>[r("div",ll,[r("div",tl,[(d(!0),m(A,null,O(l(i).refList,(a,_)=>(d(),m("div",{class:"line",key:_},[a.level===2?(d(),m("div",al,[r("div",{class:"item",onClick:se=>h(a,_)},[r("div",ol,z(a.clientName)+","+z(a.entityName),1),e(o,null,{default:n(()=>[e(l(me))]),_:1})],8,nl),e(o,{class:"bg-grey",size:"14",color:"#fff",onClick:se=>B(_)},{default:n(()=>[e(l(_e))]),_:2},1032,["onClick"])])):Z("",!0)]))),128)),e(b,{class:"margin-t-10",onClick:t[5]||(t[5]=a=>M(2))},{default:n(()=>[k(" +Add level1 ")]),_:1})]),r("div",sl,[(d(!0),m(A,null,O(l(i).refList,(a,_)=>(d(),m("div",{class:"line",key:_},[a.level===3?(d(),m("div",il,[r("div",{class:"item",onClick:se=>h(a,_)},[r("div",dl,z(a.clientName)+","+z(a.entityName),1),e(o,null,{default:n(()=>[e(l(me))]),_:1})],8,rl),e(o,{class:"bg-grey",size:"14",color:"#fff",onClick:se=>B(_)},{default:n(()=>[e(l(_e))]),_:2},1032,["onClick"])])):Z("",!0)]))),128)),e(b,{class:"margin-t-10",onClick:t[6]||(t[6]=a=>M(3))},{default:n(()=>[k(" +Add level2 ")]),_:1})])])]),_:1})]),r("div",ul,[e(v,{label:"Total Financing Amount"},{default:n(()=>{var a;return[k(" $"+z(((a=l(E))==null?void 0:a.financingAmount)||0),1)]}),_:1}),e(v,{label:"Commission Rate",prop:"commissionRate"},{default:n(()=>[e(x,{modelValue:l(i).commissionRate,"onUpdate:modelValue":t[7]||(t[7]=a=>l(i).commissionRate=a),type:"number"},null,8,["modelValue"])]),_:1}),e(v,{label:"Currency",prop:"currency"},{default:n(()=>[e(x,{modelValue:l(i).currency,"onUpdate:modelValue":t[8]||(t[8]=a=>l(i).currency=a)},null,8,["modelValue"])]),_:1}),e(v,{label:"Referral Agreement",prop:"referralAgreement"},{default:n(()=>[e(ee,{"file-list":l(V),"onUpdate:fileList":t[9]||(t[9]=a=>G(V)?V.value=a:null),"auto-upload":!1,limit:1,"list-type":"text"},{trigger:n(()=>[e(b,{type:"primary"},{default:n(()=>[k("Choose file")]),_:1})]),_:1},8,["file-list"])]),_:1})])]),_:1},8,["model","rules"]),l(w)?(d(),m("div",cl,[fl,e(fe,{data:l(E).subClientsCurrentTotalReturnResponses,height:"240","row-style":{height:"30px"},"header-cell-style":{background:"#BE9670",color:"#fff"}},{default:n(()=>[e(W,{prop:"name",label:"Client Name",align:"center"}),e(W,{prop:"entityName",label:"Entity",align:"center"}),e(W,{prop:"purchaseAmount",label:"Financing Amount",align:"center"}),e(W,{prop:"currentTotalReturn",label:"Interest Return",align:"center"})]),_:1},8,["data"])])):Z("",!0),l(w)?(d(),m("div",pl,[ml,e(fe,{data:l(E).commissionHistoryResponses,height:"240","row-style":{height:"30px"},"header-cell-style":{background:"#BE9670",color:"#fff"}},{default:n(()=>[e(W,{prop:"dividendDate",label:"Commission Payment Date",align:"center"}),e(W,{prop:"dividendAmount",label:"Commission Return",align:"center"})]),_:1},8,["data"])])):Z("",!0)]),e(Se,{modelValue:l(g),"onUpdate:modelValue":t[14]||(t[14]=a=>G(g)?g.value=a:null),title:""},{footer:n(()=>[r("span",_l,[e(b,{onClick:t[12]||(t[12]=a=>g.value=!1)},{default:n(()=>[k("Cancel")]),_:1}),e(b,{type:"primary",onClick:t[13]||(t[13]=a=>L(l(X)))},{default:n(()=>[k(" Confirm ")]),_:1})])]),default:n(()=>[e(ce,{model:l(u),ref_key:"formRef",ref:X,rules:l(Q)},{default:n(()=>[e(v,{label:"Client",prop:"clientId"},{default:n(()=>[e(y,{modelValue:l(u).clientId,"onUpdate:modelValue":t[10]||(t[10]=a=>l(u).clientId=a),placeholder:"Please Client",filterable:"",clearable:"",onChange:oe},{default:n(()=>[(d(!0),m(A,null,O(l(j),(a,_)=>(d(),D(C,{label:a.name,value:a.id,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(v,{label:"Entity",prop:"entityId"},{default:n(()=>[e(y,{modelValue:l(u).entityId,"onUpdate:modelValue":t[11]||(t[11]=a=>l(u).entityId=a),placeholder:"Please Entity Name",filterable:"",clearable:""},{default:n(()=>[(d(!0),m(A,null,O(l(S),(a,_)=>(d(),D(C,{label:a.entityName,value:a.id,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}});const ge=Le(vl,[["__scopeId","data-v-6acc49cb"]]),de=F=>(xe("data-v-4389a509"),F=F(),$e(),F),gl={class:"referral"},yl=de(()=>r("div",{class:"title"},"Referral List",-1)),bl={class:"tool-box"},Il={class:"flex"},hl={class:"table"},Cl={class:"table-name"},Rl={class:"pointer"},kl={class:"action"},wl=["onClick"],El=de(()=>r("span",null,"Are you sure to delete this?",-1)),Vl={class:"dialog-footer"},Nl={class:"pagination"},xl=de(()=>r("div",null,null,-1)),$l=ye({__name:"index",setup(F){const{setBreadcrumbList:w}=We(),T=f(),j=f(!0),Y=[{name:"add",component:ge},{name:"edit",component:ge}],P=f(null),S=[{value:0,label:"Client",name:"clientId"},{value:1,label:"Entity",name:"entityId"},{value:2,label:"Fund",name:"fundId"}],E=f(null),V=f(""),H=f([]),X=f(0),i=f(10),g=f(1),K=f(null),R=f(!1);be(()=>{$()});async function $(){var M,L,B;P.value=null;let I={pageSize:i.value,pageNum:g.value},c={};E.value!==null&&(c={[S[E.value].name]:V.value});const[q,N]=await U.queryReferral(c,I);j.value=!1,!q&&N?(console.log((M=N.data)==null?void 0:M.list),X.value=((L=N.data)==null?void 0:L.total)||0,H.value=((B=N.data)==null?void 0:B.list)||[]):console.log(q)}const u=I=>{g.value=I,$()},Q=()=>{E.value=null,V.value="",g.value=1,$()},le=()=>{g.value=1,$()},te=()=>{w([{name:"Create Referral"}]),P.value=Y.findIndex(I=>I.name==="add"),K.value=null,T.value.handleIsShow()},ae=I=>{w([{name:"Edit Referral"}]),P.value=Y.findIndex(c=>c.name==="edit"),K.value=I.id,T.value.handleIsShow()},ne=()=>{R.value=!0},oe=async I=>{const c={id:I.id},[q,N]=await U.delReferral(c);!q&&N&&(N.data&&J.success("delete success"),R.value=!1,$())};return ve(Ae,{func:()=>{T.value&&T.value.handleIsShow()}}),ve(Fe,{rId:K}),(I,c)=>{const q=Re,N=ke,M=we,L=Ce,B=he,h=Ee,s=Ne,t=Ye,o=Ve,b=He,C=Oe,y=ze("permission"),v=je;return d(),m(A,null,[re((d(),m("div",gl,[yl,r("div",bl,[r("div",Il,[e(N,{class:"select",modelValue:l(E),"onUpdate:modelValue":c[0]||(c[0]=p=>G(E)?E.value=p:null),clearable:"",placeholder:"Filter by"},{default:n(()=>[(d(),m(A,null,O(S,p=>e(q,{key:p.value,label:p.label,value:p.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(M,{modelValue:l(V),"onUpdate:modelValue":c[1]||(c[1]=p=>G(V)?V.value=p:null),class:"m-lr-20",placeholder:"Search","prefix-icon":l(Ke),clearable:""},null,8,["modelValue","prefix-icon"]),e(L,{class:"text-white",type:"primary",color:"#BE9670",onClick:le},{default:n(()=>[k(" Search ")]),_:1}),e(L,{class:"text-828282",type:"primary",color:"#E8E8E8",onClick:Q},{default:n(()=>[k(" Clear ")]),_:1})]),r("div",null,[re((d(),D(L,{type:"primary",color:"#4E9F1C",onClick:te},{default:n(()=>[k(" New Referral "),e(B,null,{default:n(()=>[e(l(Ie))]),_:1})]),_:1})),[[y,"Referral"]])])]),r("div",hl,[l(H).length>0?(d(),D(o,{key:0,data:l(H),height:"600","row-style":{height:"80px"}},{default:n(()=>[e(h,{prop:"id",label:"Referral ID",align:"center",width:"100",fixed:"left"}),e(h,{prop:"name",label:"Entity",align:"left",width:"150",fixed:"left"},{default:n(p=>[r("div",Cl,[r("span",null,z(p.row.entityName),1)])]),_:1}),e(h,{prop:"clientName",label:"Client",align:"left",width:"150"}),e(h,{prop:"fundName",label:"Fund",width:"200"}),e(h,{prop:"commissionRate",label:"Commission Rate",width:"150",align:"center"}),e(h,{prop:"commissionAmount",label:"Commission Amount",width:"200",align:"center"}),e(h,{prop:"financingAmount",label:"Total Financing Amount",width:"200",align:"center"}),e(h,{prop:"currency",label:"Currency",width:"150",align:"center"}),e(h,{prop:"createAt",label:"Create at",width:"200"}),e(h,{prop:"",label:"Action",align:"center",fixed:"right"},{default:n(p=>[r("div",Rl,[e(t,{placement:"bottom",width:170,trigger:"hover"},{reference:n(()=>[e(B,{size:30,color:"#969696"},{default:n(()=>[e(l(Me))]),_:1})]),default:n(()=>[re((d(),m("div",kl,[r("div",{class:"item",onClick:x=>ae(p.row)},"Edit",8,wl),r("div",{class:"item",onClick:c[2]||(c[2]=x=>ne())},"Delete"),e(s,{modelValue:l(R),"onUpdate:modelValue":c[4]||(c[4]=x=>G(R)?R.value=x:null),title:"Message",width:"30%","align-center":""},{footer:n(()=>[r("span",Vl,[e(L,{onClick:c[3]||(c[3]=x=>R.value=!1)},{default:n(()=>[k("Cancel")]),_:1}),e(L,{type:"primary",onClick:x=>oe(p.row)},{default:n(()=>[k(" Confirm ")]),_:2},1032,["onClick"])])]),default:n(()=>[El]),_:2},1032,["modelValue"])])),[[y,"Referral"]])]),_:2},1024)])]),_:1})]),_:1},8,["data"])):(d(),D(b,{key:1,"image-size":200}))]),r("div",Nl,[xl,e(C,{background:"",layout:"total,consists of sizes, prev, pager, next, jumper, ->, slot",total:l(X),"page-size":l(i),"onUpdate:pageSize":c[5]||(c[5]=p=>G(i)?i.value=p:null),"current-page":l(g),"onUpdate:currentPage":c[6]||(c[6]=p=>G(g)?g.value=p:null),onCurrentChange:u},null,8,["total","page-size","current-page"])])])),[[v,l(j)]]),e(l(Ue),{ref_key:"rightPanel",ref:T,onBackFn:$},{content:n(()=>[l(P)!==null?(d(),D(Ge(Y[l(P)].component),{key:0})):Z("",!0)]),_:1},512)],64)}}});const Ml=Le($l,[["__scopeId","data-v-4389a509"]]);export{Ml as default};
