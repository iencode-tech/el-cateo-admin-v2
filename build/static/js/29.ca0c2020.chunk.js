(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[29],{102:function(e,t,c){"use strict";c(2),c(104);var a=c(3);t.a=function(e){var t=e.header,c=e.data;return Object(a.jsx)("div",{className:"table-responsive",children:Object(a.jsxs)("table",{className:"table m-0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"text-center",children:"#"}),t.length>0?t.map((function(e,t){return Object(a.jsx)("th",{className:"text-center",children:e},t)})):""]})}),Object(a.jsx)("tbody",{children:0===c.length?Object(a.jsx)("tr",{children:Object(a.jsx)("td",{colSpan:1+t.length,className:"text-center",children:"No Record found"})}):c.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"text-center",children:t+1}),Object.keys(e).map((function(t,c){return Object(a.jsx)("td",{className:"text-center",children:e[t]},c)}))]},t)}))})]})})}},104:function(e,t,c){},118:function(e,t,c){"use strict";c(2),c(119);var a=c(53),n=c(33),s=c(45),r=c(3);function i(e){var t=e.totalCount,c=e.currentPage,i=e.onPageChange;return Object(r.jsx)("nav",{"aria-label":"Page navigation",children:Object(r.jsxs)("ul",{className:"pagination justify-content-end",children:[Object(r.jsx)("li",{className:"page-item ".concat(1===c&&"disabled"),children:Object(r.jsx)("button",{type:"button",className:"page-link",onClick:function(){i(c-1)},tabIndex:"-1","aria-disabled":"true",children:Object(r.jsx)(s.a,{icon:n.b})})}),Object(r.jsx)("li",{className:"page-item ".concat(c===Math.ceil(t/a.d)&&"disabled"),children:Object(r.jsx)("button",{type:"button",className:"page-link",onClick:function(){i(c+1)},children:Object(r.jsx)(s.a,{icon:n.c})})})]})})}i.defaultProps={totalCount:0,currentPage:1},t.a=i},119:function(e,t,c){},485:function(e,t,c){},854:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(2),s=c(31),r=c(45),i=c(33),l=(c(485),c(97)),o=c(102),d=c(16),b=c(28),j=c(99),m=c(53),u=c(118),h=c(3);t.default=function(){var e=Object(s.c)(d.k),t=Object(s.b)(),c="Illnesses",O="/illness",x=function(c){c.preventDefault(),t(Object(d.e)(e.listFormData))};return Object(n.useEffect)((function(){document.title="".concat("El Cateo Admin"," | ").concat(c),t(Object(d.i)()),t(Object(d.e)(e.listFormData))})),Object(h.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(h.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(h.jsx)("div",{className:"content-header",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row mb-2",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("h1",{className:"m-0",children:[c,"\xa0",Object(h.jsx)(b.b,{type:"button",to:"".concat(O,"/create"),className:"btn btn-sm btn-app ms-3",children:"Add New"})]})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)(l.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Illnesses",link:""}]})})]})})}),Object(h.jsx)("section",{className:"content",children:Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-12",children:Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-header border-transparent",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("form",{name:"".concat(c,"ListFilter"),onSubmit:x,children:Object(h.jsxs)("div",{className:"input-group mt-3 mb-3",children:[Object(h.jsx)("input",{name:"keyword",type:"text",className:"form-control",value:e.listFormData.keyword,placeholder:"Enter keyword to search",onChange:function(e){t(Object(d.h)({key:e.currentTarget.name,value:e.currentTarget.value}))}}),Object(h.jsx)("button",{className:"btn btn-outline-app",type:"submit",children:Object(h.jsx)(r.a,{icon:i.r})}),Object(h.jsx)("button",{className:"btn btn-outline-app",type:"reset",onClick:function(e){for(var c=e.currentTarget.closest("form").getElementsByTagName("input"),a=0;a<c.length;a++)t(Object(d.h)({key:c[a].name,value:""}));x(e)},children:Object(h.jsx)(r.a,{icon:i.q})})]})})})}),Object(h.jsx)("div",{className:"card-body p-0",children:Object(h.jsx)(o.a,{data:e.list.map((function(c,a){return{name:c.name,createdAt:Object(j.a)(c.createdAt),status:m.f[c.status],actions:Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("button",{className:"btn btn-outline-app dropdown-toggle",type:"button",id:"action-drop-".concat(a),"data-bs-toggle":"dropdown","aria-expanded":"false",children:"Actions"}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"action-drop-".concat(a),children:[Object(h.jsx)("li",{children:Object(h.jsxs)(b.b,{className:"dropdown-item",to:"".concat(O,"/").concat(c.id,"/view"),children:[Object(h.jsx)(r.a,{icon:i.g})," View"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(b.b,{className:"dropdown-item",to:"".concat(O,"/").concat(c.id,"/edit"),children:[Object(h.jsx)(r.a,{icon:i.f})," Edit"]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(a){return function(c,a){c.preventDefault(),t(Object(d.b)({id:a})),t(Object(d.e)(e.listFormData))}(a,c.id)},children:[Object(h.jsx)(r.a,{icon:i.u})," Delete"]})})]})]})}})),header:["Name","Added Date","Status",""]})}),Object(h.jsx)("div",{className:"card-footer clearfix",children:Object(h.jsx)(u.a,{totalCount:parseInt(e.listCount),currentPage:parseInt(e.listFormData.page),onPageChange:function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t(Object(d.h)({key:"page",value:c})),t(Object(d.e)(Object(a.a)(Object(a.a)({},e.listFormData),{},{page:c})))}})})]})})})})})]})})}},97:function(e,t,c){"use strict";c(2),c(98);var a=c(28),n=c(3);function s(e){var t=e.breadCrumbs;return Object(n.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(n.jsx)("ol",{className:"breadcrumb",children:t.map((function(e,t){var c=e.link&&""!==e.link;return Object(n.jsx)("li",{className:"breadcrumb-item ".concat(c?"active":""),children:c?Object(n.jsx)(a.b,{to:e.link,children:e.name}):e.name},t)}))})})}s.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},t.a=s},98:function(e,t,c){},99:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(107),n=c.n(a),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD-YYYY h:mm A";return(e?n()(e):n()()).format(t)}}}]);
//# sourceMappingURL=29.ca0c2020.chunk.js.map