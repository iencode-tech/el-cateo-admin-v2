(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[20],{101:function(e,a,t){"use strict";t(2),t(104);var n=t(3);function r(e){return Object(n.jsxs)("label",{htmlFor:e.inputId,className:e.className,children:[e.labelText," ",e.isRequired&&Object(n.jsx)("span",{className:"text-danger",children:"*"})]})}r.defaultProps={className:"form-label",isRequired:!1,labelText:""},a.a=r},102:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(111),r=t.n(n),s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD-YYYY h:mm A";return(e?r()(e):r()()).format(a)}},103:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(116),r=t.n(n),s=function(e,a){var t={status:!0,message:""};switch(!0){case/required/i.test(a):t.status=!r.a.isEmpty(e,{ignore_whitespace:!0}),t.message=!1===t.status?"The value is required!":"";break;case/float/i.test(a):""!==e&&(t.status=r.a.isFloat(e),t.message=!1===t.status?"The value needs to be a float!":"");break;case/email/i.test(a):""!==e&&(t.status=r.a.isEmail(e),t.message=!1===t.status?"The value needs to be an Email!":"");break;case/alpha/i.test(a):""!==e&&(t.status=r.a.isAlpha(e,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be only Alphabetic!":"");break;case/alphanumeric/i.test(a):""!==e&&(t.status=r.a.isAlphanumeric(e,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be AlphaNumeric!":"");break;case/numeric/i.test(a):""!==e&&(t.status=r.a.isNumeric(e),t.message=!1===t.status?"The value needs to be only Numeric!":"");break;case/equals:*/i.test(a):if(""!==e){var n=a.split(":");t.status=r.a.equals(e,n[2]),t.message=!1===t.status?"The value needs to be same as ".concat(n[1],"!"):""}break;default:t.status=!0,t.message=""}return t},c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={status:!0,message:""};return a.forEach((function(a){var n=s(e,a);t.status=t.status&&n.status,t.message+=" "+n.message,t.message=t.message.trim()})),t}},104:function(e,a,t){},106:function(e,a,t){"use strict";t(2),t(108);var n=t(3);a.a=function(e){var a=e.header,t=e.data;return Object(n.jsx)("div",{className:"table-responsive",children:Object(n.jsxs)("table",{className:"table m-0",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{className:"text-center",children:"#"}),a.length>0?a.map((function(e,a){return Object(n.jsx)("th",{className:"text-center",children:e},a)})):""]})}),Object(n.jsx)("tbody",{children:0===t.length?Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:1+a.length,className:"text-center",children:"No Record found"})}):t.map((function(e,a){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-center",children:a+1}),Object.keys(e).map((function(a,t){return Object(n.jsx)("td",{className:"text-center",children:e[a]},t)}))]},a)}))})]})})}},108:function(e,a,t){},109:function(e,a,t){"use strict";var n=t(2),r=(t(110),t(101)),s=t(103),c=t(3);function i(e){var a=function(a){var t=Object(s.a)(a||"",e.validations);!1===t.status?e._handleFormValidation(e.name,t):e._handleFormValidation(e.name,null)};return Object(n.useEffect)((function(){a()}),[]),Object(c.jsxs)("div",{className:"m-2",children:[Object(c.jsx)(r.a,{inputId:e.id,className:e.labelClassName,labelText:e.placeholder,isRequired:e.isRequired}),"textarea"===e.type&&Object(c.jsx)("textarea",{id:e.id,className:"".concat(e.inputClassName," ").concat(e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&"is-invalid"),rows:"3",placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange,onBlur:function(e){return a(e.currentTarget.value)}}),-1===["textarea"].indexOf(e.type)&&Object(c.jsx)("input",{id:e.id,className:"".concat(e.inputClassName," ").concat(e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&"is-invalid"),type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange,onBlur:function(e){return a(e.currentTarget.value)}}),e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&Object(c.jsx)("div",{className:"invalid-feedback",children:e.formValidationData[e.name].message})]})}i.defaultProps={labelClassName:"form-label",inputClassName:"form-control",isRequired:!1,validations:[],value:"",onChange:function(){}},a.a=i},110:function(e,a,t){},240:function(e,a,t){"use strict";var n=t(2),r=t(57),s=t(28),c=t(5),i=t(39),l=t(49),o=t(23),d=t(106),u=t(3);var m=function(e){var a=e.formData,t=e.listData,m=e._handleOnChange,j=e._addNewRawMaterial,b=e._handleRemoveBtnClick,h=e._fetchAllRawMaterials,f=Object(n.useState)(1e3),O=Object(i.a)(f,2),v=O[0],x=O[1],p=function(){return[0,2].indexOf(parseInt(a.method))>-1},N=function(){return 1===parseInt(a.method)},g=function(e){return e.quantity||0},w=function(){var e=0;if(a.rawMaterials&&a.rawMaterials.length>0)for(var t=1;t<a.rawMaterials.length;t++)e+=parseFloat(a.rawMaterials[t].quantity)||0;return e};return Object(n.useEffect)((function(){if(p()&&a.rawMaterials&&a.rawMaterials.length>0){for(var e=0,t=0;t<a.rawMaterials.length;t++)e+=parseFloat(a.rawMaterials[t].quantity)||0;x(e)}})),Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-2 border border-1 rounded",children:[Object(u.jsx)("h6",{className:"text-center",children:"Raw Materials"}),Object(u.jsxs)("ul",{className:"list-group",children:[Object(u.jsx)("li",{className:"list-group-item",children:Object(u.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return h(e.currentTarget.value)}})}),t.filter((function(e){var t=!1;return a.rawMaterials&&a.rawMaterials.forEach((function(a){a.rawMaterialId===e.id&&(t=!0)})),!t})).map((function(e,a){return Object(u.jsx)("li",{onClick:function(a){return j({material:e},a)},className:"list-group-item list-group-item-action",children:e.name},a)}))]})]}),Object(u.jsxs)("div",{className:"col-10 border border-2 rounded",children:[Object(u.jsx)("h6",{className:"text-center",children:"Amount to Dose"}),Object(u.jsx)(d.a,{data:a.rawMaterials&&a.rawMaterials.map((function(e,a){return Object(c.a)(Object(c.a)(Object(c.a)({name:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"hidden",name:"rawMaterial",value:e.id,onChange:function(e){return m(e,["rawMaterials",a])}}),e.rawMaterial.name]}),quantity:Object(u.jsx)("input",{type:"number",name:"quantity",value:p()&&0===a?v:e.quantity,onChange:function(t){p()&&0===a?(x(parseFloat(t.currentTarget.value)),m({currentTarget:{name:"quantity",value:parseFloat(t.currentTarget.value)-w()}},["rawMaterials",a])):p()&&a>0?(m(t,["rawMaterials",a]),m({currentTarget:{name:"quantity",value:parseFloat(v)-(parseFloat(w())-parseFloat(e.quantity||0)+parseFloat(t.currentTarget.value||0))}},["rawMaterials",0])):m(t,["rawMaterials",a])}}),unit:Object(u.jsx)("select",{name:"unit",value:e.unit,onChange:function(e){return m(e,["rawMaterials",a])},readOnly:!0,disabled:!0,children:Object.keys(r.h).map((function(e,a){return Object(u.jsx)("option",{value:e,children:r.h[e]},a)}))})},N()?{qtyTree:"".concat(g(e)," ").concat(r.h[e.unit])}:{}),p()?{qtyLts:0!==a?"".concat(g(e)," ").concat(r.h[e.unit]):"",total:0===a&&"".concat(e.quantity," ").concat(r.h[e.unit])}:{}),{},{delete:(p()&&0!==a||N())&&Object(u.jsx)(l.a,{icon:o.A,onClick:function(e){return b(a,e)}})})})),header:["Material","Quantity","Unit"].concat(Object(s.a)(N()?["Qty x Tree"]:[]),Object(s.a)(p()?["Qty x Lts.","Total"]:[]),[""])})]})]})})},j=t(102),b=t(109);a.a=function(e){var a=e.formData,t=e.rawMaterialList,n=e._handleOnChange,s=e._addNewRawMaterial,c=e._removeRawMaterial,i=e._fetchAllRawMaterials,l=e.defaultFolialDrencheData,o=e.formValidationData,d=e._handleFormValidation;return Object(u.jsxs)(u.Fragment,{children:[a.id?Object(u.jsx)("input",{type:"hidden",value:a.id}):"",Object(u.jsxs)("div",{className:"row mb-3",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(b.a,{id:"input1",type:"text",placeholder:"Formulation Name",name:"formulationName",isRequired:!0,value:a.formulationName,onChange:n,validations:["required","alpha"],formValidationData:o,_handleFormValidation:d})}),Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)(b.a,{id:"input2",type:"date",placeholder:"Schedule Date",name:"scheduledDate",isRequired:!0,value:Object(j.a)(a.scheduledDate,"YYYY-MM-DD"),onChange:n,validations:["required"],formValidationData:o,_handleFormValidation:d})}),Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)(b.a,{id:"input3",type:"text",placeholder:"Days to do",name:"daysToDo",isRequired:!0,value:a.daysToDo,onChange:n,validations:["required","numeric"],formValidationData:o,_handleFormValidation:d})})]}),Object(u.jsx)("div",{className:"row mb-3",children:Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsxs)("label",{htmlFor:"input8",className:"form-label",children:["Method ",Object(u.jsx)("span",{className:"text-danger",children:"*"})]}),Object(u.jsx)("select",{id:"input8",className:"form-select",name:"method",onChange:function(e){n(e),n({currentTarget:{name:"rawMaterials",value:[]}});var a="g";[0,2].indexOf(parseInt(e.currentTarget.value))>-1&&(a="cc",s({material:l,quantity:1e3},null)),i("",a)},value:parseInt(a.method),children:Object.keys(r.c).map((function(e,a){return Object(u.jsx)("option",{value:e,children:r.c[e]},a)}))})]})}),Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsx)(b.a,{id:"input11",type:"textarea",placeholder:"Observations",name:"observations",isRequired:!0,value:a.observations,onChange:n,formValidationData:o,_handleFormValidation:d})}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsxs)("label",{htmlFor:"input4",className:"form-label",children:["Status ",Object(u.jsx)("span",{className:"text-danger",children:"*"})]}),Object(u.jsx)("select",{id:"input4",className:"form-select",name:"status",onChange:n,value:parseInt(a.status),children:Object.keys(r.f).map((function(e,a){return Object(u.jsx)("option",{value:e,children:r.f[e]},a)}))})]}),Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header border-transparent",children:Object(u.jsx)("h4",{className:"m-0",children:"Raw Material"})}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)(m,{formData:a,listData:t,_handleOnChange:n,_addNewRawMaterial:s,_handleRemoveBtnClick:c,_fetchAllRawMaterials:i})})]})})]})}},472:function(e,a,t){},839:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t(5),s=t(39),c=t(2),i=t(36),l=(t(472),t(98)),o=t(14),d=t(240),u=t(57),m=t(3);a.default=function(){var e=Object(i.c)(o.o),a=Object(i.b)(),t=Object(c.useState)(!0),j=Object(s.a)(t,2),b=j[0],h=j[1],f="Add agricultural practice",O=function(e,t){a(Object(o.a)(e))},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cc";a(Object(o.g)(Object(r.a)(Object(r.a)({},e.rawMaterialsFormData),{},{keyword:t,unit:n})))};return Object(c.useEffect)((function(){document.title="".concat("El Cateo Admin"," | ").concat(f),a(Object(o.l)({id:u.a,actionType:"loadDefaultFolialDrenche"})),v()}),[]),Object(c.useEffect)((function(){[0,2].indexOf(parseInt(e.formData.method))>-1&&Object.keys(e.defaultFolialDrenche).length>0&&b&&(O({material:e.defaultFolialDrenche,quantity:1e3}),h(!1))})),Object(m.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(m.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(m.jsx)("div",{className:"content-header",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row mb-2",children:[Object(m.jsx)("div",{className:"col-sm-6",children:Object(m.jsx)("h1",{className:"m-0",children:f})}),Object(m.jsx)("div",{className:"col-sm-6",children:Object(m.jsx)(l.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Agricultural Practices",link:"/agricultural-practices"},{name:"Add",link:""}]})})]})})}),Object(m.jsx)("section",{className:"content",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header border-transparent",children:Object(m.jsx)("div",{className:"row",children:"\xa0"})}),Object(m.jsxs)("form",{name:"".concat(f,"Create"),encType:"multipart/form-data",onSubmit:function(t){t.preventDefault(),a(Object(o.q)(e.formData))},children:[Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)(d.a,{formData:e.formData,rawMaterialList:e.rawMaterials,_handleOnChange:function(e,t){var r=e.currentTarget.name;Array.isArray(t)&&t.length>0&&(r=[].concat(Object(n.a)(t),[e.currentTarget.name])),a(Object(o.i)({key:r,value:e.currentTarget.value}))},_addNewRawMaterial:O,_removeRawMaterial:function(e,t){a(Object(o.n)(e))},_fetchAllRawMaterials:v,defaultFolialDrencheData:e.defaultFolialDrenche,formValidationData:e.formValidation,_handleFormValidation:function(e,t){a(Object(o.j)({key:e,value:t}))}})}),Object(m.jsx)("div",{className:"card-footer clearfix",children:Object(m.jsxs)("button",{className:"btn btn-sm btn-app float-end",disabled:Object.keys(e.formValidation).length>0||!0===e.loading,children:[!0===e.loading&&Object(m.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ","Save"]})})]})]})})})})})]})})}},98:function(e,a,t){"use strict";t(2),t(99);var n=t(33),r=t(3);function s(e){var a=e.breadCrumbs;return Object(r.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(r.jsx)("ol",{className:"breadcrumb",children:a.map((function(e,a){var t=e.link&&""!==e.link;return Object(r.jsx)("li",{className:"breadcrumb-item ".concat(t?"active":""),children:t?Object(r.jsx)(n.b,{to:e.link,children:e.name}):e.name},a)}))})})}s.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},a.a=s},99:function(e,a,t){}}]);
//# sourceMappingURL=20.5c721a54.chunk.js.map