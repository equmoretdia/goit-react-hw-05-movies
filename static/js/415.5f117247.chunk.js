"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{415:function(e,n,t){t.r(n);var r=t(861),c=t(439),s=t(757),a=t.n(s),u=t(791),i=t(87),o=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,c.Z)(e,2),t=n[0],s=n[1];function p(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=77971c184b7d14036ed9c9196e488377");case 3:return n=e.sent,e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:e.prev=10,e.t0=e.catch(0),console.log("An error occurred: ".concat(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,s(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:t.map((function(e){var n=e.title,t=e.id;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(t),children:n})},t)}))})]})}}}]);
//# sourceMappingURL=415.5f117247.chunk.js.map