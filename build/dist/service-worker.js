if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,t)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=t(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/index.html",revision:"e20cba961bb59af8a481230edd185eba"},{url:"/static/js/357.81504dc6.js",revision:null},{url:"/static/js/406.c362b0be.js",revision:null},{url:"/static/js/413.7c5f3e8b.js",revision:null},{url:"/static/js/4a94ea81.js",revision:null},{url:"/static/js/4a94ea81.js.LICENSE.txt",revision:"d18dba208164d01c98054a17fb168340"},{url:"/static/js/603.03786863.js",revision:null},{url:"/static/js/649.eb62f477.js",revision:null},{url:"/static/js/677.e11a793f.js",revision:null},{url:"/static/js/726.21916f55.js",revision:null},{url:"/static/js/750.aa5e8727.js",revision:null},{url:"/static/js/928.6e9f3878.js",revision:null}],{})}));