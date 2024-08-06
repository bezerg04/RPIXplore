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

/***/ "./src/component/map/page.js":
/*!***********************************!*\
  !*** ./src/component/map/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n//AIzaSyDtT88p17SCFuYEZHvDDiohpIhZl7pmYQ4\n//npm install @react-google-maps/api tailwindcss\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"500px\"\n};\nconst locations = [\n    {\n        zone: \"Freshman Hill\",\n        dorms: [\n            {\n                name: \"Barton Hall\",\n                lat: 42.729106980120996,\n                lng: -73.67408661163303\n            },\n            {\n                name: \"Bray Hall\",\n                lat: 42.72874357409226,\n                lng: -73.67397491860618\n            },\n            {\n                name: \"Hall Hall\",\n                lat: 42.72862365194546,\n                lng: -73.67535750701602\n            },\n            {\n                name: \"Nason Hall\",\n                lat: 42.72773070884515,\n                lng: -73.67348891968427\n            },\n            {\n                name: \"Nugent Hall\",\n                lat: 42.72754946396228,\n                lng: -73.6750467622503\n            },\n            {\n                name: \"Sharp Hall\",\n                lat: 42.72699533480291,\n                lng: -73.67471038624485\n            },\n            {\n                name: \"Warren Hall\",\n                lat: 42.728103106109685,\n                lng: -73.67551709586671\n            }\n        ]\n    },\n    {\n        zone: \"In Campus\",\n        dorms: [\n            {\n                name: \"E-Complex\",\n                lat: 42.73132065977962,\n                lng: -73.67922250649707\n            },\n            {\n                name: \"North Hall\",\n                lat: 42.73132344989214,\n                lng: -73.67981431606012\n            },\n            {\n                name: \"Quadrangle Complex (Quad)\",\n                lat: 42.73063087581129,\n                lng: -73.67743373544864\n            }\n        ]\n    },\n    {\n        zone: \"Past Burdett Ave\",\n        dorms: [\n            {\n                name: \"Bryckwyck Apartments\",\n                lat: 42.73473081077628,\n                lng: -73.66373665957707\n            },\n            {\n                name: \"Stacwyck Apartments\",\n                lat: 42.73359030110175,\n                lng: -73.66491375820921\n            },\n            {\n                name: \"Burdett Avenue Residence Hall\",\n                lat: 42.7312020555503,\n                lng: -73.67114585835905\n            },\n            {\n                name: \"Colonie Apartments\",\n                lat: 42.736968815384,\n                lng: -73.67011545492971\n            },\n            ,\n            {\n                name: \"RAHP A (Colvin and Albright)\",\n                lat: 42.731059204758616,\n                lng: -73.66939927922246\n            },\n            {\n                name: \"RAHP B (Beman and Brinsmade)\",\n                lat: 42.73489208402806,\n                lng: -73.66538482113461\n            },\n            {\n                name: \"Rousseau Apartments\",\n                lat: 42.7344063634127,\n                lng: -73.66425207747068\n            },\n            {\n                name: \"Williams Apartments\",\n                lat: 42.73395681034878,\n                lng: -73.66452460005917\n            }\n        ]\n    },\n    {\n        zone: \"Down the Hill\",\n        dorms: [\n            {\n                name: \"Blitman Residence Hall\",\n                lat: 42.73120026761296,\n                lng: -73.68599472026295\n            },\n            {\n                name: \"City Station\",\n                lat: 42.72775594008568,\n                lng: -73.68736374320818\n            },\n            {\n                name: \"Polytechnic Residential Commons\",\n                lat: 42.72210326965186,\n                lng: -73.67950083409157\n            }\n        ]\n    }\n];\nfunction MapComponent() {\n    _s();\n    const [mapCenter, setMapCenter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 42.7298,\n        lng: -73.6789\n    }); //default RPI\n    // Function to generate buttons for dorms of a given zone\n    const generateDormButtons = (zoneIndex)=>locations[zoneIndex].dorms.map((dorm, dormIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"my-1 px-4 py-1 border text-black rounded hover:bg-blue-300 transition duration-150\",\n                onClick: ()=>setMapCenter({\n                        lat: dorm.lat,\n                        lng: dorm.lng\n                    }),\n                children: dorm.name\n            }, dormIndex, false, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-left mt-6 mb-2 ml-6\",\n                children: \"Interactive Map\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n                googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                    mapContainerStyle: containerStyle,\n                    center: mapCenter,\n                    zoom: 16,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Marker, {\n                        position: mapCenter\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 gap-6 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-center\",\n                                children: \"Freshman Hill\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center mt-0\",\n                                children: generateDormButtons(0)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-center\",\n                                children: \"In Campus\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center mt-0\",\n                                children: generateDormButtons(1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-center\",\n                                children: \"Past Burdett Ave\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center mt-0\",\n                                children: generateDormButtons(2)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold text-center\",\n                                children: \"Down the Hill\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center mt-0\",\n                                children: generateDormButtons(3)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\map\\\\page.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(MapComponent, \"HzcWKvOpsGVS+as6d+g1+ALHVhQ=\");\n_c = MapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapComponent);\nvar _c;\n$RefreshReg$(_c, \"MapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztJQVNYLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUFHSCxXQUFVOzBCQUE4Qzs7Ozs7OzBCQUM1RCw4REFBQ3JCLDhEQUFVQTtnQkFBQ3lCLGtCQUFrQkMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyw2QkFBNkI7MEJBQ3JFLDRFQUFDN0IsNkRBQVNBO29CQUNSOEIsbUJBQW1CMUI7b0JBQ25CMkIsUUFBUWpCO29CQUNSa0IsTUFBTTs4QkFFTiw0RUFBQzlCLDBEQUFNQTt3QkFBQytCLFVBQVVuQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEIsOERBQUNVO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDWTtnQ0FBR1osV0FBVTswQ0FBb0M7Ozs7OzswQ0FDbEQsOERBQUNFO2dDQUFJRixXQUFVOzBDQUNaTixvQkFBb0I7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNRO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ1k7Z0NBQUdaLFdBQVU7MENBQW9DOzs7Ozs7MENBQ2xELDhEQUFDRTtnQ0FBSUYsV0FBVTswQ0FDWk4sb0JBQW9COzs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDUTt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNZO2dDQUFHWixXQUFVOzBDQUFvQzs7Ozs7OzBDQUNsRCw4REFBQ0U7Z0NBQUlGLFdBQVU7MENBQ1pOLG9CQUFvQjs7Ozs7Ozs7Ozs7O2tDQUd6Qiw4REFBQ1E7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDWTtnQ0FBR1osV0FBVTswQ0FBb0M7Ozs7OzswQ0FDbEQsOERBQUNFO2dDQUFJRixXQUFVOzBDQUNaTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQztHQTFEU0g7S0FBQUE7QUE0RFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9tYXAvcGFnZS5qcz9lZjYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG4vL0FJemFTeUR0VDg4cDE3U0NGdVlFWkh2RERpb2hwSWhabDdwbVlRNFxyXG4vL25wbSBpbnN0YWxsIEByZWFjdC1nb29nbGUtbWFwcy9hcGkgdGFpbHdpbmRjc3NcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCBMb2FkU2NyaXB0LCBNYXJrZXIgfSBmcm9tICdAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIGhlaWdodDogJzUwMHB4JywgLy8gQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkXHJcbn07XHJcblxyXG5jb25zdCBsb2NhdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHpvbmU6ICdGcmVzaG1hbiBIaWxsJyxcclxuICAgICAgZG9ybXM6IFtcclxuICAgICAgICB7IG5hbWU6ICdCYXJ0b24gSGFsbCcsIGxhdDogNDIuNzI5MTA2OTgwMTIwOTk2LCBsbmc6IC03My42NzQwODY2MTE2MzMwMyB9LCBcclxuICAgICAgICB7IG5hbWU6ICdCcmF5IEhhbGwnLCBsYXQ6IDQyLjcyODc0MzU3NDA5MjI2LCBsbmc6IC03My42NzM5NzQ5MTg2MDYxOCB9LCBcclxuICAgICAgICB7IG5hbWU6ICdIYWxsIEhhbGwnLCBsYXQ6IDQyLjcyODYyMzY1MTk0NTQ2LCBsbmc6IC03My42NzUzNTc1MDcwMTYwMiB9LCBcclxuICAgICAgICB7IG5hbWU6ICdOYXNvbiBIYWxsJywgbGF0OiA0Mi43Mjc3MzA3MDg4NDUxNSwgbG5nOiAtNzMuNjczNDg4OTE5Njg0MjcgfSwgXHJcbiAgICAgICAgeyBuYW1lOiAnTnVnZW50IEhhbGwnLCBsYXQ6IDQyLjcyNzU0OTQ2Mzk2MjI4LCBsbmc6IC03My42NzUwNDY3NjIyNTAzIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU2hhcnAgSGFsbCcsIGxhdDogNDIuNzI2OTk1MzM0ODAyOTEsIGxuZzogLTczLjY3NDcxMDM4NjI0NDg1IH0sICAgXHJcbiAgICAgICAgeyBuYW1lOiAnV2FycmVuIEhhbGwnLCBsYXQ6IDQyLjcyODEwMzEwNjEwOTY4NSwgbG5nOiAtNzMuNjc1NTE3MDk1ODY2NzEgfSwgXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB6b25lOiAnSW4gQ2FtcHVzJyxcclxuICAgICAgZG9ybXM6IFtcclxuICAgICAgICB7IG5hbWU6ICdFLUNvbXBsZXgnLCBsYXQ6IDQyLjczMTMyMDY1OTc3OTYyLCBsbmc6IC03My42NzkyMjI1MDY0OTcwNyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05vcnRoIEhhbGwnLCBsYXQ6IDQyLjczMTMyMzQ0OTg5MjE0LCBsbmc6IC03My42Nzk4MTQzMTYwNjAxMiB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1F1YWRyYW5nbGUgQ29tcGxleCAoUXVhZCknLCBsYXQ6IDQyLjczMDYzMDg3NTgxMTI5LCBsbmc6IC03My42Nzc0MzM3MzU0NDg2NCB9ICwgXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHpvbmU6ICdQYXN0IEJ1cmRldHQgQXZlJyxcclxuICAgICAgICBkb3JtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiAnQnJ5Y2t3eWNrIEFwYXJ0bWVudHMnLCBsYXQ6IDQyLjczNDczMDgxMDc3NjI4LCBsbmc6IC03My42NjM3MzY2NTk1NzcwNyB9LCBcclxuICAgICAgICAgIHsgbmFtZTogJ1N0YWN3eWNrIEFwYXJ0bWVudHMnLCBsYXQ6IDQyLjczMzU5MDMwMTEwMTc1LCBsbmc6IC03My42NjQ5MTM3NTgyMDkyMSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnQnVyZGV0dCBBdmVudWUgUmVzaWRlbmNlIEhhbGwnLCBsYXQ6IDQyLjczMTIwMjA1NTU1MDMsIGxuZzogLTczLjY3MTE0NTg1ODM1OTA1IH0sXHJcbiAgICAgICAgICB7IG5hbWU6ICdDb2xvbmllIEFwYXJ0bWVudHMnLCBsYXQ6IDQyLjczNjk2ODgxNTM4NCwgbG5nOiAtNzMuNjcwMTE1NDU0OTI5NzEgfSwgLCBcclxuICAgICAgICAgIHsgbmFtZTogJ1JBSFAgQSAoQ29sdmluIGFuZCBBbGJyaWdodCknLCBsYXQ6IDQyLjczMTA1OTIwNDc1ODYxNiwgbG5nOiAtNzMuNjY5Mzk5Mjc5MjIyNDYgfSxcclxuICAgICAgICAgIHsgbmFtZTogJ1JBSFAgQiAoQmVtYW4gYW5kIEJyaW5zbWFkZSknLCBsYXQ6IDQyLjczNDg5MjA4NDAyODA2LCBsbmc6IC03My42NjUzODQ4MjExMzQ2MSB9LFxyXG4gICAgICAgICAgeyBuYW1lOiAnUm91c3NlYXUgQXBhcnRtZW50cycsIGxhdDogNDIuNzM0NDA2MzYzNDEyNywgbG5nOiAtNzMuNjY0MjUyMDc3NDcwNjggfSwgXHJcbiAgICAgICAgICB7IG5hbWU6ICdXaWxsaWFtcyBBcGFydG1lbnRzJywgbGF0OiA0Mi43MzM5NTY4MTAzNDg3OCwgbG5nOiAtNzMuNjY0NTI0NjAwMDU5MTcgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHpvbmU6ICdEb3duIHRoZSBIaWxsJyxcclxuICAgICAgICBkb3JtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiAnQmxpdG1hbiBSZXNpZGVuY2UgSGFsbCcsIGxhdDogNDIuNzMxMjAwMjY3NjEyOTYsIGxuZzogLTczLjY4NTk5NDcyMDI2Mjk1IH0sIFxyXG4gICAgICAgICAgeyBuYW1lOiAnQ2l0eSBTdGF0aW9uJywgbGF0OiA0Mi43Mjc3NTU5NDAwODU2OCwgbG5nOiAtNzMuNjg3MzYzNzQzMjA4MTggfSwgXHJcbiAgICAgICAgICB7IG5hbWU6ICdQb2x5dGVjaG5pYyBSZXNpZGVudGlhbCBDb21tb25zJywgbGF0OiA0Mi43MjIxMDMyNjk2NTE4NiwgbG5nOiAtNzMuNjc5NTAwODM0MDkxNTcgfSBcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTWFwQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IFttYXBDZW50ZXIsIHNldE1hcENlbnRlcl0gPSB1c2VTdGF0ZSh7IGxhdDogNDIuNzI5OCwgbG5nOiAtNzMuNjc4OSB9KTsgLy9kZWZhdWx0IFJQSVxyXG5cclxuICAvLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBidXR0b25zIGZvciBkb3JtcyBvZiBhIGdpdmVuIHpvbmVcclxuICBjb25zdCBnZW5lcmF0ZURvcm1CdXR0b25zID0gKHpvbmVJbmRleCkgPT4gKFxyXG4gICAgbG9jYXRpb25zW3pvbmVJbmRleF0uZG9ybXMubWFwKChkb3JtLCBkb3JtSW5kZXgpID0+IChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGtleT17ZG9ybUluZGV4fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm15LTEgcHgtNCBweS0xIGJvcmRlciB0ZXh0LWJsYWNrIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS0zMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1hcENlbnRlcih7IGxhdDogZG9ybS5sYXQsIGxuZzogZG9ybS5sbmcgfSl9XHJcbiAgICAgID5cclxuICAgICAgICB7ZG9ybS5uYW1lfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICkpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1sZWZ0IG10LTYgbWItMiBtbC02XCI+SW50ZXJhY3RpdmUgTWFwPC9oMT5cclxuICAgICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleT17cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dPT0dMRV9NQVBTX0FQSV9LRVl9PlxyXG4gICAgICAgIDxHb29nbGVNYXBcclxuICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cclxuICAgICAgICAgIGNlbnRlcj17bWFwQ2VudGVyfVxyXG4gICAgICAgICAgem9vbT17MTZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17bWFwQ2VudGVyfSAvPlxyXG4gICAgICAgIDwvR29vZ2xlTWFwPlxyXG4gICAgICA8L0xvYWRTY3JpcHQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtNCBnYXAtNiBwLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5GcmVzaG1hbiBIaWxsPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMFwiPlxyXG4gICAgICAgICAgICB7Z2VuZXJhdGVEb3JtQnV0dG9ucygwKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPkluIENhbXB1czwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTBcIj5cclxuICAgICAgICAgICAge2dlbmVyYXRlRG9ybUJ1dHRvbnMoMSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXJcIj5QYXN0IEJ1cmRldHQgQXZlPC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMFwiPlxyXG4gICAgICAgICAgICB7Z2VuZXJhdGVEb3JtQnV0dG9ucygyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPkRvd24gdGhlIEhpbGw8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC0wXCI+XHJcbiAgICAgICAgICAgIHtnZW5lcmF0ZURvcm1CdXR0b25zKDMpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb21wb25lbnQ7Il0sIm5hbWVzIjpbIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJsb2NhdGlvbnMiLCJ6b25lIiwiZG9ybXMiLCJuYW1lIiwibGF0IiwibG5nIiwiTWFwQ29tcG9uZW50IiwibWFwQ2VudGVyIiwic2V0TWFwQ2VudGVyIiwiZ2VuZXJhdGVEb3JtQnV0dG9ucyIsInpvbmVJbmRleCIsIm1hcCIsImRvcm0iLCJkb3JtSW5kZXgiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiaDEiLCJnb29nbGVNYXBzQXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9HT09HTEVfTUFQU19BUElfS0VZIiwibWFwQ29udGFpbmVyU3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwicG9zaXRpb24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/component/map/page.js\n"));

/***/ })

});