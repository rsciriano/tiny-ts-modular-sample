(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["foo"] = factory();
	else
		root["foo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Foo_1 = __webpack_require__(1);
	var Foo_2 = __webpack_require__(1);
	exports.Foo = Foo_2.Foo;
	exports.foo = new Foo_1.Foo();


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Foo = (function () {
	    function Foo() {
	    }
	    Foo.prototype.hello = function (name) {
	        if (name === void 0) { name = null; }
	        if (name) {
	            return 'Hello ' + name + '!';
	        }
	        else {
	            return 'Hello World!';
	        }
	    };
	    Foo.prototype.Rob = function () {
	        return 'Rob';
	    };
	    return Foo;
	}());
	exports.Foo = Foo;


/***/ }
/******/ ])
});
;