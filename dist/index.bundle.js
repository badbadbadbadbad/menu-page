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
/* harmony import */ var _Assets_IconsColor_outerWildsVentures_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/IconsColor/outerWildsVentures.png */ "./src/Assets/IconsColor/outerWildsVentures.png");
/* harmony import */ var _Assets_IconsColor_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/IconsColor/sun.png */ "./src/Assets/IconsColor/sun.png");
/* harmony import */ var _Assets_IconsColor_sunStation_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/IconsColor/sunStation.png */ "./src/Assets/IconsColor/sunStation.png");
/* harmony import */ var _Assets_IconsColor_emberTwin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/IconsColor/emberTwin.png */ "./src/Assets/IconsColor/emberTwin.png");
/* harmony import */ var _Assets_IconsColor_ashTwin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets/IconsColor/ashTwin.png */ "./src/Assets/IconsColor/ashTwin.png");
/* harmony import */ var _Assets_IconsColor_timberHearth_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Assets/IconsColor/timberHearth.png */ "./src/Assets/IconsColor/timberHearth.png");
/* harmony import */ var _Assets_IconsColor_attlerock_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/IconsColor/attlerock.png */ "./src/Assets/IconsColor/attlerock.png");
/* harmony import */ var _Assets_IconsColor_brittleHollow_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Assets/IconsColor/brittleHollow.png */ "./src/Assets/IconsColor/brittleHollow.png");
/* harmony import */ var _Assets_IconsColor_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Assets/IconsColor/hollowsLantern.png */ "./src/Assets/IconsColor/hollowsLantern.png");
/* harmony import */ var _Assets_IconsColor_giantsDeep_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Assets/IconsColor/giantsDeep.png */ "./src/Assets/IconsColor/giantsDeep.png");
/* harmony import */ var _Assets_IconsColor_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Assets/IconsColor/orbitalProbeCannon.png */ "./src/Assets/IconsColor/orbitalProbeCannon.png");
/* harmony import */ var _Assets_IconsColor_darkBramble_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Assets/IconsColor/darkBramble.png */ "./src/Assets/IconsColor/darkBramble.png");
/* harmony import */ var _Assets_IconsColor_interloper_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Assets/IconsColor/interloper.png */ "./src/Assets/IconsColor/interloper.png");
/* harmony import */ var _Assets_IconsColor_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Assets/IconsColor/whiteHoleStation.png */ "./src/Assets/IconsColor/whiteHoleStation.png");
/* harmony import */ var _Assets_IconsColor_quantumMoon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Assets/IconsColor/quantumMoon.png */ "./src/Assets/IconsColor/quantumMoon.png");
/* harmony import */ var _Assets_stranger_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Assets/stranger.png */ "./src/Assets/stranger.png");
/* harmony import */ var _Assets_IconsColorOutlines_sun_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/sun.png */ "./src/Assets/IconsColorOutlines/sun.png");
/* harmony import */ var _Assets_IconsColorOutlines_sunStation_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/sunStation.png */ "./src/Assets/IconsColorOutlines/sunStation.png");
/* harmony import */ var _Assets_IconsColorOutlines_emberTwin_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/emberTwin.png */ "./src/Assets/IconsColorOutlines/emberTwin.png");
/* harmony import */ var _Assets_IconsColorOutlines_ashTwin_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/ashTwin.png */ "./src/Assets/IconsColorOutlines/ashTwin.png");
/* harmony import */ var _Assets_IconsColorOutlines_timberHearth_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/timberHearth.png */ "./src/Assets/IconsColorOutlines/timberHearth.png");
/* harmony import */ var _Assets_IconsColorOutlines_attlerock_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/attlerock.png */ "./src/Assets/IconsColorOutlines/attlerock.png");
/* harmony import */ var _Assets_IconsColorOutlines_brittleHollow_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/brittleHollow.png */ "./src/Assets/IconsColorOutlines/brittleHollow.png");
/* harmony import */ var _Assets_IconsColorOutlines_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/hollowsLantern.png */ "./src/Assets/IconsColorOutlines/hollowsLantern.png");
/* harmony import */ var _Assets_IconsColorOutlines_giantsDeep_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/giantsDeep.png */ "./src/Assets/IconsColorOutlines/giantsDeep.png");
/* harmony import */ var _Assets_IconsColorOutlines_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/orbitalProbeCannon.png */ "./src/Assets/IconsColorOutlines/orbitalProbeCannon.png");
/* harmony import */ var _Assets_IconsColorOutlines_darkBramble_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/darkBramble.png */ "./src/Assets/IconsColorOutlines/darkBramble.png");
/* harmony import */ var _Assets_IconsColorOutlines_interloper_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/interloper.png */ "./src/Assets/IconsColorOutlines/interloper.png");
/* harmony import */ var _Assets_IconsColorOutlines_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/whiteHoleStation.png */ "./src/Assets/IconsColorOutlines/whiteHoleStation.png");
/* harmony import */ var _Assets_IconsColorOutlines_quantumMoon_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Assets/IconsColorOutlines/quantumMoon.png */ "./src/Assets/IconsColorOutlines/quantumMoon.png");
































const planetData = [
  {
    name: "Outer Wilds Ventures",
    image: _Assets_IconsColor_outerWildsVentures_png__WEBPACK_IMPORTED_MODULE_0__,
    outline: "none",
    description:
      "That's us! Our goal is to explore our Solar System, the mysterious Nomai who used to live here, and retrieve artifacts we believe to be interesting. Our tools, like the ship's artificial gravity and scout launcher recall, are based on Nomai technology.",
  },
  {
    name: "The Sun",
    image: _Assets_IconsColor_sun_png__WEBPACK_IMPORTED_MODULE_1__,
    outline: _Assets_IconsColorOutlines_sun_png__WEBPACK_IMPORTED_MODULE_16__,
    description:
      "The Sun is a main sequence star at the center of our Solar System. It may seem like it should burn us alive due to its proximity, but considering that we are alive, there must be an error in our calculations. Still, be careful of not flying into it by accident due to using your ship's autopilot carelessly!",
  },
  {
    name: "Sun Station",
    image: _Assets_IconsColor_sunStation_png__WEBPACK_IMPORTED_MODULE_2__,
    outline: _Assets_IconsColorOutlines_sunStation_png__WEBPACK_IMPORTED_MODULE_17__,
    description:
      "A satellite orbiting the Sun. Considering the design, it appears to be of Nomai origin. So far, there have been no successful attempts at landing on it (and Feldspar trying repeatedly to crash into it does not count).",
  },
  {
    name: "Ember Twin",
    image: _Assets_IconsColor_emberTwin_png__WEBPACK_IMPORTED_MODULE_3__,
    outline: _Assets_IconsColorOutlines_emberTwin_png__WEBPACK_IMPORTED_MODULE_18__,
    description:
      "The first half of the Hourglass Twins. Mostly desert rock and many deep caverns, though the planet appears to almost be divided into two halves by an equatorial canyon. Over the course of a Twin Cycle, the sands of Ash Twin are transported into this canyon by gravitational pull.",
  },
  {
    name: "Ash Twin",
    image: _Assets_IconsColor_ashTwin_png__WEBPACK_IMPORTED_MODULE_4__,
    outline: _Assets_IconsColorOutlines_ashTwin_png__WEBPACK_IMPORTED_MODULE_19__,
    description:
      "The second half of the Hourglasss Twins. Almost entirely sand, which is transported back and forth between the twins on a cycle of roughly 20 minutes. Hiding beneath the sands are a small core of sparkly rock and large towers of Nomai origin.",
  },
  {
    name: "Timber Hearth",
    image: _Assets_IconsColor_timberHearth_png__WEBPACK_IMPORTED_MODULE_5__,
    outline: _Assets_IconsColorOutlines_timberHearth_png__WEBPACK_IMPORTED_MODULE_20__,
    description:
      "Our home! A rocky planet, covered in grass, accented with trees, geysers, mountains and craters. One of the craters houses our little village, and the geysers are all connected to strong underground water currents hiding beneath the planet's crust.",
  },
  {
    name: "The Attlerock",
    image: _Assets_IconsColor_attlerock_png__WEBPACK_IMPORTED_MODULE_6__,
    outline: _Assets_IconsColorOutlines_attlerock_png__WEBPACK_IMPORTED_MODULE_21__,
    description:
      "The only moon of Timber Hearth. A small and barren rock, covered in craters. While there does not seem to be much of anything here, we have built an outpost which is being overseen by Esker. The only point of interest is a Nomai structure - which we believe is trying to locate.. something.",
  },
  {
    name: "Brittle Hollow",
    image: _Assets_IconsColor_brittleHollow_png__WEBPACK_IMPORTED_MODULE_7__,
    outline: _Assets_IconsColorOutlines_brittleHollow_png__WEBPACK_IMPORTED_MODULE_22__,
    description:
      "On a glance, this planet seems to be a lot of blue rock, all brittle and in disarray. The interesting aspect lies beneath the crust: The planet is almost entirely hollow, and at the core awaits a Black Hole. We do know that there is a hanging Nomai city under the crust, though exploring it has proven to be difficult.",
  },
  {
    name: "Hollow's Lantern",
    image: _Assets_IconsColor_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_8__,
    outline: _Assets_IconsColorOutlines_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_23__,
    description:
      "The only moon of Brittle Hollow. It appears as if this moon is nothing but lava and a few volcanoes. The volcanoes shoot out balls of lava into the orbit of its planet every so often, making exploration of Brittle Hollow even more fear-inducing.",
  },
  {
    name: "Giant's Deep",
    image: _Assets_IconsColor_giantsDeep_png__WEBPACK_IMPORTED_MODULE_9__,
    outline: _Assets_IconsColorOutlines_giantsDeep_png__WEBPACK_IMPORTED_MODULE_24__,
    description:
      "An ocean planet surrounded by a layer of atmospheric fog. There is no solid land besides a few small islands which are being ravaged by constant tornadoes and thunderstorms. While the ocean itself seems to be safe, it is also impossible to dive deeper than a few metres due to strong currents pushing one out. Still, this planet seems to be among the safer ones in our Solar System.",
  },
  {
    name: "Nomai Cannon",
    image: _Assets_IconsColor_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_10__,
    outline: _Assets_IconsColorOutlines_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_25__,
    description:
      "A large structure of Nomai origin in orbit around Giant's Deep. We are not entirely sure what this structure actually is, but as it seems to resemble a large cannon, we have decided to call it that. We hope that the Nomai translation tool we developed recently will help us understand more about this structure.",
  },
  {
    name: "Dark Bramble",
    image: _Assets_IconsColor_darkBramble_png__WEBPACK_IMPORTED_MODULE_11__,
    outline: _Assets_IconsColorOutlines_darkBramble_png__WEBPACK_IMPORTED_MODULE_26__,
    description:
      "This planet used to be a small frozen water planet, but has since been ripped apart by some kind of enormous vine growth for as long as we have known. The center of this vine growth has multiple openings, yet we cannot see anything inside besides dense fog and lights. We have not yet dared investigating the inside of the core.",
  },
  {
    name: "The Interloper",
    image: _Assets_IconsColor_interloper_png__WEBPACK_IMPORTED_MODULE_12__,
    outline: _Assets_IconsColorOutlines_interloper_png__WEBPACK_IMPORTED_MODULE_27__,
    description:
      "A small frozen comet orbiting the Sun, leaving behind a magnificent light blue tail. There is not much we know besides the comet containing a layer of rock and its orbit being a stable ellipsis. Due to the speed and size, we have not yet been able to land on the comet.",
  },
  {
    name: "White Hole Station",
    image: _Assets_IconsColor_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_13__,
    outline: _Assets_IconsColorOutlines_whiteHoleStation_png__WEBPACK_IMPORTED_MODULE_28__,
    description:
      "At the edge of our Solar System is a White Hole which is just as awe-inspiring as Brittle Hollow's Black Hole. Close to it is a Nomai building that appears to be some kind of outpost or station, enclosed in a circular frame. The function of this building is currently unclear to us.",
  },
  {
    name: "Quantum Moon",
    image: _Assets_IconsColor_quantumMoon_png__WEBPACK_IMPORTED_MODULE_14__,
    outline: _Assets_IconsColorOutlines_quantumMoon_png__WEBPACK_IMPORTED_MODULE_29__,
    description:
      "A small and most curious moon, being in orbit around all five planets of our Solar System at the same time. It appears to behave similar to the purple shard in the Museum - look at it as long as you want, but the moment you look away, it disappears and orbits another planet. The Quantum Moon is covered in thick fog, so we do not know what it actually looks like.",
  },
  {
    name: "???",
    image: _Assets_stranger_png__WEBPACK_IMPORTED_MODULE_15__,
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

/***/ "./src/Assets/IconsColor/outerWildsVentures.png":
/*!******************************************************!*\
  !*** ./src/Assets/IconsColor/outerWildsVentures.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0925664259b12594dbc.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9CLFFBQVE7QUFDUixxQkFBcUIsdURBQWE7QUFDbEMsUUFBUTtBQUNSLHFCQUFxQixxREFBVztBQUNoQzs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0RBQVU7QUFDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvYWJvdXRUYWIuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL2hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL3BsYW5ldHNEYXRhLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9wbGFuZXRzVGFiLmpzIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Fzc2V0cy9CYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2J1dHRvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDV2dztcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuI2hvbWUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYigwLCAwLCAwKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jcGxhbmV0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBoZWlnaHQ6IDg1dmg7XFxuICBwYWRkaW5nOiA1dmggbWluKDV2dywgNzBweCkgN3ZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyNXB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBsYW5ldCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxhbmV0IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnBsYW5ldCBpbWcub3V0bGluZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wbGFuZXQ6aG92ZXIgaW1nLm91dGxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2Fib3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG4jYWJvdXQtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYigwLCAwLCAwKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJvcmRlci10b3A6IHdoaXRlIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpRkFBc0U7RUFDdEUsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1oscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCOztFQUVoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9Bc3NldHMvQmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNoZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2J1dHRvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDV2dztcXG4gIGhlaWdodDogNXZoO1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5idXR0b24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuI2hvbWUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYigwLCAwLCAwKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jcGxhbmV0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBmbGV4LWdyb3c6IDE7ICovXFxuICBoZWlnaHQ6IDg1dmg7XFxuICBwYWRkaW5nOiA1dmggbWluKDV2dywgNzBweCkgN3ZoO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAyNXB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnBsYW5ldCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYigwLCAwLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IHNvbGlkIHdoaXRlIDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxhbmV0IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcblxcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnBsYW5ldCBpbWcub3V0bGluZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wbGFuZXQ6aG92ZXIgaW1nLm91dGxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2Fib3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbn1cXG5cXG4jYWJvdXQtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAyMHB4IHJnYigwLCAwLCAwKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGJvcmRlci10b3A6IHdoaXRlIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0VGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LXRleHRcIik7XG5cbiAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFib3V0LXRleHQtZnJhZ21lbnRcIik7XG4gIGZpcnN0LmlubmVySFRNTCA9XG4gICAgXCJPdXRlciBXaWxkcyBWZW50dXJlcyB3YXMgZm91bmRlZCBieSBGZWxkc3BhciwgR29zc2FuLCBTbGF0ZSBhbmQgSG9ybmZlbHMgd2l0aCB0aGUgZ29hbCBvZiBleHBsb3JpbmcgdGhlIFNvbGFyIFN5c3RlbSB0byBpbXByb3ZlIEhlYXJ0aGlhbiB1bmRlcnN0YW5kaW5nIG9mIHRoZSBTb2xhciBTeXN0ZW0gYW5kIG9mIHRoZSBOb21haSwgYW4gYW5jaWVudCByYWNlIHRoYXQgb25jZSBsaXZlZCBoZXJlLiBJdCBhY2NvbXBsaXNoZXMgdGhpcyBieSB0cmFpbmluZyBhc3BpcmluZyBhc3Ryb25hdXRzIGFuZCBlcXVpcHBpbmcgdGhlbSB3aXRoIGFkdmFuY2VkIHNwYWNlIGV4cGxvcmF0aW9uIHRlY2hub2xvZ3kuIFRoZSByZWNydWl0cyBhcmUgdGhlbiBzZW50IGludG8gc3BhY2Ugd2l0aCB0aGUgZ29hbCBvZiBsZWFybmluZyBhYm91dCB0aGUgU29sYXIgU3lzdGVtLCB0aGUgbXlzdGVyaW91cyBOb21haSwgYW5kIHRvIHJldHJpZXZlIGFueSBhcnRpZmFjdHMgdGhleSBiZWxpZXZlIHRvIGJlIHNpZ25pZmljYW50LiBcIjtcblxuICBhYm91dFNlY3Rpb24uYXBwZW5kKGFib3V0VGV4dCk7XG4gIGFib3V0VGV4dC5hcHBlbmQoZmlyc3QpO1xuXG4gIHJldHVybiBhYm91dFNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dDtcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtdGV4dFwiKTtcblxuICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpcnN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaG9tZS10ZXh0LWZyYWdtZW50XCIpO1xuICBmaXJzdC5pbm5lckhUTUwgPVxuICAgIFwiV2VsY29tZSB0byBvdXIgaHVtYmxlIGNvcm5lciBvZiB0aGUgdW5pdmVyc2UuIEhlcmUsIGFtaWQgdGhlIHZhc3QgZXhwYW5zZSBvZiBzcGFjZSwgd2UgaGF2ZSBtYWRlIG91ciBob21lLiBJdCdzIGEgcGxhY2Ugd2hlcmUgdGhlIHdvbmRlcnMgb2YgdGhlIGNvc21vcyBhcmUgb3VyIGNvbnN0YW50IGNvbXBhbmlvbnMsIGFuZCB0aGUgYmVhdXR5IG9mIHRoZSBzdGFycyBzaGluZXMgZG93biB1cG9uIHVzIGV2ZXJ5IG5pZ2h0LiBXZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgb24gYSBqb3VybmV5IHRocm91Z2ggb3VyIHNvbGFyIHN5c3RlbSBhbmQgZXhwbG9yZSB0aGUgbXlzdGVyaWVzIHRoYXQgbGllIGJleW9uZCBvdXIgcmVhY2guXCI7XG5cbiAgY29uc3Qgc2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2Vjb25kLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaG9tZS10ZXh0LWZyYWdtZW50XCIpO1xuICBzZWNvbmQuaW5uZXJIVE1MID1cbiAgICBcIlRha2UgYSBtb21lbnQgdG8gZ2F6ZSB1cG9uIHRoZSBlbmRsZXNzIHZvaWQgYW5kIHJlZmxlY3QgdXBvbiB0aGUgdmFzdG5lc3Mgb2Ygc3BhY2UuIEl0IGNhbiBiZSBvdmVyd2hlbG1pbmcgdG8gY29tcHJlaGVuZCB0aGUgc2NhbGUgb2YgdGhlIHVuaXZlcnNlIGFuZCBvdXIgcGxhY2UgaW4gaXQuIEJ1dCBpbiB0aGlzIGluZmluaXRlc2ltYWwgbW9tZW50LCBvbiB0aGlzIHRpbnkgcGxhbmV0LCB3ZSBoYXZlIHRoZSBwb3dlciB0byBtYWtlIGEgZGlmZmVyZW5jZS4gVG9nZXRoZXIsIHdlIGNhbiBzZWVrIG91dCB0aGUgc2VjcmV0cyBvZiB0aGUgY29zbW9zIGFuZCBkaXNjb3ZlciB0aGUgaGlkZGVuIHdvbmRlcnMgb2Ygb3VyIG93biBzb2xhciBzeXN0ZW0uIExldCB1cyBlbWJhcmsgb24gdGhpcyBqb3VybmV5IHRvZ2V0aGVyIGFuZCBzZWUgd2hlcmUgdGhlIHN0YXJzIG1heSB0YWtlIHVzLlwiO1xuXG4gIGhvbWVTZWN0aW9uLmFwcGVuZChob21lVGV4dCk7XG4gIGhvbWVUZXh0LmFwcGVuZChmaXJzdCwgc2Vjb25kKTtcblxuICByZXR1cm4gaG9tZVNlY3Rpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IG91dGVyV2lsZHNWZW50dXJlc0ltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL291dGVyV2lsZHNWZW50dXJlcy5wbmdcIjtcbmltcG9ydCBzdW5JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9zdW4ucG5nXCI7XG5pbXBvcnQgc3VuU3RhdGlvbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL3N1blN0YXRpb24ucG5nXCI7XG5pbXBvcnQgZW1iZXJUd2luSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvZW1iZXJUd2luLnBuZ1wiO1xuaW1wb3J0IGFzaFR3aW5JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9hc2hUd2luLnBuZ1wiO1xuaW1wb3J0IHRpbWJlckhlYXJ0aEltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL3RpbWJlckhlYXJ0aC5wbmdcIjtcbmltcG9ydCBhdHRsZXJvY2tJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9hdHRsZXJvY2sucG5nXCI7XG5pbXBvcnQgYnJpdHRsZUhvbGxvd0ltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2JyaXR0bGVIb2xsb3cucG5nXCI7XG5pbXBvcnQgaG9sbG93c0xhbnRlcm5JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9ob2xsb3dzTGFudGVybi5wbmdcIjtcbmltcG9ydCBnaWFudHNEZWVwSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvZ2lhbnRzRGVlcC5wbmdcIjtcbmltcG9ydCBvcmJpdGFsUHJvYmVDYW5ub25JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9vcmJpdGFsUHJvYmVDYW5ub24ucG5nXCI7XG5pbXBvcnQgZGFya0JyYW1ibGVJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9kYXJrQnJhbWJsZS5wbmdcIjtcbmltcG9ydCBpbnRlcmxvcGVySW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvaW50ZXJsb3Blci5wbmdcIjtcbmltcG9ydCB3aGl0ZUhvbGVTdGF0aW9uSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3Ivd2hpdGVIb2xlU3RhdGlvbi5wbmdcIjtcbmltcG9ydCBxdWFudHVtTW9vbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL3F1YW50dW1Nb29uLnBuZ1wiO1xuaW1wb3J0IHN0cmFuZ2VySW1hZ2UgZnJvbSBcIi4vQXNzZXRzL3N0cmFuZ2VyLnBuZ1wiO1xuXG5pbXBvcnQgc3VuT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL3N1bi5wbmdcIjtcbmltcG9ydCBzdW5TdGF0aW9uT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL3N1blN0YXRpb24ucG5nXCI7XG5pbXBvcnQgZW1iZXJUd2luT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2VtYmVyVHdpbi5wbmdcIjtcbmltcG9ydCBhc2hUd2luT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2FzaFR3aW4ucG5nXCI7XG5pbXBvcnQgdGltYmVySGVhcnRoT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL3RpbWJlckhlYXJ0aC5wbmdcIjtcbmltcG9ydCBhdHRsZXJvY2tPdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvYXR0bGVyb2NrLnBuZ1wiO1xuaW1wb3J0IGJyaXR0bGVIb2xsb3dPdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvYnJpdHRsZUhvbGxvdy5wbmdcIjtcbmltcG9ydCBob2xsb3dzTGFudGVybk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9ob2xsb3dzTGFudGVybi5wbmdcIjtcbmltcG9ydCBnaWFudHNEZWVwT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2dpYW50c0RlZXAucG5nXCI7XG5pbXBvcnQgb3JiaXRhbFByb2JlQ2Fubm9uT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL29yYml0YWxQcm9iZUNhbm5vbi5wbmdcIjtcbmltcG9ydCBkYXJrQnJhbWJsZU91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9kYXJrQnJhbWJsZS5wbmdcIjtcbmltcG9ydCBpbnRlcmxvcGVyT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2ludGVybG9wZXIucG5nXCI7XG5pbXBvcnQgd2hpdGVIb2xlU3RhdGlvbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy93aGl0ZUhvbGVTdGF0aW9uLnBuZ1wiO1xuaW1wb3J0IHF1YW50dW1Nb29uT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL3F1YW50dW1Nb29uLnBuZ1wiO1xuXG5jb25zdCBwbGFuZXREYXRhID0gW1xuICB7XG4gICAgbmFtZTogXCJPdXRlciBXaWxkcyBWZW50dXJlc1wiLFxuICAgIGltYWdlOiBvdXRlcldpbGRzVmVudHVyZXNJbWFnZSxcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhhdCdzIHVzISBPdXIgZ29hbCBpcyB0byBleHBsb3JlIG91ciBTb2xhciBTeXN0ZW0sIHRoZSBteXN0ZXJpb3VzIE5vbWFpIHdobyB1c2VkIHRvIGxpdmUgaGVyZSwgYW5kIHJldHJpZXZlIGFydGlmYWN0cyB3ZSBiZWxpZXZlIHRvIGJlIGludGVyZXN0aW5nLiBPdXIgdG9vbHMsIGxpa2UgdGhlIHNoaXAncyBhcnRpZmljaWFsIGdyYXZpdHkgYW5kIHNjb3V0IGxhdW5jaGVyIHJlY2FsbCwgYXJlIGJhc2VkIG9uIE5vbWFpIHRlY2hub2xvZ3kuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRoZSBTdW5cIixcbiAgICBpbWFnZTogc3VuSW1hZ2UsXG4gICAgb3V0bGluZTogc3VuT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIFN1biBpcyBhIG1haW4gc2VxdWVuY2Ugc3RhciBhdCB0aGUgY2VudGVyIG9mIG91ciBTb2xhciBTeXN0ZW0uIEl0IG1heSBzZWVtIGxpa2UgaXQgc2hvdWxkIGJ1cm4gdXMgYWxpdmUgZHVlIHRvIGl0cyBwcm94aW1pdHksIGJ1dCBjb25zaWRlcmluZyB0aGF0IHdlIGFyZSBhbGl2ZSwgdGhlcmUgbXVzdCBiZSBhbiBlcnJvciBpbiBvdXIgY2FsY3VsYXRpb25zLiBTdGlsbCwgYmUgY2FyZWZ1bCBvZiBub3QgZmx5aW5nIGludG8gaXQgYnkgYWNjaWRlbnQgZHVlIHRvIHVzaW5nIHlvdXIgc2hpcCdzIGF1dG9waWxvdCBjYXJlbGVzc2x5IVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTdW4gU3RhdGlvblwiLFxuICAgIGltYWdlOiBzdW5TdGF0aW9uSW1hZ2UsXG4gICAgb3V0bGluZTogc3VuU3RhdGlvbk91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc2F0ZWxsaXRlIG9yYml0aW5nIHRoZSBTdW4uIENvbnNpZGVyaW5nIHRoZSBkZXNpZ24sIGl0IGFwcGVhcnMgdG8gYmUgb2YgTm9tYWkgb3JpZ2luLiBTbyBmYXIsIHRoZXJlIGhhdmUgYmVlbiBubyBzdWNjZXNzZnVsIGF0dGVtcHRzIGF0IGxhbmRpbmcgb24gaXQgKGFuZCBGZWxkc3BhciB0cnlpbmcgcmVwZWF0ZWRseSB0byBjcmFzaCBpbnRvIGl0IGRvZXMgbm90IGNvdW50KS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW1iZXIgVHdpblwiLFxuICAgIGltYWdlOiBlbWJlclR3aW5JbWFnZSxcbiAgICBvdXRsaW5lOiBlbWJlclR3aW5PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgZmlyc3QgaGFsZiBvZiB0aGUgSG91cmdsYXNzIFR3aW5zLiBNb3N0bHkgZGVzZXJ0IHJvY2sgYW5kIG1hbnkgZGVlcCBjYXZlcm5zLCB0aG91Z2ggdGhlIHBsYW5ldCBhcHBlYXJzIHRvIGFsbW9zdCBiZSBkaXZpZGVkIGludG8gdHdvIGhhbHZlcyBieSBhbiBlcXVhdG9yaWFsIGNhbnlvbi4gT3ZlciB0aGUgY291cnNlIG9mIGEgVHdpbiBDeWNsZSwgdGhlIHNhbmRzIG9mIEFzaCBUd2luIGFyZSB0cmFuc3BvcnRlZCBpbnRvIHRoaXMgY2FueW9uIGJ5IGdyYXZpdGF0aW9uYWwgcHVsbC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQXNoIFR3aW5cIixcbiAgICBpbWFnZTogYXNoVHdpbkltYWdlLFxuICAgIG91dGxpbmU6IGFzaFR3aW5PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgc2Vjb25kIGhhbGYgb2YgdGhlIEhvdXJnbGFzc3MgVHdpbnMuIEFsbW9zdCBlbnRpcmVseSBzYW5kLCB3aGljaCBpcyB0cmFuc3BvcnRlZCBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHRoZSB0d2lucyBvbiBhIGN5Y2xlIG9mIHJvdWdobHkgMjAgbWludXRlcy4gSGlkaW5nIGJlbmVhdGggdGhlIHNhbmRzIGFyZSBhIHNtYWxsIGNvcmUgb2Ygc3BhcmtseSByb2NrIGFuZCBsYXJnZSB0b3dlcnMgb2YgTm9tYWkgb3JpZ2luLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaW1iZXIgSGVhcnRoXCIsXG4gICAgaW1hZ2U6IHRpbWJlckhlYXJ0aEltYWdlLFxuICAgIG91dGxpbmU6IHRpbWJlckhlYXJ0aE91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk91ciBob21lISBBIHJvY2t5IHBsYW5ldCwgY292ZXJlZCBpbiBncmFzcywgYWNjZW50ZWQgd2l0aCB0cmVlcywgZ2V5c2VycywgbW91bnRhaW5zIGFuZCBjcmF0ZXJzLiBPbmUgb2YgdGhlIGNyYXRlcnMgaG91c2VzIG91ciBsaXR0bGUgdmlsbGFnZSwgYW5kIHRoZSBnZXlzZXJzIGFyZSBhbGwgY29ubmVjdGVkIHRvIHN0cm9uZyB1bmRlcmdyb3VuZCB3YXRlciBjdXJyZW50cyBoaWRpbmcgYmVuZWF0aCB0aGUgcGxhbmV0J3MgY3J1c3QuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRoZSBBdHRsZXJvY2tcIixcbiAgICBpbWFnZTogYXR0bGVyb2NrSW1hZ2UsXG4gICAgb3V0bGluZTogYXR0bGVyb2NrT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIG9ubHkgbW9vbiBvZiBUaW1iZXIgSGVhcnRoLiBBIHNtYWxsIGFuZCBiYXJyZW4gcm9jaywgY292ZXJlZCBpbiBjcmF0ZXJzLiBXaGlsZSB0aGVyZSBkb2VzIG5vdCBzZWVtIHRvIGJlIG11Y2ggb2YgYW55dGhpbmcgaGVyZSwgd2UgaGF2ZSBidWlsdCBhbiBvdXRwb3N0IHdoaWNoIGlzIGJlaW5nIG92ZXJzZWVuIGJ5IEVza2VyLiBUaGUgb25seSBwb2ludCBvZiBpbnRlcmVzdCBpcyBhIE5vbWFpIHN0cnVjdHVyZSAtIHdoaWNoIHdlIGJlbGlldmUgaXMgdHJ5aW5nIHRvIGxvY2F0ZS4uIHNvbWV0aGluZy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQnJpdHRsZSBIb2xsb3dcIixcbiAgICBpbWFnZTogYnJpdHRsZUhvbGxvd0ltYWdlLFxuICAgIG91dGxpbmU6IGJyaXR0bGVIb2xsb3dPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJPbiBhIGdsYW5jZSwgdGhpcyBwbGFuZXQgc2VlbXMgdG8gYmUgYSBsb3Qgb2YgYmx1ZSByb2NrLCBhbGwgYnJpdHRsZSBhbmQgaW4gZGlzYXJyYXkuIFRoZSBpbnRlcmVzdGluZyBhc3BlY3QgbGllcyBiZW5lYXRoIHRoZSBjcnVzdDogVGhlIHBsYW5ldCBpcyBhbG1vc3QgZW50aXJlbHkgaG9sbG93LCBhbmQgYXQgdGhlIGNvcmUgYXdhaXRzIGEgQmxhY2sgSG9sZS4gV2UgZG8ga25vdyB0aGF0IHRoZXJlIGlzIGEgaGFuZ2luZyBOb21haSBjaXR5IHVuZGVyIHRoZSBjcnVzdCwgdGhvdWdoIGV4cGxvcmluZyBpdCBoYXMgcHJvdmVuIHRvIGJlIGRpZmZpY3VsdC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG9sbG93J3MgTGFudGVyblwiLFxuICAgIGltYWdlOiBob2xsb3dzTGFudGVybkltYWdlLFxuICAgIG91dGxpbmU6IGhvbGxvd3NMYW50ZXJuT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIG9ubHkgbW9vbiBvZiBCcml0dGxlIEhvbGxvdy4gSXQgYXBwZWFycyBhcyBpZiB0aGlzIG1vb24gaXMgbm90aGluZyBidXQgbGF2YSBhbmQgYSBmZXcgdm9sY2Fub2VzLiBUaGUgdm9sY2Fub2VzIHNob290IG91dCBiYWxscyBvZiBsYXZhIGludG8gdGhlIG9yYml0IG9mIGl0cyBwbGFuZXQgZXZlcnkgc28gb2Z0ZW4sIG1ha2luZyBleHBsb3JhdGlvbiBvZiBCcml0dGxlIEhvbGxvdyBldmVuIG1vcmUgZmVhci1pbmR1Y2luZy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2lhbnQncyBEZWVwXCIsXG4gICAgaW1hZ2U6IGdpYW50c0RlZXBJbWFnZSxcbiAgICBvdXRsaW5lOiBnaWFudHNEZWVwT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQW4gb2NlYW4gcGxhbmV0IHN1cnJvdW5kZWQgYnkgYSBsYXllciBvZiBhdG1vc3BoZXJpYyBmb2cuIFRoZXJlIGlzIG5vIHNvbGlkIGxhbmQgYmVzaWRlcyBhIGZldyBzbWFsbCBpc2xhbmRzIHdoaWNoIGFyZSBiZWluZyByYXZhZ2VkIGJ5IGNvbnN0YW50IHRvcm5hZG9lcyBhbmQgdGh1bmRlcnN0b3Jtcy4gV2hpbGUgdGhlIG9jZWFuIGl0c2VsZiBzZWVtcyB0byBiZSBzYWZlLCBpdCBpcyBhbHNvIGltcG9zc2libGUgdG8gZGl2ZSBkZWVwZXIgdGhhbiBhIGZldyBtZXRyZXMgZHVlIHRvIHN0cm9uZyBjdXJyZW50cyBwdXNoaW5nIG9uZSBvdXQuIFN0aWxsLCB0aGlzIHBsYW5ldCBzZWVtcyB0byBiZSBhbW9uZyB0aGUgc2FmZXIgb25lcyBpbiBvdXIgU29sYXIgU3lzdGVtLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOb21haSBDYW5ub25cIixcbiAgICBpbWFnZTogb3JiaXRhbFByb2JlQ2Fubm9uSW1hZ2UsXG4gICAgb3V0bGluZTogb3JiaXRhbFByb2JlQ2Fubm9uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBsYXJnZSBzdHJ1Y3R1cmUgb2YgTm9tYWkgb3JpZ2luIGluIG9yYml0IGFyb3VuZCBHaWFudCdzIERlZXAuIFdlIGFyZSBub3QgZW50aXJlbHkgc3VyZSB3aGF0IHRoaXMgc3RydWN0dXJlIGFjdHVhbGx5IGlzLCBidXQgYXMgaXQgc2VlbXMgdG8gcmVzZW1ibGUgYSBsYXJnZSBjYW5ub24sIHdlIGhhdmUgZGVjaWRlZCB0byBjYWxsIGl0IHRoYXQuIFdlIGhvcGUgdGhhdCB0aGUgTm9tYWkgdHJhbnNsYXRpb24gdG9vbCB3ZSBkZXZlbG9wZWQgcmVjZW50bHkgd2lsbCBoZWxwIHVzIHVuZGVyc3RhbmQgbW9yZSBhYm91dCB0aGlzIHN0cnVjdHVyZS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGFyayBCcmFtYmxlXCIsXG4gICAgaW1hZ2U6IGRhcmtCcmFtYmxlSW1hZ2UsXG4gICAgb3V0bGluZTogZGFya0JyYW1ibGVPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIHBsYW5ldCB1c2VkIHRvIGJlIGEgc21hbGwgZnJvemVuIHdhdGVyIHBsYW5ldCwgYnV0IGhhcyBzaW5jZSBiZWVuIHJpcHBlZCBhcGFydCBieSBzb21lIGtpbmQgb2YgZW5vcm1vdXMgdmluZSBncm93dGggZm9yIGFzIGxvbmcgYXMgd2UgaGF2ZSBrbm93bi4gVGhlIGNlbnRlciBvZiB0aGlzIHZpbmUgZ3Jvd3RoIGhhcyBtdWx0aXBsZSBvcGVuaW5ncywgeWV0IHdlIGNhbm5vdCBzZWUgYW55dGhpbmcgaW5zaWRlIGJlc2lkZXMgZGVuc2UgZm9nIGFuZCBsaWdodHMuIFdlIGhhdmUgbm90IHlldCBkYXJlZCBpbnZlc3RpZ2F0aW5nIHRoZSBpbnNpZGUgb2YgdGhlIGNvcmUuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRoZSBJbnRlcmxvcGVyXCIsXG4gICAgaW1hZ2U6IGludGVybG9wZXJJbWFnZSxcbiAgICBvdXRsaW5lOiBpbnRlcmxvcGVyT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzbWFsbCBmcm96ZW4gY29tZXQgb3JiaXRpbmcgdGhlIFN1biwgbGVhdmluZyBiZWhpbmQgYSBtYWduaWZpY2VudCBsaWdodCBibHVlIHRhaWwuIFRoZXJlIGlzIG5vdCBtdWNoIHdlIGtub3cgYmVzaWRlcyB0aGUgY29tZXQgY29udGFpbmluZyBhIGxheWVyIG9mIHJvY2sgYW5kIGl0cyBvcmJpdCBiZWluZyBhIHN0YWJsZSBlbGxpcHNpcy4gRHVlIHRvIHRoZSBzcGVlZCBhbmQgc2l6ZSwgd2UgaGF2ZSBub3QgeWV0IGJlZW4gYWJsZSB0byBsYW5kIG9uIHRoZSBjb21ldC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2hpdGUgSG9sZSBTdGF0aW9uXCIsXG4gICAgaW1hZ2U6IHdoaXRlSG9sZVN0YXRpb25JbWFnZSxcbiAgICBvdXRsaW5lOiB3aGl0ZUhvbGVTdGF0aW9uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQXQgdGhlIGVkZ2Ugb2Ygb3VyIFNvbGFyIFN5c3RlbSBpcyBhIFdoaXRlIEhvbGUgd2hpY2ggaXMganVzdCBhcyBhd2UtaW5zcGlyaW5nIGFzIEJyaXR0bGUgSG9sbG93J3MgQmxhY2sgSG9sZS4gQ2xvc2UgdG8gaXQgaXMgYSBOb21haSBidWlsZGluZyB0aGF0IGFwcGVhcnMgdG8gYmUgc29tZSBraW5kIG9mIG91dHBvc3Qgb3Igc3RhdGlvbiwgZW5jbG9zZWQgaW4gYSBjaXJjdWxhciBmcmFtZS4gVGhlIGZ1bmN0aW9uIG9mIHRoaXMgYnVpbGRpbmcgaXMgY3VycmVudGx5IHVuY2xlYXIgdG8gdXMuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlF1YW50dW0gTW9vblwiLFxuICAgIGltYWdlOiBxdWFudHVtTW9vbkltYWdlLFxuICAgIG91dGxpbmU6IHF1YW50dW1Nb29uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQSBzbWFsbCBhbmQgbW9zdCBjdXJpb3VzIG1vb24sIGJlaW5nIGluIG9yYml0IGFyb3VuZCBhbGwgZml2ZSBwbGFuZXRzIG9mIG91ciBTb2xhciBTeXN0ZW0gYXQgdGhlIHNhbWUgdGltZS4gSXQgYXBwZWFycyB0byBiZWhhdmUgc2ltaWxhciB0byB0aGUgcHVycGxlIHNoYXJkIGluIHRoZSBNdXNldW0gLSBsb29rIGF0IGl0IGFzIGxvbmcgYXMgeW91IHdhbnQsIGJ1dCB0aGUgbW9tZW50IHlvdSBsb29rIGF3YXksIGl0IGRpc2FwcGVhcnMgYW5kIG9yYml0cyBhbm90aGVyIHBsYW5ldC4gVGhlIFF1YW50dW0gTW9vbiBpcyBjb3ZlcmVkIGluIHRoaWNrIGZvZywgc28gd2UgZG8gbm90IGtub3cgd2hhdCBpdCBhY3R1YWxseSBsb29rcyBsaWtlLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCI/Pz9cIixcbiAgICBpbWFnZTogc3RyYW5nZXJJbWFnZSxcbiAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIERlZXAgU3BhY2UgU2F0ZWxsaXRlIHdlIG1hbmFnZWQgdG8gbGF1bmNoIHJlY2VudGx5IGhhcyBhbHJlYWR5IHByb2R1Y2VkIG1hZ25pZmljZW50IGltYWdlcyBvZiBvdXIgU29sYXIgU3lzdGVtLiBDdXJpb3VzbHksIHRoaXMgaW1hZ2UgLSBhbmQgdGhpcyBpbWFnZSBhbG9uZSAtIHNob3dzIGFuIGFub21hbHkgdGhhdCB3ZSBkbyBub3QgdW5kZXJzdGFuZC4gRWFjaCBhc3RyYWwgYm9keSBpcyBhY2NvdW50ZWQgZm9yLCB5ZXQgdGhlcmUgaXMgYW4gaW1wb3NzaWJsZSBzaGFkb3cgb24gdGhlIHN1bi4gR2FiYnJvIHdhcyB0YXNrZWQgd2l0aCBjaGVja2luZyB0aGUgRGVlcCBTcGFjZSBTYXRlbGxpdGUgZm9yIGFueSBwcm9ibGVtcywgeWV0IHRoZXkgd2VyZSBub3QgYWJsZSB0byBmaW5kIGFueXRoaW5nLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhbmV0RGF0YTtcbiIsImltcG9ydCBwbGFuZXREYXRhIGZyb20gXCIuL3BsYW5ldHNEYXRhXCI7XG5cbmNsYXNzIFBsYW5ldCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlLCBvdXRsaW5lLCBuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMub3V0bGluZSA9IG91dGxpbmU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgY3JlYXRlSFRNTEVsZW1lbnQoKSB7XG4gICAgY29uc3QgcGxhbmV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhbmV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicGxhbmV0XCIpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMuaW1hZ2UpO1xuICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYEltYWdlIG9mICR7dGhpcy5uYW1lfWApO1xuICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltYWdlXCIpO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZChpbWFnZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgaWYgKCEodGhpcy5vdXRsaW5lID09PSBcIm5vbmVcIikpIHtcbiAgICAgIGNvbnN0IG91dGxpbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIG91dGxpbmVFbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLm91dGxpbmUpO1xuICAgICAgb3V0bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGBPdXRsaW5lIG9mICR7dGhpcy5uYW1lfWApO1xuICAgICAgb3V0bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvdXRsaW5lXCIpO1xuICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKG91dGxpbmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwbGFuZXRFbGVtZW50LmFwcGVuZChpbWFnZUNvbnRhaW5lciwgbmFtZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbiAgICByZXR1cm4gcGxhbmV0RWxlbWVudDtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVQbGFuZXRzID0gKCkgPT4ge1xuICBjb25zdCBwbGFuZXRzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYW5ldHNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGxhbmV0c1wiKTtcbiAgcGxhbmV0c1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IHBsYW5ldEVsZW1lbnRzID0gcGxhbmV0RGF0YS5tYXAoKGRhdGEpID0+IHtcbiAgICBjb25zdCBwbGFuZXQgPSBuZXcgUGxhbmV0KGRhdGEuaW1hZ2UsIGRhdGEub3V0bGluZSwgZGF0YS5uYW1lLCBkYXRhLmRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gcGxhbmV0LmNyZWF0ZUhUTUxFbGVtZW50KCk7XG4gIH0pO1xuXG4gIHBsYW5ldHNTZWN0aW9uLmFwcGVuZCguLi5wbGFuZXRFbGVtZW50cyk7XG4gIHJldHVybiBwbGFuZXRzU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYW5ldHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZVRhYlwiO1xuaW1wb3J0IGNyZWF0ZVBsYW5ldHMgZnJvbSBcIi4vcGxhbmV0c1RhYlwiO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gXCIuL2Fib3V0VGFiXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuXG4gIC8vIFdlbGNvbWUgdGV4dFxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci10ZXh0XCIpO1xuICBoZWFkZXJUZXh0LmlubmVySFRNTCA9IFwiSGVhcnRoc3BhY2VcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIC8vIE5hdmlnYXRpb24gYnV0dG9uc1xuICBjb25zdCBidXR0b25zRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ1dHRvbnNFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYnV0dG9uc1wiKTtcbiAgW1wiSG9tZVwiLCBcIlBsYW5ldHNcIiwgXCJBYm91dFwiXS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5pbm5lckhUTUwgPSBlbGVtZW50O1xuXG4gICAgLy8gRmlyc3QgYnV0dG9uIHNob3VsZCBiZSB0aGUgZGVmYXVsdCBzZWxlY3RcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgYnV0dG9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGxldCBjdXJyZW50VGFiO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgYnV0dG9uIHVuZGVybGluZXNcbiAgICAgIGNvbnN0IGJ1dHRvbnNHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uc0dyb3VwLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCB1bmRlcmxpbmUgdG8gY2xpY2tlZCBidXR0b25cbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgIC8vIFVubG9hZCBjdXJyZW50IHRhYlxuICAgICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGN1cnJlbnRDb250ZW50KTtcblxuICAgICAgLy8gTG9hZCBjb3JyZWN0IHRhYlxuICAgICAgaWYgKGVsZW1lbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjcmVhdGVIb21lKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiUGxhbmV0c1wiKSB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjcmVhdGVQbGFuZXRzKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiQWJvdXRcIikge1xuICAgICAgICBjdXJyZW50VGFiID0gY3JlYXRlQWJvdXQoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3VycmVudFRhYiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikpO1xuICAgIH0pO1xuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0VsZW1lbnQpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGV4dFwiKTtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkFydCBhbmQgR2FtZSBjb250ZW50IMKpIDIwMTkgTW9iaXVzIERpZ2l0YWxcIjtcbiAgZm9vdGVyU2VjdGlvbi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICByZXR1cm4gZm9vdGVyU2VjdGlvbjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==