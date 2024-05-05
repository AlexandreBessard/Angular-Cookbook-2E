"use strict";(self.webpackChunkng_cy_bun_pack=self.webpackChunkng_cy_bun_pack||[]).push([[976],{8976:(V,f,c)=>{c.r(f),c.d(f,{UsersComponent:()=>M});var t=c(4496),g=c(1368),m=c(7868),x=c(744),C=c(6700),w=c(528),p=c(5448),v=c(7773);function U(r,e){return r===e}var A=c(6928);class E extends A.wH{constructor(e,s){super()}schedule(e,s=0){return this}}const d={setInterval(r,e,...s){const{delegate:n}=d;return n?.setInterval?n.setInterval(r,e,...s):setInterval(r,e,...s)},clearInterval(r){const{delegate:e}=d;return(e?.clearInterval||clearInterval)(r)},delegate:void 0};var R=c(1248);const I={now:()=>(I.delegate||Date).now(),delegate:void 0};class o{constructor(e,s=o.now){this.schedulerActionCtor=e,this.now=s}schedule(e,s=0,n){return new this.schedulerActionCtor(this,e).schedule(n,s)}}o.now=I.now;const b=new class T extends o{constructor(e,s=o.now){super(e,s),this.actions=[],this._active=!1}flush(e){const{actions:s}=this;if(this._active)return void s.push(e);let n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=s.shift());if(this._active=!1,n){for(;e=s.shift();)e.unsubscribe();throw n}}}(class O extends E{constructor(e,s){super(e,s),this.scheduler=e,this.work=s,this.pending=!1}schedule(e,s=0){var n;if(this.closed)return this;this.state=e;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,s)),this.pending=!0,this.delay=s,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(l,this.id,s),this}requestAsyncId(e,s,n=0){return d.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,s,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return s;null!=s&&d.clearInterval(s)}execute(e,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,s);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,s){let i,n=!1;try{this.work(e)}catch(l){n=!0,i=l||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:e,scheduler:s}=this,{actions:n}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,R.k)(n,this),null!=e&&(this.id=this.recycleAsyncId(s,e,null)),this.delay=null,super.unsubscribe()}}});var k=c(7400);function $(r,e){if(1&r&&(t.S2Z(),t.gRP(),t.SAx(0),t.wR5(1,"app-users-list",10),t.k70()),2&r){const s=t.GaO();t.yG2(),t.E7m("users",s.users())}}function Y(r,e){1&r&&(t.S2Z(),t.gRP(),t.I0R(0,"h2",13),t.OEk(1,"Loading..."),t.C$Y())}function B(r,e){1&r&&(t.S2Z(),t.gRP(),t.I0R(0,"h2",14),t.OEk(1,"Nothing returned for the following search"),t.C$Y())}function G(r,e){if(1&r&&(t.S2Z(),t.yuY(0,Y,2,0,"h2",11)(1,B,2,0,"h2",12)),2&r){const s=t.GaO();t.E7m("ngIf",s.callInProgress()),t.yG2(),t.E7m("ngIf",""!==s.searchInput())}}let M=(()=>{class r{constructor(){this.userService=(0,t.uUt)(m.o),this.searchUserInputChange$=new C.g(""),this.searchInput=(0,t.OCB)(""),this.users=(0,t.OCB)([]),this.callInProgress=(0,t.OCB)(!1),this.searchInputEffect=(0,t.o3l)(()=>{this.searchUserInputChange$.next(this.searchInput())})}ngOnInit(){this.searchUserInputChange$.pipe(function S(r,e=w.Z){return r=r??U,(0,p.i)((s,n)=>{let i,l=!0;s.subscribe((0,v.e)(n,u=>{const h=e(u);(l||!r(i,h))&&(l=!1,i=h,n.next(u))}))})}(),function P(r,e=b){return(0,p.i)((s,n)=>{let i=null,l=null,u=null;const h=()=>{if(i){i.unsubscribe(),i=null;const a=l;l=null,n.next(a)}};function Z(){const a=u+r,y=e.now();if(y<a)return i=this.schedule(void 0,a-y),void n.add(i);h()}s.subscribe((0,v.e)(n,a=>{l=a,u=e.now(),i||(i=e.schedule(Z,r),n.add(i))},()=>{h(),n.complete()},void 0,()=>{l=i=null}))})}(500),(0,k.O)(s=>(this.callInProgress.set(!0),this.userService.findByTerm(s)))).subscribe(s=>{this.users.set(s),this.callInProgress.set(!1)})}onSearchValChange(s){this.searchInput.set(s.target.value)}static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275cmp=t.In1({type:r,selectors:[["app-users"]],standalone:!0,features:[t.UHJ],decls:13,vars:2,consts:[[1,"relative","flex","mb-8"],["for","Search",1,"sr-only"],["type","text","id","Search","data-test-id","searchUsersInput","placeholder","Search for...",1,"w-full","rounded-md","border-gray-200","py-2.5","pe-10","shadow-sm","sm:text-sm",3,"input"],[1,"absolute","inset-y-0","end-0","right-0","grid","w-10","place-content-center"],["type","button",1,"unset","text-gray-600","hover:text-gray-700"],[1,"sr-only"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"h-4","w-4"],["stroke-linecap","round","stroke-linejoin","round","d","M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"],[4,"ngIf","ngIfElse"],["loadingOrMessage",""],[3,"users"],["class","text-xl",4,"ngIf"],["data-test-id","noResultsFoundMessage","class","text-xl",4,"ngIf"],[1,"text-xl"],["data-test-id","noResultsFoundMessage",1,"text-xl"]],template:function(n,i){if(1&n&&(t.I0R(0,"div",0)(1,"label",1),t.OEk(2," Search "),t.C$Y(),t.I0R(3,"input",2),t.qCj("input",function(u){return i.onSearchValChange(u)}),t.C$Y(),t.I0R(4,"span",3)(5,"span",4)(6,"span",5),t.OEk(7,"Search"),t.C$Y(),t.S2Z(),t.I0R(8,"svg",6),t.wR5(9,"path",7),t.C$Y()()()(),t.yuY(10,$,2,1,"ng-container",8)(11,G,2,2,"ng-template",null,9,t.gJz)),2&n){const l=t.Gew(12);t.yG2(10),t.E7m("ngIf",i.users().length>0&&!i.callInProgress())("ngIfElse",l)}},dependencies:[g.MD,g.u_,x.Q]})}return r})()}}]);