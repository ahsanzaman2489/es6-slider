(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * This is a default congig for slider
 * @return {defaultconfig} some object
 */
var defaultconfig = exports.defaultconfig = {
    elements: {
        slider: '.slider',
        wrapper: '.slider-wrapper',
        slides: '.slide',
        pagination: '.slider-pagination',
        paginationItem: '.page'
    },

    direction: {
        NEXT: '.next',
        PREVIOUS: '.previous'
    },
    activeSlide: 0,
    animationDuration: 600
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sliderConfig2 = require("./sliderConfig");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  if you dont want to create it then just use sliderInit Class for initiating
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @methods getResponseDocument() , CreateElements()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @return {slider} some object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var createSlider = exports.createSlider = function (_sliderConfig) {
    _inherits(createSlider, _sliderConfig);

    function createSlider(element) {
        var _this;

        _classCallCheck(this, createSlider);

        var _this = _possibleConstructorReturn(this, (createSlider.__proto__ || Object.getPrototypeOf(createSlider)).call(this));

        _this.dom = (_this = _possibleConstructorReturn(this, (createSlider.__proto__ || Object.getPrototypeOf(createSlider)).call(this)), _this).getConfig(element);
        _this.getResponseDocument();
        return _this;
    }

    _createClass(createSlider, [{
        key: "getResponseDocument",
        value: function getResponseDocument() {
            var _this2 = this;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                if (xhttp.readyState == 4 && xhttp.status == 200) {

                    _this2.CreateElements(JSON.parse(xhttp.responseText));
                }
            };

            xhttp.open("GET", "./data/data.json", true);
            xhttp.send();
        }
    }, {
        key: "CreateElements",
        value: function CreateElements(response) {
            var dom = this.dom;
            var slides = response.data;
            var excerpt = null;

            slides.forEach(function (item, index) {

                if (item.description.length > 700) {
                    excerpt = item.description.substring(0, 700) + ' ...';
                } else {
                    excerpt = item.description;
                }

                dom.$wrapper.append("\n            \n                <div class=\"slide\">\n                <h1>" + item.name + " <span>" + item.location + "</span></h1>\n                \n                <div class=\"row\">\n                <div class=\"col-md-4\">\n                <div class='logo'>\n                <img src=\"" + item.links.logo + "\" alt=\"" + item.name + "\" class=\"img-responsive\">\n                </div>\n                </div>\n                <div class=\"col-md-8\">\n                <div class='description'>\n                <h2>description</h2>\n                <p>" + excerpt + "</p>\n                <a href=\"#!\" class=\"button\">read more</a>\n                </div>\n                </div>\n                <div class=\"clearfix\"></div>\n                </div>                \n                </div>\n            ");

                dom.$pagination.append("\n                    <div class=\"page\" data-slide=\"" + index + "\"></div>\n                ");
            });

            dom.$totalSlides = dom.$slider.find('.slide');
            dom.$wrapper.find(dom.$totalSlides).first().addClass('active');
            dom.$paginationItem = dom.$pagination.find('.page');
            dom.$paginationItem.first().addClass('active');
        }
    }]);

    return createSlider;
}(_sliderConfig2.sliderConfig);

},{"./sliderConfig":4}],3:[function(require,module,exports){
'use strict';

var _createSlider = require('./createSlider');

var _sliderInit = require('./sliderInit');

var _sliderConfig = require('./sliderConfig');

var slider = function slider() {
  return {
    createSlider: _createSlider.createSlider,
    sliderInit: _sliderInit.sliderInit
  };
}; /**
    * Created by ahsan on 10/20/16.
    */

/**
 * This is the barrel file to conclude all slider modules
 * @return {slider}
 */

var newSlider = slider();
var doneNewSlider = new newSlider.createSlider(); //If you have slider content then do not call this method

var init = new newSlider.sliderInit();

},{"./createSlider":2,"./sliderConfig":4,"./sliderInit":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sliderConfig = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**jquery watch element for change
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This is the Main slider class from which other class inherits properties and methods
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {mainElement} some string
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @return {basicConfig} from Dom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Config = require('./Config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sliderConfig = exports.sliderConfig = function () {
    function sliderConfig() {
        _classCallCheck(this, sliderConfig);
    }

    _createClass(sliderConfig, [{
        key: 'getConfig',
        value: function getConfig() {
            var mainElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Config.defaultconfig.elements.slider;


            var $slider = $(mainElement),
                $wrapper = $slider.find($(_Config.defaultconfig.elements.wrapper)),
                $totalSlides = $slider.find(_Config.defaultconfig.elements.slides),
                $pagination = $slider.find($(_Config.defaultconfig.elements.pagination)),
                $paginationItem = $pagination.find(_Config.defaultconfig.elements.paginationItem),
                $nextTrigger = $slider.find(_Config.defaultconfig.direction.NEXT),
                $previousTrigger = $slider.find(_Config.defaultconfig.direction.PREVIOUS),
                activeSlide = _Config.defaultconfig.activeSlide,
                animationDuration = _Config.defaultconfig.animationDuration;

            return {
                $slider: $slider,
                $wrapper: $wrapper,
                $pagination: $pagination,
                $paginationItem: $paginationItem,
                $totalSlides: $totalSlides,
                $nextTrigger: $nextTrigger,
                $previousTrigger: $previousTrigger,
                activeSlide: activeSlide,
                animationDuration: animationDuration

            };
        }
    }]);

    return sliderConfig;
}();

},{"./Config":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sliderInit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } }; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * This is the final module that initialize the slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */


var _sliderConfig2 = require('./sliderConfig');

var _Config = require('./Config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderInit = exports.sliderInit = function (_sliderConfig) {
    _inherits(sliderInit, _sliderConfig);

    function sliderInit(element) {
        _classCallCheck(this, sliderInit);

        var _this = _possibleConstructorReturn(this, (sliderInit.__proto__ || Object.getPrototypeOf(sliderInit)).call(this));

        _this.animation = false;

        setTimeout(function () {
            _this.dom = _get(sliderInit.prototype.__proto__ || Object.getPrototypeOf(sliderInit.prototype), 'getConfig', _this).call(_this, element);
            _this.navigate();
        }, 200);

        return _this;
    }

    _createClass(sliderInit, [{
        key: 'navigate',
        value: function navigate() {
            var _this2 = this;

            this.dom.$paginationItem = this.dom.$slider.find('div.page');

            this.dom.$nextTrigger.click(function () {
                _this2.next();
            });

            this.dom.$previousTrigger.click(function () {

                _this2.previous();
            });

            this.dom.$paginationItem.click(function (e) {

                _this2.target(e);
            });
        }
    }, {
        key: 'next',
        value: function next() {

            if (!this.animation) {
                this.slide(_Config.defaultconfig.direction.NEXT);
            }
        }
    }, {
        key: 'previous',
        value: function previous() {
            if (!this.animation) {
                this.slide(_Config.defaultconfig.direction.PREVIOUS);
            }
        }
    }, {
        key: 'target',
        value: function target(e) {
            if (!this.animation) {
                this.slideTo(e);
            }
        }
    }, {
        key: 'slide',
        value: function slide(direction) {

            this.animation = true;
            var previousSlide = null;

            if (direction == '.next') {
                previousSlide = this.dom.activeSlide;
                this.dom.activeSlide++;

                if (this.dom.activeSlide >= this.dom.$totalSlides.length) {
                    this.dom.activeSlide = 0;
                    previousSlide = this.dom.$totalSlides.length - 1;
                }
                this.isSliding('left', 'next', previousSlide);
            } else {
                previousSlide = this.dom.activeSlide;
                this.dom.activeSlide--;

                if (this.dom.activeSlide < 0) {
                    this.dom.activeSlide = this.dom.$totalSlides.length - 1;

                    previousSlide = 0;
                }
                this.isSliding('right', 'previous', previousSlide);
            }
        }
    }, {
        key: 'slideTo',
        value: function slideTo(e) {

            var previousSlide = this.dom.activeSlide;
            this.dom.activeSlide = parseInt(e.target.dataset.slide);

            if (previousSlide == this.dom.activeSlide) return;

            this.animation = true;

            if (this.dom.activeSlide > previousSlide) {
                this.isSliding('left', 'next', previousSlide);
            } else {
                this.isSliding('right', 'previous', previousSlide);
            }
        }
    }, {
        key: 'isSliding',
        value: function isSliding(direction, movement, previousSlide) {
            var _this3 = this;

            this.dom.$totalSlides[this.dom.activeSlide].classList.add(movement);
            setTimeout(function () {
                _this3.dom.$totalSlides[_this3.dom.activeSlide].classList.add(direction);
                _this3.dom.$totalSlides[previousSlide].classList.add(direction);
                _this3.dom.$paginationItem[_this3.dom.activeSlide].classList.add('active');
                _this3.dom.$paginationItem[previousSlide].className = 'page';
            }, 70);

            this.slideComplete(previousSlide);
        }
    }, {
        key: 'slideComplete',
        value: function slideComplete(previousSlide) {
            var _this4 = this;

            setTimeout(function () {

                _this4.dom.$totalSlides[previousSlide].className = "slide";
                _this4.dom.$totalSlides[_this4.dom.activeSlide].className = "slide active";
                _this4.animation = false;
            }, this.dom.animationDuration + 70);
        }
    }]);

    return sliderInit;
}(_sliderConfig2.sliderConfig);

},{"./Config":1,"./sliderConfig":4}]},{},[3]);
