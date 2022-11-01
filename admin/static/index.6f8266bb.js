import{d as e,_ as t,a,u as n,c as r,r as i,o as l,b as s,e as o,w as c,T as d,f as u,g as h,h as f,i as m,K as p,j as g,k as v,l as w,m as A,n as b,t as C,p as y,F as k,q as x,s as E,v as S,x as T,E as V,y as B,z as L,A as D,B as F,C as R,D as O,G as M,H as I,I as N,J as P,L as z,M as Y,N as Q,O as _,P as j,Q as q,R as H,S as U,U as J,V as X,W as K,X as W}from"./index.6f6f940b.js";import{_ as G}from"./index.e7b279fe.js";const Z=!0,$=!0,ee=!0,te=!0,ae=!0,ne=!0,re=e({id:"settings",state:()=>({fixedHeader:ee,showSettings:Z,showTagsView:$,showSidebarLogo:te,showThemeSwitch:ae,showScreenfull:ne}),actions:{changeSetting(e){const{key:t,value:a}=e;switch(t){case"fixedHeader":this.fixedHeader=a;break;case"showSettings":this.showSettings=a;break;case"showSidebarLogo":this.showSidebarLogo=a;break;case"showTagsView":this.showTagsView=a;break;case"showThemeSwitch":this.showThemeSwitch=a;break;case"showScreenfull":this.showScreenfull=a}}}});const ie={class:"app-main"};var le=t(a({__name:"AppMain",setup(e){const t=n(),a=r((()=>(t.name,t.path)));return(e,t)=>{const n=i("router-view");return l(),s("section",ie,[o(n,null,{default:c((({Component:e,route:t})=>[o(d,{name:"fade-transform",mode:"out-in",appear:""},{default:c((()=>[(l(),u(p,null,[t.meta.keepAlive?(l(),u(h(e),{key:f(a)})):m("",!0)],1024))])),_:2},1024),t.meta.keepAlive?m("",!0):(l(),u(h(e),{key:t.fullPath}))])),_:1})])}}}),[["__scopeId","data-v-17b6cba3"]]);function se(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,i="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--r){s++;break}}else if("("===e[s]&&(r++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));i+=e[s++]}else i+=e[s++]+e[s++];if(r)throw new TypeError("Unbalanced pattern at ".concat(a));if(!i)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:i}),a=s}else{for(var l="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;l+=e[s++]}if(!l)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:l}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,r=void 0===n?"./":n,i="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),l=[],s=0,o=0,c="",d=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},u=function(e){var t=d(e);if(void 0!==t)return t;var n=a[o],r=n.type,i=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(i,", expected ").concat(e))},h=function(){for(var e,t="";e=d("CHAR")||d("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var f=d("CHAR"),m=d("NAME"),p=d("PATTERN");if(m||p){var g=f||"";-1===r.indexOf(g)&&(c+=g,g=""),c&&(l.push(c),c=""),l.push({name:m||s++,prefix:g,suffix:"",pattern:p||i,modifier:d("MODIFIER")||""})}else{var v=f||d("ESCAPED_CHAR");if(v)c+=v;else if(c&&(l.push(c),c=""),d("OPEN")){g=h();var w=d("NAME")||"",A=d("PATTERN")||"",b=h();u("CLOSE"),l.push({name:w||(A?s++:""),pattern:w&&!A?i:A,prefix:g,suffix:b,modifier:d("MODIFIER")||""})}else u("END")}}return l}function oe(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,r=void 0===n?function(e){return e}:n,i=t.validate,l=void 0===i||i,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var i=e[n];if("string"!=typeof i){var o=t?t[i.name]:void 0,c="?"===i.modifier||"*"===i.modifier,d="*"===i.modifier||"+"===i.modifier;if(Array.isArray(o)){if(!d)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(0===o.length){if(c)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var u=0;u<o.length;u++){var h=r(o[u],i);if(l&&!s[n].test(h))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(h,'"'));a+=i.prefix+h+i.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!c){var f=d?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(f))}}else{h=r(String(o),i);if(l&&!s[n].test(h))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(h,'"'));a+=i.prefix+h+i.suffix}}else a+=i}return a}}(se(e,t),t)}const ce={key:0,class:"no-redirect"},de=["onClick"];var ue=t(a({__name:"index",setup(e){const t=n(),a=g(),r=v({breadcrumbs:[],getBreadcrumb:()=>{const e=t.matched.filter((e=>e.meta&&e.meta.title));r.breadcrumbs=e.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},handleLink(e){const{redirect:n,path:r}=e;n?a.push(n).catch((e=>{console.warn(e)})):a.push((e=>{const{params:a}=t;return oe(e)(a)})(r)).catch((e=>{console.warn(e)}))}});return w((()=>t.path),(e=>{e.startsWith("/redirect/")||r.getBreadcrumb()})),A((()=>{r.getBreadcrumb()})),(e,t)=>{const a=i("el-breadcrumb-item"),n=i("el-breadcrumb");return l(),u(n,{class:"app-breadcrumb"},{default:c((()=>[o(x,{name:"breadcrumb"},{default:c((()=>[(l(!0),s(k,null,b(r.breadcrumbs,((e,t)=>(l(),u(a,{key:e.path},{default:c((()=>["noRedirect"===e.redirect||t===r.breadcrumbs.length-1?(l(),s("span",ce,C(e.meta.title),1)):(l(),s("a",{key:1,onClick:y((t=>r.handleLink(e)),["prevent"])},C(e.meta.title),9,de))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-08046a78"]]);var he=t(a({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=()=>{t("toggle-click")};return(t,n)=>{const r=i("el-icon");return l(),s("div",{onClick:a},[o(r,{size:20,class:"icon"},{default:c((()=>[e.isActive?(l(),u(f(E),{key:0})):(l(),u(f(S),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-185d6f6c"]]);const fe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],me=(()=>{if("undefined"==typeof document)return!1;const e=fe[0],t={};for(const a of fe){if((null==a?void 0:a[1])in document){for(const[n,r]of a.entries())t[e[n]]=r;return t}}return!1})(),pe={change:me.fullscreenchange,error:me.fullscreenerror};let ge={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const r=()=>{ge.off("change",r),a()};ge.on("change",r);const i=e[me.requestFullscreen](t);i instanceof Promise&&i.then(r).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!ge.isFullscreen)return void e();const a=()=>{ge.off("change",a),e()};ge.on("change",a);const n=document[me.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>ge.isFullscreen?ge.exit():ge.request(e,t),onchange(e){ge.on("change",e)},onerror(e){ge.on("error",e)},on(e,t){const a=pe[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=pe[e];a&&document.removeEventListener(a,t,!1)},raw:me};Object.defineProperties(ge,{isFullscreen:{get:()=>Boolean(document[me.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[me.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[me.fullscreenEnabled])}}),me||(ge={isEnabled:!1});var ve=ge;const we=a({__name:"index",setup(e){const t=()=>{ve.isEnabled?ve.toggle():V.warning("您的浏览器无法工作")};return(e,a)=>{const n=i("el-icon"),r=i("el-tooltip");return l(),s("div",{onClick:t},[o(r,{effect:"dark",content:"全屏",placement:"bottom"},{default:c((()=>[o(n,{size:20},{default:c((()=>[o(f(T))])),_:1})])),_:1})])}}});const Ae=e=>(O("data-v-3d55ac55"),e=e(),M(),e),be={class:"navbar"},Ce={class:"right-menu"},ye=R("还只是年轻"),ke=Ae((()=>D("span",{style:{display:"block"}},"退出登录",-1)));var xe=t(a({__name:"index",setup(e){const t=g(),a=B(),n=re(),d=L(),h=r((()=>a.sidebar)),p=r((()=>n.showThemeSwitch)),w=r((()=>n.showScreenfull)),A=v({toggleSideBar:()=>{a.toggleSidebar(!1)},logout:()=>{d.logout(),t.push("/login").catch((e=>{console.warn(e)}))}});return(e,t)=>{const a=i("el-avatar"),n=i("el-dropdown-item"),r=i("el-dropdown-menu"),d=i("el-dropdown");return l(),s("div",be,[o(he,{"is-active":f(h).opened,class:"hamburger",onToggleClick:A.toggleSideBar},null,8,["is-active","onToggleClick"]),o(ue,{class:"breadcrumb"}),D("div",Ce,[f(w)?(l(),u(we,{key:0,class:"right-menu-item"})):m("",!0),f(p)?(l(),u(G,{key:1,class:"right-menu-item"})):m("",!0),o(d,{class:"right-menu-item"},{dropdown:c((()=>[o(r,null,{default:c((()=>[D("a",null,[o(n,null,{default:c((()=>[ye])),_:1})]),o(n,{divided:"",onClick:A.logout},{default:c((()=>[ke])),_:1},8,["onClick"])])),_:1})])),default:c((()=>[o(a,{icon:f(F),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-3d55ac55"]]);const Ee=e=>(O("data-v-7fa4ebc8"),e=e(),M(),e),Se={class:"drawer-container"},Te=Ee((()=>D("h3",{class:"drawer-title"},"系统布局配置",-1))),Ve={class:"drawer-item"},Be=Ee((()=>D("span",null,"显示标签栏",-1))),Le={class:"drawer-item"},De=Ee((()=>D("span",null,"显示侧边栏 Logo",-1))),Fe={class:"drawer-item"},Re=Ee((()=>D("span",null,"固定 Header",-1))),Oe={class:"drawer-item"},Me=Ee((()=>D("span",null,"显示切换主题按钮",-1))),Ie={class:"drawer-item"},Ne=Ee((()=>D("span",null,"显示全屏按钮",-1)));var Pe=t(a({__name:"index",setup(e){const t=re(),a=v({fixedHeader:t.fixedHeader,showTagsView:t.showTagsView,showSidebarLogo:t.showSidebarLogo,showThemeSwitch:t.showThemeSwitch,showScreenfull:t.showScreenfull});return w((()=>a.fixedHeader),(e=>{t.changeSetting({key:"fixedHeader",value:e})})),w((()=>a.showTagsView),(e=>{t.changeSetting({key:"showTagsView",value:e})})),w((()=>a.showSidebarLogo),(e=>{t.changeSetting({key:"showSidebarLogo",value:e})})),w((()=>a.showThemeSwitch),(e=>{t.changeSetting({key:"showThemeSwitch",value:e})})),w((()=>a.showScreenfull),(e=>{t.changeSetting({key:"showScreenfull",value:e})})),(e,t)=>{const n=i("el-switch");return l(),s("div",Se,[D("div",null,[Te,D("div",Ve,[Be,o(n,{modelValue:a.showTagsView,"onUpdate:modelValue":t[0]||(t[0]=e=>a.showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),D("div",Le,[De,o(n,{modelValue:a.showSidebarLogo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),D("div",Fe,[Re,o(n,{modelValue:a.fixedHeader,"onUpdate:modelValue":t[2]||(t[2]=e=>a.fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),D("div",Oe,[Me,o(n,{modelValue:a.showThemeSwitch,"onUpdate:modelValue":t[3]||(t[3]=e=>a.showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),D("div",Ie,[Ne,o(n,{modelValue:a.showScreenfull,"onUpdate:modelValue":t[4]||(t[4]=e=>a.showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-7fa4ebc8"]]);const ze=e=>/^(https?:|mailto:|tel:)/.test(e);function Ye(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function Qe(e,t){for(var a,n="",r=0,i=-1,l=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(i===s-1||1===l);else if(i!==s-1&&2===l){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var o=n.lastIndexOf("/");if(o!==n.length-1){-1===o?(n="",r=0):r=(n=n.slice(0,o)).length-1-n.lastIndexOf("/"),i=s,l=0;continue}}else if(2===n.length||1===n.length){n="",r=0,i=s,l=0;continue}t&&(n.length>0?n+="/..":n="..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,l=0}else 46===a&&-1!==l?++l:l=-1}return n}var _e={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var r;n>=0?r=arguments[n]:(void 0===e&&(e=process.cwd()),r=e),Ye(r),0!==r.length&&(t=r+"/"+t,a=47===r.charCodeAt(0))}return t=Qe(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(Ye(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=Qe(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Ye(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Ye(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":_e.normalize(e)},relative:function(e,t){if(Ye(e),Ye(t),e===t)return"";if((e=_e.resolve(e))===(t=_e.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,r=n-a,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var l=t.length-i,s=r<l?r:l,o=-1,c=0;c<=s;++c){if(c===s){if(l>s){if(47===t.charCodeAt(i+c))return t.slice(i+c+1);if(0===c)return t.slice(i+c)}else r>s&&(47===e.charCodeAt(a+c)?o=c:0===c&&(o=0));break}var d=e.charCodeAt(a+c);if(d!==t.charCodeAt(i+c))break;47===d&&(o=c)}var u="";for(c=a+o+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===u.length?u+="..":u+="/..");return u.length>0?u+t.slice(i+o):(i+=o,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(Ye(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!r){n=i;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');Ye(e);var a,n=0,r=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var l=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47===o){if(!i){n=a+1;break}}else-1===s&&(i=!1,s=a+1),l>=0&&(o===t.charCodeAt(l)?-1==--l&&(r=a):(l=-1,r=s))}return n===r?r=s:-1===r&&(r=e.length),e.slice(n,r)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!i){n=a+1;break}}else-1===r&&(i=!1,r=a+1);return-1===r?"":e.slice(n,r)},extname:function(e){Ye(e);for(var t=-1,a=0,n=-1,r=!0,i=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47!==s)-1===n&&(r=!1,n=l+1),46===s?-1===t?t=l:1!==i&&(i=1):-1!==t&&(i=-1);else if(!r){a=l+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){Ye(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),r=47===n;r?(t.root="/",a=1):a=0;for(var i=-1,l=0,s=-1,o=!0,c=e.length-1,d=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===s&&(o=!1,s=c+1),46===n?-1===i?i=c:1!==d&&(d=1):-1!==i&&(d=-1);else if(!o){l=c+1;break}return-1===i||-1===s||0===d||1===d&&i===s-1&&i===l+1?-1!==s&&(t.base=t.name=0===l&&r?e.slice(1,s):e.slice(l,s)):(0===l&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(l,i),t.base=e.slice(l,s)),t.ext=e.slice(i,s)),l>0?t.dir=e.slice(0,l-1):r&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};_e.posix=_e;var je=_e;const qe=["href"],He=a({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e,a=g(),n=()=>{a.push(t.to).catch((e=>{console.warn(e)}))};return(t,a)=>f(ze)(e.to)?(l(),s("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[I(t.$slots,"default")],8,qe)):(l(),s("div",{key:1,onClick:n},[I(t.$slots,"default")]))}});const Ue={key:1};var Je=t(a({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,required:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,required:!0}},setup(e){const t=e,a=r((()=>!(!t.item.meta||!t.item.meta.alwaysShow))),n=r((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),d=r((()=>{if(n.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),h=e=>ze(e)?e:ze(t.basePath)?t.basePath:je.resolve(t.basePath,e);return(t,n)=>{const r=i("svg-icon"),p=i("el-menu-item"),g=i("sidebar-item",!0),v=i("el-sub-menu");return e.item.meta&&e.item.meta.hidden?m("",!0):(l(),s("div",{key:0,class:P({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[f(a)||!f(d)||f(d).children?(l(),u(v,{key:1,index:h(e.item.path),"popper-append-to-body":""},{title:c((()=>[e.item.meta&&e.item.meta.icon?(l(),u(r,{key:0,name:e.item.meta.icon},null,8,["name"])):m("",!0),e.item.meta&&e.item.meta.title?(l(),s("span",Ue,C(e.item.meta.title),1)):m("",!0)])),default:c((()=>[e.item.children?(l(!0),s(k,{key:0},b(e.item.children,(t=>(l(),u(g,{key:t.path,item:t,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":h(t.path)},null,8,["item","is-collapse","base-path"])))),128)):m("",!0)])),_:1},8,["index"])):(l(),s(k,{key:0},[f(d).meta?(l(),u(He,{key:0,to:h(f(d).path)},{default:c((()=>[o(p,{index:h(f(d).path)},N({default:c((()=>[f(d).meta.icon?(l(),u(r,{key:0,name:f(d).meta.icon},null,8,["name"])):m("",!0)])),_:2},[f(d).meta.title?{name:"title",fn:c((()=>[R(C(f(d).meta.title),1)]))}:void 0]),1032,["index"])])),_:1},8,["to"])):m("",!0)],64))],2))}}}),[["__scopeId","data-v-c9234b78"]]);const Xe=e=>(O("data-v-2e9b9e63"),e=e(),M(),e),Ke=Xe((()=>D("img",{src:"data:image/png;base64,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",class:"sidebar-logo"},null,-1))),We=Xe((()=>D("img",{src:"./static/logo-text-1.0f451132.png",class:"sidebar-logo-text"},null,-1)));var Ge=t(a({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup:e=>(t,a)=>{const n=i("router-link");return l(),s("div",{class:P(["sidebar-logo-container",{collapse:e.collapse}])},[o(d,{name:"sidebarLogoFade"},{default:c((()=>[e.collapse?(l(),u(n,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:c((()=>[Ke])),_:1})):(l(),u(n,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:c((()=>[We])),_:1}))])),_:1})],2)}}),[["__scopeId","data-v-2e9b9e63"]]);const Ze=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t};var $e=t(a({__name:"index",setup(e){const t=Ze("--v3-sidebar-menu-bg-color"),a=Ze("--v3-sidebar-menu-text-color"),d=Ze("--v3-sidebar-menu-active-text-color"),h=n(),p=r((()=>B().sidebar)),g=r((()=>z().routes)),v=r((()=>re().showSidebarLogo)),w=r((()=>{const{meta:e,path:t}=h;return null===e&&void 0===e||!e.activeMenu?t:e.activeMenu})),A=r((()=>!p.value.opened));return(e,n)=>{const r=i("el-menu"),h=i("el-scrollbar");return l(),s("div",{class:P({"has-logo":f(v)})},[f(v)?(l(),u(Ge,{key:0,collapse:f(A)},null,8,["collapse"])):m("",!0),o(h,{"wrap-class":"scrollbar-wrapper"},{default:c((()=>[o(r,{collapse:f(A),"unique-opened":!0,"default-active":f(w),"background-color":f(t),"text-color":f(a),"active-text-color":f(d),mode:"vertical"},{default:c((()=>[(l(!0),s(k,null,b(f(g),(e=>(l(),u(Je,{key:e.path,item:e,"base-path":e.path,"is-collapse":f(A)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["collapse","default-active","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-45ab100c"]]);const et=e({id:"tags-view",state:()=>({visitedViews:[]}),actions:{addVisitedView(e){var t;this.visitedViews.some((t=>t.path===e.path))||this.visitedViews.push(Object.assign({},e,{title:(null==(t=e.meta)?void 0:t.title)||"no-name"}))},delVisitedView(e){for(const[t,a]of this.visitedViews.entries())if(a.path===e.path){this.visitedViews.splice(t,1);break}},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter((t=>{var a;return(null==(a=t.meta)?void 0:a.affix)||t.path===e.path}))},delAllVisitedViews(){const e=this.visitedViews.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));this.visitedViews=e},updateVisitedView(e){for(let t of this.visitedViews)if(t.path===e.path){t=Object.assign(t,e);break}}}});var tt=t({},[["render",function(e,t){const a=i("el-scrollbar");return l(),u(a,{vertical:!1,class:"scroll-container"},{default:c((()=>[I(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-2924169c"]]);const at={class:"tags-view-container"};var nt=t(a({__name:"index",setup(e){const t=H(),a=g(),d=n(),h=et(),p=z(),x=(e,t)=>{const n=e.slice(-1)[0];void 0!==n&&void 0!==n.fullPath?a.push(n.fullPath).catch((e=>{console.warn(e)})):"Dashboard"===t.name?a.push({path:"/redirect"+t.fullPath}).catch((e=>{console.warn(e)})):a.push("/").catch((e=>{console.warn(e)}))},E=v({visible:!1,top:0,left:0,selectedTag:{},affixTags:[],isActive:e=>e.path===d.path,isAffix:e=>e.meta&&e.meta.affix,refreshSelectedTag:e=>{const{fullPath:t}=e;Y((()=>{a.replace({path:"/redirect"+t}).catch((e=>{console.warn(e)}))}))},closeSelectedTag:e=>{h.delVisitedView(e),E.isActive(e)&&x(h.visitedViews,e)},closeOthersTags:()=>{E.selectedTag.fullPath!==d.path&&void 0!==E.selectedTag.fullPath&&a.push(E.selectedTag.fullPath).catch((e=>{console.warn(e)})),h.delOthersVisitedViews(E.selectedTag)},closeAllTags:e=>{h.delAllVisitedViews(),E.affixTags.some((e=>e.path===d.path))||x(h.visitedViews,e)},openMenu:(e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,r=t.proxy.$el.offsetWidth-105,i=a.clientX-n+15;E.left=i>r?r:i,E.top=a.clientY,E.visible=!0,E.selectedTag=e},closeMenu:()=>{E.visible=!1}}),S=r((()=>h.visitedViews)),T=r((()=>p.routes)),V=(e,t="/")=>{let a=[];return e.forEach((e=>{if(e.meta&&e.meta.affix){const n=je.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=V(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},B=()=>(d.name&&h.addVisitedView(d),!1);return w((()=>d.name),(()=>{B(),(()=>{const e=null==t?void 0:t.refs.tag;if(null!=e&&Array.isArray(e))for(const t of e)t.to.path===d.path&&t.to.fullPath!==d.fullPath&&h.updateVisitedView(d)})()})),w((()=>E.visible),(e=>{e?document.body.addEventListener("click",E.closeMenu):document.body.removeEventListener("click",E.closeMenu)})),A((()=>{(()=>{E.affixTags=V(T.value);for(const e of E.affixTags)e.name&&h.addVisitedView(e)})(),B()})),(e,t)=>{const a=i("el-icon"),n=i("router-link");return l(),s("div",at,[o(tt,{class:"tags-view-wrapper"},{default:c((()=>[(l(!0),s(k,null,b(f(S),(e=>(l(),u(n,{ref_for:!0,ref:"tag",key:e.path,class:P([E.isActive(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query,fullPath:e.fullPath},onMouseup:y((t=>E.isAffix(e)?"":E.closeSelectedTag(e)),["middle"]),onContextmenu:y((t=>E.openMenu(e,t)),["prevent"])},{default:c((()=>{var t;return[R(C(null==(t=e.meta)?void 0:t.title)+" ",1),E.isAffix(e)?m("",!0):(l(),u(a,{key:0,size:12,onClick:y((t=>E.closeSelectedTag(e)),["prevent","stop"])},{default:c((()=>[o(f(Q))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),_(D("ul",{style:q({left:E.left+"px",top:E.top+"px"}),class:"contextmenu"},[D("li",{onClick:t[0]||(t[0]=e=>E.refreshSelectedTag(E.selectedTag))},"刷新"),E.isAffix(E.selectedTag)?m("",!0):(l(),s("li",{key:0,onClick:t[1]||(t[1]=e=>E.closeSelectedTag(E.selectedTag))},"关闭")),D("li",{onClick:t[2]||(t[2]=(...e)=>E.closeOthersTags&&E.closeOthersTags(...e))},"关闭其它"),D("li",{onClick:t[3]||(t[3]=e=>E.closeAllTags(E.selectedTag))},"关闭所有")],4),[[j,E.visible]])])}}}),[["__scopeId","data-v-6835bb43"]]);var rt=t(a({__name:"index",props:{buttonTop:{type:Number,default:250}},setup(e){const t=U(!1);return(e,a)=>{const n=i("el-icon"),r=i("el-drawer");return l(),s(k,null,[D("div",{class:"handle-button",onClick:a[0]||(a[0]=e=>t.value=!0)},[o(n,{size:24},{default:c((()=>[o(f(J))])),_:1})]),o(r,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),size:"300px","with-header":!1},{default:c((()=>[I(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-57dcb19d"]]);var it=t(a({__name:"index",setup(e){const t=B(),a=re(),{sidebar:i,device:d,addEventListenerOnResize:h,resizeMounted:p,removeEventListenerResize:g,watchRouter:b}=(()=>{const e=n(),t=B(),a=r((()=>t.device)),i=r((()=>t.sidebar)),l=w((()=>e.name),(()=>{t.device===X.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),s=()=>document.body.getBoundingClientRect().width-1<992,o=()=>{document.hidden||(t.toggleDevice(s()?X.Mobile:X.Desktop),s()&&t.closeSidebar(!0))};return{device:a,sidebar:i,resizeMounted:()=>{s()&&(t.toggleDevice(X.Mobile),t.closeSidebar(!0))},addEventListenerOnResize:()=>{window.addEventListener("resize",o)},removeEventListenerResize:()=>{window.removeEventListener("resize",o)},watchRouter:l}})(),C=v({handleClickOutside:()=>{t.closeSidebar(!1)}}),y=r((()=>({hideSidebar:!i.value.opened,openSidebar:i.value.opened,withoutAnimation:i.value.withoutAnimation,mobile:d.value===X.Mobile}))),k=r((()=>a.showSettings)),x=r((()=>a.showTagsView)),E=r((()=>a.fixedHeader));return b(),A((()=>{h()})),K((()=>{p()})),W((()=>{g()})),(e,t)=>(l(),s("div",{class:P([f(y),"app-wrapper"])},[f(y).mobile&&f(i).opened?(l(),s("div",{key:0,class:"drawer-bg",onClick:t[0]||(t[0]=(...e)=>C.handleClickOutside&&C.handleClickOutside(...e))})):m("",!0),o(f($e),{class:"sidebar-container"}),D("div",{class:P([{hasTagsView:f(x)},"main-container"])},[D("div",{class:P({"fixed-header":f(E)})},[o(f(xe)),f(x)?(l(),u(f(nt),{key:0})):m("",!0)],2),o(f(le)),f(k)?(l(),u(f(rt),{key:0},{default:c((()=>[o(f(Pe))])),_:1})):m("",!0)],2)],2))}}),[["__scopeId","data-v-68984f60"]]);export{it as default};