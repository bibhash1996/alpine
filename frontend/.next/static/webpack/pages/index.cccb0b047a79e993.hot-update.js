"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), user = ref1[0], setUser = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        hasError: false,\n        message: \"\"\n    }), error = ref2[0], setError = ref2[1];\n    var getUser = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(token) {\n            var config, response;\n            return _Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLoading(true);\n                        config = {\n                            method: \"get\",\n                            url: \"http://localhost:8080/api/alpine/\",\n                            headers: {\n                                Authorization: \"Bearer \".concat(token)\n                            }\n                        };\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default()(config);\n                    case 4:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        setLoading(false);\n                        if (response.data.status === \"ok\") {\n                            setUser(response.data.data);\n                        } else {\n                            setError({\n                                hasError: true,\n                                message: response.data.error.message\n                            });\n                        }\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // return response.data;\n        }));\n        return function getUser(token) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setError({\n            hasError: false,\n            message: \"\"\n        });\n        var token = window.localStorage.getItem(\"token\");\n        if (token) {\n            // Fetch profle\n            getUser(token).then(function(response) {}).catch(function(err) {\n                setLoading(false);\n                console.log(err);\n                if (err.response && err.response.status == 401) {\n                    router.push(\"/login\");\n                }\n            });\n        } else {\n            router.push(\"/login\");\n        }\n    }, []);\n    var updateUser = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var token, data, config, response;\n            return _Users_bibhashsingh_Documents_alpine_alpine_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (user) {\n                            _ctx.next = 2;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 2:\n                        setLoading(true);\n                        setError({\n                            hasError: false,\n                            message: \"\"\n                        });\n                        token = window.localStorage.getItem(\"token\");\n                        if (token) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        data = JSON.stringify({\n                            firstName: user.firstName,\n                            lastName: user.lastName\n                        });\n                        config = {\n                            method: \"post\",\n                            url: \"http://localhost:8080/api/alpine/profile\",\n                            headers: {\n                                Authorization: \"Bearer \".concat(token),\n                                \"Content-Type\": \"application/json\"\n                            },\n                            data: data\n                        };\n                        _ctx.prev = 9;\n                        _ctx.next = 12;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default()(config);\n                    case 12:\n                        response = _ctx.sent;\n                        setLoading(false);\n                        if (response.data.status !== \"ok\") {\n                            setError({\n                                hasError: true,\n                                message: response.data.error.message\n                            });\n                            getUser(token).then();\n                        }\n                        _ctx.next = 21;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t0 = _ctx[\"catch\"](9);\n                        setLoading(false);\n                        setError({\n                            hasError: true,\n                            message: _ctx.t0.message || \"Error updating profile\"\n                        });\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    9,\n                    17\n                ]\n            ]);\n        }));\n        return function updateUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            error.hasError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: error.message\n            }, void 0, false, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                lineNumber: 108,\n                columnNumber: 26\n            }, _this),\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"form-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"First Name \"\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: user.firstName,\n                        onChange: function(e) {\n                            return setUser((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, user), {\n                                firstName: e.target.value\n                            }));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Last Name \"\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: user.lastName,\n                        onChange: function(e) {\n                            return setUser((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, user), {\n                                lastName: e.target.value\n                            }));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Email \"\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        value: user.email,\n                        onChange: function(e) {},\n                        disabled: true\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: updateUser,\n                        disabled: loading,\n                        children: loading ? \"Loading...\" : \"Update Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bibhashsingh/Documents/alpine/alpine/pages/index.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"SLIluWy593wtECcqHs68v1FjYII=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEVBQUVwQyxJQUFJLENBQUN3QyxLQUFLO3dCQUFFSCxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLLEVBQUU7d0JBQUVHLFFBQVE7Ozs7OzZCQUFHO2tDQUUxRCw4REFBQ0MsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFbEIsVUFBVTt3QkFBRWdCLFFBQVEsRUFBRTNDLE9BQU87a0NBQzNDQSxPQUFPLEdBQUcsWUFBWSxHQUFHLGdCQUFnQjs7Ozs7NkJBQ25DOzs7Ozs7cUJBQ0w7Ozs7OzthQUVKLENBQ047Q0FDSDtHQTVIS0YsSUFBSTs7UUFDT0wsa0RBQVM7OztBQURwQkssS0FBQUEsSUFBSTtBQThIViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBEYXRlO1xuICB1cGRhdGVEYXRlOiBEYXRlO1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHsgaGFzRXJyb3I6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZyB9Pih7XG4gICAgaGFzRXJyb3I6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdldFVzZXIgPSBhc3luYyAodG9rZW46IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2FscGluZS9cIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhjb25maWcpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XG4gICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yKHsgaGFzRXJyb3I6IHRydWUsIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFcnJvcih7IGhhc0Vycm9yOiBmYWxzZSwgbWVzc2FnZTogXCJcIiB9KTtcbiAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgLy8gRmV0Y2ggcHJvZmxlXG4gICAgICBnZXRVc2VyKHRva2VuKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHt9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXVzZXIpIHJldHVybjtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKHsgaGFzRXJyb3I6IGZhbHNlLCBtZXNzYWdlOiBcIlwiIH0pO1xuICAgIGNvbnN0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgaWYgKCF0b2tlbikgcmV0dXJuO1xuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZmlyc3ROYW1lOiB1c2VyLmZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgIH0pO1xuXG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9hbHBpbmUvcHJvZmlsZVwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGNvbmZpZyk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyAhPT0gXCJva1wiKSB7XG4gICAgICAgIHNldEVycm9yKHtcbiAgICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBnZXRVc2VyKHRva2VuKS50aGVuKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgc2V0RXJyb3Ioe1xuICAgICAgICBoYXNFcnJvcjogdHJ1ZSxcbiAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfHwgXCJFcnJvciB1cGRhdGluZyBwcm9maWxlXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7ZXJyb3IuaGFzRXJyb3IgJiYgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cblxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm94XCI+XG4gICAgICAgICAgPGxhYmVsPkZpcnN0IE5hbWUgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyLmZpcnN0TmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAgICAgLi4udXNlcixcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3VzZXIubGFzdE5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8bGFiZWw+RW1haWwgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXIuZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4ge319IGRpc2FibGVkIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwZGF0ZVVzZXJ9IGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIlVwZGF0ZSBQcm9maWxlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJheGlvcyIsIkhvbWUiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwiaGFzRXJyb3IiLCJtZXNzYWdlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdldFVzZXIiLCJ0b2tlbiIsImNvbmZpZyIsInJlc3BvbnNlIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN0YXR1cyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJwdXNoIiwidXBkYXRlVXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInAiLCJsYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJlbWFpbCIsImRpc2FibGVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});