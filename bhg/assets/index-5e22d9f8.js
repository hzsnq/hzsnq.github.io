import{a as x}from"./index-1beab65c.js";/* empty css                   *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                   *//* empty css                  */import{i as W,_ as he}from"./index-38ed8943.js";import"./useUser-7f9c8acd.js";import{d as H,o as J,r as _,D as le,b as E,g as $,i as s,t as v,f as l,e,w as t,k as m,$ as ne,F as B,h as oe,c as L,J as z,E as se,P as re,N as ie,O as Ee,a1 as de,a2 as ce,H as ye,_ as X,ak as Ce,al as Re,v as ue,x as pe,a4 as ae,a5 as Pe,T as N,V as Ie,W as Ve,a6 as xe,a7 as Se,a8 as ke,j as Ae,l as Ue,U as Te,a9 as $e,Z as De,X as Fe}from"./index-298568e1.js";import{u as Ne}from"./AppMain.vue_vue_type_style_index_0_scoped_41d4e859_lang-b6e11d1a.js";/* empty css                     */import{P as me}from"./index-e099722b.js";import{i as Be}from"./validate-add6ff74.js";/* empty css                             */const Z=Symbol("referral"),Me={class:"pop-top"},qe={class:"title"},Le={class:"form"},ze=H({__name:"CreatOrEditReferral",setup(w){const{rId:g}=W(Z),{func:d}=W(me);J(()=>{M(),g.value&&k()});const V=_([]),h=_(),i=le({adminUserEmail:"",roleId:null,password:"asdf1234",password2:"asdf1234"}),a=le({adminUserEmail:[{required:!0,message:"Please input Email",trigger:"blur"},{validator:(u,n,o)=>{n===""?o(new Error("Please input Email")):Be(n)?o():o(new Error("Email format is incorrect!"))},trigger:"blur"}],roleId:[{required:!0,message:"Please select Role",trigger:"change"}],password:[{required:!0,message:"Please input Password",trigger:"blur"},{min:8,max:16,message:"Length should be 8 to 16",trigger:"blur"}],password2:[{required:!0,message:"Please input Password",trigger:"blur"},{min:8,max:16,message:"Length should be 8 to 16",trigger:"blur"},{validator:(u,n,o)=>{n===""?o(new Error("Please input the Password again")):n!==i.password?o(new Error("Two inputs don't match!")):o()},trigger:"blur"}]}),D=async u=>{u&&await u.validate((n,o)=>{n?(console.log("submit!"),g.value?C():S()):(z.error("Please enter correct content!"),console.log("error submit!",o))})};async function M(){let u={};const[n,o]=await x.queryRoles(u);!n&&o&&(V.value=(o==null?void 0:o.data)||[])}async function S(){let u=i;const[n,o]=await x.createAdminUser(u);!n&&o&&o.success&&(z.success("Created successfully"),setTimeout(()=>{d()},1e3))}async function C(){let u={...i,id:g.value};const[n,o]=await x.editAdmin(u);!n&&o&&o.success&&(z.success("Edit successfully"),setTimeout(()=>{d()},1e3))}async function k(){let u={id:g.value};const[n,o]=await x.queryReferralByIdWhenEdit(u);!n&&o&&console.log(o.data)}return(u,n)=>{const o=se,Y=re,F=ie,A=Ee,O=de,j=ce,K=ye;return E(),$(B,null,[s("div",Me,[s("div",qe,v(l(g)?"Edit Client":"Create Client"),1),s("div",null,[e(Y,{type:"primary",color:"#4E9F1C",onClick:n[0]||(n[0]=f=>D(l(h)))},{default:t(()=>[m(v(l(g)?"Edit Client":"New Client")+" ",1),e(o,null,{default:t(()=>[e(l(ne))]),_:1})]),_:1})])]),s("div",Le,[e(K,{ref_key:"ruleFormRef",ref:h,model:l(i),rules:l(a),"label-width":"200px","status-icon":""},{default:t(()=>[e(A,{label:"Email",prop:"adminUserEmail"},{default:t(()=>[e(F,{modelValue:l(i).adminUserEmail,"onUpdate:modelValue":n[1]||(n[1]=f=>l(i).adminUserEmail=f)},null,8,["modelValue"])]),_:1}),e(A,{label:"Role",prop:"roleId"},{default:t(()=>[e(j,{modelValue:l(i).roleId,"onUpdate:modelValue":n[2]||(n[2]=f=>l(i).roleId=f),placeholder:"Select Role"},{default:t(()=>[(E(!0),$(B,null,oe(l(V),(f,Q)=>(E(),L(O,{label:f.roleName,value:f.id,key:Q},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(A,{label:"Password",prop:"password"},{default:t(()=>[e(F,{modelValue:l(i).password,"onUpdate:modelValue":n[3]||(n[3]=f=>l(i).password=f),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1}),e(A,{label:"Password confirmation",prop:"password2"},{default:t(()=>[e(F,{modelValue:l(i).password2,"onUpdate:modelValue":n[4]||(n[4]=f=>l(i).password2=f),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])],64)}}});const te=X(ze,[["__scopeId","data-v-fc64fc1a"]]),Ye=w=>(ue("data-v-ad3cc008"),w=w(),pe(),w),Oe=Ye(()=>s("div",{class:"pop-top"},[s("div",{class:"title"},"View Client"),s("div")],-1)),je={class:"form"},Ke=H({__name:"ViewReferral",setup(w){const{rId:g}=W(Z),d=_({});J(()=>{V()});async function V(){let h={id:g.value};const[i,c]=await x.queryReferralById(h);!i&&c&&(console.log(c.data),d.value=(c==null?void 0:c.data)||{})}return(h,i)=>{const c=Ce,y=Re;return E(),$(B,null,[Oe,s("div",je,[e(y,{column:1,border:""},{default:t(()=>[e(c,{label:"ID","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v((a=l(d))==null?void 0:a.id),1)]}),_:1}),e(c,{label:"Name","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v((a=l(d))==null?void 0:a.name),1)]}),_:1}),e(c,{label:"Message","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.message)||"EMPTY"),1)]}),_:1}),e(c,{label:"Email","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v((a=l(d))==null?void 0:a.email),1)]}),_:1}),e(c,{label:"Create at","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v((a=l(d))==null?void 0:a.createAt),1)]}),_:1}),e(c,{label:"Update At","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.updateAt)||"EMPTY"),1)]}),_:1}),e(c,{label:"Phone","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.phone)||"EMPTY"),1)]}),_:1}),e(c,{label:"Interest","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.interest)||"EMPTY"),1)]}),_:1}),e(c,{label:"Suburb","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.suburb)||"EMPTY"),1)]}),_:1}),e(c,{label:"State","label-align":"center",align:"center"},{default:t(()=>{var a;return[m(v(((a=l(d))==null?void 0:a.state)||"EMPTY"),1)]}),_:1})]),_:1})])],64)}}});const We=X(Ke,[["__scopeId","data-v-ad3cc008"]]),G=w=>(ue("data-v-c8604e00"),w=w(),pe(),w),He={class:"referral"},Je=G(()=>s("div",{class:"title"},"Referral List",-1)),Xe={class:"tool-box"},Ze={class:"flex"},Ge={class:"table"},Qe={class:"table-name"},el={class:"pointer"},ll={class:"action"},al=["onClick"],tl=["onClick"],nl=G(()=>s("span",null,"Are you sure to delete this?",-1)),ol={class:"dialog-footer"},sl={class:"pagination"},rl=G(()=>s("div",null,null,-1)),il=H({__name:"index",setup(w){const{setBreadcrumbList:g}=Ne(),d=_(),V=_(!0),h=[{name:"view",component:We},{name:"add",component:te},{name:"edit",component:te}],i=_(null),c=[{value:0,label:"Referral",name:"Referral"},{value:1,label:"Investment type",name:"investment"},{value:2,label:"Product type",name:"product"}],y=_(null),a=_(""),D=_([]),M=_(0),S=_(10),C=_(1),k=_(null),u=_(!1);J(()=>{n()});async function n(){var q,I;i.value=null;let b={pageSize:S.value,pageNum:C.value},r={};y.value!==null&&(r={[c[y.value].name]:a.value});const[U,R]=await x.queryReferral(r,b);V.value=!1,!U&&R?(console.log(R.data),M.value=((q=R.data)==null?void 0:q.total)||0,D.value=((I=R.data)==null?void 0:I.list)||[]):console.log(U)}const o=b=>{C.value=b,n()},Y=()=>{y.value=null,a.value="",C.value=1,n()},F=()=>{C.value=1,n()},A=()=>{g([{name:"Create Referral"}]),i.value=h.findIndex(b=>b.name==="add"),k.value=null,d.value.handleIsShow()},O=b=>{g([{name:"View Referral"}]),i.value=h.findIndex(r=>r.name==="view"),k.value=b.id,d.value.handleIsShow()},j=b=>{g([{name:"Edit Referral"}]),i.value=h.findIndex(r=>r.name==="edit"),k.value=b.id,d.value.handleIsShow()},K=()=>{u.value=!0},f=async b=>{const r={id:b.id},[U,R]=await x.delReferral(r);!U&&R&&(R.data&&z.success("delete success"),u.value=!1,n())};return ae(me,{func:()=>{d.value&&d.value.handleIsShow()}}),ae(Z,{rId:k}),(b,r)=>{const U=de,R=ce,q=ie,I=re,ee=se,P=Te,_e=$e,fe=De,ve=Ie,ge=Fe,be=Ve,we=xe;return E(),$(B,null,[Pe((E(),$("div",He,[Je,s("div",Xe,[s("div",Ze,[e(R,{class:"select",modelValue:l(y),"onUpdate:modelValue":r[0]||(r[0]=p=>N(y)?y.value=p:null),clearable:"",placeholder:"Filter by"},{default:t(()=>[(E(),$(B,null,oe(c,p=>e(U,{key:p.value,label:p.label,value:p.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),e(q,{modelValue:l(a),"onUpdate:modelValue":r[1]||(r[1]=p=>N(a)?a.value=p:null),class:"m-lr-20",placeholder:"Search","prefix-icon":l(Se),clearable:""},null,8,["modelValue","prefix-icon"]),e(I,{class:"text-white",type:"primary",color:"#BE9670",onClick:F},{default:t(()=>[m(" Search ")]),_:1}),e(I,{class:"text-828282",type:"primary",color:"#E8E8E8",onClick:Y},{default:t(()=>[m(" Clear ")]),_:1})]),s("div",null,[e(I,{type:"primary",color:"#4E9F1C",onClick:A},{default:t(()=>[m(" New Referral "),e(ee,null,{default:t(()=>[e(l(ne))]),_:1})]),_:1})])]),s("div",Ge,[l(D).length>0?(E(),L(ve,{key:0,data:l(D),height:"600","row-style":{height:"80px"}},{default:t(()=>[e(P,{prop:"id",label:"Referral ID",align:"center"}),e(P,{prop:"name",label:"Entity",align:"left"},{default:t(p=>[s("div",Qe,[s("span",null,v(p.row.name),1)])]),_:1}),e(P,{prop:"clientName",label:"Client",align:"left"}),e(P,{prop:"fundName",label:"Fund"}),e(P,{prop:"commissionRate",label:"Commission Rate"}),e(P,{prop:"commissionAmount",label:"Commission Amount"}),e(P,{prop:"financingAmount",label:"Total Financing Amount"}),e(P,{prop:"createAt",label:"Create at"}),e(P,{prop:"",label:"Action",align:"center"},{default:t(p=>[s("div",el,[e(fe,{placement:"bottom",width:170,trigger:"hover"},{reference:t(()=>[e(ee,{size:30,color:"#969696"},{default:t(()=>[e(l(ke))]),_:1})]),default:t(()=>[s("div",ll,[s("div",{class:"item",onClick:T=>O(p.row)},"View",8,al),s("div",{class:"item",onClick:T=>j(p.row)},"Edit",8,tl),s("div",{class:"item",onClick:r[2]||(r[2]=T=>K())},"Delete"),e(_e,{modelValue:l(u),"onUpdate:modelValue":r[4]||(r[4]=T=>N(u)?u.value=T:null),title:"Message",width:"30%","align-center":""},{footer:t(()=>[s("span",ol,[e(I,{onClick:r[3]||(r[3]=T=>u.value=!1)},{default:t(()=>[m("Cancel")]),_:1}),e(I,{type:"primary",onClick:T=>f(p.row)},{default:t(()=>[m(" Confirm ")]),_:2},1032,["onClick"])])]),default:t(()=>[nl]),_:2},1032,["modelValue"])])]),_:2},1024)])]),_:1})]),_:1},8,["data"])):(E(),L(ge,{key:1,"image-size":200}))]),s("div",sl,[rl,e(be,{background:"",layout:"total,consists of sizes, prev, pager, next, jumper, ->, slot",total:l(M),"page-size":l(S),"onUpdate:pageSize":r[5]||(r[5]=p=>N(S)?S.value=p:null),"current-page":l(C),"onUpdate:currentPage":r[6]||(r[6]=p=>N(C)?C.value=p:null),onCurrentChange:o},null,8,["total","page-size","current-page"])])])),[[we,l(V)]]),e(l(he),{ref_key:"rightPanel",ref:d,onBackFn:n},{content:t(()=>[l(i)!==null?(E(),L(Ae(h[l(i)].component),{key:0})):Ue("",!0)]),_:1},512)],64)}}});const Rl=X(il,[["__scopeId","data-v-c8604e00"]]);export{Rl as default};
