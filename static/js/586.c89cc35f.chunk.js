"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[586],{86:function(n,e,t){t.d(e,{Z:function(){return f}});var i,r,o,a=t(168),c=t(924),s=t(87),u=c.ZP.ul(i||(i=(0,a.Z)(["\n  list-style: disc;\n  padding-left: 20px;\n  cursor: pointer;\n"]))),l=c.ZP.li(r||(r=(0,a.Z)(["\n  padding: 5px 0;\n"]))),d=(0,c.ZP)(s.rU)(o||(o=(0,a.Z)(["\n  font-weight: 500;\n  color: inherit;\n  &:hover,\n  &:focus {\n    color: #ee3d3d;\n  }\n  text-decoration: none;\n"]))),p=t(184),f=function(n){var e=n.list,t=n.state;return(0,p.jsx)(u,{children:e.map((function(n){var e=n.title,i=n.id;return(0,p.jsx)(l,{children:(0,p.jsx)(d,{to:"/movies/".concat(i),state:t,children:e},i)},i)}))})}},511:function(n,e,t){t.d(e,{C:function(){return c},n:function(){return s}});var i,r,o=t(168),a=t(924),c=a.ZP.h1(i||(i=(0,o.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),s=a.ZP.h1(r||(r=(0,o.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"])))},586:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,r,o,a=t(861),c=t(439),s=t(757),u=t.n(s),l=t(87),d=t(168),p=t(924),f=p.ZP.form(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  border: 1px solid #cdcdcd;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  &:hover,\n  &:focus {\n    border-color: #353535;\n  }\n"]))),h=p.ZP.input(r||(r=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  background-color: inherit;\n  border: none;\n  padding: 5px;\n  &::placeholder {\n    font: inherit;\n  }\n"]))),x=p.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),m=t(184),v=function(n){var e,t=n.onSubmit,i=(0,l.lr)(),r=(0,c.Z)(i,2),o=r[0],a=r[1],s=null!==(e=o.get("query"))&&void 0!==e?e:"";return(0,m.jsxs)(f,{onSubmit:function(n){n.preventDefault(),t(s)},children:[(0,m.jsx)(h,{type:"text",name:"searchInput",value:s,onChange:function(n){var e=n.target.value.toLowerCase(),t=""!==e?{query:e.trim()}:{};a(t)},autoComplete:"off",placeholder:"Search movies"}),(0,m.jsx)(x,{type:"submit",children:"Search"})]})},g=t(86),b=t(791),w=t(689),Z=t(390),y=t(511),S=function(){var n=window.localStorage.getItem("movies"),e=JSON.parse(n),t=(0,b.useState)(""),i=(0,c.Z)(t,2),r=i[0],o=i[1],s=(0,b.useState)((function(){return null!==e&&void 0!==e?e:[]})),l=(0,c.Z)(s,2),d=l[0],p=l[1],f=(0,w.TH)();return(0,b.useEffect)((function(){function n(){return(n=(0,a.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Z.Jx)(r);case 2:e=n.sent,t=e.results,p(t&&t.map((function(n){return{id:n.id,title:n.title,year:n.release_date.substring(0,4)}})));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}r&&function(){n.apply(this,arguments)}()}),[r]),(0,b.useEffect)((function(){window.localStorage.setItem("movies",JSON.stringify(d))}),[d]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(y.n,{children:"Search the movie by keyword"}),(0,m.jsx)(v,{onSubmit:o}),(0,m.jsx)(g.Z,{list:d,state:{from:f}})]})}}}]);
//# sourceMappingURL=586.c89cc35f.chunk.js.map