(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[44],{392:function(e,a,c){},842:function(e,a,c){"use strict";c.r(a);var t=c(124),s=c(35),n=c(1),l=c.n(n),r=c(2),i=c(31),d=(c(392),c(53),c(97)),o=c(13),m=c(17),j=c(125),b=c.n(j),h=c(3);a.default=function(){var e=Object(r.useState)({name:"",location:"",area:"",status:""}),a=Object(s.a)(e,2),c=a[0],n=a[1],j=Object(m.i)(),x=(Object(i.c)(o.o),Object(i.b)(),Object(r.useState)(!0)),u=Object(s.a)(x,2),O=(u[0],u[1],function(){var e=Object(t.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://api.elcateo.com","/farm/").concat(j.id,"/read"),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var a=e.data.data;n(a)})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(r.useEffect)((function(){document.title="".concat("El Cateo Admin"),O()}),[]),Object(h.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(h.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(h.jsx)("div",{className:"content-header",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row mb-2",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("h1",{className:"m-0",children:"View Farm"})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)(d.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Farms",link:"/farms"},{name:"View",link:""}]})})]})})}),Object(h.jsx)("section",{className:"content",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header border-transparent",children:Object(h.jsx)("div",{className:"row",children:"\xa0"})}),Object(h.jsx)("form",{encType:"multipart/form-data",children:Object(h.jsx)("div",{className:"card-body",children:Object(h.jsxs)("div",{className:"row mb-3",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-floating",children:[Object(h.jsx)("input",{name:"firstname",type:"text",className:"form-control",id:"floatingInput",placeholder:"name@example.com",value:c.name,readOnly:!0}),Object(h.jsxs)("label",{htmlFor:"floatingInput",children:["Name ",Object(h.jsx)("span",{className:"text-danger",children:"*"})]})]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-floating",children:[Object(h.jsx)("input",{name:"lastname",type:"text",className:"form-control",id:"floatingInput",placeholder:"name@example.com",value:c.location,readOnly:!0}),Object(h.jsxs)("label",{htmlFor:"floatingInput",children:["Location ",Object(h.jsx)("span",{className:"text-danger",children:"*"})]})]})}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"form-floating",children:[Object(h.jsx)("textarea",{name:"address",type:"text",className:"form-control",id:"floatingInput",placeholder:"name@example.com",value:c.area,readOnly:!0}),Object(h.jsxs)("label",{htmlFor:"floatingInput",children:["Area",Object(h.jsx)("span",{className:"text-danger",children:"*"})]})]})]}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"input4",className:"form-label",children:["Status ",Object(h.jsx)("span",{className:"text-danger",children:"*"})]}),Object(h.jsxs)("select",{id:"input4",className:"form-select",name:"subscription",children:[1===c.status&&Object(h.jsx)("option",{children:"Active"}),0===c.status&&Object(h.jsx)("option",{children:"Inactive"})]})]})]})})})]})})})})})]})})}},97:function(e,a,c){"use strict";c(2),c(98);var t=c(28),s=c(3);function n(e){var a=e.breadCrumbs;return Object(s.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(s.jsx)("ol",{className:"breadcrumb",children:a.map((function(e,a){var c=e.link&&""!==e.link;return Object(s.jsx)("li",{className:"breadcrumb-item ".concat(c?"active":""),children:c?Object(s.jsx)(t.b,{to:e.link,children:e.name}):e.name},a)}))})})}n.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},a.a=n},98:function(e,a,c){}}]);
//# sourceMappingURL=44.361b4f22.chunk.js.map