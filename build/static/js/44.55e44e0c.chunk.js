(this.webpackJsonpsolarms_web=this.webpackJsonpsolarms_web||[]).push([[44],{254:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var i=t(1),o=t.n(i),n=t(167),c=t(28),l=function(e){var a=e.name,t=void 0===a?"":a,i=e.specifications,n=void 0===i?"":i,l=e.unit,r=void 0===l?"":l;return o.a.createElement("div",{className:"card__item"},o.a.createElement("p",{className:"card__item__name"},t),o.a.createElement("div",{className:"card__item__group-specifications"},o.a.createElement("span",{className:"card__item__number"},Object(c.b)(n)),o.a.createElement("span",{className:"card__item__unit"},r)))};l.defaultProps={name:"",specifications:"",unit:""};var r=l,d=function(e){var a=e.isLogoTop,t=void 0!==a&&a,i=e.title,c=void 0===i?"":i,l=e.listCompany,d=void 0===l?[]:l,s=e.logoClick,m=e.titleClick,u=e.onClick,v=e.customClass,p=void 0===v?"":v,_=e.isCardCompany,E=void 0!==_&&_,f=e.isEvent,y=void 0!==f&&f,g=e.amountElectricDay,b=void 0===g?0:g,N=e.amountElectricMonth,h=void 0===N?0:N,C=e.electricRealtime,k=void 0===C?0:C,j=e.ratePower,O=void 0===j?0:j,P=e.cumulativeElectric,w=void 0===P?0:P;return o.a.createElement("div",{className:"card ".concat(p),onClick:u,role:"presentation"},t&&o.a.createElement("div",{className:"card__company card__company--top"},o.a.createElement("img",{src:d.logo,alt:"logocompany",className:"card__company__item"})),o.a.createElement("div",{className:"card__header ".concat(y?"header-event":"")},o.a.createElement("p",{className:"card__title ".concat(y?"card__event":""),onClick:m,role:"presentation"},c),y&&o.a.createElement("img",{src:n.a.icon_event_card,alt:"",className:"card__logo-event"})),o.a.createElement("div",{className:E?"card__body card__body--company":"card__body"},o.a.createElement("div",{className:"card__list"},o.a.createElement(r,{name:"\uc2e4\uc2dc\uac04 \ubc1c\uc804\ub7c9",specifications:k,unit:"kWh"}),o.a.createElement(r,{name:"\uc131\ub2a5\ube44",specifications:O,unit:"%"}),o.a.createElement(r,{name:"\uae08\uc77c",specifications:b,unit:"kWh"}),o.a.createElement(r,{name:"\uae08\uc6d4",specifications:h,unit:"mWh"}),o.a.createElement(r,{name:"\ub204\uc801\ubc1c\uc804\ub7c9",specifications:w,unit:"MW"})),!t&&o.a.createElement("div",{className:"card__company"},d.map((function(e){var a;return o.a.createElement("img",{key:e.id,src:null===e||void 0===e||null===(a=e.com_logo_path)||void 0===a?void 0:a.thumbnail,alt:"logocompany",className:"card__company__item",onClick:function(){return s(null===e||void 0===e?void 0:e.id)},role:"presentation"})})))))};d.defaultProps={title:"",listCompany:[],isLogoTop:!1,customClass:"",isCardCompany:!1,isEvent:!1,amountElectricDay:0,amountElectricMonth:0,electricRealtime:0,ratePower:0,cumulativeElectric:0};Object(i.memo)(d)},430:function(e,a,t){"use strict";t.r(a);var i=t(1),o=t.n(i),n=t(175),c=t(167),l=t(31),r=t(6),d=t(254),s=t(28),m=t(341),u=t(342),v=t(335),p=t(336);a.default=function(){var e,a,t,_,E,f,y,g,b,N,h,C,k,j,O,P,w,x,M,R=Object(l.b)(),D=Object(l.c)((function(e){return e.main})),W=D.isLoading,L=D.listPositions,T=D.cardPositionMain;T.length&&(M=Object(s.a)(T)),console.log(M,"avenrageCardMeasure"),Object(i.useEffect)((function(){R(Object(r.t)()),R(Object(r.n)())}),[]);var I=Object(i.useRef)(1);Object(i.useEffect)((function(){R(Object(r.b)({type:"summary",pos_id:I.current}))}),[]),Object(i.useEffect)((function(){var e=setInterval((function(){I.current+=1,I.current>L.length&&(I.current=1),R(Object(r.b)({type:"summary",pos_id:I.current}))}),3e4);return function(){return clearInterval(e)}}),[L,T]);var J=function(e){console.log(e)},S=T.length?null===T||void 0===T?void 0:T.map((function(e){var a,t,i;return o.a.createElement("img",{key:null===(a=e.position)||void 0===a?void 0:a.id,src:c.a.icon_location_on,alt:"",className:"location",style:{top:"".concat(null===(t=e.position)||void 0===t?void 0:t.pos_map_y,"px"),left:"".concat(null===(i=e.position)||void 0===i?void 0:i.pos_map_x,"px")}})})):"";return o.a.createElement(n.a,{isSearch:!0,isProcessing:W},o.a.createElement("div",{className:"main-page"},o.a.createElement("div",{className:"current-electric"},o.a.createElement("div",{className:"current-electric__title"},o.a.createElement("img",{src:c.a.icon_title,alt:"Title",className:"icon-title"}),o.a.createElement("p",{className:"title"},"\uc804\uccb4"),o.a.createElement("div",{className:"line"})),o.a.createElement(u.a,{amountElectricDay:null===(e=M)||void 0===e||null===(a=e.card)||void 0===a?void 0:a.prod_today,amountElectricMonth:null===(t=M)||void 0===t||null===(_=t.card)||void 0===_?void 0:_.prod_inmonth,cumulativeElectric:null===(E=M)||void 0===E||null===(f=E.card)||void 0===f?void 0:f.prod_sum}),o.a.createElement(p.a,null),o.a.createElement(m.a,{outputVoltage:null===(y=M)||void 0===y||null===(g=y.card)||void 0===g?void 0:g.output_voltage,outputCurrent:null===(b=M)||void 0===b||null===(N=b.card)||void 0===N?void 0:N.output_current,electricRealtime:null===(h=M)||void 0===h||null===(C=h.card)||void 0===C?void 0:C.prod_realtime,ratePower:null===(k=M)||void 0===k||null===(j=k.card)||void 0===j?void 0:j.performance_ratio}),o.a.createElement(v.a,{radiance:null===(O=M)||void 0===O||null===(P=O.card)||void 0===P?void 0:P.radiance,temperature:null===(w=M)||void 0===w||null===(x=w.card)||void 0===x?void 0:x.temperature})),L&&L.map((function(e){return o.a.createElement("img",{src:c.a.icon_location,alt:"",className:"location",style:{top:"".concat(e.posY,"px"),left:"".concat(e.posX,"px")},key:e.id})})),S,T&&(null===T||void 0===T?void 0:T.map((function(e){var a,t,i,n,c,l,r,s;return o.a.createElement("div",{className:"display-main-card",style:{top:"".concat((null===e||void 0===e||null===(a=e.position)||void 0===a?void 0:a.pos_map_y)-300,"px"),left:"".concat((null===e||void 0===e||null===(t=e.position)||void 0===t?void 0:t.pos_map_x)-300,"px")}},o.a.createElement(d.a,{title:null===e||void 0===e||null===(i=e.position)||void 0===i?void 0:i.pos_name,listCompany:null===e||void 0===e?void 0:e.company,amountElectricDay:null===e||void 0===e||null===(n=e.card)||void 0===n?void 0:n.prod_today,amountElectricMonth:null===e||void 0===e||null===(c=e.card)||void 0===c?void 0:c.prod_inmonth,electricRealtime:null===e||void 0===e||null===(l=e.card)||void 0===l?void 0:l.prod_realtime,cumulativeElectric:null===e||void 0===e||null===(r=e.card)||void 0===r?void 0:r.prod_sum,ratePower:null===e||void 0===e||null===(s=e.card)||void 0===s?void 0:s.performance_ratio,titleClick:function(){var a,t;return t=null===e||void 0===e||null===(a=e.position)||void 0===a?void 0:a.id,void console.log(t)},logoClick:J}))})))))}}}]);
//# sourceMappingURL=44.55e44e0c.chunk.js.map