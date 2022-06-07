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
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
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
jquery__WEBPACK_IMPORTED_MODULE_14___default()('.message-provider').click(function (event) {
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

  jquery__WEBPACK_IMPORTED_MODULE_14___default()('.main__header__name').text(event.target.innerText.split('\n')[0]);

  if (dataProviderType === messageProviders.DIALOG || dataProviderType === messageProviders.BRANCH) {
    loadMessages(url);
  } else if (dataProviderType === messageProviders.CHANNEL) {
    jquery__WEBPACK_IMPORTED_MODULE_14___default().get(url, function (data, status) {
      var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.main__content');
      $mainContent.empty();
      $mainContent.append(data);
    });
  }
}).children().click(function (e) {
  return false;
});
jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('submit', 'form[name=dialog_message], form[name=branch_message]', function (event) {
  event.preventDefault();
});
jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.dialog-message-send-btn', function (event) {
  submitFormAndShowMessage(jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=dialog_message]'), getDialogMessageUrl(dataProviderId));
});
jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('click', '.branch-message-send-btn', function (event) {
  submitFormAndShowMessage(jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=branch_message]'), getBranchMessageUrl(dataProviderId));
});
jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('submit', 'form[name=dialog_message_search]', function (event) {
  event.preventDefault();
  var $form = jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=dialog_message_search]');
  var query = $form[0].q.value;
  jquery__WEBPACK_IMPORTED_MODULE_14___default().ajax({
    // path('app_dialog_message_index', {'other-user-id': otherUserId})
    url: $form.attr('action') + '&q=' + query,
    type: $form.attr('method'),
    complete: function complete(response) {
      setContent(response.responseText);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=dialog_message_search]')[0].q.value = query;
    }
  });
});
jquery__WEBPACK_IMPORTED_MODULE_14___default()(document).on('submit', 'form[name=branch_message_search]', function (event) {
  event.preventDefault();
  var $form = jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=branch_message_search]');
  var query = $form[0].q.value;
  jquery__WEBPACK_IMPORTED_MODULE_14___default().ajax({
    // path('app_branch_messages', {'id': branch.id})
    url: $form.attr('action') + '?q=' + query,
    type: $form.attr('method'),
    complete: function complete(response) {
      setContent(response.responseText);
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('form[name=branch_message_search]')[0].q.value = query;
    }
  });
});

function getDialogMessageUrl(dataProviderId) {
  return '/dialog/messages/?other-user-id=' + dataProviderId;
}

function getBranchMessageUrl(dataProviderId) {
  return '/branches/' + dataProviderId + '/messages';
}

function submitFormAndShowMessage($form, $url) {
  jquery__WEBPACK_IMPORTED_MODULE_14___default().ajax({
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
  jquery__WEBPACK_IMPORTED_MODULE_14___default().get(url, function (data, status) {
    setContent(data);
  });
}

function setContent(data) {
  var $mainContent = jquery__WEBPACK_IMPORTED_MODULE_14___default()('.main__content');
  $mainContent.empty();
  $mainContent.append(data);
  var messages = $mainContent[0];
  messages.scrollTop = messages.scrollHeight;
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-6fb593"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSx5SUFBRCxDQUE1QixFQU1QO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLnNjc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcblxyXG5jb25zdCBtZXNzYWdlUHJvdmlkZXJzID0ge0RJQUxPRzogJ2RpYWxvZycsIEJSQU5DSDogJ2JyYW5jaCcsIENIQU5ORUw6ICdjaGFubmVsJ307XHJcblxyXG5sZXQgZGF0YVByb3ZpZGVySWQ7XHJcbmxldCBkYXRhUHJvdmlkZXJUeXBlO1xyXG5cclxuJCgnLm1lc3NhZ2UtcHJvdmlkZXInKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGRhdGFQcm92aWRlcklkID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm92aWRlci1pZCcpO1xyXG4gICAgZGF0YVByb3ZpZGVyVHlwZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvdmlkZXItdHlwZScpO1xyXG5cclxuICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICBpZiAoZGF0YVByb3ZpZGVyVHlwZSA9PT0gbWVzc2FnZVByb3ZpZGVycy5ESUFMT0cpIHtcclxuICAgICAgICB1cmwgPSBnZXREaWFsb2dNZXNzYWdlVXJsKGRhdGFQcm92aWRlcklkKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFQcm92aWRlclR5cGUgPT09IG1lc3NhZ2VQcm92aWRlcnMuQlJBTkNIKSB7XHJcbiAgICAgICAgdXJsID0gZ2V0QnJhbmNoTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZCk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkNIQU5ORUwpIHtcclxuICAgICAgICB1cmwgPSAnL2NoYW5uZWxzLycgKyBkYXRhUHJvdmlkZXJJZDtcclxuICAgIH1cclxuICAgICQoJy5tYWluX19oZWFkZXJfX25hbWUnKS50ZXh0KGV2ZW50LnRhcmdldC5pbm5lclRleHQuc3BsaXQoJ1xcbicpWzBdKTtcclxuICAgIGlmIChkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkRJQUxPRyB8fCBkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkJSQU5DSCkge1xyXG4gICAgICAgIGxvYWRNZXNzYWdlcyh1cmwpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhUHJvdmlkZXJUeXBlID09PSBtZXNzYWdlUHJvdmlkZXJzLkNIQU5ORUwpIHtcclxuICAgICAgICAkLmdldChcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgJG1haW5Db250ZW50ID0gJCgnLm1haW5fX2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICRtYWluQ29udGVudC5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgJG1haW5Db250ZW50LmFwcGVuZChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0pLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWRpYWxvZ19tZXNzYWdlXSwgZm9ybVtuYW1lPWJyYW5jaF9tZXNzYWdlXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmRpYWxvZy1tZXNzYWdlLXNlbmQtYnRuJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBzdWJtaXRGb3JtQW5kU2hvd01lc3NhZ2UoXHJcbiAgICAgICAgJCgnZm9ybVtuYW1lPWRpYWxvZ19tZXNzYWdlXScpLFxyXG4gICAgICAgIGdldERpYWxvZ01lc3NhZ2VVcmwoZGF0YVByb3ZpZGVySWQpXHJcbiAgICApO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnJhbmNoLW1lc3NhZ2Utc2VuZC1idG4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHN1Ym1pdEZvcm1BbmRTaG93TWVzc2FnZShcclxuICAgICAgICAkKCdmb3JtW25hbWU9YnJhbmNoX21lc3NhZ2VdJyksXHJcbiAgICAgICAgZ2V0QnJhbmNoTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZClcclxuICAgICk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGlhbG9nX21lc3NhZ2Vfc2VhcmNoXScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgJGZvcm0gPSAkKCdmb3JtW25hbWU9ZGlhbG9nX21lc3NhZ2Vfc2VhcmNoXScpXHJcbiAgICBsZXQgcXVlcnkgPSAkZm9ybVswXS5xLnZhbHVlO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICAvLyBwYXRoKCdhcHBfZGlhbG9nX21lc3NhZ2VfaW5kZXgnLCB7J290aGVyLXVzZXItaWQnOiBvdGhlclVzZXJJZH0pXHJcbiAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSArICcmcT0nICsgcXVlcnksXHJcbiAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBzZXRDb250ZW50KHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICQoJ2Zvcm1bbmFtZT1kaWFsb2dfbWVzc2FnZV9zZWFyY2hdJylbMF0ucS52YWx1ZSA9IHF1ZXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWJyYW5jaF9tZXNzYWdlX3NlYXJjaF0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0ICRmb3JtID0gJCgnZm9ybVtuYW1lPWJyYW5jaF9tZXNzYWdlX3NlYXJjaF0nKTtcclxuICAgIGxldCBxdWVyeSA9ICRmb3JtWzBdLnEudmFsdWU7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICAgIC8vIHBhdGgoJ2FwcF9icmFuY2hfbWVzc2FnZXMnLCB7J2lkJzogYnJhbmNoLmlkfSlcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpICsgJz9xPScgKyBxdWVyeSxcclxuICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgJCgnZm9ybVtuYW1lPWJyYW5jaF9tZXNzYWdlX3NlYXJjaF0nKVswXS5xLnZhbHVlID0gcXVlcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGlhbG9nTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZCkge1xyXG4gICAgcmV0dXJuICcvZGlhbG9nL21lc3NhZ2VzLz9vdGhlci11c2VyLWlkPScgKyBkYXRhUHJvdmlkZXJJZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QnJhbmNoTWVzc2FnZVVybChkYXRhUHJvdmlkZXJJZCkge1xyXG4gICAgcmV0dXJuICcvYnJhbmNoZXMvJyArIGRhdGFQcm92aWRlcklkICsgJy9tZXNzYWdlcyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm1BbmRTaG93TWVzc2FnZSgkZm9ybSwgJHVybCkge1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgIGRhdGE6IGNyZWF0ZVJlc3BvbnNlQm9keSgkZm9ybSksXHJcbiAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIGxvYWRNZXNzYWdlcygkdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVzcG9uc2VCb2R5KCRmb3JtKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiAkZm9ybVswXS5lbGVtZW50cykge1xyXG4gICAgICAgIGlmIChmaWVsZC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGRhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1lc3NhZ2VzKHVybCkge1xyXG4gICAgJC5nZXQoXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcclxuICAgICAgICAgICAgc2V0Q29udGVudChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb250ZW50KGRhdGEpIHtcclxuICAgIGxldCAkbWFpbkNvbnRlbnQgPSAkKCcubWFpbl9fY29udGVudCcpO1xyXG4gICAgJG1haW5Db250ZW50LmVtcHR5KCk7XHJcbiAgICAkbWFpbkNvbnRlbnQuYXBwZW5kKGRhdGEpO1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gJG1haW5Db250ZW50WzBdO1xyXG4gICAgbWVzc2FnZXMuc2Nyb2xsVG9wID0gbWVzc2FnZXMuc2Nyb2xsSGVpZ2h0O1xyXG59XHJcblxyXG4vLyAkKCcuZHJvcGRvd24tdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgICBsZXQgJGVsZW1lbnRzID0gJCgnIycgKyBldmVudC50YXJnZXQuaWQpO1xyXG4vL1xyXG4vLyAgICAgc3dpdGNoICgkZWxlbWVudHMuY3NzKCdkaXNwbGF5JykpIHtcclxuLy8gICAgICAgICBjYXNlICdub25lJzogJGVsZW1lbnRzLmNzcygnZGlzcGxheScsICdibG9jaycpOyBicmVhaztcclxuLy8gICAgICAgICBjYXNlICdibG9jayc6ICRlbGVtZW50cy5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpOyBicmVhaztcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCIkIiwibWVzc2FnZVByb3ZpZGVycyIsIkRJQUxPRyIsIkJSQU5DSCIsIkNIQU5ORUwiLCJkYXRhUHJvdmlkZXJJZCIsImRhdGFQcm92aWRlclR5cGUiLCJjbGljayIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidXJsIiwiZ2V0RGlhbG9nTWVzc2FnZVVybCIsImdldEJyYW5jaE1lc3NhZ2VVcmwiLCJ0ZXh0IiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJsb2FkTWVzc2FnZXMiLCJnZXQiLCJkYXRhIiwic3RhdHVzIiwiJG1haW5Db250ZW50IiwiZW1wdHkiLCJhcHBlbmQiLCJjaGlsZHJlbiIsImUiLCJkb2N1bWVudCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRGb3JtQW5kU2hvd01lc3NhZ2UiLCIkZm9ybSIsInF1ZXJ5IiwicSIsInZhbHVlIiwiYWpheCIsImF0dHIiLCJ0eXBlIiwiY29tcGxldGUiLCJyZXNwb25zZSIsInNldENvbnRlbnQiLCJyZXNwb25zZVRleHQiLCIkdXJsIiwiY3JlYXRlUmVzcG9uc2VCb2R5IiwiaHRtbCIsImVsZW1lbnRzIiwiZmllbGQiLCJuYW1lIiwibWVzc2FnZXMiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9