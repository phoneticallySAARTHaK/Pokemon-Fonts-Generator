// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iL2AH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6rimH":[function(require,module,exports) {
const section = document.querySelector("section");
const textarea = document.querySelector('input[type="text"]');
const fontSpace = document.querySelector(".font-space");
const range = document.querySelector("#size");
const output = document.querySelector("output");
const btn = document.querySelector("button");
/* in ES 5 */ var htmlToImage = require("html-to-image");
// Slider outpuut
output.textContent = `${range.value}`;
range.addEventListener("input", function() {
    output.textContent = `${range.value}`;
});
// Generate button
btn.addEventListener("click", generate);
function generate() {
    clearImg();
    clearP();
    let text = textarea.value;
    const size = output.value;
    fontSpace.style.fontSize = `${size}px`;
    text = processText(text);
    const p = document.createElement("p");
    p.setAttribute("class", "fonts");
    p.innerHTML = text;
    fontSpace.appendChild(p);
    raiseAllMiddleLetters(p);
    htmlToImage.toPng(p).then(function(dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        return img;
    }).then((img)=>{
        img.setAttribute("class", "rendered");
        fontSpace.removeChild(p);
        fontSpace.appendChild(img);
    }).catch(function(error) {
        console.error("oops, something went wrong!", error);
    });
}
function clearP() {
    const p = document.querySelector(".fonts");
    if (p) fontSpace.removeChild(p);
}
function clearImg() {
    const img = document.querySelector(".rendered");
    if (img) fontSpace.removeChild(img);
}
function processText(text) {
    text = text.trim();
    const wordArray = text.split(" ");
    let strArray = [];
    let str = "";
    for (const word of wordArray){
        if (word.length === 0) continue;
        if (word.slice(0, 2) === "**" && word.slice(-2) === "**") str = makeTilted(word);
        else str = makeOverlappingLetters(word);
        strArray.push(str);
    }
    return strArray.join(" ");
}
function makeTilted(word) {
    const obj = splitKeyword(word.slice(2, -2));
    return `<span class="antiClockwise">${makeOverlappingLetters(obj.left)}</span>` + `<span class="mid">${obj.mid}</span>` + `<span class="clockwise">${makeOverlappingLetters(obj.right)}</span>`;
}
function raiseAllMiddleLetters(p) {
    const leftArray = document.querySelectorAll(".antiClockwise");
    for (const left of leftArray)raiseMidLetter(left);
}
// Wrap letters in <span> for the overlappinng effect
// (string, bool) => string
// Takes the text, and parity as argument
// Parity represent whether to raise the even or odd characters
// i.e if parity == 0, then the even characters raise (counting from 0)
// returns the produced html string
function makeOverlappingLetters(text) {
    let htmlString = "";
    for(let i = 0; i < text.length; i++)htmlString += i % 2 == 0 ? `<span>${text[i]}</span>` : text[i];
    return htmlString;
}
// Splits the string for the tilt effect
function splitKeyword(text) {
    let left, mid, right;
    left = mid = right = "";
    if (text.length % 2 == 0) {
        left = text.substr(0, text.length / 2);
        right = text.substr(text.length / 2);
    } else {
        left = text.substr(0, text.length / 2);
        mid = text.substr(text.length / 2, 1);
        right = text.substr(text.length / 2 + 1);
    }
    return {
        left,
        mid,
        right
    };
}
// Finds the elevaation for  middle letter
function raiseMidLetter(left) {
    // Get references to first and mid span
    const mid = left.nextSibling;
    // Get the length of left part, (i.e. hypotenuse of trianlge)
    // Strip the "px", and convert it to number.
    const widthStr = window.getComputedStyle(left).width;
    const width = Number(widthStr.slice(0, -2));
    // Get the value of custom angle property, defined on the root element.
    const rootElement = document.documentElement;
    const angleRaw = window.getComputedStyle(rootElement).getPropertyValue("--rotate-clockwise");
    let angle = Number(angleRaw.slice(0, -3)); //Strip the "deg"
    angle = angle * (Math.PI / 180); // Convert to radians
    const elevation = Math.sin(angle) * (width * 0.9); // Find the elevation, using sine
    mid.style.bottom = `${elevation}px`;
/*
left:  /|
      / |
     /  | :mid
    /   |
   /____| ^ elevation
   base line
*/ }
textarea.value = "**PoK\xe9MoN**";
generate();

},{"html-to-image":"82kuj"}],"82kuj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSvg", ()=>toSvg);
parcelHelpers.export(exports, "toCanvas", ()=>toCanvas);
parcelHelpers.export(exports, "toPixelData", ()=>toPixelData);
parcelHelpers.export(exports, "toPng", ()=>toPng);
parcelHelpers.export(exports, "toJpeg", ()=>toJpeg);
parcelHelpers.export(exports, "toBlob", ()=>toBlob);
parcelHelpers.export(exports, "getFontEmbedCSS", ()=>getFontEmbedCSS);
var _cloneNode = require("./cloneNode");
var _embedImages = require("./embedImages");
var _applyStyleWithOptions = require("./applyStyleWithOptions");
var _embedWebFonts = require("./embedWebFonts");
var _util = require("./util");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getImageSize(node, options = {}) {
    const width = options.width || (0, _util.getNodeWidth)(node);
    const height = options.height || (0, _util.getNodeHeight)(node);
    return {
        width,
        height
    };
}
function toSvg(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const { width , height  } = getImageSize(node, options);
        return Promise.resolve(node).then((nativeNode)=>(0, _cloneNode.cloneNode)(nativeNode, options, true)).then((clonedNode)=>(0, _embedWebFonts.embedWebFonts)(clonedNode, options)).then((clonedNode)=>(0, _embedImages.embedImages)(clonedNode, options)).then((clonedNode)=>(0, _applyStyleWithOptions.applyStyleWithOptions)(clonedNode, options)).then((clonedNode)=>(0, _util.nodeToDataURL)(clonedNode, width, height));
    });
}
const dimensionCanvasLimit = 16384; // as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
function checkCanvasDimensions(canvas) {
    if (canvas.width > dimensionCanvasLimit || canvas.height > dimensionCanvasLimit) {
        if (canvas.width > dimensionCanvasLimit && canvas.height > dimensionCanvasLimit) {
            if (canvas.width > canvas.height) {
                canvas.height *= dimensionCanvasLimit / canvas.width;
                canvas.width = dimensionCanvasLimit;
            } else {
                canvas.width *= dimensionCanvasLimit / canvas.height;
                canvas.height = dimensionCanvasLimit;
            }
        } else if (canvas.width > dimensionCanvasLimit) {
            canvas.height *= dimensionCanvasLimit / canvas.width;
            canvas.width = dimensionCanvasLimit;
        } else {
            canvas.width *= dimensionCanvasLimit / canvas.height;
            canvas.height = dimensionCanvasLimit;
        }
    }
}
function toCanvas(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        return toSvg(node, options).then((0, _util.createImage)).then((img)=>{
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            const ratio = options.pixelRatio || (0, _util.getPixelRatio)();
            const { width , height  } = getImageSize(node, options);
            const canvasWidth = options.canvasWidth || width;
            const canvasHeight = options.canvasHeight || height;
            canvas.width = canvasWidth * ratio;
            canvas.height = canvasHeight * ratio;
            if (!options.skipAutoScale) checkCanvasDimensions(canvas);
            canvas.style.width = `${canvasWidth}`;
            canvas.style.height = `${canvasHeight}`;
            if (options.backgroundColor) {
                context.fillStyle = options.backgroundColor;
                context.fillRect(0, 0, canvas.width, canvas.height);
            }
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            return canvas;
        });
    });
}
function toPixelData(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        const { width , height  } = getImageSize(node, options);
        return toCanvas(node, options).then((canvas)=>{
            const ctx = canvas.getContext("2d");
            return ctx.getImageData(0, 0, width, height).data;
        });
    });
}
function toPng(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        return toCanvas(node, options).then((canvas)=>canvas.toDataURL());
    });
}
function toJpeg(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        return toCanvas(node, options).then((canvas)=>canvas.toDataURL("image/jpeg", options.quality || 1));
    });
}
function toBlob(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        return toCanvas(node, options).then((0, _util.canvasToBlob));
    });
}
function getFontEmbedCSS(node, options = {}) {
    return __awaiter(this, void 0, void 0, function*() {
        return (0, _embedWebFonts.getWebFontCSS)(node, options);
    });
}

},{"./cloneNode":"4Daor","./embedImages":"l4TSx","./applyStyleWithOptions":"4BWy8","./embedWebFonts":"8oz3S","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Daor":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cloneNode", ()=>cloneNode);
var _getBlobFromURL = require("./getBlobFromURL");
var _clonePseudoElements = require("./clonePseudoElements");
var _util = require("./util");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function cloneCanvasElement(node) {
    return __awaiter(this, void 0, void 0, function*() {
        const dataURL = node.toDataURL();
        if (dataURL === "data:,") return Promise.resolve(node.cloneNode(false));
        return (0, _util.createImage)(dataURL);
    });
}
function cloneVideoElement(node, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return Promise.resolve(node.poster).then((url)=>(0, _getBlobFromURL.getBlobFromURL)(url, options)).then((data)=>(0, _util.makeDataUrl)(data.blob, (0, _util.getMimeType)(node.poster) || data.contentType)).then((dataURL)=>(0, _util.createImage)(dataURL));
    });
}
function cloneSingleNode(node, options) {
    return __awaiter(this, void 0, void 0, function*() {
        if (node instanceof HTMLCanvasElement) return cloneCanvasElement(node);
        if (node instanceof HTMLVideoElement && node.poster) return cloneVideoElement(node, options);
        return Promise.resolve(node.cloneNode(false));
    });
}
const isSlotElement = (node)=>node.tagName != null && node.tagName.toUpperCase() === "SLOT";
function cloneChildren(nativeNode, clonedNode, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const children = isSlotElement(nativeNode) && nativeNode.assignedNodes ? (0, _util.toArray)(nativeNode.assignedNodes()) : (0, _util.toArray)(((_a = nativeNode.shadowRoot) !== null && _a !== void 0 ? _a : nativeNode).childNodes);
        if (children.length === 0 || nativeNode instanceof HTMLVideoElement) return Promise.resolve(clonedNode);
        return children.reduce((deferred, child)=>deferred// eslint-disable-next-line no-use-before-define
            .then(()=>cloneNode(child, options)).then((clonedChild)=>{
                // eslint-disable-next-line promise/always-return
                if (clonedChild) clonedNode.appendChild(clonedChild);
            }), Promise.resolve()).then(()=>clonedNode);
    });
}
function cloneCSSStyle(nativeNode, clonedNode) {
    const source = window.getComputedStyle(nativeNode);
    const target = clonedNode.style;
    if (!target) return;
    if (source.cssText) target.cssText = source.cssText;
    else (0, _util.toArray)(source).forEach((name)=>{
        target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
    });
}
function cloneInputValue(nativeNode, clonedNode) {
    if (nativeNode instanceof HTMLTextAreaElement) clonedNode.innerHTML = nativeNode.value;
    if (nativeNode instanceof HTMLInputElement) clonedNode.setAttribute("value", nativeNode.value);
}
function decorate(nativeNode, clonedNode) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!(clonedNode instanceof Element)) return Promise.resolve(clonedNode);
        return Promise.resolve().then(()=>cloneCSSStyle(nativeNode, clonedNode)).then(()=>(0, _clonePseudoElements.clonePseudoElements)(nativeNode, clonedNode)).then(()=>cloneInputValue(nativeNode, clonedNode)).then(()=>clonedNode);
    });
}
function cloneNode(node, options, isRoot) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!isRoot && options.filter && !options.filter(node)) return Promise.resolve(null);
        return Promise.resolve(node).then((clonedNode)=>cloneSingleNode(clonedNode, options)).then((clonedNode)=>cloneChildren(node, clonedNode, options)).then((clonedNode)=>decorate(node, clonedNode));
    });
}

},{"./getBlobFromURL":"jA52P","./clonePseudoElements":"hyVY8","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jA52P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBlobFromURL", ()=>getBlobFromURL);
var _util = require("./util");
const cache = {};
function getCacheKey(url) {
    let key = url.replace(/\?.*/, "");
    // font resourse
    if (/ttf|otf|eot|woff2?/i.test(key)) key = key.replace(/.*\//, "");
    return key;
}
function getBlobFromURL(url, options) {
    const cacheKey = getCacheKey(url);
    if (cache[cacheKey] != null) return cache[cacheKey];
    // cache bypass so we dont have CORS issues with cached images
    // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
    if (options.cacheBust) // eslint-disable-next-line no-param-reassign
    url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
    const failed = (reason)=>{
        let placeholder = "";
        if (options.imagePlaceholder) {
            const parts = options.imagePlaceholder.split(/,/);
            if (parts && parts[1]) placeholder = parts[1];
        }
        let msg = `Failed to fetch resource: ${url}`;
        if (reason) msg = typeof reason === "string" ? reason : reason.message;
        if (msg) console.error(msg);
        return {
            blob: placeholder,
            contentType: ""
        };
    };
    const deferred = window.fetch(url).then((res)=>// eslint-disable-next-line promise/no-nesting
        res.blob().then((blob)=>({
                blob,
                contentType: res.headers.get("Content-Type") || ""
            }))).then(({ blob , contentType  })=>new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>resolve({
                    contentType,
                    blob: reader.result
                });
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        })).then(({ blob , contentType  })=>({
            contentType,
            blob: (0, _util.parseDataUrlContent)(blob)
        }))// on failed
    .catch(failed);
    // cache result
    cache[cacheKey] = deferred;
    return deferred;
}

},{"./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIddd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getExtension", ()=>getExtension);
parcelHelpers.export(exports, "getMimeType", ()=>getMimeType);
parcelHelpers.export(exports, "resolveUrl", ()=>resolveUrl);
parcelHelpers.export(exports, "isDataUrl", ()=>isDataUrl);
parcelHelpers.export(exports, "makeDataUrl", ()=>makeDataUrl);
parcelHelpers.export(exports, "parseDataUrlContent", ()=>parseDataUrlContent);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "getNodeWidth", ()=>getNodeWidth);
parcelHelpers.export(exports, "getNodeHeight", ()=>getNodeHeight);
parcelHelpers.export(exports, "getPixelRatio", ()=>getPixelRatio);
parcelHelpers.export(exports, "canvasToBlob", ()=>canvasToBlob);
parcelHelpers.export(exports, "createImage", ()=>createImage);
parcelHelpers.export(exports, "svgToDataURL", ()=>svgToDataURL);
parcelHelpers.export(exports, "nodeToDataURL", ()=>nodeToDataURL);
var process = require("process");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const WOFF = "application/font-woff";
const JPEG = "image/jpeg";
const mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml"
};
function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
}
function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
}
function resolveUrl(url, baseUrl) {
    // url is absolute already
    if (url.match(/^[a-z]+:\/\//i)) return url;
    // url is absolute already, without protocol
    if (url.match(/^\/\//)) return window.location.protocol + url;
    // dataURI, mailto:, tel:, etc.
    if (url.match(/^[a-z]+:/i)) return url;
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) base.href = baseUrl;
    a.href = url;
    return a.href;
}
function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
}
function parseDataUrlContent(dataURL) {
    return dataURL.split(/,/)[1];
}
const uuid = function uuid() {
    // generate uuid for className of pseudo elements.
    // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
    let counter = 0;
    // ref: http://stackoverflow.com/a/6248722/2519373
    const random = ()=>// eslint-disable-next-line no-bitwise
        `0000${(Math.random() * Math.pow(36, 4) << 0).toString(36)}`.slice(-4);
    return ()=>{
        counter += 1;
        return `u${random()}${counter}`;
    };
}();
const delay = (ms)=>(args)=>new Promise((resolve)=>setTimeout(()=>resolve(args), ms));
function toArray(arrayLike) {
    const arr = [];
    for(let i = 0, l = arrayLike.length; i < l; i += 1)arr.push(arrayLike[i]);
    return arr;
}
function px(node, styleProperty) {
    const val = window.getComputedStyle(node).getPropertyValue(styleProperty);
    return parseFloat(val.replace("px", ""));
}
function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
}
function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
        FINAL_PROCESS = process;
    } catch (e) {
    // pass
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
        ratio = parseInt(val, 10);
        if (Number.isNaN(ratio)) ratio = 1;
    }
    return ratio || window.devicePixelRatio || 1;
}
function canvasToBlob(canvas) {
    if (canvas.toBlob) return new Promise((resolve)=>canvas.toBlob(resolve));
    return new Promise((resolve)=>{
        const binaryString = window.atob(canvas.toDataURL().split(",")[1]);
        const len = binaryString.length;
        const binaryArray = new Uint8Array(len);
        for(let i = 0; i < len; i += 1)binaryArray[i] = binaryString.charCodeAt(i);
        resolve(new Blob([
            binaryArray
        ], {
            type: "image/png"
        }));
    });
}
function createImage(url) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = reject;
        img.crossOrigin = "anonymous";
        img.decoding = "sync";
        img.src = url;
    });
}
function svgToDataURL(svg) {
    return __awaiter(this, void 0, void 0, function*() {
        return Promise.resolve().then(()=>new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html)=>`data:image/svg+xml;charset=utf-8,${html}`);
    });
}
function nodeToDataURL(node, width, height) {
    return __awaiter(this, void 0, void 0, function*() {
        const xmlns = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(xmlns, "svg");
        const foreignObject = document.createElementNS(xmlns, "foreignObject");
        svg.setAttribute("width", `${width}`);
        svg.setAttribute("height", `${height}`);
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.setAttribute("x", "0");
        foreignObject.setAttribute("y", "0");
        foreignObject.setAttribute("externalResourcesRequired", "true");
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svgToDataURL(svg);
    });
}

},{"process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hyVY8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clonePseudoElements", ()=>clonePseudoElements);
var _util = require("./util");
function formatCSSText(style) {
    const content = style.getPropertyValue("content");
    return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
}
function formatCSSProperties(style) {
    return (0, _util.toArray)(style).map((name)=>{
        const value = style.getPropertyValue(name);
        const priority = style.getPropertyPriority(name);
        return `${name}: ${value}${priority ? " !important" : ""};`;
    }).join(" ");
}
function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue("content");
    if (content === "" || content === "none") return;
    const className = (0, _util.uuid)();
    try {
        clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
        return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ":before");
    clonePseudoElement(nativeNode, clonedNode, ":after");
}

},{"./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4TSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "embedImages", ()=>embedImages);
var _getBlobFromURL = require("./getBlobFromURL");
var _embedResources = require("./embedResources");
var _util = require("./util");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function embedBackground(clonedNode, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function*() {
        const background = (_a = clonedNode.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue("background");
        if (!background) return Promise.resolve(clonedNode);
        return Promise.resolve(background).then((cssString)=>(0, _embedResources.embedResources)(cssString, null, options)).then((cssString)=>{
            clonedNode.style.setProperty("background", cssString, clonedNode.style.getPropertyPriority("background"));
            return clonedNode;
        });
    });
}
function embedImageNode(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!(clonedNode instanceof HTMLImageElement && !(0, _util.isDataUrl)(clonedNode.src)) && !(clonedNode instanceof SVGImageElement && !(0, _util.isDataUrl)(clonedNode.href.baseVal))) return Promise.resolve(clonedNode);
        const src = clonedNode instanceof HTMLImageElement ? clonedNode.src : clonedNode.href.baseVal;
        return Promise.resolve(src).then((url)=>(0, _getBlobFromURL.getBlobFromURL)(url, options)).then((data)=>(0, _util.makeDataUrl)(data.blob, (0, _util.getMimeType)(src) || data.contentType)).then((dataURL)=>new Promise((resolve, reject)=>{
                clonedNode.onload = resolve;
                clonedNode.onerror = reject;
                if (clonedNode instanceof HTMLImageElement) {
                    clonedNode.srcset = "";
                    clonedNode.src = dataURL;
                } else clonedNode.href.baseVal = dataURL;
            })).then(()=>clonedNode, ()=>clonedNode);
    });
}
function embedChildren(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function*() {
        const children = (0, _util.toArray)(clonedNode.childNodes);
        // eslint-disable-next-line no-use-before-define
        const deferreds = children.map((child)=>embedImages(child, options));
        return Promise.all(deferreds).then(()=>clonedNode);
    });
}
function embedImages(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!(clonedNode instanceof Element)) return Promise.resolve(clonedNode);
        return Promise.resolve(clonedNode).then((node)=>embedBackground(node, options)).then((node)=>embedImageNode(node, options)).then((node)=>embedChildren(node, options));
    });
}

},{"./getBlobFromURL":"jA52P","./embedResources":"iQ21R","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQ21R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toRegex", ()=>toRegex);
parcelHelpers.export(exports, "parseURLs", ()=>parseURLs);
parcelHelpers.export(exports, "embed", ()=>embed);
parcelHelpers.export(exports, "shouldEmbed", ()=>shouldEmbed);
parcelHelpers.export(exports, "embedResources", ()=>embedResources);
var _getBlobFromURL = require("./getBlobFromURL");
var _util = require("./util");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
    // eslint-disable-next-line no-useless-escape
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
}
function parseURLs(cssText) {
    const result = [];
    cssText.replace(URL_REGEX, (raw, quotation, url)=>{
        result.push(url);
        return raw;
    });
    return result.filter((url)=>!(0, _util.isDataUrl)(url));
}
function embed(cssText, resourceURL, baseURL, options, get) {
    const resolvedURL = baseURL ? (0, _util.resolveUrl)(resourceURL, baseURL) : resourceURL;
    return Promise.resolve(resolvedURL).then((url)=>get ? get(url) : (0, _getBlobFromURL.getBlobFromURL)(url, options)).then((data)=>{
        if (typeof data === "string") return (0, _util.makeDataUrl)(data, (0, _util.getMimeType)(resourceURL));
        return (0, _util.makeDataUrl)(data.blob, (0, _util.getMimeType)(resourceURL) || data.contentType);
    }).then((dataURL)=>cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`)).then((content)=>content, ()=>resolvedURL);
}
function filterPreferredFontFormat(str, { preferredFontFormat  }) {
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match)=>{
        // eslint-disable-next-line no-constant-condition
        while(true){
            const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
            if (!format) return "";
            if (format === preferredFontFormat) return `src: ${src};`;
        }
    });
}
function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
}
function embedResources(cssText, baseUrl, options) {
    return __awaiter(this, void 0, void 0, function*() {
        if (!shouldEmbed(cssText)) return Promise.resolve(cssText);
        const filteredCSSText = filterPreferredFontFormat(cssText, options);
        return Promise.resolve(filteredCSSText).then(parseURLs).then((urls)=>urls.reduce((deferred, url)=>// eslint-disable-next-line promise/no-nesting
                deferred.then((css)=>embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText)));
    });
}

},{"./getBlobFromURL":"jA52P","./util":"eIddd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4BWy8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyleWithOptions", ()=>applyStyleWithOptions);
function applyStyleWithOptions(node, options) {
    const { style  } = node;
    if (options.backgroundColor) style.backgroundColor = options.backgroundColor;
    if (options.width) style.width = `${options.width}px`;
    if (options.height) style.height = `${options.height}px`;
    const manual = options.style;
    if (manual != null) Object.keys(manual).forEach((key)=>{
        style[key] = manual[key];
    });
    return node;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oz3S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWebFontCSS", ()=>getWebFontCSS);
parcelHelpers.export(exports, "embedWebFonts", ()=>embedWebFonts);
var _util = require("./util");
var _embedResources = require("./embedResources");
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cssFetchCache = {};
function fetchCSS(url) {
    const cache = cssFetchCache[url];
    if (cache != null) return cache;
    const deferred = window.fetch(url).then((res)=>({
            url,
            cssText: res.text()
        }));
    cssFetchCache[url] = deferred;
    return deferred;
}
function embedFonts(meta) {
    return __awaiter(this, void 0, void 0, function*() {
        return meta.cssText.then((raw)=>{
            let cssText = raw;
            const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
            const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
            const loadFonts = fontLocs.map((location)=>{
                let url = location.replace(regexUrl, "$1");
                if (!url.startsWith("https://")) url = new URL(url, meta.url).href;
                // eslint-disable-next-line promise/no-nesting
                return window.fetch(url).then((res)=>res.blob()).then((blob)=>new Promise((resolve, reject)=>{
                        const reader = new FileReader();
                        reader.onloadend = ()=>{
                            // Side Effect
                            cssText = cssText.replace(location, `url(${reader.result})`);
                            resolve([
                                location,
                                reader.result
                            ]);
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(blob);
                    }));
            });
            // eslint-disable-next-line promise/no-nesting
            return Promise.all(loadFonts).then(()=>cssText);
        });
    });
}
function parseCSS(source) {
    if (source == null) return [];
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    // strip out comments
    let cssText = source.replace(commentsRegex, "");
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    // eslint-disable-next-line no-constant-condition
    while(true){
        const matches = keyframesRegex.exec(cssText);
        if (matches === null) break;
        result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    // to match css & media queries together
    const combinedCSSRegex = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    // unified regex
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    // eslint-disable-next-line no-constant-condition
    while(true){
        let matches = importRegex.exec(cssText);
        if (matches === null) {
            matches = unifiedRegex.exec(cssText);
            if (matches === null) break;
            else importRegex.lastIndex = unifiedRegex.lastIndex;
        } else unifiedRegex.lastIndex = importRegex.lastIndex;
        result.push(matches[0]);
    }
    return result;
}
function getCSSRules(styleSheets) {
    return __awaiter(this, void 0, void 0, function*() {
        const ret = [];
        const deferreds = [];
        // First loop inlines imports
        styleSheets.forEach((sheet)=>{
            if ("cssRules" in sheet) try {
                (0, _util.toArray)(sheet.cssRules).forEach((item, index)=>{
                    if (item.type === CSSRule.IMPORT_RULE) {
                        let importIndex = index + 1;
                        const url = item.href;
                        const deferred = fetchCSS(url).then((metadata)=>metadata ? embedFonts(metadata) : "").then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                                try {
                                    sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
                                } catch (error) {
                                    console.error("Error inserting rule from remote css", {
                                        rule,
                                        error
                                    });
                                }
                            })).catch((e)=>{
                            console.error("Error loading remote css", e.toString());
                        });
                        deferreds.push(deferred);
                    }
                });
            } catch (e) {
                const inline = styleSheets.find((a)=>a.href == null) || document.styleSheets[0];
                if (sheet.href != null) deferreds.push(fetchCSS(sheet.href).then((metadata)=>metadata ? embedFonts(metadata) : "").then((cssText)=>parseCSS(cssText).forEach((rule)=>{
                        inline.insertRule(rule, sheet.cssRules.length);
                    })).catch((err)=>{
                    console.error("Error loading remote stylesheet", err.toString());
                }));
                console.error("Error inlining remote css file", e.toString());
            }
        });
        return Promise.all(deferreds).then(()=>{
            // Second loop parses rules
            styleSheets.forEach((sheet)=>{
                if ("cssRules" in sheet) try {
                    (0, _util.toArray)(sheet.cssRules).forEach((item)=>{
                        ret.push(item);
                    });
                } catch (e) {
                    console.error(`Error while reading CSS rules from ${sheet.href}`, e.toString());
                }
            });
            return ret;
        });
    });
}
function getWebFontRules(cssRules) {
    return cssRules.filter((rule)=>rule.type === CSSRule.FONT_FACE_RULE).filter((rule)=>(0, _embedResources.shouldEmbed)(rule.style.getPropertyValue("src")));
}
function parseWebFontRules(node) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            if (node.ownerDocument == null) reject(new Error("Provided element is not within a Document"));
            resolve((0, _util.toArray)(node.ownerDocument.styleSheets));
        }).then((styleSheets)=>getCSSRules(styleSheets)).then(getWebFontRules);
    });
}
function getWebFontCSS(node, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return parseWebFontRules(node).then((rules)=>Promise.all(rules.map((rule)=>{
                const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
                return (0, _embedResources.embedResources)(rule.cssText, baseUrl, options);
            }))).then((cssTexts)=>cssTexts.join("\n"));
    });
}
function embedWebFonts(clonedNode, options) {
    return __awaiter(this, void 0, void 0, function*() {
        return (options.fontEmbedCSS != null ? Promise.resolve(options.fontEmbedCSS) : getWebFontCSS(clonedNode, options)).then((cssText)=>{
            const styleNode = document.createElement("style");
            const sytleContent = document.createTextNode(cssText);
            styleNode.appendChild(sytleContent);
            if (clonedNode.firstChild) clonedNode.insertBefore(styleNode, clonedNode.firstChild);
            else clonedNode.appendChild(styleNode);
            return clonedNode;
        });
    });
}

},{"./util":"eIddd","./embedResources":"iQ21R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iL2AH","6rimH"], "6rimH", "parcelRequire4bd4")

//# sourceMappingURL=index.8cfc62b9.js.map
