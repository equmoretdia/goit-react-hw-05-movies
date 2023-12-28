"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{511:function(n,e,t){t.d(e,{CD:function(){return f},II:function(){return b},OL:function(){return y},aV:function(){return x},ck:function(){return g},e9:function(){return v},l0:function(){return w},nS:function(){return m}});var r,o,i,c,a,u,s,l,p=t(168),d=t(924),h=t(87),f=d.ZP.h1(r||(r=(0,p.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),m=d.ZP.h1(o||(o=(0,p.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),x=d.ZP.ul(i||(i=(0,p.Z)(["\n  list-style: disc;\n  padding-left: 20px;\n  cursor: pointer;\n"]))),g=d.ZP.li(c||(c=(0,p.Z)(["\n  padding: 5px 0;\n"]))),v=(0,d.ZP)(h.rU)(a||(a=(0,p.Z)(["\n  font-weight: 500;\n  color: inherit;\n  &:hover,\n  &:focus {\n    color: #ee3d3d;\n  }\n  text-decoration: none;\n"]))),w=d.ZP.form(u||(u=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  border: 1px solid #cdcdcd;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  &:hover,\n  &:focus {\n    border-color: #353535;\n  }\n"]))),b=d.ZP.input(s||(s=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  background-color: inherit;\n  border: none;\n  padding: 5px;\n  &::placeholder {\n    font: inherit;\n  }\n"]))),y=d.ZP.button(l||(l=(0,p.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"])))},134:function(n,e,t){t.r(e);var r=t(861),o=t(439),i=t(757),c=t.n(i),a=t(791),u=t(689),s=t(87),l=t(511),p=t(184);e.default=function(){var n,e=(0,a.useState)(""),t=(0,o.Z)(e,2),i=t[0],d=t[1],h=(0,a.useState)(""),f=(0,o.Z)(h,2),m=f[0],x=f[1],g=window.localStorage.getItem("movies"),v=JSON.parse(g),w=(0,a.useState)((function(){return null!==v&&void 0!==v?v:[]})),b=(0,o.Z)(w,2),y=b[0],Z=b[1],S=(0,u.TH)(),k=(0,s.lr)(),_=(0,o.Z)(k,2),j=_[0],I=_[1],P=null!==(n=j.get("movieId"))&&void 0!==n?n:"";function C(n){return O.apply(this,arguments)}function O(){return(O=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&language=en-US&api_key=77971c184b7d14036ed9c9196e488377"));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.log("An error occurred: ".concat(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}console.log(P),(0,a.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(m);case 2:e=n.sent,t=e.results,Z(t&&t.map((function(n){return{id:n.id,title:n.title,year:n.release_date.substring(0,4)}})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}m&&function(){n.apply(this,arguments)}()}),[m]),(0,a.useEffect)((function(){window.localStorage.setItem("movies",JSON.stringify(y))}),[y]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.nS,{children:"Search the movie by keyword"}),(0,p.jsxs)(l.l0,{onSubmit:function(n){n.preventDefault(),""===i.trim()&&I({}),x(i.trim()),d("")},children:[(0,p.jsx)(l.II,{type:"text",name:"searchInput",value:i,onChange:function(n){var e=n.target.value,t=""!==e?{query:e.trim()}:{};d(e.toLowerCase()),I(t)},autoComplete:"off",placeholder:"Search movies"}),(0,p.jsx)(l.OL,{type:"submit",children:"Search"})]}),(0,p.jsx)(l.aV,{children:y.map((function(n){return(0,p.jsx)(l.ck,{children:(0,p.jsx)(l.e9,{to:"/movies/".concat(n.id),state:{from:S},children:"".concat(n.title," (").concat(n.year?n.year:"????",")")},n.id)},n.id)}))})]})}}}]);
//# sourceMappingURL=134.92b34f59.chunk.js.map