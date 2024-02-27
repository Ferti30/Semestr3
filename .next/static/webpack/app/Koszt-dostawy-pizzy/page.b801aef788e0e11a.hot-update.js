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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PizzaPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PizzaPage() {\n    _s();\n    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deliveryCost, setDeliveryCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const calculateDeliveryCost = ()=>{\n        const costPerKm = 2; // Koszt dostawy za każdy kilometr\n        const distanceInKm = parseFloat(distance);\n        if (!isNaN(distanceInKm)) {\n            const totalCost = distanceInKm * costPerKm;\n            setDeliveryCost(totalCost.toFixed(2) + \" zł\");\n        } else {\n            setDeliveryCost(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Kalkulator dostawy pizzy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                width: \"50%\",\n                type: \"text\",\n                placeholder: \"Wpisz liczbę kilometr\\xf3w\",\n                value: distance,\n                onChange: (e)=>setDistance(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: calculateDeliveryCost,\n                children: \"Oblicz koszt dostawy\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            deliveryCost && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Koszt dostawy: \",\n                    deliveryCost\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 30\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\Koszt-dostawy-pizzy\\\\page.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(PizzaPage, \"pz1GnGoLjw7X8GJtlp5C6X50BLU=\");\n_c = PizzaPage;\nvar _c;\n$RefreshReg$(_c, \"PizzaPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Lb3N6dC1kb3N0YXd5LXBpenp5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ2M7QUFDRjtBQUU5QixTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1RLHdCQUF3QjtRQUMxQixNQUFNQyxZQUFZLEdBQUcsa0NBQWtDO1FBQ3ZELE1BQU1DLGVBQWVDLFdBQVdQO1FBRWhDLElBQUksQ0FBQ1EsTUFBTUYsZUFBZTtZQUN0QixNQUFNRyxZQUFZSCxlQUFlRDtZQUNqQ0YsZ0JBQWdCTSxVQUFVQyxPQUFPLENBQUMsS0FBSztRQUMzQyxPQUFPO1lBQ0hQLGdCQUFnQjtRQUNwQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNROzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2QsdURBQUtBO2dCQUNGZSxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPaEI7Z0JBQ1BpQixVQUFVLENBQUNDLElBQU1qQixZQUFZaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRS9DLDhEQUFDbkIseURBQU1BO2dCQUFDdUIsU0FBU2hCOzBCQUF1Qjs7Ozs7O1lBQ3ZDRiw4QkFBZ0IsOERBQUNtQjs7b0JBQUU7b0JBQWdCbkI7Ozs7Ozs7Ozs7Ozs7QUFHaEQ7R0E5QndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvS29zenQtZG9zdGF3eS1waXp6eS9wYWdlLnRzeD8yZDkxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGl6emFQYWdlKCkge1xyXG4gICAgY29uc3QgW2Rpc3RhbmNlLCBzZXREaXN0YW5jZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGVsaXZlcnlDb3N0LCBzZXREZWxpdmVyeUNvc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlRGVsaXZlcnlDb3N0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvc3RQZXJLbSA9IDI7IC8vIEtvc3p0IGRvc3Rhd3kgemEga2HFvGR5IGtpbG9tZXRyXHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VJbkttID0gcGFyc2VGbG9hdChkaXN0YW5jZSk7XHJcblxyXG4gICAgICAgIGlmICghaXNOYU4oZGlzdGFuY2VJbkttKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSBkaXN0YW5jZUluS20gKiBjb3N0UGVyS207XHJcbiAgICAgICAgICAgIHNldERlbGl2ZXJ5Q29zdCh0b3RhbENvc3QudG9GaXhlZCgyKSArICcgesWCJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RGVsaXZlcnlDb3N0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+S2Fsa3VsYXRvciBkb3N0YXd5IHBpenp5PC9oMT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldwaXN6IGxpY3pixJkga2lsb21ldHLDs3dcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rpc3RhbmNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREaXN0YW5jZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2FsY3VsYXRlRGVsaXZlcnlDb3N0fT5PYmxpY3oga29zenQgZG9zdGF3eTwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7ZGVsaXZlcnlDb3N0ICYmIDxwPktvc3p0IGRvc3Rhd3k6IHtkZWxpdmVyeUNvc3R9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiSW5wdXQiLCJQaXp6YVBhZ2UiLCJkaXN0YW5jZSIsInNldERpc3RhbmNlIiwiZGVsaXZlcnlDb3N0Iiwic2V0RGVsaXZlcnlDb3N0IiwiY2FsY3VsYXRlRGVsaXZlcnlDb3N0IiwiY29zdFBlckttIiwiZGlzdGFuY2VJbkttIiwicGFyc2VGbG9hdCIsImlzTmFOIiwidG90YWxDb3N0IiwidG9GaXhlZCIsImRpdiIsImgxIiwid2lkdGgiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Koszt-dostawy-pizzy/page.tsx\n"));

/***/ })

});