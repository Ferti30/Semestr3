"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! convex/react */ \"(app-pages-browser)/./node_modules/convex/dist/esm/react/index.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/table */ \"(app-pages-browser)/./components/ui/table.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createTodo = (0,convex_react__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_3__.api.todos.createTodo);\n    const todos = (0,convex_react__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_3__.api.todos.getTodos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0\",\n                    children: \"Tabela z bazy Convex z możliwością dodawania wpis\\xf3w\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableHeader, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableRow, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableHead, {\n                                    className: \"w-[400px]\",\n                                    children: \"Tabela z bazy Convex\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableBody, {\n                            children: todos === null || todos === void 0 ? void 0 : todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableRow, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_6__.TableCell, {\n                                        className: \"font-medium\",\n                                        children: todo.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 33\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full max-w-sm items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                value: text,\n                                onChange: (e)=>setText(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"submit\",\n                                children: \"Dodaj wpis\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Paweł\\\\source\\\\repos\\\\Semestr3\\\\app\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"tfE9bhYq8DOqc5mWY4U1fWQya3Q=\", false, function() {\n    return [\n        convex_react__WEBPACK_IMPORTED_MODULE_2__.useMutation,\n        convex_react__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUVhO0FBRVY7QUFDYztBQUNQO0FBQ087QUFDRjtBQVVmO0FBTWYsU0FBU2E7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNYyxhQUFhZix5REFBV0EsQ0FBQ0Usc0RBQUdBLENBQUNjLEtBQUssQ0FBQ0QsVUFBVTtJQUNuRCxNQUFNQyxRQUFRYixzREFBUUEsQ0FBQ0Qsc0RBQUdBLENBQUNjLEtBQUssQ0FBQ0MsUUFBUTtJQUl6QyxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDWiw0RUFBQ0M7OzhCQUNHLDhEQUFDQztvQkFBR0YsV0FBVTs4QkFBNkU7Ozs7Ozs4QkFHM0YsOERBQUNiLHVEQUFLQTs7c0NBQ0YsOERBQUNJLDZEQUFXQTtzQ0FDUiw0RUFBQ0MsMERBQVFBOzBDQUNMLDRFQUFDRiwyREFBU0E7b0NBQUNVLFdBQVU7OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3pDLDhEQUFDWiwyREFBU0E7c0NBQ0xTLGtCQUFBQSw0QkFBQUEsTUFBT00sR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDYiwwREFBUUE7OENBQ0wsNEVBQUNILDJEQUFTQTt3Q0FBQ1csV0FBVTtrREFBZUksS0FBS1YsSUFBSTs7Ozs7O21DQURsQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTzNCLDhEQUFDQztvQkFBS0MsVUFBVUM7OEJBQ1osNEVBQUNQO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ2QsdURBQUtBO2dDQUFDdUIsT0FBT2Y7Z0NBQU1nQixVQUFVLENBQUNDLElBQU1oQixRQUFRZ0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MENBQzNELDhEQUFDeEIseURBQU1BO2dDQUFDNEIsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QztHQXJDd0JwQjs7UUFFRFoscURBQVdBO1FBQ2hCRyxrREFBUUE7OztLQUhGUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcImNvbnZleC9yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2NvbnZleC9fZ2VuZXJhdGVkL2FwaVwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ2NvbnZleC9yZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBUYWJsZSxcclxuICAgIFRhYmxlQm9keSxcclxuICAgIFRhYmxlQ2FwdGlvbixcclxuICAgIFRhYmxlQ2VsbCxcclxuICAgIFRhYmxlSGVhZCxcclxuICAgIFRhYmxlSGVhZGVyLFxyXG4gICAgVGFibGVSb3csXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJsZVwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IHVzZU11dGF0aW9uKGFwaS50b2Rvcy5jcmVhdGVUb2RvKTtcclxuICAgIGNvbnN0IHRvZG9zID0gdXNlUXVlcnkoYXBpLnRvZG9zLmdldFRvZG9zKTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2Nyb2xsLW0tMjAgYm9yZGVyLWIgcGItMiB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IGZpcnN0Om10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBUYWJlbGEgeiBiYXp5IENvbnZleCB6IG1vxbxsaXdvxZtjacSFIGRvZGF3YW5pYSB3cGlzw7N3XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ3LVs0MDBweF1cIj5UYWJlbGEgeiBiYXp5IENvbnZleDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zPy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPnt0b2RvLnRleHR9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtYXgtdy1zbSBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9kYWogd3BpczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU11dGF0aW9uIiwidXNlU3RhdGUiLCJhcGkiLCJ1c2VRdWVyeSIsIkJ1dHRvbiIsIklucHV0IiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwiSG9tZSIsInRleHQiLCJzZXRUZXh0IiwiY3JlYXRlVG9kbyIsInRvZG9zIiwiZ2V0VG9kb3MiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJtYXAiLCJ0b2RvIiwiaW5kZXgiLCJmb3JtIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});