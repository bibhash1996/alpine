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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        hasError: false,\n        message: \"\"\n    });\n    const login = async ()=>{\n        setLoading(true);\n        var data = JSON.stringify({\n            email,\n            password\n        });\n        var config = {\n            method: \"post\",\n            url: \"http://localhost:8080/api/auth/login\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()(config);\n            console.log(response.data);\n            if (response.data.status === \"ok\") {\n                window.localStorage.setItem(\"token\", response.data.data.token);\n                router.push(\"/\");\n            } else {\n                setLoading(false);\n                setError({\n                    hasError: true,\n                    message: response.data.error.message || \"Error loggong in\"\n                });\n            }\n        } catch (error) {\n            setLoading(false);\n            setError({\n                hasError: true,\n                message: error.message || \"Error loggong in\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Email\",\n                type: \"email\",\n                onChange: (e)=>setEmail(e.target.value),\n                value: email\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Password\",\n                type: \"password\",\n                onChange: (e)=>setPassword(e.target.value),\n                value: password\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: login,\n                disabled: loading,\n                className: \"nextBtn\",\n                children: loading ? \"Loading ...\" : \"Log in\"\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"/signup\"),\n                disabled: loading,\n                className: \"prevBtn\",\n                children: \"Go to Signup\"\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            error.hasError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n                lineNumber: 77,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/login.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7Z0JBQUV1QyxRQUFRLEVBQUVsQyxPQUFPO2dCQUFFd0IsU0FBUyxFQUFDLFNBQVM7MEJBQzNEeEIsT0FBTyxHQUFHLGFBQWEsR0FBRyxRQUFROzs7OztvQkFDNUI7MEJBQ1QsOERBQUNnQyxRQUFNO2dCQUNMQyxPQUFPLEVBQUUsSUFBTS9CLE1BQU0sQ0FBQ29CLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDWSxRQUFRLEVBQUVsQyxPQUFPO2dCQUNqQndCLFNBQVMsRUFBQyxTQUFTOzBCQUNwQixjQUVEOzs7OztvQkFBUztZQUNSckIsS0FBSyxDQUFDRSxRQUFRLGtCQUFJLDhEQUFDOEIsR0FBQzswQkFBRWhDLEtBQUssQ0FBQ0csT0FBTzs7Ozs7b0JBQUs7Ozs7OztZQUNyQyxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBpbmUvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHtcbiAgICBoYXNFcnJvcjogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gIH0+KHsgaGFzRXJyb3I6IGZhbHNlLCBtZXNzYWdlOiBcIlwiIH0pO1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pO1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoY29uZmlnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5kYXRhLnRva2VuKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEVycm9yKHtcbiAgICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UgfHwgXCJFcnJvciBsb2dnb25nIGluXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldEVycm9yKHtcbiAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6IChlcnJvciBhcyBhbnkpLm1lc3NhZ2UgfHwgXCJFcnJvciBsb2dnb25nIGluXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgIHR5cGU9e1wiZW1haWxcIn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgLz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbn0gZGlzYWJsZWQ9e2xvYWRpbmd9IGNsYXNzTmFtZT1cIm5leHRCdG5cIj5cbiAgICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmcgLi4uXCIgOiBcIkxvZyBpblwifVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3NpZ251cFwiKX1cbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZCdG5cIlxuICAgICAgPlxuICAgICAgICBHbyB0byBTaWdudXBcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2Vycm9yLmhhc0Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsImVycm9yIiwic2V0RXJyb3IiLCJoYXNFcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbmZpZyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();