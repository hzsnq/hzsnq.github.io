import{d as a,r as e,m as t,a as s,y as l,b as n,c as u,w as d,e as c,n as i,g as f,u as o,f as r,t as m,h as _,i as v,F as D,B as p,O as h,j as g,l as x}from"./index-61664f9b.js";import{_ as Y,a as y}from"./NavBar.df2199e1.js";import{_ as j}from"./download.6031f376.js";import{d as I}from"./dayjs.min.8200664b.js";const b=y(a({__name:"purchaseDetails",setup(a){const y=e({isNotification:!0,backgroundColor:"#fff",isBack:!0}),b=e(""),w=e(""),M=e({});t((a=>{console.log("🚀 ~ file: investmentDetails.vue:14 ~ onLoad ~ options:",a),b.value=(null==a?void 0:a.pId)||"",w.value=(null==a?void 0:a.fId)||""})),s((()=>{!async function(){let a={id:b.value};const[e,t]=await l.getPurchasedFundDetail(a);!e&&t&&(null==t?void 0:t.success)&&(console.log("🚀 ~ file: investmentDetails.vue:42 ~ getPurchasedFundDetail ~ r:",null==t?void 0:t.data),M.value=null==t?void 0:t.data)}()}));const P=()=>{p({url:M.value.unitCertificate,success:function(a){var e=a.tempFilePath;h({filePath:e,showMenu:!0,success:function(a){console.log("打开文档成功")}})}})};return(a,e)=>{const t=Y,s=g,l=x;return n(),u(s,{class:"common-bg"},{default:d((()=>[c(t,i(f(o(y))),null,16),c(s,{class:"investment"},{default:d((()=>[c(s,{class:"title"},{default:d((()=>[r("Purchase Details")])),_:1}),c(s,{class:"item"},{default:d((()=>[c(s,{class:"fund-title"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>{var a;return[r(m(null==(a=o(M))?void 0:a.fundName),1)]})),_:1}),c(s,{class:"flex justify-between align-center"},{default:d((()=>[c(s,{class:"text"},{default:d((()=>[r("Unit Certificate")])),_:1}),c(s,{onClick:P},{default:d((()=>[c(l,{class:"common-icon",src:j})])),_:1})])),_:1})])),_:1}),c(s,{class:"fund-info"},{default:d((()=>[c(s,{class:"fund-item"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>[r("Funds Name")])),_:1}),c(s,{class:"text"},{default:d((()=>{var a;return[r(m(null==(a=o(M))?void 0:a.fundName),1)]})),_:1})])),_:1}),c(s,{class:"fund-item"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>[r("Interest Start Date")])),_:1}),c(s,{class:"text"},{default:d((()=>[r(m(o(M).purchaseStartDate?o(I)(o(M).purchaseStartDate).format("YYYY.MM.DD"):""),1)])),_:1})])),_:1}),c(s,{class:"fund-item"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>[r("Investment Amount")])),_:1}),c(s,{class:"text"},{default:d((()=>{var a;return[r("$"+m(null==(a=o(M))?void 0:a.purchasedAmount),1)]})),_:1})])),_:1}),c(s,{class:"fund-item"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>[r("Interest End Date")])),_:1}),c(s,{class:"text"},{default:d((()=>[r(m(o(M).purchaseEndDate?o(I)(o(M).purchaseEndDate).format("YYYY.MM.DD"):""),1)])),_:1})])),_:1}),c(s,{class:"fund-item"},{default:d((()=>[c(s,{class:"name"},{default:d((()=>[r("Cumulative Interest Amount")])),_:1}),c(s,{class:"text"},{default:d((()=>{var a;return[r("$"+m(null==(a=o(M))?void 0:a.currentTotalReturn),1)]})),_:1})])),_:1})])),_:1}),c(s,{class:"common-info"},{default:d((()=>[c(s,{class:"flex justify-between align-center"},{default:d((()=>[c(s,{class:"common-title"},{default:d((()=>[r("Interest Payment Record")])),_:1}),c(s,{class:"more"})])),_:1})])),_:1}),c(s,{class:"common-table"},{default:d((()=>[c(s,{class:"th flex justify-between align-center"},{default:d((()=>[c(s,{class:"tl"},{default:d((()=>[r("Interest Payment Date")])),_:1}),c(s,{class:"tl"},{default:d((()=>[r("Interest Amount")])),_:1})])),_:1}),(n(!0),_(D,null,v(o(M).dividendHistory,((a,e)=>(n(),u(s,{class:"td flex justify-between align-center",key:e},{default:d((()=>[c(s,{class:"tl"},{default:d((()=>[r(m(a.dividendDate?o(I)(a.dividendDate).format("YYYY.MM.DD"):""),1)])),_:2},1024),c(s,{class:"tl"},{default:d((()=>[r("$"+m(a.dividendAmount),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-297a3a63"]]);export{b as default};