(self.webpackChunksale_counter=self.webpackChunksale_counter||[]).push([[413],{8725:function(e,t,n){"use strict";n.d(t,{h:function(){return u}});var r=n(8017),o=n(4096),i=n(7294),c=n(6237),l=n(8193),a=n(980),u=i.memo((function(e){var t=e.children,n=e.rightNode,u=e.canGoBack,f=e.onRightNodeClick,s=(0,c.useHistory)(),p=(0,a.useColorModeValue)("white","gray.700");return i.createElement(r.xu,{position:"sticky",top:0,bgColor:p,shadow:"md"},i.createElement(o.k,{h:"60px",width:"100%",justifyContent:"center",alignItems:"center",px:4,position:"relative"},u&&i.createElement(r.xu,{left:4,fontSize:"1.5rem",position:"absolute",top:"50%",onClick:s.goBack,transform:"translateY(-50%)"},i.createElement(l.CF5,null)),t,n&&i.createElement(r.xu,{right:4,top:"50%",transform:"translateY(-50%)",position:"absolute",fontSize:"1.5rem",onClick:f},n)))}))},5975:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(4096),o=n(7294),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},l=o.memo((function(e){var t=e.children,n=e.header,l=e.footer,a=c(e,["children","header","footer"]);return o.createElement(r.k,{flexDirection:"column",flex:1,height:"100%",maxHeight:"100%",overflow:"hidden"},n,o.createElement(r.k,i({},a,{flex:1,flexDirection:"column",overflowX:"hidden",overflowY:"scroll"}),t),l)}))},8928:function(e,t,n){"use strict";n.d(t,{L:function(){return c}});var r=n(336),o=n(7294),i=n(8725),c=o.memo((function(e){var t=e.title;return o.createElement(i.h,{canGoBack:!0},o.createElement(r.X,{fontSize:"lg"},t))}))},413:function(e,t,n){"use strict";n.r(t),n.d(t,{MainComponent:function(){return E},SettingCenterState:function(){return k},useSettingCenterAction:function(){return v}});var r,o=n(2804),i=n(6237),c=n(7294),l=n(5975),a=n(8928),u=n(8017),f=n(6482),s=n(4096),p=n(3750),m=n(2820),h=c.memo((function(e){var t=e.label,n=e.icon,r=e.children,o=e.linkOrAction,l=(0,i.useHistory)();return c.createElement(s.k,{alignItems:"center",css:{"&:not(:last-of-type) > .content":{borderBottomWidth:"1px"}}},n&&c.createElement(u.xu,{ml:4,mr:2,color:m.g.theme,py:3},c.createElement(n,{fontSize:"24px"})),c.createElement(s.k,{onClick:function(){"string"==typeof o?l.push(o):null==o||o()},flex:1,pl:n?0:4,py:3,pr:4,className:"content",justifyContent:"space-between",alignItems:"center"},c.createElement(s.k,{flex:1,fontSize:"lg"},t),c.createElement(s.k,{fontSize:"lg"},r||c.createElement(p.fmn,null))))})),y=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return y(t,e),t.prototype.render=function(){var e="light"===f.r.config.initialColorMode?"white":"gray.700";return c.createElement(u.xu,{borderTopWidth:"1px",borderBottomWidth:"1px",backgroundColor:e,mb:8},this.props.children)},t.Row=h,t}(c.PureComponent),g=n(1649),b=c.memo((function(){var e=c.createElement(a.L,{title:"設定"}),t=v().toMenuSetting;return c.createElement(l.T,{header:e,py:4},c.createElement(d,null,c.createElement(d.Row,{icon:g.vML,label:"產品目錄",linkOrAction:t})))})),k=o.default.atom({key:"SettingCenterState",default:{}}),v=function(){var e=(0,i.useHistory)();return{toMenuSetting:function(){e.push("/setting/menu")}}},E=(0,i.injectLifeCycle)(b,v)}}]);