/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./babel/babel.js":
/*!************************!*\
  !*** ./babel/babel.js ***!
  \************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack:///./babel/babel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./babel/babel */ \"./babel/babel.js\");\n/* harmony import */ var _babel_babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scr_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scr/cart */ \"./script/cart.js\");\n/* harmony import */ var _scr_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scr/tabs */ \"./script/tabs.js\");\n/* harmony import */ var _scr_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scr/sort */ \"./script/sort.js\");\n/* harmony import */ var _scr_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scr_sort__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scr_db_db_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scr/db/db.json */ \"./script/db/db.json\");\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style */ \"./styles/style.css\");\n/* harmony import */ var _styles_common_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/common/root */ \"./styles/common/root.scss\");\n/* harmony import */ var _styles_common_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/common/header */ \"./styles/common/header.scss\");\n/* harmony import */ var _styles_common_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/common/main */ \"./styles/common/main.scss\");\n/* harmony import */ var _styles_common_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/common/media */ \"./styles/common/media.scss\");\n/* harmony import */ var _img_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @img/logo */ \"./images/logo.png\");\n/* harmony import */ var _img_basket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @img/basket */ \"./images/basket.svg\");\n/* harmony import */ var _img_burger_pizza__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @img/burger-pizza */ \"./images/burger-pizza.png\");\n/* harmony import */ var _img_arrow_left__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @img/arrow-left */ \"./images/arrow-left.svg\");\n/* harmony import */ var _img_burger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @img/burger */ \"./images/burger.png\");\n/* harmony import */ var _img_cart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @img/cart */ \"./images/cart.svg\");\n/* harmony import */ var _img_cheese_pizza__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @img/cheese-pizza */ \"./images/cheese-pizza.png\");\n/* harmony import */ var _img_chicken_pizza__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @img/chicken-pizza */ \"./images/chicken-pizza.png\");\n/* harmony import */ var _img_shrimps_pizza__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @img/shrimps-pizza */ \"./images/shrimps-pizza.png\");\n/* harmony import */ var _img_cross__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @img/cross */ \"./images/cross.svg\");\n/* harmony import */ var _img_minus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @img/minus */ \"./images/minus.svg\");\n/* harmony import */ var _img_plus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @img/plus */ \"./images/plus.svg\");\n/* harmony import */ var _img_rubbish__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @img/rubbish */ \"./images/rubbish.svg\");\n/* harmony import */ var _img_truck__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @img/truck */ \"./images/truck.png\");\n/* harmony import */ var _img_smile_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @img/smile.jpg */ \"./images/smile.jpg\");\n/* harmony import */ var _img_arrow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @img/arrow */ \"./images/arrow.svg\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./script/cart.js":
/*!************************!*\
  !*** ./script/cart.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\ntry {\n  var basket = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(array) {\n      var pizzaCheese, total;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              pizzaCheese = document.querySelector('.main__pizza-cheese');\n              pizzaCheese.innerHTML = '';\n              array.forEach(function (item, index) {\n                var pizzaAbout = document.createElement('div');\n                pizzaAbout.classList.add('main__pizza-aboutCheese');\n                pizzaAbout.innerHTML = \"\\n            <div class=\\\"main__pizza-aboutPizza\\\">\\n            <img class=\\\"main__pizza-img\\\" src=\\\"\".concat(item[4], \"\\\" alt=\\\"\\\">\\n            <div class=\\\"main__pizza-desctibtion\\\">\\n                <h3 class=\\\"main__pizza-title\\\">\").concat(item[0], \" </h3>\\n                <p class=\\\"main__pizza-describe\\\">\").concat(item[2], \", <span>\").concat(item[3], \"</span></p>\\n            </div>\\n            </div>\\n            <div class=\\\"main__pizza-cart\\\">\\n            <p class=\\\"main__pizza-number\\\">1</p>\\n        </div>\\n        <p class=\\\"main__pizza-price\\\"> <span>\").concat(item[1], \"</span> \\u20BD </p>\\n        <a href=\\\"\\\" class=\\\"main__pizza-cross\\\"><img src=\\\"./images/cross.svg\\\" alt=\\\"\\\"></a>\\n            \");\n                pizzaCheese.appendChild(pizzaAbout);\n              });\n\n              total = function total() {\n                var parentAmount = document.querySelectorAll('.main__pizza-number');\n                var parentPrice = document.querySelectorAll('.main__pizza-price span');\n                var totalAmount = document.querySelector('.main__check-span');\n                var totalPrice = document.querySelector('.main__check-spanPrice');\n                var index = 0;\n                var amount = 0;\n                parentAmount.forEach(function (num) {\n                  var amountNumber = Number(num.textContent);\n                  index += amountNumber;\n                });\n                var element = index;\n                totalAmount.innerHTML = \"\".concat(element);\n                parentPrice.forEach(function (num) {\n                  var priceNumber = Number(num.textContent);\n                  amount += priceNumber;\n                });\n                var priceElement = amount;\n                totalPrice.innerHTML = \"\".concat(priceElement);\n\n                if (element == '0') {\n                  location.href = 'basket.html';\n                }\n              };\n\n              total();\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function basket(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getData = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var arr, data, _loop, key;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza');\n\n            case 2:\n              arr = _context2.sent;\n              data = arr.data;\n              basket(data);\n\n              _loop = function _loop(key) {\n                var crossPay = document.querySelector('.main__check-pay');\n                var crossPizza = document.querySelectorAll('.main__pizza-cross');\n                var pizzaAbout = document.querySelectorAll('.main__pizza-aboutCheese');\n                var backPizza = document.querySelector('.main__check-back');\n                crossPizza.forEach(function (item, i) {\n                  crossPizza[i].addEventListener('click', function (e) {\n                    e.preventDefault();\n                    axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](\"https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/\".concat(data[i].id));\n                    pizzaAbout[i].style.display = 'none';\n                    setTimeout(function () {\n                      window.location.reload();\n                    }, 400);\n                  });\n                });\n                backPizza.addEventListener('click', function (e) {\n                  e.preventDefault();\n                  axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](\"https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/\".concat(data[key].id));\n                  setTimeout(function () {\n                    location.href = 'index.html';\n                  }, 300);\n                });\n                crossPay.addEventListener('click', function (e) {\n                  e.preventDefault();\n                  axios__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"](\"https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza/\".concat(data[key].id));\n                  var message = document.querySelector('.main__message');\n                  message.style.display = 'flex';\n                  setTimeout(function () {\n                    message.style.display = 'none';\n                    location.href = 'index.html';\n                  }, 4000);\n                });\n              };\n\n              for (key in data) {\n                _loop(key);\n              }\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  getData();\n} catch (e) {}\n\n//# sourceURL=webpack:///./script/cart.js?");

/***/ }),

/***/ "./script/sort.js":
/*!************************!*\
  !*** ./script/sort.js ***!
  \************************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\ntry {\n  var mainContentSort = document.querySelector('.main__content-sort '),\n      mainContentArrow = mainContentSort.querySelector('.main__content-arrow'),\n      sortPopUp = document.querySelector('.main__content-sortPopup'),\n      mainContentLi = document.querySelectorAll('.main__content-li'),\n      mainContentSortInfo = document.querySelector('.main__content-sortInfo');\n  mainContentSort.addEventListener('click', function () {\n    if (sortPopUp.classList.contains('active')) {\n      sortPopUp.classList.remove('active');\n      mainContentArrow.style.transform = \"rotate(0deg)\";\n    } else {\n      sortPopUp.classList.add('active');\n      mainContentArrow.style.transform = \"rotate(180deg)\";\n    }\n  });\n\n  var inderItems = function inderItems(arrItems) {\n    var mainTabContent = document.querySelector('.main__tabs-content');\n    mainTabContent.innerHTML = '';\n    arrItems.forEach(function (_ref) {\n      var img = _ref.img,\n          title = _ref.title,\n          typeThin = _ref.typeThin,\n          typeTraditional = _ref.typeTraditional,\n          sizeMini = _ref.sizeMini,\n          sizeMedium = _ref.sizeMedium,\n          sizeBig = _ref.sizeBig,\n          price = _ref.price,\n          addBtn = _ref.addBtn;\n      var tabsItems = document.createElement('div');\n      tabsItems.classList.add('main__tabs-items');\n      tabsItems.innerHTML = \"\\n\\n        <div class=\\\"main__tabs-item\\\">\\n        <img class=\\\"main__tabs-img\\\" src=\\\"\".concat(img, \"\\\" alt=\\\"\\\">\\n        <h4 class=\\\"main__tabs-title\\\">\").concat(title, \"</h4>\\n        <div class=\\\"main__tabs-info\\\"> \\n        <a class=\\\"main__tabs-btn\\\" href=\\\"\\\">\").concat(typeThin, \"</a>\\n        <a class=\\\"main__tabs-btn\\\" href=\\\"\\\">\").concat(typeTraditional, \"</a>\\n        <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeMini, \"</a>\\n        <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeMedium, \"</a>\\n        <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeBig, \"</a>\\n        </div>\\n        <div class=\\\"main__tabs-add\\\"> <span class=\\\"main__tabs-price\\\">\\u043E\\u0442 \").concat(price, \" \\u20BD</span>\\n        <a class=\\\"main__tabs-addCart\\\" href=\\\"\\\">\").concat(addBtn, \"</a></div>\\n        </div> \\n        \");\n      mainTabContent.appendChild(tabsItems);\n    });\n  };\n\n  mainContentLi.forEach(function (item) {\n    item.addEventListener('click', function () {\n      mainContentSortInfo.innerHTML = item.innerHTML;\n      var sort = item.dataset.sort;\n      sortPrice();\n\n      if (sort == 'популярности') {\n        setData(sort);\n      } else if (sort == 'цене') {\n        sortPrice();\n      } else if (sort == 'алфавиту') {\n        sortAlfa();\n      }\n    });\n  });\n\n  var setData = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(popular, price) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('https://pizza-3ba7e-default-rtdb.firebaseio.com/db.json').then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                var arr = popular ? data.filter(function (item) {\n                  return item.popular === popular;\n                }) : data;\n                inderItems(arr);\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function setData(_x, _x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var sortPrice = function sortPrice() {\n    fetch('https://pizza-3ba7e-default-rtdb.firebaseio.com/db.json').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var arr = data.sort(function (itme1, item2) {\n        return +itme1.price - +item2.price;\n      });\n      arr.pop();\n      inderItems(arr);\n    });\n  };\n\n  var sortAlfa = function sortAlfa() {\n    fetch('https://pizza-3ba7e-default-rtdb.firebaseio.com/db.json').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var arr = data.sort(function (item1, item2) {\n        if (item1.title > item2.title) return 1;\n        if (item1.title < item2.title) return -1;\n        return 0;\n      });\n      arr.splice(5, 1);\n      console.log(arr);\n      inderItems(arr);\n    });\n  };\n} catch (e) {}\n\n//# sourceURL=webpack:///./script/sort.js?");

/***/ }),

/***/ "./script/tabs.js":
/*!************************!*\
  !*** ./script/tabs.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // Burger\n\nvar mainBurger = document.querySelector('.main__content-burger'),\n    mainList = document.querySelector('.main__content-list'),\n    mainClose = document.querySelector('.main__content-categories');\nmainBurger.addEventListener('click', function () {\n  mainList.classList.add('active');\n  mainBurger.classList.add('active');\n  mainClose.classList.add('active');\n});\nmainClose.addEventListener('click', function () {\n  mainList.classList.remove('active');\n  mainBurger.classList.remove('active');\n  mainClose.classList.remove('active');\n});\n\nvar renderItems = function renderItems(arrItems) {\n  var mainTabContent = document.querySelector('.main__tabs-content');\n  mainTabContent.innerHTML = '';\n  arrItems.forEach(function (_ref) {\n    var img = _ref.img,\n        title = _ref.title,\n        typeThin = _ref.typeThin,\n        typeTraditional = _ref.typeTraditional,\n        sizeMini = _ref.sizeMini,\n        sizeMedium = _ref.sizeMedium,\n        sizeBig = _ref.sizeBig,\n        price = _ref.price,\n        addBtn = _ref.addBtn;\n    var tabsItems = document.createElement('div');\n    tabsItems.classList.add('main__tabs-items');\n    tabsItems.innerHTML = \"\\n    \\n            <div class=\\\"main__tabs-item\\\">\\n            <img class=\\\"main__tabs-img\\\" src= \\\"\".concat(img, \"\\\" alt=\\\"\\\">\\n            <h4 class=\\\"main__tabs-title\\\">\").concat(title, \"</h4>\\n            <div class=\\\"main__tabs-info\\\"> \\n            <a class=\\\"main__tabs-btn\\\" href=\\\"\\\">\").concat(typeThin, \"</a>\\n            <a class=\\\"main__tabs-btn\\\" href=\\\"\\\">\").concat(typeTraditional, \"</a>\\n            <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeMini, \"</a>\\n            <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeMedium, \"</a>\\n            <a class=\\\"main__tabs-size\\\" href=\\\"\\\">\").concat(sizeBig, \"</a>\\n            </div>\\n            <div class=\\\"main__tabs-add\\\"> <span class=\\\"main__tabs-price\\\"> \\u043E\\u0442 <span>\").concat(price, \"</span> \\u20BD</span>\\n            <a class=\\\"main__tabs-addCart\\\" href=\\\"\\\">\").concat(addBtn, \"</a></div>\\n            </div> \\n            \");\n    mainTabContent.appendChild(tabsItems);\n  });\n  var mainTabsBtn = document.querySelectorAll('.main__tabs-btn');\n  var mainTabsSize = document.querySelectorAll('.main__tabs-size');\n  mainTabsBtn.forEach(function (item, i) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      btnColor(i);\n    });\n  });\n\n  function btnColor(index) {\n    mainTabsBtn[index].classList.toggle('active');\n  }\n\n  mainTabsSize.forEach(function (item, i) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      sizeColor(i);\n    });\n  });\n\n  function sizeColor(index) {\n    mainTabsSize[index].classList.toggle('active');\n  }\n\n  var tabsCart = document.querySelectorAll('.main__tabs-addCart');\n  var array = [];\n  tabsCart.forEach(function (item, i) {\n    item.addEventListener('click', function (e) {\n      tabsCart[i].classList.add('active');\n      e.preventDefault();\n      cart.textContent++;\n      var parent = e.target.closest('.main__tabs-item');\n      var img = parent.querySelector('.main__tabs-img').src;\n      var span = parent.querySelector('.main__tabs-price span');\n      var title = parent.querySelector('.main__tabs-title');\n      var btn = parent.querySelector('.main__tabs-btn');\n      var size = parent.querySelector('.main__tabs-size');\n      var titleText = title.textContent;\n      var spanText = span.textContent;\n      var btnText = btn.textContent;\n      var sizeText = size.textContent;\n      headerCartPrice.textContent = span.textContent * cart.textContent + '₽';\n      array.unshift(titleText, spanText, btnText, sizeText, img);\n      axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://62d14da4dccad0cf1764cae4.mockapi.io/Pizza', array);\n    });\n  });\n};\n\nvar mainContentLink = document.querySelectorAll('.main__content-link');\nvar cart = document.querySelector('.header__cart-amount span');\nvar cartButton = document.querySelector('.header__cart-button');\ncart.textContent = 0;\nvar headerCartPrice = document.querySelector('.header__cart-price');\nheaderCartPrice.textContent = '0 ₽';\ncartButton.addEventListener('click', function (e) {\n  if (cart.textContent > 0) {\n    location.href = 'cart.html';\n  } else {\n    location.href = 'basket.html';\n  }\n\n  e.preventDefault();\n});\nmainContentLink.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    e.preventDefault();\n    removeActiveClass();\n    addActiveClass(link);\n    var category = link.dataset.category;\n    getData(category);\n  });\n});\n\nfunction removeActiveClass() {\n  mainContentLink.forEach(function (link) {\n    link.classList.remove('active');\n  });\n}\n\nfunction addActiveClass(btn) {\n  btn.classList.add('active');\n}\n\nvar getData = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(category) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://pizza-3ba7e-default-rtdb.firebaseio.com/db.json').then(function (res) {\n              var arr = category ? res.data.filter(function (item) {\n                return item.category === category;\n              }) : res.data;\n\n              if (category == undefined) {\n                res.data.pop();\n              }\n\n              renderItems(arr);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getData(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\ngetData();\n\n//# sourceURL=webpack:///./script/tabs.js?");

/***/ }),

/***/ "./images/arrow-left.svg":
/*!*******************************!*\
  !*** ./images/arrow-left.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/arrow-left.svg\");\n\n//# sourceURL=webpack:///./images/arrow-left.svg?");

/***/ }),

/***/ "./images/arrow.svg":
/*!**************************!*\
  !*** ./images/arrow.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/arrow.svg\");\n\n//# sourceURL=webpack:///./images/arrow.svg?");

/***/ }),

/***/ "./images/basket.svg":
/*!***************************!*\
  !*** ./images/basket.svg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/basket.svg\");\n\n//# sourceURL=webpack:///./images/basket.svg?");

/***/ }),

/***/ "./images/burger-pizza.png":
/*!*********************************!*\
  !*** ./images/burger-pizza.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/burger-pizza.png\");\n\n//# sourceURL=webpack:///./images/burger-pizza.png?");

/***/ }),

/***/ "./images/burger.png":
/*!***************************!*\
  !*** ./images/burger.png ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/burger.png\");\n\n//# sourceURL=webpack:///./images/burger.png?");

/***/ }),

/***/ "./images/cart.svg":
/*!*************************!*\
  !*** ./images/cart.svg ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/cart.svg\");\n\n//# sourceURL=webpack:///./images/cart.svg?");

/***/ }),

/***/ "./images/cheese-pizza.png":
/*!*********************************!*\
  !*** ./images/cheese-pizza.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/cheese-pizza.png\");\n\n//# sourceURL=webpack:///./images/cheese-pizza.png?");

/***/ }),

/***/ "./images/chicken-pizza.png":
/*!**********************************!*\
  !*** ./images/chicken-pizza.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/chicken-pizza.png\");\n\n//# sourceURL=webpack:///./images/chicken-pizza.png?");

/***/ }),

/***/ "./images/cross.svg":
/*!**************************!*\
  !*** ./images/cross.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/cross.svg\");\n\n//# sourceURL=webpack:///./images/cross.svg?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/logo.png\");\n\n//# sourceURL=webpack:///./images/logo.png?");

/***/ }),

/***/ "./images/minus.svg":
/*!**************************!*\
  !*** ./images/minus.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/minus.svg\");\n\n//# sourceURL=webpack:///./images/minus.svg?");

/***/ }),

/***/ "./images/plus.svg":
/*!*************************!*\
  !*** ./images/plus.svg ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/plus.svg\");\n\n//# sourceURL=webpack:///./images/plus.svg?");

/***/ }),

/***/ "./images/rubbish.svg":
/*!****************************!*\
  !*** ./images/rubbish.svg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/rubbish.svg\");\n\n//# sourceURL=webpack:///./images/rubbish.svg?");

/***/ }),

/***/ "./images/shrimps-pizza.png":
/*!**********************************!*\
  !*** ./images/shrimps-pizza.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/shrimps-pizza.png\");\n\n//# sourceURL=webpack:///./images/shrimps-pizza.png?");

/***/ }),

/***/ "./images/smile.jpg":
/*!**************************!*\
  !*** ./images/smile.jpg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/smile.jpg\");\n\n//# sourceURL=webpack:///./images/smile.jpg?");

/***/ }),

/***/ "./images/truck.png":
/*!**************************!*\
  !*** ./images/truck.png ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/truck.png\");\n\n//# sourceURL=webpack:///./images/truck.png?");

/***/ }),

/***/ "./styles/common/header.scss":
/*!***********************************!*\
  !*** ./styles/common/header.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/common/header.scss?");

/***/ }),

/***/ "./styles/common/main.scss":
/*!*********************************!*\
  !*** ./styles/common/main.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/common/main.scss?");

/***/ }),

/***/ "./styles/common/media.scss":
/*!**********************************!*\
  !*** ./styles/common/media.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/common/media.scss?");

/***/ }),

/***/ "./styles/common/root.scss":
/*!*********************************!*\
  !*** ./styles/common/root.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/common/root.scss?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./script/db/db.json":
/*!***************************!*\
  !*** ./script/db/db.json ***!
  \***************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"db\":[{\"img\":\"../images/burger-pizza.png\",\"title\":\"Мясная пицца\",\"category\":\"Мясная\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 395 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/burger-pizza.png\",\"title\":\"Мясная пицца\",\"category\":\"Мясная\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 395 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/burger-pizza.png\",\"title\":\"Мясная пицца\",\"category\":\"Мясная\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 395 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/burger-pizza.png\",\"title\":\"Мясная пицца\",\"category\":\"Мясная\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 395 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/cheese-pizza.png\",\"title\":\"Сырная пицца\",\"category\":\"Вегетарианская\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 450 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/cheese-pizza.png\",\"title\":\"Сырная пицца\",\"category\":\"Вегетарианская\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 450 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/cheese-pizza.png\",\"title\":\"Сырная пицца\",\"category\":\"Вегетарианская\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 450 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/cheese-pizza.png\",\"title\":\"Сырная пицца\",\"category\":\"Вегетарианская\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 450 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/chicken-pizza.png\",\"title\":\"Гриль пицца\",\"category\":\"Гриль\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 385 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/chicken-pizza.png\",\"title\":\"Острая пицца\",\"category\":\"Острая\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 385 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"./images/chicken-pizza.png\",\"title\":\"Острая пицца\",\"category\":\"Острая\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"от 385 ₽\",\"addBtn\":\"+ Добавить\"},{\"img\":\"\",\"title\":\"Данных пицц пока нет\",\"category\":\"Закрытые\",\"typeThin\":\"тонкое\",\"typeTraditional\":\"традиционная\",\"sizeMini\":\"26 см.\",\"sizeMedium\":\"30 см.\",\"sizeBig\":\"40 см.\",\"price\":\"Пока цены нет\",\"addBtn\":\"+ Добавить\"}]}');\n\n//# sourceURL=webpack:///./script/db/db.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_axios_index_js-node_modules_rea-a9820c"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_axios_index_js-node_modules_rea-a9820c"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;