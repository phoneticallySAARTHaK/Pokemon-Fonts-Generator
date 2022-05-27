function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}document.querySelector("section");const t=document.querySelector('input[type="text"]'),n=document.querySelector(".font-space"),r=document.querySelector("#size"),o=document.querySelector("output"),i=document.querySelector("button");var c={};e(c,"toPng",(()=>Te),(e=>Te=e));var s={};e(s,"cloneNode",(()=>K),(e=>K=e));var u={};e(u,"getMimeType",(()=>C),(e=>C=e)),e(u,"resolveUrl",(()=>$),(e=>$=e)),e(u,"isDataUrl",(()=>R),(e=>R=e)),e(u,"makeDataUrl",(()=>L),(e=>L=e)),e(u,"parseDataUrlContent",(()=>A),(e=>A=e)),e(u,"uuid",(()=>N),(e=>N=e)),e(u,"toArray",(()=>U),(e=>U=e)),e(u,"getNodeWidth",(()=>D),(e=>D=e)),e(u,"getNodeHeight",(()=>M),(e=>M=e)),e(u,"getPixelRatio",(()=>I),(e=>I=e)),e(u,"canvasToBlob",(()=>H),(e=>H=e)),e(u,"createImage",(()=>V),(e=>V=e)),e(u,"nodeToDataURL",(()=>j),(e=>j=e));var l,a,h,f=l={};function d(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}function p(e){if(a===setTimeout)return setTimeout(e,0);if((a===d||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:d}catch(e){a=d}try{h="function"==typeof clearTimeout?clearTimeout:m}catch(e){h=m}}();var g,v=[],w=!1,y=-1;function b(){w&&g&&(w=!1,g.length?v=g.concat(v):y=-1,v.length&&P())}function P(){if(!w){var e=p(b);w=!0;for(var t=v.length;t;){for(g=v,v=[];++y<t;)g&&g[y].run();y=-1,t=v.length}g=null,w=!1,function(e){if(h===clearTimeout)return clearTimeout(e);if((h===m||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(e);try{h(e)}catch(t){try{return h.call(null,e)}catch(t){return h.call(this,e)}}}(e)}}function T(e,t){this.fun=e,this.array=t}function x(){}f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new T(e,t)),1!==v.length||w||p(P)},T.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=x,f.addListener=x,f.once=x,f.off=x,f.removeListener=x,f.removeAllListeners=x,f.emit=x,f.prependListener=x,f.prependOnceListener=x,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0};var S=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const E={woff:"application/font-woff",woff2:"application/font-woff",ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function C(e){const t=function(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}(e).toLowerCase();return E[t]||""}function $(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}function R(e){return-1!==e.search(/^(data:)/)}function L(e,t){return`data:${t};base64,${e}`}function A(e){return e.split(/,/)[1]}const N=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function U(e){const t=[];for(let n=0,r=e.length;n<r;n+=1)t.push(e[n]);return t}function k(e,t){const n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}function D(e){const t=k(e,"border-left-width"),n=k(e,"border-right-width");return e.clientWidth+t+n}function M(e){const t=k(e,"border-top-width"),n=k(e,"border-bottom-width");return e.clientHeight+t+n}function I(){let e,t;try{t=l}catch(e){}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function H(e){return e.toBlob?new Promise((t=>e.toBlob(t))):new Promise((t=>{const n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r);for(let e=0;e<r;e+=1)o[e]=n.charCodeAt(e);t(new Blob([o],{type:"image/png"}))}))}function V(e){return new Promise(((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="sync",r.src=e}))}function j(e,t,n){return S(this,void 0,void 0,(function*(){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),function(e){return S(this,void 0,void 0,(function*(){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e=>`data:image/svg+xml;charset=utf-8,${e}`))}))}(o)}))}const F={};function q(e,t){const n=function(e){let t=e.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(t)&&(t=t.replace(/.*\//,"")),t}(e);if(null!=F[n])return F[n];t.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime());const r=window.fetch(e).then((e=>e.blob().then((t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))))).then((({blob:e,contentType:t})=>new Promise(((n,r)=>{const o=new FileReader;o.onloadend=()=>n({contentType:t,blob:o.result}),o.onerror=r,o.readAsDataURL(e)})))).then((({blob:e,contentType:t})=>({contentType:t,blob:(0,u.parseDataUrlContent)(e)}))).catch((n=>{let r="";if(t.imagePlaceholder){const e=t.imagePlaceholder.split(/,/);e&&e[1]&&(r=e[1])}let o=`Failed to fetch resource: ${e}`;return n&&(o="string"==typeof n?n:n.message),o&&console.error(o),{blob:r,contentType:""}}));return F[n]=r,r}function W(e,t,n){const r=`.${e}:${t}`,o=n.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):function(e){return(0,u.toArray)(e).map((t=>`${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")}(n);return document.createTextNode(`${r}{${o}}`)}function O(e,t,n){const r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;const i=(0,u.uuid)();try{t.className=`${t.className} ${i}`}catch(e){return}const c=document.createElement("style");c.appendChild(W(i,n,r)),t.appendChild(c)}function B(e,t){O(e,t,":before"),O(e,t,":after")}var z=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function _(e,t){return z(this,void 0,void 0,(function*(){return e instanceof HTMLCanvasElement?function(e){return z(this,void 0,void 0,(function*(){const t=e.toDataURL();return"data:,"===t?Promise.resolve(e.cloneNode(!1)):(0,u.createImage)(t)}))}(e):e instanceof HTMLVideoElement&&e.poster?function(e,t){return z(this,void 0,void 0,(function*(){return Promise.resolve(e.poster).then((e=>q(e,t))).then((t=>(0,u.makeDataUrl)(t.blob,(0,u.getMimeType)(e.poster)||t.contentType))).then((e=>(0,u.createImage)(e)))}))}(e,t):Promise.resolve(e.cloneNode(!1))}))}function G(e,t){return z(this,void 0,void 0,(function*(){return t instanceof Element?Promise.resolve().then((()=>function(e,t){const n=window.getComputedStyle(e),r=t.style;r&&(n.cssText?r.cssText=n.cssText:(0,u.toArray)(n).forEach((e=>{r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))})))}(e,t))).then((()=>B(e,t))).then((()=>function(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}(e,t))).then((()=>t)):Promise.resolve(t)}))}function K(e,t,n){return z(this,void 0,void 0,(function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then((e=>_(e,t))).then((n=>function(e,t,n){var r;return z(this,void 0,void 0,(function*(){const o=null!=(i=e).tagName&&"SLOT"===i.tagName.toUpperCase()&&e.assignedNodes?(0,u.toArray)(e.assignedNodes()):(0,u.toArray)((null!==(r=e.shadowRoot)&&void 0!==r?r:e).childNodes);var i;return 0===o.length||e instanceof HTMLVideoElement?Promise.resolve(t):o.reduce(((e,r)=>e.then((()=>K(r,n))).then((e=>{e&&t.appendChild(e)}))),Promise.resolve()).then((()=>t))}))}(e,n,t))).then((t=>G(e,t))):Promise.resolve(null)}))}var X={};e(X,"embedImages",(()=>ce),(e=>ce=e));var J={};e(J,"shouldEmbed",(()=>re),(e=>re=e)),e(J,"embedResources",(()=>oe),(e=>oe=e));var Q=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const Y=/url\((['"]?)([^'"]+?)\1\)/g,Z=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,ee=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function te(e){const t=[];return e.replace(Y,((e,n,r)=>(t.push(r),e))),t.filter((e=>!(0,u.isDataUrl)(e)))}function ne(e,t,n,r,o){const i=n?(0,u.resolveUrl)(t,n):t;return Promise.resolve(i).then((e=>o?o(e):q(e,r))).then((e=>"string"==typeof e?(0,u.makeDataUrl)(e,(0,u.getMimeType)(t)):(0,u.makeDataUrl)(e.blob,(0,u.getMimeType)(t)||e.contentType))).then((n=>e.replace(function(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${n}$3`))).then((e=>e),(()=>i))}function re(e){return-1!==e.search(Y)}function oe(e,t,n){return Q(this,void 0,void 0,(function*(){if(!re(e))return Promise.resolve(e);const r=function(e,{preferredFontFormat:t}){return t?e.replace(ee,(e=>{for(;;){const[n,,r]=Z.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}})):e}(e,n);return Promise.resolve(r).then(te).then((e=>e.reduce(((e,r)=>e.then((e=>ne(e,r,t,n)))),Promise.resolve(r))))}))}var ie=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function ce(e,t){return ie(this,void 0,void 0,(function*(){return e instanceof Element?Promise.resolve(e).then((e=>function(e,t){var n;return ie(this,void 0,void 0,(function*(){const r=null===(n=e.style)||void 0===n?void 0:n.getPropertyValue("background");return r?Promise.resolve(r).then((e=>(0,J.embedResources)(e,null,t))).then((t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e))):Promise.resolve(e)}))}(e,t))).then((e=>function(e,t){return ie(this,void 0,void 0,(function*(){if((!(e instanceof HTMLImageElement)||(0,u.isDataUrl)(e.src))&&(!(e instanceof SVGImageElement)||(0,u.isDataUrl)(e.href.baseVal)))return Promise.resolve(e);const n=e instanceof HTMLImageElement?e.src:e.href.baseVal;return Promise.resolve(n).then((e=>q(e,t))).then((e=>(0,u.makeDataUrl)(e.blob,(0,u.getMimeType)(n)||e.contentType))).then((t=>new Promise(((n,r)=>{e.onload=n,e.onerror=r,e instanceof HTMLImageElement?(e.srcset="",e.src=t):e.href.baseVal=t})))).then((()=>e),(()=>e))}))}(e,t))).then((e=>function(e,t){return ie(this,void 0,void 0,(function*(){const n=(0,u.toArray)(e.childNodes).map((e=>ce(e,t)));return Promise.all(n).then((()=>e))}))}(e,t))):Promise.resolve(e)}))}function se(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return null!=r&&Object.keys(r).forEach((e=>{n[e]=r[e]})),e}var ue={};e(ue,"getWebFontCSS",(()=>ge),(e=>ge=e)),e(ue,"embedWebFonts",(()=>ve),(e=>ve=e));var le=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};const ae={};function he(e){const t=ae[e];if(null!=t)return t;const n=window.fetch(e).then((t=>({url:e,cssText:t.text()})));return ae[e]=n,n}function fe(e){return le(this,void 0,void 0,(function*(){return e.cssText.then((t=>{let n=t;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((t=>{let o=t.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),window.fetch(o).then((e=>e.blob())).then((e=>new Promise(((r,o)=>{const i=new FileReader;i.onloadend=()=>{n=n.replace(t,`url(${i.result})`),r([t,i.result])},i.onerror=o,i.readAsDataURL(e)}))))}));return Promise.all(o).then((()=>n))}))}))}function de(e){if(null==e)return[];const t=[];let n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(e=i.exec(n),null===e)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}function me(e){return e.filter((e=>e.type===CSSRule.FONT_FACE_RULE)).filter((e=>(0,J.shouldEmbed)(e.style.getPropertyValue("src"))))}function pe(e){return le(this,void 0,void 0,(function*(){return new Promise(((t,n)=>{null==e.ownerDocument&&n(new Error("Provided element is not within a Document")),t((0,u.toArray)(e.ownerDocument.styleSheets))})).then((e=>function(e){return le(this,void 0,void 0,(function*(){const t=[],n=[];return e.forEach((t=>{if("cssRules"in t)try{(0,u.toArray)(t.cssRules).forEach(((e,r)=>{if(e.type===CSSRule.IMPORT_RULE){let o=r+1;const i=he(e.href).then((e=>e?fe(e):"")).then((e=>de(e).forEach((e=>{try{t.insertRule(e,e.startsWith("@import")?o+=1:t.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})))).catch((e=>{console.error("Error loading remote css",e.toString())}));n.push(i)}}))}catch(r){const o=e.find((e=>null==e.href))||document.styleSheets[0];null!=t.href&&n.push(he(t.href).then((e=>e?fe(e):"")).then((e=>de(e).forEach((e=>{o.insertRule(e,t.cssRules.length)})))).catch((e=>{console.error("Error loading remote stylesheet",e.toString())}))),console.error("Error inlining remote css file",r.toString())}})),Promise.all(n).then((()=>(e.forEach((e=>{if("cssRules"in e)try{(0,u.toArray)(e.cssRules).forEach((e=>{t.push(e)}))}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t.toString())}})),t)))}))}(e))).then(me)}))}function ge(e,t){return le(this,void 0,void 0,(function*(){return pe(e).then((e=>Promise.all(e.map((e=>{const n=e.parentStyleSheet?e.parentStyleSheet.href:null;return(0,J.embedResources)(e.cssText,n,t)}))))).then((e=>e.join("\n")))}))}function ve(e,t){return le(this,void 0,void 0,(function*(){return(null!=t.fontEmbedCSS?Promise.resolve(t.fontEmbedCSS):ge(e,t)).then((t=>{const n=document.createElement("style"),r=document.createTextNode(t);return n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),e}))}))}var we=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))};function ye(e,t={}){return{width:t.width||(0,u.getNodeWidth)(e),height:t.height||(0,u.getNodeHeight)(e)}}function be(e,t={}){return we(this,void 0,void 0,(function*(){const{width:n,height:r}=ye(e,t);return Promise.resolve(e).then((e=>(0,s.cloneNode)(e,t,!0))).then((e=>(0,ue.embedWebFonts)(e,t))).then((e=>(0,X.embedImages)(e,t))).then((e=>se(e,t))).then((e=>(0,u.nodeToDataURL)(e,n,r)))}))}function Pe(e,t={}){return we(this,void 0,void 0,(function*(){return be(e,t).then(u.createImage).then((n=>{const r=document.createElement("canvas"),o=r.getContext("2d"),i=t.pixelRatio||(0,u.getPixelRatio)(),{width:c,height:s}=ye(e,t),l=t.canvasWidth||c,a=t.canvasHeight||s;return r.width=l*i,r.height=a*i,t.skipAutoScale||function(e){(e.width>16384||e.height>16384)&&(e.width>16384&&e.height>16384?e.width>e.height?(e.height*=16384/e.width,e.width=16384):(e.width*=16384/e.height,e.height=16384):e.width>16384?(e.height*=16384/e.width,e.width=16384):(e.width*=16384/e.height,e.height=16384))}(r),r.style.width=`${l}`,r.style.height=`${a}`,t.backgroundColor&&(o.fillStyle=t.backgroundColor,o.fillRect(0,0,r.width,r.height)),o.drawImage(n,0,0,r.width,r.height),r}))}))}function Te(e,t={}){return we(this,void 0,void 0,(function*(){return Pe(e,t).then((e=>e.toDataURL()))}))}function xe(){!function(){const e=document.querySelector(".rendered");e&&n.removeChild(e)}(),function(){const e=document.querySelector(".fonts");e&&n.removeChild(e)}();let e=t.value;const r=o.value;n.style.fontSize=`${r}px`,e=function(e){const t=(e=e.trim()).split(" ");let n=[],r="";for(const e of t)0!==e.length&&(r="**"===e.slice(0,2)&&"**"===e.slice(-2)?Se(e):Ee(e),n.push(r));return n.join(" ")}(e);const i=document.createElement("p");i.setAttribute("class","fonts"),i.innerHTML=e,n.appendChild(i),function(e){const t=document.querySelectorAll(".antiClockwise");for(const e of t)Ce(e)}(),c.toPng(i).then((function(e){var t=new Image;return t.src=e,t})).then((e=>{e.setAttribute("class","rendered"),n.removeChild(i),n.appendChild(e)})).catch((function(e){console.error("oops, something went wrong!",e)}))}function Se(e){const t=function(e){let t,n,r;t=n=r="",e.length%2==0?(t=e.substr(0,e.length/2),r=e.substr(e.length/2)):(t=e.substr(0,e.length/2),n=e.substr(e.length/2,1),r=e.substr(e.length/2+1));return{left:t,mid:n,right:r}}(e.slice(2,-2));return`<span class="antiClockwise">${Ee(t.left)}</span><span class="mid">${t.mid}</span><span class="clockwise">${Ee(t.right)}</span>`}function Ee(e){let t="";for(let n=0;n<e.length;n++)t+=n%2==0?`<span>${e[n]}</span>`:e[n];return t}function Ce(e){const t=e.nextSibling,n=window.getComputedStyle(e).width,r=Number(n.slice(0,-2)),o=document.documentElement,i=window.getComputedStyle(o).getPropertyValue("--rotate-clockwise");let c=Number(i.slice(0,-3));c*=Math.PI/180;const s=Math.sin(c)*(.9*r);t.style.bottom=`${s}px`}o.textContent=`${r.value}`,r.addEventListener("input",(function(){o.textContent=`${r.value}`})),i.addEventListener("click",xe),t.value="**PoKéMoN**",xe();
//# sourceMappingURL=index.0092c68e.js.map