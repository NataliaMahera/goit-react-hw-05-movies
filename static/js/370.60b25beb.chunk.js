"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[370],{4370:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(3288),o=t(1686),f=t(1087),p="TrandingHomeList_title__BAmG-",l="TrandingHomeList_list__Ci2jM",d="TrandingHomeList_item__zzFmu",v="TrandingHomeList_link__jCwRo",g=t(184),m=function(n){var e=n.films;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h1",{className:p,children:"Trending today"}),(0,g.jsx)("ul",{className:l,children:e&&e.map((function(n){var e=n.id,t=n.title,r=n.name;return(0,g.jsx)("li",{className:d,children:(0,g.jsx)(f.rU,{className:v,to:"/movies/".concat(e),children:t||r})},e)}))})]})},h=t(9325),_=function(){var n=(0,s.useState)(null),e=(0,a.Z)(n,2),t=e[0],u=e[1],f=(0,s.useState)(!1),p=(0,a.Z)(f,2),l=p[0],d=p[1],v=(0,s.useState)(null),_=(0,a.Z)(v,2),x=_[0],w=_[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),w(null),n.next=5,(0,i.Tg)().then((function(n){u(n)}));case 5:n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),w(x),o.Notify.failure("Oops, something went wrong!");case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,7,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),(0,g.jsxs)(g.Fragment,{children:[l&&(0,g.jsx)(h.Z,{}),(0,g.jsx)(m,{films:t})]})}},3288:function(n,e,t){t.d(e,{AL:function(){return o},Bt:function(){return p},Tg:function(){return i},u1:function(){return l},y:function(){return f}});var r=t(5861),a=t(7757),u=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="0bd778e99c9dd0be4a5a446585adfec9",i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(s,"&language=en-US"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?include_adult=false&api_key=".concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=370.60b25beb.chunk.js.map