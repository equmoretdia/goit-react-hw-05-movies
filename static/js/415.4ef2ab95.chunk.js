"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(e,t,r){r.r(t);var n=r(861),c=r(439),s=r(757),a=r.n(s),o=r(791),i=r(87),u=r(596),p=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),r=t[0],s=t[1];function h(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=77971c184b7d14036ed9c9196e488377");case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:e.prev=10,e.t0=e.catch(0),console.log("An error occurred: ".concat(e.t0.message)),u.Am.error("An error occurred: ".concat(e.t0.message),{position:"top-right",theme:"colored"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("ul",{children:r.map((function(e){var t=e.title,r=e.id;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(r),children:t})},r)}))})]})}}}]);
//# sourceMappingURL=415.4ef2ab95.chunk.js.map