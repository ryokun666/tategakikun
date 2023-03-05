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

/***/ "./src/components/VerticalTextConverter.js":
/*!*************************************************!*\
  !*** ./src/components/VerticalTextConverter.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/convertButton.module.css */ \"./src/styles/convertButton.module.css\");\n/* harmony import */ var _styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_TextBoxWithCopyButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TextBoxWithCopyButton */ \"./src/components/TextBoxWithCopyButton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction VerticalTextConverter() {\n    _s();\n    const [boxLn, setBoxLn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [str, setStr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lineCount, setLineCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxLn, setMaxLn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [covStr, setCovStr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function handleInputChange(event) {\n        const input = event.target.value;\n        const newStr = input.split(\"\\n\").map((line)=>line.replace(/ー/g, \"｜\").trim()).map((line)=>line.replace(/、/g, \"︑\").trim()).map((line)=>line.replace(/。/g, \"︒\").trim()).map((line)=>line.replace(/，/g, \"︐\").trim()).map((line)=>line.replace(/【/g, \"︗\").trim()).map((line)=>line.replace(/】/g, \"︘\").trim()).map((line)=>line.replace(/〜/g, \"∮\").trim());\n        setStr(newStr);\n        setLineCount(newStr.length);\n        const newBoxLn = newStr.map((line)=>line.length);\n        setBoxLn(newBoxLn);\n        const newMaxLn = Math.max(...newBoxLn);\n        setMaxLn(newMaxLn);\n        const newCovStr = [];\n        for(let j = 0; j < newMaxLn; j++){\n            let line = \"\";\n            for(let i = newStr.length - 1; i >= 0; i--){\n                const char = newStr[i][j] || \"　\";\n                line += char + \" \";\n            }\n            newCovStr.push(line);\n        }\n        setCovStr(newCovStr);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                component: \"form\",\n                sx: {\n                    \"& .MuiTextField-root\": {\n                        m: 4,\n                        width: \"15ch\"\n                    }\n                },\n                noValidate: true,\n                autoComplete: \"off\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onChange: handleInputChange,\n                        id: \"text-area\",\n                        label: \"テキストを入力してね\",\n                        multiline: true,\n                        maxRows: 4,\n                        className: (_styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().textArea)\n                    }, void 0, false, {\n                        fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"resultText\",\n                className: covStr.length ? (_styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().resultText) : (_styles_convertButton_module_css__WEBPACK_IMPORTED_MODULE_5___default().dispNone),\n                children: covStr.map((line, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: line\n                    }, i, false, {\n                        fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextBoxWithCopyButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                str: covStr\n            }, void 0, false, {\n                fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryo/Documents/dev/tategakikun/src/components/VerticalTextConverter.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(VerticalTextConverter, \"mumu6qTt3KJbyhqan3pXMmPxbds=\");\n_c = VerticalTextConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerticalTextConverter);\nvar _c;\n$RefreshReg$(_c, \"VerticalTextConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WZXJ0aWNhbFRleHRDb252ZXJ0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDWTtBQUNPO0FBQ2dCO0FBRXZFLFNBQVNNLHdCQUF3Qjs7SUFDL0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDUSxLQUFLQyxPQUFPLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDakMsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUV2QyxTQUFTZ0Isa0JBQWtCQyxLQUFLLEVBQUU7UUFDaEMsTUFBTUMsUUFBUUQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDLE1BQU1DLFNBQVNILE1BQ1pJLEtBQUssQ0FBQyxNQUNOQyxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsT0FBTyxDQUFDLE1BQU0sS0FBS0MsSUFBSSxJQUMxQ0gsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLE9BQU8sQ0FBQyxNQUFNLEtBQUtDLElBQUksSUFDMUNILEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxPQUFPLENBQUMsTUFBTSxLQUFLQyxJQUFJLElBQzFDSCxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsT0FBTyxDQUFDLE1BQU0sS0FBS0MsSUFBSSxJQUMxQ0gsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLE9BQU8sQ0FBQyxNQUFNLEtBQUtDLElBQUksSUFDMUNILEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxPQUFPLENBQUMsTUFBTSxLQUFLQyxJQUFJLElBQzFDSCxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsT0FBTyxDQUFDLE1BQU0sS0FBS0MsSUFBSTtRQUM3Q2pCLE9BQU9ZO1FBQ1BWLGFBQWFVLE9BQU9NLE1BQU07UUFFMUIsTUFBTUMsV0FBV1AsT0FBT0UsR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtHLE1BQU07UUFDakRwQixTQUFTcUI7UUFFVCxNQUFNQyxXQUFXQyxLQUFLQyxHQUFHLElBQUlIO1FBQzdCZixTQUFTZ0I7UUFFVCxNQUFNRyxZQUFZLEVBQUU7UUFDcEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLFVBQVVJLElBQUs7WUFDakMsSUFBSVQsT0FBTztZQUNYLElBQUssSUFBSVUsSUFBSWIsT0FBT00sTUFBTSxHQUFHLEdBQUdPLEtBQUssR0FBR0EsSUFBSztnQkFDM0MsTUFBTUMsT0FBT2QsTUFBTSxDQUFDYSxFQUFFLENBQUNELEVBQUUsSUFBSTtnQkFDN0JULFFBQVFXLE9BQU87WUFDakI7WUFDQUgsVUFBVUksSUFBSSxDQUFDWjtRQUNqQjtRQUNBVCxVQUFVaUI7SUFDWjtJQUVBLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNwQyx5REFBR0E7Z0JBQ0ZxQyxXQUFVO2dCQUNWQyxJQUFJO29CQUNGLHdCQUF3Qjt3QkFBRUMsR0FBRzt3QkFBR0MsT0FBTztvQkFBTztnQkFDaEQ7Z0JBQ0FDLFVBQVU7Z0JBQ1ZDLGNBQWE7MEJBRWIsNEVBQUNOOzhCQUNDLDRFQUFDbkMsK0RBQVNBO3dCQUNSMEMsVUFBVTVCO3dCQUNWNkIsSUFBRzt3QkFDSEMsT0FBTTt3QkFDTkMsU0FBUzt3QkFDVEMsU0FBUzt3QkFDVEMsV0FBVzlDLGtGQUFlOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUloQyw4REFBQ2tDO2dCQUNDUSxJQUFHO2dCQUNISSxXQUFXbkMsT0FBT2EsTUFBTSxHQUFHeEIsb0ZBQWlCLEdBQUdBLGtGQUFlOzBCQUU3RFcsT0FBT1MsR0FBRyxDQUFDLENBQUNDLE1BQU1VLGtCQUNqQiw4REFBQ21CO2tDQUFXN0I7dUJBQUpVOzs7Ozs7Ozs7OzBCQUdaLDhEQUFDOUIseUVBQXFCQTtnQkFBQ0ksS0FBS007Ozs7Ozs7Ozs7OztBQUdsQztHQXZFU1Q7S0FBQUE7QUF5RVQsK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9WZXJ0aWNhbFRleHRDb252ZXJ0ZXIuanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvY29udmVydEJ1dHRvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgVGV4dEJveFdpdGhDb3B5QnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvVGV4dEJveFdpdGhDb3B5QnV0dG9uXCI7XG5cbmZ1bmN0aW9uIFZlcnRpY2FsVGV4dENvbnZlcnRlcigpIHtcbiAgY29uc3QgW2JveExuLCBzZXRCb3hMbl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdHIsIHNldFN0cl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsaW5lQ291bnQsIHNldExpbmVDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21heExuLCBzZXRNYXhMbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvdlN0ciwgc2V0Q292U3RyXSA9IHVzZVN0YXRlKFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1N0ciA9IGlucHV0XG4gICAgICAuc3BsaXQoXCJcXG5cIilcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44O8L2csIFwi772cXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44CBL2csIFwi77iRXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44CCL2csIFwi77iSXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv77yML2csIFwi77iQXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44CQL2csIFwi77iXXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44CRL2csIFwi77iYXCIpLnRyaW0oKSlcbiAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUucmVwbGFjZSgv44CcL2csIFwi4oiuXCIpLnRyaW0oKSk7XG4gICAgc2V0U3RyKG5ld1N0cik7XG4gICAgc2V0TGluZUNvdW50KG5ld1N0ci5sZW5ndGgpO1xuXG4gICAgY29uc3QgbmV3Qm94TG4gPSBuZXdTdHIubWFwKChsaW5lKSA9PiBsaW5lLmxlbmd0aCk7XG4gICAgc2V0Qm94TG4obmV3Qm94TG4pO1xuXG4gICAgY29uc3QgbmV3TWF4TG4gPSBNYXRoLm1heCguLi5uZXdCb3hMbik7XG4gICAgc2V0TWF4TG4obmV3TWF4TG4pO1xuXG4gICAgY29uc3QgbmV3Q292U3RyID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdNYXhMbjsgaisrKSB7XG4gICAgICBsZXQgbGluZSA9IFwiXCI7XG4gICAgICBmb3IgKGxldCBpID0gbmV3U3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBuZXdTdHJbaV1bal0gfHwgXCLjgIBcIjtcbiAgICAgICAgbGluZSArPSBjaGFyICsgXCIgXCI7XG4gICAgICB9XG4gICAgICBuZXdDb3ZTdHIucHVzaChsaW5lKTtcbiAgICB9XG4gICAgc2V0Q292U3RyKG5ld0NvdlN0cik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Qm94XG4gICAgICAgIGNvbXBvbmVudD1cImZvcm1cIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIFwiJiAuTXVpVGV4dEZpZWxkLXJvb3RcIjogeyBtOiA0LCB3aWR0aDogXCIxNWNoXCIgfSxcbiAgICAgICAgfX1cbiAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIGlkPVwidGV4dC1hcmVhXCJcbiAgICAgICAgICAgIGxhYmVsPVwi44OG44Kt44K544OI44KS5YWl5Yqb44GX44Gm44GtXCJcbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgbWF4Um93cz17NH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRBcmVhfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwicmVzdWx0VGV4dFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y292U3RyLmxlbmd0aCA/IHN0eWxlcy5yZXN1bHRUZXh0IDogc3R5bGVzLmRpc3BOb25lfVxuICAgICAgPlxuICAgICAgICB7Y292U3RyLm1hcCgobGluZSwgaSkgPT4gKFxuICAgICAgICAgIDxwIGtleT17aX0+e2xpbmV9PC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFRleHRCb3hXaXRoQ29weUJ1dHRvbiBzdHI9e2NvdlN0cn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVydGljYWxUZXh0Q29udmVydGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJUZXh0RmllbGQiLCJzdHlsZXMiLCJUZXh0Qm94V2l0aENvcHlCdXR0b24iLCJWZXJ0aWNhbFRleHRDb252ZXJ0ZXIiLCJib3hMbiIsInNldEJveExuIiwic3RyIiwic2V0U3RyIiwibGluZUNvdW50Iiwic2V0TGluZUNvdW50IiwibWF4TG4iLCJzZXRNYXhMbiIsImNvdlN0ciIsInNldENvdlN0ciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwibmV3U3RyIiwic3BsaXQiLCJtYXAiLCJsaW5lIiwicmVwbGFjZSIsInRyaW0iLCJsZW5ndGgiLCJuZXdCb3hMbiIsIm5ld01heExuIiwiTWF0aCIsIm1heCIsIm5ld0NvdlN0ciIsImoiLCJpIiwiY2hhciIsInB1c2giLCJkaXYiLCJjb21wb25lbnQiLCJzeCIsIm0iLCJ3aWR0aCIsIm5vVmFsaWRhdGUiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsImlkIiwibGFiZWwiLCJtdWx0aWxpbmUiLCJtYXhSb3dzIiwiY2xhc3NOYW1lIiwidGV4dEFyZWEiLCJyZXN1bHRUZXh0IiwiZGlzcE5vbmUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/VerticalTextConverter.js\n"));

/***/ })

});