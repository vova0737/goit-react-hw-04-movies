(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[1],{65:function(e,t,a){e.exports={ListHeader:"HomePage_ListHeader__2NNAp",MovieLink:"HomePage_MovieLink__2KQpe",MovieLinkActive:"HomePage_MovieLinkActive__D8M_m",MovieItem:"HomePage_MovieItem__1LBq0",HomePageContainer:"HomePage_HomePageContainer__1rjuV"}},74:function(e,t,a){"use strict";a.r(t);var n=a(31),i=a.n(n),o=a(32),r=a(33),s=a(34),c=a(37),m=a(36),v=a(0),u=a(35),l=a.n(u),p=a(9),h=a(2),d=a(65),b=a.n(d),f=a(1),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={movies:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=132f2a543c82d69a556f0bb280a697a7");case 2:t=e.sent,this.setState({movies:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:b.a.HomePageContainer,children:[Object(f.jsx)("h1",{className:b.a.ListHeader,children:"Trending today"}),Object(f.jsx)("ul",{children:this.state.movies.map((function(t){return Object(f.jsx)("li",{className:b.a.MovieItem,children:Object(f.jsx)(p.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e.props.location}},className:b.a.MovieLink,activeClassName:b.a.MovieLinkActive,children:t.title?t.title:t.name})},t.id)}))})]})}}]),a}(v.Component);t.default=Object(h.f)(j)}}]);
//# sourceMappingURL=home-page.e085f737.chunk.js.map