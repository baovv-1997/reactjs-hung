(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[38],{179:function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"a",(function(){return o}));var t=[{id:1,value:0,label:"\uc2e4\uc99d\ub2e8\uc9c0"},{id:2,value:1,label:"RTU(\ubaa9\uc5c5)"},{id:3,value:2,label:"\ud14c\uc2a4\ud2b8(\uc2e4\uc99d\ub2e8\uc9c0)"},{id:4,value:3,label:"\ud14c\uc2a4\ud2b8(\ubaa9\uc5c5)"}],o=[{id:1,value:6,label:"6 \uac1c\uc529 \ubcf4\uae30"},{id:2,value:12,label:"12 \uac1c\uc529 \ubcf4\uae30"},{id:3,value:18,label:"18 \uac1c\uc529 \ubcf4\uae30"},{id:4,value:24,label:"14 \uac1c\uc529 \ubcf4\uae30"},{id:4,value:30,label:"30 \uac1c\uc529 \ubcf4\uae30"}]},226:function(e,n,a){"use strict";var t=a(0),o=a.n(t),l=a(438),i=a(167),r=a(166),c=function(e){var n=e.title,a=void 0===n?"":n,t=e.children,c=e.animation,s=void 0!==c&&c,u=e.isOpen,m=e.size,d=e.handleClose,p=e.customClass,v=e.isShowIconClose,h=e.isShowHeader,b=e.isShowFooter,E=e.isShowTwoBtn,f=e.customClassButton,g=void 0===f?"":f,y=e.classNameBtnLeft,O=void 0===y?"":y,C=e.textBtnLeft,N=void 0===C?"":C,_=e.classNameBtnRight,w=void 0===_?"":_,R=e.textBtnRight,S=void 0===R?"OK":R,j=e.handleSubmit,x=void 0===j?function(){}:j,I=e.isDisabledButton,k=e.handleCloseIcon,A=void 0===k?function(){}:k;return o.a.createElement(l.a,{animation:s,onHide:function(){return!0},show:u,size:m,className:p},v&&o.a.createElement("div",{className:"modal-content__iconClose",onClick:A,role:"button",tabIndex:0,onKeyUp:A},o.a.createElement("img",{src:r.a.icon_close,alt:""})),h&&o.a.createElement("h3",{className:"modal-title"},a),o.a.createElement(l.a.Body,null,h?o.a.createElement("div",{className:"modal-body__has-header"},t):o.a.createElement("div",{className:"modal-body__no-header"},t)),b&&o.a.createElement(l.a.Footer,null,E?o.a.createElement("div",{className:"group-button"},o.a.createElement(i.b,{type:"button",customClass:"button--half ".concat(g," ").concat(O),onClick:x,isDisabled:I},N),o.a.createElement(i.b,{type:"button",customClass:"button--half ".concat(g," ").concat(w),onClick:d},S)):o.a.createElement(i.b,{type:"button",customClass:g,onClick:d},S)))};c.defaultProps={title:"",animation:!1,size:"",customClass:"",isShowIconClose:!1,isShowHeader:!1,isShowFooter:!1,isShowTwoBtn:!1,customClassButton:"",classNameBtnLeft:"",textBtnLeft:"",classNameBtnRight:"",textBtnRight:"OK",handleSubmit:function(){},isDisabledButton:!1,handleCloseIcon:function(){}},n.a=Object(t.memo)(c)},233:function(e,n,a){"use strict";var t=a(0),o=a.n(t),l=function(e){var n=e.labelRadio,a=e.name,t=void 0===a?"":a,l=e.isChecked,i=e.onChange,r=e.id,c=void 0===r?"":r,s=e.disabled,u=void 0!==s&&s;return o.a.createElement("div",{className:"wrap-radio"},o.a.createElement("label",{className:"custom-radio d-flex",htmlFor:c},o.a.createElement("input",{type:"radio",checked:"".concat(l?"checked":""),name:t,onChange:function(e){return i(e)},id:c,disabled:u}),o.a.createElement("span",{className:"checkmark"}),o.a.createElement("span",{className:"label"},n)))};l.defaultProps={name:"",disabled:!1,id:""},n.a=Object(t.memo)(l)},256:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t={EMAIL:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,PASSWORD:/^(?=.*[a-zA-Z])([A-Z]?)((?=.*\d)([!@#$%^&*()'"<>:;.,=-]?))(?!\s).{6,13}$/,NUMBER:/^[-]?(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,PHONE_NUMBER:/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,USER_NAME:/^[0-9a-zA-Z]{3,20}$\S*$/,FLOAT_INPUT:/^[0-9.]*$/,VALIDATE_PASSWORD:/^[0-9a-zA-Z]{4,20}$\S*$/},o={EMAIL_FORMAT:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",EMAIL_REQUIRED:"Email does not exist.",NICK_NAME_REQUIRED:"Nickname does not exist.",PASSWORD_REQUIRED:"Password does not exist.",PASSWORD_FORMAT:"Up to 13 digits, including one special character. It doesn't fit",PASSWORD_NOT_MATCH:"The password you want to change does not match.",PASSWORD_CONFIRM_REQUIRED:"Password confirm does not exist.",EMAIL_NOT_EXSIST:"Please enter your email.",PASSWORD_INVALID:"Invalid password",ENQUIRY_TYPE_REQUIRED:"Enquiry Type does not exist.",TITLE_REQUIRED:"Title does not exist.",CONTENT_REQUIRED:"Content does not exist.",VERIFY_EMAIL:"Email authentication is not complete.<br /> Would you like me to resend you<br /> the authentication email?",UN_AUTHENTICATED:"Unauthenticated.",PHONE_NUMBER:"\uc22b\uc790 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",REQUIRED:"\uc774 \ud544\ub4dc\ub294 \ud544\uc218\uc785\ub2c8\ub2e4."},l=function(e,n){for(var a={},l=Object.keys(e),i=0,r=l.length;i<r;i+=1)for(var c=l[i],s=n[c],u=e[c],m="",d=0;d<s.length;d+=1){switch(s[d]){case"required":""!==u&&null!==u&&void 0!==u||(m=o.REQUIRED);break;case"email":t.EMAIL.test(u)||(m=o.EMAIL_FORMAT);break;case"phoneNumber":t.PHONE_NUMBER.test(u)||(m=o.PHONE_NUMBER);break;case"password":t.PASSWORD.test(u)||(m=o.PASSWORD_FORMAT)}m&&(a[c]=m)}return a}},263:function(e,n,a){"use strict";var t=a(0),o=a.n(t),l=a(166),i=function(e){var n=e.placeholder,a=void 0===n?"":n,t=e.value,i=void 0===t?"":t,r=e.errorMsg,c=void 0===r?"":r,s=e.label,u=void 0===s?"":s,m=e.disabled,d=void 0!==m&&m,p=e.readOnly,v=void 0!==p&&p,h=e.type,b=void 0===h?"text":h,E=e.onBlur,f=void 0===E?function(){}:E,g=e.onBlurWrapper,y=void 0===g?function(){}:g,O=e.onFocusWrapper,C=void 0===O?function(){}:O,N=e.onClickWrapper,_=void 0===N?function(){}:N,w=e.onChange,R=void 0===w?function(){}:w,S=e.customClassName,j=void 0===S?null:S,x=e.customClassWrap,I=void 0===x?null:x,k=e.customClassLabel,A=void 0===k?null:k,P=e.onFocus,M=void 0===P?function(){}:P,D=e.onKeyPress,T=void 0===D?function(){}:D,B=e.onPaste,L=void 0===B?function(){}:B,U=e.variant,F=void 0===U?"outline":U,K=e.isShowIcon,W=void 0!==K&&K,H=e.deleteValue,z=void 0===H?function(){}:H,q=e.name,Q=void 0===q?"":q,$=e.request,Z=void 0!==$&&$,V=e.customClass,Y=void 0===V?"":V,J=e.innerRef,G=void 0===J?null:J,X=e.pattern,ee=void 0===X?"":X,ne=e.inputMode,ae=void 0===ne?"":ne,te=e.maxLength,oe=void 0===te?"":te,le=e.autocomplete,ie=void 0===le?"":le,re=e.autoFocus;return o.a.createElement("div",{className:"input ".concat("outline"!==F?" input__wrapper--".concat(F):""),onBlur:function(e){return y(e)},onFocus:function(e){return C(e)},onClick:function(e){return _(e)},onKeyUp:function(){}},!!u&&o.a.createElement("p",{className:"".concat(A," input__label")},u,Z&&o.a.createElement("span",{className:"request"},"*")),o.a.createElement("div",{className:"input__box ".concat(I," ").concat(W?"input__box__custom":"")},o.a.createElement("input",{className:"input-change ".concat(Y.length>0?Y:""," ").concat("outline"!==F?"input--".concat(F):""," ").concat(j),placeholder:a,value:i,disabled:d,type:b,ref:G,onPaste:L,onKeyPress:T,readOnly:v,onBlur:function(e){return f(e)},onFocus:function(e){return M(e)},onChange:function(e){return R(e)},autoCapitalize:"none",inputMode:ae,maxLength:oe,name:Q,pattern:ee,autoComplete:ie,autoFocus:re}),W&&i.length>0&&o.a.createElement("div",{className:"input__box__icon input__box__icon__right",onClick:z,onKeyUp:z,role:"button",tabIndex:0},o.a.createElement("img",{src:l.a.icon_close,alt:""}))),c&&o.a.createElement("p",{className:"input__error-msg"},c))};i.defaultProps={placeholder:"",value:"",errorMsg:"",label:"",disabled:!1,readOnly:!1,type:"text",onBlur:function(){},onBlurWrapper:function(){},onFocusWrapper:function(){},onClickWrapper:function(){},onFocus:function(){},onChange:function(){},onKeyPress:function(){},onPaste:function(){},inputMode:"",maxLength:"",variant:"outline",customClassName:"",customClassLabel:"",customClassWrap:"",isShowIcon:!1,deleteValue:function(){},name:"",request:!1,innerRef:null,customClass:"",pattern:"",autocomplete:"",autoFocus:!1},n.a=Object(t.memo)(i)},449:function(e,n,a){"use strict";a.r(n);var t=a(30),o=a(44),l=a(165),i=a(0),r=a.n(i),c=a(11),s=a(29),u=a(226),m=a(263),d=a(167),p=a(31),v=a(4),h=a(8),b=a(179),E=a(256),f=a(233),g=a(26),y=a(168),O=a(166),C=function(e){var n,a,t,o=e.handleChangeOptionCompany,l=e.optionDevice,i=e.listCompany,c=e.listArea,s=e.listInverter,u=e.handleRemove,m=e.handleAddListDevice,p=e.idx,v=e.listType,h=e.isAccountPage,b=void 0!==h&&h;return r.a.createElement("div",{className:"item-role mt-2"},r.a.createElement("div",{className:"group-select"},r.a.createElement("div",{className:"group-item"},!b&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{placeholder:"\uad6c\ubd84",listItem:v,onChange:function(e){return o(e,"type",null===l||void 0===l?void 0:l.idx)},option:(null===l||void 0===l?void 0:l.type)||null,disabled:0!==p,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"}}),r.a.createElement("img",{src:O.a.icon_next,alt:""}))),r.a.createElement("div",{className:"group-item"},r.a.createElement(y.a,{placeholder:"\uc5c5\uccb4 \uc120\ud0dd",listItem:i,onChange:function(e){return o(e,"company",null===l||void 0===l?void 0:l.idx)},option:(null===l||void 0===l?void 0:l.company)||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"}}),r.a.createElement("img",{src:O.a.icon_next,alt:""})),r.a.createElement("div",{className:"group-item"},r.a.createElement(y.a,{placeholder:"\uad6c\uc5ed \uc120\ud0dd",listItem:c,disabled:!!(null===l||void 0===l||null===(n=l.type)||void 0===n?void 0:n.value)&&0!==(null===l||void 0===l||null===(a=l.type)||void 0===a?void 0:a.value),onChange:function(e){return o(e,"area",null===l||void 0===l?void 0:l.idx)},noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},option:(null===l||void 0===l||null===(t=l.type)||void 0===t?void 0:t.value)?null:(null===l||void 0===l?void 0:l.area)||null}),r.a.createElement("img",{src:O.a.icon_next,alt:""})),r.a.createElement("div",{className:"group-item"},r.a.createElement(y.a,{placeholder:"\uc778\ubc84\ud130 \uc120\ud0dd",listItem:s,onChange:function(e){return o(e,"inverter",null===l||void 0===l?void 0:l.idx)},option:(null===l||void 0===l?void 0:l.inverter)||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"}}))),0===p?r.a.createElement(d.b,{onClick:m},"\ucd94\uac00"):r.a.createElement(d.b,{onClick:function(){return u(l)}},"\uc0ad\uc81c"))};C.defaultProps={isAccountPage:!1};var N=Object(i.memo)(C),_=Object(i.memo)((function(e){var n=e.dataRegister,a=e.handleKeyDown,t=e.handleChangeRegister,o=e.handleChangeOptionCompany,l=e.listCompany,i=e.texTerror,c=e.listArea,s=e.listInverter,u=e.handleRemove,d=e.listItemDevice,p=e.handleAddListDevice,v=e.listType,h=n.username,b=n.email,E=n.phone,y=n.person,O=n.role,C=d&&d.map((function(e,n){return r.a.createElement(N,Object.assign({key:e.idx},e,{optionDevice:e,idx:n,handleChangeOptionCompany:o,listCompany:l,listArea:c,listInverter:s,listType:v,handleRemove:u,handleAddListDevice:p}))}));return r.a.createElement("div",{className:"page-register"},r.a.createElement("div",{className:"sign-in"},r.a.createElement("div",{className:"sign-desc mb-3"},"\ub4f1\ub85d \uc694\uccad\uc2dc \ub2f4\ub2f9\uc790\uac00 \uad00\ub828 \ub0b4\uc6a9\uc744 \ud655\uc778 \ud6c4 \uc11c\ubc84\uc5d0 \uacc4\uc815 \ub4f1\ub85d\uc744 \ub3c4\uc640\ub4dc\ub9b4 \uc608\uc815\uc785\ub2c8\ub2e4.",r.a.createElement("br",null),"\ube44\ubc00\ubc88\ud638\uc758 \uacbd\uc6b0 \uc784\uc2dc\ubc1c\uae09 \ube44\ubc00\ubc88\ud638\uac00 \ubc1c\uae09\ub429\ub2c8\ub2e4."),r.a.createElement("div",{className:"form-register"},r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\uad8c\ud55c",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},r.a.createElement("div",{className:"group-radio"},r.a.createElement(f.a,{onChange:function(){return t("admin","admin")},isChecked:"admin"===O,name:"role",labelRadio:"\ucd5c\uace0 \uad00\ub9ac\uc790",id:"admin"}),r.a.createElement(f.a,{onChange:function(){return t("company","company")},isChecked:"company"===O,labelRadio:"\uc5c5\uccb4",name:"role",id:"company"}),r.a.createElement(f.a,{onChange:function(){return t("monitoring","monitoring")},isChecked:"monitoring"===O,name:"role",labelRadio:"\ubaa8\ub2c8\ud130\ub9c1",id:"monitoring"})))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\uc774\uba54\uc77c",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},r.a.createElement(m.a,{placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"email",value:b,onChange:function(e){return t(e.target.value,"email")},onKeyPress:function(e){return a(e)},errorMsg:i&&(null===i||void 0===i?void 0:i.email)}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\uc544\uc774\ub514",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},r.a.createElement(m.a,{placeholder:"\uc601\ubb38 + \uc22b\uc790 4~13\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"username",value:h,onChange:function(e){return t(e.target.value,"username")},onKeyPress:function(e){return a(e)},errorMsg:i&&(null===i||void 0===i?void 0:i.username)}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\uc804\ud654\ubc88\ud638",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},r.a.createElement(m.a,{placeholder:"\uc22b\uc790 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694. ",type:"text",name:"phone",onKeyPress:function(e){Object(g.c)(e),a(e)},maxLength:"13",onPaste:function(e){return Object(g.d)(e)},value:E,onChange:function(e){return t(e.target.value,"phone")},errorMsg:i&&(null===i||void 0===i?void 0:i.phone)}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\ub2f4\ub2f9\uc790",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},r.a.createElement(m.a,{placeholder:"\ub2f4\ub2f9\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"text",name:"person",value:y,onChange:function(e){return t(e.target.value,"person")},onKeyPress:function(e){return a(e)},errorMsg:i&&(null===i||void 0===i?void 0:i.person)}))),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"item-label"},"\uad00\ub9ac\uae30\uae30",r.a.createElement("span",null,"*")),r.a.createElement("div",{className:"item-content"},C)))))})),w=a(9);n.default=function(){var e=Object(c.g)(),n=Object(s.c)((function(e){return null===e||void 0===e?void 0:e.account})),a=n.type,f=n.isProcessing,g=n.errorMsg,y=n.token,O=n.listCompany,C=n.listArea,N=n.listInverter,R=Object(s.b)(),S=Object(i.useState)({username:"",password:""}),j=Object(l.a)(S,2),x=j[0],I=j[1],k=Object(i.useState)({username:"",passwords:"",email:"",phone:"",person:"",role:"admin"}),A=Object(l.a)(k,2),P=A[0],M=A[1],D=Object(i.useState)({username:"",passwords:"",email:"",phone:"",person:"",role:""}),T=Object(l.a)(D,2),B=T[0],L=T[1],U=Object(i.useState)(!1),F=Object(l.a)(U,2),K=F[0],W=F[1],H=Object(i.useState)(!1),z=Object(l.a)(H,2),q=z[0],Q=z[1],$=Object(i.useState)({isShow:!1,content:""}),Z=Object(l.a)($,2),V=Z[0],Y=Z[1],J=Object(i.useState)([{idx:Math.random(),area:null,company:null,inverter:null,type:null}]),G=Object(l.a)(J,2),X=G[0],ee=G[1];Object(i.useEffect)((function(){switch(a){case w.q:v.a.setHeader("Authorization","Bearer ".concat(y)),e.push(h.a.ROOT);break;case w.p:Y(Object(o.a)({},V,{isShow:!0,content:g}));break;case w.t:W(!0);break;case w.s:Y(Object(o.a)({},V,{isShow:!0,content:"\ub4f1\ub85d \uc694\uccad\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}))}}),[a,y]),Object(i.useEffect)((function(){q&&(R(w.h()),R(w.e()))}),[q]);var ne=function(e,n){switch(n){case"username":I(Object(o.a)({},x,{username:e}));break;case"password":I(Object(o.a)({},x,{password:e}))}},ae=x.username,te=x.password,oe=P.email,le=P.phone,ie=P.person,re=function(){ae||te?ae?(te||Y(Object(o.a)({},V,{isShow:!0,content:"\uc544\uc774\ub514\ub97c \uc785\ub825 \ud574\uc8fc\uc138\uc694."})),R(w.o(x))):Y(Object(o.a)({},V,{isShow:!0,content:"\uc544\uc774\ub514\ub97c \uc785\ub825 \ud574\uc8fc\uc138\uc694."})):Y(Object(o.a)({},V,{isShow:!0,content:"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}))},ce=function(e){"Enter"===e.key&&re()},se=function(){var e,n={username:P.username,email:oe,phone:le,person:ie};if(e=Object(E.a)(n,{username:["required"],email:["required","email"],phone:["required","phoneNumber"],person:["required"]}),Object.keys(e).length>0)L(e);else{var a=X.filter((function(e){return null===e.type||null===e.company||null===e.inverter}));if(a&&a.length>0)Y(Object(o.a)({},V,{isShow:!0,content:"\uad00\ub9ac\uae30\uae30 \uc815\ubcf4 \uc785\ub825\uc744 \uc644\ub8cc\ud574\uc8fc\uc138\uc694."}));else{var t=X.map((function(e){var n;return null===(n=e.area)||void 0===n?void 0:n.value})),l={role:P.role,username:P.username||"",email:oe,name:ie||"",phone:le,inverter_ids:t};R(w.r(l))}}};return r.a.createElement("div",{className:"page-login"},f&&r.a.createElement(p.a,null),r.a.createElement("div",{className:"sign-up"},r.a.createElement("div",{className:"login-name"},"LOGIN"),r.a.createElement("div",{className:"from-login"},r.a.createElement("div",{className:"login-title"},"\uc2e4\uc99d\ub2e8\uc9c0"),r.a.createElement("div",{className:"input-wrapper"},r.a.createElement(m.a,{placeholder:"\uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.",type:"text",name:"username",value:ae,onChange:function(e){return ne(e.target.value,"username")},onKeyPress:ce}),r.a.createElement(m.a,{placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.",type:"password",name:"password",value:te,onChange:function(e){return ne(e.target.value,"password")},onKeyPress:ce})),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement(d.b,{onClick:function(){return re()},customClass:"bg-primary"},"\ub85c\uadf8\uc778")),r.a.createElement("div",{className:"register-wrapper",onClick:function(){return Q(!0)},onKeyPress:function(){},role:"button",tabIndex:0},r.a.createElement("div",{className:"name"},"\uacc4\uc815 \ub4f1\ub85d \uc694\uccad")))),r.a.createElement(u.a,{isOpen:V.isShow,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){return Y(Object(o.a)({},V,{isShow:!1,content:""}))},handleClose:function(){return Y(Object(o.a)({},V,{isShow:!1,content:""}))},textBtnRight:"\ud655\uc778"},V.content),r.a.createElement(u.a,{isOpen:q,isShowHeader:!0,size:"lg",title:"\uc2e4\uc99d\ub2e8\uc9c0 \uacc4\uc815 \ub4f1\ub85d \uc591\uc2dd",isShowIconClose:!0,handleCloseIcon:function(){return Q(!1)},isShowFooter:!0,handleClose:function(){return se()},textBtnRight:"\ub4f1\ub85d\uc694\uccad"},r.a.createElement(_,{dataRegister:P,handleKeyDown:function(e){"Enter"===e.key&&se()},handleChangeRegister:function(e,n){switch(n){case"username":M(Object(o.a)({},P,{username:e})),L(Object(o.a)({},B,{username:""}));break;case"email":M(Object(o.a)({},P,{email:e})),L(Object(o.a)({},B,{email:""}));break;case"phone":M(Object(o.a)({},P,{phone:e})),L(Object(o.a)({},B,{phone:""}));break;case"person":M(Object(o.a)({},P,{person:e})),L(Object(o.a)({},B,{person:""}));break;case"admin":M(Object(o.a)({},P,{role:"admin"}));break;case"company":M(Object(o.a)({},P,{role:"company"}));break;case"monitoring":M(Object(o.a)({},P,{role:"monitoring"}))}},handleChangeOptionCompany:function(e,n,a){var t,l,i,r=X.find((function(e){return e.idx===a})),c=X.map((function(a){return Object(o.a)({},a,{area:null,company:null,inverter:null,type:("type"===n?e:a.type)||null})})),s=X.map((function(a){return a.idx===(null===r||void 0===r?void 0:r.idx)?Object(o.a)({},a,{area:null,company:("company"===n?e:a.company)||null,inverter:null}):a})),u=X.map((function(a){return a.idx===(null===r||void 0===r?void 0:r.idx)?Object(o.a)({},a,{area:("area"===n?e:a.area)||null,inverter:null}):a})),m=X.map((function(a){return a.idx===(null===r||void 0===r?void 0:r.idx)?Object(o.a)({},a,{area:("area"===n?e:a.area)||null,company:("company"===n?e:a.company)||null,inverter:("inverter"===n?e:a.inverter)||null,type:("type"===n?e:a.type)||null}):a}));switch(n){case"type":ee(c),R(w.k({per_page:0,type:null===e||void 0===e?void 0:e.value}));break;case"company":ee(s),R(w.k({per_page:0,type:null===r||void 0===r||null===(t=r.type)||void 0===t?void 0:t.value,com_id:null===e||void 0===e?void 0:e.value}));break;case"area":ee(u),R(w.k({per_page:0,type:null===r||void 0===r||null===(l=r.type)||void 0===l?void 0:l.value,com_id:null===r||void 0===r||null===(i=r.company)||void 0===i?void 0:i.value,pos_id:null===e||void 0===e?void 0:e.value}));break;default:ee(m)}},listCompany:O,texTerror:B,listItemDevice:X,handleAddListDevice:function(){ee([].concat(Object(t.a)(X),[{idx:Math.random(),company:null,area:null,type:X&&X[0]&&X[0].type||null,inverter:null}]))},handleRemove:function(e){var n=X.filter((function(n){return e.idx!==n.idx}));ee(n)},listInverter:N,listArea:C,listType:b.b})),r.a.createElement(u.a,{isOpen:K,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){W(!1),Q(!1)},handleClose:function(){W(!1),Q(!1)},textBtnRight:"\ud655\uc778"},"\ub4f1\ub85d \uc694\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))}}}]);
//# sourceMappingURL=38.4b202a1d.chunk.js.map