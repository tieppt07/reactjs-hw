(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{24:function(e,t,a){e.exports=a(34)},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),s=(a(29),a(7)),u=a(8),i=a(11),o=a(10),m=(a(30),a(9)),h=a(5),d=a(36),E=a(41),v=a(37),f=a(21),p=a(38),b=a(39),j=a(40),g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=e.state.currentUser;e.setState({currentUser:Object(h.a)(Object(h.a)({},a),{},Object(m.a)({},t.target.name,t.target.value))})},e.saveUser=function(t){var a=e.state,n=a.users,r=a.currentUser;if(t&&null!=t){var l=n.findIndex((function(e){return e.id===t}));n[l].name=r.name,n[l].email=r.email,e.setState({users:n})}else{var c=Date.now();e.setState({users:n.concat(Object(h.a)(Object(h.a)({},r),{},{id:c}))})}},e.editUser=function(t){var a=e.state.users;e.setState({currentUser:a.find((function(e){return e.id===t}))})},e.state={users:[],currentUser:{name:"",email:"",id:""}},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(E.a,null,"Header"),r.a.createElement(v.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Edit"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.users.map((function(e){}))))),r.a.createElement(f.a,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Control,{type:"hidden",name:"id",onChange:this.handleChange,value:this.state.currentUser.id}),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Email"),r.a.createElement(j.a.Control,{type:"email",placeholder:"Enter Email",name:"email",onChange:this.handleChange,value:this.state.currentUser.email})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Name"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter Name",name:"name",onChange:this.handleChange,value:this.state.currentUser.name})),r.a.createElement(b.a,{variant:"secondary"},"Cancel"),r.a.createElement(b.a,{variant:"primary",onClick:function(){return e.saveUser(e.state.currentUser.id)}},"Save")))))}}]),a}(r.a.Component),C=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2f6330f8.chunk.js.map