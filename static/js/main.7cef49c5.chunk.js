(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/quiz.b5250645.png"},,function(t,e,a){t.exports=a(20)},,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){t.exports=a.p+"static/media/loader.96a335de.gif"},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(7),r=a.n(c),o=(a(15),a(16),a(1)),i=a(2),l=a(4),u=a(3),m=a(5),d=a(8),h=a.n(d),p=(a(17),a(9));a(18);function b(t){return s.a.createElement("div",{className:"resultbox"},s.a.createElement("p",{className:"question"},s.a.createElement("strong",null,"RESULT")),s.a.createElement("div",{className:"mcq"},s.a.createElement("h2",null,"You got ",t.score,"/10 ")),s.a.createElement("button",{type:"button",onClick:t.restart,className:"btn btn-warning m-2"},"NEXT"),s.a.createElement("br",null))}a(19);var f=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={checked:[!1,!1,!1,!1],index:0,score:0,useranswer:""},a.checkbox=function(t,e){console.log(t);var n=a.state.checked;n[t]=!a.state.checked[t],a.setState({checked:n,useranswer:e})},a.nextQuestion=function(){a.state.useranswer===a.props.data[a.state.index].correct_answer&&a.setState({score:a.state.score+1}),a.setState({index:a.state.index+1,checked:[!1,!1,!1,!1]}),a.props.datafromchild(a.state.index)},a.restart=function(){a.props.restart()},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=[];return this.state.index<10&&(e=[].concat(Object(p.a)(this.props.data[this.state.index].incorrect_answers),[this.props.data[this.state.index].correct_answer])),s.a.createElement("div",null,this.state.index<10?s.a.createElement("div",{className:"questionbox"},s.a.createElement("p",{className:"question"},s.a.createElement("strong",null,"Question:"),this.props.data[this.state.index].question),s.a.createElement("div",{className:"mcq"},e.map(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{type:"checkbox",id:a,value:e,checked:t.state.checked[a],onChange:function(){return t.checkbox(a,e)},style:{display:"none"}}),s.a.createElement("label",{className:"option",htmlFor:a},s.a.createElement("strong",{className:"a"},a+1),s.a.createElement("span",null,e)))})),s.a.createElement("button",{type:"button",onClick:this.nextQuestion,className:"btn btn-warning m-2"},"NEXT"),s.a.createElement("br",null)):s.a.createElement(b,{score:this.state.score,restart:this.restart}))}}]),e}(s.a.Component),E=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={data:[],start:!1,count:1},a.startgame=function(){a.setState({start:!0})},a.restart=function(){a.setState({data:[],start:!1}),a.componentDidMount()},a.datafromchild=function(t){console.log(t),a.setState({count:t+2})},a}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then(function(t){return t.json()}).then(function(e){t.setState({data:e.results})})}},{key:"render",value:function(){return console.log(this.state.data),s.a.createElement("section",{className:"mainbox"},s.a.createElement("div",{className:"leftbox"},s.a.createElement("h1",{className:"questionCount"},this.state.count<11?this.state.count+"/10":"RESULT"),s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:h.a,alt:"imagename"}))),s.a.createElement("div",{className:"rightbox"},this.state.start?s.a.createElement(f,{datafromchild:this.datafromchild,restart:this.restart,data:this.state.data}):s.a.createElement("button",{type:"button",onClick:this.startgame,className:"btn start btn-warning m-2"},"START")))}}]),e}(s.a.Component);var g=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.7cef49c5.chunk.js.map