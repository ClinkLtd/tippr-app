(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{3633:function(t,e,n){"use strict";var r,a=n(7294);function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.Z=function(t){return a.createElement("svg",s({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r||(r=a.createElement("path",{d:"M9.805 3.529a.667.667 0 0 0-.943.942l2.862 2.862H2.667a.667.667 0 1 0 0 1.334h9.057l-2.862 2.861a.667.667 0 0 0 .943.943l4-4a.667.667 0 0 0 0-.942l-4-4Z",fill:"#fff"})))}},4184:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&t.push(o)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&t.push(i)}}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0!==(n=(function(){return a}).apply(e,[]))&&(t.exports=n)}()},43:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/verify-account",function(){return n(2668)}])},8426:function(t,e,n){"use strict";var r=n(5893),a=n(4184),s=n.n(a);n(7294);var o=n(2845),i=n.n(o);let c=t=>{let{style:e,square:n,state:a,Icon:o,text:c,size:u="sm",handleClick:h}=t,_=s()(e,{[i().btn]:!0,[i().square]:!0===n,[i().primary_state]:"primary"===a,[i().secondary_state]:"secondary"===a,["".concat(i().auth," primary_line_break")]:"auth"===a,[i().icon_btn]:o});return(0,r.jsxs)("button",{className:_,onClick:h,children:[c," ",o&&(0,r.jsx)(o,{})]})};e.Z=c},2668:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r,a,s=n(5893),o=n(7294),i=n(2011),c=n.n(i),u=n(8426),h=n(1163);function _(){return(_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var l=function(t){return o.createElement("svg",_({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r||(r=o.createElement("path",{opacity:.4,d:"M22 11V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 15 4.08 15 5.2 15H11m1-5h.005M17 10h.005M7 10h.005m5.245 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm5 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm-10 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z",stroke:"#F95C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=o.createElement("path",{d:"M19.25 17v-1.75a1.75 1.75 0 1 0-3.5 0V17m-.15 4h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 17 19.96 17 19.4 17h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 17.76 14 18.04 14 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C14.76 21 15.04 21 15.6 21Z",stroke:"#F95C00",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},f=n(3633);function p(){let t=(0,h.useRouter)();return(0,s.jsxs)("div",{className:c().auth,children:[(0,s.jsx)(l,{}),(0,s.jsx)("h1",{className:"text_header mt-2.5",children:"Verify account ownership"}),(0,s.jsx)("p",{className:"text_body",children:"Enter the 6-digit code sent to your BVN linked phone number 080********123"}),(0,s.jsxs)("div",{className:c().footer,children:[(0,s.jsx)(u.Z,{handleClick:()=>t.push("/auth/verification-sucess"),state:"primary",text:"Verify",Icon:f.Z}),(0,s.jsx)(u.Z,{state:"secondary",text:"Go Back"})]})]})}},2845:function(t){t.exports={btn:"buttons_btn__v3zkc",auth:"buttons_auth__HZf3C",primary_state:"buttons_primary_state__Gj8CY",secondary_state:"buttons_secondary_state__Mt5X_",icon_btn:"buttons_icon_btn__dHRbq",square:"buttons_square__Yae5f"}},2011:function(t){t.exports={auth:"auth_auth__Yeh_p",footer:"auth_footer__XZ_9u",list:"auth_list__ZjWv5",verify_success_wrapper:"auth_verify_success_wrapper__LDY4S"}},1163:function(t,e,n){t.exports=n(880)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=43)}),_N_E=t.O()}]);