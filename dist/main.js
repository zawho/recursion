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

/***/ "./src/fibonacci.js":
/*!**************************!*\
  !*** ./src/fibonacci.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fibs: () => (/* binding */ fibs),\n/* harmony export */   fibsRec: () => (/* binding */ fibsRec)\n/* harmony export */ });\n// Non-recursive Fibonacci solution.\nfunction fibs(n) {\n    const arr = [];\n    let x = 0;\n    let y = 1;\n    let z = x + y;\n    arr.push(x, y, z);\n    for (let i = 3; i < n; i++) {\n        x = y;\n        y = z;\n        z = x + y;\n        arr.push(z);\n    }\n    return arr;\n}\n\n// Recursive Fibonacci solution.\nfunction fibsRec(n) {\n    /* i more or less found a solution but i don't really understand.\n    so im gonna come back after doing merge sort */\n}\n\n\n\n//# sourceURL=webpack://recursion/./src/fibonacci.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fibonacci__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fibonacci */ \"./src/fibonacci.js\");\n/* harmony import */ var _merge_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-sort */ \"./src/merge-sort.js\");\n // eslint-disable-line no-unused-vars\n\n\n// console.log(fibs(8));\n\n// console.log(fibsRec(8));\n\n(0,_merge_sort__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([4, 3, 2, 1]);\n\n//# sourceURL=webpack://recursion/./src/index.js?");

/***/ }),

/***/ "./src/merge-sort.js":
/*!***************************!*\
  !*** ./src/merge-sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-plusplus */\nfunction merge(arr1, arr2) {\n    const arr3 = [];\n    let i = 0;\n    let j = 0;\n    let k = 0;\n    while (i < (arr1.length) && j < arr2.length) {\n        if (arr1[i] < arr2[j]) {\n            arr3[k] = arr1[i];\n            i++;\n        } else {\n            arr3[k] = arr2[j];\n            j++;\n        }\n        k++;\n    }\n    while (i < arr1.length) {\n        arr3[k] = arr1[i];\n        i++;\n        k++;\n    }\n    while (j < arr2.length) {\n        arr3[k] = arr2[j];\n        j++;\n        k++;\n    }\n    return arr3;\n}\n\nfunction mergeSort(arr) {\n    if (arr.length <= 1) {\n        return arr;\n    }\n    const split = Math.floor(arr.length / 2);\n    const left = arr.slice(0, (split));\n    const right = arr.slice(split);\n    mergeSort(left);\n    mergeSort(right);\n    console.log(merge(left, right));\n    return merge(left, right);\n}\n  \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);\n\n//# sourceURL=webpack://recursion/./src/merge-sort.js?");

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