(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("web-notifications", [], factory);
	else if(typeof exports === 'object')
		exports["web-notifications"] = factory();
	else
		root["web-notifications"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	(function (window) {
	
	    'use strict';
	
	    /**
	     * @function defineWn()
	     * @description Wrapper function for defining the library
	     * @return {function} The entire library
	     */
	
	    function defineWn() {
	        var wn = {};
	
	        /**
	         * @function wn.getPermission
	         * @description Handles permissions for the Notifications API
	         * @returns {void}
	         */
	        wn.getPermission = function () {
	
	            // Check if the browser supports web notifications
	            if (!('Notification' in window)) {
	                console.log('Web Notification: This browser does not support system notifications');
	
	                // If there is support, check if the permission is already set.
	            } else if (Notification.permission === 'granted') {
	                // Print to log if acces is granted
	                console.log('Web Notifications: Permission already granted');
	
	                // Else, we ask the user for permission
	            } else if (Notification.permission !== 'granted') {
	
	                Notification.requestPermission(function (permission) {
	                    // If the user accepts, log the succes message
	                    if (permission === 'granted') {
	                        console.log('Web Notifications: Permission granted');
	                    }
	                });
	            }
	        };
	
	        /**
	         * @function wn.send
	         * @description Sends new notifications
	         * @param {string} title Title of the message
	         * @param {string} body Body of the message
	         * @param {string} icon URL of the icon for the message
	         * @param {function} clickEvent Onclick function for the notification
	         */
	        wn.send = function (title, body, icon, clickEvent) {
	            var options = {
	                body: body,
	                icon: icon
	            };
	            var notif = new Notification(title, options);
	            notif.onclick = function () {
	                clickEvent();
	            };
	        };
	
	        //Return the library
	        return wn;
	    }
	
	    window.wn = defineWn();
	})(window);

/***/ }
/******/ ])
});
;
//# sourceMappingURL=web-notifications.js.map