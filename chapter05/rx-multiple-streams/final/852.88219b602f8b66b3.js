"use strict";(self.webpackChunkrx_multiple_streams=self.webpackChunkrx_multiple_streams||[]).push([[852],{852:(Sn,ut,u)=>{u.r(ut),u.d(ut,{HomeComponent:()=>En});var m=u(368);const ge=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"];var o=u(564),me=u(496),_e=u(252),ye=u(300),ve=u(560),Ce=u(91),Ve=u(773),be=u(187),Me=u(904),dt=u(704);let ct=(()=>{class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(o.q87),o.GI1(o.GMv))};static#e=this.\u0275dir=o.Sc5({type:e})}return e})(),_=(()=>{class e extends ct{static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=o.otF(e)))(i||e)}})();static#e=this.\u0275dir=o.Sc5({type:e,features:[o.eg9]})}return e})();const h=new o.UbH(""),Fe={provide:h,useExisting:(0,o.wd)(()=>$),multi:!0},Ee=new o.UbH("");let $=(()=>{class e extends ct{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function we(){const e=(0,m.uy)()?(0,m.uy)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(o.q87),o.GI1(o.GMv),o.GI1(Ee,8))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){1&r&&o.qCj("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[o.M5G([Fe]),o.eg9]})}return e})();const l=new o.UbH(""),p=new o.UbH("");function bt(e){return null!=e}function Mt(e){return(0,o.w5$)(e)?(0,me.Q)(e):e}function Dt(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function At(e,n){return n.map(t=>t(e))}function Ft(e){return e.map(n=>function Se(e){return!e.validate}(n)?n:t=>n.validate(t))}function L(e){return null!=e?function wt(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return Dt(At(t,n))}}(Ft(e)):null}function W(e){return null!=e?function Et(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return function De(...e){const n=(0,Ce.yu)(e),{args:t,keys:r}=(0,ye.Q)(e),i=new _e._(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let v=a,M=a;for(let H=0;H<a;H++){let lt=!1;(0,ve.Uv)(t[H]).subscribe((0,Ve.e)(s,On=>{lt||(lt=!0,M--),c[H]=On},()=>v--,void 0,()=>{(!v||!lt)&&(M||s.next(r?(0,Me.q)(r,c):c),s.complete())}))}});return n?i.pipe((0,be.j)(n)):i}(At(t,n).map(Mt)).pipe((0,dt.k)(Dt))}}(Ft(e)):null}function Ot(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function St(e){return e._rawValidators}function Nt(e){return e._rawAsyncValidators}function j(e){return e?Array.isArray(e)?e:[e]:[]}function O(e,n){return Array.isArray(e)?e.includes(n):e===n}function Gt(e,n){const t=j(n);return j(e).forEach(i=>{O(t,i)||t.push(i)}),t}function It(e,n){return j(n).filter(t=>!O(e,t))}class xt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=W(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends xt{get formDirective(){return null}get path(){return null}}class g extends xt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let kt=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(g,2))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){2&r&&o.eAK("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[o.eg9]})}return e})(),Pt=(()=>{class e extends Bt{constructor(t){super(t)}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(d,10))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){2&r&&o.eAK("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},features:[o.eg9]})}return e})();const D="VALID",N="INVALID",C="PENDING",A="DISABLED";function z(e){return(G(e)?e.validators:e)||null}function Z(e,n){return(G(n)?n.asyncValidators:e)||null}function G(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class X{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===N}get pending(){return this.status==C}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Gt(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Gt(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(It(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}hasValidator(n){return O(this._rawValidators,n)}hasAsyncValidator(n){return O(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=D,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const t=Mt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new o._w7,this.statusChanges=new o._w7}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(N)?N:D}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){G(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function xe(e){return Array.isArray(e)?L(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Be(e){return Array.isArray(e)?W(e):e||null}(this._rawAsyncValidators)}}class I extends X{constructor(n,t,r){super(z(t),Z(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){(function Ut(e,n,t){e._forEachChild((r,i)=>{if(void 0===t[i])throw new o.OBp(1002,"")})})(this,0,n),Object.keys(n).forEach(r=>{(function Rt(e,n,t){const r=e.controls;if(!(n?Object.keys(r):r).length)throw new o.OBp(1e3,"");if(!r[t])throw new o.OBp(1001,"")})(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(r=>{const i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const V=new o.UbH("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";function F(e,n,t=x){K(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Te(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&Ht(e,n)})}(e,n),function Ue(e,n){const t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function Re(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&Ht(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function Pe(e,n){if(n.valueAccessor.setDisabledState){const t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function k(e,n,t=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),T(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function P(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function K(e,n){const t=St(e);null!==n.validator?e.setValidators(Ot(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const r=Nt(e);null!==n.asyncValidator?e.setAsyncValidators(Ot(r,n.asyncValidator)):"function"==typeof r&&e.setAsyncValidators([r]);const i=()=>e.updateValueAndValidity();P(n._rawValidators,i),P(n._rawAsyncValidators,i)}function T(e,n){let t=!1;if(null!==e){if(null!==n.validator){const i=St(e);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.validator);s.length!==i.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const i=Nt(e);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.asyncValidator);s.length!==i.length&&(t=!0,e.setAsyncValidators(s))}}}const r=()=>{};return P(n._rawValidators,r),P(n._rawAsyncValidators,r),t}function Ht(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Wt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function jt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}Promise.resolve();const b=class extends X{constructor(n=null,t,r){super(z(t),Z(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=jt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Wt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Wt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){jt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};Promise.resolve();const nt=new o.UbH(""),en={provide:d,useExisting:(0,o.wd)(()=>R)};let R=(()=>{class e extends d{constructor(t,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o._w7,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return F(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){k(t.control||null,t,!1),function We(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function Lt(e,n){e._syncPendingControls(),n.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(k(r||null,t),(e=>e instanceof b)(i)&&(F(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function $t(e,n){K(e,n)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function He(e,n){return T(e,n)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&T(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(l,10),o.GI1(p,10),o.GI1(V,8))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){1&r&&o.qCj("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[o.Wk5.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o.M5G([en]),o.eg9,o.SYr]})}return e})();const on={provide:g,useExisting:(0,o.wd)(()=>it)};let it=(()=>{class e extends g{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new o._w7,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function tt(e,n){if(!n)return null;let t,r,i;return Array.isArray(n),n.forEach(s=>{s.constructor===$?t=s:function Le(e){return Object.getPrototypeOf(e.constructor)===_}(s)?r=s:i=s}),i||r||t||null}(0,s)}ngOnChanges(t){this._added||this._setUpControl(),function J(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function B(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(r){return new(r||e)(o.GI1(d,13),o.GI1(l,10),o.GI1(p,10),o.GI1(h,10),o.GI1(nt,8))};static#n=this.\u0275dir=o.Sc5({type:e,selectors:[["","formControlName",""]],inputs:{name:[o.Wk5.None,"formControlName","name"],isDisabled:[o.Wk5.None,"disabled","isDisabled"],model:[o.Wk5.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[o.M5G([on]),o.eg9,o.SYr]})}return e})();const sn={provide:h,useExisting:(0,o.wd)(()=>U),multi:!0};function ee(e,n){return null==e?`${n}`:(n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let U=(()=>{class e extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const i=ee(this._getOptionId(t),t);this.setProperty("value",i)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){const r=function an(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r):t}static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=o.otF(e)))(i||e)}})();static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,i){1&r&&o.qCj("change",function(a){return i.onChange(a.target.value)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[o.M5G([sn]),o.eg9]})}return e})(),ne=(()=>{class e{constructor(t,r,i){this._element=t,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(ee(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(o.GMv),o.GI1(o.q87),o.GI1(U,9))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})();const ln={provide:h,useExisting:(0,o.wd)(()=>st),multi:!0};function re(e,n){return null==e?`${n}`:("string"==typeof n&&(n=`'${n}'`),n&&"object"==typeof n&&(n="Object"),`${e}: ${n}`.slice(0,50))}let st=(()=>{class e extends _{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let r;if(this.value=t,Array.isArray(t)){const i=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(i.indexOf(a.toString())>-1)}}else r=(i,s)=>{i._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{const i=[],s=r.selectedOptions;if(void 0!==s){const a=s;for(let c=0;c<a.length;c++){const M=this._getOptionValue(a[c].value);i.push(M)}}else{const a=r.options;for(let c=0;c<a.length;c++){const v=a[c];if(v.selected){const M=this._getOptionValue(v.value);i.push(M)}}}this.value=i,t(i)}}_registerOption(t){const r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(const r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){const r=function un(e){return e.split(":")[0]}(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}static#t=this.\u0275fac=(()=>{let t;return function(i){return(t||(t=o.otF(e)))(i||e)}})();static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,i){1&r&&o.qCj("change",function(a){return i.onChange(a.target)})("blur",function(){return i.onTouched()})},inputs:{compareWith:"compareWith"},features:[o.M5G([ln]),o.eg9]})}return e})(),oe=(()=>{class e{constructor(t,r,i){this._element=t,this._renderer=r,this._select=i,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(re(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(re(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static#t=this.\u0275fac=function(r){return new(r||e)(o.GI1(o.GMv),o.GI1(o.q87),o.GI1(st,9))};static#e=this.\u0275dir=o.Sc5({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}return e})(),yn=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=o.a4G({type:e});static#n=this.\u0275inj=o.s3X({})}return e})(),Cn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:nt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:V,useValue:t.callSetDisabledState??x}]}}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275mod=o.a4G({type:e});static#n=this.\u0275inj=o.s3X({imports:[yn]})}return e})();var Vn=u(40),bn=u(568);function Mn(e,n){if(1&e&&(o.I0R(0,"option",16),o.OEk(1),o.C$Y()),2&e){const t=n.$implicit;o.E7m("value",t),o.yG2(),o.oRS(" ",t," ")}}function Dn(e,n){if(1&e&&(o.I0R(0,"option",16),o.OEk(1),o.C$Y()),2&e){const t=n.$implicit;o.E7m("value",t),o.yG2(),o.oRS(" ",t," ")}}function An(e,n){if(1&e&&(o.I0R(0,"option",16),o.OEk(1),o.C$Y()),2&e){const t=n.$implicit;o.E7m("value",t),o.yG2(),o.oRS(" ",t," ")}}function Fn(e,n){if(1&e&&(o.I0R(0,"option",16),o.OEk(1),o.C$Y()),2&e){const t=n.$implicit;o.E7m("value",t),o.yG2(),o.oRS(" ",t," ")}}function wn(e,n){if(1&e&&(o.I0R(0,"div",17)(1,"div",18)(2,"div",19),o.OEk(3," Hello World! "),o.C$Y()()()),2&e){const t=n.ngIf;o.yG2(),o.E7m("ngStyle",t)}}const pe=e=>({backgroundColor:e});let En=(()=>{class e{constructor(){this.sizeOptions=[100,200,300,400,500,600,700],this.colorOptions=ge,this.borderRadiusOptions=[4,6,8,10,12,14,16,18,20],this.boxForm=new I({size:new b(this.sizeOptions[0],{nonNullable:!0}),borderRadius:new b(this.borderRadiusOptions[0],{nonNullable:!0}),textColor:new b(this.colorOptions[9],{nonNullable:!0}),backgroundColor:new b(this.colorOptions[3],{nonNullable:!0})})}ngOnInit(){this.listenToInputChanges()}listenToInputChanges(){this.boxStyles$=(0,Vn.E)([this.boxForm.controls.size,this.boxForm.controls.borderRadius,this.boxForm.controls.textColor,this.boxForm.controls.backgroundColor].map(r=>r.valueChanges.pipe((0,bn.W)(r.value)))).pipe((0,dt.k)(([r,i,s,a])=>({width:`${r}px`,height:`${r}px`,backgroundColor:a,color:s,borderRadius:`${i}px`})))}static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=o.In1({type:e,selectors:[["app-home"]],standalone:!0,features:[o.UHJ],decls:38,vars:14,consts:[[1,"home",3,"formGroup"],[1,"flex","gap-4","flex-wrap","justify-center"],[1,"flex","flex-col","items-start"],[1,"flex","gap-4","items-center","mb-2"],["for","bgColorSelect"],[1,"w-5","h-5","rounded-full",3,"ngStyle"],["id","bgColorSelect","formControlName","backgroundColor",1,"custom-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","textColorSelect"],["id","textColorSelect","formControlName","textColor",1,"custom-select"],["for","borderRadiusSelect"],["id","borderRadiusSelect","formControlName","borderRadius",1,"custom-select"],["for","sizeSelect"],["id","sizeSelect","formControlName","size",1,"custom-select"],["class","row",4,"ngIf"],[3,"value"],[1,"row"],[1,"box",3,"ngStyle"],[1,"box__text"]],template:function(r,i){1&r&&(o.I0R(0,"div",0)(1,"div",1)(2,"fieldset",2)(3,"div",3)(4,"label",4),o.OEk(5,"Background Color"),o.C$Y(),o.wR5(6,"span",5),o.C$Y(),o.I0R(7,"select",6)(8,"option",7),o.OEk(9,"Open this select menu"),o.C$Y(),o.yuY(10,Mn,2,2,"option",8),o.C$Y()(),o.I0R(11,"fieldset",2)(12,"div",3)(13,"label",9),o.OEk(14,"Text Color"),o.C$Y(),o.wR5(15,"span",5),o.C$Y(),o.I0R(16,"select",10)(17,"option",7),o.OEk(18,"Open this select menu"),o.C$Y(),o.yuY(19,Dn,2,2,"option",8),o.C$Y()(),o.I0R(20,"fieldset",2)(21,"div",3)(22,"label",11),o.OEk(23,"Border Radius"),o.C$Y()(),o.I0R(24,"select",12)(25,"option",7),o.OEk(26,"Open this select menu"),o.C$Y(),o.yuY(27,An,2,2,"option",8),o.C$Y()(),o.I0R(28,"fieldset",2)(29,"div",3)(30,"label",13),o.OEk(31,"Size"),o.C$Y()(),o.I0R(32,"select",14)(33,"option",7),o.OEk(34,"Open this select menu"),o.C$Y(),o.yuY(35,Fn,2,2,"option",8),o.C$Y()()(),o.yuY(36,wn,4,1,"div",15),o.wVc(37,"async"),o.C$Y()),2&r&&(o.E7m("formGroup",i.boxForm),o.yG2(6),o.E7m("ngStyle",o.S45(10,pe,i.boxForm.controls.backgroundColor.value)),o.yG2(4),o.E7m("ngForOf",i.colorOptions),o.yG2(5),o.E7m("ngStyle",o.S45(12,pe,i.boxForm.controls.textColor.value)),o.yG2(4),o.E7m("ngForOf",i.colorOptions),o.yG2(8),o.E7m("ngForOf",i.borderRadiusOptions),o.yG2(8),o.E7m("ngForOf",i.sizeOptions),o.yG2(),o.E7m("ngIf",o.kDX(37,8,i.boxStyles$)))},dependencies:[m.MD,m.ay,m.u_,m.Qt,m.a,Cn,ne,oe,U,kt,Pt,R,it],styles:[".home[_ngcontent-%COMP%]{text-align:center}.home[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{font-size:large;transition:all .3s ease}.home[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .submit-btn-container[_ngcontent-%COMP%]{padding:1.8rem;margin:20px auto;display:flex;justify-content:center;align-items:center}.home[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]{cursor:pointer;appearance:none;border-radius:.375rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(71 85 105 / var(--tw-border-opacity));padding:.5rem 1rem;transition-duration:.1s}.home[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:hover{--tw-border-opacity: 1;border-color:rgb(126 34 206 / var(--tw-border-opacity));--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: 1;--tw-ring-color: rgb(126 34 206 / var(--tw-ring-opacity))}"]})}return e})()}}]);