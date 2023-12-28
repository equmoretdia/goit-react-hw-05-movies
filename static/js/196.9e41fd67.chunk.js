"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[196],{196:function(A,n,e){e.r(n),e.d(n,{default:function(){return U}});var r,t,a,i,o,s,c,p,x,d,h,j,g,l,b,u=e(861),f=e(439),Q=e(757),w=e.n(Q),Z=e(791),N=e(689),R=e(168),G=e(924),v=e(87),I=G.ZP.h1(r||(r=(0,R.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"]))),q=G.ZP.button(t||(t=(0,R.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 90px;\n  height: 30px;\n  border: 1px solid #cdcdcd;\n  border-radius: 3px;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  margin-bottom: 10px;\n  &:hover,\n  &:focus {\n    border-width: 2px;\n    border-color: #353535;\n  }\n"]))),P=(0,G.ZP)(v.rU)(a||(a=(0,R.Z)(["\n  font-size: 13px;\n  font-weight: 700;\n  color: #000000;\n  text-decoration: none;\n"]))),m=G.ZP.div(i||(i=(0,R.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: start;\n  gap: 20px;\n  margin-bottom: 20px;\n  padding-bottom: 5px;\n  box-shadow: 0px 2px 1px -1px rgba(46, 47, 66, 0.08),\n    0px 2px 1px -1px rgba(46, 47, 66, 0.16),\n    0px 3px 6px -6px rgba(46, 47, 66, 0.08);\n"]))),B=G.ZP.img(o||(o=(0,R.Z)(["\n  display: block;\n  width: 100%;\n  max-width: 250px;\n  height: auto;\n"]))),K=G.ZP.div(s||(s=(0,R.Z)(["\n  min-width: 200px;\n  max-width: 800px;\n"]))),D=G.ZP.h2(c||(c=(0,R.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),k=G.ZP.h3(p||(p=(0,R.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 20px;\n"]))),C=G.ZP.h4(x||(x=(0,R.Z)(["\n  font-weight: 500;\n  margin-bottom: 10px;\n"]))),E=G.ZP.li(d||(d=(0,R.Z)(["\n  padding: 3px 0;\n"]))),S=G.ZP.p(h||(h=(0,R.Z)(["\n  margin-bottom: 20px;\n"]))),y=G.ZP.div(j||(j=(0,R.Z)(["\n  box-shadow: 0px 2px 1px -1px rgba(46, 47, 66, 0.08),\n    0px 2px 1px -1px rgba(46, 47, 66, 0.16),\n    0px 3px 6px -6px rgba(46, 47, 66, 0.08);\n"]))),z=G.ZP.ul(g||(g=(0,R.Z)(["\n  list-style: disc;\n  padding-left: 20px;\n  cursor: pointer;\n"]))),T=G.ZP.li(l||(l=(0,R.Z)(["\n  padding: 5px 0;\n"]))),O=(0,G.ZP)(v.rU)(b||(b=(0,R.Z)(["\n  font-weight: 500;\n  color: inherit;\n  &:hover,\n  &:focus {\n    color: #ee3d3d;\n  }\n  text-decoration: none;\n"]))),H=e(135),Y=e(184),U=function(){var A,n,e=(0,Z.useState)({title:null,year:null,score:null,image:null,overview:null,genres:null}),r=(0,f.Z)(e,2),t=r[0],a=t.title,i=t.year,o=t.score,s=t.image,c=t.overview,p=t.genres,x=r[1],d=(0,N.TH)();console.log(d);var h=(0,Z.useRef)(null!==(A=null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/movies");console.log(h);var j=(0,N.UO)().movieId;function g(A){return l.apply(this,arguments)}function l(){return(l=(0,u.Z)(w().mark((function A(n){var e,r;return w().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=77971c184b7d14036ed9c9196e488377"));case 3:return e=A.sent,A.next=6,e.json();case 6:return r=A.sent,A.abrupt("return",r);case 10:A.prev=10,A.t0=A.catch(0),console.log("An error occurred: ".concat(A.t0.message));case 13:case"end":return A.stop()}}),A,null,[[0,10]])})))).apply(this,arguments)}return(0,Z.useEffect)((function(){function A(){return(A=(0,u.Z)(w().mark((function A(){var n,e;return w().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,g(j);case 2:n=A.sent,e=Math.round(10*n.vote_average,0),x({title:n.title,year:n.release_date.substring(0,4),score:e,image:n.poster_path,overview:n.overview,genres:n.genres});case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[j]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(I,{children:"Chosen movie details"}),(0,Y.jsxs)(q,{children:[(0,Y.jsx)(H.BMs,{}),(0,Y.jsx)(P,{to:h.current,children:"Go back"})]}),(0,Y.jsxs)(m,{children:[(0,Y.jsx)(B,{src:s?"https://image.tmdb.org/t/p/w300/".concat(s):"data:image/jpeg;base64,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",alt:"film poster"}),(0,Y.jsxs)(K,{children:[(0,Y.jsx)(D,{children:"".concat(a,"(").concat(i||"YYYY",")")}),(0,Y.jsx)(S,{children:"User Score: ".concat(o,"%")}),(0,Y.jsx)(k,{children:"Overview"}),(0,Y.jsx)(S,{children:c}),(0,Y.jsx)(C,{children:"Genres"}),(0,Y.jsx)("ul",{children:p&&p.map((function(A){return(0,Y.jsx)(E,{children:A.name},A.id)}))})]})]}),(0,Y.jsxs)(y,{children:[(0,Y.jsx)(S,{children:"Additional information:"}),(0,Y.jsxs)(z,{children:[(0,Y.jsx)(T,{children:(0,Y.jsx)(O,{to:"cast",children:"Cast"})}),(0,Y.jsx)(T,{children:(0,Y.jsx)(O,{to:"reviews",children:"Reviews"})})]})]}),(0,Y.jsx)(N.j3,{})]})}}}]);
//# sourceMappingURL=196.9e41fd67.chunk.js.map