(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{87:function(e,t,n){"use strict";n.r(t);var r=n(32),s=n.n(r),i=n(33),a=n(35),c=n(36),o=n(38),u=n(37),h=n(0),v=n(88),l=n.n(v),p=n(34),j=n(1),w=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={reviews:null},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(this.props.match.params.movieId);case 2:t=e.sent,this.setState({reviews:t.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.reviews&&this.state.reviews.length>0?Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:this.state.reviews.map((function(e){return Object(j.jsxs)("li",{className:l.a.ReviewAuthor,children:[Object(j.jsx)("h1",{children:e.author}),Object(j.jsx)("p",{children:e.content})]},e.id)}))})}):Object(j.jsx)("p",{children:"We dont have any reviews for this movie"})}}]),n}(h.Component);t.default=w},88:function(e,t,n){e.exports={ReviewAuthor:"Reviews_ReviewAuthor__3DD63"}}}]);
//# sourceMappingURL=movie-reviews.741de6b5.chunk.js.map