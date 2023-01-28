var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var runtime = {};
var helper = {};
var config = {};
Object.defineProperty(config, "__esModule", { value: true });
config.getRemoveScriptDomOnLoaded = config.getFallbackPluginUrl = config.callModuleLoadError = config.callPluginLoadError = config.getPluginUrlPrefix = config.getPluginList = config.applyConfig = void 0;
var _plugins = {};
var _pluginUrlPrefix = "/plugins/";
var _pluginUrlBuilder = function(pluginName) {
  return "/plugins/".concat(pluginName, "/index.js");
};
var _onPluginLoadError = function(error) {
  console.error("[MiniStar] Plugin Loaded Error", error);
};
var _removeScriptDomOnLoaded = true;
function applyConfig(config2) {
  if (typeof config2.pluginUrlPrefix === "string") {
    _pluginUrlPrefix = config2.pluginUrlPrefix;
  }
  if (typeof config2.pluginUrlBuilder === "function") {
    _pluginUrlBuilder = config2.pluginUrlBuilder;
  }
  if (typeof config2.onPluginLoadError === "function") {
    _onPluginLoadError = config2.onPluginLoadError;
  }
  if (typeof config2.removeScriptDomOnLoaded === "boolean") {
    _removeScriptDomOnLoaded = config2.removeScriptDomOnLoaded;
  }
}
config.applyConfig = applyConfig;
function getPluginList() {
  return _plugins;
}
config.getPluginList = getPluginList;
function getPluginUrlPrefix() {
  return _pluginUrlPrefix;
}
config.getPluginUrlPrefix = getPluginUrlPrefix;
function callPluginLoadError(error) {
  _onPluginLoadError(error);
}
config.callPluginLoadError = callPluginLoadError;
function callModuleLoadError(error) {
  _onPluginLoadError({
    pluginName: error.moduleName,
    detail: error.detail
  });
}
config.callModuleLoadError = callModuleLoadError;
function getFallbackPluginUrl(pluginName) {
  return _pluginUrlBuilder(pluginName);
}
config.getFallbackPluginUrl = getFallbackPluginUrl;
function getRemoveScriptDomOnLoaded() {
  return _removeScriptDomOnLoaded;
}
config.getRemoveScriptDomOnLoaded = getRemoveScriptDomOnLoaded;
var utils = {};
Object.defineProperty(utils, "__esModule", { value: true });
utils.mergeUrl = utils.isFullUrl = utils.getPluginName = utils.isPluginModuleEntry = utils.isPluginModuleName = utils.processModulePath = void 0;
function trimDotOfPath(parent, self2) {
  if (!self2.startsWith(".")) {
    return self2;
  }
  var parentList = parent.split("/");
  var selfList = self2.split("/");
  parentList.pop();
  var selfRet = [];
  selfList.forEach(function(item) {
    if (item === "..") {
      parentList.pop();
    }
    if (item !== ".." && item !== ".") {
      selfRet.push(item);
    }
  });
  return parentList.concat(selfRet).join("/");
}
function processModulePath(baseModuleName, path) {
  if (isPluginModuleName(path)) {
    return path;
  }
  if (path.endsWith(".js") || path.startsWith("./")) {
    return trimDotOfPath(!baseModuleName.endsWith(".js") ? baseModuleName + "/" : baseModuleName, !path.endsWith(".js") ? "".concat(path, ".js") : path);
  }
  return path;
}
utils.processModulePath = processModulePath;
function isPluginModuleName(fullName) {
  if (typeof fullName !== "string") {
    return false;
  }
  return fullName.startsWith("@plugins/");
}
utils.isPluginModuleName = isPluginModuleName;
function isPluginModuleEntry(fullName) {
  if (typeof fullName !== "string") {
    return false;
  }
  return fullName.startsWith("@plugins/") && fullName.split("/").length === 2;
}
utils.isPluginModuleEntry = isPluginModuleEntry;
function getPluginName(fullName) {
  if (!isPluginModuleName(fullName)) {
    return null;
  }
  var _a = fullName.split("/"), name = _a[1];
  return name;
}
utils.getPluginName = getPluginName;
function isFullUrl(url) {
  return url.startsWith("http:") || url.startsWith("https:");
}
utils.isFullUrl = isFullUrl;
function mergeUrl(baseUrl, appendUrl) {
  var _a = appendUrl.split("/"), prefix = _a[1], pluginName = _a[2], rest = _a.slice(3);
  var matchStr = "/".concat(prefix, "/").concat(pluginName);
  var index = baseUrl.search(matchStr);
  if (index === -1) {
    return appendUrl;
  }
  return baseUrl.slice(0, index) + matchStr + "/" + rest.join("/");
}
utils.mergeUrl = mergeUrl;
var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
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
var __generator$1 = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
Object.defineProperty(helper, "__esModule", { value: true });
helper.regSharedModule = helper.regDependency = helper.definePlugin = helper.requirePlugin = helper.getLoadedModules = void 0;
var config_1$1 = config;
var utils_1 = utils;
var loadedModules = {};
if (process.env.NODE_ENV === "development") {
  window.__ministar_loadedModules = loadedModules;
}
function getLoadedModules() {
  return loadedModules;
}
helper.getLoadedModules = getLoadedModules;
function generateModuleName(scriptUrl) {
  var pluginList = (0, config_1$1.getPluginList)();
  var searchedPlugin = Object.entries(pluginList).find(function(_a) {
    var value = _a[1];
    return value.url === scriptUrl;
  });
  if (searchedPlugin === void 0) {
    return scriptUrl;
  } else {
    return searchedPlugin[1].name;
  }
}
function loadPluginByUrl(url) {
  return new Promise(function(resolve, reject) {
    var scriptDom = document.createElement("script");
    scriptDom.src = url;
    scriptDom.onload = function(e) {
      resolve(e);
      if ((0, config_1$1.getRemoveScriptDomOnLoaded)()) {
        document.body.removeChild(scriptDom);
      }
    };
    scriptDom.onerror = function(e) {
      reject(e);
    };
    document.body.appendChild(scriptDom);
  });
}
var interval = [0, 10, 100, 200, 500];
function tryToGetModule(moduleName) {
  var i = 0;
  function loop() {
    if (i > interval.length) {
      console.error("Eval Timeout, moduleName: [".concat(moduleName, "]"));
      return Promise.reject();
    }
    return new Promise(function(resolve) {
      setTimeout(function() {
        if (loadedModules[moduleName]) {
          resolve();
        } else {
          i++;
          resolve(loop());
        }
      }, interval[i]);
    });
  }
  return loop().then(function() {
    return true;
  }).catch(function() {
    return false;
  });
}
var loadingDependency = /* @__PURE__ */ new Map();
function loadDependency(dep) {
  return __awaiter$1(this, void 0, void 0, function() {
    function loadDependencyScript() {
      var _a, _b;
      return __awaiter$1(this, void 0, void 0, function() {
        var pluginInfo;
        return __generator$1(this, function(_c) {
          switch (_c.label) {
            case 0:
              pluginInfo = typeof pluginName === "string" ? (0, config_1$1.getPluginList)()[pluginName] : null;
              if ((0, utils_1.isPluginModuleEntry)(moduleName)) {
                if (pluginInfo === null) {
                  throw new Error("[".concat(moduleName, "] Looks like not a valid module name."));
                }
                if (pluginInfo === void 0) {
                  dep = (0, config_1$1.getFallbackPluginUrl)(pluginName);
                } else {
                  dep = (_a = pluginInfo.url) !== null && _a !== void 0 ? _a : (0, config_1$1.getFallbackPluginUrl)(pluginInfo.name);
                }
              } else {
                if (!dep.startsWith("./") && !dep.endsWith(".js")) {
                  throw new Error("[".concat(dep, "] Cannot load, please checkout your code in ").concat(moduleName, "(").concat(pluginInfo === null || pluginInfo === void 0 ? void 0 : pluginInfo.url, ")."));
                }
                if (pluginInfo && (0, utils_1.isFullUrl)((_b = pluginInfo.url) !== null && _b !== void 0 ? _b : "")) {
                  dep = (0, utils_1.mergeUrl)(pluginInfo.url, dep);
                }
              }
              return [4, loadPluginByUrl(dep)];
            case 1:
              _c.sent();
              return [2, new Promise(function(resolve, reject) {
                tryToGetModule(moduleName).then(function(has) {
                  if (!has) {
                    reject(new Error("Cannot load script: ".concat(moduleName)));
                    return;
                  } else {
                    resolve(loadedModules[moduleName]._promise);
                  }
                }).catch(function(e) {
                  reject(e);
                });
              })];
          }
        });
      });
    }
    var moduleName, pluginName, p, pluginModule;
    return __generator$1(this, function(_a) {
      moduleName = generateModuleName(dep);
      pluginName = (0, utils_1.getPluginName)(moduleName);
      if (dep.startsWith("@plugins/")) {
        dep = dep.replace("@plugins/", (0, config_1$1.getPluginUrlPrefix)());
      }
      if (loadingDependency.has(moduleName)) {
        return [2, loadingDependency.get(moduleName)];
      }
      if (!(moduleName in loadedModules)) {
        p = loadDependencyScript();
        loadingDependency.set(moduleName, p);
        return [2, p.then(function(res) {
          loadingDependency.delete(moduleName);
          return res;
        })];
      }
      pluginModule = loadedModules[moduleName];
      return [2, pluginModule._promise];
    });
  });
}
function requirePlugin(deps, onSuccess, onError) {
  var allPromises = Promise.all(deps.map(function(dep) {
    return loadDependency(dep);
  }).filter(Boolean));
  allPromises.then(function(args) {
    onSuccess.apply(void 0, args);
  }).catch(function(err) {
    console.error(err);
    onError(err);
  });
}
helper.requirePlugin = requirePlugin;
function definePlugin(name, deps, callback) {
  var moduleName = name;
  if (arguments.length === 2) {
    callback = deps;
    deps = [];
  }
  if (loadedModules[moduleName]) {
    console.warn("".concat(moduleName, " has been loaded. Skipped!"));
    return;
  }
  loadedModules[moduleName] = {
    module: null,
    _promise: new Promise(function(resolve, reject) {
      var convertedDeps = deps.map(function(module) {
        return (0, utils_1.processModulePath)(name, module);
      });
      var requireIndex = deps.findIndex(function(x) {
        return x === "require";
      });
      var exportsIndex = deps.findIndex(function(x) {
        return x === "exports";
      });
      var requiredDeps = convertedDeps.filter(function(x) {
        return x !== "require" && x !== "exports";
      });
      requirePlugin(requiredDeps, function() {
        var callbackArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          callbackArgs[_i] = arguments[_i];
        }
        var exports = {};
        if (requireIndex !== -1) {
          callbackArgs.splice(requireIndex, 0, function(deps2, callback2) {
            var convertedDeps2 = deps2.map(function(module) {
              return (0, utils_1.processModulePath)(name, module);
            });
            requirePlugin(convertedDeps2, callback2, function(err) {
              return (0, config_1$1.callModuleLoadError)({
                moduleName,
                detail: err
              });
            });
          });
        }
        if (exportsIndex !== -1) {
          callbackArgs.splice(exportsIndex, 0, exports);
        }
        try {
          var ret = callback.apply(void 0, callbackArgs);
          if (exportsIndex === -1 && ret) {
            exports = ret;
          }
          resolve(exports);
        } catch (e) {
          (0, config_1$1.callModuleLoadError)({
            moduleName: name,
            detail: new Error(e)
          });
          reject(e);
        }
      }, function(err) {
        (0, config_1$1.callModuleLoadError)({
          moduleName,
          detail: err
        });
        reject(err);
      });
    }).then(function(exportedModule) {
      loadedModules[moduleName].module = exportedModule;
      return exportedModule;
    })
  };
  return loadedModules[moduleName]._promise;
}
helper.definePlugin = definePlugin;
function regDependency(name, fn) {
  if (loadedModules[name]) {
    console.warn("[ministar] Duplicate registry:", name);
  }
  loadedModules[name] = {
    module: null,
    _promise: fn().then(function(exportedModule) {
      loadedModules[name].module = exportedModule;
      return exportedModule;
    })
  };
}
helper.regDependency = regDependency;
function regSharedModule(name, fn) {
  if (!name.startsWith("@capital") && !name.startsWith("@") && !name.startsWith("/")) {
    name = "@capital/".concat(name);
  }
  regDependency(name, fn);
}
helper.regSharedModule = regSharedModule;
var helper_1$1 = helper;
window.requirePlugin = helper_1$1.requirePlugin;
window.definePlugin = helper_1$1.definePlugin;
var loader = {};
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
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
var __generator = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
Object.defineProperty(loader, "__esModule", { value: true });
loader.initMiniStar = loader.loadSinglePlugin = loader.loadPluginList = void 0;
var config_1 = config;
var helper_1 = helper;
function loadPluginList(plugins) {
  var allPromise = plugins.map(function(plugin) {
    (0, config_1.getPluginList)()[plugin.name] = __assign(__assign({}, plugin), { name: "@plugins/".concat(plugin.name) });
    var pluginName = plugin.name;
    var pluginUrl = plugin.url;
    return new Promise(function(resolve, reject) {
      console.debug("[".concat(pluginName, "] Start Loading..."));
      (0, helper_1.requirePlugin)(["".concat(pluginUrl)], function(pluginModule) {
        console.debug("[".concat(pluginName, "] Load Completed!"));
        resolve(pluginModule);
      }, function(err) {
        reject(err);
      });
    }).catch(function(error) {
      (0, config_1.callPluginLoadError)({
        pluginName,
        detail: new Error(error)
      });
      return null;
    });
  });
  return Promise.all(allPromise).then(function(modules) {
    return modules.filter(Boolean);
  });
}
loader.loadPluginList = loadPluginList;
function loadSinglePlugin(plugin) {
  return __awaiter(this, void 0, void 0, function() {
    var pluginModule;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, loadPluginList([plugin])];
        case 1:
          pluginModule = _a.sent()[0];
          return [2, pluginModule];
      }
    });
  });
}
loader.loadSinglePlugin = loadSinglePlugin;
function initMiniStar(options) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          (0, config_1.applyConfig)(options);
          if (!(Array.isArray(options.plugins) && options.plugins.length > 0))
            return [3, 2];
          return [4, loadPluginList(options.plugins)];
        case 1:
          _a.sent();
          _a.label = 2;
        case 2:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
loader.initMiniStar = initMiniStar;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getLoadedModules = exports.regSharedModule = exports.regDependency = exports.loadPluginList = exports.loadSinglePlugin = exports.initMiniStar = void 0;
  var loader_1 = loader;
  Object.defineProperty(exports, "initMiniStar", { enumerable: true, get: function() {
    return loader_1.initMiniStar;
  } });
  Object.defineProperty(exports, "loadSinglePlugin", { enumerable: true, get: function() {
    return loader_1.loadSinglePlugin;
  } });
  Object.defineProperty(exports, "loadPluginList", { enumerable: true, get: function() {
    return loader_1.loadPluginList;
  } });
  var helper_12 = helper;
  Object.defineProperty(exports, "regDependency", { enumerable: true, get: function() {
    return helper_12.regDependency;
  } });
  Object.defineProperty(exports, "regSharedModule", { enumerable: true, get: function() {
    return helper_12.regSharedModule;
  } });
  Object.defineProperty(exports, "getLoadedModules", { enumerable: true, get: function() {
    return helper_12.getLoadedModules;
  } });
})(runtime);
function initPlugin(config2) {
  return runtime.loadPluginList(config2);
}
export {
  initPlugin as default
};
