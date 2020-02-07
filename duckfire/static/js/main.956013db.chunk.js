(this["webpackJsonpduck-fire"]=this["webpackJsonpduck-fire"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/coin.4df1288f.svg"},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),s=a.n(r),o=(a(31),a(2)),c=a(4),l=a(7),m=a(6),u=a(8),h=a(15),p=a(11),d=function e(t,a,n){Object(o.a)(this,e),this.name=t,this.durability=100,this.damage=a,n>0&&(this.bullets=n)},v=localStorage.getItem("player"),f=function(){function e(){if(Object(o.a)(this,e),this.saveData=this.saveData.bind(this),null!==v){var t=JSON.parse(v);this.level=t.level,this.record=t.record,this.score=t.score,this.name=t.name,this.coins=t.coins,this.weapon=t.weapon,this.inventory=t.inventory}else this.level=1,this.record=0,this.score=0,this.name="PlayerUnknown",this.coins=0,this.weapon="Sling",this.inventory={weapons:{sling:new d("Sling",5,0)}};this.saveData()}return Object(c.a)(e,[{key:"setName",value:function(e){this.name=e,this.saveData()}},{key:"setLevel",value:function(e){this.level=e,this.saveData()}},{key:"setRecord",value:function(e){this.record=e,this.saveData()}},{key:"setScore",value:function(e){this.score=e,this.saveData()}},{key:"updateWeapon",value:function(e,t){t?this.inventory.weapons[e]=t:delete this.inventory.weapons[e],this.saveData()}},{key:"getDamage",value:function(){var e=this.inventory.weapons[this.weapon.toLowerCase()];if(e.hasOwnProperty("bullets")){if(!(e.bullets>0))return 0;e.bullets=e.bullets-1}return e.damage}},{key:"saveData",value:function(){localStorage.setItem("player",JSON.stringify(this))}}]),e}(),y=i.a.createContext({player:"unknown"}),b=a(3),g=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.player,i=n.level,r=n.record;return a.state={level:i,record:r},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"updateScore",value:function(e){this.state.record<this.props.score?(this.props.player.setRecord(e),this.props.player.setScore(e),this.setState({record:e})):this.props.player.setScore(e)}},{key:"updateLevel",value:function(e){this.props.player.setLevel(e),this.setState({level:e})}},{key:"render",value:function(){var e=this.props.score;return i.a.createElement("div",{className:"player__information"},i.a.createElement("div",{className:"score info__box"},i.a.createElement("div",{className:"data"},i.a.createElement("span",{className:"item"},"Score:"),i.a.createElement("span",{className:"value"},e))))}}]),t}(i.a.Component),k=a(25),E=a(16),O=function e(t,a,n){var i=this;Object(o.a)(this,e),this.calcolateProbability=function(){var e=i.dodge,t=100-i.dodge;i.probability=[{value:!1,probability:e},{value:!0,probability:t}]},this.getScale=function(e){var t=(e+2*Math.random())/2;i.scale=t<.45?.45:t},this.initialPosition=function(){for(i.start=Math.floor(2*Math.random()),i.end=i.start;i.end===i.start;)i.end=Math.floor(2*Math.random())},this.dodge=a*n/100,this.initialPosition(),this.getScale(t),this.calcolateProbability()},j=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).shotProbability=function(e){var t=100*Math.random(),n=e.find((function(e){var a=e.probability;return t<=a}));return n?n.value:a.last(e).value},a.last=function(e){return e[e.length-1]},a.shotResult=function(){return a.shotProbability(a.state.probability)},a.onClick=function(){var e=a.state.life,t=a.context.player,n=a.shotResult();if(a.props.monster.status&&n){var i=t.getDamage();i>0&&a.setState({life:e-i},(function(){this.state.life<=0&&this.props.death(this.state.id,this.state.monsterValue)}))}},a.startMoviment=function(){var e=Object(b.a)(a),t=a.props.monster.status,n=a.state,i=n.visibility,r=n.domElement,s=n.minLeft,o=n.maxLeft,c=n.minTop,l=n.maxTop,m=n.timeAlive;t&&Object(E.a)({targets:r,opacity:function(){return m>0?1:0},top:function(){return E.a.random(c,l)},left:function(){return E.a.random(s,o)},easing:"easeInOutQuad",begin:function(t){i||e.setState({visibility:!0})},duration:2500,complete:a.startMoviment}),a.setState({timeAlive:m+1},(function(){}))},a.playerCheck=function(e){},a.componentDidMount=function(){var e=Object(b.a)(a),t=s.a.findDOMNode(Object(b.a)(a)),n=t.offsetWidth,i=n/2,r=a.props.gameWidth-n,o=t.offsetHeight,c=o/2,l=a.props.gameHeight-o;a.setState({domElement:t,minLeft:i,maxLeft:r,minTop:c,maxTop:l},(function(){e.startMoviment()}))};var n=new O(a.props.monster.scale,a.props.monster.dodge,a.props.level);return a.state=Object(k.a)({},n,{width:100,height:100,life:20,monsterValue:200,domElement:"",minLeft:0,maxLeft:0,minTop:0,maxTop:0,timeAlive:0,id:a.props.id,elementId:"duck_"+a.props.id,visibility:!1}),a.onClick=a.onClick.bind(Object(b.a)(a)),a.startMoviment=a.startMoviment.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.monster.status?i.a.createElement("div",{className:"duck",style:{visibility:this.state.visibility?"visible":"hidden",opacity:0,width:this.state.width,height:this.state.height,transform:"scale("+this.state.scale+")"},id:this.state.elementId,onClick:this.onClick}):null}}]),t}(i.a.Component);j.contextType=y;var w=j,_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).generateMonster=function(){var e=Object(b.a)(a),t=e.state.enemies;t.push({Type:w,data:{monster:e.generateMonsterSkill(),level:e.props.player.level}}),e.setState({enemies:t})},a.monsterDeath=function(e,t){var n=a.state,i=n.enemies,r=n.score;i[e].data.monster.status=!1,a.setState({enemies:i,score:r+t},(function(){console.log("Killed: "+e)}))},a.generateMonsterSkill=function(){var e=Math.floor(2*Math.random());return{dodge:Math.floor(41*Math.random())+10,scale:e,status:!0}},a.renderMonster=function(e){var t=Object(b.a)(a);return i.a.createElement(i.a.Fragment,null,e.map((function(e,a){var n=e.Type,r=e.data;return i.a.createElement(n,{monster:r.monster,level:r.level,death:t.monsterDeath,gameWidth:t.state.gameWidth,gameHeight:t.state.gameHeight,state:r.state,id:a,key:a})})))},a.runTick=function(){var e=Object(b.a)(a);if(a.state.game){var t=a.tickTime(e.props.player.level);a.tick({oneWay:e.generateMonster,counter:t},e.runTick)}},a.tick=function(e,t){var n=e.oneWay,i=e.counter,r=Object(b.a)(a);setTimeout((function(){r.state.game&&(n(),t())}),i)},a.tickTime=function(e){var t;return t=1e3*Math.random()+(1e3-5*e),Math.floor(t)},a.componentDidMount=function(){a.setState({gameWidth:document.getElementById("game__play").offsetWidth,gameHeight:document.getElementById("game__play").offsetHeight}),a.runTick(),a.bind()},a.restartGame=function(){var e=Object(b.a)(a);a.state.game||a.setState({game:1,enemies:[],score:0},(function(){e.runTick()}))},a.exitGame=function(){a.setState({game:0,enemies:[]})},a.bind=function(){document.addEventListener("keydown",a.keydownFunction,!1),document.addEventListener("keydown",a.keydownFunction,!1)},a.state={game:1,gameWidth:0,gameHeight:0,player:a.props.player,enemies:[],score:0},a.keydownFunction=a.keydownFunction.bind(Object(b.a)(a)),a.generateMonster=a.generateMonster.bind(Object(b.a)(a)),a.monsterDeath=a.monsterDeath.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"keydownFunction",value:function(e){27===e.keyCode?this.exitGame():13!==e.keyCode&&32!==e.keyCode||this.restartGame()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownFunction,!1)}},{key:"render",value:function(){var e=this.renderMonster(this.state.enemies);return i.a.createElement("div",{id:"game__play"},i.a.createElement("div",{className:"exit",onClick:this.exitGame,style:{display:this.state.game?"block":"none"}},i.a.createElement("span",null,"EXIT")),i.a.createElement("div",{className:"play",style:{display:this.state.game?"none":"block"},onClick:this.restartGame},i.a.createElement("span",null,"PLAY")),i.a.createElement(g,{player:this.state.player,score:this.state.score}),e)}}]),t}(i.a.Component),M=a(22),N=a.n(M),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"player__data"},i.a.createElement("div",{className:"name"},i.a.createElement("h2",null,this.props.player.name)),i.a.createElement("div",{className:"coins"},i.a.createElement("span",{className:"item"},i.a.createElement("img",{className:"coin__flip",src:N.a,alt:"coin-face"}),i.a.createElement("span",{className:"coin__label"},"Coins")),i.a.createElement("span",{className:"value"},this.props.player.coins)))}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={data:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"game__dashboard__wrapper"},i.a.createElement("div",{className:"game__dashboard"},i.a.createElement("div",{className:"game__logo"},i.a.createElement("img",{alt:"logo",src:"https://via.placeholder.com/350x150"})),i.a.createElement("div",{className:"game__navigator"},i.a.createElement("div",{className:"game__link game__button"},i.a.createElement(h.b,{to:"/duckfire/play"},"Play Game")))),i.a.createElement(y.Consumer,null,(function(e){var t=e.player;return i.a.createElement(S,{player:t})})))}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={player:new f},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(y.Provider,{value:{player:this.state.player}},i.a.createElement(h.a,null,i.a.createElement("div",{className:"game__wrapper"},i.a.createElement("div",{className:"game__scene"},i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{exact:!0,path:"/duckfire"},i.a.createElement(x,{player:this.state.player})),i.a.createElement(p.a,{exact:!0,path:"/duckfire/play"},i.a.createElement(y.Consumer,null,(function(e){var t=e.player;return i.a.createElement(_,{player:t})}))),i.a.createElement(p.a,{exact:!0,path:"/duckfire/inventory"},i.a.createElement(x,{player:this.state.player})),i.a.createElement(p.a,{exact:!0,path:"/duckfire/profile"},i.a.createElement(x,{player:this.state.player})),i.a.createElement(p.a,{exact:!0,path:"/duckfire/shop"},i.a.createElement(x,{player:this.state.player})))))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.956013db.chunk.js.map