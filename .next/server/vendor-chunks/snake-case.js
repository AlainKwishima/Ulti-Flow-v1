"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/snake-case";
exports.ids = ["vendor-chunks/snake-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/snake-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/snake-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.snakeCase = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(rsc)/./node_modules/tslib/tslib.es6.mjs\");\nvar dot_case_1 = __webpack_require__(/*! dot-case */ \"(rsc)/./node_modules/dot-case/dist/index.js\");\nfunction snakeCase(input, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    return dot_case_1.dotCase(input, tslib_1.__assign({\n        delimiter: \"_\"\n    }, options));\n}\nexports.snakeCase = snakeCase; //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc25ha2UtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxpQkFBaUIsR0FBRyxLQUFLO0FBQ3pCLElBQUlHLFVBQVVDLG1CQUFPQSxDQUFDLHVEQUFPO0FBQzdCLElBQUlDLGFBQWFELG1CQUFPQSxDQUFDLDZEQUFVO0FBQ25DLFNBQVNGLFVBQVVJLEtBQUssRUFBRUMsT0FBTztJQUM3QixJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVLENBQUM7SUFBRztJQUN4QyxPQUFPRixXQUFXRyxPQUFPLENBQUNGLE9BQU9ILFFBQVFNLFFBQVEsQ0FBQztRQUFFQyxXQUFXO0lBQUksR0FBR0g7QUFDMUU7QUFDQVAsaUJBQWlCLEdBQUdFLFdBQ3BCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi10ZXN0Ly4vbm9kZV9tb2R1bGVzL3NuYWtlLWNhc2UvZGlzdC9pbmRleC5qcz84MzIyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zbmFrZUNhc2UgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBkb3RfY2FzZV8xID0gcmVxdWlyZShcImRvdC1jYXNlXCIpO1xuZnVuY3Rpb24gc25ha2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90X2Nhc2VfMS5kb3RDYXNlKGlucHV0LCB0c2xpYl8xLl9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIl9cIiB9LCBvcHRpb25zKSk7XG59XG5leHBvcnRzLnNuYWtlQ2FzZSA9IHNuYWtlQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInNuYWtlQ2FzZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiZG90X2Nhc2VfMSIsImlucHV0Iiwib3B0aW9ucyIsImRvdENhc2UiLCJfX2Fzc2lnbiIsImRlbGltaXRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/snake-case/dist/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/snake-case/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/snake-case/dist/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.snakeCase = void 0;\nvar tslib_1 = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\nvar dot_case_1 = __webpack_require__(/*! dot-case */ \"(ssr)/./node_modules/dot-case/dist/index.js\");\nfunction snakeCase(input, options) {\n    if (options === void 0) { options = {}; }\n    return dot_case_1.dotCase(input, tslib_1.__assign({ delimiter: \"_\" }, options));\n}\nexports.snakeCase = snakeCase;\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc25ha2UtY2FzZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixjQUFjLG1CQUFPLENBQUMsdURBQU87QUFDN0IsaUJBQWlCLG1CQUFPLENBQUMsNkRBQVU7QUFDbkM7QUFDQSw4QkFBOEI7QUFDOUIsd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rldi10ZXN0Ly4vbm9kZV9tb2R1bGVzL3NuYWtlLWNhc2UvZGlzdC9pbmRleC5qcz9iMTY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zbmFrZUNhc2UgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBkb3RfY2FzZV8xID0gcmVxdWlyZShcImRvdC1jYXNlXCIpO1xuZnVuY3Rpb24gc25ha2VDYXNlKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICByZXR1cm4gZG90X2Nhc2VfMS5kb3RDYXNlKGlucHV0LCB0c2xpYl8xLl9fYXNzaWduKHsgZGVsaW1pdGVyOiBcIl9cIiB9LCBvcHRpb25zKSk7XG59XG5leHBvcnRzLnNuYWtlQ2FzZSA9IHNuYWtlQ2FzZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/snake-case/dist/index.js\n");

/***/ })

};
;