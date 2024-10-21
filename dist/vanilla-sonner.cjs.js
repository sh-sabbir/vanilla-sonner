'use strict';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var CloseIcon = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"1.5\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\n    <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n    <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n  </svg>\n";

var _excluded = ["message"];
var VanillaSooner = /*#__PURE__*/function () {
  function VanillaSooner(_options) {
    var _this = this;
    _classCallCheck(this, VanillaSooner);
    _defineProperty(this, "defaults", {
      invert: false,
      position: "bottom-right",
      hotkey: ["altKey", "KeyT"],
      expand: false,
      closeButton: true,
      offset: "",
      theme: "light",
      className: "",
      richColors: false,
      duration: 5000,
      style: {},
      visibleToasts: 3,
      toastOptions: {},
      dir: "auto",
      gap: 10,
      loadingIcon: null,
      icons: {},
      containerAriaLabel: "Notifications",
      pauseWhenPageIsHidden: true,
      width: 356
    });
    _defineProperty(this, "VIEWPORT_OFFSET", "32px");
    _defineProperty(this, "TOAST_LIFETIME", 4000);
    _defineProperty(this, "toastFunction", function (message, data) {
      var id = (data === null || data === void 0 ? void 0 : data.id) || _this.toastsCounter++;
      _this.addToast(_objectSpread2(_objectSpread2({
        title: message
      }, data), {}, {
        id: id
      }));

      // console.log(this.toasts);

      return id;
    });
    _defineProperty(this, "getHistory", function () {
      return _this.toasts;
    });
    _defineProperty(this, "on", function (eventName, callback) {
      if (!_this.listeners[eventName]) {
        _this.listeners[eventName] = [];
      }
      _this.listeners[eventName].push(callback);
    });
    _defineProperty(this, "emit", function (eventName, data) {
      if (_this.listeners[eventName]) {
        _this.listeners[eventName].forEach(function (callback) {
          callback(data);
        });
      }
    });
    _defineProperty(this, "subscribe", function () {
      _this.on("newtoast", function (data) {
        // console.log("Toast created:", data);
        // calculate position
        _this.possiblePositions = Array.from(new Set([_this.options.position].concat(_this.toasts.filter(function (toast) {
          return toast.position;
        }).map(function (toast) {
          return toast.position;
        }))));

        // console.log(this.toasts);

        if (_this.toasts.length <= 1) {
          _this.setExpanded(false);
        }
        if (_this.toasts.length) {
          _this.showToasts();
        }

        // console.log("position:", this.possiblePositions);
      });
    });
    _defineProperty(this, "setExpanded", function (value) {
      _this.expanded = value;
    });
    _defineProperty(this, "setHeights", function (toastId, position, newHeight) {
      var alreadyExists = _this.heights.find(function (height) {
        return height.toastId === toastId;
      });
      if (!alreadyExists) {
        _this.heights = [{
          toastId: toastId,
          height: newHeight,
          position: position
        }].concat(_toConsumableArray(_this.heights));
      } else {
        _this.heights = _this.heights.map(function (height) {
          return height.toastId === toastId ? _objectSpread2(_objectSpread2({}, height), {}, {
            height: newHeight
          }) : height;
        });
      }
    });
    _defineProperty(this, "getHeight", function (elm) {
      var tempLi = document.createElement("div");
      elm.style.setProperty("--width", "".concat(_this.options.width, "px"));
      elm.style.setProperty("position", "unset !important");
      tempLi.innerHTML = elm.outerHTML;
      tempLi.style.position = "absolute";
      tempLi.style.visibility = "hidden";
      document.body.appendChild(tempLi);
      var height = window.getComputedStyle(tempLi).height;
      document.body.removeChild(tempLi);
      elm.style.setProperty("--width", "");
      elm.style.setProperty("position", "");
      return parseFloat(height);
    });
    _defineProperty(this, "getDocumentDirection", function () {
      if (typeof window === "undefined") return "ltr";
      if (typeof document === "undefined") return "ltr"; // For Fresh purpose

      var dirAttribute = document.documentElement.getAttribute("dir");
      if (dirAttribute === "auto" || !dirAttribute) {
        return window.getComputedStyle(document.documentElement).direction;
      }
      return dirAttribute;
    });
    _defineProperty(this, "composeToastItem", function (toast, toastOptions, orderedList) {
      var _toastOptions$classNa, _toast$classNames, _toastOptions$classNa2, _toastOptions$classNa3, _toast$classNames2, _toast$richColors, _this$heights$;
      // console.log(toastOptions);

      var isFront = toastOptions.index === 0;
      toastOptions.index + 1 <= toastOptions.visibleToasts;
      // console.log(toastOptions.index + 1, toastOptions.visibleToasts);

      var toastType = toast.type;
      toast.dismissible !== false;
      var toastClassname = toast.className || "";
      toast.descriptionClassName || "";
      toast.duration || toastOptions.duration || _this.TOAST_LIFETIME;
      var _toastOptions$positio = toastOptions.position.split("-"),
        _toastOptions$positio2 = _slicedToArray(_toastOptions$positio, 2),
        y = _toastOptions$positio2[0],
        x = _toastOptions$positio2[1];
      var initialHeight = "0px";
      var invert = toast.invert || toastOptions.ToasterInvert;
      var important = toast.important ? "assertive" : "polite";
      var listItem = document.createElement("li");
      listItem.setAttribute("aria-live", important);
      listItem.setAttribute("aria-atomic", "true");
      listItem.setAttribute("role", "status");
      listItem.setAttribute("tabindex", "0");
      listItem.setAttribute("key", "".concat(toastOptions.position, "-").concat(toastOptions.index));
      listItem.className = _this.cn(toastOptions.className, toastClassname, (_toastOptions$classNa = toastOptions.classNames) === null || _toastOptions$classNa === void 0 ? void 0 : _toastOptions$classNa.toast, toast === null || toast === void 0 || (_toast$classNames = toast.classNames) === null || _toast$classNames === void 0 ? void 0 : _toast$classNames.toast, (_toastOptions$classNa2 = toastOptions.classNames) === null || _toastOptions$classNa2 === void 0 ? void 0 : _toastOptions$classNa2.default, (_toastOptions$classNa3 = toastOptions.classNames) === null || _toastOptions$classNa3 === void 0 ? void 0 : _toastOptions$classNa3[toastType], toast === null || toast === void 0 || (_toast$classNames2 = toast.classNames) === null || _toast$classNames2 === void 0 ? void 0 : _toast$classNames2[toastType]);
      listItem.setAttribute("data-sonner-toast", "");
      listItem.setAttribute("data-rich-colors", (_toast$richColors = toast.richColors) !== null && _toast$richColors !== void 0 ? _toast$richColors : toastOptions.defaultRichColors);
      listItem.setAttribute("data-styled", "true");
      listItem.setAttribute("data-mounted", "false");
      listItem.setAttribute("data-promise", "false");
      listItem.setAttribute("data-removed", "false");
      // listItem.setAttribute("data-visible", isVisible);
      listItem.setAttribute("data-y-position", y);
      listItem.setAttribute("data-x-position", x);
      listItem.setAttribute("data-index", toastOptions.index);
      listItem.setAttribute("data-front", isFront);
      listItem.setAttribute("data-swiping", "false");
      listItem.setAttribute("data-dismissible", "true");
      listItem.setAttribute("data-type", toastType);
      listItem.setAttribute("data-invert", invert);
      listItem.setAttribute("data-swipe-out", "false");
      listItem.setAttribute("data-expanded", _this.expanded || toastOptions.expandByDefault);
      listItem.style.setProperty("--index", toastOptions.index);
      listItem.style.setProperty("--toasts-before", toastOptions.index);
      listItem.style.setProperty("--z-index", toastOptions.toasts.length - toastOptions.index);
      {
        var closeButton = document.createElement("button");
        closeButton.setAttribute("data-disabled", false);
        closeButton.setAttribute("data-close-button", true);
        closeButton.innerHTML = CloseIcon;
        listItem.appendChild(closeButton);
      }
      var contentDiv = document.createElement("div");
      contentDiv.setAttribute("data-content", "");
      contentDiv.className = "";
      var titleDiv = document.createElement("div");
      titleDiv.setAttribute("data-title", "");
      titleDiv.className = "";
      titleDiv.textContent = toast.title;
      var descriptionDiv = document.createElement("div");
      descriptionDiv.setAttribute("data-description", "");
      descriptionDiv.className = "";
      descriptionDiv.innerHTML = toast.description;
      contentDiv.appendChild(titleDiv);
      contentDiv.appendChild(descriptionDiv);
      listItem.appendChild(contentDiv);

      // Calculate heights
      var listItemHeight = _this.getHeight(listItem);
      _this.setHeights(toast.id, toastOptions.position, listItemHeight);
      initialHeight = listItemHeight;
      var heightIndex = _this.heights.findIndex(function (height) {
        return height.toastId === toast.id;
      }) || 0;
      var toastsHeightBefore = _this.heights.reduce(function (prev, curr, reducerIndex) {
        if (reducerIndex >= heightIndex) {
          return prev;
        }
        return prev + curr.height;
      }, 0);
      heightIndex * _this.options.gap + toastsHeightBefore;
      // console.log(heightIndex, toastsHeightBefore);
      // console.log(offset);

      // listItem.style.setProperty("--offset", `${offset}px`);
      listItem.style.setProperty("--initial-height", toastOptions.expandByDefault ? "auto" : "".concat(initialHeight, "px"));
      orderedList.style.setProperty("--front-toast-height", "".concat(((_this$heights$ = _this.heights[0]) === null || _this$heights$ === void 0 ? void 0 : _this$heights$.height) || 0, "px"));
      return listItem;
    });
    _defineProperty(this, "addFocusBlurListeners", function (element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isFocusWithin = false;
      var lastFocusedElement = null;
      var onBlur = options.onBlur,
        onFocus = options.onFocus,
        _options$preventScrol = options.preventScroll,
        preventScroll = _options$preventScrol === void 0 ? true : _options$preventScrol;
      element.addEventListener("blur", function (event) {
        if (isFocusWithin && !element.contains(event.relatedTarget)) {
          isFocusWithin = false;
          if (lastFocusedElement) {
            lastFocusedElement.focus({
              preventScroll: preventScroll
            });
            lastFocusedElement = null;
          }
          if (typeof onBlur === "function") {
            onBlur(event);
          }
        }
      });
      element.addEventListener("focus", function (event) {
        var isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === "false";
        if (isNotDismissible) return;
        if (!isFocusWithin) {
          isFocusWithin = true;
          lastFocusedElement = event.relatedTarget;
          if (typeof onFocus === "function") {
            onFocus(event);
          }
        }
      }, true);

      // Handle mouse enter
      element.addEventListener("mouseenter", function (event) {
        var childDivs = event.target.children;
        if (childDivs.length > 1) {
          for (var i = childDivs.length - 1; i >= 0; i--) {
            var childDiv = childDivs[i];
            childDiv.setAttribute("data-expanded", true);
          }
        }

        // console.log("Mouse entered the element", childDivs);
      });

      // Handle mouse move
      // element.addEventListener("mousemove", (event) => {
      //   const childDivs = event.target.children;
      //   console.log("Mouse is moving within the element", childDivs);
      // });

      // Handle mouse leave
      element.addEventListener("mouseleave", function (event) {
        var childDivs = event.target.children;
        if (childDivs.length > 1) {
          for (var i = childDivs.length - 1; i >= 0; i--) {
            var childDiv = childDivs[i];
            childDiv.setAttribute("data-expanded", false);
          }
        }

        // console.log("Mouse left the element", childDivs);
      });
    });
    _defineProperty(this, "showToasts", function () {
      var container = document.querySelector("section[data-sooner-container]");
      if (!container) {
        container = document.createElement("section");
        container.setAttribute("data-sooner-container", "");
        container.tabIndex = -1;
        document.body.appendChild(container);
      }
      var toastOptions = {
        defaultRichColors: _this.options.richColors,
        duration: _this.options.duration,
        className: _this.options.className,
        descriptionClassName: _this.options.descriptionClassName,
        invert: _this.options.invert,
        visibleToasts: _this.options.visibleToasts,
        classNames: _this.options.classNames,
        expandByDefault: _this.options.expand,
        gap: _this.options.gap,
        expanded: _this.options.expanded
      };
      _this.possiblePositions.map(function (position, index) {
        var _position$split = position.split("-"),
          _position$split2 = _slicedToArray(_position$split, 2),
          y = _position$split2[0],
          x = _position$split2[1];
        var orderedList = document.querySelector("body section[data-sooner-container] ol[key=\"".concat(position, "\"]"));
        if (!orderedList) {
          orderedList = document.createElement("ol");
          orderedList.setAttribute("key", position);
          orderedList.setAttribute("dir", _this.options.dir === "auto" ? _this.getDocumentDirection() : _this.options.dir);
          orderedList.setAttribute("tabIndex", -1);
          orderedList.setAttribute("class", _this.options.className);
          orderedList.setAttribute("data-sonner-toaster", "");
          orderedList.setAttribute("data-theme", _this.options.theme);
          orderedList.setAttribute("data-y-position", y);
          orderedList.setAttribute("data-x-position", x);
          var offset = typeof _this.options.offset === "number" ? "".concat(_this.options.offset, "px") : _this.options.offset || _this.VIEWPORT_OFFSET;
          orderedList.style.setProperty("--offset", offset);
          orderedList.style.setProperty("--width", "".concat(_this.options.width, "px"));
          orderedList.style.setProperty("--gap", "".concat(_this.options.gap, "px"));
          _this.addFocusBlurListeners(orderedList, {
            onBlur: function onBlur(event) {
              return console.log("List blur", event);
            },
            onFocus: function onFocus(event) {
              return console.log("List focus", event);
            }
          });
          container.appendChild(orderedList);
        }
        _this.toasts.filter(function (toast) {
          return !toast.position && index === 0 || toast.position === position;
        }).map(function (toast, index) {
          var itemSelector = "body section[data-sooner-container] ol[key=\"".concat(position, "\"] [key=\"").concat(position, "-").concat(index, "\"]");
          var alreadyExists = document.querySelector(itemSelector);
          if (!alreadyExists) {
            toastOptions.toasts = _this.toasts.filter(function (t) {
              return t.position == toast.position;
            });
            toastOptions.heights = _this.heights.filter(function (h) {
              return h.position == toast.position;
            });
            toastOptions.index = index;
            toastOptions.position = position;
            var item = _this.composeToastItem(toast, toastOptions, orderedList);
            // orderedList.appendChild(item);
            orderedList.prepend(item);

            // Get all child divs
            var childDivs = orderedList.children;
            var newItem = document.querySelector(itemSelector);

            // Update the data-index attribute of each child div
            if (childDivs.length > 1) {
              for (var i = childDivs.length - 1; i >= 0; i--) {
                var childDiv = childDivs[i];
                var currentIndex = parseInt(childDiv.getAttribute("data-index"));
                var newIndex = currentIndex + 1;
                var isVisible = newIndex <= toastOptions.visibleToasts - 1;
                var listItemHeight = _this.getHeight(childDiv);
                var gap = _this.options.gap * newIndex;
                childDiv.setAttribute("data-index", newIndex);
                childDiv.setAttribute("data-visible", isVisible);
                childDiv.setAttribute("data-front", false);
                childDiv.style.setProperty("--index", newIndex);
                childDiv.style.setProperty("--toasts-before", newIndex);
                childDiv.style.setProperty("--offset", "".concat(newIndex * listItemHeight + gap, "px"));
                childDiv.style.setProperty("--z-index", childDivs.length - newIndex);
              }
            }
            newItem === null || newItem === void 0 || newItem.setAttribute("data-index", 0);
            newItem === null || newItem === void 0 || newItem.setAttribute("data-front", true);
            newItem === null || newItem === void 0 || newItem.setAttribute("data-visible", true);
            newItem === null || newItem === void 0 || newItem.style.setProperty("--index", 0);
            newItem === null || newItem === void 0 || newItem.style.setProperty("--offset", 0);
            newItem === null || newItem === void 0 || newItem.style.setProperty("--toasts-before", 0);
            newItem === null || newItem === void 0 || newItem.style.setProperty("--z-index", childDivs.length);

            // setTimeout(() => {

            // }, 100);

            setTimeout(function () {
              newItem === null || newItem === void 0 || newItem.setAttribute("data-mounted", "true");
            }, 100);
          }
        });
      });
    });
    _defineProperty(this, "toast", Object.assign(this.toastFunction, {
      success: this.success,
      info: this.info,
      warning: this.warning,
      error: this.error,
      message: this.message,
      dismiss: this.dismiss
    }, {
      getHistory: this.getHistory
    }));
    this.version = "1.12.0";
    this.options = {};
    this.toastElement = null;
    this._rootElement = document.body;
    this.toasts = [];
    this.toastsCounter = 1;
    this.heights = [];
    this._init(_options);
  }
  return _createClass(VanillaSooner, [{
    key: "_init",
    value: function _init(options) {
      // Setting defaults
      this.options = Object.assign(this.defaults, options);
      this.possiblePositions = [];

      // Set event listener
      this.listeners = {};
      this.subscribe();
    }
  }, {
    key: "addToast",
    value: function addToast(data) {
      this.toasts = [].concat(_toConsumableArray(this.toasts), [data]);
      this.emit("newtoast", data);
      console.log(this.toasts);
    }
  }, {
    key: "create",
    value: function create(data) {
      var _data$id,
        _this2 = this;
      var message = data.message,
        rest = _objectWithoutProperties(data, _excluded);
      var id = typeof (data === null || data === void 0 ? void 0 : data.id) === "number" || ((_data$id = data.id) === null || _data$id === void 0 ? void 0 : _data$id.length) > 0 ? data.id : this.toastsCounter++;
      var alreadyExists = this.toasts.find(function (toast) {
        return toast.id === id;
      });
      var dismissible = data.dismissible === undefined ? true : data.dismissible;
      if (alreadyExists) {
        this.toasts = this.toasts.map(function (toast) {
          if (toast.id === id) {
            _this2.emit("newtoast", _objectSpread2(_objectSpread2(_objectSpread2({}, toast), data), {}, {
              id: id,
              title: message
            }));
            return _objectSpread2(_objectSpread2(_objectSpread2({}, toast), data), {}, {
              id: id,
              dismissible: dismissible,
              title: message
            });
          }
          return toast;
        });
      } else {
        this.addToast(_objectSpread2(_objectSpread2({
          title: message
        }, rest), {}, {
          dismissible: dismissible,
          id: id
        }));
      }
      return id;
    }
  }, {
    key: "dismiss",
    value: function dismiss(id) {
      var _this3 = this;
      if (!id) {
        this.toasts.forEach(function (toast) {
          _this3.listeners.forEach(function (callbacks) {
            callbacks.forEach(function (callback) {
              callback({
                id: toast.id,
                dismiss: true
              });
            });
          });
        });
      }
      this.listeners.forEach(function (callbacks) {
        callbacks.forEach(function (callback) {
          callback({
            id: id,
            dismiss: true
          });
        });
      });
      return id;
    }
  }, {
    key: "message",
    value: function message(_message, data) {
      return this.create(_objectSpread2(_objectSpread2({}, data), {}, {
        message: _message
      }));
    }
  }, {
    key: "error",
    value: function error(message, data) {
      return this.create(_objectSpread2(_objectSpread2({}, data), {}, {
        message: message,
        type: "error"
      }));
    }
  }, {
    key: "success",
    value: function success(message, data) {
      return this.create(_objectSpread2(_objectSpread2({}, data), {}, {
        type: "success",
        message: message
      }));
    }
  }, {
    key: "info",
    value: function info(message, data) {
      return this.create(_objectSpread2(_objectSpread2({}, data), {}, {
        type: "info",
        message: message
      }));
    }
  }, {
    key: "warning",
    value: function warning(message, data) {
      return this.create(_objectSpread2(_objectSpread2({}, data), {}, {
        type: "warning",
        message: message
      }));
    }
  }, {
    key: "cn",
    value: function cn() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }
      return classes.filter(Boolean).join(" ");
    }
  }]);
}();

module.exports = VanillaSooner;
