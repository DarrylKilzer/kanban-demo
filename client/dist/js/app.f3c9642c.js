(function(e){function t(t){for(var a,n,i=t[0],d=t[1],l=t[2],u=0,p=[];u<i.length;u++)n=i[u],o[n]&&p.push(o[n][0]),o[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var d=r[i];0!==o[d]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},o={app:0},s=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-dark",attrs:{id:"app"}},[r("h1",[e._v("KANBANNED")]),r("router-view")],1)},s=[],n={name:"App"},i=n,d=(r("034f"),r("2877")),l=Object(d["a"])(i,o,s,!1,null,null,null),c=l.exports,u=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"boards"},[e._v("\n  WELCOME TO THE BOARDS!!!\n  "),r("form",{on:{submit:function(t){return t.preventDefault(),e.addBoard(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:e.newBoard.title},on:{input:function(t){t.target.composing||e.$set(e.newBoard,"title",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:e.newBoard.description},on:{input:function(t){t.target.composing||e.$set(e.newBoard,"description",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Create Board")])]),e._l(e.boards,function(t){return r("div",{key:t._id},[r("router-link",{attrs:{to:{name:"board",params:{boardId:t._id}}}},[e._v(e._s(t.title))])],1)})],2)},m=[],h={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}}},v=h,w=Object(d["a"])(v,p,m,!1,null,null,null),f=w.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"board"},[e._v("\n  "+e._s(e.board.title)+"\n  "),r("button",{staticClass:"btn btn-danger",on:{click:e.delortBoard}},[e._v("Delort")])])},b=[],y={name:"board",computed:{board(){return this.$store.state.boards.find(e=>e._id==this.$route.params.boardId)||{title:"Loading..."}}},methods:{delortBoard(){this.$store.dispatch("delortBoard",this.$route.params.boardId)}}},_=y,B=Object(d["a"])(_,g,b,!1,null,null,null),$=B.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e.loginForm?r("form",{on:{submit:function(t){return t.preventDefault(),e.loginUser(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.creds.email},on:{input:function(t){t.target.composing||e.$set(e.creds,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.creds.password},on:{input:function(t){t.target.composing||e.$set(e.creds,"password",t.target.value)}}}),r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Login")])]):r("form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}}),r("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[e._v("Create Account")])]),r("div",{staticClass:"action",on:{click:function(t){e.loginForm=!e.loginForm}}},[e.loginForm?r("p",[e._v("No account? Click here to Register")]):r("p",[e._v("Already have an account? Click here to Login")])])])},x=[],C={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.authModule.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},O=C,N=(r("d6db"),Object(d["a"])(O,U,x,!1,null,null,null)),P=N.exports;a["a"].use(u["a"]);var j=new u["a"]({routes:[{path:"/",name:"boards",component:f},{path:"/boards/:boardId",name:"board",props:!0,component:$},{path:"/login",name:"login",component:P},{path:"*",redirect:"/"}]}),E=r("2f62"),k=r("bc3a"),L=r.n(k);let A=location.host.includes("localhost")?"//localhost:3000/":"/",M=L.a.create({baseURL:A+"account/",timeout:3e3,withCredentials:!0});class R{static async Login(e){try{let r=await M.post("login",e);return r.data}catch(t){throw new Error(`[login failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Register(e){try{let r=await M.post("register",e);return r.data}catch(t){throw new Error(`[registration failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Logout(){try{await M.delete("logout");return!0}catch(e){throw new Error(`[logout failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await M.get("authenticate");return t.data}catch(e){console.warn(`[Authentication failed] : ${e.response?e.response.data.error:"No response from server"}`)}}}var S={state:{user:{}},mutations:{setUser(e,t){e.user=t}},actions:{async register({commit:e,dispatch:t},r){try{let t=await R.Register(r);e("setUser",t),j.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:e,dispatch:t},r){try{let t=await R.Login(r);e("setUser",t),j.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:e,dispatch:t}){try{await R.Logout();e("resetState"),j.push({name:"login"})}catch(r){console.warn(r.message)}}}};let D=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",F=L.a.create({baseURL:D+"api/boards",timeout:3e3,withCredentials:!0});var I={state:{},mutations:{},actions:{getBoards({commit:e,dispatch:t}){F.get("").then(t=>{e("setResource",{resource:"boards",data:t.data})})},addBoard({commit:e,dispatch:t},r){F.post("",r).then(e=>{t("getBoards")})},async delortBoard({dispatch:e},t){try{await F.delete(t),j.push("/")}catch(r){}}}};a["a"].use(E["a"]);var T=new E["a"].Store({modules:{authModule:S,boardModule:I},state:{boards:[],activeBoard:{}},mutations:{setBoards(e,t){e.boards=t},setResource(e,t){e[t.resource]=t.data}}});async function J(){let e=await R.Authenticate();e?T.commit("setUser",e):j.push({name:"login"}),new a["a"]({router:j,store:T,render:e=>e(c)}).$mount("#app")}J()},"64a9":function(e,t,r){},a9e7:function(e,t,r){},d6db:function(e,t,r){"use strict";var a=r("a9e7"),o=r.n(a);o.a}});
//# sourceMappingURL=app.f3c9642c.js.map