(self["webpackChunkpokemon"] = self["webpackChunkpokemon"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */

.toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
}

.toastify.on {
    opacity: 1;
}

.toast-close {
    background: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    opacity: 0.4;
    padding: 0 5px;
}

.toastify-right {
    right: 15px;
}

.toastify-left {
    left: 15px;
}

.toastify-top {
    top: -150px;
}

.toastify-bottom {
    bottom: -150px;
}

.toastify-rounded {
    border-radius: 25px;
}

.toastify-avatar {
    width: 1.5em;
    height: 1.5em;
    margin: -7px 5px;
    border-radius: 2px;
}

.toastify-center {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    max-width: fit-content;
    max-width: -moz-fit-content;
}

@media only screen and (max-width: 360px) {
    .toastify-right, .toastify-left {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        max-width: fit-content;
    }
}
`, "",{"version":3,"sources":["webpack://./node_modules/toastify-js/src/toastify.css"],"names":[],"mappings":"AAAA;;;;;;EAME;;AAEF;IACI,kBAAkB;IAClB,cAAc;IACd,qBAAqB;IACrB,uFAAuF;IACvF,6DAA6D;IAC7D,qDAAqD;IACrD,eAAe;IACf,UAAU;IACV,wDAAwD;IACxD,kBAAkB;IAClB,eAAe;IACf,qBAAqB;IACrB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI;QACI,iBAAiB;QACjB,kBAAkB;QAClB,OAAO;QACP,QAAQ;QACR,sBAAsB;IAC1B;AACJ","sourcesContent":["/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/assets/images/cloud.jpg */ "./src/assets/images/cloud.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Lora", serif;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

h2 {
  color: #f0f0f0;
}

.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-logo {
  height: auto;
  margin-left: 1.5rem;
  padding: 18px;
  padding-left: 18rem;
  list-style: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: contain;
  background-repeat: no-repeat;
  max-height: 3em;
  display: block;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2d2c38;
  border: 2px solid #dc3545;
  flex-direction: row;
}

.navbar-nav {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
  padding-left: 1rem;
  list-style: none;
  box-sizing: border-box;
  position: sticky;
  top: 0;
}

.navbar-nav > li.nav-item > a.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
}

.navbar-nav > li.nav-item > a.nav-link:hover,
.navbar-nav > li.nav-item > a.nav-link:focus {
  color: #f05f40;
}

a {
  text-decoration: none;
}

main {
  margin-top: 5em;
  min-height: 75vh;
}

section,
footer {
  padding: 2em;
}

footer {
  border-top: solid 2px #000;
  display: flex;
  justify-content: center;
  font-weight: 900;
  background-color: #f0f0f0;
}

.d-grid {
  display: grid;
}

.modal {
  display: none;
}

.modal.show {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #c1c7d0d5;
  z-index: 2000;
  padding: 1em;
  overflow-y: initial !important;
}

.modal-container {
  flex-wrap: wrap;
  background-color: #fff;
  color: #000;
  padding: 2em;
  border-radius: 1em;
  height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  right: 2em;
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.row {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}

.d-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.col-md-12,
.col-md-6,
.col-md-4,
.pokemon-detail {
  max-width: 100%;
}

#itemImage {
  max-width: 25em;
  max-height: 10em;
}

#category,
#area,
#tags {
  font-weight: 400;
  font-size: large;
}

.ingredients {
  padding: 0 1em;
}

#modal-section {
  background-color: #fcfafa;
  max-width: 90%;
  font-size: large;
  padding: 2em 0;
}

.comment-list-section h2 {
  color: #3d3d3d;
  font-weight: 400;
}

#modal-section h2 {
  color: #3d3d3d;
  font-weight: 400;
}

.comment-form,
.comment-list-section {
  padding: 1em 0;
}

.comment-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  flex-direction: column;
  min-width: 38%;
}

.comment-list {
  list-style: none;
}

.comment-form input,
.comment-form textarea,
.comment-form button {
  border-radius: 5px;
  padding: 0.2em 0.5em;
  width: 100%;
}

.comment-form input,
.comment-form button {
  height: 3em;
}

.comment-form textarea {
  height: 10em;
}

.bg {
  padding: 1em;
  border-bottom: #d2d2d2 solid 1px;
}

.comment-list-section p {
  padding: 0 0 1em 1em;
}

.mb-2 {
  margin-bottom: 2em;
}

.mtb-2 {
  margin-top: 2em;
  margin-bottom: 2em;
}

.comment-list li {
  padding: 0.5em;
}

.comment-list li:nth-child(odd) {
  background-color: #a7c3e0;
}

.bg-primary {
  background-color: #3295d0;

  /* background-color: #5d9ee3; */
}

.bg-primary-light {
  background-color: #62a3e7;
}

.comment-list-section {
  max-width: 90%;
  font-size: large;
  padding: 2em 0;
}

.pokemon-list {
  justify-content: center;
}

.pokemon-detail {
  display: flex;
  flex-direction: column;
  border: #000 2px solid;
  border-radius: 10px;
  justify-content: center;
  padding: 1em;
  background-color: #f0f0f0;
  min-width: 15em;
  width: 15em;
}

.pokemon-detail img {
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.pokemon-detail div {
  width: 100%;
  padding: 0.5em 0;
}

.pokemon-detail i {
  color: #1cda5b;
  cursor: pointer;
}

.pokemon-detail button {
  padding: 0.5em 1em;
}

.pokemon-detail button:hover {
  background-color: #1c9eda;
  color: #fff;
  cursor: pointer;
}

.pokemon-detail:hover {
  border: #000 4px solid;
  box-shadow: 4px -6px rgb(182, 182, 181);
}

.comment-list li:hover,
.comment-form button:hover {
  background-color: #303030;
  color: #fff;
  cursor: pointer;
}

/* Put all mobile code above this. */
@media only screen and (min-width: 768px) {
  .pokemon-detail {
    width: 20%;
  }

  .col-md-4 {
    width: 18%;
  }

  .col-md-6 {
    width: 45%;
  }

  .col-md-12 {
    width: 100%;
  }

  .modal-container {
    padding: 2em 5em;
  }

  .comment-list-section {
    width: 45%;
  }

  .modal-close {
    right: 4em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,SAAS;EACT,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,yDAAqD;AACvD;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yDAAkD;EAClD,wBAAwB;EACxB,4BAA4B;EAC5B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,eAAe;EACf,MAAM;EACN,OAAO;EACP,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;;;;EAIE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;;EAGE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;;EAGE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;;EAEzB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;EACX,eAAe;AACjB;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n  background-image: url('/src/assets/images/cloud.jpg');\r\n}\r\n\r\nh2 {\r\n  color: #f0f0f0;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../assets/images/logo.png');\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  max-height: 3em;\r\n  display: block;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #000;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: 900;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.d-grid {\r\n  display: grid;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n}\r\n\r\n.modal.show {\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  max-width: 100%;\r\n  background-color: #c1c7d0d5;\r\n  z-index: 2000;\r\n  padding: 1em;\r\n  overflow-y: initial !important;\r\n}\r\n\r\n.modal-container {\r\n  flex-wrap: wrap;\r\n  background-color: #fff;\r\n  color: #000;\r\n  padding: 2em;\r\n  border-radius: 1em;\r\n  height: 90vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-close {\r\n  position: absolute;\r\n  right: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  gap: 0.5em;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5em;\r\n}\r\n\r\n.col-md-12,\r\n.col-md-6,\r\n.col-md-4,\r\n.pokemon-detail {\r\n  max-width: 100%;\r\n}\r\n\r\n#itemImage {\r\n  max-width: 25em;\r\n  max-height: 10em;\r\n}\r\n\r\n#category,\r\n#area,\r\n#tags {\r\n  font-weight: 400;\r\n  font-size: large;\r\n}\r\n\r\n.ingredients {\r\n  padding: 0 1em;\r\n}\r\n\r\n#modal-section {\r\n  background-color: #fcfafa;\r\n  max-width: 90%;\r\n  font-size: large;\r\n  padding: 2em 0;\r\n}\r\n\r\n.comment-list-section h2 {\r\n  color: #3d3d3d;\r\n  font-weight: 400;\r\n}\r\n\r\n#modal-section h2 {\r\n  color: #3d3d3d;\r\n  font-weight: 400;\r\n}\r\n\r\n.comment-form,\r\n.comment-list-section {\r\n  padding: 1em 0;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5em;\r\n  flex-direction: column;\r\n  min-width: 38%;\r\n}\r\n\r\n.comment-list {\r\n  list-style: none;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form textarea,\r\n.comment-form button {\r\n  border-radius: 5px;\r\n  padding: 0.2em 0.5em;\r\n  width: 100%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  height: 3em;\r\n}\r\n\r\n.comment-form textarea {\r\n  height: 10em;\r\n}\r\n\r\n.bg {\r\n  padding: 1em;\r\n  border-bottom: #d2d2d2 solid 1px;\r\n}\r\n\r\n.comment-list-section p {\r\n  padding: 0 0 1em 1em;\r\n}\r\n\r\n.mb-2 {\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.mtb-2 {\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.comment-list li {\r\n  padding: 0.5em;\r\n}\r\n\r\n.comment-list li:nth-child(odd) {\r\n  background-color: #a7c3e0;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #3295d0;\r\n\r\n  /* background-color: #5d9ee3; */\r\n}\r\n\r\n.bg-primary-light {\r\n  background-color: #62a3e7;\r\n}\r\n\r\n.comment-list-section {\r\n  max-width: 90%;\r\n  font-size: large;\r\n  padding: 2em 0;\r\n}\r\n\r\n.pokemon-list {\r\n  justify-content: center;\r\n}\r\n\r\n.pokemon-detail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: #000 2px solid;\r\n  border-radius: 10px;\r\n  justify-content: center;\r\n  padding: 1em;\r\n  background-color: #f0f0f0;\r\n  min-width: 15em;\r\n  width: 15em;\r\n}\r\n\r\n.pokemon-detail img {\r\n  width: 100%;\r\n  max-height: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.pokemon-detail div {\r\n  width: 100%;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.pokemon-detail i {\r\n  color: #1cda5b;\r\n  cursor: pointer;\r\n}\r\n\r\n.pokemon-detail button {\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.pokemon-detail button:hover {\r\n  background-color: #1c9eda;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.pokemon-detail:hover {\r\n  border: #000 4px solid;\r\n  box-shadow: 4px -6px rgb(182, 182, 181);\r\n}\r\n\r\n.comment-list li:hover,\r\n.comment-form button:hover {\r\n  background-color: #303030;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Put all mobile code above this. */\r\n@media only screen and (min-width: 768px) {\r\n  .pokemon-detail {\r\n    width: 20%;\r\n  }\r\n\r\n  .col-md-4 {\r\n    width: 18%;\r\n  }\r\n\r\n  .col-md-6 {\r\n    width: 45%;\r\n  }\r\n\r\n  .col-md-12 {\r\n    width: 100%;\r\n  }\r\n\r\n  .modal-container {\r\n    padding: 2em 5em;\r\n  }\r\n\r\n  .comment-list-section {\r\n    width: 45%;\r\n  }\r\n\r\n  .modal-close {\r\n    right: 4em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./node_modules/toastify-js/src/toastify.css":
/*!***************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./toastify.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/toastify-js/src/toastify.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_toastify_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    ariaLive: 'polite',
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute('aria-live', this.options.ariaLive)
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pokemon */ "./src/modules/pokemon.js");



const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const baseUrlInvolve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const mealAppIdName = 'pokemon';
let appId = '';

const saveData = () => {
  localStorage.setItem(mealAppIdName, appId);
};

const createApp = (async () => {
  const response = await fetch(`${baseUrlInvolve}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/text',
    },
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
  });
  appId = await response.text();
  saveData();
});

const retrieveId = async () => {
  appId = localStorage.getItem(mealAppIdName);
  if (appId === null) await createApp();
};

window.addEventListener('load', async () => {
  await retrieveId();
  (0,_modules_pokemon__WEBPACK_IMPORTED_MODULE_1__.renderList)(baseUrl, baseUrlInvolve, appId);
});

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', () => {
  modal.classList.toggle('show');
});

document.onkeydown = (evt) => {
  evt = evt || window.event;
  let isEscape = false;
  if ('key' in evt) {
      isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
  } else {
      isEscape = (evt.keyCode === 27);
  }
  if (isEscape && modal.classList.contains('show')) {
      modal.classList.toggle('show');
  }
};

/***/ }),

/***/ "./src/modules/pokemon.js":
/*!********************************!*\
  !*** ./src/modules/pokemon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countComments: () => (/* binding */ countComments),
/* harmony export */   countItems: () => (/* binding */ countItems),
/* harmony export */   renderList: () => (/* binding */ renderList)
/* harmony export */ });
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastify_js_src_toastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js/src/toastify.css */ "./node_modules/toastify-js/src/toastify.css");
// eslint-disable-next-line import/no-extraneous-dependencies

// eslint-disable-next-line import/no-extraneous-dependencies


const countComments = () => document.querySelector('.recentComments').childNodes.length;
const countItems = () => document.querySelector('.pokemon-list').childNodes.length;

const renderList = async (pokemonAPIBaseUrl, baseUrlInvolve, appId) => {
  const pokemonList = document.querySelector('.pokemon-list');
  pokemonList.innerHTML = '';
  const pokemonPopup = document.querySelector('.pokemonPopup');
  const itemsTotal = document.querySelector('.itemsTotal');
  const modal = document.querySelector('.modal');

  // Fetch the list of Pokemon
  const response = await fetch(pokemonAPIBaseUrl);
  let listData = await response.json();
  listData = listData.results;

  // Sort the array elements
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  const objects = sortedDataList;
  // Loop through 18 elements of the array
  const getComments = async (itemId) => {
    // Fetch the updated comments after posting
    const commentsResponse = await fetch(
      `${baseUrlInvolve}${appId}/comments?item_id=${itemId}_id`,
    );
    if (commentsResponse.status === 200) {
      const commentsData = await commentsResponse.json();
      // Get the recentComments element
      const recentComments = document.querySelector('.recentComments');

      if (!commentsData.error) {
        // console.error('Invalid comments data format:', commentsData);
        recentComments.innerHTML = '';
        commentsData.forEach((comment) => {
          const commentLi = document.createElement('li');
          commentLi.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
          recentComments.appendChild(commentLi);
        });
        document.getElementById('commentCount').textContent = countComments();
      } else document.getElementById('commentCount').textContent = countComments();
    }
  };

  const getLikes = async () => {
    // Fetch the likes
    const response = await fetch(
      `${baseUrlInvolve}${appId}/likes`,
    );

    const er = await response.text();
    if (er !== '') {
      const likes = JSON.parse(er);
      if (likes.error) {
        toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({
          text: likes.error.message,
          className: 'info',
          style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)',
          },
        }).showToast();
      } else if (likes !== undefined) {
          return likes;
      }
    }
    return [];
  };

  const saveLike = async (itemId, elLikeCount) => {
    // Prepare the data to be sent
    const data = {
      item_id: itemId,
    };

    // Make the POST request to the API
    const postResponse = await fetch(
      `${baseUrlInvolve}${appId}/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (postResponse.ok) {
      elLikeCount.counter = Number(elLikeCount.counter) + 1;
      elLikeCount.textContent = ` (${Number(elLikeCount.counter)})`;
    }
  };

  const likes = await getLikes();

  pokemonList.innerHTML = '';
  let i = 1;
  objects.forEach((object) => {
    // Fetch the Pokemon image
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`;

    const showPokemon = async () => {
      const pokeResponse = await fetch(object.url);
      const pokeObject = await pokeResponse.json();
      modal.classList.toggle('show');
      const itemId = pokeObject.id;
      pokemonPopup.innerHTML += `
          <div class="row">
            <div class="pokemonImg col-md-12">
              <img id="itemImage" src="${imageSrc}" alt="${object.name}" />
              <h3>${object.name}</h3>
            </div>
            <div class="comments comment-list-section col-md-6">
              <h3>Recent Comments (<span id='commentCount'>0</span>)</h3>
              <ul class="recentComments comment-list"></ul>
            </div>
            <form autocomplete="off" class="AddComment comment-form col-md-6">
              <label>Add a Comment</label>
              <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
              <textarea rows="7" id="commentText"></textarea>
              <button id="submit" class="btn" type="submit">Comment</button>
            </form>
          </div>
        `;
      await getComments(itemId);
      const commentForm = document.querySelector('.AddComment');
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('commentText');
        const username = nameInput.value;
        const comment = commentInput.value;
        // Generate a unique item_id            // Prepare the data to be sent
        const data = {
          item_id: `${itemId}_id`,
          username,
          comment,
        };
          // Make the POST request to the API
        const postResponse = await fetch(
          `${baseUrlInvolve}${appId}/comments`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        if (postResponse.ok) {
          // Handle the successful response
          getComments(itemId);
        }
        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';
      });
      const closeBtn = document.querySelector('.modal-close');
      closeBtn.addEventListener('click', () => {
        pokemonPopup.innerHTML = '';
      });
    };
    const li = document.createElement('li');
    const divDetails = document.createElement('div');
    const divButton = document.createElement('div');
    const elName = document.createElement('label');
    const elLikeParent = document.createElement('label');
    const elLike = document.createElement('i');
    const elLikeCount = document.createElement('span');
    const elIcon = document.createElement('img');
    const elComment = document.createElement('button');

    li.className = 'pokemon-detail';
    divDetails.className = 'd-grid';
    elLike.className = 'fa fa-heart';

    elName.textContent = object.name;
    elComment.textContent = 'Comments';
    elIcon.src = imageSrc;
    elLike.addEventListener(('click'), (() => { saveLike(object.name, elLikeCount); }));

    elLikeParent.appendChild(elLike);
    const like = likes.find((x) => x.item_id === object.name);
    elLikeCount.id = `likes ${i}`;
    elLikeCount.textContent = ` (${like ? like.likes : 0})`;
    elLikeCount.counter = like ? like.likes : 0;
    elLikeParent.appendChild(elLikeCount);
    elComment.addEventListener(
      'click', () => showPokemon(),
    );
    li.appendChild(elIcon);
    divDetails.appendChild(elName);
    divDetails.appendChild(elLikeParent);
    divButton.appendChild(elComment);
    divDetails.appendChild(divButton);
    li.appendChild(divDetails);
    pokemonList.appendChild(li);

    i += 1;
  });

  itemsTotal.innerText = countItems();
};


/***/ }),

/***/ "./src/assets/images/cloud.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cloud.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9497edc8e00e8c042b29.jpg";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "888baca4809420be1126.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFB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QUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNWIyQjtBQUNtQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNtQztBQUNuQztBQUNzQzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLE9BQU87QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVCQUF1QixFQUFFLGlCQUFpQixJQUFJLGdCQUFnQjtBQUNuRztBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxFQUFFLE1BQU07QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLGVBQWUsRUFBRSxNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1IQUFtSCxFQUFFOztBQUVySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVMsU0FBUyxZQUFZO0FBQ3ZFLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxlQUFlLEVBQUUsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFDQUFxQzs7QUFFckY7QUFDQTtBQUNBLDhCQUE4QixFQUFFO0FBQ2hDLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzIiwid2VicGFjazovL3Bva2Vtb24vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL25vZGVfbW9kdWxlcy90b2FzdGlmeS1qcy9zcmMvdG9hc3RpZnkuY3NzPzJhZTkiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Bva2Vtb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9rZW1vbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Bva2Vtb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5qcyIsIndlYnBhY2s6Ly9wb2tlbW9uLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Bva2Vtb24vLi9zcmMvbW9kdWxlcy9wb2tlbW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cblxuLnRvYXN0aWZ5IHtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM3M2E1ZmYsICM1NDc3ZjUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcbiAgICB6LWluZGV4OiAyMTQ3NDgzNjQ3O1xufVxuXG4udG9hc3RpZnkub24ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC1jbG9zZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udG9hc3RpZnktcmlnaHQge1xuICAgIHJpZ2h0OiAxNXB4O1xufVxuXG4udG9hc3RpZnktbGVmdCB7XG4gICAgbGVmdDogMTVweDtcbn1cblxuLnRvYXN0aWZ5LXRvcCB7XG4gICAgdG9wOiAtMTUwcHg7XG59XG5cbi50b2FzdGlmeS1ib3R0b20ge1xuICAgIGJvdHRvbTogLTE1MHB4O1xufVxuXG4udG9hc3RpZnktcm91bmRlZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRvYXN0aWZ5LWF2YXRhciB7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAtN3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2FzdGlmeS1jZW50ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnRvYXN0aWZ5LXJpZ2h0LCAudG9hc3RpZnktbGVmdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7OztFQU1FOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsdUZBQXVGO0lBQ3ZGLDZEQUE2RDtJQUM3RCxxREFBcUQ7SUFDckQsZUFBZTtJQUNmLFVBQVU7SUFDVix3REFBd0Q7SUFDeEQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1Isc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogVG9hc3RpZnkganMgMS4xMi4wXFxuICogaHR0cHM6Ly9naXRodWIuY29tL2FwdmFydW4vdG9hc3RpZnktanNcXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcXG4gKlxcbiAqIENvcHlyaWdodCAoQykgMjAxOCBWYXJ1biBBIFBcXG4gKi9cXG5cXG4udG9hc3RpZnkge1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTBweCAzNnB4IC00cHggcmdiYSg3NywgOTYsIDIzMiwgMC4zKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjNzNhNWZmLCAjNTQ3N2Y1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzczYTVmZiwgIzU0NzdmNSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcXG4gICAgei1pbmRleDogMjE0NzQ4MzY0NztcXG59XFxuXFxuLnRvYXN0aWZ5Lm9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRvYXN0LWNsb3NlIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXJpZ2h0IHtcXG4gICAgcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50b2FzdGlmeS1sZWZ0IHtcXG4gICAgbGVmdDogMTVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LXRvcCB7XFxuICAgIHRvcDogLTE1MHB4O1xcbn1cXG5cXG4udG9hc3RpZnktYm90dG9tIHtcXG4gICAgYm90dG9tOiAtMTUwcHg7XFxufVxcblxcbi50b2FzdGlmeS1yb3VuZGVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLnRvYXN0aWZ5LWF2YXRhciB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgbWFyZ2luOiAtN3B4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4udG9hc3RpZnktY2VudGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogLW1vei1maXQtY29udGVudDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xcbiAgICAudG9hc3RpZnktcmlnaHQsIC50b2FzdGlmeS1sZWZ0IHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltYWdlcy9jbG91ZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMzA7XHJcbn1cclxuXHJcbi5uYXZiYXItbG9nbyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgcGFkZGluZzogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1heC1oZWlnaHQ6IDNlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XHJcbiAgY29sb3I6ICNmMDVmNDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogNWVtO1xyXG4gIG1pbi1oZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbnNlY3Rpb24sXHJcbmZvb3RlciB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uZC1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2QwZDU7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIGhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5kLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41ZW07XHJcbn1cclxuXHJcbi5jb2wtbWQtMTIsXHJcbi5jb2wtbWQtNixcclxuLmNvbC1tZC00LFxyXG4ucG9rZW1vbi1kZXRhaWwge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2l0ZW1JbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAyNWVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwZW07XHJcbn1cclxuXHJcbiNjYXRlZ29yeSxcclxuI2FyZWEsXHJcbiN0YWdzIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cyB7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbn1cclxuXHJcbiNtb2RhbC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmYWZhO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiBoMiB7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI21vZGFsLXNlY3Rpb24gaDIge1xyXG4gIGNvbG9yOiAjM2QzZDNkO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0sXHJcbi5jb21tZW50LWxpc3Qtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbn1cclxuXHJcbi5jb21tZW50LWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC41ZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDM4JTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcclxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSxcclxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcclxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xyXG4gIGhlaWdodDogM2VtO1xyXG59XHJcblxyXG4uY29tbWVudC1mb3JtIHRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwZW07XHJcbn1cclxuXHJcbi5iZyB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1ib3R0b206ICNkMmQyZDIgc29saWQgMXB4O1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0LXNlY3Rpb24gcCB7XHJcbiAgcGFkZGluZzogMCAwIDFlbSAxZW07XHJcbn1cclxuXHJcbi5tYi0yIHtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5tdGItMiB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdCBsaSB7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWxpc3QgbGk6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2MzZTA7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5NWQwO1xyXG5cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5ZWUzOyAqL1xyXG59XHJcblxyXG4uYmctcHJpbWFyeS1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyYTNlNztcclxufVxyXG5cclxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHBhZGRpbmc6IDJlbSAwO1xyXG59XHJcblxyXG4ucG9rZW1vbi1saXN0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBva2Vtb24tZGV0YWlsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyOiAjMDAwIDJweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1pbi13aWR0aDogMTVlbTtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG5cclxuLnBva2Vtb24tZGV0YWlsIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ucG9rZW1vbi1kZXRhaWwgZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjVlbSAwO1xyXG59XHJcblxyXG4ucG9rZW1vbi1kZXRhaWwgaSB7XHJcbiAgY29sb3I6ICMxY2RhNWI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9rZW1vbi1kZXRhaWwgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuXHJcbi5wb2tlbW9uLWRldGFpbCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzllZGE7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9rZW1vbi1kZXRhaWw6aG92ZXIge1xyXG4gIGJvcmRlcjogIzAwMCA0cHggc29saWQ7XHJcbiAgYm94LXNoYWRvdzogNHB4IC02cHggcmdiKDE4MiwgMTgyLCAxODEpO1xyXG59XHJcblxyXG4uY29tbWVudC1saXN0IGxpOmhvdmVyLFxyXG4uY29tbWVudC1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFB1dCBhbGwgbW9iaWxlIGNvZGUgYWJvdmUgdGhpcy4gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5wb2tlbW9uLWRldGFpbCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1tZC00IHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgfVxyXG5cclxuICAuY29sLW1kLTYge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5jb2wtbWQtMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJlbSA1ZW07XHJcbiAgfVxyXG5cclxuICAuY29tbWVudC1saXN0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1jbG9zZSB7XHJcbiAgICByaWdodDogNGVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix5REFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseURBQWtEO0VBQ2xELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIs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QUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvYXNzZXRzL2ltYWdlcy9jbG91ZC5qcGcnKTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgY29sb3I6ICNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbi5hcHAtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMzA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbG9nbyB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMThweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMThyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWF4LWhlaWdodDogM2VtO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XFxyXFxuICBjb2xvcjogI2YwNWY0MDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgbWluLWhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbixcXHJcXG5mb290ZXIge1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICMwMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLnNob3cge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2QwZDU7XFxyXFxuICB6LWluZGV4OiAyMDAwO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLW1kLTEyLFxcclxcbi5jb2wtbWQtNixcXHJcXG4uY29sLW1kLTQsXFxyXFxuLnBva2Vtb24tZGV0YWlsIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2l0ZW1JbWFnZSB7XFxyXFxuICBtYXgtd2lkdGg6IDI1ZW07XFxyXFxuICBtYXgtaGVpZ2h0OiAxMGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2F0ZWdvcnksXFxyXFxuI2FyZWEsXFxyXFxuI3RhZ3Mge1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5pbmdyZWRpZW50cyB7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmFmYTtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24gaDIge1xcclxcbiAgY29sb3I6ICMzZDNkM2Q7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtc2VjdGlvbiBoMiB7XFxyXFxuICBjb2xvcjogIzNkM2QzZDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0sXFxyXFxuLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi13aWR0aDogMzglO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSxcXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjJlbSAwLjVlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGlucHV0LFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnIHtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNkMmQyZDIgc29saWQgMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24gcCB7XFxyXFxuICBwYWRkaW5nOiAwIDAgMWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1iLTIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubXRiLTIge1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpOm50aC1jaGlsZChvZGQpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2MzZTA7XFxyXFxufVxcclxcblxcclxcbi5iZy1wcmltYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjk1ZDA7XFxyXFxuXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQ5ZWUzOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYmctcHJpbWFyeS1saWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJhM2U3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0LXNlY3Rpb24ge1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWxpc3Qge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogIzAwMCAycHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgbWluLXdpZHRoOiAxNWVtO1xcclxcbiAgd2lkdGg6IDE1ZW07XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWRldGFpbCBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tZGV0YWlsIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWRldGFpbCBpIHtcXHJcXG4gIGNvbG9yOiAjMWNkYTViO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1kZXRhaWwgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tZGV0YWlsIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM5ZWRhO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWRldGFpbDpob3ZlciB7XFxyXFxuICBib3JkZXI6ICMwMDAgNHB4IHNvbGlkO1xcclxcbiAgYm94LXNoYWRvdzogNHB4IC02cHggcmdiKDE4MiwgMTgyLCAxODEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IGxpOmhvdmVyLFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHV0IGFsbCBtb2JpbGUgY29kZSBhYm92ZSB0aGlzLiAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5wb2tlbW9uLWRldGFpbCB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sLW1kLTQge1xcclxcbiAgICB3aWR0aDogMTglO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbC1tZC02IHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb2wtbWQtMTIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAyZW0gNWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnQtbGlzdC1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2RhbC1jbG9zZSB7XFxyXFxuICAgIHJpZ2h0OiA0ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvYXN0aWZ5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2FzdGlmeS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIVxuICogVG9hc3RpZnkganMgMS4xMi4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYXB2YXJ1bi90b2FzdGlmeS1qc1xuICogQGxpY2Vuc2UgTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IFZhcnVuIEEgUFxuICovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuVG9hc3RpZnkgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKGdsb2JhbCkge1xuICAvLyBPYmplY3QgaW5pdGlhbGl6YXRpb25cbiAgdmFyIFRvYXN0aWZ5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gUmV0dXJuaW5nIGEgbmV3IGluaXQgb2JqZWN0XG4gICAgICByZXR1cm4gbmV3IFRvYXN0aWZ5LmxpYi5pbml0KG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLy8gTGlicmFyeSB2ZXJzaW9uXG4gICAgdmVyc2lvbiA9IFwiMS4xMi4wXCI7XG5cbiAgLy8gU2V0IHRoZSBkZWZhdWx0IGdsb2JhbCBvcHRpb25zXG4gIFRvYXN0aWZ5LmRlZmF1bHRzID0ge1xuICAgIG9sZGVzdEZpcnN0OiB0cnVlLFxuICAgIHRleHQ6IFwiVG9hc3RpZnkgaXMgYXdlc29tZSFcIixcbiAgICBub2RlOiB1bmRlZmluZWQsXG4gICAgZHVyYXRpb246IDMwMDAsXG4gICAgc2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgZGVzdGluYXRpb246IHVuZGVmaW5lZCxcbiAgICBuZXdXaW5kb3c6IGZhbHNlLFxuICAgIGNsb3NlOiBmYWxzZSxcbiAgICBncmF2aXR5OiBcInRvYXN0aWZ5LXRvcFwiLFxuICAgIHBvc2l0aW9uTGVmdDogZmFsc2UsXG4gICAgcG9zaXRpb246ICcnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJycsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICBzdG9wT25Gb2N1czogdHJ1ZSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBvZmZzZXQ6IHt4OiAwLCB5OiAwfSxcbiAgICBlc2NhcGVNYXJrdXA6IHRydWUsXG4gICAgYXJpYUxpdmU6ICdwb2xpdGUnLFxuICAgIHN0eWxlOiB7YmFja2dyb3VuZDogJyd9XG4gIH07XG5cbiAgLy8gRGVmaW5pbmcgdGhlIHByb3RvdHlwZSBvZiB0aGUgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYiA9IFRvYXN0aWZ5LnByb3RvdHlwZSA9IHtcbiAgICB0b2FzdGlmeTogdmVyc2lvbixcblxuICAgIGNvbnN0cnVjdG9yOiBUb2FzdGlmeSxcblxuICAgIC8vIEluaXRpYWxpemluZyB0aGUgb2JqZWN0IHdpdGggcmVxdWlyZWQgcGFyYW1ldGVyc1xuICAgIGluaXQ6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFZlcmlmeWluZyBhbmQgdmFsaWRhdGluZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuXG4gICAgICB0aGlzLnRvYXN0RWxlbWVudCA9IG51bGw7XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgdGhlIG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucy50ZXh0ID0gb3B0aW9ucy50ZXh0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnRleHQ7IC8vIERpc3BsYXkgbWVzc2FnZVxuICAgICAgdGhpcy5vcHRpb25zLm5vZGUgPSBvcHRpb25zLm5vZGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMubm9kZTsgIC8vIERpc3BsYXkgY29udGVudCBhcyBub2RlXG4gICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uID09PSAwID8gMCA6IG9wdGlvbnMuZHVyYXRpb24gfHwgVG9hc3RpZnkuZGVmYXVsdHMuZHVyYXRpb247IC8vIERpc3BsYXkgZHVyYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc2VsZWN0b3I7IC8vIFBhcmVudCBzZWxlY3RvclxuICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jYWxsYmFjazsgLy8gQ2FsbGJhY2sgYWZ0ZXIgZGlzcGxheVxuICAgICAgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID0gb3B0aW9ucy5kZXN0aW5hdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kZXN0aW5hdGlvbjsgLy8gT24tY2xpY2sgZGVzdGluYXRpb25cbiAgICAgIHRoaXMub3B0aW9ucy5uZXdXaW5kb3cgPSBvcHRpb25zLm5ld1dpbmRvdyB8fCBUb2FzdGlmeS5kZWZhdWx0cy5uZXdXaW5kb3c7IC8vIE9wZW4gZGVzdGluYXRpb24gaW4gbmV3IHdpbmRvd1xuICAgICAgdGhpcy5vcHRpb25zLmNsb3NlID0gb3B0aW9ucy5jbG9zZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbG9zZTsgLy8gU2hvdyB0b2FzdCBjbG9zZSBpY29uXG4gICAgICB0aGlzLm9wdGlvbnMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eSA9PT0gXCJib3R0b21cIiA/IFwidG9hc3RpZnktYm90dG9tXCIgOiBUb2FzdGlmeS5kZWZhdWx0cy5ncmF2aXR5OyAvLyB0b2FzdCBwb3NpdGlvbiAtIHRvcCBvciBib3R0b21cbiAgICAgIHRoaXMub3B0aW9ucy5wb3NpdGlvbkxlZnQgPSBvcHRpb25zLnBvc2l0aW9uTGVmdCB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbkxlZnQ7IC8vIHRvYXN0IHBvc2l0aW9uIC0gbGVmdCBvciByaWdodFxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uID0gb3B0aW9ucy5wb3NpdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5wb3NpdGlvbjsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYmFja2dyb3VuZENvbG9yOyAvLyB0b2FzdCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICB0aGlzLm9wdGlvbnMuYXZhdGFyID0gb3B0aW9ucy5hdmF0YXIgfHwgVG9hc3RpZnkuZGVmYXVsdHMuYXZhdGFyOyAvLyBpbWcgZWxlbWVudCBzcmMgLSB1cmwgb3IgYSBwYXRoXG4gICAgICB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuY2xhc3NOYW1lOyAvLyBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMub3B0aW9ucy5zdG9wT25Gb2N1cyA9IG9wdGlvbnMuc3RvcE9uRm9jdXMgPT09IHVuZGVmaW5lZCA/IFRvYXN0aWZ5LmRlZmF1bHRzLnN0b3BPbkZvY3VzIDogb3B0aW9ucy5zdG9wT25Gb2N1czsgLy8gc3RvcCB0aW1lb3V0IG9uIGZvY3VzXG4gICAgICB0aGlzLm9wdGlvbnMub25DbGljayA9IG9wdGlvbnMub25DbGljayB8fCBUb2FzdGlmeS5kZWZhdWx0cy5vbkNsaWNrOyAvLyBDYWxsYmFjayBhZnRlciBjbGlja1xuICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9mZnNldDsgLy8gdG9hc3Qgb2Zmc2V0XG4gICAgICB0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwID0gb3B0aW9ucy5lc2NhcGVNYXJrdXAgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZXNjYXBlTWFya3VwIDogVG9hc3RpZnkuZGVmYXVsdHMuZXNjYXBlTWFya3VwO1xuICAgICAgdGhpcy5vcHRpb25zLmFyaWFMaXZlID0gb3B0aW9ucy5hcmlhTGl2ZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hcmlhTGl2ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IG9wdGlvbnMuc3R5bGUgfHwgVG9hc3RpZnkuZGVmYXVsdHMuc3R5bGU7XG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUuYmFja2dyb3VuZCA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGN1cnJlbnQgb2JqZWN0IGZvciBjaGFpbmluZyBmdW5jdGlvbnNcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBCdWlsZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICBidWlsZFRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgdGhlIG9wdGlvbnMgYXJlIGRlZmluZWRcbiAgICAgIGlmICghdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRocm93IFwiVG9hc3RpZnkgaXMgbm90IGluaXRpYWxpemVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0XG4gICAgICB2YXIgZGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9IFwidG9hc3RpZnkgb24gXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuXG4gICAgICAvLyBQb3NpdGlvbmluZyB0b2FzdCB0byBsZWZ0IG9yIHJpZ2h0IG9yIGNlbnRlclxuICAgICAgaWYgKCEhdGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LVwiICsgdGhpcy5vcHRpb25zLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG8gYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9uc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIHRvYXN0aWZ5LWxlZnRcIjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1Byb3BlcnR5IGBwb3NpdGlvbkxlZnRgIHdpbGwgYmUgZGVwcmVjaWF0ZWQgaW4gZnVydGhlciB2ZXJzaW9ucy4gUGxlYXNlIHVzZSBgcG9zaXRpb25gIGluc3RlYWQuJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHBvc2l0aW9uXG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktcmlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBc3NpZ25pbmcgZ3Jhdml0eSBvZiBlbGVtZW50XG4gICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMub3B0aW9ucy5ncmF2aXR5O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgICAvLyBUaGlzIGlzIGJlaW5nIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdXNpbmcgdGhlIHN0eWxlIEhUTUwgRE9NIHByb3BlcnR5XG4gICAgICAgIGNvbnNvbGUud2FybignREVQUkVDQVRJT04gTk9USUNFOiBcImJhY2tncm91bmRDb2xvclwiIGlzIGJlaW5nIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdGhlIFwic3R5bGUuYmFja2dyb3VuZFwiIHByb3BlcnR5LicpO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggb3VyIHN0eWxlIG9iamVjdCBhbmQgYXBwbHkgc3R5bGVzIHRvIGRpdkVsZW1lbnRcbiAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHRoaXMub3B0aW9ucy5zdHlsZSkge1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHRoaXMub3B0aW9ucy5zdHlsZVtwcm9wZXJ0eV07XG4gICAgICB9XG5cbiAgICAgIC8vIEFubm91bmNlIHRoZSB0b2FzdCB0byBzY3JlZW4gcmVhZGVyc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hcmlhTGl2ZSkge1xuICAgICAgICBkaXZFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgdGhpcy5vcHRpb25zLmFyaWFMaXZlKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIHRvYXN0IG1lc3NhZ2Uvbm9kZVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsaWQgbm9kZSwgd2UgaW5zZXJ0IGl0XG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVzY2FwZU1hcmt1cCkge1xuICAgICAgICAgIGRpdkVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5vcHRpb25zLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXZhdGFyICE9PSBcIlwiKSB7XG4gICAgICAgICAgdmFyIGF2YXRhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGF2YXRhckVsZW1lbnQuc3JjID0gdGhpcy5vcHRpb25zLmF2YXRhcjtcblxuICAgICAgICAgIGF2YXRhckVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeS1hdmF0YXJcIjtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIGxlZnQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICAgIGRpdkVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBhdmF0YXJFbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIGEgY2xvc2UgaWNvbiB0byB0aGUgdG9hc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2UgPT09IHRydWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgY2xvc2UgZWxlbWVudFxuICAgICAgICB2YXIgY2xvc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2xvc2VFbGVtZW50LnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBcIkNsb3NlXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdC1jbG9zZVwiO1xuICAgICAgICBjbG9zZUVsZW1lbnQuaW5uZXJIVE1MID0gXCImIzEwMDA2O1wiO1xuXG4gICAgICAgIC8vIFRyaWdnZXJpbmcgdGhlIHJlbW92YWwgb2YgdG9hc3QgZnJvbSBET00gb24gY2xvc2UgY2xpY2tcbiAgICAgICAgY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy9DYWxjdWxhdGluZyBzY3JlZW4gd2lkdGhcbiAgICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggPiAwID8gd2luZG93LmlubmVyV2lkdGggOiBzY3JlZW4ud2lkdGg7XG5cbiAgICAgICAgLy8gQWRkaW5nIHRoZSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdCBlbGVtZW50XG4gICAgICAgIC8vIERpc3BsYXkgb24gdGhlIHJpZ2h0IGlmIHNjcmVlbiB3aWR0aCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgICAgaWYgKCh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgfHwgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9PT0gdHJ1ZSkgJiYgd2lkdGggPiAzNjApIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQWRkaW5nIGNsb3NlIGljb24gb24gdGhlIHJpZ2h0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGNsb3NlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGltZW91dCB3aGlsZSB0b2FzdCBpcyBmb2N1c2VkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzICYmIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyBzdG9wIGNvdW50ZG93blxuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJtb3VzZW92ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChkaXZFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC8vIGFkZCBiYWNrIHRoZSB0aW1lb3V0XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlbGVhdmVcIixcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdkVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUVsZW1lbnQoZGl2RWxlbWVudCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYW4gb24tY2xpY2sgZGVzdGluYXRpb24gcGF0aFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24sIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsaWNrID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrKCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBvZmZzZXRcbiAgICAgIGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMub2Zmc2V0ID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgdmFyIHggPSBnZXRBeGlzT2Zmc2V0QVZhbHVlKFwieFwiLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgeSA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ5XCIsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHhPZmZzZXQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gPT0gXCJsZWZ0XCIgPyB4IDogXCItXCIgKyB4O1xuICAgICAgICB2YXIgeU9mZnNldCA9IHRoaXMub3B0aW9ucy5ncmF2aXR5ID09IFwidG9hc3RpZnktdG9wXCIgPyB5IDogXCItXCIgKyB5O1xuXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4T2Zmc2V0ICsgXCIsXCIgKyB5T2Zmc2V0ICsgXCIpXCI7XG5cbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuaW5nIHRoZSBnZW5lcmF0ZWQgZWxlbWVudFxuICAgICAgcmV0dXJuIGRpdkVsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8vIERpc3BsYXlpbmcgdGhlIHRvYXN0XG4gICAgc2hvd1RvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIENyZWF0aW5nIHRoZSBET00gb2JqZWN0IGZvciB0aGUgdG9hc3RcbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gdGhpcy5idWlsZFRvYXN0KCk7XG5cbiAgICAgIC8vIEdldHRpbmcgdGhlIHJvb3QgZWxlbWVudCB0byB3aXRoIHRoZSB0b2FzdCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgdmFyIHJvb3RFbGVtZW50O1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMuc2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCAodHlwZW9mIFNoYWRvd1Jvb3QgIT09ICd1bmRlZmluZWQnICYmIHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpKSB7XG4gICAgICAgIHJvb3RFbGVtZW50ID0gdGhpcy5vcHRpb25zLnNlbGVjdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZGF0aW5nIGlmIHJvb3QgZWxlbWVudCBpcyBwcmVzZW50IGluIERPTVxuICAgICAgaWYgKCFyb290RWxlbWVudCkge1xuICAgICAgICB0aHJvdyBcIlJvb3QgZWxlbWVudCBpcyBub3QgZGVmaW5lZFwiO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgdGhlIERPTSBlbGVtZW50XG4gICAgICB2YXIgZWxlbWVudFRvSW5zZXJ0ID0gVG9hc3RpZnkuZGVmYXVsdHMub2xkZXN0Rmlyc3QgPyByb290RWxlbWVudC5maXJzdENoaWxkIDogcm9vdEVsZW1lbnQubGFzdENoaWxkO1xuICAgICAgcm9vdEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMudG9hc3RFbGVtZW50LCBlbGVtZW50VG9JbnNlcnQpO1xuXG4gICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgaW4gY2FzZSBtdWx0aXBsZSB0b2FzdHMgYXJlIHByZXNlbnRcbiAgICAgIFRvYXN0aWZ5LnJlcG9zaXRpb24oKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgdGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRvYXN0IGZyb20gRE9NXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICAgIH1cblxuICAgICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhpZGVUb2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICB9LFxuXG4gICAgLy8gUmVtb3ZpbmcgdGhlIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAgcmVtb3ZlRWxlbWVudDogZnVuY3Rpb24odG9hc3RFbGVtZW50KSB7XG4gICAgICAvLyBIaWRpbmcgdGhlIGVsZW1lbnRcbiAgICAgIC8vIHRvYXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib25cIik7XG4gICAgICB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lID0gdG9hc3RFbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFwiIG9uXCIsIFwiXCIpO1xuXG4gICAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIERPTSBhZnRlciB0cmFuc2l0aW9uIGVuZFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25zIG5vZGUgaWYgYW55XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ub2RlICYmIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vcHRpb25zLm5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBET00sIG9ubHkgd2hlbiB0aGUgcGFyZW50IG5vZGUgd2FzIG5vdCByZW1vdmVkIGJlZm9yZS5cbiAgICAgICAgICBpZiAodG9hc3RFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRvYXN0RWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbGluZyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2suY2FsbCh0b2FzdEVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gUmVwb3NpdGlvbmluZyB0aGUgdG9hc3RzIGFnYWluXG4gICAgICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgIDQwMFxuICAgICAgKTsgLy8gQmluZGluZyBgdGhpc2AgZm9yIGZ1bmN0aW9uIGludm9jYXRpb25cbiAgICB9LFxuICB9O1xuXG4gIC8vIFBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgb24gdGhlIERPTVxuICBUb2FzdGlmeS5yZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBUb3AgbWFyZ2lucyB3aXRoIGdyYXZpdHlcbiAgICB2YXIgdG9wTGVmdE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciB0b3BSaWdodE9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuICAgIHZhciBvZmZzZXRTaXplID0ge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIGJvdHRvbTogMTUsXG4gICAgfTtcblxuICAgIC8vIEdldCBhbGwgdG9hc3QgbWVzc2FnZXMgb24gdGhlIERPTVxuICAgIHZhciBhbGxUb2FzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9hc3RpZnlcIik7XG5cbiAgICB2YXIgY2xhc3NVc2VkO1xuXG4gICAgLy8gTW9kaWZ5aW5nIHRoZSBwb3NpdGlvbiBvZiBlYWNoIHRvYXN0IGVsZW1lbnRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gR2V0dGluZyB0aGUgYXBwbGllZCBncmF2aXR5XG4gICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktdG9wXCIpID09PSB0cnVlKSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktdG9wXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc1VzZWQgPSBcInRvYXN0aWZ5LWJvdHRvbVwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVpZ2h0ID0gYWxsVG9hc3RzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIGNsYXNzVXNlZCA9IGNsYXNzVXNlZC5zdWJzdHIoOSwgY2xhc3NVc2VkLmxlbmd0aC0xKVxuICAgICAgLy8gU3BhY2luZyBiZXR3ZWVuIHRvYXN0c1xuICAgICAgdmFyIG9mZnNldCA9IDE1O1xuXG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgLy8gU2hvdyB0b2FzdCBpbiBjZW50ZXIgaWYgc2NyZWVuIHdpdGggbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDM2MHB4XG4gICAgICBpZiAod2lkdGggPD0gMzYwKSB7XG4gICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgIG9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29udGFpbnNDbGFzcyhhbGxUb2FzdHNbaV0sIFwidG9hc3RpZnktbGVmdFwiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHBvc2l0aW9uXG4gICAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wTGVmdE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcFJpZ2h0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICsgXCJweFwiO1xuXG4gICAgICAgICAgdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKz0gaGVpZ2h0ICsgb2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydGluZyBmdW5jdGlvbiBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgb2Zmc2V0LlxuICBmdW5jdGlvbiBnZXRBeGlzT2Zmc2V0QVZhbHVlKGF4aXMsIG9wdGlvbnMpIHtcblxuICAgIGlmKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSB7XG4gICAgICBpZihpc05hTihvcHRpb25zLm9mZnNldFtheGlzXSkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLm9mZnNldFtheGlzXSArICdweCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcwcHgnO1xuXG4gIH1cblxuICBmdW5jdGlvbiBjb250YWluc0NsYXNzKGVsZW0sIHlvdXJDbGFzcykge1xuICAgIGlmICghZWxlbSB8fCB0eXBlb2YgeW91ckNsYXNzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGVsZW0uY2xhc3NOYW1lICYmXG4gICAgICBlbGVtLmNsYXNzTmFtZVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgvXFxzKy9naSlcbiAgICAgICAgLmluZGV4T2YoeW91ckNsYXNzKSA+IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHRpbmcgdXAgdGhlIHByb3RvdHlwZSBmb3IgdGhlIGluaXQgb2JqZWN0XG4gIFRvYXN0aWZ5LmxpYi5pbml0LnByb3RvdHlwZSA9IFRvYXN0aWZ5LmxpYjtcblxuICAvLyBSZXR1cm5pbmcgdGhlIFRvYXN0aWZ5IGZ1bmN0aW9uIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0L21vZHVsZVxuICByZXR1cm4gVG9hc3RpZnk7XG59KTtcbiIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckxpc3QgfSBmcm9tICcuL21vZHVsZXMvcG9rZW1vbic7XG5cbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyc7XG5jb25zdCBiYXNlVXJsSW52b2x2ZSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgbWVhbEFwcElkTmFtZSA9ICdwb2tlbW9uJztcbmxldCBhcHBJZCA9ICcnO1xuXG5jb25zdCBzYXZlRGF0YSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obWVhbEFwcElkTmFtZSwgYXBwSWQpO1xufTtcblxuY29uc3QgY3JlYXRlQXBwID0gKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsSW52b2x2ZX1gLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi90ZXh0JyxcbiAgICB9LFxuICAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSk7XG4gIGFwcElkID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICBzYXZlRGF0YSgpO1xufSk7XG5cbmNvbnN0IHJldHJpZXZlSWQgPSBhc3luYyAoKSA9PiB7XG4gIGFwcElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obWVhbEFwcElkTmFtZSk7XG4gIGlmIChhcHBJZCA9PT0gbnVsbCkgYXdhaXQgY3JlYXRlQXBwKCk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcmV0cmlldmVJZCgpO1xuICByZW5kZXJMaXN0KGJhc2VVcmwsIGJhc2VVcmxJbnZvbHZlLCBhcHBJZCk7XG59KTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UnKTtcbm1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn0pO1xuXG5kb2N1bWVudC5vbmtleWRvd24gPSAoZXZ0KSA9PiB7XG4gIGV2dCA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGxldCBpc0VzY2FwZSA9IGZhbHNlO1xuICBpZiAoJ2tleScgaW4gZXZ0KSB7XG4gICAgICBpc0VzY2FwZSA9IChldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5ID09PSAnRXNjJyk7XG4gIH0gZWxzZSB7XG4gICAgICBpc0VzY2FwZSA9IChldnQua2V5Q29kZSA9PT0gMjcpO1xuICB9XG4gIGlmIChpc0VzY2FwZSAmJiBtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUb2FzdGlmeSBmcm9tICd0b2FzdGlmeS1qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgJ3RvYXN0aWZ5LWpzL3NyYy90b2FzdGlmeS5jc3MnO1xuXG5leHBvcnQgY29uc3QgY291bnRDb21tZW50cyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNlbnRDb21tZW50cycpLmNoaWxkTm9kZXMubGVuZ3RoO1xuZXhwb3J0IGNvbnN0IGNvdW50SXRlbXMgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbi1saXN0JykuY2hpbGROb2Rlcy5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJMaXN0ID0gYXN5bmMgKHBva2Vtb25BUElCYXNlVXJsLCBiYXNlVXJsSW52b2x2ZSwgYXBwSWQpID0+IHtcbiAgY29uc3QgcG9rZW1vbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vbi1saXN0Jyk7XG4gIHBva2Vtb25MaXN0LmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBwb2tlbW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9rZW1vblBvcHVwJyk7XG4gIGNvbnN0IGl0ZW1zVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXNUb3RhbCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gIC8vIEZldGNoIHRoZSBsaXN0IG9mIFBva2Vtb25cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwb2tlbW9uQVBJQmFzZVVybCk7XG4gIGxldCBsaXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGlzdERhdGEgPSBsaXN0RGF0YS5yZXN1bHRzO1xuXG4gIC8vIFNvcnQgdGhlIGFycmF5IGVsZW1lbnRzXG4gIGNvbnN0IHNvcnRlZERhdGFMaXN0ID0gWy4uLmxpc3REYXRhXTtcbiAgc29ydGVkRGF0YUxpc3Quc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUpO1xuICBjb25zdCBvYmplY3RzID0gc29ydGVkRGF0YUxpc3Q7XG4gIC8vIExvb3AgdGhyb3VnaCAxOCBlbGVtZW50cyBvZiB0aGUgYXJyYXlcbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgLy8gRmV0Y2ggdGhlIHVwZGF0ZWQgY29tbWVudHMgYWZ0ZXIgcG9zdGluZ1xuICAgIGNvbnN0IGNvbW1lbnRzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2Jhc2VVcmxJbnZvbHZlfSR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSWR9X2lkYCxcbiAgICApO1xuICAgIGlmIChjb21tZW50c1Jlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBjb21tZW50c0RhdGEgPSBhd2FpdCBjb21tZW50c1Jlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vIEdldCB0aGUgcmVjZW50Q29tbWVudHMgZWxlbWVudFxuICAgICAgY29uc3QgcmVjZW50Q29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZW50Q29tbWVudHMnKTtcblxuICAgICAgaWYgKCFjb21tZW50c0RhdGEuZXJyb3IpIHtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignSW52YWxpZCBjb21tZW50cyBkYXRhIGZvcm1hdDonLCBjb21tZW50c0RhdGEpO1xuICAgICAgICByZWNlbnRDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29tbWVudHNEYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21tZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGNvbW1lbnRMaS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgICAgICByZWNlbnRDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50TGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRDb3VudCcpLnRleHRDb250ZW50ID0gY291bnRDb21tZW50cygpO1xuICAgICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Q291bnQnKS50ZXh0Q29udGVudCA9IGNvdW50Q29tbWVudHMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRmV0Y2ggdGhlIGxpa2VzXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2Jhc2VVcmxJbnZvbHZlfSR7YXBwSWR9L2xpa2VzYCxcbiAgICApO1xuXG4gICAgY29uc3QgZXIgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgaWYgKGVyICE9PSAnJykge1xuICAgICAgY29uc3QgbGlrZXMgPSBKU09OLnBhcnNlKGVyKTtcbiAgICAgIGlmIChsaWtlcy5lcnJvcikge1xuICAgICAgICBUb2FzdGlmeSh7XG4gICAgICAgICAgdGV4dDogbGlrZXMuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICBjbGFzc05hbWU6ICdpbmZvJyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYjA5YiwgIzk2YzkzZCknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnNob3dUb2FzdCgpO1xuICAgICAgfSBlbHNlIGlmIChsaWtlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGxpa2VzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgY29uc3Qgc2F2ZUxpa2UgPSBhc3luYyAoaXRlbUlkLCBlbExpa2VDb3VudCkgPT4ge1xuICAgIC8vIFByZXBhcmUgdGhlIGRhdGEgdG8gYmUgc2VudFxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgfTtcblxuICAgIC8vIE1ha2UgdGhlIFBPU1QgcmVxdWVzdCB0byB0aGUgQVBJXG4gICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtiYXNlVXJsSW52b2x2ZX0ke2FwcElkfS9saWtlc2AsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9LFxuICAgICk7XG4gICAgaWYgKHBvc3RSZXNwb25zZS5vaykge1xuICAgICAgZWxMaWtlQ291bnQuY291bnRlciA9IE51bWJlcihlbExpa2VDb3VudC5jb3VudGVyKSArIDE7XG4gICAgICBlbExpa2VDb3VudC50ZXh0Q29udGVudCA9IGAgKCR7TnVtYmVyKGVsTGlrZUNvdW50LmNvdW50ZXIpfSlgO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG5cbiAgcG9rZW1vbkxpc3QuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBpID0gMTtcbiAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAvLyBGZXRjaCB0aGUgUG9rZW1vbiBpbWFnZVxuICAgIGNvbnN0IGltYWdlU3JjID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi9vdGhlci9kcmVhbS13b3JsZC8ke2l9LnN2Z2A7XG5cbiAgICBjb25zdCBzaG93UG9rZW1vbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHBva2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKG9iamVjdC51cmwpO1xuICAgICAgY29uc3QgcG9rZU9iamVjdCA9IGF3YWl0IHBva2VSZXNwb25zZS5qc29uKCk7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgICBjb25zdCBpdGVtSWQgPSBwb2tlT2JqZWN0LmlkO1xuICAgICAgcG9rZW1vblBvcHVwLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb25JbWcgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxpbWcgaWQ9XCJpdGVtSW1hZ2VcIiBzcmM9XCIke2ltYWdlU3JjfVwiIGFsdD1cIiR7b2JqZWN0Lm5hbWV9XCIgLz5cbiAgICAgICAgICAgICAgPGgzPiR7b2JqZWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzIGNvbW1lbnQtbGlzdC1zZWN0aW9uIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxoMz5SZWNlbnQgQ29tbWVudHMgKDxzcGFuIGlkPSdjb21tZW50Q291bnQnPjA8L3NwYW4+KTwvaDM+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJlY2VudENvbW1lbnRzIGNvbW1lbnQtbGlzdFwiPjwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwiQWRkQ29tbWVudCBjb21tZW50LWZvcm0gY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPkFkZCBhIENvbW1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkIG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI3XCIgaWQ9XCJjb21tZW50VGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICBhd2FpdCBnZXRDb21tZW50cyhpdGVtSWQpO1xuICAgICAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQWRkQ29tbWVudCcpO1xuICAgICAgY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50VGV4dCcpO1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRJbnB1dC52YWx1ZTtcbiAgICAgICAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgaXRlbV9pZCAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGRhdGEgdG8gYmUgc2VudFxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGl0ZW1faWQ6IGAke2l0ZW1JZH1faWRgLFxuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgIH07XG4gICAgICAgICAgLy8gTWFrZSB0aGUgUE9TVCByZXF1ZXN0IHRvIHRoZSBBUElcbiAgICAgICAgY29uc3QgcG9zdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYCR7YmFzZVVybEludm9sdmV9JHthcHBJZH0vY29tbWVudHNgLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwb3N0UmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAgICAgICAgICBnZXRDb21tZW50cyhpdGVtSWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZHNcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbG9zZScpO1xuICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBva2Vtb25Qb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGRpdkRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGVsTGlrZVBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZWxMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGNvbnN0IGVsTGlrZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGVsQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbGkuY2xhc3NOYW1lID0gJ3Bva2Vtb24tZGV0YWlsJztcbiAgICBkaXZEZXRhaWxzLmNsYXNzTmFtZSA9ICdkLWdyaWQnO1xuICAgIGVsTGlrZS5jbGFzc05hbWUgPSAnZmEgZmEtaGVhcnQnO1xuXG4gICAgZWxOYW1lLnRleHRDb250ZW50ID0gb2JqZWN0Lm5hbWU7XG4gICAgZWxDb21tZW50LnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcbiAgICBlbEljb24uc3JjID0gaW1hZ2VTcmM7XG4gICAgZWxMaWtlLmFkZEV2ZW50TGlzdGVuZXIoKCdjbGljaycpLCAoKCkgPT4geyBzYXZlTGlrZShvYmplY3QubmFtZSwgZWxMaWtlQ291bnQpOyB9KSk7XG5cbiAgICBlbExpa2VQYXJlbnQuYXBwZW5kQ2hpbGQoZWxMaWtlKTtcbiAgICBjb25zdCBsaWtlID0gbGlrZXMuZmluZCgoeCkgPT4geC5pdGVtX2lkID09PSBvYmplY3QubmFtZSk7XG4gICAgZWxMaWtlQ291bnQuaWQgPSBgbGlrZXMgJHtpfWA7XG4gICAgZWxMaWtlQ291bnQudGV4dENvbnRlbnQgPSBgICgke2xpa2UgPyBsaWtlLmxpa2VzIDogMH0pYDtcbiAgICBlbExpa2VDb3VudC5jb3VudGVyID0gbGlrZSA/IGxpa2UubGlrZXMgOiAwO1xuICAgIGVsTGlrZVBhcmVudC5hcHBlbmRDaGlsZChlbExpa2VDb3VudCk7XG4gICAgZWxDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLCAoKSA9PiBzaG93UG9rZW1vbigpLFxuICAgICk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZWxJY29uKTtcbiAgICBkaXZEZXRhaWxzLmFwcGVuZENoaWxkKGVsTmFtZSk7XG4gICAgZGl2RGV0YWlscy5hcHBlbmRDaGlsZChlbExpa2VQYXJlbnQpO1xuICAgIGRpdkJ1dHRvbi5hcHBlbmRDaGlsZChlbENvbW1lbnQpO1xuICAgIGRpdkRldGFpbHMuYXBwZW5kQ2hpbGQoZGl2QnV0dG9uKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkaXZEZXRhaWxzKTtcbiAgICBwb2tlbW9uTGlzdC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICBpICs9IDE7XG4gIH0pO1xuXG4gIGl0ZW1zVG90YWwuaW5uZXJUZXh0ID0gY291bnRJdGVtcygpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==