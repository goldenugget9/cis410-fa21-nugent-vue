(function(t){function e(e){for(var r,o,s=e[0],l=e[1],i=e[2],b=0,O=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&O.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(O.length)O.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2350:function(t,e,n){"use strict";n("403d")},3578:function(t,e,n){t.exports=n.p+"img/csu-logo-300px.7643f4a8.png"},"403d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"container-fluid"},a={class:"row justify-content-center"},o=Object(r["g"])("div",{class:"col-md-10 col-lg-7"},null,-1);function s(t,e,n,s,l,i){var u=Object(r["y"])("my-header"),b=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(u),Object(r["g"])("div",c,[Object(r["g"])("div",a,[o,Object(r["i"])(b)])])],64)}var l=function(t){return Object(r["u"])("data-v-81537f30"),t=t(),Object(r["s"])(),t},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(r["h"])("Nugent Podcasts"),O=l((function(){return Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1)})),d={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav ms-auto"},g={class:"nav-item"},j=Object(r["h"])("Podcasts"),f={key:0,class:"nav-item"},m=Object(r["h"])("Listener"),h={key:1,class:"nav-item"},v=l((function(){return Object(r["g"])("button",{class:"btn btn-warning"},"Login",-1)})),A={key:2,class:"nav-item"},y=l((function(){return Object(r["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign Up ",-1)})),k={key:3,class:"nav-item"};function w(t,e,n,c,a,o){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("nav",i,[Object(r["g"])("div",u,[Object(r["i"])(s,{class:"navbar-brand",to:"/"},{default:Object(r["E"])((function(){return[b]})),_:1}),O,Object(r["g"])("div",d,[Object(r["g"])("ul",p,[Object(r["g"])("li",g,[Object(r["i"])(s,{class:"nav-link active","aria-current":"page",to:"/podcasts"},{default:Object(r["E"])((function(){return[j]})),_:1})]),o.auth?(Object(r["r"])(),Object(r["f"])("li",f,[Object(r["i"])(s,{class:"nav-link active","aria-current":"page",to:"/listener"},{default:Object(r["E"])((function(){return[m]})),_:1})])):Object(r["e"])("",!0),o.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",h,[Object(r["i"])(s,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["E"])((function(){return[v]})),_:1})])),o.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["f"])("li",A,[Object(r["i"])(s,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["E"])((function(){return[y]})),_:1})])),o.auth?(Object(r["r"])(),Object(r["f"])("li",k,[Object(r["g"])("button",{class:"btn btn-warning",onClick:e[0]||(e[0]=function(){return o.onLogout&&o.onLogout.apply(o,arguments)})},"Log out")])):Object(r["e"])("",!0)])])])])}var P={computed:{auth:function(){return this.$store.state.token}},methods:{onLogout:function(){this.$store.dispatch("logout")}}},S=(n("912b"),n("6b0d")),E=n.n(S);const x=E()(P,[["render",w],["__scopeId","data-v-81537f30"]]);var C=x,U={name:"App",components:{"my-header":C},created:function(){this.$store.dispatch("getPodcasts")}};n("2350");const F=E()(U,[["render",s]]);var L=F,T=n("bc3a"),B=n.n(T),K=n("6c02"),N=n("3578"),G=n.n(N),M=n("aa35"),I=n.n(M),q=n("6b7b"),Q=n.n(q),z=n("94c4"),D=n.n(z),H=n("8736"),V=n.n(H),_={class:"container-fluid"},X=Object(r["g"])("h4",null,"Podcast Subscription App",-1),$={class:"row justify-content-center"},R={class:"col-8"},W=Object(r["g"])("h1",null,"Home",-1),Y=Object(r["g"])("br",null,null,-1),Z={class:"container-fluid"},J=Object(r["g"])("img",{src:G.a},null,-1),tt=Object(r["g"])("img",{src:I.a},null,-1),et=Object(r["g"])("img",{src:Q.a},null,-1),nt=Object(r["g"])("img",{src:D.a},null,-1),rt=Object(r["g"])("img",{src:V.a},null,-1);function ct(t,e,n,c,a,o){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",_,[X,Object(r["g"])("div",$,[Object(r["g"])("div",R,[Object(r["g"])("div",null,[W,Y,Object(r["g"])("div",Z,[Object(r["i"])(s,{to:"/podcasts/4"},{default:Object(r["E"])((function(){return[J]})),_:1}),Object(r["i"])(s,{to:"/podcasts/1"},{default:Object(r["E"])((function(){return[tt]})),_:1}),Object(r["i"])(s,{to:"/podcasts/3"},{default:Object(r["E"])((function(){return[et]})),_:1}),Object(r["i"])(s,{to:"/podcasts/5"},{default:Object(r["E"])((function(){return[nt]})),_:1}),Object(r["i"])(s,{to:"/podcasts/2"},{default:Object(r["E"])((function(){return[rt]})),_:1})])])])])])}var at={};const ot=E()(at,[["render",ct]]);var st=ot,lt=Object(r["g"])("h1",null,"Login",-1),it={key:0,class:"alert alert-success"},ut={class:"mb-3"},bt=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),Ot={class:"mb-3"},dt=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),pt=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),gt={key:0,class:"form-text text-danger"},jt={key:1,class:"form-text text-danger"};function ft(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[lt,this.$route.query.signupsuccess?(Object(r["r"])(),Object(r["f"])("div",it," Thanks for signing up. Please log in now. ")):Object(r["e"])("",!0),Object(r["g"])("form",{onSubmit:e[2]||(e[2]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",ut,[bt,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.email=t})},null,512),[[r["C"],a.email]])]),Object(r["g"])("div",Ot,[dt,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.password=t})},null,512),[[r["C"],a.password]])]),pt,a.credentialsError?(Object(r["r"])(),Object(r["f"])("p",gt," Invalid credentials ")):Object(r["e"])("",!0),a.loginError?(Object(r["r"])(),Object(r["f"])("p",jt," Could not login. Please try again later. ")):Object(r["e"])("",!0)],32)])}n("ac1f"),n("5319");var mt={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,password:this.password};B.a.post("/listeners/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/listener")})).catch((function(e){console.log("Error in /listener/login",e),401==e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const ht=E()(mt,[["render",ft]]);var vt=ht,At=Object(r["g"])("h1",null,"Not Found",-1),yt=Object(r["g"])("h4",null,"Sorry this page was not found",-1),kt=[At,yt];function wt(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,kt)}var Pt={};const St=E()(Pt,[["render",wt]]);var Et=St,xt={class:"card"},Ct={class:"card-body"},Ut={class:"text-primary"},Ft=Object(r["g"])("br",null,null,-1),Lt=Object(r["h"])(" Creator first name: "),Tt=Object(r["g"])("br",null,null,-1),Bt=Object(r["h"])(" Creator last name: "),Kt=Object(r["g"])("br",null,null,-1),Nt=Object(r["h"])(" Date of creation: "),Gt=Object(r["g"])("br",null,null,-1),Mt=Object(r["g"])("br",null,null,-1),It={key:1,class:"text-danger"},qt=Object(r["g"])("button",{class:"btn btn-outline-success"}," Sign in to Subscribe ",-1);function Qt(t,e,n,c,a,o){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",xt,[Object(r["g"])("div",Ct,[Object(r["g"])("h2",Ut,Object(r["A"])(o.podcast.Title),1),Ft,Object(r["g"])("p",null,[Lt,Tt,Object(r["g"])("strong",null,Object(r["A"])(o.podcast.CreatorFname),1)]),Object(r["g"])("p",null,[Bt,Kt,Object(r["g"])("strong",null,Object(r["A"])(o.podcast.CreatorLname),1)]),Object(r["g"])("p",null,[Nt,Gt,Object(r["g"])("strong",null,Object(r["A"])(o.podcast.DateOfCreation),1)])])]),Mt,o.auth?(Object(r["r"])(),Object(r["f"])("button",{key:0,class:"btn btn-success",onClick:e[0]||(e[0]=function(){return o.subscribe&&o.subscribe.apply(o,arguments)})}," Subscribe ")):Object(r["e"])("",!0),a.errorMessage?(Object(r["r"])(),Object(r["f"])("p",It,Object(r["A"])(a.errorMessage),1)):Object(r["e"])("",!0),o.auth?Object(r["e"])("",!0):(Object(r["r"])(),Object(r["d"])(s,{key:2,to:"/login"},{default:Object(r["E"])((function(){return[qt]})),_:1}))])}n("7db0"),n("d3b7");var zt={data:function(){return{ifSubscribed:!1,errorMessage:null}},computed:{podcast:function(){var t=this,e=this.$store.state.podcasts,n=e.find((function(e){return e.PodcastPK==t.$route.params.pk}));return n},auth:function(){return this.$store.state.token}},methods:{subscribe:function(){var t=this,e={podcastFK:this.$route.params.pk};return B.a.post("/subscriptions",e,{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(){t.$router.replace("/listener")})).catch((function(){t.errorMessage="Unable to subscribe. Please try again later."})),this.ifSubscribed=!0}}};const Dt=E()(zt,[["render",Qt]]);var Ht=Dt,Vt=Object(r["g"])("h1",null,"Podcast",-1),_t=Object(r["g"])("hr",null,null,-1),Xt={class:"table"},$t=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",null,"Title"),Object(r["g"])("th",null,"Creator first name"),Object(r["g"])("th",null,"Creator last name"),Object(r["g"])("th",null,"Date of creation"),Object(r["g"])("th")])],-1),Rt=Object(r["g"])("button",{class:"btn btn-primary"},"Details",-1);function Wt(t,e,n,c,a,o){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[Vt,_t,Object(r["g"])("table",Xt,[$t,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(o.thePodcasts,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.PodcastPK},[Object(r["g"])("th",null,Object(r["A"])(t.Title),1),Object(r["g"])("th",null,Object(r["A"])(t.CreatorFname),1),Object(r["g"])("th",null,Object(r["A"])(t.CreatorLname),1),Object(r["g"])("th",null,Object(r["A"])(t.DateOfCreation),1),Object(r["g"])("th",null,[Object(r["i"])(s,{to:"/podcasts/".concat(t.PodcastPK)},{default:Object(r["E"])((function(){return[Rt]})),_:2},1032,["to"])])])})),128))])])])}var Yt={computed:{thePodcasts:function(){return this.$store.state.podcasts}}};const Zt=E()(Yt,[["render",Wt]]);var Jt=Zt,te=Object(r["g"])("h1",null,"Sign Up",-1),ee=Object(r["g"])("br",null,null,-1),ne={class:"mb-3"},re=Object(r["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),ce={class:"mb-3"},ae=Object(r["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),oe={class:"mb-3"},se=Object(r["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),le={key:0,class:"text-danger"},ie={class:"mb-3"},ue=Object(r["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),be=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Oe={id:"error-signup",class:"text-danger"};function de(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["g"])("div",null,[te,ee,Object(r["g"])("form",{onSubmit:e[4]||(e[4]=Object(r["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["g"])("div",ne,[re,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.nameFirst=t}),style:{"background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC')","background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%"}},null,512),[[r["C"],a.nameFirst]])]),Object(r["g"])("div",ce,[ae,Object(r["F"])(Object(r["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return a.nameLast=t})},null,512),[[r["C"],a.nameLast]])]),Object(r["g"])("div",oe,[se,Object(r["F"])(Object(r["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.email=t})},null,512),[[r["C"],a.email]]),a.dupEmail?(Object(r["r"])(),Object(r["f"])("small",le,"Please use a different email")):Object(r["e"])("",!0)]),Object(r["g"])("div",ie,[ue,Object(r["F"])(Object(r["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return a.password=t}),style:{"background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')","background-repeat":"no-repeat","background-attachment":"scroll","background-size":"16px 18px","background-position":"98% 50%"}},null,512),[[r["C"],a.password]])]),be,Object(r["g"])("p",Oe,Object(r["A"])(a.errorMessage),1)],32)])])}var pe={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={nameFirst:this.nameFirst,nameLast:this.nameLast,email:this.email,password:this.password};B.a.post("/listeners",e).then((function(e){console.log("myResponse",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="Cannot sign you up. Please try again later"}))}}};const ge=E()(pe,[["render",de]]);var je=ge,fe=Object(r["g"])("br",null,null,-1),me=Object(r["g"])("h1",{class:"text-primary"},"Successfully Subscribed",-1),he=[fe,me];function ve(t,e,n,c,a,o){return Object(r["r"])(),Object(r["f"])("div",null,he)}var Ae={data:function(){return{ifSubscribed:!1,errorMessage:null}}};const ye=E()(Ae,[["render",ve]]);var ke=ye,we=Object(r["g"])("h1",null,"Listener",-1),Pe=Object(r["g"])("hr",null,null,-1),Se={key:0,class:"text-danger"},Ee={key:1,class:"table"},xe=Object(r["g"])("thead",null,[Object(r["g"])("th",{id:""},"Title"),Object(r["g"])("th",null,"Date of Subscription")],-1);function Ce(t,e,n,c,a,o){var s=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["f"])("div",null,[we,Pe,Object(r["g"])("h3",null,Object(r["A"])(o.firstName)+"'s Subscriptions",1),a.accountError?(Object(r["r"])(),Object(r["f"])("p",Se," Cannot get your account information. Please try again later. ")):Object(r["e"])("",!0),a.subscriptionsByUser?(Object(r["r"])(),Object(r["f"])("table",Ee,[xe,Object(r["g"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.subscriptionsByUser,(function(t){return Object(r["r"])(),Object(r["f"])("tr",{key:t.SubscriptionPK},[Object(r["g"])("th",null,[Object(r["i"])(s,{to:"/podcasts/".concat(t.PodcastFK)},{default:Object(r["E"])((function(){return[Object(r["h"])(Object(r["A"])(t.title),1)]})),_:2},1032,["to"])]),Object(r["g"])("th",null,Object(r["A"])(t.date),1)])})),128))])])):Object(r["e"])("",!0)])}var Ue={data:function(){return{subscriptionsByUser:null,accountError:!1}},computed:{firstName:function(){return console.log("store so far",this.$store.state),this.$store.state.user.NameFirst}},created:function(){var t=this;B.a.get("/subscriptions/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("This is the ressponse",e),t.subscriptionsByUser=e.data})).catch((function(){t.accountError=!0}))}};const Fe=E()(Ue,[["render",Ce]]);var Le=Fe,Te=n("5502"),Be=Object(Te["a"])({state:{token:null,user:null,podcasts:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storePodcasts:function(t,e){t.podcasts=e},clearAuthData:function(t){t.token=null,t.user=null}},actions:{getPodcasts:function(t){var e=t.commit;B.a.get("/podcasts").then((function(t){console.log(t),e("storePodcasts",t.data)}))},logout:function(t){var e=t.commit,n=t.state;B.a.post("/Listeners/logout",null,{headers:{Authorization:"Bearer ".concat(n.token)}}).then((function(){e("clearAuthData"),Ne.replace("/")})).catch((function(){console.log("error in logging out")}))}}}),Ke=Object(K["a"])({history:Object(K["b"])(),routes:[{path:"/",component:st},{path:"/Listener",component:Le,beforeEnter:function(t,e,n){Be.state.token?n():n("/")}},{path:"/Login",component:vt},{path:"/Podcasts",component:Jt},{path:"/Podcasts/:pk",component:Ht,children:[{path:"subscription",component:ke}]},{path:"/Signup",component:je},{path:"/:invalidroute(.*)",component:Et}]}),Ne=Ke;B.a.defaults.baseURL="https://cis410-fa21-nugent-api.azurewebsites.net";var Ge=Object(r["c"])(L);Ge.use(Ne),Ge.use(Be),Ge.mount("#app")},"6b7b":function(t,e,n){t.exports=n.p+"img/h3-logo-300px.9f7f5334.png"},8736:function(t,e,n){t.exports=n.p+"img/ringer-logo-300px.d884319a.png"},"912b":function(t,e,n){"use strict";n("f28b")},"94c4":function(t,e,n){t.exports=n.p+"img/regular-show-logo-300px.2682f76f.png"},aa35:function(t,e,n){t.exports=n.p+"img/dane-moore-logo-300px.795d97b6.png"},f28b:function(t,e,n){}});
//# sourceMappingURL=app.c3d9cd8c.js.map