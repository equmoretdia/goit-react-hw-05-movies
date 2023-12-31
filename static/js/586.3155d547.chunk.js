"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[586],{86:function(n,e,t){t.d(e,{Z:function(){return p}});var r,i,o,c=t(168),u=t(924),a=t(87),s=u.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: disc;\n  padding-left: 20px;\n  cursor: pointer;\n"]))),l=u.ZP.li(i||(i=(0,c.Z)(["\n  padding: 5px 0;\n"]))),d=(0,u.ZP)(a.rU)(o||(o=(0,c.Z)(["\n  font-weight: 500;\n  color: inherit;\n  &:hover,\n  &:focus {\n    color: #ee3d3d;\n  }\n  text-decoration: none;\n"]))),h=t(184),p=function(n){var e=n.list,t=n.state;return(0,h.jsx)(s,{children:e.map((function(n){var e=n.title,r=n.id;return(0,h.jsx)(l,{children:(0,h.jsx)(d,{to:"/movies/".concat(r),state:t,children:e},r)},r)}))})}},511:function(n,e,t){t.d(e,{C:function(){return u},n:function(){return a}});var r,i,o=t(168),c=t(924),u=c.ZP.h1(r||(r=(0,o.Z)(["\n  font-size: 28px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),a=c.ZP.h1(i||(i=(0,o.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"])))},586:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,o,c=t(439),u=t(87),a=t(168),s=t(924),l=s.ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  border: 1px solid #cdcdcd;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 20px;\n  &:hover,\n  &:focus {\n    border-color: #353535;\n  }\n"]))),d=s.ZP.input(i||(i=(0,a.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  background-color: inherit;\n  border: none;\n  padding: 5px;\n  &::placeholder {\n    font: inherit;\n  }\n"]))),h=s.ZP.button(o||(o=(0,a.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),p=t(184),f=function(n){var e,t=n.onSubmit,r=(0,u.lr)(),i=(0,c.Z)(r,2),o=i[0],a=i[1],s=null!==(e=o.get("query"))&&void 0!==e?e:"";return(0,p.jsxs)(l,{onSubmit:function(n){n.preventDefault(),t(s)},children:[(0,p.jsx)(d,{type:"text",name:"searchInput",value:s,onChange:function(n){var e=n.target.value.toLowerCase(),t=""!==e?{query:e.trim()}:{};a(t)},autoComplete:"off",placeholder:"Search movies"}),(0,p.jsx)(h,{type:"submit",children:"Search"})]})},x=t(86),m=t(791),b=t(689),g=t(390),v=t(511),Z=function(){var n=(0,m.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,m.useState)([]),o=(0,c.Z)(i,2),u=o[0],a=o[1],s=(0,m.useState)(!1),l=(0,c.Z)(s,2),d=l[0],h=l[1],Z=(0,b.TH)();return(0,m.useEffect)((function(){t&&(h(!1),(0,g.Jx)(t).then((function(n){if(n.results.length<=0)return h(!0);a(n&&n.results.map((function(n){return{id:n.id,title:n.title,year:n.release_date.substring(0,4)}})))})).catch((function(n){return console.log("An error occurred: ".concat(n.message))})))}),[t]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v.n,{children:"Search the movie by keyword"}),(0,p.jsx)(f,{onSubmit:r}),d?(0,p.jsx)("p",{children:"Sorry, no pictures were found for your query, please try another one!"}):(0,p.jsx)(x.Z,{list:u,state:{from:Z}})]})}}}]);
//# sourceMappingURL=586.3155d547.chunk.js.map