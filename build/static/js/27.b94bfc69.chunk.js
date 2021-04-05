(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[27],{235:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(2),c=t.n(n),i=t(731),o=t(63),l=t(31),r=function(e){var a=e.title,t=void 0===a?"":a,n=e.children,r=e.animation,s=void 0!==r&&r,m=e.isOpen,u=e.size,d=e.handleClose,v=e.customClass,_=e.isShowIconClose,p=e.isShowHeader,E=e.isShowFooter,f=e.isShowTwoBtn,b=e.customClassButton,h=void 0===b?"":b,y=e.classNameBtnLeft,N=void 0===y?"":y,O=e.textBtnLeft,C=void 0===O?"":O,g=e.classNameBtnRight,j=void 0===g?"":g,w=e.textBtnRight,k=void 0===w?"OK":w,S=e.handleSubmit,I=void 0===S?function(){}:S,P=e.isDisabledButton,B=e.handleCloseIcon,R=void 0===B?function(){}:B;return c.a.createElement(i.a,{animation:s,onHide:function(){return!0},show:m,size:u,className:v},_&&c.a.createElement("div",{className:"modal-content__iconClose",onClick:R,role:"button",tabIndex:0,onKeyUp:R},c.a.createElement("img",{src:l.a.icon_close,alt:""})),p&&c.a.createElement("h3",{className:"modal-title"},t),c.a.createElement(i.a.Body,null,p?c.a.createElement("div",{className:"modal-body__has-header"},n):c.a.createElement("div",{className:"modal-body__no-header"},n)),E&&c.a.createElement(i.a.Footer,null,f?c.a.createElement("div",{className:"group-button"},c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(h," ").concat(N),onClick:I,isDisabled:P},C),c.a.createElement(o.b,{type:"button",customClass:"button--half ".concat(h," ").concat(j),onClick:d},k)):c.a.createElement(o.b,{type:"button",customClass:h,onClick:d},k)))};r.defaultProps={title:"",animation:!1,size:"",customClass:"",isShowIconClose:!1,isShowHeader:!1,isShowFooter:!1,isShowTwoBtn:!1,customClassButton:"",classNameBtnLeft:"",textBtnLeft:"",classNameBtnRight:"",textBtnRight:"OK",handleSubmit:function(){},isDisabledButton:!1,handleCloseIcon:function(){}},a.b=Object(n.memo)(r)},398:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(2),c=t.n(n),i=t(31),o=t(38),l=function(e){var a=e.name,t=void 0===a?"":a,n=e.specifications,i=void 0===n?"":n,l=e.unit,r=void 0===l?"":l;return c.a.createElement("div",{className:"card__item"},c.a.createElement("p",{className:"card__item__name"},t),c.a.createElement("div",{className:"card__item__group-specifications"},c.a.createElement("span",{className:"card__item__number"},Object(o.a)(i)),c.a.createElement("span",{className:"card__item__unit"},r)))};l.defaultProps={name:"",specifications:"",unit:""};var r=l,s=function(e){var a=e.isLogoTop,t=void 0!==a&&a,n=e.title,o=void 0===n?"":n,l=e.listCompany,s=void 0===l?[]:l,m=e.logoClick,u=e.titleClick,d=e.onClick,v=e.customClass,_=void 0===v?"":v,p=e.isCardCompany,E=void 0!==p&&p,f=e.isEvent,b=void 0!==f&&f,h=e.amountElectricDay,y=void 0===h?0:h,N=e.amountElectricMonth,O=void 0===N?0:N,C=e.electricRealtime,g=void 0===C?0:C,j=e.ratePower,w=void 0===j?0:j,k=e.cumulativeElectric,S=void 0===k?0:k;return c.a.createElement("div",{className:"card ".concat(_),onClick:d,role:"presentation"},t&&c.a.createElement("div",{className:"card__company card__company--top"},c.a.createElement("img",{src:s.logo,alt:"logocompany",className:"card__company__item"})),c.a.createElement("div",{className:"card__header ".concat(b?"header-event":"")},c.a.createElement("p",{className:"card__title ".concat(b?"card__event":""),onClick:u,role:"presentation"},o),b&&c.a.createElement("img",{src:i.a.icon_event_card,alt:"",className:"card__logo-event"})),c.a.createElement("div",{className:E?"card__body card__body--company":"card__body"},c.a.createElement("div",{className:"card__list"},c.a.createElement(r,{name:"\uc2e4\uc2dc\uac04 \ubc1c\uc804\ub7c9",specifications:g,unit:"kWh"}),c.a.createElement(r,{name:"\uc131\ub2a5\ube44",specifications:w,unit:"%"}),c.a.createElement(r,{name:"\uae08\uc77c",specifications:y,unit:"kWh"}),c.a.createElement(r,{name:"\uae08\uc6d4",specifications:O,unit:"kWh"}),c.a.createElement(r,{name:"\ub204\uc801\ubc1c\uc804\ub7c9",specifications:S,unit:"MW"})),!t&&c.a.createElement("div",{className:"card__company"},s.map((function(e){var a;return c.a.createElement("img",{key:e.id,src:null===e||void 0===e||null===(a=e.com_logo_path)||void 0===a?void 0:a.thumbnail,alt:"logocompany",className:"card__company__item",onClick:function(){return m(null===e||void 0===e?void 0:e.id)},role:"presentation"})})))))};s.defaultProps={title:"",listCompany:[],isLogoTop:!1,customClass:"",isCardCompany:!1,isEvent:!1,amountElectricDay:0,amountElectricMonth:0,electricRealtime:0,ratePower:0,cumulativeElectric:0};Object(n.memo)(s)},486:function(e,a,t){"use strict";var n=t(2),c=t.n(n),i=t(38),o=t(31),l=function(e){var a=e.radiance,t=void 0===a?0:a,n=e.temperature,l=void 0===n?0:n;return c.a.createElement("div",{className:"vitual-data main-card"},c.a.createElement("div",{className:"vitual-data__header main-card__header"},c.a.createElement("div",{className:"vitual-data__title main-card__title"},"\uae30\uc0c1\ub370\uc774\ud130")),c.a.createElement("div",{className:"vitual-data__body main-card__body"},c.a.createElement("div",{className:"vitual-data__item"},c.a.createElement("div",{className:"vitual-data__group-name"},c.a.createElement("p",{className:"vitual-data__name"},"\ud604\uc7ac \uc77c\uc0ac\ub7c9"),c.a.createElement("p",{className:"vitual-data__unit"},"W/\u33a1")),c.a.createElement("div",{className:"vitual-data__param"},c.a.createElement("img",{src:o.a.motion_weather_blue,alt:"motion"}),c.a.createElement("p",null,Object(i.a)(t)))),c.a.createElement("div",{className:"vitual-data__item"},c.a.createElement("div",{className:"vitual-data__group-name"},c.a.createElement("p",{className:"vitual-data__name"},"\uc628\ub3c4"),c.a.createElement("p",{className:"vitual-data__unit"},"\u2103")),c.a.createElement("div",{className:"vitual-data__param"},l<0?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:o.a.motion_weather_blue,alt:"motion"}),c.a.createElement("p",null,Object(i.a)(l))):c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:o.a.motion_weather_orange,alt:"motion"}),c.a.createElement("p",{className:"color-orange"},Object(i.a)(l)))))))};l.defaultProps={radiance:0,temperature:0},a.a=Object(n.memo)(l)},487:function(e,a,t){"use strict";var n=t(2),c=t.n(n),i=t(296);a.a=function(e){var a=null===e||void 0===e?void 0:e.measure;return c.a.createElement("div",{className:"weekly-electric main-card"},c.a.createElement("div",{className:"weekly-electric__header main-card__header"},c.a.createElement("div",{className:"weekly-electric__title main-card__title"},"\uc8fc\uac04 \ubc1c\uc804 \ud604\ud669"),c.a.createElement("div",{className:"weekly-electric__unit main-card__unit"},"kWh")),c.a.createElement("div",{className:"weekly-electric__body main-card__body"},c.a.createElement("p",{className:"weekly-electric__sub-unit"},"\ub2e8\uc704(\uc77c)"),c.a.createElement(i.Chart,{id:"chart",dataSource:a},c.a.createElement(i.Series,{argumentField:"time",type:"bar"}),c.a.createElement(i.ArgumentAxis,null,c.a.createElement(i.Label,{wordWrap:"none",overlappingBehavior:"none"})),c.a.createElement(i.Legend,{visible:!1}))))}},502:function(e,a,t){"use strict";var n=t(2),c=t.n(n),i=t(38),o=function(e){var a=e.name,t=void 0===a?"":a,n=e.subName,o=void 0===n?"":n,l=e.value,r=void 0===l?0:l,s=e.unit,m=void 0===s?"":s;return c.a.createElement("div",{className:"info-reality__item"},c.a.createElement("div",{className:"info-reality__group-name"},c.a.createElement("p",{className:"info-reality__name"},t),c.a.createElement("span",{className:"info-reality__sub-name"},o)),c.a.createElement("div",{className:"info-reality__group-value"},c.a.createElement("p",{className:"info-reality__value"},Object(i.a)(r)),c.a.createElement("span",{className:"info-reality__unit"},m)))};o.defaultProps={name:"",subName:"",value:0,unit:""};var l=o,r=function(e){var a=e.outputVoltage,t=void 0===a?0:a,n=e.outputCurrent,i=void 0===n?0:n,o=e.electricRealtime,r=void 0===o?0:o,s=e.ratePower,m=void 0===s?0:s;return c.a.createElement("div",{className:"info-reality main-card"},c.a.createElement("div",{className:"info-reality__header main-card__header"},c.a.createElement("div",{className:"info-reality__title main-card__title"},"\uc2e4\uc2dc\uac04 \uacc4\uce21 \uc815\ubcf4")),c.a.createElement("div",{className:"info-reality__body main-card__body"},c.a.createElement(l,{name:"\ucd9c\ub825\uc804\uc555",subName:"v2",value:t,unit:"V"}),c.a.createElement(l,{name:"\ucd9c\ub825\uc804\ub958",subName:"l2",value:i,unit:"A"}),c.a.createElement(l,{name:"\uc804\uccb4 \uc2e4\uc2dc\uac04 \ubc1c\uc804\ub7c9",subName:"p",value:r,unit:"kW"}),c.a.createElement(l,{name:"\uc804\uccb4 \ubaa8\ub4c8 \uc131\ub2a5\ube44",subName:"",value:m,unit:"%"})))};r.defaultProps={outputVoltage:0,outputCurrent:0,electricRealtime:0,ratePower:0};a.a=Object(n.memo)(r)},503:function(e,a,t){"use strict";var n=t(2),c=t.n(n),i=t(31),o=t(38),l=function(e){var a=e.icon,t=void 0===a?"":a,n=e.name,i=void 0===n?"":n,l=e.value,r=void 0===l?0:l,s=e.customClass,m=void 0===s?"":s;return c.a.createElement("div",{className:"total-power__item ".concat(m)},c.a.createElement("img",{src:t,alt:"",className:"total-power__icon"}),c.a.createElement("p",{className:"total-power__item-name"},i),c.a.createElement("p",{className:"total-power__item-value"},Object(o.a)(r)))};l.defaultProps={name:"",value:0,customClass:"",icon:""};var r=Object(n.memo)(l),s=function(e){var a=e.amountElectricDay,t=void 0===a?0:a,n=e.amountElectricMonth,o=void 0===n?0:n,l=e.cumulativeElectric,s=void 0===l?0:l;return c.a.createElement("div",{className:"total-power main-card"},c.a.createElement("div",{className:"total-power__header main-card__header"},c.a.createElement("div",{className:"total-power__title main-card__title"},"\ucd1d \ubc1c\uc804 \ud604\ud669"),c.a.createElement("div",{className:"total-power__unit main-card__unit"},"kWh")),c.a.createElement("div",{className:"total-power__body "},c.a.createElement(r,{icon:i.a.icon_day,name:"\uae08\uc77c \ubc1c\uc804\ub7c9",value:t,customClass:"bg-color-day"}),c.a.createElement(r,{icon:i.a.icon_month,name:"\uae08\uc6d4 \ubc1c\uc804\ub7c9",value:o,customClass:"bg-color-month"}),c.a.createElement(r,{icon:i.a.icon_plus,name:"\ub204\uc801 \ubc1c\uc804\ub7c9",value:s,customClass:"bg-color-plus"})))};s.defaultProps={amountElectricDay:0,amountElectricMonth:0,cumulativeElectric:0};a.a=Object(n.memo)(s)},734:function(e,a,t){"use strict";t.r(a);var n=t(29),c=t(27),i=t(24),o=t(2),l=t.n(o),r=t(31),s=t(28),m=t(7),u=t(398),d=t(17),v=t(4),_=function(e){var a=e.onClick,t=e.options,n=void 0===t?[]:t;return l.a.createElement("div",{className:"auto-suggest"},n.map((function(e,t){return l.a.createElement("p",{className:"auto-suggest__item",key:t,onClick:function(){return a(e)},role:"presentation"},e.label)})))};_.defaultProps={options:[]};var p=Object(o.memo)(_),E=function(e){var a=e.placeholder,t=e.handleIconClick,n=void 0===t?function(){}:t,c=e.customClass,s=void 0===c?"":c,m=e.value,u=void 0===m?"":m,d=e.onChange,v=void 0===d?function(){}:d,_=e.setSearchTerm,E=void 0===_?function(){}:_,f=e.options,b=void 0===f?[]:f,h=e.handleKeyDown,y=e.isSpinner,N=void 0!==y&&y,O=Object(o.useState)(!1),C=Object(i.a)(O,2),g=C[0],j=C[1],w=Object(o.useRef)(null),k=Object(o.useRef)(null),S=function(e){var a=w.current;a&&!a.contains(e.target)&&j(!1)};Object(o.useEffect)((function(){return window.addEventListener("mousedown",S),function(){window.removeEventListener("mousedown",S)}}));return l.a.createElement("div",{ref:w,className:"search ".concat(s)},l.a.createElement("input",{className:"search__input",onClick:function(){return j(!0)},placeholder:a,value:u,onChange:v,onKeyPress:function(e){return h(e)},ref:k}),N&&l.a.createElement("div",{className:"spinner"}),l.a.createElement("img",{src:r.a.icon_search,alt:"Icon Search",className:"search__icon",onClick:n,role:"presentation"}),g&&b.length?l.a.createElement(p,{search:u,onClick:function(e){console.log(e,"searchValue"),E(e),j(!1),k.current.focus()},options:b}):null)};E.defaultProps={placeholder:"",customClass:"",value:"",onChange:function(){},setSearchTerm:function(){},handleIconClick:function(){},options:[],isSpinner:!1};var f=Object(o.memo)(E),b=function(e,a){var t=Object(o.useState)(e),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(o.useEffect)((function(){var t=setTimeout((function(){l(e)}),a);return function(){clearTimeout(t)}}),[e,a]),c},h=t(235),y=t(36),N=t(502),O=t(503),C=t(486),g=t(487);a.default=function(){var e,a=Object(s.b)(),t=Object(d.g)(),_=Object(s.c)((function(e){return e.main})),p=_.optionsCompany,E=_.optionsPosition,j=_.listPositions,w=_.cardPositionMain,k=_.isSpinner,S=_.isLoading,I=_.totalMetric,P=Object(s.c)((function(e){return null===e||void 0===e?void 0:e.account})).userInfo,B=Object(o.useState)({label:"",value:"",key:"",id:""}),R=Object(i.a)(B,2),x=R[0],D=R[1],T=Object(o.useState)({isShow:!1,content:""}),L=Object(i.a)(T,2),M=L[0],A=L[1],F=Object(o.useState)({type:"",id:null}),W=Object(i.a)(F,2),K=W[0],H=W[1],V=Object(o.useState)("\uc804\uccb4"),z=Object(i.a)(V,2),J=z[0],U=z[1],Y=b(x.label,500);Object(o.useEffect)((function(){Y&&(a(Object(m.n)({keyword:Y})),a(Object(m.z)({keyword:Y})))}),[Y]);var q=I.data,G=I.chart;Object(o.useEffect)((function(){a(Object(m.w)()),a(Object(m.q)())}),[]);var X=Object(o.useRef)(1);Object(o.useEffect)((function(){a(Object(m.e)({type:"summary",pos_id:X.current})),a(Object(m.C)())}),[]),Object(o.useEffect)((function(){var e=setInterval((function(){X.current+=1,X.current>j.length&&(X.current=1),K.type||a(Object(m.e)({type:"summary",pos_id:X.current}))}),3e4);return function(){return clearInterval(e)}}),[j,K]),Object(o.useEffect)((function(){var e=setInterval((function(){switch(K.type){case"posId":a(Object(m.C)({pos_id:K.id}));break;case"comId":a(Object(m.C)({com_id:K.id}));break;default:a(Object(m.C)())}}),1e4);return function(){return clearInterval(e)}}),[I,K]);var Q=function(e){t.push(v.a.STATUS_COMPANY),a(Object(m.F)({id:e}))},Z=function(){switch(null===x||void 0===x?void 0:x.key){case"posId":a(Object(m.k)({type:"summary",pos_id:x.id})),a(Object(m.C)({pos_id:x.id})),H({type:"posId",id:x.id}),U(x.label);break;case"comId":a(Object(m.h)({type:"summary",com_id:x.id})),a(Object(m.C)({com_id:x.id})),H({type:"comId",id:x.id}),U(x.label);break;default:A(Object(c.a)(Object(c.a)({},M),{},{isShow:!0,content:"\uad6c\uc5ed\uba85\uc774\ub098 \uc5c5\uccb4\uba85\uc744 \uc815\ud655\ud788 \uc785\ub825\ud574\uc8fc\uc138\uc694"}))}},$=w.length?null===w||void 0===w?void 0:w.map((function(e){var a,t,n;return l.a.createElement("img",{key:null===(a=e.position)||void 0===a?void 0:a.id,src:r.a.icon_location_on,alt:"",className:"location",style:{top:"".concat(null===(t=e.position)||void 0===t?void 0:t.pos_map_y,"px"),left:"".concat(null===(n=e.position)||void 0===n?void 0:n.pos_map_x,"px")}})})):"";return l.a.createElement(l.a.Fragment,null,S&&l.a.createElement(y.a,null),l.a.createElement("div",{className:"main-page"},1===(null===P||void 0===P||null===(e=P.roles[0])||void 0===e?void 0:e.id)?l.a.createElement(f,{placeholder:"\ud68c\uc0ac\uba85\uc774\ub098 \uad6c\uc5ed\uba85\uc73c\ub85c \uac80\uc0c9\ud574\ubcf4\uc138\uc694.",customClass:"main-search",value:x.label,onChange:function(e){var a=e.target.value;D({label:a})},setSearchTerm:D,options:[].concat(Object(n.a)(E),Object(n.a)(p)),handleIconClick:function(){Z()},handleKeyDown:function(e){"Enter"===e.key&&Z()},isSpinner:k}):"",l.a.createElement("div",{className:"current-electric"},l.a.createElement("div",{className:"current-electric__title"},l.a.createElement("img",{src:r.a.icon_title,alt:"Title",className:"icon-title"}),l.a.createElement("p",{className:"title"},J),l.a.createElement("div",{className:"line"})),l.a.createElement(O.a,{amountElectricDay:null===q||void 0===q?void 0:q.prod_today,amountElectricMonth:null===q||void 0===q?void 0:q.prod_inmonth,cumulativeElectric:null===q||void 0===q?void 0:q.prod_sum}),l.a.createElement(g.a,{measure:G}),l.a.createElement(N.a,{outputVoltage:null===q||void 0===q?void 0:q.output_voltage,outputCurrent:null===q||void 0===q?void 0:q.output_current,electricRealtime:null===q||void 0===q?void 0:q.prod_realtime,ratePower:null===q||void 0===q?void 0:q.performance_ratio}),l.a.createElement(C.a,{radiance:null===q||void 0===q?void 0:q.radiance,temperature:null===q||void 0===q?void 0:q.temperature})),j&&j.map((function(e){return l.a.createElement("img",{src:r.a.icon_location,alt:"",className:"location",style:{top:"".concat(e.posY,"px"),left:"".concat(e.posX,"px")},key:e.id})})),$,w&&(null===w||void 0===w?void 0:w.map((function(e){var n,c,i,o,r,s,d,_;return l.a.createElement("div",{className:"display-main-card",style:{top:"".concat((null===e||void 0===e||null===(n=e.position)||void 0===n?void 0:n.pos_map_y)-300,"px"),left:"".concat((null===e||void 0===e||null===(c=e.position)||void 0===c?void 0:c.pos_map_x)-300,"px")}},l.a.createElement(u.a,{title:null===e||void 0===e||null===(i=e.position)||void 0===i?void 0:i.pos_name,listCompany:null===e||void 0===e?void 0:e.company,amountElectricDay:null===e||void 0===e||null===(o=e.card)||void 0===o?void 0:o.prod_today,amountElectricMonth:null===e||void 0===e||null===(r=e.card)||void 0===r?void 0:r.prod_inmonth,electricRealtime:null===e||void 0===e||null===(s=e.card)||void 0===s?void 0:s.prod_realtime,cumulativeElectric:null===e||void 0===e||null===(d=e.card)||void 0===d?void 0:d.prod_sum,ratePower:null===e||void 0===e||null===(_=e.card)||void 0===_?void 0:_.performance_ratio,titleClick:function(){var n,c;return c=null===e||void 0===e||null===(n=e.position)||void 0===n?void 0:n.id,t.push(v.a.DASHBOARD_AREA),void a(Object(m.G)({id:c}))},logoClick:Q}))}))),l.a.createElement(h.a,{isOpen:M.isShow,isShowHeader:!0,title:"\uc54c\ub9bc",isShowIconClose:!0,isShowFooter:!0,handleCloseIcon:function(){return A(Object(c.a)(Object(c.a)({},M),{},{isShow:!1,content:""}))},handleClose:function(){return A(Object(c.a)(Object(c.a)({},M),{},{isShow:!1,content:""}))},textBtnRight:"\ud655\uc778"},M.content)))}}}]);
//# sourceMappingURL=27.b94bfc69.chunk.js.map