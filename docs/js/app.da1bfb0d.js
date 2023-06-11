(function(n,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["json2querystring-app"]=e():n["json2querystring-app"]=e()})(self,(()=>(()=>{"use strict";var n={6278:(n,e,t)=>{t.r(e),t.d(e,{bootstrap:()=>Y,mount:()=>$,unmount:()=>L});var r=t(6583),u=t(1441),a=t(4748),o=t(6409),i=(0,a.WB)();i.use(o.Z);const l=i;var s=t(6808),c=t(3839),f=t(9511),v=t(2443),d=t(8239),m=t.n(d),p=t(754),_=t(2973),y=t(9669),h=t(487),w=t.n(h),g=t(9008),S=t.n(g),U=t(3456),b=t(476),j=t(9560),k=t(1876),W={class:"m-transfer"},x={class:"m-transfer__container"},O={class:"m-transfer__container m-transfer__container--mid"},q=(0,s._)("div",null,null,-1),C=(0,s._)("div",null,null,-1),T=(0,s._)("div",null,null,-1),I={class:"m-transfer__container"};const E=(0,s.aZ)({__name:"index",props:{value:null},emits:["input"],setup:function(n,e){var t=e.emit,r=n,u=["none","index","bracket","comma"],a="none",o=15,i=(0,c.iH)(""),l=(0,c.iH)(""),v=(0,c.iH)(a),d=(0,s.Fl)((function(){var n;return(null===(n=r.value)||void 0===n?void 0:n.json)||i.value})),m=(0,s.Fl)((function(){var n;return(null===(n=r.value)||void 0===n?void 0:n.qs)||l.value})),_=(0,s.Fl)((function(){var n,e=(null===(n=r.value)||void 0===n?void 0:n.type)||v.value;return u.includes(e)?e:a})),h=function(){i.value="",t("input",{json:"",qs:m.value,type:_.value})},g=function(){l.value="",t("input",{json:d.value,qs:"",type:_.value})},E=function(){l.value="",i.value="",t("input",{json:"",qs:"",type:u[1]})},F=function(){i.value=w().format(i.value,{parser:"json",plugins:[S()]}),t("input",{json:i.value,qs:m.value,type:_.value})},P=function(){F(),l.value=k.Z.stringify(JSON.parse(d.value),{arrayFormat:_.value,encode:!1}),t("input",{json:d.value,qs:l.value,type:_.value})},J=function(){var n=m.value,e=/^(https?:\/\/|\/\/)(.*)\?(.*)$/.exec(n);e&&(n=e[3]);var r={arrayFormat:_.value,decode:!0};i.value=JSON.stringify(k.Z.parse(n,r)),F(),t("input",{json:i.value,qs:n,type:_.value})},Z=function(n){l.value=n,t("input",{json:d.value,qs:l.value,type:_.value})},z=function(n){i.value=n,t("input",{json:i.value,qs:m.value,type:_.value})},A=function(n){v.value=n,t("input",{json:d.value,qs:m.value,type:v.value})},B=function(n){try{n()}catch(e){U.z8.error({message:(null===e||void 0===e?void 0:e.message)||"There is something wrong!"})}};return function(n,e){return(0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",x,[(0,s.Wm)((0,c.SU)(b.EZ),{class:"m-transfer__textarea",type:"textarea",placeholder:"Input query string.","model-value":(0,c.SU)(m),rows:o,onInput:Z},null,8,["model-value"]),(0,s.Wm)((0,c.SU)(p.MO),null,{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(p.mi),{type:"primary",size:"small",onClick:g},{default:(0,s.w5)((function(){return[(0,s.Uk)(" Clear ")]})),_:1})]})),_:1})]),(0,s._)("div",O,[(0,s.Wm)((0,c.SU)(j.km),{class:"m-transfer__format-options",placeholder:"arrayFormat","model-value":(0,c.SU)(_),onChange:A},{default:(0,s.w5)((function(){return[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(u,(function(n){return(0,s.Wm)((0,c.SU)(j.BT),{key:n,value:n},{default:(0,s.w5)((function(){return[(0,s.Uk)((0,f.zw)(n),1)]})),_:2},1032,["value"])})),64))]})),_:1},8,["model-value"]),(0,s.Wm)((0,c.SU)(p.mi),{class:"m-transfer__format-button",type:"primary",onClick:e[0]||(e[0]=function(n){return B(P)})},{default:(0,s.w5)((function(){return[(0,s.Uk)(" << To URLEncode ")]})),_:1}),q,(0,s.Wm)((0,c.SU)(p.mi),{class:"m-transfer__format-button",type:"primary",onClick:e[1]||(e[1]=function(n){return B(J)})},{default:(0,s.w5)((function(){return[(0,s.Uk)(" >> To JSON ")]})),_:1}),C,(0,s.Wm)((0,c.SU)(y.i1),{width:"300",title:"Are you sure to reset?",onConfirm:E},{reference:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(p.mi),{class:"m-transfer__format-button",type:"warning"},{default:(0,s.w5)((function(){return[(0,s.Uk)(" Reset ")]})),_:1})]})),_:1}),T,(0,s.WI)(n.$slots,"operator")]),(0,s._)("div",I,[(0,s.Wm)((0,c.SU)(b.EZ),{class:"m-transfer__textarea",type:"textarea",rows:o,placeholder:"Input JSON string.","model-value":(0,c.SU)(d),onInput:e[2]||(e[2]=function(n){return z(n)})},null,8,["model-value"]),(0,s.Wm)((0,c.SU)(p.MO),null,{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(p.mi),{type:"primary",size:"small",onClick:e[3]||(e[3]=function(n){return B(F)})},{default:(0,s.w5)((function(){return[(0,s.Uk)(" Format ")]})),_:1}),(0,s.Wm)((0,c.SU)(p.mi),{type:"primary",size:"small",onClick:h},{default:(0,s.w5)((function(){return[(0,s.Uk)(" Clear ")]})),_:1})]})),_:1})])])}}}),F=E,P=F;var J=t(300),Z=(t(9733),t(6572),t(1642));const z=(0,a.Q_)("list",(function(){var n=(0,c.iH)([{id:+new Date,name:""}]),e=function(e){return(0,r.mG)(void 0,void 0,void 0,(function(){var t,u,a,o,i,l;return(0,r.Jh)(this,(function(r){switch(r.label){case 0:return[4,(0,Z.Z)(J.T.prompt("Please input the name of new transfer.","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel",inputPlaceholder:"Use timestamp as default."}))];case 1:return t=r.sent(),u=t[0],a=t[1],o=void 0===a?{value:""}:a,u?[2]:(i=n.value.findIndex((function(n){var t=n.id;return t===e})),l={id:+new Date,name:o.value},n.value.splice(i+1,0,l),[2])}}))}))},t=function(e){if(1===n.value.length)return U.z8.warning({message:"At least one exists."});var t=n.value.findIndex((function(n){var t=n.id;return t===e}));n.value.splice(t,1)},u=function(e,t){var r=n.value.findIndex((function(n){var t=n.id;return t===e}));n.value.splice(r,1,t)};return{list:n,edit:u,add:e,remove:t}}),{persist:!0});var A={class:"app-container"},B={class:"transfer-item"},D={class:"transfer-container__title"},H=(0,s._)("div",null,null,-1),N={class:"transfer-container__close-btn",type:"warning"};const M=(0,s.aZ)({__name:"App",setup:function(n){var e=(0,c.iH)(!1),t=z(),r=t.list,u=t.edit,a=t.add,o=t.remove;return function(n,t){return(0,s.wg)(),(0,s.iD)("div",A,[(0,s.Wm)((0,c.SU)(m()),{class:"transfer-container",disabled:!1,"ghost-class":"transfer-container__ghost","item-key":"id",handle:".transfer-container__handle-btn",list:(0,c.SU)(r),onStart:t[0]||(t[0]=function(n){return e.value=!0}),onEnd:t[1]||(t[1]=function(n){return e.value=!1})},{item:(0,s.w5)((function(n){var e=n.element,t=e.name,i=e.id,l=e.value;return[(0,s._)("div",B,[(0,s._)("div",D,"#"+(0,f.zw)(t||i),1),(0,s.Wm)(P,{value:l,onInput:function(n){return(0,c.SU)(u)(i,{id:i,name:t,value:n})}},{operator:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(p.mi),{class:"transfer-container__add-btn",onClick:function(n){return(0,c.SU)(a)(i)}},{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(_.gn),null,{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(v.v37))]})),_:1}),(0,s.Uk)(" Add Behind ")]})),_:2},1032,["onClick"]),H,(0,c.SU)(r).length>1?((0,s.wg)(),(0,s.j4)((0,c.SU)(p.mi),{key:0,class:"transfer-container__handle-btn"},{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(_.gn),null,{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(v.PEF))]})),_:1})]})),_:1})):(0,s.kq)("",!0),(0,c.SU)(r).length-1?((0,s.wg)(),(0,s.j4)((0,c.SU)(y.i1),{key:1,width:"300",title:"Are you sure to delete ".concat(t||i,"?"),onConfirm:function(n){return(0,c.SU)(o)(i)}},{reference:(0,s.w5)((function(){return[(0,s._)("div",N,[(0,s.Wm)((0,c.SU)(_.gn),null,{default:(0,s.w5)((function(){return[(0,s.Wm)((0,c.SU)(v.x8P))]})),_:1})])]})),_:2},1032,["title","onConfirm"])):(0,s.kq)("",!0)]})),_:2},1032,["value","onInput"])])]})),_:1},8,["list"])])}}}),G=M,K=G;t(4331);var R=function(n,e){void 0===n&&(n=document),void 0===e&&(e="#app");var t=n.querySelector(e);if(!t)throw new Error("Can not find the ".concat(n," element!"));var r=(0,u.ri)(K);return r.use(l),r.mount(t),r};window.__POWERED_BY_QIANKUN__||R();var Q=null;function Y(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return[2]}))}))}function $(n){var e=n.container;return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return Q=R(e),[2]}))}))}function L(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(n){return null===Q||void 0===Q||Q.unmount(),[2]}))}))}}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var a=e[r]={exports:{}};return n[r].call(a.exports,a,a.exports,t),a.exports}t.m=n,(()=>{var n=[];t.O=(e,r,u,a)=>{if(!r){var o=1/0;for(c=0;c<n.length;c++){for(var[r,u,a]=n[c],i=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(t.O).every((n=>t.O[n](r[l])))?r.splice(l--,1):(i=!1,a<o&&(o=a));if(i){n.splice(c--,1);var s=u();void 0!==s&&(e=s)}}return e}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[r,u,a]}})(),(()=>{t.n=n=>{var e=n&&n.__esModule?()=>n["default"]:()=>n;return t.d(e,{a:e}),e}})(),(()=>{t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()})(),(()=>{t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e)})(),(()=>{t.r=n=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}})(),(()=>{var n={143:0};t.O.j=e=>0===n[e];var e=(e,r)=>{var u,a,[o,i,l]=r,s=0;if(o.some((e=>0!==n[e]))){for(u in i)t.o(i,u)&&(t.m[u]=i[u]);if(l)var c=l(t)}for(e&&e(r);s<o.length;s++)a=o[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(c)},r=self["webpackChunkjson2querystring_"]=self["webpackChunkjson2querystring_"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=t.O(void 0,[998],(()=>t(6278)));return r=t.O(r),r})()));
//# sourceMappingURL=app.da1bfb0d.js.map