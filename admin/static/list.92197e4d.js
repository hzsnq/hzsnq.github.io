import{a as e,j as a,S as t,r as l,o,b as s,e as r,w as i,C as n,t as d,h as u,E as p}from"./index.2bf7b6c1.js";import{u as c}from"./useNetwork.d997c864.js";const m={class:"app-container"},w=n("发起"),b=n("返回值"),v=n("删除"),h=e({__name:"list",setup(e){const h=a(),f=c(),y=(e,a,t,l)=>{if(a.property){const e=l.target.innerText;if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(e).then((()=>{p.success("复制成功！")}));else{const a=document.createElement("input");a.value=e,document.body.appendChild(a),a.select(),a.value,document.execCommand("Copy"),p.success("复制成功！"),a.remove()}}},x=t(!1),k=t({});return(e,a)=>{const t=l("el-table-column"),p=l("el-tag"),c=l("el-button"),C=l("el-table"),_=l("json-viewer"),g=l("el-dialog");return o(),s("div",m,[r(C,{data:u(f).tableState.tableData,style:{width:"100%"},onCellDblclick:y},{default:i((()=>[r(t,{fixed:"",prop:"method",label:"method",width:"150"}),r(t,{prop:"requestData",label:"requestData","show-overflow-tooltip":!0,"min-width":"150"}),r(t,{prop:"requestUrl",label:"requestUrl",width:"350"}),r(t,{prop:"date",label:"请求时间",width:"200"}),r(t,{prop:"isGateway",label:"网关类型",width:"100"},{default:i((e=>[r(p,{class:"ml-2",type:e.row.isGateway?"success":"danger"},{default:i((()=>[n(d(e.row.isGateway?"老网关":"新网关"),1)])),_:2},1032,["type"])])),_:1}),r(t,{fixed:"right",label:"Operations",width:"180"},{default:i((e=>[r(c,{link:"",type:"primary",size:"small",onClick:a=>(e=>{const a={index:e};f.showItem(!1),h.push({name:"Network",params:a}).catch((e=>{console.warn(e)}))})(e.$index)},{default:i((()=>[w])),_:2},1032,["onClick"]),r(c,{link:"",type:"primary",size:"small",onClick:a=>{return e.$index,t=e.row,x.value=!x.value,void(k.value=t.responseData);var t}},{default:i((()=>[b])),_:2},1032,["onClick"]),r(c,{link:"",type:"primary",size:"small",onClick:a=>{return t=e.$index,void f.delNetworkItem(t);var t}},{default:i((()=>[v])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),r(g,{modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),title:"响应示例"},{default:i((()=>[r(_,{value:k.value,"expand-depth":5,copyable:"",boxed:"",sort:"",expanded:""},null,8,["value"])])),_:1},8,["modelValue"])])}}});export{h as default};
