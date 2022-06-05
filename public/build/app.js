(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");



/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)

 // start the Stimulus application


var messageProviders = {
  DIALOG: 'dialog',
  BRANCH: 'branch',
  CHANNEL: 'channel'
};

function loadMessages(url) {
  jquery__WEBPACK_IMPORTED_MODULE_3___default().get(url, function (data, status) {
    var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.main__content');
    $mainContent.empty();
    $mainContent.append(data);
    var messages = $mainContent[0];
    messages.scrollTop = messages.scrollHeight;
  });
}

function getDialogMessageUrl(dataProviderId) {
  return '/dialog/messages/?other-user-id=' + dataProviderId;
}

var dataProviderId;
var dataProviderType;
jquery__WEBPACK_IMPORTED_MODULE_3___default()('.message-provider').click(function (event) {
  dataProviderId = event.target.getAttribute('data-provider-id');
  dataProviderType = event.target.getAttribute('data-provider-type');
  var url = '';

  if (dataProviderType === messageProviders.DIALOG) {
    url = getDialogMessageUrl(dataProviderId);
  } else if (dataProviderType === messageProviders.BRANCH) {
    url = '/branches/' + dataProviderId + '/messages';
  } else if (dataProviderType === messageProviders.CHANNEL) {
    url = '/channels/' + dataProviderId;
  }

  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.main__header__name').text(event.target.innerText.split('\n')[0]);

  if (dataProviderType === messageProviders.DIALOG || dataProviderType === messageProviders.BRANCH) {
    loadMessages(url);
  } else if (dataProviderType === messageProviders.CHANNEL) {
    jquery__WEBPACK_IMPORTED_MODULE_3___default().get(url, function (data, status) {
      var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.main__content');
      $mainContent.empty();
      $mainContent.append(data);
    });
  }
}).children().click(function (e) {
  return false;
}); // $(document).on('click', '.dialog-message-send-btn', function (event) {
//     event.preventDefault();
//     let $form = $(document.dialog_message);
//
//     $.ajax({
//         url : $form.attr('action'),
//         type: $form.attr('method'),
//         data : {
//             text: $('#dialog_message_text').value
//         },
//         complete: function(html) {
//             loadMessages(getDialogMessageUrl(dataProviderId));
//         }
//     });
// });
// $('.dropdown-toggle').click(function (event) {
//     let $elements = $('#' + event.target.id);
//
//     switch ($elements.css('display')) {
//         case 'none': $elements.css('display', 'block'); break;
//         case 'block': $elements.css('display', 'none'); break;
//     }
// });

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_fu-f7121c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SU0sR0FESixFQUVJLFVBQVVFLElBQVYsRUFBZ0JDLE1BQWhCLEVBQXdCO01BQ3BCLElBQUlDLFlBQVksR0FBR1YsNkNBQUMsQ0FBQyxnQkFBRCxDQUFwQjtNQUNBVSxZQUFZLENBQUNDLEtBQWI7TUFDQUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CSixJQUFwQjtJQUNILENBTkw7RUFRSDtBQUVKLENBN0JELEVBNkJHa0IsUUE3QkgsR0E2QmNQLEtBN0JkLENBNkJvQixVQUFTUSxDQUFULEVBQVk7RUFDNUIsT0FBTyxLQUFQO0FBQ0gsQ0EvQkQsR0FpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztDQzNGQTs7QUFDTyxJQUFNRSxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuXG5jb25zdCBtZXNzYWdlUHJvdmlkZXJzID0ge0RJQUxPRzogJ2RpYWxvZycsIEJSQU5DSDogJ2JyYW5jaCcsIENIQU5ORUw6ICdjaGFubmVsJ307XG5cbmZ1bmN0aW9uIGxvYWRNZXNzYWdlcyh1cmwpIHtcbiAgICAkLmdldChcbiAgICAgICAgdXJsLFxuICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgICAgICBsZXQgJG1haW5Db250ZW50ID0gJCgnLm1haW5fX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICRtYWluQ29udGVudC5lbXB0eSgpO1xuICAgICAgICAgICAgJG1haW5Db250ZW50LmFwcGVuZChkYXRhKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlcyA9ICRtYWluQ29udGVudFswXTtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnNjcm9sbFRvcCA9IG1lc3NhZ2VzLnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldERpYWxvZ01lc3NhZ2VVcmwoZGF0YVByb3ZpZGVySWQpIHtcbiAgICByZXR1cm4gJy9kaWFsb2cvbWVzc2FnZXMvP290aGVyLXVzZXItaWQ9JyArIGRhdGFQcm92aWRlcklkO1xufVxuXG5sZXQgZGF0YVByb3ZpZGVySWQ7XG5sZXQgZGF0YVByb3ZpZGVyVHlwZTtcblxuJCgnLm1lc3NhZ2UtcHJvdmlkZXInKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBkYXRhUHJvdmlkZXJJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdmlkZXItaWQnKTtcbiAgICBkYXRhUHJvdmlkZXJUeXBlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm92aWRlci10eXBlJyk7XG5cbiAgICBsZXQgdXJsID0gJyc7XG5cbiAgICBpZiAoZGF0YVByb3ZpZGVyVHlwZSA9PT0gbWVzc2FnZVByb3ZpZGVycy5ESUFMT0cpIHtcbiAgICAgICAgdXJsID0gZ2V0RGlhbG9nTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZCk7XG5cbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQlJBTkNIKSB7XG4gICAgICAgIHVybCA9ICcvYnJhbmNoZXMvJyArIGRhdGFQcm92aWRlcklkICsgJy9tZXNzYWdlcyc7XG5cbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQ0hBTk5FTCkge1xuICAgICAgICB1cmwgPSAnL2NoYW5uZWxzLycgKyBkYXRhUHJvdmlkZXJJZDtcbiAgICB9XG4gICAgJCgnLm1haW5fX2hlYWRlcl9fbmFtZScpLnRleHQoZXZlbnQudGFyZ2V0LmlubmVyVGV4dC5zcGxpdCgnXFxuJylbMF0pO1xuICAgIGlmIChkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkRJQUxPRyB8fCBkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkJSQU5DSCkge1xuICAgICAgICBsb2FkTWVzc2FnZXModXJsKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQ0hBTk5FTCkge1xuICAgICAgICAkLmdldChcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgJG1haW5Db250ZW50ID0gJCgnLm1haW5fX2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAkbWFpbkNvbnRlbnQuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAkbWFpbkNvbnRlbnQuYXBwZW5kKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG59KS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59KTtcblxuLy8gJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kaWFsb2ctbWVzc2FnZS1zZW5kLWJ0bicsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgbGV0ICRmb3JtID0gJChkb2N1bWVudC5kaWFsb2dfbWVzc2FnZSk7XG4vL1xuLy8gICAgICQuYWpheCh7XG4vLyAgICAgICAgIHVybCA6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuLy8gICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcbi8vICAgICAgICAgZGF0YSA6IHtcbi8vICAgICAgICAgICAgIHRleHQ6ICQoJyNkaWFsb2dfbWVzc2FnZV90ZXh0JykudmFsdWVcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGh0bWwpIHtcbi8vICAgICAgICAgICAgIGxvYWRNZXNzYWdlcyhnZXREaWFsb2dNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKSk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcbi8vIH0pO1xuXG4vLyAkKCcuZHJvcGRvd24tdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgICAgbGV0ICRlbGVtZW50cyA9ICQoJyMnICsgZXZlbnQudGFyZ2V0LmlkKTtcbi8vXG4vLyAgICAgc3dpdGNoICgkZWxlbWVudHMuY3NzKCdkaXNwbGF5JykpIHtcbi8vICAgICAgICAgY2FzZSAnbm9uZSc6ICRlbGVtZW50cy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTsgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgJ2Jsb2NrJzogJGVsZW1lbnRzLmNzcygnZGlzcGxheScsICdub25lJyk7IGJyZWFrO1xuLy8gICAgIH1cbi8vIH0pO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIiQiLCJtZXNzYWdlUHJvdmlkZXJzIiwiRElBTE9HIiwiQlJBTkNIIiwiQ0hBTk5FTCIsImxvYWRNZXNzYWdlcyIsInVybCIsImdldCIsImRhdGEiLCJzdGF0dXMiLCIkbWFpbkNvbnRlbnQiLCJlbXB0eSIsImFwcGVuZCIsIm1lc3NhZ2VzIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZ2V0RGlhbG9nTWVzc2FnZVVybCIsImRhdGFQcm92aWRlcklkIiwiZGF0YVByb3ZpZGVyVHlwZSIsImNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0ZXh0IiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJjaGlsZHJlbiIsImUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9