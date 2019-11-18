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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const  Upgrades = __webpack_require__(/*! ./upgrades */ \"./src/upgrades.js\") \nclass Board{\n  constructor(gameDiv) {\n  this.money = 1\n  this.count = 99\n  this.inc = 1\n  this.gameDivR = gameDiv\n  }\n\n\nmakeButton(){\n  console.log(this)\n  let innerButton = document.createElement('button')\n  let buttonDiv = document.getElementById(\"buttons\")\n  innerButton.innerHTML = \"click_me\"\n  innerButton.className = \"mehButton\"\n  innerButton.addEventListener('click', () =>  {\n    this.money = this.money + this.inc\n    this.renderMoney()\n  }, false);\n return buttonDiv.appendChild( innerButton)\n}\n\nrenderMoney(){\n  let moneyCount = document.getElementById('money')\n  moneyCount.innerHTML = this.money\n}\n\nstart() {\n  this.renderMoney()\n  this.makeButton()\n  const Uper = new Upgrades(this)\n  this.Uper = Uper\n  Uper.start()\n}\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const gameDiv = document.getElementById(\"game\")\n  console.log(gameDiv)\n  const board = new Board(gameDiv)\n  board.start()\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/upgrades.js":
/*!*************************!*\
  !*** ./src/upgrades.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Upgrades {\n\n  constructor(board) {\n    this.board = board\n    this.gameDivR = board.gameDiv\n    this.inc = board.inc\n    this.money = board.money\n    this.cost = 10\n  }\n  renderMoney() {\n    let moneyCount = document.getElementById('money')\n    console.log(moneyCount)\n    moneyCount.innerHTML = this.board.money\n  }\n  makeUpgradeButton(){\n    let upgradeButton = document.createElement('button')\n    let upgradeDiv = document.getElementById('upgrades')\n    upgradeButton.innerHTML = \"Buy the upgrade\"\n    upgradeButton.className = \"mehButton\"\n   \n  \n      upgradeButton.addEventListener('click', () => {\n        console.log(this.board)\n        if (this.board.money >= this.cost) {\n          this.board.money = this.board.money - 10\n          console.log(this.board.money)\n          this.board.inc = this.board.inc * 2\n          this.cost = this.cost * 2\n          console.log(this.cost)\n          this.renderMoney()\n          this.renderCost()\n        }\n      }, false);\n      \n   upgradeDiv.appendChild(upgradeButton)\n  }\n\n  renderCost(){\n    let oldCost = document.getElementById(\"upgradeLabel\")\n    if (oldCost){\n      oldCost.parentNode.removeChild(oldCost)\n    }\n    let upgradeButtonCost = document.createElement('p')\n    upgradeButtonCost.innerHTML = this.cost\n    upgradeButtonCost.id = \"upgradeLabel\"\n    let upgradeDiv = document.getElementById('upgrades')\n    upgradeDiv.appendChild(upgradeButtonCost)\n\n  }\n\n  start(){\n    this.makeUpgradeButton();\n    this.renderCost()\n  }\n  \n}\n\nmodule.exports = Upgrades;\n\n//# sourceURL=webpack:///./src/upgrades.js?");

/***/ })

/******/ });