(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[43],{373:function(e,t,a){},840:function(e,t,a){"use strict";a.r(t);var c=a(124),s=a(35),n=a(1),r=a.n(n),d=a(2),i=a(97),l=a(28),o=(a(373),a(125)),b=a.n(o),j=a(53),m=a(45),u=a(33),h=(a(183),a(3));t.default=function(){var e=Object(d.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(d.useState)([]),O=Object(s.a)(o,2),x=(O[0],O[1]),p=Object(d.useState)(1),f=Object(s.a)(p,2),v=f[0],N=(f[1],Object(d.useState)(0)),w=Object(s.a)(N,2),g=(w[0],w[1]),k=Object(d.useState)(""),y=Object(s.a)(k,2),S=y[0],A=(y[1],function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat("https://api.elcateo.com","/farms?keyword=").concat(t,"&page=").concat(a),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var t=e.data.data.dbData;n(t),x(t.files),g(e.data.data.dbCount),0===e.data.data.dbData&&(A(),alert("No data found."))})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());return Object(d.useEffect)((function(){document.title="".concat("El Cateo Admin"),A(S,v)}),[S,v]),Object(h.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(h.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(h.jsx)("div",{className:"content-header",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row mb-2",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("h1",{className:"m-0",children:["Farms",Object(h.jsx)(l.b,{type:"button",className:"btn btn-sm btn-app ms-3",to:"farms/create",children:"Add New"})]})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)(i.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Farms",link:""}]})})]})})}),Object(h.jsx)("section",{className:"content",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"row",children:a.map((function(e){return Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"card",children:[function(){var t;return(null===e||void 0===e||null===(t=e.files)||void 0===t?void 0:t.length)>0?Object(h.jsx)("div",{style:{width:"25%"},children:e.files.map((function(e,t){return Object(h.jsx)("img",{src:j.b.farms+"/"+e,className:"card-img-top"},t)}))}):Object(h.jsx)("p",{children:"Image not Available"})}(),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.name}),null!==e&&void 0!==e&&e.address?Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"card-text",children:["Address : ",e.address]})}):Object(h.jsx)("p",{className:"card-text",children:"Address : Not registered"}),Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("button",{className:"btn btn-outline-app dropdown-toggle cursor",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"\u22ee"}),Object(h.jsxs)("ul",{className:"dropdown-menu",children:[Object(h.jsx)("li",{children:Object(h.jsxs)(l.b,{className:"dropdown-item",to:"/farms/manage",children:[Object(h.jsx)(m.a,{icon:u.s})," "," Manage"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(l.b,{className:"dropdown-item",to:"/farms/".concat(e.id,"/edit"),children:[Object(h.jsx)(m.a,{icon:u.f})," ","Edit"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(l.b,{className:"dropdown-item",to:"",children:[Object(h.jsx)(m.a,{icon:u.o})," ","Status"]})})]})]})]})]})},e.id)}))})]})})]})})}},97:function(e,t,a){"use strict";a(2),a(98);var c=a(28),s=a(3);function n(e){var t=e.breadCrumbs;return Object(s.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(s.jsx)("ol",{className:"breadcrumb",children:t.map((function(e,t){var a=e.link&&""!==e.link;return Object(s.jsx)("li",{className:"breadcrumb-item ".concat(a?"active":""),children:a?Object(s.jsx)(c.b,{to:e.link,children:e.name}):e.name},t)}))})})}n.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},t.a=n},98:function(e,t,a){}}]);
//# sourceMappingURL=43.d849b9cc.chunk.js.map