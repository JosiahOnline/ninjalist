"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/ninjas/[id]";
exports.ids = ["pages/ninjas/[id]"];
exports.modules = {

/***/ "./pages/ninjas/[id].js":
/*!******************************!*\
  !*** ./pages/ninjas/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticPaths = async ()=>{\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    const paths = data.map((ninja)=>{\n        return {\n            params: {\n                id: ninja.id.toString()\n            }\n        };\n    });\n    return {\n        paths: paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users/\" + id);\n    const data = await res.json();\n    return {\n        props: {\n            ninja: data\n        }\n    };\n};\nconst Details = ({ ninja  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: ninja.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Josiah\\\\Documents\\\\Next JS\\\\net_ninja\\\\ninjalist\\\\pages\\\\ninjas\\\\[id].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Josiah\\\\Documents\\\\Next JS\\\\net_ninja\\\\ninjalist\\\\pages\\\\ninjas\\\\[id].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.website\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Josiah\\\\Documents\\\\Next JS\\\\net_ninja\\\\ninjalist\\\\pages\\\\ninjas\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ninja.address.city\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Josiah\\\\Documents\\\\Next JS\\\\net_ninja\\\\ninjalist\\\\pages\\\\ninjas\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Josiah\\\\Documents\\\\Next JS\\\\net_ninja\\\\ninjalist\\\\pages\\\\ninjas\\\\[id].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uaW5qYXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQU8sTUFBTUEsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztJQUNyRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFN0IsTUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFJO1FBQzlCLE9BQU87WUFDTEMsTUFBTSxFQUFFO2dCQUFDQyxFQUFFLEVBQUVGLEtBQUssQ0FBQ0UsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBRTtTQUNuQztLQUNGLENBQUM7SUFFRixPQUFPO1FBQ0xMLEtBQUssRUFBRUEsS0FBSztRQUNaTSxRQUFRLEVBQUUsS0FBSztLQUNoQjtDQUNGO0FBRU0sTUFBTUMsY0FBYyxHQUFHLE9BQU9DLE9BQU8sR0FBSztJQUMvQyxNQUFNSixFQUFFLEdBQUdJLE9BQU8sQ0FBQ0wsTUFBTSxDQUFDQyxFQUFFO0lBQzVCLE1BQU1SLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkNBQTZDLEdBQUdPLEVBQUUsQ0FBQztJQUMzRSxNQUFNTixJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7SUFFN0IsT0FBTztRQUNMVSxLQUFLLEVBQUU7WUFBRVAsS0FBSyxFQUFFSixJQUFJO1NBQUU7S0FDdkI7Q0FDRjtBQUVELE1BQU1ZLE9BQU8sR0FBRyxDQUFDLEVBQUVSLEtBQUssR0FBRSxHQUFLO0lBQzdCLHFCQUNFLDhEQUFDUyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBR1YsS0FBSyxDQUFDVyxJQUFJOzs7Ozt5QkFBTzswQkFDdkIsOERBQUNDLEdBQUM7MEJBQUdaLEtBQUssQ0FBQ2EsS0FBSzs7Ozs7eUJBQU07MEJBQ3RCLDhEQUFDRCxHQUFDOzBCQUFHWixLQUFLLENBQUNjLE9BQU87Ozs7O3lCQUFNOzBCQUN4Qiw4REFBQ0YsR0FBQzswQkFBR1osS0FBSyxDQUFDZSxPQUFPLENBQUNDLElBQUk7Ozs7O3lCQUFNOzs7Ozs7aUJBQ3pCLENBQ047Q0FDSDtBQUVELGlFQUFlUixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uaW5qYWxpc3QvLi9wYWdlcy9uaW5qYXMvW2lkXS5qcz81Nzc0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJyk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAobmluamEgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7aWQ6IG5pbmphLmlkLnRvU3RyaW5nKCkgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsIC8vb3IganVzdCBwYXRocyBhbHNvIHdpbGwgZG8uIFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJyArIGlkKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IG5pbmphOiBkYXRhIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IERldGFpbHMgPSAoeyBuaW5qYSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57IG5pbmphLm5hbWUgfTwvaDE+XHJcbiAgICAgIDxwPnsgbmluamEuZW1haWwgfTwvcD5cclxuICAgICAgPHA+eyBuaW5qYS53ZWJzaXRlIH08L3A+XHJcbiAgICAgIDxwPnsgbmluamEuYWRkcmVzcy5jaXR5IH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiXSwibmFtZXMiOlsiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGF0aHMiLCJtYXAiLCJuaW5qYSIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiRGV0YWlscyIsImRpdiIsImgxIiwibmFtZSIsInAiLCJlbWFpbCIsIndlYnNpdGUiLCJhZGRyZXNzIiwiY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ninjas/[id].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/ninjas/[id].js"));
module.exports = __webpack_exports__;

})();