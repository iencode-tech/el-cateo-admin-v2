(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[15],{100:function(e,a,t){"use strict";t(2),t(106);var s=t(3);function n(e){return Object(s.jsxs)("label",{htmlFor:e.inputId,className:e.className,children:[e.labelText," ",e.isRequired&&Object(s.jsx)("span",{className:"text-danger",children:"*"})]})}n.defaultProps={className:"form-label",isRequired:!1,labelText:""},a.a=n},105:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(122),n=t.n(s),c=function(e,a){var t={status:!0,message:""};switch(!0){case/required/i.test(a):t.status=!n.a.isEmpty(e,{ignore_whitespace:!0}),t.message=!1===t.status?"The value is required!":"";break;case/float/i.test(a):""!==e&&(t.status=n.a.isFloat(e),t.message=!1===t.status?"The value needs to be a float!":"");break;case/email/i.test(a):""!==e&&(t.status=n.a.isEmail(e),t.message=!1===t.status?"The value needs to be an Email!":"");break;case/alpha/i.test(a):""!==e&&(t.status=n.a.isAlpha(e,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be only Alphabetic!":"");break;case/alphanumeric/i.test(a):""!==e&&(t.status=n.a.isAlphanumeric(e,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be AlphaNumeric!":"");break;case/numeric/i.test(a):""!==e&&(t.status=n.a.isNumeric(e),t.message=!1===t.status?"The value needs to be only Numeric!":"");break;case/equals:*/i.test(a):if(""!==e){var s=a.split(":");t.status=n.a.equals(e,s[2]),t.message=!1===t.status?"The value needs to be same as ".concat(s[1],"!"):""}break;default:t.status=!0,t.message=""}return t},l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={status:!0,message:""};return a.forEach((function(a){var s=c(e,a);t.status=t.status&&s.status,t.message+=" "+s.message,t.message=t.message.trim()})),t}},106:function(e,a,t){},109:function(e,a,t){"use strict";var s=t(2),n=(t(110),t(100)),c=t(105),l=t(3);function i(e){var a=function(a){var t=Object(c.a)(a||"",e.validations);!1===t.status?e._handleFormValidation(e.name,t):e._handleFormValidation(e.name,null)};return Object(s.useEffect)((function(){a()})),Object(l.jsxs)("div",{className:"m-2",children:[Object(l.jsx)(n.a,{inputId:e.id,className:e.labelClassName,labelText:e.placeholder,isRequired:e.isRequired}),"textarea"===e.type&&Object(l.jsx)("textarea",{id:e.id,className:"".concat(e.inputClassName," ").concat(e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&"is-invalid"),rows:"3",placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange,onBlur:function(e){return a(e.currentTarget.value)}}),-1===["textarea"].indexOf(e.type)&&Object(l.jsx)("input",{id:e.id,className:"".concat(e.inputClassName," ").concat(e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&"is-invalid"),type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:e.onChange,onBlur:function(e){return a(e.currentTarget.value)}}),e.formValidationData[e.name]&&!1===e.formValidationData[e.name].status&&Object(l.jsx)("div",{className:"invalid-feedback",children:e.formValidationData[e.name].message})]})}i.defaultProps={labelClassName:"form-label",inputClassName:"form-control",isRequired:!1,validations:[],value:"",onChange:function(){}},a.a=i},110:function(e,a,t){},111:function(e,a,t){"use strict";var s=t(23),n=t(35),c=t(2),l=t(33),i=t(45),r=t(136),o=(t(113),t(3));function d(e){var a=Object(c.useState)(""),t=Object(n.a)(a,2),d=t[0],u=t[1],m=Object(c.useState)({opacity:"0"}),b=Object(n.a)(m,2),j=b[0],f=b[1],h=Object(c.useState)(null),x=Object(n.a)(h,2),p=x[0],v=x[1],O=Object(c.useState)(1),g=Object(n.a)(O,2),N=g[0],k=g[1],w=function(e){var a=e.numPages;v(a)},y=function(e){k((function(a){return a+e}))},C=function(){y(-1)},F=function(){y(1)},D=function(a){var t;switch(!0){case null!=a.match(/\.(jpeg|jpg|gif|png)$/):t=l.k;break;case null!=a.match(/\.(pdf)$/):t=l.m;break;case null!=a.match(/\.(xlsx|xls|csv)$/):t=l.j;break;default:t=l.h}return Object(o.jsx)(i.a,{className:"img-fluid",size:"5x",icon:t,"data-bs-toggle":"modal","data-bs-target":"#filePreviewModal",onClick:function(){return u("".concat(e.fileUrl,"/").concat(a))}})};return Object(o.jsx)(o.Fragment,{children:e.files&&e.files.length>0&&Object(o.jsx)("div",{className:"row mb-3",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("div",{className:"file-preview",children:Object(o.jsxs)("div",{className:"row pt-2",children:[e.files.map((function(a,t){return Object(o.jsxs)("div",{className:"col-1 position-relative",children:[e.forForm&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn btn-danger position-absolute top-0 start-100 translate-middle badge rounded-circle p-0 border border-danger",type:"button",onClick:function(a){return function(a,t){a.preventDefault();var n=Object(s.a)(e.files);n.splice(t,1),e._onChange({currentTarget:{name:"files",value:n}})}(a,t)},children:Object(o.jsx)(i.a,{icon:l.t})}),Object(o.jsx)("input",{type:"hidden",name:"existingFiles",value:a},t)]}),D(a)]},t)})),Object(o.jsx)("div",{className:"modal fade",id:"filePreviewModal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"filePreviewModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-xl",children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title",id:"filePreviewModalLabel",children:"File Preview"}),Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:function(){return u("")}})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row d-flex",children:Object(o.jsx)("div",{className:"col-12 d-flex justify-content-center",children:function(){var e;switch(!0){case null!=d.match(/\.(jpeg|jpg|gif|png)$/):e=Object(o.jsx)("img",{src:"".concat(d),alt:"Uploaded Data"});break;case null!=d.match(/\.(pdf)$/):e=Object(o.jsxs)("div",{onMouseEnter:function(){return f({opacity:"100"})},onMouseLeave:function(){return f({opacity:"0"})},children:[Object(o.jsx)(r.a,{file:"".concat(d),onLoadSuccess:w,children:Object(o.jsx)(r.b,{pageNumber:N})}),Object(o.jsx)("nav",{className:"shadow pdf-pagination-nav","aria-label":"Pdf page navigation",style:j,children:Object(o.jsxs)("ul",{className:"pagination m-0",children:[Object(o.jsx)("li",{className:"page-item ".concat(N<=1?"disabled":""),children:Object(o.jsx)("button",{className:"page-link",type:"button",disabled:N<=1,onClick:C,children:"Previous"})}),Object(o.jsx)("li",{className:"page-item",children:Object(o.jsxs)("p",{className:"page-link m-0",children:["Page ",N||(p?1:"--")," of"," ",p||"--"]})}),Object(o.jsx)("li",{className:"page-item ".concat(N>=p?"disabled":""),children:Object(o.jsx)("button",{className:"page-link",type:"button",disabled:N>=p,onClick:F,children:"Next"})})]})})]});break;case null!=d.match(/\.(xlsx|xls|csv)$/):default:e=Object(o.jsx)("a",{href:"".concat(d),target:"_blank",rel:"noreferrer",download:!0,children:"Download"})}return e}()})})})}),Object(o.jsx)("div",{className:"modal-footer",children:Object(o.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:function(){return u("")},children:"Close"})})]})})})]})})})})})}r.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(r.c.version,"/pdf.worker.min.js"),d.defaultProps={fileUrl:"",files:[],forForm:!1},a.a=d},113:function(e,a,t){},126:function(e,a,t){"use strict";t(2);var s=t(111),n=(t(127),t(100)),c=t(3);function l(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.a,{files:e.existingFiles,fileUrl:e.fileUrl,forForm:!0,_onChange:e._onChange}),Object(c.jsx)("div",{className:"row mb-3",children:Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)(n.a,{inputId:e.id,labelText:e.label,isRequired:e.isRequired}),Object(c.jsx)("input",{id:e.id,className:"form-control form-control-lg",type:"file",name:e.name,accept:e.accept,multiple:e.isMultiple,required:e.isRequired})]})})]})}l.defaultProps={name:"files",isMultiple:!1,isRequired:!1,label:"Files",existingFiles:[],fileUrl:""},a.a=l},127:function(e,a,t){},129:function(e,a){},130:function(e,a){},131:function(e,a){},132:function(e,a){},133:function(e,a){},134:function(e,a){},203:function(e,a,t){"use strict";t(2);var s=t(53),n=t(109),c=t(126),l=t(3);a.a=function(e){var a=e.formData,t=e._handleOnChange,i=e.formValidationData,r=e._handleFormValidation;return Object(l.jsxs)(l.Fragment,{children:[a.id?Object(l.jsx)("input",{type:"hidden",value:a.id}):"",Object(l.jsx)("div",{className:"row mb-3",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)(n.a,{id:"input1",type:"text",placeholder:"Name",name:"name",isRequired:!0,value:a.name,onChange:t,validations:["required"],formValidationData:i,_handleFormValidation:r})})}),Object(l.jsx)("div",{className:"row mb-3",children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("label",{htmlFor:"input2",className:"form-label",children:"Observation"}),Object(l.jsx)("textarea",{id:"input2",className:"form-control",placeholder:"Observation",name:"observation",onChange:t,value:a.observation})]})}),Object(l.jsx)(c.a,{id:"input3",name:"files",isMultiple:!0,label:"Files",existingFiles:a.files,_onChange:t,fileUrl:s.b.illnesses}),Object(l.jsx)("div",{className:"row mb-3",children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsxs)("label",{htmlFor:"input4",className:"form-label",children:["Status ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("select",{id:"input4",className:"form-select",name:"status",onChange:t,value:parseInt(a.status),children:Object.keys(s.f).map((function(e,a){return Object(l.jsx)("option",{value:e,children:s.f[e]},a)}))})]})})]})}},486:function(e,a,t){},855:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t(31),c=(t(486),t(97)),l=t(16),i=t(203),r=t(3);a.default=function(){var e=Object(n.c)(l.k),a=Object(n.b)(),t="Add illness";return Object(s.useEffect)((function(){document.title="".concat("El Cateo Admin"," | ").concat(t),a(Object(l.i)())})),Object(r.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(r.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(r.jsx)("div",{className:"content-header",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("div",{className:"row mb-2",children:[Object(r.jsx)("div",{className:"col-sm-6",children:Object(r.jsx)("h1",{className:"m-0",children:t})}),Object(r.jsx)("div",{className:"col-sm-6",children:Object(r.jsx)(c.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Illnesses",link:"/illnesses"},{name:"Add",link:""}]})})]})})}),Object(r.jsx)("section",{className:"content",children:Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-12",children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header border-transparent",children:Object(r.jsx)("div",{className:"row",children:"\xa0"})}),Object(r.jsxs)("form",{name:"".concat(t,"Create"),encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),a(Object(l.l)(new FormData(e.currentTarget)))},children:[Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(i.a,{formData:e.formData,_handleOnChange:function(e){a(Object(l.f)({key:e.currentTarget.name,value:e.currentTarget.value}))},formValidationData:e.formValidation,_handleFormValidation:function(e,t){a(Object(l.g)({key:e,value:t}))}})}),Object(r.jsx)("div",{className:"card-footer clearfix",children:Object(r.jsxs)("button",{className:"btn btn-sm btn-app float-end",disabled:Object.keys(e.formValidation).length>0||!0===e.loading,children:[!0===e.loading&&Object(r.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ","Save"]})})]})]})})})})})]})})}},97:function(e,a,t){"use strict";t(2),t(98);var s=t(28),n=t(3);function c(e){var a=e.breadCrumbs;return Object(n.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(n.jsx)("ol",{className:"breadcrumb",children:a.map((function(e,a){var t=e.link&&""!==e.link;return Object(n.jsx)("li",{className:"breadcrumb-item ".concat(t?"active":""),children:t?Object(n.jsx)(s.b,{to:e.link,children:e.name}):e.name},a)}))})})}c.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},a.a=c},98:function(e,a,t){}}]);
//# sourceMappingURL=15.5010edae.chunk.js.map