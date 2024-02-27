"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(ssr)/./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ n),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction e(e) {\n    this.message = e;\n}\ne.prototype = new Error, e.prototype.name = \"InvalidCharacterError\";\nvar r =  false || function(r) {\n    var t = String(r).replace(/=+$/, \"\");\n    if (t.length % 4 == 1) throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n    for(var n, o, a = 0, i = 0, c = \"\"; o = t.charAt(i++); ~o && (n = a % 4 ? 64 * n + o : o, a++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * a & 6)) : 0)o = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);\n    return c;\n};\nfunction t(e) {\n    var t = e.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch(t.length % 4){\n        case 0:\n            break;\n        case 2:\n            t += \"==\";\n            break;\n        case 3:\n            t += \"=\";\n            break;\n        default:\n            throw \"Illegal base64url string!\";\n    }\n    try {\n        return function(e) {\n            return decodeURIComponent(r(e).replace(/(.)/g, function(e, r) {\n                var t = r.charCodeAt(0).toString(16).toUpperCase();\n                return t.length < 2 && (t = \"0\" + t), \"%\" + t;\n            }));\n        }(t);\n    } catch (e) {\n        return r(t);\n    }\n}\nfunction n(e) {\n    this.message = e;\n}\nfunction o(e, r) {\n    if (\"string\" != typeof e) throw new n(\"Invalid token specified\");\n    var o = !0 === (r = r || {}).header ? 0 : 1;\n    try {\n        return JSON.parse(t(e.split(\".\")[o]));\n    } catch (e) {\n        throw new n(\"Invalid token specified: \" + e.message);\n    }\n}\nn.prototype = new Error, n.prototype.name = \"InvalidTokenError\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);\n //# sourceMappingURL=jwt-decode.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLEVBQUVBLENBQUM7SUFBRSxJQUFJLENBQUNDLE9BQU8sR0FBQ0Q7QUFBQztBQUFDQSxFQUFFRSxTQUFTLEdBQUMsSUFBSUMsT0FBTUgsRUFBRUUsU0FBUyxDQUFDRSxJQUFJLEdBQUM7QUFBd0IsSUFBSUMsSUFBRSxNQUFpRUMsSUFBRSxTQUFTRCxDQUFDO0lBQUUsSUFBSUksSUFBRUMsT0FBT0wsR0FBR00sT0FBTyxDQUFDLE9BQU07SUFBSSxJQUFHRixFQUFFRyxNQUFNLEdBQUMsS0FBRyxHQUFFLE1BQU0sSUFBSVosRUFBRTtJQUFxRSxJQUFJLElBQUlhLEdBQUVDLEdBQUVDLElBQUUsR0FBRUMsSUFBRSxHQUFFQyxJQUFFLElBQUdILElBQUVMLEVBQUVTLE1BQU0sQ0FBQ0YsTUFBSyxDQUFDRixLQUFJRCxDQUFBQSxJQUFFRSxJQUFFLElBQUUsS0FBR0YsSUFBRUMsSUFBRUEsR0FBRUMsTUFBSSxLQUFHRSxLQUFHUCxPQUFPUyxZQUFZLENBQUMsTUFBSU4sS0FBSSxFQUFDLElBQUVFLElBQUUsTUFBSSxFQUFFRCxJQUFFLG9FQUFvRU0sT0FBTyxDQUFDTjtJQUFHLE9BQU9HO0FBQUM7QUFBRSxTQUFTUixFQUFFVCxDQUFDO0lBQUUsSUFBSVMsSUFBRVQsRUFBRVcsT0FBTyxDQUFDLE1BQUssS0FBS0EsT0FBTyxDQUFDLE1BQUs7SUFBSyxPQUFPRixFQUFFRyxNQUFNLEdBQUM7UUFBRyxLQUFLO1lBQUU7UUFBTSxLQUFLO1lBQUVILEtBQUc7WUFBSztRQUFNLEtBQUs7WUFBRUEsS0FBRztZQUFJO1FBQU07WUFBUSxNQUFLO0lBQTJCO0lBQUMsSUFBRztRQUFDLE9BQU8sU0FBU1QsQ0FBQztZQUFFLE9BQU9xQixtQkFBbUJoQixFQUFFTCxHQUFHVyxPQUFPLENBQUMsUUFBUSxTQUFTWCxDQUFDLEVBQUNLLENBQUM7Z0JBQUUsSUFBSUksSUFBRUosRUFBRWlCLFVBQVUsQ0FBQyxHQUFHQyxRQUFRLENBQUMsSUFBSUMsV0FBVztnQkFBRyxPQUFPZixFQUFFRyxNQUFNLEdBQUMsS0FBSUgsQ0FBQUEsSUFBRSxNQUFJQSxDQUFBQSxHQUFHLE1BQUlBO1lBQUM7UUFBSSxFQUFFQTtJQUFFLEVBQUMsT0FBTVQsR0FBRTtRQUFDLE9BQU9LLEVBQUVJO0lBQUU7QUFBQztBQUFDLFNBQVNJLEVBQUViLENBQUM7SUFBRSxJQUFJLENBQUNDLE9BQU8sR0FBQ0Q7QUFBQztBQUFDLFNBQVNjLEVBQUVkLENBQUMsRUFBQ0ssQ0FBQztJQUFFLElBQUcsWUFBVSxPQUFPTCxHQUFFLE1BQU0sSUFBSWEsRUFBRTtJQUEyQixJQUFJQyxJQUFFLENBQUMsTUFBSSxDQUFDVCxJQUFFQSxLQUFHLENBQUMsR0FBR29CLE1BQU0sR0FBQyxJQUFFO0lBQUUsSUFBRztRQUFDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ2xCLEVBQUVULEVBQUU0QixLQUFLLENBQUMsSUFBSSxDQUFDZCxFQUFFO0lBQUUsRUFBQyxPQUFNZCxHQUFFO1FBQUMsTUFBTSxJQUFJYSxFQUFFLDhCQUE0QmIsRUFBRUMsT0FBTztJQUFDO0FBQUM7QUFBQ1ksRUFBRVgsU0FBUyxHQUFDLElBQUlDLE9BQU1VLEVBQUVYLFNBQVMsQ0FBQ0UsSUFBSSxHQUFDO0FBQW9CLGlFQUFlVSxDQUFDQSxFQUFDO0FBQStCLENBQzVzQywwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanM/MWQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKGUpe3RoaXMubWVzc2FnZT1lfWUucHJvdG90eXBlPW5ldyBFcnJvcixlLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmF0b2ImJndpbmRvdy5hdG9iLmJpbmQod2luZG93KXx8ZnVuY3Rpb24ocil7dmFyIHQ9U3RyaW5nKHIpLnJlcGxhY2UoLz0rJC8sXCJcIik7aWYodC5sZW5ndGglND09MSl0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO2Zvcih2YXIgbixvLGE9MCxpPTAsYz1cIlwiO289dC5jaGFyQXQoaSsrKTt+byYmKG49YSU0PzY0Km4rbzpvLGErKyU0KT9jKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZuPj4oLTIqYSY2KSk6MClvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5pbmRleE9mKG8pO3JldHVybiBjfTtmdW5jdGlvbiB0KGUpe3ZhciB0PWUucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpO3N3aXRjaCh0Lmxlbmd0aCU0KXtjYXNlIDA6YnJlYWs7Y2FzZSAyOnQrPVwiPT1cIjticmVhaztjYXNlIDM6dCs9XCI9XCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1wiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwifXRyeXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyKGUpLnJlcGxhY2UoLyguKS9nLChmdW5jdGlvbihlLHIpe3ZhciB0PXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gdC5sZW5ndGg8MiYmKHQ9XCIwXCIrdCksXCIlXCIrdH0pKSl9KHQpfWNhdGNoKGUpe3JldHVybiByKHQpfX1mdW5jdGlvbiBuKGUpe3RoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIG8oZSxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkXCIpO3ZhciBvPSEwPT09KHI9cnx8e30pLmhlYWRlcj8wOjE7dHJ5e3JldHVybiBKU09OLnBhcnNlKHQoZS5zcGxpdChcIi5cIilbb10pKX1jYXRjaChlKXt0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBcIitlLm1lc3NhZ2UpfX1uLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRUb2tlbkVycm9yXCI7ZXhwb3J0IGRlZmF1bHQgbztleHBvcnR7biBhcyBJbnZhbGlkVG9rZW5FcnJvcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3QtZGVjb2RlLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJlIiwibWVzc2FnZSIsInByb3RvdHlwZSIsIkVycm9yIiwibmFtZSIsInIiLCJ3aW5kb3ciLCJhdG9iIiwiYmluZCIsInQiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwibiIsIm8iLCJhIiwiaSIsImMiLCJjaGFyQXQiLCJmcm9tQ2hhckNvZGUiLCJpbmRleE9mIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJoZWFkZXIiLCJKU09OIiwicGFyc2UiLCJzcGxpdCIsIkludmFsaWRUb2tlbkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jwt-decode/build/jwt-decode.esm.js\n");

/***/ })

};
;