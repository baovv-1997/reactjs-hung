(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[37],{174:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(2),l=t.n(n),c=t(169),i=function(e){var a=e.title,t=e.onClick,n=void 0===t?function(){}:t,i=e.className,o=void 0===i?"":i,s=e.id,r=e.titleLight,m=void 0===r?"":r;return l.a.createElement("div",{id:s,className:"wrap-title-sub ".concat(o)},l.a.createElement("div",{className:"wrap-title-sub__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},l.a.createElement("img",{src:c.a.icon_arrow,alt:""}),l.a.createElement("div",{className:"wrap-title-sub__header__name"},a,l.a.createElement("span",null,m))))};i.defaultProps={className:"",onClick:function(){},titleLight:"",id:""},a.b=Object(n.memo)(i)},177:function(e,a,t){"use strict";var n=t(168),l=t(2),c=t.n(l),i=function(e,a,t){var n=Object.assign({},t);Object(l.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n.iconRef.current&&!n.iconRef.current.contains(t.target)&&a(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.addEventListener("touchstart",t)}}),[e,a,n.iconRef])},o=t(35),s=t(23),r=t(28),m=t(169),u=t(34),d=function(e,a){var t=Object(l.useState)(e),c=Object(n.a)(t,2),i=c[0],o=c[1];return Object(l.useEffect)((function(){var t=setTimeout((function(){o(e)}),a);return function(){clearTimeout(t)}}),[e,a]),i},v=t(6),_=function(e){var a=e.onClick,t=e.options,n=void 0===t?[]:t;return c.a.createElement("div",{className:"auto-suggest"},n.map((function(e,t){return c.a.createElement("p",{className:"auto-suggest__item",key:t,onClick:function(){return a(e)},role:"presentation"},e.label)})))};_.defaultProps={options:[]};var b=Object(l.memo)(_),E=function(e){var a=e.placeholder,t=e.handleIconClick,i=void 0===t?function(){}:t,o=e.customClass,s=void 0===o?"":o,r=e.value,u=void 0===r?"":r,d=e.onChange,v=void 0===d?function(){}:d,_=e.setSearchTerm,E=void 0===_?function(){}:_,p=e.options,f=void 0===p?[]:p,h=e.handleKeyDown,O=e.isSpinner,N=void 0!==O&&O,S=Object(l.useState)(!1),g=Object(n.a)(S,2),C=g[0],j=g[1],T=Object(l.useRef)(null),k=function(e){var a=T.current;a&&!a.contains(e.target)&&j(!1)};Object(l.useEffect)((function(){return window.addEventListener("mousedown",k),function(){window.removeEventListener("mousedown",k)}}));return c.a.createElement("div",{ref:T,className:"search ".concat(s)},c.a.createElement("input",{className:"search__input",onClick:function(){return j(!0)},placeholder:a,value:u,onChange:v,onKeyPress:function(e){return h(e)}}),N&&c.a.createElement("div",{className:"spinner"}),c.a.createElement("img",{src:m.a.icon_search,alt:"Icon Search",className:"search__icon",onClick:i,role:"presentation"}),C&&f.length?c.a.createElement(b,{search:u,onClick:function(e){console.log(e,"searchValue"),E(e),j(!1)},options:f}):null)};E.defaultProps={placeholder:"",customClass:"",value:"",onChange:function(){},setSearchTerm:function(){},handleIconClick:function(){},options:[],isSpinner:!1};var p=Object(l.memo)(E),f=t(171),h=function(e){var a=e.isShow,t=void 0!==a&&a,n=e.wrapperRef;return c.a.createElement("div",{className:"modal__event ".concat(t?"show-modal-event":""),ref:n},c.a.createElement("div",{className:"modal__event-title"},"\uc774\ubca4\ud2b8 \uc54c\ub9bc"),c.a.createElement("div",{className:"modal__event__group-content"},c.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),c.a.createElement("p",{className:"modal__event__event-name"},c.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")),c.a.createElement("div",{className:"modal__event__group-content"},c.a.createElement("div",{className:"modal__event__type-event"},"\uc2e4\uc99d\ub2e8\uc9c0"),c.a.createElement("p",{className:"modal__event__event-name"},c.a.createElement("span",null,"[\uce21\uc815 \ubb38\uc81c \ubc1c\uc0dd] "),"\uc625\ud1a0\ub07c\uc774\ubbf8\uc9d5")))};h.defaultProps={isShow:!1};var O=h,N=t(179),S=function(e){var a=e.isSearch,t=void 0!==a&&a,o=e.isSelect,_=void 0!==o&&o,b=e.eventCount,E=void 0===b?0:b,h=Object(u.b)(),S=Object(u.c)((function(e){return null===e||void 0===e?void 0:e.main})),g=S.listPositions,C=S.optionsCompany,j=S.optionsPosition,T=S.isSpinner,k=Object(l.useState)(null),w=Object(n.a)(k,2),A=w[0],I=w[1],P=Object(l.useState)(!1),y=Object(n.a)(P,2),R=y[0],L=y[1],x=Object(l.useState)({label:"",value:"",key:"",id:""}),B=Object(n.a)(x,2),D=B[0],K=B[1],M=Object(l.useState)({isShow:!1,content:""}),F=Object(n.a)(M,2),U=F[0],W=F[1],Y=Object(l.useRef)(null),H=Object(l.useRef)(null),V=d(D.label,500);Object(l.useEffect)((function(){V&&(h(Object(v.k)({keyword:V})),h(Object(v.w)({keyword:V})))}),[V]),Object(l.useEffect)((function(){var e=g.findIndex((function(e){return null===e||void 0===e?void 0:e.label.includes("\ubcf8\uad00 \ub0a8\uce21")}));I(g[e])}),[g]);var z=function(){switch(null===D||void 0===D?void 0:D.key){case"posId":console.log("getposId"),h(Object(v.h)({type:"summary",pos_id:D.id}));break;case"comId":h(Object(v.e)({type:"summary",com_id:D.id}));break;default:W(Object(r.a)({},U,{isShow:!0,content:"\uad6c\uc5ed\uba85\uc774\ub098 \uc5c5\uccb4\uba85\uc744 \uc815\ud655\ud788 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))}};return i(Y,(function(){R&&L(!1)}),{iconRef:H}),c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},t?c.a.createElement(p,{placeholder:"\ud68c\uc0ac\uba85\uc774\ub098 \uad6c\uc5ed\uba85\uc73c\ub85c \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",value:D.label,onChange:function(e){var a=e.target.value;K({label:a})},setSearchTerm:K,options:[].concat(Object(s.a)(j),Object(s.a)(C)),handleIconClick:function(){z()},handleKeyDown:function(e){"Enter"===e.key&&z()},isSpinner:T}):"",_?c.a.createElement(f.a,{placeholder:"List Selects",listItem:g,onChange:function(e){I(e)},option:A,disabled:!1,isSearchable:!1,blurInputOnSelect:!1,customClass:"header__select"}):""),c.a.createElement("div",{className:"header__right"},c.a.createElement("div",{className:"header__event"},c.a.createElement("img",{src:m.a.icon_event,alt:"Icon Event",className:"header__icon",onClick:function(){return L(!R)},role:"presentation",ref:H}),E>0?c.a.createElement("span",{className:"header__notification"},E):""),c.a.createElement("div",{className:"header__label-event"},c.a.createElement("span",{className:"header__label-content"},"\uc774\ubca4\ud2b8\ubc1c\uc0dd"),c.a.createElement(O,{isShow:R,wrapperRef:Y}))),c.a.createElement(N.a,{isOpen:U.isShow,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){return W(Object(r.a)({},U,{isShow:!1,content:""}))},handleClose:function(){return W(Object(r.a)({},U,{isShow:!1,content:""}))},textBtnRight:"\ud655\uc778"},U.content))};S.defaultProps={isSearch:!1,isSelect:!1,eventCount:0};var g=Object(l.memo)(S),C=t(13),j=t(8),T={id:1,label:"\uc2e4\uc99d\ub2e8\uc9c0",icon:m.a.iconGraph,to:j.a.ROOT,items:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",sub:[{id:1,name:"\ud1b5\ud569 \ub300\uc2dc\ubcf4\ub4dc",to:j.a.ROOT},{id:2,name:"\uad6c\uc5ed \ub300\uc2dc\ubcf4\ub4dc",to:j.a.DASHBOARD_AREA},{id:3,name:"\uc5c5\uccb4 \ub300\uc2dc\ubcf4\ub4dc",to:j.a.DASHBOARD_COMPANY}]},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:j.a.STATUS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:j.a.STATUS_COMPANY_BY_AREA}]},{id:2,name:"\uc6b4\uc601 \ud604\ud669",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud604\ud669",to:j.a.OPERATION_STATUS_BY_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud604\ud669",to:j.a.OPERATION_STATUS_BY_AREA}]}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:j.a.STATISTICS_DEVELOP},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:j.a.STATISTICS_DEVELOP_AREA}]},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",sub:[{id:1,name:"\uc5c5\uccb4\ubcc4 \ud1b5\uacc4",to:j.a.OPERATION_STATISTICS_COMPANY},{id:2,name:"\uad6c\uc5ed\ubcc4 \ud1b5\uacc4",to:j.a.OPERATION_STATISTICS_AREA}]}]}]},k={id:2,label:"\uae30\uae30 \uad00\ub9ac",icon:m.a.setup,items:[{id:1,name:"\uacc4\uc815 \uad00\ub9ac",to:"/accounts"},{id:2,name:"\uae30\uae30 \uad00\ub9ac",to:"/devices"}]},w={id:1,label:"\uc2e4\uc99d\ud14c\uc2a4\ud2b8",icon:m.a.mockUp,items:[{id:1,name:"\ud14c\uc2a4\ud2b8(\ubaa9\uc5c5)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:j.a.TEST_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:j.a.TEST_MOCKUP_STATUS},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:j.a.TEST_MOCKUP_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:j.a.TEST_MOCKUP_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:j.a.TEST_MOCKUP_STATISTICS_OPERATION}]}]},{id:2,name:"\ud14c\uc2a4\ud2b8(\uc2e4\uc99d\ub2e8\uc9c0)",sub:[{id:1,name:"\ub300\uc2dc\ubcf4\ub4dc",to:j.a.SOLAR_DASHBOARD},{id:2,name:"\ud604\ud669",sub:[{id:1,name:"\ubc1c\uc804 \ud604\ud669",to:j.a.TEST_SOLAR_STATUS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud604\ud669",to:j.a.TEST_SOLAR_STATUS_OPERATION}]},{id:3,name:"\ud1b5\uacc4",sub:[{id:1,name:"\ubc1c\uc804 \ud1b5\uacc4",to:j.a.TEST_SOLAR_STATISTICS_DEVELOP},{id:2,name:"\uc6b4\uc601 \ud1b5\uacc4",to:j.a.TEST_SOLAR_STATISTICS_OPERATION}]}]}]},A=t(56),I=t(170),P=t(175),y=t(47),R=t(176),L=Object(l.memo)((function(e){var a=e.itemSub,t=e.listNestSub,i=e.isActiveNestSub,o=e.handleClickItemSub,s=e.location,r=Object(l.useState)({}),m=Object(n.a)(r,2),u=m[0],d=m[1],v=t&&t.length>0&&t.map((function(e){var a=e.name===u.name||s.pathname.includes(e.to);return c.a.createElement("li",{className:"item",onClick:function(a){return function(e,a){e.stopPropagation(),d(a)}(a,e)},tabIndex:0,role:"menuitem",onKeyPress:function(){},key:e.id},c.a.createElement(y.b,{to:(null===e||void 0===e?void 0:e.to)||"#",className:"item__link item-link-nest-sub ".concat(a?"active-link":"")},c.a.createElement("p",{className:"item__link__label item-link-label-nest-sub"},e.name)))})),_=a.to,b=a.name,E=a.sub;return c.a.createElement("li",{className:"item",onClick:function(e){return o(e,a,i)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},c.a.createElement(y.b,{to:_||"#",className:"item__link ".concat(i?"active":""," item-link-sub ").concat(i&&!E?"active-link":"")},c.a.createElement("p",{className:"item__link__label item-link-label-sub"},b),E&&c.a.createElement(P.a,{icon:R.a})),c.a.createElement("ul",{className:"menu__listsub ".concat(i?"open":"")},v))})),x=Object(l.memo)((function(e){var a=e.item,t=e.listSub,i=e.handleClickItem,o=e.isActive,s=e.location,r=Object(u.b)(),m=Object(u.c)((function(e){return e.commons.subMenuClicking})),d=a.to,v=a.name,_=a.sub,b=Object(l.useState)(null===m||void 0===m?void 0:m.sub),E=Object(n.a)(b,2),p=E[0],f=E[1],h=Object(l.useState)(!1),O=Object(n.a)(h,2),N=O[0],S=O[1],g=function(e,a,t){e.stopPropagation(),S(t),r(Object(A.f)(a)),f(a.sub),console.log("itemSub",a),a.name===m.name&&t&&Object(A.f)({})};console.log("listSub",t);var C=t&&t.length>0&&t.map((function(e){var t=m.name===e.name||s.pathname.includes(a.to);return c.a.createElement(L,{key:e.id,itemSub:e,nestSub:e.sub,handleClickItemSub:g,listNestSub:p,isActiveNestSub:t,location:s})}));return c.a.createElement("li",{className:"item",onClick:function(){return i(a,o)},tabIndex:0,role:"menuitem",onKeyPress:function(){}},c.a.createElement(y.b,{to:d||"#",className:"item__link ".concat(o?"active":""," ").concat(o&&!_?"active-link":"")},c.a.createElement("p",{className:"item__link__label"},v),_&&c.a.createElement(P.a,{icon:R.a})),c.a.createElement("ul",{className:"menu__listsub ".concat(o||N?"open":"")},C))})),B=Object(C.i)(Object(l.memo)((function(e){var a=e.location,t=Object(u.b)(),n=Object(u.c)((function(e){var a;return null===e||void 0===e||null===(a=e.commons)||void 0===a?void 0:a.menuClicking})),l=function(e,a){t(Object(A.e)(e)),e.name===n.name&&a&&t(Object(A.e)({})),e.id!==(null===n||void 0===n?void 0:n.id)&&t(Object(A.f)({}))},i=function(e){return e.items.map((function(e){var t=n.name===e.name||a.pathname.includes(e.to);return c.a.createElement(x,{key:e.id,item:e,listSub:null===e||void 0===e?void 0:e.sub,handleClickItem:l,menuClicking:n,isActive:t,location:a})}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"wrap-menu"},c.a.createElement("h1",{className:"menu__head"},"\uc2e4\uc99d\ub2e8\uc9c0"),c.a.createElement("div",{className:"wrapper-menu"},c.a.createElement("div",{className:"menu__wraper-head"},c.a.createElement("p",{className:"menu__info"},c.a.createElement("img",{src:null===T||void 0===T?void 0:T.icon,alt:"menu"}),c.a.createElement("span",null,null===T||void 0===T?void 0:T.label))),c.a.createElement("ul",{className:"menu__list"},i(T)),c.a.createElement("div",{className:"menu__wraper-head"},c.a.createElement("p",{className:"menu__info"},c.a.createElement("img",{src:null===w||void 0===w?void 0:w.icon,alt:"menu"}),c.a.createElement("span",null,null===w||void 0===w?void 0:w.label))),c.a.createElement("ul",{className:"menu__list"},i(w)),c.a.createElement("div",{className:"menu__wraper-head"},c.a.createElement("p",{className:"menu__info"},c.a.createElement("img",{src:null===k||void 0===k?void 0:k.icon,alt:"menu"}),c.a.createElement("span",null,null===k||void 0===k?void 0:k.label))),c.a.createElement("ul",{className:"menu__list"},i(k)))),c.a.createElement("div",{className:"logout"},c.a.createElement("div",{className:"name-user"},"\ub9c8\uc2a4\ud130\ub2d8"),c.a.createElement(I.a,{customClass:"btn-logout"},c.a.createElement("img",{src:m.a.btn_logout,alt:""}),c.a.createElement("div",null,"\ub85c\uadf8\uc544\uc6c3")))))}))),D=function(e){var a=e.children,t=e.isSearch,s=void 0!==t&&t,r=e.isSelect,m=void 0!==r&&r,u=e.isProcessing,d=void 0!==u&&u,v=Object(l.useState)(!1),_=Object(n.a)(v,2),b=_[0],E=_[1],p=Object(l.useRef)(null),f=Object(l.useRef)(null),h=Object(l.useRef)(null);i(p,(function(){b&&E(!1)}),{iconRef:f});var O,N="";return window.innerHeight<900&&(N="heightMenu"),O=s?c.a.createElement(g,{isSearch:!0}):m?c.a.createElement(g,{isSelect:!0}):c.a.createElement(g,null),c.a.createElement(c.a.Fragment,null,d&&c.a.createElement(o.a,null),c.a.createElement("div",{className:"wrapper-content ".concat(b?"open":"")},c.a.createElement("div",{className:"wrapper-mobile"},c.a.createElement("div",{className:"d-mobile btn-menu  ".concat(b?"show":""),onClick:function(){E(!b)},tabIndex:0,role:"menuitem",onKeyPress:function(){},ref:f},c.a.createElement("span",{className:"icon"}))),c.a.createElement("div",{className:"sidebar ".concat(b?"show":""," ").concat(N)},c.a.createElement(B,{innerRef:p})),c.a.createElement("div",{className:"main-content",ref:h},O,c.a.createElement("div",{className:"content"},c.a.createElement("div",null,a)))))};D.defaultProps={isSearch:!1,isSelect:!1,isProcessing:!1};a.a=D},180:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(2),l=t.n(n),c=t(169),i=function(e){var a=e.title,t=e.onClick,n=void 0===t?function(){}:t,i=e.className,o=void 0===i?"":i,s=e.id,r=e.descSub,m=void 0===r?"":r;return l.a.createElement("div",{id:s,className:"wrap-title ".concat(o)},l.a.createElement("div",{className:"wrap-title__header",onClick:n,onKeyPress:function(){},role:"button",tabIndex:"0"},l.a.createElement("img",{src:c.a.icon_title_header,alt:""}),l.a.createElement("div",{className:"wrap-title__header__name"},a,l.a.createElement("span",null,m))))};i.defaultProps={className:"",onClick:function(){},id:"",descSub:""},a.b=Object(n.memo)(i)},305:function(e,a,t){"use strict";var n=t(2),l=t.n(n),c=t(339),i=t.n(c),o=function(e){var a=e.placeholder,t=void 0===a?"":a,n=e.value,c=void 0===n?"":n,o=e.errorMsg,s=void 0===o?"":o,r=e.label,m=void 0===r?"":r,u=e.disabled,d=void 0!==u&&u,v=e.readOnly,_=void 0!==v&&v,b=e.type,E=void 0===b?"text":b,p=e.onBlur,f=void 0===p?function(){}:p,h=e.onBlurWrapper,O=void 0===h?function(){}:h,N=e.onFocusWrapper,S=void 0===N?function(){}:N,g=e.onClickWrapper,C=void 0===g?function(){}:g,j=e.onChange,T=void 0===j?function(){}:j,k=e.customClassName,w=void 0===k?null:k,A=e.customClassWrap,I=void 0===A?null:A,P=e.customClassLabel,y=void 0===P?null:P,R=e.onFocus,L=void 0===R?function(){}:R,x=e.onKeyPress,B=void 0===x?function(){}:x,D=e.onPaste,K=void 0===D?function(){}:D,M=e.variant,F=void 0===M?"outline":M,U=e.name,W=void 0===U?"":U,Y=e.request,H=void 0!==Y&&Y,V=e.customClass,z=void 0===V?"":V,q=e.innerRef,J=void 0===q?null:q,G=e.pattern,Q=void 0===G?"":G,X=e.options,Z=e.maxLength,$=void 0===Z?"":Z,ee=e.autocomplete,ae=void 0===ee?"":ee,te=e.autoFocus;return l.a.createElement("div",{className:"input__wrapper ".concat("outline"!==F?" input__wrapper--".concat(F):""),onBlur:function(e){return O(e)},onFocus:function(e){return S(e)},onClick:function(e){return C(e)},onKeyUp:function(){}},!!m&&l.a.createElement("p",{className:"".concat(y," input__label")},m,H&&l.a.createElement("span",{className:"request"},"*")),l.a.createElement("div",{className:"input__box ".concat(I)},l.a.createElement(i.a,{placeholder:t,options:X,type:E,value:c,disabled:d,className:"input-change ".concat(z.length>0?z:""," ").concat("outline"!==F?"input--".concat(F):""," ").concat(w," ").concat(c?"":"no-value"),ref:J,onPaste:K,onKeyPress:B,readOnly:_,onBlur:function(e){return f(e)},onFocus:function(e){return L(e)},onChange:function(e){return T(e)},autoCapitalize:"none",name:W,maxLength:$,pattern:Q,autoComplete:ae,autoFocus:te})),s&&l.a.createElement("p",{className:"error-msg"},s))};o.defaultProps={placeholder:"",value:"",errorMsg:"",label:"",disabled:!1,readOnly:!1,type:"text",onBlur:function(){},onBlurWrapper:function(){},onFocusWrapper:function(){},onClickWrapper:function(){},onFocus:function(){},onChange:function(){},onKeyPress:function(){},onPaste:function(){},maxLength:"",variant:"outline",customClassName:"",customClassLabel:"",customClassWrap:"",name:"",request:!1,innerRef:null,customClass:"",pattern:"",autocomplete:"",autoFocus:!1},a.a=Object(n.memo)(o)},459:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),c=t(34),i=t(180),o=t(174),s=t(177),r=t(168),m=t(31),u=t(170),d=t(179),v=t(8),_=t(305),b=t(57),E=Object(n.memo)((function(e){var a,t,i=e.data,o=e.history,s=Object(c.b)(),E=Object(n.useState)(null===i||void 0===i?void 0:i.ds_manager),p=Object(r.a)(E,2),f=p[0],h=p[1],O=Object(n.useState)(null===i||void 0===i?void 0:i.ds_incidence_angle),N=Object(r.a)(O,2),S=N[0],g=N[1],C=Object(n.useState)(null===i||void 0===i?void 0:i.ds_manager_phone),j=Object(r.a)(C,2),T=j[0],k=j[1],w=Object(n.useState)(null===i||void 0===i?void 0:i.ds_azimuth_angle),A=Object(r.a)(w,2),I=A[0],P=A[1],y=Object(n.useState)(!1),R=Object(r.a)(y,2),L=R[0],x=R[1],B=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"managerName":h(n);break;case"incidenceAngle":g(n);break;case"phoneManager":k(n);break;case"azimuthAngle":P(n)}};Object(n.useEffect)((function(){h(null===i||void 0===i?void 0:i.ds_manager),g(null===i||void 0===i?void 0:i.ds_incidence_angle),k(null===i||void 0===i?void 0:i.ds_manager_phone),P(null===i||void 0===i?void 0:i.ds_azimuth_angle)}),[i]);return l.a.createElement("div",null,l.a.createElement("div",{className:"device-detail__form"},l.a.createElement("div",{className:"col-item col-2 left"},l.a.createElement("div",{className:"cell"},"NO"),l.a.createElement("div",{className:"cell"},"\uad6c\ubd84"),0!==parseInt(null===i||void 0===i?void 0:i.ds_type,10)&&l.a.createElement("div",{className:"cell"},"\uc124\uce58\uc704\uce58"),l.a.createElement("div",{className:"cell"},"\ub2f4\ub2f9\uc790"),l.a.createElement("div",{className:"cell"},"\ubaa8\ub4c8 \ucd9c\ub825"),l.a.createElement("div",{className:"cell"},"\uc785\uc0ac\uac01")),l.a.createElement("div",{className:"col-item col-4"},l.a.createElement("div",{className:"cell"},l.a.createElement("input",{disabled:!0,value:null===i||void 0===i?void 0:i.no})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{disabled:!0,value:Object(m.g)(null===i||void 0===i?void 0:i.ds_type)})),0!==parseInt(null===i||void 0===i?void 0:i.ds_type,10)&&l.a.createElement("div",{className:"cell"},l.a.createElement("input",{disabled:!0,value:null===i||void 0===i||null===(a=i.position)||void 0===a?void 0:a.pos_name})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{name:"managerName",value:f,onChange:function(e){return B(e)}})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{disabled:!0,value:"".concat(null===i||void 0===i?void 0:i.ds_max_power,"v")})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{name:"incidenceAngle",value:S,onChange:function(e){return B(e)},maxLength:"11"}))),l.a.createElement("div",{className:"col-item col-2 right"},l.a.createElement("div",{className:"cell"},"\uc124\uce58\uc77c"),l.a.createElement("div",{className:"cell"},"\uc5c5\uccb4\uba85"),0!==parseInt(null===i||void 0===i?void 0:i.ds_type,10)&&l.a.createElement("div",{className:"cell"},"\ubaa8\ub4c8\uba85"),l.a.createElement("div",{className:"cell"},"\ub2f4\ub2f9\uc790 \uc804\ud654\ubc88\ud638"),l.a.createElement("div",{className:"cell"},"\ubaa8\ub4c8 \uc0c9\uc0c1"),l.a.createElement("div",{className:"cell"},"\ubc29\uc704\uac01")),l.a.createElement("div",{className:"col-item col-4"},l.a.createElement("div",{className:"cell"},l.a.createElement("input",{value:null===i||void 0===i?void 0:i.ds_install_date,disabled:!0})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{value:null===i||void 0===i||null===(t=i.company)||void 0===t?void 0:t.com_name,disabled:!0})),0!==parseInt(null===i||void 0===i?void 0:i.ds_type,10)&&l.a.createElement("div",{className:"cell"},l.a.createElement("input",{value:null===i||void 0===i?void 0:i.ds_name,disabled:!0})),l.a.createElement("div",{className:"cell justify-content-start"},l.a.createElement(_.a,{className:"input-field",value:T||"",name:"phone",options:{numericOnly:!0,delimiters:["-","-"],blocks:[3,4,4]},onChange:function(e){return B(e)},pattern:"[0-9]*",inputMode:"numeric",customClass:"custom-input"})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{value:null===i||void 0===i?void 0:i.ds_color,disabled:!0})),l.a.createElement("div",{className:"cell"},l.a.createElement("input",{value:I,name:"azimuthAngle",onChange:function(e){return B(e)},maxLength:"11"})))),l.a.createElement("div",{className:"device-detail__btn-group"},l.a.createElement(u.b,{customClass:"btn-modify",onClick:function(){s(Object(b.h)({id:i.id,manager:f,incidence_angle:S,manager_phone:T&&T.replace(/-/g,""),azimuth_angle:I,install_date:null===i||void 0===i?void 0:i.ds_install_date,color:null===i||void 0===i?void 0:i.ds_color,com_id:null===i||void 0===i?void 0:i.com_id,max_power:null===i||void 0===i?void 0:i.ds_max_power,name:null===i||void 0===i?void 0:i.ds_name,pos_id:null===i||void 0===i?void 0:i.pos_id,type:null===i||void 0===i?void 0:i.ds_type}))}},"\uc218\uc815 \uc644\ub8cc"),l.a.createElement(u.b,{customClass:"btn-cancel",onClick:function(){x(!0)}},"\ubaa9\ub85d")),l.a.createElement(d.a,{isOpen:L,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){x(!1)},handleClose:function(){x(!1)},textBtnLeft:"\ud655\uc778",textBtnRight:"\ucde8\uc18c",isShowTwoBtn:!0,customClassButton:"btn-custom",handleSubmit:function(){o.push(v.a.DEVICE)}},"\ucde8\uc18c \uc2dc \uc218\uc815 \ub0b4\uc5ed\uc740 \uc804\ubd80 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \uc815\ub9d0 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))}));a.default=function(e){var a=e.match,t=e.history,r=Object(c.b)(),m=Object(c.c)((function(e){var a;return null===e||void 0===e||null===(a=e.device)||void 0===a?void 0:a.deviceDetail})),u=Object(c.c)((function(e){var a;return null===e||void 0===e||null===(a=e.device)||void 0===a?void 0:a.isLoading})),d=a.params.id;return Object(n.useEffect)((function(){r(Object(b.c)({id:d}))}),[d]),l.a.createElement(s.a,{isProcessing:u},l.a.createElement("div",{className:"wrapper-device"},l.a.createElement("div",{className:"wrapper-device__head-menu"},l.a.createElement(i.a,{title:"\uae30\uae30 \uad00\ub9ac",descSub:"\ub4f1\ub85d\ub418\uc5b4\uc788\ub294 \uae30\uae30\uc815\ubcf4\ub4e4\uc744 \uad00\ub9ac\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})),l.a.createElement("div",{className:"device-detail"},l.a.createElement(o.a,{title:"\uacc4\uc815 \uc815\ubcf4"}),l.a.createElement(E,{data:m,history:t}))))}}}]);
//# sourceMappingURL=37.44a348a6.chunk.js.map