"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dorms",{

/***/ "./src/component/filter/filter.js":
/*!****************************************!*\
  !*** ./src/component/filter/filter.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite-react */ \"./node_modules/flowbite-react/lib/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst DormFilters = (param)=>{\n    let { filters, setFilters } = param;\n    const handleCheckboxChange = (type, value)=>{\n        setFilters((prev)=>({\n                ...prev,\n                [type]: prev[type] === value ? \"\" : value\n            }));\n    };\n    const resetFilters = ()=>{\n        setFilters({\n            roomType: \"\",\n            year: \"\",\n            accessible: \"\",\n            ac: \"\"\n        });\n    };\n    const createClickableRow = (id, label, type, value)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {\n            onClick: ()=>handleCheckboxChange(type, value),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        id: id,\n                        onChange: ()=>handleCheckboxChange(type, value),\n                        checked: filters[type] === value,\n                        className: \"mr-2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: id,\n                        className: \"cursor-pointer\",\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-start space-x-4 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                label: \"Room Type\",\n                children: [\n                    createClickableRow(\"single\", \"Single\", \"roomType\", \"Single\"),\n                    createClickableRow(\"double\", \"Double\", \"roomType\", \"Double\"),\n                    createClickableRow(\"triple\", \"Triple\", \"roomType\", \"Triple\")\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                label: \"Year\",\n                children: [\n                    createClickableRow(\"freshman\", \"Freshman\", \"year\", \"Freshman\"),\n                    createClickableRow(\"sophomore\", \"Sophomore\", \"year\", \"Sophomore\")\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                label: \"Accessibility\",\n                children: [\n                    createClickableRow(\"accessible\", \"Accessible\", \"accessible\", true),\n                    createClickableRow(\"nonAccessible\", \"Non-Accessible\", \"accessible\", false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {\n                label: \"Air Conditioning\",\n                children: [\n                    createClickableRow(\"ac\", \"Has AC\", \"ac\", true),\n                    createClickableRow(\"noAc\", \"No AC\", \"ac\", false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: resetFilters,\n                color: \"gray\",\n                children: \"Reset\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gabri\\\\Dropbox\\\\RPIXplore2\\\\src\\\\component\\\\filter\\\\filter.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DormFilters;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DormFilters);\nvar _c;\n$RefreshReg$(_c, \"DormFilters\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50L2ZpbHRlci9maWx0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjtBQUNrQztBQUU1RCxNQUFNSSxjQUFjO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7SUFDMUMsTUFBTUMsdUJBQXVCLENBQUNDLE1BQU1DO1FBQ2xDSCxXQUFXSSxDQUFBQSxPQUFTO2dCQUNsQixHQUFHQSxJQUFJO2dCQUNQLENBQUNGLEtBQUssRUFBRUUsSUFBSSxDQUFDRixLQUFLLEtBQUtDLFFBQVEsS0FBS0E7WUFDdEM7SUFDRjtJQUVBLE1BQU1FLGVBQWU7UUFDbkJMLFdBQVc7WUFDVE0sVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFlBQVk7WUFDWkMsSUFBSTtRQUNOO0lBQ0Y7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0MsSUFBSUMsT0FBT1YsTUFBTUMsc0JBQzNDLDhEQUFDUCxvREFBUUEsQ0FBQ2lCLElBQUk7WUFBQ0MsU0FBUyxJQUFNYixxQkFBcUJDLE1BQU1DO3NCQUN2RCw0RUFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDckIsb0RBQVFBO3dCQUNQZ0IsSUFBSUE7d0JBQ0pNLFVBQVUsSUFBTWhCLHFCQUFxQkMsTUFBTUM7d0JBQzNDZSxTQUFTbkIsT0FBTyxDQUFDRyxLQUFLLEtBQUtDO3dCQUMzQmEsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDSjt3QkFBTU8sU0FBU1I7d0JBQUlLLFdBQVU7a0NBQzNCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNVCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNwQixvREFBUUE7Z0JBQUNnQixPQUFNOztvQkFDYkYsbUJBQW1CLFVBQVUsVUFBVSxZQUFZO29CQUNuREEsbUJBQW1CLFVBQVUsVUFBVSxZQUFZO29CQUNuREEsbUJBQW1CLFVBQVUsVUFBVSxZQUFZOzs7Ozs7OzBCQUd0RCw4REFBQ2Qsb0RBQVFBO2dCQUFDZ0IsT0FBTTs7b0JBQ2JGLG1CQUFtQixZQUFZLFlBQVksUUFBUTtvQkFDbkRBLG1CQUFtQixhQUFhLGFBQWEsUUFBUTs7Ozs7OzswQkFHeEQsOERBQUNkLG9EQUFRQTtnQkFBQ2dCLE9BQU07O29CQUNiRixtQkFBbUIsY0FBYyxjQUFjLGNBQWM7b0JBQzdEQSxtQkFBbUIsaUJBQWlCLGtCQUFrQixjQUFjOzs7Ozs7OzBCQUd2RSw4REFBQ2Qsb0RBQVFBO2dCQUFDZ0IsT0FBTTs7b0JBQ2JGLG1CQUFtQixNQUFNLFVBQVUsTUFBTTtvQkFDekNBLG1CQUFtQixRQUFRLFNBQVMsTUFBTTs7Ozs7OzswQkFHN0MsOERBQUNiLGtEQUFNQTtnQkFBQ2lCLFNBQVNUO2dCQUFjZSxPQUFNOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHbEQ7S0EzRE10QjtBQTZETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L2ZpbHRlci9maWx0ZXIuanM/MTg4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveCwgRHJvcGRvd24sIEJ1dHRvbiB9IGZyb20gJ2Zsb3diaXRlLXJlYWN0JztcclxuXHJcbmNvbnN0IERvcm1GaWx0ZXJzID0gKHsgZmlsdGVycywgc2V0RmlsdGVycyB9KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSAodHlwZSwgdmFsdWUpID0+IHtcclxuICAgIHNldEZpbHRlcnMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbdHlwZV06IHByZXZbdHlwZV0gPT09IHZhbHVlID8gJycgOiB2YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldEZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgcm9vbVR5cGU6ICcnLFxyXG4gICAgICB5ZWFyOiAnJyxcclxuICAgICAgYWNjZXNzaWJsZTogJycsXHJcbiAgICAgIGFjOiAnJ1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQ2xpY2thYmxlUm93ID0gKGlkLCBsYWJlbCwgdHlwZSwgdmFsdWUpID0+IChcclxuICAgIDxEcm9wZG93bi5JdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKHR5cGUsIHZhbHVlKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8Q2hlY2tib3ggXHJcbiAgICAgICAgICBpZD17aWR9IFxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoZWNrYm94Q2hhbmdlKHR5cGUsIHZhbHVlKX1cclxuICAgICAgICAgIGNoZWNrZWQ9e2ZpbHRlcnNbdHlwZV0gPT09IHZhbHVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBzcGFjZS14LTQgcC00XCI+XHJcbiAgICAgIDxEcm9wZG93biBsYWJlbD1cIlJvb20gVHlwZVwiPlxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJzaW5nbGVcIiwgXCJTaW5nbGVcIiwgXCJyb29tVHlwZVwiLCBcIlNpbmdsZVwiKX1cclxuICAgICAgICB7Y3JlYXRlQ2xpY2thYmxlUm93KFwiZG91YmxlXCIsIFwiRG91YmxlXCIsIFwicm9vbVR5cGVcIiwgXCJEb3VibGVcIil9XHJcbiAgICAgICAge2NyZWF0ZUNsaWNrYWJsZVJvdyhcInRyaXBsZVwiLCBcIlRyaXBsZVwiLCBcInJvb21UeXBlXCIsIFwiVHJpcGxlXCIpfVxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgPERyb3Bkb3duIGxhYmVsPVwiWWVhclwiPlxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJmcmVzaG1hblwiLCBcIkZyZXNobWFuXCIsIFwieWVhclwiLCBcIkZyZXNobWFuXCIpfVxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJzb3Bob21vcmVcIiwgXCJTb3Bob21vcmVcIiwgXCJ5ZWFyXCIsIFwiU29waG9tb3JlXCIpfVxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgPERyb3Bkb3duIGxhYmVsPVwiQWNjZXNzaWJpbGl0eVwiPlxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJhY2Nlc3NpYmxlXCIsIFwiQWNjZXNzaWJsZVwiLCBcImFjY2Vzc2libGVcIiwgdHJ1ZSl9XHJcbiAgICAgICAge2NyZWF0ZUNsaWNrYWJsZVJvdyhcIm5vbkFjY2Vzc2libGVcIiwgXCJOb24tQWNjZXNzaWJsZVwiLCBcImFjY2Vzc2libGVcIiwgZmFsc2UpfVxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgPERyb3Bkb3duIGxhYmVsPVwiQWlyIENvbmRpdGlvbmluZ1wiPlxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJhY1wiLCBcIkhhcyBBQ1wiLCBcImFjXCIsIHRydWUpfVxyXG4gICAgICAgIHtjcmVhdGVDbGlja2FibGVSb3coXCJub0FjXCIsIFwiTm8gQUNcIiwgXCJhY1wiLCBmYWxzZSl9XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Jlc2V0RmlsdGVyc30gY29sb3I9XCJncmF5XCI+UmVzZXQ8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3JtRmlsdGVycztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hlY2tib3giLCJEcm9wZG93biIsIkJ1dHRvbiIsIkRvcm1GaWx0ZXJzIiwiZmlsdGVycyIsInNldEZpbHRlcnMiLCJoYW5kbGVDaGVja2JveENoYW5nZSIsInR5cGUiLCJ2YWx1ZSIsInByZXYiLCJyZXNldEZpbHRlcnMiLCJyb29tVHlwZSIsInllYXIiLCJhY2Nlc3NpYmxlIiwiYWMiLCJjcmVhdGVDbGlja2FibGVSb3ciLCJpZCIsImxhYmVsIiwiSXRlbSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJodG1sRm9yIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/component/filter/filter.js\n"));

/***/ })

});