(this.webpackJsonpel_cateo=this.webpackJsonpel_cateo||[]).push([[51],{849:function(e,t,a){"use strict";a.r(t);var c=a(124),n=a(35),s=a(1),r=a.n(s),l=a(2),o=a(17),i=a(97),d=a(125),j=a.n(d),b=a(3);t.default=function(){var e=Object(o.g)(),t=Object(o.i)(),a=Object(l.useState)(""),s=Object(n.a)(a,2),d=s[0],u=s[1],m=Object(l.useState)(""),h=Object(n.a)(m,2),O=h[0],p=h[1],x=Object(l.useState)(""),f=Object(n.a)(x,2),v=f[0],N=f[1],g=Object(l.useState)(""),S=Object(n.a)(g,2),y=S[0],w=S[1],k=Object(l.useState)(""),C=Object(n.a)(k,2),E=C[0],I=C[1],F=Object(l.useState)(""),R=Object(n.a)(F,2),q=R[0],P=R[1],T=Object(l.useState)(""),_=Object(n.a)(T,2),D=_[0],z=_[1],A=Object(l.useState)(""),L=Object(n.a)(A,2),J=L[0],U=L[1],B=Object(l.useState)(""),G=Object(n.a)(B,2),H=G[0],K=G[1],M=Object(l.useState)(""),Q=Object(n.a)(M,2),V=Q[0],W=Q[1],X=Object(l.useState)(""),Y=Object(n.a)(X,2),Z=Y[0],$=Y[1],ee=Object(l.useState)(""),te=Object(n.a)(ee,2),ae=te[0],ce=te[1],ne=Object(l.useState)(""),se=Object(n.a)(ne,2),re=se[0],le=se[1],oe=Object(l.useState)(""),ie=Object(n.a)(oe,2),de=ie[0],je=ie[1],be=Object(l.useState)(""),ue=Object(n.a)(be,2),me=ue[0],he=ue[1],Oe=Object(l.useState)(1),pe=Object(n.a)(Oe,2),xe=pe[0],fe=pe[1],ve=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.elcateo.com","/person/").concat(t.id,"/read"),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var t=e.data.data;u(t.firstName),N(t.lastName),z(t.email),I(t.phone),K(t.address),je(t.role_type),le(t.farm_id),fe(t.status)})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.elcateo.com","/farms"),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var t=e.data.data.dbData;ce(t),le(t[0].id),console.log(t)})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var a=Object(c.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.a.put("".concat("https://api.elcateo.com","/person/").concat(t.id,"/update"),{firstName:d,lastName:v,email:D,phone:E,address:H,role_type:de,farm_id:re,status:xe},{headers:{authorization:localStorage.getItem("authToken")}}).then((function(t){alert(t.data.message),e.push("/persons")})).catch((function(e){alert(e.message)}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),Se=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://api.elcateo.com","/userroles"),{headers:{authorization:localStorage.getItem("authToken")}}).then((function(e){var t=e.data.data.dbData;$(t),je(t[0].id)})).catch((function(e){console.log(e.response)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){document.title="".concat("El Cateo Admin"),Se(),Ne()}),[]),Object(l.useEffect)((function(){ve()}),[]),Object(b.jsx)("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom",children:Object(b.jsxs)("div",{className:"col-12 p-0 content-wrapper",children:[Object(b.jsx)("div",{className:"content-header",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row mb-2",children:[Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{className:"m-0",children:"Edit Person"})}),Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)(i.a,{breadCrumbs:[{name:"Dashboard",link:"/dashboard"},{name:"Person",link:"/persons"},{name:"Edit",link:""}]})})]})})}),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header border-transparent",children:Object(b.jsx)("div",{className:"row",children:"\xa0"})}),Object(b.jsxs)("form",{method:"POST",onSubmit:function(e){e.preventDefault();var t=!1;d?p(""):(p(" First Name Required"),t=!0),v?w(""):(w(" Last Name Required"),t=!0),E?P(""):(P("Phone number Required"),t=!0),D?U(""):(U(" Email Required"),t=!0),H?W(""):(W(" Address Required"),t=!0),de?he(""):(he("Role Required"),t=!0),0==t&&ge()},encType:"multipart/form-data",children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"row mb-3",children:[Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsxs)("label",{htmlFor:"floatingInput",children:["First Name ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("input",{name:"firstname",type:"text",className:"form-control",id:"firstname",placeholder:"Enter first name",value:d,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("p",{style:{color:"red"},children:O})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsxs)("label",{htmlFor:"floatingInput",children:["Last Name ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("input",{name:"lastname",type:"text",className:"form-control",id:"lastname",placeholder:"Enter last name",value:v,onChange:function(e){return N(e.target.value)}}),Object(b.jsx)("p",{style:{color:"red"},children:y})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"floatingInput",children:["Phone Number ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("input",{name:"phone",type:"number",className:"form-control",id:"phone",placeholder:"Enter phone number",value:E,onChange:function(e){return I(e.target.value)}}),Object(b.jsx)("p",{style:{color:"red"},children:q})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"floatingInput",children:["Email ",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("input",{name:"email",type:"email",className:"form-control",id:"email",placeholder:"Enter email",value:D,onChange:function(e){return z(e.target.value)}}),Object(b.jsx)("p",{style:{color:"red"},children:J})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{htmlFor:"floatingInput",children:["Address",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsx)("textarea",{name:"address",type:"text",className:"form-control",id:"address",placeholder:"Enter address",value:H,onChange:function(e){return K(e.target.value)}}),Object(b.jsx)("p",{style:{color:"red"},children:V})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Status",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Object(b.jsxs)("select",{id:"status",className:"form-select",name:"status",value:xe,onChange:function(e){return fe(e.target.value)},children:[Object(b.jsx)("option",{value:1,children:"Active"}),Object(b.jsx)("option",{value:0,children:"Inactive"})]})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Role",Object(b.jsx)("span",{className:"text-danger",children:"*"})]}),Z.length>0?Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"role",className:"form-select",name:"role",onChange:function(e){return je(e.target.value)},children:Z.map((function(e,t){return Object(b.jsx)("option",{value:e.id,children:e.name},t)}))})}):Object(b.jsx)("option",{children:"No Role"}),Object(b.jsx)("p",{style:{color:"red"},children:me})]}),Object(b.jsxs)("div",{className:"col-md-6",children:[Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Farm List"}),ae.length>0?Object(b.jsx)("div",{children:Object(b.jsx)("select",{id:"farm",className:"form-select",name:"farm",onChange:function(e){return le(e.target.value)},children:ae.map((function(e,t){return Object(b.jsx)("option",{value:e.id,children:e.name},t)}))})}):Object(b.jsx)("option",{children:"No Farm"}),Object(b.jsx)("p",{style:{color:"red"},children:me})]})]})}),Object(b.jsx)("div",{className:"card-footer clearfix",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-sm btn-app float-end",children:"Update"})})]})]})})})})})]})})}},97:function(e,t,a){"use strict";a(2),a(98);var c=a(28),n=a(3);function s(e){var t=e.breadCrumbs;return Object(n.jsx)("nav",{className:"float-sm-end","aria-label":"breadcrumb",children:Object(n.jsx)("ol",{className:"breadcrumb",children:t.map((function(e,t){var a=e.link&&""!==e.link;return Object(n.jsx)("li",{className:"breadcrumb-item ".concat(a?"active":""),children:a?Object(n.jsx)(c.b,{to:e.link,children:e.name}):e.name},t)}))})})}s.defaultProps={breadCrumbs:[{name:"Dashboard",link:"/dashboard"}]},t.a=s},98:function(e,t,a){}}]);
//# sourceMappingURL=51.d581235b.chunk.js.map