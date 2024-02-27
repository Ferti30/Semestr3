"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Koszt-dostawy-pizzy/page",{

/***/ "(app-pages-browser)/./app/Koszt-dostawy-pizzy/page.tsx":
/*!******************************************!*\
  !*** ./app/Koszt-dostawy-pizzy/page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PizzaPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PizzaPage() {\n    _s();\n    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deliveryCost, setDeliveryCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const calculateDeliveryCost = ()=>{\n        const costPerKm = 2; // Koszt dostawy za każdy kilometr\n        const distanceInKm = parseFloat(distance);\n        if (!isNaN(distanceInKm)) {\n            const totalCost = distanceInKm * costPerKm;\n            setDeliveryCost(totalCost.toFixed(2) + \" zł\");\n        } else {\n            setDeliveryCost(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Kalkulator dostawy pizzy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                type: \"text\",\n                placeholder: \"Wpisz liczbę kilometr\\xf3w\",\n                value: distance,\n                onChange: (e)=>setDistance(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: calculateDeliveryCost,\n                children: \"Oblicz koszt dostawy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            deliveryCost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Koszt dostawy: \",\n                    deliveryCost\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(PizzaPage, \"pz1GnGoLjw7X8GJtlp5C6X50BLU=\");\n_c = PizzaPage;\nvar _c;\n$RefreshReg$(_c, \"PizzaPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Lb3N6dC1kb3N0YXd5LXBpenp5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2M7QUFDRjtBQUU5QixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1RLHdCQUF3QjtRQUMxQixNQUFNQyxZQUFZLEdBQUcsa0NBQWtDO1FBQ3ZELE1BQU1DLGVBQWVDLFdBQVdQO1FBRWhDLElBQUksQ0FBQ1EsTUFBTUYsZUFBZTtZQUN0QixNQUFNRyxZQUFZSCxlQUFlRDtZQUNqQ0YsZ0JBQWdCTSxVQUFVQyxPQUFPLENBQUMsS0FBSztRQUMzQyxPQUFPO1lBQ0hQLGdCQUFnQjtRQUNwQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNROzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2QsdURBQUtBO2dCQUNGZSxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPZjtnQkFDUGdCLFVBQVUsQ0FBQ0MsSUFBTWhCLFlBQVlnQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFL0MsOERBQUNsQix5REFBTUE7Z0JBQUNzQixTQUFTZjswQkFBdUI7Ozs7OztZQUN2Q0YsOEJBQWdCLDhEQUFDa0I7O29CQUFFO29CQUFnQmxCOzs7Ozs7Ozs7Ozs7O0FBR2hEO0dBN0J3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0tvc3p0LWRvc3Rhd3ktcGl6enkvcGFnZS50c3g/MmQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpenphUGFnZSgpIHtcclxuICAgIGNvbnN0IFtkaXN0YW5jZSwgc2V0RGlzdGFuY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RlbGl2ZXJ5Q29zdCwgc2V0RGVsaXZlcnlDb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZURlbGl2ZXJ5Q29zdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjb3N0UGVyS20gPSAyOyAvLyBLb3N6dCBkb3N0YXd5IHphIGthxbxkeSBraWxvbWV0clxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlSW5LbSA9IHBhcnNlRmxvYXQoZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKGRpc3RhbmNlSW5LbSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gZGlzdGFuY2VJbkttICogY29zdFBlckttO1xyXG4gICAgICAgICAgICBzZXREZWxpdmVyeUNvc3QodG90YWxDb3N0LnRvRml4ZWQoMikgKyAnIHrFgicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERlbGl2ZXJ5Q29zdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkthbGt1bGF0b3IgZG9zdGF3eSBwaXp6eTwvaDE+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcGlzeiBsaWN6YsSZIGtpbG9tZXRyw7N3XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkaXN0YW5jZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlzdGFuY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NhbGN1bGF0ZURlbGl2ZXJ5Q29zdH0+T2JsaWN6IGtvc3p0IGRvc3Rhd3k8L0J1dHRvbj5cclxuICAgICAgICAgICAge2RlbGl2ZXJ5Q29zdCAmJiA8cD5Lb3N6dCBkb3N0YXd5OiB7ZGVsaXZlcnlDb3N0fTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiUGl6emFQYWdlIiwiZGlzdGFuY2UiLCJzZXREaXN0YW5jZSIsImRlbGl2ZXJ5Q29zdCIsInNldERlbGl2ZXJ5Q29zdCIsImNhbGN1bGF0ZURlbGl2ZXJ5Q29zdCIsImNvc3RQZXJLbSIsImRpc3RhbmNlSW5LbSIsInBhcnNlRmxvYXQiLCJpc05hTiIsInRvdGFsQ29zdCIsInRvRml4ZWQiLCJkaXYiLCJoMSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Koszt-dostawy-pizzy/page.tsx\n"));

/***/ })

});