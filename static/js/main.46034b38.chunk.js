(this.webpackJsonp0waste=this.webpackJsonp0waste||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"Item":"\u9805\u76ee","Expires in":"\u3042\u3068","Expiration date":"\u6d88\u8cbb\u671f\u9650"}')},51:function(e,t,a){},52:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),c=a.n(o),r=(a(51),a(44)),s=a(17),u=(a(52),a(32)),l=a(21),d=a(33),j=a(34),p=a(35),b=a(15),m=a.n(b),f=a(36),h=a(96),x=a(3);Object(b.addLocale)("ja",{firstDayOfWeek:1,dayNames:["\u65e5\u66dc\u65e5","\u6708\u66dc\u65e5","\u706b\u66dc\u65e5","\u6c34\u66dc\u65e5","\u6728\u66dc\u65e5","\u91d1\u66dc\u65e5","\u571f\u66dc\u65e5"],dayNamesShort:["\u65e5\u66dc","\u6708\u66dc","\u706b\u66dc","\u6c34\u66dc","\u6728\u66dc","\u91d1\u66dc","\u571f\u66dc"],dayNamesMin:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],monthNames:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],monthNamesShort:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],today:"\u4eca\u65e5",dateFormat:"yy/mm/dd"});var O=function(){var e=new Date,t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(e),m=Object(s.a)(c,2),O=m[0],v=m[1],g=Object(n.useState)([{name:"apple",expirationDate:new Date("2021-05-19")},{name:"potato",expirationDate:new Date("2021-05-19")},{name:"bananas",expirationDate:new Date("2021-05-19")}]),w=Object(s.a)(g,2),D=w[0],y=w[1],N=navigator.languages.find((function(e){return e.startsWith("en")||e.startsWith("ja")})),S=Object(n.useState)(N||"en"),C=Object(s.a)(S,2),E=C[0],I=C[1],L=Object(h.a)(),k=L.t,B=L.i18n;Object(n.useEffect)((function(){Object(b.locale)(E),B.changeLanguage(E)}),[E]);return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f.SelectButton,{className:"p-mb-2 p-d-flex p-jc-end",value:E,options:[{name:"EN",value:"en"},{name:"JP",value:"ja"}],optionLabel:"name",onChange:function(e){return I(e.value)}}),Object(x.jsx)("div",{className:"card p-mb-2",children:Object(x.jsxs)(u.DataTable,{value:D,paginator:!0,rows:10,children:[Object(x.jsx)(l.Column,{field:"name",header:k("Item"),body:function(e){return e.name}}),Object(x.jsx)(l.Column,{field:"expiresIn",header:k("Expires in"),body:function(t){return function(t){var a=Math.round(Math.abs((+t-+e)/864e5));return"".concat(a," days")}(t.expirationDate)}}),Object(x.jsx)(l.Column,{field:"expirationDate",header:k("Expiration date"),body:function(e){return e.expirationDate.toLocaleDateString()}})]})}),Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),y([].concat(Object(r.a)(D),[{name:i,expirationDate:new Date(O)}]))},children:Object(x.jsxs)("div",{className:"p-fluid p-formgrid p-grid",children:[Object(x.jsx)("div",{className:"p-field p-col",children:Object(x.jsx)(d.InputText,{value:i,placeholder:"Item",onChange:function(e){return o(e.currentTarget.value)}})}),Object(x.jsx)("div",{className:"p-field p-col",children:Object(x.jsx)(j.Calendar,{value:O,onChange:function(e){return v(e.value)}})}),Object(x.jsx)("div",{className:"p-field p-col-fixed",style:{width:"100px"},children:Object(x.jsx)(p.Button,{type:"submit",label:"Add"})})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))},g=a(43),w=a(16),D=a(41),y=a(42);m.a.ripple=!0,g.a.use(D.a).use(w.e).init({debug:!0,parseMissingKeyHandler:function(e){return e},resources:{ja:{translation:y}},react:{useSuspense:!1},interpolation:{escapeValue:!1}}),c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v()}},[[95,1,2]]]);
//# sourceMappingURL=main.46034b38.chunk.js.map