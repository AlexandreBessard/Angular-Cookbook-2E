"use strict";(self.webpackChunkng_route_guards=self.webpackChunkng_route_guards||[]).push([[424],{9424:(h,a,e)=>{e.r(a),e.d(a,{AuthComponent:()=>_});var t=e(7564),l=e(1368),c=e(944),i=e(4248),o=e(4840);let _=(()=>{class s{constructor(){this.auth=(0,t.uUt)(c.o),this.router=(0,t.uUt)(i.E5)}naviageToUserRoute(n){switch(n){case o.s.Admin:this.router.navigate(["/admin"]);break;case o.s.Employee:this.router.navigate(["/employee"])}}loginAsAdmin(){const n=o.s.Admin;this.auth.login(n),this.naviageToUserRoute(n)}loginAsEmployee(){const n=o.s.Employee;this.auth.login(n),this.naviageToUserRoute(n)}static#t=this.\u0275fac=function(u){return new(u||s)};static#n=this.\u0275cmp=t.In1({type:s,selectors:[["app-auth"]],standalone:!0,features:[t.UHJ],decls:5,vars:0,consts:[[1,"login","flex","items-center","justify-around","gap-4"],["type","button",3,"click"]],template:function(u,r){1&u&&(t.I0R(0,"div",0)(1,"button",1),t.qCj("click",function(){return r.loginAsAdmin()}),t.OEk(2,"Login as Admin"),t.C$Y(),t.I0R(3,"button",1),t.qCj("click",function(){return r.loginAsEmployee()}),t.OEk(4,"Login as Employee"),t.C$Y()())},dependencies:[l.MD,i.qQ]})}return s})()}}]);