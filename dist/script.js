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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");



window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const mainSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    btns: '.next',
    slidesParent: '.page'
  });
  mainSlider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    slidesParent: '.showup__content-slider',
    nextBtn: '.showup__next',
    prevBtn: '.showup__prev',
    activeClass: 'card-active',
    effects: true
  });
  showUpSlider.render();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    slidesParent: '.modules__content-slider',
    nextBtn: '.modules__info-btns .slick-next',
    prevBtn: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    effects: true,
    autoplay: true
  });
  modulesSlider.render();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    slidesParent: '.feed__slider',
    nextBtn: '.feed__slider .slick-next',
    prevBtn: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  feedSlider.render();
  const videoplayer = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay');
  videoplayer.init();
});

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderMain; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class SliderMain extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns, slidesParent) {
    super(btns, slidesParent);
  }

  hideSlide() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
  }

  showSlide(i) {
    if (i > this.slides.length) {
      this.slideIndex = 1;
    }

    if (i < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      this.hanson.style.opacity = '0';

      if (i === 3) {
        setTimeout(() => {
          this.hanson.classList.add('animated', 'slideInUp');
          this.hanson.style.opacity = '1';
        }, 3000);
      } else {
        this.hanson.classList.remove('animated', 'slideInUp');
      }
    } catch (err) {}

    this.hideSlide();
    this.slides[this.slideIndex - 1].classList.add('animated', 'fadeInDown');
    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  changeIndex(n) {
    this.showSlide(this.slideIndex += n);
  }

  render() {
    try {
      this.hanson = document.querySelector('.hanson');
    } catch (err) {}

    this.showSlide(this.slideIndex);
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.changeIndex(1);
      });
      item.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlide(this.slideIndex);
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderMini; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class SliderMini extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(slidesParent, nextBtn, prevBtn, activeClass, effects, autoplay, timerId) {
    super(slidesParent, nextBtn, prevBtn, activeClass, effects, autoplay);
    this.timerId;
  }

  makeSlideActive() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove(this.activeClass);

      if (this.effects) {
        this.slides[i].querySelector('.card__title').style.opacity = '';
        this.slides[i].querySelector('.card__controls-arrow').style.opacity = '';
      }
    }

    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

    if (this.effects) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].tagName === 'BUTTON') {
        this.slidesParent.append(this.slides[i]);
      }
    }

    this.slidesParent.append(this.slides[0]);
    this.makeSlideActive();
  }

  previousSlide() {
    for (let i = this.slides.length - 1; i > 0; i--) {
      if (this.slides[i].tagName !== 'BUTTON') {
        let active = this.slides[i];
        this.slidesParent.insertBefore(active, this.slides[0]);
        this.makeSlideActive();
        break;
      }
    }
  }

  bindTriggers() {
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    this.prevBtn.addEventListener('click', () => this.previousSlide());
  }

  autoplaySlider() {
    this.timerId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  render() {
    this.slidesParent.style.cssText = `
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;
			overflow: hidden;
		`;
    this.makeSlideActive();
    this.bindTriggers();

    if (this.autoplay) {
      this.autoplaySlider();
      this.nextBtn.addEventListener('mouseenter', () => clearTimeout(this.timerId));
      this.nextBtn.addEventListener('mouseleave', () => this.autoplaySlider());
      this.prevBtn.addEventListener('mouseenter', () => clearTimeout(this.timerId));
      this.prevBtn.addEventListener('mouseleave', () => this.autoplaySlider());
      this.slidesParent.addEventListener('mouseenter', () => clearTimeout(this.timerId));
      this.slidesParent.addEventListener('mouseleave', () => this.autoplaySlider());
    }
  }

}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor({
    btns = null,
    slidesParent = null,
    nextBtn = null,
    prevBtn = null,
    activeClass = null,
    effects,
    autoplay
  } = {}) {
    this.btns = document.querySelectorAll(btns);
    this.slidesParent = document.querySelector(slidesParent);
    this.nextBtn = document.querySelector(nextBtn);
    this.prevBtn = document.querySelector(prevBtn);
    this.activeClass = activeClass;
    this.effects = effects;
    this.autoplay = autoplay;
    this.slides = this.slidesParent.children;
    this.slideIndex = 1;
  }

}

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(playBtnsSelector, overlaySelector) {
    this.playBtns = document.querySelectorAll(playBtnsSelector);
    this.overlay = document.querySelector(overlaySelector);
    this.close = this.overlay.querySelector('.close');
  }

  bindPlayBtn() {
    this.playBtns.forEach(item => {
      item.addEventListener('click', e => {
        if (this.player) {
          // or if (document.querySelector('iframe#frame'))
          this.overlay.style.display = 'flex';
        } else {
          const itemUrl = item.getAttribute('data-url');
          this.overlay.style.display = 'flex';
          this.createPlayer(itemUrl);
        }
      });
    });
  }

  bindCloseBtn() {
    this.overlay.addEventListener('click', e => {
      if (e.target == this.overlay || e.target == this.close) {
        this.overlay.style.display = '';
        this.player.stopVideo();
      }
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
  }

  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindPlayBtn();
    this.bindCloseBtn();
  }

}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map