(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{34:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return l}));var a=n(32),r=n.n(a),c=n(33),i=n(39),o=n.n(i);o.a.defaults.baseURL="https://api.themoviedb.org/3";var u="1690d1319b4e719ac3308f10c68ac649",s=function(){return o.a.get("/trending/all/day?api_key=".concat(u)).then((function(e){return e.data})).catch(console.log)},p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US")).then((function(e){return e.data})).catch(console.log));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US")).then((function(e){return e.data})).catch(console.log));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.data})).catch(console.log));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},51:function(e,t,n){e.exports={ListHeader:"HomePage_ListHeader__dp6vs",MovieLink:"HomePage_MovieLink__1UA50",MovieLinkActive:"HomePage_MovieLinkActive__YQcIZ",MovieItem:"HomePage_MovieItem__3Ji6t",HomePageContainer:"HomePage_HomePageContainer__3Tp6y"}},90:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n.n(a),c=n(33),i=n(35),o=n(36),u=n(38),s=n(37),p=n(0),f=n(9),v=n(2),l=n(51),h=n.n(l),d=n(34),m=n(1),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.e)();case 2:t=e.sent,this.setState({movies:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:h.a.HomePageContainer,children:[Object(m.jsx)("h1",{className:h.a.ListHeader,children:"Trending today"}),Object(m.jsx)("ul",{children:this.state.movies.map((function(t){return Object(m.jsx)("li",{className:h.a.MovieItem,children:Object(m.jsx)(f.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e.props.location}},className:h.a.MovieLink,activeClassName:h.a.MovieLinkActive,children:t.title?t.title:t.name})},t.id)}))})]})}}]),n}(p.Component);t.default=Object(v.f)(g)}}]);
//# sourceMappingURL=home-page.251cfb1f.chunk.js.map