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

/***/ "./src/components/TextBoxWithCopyButton.jsx":
/*!**************************************************!*\
  !*** ./src/components/TextBoxWithCopyButton.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/TextBoxWithCopyButton.module.css */ \"./src/styles/TextBoxWithCopyButton.module.css\");\n/* harmony import */ var _styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CopyToClipboardButton = (props)=>{\n    _s();\n    console.log(props);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setOpen(true);\n        if (true) {\n            navigator.clipboard.writeText(document.getElementById(\"resultText\").innerText);\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleClick,\n                className: props.length ? (_styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().disp) : (_styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().dispNone),\n                children: \"コピーする！\"\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/TextBoxWithCopyButton.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {\n                open: open,\n                onClose: ()=>setOpen(false),\n                autoHideDuration: 2000,\n                message: \"コピー成功！！！\"\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/TextBoxWithCopyButton.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CopyToClipboardButton, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = CopyToClipboardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CopyToClipboardButton);\nvar _c;\n$RefreshReg$(_c, \"CopyToClipboardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZXh0Qm94V2l0aENvcHlCdXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFDNkI7QUFFOUQsTUFBTUksd0JBQXdCLENBQUNDLFFBQVU7O0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTVEsY0FBYyxJQUFNO1FBQ3hCRCxRQUFRLElBQUk7UUFDWixJQUFJLElBQTBCLEVBQUU7WUFDaENFLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUMzQkMsU0FBU0MsY0FBYyxDQUFDLGNBQWNDLFNBQVM7UUFFakQsQ0FBQzs7SUFDSDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2hCLGlEQUFNQTtnQkFDTGlCLFNBQVNQO2dCQUNUUSxXQUFXYixNQUFNYyxNQUFNLEdBQUdoQixzRkFBVyxHQUFHQSwwRkFBZTswQkFDeEQ7Ozs7OzswQkFHRCw4REFBQ0YsbURBQVFBO2dCQUNQTyxNQUFNQTtnQkFDTmMsU0FBUyxJQUFNYixRQUFRLEtBQUs7Z0JBQzVCYyxrQkFBa0I7Z0JBQ2xCQyxTQUFROzs7Ozs7OztBQUloQjtHQTVCTXBCO0tBQUFBO0FBOEJOLCtEQUFlQSxxQkFBcUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGV4dEJveFdpdGhDb3B5QnV0dG9uLmpzeD83YWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgU25hY2tiYXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1RleHRCb3hXaXRoQ29weUJ1dHRvbi5tb2R1bGUuY3NzXCJcblxuY29uc3QgQ29weVRvQ2xpcGJvYXJkQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0VGV4dFwiKS5pbm5lclRleHRcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17cHJvcHMubGVuZ3RoID8gc3R5bGVzLmRpc3AgOiBzdHlsZXMuZGlzcE5vbmV9XG4gICAgICA+XG4gICAgICAgIOOCs+ODlOODvOOBmeOCi++8gVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8U25hY2tiYXJcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgIG1lc3NhZ2U9XCLjgrPjg5Tjg7zmiJDlip/vvIHvvIHvvIFcIlxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJTbmFja2JhciIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29weVRvQ2xpcGJvYXJkQnV0dG9uIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwiZGlzcCIsImRpc3BOb25lIiwib25DbG9zZSIsImF1dG9IaWRlRHVyYXRpb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TextBoxWithCopyButton.jsx\n"));

/***/ })

});