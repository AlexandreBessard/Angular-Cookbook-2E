(()=>{"use strict";var e,v={},m={};function r(e){var i=m[e];if(void 0!==i)return i.exports;var t=m[e]={exports:{}};return v[e](t,t.exports,r),t.exports}r.m=v,e=[],r.O=(i,t,o,f)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,o,f]=e[n],s=!0,l=0;l<t.length;l++)(!1&f||a>=f)&&Object.keys(r.O).every(p=>r.O[p](t[l]))?t.splice(l--,1):(s=!1,f<a&&(a=f));if(s){e.splice(n--,1);var d=o();void 0!==d&&(i=d)}}return i}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[t,o,f]},r.d=(e,i)=>{for(var t in i)r.o(i,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:i[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((i,t)=>(r.f[t](e,i),i),[])),r.u=e=>e+"."+{66:"60e77e2b2d8ac027",420:"72d415e21833c66d",532:"aafbfb8a721e763f",564:"ecfe7089c439f64e"}[e]+".js",r.miniCssF=e=>{},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="ng-global-loader:";r.l=(t,o,f,n)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==f)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==i+f){a=u;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",i+f),a.src=r.tu(t)),e[t]=[o];var c=(g,p)=>{a.onerror=a.onload=null,clearTimeout(b);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(h=>h(p)),g)return g(p)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:i=>i},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={688:0};r.f.j=(o,f)=>{var n=r.o(e,o)?e[o]:void 0;if(0!==n)if(n)f.push(n[2]);else if(688!=o){var a=new Promise((u,c)=>n=e[o]=[u,c]);f.push(n[2]=a);var s=r.p+r.u(o),l=new Error;r.l(s,u=>{if(r.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var c=u&&("load"===u.type?"missing":u.type),b=u&&u.target&&u.target.src;l.message="Loading chunk "+o+" failed.\n("+c+": "+b+")",l.name="ChunkLoadError",l.type=c,l.request=b,n[1](l)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var i=(o,f)=>{var l,d,[n,a,s]=f,u=0;if(n.some(b=>0!==e[b])){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(s)var c=s(r)}for(o&&o(f);u<n.length;u++)r.o(e,d=n[u])&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},t=self.webpackChunkng_global_loader=self.webpackChunkng_global_loader||[];t.forEach(i.bind(null,0)),t.push=i.bind(null,t.push.bind(t))})()})();