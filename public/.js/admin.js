(self["webpackChunk"] = self["webpackChunk"] || []).push([["/.js/admin"],{

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.$ = __webpack_require__.g.jQuery = __webpack_require__.g.require('jquery');

__webpack_require__(/*! jquery/dist/jquery.min */ "./node_modules/jquery/dist/jquery.min.js");

__webpack_require__(/*! jquery-ui/ui/jquery-1-7 */ "./node_modules/jquery-ui/ui/jquery-1-7.js");

__webpack_require__(/*! ../template/assets/js/popper.js/popper.min */ "./resources/template/assets/js/popper.js/popper.min.js");

__webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");

__webpack_require__(/*! ../template/assets/pages/widget/excanvas */ "./resources/template/assets/pages/widget/excanvas.js");

__webpack_require__(/*! ../template/assets/pages/waves/js/waves.min */ "./resources/template/assets/pages/waves/js/waves.min.js");

__webpack_require__(/*! jquery-slimscroll/jquery.slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");

__webpack_require__(/*! ../template/assets/js/modernizr/modernizr */ "./resources/template/assets/js/modernizr/modernizr.js");

__webpack_require__(/*! ../template/assets/js/SmoothScroll */ "./resources/template/assets/js/SmoothScroll.js");

__webpack_require__(/*! ../template/assets/js/jquery.mCustomScrollbar.concat.min */ "./resources/template/assets/js/jquery.mCustomScrollbar.concat.min.js");

__webpack_require__(/*! ../template/assets/js/chart.js/Chart */ "./resources/template/assets/js/chart.js/Chart.js");

__webpack_require__(/*! ../template/assets/pages/widget/amchart/gauge */ "./resources/template/assets/pages/widget/amchart/gauge.js");

__webpack_require__(/*! ../template/assets/pages/widget/amchart/serial */ "./resources/template/assets/pages/widget/amchart/serial.js");

__webpack_require__(/*! ../template/assets/pages/widget/amchart/light */ "./resources/template/assets/pages/widget/amchart/light.js");

__webpack_require__(/*! ../template/assets/pages/widget/amchart/pie.min */ "./resources/template/assets/pages/widget/amchart/pie.min.js");

__webpack_require__(/*! ../template/assets/js/pcoded.min */ "./resources/template/assets/js/pcoded.min.js");

__webpack_require__(/*! ../template/assets/js/vertical-layout.min */ "./resources/template/assets/js/vertical-layout.min.js");

__webpack_require__(/*! ../template/assets/pages/dashboard/custom-dashboard */ "./resources/template/assets/pages/dashboard/custom-dashboard.js");

__webpack_require__(/*! ../template/assets/js/script */ "./resources/template/assets/js/script.js");

/***/ }),

/***/ "./resources/template/assets/js/SmoothScroll.js":
/*!******************************************************!*\
  !*** ./resources/template/assets/js/SmoothScroll.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//
(function () {
  // Scroll Variables (tweakable)
  var defaultOptions = {
    // Scrolling Core
    frameRate: 150,
    // [Hz]
    animationTime: 400,
    // [ms]
    stepSize: 100,
    // [px]
    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    // Acceleration
    accelerationDelta: 50,
    // 50
    accelerationMax: 3,
    // 3
    // Keyboard Settings
    keyboardSupport: true,
    // option
    arrowScroll: 50,
    // [px]
    // Other
    touchpadSupport: false,
    // ignore touchpad by default
    fixedBackground: true,
    excluded: ''
  };
  var options = defaultOptions; // Other Variables

  var isExcluded = false;
  var isFrame = false;
  var direction = {
    x: 0,
    y: 0
  };
  var initDone = false;
  var root = document.documentElement;
  var activeElement;
  var observer;
  var refreshSize;
  var deltaBuffer = [];
  var isMac = /^Mac/.test(navigator.platform);
  var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  };
  /***********************************************
   * INITIALIZE
   ***********************************************/

  /**
   * Tests if smooth scrolling is allowed. Shuts down everything if not.
   */

  function initTest() {
    if (options.keyboardSupport) {
      addEvent('keydown', keydown);
    }
  }
  /**
   * Sets up scrolls array, determines if frames are involved.
   */


  function init() {
    if (initDone || !document.body) return;
    initDone = true;
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight; // check compat mode for root element

    root = document.compatMode.indexOf('CSS') >= 0 ? html : body;
    activeElement = body;
    initTest(); // Checks if this script is running in a frame

    if (top != self) {
      isFrame = true;
    }
    /**
     * Please duplicate this radar for a Safari fix! 
     * rdar://22376037
     * https://openradar.appspot.com/radar?id=4965070979203072
     * 
     * Only applies to Safari now, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' + root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem); // DOM changed (throttled) to fix height

        var pendingRefresh;

        refreshSize = function refreshSize() {
          if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);

          pendingRefresh = setTimeout(function () {
            if (isExcluded) return; // could be running after cleanup

            fullPageElem.style.height = '0';
            fullPageElem.style.height = root.scrollHeight + 'px';
            pendingRefresh = null;
          }, 500); // act rarely to stay fast
        };

        setTimeout(refreshSize, 10);
        addEvent('resize', refreshSize); // TODO: attributeFilter?

        var config = {
          attributes: true,
          childList: true,
          characterData: false // subtree: true

        };
        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
          var clearfix = document.createElement('div');
          clearfix.style.clear = 'both';
          body.appendChild(clearfix);
        }
      } // disable fixed background


    if (!options.fixedBackground && !isExcluded) {
      body.style.backgroundAttachment = 'scroll';
      html.style.backgroundAttachment = 'scroll';
    }
  }
  /**
   * Removes event listeners and other traces left on the page.
   */


  function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
  }
  /************************************************
   * SCROLLING 
   ************************************************/


  var que = [];
  var pending = false;
  var lastScroll = Date.now();
  /**
   * Pushes scroll actions to the scrolling queue.
   */

  function scrollArray(elem, left, top) {
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
      var now = Date.now();
      var elapsed = now - lastScroll;

      if (elapsed < options.accelerationDelta) {
        var factor = (1 + 50 / elapsed) / 2;

        if (factor > 1) {
          factor = Math.min(factor, options.accelerationMax);
          left *= factor;
          top *= factor;
        }
      }

      lastScroll = Date.now();
    } // push a scroll command


    que.push({
      x: left,
      y: top,
      lastX: left < 0 ? 0.99 : -0.99,
      lastY: top < 0 ? 0.99 : -0.99,
      start: Date.now()
    }); // don't act if there's a pending queue

    if (pending) {
      return;
    }

    var scrollWindow = elem === document.body;

    var step = function step(time) {
      var now = Date.now();
      var scrollX = 0;
      var scrollY = 0;

      for (var i = 0; i < que.length; i++) {
        var item = que[i];
        var elapsed = now - item.start;
        var finished = elapsed >= options.animationTime; // scroll position: [0, 1]

        var position = finished ? 1 : elapsed / options.animationTime; // easing [optional]

        if (options.pulseAlgorithm) {
          position = pulse(position);
        } // only need the difference


        var x = item.x * position - item.lastX >> 0;
        var y = item.y * position - item.lastY >> 0; // add this to the total scrolling

        scrollX += x;
        scrollY += y; // update last values

        item.lastX += x;
        item.lastY += y; // delete and step back if it's over

        if (finished) {
          que.splice(i, 1);
          i--;
        }
      } // scroll left and top


      if (scrollWindow) {
        window.scrollBy(scrollX, scrollY);
      } else {
        if (scrollX) elem.scrollLeft += scrollX;
        if (scrollY) elem.scrollTop += scrollY;
      } // clean up if there's nothing left to do


      if (!left && !top) {
        que = [];
      }

      if (que.length) {
        requestFrame(step, elem, 1000 / options.frameRate + 1);
      } else {
        pending = false;
      }
    }; // start a new queue of actions


    requestFrame(step, elem, 0);
    pending = true;
  }
  /***********************************************
   * EVENTS
   ***********************************************/

  /**
   * Mouse wheel handler.
   * @param {Object} event
   */


  function wheel(event) {
    if (!initDone) {
      init();
    }

    var target = event.target;
    var overflowing = overflowingAncestor(target); // use default if there's no overflowing
    // element or default action is prevented   
    // or it's a zooming event with CTRL 

    if (!overflowing || event.defaultPrevented || event.ctrlKey) {
      return true;
    } // leave embedded content alone (flash & pdf)


    if (isNodeName(activeElement, 'embed') || isNodeName(target, 'embed') && /\.pdf/i.test(target.src) || isNodeName(activeElement, 'object')) {
      return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;

    if (isMac) {
      if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
        deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
      }

      if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
        deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
      }
    } // use wheelDelta if deltaX/Y is not available


    if (!deltaX && !deltaY) {
      deltaY = -event.wheelDelta || 0;
    } // line based scrolling (Firefox mostly)


    if (event.deltaMode === 1) {
      deltaX *= 40;
      deltaY *= 40;
    } // check if it's a touchpad scroll that should be ignored


    if (!options.touchpadSupport && isTouchpad(deltaY)) {
      return true;
    } // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes


    if (Math.abs(deltaX) > 1.2) {
      deltaX *= options.stepSize / 120;
    }

    if (Math.abs(deltaY) > 1.2) {
      deltaY *= options.stepSize / 120;
    }

    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
  }
  /**
   * Keydown event handler.
   * @param {Object} event
   */


  function keydown(event) {
    var target = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar; // our own tracked active element could've been removed from the DOM

    if (!document.contains(activeElement)) {
      activeElement = document.activeElement;
    } // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements


    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;

    if (inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || event.defaultPrevented || modifier) {
      return true;
    } // spacebar should trigger button press


    if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
      return true;
    }

    var shift,
        x = 0,
        y = 0;
    var elem = overflowingAncestor(activeElement);
    var clientHeight = elem.clientHeight;

    if (elem == document.body) {
      clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
      case key.up:
        y = -options.arrowScroll;
        break;

      case key.down:
        y = options.arrowScroll;
        break;

      case key.spacebar:
        // (+ shift)
        shift = event.shiftKey ? 1 : -1;
        y = -shift * clientHeight * 0.9;
        break;

      case key.pageup:
        y = -clientHeight * 0.9;
        break;

      case key.pagedown:
        y = clientHeight * 0.9;
        break;

      case key.home:
        y = -elem.scrollTop;
        break;

      case key.end:
        var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
        y = damt > 0 ? damt + 10 : 0;
        break;

      case key.left:
        x = -options.arrowScroll;
        break;

      case key.right:
        x = options.arrowScroll;
        break;

      default:
        return true;
      // a key we don't care about
    }

    scrollArray(elem, x, y);
    event.preventDefault();
    scheduleClearCache();
  }
  /**
   * Mousedown event only for updating activeElement
   */


  function mousedown(event) {
    activeElement = event.target;
  }
  /***********************************************
   * OVERFLOW
   ***********************************************/


  var uniqueID = function () {
    var i = 0;
    return function (el) {
      return el.uniqueID || (el.uniqueID = i++);
    };
  }();

  var cache = {}; // cleared out after a scrolling session

  var clearCacheTimer; //setInterval(function () { cache = {}; }, 10 * 1000);

  function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () {
      cache = {};
    }, 1 * 1000);
  }

  function setCache(elems, overflowing) {
    for (var i = elems.length; i--;) {
      cache[uniqueID(elems[i])] = overflowing;
    }

    return overflowing;
  } //  (body)                (root)
  //         | hidden | visible | scroll |  auto  |
  // hidden  |   no   |    no   |   YES  |   YES  |
  // visible |   no   |   YES   |   YES  |   YES  |
  // scroll  |   no   |   YES   |   YES  |   YES  |
  // auto    |   no   |   YES   |   YES  |   YES  |


  function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;

    do {
      var cached = cache[uniqueID(el)];

      if (cached) {
        return setCache(elems, cached);
      }

      elems.push(el);

      if (rootScrollHeight === el.scrollHeight) {
        var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
        var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);

        if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
          return setCache(elems, getScrollRoot());
        }
      } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
        return setCache(elems, el);
      }
    } while (el = el.parentElement);
  }

  function isContentOverflowing(el) {
    return el.clientHeight + 10 < el.scrollHeight;
  } // typically for <body> and <html>


  function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return overflow !== 'hidden';
  } // for all other elements


  function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return overflow === 'scroll' || overflow === 'auto';
  }
  /***********************************************
   * HELPERS
   ***********************************************/


  function addEvent(type, fn) {
    window.addEventListener(type, fn, false);
  }

  function removeEvent(type, fn) {
    window.removeEventListener(type, fn, false);
  }

  function isNodeName(el, tag) {
    return (el.nodeName || '').toLowerCase() === tag.toLowerCase();
  }

  function directionCheck(x, y) {
    x = x > 0 ? 1 : -1;
    y = y > 0 ? 1 : -1;

    if (direction.x !== x || direction.y !== y) {
      direction.x = x;
      direction.y = y;
      que = [];
      lastScroll = 0;
    }
  }

  var deltaBufferTimer;

  if (window.localStorage && localStorage.SS_deltaBuffer) {
    deltaBuffer = localStorage.SS_deltaBuffer.split(',');
  }

  function isTouchpad(deltaY) {
    if (!deltaY) return;

    if (!deltaBuffer.length) {
      deltaBuffer = [deltaY, deltaY, deltaY];
    }

    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
      if (window.localStorage) {
        localStorage.SS_deltaBuffer = deltaBuffer.join(',');
      }
    }, 1000);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
  }

  function isDivisible(n, divisor) {
    return Math.floor(n / divisor) == n / divisor;
  }

  function allDeltasDivisableBy(divisor) {
    return isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor);
  }

  function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;

    if (document.URL.indexOf('www.youtube.com/watch') != -1) {
      do {
        isControl = elem.classList && elem.classList.contains('html5-video-controls');
        if (isControl) break;
      } while (elem = elem.parentNode);
    }

    return isControl;
  }

  var requestFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element, delay) {
      window.setTimeout(callback, delay || 1000 / 60);
    };
  }();

  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  var getScrollRoot = function () {
    var SCROLL_ROOT;
    return function () {
      if (!SCROLL_ROOT) {
        var dummy = document.createElement('div');
        dummy.style.cssText = 'height:10000px;width:1px;';
        document.body.appendChild(dummy);
        var bodyScrollTop = document.body.scrollTop;
        var docElScrollTop = document.documentElement.scrollTop;
        window.scrollBy(0, 3);
        if (document.body.scrollTop != bodyScrollTop) SCROLL_ROOT = document.body;else SCROLL_ROOT = document.documentElement;
        window.scrollBy(0, -3);
        document.body.removeChild(dummy);
      }

      return SCROLL_ROOT;
    };
  }();
  /***********************************************
   * PULSE (by Michael Herf)
   ***********************************************/

  /**
   * Viscous fluid with a pulse for part and decay for the rest.
   * - Applies a fixed force over an interval (a damped acceleration), and
   * - Lets the exponential bleed away the velocity over a longer interval
   * - Michael Herf, http://stereopsis.com/stopping/
   */


  function pulse_(x) {
    var val, start, expx; // test

    x = x * options.pulseScale;

    if (x < 1) {
      // acceleartion
      val = x - (1 - Math.exp(-x));
    } else {
      // tail
      // the previous animation ended here:
      start = Math.exp(-1); // simple viscous drag

      x -= 1;
      expx = 1 - Math.exp(-x);
      val = start + expx * (1 - start);
    }

    return val * options.pulseNormalize;
  }

  function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
      options.pulseNormalize /= pulse_(1);
    }

    return pulse_(x);
  }
  /***********************************************
   * FIRST RUN
   ***********************************************/


  var userAgent = window.navigator.userAgent;
  var isEdge = /Edge/.test(userAgent); // thank you MS

  var isChrome = /chrome/i.test(userAgent) && !isEdge;
  var isSafari = /safari/i.test(userAgent) && !isEdge;
  var isMobile = /mobile/i.test(userAgent);
  var isEnabledForBrowser = (isChrome || isSafari) && !isMobile;
  var wheelEvent;
  if ('onwheel' in document.createElement('div')) wheelEvent = 'wheel';else if ('onmousewheel' in document.createElement('div')) wheelEvent = 'mousewheel';

  if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
  }
  /***********************************************
   * PUBLIC INTERFACE
   ***********************************************/


  function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet) {
      if (defaultOptions.hasOwnProperty(key)) options[key] = optionsToSet[key];
    }
  }

  SmoothScroll.destroy = cleanup;
  if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return SmoothScroll;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})();

/***/ }),

/***/ "./resources/template/assets/js/chart.js/Chart.js":
/*!********************************************************!*\
  !*** ./resources/template/assets/js/chart.js/Chart.js ***!
  \********************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object") module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var e; }
}(function () {
  return function t(e, n, i) {
    function a(o, l) {
      if (!n[o]) {
        if (!e[o]) {
          var s = undefined;
          if (!l && s) return require(o, !0);
          if (r) return r(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = n[o] = {
          exports: {}
        };
        e[o][0].call(d.exports, function (t) {
          var n = e[o][1][t];
          return a(n ? n : t);
        }, d, d.exports, t, e, n, i);
      }

      return n[o].exports;
    }

    for (var r = undefined, o = 0; o < i.length; o++) {
      a(i[o]);
    }

    return a;
  }({
    1: [function (t, e, n) {}, {}],
    2: [function (t, e, n) {
      function i(t) {
        if (t) {
          var e = /^#([a-fA-F0-9]{3})$/,
              n = /^#([a-fA-F0-9]{6})$/,
              i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
              r = /(\w+)/,
              o = [0, 0, 0],
              l = 1,
              s = t.match(e);

          if (s) {
            s = s[1];

            for (var u = 0; u < o.length; u++) {
              o[u] = parseInt(s[u] + s[u], 16);
            }
          } else if (s = t.match(n)) {
            s = s[1];

            for (var u = 0; u < o.length; u++) {
              o[u] = parseInt(s.slice(2 * u, 2 * u + 2), 16);
            }
          } else if (s = t.match(i)) {
            for (var u = 0; u < o.length; u++) {
              o[u] = parseInt(s[u + 1]);
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(a)) {
            for (var u = 0; u < o.length; u++) {
              o[u] = Math.round(2.55 * parseFloat(s[u + 1]));
            }

            l = parseFloat(s[4]);
          } else if (s = t.match(r)) {
            if ("transparent" == s[1]) return [0, 0, 0, 0];
            if (o = y[s[1]], !o) return;
          }

          for (var u = 0; u < o.length; u++) {
            o[u] = b(o[u], 0, 255);
          }

          return l = l || 0 == l ? b(l, 0, 1) : 1, o[3] = l, o;
        }
      }

      function a(t) {
        if (t) {
          var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = t.match(e);

          if (n) {
            var i = parseFloat(n[4]),
                a = b(parseInt(n[1]), 0, 360),
                r = b(parseFloat(n[2]), 0, 100),
                o = b(parseFloat(n[3]), 0, 100),
                l = b(isNaN(i) ? 1 : i, 0, 1);
            return [a, r, o, l];
          }
        }
      }

      function r(t) {
        if (t) {
          var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
              n = t.match(e);

          if (n) {
            var i = parseFloat(n[4]),
                a = b(parseInt(n[1]), 0, 360),
                r = b(parseFloat(n[2]), 0, 100),
                o = b(parseFloat(n[3]), 0, 100),
                l = b(isNaN(i) ? 1 : i, 0, 1);
            return [a, r, o, l];
          }
        }
      }

      function o(t) {
        var e = i(t);
        return e && e.slice(0, 3);
      }

      function l(t) {
        var e = a(t);
        return e && e.slice(0, 3);
      }

      function s(t) {
        var e = i(t);
        return e ? e[3] : (e = a(t)) ? e[3] : (e = r(t)) ? e[3] : void 0;
      }

      function u(t) {
        return "#" + x(t[0]) + x(t[1]) + x(t[2]);
      }

      function d(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }

      function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function h(t, e) {
        if (1 > e || t[3] && t[3] < 1) return f(t, e);
        var n = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            a = Math.round(t[2] / 255 * 100);
        return "rgb(" + n + "%, " + i + "%, " + a + "%)";
      }

      function f(t, e) {
        var n = Math.round(t[0] / 255 * 100),
            i = Math.round(t[1] / 255 * 100),
            a = Math.round(t[2] / 255 * 100);
        return "rgba(" + n + "%, " + i + "%, " + a + "%, " + (e || t[3] || 1) + ")";
      }

      function g(t, e) {
        return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
      }

      function p(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function m(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
      }

      function v(t) {
        return k[t.slice(0, 3)];
      }

      function b(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }

      function x(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      var y = t(6);
      e.exports = {
        getRgba: i,
        getHsla: a,
        getRgb: o,
        getHsl: l,
        getHwb: r,
        getAlpha: s,
        hexString: u,
        rgbString: d,
        rgbaString: c,
        percentString: h,
        percentaString: f,
        hslString: g,
        hslaString: p,
        hwbString: m,
        keyword: v
      };
      var k = {};

      for (var w in y) {
        k[y[w]] = w;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, n) {
      var i = t(5),
          a = t(2),
          r = function r(t) {
        if (t instanceof r) return t;
        if (!(this instanceof r)) return new r(t);
        this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        };
        var e;
        "string" == typeof t ? (e = a.getRgba(t), e ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e)) : "object" == _typeof(t) && (e = t, void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : (void 0 !== e.c || void 0 !== e.cyan) && this.setValues("cmyk", e));
      };

      r.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t %= 360, t = 0 > t ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              n = t.luminosity();
          return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb,
              e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
          return 128 > e;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; 3 > e; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              n = (e[0] + t) % 360;
          return e[0] = 0 > n ? 360 + n : n, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var n = this,
              i = t,
              a = void 0 === e ? .5 : e,
              r = 2 * a - 1,
              o = n.alpha() - i.alpha(),
              l = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
              s = 1 - l;
          return this.rgb(l * n.red() + s * i.red(), l * n.green() + s * i.green(), l * n.blue() + s * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              n = new r(),
              i = this.values,
              a = n.values;

          for (var o in i) {
            i.hasOwnProperty(o) && (t = i[o], e = {}.toString.call(t), "[object Array]" === e ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
          }

          return n;
        }
      }, r.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, r.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, r.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
          n[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (n.a = e.alpha), n;
      }, r.prototype.setValues = function (t, e) {
        var n,
            a = this.values,
            r = this.spaces,
            o = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (n = 0; n < t.length; n++) {
            a[t][n] = e[t.charAt(n)];
          }

          l = e.a;
        } else if (void 0 !== e[r[t][0]]) {
          var s = r[t];

          for (n = 0; n < t.length; n++) {
            a[t][n] = e[s[n]];
          }

          l = e.alpha;
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
        var u;

        for (n = 0; n < t.length; n++) {
          u = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(u);
        }

        for (var d in r) {
          d !== t && (a[d] = i[t][d](a[t]));
        }

        return !0;
      }, r.prototype.setSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
      }, r.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = r), e.exports = r;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, n) {
      function i(t) {
        var e,
            n,
            i,
            a = t[0] / 255,
            r = t[1] / 255,
            o = t[2] / 255,
            l = Math.min(a, r, o),
            s = Math.max(a, r, o),
            u = s - l;
        return s == l ? e = 0 : a == s ? e = (r - o) / u : r == s ? e = 2 + (o - a) / u : o == s && (e = 4 + (a - r) / u), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (l + s) / 2, n = s == l ? 0 : .5 >= i ? u / (s + l) : u / (2 - s - l), [e, 100 * n, 100 * i];
      }

      function a(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2],
            l = Math.min(a, r, o),
            s = Math.max(a, r, o),
            u = s - l;
        return n = 0 == s ? 0 : u / s * 1e3 / 10, s == l ? e = 0 : a == s ? e = (r - o) / u : r == s ? e = 2 + (o - a) / u : o == s && (e = 4 + (a - r) / u), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = s / 255 * 1e3 / 10, [e, n, i];
      }

      function o(t) {
        var e = t[0],
            n = t[1],
            a = t[2],
            r = i(t)[0],
            o = 1 / 255 * Math.min(e, Math.min(n, a)),
            a = 1 - 1 / 255 * Math.max(e, Math.max(n, a));
        return [r, 100 * o, 100 * a];
      }

      function l(t) {
        var e,
            n,
            i,
            a,
            r = t[0] / 255,
            o = t[1] / 255,
            l = t[2] / 255;
        return a = Math.min(1 - r, 1 - o, 1 - l), e = (1 - r - a) / (1 - a) || 0, n = (1 - o - a) / (1 - a) || 0, i = (1 - l - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a];
      }

      function s(t) {
        return Z[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
        e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
        var a = .4124 * e + .3576 * n + .1805 * i,
            r = .2126 * e + .7152 * n + .0722 * i,
            o = .0193 * e + .1192 * n + .9505 * i;
        return [100 * a, 100 * r, 100 * o];
      }

      function d(t) {
        var e,
            n,
            i,
            a = u(t),
            r = a[0],
            o = a[1],
            l = a[2];
        return r /= 95.047, o /= 100, l /= 108.883, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * o - 16, n = 500 * (r - o), i = 200 * (o - l), [e, n, i];
      }

      function c(t) {
        return B(d(t));
      }

      function h(t) {
        var e,
            n,
            i,
            a,
            r,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100;
        if (0 == l) return r = 255 * s, [r, r, r];
        n = .5 > s ? s * (1 + l) : s + l - s * l, e = 2 * s - n, a = [0, 0, 0];

        for (var u = 0; 3 > u; u++) {
          i = o + 1 / 3 * -(u - 1), 0 > i && i++, i > 1 && i--, r = 1 > 6 * i ? e + 6 * (n - e) * i : 1 > 2 * i ? n : 2 > 3 * i ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
        }

        return a;
      }

      function f(t) {
        var e,
            n,
            i = t[0],
            a = t[1] / 100,
            r = t[2] / 100;
        return 0 === r ? [0, 0, 0] : (r *= 2, a *= 1 >= r ? r : 2 - r, n = (r + a) / 2, e = 2 * a / (r + a), [i, 100 * e, 100 * n]);
      }

      function p(t) {
        return o(h(t));
      }

      function m(t) {
        return l(h(t));
      }

      function v(t) {
        return s(h(t));
      }

      function x(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            r = e - Math.floor(e),
            o = 255 * i * (1 - n),
            l = 255 * i * (1 - n * r),
            s = 255 * i * (1 - n * (1 - r)),
            i = 255 * i;

        switch (a) {
          case 0:
            return [i, s, o];

          case 1:
            return [l, i, o];

          case 2:
            return [o, i, s];

          case 3:
            return [o, l, i];

          case 4:
            return [s, o, i];

          case 5:
            return [i, o, l];
        }
      }

      function y(t) {
        var e,
            n,
            i = t[0],
            a = t[1] / 100,
            r = t[2] / 100;
        return n = (2 - a) * r, e = a * r, e /= 1 >= n ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n];
      }

      function k(t) {
        return o(x(t));
      }

      function w(t) {
        return l(x(t));
      }

      function M(t) {
        return s(x(t));
      }

      function S(t) {
        var e,
            n,
            i,
            a,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100,
            u = l + s;

        switch (u > 1 && (l /= u, s /= u), e = Math.floor(6 * o), n = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = l + i * (n - l), e) {
          default:
          case 6:
          case 0:
            r = n, g = a, b = l;
            break;

          case 1:
            r = a, g = n, b = l;
            break;

          case 2:
            r = l, g = n, b = a;
            break;

          case 3:
            r = l, g = a, b = n;
            break;

          case 4:
            r = a, g = l, b = n;
            break;

          case 5:
            r = n, g = l, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function C(t) {
        return i(S(t));
      }

      function D(t) {
        return a(S(t));
      }

      function I(t) {
        return l(S(t));
      }

      function A(t) {
        return s(S(t));
      }

      function P(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100,
            l = t[3] / 100;
        return e = 1 - Math.min(1, a * (1 - l) + l), n = 1 - Math.min(1, r * (1 - l) + l), i = 1 - Math.min(1, o * (1 - l) + l), [255 * e, 255 * n, 255 * i];
      }

      function _(t) {
        return i(P(t));
      }

      function T(t) {
        return a(P(t));
      }

      function F(t) {
        return o(P(t));
      }

      function R(t) {
        return s(P(t));
      }

      function L(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            r = t[1] / 100,
            o = t[2] / 100;
        return e = 3.2406 * a + -1.5372 * r + o * -.4986, n = a * -.9689 + 1.8758 * r + .0415 * o, i = .0557 * a + r * -.204 + 1.057 * o, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n = 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i];
      }

      function V(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2];
        return a /= 95.047, r /= 100, o /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, e = 116 * r - 16, n = 500 * (a - r), i = 200 * (r - o), [e, n, i];
      }

      function O(t) {
        return B(V(t));
      }

      function z(t) {
        var e,
            n,
            i,
            a,
            r = t[0],
            o = t[1],
            l = t[2];
        return 8 >= r ? (n = 100 * r / 903.3, a = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((r + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = .008856 >= e / 95.047 ? e = 95.047 * (o / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + a, 3), i = .008859 >= i / 108.883 ? i = 108.883 * (a - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - l / 200, 3), [e, n, i];
      }

      function B(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2];
        return e = Math.atan2(o, r), n = 360 * e / 2 / Math.PI, 0 > n && (n += 360), i = Math.sqrt(r * r + o * o), [a, i, n];
      }

      function W(t) {
        return L(z(t));
      }

      function N(t) {
        var e,
            n,
            i,
            a = t[0],
            r = t[1],
            o = t[2];
        return i = o / 360 * 2 * Math.PI, e = r * Math.cos(i), n = r * Math.sin(i), [a, e, n];
      }

      function E(t) {
        return z(N(t));
      }

      function H(t) {
        return W(N(t));
      }

      function q(t) {
        return J[t];
      }

      function j(t) {
        return i(q(t));
      }

      function Y(t) {
        return a(q(t));
      }

      function U(t) {
        return o(q(t));
      }

      function X(t) {
        return l(q(t));
      }

      function K(t) {
        return d(q(t));
      }

      function G(t) {
        return u(q(t));
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: l,
        rgb2keyword: s,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: c,
        hsl2rgb: h,
        hsl2hsv: f,
        hsl2hwb: p,
        hsl2cmyk: m,
        hsl2keyword: v,
        hsv2rgb: x,
        hsv2hsl: y,
        hsv2hwb: k,
        hsv2cmyk: w,
        hsv2keyword: M,
        hwb2rgb: S,
        hwb2hsl: C,
        hwb2hsv: D,
        hwb2cmyk: I,
        hwb2keyword: A,
        cmyk2rgb: P,
        cmyk2hsl: _,
        cmyk2hsv: T,
        cmyk2hwb: F,
        cmyk2keyword: R,
        keyword2rgb: q,
        keyword2hsl: j,
        keyword2hsv: Y,
        keyword2hwb: U,
        keyword2cmyk: X,
        keyword2lab: K,
        keyword2xyz: G,
        xyz2rgb: L,
        xyz2lab: V,
        xyz2lch: O,
        lab2xyz: z,
        lab2rgb: W,
        lab2lch: B,
        lch2lab: N,
        lch2xyz: E,
        lch2rgb: H
      };
      var J = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          Z = {};

      for (var Q in J) {
        Z[JSON.stringify(J[Q])] = Q;
      }
    }, {}],
    5: [function (t, e, n) {
      var i = t(4),
          a = function a() {
        return new u();
      };

      for (var r in i) {
        a[r + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(r);

        var o = /(\w+)2(\w+)/.exec(r),
            l = o[1],
            s = o[2];
        a[l] = a[l] || {}, a[l][s] = a[r] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var n = i[t](e);
            if ("string" == typeof n || void 0 === n) return n;

            for (var a = 0; a < n.length; a++) {
              n[a] = Math.round(n[a]);
            }

            return n;
          };
        }(r);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var n = this.space,
              i = this.convs[n];
          e = a[n][t](i), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      4: 4
    }],
    6: [function (t, e, n) {
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, n) {
      var i = t(28)();
      t(26)(i), t(40)(i), t(22)(i), t(25)(i), t(30)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(32)(i), t(33)(i), t(31)(i), t(27)(i), t(34)(i), t(35)(i), t(36)(i), t(37)(i), t(38)(i), t(46)(i), t(44)(i), t(45)(i), t(47)(i), t(48)(i), t(49)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
      var a = [];
      a.push(t(41)(i), t(42)(i), t(43)(i)), i.plugins.register(a), e.exports = i, "undefined" != typeof window && (window.Chart = i);
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      36: 36,
      37: 37,
      38: 38,
      40: 40,
      41: 41,
      42: 42,
      43: 43,
      44: 44,
      45: 45,
      46: 46,
      47: 47,
      48: 48,
      49: 49,
      8: 8,
      9: 9
    }],
    8: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, n) {
          return n.type = "bar", new t(e, n);
        };
      };
    }, {}],
    9: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, n) {
          return n.type = "bubble", new t(e, n);
        };
      };
    }, {}],
    10: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, n) {
          return n.type = "doughnut", new t(e, n);
        };
      };
    }, {}],
    11: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, n) {
          return n.type = "line", new t(e, n);
        };
      };
    }, {}],
    12: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, n) {
          return n.type = "polarArea", new t(e, n);
        };
      };
    }, {}],
    13: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, n) {
          return n.type = "radar", new t(e, n);
        };
      };
    }, {}],
    14: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-1"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-1"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              }
            }
          }
        };
        t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, n) {
          return n.type = "scatter", new t(e, n);
        };
      };
    }, {}],
    15: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }],
            yAxes: [{
              type: "linear"
            }]
          }
        }, t.controllers.bar = t.DatasetController.extend({
          dataElementType: t.elements.Rectangle,
          initialize: function initialize() {
            var e,
                n = this;
            t.DatasetController.prototype.initialize.apply(n, arguments), e = n.getMeta(), e.stack = n.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                n,
                i = this,
                a = i.getMeta().data;

            for (i._ruler = i.getRuler(), e = 0, n = a.length; n > e; ++e) {
              i.updateElement(a[e], e, t);
            }
          },
          updateElement: function updateElement(t, n, i) {
            var a = this,
                r = a.chart,
                o = a.getMeta(),
                l = a.getDataset(),
                s = t.custom || {},
                u = r.options.elements.rectangle;
            t._xScale = a.getScaleForId(o.xAxisID), t._yScale = a.getScaleForId(o.yAxisID), t._datasetIndex = a.index, t._index = n, t._model = {
              datasetLabel: l.label,
              label: r.data.labels[n],
              borderSkipped: s.borderSkipped ? s.borderSkipped : u.borderSkipped,
              backgroundColor: s.backgroundColor ? s.backgroundColor : e.getValueAtIndexOrDefault(l.backgroundColor, n, u.backgroundColor),
              borderColor: s.borderColor ? s.borderColor : e.getValueAtIndexOrDefault(l.borderColor, n, u.borderColor),
              borderWidth: s.borderWidth ? s.borderWidth : e.getValueAtIndexOrDefault(l.borderWidth, n, u.borderWidth)
            }, a.updateElementGeometry(t, n, i), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, n) {
            var i = this,
                a = t._model,
                r = i.getValueScale(),
                o = r.getBasePixel(),
                l = r.isHorizontal(),
                s = i._ruler || i.getRuler(),
                u = i.calculateBarValuePixels(i.index, e),
                d = i.calculateBarIndexPixels(i.index, e, s);
            a.horizontal = l, a.base = n ? o : u.base, a.x = l ? n ? o : u.head : d.center, a.y = l ? d.center : n ? o : u.head, a.height = l ? d.size : void 0, a.width = l ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          getStackCount: function getStackCount(t) {
            var e,
                n,
                i = this,
                a = i.chart,
                r = i.getIndexScale(),
                o = r.options.stacked,
                l = void 0 === t ? a.data.datasets.length : t + 1,
                s = [];

            for (e = 0; l > e; ++e) {
              n = a.getDatasetMeta(e), n.bar && a.isDatasetVisible(e) && (o === !1 || o === !0 && -1 === s.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === s.indexOf(n.stack))) && s.push(n.stack);
            }

            return s.length;
          },
          getStackIndex: function getStackIndex(t) {
            return this.getStackCount(t) - 1;
          },
          getRuler: function getRuler() {
            var t = this,
                n = t.getIndexScale(),
                i = n.options,
                a = t.getStackCount(),
                r = n.isHorizontal() ? n.width : n.height,
                o = r / n.ticks.length,
                l = o * i.categoryPercentage,
                s = l / a,
                u = s * i.barPercentage;
            return u = Math.min(e.getValueOrDefault(i.barThickness, u), e.getValueOrDefault(i.maxBarThickness, 1 / 0)), {
              stackCount: a,
              tickSize: o,
              categorySize: l,
              categorySpacing: o - l,
              fullBarSize: s,
              barSize: u,
              barSpacing: s - u,
              scale: n
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var n,
                i,
                a,
                r,
                o,
                l,
                s = this,
                u = s.chart,
                d = s.getMeta(),
                c = s.getValueScale(),
                h = u.data.datasets,
                f = Number(h[t].data[e]),
                g = c.options.stacked,
                p = d.stack,
                m = 0;
            if (g || void 0 === g && void 0 !== p) for (n = 0; t > n; ++n) {
              i = u.getDatasetMeta(n), i.bar && i.stack === p && i.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (a = Number(h[n].data[e]), (0 > f && 0 > a || f >= 0 && a > 0) && (m += a));
            }
            return r = c.getPixelForValue(m), o = c.getPixelForValue(m + f), l = (o - r) / 2, {
              size: l,
              base: r,
              head: o,
              center: o + l / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
            var i = this,
                a = n.scale,
                r = i.chart.isCombo,
                o = i.getStackIndex(t),
                l = a.getPixelForValue(null, e, t, r),
                s = n.barSize;
            return l -= r ? n.tickSize / 2 : 0, l += n.fullBarSize * o, l += n.categorySpacing / 2, l += n.barSpacing / 2, {
              size: s,
              base: l,
              head: l + s,
              center: l + s / 2
            };
          },
          draw: function draw() {
            var t,
                n = this,
                i = n.chart,
                a = n.getMeta().data,
                r = n.getDataset(),
                o = a.length,
                l = 0;

            for (e.canvas.clipArea(i.ctx, i.chartArea); o > l; ++l) {
              t = r.data[l], null === t || void 0 === t || isNaN(t) || a[l].draw();
            }

            e.canvas.unclipArea(i.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var n = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model;
            r.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, r.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var n = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model,
                o = this.chart.options.elements.rectangle;
            r.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, o.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, o.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, o.borderWidth);
          }
        }), t.defaults.horizontalBar = {
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom"
            }],
            yAxes: [{
              position: "left",
              type: "category",
              categoryPercentage: .8,
              barPercentage: .9,
              gridLines: {
                offsetGridLines: !0
              }
            }]
          },
          elements: {
            rectangle: {
              borderSkipped: "left"
            }
          },
          tooltips: {
            callbacks: {
              title: function title(t, e) {
                var n = "";
                return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n;
              },
              label: function label(t, e) {
                var n = e.datasets[t.datasetIndex].label || "";
                return n + ": " + t.xLabel;
              }
            }
          }
        }, t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {}],
    16: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.bubble = {
          hover: {
            mode: "single"
          },
          scales: {
            xAxes: [{
              type: "linear",
              position: "bottom",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              position: "left",
              id: "y-axis-0"
            }]
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                var n = e.datasets[t.datasetIndex].label || "",
                    i = e.datasets[t.datasetIndex].data[t.index];
                return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
              }
            }
          }
        }, t.controllers.bubble = t.DatasetController.extend({
          dataElementType: t.elements.Point,
          update: function update(t) {
            var n = this,
                i = n.getMeta(),
                a = i.data;
            e.each(a, function (e, i) {
              n.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(n, i, a) {
            var r = this,
                o = r.getMeta(),
                l = r.getScaleForId(o.xAxisID),
                s = r.getScaleForId(o.yAxisID),
                u = n.custom || {},
                d = r.getDataset(),
                c = d.data[i],
                h = r.chart.options.elements.point,
                f = r.index;
            e.extend(n, {
              _xScale: l,
              _yScale: s,
              _datasetIndex: f,
              _index: i,
              _model: {
                x: a ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == _typeof(c) ? c : NaN, i, f, r.chart.isCombo),
                y: a ? s.getBasePixel() : s.getPixelForValue(c, i, f),
                radius: a ? 0 : u.radius ? u.radius : r.getRadius(c),
                hitRadius: u.hitRadius ? u.hitRadius : e.getValueAtIndexOrDefault(d.hitRadius, i, h.hitRadius)
              }
            }), t.DatasetController.prototype.removeHoverStyle.call(r, n, h);
            var g = n._model;
            g.skip = u.skip ? u.skip : isNaN(g.x) || isNaN(g.y), n.pivot();
          },
          getRadius: function getRadius(t) {
            return t.r || this.chart.options.elements.point.radius;
          },
          setHoverStyle: function setHoverStyle(n) {
            var i = this;
            t.DatasetController.prototype.setHoverStyle.call(i, n);
            var a = i.chart.data.datasets[n._datasetIndex],
                r = n._index,
                o = n.custom || {},
                l = n._model;
            l.radius = o.hoverRadius ? o.hoverRadius : e.getValueAtIndexOrDefault(a.hoverRadius, r, i.chart.options.elements.point.hoverRadius) + i.getRadius(a.data[r]);
          },
          removeHoverStyle: function removeHoverStyle(e) {
            var n = this;
            t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);
            var i = n.chart.data.datasets[e._datasetIndex].data[e._index],
                a = e.custom || {},
                r = e._model;
            r.radius = a.radius ? a.radius : n.getRadius(i);
          }
        });
      };
    }, {}],
    17: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = t.defaults;
        n.doughnut = {
          animation: {
            animateRotate: !0,
            animateScale: !1
          },
          aspectRatio: 1,
          hover: {
            mode: "single"
          },
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                i = n.datasets,
                a = n.labels;
            if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var n = t.data;
                return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
                  var r = t.getDatasetMeta(0),
                      o = n.datasets[0],
                      l = r.data[a],
                      s = l && l.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : u(o.backgroundColor, a, d.backgroundColor),
                      h = s.borderColor ? s.borderColor : u(o.borderColor, a, d.borderColor),
                      f = s.borderWidth ? s.borderWidth : u(o.borderWidth, a, d.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(o.data[a]) || r.data[a].hidden,
                    index: a
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var n,
                  i,
                  a,
                  r = e.index,
                  o = this.chart;

              for (n = 0, i = (o.data.datasets || []).length; i > n; ++n) {
                a = o.getDatasetMeta(n), a.data[r] && (a.data[r].hidden = !a.data[r].hidden);
              }

              o.update();
            }
          },
          cutoutPercentage: 50,
          rotation: Math.PI * -.5,
          circumference: 2 * Math.PI,
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, n) {
                var i = n.labels[t.index],
                    a = ": " + n.datasets[t.datasetIndex].data[t.index];
                return e.isArray(i) ? (i = i.slice(), i[0] += a) : i += a, i;
              }
            }
          }
        }, n.pie = e.clone(n.doughnut), e.extend(n.pie, {
          cutoutPercentage: 0
        }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, n = 0; t > n; ++n) {
              this.chart.isDatasetVisible(n) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var n = this,
                i = n.chart,
                a = i.chartArea,
                r = i.options,
                o = r.elements.arc,
                l = a.right - a.left - o.borderWidth,
                s = a.bottom - a.top - o.borderWidth,
                u = Math.min(l, s),
                d = {
              x: 0,
              y: 0
            },
                c = n.getMeta(),
                h = r.cutoutPercentage,
                f = r.circumference;

            if (f < 2 * Math.PI) {
              var g = r.rotation % (2 * Math.PI);
              g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
              var p = g + f,
                  m = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  v = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  b = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  w = h / 100,
                  M = {
                x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : w), v.x * (v.x < 0 ? 1 : w)),
                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : w), v.y * (v.y < 0 ? 1 : w))
              },
                  S = {
                x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : w), v.x * (v.x > 0 ? 1 : w)),
                y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : w), v.y * (v.y > 0 ? 1 : w))
              },
                  C = {
                width: .5 * (S.x - M.x),
                height: .5 * (S.y - M.y)
              };
              u = Math.min(l / C.width, s / C.height), d = {
                x: (S.x + M.x) * -.5,
                y: (S.y + M.y) * -.5
              };
            }

            i.borderWidth = n.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), e.each(c.data, function (e, i) {
              n.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, n, i) {
            var a = this,
                r = a.chart,
                o = r.chartArea,
                l = r.options,
                s = l.animation,
                u = (o.left + o.right) / 2,
                d = (o.top + o.bottom) / 2,
                c = l.rotation,
                h = l.rotation,
                f = a.getDataset(),
                g = i && s.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(f.data[n]) * (l.circumference / (2 * Math.PI)),
                p = i && s.animateScale ? 0 : a.innerRadius,
                m = i && s.animateScale ? 0 : a.outerRadius,
                v = e.getValueAtIndexOrDefault;
            e.extend(t, {
              _datasetIndex: a.index,
              _index: n,
              _model: {
                x: u + r.offsetX,
                y: d + r.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: m,
                innerRadius: p,
                label: v(f.label, n, r.data.labels[n])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), i && s.animateRotate || (0 === n ? b.startAngle = l.rotation : b.startAngle = a.getMeta().data[n - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                n = this.getDataset(),
                i = this.getMeta(),
                a = 0;
            return e.each(i.data, function (e, i) {
              t = n.data[i], isNaN(t) || e.hidden || (a += Math.abs(t));
            }), a;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, n, i = 0, a = this.index, r = t.length, o = 0; r > o; o++) {
              e = t[o]._model ? t[o]._model.borderWidth : 0, n = t[o]._chart ? t[o]._chart.config.data.datasets[a].hoverBorderWidth : 0, i = e > i ? e : i, i = n > i ? n : i;
            }

            return i;
          }
        });
      };
    }, {}],
    18: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return n.getValueOrDefault(t.showLine, e.showLines);
        }

        var n = t.helpers;
        t.defaults.line = {
          showLines: !0,
          spanGaps: !1,
          hover: {
            mode: "label"
          },
          scales: {
            xAxes: [{
              type: "category",
              id: "x-axis-0"
            }],
            yAxes: [{
              type: "linear",
              id: "y-axis-0"
            }]
          }
        }, t.controllers.line = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          update: function update(t) {
            var i,
                a,
                r,
                o = this,
                l = o.getMeta(),
                s = l.dataset,
                u = l.data || [],
                d = o.chart.options,
                c = d.elements.line,
                h = o.getScaleForId(l.yAxisID),
                f = o.getDataset(),
                g = e(f, d);

            for (g && (r = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = o.index, s._children = u, s._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: r.tension ? r.tension : n.getValueOrDefault(f.lineTension, c.tension),
              backgroundColor: r.backgroundColor ? r.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: r.borderWidth ? r.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: r.borderColor ? r.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: r.borderCapStyle ? r.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: r.borderDash ? r.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: r.borderDashOffset ? r.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: r.fill ? r.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: r.steppedLine ? r.steppedLine : n.getValueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
            }, s.pivot()), i = 0, a = u.length; a > i; ++i) {
              o.updateElement(u[i], i, t);
            }

            for (g && 0 !== s._model.tension && o.updateBezierControlPoints(), i = 0, a = u.length; a > i; ++i) {
              u[i].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var i = this.chart.options.elements.point.backgroundColor,
                a = this.getDataset(),
                r = t.custom || {};
            return r.backgroundColor ? i = r.backgroundColor : a.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(a.pointBackgroundColor, e, i) : a.backgroundColor && (i = a.backgroundColor), i;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var i = this.chart.options.elements.point.borderColor,
                a = this.getDataset(),
                r = t.custom || {};
            return r.borderColor ? i = r.borderColor : a.pointBorderColor ? i = n.getValueAtIndexOrDefault(a.pointBorderColor, e, i) : a.borderColor && (i = a.borderColor), i;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var i = this.chart.options.elements.point.borderWidth,
                a = this.getDataset(),
                r = t.custom || {};
            return isNaN(r.borderWidth) ? isNaN(a.pointBorderWidth) ? isNaN(a.borderWidth) || (i = a.borderWidth) : i = n.getValueAtIndexOrDefault(a.pointBorderWidth, e, i) : i = r.borderWidth, i;
          },
          updateElement: function updateElement(t, e, i) {
            var a,
                r,
                o = this,
                l = o.getMeta(),
                s = t.custom || {},
                u = o.getDataset(),
                d = o.index,
                c = u.data[e],
                h = o.getScaleForId(l.yAxisID),
                f = o.getScaleForId(l.xAxisID),
                g = o.chart.options.elements.point,
                p = o.chart.data.labels || [],
                m = 1 === p.length || 1 === u.data.length || o.chart.isCombo;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), a = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, d, m), r = i ? h.getBasePixel() : o.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
              x: a,
              y: r,
              skip: s.skip || isNaN(a) || isNaN(r),
              radius: s.radius || n.getValueAtIndexOrDefault(u.pointRadius, e, g.radius),
              pointStyle: s.pointStyle || n.getValueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
              backgroundColor: o.getPointBackgroundColor(t, e),
              borderColor: o.getPointBorderColor(t, e),
              borderWidth: o.getPointBorderWidth(t, e),
              tension: l.dataset._model ? l.dataset._model.tension : 0,
              steppedLine: l.dataset._model ? l.dataset._model.steppedLine : !1,
              hitRadius: s.hitRadius || n.getValueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, n) {
            var i,
                a,
                r,
                o = this,
                l = o.chart,
                s = o.getMeta(),
                u = o.getScaleForId(s.yAxisID),
                d = 0,
                c = 0;

            if (u.options.stacked) {
              for (i = 0; n > i; i++) {
                if (a = l.data.datasets[i], r = l.getDatasetMeta(i), "line" === r.type && r.yAxisID === u.id && l.isDatasetVisible(i)) {
                  var h = Number(u.getRightValue(a.data[e]));
                  0 > h ? c += h || 0 : d += h || 0;
                }
              }

              var f = Number(u.getRightValue(t));
              return 0 > f ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f);
            }

            return u.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }

            var e,
                i,
                a,
                r,
                o,
                l = this,
                s = l.getMeta(),
                u = l.chart.chartArea,
                d = s.data || [];
            if (s.dataset._model.spanGaps && (d = d.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === s.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(d);else for (e = 0, i = d.length; i > e; ++e) {
              a = d[e], r = a._model, o = n.splineCurve(n.previousItem(d, e)._model, r, n.nextItem(d, e)._model, s.dataset._model.tension), r.controlPointPreviousX = o.previous.x, r.controlPointPreviousY = o.previous.y, r.controlPointNextX = o.next.x, r.controlPointNextY = o.next.y;
            }
            if (l.chart.options.elements.line.capBezierPoints) for (e = 0, i = d.length; i > e; ++e) {
              r = d[e]._model, r.controlPointPreviousX = t(r.controlPointPreviousX, u.left, u.right), r.controlPointPreviousY = t(r.controlPointPreviousY, u.top, u.bottom), r.controlPointNextX = t(r.controlPointNextX, u.left, u.right), r.controlPointNextY = t(r.controlPointNextY, u.top, u.bottom);
            }
          },
          draw: function draw() {
            var n = this,
                i = n.chart,
                a = n.getMeta(),
                r = a.data || [],
                o = i.chartArea,
                l = r.length,
                s = 0;

            for (t.canvasHelpers.clipArea(i.ctx, o), e(n.getDataset(), i.options) && a.dataset.draw(), t.canvasHelpers.unclipArea(i.ctx); l > s; ++s) {
              r[s].draw(o);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model;
            r.radius = a.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = a.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(r.backgroundColor)), r.borderColor = a.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(r.borderColor)), r.borderWidth = a.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                i = e.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = t._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), o.radius = r.radius || n.getValueAtIndexOrDefault(i.pointRadius, a, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, a), o.borderColor = e.getPointBorderColor(t, a), o.borderWidth = e.getPointBorderWidth(t, a);
          }
        });
      };
    }, {}],
    19: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.polarArea = {
          scale: {
            type: "radialLinear",
            angleLines: {
              display: !1
            },
            gridLines: {
              circular: !0
            },
            pointLabels: {
              display: !1
            },
            ticks: {
              beginAtZero: !0
            }
          },
          animation: {
            animateRotate: !0,
            animateScale: !0
          },
          startAngle: -.5 * Math.PI,
          aspectRatio: 1,
          legendCallback: function legendCallback(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                i = n.datasets,
                a = n.labels;
            if (i.length) for (var r = 0; r < i[0].data.length; ++r) {
              e.push('<li><span style="background-color:' + i[0].backgroundColor[r] + '"></span>'), a[r] && e.push(a[r]), e.push("</li>");
            }
            return e.push("</ul>"), e.join("");
          },
          legend: {
            labels: {
              generateLabels: function generateLabels(t) {
                var n = t.data;
                return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
                  var r = t.getDatasetMeta(0),
                      o = n.datasets[0],
                      l = r.data[a],
                      s = l.custom || {},
                      u = e.getValueAtIndexOrDefault,
                      d = t.options.elements.arc,
                      c = s.backgroundColor ? s.backgroundColor : u(o.backgroundColor, a, d.backgroundColor),
                      h = s.borderColor ? s.borderColor : u(o.borderColor, a, d.borderColor),
                      f = s.borderWidth ? s.borderWidth : u(o.borderWidth, a, d.borderWidth);
                  return {
                    text: i,
                    fillStyle: c,
                    strokeStyle: h,
                    lineWidth: f,
                    hidden: isNaN(o.data[a]) || r.data[a].hidden,
                    index: a
                  };
                }) : [];
              }
            },
            onClick: function onClick(t, e) {
              var n,
                  i,
                  a,
                  r = e.index,
                  o = this.chart;

              for (n = 0, i = (o.data.datasets || []).length; i > n; ++n) {
                a = o.getDatasetMeta(n), a.data[r].hidden = !a.data[r].hidden;
              }

              o.update();
            }
          },
          tooltips: {
            callbacks: {
              title: function title() {
                return "";
              },
              label: function label(t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              }
            }
          }
        }, t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: t.elements.Arc,
          linkScales: e.noop,
          update: function update(t) {
            var n = this,
                i = n.chart,
                a = i.chartArea,
                r = n.getMeta(),
                o = i.options,
                l = o.elements.arc,
                s = Math.min(a.right - a.left, a.bottom - a.top);
            i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(o.cutoutPercentage ? i.outerRadius / 100 * o.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, r.count = n.countVisibleElements(), e.each(r.data, function (e, i) {
              n.updateElement(e, i, t);
            });
          },
          updateElement: function updateElement(t, n, i) {
            for (var a = this, r = a.chart, o = a.getDataset(), l = r.options, s = l.animation, u = r.scale, d = e.getValueAtIndexOrDefault, c = r.data.labels, h = a.calculateCircumference(o.data[n]), f = u.xCenter, g = u.yCenter, p = 0, m = a.getMeta(), v = 0; n > v; ++v) {
              isNaN(o.data[v]) || m.data[v].hidden || ++p;
            }

            var b = l.startAngle,
                x = t.hidden ? 0 : u.getDistanceFromCenterForValue(o.data[n]),
                y = b + h * p,
                k = y + (t.hidden ? 0 : h),
                w = s.animateScale ? 0 : u.getDistanceFromCenterForValue(o.data[n]);
            e.extend(t, {
              _datasetIndex: a.index,
              _index: n,
              _scale: u,
              _model: {
                x: f,
                y: g,
                innerRadius: 0,
                outerRadius: i ? w : x,
                startAngle: i && s.animateRotate ? b : y,
                endAngle: i && s.animateRotate ? b : k,
                label: d(c, n, c[n])
              }
            }), a.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return e.each(n.data, function (e, n) {
              isNaN(t.data[n]) || e.hidden || i++;
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {}],
    20: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.radar = {
          aspectRatio: 1,
          scale: {
            type: "radialLinear"
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }, t.controllers.radar = t.DatasetController.extend({
          datasetElementType: t.elements.Line,
          dataElementType: t.elements.Point,
          linkScales: e.noop,
          update: function update(t) {
            var n = this,
                i = n.getMeta(),
                a = i.dataset,
                r = i.data,
                o = a.custom || {},
                l = n.getDataset(),
                s = n.chart.options.elements.line,
                u = n.chart.scale;
            void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(i.dataset, {
              _datasetIndex: n.index,
              _scale: u,
              _children: r,
              _loop: !0,
              _model: {
                tension: o.tension ? o.tension : e.getValueOrDefault(l.lineTension, s.tension),
                backgroundColor: o.backgroundColor ? o.backgroundColor : l.backgroundColor || s.backgroundColor,
                borderWidth: o.borderWidth ? o.borderWidth : l.borderWidth || s.borderWidth,
                borderColor: o.borderColor ? o.borderColor : l.borderColor || s.borderColor,
                fill: o.fill ? o.fill : void 0 !== l.fill ? l.fill : s.fill,
                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                borderDash: o.borderDash ? o.borderDash : l.borderDash || s.borderDash,
                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle
              }
            }), i.dataset.pivot(), e.each(r, function (e, i) {
              n.updateElement(e, i, t);
            }, n), n.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, n, i) {
            var a = this,
                r = t.custom || {},
                o = a.getDataset(),
                l = a.chart.scale,
                s = a.chart.options.elements.point,
                u = l.getPointPositionForValue(n, o.data[n]);
            void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), e.extend(t, {
              _datasetIndex: a.index,
              _index: n,
              _scale: l,
              _model: {
                x: i ? l.xCenter : u.x,
                y: i ? l.yCenter : u.y,
                tension: r.tension ? r.tension : e.getValueOrDefault(o.lineTension, a.chart.options.elements.line.tension),
                radius: r.radius ? r.radius : e.getValueAtIndexOrDefault(o.pointRadius, n, s.radius),
                backgroundColor: r.backgroundColor ? r.backgroundColor : e.getValueAtIndexOrDefault(o.pointBackgroundColor, n, s.backgroundColor),
                borderColor: r.borderColor ? r.borderColor : e.getValueAtIndexOrDefault(o.pointBorderColor, n, s.borderColor),
                borderWidth: r.borderWidth ? r.borderWidth : e.getValueAtIndexOrDefault(o.pointBorderWidth, n, s.borderWidth),
                pointStyle: r.pointStyle ? r.pointStyle : e.getValueAtIndexOrDefault(o.pointStyle, n, s.pointStyle),
                hitRadius: r.hitRadius ? r.hitRadius : e.getValueAtIndexOrDefault(o.pointHitRadius, n, s.hitRadius)
              }
            }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                n = this.getMeta();
            e.each(n.data, function (i, a) {
              var r = i._model,
                  o = e.splineCurve(e.previousItem(n.data, a, !0)._model, r, e.nextItem(n.data, a, !0)._model, r.tension);
              r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), i.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var n = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                a = t._index,
                r = t._model;
            r.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, a, e.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, a, e.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, a, r.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var n = this.chart.data.datasets[t._datasetIndex],
                i = t.custom || {},
                a = t._index,
                r = t._model,
                o = this.chart.options.elements.point;
            r.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.pointRadius, a, o.radius), r.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, a, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, a, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, a, o.borderWidth);
          }
        });
      };
    }, {}],
    21: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.animation = {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: e.noop,
          onComplete: e.noop
        }, t.Animation = t.Element.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, n, i) {
            var a,
                r,
                o = this.animations;

            for (e.chart = t, i || (t.animating = !0), a = 0, r = o.length; r > a; ++a) {
              if (o[a].chart === t) return void (o[a] = e);
            }

            o.push(e), 1 === o.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var n = e.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== n && (this.animations.splice(n, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                n = 0;
            t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
            var i = Date.now();
            t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var n, i, a = this.animations, r = 0; r < a.length;) {
              n = a[r], i = n.chart, n.currentStep = (n.currentStep || 0) + t, n.currentStep = Math.min(n.currentStep, n.numSteps), e.callback(n.render, [i, n], i), e.callback(n.onAnimationProgress, [n], i), n.currentStep >= n.numSteps ? (e.callback(n.onAnimationComplete, [n], i), i.animating = !1, a.splice(r, 1)) : ++r;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {}],
    22: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.canvasHelpers = {};
        e.drawPoint = function (e, n, i, a, r) {
          var o, l, s, u, d, c;
          if ("object" == _typeof(n) && (o = n.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return void e.drawImage(n, a - n.width / 2, r - n.height / 2, n.width, n.height);

          if (!(isNaN(i) || 0 >= i)) {
            switch (n) {
              default:
                e.beginPath(), e.arc(a, r, i, 0, 2 * Math.PI), e.closePath(), e.fill();
                break;

              case "triangle":
                e.beginPath(), l = 3 * i / Math.sqrt(3), d = l * Math.sqrt(3) / 2, e.moveTo(a - l / 2, r + d / 3), e.lineTo(a + l / 2, r + d / 3), e.lineTo(a, r - 2 * d / 3), e.closePath(), e.fill();
                break;

              case "rect":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.fillRect(a - c, r - c, 2 * c, 2 * c), e.strokeRect(a - c, r - c, 2 * c, 2 * c);
                break;

              case "rectRounded":
                var h = i / Math.SQRT2,
                    f = a - h,
                    g = r - h,
                    p = Math.SQRT2 * i;
                t.helpers.drawRoundedRectangle(e, f, g, p, p, i / 2), e.fill();
                break;

              case "rectRot":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.moveTo(a - c, r), e.lineTo(a, r + c), e.lineTo(a + c, r), e.lineTo(a, r - c), e.closePath(), e.fill();
                break;

              case "cross":
                e.beginPath(), e.moveTo(a, r + i), e.lineTo(a, r - i), e.moveTo(a - i, r), e.lineTo(a + i, r), e.closePath();
                break;

              case "crossRot":
                e.beginPath(), s = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(a - s, r - u), e.lineTo(a + s, r + u), e.moveTo(a - s, r + u), e.lineTo(a + s, r - u), e.closePath();
                break;

              case "star":
                e.beginPath(), e.moveTo(a, r + i), e.lineTo(a, r - i), e.moveTo(a - i, r), e.lineTo(a + i, r), s = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(a - s, r - u), e.lineTo(a + s, r + u), e.moveTo(a - s, r + u), e.lineTo(a + s, r - u), e.closePath();
                break;

              case "line":
                e.beginPath(), e.moveTo(a - i, r), e.lineTo(a + i, r), e.closePath();
                break;

              case "dash":
                e.beginPath(), e.moveTo(a, r), e.lineTo(a + i, r), e.closePath();
            }

            e.stroke();
          }
        }, e.clipArea = function (t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }, e.unclipArea = function (t) {
          t.restore();
        }, e.lineTo = function (t, e, n, i) {
          return n.steppedLine ? ("after" === n.steppedLine ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y)) : n.tension ? void t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void t.lineTo(n.x, n.y);
        }, t.helpers.canvas = e;
      };
    }, {}],
    23: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(e) {
          e = e || {};
          var n = e.data = e.data || {};
          return n.datasets = n.datasets || [], n.labels = n.labels || [], e.options = a.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e;
        }

        function n(t) {
          var e = t.options;
          e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function (e) {
            t.scales[e.id].options = e;
          }), t.tooltip._options = e.tooltips;
        }

        function i(t) {
          return "top" === t || "bottom" === t;
        }

        var a = t.helpers,
            r = t.plugins,
            o = t.platform;
        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(n, i) {
            var r = this;
            i = e(i);
            var l = o.acquireContext(n, i),
                s = l && l.canvas,
                u = s && s.height,
                d = s && s.width;
            return r.id = a.uid(), r.ctx = l, r.canvas = s, r.config = i, r.width = d, r.height = u, r.aspectRatio = u ? d / u : null, r.options = i.options, r._bufferedRender = !1, r.chart = r, r.controller = r, t.instances[r.id] = r, Object.defineProperty(r, "data", {
              get: function get() {
                return r.config.data;
              },
              set: function set(t) {
                r.config.data = t;
              }
            }), l && s ? (r.initialize(), void r.update()) : void console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return r.notify(t, "beforeInit"), a.retinaScale(t), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), r.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                o = n.maintainAspectRatio && e.aspectRatio || null,
                l = Math.floor(a.getMaximumWidth(i)),
                s = Math.floor(o ? l / o : a.getMaximumHeight(i));

            if ((e.width !== l || e.height !== s) && (i.width = e.width = l, i.height = e.height = s, i.style.width = l + "px", i.style.height = s + "px", a.retinaScale(e), !t)) {
              var u = {
                width: l,
                height: s
              };
              r.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), n && (n.id = n.id || "scale");
          },
          buildScales: function buildScales() {
            var e = this,
                n = e.options,
                r = e.scales = {},
                o = [];
            n.scales && (o = o.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && o.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(o, function (n) {
              var o = n.options,
                  l = a.getValueOrDefault(o.type, n.dtype),
                  s = t.scaleService.getScaleConstructor(l);

              if (s) {
                i(o.position) !== i(n.dposition) && (o.position = n.dposition);
                var u = new s({
                  id: o.id,
                  options: o,
                  ctx: e.ctx,
                  chart: e
                });
                r[u.id] = u, n.isDefault && (e.scale = u);
              }
            }), t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                n = [],
                i = [];
            if (a.each(e.data.datasets, function (a, r) {
              var o = e.getDatasetMeta(r);
              if (o.type || (o.type = a.type || e.config.type), n.push(o.type), o.controller) o.controller.updateIndex(r);else {
                var l = t.controllers[o.type];
                if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                o.controller = new l(e, r), i.push(o.controller);
              }
            }, e), n.length > 1) for (var r = 1; r < n.length; r++) {
              if (n[r] !== n[r - 1]) {
                e.isCombo = !0;
                break;
              }
            }
            return i;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(t, e) {
            var i = this;

            if (n(i), r.notify(i, "beforeUpdate") !== !1) {
              i.tooltip._data = i.data;
              var o = i.buildOrUpdateControllers();
              a.each(i.data.datasets, function (t, e) {
                i.getDatasetMeta(e).controller.buildOrUpdateElements();
              }, i), i.updateLayout(), a.each(o, function (t) {
                t.reset();
              }), i.updateDatasets(), r.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                lazy: e,
                duration: t
              } : i.render(t, e);
            }
          },
          updateLayout: function updateLayout() {
            var e = this;
            r.notify(e, "beforeLayout") !== !1 && (t.layoutService.update(this, this.width, this.height), r.notify(e, "afterScaleUpdate"), r.notify(e, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            var t = this;

            if (r.notify(t, "beforeDatasetsUpdate") !== !1) {
              for (var e = 0, n = t.data.datasets.length; n > e; ++e) {
                t.updateDataset(e);
              }

              r.notify(t, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this,
                n = e.getDatasetMeta(t),
                i = {
              meta: n,
              index: t
            };
            r.notify(e, "beforeDatasetUpdate", [i]) !== !1 && (n.controller.update(), r.notify(e, "afterDatasetUpdate", [i]));
          },
          render: function render(e, n) {
            var i = this;

            if (r.notify(i, "beforeRender") !== !1) {
              var o = i.options.animation,
                  l = function l(t) {
                r.notify(i, "afterRender"), a.callback(o && o.onComplete, [t], i);
              };

              if (o && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== o.duration)) {
                var s = new t.Animation({
                  numSteps: (e || o.duration) / 16.66,
                  easing: o.easing,
                  render: function render(t, e) {
                    var n = a.easingEffects[e.easing],
                        i = e.currentStep,
                        r = i / e.numSteps;
                    t.draw(n(r), r, i);
                  },
                  onAnimationProgress: o.onProgress,
                  onAnimationComplete: l
                });
                t.animationService.addAnimation(i, s, e, n);
              } else i.draw(), l(new t.Animation({
                numSteps: 0,
                chart: i
              }));

              return i;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), (void 0 === t || null === t) && (t = 1), e.transition(t), r.notify(e, "beforeDraw", [t]) !== !1 && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.draw(), r.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = this, n = 0, i = (e.data.datasets || []).length; i > n; ++n) {
              e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
            }

            e.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (r.notify(e, "beforeDatasetsDraw", [t]) !== !1) {
              for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
                e.isDatasetVisible(n) && e.drawDataset(n, t);
              }

              r.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var n = this,
                i = n.getDatasetMeta(t),
                a = {
              meta: i,
              index: t,
              easingValue: e
            };
            r.notify(n, "beforeDatasetDraw", [a]) !== !1 && (i.controller.draw(e), r.notify(n, "afterDatasetDraw", [a]));
          },
          getElementAtEvent: function getElementAtEvent(e) {
            return t.Interaction.modes.single(this, e);
          },
          getElementsAtEvent: function getElementsAtEvent(e) {
            return t.Interaction.modes.label(this, e, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(e) {
            return t.Interaction.modes["x-axis"](this, e, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(e, n, i) {
            var a = t.Interaction.modes[n];
            return "function" == typeof a ? a(this, e, i) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(e) {
            return t.Interaction.modes.dataset(this, e, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                n = e.data.datasets[t];
            n._meta || (n._meta = {});
            var i = n._meta[e.id];
            return i || (i = n._meta[e.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, n = this.data.datasets.length; n > e; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroy: function destroy() {
            var e,
                n,
                i,
                l = this,
                s = l.canvas;

            for (l.stop(), n = 0, i = l.data.datasets.length; i > n; ++n) {
              e = l.getDatasetMeta(n), e.controller && (e.controller.destroy(), e.controller = null);
            }

            s && (l.unbindEvents(), a.clear(l), o.releaseContext(l.ctx), l.canvas = null, l.ctx = null), r.notify(l, "destroy"), delete t.instances[l.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e), e.tooltip.initialize();
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                n = function n() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (i) {
              o.addEventListener(t, i, n), e[i] = n;
            }), t.options.responsive && (n = function n() {
              t.resize();
            }, o.addEventListener(t, "resize", n), e.resize = n);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, n) {
              o.removeEventListener(t, n, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, n) {
            var i,
                a,
                r,
                o = n ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, r = t.length; r > a; ++a) {
              i = t[a], i && this.getDatasetMeta(i._datasetIndex).controller[o](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                n = e.tooltip;

            if (r.notify(e, "beforeEvent", [t]) !== !1) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var i = e.handleEvent(t);
              i |= n && n.handleEvent(t), r.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return a ? e.render(a.duration, a.lazy) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e.options || {},
                i = n.hover,
                r = !1;
            return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), i.onHover && i.onHover.call(e, t["native"], e.active), ("mouseup" === t.type || "click" === t.type) && n.onClick && n.onClick.call(e, t["native"], e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), r = !a.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, r;
          }
        }), t.Controller = t;
      };
    }, {}],
    24: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
              listeners: [e]
            }
          }), void a.forEach(function (e) {
            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                a = t[e];
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !1,
              value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    r = a.apply(this, e);
                return i.each(t._chartjs.listeners, function (t) {
                  "function" == typeof t[n] && t[n].apply(t, e);
                }), r;
              }
            });
          }));
        }

        function n(t, e) {
          var n = t._chartjs;

          if (n) {
            var i = n.listeners,
                r = i.indexOf(e);
            -1 !== r && i.splice(r, 1), i.length > 0 || (a.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        var i = t.helpers,
            a = ["push", "pop", "shift", "splice", "unshift"];
        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                n = t.getDataset();
            null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && n(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;
            return e && new e({
              _chart: t.chart,
              _datasetIndex: t.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this,
                n = e.dataElementType;
            return n && new n({
              _chart: e.chart,
              _datasetIndex: e.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                n = this,
                i = n.getMeta(),
                a = n.getDataset().data || [],
                r = i.data;

            for (t = 0, e = a.length; e > t; ++t) {
              r[t] = r[t] || n.createMetaData(t);
            }

            i.dataset = i.dataset || n.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this,
                i = t.getDataset(),
                a = i.data || (i.data = []);
            t._data !== a && (t._data && n(t._data, t), e(a, t), t._data = a), t.resyncElements();
          },
          update: i.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; i > a; ++a) {
              n[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;

            for (t.dataset && t.dataset.draw(); n > i; ++i) {
              e[i].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var n = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                r = t.custom || {},
                o = i.getValueAtIndexOrDefault,
                l = t._model;
            l.backgroundColor = r.backgroundColor ? r.backgroundColor : o(n.backgroundColor, a, e.backgroundColor), l.borderColor = r.borderColor ? r.borderColor : o(n.borderColor, a, e.borderColor), l.borderWidth = r.borderWidth ? r.borderWidth : o(n.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                r = i.getValueAtIndexOrDefault,
                o = i.getHoverColor,
                l = t._model;
            l.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r(e.hoverBackgroundColor, n, o(l.backgroundColor)), l.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r(e.hoverBorderColor, n, o(l.borderColor)), l.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r(e.hoverBorderWidth, n, l.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this,
                e = t.getMeta(),
                n = t.getDataset().data,
                i = e.data.length,
                a = n.length;
            i > a ? e.data.splice(a, i - a) : a > i && t.insertElements(i, a - i);
          },
          insertElements: function insertElements(t, e) {
            for (var n = 0; e > n; ++n) {
              this.addElementAndReset(t + n);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = i.inherits;
      };
    }, {}],
    25: [function (t, e, n) {
      "use strict";

      var i = t(3);

      e.exports = function (t) {
        function e(t, e, n, a) {
          var r,
              o,
              l,
              s,
              u,
              d,
              c,
              h,
              f,
              g = Object.keys(n);

          for (r = 0, o = g.length; o > r; ++r) {
            if (l = g[r], d = n[l], e.hasOwnProperty(l) || (e[l] = d), s = e[l], s !== d && "_" !== l[0]) {
              if (t.hasOwnProperty(l) || (t[l] = s), u = t[l], c = _typeof(d), c === _typeof(u)) if ("string" === c) {
                if (h = i(u), h.valid && (f = i(d), f.valid)) {
                  e[l] = f.mix(h, a).rgbString();
                  continue;
                }
              } else if ("number" === c && isFinite(u) && isFinite(d)) {
                e[l] = u + (d - u) * a;
                continue;
              }
              e[l] = d;
            }
          }
        }

        var n = t.helpers;
        t.elements = {}, t.Element = function (t) {
          n.extend(this, t), this.initialize.apply(this, arguments);
        }, n.extend(t.Element.prototype, {
          initialize: function initialize() {
            this.hidden = !1;
          },
          pivot: function pivot() {
            var t = this;
            return t._view || (t._view = n.clone(t._model)), t._start = {}, t;
          },
          transition: function transition(t) {
            var n = this,
                i = n._model,
                a = n._start,
                r = n._view;
            return i && 1 !== t ? (r || (r = n._view = {}), a || (a = n._start = {}), e(a, r, i, t), n) : (n._view = i, n._start = null, n);
          },
          tooltipPosition: function tooltipPosition() {
            return {
              x: this._model.x,
              y: this._model.y
            };
          },
          hasValue: function hasValue() {
            return n.isNumber(this._model.x) && n.isNumber(this._model.y);
          }
        }), t.Element.extend = n.inherits;
      };
    }, {
      3: 3
    }],
    26: [function (t, e, n) {
      "use strict";

      var i = t(3);

      e.exports = function (t) {
        function e(t, e, n) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }

        function n(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }

        function a(t, i, a) {
          var r = document.defaultView,
              o = t.parentNode,
              l = r.getComputedStyle(t)[i],
              s = r.getComputedStyle(o)[i],
              u = n(l),
              d = n(s),
              c = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(l, t, a) : c, d ? e(s, o, a) : c) : "none";
        }

        var r = t.helpers = {};
        r.each = function (t, e, n, i) {
          var a, o;
          if (r.isArray(t)) {
            if (o = t.length, i) for (a = o - 1; a >= 0; a--) {
              e.call(n, t[a], a);
            } else for (a = 0; o > a; a++) {
              e.call(n, t[a], a);
            }
          } else if ("object" == _typeof(t)) {
            var l = Object.keys(t);

            for (o = l.length, a = 0; o > a; a++) {
              e.call(n, t[l[a]], l[a]);
            }
          }
        }, r.clone = function (t) {
          var e = {};
          return r.each(t, function (t, n) {
            r.isArray(t) ? e[n] = t.slice(0) : "object" == _typeof(t) && null !== t ? e[n] = r.clone(t) : e[n] = t;
          }), e;
        }, r.extend = function (t) {
          for (var e = function e(_e, n) {
            t[n] = _e;
          }, n = 1, i = arguments.length; i > n; n++) {
            r.each(arguments[n], e);
          }

          return t;
        }, r.configMerge = function (e) {
          var n = r.clone(e);
          return r.each(Array.prototype.slice.call(arguments, 1), function (e) {
            r.each(e, function (e, i) {
              var a = n.hasOwnProperty(i),
                  o = a ? n[i] : {};
              "scales" === i ? n[i] = r.scaleMerge(o, e) : "scale" === i ? n[i] = r.configMerge(o, t.scaleService.getScaleDefaults(e.type), e) : !a || "object" != _typeof(o) || r.isArray(o) || null === o || "object" != _typeof(e) || r.isArray(e) ? n[i] = e : n[i] = r.configMerge(o, e);
            });
          }), n;
        }, r.scaleMerge = function (e, n) {
          var i = r.clone(e);
          return r.each(n, function (e, n) {
            "xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? r.each(e, function (e, a) {
              var o = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
                  l = t.scaleService.getScaleDefaults(o);
              a >= i[n].length || !i[n][a].type ? i[n].push(r.configMerge(l, e)) : e.type && e.type !== i[n][a].type ? i[n][a] = r.configMerge(i[n][a], l, e) : i[n][a] = r.configMerge(i[n][a], e);
            }) : (i[n] = [], r.each(e, function (e) {
              var a = r.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");
              i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a), e));
            })) : i.hasOwnProperty(n) && "object" == _typeof(i[n]) && null !== i[n] && "object" == _typeof(e) ? i[n] = r.configMerge(i[n], e) : i[n] = e;
          }), i;
        }, r.getValueAtIndexOrDefault = function (t, e, n) {
          return void 0 === t || null === t ? n : r.isArray(t) ? e < t.length ? t[e] : n : t;
        }, r.getValueOrDefault = function (t, e) {
          return void 0 === t ? e : t;
        }, r.indexOf = Array.prototype.indexOf ? function (t, e) {
          return t.indexOf(e);
        } : function (t, e) {
          for (var n = 0, i = t.length; i > n; ++n) {
            if (t[n] === e) return n;
          }

          return -1;
        }, r.where = function (t, e) {
          if (r.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return r.each(t, function (t) {
            e(t) && n.push(t);
          }), n;
        }, r.findIndex = Array.prototype.findIndex ? function (t, e, n) {
          return t.findIndex(e, n);
        } : function (t, e, n) {
          n = void 0 === n ? t : n;

          for (var i = 0, a = t.length; a > i; ++i) {
            if (e.call(n, t[i], i, t)) return i;
          }

          return -1;
        }, r.findNextWhere = function (t, e, n) {
          (void 0 === n || null === n) && (n = -1);

          for (var i = n + 1; i < t.length; i++) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, r.findPreviousWhere = function (t, e, n) {
          (void 0 === n || null === n) && (n = t.length);

          for (var i = n - 1; i >= 0; i--) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, r.inherits = function (t) {
          var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              i = function i() {
            this.constructor = n;
          };

          return i.prototype = e.prototype, n.prototype = new i(), n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n;
        }, r.noop = function () {}, r.uid = function () {
          var t = 0;
          return function () {
            return t++;
          };
        }(), r.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, r.almostEquals = function (t, e, n) {
          return Math.abs(t - e) < n;
        }, r.almostWhole = function (t, e) {
          var n = Math.round(t);
          return t > n - e && n + e > t;
        }, r.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, r.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, r.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, r.getAngleFromPoint = function (t, e) {
          var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);
          return r < -.5 * Math.PI && (r += 2 * Math.PI), {
            angle: r,
            distance: a
          };
        }, r.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, r.aliasPixel = function (t) {
          return t % 2 === 0 ? 0 : .5;
        }, r.splineCurve = function (t, e, n, i) {
          var a = t.skip ? e : t,
              r = e,
              o = n.skip ? e : n,
              l = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = l / (l + s),
              d = s / (l + s);
          u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;
          var c = i * u,
              h = i * d;
          return {
            previous: {
              x: r.x - c * (o.x - a.x),
              y: r.y - c * (o.y - a.y)
            },
            next: {
              x: r.x + h * (o.x - a.x),
              y: r.y + h * (o.y - a.y)
            }
          };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function (t) {
          var e,
              n,
              i,
              a,
              o = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              l = o.length;

          for (e = 0; l > e; ++e) {
            if (i = o[e], !i.model.skip) {
              if (n = e > 0 ? o[e - 1] : null, a = l - 1 > e ? o[e + 1] : null, a && !a.model.skip) {
                var s = a.model.x - i.model.x;
                i.deltaK = 0 !== s ? (a.model.y - i.model.y) / s : 0;
              }

              !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
            }
          }

          var u, d, c, h;

          for (e = 0; l - 1 > e; ++e) {
            i = o[e], a = o[e + 1], i.model.skip || a.model.skip || (r.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, h = Math.pow(u, 2) + Math.pow(d, 2), 9 >= h || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, a.mK = d * c * i.deltaK)));
          }

          var f;

          for (e = 0; l > e; ++e) {
            i = o[e], i.model.skip || (n = e > 0 ? o[e - 1] : null, a = l - 1 > e ? o[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK));
          }
        }, r.nextItem = function (t, e, n) {
          return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, r.previousItem = function (t, e, n) {
          return n ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1];
        }, r.niceNum = function (t, e) {
          var n,
              i = Math.floor(r.log10(t)),
              a = t / Math.pow(10, i);
          return n = e ? 1.5 > a ? 1 : 3 > a ? 2 : 7 > a ? 5 : 10 : 1 >= a ? 1 : 2 >= a ? 2 : 5 >= a ? 5 : 10, n * Math.pow(10, i);
        };
        var o = r.easingEffects = {
          linear: function linear(t) {
            return t;
          },
          easeInQuad: function easeInQuad(t) {
            return t * t;
          },
          easeOutQuad: function easeOutQuad(t) {
            return -1 * t * (t - 2);
          },
          easeInOutQuad: function easeInOutQuad(t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function easeInCubic(t) {
            return t * t * t;
          },
          easeOutCubic: function easeOutCubic(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
          },
          easeInOutCubic: function easeInOutCubic(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
          },
          easeOutQuart: function easeOutQuart(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
          },
          easeInOutQuart: function easeInOutQuart(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function easeInQuint(t) {
            return 1 * (t /= 1) * t * t * t * t;
          },
          easeOutQuint: function easeOutQuint(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
          },
          easeInOutQuint: function easeInOutQuint(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function easeInSine(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
          },
          easeOutSine: function easeOutSine(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
          },
          easeInOutSine: function easeInOutSine(t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
          },
          easeInExpo: function easeInExpo(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
          },
          easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
          },
          easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
          },
          easeInCirc: function easeInCirc(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
          },
          easeOutCirc: function easeOutCirc(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
          },
          easeInOutCirc: function easeInOutCirc(t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function easeInElastic(t) {
            var e = 1.70158,
                n = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)));
          },
          easeOutElastic: function easeOutElastic(t) {
            var e = 1.70158,
                n = 0,
                i = 1;
            return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1);
          },
          easeInOutElastic: function easeInOutElastic(t) {
            var e = 1.70158,
                n = 0,
                i = 1;
            return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1);
          },
          easeInBack: function easeInBack(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e);
          },
          easeOutBack: function easeOutBack(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
          },
          easeInOutBack: function easeInOutBack(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
          },
          easeInBounce: function easeInBounce(t) {
            return 1 - o.easeOutBounce(1 - t);
          },
          easeOutBounce: function easeOutBounce(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
          },
          easeInOutBounce: function easeInOutBounce(t) {
            return .5 > t ? .5 * o.easeInBounce(2 * t) : .5 * o.easeOutBounce(2 * t - 1) + .5;
          }
        };
        r.requestAnimFrame = function () {
          return "undefined" == typeof window ? function (t) {
            t();
          } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            return window.setTimeout(t, 1e3 / 60);
          };
        }(), r.getRelativePosition = function (t, e) {
          var n,
              i,
              a = t.originalEvent || t,
              o = t.currentTarget || t.srcElement,
              l = o.getBoundingClientRect(),
              s = a.touches;
          s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);
          var u = parseFloat(r.getStyle(o, "padding-left")),
              d = parseFloat(r.getStyle(o, "padding-top")),
              c = parseFloat(r.getStyle(o, "padding-right")),
              h = parseFloat(r.getStyle(o, "padding-bottom")),
              f = l.right - l.left - u - c,
              g = l.bottom - l.top - d - h;
          return n = Math.round((n - l.left - u) / f * o.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - d) / g * o.height / e.currentDevicePixelRatio), {
            x: n,
            y: i
          };
        }, r.addEvent = function (t, e, n) {
          t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
        }, r.removeEvent = function (t, e, n) {
          t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = r.noop;
        }, r.getConstraintWidth = function (t) {
          return a(t, "max-width", "clientWidth");
        }, r.getConstraintHeight = function (t) {
          return a(t, "max-height", "clientHeight");
        }, r.getMaximumWidth = function (t) {
          var e = t.parentNode,
              n = parseInt(r.getStyle(e, "padding-left"), 10),
              i = parseInt(r.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - n - i,
              o = r.getConstraintWidth(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getMaximumHeight = function (t) {
          var e = t.parentNode,
              n = parseInt(r.getStyle(e, "padding-top"), 10),
              i = parseInt(r.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - n - i,
              o = r.getConstraintHeight(t);
          return isNaN(o) ? a : Math.min(a, o);
        }, r.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, r.retinaScale = function (t) {
          var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;

          if (1 !== e) {
            var n = t.canvas,
                i = t.height,
                a = t.width;
            n.height = i * e, n.width = a * e, t.ctx.scale(e, e), n.style.height = i + "px", n.style.width = a + "px";
          }
        }, r.clear = function (t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        }, r.fontString = function (t, e, n) {
          return e + " " + t + "px " + n;
        }, r.longestText = function (t, e, n, i) {
          i = i || {};
          var a = i.data = i.data || {},
              o = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (a = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
          var l = 0;
          r.each(n, function (e) {
            void 0 !== e && null !== e && r.isArray(e) !== !0 ? l = r.measureText(t, a, o, l, e) : r.isArray(e) && r.each(e, function (e) {
              void 0 === e || null === e || r.isArray(e) || (l = r.measureText(t, a, o, l, e));
            });
          });
          var s = o.length / 2;

          if (s > n.length) {
            for (var u = 0; s > u; u++) {
              delete a[o[u]];
            }

            o.splice(0, s);
          }

          return l;
        }, r.measureText = function (t, e, n, i, a) {
          var r = e[a];
          return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i;
        }, r.numberOfLabelLines = function (t) {
          var e = 1;
          return r.each(t, function (t) {
            r.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, r.drawRoundedRectangle = function (t, e, n, i, a, r) {
          t.beginPath(), t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + r), t.lineTo(e + i, n + a - r), t.quadraticCurveTo(e + i, n + a, e + i - r, n + a), t.lineTo(e + r, n + a), t.quadraticCurveTo(e, n + a, e, n + a - r), t.lineTo(e, n + r), t.quadraticCurveTo(e, n, e + r, n), t.closePath();
        }, r.color = i ? function (e) {
          return e instanceof CanvasMega && (e = t.defaults.global.defaultColor), i(e);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, r.isArray = Array.isArray ? function (t) {
          return Array.isArray(t);
        } : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }, r.arrayEquals = function (t, e) {
          var n, i, a, o;
          if (!t || !e || t.length !== e.length) return !1;

          for (n = 0, i = t.length; i > n; ++n) {
            if (a = t[n], o = e[n], a instanceof Array && o instanceof Array) {
              if (!r.arrayEquals(a, o)) return !1;
            } else if (a !== o) return !1;
          }

          return !0;
        }, r.callback = function (t, e, n) {
          t && "function" == typeof t.call && t.apply(n, e);
        }, r.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : r.color(t).saturate(.5).darken(.1).rgbString();
        }, r.callCallback = r.callback;
      };
    }, {
      3: 3
    }],
    27: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return t["native"] ? {
            x: t.x,
            y: t.y
          } : o.getRelativePosition(t, e);
        }

        function n(t, e) {
          var n,
              i,
              a,
              r,
              o,
              l = t.data.datasets;

          for (i = 0, r = l.length; r > i; ++i) {
            if (t.isDatasetVisible(i)) for (n = t.getDatasetMeta(i), a = 0, o = n.data.length; o > a; ++a) {
              var s = n.data[a];
              s._view.skip || e(s);
            }
          }
        }

        function i(t, e) {
          var i = [];
          return n(t, function (t) {
            t.inRange(e.x, e.y) && i.push(t);
          }), i;
        }

        function a(t, e, i, a) {
          var r = Number.POSITIVE_INFINITY,
              l = [];
          return a || (a = o.distanceBetweenPoints), n(t, function (t) {
            if (!i || t.inRange(e.x, e.y)) {
              var n = t.getCenterPoint(),
                  o = a(e, n);
              r > o ? (l = [t], r = o) : o === r && l.push(t);
            }
          }), l;
        }

        function r(t, n, r) {
          var o = e(n, t),
              l = function l(t, e) {
            return Math.abs(t.x - e.x);
          },
              s = r.intersect ? i(t, o) : a(t, o, !1, l),
              u = [];

          return s.length ? (t.data.datasets.forEach(function (e, n) {
            if (t.isDatasetVisible(n)) {
              var i = t.getDatasetMeta(n),
                  a = i.data[s[0]._index];
              a && !a._view.skip && u.push(a);
            }
          }), u) : [];
        }

        var o = t.helpers;
        t.Interaction = {
          modes: {
            single: function single(t, i) {
              var a = e(i, t),
                  r = [];
              return n(t, function (t) {
                return t.inRange(a.x, a.y) ? (r.push(t), r) : void 0;
              }), r.slice(0, 1);
            },
            label: r,
            index: r,
            dataset: function dataset(t, n, r) {
              var o = e(n, t),
                  l = r.intersect ? i(t, o) : a(t, o, !1);
              return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l;
            },
            "x-axis": function xAxis(t, e) {
              return r(t, e, !0);
            },
            point: function point(t, n) {
              var a = e(n, t);
              return i(t, a);
            },
            nearest: function nearest(t, n, i) {
              var r = e(n, t),
                  o = a(t, r, i.intersect);
              return o.length > 1 && o.sort(function (t, e) {
                var n = t.getArea(),
                    i = e.getArea(),
                    a = n - i;
                return 0 === a && (a = t._datasetIndex - e._datasetIndex), a;
              }), o.slice(0, 1);
            },
            x: function x(t, i, a) {
              var r = e(i, t),
                  o = [],
                  l = !1;
              return n(t, function (t) {
                t.inXRange(r.x) && o.push(t), t.inRange(r.x, r.y) && (l = !0);
              }), a.intersect && !l && (o = []), o;
            },
            y: function y(t, i, a) {
              var r = e(i, t),
                  o = [],
                  l = !1;
              return n(t, function (t) {
                t.inYRange(r.y) && o.push(t), t.inRange(r.x, r.y) && (l = !0);
              }), a.intersect && !l && (o = []), o;
            }
          }
        };
      };
    }, {}],
    28: [function (t, e, n) {
      "use strict";

      e.exports = function () {
        var t = function t(_t, e) {
          return this.construct(_t, e), this;
        };

        return t.defaults = {
          global: {
            responsive: !0,
            responsiveAnimationDuration: 0,
            maintainAspectRatio: !0,
            events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            hover: {
              onHover: null,
              mode: "nearest",
              intersect: !0,
              animationDuration: 400
            },
            onClick: null,
            defaultColor: "rgba(0,0,0,0.1)",
            defaultFontColor: "#666",
            defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            defaultFontSize: 12,
            defaultFontStyle: "normal",
            showLines: !0,
            elements: {},
            legendCallback: function legendCallback(t) {
              var e = [];
              e.push('<ul class="' + t.id + '-legend">');

              for (var n = 0; n < t.data.datasets.length; n++) {
                e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
              }

              return e.push("</ul>"), e.join("");
            }
          }
        }, t.Chart = t, t;
      };
    }, {}],
    29: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return i.where(t, function (t) {
            return t.position === e;
          });
        }

        function n(t, e) {
          t.forEach(function (t, e) {
            return t._tmpIndex_ = e, t;
          }), t.sort(function (t, n) {
            var i = e ? n : t,
                a = e ? t : n;
            return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
          }), t.forEach(function (t) {
            delete t._tmpIndex_;
          });
        }

        var i = t.helpers;
        t.layoutService = {
          defaults: {},
          addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
          },
          removeBox: function removeBox(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function configure(t, e, n) {
            for (var i, a = ["fullWidth", "position", "weight"], r = a.length, o = 0; r > o; ++o) {
              i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]);
            }
          },
          update: function update(t, a, r) {
            function o(t) {
              var e,
                  n = t.isHorizontal();
              n ? (e = t.update(t.fullWidth ? k : I, D), A -= e.height) : (e = t.update(C, S), I -= e.width), P.push({
                horizontal: n,
                minSize: e,
                box: t
              });
            }

            function l(t) {
              var e = i.findNextWhere(P, function (e) {
                return e.box === t;
              });
              if (e) if (t.isHorizontal()) {
                var n = {
                  left: Math.max(L, _),
                  right: Math.max(V, T),
                  top: 0,
                  bottom: 0
                };
                t.update(t.fullWidth ? k : I, w / 2, n);
              } else t.update(e.minSize.width, A);
            }

            function s(t) {
              var e = i.findNextWhere(P, function (e) {
                return e.box === t;
              }),
                  n = {
                left: 0,
                right: 0,
                top: O,
                bottom: z
              };
              e && t.update(e.minSize.width, A, n);
            }

            function u(t) {
              t.isHorizontal() ? (t.left = t.fullWidth ? h : L, t.right = t.fullWidth ? a - f : L + I, t.top = q, t.bottom = q + t.height, q = t.bottom) : (t.left = H, t.right = H + t.width, t.top = O, t.bottom = O + A, H = t.right);
            }

            if (t) {
              var d = t.options.layout,
                  c = d ? d.padding : null,
                  h = 0,
                  f = 0,
                  g = 0,
                  p = 0;
              isNaN(c) ? (h = c.left || 0, f = c.right || 0, g = c.top || 0, p = c.bottom || 0) : (h = c, f = c, g = c, p = c);
              var m = e(t.boxes, "left"),
                  v = e(t.boxes, "right"),
                  b = e(t.boxes, "top"),
                  x = e(t.boxes, "bottom"),
                  y = e(t.boxes, "chartArea");
              n(m, !0), n(v, !1), n(b, !0), n(x, !1);
              var k = a - h - f,
                  w = r - g - p,
                  M = k / 2,
                  S = w / 2,
                  C = (a - M) / (m.length + v.length),
                  D = (r - S) / (b.length + x.length),
                  I = k,
                  A = w,
                  P = [];
              i.each(m.concat(v, b, x), o);
              var _ = 0,
                  T = 0,
                  F = 0,
                  R = 0;
              i.each(b.concat(x), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  _ = Math.max(_, e.left), T = Math.max(T, e.right);
                }
              }), i.each(m.concat(v), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  F = Math.max(F, e.top), R = Math.max(R, e.bottom);
                }
              });
              var L = h,
                  V = f,
                  O = g,
                  z = p;
              i.each(m.concat(v), l), i.each(m, function (t) {
                L += t.width;
              }), i.each(v, function (t) {
                V += t.width;
              }), i.each(b.concat(x), l), i.each(b, function (t) {
                O += t.height;
              }), i.each(x, function (t) {
                z += t.height;
              }), i.each(m.concat(v), s), L = h, V = f, O = g, z = p, i.each(m, function (t) {
                L += t.width;
              }), i.each(v, function (t) {
                V += t.width;
              }), i.each(b, function (t) {
                O += t.height;
              }), i.each(x, function (t) {
                z += t.height;
              });
              var B = Math.max(_ - L, 0);
              L += B, V += Math.max(T - V, 0);
              var W = Math.max(F - O, 0);
              O += W, z += Math.max(R - z, 0);
              var N = r - O - z,
                  E = a - L - V;
              (E !== I || N !== A) && (i.each(m, function (t) {
                t.height = N;
              }), i.each(v, function (t) {
                t.height = N;
              }), i.each(b, function (t) {
                t.fullWidth || (t.width = E);
              }), i.each(x, function (t) {
                t.fullWidth || (t.width = E);
              }), A = N, I = E);
              var H = h + B,
                  q = g + W;
              i.each(m.concat(b), u), H += I, q += A, i.each(v, u), i.each(x, u), t.chartArea = {
                left: L,
                top: O,
                right: L + I,
                bottom: O + A
              }, i.each(y, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(I, A);
              });
            }
          }
        };
      };
    }, {}],
    30: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.defaults.global.plugins = {}, t.plugins = {
          _plugins: [],
          _cacheId: 0,
          register: function register(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            }), this._cacheId++;
          },
          unregister: function unregister(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }), this._cacheId++;
          },
          clear: function clear() {
            this._plugins = [], this._cacheId++;
          },
          count: function count() {
            return this._plugins.length;
          },
          getAll: function getAll() {
            return this._plugins;
          },
          notify: function notify(t, e, n) {
            var i,
                a,
                r,
                o,
                l,
                s = this.descriptors(t),
                u = s.length;

            for (i = 0; u > i; ++i) {
              if (a = s[i], r = a.plugin, l = r[e], "function" == typeof l && (o = [t].concat(n || []), o.push(a.options), l.apply(r, o) === !1)) return !1;
            }

            return !0;
          },
          descriptors: function descriptors(n) {
            var i = n._plugins || (n._plugins = {});
            if (i.id === this._cacheId) return i.descriptors;
            var a = [],
                r = [],
                o = n && n.config || {},
                l = t.defaults.global.plugins,
                s = o.options && o.options.plugins || {};
            return this._plugins.concat(o.plugins || []).forEach(function (t) {
              var n = a.indexOf(t);

              if (-1 === n) {
                var i = t.id,
                    o = s[i];
                o !== !1 && (o === !0 && (o = e.clone(l[i])), a.push(t), r.push({
                  plugin: t,
                  options: o || {}
                }));
              }
            }), i.descriptors = r, i.id = this._cacheId, r;
          }
        }, t.pluginService = t.plugins, t.PluginBase = t.Element.extend({});
      };
    }, {}],
    31: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e, n) {
          return i.isArray(e) ? i.longestText(t, n, e) : t.measureText(e).width;
        }

        function n(e) {
          var n = i.getValueOrDefault,
              a = t.defaults.global,
              r = n(e.fontSize, a.defaultFontSize),
              o = n(e.fontStyle, a.defaultFontStyle),
              l = n(e.fontFamily, a.defaultFontFamily);
          return {
            size: r,
            style: o,
            family: l,
            font: i.fontString(r, o, l)
          };
        }

        var i = t.helpers;
        t.defaults.scale = {
          display: !0,
          position: "left",
          gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
          },
          scaleLabel: {
            labelString: "",
            display: !1
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: t.Ticks.formatters.values
          }
        }, t.Scale = t.Element.extend({
          getPadding: function getPadding() {
            var t = this;
            return {
              left: t.paddingLeft || 0,
              top: t.paddingTop || 0,
              right: t.paddingRight || 0,
              bottom: t.paddingBottom || 0
            };
          },
          beforeUpdate: function beforeUpdate() {
            i.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, n) {
            var a = this;
            return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = i.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, n), a.longestTextCache = a.longestTextCache || {}, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize;
          },
          afterUpdate: function afterUpdate() {
            i.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            i.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            i.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            i.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: i.noop,
          afterDataLimits: function afterDataLimits() {
            i.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            i.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: i.noop,
          afterBuildTicks: function afterBuildTicks() {
            i.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            i.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this,
                e = t.options.ticks;
            t.ticks = t.ticks.map(e.userCallback || e.callback);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            i.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            i.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                a = t.options.ticks,
                r = n(a);
            e.font = r.font;
            var o = a.minRotation || 0;
            if (t.options.display && t.isHorizontal()) for (var l, s, u = i.longestText(e, r.font, t.ticks, t.longestTextCache), d = u, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > c && o < a.maxRotation;) {
              var h = i.toRadians(o);

              if (l = Math.cos(h), s = Math.sin(h), s * u > t.maxHeight) {
                o--;
                break;
              }

              o++, d = l * u;
            }
            t.labelRotation = o;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            i.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            i.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                a = t.minSize = {
              width: 0,
              height: 0
            },
                r = t.options,
                o = r.ticks,
                l = r.scaleLabel,
                s = r.gridLines,
                u = r.display,
                d = t.isHorizontal(),
                c = n(o),
                h = 1.5 * n(l).size,
                f = r.gridLines.tickMarkLength;

            if (d ? a.width = t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : a.width = u && s.drawTicks ? f : 0, d ? a.height = u && s.drawTicks ? f : 0 : a.height = t.maxHeight, l.display && u && (d ? a.height += h : a.width += h), o.display && u) {
              var g = i.longestText(t.ctx, c.font, t.ticks, t.longestTextCache),
                  p = i.numberOfLabelLines(t.ticks),
                  m = .5 * c.size;

              if (d) {
                t.longestLabelWidth = g;
                var v = i.toRadians(t.labelRotation),
                    b = Math.cos(v),
                    x = Math.sin(v),
                    y = x * g + c.size * p + m * p;
                a.height = Math.min(t.maxHeight, a.height + y), t.ctx.font = c.font;
                var k = t.ticks[0],
                    w = e(t.ctx, k, c.font),
                    M = t.ticks[t.ticks.length - 1],
                    S = e(t.ctx, M, c.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === r.position ? b * w + 3 : b * m + 3, t.paddingRight = "bottom" === r.position ? b * m + 3 : b * S + 3) : (t.paddingLeft = w / 2 + 3, t.paddingRight = S / 2 + 3);
              } else o.mirror ? g = 0 : g += t.options.ticks.padding, a.width = Math.min(t.maxWidth, a.width + g), t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2;
            }

            t.handleMargins(), t.width = a.width, t.height = a.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            i.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == _typeof(t) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN;
          },
          getLabelForIndex: i.noop,
          getPixelForValue: i.noop,
          getValueForPixel: i.noop,
          getPixelForTick: function getPixelForTick(t, e) {
            var n = this;

            if (n.isHorizontal()) {
              var i = n.width - (n.paddingLeft + n.paddingRight),
                  a = i / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                  r = a * t + n.paddingLeft;
              e && (r += a / 2);
              var o = n.left + Math.round(r);
              return o += n.isFullWidth() ? n.margins.left : 0;
            }

            var l = n.height - (n.paddingTop + n.paddingBottom);
            return n.top + t * (l / (n.ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var n = e.width - (e.paddingLeft + e.paddingRight),
                  i = n * t + e.paddingLeft,
                  a = e.left + Math.round(i);
              return a += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this,
                e = t.min,
                n = t.max;
            return t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0;
          },
          draw: function draw(e) {
            var a = this,
                r = a.options;

            if (r.display) {
              var o,
                  l,
                  s = a.ctx,
                  u = t.defaults.global,
                  d = r.ticks,
                  c = r.gridLines,
                  h = r.scaleLabel,
                  f = 0 !== a.labelRotation,
                  g = d.autoSkip,
                  p = a.isHorizontal();
              d.maxTicksLimit && (l = d.maxTicksLimit);
              var m = i.getValueOrDefault(d.fontColor, u.defaultFontColor),
                  v = n(d),
                  b = c.drawTicks ? c.tickMarkLength : 0,
                  x = i.getValueOrDefault(h.fontColor, u.defaultFontColor),
                  y = n(h),
                  k = i.toRadians(a.labelRotation),
                  w = Math.cos(k),
                  M = a.longestLabelWidth * w;
              s.fillStyle = m;
              var S = [];

              if (p) {
                if (o = !1, (M + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (o = 1 + Math.floor((M + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), l && a.ticks.length > l) for (; !o || a.ticks.length / (o || 1) > l;) {
                  o || (o = 1), o += 1;
                }
                g || (o = !1);
              }

              var C = "right" === r.position ? a.left : a.right - b,
                  D = "right" === r.position ? a.left + b : a.right,
                  I = "bottom" === r.position ? a.top : a.bottom - b,
                  A = "bottom" === r.position ? a.top + b : a.bottom;

              if (i.each(a.ticks, function (t, n) {
                if (void 0 !== t && null !== t) {
                  var l = a.ticks.length === n + 1,
                      s = o > 1 && n % o > 0 || n % o === 0 && n + o >= a.ticks.length;

                  if ((!s || l) && void 0 !== t && null !== t) {
                    var h, g, m, v;
                    n === ("undefined" != typeof a.zeroLineIndex ? a.zeroLineIndex : 0) ? (h = c.zeroLineWidth, g = c.zeroLineColor, m = c.zeroLineBorderDash, v = c.zeroLineBorderDashOffset) : (h = i.getValueAtIndexOrDefault(c.lineWidth, n), g = i.getValueAtIndexOrDefault(c.color, n), m = i.getValueOrDefault(c.borderDash, u.borderDash), v = i.getValueOrDefault(c.borderDashOffset, u.borderDashOffset));

                    var x,
                        y,
                        w,
                        M,
                        P,
                        _,
                        T,
                        F,
                        R,
                        L,
                        V = "middle",
                        O = "middle";

                    if (p) {
                      "bottom" === r.position ? (O = f ? "middle" : "top", V = f ? "right" : "center", L = a.top + b) : (O = f ? "middle" : "bottom", V = f ? "left" : "center", L = a.bottom - b);
                      var z = a.getPixelForTick(n) + i.aliasPixel(h);
                      R = a.getPixelForTick(n, c.offsetGridLines) + d.labelOffset, x = w = P = T = z, y = I, M = A, _ = e.top, F = e.bottom;
                    } else {
                      var B,
                          W = "left" === r.position,
                          N = d.padding;
                      d.mirror ? (V = W ? "left" : "right", B = N) : (V = W ? "right" : "left", B = b + N), R = W ? a.right - B : a.left + B;
                      var E = a.getPixelForTick(n);
                      E += i.aliasPixel(h), L = a.getPixelForTick(n, c.offsetGridLines), x = C, w = D, P = e.left, T = e.right, y = M = _ = F = E;
                    }

                    S.push({
                      tx1: x,
                      ty1: y,
                      tx2: w,
                      ty2: M,
                      x1: P,
                      y1: _,
                      x2: T,
                      y2: F,
                      labelX: R,
                      labelY: L,
                      glWidth: h,
                      glColor: g,
                      glBorderDash: m,
                      glBorderDashOffset: v,
                      rotation: -1 * k,
                      label: t,
                      textBaseline: O,
                      textAlign: V
                    });
                  }
                }
              }), i.each(S, function (t) {
                if (c.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                  s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = v.font, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                  var e = t.label;
                  if (i.isArray(e)) for (var n = 0, a = 0; n < e.length; ++n) {
                    s.fillText("" + e[n], 0, a), a += 1.5 * v.size;
                  } else s.fillText(e, 0, 0);
                  s.restore();
                }
              }), h.display) {
                var P,
                    _,
                    T = 0;

                if (p) P = a.left + (a.right - a.left) / 2, _ = "bottom" === r.position ? a.bottom - y.size / 2 : a.top + y.size / 2;else {
                  var F = "left" === r.position;
                  P = F ? a.left + y.size / 2 : a.right - y.size / 2, _ = a.top + (a.bottom - a.top) / 2, T = F ? -.5 * Math.PI : .5 * Math.PI;
                }
                s.save(), s.translate(P, _), s.rotate(T), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = x, s.font = y.font, s.fillText(h.labelString, 0, 0), s.restore();
              }

              if (c.drawBorder) {
                s.lineWidth = i.getValueAtIndexOrDefault(c.lineWidth, 0), s.strokeStyle = i.getValueAtIndexOrDefault(c.color, 0);
                var R = a.left,
                    L = a.right,
                    V = a.top,
                    O = a.bottom,
                    z = i.aliasPixel(s.lineWidth);
                p ? (V = O = "top" === r.position ? a.bottom : a.top, V += z, O += z) : (R = L = "left" === r.position ? a.right : a.left, R += z, L += z), s.beginPath(), s.moveTo(R, V), s.lineTo(L, O), s.stroke();
              }
            }
          }
        });
      };
    }, {}],
    32: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, n, i) {
            this.constructors[t] = n, this.defaults[t] = e.clone(i);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(n) {
            return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, n) {
            var i = this.defaults;
            i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n));
          },
          addScalesToLayout: function addScalesToLayout(n) {
            e.each(n.scales, function (e) {
              e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, t.layoutService.addBox(n, e);
            });
          }
        };
      };
    }, {}],
    33: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers;
        t.Ticks = {
          generators: {
            linear: function linear(t, n) {
              var i,
                  a = [];
              if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
                var r = e.niceNum(n.max - n.min, !1);
                i = e.niceNum(r / (t.maxTicks - 1), !0);
              }
              var o = Math.floor(n.min / i) * i,
                  l = Math.ceil(n.max / i) * i;
              t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (o = t.min, l = t.max);
              var s = (l - o) / i;
              s = e.almostEquals(s, Math.round(s), i / 1e3) ? Math.round(s) : Math.ceil(s), a.push(void 0 !== t.min ? t.min : o);

              for (var u = 1; s > u; ++u) {
                a.push(o + u * i);
              }

              return a.push(void 0 !== t.max ? t.max : l), a;
            },
            logarithmic: function logarithmic(t, n) {
              var i,
                  a,
                  r = [],
                  o = e.getValueOrDefault,
                  l = o(t.min, Math.pow(10, Math.floor(e.log10(n.min)))),
                  s = Math.floor(e.log10(n.max)),
                  u = Math.ceil(n.max / Math.pow(10, s));
              0 === l ? (i = Math.floor(e.log10(n.minNotZero)), a = Math.floor(n.minNotZero / Math.pow(10, i)), r.push(l), l = a * Math.pow(10, i)) : (i = Math.floor(e.log10(l)), a = Math.floor(l / Math.pow(10, i)));

              do {
                r.push(l), ++a, 10 === a && (a = 1, ++i), l = a * Math.pow(10, i);
              } while (s > i || i === s && u > a);

              var d = o(t.max, l);
              return r.push(d), r;
            }
          },
          formatters: {
            values: function values(t) {
              return e.isArray(t) ? t : "" + t;
            },
            linear: function linear(t, n, i) {
              var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
              Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
              var r = e.log10(Math.abs(a)),
                  o = "";

              if (0 !== t) {
                var l = -1 * Math.floor(r);
                l = Math.max(Math.min(l, 20), 0), o = t.toFixed(l);
              } else o = "0";

              return o;
            },
            logarithmic: function logarithmic(t, n, i) {
              var a = t / Math.pow(10, Math.floor(e.log10(t)));
              return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === n || n === i.length - 1 ? t.toExponential() : "";
            }
          }
        };
      };
    }, {}],
    34: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          var n = s.color(t);
          return n.alpha(e * n.alpha()).rgbaString();
        }

        function n(t, e) {
          return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function i(t) {
          var e = t._xScale,
              n = t._yScale || t._scale,
              i = t._index,
              a = t._datasetIndex;
          return {
            xLabel: e ? e.getLabelForIndex(i, a) : "",
            yLabel: n ? n.getLabelForIndex(i, a) : "",
            index: i,
            datasetIndex: a,
            x: t._model.x,
            y: t._model.y
          };
        }

        function a(e) {
          var n = t.defaults.global,
              i = s.getValueOrDefault;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: i(e.bodyFontFamily, n.defaultFontFamily),
            _bodyFontStyle: i(e.bodyFontStyle, n.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: i(e.bodyFontSize, n.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: i(e.titleFontFamily, n.defaultFontFamily),
            _titleFontStyle: i(e.titleFontStyle, n.defaultFontStyle),
            titleFontSize: i(e.titleFontSize, n.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: i(e.footerFontFamily, n.defaultFontFamily),
            _footerFontStyle: i(e.footerFontStyle, n.defaultFontStyle),
            footerFontSize: i(e.footerFontSize, n.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
          };
        }

        function r(t, e) {
          var n = t._chart.ctx,
              i = 2 * e.yPadding,
              a = 0,
              r = e.body,
              o = r.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          o += e.beforeBody.length + e.afterBody.length;
          var l = e.title.length,
              u = e.footer.length,
              d = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;
          i += l * d, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += o * c, i += o ? (o - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;

          var f = 0,
              g = function g(t) {
            a = Math.max(a, n.measureText(t).width + f);
          };

          return n.font = s.fontString(d, e._titleFontStyle, e._titleFontFamily), s.each(e.title, g), n.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily), s.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, s.each(r, function (t) {
            s.each(t.before, g), s.each(t.lines, g), s.each(t.after, g);
          }), f = 0, n.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily), s.each(e.footer, g), a += 2 * e.xPadding, {
            width: a,
            height: i
          };
        }

        function o(t, e) {
          var n = t._model,
              i = t._chart,
              a = t._chart.chartArea,
              r = "center",
              o = "center";
          n.y < e.height ? o = "top" : n.y > i.height - e.height && (o = "bottom");
          var l,
              s,
              u,
              d,
              c,
              h = (a.left + a.right) / 2,
              f = (a.top + a.bottom) / 2;
          "center" === o ? (l = function l(t) {
            return h >= t;
          }, s = function s(t) {
            return t > h;
          }) : (l = function l(t) {
            return t <= e.width / 2;
          }, s = function s(t) {
            return t >= i.width - e.width / 2;
          }), u = function u(t) {
            return t + e.width > i.width;
          }, d = function d(t) {
            return t - e.width < 0;
          }, c = function c(t) {
            return f >= t ? "top" : "bottom";
          }, l(n.x) ? (r = "left", u(n.x) && (r = "center", o = c(n.y))) : s(n.x) && (r = "right", d(n.x) && (r = "center", o = c(n.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : r,
            yAlign: g.yAlign ? g.yAlign : o
          };
        }

        function l(t, e, n) {
          var i = t.x,
              a = t.y,
              r = t.caretSize,
              o = t.caretPadding,
              l = t.cornerRadius,
              s = n.xAlign,
              u = n.yAlign,
              d = r + o,
              c = l + o;
          return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === s ? i += d : "right" === s && (i -= d) : "left" === s ? i -= c : "right" === s && (i += c), {
            x: i,
            y: a
          };
        }

        var s = t.helpers;
        t.defaults.global.tooltips = {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: s.noop,
            title: function title(t, e) {
              var n = "",
                  i = e.labels,
                  a = i ? i.length : 0;

              if (t.length > 0) {
                var r = t[0];
                r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]);
              }

              return n;
            },
            afterTitle: s.noop,
            beforeBody: s.noop,
            beforeLabel: s.noop,
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return n && (n += ": "), n += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex),
                  i = n.data[t.index],
                  a = i._view;
              return {
                borderColor: a.borderColor,
                backgroundColor: a.backgroundColor
              };
            },
            afterLabel: s.noop,
            afterBody: s.noop,
            beforeFooter: s.noop,
            footer: s.noop,
            afterFooter: s.noop
          }
        }, t.Tooltip = t.Element.extend({
          initialize: function initialize() {
            this._model = a(this._options);
          },
          getTitle: function getTitle() {
            var t = this,
                e = t._options,
                i = e.callbacks,
                a = i.beforeTitle.apply(t, arguments),
                r = i.title.apply(t, arguments),
                o = i.afterTitle.apply(t, arguments),
                l = [];
            return l = n(l, a), l = n(l, r), l = n(l, o);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var i = this,
                a = i._options.callbacks,
                r = [];
            return s.each(t, function (t) {
              var o = {
                before: [],
                lines: [],
                after: []
              };
              n(o.before, a.beforeLabel.call(i, t, e)), n(o.lines, a.label.call(i, t, e)), n(o.after, a.afterLabel.call(i, t, e)), r.push(o);
            }), r;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return s.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                a = e.footer.apply(t, arguments),
                r = e.afterFooter.apply(t, arguments),
                o = [];
            return o = n(o, i), o = n(o, a), o = n(o, r);
          },
          update: function update(e) {
            var n,
                u,
                d = this,
                c = d._options,
                h = d._model,
                f = d._model = a(c),
                g = d._active,
                p = d._data,
                m = {
              xAlign: h.xAlign,
              yAlign: h.yAlign
            },
                v = {
              x: h.x,
              y: h.y
            },
                b = {
              width: h.width,
              height: h.height
            },
                x = {
              x: h.caretX,
              y: h.caretY
            };

            if (g.length) {
              f.opacity = 1;
              var y = [];
              x = t.Tooltip.positioners[c.position](g, d._eventPosition);
              var k = [];

              for (n = 0, u = g.length; u > n; ++n) {
                k.push(i(g[n]));
              }

              c.filter && (k = k.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (k = k.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), s.each(k, function (t) {
                y.push(c.callbacks.labelColor.call(d, t, d._chart));
              }), f.title = d.getTitle(k, p), f.beforeBody = d.getBeforeBody(k, p), f.body = d.getBody(k, p), f.afterBody = d.getAfterBody(k, p), f.footer = d.getFooter(k, p), f.x = Math.round(x.x), f.y = Math.round(x.y), f.caretPadding = c.caretPadding, f.labelColors = y, f.dataPoints = k, b = r(this, f), m = o(this, b), v = l(f, b, m);
            } else f.opacity = 0;

            return f.xAlign = m.xAlign, f.yAlign = m.yAlign, f.x = v.x, f.y = v.y, f.width = b.width, f.height = b.height, f.caretX = x.x, f.caretY = x.y, d._model = f, e && c.custom && c.custom.call(d, f), d;
          },
          drawCaret: function drawCaret(t, e) {
            var n = this._chart.ctx,
                i = this._view,
                a = this.getCaretPosition(t, e, i);
            n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, n) {
            var i,
                a,
                r,
                o,
                l,
                s,
                u = n.caretSize,
                d = n.cornerRadius,
                c = n.xAlign,
                h = n.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                m = e.height;
            if ("center" === h) l = g + m / 2, "left" === c ? (i = f, a = i - u, r = i, o = l + u, s = l - u) : (i = f + p, a = i + u, r = i, o = l - u, s = l + u);else if ("left" === c ? (a = f + d + u, i = a - u, r = a + u) : "right" === c ? (a = f + p - d - u, i = a - u, r = a + u) : (a = f + p / 2, i = a - u, r = a + u), "top" === h) o = g, l = o - u, s = o;else {
              o = g + m, l = o + u, s = o;
              var v = r;
              r = i, i = v;
            }
            return {
              x1: i,
              x2: a,
              x3: r,
              y1: o,
              y2: l,
              y3: s
            };
          },
          drawTitle: function drawTitle(t, n, i, a) {
            var r = n.title;

            if (r.length) {
              i.textAlign = n._titleAlign, i.textBaseline = "top";
              var o = n.titleFontSize,
                  l = n.titleSpacing;
              i.fillStyle = e(n.titleFontColor, a), i.font = s.fontString(o, n._titleFontStyle, n._titleFontFamily);
              var u, d;

              for (u = 0, d = r.length; d > u; ++u) {
                i.fillText(r[u], t.x, t.y), t.y += o + l, u + 1 === r.length && (t.y += n.titleMarginBottom - l);
              }
            }
          },
          drawBody: function drawBody(t, n, i, a) {
            var r = n.bodyFontSize,
                o = n.bodySpacing,
                l = n.body;
            i.textAlign = n._bodyAlign, i.textBaseline = "top";
            var u = e(n.bodyFontColor, a);
            i.fillStyle = u, i.font = s.fontString(r, n._bodyFontStyle, n._bodyFontFamily);

            var d = 0,
                c = function c(e) {
              i.fillText(e, t.x + d, t.y), t.y += r + o;
            };

            s.each(n.beforeBody, c);
            var h = n.displayColors;
            d = h ? r + 2 : 0, s.each(l, function (o, l) {
              s.each(o.before, c), s.each(o.lines, function (o) {
                h && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, r, r), i.strokeStyle = e(n.labelColors[l].borderColor, a), i.strokeRect(t.x, t.y, r, r), i.fillStyle = e(n.labelColors[l].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), i.fillStyle = u), c(o);
              }), s.each(o.after, c);
            }), d = 0, s.each(n.afterBody, c), t.y -= o;
          },
          drawFooter: function drawFooter(t, n, i, a) {
            var r = n.footer;
            r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = s.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), s.each(r, function (e) {
              i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, n, i, a, r) {
            i.fillStyle = e(n.backgroundColor, r), i.strokeStyle = e(n.borderColor, r), i.lineWidth = n.borderWidth;
            var o = n.xAlign,
                l = n.yAlign,
                s = t.x,
                u = t.y,
                d = a.width,
                c = a.height,
                h = n.cornerRadius;
            i.beginPath(), i.moveTo(s + h, u), "top" === l && this.drawCaret(t, a), i.lineTo(s + d - h, u), i.quadraticCurveTo(s + d, u, s + d, u + h), "center" === l && "right" === o && this.drawCaret(t, a), i.lineTo(s + d, u + c - h), i.quadraticCurveTo(s + d, u + c, s + d - h, u + c), "bottom" === l && this.drawCaret(t, a), i.lineTo(s + h, u + c), i.quadraticCurveTo(s, u + c, s, u + c - h), "center" === l && "left" === o && this.drawCaret(t, a), i.lineTo(s, u + h), i.quadraticCurveTo(s, u, s + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var n = {
                width: e.width,
                height: e.height
              },
                  i = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && r && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e._options,
                i = !1;
            if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), i = !s.arrayEquals(e._active, e._lastActive), !i) return !1;

            if (e._lastActive = e._active, n.enabled || n.custom) {
              e._eventPosition = {
                x: t.x,
                y: t.y
              };
              var a = e._model;
              e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y;
            }

            return i;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                n,
                i = 0,
                a = 0,
                r = 0;

            for (e = 0, n = t.length; n > e; ++e) {
              var o = t[e];

              if (o && o.hasValue()) {
                var l = o.tooltipPosition();
                i += l.x, a += l.y, ++r;
              }
            }

            return {
              x: Math.round(i / r),
              y: Math.round(a / r)
            };
          },
          nearest: function nearest(t, e) {
            var n,
                i,
                a,
                r = e.x,
                o = e.y,
                l = Number.POSITIVE_INFINITY;

            for (i = 0, a = t.length; a > i; ++i) {
              var u = t[i];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = s.distanceBetweenPoints(e, d);
                l > c && (l = c, n = u);
              }
            }

            if (n) {
              var h = n.tooltipPosition();
              r = h.x, o = h.y;
            }

            return {
              x: r,
              y: o
            };
          }
        };
      };
    }, {}],
    35: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = t.defaults.global;
        n.elements.arc = {
          backgroundColor: n.defaultColor,
          borderColor: "#fff",
          borderWidth: 2
        }, t.elements.Arc = t.Element.extend({
          inLabelRange: function inLabelRange(t) {
            var e = this._view;
            return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1;
          },
          inRange: function inRange(t, n) {
            var i = this._view;

            if (i) {
              for (var a = e.getAngleFromPoint(i, {
                x: t,
                y: n
              }), r = a.angle, o = a.distance, l = i.startAngle, s = i.endAngle; l > s;) {
                s += 2 * Math.PI;
              }

              for (; r > s;) {
                r -= 2 * Math.PI;
              }

              for (; l > r;) {
                r += 2 * Math.PI;
              }

              var u = r >= l && s >= r,
                  d = o >= i.innerRadius && o <= i.outerRadius;
              return u && d;
            }

            return !1;
          },
          getCenterPoint: function getCenterPoint() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
            return {
              x: t.x + Math.cos(e) * n,
              y: t.y + Math.sin(e) * n
            };
          },
          getArea: function getArea() {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
              x: t.x + Math.cos(e) * n,
              y: t.y + Math.sin(e) * n
            };
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view,
                n = e.startAngle,
                i = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
          }
        });
      };
    }, {}],
    36: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = t.defaults.global;
        t.defaults.global.elements.line = {
          tension: .4,
          backgroundColor: n.defaultColor,
          borderWidth: 3,
          borderColor: n.defaultColor,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }, t.elements.Line = t.Element.extend({
          draw: function draw() {
            var t,
                i,
                a,
                r,
                o = this,
                l = o._view,
                s = o._chart.ctx,
                u = l.spanGaps,
                d = o._children.slice(),
                c = n.elements.line,
                h = -1;

            for (o._loop && d.length && d.push(d[0]), s.save(), s.lineCap = l.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(l.borderDash || c.borderDash), s.lineDashOffset = l.borderDashOffset || c.borderDashOffset, s.lineJoin = l.borderJoinStyle || c.borderJoinStyle, s.lineWidth = l.borderWidth || c.borderWidth, s.strokeStyle = l.borderColor || n.defaultColor, s.beginPath(), h = -1, t = 0; t < d.length; ++t) {
              i = d[t], a = e.previousItem(d, t), r = i._view, 0 === t ? r.skip || (s.moveTo(r.x, r.y), h = t) : (a = -1 === h ? a : d[h], r.skip || (h !== t - 1 && !u || -1 === h ? s.moveTo(r.x, r.y) : e.canvas.lineTo(s, a._view, i._view), h = t));
            }

            s.stroke(), s.restore();
          }
        });
      };
    }, {}],
    37: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t) {
          var e = this._view;
          return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }

        function n(t) {
          var e = this._view;
          return e ? Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1;
        }

        var i = t.helpers,
            a = t.defaults.global,
            r = a.defaultColor;
        a.elements.point = {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: r,
          borderWidth: 1,
          borderColor: r,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }, t.elements.Point = t.Element.extend({
          inRange: function inRange(t, e) {
            var n = this._view;
            return n ? Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2) : !1;
          },
          inLabelRange: e,
          inXRange: e,
          inYRange: n,
          getCenterPoint: function getCenterPoint() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            };
          },
          getArea: function getArea() {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y,
              padding: t.radius + t.borderWidth
            };
          },
          draw: function draw(e) {
            var n = this._view,
                o = this._model,
                l = this._chart.ctx,
                s = n.pointStyle,
                u = n.radius,
                d = n.x,
                c = n.y,
                h = t.helpers.color,
                f = 1.01,
                g = 0;
            n.skip || (l.strokeStyle = n.borderColor || r, l.lineWidth = i.getValueOrDefault(n.borderWidth, a.elements.point.borderWidth), l.fillStyle = n.backgroundColor || r, void 0 !== e && (o.x < e.left || e.right * f < o.x || o.y < e.top || e.bottom * f < o.y) && (o.x < e.left ? g = (d - o.x) / (e.left - o.x) : e.right * f < o.x ? g = (o.x - d) / (o.x - e.right) : o.y < e.top ? g = (c - o.y) / (e.top - o.y) : e.bottom * f < o.y && (g = (o.y - c) / (o.y - e.bottom)), g = Math.round(100 * g) / 100, l.strokeStyle = h(l.strokeStyle).alpha(g).rgbString(), l.fillStyle = h(l.fillStyle).alpha(g).rgbString()), t.canvasHelpers.drawPoint(l, s, u, d, c));
          }
        });
      };
    }, {}],
    38: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t) {
          return void 0 !== t._view.width;
        }

        function n(t) {
          var n,
              i,
              a,
              r,
              o = t._view;

          if (e(t)) {
            var l = o.width / 2;
            n = o.x - l, i = o.x + l, a = Math.min(o.y, o.base), r = Math.max(o.y, o.base);
          } else {
            var s = o.height / 2;
            n = Math.min(o.x, o.base), i = Math.max(o.x, o.base), a = o.y - s, r = o.y + s;
          }

          return {
            left: n,
            top: a,
            right: i,
            bottom: r
          };
        }

        var i = t.defaults.global;
        i.elements.rectangle = {
          backgroundColor: i.defaultColor,
          borderWidth: 0,
          borderColor: i.defaultColor,
          borderSkipped: "bottom"
        }, t.elements.Rectangle = t.Element.extend({
          draw: function draw() {
            function t(t) {
              return v[(x + t) % 4];
            }

            var e,
                n,
                i,
                a,
                r,
                o,
                l,
                s = this._chart.ctx,
                u = this._view,
                d = u.borderWidth;

            if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, a = u.y + u.height / 2, r = n > e ? 1 : -1, o = 1, l = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, a = u.base, r = 1, o = a > i ? 1 : -1, l = u.borderSkipped || "bottom"), d) {
              var c = Math.min(Math.abs(e - n), Math.abs(i - a));
              d = d > c ? c : d;
              var h = d / 2,
                  f = e + ("left" !== l ? h * r : 0),
                  g = n + ("right" !== l ? -h * r : 0),
                  p = i + ("top" !== l ? h * o : 0),
                  m = a + ("bottom" !== l ? -h * o : 0);
              f !== g && (i = p, a = m), p !== m && (e = f, n = g);
            }

            s.beginPath(), s.fillStyle = u.backgroundColor, s.strokeStyle = u.borderColor, s.lineWidth = d;
            var v = [[e, a], [e, i], [n, i], [n, a]],
                b = ["bottom", "left", "top", "right"],
                x = b.indexOf(l, 0);
            -1 === x && (x = 0);
            var y = t(0);
            s.moveTo(y[0], y[1]);

            for (var k = 1; 4 > k; k++) {
              y = t(k), s.lineTo(y[0], y[1]);
            }

            s.fill(), d && s.stroke();
          },
          height: function height() {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function inRange(t, e) {
            var i = !1;

            if (this._view) {
              var a = n(this);
              i = t >= a.left && t <= a.right && e >= a.top && e <= a.bottom;
            }

            return i;
          },
          inLabelRange: function inLabelRange(t, i) {
            var a = this;
            if (!a._view) return !1;
            var r = !1,
                o = n(a);
            return r = e(a) ? t >= o.left && t <= o.right : i >= o.top && i <= o.bottom;
          },
          inXRange: function inXRange(t) {
            var e = n(this);
            return t >= e.left && t <= e.right;
          },
          inYRange: function inYRange(t) {
            var e = n(this);
            return t >= e.top && t <= e.bottom;
          },
          getCenterPoint: function getCenterPoint() {
            var t,
                n,
                i = this._view;
            return e(this) ? (t = i.x, n = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, n = i.y), {
              x: t,
              y: n
            };
          },
          getArea: function getArea() {
            var t = this._view;
            return t.width * Math.abs(t.y - t.base);
          },
          tooltipPosition: function tooltipPosition() {
            var t = this._view;
            return {
              x: t.x,
              y: t.y
            };
          }
        });
      };
    }, {}],
    39: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          var n = s.getStyle(t, e),
              i = n && n.match(/^(\d+)(\.\d+)?px$/);
          return i ? Number(i[1]) : void 0;
        }

        function n(t, n) {
          var i = t.style,
              a = t.getAttribute("height"),
              r = t.getAttribute("width");

          if (t._chartjs = {
            initial: {
              height: a,
              width: r,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", null === r || "" === r) {
            var o = e(t, "width");
            void 0 !== o && (t.width = o);
          }

          if (null === a || "" === a) if ("" === t.style.height) t.height = t.width / (n.options.aspectRatio || 2);else {
            var l = e(t, "height");
            void 0 !== o && (t.height = l);
          }
          return t;
        }

        function i(t, e, n, i, a) {
          return {
            type: t,
            chart: e,
            "native": a || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
          };
        }

        function a(t, e) {
          var n = u[t.type] || t.type,
              a = s.getRelativePosition(t, e);
          return i(n, e, a.x, a.y, t);
        }

        function r(t) {
          var e = document.createElement("iframe");
          return e.className = "chartjs-hidden-iframe", e.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", e.tabIndex = -1, s.addEvent(e, "load", function () {
            s.addEvent(e.contentWindow || e, "resize", t), t();
          }), e;
        }

        function o(t, e, n) {
          var a = t._chartjs = {
            ticking: !1
          },
              o = function o() {
            a.ticking || (a.ticking = !0, s.requestAnimFrame.call(window, function () {
              return a.resizer ? (a.ticking = !1, e(i("resize", n))) : void 0;
            }));
          };

          a.resizer = r(o), t.insertBefore(a.resizer, t.firstChild);
        }

        function l(t) {
          if (t && t._chartjs) {
            var e = t._chartjs.resizer;
            e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs;
          }
        }

        var s = t.helpers,
            u = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout"
        };
        return {
          acquireContext: function acquireContext(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var i = t && t.getContext && t.getContext("2d");
            return i && i.canvas === t ? (n(t, e), i) : null;
          },
          releaseContext: function releaseContext(t) {
            var e = t.canvas;

            if (e._chartjs) {
              var n = e._chartjs.initial;
              ["height", "width"].forEach(function (t) {
                var i = n[t];
                void 0 === i || null === i ? e.removeAttribute(t) : e.setAttribute(t, i);
              }), s.each(n.style || {}, function (t, n) {
                e.style[n] = t;
              }), e.width = e.width, delete e._chartjs;
            }
          },
          addEventListener: function addEventListener(t, e, n) {
            var i = t.canvas;
            if ("resize" === e) return void o(i.parentNode, n, t);

            var r = n._chartjs || (n._chartjs = {}),
                l = r.proxies || (r.proxies = {}),
                u = l[t.id + "_" + e] = function (e) {
              n(a(e, t));
            };

            s.addEvent(i, e, u);
          },
          removeEventListener: function removeEventListener(t, e, n) {
            var i = t.canvas;
            if ("resize" === e) return void l(i.parentNode, n);
            var a = n._chartjs || {},
                r = a.proxies || {},
                o = r[t.id + "_" + e];
            o && s.removeEvent(i, e, o);
          }
        };
      };
    }, {}],
    40: [function (t, e, n) {
      "use strict";

      var i = t(39);

      e.exports = function (t) {
        t.platform = {
          acquireContext: function acquireContext() {},
          releaseContext: function releaseContext() {},
          addEventListener: function addEventListener() {},
          removeEventListener: function removeEventListener() {}
        }, t.helpers.extend(t.platform, i(t));
      };
    }, {
      39: 39
    }],
    41: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e, n) {
          var i,
              a = t._model || {},
              r = a.fill;
          if (void 0 === r && (r = !!a.backgroundColor), r === !1 || null === r) return !1;
          if (r === !0) return "origin";
          if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return ("-" === r[0] || "+" === r[0]) && (i = e + i), i === e || 0 > i || i >= n ? !1 : i;

          switch (r) {
            case "bottom":
              return "start";

            case "top":
              return "end";

            case "zero":
              return "origin";

            case "origin":
            case "start":
            case "end":
              return r;

            default:
              return !1;
          }
        }

        function n(t) {
          var e,
              n = t.el._model || {},
              i = t.el._scale || {},
              a = t.fill,
              r = null;
          if (isFinite(a)) return null;

          if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePosition ? r = i.getBasePosition() : i.getBasePixel && (r = i.getBasePixel()), void 0 !== r && null !== r) {
            if (void 0 !== r.x && void 0 !== r.y) return r;
            if ("number" == typeof r && isFinite(r)) return e = i.isHorizontal(), {
              x: e ? r : null,
              y: e ? null : r
            };
          }

          return null;
        }

        function i(t, e, n) {
          var i,
              a = t[e],
              r = a.fill,
              o = [e];
          if (!n) return r;

          for (; r !== !1 && -1 === o.indexOf(r);) {
            if (!isFinite(r)) return r;
            if (i = t[r], !i) return !1;
            if (i.visible) return r;
            o.push(r), r = i.fill;
          }

          return !1;
        }

        function a(t) {
          var e = t.fill,
              n = "dataset";
          return e === !1 ? null : (isFinite(e) || (n = "boundary"), d[n](t));
        }

        function r(t) {
          return t && !t.skip;
        }

        function o(t, e, n, i, a) {
          var r;

          if (i && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; i > r; ++r) {
              u.canvas.lineTo(t, e[r - 1], e[r]);
            }

            for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) {
              u.canvas.lineTo(t, n[r], n[r - 1], !0);
            }
          }
        }

        function l(t, e, n, i, a, l) {
          var s,
              u,
              d,
              c,
              h,
              f,
              g,
              p = e.length,
              m = i.spanGaps,
              v = [],
              b = [],
              x = 0,
              y = 0;

          for (t.beginPath(), s = 0, u = p + !!l; u > s; ++s) {
            d = s % p, c = e[d]._view, h = n(c, d, i), f = r(c), g = r(h), f && g ? (x = v.push(c), y = b.push(h)) : x && y && (m ? (f && v.push(c), g && b.push(h)) : (o(t, v, b, x, y), x = y = 0, v = [], b = []));
          }

          o(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
        }

        t.defaults.global.plugins.filler = {
          propagate: !0
        };
        var s = t.defaults,
            u = t.helpers,
            d = {
          dataset: function dataset(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = i && n.isDatasetVisible(e),
                r = a && i.dataset._children || [];
            return r.length ? function (t, e) {
              return r[e]._view || null;
            } : null;
          },
          boundary: function boundary(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return function (t) {
              return {
                x: null === n ? t.x : n,
                y: null === i ? t.y : i
              };
            };
          }
        };
        return {
          id: "filler",
          afterDatasetsUpdate: function afterDatasetsUpdate(r, o) {
            var l,
                s,
                u,
                d,
                c = (r.data.datasets || []).length,
                h = o.propagate,
                f = [];

            for (s = 0; c > s; ++s) {
              l = r.getDatasetMeta(s), u = l.dataset, d = null, u && u._model && u instanceof t.elements.Line && (d = {
                visible: r.isDatasetVisible(s),
                fill: e(u, s, c),
                chart: r,
                el: u
              }), l.$filler = d, f.push(d);
            }

            for (s = 0; c > s; ++s) {
              d = f[s], d && (d.fill = i(f, s, h), d.boundary = n(d), d.mapper = a(d));
            }
          },
          beforeDatasetDraw: function beforeDatasetDraw(t, e) {
            var n = e.meta.$filler;

            if (n) {
              var i = n.el,
                  a = i._view,
                  r = i._children || [],
                  o = n.mapper,
                  u = a.backgroundColor || s.global.defaultColor;
              o && u && r.length && l(t.ctx, r, o, a, u, i._loop);
            }
          }
        };
      };
    }, {}],
    42: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }

        function n(e, n) {
          var i = new t.Legend({
            ctx: e.ctx,
            options: n,
            chart: e
          });
          a.configure(e, i, n), a.addBox(e, i), e.legend = i;
        }

        var i = t.helpers,
            a = t.layoutService,
            r = i.noop;
        return t.defaults.global.legend = {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var n = e.datasetIndex,
                i = this.chart,
                a = i.getDatasetMeta(n);
            a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return i.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                return {
                  text: e.label,
                  fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(n),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: n
                };
              }, this) : [];
            }
          }
        }, t.Legend = t.Element.extend({
          initialize: function initialize(t) {
            i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          },
          beforeUpdate: r,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: r,
          beforeSetDimensions: r,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: r,
          beforeBuildLabels: r,
          buildLabels: function buildLabels() {
            var t = this,
                e = t.options.labels,
                n = e.generateLabels.call(t, t.chart);
            e.filter && (n = n.filter(function (n) {
              return e.filter(n, t.chart.data);
            })), t.options.reverse && n.reverse(), t.legendItems = n;
          },
          afterBuildLabels: r,
          beforeFit: r,
          fit: function fit() {
            var n = this,
                a = n.options,
                r = a.labels,
                o = a.display,
                l = n.ctx,
                s = t.defaults.global,
                u = i.getValueOrDefault,
                d = u(r.fontSize, s.defaultFontSize),
                c = u(r.fontStyle, s.defaultFontStyle),
                h = u(r.fontFamily, s.defaultFontFamily),
                f = i.fontString(d, c, h),
                g = n.legendHitBoxes = [],
                p = n.minSize,
                m = n.isHorizontal();
            if (m ? (p.width = n.maxWidth, p.height = o ? 10 : 0) : (p.width = o ? 10 : 0, p.height = n.maxHeight), o) if (l.font = f, m) {
              var v = n.lineWidths = [0],
                  b = n.legendItems.length ? d + r.padding : 0;
              l.textAlign = "left", l.textBaseline = "top", i.each(n.legendItems, function (t, i) {
                var a = e(r, d),
                    o = a + d / 2 + l.measureText(t.text).width;
                v[v.length - 1] + o + r.padding >= n.width && (b += d + r.padding, v[v.length] = n.left), g[i] = {
                  left: 0,
                  top: 0,
                  width: o,
                  height: d
                }, v[v.length - 1] += o + r.padding;
              }), p.height += b;
            } else {
              var x = r.padding,
                  y = n.columnWidths = [],
                  k = r.padding,
                  w = 0,
                  M = 0,
                  S = d + x;
              i.each(n.legendItems, function (t, n) {
                var i = e(r, d),
                    a = i + d / 2 + l.measureText(t.text).width;
                M + S > p.height && (k += w + r.padding, y.push(w), w = 0, M = 0), w = Math.max(w, a), M += S, g[n] = {
                  left: 0,
                  top: 0,
                  width: a,
                  height: d
                };
              }), k += w, y.push(w), p.width += k;
            }
            n.width = p.width, n.height = p.height;
          },
          afterFit: r,
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          draw: function draw() {
            var n = this,
                a = n.options,
                r = a.labels,
                o = t.defaults.global,
                l = o.elements.line,
                s = n.width,
                u = n.lineWidths;

            if (a.display) {
              var d,
                  c = n.ctx,
                  h = i.getValueOrDefault,
                  f = h(r.fontColor, o.defaultFontColor),
                  g = h(r.fontSize, o.defaultFontSize),
                  p = h(r.fontStyle, o.defaultFontStyle),
                  m = h(r.fontFamily, o.defaultFontFamily),
                  v = i.fontString(g, p, m);
              c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;

              var b = e(r, g),
                  x = n.legendHitBoxes,
                  y = function y(e, n, i) {
                if (!(isNaN(b) || 0 >= b)) {
                  c.save(), c.fillStyle = h(i.fillStyle, o.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, o.defaultColor);
                  var r = 0 === h(i.lineWidth, l.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), a.labels && a.labels.usePointStyle) {
                    var s = g * Math.SQRT2 / 2,
                        u = s / Math.SQRT2,
                        d = e + u,
                        f = n + u;
                    t.canvasHelpers.drawPoint(c, i.pointStyle, s, d, f);
                  } else r || c.strokeRect(e, n, b, g), c.fillRect(e, n, b, g);

                  c.restore();
                }
              },
                  k = function k(t, e, n, i) {
                c.fillText(n.text, b + g / 2 + t, e), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(b + g / 2 + t, e + g / 2), c.lineTo(b + g / 2 + t + i, e + g / 2), c.stroke());
              },
                  w = n.isHorizontal();

              d = w ? {
                x: n.left + (s - u[0]) / 2,
                y: n.top + r.padding,
                line: 0
              } : {
                x: n.left + r.padding,
                y: n.top + r.padding,
                line: 0
              };
              var M = g + r.padding;
              i.each(n.legendItems, function (t, e) {
                var i = c.measureText(t.text).width,
                    a = b + g / 2 + i,
                    o = d.x,
                    l = d.y;
                w ? o + a >= s && (l = d.y += M, d.line++, o = d.x = n.left + (s - u[d.line]) / 2) : l + M > n.bottom && (o = d.x = o + n.columnWidths[d.line] + r.padding, l = d.y = n.top + r.padding, d.line++), y(o, l, t), x[e].left = o, x[e].top = l, k(o, l, t, i), w ? d.x += a + r.padding : d.y += M;
              });
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                a = !1;

            if ("mousemove" === i) {
              if (!n.onHover) return;
            } else {
              if ("click" !== i) return;
              if (!n.onClick) return;
            }

            var r = t.x,
                o = t.y;
            if (r >= e.left && r <= e.right && o >= e.top && o <= e.bottom) for (var l = e.legendHitBoxes, s = 0; s < l.length; ++s) {
              var u = l[s];

              if (r >= u.left && r <= u.left + u.width && o >= u.top && o <= u.top + u.height) {
                if ("click" === i) {
                  n.onClick.call(e, t["native"], e.legendItems[s]), a = !0;
                  break;
                }

                if ("mousemove" === i) {
                  n.onHover.call(e, t["native"], e.legendItems[s]), a = !0;
                  break;
                }
              }
            }
            return a;
          }
        }), {
          id: "legend",
          beforeInit: function beforeInit(t) {
            var e = t.options.legend;
            e && n(t, e);
          },
          beforeUpdate: function beforeUpdate(e) {
            var r = e.options.legend,
                o = e.legend;
            r ? (r = i.configMerge(t.defaults.global.legend, r), o ? (a.configure(e, o, r), o.options = r) : n(e, r)) : o && (a.removeBox(e, o), delete e.legend);
          },
          afterEvent: function afterEvent(t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          }
        };
      };
    }, {}],
    43: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(e, n) {
          var a = new t.Title({
            ctx: e.ctx,
            options: n,
            chart: e
          });
          i.configure(e, a, n), i.addBox(e, a), e.titleBlock = a;
        }

        var n = t.helpers,
            i = t.layoutService,
            a = n.noop;
        return t.defaults.global.title = {
          display: !1,
          position: "top",
          fullWidth: !0,
          weight: 2e3,
          fontStyle: "bold",
          padding: 10,
          text: ""
        }, t.Title = t.Element.extend({
          initialize: function initialize(t) {
            var e = this;
            n.extend(e, t), e.legendHitBoxes = [];
          },
          beforeUpdate: a,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: a,
          beforeSetDimensions: a,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: a,
          beforeBuildLabels: a,
          buildLabels: a,
          afterBuildLabels: a,
          beforeFit: a,
          fit: function fit() {
            var e = this,
                i = n.getValueOrDefault,
                a = e.options,
                r = t.defaults.global,
                o = a.display,
                l = i(a.fontSize, r.defaultFontSize),
                s = e.minSize;
            e.isHorizontal() ? (s.width = e.maxWidth, s.height = o ? l + 2 * a.padding : 0) : (s.width = o ? l + 2 * a.padding : 0, s.height = e.maxHeight), e.width = s.width, e.height = s.height;
          },
          afterFit: a,
          isHorizontal: function isHorizontal() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function draw() {
            var e = this,
                i = e.ctx,
                a = n.getValueOrDefault,
                r = e.options,
                o = t.defaults.global;

            if (r.display) {
              var l,
                  s,
                  u,
                  d = a(r.fontSize, o.defaultFontSize),
                  c = a(r.fontStyle, o.defaultFontStyle),
                  h = a(r.fontFamily, o.defaultFontFamily),
                  f = n.fontString(d, c, h),
                  g = 0,
                  p = e.top,
                  m = e.left,
                  v = e.bottom,
                  b = e.right;
              i.fillStyle = a(r.fontColor, o.defaultFontColor), i.font = f, e.isHorizontal() ? (l = m + (b - m) / 2, s = p + (v - p) / 2, u = b - m) : (l = "left" === r.position ? m + d / 2 : b - d / 2, s = p + (v - p) / 2, u = v - p, g = Math.PI * ("left" === r.position ? -.5 : .5)), i.save(), i.translate(l, s), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(r.text, 0, 0, u), i.restore();
            }
          }
        }), {
          id: "title",
          beforeInit: function beforeInit(t) {
            var n = t.options.title;
            n && e(t, n);
          },
          beforeUpdate: function beforeUpdate(a) {
            var r = a.options.title,
                o = a.titleBlock;
            r ? (r = n.configMerge(t.defaults.global.title, r), o ? (i.configure(a, o, r), o.options = r) : e(a, r)) : o && (t.layoutService.removeBox(a, o), delete a.titleBlock);
          }
        };
      };
    }, {}],
    44: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = {
          position: "bottom"
        },
            i = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                n = t.getLabels();
            t.minIndex = 0, t.maxIndex = n.length - 1;
            var i;
            void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min), t.minIndex = -1 !== i ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max), t.maxIndex = -1 !== i ? i : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this,
                i = n.chart.data,
                a = n.isHorizontal();
            return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e, n, i) {
            var a,
                r = this,
                o = Math.max(r.maxIndex + 1 - r.minIndex - (r.options.gridLines.offsetGridLines ? 0 : 1), 1);

            if (void 0 !== t && null !== t && (a = r.isHorizontal() ? t.x : t.y), void 0 !== a || void 0 !== t && isNaN(e)) {
              var l = r.getLabels();
              t = a || t;
              var s = l.indexOf(t);
              e = -1 !== s ? s : e;
            }

            if (r.isHorizontal()) {
              var u = r.width / o,
                  d = u * (e - r.minIndex);
              return (r.options.gridLines.offsetGridLines && i || r.maxIndex === r.minIndex && i) && (d += u / 2), r.left + Math.round(d);
            }

            var c = r.height / o,
                h = c * (e - r.minIndex);
            return r.options.gridLines.offsetGridLines && i && (h += c / 2), r.top + Math.round(h);
          },
          getPixelForTick: function getPixelForTick(t, e) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e,
                n = this,
                i = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
                a = n.isHorizontal(),
                r = (a ? n.width : n.height) / i;
            return t -= a ? n.left : n.top, n.options.gridLines.offsetGridLines && (t -= r / 2), e = 0 >= t ? 0 : Math.round(t / r);
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", i, n);
      };
    }, {}],
    45: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = {
          position: "left",
          ticks: {
            callback: t.Ticks.formatters.linear
          }
        },
            i = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return l ? t.xAxisID === n.id : t.yAxisID === n.id;
            }

            var n = this,
                i = n.options,
                a = n.chart,
                r = a.data,
                o = r.datasets,
                l = n.isHorizontal(),
                s = 0,
                u = 1;
            n.min = null, n.max = null;
            var d = i.stacked;

            if (void 0 === d && e.each(o, function (e, n) {
              if (!d) {
                var i = a.getDatasetMeta(n);
                a.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0);
              }
            }), i.stacked || d) {
              var c = {};
              e.each(o, function (r, o) {
                var l = a.getDatasetMeta(o),
                    s = [l.type, void 0 === i.stacked && void 0 === l.stack ? o : "", l.stack].join(".");
                void 0 === c[s] && (c[s] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var u = c[s].positiveValues,
                    d = c[s].negativeValues;
                a.isDatasetVisible(o) && t(l) && e.each(r.data, function (t, e) {
                  var a = +n.getRightValue(t);
                  isNaN(a) || l.data[e].hidden || (u[e] = u[e] || 0, d[e] = d[e] || 0, i.relativePoints ? u[e] = 100 : 0 > a ? d[e] += a : u[e] += a);
                });
              }), e.each(c, function (t) {
                var i = t.positiveValues.concat(t.negativeValues),
                    a = e.min(i),
                    r = e.max(i);
                n.min = null === n.min ? a : Math.min(n.min, a), n.max = null === n.max ? r : Math.max(n.max, r);
              });
            } else e.each(o, function (i, r) {
              var o = a.getDatasetMeta(r);
              a.isDatasetVisible(r) && t(o) && e.each(i.data, function (t, e) {
                var i = +n.getRightValue(t);
                isNaN(i) || o.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i));
              });
            });

            n.min = isFinite(n.min) ? n.min : s, n.max = isFinite(n.max) ? n.max : u, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var n,
                i = this,
                a = i.options.ticks;
            if (i.isHorizontal()) n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
              var r = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);
              n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.height / (2 * r)));
            }
            return n;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                n = this,
                i = n.start,
                a = +n.getRightValue(t),
                r = n.end - i;
            return n.isHorizontal() ? (e = n.left + n.width / r * (a - i), Math.round(e)) : (e = n.bottom - n.height / r * (a - i), Math.round(e));
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.isHorizontal(),
                i = n ? e.width : e.height,
                a = (n ? t - e.left : e.bottom - t) / i;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", i, n);
      };
    }, {}],
    46: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = e.noop;
        t.LinearScaleBase = t.Scale.extend({
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                n = t.options,
                i = n.ticks;

            if (i.beginAtZero) {
              var a = e.sign(t.min),
                  r = e.sign(t.max);
              0 > a && 0 > r ? t.max = 0 : a > 0 && r > 0 && (t.min = 0);
            }

            void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (null === t.min ? t.min = i.suggestedMin : t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (null === t.max ? t.max = i.suggestedMax : t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
          },
          getTickLimit: n,
          handleDirectionalChanges: n,
          buildTicks: function buildTicks() {
            var n = this,
                i = n.options,
                a = i.ticks,
                r = n.getTickLimit();
            r = Math.max(2, r);
            var o = {
              maxTicks: r,
              min: a.min,
              max: a.max,
              stepSize: e.getValueOrDefault(a.fixedStepSize, a.stepSize)
            },
                l = n.ticks = t.Ticks.generators.linear(o, n);
            n.handleDirectionalChanges(), n.max = e.max(l), n.min = e.min(l), a.reverse ? (l.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {}],
    47: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.helpers,
            n = {
          position: "left",
          ticks: {
            callback: t.Ticks.formatters.logarithmic
          }
        },
            i = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return u ? t.xAxisID === n.id : t.yAxisID === n.id;
            }

            var n = this,
                i = n.options,
                a = i.ticks,
                r = n.chart,
                o = r.data,
                l = o.datasets,
                s = e.getValueOrDefault,
                u = n.isHorizontal();
            n.min = null, n.max = null, n.minNotZero = null;
            var d = i.stacked;

            if (void 0 === d && e.each(l, function (e, n) {
              if (!d) {
                var i = r.getDatasetMeta(n);
                r.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0);
              }
            }), i.stacked || d) {
              var c = {};
              e.each(l, function (a, o) {
                var l = r.getDatasetMeta(o),
                    s = [l.type, void 0 === i.stacked && void 0 === l.stack ? o : "", l.stack].join(".");
                r.isDatasetVisible(o) && t(l) && (void 0 === c[s] && (c[s] = []), e.each(a.data, function (t, e) {
                  var a = c[s],
                      r = +n.getRightValue(t);
                  isNaN(r) || l.data[e].hidden || (a[e] = a[e] || 0, i.relativePoints ? a[e] = 100 : a[e] += r);
                }));
              }), e.each(c, function (t) {
                var i = e.min(t),
                    a = e.max(t);
                n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? a : Math.max(n.max, a);
              });
            } else e.each(l, function (i, a) {
              var o = r.getDatasetMeta(a);
              r.isDatasetVisible(a) && t(o) && e.each(i.data, function (t, e) {
                var i = +n.getRightValue(t);
                isNaN(i) || o.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i));
              });
            });

            n.min = s(a.min, n.min), n.max = s(a.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10));
          },
          buildTicks: function buildTicks() {
            var n = this,
                i = n.options,
                a = i.ticks,
                r = {
              min: a.min,
              max: a.max
            },
                o = n.ticks = t.Ticks.generators.logarithmic(r, n);
            n.isHorizontal() || o.reverse(), n.max = e.max(o), n.min = e.min(o), a.reverse ? (o.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var n,
                i,
                a,
                r = this,
                o = r.start,
                l = +r.getRightValue(t),
                s = r.options,
                u = s.ticks;
            return r.isHorizontal() ? (a = e.log10(r.end) - e.log10(o), 0 === l ? i = r.left : (n = r.width, i = r.left + n / a * (e.log10(l) - e.log10(o)))) : (n = r.height, 0 !== o || u.reverse ? 0 === r.end && u.reverse ? (a = e.log10(r.start) - e.log10(r.minNotZero), i = l === r.end ? r.top : l === r.minNotZero ? r.top + .02 * n : r.top + .02 * n + .98 * n / a * (e.log10(l) - e.log10(r.minNotZero))) : 0 === l ? i = u.reverse ? r.top : r.bottom : (a = e.log10(r.end) - e.log10(o), n = r.height, i = r.bottom - n / a * (e.log10(l) - e.log10(o))) : (a = e.log10(r.end) - e.log10(r.minNotZero), i = l === o ? r.bottom : l === r.minNotZero ? r.bottom - .02 * n : r.bottom - .02 * n - .98 * n / a * (e.log10(l) - e.log10(r.minNotZero)))), i;
          },
          getValueForPixel: function getValueForPixel(t) {
            var n,
                i,
                a = this,
                r = e.log10(a.end) - e.log10(a.start);
            return a.isHorizontal() ? (i = a.width, n = a.start * Math.pow(10, (t - a.left) * r / i)) : (i = a.height, n = Math.pow(10, (a.bottom - t) * r / i) / a.start), n;
          }
        });
        t.scaleService.registerScaleType("logarithmic", i, n);
      };
    }, {}],
    48: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        function e(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function n(t) {
          var e = t.options.pointLabels,
              n = f.getValueOrDefault(e.fontSize, g.defaultFontSize),
              i = f.getValueOrDefault(e.fontStyle, g.defaultFontStyle),
              a = f.getValueOrDefault(e.fontFamily, g.defaultFontFamily),
              r = f.fontString(n, i, a);
          return {
            size: n,
            style: i,
            family: a,
            font: r
          };
        }

        function i(t, e, n) {
          return f.isArray(n) ? {
            w: f.longestText(t, t.font, n),
            h: n.length * e + 1.5 * (n.length - 1) * e
          } : {
            w: t.measureText(n).width,
            h: e
          };
        }

        function a(t, e, n, i, a) {
          return t === i || t === a ? {
            start: e - n / 2,
            end: e + n / 2
          } : i > t || t > a ? {
            start: e - n - 5,
            end: e
          } : {
            start: e,
            end: e + n + 5
          };
        }

        function r(t) {
          var r,
              o,
              l,
              s = n(t),
              u = Math.min(t.height / 2, t.width / 2),
              d = {
            r: t.width,
            l: 0,
            t: t.height,
            b: 0
          },
              c = {};
          t.ctx.font = s.font, t._pointLabelSizes = [];
          var h = e(t);

          for (r = 0; h > r; r++) {
            l = t.getPointPosition(r, u), o = i(t.ctx, s.size, t.pointLabels[r] || ""), t._pointLabelSizes[r] = o;
            var g = t.getIndexAngle(r),
                p = f.toDegrees(g) % 360,
                m = a(p, l.x, o.w, 0, 180),
                v = a(p, l.y, o.h, 90, 270);
            m.start < d.l && (d.l = m.start, c.l = g), m.end > d.r && (d.r = m.end, c.r = g), v.start < d.t && (d.t = v.start, c.t = g), v.end > d.b && (d.b = v.end, c.b = g);
          }

          t.setReductions(u, d, c);
        }

        function o(t) {
          var e = Math.min(t.height / 2, t.width / 2);
          t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0);
        }

        function l(t) {
          return 0 === t || 180 === t ? "center" : 180 > t ? "left" : "right";
        }

        function s(t, e, n, i) {
          if (f.isArray(e)) for (var a = n.y, r = 1.5 * i, o = 0; o < e.length; ++o) {
            t.fillText(e[o], n.x, a), a += r;
          } else t.fillText(e, n.x, n.y);
        }

        function u(t, e, n) {
          90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || 90 > t) && (n.y -= e.h);
        }

        function d(t) {
          var i = t.ctx,
              a = f.getValueOrDefault,
              r = t.options,
              o = r.angleLines,
              d = r.pointLabels;
          i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
          var c = t.getDistanceFromCenterForValue(r.reverse ? t.min : t.max),
              h = n(t);
          i.textBaseline = "top";

          for (var p = e(t) - 1; p >= 0; p--) {
            if (o.display) {
              var m = t.getPointPosition(p, c);
              i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(m.x, m.y), i.stroke(), i.closePath();
            }

            if (d.display) {
              var v = t.getPointPosition(p, c + 5),
                  b = a(d.fontColor, g.defaultFontColor);
              i.font = h.font, i.fillStyle = b;
              var x = t.getIndexAngle(p),
                  y = f.toDegrees(x);
              i.textAlign = l(y), u(y, t._pointLabelSizes[p], v), s(i, t.pointLabels[p] || "", v, h.size);
            }
          }
        }

        function c(t, n, i, a) {
          var r = t.ctx;
          if (r.strokeStyle = f.getValueAtIndexOrDefault(n.color, a - 1), r.lineWidth = f.getValueAtIndexOrDefault(n.lineWidth, a - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
            var o = e(t);
            if (0 === o) return;
            r.beginPath();
            var l = t.getPointPosition(0, i);
            r.moveTo(l.x, l.y);

            for (var s = 1; o > s; s++) {
              l = t.getPointPosition(s, i), r.lineTo(l.x, l.y);
            }

            r.closePath(), r.stroke();
          }
        }

        function h(t) {
          return f.isNumber(t) ? t : 0;
        }

        var f = t.helpers,
            g = t.defaults.global,
            p = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: t.Ticks.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        },
            m = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                e = t.options,
                n = e.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var i = f.min([t.height, t.width]),
                a = f.getValueOrDefault(n.fontSize, g.defaultFontSize);
            t.drawingArea = e.display ? i / 2 - (a / 2 + n.backdropPaddingY) : i / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            f.each(e.data.datasets, function (a, r) {
              if (e.isDatasetVisible(r)) {
                var o = e.getDatasetMeta(r);
                f.each(a.data, function (e, a) {
                  var r = +t.getRightValue(e);
                  isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i));
                });
              }
            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                e = f.getValueOrDefault(t.fontSize, g.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            this.options.pointLabels.display ? r(this) : o(this);
          },
          setReductions: function setReductions(t, e, n) {
            var i = this,
                a = e.l / Math.sin(n.l),
                r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                o = -e.t / Math.cos(n.t),
                l = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
            a = h(a), r = h(r), o = h(o), l = h(l), i.drawingArea = Math.min(Math.round(t - (a + r) / 2), Math.round(t - (o + l) / 2)), i.setCenterPoint(a, r, o, l);
          },
          setCenterPoint: function setCenterPoint(t, e, n, i) {
            var a = this,
                r = a.width - e - a.drawingArea,
                o = t + a.drawingArea,
                l = n + a.drawingArea,
                s = a.height - i - a.drawingArea;
            a.xCenter = Math.round((o + r) / 2 + a.left), a.yCenter = Math.round((l + s) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            var n = 2 * Math.PI / e(this),
                i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                a = i * Math.PI * 2 / 360;
            return t * n + a;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function getPointPosition(t, e) {
            var n = this,
                i = n.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * e) + n.xCenter,
              y: Math.round(Math.sin(i) * e) + n.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                n = t.max;
            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > n ? n : e > 0 && n > 0 ? e : 0);
          },
          draw: function draw() {
            var t = this,
                e = t.options,
                n = e.gridLines,
                i = e.ticks,
                a = f.getValueOrDefault;

            if (e.display) {
              var r = t.ctx,
                  o = a(i.fontSize, g.defaultFontSize),
                  l = a(i.fontStyle, g.defaultFontStyle),
                  s = a(i.fontFamily, g.defaultFontFamily),
                  u = f.fontString(o, l, s);
              f.each(t.ticks, function (l, s) {
                if (s > 0 || e.reverse) {
                  var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
                      h = t.yCenter - d;

                  if (n.display && 0 !== s && c(t, n, d, s), i.display) {
                    var f = a(i.fontColor, g.defaultFontColor);

                    if (r.font = u, i.showLabelBackdrop) {
                      var p = r.measureText(l).width;
                      r.fillStyle = i.backdropColor, r.fillRect(t.xCenter - p / 2 - i.backdropPaddingX, h - o / 2 - i.backdropPaddingY, p + 2 * i.backdropPaddingX, o + 2 * i.backdropPaddingY);
                    }

                    r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = f, r.fillText(l, t.xCenter, h);
                  }
                }
              }), (e.angleLines.display || e.pointLabels.display) && d(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", m, p);
      };
    }, {}],
    49: [function (t, e, n) {
      "use strict";

      var i = t(1);
      i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
        function e(t, e) {
          var n = t.options.time;
          if ("string" == typeof n.parser) return i(e, n.parser);
          if ("function" == typeof n.parser) return n.parser(e);
          if ("function" == typeof e.getMonth || "number" == typeof e) return i(e);
          if (e.isValid && e.isValid()) return e;
          var a = n.format;
          return "string" != typeof a && a.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), a(e)) : i(e, a);
        }

        function n(t, e, n, i) {
          for (var a, r = Object.keys(l), o = r.length, s = r.indexOf(t); o > s; s++) {
            a = r[s];
            var u = l[a],
                d = u.steps && u.steps[u.steps.length - 1] || u.maxStep;
            if (void 0 === d || Math.ceil((n - e) / (d * u.size)) <= i) break;
          }

          return a;
        }

        function a(t, e, n, i) {
          var a = l[n],
              r = a.size,
              o = Math.ceil((e - t) / r),
              s = 1,
              u = e - t;
          if (a.steps) for (var d = a.steps.length, c = 0; d > c && o > i; c++) {
            s = a.steps[c], o = Math.ceil(u / (r * s));
          } else for (; o > i && i > 0;) {
            ++s, o = Math.ceil(u / (r * s));
          }
          return s;
        }

        function r(t, e, n) {
          var a = [];

          if (t.maxTicks) {
            var r = t.stepSize;
            a.push(void 0 !== t.min ? t.min : n.min);

            for (var o = i(n.min); o.add(r, t.unit).valueOf() < n.max;) {
              a.push(o.valueOf());
            }

            var l = t.max || n.max;
            a[a.length - 1] !== l && a.push(l);
          }

          return a;
        }

        var o = t.helpers,
            l = {
          millisecond: {
            size: 1,
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
          },
          second: {
            size: 1e3,
            steps: [1, 2, 5, 10, 30]
          },
          minute: {
            size: 6e4,
            steps: [1, 2, 5, 10, 30]
          },
          hour: {
            size: 36e5,
            steps: [1, 2, 3, 6, 12]
          },
          day: {
            size: 864e5,
            steps: [1, 2, 5]
          },
          week: {
            size: 6048e5,
            maxStep: 4
          },
          month: {
            size: 2628e6,
            maxStep: 3
          },
          quarter: {
            size: 7884e6,
            maxStep: 4
          },
          year: {
            size: 3154e7,
            maxStep: !1
          }
        },
            s = {
          position: "bottom",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm:ss a",
              hour: "MMM D, hA",
              day: "ll",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1
          }
        };

        t.Ticks.generators.time = function (t, e) {
          var n,
              a,
              o = t.isoWeekday;
          return "week" === t.unit && o !== !1 ? (n = i(e.min).startOf("isoWeek").isoWeekday(o).valueOf(), a = i(e.max).startOf("isoWeek").isoWeekday(o), e.max - a > 0 && a.add(1, "week"), a = a.valueOf()) : (n = i(e.min).startOf(t.unit).valueOf(), a = i(e.max).startOf(t.unit), e.max - a > 0 && a.add(1, t.unit), a = a.valueOf()), r(t, e, {
            min: n,
            max: a
          });
        };

        var u = t.Scale.extend({
          initialize: function initialize() {
            if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            t.Scale.prototype.initialize.call(this);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                n = this,
                i = n.options.time,
                a = Number.MAX_SAFE_INTEGER,
                r = Number.MIN_SAFE_INTEGER,
                l = n.chart.data,
                s = {
              labels: [],
              datasets: []
            };
            o.each(l.labels, function (o, l) {
              var u = e(n, o);
              u.isValid() && (i.round && u.startOf(i.round), t = u.valueOf(), a = Math.min(t, a), r = Math.max(t, r), s.labels[l] = t);
            }), o.each(l.datasets, function (l, u) {
              var d = [];
              "object" == _typeof(l.data[0]) && null !== l.data[0] && n.chart.isDatasetVisible(u) ? o.each(l.data, function (o, l) {
                var s = e(n, n.getRightValue(o));
                s.isValid() && (i.round && s.startOf(i.round), t = s.valueOf(), a = Math.min(t, a), r = Math.max(t, r), d[l] = t);
              }) : d = s.labels.slice(), s.datasets[u] = d;
            }), n.dataMin = a, n.dataMax = r, n._parsedData = s;
          },
          buildTicks: function buildTicks() {
            var i,
                r,
                l = this,
                s = l.options.time,
                u = l.dataMin,
                d = l.dataMax;

            if (s.min) {
              var c = e(l, s.min);
              s.round && c.round(s.round), i = c.valueOf();
            }

            s.max && (r = e(l, s.max).valueOf());
            var h = l.getLabelCapacity(i || u),
                f = s.unit || n(s.minUnit, i || u, r || d, h);
            l.displayFormat = s.displayFormats[f];
            var g = s.stepSize || a(i || u, r || d, f, h);
            l.ticks = t.Ticks.generators.time({
              maxTicks: h,
              min: i,
              max: r,
              stepSize: g,
              unit: f,
              isoWeekday: s.isoWeekday
            }, {
              min: u,
              max: d
            }), l.max = o.max(l.ticks), l.min = o.min(l.ticks);
          },
          getLabelForIndex: function getLabelForIndex(t, n) {
            var i = this,
                a = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "",
                r = i.chart.data.datasets[n].data[t];
            return null !== r && "object" == _typeof(r) && (a = i.getRightValue(r)), i.options.time.tooltipFormat && (a = e(i, a).format(i.options.time.tooltipFormat)), a;
          },
          tickFormatFunction: function tickFormatFunction(t, e, n) {
            var i = t.format(this.displayFormat),
                a = this.options.ticks,
                r = o.getValueOrDefault(a.callback, a.userCallback);
            return r ? r(i, e, n) : i;
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this;
            t.ticksAsTimestamps = t.ticks, t.ticks = t.ticks.map(function (t) {
              return i(t);
            }).map(t.tickFormatFunction, t);
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                n = e.max - e.min,
                i = n ? (t - e.min) / n : 0;

            if (e.isHorizontal()) {
              var a = e.width * i;
              return e.left + Math.round(a);
            }

            var r = e.height * i;
            return e.top + Math.round(r);
          },
          getPixelForValue: function getPixelForValue(t, n, i) {
            var a = this,
                r = null;
            return void 0 !== n && void 0 !== i && (r = a._parsedData.datasets[i][n]), null === r && (t && t.isValid || (t = e(a, a.getRightValue(t))), t && t.isValid && t.isValid() && (r = t.valueOf())), null !== r ? a.getPixelForOffset(r) : void 0;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForOffset(this.ticksAsTimestamps[t]);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.isHorizontal() ? e.width : e.height,
                a = (t - (e.isHorizontal() ? e.left : e.top)) / n;
            return i(e.min + a * (e.max - e.min));
          },
          getLabelWidth: function getLabelWidth(e) {
            var n = this,
                i = n.options.ticks,
                a = n.ctx.measureText(e).width,
                r = Math.cos(o.toRadians(i.maxRotation)),
                l = Math.sin(o.toRadians(i.maxRotation)),
                s = o.getValueOrDefault(i.fontSize, t.defaults.global.defaultFontSize);
            return a * r + s * l;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this;
            e.displayFormat = e.options.time.displayFormats.millisecond;
            var n = e.tickFormatFunction(i(t), 0, []),
                a = e.getLabelWidth(n),
                r = e.isHorizontal() ? e.width : e.height,
                o = r / a;
            return o;
          }
        });
        t.scaleService.registerScaleType("time", u, s);
      };
    }, {
      1: 1
    }]
  }, {}, [7])(7);
});

/***/ }),

/***/ "./resources/template/assets/js/jquery.mCustomScrollbar.concat.min.js":
/*!****************************************************************************!*\
  !*** ./resources/template/assets/js/jquery.mCustomScrollbar.concat.min.js ***!
  \****************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  function b(b) {
    var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;

    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }

      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }

      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }

  function c() {
    f = null;
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }

  var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(b) {
      var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  function b(b) {
    var g = b || window.event,
        h = i.call(arguments, 1),
        j = 0,
        l = 0,
        m = 0,
        n = 0,
        o = 0,
        p = 0;

    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q;
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r;
      }

      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top;
      }

      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
    }
  }

  function c() {
    f = null;
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
  }

  var e,
      f,
      g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      i = Array.prototype.slice;
  if (a.event.fixHooks) for (var j = g.length; j;) {
    a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  }
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function setup() {
      if (this.addEventListener) for (var c = h.length; c;) {
        this.addEventListener(h[--c], b, !1);
      } else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function teardown() {
      if (this.removeEventListener) for (var c = h.length; c;) {
        this.removeEventListener(h[--c], b, !1);
      } else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function getLineHeight(b) {
      var c = a(b),
          d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
    },
    getPageHeight: function getPageHeight(b) {
      return a(b).height();
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function mousewheel(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function unmousewheel(a) {
      return this.unbind("mousewheel", a);
    }
  });
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */

!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  !function (t) {
    var o =  true && __webpack_require__.amdO,
        a =  true && module.exports,
        n = "https:" == document.location.protocol ? "https:" : "http:",
        i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
    o || (a ? __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery-mousewheel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t();
  }(function () {
    var t,
        o = "mCustomScrollbar",
        a = "mCS",
        n = ".mCustomScrollbar",
        i = {
      setTop: 0,
      setLeft: 0,
      axis: "y",
      scrollbarPosition: "inside",
      scrollInertia: 950,
      autoDraggerLength: !0,
      alwaysShowScrollbar: 0,
      snapOffset: 0,
      mouseWheel: {
        enable: !0,
        scrollAmount: "auto",
        axis: "y",
        deltaFactor: "auto",
        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
      },
      scrollButtons: {
        scrollType: "stepless",
        scrollAmount: "auto"
      },
      keyboard: {
        enable: !0,
        scrollType: "stepless",
        scrollAmount: "auto"
      },
      contentTouchScroll: 25,
      documentTouchScroll: !0,
      advanced: {
        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
        updateOnContentResize: !0,
        updateOnImageLoad: "auto",
        autoUpdateTimeout: 60
      },
      theme: "light",
      callbacks: {
        onTotalScrollOffset: 0,
        onTotalScrollBackOffset: 0,
        alwaysTriggerOffsets: !0
      }
    },
        r = 0,
        l = {},
        s = window.attachEvent && !window.addEventListener ? 1 : 0,
        c = !1,
        d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
        u = {
      init: function init(t) {
        var t = e.extend(!0, {}, i, t),
            o = f.call(this);

        if (t.live) {
          var s = t.liveSelector || this.selector || n,
              c = e(s);
          if ("off" === t.live) return void m(s);
          l[s] = setTimeout(function () {
            c.mCustomScrollbar(t), "once" === t.live && c.length && m(s);
          }, 500);
        } else m(s);

        return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != _typeof(t.mouseWheel) && 1 == t.mouseWheel && (t.mouseWheel = {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          preventDefault: !1,
          deltaFactor: "auto",
          normalizeDelta: !1,
          invert: !1
        }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function () {
          var o = e(this);

          if (!o.data(a)) {
            o.data(a, {
              idx: ++r,
              opt: t,
              scrollRatio: {
                y: null,
                x: null
              },
              overflowed: null,
              contentReset: {
                y: null,
                x: null
              },
              bindEvents: !1,
              tweenRunning: !1,
              sequential: {},
              langDir: o.css("direction"),
              cbOffsets: null,
              trigger: null,
              poll: {
                size: {
                  o: 0,
                  n: 0
                },
                img: {
                  o: 0,
                  n: 0
                },
                change: {
                  o: 0,
                  n: 0
                }
              }
            });
            var n = o.data(a),
                i = n.opt,
                l = o.data("mcs-axis"),
                s = o.data("mcs-scrollbar-position"),
                c = o.data("mcs-theme");
            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o);
          }
        });
      },
      update: function update(t, o) {
        var n = t || f.call(this);
        return e(n).each(function () {
          var t = e(this);

          if (t.data(a)) {
            var n = t.data(a),
                i = n.opt,
                r = e("#mCSB_" + n.idx + "_container"),
                l = e("#mCSB_" + n.idx),
                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            if (!r.length) return;
            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
            var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
            "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
              dir: "y",
              dur: 0,
              overwrite: "none"
            }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
              dir: "x",
              dur: 0,
              overwrite: "none"
            }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
              dir: "x",
              dur: 0,
              overwrite: "none"
            }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
              dir: "y",
              dur: 0,
              overwrite: "none"
            }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this);
          }
        });
      },
      scrollTo: function scrollTo(t, o) {
        if ("undefined" != typeof t && null != t) {
          var n = f.call(this);
          return e(n).each(function () {
            var n = e(this);

            if (n.data(a)) {
              var i = n.data(a),
                  r = i.opt,
                  l = {
                trigger: "external",
                scrollInertia: r.scrollInertia,
                scrollEasing: "mcsEaseInOut",
                moveDragger: !1,
                timeout: 60,
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
              },
                  s = e.extend(!0, {}, l, o),
                  c = Y.call(this, t),
                  d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
              c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function () {
                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s));
              }, s.timeout);
            }
          });
        }
      },
      stop: function stop() {
        var t = f.call(this);
        return e(t).each(function () {
          var t = e(this);
          t.data(a) && Q(t);
        });
      },
      disable: function disable(t) {
        var o = f.call(this);
        return e(o).each(function () {
          var o = e(this);

          if (o.data(a)) {
            o.data(a);
            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]);
          }
        });
      },
      destroy: function destroy() {
        var t = f.call(this);
        return e(t).each(function () {
          var n = e(this);

          if (n.data(a)) {
            var i = n.data(a),
                r = i.opt,
                l = e("#mCSB_" + i.idx),
                s = e("#mCSB_" + i.idx + "_container"),
                c = e(".mCSB_" + i.idx + "_scrollbar");
            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]);
          }
        });
      }
    },
        f = function f() {
      return "object" != _typeof(e(this)) || e(this).length < 1 ? n : this;
    },
        h = function h(t) {
      var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          n = ["minimal", "minimal-dark"],
          i = ["minimal", "minimal-dark"],
          r = ["minimal", "minimal-dark"];
      t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition;
    },
        m = function m(e) {
      l[e] && (clearTimeout(l[e]), $(l, e));
    },
        p = function p(e) {
      return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
    },
        g = function g(e) {
      return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
    },
        v = function v() {
      var t = e(this),
          n = t.data(a),
          i = n.opt,
          r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
          l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
          c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
          u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          f = i.autoHideScrollbar ? " " + d[6] : "",
          h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
      i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
      var m = e("#mCSB_" + n.idx),
          p = e("#mCSB_" + n.idx + "_container");
      "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this);
      var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
      g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width());
    },
        x = function x(t) {
      var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
        return e(this).outerWidth(!0);
      }).get())],
          a = t.parent().width();
      return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
    },
        _ = function _() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx + "_container");

      if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
        i.css({
          width: "auto",
          "min-width": 0,
          "overflow-x": "scroll"
        });
        var r = Math.ceil(i[0].scrollWidth);
        3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
          width: r,
          "min-width": "100%",
          "overflow-x": "inherit"
        }) : i.css({
          "overflow-x": "inherit",
          position: "absolute"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
          width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
          "min-width": "100%",
          position: "relative"
        }).unwrap();
      }
    },
        w = function w() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e(".mCSB_" + o.idx + "_scrollbar:first"),
          r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
          l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
          s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
      n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]);
    },
        S = function S() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
          c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
          d = s && c[1] < c[0] ? c[0] : c[1],
          u = s && c[3] < c[2] ? c[2] : c[3];
      r[0].css({
        height: d,
        "max-height": r[0].parent().height() - 10
      }).find(".mCSB_dragger_bar").css({
        "line-height": c[0] + "px"
      }), r[1].css({
        width: u,
        "max-width": r[1].parent().width() - 10
      });
    },
        b = function b() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
          l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
          s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
      o.scrollRatio = {
        y: s[0],
        x: s[1]
      };
    },
        C = function C(e, t, o) {
      var a = o ? d[0] + "_expanded" : "",
          n = e.closest(".mCSB_scrollTools");
      "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1])));
    },
        y = function y() {
      var t = e(this),
          o = t.data(a),
          n = e("#mCSB_" + o.idx),
          i = e("#mCSB_" + o.idx + "_container"),
          r = null == o.overflowed ? i.height() : i.outerHeight(!1),
          l = null == o.overflowed ? i.width() : i.outerWidth(!1),
          s = i[0].scrollHeight,
          c = i[0].scrollWidth;
      return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()];
    },
        B = function B() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e("#mCSB_" + o.idx),
          r = e("#mCSB_" + o.idx + "_container"),
          l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];

      if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
        var s = dx = 0;
        "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX");
      }
    },
        T = function T() {
      function t() {
        r = setTimeout(function () {
          e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t();
        }, 100);
      }

      var o = e(this),
          n = o.data(a),
          i = n.opt;

      if (!n.bindEvents) {
        if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) {
          var r;
          t();
        }

        P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0;
      }
    },
        k = function k() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = ".mCSB_" + o.idx + "_scrollbar",
          l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
          s = e("#mCSB_" + o.idx + "_container");
      n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
        e(this).unbind("." + i);
      }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1);
    },
        M = function M(t) {
      var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = e("#mCSB_" + n.idx + "_container_wrapper"),
          l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
          s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
          c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
      "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]);
    },
        O = function O(t) {
      var o = t.type,
          a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
          n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];

      switch (o) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
          return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];

        case "touchstart":
        case "touchmove":
        case "touchend":
          var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
              r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
          return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];

        default:
          return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1];
      }
    },
        I = function I() {
      function t(e, t, a, n) {
        if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
            s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;else var i = "y",
            s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
        G(r, s.toString(), {
          dir: i,
          drag: !0
        });
      }

      var o,
          n,
          i,
          r = e(this),
          l = r.data(a),
          d = l.opt,
          u = a + "_" + l.idx,
          f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
          h = e("#mCSB_" + l.idx + "_container"),
          m = e("#" + f[0] + ",#" + f[1]),
          p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
          g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
      m.bind("contextmenu." + u, function (e) {
        e.preventDefault();
      }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
        if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
          c = !0, s && (document.onselectstart = function () {
            return !1;
          }), L.call(h, !1), Q(r), o = e(this);
          var a = o.offset(),
              l = O(t)[0] - a.top,
              u = O(t)[1] - a.left,
              f = o.height() + a.top,
              m = o.width() + a.left;
          f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar);
        }
      }).bind("touchmove." + u, function (e) {
        e.stopImmediatePropagation(), e.preventDefault();
        var a = o.offset(),
            r = O(e)[0] - a.top,
            l = O(e)[1] - a.left;
        t(n, i, r, l);
      }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
        if (o) {
          var a = o.offset(),
              r = O(e)[0] - a.top,
              l = O(e)[1] - a.left;
          if (n === r && i === l) return;
          t(n, i, r, l);
        }
      }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
        o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0);
      });
    },
        D = function D() {
      function o(e) {
        if (!te(e) || c || O(e)[2]) return void (t = 0);
        t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
        var o = I.offset();
        u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]];
      }

      function n(e) {
        if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
          g = K();
          var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left,
              n = "mcsLinearOut";
          if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
              r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
          if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
              h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
          r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0);
        }
      }

      function i(e) {
        if (!te(e) || c || O(e)[2]) return void (t = 0);
        t = 1, e.stopImmediatePropagation(), Q(y), p = K();
        var o = M.offset();
        h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [];
      }

      function r(e) {
        if (te(e) && !c && !O(e)[2]) {
          d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K();
          var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left;

          if (!(v - g > 30)) {
            _ = 1e3 / (v - p);
            var n = "mcsEaseOut",
                i = 2.5 > _,
                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
            x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
            var u = [Math.abs(x[0]), Math.abs(x[1])];
            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
            var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
            var y = parseInt(T.contentTouchScroll) || 0;
            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
          }
        }
      }

      function l(e, t) {
        var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
        return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3];
      }

      function s(e, t, o, a, n, i) {
        e && G(y, e.toString(), {
          dur: t,
          scrollEasing: o,
          dir: a,
          overwrite: n,
          drag: i
        });
      }

      var d,
          u,
          f,
          h,
          m,
          p,
          g,
          v,
          x,
          _,
          w,
          S,
          b,
          C,
          y = e(this),
          B = y.data(a),
          T = B.opt,
          k = a + "_" + B.idx,
          M = e("#mCSB_" + B.idx),
          I = e("#mCSB_" + B.idx + "_container"),
          D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
          E = [],
          W = [],
          R = 0,
          L = "yx" === T.axis ? "none" : "all",
          z = [],
          P = I.find("iframe"),
          H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
          U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;

      I.bind(H[0], function (e) {
        o(e);
      }).bind(H[1], function (e) {
        n(e);
      }), M.bind(H[0], function (e) {
        i(e);
      }).bind(H[2], function (e) {
        r(e);
      }), P.length && P.each(function () {
        e(this).bind("load", function () {
          A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function (e) {
            o(e), i(e);
          }).bind(H[1], function (e) {
            n(e);
          }).bind(H[2], function (e) {
            r(e);
          });
        });
      });
    },
        E = function E() {
      function o() {
        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
      }

      function n(e, t, o) {
        d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null);
      }

      var i,
          r = e(this),
          l = r.data(a),
          s = l.opt,
          d = l.sequential,
          u = a + "_" + l.idx,
          f = e("#mCSB_" + l.idx + "_container"),
          h = f.parent();
      f.bind("mousedown." + u, function () {
        t || i || (i = 1, c = !0);
      }).add(document).bind("mousemove." + u, function (e) {
        if (!t && i && o()) {
          var a = f.offset(),
              r = O(e)[0] - a.top + f[0].offsetTop,
              c = O(e)[1] - a.left + f[0].offsetLeft;
          r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)));
        }
      }).bind("mouseup." + u + " dragend." + u, function () {
        t || (i && (i = 0, n("off", null)), c = !1);
      });
    },
        W = function W() {
      function t(t, a) {
        if (Q(o), !z(o, t.target)) {
          var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
              d = i.scrollInertia;
          if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
              f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
              p = c[1][0].offsetLeft,
              g = c[1].parent().width() - c[1].width(),
              v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;else var u = "y",
              f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
              h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
              m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
              p = c[0][0].offsetTop,
              g = c[0].parent().height() - c[0].height(),
              v = t.deltaY || a;
          "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), {
            dir: u,
            dur: d
          }));
        }
      }

      if (e(this).data(a)) {
        var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = a + "_" + n.idx,
            l = e("#mCSB_" + n.idx),
            c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
            d = e("#mCSB_" + n.idx + "_container").find("iframe");
        d.length && d.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
              t(e, o);
            });
          });
        }), l.bind("mousewheel." + r, function (e, o) {
          t(e, o);
        });
      }
    },
        R = new Object(),
        A = function A(t) {
      var o = !1,
          a = !1,
          n = null;
      if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a];

      if (t) {
        try {
          var i = t.contentDocument || t.contentWindow.document;
          n = i.body.innerHTML;
        } catch (r) {}

        o = null !== n;
      } else {
        try {
          var i = top.document;
          n = i.body.innerHTML;
        } catch (r) {}

        o = null !== n;
      }

      return a !== !1 && (R[a] = o), o;
    },
        L = function L(e) {
      var t = this.find("iframe");

      if (t.length) {
        var o = e ? "auto" : "none";
        t.css("pointer-events", o);
      }
    },
        z = function z(t, o) {
      var n = o.nodeName.toLowerCase(),
          i = t.data(a).opt.mouseWheel.disableOver,
          r = ["select", "textarea"];
      return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"));
    },
        P = function P() {
      var t,
          o = e(this),
          n = o.data(a),
          i = a + "_" + n.idx,
          r = e("#mCSB_" + n.idx + "_container"),
          l = r.parent(),
          s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
      s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
        c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1);
      }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
        c = !1;
      }).bind("click." + i, function (a) {
        if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
          Q(o);
          var i = e(this),
              s = i.find(".mCSB_dragger");

          if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
            if (!n.overflowed[1]) return;
            var c = "x",
                u = a.pageX > s.offset().left ? -1 : 1,
                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width());
          } else {
            if (!n.overflowed[0]) return;
            var c = "y",
                u = a.pageY > s.offset().top ? -1 : 1,
                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height());
          }

          G(o, f.toString(), {
            dir: c,
            scrollEasing: "mcsEaseInOut"
          });
        }
      });
    },
        H = function H() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + "_" + o.idx,
          r = e("#mCSB_" + o.idx + "_container"),
          l = r.parent();
      r.bind("focusin." + i, function () {
        var o = e(document.activeElement),
            a = r.find(".mCustomScrollBox").length,
            i = 0;
        o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function () {
          var e = [ae(o)[0], ae(o)[1]],
              a = [r[0].offsetTop, r[0].offsetLeft],
              s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
              c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
          "x" === n.axis || s[0] || G(t, e[0].toString(), {
            dir: "y",
            scrollEasing: "mcsEaseInOut",
            overwrite: c,
            dur: i
          }), "y" === n.axis || s[1] || G(t, e[1].toString(), {
            dir: "x",
            scrollEasing: "mcsEaseInOut",
            overwrite: c,
            dur: i
          });
        }, t[0]._focusTimer));
      });
    },
        U = function U() {
      var t = e(this),
          o = t.data(a),
          n = a + "_" + o.idx,
          i = e("#mCSB_" + o.idx + "_container").parent();
      i.bind("scroll." + n, function () {
        0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden");
      });
    },
        F = function F() {
      var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = o.sequential,
          r = a + "_" + o.idx,
          l = ".mCSB_" + o.idx + "_scrollbar",
          s = e(l + ">a");
      s.bind("contextmenu." + r, function (e) {
        e.preventDefault();
      }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (a) {
        function r(e, o) {
          i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o);
        }

        if (a.preventDefault(), ee(a)) {
          var l = e(this).attr("class");

          switch (i.type = n.scrollButtons.scrollType, a.type) {
            case "mousedown":
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
              if ("stepped" === i.type) return;
              c = !0, o.tweenRunning = !1, r("on", l);
              break;

            case "mouseup":
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseout":
            case "pointerout":
            case "MSPointerOut":
              if ("stepped" === i.type) return;
              c = !1, i.dir && r("off", l);
              break;

            case "click":
              if ("stepped" !== i.type || o.tweenRunning) return;
              r("on", l);
          }
        }
      });
    },
        q = function q() {
      function t(t) {
        function a(e, t) {
          r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t);
        }

        switch (t.type) {
          case "blur":
            n.tweenRunning && r.dir && a("off", null);
            break;

          case "keydown":
          case "keyup":
            var l = t.keyCode ? t.keyCode : t.which,
                s = "on";

            if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
              if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return;
              "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l));
            } else if (33 === l || 34 === l) {
              if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                Q(o);
                var f = 34 === l ? -1 : 1;
                if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                    m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());else var h = "y",
                    m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                G(o, m.toString(), {
                  dir: h,
                  scrollEasing: "mcsEaseInOut"
                });
              }
            } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
              if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                  m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;else var h = "y",
                  m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
              G(o, m.toString(), {
                dir: h,
                scrollEasing: "mcsEaseInOut"
              });
            }

        }
      }

      var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = n.sequential,
          l = a + "_" + n.idx,
          s = e("#mCSB_" + n.idx),
          c = e("#mCSB_" + n.idx + "_container"),
          d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          f = c.find("iframe"),
          h = ["blur." + l + " keydown." + l + " keyup." + l];
      f.length && f.each(function () {
        e(this).bind("load", function () {
          A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function (e) {
            t(e);
          });
        });
      }), s.attr("tabindex", "0").bind(h[0], function (e) {
        t(e);
      });
    },
        j = function j(t, o, n, i, r) {
      function l(e) {
        u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);

        var o = "stepped" !== f.type,
            a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
            n = e ? o ? 7.5 : 40 : 2.5,
            s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
            m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
            v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
            x = "auto" !== f.scrollAmount ? v : m,
            _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
            w = !!e;

        return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), {
          dir: f.dir[0],
          scrollEasing: _,
          dur: a,
          onComplete: w
        }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function () {
          l();
        }, a)));
      }

      function s() {
        clearTimeout(f.step), $(f, "step"), Q(t);
      }

      var c = t.data(a),
          u = c.opt,
          f = c.sequential,
          h = e("#mCSB_" + c.idx + "_container"),
          m = "stepped" === f.type,
          p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
          g = u.scrollInertia < 1 ? 17 : u.scrollInertia;

      switch (o) {
        case "on":
          if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
          l(m);
          break;

        case "off":
          s(), (m || c.tweenRunning && f.dir) && l(!0);
      }
    },
        Y = function Y(t) {
      var o = e(this).data(a).opt,
          n = [];
      return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n;
    },
        X = function X(t, o) {
      if (null != t && "undefined" != typeof t) {
        var n = e(this),
            i = n.data(a),
            r = i.opt,
            l = e("#mCSB_" + i.idx + "_container"),
            s = l.parent(),
            c = _typeof(t);

        o || (o = "x" === r.axis ? "x" : "y");
        var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
            f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
            h = "x" === o ? "left" : "top";

        switch (c) {
          case "function":
            return t();

          case "object":
            var m = t.jquery ? t : e(t);
            if (!m.length) return;
            return "x" === o ? ae(m)[1] : ae(m)[0];

          case "string":
          case "number":
            if (oe(t)) return Math.abs(t);
            if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
            if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1]));

            if (-1 !== t.indexOf("+=")) {
              var p = f + parseInt(t.split("+=")[1]);
              return p >= 0 ? 0 : Math.abs(p);
            }

            if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
            if ("top" === t || "left" === t) return 0;
            if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
            if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));

            if ("first" === t || "last" === t) {
              var m = l.find(":" + t);
              return "x" === o ? ae(m)[1] : ae(m)[0];
            }

            return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0]));
        }
      }
    },
        N = function N(t) {
      function o() {
        return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function () {
          return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function () {
            n(this);
          }));
        }, c.advanced.autoUpdateTimeout));
      }

      function n(t) {
        function o(e, t) {
          return function () {
            return t.apply(e, arguments);
          };
        }

        function a() {
          this.onload = null, e(t).addClass(d[2]), r(2);
        }

        if (e(t).hasClass(d[2])) return void r();
        var n = new Image();
        n.onload = o(n, a), n.src = t.src;
      }

      function i() {
        c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
        var e = 0,
            t = f.find(c.advanced.updateOnSelectorChange);
        return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
          e += this.offsetHeight + this.offsetWidth;
        }), e;
      }

      function r(e) {
        clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
      }

      var l = e(this),
          s = l.data(a),
          c = s.opt,
          f = e("#mCSB_" + s.idx + "_container");
      return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o();
    },
        V = function V(e, t, o) {
      return Math.round(e / t) * t - o;
    },
        Q = function Q(t) {
      var o = t.data(a),
          n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
      n.each(function () {
        Z.call(this);
      });
    },
        G = function G(t, o, n) {
      function i(e) {
        return s && c.callbacks[e] && "function" == typeof c.callbacks[e];
      }

      function r() {
        return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w];
      }

      function l() {
        var e = [h[0].offsetTop, h[0].offsetLeft],
            o = [x[0].offsetTop, x[0].offsetLeft],
            a = [h.outerHeight(!1), h.outerWidth(!1)],
            i = [f.height(), f.width()];
        t[0].mcs = {
          content: h,
          top: e[0],
          left: e[1],
          draggerTop: o[0],
          draggerLeft: o[1],
          topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
          leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
          direction: n.dir
        };
      }

      var s = t.data(a),
          c = s.opt,
          d = {
        trigger: "internal",
        dir: "y",
        scrollEasing: "mcsEaseOut",
        drag: !1,
        dur: c.scrollInertia,
        overwrite: "all",
        callbacks: !0,
        onStart: !0,
        onUpdate: !0,
        onComplete: !0
      },
          n = e.extend(d, n),
          u = [n.dur, n.drag ? 0 : n.dur],
          f = e("#mCSB_" + s.idx),
          h = e("#mCSB_" + s.idx + "_container"),
          m = h.parent(),
          p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];

      if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
        if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
          var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
          o = V(o, v, c.snapOffset);
        }

        switch (n.dir) {
          case "x":
            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                _ = "left",
                w = h[0].offsetLeft,
                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                y = p[1],
                B = g[1],
                T = y > 0 ? y / s.scrollRatio.x : 0,
                k = B > 0 ? B / s.scrollRatio.x : 0;
            break;

          case "y":
            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                _ = "top",
                w = h[0].offsetTop,
                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                y = p[0],
                B = g[0],
                T = y > 0 ? y / s.scrollRatio.y : 0,
                k = B > 0 ? B / s.scrollRatio.y : 0;
        }

        b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
          onStart: function onStart() {
            n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r());
          },
          onUpdate: function onUpdate() {
            n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]));
          },
          onComplete: function onComplete() {
            if (n.callbacks && n.onComplete) {
              "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
              var e = h[0].idleTimer || 0;
              h[0].onCompleteTimeout = setTimeout(function () {
                i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide");
              }, e);
            }
          }
        });
      }
    },
        J = function J(e, t, o, a, n, i, r) {
      function l() {
        S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call());
      }

      function s() {
        a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call();
      }

      function c() {
        f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
          return s(), setTimeout(e, .01);
        }, S.id = h(l);
      }

      function d() {
        null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null);
      }

      function u(e, t, o, a, n) {
        switch (n) {
          case "linear":
          case "mcsLinear":
            return o * e / a + t;

          case "mcsLinearOut":
            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;

          case "easeInOutSmooth":
            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);

          case "easeInOutStrong":
            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);

          case "easeInOut":
          case "mcsEaseInOut":
            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);

          case "easeOutSmooth":
            return e /= a, e--, -o * (e * e * e * e - 1) + t;

          case "easeOutStrong":
            return o * (-Math.pow(2, -10 * e / a) + 1) + t;

          case "easeOut":
          case "mcsEaseOut":
          default:
            var i = (e /= a) * e,
                r = i * e;
            return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e);
        }
      }

      e._mTween || (e._mTween = {
        top: {},
        left: {}
      });

      var f,
          h,
          r = r || {},
          m = r.onStart || function () {},
          p = r.onUpdate || function () {},
          g = r.onComplete || function () {},
          v = K(),
          x = 0,
          _ = e.offsetTop,
          w = e.style,
          S = e._mTween[t];

      "left" === t && (_ = e.offsetLeft);
      var b = o - _;
      S.stop = 0, "none" !== i && d(), c();
    },
        K = function K() {
      return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
    },
        Z = function Z() {
      var e = this;
      e._mTween || (e._mTween = {
        top: {},
        left: {}
      });

      for (var t = ["top", "left"], o = 0; o < t.length; o++) {
        var a = t[o];
        e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1);
      }
    },
        $ = function $(e, t) {
      try {
        delete e[t];
      } catch (o) {
        e[t] = null;
      }
    },
        ee = function ee(e) {
      return !(e.which && 1 !== e.which);
    },
        te = function te(e) {
      var t = e.originalEvent.pointerType;
      return !(t && "touch" !== t && 2 !== t);
    },
        oe = function oe(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
        ae = function ae(e) {
      var t = e.parents(".mCSB_container");
      return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
    },
        ne = function ne() {
      function e() {
        var e = ["webkit", "moz", "ms", "o"];
        if ("hidden" in document) return "hidden";

        for (var t = 0; t < e.length; t++) {
          if (e[t] + "Hidden" in document) return e[t] + "Hidden";
        }

        return null;
      }

      var t = e();
      return t ? document[t] : !1;
    };

    e.fn[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != _typeof(t) && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments);
    }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
      e(n)[o](), e.extend(e.expr[":"], {
        mcsInView: e.expr[":"].mcsInView || function (t) {
          var o,
              a,
              n = e(t),
              i = n.parents(".mCSB_container");
          if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1);
        },
        mcsInSight: e.expr[":"].mcsInSight || function (t, o, a) {
          var n,
              i,
              r,
              l,
              s = e(t),
              c = s.parents(".mCSB_container"),
              d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
          if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0;
        },
        mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
          var o = e(t).data(a);
          if (o) return o.overflowed[0] || o.overflowed[1];
        }
      });
    });
  });
});

/***/ }),

/***/ "./resources/template/assets/js/modernizr/modernizr.js":
/*!*************************************************************!*\
  !*** ./resources/template/assets/js/modernizr/modernizr.js ***!
  \*************************************************************/
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */
window.Modernizr = function (window, document, undefined) {
  var version = '2.8.3',
      Modernizr = {},

  /*>>cssclasses*/
  // option for enabling the HTML classes to be added
  enableClasses = true,

  /*>>cssclasses*/
  docElement = document.documentElement,

  /**
   * Create our "modernizr" element that we do most feature tests on.
   */
  mod = 'modernizr',
      modElem = document.createElement(mod),
      mStyle = modElem.style,

  /**
   * Create the input element for various Web Forms feature tests.
   */
  inputElem
  /*>>inputelem*/
  = document.createElement('input')
  /*>>inputelem*/
  ,

  /*>>smile*/
  smile = ':)',

  /*>>smile*/
  toString = {}.toString,
      // TODO :: make the prefixes more granular

  /*>>prefixes*/
  // List of property values to set for css tests. See ticket #21
  prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),

  /*>>prefixes*/

  /*>>domprefixes*/
  // Following spec is to expose vendor-specific style properties as:
  //   elem.style.WebkitBorderRadius
  // and the following would be incorrect:
  //   elem.style.webkitBorderRadius
  // Webkit ghosts their properties in lowercase but Opera & Moz do not.
  // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
  //   erik.eae.net/archives/2008/03/10/21.48.10/
  // More here: github.com/Modernizr/Modernizr/issues/issue/21
  omPrefixes = 'Webkit Moz O ms',
      cssomPrefixes = omPrefixes.split(' '),
      domPrefixes = omPrefixes.toLowerCase().split(' '),

  /*>>domprefixes*/

  /*>>ns*/
  ns = {
    'svg': 'http://www.w3.org/2000/svg'
  },

  /*>>ns*/
  tests = {},
      inputs = {},
      attrs = {},
      classes = [],
      slice = classes.slice,
      featureName,
      // used in testing loop

  /*>>teststyles*/
  // Inject element with style element and some CSS rules
  injectElementWithStyles = function injectElementWithStyles(rule, callback, nodes, testnames) {
    var style,
        ret,
        node,
        docOverflow,
        div = document.createElement('div'),
        // After page load injecting a fake body doesn't work so check if body exists
    body = document.body,
        // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
    fakeBody = body || document.createElement('body');

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = document.createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    } // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
    // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
    // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
    // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
    // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277


    style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
    div.id = mod; // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270

    (body ? div : fakeBody).innerHTML += style;
    fakeBody.appendChild(div);

    if (!body) {
      //avoid crashing IE8, if background image is used
      fakeBody.style.background = ''; //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible

      fakeBody.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(fakeBody);
    }

    ret = callback(div, rule); // If this is done after page load we don't want to remove the body so check if body exists

    if (!body) {
      fakeBody.parentNode.removeChild(fakeBody);
      docElement.style.overflow = docOverflow;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;
  },

  /*>>teststyles*/

  /*>>mq*/
  // adapted from matchMedia polyfill
  // by Scott Jehl and Paul Irish
  // gist.github.com/786768
  testMediaQuery = function testMediaQuery(mq) {
    var matchMedia = window.matchMedia || window.msMatchMedia;

    if (matchMedia) {
      return matchMedia(mq) && matchMedia(mq).matches || false;
    }

    var bool;
    injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function (node) {
      bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)['position'] == 'absolute';
    });
    return bool;
  },

  /*>>mq*/

  /*>>hasevent*/
  //
  // isEventSupported determines if a given element supports the given event
  // kangax.github.com/iseventsupported/
  //
  // The following results are known incorrects:
  //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
  //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
  //   ...
  isEventSupported = function () {
    var TAGNAMES = {
      'select': 'input',
      'change': 'input',
      'submit': 'form',
      'reset': 'form',
      'error': 'img',
      'load': 'img',
      'abort': 'img'
    };

    function isEventSupported(eventName, element) {
      element = element || document.createElement(TAGNAMES[eventName] || 'div');
      eventName = 'on' + eventName; // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those

      var isSupported = (eventName in element);

      if (!isSupported) {
        // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
        if (!element.setAttribute) {
          element = document.createElement('div');
        }

        if (element.setAttribute && element.removeAttribute) {
          element.setAttribute(eventName, '');
          isSupported = is(element[eventName], 'function'); // If property was created, "remove it" (by setting value to `undefined`)

          if (!is(element[eventName], 'undefined')) {
            element[eventName] = undefined;
          }

          element.removeAttribute(eventName);
        }
      }

      element = null;
      return isSupported;
    }

    return isEventSupported;
  }(),

  /*>>hasevent*/
  // TODO :: Add flag for hasownprop ? didn't last time
  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  _hasOwnProperty = {}.hasOwnProperty,
      hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function hasOwnProp(object, property) {
      return _hasOwnProperty.call(object, property);
    };
  } else {
    hasOwnProp = function hasOwnProp(object, property) {
      /* yes, this can give false positives/negatives, but most of the time we don't care about those */
      return property in object && is(object.constructor.prototype[property], 'undefined');
    };
  } // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
  // es5.github.com/#x15.3.4.5


  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {
      var target = this;

      if (typeof target != "function") {
        throw new TypeError();
      }

      var args = slice.call(arguments, 1),
          bound = function bound() {
        if (this instanceof bound) {
          var F = function F() {};

          F.prototype = target.prototype;
          var self = new F();
          var result = target.apply(self, args.concat(slice.call(arguments)));

          if (Object(result) === result) {
            return result;
          }

          return self;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };

      return bound;
    };
  }
  /**
   * setCss applies given styles to the Modernizr DOM node.
   */


  function setCss(str) {
    mStyle.cssText = str;
  }
  /**
   * setCssAll extrapolates all vendor-specific css strings.
   */


  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''));
  }
  /**
   * is returns a boolean for if typeof obj is exactly type.
   */


  function is(obj, type) {
    return _typeof(obj) === type;
  }
  /**
   * contains returns a boolean for if substr is found within str.
   */


  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }
  /*>>testprop*/
  // testProps is a generic CSS / DOM property test.
  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.
  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.
  // Because the testing of the CSS property names (with "-", as
  // opposed to the camelCase DOM properties) is non-portable and
  // non-standard but works in WebKit and IE (but not Gecko or Opera),
  // we explicitly reject properties with dashes so that authors
  // developing in WebKit or IE first don't end up with
  // browser-specific content by accident.


  function testProps(props, prefixed) {
    for (var i in props) {
      var prop = props[i];

      if (!contains(prop, "-") && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }

    return false;
  }
  /*>>testprop*/
  // TODO :: add testDOMProps

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   */


  function testDOMProps(props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];

      if (item !== undefined) {
        // return the property name as a string
        if (elem === false) return props[i]; // let's bind a function

        if (is(item, 'function')) {
          // default to autobind unless override
          return item.bind(elem || obj);
        } // return the unbound function or obj or value


        return item;
      }
    }

    return false;
  }
  /*>>testallprops*/

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   *   We specify literally ALL possible (known and/or likely) properties on
   *   the element including the non-vendor prefixed one, for forward-
   *   compatibility.
   */


  function testPropsAll(prop, prefixed, elem) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
        props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' '); // did they call .prefixed('boxSizing') or are we just testing a prop?

    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed); // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }
  /*>>testallprops*/

  /**
   * Tests
   * -----
   */
  // The *new* flexbox
  // dev.w3.org/csswg/css3-flexbox


  tests['flexbox'] = function () {
    return testPropsAll('flexWrap');
  }; // The *old* flexbox
  // www.w3.org/TR/2009/WD-css3-flexbox-20090723/


  tests['flexboxlegacy'] = function () {
    return testPropsAll('boxDirection');
  }; // On the S60 and BB Storm, getContext exists, but always returns undefined
  // so we actually have to call getContext() to verify
  // github.com/Modernizr/Modernizr/issues/issue/97/


  tests['canvas'] = function () {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  };

  tests['canvastext'] = function () {
    return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
  }; // webk.it/70117 is tracking a legit WebGL feature detect proposal
  // We do a soft detect which may false positive in order to avoid
  // an expensive context creation: bugzil.la/732441


  tests['webgl'] = function () {
    return !!window.WebGLRenderingContext;
  };
  /*
   * The Modernizr.touch test only indicates if the browser supports
   *    touch events, which does not necessarily reflect a touchscreen
   *    device, as evidenced by tablets running Windows 7 or, alas,
   *    the Palm Pre / WebOS (touch) phones.
   *
   * Additionally, Chrome (desktop) used to lie about its support on this,
   *    but that has since been rectified: crbug.com/36415
   *
   * We also test for Firefox 4 Multitouch Support.
   *
   * For more info, see: modernizr.github.com/Modernizr/touch.html
   */


  tests['touch'] = function () {
    var bool;

    if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else {
      injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (node) {
        bool = node.offsetTop === 9;
      });
    }

    return bool;
  }; // geolocation is often considered a trivial feature detect...
  // Turns out, it's quite tricky to get right:
  //
  // Using !!navigator.geolocation does two things we don't want. It:
  //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
  //   2. Disables page caching in WebKit: webk.it/43956
  //
  // Meanwhile, in Firefox < 8, an about:config setting could expose
  // a false positive that would throw an exception: bugzil.la/688158


  tests['geolocation'] = function () {
    return 'geolocation' in navigator;
  };

  tests['postmessage'] = function () {
    return !!window.postMessage;
  }; // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.


  tests['websqldatabase'] = function () {
    return !!window.openDatabase;
  }; // Vendors had inconsistent prefixing with the experimental Indexed DB:
  // - Webkit's implementation is accessible through webkitIndexedDB
  // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
  // For speed, we don't test the legacy (and beta-only) indexedDB


  tests['indexedDB'] = function () {
    return !!testPropsAll("indexedDB", window);
  }; // documentMode logic from YUI to filter out IE8 Compat Mode
  //   which false positives.


  tests['hashchange'] = function () {
    return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
  }; // Per 1.6:
  // This used to be Modernizr.historymanagement but the longer
  // name has been deprecated in favor of a shorter and property-matching one.
  // The old API is still available in 1.6, but as of 2.0 will throw a warning,
  // and in the first release thereafter disappear entirely.


  tests['history'] = function () {
    return !!(window.history && history.pushState);
  };

  tests['draganddrop'] = function () {
    var div = document.createElement('div');
    return 'draggable' in div || 'ondragstart' in div && 'ondrop' in div;
  }; // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
  // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
  // FF10 still uses prefixes, so check for it until then.
  // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/


  tests['websockets'] = function () {
    return 'WebSocket' in window || 'MozWebSocket' in window;
  }; // css-tricks.com/rgba-browser-support/


  tests['rgba'] = function () {
    // Set an rgba() color and check the returned value
    setCss('background-color:rgba(150,255,150,.5)');
    return contains(mStyle.backgroundColor, 'rgba');
  };

  tests['hsla'] = function () {
    // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
    //   except IE9 who retains it as hsla
    setCss('background-color:hsla(120,40%,100%,.5)');
    return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
  };

  tests['multiplebgs'] = function () {
    // Setting multiple images AND a color on the background shorthand property
    //  and then querying the style.background property value for the number of
    //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!
    setCss('background:url(https://),url(https://),red url(https://)'); // If the UA supports multiple backgrounds, there should be three occurrences
    //   of the string "url(" in the return value for elemStyle.background

    return /(url\s*\(.*?){3}/.test(mStyle.background);
  }; // this will false positive in Opera Mini
  //   github.com/Modernizr/Modernizr/issues/396


  tests['backgroundsize'] = function () {
    return testPropsAll('backgroundSize');
  };

  tests['borderimage'] = function () {
    return testPropsAll('borderImage');
  }; // Super comprehensive table about all the unique implementations of
  // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance


  tests['borderradius'] = function () {
    return testPropsAll('borderRadius');
  }; // WebOS unfortunately false positives on this test.


  tests['boxshadow'] = function () {
    return testPropsAll('boxShadow');
  }; // FF3.0 will false positive on this test


  tests['textshadow'] = function () {
    return document.createElement('div').style.textShadow === '';
  };

  tests['opacity'] = function () {
    // Browsers that actually have CSS Opacity implemented have done so
    //  according to spec, which means their return values are within the
    //  range of [0.0,1.0] - including the leading zero.
    setCssAll('opacity:.55'); // The non-literal . in this regex is intentional:
    //   German Chrome returns this value as 0,55
    // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632

    return /^0.55$/.test(mStyle.opacity);
  }; // Note, Android < 4 will pass this test, but can only animate
  //   a single property at a time
  //   goo.gl/v3V4Gp


  tests['cssanimations'] = function () {
    return testPropsAll('animationName');
  };

  tests['csscolumns'] = function () {
    return testPropsAll('columnCount');
  };

  tests['cssgradients'] = function () {
    /**
     * For CSS Megas syntax, please see:
     * webkit.org/blog/175/introducing-css-gradients/
     * developer.mozilla.org/en/CSS/-moz-linear-gradient
     * developer.mozilla.org/en/CSS/-moz-radial-gradient
     * dev.w3.org/csswg/css3-images/#gradients-
     */
    var str1 = 'background-image:',
        str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
        str3 = 'linear-gradient(left top,#9f9, white);';
    setCss( // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
    (str1 + '-webkit- '.split(' ').join(str2 + str1) + // standard syntax             // trailing 'background-image:'
    prefixes.join(str3 + str1)).slice(0, -str1.length));
    return contains(mStyle.backgroundImage, 'gradient');
  };

  tests['cssreflections'] = function () {
    return testPropsAll('boxReflect');
  };

  tests['csstransforms'] = function () {
    return !!testPropsAll('transform');
  };

  tests['csstransforms3d'] = function () {
    var ret = !!testPropsAll('perspective'); // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:

    if (ret && 'webkitPerspective' in docElement.style) {
      // Webkit allows this media query to succeed only if the feature is enabled.
      // `@media (transform-3d),(-webkit-transform-3d){ ... }`
      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
        ret = node.offsetLeft === 9 && node.offsetHeight === 3;
      });
    }

    return ret;
  };

  tests['csstransitions'] = function () {
    return testPropsAll('transition');
  };
  /*>>fontface*/
  // @font-face detection routine by Diego Perini
  // javascript.nwbox.com/CSSSupport/
  // false positives:
  //   WebOS github.com/Modernizr/Modernizr/issues/342
  //   WP7   github.com/Modernizr/Modernizr/issues/538


  tests['fontface'] = function () {
    var bool;
    injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
      var style = document.getElementById('smodernizr'),
          sheet = style.sheet || style.styleSheet,
          cssText = sheet ? sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '' : '';
      bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
    });
    return bool;
  };
  /*>>fontface*/
  // CSS generated content detection


  tests['generatedcontent'] = function () {
    var bool;
    injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function (node) {
      bool = node.offsetHeight >= 3;
    });
    return bool;
  }; // These tests evaluate support of the video/audio elements, as well as
  // testing what types of content they support.
  //
  // We're using the Boolean constructor here, so that we can extend the value
  // e.g.  Modernizr.video     // true
  //       Modernizr.video.ogg // 'probably'
  //
  // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
  //                     thx to NielsLeenheer and zcorpan
  // Note: in some older browsers, "no" was a return value instead of empty string.
  //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
  //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5


  tests['video'] = function () {
    var elem = document.createElement('video'),
        bool = false; // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224

    try {
      if (bool = !!elem.canPlayType) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''); // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546

        bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
        bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
      }
    } catch (e) {}

    return bool;
  };

  tests['audio'] = function () {
    var elem = document.createElement('audio'),
        bool = false;

    try {
      if (bool = !!elem.canPlayType) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
        bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, ''); // Mimetypes accepted:
        //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
        //   bit.ly/iphoneoscodecs

        bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
        bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
      }
    } catch (e) {}

    return bool;
  }; // In FF4, if disabled, window.localStorage should === null.
  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window) && ` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled
  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.
  // Because we are forced to try/catch this, we'll go aggressive.
  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files


  tests['localstorage'] = function () {
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };

  tests['sessionstorage'] = function () {
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };

  tests['webworkers'] = function () {
    return !!window.Worker;
  };

  tests['applicationcache'] = function () {
    return !!window.applicationCache;
  }; // Thanks to Erik Dahlstrom


  tests['svg'] = function () {
    return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
  }; // specifically for SVG inline in HTML, not within XHTML
  // test page: paulirish.com/demo/inline-svg


  tests['inlinesvg'] = function () {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
  }; // SVG SMIL animation


  tests['smil'] = function () {
    return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
  }; // This test is only for clip paths in SVG proper, not clip paths on HTML content
  // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg
  // However read the comments to dig into applying SVG clippaths to HTML content here:
  //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491


  tests['svgclippaths'] = function () {
    return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
  };
  /*>>webforms*/
  // input features and input types go directly onto the ret object, bypassing the tests loop.
  // Hold this guy to execute in a moment.


  function webforms() {
    /*>>input*/
    // Run through HTML5's new input attributes to see if the UA understands any.
    // We're using f which is the <input> element created early on
    // Mike Taylr has created a comprehensive resource for testing these attributes
    //   when applied to all input types:
    //   miketaylr.com/code/input-type-attr.html
    // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
    // Only input placeholder is tested while textarea's placeholder is not.
    // Currently Safari 4 and Opera 11 have support only for the input placeholder
    // Both tests are available in feature-detects/forms-placeholder.js
    Modernizr['input'] = function (props) {
      for (var i = 0, len = props.length; i < len; i++) {
        attrs[props[i]] = !!(props[i] in inputElem);
      }

      if (attrs.list) {
        // safari false positive's on datalist: webk.it/74252
        // see also github.com/Modernizr/Modernizr/issues/146
        attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
      }

      return attrs;
    }('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
    /*>>input*/

    /*>>inputtypes*/
    // Run through HTML5's new input types to see if the UA understands any.
    //   This is put behind the tests runloop because it doesn't return a
    //   true/false like all the other tests; instead, it returns an object
    //   containing each input type with its corresponding true/false value
    // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/


    Modernizr['inputtypes'] = function (props) {
      for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
        inputElem.setAttribute('type', inputElemType = props[i]);
        bool = inputElem.type !== 'text'; // We first check to see if the type we give it sticks..
        // If the type does, we feed it a textual value, which shouldn't be valid.
        // If the value doesn't stick, we know there's input sanitization which infers a custom UI

        if (bool) {
          inputElem.value = smile;
          inputElem.style.cssText = 'position:absolute;visibility:hidden;';

          if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
            docElement.appendChild(inputElem);
            defaultView = document.defaultView; // Safari 2-4 allows the smiley as a value, despite making a slider

            bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && // Mobile android web browser has false positive, so must
            // check the height to see if the widget is actually there.
            inputElem.offsetHeight !== 0;
            docElement.removeChild(inputElem);
          } else if (/^(search|tel)$/.test(inputElemType)) {// Spec doesn't define any special parsing or detectable UI
            //   behaviors so we pass these through as true
            // Interestingly, opera fails the earlier test, so it doesn't
            //  even make it here.
          } else if (/^(url|email)$/.test(inputElemType)) {
            // Real url and email support comes with prebaked validation.
            bool = inputElem.checkValidity && inputElem.checkValidity() === false;
          } else {
            // If the upgraded input compontent rejects the :) text, we got a winner
            bool = inputElem.value != smile;
          }
        }

        inputs[props[i]] = !!bool;
      }

      return inputs;
    }('search tel url email datetime date month week time datetime-local number range color'.split(' '));
    /*>>inputtypes*/

  }
  /*>>webforms*/
  // End of test definitions
  // -----------------------
  // Run through all tests and detect their support in the current UA.
  // todo: hypothetically we could be doing an array of tests and use a basic loop here.


  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      // run the test, throw the return value into the Modernizr,
      //   then based on that boolean, define an appropriate className
      //   and push it into an array of classes we'll join later.
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();
      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }
  /*>>webforms*/
  // input tests need to run.


  Modernizr.input || webforms();
  /*>>webforms*/

  /**
   * addTest allows the user to define their own feature tests
   * the result will be added onto the Modernizr object,
   * as well as an appropriate className set on the html element
   *
   * @param feature - String naming the feature
   * @param test - Function returning true if feature is supported, false if not
   */

  Modernizr.addTest = function (feature, test) {
    if (_typeof(feature) == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {
      feature = feature.toLowerCase();

      if (Modernizr[feature] !== undefined) {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      if (typeof enableClasses !== "undefined" && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }

      Modernizr[feature] = test;
    }

    return Modernizr; // allow chaining.
  }; // Reset modElem.cssText to nothing to reduce memory footprint.


  setCss('');
  modElem = inputElem = null;
  /*>>shiv*/

  /**
   * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
   */

  ;

  (function (window, document) {
    /*jshint evil:true */

    /** version */
    var version = '3.7.0';
    /** Preset options */

    var options = window.html5 || {};
    /** Used to skip problem elements */

    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    /** Not all elements can be cloned in IE **/

    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    /** Detect whether the browser supports default html5 styles */

    var supportsHtml5Styles;
    /** Name of the expando, to work with multiple documents or to re-shiv one document */

    var expando = '_html5shiv';
    /** The id for the the documents expando */

    var expanID = 0;
    /** Cached data for each document */

    var expandoData = {};
    /** Detect whether the browser supports unknown elements */

    var supportsUnknownElements;

    (function () {
      try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>'; //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles

        supportsHtml5Styles = 'hidden' in a;

        supportsUnknownElements = a.childNodes.length == 1 || function () {
          // assign a false positive if unable to shiv
          document.createElement('a');
          var frag = document.createDocumentFragment();
          return typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined';
        }();
      } catch (e) {
        // assign a false positive if detection fails => unable to shiv
        supportsHtml5Styles = true;
        supportsUnknownElements = true;
      }
    })();
    /*--------------------------------------------------------------------------*/

    /**
     * Creates a style sheet with the given CSS text and adds it to the document.
     * @private
     * @param {Document} ownerDocument The document.
     * @param {String} cssText The CSS text.
     * @returns {StyleSheet} The style element.
     */


    function addStyleSheet(ownerDocument, cssText) {
      var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
      p.innerHTML = 'x<style>' + cssText + '</style>';
      return parent.insertBefore(p.lastChild, parent.firstChild);
    }
    /**
     * Returns the value of `html5.elements` as an array.
     * @private
     * @returns {Array} An array of shived element node names.
     */


    function getElements() {
      var elements = html5.elements;
      return typeof elements == 'string' ? elements.split(' ') : elements;
    }
    /**
     * Returns the data associated to the given document
     * @private
     * @param {Document} ownerDocument The document.
     * @returns {Object} An object of data.
     */


    function getExpandoData(ownerDocument) {
      var data = expandoData[ownerDocument[expando]];

      if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
      }

      return data;
    }
    /**
     * returns a shived element for the given nodeName and document
     * @memberOf html5
     * @param {String} nodeName name of the element
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived element.
     */


    function createElement(nodeName, ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }

      if (supportsUnknownElements) {
        return ownerDocument.createElement(nodeName);
      }

      if (!data) {
        data = getExpandoData(ownerDocument);
      }

      var node;

      if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
      } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
      } else {
        node = data.createElem(nodeName);
      } // Avoid adding some elements to fragments in IE < 9 because
      // * Attributes like `name` or `type` cannot be set/changed once an element
      //   is inserted into a document/fragment
      // * Link elements with `src` attributes that are inaccessible, as with
      //   a 403 response, will cause the tab/window to crash
      // * Script elements appended to fragments will execute when their `src`
      //   or `text` property is set


      return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
    }
    /**
     * returns a shived DocumentFragment for the given document
     * @memberOf html5
     * @param {Document} ownerDocument The context document.
     * @returns {Object} The shived DocumentFragment.
     */


    function createDocumentFragment(ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }

      if (supportsUnknownElements) {
        return ownerDocument.createDocumentFragment();
      }

      data = data || getExpandoData(ownerDocument);
      var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;

      for (; i < l; i++) {
        clone.createElement(elems[i]);
      }

      return clone;
    }
    /**
     * Shivs the `createElement` and `createDocumentFragment` methods of the document.
     * @private
     * @param {Document|DocumentFragment} ownerDocument The document.
     * @param {Object} data of the document.
     */


    function shivMethods(ownerDocument, data) {
      if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
      }

      ownerDocument.createElement = function (nodeName) {
        //abort shiv
        if (!html5.shivMethods) {
          return data.createElem(nodeName);
        }

        return createElement(nodeName, ownerDocument, data);
      };

      ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' + // unroll the `createElement` calls
      getElements().join().replace(/[\w\-]+/g, function (nodeName) {
        data.createElem(nodeName);
        data.frag.createElement(nodeName);
        return 'c("' + nodeName + '")';
      }) + ');return n}')(html5, data.frag);
    }
    /*--------------------------------------------------------------------------*/

    /**
     * Shivs the given document.
     * @memberOf html5
     * @param {Document} ownerDocument The document to shiv.
     * @returns {Document} The shived document.
     */


    function shivDocument(ownerDocument) {
      if (!ownerDocument) {
        ownerDocument = document;
      }

      var data = getExpandoData(ownerDocument);

      if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
        data.hasCSS = !!addStyleSheet(ownerDocument, // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' + // hides non-rendered elements
        'template{display:none}');
      }

      if (!supportsUnknownElements) {
        shivMethods(ownerDocument, data);
      }

      return ownerDocument;
    }
    /*--------------------------------------------------------------------------*/

    /**
     * The `html5` object is exposed so that more elements can be shived and
     * existing shiving can be detected on iframes.
     * @type Object
     * @example
     *
     * // options can be changed before the script is included
     * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
     */


    var html5 = {
      /**
       * An array or space separated string of node names of the elements to shiv.
       * @memberOf html5
       * @type Array|String
       */
      'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

      /**
       * current version of html5shiv
       */
      'version': version,

      /**
       * A flag to indicate that the HTML5 style sheet should be inserted.
       * @memberOf html5
       * @type Boolean
       */
      'shivCSS': options.shivCSS !== false,

      /**
       * Is equal to true if a browser supports creating unknown/HTML5 elements
       * @memberOf html5
       * @type boolean
       */
      'supportsUnknownElements': supportsUnknownElements,

      /**
       * A flag to indicate that the document's `createElement` and `createDocumentFragment`
       * methods should be overwritten.
       * @memberOf html5
       * @type Boolean
       */
      'shivMethods': options.shivMethods !== false,

      /**
       * A string to describe the type of `html5` object ("default" or "default print").
       * @memberOf html5
       * @type String
       */
      'type': 'default',
      // shivs the document according to the specified `html5` object options
      'shivDocument': shivDocument,
      //creates a shived element
      createElement: createElement,
      //creates a shived documentFragment
      createDocumentFragment: createDocumentFragment
    };
    /*--------------------------------------------------------------------------*/
    // expose html5

    window.html5 = html5; // shiv the document

    shivDocument(document);
  })(this, document);
  /*>>shiv*/
  // Assign private properties to the return object with prefix


  Modernizr._version = version; // expose these for the plugin API. Look in the source for how to join() them against your input

  /*>>prefixes*/

  Modernizr._prefixes = prefixes;
  /*>>prefixes*/

  /*>>domprefixes*/

  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;
  /*>>domprefixes*/

  /*>>mq*/
  // Modernizr.mq tests a given media query, live against the current state of the window
  // A few important notes:
  //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
  //   * A max-width or orientation query will be evaluated against the current state, which may change later.
  //   * You must specify values. Eg. If you are testing support for the min-width media query use:
  //       Modernizr.mq('(min-width:0)')
  // usage:
  // Modernizr.mq('only screen and (max-width:768)')

  Modernizr.mq = testMediaQuery;
  /*>>mq*/

  /*>>hasevent*/
  // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
  // Modernizr.hasEvent('gesturestart', elem)

  Modernizr.hasEvent = isEventSupported;
  /*>>hasevent*/

  /*>>testprop*/
  // Modernizr.testProp() investigates whether a given style property is recognized
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testProp('pointerEvents')

  Modernizr.testProp = function (prop) {
    return testProps([prop]);
  };
  /*>>testprop*/

  /*>>testallprops*/
  // Modernizr.testAllProps() investigates whether a given style property,
  //   or any of its vendor-prefixed variants, is recognized
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')


  Modernizr.testAllProps = testPropsAll;
  /*>>testallprops*/

  /*>>teststyles*/
  // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
  // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })

  Modernizr.testStyles = injectElementWithStyles;
  /*>>teststyles*/

  /*>>prefixed*/
  // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
  // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'
  // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
  // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
  //
  //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');
  // If you're trying to ascertain which transition end event to bind to, you might do something like...
  //
  //     var transEndEventNames = {
  //       'WebkitTransition' : 'webkitTransitionEnd',
  //       'MozTransition'    : 'transitionend',
  //       'OTransition'      : 'oTransitionEnd',
  //       'msTransition'     : 'MSTransitionEnd',
  //       'transition'       : 'transitionend'
  //     },
  //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

  Modernizr.prefixed = function (prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };
  /*>>prefixed*/

  /*>>cssclasses*/
  // Remove "no-js" class from <html> element, if it exists:


  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + ( // Add the new classes to the <html> element.
  enableClasses ? ' js ' + classes.join(' ') : '');
  /*>>cssclasses*/

  return Modernizr;
}(this, this.document);

/***/ }),

/***/ "./resources/template/assets/js/pcoded.min.js":
/*!****************************************************!*\
  !*** ./resources/template/assets/js/pcoded.min.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$.fn.pcodedmenu = function (settings) {
  var oid = this.attr("id"); // Pcoded Menu default settings:

  var defaults = {
    // Common option both for vertical nad horizontal
    themelayout: 'vertical',
    // value should be horizontal/vertical
    MenuTrigger: 'click',
    // value should be hover/click
    SubMenuTrigger: 'click',
    // value should be hover/click
    activeMenuClass: 'active',
    ThemeBackgroundPattern: 'pattern6',
    // Value should be
    HeaderBackground: 'theme4',
    // Value should be theme1/theme2/theme3/theme4/theme5/theme6/theme7/theme8/theme9
    LHeaderBackground: 'theme4',
    // Value should be theme1/theme2/theme3/theme4/theme5/theme6/theme7/theme8/theme9
    NavbarBackground: 'theme4',
    // Value should be theme1/theme2/theme3/theme4/theme5/theme6/theme7/theme8/theme9
    ActiveItemBackground: 'theme0',
    // Value should be theme1/theme2/theme3/theme4/theme5/theme6/theme7/theme8/theme9
    SubItemBackground: 'theme4',
    // Value should be theme1/theme2/theme3/theme4/theme5/theme6/theme7/theme8/theme9
    ActiveItemStyle: 'style0',
    ItemBorder: true,
    freamtype: 'theme1',
    ItemBorderStyle: 'solid',
    // value should be solid/dotted/dashed
    SubItemBorder: true,
    DropDownIconStyle: 'style1',
    // value should be style1,style2,style3
    FixedNavbarPosition: false,
    FixedHeaderPosition: false,
    // Horizontal Navigation option
    horizontalMenuplacement: 'top',
    // value should be top/bottom
    horizontalMenulayout: 'widebox',
    //value should be wide/box/widebox
    horizontalBrandItem: true,
    horizontalLeftNavItem: true,
    horizontalRightItem: false,
    horizontalSearchItem: false,
    horizontalBrandItemAlign: 'left',
    horizontalLeftNavItemAlign: 'right',
    horizontalRightItemAlign: 'right',
    horizontalsearchItemAlign: 'right',
    horizontalstickynavigation: false,
    horizontalNavigationView: 'view1',
    horizontalNavIsCentered: false,
    horizontalNavigationMenuIcon: true,
    layouttype: 'light',
    // Vertical Navigation option
    verticalMenuplacement: 'left',
    // value should be left/right
    verticalMenulayout: 'wide',
    // value should be wide/box/widebox
    collapseVerticalLeftHeader: true,
    VerticalSubMenuItemIconStyle: 'style6',
    // value should be style1,style2,style3
    VerticalNavigationView: 'view1',
    verticalMenueffect: {
      desktop: "shrink",
      tablet: "push",
      phone: "overlay"
    },
    defaultVerticalMenu: {
      desktop: "expanded",
      // value should be offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
      tablet: "collapsed",
      // value should be offcanvas/collapsed/expanded/compact
      phone: "offcanvas" // value should be offcanvas/collapsed/expanded/compact

    },
    onToggleVerticalMenu: {
      desktop: "collapsed",
      // value should be offcanvas/collapsed/expanded/compact
      tablet: "expanded",
      // value should be offcanvas/collapsed/expanded/compact
      phone: "expanded" // value should be offcanvas/collapsed/expanded/compact

    }
  };
  var settings = $.extend({}, defaults, settings);
  var PcodedMenu = {
    PcodedMenuInit: function PcodedMenuInit() {
      PcodedMenu.Handlethemelayout();
      PcodedMenu.HandleverticalMenuplacement();
      PcodedMenu.HandlehorizontalMenuplacement();
      PcodedMenu.HandleMenulayout();
      PcodedMenu.HandleDeviceType();
      PcodedMenu.Handlecomponetheight();
      PcodedMenu.HandleMenuOnClick();
      PcodedMenu.HandleMenuTrigger();
      PcodedMenu.HandleSubMenuTrigger();
      PcodedMenu.HandleActiveItem();
      PcodedMenu.HandleOffcanvasMenu();
      PcodedMenu.HandleVerticalLeftHeader();
      PcodedMenu.HandleThemeBackground();
      PcodedMenu.HandleActiveItemStyle();
      PcodedMenu.HandleItemBorder();
      PcodedMenu.HandleBorderStyle();
      PcodedMenu.HandleSubItemBorder();
      PcodedMenu.HandleDropDownIconStyle();
      PcodedMenu.HandleOptionSelectorPanel();
      PcodedMenu.HandleNavbarPosition();
      PcodedMenu.HandleVerticalSubMenuItemIconStyle();
      PcodedMenu.HandleVerticalNavigationView();
      PcodedMenu.HandleHorizontalItemIsCentered();
      PcodedMenu.HandleHorizontalItemAlignment();
      PcodedMenu.HandleSubMenuOffset();
      PcodedMenu.HandleHorizontalStickyNavigation();
      PcodedMenu.HandleDocumentClickEvent();
      PcodedMenu.HandleVerticalScrollbar();
      PcodedMenu.HandleHorizontalMobileMenuToggle();
      PcodedMenu.horizontalNavigationMenuIcon();
      PcodedMenu.verticalNavigationSearchBar();
      PcodedMenu.safariBrowsercompatibility();
      PcodedMenu.Handlemenutype();
      PcodedMenu.Handlelayoutvartype();
    },
    safariBrowsercompatibility: function safariBrowsercompatibility() {
      is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
      is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
      is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
      is_safari = navigator.userAgent.indexOf("Safari") > -1;
      is_opera = navigator.userAgent.indexOf("Presto") > -1;
      is_mac = navigator.userAgent.indexOf('Mac OS') != -1;
      is_windows = !is_mac;

      if (is_chrome && is_safari) {
        is_safari = false;
      }

      if (is_safari || is_windows) {}
    },
    verticalNavigationSearchBar: function verticalNavigationSearchBar() {
      if (settings.themelayout === "vertical") {
        $('.searchbar-toggle').on('click', function () {
          $(this).parent('.pcoded-search').toggleClass('open');
        });
      }
    },
    horizontalNavigationMenuIcon: function horizontalNavigationMenuIcon() {
      if (settings.themelayout === "horizontal") {
        switch (settings.horizontalNavigationMenuIcon) {
          case false:
            $('#' + oid + '.pcoded .pcoded-navbar .pcoded-item > li > a .pcoded-micon').hide();
            $('#' + oid + '.pcoded .pcoded-navbar .pcoded-item.pcoded-search-item > li > a .pcoded-micon').show();
            break;

          default:
        }
      }
    },
    HandleHorizontalMobileMenuToggle: function HandleHorizontalMobileMenuToggle() {
      if (settings.themelayout === "horizontal") {
        $('#mobile-collapse').on('click', function () {
          $('.pcoded-navbar').toggleClass('show-menu');
        });
      }
    },
    HandleVerticalScrollbar: function HandleVerticalScrollbar() {
      if (settings.themelayout === "vertical") {
        satnt = settings.defaultVerticalMenu.desktop;

        if (satnt === "expanded" || satnt === "compact") {
          mt = settings.MenuTrigger;

          if (mt === "click") {
            $(window).on("load", function () {
              $(".sidebar_toggle a").click(function (e) {
                e.preventDefault();
                var $this = $(this);
                rel = $this.attr("rel");
                el = $(".pcoded-navbar"); // if (el.hasClass("mCS_destroyed")) {
                //     el.mCustomScrollbar({
                //         axis:"y",
                //         setHeight:"calc(100% - 80px)",
                // 		autoHideScrollbar: false,
                // 		scrollInertia: 100,
                // 		theme:"minimal",
                //     });
                // } else {
                //     el.mCustomScrollbar("destroy");
                // }
              });
            });
          } // $(".main-menu").mCustomScrollbar({
          //     axis:"y",
          //     setHeight:"calc(100% - 80px)",
          // 	autoHideScrollbar: false,
          // 	scrollInertia: 100,
          // 	theme:"minimal",
          // });

        }
      }
    },
    HandleDocumentClickEvent: function HandleDocumentClickEvent() {
      function closeSubMenu() {
        $(document).on('click', function (evt) {
          var target = $(evt.target);
          var sdt = $('#' + oid).attr('pcoded-device-type');
          var vnt = $('#' + oid).attr('vertical-nav-type');
          var el = $('#' + oid + ' .pcoded-item li');

          if (!target.parents('.pcoded-item').length) {
            if (sdt != "phone") {
              if (vnt != "expanded") {
                el.removeClass('pcoded-trigger');
              }
            }
          }
        });
      }

      ;

      function closeLeftbarSearch() {
        $(document).on('click', function (evt) {
          var target = $(evt.target);
          var el = $('#' + oid + ' .pcoded-search');

          if (!target.parents('.pcoded-search').length) {
            el.removeClass('open');
          }
        });
      }

      ;
      closeSubMenu();
      closeLeftbarSearch();
    },
    HandleHorizontalStickyNavigation: function HandleHorizontalStickyNavigation() {
      switch (settings.horizontalstickynavigation) {
        case true:
          $(window).on('scroll', function () {
            var scrolltop = $(this).scrollTop();

            if (scrolltop >= 100) {
              $('.pcoded-navbar').addClass('stickybar');
              $('stickybar').fadeIn(3000);
            } else if (scrolltop <= 100) {
              $('.pcoded-navbar').removeClass('stickybar');
              $('.stickybar').fadeOut(3000);
            }
          });
          break;

        case false:
          $('.pcoded-navbar').removeClass('stickybar');
          break;

        default:
      }
    },
    HandleSubMenuOffset: function HandleSubMenuOffset() {
      switch (settings.themelayout) {
        case 'horizontal':
          var trigger = settings.SubMenuTrigger;

          if (trigger === "hover") {
            $("li.pcoded-hasmenu").on('mouseenter mouseleave', function (e) {
              if ($('.pcoded-submenu', this).length) {
                var elm = $('.pcoded-submenu:first', this);
                var off = elm.offset();
                var l = off.left;
                var w = elm.width();
                var docH = $(window).height();
                var docW = $(window).width();
                var isEntirelyVisible = l + w <= docW;

                if (!isEntirelyVisible) {
                  $(this).addClass('edge');
                } else {
                  $(this).removeClass('edge');
                }
              }
            });
          } else {
            $("li.pcoded-hasmenu").on('click', function (e) {
              e.preventDefault();

              if ($('.pcoded-submenu', this).length) {
                var elm = $('.pcoded-submenu:first', this);
                var off = elm.offset();
                var l = off.left;
                var w = elm.width();
                var docH = $(window).height();
                var docW = $(window).width();
                var isEntirelyVisible = l + w <= docW;

                if (!isEntirelyVisible) {
                  $(this).toggleClass('edge');
                }
              }
            });
          }

          break;

        default:
      }
    },
    HandleHorizontalItemIsCentered: function HandleHorizontalItemIsCentered() {
      if (settings.themelayout === "horizontal") {
        switch (settings.horizontalNavIsCentered) {
          case true:
            $('#' + oid + ' .pcoded-navbar').addClass("isCentered");
            break;

          case false:
            $('#' + oid + ' .pcoded-navbar').removeClass("isCentered");
            break;

          default:
        }
      }
    },
    HandleHorizontalItemAlignment: function HandleHorizontalItemAlignment() {
      var layout = settings.themelayout;

      if (layout === "horizontal") {
        var branditemalignment = function branditemalignment() {
          var elm = $('#' + oid + '.pcoded .pcoded-navbar .pcoded-brand');

          if (settings.horizontalBrandItem === true) {
            switch (settings.horizontalBrandItemAlign) {
              case 'left':
                elm.removeClass('pcoded-right-align');
                elm.addClass('pcoded-left-align');
                break;

              case 'right':
                elm.removeClass('pcoded-left-align');
                elm.addClass('pcoded-right-align');
                break;

              default:
            }
          } else {
            elm.hide();
          }
        };

        var leftitemalignment = function leftitemalignment() {
          var elm = $('#' + oid + '.pcoded .pcoded-navbar .pcoded-item.pcoded-left-item');

          if (settings.horizontalLeftNavItem === true) {
            switch (settings.horizontalLeftNavItemAlign) {
              case 'left':
                elm.removeClass('pcoded-right-align');
                elm.addClass('pcoded-left-align');
                break;

              case 'right':
                elm.removeClass('pcoded-left-align');
                elm.addClass('pcoded-right-align');
                break;

              default:
            }
          } else {
            elm.hide();
          }
        };

        var rightitemalignment = function rightitemalignment() {
          var elm = $('#' + oid + '.pcoded .pcoded-navbar .pcoded-item.pcoded-right-item');

          if (settings.horizontalRightItem === true) {
            switch (settings.horizontalRightItemAlign) {
              case 'left':
                elm.removeClass('pcoded-right-align');
                elm.addClass('pcoded-left-align');
                break;

              case 'right':
                elm.removeClass('pcoded-left-align');
                elm.addClass('pcoded-right-align');
                break;

              default:
            }
          } else {
            elm.hide();
          }
        };

        var searchitemalignment = function searchitemalignment() {
          var elm = $('#' + oid + '.pcoded .pcoded-navbar .pcoded-search-item');

          if (settings.horizontalSearchItem === true) {
            switch (settings.horizontalsearchItemAlign) {
              case 'left':
                elm.removeClass('pcoded-right-align');
                elm.addClass('pcoded-left-align');
                break;

              case 'right':
                elm.removeClass('pcoded-left-align');
                elm.addClass('pcoded-right-align');
                break;

              default:
            }
          } else {
            elm.hide();
          }
        };

        ;
        ;
        ;
        ;

        if (settings.horizontalNavIsCentered === false) {
          branditemalignment();
          leftitemalignment();
          rightitemalignment();
          searchitemalignment();
        }
      }
    },
    HandleVerticalNavigationView: function HandleVerticalNavigationView() {
      switch (settings.themelayout) {
        case 'vertical':
          var ev = settings.VerticalNavigationView;
          $('#' + oid + '.pcoded').attr("vnavigation-view", ev);
          break;

        case 'horizontal':
          var ev = settings.horizontalNavigationView;
          $('#' + oid + '.pcoded').attr("hnavigation-view", ev);
          break;

        default:
      }
    },
    HandleVerticalSubMenuItemIconStyle: function HandleVerticalSubMenuItemIconStyle() {
      switch (settings.themelayout) {
        case 'vertical':
          var ev = settings.VerticalSubMenuItemIconStyle;
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').attr("subitem-icon", ev);
          break;

        case 'horizontal':
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').attr("subitem-icon", ev);
          break;

        default:
      }
    },
    HandleNavbarPosition: function HandleNavbarPosition() {
      var navposition = settings.FixedNavbarPosition;
      var headerposition = settings.FixedHeaderPosition;
      var rheaderposition = settings.FixedRightHeaderPosition;

      switch (settings.themelayout) {
        case 'vertical':
          if (navposition == true) {
            $('#' + oid + ' .pcoded-navbar').attr("pcoded-navbar-position", 'fixed');
            $('#' + oid + ' .pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'fixed');
          } else {
            $('#' + oid + ' .pcoded-navbar').attr("pcoded-navbar-position", 'absolute');
            $('#' + oid + ' .pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'absolute');
          }

          if (headerposition == true) {
            $('#' + oid + ' .pcoded-header').attr("pcoded-header-position", 'fixed');
            $('#' + oid + ' .pcoded-main-container').css('margin-top', $(".pcoded-header").outerHeight());
          } else {
            $('#' + oid + ' .pcoded-header').attr("pcoded-header-position", 'relative');
            $('#' + oid + ' .pcoded-main-container').css('margin-top', '0px');
          }

          break;

        case 'horizontal':
          if (navposition == true) {
            $('#' + oid + ' .pcoded-navbar').attr("pcoded-navbar-position", 'fixed');
            $('#' + oid + ' .pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'fixed');
          } else {
            $('#' + oid + ' .pcoded-navbar').attr("pcoded-navbar-position", 'absolute');
            $('#' + oid + ' .pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'absolute');
          }

          if (headerposition == true) {
            $('#' + oid + ' .pcoded-header').attr("pcoded-header-position", 'fixed');
            $('#' + oid + ' .pcoded-main-container').css('margin-top', $(".pcoded-header").outerHeight());
          } else {
            $('#' + oid + ' .pcoded-header').attr("pcoded-header-position", 'relative');
            $('#' + oid + ' .pcoded-main-container').css('margin-top', '0px');
          }

          break;

        default:
      }
    },
    HandleOptionSelectorPanel: function HandleOptionSelectorPanel() {
      $('.selector-toggle > a').on("click", function () {
        //debugger;
        $('#styleSelector').toggleClass('open');
      });
    },
    HandleDropDownIconStyle: function HandleDropDownIconStyle() {
      var ev = settings.DropDownIconStyle;

      switch (settings.themelayout) {
        case 'vertical':
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').attr("dropdown-icon", ev);
          break;

        case 'horizontal':
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').attr("dropdown-icon", ev);
          break;

        default:
      }
    },
    HandleSubItemBorder: function HandleSubItemBorder() {
      switch (settings.SubItemBorder) {
        case true:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("subitem-border", "true");
          break;

        case false:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("subitem-border", "false");
          break;

        default:
      }
    },
    HandleBorderStyle: function HandleBorderStyle() {
      var ev = settings.ItemBorderStyle;

      switch (settings.ItemBorder) {
        case true:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("item-border-style", ev);
          break;

        case false:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("item-border-style", "");
          break;

        default:
      }
    },
    HandleItemBorder: function HandleItemBorder() {
      switch (settings.ItemBorder) {
        case true:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("item-border", "true");
          break;

        case false:
          $('#' + oid + ' .pcoded-navbar .pcoded-item').attr("item-border", "false");
          break;

        default:
      }
    },
    HandleActiveItemStyle: function HandleActiveItemStyle() {
      var ev = settings.ActiveItemStyle;

      if (ev != undefined && ev != "") {
        $('#' + oid + ' .pcoded-navbar').attr("active-item-style", ev);
      } else {
        $('#' + oid + ' .pcoded-navbar').attr("active-item-style", "style0");
      }
    },
    Handlemenutype: function Handlemenutype() {
      var ev = settings.menutype;
      var ef = settings.freamtype;
      var nimg = settings.NavbarImage;
      var img = settings.ActiveNavbarImage;

      if (ev != undefined && ev != "") {
        $('#' + oid).attr("nav-type", ev);
      } else {
        $('#' + oid).attr("nav-type", "st1");
      }

      if (ef != undefined && ef != "") {
        $('#' + oid).attr("fream-type", ef);
      } else {
        $('#' + oid).attr("fream-type", "theme1");
      }

      if (nimg != undefined && nimg != "") {
        $('#' + oid).attr("sidebar-img", nimg);
      } else {
        $('#' + oid).attr("sidebar-img", "false");
      }

      if (img != undefined && img != "") {
        $('#' + oid).attr("sidebar-img-type", img);
      } else {
        $('#' + oid).attr("sidebar-img-type", "img1");
      }
    },
    Handlelayoutvartype: function Handlelayoutvartype() {
      var ev = settings.layouttype;

      if (ev != undefined && ev != "") {
        $('#' + oid).attr("layout-type", ev);
      } else {
        $('#' + oid).attr("layout-type", "light");
      }
    },
    HandleThemeBackground: function HandleThemeBackground() {
      function themebackgroundpattern() {
        var ev = settings.ThemeBackgroundPattern;

        if (ev != undefined && ev != "") {
          $('body').attr("themebg-pattern", ev);
        } else {
          $('body').attr("themebg-pattern", "theme1");
        }
      }

      ;

      function setheadertheme() {
        var ev = settings.HeaderBackground;

        if (ev != undefined && ev != "") {
          $('#' + oid + ' .pcoded-header').attr("header-theme", ev);
        } else {
          $('#' + oid + ' .pcoded-header').attr("header-theme", "theme1");
        }
      }

      ;

      function setlheadertheme() {
        var ev = settings.LHeaderBackground;

        if (ev != undefined && ev != "") {
          // $('#' + oid + ' .pcoded-header .navbar-logo').attr("logo-theme", ev);
          $('#' + oid + ' .pcoded-navigation-label').attr("menu-title-theme", ev);
        } else {
          // $('#' + oid + ' .pcoded-header .navbar-logo').attr("logo-theme", "theme4");
          $('#' + oid + ' .pcoded-navigation-label').attr("menu-title-theme", "theme4");
        }
      }

      ;

      function setnavbartheme() {
        var ev = settings.NavbarBackground;

        if (ev != undefined && ev != "") {
          $('#' + oid + ' .pcoded-navbar').attr("navbar-theme", ev);
        } else {
          $('#' + oid + ' .pcoded-navbar').attr("navbar-theme", "theme1");
        }
      }

      ;

      function setactiveitemtheme() {
        var ev = settings.ActiveItemBackground;

        if (ev != undefined && ev != "") {
          $('#' + oid + ' .pcoded-navbar').attr("active-item-theme", ev);
        } else {
          $('#' + oid + ' .pcoded-navbar').attr("active-item-theme", "theme1");
        }
      }

      ;

      function setsubitemtheme() {
        var ev = settings.SubItemBackground;

        if (ev != undefined && ev != "") {
          $('#' + oid + ' .pcoded-navbar').attr("sub-item-theme", ev);
        } else {
          $('#' + oid + ' .pcoded-navbar').attr("sub-item-theme", "theme1");
        }
      }

      ;
      themebackgroundpattern();
      setheadertheme();
      setlheadertheme();
      setnavbartheme();
      setactiveitemtheme();
      setsubitemtheme();
    },
    HandleVerticalLeftHeader: function HandleVerticalLeftHeader() {
      if (settings.themelayout === "vertical") {
        switch (settings.collapseVerticalLeftHeader) {
          case true:
            $('#' + oid + ' .pcoded-header').addClass('iscollapsed');
            $('#' + oid + ' .pcoded-header').removeClass('nocollapsed');
            $('#' + oid + '.pcoded').addClass('iscollapsed');
            $('#' + oid + '.pcoded').removeClass('nocollapsed');
            /*  $('#'+oid + ' .pcoded-header.nocollapsed .pcoded-left-header').css('width', '');  */

            break;

          case false:
            $('#' + oid + ' .pcoded-header').removeClass('iscollapsed');
            $('#' + oid + ' .pcoded-header').addClass('nocollapsed');
            $('#' + oid + '.pcoded').removeClass('iscollapsed');
            $('#' + oid + '.pcoded').addClass('nocollapsed');
            /*  $('#'+oid + ' .pcoded-header.nocollapsed .pcoded-left-header').css('width', $(".pcoded-navbar").width());  */

            break;

          default:
        }
      } else {
        return false;
      }
    },
    HandleOffcanvasMenu: function HandleOffcanvasMenu() {
      if (settings.themelayout === "vertical") {
        var vnt = $('#' + oid).attr("vertical-nav-type");

        if (vnt == "offcanvas") {
          $('#' + oid).attr("vertical-layout", "wide");
        }
      }
    },
    HandleActiveItem: function HandleActiveItem() {
      /*switch(settings.activeMenuClass){
      	case  "active":
      		$('li:not("li.pcoded-hasmenu")').on( 'click', function () {
      			var str = $(this).closest('.pcoded-submenu').length;
      			if (str === 0){
      				$(this).closest('.pcoded-inner-navbar').find('li.active').removeClass('active');
      				$(this).addClass('active');
        			}else{
      				if($(this).hasClass('active')){
      					$(this).removeClass('active');
      				}else{
      					$(this).closest('.pcoded-inner-navbar').find('li.active').removeClass('active');
      					$(this).parents('.pcoded-hasmenu').addClass('active');
      					$(this).addClass('active');
      				}
      			}
      		});
      		break;
      	case  false:
      		$('.pcoded-header').removeClass(settings.navbbgclass);
      		break;
      	default:
      }*/
    },
    HandleSubMenuTrigger: function HandleSubMenuTrigger() {
      switch (settings.SubMenuTrigger) {
        case 'hover':
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').addClass('is-hover'); // Initialize

          var $window = $(window);
          var $dropdown = $('.pcoded-submenu > li');
          var currentSize = $window.width();
          var currentEvent = ''; // Attach current event on load

          currentSize >= 767 ? bindTwo('hover') : bindTwo('click'); // Atach window resize event

          $window.resize(function () {
            // get windows new size
            var newSize = $window.width(); // Exit if size is same

            if (currentSize == newSize) {
              return;
            } // Check if size changed, if its greater/smaller and which current event is attached so we dont attach multiple events


            if (newSize >= 767 && currentEvent != 'hover') {
              bindTwo('hover');
            } else if (newSize < 767 && currentEvent != 'click') {
              bindTwo('click');
            } // Update new size


            currentSize = newSize;
          });

          var bindTwo = function bindTwo(eventType) {
            if (eventType == 'hover') {
              // Update currentEvent
              currentEvent = eventType; // Make sure all previous events are removed and attach hover

              $dropdown.off('click').off('mouseenter mouseleave').hover(function () {
                $(this).addClass('pcoded-trigger');
              }, function () {
                $(this).removeClass('pcoded-trigger');
              });
            } else if (eventType == 'click') {
              // Update currentEvent
              currentEvent = eventType; // Make sure all previous events are removed and attach hover

              $dropdown.off('mouseenter mouseleave').off('click').on('click', function (e) {
                e.stopPropagation();
                var str = $(this).closest('.pcoded-submenu').length;

                if (str === 0) {
                  if ($(this).hasClass('pcoded-trigger')) {
                    $(this).removeClass('pcoded-trigger');
                  } else {
                    $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                    $(this).addClass('pcoded-trigger');
                  }
                } else {
                  if ($(this).hasClass('pcoded-trigger')) {
                    $(this).removeClass('pcoded-trigger');
                  } else {
                    $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                    $(this).addClass('pcoded-trigger');
                  }
                }
              });
            }
          };

          break;

        case 'click':
          $('#' + oid + ' .pcoded-navbar .pcoded-hasmenu').removeClass('is-hover');
          $(".pcoded-submenu > li").on('click', function (e) {
            e.stopPropagation();
            var str = $(this).closest('.pcoded-submenu').length;

            if (str === 0) {
              if ($(this).hasClass('pcoded-trigger')) {
                $(this).removeClass('pcoded-trigger');
              } else {
                $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                $(this).addClass('pcoded-trigger');
              }
            } else {
              if ($(this).hasClass('pcoded-trigger')) {
                $(this).removeClass('pcoded-trigger');
              } else {
                $(this).closest('.pcoded-submenu').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                $(this).addClass('pcoded-trigger');
              }
            }
          });
          break;
      }
    },
    HandleMenuTrigger: function HandleMenuTrigger() {
      switch (settings.MenuTrigger) {
        case 'hover':
          $('#' + oid + ' .pcoded-navbar').addClass('is-hover'); // Initialize

          var $window = $(window);
          var $dropdown = $(".pcoded-item > li");
          var currentSize = $window.width();
          var currentEvent = ''; // Attach current event on load

          currentSize >= 767 ? bindOne('hover') : bindOne('click'); // Atach window resize event

          $window.resize(function () {
            // get windows new size
            var newSize = $window.width(); // Exit if size is same

            if (currentSize == newSize) {
              return;
            } // Check if size changed, if its greater/smaller and which current event is attached so we dont attach multiple events


            if (newSize >= 767 && currentEvent != 'hover') {
              bindOne('hover');
            } else if (newSize < 767 && currentEvent != 'click') {
              bindOne('click');
            } // Update new size


            currentSize = newSize;
          });

          var bindOne = function bindOne(eventType) {
            if (eventType == 'hover') {
              // Update currentEvent
              currentEvent = eventType; // Make sure all previous events are removed and attach hover

              $dropdown.off('click').off('mouseenter mouseleave').hover(function () {
                $(this).addClass('pcoded-trigger');
              }, function () {
                $(this).removeClass('pcoded-trigger');
              });
            } else if (eventType == 'click') {
              // Update currentEvent
              currentEvent = eventType; // Make sure all previous events are removed and attach hover

              $dropdown.off('mouseenter mouseleave').off('click').on('click', function () {
                if ($(this).hasClass('pcoded-trigger')) {
                  $(this).removeClass('pcoded-trigger');
                } else {
                  $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
                  $(this).addClass('pcoded-trigger');
                }
              });
            }
          };

          break;

        case 'click':
          $('#' + oid + ' .pcoded-navbar').removeClass('is-hover');
          $(".pcoded-item > li ").on('click', function () {
            if ($(this).hasClass('pcoded-trigger')) {
              $(this).removeClass('pcoded-trigger');
            } else {
              $(this).closest('.pcoded-inner-navbar').find('li.pcoded-trigger').removeClass('pcoded-trigger');
              $(this).addClass('pcoded-trigger');
            }
          });
          break;
      }
    },
    HandleMenuOnClick: function HandleMenuOnClick() {
      var totalwidth = $(window)[0].innerWidth;

      if (settings.themelayout === "vertical") {
        $('#mobile-collapse,.sidebar_toggle a, .pcoded-overlay-box,.menu-toggle a').on("click", function () {
          $(this).parent().find('.menu-icon').toggleClass("is-clicked");
          var dt = $('#' + oid).attr("pcoded-device-type");

          if (dt == "desktop") {
            var dmc = settings.onToggleVerticalMenu.desktop;
            var dm = settings.defaultVerticalMenu.desktop;
            var dn = $('#' + oid).attr("vertical-nav-type");

            if (dn == dm) {
              $('#' + oid).attr("vertical-nav-type", dmc);
            } else if (dn == dmc) {
              $('#' + oid).attr("vertical-nav-type", dm);
            } else {
              return false;
            }
          } else if (dt == "tablet") {
            var tmc = settings.onToggleVerticalMenu.tablet;
            var tm = settings.defaultVerticalMenu.tablet;
            var tn = $('#' + oid).attr("vertical-nav-type");

            if (tn == tm) {
              $('#' + oid).attr("vertical-nav-type", tmc);
            } else if (dn == dmc) {
              $('#' + oid).attr("vertical-nav-type", tm);
            }
          } else if (dt == "phone") {
            var pmc = settings.onToggleVerticalMenu.phone;
            var pm = settings.defaultVerticalMenu.phone;
            var pn = $('#' + oid).attr("vertical-nav-type");

            if (pn == pm) {
              $('#' + oid).attr("vertical-nav-type", pmc);
            } else if (dn == dmc) {
              $('#' + oid).attr("vertical-nav-type", pm);
            }
          }

          $('.pcoded').addClass("pcoded-toggle-animate");
          setTimeout(function () {
            $('.pcoded').removeClass("pcoded-toggle-animate");
          }, 250);
        });
      } else if (settings.themelayout === "horizontal") {
        if (totalwidth >= 768 && totalwidth <= 992) {
          $('#' + oid).attr("pcoded-device-type", "tablet");
        } else if (totalwidth < 768) {
          $('#' + oid).attr("pcoded-device-type", "phone");
        } else {
          $('#' + oid).attr("pcoded-device-type", "desktop");
        }
      }
    },
    Handlecomponetheight: function Handlecomponetheight() {
      function setHeight() {
        var WH = $(window).height();
        var HH = $(".pcoded-header").innerHeight();
        var NH = $(".pcoded-navbar").innerHeight();
        var FH = $(".pcoded-footer").innerHeight();
        var contentHH = WH - HH;
        var contentVH = WH - HH;
        var lpanelH = WH - HH; // if (settings.themelayout === "horizontal" ) {
        // 	$(".pcoded-navbar").css('height', contentHH);
        // } else if (settings.themelayout === "vertical" ) {
        // 	if ( contentVH >= lpanelH ){
        // 		$(".pcoded-navbar").css('height', contentVH);
        // 	}else {
        // 		$(".pcoded-navbar").css('height', lpanelH);
        // 	}
        // } else {
        // 	return false;
        // }
      }

      ;
      setHeight();
      $(window).resize(function () {
        setHeight();
      });
    },
    HandleDeviceType: function HandleDeviceType() {
      function devicesize() {
        var totalwidth = $(window)[0].innerWidth;

        if (settings.themelayout === "vertical") {
          if (totalwidth >= 768 && totalwidth <= 992) {
            $('#' + oid).attr("pcoded-device-type", "tablet");
            var value = settings.defaultVerticalMenu.tablet;

            if (value != undefined && value != "") {
              $('#' + oid).attr("vertical-nav-type", value);
            } else {
              $('#' + oid).attr("vertical-nav-type", "collapsed");
            }

            var ev = settings.verticalMenueffect.tablet;

            if (ev != undefined && value != "") {
              $('#' + oid).attr("vertical-effect", ev);
            } else {
              $('#' + oid).attr("vertical-effect", "shrink");
            }
          } else if (totalwidth < 768) {
            $('#' + oid).attr("pcoded-device-type", "phone");
            var value = settings.defaultVerticalMenu.phone;

            if (value != undefined && value != "") {
              $('#' + oid).attr("vertical-nav-type", value);
            } else {
              $('#' + oid).attr("vertical-nav-type", "offcanvas");
            }

            var ev = settings.verticalMenueffect.phone;

            if (ev != undefined && value != "") {
              $('#' + oid).attr("vertical-effect", ev);
            } else {
              $('#' + oid).attr("vertical-effect", "push");
            }
          } else {
            $('#' + oid).attr("pcoded-device-type", "desktop");
            var value = settings.defaultVerticalMenu.desktop;

            if (value != undefined && value != "") {
              $('#' + oid).attr("vertical-nav-type", value);
            } else {
              $('#' + oid).attr("vertical-nav-type", "expanded");
            }

            var ev = settings.verticalMenueffect.desktop;

            if (ev != undefined && value != "") {
              $('#' + oid).attr("vertical-effect", ev);
            } else {
              $('#' + oid).attr("vertical-effect", "shrink");
            }
          }
        } else if (settings.themelayout === "horizontal") {
          if (totalwidth >= 768 && totalwidth <= 992) {
            $('#' + oid).attr("pcoded-device-type", "tablet");
          } else if (totalwidth < 768) {
            $('#' + oid).attr("pcoded-device-type", "phone");
          } else {
            $('#' + oid).attr("pcoded-device-type", "desktop");
          }
        }
      }

      ;
      devicesize();
      $(window).resize(function () {
        tw = $(window)[0].innerWidth;
        dt = $('#' + oid).attr('pcoded-device-type');

        if (dt == 'desktop' && tw < 992) {
          devicesize();
        } else if (dt == 'phone' && tw > 768) {
          devicesize();
        } else if (dt == 'tablet' && tw < 768) {
          devicesize();
        } else if (dt == 'tablet' && tw > 992) {
          devicesize();
        }
      });
    },
    HandleMenulayout: function HandleMenulayout() {
      if (settings.themelayout === "vertical") {
        switch (settings.verticalMenulayout) {
          case 'wide':
            $('#' + oid).attr("vertical-layout", "wide");
            break;

          case 'box':
            $('#' + oid).attr("vertical-layout", "box");
            break;

          case 'widebox':
            $('#' + oid).attr("vertical-layout", "widebox");
            break;

          default:
        }
      } else if (settings.themelayout === "horizontal") {
        switch (settings.horizontalMenulayout) {
          case 'wide':
            $('#' + oid).attr("horizontal-layout", "wide");
            break;

          case 'box':
            $('#' + oid).attr("horizontal-layout", "box");
            break;

          case 'widebox':
            $('#' + oid).attr("horizontal-layout", "widebox");
            break;

          default:
        }
      } else {
        return false;
      }
    },
    HandlehorizontalMenuplacement: function HandlehorizontalMenuplacement() {
      if (settings.themelayout === "horizontal") {
        switch (settings.horizontalMenuplacement) {
          case 'bottom':
            $('#' + oid).attr("horizontal-placement", "bottom");
            break;

          case 'top':
            $('#' + oid).attr("horizontal-placement", "top");
            break;

          default:
        }
      } else {
        $('#' + oid).removeAttr("horizontal-placement");
      }
    },
    HandleverticalMenuplacement: function HandleverticalMenuplacement() {
      if (settings.themelayout === "vertical") {
        switch (settings.verticalMenuplacement) {
          case 'left':
            $('#' + oid).attr("vertical-placement", "left");
            break;

          case 'right':
            $('#' + oid).attr("vertical-placement", "right");
            break;

          default:
        }
      } else {
        $('#' + oid).removeAttr("vertical-placement");
      }
    },
    Handlethemelayout: function Handlethemelayout() {
      switch (settings.themelayout) {
        case 'horizontal':
          $('#' + oid).attr("theme-layout", "horizontal");
          break;

        case 'vertical':
          $('#' + oid).attr("theme-layout", "vertical");
          break;

        default:
      }
    }
  };
  PcodedMenu.PcodedMenuInit();
}; // menu [ vertical ]


$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.pcoded[theme-layout="vertical"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('position', 'fixed');
    $('.pcoded[theme-layout="vertical"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('top', 0);
    $('.pcoded[theme-layout="vertical"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('height', '100%');
  } else {
    $('.pcoded[theme-layout="vertical"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('position', 'absolute');
    $('.pcoded[theme-layout="vertical"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('top', 'auto');
  }
}); // menu [ horizontal ]

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.pcoded[theme-layout="horizontal"][pcoded-device-type="desktop"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('position', 'fixed');
    $('.pcoded[theme-layout="horizontal"][pcoded-device-type="desktop"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('top', 0);
  } else {
    $('.pcoded[theme-layout="horizontal"][pcoded-device-type="desktop"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('position', 'absolute');
    $('.pcoded[theme-layout="horizontal"][pcoded-device-type="desktop"] .pcoded-navbar[pcoded-navbar-position="fixed"][pcoded-header-position="relative"]').css('top', 'auto');
  }
}); // menu [ compact ]

$(window).on('load', function () {
  $('.pcoded[vertical-nav-type="collapsed"] .pcoded-navbar').hover(function () {
    $('.pcoded').attr("vertical-nav-type", "expanded");
  }, function () {
    $('.pcoded').attr("vertical-nav-type", "collapsed");
  });
});

/***/ }),

/***/ "./resources/template/assets/js/popper.js/popper.min.js":
/*!**************************************************************!*\
  !*** ./resources/template/assets/js/popper.js/popper.min.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function (e, t) {
  'object' == ( false ? 0 : _typeof(exports)) && 'undefined' != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    var o = e && e.offsetParent,
        i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement;
  }

  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }

  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }

  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = o ? e : t,
        n = o ? t : e,
        a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }

  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        i = e.nodeName;

    if ('BODY' === i || 'HTML' === i) {
      var n = window.document.documentElement,
          r = window.document.scrollingElement || n;
      return r[o];
    }

    return e[o];
  }

  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(t, 'top'),
        n = a(t, 'left'),
        r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }

  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        i = 'Left' == o ? 'Right' : 'Bottom';
    return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0];
  }

  function m(e, t, o, i) {
    return X(t['offset' + e], o['client' + e], o['offset' + e], ne() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }

  function c() {
    var e = window.document.body,
        t = window.document.documentElement,
        o = ne() && window.getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    };
  }

  function h(e) {
    return de({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function g(e) {
    var o = {};
    if (ne()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
          n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        p = 'HTML' === e.nodeName ? c() : {},
        s = p.width || e.clientWidth || r.right - r.left,
        d = p.height || e.clientHeight || r.bottom - r.top,
        l = e.offsetWidth - s,
        m = e.offsetHeight - d;

    if (l || m) {
      var g = t(e);
      l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }

    return h(r);
  }

  function u(e, o) {
    var i = ne(),
        r = 'HTML' === o.nodeName,
        p = g(e),
        s = g(o),
        d = n(e),
        a = t(o),
        f = +a.borderTopWidth.split('px')[0],
        m = +a.borderLeftWidth.split('px')[0],
        c = h({
      top: p.top - s.top - f,
      left: p.left - s.left - m,
      width: p.width,
      height: p.height
    });

    if (c.marginTop = 0, c.marginLeft = 0, !i && r) {
      var u = +a.marginTop.split('px')[0],
          b = +a.marginLeft.split('px')[0];
      c.top -= f - u, c.bottom -= f - u, c.left -= m - b, c.right -= m - b, c.marginTop = u, c.marginLeft = b;
    }

    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)), c;
  }

  function b(e) {
    var t = window.document.documentElement,
        o = u(e, t),
        i = X(t.clientWidth, window.innerWidth || 0),
        n = X(t.clientHeight, window.innerHeight || 0),
        r = a(t),
        p = a(t, 'left'),
        s = {
      top: r - o.top + o.marginTop,
      left: p - o.left + o.marginLeft,
      width: i,
      height: n
    };
    return h(s);
  }

  function y(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }

  function w(e, t, i, r) {
    var p = {
      top: 0,
      left: 0
    },
        s = d(e, t);
    if ('viewport' === r) p = b(s);else {
      var a;
      'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
      var l = u(a, s);

      if ('HTML' === a.nodeName && !y(s)) {
        var f = c(),
            m = f.height,
            h = f.width;
        p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = h + l.left;
      } else p = l;
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }

  function E(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = w(o, i, r, n),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return de({
        key: e
      }, s[e], {
        area: E(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          i = e.height;
      return t >= o.clientWidth && i >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }

  function O(e) {
    var t = window.getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        n = {
      width: e.offsetWidth + i,
      height: e.offsetHeight + o
    };
    return n;
  }

  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function S(e, t, o) {
    o = o.split('-')[0];
    var i = O(e),
        n = {
      width: i.width,
      height: i.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n;
  }

  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function C(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }

  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
    return n.forEach(function (t) {
      t["function"] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t["function"] || t.fn;
      t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper), o.offsets.reference = h(o.offsets.reference), o = i(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          i = e.enabled;
      return i && o === t;
    });
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof window.document.body.style[r]) return r;
    }

    return null;
  }

  function P() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function D(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? window : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || D(n(p.parentNode), t, o, i), i.push(p);
  }

  function H(e, t, o, i) {
    o.updateBound = i, window.addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return D(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function A() {
    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function M(e, t) {
    return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }

  function R(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }

  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function F(e, t, o) {
    var i = T(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        n = !!i && e.some(function (e) {
      return e.name === o && e.enabled && e.order < i.order;
    });

    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return n;
  }

  function j(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = le.indexOf(e),
        i = le.slice(o + 1).concat(le.slice(0, o));
    return t ? i.reverse() : i;
  }

  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +n[1],
        p = n[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = i;
      }

      var d = h(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function G(e, t, o, i) {
    var n = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(i),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(T(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return q(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }

  function z(e, t) {
    var o,
        i = t.offset,
        n = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = n.split('-')[0];
    return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ['native code', '[object MutationObserverConstructor]'], J = function J(e) {
    return Q.some(function (t) {
      return -1 < (e || '').toString().indexOf(t);
    });
  }, Z = 'undefined' != typeof window, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1) {
    if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
      ee = 1;
      break;
    }
  }

  var i,
      oe = Z && J(window.MutationObserver),
      ie = oe ? function (e) {
    var t = !1,
        o = 0,
        i = document.createElement('span'),
        n = new MutationObserver(function () {
      e(), t = !1;
    });
    return n.observe(i, {
      attributes: !0
    }), function () {
      t || (t = !0, i.setAttribute('x-index', o), ++o);
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, ee));
    };
  },
      ne = function ne() {
    return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
  },
      re = function re(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      pe = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, i) {
      return o && e(t.prototype, o), i && e(t, i), t;
    };
  }(),
      se = function se(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      de = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var i in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      }
    }

    return e;
  },
      ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      le = ae.slice(3),
      fe = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      me = function () {
    function t(o, i) {
      var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      re(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(n.update);
      }, this.update = ie(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        n.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return de({
          name: e
        }, n.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return pe(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return P.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return A.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return I.call(this);
      }
    }]), t;
  }();

  return me.Utils = ('undefined' == typeof window ? __webpack_require__.g : window).PopperUtils, me.placements = ae, me.Defaults = {
    placement: 'bottom',
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = t.split('-')[1];

          if (i) {
            var n = e.offsets,
                r = n.reference,
                p = n.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: se({}, d, r[d]),
              end: se({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = de({}, p, l[i]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: z,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = w(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
              p = e.offsets.popper,
              s = {
            primary: function primary(e) {
              var o = p[e];
              return p[e] < i[e] && !t.escapeWithReference && (o = X(p[e], i[e])), se({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
              return p[e] > i[e] && !t.escapeWithReference && (n = V(p[o], i[e] - ('right' === e ? p.width : p.height))), se({}, o, n);
            }
          };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = de({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              i = t.reference,
              n = e.placement.split('-')[0],
              r = _,
              p = -1 !== ['top', 'bottom'].indexOf(n),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var n = e.placement.split('-')[0],
              r = e.offsets,
              p = r.popper,
              s = r.reference,
              d = -1 !== ['left', 'right'].indexOf(n),
              a = d ? 'height' : 'width',
              l = d ? 'Top' : 'Left',
              f = l.toLowerCase(),
              m = d ? 'left' : 'top',
              c = d ? 'bottom' : 'right',
              g = O(i)[a];
          s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)), s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
          var u = s[f] + s[a] / 2 - g / 2,
              b = t(e.instance.popper, 'margin' + l).replace('px', ''),
              y = u - h(e.offsets.popper)[f] - b;
          return y = X(V(p[a] - g, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[m] = '', e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
              i = e.placement.split('-')[0],
              n = L(i),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case fe.FLIP:
              p = [i, n];
              break;

            case fe.CLOCKWISE:
              p = K(i);
              break;

            case fe.COUNTERCLOCKWISE:
              p = K(i, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = L(i);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = _,
                m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                c = f(a.left) < f(o.left),
                h = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === i && c || 'right' === i && h || 'top' === i && g || 'bottom' === i && u,
                y = -1 !== ['top', 'bottom'].indexOf(i),
                w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              i = e.offsets,
              n = i.popper,
              r = i.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = h(n), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = T(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              i = t.y,
              n = e.offsets.popper,
              p = T(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = {
            position: n.position
          },
              c = {
            left: _(n.left),
            top: _(n.top),
            bottom: _(n.bottom),
            right: _(n.right)
          },
              h = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === i ? 'left' : 'right',
              b = B('transform');
          if (d = 'bottom' == h ? -f.height + c.bottom : c.top, s = 'right' == u ? -f.width + c.right : c.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[h] = 0, m[u] = 0, m.willChange = 'transform';else {
            var y = 'bottom' == h ? -1 : 1,
                w = 'right' == u ? -1 : 1;
            m[h] = d * y, m[u] = s * w, m.willChange = h + ', ' + u;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, i, n) {
          var r = x(n, t, e),
              p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), U(t, {
            position: 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, me;
});

/***/ }),

/***/ "./resources/template/assets/js/script.js":
/*!************************************************!*\
  !*** ./resources/template/assets/js/script.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


$(document).ready(function () {
  // card js start
  $(".card-header-right .close-card").on('click', function () {
    var $this = $(this);
    $this.parents('.card').animate({
      'opacity': '0',
      '-webkit-transform': 'scale3d(.3, .3, .3)',
      'transform': 'scale3d(.3, .3, .3)'
    });
    setTimeout(function () {
      $this.parents('.card').remove();
    }, 800);
  });
  $(".card-header-right .reload-card").on('click', function () {
    var $this = $(this);
    $this.parents('.card').addClass("card-load");
    $this.parents('.card').append('<div class="card-loader"><i class="fa fa-spinner rotate-refresh"></div>');
    setTimeout(function () {
      $this.parents('.card').children(".card-loader").remove();
      $this.parents('.card').removeClass("card-load");
    }, 3000);
  });
  $(".card-header-right .card-option .open-card-option").on('click', function () {
    var $this = $(this);

    if ($this.hasClass('fa-times')) {
      $this.parents('.card-option').animate({
        'width': '30px'
      });
      $(this).removeClass("fa-times").fadeIn('slow');
      $(this).addClass("fa-wrench").fadeIn('slow');
    } else {
      $this.parents('.card-option').animate({
        'width': '140px'
      });
      $(this).addClass("fa-times").fadeIn('slow');
      $(this).removeClass("fa-wrench").fadeIn('slow');
    }
  });
  $(".card-header-right .minimize-card").on('click', function () {
    var $this = $(this);
    var port = $($this.parents('.card'));
    var card = $(port).children('.card-block').slideToggle();
    $(this).toggleClass("fa-minus").fadeIn('slow');
    $(this).toggleClass("fa-plus").fadeIn('slow');
  });
  $(".card-header-right .full-card").on('click', function () {
    var $this = $(this);
    var port = $($this.parents('.card'));
    port.toggleClass("full-card");
    $(this).toggleClass("fa-window-restore");
  });
  $(".card-header-right .icofont-spinner-alt-5").on('mouseenter mouseleave', function () {
    $(this).toggleClass("rotate-refresh").fadeIn('slow');
  });
  $("#more-details").on('click', function () {
    $(".more-details").slideToggle(500);
  });
  $(".mobile-options").on('click', function () {
    $(".navbar-container .nav-right").slideToggle('slow');
  });
  $(".search-btn").on('click', function () {
    $(".main-search").addClass('open');
    $('.main-search .form-control').animate({
      'width': '200px'
    });
  });
  $(".search-close").on('click', function () {
    $('.main-search .form-control').animate({
      'width': '0'
    });
    setTimeout(function () {
      $(".main-search").removeClass('open');
    }, 300);
  }); // $(".header-notification").on('click', function() {
  //     $(this).children('.show-notification').slideToggle(500);
  //     $(this).toggleClass('active');
  //
  // });

  $(document).ready(function () {
    $(".header-notification").click(function () {
      $(this).find(".show-notification").slideToggle(500);
      $(this).toggleClass('active');
    });
  });
  $(document).on("click", function (event) {
    var $trigger = $(".header-notification");

    if ($trigger !== event.target && !$trigger.has(event.target).length) {
      $(".show-notification").slideUp(300);
      $(".header-notification").removeClass('active');
    }
  }); // card js end

  $.mCustomScrollbar.defaults.axis = "yx";
  $("#styleSelector .style-cont").slimScroll({
    setTop: "1px",
    height: "calc(100vh - 520px)"
  });
  $(".main-menu").mCustomScrollbar({
    setTop: "1px",
    setHeight: "calc(100% - 56px)"
  });
  /*chatbar js start*/

  /*chat box scroll*/

  var a = $(window).height() - 80;
  $(".main-friend-list").slimScroll({
    height: a,
    allowPageScroll: false,
    wheelStep: 5,
    color: '#1b8bf9'
  }); // search

  $("#search-friends").on("keyup", function () {
    var g = $(this).val().toLowerCase();
    $(".userlist-box .media-body .chat-header").each(function () {
      var s = $(this).text().toLowerCase();
      $(this).closest('.userlist-box')[s.indexOf(g) !== -1 ? 'show' : 'hide']();
    });
  }); // open chat box

  $('.displayChatbox').on('click', function () {
    var my_val = $('.pcoded').attr('vertical-placement');

    if (my_val == 'right') {
      var options = {
        direction: 'left'
      };
    } else {
      var options = {
        direction: 'right'
      };
    }

    $('.showChat').toggle('slide', options, 500);
  }); //open friend chat

  $('.userlist-box').on('click', function () {
    var my_val = $('.pcoded').attr('vertical-placement');

    if (my_val == 'right') {
      var options = {
        direction: 'left'
      };
    } else {
      var options = {
        direction: 'right'
      };
    }

    $('.showChat_inner').toggle('slide', options, 500);
  }); //back to main chatbar

  $('.back_chatBox').on('click', function () {
    var my_val = $('.pcoded').attr('vertical-placement');

    if (my_val == 'right') {
      var options = {
        direction: 'left'
      };
    } else {
      var options = {
        direction: 'right'
      };
    }

    $('.showChat_inner').toggle('slide', options, 500);
    $('.showChat').css('display', 'block');
  });
  $('.back_friendlist').on('click', function () {
    var my_val = $('.pcoded').attr('vertical-placement');

    if (my_val == 'right') {
      var options = {
        direction: 'left'
      };
    } else {
      var options = {
        direction: 'right'
      };
    }

    $('.p-chat-user').toggle('slide', options, 500);
    $('.showChat').css('display', 'block');
  }); // /*chatbar js end*/

  $('[data-toggle="tooltip"]').tooltip(); // wave effect js

  Waves.init();
  Waves.attach('.flat-buttons', ['waves-button']);
  Waves.attach('.float-buttons', ['waves-button', 'waves-float']);
  Waves.attach('.float-button-light', ['waves-button', 'waves-float', 'waves-light']);
  Waves.attach('.flat-buttons', ['waves-button', 'waves-float', 'waves-light', 'flat-buttons']);
});
$(document).ready(function () {
  $(".theme-loader").animate({
    opacity: "0"
  }, 1000);
  setTimeout(function () {
    $(".theme-loader").remove();
  }, 800);
}); // toggle full screen

function toggleFullScreen() {
  var a = $(window).height() - 10;

  if (!document.fullscreenElement && // alternative standard method
  !document.mozFullScreenElement && !document.webkitFullscreenElement) {
    // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

$('body').append('' + '<div class="fixed-button">' + '<a href="https://themeforest.net/item/mega-able-bootstrap-4-and-angular-5-admin-dashboard-template/20790784?ref=phoenixcoded" target="_blank" class="btn btn-md btn-primary">' + '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro' + '</a> ' + '</div>' + '');
var $window = $(window);
var nav = $('.fixed-button');
$window.scroll(function () {
  if ($window.scrollTop() >= 200) {
    nav.addClass('active');
  } else {
    nav.removeClass('active');
  }
});

/***/ }),

/***/ "./resources/template/assets/js/vertical-layout.min.js":
/*!*************************************************************!*\
  !*** ./resources/template/assets/js/vertical-layout.min.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
"use strict!";

$(document).ready(function () {
  $("#pcoded").pcodedmenu({
    themelayout: 'vertical',
    verticalMenuplacement: 'left',
    // value should be left/right
    verticalMenulayout: 'wide',
    // value should be wide/box
    MenuTrigger: 'click',
    // click / hover
    SubMenuTrigger: 'click',
    // click / hover
    activeMenuClass: 'active',
    ThemeBackgroundPattern: 'theme1',
    // pattern1, pattern2, pattern3, pattern4, pattern5, pattern6
    HeaderBackground: 'theme1',
    // theme1, theme2, theme3, theme4, theme5  header color
    LHeaderBackground: 'theme1',
    // theme1, theme2, theme3, theme4, theme5, theme6   brand color
    NavbarBackground: 'themelight1',
    // themelight1, theme1  // light  and dark sidebar
    ActiveItemBackground: 'theme1',
    // theme1, theme2, theme3, theme4, theme5, theme6, theme7, theme8, theme9, theme10, theme11, theme12  mennu active item color
    SubItemBackground: 'theme2',
    ActiveItemStyle: 'style0',
    ItemBorder: true,
    ItemBorderStyle: 'none',
    NavbarImage: 'false',
    ActiveNavbarImage: 'img1',
    SubItemBorder: true,
    DropDownIconStyle: 'style3',
    // Value should be style1,style2,style3
    menutype: 'st2',
    // Value should be st1, st2, st3, st4, st5 menu icon style
    layouttype: 'light',
    // Value should be light / dark
    FixedNavbarPosition: true,
    // Value should be true / false  header postion
    FixedHeaderPosition: true,
    // Value should be true / false  sidebar menu postion
    collapseVerticalLeftHeader: true,
    VerticalSubMenuItemIconStyle: 'style7',
    // value should be style1, style2, style3, style4, style5, style6
    VerticalNavigationView: 'view1',
    verticalMenueffect: {
      desktop: "shrink",
      tablet: "overlay",
      phone: "overlay"
    },
    defaultVerticalMenu: {
      desktop: "expanded",
      // value should be offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
      tablet: "offcanvas",
      // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
      phone: "offcanvas" // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded

    },
    onToggleVerticalMenu: {
      desktop: "offcanvas",
      // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
      tablet: "expanded",
      // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
      phone: "expanded" // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded

    }
  });
});

/***/ }),

/***/ "./resources/template/assets/pages/dashboard/custom-dashboard.js":
/*!***********************************************************************!*\
  !*** ./resources/template/assets/pages/dashboard/custom-dashboard.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


$(document).ready(function () {
  // sale analytics start
  var chart = AmCharts.makeChart("sales-analytics", {
    "type": "serial",
    "theme": "light",
    // "hideCredits": true,
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
      "id": "v1",
      "axisAlpha": 0,
      "position": "left",
      "ignoreAxisWidth": true
    }],
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "graphs": [{
      "id": "g1",
      "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#ffffff",
        "type": "smoothedLine"
      },
      "fillAlphas": 0.5,
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "lineColor": "#11c15b",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 3,
      "title": "red line",
      "useLineColorForBulletBorder": true,
      "valueField": "value",
      "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "zoomable": false,
      "valueZoomable": true,
      "valueLineAlpha": 0.5
    },
    "chartScrollbar": {
      "autoGridCount": true,
      "graph": "g1",
      "oppositeAxis": true,
      "scrollbarHeight": 90
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": true
    },
    "dataProvider": [{
      "date": "2012-07-27",
      "value": 13
    }, {
      "date": "2012-07-28",
      "value": 11
    }, {
      "date": "2012-07-29",
      "value": 15
    }, {
      "date": "2012-07-30",
      "value": 16
    }, {
      "date": "2012-07-31",
      "value": 18
    }, {
      "date": "2012-08-01",
      "value": 13
    }, {
      "date": "2012-08-02",
      "value": 22
    }, {
      "date": "2012-08-03",
      "value": 23
    }, {
      "date": "2012-08-04",
      "value": 20
    }, {
      "date": "2012-08-05",
      "value": 17
    }, {
      "date": "2012-08-06",
      "value": 16
    }, {
      "date": "2012-08-07",
      "value": 18
    }, {
      "date": "2012-08-08",
      "value": 21
    }, {
      "date": "2012-08-09",
      "value": 26
    }, {
      "date": "2012-08-10",
      "value": 24
    }, {
      "date": "2012-08-11",
      "value": 29
    }, {
      "date": "2012-08-12",
      "value": 32
    }, {
      "date": "2012-08-13",
      "value": 18
    }, {
      "date": "2012-08-14",
      "value": 24
    }, {
      "date": "2012-08-15",
      "value": 22
    }, {
      "date": "2012-08-16",
      "value": 18
    }, {
      "date": "2012-08-17",
      "value": 19
    }, {
      "date": "2012-08-18",
      "value": 14
    }, {
      "date": "2012-08-19",
      "value": 15
    }, {
      "date": "2012-08-20",
      "value": 12
    }, {
      "date": "2012-08-21",
      "value": 8
    }, {
      "date": "2012-08-22",
      "value": 9
    }, {
      "date": "2012-08-23",
      "value": 8
    }, {
      "date": "2012-08-24",
      "value": 7
    }, {
      "date": "2012-08-25",
      "value": 5
    }, {
      "date": "2012-08-26",
      "value": 11
    }, {
      "date": "2012-08-27",
      "value": 13
    }, {
      "date": "2012-08-28",
      "value": 18
    }, {
      "date": "2012-08-29",
      "value": 20
    }, {
      "date": "2012-08-30",
      "value": 29
    }, {
      "date": "2012-08-31",
      "value": 33
    }, {
      "date": "2012-09-01",
      "value": 42
    }, {
      "date": "2012-09-02",
      "value": 35
    }, {
      "date": "2012-09-03",
      "value": 31
    }, {
      "date": "2012-09-04",
      "value": 47
    }, {
      "date": "2012-09-05",
      "value": 52
    }, {
      "date": "2012-09-06",
      "value": 46
    }, {
      "date": "2012-09-07",
      "value": 41
    }, {
      "date": "2012-09-08",
      "value": 43
    }, {
      "date": "2012-09-09",
      "value": 40
    }, {
      "date": "2012-09-10",
      "value": 39
    }, {
      "date": "2012-09-11",
      "value": 34
    }, {
      "date": "2012-09-12",
      "value": 29
    }, {
      "date": "2012-09-13",
      "value": 34
    }, {
      "date": "2012-09-14",
      "value": 37
    }, {
      "date": "2012-09-15",
      "value": 42
    }, {
      "date": "2012-09-16",
      "value": 49
    }, {
      "date": "2012-09-17",
      "value": 46
    }, {
      "date": "2012-09-18",
      "value": 47
    }, {
      "date": "2012-09-19",
      "value": 55
    }, {
      "date": "2012-09-20",
      "value": 59
    }, {
      "date": "2012-09-21",
      "value": 58
    }, {
      "date": "2012-09-22",
      "value": 57
    }, {
      "date": "2012-09-23",
      "value": 61
    }, {
      "date": "2012-09-24",
      "value": 59
    }, {
      "date": "2012-09-25",
      "value": 67
    }, {
      "date": "2012-09-26",
      "value": 65
    }, {
      "date": "2012-09-27",
      "value": 61
    }, {
      "date": "2012-09-28",
      "value": 66
    }, {
      "date": "2012-09-29",
      "value": 69
    }, {
      "date": "2012-09-30",
      "value": 71
    }, {
      "date": "2012-10-01",
      "value": 67
    }, {
      "date": "2012-10-02",
      "value": 63
    }, {
      "date": "2012-10-03",
      "value": 46
    }, {
      "date": "2012-10-04",
      "value": 32
    }, {
      "date": "2012-10-05",
      "value": 21
    }, {
      "date": "2012-10-06",
      "value": 18
    }, {
      "date": "2012-10-07",
      "value": 21
    }, {
      "date": "2012-10-08",
      "value": 28
    }, {
      "date": "2012-10-09",
      "value": 27
    }, {
      "date": "2012-10-10",
      "value": 36
    }, {
      "date": "2012-10-11",
      "value": 33
    }, {
      "date": "2012-10-12",
      "value": 31
    }, {
      "date": "2012-10-13",
      "value": 30
    }, {
      "date": "2012-10-14",
      "value": 34
    }, {
      "date": "2012-10-15",
      "value": 38
    }, {
      "date": "2012-10-16",
      "value": 37
    }, {
      "date": "2012-10-17",
      "value": 44
    }, {
      "date": "2012-10-18",
      "value": 49
    }, {
      "date": "2012-10-19",
      "value": 53
    }, {
      "date": "2012-10-20",
      "value": 57
    }, {
      "date": "2012-10-21",
      "value": 60
    }, {
      "date": "2012-10-22",
      "value": 61
    }, {
      "date": "2012-10-23",
      "value": 69
    }, {
      "date": "2012-10-24",
      "value": 67
    }, {
      "date": "2012-10-25",
      "value": 72
    }, {
      "date": "2012-10-26",
      "value": 77
    }, {
      "date": "2012-10-27",
      "value": 75
    }, {
      "date": "2012-10-28",
      "value": 70
    }, {
      "date": "2012-10-29",
      "value": 72
    }, {
      "date": "2012-10-30",
      "value": 70
    }, {
      "date": "2012-10-31",
      "value": 72
    }, {
      "date": "2012-11-01",
      "value": 73
    }, {
      "date": "2012-11-02",
      "value": 67
    }, {
      "date": "2012-11-03",
      "value": 68
    }, {
      "date": "2012-11-04",
      "value": 65
    }, {
      "date": "2012-11-05",
      "value": 71
    }, {
      "date": "2012-11-06",
      "value": 75
    }, {
      "date": "2012-11-07",
      "value": 74
    }, {
      "date": "2012-11-08",
      "value": 71
    }, {
      "date": "2012-11-09",
      "value": 76
    }, {
      "date": "2012-11-10",
      "value": 77
    }, {
      "date": "2012-11-11",
      "value": 81
    }, {
      "date": "2012-11-12",
      "value": 83
    }, {
      "date": "2012-11-13",
      "value": 80
    }, {
      "date": "2012-11-14",
      "value": 81
    }, {
      "date": "2012-11-15",
      "value": 87
    }, {
      "date": "2012-11-16",
      "value": 82
    }, {
      "date": "2012-11-17",
      "value": 86
    }, {
      "date": "2012-11-18",
      "value": 80
    }, {
      "date": "2012-11-19",
      "value": 87
    }, {
      "date": "2012-11-20",
      "value": 83
    }, {
      "date": "2012-11-21",
      "value": 85
    }, {
      "date": "2012-11-22",
      "value": 84
    }, {
      "date": "2012-11-23",
      "value": 82
    }, {
      "date": "2012-11-24",
      "value": 73
    }, {
      "date": "2012-11-25",
      "value": 71
    }, {
      "date": "2012-11-26",
      "value": 75
    }, {
      "date": "2012-11-27",
      "value": 79
    }, {
      "date": "2012-11-28",
      "value": 70
    }, {
      "date": "2012-11-29",
      "value": 73
    }, {
      "date": "2012-11-30",
      "value": 61
    }, {
      "date": "2012-12-01",
      "value": 62
    }, {
      "date": "2012-12-02",
      "value": 66
    }, {
      "date": "2012-12-03",
      "value": 65
    }, {
      "date": "2012-12-04",
      "value": 73
    }, {
      "date": "2012-12-05",
      "value": 79
    }, {
      "date": "2012-12-06",
      "value": 78
    }, {
      "date": "2012-12-07",
      "value": 78
    }, {
      "date": "2012-12-08",
      "value": 78
    }, {
      "date": "2012-12-09",
      "value": 74
    }, {
      "date": "2012-12-10",
      "value": 73
    }, {
      "date": "2012-12-11",
      "value": 75
    }, {
      "date": "2012-12-12",
      "value": 70
    }, {
      "date": "2012-12-13",
      "value": 77
    }, {
      "date": "2012-12-14",
      "value": 67
    }, {
      "date": "2012-12-15",
      "value": 62
    }, {
      "date": "2012-12-16",
      "value": 64
    }, {
      "date": "2012-12-17",
      "value": 61
    }, {
      "date": "2012-12-18",
      "value": 59
    }, {
      "date": "2012-12-19",
      "value": 53
    }, {
      "date": "2012-12-20",
      "value": 54
    }, {
      "date": "2012-12-21",
      "value": 56
    }, {
      "date": "2012-12-22",
      "value": 59
    }, {
      "date": "2012-12-23",
      "value": 58
    }, {
      "date": "2012-12-24",
      "value": 55
    }, {
      "date": "2012-12-25",
      "value": 52
    }, {
      "date": "2012-12-26",
      "value": 54
    }, {
      "date": "2012-12-27",
      "value": 50
    }, {
      "date": "2012-12-28",
      "value": 50
    }, {
      "date": "2012-12-29",
      "value": 51
    }, {
      "date": "2012-12-30",
      "value": 52
    }, {
      "date": "2012-12-31",
      "value": 58
    }, {
      "date": "2013-01-01",
      "value": 60
    }, {
      "date": "2013-01-02",
      "value": 67
    }, {
      "date": "2013-01-03",
      "value": 64
    }, {
      "date": "2013-01-04",
      "value": 66
    }, {
      "date": "2013-01-05",
      "value": 60
    }, {
      "date": "2013-01-06",
      "value": 63
    }, {
      "date": "2013-01-07",
      "value": 61
    }, {
      "date": "2013-01-08",
      "value": 60
    }, {
      "date": "2013-01-09",
      "value": 65
    }, {
      "date": "2013-01-10",
      "value": 75
    }, {
      "date": "2013-01-11",
      "value": 77
    }, {
      "date": "2013-01-12",
      "value": 78
    }, {
      "date": "2013-01-13",
      "value": 70
    }, {
      "date": "2013-01-14",
      "value": 70
    }, {
      "date": "2013-01-15",
      "value": 73
    }, {
      "date": "2013-01-16",
      "value": 71
    }, {
      "date": "2013-01-17",
      "value": 74
    }, {
      "date": "2013-01-18",
      "value": 78
    }, {
      "date": "2013-01-19",
      "value": 85
    }, {
      "date": "2013-01-20",
      "value": 82
    }, {
      "date": "2013-01-21",
      "value": 83
    }, {
      "date": "2013-01-22",
      "value": 88
    }, {
      "date": "2013-01-23",
      "value": 85
    }, {
      "date": "2013-01-24",
      "value": 85
    }, {
      "date": "2013-01-25",
      "value": 80
    }, {
      "date": "2013-01-26",
      "value": 87
    }, {
      "date": "2013-01-27",
      "value": 84
    }, {
      "date": "2013-01-28",
      "value": 83
    }, {
      "date": "2013-01-29",
      "value": 84
    }, {
      "date": "2013-01-30",
      "value": 81
    }]
  });
  var ctx = document.getElementById('this-month').getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: avgvalchart('#11c15b', [30, 15, 25, 35, 30, 20, 25, 30, 15, 1], '#11c15b'),
    options: buildchartoption()
  });

  function avgvalchart(a, b, f) {
    if (f == null) {
      f = "rgba(0,0,0,0)";
    }

    return {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
      datasets: [{
        label: "",
        borderColor: a,
        borderWidth: 2,
        hitRadius: 30,
        pointHoverRadius: 4,
        pointBorderWidth: 50,
        pointHoverBorderWidth: 12,
        pointBackgroundColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
        pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
        pointHoverBackgroundColor: a,
        pointHoverBorderColor: Chart.helpers.color("#000000").alpha(.1).rgbString(),
        fill: true,
        backgroundColor: f,
        data: b
      }]
    };
  }

  function buildchartoption() {
    return {
      title: {
        display: !1
      },
      tooltips: {
        position: 'nearest',
        mode: 'index',
        intersect: false,
        yPadding: 10,
        xPadding: 10
      },
      legend: {
        display: !1,
        labels: {
          usePointStyle: !1
        }
      },
      responsive: !0,
      maintainAspectRatio: !0,
      hover: {
        mode: "index"
      },
      scales: {
        xAxes: [{
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Month"
          }
        }],
        yAxes: [{
          display: !1,
          gridLines: !1,
          scaleLabel: {
            display: !0,
            labelString: "Value"
          },
          ticks: {
            beginAtZero: !0
          }
        }]
      },
      elements: {
        point: {
          radius: 4,
          borderWidth: 12
        }
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
  } // sale analytics end

});

/***/ }),

/***/ "./resources/template/assets/pages/waves/js/waves.min.js":
/*!***************************************************************!*\
  !*** ./resources/template/assets/pages/waves/js/waves.min.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Waves v0.7.5
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2016 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
!function (a, b) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return b.apply(a);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}("object" == (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof(__webpack_require__.g)) ? __webpack_require__.g : this, function () {
  "use strict";

  function a(a) {
    return null !== a && a === a.window;
  }

  function b(b) {
    return a(b) ? b : 9 === b.nodeType && b.defaultView;
  }

  function c(a) {
    var b = _typeof(a);

    return "function" === b || "object" === b && !!a;
  }

  function d(a) {
    return c(a) && a.nodeType > 0;
  }

  function e(a) {
    var b = m.call(a);
    return "[object String]" === b ? l(a) : c(a) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(b) && a.hasOwnProperty("length") ? a : d(a) ? [a] : [];
  }

  function f(a) {
    var c,
        d,
        e = {
      top: 0,
      left: 0
    },
        f = a && a.ownerDocument;
    return c = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = b(f), {
      top: e.top + d.pageYOffset - c.clientTop,
      left: e.left + d.pageXOffset - c.clientLeft
    };
  }

  function g(a) {
    var b = "";

    for (var c in a) {
      a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
    }

    return b;
  }

  function h(a, b, c) {
    if (c) {
      c.classList.remove("waves-rippling");
      var d = c.getAttribute("data-x"),
          e = c.getAttribute("data-y"),
          f = c.getAttribute("data-scale"),
          h = c.getAttribute("data-translate"),
          i = Date.now() - Number(c.getAttribute("data-hold")),
          j = 350 - i;
      0 > j && (j = 0), "mousemove" === a.type && (j = 150);
      var k = "mousemove" === a.type ? 2500 : o.duration;
      setTimeout(function () {
        var a = {
          top: e + "px",
          left: d + "px",
          opacity: "0",
          "-webkit-transition-duration": k + "ms",
          "-moz-transition-duration": k + "ms",
          "-o-transition-duration": k + "ms",
          "transition-duration": k + "ms",
          "-webkit-transform": f + " " + h,
          "-moz-transform": f + " " + h,
          "-ms-transform": f + " " + h,
          "-o-transform": f + " " + h,
          transform: f + " " + h
        };
        c.setAttribute("style", g(a)), setTimeout(function () {
          try {
            b.removeChild(c);
          } catch (a) {
            return !1;
          }
        }, k);
      }, j);
    }
  }

  function i(a) {
    if (q.allowEvent(a) === !1) return null;

    for (var b = null, c = a.target || a.srcElement; c.parentElement;) {
      if (!(c instanceof SVGElement) && c.classList.contains("waves-effect")) {
        b = c;
        break;
      }

      c = c.parentElement;
    }

    return b;
  }

  function j(a) {
    var b = i(a);

    if (null !== b) {
      if (b.disabled || b.getAttribute("disabled") || b.classList.contains("disabled")) return;

      if (q.registerEvent(a), "touchstart" === a.type && o.delay) {
        var c = !1,
            d = setTimeout(function () {
          d = null, o.show(a, b);
        }, o.delay),
            e = function e(_e) {
          d && (clearTimeout(d), d = null, o.show(a, b)), c || (c = !0, o.hide(_e, b));
        },
            f = function f(a) {
          d && (clearTimeout(d), d = null), e(a);
        };

        b.addEventListener("touchmove", f, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1);
      } else o.show(a, b), n && (b.addEventListener("touchend", o.hide, !1), b.addEventListener("touchcancel", o.hide, !1)), b.addEventListener("mouseup", o.hide, !1), b.addEventListener("mouseleave", o.hide, !1);
    }
  }

  var k = k || {},
      l = document.querySelectorAll.bind(document),
      m = Object.prototype.toString,
      n = ("ontouchstart" in window),
      o = {
    duration: 750,
    delay: 200,
    show: function show(a, b, c) {
      if (2 === a.button) return !1;
      b = b || this;
      var d = document.createElement("div");
      d.className = "waves-ripple waves-rippling", b.appendChild(d);
      var e = f(b),
          h = 0,
          i = 0;
      "touches" in a && a.touches.length ? (h = a.touches[0].pageY - e.top, i = a.touches[0].pageX - e.left) : (h = a.pageY - e.top, i = a.pageX - e.left), i = i >= 0 ? i : 0, h = h >= 0 ? h : 0;
      var j = "scale(" + b.clientWidth / 100 * 3 + ")",
          k = "translate(0,0)";
      c && (k = "translate(" + c.x + "px, " + c.y + "px)"), d.setAttribute("data-hold", Date.now()), d.setAttribute("data-x", i), d.setAttribute("data-y", h), d.setAttribute("data-scale", j), d.setAttribute("data-translate", k);
      var l = {
        top: h + "px",
        left: i + "px"
      };
      d.classList.add("waves-notransition"), d.setAttribute("style", g(l)), d.classList.remove("waves-notransition"), l["-webkit-transform"] = j + " " + k, l["-moz-transform"] = j + " " + k, l["-ms-transform"] = j + " " + k, l["-o-transform"] = j + " " + k, l.transform = j + " " + k, l.opacity = "1";
      var m = "mousemove" === a.type ? 2500 : o.duration;
      l["-webkit-transition-duration"] = m + "ms", l["-moz-transition-duration"] = m + "ms", l["-o-transition-duration"] = m + "ms", l["transition-duration"] = m + "ms", d.setAttribute("style", g(l));
    },
    hide: function hide(a, b) {
      b = b || this;

      for (var c = b.getElementsByClassName("waves-rippling"), d = 0, e = c.length; e > d; d++) {
        h(a, b, c[d]);
      }
    }
  },
      p = {
    input: function input(a) {
      var b = a.parentNode;

      if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");
        c.className = a.className + " waves-input-wrapper", a.className = "waves-button-input", b.replaceChild(c, a), c.appendChild(a);
        var d = window.getComputedStyle(a, null),
            e = d.color,
            f = d.backgroundColor;
        c.setAttribute("style", "color:" + e + ";background:" + f), a.setAttribute("style", "background-color:rgba(0,0,0,0);");
      }
    },
    img: function img(a) {
      var b = a.parentNode;

      if ("i" !== b.tagName.toLowerCase() || !b.classList.contains("waves-effect")) {
        var c = document.createElement("i");
        b.replaceChild(c, a), c.appendChild(a);
      }
    }
  },
      q = {
    touches: 0,
    allowEvent: function allowEvent(a) {
      var b = !0;
      return /^(mousedown|mousemove)$/.test(a.type) && q.touches && (b = !1), b;
    },
    registerEvent: function registerEvent(a) {
      var b = a.type;
      "touchstart" === b ? q.touches += 1 : /^(touchend|touchcancel)$/.test(b) && setTimeout(function () {
        q.touches && (q.touches -= 1);
      }, 500);
    }
  };
  return k.init = function (a) {
    var b = document.body;
    a = a || {}, "duration" in a && (o.duration = a.duration), "delay" in a && (o.delay = a.delay), n && (b.addEventListener("touchstart", j, !1), b.addEventListener("touchcancel", q.registerEvent, !1), b.addEventListener("touchend", q.registerEvent, !1)), b.addEventListener("mousedown", j, !1);
  }, k.attach = function (a, b) {
    a = e(a), "[object Array]" === m.call(b) && (b = b.join(" ")), b = b ? " " + b : "";

    for (var c, d, f = 0, g = a.length; g > f; f++) {
      c = a[f], d = c.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(d) && (p[d](c), c = c.parentElement), -1 === c.className.indexOf("waves-effect") && (c.className += " waves-effect" + b);
    }
  }, k.ripple = function (a, b) {
    a = e(a);
    var c = a.length;
    if (b = b || {}, b.wait = b.wait || 0, b.position = b.position || null, c) for (var d, g, h, i = {}, j = 0, k = {
      type: "mousedown",
      button: 1
    }, l = function l(a, b) {
      return function () {
        o.hide(a, b);
      };
    }; c > j; j++) {
      if (d = a[j], g = b.position || {
        x: d.clientWidth / 2,
        y: d.clientHeight / 2
      }, h = f(d), i.x = h.left + g.x, i.y = h.top + g.y, k.pageX = i.x, k.pageY = i.y, o.show(k, d), b.wait >= 0 && null !== b.wait) {
        var m = {
          type: "mouseup",
          button: 1
        };
        setTimeout(l(m, d), b.wait);
      }
    }
  }, k.calm = function (a) {
    a = e(a);

    for (var b = {
      type: "mouseup",
      button: 1
    }, c = 0, d = a.length; d > c; c++) {
      o.hide(b, a[c]);
    }
  }, k.displayEffect = function (a) {
    k.init(a);
  }, k;
});

/***/ }),

/***/ "./resources/template/assets/pages/widget/amchart/gauge.js":
/*!*****************************************************************!*\
  !*** ./resources/template/assets/pages/widget/amchart/gauge.js ***!
  \*****************************************************************/
/***/ (() => {

(function () {
  var d = window.AmCharts;
  d.GaugeAxis = d.Class({
    construct: function construct(a) {
      this.cname = "GaugeAxis";
      this.radius = "95%";
      this.createEvents("rollOverBand", "rollOutBand", "clickBand");
      this.labelsEnabled = !0;
      this.startAngle = -120;
      this.endAngle = 120;
      this.startValue = 0;
      this.endValue = 200;
      this.gridCount = 5;
      this.tickLength = 10;
      this.minorTickLength = 5;
      this.tickColor = "#555555";
      this.labelFrequency = this.tickThickness = this.tickAlpha = 1;
      this.inside = !0;
      this.labelOffset = 10;
      this.showLastLabel = this.showFirstLabel = !0;
      this.axisThickness = 1;
      this.axisColor = "#000000";
      this.axisAlpha = 1;
      this.gridInside = !0;
      this.topTextYOffset = 0;
      this.topTextBold = !0;
      this.bottomTextYOffset = 0;
      this.bottomTextBold = !0;
      this.centerY = this.centerX = "0%";
      this.bandOutlineAlpha = this.bandOutlineThickness = 0;
      this.bandOutlineColor = "#000000";
      this.bandAlpha = 1;
      this.bcn = "gauge-axis";
      d.applyTheme(this, a, "GaugeAxis");
    },
    value2angle: function value2angle(a) {
      return (a - this.startValue) / (this.endValue - this.startValue) * (this.endAngle - this.startAngle) + this.startAngle;
    },
    setTopText: function setTopText(a) {
      if (void 0 !== a) {
        this.topText = a;
        var b = this.chart;

        if (this.axisCreated) {
          this.topTF && this.topTF.remove();
          var c = this.topTextFontSize;
          c || (c = b.fontSize);
          var e = this.topTextColor;
          e || (e = b.color);
          a = d.text(b.container, a, e, b.fontFamily, c, void 0, this.topTextBold);
          d.setCN(b, a, "axis-top-label");
          a.translate(this.centerXReal, this.centerYReal - this.radiusReal / 2 + this.topTextYOffset);
          this.set.push(a);
          this.topTF = a;
        }
      }
    },
    setBottomText: function setBottomText(a) {
      if (void 0 !== a) {
        this.bottomText = a;
        var b = this.chart;

        if (this.axisCreated) {
          this.bottomTF && this.bottomTF.remove();
          var c = this.bottomTextFontSize;
          c || (c = b.fontSize);
          var e = this.bottomTextColor;
          e || (e = b.color);
          a = d.text(b.container, a, e, b.fontFamily, c, void 0, this.bottomTextBold);
          d.setCN(b, a, "axis-bottom-label");
          a.translate(this.centerXReal, this.centerYReal + this.radiusReal / 2 + this.bottomTextYOffset);
          this.bottomTF = a;
          this.set.push(a);
        }
      }
    },
    draw: function draw() {
      var a = this.chart,
          b = a.container.set();
      this.set = b;
      d.setCN(a, b, this.bcn);
      d.setCN(a, b, this.bcn + "-" + this.id);
      a.graphsSet.push(b);
      this.bandSet = a.container.set();
      this.set.push(this.bandSet);
      var c = this.startValue,
          e = this.endValue,
          g = this.valueInterval;
      isNaN(g) && (g = (e - c) / this.gridCount);
      var l = this.minorTickInterval;
      isNaN(l) && (l = g / 5);
      var n = this.startAngle,
          h = this.endAngle,
          k = this.tickLength,
          p = (e - c) / g + 1,
          f = (h - n) / (p - 1);
      this.singleValueAngle = f / g;
      var m = a.container,
          w = this.tickColor,
          z = this.tickAlpha,
          J = this.tickThickness,
          l = g / l,
          K = f / l,
          H = this.minorTickLength,
          I = this.labelFrequency,
          v = this.radiusReal;
      this.inside || (v -= 15);
      this.radiusRealReal = v;
      var A = a.centerX + d.toCoordinate(this.centerX, a.realWidth),
          B = a.centerY + d.toCoordinate(this.centerY, a.realHeight);
      this.centerXReal = A;
      this.centerYReal = B;
      var t = {
        fill: this.axisColor,
        "fill-opacity": this.axisAlpha,
        "stroke-width": 0,
        "stroke-opacity": 0
      },
          r,
          C;
      this.gridInside ? C = r = v : (r = v - k, C = r + H);
      this.minorTickRadius = C;
      this.drawBands();
      var q = this.axisThickness / 2,
          h = d.wedge(m, A, B, n, h - n, r + q, r + q, r - q, 0, t);
      d.setCN(a, h.wedge, "axis-line");
      b.push(h);
      h = d.doNothing;
      d.isModern || (h = Math.round);
      t = d.getDecimals(c);
      r = d.getDecimals(e);
      e = d.getDecimals(g);
      e = Math.max(e, t, r);
      g = d.roundTo(g, e + 1);

      for (t = 0; t < p; t++) {
        q = d.roundTo(c + t * g, e);
        r = n + t * f;
        var u = h(A + v * Math.sin(r / 180 * Math.PI)),
            F = h(B - v * Math.cos(r / 180 * Math.PI)),
            x = h(A + (v - k) * Math.sin(r / 180 * Math.PI)),
            y = h(B - (v - k) * Math.cos(r / 180 * Math.PI)),
            u = d.line(m, [u, x], [F, y], w, z, J, 0, !1, !1, !0);
        d.setCN(a, u, "axis-tick");
        b.push(u);
        u = -1;
        x = this.labelOffset;
        this.inside || (x = -x - k, u = 1);
        var F = A + (v - k - x) * Math.sin(r / 180 * Math.PI),
            x = B - (v - k - x) * Math.cos(r / 180 * Math.PI),
            D = this.fontSize;
        isNaN(D) && (D = a.fontSize);
        var y = Math.sin((r - 90) / 180 * Math.PI),
            L = Math.cos((r - 90) / 180 * Math.PI);

        if (0 < I && this.labelsEnabled && t / I == Math.round(t / I) && (this.showLastLabel || t != p - 1) && (this.showFirstLabel || 0 !== t)) {
          var E;
          E = this.usePrefixes ? d.addPrefix(q, a.prefixesOfBigNumbers, a.prefixesOfSmallNumbers, a.nf, !0) : d.formatNumber(q, a.nf, e);
          var G = this.unit;
          G && (E = "left" == this.unitPosition ? G + E : E + G);
          (G = this.labelFunction) && (E = G(q));
          q = this.color;
          void 0 === q && (q = a.color);
          q = d.text(m, E, q, a.fontFamily, D);
          d.setCN(a, q, "axis-label");
          D = q.getBBox();
          q.translate(F + u * D.width / 2 * L, x + u * D.height / 2 * y);
          b.push(q);
        }

        if (t < p - 1) for (q = 1; q < l; q++) {
          y = r + K * q, u = h(A + C * Math.sin(y / 180 * Math.PI)), F = h(B - C * Math.cos(y / 180 * Math.PI)), x = h(A + (C - H) * Math.sin(y / 180 * Math.PI)), y = h(B - (C - H) * Math.cos(y / 180 * Math.PI)), u = d.line(m, [u, x], [F, y], w, z, J, 0, !1, !1, !0), d.setCN(a, u, "axis-tick-minor"), b.push(u);
        }
      }

      this.axisCreated = !0;
      this.setTopText(this.topText);
      this.setBottomText(this.bottomText);
      a = a.graphsSet.getBBox();
      this.width = a.width;
      this.height = a.height;
    },
    drawBands: function drawBands() {
      var a = this.bands;
      if (a) for (var b = 0; b < a.length; b++) {
        var c = a[b];
        c && (c.axis = this, d.processObject(c, d.GaugeBand, this.theme), c.draw(c.startValue, c.endValue));
      }
    },
    fireEvent: function fireEvent(a, b, c) {
      this.fire({
        type: a,
        dataItem: b,
        chart: this,
        event: c
      });
    },
    addEventListeners: function addEventListeners(a, b) {
      var c = this,
          e = c.chart;
      a.mouseover(function (a) {
        e.showBalloon(b.balloonText, b.color, !0);
        c.fireEvent("rollOverBand", b, a);
      }).mouseout(function (a) {
        e.hideBalloon();
        c.fireEvent("rollOutBand", b, a);
      }).click(function (a) {
        c.fireEvent("clickBand", b, a);
        d.getURL(b.url, e.urlTarget);
      }).touchend(function (a) {
        c.fireEvent("clickBand", b, a);
        d.getURL(b.url, e.urlTarget);
      });
    }
  });
})();

(function () {
  var d = window.AmCharts;
  d.GaugeArrow = d.Class({
    construct: function construct(a) {
      this.cname = "GaugeArrow";
      this.color = "#000000";
      this.nailAlpha = this.alpha = 1;
      this.startWidth = this.nailRadius = 8;
      this.endWidth = 0;
      this.borderAlpha = 1;
      this.radius = "90%";
      this.nailBorderAlpha = this.innerRadius = 0;
      this.nailBorderThickness = 1;
      this.frame = 0;
      d.applyTheme(this, a, "GaugeArrow");
    },
    setValue: function setValue(a) {
      var b = this.chart;
      b ? b.setValue ? b.setValue(this, a) : this.previousValue = this.value = a : this.previousValue = this.value = a;
    }
  });
  d.GaugeBand = d.Class({
    construct: function construct() {
      this.cname = "GaugeBand";
      this.frame = 0;
    },
    draw: function draw(a, b) {
      var c = this.axis;
      this.bandGraphics && this.bandGraphics.remove();
      var e = c.chart,
          g = c.startAngle,
          l = c.radiusRealReal,
          n = c.singleValueAngle,
          h = e.container,
          k = c.minorTickLength,
          p = d.toCoordinate(this.radius, l);
      isNaN(p) && (p = c.minorTickRadius);
      l = d.toCoordinate(this.innerRadius, l);
      isNaN(l) && (l = p - k);
      var g = g + n * (a - c.startValue),
          k = n * (b - a),
          f = this.outlineColor;
      void 0 === f && (f = c.bandOutlineColor);
      var m = this.outlineThickness;
      isNaN(m) && (m = c.bandOutlineThickness);
      var w = this.outlineAlpha;
      isNaN(w) && (w = c.bandOutlineAlpha);
      n = this.alpha;
      isNaN(n) && (n = c.bandAlpha);
      f = {
        fill: this.color,
        stroke: f,
        "stroke-width": m,
        "stroke-opacity": w
      };
      this.url && (f.cursor = "pointer");
      m = this.gradientRatio;
      m || (m = c.bandMegaRatio);
      h = d.wedge(h, c.centerXReal, c.centerYReal, g, k, p, p, l, 0, f, m, void 0, void 0, "radial");
      d.setCN(e, h.wedge, "axis-band");
      void 0 !== this.id && d.setCN(e, h.wedge, "axis-band-" + this.id);
      h.setAttr("opacity", n);
      c.bandSet.push(h);
      this.bandGraphics = h;
      this.currentStartValue = a;
      this.currentEndValue = b;
      c.addEventListeners(h, this);
    },
    update: function update() {
      var a = this.axis,
          b = a.chart;

      if (a && a.value2angle) {
        if (this.frame >= b.totalFrames) b = this.endValue, a = this.startValue;else {
          this.frame++;
          var c = d.getEffect(b.startEffect),
              a = d[c](0, this.frame, this.previousStartValue, this.startValue - this.previousStartValue, b.totalFrames),
              b = d[c](0, this.frame, this.previousEndValue, this.endValue - this.previousEndValue, b.totalFrames);
          isNaN(a) && (a = this.startValue);
          isNaN(b) && (b = this.endValue);
        }
        a == this.currentStartValue && b == this.currentEndValue || this.draw(a, b);
      }
    },
    setStartValue: function setStartValue(a) {
      this.previousStartValue = this.startValue;
      this.startValue = a;
      this.frame = 0;
    },
    setEndValue: function setEndValue(a) {
      this.previousEndValue = this.endValue;
      this.endValue = a;
      this.frame = 0;
    }
  });
})();

(function () {
  var d = window.AmCharts;
  d.AmAngularGauge = d.Class({
    inherits: d.AmChart,
    construct: function construct(a) {
      this.cname = "AmAngularGauge";
      d.AmAngularGauge.base.construct.call(this, a);
      this.theme = a;
      this.type = "gauge";
      this.minRadius = this.marginRight = this.marginBottom = this.marginTop = this.marginLeft = 10;
      this.faceColor = "#FAFAFA";
      this.faceAlpha = 0;
      this.faceBorderWidth = 1;
      this.faceBorderColor = "#555555";
      this.faceBorderAlpha = 0;
      this.arrows = [];
      this.axes = [];
      this.startDuration = 1;
      this.startEffect = "easeOutSine";
      this.adjustSize = !0;
      this.extraHeight = this.extraWidth = 0;
      d.applyTheme(this, a, this.cname);
    },
    addAxis: function addAxis(a) {
      a.chart = this;
      this.axes.push(a);
    },
    formatString: function formatString(a, b) {
      return a = d.formatValue(a, b, ["value"], this.nf, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
    },
    initChart: function initChart() {
      d.AmAngularGauge.base.initChart.call(this);
      var a;
      0 === this.axes.length && (a = new d.GaugeAxis(this.theme), this.addAxis(a));
      var b;

      for (b = 0; b < this.axes.length; b++) {
        a = this.axes[b], a = d.processObject(a, d.GaugeAxis, this.theme), a.id || (a.id = "axisAuto" + b + "_" + new Date().getTime()), a.chart = this, this.axes[b] = a;
      }

      var c = this.arrows;

      for (b = 0; b < c.length; b++) {
        a = c[b];
        a = d.processObject(a, d.GaugeArrow, this.theme);
        a.id || (a.id = "arrowAuto" + b + "_" + new Date().getTime());
        a.chart = this;
        c[b] = a;
        var e = a.axis;
        d.isString(e) && (a.axis = d.getObjById(this.axes, e));
        a.axis || (a.axis = this.axes[0]);
        isNaN(a.value) && a.setValue(a.axis.startValue);
        isNaN(a.previousValue) && (a.previousValue = a.axis.startValue);
      }

      this.setLegendData(c);
      this.drawChart();
      this.totalFrames = this.startDuration * d.updateRate;
    },
    drawChart: function drawChart() {
      d.AmAngularGauge.base.drawChart.call(this);
      var a = this.container,
          b = this.updateWidth();
      this.realWidth = b;
      var c = this.updateHeight();
      this.realHeight = c;
      var e = d.toCoordinate,
          g = e(this.marginLeft, b),
          l = e(this.marginRight, b),
          n = e(this.marginTop, c) + this.getTitleHeight(),
          h = e(this.marginBottom, c),
          k = e(this.radius, b, c),
          e = b - g - l,
          p = c - n - h + this.extraHeight;
      k || (k = Math.min(e, p) / 2);
      k < this.minRadius && (k = this.minRadius);
      this.radiusReal = k;
      this.centerX = (b - g - l) / 2 + g;
      this.centerY = (c - n - h) / 2 + n + this.extraHeight / 2;
      isNaN(this.gaugeX) || (this.centerX = this.gaugeX);
      isNaN(this.gaugeY) || (this.centerY = this.gaugeY);
      var b = this.faceAlpha,
          c = this.faceBorderAlpha,
          f;
      if (0 < b || 0 < c) f = d.circle(a, k, this.faceColor, b, this.faceBorderWidth, this.faceBorderColor, c, !1), f.translate(this.centerX, this.centerY), f.toBack(), (a = this.facePattern) && f.pattern(a, NaN, this.path);

      for (b = k = a = 0; b < this.axes.length; b++) {
        c = this.axes[b], g = c.radius, c.radiusReal = d.toCoordinate(g, this.radiusReal), c.draw(), l = 1, -1 !== String(g).indexOf("%") && (l = 1 + (100 - Number(g.substr(0, g.length - 1))) / 100), c.width * l > a && (a = c.width * l), c.height * l > k && (k = c.height * l);
      }

      (b = this.legend) && b.invalidateSize();

      if (this.adjustSize && !this.sizeAdjusted) {
        f && (f = f.getBBox(), f.width > a && (a = f.width), f.height > k && (k = f.height));
        f = 0;
        if (p > k || e > a) f = Math.min(p - k, e - a);
        5 < f && (this.extraHeight = f, this.sizeAdjusted = !0, this.validateNow());
      }

      e = this.arrows.length;

      for (b = 0; b < e; b++) {
        p = this.arrows[b], p.drawnAngle = NaN;
      }

      this.dispDUpd();
    },
    validateSize: function validateSize() {
      this.extraHeight = this.extraWidth = 0;
      this.chartCreated = this.sizeAdjusted = !1;
      d.AmAngularGauge.base.validateSize.call(this);
    },
    addArrow: function addArrow(a) {
      this.arrows.push(a);
    },
    removeArrow: function removeArrow(a) {
      d.removeFromArray(this.arrows, a);
      this.validateNow();
    },
    removeAxis: function removeAxis(a) {
      d.removeFromArray(this.axes, a);
      this.validateNow();
    },
    drawArrow: function drawArrow(a, b) {
      a.set && a.set.remove();
      var c = this.container;
      a.set = c.set();
      d.setCN(this, a.set, "gauge-arrow");
      d.setCN(this, a.set, "gauge-arrow-" + a.id);
      var e = a.axis,
          g = e.radiusReal,
          l = e.centerXReal,
          n = e.centerYReal,
          h = a.startWidth,
          k = a.endWidth,
          p = d.toCoordinate(a.innerRadius, e.radiusReal),
          f = d.toCoordinate(a.radius, e.radiusReal);
      e.inside || (f -= 15);
      var m = a.nailColor;
      m || (m = a.color);
      var w = a.nailColor;
      w || (w = a.color);
      0 < a.nailRadius && (m = d.circle(c, a.nailRadius, m, a.nailAlpha, a.nailBorderThickness, m, a.nailBorderAlpha), d.setCN(this, m, "gauge-arrow-nail"), a.set.push(m), m.translate(l, n));
      isNaN(f) && (f = g - e.tickLength);
      var e = Math.sin(b / 180 * Math.PI),
          g = Math.cos(b / 180 * Math.PI),
          m = Math.sin((b + 90) / 180 * Math.PI),
          z = Math.cos((b + 90) / 180 * Math.PI),
          c = d.polygon(c, [l - h / 2 * m + p * e, l + f * e - k / 2 * m, l + f * e + k / 2 * m, l + h / 2 * m + p * e], [n + h / 2 * z - p * g, n - f * g + k / 2 * z, n - f * g - k / 2 * z, n - h / 2 * z - p * g], a.color, a.alpha, 1, w, a.borderAlpha, void 0, !0);
      d.setCN(this, c, "gauge-arrow");
      a.set.push(c);
      this.graphsSet.push(a.set);
      a.hidden && this.hideArrow(a);
    },
    setValue: function setValue(a, b) {
      a.axis && a.axis.value2angle && (a.frame = 0, a.previousValue = a.value);
      a.value = b;
      var c = this.legend;
      c && c.updateValues();
      this.accessible && this.background && this.makeAccessible(this.background, b);
    },
    handleLegendEvent: function handleLegendEvent(a) {
      var b = a.type;
      a = a.dataItem;
      if (!this.legend.data && a) switch (b) {
        case "hideItem":
          this.hideArrow(a);
          break;

        case "showItem":
          this.showArrow(a);
      }
    },
    hideArrow: function hideArrow(a) {
      a.set.hide();
      a.hidden = !0;
      this.legend && this.legend.invalidateSize();
    },
    showArrow: function showArrow(a) {
      a.set.show();
      a.hidden = !1;
      this.legend && this.legend.invalidateSize();
    },
    updateAnimations: function updateAnimations() {
      d.AmAngularGauge.base.updateAnimations.call(this);

      for (var a = this.arrows.length, b, c, e = 0; e < a; e++) {
        b = this.arrows[e], b.axis && b.axis.value2angle && (b.frame >= this.totalFrames ? c = b.value : (b.frame++, b.clockWiseOnly && b.value < b.previousValue && (c = b.axis, b.previousValue -= c.endValue - c.startValue), c = d.getEffect(this.startEffect), c = d[c](0, b.frame, b.previousValue, b.value - b.previousValue, this.totalFrames), isNaN(c) && (c = b.value)), c = b.axis.value2angle(c), b.drawnAngle != c && (this.drawArrow(b, c), b.drawnAngle = c));
      }

      a = this.axes;

      for (b = a.length - 1; 0 <= b; b--) {
        if (c = a[b], c.bands) for (e = c.bands.length - 1; 0 <= e; e--) {
          var g = c.bands[e];
          g.update && g.update();
        }
      }
    }
  });
})();

/***/ }),

/***/ "./resources/template/assets/pages/widget/amchart/light.js":
/*!*****************************************************************!*\
  !*** ./resources/template/assets/pages/widget/amchart/light.js ***!
  \*****************************************************************/
/***/ (() => {

AmCharts.themes.light = {
  themeName: "light",
  AmChart: {
    color: "#000000",
    backgroundColor: "#FFFFFF"
  },
  AmCoordinateChart: {
    colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
  },
  AmStockChart: {
    colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"]
  },
  AmSlicedChart: {
    colors: ["#67b7dc", "#fdd400", "#84b761", "#cc4748", "#cd82ad", "#2f4074", "#448e4d", "#b7b83f", "#b9783f", "#b93e3d", "#913167"],
    outlineAlpha: 1,
    outlineThickness: 2,
    labelTickColor: "#000000",
    labelTickAlpha: 0.3
  },
  AmRectangularChart: {
    zoomOutButtonColor: '#000000',
    zoomOutButtonRollOverAlpha: 0.15,
    zoomOutButtonImage: "lens"
  },
  AxisBase: {
    axisColor: "#000000",
    axisAlpha: 0.3,
    gridAlpha: 0.1,
    gridColor: "#000000"
  },
  ChartScrollbar: {
    backgroundColor: "#000000",
    backgroundAlpha: 0.12,
    graphFillAlpha: 0.5,
    graphLineAlpha: 0,
    selectedBackgroundColor: "#FFFFFF",
    selectedBackgroundAlpha: 0.4,
    gridAlpha: 0.15
  },
  ChartCursor: {
    cursorColor: "#000000",
    color: "#FFFFFF",
    cursorAlpha: 0.5
  },
  AmLegend: {
    color: "#000000"
  },
  AmGraph: {
    lineAlpha: 0.9
  },
  GaugeArrow: {
    color: "#000000",
    alpha: 0.8,
    nailAlpha: 0,
    innerRadius: "40%",
    nailRadius: 15,
    startWidth: 15,
    borderAlpha: 0.8,
    nailBorderAlpha: 0
  },
  GaugeAxis: {
    tickColor: "#000000",
    tickAlpha: 1,
    tickLength: 15,
    minorTickLength: 8,
    axisThickness: 3,
    axisColor: '#000000',
    axisAlpha: 1,
    bandAlpha: 0.8
  },
  TrendLine: {
    lineColor: "#c03246",
    lineAlpha: 0.8
  },
  AreasSettings: {
    alpha: 0.8,
    color: "#67b7dc",
    colorSolid: "#003767",
    unlistedAreasAlpha: 0.4,
    unlistedAreasColor: "#000000",
    outlineColor: "#FFFFFF",
    outlineAlpha: 0.5,
    outlineThickness: 0.5,
    rollOverColor: "#3c5bdc",
    rollOverOutlineColor: "#FFFFFF",
    selectedOutlineColor: "#FFFFFF",
    selectedColor: "#f15135",
    unlistedAreasOutlineColor: "#FFFFFF",
    unlistedAreasOutlineAlpha: 0.5
  },
  LinesSettings: {
    color: "#000000",
    alpha: 0.8
  },
  ImagesSettings: {
    alpha: 0.8,
    labelColor: "#000000",
    color: "#000000",
    labelRollOverColor: "#3c5bdc"
  },
  ZoomControl: {
    buttonFillAlpha: 0.7,
    buttonIconColor: "#a7a7a7"
  },
  SmallMap: {
    mapColor: "#000000",
    rectangleColor: "#f15135",
    backgroundColor: "#FFFFFF",
    backgroundAlpha: 0.7,
    borderThickness: 1,
    borderAlpha: 0.8
  },
  PeriodSelector: {
    color: "#000000"
  },
  PeriodButton: {
    color: "#000000",
    background: "transparent",
    opacity: 0.7,
    border: "1px solid rgba(0, 0, 0, .3)",
    MozBorderRadius: "5px",
    borderRadius: "5px",
    margin: "1px",
    outline: "none",
    boxSizing: "border-box"
  },
  PeriodButtonSelected: {
    color: "#000000",
    backgroundColor: "#b9cdf5",
    border: "1px solid rgba(0, 0, 0, .3)",
    MozBorderRadius: "5px",
    borderRadius: "5px",
    margin: "1px",
    outline: "none",
    opacity: 1,
    boxSizing: "border-box"
  },
  PeriodInputField: {
    color: "#000000",
    background: "transparent",
    border: "1px solid rgba(0, 0, 0, .3)",
    outline: "none"
  },
  DataSetSelector: {
    color: "#000000",
    selectedBackgroundColor: "#b9cdf5",
    rollOverBackgroundColor: "#a8b0e4"
  },
  DataSetCompareList: {
    color: "#000000",
    lineHeight: "100%",
    boxSizing: "initial",
    webkitBoxSizing: "initial",
    border: "1px solid rgba(0, 0, 0, .3)"
  },
  DataSetSelect: {
    border: "1px solid rgba(0, 0, 0, .3)",
    outline: "none"
  }
};

/***/ }),

/***/ "./resources/template/assets/pages/widget/amchart/pie.min.js":
/*!*******************************************************************!*\
  !*** ./resources/template/assets/pages/widget/amchart/pie.min.js ***!
  \*******************************************************************/
/***/ (() => {

(function () {
  var a = window.AmCharts;
  a.AmSlicedChart = a.Class({
    inherits: a.AmChart,
    construct: function construct(b) {
      this.createEvents("rollOverSlice", "rollOutSlice", "clickSlice", "pullOutSlice", "pullInSlice", "rightClickSlice");
      a.AmSlicedChart.base.construct.call(this, b);
      this.colors = "#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");
      this.alpha = 1;
      this.groupPercent = 0;
      this.groupedTitle = "Other";
      this.groupedPulled = !1;
      this.groupedAlpha = 1;
      this.marginLeft = 0;
      this.marginBottom = this.marginTop = 10;
      this.marginRight = 0;
      this.hoverAlpha = 1;
      this.outlineColor = "#FFFFFF";
      this.outlineAlpha = 0;
      this.outlineThickness = 1;
      this.startAlpha = 0;
      this.startDuration = 1;
      this.startEffect = "bounce";
      this.sequencedAnimation = !0;
      this.pullOutDuration = 1;
      this.pullOutEffect = "bounce";
      this.pullOnHover = this.pullOutOnlyOne = !1;
      this.labelsEnabled = !0;
      this.labelTickColor = "#000000";
      this.labelTickAlpha = 0.2;
      this.hideLabelsPercent = 0;
      this.urlTarget = "_self";
      this.autoMarginOffset = 10;
      this.gradientRatio = [];
      this.maxLabelWidth = 200;
      this.accessibleLabel = "[[title]]: [[percents]]% [[value]] [[description]]";
      a.applyTheme(this, b, "AmSlicedChart");
    },
    initChart: function initChart() {
      a.AmSlicedChart.base.initChart.call(this);
      this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, this.setLegendData(this.chartData));
      this.drawChart();
    },
    handleLegendEvent: function handleLegendEvent(f) {
      var e = f.type,
          j = f.dataItem,
          i = this.legend;

      if (j.wedge && j) {
        var h = j.hidden;
        f = f.event;

        switch (e) {
          case "clickMarker":
            h || i.switchable || this.clickSlice(j, f);
            break;

          case "clickLabel":
            h || this.clickSlice(j, f, !1);
            break;

          case "rollOverItem":
            h || this.rollOverSlice(j, !1, f);
            break;

          case "rollOutItem":
            h || this.rollOutSlice(j, f);
            break;

          case "hideItem":
            this.hideSlice(j, f);
            break;

          case "showItem":
            this.showSlice(j, f);
        }
      }
    },
    invalidateVisibility: function invalidateVisibility() {
      this.recalculatePercents();
      this.initChart();
      var b = this.legend;
      b && b.invalidateSize();
    },
    addEventListeners: function addEventListeners(e, d) {
      var f = this;
      e.mouseover(function (b) {
        f.rollOverSlice(d, !0, b);
      }).mouseout(function (b) {
        f.rollOutSlice(d, b);
      }).touchend(function (b) {
        f.rollOverSlice(d, b);
      }).mouseup(function (b) {
        f.clickSlice(d, b);
      }).contextmenu(function (b) {
        f.handleRightClick(d, b);
      });
    },
    formatString: function formatString(f, e, h) {
      f = a.formatValue(f, e, ["value"], this.nf, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
      var g = this.pf.precision;
      isNaN(this.tempPrec) || (this.pf.precision = this.tempPrec);
      f = a.formatValue(f, e, ["percents"], this.pf);
      f = a.massReplace(f, {
        "[[title]]": e.title,
        "[[description]]": e.description
      });
      this.pf.precision = g;
      -1 != f.indexOf("[[") && (f = a.formatDataContextValue(f, e.dataContext));
      f = h ? a.fixNewLines(f) : a.fixBrakes(f);
      return f = a.cleanFromEmpty(f);
    },
    startSlices: function startSlices() {
      var b;

      for (b = 0; b < this.chartData.length; b++) {
        0 < this.startDuration && this.sequencedAnimation ? this.setStartTO(b) : this.startSlice(this.chartData[b]);
      }
    },
    setStartTO: function setStartTO(d) {
      var c = this;
      d = setTimeout(function () {
        c.startSequenced.call(c);
      }, c.startDuration / c.chartData.length * 500 * d);
      c.timeOuts.push(d);
    },
    pullSlices: function pullSlices(f) {
      var e = this.chartData,
          h;

      for (h = 0; h < e.length; h++) {
        var g = e[h];
        g.pulled && this.pullSlice(g, 1, f);
      }
    },
    startSequenced: function startSequenced() {
      var d = this.chartData,
          c;

      for (c = 0; c < d.length; c++) {
        if (!d[c].started) {
          this.startSlice(this.chartData[c]);
          break;
        }
      }
    },
    startSlice: function startSlice(f) {
      f.started = !0;
      var e = f.wedge,
          h = this.startDuration,
          g = f.labelSet;
      e && 0 < h && (0 < f.alpha && e.show(), e.translate(f.startX, f.startY), this.animatable.push(e), e.animate({
        opacity: 1,
        translate: "0,0"
      }, h, this.startEffect));
      g && 0 < h && (0 < f.alpha && g.show(), g.translate(f.startX, f.startY), g.animate({
        opacity: 1,
        translate: "0,0"
      }, h, this.startEffect));
    },
    showLabels: function showLabels() {
      var f = this.chartData,
          e;

      for (e = 0; e < f.length; e++) {
        var h = f[e];

        if (0 < h.alpha) {
          var g = h.label;
          g && g.show();
          (h = h.tick) && h.show();
        }
      }
    },
    showSlice: function showSlice(b) {
      isNaN(b) ? b.hidden = !1 : this.chartData[b].hidden = !1;
      this.invalidateVisibility();
    },
    hideSlice: function hideSlice(b) {
      isNaN(b) ? b.hidden = !0 : this.chartData[b].hidden = !0;
      this.hideBalloon();
      this.invalidateVisibility();
    },
    rollOverSlice: function rollOverSlice(i, e, n) {
      isNaN(i) || (i = this.chartData[i]);
      clearTimeout(this.hoverInt);

      if (!i.hidden) {
        this.pullOnHover && this.pullSlice(i, 1);
        1 > this.hoverAlpha && i.wedge && i.wedge.attr({
          opacity: this.hoverAlpha
        });
        var m = i.balloonX,
            k = i.balloonY;
        i.pulled && (m += i.pullX, k += i.pullY);
        var l = this.formatString(this.balloonText, i, !0),
            j = this.balloonFunction;
        j && (l = j(i, l));
        j = a.adjustLuminosity(i.color, -0.15);
        l ? this.showBalloon(l, j, e, m, k) : this.hideBalloon();
        0 === i.value && this.hideBalloon();
        this.fire({
          type: "rollOverSlice",
          dataItem: i,
          chart: this,
          event: n
        });
      }
    },
    rollOutSlice: function rollOutSlice(d, c) {
      isNaN(d) || (d = this.chartData[d]);
      d.wedge && d.wedge.attr({
        opacity: 1
      });
      this.hideBalloon();
      this.fire({
        type: "rollOutSlice",
        dataItem: d,
        chart: this,
        event: c
      });
    },
    clickSlice: function clickSlice(e, d, f) {
      this.checkTouchDuration(d) && (isNaN(e) || (e = this.chartData[e]), e.pulled ? this.pullSlice(e, 0) : this.pullSlice(e, 1), a.getURL(e.url, this.urlTarget), f || this.fire({
        type: "clickSlice",
        dataItem: e,
        chart: this,
        event: d
      }));
    },
    handleRightClick: function handleRightClick(d, c) {
      isNaN(d) || (d = this.chartData[d]);
      this.fire({
        type: "rightClickSlice",
        dataItem: d,
        chart: this,
        event: c
      });
    },
    drawTicks: function drawTicks() {
      var f = this.chartData,
          e;

      for (e = 0; e < f.length; e++) {
        var h = f[e];

        if (h.label && !h.skipTick) {
          var g = h.ty,
              g = a.line(this.container, [h.tx0, h.tx, h.tx2], [h.ty0, g, g], this.labelTickColor, this.labelTickAlpha);
          a.setCN(this, g, this.type + "-tick");
          a.setCN(this, g, h.className, !0);
          h.tick = g;
          h.wedge.push(g);
          "AmFunnelChart" == this.cname && g.toBack();
        }
      }
    },
    initialStart: function initialStart() {
      var e = this,
          d = e.startDuration,
          f = setTimeout(function () {
        e.showLabels.call(e);
      }, 1000 * d);
      e.timeOuts.push(f);
      e.chartCreated ? e.pullSlices(!0) : (e.startSlices(), 0 < d ? (d = setTimeout(function () {
        e.pullSlices.call(e);
      }, 1200 * d), e.timeOuts.push(d)) : e.pullSlices(!0));
    },
    pullSlice: function pullSlice(f, e, h) {
      var g = this.pullOutDuration;
      !0 === h && (g = 0);

      if (h = f.wedge) {
        0 < g ? (h.animate({
          translate: e * f.pullX + "," + e * f.pullY
        }, g, this.pullOutEffect), f.labelSet && f.labelSet.animate({
          translate: e * f.pullX + "," + e * f.pullY
        }, g, this.pullOutEffect)) : (f.labelSet && f.labelSet.translate(e * f.pullX, e * f.pullY), h.translate(e * f.pullX, e * f.pullY));
      }

      1 == e ? (f.pulled = !0, this.pullOutOnlyOne && this.pullInAll(f.index), f = {
        type: "pullOutSlice",
        dataItem: f,
        chart: this
      }) : (f.pulled = !1, f = {
        type: "pullInSlice",
        dataItem: f,
        chart: this
      });
      this.fire(f);
    },
    pullInAll: function pullInAll(e) {
      var d = this.chartData,
          f;

      for (f = 0; f < this.chartData.length; f++) {
        f != e && d[f].pulled && this.pullSlice(d[f], 0);
      }
    },
    pullOutAll: function pullOutAll() {
      var d = this.chartData,
          c;

      for (c = 0; c < d.length; c++) {
        d[c].pulled || this.pullSlice(d[c], 1);
      }
    },
    parseData: function parseData() {
      var j = [];
      this.chartData = j;
      var i = this.dataProvider;
      isNaN(this.pieAlpha) || (this.alpha = this.pieAlpha);

      if (void 0 !== i) {
        var p = i.length,
            o = 0,
            l,
            m,
            k;

        for (l = 0; l < p; l++) {
          m = {};
          var n = i[l];
          m.dataContext = n;
          null !== n[this.valueField] && (m.value = Number(n[this.valueField]));
          (k = n[this.titleField]) || (k = "");
          m.title = k;
          m.pulled = a.toBoolean(n[this.pulledField], !1);
          (k = n[this.descriptionField]) || (k = "");
          m.description = k;
          m.labelRadius = Number(n[this.labelRadiusField]);
          m.switchable = !0;
          m.className = n[this.classNameField];
          m.url = n[this.urlField];
          k = n[this.patternField];
          !k && this.patterns && (k = this.patterns[l]);
          m.pattern = k;
          m.visibleInLegend = a.toBoolean(n[this.visibleInLegendField], !0);
          k = n[this.alphaField];
          m.alpha = void 0 !== k ? Number(k) : this.alpha;
          k = n[this.colorField];
          void 0 !== k && (m.color = k);
          m.labelColor = a.toColor(n[this.labelColorField]);
          o += m.value;
          m.hidden = !1;
          j[l] = m;
        }

        for (l = i = 0; l < p; l++) {
          m = j[l], m.percents = m.value / o * 100, m.percents < this.groupPercent && i++;
        }

        1 < i && (this.groupValue = 0, this.removeSmallSlices(), j.push({
          title: this.groupedTitle,
          value: this.groupValue,
          percents: this.groupValue / o * 100,
          pulled: this.groupedPulled,
          color: this.groupedColor,
          url: this.groupedUrl,
          description: this.groupedDescription,
          alpha: this.groupedAlpha,
          pattern: this.groupedPattern,
          className: this.groupedClassName,
          dataContext: {}
        }));
        p = this.baseColor;
        p || (p = this.pieBaseColor);
        o = this.brightnessStep;
        o || (o = this.pieBrightnessStep);

        for (l = 0; l < j.length; l++) {
          p ? k = a.adjustLuminosity(p, l * o / 100) : (k = this.colors[l], void 0 === k && (k = a.randomColor())), void 0 === j[l].color && (j[l].color = k);
        }

        this.recalculatePercents();
      }
    },
    recalculatePercents: function recalculatePercents() {
      var f = this.chartData,
          e = 0,
          h,
          g;

      for (h = 0; h < f.length; h++) {
        g = f[h], !g.hidden && 0 < g.value && (e += g.value);
      }

      for (h = 0; h < f.length; h++) {
        g = this.chartData[h], g.percents = !g.hidden && 0 < g.value ? 100 * g.value / e : 0;
      }
    },
    removeSmallSlices: function removeSmallSlices() {
      var d = this.chartData,
          c;

      for (c = d.length - 1; 0 <= c; c--) {
        d[c].percents < this.groupPercent && (this.groupValue += d[c].value, d.splice(c, 1));
      }
    },
    animateAgain: function animateAgain() {
      var f = this;
      f.startSlices();

      for (var e = 0; e < f.chartData.length; e++) {
        var h = f.chartData[e];
        h.started = !1;
        var g = h.wedge;
        g && (g.setAttr("opacity", f.startAlpha), g.translate(h.startX, h.startY));

        if (g = h.labelSet) {
          g.setAttr("opacity", f.startAlpha), g.translate(h.startX, h.startY);
        }
      }

      e = f.startDuration;
      0 < e ? (e = setTimeout(function () {
        f.pullSlices.call(f);
      }, 1200 * e), f.timeOuts.push(e)) : f.pullSlices();
    },
    measureMaxLabel: function measureMaxLabel() {
      var h = this.chartData,
          e = 0,
          l;

      for (l = 0; l < h.length; l++) {
        var k = h[l],
            i = this.formatString(this.labelText, k),
            j = this.labelFunction;
        j && (i = j(k, i));
        k = a.text(this.container, i, this.color, this.fontFamily, this.fontSize);
        i = k.getBBox().width;
        i > e && (e = i);
        k.remove();
      }

      return e;
    }
  });
})();

(function () {
  var a = window.AmCharts;
  a.AmPieChart = a.Class({
    inherits: a.AmSlicedChart,
    construct: function construct(b) {
      this.type = "pie";
      a.AmPieChart.base.construct.call(this, b);
      this.cname = "AmPieChart";
      this.pieBrightnessStep = 30;
      this.minRadius = 10;
      this.depth3D = 0;
      this.startAngle = 90;
      this.angle = this.innerRadius = 0;
      this.startRadius = "500%";
      this.pullOutRadius = "20%";
      this.labelRadius = 20;
      this.labelText = "[[title]]: [[percents]]%";
      this.balloonText = "[[title]]: [[percents]]% ([[value]])\n[[description]]";
      this.previousScale = 1;
      this.adjustPrecision = !1;
      this.gradientType = "radial";
      a.applyTheme(this, b, this.cname);
    },
    drawChart: function drawChart() {
      a.AmPieChart.base.drawChart.call(this);
      var Z = this.chartData;

      if (a.ifArray(Z)) {
        if (0 < this.realWidth && 0 < this.realHeight) {
          a.VML && (this.startAlpha = 1);
          var Y = this.startDuration,
              X = this.container,
              W = this.updateWidth();
          this.realWidth = W;
          var T = this.updateHeight();
          this.realHeight = T;
          var U = a.toCoordinate,
              S = U(this.marginLeft, W),
              V = U(this.marginRight, W),
              i = U(this.marginTop, T) + this.getTitleHeight(),
              P = U(this.marginBottom, T) + this.depth3D,
              O,
              L,
              Q,
              o = a.toNumber(this.labelRadius),
              M = this.measureMaxLabel();
          M > this.maxLabelWidth && (M = this.maxLabelWidth);
          this.labelText && this.labelsEnabled || (o = M = 0);
          O = void 0 === this.pieX ? (W - S - V) / 2 + S : U(this.pieX, this.realWidth);
          L = void 0 === this.pieY ? (T - i - P) / 2 + i : U(this.pieY, T);
          Q = U(this.radius, W, T);
          Q || (W = 0 <= o ? W - S - V - 2 * M : W - S - V, T = T - i - P, Q = Math.min(W, T), T < W && (Q /= 1 - this.angle / 90, Q > W && (Q = W)), T = a.toCoordinate(this.pullOutRadius, Q), Q = (0 <= o ? Q - 1.8 * (o + T) : Q - 1.8 * T) / 2);
          Q < this.minRadius && (Q = this.minRadius);
          T = U(this.pullOutRadius, Q);
          i = a.toCoordinate(this.startRadius, Q);
          U = U(this.innerRadius, Q);
          U >= Q && (U = Q - 1);
          P = a.fitToBounds(this.startAngle, 0, 360);
          0 < this.depth3D && (P = 270 <= P ? 270 : 90);
          P -= 90;
          360 < P && (P -= 360);
          W = Q - Q * this.angle / 90;

          for (S = M = 0; S < Z.length; S++) {
            V = Z[S], !0 !== V.hidden && (M += a.roundTo(V.percents, this.pf.precision));
          }

          M = a.roundTo(M, this.pf.precision);
          this.tempPrec = NaN;
          this.adjustPrecision && 100 != M && (this.tempPrec = this.pf.precision + 1);

          for (var H, S = 0; S < Z.length; S++) {
            if (V = Z[S], !0 !== V.hidden && (this.showZeroSlices || 0 !== V.percents)) {
              var K = 360 * V.percents / 100,
                  M = Math.sin((P + K / 2) / 180 * Math.PI),
                  J = W / Q * -Math.cos((P + K / 2) / 180 * Math.PI),
                  N = this.outlineColor;
              N || (N = V.color);
              var F = this.alpha;
              isNaN(V.alpha) || (F = V.alpha);
              N = {
                fill: V.color,
                stroke: N,
                "stroke-width": this.outlineThickness,
                "stroke-opacity": this.outlineAlpha,
                "fill-opacity": F
              };
              V.url && (N.cursor = "pointer");
              N = a.wedge(X, O, L, P, K, Q, W, U, this.depth3D, N, this.gradientRatio, V.pattern, this.path, this.gradientType);
              a.setCN(this, N, "pie-item");
              a.setCN(this, N.wedge, "pie-slice");
              a.setCN(this, N, V.className, !0);
              this.addEventListeners(N, V);
              V.startAngle = P;
              Z[S].wedge = N;
              0 < Y && (this.chartCreated || N.setAttr("opacity", this.startAlpha));
              V.ix = M;
              V.iy = J;
              V.wedge = N;
              V.index = S;
              V.label = null;
              F = X.set();

              if (this.labelsEnabled && this.labelText && V.percents >= this.hideLabelsPercent) {
                var R = P + K / 2;
                0 > R && (R += 360);
                360 < R && (R -= 360);
                var G = o;
                isNaN(V.labelRadius) || (G = V.labelRadius, 0 > G && (V.skipTick = !0));
                var K = O + M * (Q + G),
                    I = L + J * (Q + G),
                    k,
                    s = 0;
                isNaN(H) && 350 < R && 1 < Z.length - S && (H = S - 1 + Math.floor((Z.length - S) / 2));

                if (0 <= G) {
                  var j;
                  90 >= R && 0 <= R ? (j = 0, k = "start", s = 8) : 90 <= R && 180 > R ? (j = 1, k = "start", s = 8) : 180 <= R && 270 > R ? (j = 2, k = "end", s = -8) : 270 <= R && 354 >= R ? (j = 3, k = "end", s = -8) : 354 <= R && (S > H ? (j = 0, k = "start", s = 8) : (j = 3, k = "end", s = -8));
                  V.labelQuarter = j;
                } else {
                  k = "middle";
                }

                R = this.formatString(this.labelText, V);
                (G = this.labelFunction) && (R = G(V, R));
                G = V.labelColor;
                G || (G = this.color);
                "" !== R && (R = a.wrappedText(X, R, G, this.fontFamily, this.fontSize, k, !1, this.maxLabelWidth), a.setCN(this, R, "pie-label"), a.setCN(this, R, V.className, !0), R.translate(K + 1.5 * s, I), 0 > o && (R.node.style.pointerEvents = "none"), R.node.style.cursor = "default", V.ty = I, V.textX = K + 1.5 * s, F.push(R), this.axesSet.push(F), V.labelSet = F, V.label = R, this.addEventListeners(F, V));
                V.tx = K;
                V.tx2 = K + s;
                V.tx0 = O + M * Q;
                V.ty0 = L + J * Q;
              }

              K = U + (Q - U) / 2;
              V.pulled && (K += T);
              this.accessible && this.accessibleLabel && (I = this.formatString(this.accessibleLabel, V), this.makeAccessible(N, I));
              void 0 !== this.tabIndex && N.setAttr("tabindex", this.tabIndex);
              V.balloonX = M * K + O;
              V.balloonY = J * K + L;
              V.startX = Math.round(M * i);
              V.startY = Math.round(J * i);
              V.pullX = Math.round(M * T);
              V.pullY = Math.round(J * T);
              this.graphsSet.push(N);

              if (0 === V.alpha || 0 < Y && !this.chartCreated) {
                N.hide(), F && F.hide();
              }

              P += 360 * V.percents / 100;
              360 < P && (P -= 360);
            }
          }

          0 < o && this.arrangeLabels();
          this.pieXReal = O;
          this.pieYReal = L;
          this.radiusReal = Q;
          this.innerRadiusReal = U;
          0 < o && this.drawTicks();
          this.initialStart();
          this.setDepths();
        }

        (Z = this.legend) && Z.invalidateSize();
      } else {
        this.cleanChart();
      }

      this.dispDUpd();
    },
    setDepths: function setDepths() {
      var f = this.chartData,
          e;

      for (e = 0; e < f.length; e++) {
        var h = f[e],
            g = h.wedge,
            h = h.startAngle;
        0 <= h && 180 > h ? g.toFront() : 180 <= h && g.toBack();
      }
    },
    arrangeLabels: function arrangeLabels() {
      var f = this.chartData,
          e = f.length,
          h,
          g;

      for (g = e - 1; 0 <= g; g--) {
        h = f[g], 0 !== h.labelQuarter || h.hidden || this.checkOverlapping(g, h, 0, !0, 0);
      }

      for (g = 0; g < e; g++) {
        h = f[g], 1 != h.labelQuarter || h.hidden || this.checkOverlapping(g, h, 1, !1, 0);
      }

      for (g = e - 1; 0 <= g; g--) {
        h = f[g], 2 != h.labelQuarter || h.hidden || this.checkOverlapping(g, h, 2, !0, 0);
      }

      for (g = 0; g < e; g++) {
        h = f[g], 3 != h.labelQuarter || h.hidden || this.checkOverlapping(g, h, 3, !1, 0);
      }
    },
    checkOverlapping: function checkOverlapping(t, s, r, q, m) {
      var o,
          l,
          p = this.chartData,
          j = p.length,
          i = s.label;

      if (i) {
        if (!0 === q) {
          for (l = t + 1; l < j; l++) {
            p[l].labelQuarter == r && (o = this.checkOverlappingReal(s, p[l], r)) && (l = j);
          }
        } else {
          for (l = t - 1; 0 <= l; l--) {
            p[l].labelQuarter == r && (o = this.checkOverlappingReal(s, p[l], r)) && (l = 0);
          }
        }

        !0 === o && 200 > m && isNaN(s.labelRadius) && (o = s.ty + 3 * s.iy, s.ty = o, i.translate(s.textX, o), this.checkOverlapping(t, s, r, q, m + 1));
      }
    },
    checkOverlappingReal: function checkOverlappingReal(h, e, l) {
      var k = !1,
          i = h.label,
          j = e.label;
      h.labelQuarter != l || h.hidden || e.hidden || !j || (i = i.getBBox(), l = {}, l.width = i.width, l.height = i.height, l.y = h.ty, l.x = h.tx, h = j.getBBox(), j = {}, j.width = h.width, j.height = h.height, j.y = e.ty, j.x = e.tx, a.hitTest(l, j) && (k = !0));
      return k;
    }
  });
})();

/***/ }),

/***/ "./resources/template/assets/pages/widget/amchart/serial.js":
/*!******************************************************************!*\
  !*** ./resources/template/assets/pages/widget/amchart/serial.js ***!
  \******************************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var e = window.AmCharts;
  e.AmRectangularChart = e.Class({
    inherits: e.AmCoordinateChart,
    construct: function construct(a) {
      e.AmRectangularChart.base.construct.call(this, a);
      this.theme = a;
      this.createEvents("zoomed", "changed");
      this.marginRight = this.marginBottom = this.marginTop = this.marginLeft = 20;
      this.depth3D = this.angle = 0;
      this.plotAreaFillColors = "#FFFFFF";
      this.plotAreaFillAlphas = 0;
      this.plotAreaBorderColor = "#000000";
      this.plotAreaBorderAlpha = 0;
      this.maxZoomFactor = 20;
      this.zoomOutButtonImageSize = 19;
      this.zoomOutButtonImage = "lens";
      this.zoomOutText = "Show all";
      this.zoomOutButtonColor = "#e5e5e5";
      this.zoomOutButtonAlpha = 0;
      this.zoomOutButtonRollOverAlpha = 1;
      this.zoomOutButtonPadding = 8;
      this.trendLines = [];
      this.autoMargins = !0;
      this.marginsUpdated = !1;
      this.autoMarginOffset = 10;
      e.applyTheme(this, a, "AmRectangularChart");
    },
    initChart: function initChart() {
      e.AmRectangularChart.base.initChart.call(this);
      this.updateDxy();
      !this.marginsUpdated && this.autoMargins && (this.resetMargins(), this.drawGraphs = !1);
      this.processScrollbars();
      this.updateMargins();
      this.updatePlotArea();
      this.updateScrollbars();
      this.updateTrendLines();
      this.updateChartCursor();
      this.updateValueAxes();
      this.scrollbarOnly || this.updateGraphs();
    },
    drawChart: function drawChart() {
      e.AmRectangularChart.base.drawChart.call(this);
      this.drawPlotArea();

      if (e.ifArray(this.chartData)) {
        var a = this.chartCursor;
        a && a.draw();
      }
    },
    resetMargins: function resetMargins() {
      var a = {},
          b;

      if ("xy" == this.type) {
        var c = this.xAxes,
            d = this.yAxes;

        for (b = 0; b < c.length; b++) {
          var g = c[b];
          g.ignoreAxisWidth || (g.setOrientation(!0), g.fixAxisPosition(), a[g.position] = !0);
        }

        for (b = 0; b < d.length; b++) {
          c = d[b], c.ignoreAxisWidth || (c.setOrientation(!1), c.fixAxisPosition(), a[c.position] = !0);
        }
      } else {
        d = this.valueAxes;

        for (b = 0; b < d.length; b++) {
          c = d[b], c.ignoreAxisWidth || (c.setOrientation(this.rotate), c.fixAxisPosition(), a[c.position] = !0);
        }

        (b = this.categoryAxis) && !b.ignoreAxisWidth && (b.setOrientation(!this.rotate), b.fixAxisPosition(), b.fixAxisPosition(), a[b.position] = !0);
      }

      a.left && (this.marginLeft = 0);
      a.right && (this.marginRight = 0);
      a.top && (this.marginTop = 0);
      a.bottom && (this.marginBottom = 0);
      this.fixMargins = a;
    },
    measureMargins: function measureMargins() {
      var a = this.valueAxes,
          b,
          c = this.autoMarginOffset,
          d = this.fixMargins,
          g = this.realWidth,
          h = this.realHeight,
          f = c,
          e = c,
          l = g;
      b = h;
      var m;

      for (m = 0; m < a.length; m++) {
        a[m].handleSynchronization(), b = this.getAxisBounds(a[m], f, l, e, b), f = Math.round(b.l), l = Math.round(b.r), e = Math.round(b.t), b = Math.round(b.b);
      }

      if (a = this.categoryAxis) b = this.getAxisBounds(a, f, l, e, b), f = Math.round(b.l), l = Math.round(b.r), e = Math.round(b.t), b = Math.round(b.b);
      d.left && f < c && (this.marginLeft = Math.round(-f + c), !isNaN(this.minMarginLeft) && this.marginLeft < this.minMarginLeft && (this.marginLeft = this.minMarginLeft));
      d.right && l >= g - c && (this.marginRight = Math.round(l - g + c), !isNaN(this.minMarginRight) && this.marginRight < this.minMarginRight && (this.marginRight = this.minMarginRight));
      d.top && e < c + this.titleHeight && (this.marginTop = Math.round(this.marginTop - e + c + this.titleHeight), !isNaN(this.minMarginTop) && this.marginTop < this.minMarginTop && (this.marginTop = this.minMarginTop));
      d.bottom && b > h - c && (this.marginBottom = Math.round(this.marginBottom + b - h + c), !isNaN(this.minMarginBottom) && this.marginBottom < this.minMarginBottom && (this.marginBottom = this.minMarginBottom));
      this.initChart();
    },
    getAxisBounds: function getAxisBounds(a, b, c, d, g) {
      if (!a.ignoreAxisWidth) {
        var h = a.labelsSet,
            f = a.tickLength;
        a.inside && (f = 0);
        if (h) switch (h = a.getBBox(), a.position) {
          case "top":
            a = h.y;
            d > a && (d = a);
            break;

          case "bottom":
            a = h.y + h.height;
            g < a && (g = a);
            break;

          case "right":
            a = h.x + h.width + f + 3;
            c < a && (c = a);
            break;

          case "left":
            a = h.x - f, b > a && (b = a);
        }
      }

      return {
        l: b,
        t: d,
        r: c,
        b: g
      };
    },
    drawZoomOutButton: function drawZoomOutButton() {
      var a = this;

      if (!a.zbSet) {
        var b = a.container.set();
        a.zoomButtonSet.push(b);
        var c = a.color,
            d = a.fontSize,
            g = a.zoomOutButtonImageSize,
            h = a.zoomOutButtonImage.replace(/\.[a-z]*$/i, ""),
            f = a.langObj.zoomOutText || a.zoomOutText,
            k = a.zoomOutButtonColor,
            l = a.zoomOutButtonAlpha,
            m = a.zoomOutButtonFontSize,
            p = a.zoomOutButtonPadding;
        isNaN(m) || (d = m);
        (m = a.zoomOutButtonFontColor) && (c = m);
        var m = a.zoomOutButton,
            n;
        m && (m.fontSize && (d = m.fontSize), m.color && (c = m.color), m.backgroundColor && (k = m.backgroundColor), isNaN(m.backgroundAlpha) || (a.zoomOutButtonRollOverAlpha = m.backgroundAlpha));
        var u = m = 0,
            u = a.pathToImages;

        if (h) {
          if (e.isAbsolute(h) || void 0 === u) u = "";
          n = a.container.image(u + h + a.extension, 0, 0, g, g);
          e.setCN(a, n, "zoom-out-image");
          b.push(n);
          n = n.getBBox();
          m = n.width + 5;
        }

        void 0 !== f && (c = e.text(a.container, f, c, a.fontFamily, d, "start"), e.setCN(a, c, "zoom-out-label"), d = c.getBBox(), u = n ? n.height / 2 - 3 : d.height / 2, c.translate(m, u), b.push(c));
        n = b.getBBox();
        c = 1;
        e.isModern || (c = 0);
        k = e.rect(a.container, n.width + 2 * p + 5, n.height + 2 * p - 2, k, 1, 1, k, c);
        k.setAttr("opacity", l);
        k.translate(-p, -p);
        e.setCN(a, k, "zoom-out-bg");
        b.push(k);
        k.toBack();
        a.zbBG = k;
        n = k.getBBox();
        b.translate(a.marginLeftReal + a.plotAreaWidth - n.width + p, a.marginTopReal + p);
        b.hide();
        b.mouseover(function () {
          a.rollOverZB();
        }).mouseout(function () {
          a.rollOutZB();
        }).click(function () {
          a.clickZB();
        }).touchstart(function () {
          a.rollOverZB();
        }).touchend(function () {
          a.rollOutZB();
          a.clickZB();
        });

        for (l = 0; l < b.length; l++) {
          b[l].attr({
            cursor: "pointer"
          });
        }

        void 0 !== a.zoomOutButtonTabIndex && (b.setAttr("tabindex", a.zoomOutButtonTabIndex), b.setAttr("role", "menuitem"), b.keyup(function (b) {
          13 == b.keyCode && a.clickZB();
        }));
        a.zbSet = b;
      }
    },
    rollOverZB: function rollOverZB() {
      this.rolledOverZB = !0;
      this.zbBG.setAttr("opacity", this.zoomOutButtonRollOverAlpha);
    },
    rollOutZB: function rollOutZB() {
      this.rolledOverZB = !1;
      this.zbBG.setAttr("opacity", this.zoomOutButtonAlpha);
    },
    clickZB: function clickZB() {
      this.rolledOverZB = !1;
      this.zoomOut();
    },
    zoomOut: function zoomOut() {
      this.zoomOutValueAxes();
    },
    drawPlotArea: function drawPlotArea() {
      var a = this.dx,
          b = this.dy,
          c = this.marginLeftReal,
          d = this.marginTopReal,
          g = this.plotAreaWidth - 1,
          h = this.plotAreaHeight - 1,
          f = this.plotAreaFillColors,
          k = this.plotAreaFillAlphas,
          l = this.plotAreaBorderColor,
          m = this.plotAreaBorderAlpha;
      "object" == _typeof(k) && (k = k[0]);
      f = e.polygon(this.container, [0, g, g, 0, 0], [0, 0, h, h, 0], f, k, 1, l, m, this.plotAreaMegaAngle);
      e.setCN(this, f, "plot-area");
      f.translate(c + a, d + b);
      this.set.push(f);
      0 !== a && 0 !== b && (f = this.plotAreaFillColors, "object" == _typeof(f) && (f = f[0]), f = e.adjustLuminosity(f, -.15), g = e.polygon(this.container, [0, a, g + a, g, 0], [0, b, b, 0, 0], f, k, 1, l, m), e.setCN(this, g, "plot-area-bottom"), g.translate(c, d + h), this.set.push(g), a = e.polygon(this.container, [0, 0, a, a, 0], [0, h, h + b, b, 0], f, k, 1, l, m), e.setCN(this, a, "plot-area-left"), a.translate(c, d), this.set.push(a));
      (c = this.bbset) && this.scrollbarOnly && c.remove();
    },
    updatePlotArea: function updatePlotArea() {
      var a = this.updateWidth(),
          b = this.updateHeight(),
          c = this.container;
      this.realWidth = a;
      this.realWidth = b;
      c && this.container.setSize(a, b);
      var c = this.marginLeftReal,
          d = this.marginTopReal,
          a = a - c - this.marginRightReal - this.dx,
          b = b - d - this.marginBottomReal;
      1 > a && (a = 1);
      1 > b && (b = 1);
      this.plotAreaWidth = Math.round(a);
      this.plotAreaHeight = Math.round(b);
      this.plotBalloonsSet.translate(c, d);
    },
    updateDxy: function updateDxy() {
      this.dx = Math.round(this.depth3D * Math.cos(this.angle * Math.PI / 180));
      this.dy = Math.round(-this.depth3D * Math.sin(this.angle * Math.PI / 180));
      this.d3x = Math.round(this.columnSpacing3D * Math.cos(this.angle * Math.PI / 180));
      this.d3y = Math.round(-this.columnSpacing3D * Math.sin(this.angle * Math.PI / 180));
    },
    updateMargins: function updateMargins() {
      var a = this.getTitleHeight();
      this.titleHeight = a;
      this.marginTopReal = this.marginTop - this.dy;
      this.fixMargins && !this.fixMargins.top && (this.marginTopReal += a);
      this.marginBottomReal = this.marginBottom;
      this.marginLeftReal = this.marginLeft;
      this.marginRightReal = this.marginRight;
    },
    updateValueAxes: function updateValueAxes() {
      var a = this.valueAxes,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b];
        this.setAxisRenderers(c);
        this.updateObjectSize(c);
      }
    },
    setAxisRenderers: function setAxisRenderers(a) {
      a.axisRenderer = e.RecAxis;
      a.guideFillRenderer = e.RecFill;
      a.axisItemRenderer = e.RecItem;
      a.marginsChanged = !0;
    },
    updateGraphs: function updateGraphs() {
      var a = this.graphs,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b];
        c.index = b;
        c.rotate = this.rotate;
        this.updateObjectSize(c);
      }
    },
    updateObjectSize: function updateObjectSize(a) {
      a.width = this.plotAreaWidth - 1;
      a.height = this.plotAreaHeight - 1;
      a.x = this.marginLeftReal;
      a.y = this.marginTopReal;
      a.dx = this.dx;
      a.dy = this.dy;
    },
    updateChartCursor: function updateChartCursor() {
      var a = this.chartCursor;
      a && (a = e.processObject(a, e.ChartCursor, this.theme), this.updateObjectSize(a), this.addChartCursor(a), a.chart = this);
    },
    processScrollbars: function processScrollbars() {
      var a = this.chartScrollbar;
      a && (a = e.processObject(a, e.ChartScrollbar, this.theme), this.addChartScrollbar(a));
    },
    updateScrollbars: function updateScrollbars() {},
    removeChartCursor: function removeChartCursor() {
      e.callMethod("destroy", [this.chartCursor]);
      this.chartCursor = null;
    },
    zoomTrendLines: function zoomTrendLines() {
      var a = this.trendLines,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b];
        c.valueAxis.recalculateToPercents ? c.set && c.set.hide() : (c.x = this.marginLeftReal, c.y = this.marginTopReal, c.draw());
      }
    },
    handleCursorValueZoom: function handleCursorValueZoom() {},
    addTrendLine: function addTrendLine(a) {
      this.trendLines.push(a);
    },
    zoomOutValueAxes: function zoomOutValueAxes() {
      for (var a = this.valueAxes, b = 0; b < a.length; b++) {
        a[b].zoomOut();
      }
    },
    removeTrendLine: function removeTrendLine(a) {
      var b = this.trendLines,
          c;

      for (c = b.length - 1; 0 <= c; c--) {
        b[c] == a && b.splice(c, 1);
      }
    },
    adjustMargins: function adjustMargins(a, b) {
      var c = a.position,
          d = a.scrollbarHeight + a.offset;
      a.enabled && ("top" == c ? b ? this.marginLeftReal += d : this.marginTopReal += d : b ? this.marginRightReal += d : this.marginBottomReal += d);
    },
    getScrollbarPosition: function getScrollbarPosition(a, b, c) {
      var d = "bottom",
          g = "top";
      a.oppositeAxis || (g = d, d = "top");
      a.position = b ? "bottom" == c || "left" == c ? d : g : "top" == c || "right" == c ? d : g;
    },
    updateChartScrollbar: function updateChartScrollbar(a, b) {
      if (a) {
        a.rotate = b;
        var c = this.marginTopReal,
            d = this.marginLeftReal,
            g = a.scrollbarHeight,
            h = this.dx,
            f = this.dy,
            e = a.offset;
        "top" == a.position ? b ? (a.y = c, a.x = d - g - e) : (a.y = c - g + f - e, a.x = d + h) : b ? (a.y = c + f, a.x = d + this.plotAreaWidth + h + e) : (a.y = c + this.plotAreaHeight + e, a.x = this.marginLeftReal);
      }
    },
    showZB: function showZB(a) {
      var b = this.zbSet;
      a && (b = this.zoomOutText, "" !== b && b && this.drawZoomOutButton());
      if (b = this.zbSet) this.zoomButtonSet.push(b), a ? b.show() : b.hide(), this.rollOutZB();
    },
    handleReleaseOutside: function handleReleaseOutside(a) {
      e.AmRectangularChart.base.handleReleaseOutside.call(this, a);
      (a = this.chartCursor) && a.handleReleaseOutside && a.handleReleaseOutside();
    },
    handleMouseDown: function handleMouseDown(a) {
      e.AmRectangularChart.base.handleMouseDown.call(this, a);
      var b = this.chartCursor;
      b && b.handleMouseDown && !this.rolledOverZB && b.handleMouseDown(a);
    },
    update: function update() {
      e.AmRectangularChart.base.update.call(this);
      this.chartCursor && this.chartCursor.update && this.chartCursor.update();
    },
    handleScrollbarValueZoom: function handleScrollbarValueZoom(a) {
      this.relativeZoomValueAxes(a.target.valueAxes, a.relativeStart, a.relativeEnd);
      this.zoomAxesAndGraphs();
    },
    zoomValueScrollbar: function zoomValueScrollbar(a) {
      if (a && a.enabled) {
        var b = a.valueAxes[0],
            c = b.relativeStart,
            d = b.relativeEnd;
        b.reversed && (d = 1 - c, c = 1 - b.relativeEnd);
        a.percentZoom(c, d);
      }
    },
    zoomAxesAndGraphs: function zoomAxesAndGraphs() {
      if (!this.scrollbarOnly) {
        var a = this.valueAxes,
            b;

        for (b = 0; b < a.length; b++) {
          a[b].zoom(this.start, this.end);
        }

        a = this.graphs;

        for (b = 0; b < a.length; b++) {
          a[b].zoom(this.start, this.end);
        }

        (b = this.chartCursor) && b.clearSelection();
        this.zoomTrendLines();
      }
    },
    handleValueAxisZoomReal: function handleValueAxisZoomReal(a, b) {
      var c = a.relativeStart,
          d = a.relativeEnd;
      if (c > d) var g = c,
          c = d,
          d = g;
      this.relativeZoomValueAxes(b, c, d);
      this.updateAfterValueZoom();
    },
    updateAfterValueZoom: function updateAfterValueZoom() {
      this.zoomAxesAndGraphs();
      this.zoomScrollbar();
    },
    relativeZoomValueAxes: function relativeZoomValueAxes(a, b, c) {
      this.hideBalloonReal();
      b = e.fitToBounds(b, 0, 1);
      c = e.fitToBounds(c, 0, 1);

      if (b > c) {
        var d = b;
        b = c;
        c = d;
      }

      var d = 1 / this.maxZoomFactor,
          g = e.getDecimals(d) + 4;
      c - b < d && (c = b + (c - b) / 2, b = c - d / 2, c += d / 2, 1 < c && (b -= c - 1, c = 1), 0 > b && (b = 0, c = d));
      b = e.roundTo(b, g);
      c = e.roundTo(c, g);
      d = !1;

      if (a) {
        for (g = 0; g < a.length; g++) {
          var h = a[g].zoomToRelativeValues(b, c, !0);
          h && (d = h);
        }

        this.showZB();
      }

      return d;
    },
    addChartCursor: function addChartCursor(a) {
      e.callMethod("destroy", [this.chartCursor]);
      a && (this.listenTo(a, "moved", this.handleCursorMove), this.listenTo(a, "zoomed", this.handleCursorZoom), this.listenTo(a, "zoomStarted", this.handleCursorZoomStarted), this.listenTo(a, "panning", this.handleCursorPanning), this.listenTo(a, "onHideCursor", this.handleCursorHide));
      this.chartCursor = a;
    },
    handleCursorChange: function handleCursorChange() {},
    handleCursorMove: function handleCursorMove(a) {
      var b,
          c = this.valueAxes;

      for (b = 0; b < c.length; b++) {
        if (!a.panning) {
          var d = c[b];
          d && d.showBalloon && d.showBalloon(a.x, a.y);
        }
      }
    },
    handleCursorZoom: function handleCursorZoom(a) {
      if (this.skipZoomed) this.skipZoomed = !1;else {
        var b = this.startX0,
            c = this.endX0,
            d = this.endY0,
            g = this.startY0,
            h = a.startX,
            f = a.endX,
            e = a.startY,
            l = a.endY;
        this.startX0 = this.endX0 = this.startY0 = this.endY0 = NaN;
        this.handleCursorZoomReal(b + h * (c - b), b + f * (c - b), g + e * (d - g), g + l * (d - g), a);
      }
    },
    handleCursorHide: function handleCursorHide() {
      var a,
          b = this.valueAxes;

      for (a = 0; a < b.length; a++) {
        b[a].hideBalloon();
      }

      b = this.graphs;

      for (a = 0; a < b.length; a++) {
        b[a].hideBalloonReal();
      }
    }
  });
})();

(function () {
  var e = window.AmCharts;
  e.AmSerialChart = e.Class({
    inherits: e.AmRectangularChart,
    construct: function construct(a) {
      this.type = "serial";
      e.AmSerialChart.base.construct.call(this, a);
      this.cname = "AmSerialChart";
      this.theme = a;
      this.columnSpacing = 5;
      this.columnSpacing3D = 0;
      this.columnWidth = .8;
      var b = new e.CategoryAxis(a);
      b.chart = this;
      this.categoryAxis = b;
      this.zoomOutOnDataUpdate = !0;
      this.mouseWheelZoomEnabled = this.mouseWheelScrollEnabled = this.rotate = this.skipZoom = !1;
      this.minSelectedTime = 0;
      e.applyTheme(this, a, this.cname);
    },
    initChart: function initChart() {
      e.AmSerialChart.base.initChart.call(this);
      this.updateCategoryAxis(this.categoryAxis, this.rotate, "categoryAxis");
      if (this.dataChanged) this.parseData();else this.onDataUpdated();
      this.drawGraphs = !0;
    },
    onDataUpdated: function onDataUpdated() {
      var a = this.countColumns(),
          b = this.chartData,
          c = this.graphs,
          d;

      for (d = 0; d < c.length; d++) {
        var g = c[d];
        g.data = b;
        g.columnCount = a;
      }

      0 < b.length && (this.firstTime = this.getStartTime(b[0].time), this.lastTime = this.getEndTime(b[b.length - 1].time));
      this.drawChart();
      this.autoMargins && !this.marginsUpdated ? (this.marginsUpdated = !0, this.measureMargins()) : this.dispDUpd();
    },
    syncGrid: function syncGrid() {
      if (this.synchronizeGrid) {
        var a = this.valueAxes,
            b,
            c;

        if (0 < a.length) {
          var d = 0;

          for (c = 0; c < a.length; c++) {
            b = a[c], d < b.gridCountReal && (d = b.gridCountReal);
          }

          var g = !1;

          for (c = 0; c < a.length; c++) {
            if (b = a[c], b.gridCountReal < d) {
              var h = (d - b.gridCountReal) / 2,
                  f = g = h;
              0 !== h - Math.round(h) && (g -= .5, f += .5);
              0 <= b.min && 0 > b.min - g * b.step && (f += g, g = 0);
              0 >= b.max && 0 < b.max + f * b.step && (g += f, f = 0);
              h = e.getDecimals(b.step);
              b.minimum = e.roundTo(b.min - g * b.step, h);
              b.maximum = e.roundTo(b.max + f * b.step, h);
              b.setStep = b.step;
              g = b.strictMinMax = !0;
            }
          }

          g && this.updateAfterValueZoom();

          for (c = 0; c < a.length; c++) {
            b = a[c], b.minimum = NaN, b.maximum = NaN, b.setStep = NaN, b.strictMinMax = !1;
          }
        }
      }
    },
    handleWheelReal: function handleWheelReal(a, b) {
      if (!this.wheelBusy) {
        var c = this.categoryAxis,
            d = c.parseDates,
            g = c.minDuration(),
            e = 1,
            f = 1;
        this.mouseWheelZoomEnabled ? b || (e = -1) : b && (e = -1);
        var k = this.chartCursor;

        if (k) {
          var l = k.mouseX,
              k = k.mouseY;
          e != f && (l = this.rotate ? k / this.plotAreaHeight : l / this.plotAreaWidth, e *= l, f *= 1 - l);
          l = .05 * (this.end - this.start);
          d && (l = .05 * (this.endTime - this.startTime) / g);
          1 > l && (l = 1);
          e *= l;
          f *= l;
          if (!d || c.equalSpacing) e = Math.round(e), f = Math.round(f);
        }

        k = this.chartData.length;
        c = this.lastTime;
        l = this.firstTime;
        0 > a ? d ? (k = this.endTime - this.startTime, d = this.startTime + e * g, g = this.endTime + f * g, 0 < f && 0 < e && g >= c && (g = c, d = c - k), this.zoomToDates(new Date(d), new Date(g))) : (0 < f && 0 < e && this.end >= k - 1 && (e = f = 0), d = this.start + e, g = this.end + f, this.zoomToIndexes(d, g)) : d ? (k = this.endTime - this.startTime, d = this.startTime - e * g, g = this.endTime - f * g, 0 < f && 0 < e && d <= l && (d = l, g = l + k), this.zoomToDates(new Date(d), new Date(g))) : (0 < f && 0 < e && 1 > this.start && (e = f = 0), d = this.start - e, g = this.end - f, this.zoomToIndexes(d, g));
      }
    },
    validateData: function validateData(a) {
      this.marginsUpdated = !1;
      this.zoomOutOnDataUpdate && !a && (this.endTime = this.end = this.startTime = this.start = NaN);
      var b = a = !1,
          c = !1,
          d = this.chartScrollbar;
      d && (d.dragging && (a = !0, d.handleDragStop()), d.resizingRight && (c = !0, d.rightDragStop()), d.resizingLeft && (b = !0, d.leftDragStop()));
      e.AmSerialChart.base.validateData.call(this);
      a && d.handleDragStart();
      c && d.rightDragStart();
      b && d.leftDragStart();
    },
    drawChart: function drawChart() {
      if (0 < this.realWidth && 0 < this.realHeight) {
        e.AmSerialChart.base.drawChart.call(this);
        var a = this.chartData;

        if (e.ifArray(a)) {
          var b = this.chartScrollbar;
          !b || !this.marginsUpdated && this.autoMargins || b.draw();
          (b = this.valueScrollbar) && b.draw();
          var b = a.length - 1,
              c,
              d;
          c = this.categoryAxis;

          if (c.parseDates && !c.equalSpacing) {
            if (c = this.startTime, d = this.endTime, isNaN(c) || isNaN(d)) c = this.firstTime, d = this.lastTime;
          } else {
            c = this.start;
            d = this.end;
            if (isNaN(c) || isNaN(d)) d = c = NaN;
            isNaN(c) && (isNaN(this.startTime) || (c = this.getClosestIndex(a, "time", this.startTime, !0, 0, a.length)));
            isNaN(d) && (isNaN(this.endTime) || (d = this.getClosestIndex(a, "time", this.endTime, !1, 0, a.length)));
            if (isNaN(c) || isNaN(d)) c = 0, d = b;
          }

          this.endTime = this.startTime = this.end = this.start = void 0;
          this.zoom(c, d);
        }
      } else this.cleanChart();
    },
    cleanChart: function cleanChart() {
      e.callMethod("destroy", [this.valueAxes, this.graphs, this.categoryAxis, this.chartScrollbar, this.chartCursor, this.valueScrollbar]);
    },
    updateCategoryAxis: function updateCategoryAxis(a, b, c) {
      a.chart = this;
      a.id = c;
      a.rotate = b;
      a.setOrientation(!this.rotate);
      a.init();
      this.setAxisRenderers(a);
      this.updateObjectSize(a);
    },
    updateValueAxes: function updateValueAxes() {
      e.AmSerialChart.base.updateValueAxes.call(this);
      var a = this.valueAxes,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b],
            d = this.rotate;
        c.rotate = d;
        c.setOrientation(d);
        d = this.categoryAxis;
        if (!d.startOnAxis || d.parseDates) c.expandMinMax = !0;
      }
    },
    getStartTime: function getStartTime(a) {
      var b = this.categoryAxis;
      return e.resetDateToMin(new Date(a), b.minPeriod, 1, b.firstDayOfWeek).getTime();
    },
    getEndTime: function getEndTime(a) {
      var b = e.extractPeriod(this.categoryAxis.minPeriod);
      return e.changeDate(new Date(a), b.period, b.count, !0).getTime() - 1;
    },
    updateMargins: function updateMargins() {
      e.AmSerialChart.base.updateMargins.call(this);
      var a = this.chartScrollbar;
      a && (this.getScrollbarPosition(a, this.rotate, this.categoryAxis.position), this.adjustMargins(a, this.rotate));
      if (a = this.valueScrollbar) this.getScrollbarPosition(a, !this.rotate, this.valueAxes[0].position), this.adjustMargins(a, !this.rotate);
    },
    updateScrollbars: function updateScrollbars() {
      e.AmSerialChart.base.updateScrollbars.call(this);
      this.updateChartScrollbar(this.chartScrollbar, this.rotate);
      this.updateChartScrollbar(this.valueScrollbar, !this.rotate);
    },
    zoom: function zoom(a, b) {
      var c = this.categoryAxis;
      c.parseDates && !c.equalSpacing ? (this.timeZoom(a, b), isNaN(a) && this.zoomOutValueAxes()) : this.indexZoom(a, b);
      (c = this.chartCursor) && (c.pan || c.hideCursorReal());
      this.updateLegendValues();
    },
    timeZoom: function timeZoom(a, b) {
      var c = this.maxSelectedTime;
      isNaN(c) || (b != this.endTime && b - a > c && (a = b - c), a != this.startTime && b - a > c && (b = a + c));
      var d = this.minSelectedTime;

      if (0 < d && b - a < d) {
        var g = Math.round(a + (b - a) / 2),
            d = Math.round(d / 2);
        a = g - d;
        b = g + d;
      }

      d = this.chartData;
      g = this.categoryAxis;

      if (e.ifArray(d) && (a != this.startTime || b != this.endTime)) {
        var h = g.minDuration(),
            f = this.firstTime,
            k = this.lastTime;
        a || (a = f, isNaN(c) || (a = k - c));
        b || (b = k);
        a > k && (a = k);
        b < f && (b = f);
        a < f && (a = f);
        b > k && (b = k);
        b < a && (b = a + h);
        b - a < h / 5 && (b < k ? b = a + h / 5 : a = b - h / 5);
        this.startTime = a;
        this.endTime = b;
        c = d.length - 1;
        h = this.getClosestIndex(d, "time", a, !0, 0, c);
        d = this.getClosestIndex(d, "time", b, !1, h, c);
        g.timeZoom(a, b);
        g.zoom(h, d);
        this.start = e.fitToBounds(h, 0, c);
        this.end = e.fitToBounds(d, 0, c);
        this.zoomAxesAndGraphs();
        this.zoomScrollbar();
        this.fixCursor();
        this.showZB();
        this.syncGrid();
        this.updateColumnsDepth();
        this.dispatchTimeZoomEvent();
      }
    },
    showZB: function showZB() {
      var a,
          b = this.categoryAxis;
      b && b.parseDates && !b.equalSpacing && (this.startTime > this.firstTime && (a = !0), this.endTime < this.lastTime && (a = !0));
      0 < this.start && (a = !0);
      this.end < this.chartData.length - 1 && (a = !0);
      if (b = this.valueAxes) b = b[0], isNaN(b.relativeStart) || (0 !== e.roundTo(b.relativeStart, 3) && (a = !0), 1 != e.roundTo(b.relativeEnd, 3) && (a = !0));
      e.AmSerialChart.base.showZB.call(this, a);
    },
    updateAfterValueZoom: function updateAfterValueZoom() {
      e.AmSerialChart.base.updateAfterValueZoom.call(this);
      this.updateColumnsDepth();
    },
    indexZoom: function indexZoom(a, b) {
      var c = this.maxSelectedSeries,
          d = !1;
      isNaN(c) || (b != this.end && b - a > c && (a = b - c, d = !0), a != this.start && b - a > c && (b = a + c, d = !0));

      if (d && (d = this.chartScrollbar) && d.dragger) {
        var g = d.dragger.getBBox();
        d.maxWidth = g.width;
        d.maxHeight = g.height;
      }

      if (a != this.start || b != this.end) d = this.chartData.length - 1, isNaN(a) && (a = 0, isNaN(c) || (a = d - c)), isNaN(b) && (b = d), b < a && (b = a), b > d && (b = d), a > d && (a = d - 1), 0 > a && (a = 0), this.start = a, this.end = b, this.categoryAxis.zoom(a, b), this.zoomAxesAndGraphs(), this.zoomScrollbar(), this.fixCursor(), 0 !== a || b != this.chartData.length - 1 ? this.showZB(!0) : this.showZB(!1), this.syncGrid(), this.updateColumnsDepth(), this.dispatchIndexZoomEvent();
    },
    updateGraphs: function updateGraphs() {
      e.AmSerialChart.base.updateGraphs.call(this);
      var a = this.graphs,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b];
        c.columnWidthReal = this.columnWidth;
        c.categoryAxis = this.categoryAxis;
        e.isString(c.fillToGraph) && (c.fillToGraph = this.graphsById[c.fillToGraph]);
      }
    },
    zoomAxesAndGraphs: function zoomAxesAndGraphs() {
      e.AmSerialChart.base.zoomAxesAndGraphs.call(this);
      this.updateColumnsDepth();
    },
    updateColumnsDepth: function updateColumnsDepth() {
      if (0 !== this.depth3D || 0 !== this.angle) {
        var a,
            b = this.graphs,
            c;
        this.columnsArray = [];

        for (a = 0; a < b.length; a++) {
          c = b[a];
          var d = c.columnsArray;

          if (d) {
            var g;

            for (g = 0; g < d.length; g++) {
              this.columnsArray.push(d[g]);
            }
          }
        }

        this.columnsArray.sort(this.compareDepth);
        b = this.columnsSet;

        if (0 < this.columnsArray.length) {
          d = this.container.set();
          this.columnSet.push(d);

          for (a = 0; a < this.columnsArray.length; a++) {
            d.push(this.columnsArray[a].column.set);
          }

          c && d.translate(c.x, c.y);
          this.columnsSet = d;
        }

        e.remove(b);
      }
    },
    compareDepth: function compareDepth(a, b) {
      return a.depth > b.depth ? 1 : -1;
    },
    zoomScrollbar: function zoomScrollbar() {
      var a = this.chartScrollbar,
          b = this.categoryAxis;

      if (a) {
        if (!this.zoomedByScrollbar) {
          var c = a.dragger;
          c && c.stop();
        }

        this.zoomedByScrollbar = !1;
        b.parseDates && !b.equalSpacing ? a.timeZoom(this.startTime, this.endTime) : a.zoom(this.start, this.end);
      }

      this.zoomValueScrollbar(this.valueScrollbar);
    },
    updateTrendLines: function updateTrendLines() {
      var a = this.trendLines,
          b;

      for (b = 0; b < a.length; b++) {
        var c = a[b],
            c = e.processObject(c, e.TrendLine, this.theme);
        a[b] = c;
        c.chart = this;
        c.id || (c.id = "trendLineAuto" + b + "_" + new Date().getTime());
        e.isString(c.valueAxis) && (c.valueAxis = this.getValueAxisById(c.valueAxis));
        c.valueAxis || (c.valueAxis = this.valueAxes[0]);
        c.categoryAxis = this.categoryAxis;
      }
    },
    countColumns: function countColumns() {
      var a = 0,
          b = this.valueAxes.length,
          c = this.graphs.length,
          d,
          g,
          e = !1,
          f,
          k;

      for (k = 0; k < b; k++) {
        g = this.valueAxes[k];
        var l = g.stackType,
            m = 0;
        if ("100%" == l || "regular" == l) for (e = !1, f = 0; f < c; f++) {
          d = this.graphs[f], d.tcc = 1, d.valueAxis == g && "column" == d.type && (!e && d.stackable && (a++, e = !0), (!d.stackable && d.clustered || d.newStack && 0 !== m) && a++, d.columnIndex = a - 1, d.clustered || (d.columnIndex = 0), m++);
        }

        if ("none" == l || "3d" == l) {
          m = !1;

          for (f = 0; f < c; f++) {
            d = this.graphs[f], d.valueAxis == g && "column" == d.type && (d.clustered ? (d.tcc = 1, d.newStack && (a = 0), d.hidden || (d.columnIndex = a, a++)) : d.hidden || (m = !0, d.tcc = 1, d.columnIndex = 0));
          }

          m && 0 === a && (a = 1);
        }

        if ("3d" == l) {
          g = 1;

          for (m = 0; m < c; m++) {
            d = this.graphs[m], d.newStack && g++, d.depthCount = g, d.tcc = a;
          }

          a = g;
        }
      }

      return a;
    },
    parseData: function parseData() {
      e.AmSerialChart.base.parseData.call(this);
      this.parseSerialData(this.dataProvider);
    },
    getCategoryIndexByValue: function getCategoryIndexByValue(a) {
      var b = this.chartData,
          c;

      for (c = 0; c < b.length; c++) {
        if (b[c].category == a) return c;
      }
    },
    handleScrollbarZoom: function handleScrollbarZoom(a) {
      this.zoomedByScrollbar = !0;
      this.zoom(a.start, a.end);
    },
    dispatchTimeZoomEvent: function dispatchTimeZoomEvent() {
      if (this.drawGraphs && (this.prevStartTime != this.startTime || this.prevEndTime != this.endTime)) {
        var a = {
          type: "zoomed"
        };
        a.startDate = new Date(this.startTime);
        a.endDate = new Date(this.endTime);
        a.startIndex = this.start;
        a.endIndex = this.end;
        this.startIndex = this.start;
        this.endIndex = this.end;
        this.startDate = a.startDate;
        this.endDate = a.endDate;
        this.prevStartTime = this.startTime;
        this.prevEndTime = this.endTime;
        var b = this.categoryAxis,
            c = e.extractPeriod(b.minPeriod).period,
            b = b.dateFormatsObject[c];
        a.startValue = e.formatDate(a.startDate, b, this);
        a.endValue = e.formatDate(a.endDate, b, this);
        a.chart = this;
        a.target = this;
        this.fire(a);
      }
    },
    dispatchIndexZoomEvent: function dispatchIndexZoomEvent() {
      if (this.drawGraphs && (this.prevStartIndex != this.start || this.prevEndIndex != this.end)) {
        this.startIndex = this.start;
        this.endIndex = this.end;
        var a = this.chartData;

        if (e.ifArray(a) && !isNaN(this.start) && !isNaN(this.end)) {
          var b = {
            chart: this,
            target: this,
            type: "zoomed"
          };
          b.startIndex = this.start;
          b.endIndex = this.end;
          b.startValue = a[this.start].category;
          b.endValue = a[this.end].category;
          this.categoryAxis.parseDates && (this.startTime = a[this.start].time, this.endTime = a[this.end].time, b.startDate = new Date(this.startTime), b.endDate = new Date(this.endTime));
          this.prevStartIndex = this.start;
          this.prevEndIndex = this.end;
          this.fire(b);
        }
      }
    },
    updateLegendValues: function updateLegendValues() {
      this.legend && this.legend.updateValues();
    },
    getClosestIndex: function getClosestIndex(a, b, c, d, g, e) {
      0 > g && (g = 0);
      e > a.length - 1 && (e = a.length - 1);
      var f = g + Math.round((e - g) / 2),
          k = a[f][b];
      return c == k ? f : 1 >= e - g ? d ? g : Math.abs(a[g][b] - c) < Math.abs(a[e][b] - c) ? g : e : c == k ? f : c < k ? this.getClosestIndex(a, b, c, d, g, f) : this.getClosestIndex(a, b, c, d, f, e);
    },
    zoomToIndexes: function zoomToIndexes(a, b) {
      var c = this.chartData;

      if (c) {
        var d = c.length;
        0 < d && (0 > a && (a = 0), b > d - 1 && (b = d - 1), d = this.categoryAxis, d.parseDates && !d.equalSpacing ? this.zoom(c[a].time, this.getEndTime(c[b].time)) : this.zoom(a, b));
      }
    },
    zoomToDates: function zoomToDates(a, b) {
      var c = this.chartData;
      if (c) if (this.categoryAxis.equalSpacing) {
        var d = this.getClosestIndex(c, "time", a.getTime(), !0, 0, c.length);
        b = e.resetDateToMin(b, this.categoryAxis.minPeriod, 1);
        c = this.getClosestIndex(c, "time", b.getTime(), !1, 0, c.length);
        this.zoom(d, c);
      } else this.zoom(a.getTime(), b.getTime());
    },
    zoomToCategoryValues: function zoomToCategoryValues(a, b) {
      this.chartData && this.zoom(this.getCategoryIndexByValue(a), this.getCategoryIndexByValue(b));
    },
    formatPeriodString: function formatPeriodString(a, b) {
      if (b) {
        b.periodDataItem = {};
        b.periodPercentDataItem = {};
        var c = ["value", "open", "low", "high", "close"],
            d = "value open low high close average sum count".split(" "),
            g = b.valueAxis,
            h = this.chartData,
            f = b.numberFormatter;
        f || (f = this.nf);

        for (var k = 0; k < c.length; k++) {
          for (var l = c[k], m = 0, p = 0, n = 0, u = 0, v, x, E, t, r, B, q, w, y, C, F = this.start; F <= this.end; F++) {
            var D = h[F];

            if (D) {
              var A = D.axes[g.id].graphs[b.id];

              if (A) {
                if (A.values) {
                  var z = A.values[l],
                      D = D.x.categoryAxis;

                  if (this.rotate) {
                    if (0 > D || D > A.graph.height) z = NaN;
                  } else if (0 > D || D > A.graph.width) z = NaN;

                  if (!isNaN(z)) {
                    isNaN(v) && (v = z);
                    x = z;
                    if (isNaN(E) || E > z) E = z;
                    if (isNaN(t) || t < z) t = z;
                    r = e.getDecimals(m);
                    D = e.getDecimals(z);
                    m += z;
                    m = e.roundTo(m, Math.max(r, D));
                    p++;
                    r = m / p;
                  }
                }

                if (A.percents && (A = A.percents[l], !isNaN(A))) {
                  isNaN(B) && (B = A);
                  q = A;
                  if (isNaN(w) || w > A) w = A;
                  if (isNaN(y) || y < A) y = A;
                  C = e.getDecimals(n);
                  z = e.getDecimals(A);
                  n += A;
                  n = e.roundTo(n, Math.max(C, z));
                  u++;
                  C = n / u;
                }
              }
            }
          }

          m = {
            open: v,
            close: x,
            high: t,
            low: E,
            average: r,
            sum: m,
            count: p
          };
          n = {
            open: B,
            close: q,
            high: y,
            low: w,
            average: C,
            sum: n,
            count: u
          };
          a = e.formatValue(a, m, d, f, l + "\\.", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
          a = e.formatValue(a, n, d, this.pf, "percents\\." + l + "\\.");
          b.periodDataItem[l] = m;
          b.periodPercentDataItem[l] = n;
        }
      }

      return a = e.cleanFromEmpty(a);
    },
    formatString: function formatString(a, b, c) {
      if (b) {
        var d = b.graph;

        if (void 0 !== a) {
          if (-1 != a.indexOf("[[category]]")) {
            var g = b.serialDataItem.category;

            if (this.categoryAxis.parseDates) {
              var h = this.balloonDateFormat,
                  f = this.chartCursor;
              f && f.categoryBalloonDateFormat && (h = f.categoryBalloonDateFormat);
              h = e.formatDate(g, h, this);
              -1 != h.indexOf("fff") && (h = e.formatMilliseconds(h, g));
              g = h;
            }

            a = a.replace(/\[\[category\]\]/g, String(g.replace("$", "$$$")));
          }

          g = d.numberFormatter;
          g || (g = this.nf);
          h = b.graph.valueAxis;
          (f = h.duration) && !isNaN(b.values.value) && (f = e.formatDuration(b.values.value, f, "", h.durationUnits, h.maxInterval, g), a = a.replace(RegExp("\\[\\[value\\]\\]", "g"), f));
          "date" == h.type && (h = e.formatDate(new Date(b.values.value), d.dateFormat, this), f = RegExp("\\[\\[value\\]\\]", "g"), a = a.replace(f, h), h = e.formatDate(new Date(b.values.open), d.dateFormat, this), f = RegExp("\\[\\[open\\]\\]", "g"), a = a.replace(f, h));
          d = "value open low high close total".split(" ");
          h = this.pf;
          a = e.formatValue(a, b.percents, d, h, "percents\\.");
          a = e.formatValue(a, b.values, d, g, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers);
          a = e.formatValue(a, b.values, ["percents"], h);
          -1 != a.indexOf("[[") && (a = e.formatDataContextValue(a, b.dataContext));
          -1 != a.indexOf("[[") && b.graph.customData && (a = e.formatDataContextValue(a, b.graph.customData));
          a = e.AmSerialChart.base.formatString.call(this, a, b, c);
        }

        return a;
      }
    },
    updateChartCursor: function updateChartCursor() {
      e.AmSerialChart.base.updateChartCursor.call(this);
      var a = this.chartCursor,
          b = this.categoryAxis;

      if (a) {
        var c = a.categoryBalloonAlpha,
            d = a.categoryBalloonColor,
            g = a.color;
        void 0 === d && (d = a.cursorColor);
        var h = a.valueZoomable,
            f = a.zoomable,
            k = a.valueLineEnabled;
        this.rotate ? (a.vLineEnabled = k, a.hZoomEnabled = h, a.vZoomEnabled = f) : (a.hLineEnabled = k, a.vZoomEnabled = h, a.hZoomEnabled = f);
        if (a.valueLineBalloonEnabled) for (k = 0; k < this.valueAxes.length; k++) {
          h = this.valueAxes[k], (f = h.balloon) || (f = {}), f = e.extend(f, this.balloon, !0), f.fillColor = d, f.balloonColor = d, f.fillAlpha = c, f.borderColor = d, f.color = g, h.balloon = f;
        } else for (f = 0; f < this.valueAxes.length; f++) {
          h = this.valueAxes[f], h.balloon && (h.balloon = null);
        }
        b && (b.balloonTextFunction = a.categoryBalloonFunction, a.categoryLineAxis = b, b.balloonText = a.categoryBalloonText, a.categoryBalloonEnabled && ((f = b.balloon) || (f = {}), f = e.extend(f, this.balloon, !0), f.fillColor = d, f.balloonColor = d, f.fillAlpha = c, f.borderColor = d, f.color = g, b.balloon = f), b.balloon && (b.balloon.enabled = a.categoryBalloonEnabled));
      }
    },
    addChartScrollbar: function addChartScrollbar(a) {
      e.callMethod("destroy", [this.chartScrollbar]);
      a && (a.chart = this, this.listenTo(a, "zoomed", this.handleScrollbarZoom));
      this.rotate ? void 0 === a.width && (a.width = a.scrollbarHeight) : void 0 === a.height && (a.height = a.scrollbarHeight);
      a.gridAxis = this.categoryAxis;
      this.chartScrollbar = a;
    },
    addValueScrollbar: function addValueScrollbar(a) {
      e.callMethod("destroy", [this.valueScrollbar]);
      a && (a.chart = this, this.listenTo(a, "zoomed", this.handleScrollbarValueZoom), this.listenTo(a, "zoomStarted", this.handleCursorZoomStarted));
      var b = a.scrollbarHeight;
      this.rotate ? void 0 === a.height && (a.height = b) : void 0 === a.width && (a.width = b);
      a.gridAxis || (a.gridAxis = this.valueAxes[0]);
      a.valueAxes = this.valueAxes;
      this.valueScrollbar = a;
    },
    removeChartScrollbar: function removeChartScrollbar() {
      e.callMethod("destroy", [this.chartScrollbar]);
      this.chartScrollbar = null;
    },
    removeValueScrollbar: function removeValueScrollbar() {
      e.callMethod("destroy", [this.valueScrollbar]);
      this.valueScrollbar = null;
    },
    handleReleaseOutside: function handleReleaseOutside(a) {
      e.AmSerialChart.base.handleReleaseOutside.call(this, a);
      e.callMethod("handleReleaseOutside", [this.chartScrollbar, this.valueScrollbar]);
    },
    update: function update() {
      e.AmSerialChart.base.update.call(this);
      this.chartScrollbar && this.chartScrollbar.update && this.chartScrollbar.update();
      this.valueScrollbar && this.valueScrollbar.update && this.valueScrollbar.update();
    },
    processScrollbars: function processScrollbars() {
      e.AmSerialChart.base.processScrollbars.call(this);
      var a = this.valueScrollbar;
      a && (a = e.processObject(a, e.ChartScrollbar, this.theme), a.id = "valueScrollbar", this.addValueScrollbar(a));
    },
    handleValueAxisZoom: function handleValueAxisZoom(a) {
      this.handleValueAxisZoomReal(a, this.valueAxes);
    },
    zoomOut: function zoomOut() {
      e.AmSerialChart.base.zoomOut.call(this);
      this.zoom();
      this.syncGrid();
    },
    getNextItem: function getNextItem(a) {
      var b = a.index,
          c = this.chartData,
          d = a.graph;
      if (b + 1 < c.length) for (b += 1; b < c.length; b++) {
        if (a = c[b]) if (a = a.axes[d.valueAxis.id].graphs[d.id], !isNaN(a.y)) return a;
      }
    },
    handleCursorZoomReal: function handleCursorZoomReal(a, b, c, d, e) {
      var h = e.target,
          f,
          k;
      this.rotate ? (isNaN(a) || isNaN(b) || this.relativeZoomValueAxes(this.valueAxes, a, b) && this.updateAfterValueZoom(), h.vZoomEnabled && (f = e.start, k = e.end)) : (isNaN(c) || isNaN(d) || this.relativeZoomValueAxes(this.valueAxes, c, d) && this.updateAfterValueZoom(), h.hZoomEnabled && (f = e.start, k = e.end));
      isNaN(f) || isNaN(k) || (a = this.categoryAxis, a.parseDates && !a.equalSpacing ? this.zoomToDates(new Date(f), new Date(k)) : this.zoomToIndexes(f, k));
    },
    handleCursorZoomStarted: function handleCursorZoomStarted() {
      var a = this.valueAxes;

      if (a) {
        var a = a[0],
            b = a.relativeStart,
            c = a.relativeEnd;
        a.reversed && (b = 1 - a.relativeEnd, c = 1 - a.relativeStart);
        this.rotate ? (this.startX0 = b, this.endX0 = c) : (this.startY0 = b, this.endY0 = c);
      }

      this.categoryAxis && (this.start0 = this.start, this.end0 = this.end, this.startTime0 = this.startTime, this.endTime0 = this.endTime);
    },
    fixCursor: function fixCursor() {
      this.chartCursor && this.chartCursor.fixPosition();
      this.prevCursorItem = null;
    },
    handleCursorMove: function handleCursorMove(a) {
      e.AmSerialChart.base.handleCursorMove.call(this, a);
      var b = a.target,
          c = this.categoryAxis;
      if (a.panning) this.handleCursorHide(a);else if (this.chartData && !b.isHidden) {
        var d = this.graphs;

        if (d) {
          var g;
          g = c.xToIndex(this.rotate ? a.y : a.x);

          if (g = this.chartData[g]) {
            var h, f, k, l;

            if (b.oneBalloonOnly && b.valueBalloonsEnabled) {
              var m = Infinity;

              for (h = d.length - 1; 0 <= h; h--) {
                if (f = d[h], f.balloon.enabled && f.showBalloon && !f.hidden) {
                  k = f.valueAxis.id;
                  k = g.axes[k].graphs[f.id];
                  if (b.showNextAvailable && isNaN(k.y) && (k = this.getNextItem(k), !k)) continue;
                  k = k.y;
                  "top" == f.showBalloonAt && (k = 0);
                  "bottom" == f.showBalloonAt && (k = this.height);
                  var p = b.mouseX,
                      n = b.mouseY;
                  k = this.rotate ? Math.abs(p - k) : Math.abs(n - k);
                  k < m && (m = k, l = f);
                }
              }

              b.mostCloseGraph = l;
            }

            if (this.prevCursorItem != g || l != this.prevMostCloseGraph) {
              m = [];

              for (h = 0; h < d.length; h++) {
                f = d[h];
                k = f.valueAxis.id;
                k = g.axes[k].graphs[f.id];

                if (b.showNextAvailable && isNaN(k.y) && (k = this.getNextItem(k), !k && f.balloon)) {
                  f.balloon.hide();
                  continue;
                }

                l && f != l ? (f.showGraphBalloon(k, b.pointer, !1, b.graphBulletSize, b.graphBulletAlpha), f.balloon.hide(0)) : b.valueBalloonsEnabled ? (f.balloon.showBullet = b.bulletsEnabled, f.balloon.bulletSize = b.bulletSize / 2, a.hideBalloons || (f.showGraphBalloon(k, b.pointer, !1, b.graphBulletSize, b.graphBulletAlpha), f.balloon.set && m.push({
                  balloon: f.balloon,
                  y: f.balloon.pointToY
                }))) : (f.currentDataItem = k, f.resizeBullet(k, b.graphBulletSize, b.graphBulletAlpha));
              }

              b.avoidBalloonOverlapping && this.arrangeBalloons(m);
              this.prevCursorItem = g;
            }

            this.prevMostCloseGraph = l;
          }
        }

        c.showBalloon(a.x, a.y, b.categoryBalloonDateFormat, a.skip);
        this.updateLegendValues();
      }
    },
    handleCursorHide: function handleCursorHide(a) {
      e.AmSerialChart.base.handleCursorHide.call(this, a);
      a = this.categoryAxis;
      this.prevCursorItem = null;
      this.updateLegendValues();
      a && a.hideBalloon();
      a = this.graphs;
      var b;

      for (b = 0; b < a.length; b++) {
        a[b].currentDataItem = null;
      }
    },
    handleCursorPanning: function handleCursorPanning(a) {
      var b = a.target,
          c,
          d = a.deltaX,
          g = a.deltaY,
          h = a.delta2X,
          f = a.delta2Y;
      a = !1;

      if (this.rotate) {
        isNaN(h) && (h = d, a = !0);
        var k = this.endX0;
        c = this.startX0;
        var l = k - c,
            k = k - l * h,
            m = l;
        a || (m = 0);
        a = e.fitToBounds(c - l * d, 0, 1 - m);
      } else isNaN(f) && (f = g, a = !0), k = this.endY0, c = this.startY0, l = k - c, k += l * g, m = l, a || (m = 0), a = e.fitToBounds(c + l * f, 0, 1 - m);

      c = e.fitToBounds(k, m, 1);
      var p;
      b.valueZoomable && (p = this.relativeZoomValueAxes(this.valueAxes, a, c));
      var n;
      c = this.categoryAxis;
      this.rotate && (d = g, h = f);
      a = !1;
      isNaN(h) && (h = d, a = !0);
      if (b.zoomable && (0 < Math.abs(d) || 0 < Math.abs(h))) if (c.parseDates && !c.equalSpacing) {
        if (f = this.startTime0, g = this.endTime0, c = g - f, h *= c, l = this.firstTime, k = this.lastTime, m = c, a || (m = 0), a = Math.round(e.fitToBounds(f - c * d, l, k - m)), h = Math.round(e.fitToBounds(g - h, l + m, k)), this.startTime != a || this.endTime != h) n = {
          chart: this,
          target: b,
          type: "zoomed",
          start: a,
          end: h
        }, this.skipZoomed = !0, b.fire(n), this.zoom(a, h), n = !0;
      } else if (f = this.start0, g = this.end0, c = g - f, d = Math.round(c * d), h = Math.round(c * h), l = this.chartData.length - 1, a || (c = 0), a = e.fitToBounds(f - d, 0, l - c), c = e.fitToBounds(g - h, c, l), this.start != a || this.end != c) this.skipZoomed = !0, b.fire({
        chart: this,
        target: b,
        type: "zoomed",
        start: a,
        end: c
      }), this.zoom(a, c), n = !0;
      !n && p && this.updateAfterValueZoom();
    },
    arrangeBalloons: function arrangeBalloons(a) {
      var b = this.plotAreaHeight;
      a.sort(this.compareY);
      var c,
          d,
          e,
          h = this.plotAreaWidth,
          f = a.length;

      for (c = 0; c < f; c++) {
        d = a[c].balloon, d.setBounds(0, 0, h, b), d.restorePrevious(), d.draw(), b = d.yPos - 3;
      }

      a.reverse();

      for (c = 0; c < f; c++) {
        d = a[c].balloon;
        var b = d.bottom,
            k = d.bottom - d.yPos;
        0 < c && b - k < e + 3 && d.setBounds && (d.setBounds(0, e + 3, h, e + k + 3), d.restorePrevious(), d.draw());
        d.set && d.set.show();
        e = d.bottom;
      }
    },
    compareY: function compareY(a, b) {
      return a.y < b.y ? 1 : -1;
    }
  });
})();

(function () {
  var e = window.AmCharts;
  e.Cuboid = e.Class({
    construct: function construct(a, b, c, d, e, h, f, k, l, m, p, n, u, v, x, E, t) {
      this.set = a.set();
      this.container = a;
      this.h = Math.round(c);
      this.w = Math.round(b);
      this.dx = d;
      this.dy = e;
      this.colors = h;
      this.alpha = f;
      this.bwidth = k;
      this.bcolor = l;
      this.balpha = m;
      this.dashLength = v;
      this.topRadius = E;
      this.pattern = x;
      this.rotate = u;
      this.bcn = t;
      u ? 0 > b && 0 === p && (p = 180) : 0 > c && 270 == p && (p = 90);
      this.gradientRotation = p;
      0 === d && 0 === e && (this.cornerRadius = n);
      this.draw();
    },
    draw: function draw() {
      var a = this.set;
      a.clear();
      var b = this.container,
          c = b.chart,
          d = this.w,
          g = this.h,
          h = this.dx,
          f = this.dy,
          k = this.colors,
          l = this.alpha,
          m = this.bwidth,
          p = this.bcolor,
          n = this.balpha,
          u = this.gradientRotation,
          v = this.cornerRadius,
          x = this.dashLength,
          E = this.pattern,
          t = this.topRadius,
          r = this.bcn,
          B = k,
          q = k;
      "object" == _typeof(k) && (B = k[0], q = k[k.length - 1]);
      var w,
          y,
          C,
          F,
          D,
          A,
          z,
          L,
          M,
          Q = l;
      E && (l = 0);
      var G,
          H,
          I,
          J,
          K = this.rotate;
      if (0 < Math.abs(h) || 0 < Math.abs(f)) if (isNaN(t)) z = q, q = e.adjustLuminosity(B, -.2), q = e.adjustLuminosity(B, -.2), w = e.polygon(b, [0, h, d + h, d, 0], [0, f, f, 0, 0], q, l, 1, p, 0, u), 0 < n && (M = e.line(b, [0, h, d + h], [0, f, f], p, n, m, x)), y = e.polygon(b, [0, 0, d, d, 0], [0, g, g, 0, 0], q, l, 1, p, 0, u), y.translate(h, f), 0 < n && (C = e.line(b, [h, h], [f, f + g], p, n, m, x)), F = e.polygon(b, [0, 0, h, h, 0], [0, g, g + f, f, 0], q, l, 1, p, 0, u), D = e.polygon(b, [d, d, d + h, d + h, d], [0, g, g + f, f, 0], q, l, 1, p, 0, u), 0 < n && (A = e.line(b, [d, d + h, d + h, d], [0, f, g + f, g], p, n, m, x)), q = e.adjustLuminosity(z, .2), z = e.polygon(b, [0, h, d + h, d, 0], [g, g + f, g + f, g, g], q, l, 1, p, 0, u), 0 < n && (L = e.line(b, [0, h, d + h], [g, g + f, g + f], p, n, m, x));else {
        var N, O, P;
        K ? (N = g / 2, q = h / 2, P = g / 2, O = d + h / 2, H = Math.abs(g / 2), G = Math.abs(h / 2)) : (q = d / 2, N = f / 2, O = d / 2, P = g + f / 2 + 1, G = Math.abs(d / 2), H = Math.abs(f / 2));
        I = G * t;
        J = H * t;
        .1 < G && .1 < G && (w = e.circle(b, G, B, l, m, p, n, !1, H), w.translate(q, N));
        .1 < I && .1 < I && (z = e.circle(b, I, e.adjustLuminosity(B, .5), l, m, p, n, !1, J), z.translate(O, P));
      }
      l = Q;
      1 > Math.abs(g) && (g = 0);
      1 > Math.abs(d) && (d = 0);
      !isNaN(t) && (0 < Math.abs(h) || 0 < Math.abs(f)) ? (k = [B], k = {
        fill: k,
        stroke: p,
        "stroke-width": m,
        "stroke-opacity": n,
        "fill-opacity": l
      }, K ? (l = "M0,0 L" + d + "," + (g / 2 - g / 2 * t), m = " B", 0 < d && (m = " A"), e.VML ? (l += m + Math.round(d - I) + "," + Math.round(g / 2 - J) + "," + Math.round(d + I) + "," + Math.round(g / 2 + J) + "," + d + ",0," + d + "," + g, l = l + (" L0," + g) + (m + Math.round(-G) + "," + Math.round(g / 2 - H) + "," + Math.round(G) + "," + Math.round(g / 2 + H) + ",0," + g + ",0,0")) : (l += "A" + I + "," + J + ",0,0,0," + d + "," + (g - g / 2 * (1 - t)) + "L0," + g, l += "A" + G + "," + H + ",0,0,1,0,0"), G = 90) : (m = d / 2 - d / 2 * t, l = "M0,0 L" + m + "," + g, e.VML ? (l = "M0,0 L" + m + "," + g, m = " B", 0 > g && (m = " A"), l += m + Math.round(d / 2 - I) + "," + Math.round(g - J) + "," + Math.round(d / 2 + I) + "," + Math.round(g + J) + ",0," + g + "," + d + "," + g, l += " L" + d + ",0", l += m + Math.round(d / 2 + G) + "," + Math.round(H) + "," + Math.round(d / 2 - G) + "," + Math.round(-H) + "," + d + ",0,0,0") : (l += "A" + I + "," + J + ",0,0,0," + (d - d / 2 * (1 - t)) + "," + g + "L" + d + ",0", l += "A" + G + "," + H + ",0,0,1,0,0"), G = 180), b = b.path(l).attr(k), b.gradient("linearMega", [B, e.adjustLuminosity(B, -.3), e.adjustLuminosity(B, -.3), B], G), K ? b.translate(h / 2, 0) : b.translate(0, f / 2)) : b = 0 === g ? e.line(b, [0, d], [0, 0], p, n, m, x) : 0 === d ? e.line(b, [0, 0], [0, g], p, n, m, x) : 0 < v ? e.rect(b, d, g, k, l, m, p, n, v, u, x) : e.polygon(b, [0, 0, d, d, 0], [0, g, g, 0, 0], k, l, m, p, n, u, !1, x);
      d = isNaN(t) ? 0 > g ? [w, M, y, C, F, D, A, z, L, b] : [z, L, y, C, F, D, w, M, A, b] : K ? 0 < d ? [w, b, z] : [z, b, w] : 0 > g ? [w, b, z] : [z, b, w];
      e.setCN(c, b, r + "front");
      e.setCN(c, y, r + "back");
      e.setCN(c, z, r + "top");
      e.setCN(c, w, r + "bottom");
      e.setCN(c, F, r + "left");
      e.setCN(c, D, r + "right");

      for (w = 0; w < d.length; w++) {
        if (y = d[w]) a.push(y), e.setCN(c, y, r + "element");
      }

      E && b.pattern(E, NaN, c.path);
    },
    width: function width(a) {
      isNaN(a) && (a = 0);
      this.w = Math.round(a);
      this.draw();
    },
    height: function height(a) {
      isNaN(a) && (a = 0);
      this.h = Math.round(a);
      this.draw();
    },
    animateHeight: function animateHeight(a, b) {
      var c = this;
      c.animationFinished = !1;
      c.easing = b;
      c.totalFrames = a * e.updateRate;
      c.rh = c.h;
      c.frame = 0;
      c.height(1);
      setTimeout(function () {
        c.updateHeight.call(c);
      }, 1E3 / e.updateRate);
    },
    updateHeight: function updateHeight() {
      var a = this;
      a.frame++;
      var b = a.totalFrames;
      a.frame <= b ? (b = a.easing(0, a.frame, 1, a.rh - 1, b), a.height(b), window.requestAnimationFrame ? window.requestAnimationFrame(function () {
        a.updateHeight.call(a);
      }) : setTimeout(function () {
        a.updateHeight.call(a);
      }, 1E3 / e.updateRate)) : (a.height(a.rh), a.animationFinished = !0);
    },
    animateWidth: function animateWidth(a, b) {
      var c = this;
      c.animationFinished = !1;
      c.easing = b;
      c.totalFrames = a * e.updateRate;
      c.rw = c.w;
      c.frame = 0;
      c.width(1);
      setTimeout(function () {
        c.updateWidth.call(c);
      }, 1E3 / e.updateRate);
    },
    updateWidth: function updateWidth() {
      var a = this;
      a.frame++;
      var b = a.totalFrames;
      a.frame <= b ? (b = a.easing(0, a.frame, 1, a.rw - 1, b), a.width(b), window.requestAnimationFrame ? window.requestAnimationFrame(function () {
        a.updateWidth.call(a);
      }) : setTimeout(function () {
        a.updateWidth.call(a);
      }, 1E3 / e.updateRate)) : (a.width(a.rw), a.animationFinished = !0);
    }
  });
})();

(function () {
  var e = window.AmCharts;
  e.CategoryAxis = e.Class({
    inherits: e.AxisBase,
    construct: function construct(a) {
      this.cname = "CategoryAxis";
      e.CategoryAxis.base.construct.call(this, a);
      this.minPeriod = "DD";
      this.equalSpacing = this.parseDates = !1;
      this.position = "bottom";
      this.startOnAxis = !1;
      this.gridPosition = "middle";
      this.safeDistance = 30;
      this.stickBalloonToCategory = !1;
      e.applyTheme(this, a, this.cname);
    },
    draw: function draw() {
      e.CategoryAxis.base.draw.call(this);
      this.generateDFObject();
      var a = this.chart.chartData;
      this.data = a;
      this.labelRotationR = this.labelRotation;
      this.type = null;

      if (e.ifArray(a)) {
        var b,
            c = this.chart;
        "scrollbar" != this.id ? (e.setCN(c, this.set, "category-axis"), e.setCN(c, this.labelsSet, "category-axis"), e.setCN(c, this.axisLine.axisSet, "category-axis")) : this.bcn = this.id + "-";
        var d = this.start,
            g = this.labelFrequency,
            h = 0,
            f = this.end - d + 1,
            k = this.gridCountR,
            l = this.showFirstLabel,
            m = this.showLastLabel,
            p,
            n = "",
            n = e.extractPeriod(this.minPeriod),
            u = e.getPeriodDuration(n.period, n.count),
            v,
            x,
            E,
            t,
            r,
            B = this.rotate,
            q = this.firstDayOfWeek,
            w = this.boldPeriodBeginning;
        b = e.resetDateToMin(new Date(a[a.length - 1].time + 1.05 * u), this.minPeriod, 1, q).getTime();
        this.firstTime = c.firstTime;
        this.endTime > b && (this.endTime = b);
        r = this.minorGridEnabled;
        x = this.gridAlpha;
        var y = 0,
            C = 0;
        if (this.widthField) for (b = this.start; b <= this.end; b++) {
          if (t = this.data[b]) {
            var F = Number(this.data[b].dataContext[this.widthField]);
            isNaN(F) || (y += F, t.widthValue = F);
          }
        }
        if (this.parseDates && !this.equalSpacing) this.lastTime = a[a.length - 1].time, this.maxTime = e.resetDateToMin(new Date(this.lastTime + 1.05 * u), this.minPeriod, 1, q).getTime(), this.timeDifference = this.endTime - this.startTime, this.parseDatesDraw();else if (!this.parseDates) {
          if (this.cellWidth = this.getStepWidth(f), f < k && (k = f), h += this.start, this.stepWidth = this.getStepWidth(f), 0 < k) for (q = Math.floor(f / k), t = this.chooseMinorFrequency(q), f = h, f / 2 == Math.round(f / 2) && f--, 0 > f && (f = 0), w = 0, this.widthField && (f = this.start, q = 1), this.end - f + 1 >= this.autoRotateCount && (this.labelRotationR = this.autoRotateAngle), b = f; b <= this.end + 2; b++) {
            k = !1;
            0 <= b && b < this.data.length ? (v = this.data[b], n = v.category, k = v.forceShow) : n = "";
            if (r && !isNaN(t)) {
              if (b / t == Math.round(b / t) || k) b / q == Math.round(b / q) || k || (this.gridAlpha = this.minorGridAlpha, n = void 0);else continue;
            } else if (b / q != Math.round(b / q) && !k) continue;
            f = this.getCoordinate(b - h);
            k = 0;
            "start" == this.gridPosition && (f -= this.cellWidth / 2, k = this.cellWidth / 2);
            p = !0;
            E = k;
            "start" == this.tickPosition && (E = 0, p = !1, k = 0);
            if (b == d && !l || b == this.end && !m) n = void 0;
            Math.round(w / g) != w / g && (n = void 0);
            w++;
            a = this.cellWidth;
            B && (a = NaN, this.ignoreAxisWidth || !c.autoMargins) && (a = "right" == this.position ? c.marginRight - this.titleWidth : c.marginLeft - this.titleWidth, a -= this.tickLength + 10);
            this.labelFunction && v && (n = this.labelFunction(n, v, this));
            n = e.fixBrakes(n);
            u = !1;
            this.boldLabels && (u = !0);
            b > this.end && "start" == this.tickPosition && (n = " ");
            this.rotate && this.inside && (k -= 2);
            isNaN(v.widthValue) || (v.percentWidthValue = v.widthValue / y * 100, a = this.rotate ? this.height * v.widthValue / y : this.width * v.widthValue / y, f = C, C += a, E = k = a / 2);
            p = new this.axisItemRenderer(this, f, n, p, a, k, void 0, u, E, !1, v.labelColor, v.className);
            p.serialDataItem = v;
            this.pushAxisItem(p);
            this.gridAlpha = x;
          }
        } else if (this.parseDates && this.equalSpacing) {
          h = this.start;
          this.startTime = this.data[this.start].time;
          this.endTime = this.data[this.end].time;
          this.timeDifference = this.endTime - this.startTime;
          b = this.choosePeriod(0);
          g = b.period;
          v = b.count;
          b = e.getPeriodDuration(g, v);
          b < u && (g = n.period, v = n.count, b = u);
          x = g;
          "WW" == x && (x = "DD");
          this.currentDateFormat = this.dateFormatsObject[x];
          this.stepWidth = this.getStepWidth(f);
          k = Math.ceil(this.timeDifference / b) + 1;
          n = e.resetDateToMin(new Date(this.startTime - b), g, v, q).getTime();
          this.cellWidth = this.getStepWidth(f);
          f = Math.round(n / b);
          d = -1;
          f / 2 == Math.round(f / 2) && (d = -2, n -= b);
          f = this.start;
          f / 2 == Math.round(f / 2) && f--;
          0 > f && (f = 0);
          C = this.end + 2;
          C >= this.data.length && (C = this.data.length);
          a = !1;
          a = !l;
          this.previousPos = -1E3;
          20 < this.labelRotationR && (this.safeDistance = 5);
          F = f;

          if (this.data[f].time != e.resetDateToMin(new Date(this.data[f].time), g, v, q).getTime()) {
            var u = 0,
                D = n;

            for (b = f; b < C; b++) {
              t = this.data[b].time, this.checkPeriodChange(g, v, t, D) && (u++, 2 <= u && (F = b, b = C), D = t);
            }
          }

          r && 1 < v && (t = this.chooseMinorFrequency(v), e.getPeriodDuration(g, t));
          if (0 < this.gridCountR) for (b = f; b < C; b++) {
            if (t = this.data[b].time, this.checkPeriodChange(g, v, t, n) && b >= F) {
              f = this.getCoordinate(b - this.start);
              r = !1;
              this.nextPeriod[x] && (r = this.checkPeriodChange(this.nextPeriod[x], 1, t, n, x)) && e.resetDateToMin(new Date(t), this.nextPeriod[x], 1, q).getTime() != t && (r = !1);
              u = !1;
              r && this.markPeriodChange ? (r = this.dateFormatsObject[this.nextPeriod[x]], u = !0) : r = this.dateFormatsObject[x];
              n = e.formatDate(new Date(t), r, c);
              if (b == d && !l || b == k && !m) n = " ";
              a ? a = !1 : (w || (u = !1), f - this.previousPos > this.safeDistance * Math.cos(this.labelRotationR * Math.PI / 180) && (this.labelFunction && (n = this.labelFunction(n, new Date(t), this, g, v, E)), this.boldLabels && (u = !0), p = new this.axisItemRenderer(this, f, n, void 0, void 0, void 0, void 0, u), r = p.graphics(), this.pushAxisItem(p), r = r.getBBox().width, e.isModern || (r -= f), this.previousPos = f + r));
              E = n = t;
            }
          }
        }

        for (b = l = 0; b < this.data.length; b++) {
          if (t = this.data[b]) this.parseDates && !this.equalSpacing ? (m = t.time, d = this.cellWidth, "MM" == this.minPeriod && (d = 864E5 * e.daysInMonth(new Date(m)) * this.stepWidth, t.cellWidth = d), m = Math.round((m - this.startTime) * this.stepWidth + d / 2)) : m = this.getCoordinate(b - h), t.x[this.id] = m;
        }

        if (this.widthField) for (b = this.start; b <= this.end; b++) {
          t = this.data[b], d = t.widthValue, t.percentWidthValue = d / y * 100, this.rotate ? (m = this.height * d / y / 2 + l, l = this.height * d / y + l) : (m = this.width * d / y / 2 + l, l = this.width * d / y + l), t.x[this.id] = m;
        }
        y = this.guides.length;

        for (b = 0; b < y; b++) {
          if (l = this.guides[b], q = q = q = r = d = NaN, m = l.above, l.toCategory && (q = c.getCategoryIndexByValue(l.toCategory), isNaN(q) || (d = this.getCoordinate(q - h), l.expand && (d += this.cellWidth / 2), p = new this.axisItemRenderer(this, d, "", !0, NaN, NaN, l), this.pushAxisItem(p, m))), l.category && (q = c.getCategoryIndexByValue(l.category), isNaN(q) || (r = this.getCoordinate(q - h), l.expand && (r -= this.cellWidth / 2), q = (d - r) / 2, p = new this.axisItemRenderer(this, r, l.label, !0, NaN, q, l), this.pushAxisItem(p, m))), w = c.dataDateFormat, l.toDate && (!w || l.toDate instanceof Date || (l.toDate = l.toDate.toString() + " |"), l.toDate = e.getDate(l.toDate, w), this.equalSpacing ? (q = c.getClosestIndex(this.data, "time", l.toDate.getTime(), !1, 0, this.data.length - 1), isNaN(q) || (d = this.getCoordinate(q - h))) : d = (l.toDate.getTime() - this.startTime) * this.stepWidth, p = new this.axisItemRenderer(this, d, "", !0, NaN, NaN, l), this.pushAxisItem(p, m)), l.date && (!w || l.date instanceof Date || (l.date = l.date.toString() + " |"), l.date = e.getDate(l.date, w), this.equalSpacing ? (q = c.getClosestIndex(this.data, "time", l.date.getTime(), !1, 0, this.data.length - 1), isNaN(q) || (r = this.getCoordinate(q - h))) : r = (l.date.getTime() - this.startTime) * this.stepWidth, q = (d - r) / 2, p = !0, l.toDate && (p = !1), p = "H" == this.orientation ? new this.axisItemRenderer(this, r, l.label, p, 2 * q, NaN, l) : new this.axisItemRenderer(this, r, l.label, !1, NaN, q, l), this.pushAxisItem(p, m)), p && (q = p.label) && this.addEventListeners(q, l), 0 < d || 0 < r) {
            q = !1;

            if (this.rotate) {
              if (d < this.height || r < this.height) q = !0;
            } else if (d < this.width || r < this.width) q = !0;

            q && (d = new this.guideFillRenderer(this, r, d, l), r = d.graphics(), this.pushAxisItem(d, m), l.graphics = r, r.index = b, this.addEventListeners(r, l));
          }
        }

        if (c = c.chartCursor) B ? c.fixHeight(this.cellWidth) : (c.fixWidth(this.cellWidth), c.fullWidth && this.balloon && (this.balloon.minWidth = this.cellWidth));
        this.previousHeight = A;
      }

      this.axisCreated = !0;
      this.set.translate(this.x, this.y);
      this.labelsSet.translate(this.x, this.y);
      this.labelsSet.show();
      this.positionTitle();
      (B = this.axisLine.set) && B.toFront();
      var A = this.getBBox().height;
      2 < A - this.previousHeight && this.autoWrap && !this.parseDates && (this.axisCreated = this.chart.marginsUpdated = !1);
    },
    xToIndex: function xToIndex(a) {
      var b = this.data,
          c = this.chart,
          d = c.rotate,
          g = this.stepWidth,
          h;
      if (this.parseDates && !this.equalSpacing) a = this.startTime + Math.round(a / g) - this.minDuration() / 2, h = c.getClosestIndex(b, "time", a, !1, this.start, this.end + 1);else if (this.widthField) for (c = Infinity, g = this.start; g <= this.end; g++) {
        var f = this.data[g];
        f && (f = Math.abs(f.x[this.id] - a), f < c && (c = f, h = g));
      } else this.startOnAxis || (a -= g / 2), h = this.start + Math.round(a / g);
      h = e.fitToBounds(h, 0, b.length - 1);
      var k;
      b[h] && (k = b[h].x[this.id]);
      d ? k > this.height + 1 && h-- : k > this.width + 1 && h--;
      0 > k && h++;
      return h = e.fitToBounds(h, 0, b.length - 1);
    },
    dateToCoordinate: function dateToCoordinate(a) {
      return this.parseDates && !this.equalSpacing ? (a.getTime() - this.startTime) * this.stepWidth : this.parseDates && this.equalSpacing ? (a = this.chart.getClosestIndex(this.data, "time", a.getTime(), !1, 0, this.data.length - 1), this.getCoordinate(a - this.start)) : NaN;
    },
    categoryToCoordinate: function categoryToCoordinate(a) {
      if (this.chart) {
        if (this.parseDates) return this.dateToCoordinate(new Date(a));
        a = this.chart.getCategoryIndexByValue(a);
        if (!isNaN(a)) return this.getCoordinate(a - this.start);
      } else return NaN;
    },
    coordinateToDate: function coordinateToDate(a) {
      return this.equalSpacing ? (a = this.xToIndex(a), new Date(this.data[a].time)) : new Date(this.startTime + a / this.stepWidth);
    },
    coordinateToValue: function coordinateToValue(a) {
      a = this.xToIndex(a);
      if (a = this.data[a]) return this.parseDates ? a.time : a.category;
    },
    getCoordinate: function getCoordinate(a) {
      a *= this.stepWidth;
      this.startOnAxis || (a += this.stepWidth / 2);
      return Math.round(a);
    },
    formatValue: function formatValue(a, b) {
      b || (b = this.currentDateFormat);
      this.parseDates && (a = e.formatDate(new Date(a), b, this.chart));
      return a;
    },
    showBalloonAt: function showBalloonAt(a, b) {
      void 0 === b && (b = this.parseDates ? this.dateToCoordinate(new Date(a)) : this.categoryToCoordinate(a));
      return this.adjustBalloonCoordinate(b);
    },
    formatBalloonText: function formatBalloonText(a, b, c) {
      var d = "",
          g = "",
          h = this.chart,
          f = this.data[b];
      if (f) if (this.parseDates) d = e.formatDate(f.category, c, h), b = e.changeDate(new Date(f.category), this.minPeriod, 1), g = e.formatDate(b, c, h), -1 != d.indexOf("fff") && (d = e.formatMilliseconds(d, f.category), g = e.formatMilliseconds(g, b));else {
        var k;
        this.data[b + 1] && (k = this.data[b + 1]);
        d = e.fixNewLines(f.category);
        k && (g = e.fixNewLines(k.category));
      }
      a = a.replace(/\[\[category\]\]/g, String(d));
      return a = a.replace(/\[\[toCategory\]\]/g, String(g));
    },
    adjustBalloonCoordinate: function adjustBalloonCoordinate(a, b) {
      var c = this.xToIndex(a),
          d = this.chart.chartCursor;

      if (this.stickBalloonToCategory) {
        var e = this.data[c];
        e && (a = e.x[this.id]);
        this.stickBalloonToStart && (a -= this.cellWidth / 2);
        var h = 0;

        if (d) {
          var f = d.limitToGraph;

          if (f) {
            var k = f.valueAxis.id;
            f.hidden || (h = e.axes[k].graphs[f.id].y);
          }

          this.rotate ? ("left" == this.position ? (f && (h -= d.width), 0 < h && (h = 0)) : 0 > h && (h = 0), d.fixHLine(a, h)) : ("top" == this.position ? (f && (h -= d.height), 0 < h && (h = 0)) : 0 > h && (h = 0), d.fullWidth && (a += 1), d.fixVLine(a, h));
        }
      }

      d && !b && (d.setIndex(c), this.parseDates && d.setTimestamp(this.coordinateToDate(a).getTime()));
      return a;
    }
  });
})();

/***/ }),

/***/ "./resources/template/assets/pages/widget/excanvas.js":
/*!************************************************************!*\
  !*** ./resources/template/assets/pages/widget/excanvas.js ***!
  \************************************************************/
/***/ (() => {

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Known Issues: (From VML version)
//
// * Patterns are not implemented.
// * Radial gradient are not implemented. The VML version of these look very
//   different from the canvas one.
// * Coordsize. The width and height attribute have higher priority than the
//   width and height style values which isn't correct.
// * Painting mode isn't implemented.
// * Canvas width/height should is using content-box by default. IE in
//   Quirks mode will draw the canvas using border-box. Either change your
//   doctype to HTML5
//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
//   or use Box Sizing Behavior from WebFX
//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
// * Optimize. There is always room for speed improvements.
//Known Issues: Silverlight version
//
// * Doing a transformation during a path (ie lineTo, transform, lineTo) will
//   not work corerctly because the transform is done to the whole path (ie
//   transform, lineTo, lineTo)
// * Patterns are not yet implemented.
// only add this code if we do not already have a canvas implementation
if (!window.CanvasRenderingContext2D) {
  (function () {
    var xamlId;
    var G_vmlCanvasManager_ = {
      init: function init(opt_doc) {
        var doc = opt_doc || document; // Create a dummy element so that IE will allow canvas elements to be
        // recognized.

        doc.createElement('canvas');

        if (/MSIE/.test(navigator.userAgent) && !window.opera) {
          var self = this;
          createXamlScriptTag();
          doc.attachEvent('onreadystatechange', function () {
            self.init_(doc);
          });
        }
      },
      init_: function init_(doc) {
        // setup default css
        var ss = doc.createStyleSheet();
        ss.cssText = 'canvas{display:inline-block;overflow:hidden;' + // default size is 300x150 in Gecko and Opera
        'text-align:left;width:300px;height:150px}' + 'canvas *{width:100%;height:100%;border:0;' + 'background:transparen;margin:0}' + 'canvas div {position:relative}' + // Place a div on top of the plugin.
        'canvas div div{position:absolute;top:0;' + // needs to be "non transparent"
        'filter:alpha(opacity=0);background:red}'; // find all canvas elements

        var els = doc.getElementsByTagName('canvas');

        for (var i = 0; i < els.length; i++) {
          if (!els[i].getContext) {
            this.initElement(els[i]);
          }
        }
      },

      /**
       * Public initializes a canvas element so that it can be used as canvas
       * element from now on. This is called automatically before the page is
       * loaded but if you are creating elements using createElement you need to
       * make sure this is called on the element.
       * @param {HTMLElement} el The canvas element to initialize.
       * @return {HTMLElement} the element that was created.
       */
      initElement: function initElement(el) {
        el.getContext = function () {
          if (this.context_) {
            return this.context_;
          }

          return this.context_ = new CanvasRenderingContext2D_(this);
        };

        var attrs = el.attributes;

        if (attrs.width && attrs.width.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setWidth_(attrs.width.nodeValue);
          el.style.width = attrs.width.nodeValue + 'px';
        } else {
          el.width = el.clientWidth;
        }

        if (attrs.height && attrs.height.specified) {
          // TODO: use runtimeStyle and coordsize
          // el.getContext().setHeight_(attrs.height.nodeValue);
          el.style.height = attrs.height.nodeValue + 'px';
        } else {
          el.height = el.clientHeight;
        } // insert object tag


        el.innerHTML = getObjectHtml(); // do not use inline function because that will leak memory

        el.attachEvent('onpropertychange', onPropertyChange);
        return el;
      }
    };

    function onPropertyChange(e) {
      var el = e.srcElement;

      switch (e.propertyName) {
        case 'width':
          el.style.width = el.attributes.width.nodeValue + 'px';
          el.getContext().clearRect();
          break;

        case 'height':
          el.style.height = el.attributes.height.nodeValue + 'px';
          el.getContext().clearRect();
          break;
      }
    }

    G_vmlCanvasManager_.init();

    function createXamlScriptTag() {
      // This script tag contains the boilerplate XAML.
      document.write('<script type=text/xaml>' + '<Canvas x:Name="root" ' + 'xmlns="http://schemas.microsoft.com/client/2007" ' + 'xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" ' + 'Width="300" ' + 'Height="150" ' + 'Background="Transparent"> ' + '</Canvas>' + '</script>'); // Find the id of the writtenscript file.

      var scripts = document.scripts;
      var script = scripts[scripts.length - 1];
      xamlId = script.uniqueID;
      script.id = xamlId;
    }

    function getObjectHtml(fn) {
      return '<div><object type="application/x-silverlight" >' + '<param name="windowless" value="true">' + '<param name="background" value="transparent">' + '<param name="source" value="#' + xamlId + '">' + '</object><div></div></div>';
    }

    function hasSilverlight() {
      try {
        new ActiveXObject('AgControl.AgControl');
        return true;
      } catch (_) {
        return false;
      }
    } // precompute "00" to "FF"


    var dec2hex = [];

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        dec2hex[i * 16 + j] = i.toString(16) + j.toString(16);
      }
    }

    function createMatrixIdentity() {
      return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    }

    function matrixMultiply(m1, m2) {
      var result = createMatrixIdentity();

      for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
          var sum = 0;

          for (var z = 0; z < 3; z++) {
            sum += m1[x][z] * m2[z][y];
          }

          result[x][y] = sum;
        }
      }

      return result;
    }

    function doTransform(ctx) {
      transformObject(ctx, getRoot(ctx), ctx.m_);
    }

    function transformObject(ctx, obj, m) {
      var transform = obj.renderTransform;
      var matrix;

      if (!transform) {
        transform = create(ctx, '<MatrixTransform/>');
        matrix = create(ctx, '<Matrix/>');
        transform.matrix = matrix;
        obj.renderTransform = transform;
      } else {
        matrix = transform.matrix;
      }

      matrix.m11 = m[0][0];
      matrix.m12 = m[0][1];
      matrix.m21 = m[1][0];
      matrix.m22 = m[1][1];
      matrix.offsetX = m[2][0];
      matrix.offsetY = m[2][1];
    }

    function copyState(o1, o2) {
      o2.fillStyle = o1.fillStyle;
      o2.lineCap = o1.lineCap;
      o2.lineJoin = o1.lineJoin;
      o2.lineWidth = o1.lineWidth;
      o2.miterLimit = o1.miterLimit;
      o2.shadowBlur = o1.shadowBlur;
      o2.shadowColor = o1.shadowColor;
      o2.shadowOffsetX = o1.shadowOffsetX;
      o2.shadowOffsetY = o1.shadowOffsetY;
      o2.strokeStyle = o1.strokeStyle;
      o2.globalAlpha = o1.globalAlpha;
      o2.arcScaleX_ = o1.arcScaleX_;
      o2.arcScaleY_ = o1.arcScaleY_;
    } // precompute "00" to "FF"


    var decToHex = [];

    for (var i = 0; i < 16; i++) {
      for (var j = 0; j < 16; j++) {
        decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
      }
    } // Silverlight does not support spelling gray as grey.


    var colorData = {
      darkgrey: '#A9A9A9',
      darkslategrey: '#2F4F4F',
      dimgrey: '#696969',
      grey: '#808080',
      lightgrey: '#D3D3D3',
      lightslategrey: '#778899',
      slategrey: '#708090'
    };

    function getRgbHslContent(styleString) {
      var start = styleString.indexOf('(', 3);
      var end = styleString.indexOf(')', start + 1);
      var parts = styleString.substring(start + 1, end).split(','); // add alpha if needed

      if (parts.length == 4 && styleString.substr(3, 1) == 'a') {
        alpha = +parts[3];
      } else {
        parts[3] = 1;
      }

      return parts;
    }

    function percent(s) {
      return parseFloat(s) / 100;
    }

    function clamp(v, min, max) {
      return Math.min(max, Math.max(min, v));
    }

    function hslToRgb(parts) {
      var r, g, b;
      h = parseFloat(parts[0]) / 360 % 360;
      if (h < 0) h++;
      s = clamp(percent(parts[1]), 0, 1);
      l = clamp(percent(parts[2]), 0, 1);

      if (s == 0) {
        r = g = b = l; // achromatic
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
      }

      return decToHex[Math.floor(r * 255)] + decToHex[Math.floor(g * 255)] + decToHex[Math.floor(b * 255)];
    }

    function hueToRgb(m1, m2, h) {
      if (h < 0) h++;
      if (h > 1) h--;
      if (6 * h < 1) return m1 + (m2 - m1) * 6 * h;else if (2 * h < 1) return m2;else if (3 * h < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;else return m1;
    }

    function translateColor(styleString) {
      var str,
          alpha = 1;
      styleString = String(styleString);

      if (styleString.charAt(0) == '#') {
        return styleString;
      } else if (/^rgb/.test(styleString)) {
        var parts = getRgbHslContent(styleString);
        var str = '',
            n;

        for (var i = 0; i < 3; i++) {
          if (parts[i].indexOf('%') != -1) {
            n = Math.floor(percent(parts[i]) * 255);
          } else {
            n = +parts[i];
          }

          str += decToHex[clamp(n, 0, 255)];
        }

        alpha = parts[3];
      } else if (/^hsl/.test(styleString)) {
        var parts = getRgbHslContent(styleString);
        str = hslToRgb(parts);
        alpha = parts[3];
      } else if (styleString in colorData) {
        return colorData[styleString];
      } else {
        return styleString;
      }

      return '#' + dec2hex[Math.floor(alpha * 255)] + str;
    }

    function processLineCap(lineCap) {
      switch (lineCap) {
        case 'butt':
          return 'flat';

        case 'round':
          return 'round';

        case 'square':
        default:
          return 'square';
      }
    }

    function getRoot(ctx) {
      return ctx.canvas.firstChild.firstChild.content.findName('root');
    }

    function create(ctx, s, opt_args) {
      if (opt_args) {
        s = s.replace(/\%(\d+)/g, function (match, index) {
          return opt_args[+index - 1];
        });
      }

      try {
        return ctx.canvas.firstChild.firstChild.content.createFromXaml(s);
      } catch (ex) {
        throw Error('Could not create XAML from: ' + s);
      }
    }

    function drawShape(ctx, s, opt_args) {
      var canvas = ctx.lastCanvas_ || create(ctx, '<Canvas/>');
      var shape = create(ctx, s, opt_args);
      canvas.children.add(shape);
      transformObject(ctx, canvas, ctx.m_);

      if (!ctx.lastCanvas_) {
        getRoot(ctx).children.add(canvas);
        ctx.lastCanvas_ = canvas;
      }

      return shape;
    }

    function createBrushObject(ctx, value) {
      if (value instanceof CanvasMega_) {
        return value.createBrush_(ctx);
      } else if (value instanceof CanvasPattern_) {
        throw Error('Not implemented');
      } else {
        return create(ctx, '<SolidColorBrush Color="%1"/>', [translateColor(value)]);
      }
    }
    /**
     * This class implements CanvasRenderingContext2D interface as described by
     * the WHATWG.
     * @param {HTMLElement} surfaceElement The element that the 2D context should
     *     be associated with
     */


    function CanvasRenderingContext2D_(surfaceElement) {
      this.m_ = createMatrixIdentity();
      this.lastCanvas_ = null;
      this.mStack_ = [];
      this.aStack_ = [];
      this.currentPath_ = []; // Canvas context properties

      this.strokeStyle = '#000';
      this.fillStyle = '#000';
      this.lineWidth = 1;
      this.lineJoin = 'miter';
      this.lineCap = 'butt';
      this.miterLimit = 10;
      this.globalAlpha = 1;
      this.canvas = surfaceElement;
    }

    ;
    var contextPrototype = CanvasRenderingContext2D_.prototype;

    contextPrototype.clearRect = function () {
      var root = getRoot(this);
      root.children.clear(); // TODO: Implement

      this.currentPath_ = [];
      this.lastCanvas_ = null;
    };

    contextPrototype.beginPath = function () {
      // TODO: Branch current matrix so that save/restore has no effect
      //       as per safari docs.
      this.currentPath_ = [];
    };

    contextPrototype.moveTo = function (aX, aY) {
      this.currentPath_.push('M' + aX + ',' + aY);
    };

    contextPrototype.lineTo = function (aX, aY) {
      if (this.currentPath_.length == 0) return;
      this.currentPath_.push('L' + aX + ',' + aY);
    };

    contextPrototype.bezierCurveTo = function (aCP1x, aCP1y, aCP2x, aCP2y, aX, aY) {
      if (this.currentPath_.length == 0) return;
      this.currentPath_.push('C' + aCP1x + ',' + aCP1y + ' ' + aCP2x + ',' + aCP2y + ' ' + aX + ' ' + aY);
    };

    contextPrototype.quadraticCurveTo = function (aCPx, aCPy, aX, aY) {
      if (this.currentPath_.length == 0) return;
      this.currentPath_.push('Q' + aCPx + ',' + aCPy + ' ' + aX + ',' + aY);
    };

    contextPrototype.arcTo = function (x1, y1, x2, y2, radius) {
      if (this.currentPath_.length == 0) return; // TODO: Implement
    };

    contextPrototype.arc = function (aX, aY, aRadius, aStartAngle, aEndAngle, aClockwise) {
      var deltaAngle = Math.abs(aStartAngle - aEndAngle); // If start and stop are the same WebKit and Moz does nothing

      if (aStartAngle == aEndAngle) {
        // different browsers behave differently here so we do the easiest thing
        return;
      }

      var endX = aX + aRadius * Math.cos(aEndAngle);
      var endY = aY + aRadius * Math.sin(aEndAngle);

      if (deltaAngle >= 2 * Math.PI) {
        // if larger than 2PI
        this.arc(aX, aY, aRadius, aStartAngle, aStartAngle + Math.PI, aClockwise);
        this.arc(aX, aY, aRadius, aStartAngle + Math.PI, aStartAngle + 2 * Math.PI, aClockwise); // now move to end point

        this.moveTo(endX, endY);
        return;
      }

      var startX = aX + aRadius * Math.cos(aStartAngle);
      var startY = aY + aRadius * Math.sin(aStartAngle);
      var rotationAngle = deltaAngle * 180 / Math.PI; // sign, abs?

      var sweepDirection = aClockwise ? 0 : 1;
      var isLargeArc = rotationAngle >= 180 == Boolean(aClockwise) ? 0 : 1;

      if (this.currentPath_.length != 0) {
        // add line to start point
        this.lineTo(startX, startY);
      } else {
        this.moveTo(startX, startY);
      }

      this.currentPath_.push('A' + aRadius + ',' + aRadius + ' ' + rotationAngle + ' ' + isLargeArc + ' ' + sweepDirection + ' ' + endX + ',' + endY);
    };

    contextPrototype.rect = function (aX, aY, aWidth, aHeight) {
      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
    };

    contextPrototype.strokeRect = function (aX, aY, aWidth, aHeight) {
      // Will destroy any existing path (same as FF behaviour)
      this.beginPath();
      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.stroke();
      this.currentPath_ = [];
    };

    contextPrototype.fillRect = function (aX, aY, aWidth, aHeight) {
      // Will destroy any existing path (same as FF behaviour)
      this.beginPath();
      this.moveTo(aX, aY);
      this.lineTo(aX + aWidth, aY);
      this.lineTo(aX + aWidth, aY + aHeight);
      this.lineTo(aX, aY + aHeight);
      this.closePath();
      this.fill();
      this.currentPath_ = [];
    };

    contextPrototype.createLinearMega = function (aX0, aY0, aX1, aY1) {
      return new LinearCanvasMega_(aX0, aY0, aX1, aY1);
    };

    contextPrototype.createRadialMega = function (x0, y0, r0, x1, y1, r1) {
      return new RadialCanvasMega_(x0, y0, r0, x1, y1, r1);
    };

    contextPrototype.drawImage = function (image, var_args) {
      var dx, dy, dw, dh, sx, sy, sw, sh; // For Silverlight we don't need to get the size of the image since
      // Silverlight uses the image original dimension if not provided.

      if (arguments.length == 3) {
        dx = arguments[1];
        dy = arguments[2]; // Keep sx, sy, sw, dw, sh and dh undefined
      } else if (arguments.length == 5) {
        dx = arguments[1];
        dy = arguments[2];
        dw = arguments[3];
        dh = arguments[4]; // Keep sx, sy, sw and sh undefined
      } else if (arguments.length == 9) {
        sx = arguments[1];
        sy = arguments[2];
        sw = arguments[3];
        sh = arguments[4];
        dx = arguments[5];
        dy = arguments[6];
        dw = arguments[7];
        dh = arguments[8];
      } else {
        throw Error('Invalid number of arguments');
      }

      var slImage; // If we have a source rect we need to clip the image.

      if (arguments.length == 9) {
        slImage = drawShape(this, '<Image Source="%1"/>', [image.src]);
        var clipRect = create(this, '<RectangleGeometry Rect="%1,%2,%3,%4"/>', [sx, sy, sw, sh]);
        slImage.clip = clipRect;
        var m = createMatrixIdentity(); // translate to 0,0

        m[2][0] = -sx;
        m[2][1] = -sy; // scale

        var m2 = createMatrixIdentity();
        m2[0][0] = dw / sw;
        m2[1][1] = dh / sh;
        m = matrixMultiply(m, m2); // translate to destination

        m[2][0] += dx;
        m[2][1] += dy;
        transformObject(this, slImage, m);
      } else {
        slImage = drawShape(this, '<Image Source="%1" Canvas.Left="%2" Canvas.Top="%3"/>', [image.src, dx, dy]);

        if (dw != undefined || dh != undefined) {
          slImage.width = dw;
          slImage.height = dh;
          slImage.stretch = 'fill';
        }
      }
    };

    contextPrototype.stroke = function () {
      if (this.currentPath_.length == 0) return;
      var path = drawShape(this, '<Path Data="%1"/>', [this.currentPath_.join(' ')]);
      path.stroke = createBrushObject(this, this.strokeStyle);
      path.opacity = this.globalAlpha;
      path.strokeThickness = this.lineWidth;
      path.strokeMiterLimit = this.miterLimit;
      path.strokeLineJoin = this.lineJoin; // Canvas does not differentiate start from end

      path.strokeEndLineCap = path.strokeStartLineCap = processLineCap(this.lineCap);
    };

    contextPrototype.fill = function () {
      if (this.currentPath_.length == 0) return;
      var path = drawShape(this, '<Path Data="%1"/>', [this.currentPath_.join(' ')]); // The spec says to use non zero but Silverlight uses EvenOdd by defaul

      path.data.fillRule = 'NonZero';
      path.fill = createBrushObject(this, this.fillStyle);
      path.fill.opacity = this.globalAlpha; // TODO: What about even-odd etc?
    };

    contextPrototype.closePath = function () {
      this.currentPath_.push('z');
    };
    /**
     * Sets the transformation matrix and marks things as dirty
     */


    function setM(self, m) {
      self.m_ = m;
      self.lastCanvas_ = null;
    }

    ;

    contextPrototype.save = function () {
      var o = {};
      copyState(this, o);
      this.aStack_.push(o);
      this.mStack_.push(this.m_);
      setM(this, matrixMultiply(createMatrixIdentity(), this.m_));
    };

    contextPrototype.restore = function () {
      if (this.aStack_.length) {
        copyState(this.aStack_.pop(), this);
        this.m_ = this.mStack_.pop();
      }
    };

    contextPrototype.translate = function (aX, aY) {
      var m1 = [[1, 0, 0], [0, 1, 0], [aX, aY, 1]];
      setM(this, matrixMultiply(m1, this.m_));
    };

    contextPrototype.rotate = function (aRot) {
      var c = Math.cos(aRot);
      var s = Math.sin(aRot);
      var m1 = [[c, s, 0], [-s, c, 0], [0, 0, 1]];
      setM(this, matrixMultiply(m1, this.m_));
    };

    contextPrototype.scale = function (aX, aY) {
      var m1 = [[aX, 0, 0], [0, aY, 0], [0, 0, 1]];
      setM(this, matrixMultiply(m1, this.m_));
    };

    contextPrototype.transform = function (m11, m12, m21, m22, dx, dy) {
      var m1 = [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]];
      setM(this, matrixMultiply(m1, this.m_));
    };

    contextPrototype.setTransform = function (m11, m12, m21, m22, dx, dy) {
      setM(this, [[m11, m12, 0], [m21, m22, 0], [dx, dy, 1]]);
    };

    contextPrototype.clip = function () {
      if (this.currentPath_.length) {
        var clip = this.currentPath_.join(' ');
        var canvas = create(this, '<Canvas Width="%1" Height="%2" Clip="%3"/>', [getRoot(this).width, getRoot(this).height, clip]);
        var parent = this.lastCanvas_ || getRoot(this);
        parent.children.add(canvas);
        this.lastCanvas_ = canvas;
      }
    };

    contextPrototype.createPattern = function () {
      return new CanvasPattern_();
    }; // Mega / Pattern Stubs


    function CanvasMega_() {
      this.colors_ = [];
    }

    CanvasMega_.prototype.addColorStop = function (aOffset, aColor) {
      aColor = translateColor(aColor);
      this.colors_.push({
        offset: aOffset,
        color: aColor
      });
    };

    CanvasMega_.prototype.createStops_ = function (ctx, brushObj, colors) {
      var gradientStopCollection = brushObj.gradientStops;

      for (var i = 0, c; c = colors[i]; i++) {
        var color = translateColor(c.color);
        gradientStopCollection.add(create(ctx, '<MegaStop Color="%1" Offset="%2"/>', [color, c.offset]));
      }
    };

    function LinearCanvasMega_(x0, y0, x1, y1) {
      CanvasMega_.call(this);
      this.x0_ = x0;
      this.y0_ = y0;
      this.x1_ = x1;
      this.y1_ = y1;
    }

    LinearCanvasMega_.prototype = new CanvasMega_();

    LinearCanvasMega_.prototype.createBrush_ = function (ctx) {
      var brushObj = create(ctx, '<LinearMegaBrush MappingMode="Absolute" ' + 'StartPoint="%1,%2" EndPoint="%3,%4"/>', [this.x0_, this.y0_, this.x1_, this.y1_]);
      this.createStops_(ctx, brushObj, this.colors_);
      return brushObj;
    };

    function isNanOrInfinite(v) {
      return isNaN(v) || !isFinite(v);
    }

    function RadialCanvasMega_(x0, y0, r0, x1, y1, r1) {
      if (r0 < 0 || r1 < 0 || isNanOrInfinite(x0) || isNanOrInfinite(y0) || isNanOrInfinite(x1) || isNanOrInfinite(y1)) {
        // IE does not support DOMException so this is as close as we get.
        var error = Error('DOMException.INDEX_SIZE_ERR');
        error.code = 1;
        throw error;
      }

      CanvasMega_.call(this);
      this.x0_ = x0;
      this.y0_ = y0;
      this.r0_ = r0;
      this.x1_ = x1;
      this.y1_ = y1;
      this.r1_ = r1;
    }

    RadialCanvasMega_.prototype = new CanvasMega_();

    CanvasMega_.prototype.createBrush_ = function (ctx) {
      if (this.x0_ == this.x1_ && this.y0_ == this.y1_ && this.r0_ == this.r1_) {
        return null;
      }

      var radius = Math.max(this.r0_, this.r1_);
      var minRadius = Math.min(this.r0_, this.r1_);
      var brushObj = create(ctx, '<RadialMegaBrush MappingMode="Absolute" ' + 'MegaOrigin="%1,%2" Center="%3,%4" ' + 'RadiusX="%5" RadiusY="%5"/>', [this.x0_, this.y0_, this.x1_, this.y1_, radius]);
      var colors = this.colors_.concat();

      if (this.r1_ < this.r0_) {
        // reverse color stop array
        colors.reverse();

        for (var i = 0, c; c = colors[i]; i++) {
          c.offset = 1 - c.offset;
        }
      } // sort the color stops


      colors.sort(function (c1, c2) {
        return c1.offset - c2.offset;
      });

      if (minRadius > 0) {
        // We need to adjust the color stops since SL always have the inner radius
        // at (0, 0) so we change the stops in case the min radius is not 0.
        for (var i = 0, c; c = colors[i]; i++) {
          c.offset = minRadius / radius + (radius - minRadius) / radius * c.offset;
        }
      }

      this.createStops_(ctx, brushObj, colors);
      return brushObj;
    };

    function CanvasPattern_() {} // set up externs


    G_vmlCanvasManager = G_vmlCanvasManager_;
    CanvasRenderingContext2D = CanvasRenderingContext2D_;
    CanvasMega = CanvasMega_;
    CanvasPattern = CanvasPattern_;
  })();
} // if

/***/ }),

/***/ "./node_modules/browserify sync recursive":
/*!***************************************!*\
  !*** ./node_modules/browserify/ sync ***!
  \***************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/browserify sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/express/lib sync recursive":
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/module-deps sync recursive":
/*!****************************************!*\
  !*** ./node_modules/module-deps/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/module-deps sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/popper sync recursive":
/*!***********************************!*\
  !*** ./node_modules/popper/ sync ***!
  \***********************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/popper sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/rijs.data sync recursive":
/*!**************************************!*\
  !*** ./node_modules/rijs.data/ sync ***!
  \**************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/rijs.data sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/rijs.npm/node_modules/browserify sync recursive":
/*!*************************************************************!*\
  !*** ./node_modules/rijs.npm/node_modules/browserify/ sync ***!
  \*************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/rijs.npm/node_modules/browserify sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "?2e00":
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?099f":
/*!************************!*\
  !*** ./file (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0ef1":
/*!*************************!*\
  !*** ./pause (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a678":
/*!************************!*\
  !*** ./send (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ec5d":
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?861e":
/*!***********************!*\
  !*** ./via (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e7a9":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8a65":
/*!************************!*\
  !*** colors (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8465":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d356":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0bed":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a0d2":
/*!******************************!*\
  !*** utilise/file (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c08a":
/*!******************************!*\
  !*** utilise/send (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
0,[["./resources/js/admin.js","/.js/manifest","/.js/vendor"]]]);