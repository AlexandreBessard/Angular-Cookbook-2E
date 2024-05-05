"use strict";(self.webpackChunkng_cy_mock_data=self.webpackChunkng_cy_mock_data||[]).push([[260],{4728:()=>{!function(t){const n=t.performance;function i(L){n&&n.mark&&n.mark(L)}function o(L,T){n&&n.measure&&n.measure(L,T)}i("Zone");const c=t.__Zone_symbol_prefix||"__zone_symbol__";function a(L){return c+L}const y=!0===t[a("forceDuplicateZoneCheck")];if(t.Zone){if(y||"function"!=typeof t.Zone.__symbol__)throw new Error("Zone already loaded.");return t.Zone}let d=(()=>{class L{static#e=this.__symbol__=a;static assertZonePatched(){if(t.Promise!==se.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=L.current;for(;e.parent;)e=e.parent;return e}static get current(){return U.zone}static get currentTask(){return oe}static __load_patch(e,r,k=!1){if(se.hasOwnProperty(e)){if(!k&&y)throw Error("Already loaded patch: "+e)}else if(!t["__Zone_disable_"+e]){const C="Zone:"+e;i(C),se[e]=r(t,L,z),o(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(e,r){this._parent=e,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}get(e){const r=this.getZoneWith(e);if(r)return r._properties[e]}getZoneWith(e){let r=this;for(;r;){if(r._properties.hasOwnProperty(e))return r;r=r._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,r){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const k=this._zoneDelegate.intercept(this,e,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(e,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,e,r,k,C)}finally{U=U.parent}}runGuarded(e,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,e,r,k,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{U=U.parent}}runTask(e,r,k){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||J).name+"; Execution: "+this.name+")");if(e.state===x&&(e.type===Q||e.type===P))return;const C=e.state!=E;C&&e._transitionTo(E,j),e.runCount++;const $=oe;oe=e,U={parent:U,zone:this};try{e.type==P&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,r,k)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{e.state!==x&&e.state!==h&&(e.type==Q||e.data&&e.data.isPeriodic?C&&e._transitionTo(j,E):(e.runCount=0,this._updateTaskCount(e,-1),C&&e._transitionTo(x,E,x))),U=U.parent,oe=$}}scheduleTask(e){if(e.zone&&e.zone!==this){let k=this;for(;k;){if(k===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);k=k.parent}}e._transitionTo(X,x);const r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(k){throw e._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==X&&e._transitionTo(j,X),e}scheduleMicroTask(e,r,k,C){return this.scheduleTask(new m(I,e,r,k,C,void 0))}scheduleMacroTask(e,r,k,C,$){return this.scheduleTask(new m(P,e,r,k,C,$))}scheduleEventTask(e,r,k,C,$){return this.scheduleTask(new m(Q,e,r,k,C,$))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||J).name+"; Execution: "+this.name+")");if(e.state===j||e.state===E){e._transitionTo(G,j,E);try{this._zoneDelegate.cancelTask(this,e)}catch(r){throw e._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(e,-1),e._transitionTo(x,G),e.runCount=0,e}}_updateTaskCount(e,r){const k=e._zoneDelegates;-1==r&&(e._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(e.type,r)}}return L})();const b={name:"",onHasTask:(L,T,e,r)=>L.hasTask(e,r),onScheduleTask:(L,T,e,r)=>L.scheduleTask(e,r),onInvokeTask:(L,T,e,r,k,C)=>L.invokeTask(e,r,k,C),onCancelTask:(L,T,e,r)=>L.cancelTask(e,r)};class v{constructor(T,e,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=e,this._forkZS=r&&(r&&r.onFork?r:e._forkZS),this._forkDlgt=r&&(r.onFork?e:e._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:e._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:e._interceptZS),this._interceptDlgt=r&&(r.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:e._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:e._invokeZS),this._invokeDlgt=r&&(r.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:e._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:e._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:e._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:e._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:e._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:e._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:e._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:e._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||e&&e._hasTaskZS)&&(this._hasTaskZS=k?r:b,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}fork(T,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,e):new d(T,e)}intercept(T,e,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,e,r):e}invoke(T,e,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,e,r,k,C):e.apply(r,k)}handleError(T,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,e)}scheduleTask(T,e){let r=e;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,e),r||(r=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=I)throw new Error("Task is missing scheduleFn.");R(e)}return r}invokeTask(T,e,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,e,r,k):e.callback.apply(r,k)}cancelTask(T,e){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");r=e.cancelFn(e)}return r}hasTask(T,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,e)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,e){const r=this._taskCounts,k=r[T],C=r[T]=k+e;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class m{constructor(T,e,r,k,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=e,this.data=k,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const u=this;this.invoke=T===Q&&k&&k.useG?m.invokeTask:function(){return m.invokeTask.call(t,u,this,arguments)}}static invokeTask(T,e,r){T||(T=this),te++;try{return T.runCount++,T.zone.runTask(T,e,r)}finally{1==te&&_(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(T,e,r){if(this._state!==e&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const M=a("setTimeout"),O=a("Promise"),N=a("then");let K,B=[],H=!1;function q(L){if(K||t[O]&&(K=t[O].resolve(0)),K){let T=K[N];T||(T=K.then),T.call(K,L)}else t[M](L,0)}function R(L){0===te&&0===B.length&&q(_),L&&B.push(L)}function _(){if(!H){for(H=!0;B.length;){const L=B;B=[];for(let T=0;T<L.length;T++){const e=L[T];try{e.zone.runTask(e,null,null)}catch(r){z.onUnhandledError(r)}}}z.microtaskDrainDone(),H=!1}}const J={name:"NO ZONE"},x="notScheduled",X="scheduling",j="scheduled",E="running",G="canceling",h="unknown",I="microTask",P="macroTask",Q="eventTask",se={},z={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new d(null,null)},oe=null,te=0;function W(){}o("Zone","Zone"),t.Zone=d}(globalThis);const fe=Object.getOwnPropertyDescriptor,me=Object.defineProperty,be=Object.getPrototypeOf,De=Object.create,ct=Array.prototype.slice,Ze="addEventListener",Oe="removeEventListener",Ne=Zone.__symbol__(Ze),Ie=Zone.__symbol__(Oe),ce="true",ae="false",pe=Zone.__symbol__("");function Me(t,n){return Zone.current.wrap(t,n)}function Le(t,n,i,o,c){return Zone.current.scheduleMacroTask(t,n,i,o,c)}const A=Zone.__symbol__,Pe=typeof window<"u",_e=Pe?window:void 0,Y=Pe&&_e||globalThis,at="removeAttribute";function je(t,n){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=Me(t[i],n+"_"+i));return t}function Fe(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Be=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,we=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),Ae=!we&&!Be&&!(!Pe||!_e.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Be&&!(!Pe||!_e.HTMLElement),Re={},We=function(t){if(!(t=t||Y.event))return;let n=Re[t.type];n||(n=Re[t.type]=A("ON_PROPERTY"+t.type));const i=this||t.target||Y,o=i[n];let c;return Ae&&i===_e&&"error"===t.type?(c=o&&o.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===c&&t.preventDefault()):(c=o&&o.apply(this,arguments),null!=c&&!c&&t.preventDefault()),c};function qe(t,n,i){let o=fe(t,n);if(!o&&i&&fe(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=A("on"+n+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let b=Re[d];b||(b=Re[d]=A("ON_PROPERTY"+d)),o.set=function(v){let m=this;!m&&t===Y&&(m=Y),m&&("function"==typeof m[b]&&m.removeEventListener(d,We),y&&y.call(m,null),m[b]=v,"function"==typeof v&&m.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&t===Y&&(v=Y),!v)return null;const m=v[b];if(m)return m;if(a){let M=a.call(this);if(M)return o.set.call(this,M),"function"==typeof v[at]&&v.removeAttribute(n),M}return null},me(t,n,o),t[c]=!0}function Xe(t,n,i){if(n)for(let o=0;o<n.length;o++)qe(t,"on"+n[o],i);else{const o=[];for(const c in t)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)qe(t,o[c],i)}}const re=A("originalInstance");function ge(t){const n=Y[t];if(!n)return;Y[A(t)]=n,Y[t]=function(){const c=je(arguments,t);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},ue(Y[t],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===t&&"responseBlob"===o||function(c){"function"==typeof i[c]?Y[t].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:me(Y[t].prototype,c,{set:function(a){"function"==typeof a?(this[re][c]=Me(a,t+"."+c),ue(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(Y[t][o]=n[o])}function le(t,n,i){let o=t;for(;o&&!o.hasOwnProperty(n);)o=be(o);!o&&t[n]&&(o=t);const c=A(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&fe(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},ue(o[n],a)}return a}function ut(t,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=le(t,n,a=>function(y,d){const b=i(y,d);return b.cbIdx>=0&&"function"==typeof d[b.cbIdx]?Le(b.name,d[b.cbIdx],b,c):a.apply(y,d)})}function ue(t,n){t[A("OriginalDelegate")]=n}let ze=!1,He=!1;function ht(){if(ze)return He;ze=!0;try{const t=_e.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(He=!0)}catch{}return He}Zone.__load_patch("ZoneAwarePromise",(t,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],b=!1!==t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),m=y("then"),M="__creationTrace__";i.onUnhandledError=u=>{if(i.showUncaughtError()){const l=u&&u.rejection;l?console.error("Unhandled Promise rejection:",l instanceof Error?l.message:l,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",l,l instanceof Error?l.stack:void 0):console.error(u)}},i.microtaskDrainDone=()=>{for(;d.length;){const u=d.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(l){N(l)}}};const O=y("unhandledPromiseRejectionHandler");function N(u){i.onUnhandledError(u);try{const l=n[O];"function"==typeof l&&l.call(this,u)}catch{}}function B(u){return u&&u.then}function H(u){return u}function K(u){return e.reject(u)}const q=y("state"),R=y("value"),_=y("finally"),J=y("parentPromiseValue"),x=y("parentPromiseState"),X="Promise.then",j=null,E=!0,G=!1,h=0;function I(u,l){return s=>{try{z(u,l,s)}catch(f){z(u,!1,f)}}}const P=function(){let u=!1;return function(s){return function(){u||(u=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",se=y("currentTaskTrace");function z(u,l,s){const f=P();if(u===s)throw new TypeError(Q);if(u[q]===j){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(w){return f(()=>{z(u,!1,w)})(),u}if(l!==G&&s instanceof e&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==j)oe(s),z(u,s[q],s[R]);else if(l!==G&&"function"==typeof g)try{g.call(s,f(I(u,l)),f(I(u,!1)))}catch(w){f(()=>{z(u,!1,w)})()}else{u[q]=l;const w=u[R];if(u[R]=s,u[_]===_&&l===E&&(u[q]=u[x],u[R]=u[J]),l===G&&s instanceof Error){const p=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];p&&c(s,se,{configurable:!0,enumerable:!1,writable:!0,value:p})}for(let p=0;p<w.length;)te(u,w[p++],w[p++],w[p++],w[p++]);if(0==w.length&&l==G){u[q]=h;let p=s;try{throw new Error("Uncaught (in promise): "+function a(u){return u&&u.toString===Object.prototype.toString?(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u):u?u.toString():Object.prototype.toString.call(u)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(S){p=S}b&&(p.throwOriginal=!0),p.rejection=s,p.promise=u,p.zone=n.current,p.task=n.currentTask,d.push(p),i.scheduleMicroTask()}}}return u}const U=y("rejectionHandledHandler");function oe(u){if(u[q]===h){try{const l=n[U];l&&"function"==typeof l&&l.call(this,{rejection:u[R],promise:u})}catch{}u[q]=G;for(let l=0;l<d.length;l++)u===d[l].promise&&d.splice(l,1)}}function te(u,l,s,f,g){oe(u);const w=u[q],p=w?"function"==typeof f?f:H:"function"==typeof g?g:K;l.scheduleMicroTask(X,()=>{try{const S=u[R],D=!!s&&_===s[_];D&&(s[J]=S,s[x]=w);const Z=l.run(p,void 0,D&&p!==K&&p!==H?[]:[S]);z(s,!0,Z)}catch(S){z(s,!1,S)}},s)}const L=function(){},T=t.AggregateError;class e{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(l){return l instanceof e?l:z(new this(null),E,l)}static reject(l){return z(new this(null),G,l)}static withResolvers(){const l={};return l.promise=new e((s,f)=>{l.resolve=s,l.reject=f}),l}static any(l){if(!l||"function"!=typeof l[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let p of l)f++,s.push(e.resolve(p))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const w=[];return new e((p,S)=>{for(let D=0;D<s.length;D++)s[D].then(Z=>{g||(g=!0,p(Z))},Z=>{w.push(Z),f--,0===f&&(g=!0,S(new T(w,"All promises were rejected")))})})}static race(l){let s,f,g=new this((S,D)=>{s=S,f=D});function w(S){s(S)}function p(S){f(S)}for(let S of l)B(S)||(S=this.resolve(S)),S.then(w,p);return g}static all(l){return e.allWithCallback(l)}static allSettled(l){return(this&&this.prototype instanceof e?this:e).allWithCallback(l,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(l,s){let f,g,w=new this((Z,V)=>{f=Z,g=V}),p=2,S=0;const D=[];for(let Z of l){B(Z)||(Z=this.resolve(Z));const V=S;try{Z.then(F=>{D[V]=s?s.thenCallback(F):F,p--,0===p&&f(D)},F=>{s?(D[V]=s.errorCallback(F),p--,0===p&&f(D)):g(F)})}catch(F){g(F)}p++,S++}return p-=2,0===p&&f(D),w}constructor(l){const s=this;if(!(s instanceof e))throw new Error("Must be an instanceof Promise.");s[q]=j,s[R]=[];try{const f=P();l&&l(f(I(s,E)),f(I(s,G)))}catch(f){z(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return e}then(l,s){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||e);const g=new f(L),w=n.current;return this[q]==j?this[R].push(w,g,l,s):te(this,w,g,l,s),g}catch(l){return this.then(null,l)}finally(l){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=e);const f=new s(L);f[_]=_;const g=n.current;return this[q]==j?this[R].push(g,f,l,l):te(this,g,f,l,l),f}}e.resolve=e.resolve,e.reject=e.reject,e.race=e.race,e.all=e.all;const r=t[v]=t.Promise;t.Promise=e;const k=y("thenPatched");function C(u){const l=u.prototype,s=o(l,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=l.then;l[m]=f,u.prototype.then=function(g,w){return new e((S,D)=>{f.call(this,S,D)}).then(g,w)},u[k]=!0}return i.patchThen=C,r&&(C(r),le(t,"fetch",u=>function $(u){return function(l,s){let f=u.apply(l,s);if(f instanceof e)return f;let g=f.constructor;return g[k]||C(g),f}}(u))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,e}),Zone.__load_patch("toString",t=>{const n=Function.prototype.toString,i=A("OriginalDelegate"),o=A("Promise"),c=A("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const m=t[o];if(m)return n.call(m)}if(this===Error){const m=t[c];if(m)return n.call(m)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let Ee=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){Ee=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{Ee=!1}const dt={useG:!0},ne={},Ye={},$e=new RegExp("^"+pe+"(\\w+)(true|false)$"),Je=A("propagationStopped");function Ke(t,n){const i=(n?n(t):t)+ae,o=(n?n(t):t)+ce,c=pe+i,a=pe+o;ne[t]={},ne[t][ae]=c,ne[t][ce]=a}function _t(t,n,i,o){const c=o&&o.add||Ze,a=o&&o.rm||Oe,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",b=A(c),v="."+c+":",m="prependListener",M="."+m+":",O=function(R,_,J){if(R.isRemoved)return;const x=R.callback;let X;"object"==typeof x&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);try{R.invoke(R,_,[J])}catch(E){X=E}const j=R.options;return j&&"object"==typeof j&&j.once&&_[a].call(_,J.type,R.originalDelegate?R.originalDelegate:R.callback,j),X};function N(R,_,J){if(!(_=_||t.event))return;const x=R||_.target||t,X=x[ne[_.type][J?ce:ae]];if(X){const j=[];if(1===X.length){const E=O(X[0],x,_);E&&j.push(E)}else{const E=X.slice();for(let G=0;G<E.length&&(!_||!0!==_[Je]);G++){const h=O(E[G],x,_);h&&j.push(h)}}if(1===j.length)throw j[0];for(let E=0;E<j.length;E++){const G=j[E];n.nativeScheduleMicroTask(()=>{throw G})}}}const B=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function K(R,_){if(!R)return!1;let J=!0;_&&void 0!==_.useG&&(J=_.useG);const x=_&&_.vh;let X=!0;_&&void 0!==_.chkDup&&(X=_.chkDup);let j=!1;_&&void 0!==_.rt&&(j=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=be(E);if(!E&&R[c]&&(E=R),!E||E[b])return!1;const G=_&&_.eventNameToString,h={},I=E[b]=E[c],P=E[A(a)]=E[a],Q=E[A(y)]=E[y],se=E[A(d)]=E[d];let z;_&&_.prepend&&(z=E[A(_.prepend)]=E[_.prepend]);const e=J?function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:B,h.options)}:function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},r=J?function(s){if(!s.isRemoved){const f=ne[s.eventName];let g;f&&(g=f[s.capture?ce:ae]);const w=g&&s.target[g];if(w)for(let p=0;p<w.length;p++)if(w[p]===s){w.splice(p,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?H:B,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[A("UNPATCHED_EVENTS")],u=t[A("PASSIVE_EVENTS")],l=function(s,f,g,w,p=!1,S=!1){return function(){const D=this||t;let Z=arguments[0];_&&_.transferEventName&&(Z=_.transferEventName(Z));let V=arguments[1];if(!V)return s.apply(this,arguments);if(we&&"uncaughtException"===Z)return s.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;const he=Ee&&!!u&&-1!==u.indexOf(Z),ee=function U(s,f){return!Ee&&"object"==typeof s&&s?!!s.capture:Ee&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],he),ke=ee&&"object"==typeof ee&&ee.signal&&"object"==typeof ee.signal?ee.signal:void 0;if(ke?.aborted)return;if($)for(let de=0;de<$.length;de++)if(Z===$[de])return he?s.call(D,Z,V,ee):s.apply(this,arguments);const Ge=!!ee&&("boolean"==typeof ee||ee.capture),nt=!(!ee||"object"!=typeof ee)&&ee.once,vt=Zone.current;let Ve=ne[Z];Ve||(Ke(Z,G),Ve=ne[Z]);const rt=Ve[Ge?ce:ae];let Se,ye=D[rt],ot=!1;if(ye){if(ot=!0,X)for(let de=0;de<ye.length;de++)if(C(ye[de],V))return}else ye=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Se=it[Z]),Se||(Se=st+f+(G?G(Z):Z)),h.options=ee,nt&&(h.options.once=!1),h.target=D,h.capture=Ge,h.eventName=Z,h.isExisting=ot;const ve=J?dt:void 0;ve&&(ve.taskData=h),ke&&(h.options.signal=void 0);const ie=vt.scheduleEventTask(Se,V,ve,g,w);return ke&&(h.options.signal=ke,s.call(ke,"abort",()=>{ie.zone.cancelTask(ie)},{once:!0})),h.target=null,ve&&(ve.taskData=null),nt&&(ee.once=!0),!Ee&&"boolean"==typeof ie.options||(ie.options=ee),ie.target=D,ie.capture=Ge,ie.eventName=Z,F&&(ie.originalDelegate=V),S?ye.unshift(ie):ye.push(ie),p?D:void 0}};return E[c]=l(I,v,e,r,j),z&&(E[m]=l(z,M,function(s){return z.call(h.target,h.eventName,s.invoke,h.options)},r,j,!0)),E[a]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],w=!!g&&("boolean"==typeof g||g.capture),p=arguments[1];if(!p)return P.apply(this,arguments);if(x&&!x(P,p,s,arguments))return;const S=ne[f];let D;S&&(D=S[w?ce:ae]);const Z=D&&s[D];if(Z)for(let V=0;V<Z.length;V++){const F=Z[V];if(C(F,p))return Z.splice(V,1),F.isRemoved=!0,0===Z.length&&(F.allRemoved=!0,s[D]=null,"string"==typeof f)&&(s[pe+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),j?s:void 0}return P.apply(this,arguments)},E[y]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],w=Qe(s,G?G(f):f);for(let p=0;p<w.length;p++){const S=w[p];g.push(S.originalDelegate?S.originalDelegate:S.callback)}return g},E[d]=function(){const s=this||t;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ne[f];if(g){const S=s[g[ae]],D=s[g[ce]];if(S){const Z=S.slice();for(let V=0;V<Z.length;V++){const F=Z[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(D){const Z=D.slice();for(let V=0;V<Z.length;V++){const F=Z[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const g=Object.keys(s);for(let w=0;w<g.length;w++){const S=$e.exec(g[w]);let D=S&&S[1];D&&"removeListener"!==D&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(j)return this},ue(E[c],I),ue(E[a],P),se&&ue(E[d],se),Q&&ue(E[y],Q),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=K(i[R],o);return q}function Qe(t,n){if(!n){const a=[];for(let y in t){const d=$e.exec(y);let b=d&&d[1];if(b&&(!n||b===n)){const v=t[y];if(v)for(let m=0;m<v.length;m++)a.push(v[m])}}return a}let i=ne[n];i||(Ke(n),i=ne[n]);const o=t[i[ae]],c=t[i[ce]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function Et(t,n){const i=t.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Je]=!0,o&&o.apply(c,a)})}function Tt(t,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,b,v){return b&&b.prototype&&c.forEach(function(m){const M=`${i}.${o}::`+m,O=b.prototype;try{if(O.hasOwnProperty(m)){const N=t.ObjectGetOwnPropertyDescriptor(O,m);N&&N.value?(N.value=t.wrapWithCurrentZone(N.value,M),t._redefineProperty(b.prototype,m,N)):O[m]&&(O[m]=t.wrapWithCurrentZone(O[m],M))}else O[m]&&(O[m]=t.wrapWithCurrentZone(O[m],M))}catch{}}),y.call(n,d,b,v)},t.attachOriginToPatched(n[o],y)}function et(t,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===t);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(t,n,i,o){t&&Xe(t,et(t,n,i),o)}function xe(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(t,n,i)=>{const o=xe(t);i.patchOnProperties=Xe,i.patchMethod=le,i.bindArguments=je,i.patchMacroTask=ut;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");t[a]&&(t[c]=t[a]),t[c]&&(n[c]=n[a]=t[c]),i.patchEventPrototype=Et,i.patchEventTarget=_t,i.isIEOrEdge=ht,i.ObjectDefineProperty=me,i.ObjectGetOwnPropertyDescriptor=fe,i.ObjectCreate=De,i.ArraySlice=ct,i.patchClass=ge,i.wrapWithCurrentZone=Me,i.filterProperties=et,i.attachOriginToPatched=ue,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Tt,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:we,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:pe,ADD_EVENT_LISTENER_STR:Ze,REMOVE_EVENT_LISTENER_STR:Oe})});const Ce=A("zoneTask");function Te(t,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=c.apply(t,m.args),v}function b(v){return a.call(t,v.data.handleId)}c=le(t,n+=o,v=>function(m,M){if("function"==typeof M[0]){const O={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete y[O.handleId]:O.handleId&&(O.handleId[Ce]=null))}};const B=Le(n,M[0],O,d,b);if(!B)return B;const H=B.data.handleId;return"number"==typeof H?y[H]=B:H&&(H[Ce]=B),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(B.ref=H.ref.bind(H),B.unref=H.unref.bind(H)),"number"==typeof H||H?H:B}return v.apply(t,M)}),a=le(t,i,v=>function(m,M){const O=M[0];let N;"number"==typeof O?N=y[O]:(N=O&&O[Ce],N||(N=O)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof O?delete y[O]:O&&(O[Ce]=null),N.zone.cancelTask(N)):v.apply(t,M)})}Zone.__load_patch("legacy",t=>{const n=t[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",t=>{const n="set",i="clear";Te(t,n,i,"Timeout"),Te(t,n,i,"Interval"),Te(t,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",t=>{Te(t,"request","cancel","AnimationFrame"),Te(t,"mozRequest","mozCancel","AnimationFrame"),Te(t,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(t,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)le(t,i[o],(a,y,d)=>function(b,v){return n.current.run(a,t,v,d)})}),Zone.__load_patch("EventTarget",(t,n,i)=>{(function kt(t,n){n.patchEventPrototype(t,n)})(t,i),function gt(t,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let b=0;b<i.length;b++){const v=i[b],O=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=O,o[v][c]=N}const d=t.EventTarget;d&&d.prototype&&n.patchEventTarget(t,n,[d&&d.prototype])}(t,i);const o=t.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(t,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(t,n,i)=>{ge("MutationObserver"),ge("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(t,n,i)=>{ge("IntersectionObserver")}),Zone.__load_patch("FileReader",(t,n,i)=>{ge("FileReader")}),Zone.__load_patch("on_property",(t,n,i)=>{!function yt(t,n){if(we&&!Ue||Zone[t.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ft(){try{const t=_e.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,xe(c),i&&i.concat(a),be(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,xe(a.prototype),i)}}(i,t)}),Zone.__load_patch("customElements",(t,n,i)=>{!function pt(t,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&t.customElements&&"customElements"in t&&n.patchCallbacks(n,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(t,i)}),Zone.__load_patch("XHR",(t,n)=>{!function b(v){const m=v.XMLHttpRequest;if(!m)return;const M=m.prototype;let N=M[Ne],B=M[Ie];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[Ne],B=I[Ie]}}const H="readystatechange",K="scheduled";function q(h){const I=h.data,P=I.target;P[a]=!1,P[d]=!1;const Q=P[c];N||(N=P[Ne],B=P[Ie]),Q&&B.call(P,H,Q);const se=P[c]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[a]&&h.state===K){const U=P[n.__symbol__("loadfalse")];if(0!==P.status&&U&&U.length>0){const oe=h.invoke;h.invoke=function(){const te=P[n.__symbol__("loadfalse")];for(let W=0;W<te.length;W++)te[W]===h&&te.splice(W,1);!I.aborted&&h.state===K&&oe.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&!1===P[a]&&(P[d]=!0)};return N.call(P,H,se),P[i]||(P[i]=h),E.apply(P,I.args),P[a]=!0,h}function R(){}function _(h){const I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}const J=le(M,"open",()=>function(h,I){return h[o]=0==I[2],h[y]=I[1],J.apply(h,I)}),X=A("fetchTaskAborting"),j=A("fetchTaskScheduling"),E=le(M,"send",()=>function(h,I){if(!0===n.current[j]||h[o])return E.apply(h,I);{const P={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=Le("XMLHttpRequest.send",R,P,q,_);h&&!0===h[d]&&!P.aborted&&Q.state===K&&Q.invoke()}}),G=le(M,"abort",()=>function(h,I){const P=function O(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[X])return G.apply(h,I)})}(t);const i=A("xhrTask"),o=A("xhrSync"),c=A("xhrListener"),a=A("xhrScheduled"),y=A("xhrURL"),d=A("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&function lt(t,n){const i=t.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=t[c];if(a){if(!Fe(fe(t,c)))continue;t[c]=(d=>{const b=function(){return d.apply(this,je(arguments,i+"."+c))};return ue(b,d),b})(a)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(t,n)=>{function i(o){return function(c){Qe(t,o).forEach(y=>{const d=t.PromiseRejectionEvent;if(d){const b=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(b)}})}}t.PromiseRejectionEvent&&(n[A("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[A("rejectionHandledHandler")]=i("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(t,n,i)=>{!function mt(t,n){n.patchMethod(t,"queueMicrotask",i=>function(o,c){Zone.current.scheduleMicroTask("queueMicrotask",c[0])})}(t,i)})}},fe=>{fe(fe.s=4728)}]);