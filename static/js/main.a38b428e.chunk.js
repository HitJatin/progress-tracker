(this.webpackJsonpprogresstracker=this.webpackJsonpprogresstracker||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(21),o=a.n(s),l=(a(66),a(7)),i=a(8),c=a(14),m=a(10),u=a(9),d=(a(23),a(121)),p=a(122),h=a(123),g=a(124),f=a(55),v=a(128),b=a(129),E=a(130),y=a(114),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={dropdownOpen:!1},n.toggle=n.toggle.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"render",value:function(){return""===this.props.name?r.a.createElement("div",null,r.a.createElement(f.a,{onClick:this.props.modalButton},"Login")):r.a.createElement(v.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},r.a.createElement(b.a,{id:"name",caret:!0},this.props.name),r.a.createElement(E.a,null,r.a.createElement(y.a,{onClick:this.props.profile},"Profile"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,{onClick:this.props.dailyPlan},"Daily Progress"),r.a.createElement(y.a,{onClick:this.props.consistency},"Consistency"),r.a.createElement(y.a,{onClick:this.props.pastRecord},"Past Record"),r.a.createElement(y.a,{divider:!0}),r.a.createElement(y.a,{onClick:this.props.logout},"Log out")))}}]),a}(n.Component),O=a(127),j=a(115),w=a(116),P=a(117),C=a(118),N=a(119),D=a(120),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"handleLogin",value:function(e){e.preventDefault();var t=this.username.value,a=this.password.value;this.props.login(t,a),this.props.modalButton()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{isOpen:this.props.openModal,toggle:this.props.modalButton},r.a.createElement(j.a,{toggle:this.props.modalButton},"Login"),r.a.createElement(w.a,null,r.a.createElement(P.a,{onSubmit:this.handleLogin},r.a.createElement(C.a,null,r.a.createElement(N.a,{htmlFor:"username"},"Username"),r.a.createElement(D.a,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(C.a,null,r.a.createElement(N.a,{htmlFor:"password"},"Password"),r.a.createElement(D.a,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(C.a,{check:!0},r.a.createElement(N.a,{check:!0},r.a.createElement(D.a,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(f.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(d.a,{fixed:"top",dark:!0,color:"dark"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,null,r.a.createElement("div",{id:"nav"},r.a.createElement("div",{id:"logo"},r.a.createElement("img",{src:this.props.logo,alt:this.props.title,height:"70",width:"70"})),r.a.createElement("div",{id:"heading"},this.props.title))),r.a.createElement(h.a,{className:"ml-auto",navbar:!0},r.a.createElement(g.a,null,r.a.createElement(k,{modalButton:this.toggleModal,name:this.props.name,pastRecord:this.props.pastRecord,consistency:this.props.consistency,logout:this.props.logout,dailyPlan:this.props.dailyPlan,profile:this.props.profile}))),r.a.createElement(S,{openModal:this.state.isModalOpen,modalButton:this.toggleModal,login:this.props.login}))))}}]),a}(n.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement(d.a,{fixed:"bottom",dark:!0,color:"dark",text:"light"},r.a.createElement(f.a,{onClick:this.props.onClick,variant:"dark",size:"lg",block:!0},"Submit")))}}]),a}(n.Component),R=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=[],a=Object.values(this.props.data);if(this.props.planned){for(var n=0;n<this.props.config.length;n++)t.push(r.a.createElement("div",null,r.a.createElement(x,{name:this.props.config[n],id:n}),r.a.createElement("br",null)));e="Let's plan our day"}else{for(n=0;n<this.props.config.length;n++)t.push(r.a.createElement("div",null,r.a.createElement(A,{name:this.props.config[n],id:n,data:a[n]}),r.a.createElement("br",null)));e="Your today's Plan"}return r.a.createElement(P.a,{className:"formslots"},r.a.createElement("div",{className:"col-12 col-md-10"},r.a.createElement("h1",null,e),r.a.createElement("div",{className:"inlineclass "},r.a.createElement("h5",{className:"col"},"Task Name"),r.a.createElement("h5",{className:"col"},"No. of Slots")),r.a.createElement("br",null),t))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e="plan"+this.props.id;return r.a.createElement("div",{className:"inlineclass pslots"},r.a.createElement(N.a,{htmlFor:"taskname",md:4},this.props.name),r.a.createElement("input",{id:e,className:"col",type:"number",placeholder:"Planned Slots",min:"1",max:"10",required:!0}))}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"inlineclass pslots"},r.a.createElement(N.a,{htmlFor:"taskname",md:6},this.props.name),r.a.createElement(N.a,{htmlFor:"taskslots",md:6},this.props.data))}}]),a}(n.Component),B=R,F=function(e){var t=new Date,a=t.toLocaleString("default",{month:"long"}),n=t.getDate(),s=t.getFullYear();return r.a.createElement("div",{className:"Date"},n+" "+a+", "+s)},H=a(125),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement(P.a,{className:"formslots "},r.a.createElement("div",{className:"col-12 row offset-sm-3"},r.a.createElement("h1",null,"Actual slots")),r.a.createElement("div",{className:"col-12 col-md-10"},r.a.createElement(H.a,{className:"form-group"},r.a.createElement(N.a,{htmlFor:"taskname",md:2},"Core"),r.a.createElement(N.a,{htmlFor:"planslots",md:2},this.props.data.Core),r.a.createElement("input",{className:"col",id:"coreActual",placeholder:"Slots Given",type:"number",min:"1",max:"10",required:!0})),r.a.createElement(H.a,{className:"form-group"},r.a.createElement(N.a,{htmlFor:"taskname",md:2},"Production"),r.a.createElement(N.a,{htmlFor:"taskslots",md:2},this.props.data.Production),r.a.createElement("input",{className:"col",id:"prodActual",placeholder:"Slots Given",type:"number",min:"1",max:"10",required:!0})),r.a.createElement(H.a,{className:"form-group"},r.a.createElement(N.a,{htmlFor:"message",md:2},"Notes "),r.a.createElement("textarea",{id:"notes",rows:"4",className:"col",name:"comment"})))))}}]),a}(n.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isActual:!1,data:{},isPlanned:!0,plannedData:{}},n.onSubmit=n.onSubmit.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date,a=t.getTime(),n=Math.floor(a/1e3)-(60*t.getHours()*60+60*t.getMinutes()+t.getSeconds())-86400;console.log(n);var r="https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev?UserName="+this.props.name+"&Date="+n;fetch(r).then((function(e){return e.json()})).then((function(t){console.log(t),t.isActual&&e.setState({isActual:!0,data:t.actual[0]}),t.isPlanned||e.setState({isPlanned:!1,plannedData:t.planned[0]})}))}},{key:"onSubmit",value:function(){var e;if(!1!==(e=this.props.submit(this.state.isActual))){console.log(t);var t={Core:e[0],Production:e[1]};this.setState({isActual:!1,isPlanned:!1,plannedData:t})}}},{key:"render",value:function(){var e,t;return this.state.isActual&&(e=r.a.createElement(L,{data:this.state.data})),this.state.isPlanned&&(t=r.a.createElement(M,{onClick:this.onSubmit})),r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement("div",{className:"container"},e,r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement(B,{config:["Core","Production"],planned:this.state.isPlanned,data:this.state.plannedData}))),t)}}]),a}(n.Component),T=a(33),q=a.n(T),J=a(58),z=a(59),W=a.n(z),Y=a(60),G=(a(111),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={users:[],loading:!0},n}return Object(i.a)(a,[{key:"getUsersData",value:function(){var e=Object(J.a)(q.a.mark((function e(){var t,a,n,r,s,o,l;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.get("https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/dataanalysis?UserName="+this.props.name);case 2:for(t=e.sent,a=0;a<t.data.length;a++)n=new Date(1e3*t.data[a].Date),console.log(n),r=n.toLocaleString("default",{month:"long"}),s=n.getDate(),o=n.getFullYear(),l=s+" "+r+", "+o,t.data[a].Date=l;this.setState({loading:!1,users:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getUsersData()}},{key:"render",value:function(){return r.a.createElement(Y.a,{data:this.state.users,columns:[{Header:"Date",accessor:"Date"},{Header:"Production-planned",accessor:"Planned.Production"},{Header:"production-actual",accessor:"Actual.Production"},{Header:"Core - planned",accessor:"Planned.Core"},{Header:"Core - actual",accessor:"Actual.Core"},{Header:"Notes",accessor:"Notes"}]})}}]),a}(n.Component)),K=a(126),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a={backgroundColor:"red",color:"white"},n={backgroundColor:"yellow",color:"black"},s={backgroundColor:"rgb(71, 253, 71)",color:"black"};return e=this.props.core>=90?s:this.props.core>=75?n:a,t=this.props.prod>=90?s:this.props.prod>=75?n:a,r.a.createElement("div",{className:"column"},r.a.createElement("h1",{style:{color:"black"}},this.props.head),r.a.createElement(K.a,{dark:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Task"),r.a.createElement("th",null,"Consistency"))),r.a.createElement("tbody",null,r.a.createElement("tr",{style:e,className:"core"},r.a.createElement("td",null,"Core"),r.a.createElement("td",null,parseInt(this.props.core))),r.a.createElement("tr",{style:t,className:"prod"},r.a.createElement("td",null,"Production"),r.a.createElement("td",null,parseInt(this.props.prod))))))}}]),a}(n.Component),$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={week:{},month:{},quarter:{},isConsistency:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.apiUrl+"?UserName="+this.props.name+"&Date=7",a=this.props.apiUrl+"?UserName="+this.props.name+"&Date=28",n=this.props.apiUrl+"?UserName="+this.props.name+"&Date=84";fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({week:t.body}),console.log(t)})),fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({month:t.body}),console.log(t)})),fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({quarter:t.body,isConsistency:!0}),console.log(t)}))}},{key:"render",value:function(){return this.state.isConsistency?r.a.createElement("div",{className:"row"},r.a.createElement(Q,{core:this.state.week.Core,prod:this.state.week.Production,head:"Week"}),r.a.createElement(Q,{core:this.state.month.Core,prod:this.state.month.Production,head:"Month"}),r.a.createElement(Q,{core:this.state.quarter.Core,prod:this.state.quarter.Production,head:"Quarter"})):r.a.createElement("div",null)}}]),a}(n.Component),V=[{Username:"HitJatin",Password:"#Jatin23"},{Username:"Prarthana",Password:"Prarthana"},{Username:"Ritik",Password:"Ritik"},{Username:"Khyati",Password:"Khyati"},{Username:"Aman",Password:"Aman"},{Username:"Palak",Password:"Palak"},{Username:"Mukesh",Password:"Mukesh"}],X=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={name:"",previous:{},isActual:!1,isPlanned:!1,isDaily:!0,isConsistency:!1,isRecords:!1},n.login=n.login.bind(Object(c.a)(n)),n.submit=n.submit.bind(Object(c.a)(n)),n.logout=n.logout.bind(Object(c.a)(n)),n.dailyPlan=n.dailyPlan.bind(Object(c.a)(n)),n.consistency=n.consistency.bind(Object(c.a)(n)),n.pastRecord=n.pastRecord.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"profile",value:function(){alert("method in construction")}},{key:"dailyPlan",value:function(){this.setState({isDaily:!0,isConsistency:!1,isRecords:!1})}},{key:"consistency",value:function(){this.setState({isDaily:!1,isConsistency:!0,isRecords:!1})}},{key:"pastRecord",value:function(){this.setState({isDaily:!1,isConsistency:!1,isRecords:!0})}},{key:"logout",value:function(){this.setState({isDaily:!0,isConsistency:!1,isRecords:!1,name:""})}},{key:"login",value:function(e,t){var a,n=0;for(a=0;a<V.length;a++)if(V[a].Username===e&&V[a].Password===t){this.setState({name:e,isDaily:!0}),n=1;break}0===n&&alert("Incorrect UserName or Password ")}},{key:"submit",value:function(e){var t=new Date,a=t.getTime(),n=Math.floor(a/1e3)-(60*t.getHours()*60+60*t.getMinutes()+t.getSeconds()),r=document.getElementById("plan0").value,s=document.getElementById("plan1").value;if(""===r||""===s)return alert("Please enter all the details"),!1;if(e){var o=document.getElementById("coreActual").value,l=document.getElementById("prodActual").value,i=document.getElementById("notes").value.trim();if(""===o||""===l||""===i)return alert("Please enter all the details"),!1;var c=JSON.stringify({UserName:this.state.name,Date:n-86400,Actual:{Core:o,Production:l},Notes:i});this.setData(c,"https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/update")}var m=JSON.stringify({UserName:this.state.name,Date:n,Name:this.state.name,Planned:{Core:r,Production:s}});return this.setData(m,"https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev"),[r,s]}},{key:"setData",value:function(e,t){var a=new Headers;a.append("Content-Type","application/json"),fetch(t,{method:"POST",headers:a,body:e,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(JSON.parse(e).body)})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){var e;return""!==this.state.name&&(this.state.isDaily?e=r.a.createElement(I,{name:this.state.name,submit:this.submit}):this.state.isConsistency?e=r.a.createElement($,{name:this.state.name,apiUrl:"https://mj3a9u0swa.execute-api.ap-south-1.amazonaws.com/dev/dataanalysis/consistency"}):this.state.isRecords?e=r.a.createElement(G,{name:this.state.name}):alert("There is some error with components")),document.body.style.backgroundImage="url('/progress-tracker/bgimage.jpg')",document.body.style.minHeight=window.screen.height+"px",document.body.style.width=window.screen.width,console.log(window.screen.height+" "+window.screen.width),r.a.createElement("div",{className:"App"},r.a.createElement(U,{logo:"/progress-tracker/skillpill.png",title:"Progress Tracker",name:this.state.name,login:this.login,pastRecord:this.pastRecord,consistency:this.consistency,logout:this.logout,dailyPlan:this.dailyPlan,profile:this.profile}),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,{img:"./bgimage.jpg"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,a){},61:function(e,t,a){e.exports=a(113)},66:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.a38b428e.chunk.js.map