(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[29],{101:function(a,e,t){"use strict";t(2),t(104);var n=t(3);function s(a){return Object(n.jsxs)("label",{htmlFor:a.inputId,className:a.className,children:[a.labelText," ",a.isRequired&&Object(n.jsx)("span",{className:"text-danger",children:"*"})]})}s.defaultProps={className:"form-label",isRequired:!1,labelText:""},e.a=s},102:function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t(111),s=t.n(n),i=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM-DD-YYYY h:mm A";return(a?s()(a):s()()).format(e)}},103:function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t(116),s=t.n(n),i=function(a,e){var t={status:!0,message:""};switch(!0){case/required/i.test(e):t.status=!s.a.isEmpty(a,{ignore_whitespace:!0}),t.message=!1===t.status?"The value is required!":"";break;case/float/i.test(e):""!==a&&(t.status=s.a.isFloat(a),t.message=!1===t.status?"The value needs to be a float!":"");break;case/email/i.test(e):""!==a&&(t.status=s.a.isEmail(a),t.message=!1===t.status?"The value needs to be an Email!":"");break;case/alpha/i.test(e):""!==a&&(t.status=s.a.isAlpha(a,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be only Alphabetic!":"");break;case/alphanumeric/i.test(e):""!==a&&(t.status=s.a.isAlphanumeric(a,"en-US",{ignore:" "}),t.message=!1===t.status?"The value needs to be AlphaNumeric!":"");break;case/numeric/i.test(e):""!==a&&(t.status=s.a.isNumeric(a),t.message=!1===t.status?"The value needs to be only Numeric!":"");break;case/equals:*/i.test(e):if(""!==a){var n=e.split(":");t.status=s.a.equals(a,n[2]),t.message=!1===t.status?"The value needs to be same as ".concat(n[1],"!"):""}break;default:t.status=!0,t.message=""}return t},l=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t={status:!0,message:""};return e.forEach((function(e){var n=i(a,e);t.status=t.status&&n.status,t.message+=" "+n.message,t.message=t.message.trim()})),t}},104:function(a,e,t){},109:function(a,e,t){"use strict";var n=t(2),s=(t(110),t(101)),i=t(103),l=t(3);function c(a){var e=function(e){var t=Object(i.a)(e||"",a.validations);!1===t.status?a._handleFormValidation(a.name,t):a._handleFormValidation(a.name,null)};return Object(n.useEffect)((function(){e()}),[]),Object(l.jsxs)("div",{className:"m-2",children:[Object(l.jsx)(s.a,{inputId:a.id,className:a.labelClassName,labelText:a.placeholder,isRequired:a.isRequired}),"textarea"===a.type&&Object(l.jsx)("textarea",{id:a.id,className:"".concat(a.inputClassName," ").concat(a.formValidationData[a.name]&&!1===a.formValidationData[a.name].status&&"is-invalid"),rows:"3",placeholder:a.placeholder,name:a.name,value:a.value,onChange:a.onChange,onBlur:function(a){return e(a.currentTarget.value)}}),-1===["textarea"].indexOf(a.type)&&Object(l.jsx)("input",{id:a.id,className:"".concat(a.inputClassName," ").concat(a.formValidationData[a.name]&&!1===a.formValidationData[a.name].status&&"is-invalid"),type:a.type,placeholder:a.placeholder,name:a.name,value:a.value,onChange:a.onChange,onBlur:function(a){return e(a.currentTarget.value)}}),a.formValidationData[a.name]&&!1===a.formValidationData[a.name].status&&Object(l.jsx)("div",{className:"invalid-feedback",children:a.formValidationData[a.name].message})]})}c.defaultProps={labelClassName:"form-label",inputClassName:"form-control",isRequired:!1,validations:[],value:"",onChange:function(){}},e.a=c},110:function(a,e,t){},239:function(a,e,t){"use strict";t(2);var n=t(57),s=t(109),i=t(102),l=t(3);var c=function(a){var e=a.formData,t=a._handleOnChange,n=a._handleRemoveBtnClick,c=a.formValidationData,r=a._handleFormValidation;return Object(l.jsxs)("div",{className:"card mb-3",children:[Object(l.jsx)("div",{className:"card-header border-transparent",children:Object(l.jsx)("button",{type:"button",className:"btn btn-sm btn-danger ms-3 float-end",onClick:n,children:"Remove"})}),Object(l.jsxs)("div",{className:"card-body",children:[e.id?Object(l.jsx)("input",{type:"hidden",value:e.id}):"",Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(s.a,{id:"sfInput1",type:"text",placeholder:"Soil Type",name:"soilType",value:e.soilType,onChange:t,validations:["alpha"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(s.a,{id:"sfInput2",type:"date",placeholder:"Date",name:"date",value:Object(i.a)(e.date,"YYYY-MM-DD"),onChange:t,validations:["alpha"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput3",type:"text",placeholder:"PH",name:"ph",value:e.ph,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput4",type:"text",placeholder:"Clay",name:"clay",value:e.clay,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput5",type:"text",placeholder:"Sand",name:"sand",value:e.sand,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput6",type:"text",placeholder:"Calcium",name:"calcium",value:e.calcium,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput7",type:"text",placeholder:"Magnesium",name:"magnesium",value:e.magnesium,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput8",type:"text",placeholder:"Potassium",name:"potassium",value:e.potassium,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput9",type:"text",placeholder:"Sodium",name:"sodium",value:e.sodium,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput10",type:"text",placeholder:"Aluminum",name:"aluminum",value:e.aluminum,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)(s.a,{id:"sfInput11",type:"text",placeholder:"Silt",name:"silt",value:e.silt,onChange:t,validations:["numeric"],formValidationData:c,_handleFormValidation:r})})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)(s.a,{id:"sfInput12",type:"textarea",placeholder:"Observation",name:"observation",value:e.observation,onChange:t,validations:["alphanumeric"],formValidationData:c,_handleFormValidation:r})})})]})]})};e.a=function(a){var e=a.formData,t=a._handleOnChange,i=a._addNewSoil,r=a._removeSoil,d=a.formValidationData,o=a._handleFormValidation;return Object(l.jsxs)(l.Fragment,{children:[e.id?Object(l.jsx)("input",{type:"hidden",value:e.id}):"",Object(l.jsx)("div",{className:"row mb-3",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)(s.a,{id:"input1",type:"text",placeholder:"Name",name:"name",isRequired:!0,value:e.name,onChange:t,validations:["required"],formValidationData:d,_handleFormValidation:o})})}),Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(l.jsx)(s.a,{id:"input2",type:"text",placeholder:"Latitude",name:"latitude",isRequired:!0,value:e.latitude,onChange:t,validations:["required","float"],formValidationData:d,_handleFormValidation:o})}),Object(l.jsx)("div",{className:"col-sm-12 col-md-6",children:Object(l.jsx)(s.a,{id:"input3",type:"text",placeholder:"Longitude",name:"longitude",isRequired:!0,value:e.longitude,onChange:t,validations:["required","float"],formValidationData:d,_handleFormValidation:o})})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsxs)("label",{htmlFor:"input4",className:"form-label",children:["Status ",Object(l.jsx)("span",{className:"text-danger",children:"*"})]}),Object(l.jsx)("select",{id:"input4",className:"form-select",name:"status",onChange:t,value:parseInt(e.status),children:Object.keys(n.f).map((function(a,e){return Object(l.jsx)("option",{value:a,children:n.f[a]},e)}))})]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-header border-transparent",children:Object(l.jsxs)("h4",{className:"m-0",children:["Soil\xa0",Object(l.jsx)("button",{type:"button",className:"btn btn-sm btn-app ms-3",onClick:i,children:"Add"})]})}),Object(l.jsx)("div",{className:"card-body",children:e.soils.map((function(a,e){return Object(l.jsx)(c,{formData:a,_handleOnChange:function(a){return t(a,["soils",e])},_handleRemoveBtnClick:function(a){return r(e,a)},formValidationData:d,_handleFormValidation:o},e)}))})]})})]})}},456:function(a,e,t){},827:function(a,e,t){"use strict";t.r(e);var n=t(28),s=t(2),i=t(36),l=(t(456),t(98)),c=t(18),r=t(239),d=t(3);e.default=function(){var a=Object(i.c)(c.m),e=Object(i.b)(),t="Add zone";return Object(s.useEffect)((function(){document.title="".concat("El Cateo Admin"," | ").concat(t),e(Object(c.j)())}),[]),Object(d.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(d.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(d.jsx)("div",{className:"content-header",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row mb-2",children:[Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{className:"m-0",children:t})}),Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)(l.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Zones",link:"/zones"},{name:"Add",link:""}]})})]})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-header border-transparent",children:Object(d.jsx)("div",{className:"row",children:"\xa0"})}),Object(d.jsxs)("form",{name:"".concat(t,"Create"),encType:"multipart/form-data",onSubmit:function(t){t.preventDefault(),e(Object(c.n)(a.formData))},children:[Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)(r.a,{formData:a.formData,_handleOnChange:function(a,t){var s=a.currentTarget.name;Array.isArray(t)&&t.length>0&&(s=[].concat(Object(n.a)(t),[a.currentTarget.name])),e(Object(c.g)({key:s,value:a.currentTarget.value}))},_addNewSoil:function(a){e(Object(c.a)())},_removeSoil:function(a,t){e(Object(c.l)(a))},formValidationData:a.formValidation,_handleFormValidation:function(a,t){e(Object(c.h)({key:a,value:t}))}})}),Object(d.jsx)("div",{className:"card-footer clearfix",children:Object(d.jsxs)("button",{className:"btn btn-sm btn-app float-end",disabled:Object.keys(a.formValidation).length>0||!0===a.loading,children:[!0===a.loading&&Object(d.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," ","Save"]})})]})]})})})})})]})})}},98:function(a,e,t){"use strict";t(2),t(99);var n=t(33),s=t(3);function i(a){var e=a.breadCrumbs;return Object(s.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(s.jsx)("ol",{className:"breadcrumb",children:e.map((function(a,e){var t=a.link&&""!==a.link;return Object(s.jsx)("li",{className:"breadcrumb-item ".concat(t?"active":""),children:t?Object(s.jsx)(n.b,{to:a.link,children:a.name}):a.name},e)}))})})}i.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},e.a=i},99:function(a,e,t){}}]);
//# sourceMappingURL=29.46b02ca4.chunk.js.map