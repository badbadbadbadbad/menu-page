/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/Background.png */ "./src/Assets/Background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 100%;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", \"sans-serif\";\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 50px;\n  height: 10vh;\n  border-bottom: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#buttons {\n  position: absolute;\n  right: 5vw;\n  height: 5vh;\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  height: 100%;\n  width: 30%;\n  color: white;\n  background-color: black;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.selected {\n  border-bottom: 3px solid white !important;\n}\n\n#home {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#home-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#planets {\n  background-color: rgba(0, 0, 0, 0.4);\n  /* flex-grow: 1; */\n  height: 85vh;\n  padding: 5vh min(5vw, 70px) 7vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 25px;\n  overflow-y: auto;\n}\n\n.planet {\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-shadow: 1px 1px 5px rgb(0, 0, 0);\n  border-radius: 15px;\n  border: solid white 2px;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  text-align: center;\n}\n\n.image-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.planet img {\n  max-width: 100%;\n  max-height: 100%;\n\n  z-index: 1;\n}\n\n.planet img.outline {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.planet:hover img.outline {\n  opacity: 1;\n}\n\n#about {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#about-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#footer {\n  background-color: rgba(0, 0, 0, 1);\n  color: white;\n  height: 5vh;\n  border-top: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,iFAAsE;EACtE,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;EACV,sCAAsC;EACtC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;;EAEhB,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;AACV","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\");\n\nhtml {\n  background: url(./Assets/Background.png) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 100%;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", \"sans-serif\";\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 50px;\n  height: 10vh;\n  border-bottom: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#buttons {\n  position: absolute;\n  right: 5vw;\n  height: 5vh;\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  height: 100%;\n  width: 30%;\n  color: white;\n  background-color: black;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.selected {\n  border-bottom: 3px solid white !important;\n}\n\n#home {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#home-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#planets {\n  background-color: rgba(0, 0, 0, 0.4);\n  /* flex-grow: 1; */\n  height: 85vh;\n  padding: 5vh min(5vw, 70px) 7vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 25px;\n  overflow-y: auto;\n}\n\n.planet {\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-shadow: 1px 1px 5px rgb(0, 0, 0);\n  border-radius: 15px;\n  border: solid white 2px;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  text-align: center;\n}\n\n.image-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.planet img {\n  max-width: 100%;\n  max-height: 100%;\n\n  z-index: 1;\n}\n\n.planet img.outline {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.planet:hover img.outline {\n  opacity: 1;\n}\n\n#about {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#about-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#footer {\n  background-color: rgba(0, 0, 0, 1);\n  color: white;\n  height: 5vh;\n  border-top: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAbout = () => {
  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "about");
  aboutSection.setAttribute("class", "content");

  const aboutText = document.createElement("div");
  aboutText.setAttribute("id", "about-text");

  const first = document.createElement("div");
  first.setAttribute("class", "about-text-fragment");
  first.innerHTML =
    "Outer Wilds Ventures was founded by Feldspar, Gossan, Slate and Hornfels with the goal of exploring the Solar System to improve Hearthian understanding of the Solar System and of the Nomai, an ancient race that once lived here. It accomplishes this by training aspiring astronauts and equipping them with advanced space exploration technology. The recruits are then sent into space with the goal of learning about the Solar System, the mysterious Nomai, and to retrieve any artifacts they believe to be significant. ";

  aboutSection.append(aboutText);
  aboutText.append(first);

  return aboutSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);


/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHome = () => {
  const homeSection = document.createElement("div");
  homeSection.setAttribute("id", "home");
  homeSection.setAttribute("class", "content");

  const homeText = document.createElement("div");
  homeText.setAttribute("id", "home-text");

  const first = document.createElement("div");
  first.setAttribute("class", "home-text-fragment");
  first.innerHTML =
    "Welcome to our humble corner of the universe. Here, amid the vast expanse of space, we have made our home. It's a place where the wonders of the cosmos are our constant companions, and the beauty of the stars shines down upon us every night. We invite you to join us on a journey through our solar system and explore the mysteries that lie beyond our reach.";

  const second = document.createElement("div");
  second.setAttribute("class", "home-text-fragment");
  second.innerHTML =
    "Take a moment to gaze upon the endless void and reflect upon the vastness of space. It can be overwhelming to comprehend the scale of the universe and our place in it. But in this infinitesimal moment, on this tiny planet, we have the power to make a difference. Together, we can seek out the secrets of the cosmos and discover the hidden wonders of our own solar system. Let us embark on this journey together and see where the stars may take us.";

  homeSection.append(homeText);
  homeText.append(first, second);

  return homeSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/planetsData.js":
/*!****************************!*\
  !*** ./src/planetsData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Assets_IconsColor_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/IconsColor/sun.png */ "./src/Assets/IconsColor/sun.png");
/* harmony import */ var _Assets_IconsColor_sunStation_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/IconsColor/sunStation.png */ "./src/Assets/IconsColor/sunStation.png");
/* harmony import */ var _Assets_IconsColor_emberTwin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/IconsColor/emberTwin.png */ "./src/Assets/IconsColor/emberTwin.png");
/* harmony import */ var _Assets_IconsColor_ashTwin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/IconsColor/ashTwin.png */ "./src/Assets/IconsColor/ashTwin.png");
/* harmony import */ var _Assets_IconsColor_timberHearth_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets/IconsColor/timberHearth.png */ "./src/Assets/IconsColor/timberHearth.png");
/* harmony import */ var _Assets_IconsColor_attlerock_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Assets/IconsColor/attlerock.png */ "./src/Assets/IconsColor/attlerock.png");
/* harmony import */ var _Assets_IconsColor_brittleHollow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/IconsColor/brittleHollow.png */ "./src/Assets/IconsColor/brittleHollow.png");
/* harmony import */ var _Assets_IconsColor_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Assets/IconsColor/hollowsLantern.png */ "./src/Assets/IconsColor/hollowsLantern.png");
/* harmony import */ var _Assets_IconsColor_giantsDeep_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Assets/IconsColor/giantsDeep.png */ "./src/Assets/IconsColor/giantsDeep.png");
/* harmony import */ var _Assets_IconsColor_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Assets/IconsColor/orbitalProbeCannon.png */ "./src/Assets/IconsColor/orbitalProbeCannon.png");
/* harmony import */ var _Assets_IconsColor_darkBramble_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Assets/IconsColor/darkBramble.png */ "./src/Assets/IconsColor/darkBramble.png");
/* harmony import */ var _Assets_IconsColor_interloper_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Assets/IconsColor/interloper.png */ "./src/Assets/IconsColor/interloper.png");
/* harmony import */ var _Assets_IconsColor_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Assets/IconsColor/whiteHoleStation.png */ "./src/Assets/IconsColor/whiteHoleStation.png");
/* harmony import */ var _Assets_IconsColor_quantumMoon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Assets/IconsColor/quantumMoon.png */ "./src/Assets/IconsColor/quantumMoon.png");
/* harmony import */ var _Assets_stranger_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Assets/stranger.png */ "./src/Assets/stranger.png");
/* harmony import */ var _Assets_IconsColorOutlines_sun_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/sun.png */ "./src/Assets/IconsColorOutlines/sun.png");
/* harmony import */ var _Assets_IconsColorOutlines_sunStation_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/sunStation.png */ "./src/Assets/IconsColorOutlines/sunStation.png");
/* harmony import */ var _Assets_IconsColorOutlines_emberTwin_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/emberTwin.png */ "./src/Assets/IconsColorOutlines/emberTwin.png");
/* harmony import */ var _Assets_IconsColorOutlines_ashTwin_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/ashTwin.png */ "./src/Assets/IconsColorOutlines/ashTwin.png");
/* harmony import */ var _Assets_IconsColorOutlines_timberHearth_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/timberHearth.png */ "./src/Assets/IconsColorOutlines/timberHearth.png");
/* harmony import */ var _Assets_IconsColorOutlines_attlerock_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/attlerock.png */ "./src/Assets/IconsColorOutlines/attlerock.png");
/* harmony import */ var _Assets_IconsColorOutlines_brittleHollow_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/brittleHollow.png */ "./src/Assets/IconsColorOutlines/brittleHollow.png");
/* harmony import */ var _Assets_IconsColorOutlines_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/hollowsLantern.png */ "./src/Assets/IconsColorOutlines/hollowsLantern.png");
/* harmony import */ var _Assets_IconsColorOutlines_giantsDeep_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/giantsDeep.png */ "./src/Assets/IconsColorOutlines/giantsDeep.png");
/* harmony import */ var _Assets_IconsColorOutlines_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/orbitalProbeCannon.png */ "./src/Assets/IconsColorOutlines/orbitalProbeCannon.png");
/* harmony import */ var _Assets_IconsColorOutlines_darkBramble_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/darkBramble.png */ "./src/Assets/IconsColorOutlines/darkBramble.png");
/* harmony import */ var _Assets_IconsColorOutlines_interloper_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/interloper.png */ "./src/Assets/IconsColorOutlines/interloper.png");
/* harmony import */ var _Assets_IconsColorOutlines_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/whiteHoleStation.png */ "./src/Assets/IconsColorOutlines/whiteHoleStation.png");
/* harmony import */ var _Assets_IconsColorOutlines_quantumMoon_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/quantumMoon.png */ "./src/Assets/IconsColorOutlines/quantumMoon.png");































const planetData = [
  {
    name: "The Sun",
    image: _Assets_IconsColor_sun_png__WEBPACK_IMPORTED_MODULE_0__,
    outline: _Assets_IconsColorOutlines_sun_png__WEBPACK_IMPORTED_MODULE_15__,
    description:
      "The Sun is a main sequence star at the center of our Solar System. It may seem like it should burn us alive due to its proximity, but considering that we are alive, there must be an error in our calculations. Still, be careful of not flying into it by accident due to using your ship's autopilot carelessly!",
  },
  {
    name: "Sun Station",
    image: _Assets_IconsColor_sunStation_png__WEBPACK_IMPORTED_MODULE_1__,
    outline: _Assets_IconsColorOutlines_sunStation_png__WEBPACK_IMPORTED_MODULE_16__,
    description:
      "A satellite orbiting the Sun. Considering the design, it appears to be of Nomai origin. So far, there have been no successful attempts at landing on it (and Feldspar trying repeatedly to crash into it does not count).",
  },
  {
    name: "Ember Twin",
    image: _Assets_IconsColor_emberTwin_png__WEBPACK_IMPORTED_MODULE_2__,
    outline: _Assets_IconsColorOutlines_emberTwin_png__WEBPACK_IMPORTED_MODULE_17__,
    description:
      "The first half of the Hourglass Twins. Mostly desert rock and many deep caverns, though the planet appears to almost be divided into two halves by an equatorial canyon. Over the course of a Twin Cycle, the sands of Ash Twin are transported into this canyon by gravitational pull.",
  },
  {
    name: "Ash Twin",
    image: _Assets_IconsColor_ashTwin_png__WEBPACK_IMPORTED_MODULE_3__,
    outline: _Assets_IconsColorOutlines_ashTwin_png__WEBPACK_IMPORTED_MODULE_18__,
    description:
      "The second half of the Hourglasss Twins. Almost entirely sand, which is transported back and forth between the twins on a cycle of roughly 20 minutes. Hiding beneath the sands are a small core of sparkly rock and large towers of Nomai origin.",
  },
  {
    name: "Timber Hearth",
    image: _Assets_IconsColor_timberHearth_png__WEBPACK_IMPORTED_MODULE_4__,
    outline: _Assets_IconsColorOutlines_timberHearth_png__WEBPACK_IMPORTED_MODULE_19__,
    description:
      "Our home! A rocky planet, covered in grass, accented with trees, geysers, mountains and craters. One of the craters houses our little village, and the geysers are all connected to strong underground water currents hiding beneath the planet's crust.",
  },
  {
    name: "The Attlerock",
    image: _Assets_IconsColor_attlerock_png__WEBPACK_IMPORTED_MODULE_5__,
    outline: _Assets_IconsColorOutlines_attlerock_png__WEBPACK_IMPORTED_MODULE_20__,
    description:
      "The only moon of Timber Hearth. A small and barren rock, covered in craters. While there does not seem to be much of anything here, we have built an outpost which is being overseen by Esker. The only point of interest is a Nomai structure - which we believe is trying to locate.. something.",
  },
  {
    name: "Brittle Hollow",
    image: _Assets_IconsColor_brittleHollow_png__WEBPACK_IMPORTED_MODULE_6__,
    outline: _Assets_IconsColorOutlines_brittleHollow_png__WEBPACK_IMPORTED_MODULE_21__,
    description:
      "On a glance, this planet seems to be a lot of blue rock, all brittle and in disarray. The interesting aspect lies beneath the crust: The planet is almost entirely hollow, and at the core awaits a Black Hole. We do know that there is a hanging Nomai city under the crust, though exploring it has proven to be difficult.",
  },
  {
    name: "Hollow's Lantern",
    image: _Assets_IconsColor_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_7__,
    outline: _Assets_IconsColorOutlines_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_22__,
    description:
      "The only moon of Brittle Hollow. It appears as if this moon is nothing but lava and a few volcanoes. The volcanoes shoot out balls of lava into the orbit of its planet every so often, making exploration of Brittle Hollow even more fear-inducing.",
  },
  {
    name: "Giant's Deep",
    image: _Assets_IconsColor_giantsDeep_png__WEBPACK_IMPORTED_MODULE_8__,
    outline: _Assets_IconsColorOutlines_giantsDeep_png__WEBPACK_IMPORTED_MODULE_23__,
    description:
      "An ocean planet surrounded by a layer of atmospheric fog. There is no solid land besides a few small islands which are being ravaged by constant tornadoes and thunderstorms. While the ocean itself seems to be safe, it is also impossible to dive deeper than a few metres due to strong currents pushing one out. Still, this planet seems to be among the safer ones in our Solar System.",
  },
  {
    name: "Nomai Cannon",
    image: _Assets_IconsColor_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_9__,
    outline: _Assets_IconsColorOutlines_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_24__,
    description:
      "A large structure of Nomai origin in orbit around Giant's Deep. We are not entirely sure what this structure actually is, but as it seems to resemble a large cannon, we have decided to call it that. We hope that the Nomai translation tool we developed recently will help us understand more about this structure.",
  },
  {
    name: "Dark Bramble",
    image: _Assets_IconsColor_darkBramble_png__WEBPACK_IMPORTED_MODULE_10__,
    outline: _Assets_IconsColorOutlines_darkBramble_png__WEBPACK_IMPORTED_MODULE_25__,
    description:
      "This planet used to be a small frozen water planet, but has since been ripped apart by some kind of enormous vine growth for as long as we have known. The center of this vine growth has multiple openings, yet we cannot see anything inside besides dense fog and lights. We have not yet dared investigating the inside of the core.",
  },
  {
    name: "The Interloper",
    image: _Assets_IconsColor_interloper_png__WEBPACK_IMPORTED_MODULE_11__,
    outline: _Assets_IconsColorOutlines_interloper_png__WEBPACK_IMPORTED_MODULE_26__,
    description:
      "A small frozen comet orbiting the Sun, leaving behind a magnificent light blue tail. There is not much we know besides the comet containing a layer of rock and its orbit being a stable ellipsis. Due to the speed and size, we have not yet been able to land on the comet.",
  },
  {
    name: "White Hole Station",
    image: _Assets_IconsColor_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_12__,
    outline: _Assets_IconsColorOutlines_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_27__,
    description:
      "At the edge of our Solar System is a White Hole which is just as awe-inspiring as Brittle Hollow's Black Hole. Close to it is a Nomai building that appears to be some kind of outpost or station, enclosed in a circular frame. The function of this building is currently unclear to us.",
  },
  {
    name: "Quantum Moon",
    image: _Assets_IconsColor_quantumMoon_png__WEBPACK_IMPORTED_MODULE_13__,
    outline: _Assets_IconsColorOutlines_quantumMoon_png__WEBPACK_IMPORTED_MODULE_28__,
    description:
      "A small and most curious moon, being in orbit around all five planets of our Solar System at the same time. It appears to behave similar to the purple shard in the Museum - look at it as long as you want, but the moment you look away, it disappears and orbits another planet. The Quantum Moon is covered in thick fog, so we do not know what it actually looks like.",
  },
  {
    name: "???",
    image: _Assets_stranger_png__WEBPACK_IMPORTED_MODULE_14__,
    outline: "none",
    description:
      "The Deep Space Satellite we managed to launch recently has already produced magnificent images of our Solar System. Curiously, this image - and this image alone - shows an anomaly that we do not understand. Each astral body is accounted for, yet there is an impossible shadow on the sun. Gabbro was tasked with checking the Deep Space Satellite for any problems, yet they were not able to find anything.",
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (planetData);


/***/ }),

/***/ "./src/planetsTab.js":
/*!***************************!*\
  !*** ./src/planetsTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _planetsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planetsData */ "./src/planetsData.js");


class Planet {
  constructor(image, outline, name, description) {
    this.image = image;
    this.name = name;
    this.outline = outline;
    this.description = description;
  }

  createHTMLElement() {
    const planetElement = document.createElement("div");
    planetElement.classList.add("planet");

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "image-container");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", this.image);
    imageElement.setAttribute("alt", `Image of ${this.name}`);
    imageElement.setAttribute("class", "image");
    imageContainer.append(imageElement);

    const nameElement = document.createElement("h3");
    nameElement.textContent = this.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = this.description;

    if (!(this.outline === "none")) {
      const outlineElement = document.createElement("img");
      outlineElement.setAttribute("src", this.outline);
      outlineElement.setAttribute("alt", `Outline of ${this.name}`);
      outlineElement.setAttribute("class", "outline");
      imageContainer.append(outlineElement);
    }

    planetElement.append(imageContainer, nameElement, descriptionElement);

    return planetElement;
  }
}

const createPlanets = () => {
  const planetsSection = document.createElement("div");
  planetsSection.setAttribute("id", "planets");
  planetsSection.setAttribute("class", "content");

  const planetElements = _planetsData__WEBPACK_IMPORTED_MODULE_0__["default"].map((data) => {
    const planet = new Planet(data.image, data.outline, data.name, data.description);
    return planet.createHTMLElement();
  });

  planetsSection.append(...planetElements);
  return planetsSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlanets);


/***/ }),

/***/ "./src/Assets/Background.png":
/*!***********************************!*\
  !*** ./src/Assets/Background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fded91c18ddff8954d04.png";

/***/ }),

/***/ "./src/Assets/IconsColor/ashTwin.png":
/*!*******************************************!*\
  !*** ./src/Assets/IconsColor/ashTwin.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c6e85e1d82747baf1a1.png";

/***/ }),

/***/ "./src/Assets/IconsColor/attlerock.png":
/*!*********************************************!*\
  !*** ./src/Assets/IconsColor/attlerock.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26ab48f8019185fdf221.png";

/***/ }),

/***/ "./src/Assets/IconsColor/brittleHollow.png":
/*!*************************************************!*\
  !*** ./src/Assets/IconsColor/brittleHollow.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6e8080009f38625a16d.png";

/***/ }),

/***/ "./src/Assets/IconsColor/darkBramble.png":
/*!***********************************************!*\
  !*** ./src/Assets/IconsColor/darkBramble.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "694d5c690edc9558fa9c.png";

/***/ }),

/***/ "./src/Assets/IconsColor/emberTwin.png":
/*!*********************************************!*\
  !*** ./src/Assets/IconsColor/emberTwin.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5dbdaae46ee48ebf2b79.png";

/***/ }),

/***/ "./src/Assets/IconsColor/giantsDeep.png":
/*!**********************************************!*\
  !*** ./src/Assets/IconsColor/giantsDeep.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af91775078dac6346df8.png";

/***/ }),

/***/ "./src/Assets/IconsColor/hollowsLantern.png":
/*!**************************************************!*\
  !*** ./src/Assets/IconsColor/hollowsLantern.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c97f4e1cf30f7dca2e0f.png";

/***/ }),

/***/ "./src/Assets/IconsColor/interloper.png":
/*!**********************************************!*\
  !*** ./src/Assets/IconsColor/interloper.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5b3ca4fd76a71a08a2f.png";

/***/ }),

/***/ "./src/Assets/IconsColor/orbitalProbeCannon.png":
/*!******************************************************!*\
  !*** ./src/Assets/IconsColor/orbitalProbeCannon.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9095b247bf9b51c4c160.png";

/***/ }),

/***/ "./src/Assets/IconsColor/quantumMoon.png":
/*!***********************************************!*\
  !*** ./src/Assets/IconsColor/quantumMoon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4217925de6ec69f9206a.png";

/***/ }),

/***/ "./src/Assets/IconsColor/sun.png":
/*!***************************************!*\
  !*** ./src/Assets/IconsColor/sun.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b97a684a3c199a6bff5c.png";

/***/ }),

/***/ "./src/Assets/IconsColor/sunStation.png":
/*!**********************************************!*\
  !*** ./src/Assets/IconsColor/sunStation.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9255fd4b0a19821c69b.png";

/***/ }),

/***/ "./src/Assets/IconsColor/timberHearth.png":
/*!************************************************!*\
  !*** ./src/Assets/IconsColor/timberHearth.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e9ddec57e82eadf6e77.png";

/***/ }),

/***/ "./src/Assets/IconsColor/whiteHoleStation.png":
/*!****************************************************!*\
  !*** ./src/Assets/IconsColor/whiteHoleStation.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d44622950f98cab1e8aa.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/ashTwin.png":
/*!***************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/ashTwin.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9be9d6c44199b3baab7.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/attlerock.png":
/*!*****************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/attlerock.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0692ab64c8da8f6386ca.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/brittleHollow.png":
/*!*********************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/brittleHollow.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a6660e57eb41d59989d.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/darkBramble.png":
/*!*******************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/darkBramble.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09f24acff99e7efd7ece.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/emberTwin.png":
/*!*****************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/emberTwin.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f8b84a8b36ab2e6706a.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/giantsDeep.png":
/*!******************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/giantsDeep.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e353de2deafbd409d55.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/hollowsLantern.png":
/*!**********************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/hollowsLantern.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8df852d9370e69724e55.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/interloper.png":
/*!******************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/interloper.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "244084b3401733a0c4ef.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/orbitalProbeCannon.png":
/*!**************************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/orbitalProbeCannon.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "286540726b421909e6bc.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/quantumMoon.png":
/*!*******************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/quantumMoon.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63308a4df0088e951d0f.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/sun.png":
/*!***********************************************!*\
  !*** ./src/Assets/IconsColorOutlines/sun.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb5d45b5a5226e4582e3.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/sunStation.png":
/*!******************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/sunStation.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b95e0c1247fe1e15b132.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/timberHearth.png":
/*!********************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/timberHearth.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5852d4474fe13335f4f2.png";

/***/ }),

/***/ "./src/Assets/IconsColorOutlines/whiteHoleStation.png":
/*!************************************************************!*\
  !*** ./src/Assets/IconsColorOutlines/whiteHoleStation.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eddac2c283c811352e17.png";

/***/ }),

/***/ "./src/Assets/stranger.png":
/*!*********************************!*\
  !*** ./src/Assets/stranger.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9577e012ec82f5a5324a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ "./src/homeTab.js");
/* harmony import */ var _planetsTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planetsTab */ "./src/planetsTab.js");
/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutTab */ "./src/aboutTab.js");





function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // Welcome text
  const headerText = document.createElement("div");
  headerText.setAttribute("id", "header-text");
  headerText.innerHTML = "Hearthspace";
  header.appendChild(headerText);

  // Navigation buttons
  const buttonsElement = document.createElement("div");
  buttonsElement.setAttribute("id", "buttons");
  ["Home", "Planets", "About"].forEach((element, index) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", "button");
    btn.innerHTML = element;

    // First button should be the default select
    if (index === 0) {
      btn.classList.add("selected");
    }

    buttonsElement.appendChild(btn);

    let currentTab;

    btn.addEventListener("click", () => {
      // Remove button underlines
      const buttonsGroup = document.querySelectorAll(".button");
      buttonsGroup.forEach((button) => {
        button.classList.remove("selected");
      });

      // Add underline to clicked button
      btn.classList.add("selected");

      // Unload current tab
      const currentContent = document.getElementById(document.body.querySelector(".content").id);
      document.body.removeChild(currentContent);

      // Load correct tab
      if (element === "Home") {
        currentTab = (0,_homeTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
      } else if (element === "Planets") {
        currentTab = (0,_planetsTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
      } else if (element === "About") {
        currentTab = (0,_aboutTab__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }

      document.body.insertBefore(currentTab, document.getElementById("footer"));
    });
  });

  header.appendChild(buttonsElement);

  return header;
}

function createFooter() {
  const footerSection = document.createElement("div");
  footerSection.setAttribute("id", "footer");

  const footerText = document.createElement("div");
  footerText.setAttribute("id", "header-text");
  footerText.innerHTML = "Art and Game content © 2019 Mobius Digital";
  footerSection.appendChild(footerText);

  return footerSection;
}

document.body.appendChild(createHeader());
document.body.appendChild((0,_homeTab__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild(createFooter());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0IsUUFBUTtBQUNSLHFCQUFxQix1REFBYTtBQUNsQyxRQUFRO0FBQ1IscUJBQXFCLHFEQUFXO0FBQ2hDOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixvREFBVTtBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9hYm91dFRhYi5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvaG9tZVRhYi5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvcGxhbmV0c0RhdGEuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL3BsYW5ldHNUYWIuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQXNzZXRzL0JhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG4jaG9tZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiKDAsIDAsIDApO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNwbGFuZXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDV2aCBtaW4oNXZ3LCA3MHB4KSA3dmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDI1cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucGxhbmV0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGFuZXQgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuXFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGxhbmV0IGltZy5vdXRsaW5lIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBsYW5ldDpob3ZlciBpbWcub3V0bGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jYWJvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbiNhYm91dC10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiKDAsIDAsIDApO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNXZoO1xcbiAgYm9yZGVyLXRvcDogd2hpdGUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlGQUFzRTtFQUN0RSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7O0VBRWhCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQ6IHVybCguL0Fzc2V0cy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYnV0dG9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG4jaG9tZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiKDAsIDAsIDApO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNwbGFuZXRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC8qIGZsZXgtZ3JvdzogMTsgKi9cXG4gIGhlaWdodDogODV2aDtcXG4gIHBhZGRpbmc6IDV2aCBtaW4oNXZ3LCA3MHB4KSA3dmg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDI1cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucGxhbmV0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggcmdiKDAsIDAsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgd2hpdGUgMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGFuZXQgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuXFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucGxhbmV0IGltZy5vdXRsaW5lIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBsYW5ldDpob3ZlciBpbWcub3V0bGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4jYWJvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbiNhYm91dC10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiKDAsIDAsIDApO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbiNmb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNXZoO1xcbiAgYm9yZGVyLXRvcDogd2hpdGUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXRcIik7XG4gIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXRUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWJvdXQtdGV4dFwiKTtcblxuICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWJvdXQtdGV4dC1mcmFnbWVudFwiKTtcbiAgZmlyc3QuaW5uZXJIVE1MID1cbiAgICBcIk91dGVyIFdpbGRzIFZlbnR1cmVzIHdhcyBmb3VuZGVkIGJ5IEZlbGRzcGFyLCBHb3NzYW4sIFNsYXRlIGFuZCBIb3JuZmVscyB3aXRoIHRoZSBnb2FsIG9mIGV4cGxvcmluZyB0aGUgU29sYXIgU3lzdGVtIHRvIGltcHJvdmUgSGVhcnRoaWFuIHVuZGVyc3RhbmRpbmcgb2YgdGhlIFNvbGFyIFN5c3RlbSBhbmQgb2YgdGhlIE5vbWFpLCBhbiBhbmNpZW50IHJhY2UgdGhhdCBvbmNlIGxpdmVkIGhlcmUuIEl0IGFjY29tcGxpc2hlcyB0aGlzIGJ5IHRyYWluaW5nIGFzcGlyaW5nIGFzdHJvbmF1dHMgYW5kIGVxdWlwcGluZyB0aGVtIHdpdGggYWR2YW5jZWQgc3BhY2UgZXhwbG9yYXRpb24gdGVjaG5vbG9neS4gVGhlIHJlY3J1aXRzIGFyZSB0aGVuIHNlbnQgaW50byBzcGFjZSB3aXRoIHRoZSBnb2FsIG9mIGxlYXJuaW5nIGFib3V0IHRoZSBTb2xhciBTeXN0ZW0sIHRoZSBteXN0ZXJpb3VzIE5vbWFpLCBhbmQgdG8gcmV0cmlldmUgYW55IGFydGlmYWN0cyB0aGV5IGJlbGlldmUgdG8gYmUgc2lnbmlmaWNhbnQuIFwiO1xuXG4gIGFib3V0U2VjdGlvbi5hcHBlbmQoYWJvdXRUZXh0KTtcbiAgYWJvdXRUZXh0LmFwcGVuZChmaXJzdCk7XG5cbiAgcmV0dXJuIGFib3V0U2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0O1xuIiwiY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGhvbWVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcblxuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10ZXh0XCIpO1xuXG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLXRleHQtZnJhZ21lbnRcIik7XG4gIGZpcnN0LmlubmVySFRNTCA9XG4gICAgXCJXZWxjb21lIHRvIG91ciBodW1ibGUgY29ybmVyIG9mIHRoZSB1bml2ZXJzZS4gSGVyZSwgYW1pZCB0aGUgdmFzdCBleHBhbnNlIG9mIHNwYWNlLCB3ZSBoYXZlIG1hZGUgb3VyIGhvbWUuIEl0J3MgYSBwbGFjZSB3aGVyZSB0aGUgd29uZGVycyBvZiB0aGUgY29zbW9zIGFyZSBvdXIgY29uc3RhbnQgY29tcGFuaW9ucywgYW5kIHRoZSBiZWF1dHkgb2YgdGhlIHN0YXJzIHNoaW5lcyBkb3duIHVwb24gdXMgZXZlcnkgbmlnaHQuIFdlIGludml0ZSB5b3UgdG8gam9pbiB1cyBvbiBhIGpvdXJuZXkgdGhyb3VnaCBvdXIgc29sYXIgc3lzdGVtIGFuZCBleHBsb3JlIHRoZSBteXN0ZXJpZXMgdGhhdCBsaWUgYmV5b25kIG91ciByZWFjaC5cIjtcblxuICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLXRleHQtZnJhZ21lbnRcIik7XG4gIHNlY29uZC5pbm5lckhUTUwgPVxuICAgIFwiVGFrZSBhIG1vbWVudCB0byBnYXplIHVwb24gdGhlIGVuZGxlc3Mgdm9pZCBhbmQgcmVmbGVjdCB1cG9uIHRoZSB2YXN0bmVzcyBvZiBzcGFjZS4gSXQgY2FuIGJlIG92ZXJ3aGVsbWluZyB0byBjb21wcmVoZW5kIHRoZSBzY2FsZSBvZiB0aGUgdW5pdmVyc2UgYW5kIG91ciBwbGFjZSBpbiBpdC4gQnV0IGluIHRoaXMgaW5maW5pdGVzaW1hbCBtb21lbnQsIG9uIHRoaXMgdGlueSBwbGFuZXQsIHdlIGhhdmUgdGhlIHBvd2VyIHRvIG1ha2UgYSBkaWZmZXJlbmNlLiBUb2dldGhlciwgd2UgY2FuIHNlZWsgb3V0IHRoZSBzZWNyZXRzIG9mIHRoZSBjb3Ntb3MgYW5kIGRpc2NvdmVyIHRoZSBoaWRkZW4gd29uZGVycyBvZiBvdXIgb3duIHNvbGFyIHN5c3RlbS4gTGV0IHVzIGVtYmFyayBvbiB0aGlzIGpvdXJuZXkgdG9nZXRoZXIgYW5kIHNlZSB3aGVyZSB0aGUgc3RhcnMgbWF5IHRha2UgdXMuXCI7XG5cbiAgaG9tZVNlY3Rpb24uYXBwZW5kKGhvbWVUZXh0KTtcbiAgaG9tZVRleHQuYXBwZW5kKGZpcnN0LCBzZWNvbmQpO1xuXG4gIHJldHVybiBob21lU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgc3VuSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3Ivc3VuLnBuZ1wiO1xuaW1wb3J0IHN1blN0YXRpb25JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9zdW5TdGF0aW9uLnBuZ1wiO1xuaW1wb3J0IGVtYmVyVHdpbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2VtYmVyVHdpbi5wbmdcIjtcbmltcG9ydCBhc2hUd2luSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvYXNoVHdpbi5wbmdcIjtcbmltcG9ydCB0aW1iZXJIZWFydGhJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci90aW1iZXJIZWFydGgucG5nXCI7XG5pbXBvcnQgYXR0bGVyb2NrSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvYXR0bGVyb2NrLnBuZ1wiO1xuaW1wb3J0IGJyaXR0bGVIb2xsb3dJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9icml0dGxlSG9sbG93LnBuZ1wiO1xuaW1wb3J0IGhvbGxvd3NMYW50ZXJuSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvaG9sbG93c0xhbnRlcm4ucG5nXCI7XG5pbXBvcnQgZ2lhbnRzRGVlcEltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2dpYW50c0RlZXAucG5nXCI7XG5pbXBvcnQgb3JiaXRhbFByb2JlQ2Fubm9uSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3Ivb3JiaXRhbFByb2JlQ2Fubm9uLnBuZ1wiO1xuaW1wb3J0IGRhcmtCcmFtYmxlSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvZGFya0JyYW1ibGUucG5nXCI7XG5pbXBvcnQgaW50ZXJsb3BlckltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2ludGVybG9wZXIucG5nXCI7XG5pbXBvcnQgd2hpdGVIb2xlU3RhdGlvbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL3doaXRlSG9sZVN0YXRpb24ucG5nXCI7XG5pbXBvcnQgcXVhbnR1bU1vb25JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9xdWFudHVtTW9vbi5wbmdcIjtcbmltcG9ydCBzdHJhbmdlckltYWdlIGZyb20gXCIuL0Fzc2V0cy9zdHJhbmdlci5wbmdcIjtcblxuaW1wb3J0IHN1bk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9zdW4ucG5nXCI7XG5pbXBvcnQgc3VuU3RhdGlvbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9zdW5TdGF0aW9uLnBuZ1wiO1xuaW1wb3J0IGVtYmVyVHdpbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9lbWJlclR3aW4ucG5nXCI7XG5pbXBvcnQgYXNoVHdpbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9hc2hUd2luLnBuZ1wiO1xuaW1wb3J0IHRpbWJlckhlYXJ0aE91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy90aW1iZXJIZWFydGgucG5nXCI7XG5pbXBvcnQgYXR0bGVyb2NrT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2F0dGxlcm9jay5wbmdcIjtcbmltcG9ydCBicml0dGxlSG9sbG93T3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2JyaXR0bGVIb2xsb3cucG5nXCI7XG5pbXBvcnQgaG9sbG93c0xhbnRlcm5PdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvaG9sbG93c0xhbnRlcm4ucG5nXCI7XG5pbXBvcnQgZ2lhbnRzRGVlcE91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9naWFudHNEZWVwLnBuZ1wiO1xuaW1wb3J0IG9yYml0YWxQcm9iZUNhbm5vbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9vcmJpdGFsUHJvYmVDYW5ub24ucG5nXCI7XG5pbXBvcnQgZGFya0JyYW1ibGVPdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvZGFya0JyYW1ibGUucG5nXCI7XG5pbXBvcnQgaW50ZXJsb3Blck91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9pbnRlcmxvcGVyLnBuZ1wiO1xuaW1wb3J0IHdoaXRlSG9sZVN0YXRpb25PdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvd2hpdGVIb2xlU3RhdGlvbi5wbmdcIjtcbmltcG9ydCBxdWFudHVtTW9vbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9xdWFudHVtTW9vbi5wbmdcIjtcblxuY29uc3QgcGxhbmV0RGF0YSA9IFtcbiAge1xuICAgIG5hbWU6IFwiVGhlIFN1blwiLFxuICAgIGltYWdlOiBzdW5JbWFnZSxcbiAgICBvdXRsaW5lOiBzdW5PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgU3VuIGlzIGEgbWFpbiBzZXF1ZW5jZSBzdGFyIGF0IHRoZSBjZW50ZXIgb2Ygb3VyIFNvbGFyIFN5c3RlbS4gSXQgbWF5IHNlZW0gbGlrZSBpdCBzaG91bGQgYnVybiB1cyBhbGl2ZSBkdWUgdG8gaXRzIHByb3hpbWl0eSwgYnV0IGNvbnNpZGVyaW5nIHRoYXQgd2UgYXJlIGFsaXZlLCB0aGVyZSBtdXN0IGJlIGFuIGVycm9yIGluIG91ciBjYWxjdWxhdGlvbnMuIFN0aWxsLCBiZSBjYXJlZnVsIG9mIG5vdCBmbHlpbmcgaW50byBpdCBieSBhY2NpZGVudCBkdWUgdG8gdXNpbmcgeW91ciBzaGlwJ3MgYXV0b3BpbG90IGNhcmVsZXNzbHkhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN1biBTdGF0aW9uXCIsXG4gICAgaW1hZ2U6IHN1blN0YXRpb25JbWFnZSxcbiAgICBvdXRsaW5lOiBzdW5TdGF0aW9uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzYXRlbGxpdGUgb3JiaXRpbmcgdGhlIFN1bi4gQ29uc2lkZXJpbmcgdGhlIGRlc2lnbiwgaXQgYXBwZWFycyB0byBiZSBvZiBOb21haSBvcmlnaW4uIFNvIGZhciwgdGhlcmUgaGF2ZSBiZWVuIG5vIHN1Y2Nlc3NmdWwgYXR0ZW1wdHMgYXQgbGFuZGluZyBvbiBpdCAoYW5kIEZlbGRzcGFyIHRyeWluZyByZXBlYXRlZGx5IHRvIGNyYXNoIGludG8gaXQgZG9lcyBub3QgY291bnQpLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFbWJlciBUd2luXCIsXG4gICAgaW1hZ2U6IGVtYmVyVHdpbkltYWdlLFxuICAgIG91dGxpbmU6IGVtYmVyVHdpbk91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBmaXJzdCBoYWxmIG9mIHRoZSBIb3VyZ2xhc3MgVHdpbnMuIE1vc3RseSBkZXNlcnQgcm9jayBhbmQgbWFueSBkZWVwIGNhdmVybnMsIHRob3VnaCB0aGUgcGxhbmV0IGFwcGVhcnMgdG8gYWxtb3N0IGJlIGRpdmlkZWQgaW50byB0d28gaGFsdmVzIGJ5IGFuIGVxdWF0b3JpYWwgY2FueW9uLiBPdmVyIHRoZSBjb3Vyc2Ugb2YgYSBUd2luIEN5Y2xlLCB0aGUgc2FuZHMgb2YgQXNoIFR3aW4gYXJlIHRyYW5zcG9ydGVkIGludG8gdGhpcyBjYW55b24gYnkgZ3Jhdml0YXRpb25hbCBwdWxsLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBc2ggVHdpblwiLFxuICAgIGltYWdlOiBhc2hUd2luSW1hZ2UsXG4gICAgb3V0bGluZTogYXNoVHdpbk91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBzZWNvbmQgaGFsZiBvZiB0aGUgSG91cmdsYXNzcyBUd2lucy4gQWxtb3N0IGVudGlyZWx5IHNhbmQsIHdoaWNoIGlzIHRyYW5zcG9ydGVkIGJhY2sgYW5kIGZvcnRoIGJldHdlZW4gdGhlIHR3aW5zIG9uIGEgY3ljbGUgb2Ygcm91Z2hseSAyMCBtaW51dGVzLiBIaWRpbmcgYmVuZWF0aCB0aGUgc2FuZHMgYXJlIGEgc21hbGwgY29yZSBvZiBzcGFya2x5IHJvY2sgYW5kIGxhcmdlIHRvd2VycyBvZiBOb21haSBvcmlnaW4uXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRpbWJlciBIZWFydGhcIixcbiAgICBpbWFnZTogdGltYmVySGVhcnRoSW1hZ2UsXG4gICAgb3V0bGluZTogdGltYmVySGVhcnRoT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiT3VyIGhvbWUhIEEgcm9ja3kgcGxhbmV0LCBjb3ZlcmVkIGluIGdyYXNzLCBhY2NlbnRlZCB3aXRoIHRyZWVzLCBnZXlzZXJzLCBtb3VudGFpbnMgYW5kIGNyYXRlcnMuIE9uZSBvZiB0aGUgY3JhdGVycyBob3VzZXMgb3VyIGxpdHRsZSB2aWxsYWdlLCBhbmQgdGhlIGdleXNlcnMgYXJlIGFsbCBjb25uZWN0ZWQgdG8gc3Ryb25nIHVuZGVyZ3JvdW5kIHdhdGVyIGN1cnJlbnRzIGhpZGluZyBiZW5lYXRoIHRoZSBwbGFuZXQncyBjcnVzdC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGhlIEF0dGxlcm9ja1wiLFxuICAgIGltYWdlOiBhdHRsZXJvY2tJbWFnZSxcbiAgICBvdXRsaW5lOiBhdHRsZXJvY2tPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgb25seSBtb29uIG9mIFRpbWJlciBIZWFydGguIEEgc21hbGwgYW5kIGJhcnJlbiByb2NrLCBjb3ZlcmVkIGluIGNyYXRlcnMuIFdoaWxlIHRoZXJlIGRvZXMgbm90IHNlZW0gdG8gYmUgbXVjaCBvZiBhbnl0aGluZyBoZXJlLCB3ZSBoYXZlIGJ1aWx0IGFuIG91dHBvc3Qgd2hpY2ggaXMgYmVpbmcgb3ZlcnNlZW4gYnkgRXNrZXIuIFRoZSBvbmx5IHBvaW50IG9mIGludGVyZXN0IGlzIGEgTm9tYWkgc3RydWN0dXJlIC0gd2hpY2ggd2UgYmVsaWV2ZSBpcyB0cnlpbmcgdG8gbG9jYXRlLi4gc29tZXRoaW5nLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCcml0dGxlIEhvbGxvd1wiLFxuICAgIGltYWdlOiBicml0dGxlSG9sbG93SW1hZ2UsXG4gICAgb3V0bGluZTogYnJpdHRsZUhvbGxvd091dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk9uIGEgZ2xhbmNlLCB0aGlzIHBsYW5ldCBzZWVtcyB0byBiZSBhIGxvdCBvZiBibHVlIHJvY2ssIGFsbCBicml0dGxlIGFuZCBpbiBkaXNhcnJheS4gVGhlIGludGVyZXN0aW5nIGFzcGVjdCBsaWVzIGJlbmVhdGggdGhlIGNydXN0OiBUaGUgcGxhbmV0IGlzIGFsbW9zdCBlbnRpcmVseSBob2xsb3csIGFuZCBhdCB0aGUgY29yZSBhd2FpdHMgYSBCbGFjayBIb2xlLiBXZSBkbyBrbm93IHRoYXQgdGhlcmUgaXMgYSBoYW5naW5nIE5vbWFpIGNpdHkgdW5kZXIgdGhlIGNydXN0LCB0aG91Z2ggZXhwbG9yaW5nIGl0IGhhcyBwcm92ZW4gdG8gYmUgZGlmZmljdWx0LlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIb2xsb3cncyBMYW50ZXJuXCIsXG4gICAgaW1hZ2U6IGhvbGxvd3NMYW50ZXJuSW1hZ2UsXG4gICAgb3V0bGluZTogaG9sbG93c0xhbnRlcm5PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgb25seSBtb29uIG9mIEJyaXR0bGUgSG9sbG93LiBJdCBhcHBlYXJzIGFzIGlmIHRoaXMgbW9vbiBpcyBub3RoaW5nIGJ1dCBsYXZhIGFuZCBhIGZldyB2b2xjYW5vZXMuIFRoZSB2b2xjYW5vZXMgc2hvb3Qgb3V0IGJhbGxzIG9mIGxhdmEgaW50byB0aGUgb3JiaXQgb2YgaXRzIHBsYW5ldCBldmVyeSBzbyBvZnRlbiwgbWFraW5nIGV4cGxvcmF0aW9uIG9mIEJyaXR0bGUgSG9sbG93IGV2ZW4gbW9yZSBmZWFyLWluZHVjaW5nLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHaWFudCdzIERlZXBcIixcbiAgICBpbWFnZTogZ2lhbnRzRGVlcEltYWdlLFxuICAgIG91dGxpbmU6IGdpYW50c0RlZXBPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBbiBvY2VhbiBwbGFuZXQgc3Vycm91bmRlZCBieSBhIGxheWVyIG9mIGF0bW9zcGhlcmljIGZvZy4gVGhlcmUgaXMgbm8gc29saWQgbGFuZCBiZXNpZGVzIGEgZmV3IHNtYWxsIGlzbGFuZHMgd2hpY2ggYXJlIGJlaW5nIHJhdmFnZWQgYnkgY29uc3RhbnQgdG9ybmFkb2VzIGFuZCB0aHVuZGVyc3Rvcm1zLiBXaGlsZSB0aGUgb2NlYW4gaXRzZWxmIHNlZW1zIHRvIGJlIHNhZmUsIGl0IGlzIGFsc28gaW1wb3NzaWJsZSB0byBkaXZlIGRlZXBlciB0aGFuIGEgZmV3IG1ldHJlcyBkdWUgdG8gc3Ryb25nIGN1cnJlbnRzIHB1c2hpbmcgb25lIG91dC4gU3RpbGwsIHRoaXMgcGxhbmV0IHNlZW1zIHRvIGJlIGFtb25nIHRoZSBzYWZlciBvbmVzIGluIG91ciBTb2xhciBTeXN0ZW0uXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5vbWFpIENhbm5vblwiLFxuICAgIGltYWdlOiBvcmJpdGFsUHJvYmVDYW5ub25JbWFnZSxcbiAgICBvdXRsaW5lOiBvcmJpdGFsUHJvYmVDYW5ub25PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGxhcmdlIHN0cnVjdHVyZSBvZiBOb21haSBvcmlnaW4gaW4gb3JiaXQgYXJvdW5kIEdpYW50J3MgRGVlcC4gV2UgYXJlIG5vdCBlbnRpcmVseSBzdXJlIHdoYXQgdGhpcyBzdHJ1Y3R1cmUgYWN0dWFsbHkgaXMsIGJ1dCBhcyBpdCBzZWVtcyB0byByZXNlbWJsZSBhIGxhcmdlIGNhbm5vbiwgd2UgaGF2ZSBkZWNpZGVkIHRvIGNhbGwgaXQgdGhhdC4gV2UgaG9wZSB0aGF0IHRoZSBOb21haSB0cmFuc2xhdGlvbiB0b29sIHdlIGRldmVsb3BlZCByZWNlbnRseSB3aWxsIGhlbHAgdXMgdW5kZXJzdGFuZCBtb3JlIGFib3V0IHRoaXMgc3RydWN0dXJlLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYXJrIEJyYW1ibGVcIixcbiAgICBpbWFnZTogZGFya0JyYW1ibGVJbWFnZSxcbiAgICBvdXRsaW5lOiBkYXJrQnJhbWJsZU91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgcGxhbmV0IHVzZWQgdG8gYmUgYSBzbWFsbCBmcm96ZW4gd2F0ZXIgcGxhbmV0LCBidXQgaGFzIHNpbmNlIGJlZW4gcmlwcGVkIGFwYXJ0IGJ5IHNvbWUga2luZCBvZiBlbm9ybW91cyB2aW5lIGdyb3d0aCBmb3IgYXMgbG9uZyBhcyB3ZSBoYXZlIGtub3duLiBUaGUgY2VudGVyIG9mIHRoaXMgdmluZSBncm93dGggaGFzIG11bHRpcGxlIG9wZW5pbmdzLCB5ZXQgd2UgY2Fubm90IHNlZSBhbnl0aGluZyBpbnNpZGUgYmVzaWRlcyBkZW5zZSBmb2cgYW5kIGxpZ2h0cy4gV2UgaGF2ZSBub3QgeWV0IGRhcmVkIGludmVzdGlnYXRpbmcgdGhlIGluc2lkZSBvZiB0aGUgY29yZS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGhlIEludGVybG9wZXJcIixcbiAgICBpbWFnZTogaW50ZXJsb3BlckltYWdlLFxuICAgIG91dGxpbmU6IGludGVybG9wZXJPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNtYWxsIGZyb3plbiBjb21ldCBvcmJpdGluZyB0aGUgU3VuLCBsZWF2aW5nIGJlaGluZCBhIG1hZ25pZmljZW50IGxpZ2h0IGJsdWUgdGFpbC4gVGhlcmUgaXMgbm90IG11Y2ggd2Uga25vdyBiZXNpZGVzIHRoZSBjb21ldCBjb250YWluaW5nIGEgbGF5ZXIgb2Ygcm9jayBhbmQgaXRzIG9yYml0IGJlaW5nIGEgc3RhYmxlIGVsbGlwc2lzLiBEdWUgdG8gdGhlIHNwZWVkIGFuZCBzaXplLCB3ZSBoYXZlIG5vdCB5ZXQgYmVlbiBhYmxlIHRvIGxhbmQgb24gdGhlIGNvbWV0LlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXaGl0ZSBIb2xlIFN0YXRpb25cIixcbiAgICBpbWFnZTogd2hpdGVIb2xlU3RhdGlvbkltYWdlLFxuICAgIG91dGxpbmU6IHdoaXRlSG9sZVN0YXRpb25PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBdCB0aGUgZWRnZSBvZiBvdXIgU29sYXIgU3lzdGVtIGlzIGEgV2hpdGUgSG9sZSB3aGljaCBpcyBqdXN0IGFzIGF3ZS1pbnNwaXJpbmcgYXMgQnJpdHRsZSBIb2xsb3cncyBCbGFjayBIb2xlLiBDbG9zZSB0byBpdCBpcyBhIE5vbWFpIGJ1aWxkaW5nIHRoYXQgYXBwZWFycyB0byBiZSBzb21lIGtpbmQgb2Ygb3V0cG9zdCBvciBzdGF0aW9uLCBlbmNsb3NlZCBpbiBhIGNpcmN1bGFyIGZyYW1lLiBUaGUgZnVuY3Rpb24gb2YgdGhpcyBidWlsZGluZyBpcyBjdXJyZW50bHkgdW5jbGVhciB0byB1cy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUXVhbnR1bSBNb29uXCIsXG4gICAgaW1hZ2U6IHF1YW50dW1Nb29uSW1hZ2UsXG4gICAgb3V0bGluZTogcXVhbnR1bU1vb25PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIHNtYWxsIGFuZCBtb3N0IGN1cmlvdXMgbW9vbiwgYmVpbmcgaW4gb3JiaXQgYXJvdW5kIGFsbCBmaXZlIHBsYW5ldHMgb2Ygb3VyIFNvbGFyIFN5c3RlbSBhdCB0aGUgc2FtZSB0aW1lLiBJdCBhcHBlYXJzIHRvIGJlaGF2ZSBzaW1pbGFyIHRvIHRoZSBwdXJwbGUgc2hhcmQgaW4gdGhlIE11c2V1bSAtIGxvb2sgYXQgaXQgYXMgbG9uZyBhcyB5b3Ugd2FudCwgYnV0IHRoZSBtb21lbnQgeW91IGxvb2sgYXdheSwgaXQgZGlzYXBwZWFycyBhbmQgb3JiaXRzIGFub3RoZXIgcGxhbmV0LiBUaGUgUXVhbnR1bSBNb29uIGlzIGNvdmVyZWQgaW4gdGhpY2sgZm9nLCBzbyB3ZSBkbyBub3Qga25vdyB3aGF0IGl0IGFjdHVhbGx5IGxvb2tzIGxpa2UuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIj8/P1wiLFxuICAgIGltYWdlOiBzdHJhbmdlckltYWdlLFxuICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgRGVlcCBTcGFjZSBTYXRlbGxpdGUgd2UgbWFuYWdlZCB0byBsYXVuY2ggcmVjZW50bHkgaGFzIGFscmVhZHkgcHJvZHVjZWQgbWFnbmlmaWNlbnQgaW1hZ2VzIG9mIG91ciBTb2xhciBTeXN0ZW0uIEN1cmlvdXNseSwgdGhpcyBpbWFnZSAtIGFuZCB0aGlzIGltYWdlIGFsb25lIC0gc2hvd3MgYW4gYW5vbWFseSB0aGF0IHdlIGRvIG5vdCB1bmRlcnN0YW5kLiBFYWNoIGFzdHJhbCBib2R5IGlzIGFjY291bnRlZCBmb3IsIHlldCB0aGVyZSBpcyBhbiBpbXBvc3NpYmxlIHNoYWRvdyBvbiB0aGUgc3VuLiBHYWJicm8gd2FzIHRhc2tlZCB3aXRoIGNoZWNraW5nIHRoZSBEZWVwIFNwYWNlIFNhdGVsbGl0ZSBmb3IgYW55IHByb2JsZW1zLCB5ZXQgdGhleSB3ZXJlIG5vdCBhYmxlIHRvIGZpbmQgYW55dGhpbmcuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwbGFuZXREYXRhO1xuIiwiaW1wb3J0IHBsYW5ldERhdGEgZnJvbSBcIi4vcGxhbmV0c0RhdGFcIjtcblxuY2xhc3MgUGxhbmV0IHtcbiAgY29uc3RydWN0b3IoaW1hZ2UsIG91dGxpbmUsIG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vdXRsaW5lID0gb3V0bGluZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBjcmVhdGVIVE1MRWxlbWVudCgpIHtcbiAgICBjb25zdCBwbGFuZXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFuZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwbGFuZXRcIik7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5pbWFnZSk7XG4gICAgaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImFsdFwiLCBgSW1hZ2Ugb2YgJHt0aGlzLm5hbWV9YCk7XG4gICAgaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VcIik7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlRWxlbWVudCk7XG5cbiAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG5cbiAgICBpZiAoISh0aGlzLm91dGxpbmUgPT09IFwibm9uZVwiKSkge1xuICAgICAgY29uc3Qgb3V0bGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgb3V0bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMub3V0bGluZSk7XG4gICAgICBvdXRsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYE91dGxpbmUgb2YgJHt0aGlzLm5hbWV9YCk7XG4gICAgICBvdXRsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm91dGxpbmVcIik7XG4gICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmQob3V0bGluZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHBsYW5ldEVsZW1lbnQuYXBwZW5kKGltYWdlQ29udGFpbmVyLCBuYW1lRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICAgIHJldHVybiBwbGFuZXRFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVBsYW5ldHMgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYW5ldHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhbmV0c1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGFuZXRzXCIpO1xuICBwbGFuZXRzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgcGxhbmV0RWxlbWVudHMgPSBwbGFuZXREYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBQbGFuZXQoZGF0YS5pbWFnZSwgZGF0YS5vdXRsaW5lLCBkYXRhLm5hbWUsIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBwbGFuZXQuY3JlYXRlSFRNTEVsZW1lbnQoKTtcbiAgfSk7XG5cbiAgcGxhbmV0c1NlY3Rpb24uYXBwZW5kKC4uLnBsYW5ldEVsZW1lbnRzKTtcbiAgcmV0dXJuIHBsYW5ldHNTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxhbmV0cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lVGFiXCI7XG5pbXBvcnQgY3JlYXRlUGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzVGFiXCI7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRUYWJcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgLy8gV2VsY29tZSB0ZXh0XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRleHRcIik7XG4gIGhlYWRlclRleHQuaW5uZXJIVE1MID0gXCJIZWFydGhzcGFjZVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgLy8gTmF2aWdhdGlvbiBidXR0b25zXG4gIGNvbnN0IGJ1dHRvbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25zXCIpO1xuICBbXCJIb21lXCIsIFwiUGxhbmV0c1wiLCBcIkFib3V0XCJdLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gICAgYnRuLmlubmVySFRNTCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBGaXJzdCBidXR0b24gc2hvdWxkIGJlIHRoZSBkZWZhdWx0IHNlbGVjdFxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBidXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgbGV0IGN1cnJlbnRUYWI7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIFJlbW92ZSBidXR0b24gdW5kZXJsaW5lc1xuICAgICAgY29uc3QgYnV0dG9uc0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIik7XG4gICAgICBidXR0b25zR3JvdXAuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIHVuZGVybGluZSB0byBjbGlja2VkIGJ1dHRvblxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgLy8gVW5sb2FkIGN1cnJlbnQgdGFiXG4gICAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmlkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY3VycmVudENvbnRlbnQpO1xuXG4gICAgICAvLyBMb2FkIGNvcnJlY3QgdGFiXG4gICAgICBpZiAoZWxlbWVudCA9PT0gXCJIb21lXCIpIHtcbiAgICAgICAgY3VycmVudFRhYiA9IGNyZWF0ZUhvbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJQbGFuZXRzXCIpIHtcbiAgICAgICAgY3VycmVudFRhYiA9IGNyZWF0ZVBsYW5ldHMoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gXCJBYm91dFwiKSB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjcmVhdGVBYm91dCgpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjdXJyZW50VGFiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25zRWxlbWVudCk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcblxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10ZXh0XCIpO1xuICBmb290ZXJUZXh0LmlubmVySFRNTCA9IFwiQXJ0IGFuZCBHYW1lIGNvbnRlbnQgwqkgMjAxOSBNb2JpdXMgRGlnaXRhbFwiO1xuICBmb290ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gIHJldHVybiBmb290ZXJTZWN0aW9uO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9