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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/TextBoxWithCopyButton.module.css */ \"./src/styles/TextBoxWithCopyButton.module.css\");\n/* harmony import */ var _styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CopyToClipboardButton = (props)=>{\n    _s();\n    console.log(props);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setOpen(true);\n        if (true) {\n            navigator.clipboard.writeText(document.getElementById(\"resultText\").innerText);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(props.length),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                // className={props.length ? styles.dispBlock : styles.dispNone}\n                className: (_styles_TextBoxWithCopyButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().dispBlock),\n                onClick: handleClick,\n                children: \"コピーする！\"\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/TextBoxWithCopyButton.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Snackbar, {\n                open: open,\n                onClose: ()=>setOpen(false),\n                autoHideDuration: 2000,\n                message: \"コピー成功！！！\"\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/TextBoxWithCopyButton.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(CopyToClipboardButton, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = CopyToClipboardButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CopyToClipboardButton);\nvar _c;\n$RefreshReg$(_c, \"CopyToClipboardButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZXh0Qm94V2l0aENvcHlCdXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFDOEI7QUFFL0QsTUFBTUksd0JBQXdCLENBQUNDLFFBQVU7O0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTVEsY0FBYyxJQUFNO1FBQ3hCRCxRQUFRLElBQUk7UUFDWixJQUFJLElBQTBCLEVBQUU7WUFDOUJFLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUMzQkMsU0FBU0MsY0FBYyxDQUFDLGNBQWNDLFNBQVM7UUFFbkQsQ0FBQztJQUNIO0lBRUEscUJBQ0U7O1lBQ0RWLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTVksTUFBTTswQkFDckIsOERBQUNqQixpREFBTUE7Z0JBQ0wsZ0VBQWdFO2dCQUNoRWtCLFdBQVdmLDJGQUFnQjtnQkFFM0JpQixTQUFTVjswQkFDVjs7Ozs7OzBCQUdELDhEQUFDVCxtREFBUUE7Z0JBQ1BPLE1BQU1BO2dCQUNOYSxTQUFTLElBQU1aLFFBQVEsS0FBSztnQkFDNUJhLGtCQUFrQjtnQkFDbEJDLFNBQVE7Ozs7Ozs7O0FBSWhCO0dBL0JNbkI7S0FBQUE7QUFpQ04sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UZXh0Qm94V2l0aENvcHlCdXR0b24uanN4PzdhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBTbmFja2JhciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvVGV4dEJveFdpdGhDb3B5QnV0dG9uLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgQ29weVRvQ2xpcGJvYXJkQnV0dG9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRUZXh0XCIpLmlubmVyVGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICB7Y29uc29sZS5sb2cocHJvcHMubGVuZ3RoKX1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgLy8gY2xhc3NOYW1lPXtwcm9wcy5sZW5ndGggPyBzdHlsZXMuZGlzcEJsb2NrIDogc3R5bGVzLmRpc3BOb25lfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwQmxvY2sgfVxuXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICDjgrPjg5Tjg7zjgZnjgovvvIFcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFNuYWNrYmFyXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfVxuICAgICAgICBtZXNzYWdlPVwi44Kz44OU44O85oiQ5Yqf77yB77yB77yBXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5VG9DbGlwYm9hcmRCdXR0b247XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiU25hY2tiYXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNvcHlUb0NsaXBib2FyZEJ1dHRvbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZGlzcEJsb2NrIiwib25DbGljayIsIm9uQ2xvc2UiLCJhdXRvSGlkZUR1cmF0aW9uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TextBoxWithCopyButton.jsx\n"));

/***/ })

});