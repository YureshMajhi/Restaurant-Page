"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/Tabs Modules/contactPage/contactPage.js":
/*!*****************************************************!*\
  !*** ./src/Tabs Modules/contactPage/contactPage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactSection": () => (/* binding */ contactSection)
/* harmony export */ });
// About Section
var contactSection = function contactSection() {
  // Creating element on contact section
  var contact = document.createElement("section");

  //    creating first section
  //   Adding content for contact section
  var contactP = document.createElement("p");
  contactP.textContent = "Puchi Restaurant welcomes events, parties and celebrations.\n  We are happy to discuss booking the whole facility or part of it for your event.\n  Just give us a call to discuss rates, menus, and any special requirements you have.";
  contact.classList.add("section");

  // Adding name for contact section
  var name1 = document.createElement("p");
  name1.textContent = "Your Event";
  name1.classList.add("name");

  //   Adding everything to contact section
  contact.appendChild(name1);
  contact.appendChild(contactP);

  //    creating second section
  //   Adding content for contact section
  var contactPh = document.createElement("p");
  contactPh.textContent = "To make a reservation by phone, call: ";
  var contactPhn = document.createElement("p");
  contactPhn.textContent = "9843568517";
  var contactem = document.createElement("p");
  contactem.textContent = "Or to reserve by email:";
  var contacteml = document.createElement("p");
  contacteml.textContent = "totallyvalidmail@gmail.com";
  var line = document.createElement("hr");
  contact.classList.add("section");

  // Adding name for contact section
  var name2 = document.createElement("p");
  name2.textContent = "Details";
  name2.classList.add("name");

  //   Adding everything to contact section
  contact.appendChild(name2);
  contact.appendChild(contactPh);
  contact.appendChild(contactPhn);
  contact.appendChild(contactem);
  contact.appendChild(contacteml);
  return contact;
};

/***/ }),

/***/ "./src/Tabs Modules/homePage.js":
/*!**************************************!*\
  !*** ./src/Tabs Modules/homePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _homePage_aboutSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage/aboutSection */ "./src/Tabs Modules/homePage/aboutSection.js");
/* harmony import */ var _homePage_hoursSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage/hoursSection */ "./src/Tabs Modules/homePage/hoursSection.js");
/* harmony import */ var _homePage_locationSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage/locationSection */ "./src/Tabs Modules/homePage/locationSection.js");



var homePage = function () {
  return {
    aboutSection: _homePage_aboutSection__WEBPACK_IMPORTED_MODULE_0__.aboutSection,
    hoursSection: _homePage_hoursSection__WEBPACK_IMPORTED_MODULE_1__.hoursSection,
    locationSection: _homePage_locationSection__WEBPACK_IMPORTED_MODULE_2__.locationSection
  };
}();

/***/ }),

/***/ "./src/Tabs Modules/homePage/aboutSection.js":
/*!***************************************************!*\
  !*** ./src/Tabs Modules/homePage/aboutSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutSection": () => (/* binding */ aboutSection)
/* harmony export */ });
// About Section
var aboutSection = function aboutSection() {
  // Creating element on about section
  var about = document.createElement("section");

  //   Adding content for about section
  var aboutP = document.createElement("p");
  aboutP.textContent = "Puchi Restaurant's custom made wine is prepared with fresh ingredients daily. Not in the mood for a wine? Choose what you want to have from our menu. Why not give us a try when you're looking to either grab a quick bite, or hang around for \"wines and Beers\" with the guys... or ladies... of course!!!\n            You know when you go out of town to visit a good friend and they take you to a great local hangout where the drink is great and the vibe is relaxed, fun and exciting? Yeah, that\u2019s Puchi Restaurant!";
  about.classList.add("section");

  // Adding name for about section
  var name = document.createElement("p");
  name.textContent = "Yuresh Majhi";
  name.classList.add("name");

  //   Adding everything to about section
  about.appendChild(aboutP);
  about.appendChild(name);
  return about;
};

/***/ }),

/***/ "./src/Tabs Modules/homePage/hoursSection.js":
/*!***************************************************!*\
  !*** ./src/Tabs Modules/homePage/hoursSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoursSection": () => (/* binding */ hoursSection)
/* harmony export */ });
// Hours Section
var hoursSection = function hoursSection() {
  var hours = document.createElement("section");
  var hoursHeading = document.createElement("p");
  hoursHeading.textContent = "Hours";
  hoursHeading.classList.add("name");
  var hoursContent = document.createElement("div");
  hoursContent.innerHTML = "\n        <ul>\n          <li>Sun: 8am - 7pm</li>\n          <li>Mon: 8am - 7pm</li>\n          <li>Tue: 8am - 7pm</li>\n          <li>Wed: 8am - 7pm</li>\n          <li>Thu: 8am - 7pm</li>\n          <li>Fri: 8am - 7pm</li>\n          <li>Sat: Holiday</li>\n        </ul>\n      ";
  hours.appendChild(hoursHeading);
  hours.appendChild(hoursContent);
  return hours;
};

/***/ }),

/***/ "./src/Tabs Modules/homePage/locationSection.js":
/*!******************************************************!*\
  !*** ./src/Tabs Modules/homePage/locationSection.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationSection": () => (/* binding */ locationSection)
/* harmony export */ });
// Location Section
var locationSection = function locationSection() {
  var location = document.createElement("section");
  location.classList.add("section");
  var locationHeading = document.createElement("p");
  locationHeading.textContent = "Location";
  locationHeading.classList.add("name");
  var locationP = document.createElement("p");
  locationP.textContent = "Visit Puchi Restarant in the heart of Nakhipot/Lalitpur near Buddha Mandir and experience \"da best wine in the da Town\".";
  location.appendChild(locationHeading);
  location.appendChild(locationP);
  return location;
};

/***/ }),

/***/ "./src/Tabs Modules/menuPage/beverages.js":
/*!************************************************!*\
  !*** ./src/Tabs Modules/menuPage/beverages.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuSection": () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _Images_wines_1_Sula_Rasa_Shiraz_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Images/wines/1. Sula Rasa Shiraz.webp */ "./src/Images/wines/1. Sula Rasa Shiraz.webp");
/* harmony import */ var _Images_wines_2_Crios_Torrontes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Images/wines/2. Crios Torrontes.jpg */ "./src/Images/wines/2. Crios Torrontes.jpg");
/* harmony import */ var _Images_wines_3_Zampa_Soiree_Brut_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Images/wines/3. Zampa Soiree Brut.jpg */ "./src/Images/wines/3. Zampa Soiree Brut.jpg");




// About Section
var menuSection = function menuSection() {
  // Creating element on about section
  var menu = document.createElement("section");
  menu.classList.add("section");

  // First Wine Section
  //   Adding content for menu section
  var image1 = new Image();
  image1.src = _Images_wines_1_Sula_Rasa_Shiraz_webp__WEBPACK_IMPORTED_MODULE_0__;
  image1.alt = "wine photo";

  //   Adding wine-info
  var info1a = document.createElement("p");
  info1a.textContent = "Alcohol Content: 13%";
  var info1b = document.createElement("p");
  info1b.textContent = "Price: 750 ml - NPR 1500";

  // Adding name for menu section
  var name1 = document.createElement("p");
  name1.textContent = "Sula Rasa Shiraz";
  name1.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image1);
  menu.appendChild(name1);
  menu.appendChild(info1a);
  menu.appendChild(info1b);

  // Second Wine Section
  //   Adding content for menu section
  var image2 = new Image();
  image2.src = _Images_wines_2_Crios_Torrontes_jpg__WEBPACK_IMPORTED_MODULE_1__;
  image2.alt = "wine photo";

  //   Adding wine-info
  var info2a = document.createElement("p");
  info2a.textContent = "Alcohol Content: 13.5%";
  var info2b = document.createElement("p");
  info2b.textContent = "Price: 750 ml - NPR 1500";

  // Adding name for menu section
  var name2 = document.createElement("p");
  name2.textContent = "Crios Torrontes";
  name2.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image2);
  menu.appendChild(name2);
  menu.appendChild(info2a);
  menu.appendChild(info2b);

  // Third Wine Section
  //   Adding content for menu section
  var image3 = new Image();
  image3.src = _Images_wines_3_Zampa_Soiree_Brut_jpg__WEBPACK_IMPORTED_MODULE_2__;
  image3.alt = "wine photo";

  //   Adding wine-info
  var info3a = document.createElement("p");
  info3a.textContent = "Alcohol Content: 12%";
  var info3b = document.createElement("p");
  info3b.textContent = "Price: 750 ml - NPR 1200";

  // Adding name for menu section
  var name3 = document.createElement("p");
  name3.textContent = "Zampa Soiree Brut";
  name3.classList.add("name");

  //   Adding everything to menu section
  menu.appendChild(image3);
  menu.appendChild(name3);
  menu.appendChild(info3a);
  menu.appendChild(info3b);
  return menu;
};

/***/ }),

/***/ "./src/compoenent.js":
/*!***************************!*\
  !*** ./src/compoenent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Restaurant)
/* harmony export */ });
/* harmony import */ var _Tabs_Modules_homePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs Modules/homePage.js */ "./src/Tabs Modules/homePage.js");
/* harmony import */ var _Tabs_Modules_menuPage_beverages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs Modules/menuPage/beverages.js */ "./src/Tabs Modules/menuPage/beverages.js");
/* harmony import */ var _Tabs_Modules_contactPage_contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs Modules/contactPage/contactPage.js */ "./src/Tabs Modules/contactPage/contactPage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var content = function () {
  var div = document.querySelector("#content");
  return {
    div: div
  };
}();
var Restaurant = /*#__PURE__*/function () {
  function Restaurant() {
    _classCallCheck(this, Restaurant);
  }
  _createClass(Restaurant, [{
    key: "homePage",
    value: function homePage() {
      content.div.innerHTML = "";

      // Adding container
      var container = document.createElement("div");
      container.classList.add("container");

      // Creating Header
      var header = document.createElement("h1");
      header.textContent = "Puchi Restaurant";
      header.classList.add("home-header");

      // adding all elements to the content.div
      content.div.appendChild(container);
      container.appendChild(header);
      container.appendChild(_Tabs_Modules_homePage_js__WEBPACK_IMPORTED_MODULE_0__.homePage.aboutSection());
      container.appendChild(_Tabs_Modules_homePage_js__WEBPACK_IMPORTED_MODULE_0__.homePage.hoursSection());
      container.appendChild(_Tabs_Modules_homePage_js__WEBPACK_IMPORTED_MODULE_0__.homePage.locationSection());
    }
  }, {
    key: "menuPage",
    value: function menuPage() {
      content.div.innerHTML = "";

      // Adding container
      var container = document.createElement("div");
      container.classList.add("container");

      // Creating Header
      var header = document.createElement("h1");
      header.textContent = "Beverages";
      header.classList.add("home-header");

      // adding all elements to the content.div
      content.div.appendChild(container);
      container.appendChild(header);
      container.appendChild((0,_Tabs_Modules_menuPage_beverages_js__WEBPACK_IMPORTED_MODULE_1__.menuSection)());
    }
  }, {
    key: "contactPage",
    value: function contactPage() {
      content.div.innerHTML = "";

      // Adding container
      var container = document.createElement("div");
      container.classList.add("container");

      // Creating Header
      var header = document.createElement("h1");
      header.textContent = "Contact us";
      header.classList.add("home-header");

      // adding all elements to the content.div
      content.div.appendChild(container);
      container.appendChild(header);
      container.appendChild((0,_Tabs_Modules_contactPage_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.contactSection)());
    }
  }]);
  return Restaurant;
}();


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _compoenent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compoenent.js */ "./src/compoenent.js");
// Importing css


// Importing Javascript files


// Rendering home page while startup
var restaurant = new _compoenent_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
restaurant.homePage();

// setting event listeners
document.querySelector("#home-btn").addEventListener("click", restaurant.homePage);
document.querySelector("#menu-btn").addEventListener("click", restaurant.menuPage);
document.querySelector("#contact-btn").addEventListener("click", restaurant.contactPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/restaurant bg.jpg */ "./src/Images/restaurant bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --brown: #e38759;\n  --brown-highlight: #c86331;\n  --brown-border: #883616;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center fixed;\n  background-size: cover;\n}\n\n/* Navigation */\n\nnav {\n  height: 7vh;\n  background: linear-gradient(\n    to right,\n    rgba(236, 144, 98, 0.3),\n    rgba(209, 76, 10, 0.3)\n  );\n  border-bottom: 2px solid var(--brown-border);\n}\n\nnav ul {\n  display: flex;\n  color: white;\n  justify-content: space-around;\n  line-height: 7vh;\n  list-style-type: none;\n}\n\nnav ul li {\n  font-size: 1.2rem;\n  letter-spacing: 2px;\n  width: 7rem;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\nnav ul li:hover {\n  background-color: var(--brown-highlight);\n}\n\nnav ul li:first-of-type,\nnav ul li:nth-of-type(2),\nnav ul li:last-of-type {\n  flex: 100px;\n}\n\nnav ul li:nth-of-type(2) {\n  border: 2px solid var(--brown-border);\n  border-top: none;\n  border-bottom: none;\n}\n\n/* Home Page */\n\n.container {\n  background-color: rgba(0, 0, 0, 0.61);\n  padding: 2rem;\n\n  max-width: 50rem;\n  margin: 2rem auto;\n  border-radius: 0.5rem;\n\n  box-shadow: 0 0 5px var(--brown);\n\n  width: 70%;\n}\n\n.home-header {\n  color: var(--brown-highlight);\n  text-align: center;\n  text-transform: uppercase;\n}\n\nsection {\n  color: white;\n  background-color: black;\n  padding: 1rem;\n  margin: 2rem 0;\n  border: 2px solid var(--brown);\n  border-radius: 0.2rem;\n  text-indent: 1rem;\n  text-align: justify;\n  box-shadow: 2px 2px 5px var(--brown);\n}\n\nsection .name {\n  margin-left: 1rem;\n  margin: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--brown);\n}\n\nsection ul {\n  list-style: none;\n  margin-left: 3rem;\n}\n\nsection ul li:last-of-type {\n  color: var(--brown);\n}\n\nsection img {\n  height: 17rem;\n  width: 80%;\n  object-fit: cover;\n  margin: 2rem;\n  margin-bottom: unset;\n  border-radius: 0.5rem;\n  border: 1px solid var(--brown-border);\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE;kEAC2D;EAC3D,sBAAsB;AACxB;;AAEA,eAAe;;AAEf;EACE,WAAW;EACX;;;;GAIC;EACD,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;;;EAGE,WAAW;AACb;;AAEA;EACE,qCAAqC;EACrC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,cAAc;;AAEd;EACE,qCAAqC;EACrC,aAAa;;EAEb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;;EAErB,gCAAgC;;EAEhC,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,8BAA8B;EAC9B,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,qCAAqC;AACvC","sourcesContent":[":root {\n  --brown: #e38759;\n  --brown-highlight: #c86331;\n  --brown-border: #883616;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(\"./Images/restaurant\\ bg.jpg\") no-repeat center fixed;\n  background-size: cover;\n}\n\n/* Navigation */\n\nnav {\n  height: 7vh;\n  background: linear-gradient(\n    to right,\n    rgba(236, 144, 98, 0.3),\n    rgba(209, 76, 10, 0.3)\n  );\n  border-bottom: 2px solid var(--brown-border);\n}\n\nnav ul {\n  display: flex;\n  color: white;\n  justify-content: space-around;\n  line-height: 7vh;\n  list-style-type: none;\n}\n\nnav ul li {\n  font-size: 1.2rem;\n  letter-spacing: 2px;\n  width: 7rem;\n  text-align: center;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n\nnav ul li:hover {\n  background-color: var(--brown-highlight);\n}\n\nnav ul li:first-of-type,\nnav ul li:nth-of-type(2),\nnav ul li:last-of-type {\n  flex: 100px;\n}\n\nnav ul li:nth-of-type(2) {\n  border: 2px solid var(--brown-border);\n  border-top: none;\n  border-bottom: none;\n}\n\n/* Home Page */\n\n.container {\n  background-color: rgba(0, 0, 0, 0.61);\n  padding: 2rem;\n\n  max-width: 50rem;\n  margin: 2rem auto;\n  border-radius: 0.5rem;\n\n  box-shadow: 0 0 5px var(--brown);\n\n  width: 70%;\n}\n\n.home-header {\n  color: var(--brown-highlight);\n  text-align: center;\n  text-transform: uppercase;\n}\n\nsection {\n  color: white;\n  background-color: black;\n  padding: 1rem;\n  margin: 2rem 0;\n  border: 2px solid var(--brown);\n  border-radius: 0.2rem;\n  text-indent: 1rem;\n  text-align: justify;\n  box-shadow: 2px 2px 5px var(--brown);\n}\n\nsection .name {\n  margin-left: 1rem;\n  margin: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--brown);\n}\n\nsection ul {\n  list-style: none;\n  margin-left: 3rem;\n}\n\nsection ul li:last-of-type {\n  color: var(--brown);\n}\n\nsection img {\n  height: 17rem;\n  width: 80%;\n  object-fit: cover;\n  margin: 2rem;\n  margin-bottom: unset;\n  border-radius: 0.5rem;\n  border: 1px solid var(--brown-border);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Images/restaurant bg.jpg":
/*!**************************************!*\
  !*** ./src/Images/restaurant bg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5f97dbacb9bb596c0c9.jpg";

/***/ }),

/***/ "./src/Images/wines/1. Sula Rasa Shiraz.webp":
/*!***************************************************!*\
  !*** ./src/Images/wines/1. Sula Rasa Shiraz.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7648c71494012970bb7b.webp";

/***/ }),

/***/ "./src/Images/wines/2. Crios Torrontes.jpg":
/*!*************************************************!*\
  !*** ./src/Images/wines/2. Crios Torrontes.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "359e2f485bdbb9018520.jpg";

/***/ }),

/***/ "./src/Images/wines/3. Zampa Soiree Brut.jpg":
/*!***************************************************!*\
  !*** ./src/Images/wines/3. Zampa Soiree Brut.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a354a31185c0b94e79a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9UYWJzIE1vZHVsZXMvY29udGFjdFBhZ2UvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL1RhYnMgTW9kdWxlcy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFicyBNb2R1bGVzL2hvbWVQYWdlL2Fib3V0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFicyBNb2R1bGVzL2hvbWVQYWdlL2hvdXJzU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFicyBNb2R1bGVzL2hvbWVQYWdlL2xvY2F0aW9uU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvVGFicyBNb2R1bGVzL21lbnVQYWdlL2JldmVyYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9lbmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFib3V0IFNlY3Rpb25cbmV4cG9ydCBjb25zdCBjb250YWN0U2VjdGlvbiA9ICgpID0+IHtcbiAgLy8gQ3JlYXRpbmcgZWxlbWVudCBvbiBjb250YWN0IHNlY3Rpb25cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vICAgIGNyZWF0aW5nIGZpcnN0IHNlY3Rpb25cbiAgLy8gICBBZGRpbmcgY29udGVudCBmb3IgY29udGFjdCBzZWN0aW9uXG4gIGNvbnN0IGNvbnRhY3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RQLnRleHRDb250ZW50ID0gYFB1Y2hpIFJlc3RhdXJhbnQgd2VsY29tZXMgZXZlbnRzLCBwYXJ0aWVzIGFuZCBjZWxlYnJhdGlvbnMuXG4gIFdlIGFyZSBoYXBweSB0byBkaXNjdXNzIGJvb2tpbmcgdGhlIHdob2xlIGZhY2lsaXR5IG9yIHBhcnQgb2YgaXQgZm9yIHlvdXIgZXZlbnQuXG4gIEp1c3QgZ2l2ZSB1cyBhIGNhbGwgdG8gZGlzY3VzcyByYXRlcywgbWVudXMsIGFuZCBhbnkgc3BlY2lhbCByZXF1aXJlbWVudHMgeW91IGhhdmUuYDtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcblxuICAvLyBBZGRpbmcgbmFtZSBmb3IgY29udGFjdCBzZWN0aW9uXG4gIGNvbnN0IG5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG5hbWUxLnRleHRDb250ZW50ID0gXCJZb3VyIEV2ZW50XCI7XG4gIG5hbWUxLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gIC8vICAgQWRkaW5nIGV2ZXJ5dGhpbmcgdG8gY29udGFjdCBzZWN0aW9uXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobmFtZTEpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RQKTtcblxuICAvLyAgICBjcmVhdGluZyBzZWNvbmQgc2VjdGlvblxuICAvLyAgIEFkZGluZyBjb250ZW50IGZvciBjb250YWN0IHNlY3Rpb25cbiAgY29uc3QgY29udGFjdFBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RQaC50ZXh0Q29udGVudCA9IGBUbyBtYWtlIGEgcmVzZXJ2YXRpb24gYnkgcGhvbmUsIGNhbGw6IGA7XG4gIGNvbnN0IGNvbnRhY3RQaG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdFBobi50ZXh0Q29udGVudCA9IGA5ODQzNTY4NTE3YDtcbiAgY29uc3QgY29udGFjdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RlbS50ZXh0Q29udGVudCA9IGBPciB0byByZXNlcnZlIGJ5IGVtYWlsOmA7XG4gIGNvbnN0IGNvbnRhY3RlbWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdGVtbC50ZXh0Q29udGVudCA9IGB0b3RhbGx5dmFsaWRtYWlsQGdtYWlsLmNvbWA7XG5cbiAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vIEFkZGluZyBuYW1lIGZvciBjb250YWN0IHNlY3Rpb25cbiAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbmFtZTIudGV4dENvbnRlbnQgPSBcIkRldGFpbHNcIjtcbiAgbmFtZTIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgLy8gICBBZGRpbmcgZXZlcnl0aGluZyB0byBjb250YWN0IHNlY3Rpb25cbiAgY29udGFjdC5hcHBlbmRDaGlsZChuYW1lMik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFBoKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGhuKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0ZW0pO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RlbWwpO1xuXG4gIHJldHVybiBjb250YWN0O1xufTtcbiIsImltcG9ydCB7IGFib3V0U2VjdGlvbiB9IGZyb20gXCIuL2hvbWVQYWdlL2Fib3V0U2VjdGlvblwiO1xuaW1wb3J0IHsgaG91cnNTZWN0aW9uIH0gZnJvbSBcIi4vaG9tZVBhZ2UvaG91cnNTZWN0aW9uXCI7XG5pbXBvcnQgeyBsb2NhdGlvblNlY3Rpb24gfSBmcm9tIFwiLi9ob21lUGFnZS9sb2NhdGlvblNlY3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcbiAgcmV0dXJuIHsgYWJvdXRTZWN0aW9uLCBob3Vyc1NlY3Rpb24sIGxvY2F0aW9uU2VjdGlvbiB9O1xufSkoKTtcbiIsIi8vIEFib3V0IFNlY3Rpb25cbmV4cG9ydCBjb25zdCBhYm91dFNlY3Rpb24gPSAoKSA9PiB7XG4gIC8vIENyZWF0aW5nIGVsZW1lbnQgb24gYWJvdXQgc2VjdGlvblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vICAgQWRkaW5nIGNvbnRlbnQgZm9yIGFib3V0IHNlY3Rpb25cbiAgY29uc3QgYWJvdXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFib3V0UC50ZXh0Q29udGVudCA9IGBQdWNoaSBSZXN0YXVyYW50J3MgY3VzdG9tIG1hZGUgd2luZSBpcyBwcmVwYXJlZCB3aXRoIGZyZXNoIGluZ3JlZGllbnRzIGRhaWx5LiBOb3QgaW4gdGhlIG1vb2QgZm9yIGEgd2luZT8gQ2hvb3NlIHdoYXQgeW91IHdhbnQgdG8gaGF2ZSBmcm9tIG91ciBtZW51LiBXaHkgbm90IGdpdmUgdXMgYSB0cnkgd2hlbiB5b3UncmUgbG9va2luZyB0byBlaXRoZXIgZ3JhYiBhIHF1aWNrIGJpdGUsIG9yIGhhbmcgYXJvdW5kIGZvciBcIndpbmVzIGFuZCBCZWVyc1wiIHdpdGggdGhlIGd1eXMuLi4gb3IgbGFkaWVzLi4uIG9mIGNvdXJzZSEhIVxuICAgICAgICAgICAgWW91IGtub3cgd2hlbiB5b3UgZ28gb3V0IG9mIHRvd24gdG8gdmlzaXQgYSBnb29kIGZyaWVuZCBhbmQgdGhleSB0YWtlIHlvdSB0byBhIGdyZWF0IGxvY2FsIGhhbmdvdXQgd2hlcmUgdGhlIGRyaW5rIGlzIGdyZWF0IGFuZCB0aGUgdmliZSBpcyByZWxheGVkLCBmdW4gYW5kIGV4Y2l0aW5nPyBZZWFoLCB0aGF04oCZcyBQdWNoaSBSZXN0YXVyYW50IWA7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vIEFkZGluZyBuYW1lIGZvciBhYm91dCBzZWN0aW9uXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiWXVyZXNoIE1hamhpXCI7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgLy8gICBBZGRpbmcgZXZlcnl0aGluZyB0byBhYm91dCBzZWN0aW9uXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UCk7XG4gIGFib3V0LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gIHJldHVybiBhYm91dDtcbn07XG4iLCIvLyBIb3VycyBTZWN0aW9uXG5leHBvcnQgY29uc3QgaG91cnNTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBob3Vyc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBob3Vyc0hlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgY29uc3QgaG91cnNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cnNDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5TdW46IDhhbSAtIDdwbTwvbGk+XG4gICAgICAgICAgPGxpPk1vbjogOGFtIC0gN3BtPC9saT5cbiAgICAgICAgICA8bGk+VHVlOiA4YW0gLSA3cG08L2xpPlxuICAgICAgICAgIDxsaT5XZWQ6IDhhbSAtIDdwbTwvbGk+XG4gICAgICAgICAgPGxpPlRodTogOGFtIC0gN3BtPC9saT5cbiAgICAgICAgICA8bGk+RnJpOiA4YW0gLSA3cG08L2xpPlxuICAgICAgICAgIDxsaT5TYXQ6IEhvbGlkYXk8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgYDtcblxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpO1xuXG4gIHJldHVybiBob3Vycztcbn07XG4iLCIvLyBMb2NhdGlvbiBTZWN0aW9uXG5leHBvcnQgY29uc3QgbG9jYXRpb25TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvblwiKTtcblxuICBjb25zdCBsb2NhdGlvbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9jYXRpb25IZWFkaW5nLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBsb2NhdGlvbkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgY29uc3QgbG9jYXRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvY2F0aW9uUC50ZXh0Q29udGVudCA9IGBWaXNpdCBQdWNoaSBSZXN0YXJhbnQgaW4gdGhlIGhlYXJ0IG9mIE5ha2hpcG90L0xhbGl0cHVyIG5lYXIgQnVkZGhhIE1hbmRpciBhbmQgZXhwZXJpZW5jZSBcImRhIGJlc3Qgd2luZSBpbiB0aGUgZGEgVG93blwiLmA7XG5cbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkaW5nKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25QKTtcblxuICByZXR1cm4gbG9jYXRpb247XG59O1xuIiwiaW1wb3J0IHdpbmUxIGZyb20gXCIuLi8uLi9JbWFnZXMvd2luZXMvMS4gU3VsYSBSYXNhIFNoaXJhei53ZWJwXCI7XG5pbXBvcnQgd2luZTIgZnJvbSBcIi4uLy4uL0ltYWdlcy93aW5lcy8yLiBDcmlvcyBUb3Jyb250ZXMuanBnXCI7XG5pbXBvcnQgd2luZTMgZnJvbSBcIi4uLy4uL0ltYWdlcy93aW5lcy8zLiBaYW1wYSBTb2lyZWUgQnJ1dC5qcGdcIjtcblxuLy8gQWJvdXQgU2VjdGlvblxuZXhwb3J0IGNvbnN0IG1lbnVTZWN0aW9uID0gKCkgPT4ge1xuICAvLyBDcmVhdGluZyBlbGVtZW50IG9uIGFib3V0IHNlY3Rpb25cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uXCIpO1xuXG4gIC8vIEZpcnN0IFdpbmUgU2VjdGlvblxuICAvLyAgIEFkZGluZyBjb250ZW50IGZvciBtZW51IHNlY3Rpb25cbiAgY29uc3QgaW1hZ2UxID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMS5zcmMgPSB3aW5lMTtcbiAgaW1hZ2UxLmFsdCA9IFwid2luZSBwaG90b1wiO1xuXG4gIC8vICAgQWRkaW5nIHdpbmUtaW5mb1xuICBjb25zdCBpbmZvMWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzFhLnRleHRDb250ZW50ID0gYEFsY29ob2wgQ29udGVudDogMTMlYDtcbiAgY29uc3QgaW5mbzFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8xYi50ZXh0Q29udGVudCA9IGBQcmljZTogNzUwIG1sIC0gTlBSIDE1MDBgO1xuXG4gIC8vIEFkZGluZyBuYW1lIGZvciBtZW51IHNlY3Rpb25cbiAgY29uc3QgbmFtZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbmFtZTEudGV4dENvbnRlbnQgPSBcIlN1bGEgUmFzYSBTaGlyYXpcIjtcbiAgbmFtZTEuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cbiAgLy8gICBBZGRpbmcgZXZlcnl0aGluZyB0byBtZW51IHNlY3Rpb25cbiAgbWVudS5hcHBlbmRDaGlsZChpbWFnZTEpO1xuICBtZW51LmFwcGVuZENoaWxkKG5hbWUxKTtcbiAgbWVudS5hcHBlbmRDaGlsZChpbmZvMWEpO1xuICBtZW51LmFwcGVuZENoaWxkKGluZm8xYik7XG5cbiAgLy8gU2Vjb25kIFdpbmUgU2VjdGlvblxuICAvLyAgIEFkZGluZyBjb250ZW50IGZvciBtZW51IHNlY3Rpb25cbiAgY29uc3QgaW1hZ2UyID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMi5zcmMgPSB3aW5lMjtcbiAgaW1hZ2UyLmFsdCA9IFwid2luZSBwaG90b1wiO1xuXG4gIC8vICAgQWRkaW5nIHdpbmUtaW5mb1xuICBjb25zdCBpbmZvMmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzJhLnRleHRDb250ZW50ID0gYEFsY29ob2wgQ29udGVudDogMTMuNSVgO1xuICBjb25zdCBpbmZvMmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzJiLnRleHRDb250ZW50ID0gYFByaWNlOiA3NTAgbWwgLSBOUFIgMTUwMGA7XG5cbiAgLy8gQWRkaW5nIG5hbWUgZm9yIG1lbnUgc2VjdGlvblxuICBjb25zdCBuYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBuYW1lMi50ZXh0Q29udGVudCA9IFwiQ3Jpb3MgVG9ycm9udGVzXCI7XG4gIG5hbWUyLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gIC8vICAgQWRkaW5nIGV2ZXJ5dGhpbmcgdG8gbWVudSBzZWN0aW9uXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChuYW1lMik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW5mbzJhKTtcbiAgbWVudS5hcHBlbmRDaGlsZChpbmZvMmIpO1xuXG4gIC8vIFRoaXJkIFdpbmUgU2VjdGlvblxuICAvLyAgIEFkZGluZyBjb250ZW50IGZvciBtZW51IHNlY3Rpb25cbiAgY29uc3QgaW1hZ2UzID0gbmV3IEltYWdlKCk7XG4gIGltYWdlMy5zcmMgPSB3aW5lMztcbiAgaW1hZ2UzLmFsdCA9IFwid2luZSBwaG90b1wiO1xuXG4gIC8vICAgQWRkaW5nIHdpbmUtaW5mb1xuICBjb25zdCBpbmZvM2EgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mbzNhLnRleHRDb250ZW50ID0gYEFsY29ob2wgQ29udGVudDogMTIlYDtcbiAgY29uc3QgaW5mbzNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm8zYi50ZXh0Q29udGVudCA9IGBQcmljZTogNzUwIG1sIC0gTlBSIDEyMDBgO1xuXG4gIC8vIEFkZGluZyBuYW1lIGZvciBtZW51IHNlY3Rpb25cbiAgY29uc3QgbmFtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbmFtZTMudGV4dENvbnRlbnQgPSBcIlphbXBhIFNvaXJlZSBCcnV0XCI7XG4gIG5hbWUzLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXG4gIC8vICAgQWRkaW5nIGV2ZXJ5dGhpbmcgdG8gbWVudSBzZWN0aW9uXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcbiAgbWVudS5hcHBlbmRDaGlsZChuYW1lMyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW5mbzNhKTtcbiAgbWVudS5hcHBlbmRDaGlsZChpbmZvM2IpO1xuXG4gIHJldHVybiBtZW51O1xufTtcbiIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vVGFicyBNb2R1bGVzL2hvbWVQYWdlLmpzXCI7XG5pbXBvcnQgeyBtZW51U2VjdGlvbiB9IGZyb20gXCIuL1RhYnMgTW9kdWxlcy9tZW51UGFnZS9iZXZlcmFnZXMuanNcIjtcbmltcG9ydCB7IGNvbnRhY3RTZWN0aW9uIH0gZnJvbSBcIi4vVGFicyBNb2R1bGVzL2NvbnRhY3RQYWdlL2NvbnRhY3RQYWdlLmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICByZXR1cm4geyBkaXYgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3RhdXJhbnQge1xuICBob21lUGFnZSgpIHtcbiAgICBjb250ZW50LmRpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gQWRkaW5nIGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgICAvLyBDcmVhdGluZyBIZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQdWNoaSBSZXN0YXVyYW50XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRlclwiKTtcblxuICAgIC8vIGFkZGluZyBhbGwgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQuZGl2XG4gICAgY29udGVudC5kaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lUGFnZS5hYm91dFNlY3Rpb24oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlLmhvdXJzU2VjdGlvbigpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UubG9jYXRpb25TZWN0aW9uKCkpO1xuICB9XG5cbiAgbWVudVBhZ2UoKSB7XG4gICAgY29udGVudC5kaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIEFkZGluZyBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgLy8gQ3JlYXRpbmcgSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmV2ZXJhZ2VzXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRlclwiKTtcblxuICAgIC8vIGFkZGluZyBhbGwgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQuZGl2XG4gICAgY29udGVudC5kaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbigpKTtcbiAgfVxuXG4gIGNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnRlbnQuZGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAvLyBBZGRpbmcgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICAgIC8vIENyZWF0aW5nIEhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGVyXCIpO1xuXG4gICAgLy8gYWRkaW5nIGFsbCBlbGVtZW50cyB0byB0aGUgY29udGVudC5kaXZcbiAgICBjb250ZW50LmRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RTZWN0aW9uKCkpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRpbmcgY3NzXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vbWFpbi5jc3NcIjtcblxuLy8gSW1wb3J0aW5nIEphdmFzY3JpcHQgZmlsZXNcbmltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL2NvbXBvZW5lbnQuanNcIjtcblxuLy8gUmVuZGVyaW5nIGhvbWUgcGFnZSB3aGlsZSBzdGFydHVwXG5sZXQgcmVzdGF1cmFudCA9IG5ldyBSZXN0YXVyYW50KCk7XG5yZXN0YXVyYW50LmhvbWVQYWdlKCk7XG5cbi8vIHNldHRpbmcgZXZlbnQgbGlzdGVuZXJzXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNob21lLWJ0blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc3RhdXJhbnQuaG9tZVBhZ2UpO1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0YXVyYW50Lm1lbnVQYWdlKTtcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3QtYnRuXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzdGF1cmFudC5jb250YWN0UGFnZSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbWFnZXMvcmVzdGF1cmFudCBiZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJyb3duOiAjZTM4NzU5O1xcbiAgLS1icm93bi1oaWdobGlnaHQ6ICNjODYzMzE7XFxuICAtLWJyb3duLWJvcmRlcjogIzg4MzYxNjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogTmF2aWdhdGlvbiAqL1xcblxcbm5hdiB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHJnYmEoMjM2LCAxNDQsIDk4LCAwLjMpLFxcbiAgICByZ2JhKDIwOSwgNzYsIDEwLCAwLjMpXFxuICApO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJyb3duLWJvcmRlcik7XFxufVxcblxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaW5lLWhlaWdodDogN3ZoO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgd2lkdGg6IDdyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24taGlnaGxpZ2h0KTtcXG59XFxuXFxubmF2IHVsIGxpOmZpcnN0LW9mLXR5cGUsXFxubmF2IHVsIGxpOm50aC1vZi10eXBlKDIpLFxcbm5hdiB1bCBsaTpsYXN0LW9mLXR5cGUge1xcbiAgZmxleDogMTAwcHg7XFxufVxcblxcbm5hdiB1bCBsaTpudGgtb2YtdHlwZSgyKSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1icm93bi1ib3JkZXIpO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi8qIEhvbWUgUGFnZSAqL1xcblxcbi5jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYxKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWJyb3duKTtcXG5cXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5ob21lLWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tYnJvd24taGlnaGxpZ2h0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICB0ZXh0LWluZGVudDogMXJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1icm93bik7XFxufVxcblxcbnNlY3Rpb24gLm5hbWUge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tYnJvd24pO1xcbn1cXG5cXG5zZWN0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuc2VjdGlvbiB1bCBsaTpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHZhcigtLWJyb3duKTtcXG59XFxuXFxuc2VjdGlvbiBpbWcge1xcbiAgaGVpZ2h0OiAxN3JlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24tYm9yZGVyKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFO2tFQUMyRDtFQUMzRCxzQkFBc0I7QUFDeEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLFdBQVc7RUFDWDs7OztHQUlDO0VBQ0QsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBOzs7RUFHRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7O0VBRWIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7O0VBRXJCLGdDQUFnQzs7RUFFaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIscUNBQXFDO0FBQ3ZDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYnJvd246ICNlMzg3NTk7XFxuICAtLWJyb3duLWhpZ2hsaWdodDogI2M4NjMzMTtcXG4gIC0tYnJvd24tYm9yZGVyOiAjODgzNjE2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLFxcbiAgICB1cmwoXFxcIi4vSW1hZ2VzL3Jlc3RhdXJhbnRcXFxcIGJnLmpwZ1xcXCIpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uICovXFxuXFxubmF2IHtcXG4gIGhlaWdodDogN3ZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiYSgyMzYsIDE0NCwgOTgsIDAuMyksXFxuICAgIHJnYmEoMjA5LCA3NiwgMTAsIDAuMylcXG4gICk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYnJvd24tYm9yZGVyKTtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGxpbmUtaGVpZ2h0OiA3dmg7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB3aWR0aDogN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bi1oaWdobGlnaHQpO1xcbn1cXG5cXG5uYXYgdWwgbGk6Zmlyc3Qtb2YtdHlwZSxcXG5uYXYgdWwgbGk6bnRoLW9mLXR5cGUoMiksXFxubmF2IHVsIGxpOmxhc3Qtb2YtdHlwZSB7XFxuICBmbGV4OiAxMDBweDtcXG59XFxuXFxubmF2IHVsIGxpOm50aC1vZi10eXBlKDIpIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJyb3duLWJvcmRlcik7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLyogSG9tZSBQYWdlICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjEpO1xcbiAgcGFkZGluZzogMnJlbTtcXG5cXG4gIG1heC13aWR0aDogNTByZW07XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tYnJvd24pO1xcblxcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmhvbWUtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1icm93bi1oaWdobGlnaHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIHRleHQtaW5kZW50OiAxcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHZhcigtLWJyb3duKTtcXG59XFxuXFxuc2VjdGlvbiAubmFtZSB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1icm93bik7XFxufVxcblxcbnNlY3Rpb24gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG5zZWN0aW9uIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogdmFyKC0tYnJvd24pO1xcbn1cXG5cXG5zZWN0aW9uIGltZyB7XFxuICBoZWlnaHQ6IDE3cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icm93bi1ib3JkZXIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjb250YWN0U2VjdGlvbiIsImNvbnRhY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWN0UCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmFtZTEiLCJhcHBlbmRDaGlsZCIsImNvbnRhY3RQaCIsImNvbnRhY3RQaG4iLCJjb250YWN0ZW0iLCJjb250YWN0ZW1sIiwibGluZSIsIm5hbWUyIiwiYWJvdXRTZWN0aW9uIiwiaG91cnNTZWN0aW9uIiwibG9jYXRpb25TZWN0aW9uIiwiaG9tZVBhZ2UiLCJhYm91dCIsImFib3V0UCIsIm5hbWUiLCJob3VycyIsImhvdXJzSGVhZGluZyIsImhvdXJzQ29udGVudCIsImlubmVySFRNTCIsImxvY2F0aW9uIiwibG9jYXRpb25IZWFkaW5nIiwibG9jYXRpb25QIiwid2luZTEiLCJ3aW5lMiIsIndpbmUzIiwibWVudVNlY3Rpb24iLCJtZW51IiwiaW1hZ2UxIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJpbmZvMWEiLCJpbmZvMWIiLCJpbWFnZTIiLCJpbmZvMmEiLCJpbmZvMmIiLCJpbWFnZTMiLCJpbmZvM2EiLCJpbmZvM2IiLCJuYW1lMyIsImNvbnRlbnQiLCJkaXYiLCJxdWVyeVNlbGVjdG9yIiwiUmVzdGF1cmFudCIsImNvbnRhaW5lciIsImhlYWRlciIsInN0eWxlIiwicmVzdGF1cmFudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51UGFnZSIsImNvbnRhY3RQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==