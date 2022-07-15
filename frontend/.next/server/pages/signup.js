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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.tsx":
/*!**************************!*\
  !*** ./pages/signup.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        hasError: false,\n        message: \"\"\n    });\n    const signup = async ()=>{\n        setLoading(true);\n        var data = JSON.stringify({\n            email,\n            password\n        });\n        var config = {\n            method: \"post\",\n            url: \"http://localhost:8080/api/auth/signup\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            data: data\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()(config);\n            console.log(response.data);\n            if (response.data.status === \"ok\") {\n                router.push(\"/login\");\n            } else {\n                setLoading(false);\n                setError({\n                    hasError: true,\n                    message: response.data.error.message || \"Error signing up\"\n                });\n            }\n        } catch (error) {\n            setLoading(false);\n            setError({\n                hasError: true,\n                message: error.message || \"Error signing up.\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Email\",\n                type: \"email\",\n                onChange: (e)=>setEmail(e.target.value),\n                value: email\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: \"Password\",\n                type: \"password\",\n                onChange: (e)=>setPassword(e.target.value),\n                value: password\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: signup,\n                disabled: loading,\n                className: \"nextBtn\",\n                children: loading ? \"Loading ...\" : \"Sign up\"\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"/login\"),\n                disabled: loading,\n                className: \"prevBtn\",\n                children: \"Go to Login\"\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            error.hasError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n                lineNumber: 78,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/signup.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVQsOERBQUM2QixRQUFNO2dCQUNMQyxPQUFPLEVBQUUsSUFBTTVCLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BDWSxRQUFRLEVBQUUvQixPQUFPO2dCQUNqQnFCLFNBQVMsRUFBQyxTQUFTOzBCQUNwQixhQUVEOzs7OztvQkFBUztZQUVSbEIsS0FBSyxDQUFDRSxRQUFRLGtCQUFJLDhEQUFDMkIsR0FBQzswQkFBRTdCLEtBQUssQ0FBQ0csT0FBTzs7Ozs7b0JBQUs7Ozs7OztZQUNyQyxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHBpbmUvLi9wYWdlcy9zaWdudXAudHN4PzBlYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTx7XG4gICAgaGFzRXJyb3I6IGJvb2xlYW47XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICB9Pih7IGhhc0Vycm9yOiBmYWxzZSwgbWVzc2FnZTogXCJcIiB9KTtcblxuICBjb25zdCBzaWdudXAgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmQsXG4gICAgfSk7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL3NpZ251cFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBkYXRhOiBkYXRhLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoY29uZmlnKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICAgIGhhc0Vycm9yOiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSB8fCBcIkVycm9yIHNpZ25pbmcgdXBcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogKGVycm9yIGFzIGFueSkubWVzc2FnZSB8fCBcIkVycm9yIHNpZ25pbmcgdXAuXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgIHR5cGU9e1wiZW1haWxcIn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgIC8+XG5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgLz5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWdudXB9IGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9XCJuZXh0QnRuXCI+XG4gICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nIC4uLlwiIDogXCJTaWduIHVwXCJ9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9sb2dpblwiKX1cbiAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cInByZXZCdG5cIlxuICAgICAgPlxuICAgICAgICBHbyB0byBMb2dpblxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtlcnJvci5oYXNFcnJvciAmJiA8cD57ZXJyb3IubWVzc2FnZX08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2dpbiIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFzRXJyb3IiLCJtZXNzYWdlIiwic2lnbnVwIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25maWciLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/signup.tsx"));
module.exports = __webpack_exports__;

})();