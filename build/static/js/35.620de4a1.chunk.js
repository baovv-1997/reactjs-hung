(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[35],{171:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),i=a(166),o=function(e){var t=e.title,a=e.onClick,n=void 0===a?function(){}:a,o=e.className,l=void 0===o?"":o,s=e.id,r=e.titleLight,m=void 0===r?"":r;return c.a.createElement("div",{id:s,className:"wrap-title-sub ".concat(l)},c.a.createElement("div",{className:"wrap-title-sub__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},c.a.createElement("img",{src:i.a.icon_arrow,alt:""}),c.a.createElement("div",{className:"wrap-title-sub__header__name"},t,c.a.createElement("span",null,m))))};o.defaultProps={className:"",onClick:function(){},titleLight:"",id:""},t.b=Object(n.memo)(o)},175:function(e,t,a){"use strict";var n=a(165),c=a(0),i=a.n(c),o=function(e,t,a){var n=Object.assign({},a);Object(c.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&n.iconRef.current&&!n.iconRef.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.addEventListener("touchstart",a)}}),[e,t,n.iconRef])},l=a(31),s=a(30),r=a(44),m=a(166),u=a(29),d=function(e,t){var a=Object(c.useState)(e),i=Object(n.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){var a=setTimeout((function(){l(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o},v=a(12),E=function(e){var t=e.onClick,a=e.options,n=void 0===a?[]:a;return i.a.createElement("div",{className:"auto-suggest"},n.map((function(e,a){return i.a.createElement("p",{className:"auto-suggest__item",key:a,onClick:function(){return t(e)},role:"presentation"},e.label)})))};E.defaultProps={options:[]};var b=Object(c.memo)(E),_=function(e){var t=e.placeholder,a=e.handleIconClick,o=void 0===a?function(){}:a,l=e.customClass,s=void 0===l?"":l,r=e.value,u=void 0===r?"":r,d=e.onChange,v=void 0===d?function(){}:d,E=e.setSearchTerm,_=void 0===E?function(){}:E,f=e.options,O=void 0===f?[]:f,p=e.handleKeyDown,h=e.isSpinner,S=void 0!==h&&h,N=Object(c.useState)(!1),T=Object(n.a)(N,2),C=T[0],A=T[1],j=Object(c.useRef)(null),g=function(e){var t=j.current;t&&!t.contains(e.target)&&A(!1)};Object(c.useEffect)((function(){return window.addEventListener("mousedown",g),function(){window.removeEventListener("mousedown",g)}}));return i.a.createElement("div",{ref:j,className:"search ".concat(s)},i.a.createElement("input",{className:"search__input",onClick:function(){return A(!0)},placeholder:t,value:u,onChange:v,onKeyPress:function(e){return p(e)}}),S&&i.a.createElement("div",{className:"spinner"}),i.a.createElement("img",{src:m.a.icon_search,alt:"Icon Search",className:"search__icon",onClick:o,role:"presentation"}),C&&O.length?i.a.createElement(b,{search:u,onClick:function(e){console.log(e,"searchValue"),_(e),A(!1)},options:O}):null)};_.defaultProps={placeholder:"",customClass:"",value:"",onChange:function(){},setSearchTerm:function(){},handleIconClick:function(){},options:[],isSpinner:!1};var f=Object(c.memo)(_),O=a(168),p=function(e){var t=e.isShow,a=void 0!==t&&t,n=e.wrapperRef;return i.a.createElement("div",{className:"modal__event ".concat(a?"show-modal-event":""),ref:n},i.a.createElement("div",{className:"modal__event-title"},"\uc774\ubca4\ud2b8 \uc54c\ub9bc"),i.a.createElement("div",{className:"modal__event__group-content"},i.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("p",{className:"modal__event__event-name"},i.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")),i.a.createElement("div",{className:"modal__event__group-content"},i.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("p",{className:"modal__event__event-name"},i.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")))};p.defaultProps={isShow:!1};var h=p,S=function(e){var t=e.isSearch,a=void 0!==t&&t,l=e.isSelect,E=void 0!==l&&l,b=e.eventCount,_=void 0===b?0:b,p=Object(u.b)(),S=Object(u.c)((function(e){return null===e||void 0===e?void 0:e.main})),N=S.listPositions,T=S.listCompany,C=S.isSpinner,A=Object(c.useState)(null),j=Object(n.a)(A,2),g=j[0],R=j[1],I=Object(c.useState)(!1),w=Object(n.a)(I,2),k=w[0],P=w[1],y=Object(c.useState)({label:"",value:"",key:"",id:""}),D=Object(n.a)(y,2),M=D[0],L=D[1],U=Object(c.useRef)(null),B=Object(c.useRef)(null),x=d(M.label,500);Object(c.useEffect)((function(){x&&(p(Object(v.b)({keyword:x})),p(Object(v.h)({keyword:x})))}),[x]),Object(c.useEffect)((function(){var e=N.findIndex((function(e){return null===e||void 0===e?void 0:e.label.includes("\ubcf8\uad00 \ub0a8\uce21")}));R(N[e])}),[N]);return o(U,(function(){k&&P(!1)}),{iconRef:B}),i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header__left"},a?i.a.createElement(f,{placeholder:"\ud68c\uc0ac\uba85\uc774\ub098 \uad6c\uc5ed\uba85\uc73c\ub85c \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",value:M.label,onChange:function(e){var t=e.target.value;L(Object(r.a)({},M,{label:t}))},setSearchTerm:L,options:[].concat(Object(s.a)(N),Object(s.a)(T)),handleIconClick:function(){console.log(M)},handleKeyDown:function(e){"Enter"===e.key&&console.log(M)},isSpinner:C}):"",E?i.a.createElement(O.a,{placeholder:"List Selects",listItem:N,onChange:function(e){R(e)},option:g,disabled:!1,isSearchable:!1,blurInputOnSelect:!1,customClass:"header__select"}):""),i.a.createElement("div",{className:"header__right"},i.a.createElement("div",{className:"header__event"},i.a.createElement("img",{src:m.a.icon_event,alt:"Icon Event",className:"header__icon",onClick:function(){return P(!k)},role:"presentation",ref:B}),_>0?i.a.createElement("span",{className:"header__notification"},"eventCount"):""),i.a.createElement("div",{className:"header__label-event"},i.a.createElement("span",{className:"header__label-content"},"\uc774\ubca4\ud2b8\ubc1c\uc0dd"),i.a.createElement(h,{isShow:k,wrapperRef:U}))))};S.defaultProps={isSearch:!1,isSelect:!1,eventCount:0};var N=Object(c.memo)(S),T=a(11),C=a(8),A={id:1,label:"\uc2e4\uc99d\ub2e8\uc9c0",icon:m.a.iconGraph,to:C.a.ROOT,items:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",sub:[{id:1,name:"\ud1b5\ud569 \ub300\uc2dc\ubcf4\ub4dc",to:C.a.ROOT},{id:2,name:"\uad6c\uc5ed \ub300\uc2dc\ubcf4\ub4dc",to:C.a.DASHBOARD_AREA},{id:3,name:"\uc5c5\uccb4 \ub300\uc2dc\ubcf4\ub4dc",to:C.a.DASHBOARD_COMPANY}]},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:C.a.STATUS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:C.a.STATUS_COMPANY_BY_AREA}]},{id:2,name:"\uc6b4\uc601 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:C.a.OPERATION_STATUS_BY_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:C.a.OPERATION_STATUS_BY_AREA}]}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:C.a.STATISTICS_DEVELOP},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:C.a.STATISTICS_DEVELOP_AREA}]},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:C.a.OPERATION_STATISTICS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:C.a.OPERATION_STATISTICS_AREA}]}]}]},j={id:2,label:"\uae30\uae30 \uad00\ub9ac",icon:m.a.setup,items:[{id:1,name:"\uacc4\uc815 \uad00\ub9ac",to:"/accounts"},{id:2,name:"\uae30\uae30 \uad00\ub9ac",to:"/devices"}]},g={id:1,label:"\uc2e4\uc99d\ud14c\uc2a4\ud2b8",icon:m.a.mockUp,items:[{id:1,name:"\ud14c\uc2a4\ud2b8(\ubaa9\uc5c5)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:C.a.TEST_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:C.a.TEST_MOCKUP_STATUS},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:C.a.TEST_MOCKUP_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:C.a.TEST_MOCKUP_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:C.a.TEST_MOCKUP_STATISTICS_OPERATION}]}]},{id:2,name:"\ud14c\uc2a4\ud2b8(\uc2e4\uc99d\ub2e8\uc9c0)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:C.a.SOLAR_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:C.a.TEST_SOLAR_STATUS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:C.a.TEST_SOLAR_STATUS_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:C.a.TEST_SOLAR_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:C.a.TEST_SOLAR_STATISTICS_OPERATION}]}]}]},R=a(53),I=a(173),w=a(43),k=a(174),P=Object(c.memo)((function(e){var t=e.itemSub,a=e.listNestSub,o=e.isActiveNestSub,l=e.handleClickItemSub,s=e.location,r=Object(c.useState)({}),m=Object(n.a)(r,2),u=m[0],d=m[1],v=a&&a.length>0&&a.map((function(e){var t=e.name===u.name||s.pathname.includes(e.to);return i.a.createElement("li",{className:"item",onClick:function(t){return function(e,t){e.stopPropagation(),d(t)}(t,e)},tabIndex:0,role:"menuitem",onKeyPress:function(){},key:e.id},i.a.createElement(w.b,{to:null===e||void 0===e?void 0:e.to,className:"item__link item-link-nest-sub ".concat(t?"active-link":"")},i.a.createElement("p",{className:"item__link__label item-link-label-nest-sub"},e.name)))})),E=t.to,b=t.name,_=t.sub;return i.a.createElement("li",{className:"item",onClick:function(e){return l(e,t,o)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},i.a.createElement(w.b,{to:E,className:"item__link ".concat(o?"active":""," item-link-sub ").concat(o&&!_?"active-link":"")},i.a.createElement("p",{className:"item__link__label item-link-label-sub"},b),_&&i.a.createElement(I.a,{icon:k.a})),i.a.createElement("ul",{className:"menu__listsub ".concat(o?"open":"")},v))})),y=Object(c.memo)((function(e){var t=e.item,a=e.listSub,o=e.handleClickItem,l=e.isActive,s=e.location,r=Object(u.b)(),m=Object(u.c)((function(e){return e.commons.subMenuClicking})),d=t.to,v=t.name,E=t.sub,b=Object(c.useState)(null===m||void 0===m?void 0:m.sub),_=Object(n.a)(b,2),f=_[0],O=_[1],p=Object(c.useState)(!1),h=Object(n.a)(p,2),S=h[0],N=h[1],T=function(e,t,a){e.stopPropagation(),N(a),r(Object(R.c)(t)),O(t.sub),t.name===m.name&&a&&Object(R.c)({})},C=a&&a.length>0&&a.map((function(e){var a=m.name===e.name||s.pathname.includes(t.to);return i.a.createElement(P,{key:e.id,itemSub:e,nestSub:e.sub,handleClickItemSub:T,listNestSub:f,isActiveNestSub:a,location:s})}));return i.a.createElement("li",{className:"item",onClick:function(){return o(t,l)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},i.a.createElement(w.b,{to:d||"#",className:"item__link ".concat(l?"active":""," ").concat(l&&!E?"active-link":"")},i.a.createElement("p",{className:"item__link__label"},v),E&&i.a.createElement(I.a,{icon:k.a})),i.a.createElement("ul",{className:"menu__listsub ".concat(l||S?"open":"")},C))})),D=a(167),M=Object(T.i)(Object(c.memo)((function(e){var t=e.location,a=Object(u.b)(),o=Object(u.c)((function(e){var t;return null===e||void 0===e||null===(t=e.commons)||void 0===t?void 0:t.menuClicking})),l=Object(c.useState)(null===o||void 0===o?void 0:o.sub),s=Object(n.a)(l,2),r=s[0],d=s[1],v=function(e,t){d(e.sub),a(Object(R.b)(e)),e.name===o.name&&t&&a(Object(R.b)({})),e.id!==(null===o||void 0===o?void 0:o.id)&&a(Object(R.c)({}))},E=function(e){return e.items.map((function(e){var a=o.name===e.name||t.pathname.includes(e.to);return i.a.createElement(y,{key:e.id,item:e,listSub:r,handleClickItem:v,menuClicking:o,isActive:a,location:t})}))};return i.a.createElement("div",{className:"menu"},i.a.createElement("h1",{className:"menu__head"},"\uc2e4\uc99d\ub2e8\uc9c0"),i.a.createElement("div",{className:"wrapper-menu"},i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===A||void 0===A?void 0:A.icon,alt:"menu"}),i.a.createElement("span",null,null===A||void 0===A?void 0:A.label))),i.a.createElement("ul",{className:"menu__list"},E(A)),i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===g||void 0===g?void 0:g.icon,alt:"menu"}),i.a.createElement("span",null,null===g||void 0===g?void 0:g.label))),i.a.createElement("ul",{className:"menu__list"},E(g)),i.a.createElement("div",{className:"menu__wraper-head"},i.a.createElement("p",{className:"menu__info"},i.a.createElement("img",{src:null===j||void 0===j?void 0:j.icon,alt:"menu"}),i.a.createElement("span",null,null===j||void 0===j?void 0:j.label))),i.a.createElement("ul",{className:"menu__list"},E(j)),i.a.createElement("div",{className:"logout"},i.a.createElement("div",{className:"name-user"},"\ub9c8\uc2a4\ud130\ub2d8"),i.a.createElement(D.a,{customClass:"btn-logout"},i.a.createElement("img",{src:m.a.btn_logout,alt:""}),i.a.createElement("div",null,"\ub85c\uadf8\uc544\uc6c3")))))}))),L=function(e){var t=e.children,a=e.isSearch,s=void 0!==a&&a,r=e.isSelect,m=void 0!==r&&r,u=e.isProcessing,d=void 0!==u&&u,v=Object(c.useState)(!1),E=Object(n.a)(v,2),b=E[0],_=E[1],f=Object(c.useRef)(null),O=Object(c.useRef)(null),p=Object(c.useRef)(null);o(f,(function(){b&&_(!1)}),{iconRef:O});var h,S="";return window.innerHeight<900&&(S="heightMenu"),h=s?i.a.createElement(N,{isSearch:!0}):m?i.a.createElement(N,{isSelect:!0}):i.a.createElement(N,null),i.a.createElement(i.a.Fragment,null,d&&i.a.createElement(l.a,null),i.a.createElement("div",{className:"wrapper-content ".concat(b?"open":"")},i.a.createElement("div",{className:"wrapper-mobile"},i.a.createElement("div",{className:"d-mobile btn-menu  ".concat(b?"show":""),onClick:function(){_(!b)},tabIndex:0,role:"menuitem",onKeyPress:function(){},ref:O},i.a.createElement("span",{className:"icon"}))),i.a.createElement("div",{className:"sidebar ".concat(b?"show":""," ").concat(S)},i.a.createElement(M,{innerRef:f})),i.a.createElement("div",{className:"main-content",ref:p},h,i.a.createElement("div",{className:"content"},i.a.createElement("div",null,t)))))};L.defaultProps={isSearch:!1,isSelect:!1,isProcessing:!1};t.a=L},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),i=a(166),o=function(e){var t=e.title,a=e.onClick,n=void 0===a?function(){}:a,o=e.className,l=void 0===o?"":o,s=e.id,r=e.descSub,m=void 0===r?"":r;return c.a.createElement("div",{id:s,className:"wrap-title ".concat(l)},c.a.createElement("div",{className:"wrap-title__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},c.a.createElement("img",{src:i.a.icon_title_header,alt:""}),c.a.createElement("div",{className:"wrap-title__header__name"},t,c.a.createElement("span",null,m))))};o.defaultProps={className:"",onClick:function(){},id:"",descSub:""},t.b=Object(n.memo)(o)},226:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(437),o=a(167),l=a(166),s=function(e){var t=e.title,a=void 0===t?"":t,n=e.children,s=e.animation,r=void 0!==s&&s,m=e.isOpen,u=e.size,d=e.handleClose,v=e.customClass,E=e.isShowIconClose,b=e.isShowHeader,_=e.isShowFooter,f=e.isShowTwoBtn,O=e.customClassButton,p=void 0===O?"":O,h=e.classNameBtnLeft,S=void 0===h?"":h,N=e.textBtnLeft,T=void 0===N?"":N,C=e.classNameBtnRight,A=void 0===C?"":C,j=e.textBtnRight,g=void 0===j?"OK":j,R=e.handleSubmit,I=void 0===R?function(){}:R,w=e.isDisabledButton,k=e.handleCloseIcon,P=void 0===k?function(){}:k;return c.a.createElement(i.a,{animation:r,onHide:function(){return!0},show:m,size:u,className:v},E&&c.a.createElement("div",{className:"modal-content__iconClose",onClick:P,role:"button",tabIndex:0,onKeyUp:P},c.a.createElement("img",{src:l.a.icon_close,alt:""})),b&&c.a.createElement("h3",{className:"modal-title"},a),c.a.createElement(i.a.Body,null,b?c.a.createElement("div",{className:"modal-body__has-header"},n):c.a.createElement("div",{className:"modal-body__no-header"},n)),_&&c.a.createElement(i.a.Footer,null,f?c.a.createElement("div",{className:"group-button"},c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(p," ").concat(S),onClick:I,isDisabled:w},T),c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(p," ").concat(A),onClick:d},g)):c.a.createElement(o.b,{type:"button",customClass:p,onClick:d},g)))};s.defaultProps={title:"",animation:!1,size:"",customClass:"",isShowIconClose:!1,isShowHeader:!1,isShowFooter:!1,isShowTwoBtn:!1,customClassButton:"",classNameBtnLeft:"",textBtnLeft:"",classNameBtnRight:"",textBtnRight:"OK",handleSubmit:function(){},isDisabledButton:!1,handleCloseIcon:function(){}},t.a=Object(n.memo)(s)},233:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=function(e){var t=e.labelRadio,a=e.name,n=void 0===a?"":a,i=e.isChecked,o=e.onChange,l=e.id,s=void 0===l?"":l,r=e.disabled,m=void 0!==r&&r;return c.a.createElement("div",{className:"wrap-radio"},c.a.createElement("label",{className:"custom-radio d-flex",htmlFor:s},c.a.createElement("input",{type:"radio",checked:"".concat(i?"checked":""),name:n,onChange:function(e){return o(e)},id:s,disabled:m}),c.a.createElement("span",{className:"checkmark"}),c.a.createElement("span",{className:"label"},t)))};i.defaultProps={name:"",disabled:!1,id:""},t.a=Object(n.memo)(i)},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n={EMAIL:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,PASSWORD:/^(?=.*[a-zA-Z])([A-Z]?)((?=.*\d)([!@#$%^&*()'"<>:;.,=-]?))(?!\s).{6,13}$/,NUMBER:/^[-]?(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,PHONE_NUMBER:/^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,USER_NAME:/^[0-9a-zA-Z]{3,20}$\S*$/,FLOAT_INPUT:/^[0-9.]*$/,VALIDATE_PASSWORD:/^[0-9a-zA-Z]{4,20}$\S*$/},c={EMAIL_FORMAT:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",EMAIL_REQUIRED:"Email does not exist.",NICK_NAME_REQUIRED:"Nickname does not exist.",PASSWORD_REQUIRED:"Password does not exist.",PASSWORD_FORMAT:"Up to 13 digits, including one special character. It doesn't fit",PASSWORD_NOT_MATCH:"The password you want to change does not match.",PASSWORD_CONFIRM_REQUIRED:"Password confirm does not exist.",EMAIL_NOT_EXSIST:"Please enter your email.",PASSWORD_INVALID:"Invalid password",ENQUIRY_TYPE_REQUIRED:"Enquiry Type does not exist.",TITLE_REQUIRED:"Title does not exist.",CONTENT_REQUIRED:"Content does not exist.",VERIFY_EMAIL:"Email authentication is not complete.<br /> Would you like me to resend you<br /> the authentication email?",UN_AUTHENTICATED:"Unauthenticated.",PHONE_NUMBER:"\uc22b\uc790 11\uc790\ub9ac\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",REQUIRED:"\uc774 \ud544\ub4dc\ub294 \ud544\uc218\uc785\ub2c8\ub2e4."},i=function(e,t){for(var a={},i=Object.keys(e),o=0,l=i.length;o<l;o+=1)for(var s=i[o],r=t[s],m=e[s],u="",d=0;d<r.length;d+=1){switch(r[d]){case"required":""!==m&&null!==m&&void 0!==m||(u=c.REQUIRED);break;case"email":n.EMAIL.test(m)||(u=c.EMAIL_FORMAT);break;case"phoneNumber":n.PHONE_NUMBER.test(m)||(u=c.PHONE_NUMBER);break;case"password":n.PASSWORD.test(m)||(u=c.PASSWORD_FORMAT)}u&&(a[s]=u)}return a}},426:function(e,t,a){"use strict";a.r(t);var n=a(54),c=a(44),i=a(165),o=a(0),l=a.n(o),s=a(175),r=a(29),m=a(176),u=a(171),d=a(168),v=a(166),E=a(226),b=a(233),_=a(167),f=a(256),O=a(9),p=a(11),h=a(8),S=a(56);t.default=function(){var e=Object(p.g)(),t=Object(r.b)(),a=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.account})),N=a.listCompany,T=a.listArea,C=a.listInverter,A=Object(r.c)((function(e){return e.operationStatus})),j=A.isProcessing,g=A.type,R=Object(o.useState)({isShow:!1,content:"\ud604\ud669\uc744 \ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),I=Object(i.a)(R,2),w=I[0],k=I[1],P=Object(o.useState)({typeEvent:"0",content:"",company:null,area:null,inverter:null}),y=Object(i.a)(P,2),D=y[0],M=y[1],L=Object(o.useState)({content:"",company:"",area:"",inverter:""}),U=Object(i.a)(L,2),B=U[0],x=U[1];Object(o.useEffect)((function(){t(O.h()),t(O.e())}),[]),Object(o.useEffect)((function(){var e,a;t(O.k({per_page:100,com_id:null===D||void 0===D||null===(e=D.company)||void 0===e?void 0:e.value,pos_id:null===D||void 0===D||null===(a=D.area)||void 0===a?void 0:a.value}))}),[null===D||void 0===D?void 0:D.company,null===D||void 0===D?void 0:D.area]),Object(o.useEffect)((function(){switch(g){case"operationStatus/addNewEventSuccess":e.push(h.a.OPERATION_STATUS_BY_COMPANY)}}),[g]);var K=D.typeEvent,H=D.content,Y=D.company,F=D.area,Q=D.inverter,W=function(e,t){switch(t){case"company":x(Object(c.a)({},B,{company:""})),M(Object(c.a)({},D,{company:e,inverter:""}));break;case"area":M(Object(c.a)({},D,{area:e,inverter:""})),x(Object(c.a)({},B,{area:""}));break;case"inverter":M(Object(c.a)({},D,{inverter:e})),x(Object(c.a)({},B,{inverter:""}));break;case"content":M(Object(c.a)({},D,{content:e}));break;default:M(Object(c.a)({},D,Object(n.a)({},t,e))),x(Object(c.a)({},B,Object(n.a)({},t,"")))}};return l.a.createElement(s.a,{isProcessing:j},l.a.createElement("div",{className:"content-wrap"},l.a.createElement(m.b,{title:"\uc2e4\uc99d\ub2e8\uc9c0 \uc6b4\uc601 \ud604\ud669",descSub:"\uc124\ube44 \uc774\ub825, \ubcf4\uc218 \uc774\ub825\uc744 \ub4f1\ub85d\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),l.a.createElement(u.b,{title:"\uc774\ubca4\ud2b8 \uc0c1\uc138 \ub0b4\uc6a9"}),l.a.createElement("div",{className:"table-form"},l.a.createElement("div",{className:"item-row d-flex"},l.a.createElement("div",{className:"colum-left"},"\ubd84\ub958"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("div",{className:"group-radio"},l.a.createElement(b.a,{onChange:function(){return M(Object(c.a)({},D,{typeEvent:"0"}))},isChecked:"0"===K,name:"typeEvent",labelRadio:"\uc124\ube44 \uc774\ub825",id:"event"}),l.a.createElement(b.a,{onChange:function(){return M(Object(c.a)({},D,{typeEvent:"1"}))},isChecked:"1"===K,labelRadio:"\ubcf4\uc218 \uc774\ub825",name:"typeEvent",id:"history"})))),l.a.createElement("div",{className:"item-row d-flex"},l.a.createElement("div",{className:"colum-left"},"\ubaa8\ub4c8\uc815\ubcf4"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("div",{className:"item-role"},l.a.createElement("div",{className:"group-select"},l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:N,onChange:function(e){return W(e,"company")},option:Y||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===B||void 0===B?void 0:B.company}),l.a.createElement("img",{src:v.a.icon_next,alt:""})),l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:T,onChange:function(e){return W(e,"area")},option:F||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===B||void 0===B?void 0:B.area}),l.a.createElement("img",{src:v.a.icon_next,alt:""})),l.a.createElement("div",{className:"group-item"},l.a.createElement(d.a,{placeholder:"\ubaa8\ub4c8 \uc120\ud0dd",listItem:C,onChange:function(e){return W(e,"inverter")},option:Q||null,noOptionsMessage:function(){return"\uc635\uc158 \uc5c6\uc74c"},errorMsg:null===B||void 0===B?void 0:B.inverter})))))),l.a.createElement("div",{className:"item-row d-flex mh-300"},l.a.createElement("div",{className:"colum-left"},"\ub0b4\uc6a9"),l.a.createElement("div",{className:"colum-right"},l.a.createElement("textarea",{placeholder:"",name:"content",rows:"12",maxLength:"5000",className:"form-control",value:H,onChange:function(e){return W(e.target.value,"content")}}),(null===B||void 0===B?void 0:B.content)&&l.a.createElement("p",{className:"input__error-msg"},null===B||void 0===B?void 0:B.content)))),l.a.createElement("div",{className:"group-btn-bottom"},l.a.createElement(_.b,{onClick:function(){return k(Object(c.a)({},w,{isShow:!0}))}},"\uc218\uc815 \uc644\ub8cc"),l.a.createElement(_.b,{onClick:function(){return e.push(h.a.OPERATION_STATUS_BY_COMPANY)}},"\ucde8\uc18c"))),l.a.createElement(E.a,{isOpen:w.isShow,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){return k(Object(c.a)({},w,{isShow:!1}))},handleClose:function(){k(Object(c.a)({},w,{isShow:!1}))},textBtnLeft:"\ud655\uc778",textBtnRight:"\ucde8\uc18c",isShowTwoBtn:!0,customClassButton:"btn-custom",handleSubmit:function(){return function(){var e,a,n={content:H,inverter:Q&&Q.label};a=Object(f.a)(n,{content:["required"],company:["required"],area:["required"],inverter:["required"]}),k(Object(c.a)({},w,{isShow:!1})),Object.keys(a).length>0?x(a):t(Object(S.a)({type:null===D||void 0===D?void 0:D.typeEvent,content:null===D||void 0===D?void 0:D.content,inverter_id:null===D||void 0===D||null===(e=D.inverter)||void 0===e?void 0:e.value}))}()}},null===w||void 0===w?void 0:w.content))}}}]);
//# sourceMappingURL=35.620de4a1.chunk.js.map