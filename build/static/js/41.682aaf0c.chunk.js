(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[41],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(111),n=a.n(c),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD-YYYY h:mm A";return(e?n()(e):n()()).format(t)}},106:function(e,t,a){"use strict";a(2),a(108);var c=a(3);t.a=function(e){var t=e.header,a=e.data;return Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsxs)("table",{className:"table m-0",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text-center",children:"#"}),t.length>0?t.map((function(e,t){return Object(c.jsx)("th",{className:"text-center",children:e},t)})):""]})}),Object(c.jsx)("tbody",{children:0===a.length?Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:1+t.length,className:"text-center",children:"No Record found"})}):a.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text-center",children:t+1}),Object.keys(e).map((function(t,a){return Object(c.jsx)("td",{className:"text-center",children:e[t]},a)}))]},t)}))})]})})}},108:function(e,t,a){},112:function(e,t,a){"use strict";a(2),a(114);var c=a(57),n=a(23),s=a(49),r=a(3);function i(e){var t=e.totalCount,a=e.currentPage,i=e.onPageChange;return Object(r.jsx)("nav",{"aria-label":"Page navigation",children:Object(r.jsxs)("ul",{className:"pagination justify-content-end",children:[Object(r.jsx)("li",{className:"page-item ".concat(1===a&&"disabled"),children:Object(r.jsx)("button",{type:"button",className:"page-link",onClick:function(){i(a-1)},tabIndex:"-1","aria-disabled":"true",children:Object(r.jsx)(s.a,{icon:n.a})})}),Object(r.jsx)("li",{className:"page-item ".concat(a===Math.ceil(t/c.d)&&"disabled"),children:Object(r.jsx)("button",{type:"button",className:"page-link",onClick:function(){i(a+1)},children:Object(r.jsx)(s.a,{icon:n.b})})})]})})}i.defaultProps={totalCount:0,currentPage:1},t.a=i},114:function(e,t,a){},475:function(e,t,a){},841:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(2),s=a(36),r=a(49),i=a(23),l=(a(475),a(98)),o=a(106),d=a(7),b=a(33),j=a(102),m=a(57),u=a(112),O=a(3);t.default=function(){var e=Object(s.c)(d.o),t=Object(s.b)(),a="Work Plans",h="/work-plan",x=function(a){a.preventDefault(),t(Object(d.i)(e.listFormData))};return Object(n.useEffect)((function(){document.title="".concat("El Cateo Admin"," | ").concat(a),t(Object(d.m)()),t(Object(d.i)(e.listFormData))}),[]),Object(O.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(O.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(O.jsx)("div",{className:"content-header",children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsxs)("div",{className:"row mb-2",children:[Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsxs)("h1",{className:"m-0",children:[a,"\xa0",Object(O.jsx)(b.b,{type:"button",to:"".concat(h,"/create"),className:"btn btn-sm btn-app ms-3",children:"Add New"})]})}),Object(O.jsx)("div",{className:"col-sm-6",children:Object(O.jsx)(l.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Work Plans",link:""}]})})]})})}),Object(O.jsx)("section",{className:"content",children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header border-transparent",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("form",{name:"".concat(a,"ListFilter"),onSubmit:x,children:Object(O.jsxs)("div",{className:"input-group mt-3 mb-3",children:[Object(O.jsx)("input",{name:"keyword",type:"text",className:"form-control",value:e.listFormData.keyword,placeholder:"Enter keyword to search",onChange:function(e){t(Object(d.l)({key:e.currentTarget.name,value:e.currentTarget.value}))}}),Object(O.jsx)("button",{className:"btn btn-outline-app",type:"submit",children:Object(O.jsx)(r.a,{icon:i.u})}),Object(O.jsx)("button",{className:"btn btn-outline-app",type:"reset",onClick:function(e){for(var a=e.currentTarget.closest("form").getElementsByTagName("input"),c=0;c<a.length;c++)t(Object(d.l)({key:a[c].name,value:""}));x(e)},children:Object(O.jsx)(r.a,{icon:i.t})})]})})})}),Object(O.jsx)("div",{className:"card-body p-0",children:Object(O.jsx)(o.a,{data:e.list.map((function(a,c){return{assignedOn:Object(j.a)(a.assignedOn),zone:a.zone.name,agriculturalPractice:a.agriculturalPractice.formulationName,collaborator:a.collaborator.name,scannedTrees:a.collaborator.name,completedOn:a.terminateOn?Object(j.a)(a.terminateOn):"N/A",createdAt:Object(j.a)(a.createdAt),status:m.f[a.status],actions:Object(O.jsxs)("div",{className:"dropdown",children:[Object(O.jsx)("button",{className:"btn btn-outline-app dropdown-toggle",type:"button",id:"action-drop-".concat(c),"data-bs-toggle":"dropdown","aria-expanded":"false",children:"Actions"}),Object(O.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"action-drop-".concat(c),children:[Object(O.jsx)("li",{children:Object(O.jsxs)(b.b,{className:"dropdown-item",to:"".concat(h,"/").concat(a.id,"/view"),children:[Object(O.jsx)(r.a,{icon:i.k})," View"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)(b.b,{className:"dropdown-item",to:"".concat(h,"/").concat(a.id,"/edit"),children:[Object(O.jsx)(r.a,{icon:i.j})," Edit"]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(c){return function(a,c){a.preventDefault(),t(Object(d.b)({id:c})),t(Object(d.i)(e.listFormData))}(c,a.id)},children:[Object(O.jsx)(r.a,{icon:i.A})," Delete"]})})]})]})}})),header:["Assignment Date","Zone","Formulation","Collaborator","Scanned","Completed","Added Date","Status",""]})}),Object(O.jsx)("div",{className:"card-footer clearfix",children:Object(O.jsx)(u.a,{totalCount:parseInt(e.listCount),currentPage:parseInt(e.listFormData.page),onPageChange:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t(Object(d.l)({key:"page",value:a})),t(Object(d.i)(Object(c.a)(Object(c.a)({},e.listFormData),{},{page:a})))}})})]})})})})})]})})}},98:function(e,t,a){"use strict";a(2),a(99);var c=a(33),n=a(3);function s(e){var t=e.breadCrumbs;return Object(n.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(n.jsx)("ol",{className:"breadcrumb",children:t.map((function(e,t){var a=e.link&&""!==e.link;return Object(n.jsx)("li",{className:"breadcrumb-item ".concat(a?"active":""),children:a?Object(n.jsx)(c.b,{to:e.link,children:e.name}):e.name},t)}))})})}s.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},t.a=s},99:function(e,t,a){}}]);
//# sourceMappingURL=41.682aaf0c.chunk.js.map