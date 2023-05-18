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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 100%;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", \"sans-serif\";\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 50px;\n  height: 10vh;\n  border-bottom: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#buttons {\n  position: absolute;\n  right: 5vw;\n  height: 5vh;\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  height: 100%;\n  width: 30%;\n  color: white;\n  background-color: black;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.selected {\n  border-bottom: 3px solid white !important;\n}\n\n#home {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#home-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#planets {\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 85vh;\n  padding: 5vh min(5vw, 70px) 7vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 25px;\n  overflow-y: auto;\n}\n\n.planet {\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-shadow: 1px 1px 5px rgb(0, 0, 0);\n  border-radius: 15px;\n  border: solid white 2px;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  text-align: center;\n}\n\n.image-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.planet img {\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 1;\n}\n\n.planet img.outline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.planet:hover img.outline {\n  opacity: 1;\n}\n\n#about {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#about-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#footer {\n  background-color: rgba(0, 0, 0, 1);\n  color: white;\n  height: 5vh;\n  border-top: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/* Scrollbars for Chrome / Edge / Safari */\n#planets::-webkit-scrollbar {\n  width: 3px;\n}\n\n#planets::-webkit-scrollbar-track {\n  background: transparent;\n  margin: 7px;\n}\n\n#planets::-webkit-scrollbar-thumb {\n  background-color: white;\n  border-radius: 20px;\n  border: 6px solid transparent;\n}\n\n/* Scrollbars for Firefox */\nbody {\n  scrollbar-width: thin;\n  scrollbar-color: white transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,iFAAsE;EACtE,8BAA8B;EAC9B,2BAA2B;EAC3B,yBAAyB;EACzB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,SAAS;EACT,UAAU;EACV,sCAAsC;EACtC,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;EACtB,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;EACV,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sCAAsC;EACtC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA,0CAA0C;AAC1C;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA,2BAA2B;AAC3B;EACE,qBAAqB;EACrB,kCAAkC;AACpC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap\");\n\nhtml {\n  background: url(./Assets/Background.png) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  height: 100%;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", \"sans-serif\";\n  display: flex;\n  flex-direction: column;\n}\n\n#header {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  font-size: 50px;\n  height: 10vh;\n  border-bottom: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#buttons {\n  position: absolute;\n  right: 5vw;\n  height: 5vh;\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  height: 100%;\n  width: 30%;\n  color: white;\n  background-color: black;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.selected {\n  border-bottom: 3px solid white !important;\n}\n\n#home {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#home-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#planets {\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 85vh;\n  padding: 5vh min(5vw, 70px) 7vh;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 25px;\n  overflow-y: auto;\n}\n\n.planet {\n  padding: 15px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  text-shadow: 1px 1px 5px rgb(0, 0, 0);\n  border-radius: 15px;\n  border: solid white 2px;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  text-align: center;\n}\n\n.image-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.planet img {\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 1;\n}\n\n.planet img.outline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.planet:hover img.outline {\n  opacity: 1;\n}\n\n#about {\n  background-color: rgba(0, 0, 0, 0.4);\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 5vh;\n}\n\n#about-text {\n  color: white;\n  text-shadow: 1px 1px 20px rgb(0, 0, 0);\n  line-height: 1.7;\n  font-size: 25px;\n  max-width: 800px;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n#footer {\n  background-color: rgba(0, 0, 0, 1);\n  color: white;\n  height: 5vh;\n  border-top: white 2px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/* Scrollbars for Chrome / Edge / Safari */\n#planets::-webkit-scrollbar {\n  width: 3px;\n}\n\n#planets::-webkit-scrollbar-track {\n  background: transparent;\n  margin: 7px;\n}\n\n#planets::-webkit-scrollbar-thumb {\n  background-color: white;\n  border-radius: 20px;\n  border: 6px solid transparent;\n}\n\n/* Scrollbars for Firefox */\nbody {\n  scrollbar-width: thin;\n  scrollbar-color: white transparent;\n}\n"],"sourceRoot":""}]);
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
    "Outer Wilds Ventures was established by a group of ambitious explorers - Feldspar, Gossan, Slate, and Hornfels - with a common purpose in mind: to delve into the depths of our Solar System, increase our knowledge of the ancient Nomai civilization, and uncover the secrets that the universe holds. To achieve this goal, we train young astronauts and equip them with cutting-edge space exploration technology before sending them out into the great unknown. The recruits are tasked with learning all they can about our Solar System, studying the cryptic Nomai artifacts, and recovering any items that they deem of value.";

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
    "Welcome, fellow spacefarer! We are the Hearthians, a curious and adventurous race who call the quaint little planet of Timber Hearth our home. Our love for exploration and discovery led us to seek out the mysteries hidden within our Solar System, and in doing so, we developed more advanced technology based on the Nomai artifacts we have discovered.";

  const second = document.createElement("div");
  second.setAttribute("class", "home-text-fragment");
  second.innerHTML =
    "Through our travels, we have come to appreciate the beauty and fragility of our universe. We have also learned that knowledge and understanding can help us protect it. And that's why we invite you to join us on this journey of discovery. Explore our website and learn about the planets and astral bodies we've encountered. Who knows what wonders you might find?";

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
      "The Sun, a main sequence star situated at the center of our Solar System, might appear to be a fiery inferno that could instantly incinerate us due to its proximity. However, as we're still here, there must be an error in our calculations. Nevertheless, we must exercise caution and avoid accidentally colliding with it due to our ship's autopilot, which can be hazardous if not handled carefully!",
  },
  {
    name: "Sun Station",
    image: _Assets_IconsColor_sunStation_png__WEBPACK_IMPORTED_MODULE_1__,
    outline: _Assets_IconsColorOutlines_sunStation_png__WEBPACK_IMPORTED_MODULE_16__,
    description:
      "Behold, a satellite orbiting the Sun! Judging from its design, it seems to be of Nomai origin, though we have no idea how it is not burnt to a crisp yet. Despite numerous attempts, no one has been successful in landing on it (and let's not count Feldspar's repeated attempts to crash into it!).",
  },
  {
    name: "Ember Twin",
    image: _Assets_IconsColor_emberTwin_png__WEBPACK_IMPORTED_MODULE_2__,
    outline: _Assets_IconsColorOutlines_emberTwin_png__WEBPACK_IMPORTED_MODULE_17__,
    description:
      "The first half of the Hourglass Twins, mostly made up of rocky desert terrain, riddled with numerous deep caverns. What sets it apart is the equatorial canyon that almost appears to divide the planet into two halves. Over the course of a Twin Cycle, the sands of Ash Twin are slowly pulled into this canyon by the irresistible force of gravity, creating a breathtaking sight that must be seen to be believed!",
  },
  {
    name: "Ash Twin",
    image: _Assets_IconsColor_ashTwin_png__WEBPACK_IMPORTED_MODULE_3__,
    outline: _Assets_IconsColorOutlines_ashTwin_png__WEBPACK_IMPORTED_MODULE_18__,
    description:
      "The other half of the Hourglass Twins, a stunning planet that boasts an almost entirely sandy terrain. What's fascinating about this planet is that the sands are in constant motion, being transported back and forth between the twins in a cycle that lasts approximately 45 minutes. But that's not all! Beneath the shimmering sands lies a small core of glittering rock and towering structures of Nomai origin, just waiting to be explored.",
  },
  {
    name: "Timber Hearth",
    image: _Assets_IconsColor_timberHearth_png__WEBPACK_IMPORTED_MODULE_4__,
    outline: _Assets_IconsColorOutlines_timberHearth_png__WEBPACK_IMPORTED_MODULE_19__,
    description:
      "Welcome to our planet, our beloved home! It's a rocky world covered in green grass, dotted with trees, mountains, and craters. Our little village is situated in one of the craters, and the geysers on the planet are connected to underground water currents that flow beneath the surface.",
  },
  {
    name: "The Attlerock",
    image: _Assets_IconsColor_attlerock_png__WEBPACK_IMPORTED_MODULE_5__,
    outline: _Assets_IconsColorOutlines_attlerock_png__WEBPACK_IMPORTED_MODULE_20__,
    description:
      "Behold, the only moon of Timber Hearth, a small and barren world marked by countless craters. Though it may not seem like much, we have managed to establish an outpost here, which is currently being overseen by Esker. The moon's only point of interest is a mysterious Nomai structure that we believe is attempting to locate... something. What secrets could this moon hold? Only time will tell!",
  },
  {
    name: "Brittle Hollow",
    image: _Assets_IconsColor_brittleHollow_png__WEBPACK_IMPORTED_MODULE_6__,
    outline: _Assets_IconsColorOutlines_brittleHollow_png__WEBPACK_IMPORTED_MODULE_21__,
    description:
      "At first glance, this planet may appear to be nothing more than a jumbled mass of brittle blue rocks in disarray. But don't be fooled, for its true wonder lies beneath the surface. Believe it or not, this planet is almost entirely hollow, with a massive black hole at its core! But that's not all, for there is also a mysterious hanging Nomai city tucked away beneath the crust. While we have attempted to explore it, the city remains a challenging mystery waiting to be solved.",
  },
  {
    name: "Hollow's Lantern",
    image: _Assets_IconsColor_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_7__,
    outline: _Assets_IconsColorOutlines_hollowsLantern_png__WEBPACK_IMPORTED_MODULE_22__,
    description:
      "Set your sights on the only moon of Brittle Hollow! At first glance, it may seem like nothing but a fiery wasteland, with lava flows and towering volcanoes dominating the landscape. But be warned, this moon holds a danger that extends far beyond its surface. The volcanoes occasionally launch balls of molten lava into orbit around the planet, making exploration of the already treacherous Brittle Hollow even more fear-inducing. Beware, brave adventurer!",
  },
  {
    name: "Giant's Deep",
    image: _Assets_IconsColor_giantsDeep_png__WEBPACK_IMPORTED_MODULE_8__,
    outline: _Assets_IconsColorOutlines_giantsDeep_png__WEBPACK_IMPORTED_MODULE_23__,
    description:
      "This aquatic world is shrouded by a thick layer of atmospheric fog, making it a sight to behold. Unfortunately, the only solid ground on this planet consists of small, battered islands that are constantly pummeled by violent tornadoes and thunderstorms. While the ocean itself appears to be relatively safe, the strong currents make it impossible to dive very deep. Despite its challenges, however, this planet is considered one of the safer destinations in our Solar System.",
  },
  {
    name: "Nomai Cannon",
    image: _Assets_IconsColor_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_9__,
    outline: _Assets_IconsColorOutlines_orbitalProbeCannon_png__WEBPACK_IMPORTED_MODULE_24__,
    description:
      "Behold, the mysterious Nomai structure orbiting Giant's Deep! This imposing edifice has left us scratching our heads, as we are still not entirely sure what it is. Some have likened it to a massive cannon, due to its distinctive shape and size. Despite our confusion, we remain undeterred in our quest for answers. With the recent development of our Nomai translation tool, we hope to unravel the secrets of this enigmatic structure and uncover its true purpose.",
  },
  {
    name: "Dark Bramble",
    image: _Assets_IconsColor_darkBramble_png__WEBPACK_IMPORTED_MODULE_10__,
    outline: _Assets_IconsColorOutlines_darkBramble_png__WEBPACK_IMPORTED_MODULE_25__,
    description:
      "Welcome to the eerie planet that was once a frozen ball of water! However, as long as we can remember, it has been overtaken by an enormous vine growth that has torn it apart. The center of this growth is particularly intriguing, with multiple openings revealing nothing but an impenetrable fog and mysterious lights. Despite our curiosity, we have yet to muster the courage to explore the interior of this enigmatic core.",
  },
  {
    name: "The Interloper",
    image: _Assets_IconsColor_interloper_png__WEBPACK_IMPORTED_MODULE_11__,
    outline: _Assets_IconsColorOutlines_interloper_png__WEBPACK_IMPORTED_MODULE_26__,
    description:
      "This small comet orbits the Sun, leaving behind a magnificent light blue tail as it travels through space. It contains a layer of rock, but there is not much else that we know about it. Its orbit is a stable ellipse, but due to its high speed and small size, we have not been able to land on the comet yet",
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
      "Welcome to the most mysterious moon in our Solar System - the Quantum Moon! It orbits around all five planets simultaneously, defying the laws of physics as we know them. This enigmatic moon seems to behave like the purple shard in the Museum; as soon as you look away, it vanishes and reappears in orbit around another planet. The Quantum Moon is shrouded in a thick layer of fog, and we have yet to observe its true appearance.",
  },
  {
    name: "???",
    image: _Assets_stranger_png__WEBPACK_IMPORTED_MODULE_14__,
    outline: "none",
    description:
      "The Deep Space Satellite, launched recently, has already captured magnificent images of our Solar System. However, a puzzling anomaly has been detected in one image that we cannot explain. Every celestial body is accounted for, but there is an inexplicable shadow on the sun. To investigate this mysterious phenomenon, we tasked Gabbro with checking the Deep Space Satellite for any malfunctions, but they found nothing wrong with it.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNNO0FBQ0o7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixvREFBVTtBQUMvQixRQUFRO0FBQ1IscUJBQXFCLHVEQUFhO0FBQ2xDLFFBQVE7QUFDUixxQkFBcUIscURBQVc7QUFDaEM7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG9EQUFVO0FBQ3BDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlLy4vc3JjL2Fib3V0VGFiLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9wbGFuZXRzRGF0YS5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2UvLi9zcmMvcGxhbmV0c1RhYi5qcyIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVudS1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21lbnUtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tZW51LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL21lbnUtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Bc3NldHMvQmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNidXR0b25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1dnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbiNob21lLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2IoMCwgMCwgMCk7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI3BsYW5ldHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgcGFkZGluZzogNXZoIG1pbig1dncsIDcwcHgpIDd2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wbGFuZXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYW5ldCBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wbGFuZXQgaW1nLm91dGxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGxhbmV0OmhvdmVyIGltZy5vdXRsaW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNhYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuI2Fib3V0LXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2IoMCwgMCwgMCk7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBib3JkZXItdG9wOiB3aGl0ZSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXJzIGZvciBDaHJvbWUgLyBFZGdlIC8gU2FmYXJpICovXFxuI3BsYW5ldHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAzcHg7XFxufVxcblxcbiNwbGFuZXRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogN3B4O1xcbn1cXG5cXG4jcGxhbmV0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIFNjcm9sbGJhcnMgZm9yIEZpcmVmb3ggKi9cXG5ib2R5IHtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpRkFBc0U7RUFDdEUsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UscUJBQXFCO0VBQ3JCLGtDQUFrQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZDogdXJsKC4vQXNzZXRzL0JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNidXR0b25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1dnc7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcXG59XFxuXFxuI2hvbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XFxufVxcblxcbiNob21lLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2IoMCwgMCwgMCk7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI3BsYW5ldHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgcGFkZGluZzogNXZoIG1pbig1dncsIDcwcHgpIDd2aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMjVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5wbGFuZXQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCByZ2IoMCwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYW5ldCBpbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wbGFuZXQgaW1nLm91dGxpbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGxhbmV0OmhvdmVyIGltZy5vdXRsaW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNhYm91dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDV2aDtcXG59XFxuXFxuI2Fib3V0LXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMjBweCByZ2IoMCwgMCwgMCk7XFxuICBsaW5lLWhlaWdodDogMS43O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBib3JkZXItdG9wOiB3aGl0ZSAycHggc29saWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXJzIGZvciBDaHJvbWUgLyBFZGdlIC8gU2FmYXJpICovXFxuI3BsYW5ldHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAzcHg7XFxufVxcblxcbiNwbGFuZXRzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogN3B4O1xcbn1cXG5cXG4jcGxhbmV0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIFNjcm9sbGJhcnMgZm9yIEZpcmVmb3ggKi9cXG5ib2R5IHtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogd2hpdGUgdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICBhYm91dFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFib3V0VGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0LXRleHRcIik7XG5cbiAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaXJzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFib3V0LXRleHQtZnJhZ21lbnRcIik7XG4gIGZpcnN0LmlubmVySFRNTCA9XG4gICAgXCJPdXRlciBXaWxkcyBWZW50dXJlcyB3YXMgZXN0YWJsaXNoZWQgYnkgYSBncm91cCBvZiBhbWJpdGlvdXMgZXhwbG9yZXJzIC0gRmVsZHNwYXIsIEdvc3NhbiwgU2xhdGUsIGFuZCBIb3JuZmVscyAtIHdpdGggYSBjb21tb24gcHVycG9zZSBpbiBtaW5kOiB0byBkZWx2ZSBpbnRvIHRoZSBkZXB0aHMgb2Ygb3VyIFNvbGFyIFN5c3RlbSwgaW5jcmVhc2Ugb3VyIGtub3dsZWRnZSBvZiB0aGUgYW5jaWVudCBOb21haSBjaXZpbGl6YXRpb24sIGFuZCB1bmNvdmVyIHRoZSBzZWNyZXRzIHRoYXQgdGhlIHVuaXZlcnNlIGhvbGRzLiBUbyBhY2hpZXZlIHRoaXMgZ29hbCwgd2UgdHJhaW4geW91bmcgYXN0cm9uYXV0cyBhbmQgZXF1aXAgdGhlbSB3aXRoIGN1dHRpbmctZWRnZSBzcGFjZSBleHBsb3JhdGlvbiB0ZWNobm9sb2d5IGJlZm9yZSBzZW5kaW5nIHRoZW0gb3V0IGludG8gdGhlIGdyZWF0IHVua25vd24uIFRoZSByZWNydWl0cyBhcmUgdGFza2VkIHdpdGggbGVhcm5pbmcgYWxsIHRoZXkgY2FuIGFib3V0IG91ciBTb2xhciBTeXN0ZW0sIHN0dWR5aW5nIHRoZSBjcnlwdGljIE5vbWFpIGFydGlmYWN0cywgYW5kIHJlY292ZXJpbmcgYW55IGl0ZW1zIHRoYXQgdGhleSBkZWVtIG9mIHZhbHVlLlwiO1xuXG4gIGFib3V0U2VjdGlvbi5hcHBlbmQoYWJvdXRUZXh0KTtcbiAgYWJvdXRUZXh0LmFwcGVuZChmaXJzdCk7XG5cbiAgcmV0dXJuIGFib3V0U2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0O1xuIiwiY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVcIik7XG4gIGhvbWVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcblxuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS10ZXh0XCIpO1xuXG4gIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmlyc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLXRleHQtZnJhZ21lbnRcIik7XG4gIGZpcnN0LmlubmVySFRNTCA9XG4gICAgXCJXZWxjb21lLCBmZWxsb3cgc3BhY2VmYXJlciEgV2UgYXJlIHRoZSBIZWFydGhpYW5zLCBhIGN1cmlvdXMgYW5kIGFkdmVudHVyb3VzIHJhY2Ugd2hvIGNhbGwgdGhlIHF1YWludCBsaXR0bGUgcGxhbmV0IG9mIFRpbWJlciBIZWFydGggb3VyIGhvbWUuIE91ciBsb3ZlIGZvciBleHBsb3JhdGlvbiBhbmQgZGlzY292ZXJ5IGxlZCB1cyB0byBzZWVrIG91dCB0aGUgbXlzdGVyaWVzIGhpZGRlbiB3aXRoaW4gb3VyIFNvbGFyIFN5c3RlbSwgYW5kIGluIGRvaW5nIHNvLCB3ZSBkZXZlbG9wZWQgbW9yZSBhZHZhbmNlZCB0ZWNobm9sb2d5IGJhc2VkIG9uIHRoZSBOb21haSBhcnRpZmFjdHMgd2UgaGF2ZSBkaXNjb3ZlcmVkLlwiO1xuXG4gIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlY29uZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWUtdGV4dC1mcmFnbWVudFwiKTtcbiAgc2Vjb25kLmlubmVySFRNTCA9XG4gICAgXCJUaHJvdWdoIG91ciB0cmF2ZWxzLCB3ZSBoYXZlIGNvbWUgdG8gYXBwcmVjaWF0ZSB0aGUgYmVhdXR5IGFuZCBmcmFnaWxpdHkgb2Ygb3VyIHVuaXZlcnNlLiBXZSBoYXZlIGFsc28gbGVhcm5lZCB0aGF0IGtub3dsZWRnZSBhbmQgdW5kZXJzdGFuZGluZyBjYW4gaGVscCB1cyBwcm90ZWN0IGl0LiBBbmQgdGhhdCdzIHdoeSB3ZSBpbnZpdGUgeW91IHRvIGpvaW4gdXMgb24gdGhpcyBqb3VybmV5IG9mIGRpc2NvdmVyeS4gRXhwbG9yZSBvdXIgd2Vic2l0ZSBhbmQgbGVhcm4gYWJvdXQgdGhlIHBsYW5ldHMgYW5kIGFzdHJhbCBib2RpZXMgd2UndmUgZW5jb3VudGVyZWQuIFdobyBrbm93cyB3aGF0IHdvbmRlcnMgeW91IG1pZ2h0IGZpbmQ/XCI7XG5cbiAgaG9tZVNlY3Rpb24uYXBwZW5kKGhvbWVUZXh0KTtcbiAgaG9tZVRleHQuYXBwZW5kKGZpcnN0LCBzZWNvbmQpO1xuXG4gIHJldHVybiBob21lU2VjdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgc3VuSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3Ivc3VuLnBuZ1wiO1xuaW1wb3J0IHN1blN0YXRpb25JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9zdW5TdGF0aW9uLnBuZ1wiO1xuaW1wb3J0IGVtYmVyVHdpbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2VtYmVyVHdpbi5wbmdcIjtcbmltcG9ydCBhc2hUd2luSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvYXNoVHdpbi5wbmdcIjtcbmltcG9ydCB0aW1iZXJIZWFydGhJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci90aW1iZXJIZWFydGgucG5nXCI7XG5pbXBvcnQgYXR0bGVyb2NrSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvYXR0bGVyb2NrLnBuZ1wiO1xuaW1wb3J0IGJyaXR0bGVIb2xsb3dJbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9icml0dGxlSG9sbG93LnBuZ1wiO1xuaW1wb3J0IGhvbGxvd3NMYW50ZXJuSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvaG9sbG93c0xhbnRlcm4ucG5nXCI7XG5pbXBvcnQgZ2lhbnRzRGVlcEltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2dpYW50c0RlZXAucG5nXCI7XG5pbXBvcnQgb3JiaXRhbFByb2JlQ2Fubm9uSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3Ivb3JiaXRhbFByb2JlQ2Fubm9uLnBuZ1wiO1xuaW1wb3J0IGRhcmtCcmFtYmxlSW1hZ2UgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3IvZGFya0JyYW1ibGUucG5nXCI7XG5pbXBvcnQgaW50ZXJsb3BlckltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL2ludGVybG9wZXIucG5nXCI7XG5pbXBvcnQgd2hpdGVIb2xlU3RhdGlvbkltYWdlIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yL3doaXRlSG9sZVN0YXRpb24ucG5nXCI7XG5pbXBvcnQgcXVhbnR1bU1vb25JbWFnZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvci9xdWFudHVtTW9vbi5wbmdcIjtcbmltcG9ydCBzdHJhbmdlckltYWdlIGZyb20gXCIuL0Fzc2V0cy9zdHJhbmdlci5wbmdcIjtcblxuaW1wb3J0IHN1bk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9zdW4ucG5nXCI7XG5pbXBvcnQgc3VuU3RhdGlvbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9zdW5TdGF0aW9uLnBuZ1wiO1xuaW1wb3J0IGVtYmVyVHdpbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9lbWJlclR3aW4ucG5nXCI7XG5pbXBvcnQgYXNoVHdpbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9hc2hUd2luLnBuZ1wiO1xuaW1wb3J0IHRpbWJlckhlYXJ0aE91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy90aW1iZXJIZWFydGgucG5nXCI7XG5pbXBvcnQgYXR0bGVyb2NrT3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2F0dGxlcm9jay5wbmdcIjtcbmltcG9ydCBicml0dGxlSG9sbG93T3V0bGluZSBmcm9tIFwiLi9Bc3NldHMvSWNvbnNDb2xvck91dGxpbmVzL2JyaXR0bGVIb2xsb3cucG5nXCI7XG5pbXBvcnQgaG9sbG93c0xhbnRlcm5PdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvaG9sbG93c0xhbnRlcm4ucG5nXCI7XG5pbXBvcnQgZ2lhbnRzRGVlcE91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9naWFudHNEZWVwLnBuZ1wiO1xuaW1wb3J0IG9yYml0YWxQcm9iZUNhbm5vbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9vcmJpdGFsUHJvYmVDYW5ub24ucG5nXCI7XG5pbXBvcnQgZGFya0JyYW1ibGVPdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvZGFya0JyYW1ibGUucG5nXCI7XG5pbXBvcnQgaW50ZXJsb3Blck91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9pbnRlcmxvcGVyLnBuZ1wiO1xuaW1wb3J0IHdoaXRlSG9sZVN0YXRpb25PdXRsaW5lIGZyb20gXCIuL0Fzc2V0cy9JY29uc0NvbG9yT3V0bGluZXMvd2hpdGVIb2xlU3RhdGlvbi5wbmdcIjtcbmltcG9ydCBxdWFudHVtTW9vbk91dGxpbmUgZnJvbSBcIi4vQXNzZXRzL0ljb25zQ29sb3JPdXRsaW5lcy9xdWFudHVtTW9vbi5wbmdcIjtcblxuY29uc3QgcGxhbmV0RGF0YSA9IFtcbiAge1xuICAgIG5hbWU6IFwiVGhlIFN1blwiLFxuICAgIGltYWdlOiBzdW5JbWFnZSxcbiAgICBvdXRsaW5lOiBzdW5PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgU3VuLCBhIG1haW4gc2VxdWVuY2Ugc3RhciBzaXR1YXRlZCBhdCB0aGUgY2VudGVyIG9mIG91ciBTb2xhciBTeXN0ZW0sIG1pZ2h0IGFwcGVhciB0byBiZSBhIGZpZXJ5IGluZmVybm8gdGhhdCBjb3VsZCBpbnN0YW50bHkgaW5jaW5lcmF0ZSB1cyBkdWUgdG8gaXRzIHByb3hpbWl0eS4gSG93ZXZlciwgYXMgd2UncmUgc3RpbGwgaGVyZSwgdGhlcmUgbXVzdCBiZSBhbiBlcnJvciBpbiBvdXIgY2FsY3VsYXRpb25zLiBOZXZlcnRoZWxlc3MsIHdlIG11c3QgZXhlcmNpc2UgY2F1dGlvbiBhbmQgYXZvaWQgYWNjaWRlbnRhbGx5IGNvbGxpZGluZyB3aXRoIGl0IGR1ZSB0byBvdXIgc2hpcCdzIGF1dG9waWxvdCwgd2hpY2ggY2FuIGJlIGhhemFyZG91cyBpZiBub3QgaGFuZGxlZCBjYXJlZnVsbHkhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlN1biBTdGF0aW9uXCIsXG4gICAgaW1hZ2U6IHN1blN0YXRpb25JbWFnZSxcbiAgICBvdXRsaW5lOiBzdW5TdGF0aW9uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQmVob2xkLCBhIHNhdGVsbGl0ZSBvcmJpdGluZyB0aGUgU3VuISBKdWRnaW5nIGZyb20gaXRzIGRlc2lnbiwgaXQgc2VlbXMgdG8gYmUgb2YgTm9tYWkgb3JpZ2luLCB0aG91Z2ggd2UgaGF2ZSBubyBpZGVhIGhvdyBpdCBpcyBub3QgYnVybnQgdG8gYSBjcmlzcCB5ZXQuIERlc3BpdGUgbnVtZXJvdXMgYXR0ZW1wdHMsIG5vIG9uZSBoYXMgYmVlbiBzdWNjZXNzZnVsIGluIGxhbmRpbmcgb24gaXQgKGFuZCBsZXQncyBub3QgY291bnQgRmVsZHNwYXIncyByZXBlYXRlZCBhdHRlbXB0cyB0byBjcmFzaCBpbnRvIGl0ISkuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVtYmVyIFR3aW5cIixcbiAgICBpbWFnZTogZW1iZXJUd2luSW1hZ2UsXG4gICAgb3V0bGluZTogZW1iZXJUd2luT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIGZpcnN0IGhhbGYgb2YgdGhlIEhvdXJnbGFzcyBUd2lucywgbW9zdGx5IG1hZGUgdXAgb2Ygcm9ja3kgZGVzZXJ0IHRlcnJhaW4sIHJpZGRsZWQgd2l0aCBudW1lcm91cyBkZWVwIGNhdmVybnMuIFdoYXQgc2V0cyBpdCBhcGFydCBpcyB0aGUgZXF1YXRvcmlhbCBjYW55b24gdGhhdCBhbG1vc3QgYXBwZWFycyB0byBkaXZpZGUgdGhlIHBsYW5ldCBpbnRvIHR3byBoYWx2ZXMuIE92ZXIgdGhlIGNvdXJzZSBvZiBhIFR3aW4gQ3ljbGUsIHRoZSBzYW5kcyBvZiBBc2ggVHdpbiBhcmUgc2xvd2x5IHB1bGxlZCBpbnRvIHRoaXMgY2FueW9uIGJ5IHRoZSBpcnJlc2lzdGlibGUgZm9yY2Ugb2YgZ3Jhdml0eSwgY3JlYXRpbmcgYSBicmVhdGh0YWtpbmcgc2lnaHQgdGhhdCBtdXN0IGJlIHNlZW4gdG8gYmUgYmVsaWV2ZWQhXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFzaCBUd2luXCIsXG4gICAgaW1hZ2U6IGFzaFR3aW5JbWFnZSxcbiAgICBvdXRsaW5lOiBhc2hUd2luT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIG90aGVyIGhhbGYgb2YgdGhlIEhvdXJnbGFzcyBUd2lucywgYSBzdHVubmluZyBwbGFuZXQgdGhhdCBib2FzdHMgYW4gYWxtb3N0IGVudGlyZWx5IHNhbmR5IHRlcnJhaW4uIFdoYXQncyBmYXNjaW5hdGluZyBhYm91dCB0aGlzIHBsYW5ldCBpcyB0aGF0IHRoZSBzYW5kcyBhcmUgaW4gY29uc3RhbnQgbW90aW9uLCBiZWluZyB0cmFuc3BvcnRlZCBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHRoZSB0d2lucyBpbiBhIGN5Y2xlIHRoYXQgbGFzdHMgYXBwcm94aW1hdGVseSA0NSBtaW51dGVzLiBCdXQgdGhhdCdzIG5vdCBhbGwhIEJlbmVhdGggdGhlIHNoaW1tZXJpbmcgc2FuZHMgbGllcyBhIHNtYWxsIGNvcmUgb2YgZ2xpdHRlcmluZyByb2NrIGFuZCB0b3dlcmluZyBzdHJ1Y3R1cmVzIG9mIE5vbWFpIG9yaWdpbiwganVzdCB3YWl0aW5nIHRvIGJlIGV4cGxvcmVkLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaW1iZXIgSGVhcnRoXCIsXG4gICAgaW1hZ2U6IHRpbWJlckhlYXJ0aEltYWdlLFxuICAgIG91dGxpbmU6IHRpbWJlckhlYXJ0aE91dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldlbGNvbWUgdG8gb3VyIHBsYW5ldCwgb3VyIGJlbG92ZWQgaG9tZSEgSXQncyBhIHJvY2t5IHdvcmxkIGNvdmVyZWQgaW4gZ3JlZW4gZ3Jhc3MsIGRvdHRlZCB3aXRoIHRyZWVzLCBtb3VudGFpbnMsIGFuZCBjcmF0ZXJzLiBPdXIgbGl0dGxlIHZpbGxhZ2UgaXMgc2l0dWF0ZWQgaW4gb25lIG9mIHRoZSBjcmF0ZXJzLCBhbmQgdGhlIGdleXNlcnMgb24gdGhlIHBsYW5ldCBhcmUgY29ubmVjdGVkIHRvIHVuZGVyZ3JvdW5kIHdhdGVyIGN1cnJlbnRzIHRoYXQgZmxvdyBiZW5lYXRoIHRoZSBzdXJmYWNlLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaGUgQXR0bGVyb2NrXCIsXG4gICAgaW1hZ2U6IGF0dGxlcm9ja0ltYWdlLFxuICAgIG91dGxpbmU6IGF0dGxlcm9ja091dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJlaG9sZCwgdGhlIG9ubHkgbW9vbiBvZiBUaW1iZXIgSGVhcnRoLCBhIHNtYWxsIGFuZCBiYXJyZW4gd29ybGQgbWFya2VkIGJ5IGNvdW50bGVzcyBjcmF0ZXJzLiBUaG91Z2ggaXQgbWF5IG5vdCBzZWVtIGxpa2UgbXVjaCwgd2UgaGF2ZSBtYW5hZ2VkIHRvIGVzdGFibGlzaCBhbiBvdXRwb3N0IGhlcmUsIHdoaWNoIGlzIGN1cnJlbnRseSBiZWluZyBvdmVyc2VlbiBieSBFc2tlci4gVGhlIG1vb24ncyBvbmx5IHBvaW50IG9mIGludGVyZXN0IGlzIGEgbXlzdGVyaW91cyBOb21haSBzdHJ1Y3R1cmUgdGhhdCB3ZSBiZWxpZXZlIGlzIGF0dGVtcHRpbmcgdG8gbG9jYXRlLi4uIHNvbWV0aGluZy4gV2hhdCBzZWNyZXRzIGNvdWxkIHRoaXMgbW9vbiBob2xkPyBPbmx5IHRpbWUgd2lsbCB0ZWxsIVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJCcml0dGxlIEhvbGxvd1wiLFxuICAgIGltYWdlOiBicml0dGxlSG9sbG93SW1hZ2UsXG4gICAgb3V0bGluZTogYnJpdHRsZUhvbGxvd091dGxpbmUsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkF0IGZpcnN0IGdsYW5jZSwgdGhpcyBwbGFuZXQgbWF5IGFwcGVhciB0byBiZSBub3RoaW5nIG1vcmUgdGhhbiBhIGp1bWJsZWQgbWFzcyBvZiBicml0dGxlIGJsdWUgcm9ja3MgaW4gZGlzYXJyYXkuIEJ1dCBkb24ndCBiZSBmb29sZWQsIGZvciBpdHMgdHJ1ZSB3b25kZXIgbGllcyBiZW5lYXRoIHRoZSBzdXJmYWNlLiBCZWxpZXZlIGl0IG9yIG5vdCwgdGhpcyBwbGFuZXQgaXMgYWxtb3N0IGVudGlyZWx5IGhvbGxvdywgd2l0aCBhIG1hc3NpdmUgYmxhY2sgaG9sZSBhdCBpdHMgY29yZSEgQnV0IHRoYXQncyBub3QgYWxsLCBmb3IgdGhlcmUgaXMgYWxzbyBhIG15c3RlcmlvdXMgaGFuZ2luZyBOb21haSBjaXR5IHR1Y2tlZCBhd2F5IGJlbmVhdGggdGhlIGNydXN0LiBXaGlsZSB3ZSBoYXZlIGF0dGVtcHRlZCB0byBleHBsb3JlIGl0LCB0aGUgY2l0eSByZW1haW5zIGEgY2hhbGxlbmdpbmcgbXlzdGVyeSB3YWl0aW5nIHRvIGJlIHNvbHZlZC5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG9sbG93J3MgTGFudGVyblwiLFxuICAgIGltYWdlOiBob2xsb3dzTGFudGVybkltYWdlLFxuICAgIG91dGxpbmU6IGhvbGxvd3NMYW50ZXJuT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2V0IHlvdXIgc2lnaHRzIG9uIHRoZSBvbmx5IG1vb24gb2YgQnJpdHRsZSBIb2xsb3chIEF0IGZpcnN0IGdsYW5jZSwgaXQgbWF5IHNlZW0gbGlrZSBub3RoaW5nIGJ1dCBhIGZpZXJ5IHdhc3RlbGFuZCwgd2l0aCBsYXZhIGZsb3dzIGFuZCB0b3dlcmluZyB2b2xjYW5vZXMgZG9taW5hdGluZyB0aGUgbGFuZHNjYXBlLiBCdXQgYmUgd2FybmVkLCB0aGlzIG1vb24gaG9sZHMgYSBkYW5nZXIgdGhhdCBleHRlbmRzIGZhciBiZXlvbmQgaXRzIHN1cmZhY2UuIFRoZSB2b2xjYW5vZXMgb2NjYXNpb25hbGx5IGxhdW5jaCBiYWxscyBvZiBtb2x0ZW4gbGF2YSBpbnRvIG9yYml0IGFyb3VuZCB0aGUgcGxhbmV0LCBtYWtpbmcgZXhwbG9yYXRpb24gb2YgdGhlIGFscmVhZHkgdHJlYWNoZXJvdXMgQnJpdHRsZSBIb2xsb3cgZXZlbiBtb3JlIGZlYXItaW5kdWNpbmcuIEJld2FyZSwgYnJhdmUgYWR2ZW50dXJlciFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2lhbnQncyBEZWVwXCIsXG4gICAgaW1hZ2U6IGdpYW50c0RlZXBJbWFnZSxcbiAgICBvdXRsaW5lOiBnaWFudHNEZWVwT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBhcXVhdGljIHdvcmxkIGlzIHNocm91ZGVkIGJ5IGEgdGhpY2sgbGF5ZXIgb2YgYXRtb3NwaGVyaWMgZm9nLCBtYWtpbmcgaXQgYSBzaWdodCB0byBiZWhvbGQuIFVuZm9ydHVuYXRlbHksIHRoZSBvbmx5IHNvbGlkIGdyb3VuZCBvbiB0aGlzIHBsYW5ldCBjb25zaXN0cyBvZiBzbWFsbCwgYmF0dGVyZWQgaXNsYW5kcyB0aGF0IGFyZSBjb25zdGFudGx5IHB1bW1lbGVkIGJ5IHZpb2xlbnQgdG9ybmFkb2VzIGFuZCB0aHVuZGVyc3Rvcm1zLiBXaGlsZSB0aGUgb2NlYW4gaXRzZWxmIGFwcGVhcnMgdG8gYmUgcmVsYXRpdmVseSBzYWZlLCB0aGUgc3Ryb25nIGN1cnJlbnRzIG1ha2UgaXQgaW1wb3NzaWJsZSB0byBkaXZlIHZlcnkgZGVlcC4gRGVzcGl0ZSBpdHMgY2hhbGxlbmdlcywgaG93ZXZlciwgdGhpcyBwbGFuZXQgaXMgY29uc2lkZXJlZCBvbmUgb2YgdGhlIHNhZmVyIGRlc3RpbmF0aW9ucyBpbiBvdXIgU29sYXIgU3lzdGVtLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOb21haSBDYW5ub25cIixcbiAgICBpbWFnZTogb3JiaXRhbFByb2JlQ2Fubm9uSW1hZ2UsXG4gICAgb3V0bGluZTogb3JiaXRhbFByb2JlQ2Fubm9uT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQmVob2xkLCB0aGUgbXlzdGVyaW91cyBOb21haSBzdHJ1Y3R1cmUgb3JiaXRpbmcgR2lhbnQncyBEZWVwISBUaGlzIGltcG9zaW5nIGVkaWZpY2UgaGFzIGxlZnQgdXMgc2NyYXRjaGluZyBvdXIgaGVhZHMsIGFzIHdlIGFyZSBzdGlsbCBub3QgZW50aXJlbHkgc3VyZSB3aGF0IGl0IGlzLiBTb21lIGhhdmUgbGlrZW5lZCBpdCB0byBhIG1hc3NpdmUgY2Fubm9uLCBkdWUgdG8gaXRzIGRpc3RpbmN0aXZlIHNoYXBlIGFuZCBzaXplLiBEZXNwaXRlIG91ciBjb25mdXNpb24sIHdlIHJlbWFpbiB1bmRldGVycmVkIGluIG91ciBxdWVzdCBmb3IgYW5zd2Vycy4gV2l0aCB0aGUgcmVjZW50IGRldmVsb3BtZW50IG9mIG91ciBOb21haSB0cmFuc2xhdGlvbiB0b29sLCB3ZSBob3BlIHRvIHVucmF2ZWwgdGhlIHNlY3JldHMgb2YgdGhpcyBlbmlnbWF0aWMgc3RydWN0dXJlIGFuZCB1bmNvdmVyIGl0cyB0cnVlIHB1cnBvc2UuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRhcmsgQnJhbWJsZVwiLFxuICAgIGltYWdlOiBkYXJrQnJhbWJsZUltYWdlLFxuICAgIG91dGxpbmU6IGRhcmtCcmFtYmxlT3V0bGluZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2VsY29tZSB0byB0aGUgZWVyaWUgcGxhbmV0IHRoYXQgd2FzIG9uY2UgYSBmcm96ZW4gYmFsbCBvZiB3YXRlciEgSG93ZXZlciwgYXMgbG9uZyBhcyB3ZSBjYW4gcmVtZW1iZXIsIGl0IGhhcyBiZWVuIG92ZXJ0YWtlbiBieSBhbiBlbm9ybW91cyB2aW5lIGdyb3d0aCB0aGF0IGhhcyB0b3JuIGl0IGFwYXJ0LiBUaGUgY2VudGVyIG9mIHRoaXMgZ3Jvd3RoIGlzIHBhcnRpY3VsYXJseSBpbnRyaWd1aW5nLCB3aXRoIG11bHRpcGxlIG9wZW5pbmdzIHJldmVhbGluZyBub3RoaW5nIGJ1dCBhbiBpbXBlbmV0cmFibGUgZm9nIGFuZCBteXN0ZXJpb3VzIGxpZ2h0cy4gRGVzcGl0ZSBvdXIgY3VyaW9zaXR5LCB3ZSBoYXZlIHlldCB0byBtdXN0ZXIgdGhlIGNvdXJhZ2UgdG8gZXhwbG9yZSB0aGUgaW50ZXJpb3Igb2YgdGhpcyBlbmlnbWF0aWMgY29yZS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGhlIEludGVybG9wZXJcIixcbiAgICBpbWFnZTogaW50ZXJsb3BlckltYWdlLFxuICAgIG91dGxpbmU6IGludGVybG9wZXJPdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIHNtYWxsIGNvbWV0IG9yYml0cyB0aGUgU3VuLCBsZWF2aW5nIGJlaGluZCBhIG1hZ25pZmljZW50IGxpZ2h0IGJsdWUgdGFpbCBhcyBpdCB0cmF2ZWxzIHRocm91Z2ggc3BhY2UuIEl0IGNvbnRhaW5zIGEgbGF5ZXIgb2Ygcm9jaywgYnV0IHRoZXJlIGlzIG5vdCBtdWNoIGVsc2UgdGhhdCB3ZSBrbm93IGFib3V0IGl0LiBJdHMgb3JiaXQgaXMgYSBzdGFibGUgZWxsaXBzZSwgYnV0IGR1ZSB0byBpdHMgaGlnaCBzcGVlZCBhbmQgc21hbGwgc2l6ZSwgd2UgaGF2ZSBub3QgYmVlbiBhYmxlIHRvIGxhbmQgb24gdGhlIGNvbWV0IHlldFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXaGl0ZSBIb2xlIFN0YXRpb25cIixcbiAgICBpbWFnZTogd2hpdGVIb2xlU3RhdGlvbkltYWdlLFxuICAgIG91dGxpbmU6IHdoaXRlSG9sZVN0YXRpb25PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBdCB0aGUgZWRnZSBvZiBvdXIgU29sYXIgU3lzdGVtIGlzIGEgV2hpdGUgSG9sZSB3aGljaCBpcyBqdXN0IGFzIGF3ZS1pbnNwaXJpbmcgYXMgQnJpdHRsZSBIb2xsb3cncyBCbGFjayBIb2xlLiBDbG9zZSB0byBpdCBpcyBhIE5vbWFpIGJ1aWxkaW5nIHRoYXQgYXBwZWFycyB0byBiZSBzb21lIGtpbmQgb2Ygb3V0cG9zdCBvciBzdGF0aW9uLCBlbmNsb3NlZCBpbiBhIGNpcmN1bGFyIGZyYW1lLiBUaGUgZnVuY3Rpb24gb2YgdGhpcyBidWlsZGluZyBpcyBjdXJyZW50bHkgdW5jbGVhciB0byB1cy5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUXVhbnR1bSBNb29uXCIsXG4gICAgaW1hZ2U6IHF1YW50dW1Nb29uSW1hZ2UsXG4gICAgb3V0bGluZTogcXVhbnR1bU1vb25PdXRsaW5lLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZWxjb21lIHRvIHRoZSBtb3N0IG15c3RlcmlvdXMgbW9vbiBpbiBvdXIgU29sYXIgU3lzdGVtIC0gdGhlIFF1YW50dW0gTW9vbiEgSXQgb3JiaXRzIGFyb3VuZCBhbGwgZml2ZSBwbGFuZXRzIHNpbXVsdGFuZW91c2x5LCBkZWZ5aW5nIHRoZSBsYXdzIG9mIHBoeXNpY3MgYXMgd2Uga25vdyB0aGVtLiBUaGlzIGVuaWdtYXRpYyBtb29uIHNlZW1zIHRvIGJlaGF2ZSBsaWtlIHRoZSBwdXJwbGUgc2hhcmQgaW4gdGhlIE11c2V1bTsgYXMgc29vbiBhcyB5b3UgbG9vayBhd2F5LCBpdCB2YW5pc2hlcyBhbmQgcmVhcHBlYXJzIGluIG9yYml0IGFyb3VuZCBhbm90aGVyIHBsYW5ldC4gVGhlIFF1YW50dW0gTW9vbiBpcyBzaHJvdWRlZCBpbiBhIHRoaWNrIGxheWVyIG9mIGZvZywgYW5kIHdlIGhhdmUgeWV0IHRvIG9ic2VydmUgaXRzIHRydWUgYXBwZWFyYW5jZS5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiPz8/XCIsXG4gICAgaW1hZ2U6IHN0cmFuZ2VySW1hZ2UsXG4gICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBEZWVwIFNwYWNlIFNhdGVsbGl0ZSwgbGF1bmNoZWQgcmVjZW50bHksIGhhcyBhbHJlYWR5IGNhcHR1cmVkIG1hZ25pZmljZW50IGltYWdlcyBvZiBvdXIgU29sYXIgU3lzdGVtLiBIb3dldmVyLCBhIHB1enpsaW5nIGFub21hbHkgaGFzIGJlZW4gZGV0ZWN0ZWQgaW4gb25lIGltYWdlIHRoYXQgd2UgY2Fubm90IGV4cGxhaW4uIEV2ZXJ5IGNlbGVzdGlhbCBib2R5IGlzIGFjY291bnRlZCBmb3IsIGJ1dCB0aGVyZSBpcyBhbiBpbmV4cGxpY2FibGUgc2hhZG93IG9uIHRoZSBzdW4uIFRvIGludmVzdGlnYXRlIHRoaXMgbXlzdGVyaW91cyBwaGVub21lbm9uLCB3ZSB0YXNrZWQgR2FiYnJvIHdpdGggY2hlY2tpbmcgdGhlIERlZXAgU3BhY2UgU2F0ZWxsaXRlIGZvciBhbnkgbWFsZnVuY3Rpb25zLCBidXQgdGhleSBmb3VuZCBub3RoaW5nIHdyb25nIHdpdGggaXQuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwbGFuZXREYXRhO1xuIiwiaW1wb3J0IHBsYW5ldERhdGEgZnJvbSBcIi4vcGxhbmV0c0RhdGFcIjtcblxuY2xhc3MgUGxhbmV0IHtcbiAgY29uc3RydWN0b3IoaW1hZ2UsIG91dGxpbmUsIG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5vdXRsaW5lID0gb3V0bGluZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBjcmVhdGVIVE1MRWxlbWVudCgpIHtcbiAgICBjb25zdCBwbGFuZXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGFuZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwbGFuZXRcIik7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW1hZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5pbWFnZSk7XG4gICAgaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImFsdFwiLCBgSW1hZ2Ugb2YgJHt0aGlzLm5hbWV9YCk7XG4gICAgaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VcIik7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kKGltYWdlRWxlbWVudCk7XG5cbiAgICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG5cbiAgICBpZiAoISh0aGlzLm91dGxpbmUgPT09IFwibm9uZVwiKSkge1xuICAgICAgY29uc3Qgb3V0bGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgb3V0bGluZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRoaXMub3V0bGluZSk7XG4gICAgICBvdXRsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYE91dGxpbmUgb2YgJHt0aGlzLm5hbWV9YCk7XG4gICAgICBvdXRsaW5lRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm91dGxpbmVcIik7XG4gICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmQob3V0bGluZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHBsYW5ldEVsZW1lbnQuYXBwZW5kKGltYWdlQ29udGFpbmVyLCBuYW1lRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50KTtcblxuICAgIHJldHVybiBwbGFuZXRFbGVtZW50O1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZVBsYW5ldHMgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYW5ldHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhbmV0c1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGFuZXRzXCIpO1xuICBwbGFuZXRzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgcGxhbmV0RWxlbWVudHMgPSBwbGFuZXREYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHBsYW5ldCA9IG5ldyBQbGFuZXQoZGF0YS5pbWFnZSwgZGF0YS5vdXRsaW5lLCBkYXRhLm5hbWUsIGRhdGEuZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBwbGFuZXQuY3JlYXRlSFRNTEVsZW1lbnQoKTtcbiAgfSk7XG5cbiAgcGxhbmV0c1NlY3Rpb24uYXBwZW5kKC4uLnBsYW5ldEVsZW1lbnRzKTtcbiAgcmV0dXJuIHBsYW5ldHNTZWN0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxhbmV0cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lVGFiXCI7XG5pbXBvcnQgY3JlYXRlUGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzVGFiXCI7XG5pbXBvcnQgY3JlYXRlQWJvdXQgZnJvbSBcIi4vYWJvdXRUYWJcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG5cbiAgLy8gV2VsY29tZSB0ZXh0XG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRleHRcIik7XG4gIGhlYWRlclRleHQuaW5uZXJIVE1MID0gXCJIZWFydGhzcGFjZVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgLy8gTmF2aWdhdGlvbiBidXR0b25zXG4gIGNvbnN0IGJ1dHRvbnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uc0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25zXCIpO1xuICBbXCJIb21lXCIsIFwiUGxhbmV0c1wiLCBcIkFib3V0XCJdLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidXR0b25cIik7XG4gICAgYnRuLmlubmVySFRNTCA9IGVsZW1lbnQ7XG5cbiAgICAvLyBGaXJzdCBidXR0b24gc2hvdWxkIGJlIHRoZSBkZWZhdWx0IHNlbGVjdFxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBidXR0b25zRWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgbGV0IGN1cnJlbnRUYWI7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgYnV0dG9uIHVuZGVybGluZXNcbiAgICAgIGNvbnN0IGJ1dHRvbnNHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uc0dyb3VwLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCB1bmRlcmxpbmUgdG8gY2xpY2tlZCBidXR0b25cbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICAgIC8vIFVubG9hZCBjdXJyZW50IHRhYlxuICAgICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5pZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGN1cnJlbnRDb250ZW50KTtcblxuICAgICAgLy8gTG9hZCBjb3JyZWN0IHRhYlxuICAgICAgaWYgKGVsZW1lbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjcmVhdGVIb21lKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiUGxhbmV0c1wiKSB7XG4gICAgICAgIGN1cnJlbnRUYWIgPSBjcmVhdGVQbGFuZXRzKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgPT09IFwiQWJvdXRcIikge1xuICAgICAgICBjdXJyZW50VGFiID0gY3JlYXRlQWJvdXQoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY3VycmVudFRhYiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikpO1xuICAgIH0pO1xuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uc0VsZW1lbnQpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG5cbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGV4dFwiKTtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSBcIkFydCBhbmQgR2FtZSBjb250ZW50IMKpIDIwMTkgTW9iaXVzIERpZ2l0YWxcIjtcbiAgZm9vdGVyU2VjdGlvbi5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcblxuICByZXR1cm4gZm9vdGVyU2VjdGlvbjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==