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

/***/ "./src/auto_quacks.js":
/*!****************************!*\
  !*** ./src/auto_quacks.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AutoQuack {\n  constructor(board) {\n    this.board = board\n    this.ducklingCost = 100\n    this.ducklingMPS = .1\n    this.ducklingCount = 0\n  }\n\n\n  DucklingCostRender(){\n    let ducklingCostDiv = document.getElementById(\"ducklingCost\")\n    ducklingCostDiv.innerHTML = `Cost: ${this.ducklingCost}`\n  }\n\n  DucklingCountRender(){\n    let ducklingCountDiv = document.getElementById(\"ducklingCount\")\n    ducklingCountDiv.innerHTML = `Ducklings: ${this.ducklingCount}`\n  }\n\n  DucklingButton(){\n    let ducklingButton = document.getElementById(\"ducklingButton\")\n    ducklingButton.addEventListener(\"click\", () => {\n      if(this.board.money >= this.ducklingCost){\n        console.log(\"quack\")\n        this.board.money = this.board.money - this.ducklingCost\n        this.ducklingCost = this.ducklingCost * 2\n        this.ducklingCount = this.ducklingCount + 1\n        this.DucklingCostRender()\n        this.DucklingCountRender()\n        this.board.renderMoney()\n        if(this.ducklingCount === 1){\n          this.DucklingPS()\n        }\n      }\n    })\n  }\n\n  DucklingPS(){\n    if(this.ducklingCount >= 1){\n      setInterval(() =>{\n        this.board.money = this.board.money + (this.ducklingCount * this.ducklingMPS)\n        this.board.renderMoney()\n      }, 1000)\n    }\n  }\n\n  start(){\n    this.DucklingCostRender()\n    this.DucklingCountRender()\n    this.DucklingButton()\n  }\n\n}\n\nmodule.exports = AutoQuack;\n\n//# sourceURL=webpack:///./src/auto_quacks.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const  Upgrades = __webpack_require__(/*! ./upgrades */ \"./src/upgrades.js\") \nconst AutoQuack = __webpack_require__(/*! ./auto_quacks */ \"./src/auto_quacks.js\")\nclass Board{\n  constructor(gameDiv) {\n  this.money = 300\n  this.count = 99\n  this.inc = .5\n  this.gameDivR = gameDiv\n  }\n  renderMoney() {\n    let moneyCount = document.getElementById('money')\n    moneyCount.innerHTML = this.money.toFixed(2)\n  }\n\nmakeButton(){\n  console.log(this)\n  let innerButton = document.getElementById(\"duck\")\n  innerButton.addEventListener('click', () =>  {\n    this.money = this.money + this.inc\n    this.renderMoney()\n  }, false);\n}\n\n\n\nstart() {\n  this.renderMoney()\n  this.makeButton()\n  const Uper = new Upgrades(this)\n  const Auto = new AutoQuack(this)\n  this.Uper = Uper\n  Uper.start()\n  Auto.start()\n}\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const gameDiv = document.getElementById(\"game\")\n  const board = new Board(gameDiv)\n  board.start()\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/upgrades.js":
/*!*************************!*\
  !*** ./src/upgrades.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Upgrades {\n\n  constructor(board) {\n    this.board = board\n    this.gameDivR = board.gameDiv\n    this.inc = board.inc\n    this.crumbInc = .1\n    this.money = board.money\n    this.crumbCost = 10\n  }\n  makeCrumbButton(){\n    let upgradeButton  = document.getElementById('breadButton')\n    let duck = document.getElementById('duck')\n    let unlock = document.getElementById('unlocks')\n    upgradeButton.className = \"mehButton\"\n    \n      upgradeButton.addEventListener('click', () => {\n        if (this.board.money >= this.crumbCost) {\n          this.board.money = this.board.money - this.crumbCost\n          this.board.inc = this.board.inc + this.crumbInc\n          this.crumbCost = this.crumbCost * 2;\n          this.board.renderMoney()\n          this.renderCost();\n          duck.classList.remove(\"batDuck\");\n        } else {\n          duck.classList.add(\"batDuck\");\n          unlock.innerHTML = \"To the rescue!\";\n          unlock.classList.add(\"unlocked\");\n          setTimeout(() => { \n            unlock.classList.remove(\"unlocked\");\n            unlock.innerHTML = \"hide Quick\";\n          }, 1000)\n\n        }\n      }, false);\n\n  }\n\n  renderCost(){\n\n    let upgradeButtonCost = document.getElementById(\"upgradeLabel\")\n    upgradeButtonCost.innerHTML = `cost: ${this.crumbCost}`\n    upgradeButtonCost.id = \"upgradeLabel\"\n\n\n  }\n\n  start(){\n    this.renderCost()\n    this.makeCrumbButton();\n  }\n  \n}\n\nmodule.exports = Upgrades;\n\n//# sourceURL=webpack:///./src/upgrades.js?");

/***/ })

/******/ });