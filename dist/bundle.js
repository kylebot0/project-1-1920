/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/app.js":
/*!***************************!*\
  !*** ./src/script/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/selectors */ \"./src/script/helpers/selectors.js\");\n/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data */ \"./src/script/modules/data.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ \"./src/script/modules/render.js\");\n\n\n\n\nconst clearField = () => {\n  const button = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"#clear-field\");\n  const input = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"#search\");\n  button.addEventListener(\"click\", event => {\n    event.preventDefault();\n    input.value = \"\";\n  });\n};\n\nconst toggleFilters = () => {\n    const toggleButton = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"#toggle-filter\")\n    const filterContainer = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\".container-filter\")\n    toggleButton.addEventListener(\"click\", event => {\n        event.preventDefault()\n        filterContainer.classList.toggle(\"active\")\n    })\n}\n\nconst makeFormStick = () => {\n    window.onscroll = function () { addStick() };\n    const form = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"form\");\n    const formDOM = form.getBoundingClientRect();\n    const sticky = form.offsetTop\n    const main = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"main\");\n    function addStick() {\n        if (window.pageYOffset >= sticky) {\n            main.style.marginTop = `${formDOM.height}px`\n            form.classList.add(\"sticky\")\n        } else {\n            main.style.marginTop = `0px`;\n            form.classList.remove(\"sticky\");\n        }\n    }\n    ;\n       \n}\n\nconst app = async () => {\n    const data = Object(_modules_data__WEBPACK_IMPORTED_MODULE_1__[\"createData\"])();\n    const render = Object(_modules_render__WEBPACK_IMPORTED_MODULE_2__[\"createRender\"])();\n    const input = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])('#search');\n    const form = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"form\");\n    makeFormStick()\n    clearField();\n    toggleFilters();\n\n    form.addEventListener(\"submit\", async event => {\n        event.preventDefault();\n    }\n    )\n    form.addEventListener(\"input\", async event => {\n        event.preventDefault();\n        Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\".loading-state\").classList.add(\"loading\")\n\n        if(input.value.length == 0 || input.value == undefined) {\n            setTimeout(()=> {\n                const articles = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectAll\"])(\"article\")\n                articles.forEach((item, i) => {\n                    item.remove()\n                })\n            }, 1000)\n            \n        } else {\n            let items = await data.getData(input.value);\n            const articles = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"selectAll\"])(\"article\");\n\n            articles.forEach((item, i) => {\n              item.remove();\n            });\n            Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\".loading-state\").classList.remove(\"loading\");\n            render.renderOverview(items)\n        }\n    });\n    \n}\n\n\n\napp()\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2FwcC5qcz9mMThlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQ0c7QUFDVjs7QUFFL0M7QUFDQSxpQkFBaUIsaUVBQU07QUFDdkIsZ0JBQWdCLGlFQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHlCQUF5QixpRUFBTTtBQUMvQiw0QkFBNEIsaUVBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DLGlCQUFpQixpRUFBTTtBQUN2QjtBQUNBO0FBQ0EsaUJBQWlCLGlFQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLGdFQUFVO0FBQzNCLG1CQUFtQixvRUFBWTtBQUMvQixrQkFBa0IsaUVBQU07QUFDeEIsaUJBQWlCLGlFQUFNO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFNOztBQUVkO0FBQ0E7QUFDQSxpQ0FBaUMsb0VBQVM7QUFDMUM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBLDZCQUE2QixvRUFBUzs7QUFFdEM7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZLGlFQUFNO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLOztBQUVMOzs7O0FBSUEiLCJmaWxlIjoiLi9zcmMvc2NyaXB0L2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgc2VsZWN0QWxsfSBmcm9tIFwiLi9oZWxwZXJzL3NlbGVjdG9yc1wiXG5pbXBvcnQge2NyZWF0ZURhdGEsIGxpc3RlbkZvckV2ZW50fSBmcm9tIFwiLi9tb2R1bGVzL2RhdGFcIlxuaW1wb3J0IHsgY3JlYXRlUmVuZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXJcIlxuXG5jb25zdCBjbGVhckZpZWxkID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBzZWxlY3QoXCIjY2xlYXItZmllbGRcIik7XG4gIGNvbnN0IGlucHV0ID0gc2VsZWN0KFwiI3NlYXJjaFwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlRmlsdGVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSBzZWxlY3QoXCIjdG9nZ2xlLWZpbHRlclwiKVxuICAgIGNvbnN0IGZpbHRlckNvbnRhaW5lciA9IHNlbGVjdChcIi5jb250YWluZXItZmlsdGVyXCIpXG4gICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZmlsdGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KVxufVxuXG5jb25zdCBtYWtlRm9ybVN0aWNrID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHsgYWRkU3RpY2soKSB9O1xuICAgIGNvbnN0IGZvcm0gPSBzZWxlY3QoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1ET00gPSBmb3JtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHN0aWNreSA9IGZvcm0ub2Zmc2V0VG9wXG4gICAgY29uc3QgbWFpbiA9IHNlbGVjdChcIm1haW5cIik7XG4gICAgZnVuY3Rpb24gYWRkU3RpY2soKSB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XG4gICAgICAgICAgICBtYWluLnN0eWxlLm1hcmdpblRvcCA9IGAke2Zvcm1ET00uaGVpZ2h0fXB4YFxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluLnN0eWxlLm1hcmdpblRvcCA9IGAwcHhgO1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICAgICBcbn1cblxuY29uc3QgYXBwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVEYXRhKCk7XG4gICAgY29uc3QgcmVuZGVyID0gY3JlYXRlUmVuZGVyKCk7XG4gICAgY29uc3QgaW5wdXQgPSBzZWxlY3QoJyNzZWFyY2gnKTtcbiAgICBjb25zdCBmb3JtID0gc2VsZWN0KFwiZm9ybVwiKTtcbiAgICBtYWtlRm9ybVN0aWNrKClcbiAgICBjbGVhckZpZWxkKCk7XG4gICAgdG9nZ2xlRmlsdGVycygpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgKVxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZWN0KFwiLmxvYWRpbmctc3RhdGVcIikuY2xhc3NMaXN0LmFkZChcImxvYWRpbmdcIilcblxuICAgICAgICBpZihpbnB1dC52YWx1ZS5sZW5ndGggPT0gMCB8fCBpbnB1dC52YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZXMgPSBzZWxlY3RBbGwoXCJhcnRpY2xlXCIpXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IGF3YWl0IGRhdGEuZ2V0RGF0YShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlcyA9IHNlbGVjdEFsbChcImFydGljbGVcIik7XG5cbiAgICAgICAgICAgIGFydGljbGVzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZWN0KFwiLmxvYWRpbmctc3RhdGVcIikuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICByZW5kZXIucmVuZGVyT3ZlcnZpZXcoaXRlbXMpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbn1cblxuXG5cbmFwcCgpXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/app.js\n");

/***/ }),

/***/ "./src/script/helpers/selectors.js":
/*!*****************************************!*\
  !*** ./src/script/helpers/selectors.js ***!
  \*****************************************/
/*! exports provided: select, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return selectAll; });\nfunction select(select){\n    return document.querySelector(select);\n}\n\nfunction selectAll(select) {\n   return document.querySelectorAll(select);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2hlbHBlcnMvc2VsZWN0b3JzLmpzPzk0ZTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zY3JpcHQvaGVscGVycy9zZWxlY3RvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZWxlY3Qoc2VsZWN0KXtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGwoc2VsZWN0KSB7XG4gICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3QpO1xufVxuXG5leHBvcnQgIHtzZWxlY3QsIHNlbGVjdEFsbH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script/helpers/selectors.js\n");

/***/ }),

/***/ "./src/script/modules/data.js":
/*!************************************!*\
  !*** ./src/script/modules/data.js ***!
  \************************************/
/*! exports provided: createData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createData\", function() { return createData; });\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/selectors */ \"./src/script/helpers/selectors.js\");\n\n\nconst createData =  () => {\n    const cors = 'https://cors-anywhere.herokuapp.com/';\n    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';\n    const key = '1e19898c87464e239192c8bfe422f280';\n    const secret = '4289fec4e962a33118340c888699438d';\n    const detail = 'Default';\n    \n\n    const config = {\n        Authorization: `Bearer ${secret}`\n    };\n\n    return {\n        getData: async (query) => {\n            let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;\n            let data = await fetch(url, config)\n                .then(response => {                \n                    return response.json();\n                })\n                .catch(err => {\n                    console.log(err);\n                });\n            console.log(data)\n                return data;\n        },\n        getLoanData:  () => {\n        },\n        \n        \n    }\n}\n\n// const listenForEvent = () => {\n//         const input = select('#search');\n//         const form = select(\"form\");\n\n//         form.addEventListener(\"submit\", event => {\n//             event.preventDefault();\n//             createData.getData(input.value);\n//         });\n// }\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L21vZHVsZXMvZGF0YS5qcz9mODBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixJQUFJLGVBQWUsT0FBTztBQUM1RjtBQUNBLG1DO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdC9tb2R1bGVzL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWxlY3QgfSBmcm9tIFwiLi4vaGVscGVycy9zZWxlY3RvcnNcIjtcblxuY29uc3QgY3JlYXRlRGF0YSA9ICAoKSA9PiB7XG4gICAgY29uc3QgY29ycyA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICAgIGNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vem9la2VuLm9iYS5ubC9hcGkvdjEvc2VhcmNoLz9xPSc7XG4gICAgY29uc3Qga2V5ID0gJzFlMTk4OThjODc0NjRlMjM5MTkyYzhiZmU0MjJmMjgwJztcbiAgICBjb25zdCBzZWNyZXQgPSAnNDI4OWZlYzRlOTYyYTMzMTE4MzQwYzg4ODY5OTQzOGQnO1xuICAgIGNvbnN0IGRldGFpbCA9ICdEZWZhdWx0JztcbiAgICBcblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3NlY3JldH1gXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldERhdGE6IGFzeW5jIChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVybCA9IGAke2NvcnN9JHtlbmRwb2ludH0ke3F1ZXJ5fSZhdXRob3JpemF0aW9uPSR7a2V5fSZkZXRhaWxsZXZlbD0ke2RldGFpbH0mb3V0cHV0PWpzb25gO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LFxuICAgICAgICBnZXRMb2FuRGF0YTogICgpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuLy8gY29uc3QgbGlzdGVuRm9yRXZlbnQgPSAoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGlucHV0ID0gc2VsZWN0KCcjc2VhcmNoJyk7XG4vLyAgICAgICAgIGNvbnN0IGZvcm0gPSBzZWxlY3QoXCJmb3JtXCIpO1xuXG4vLyAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgY3JlYXRlRGF0YS5nZXREYXRhKGlucHV0LnZhbHVlKTtcbi8vICAgICAgICAgfSk7XG4vLyB9XG5cblxuXG5leHBvcnQgeyBjcmVhdGVEYXRhfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/script/modules/data.js\n");

/***/ }),

/***/ "./src/script/modules/render.js":
/*!**************************************!*\
  !*** ./src/script/modules/render.js ***!
  \**************************************/
/*! exports provided: createRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRender\", function() { return createRender; });\n/* harmony import */ var _helpers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/selectors */ \"./src/script/helpers/selectors.js\");\n\n\nconst createRender = () => {\n  const h1 = Object(_helpers_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])('h1');\n\n  return {\n    renderOverview: data => {\n      const results = data.results;\n      \n      results.forEach((item, i) => {\n        const html = `\n            <article>\n              <h2>${item.titles[0]}</h2>\n              <p>${item.summaries ? item.summaries[0] : \"Geen samenvatting\"}</p>\n              <img src=\"${\n                item.coverimages ? item.coverimages[1] : \"Geen samenvatting\"\n              }\">\n              <button href=\"${item.detailLink}\">Meer info</button>\n            </article>\n          `;\n        h1.insertAdjacentHTML(\"afterend\", html);\n      });\n    }\n  };\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L21vZHVsZXMvcmVuZGVyLmpzPzQwYWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQXlEOztBQUV6RDtBQUNBLGFBQWEsaUVBQU07O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQyxtQkFBbUIseURBQXlEO0FBQzVFO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUV3QiIsImZpbGUiOiIuL3NyYy9zY3JpcHQvbW9kdWxlcy9yZW5kZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gXCIuLi9oZWxwZXJzL3NlbGVjdG9yc1wiO1xuXG5jb25zdCBjcmVhdGVSZW5kZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGgxID0gc2VsZWN0KCdoMScpO1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyT3ZlcnZpZXc6IGRhdGEgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIFxuICAgICAgcmVzdWx0cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgPGgyPiR7aXRlbS50aXRsZXNbMF19PC9oMj5cbiAgICAgICAgICAgICAgPHA+JHtpdGVtLnN1bW1hcmllcyA/IGl0ZW0uc3VtbWFyaWVzWzBdIDogXCJHZWVuIHNhbWVudmF0dGluZ1wifTwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke1xuICAgICAgICAgICAgICAgIGl0ZW0uY292ZXJpbWFnZXMgPyBpdGVtLmNvdmVyaW1hZ2VzWzFdIDogXCJHZWVuIHNhbWVudmF0dGluZ1wiXG4gICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPVwiJHtpdGVtLmRldGFpbExpbmt9XCI+TWVlciBpbmZvPC9idXR0b24+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgYDtcbiAgICAgICAgaDEuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgaHRtbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVSZW5kZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/modules/render.js\n");

/***/ })

/******/ });