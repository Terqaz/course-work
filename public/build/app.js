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
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















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
var dataProviderId;
var dataProviderType;
jquery__WEBPACK_IMPORTED_MODULE_15___default()('.message-provider').click(function (event) {
  dataProviderId = event.target.getAttribute('data-provider-id');
  dataProviderType = event.target.getAttribute('data-provider-type');
  var url = '';

  if (dataProviderType === messageProviders.DIALOG) {
    url = getDialogMessageUrl(dataProviderId);
  } else if (dataProviderType === messageProviders.BRANCH) {
    url = getBranchMessageUrl(dataProviderId);
  } else if (dataProviderType === messageProviders.CHANNEL) {
    url = '/channels/' + dataProviderId;
  }

  jquery__WEBPACK_IMPORTED_MODULE_15___default()('.main__header__name').text(event.target.innerText.split('\n')[0]);

  if (dataProviderType === messageProviders.DIALOG || dataProviderType === messageProviders.BRANCH) {
    loadMessages(url);
  } else if (dataProviderType === messageProviders.CHANNEL) {
    jquery__WEBPACK_IMPORTED_MODULE_15___default().get(url, function (data, status) {
      var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_15___default()('.main__content');
      $mainContent.empty();
      $mainContent.append(data);
    });
  }
}).children().click(function (e) {
  return false;
});
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('submit', 'form[name=dialog_message], form[name=branch_message]', function (event) {
  event.preventDefault();
});
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.dialog-message-send-btn', function (event) {
  submitFormAndShowMessage(jquery__WEBPACK_IMPORTED_MODULE_15___default()('form[name=dialog_message]'), getDialogMessageUrl(dataProviderId));
});
jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('click', '.branch-message-send-btn', function (event) {
  submitFormAndShowMessage(jquery__WEBPACK_IMPORTED_MODULE_15___default()('form[name=branch_message]'), getBranchMessageUrl(dataProviderId));
});

function getDialogMessageUrl(dataProviderId) {
  return '/dialog/messages/?other-user-id=' + dataProviderId;
}

function getBranchMessageUrl(dataProviderId) {
  return '/branches/' + dataProviderId + '/messages';
}

function submitFormAndShowMessage($form, $url) {
  jquery__WEBPACK_IMPORTED_MODULE_15___default().ajax({
    url: $form.attr('action'),
    type: $form.attr('method'),
    data: createResponseBody($form),
    complete: function complete(html) {
      loadMessages($url);
    }
  });
}

function createResponseBody($form) {
  var data = {};

  var _iterator = _createForOfIteratorHelper($form[0].elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;

      if (field.name) {
        data[field.name] = field.value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return data;
}

function loadMessages(url) {
  jquery__WEBPACK_IMPORTED_MODULE_15___default().get(url, function (data, status) {
    var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_15___default()('.main__content');
    $mainContent.empty();
    $mainContent.append(data);
    var messages = $mainContent[0];
    messages.scrollTop = messages.scrollHeight;
    var dropdownElementList = document.querySelectorAll('.dropdown-toggle');

    var dropdownList = _toConsumableArray(dropdownElementList).map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  });
} // $('.dropdown-toggle').click(function (event) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-42d8e1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuc2NzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuXHJcbmNvbnN0IG1lc3NhZ2VQcm92aWRlcnMgPSB7RElBTE9HOiAnZGlhbG9nJywgQlJBTkNIOiAnYnJhbmNoJywgQ0hBTk5FTDogJ2NoYW5uZWwnfTtcclxuXHJcbmxldCBkYXRhUHJvdmlkZXJJZDtcclxuXHJcbmxldCBkYXRhUHJvdmlkZXJUeXBlO1xyXG4kKCcubWVzc2FnZS1wcm92aWRlcicpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZGF0YVByb3ZpZGVySWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb3ZpZGVyLWlkJyk7XHJcbiAgICBkYXRhUHJvdmlkZXJUeXBlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm92aWRlci10eXBlJyk7XHJcblxyXG4gICAgbGV0IHVybCA9ICcnO1xyXG5cclxuICAgIGlmIChkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkRJQUxPRykge1xyXG4gICAgICAgIHVybCA9IGdldERpYWxvZ01lc3NhZ2VVcmwoZGF0YVByb3ZpZGVySWQpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZGF0YVByb3ZpZGVyVHlwZSA9PT0gbWVzc2FnZVByb3ZpZGVycy5CUkFOQ0gpIHtcclxuICAgICAgICB1cmwgPSBnZXRCcmFuY2hNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQ0hBTk5FTCkge1xyXG4gICAgICAgIHVybCA9ICcvY2hhbm5lbHMvJyArIGRhdGFQcm92aWRlcklkO1xyXG4gICAgfVxyXG4gICAgJCgnLm1haW5fX2hlYWRlcl9fbmFtZScpLnRleHQoZXZlbnQudGFyZ2V0LmlubmVyVGV4dC5zcGxpdCgnXFxuJylbMF0pO1xyXG4gICAgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuRElBTE9HIHx8IGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQlJBTkNIKSB7XHJcbiAgICAgICAgbG9hZE1lc3NhZ2VzKHVybCk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQ0hBTk5FTCkge1xyXG4gICAgICAgICQuZ2V0KFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCAkbWFpbkNvbnRlbnQgPSAkKCcubWFpbl9fY29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgJG1haW5Db250ZW50LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAkbWFpbkNvbnRlbnQuYXBwZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSkuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGlhbG9nX21lc3NhZ2VdLCBmb3JtW25hbWU9YnJhbmNoX21lc3NhZ2VdJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZGlhbG9nLW1lc3NhZ2Utc2VuZC1idG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHN1Ym1pdEZvcm1BbmRTaG93TWVzc2FnZShcclxuICAgICAgICAkKCdmb3JtW25hbWU9ZGlhbG9nX21lc3NhZ2VdJyksXHJcbiAgICAgICAgZ2V0RGlhbG9nTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZClcclxuICAgICk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5icmFuY2gtbWVzc2FnZS1zZW5kLWJ0bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgc3VibWl0Rm9ybUFuZFNob3dNZXNzYWdlKFxyXG4gICAgICAgICQoJ2Zvcm1bbmFtZT1icmFuY2hfbWVzc2FnZV0nKSxcclxuICAgICAgICBnZXRCcmFuY2hNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKVxyXG4gICAgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXREaWFsb2dNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKSB7XHJcbiAgICByZXR1cm4gJy9kaWFsb2cvbWVzc2FnZXMvP290aGVyLXVzZXItaWQ9JyArIGRhdGFQcm92aWRlcklkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCcmFuY2hNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKSB7XHJcbiAgICByZXR1cm4gJy9icmFuY2hlcy8nICsgZGF0YVByb3ZpZGVySWQgKyAnL21lc3NhZ2VzJztcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybUFuZFNob3dNZXNzYWdlKCRmb3JtLCAkdXJsKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgZGF0YTogY3JlYXRlUmVzcG9uc2VCb2R5KCRmb3JtKSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgbG9hZE1lc3NhZ2VzKCR1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXNwb25zZUJvZHkoJGZvcm0pIHtcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mICRmb3JtWzBdLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUpIHtcclxuICAgICAgICAgICAgZGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVzc2FnZXModXJsKSB7XHJcbiAgICAkLmdldChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xyXG4gICAgICAgICAgICBsZXQgJG1haW5Db250ZW50ID0gJCgnLm1haW5fX2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgJG1haW5Db250ZW50LmVtcHR5KCk7XHJcbiAgICAgICAgICAgICRtYWluQ29udGVudC5hcHBlbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlcyA9ICRtYWluQ29udGVudFswXTtcclxuICAgICAgICAgICAgbWVzc2FnZXMuc2Nyb2xsVG9wID0gbWVzc2FnZXMuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi10b2dnbGUnKVxyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkxpc3QgPSBbLi4uZHJvcGRvd25FbGVtZW50TGlzdF0ubWFwKGRyb3Bkb3duVG9nZ2xlRWwgPT4gbmV3IGJvb3RzdHJhcC5Ecm9wZG93bihkcm9wZG93blRvZ2dsZUVsKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gJCgnLmRyb3Bkb3duLXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4vLyAgICAgbGV0ICRlbGVtZW50cyA9ICQoJyMnICsgZXZlbnQudGFyZ2V0LmlkKTtcclxuLy9cclxuLy8gICAgIHN3aXRjaCAoJGVsZW1lbnRzLmNzcygnZGlzcGxheScpKSB7XHJcbi8vICAgICAgICAgY2FzZSAnbm9uZSc6ICRlbGVtZW50cy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTsgYnJlYWs7XHJcbi8vICAgICAgICAgY2FzZSAnYmxvY2snOiAkZWxlbWVudHMuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTsgYnJlYWs7XHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiJCIsIm1lc3NhZ2VQcm92aWRlcnMiLCJESUFMT0ciLCJCUkFOQ0giLCJDSEFOTkVMIiwiZGF0YVByb3ZpZGVySWQiLCJkYXRhUHJvdmlkZXJUeXBlIiwiY2xpY2siLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInVybCIsImdldERpYWxvZ01lc3NhZ2VVcmwiLCJnZXRCcmFuY2hNZXNzYWdlVXJsIiwidGV4dCIsImlubmVyVGV4dCIsInNwbGl0IiwibG9hZE1lc3NhZ2VzIiwiZ2V0IiwiZGF0YSIsInN0YXR1cyIsIiRtYWluQ29udGVudCIsImVtcHR5IiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJlIiwiZG9jdW1lbnQiLCJvbiIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0Rm9ybUFuZFNob3dNZXNzYWdlIiwiJGZvcm0iLCIkdXJsIiwiYWpheCIsImF0dHIiLCJ0eXBlIiwiY3JlYXRlUmVzcG9uc2VCb2R5IiwiY29tcGxldGUiLCJodG1sIiwiZWxlbWVudHMiLCJmaWVsZCIsIm5hbWUiLCJ2YWx1ZSIsIm1lc3NhZ2VzIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZHJvcGRvd25FbGVtZW50TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcm9wZG93bkxpc3QiLCJtYXAiLCJkcm9wZG93blRvZ2dsZUVsIiwiYm9vdHN0cmFwIiwiRHJvcGRvd24iLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9