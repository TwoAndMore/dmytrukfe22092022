(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),r=(n(15),n(16),n(2)),s=n(6),u=(n(17),n(5)),m=n(0),l=function(e){var t=e.name,n=e.left,c=e.fill,a=e.value;return Object(m.jsxs)("div",{className:"time__item",children:[Object(m.jsx)("div",{className:"time__name",children:t}),Object(m.jsx)("div",{className:"time__data",children:Object(m.jsx)("div",{className:"time__data-fill",style:{left:"".concat(n,"px"),width:"".concat(c,"px")},children:Object(m.jsx)("div",{className:"time__data-value",children:a})})})]})},o=function(){var e=Object(c.useState)(u),t=Object(s.a)(e,2),n=t[0],a=t[1],i=n.reduce((function(e,t){return e+t.time}),0),o=Object(c.useMemo)((function(){return n.map((function(e){return Math.round(400*e.time/i)}))}),[n,i,400]),j=Object(c.useCallback)((function(e){return 0===e?0:o.slice(0,e).reduce((function(e,t){return e+t}))}),[o]),d=function(){a((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:+(10*Math.random()).toFixed(2)})}))}))};return Object(c.useEffect)((function(){var e=setInterval((function(){d()}),31800);return function(){e&&clearInterval(e)}})),Object(m.jsxs)("div",{className:"time",children:[Object(m.jsx)("h2",{className:"time__title",children:"spent time (seconds)"}),Object(m.jsx)("div",{className:"time__chart",children:n.map((function(e,t){return Object(m.jsx)(l,{name:e.name,left:j(t),fill:o[t],value:n[t].time},e.name+e.time)}))}),Object(m.jsx)("button",{type:"button",className:"time__button",onClick:d,children:"RANDOM"})]})},j=function(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(o,{})})},d=function(){return Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(j,{})})};Object(i.createRoot)(document.getElementById("root")).render(Object(m.jsx)(d,{}))},5:function(e){e.exports=JSON.parse('[{"name":"Landing Page","time":7.4},{"name":"Configurator","time":0.2},{"name":"Check-out","time":7},{"name":"Deal","time":3.8}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.359d190f.chunk.js.map