(this.webpackJsonp0waste=this.webpackJsonp0waste||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),o=(n(12),n(7)),s=n(4),j=(n(13),n(0));var u=function(){var e=new Date,t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(e.toString()),u=Object(s.a)(i,2),l=u[0],b=u[1],d=Object(a.useState)([{name:"apple",expirationDate:new Date("2021-05-19")},{name:"potato",expirationDate:new Date("2021-05-19")},{name:"bananas",expirationDate:new Date("2021-05-19")}]),h=Object(s.a)(d,2),p=h[0],x=h[1];function O(t){var n=Math.round(Math.abs((+t-+e)/864e5));return"".concat(n," days")}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x([].concat(Object(o.a)(p),[{name:c,expirationDate:new Date(l)}]))},children:[Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){return r(e.currentTarget.value)}}),Object(j.jsx)("input",{type:"date",value:l,onChange:function(e){return b(e.currentTarget.value)}}),Object(j.jsx)("input",{type:"submit",value:"Add"})]}),Object(j.jsxs)("table",{className:"pure-table pure-table-horizontal",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Item"}),Object(j.jsx)("th",{children:"Expires in"}),Object(j.jsx)("th",{children:"Expiration date"})]})}),Object(j.jsx)("tbody",{children:p.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:O(e.expirationDate)}),Object(j.jsx)("td",{children:e.expirationDate.toLocaleDateString()})]})}))})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.f7d13887.chunk.js.map