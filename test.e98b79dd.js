// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cssString = "\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n}\n\n.textPart {\n  height: 50vh;\n  overflow: auto;\n\n  /* position: fixed; */\n  width: 100%;\n  /* top: 50%; */\n  font-size: 16px;\n}\n\n/* \u8BA9\u6EDA\u52A8\u6761\u6D88\u5931 */\n.textPart::-webkit-scrollbar {\n  display: none; /* Chrome Safari */\n}\n\n.html {\n  border: 1px solid blue;\n  background-color: rgb(255, 230, 0);\n  /* position: fixed; */\n  width: 100%;\n  height: 50vh;\n  /* top: 50%; */\n}\n\n.css {\n  border: 1px solid red;\n}\n\n.skin {\n  /* \u8BBE\u7F6E\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5176\u4ED6\u7684\u5185\u5BB9\u76F8\u5BF9\u5B83\u8FDB\u884C\u4F4D\u79FB\u53D8\u5316 */\n\n  position: relative;\n  width: 420px;\n  height: 240px;\n  left: 50%;\n  margin-left: -210px;\n  top: 50%;\n  margin-top: -120px;\n  /* border: 1px solid green; */\n}\n\n/* ----------------------------------------- */\n/* ----------------------------------------- */\n\n/* \u4E0B\u9762\u662F\u9F3B\u5B50 */\n\n.triangle {\n  /* position: relative; */\n  position: absolute;\n  border: 10px solid black;\n  border-color: rgb(0, 0, 0) transparent transparent transparent;\n  width: 1px;\n  height: 1px;\n  left: 50%;\n  top: 20%;\n  margin-top: -10px;\n  margin-left: -10px;\n}\n\n.circular_arc {\n  background-color: rgb(0, 0, 0);\n  width: 20px;\n  height: 6px;\n  /* \u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\u540E\uFF0C\u5C31\u4F1A\u627E\u5230\u4E0A\u4E00\u4E2A\u4E0D\u662Fstatic\u7684\u7236\u5143\u7D20\u4F5C\u4E3A\u5B9A\u4F4D\u57FA\u51C6\uFF0C\u8FD9\u91CC\u5C31\u662F\u4E09\u89D2\u5F62triangle */\n  /* xiu */\n  position: absolute;\n  top: -16px;\n  left: -10px;\n  border-radius: 100% 100% 0 0;\n}\n\n/* \u5B9E\u73B0\u9F20\u6807hover\u65F6\uFF0C\u9F3B\u5B50\u7684\u6643\u52A8\u6548\u679C */\n@-webkit-keyframes wave {\n  0% {\n  }\n  25% {\n    transform: rotate(4deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-4deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes wave {\n  0% {\n  }\n  25% {\n    transform: rotate(4deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(-4deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.triangle:hover {\n  -webkit-animation: wave 300ms infinite linear;\n  animation: wave 300ms infinite linear;\n}\n\n/* ----------------------------------------- */\n/* ----------------------------------------- */\n\n/* \u4E0B\u9762\u662F\u773C\u775B */\n.eye {\n  position: absolute;\n  border: 2px solid #000;\n  width: 63px;\n  height: 63px;\n  /* \u4ECE\u4E0A\u4E0B\u6392\u5217\u53D8\u6210\u5DE6\u53F3\u6392\u5217 */\n  /* display: inline-block; */\n  left: 50%;\n  top: 0%;\n  /* top: 100px; */\n  margin-left: -31.5px;\n  border-radius: 50%;\n  background-color: rgb(46, 46, 46);\n}\n\n.eye.left {\n  transform: translateX(-100px);\n}\n\n.eye.right {\n  transform: translateX(100px);\n}\n\n.eye::after {\n  position: absolute;\n  /* \u5FC5\u987B\u8981\u6709\u8FD9\u4E2Acontent */\n  content: \"\";\n  display: block;\n  width: 25px;\n  height: 25px;\n  left: 10px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 2px solid #000;\n}\n/* ----------------------------------------- */\n/* ----------------------------------------- */\n\n/* \u4E0B\u9762\u662F\u5634\u5DF4 */\n.mouth {\n  /* border: 3px solid orange; */\n  width: 170px;\n  height: 170px;\n  /* position: absolute; */\n  position: relative;\n  left: 50%;\n  top: 70px;\n  margin-left: -85px;\n  overflow: hidden;\n}\n\n.mouth .up {\n  z-index: 1;\n  /* border-color: #ffe600; */\n}\n\n.mouth .up .lip {\n  border: 3px solid #000;\n  width: 80px;\n  height: 25px;\n  top: -12px;\n  left: 50%;\n  position: absolute;\n  border-top: none;\n  background-color: #ffe600;\n  z-index: 1;\n}\n\n.mouth .up .left-lip {\n  border-bottom-left-radius: 60px 30px;\n  transform: rotate(20deg);\n  border-right: none;\n  transform: translateX(-85px) rotate(-20deg) translateY(9px);\n  /*  */\n}\n\n.mouth .up .right-lip {\n  border-bottom-right-radius: 60px 30px;\n  transform: rotate(20deg) translateY(8px) translateX(3px);\n  border-left: none;\n  /* z-index: 1; */\n}\n\n.mouth .down {\n  position: absolute;\n  /* background-color: #00039b; */\n  width: 100%;\n  /* height: 800px; */\n  height: 100%;\n  /* \u8FD9\u91CC\u662F\u8BA9\u820C\u5934\u8D85\u51FA\u7684\u90E8\u5206\u9690\u85CF */\n  overflow: hidden;\n  top: 7px;\n}\n\n.down .tongue {\n  border: 3px solid #000000;\n  position: absolute;\n  /* border: 1px solid rgb(36, 167, 64); */\n  background-color: #9b000a;\n  height: 500px;\n  width: 100%;\n  border-bottom-left-radius: 50% 80%;\n  border-bottom-right-radius: 50% 80%;\n  top: -213%;\n  overflow: hidden;\n  /* z-index: 0.9; */\n}\n\n.mouth .down .tongue .circle {\n  position: absolute;\n  /* border: 1px solid rgb(36, 167, 64); */\n  background-color: #ff485f;\n  height: 170px;\n  width: 170px;\n  top: 382px;\n  left: -3px;\n  border-top-left-radius: 50% 80%;\n  border-top-right-radius: 50% 80%;\n  /* top: 30px; */\n  /* z-index: 0.1; */\n}\n/* ----------------------------------------- */\n/* ----------------------------------------- */\n\n/* \u4E0B\u9762\u662F\u8138\u988A */\n.cheek {\n  position: absolute;\n  border: 2px solid black;\n  width: 80px;\n  height: 80px;\n  top: 50%;\n  left: 50%;\n  border-radius: 50%;\n}\n\n/* \u5982\u679C\u662F\u540C\u4E00\u5C42\u7EA7\uFF0C\u90A3\u4E48\u4E2D\u95F4\u4E0D\u80FD\u6709\u7A7A\u683C */\n.cheek.left {\n  /* transform: translateX(-190px); */\n  background-color: #ff0000;\n  margin-left: -190px;\n}\n\n.cheek.right {\n  /* transform: translateX(110px); */\n  background-color: #ff0000;\n  margin-left: 110px;\n}\n";
var _default = cssString;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textPart = document.querySelector(".textPart");
var cssPart = document.querySelector(".css");
var btnPause = document.querySelector(".btnPause");
var btnPlay = document.querySelector(".btnPlay");
var btnSlow = document.querySelector(".btnSlowSpeed");
var btnNormal = document.querySelector(".btnNormalSpeed");
var btnFast = document.querySelector(".btnFastSpeed");
var n = 0; // 设置播放速度

var timerSpeed = 100; // -------------------------------------------
// 页面的渲染

var print = setInterval(function () {
  n = n + 1;

  if (n > _css.default.length) {
    clearInterval(print);
    return;
  } // 形成页面上半部分的代码文字


  textPart.innerText = _css.default.substring(0, n); // 输出从第0位到第n-1位，第n位是不会输出的
  // 让页面的上半部分滚动最底部（关键要在这里面执行）

  textPart.scrollTop = textPart.scrollHeight; // textPart.scrollIntoView(false);
  // textPart.scrollTop = 9999999;
  // 形成页面的下半部分皮卡丘

  cssPart.innerHTML = _css.default.substring(0, n);
}, timerSpeed); // -------------------------------------------
// print功能放入函数中，方便后面再次调用

var renderTextAndHtmlFn = function renderTextAndHtmlFn() {
  n = n + 1;
  console.log(n);

  if (n > _css.default.length) {
    clearInterval(print);
    return;
  }

  textPart.innerText = _css.default.substring(0, n);
  textPart.scrollTop = textPart.scrollHeight;
  cssPart.innerHTML = _css.default.substring(0, n);
}; // -------------------------------------------
// 几个功能集成到对象中


var player = {
  runTimer: function runTimer() {
    // setInterval会执行函数，也就是下面的renderTextAndHtmlFn
    return setInterval(renderTextAndHtmlFn, timerSpeed);
  },
  pauseTimer: function pauseTimer() {
    clearInterval(print);
  },
  pauseFeature: function pauseFeature() {
    // 整个对象中的pauseTimer属性
    player.pauseTimer();
  },
  playFeature: function playFeature() {
    player.pauseTimer();
    print = player.runTimer();
  },
  slowPlayFeature: function slowPlayFeature() {
    timerSpeed = 400;
    player.playFeature();
  },
  normalPlayFeature: function normalPlayFeature() {
    timerSpeed = 100;
    player.playFeature();
  },
  fastPlayFeature: function fastPlayFeature() {
    timerSpeed = 0;
    player.playFeature();
  }
};
var html = "\n<div class=\"buttons\">\n<button class=\"btnPause\">\u6682\u505C</button>\n<button class=\"btnPlay\">\u64AD\u653E</button>\n<button class=\"btnSlowSpeed\">\u6162\u901F</button>\n<button class=\"btnNormalSpeed\">\u5E38\u901F</button>\n<button class=\"btnFastSpeed\">\u5FEB\u901F</button>\n</div>"; // -------------------------------------------
// 暂停功能

btnPause.onclick = player.pauseFeature; // 播放功能

btnPlay.onclick = player.playFeature; // 慢速功能

btnSlow.onclick = player.slowPlayFeature; // 常速功能

btnNormal.onclick = player.normalPlayFeature; // 快速功能

btnFast.onclick = player.fastPlayFeature;
},{"./css.js":"css.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11745" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map