(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[3],{84:function(t,a,e){t.exports={MovieCastCntainer:"Cast_MovieCastCntainer__3UNXI",MovieCastItem:"Cast_MovieCastItem__C15MI",CastProfile:"Cast_CastProfile__17w8q"}},87:function(t,a,e){"use strict";e.r(a);var s=e(31),c=e.n(s),n=e(32),i=e(33),r=e(34),o=e(37),p=e(36),l=e(0),u=e(35),h=e.n(u),f=e.p+"static/media/no_photo.29fabf84.jpg",m=e(84),v=e.n(m),b=e(1),d=function(t){Object(o.a)(e,t);var a=Object(p.a)(e);function e(){var t;Object(i.a)(this,e);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(t=a.call.apply(a,[this].concat(c))).state={cast:null},t}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=Object(n.a)(c.a.mark((function t(){var a,e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.props.match.params.movieId,"1690d1319b4e719ac3308f10c68ac649",t.next=4,h.a.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat("1690d1319b4e719ac3308f10c68ac649","&language=en-US"));case 4:e=t.sent,this.setState({cast:e.data.cast});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.cast&&Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:v.a.MovieCastCntainer,children:this.state.cast.map((function(t){return Object(b.jsxs)("li",{className:v.a.MovieCastItem,children:[t.profile_path?Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:"",className:v.a.CastProfile}):Object(b.jsx)("img",{src:f,alt:"",className:v.a.CastProfile}),Object(b.jsx)("p",{children:t.name})]},t.id)}))})})}}]),e}(l.Component);a.default=d}}]);
//# sourceMappingURL=movie-cast.ce8f2da3.chunk.js.map