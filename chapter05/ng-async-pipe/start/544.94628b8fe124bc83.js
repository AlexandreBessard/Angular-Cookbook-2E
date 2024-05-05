"use strict";(self.webpackChunkng_async_pipe=self.webpackChunkng_async_pipe||[]).push([[544],{544:(E,m,c)=>{c.r(m),c.d(m,{HomeComponent:()=>D});var p=c(368),v=c(928);class C extends v.wH{constructor(t,e){super()}schedule(t,e=0){return this}}const l={setInterval(i,t,...e){const{delegate:n}=l;return n?.setInterval?n.setInterval(i,t,...e):setInterval(i,t,...e)},clearInterval(i){const{delegate:t}=l;return(t?.clearInterval||clearInterval)(i)},delegate:void 0};var y=c(248);const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class a{constructor(t,e=a.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,n){return new this.schedulerActionCtor(this,t).schedule(n,e)}}a.now=f.now;const g=new class S extends a{constructor(t,e=a.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}(class O extends C{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var n;if(this.closed)return this;this.state=t;const r=this.id,o=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(o,this.id,e),this}requestAsyncId(t,e,n=0){return l.setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&l.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let r,n=!1;try{this.work(t)}catch(o){n=!0,r=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,y.k)(n,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),b=g;var P=c(252),M=c(48);function d(i=0,t=g){return i<0&&(i=0),function I(i=0,t,e=b){let n=-1;return null!=t&&((0,M.G)(t)?e=t:n=t),new P._(r=>{let o=function _(i){return i instanceof Date&&!isNaN(i)}(i)?+i-e.now():i;o<0&&(o=0);let u=0;return e.schedule(function(){r.closed||(r.next(u++),0<=n?this.schedule(void 0,n):r.complete())},o)})}(i,i,t)}var A=c(448),w=c(773);function h(i,t=!1){return(0,A.i)((e,n)=>{let r=0;e.subscribe((0,w.e)(n,o=>{const u=i(o,r++);(u||t)&&n.next(o),!u&&n.complete()}))})}var s=c(564);function x(i,t){if(1&i&&(s.I0R(0,"div",8),s.OEk(1),s.C$Y()),2&i){const e=t.$implicit;s.yG2(),s.oRS(" ",e," ")}}function k(i,t){if(1&i&&(s.I0R(0,"div",8),s.OEk(1),s.C$Y()),2&i){const e=t.$implicit;s.yG2(),s.oRS(" ",e," ")}}let D=(()=>{class i{constructor(){this.inputStreamData=["john wick","inception","interstellar"],this.outputStreamData=[]}startStream(){this.isStreamActive=!0;const e=d(3e3),n=d(500);d(1500).pipe(h(()=>this.isStreamActive)).subscribe(o=>{this.outputStreamData.push(o),console.log("first stream output",o)}),e.pipe(h(()=>this.isStreamActive)).subscribe(o=>{this.outputStreamData.push(o),console.log("second stream output",o)}),n.pipe(h(()=>this.isStreamActive)).subscribe(o=>{this.outputStreamData.push(o),console.log("fastest stream output",o)})}ngOnDestroy(){this.stopStream()}stopStream(){this.isStreamActive=!1}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=s.In1({type:i,selectors:[["app-home"]],standalone:!0,features:[s.UHJ],decls:11,vars:4,consts:[[1,"home"],[1,"buttons-container"],[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-dark",3,"disabled","click"],[1,"cards-container"],[1,"input-stream"],["class","input-stream__item",4,"ngFor","ngForOf"],[1,"output-stream"],[1,"input-stream__item"]],template:function(n,r){1&n&&(s.I0R(0,"div",0)(1,"div",1)(2,"button",2),s.qCj("click",function(){return r.startStream()}),s.OEk(3,"Start Stream"),s.C$Y(),s.I0R(4,"button",3),s.qCj("click",function(){return r.stopStream()}),s.OEk(5,"Stop Stream"),s.C$Y()(),s.I0R(6,"div",4)(7,"div",5),s.yuY(8,x,2,1,"div",6),s.C$Y(),s.I0R(9,"div",7),s.yuY(10,k,2,1,"div",6),s.C$Y()()()),2&n&&(s.yG2(2),s.E7m("disabled",r.isStreamActive),s.yG2(2),s.E7m("disabled",!r.isStreamActive),s.yG2(4),s.E7m("ngForOf",r.inputStreamData),s.yG2(2),s.E7m("ngForOf",r.outputStreamData))},dependencies:[p.MD,p.ay],styles:[".home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]{display:flex}.home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .input-stream[_ngcontent-%COMP%]{margin-right:10px}.home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .output-stream[_ngcontent-%COMP%]{margin-left:10px}.home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .input-stream[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .output-stream[_ngcontent-%COMP%]{flex:1;padding:1.8rem;background-color:#333;min-height:200px;min-width:200px;border-radius:14px}.home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .input-stream__item[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .cards-container[_ngcontent-%COMP%]   .output-stream__item[_ngcontent-%COMP%]{color:#90ee90}.home[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{margin-bottom:30px;display:flex;justify-content:center}.home[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{opacity:.3}.home[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1){margin-right:16px}"]})}return i})()}}]);