/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DogCardComponent: () => (/* binding */ DogCardComponent),\n/* harmony export */   ModalWindowComponent: () => (/* binding */ ModalWindowComponent)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\nclass BaseComponent {\r\n    constructor(object) {\r\n      this.name = object.title;\r\n      this.age = object.age;\r\n      this.description = object.description;\r\n      this.gender = object.sex;\r\n      this.link = object.dogImage;\r\n      this._element = null;\r\n    }\r\n  \r\n    getHTML() {\r\n      return ``;\r\n    }\r\n  \r\n    getElement() {\r\n      if (!this._element) {\r\n        this._element = (0,_view__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getHTML());\r\n      }\r\n  \r\n      return this._element;\r\n    }\r\n  \r\n    removeElement() {\r\n      this._element = null;\r\n    }\r\n  }\r\n  \r\nclass DogCardComponent extends BaseComponent {\r\n    constructor(object) {\r\n      super(object);\r\n    }\r\n  \r\n    getHTML() {\r\n      return `<div class=\"container\">\r\n          <img class=\"container-dog-picture\" src=\"https://usersdogs.dmytrominochkin.cloud${this.link}\">\r\n          <div class=\"container-dog-info\">\r\n              <span class=\"text-base dog-info-name\">${this.name}</span>\r\n              <span class=\"text-base dog-info-gender\">${this.gender}</span>\r\n          </div>\r\n      </div>`;\r\n    }\r\n  \r\n    setOnClickHandler(handler) {\r\n      let element = this.getElement();\r\n      $(element).on(\"click\", (evt) => {\r\n        evt.stopPropagation();\r\n        handler();\r\n      });\r\n    }\r\n  }\r\n  \r\nclass ModalWindowComponent extends BaseComponent {\r\n    constructor(object) {\r\n      super(object);\r\n    }\r\n  \r\n    getHTML() {\r\n      return `<div class=\"window-wrapper\">  \r\n          <div class=\"background-mask\">\r\n          </div>\r\n          <div class=\"modal-window\">\r\n          <img class=\"modal-window-dog-picture\" src=\"https://usersdogs.dmytrominochkin.cloud${this.link}\">\r\n          <div class=\"modal-window-info\">\r\n              <span class=\"text-base info-name\"> ${this.name}</span>\r\n              <div class=\"info-data\">\r\n                  <span class=\"data-title\">Sex</span>\r\n                  <span class=\"data-data\">${this.gender}</span>\r\n              </div>\r\n              <div class=\"info-data\">\r\n                  <span class=\"data-title\">Age</span>\r\n                  <span class=\"data-data\">${this.age}</span>\r\n              </div>\r\n              <div class=\"info-data\">\r\n                  <span class=\"data-title\">Personality</span>\r\n                  <span class=\"data-data\">${this.description}</span>\r\n              </div>\r\n          </div>\r\n          <button class=\"info-adopt-button\">Adopt Me</button>\r\n      </div>\r\n      </div>`;\r\n    }\r\n  \r\n    setOnClickHandler(handler){\r\n        let element = this.getElement().querySelector(\".background-mask\");\r\n        element.addEventListener(\"click\", (evt)=>{\r\n            evt.stopPropagation();\r\n            handler();\r\n        });\r\n    }\r\n  }\n\n//# sourceURL=webpack://lab9/./src/generator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./src/generator.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\r\n\r\n\r\n\r\nclass AppController {\r\n  constructor() {\r\n    this.dogControllers = [];\r\n  }\r\n\r\n  init() {\r\n    let sender = new _model__WEBPACK_IMPORTED_MODULE_1__.RequestSender();\r\n    sender.sendJSONRequest().then((data) => {\r\n      data.forEach((element) => {\r\n        let dog = new DogController(element);\r\n        dog.showDog();\r\n        this.dogControllers.push(dog);\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nclass DogController {\r\n  constructor(dogObject) {\r\n    this.dog = dogObject;\r\n    this.component = null;\r\n    this.modalWindowComponent = null;\r\n    this.showModalWindow = this.showModalWindow.bind(this);\r\n    this.closeModalWindow = this.closeModalWindow.bind(this);\r\n    this.view = new _view__WEBPACK_IMPORTED_MODULE_2__.View();\r\n  }\r\n\r\n  showDog() {\r\n    this.component = new _generator__WEBPACK_IMPORTED_MODULE_0__.DogCardComponent(this.dog);\r\n    this.view.render(this.component, \".list\", \"BEFOREEND\");\r\n    this.component.setOnClickHandler(this.showModalWindow);\r\n  }\r\n\r\n  showModalWindow() {\r\n    this.modalWindowComponent = new _generator__WEBPACK_IMPORTED_MODULE_0__.ModalWindowComponent(this.dog);\r\n    this.view.render(this.modalWindowComponent, \"body\", \"AFTERBEGIN\");\r\n    this.modalWindowComponent.setOnClickHandler(this.closeModalWindow);\r\n  }\r\n\r\n  closeModalWindow() {\r\n    $(\".window-wrapper\").remove();\r\n    this.modalWindowComponent = null;\r\n  }\r\n}\r\n\r\nlet app = new AppController();\r\napp.init();\n\n//# sourceURL=webpack://lab9/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequestSender: () => (/* binding */ RequestSender)\n/* harmony export */ });\nclass RequestSender {\r\n    constructor() {}\r\n  \r\n    sendJSONRequest() {\r\n      return $.getJSON('https://usersdogs.dmytrominochkin.cloud/dogs');\r\n    }\r\n}\n\n//# sourceURL=webpack://lab9/./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   View: () => (/* binding */ View),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   remove: () => (/* binding */ remove)\n/* harmony export */ });\nfunction createElement(template) {\r\n  return $(template).get(0);\r\n}\r\n\r\nconst remove = (component) => {\r\n  component.getElement().remove();\r\n};\r\n\r\nclass View {\r\n  render(element, containerName, place) {\r\n    let component = element.getElement();\r\n    let container = $(containerName);\r\n\r\n    switch (place) {\r\n      case \"AFTERBEGIN\":\r\n        container.prepend(component);\r\n        break;\r\n      case \"BEFOREEND\":\r\n        container.append(component);\r\n        break;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://lab9/./src/view.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;