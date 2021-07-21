(self.webpackChunksale_counter=self.webpackChunksale_counter||[]).push([[603],{7101:function(e,t,n){"use strict";n.d(t,{i:function(){return f},h:function(){return d}});var r=n(63),a=n(3105),i=n(4461),o=n(3808),l=n(8500),c=n(7294);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var[u,f]=(0,l.k)({strict:!1,name:"ButtonGroupContext"}),d=(0,r.G)(((e,t)=>{var{size:n,colorScheme:r,variant:o,className:l,spacing:f="0.5rem",isAttached:d,isDisabled:p}=e,m=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),h=(0,i.cx)("chakra-button__group",l),g=c.useMemo((()=>({size:n,colorScheme:r,variant:o,isDisabled:p})),[n,r,o,p]),y={display:"inline-flex"};return y=s({},y,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:f}}),c.createElement(u,{value:g},c.createElement(a.m$.div,s({ref:t,role:"group",__css:y,className:h},m)))}));o.Ts&&(d.displayName="ButtonGroup")},5408:function(e,t,n){"use strict";n.d(t,{z:function(){return S}});var r=n(2947),a=n(917),i=n(63),o=n(4915),l=n(5284),c=n(3105),s=n(4461),u=n(3808),f={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},d=(0,c.m$)("span",{baseStyle:f});u.Ts&&(d.displayName="VisuallyHidden");var p=(0,c.m$)("input",{baseStyle:f});u.Ts&&(p.displayName="VisuallyHiddenInput");var m=n(7294);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),y=(0,i.G)(((e,t)=>{var n=(0,o.m)("Spinner",e),r=(0,l.Lr)(e),{label:a="Loading...",thickness:i="2px",speed:u="0.45s",emptyColor:f="transparent",className:p}=r,y=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["label","thickness","speed","emptyColor","className"]),v=(0,s.cx)("chakra-spinner",p),b=h({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:f,borderLeftColor:f,animation:g+" "+u+" linear infinite"},n);return m.createElement(c.m$.div,h({ref:t,__css:b,className:v},y),a&&m.createElement(d,null,a))}));u.Ts&&(y.displayName="Spinner");var v=n(8554),b=n.n(v),O=n(7101);function E(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=(0,i.G)(((e,t)=>{var n,a=(0,O.i)(),i=(0,o.m)("Button",x({},a,e)),u=(0,l.Lr)(e),{isDisabled:f=(null==a?void 0:a.isDisabled),isLoading:d,isActive:p,isFullWidth:h,children:g,leftIcon:y,rightIcon:v,loadingText:S,iconSpacing:N="0.5rem",type:w,spinner:C,spinnerPlacement:R="start",className:_,as:D}=u,I=E(u,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),P=b()({},null!=(n=null==i?void 0:i._focus)?n:{},{zIndex:1}),T=x({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:h?"100%":"auto"},i,!!a&&{_focus:P}),{ref:z,type:Y}=function(e){var[t,n]=m.useState(!e),r=m.useCallback((e=>{e&&n("BUTTON"===e.tagName)}),[]),a=t?"button":void 0;return{ref:r,type:a}}(D);return m.createElement(c.m$.button,x({disabled:f||d,ref:(0,r.l)(t,z),as:D,type:null!=w?w:Y,"data-active":(0,s.PB)(p),"data-loading":(0,s.PB)(d),__css:T,className:(0,s.cx)("chakra-button",_)},I),y&&!d&&m.createElement(j,{marginEnd:N},y),d&&"start"===R&&m.createElement(k,{className:"chakra-button__spinner--start",label:S,placement:"start"},C),d?S||m.createElement(c.m$.span,{opacity:0},g):g,d&&"end"===R&&m.createElement(k,{className:"chakra-button__spinner--end",label:S,placement:"end"},C),v&&!d&&m.createElement(j,{marginStart:N},v))}));u.Ts&&(S.displayName="Button");var j=e=>{var{children:t,className:n}=e,r=E(e,["children","className"]),a=m.isValidElement(t)?m.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,s.cx)("chakra-button__icon",n);return m.createElement(c.m$.span,x({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:i}),a)};u.Ts&&(j.displayName="ButtonIcon");var k=e=>{var{label:t,placement:n,children:r=m.createElement(y,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i}=e,o=E(e,["label","placement","spacing","children","className","__css"]),l=(0,s.cx)("chakra-button__spinner",a),u=x({display:"flex",alignItems:"center",position:t?"relative":"absolute",["start"===n?"marginEnd":"marginStart"]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},i);return m.createElement(c.m$.div,x({className:l},o,{__css:u}),r)};u.Ts&&(k.displayName="ButtonSpinner")},8125:function(e,t,n){"use strict";n.d(t,{C:function(){return f}});var r=n(63),a=n(4915),i=n(5284),o=n(3105),l=n(4461),c=n(3808),s=n(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,t)=>{var n=(0,a.m)("Badge",e),r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,i.Lr)(e),["className"]);return s.createElement(o.m$.span,u({ref:t,className:(0,l.cx)("chakra-badge",e.className)},r,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));c.Ts&&(f.displayName="Badge")},2947:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(3808);function a(e,t){if(null!=e)if((0,r.mf)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>a(t,e)))}}},5555:function(e,t,n){"use strict";n.d(t,{$:function(){return i}});var r=n(4096),a=n(7294),i=a.memo((function(e){var t=e.children,n=e.justifyContent,i=e.h;return a.createElement(r.k,{alignItems:"center",minH:"60px",px:4,justifyContent:n,boxShadow:"0 -3px 3px rgba(0,0,0,0.1)",h:i},t)}))},8725:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(8017),a=n(4096),i=n(7294),o=n(6237),l=n(8193),c=n(980),s=i.memo((function(e){var t=e.children,n=e.rightNode,s=e.canGoBack,u=e.onRightNodeClick,f=(0,o.useHistory)(),d=(0,c.useColorModeValue)("white","gray.700");return i.createElement(r.xu,{position:"sticky",top:0,bgColor:d,shadow:"md"},i.createElement(a.k,{h:"60px",width:"100%",justifyContent:"center",alignItems:"center",px:4,position:"relative"},s&&i.createElement(r.xu,{left:4,fontSize:"1.5rem",position:"absolute",top:"50%",onClick:f.goBack,transform:"translateY(-50%)"},i.createElement(l.CF5,null)),t,n&&i.createElement(r.xu,{right:4,top:"50%",transform:"translateY(-50%)",position:"absolute",fontSize:"1.5rem",onClick:u},n)))}))},5975:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(4096),a=n(7294),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},l=a.memo((function(e){var t=e.children,n=e.header,l=e.footer,c=o(e,["children","header","footer"]);return a.createElement(r.k,{flexDirection:"column",flex:1,height:"100%",maxHeight:"100%",overflow:"hidden"},n,a.createElement(r.k,i({},c,{flex:1,flexDirection:"column",overflowX:"hidden",overflowY:"scroll"}),t),l)}))},9603:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeState:function(){return F},MainComponent:function(){return L},useHomeAction:function(){return K}});var r=n(2804),a=n(6237),i=n(5975),o=n(7294),l=function(e){return e(r.default.useRecoilValue(F))},c=n(4354),s=n(4096),u=n(63),f=n(4915),d=n(5284),p=n(3105),m=n(4651),h=n(4461),g=n(3808);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=(0,u.G)(((e,t)=>{var n=(0,f.m)("Text",e),r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}((0,d.Lr)(e),["className","align","decoration","casing"]),a=(0,m.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(p.m$.p,y({ref:t,className:(0,h.cx)("chakra-text",e.className)},a,r,{__css:n}))}));g.Ts&&(v.displayName="Text");var b=n(8125),O=n(7101),E=n(5408);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=(0,u.G)(((e,t)=>{var{icon:n,children:r,isRound:a,"aria-label":i}=e,l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["icon","children","isRound","aria-label"]),c=n||r,s=o.isValidElement(c)?o.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(E.z,x({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},l),s)}));g.Ts&&(S.displayName="IconButton");var j=n(8193),k=n(1649),N=o.memo((function(e){var t=e.id,n=e.value,r=e.onChange;return o.createElement(O.h,{isAttached:!0},o.createElement(S,{"aria-label":"Minus",disabled:0===n,onClick:function(){return r(n-1,t)},icon:o.createElement(j.ywL,null)}),o.createElement(E.z,{disabled:!0,w:8,px:4,fontSize:"lg"},n),o.createElement(S,{"aria-label":"Add",onClick:function(){return r(n+1,t)},icon:o.createElement(k.gyF,null)}))})),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},R=o.memo((function(e){var t=e.name,n=e.price,r=C(e,["name","price"]);return o.createElement(s.k,{justifyContent:"space-between",alignItems:"center"},o.createElement(v,null,t,o.createElement(b.C,{ml:2,rounded:"md",variant:"solid",colorScheme:"green",fontSize:"lg",mr:2},"$",n)),o.createElement(N,w({},r)))})),_=n(2820),D=n(8725),I=n(336),P=o.memo((function(){var e=(0,a.useHistory)();return o.createElement(D.h,{rightNode:o.createElement(j.xRF,null),onRightNodeClick:function(){return e.push("/setting")}},o.createElement(I.X,{fontSize:"lg"},_.g.name))})),T=n(5555),z=n(8017),Y=o.memo((function(){var e=l((function(e){return e.record})),t=e?c.ObjectUtil.toArray(e,(function(e,t){return t})).reduce((function(e,t){return e+t.price*t.quantity}),0):0;return o.createElement(T.$,{justifyContent:"space-between",h:"80px"},o.createElement(z.xu,{fontSize:"lg"},"是日銷售額"),o.createElement(v,{fontsize:"lg"},"$ ",t))})),A=function(){return(A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},B=o.memo((function(){var e=l((function(e){return e.record})),t=K().updateQuantity,n=0!==Object.keys(e||{}).length,r=(0,a.useHistory)();return e?o.createElement(i.T,{p:4,header:o.createElement(P,null),footer:o.createElement(Y,null)},o.createElement(o.Fragment,null,!n&&o.createElement(s.k,{flex:1,flexDir:"column",justifyContent:"center",alignItems:"center"},o.createElement("span",null,"暫時未有產品"),o.createElement("span",null,"不如"," ",o.createElement(E.z,{color:_.g.theme,textDecor:"underline",variant:"link",onClick:function(){r.push("/setting/menu")}},"加翻幾件")," ","？")),c.ObjectUtil.toArray(e,(function(e,n){return o.createElement(R,A({key:e},n,{value:n.quantity,onChange:t}))})))):o.createElement(i.T,null,!1)})),$=n(3030),H=n(7),M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},F=r.default.atom({key:"HomeState",default:{record:null}}),K=function(){var e=(0,a.useCoilState)(F),t=e.getState,n=e.setState;return{onMount:function(){n((function(e){return e.record=$.O.getDateRecord()}))},onRouteMatched:function(e,t){},updateQuantity:function(e,r){var a=t().record;if(a){if(a[r])n((function(t){return t.record[r].quantity=e}));else{var i=H.O.getMenu().find((function(e){return e.id===r}));n((function(t){return t.record[r]=M(M({},i),{quantity:e})}))}$.O.updateDateRecord(t().record)}}}},L=(0,a.injectLifeCycle)(B,K)},7:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var r=n(3030),a=function(){function e(){}return e.getMenu=function(){var t=localStorage.getItem(e.KEY);if(!t){var n=[];return localStorage.setItem(e.KEY,JSON.stringify(n)),n}return JSON.parse(t)},e.updateMenu=function(t){localStorage.setItem(e.KEY,JSON.stringify(t)),r.O.refreshRecord()},e.KEY="@@SalesRecord/menu",e}()},3030:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(7),a=n(4354),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(){function e(){}return e.getRecord=function(){var t=localStorage.getItem(e.RECORD_KEY);return t?JSON.parse(t):(localStorage.setItem(e.RECORD_KEY,JSON.stringify({})),{})},e.getDateRecord=function(t){var n=this.dateFormatter(t),o=this.getRecord(),l=r.O.getMenu(),c=a.ArrayUtil.toObject(l,(function(e){return[e.id,i(i({},e),{quantity:0})]})),s=o[n];return s||(o[n]=c,localStorage.setItem(e.RECORD_KEY,JSON.stringify(o)),c)},e.refreshRecord=function(){var e=this.getDateRecord(),t=r.O.getMenu(),n=a.ArrayUtil.toObject(t,(function(t){var n=e[t.id];return void 0===n?[t.id,i(i({},t),{quantity:0})]:[t.id,n]}));this.updateDateRecord(n)},e.updateDateRecord=function(t,n){void 0===n&&(n=new Date);var r=this.dateFormatter(n),a=this.getRecord();a[r]=t,localStorage.setItem(e.RECORD_KEY,JSON.stringify(a))},e.dateFormatter=function(e){return void 0===e&&(e=new Date),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},e.RECORD_KEY="@@SalesRecord/record",e.HISTORY_KEY="@@SalesRecord/history",e}()}}]);