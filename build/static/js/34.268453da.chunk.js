(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[34],{169:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),i=a(164),o=function(e){var t=e.title,a=e.onClick,n=void 0===a?function(){}:a,o=e.className,l=void 0===o?"":o,s=e.id,r=e.titleLight,m=void 0===r?"":r;return c.a.createElement("div",{id:s,className:"wrap-title-sub ".concat(l)},c.a.createElement("div",{className:"wrap-title-sub__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},c.a.createElement("img",{src:i.a.icon_arrow,alt:""}),c.a.createElement("div",{className:"wrap-title-sub__header__name"},t,c.a.createElement("span",null,m))))};o.defaultProps={className:"",onClick:function(){},titleLight:"",id:""},t.b=Object(n.memo)(o)},173:function(e,t,a){"use strict";var n=a(163),c=a(0),i=a.n(c),o=function(e,t,a){var n=Object.assign({},a);Object(c.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&n.iconRef.current&&!n.iconRef.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.addEventListener("touchstart",a)}}),[e,t,n.iconRef])},l=a(30),s=a(29),r=a(164),m=a(28),u=function(e,t){var a=Object(c.useState)(e),i=Object(n.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){l(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o},d=a(12),v=function(e){var t=e.onClick,a=e.options,n=void 0===a?[]:a;return i.a.createElement("div",{className:"auto-suggest"},n.map((function(e,a){return i.a.createElement("p",{className:"auto-suggest__item",key:a,onClick:function(){return t(e.label)},role:"presentation"},e.label)})))};v.defaultProps={options:[]};var E=Object(c.memo)(v),b=function(e){var t=e.placeholder,a=e.handleIconClick,o=void 0===a?function(){}:a,l=e.customClass,s=void 0===l?"":l,m=e.value,u=void 0===m?"":m,d=e.onChange,v=void 0===d?function(){}:d,b=e.setSearchTerm,_=void 0===b?function(){}:b,f=e.options,O=void 0===f?[]:f,h=e.handleKeyDown,p=e.isSpinner,S=void 0!==p&&p,N=Object(c.useState)(!1),T=Object(n.a)(N,2),C=T[0],A=T[1],g=Object(c.useRef)(null),R=function(e){var t=g.current;t&&!t.contains(e.target)&&A(!1)};Object(c.useEffect)((function(){return window.addEventListener("mousedown",R),function(){window.removeEventListener("mousedown",R)}}));return i.a.createElement("div",{ref:g,className:"search ".concat(s)},i.a.createElement("input",{className:"search__input",onClick:function(){return A(!0)},placeholder:t,value:u,onChange:v,onKeyPress:function(e){return h(e)}}),S&&i.a.createElement("div",{className:"spinner"}),i.a.createElement("img",{src:r.a.icon_search,alt:"Icon Search",className:"search__icon",onClick:o,role:"presentation"}),C&&O.length?i.a.createElement(E,{search:u,onClick:function(e){_(e),A(!1)},options:O}):null)};b.defaultProps={placeholder:"",customClass:"",value:"",onChange:function(){},setSearchTerm:function(){},handleIconClick:function(){},options:[],isSpinner:!1};var _=Object(c.memo)(b),f=a(166),O=function(e){var t=e.isShow,a=void 0!==t&&t,n=e.wrapperRef;return i.a.createElement("div",{className:"modal__event ".concat(a?"show-modal-event":""),ref:n},i.a.createElement("div",{className:"modal__event-title"},"\uc774\ubca4\ud2b8 \uc54c\ub9bc"),i.a.createElement("div",{className:"modal__event__group-content"},i.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("p",{className:"modal__event__event-name"},i.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")),i.a.createElement("div",{className:"modal__event__group-content"},i.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("p",{className:"modal__event__event-name"},i.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")))};O.defaultProps={isShow:!1};var h=O,p=function(e){var t=e.isSearch,a=void 0!==t&&t,l=e.isSelect,v=void 0!==l&&l,E=e.eventCount,b=void 0===E?0:E,O=Object(m.b)(),p=Object(m.c)((function(e){return null===e||void 0===e?void 0:e.main})),S=p.listPositions,N=p.listCompany,T=p.isSpinner,C=Object(c.useState)(null),A=Object(n.a)(C,2),g=A[0],R=A[1],j=Object(c.useState)(!1),I=Object(n.a)(j,2),w=I[0],k=I[1],P=Object(c.useState)(""),y=Object(n.a)(P,2),D=y[0],M=y[1],L=Object(c.useRef)(null),U=Object(c.useRef)(null),B=u(D,500);Object(c.useEffect)((function(){B&&(O(Object(d.b)({keyword:B})),O(Object(d.h)({keyword:B})))}),[B]),Object(c.useEffect)((function(){R(S[0])}),[S]);return o(L,(function(){w&&k(!1)}),{iconRef:U}),i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header__left"},a?i.a.createElement(_,{placeholder:"\ud68c\uc0ac\uba85\uc774\ub098 \uad6c\uc5ed\uba85\uc73c\ub85c \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",value:D,onChange:function(e){var t=e.target.value;M(t)},setSearchTerm:M,options:[].concat(Object(s.a)(S),Object(s.a)(N)),handleIconClick:function(){console.log(D)},handleKeyDown:function(e){"Enter"===e.key&&console.log(D)},isSpinner:T}):"",v?i.a.createElement(f.a,{placeholder:"List Selects",listItem:S,onChange:function(e){R(e)},option:g,disabled:!1,isSearchable:!1,blurInputOnSelect:!1,customClass:"header__select"}):""),i.a.createElement("div",{className:"header__right"},i.a.createElement("div",{className:"header__event"},i.a.createElement("img",{src:r.a.icon_event,alt:"Icon Event",className:"header__icon",onClick:function(){return k(!w)},role:"presentation",ref:U}),b>0?i.a.createElement("span",{className:"header__notification"},"eventCount"):""),i.a.createElement("div",{className:"header__label-event"},i.a.createElement("span",{className:"header__label-content"},"\uc774\ubca4\ud2b8\ubc1c\uc0dd"),i.a.createElement(h,{isShow:w,wrapperRef:L}))))};p.defaultProps={isSearch:!1,isSelect:!1,eventCount:0};var S=Object(c.memo)(p),N=a(11),T=a(8),C={id:1,label:"\uc2e4\uc99d\ub2e8\uc9c0",icon:r.a.iconGraph,to:T.a.ROOT,items:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",sub:[{id:1,name:"\ud1b5\ud569 \ub300\uc2dc\ubcf4\ub4dc",to:T.a.ROOT},{id:2,name:"\uad6c\uc5ed \ub300\uc2dc\ubcf4\ub4dc",to:T.a.DASHBOARD_AREA},{id:3,name:"\uc5c5\uccb4 \ub300\uc2dc\ubcf4\ub4dc",to:T.a.DASHBOARD_COMPANY}]},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:T.a.STATUS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:T.a.STATUS_COMPANY_BY_AREA}]},{id:2,name:"\uc6b4\uc601 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:T.a.OPERATION_STATUS_BY_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:T.a.OPERATION_STATUS_BY_AREA}]}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:T.a.STATISTICS_DEVELOP},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:T.a.STATISTICS_DEVELOP_AREA}]},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:T.a.OPERATION_STATISTICS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:T.a.OPERATION_STATISTICS_AREA}]}]}]},A={id:2,label:"\uae30\uae30 \uad00\ub9ac",icon:r.a.setup,items:[{id:1,name:"\uacc4\uc815 \uad00\ub9ac",to:"/accounts"},{id:2,name:"\uae30\uae30 \uad00\ub9ac",to:"/devices"}]},g={id:1,label:"\uc2e4\uc99d\ud14c\uc2a4\ud2b8",icon:r.a.mockUp,items:[{id:1,name:"\ud14c\uc2a4\ud2b8(\ubaa9\uc5c5)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:T.a.TEST_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:T.a.TEST_MOCKUP_STATUS},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:T.a.TEST_MOCKUP_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:T.a.TEST_MOCKUP_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:T.a.TEST_MOCKUP_STATISTICS_OPERATION}]}]},{id:2,name:"\ud14c\uc2a4\ud2b8(\uc2e4\uc99d\ub2e8\uc9c0)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:T.a.SOLAR_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:T.a.TEST_SOLAR_STATUS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:T.a.TEST_SOLAR_STATUS_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:T.a.TEST_SOLAR_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:T.a.TEST_SOLAR_STATISTICS_OPERATION}]}]}]},R=a(52),j=a(171),I=a(51),w=a(172),k=Object(c.memo)((function(e){var t=e.itemSub,a=e.listNestSub,o=e.isActiveNestSub,l=e.handleClickItemSub,s=e.location,r=Object(c.useState)({}),m=Object(n.a)(r,2),u=m[0],d=m[1],v=a&&a.length>0&&a.map((function(e){var t=e.name===u.name||s.pathname.includes(e.to);return i.a.createElement("li",{className:"item",onClick:function(t){return function(e,t){e.stopPropagation(),d(t)}(t,e)},tabIndex:0,role:"menuitem",onKeyPress:function(){},key:e.id},i.a.createElement(I.b,{to:null===e||void 0===e?void 0:e.to,className:"item__link item-link-nest-sub ".concat(t?"active-link":"")},i.a.createElement("p",{className:"item__link__label item-link-label-nest-sub"},e.name)))})),E=t.to,b=t.name,_=t.sub;return i.a.createElement("li",{className:"item",onClick:function(e){return l(e,t,o)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},i.a.createElement(I.b,{to:E,className:"item__link ".concat(o?"active":""," item-link-sub ").concat(o&&!_?"active-link":"")},i.a.createElement("p",{className:"item__link__label item-link-label-sub"},b),_&&i.a.createElement(j.a,{icon:w.a})),i.a.createElement("ul",{className:"menu__listsub ".concat(o?"open":"")},v))})),P=Object(c.memo)((function(e){var t=e.item,a=e.listSub,o=e.handleClickItem,l=e.isActive,s=e.location,r=Object(m.b)(),u=Object(m.c)((function(e){return e.commons.subMenuClicking})),d=t.to,v=t.name,E=t.sub,b=Object(c.useState)(null===u||void 0===u?void 0:u.sub),_=Object(n.a)(b,2),f=_[0],O=_[1],h=Object(c.useState)(!1),p=Object(n.a)(h,2),S=p[0],N=p[1],T=function(e,t,a){e.stopPropagation(),N(a),r(Object(R.c)(t)),O(t.sub),t.name===u.name&&a&&Object(R.c)({})},C=a&&a.length>0&&a.map((function(e){var a=u.name===e.name||s.pathname.includes(t.to);return i.a.createElement(k,{key:e.id,itemSub:e,nestSub:e.sub,handleClickItemSub:T,listNestSub:f,isActiveNestSub:a,location:s})}));return i.a.createElement("li",{className:"item",onClick:function(){return o(t,l)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},i.a.createElement(I.b,{to:d||"#",className:"item__link ".concat(l?"active":""," ").concat(l&&!E?"active-link":"")},i.a.createElement("p",{className:"item__link__label"},v),E&&i.a.createElement(j.a,{icon:w.a})),i.a.createElement("ul",{className:"menu__listsub ".concat(l||S?"open":"")},C))})),y=a(165),D=Object(N.h)(Object(c.memo)((function(e){var t=e.location,a=Object(m.b)(),o=Object(m.c)((function(e){var t;return null===e||void 0===e||null===(t=e.commons)||void 0===t?void 0:t.menuClicking})),l=Object(c.useState)(null===o||void 0===o?void 0:o.sub),s=Object(n.a)(l,2),u=s[0],d=s[1],v=function(e,t){d(e.sub),a(Object(R.b)(e)),e.name===o.name&&t&&a(Object(R.b)({})),e.id!==(null===o||void 0===o?void 0:o.id)&&a(Object(R.c)({}))},E=function(e){return e.items.map((function(e){var a=o.name===e.name||t.pathname.includes(e.to);return i.a.createElement(P,{key:e.id,item:e,listSub:u,handleClickItem:v,menuClicking:o,isActive:a,location:t})}))};return i.a.createElement("div",{className:"menu"},i.a.createElement("h1",{className:"menu__head"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("div",{className:"wrapper-menu"},i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===C||void 0===C?void 0:C.icon,alt:"menu"}),i.a.createElement("span",null,null===C||void 0===C?void 0:C.label))),i.a.createElement("ul",{className:"menu__list"},E(C)),i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===g||void 0===g?void 0:g.icon,alt:"menu"}),i.a.createElement("span",null,null===g||void 0===g?void 0:g.label))),i.a.createElement("ul",{className:"menu__list"},E(g)),i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===A||void 0===A?void 0:A.icon,alt:"menu"}),i.a.createElement("span",null,null===A||void 0===A?void 0:A.label))),i.a.createElement("ul",{className:"menu__list"},E(A)),i.a.createElement("div",{className:"logout"},i.a.createElement("div",{className:"name-user"},"\ub9c8\uc2a4\ud130\ub2d8"),i.a.createElement(y.a,{customClass:"btn-logout"},i.a.createElement("img",{src:r.a.btn_logout,alt:""}),i.a.createElement("div",null,"\ub85c\uadf8\uc544\uc6c3")))))}))),M=function(e){var t=e.children,a=e.isSearch,s=void 0!==a&&a,r=e.isSelect,m=void 0!==r&&r,u=e.isProcessing,d=void 0!==u&&u,v=Object(c.useState)(!1),E=Object(n.a)(v,2),b=E[0],_=E[1],f=Object(c.useRef)(null),O=Object(c.useRef)(null),h=Object(c.useRef)(null);o(f,(function(){b&&_(!1)}),{iconRef:O});var p,N="";return window.innerHeight<900&&(N="heightMenu"),p=s?i.a.createElement(S,{isSearch:!0}):m?i.a.createElement(S,{isSelect:!0}):i.a.createElement(S,null),i.a.createElement(i.a.Fragment,null,d&&i.a.createElement(l.a,null),i.a.createElement("div",{className:"wrapper-content ".concat(b?"open":"")},i.a.createElement("div",{className:"wrapper-mobile"},i.a.createElement("div",{className:"d-mobile btn-menu  ".concat(b?"show":""),onClick:function(){_(!b)},tabIndex:0,role:"menuitem",onKeyPress:function(){},ref:O},i.a.createElement("span",{className:"icon"}))),i.a.createElement("div",{className:"sidebar ".concat(b?"show":""," ").concat(N)},i.a.createElement(D,{innerRef:f})),i.a.createElement("div",{className:"main-content",ref:h},p,i.a.createElement("div",{className:"content"},i.a.createElement("div",null,t)))))};M.defaultProps={isSearch:!1,isSelect:!1,isProcessing:!1};t.a=M},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),i=a(164),o=function(e){var t=e.title,a=e.onClick,n=void 0===a?function(){}:a,o=e.className,l=void 0===o?"":o,s=e.id,r=e.descSub,m=void 0===r?"":r;return c.a.createElement("div",{id:s,className:"wrap-title ".concat(l)},c.a.createElement("div",{className:"wrap-title__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},c.a.createElement("img",{src:i.a.icon_title_header,alt:""}),c.a.createElement("div",{className:"wrap-title__header__name"},t,c.a.createElement("span",null,m))))};o.defaultProps={className:"",onClick:function(){},id:"",descSub:""},t.b=Object(n.memo)(o)},224:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(436),o=a(165),l=a(164),s=function(e){var t=e.title,a=void 0===t?"":t,n=e.children,s=e.animation,r=void 0!==s&&s,m=e.isOpen,u=e.size,d=e.handleClose,v=e.customClass,E=e.isShowIconClose,b=e.isShowHeader,_=e.isShowFooter,f=e.isShowTwoBtn,O=e.customClassButton,h=void 0===O?"":O,p=e.classNameBtnLeft,S=void 0===p?"":p,N=e.textBtnLeft,T=void 0===N?"":N,C=e.classNameBtnRight,A=void 0===C?"":C,g=e.textBtnRight,R=void 0===g?"OK":g,j=e.handleSubmit,I=void 0===j?function(){}:j,w=e.isDisabledButton,k=e.handleCloseIcon,P=void 0===k?function(){}:k;return c.a.createElement(i.a,{animation:r,onHide:function(){return!0},show:m,size:u,className:v},E&&c.a.createElement("div",{className:"modal-content__iconClose",onClick:P,role:"button",tabIndex:0,onKeyUp:P},c.a.createElement("img",{src:l.a.icon_close,alt:""})),b&&c.a.createElement("h3",{className:"modal-title"},a),c.a.createElement(i.a.Body,null,b?c.a.createElement("div",{className:"modal-body__has-header"},n):c.a.createElement("div",{className:"modal-body__no-header"},n)),_&&c.a.createElement(i.a.Footer,null,f?c.a.createElement("div",{className:"group-button"},c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(h," ").concat(S),onClick:I,isDisabled:w},T),c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(h," ").concat(A),onClick:d},R)):c.a.createElement(o.b,{type:"button",customClass:h,onClick:d},R)))};s.defaultProps={title:"",animation:!1,size:"",customClass:"",isShowIconClose:!1,isShowHeader:!1,isShowFooter:!1,isShowTwoBtn:!1,customClassButton:"",classNameBtnLeft:"",textBtnLeft:"",classNameBtnRight:"",textBtnRight:"OK",handleSubmit:function(){},isDisabledButton:!1,handleCloseIcon:function(){}},t.a=Object(n.memo)(s)},231:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=function(e){var t=e.labelRadio,a=e.name,n=void 0===a?"":a,i=e.isChecked,o=e.onChange,l=e.id,s=void 0===l?"":l,r=e.disabled,m=void 0!==r&&r;return c.a.createElement("div",{className:"wrap-radio"},c.a.createElement("label",{className:"custom-radio d-flex",htmlFor:s},c.a.createElement("input",{type:"radio",checked:"".concat(i?"checked":""),name:n,onChange:function(e){return o(e)},id:s,disabled:m}),c.a.createElement("span",{className:"checkmark"}),c.a.createElement("span",{className:"label"},t)))};i.defaultProps={name:"",disabled:!1,id:""},t.a=Object(n.memo)(i)},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n={EMAIL:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,PASSWORD:/^(?=.*[a-zA-Z])([A-Z]?)((?=.*\d)([!@#$%^&*()'"<>:;.,=-]?))(?!\s).{6,13}$/,NUMBER:/^[-]?(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,PHONE_NUMBER:/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,USER_NAME:/^[0-9a-zA-Z]{3,20}$\S*$/,FLOAT_INPUT:/^[0-9.]*$/,VALIDATE_PASSWORD:/^[0-9a-zA-Z]{4,20}$\S*$/},c={EMAIL_FORMAT:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",EMAIL_REQUIRED:"Email does not exist.",NICK_NAME_REQUIRED:"Nickname does not exist.",PASSWORD_REQUIRED:"Password does not exist.",PASSWORD_FORMAT:"Up to 13 digits, including one special character. It doesn't fit",PASSWORD_NOT_MATCH:"The password you want to change does not match.",PASSWORD_CONFIRM_REQUIRED:"Password confirm does not exist.",EMAIL_NOT_EXSIST:"Please enter your email.",PASSWORD_INVALID:"Invalid password",ENQUIRY_TYPE_REQUIRED:"Enquiry Type does not exist.",TITLE_REQUIRED:"Title does not exist.",CONTENT_REQUIRED:"Content does not exist.",VERIFY_EMAIL:"Email authentication is not complete.<br /> Would you like me to resend you<br /> the authentication email?",UN_AUTHENTICATED:"Unauthenticated.",PHONE_NUMBER:"\uc22b\uc790 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",REQUIRED:"\uc774 \ud544\ub4dc\ub294 \ud544\uc218\uc785\ub2c8\ub2e4."},i=function(e,t){for(var a={},i=Object.keys(e),o=0,l=i.length;o<l;o+=1)for(var s=i[o],r=t[s],m=e[s],u="",d=0;d<r.length;d+=1){switch(r[d]){case"required":""!==m&&null!==m&&void 0!==m||(u=c.REQUIRED);break;case"email":n.EMAIL.test(m)||(u=c.EMAIL_FORMAT);break;case"phoneNumber":n.PHONE_NUMBER.test(m)||(u=c.PHONE_NUMBER);break;case"password":n.PASSWORD.test(m)||(u=c.PASSWORD_FORMAT)}u&&(a[s]=u)}return a}},425:function(e,t,a){"use strict";a.r(t);var n=a(53),c=a(42),i=a(163),o=a(0),l=a.n(o),s=a(173),r=a(28),m=a(174),u=a(169),d=a(166),v=a(164),E=a(224),b=a(231),_=a(165),f=a(254),O=a(9),h=a(11),p=a(8);t.default=function(){var e=Object(h.f)(),t=Object(r.b)(),a=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.account})),S=a.isProcessing,N=a.listCompany,T=a.listArea,C=a.listInverter,A=Object(o.useState)({isShow:!1,content:"\ud604\ud669\uc744 \ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),g=Object(i.a)(A,2),R=g[0],j=g[1],I=Object(o.useState)({typeEvent:"event",content:"\uc6d4 \uc815\uae30 \uc124\ube44 \uc9c4\ud589",company:null,area:null,inverter:null}),w=Object(i.a)(I,2),k=w[0],P=w[1],y=Object(o.useState)({content:"",company:"",area:"",inverter:""}),D=Object(i.a)(y,2),M=D[0],L=D[1];Object(o.useEffect)((function(){t(O.h()),t(O.e())}),[]);var U=k.typeEvent,B=k.content,x=k.company,K=k.area,H=k.inverter,Y=function(e,a){switch(a){case"company":L(Object(c.a)({},M,{company:""})),P(Object(c.a)({},k,{company:e,inverter:""})),t(O.k({per_page:0,com_id:e&&e.value}));break;case"area":P(Object(c.a)({},k,{area:e,inverter:""})),L(Object(c.a)({},M,{area:""})),t(O.k({per_page:0,com_id:x&&x.value,pos_id:e&&e.value}));break;case"inverter":P(Object(c.a)({},k,{inverter:e})),L(Object(c.a)({},M,{inverter:""}));break;default:P(Object(c.a)({},k,Object(n.a)({},a,e))),L(Object(c.a)({},M,Object(n.a)({},a,"")))}};return l.a.createElement(s.a,{isProcessing:S},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(m.b,{title:"\uc2e4\uc99d\ub2e8\uc9c0 \uc6b4\uc601 \ud604\ud669",descSub:"\uc124\ube44 \uc774\ub825, \ubcf4\uc218 \uc774\ub825\uc744 \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),l.a.createElement(u.b,{title:"\uc774\ubca4\ud2b8 \uc0c1\uc138 \ub0b4\uc6a9"}),l.a.createElement("div",{className:"table-form"},l.a.createElement("div",{className:"item-row d-flex"},l.a.createElement("div",{className:"colum-left"},"\ubd84\ub958"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("div",{className:"group-radio"},l.a.createElement(b.a,{onChange:function(){return P(Object(c.a)({},k,{typeEvent:"event"}))},isChecked:"event"===U,name:"typeEvent",labelRadio:"\uc124\ube44 \uc774\ub825",id:"event"}),l.a.createElement(b.a,{onChange:function(){return P(Object(c.a)({},k,{typeEvent:"history"}))},isChecked:"history"===U,labelRadio:"\ubcf4\uc218 \uc774\ub825",name:"typeEvent",id:"history"})))),l.a.createElement("div",{className:"item-row d-flex"},l.a.createElement("div",{className:"colum-left"},"\ubaa8\ub4c8\uc815\ubcf4"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("div",{className:"item-role"},l.a.createElement("div",{className:"group-select"},l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:N,onChange:function(e){return Y(e,"company")},option:x||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===M||void 0===M?void 0:M.company}),l.a.createElement("img",{src:v.a.icon_next,alt:""})),l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:T,onChange:function(e){return Y(e,"area")},option:K||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===M||void 0===M?void 0:M.area}),l.a.createElement("img",{src:v.a.icon_next,alt:""})),l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:C,onChange:function(e){return Y(e,"inverter")},option:H||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===M||void 0===M?void 0:M.inverter})))))),l.a.createElement("div",{className:"item-row d-flex mh-300"},l.a.createElement("div",{className:"colum-left"},"\ub0b4\uc6a9"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("textarea",{placeholder:"",name:"content",rows:"12",maxLength:"5000",className:"form-control",value:B,onChange:function(e){return Y(e.target.value,"content")}}),(null===M||void 0===M?void 0:M.content)&&l.a.createElement("p",{className:"input__error-msg"},null===M||void 0===M?void 0:M.content)))),l.a.createElement("div",{className:"group-btn-bottom"},l.a.createElement(_.b,{onClick:function(){return j(Object(c.a)({},R,{isShow:!0}))}},"\uc218\uc815 \uc644\ub8cc"),l.a.createElement(_.b,{onClick:function(){return e.push(p.a.OPERATION_STATUS_BY_COMPANY)}},"\ucde8\uc18c"))),l.a.createElement(E.a,{isOpen:R.isShow,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){return j(Object(c.a)({},R,{isShow:!1}))},handleClose:function(){return j(Object(c.a)({},R,{isShow:!1}))},textBtnLeft:"\ud655\uc778",textBtnRight:"\ucde8\uc18c",isShowTwoBtn:!0,customClassButton:"btn-custom",handleSubmit:function(){return function(){var t,a={content:B,company:x&&x.label,area:K&&K.label,inverter:H&&H.label};if(t=Object(f.a)(a,{content:["required"],company:["required"],area:["required"],inverter:["required"]}),Object.keys(t).length>0)return L(t),void j(Object(c.a)({},R,{isShow:!1}));e.push(p.a.OPERATION_STATUS_BY_COMPANY)}()}},null===R||void 0===R?void 0:R.content))}}}]);
//# sourceMappingURL=34.268453da.chunk.js.map