(this.webpackJsonppersonalportfolio=this.webpackJsonppersonalportfolio||[]).push([[0],{100:function(e,a,t){e.exports=t(181)},105:function(e,a,t){},108:function(e,a,t){},181:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(94),r=t.n(c),s=(t(105),t(7)),o=t(8),i=t(11),m=t(10),u=(t(180),t(95)),d=t.n(u),E=(t(108),t(96)),p=t.n(E),h=t(97),v=t.n(h),f=t(99),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,c=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{className:"hhh",id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},l.a.createElement("div",{className:"tsa"}," ",l.a.createElement(p.a,{typing:.5},e?"I'm ".concat(e,"."):null))),l.a.createElement(v.a,{left:!0},l.a.createElement("h3",null,"I'm an ",n," based ",l.a.createElement("span",null,a),". ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},c,l.a.createElement("li",{key:"discord"},l.a.createElement("a",{href:"https://discord.com/users/785909322151755848"},l.a.createElement(f.a,null))))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",null,l.a.createElement("li",null,"Made by Tanishq "))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g=t(19),w=t.n(g),j=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,c=this.props.data.address.city,r=this.props.data.address.state,s=this.props.data.address.zip,o=this.props.data.phone,i=this.props.data.email;this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement(w.a,{bottom:!0},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Tanishq Singh Anand Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),c," ",r,", ",s),l.a.createElement("br",null),l.a.createElement("span",null,o),l.a.createElement("br",null),l.a.createElement("span",null,i))))))))}}]),t}(n.Component),y=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.class," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"})),l.a.createElement("p",null))})),a=this.props.data.skills.map((function(e){var a="bar-expand "+e.name.toLowerCase();return l.a.createElement("li",{key:e.name},l.a.createElement("span",{style:{width:e.level},className:a}),l.a.createElement("em",null,e.name))}))}return l.a.createElement("section",{id:"resume"},l.a.createElement(w.a,{left:!0},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},l.a.createElement(w.a,{left:!0},a)))))))}}]),t}(n.Component),k=t(24),O=t(98),C=t.n(O),S=function(e){var a=e.data,t=Object(n.useState)("mailto:test@example.com?subject=subject&body=body"),c=Object(k.a)(t,2),r=(c[0],c[1],Object(n.useState)("")),s=Object(k.a)(r,2),o=s[0],i=s[1],m=Object(n.useState)(""),u=Object(k.a)(m,2),d=u[0],E=u[1],p=Object(n.useState)(""),h=Object(k.a)(p,2),v=h[0],f=h[1],b=Object(n.useState)(""),N=Object(k.a)(b,2),g=N[0],w=N[1];console.log(a);return l.a.createElement("section",{id:"contact"},l.a.createElement(C.a,{bottom:!0},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},null===a||void 0===a?void 0:a.message))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:o,type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{value:v,type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return f(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{value:d,type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return E(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{value:g,onChange:function(e){return w(e.target.value)},cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),window.open("mailto:".concat("anandtanishqs@gmail.com","?subject=",d,"&body=").concat(o,": ").concat(g))},className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},null===a||void 0===a?void 0:a.name,l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.street," ",l.a.createElement("br",null),null===a||void 0===a?void 0:a.address.city,", ",null===a||void 0===a?void 0:a.address.state," ",null===a||void 0===a?void 0:a.address.zip,l.a.createElement("br",null),l.a.createElement("span",null,null===a||void 0===a?void 0:a.phone))),l.a.createElement("div",{className:"widget widget_tweets"})))))},D=(t(179),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h6",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("div",{class:"arrow bounce"}),l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement(w.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},l.a.createElement(w.a,null,e))))))}}]),t}(n.Component)),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(o.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(j,{data:this.state.resumeData.main}),l.a.createElement(y,{data:this.state.resumeData.resume}),l.a.createElement(D,{data:this.state.resumeData.portfolio}),l.a.createElement(S,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.main}))}}]),t}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");M?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):q(e)}))}}()}},[[100,1,2]]]);
//# sourceMappingURL=main.c0c8ba0b.chunk.js.map