(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),s=n(3),i=n.n(s),a=n(4),d=n(2),u=n(11),h=(n(29),n(12)),b=n(13),l=n(16),j=n(15),g=function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:o})]})]})},p=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(g,{id:e.id,name:e.name,email:e.email},t)}))})},O=function(e){var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots...",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",overflowX:"hidden",height:"800px",marginTop:"2rem",paddingTop:"1rem"},children:e.children})},v=(n(30),"CHANGE_SEARCHFIELD"),m="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAILED",R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(O,{searchChange:n}),Object(r.jsx)(f,{children:Object(r.jsx)(p,{robots:s})})]})}}]),n}(o.Component),C=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:v,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}}}))(R),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},E={searchField:""},F={isPending:!1,robots:[],error:""},w=n(14),P=(n(31),Object(w.createLogger)()),T=Object(d.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case x:return Object.assign({},e,{robots:t.payload,isPending:!1});case y:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),L=Object(d.d)(T,Object(d.a)(u.a,P));i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(a.a,{store:L,children:Object(r.jsx)(C,{})})}),document.getElementById("root")),S()}},[[32,1,2]]]);
//# sourceMappingURL=main.038c771a.chunk.js.map