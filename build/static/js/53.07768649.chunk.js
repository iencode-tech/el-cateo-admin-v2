(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[53],{879:function(e,a,c){"use strict";c.r(a);var s=c(124),t=c(35),n=c(1),r=c.n(n),l=c(2),i=c(97),d=c(53),o=c(3);var m=function(e){var a=e.formData;return e._handleOnChange,e._addNewSoil,e._removeSoil,Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"input1",className:"form-label",children:"Name"}),Object(o.jsx)("span",{id:"input1",className:"form-control",children:a.name})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"input2",className:"form-label",children:"Latitude"}),Object(o.jsx)("span",{id:"input2",className:"form-control",children:a.latitude})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"input3",className:"form-label",children:"Longitude"}),Object(o.jsx)("span",{id:"input3",className:"form-control",children:a.longitude})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"input4",className:"form-label",children:"Status"}),Object(o.jsx)("span",{id:"input4",className:"form-control",children:d.f[parseInt(a.status)]})]}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsx)("div",{className:"card-header border-transparent",children:Object(o.jsx)("h4",{className:"m-0",children:"Soil"})})})})]})},b=c(17),j=c(125),h=c.n(j);a.default=function(){var e=Object(b.i)(),a=Object(l.useState)({latitude:"",longitude:"",name:"",soils:{},status:""}),c=Object(t.a)(a,2),n=c[0],d=c[1],j=function(){var a=Object(s.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.get("".concat("https://api.elcateo.com","/zone/").concat(e.id,"/read"),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var a=e.data.data;console.log(a),d(a)})).catch((function(e){console.log(e.response)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(l.useEffect)((function(){document.title="".concat("El Cateo Admin"),j()}),[]),Object(o.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(o.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(o.jsx)("div",{className:"content-header",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row mb-2",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("h1",{className:"m-0",children:"View zona"})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)(i.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Zonas",link:"/zonas"},{name:"View",link:""}]})})]})})}),Object(o.jsx)("section",{className:"content",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header border-transparent",children:Object(o.jsx)("div",{className:"row",children:"\xa0"})}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)(m,{formData:n})}),Object(o.jsx)("div",{className:"card-footer clearfix"})]})})})})})]})})}},97:function(e,a,c){"use strict";c(2),c(98);var s=c(28),t=c(3);function n(e){var a=e.breadCrumbs;return Object(t.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(t.jsx)("ol",{className:"breadcrumb",children:a.map((function(e,a){var c=e.link&&""!==e.link;return Object(t.jsx)("li",{className:"breadcrumb-item ".concat(c?"active":""),children:c?Object(t.jsx)(s.b,{to:e.link,children:e.name}):e.name},a)}))})})}n.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},a.a=n},98:function(e,a,c){}}]);
//# sourceMappingURL=53.07768649.chunk.js.map