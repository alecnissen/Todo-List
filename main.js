/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#navbar-project-names-go-here {\n  font-size: 3rem;\n  text-decoration: underline;\n  list-style-type: circle;\n  list-style-position: inside;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAiCA;EACE,eAAA;EACA,0BAAA;EACA,uBAAA;EACA,2BAAA;AAhCF","sourcesContent":["// $header-color: rgb(107, 212, 107);\n\n\n// .header-container {\n//     background-color: $header-color;\n//     grid-area: header;\n//     padding: 10px;\n//     border: 5px solid black;\n//   } \n\n  // * { \n  //   background-color: black;\n  //   font-size: 5rem;\n  // } \n\n  // sass playground 5/9/23 \n\n//    $body-color: red;\n\n//    $random-color: yellow; \n\n \n// .header-title-text-to-do-list { \n//   color: $body-color;\n// }\n\n\n// #navbar-your-projects-title-text { \n//   color: $random-color;\n//   font-size: 46px;\n  \n// } \n\n#navbar-project-names-go-here { \n  font-size: 3rem; \n  text-decoration: underline;\n  list-style-type: circle;\n  list-style-position: inside;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* import \"/style.scss\"; */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}\n\n.modal-header-text {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.Add-Project-btn {\n  /* width: 40px;  */\n  font-size: 1.5rem;\n}\n\n.input-field-modal {\n  font-size: 1.5rem;\n}\n\n.close-btn {\n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem;\n  width: 25px;\n  left: -210px;\n  bottom: 160px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n  font-family: \"Patua One\", cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas: \"header header\" \"nav main\" \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text,\n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\nheader {\n  grid-area: header;\n}\n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}\n\n.header-title-text-to-do-list {\n  font-size: 5rem;\n  text-align: center;\n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn {\n  font-size: 1.5rem;\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: \"Patua One\", cursive;\n}\n\n#add-project-btn:hover {\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: \"Patua One\", cursive;\n}\n\n.project-input-field-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.input-field-text {\n  font-size: 1.5rem;\n  width: 240px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 1em;\n}\n\n.add-btn,\n.cancel-btn {\n  font-size: 1.2rem;\n  background-color: red;\n  color: white;\n  font-family: \"Patua One\", cursive;\n}\n\n.add-btn {\n  background-color: green;\n}\n\n.todo-pop-up-container {\n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 50%;\n  padding: 25px;\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}\n\n.submit-task-btn-pop-up-field {\n  display: flex;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px;\n  width: auto;\n}\n\n.pop-up-content {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n.create-to-do-form-btn {\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input {\n  position: absolute;\n  top: -5px;\n  left: -8px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n#project-todos-container {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5em;\n  flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles {\n  display: flex;\n  justify-content: center;\n  margin: 15px;\n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n.project-section-name-btn-div {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.main-content-section-project-name-div {\n  font-size: 5rem;\n  color: white;\n  text-align: center;\n}\n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n#navbar-project-names-go-here {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles {\n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n}\n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */\n.delete-btn-trash-can-svg-icon-styles,\n.add-btn-svg-project-name-styles {\n  height: 1em;\n  width: 1em;\n}\n\n.add-delete-btn-for-todo-container-styles {\n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n.edit-element-todo-item-styles {\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  margin-left: 0.2em;\n}\n\n.check-box-element-todo-styles {\n  width: 30px;\n  height: 30px;\n}\n\n.delete-icon-todo-item-styles {\n  width: 30px;\n  background-color: white;\n}\n\n.task-holder-for-todo-styles {\n  background-color: darkblue;\n  color: white;\n  line-height: 0.5em;\n  text-align: center;\n  width: 275px;\n  border: 5px solid black;\n}\n\n/* styles for add todo pop-up modal */\n.modal-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-todo {\n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n.close-the-todo-modal {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-todo label {\n  text-align: center;\n}\n\n.modal-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* begin edit todo modal styles here */\n.modal-edit-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-edit-todo .flex-for-edit-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-edit-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-edit-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal-edit {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-edit-todo {\n  z-index: 2;\n}\n\n.close-the-todo-modal-edit {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-edit-todo label {\n  text-align: center;\n}\n\n.modal-edit-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* styles for delete btn for todo modal */\n.modal-for-delete-btn-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white;\n}\n\n.flex-for-delete-btn-modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n}\n\n.overlay-for-todo-delete-btn {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-for-delete-btn-todo {\n  z-index: 2;\n}\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */\n/* shrink the size of the main content todo items when page resizes so no content can overflow */\n/* left off here, fix the modals for ipad */\n@media (max-width: 1800px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media (max-width: 430px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 2.2rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 255px;\n  }\n  .modal > input {\n    width: 230px;\n    font-size: 1rem;\n  }\n  .modal > button {\n    font-size: 1rem;\n  }\n  .close-btn {\n    position: relative;\n    left: -7em;\n  }\n  nav {\n    height: 500px;\n  }\n  .modal-todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  .modal-todo h1 {\n    font-size: 1.4rem;\n  }\n  .modal-todo label {\n    font-size: 1rem;\n  }\n  .modal-todo input {\n    width: auto;\n    /* height: 150px  */\n  }\n  .close-the-todo-modal {\n    position: relative;\n    left: -155px;\n    top: 2px;\n  }\n  /* left off here 5/8/23 */\n  .modal-for-delete-btn-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .modal-for-delete-btn-todo h1 {\n    font-size: 1rem;\n  }\n  .modal-edit-todo {\n    width: 250px;\n    position: absolute;\n    left: 20%;\n    top: 80%;\n  }\n  .close-the-todo-modal-edit {\n    /* width: 250px;  */\n    position: absolute;\n    left: 5%;\n    bottom: 90%;\n  }\n}\n@media (max-width: 400px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 2.2rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 255px;\n  }\n  .modal > input {\n    width: 230px;\n    font-size: 1rem;\n  }\n  .modal > button {\n    font-size: 1rem;\n  }\n  .close-btn {\n    position: relative;\n    left: -7em;\n  }\n  nav {\n    height: 500px;\n  }\n  .modal-todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  .modal-todo h1 {\n    font-size: 1.4rem;\n  }\n  .modal-todo label {\n    font-size: 1rem;\n  }\n  .modal-todo input {\n    width: auto;\n    /* height: 150px  */\n  }\n  .close-the-todo-modal {\n    position: relative;\n    left: -155px;\n    top: 2px;\n  }\n  /* left off here 5/8/23 */\n  .modal-for-delete-btn-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .modal-for-delete-btn-todo h1 {\n    font-size: 1rem;\n  }\n  .modal-edit-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .close-the-todo-modal-edit {\n    /* width: 250px;  */\n    position: absolute;\n    left: 5%;\n    bottom: 90%;\n  }\n}\n@media (max-width: 740px) {\n  body {\n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n    flex-direction: column;\n  }\n  main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media (max-width: 1120px) {\n  #project-todos-container {\n    display: flex;\n    font-size: 0.8rem;\n  }\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n}\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n\n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n/* font-family: 'Patua One', cursive; */\n/* grid-template-columns: 0.2fr 1fr; */\n/* grid-template-areas:\n  \"header header\"\n  \"nav main\"\n  \"nav main\"; */\n/* } */\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n/* header {\n  grid-area: header;\n}  */\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n/* position: absolute;\ntop: 80%; \nleft: 60%; \ntransform: translate(-50%, -50%);\ntext-align: center;\nbackground-color: white;\nfont-size: 1.5rem;\ndisplay: flex;\nflex-direction: column;\nheight: 50%; \nwidth: 50%; */\n/* padding: 25px;  */\n/* font-size: 3rem;\nbackground-color: white;\ncolor: black; */\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n/* .title-input-field-styles { \n  width: 100%;\n} */\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n/* .pop-up-content { \n  position: relative;\n} */\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* import \"/style.scss\"; */ \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap');\n\n\n\n.modal { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}  \n\n.modal-header-text { \n  text-align: center;\n  font-size: 2rem;\n} \n\n.Add-Project-btn { \n  /* width: 40px;  */\n  font-size: 1.5rem; \n  \n} \n\n.input-field-modal { \n  font-size: 1.5rem;\n}\n\n\n\n.close-btn { \n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem; \n  width: 25px; \n  left: -210px; \n  bottom: 160px;  \n}\n\n.overlay { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\n\n\n\n\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    font-family: 'Patua One', cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text, \n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n} \n\nheader {\n  grid-area: header;\n} \n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n} \n\n.header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: 'Patua One', cursive;\n}  \n\n#add-project-btn:hover { \n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n} \n\n.project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n} \n\n.input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n} \n\n.btn-container { \n  display: flex;\n  gap: 1em; \n} \n\n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n} \n\n.add-btn { \n  background-color: green;\n} \n\n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%;\n  padding: 25px; \n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}   \n\n.submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n} \n\n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}  \n\n/* .title-input-field-styles { \n  width: 100%;\n} */ \n\n.create-to-do-form-btn { \n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n} \n\n#project-todos-container { \n display: flex;\n flex-direction: row;\n gap: 0.5em;\n flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n.project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}  \n\n.main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n} \n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n\n\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n\n\n#navbar-project-names-go-here { \n  font-size: 2rem; \n  color: white; \n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles { \n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n} \n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */ \n\n.delete-btn-trash-can-svg-icon-styles, \n.add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n}\n\n.add-delete-btn-for-todo-container-styles { \n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em; \n} \n\n.edit-element-todo-item-styles { \n  height: 30px; \n  width: 30px; \n  background-color: white;\n  margin-left: 0.20em;\n}\n\n.check-box-element-todo-styles { \n  width: 30px; \n  height: 30px; \n} \n\n.delete-icon-todo-item-styles { \n  width: 30px;\n  background-color: white;\n} \n\n.task-holder-for-todo-styles { \n  background-color: darkblue;\n  color: white; \n  line-height: 0.5em;\n  text-align: center;\n  width: 275px; \n  border: 5px solid black; \n}\n\n/* styles for add todo pop-up modal */ \n\n.modal-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-todo > label { \n  color: white;\n} \n\n\n.overlay-for-todo-modal { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-todo { \n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n\n.close-the-todo-modal { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n\n}\n\n\n\n.modal-todo label { \n  text-align: center;\n}\n\n.modal-todo h1 { \n  font-size: 2.5rem; \n} \n\n\n/* begin edit todo modal styles here */ \n\n\n\n.modal-edit-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n} \n\n\n.modal-edit-todo .flex-for-edit-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n} \n\n.modal-edit-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-edit-todo > label { \n  color: white;\n} \n\n.overlay-for-todo-modal-edit { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n\n.modal-edit-todo { \n  z-index: 2;\n} \n\n.close-the-todo-modal-edit { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n} \n\n.modal-edit-todo label { \n  text-align: center;\n} \n\n.modal-edit-todo h1 { \n  font-size: 2.5rem;\n}\n\n\n\n\n\n/* styles for delete btn for todo modal */ \n\n.modal-for-delete-btn-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white; \n} \n\n.flex-for-delete-btn-modal { \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em; \n} \n\n\n.overlay-for-todo-delete-btn { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-for-delete-btn-todo { \n  z-index: 2;\n}\n\n\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */ \n\n\n/* shrink the size of the main content todo items when page resizes so no content can overflow */ \n\n/* left off here, fix the modals for ipad */ \n\n\n@media (max-width: 1800px) { \n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  }\n}\n\n\n\n@media (max-width: 430px) { \n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 2.2rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 255px; \n  } \n\n  .modal > input { \n    width: 230px; \n    font-size: 1rem;\n  } \n\n  .modal > button { \n    font-size: 1rem;\n  } \n\n  .close-btn { \n    position: relative;\n    left: -7em;\n  } \n\n  nav { \n    height: 500px; \n  } \n\n  .modal-todo { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%; \n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n\n  .modal-todo h1 { \n    font-size: 1.4rem;\n  } \n\n  .modal-todo label { \n    font-size: 1rem;\n  }\n\n  .modal-todo input { \n    width: auto; \n    /* height: 150px  */\n  } \n\n  .close-the-todo-modal { \n    position: relative;\n    left: -155px;\n    top: 2px;\n  } \n\n  /* left off here 5/8/23 */ \n\n  .modal-for-delete-btn-todo { \n    width: 250px;\n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .modal-for-delete-btn-todo h1 { \n    font-size: 1rem;\n  } \n\n  .modal-edit-todo { \n    width: 250px; \n    position: absolute;\n    left: 20%; \n    top: 80%;\n  } \n\n  .close-the-todo-modal-edit { \n    /* width: 250px;  */\n    position: absolute;\n    left: 5%; \n    bottom: 90%;\n  }\n}\n\n\n\n\n@media (max-width: 400px) { \n\n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 2.2rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 255px; \n  } \n\n  .modal > input { \n    width: 230px; \n    font-size: 1rem;\n  } \n\n  .modal > button { \n    font-size: 1rem;\n  } \n\n  .close-btn { \n    position: relative;\n    left: -7em;\n  } \n\n  nav { \n    height: 500px; \n  } \n\n  .modal-todo { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%; \n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n\n  .modal-todo h1 { \n    font-size: 1.4rem;\n  } \n\n  .modal-todo label { \n    font-size: 1rem;\n  }\n\n  .modal-todo input { \n    width: auto; \n    /* height: 150px  */\n  } \n\n  .close-the-todo-modal { \n    position: relative;\n    left: -155px;\n    top: 2px;\n  } \n\n  /* left off here 5/8/23 */ \n\n  .modal-for-delete-btn-todo { \n    width: 250px;\n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .modal-for-delete-btn-todo h1 { \n    font-size: 1rem;\n  } \n\n  .modal-edit-todo { \n    width: 250px; \n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .close-the-todo-modal-edit { \n    /* width: 250px;  */\n    position: absolute;\n    left: 5%; \n    bottom: 90%;\n  }\n} \n\n\n@media (max-width: 740px) { \n  body { \n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n    flex-direction: column;\n  } \n\n  main { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n  }\n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  }\n} \n\n\n@media (max-width: 1120px) { \n   #project-todos-container { \n    display: flex;\n    font-size: 0.8rem;\n  } \n\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n\n}\n\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n \n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n\n\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    /* font-family: 'Patua One', cursive; */\n  /* grid-template-columns: 0.2fr 1fr; */ \n  /* grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\"; */\n/* } */\n\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n\n/* header {\n  grid-area: header;\n}  */\n\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  /* position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%; */\n  /* padding: 25px;  */\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n  \n\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/conditionalLogic.js":
/*!*********************************!*\
  !*** ./src/conditionalLogic.js ***!
  \*********************************/
/***/ (() => {

// import { projectArray, printProjectNameToNavbarProjectSection, printValuesToDOM } from "./domLogic"; 

// function projectDisplayConditionalLogic() { 

//     console.log("HEYYY");

//     // let theProjectArray = arr;

//     // for (let i = 0; i < theProjectArray.length; i++) { 
//     //     let projectArrayIndex = theProjectArray[i]; 

//     //     console.log(projectArrayIndex);
    
//     // }
// } 

// projectDisplayConditionalLogic(); 



// I am getting a little confused on how to add conditional logic, that will prevent a user from adding mutliple projects when the user presses the project name, 

// Once project is clicked, display that project, if another project is clicked, clear the old and make way for the new, 

// I've been trying to call the function before the values are appended, to check if It's safe to append the value or clear and make way for a new one, 

// how can I prevent user from clicking multiple projects, and adding them all, 

// you cant disable the btn, 

// you cannot mix the DOM logic and conditional logic, 

// thinking conceptually, right now the user can press the project name and append multiple projects, 

// how can I just display the project that was clicked on? 

// clear the contents of one and make new. 

/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printValuesToDOM": () => (/* binding */ printValuesToDOM),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalLogic.js */ "./src/conditionalLogic.js");
/* harmony import */ var _conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plus_sign_for_todo_modal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus-sign-for-todo-modal.svg */ "./src/plus-sign-for-todo-modal.svg");
/* harmony import */ var _trash_can_icon_to_delete_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trash-can-icon-to-delete-project.svg */ "./src/trash-can-icon-to-delete-project.svg");
/* harmony import */ var _edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-svgrepo-com.svg */ "./src/edit-svgrepo-com.svg");



 

 





 

 



// import crossMarkForDeleteProject from "./cross-mark-svgrepo-com.svg"; 

// import checkMarkForDeleteProject from "./check-mark-svgrepo-com.svg"; 



// import updateArrayStorage from "./storage";


const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

let modalInputField = document.getElementById("input-field-within-modal"); 

let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

let formTagForModule = document.getElementById("form-tag-for-modal"); 

let modalContainerForTodo = document.getElementsByClassName("modal-todo")[0]; 

let overlayForTodoModal = document.getElementsByClassName("overlay-for-todo-modal")[0]; 

let modalForTodoDeleteBtn = document.getElementsByClassName("modal-for-delete-btn-todo")[0];

let overlayForTodoDeleteBtn = document.getElementsByClassName("overlay-for-todo-delete-btn")[0]; 

let modalForEditTodoTasks = document.getElementsByClassName("modal-edit-todo")[0]; 

let overlayForEditTodoTasks = document.getElementsByClassName("overlay-for-todo-modal-edit")[0]; 

let editTodoTasksFormInput = document.getElementById("input-form-for-editing-todo-tasks");

let currentProject 

function preventDoYouWantToDeleteModal() { 
  
  modalForTodoDeleteBtn.style.display = "none"; 

  overlayForTodoDeleteBtn.style.display = "none";
} 

preventDoYouWantToDeleteModal();


function preventTodoModalPopUp() { 

modalContainerForTodo.style.display = "none"; 

overlayForTodoModal.style.display = "none";
} 



preventTodoModalPopUp(); 


function preventEditTodoModalPopUp() { 
  
  modalForEditTodoTasks.style.display = "none"; 

  overlayForEditTodoTasks.style.display = "none";

}

preventEditTodoModalPopUp(); 


let projectArray = []; 

function preventFormPopUp() { 
  modal.style.display = "none"; 
  
  overlay.style.display = "none";

}

preventFormPopUp();


 closeModalBtn.addEventListener("click", (e) => { 
  // e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
  // modalInputField.reset();
  // when you close it, should clear the input field,
  formTagForModule.reset();
}) 

 addProjectButton.addEventListener("click", () => { 
  modal.style.display = "flex"; 
  overlay.style.display = "flex";
})  





function projectNameFactory(name) { 
  return { 
    project: name,
    id: crypto.randomUUID(),
    todoItems: [],
  }
} 

addProjectBtnWithinModal.addEventListener("click", (e) => { 
  // e.preventDefault();
  let modalInputFieldValue = modalInputField.value; 

  let projectNameObject = projectNameFactory(modalInputFieldValue); 
  
  projectArray.push(projectNameObject); 

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  printValuesToDOM(projectArray); 
  
  formTagForModule.reset(); 

}) 


function printValuesToDOM(array) { 

  let theProjectsArray = array; 

  let navbarProjectNameContainer = document.getElementById("navbar-project-names-go-here"); 

  navbarProjectNameContainer.replaceChildren();
  
  for (let i = 0; i < theProjectsArray.length; i++) { 

    let projectIndex = theProjectsArray[i]; 
    // project name
    let projectIndexProjectNameValue = projectIndex.project; 

    let projectNameContainer = document.createElement("div"); 

    projectNameContainer.append(projectIndexProjectNameValue);

    navbarProjectNameContainer.append(projectNameContainer); 

    let mainContentContainer = document.getElementsByClassName("main-content-section-container")[0]; 
    
    projectNameContainer.addEventListener("click", (e) => { 

      currentProject = projectIndex; 
      
      let mainContentContainerProjectNames = document.getElementsByClassName("main-content-section-container")[0]; 

      mainContentContainerProjectNames.replaceChildren(); 

      let projectNameValueContainerForStyles = document.createElement("div"); 

      projectNameValueContainerForStyles.classList.add("project-name-click-event-container-for-styles"); 

      let btnContainerAddandDelete = document.createElement("div");

      let addBtnToCreateModal = document.createElement("img"); 

      addBtnToCreateModal.addEventListener("click", (e) => { 

        modalContainerForTodo.style.display = "flex"; 

        overlayForTodoModal.style.display = "flex";
      })

      let deleteBtnToDeleteTodo = document.createElement("img"); 

      deleteBtnToDeleteTodo.addEventListener("click", (e) => { 

        modalForTodoDeleteBtn.style.display = "flex"; 

        overlayForTodoDeleteBtn.style.display = "flex";

      })



      addBtnToCreateModal.src = _plus_sign_for_todo_modal_svg__WEBPACK_IMPORTED_MODULE_3__; 

      addBtnToCreateModal.classList.add("add-btn-svg-project-name-styles");

      deleteBtnToDeleteTodo.src = _trash_can_icon_to_delete_project_svg__WEBPACK_IMPORTED_MODULE_4__;

      deleteBtnToDeleteTodo.classList.add("delete-btn-trash-can-svg-icon-styles");

      btnContainerAddandDelete.classList.add("add-delete-btn-for-todo-container-styles"); 

      btnContainerAddandDelete.append(addBtnToCreateModal); 

      btnContainerAddandDelete.append(deleteBtnToDeleteTodo); 

      let projectNameValueClicked = e.target.textContent; 

      projectNameValueContainerForStyles.append(projectNameValueClicked);
      
      mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

      mainContentContainerProjectNames.append(btnContainerAddandDelete); 
     
      displayCurrentProjectTodo(); 
    })
  }
} 

 

formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
})  

editTodoTasksFormInput.addEventListener("submit", (e) => { 
  e.preventDefault(); 

  modalForEditTodoTasks.style.display = "none"; 

  overlayForEditTodoTasks.style.display = "none";
})


let closeBtnEditTodoModal = document.getElementById("close-edit-todo-modal-btn"); 

closeBtnEditTodoModal.addEventListener("click", (e) => { 

  modalForEditTodoTasks.style.display = "none"; 

  overlayForEditTodoTasks.style.display = "none";

})


let cancelBtnAddTodoModal = document.getElementsByClassName("close-the-todo-modal")[0];

cancelBtnAddTodoModal.addEventListener("click", (e) => { 

  modalContainerForTodo.style.display = "none"; 

  overlayForTodoModal.style.display = "none";

}) 


let cancelBtnForDeleteProjectModalX = document.getElementById("close-mark-x"); 

cancelBtnForDeleteProjectModalX.addEventListener("click", (e) => { 

  modalForTodoDeleteBtn.style.display = "none"; 

  overlayForTodoDeleteBtn.style.display = "none";
  
}) 


let checkMarkWithinDeleteTodoModal = document.getElementById("check-mark"); 

checkMarkWithinDeleteTodoModal.addEventListener("click", (e) => {  

  let mainContentProjectNamesStyleContainer = document.getElementsByClassName("project-name-click-event-container-for-styles")[0]; 

  let addAndDeleteBtnTodoModal = document.getElementsByClassName("add-delete-btn-for-todo-container-styles")[0]; 
  
  let projectsWithinTodoContainer = document.getElementById("project-todos-container"); 

  let taskHolderStyles = document.getElementsByClassName("task-holder-for-todo-styles")[0];

  let projectID = currentProject.id; 
  
  let value = currentProject; 
  
  projectArray = projectArray.filter(project => project.id !== currentProject.id);
  
  mainContentProjectNamesStyleContainer.replaceChildren(); 

  addAndDeleteBtnTodoModal.replaceChildren();

  printValuesToDOM(projectArray); 

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  // currentProject.todoItems.replaceChildren(); 

  // it is deleting from storage, it is just not 

  // deleting the todo from the DOM, 
  // projectsWithinTodoContainer.remove() 

  projectsWithinTodoContainer.style.display = "none";
  
  modalForTodoDeleteBtn.style.display = "none"; 
  
  overlayForTodoDeleteBtn.style.display = "none";  
  

})  





let formInput = document.getElementById("input-form-for-creating-todo-task");

formInput.addEventListener("submit", (e) => { 
  e.preventDefault();
})

let addBtnToDoModal = document.getElementById("add-task-todo-modal"); 


addBtnToDoModal.addEventListener("click", (e) =>  { 
  
  e.preventDefault(); 



  let titleInputForTodo = document.getElementById("title-of-todo-input-form"); 

  let titleInputValue = titleInputForTodo.value; 

  // currentProject.todoItems.push(titleInputValue); 

  let descriptionForTodo = document.getElementById("description-for-todo"); 

  let descriptionForTodoValue = descriptionForTodo.value; 
  
  // currentProject.todoItems.push(descriptionForTodoValue); 

  let dueDateForTodo = document.getElementById("due-date-for-todo-task"); 

  let dueDateForTodoValue = dueDateForTodo.value; 

  // currentProject.todoItems.push(dueDateForTodoValue);

  let priorityForTodo = document.getElementById("priority-for-todo-task"); 

  let priorityForTodoValue = priorityForTodo.value;  

  // currentProject.todoItems.push(priorityForTodoValue);

  // let currentProjectsTodos = currentProject.todoItems; 

  // let mainSectionContainer = document.getElementsByClassName("main-content-section-container")[0]; 

  
  let todosForProject = todoObjectFactory(titleInputValue, descriptionForTodoValue, priorityForTodoValue, dueDateForTodoValue);
  
  currentProject.todoItems.push(todosForProject); 
  
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray);
// console.log(currentProject.todoItems);

displayCurrentProjectTodo(); 

formInput.reset();

modalContainerForTodo.style.display = "none"; 

overlayForTodoModal.style.display = "none"; 

})   

function todoObjectFactory(title, description, priority, dueDate) { 
  
  return { 
    title: title, 
    description: description, 
    priority: priority, 
    dueDate: dueDate 
  } 
  
}    


// create a function within the todo factory 
// that takes the index, 

let getProjectId 

let clickedTodoEditItem

function displayCurrentProjectTodo() { 

  let projectTodoContainerDisplay = document.getElementById("project-todos-container"); 

  projectTodoContainerDisplay.replaceChildren(); 
  
  for (let i = 0; i < currentProject.todoItems.length; i++) { 
     
    let taskHolder = document.createElement("div"); 
    
    taskHolder.classList.add("task-holder-for-todo-styles");
  
    
    
    let selectedProject = currentProject.todoItems[i]; 

    getProjectId = currentProject.id

    let projectUniqueId = currentProject.id; 

    let checkboxElement = document.createElement("input"); 

    checkboxElement.classList.add("check-box-element-todo-styles");

    let editElement = document.createElement("img"); 

    editElement.classList.add("edit-element-todo-item-styles");

    editElement.dataset.index = i; 

    editElement.addEventListener("click", (e) => { 

      clickedTodoEditItem = currentProject.todoItems[editElement.dataset.index]; 

      modalForEditTodoTasks.style.display = "flex"; 

      overlayForEditTodoTasks.style.display = "flex"; 
     
     let addBtnWithinTodoModal = document.getElementById("add-task-todo-modal-edit"); 
      
     addBtnWithinTodoModal.addEventListener("click", (e) => { 

        let titleInputValueEditTodo = document.getElementById("title-of-todo-edit-input-form").value; 

        let descriptionInputValueEditTodo = document.getElementById("description-for-todo-edit").value; 

        let dueDateInputValueEditTodo = document.getElementById("due-date-for-todo-task-edit").value; 

        let priorityInputValueEditTodo = document.getElementById("priority-for-todo-task-edit").value; 

        let editTodoObject = todoObjectFactory(titleInputValueEditTodo, descriptionInputValueEditTodo, dueDateInputValueEditTodo, priorityInputValueEditTodo); 
        
        console.log(clickedTodoEditItem);
        
        clickedTodoEditItem.title = titleInputValueEditTodo; 
        
        clickedTodoEditItem.description = descriptionInputValueEditTodo; 
        
        clickedTodoEditItem.dueDate = dueDateInputValueEditTodo; 

        clickedTodoEditItem.priority = priorityInputValueEditTodo; 

        (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

        displayCurrentProjectTodo();

      })
      
    
    }) 

    editElement.src = _edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__; 

    checkboxElement.type = "checkbox"; 

    let deleteIcon = document.createElement("img"); 

    deleteIcon.classList.add("delete-icon-todo-item-styles");

    deleteIcon.id = "delete-btn-inside-todo"; 

  deleteIcon.dataset.index = i; 

    deleteIcon.addEventListener("click", (e) => { 

      currentProject.todoItems.splice(deleteIcon.dataset.index, 1);
      
      displayCurrentProjectTodo(); 

      (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

    }) 

    deleteIcon.src = _trash_can_icon_to_delete_project_svg__WEBPACK_IMPORTED_MODULE_4__; 

    let todoTitle = document.createElement("p"); 

    todoTitle.textContent = "Title: "; 

    todoTitle.append(selectedProject.title);

    let todoDescription = document.createElement("p"); 

    todoDescription.textContent = "Description: "

    todoDescription.append(selectedProject.description);

    let todoPriority = document.createElement("p"); 

    let todoDueDate = document.createElement("p"); 

    todoDueDate.textContent = "Due Date: "

    todoPriority.textContent = "Priority: ";
    
    todoPriority.append(selectedProject.priority);
    
    todoDueDate.append(selectedProject.dueDate);

    taskHolder.append(todoTitle);  

    taskHolder.append(todoDescription);

    taskHolder.append(todoPriority); 

    taskHolder.append(todoDueDate); 

    taskHolder.append(checkboxElement); 

    taskHolder.append(deleteIcon); 

    taskHolder.append(editElement);

    projectTodoContainerDisplay.append(taskHolder);
    
  }  

   // let currentProjectId = currentProject.id; 

  // let deleteBtnWithinTodoItem = document.getElementById("delete-btn-inside-todo"); 

  // // console.log(deleteBtnWithinTodoItem); 

  // let taskHolderClass = document.getElementsByClassName("task-holder-for-todo-styles")[0]; 

  // // console.log(taskHolderClass);

  // deleteBtnWithinTodoItem.addEventListener("click", () => { 
  //      // console.log("the delete button within todo has been pressed!");
  //      let currentProjectId = currentProject.id; 

  //     //  console.log(currentProjectId); 

  //     //  for (let i = 0; i < currentProject.id.length; i++) { 
  //     //   let id = currentProject.id; 

  //     //   if (currentProjectId === id) { 
  //     //     // if id's match remove the selected project, 
  //     //   } else { 
  //     //     return;
  //     //   }

  //     //  } 

  //     projectArray = projectArray.filter(function(oneProjectId) { 
        

        
  //     })
  //   })
  
 } 





























































































































































































// import "./storage";

// import arrayStorageSetItem from "./storage.js" 

// import getItemStorage from "./storage.js"; 

// import  projectNameLoop from "./index.js";

// import projectDisplayConditionalLogic from "./conditionalLogic.js";

// import arrayStorageTodoItems from "./storage";



// const modal = document.querySelector(".modal");

// const overlay = document.querySelector(".overlay"); 

// const addProjectButton = document.getElementById("add-project-btn");

// const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

// let modalInputField = document.getElementById("input-field-within-modal"); 

// let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

// let formTagForModule = document.getElementById("form-tag-for-modal"); 

// let modalContainerForTodo = document.getElementsByClassName("modal-todo")[0]; 

// let overlayForTodoModal = document.getElementsByClassName("overlay-for-todo-modal")[0]; 

// let modalForTodoDeleteBtn = document.getElementsByClassName("modal-for-delete-btn-todo")[0];

// let overlayForTodoDeleteBtn = document.getElementsByClassName("overlay-for-todo-delete-btn")[0]; 

// let currentProject 

// function preventDoYouWantToDeleteModal() { 
  
//   modalForTodoDeleteBtn.style.display = "none"; 

//   overlayForTodoDeleteBtn.style.display = "none";
// } 

// preventDoYouWantToDeleteModal();


// function preventTodoModalPopUp() { 

// modalContainerForTodo.style.display = "none"; 

// overlayForTodoModal.style.display = "none";
// } 

// preventTodoModalPopUp();

// export let projectArray = []; 

// function preventFormPopUp() { 
//   modal.style.display = "none"; 
  
//   overlay.style.display = "none";

// }

// preventFormPopUp();


//  closeModalBtn.addEventListener("click", (e) => { 
//   // e.preventDefault();
//   modal.style.display = "none"; 
//   overlay.style.display = "none";
//   // modalInputField.reset();
//   // when you close it, should clear the input field,
//   formTagForModule.reset();
// }) 

//  addProjectButton.addEventListener("click", () => { 
//   modal.style.display = "flex"; 
//   overlay.style.display = "flex";
// }) 


// function projectNameFactory(name) { 
//   return { 
//     project: name,
//     id: crypto.randomUUID(),
//     todoItems: [],
//   }
// } 

// addProjectBtnWithinModal.addEventListener("click", (e) => { 
//   // e.preventDefault();
//   let modalInputFieldValue = modalInputField.value; 

//   let projectNameObject = projectNameFactory(modalInputFieldValue); 
  
//   projectArray.push(projectNameObject); 

//   arrayStorageSetItem(projectArray); 

//   printValuesToDOM(projectArray); 
  
//   formTagForModule.reset(); 

// }) 


// export function printValuesToDOM(array) { 

//   let theProjectsArray = array; 

//   let navbarProjectNameContainer = document.getElementById("navbar-project-names-go-here"); 

//   navbarProjectNameContainer.replaceChildren();
  
//   for (let i = 0; i < theProjectsArray.length; i++) { 

//     let projectIndex = theProjectsArray[i]; 

//     let projectIndexProjectNameValue = projectIndex.project; 

//     let projectNameContainer = document.createElement("div"); 

//     projectNameContainer.append(projectIndexProjectNameValue);

//     navbarProjectNameContainer.append(projectNameContainer); 

//     let mainContentContainer = document.getElementsByClassName("main-content-section-container")[0]; 
    
//     projectNameContainer.addEventListener("click", (e) => { 

//       currentProject = projectIndex; 
      
//       let mainContentContainerProjectNames = document.getElementsByClassName("main-content-section-container")[0]; 

//       mainContentContainerProjectNames.replaceChildren(); 

//       let projectNameValueContainerForStyles = document.createElement("div"); 

//       projectNameValueContainerForStyles.classList.add("project-name-click-event-container-for-styles"); 

//       let btnContainerAddandDelete = document.createElement("div");

//       let addBtnToCreateModal = document.createElement("img"); 

//       addBtnToCreateModal.addEventListener("click", (e) => { 

//         modalContainerForTodo.style.display = "flex"; 

//         overlayForTodoModal.style.display = "flex";
//       })

//       let deleteBtnToDeleteTodo = document.createElement("img"); 

//       deleteBtnToDeleteTodo.addEventListener("click", (e) => { 

//         modalForTodoDeleteBtn.style.display = "flex"; 

//         overlayForTodoDeleteBtn.style.display = "flex";

//       })



//       addBtnToCreateModal.src = "../plus-sign-svgrepo-com (1).svg";

//       addBtnToCreateModal.classList.add("add-btn-svg-project-name-styles");

//       deleteBtnToDeleteTodo.src = "../trashcan-svgrepo-com (1).svg";

//       deleteBtnToDeleteTodo.classList.add("delete-btn-trash-can-svg-icon-styles");

//       btnContainerAddandDelete.classList.add("add-delete-btn-for-todo-container-styles"); 

//       btnContainerAddandDelete.append(addBtnToCreateModal); 

//       btnContainerAddandDelete.append(deleteBtnToDeleteTodo); 

//       let projectNameValueClicked = e.target.textContent; 

//       projectNameValueContainerForStyles.append(projectNameValueClicked);
      
//       mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

//       mainContentContainerProjectNames.append(btnContainerAddandDelete); 
     
//       displayCurrentProjectTodo(); 
//     })
//   }
// } 

 

// formTagForModule.addEventListener("submit", (e) => { 
//   e.preventDefault();
//   modal.style.display = "none"; 
//   overlay.style.display = "none";
// })  

// let cancelBtnAddTodoModal = document.getElementsByClassName("close-the-todo-modal")[0];

// cancelBtnAddTodoModal.addEventListener("click", (e) => { 

//   modalContainerForTodo.style.display = "none"; 

//   overlayForTodoModal.style.display = "none";

// }) 


// let cancelBtnForDeleteProjectModalX = document.getElementById("close-mark-x"); 

// cancelBtnForDeleteProjectModalX.addEventListener("click", (e) => { 

//   modalForTodoDeleteBtn.style.display = "none"; 

//   overlayForTodoDeleteBtn.style.display = "none";
  
// }) 


// let checkMarkWithinDeleteTodoModal = document.getElementById("check-mark"); 

// checkMarkWithinDeleteTodoModal.addEventListener("click", (e) => {  

//   let mainContentProjectNamesStyleContainer = document.getElementsByClassName("project-name-click-event-container-for-styles")[0]; 

//   let addAndDeleteBtnTodoModal = document.getElementsByClassName("add-delete-btn-for-todo-container-styles")[0]; 
  
//   let projectsWithinTodoContainer = document.getElementById("project-todos-container");

//   let projectID = currentProject.id; 
  
//   let value = currentProject; 
  
//   projectArray = projectArray.filter(project => project.id !== currentProject.id);
  
//   mainContentProjectNamesStyleContainer.replaceChildren(); 

//   addAndDeleteBtnTodoModal.replaceChildren();

//   printValuesToDOM(projectArray); 

//   arrayStorageSetItem(projectArray); 

//   projectsWithinTodoContainer.style.display = "none";

//   modalForTodoDeleteBtn.style.display = "none"; 

//   overlayForTodoDeleteBtn.style.display = "none";  


// })  


// let addBtnToDoModal = document.getElementById("add-task-todo-modal"); 



// let formInput = document.getElementById("input-form-for-creating-todo-task");

// formInput.addEventListener("submit", (e) => { 
//   e.preventDefault();
// })



// addBtnToDoModal.addEventListener("click", (e) => { 
  
//   e.preventDefault(); 


//   let titleInputForTodo = document.getElementById("title-of-todo-input-form"); 

//   let titleInputValue = titleInputForTodo.value; 

//   // currentProject.todoItems.push(titleInputValue); 

//   let descriptionForTodo = document.getElementById("description-for-todo"); 

//   let descriptionForTodoValue = descriptionForTodo.value; 
  
//   // currentProject.todoItems.push(descriptionForTodoValue); 

//   let dueDateForTodo = document.getElementById("due-date-for-todo-task"); 

//   let dueDateForTodoValue = dueDateForTodo.value; 

//   // currentProject.todoItems.push(dueDateForTodoValue);

//   let priorityForTodo = document.getElementById("priority-for-todo-task"); 

//   let priorityForTodoValue = priorityForTodo.value;  

//   // currentProject.todoItems.push(priorityForTodoValue);

//   // let currentProjectsTodos = currentProject.todoItems; 

//   // let mainSectionContainer = document.getElementsByClassName("main-content-section-container")[0]; 

  
//   let todosForProject = todoObjectFactory(titleInputValue, descriptionForTodoValue, priorityForTodoValue, dueDateForTodoValue);
  
//   currentProject.todoItems.push(todosForProject); 
  
//   arrayStorageSetItem(projectArray);
// // console.log(currentProject.todoItems);

// displayCurrentProjectTodo(); 

// })   

// function todoObjectFactory(title, description, priority, dueDate) { 
//   return { 
//     title: title, 
//     description: description, 
//     priority: priority, 
//     dueDate: dueDate 
//   }
// }     

// // problem is appending and displaying todo values 

// // for each project, 

// // issue is saving every single input as a new array entry, 

// // 

// let getProjectId

// function displayCurrentProjectTodo() { 

//   let projectTodoContainerDisplay = document.getElementById("project-todos-container"); 
  
//   projectTodoContainerDisplay.style.display = "flex"; 

//   projectTodoContainerDisplay.style.flexDirection = "row"; 

//   projectTodoContainerDisplay.style.gap = "2em";

//   projectTodoContainerDisplay.style.flexWrap = "wrap";

//   // projectTodoContainerDisplay.style.display = "block";

//   projectTodoContainerDisplay.replaceChildren(); 
  
//   for (let i = 0; i < currentProject.todoItems.length; i++) { 
//     // let selectedProject = currentProject.todoItems[i]; 
//     let taskHolder = document.createElement("div"); 
  
    
//     let selectedProject = currentProject.todoItems[i]; 

//     getProjectId = currentProject.id
    
//     let projectUniqueId = currentProject.id; 
    
//     let checkboxElement = document.createElement("input"); 
    
//     checkboxElement.type = "checkbox"; 

//     let editElement = document.createElement("img"); 

//     editElement.src = "../edit-svgrepo-com.svg"; 

//     editElement.style.height = "30px"; 

//     editElement.style.width = "30px"; 

//     editElement.style.backgroundColor = "white"; 

//     editElement.style.marginLeft = "0.20em";



//     let todoTitle = document.createElement("p"); 

//     todoTitle.textContent = "Title: "; 

//     todoTitle.append(selectedProject.title);

//     let todoDescription = document.createElement("p"); 

//     todoDescription.textContent = "Description: "

//     todoDescription.append(selectedProject.description);

//     let todoPriority = document.createElement("p"); 

//     let todoDueDate = document.createElement("p"); 

//     todoDueDate.textContent = "Due Date: "

//     todoPriority.textContent = "Priority: ";
    
//     todoPriority.append(selectedProject.priority);
    
//     todoDueDate.append(selectedProject.dueDate);

//     taskHolder.append(todoTitle);  

//     taskHolder.append(todoDescription);

//     taskHolder.append(todoPriority); 

//     taskHolder.append(todoDueDate); 

//     taskHolder.append(checkboxElement);

//     taskHolder.style.backgroundColor = "darkblue";

//     taskHolder.style.color = "white";

//     taskHolder.style.lineHeight = "1em"; 

//     taskHolder.style.textAlign = "center"; 

//     taskHolder.style.width = "275px"; 

//     projectTodoContainerDisplay.append(taskHolder);
    
//     // projectTodoContainerDisplay.append(checkboxElement);
//   } 
  
//  } 


// practice with objects 

// let array1 = [];

// const Todo = function(title, date) {
//   this.title = title;
//   this.date = date;
// };

// for (let i = 0; i < 3; i++) {
//   let xyz = new Todo(`${i} title`, i)
//   array1.push(xyz);
// }

// console.log(array1) 


// practice making objects 

// pushing into an array 

// iterating through the array, 

// get each field by it's key,  

// let newArr = []; 

// function creatingObjects(title,description, date, priority) { 
//   const newObject = { title, description, date, priority } 
//   newArr.push(newObject); 
  
//   for (let i = 0; i < newArr.length; i++) { 
   
//     let title = newArr[0].title;
//     let description = newArr[0].description; 
//     let dueDate = newArr[0].date;
//     let priorityLevel = newArr[0].priority;
    
    
//   }
// } 

// creatingObjects("Alec", "working on todo-list", "4/20/23", "High");  

// creatingObjects("Hello", "Check 1..2", "6/20/23", "High"); 

// getting all the keys from the first obj in the array

// console.log(newArr[0].title);

// console.log(newArr[0].description);

// console.log(newArr[0].date);

// console.log(newArr[0].priority); 

// getting all the keys from the second obj in the array 

// console.log(newArr[1].title);

// console.log(newArr[1].description);

// console.log(newArr[1].date);

// console.log(newArr[1].priority); 













 // it was the loop, [i] was taking in a single variable 

 // now we have the todo item within a single div and style 

// each todo item is inside it's own div, 

// each todo item needs to be inside one div, 

// NOT EACH TODO ITEM INSIDE A DIV, 

// get all the todo's. 


// I dont understand why this is so fucking confusing, 

// i just want each todo to be it's own div, 

// then append to the FUCKING CONTAINER!!! 

// use a loop, get project, append to div, then append to section, 

// why are they still bunched together??? 


// how can I make each set of todos a seperate div?? 

// append the todo's to a div then append to container, 


// style each div, then append to container, 

// Look over code, 

// I want to display the todo's for each project, 

// how am I adding the todo's, 

// strickly look at the function, 




// displayCurrentProjectTodo(); 





// console.log(currentProject);



// function printToDoValues(project) { 
  
//   let mainSectionContainer = document.getElementsByClassName("main-content-section-container")[0]; 

//   let projectTodoContainer = document.getElementById("project-todos-container"); 

//   let containerDiv = document.createElement("div");

//   let displayTodoCurrentProject = project; 

//   // for (let i = 0; i < displayTodoCurrentProject.length; i++) { 
//   //   let x = displayTodoCurrentProject[i]; 

//   //   console.log(x); 
//   // }

//   let displayTitle = displayTodoCurrentProject.title; 

//   let displayDescription = displayTodoCurrentProject.description; 

//   let displayPriority = displayTodoCurrentProject.priority; 

//   let displayDueDate = displayTodoCurrentProject.dueDate; 

//   projectTodoContainer.append(displayTitle);
  
//   projectTodoContainer.append(displayDescription); 

//   projectTodoContainer.append(displayDueDate);

//   projectTodoContainer.append(displayPriority); 


// } 







// ok I am able to get the values, I am able to print the values to the DOM, 

// how can I permanently add these todo items onto each project 

// and save them each time so they reload on refresh? 

// I can grab the current project, toggle back and forth, between projects 

// then how can I add these newly added todo's back into the array, 

// push them back into the array?  

// I able to add todo items into a project, but how can I permanently add  them? 

// do I need to push them back into the array? 

// 




// get all the values, within the modal, 

// first get the values of all the input fields, 

// once user presses the add btn, values are saved, 

// passed to the specific projects todo array, 

// also passed to storage too so the todo array is the same as regular project array 

// so we have to ability to get the values, 

// and push them to the correct project, 

// they do not save, and clear upon refresh. 

// how can I push these values into the array, permanently save them, 

// and then display them? How can I display the todo's? 

// Do I have to do something with the projects array? 

// do I have to pass project array again? 

// you will have to display the projects again 

// the todo's are being updated 

// push the updated projectsArray, and find a way to display todo's,

// 




// const App =  (() => {
//   // let projectArray = []
//   let currentProject

//   function setCurrentProject(project) {
//           currentProject = project;
//   }

//   function getCurrentProject() {
//           return currentProject;
//   }

//   function addProject(project) {
//       projectArray.push(project);
//       arrayStorageSetItem(projectArray)
//   }

//   function deleteProject(project = currentProject) {
//       projectArray = project.filter(p => p.id !== project.id)
//       arrayStorageSetItem(projectArray)
//   }

//   return {setCurrentProject, getCurrentProject, addProject, deleteProject}
// })()



// Hello, I am running into a small problem with todo, I'm trying to implement some logic that when the user presses the trash icon/delete project btn, it will clear the project name from the DOM, and in the "your projects" section. Basically just using a listener, that when the user confirms to delete the project, I get the value from the display, then remove the value. The problem is I get undefined when I try this approach, which is strange because I'm getting the element, there is a value inside there, then just usingr .value. 



// running into a problem with todo, once the user presses the trash icon/delete btn and they confirm 

// they want to delete the project, I want to delete it from main container as well as the your projects section, 

// Not sure If I'm doing this right but I can grab the main container, and then use replaceChildren to clear the DOM ]

// but I am getting pretty stuck on how to delete it from the your projects section? 

// Basically I think of somehow getting the value from the main container, as well as the projects section, 

// then using removeChild to delete the project name in both places, 



  
// OK well this is one way to clear the project name from the DOM, 

// but how can I access that same project name from the your projects section and delete that? 

// I need to also delete that same project name within the your projects section. look up replaceChildren

// not going to work because what are you replacing with? How do you know which element to replace it with? 



// let cancelBtnArray = Array.from(cancelBtnAddTodoModal);



// grab the main container, 

// let mainContentContainerProjectNames = document.getElementsByClassName("main-content-section-container")[0]; 

// console.log(mainContentContainerProjectNames);

// function projectNamesClickEvent(array) { 
//   for (let i = 0; i < projectArray.length; i++) { 
//     let projectNameIndex = projectArray[i]; 
    
//   }
// }

// projectNamesClickEvent(projectArray);



// I think I Need to make a seperate function, don't want to have too much going on in one function, 

// use the same logic, loop through project array, 
 
// for (let i = 0; i < theProjectsArray.length; i++) { 

//   let projectIndex = theProjectsArray[i]; 

//   let projectNameContainer = document.createElement("div"); 

//   projectNameContainer.append(projectIndex.project);

//   navbarProjectNameContainer.append(projectNameContainer);
// }






// ok next, project names are being added dynamically, they are properly being added to the array and properly being added to local storage, 

// next when I click on the project, that project's name should be displayed in the main content container, 

// if another project is clicked on, clear the contents of the previous project and display the new project, 

// remember only one project is added at a time, should not add onto. show the clicked on project, along with the two btns, add and delete for the todo's 

// project name is clicked, show that project, user cannot append that project multiple times by clicking, 

// if another project name is clicked, clear the old and make way for the new project that was clicked, 

// this will be a seperate function, first I feel like you will need to loop through project's array, 

// add an event listener to each project from the array, inside the listener, logic will grab the main content section, 

// and append values to it, 

// you will probably need some type of conditional to determine if the project is already added such as ID's matching, 

// if ID matches what was clicked on, prevent from adding again, else if add the project to the container, 

// before the project name is appended to the main content container, call a function which checks if that names id matches the ID that was clicked, 

// I would say first let's make a function that can grab all the project names and ID? 










// add an event listener to each project, loop through all the projects, 

// I'm not sure you need to loop through all the projects, seems like your getting project target value, with e.target.textContent 

// now I believe what you need to figure out is how to display the certain project, based on when the user clicks on the project name in the projects section, 

// remember replace the content within main container, and update accordingly all based on btn click 

// think back to restaurant page, 

// I somehow need to think this out, project name is clicked, clear contents of previous project and make way for new, 

// I think I need some sort of conditional, if this project is clicked, change to a variable then use replace child. 

// if the variable targetValueProjectName already exists in the main content container, or the div, 

// prevent the user from adding another project,  

// 

// -- how to make sure only that when user clicks the project name, in the projects section, 

// it will populate, with that project name, wipe the contents of the previous project and show the clicked on project, 

// -- why is the project's section not dynamically adding projects? I have to refresh the page for it to show up? 

// handle the conditional logic first, and correctly displaying the project names in the main container first, 

// some type of conditional is needed to complete this, remember only one project can be displayed at a time, 

// if project container includes the project that was clicked on, prevent the user from adding another project, 

// should it be similar to restaurant page, each project is given a variable, then if that project is clicked on it's given a variable or index, 

// then conditional will check if that project's ID, matches what is inside the main container, if not clicked, replace with new click, 

// if it is clicked again, prevent the user from replacing the content, 

// replace the content with the projects unqiue ID, if project.id === targetValueProjectName, prevent the user from adding that btn again, just return, 

// can we go back and look at what you did previously with your code?

// I don't think it's the same previously, because we are using a div here instead of a button, 

// I want to find a way that I can only display the project that was clicked on, should add duplicates, 

// if another project is clicked, replace contents of old and wipe the new, 

// I think the DOM Display is fine, getting the value from a function, creating a div that stores the projects name, 

// now once the project is clicked on, loop through storage, find out the project that was clicked on and display's it's contents, 

// stick with how you are displaying the projects in the DOM, 

// how will you add things to the main content container, display only the project that was clicked on? 

// make a loop get the project's ID, compare the ID to the ID that was clicked on, 




//  export function printProjectNameToNavbarProjectSection(value) { 

//   let projectValue = value; 

//   let projectValueID = projectValue.id; 

//   let stringValue = projectValue["project"];  

//   let projectDivNameBtnNavbar = document.createElement("div");  

// here to top of function, 



  // projectDivNameBtnNavbar.addEventListener("click", (e) => { 
  //   for (let project in localStorage) { 
  //     let x = project; 
  //     let names = localStorage.getItem("id");
  //     console.log(names);
  //   }
  // })

  // projectDivNameBtnNavbar.addEventListener("click", (e) => { 
  //   for (let i = 0; i < localStorage.length; i++) { 
  //     let y = localStorage.key("Project-Names");
  //     console.log(y);
  //   }
  // } 
  //   for(let project in localStorage) { 
  //     // let x = localStorage.getItem("Project-Names");
  //     let x = project["key"]; 

  //     // let xid = project["id"]; 

  //     // console.log(xid);
  //     console.log(x);
  //   }
  // })


  // old logic below 

  // projectDivNameBtnNavbar.addEventListener("click", (e) => { 
  //   let targetValueProjectName = e.target.textContent; 
    
  //   console.log(projectValueID);

  //   // if (projectValueID === targetValueProjectName) { 
  //   //       projectDivNameBtnNavbar.removeEventListener("click");
  
  //   //    }



  //   let projectNameMainContainerDiv = document.createElement("div"); 

  //   projectNameMainContainerDiv.classList.add("project-name-div-styles-main");
    
  //   let mainContainer = document.getElementsByClassName("main-content-section-container")[0];

  //   let addButton = document.createElement("button"); 

  //   addButton.textContent = "Add";

  //   let deleteButton = document.createElement("button"); 

  //   deleteButton.textContent = "Delete";

  //   mainContainer.append(projectNameMainContainerDiv);

  //   projectNameMainContainerDiv.append(targetValueProjectName);

  //   mainContainer.append(addButton); 

  //   mainContainer.append(deleteButton);

  // })

  // here to bottom bracket 

//   projectDivNameBtnNavbar.classList.add("project-names-styles-navbar-section");

//   projectDivNameBtnNavbar.append(stringValue);

//   let navbarProjectContainer = document.getElementById("navbar-your-projects-container"); 

//   navbarProjectContainer.append(projectDivNameBtnNavbar);

// }


// for (let variable in parseData) { 
//   let projectIndex = variable; 
//   let valueInProject = parseData[projectIndex]; 

//   let stringValue = valueInProject["project"];  

//   let projectDiv = document.createElement("div"); 

//   projectDiv.style.textAlign = "center";

//   projectDiv.style.fontSize = "2rem";

//   projectDiv.style.color = "white";

//   projectDiv.append(stringValue);


//   console.log(stringValue);




//   // console.log(x); 

//   let navbarProjectContainer = document.getElementById("navbar-your-projects-container"); 

//   navbarProjectContainer.append(projectDiv);

//   // console.log(valueInProject);

//   // let projectValues = Object.values(parseData);

//   // console.log(projectValues);
//   // console.log(parseData);
//   // let keys = Object.keys(project);
//   // console.log(project); 
//   projectArray.push(valueInProject);

//   // console.log(projectArray);
// }  










// 









// make a function which takes the contents of local storage, 
// appends the result to the DOM. 

// function printStorageToDom() { 
//   // let getStorageItems = localStorage.getItem("Project-Names"); 
//   // let parsedItems = JSON.parse(getStorageItems);
//   // let string = JSON.stringify(parsedItems);
//   // let values = Object.values(parsedItems);
//   // let string = JSON.stringify(parsedItems);

 

//   let navProjectsContainer = document.getElementById("navbar-your-projects-container"); 
//   navProjectsContainer.append(stupidValue);
// } 


// printStorageToDom();





  // let getStorage = localStorage.getItem("Project-Names"); 

  // let parseData = JSON.parse(getStorage); 

  // projectArray.push(parseData);









// let formElement = document.getElementsByTagName("form"); 

// console.log(formElement);

// formElement.addEventListener("click", (e) => { 
//   e.preventDefault();
// })


// Yeah, I think focusing on the basic idea of how to create a project and 
// to display the correct project when its sidebar button is clicked would be my first step. 
// Then you can think about what should be on the project's page: they will need buttons to add a task and what not

// have the user enter a project name, and save the value, pass that value to storage. 

// the value can only be saved, once the user presses the add btn, 

// add an event listener to the add btn, inside the listener, get the input field, capture it's value then console log it 

// the issue of the text in the input field being cleared, 

// well I wrapped it inside a form tag, it works but it refreshes the page, I mean is that a problem, 

// I guess now I'll work on storing the data, 
































































// call a function which handles DOM logic
// export then import within another file 

// import { some } from "lodash";
// // import { contentType } from "mime-types";
// import "./eventListenerModule"; 

// export function addProjectFormInput() { 

//   const inputField = document.createElement("input");

//   inputField.classList.add("input-field-text");

//   inputField.placeholder = "Name your project";

//   const btnContainer = document.createElement("container");

//   btnContainer.classList.add("btn-container");

//   const addBtn = document.createElement("button");

//   addBtn.textContent = "Add";

//   const cancelBtn = document.createElement("button");

//   cancelBtn.textContent = "Cancel";

//   addBtn.classList.add("add-btn");

//   cancelBtn.classList.add("cancel-btn");

//   const inputContainer = document.getElementById("input-field-container");

//   inputContainer.classList.add("project-input-field-container");

//   inputContainer.appendChild(inputField);

//   btnContainer.appendChild(addBtn);

//   btnContainer.appendChild(cancelBtn);

//   inputContainer.appendChild(btnContainer);

// } 


// export function appendProjectNameToDOM(value) { 

//   let userInputValue = value;  

//   let projectContainer = document.querySelector(".navbar-your-projects-container"); 

//   let mainContentProjectContainer = document.querySelector(".main-content-section-container"); 

//   console.log(mainContentProjectContainer.children);

//   let projectNameElementProjectSection = document.createElement("div"); 
//   // get the element and try to use it inside event listener module, 
//   projectNameElementProjectSection.classList.add("project-section-name-btn-div");

//   projectNameElementProjectSection.setAttribute("id", "project-element-from-navbar-section"); 

//   // console.log(projectNameElementProjectSection);

//   let projectNameElementMain = document.createElement("div"); 

//   projectNameElementMain.classList.add("main-content-section-project-name-div");

//   projectNameElementProjectSection.innerText = userInputValue;

//   projectNameElementProjectSection.addEventListener("click", function(e){ 

// // if (projectNameElementMain.includes(projectNameElementProjectSection)) { 
// //   console.log("true");
// // }

//     // projectNameElementProjectSection.disabled = true; 

//     console.log("Hey you clicked the project name");

//     projectNameElementMain.innerText = userInputValue;

//     mainContentProjectContainer.appendChild(projectNameElementMain); 

//     let addToDoBtn = document.createElement("button"); 

    
//     // when btn is clicked it will generate a pop-up form 
//     // I think you need a container, a div that holds the content, append the div to the container, 
    
//     addToDoBtn.addEventListener("click", function(){  
      
//       // if (mainContentProjectContainer.includes(someBtn)) {
//       //   someBtn.disabled = true;
//       // }

    

//       // projectNameElementProjectSection.disabled = true; 

//       // someBtn.style.display = "none";

//       let contentContainer = document.createElement("container"); 

//       contentContainer.classList.add("todo-pop-up-container"); 

//       let titleOfToDoInputForm = document.createElement("p"); 

//       titleOfToDoInputForm.textContent = "Create Task" 

//       titleOfToDoInputForm.style.textDecoration = " underline";

//       let submitTaskBtn = document.createElement("button"); 

//       // in order to center it you need to append this element 

//       // to another container 

//       let submitTaskBtnContainer = document.createElement("div"); 

//       submitTaskBtnContainer.classList.add("submit-task-btn-container-styles");

//       submitTaskBtn.classList.add("submit-task-btn-pop-up-field");

//       submitTaskBtn.textContent = "Add To-Do"; 

//       // let input = document.createElement("input");

//       let popUpContent = document.createElement("div");

//       popUpContent.classList.add("pop-up-content");

//       let input = document.createElement("input");

//       input.classList.add("title-input-field-styles");

//       let inputLabel = document.createElement("label");

//       inputLabel.textContent = "Title"; 

//       let descriptionElement = document.createElement("textarea"); 

//       let descriptionElementLabel = document.createElement("label"); 

//       descriptionElementLabel.textContent = "Description";

//       let closeBtn = document.createElement("img"); 

//       closeBtn.classList.add("close-btn-to-do-input")

//       closeBtn.src = "../close-circle.png"; 

//       closeBtn.addEventListener("click", function(){
//         contentContainer.style.display = "none";
//       })

//       let urgencyLabel = document.createElement("label");

//       urgencyLabel.textContent = "Urgency";

//       let urgencyDropDown = document.createElement("select"); 

//       urgencyDropDown.textContent = "Urgency";

//       urgencyDropDown.classList.add("urgency-dropdown-styles");



//       let urgencyHigh = document.createElement("option"); 

//       urgencyHigh.textContent = "High" 

//       let urgencyMedium = document.createElement("option"); 

//       urgencyMedium.textContent = "Medium"; 

//       let urgencyLow = document.createElement("option"); 

//       urgencyLow.textContent = "Low"; 

//       let datePickerLabel = document.createElement("label");

//       datePickerLabel.textContent = "Due Date";

//       let datePicker = document.createElement("input"); 

//       datePicker.type = "date";

//       console.log(datePicker);
      
//       urgencyDropDown.appendChild(urgencyHigh);

//       urgencyDropDown.appendChild(urgencyMedium);

//       urgencyDropDown.appendChild(urgencyLow); 


//       submitTaskBtnContainer.appendChild(submitTaskBtn);

//       contentContainer.appendChild(closeBtn);

//       contentContainer.appendChild(titleOfToDoInputForm); 
      
//       contentContainer.appendChild(inputLabel);

//       contentContainer.appendChild(input); 

//       contentContainer.appendChild(descriptionElementLabel); 
      
//       contentContainer.appendChild(descriptionElement);

//       contentContainer.appendChild(urgencyLabel);

//       contentContainer.appendChild(urgencyDropDown); 

//       contentContainer.appendChild(datePickerLabel);

//       contentContainer.appendChild(datePicker);
      
//       contentContainer.appendChild(submitTaskBtnContainer); 

    

//       // should append elements to the content div, then append to container? 

//       mainContentProjectContainer.appendChild(contentContainer);
//     }) 

//     addToDoBtn.textContent = "Add ToDo";

//     mainContentProjectContainer.appendChild(addToDoBtn); 

//   }) 


// projectContainer.appendChild(projectNameElementProjectSection);



// } 




// function appendProjectToMain() { 
//   console.log("Hey I'm in here");
//     projectNameElementMain.innerText = userInputValue;
//     mainContentProjectContainer.appendChild(projectNameElementMain); 

//     let someBtn = document.createElement("button"); 

//     someBtn.textContent = "Add ToDo";

//     mainContentProjectContainer.appendChild(someBtn); 

// }



// I'm able to get the user value, I am able to log out it's value, I am able to grab the projects container section,

// it still returns and HTML element, I can turn it into an array, but I am unsure of how to append to the DOM. 


// what I want, the user will enter project name, I want that name to appear in the project's section and main content section(blue part); 

// Problem: I am confused on how to append this project name to the DOM. 

// What I've tried: Once the add btn is pressed, the value/name of project will be saved, and passed to a function which takes that 

// value and prints to the DOM. 

// I am able to access the project container, and the main section but it's an HTML collection, I can convert it into an array, 

// but how can I append an array to the DOM? 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectNameLoop)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _cross_mark_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross-mark-svgrepo-com.png */ "./src/cross-mark-svgrepo-com.png");
/* harmony import */ var _check_mark_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-mark-svgrepo-com.png */ "./src/check-mark-svgrepo-com.png");
// add the event listener module

// import "src/eventListenerModule.js"; 




 



 

 

  

  

let getStorage = localStorage.getItem("Project-Names"); 

let parseData = JSON.parse(getStorage); 

function projectNameLoop() {   
for (let variable in parseData) { 

     let projectIndex = variable; 

     let valueInProject = parseData[projectIndex]; 

     _domLogic__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(valueInProject); 

}  

} 

projectNameLoop();
  
(0,_domLogic__WEBPACK_IMPORTED_MODULE_2__.printValuesToDOM)(_domLogic__WEBPACK_IMPORTED_MODULE_2__.projectArray);  



// today, editing todo's 

// using getters and setters, 

// look back at example, and see how you can work that into current code 

// the getters and setters, should probably be inside your factory function 

// what will we be passing to the factory? 

// Why a getter and setter? I just need to overwrite the data at that particular index with the data, 

// can't I pass the values to the same factory? make the same object and then use that object to splice or overwrite properites? 

// you can probably do the same process, make an object, but you need to overwrite that todo and that index with the new info. 

// 



// ok so a seperate modal is created, with unique elements,  

// now we must get the values for each input field and append them to the current projects todos ? 

// somehow I also need to include the dataset 



// here we are back with avengance 

// I am recovering, I'm going to do a little work today 

// so right now I want to edit todo's 

// button is clicked and that should generate a form 

// the form is identical to making a todo, 

// you will just need to associate that particular todo 

// with a dataset, similar to deleting a todo, 

// once the edit btn is clicked, give that todo a dataset 

// generate form, whatever user enters, will update/overwrite the info 

// it won't create a new one, it will just update/modifiy 

// your previous approach I don't believe will work 

// because you are trying to use the same event listener, 

// that seems like it will only cause issues, 

// lets seperate them, meaning copy the set-up and code for creating a todo modal 

// style exactly the same, 

// add todo, and edit todo are two seperate listeners, 

// one is for creating, the other is for modifying, 

// lets begin, the approach seems valid, start with the HTML 

// basically copy the code, slighly change class names, 

// same styles, html, css, then grab the element and add the event listener logic, 

// within the listener, we are not adding, 




// pass the updated array to storage, 

// how can I update the array, 

// can I push things to it, add things to it, 

// can I use filter, 

// ok so now I can delete individual projects as well as the project as a whole 

// how can I reflect this change in storage? 

// updateStorage function, 

// plan on how I can make an update storage function, 

// right now It only deletes from the DOM, 

// how can I update my array to reflect the changes in the DOM? 

// can I look back my delete button functionality for inspiration? 

// that deletes from both the array and in storage, 

// first check that out, 




// I am getting very confused on how I can delete a single todo 

// using the 

// confused on how I can delete a single todo, and reflect in the DOM, 

// but also in storage, I can remove from DOM, 

// but I am getting a little lost on how to remove it from storage, 

// I want to say using filter would be a good option 

// today the focus is deleting a single todo and reflecting that 

// within the storage and within the DOM, 

// also if I get stuck on that, 

// editing a todo, that if user presses edit btn, 

// generate the modal again, and allow the user to edit that todo 

// and then reflect that change in the DOM and in storage, 

// I will ask the question right away because I am stuck, 

// but spend a little time looking over the code, 




// I made a new folder in my repos called todo list-B 

// then I cloned within there, then copied all my code from my module 

// into the new project, things seem to be working ok 

// am I ok to push and commit changes, will these changes still go to 

// todo list-A ? 

// right now a problem I see is that projects 

// are not being added to project 2, 

// the todo's won't show, and any project that's not 1, erases on refresh, 





// ok so today is a new day, 

// look back over the messages, get an idea, 

// then grab some of your functions, 

// try to implement the plan that ex came up with, 

// pass objects into array and loop thru them, 

// first look over the messages,  


// ok so go into code pen, copy the display function over, 

// try to make a new object, each time you enter form data, 

// then add those projects to the array, 





// ok so today, the unqiue todos are being displayed 

// now we must style the todo's 

// each block should be styled, 

// not a container than has a style that holds everything, 

// try to make sure each set of todo is appended to a container, 

// you are appending everything to that same container, 

// append to one container, style that then append to main container 







// ok we have something working here, 

// you have two functions, 

// at least data is being printed to the DOM, and is storing in local storage correctly 

// check your functions again, 

// remember one to create the elements/style, other to just display the currentProjects todo's 

// one function to grab the main container, append values, style, 

// the other function should just display them. 



// let getTodoItems = localStorage.getItem("todoItems"); 

// let parseTodoItems = JSON.parse(getTodoItems); 




// for (let todo in parseTodoItems) { 
//      let todoItem = parseTodoItems; 

//      let valueInTodo = parseTodoItems[todoItem]; 

//      projectArray.push(valueInTodo); 

//      // console.log(todoItem);
// }

// printValuesToDOM(projectArray);






// store the todos like I did with names, 

// loop within the function, take in project, add the values, 

// push the project back into projects array, and then 

// pass the projectsArray back to DOM function, and storage, 

// add the todo's on a project, update it again 




// console.log(parseTodoItems);


// how can I keep my todo's after page refresh? Yesterday it seemed like it was a problem in how I'm storing them and how I parse them 

// it seems like it is a storage problem, how can I properly store the todo array within each project, 

// try to parse the data like u did before? 


// let getTodoItems = localStorage.getItem("todoItems"); 

// let parseTodoItems = JSON.parse(getTodoItems); 


// function parseTodo() { 
//      for (let item in parseTodoItems) { 
//           let todo = item; 
//           console.log(todo);
//      }
// } 

// parseData();


// OK so the deleting project method works!! I am now able to delete a project from main as well as the navbar, 

// next I did to add the logic so the user can add todo's, 

// remember todo's are added to the project obj array, 

// first we probably need a function that will capture the value 

// on each input field, lets start there, 

// a function will be needed to get the correct input fields 

// and then get the values from them, 




// thinking of the next step after the deleting projects, 

// that would be getting the values from the form input and 

// pushing them back into the todo array that each project containers 

// you will need access to that todo array, try a simple log first 

// but the todo's will be added to there but also it needs to be 

// reflected in your DOM too, 

// so thinking of some way to access the todo array within the obj 


// if you can access it you add the values to it, 

// then once the values are stored properly within each object, 

// you want to reflect that in the DOM, access the todo and display it's properties 

// then having a way to delete todo's and having that update 

// within storage and within DOM. 


// getting project ID 

// for (let i = 0; i < projectArray.length; i++) { 
     
//      let projectIndex = projectArray[i]; 

//      let projectValue = projectIndex.id; 
     
//      console.log(projectValue);
// } 







// get the project's ID, get the ID's within the projects section, and the ID's within the main section, 

// create a loop inside each section and get the value, 




// well you can delete the project name and the btn container from the DOM, 

// can we figure out a way to delete the project, from the your projects section, 

// lets take a look at how the value is stored, 

// figure out how the values are stored and see if somehow you  

// grab a value, or the container div that contains the value.


// I am able to grab the values wtihin the your projects section, 

// I am able to get the value within the main content section, 

// I think I need to use a loop, to get all the elements within the your projects section, 

// if the value's text content matches, set the textContent to "" or delete the element, 

// try to loop through the elements with that your projects section, 

// if values match, delete the value from the your projects section that matches main contents value, 

// id's, each project has a unqiue ID, compare ID's, why cant I do, if the textContents/strings match remove? 

// I got the string values of the element in the main, and all the elements in your projects, 

// does the string match the other string, 

// do ID's match? 





// same issue, I am trying to grab the values, and if the user presses the check mark, delete the project, 

// delete the project from both places, I am able to get the value in the main section, 

// and the list on values in the your projects section, 

// how can I delete both in the same place once the user presses the check mark, 

// just check to see when the element is created and appended to the DOM, see if you can add a class to it, 


// while were waiting can we get the projects ID? 

// just simply try to get a projects ID. and log it, 






// OK today the goal is to figure out, how to disable/exit the modal, and how to activate it 

// based upon a button click, 

// then once those are good, then we can focus on the styling of the modal, 

// first let's add the logic that can exit the modal, 

// grab the id or class from HTML, and first log the element correctly, 

// then add event listener, that sets the modals display to none, 

// then if the user pressed the + icon, set the display to flex, 

// ok so I am able to toggle back and forth, opening the modal and closing the modal, 

// now you will need to make logic, that will set the default display of the modal to none, 

// then if the user presses the add btn, it will pop-up, cancel it will not display 

// I think just grabbing the variables at the top is fine, and just in the global scope, 

// set the display to none, 

// works, save and commit, then figure out how to get the delete btn working, 

// now would probably be the best time to do that, since the add btn is working, now we can

// work on the logic, that once btn is clicked, generate another modal, asking the user 

// are you sure you want to delete the project? It will clear that project for the DOM In main 

// but also in the project's section, 

/// style the modal, one btn to confirm and the other btn to cancel the order, 

// Ok so we have the print values to the DOM function, 

// if user clicks project name, values append to main container, 

// if user presses, add or delete, logic is within the same function, 

// I don't see that becoming a problem, my thinking is that it's better to do that there 

// than passing the variable to another function, might as well do that all there, 

// so the delete btn, make the markup in the HTML first, follow the guidelines before, go slow, 


// modal is working but just trying to add space 
// between the elements the check and the x, element 

// ok got the delete btn modal working as I want to, next I will add the event listener to the element, 

// that once clicked it will close the modal, 

// dont forget to add the overlay! 




// next will work on deleting a todo, once the user presses the checkmark, it should delete the project from the DOM, the array 

// and I believe from local storage too, then work on saving todo info, from the modal and pushing into the DOM and storage where 

// each project has a list of todo's, it will added there while also reflecting that into the DOM. 

// yes next step is either deleting the project, once the user presses the check btn, and getting all the user info 

// that was entered and saving that todo, to the array of todo's that each project has, 




// projectDisplayConditionalLogic(); 




// so now we figured out how to prevent the user from adding more projects, 

// bascically clear the DOM, then add projects, 

// now add the logic, that will generate a modal, for the user to create a todo, 

// first I would just try it within the function, then maybe see if you can split the code up a bit, 

// print a simple message within the event listener first, 

// ok works good, now start constructing your modal, follow along with the article, or video, 

// needs title, priority, due date, description, 

// those values are then added to the todo array within that specific project, 










// So I need to reconsider my approach, instead of having storage reflect what is in the DOM, 

// DOM and storage are seperate, when a project name is created, save to storage but you also have project's array, 

// and whatever is inside projects array needs to be appended to the DOM, in the correct format, you may have to parse or stringify the data to work, 

// reflect whatever is in the projects array to the DOM. 







// function printProjectNameToNavbarProjectSection() { 
//      console.log("Hey this works");
//    }
   


// -- one issue I notice is that if I add a project name, I have to refresh for it to get it too show. !!!


// what I want to do next is to take the values/project names that are in local storage, 
// and append those to the DOM, 
// first just try to grab the elemnent and append value within the function, then work from there, 



// OK I am able to do it within the function 

// now try to seperate it, put that logic within the DOM Module, then once you get that working, style within seperate sheet, 






// projectArray.push(parseData);




// const someArray = [ {a: 1}, {b: 2}, {c: 3} ];
// const newArray = [ ];
// for (const blah in someArray) {
//   console.log(blah)
//   newArray.push(blah);
// };

// const someArray = [ {a: 1}, {b: 2}, {c: 3} ];
// const newArray = [ ];
// for (const project in someArray) {
//   console.log(project); 
//   newArray.push(project);
// };    



// this
// const someArray = [ {a: 1}, {b: 2}, {c: 3} ];
// const newArray = [ ];
// for (const index in someArray) {
// //   console.log(index);
// let x = Object.values(someArray);

// // console.log(x);

//   newArray.push(x);

//   console.log(newArray);
// };






// I will next write a function within DOM logic, that will get the local storage, grab the project names, then print them to the DOM, with in the projects section, 

// then if user clicks the project name, attach a listener, then within listener logic append project to the DOM, in both places 

// you will need to clear main content to make way for the new content, using replace child, 

// you need to make sure to convert the obj to a string, make sure it's in the proper format before appending, 

// if just needs to be the straight project name, 

// so once clicked populate with two buttons, delete, and add btn, if add btn is clicked, generate form which will save data and add to todo's within local storage, 

// append those todo's to the DOM as they are added, and remove if they are deleted. 









// projectArray.clear(); 


// I am running into some problems, on storage with todo list, my data is being stored correctly,  

// but I am noticing my project names are keep getting nested inside multiple array's, currently 

// project names are are made into objects then objects are passed to array for storage, once the page reloads, 

// I parse through the data in storage, and push the data back into the array, so the data is saved, 

// like I said, array's are being nested within multiple levels and I'm not sure why. 

// picture attached and some snippets of my code attached for context, I can also attach my repo if that helps to further debug this, 






// I think I can just put the array within storage and within DOM logic 

// I can pass the project object to the 


// read back over messages to determine game-plan, 

// properly store the data, objects are stored within an array, the array is being overwritten each time, 

// put those items that were added to local storage back into the array, so the array can keep those values, 

// keep the values in storage, values are being overwritten each time, 

// keep the contents of the array and local storage, 

// objects are stored within an array, get the project name object, add to local storage, get the value from local storage, and pass back into array?? 

// now seems like storage data is being overwritten, it's not updating, and not keeping data, 




// an array that stores objects, 

// factory function will make the project name title, give it an ID, and todo's / todo's will be an array, 

// have a global array, 

// double check your factory function, 

// factory must make, a name of project, id,, todo's in an array, 


// have the project names in an array and pass the array to local storage, so the values don't get overridden each time. 

// get an item from local storage, turn it into an obj using a factory function, 

// I want to make sure I am properly storing my data, both in the array the global array 

// and within local storage, if user enters info, it should save both of those values, 

// currently I can add values and I am putting name objects within an array 

// but it is overwritting each time and not saving the data, 

// store the array every time setItem is called 











// import "./style.scss"; 


// should I keep my event listeners in a seperate module? 

// lets test by importing and exporting, 

// Ok input is cleared, now I need to focus on getting the value and passing it to storage. 

// get the value, log the value, save to some type of data structure, 

// 


// OK so I'm sorta on the right track here, I am gettingthe user value, and passing it a local storage function, 

// I need one function to set the item, the project name 

// another function to get the project name, 

// maybe another function to get all the added todo's of the project, 

// and I believe you need to use obj's instead of array's 

// because the key of the obj === project name, the value/s of the project === the todo's ??? 



// first lets fix our storage functions to use one set and one get function, 

// well I'm confused on setting and getting items, I tried to make a seperate function but it did not work, 

// one function should set the item, the other function should retrieve the item/project name from local storage, 

// then once the project is retrieved, create logic that allows the user to add todo's, title, description, priority, due date, 


// make the project name an obj, 

// how will I store my data? How can I correctly store my data? 

// look over old posts to gameplan,  


// How can I properly store the projects name in todo, 

// once stored write a function which displays the contents of the storage, to the DOM. 

// what type of data will my projects be? I think obj's, key is project name, it's todo's are the values, 

// work on changing the project's name to an obj, instead of an array 

// how can I add items to an obj? 

// can I just pass the arr to a factory function which will create a project name obj, key is name value/s are the todo's

// I want to properly store project names into local storage, I am running into a problem that I want to make a project name obj, 

// then pass that obj to local storage, I am just having trouble, with my factory function, 









// check array and local storage,

// local storage and array seems to be working fine, it is adding onto the current selections,

// I think next would be to add an event listener to the project names, to begin adding to-do's to projects

// ok so looking at the project for inspiration, 

// project names are added to the projects section 

// saved to an array and storage, 

// then if the project names are clicked, they are displayed in the main content section, 

// then once added to the main content section, user should be able to click a add btn or a trash btn, 

// add btn will make a form for todos to be added, then once added those todos will be displayed, 

// delete btn will permanately delete the todo/task. 

// how to prevent dynamically created element JS elements from forming when function is called? 

// fix up current code to use modules, move to own function 

// seperating the code is not working, can't add an event listener there, 

// I want to use the same logic I had before but to split the logic up into different modules, 

// take the div element 

// when you click on a project name, that project name should appear in the main section (fine) 

// It should also add the add todo btn along with cancel btn 



// work on fixing the btn issue, creating multiple elements on btn click, 

// if the user value is empty disable the btn or hide it, 

// I have tried both methods with no luck, 

// I was working with someone yesterday, and it seemed like the right method, 

// but I am very confused on why it is not working, I would think placing it before the function call would do the trick, 

// I will experiement with where the code is placed. 


// figuring out the logic for the buttons, user should be able to add multiple projects, 

// one project at a time, if user enters nothing, disable btn, 

// if something changes in the input field, re-enable the btn  

// I am having trouble logging the statement within the input listener, 

// practice in seperate file, I was somehow able to get it to work yesterday, 

// practice in a seperate, if no luck move onto generating the input field based on when user 

// presses the todo btn. 

// spend the rest of the time, trying to figure out an input form, 

// so with the pop-up field, don't forget to use the same logic as last time with didabling btn at the correct moment 
// once btn is clicked have the same pop-up field as you did with libary, 

// you will probably need a container then a div that's appended to it with the actual content, 

// container absolute, div is relative 

// then you will need an input for name, 

// due date, notes can use text area and description, 

// find a way to append to main project section, you can delete it, or choose to add more todos 

// that go with the specific project.  




// get familar with the functionality of the app . 

// the add project btn is now working, 

// now you need to consider how your project names are going to be added to the main content section 

// the names are added to the projects section, 

// once clicked they shall be added to the main content container, 

// if you click on the project name in the main content section, the to do form should pop-up, 

// remember one input form at a time, you may have to disable the btn and re-enable the btn, 

// before moving on I would also check, and review your current code, remove commented out code that does nothing but take up space \

// check the names of the variables and functions, make sure it makes sense to you, better to do it now, check it out 

// partially have the logic, that generates input field, 

// try to seperate the logic, grab this element projectNameElementProjectSection 

// grab the element add a listener to it, perform the conditional logic inside there, 

// then call the DOM module to begin adding it's properties.  

// hello everyone, running into a small problem with to do, 

// overall trying to keep my DOM logic and event listeners in seperate modules 

// I am trying to access the project name element from the DOM module 

// I am exporting the function that contains the variable, 

// then importing it but when I try to access the element in the listener module, 

// using ID, class, query selector, I jsut get undefined back, 

// I'm really not sure why this is happening, I have not ran into this issue yet, 

// importing and exporting and using functions/variables from other modules seemed very straightforward, 

// I would just work on the function in the meantime, keeping everything within the same file, 

// work on issue on clicking project name in projects section 

// it should not append multiple btns. 

// that will cause issues 

// well thinking generally, similar to the previous issue, 

// I need to somehow disable the btn/name of the element, after it has been clicked 

// so the user cannot add another btn, 

// prevent the user from adding another btn, after clicking the btn, 

// If the user value matches what is already in the main content section 


// first work on the btn appending issue, if the user clicks the project name again, 

// it will keep adding btn's, don't add more btn's 

// don't add the project again, if it already EXISTS IN THE MAIN CONTAINER 

// NOW TOGGLING BACK AND FORTH BETWEEN TWO PROJECTS 

// YOU ARE SIMPLYING REPLACING THE PROJECT WITHIN THE CONTAINER, 

// ONLY ONE PROJECT CAN BE SHOWN IN THE CONTAINER, 

// the conditional to stop appending multiple projet's to the main content section, 

// the conditional will check if that project element already exists in the main content section, 


// the problem seems to be the buttons appending, I need to find a way to prevent the btn's from keeping on appending, 

// if the btn already exists the main container, then don't append, or disable, hide, or remove element 

// I am running into some many problems with to do list, 

// I am trying to keep things in modules and keep the logic/event listeners seperate from the DOM Logic, 

// I want access to the project name element within the event listener, 

// so if the user clicks the project in the little sidebar it gets appended to the DOM, 

// well right now I am performing DOM stuff with event listeners, 

// but that element is only available when the btn is clicked, 

// I guess my question is can I keep my current logic, within my DOM module? 

// The problem is that I want to access a particular but that element is created within a listener, 

// basically the user enters name of project presses add btn, the value gets passed to a function which creates the DOM element 

// such as appending to the projects section and the main content section, 



// Running into a lot of problems with to do 

// basically I want to access an element in a different module 

// problem is that element is dynamically created within an event listener, 

// I would like to keep my DOM and logic stuff seperate, 

// currently I grabbed the element in the DOM module, and added an event listener to it, 

// now I have to use logic, to make sure the user cannot keep adding the same btn to the DOM based on btn click, 

// basically my question is my current domLogic module ok? Adding an event listener and logic within the dom module 

// It does not seem right but I don't see any other way to do this. 

// how can I stop the add -todo btns from appending upon each button click? 

// everything is attached within event listeners, 

// click add project btn form is generated, add btn is pressed value is saved 

// that value is passed to another function, well the function is called then, 

// can we call the function at a different time, why? 

// shouldnt it be passed and called as soon as you get value? 

// can I just create another function, 

// one that stores the user value, 

// one that returns the user value appended to the DOM? 

// you pass the value to another function, 

// that function returns that userValue appended to the DOM/containers 

// capture it;s return value from another function, 

// add an event listener to that function, 

// so lets try to make another function 1 that takes the value and appends to container, DOM 

// I will now try to add the calender option to my todo form 

// another which takes that function above and adds a listener to it, using the logic inside . 

// expierment working with two functions, saving one function to variable, adding the DOM stuff return a value, 

// take that function expression add a listener to it. 

// well the problem is that every time I click the add project btn 

// it will keep appending more add-todo btns to the DOM, 

// because when the form pops up 

// and the user hits the add btn, 

// the function that handles DOM is called, 

// is there a way I can isolate the project section name element? 

// well what I was thinking of yesterday, 

// is can I make a seperate function? 

// can that function store a variable? userValue? 

// then can that function be called? 

// I'm not even sure what the hell to even do 

// that function is being called within the listener, 

// so every time you click that btn or project name, it will keep making btns 

// determine when it's time to append to the DOM ?

// one function to store value 

// one function to take/access that value and then append to DOM 

// store the value, the function can be called there, 

// then 

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ arrayStorageSetItem)
/* harmony export */ });
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");



// import { projectArray } from "./domLogic";

 


function arrayStorageSetItem(name) { 

    
    localStorage.setItem("Project-Names", JSON.stringify(name));  
    
    
    
}  

// export function updateArrayStorage(item) { 
//     let thisProject = item; 

//     console.log(thisProject);
// }


// what properties would the updateStorage function have? 

// what would it take in? 

// I think you might have to update the array, 

// or filter out the items that were deleted, 

// then pass that to update storage, 


// so now next, I need to figure out how to 

// update my storage and array based on when user deletes 

// a single todo item, 

// something will need to be passed to local storage, 

// how can storage reflect changes in the DOM, 

// project is deleting from the DOM, but it still shows in array 

// and still shows in local storage, 

// after the project is deleted from the DOM, 

// the printValueToDOM function will need to be called again 

// so that can reflect the local storage to the DOM, 

// so I think the project array is going to be passed to local storage, 

// then the printvalue to dom function needs to called, so shwo to the DOM 

// what is inside local storage 

// continue to brainstorm how to reflect the change in deleting 

// projects from the DOM and how to update that in local storage. 



//  export function arrayStorageTodoItems(project) { 

//     localStorage.setItem("todoItems", JSON.stringify(project)); 
    
//  }






// export function getItemStorage() { 
//   let getName = localStorage.getItem("Project-Names"); 
  
//   console.log(getName); 

//   let projectNameObj = projectNameFactory(getName); 

//   console.log(projectNameObj);
// }






// my goal is to have indivdual project name objects, 

// I am able to create project names, but when I use objects it only adds onto, and does not create unique projects. 

// 




//     localStorage.setItem("user-input", projectArray); 

//     const projectNameStorage = localStorage.getItem("user-input");


















// export function storeUserValue(value) { 
//     let arr = [];

//     for (let i = 0; i < value.length; i++) { 
//         let projectNameInput = value[i]; 
//         console.log(projectNameInput);
//         arr.push(projectNameInput);

//     } 
//     console.log(arr); 
//     return arr; 
// } 

// just add values to the array 
// let projectArray = [];

// export function storeProjectName(value) { 

//     projectArray.push(value);

//     localStorage.setItem("user-input", projectArray); 

//     const projectNameStorage = localStorage.getItem("user-input");

//     // console.log(projectNameStorage);

//     // console.log(projectArray);
// } 




// function createProjectName(projectName) { 
//     return { 
//         projectName: projectName,
//     }
// }

// let newProject = new createProjectName("alec"); 

// console.log(newProject);
// let gArray = (function () {
//     let array = [];
//     return function (value) {
//         array.push(value);
//         return array;
//     }
// }()); 

// gArray(1); 
// gArray(2); 
// gArray(3); 
// gArray(4); 

//  function storeUserValue(value) { 
//     let array = []; 
//     console.log(array)
//     return function callThis (value) { 
//         array.push(value); 
//         return array
//     } 
// } 

// storeUserValue();






// find way to add items onto an array, I don't think it's smart to add one at a time, but more so like adding projects onto a single array 

    // think of a way to add into an array, look into closure and adding onto an array using closure. 

    // closure seems like the right idea but how can I make this work with the current code I have? 

    // well I think I did find a way to store the project names, just something doesn't seem right about the storage

    //  

// that array can be part of an obj, key into the array

// btn problem, appending too many input fields, conditional to prevent 

// correct array storage 

// local storage correctly 
 
// properly installing and using sass after the above is accomplised. 

/***/ }),

/***/ "./src/check-mark-svgrepo-com.png":
/*!****************************************!*\
  !*** ./src/check-mark-svgrepo-com.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/check-mark-svgrepo-com-856c6bef25e547c40ef2.png";

/***/ }),

/***/ "./src/cross-mark-svgrepo-com.png":
/*!****************************************!*\
  !*** ./src/cross-mark-svgrepo-com.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cross-mark-svgrepo-com-3d52c27cea623656bf8c.png";

/***/ }),

/***/ "./src/edit-svgrepo-com.svg":
/*!**********************************!*\
  !*** ./src/edit-svgrepo-com.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e72324ec9a9a40c10034.svg";

/***/ }),

/***/ "./src/plus-sign-for-todo-modal.svg":
/*!******************************************!*\
  !*** ./src/plus-sign-for-todo-modal.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cc614bbd91a52b52417.svg";

/***/ }),

/***/ "./src/trash-can-icon-to-delete-project.svg":
/*!**************************************************!*\
  !*** ./src/trash-can-icon-to-delete-project.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d9f58abce5fc8e9dff8.svg";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sU0FBUyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFdBQVcsTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFB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QUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7QUFNRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFtQjtBQUNyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxvREFBbUI7O0FBRTNCOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxzQkFBc0Isa0RBQWM7O0FBRXBDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLG9EQUFtQjs7QUFFekIsS0FBSzs7QUFFTCxxQkFBcUIsa0VBQVM7O0FBRTlCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNkIsOEJBQThCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOExBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2Qjs7QUFFbEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVTs7OztBQUlWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBSTs7O0FBR0o7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7OztBQUlKO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQiwyQkFBMkIsR0FBRztBQUM5QjtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QixzQ0FBc0M7QUFDOUQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixJQUFJOzs7O0FBSUo7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCOztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsZUFBZSxjQUFjO0FBQzdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBLE1BQU07OztBQUdOOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JuRUE7O0FBRUE7OztBQUdzQjs7QUFFQTs7QUFFRjs7QUFFRDs7QUFFaUY7O0FBRXBHLENBQXNFOztBQUV0RSxDQUFzRTs7QUFFdEU7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLLHdEQUFpQjs7QUFFdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJEQUFnQixDQUFDLG1EQUFZOzs7O0FBSTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7Ozs7O0FBT0E7Ozs7O0FBS0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmlDb0I7O0FBRXBCLFlBQVksZUFBZTs7QUFFM0IsQ0FBcUc7OztBQUd0Rjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7QUFFQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25OQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9jb25kaXRpb25hbExvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWlDQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFoQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gJGhlYWRlci1jb2xvcjogcmdiKDEwNywgMjEyLCAxMDcpO1xcblxcblxcbi8vIC5oZWFkZXItY29udGFpbmVyIHtcXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcXG4vLyAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XFxuLy8gICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbi8vICAgfSBcXG5cXG4gIC8vICogeyBcXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAvLyAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gIC8vIH0gXFxuXFxuICAvLyBzYXNzIHBsYXlncm91bmQgNS85LzIzIFxcblxcbi8vICAgICRib2R5LWNvbG9yOiByZWQ7XFxuXFxuLy8gICAgJHJhbmRvbS1jb2xvcjogeWVsbG93OyBcXG5cXG4gXFxuLy8gLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4vLyAgIGNvbG9yOiAkYm9keS1jb2xvcjtcXG4vLyB9XFxuXFxuXFxuLy8gI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQgeyBcXG4vLyAgIGNvbG9yOiAkcmFuZG9tLWNvbG9yO1xcbi8vICAgZm9udC1zaXplOiA0NnB4O1xcbiAgXFxuLy8gfSBcXG5cXG4jbmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZSB7IFxcbiAgZm9udC1zaXplOiAzcmVtOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rUmFzaGkrSGVicmV3OndnaHRAMjAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PVBhdHVhK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDAuNHJlbTsgKi9cXG4gIHdpZHRoOiA0NTBweDtcXG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLm1vZGFsLWhlYWRlci10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLkFkZC1Qcm9qZWN0LWJ0biB7XFxuICAvKiB3aWR0aDogNDBweDsgICovXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmlucHV0LWZpZWxkLW1vZGFsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHJpZ2h0OiA1NXB4OyAqL1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBsZWZ0OiAtMjEwcHg7XFxuICBib3R0b206IDE2MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcIm5hdiBtYWluXFxcIiBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2YmFyLWhvbWUtY29udGVudC10ZXh0LFxcbiNuYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyNywgMjI3KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmlucHV0LWZpZWxkLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmFkZC1idG4sXFxuLmNhbmNlbC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlO1xcbiAgbGVmdDogNjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgLyogZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuLmNyZWF0ZS10by1kby1mb3JtLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idG4tdG8tZG8taW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogLThweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiAucHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb24geyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LXNpemU6IDNyZW07IFxcbn0gICovXFxuLyogLnByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW4geyBcXG4gIGZvbnQtc2l6ZTogNXJlbTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbn0gICovXFxuI25hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi9cXG4uZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzLFxcbi5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuXFxuLmFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5lZGl0LWVsZW1lbnQtdG9kby1pdGVtLXN0eWxlcyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xcbn1cXG5cXG4uY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXMge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtaWNvbi10b2RvLWl0ZW0tc3R5bGVzIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsaW5lLWhlaWdodDogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjc1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBhZGQgdG9kbyBwb3AtdXAgbW9kYWwgKi9cXG4ubW9kYWwtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gLmZsZXgtZm9yLXRvZG8tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBsZWZ0OiAtMjk1cHg7XFxuICBib3R0b206IDU1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqL1xcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMzVweDtcXG4gIGxlZnQ6IC0yOTVweDtcXG4gIGJvdHRvbTogNTVweDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqL1xcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqL1xcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi9cXG4vKiBsZWZ0IG9mZiBoZXJlLCBmaXggdGhlIG1vZGFscyBmb3IgaXBhZCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICB9XFxuICBuYXYge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIH1cXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICBib3R0b206IDUwJTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH1cXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDI1NXB4O1xcbiAgfVxcbiAgLm1vZGFsID4gaW5wdXQge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tb2RhbCA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC03ZW07XFxuICB9XFxuICBuYXYge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuICAubW9kYWwtdG9kbyBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIGlucHV0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIC8qIGhlaWdodDogMTUwcHggICovXFxuICB9XFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNTVweDtcXG4gICAgdG9wOiAycHg7XFxuICB9XFxuICAvKiBsZWZ0IG9mZiBoZXJlIDUvOC8yMyAqL1xcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTUlO1xcbiAgICB0b3A6IDE1JTtcXG4gIH1cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIGgxIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsLWVkaXQtdG9kbyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICAgIHRvcDogODAlO1xcbiAgfVxcbiAgLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQge1xcbiAgICAvKiB3aWR0aDogMjUwcHg7ICAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlO1xcbiAgICBib3R0b206IDkwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICB9XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gIH1cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgfVxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgfVxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMjU1cHg7XFxuICB9XFxuICAubW9kYWwgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTdlbTtcXG4gIH1cXG4gIG5hdiB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICB9XFxuICAubW9kYWwtdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaDEge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgLyogaGVpZ2h0OiAxNTBweCAgKi9cXG4gIH1cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTE1NXB4O1xcbiAgICB0b3A6IDJweDtcXG4gIH1cXG4gIC8qIGxlZnQgb2ZmIGhlcmUgNS84LzIzICovXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICAgIHRvcDogMTUlO1xcbiAgfVxcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8gaDEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAubW9kYWwtZWRpdC10b2RvIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gICAgdG9wOiAxNSU7XFxuICB9XFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7XFxuICAgIC8qIHdpZHRoOiAyNTBweDsgICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNSU7XFxuICAgIGJvdHRvbTogOTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTsgKi9cXG4gIH1cXG4gICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAjcHJvamVjdC10b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG4gIC8qIC50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMgeyBcXG4gICAgbGluZS1oZWlnaHQ6IDA7IFxcbiAgfSAqL1xcbn1cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxufSAqL1xcbi8qIFxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTsgXFxuICAgIGJvdHRvbTogNTAlOyBcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH0gXFxuXFxuICAubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcblxcbiAgfSBcXG5cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxNTBweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsID4gaW5wdXQgeyBcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgfVxcbn0gKi9cXG4vKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcbi8qIGJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbi8qIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTsgKi9cXG4vKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjsgKi9cXG4vKiBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICBcXFwibmF2IG1haW5cXFwiXFxuICBcXFwibmF2IG1haW5cXFwiOyAqL1xcbi8qIH0gKi9cXG4vKiBuYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOztcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59ICovXFxuLyogLm5hdmJhci1ob21lLWNvbnRlbnQtdGV4dCwgXFxuLm5hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAgKi9cXG4vKiBoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufSAgKi9cXG4vKiBtYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7XFxufSAqL1xcbi8qIC5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59ICAqL1xcbi8qIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHsgXFxuIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuLyogI2FkZC1wcm9qZWN0LWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAgKi9cXG4vKiAjYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcbi8qIC5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn0gICovXFxuLyogLmlucHV0LWZpZWxkLXRleHQgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4OyBcXG59ICAqL1xcbi8qIC5idG4tY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07IFxcbn0gICovXFxuLyogXFxuLmFkZC1idG4sIFxcbi5jYW5jZWwtYnRuIHsgXFxuICBmb250LXNpemU6IDEuMnJlbTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuLyogLmFkZC1idG4geyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gICovXFxuLyogXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lcnsgXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuLyogcG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogODAlOyBcXG5sZWZ0OiA2MCU7IFxcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5mb250LXNpemU6IDEuNXJlbTtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuaGVpZ2h0OiA1MCU7IFxcbndpZHRoOiA1MCU7ICovXFxuLyogcGFkZGluZzogMjVweDsgICovXFxuLyogZm9udC1zaXplOiAzcmVtO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmNvbG9yOiBibGFjazsgKi9cXG4vKiAuc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59ICAqL1xcbi8qIFxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICAgKi9cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuLyogLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSAgKi9cXG4vKiAuc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufSAqL1xcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG4vKiAucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICAqL1xcbi8qIC5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQUE7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFD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R0Y7RUFtR0E7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7RUFqR0Y7QUFDRjtBQXFHQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlFQUFBO0lBQ0Esc0JBQUE7RUFuR0Y7RUFzR0E7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpRUFBQTtFQXBHRjtFQXVHQTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtFQXJHRjtBQUNGO0FBMEdBO0VBQ0c7SUFDQyxhQUFBO0lBQ0EsaUJBQUE7RUF4R0Y7RUEyR0E7O0tBQUE7QUF2R0Y7QUE2R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBbURBOzs2TEFBQTtBQUtBOzs7bUJBQUE7QUFJSSx1Q0FBQTtBQUNGLHNDQUFBO0FBQ0E7OztlQUFBO0FBSUYsTUFBQTtBQUVBOzs7Ozs7O0dBQUE7QUFTQTs7Ozs7O0lBQUE7QUFRQTs7SUFBQTtBQUlBOzs7O0dBQUE7QUFNQTs7Ozs7SUFBQTtBQU9BOzs7OztHQUFBO0FBT0E7Ozs7OztLQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7OztJQUFBO0FBS0E7OztJQUFBO0FBSUE7Ozs7Ozs7SUFBQTtBQVNBOztJQUFBO0FBR0E7Ozs0QkFBQTtBQUlFOzs7Ozs7Ozs7O2FBQUE7QUFXQSxvQkFBQTtBQUNBOztlQUFBO0FBS0Y7Ozs7Ozs7OztJQUFBO0FBVUE7Ozs7Ozs7Ozs7S0FBQTtBQVlBOztHQUFBO0FBSUE7Ozs7Ozs7Ozs7SUFBQTtBQVlBOzs7O0dBQUE7QUFNQTs7R0FBQTtBQUlBOzs7O0tBQUE7QUFNQTs7OztJQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyAqLyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuLm1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMC40cmVtOyAqL1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAzO1xcbn0gIFxcblxcbi5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn0gXFxuXFxuLkFkZC1Qcm9qZWN0LWJ0biB7IFxcbiAgLyogd2lkdGg6IDQwcHg7ICAqL1xcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgXFxufSBcXG5cXG4uaW5wdXQtZmllbGQtbW9kYWwgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG5cXG4uY2xvc2UtYnRuIHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiByaWdodDogNTVweDsgKi9cXG4gIGZvbnQtc2l6ZTogMXJlbTsgXFxuICB3aWR0aDogMjVweDsgXFxuICBsZWZ0OiAtMjEwcHg7IFxcbiAgYm90dG9tOiAxNjBweDsgIFxcbn1cXG5cXG4ub3ZlcmxheSB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4jbmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59IFxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59IFxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyNywgMjI3KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSBcXG5cXG4uaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICBcXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gXFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSBcXG5cXG4uaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gXFxuXFxuLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSBcXG5cXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSBcXG5cXG4uYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSBcXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlOyBcXG4gIGxlZnQ6IDYwJTsgXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTAlOyBcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4OyBcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrOyAqL1xcbn0gICBcXG5cXG4uc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59IFxcblxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICBcXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovIFxcblxcbi5jcmVhdGUtdG8tZG8tZm9ybS1idG4geyBcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSBcXG5cXG4jcHJvamVjdC10b2Rvcy1jb250YWluZXIgeyBcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IHJvdztcXG4gZ2FwOiAwLjVlbTtcXG4gZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufVxcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG5cXG4ucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gIFxcblxcbi5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuLyogLnByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1zaXplOiAzcmVtOyBcXG59ICAqL1xcblxcblxcbi8qIC5wcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluIHsgXFxuICBmb250LXNpemU6IDVyZW07IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG59ICAqL1xcblxcblxcbiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHsgXFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn0gXFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi8gXFxuXFxuLmRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlcywgXFxuLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn1cXG5cXG4uYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07IFxcbn0gXFxuXFxuLmVkaXQtZWxlbWVudC10b2RvLWl0ZW0tc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDMwcHg7IFxcbiAgd2lkdGg6IDMwcHg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC4yMGVtO1xcbn1cXG5cXG4uY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXMgeyBcXG4gIHdpZHRoOiAzMHB4OyBcXG4gIGhlaWdodDogMzBweDsgXFxufSBcXG5cXG4uZGVsZXRlLWljb24tdG9kby1pdGVtLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGxpbmUtaGVpZ2h0OiAwLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNzVweDsgXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgYWRkIHRvZG8gcG9wLXVwIG1vZGFsICovIFxcblxcbi5tb2RhbC10b2RvIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIC5mbGV4LWZvci10b2RvLW1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBpbnB1dCB7IFxcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59IFxcblxcbi5tb2RhbC10b2RvID4gbGFiZWwgeyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcbi5tb2RhbC10b2RvIHsgXFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgd2lkdGg6IDM1cHg7IFxcbiAgbGVmdDogLTI5NXB4OyBcXG4gIGJvdHRvbTogNTVweDsgIFxcblxcbn1cXG5cXG5cXG5cXG4ubW9kYWwtdG9kbyBsYWJlbCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBoMSB7IFxcbiAgZm9udC1zaXplOiAyLjVyZW07IFxcbn0gXFxuXFxuXFxuLyogYmVnaW4gZWRpdCB0b2RvIG1vZGFsIHN0eWxlcyBoZXJlICovIFxcblxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59IFxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaW5wdXQgeyBcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvID4gbGFiZWwgeyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQgeyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyB7IFxcbiAgei1pbmRleDogMjtcXG59IFxcblxcbi5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgd2lkdGg6IDM1cHg7IFxcbiAgbGVmdDogLTI5NXB4OyBcXG4gIGJvdHRvbTogNTVweDsgIFxcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBoMSB7IFxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqLyBcXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDEuNHJlbTsgKi9cXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTsgXFxufSBcXG5cXG4uZmxleC1mb3ItZGVsZXRlLWJ0bi1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtOyBcXG59IFxcblxcblxcbi5vdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG4geyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8geyBcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcblxcblxcbi8qIG1lZGlhIHF1ZXJ5IHByYWN0aWNlIHdvcmtpbmcgb24gcmVzcG9uc2UgZGVzaWduLCBcXG5cXG5tYWtpbmcgc3VyZSBldmVyeXRoaW5nIGxvb2tzIG9rIG9uIG1vYmlsZSwgXFxuXFxubGV0cyBzcGVuZCBhIGxpdHRsZSB0aW1lLCBqdXN0IHBsYXlpbmcgYXJvdW5kIHdpdGggdGhlIGxheW91dCBcXG5cXG5zaHJpbmtpbmcgaXQncyBzaXplICovIFxcblxcblxcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi8gXFxuXFxuLyogbGVmdCBvZmYgaGVyZSwgZml4IHRoZSBtb2RhbHMgZm9yIGlwYWQgKi8gXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE4MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICAjcHJvamVjdC10b2Rvcy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgfVxcbn1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9IFxcblxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gICAgZm9udC1zaXplOiAyLjJyZW07IFxcbiAgfSAgXFxuXFxuICBtYWluIHsgXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICB3aWR0aDogYXV0bzsgXFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgfSBcXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTsgXFxuICAgIGJvdHRvbTogNTAlOyBcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH0gXFxuICBcXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDI1NXB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogMjMwcHg7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsID4gYnV0dG9uIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAuY2xvc2UtYnRuIHsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTdlbTtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgaGVpZ2h0OiA1MDBweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsLXRvZG8geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDEwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLXRvZG8gaDEgeyBcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsLXRvZG8gbGFiZWwgeyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsLXRvZG8gaW5wdXQgeyBcXG4gICAgd2lkdGg6IGF1dG87IFxcbiAgICAvKiBoZWlnaHQ6IDE1MHB4ICAqL1xcbiAgfSBcXG5cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNTVweDtcXG4gICAgdG9wOiAycHg7XFxuICB9IFxcblxcbiAgLyogbGVmdCBvZmYgaGVyZSA1LzgvMjMgKi8gXFxuXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7IFxcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTUlOyBcXG4gICAgdG9wOiAxNSU7XFxuICB9IFxcblxcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8gaDEgeyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1lZGl0LXRvZG8geyBcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAyMCU7IFxcbiAgICB0b3A6IDgwJTtcXG4gIH0gXFxuXFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7IFxcbiAgICAvKiB3aWR0aDogMjUwcHg7ICAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgYm90dG9tOiA5MCU7XFxuICB9XFxufVxcblxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcXG5cXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiAgICBmb250LXNpemU6IDIuMnJlbTsgXFxuICB9ICBcXG5cXG4gIG1haW4geyBcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG4gIFxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMjU1cHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiAyMzBweDsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBidXR0b24geyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfSBcXG5cXG4gIC5jbG9zZS1idG4geyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtN2VtO1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICBoZWlnaHQ6IDUwMHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwtdG9kbyB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjRyZW07XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcGFkZGluZzogMS4zcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogMTAlOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuXFxuICAubW9kYWwtdG9kbyBoMSB7IFxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH0gXFxuXFxuICAubW9kYWwtdG9kbyBsYWJlbCB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAubW9kYWwtdG9kbyBpbnB1dCB7IFxcbiAgICB3aWR0aDogYXV0bzsgXFxuICAgIC8qIGhlaWdodDogMTUwcHggICovXFxuICB9IFxcblxcbiAgLmNsb3NlLXRoZS10b2RvLW1vZGFsIHsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTE1NXB4O1xcbiAgICB0b3A6IDJweDtcXG4gIH0gXFxuXFxuICAvKiBsZWZ0IG9mZiBoZXJlIDUvOC8yMyAqLyBcXG5cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHsgXFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxNSU7IFxcbiAgICB0b3A6IDE1JTtcXG4gIH0gXFxuXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyBoMSB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsLWVkaXQtdG9kbyB7IFxcbiAgICB3aWR0aDogMjUwcHg7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE1JTsgXFxuICAgIHRvcDogMTUlO1xcbiAgfSBcXG5cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHsgXFxuICAgIC8qIHdpZHRoOiAyNTBweDsgICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNSU7IFxcbiAgICBib3R0b206IDkwJTtcXG4gIH1cXG59IFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgfVxcblxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gIH1cXG59IFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHsgXFxuICAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfSBcXG5cXG4gIC8qIC50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMgeyBcXG4gICAgbGluZS1oZWlnaHQ6IDA7IFxcbiAgfSAqL1xcblxcbn1cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxufSAqL1xcbiBcXG4vKiBcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHsgXFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7IFxcbiAgICBib3R0b206IDUwJTsgXFxuICAgIHdpZHRoOiAyZW07XFxuICB9IFxcbiAgXFxuICAubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcblxcbiAgfSBcXG5cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxNTBweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsID4gaW5wdXQgeyBcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgfVxcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcblxcblxcbi8qIGJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICAvKiBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7ICovXFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjsgKi8gXFxuICAvKiBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiOyAqL1xcbi8qIH0gKi9cXG5cXG4vKiBuYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOztcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59ICovXFxuXFxuLyogLm5hdmJhci1ob21lLWNvbnRlbnQtdGV4dCwgXFxuLm5hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAgKi9cXG5cXG4vKiBoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufSAgKi9cXG5cXG4vKiBtYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7XFxufSAqL1xcblxcbi8qIC5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59ICAqL1xcblxcbi8qIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHsgXFxuIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuLyogI2FkZC1wcm9qZWN0LWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAgKi9cXG5cXG4vKiAjYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcblxcbi8qIC5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn0gICovXFxuXFxuLyogLmlucHV0LWZpZWxkLXRleHQgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4OyBcXG59ICAqL1xcblxcbi8qIC5idG4tY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07IFxcbn0gICovXFxuLyogXFxuLmFkZC1idG4sIFxcbi5jYW5jZWwtYnRuIHsgXFxuICBmb250LXNpemU6IDEuMnJlbTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuXFxuLyogLmFkZC1idG4geyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gICovXFxuLyogXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lcnsgXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgwJTsgXFxuICBsZWZ0OiA2MCU7IFxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTsgXFxuICB3aWR0aDogNTAlOyAqL1xcbiAgLyogcGFkZGluZzogMjVweDsgICovXFxuICAvKiBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjazsgKi9cXG4gIFxcblxcbi8qIC5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gIHdpZHRoOiBhdXRvO1xcbn0gICovXFxuLyogXFxuLnBvcC11cC1jb250ZW50IHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgO1xcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICAqL1xcblxcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4vKiAuY2xvc2UtYnRuLXRvLWRvLWlucHV0IHsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7IFxcbiAgbGVmdDogLThweDsgXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4OyBcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59ICAqL1xcblxcbi8qIC5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4OyBcXG59ICovXFxuXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgICovXFxuXFxuLyogLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYgeyBcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiOyBcblxuLy8gZnVuY3Rpb24gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCkgeyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSEVZWVlcIik7XG5cbi8vICAgICAvLyBsZXQgdGhlUHJvamVjdEFycmF5ID0gYXJyO1xuXG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgLy8gICAgIGxldCBwcm9qZWN0QXJyYXlJbmRleCA9IHRoZVByb2plY3RBcnJheVtpXTsgXG5cbi8vICAgICAvLyAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5SW5kZXgpO1xuICAgIFxuLy8gICAgIC8vIH1cbi8vIH0gXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cbi8vIEkgYW0gZ2V0dGluZyBhIGxpdHRsZSBjb25mdXNlZCBvbiBob3cgdG8gYWRkIGNvbmRpdGlvbmFsIGxvZ2ljLCB0aGF0IHdpbGwgcHJldmVudCBhIHVzZXIgZnJvbSBhZGRpbmcgbXV0bGlwbGUgcHJvamVjdHMgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBPbmNlIHByb2plY3QgaXMgY2xpY2tlZCwgZGlzcGxheSB0aGF0IHByb2plY3QsIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCBjbGVhciB0aGUgb2xkIGFuZCBtYWtlIHdheSBmb3IgdGhlIG5ldywgXG5cbi8vIEkndmUgYmVlbiB0cnlpbmcgdG8gY2FsbCB0aGUgZnVuY3Rpb24gYmVmb3JlIHRoZSB2YWx1ZXMgYXJlIGFwcGVuZGVkLCB0byBjaGVjayBpZiBJdCdzIHNhZmUgdG8gYXBwZW5kIHRoZSB2YWx1ZSBvciBjbGVhciBhbmQgbWFrZSB3YXkgZm9yIGEgbmV3IG9uZSwgXG5cbi8vIGhvdyBjYW4gSSBwcmV2ZW50IHVzZXIgZnJvbSBjbGlja2luZyBtdWx0aXBsZSBwcm9qZWN0cywgYW5kIGFkZGluZyB0aGVtIGFsbCwgXG5cbi8vIHlvdSBjYW50IGRpc2FibGUgdGhlIGJ0biwgXG5cbi8vIHlvdSBjYW5ub3QgbWl4IHRoZSBET00gbG9naWMgYW5kIGNvbmRpdGlvbmFsIGxvZ2ljLCBcblxuLy8gdGhpbmtpbmcgY29uY2VwdHVhbGx5LCByaWdodCBub3cgdGhlIHVzZXIgY2FuIHByZXNzIHRoZSBwcm9qZWN0IG5hbWUgYW5kIGFwcGVuZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIGhvdyBjYW4gSSBqdXN0IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIGNsZWFyIHRoZSBjb250ZW50cyBvZiBvbmUgYW5kIG1ha2UgbmV3LiAiLCJcbmltcG9ydCBcIi4vc3RvcmFnZVwiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlU2V0SXRlbSBmcm9tIFwiLi9zdG9yYWdlLmpzXCIgXG5cbmltcG9ydCBnZXRJdGVtU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7IFxuXG5pbXBvcnQgIHByb2plY3ROYW1lTG9vcCBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljIGZyb20gXCIuL2NvbmRpdGlvbmFsTG9naWMuanNcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVRvZG9JdGVtcyBmcm9tIFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgcGx1c1NpZ24gZnJvbSBcIi4vcGx1cy1zaWduLWZvci10b2RvLW1vZGFsLnN2Z1wiOyBcblxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4taWNvbi10by1kZWxldGUtcHJvamVjdC5zdmdcIjtcblxuLy8gaW1wb3J0IGNyb3NzTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY3Jvc3MtbWFyay1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbi8vIGltcG9ydCBjaGVja01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2NoZWNrLW1hcmstc3ZncmVwby1jb20uc3ZnXCI7IFxuXG5pbXBvcnQgZWRpdEJ0bkZvclRvZG8gZnJvbSBcIi4vZWRpdC1zdmdyZXBvLWNvbS5zdmdcIjtcblxuLy8gaW1wb3J0IHVwZGF0ZUFycmF5U3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxubGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbmxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxubGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbEZvckVkaXRUb2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZWRpdC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWwtZWRpdFwiKVswXTsgXG5cbmxldCBlZGl0VG9kb1Rhc2tzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1lZGl0aW5nLXRvZG8tdGFza3NcIik7XG5cbmxldCBjdXJyZW50UHJvamVjdCBcblxuZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG5mdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5cblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7IFxuXG5cbmZ1bmN0aW9uIHByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKSB7IFxuICBcbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKTsgXG5cblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbmZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxucHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbiBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4gIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG59KSBcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgIFxuXG5cblxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVcbiAgICBsZXQgcHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3RJbmRleC5wcm9qZWN0OyBcblxuICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4gICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcbiAgICBcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgfSlcblxuXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gcGx1c1NpZ247IFxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gdHJhc2hJY29uO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlc1wiKTtcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcbiAgICAgXG4gICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuICAgIH0pXG4gIH1cbn0gXG5cbiBcblxuZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSkgIFxuXG5lZGl0VG9kb1Rhc2tzRm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTsgXG5cbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuXG5sZXQgY2xvc2VCdG5FZGl0VG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1lZGl0LXRvZG8tbW9kYWwtYnRuXCIpOyBcblxuY2xvc2VCdG5FZGl0VG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn0pXG5cblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSkgXG5cblxubGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbmNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG59KSBcblxuXG5sZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbiAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbiAgbGV0IHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4gIGxldCB0YXNrSG9sZGVyU3R5bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKVswXTtcblxuICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbiAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbiAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4gIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAvLyBpdCBpcyBkZWxldGluZyBmcm9tIHN0b3JhZ2UsIGl0IGlzIGp1c3Qgbm90IFxuXG4gIC8vIGRlbGV0aW5nIHRoZSB0b2RvIGZyb20gdGhlIERPTSwgXG4gIC8vIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5yZW1vdmUoKSBcblxuICBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcbiAgXG5cbn0pICBcblxuXG5cblxuXG5sZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1jcmVhdGluZy10b2RvLXRhc2tcIik7XG5cbmZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuXG5sZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5hZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiAgeyBcbiAgXG4gIGUucHJldmVudERlZmF1bHQoKTsgXG5cblxuXG4gIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuICAvLyBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4gIC8vIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIFxuICBsZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuICBcbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb3NGb3JQcm9qZWN0KTsgXG4gIFxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG5kaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5mb3JtSW5wdXQucmVzZXQoKTtcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxufSkgICBcblxuZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbiAgXG4gIHJldHVybiB7IFxuICAgIHRpdGxlOiB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgIGR1ZURhdGU6IGR1ZURhdGUgXG4gIH0gXG4gIFxufSAgICBcblxuXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiB3aXRoaW4gdGhlIHRvZG8gZmFjdG9yeSBcbi8vIHRoYXQgdGFrZXMgdGhlIGluZGV4LCBcblxubGV0IGdldFByb2plY3RJZCBcblxubGV0IGNsaWNrZWRUb2RvRWRpdEl0ZW1cblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpIHsgXG5cbiAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4gICAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICBcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIik7XG4gIFxuICAgIFxuICAgIFxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4gICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcblxuICAgIGxldCBwcm9qZWN0VW5pcXVlSWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgICBsZXQgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXNcIik7XG5cbiAgICBsZXQgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGVkaXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlZGl0LWVsZW1lbnQtdG9kby1pdGVtLXN0eWxlc1wiKTtcblxuICAgIGVkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXggPSBpOyBcblxuICAgIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4XTsgXG5cbiAgICAgIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICAgICBcbiAgICAgbGV0IGFkZEJ0bldpdGhpblRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbC1lZGl0XCIpOyBcbiAgICAgIFxuICAgICBhZGRCdG5XaXRoaW5Ub2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIGxldCB0aXRsZUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1lZGl0LWlucHV0LWZvcm1cIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG8tZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2stZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBlZGl0VG9kb09iamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvLCBkZXNjcmlwdGlvbklucHV0VmFsdWVFZGl0VG9kbywgZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbywgcHJpb3JpdHlJbnB1dFZhbHVlRWRpdFRvZG8pOyBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRUb2RvRWRpdEl0ZW0pO1xuICAgICAgICBcbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS50aXRsZSA9IHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvOyBcbiAgICAgICAgXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0VmFsdWVFZGl0VG9kbzsgXG4gICAgICAgIFxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXRWYWx1ZUVkaXRUb2RvOyBcblxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dFZhbHVlRWRpdFRvZG87IFxuXG4gICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpO1xuXG4gICAgICB9KVxuICAgICAgXG4gICAgXG4gICAgfSkgXG5cbiAgICBlZGl0RWxlbWVudC5zcmMgPSBlZGl0QnRuRm9yVG9kbzsgXG5cbiAgICBjaGVja2JveEVsZW1lbnQudHlwZSA9IFwiY2hlY2tib3hcIjsgXG5cbiAgICBsZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb24tdG9kby1pdGVtLXN0eWxlc1wiKTtcblxuICAgIGRlbGV0ZUljb24uaWQgPSBcImRlbGV0ZS1idG4taW5zaWRlLXRvZG9cIjsgXG5cbiAgZGVsZXRlSWNvbi5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnNwbGljZShkZWxldGVJY29uLmRhdGFzZXQuaW5kZXgsIDEpO1xuICAgICAgXG4gICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG4gICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gICAgfSkgXG5cbiAgICBkZWxldGVJY29uLnNyYyA9IHRyYXNoSWNvbjsgXG5cbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7IFxuXG4gICAgdG9kb1RpdGxlLmFwcGVuZChzZWxlY3RlZFByb2plY3QudGl0bGUpO1xuXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG5cbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIlxuXG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgXG4gICAgdG9kb1ByaW9yaXR5LmFwcGVuZChzZWxlY3RlZFByb2plY3QucHJpb3JpdHkpO1xuICAgIFxuICAgIHRvZG9EdWVEYXRlLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZHVlRGF0ZSk7XG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvVGl0bGUpOyAgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1ByaW9yaXR5KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZSk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChkZWxldGVJY29uKTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChlZGl0RWxlbWVudCk7XG5cbiAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuICB9ICBcblxuICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gbGV0IGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCIpOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyhkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbSk7IFxuXG4gIC8vIGxldCB0YXNrSG9sZGVyQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpWzBdOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyh0YXNrSG9sZGVyQ2xhc3MpO1xuXG4gIC8vIGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAvLyAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIHRvZG8gaGFzIGJlZW4gcHJlc3NlZCFcIik7XG4gIC8vICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdElkKTsgXG5cbiAgLy8gICAgIC8vICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LmlkLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgLy8gICBsZXQgaWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICAgaWYgKGN1cnJlbnRQcm9qZWN0SWQgPT09IGlkKSB7IFxuICAvLyAgICAgLy8gICAgIC8vIGlmIGlkJ3MgbWF0Y2ggcmVtb3ZlIHRoZSBzZWxlY3RlZCBwcm9qZWN0LCBcbiAgLy8gICAgIC8vICAgfSBlbHNlIHsgXG4gIC8vICAgICAvLyAgICAgcmV0dXJuO1xuICAvLyAgICAgLy8gICB9XG5cbiAgLy8gICAgIC8vICB9IFxuXG4gIC8vICAgICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uKG9uZVByb2plY3RJZCkgeyBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gIC8vICAgICB9KVxuICAvLyAgIH0pXG4gIFxuIH0gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuLy8gaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG4vLyBpbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuLy8gaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuLy8gaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbi8vIGltcG9ydCBhcnJheVN0b3JhZ2VUb2RvSXRlbXMgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG4vLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG4vLyBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbi8vIGxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG4vLyBsZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxuLy8gbGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbi8vIGxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBjdXJyZW50UHJvamVjdCBcblxuLy8gZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSBcblxuLy8gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG4vLyBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9IFxuXG4vLyBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKTtcblxuLy8gZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIH1cblxuLy8gcHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbi8vICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4vLyAgIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG4vLyB9KSBcblxuLy8gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gfSkgXG5cblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHByb2plY3Q6IG5hbWUsXG4vLyAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4vLyAgICAgdG9kb0l0ZW1zOiBbXSxcbi8vICAgfVxuLy8gfSBcblxuLy8gYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbi8vICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG4vLyB9KSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuLy8gICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbi8vICAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuLy8gICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4vLyAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG4gICAgXG4vLyAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbmRleDsgXG4gICAgICBcbi8vICAgICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbi8vICAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbi8vICAgICAgIH0pXG5cblxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLnNyYyA9IFwiLi4vcGx1cy1zaWduLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlc1wiKTtcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLnNyYyA9IFwiLi4vdHJhc2hjYW4tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlc1wiKTtcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpOyBcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuLy8gICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcbiAgICAgXG4vLyAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH0gXG5cbiBcblxuLy8gZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSkgIFxuXG4vLyBsZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG4vLyBjYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyB9KSBcblxuXG4vLyBsZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuLy8gY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbi8vIH0pIFxuXG5cbi8vIGxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG4vLyBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4vLyAgIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuLy8gICBsZXQgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTtcblxuLy8gICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbi8vICAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbi8vICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4vLyAgIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4vLyAgIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuLy8gICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcblxuXG4vLyB9KSAgXG5cblxuLy8gbGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cblxuXG4vLyBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1jcmVhdGluZy10b2RvLXRhc2tcIik7XG5cbi8vIGZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cblxuLy8gYWRkQnRuVG9Eb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cblxuLy8gICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbi8vICAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuLy8gICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kb1wiKTsgXG5cbi8vICAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlID0gZGVzY3JpcHRpb25Gb3JUb2RvLnZhbHVlOyBcbiAgXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlKTsgXG5cbi8vICAgbGV0IGR1ZURhdGVGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgZHVlRGF0ZUZvclRvZG9WYWx1ZSA9IGR1ZURhdGVGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvVmFsdWUgPSBwcmlvcml0eUZvclRvZG8udmFsdWU7ICBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChwcmlvcml0eUZvclRvZG9WYWx1ZSk7XG5cbi8vICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0c1RvZG9zID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zOyBcblxuLy8gICAvLyBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICBcbi8vICAgbGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcbiAgXG4vLyAgIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRvZG9zRm9yUHJvamVjdCk7IFxuICBcbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuLy8gLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuLy8gfSkgICBcblxuLy8gZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbi8vICAgcmV0dXJuIHsgXG4vLyAgICAgdGl0bGU6IHRpdGxlLCBcbi8vICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuLy8gICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4vLyAgICAgZHVlRGF0ZTogZHVlRGF0ZSBcbi8vICAgfVxuLy8gfSAgICAgXG5cbi8vIC8vIHByb2JsZW0gaXMgYXBwZW5kaW5nIGFuZCBkaXNwbGF5aW5nIHRvZG8gdmFsdWVzIFxuXG4vLyAvLyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gLy8gaXNzdWUgaXMgc2F2aW5nIGV2ZXJ5IHNpbmdsZSBpbnB1dCBhcyBhIG5ldyBhcnJheSBlbnRyeSwgXG5cbi8vIC8vIFxuXG4vLyBsZXQgZ2V0UHJvamVjdElkXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmdhcCA9IFwiMmVtXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG5cbi8vICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuLy8gICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gIFxuICAgIFxuLy8gICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4vLyAgICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcbiAgICBcbi8vICAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuICAgIFxuLy8gICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuICAgIFxuLy8gICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuLy8gICAgIGxldCBlZGl0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3JjID0gXCIuLi9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjAuMjBlbVwiO1xuXG5cblxuLy8gICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjsgXG5cbi8vICAgICB0b2RvVGl0bGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC50aXRsZSk7XG5cbi8vICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcblxuLy8gICAgIHRvZG9EZXNjcmlwdGlvbi5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcblxuLy8gICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiXG5cbi8vICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBcbi8vICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5wcmlvcml0eSk7XG4gICAgXG4vLyAgICAgdG9kb0R1ZURhdGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kdWVEYXRlKTtcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9UaXRsZSk7ICBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTsgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtibHVlXCI7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxZW1cIjsgXG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS53aWR0aCA9IFwiMjc1cHhcIjsgXG5cbi8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuLy8gICAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcbi8vICAgfSBcbiAgXG4vLyAgfSBcblxuXG4vLyBwcmFjdGljZSB3aXRoIG9iamVjdHMgXG5cbi8vIGxldCBhcnJheTEgPSBbXTtcblxuLy8gY29uc3QgVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkYXRlKSB7XG4vLyAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbi8vICAgdGhpcy5kYXRlID0gZGF0ZTtcbi8vIH07XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgIGxldCB4eXogPSBuZXcgVG9kbyhgJHtpfSB0aXRsZWAsIGkpXG4vLyAgIGFycmF5MS5wdXNoKHh5eik7XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKGFycmF5MSkgXG5cblxuLy8gcHJhY3RpY2UgbWFraW5nIG9iamVjdHMgXG5cbi8vIHB1c2hpbmcgaW50byBhbiBhcnJheSBcblxuLy8gaXRlcmF0aW5nIHRocm91Z2ggdGhlIGFycmF5LCBcblxuLy8gZ2V0IGVhY2ggZmllbGQgYnkgaXQncyBrZXksICBcblxuLy8gbGV0IG5ld0FyciA9IFtdOyBcblxuLy8gZnVuY3Rpb24gY3JlYXRpbmdPYmplY3RzKHRpdGxlLGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgeyBcbi8vICAgY29uc3QgbmV3T2JqZWN0ID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0gXG4vLyAgIG5ld0Fyci5wdXNoKG5ld09iamVjdCk7IFxuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspIHsgXG4gICBcbi8vICAgICBsZXQgdGl0bGUgPSBuZXdBcnJbMF0udGl0bGU7XG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uID0gbmV3QXJyWzBdLmRlc2NyaXB0aW9uOyBcbi8vICAgICBsZXQgZHVlRGF0ZSA9IG5ld0FyclswXS5kYXRlO1xuLy8gICAgIGxldCBwcmlvcml0eUxldmVsID0gbmV3QXJyWzBdLnByaW9yaXR5O1xuICAgIFxuICAgIFxuLy8gICB9XG4vLyB9IFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJBbGVjXCIsIFwid29ya2luZyBvbiB0b2RvLWxpc3RcIiwgXCI0LzIwLzIzXCIsIFwiSGlnaFwiKTsgIFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJIZWxsb1wiLCBcIkNoZWNrIDEuLjJcIiwgXCI2LzIwLzIzXCIsIFwiSGlnaFwiKTsgXG5cbi8vIGdldHRpbmcgYWxsIHRoZSBrZXlzIGZyb20gdGhlIGZpcnN0IG9iaiBpbiB0aGUgYXJyYXlcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLnRpdGxlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRlc2NyaXB0aW9uKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRhdGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0ucHJpb3JpdHkpOyBcblxuLy8gZ2V0dGluZyBhbGwgdGhlIGtleXMgZnJvbSB0aGUgc2Vjb25kIG9iaiBpbiB0aGUgYXJyYXkgXG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS50aXRsZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kYXRlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLnByaW9yaXR5KTsgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAvLyBpdCB3YXMgdGhlIGxvb3AsIFtpXSB3YXMgdGFraW5nIGluIGEgc2luZ2xlIHZhcmlhYmxlIFxuXG4gLy8gbm93IHdlIGhhdmUgdGhlIHRvZG8gaXRlbSB3aXRoaW4gYSBzaW5nbGUgZGl2IGFuZCBzdHlsZSBcblxuLy8gZWFjaCB0b2RvIGl0ZW0gaXMgaW5zaWRlIGl0J3Mgb3duIGRpdiwgXG5cbi8vIGVhY2ggdG9kbyBpdGVtIG5lZWRzIHRvIGJlIGluc2lkZSBvbmUgZGl2LCBcblxuLy8gTk9UIEVBQ0ggVE9ETyBJVEVNIElOU0lERSBBIERJViwgXG5cbi8vIGdldCBhbGwgdGhlIHRvZG8ncy4gXG5cblxuLy8gSSBkb250IHVuZGVyc3RhbmQgd2h5IHRoaXMgaXMgc28gZnVja2luZyBjb25mdXNpbmcsIFxuXG4vLyBpIGp1c3Qgd2FudCBlYWNoIHRvZG8gdG8gYmUgaXQncyBvd24gZGl2LCBcblxuLy8gdGhlbiBhcHBlbmQgdG8gdGhlIEZVQ0tJTkcgQ09OVEFJTkVSISEhIFxuXG4vLyB1c2UgYSBsb29wLCBnZXQgcHJvamVjdCwgYXBwZW5kIHRvIGRpdiwgdGhlbiBhcHBlbmQgdG8gc2VjdGlvbiwgXG5cbi8vIHdoeSBhcmUgdGhleSBzdGlsbCBidW5jaGVkIHRvZ2V0aGVyPz8/IFxuXG5cbi8vIGhvdyBjYW4gSSBtYWtlIGVhY2ggc2V0IG9mIHRvZG9zIGEgc2VwZXJhdGUgZGl2Pz8gXG5cbi8vIGFwcGVuZCB0aGUgdG9kbydzIHRvIGEgZGl2IHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cblxuLy8gc3R5bGUgZWFjaCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cbi8vIExvb2sgb3ZlciBjb2RlLCBcblxuLy8gSSB3YW50IHRvIGRpc3BsYXkgdGhlIHRvZG8ncyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gaG93IGFtIEkgYWRkaW5nIHRoZSB0b2RvJ3MsIFxuXG4vLyBzdHJpY2tseSBsb29rIGF0IHRoZSBmdW5jdGlvbiwgXG5cblxuXG5cbi8vIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRUb0RvVmFsdWVzKHByb2plY3QpIHsgXG4gIFxuLy8gICBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gICBsZXQgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBsZXQgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdCA9IHByb2plY3Q7IFxuXG4vLyAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykgeyBcbi8vICAgLy8gICBsZXQgeCA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3RbaV07IFxuXG4vLyAgIC8vICAgY29uc29sZS5sb2coeCk7IFxuLy8gICAvLyB9XG5cbi8vICAgbGV0IGRpc3BsYXlUaXRsZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QudGl0bGU7IFxuXG4vLyAgIGxldCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uOyBcblxuLy8gICBsZXQgZGlzcGxheVByaW9yaXR5ID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5wcmlvcml0eTsgXG5cbi8vICAgbGV0IGRpc3BsYXlEdWVEYXRlID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kdWVEYXRlOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVRpdGxlKTtcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RGVzY3JpcHRpb24pOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheUR1ZURhdGUpO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5UHJpb3JpdHkpOyBcblxuXG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBvayBJIGFtIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZXMsIEkgYW0gYWJsZSB0byBwcmludCB0aGUgdmFsdWVzIHRvIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgcGVybWFuZW50bHkgYWRkIHRoZXNlIHRvZG8gaXRlbXMgb250byBlYWNoIHByb2plY3QgXG5cbi8vIGFuZCBzYXZlIHRoZW0gZWFjaCB0aW1lIHNvIHRoZXkgcmVsb2FkIG9uIHJlZnJlc2g/IFxuXG4vLyBJIGNhbiBncmFiIHRoZSBjdXJyZW50IHByb2plY3QsIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCwgYmV0d2VlbiBwcm9qZWN0cyBcblxuLy8gdGhlbiBob3cgY2FuIEkgYWRkIHRoZXNlIG5ld2x5IGFkZGVkIHRvZG8ncyBiYWNrIGludG8gdGhlIGFycmF5LCBcblxuLy8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/ICBcblxuLy8gSSBhYmxlIHRvIGFkZCB0b2RvIGl0ZW1zIGludG8gYSBwcm9qZWN0LCBidXQgaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCAgdGhlbT8gXG5cbi8vIGRvIEkgbmVlZCB0byBwdXNoIHRoZW0gYmFjayBpbnRvIHRoZSBhcnJheT8gXG5cbi8vIFxuXG5cblxuXG4vLyBnZXQgYWxsIHRoZSB2YWx1ZXMsIHdpdGhpbiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBnZXQgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCB2YWx1ZXMgYXJlIHNhdmVkLCBcblxuLy8gcGFzc2VkIHRvIHRoZSBzcGVjaWZpYyBwcm9qZWN0cyB0b2RvIGFycmF5LCBcblxuLy8gYWxzbyBwYXNzZWQgdG8gc3RvcmFnZSB0b28gc28gdGhlIHRvZG8gYXJyYXkgaXMgdGhlIHNhbWUgYXMgcmVndWxhciBwcm9qZWN0IGFycmF5IFxuXG4vLyBzbyB3ZSBoYXZlIHRvIGFiaWxpdHkgdG8gZ2V0IHRoZSB2YWx1ZXMsIFxuXG4vLyBhbmQgcHVzaCB0aGVtIHRvIHRoZSBjb3JyZWN0IHByb2plY3QsIFxuXG4vLyB0aGV5IGRvIG5vdCBzYXZlLCBhbmQgY2xlYXIgdXBvbiByZWZyZXNoLiBcblxuLy8gaG93IGNhbiBJIHB1c2ggdGhlc2UgdmFsdWVzIGludG8gdGhlIGFycmF5LCBwZXJtYW5lbnRseSBzYXZlIHRoZW0sIFxuXG4vLyBhbmQgdGhlbiBkaXNwbGF5IHRoZW0/IEhvdyBjYW4gSSBkaXNwbGF5IHRoZSB0b2RvJ3M/IFxuXG4vLyBEbyBJIGhhdmUgdG8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHByb2plY3RzIGFycmF5PyBcblxuLy8gZG8gSSBoYXZlIHRvIHBhc3MgcHJvamVjdCBhcnJheSBhZ2Fpbj8gXG5cbi8vIHlvdSB3aWxsIGhhdmUgdG8gZGlzcGxheSB0aGUgcHJvamVjdHMgYWdhaW4gXG5cbi8vIHRoZSB0b2RvJ3MgYXJlIGJlaW5nIHVwZGF0ZWQgXG5cbi8vIHB1c2ggdGhlIHVwZGF0ZWQgcHJvamVjdHNBcnJheSwgYW5kIGZpbmQgYSB3YXkgdG8gZGlzcGxheSB0b2RvJ3MsXG5cbi8vIFxuXG5cblxuXG4vLyBjb25zdCBBcHAgPSAgKCgpID0+IHtcbi8vICAgLy8gbGV0IHByb2plY3RBcnJheSA9IFtdXG4vLyAgIGxldCBjdXJyZW50UHJvamVjdFxuXG4vLyAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbi8vICAgICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QgPSBjdXJyZW50UHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdC5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0LmlkKVxuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICByZXR1cm4ge3NldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdH1cbi8vIH0pKClcblxuXG5cbi8vIEhlbGxvLCBJIGFtIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0b2RvLCBJJ20gdHJ5aW5nIHRvIGltcGxlbWVudCBzb21lIGxvZ2ljIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBwcm9qZWN0IGJ0biwgaXQgd2lsbCBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgYW5kIGluIHRoZSBcInlvdXIgcHJvamVjdHNcIiBzZWN0aW9uLiBCYXNpY2FsbHkganVzdCB1c2luZyBhIGxpc3RlbmVyLCB0aGF0IHdoZW4gdGhlIHVzZXIgY29uZmlybXMgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgZGlzcGxheSwgdGhlbiByZW1vdmUgdGhlIHZhbHVlLiBUaGUgcHJvYmxlbSBpcyBJIGdldCB1bmRlZmluZWQgd2hlbiBJIHRyeSB0aGlzIGFwcHJvYWNoLCB3aGljaCBpcyBzdHJhbmdlIGJlY2F1c2UgSSdtIGdldHRpbmcgdGhlIGVsZW1lbnQsIHRoZXJlIGlzIGEgdmFsdWUgaW5zaWRlIHRoZXJlLCB0aGVuIGp1c3QgdXNpbmdyIC52YWx1ZS4gXG5cblxuXG4vLyBydW5uaW5nIGludG8gYSBwcm9ibGVtIHdpdGggdG9kbywgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBidG4gYW5kIHRoZXkgY29uZmlybSBcblxuLy8gdGhleSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSB3YW50IHRvIGRlbGV0ZSBpdCBmcm9tIG1haW4gY29udGFpbmVyIGFzIHdlbGwgYXMgdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIE5vdCBzdXJlIElmIEknbSBkb2luZyB0aGlzIHJpZ2h0IGJ1dCBJIGNhbiBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYW5kIHRoZW4gdXNlIHJlcGxhY2VDaGlsZHJlbiB0byBjbGVhciB0aGUgRE9NIF1cblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBwcmV0dHkgc3R1Y2sgb24gaG93IHRvIGRlbGV0ZSBpdCBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24/IFxuXG4vLyBCYXNpY2FsbHkgSSB0aGluayBvZiBzb21laG93IGdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIG1haW4gY29udGFpbmVyLCBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiB1c2luZyByZW1vdmVDaGlsZCB0byBkZWxldGUgdGhlIHByb2plY3QgbmFtZSBpbiBib3RoIHBsYWNlcywgXG5cblxuXG4gIFxuLy8gT0sgd2VsbCB0aGlzIGlzIG9uZSB3YXkgdG8gY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIFxuXG4vLyBidXQgaG93IGNhbiBJIGFjY2VzcyB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiBhbmQgZGVsZXRlIHRoYXQ/IFxuXG4vLyBJIG5lZWQgdG8gYWxzbyBkZWxldGUgdGhhdCBzYW1lIHByb2plY3QgbmFtZSB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbi4gbG9vayB1cCByZXBsYWNlQ2hpbGRyZW5cblxuLy8gbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZSB3aGF0IGFyZSB5b3UgcmVwbGFjaW5nIHdpdGg/IEhvdyBkbyB5b3Uga25vdyB3aGljaCBlbGVtZW50IHRvIHJlcGxhY2UgaXQgd2l0aD8gXG5cblxuXG4vLyBsZXQgY2FuY2VsQnRuQXJyYXkgPSBBcnJheS5mcm9tKGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCk7XG5cblxuXG4vLyBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyk7XG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lc0NsaWNrRXZlbnQoYXJyYXkpIHsgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KHByb2plY3RBcnJheSk7XG5cblxuXG4vLyBJIHRoaW5rIEkgTmVlZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGRvbid0IHdhbnQgdG8gaGF2ZSB0b28gbXVjaCBnb2luZyBvbiBpbiBvbmUgZnVuY3Rpb24sIFxuXG4vLyB1c2UgdGhlIHNhbWUgbG9naWMsIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5LCBcbiBcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleC5wcm9qZWN0KTtcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gb2sgbmV4dCwgcHJvamVjdCBuYW1lcyBhcmUgYmVpbmcgYWRkZWQgZHluYW1pY2FsbHksIHRoZXkgYXJlIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIHRoZSBhcnJheSBhbmQgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG5leHQgd2hlbiBJIGNsaWNrIG9uIHRoZSBwcm9qZWN0LCB0aGF0IHByb2plY3QncyBuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgY2xlYXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCwgXG5cbi8vIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgaXMgYWRkZWQgYXQgYSB0aW1lLCBzaG91bGQgbm90IGFkZCBvbnRvLiBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIGFsb25nIHdpdGggdGhlIHR3byBidG5zLCBhZGQgYW5kIGRlbGV0ZSBmb3IgdGhlIHRvZG8ncyBcblxuLy8gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIHNob3cgdGhhdCBwcm9qZWN0LCB1c2VyIGNhbm5vdCBhcHBlbmQgdGhhdCBwcm9qZWN0IG11bHRpcGxlIHRpbWVzIGJ5IGNsaWNraW5nLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gdGhpcyB3aWxsIGJlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGZpcnN0IEkgZmVlbCBsaWtlIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgZnJvbSB0aGUgYXJyYXksIGluc2lkZSB0aGUgbGlzdGVuZXIsIGxvZ2ljIHdpbGwgZ3JhYiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBhbmQgYXBwZW5kIHZhbHVlcyB0byBpdCwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIHRvIGRldGVybWluZSBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IGFkZGVkIHN1Y2ggYXMgSUQncyBtYXRjaGluZywgXG5cbi8vIGlmIElEIG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCBmcm9tIGFkZGluZyBhZ2FpbiwgZWxzZSBpZiBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJlZm9yZSB0aGUgcHJvamVjdCBuYW1lIGlzIGFwcGVuZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoYXQgbmFtZXMgaWQgbWF0Y2hlcyB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIEkgd291bGQgc2F5IGZpcnN0IGxldCdzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGNhbiBncmFiIGFsbCB0aGUgcHJvamVjdCBuYW1lcyBhbmQgSUQ/IFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0LCBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgXG5cbi8vIEknbSBub3Qgc3VyZSB5b3UgbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgc2VlbXMgbGlrZSB5b3VyIGdldHRpbmcgcHJvamVjdCB0YXJnZXQgdmFsdWUsIHdpdGggZS50YXJnZXQudGV4dENvbnRlbnQgXG5cbi8vIG5vdyBJIGJlbGlldmUgd2hhdCB5b3UgbmVlZCB0byBmaWd1cmUgb3V0IGlzIGhvdyB0byBkaXNwbGF5IHRoZSBjZXJ0YWluIHByb2plY3QsIGJhc2VkIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyByZW1lbWJlciByZXBsYWNlIHRoZSBjb250ZW50IHdpdGhpbiBtYWluIGNvbnRhaW5lciwgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSBhbGwgYmFzZWQgb24gYnRuIGNsaWNrIFxuXG4vLyB0aGluayBiYWNrIHRvIHJlc3RhdXJhbnQgcGFnZSwgXG5cbi8vIEkgc29tZWhvdyBuZWVkIHRvIHRoaW5rIHRoaXMgb3V0LCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgY29udGVudHMgb2YgcHJldmlvdXMgcHJvamVjdCBhbmQgbWFrZSB3YXkgZm9yIG5ldywgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHNvbWUgc29ydCBvZiBjb25kaXRpb25hbCwgaWYgdGhpcyBwcm9qZWN0IGlzIGNsaWNrZWQsIGNoYW5nZSB0byBhIHZhcmlhYmxlIHRoZW4gdXNlIHJlcGxhY2UgY2hpbGQuIFxuXG4vLyBpZiB0aGUgdmFyaWFibGUgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgb3IgdGhlIGRpdiwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCAgXG5cbi8vIFxuXG4vLyAtLSBob3cgdG8gbWFrZSBzdXJlIG9ubHkgdGhhdCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaXQgd2lsbCBwb3B1bGF0ZSwgd2l0aCB0aGF0IHByb2plY3QgbmFtZSwgd2lwZSB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgXG5cbi8vIC0tIHdoeSBpcyB0aGUgcHJvamVjdCdzIHNlY3Rpb24gbm90IGR5bmFtaWNhbGx5IGFkZGluZyBwcm9qZWN0cz8gSSBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZm9yIGl0IHRvIHNob3cgdXA/IFxuXG4vLyBoYW5kbGUgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZpcnN0LCBhbmQgY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG1haW4gY29udGFpbmVyIGZpcnN0LCBcblxuLy8gc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGlzIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzLCByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGNhbiBiZSBkaXNwbGF5ZWQgYXQgYSB0aW1lLCBcblxuLy8gaWYgcHJvamVjdCBjb250YWluZXIgaW5jbHVkZXMgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBzaG91bGQgaXQgYmUgc2ltaWxhciB0byByZXN0YXVyYW50IHBhZ2UsIGVhY2ggcHJvamVjdCBpcyBnaXZlbiBhIHZhcmlhYmxlLCB0aGVuIGlmIHRoYXQgcHJvamVjdCBpcyBjbGlja2VkIG9uIGl0J3MgZ2l2ZW4gYSB2YXJpYWJsZSBvciBpbmRleCwgXG5cbi8vIHRoZW4gY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QncyBJRCwgbWF0Y2hlcyB3aGF0IGlzIGluc2lkZSB0aGUgbWFpbiBjb250YWluZXIsIGlmIG5vdCBjbGlja2VkLCByZXBsYWNlIHdpdGggbmV3IGNsaWNrLCBcblxuLy8gaWYgaXQgaXMgY2xpY2tlZCBhZ2FpbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIHJlcGxhY2luZyB0aGUgY29udGVudCwgXG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aCB0aGUgcHJvamVjdHMgdW5xaXVlIElELCBpZiBwcm9qZWN0LmlkID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIHRoYXQgYnRuIGFnYWluLCBqdXN0IHJldHVybiwgXG5cbi8vIGNhbiB3ZSBnbyBiYWNrIGFuZCBsb29rIGF0IHdoYXQgeW91IGRpZCBwcmV2aW91c2x5IHdpdGggeW91ciBjb2RlP1xuXG4vLyBJIGRvbid0IHRoaW5rIGl0J3MgdGhlIHNhbWUgcHJldmlvdXNseSwgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBkaXYgaGVyZSBpbnN0ZWFkIG9mIGEgYnV0dG9uLCBcblxuLy8gSSB3YW50IHRvIGZpbmQgYSB3YXkgdGhhdCBJIGNhbiBvbmx5IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgc2hvdWxkIGFkZCBkdXBsaWNhdGVzLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIHJlcGxhY2UgY29udGVudHMgb2Ygb2xkIGFuZCB3aXBlIHRoZSBuZXcsIFxuXG4vLyBJIHRoaW5rIHRoZSBET00gRGlzcGxheSBpcyBmaW5lLCBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIGEgZnVuY3Rpb24sIGNyZWF0aW5nIGEgZGl2IHRoYXQgc3RvcmVzIHRoZSBwcm9qZWN0cyBuYW1lLCBcblxuLy8gbm93IG9uY2UgdGhlIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgbG9vcCB0aHJvdWdoIHN0b3JhZ2UsIGZpbmQgb3V0IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24gYW5kIGRpc3BsYXkncyBpdCdzIGNvbnRlbnRzLCBcblxuLy8gc3RpY2sgd2l0aCBob3cgeW91IGFyZSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgRE9NLCBcblxuLy8gaG93IHdpbGwgeW91IGFkZCB0aGluZ3MgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGRpc3BsYXkgb25seSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gbWFrZSBhIGxvb3AgZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGNvbXBhcmUgdGhlIElEIHRvIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkIG9uLCBcblxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbih2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWVJRCA9IHByb2plY3RWYWx1ZS5pZDsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gcHJvamVjdFZhbHVlW1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcblxuLy8gaGVyZSB0byB0b3Agb2YgZnVuY3Rpb24sIFxuXG5cblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgLy8gaGVyZSB0byBib3R0b20gYnJhY2tldCBcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhcik7XG5cbi8vIH1cblxuXG4vLyBmb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG4vLyAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSB2YWx1ZUluUHJvamVjdFtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3REaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICBwcm9qZWN0RGl2LmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cblxuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdWYWx1ZSk7XG5cblxuXG5cbi8vICAgLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBsZXQgcHJvamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VEYXRhKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVzKTtcbi8vICAgLy8gY29uc29sZS5sb2cocGFyc2VEYXRhKTtcbi8vICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0KTtcbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBcblxuXG5cblxuXG5cblxuXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSwgXG4vLyBhcHBlbmRzIHRoZSByZXN1bHQgdG8gdGhlIERPTS4gXG5cbi8vIGZ1bmN0aW9uIHByaW50U3RvcmFnZVRvRG9tKCkgeyBcbi8vICAgLy8gbGV0IGdldFN0b3JhZ2VJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4vLyAgIC8vIGxldCBwYXJzZWRJdGVtcyA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZUl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuXG4gXG5cbi8vICAgbGV0IG5hdlByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuLy8gICBuYXZQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoc3R1cGlkVmFsdWUpO1xuLy8gfSBcblxuXG4vLyBwcmludFN0b3JhZ2VUb0RvbSgpO1xuXG5cblxuXG5cbiAgLy8gbGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG4gIC8vIGxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuICAvLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpOyBcblxuLy8gY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuXG4vLyBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuLy8gWWVhaCwgSSB0aGluayBmb2N1c2luZyBvbiB0aGUgYmFzaWMgaWRlYSBvZiBob3cgdG8gY3JlYXRlIGEgcHJvamVjdCBhbmQgXG4vLyB0byBkaXNwbGF5IHRoZSBjb3JyZWN0IHByb2plY3Qgd2hlbiBpdHMgc2lkZWJhciBidXR0b24gaXMgY2xpY2tlZCB3b3VsZCBiZSBteSBmaXJzdCBzdGVwLiBcbi8vIFRoZW4geW91IGNhbiB0aGluayBhYm91dCB3aGF0IHNob3VsZCBiZSBvbiB0aGUgcHJvamVjdCdzIHBhZ2U6IHRoZXkgd2lsbCBuZWVkIGJ1dHRvbnMgdG8gYWRkIGEgdGFzayBhbmQgd2hhdCBub3RcblxuLy8gaGF2ZSB0aGUgdXNlciBlbnRlciBhIHByb2plY3QgbmFtZSwgYW5kIHNhdmUgdGhlIHZhbHVlLCBwYXNzIHRoYXQgdmFsdWUgdG8gc3RvcmFnZS4gXG5cbi8vIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBzYXZlZCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGQgYnRuLCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBnZXQgdGhlIGlucHV0IGZpZWxkLCBjYXB0dXJlIGl0J3MgdmFsdWUgdGhlbiBjb25zb2xlIGxvZyBpdCBcblxuLy8gdGhlIGlzc3VlIG9mIHRoZSB0ZXh0IGluIHRoZSBpbnB1dCBmaWVsZCBiZWluZyBjbGVhcmVkLCBcblxuLy8gd2VsbCBJIHdyYXBwZWQgaXQgaW5zaWRlIGEgZm9ybSB0YWcsIGl0IHdvcmtzIGJ1dCBpdCByZWZyZXNoZXMgdGhlIHBhZ2UsIEkgbWVhbiBpcyB0aGF0IGEgcHJvYmxlbSwgXG5cbi8vIEkgZ3Vlc3Mgbm93IEknbGwgd29yayBvbiBzdG9yaW5nIHRoZSBkYXRhLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgLy8gaW4gb3JkZXIgdG8gY2VudGVyIGl0IHlvdSBuZWVkIHRvIGFwcGVuZCB0aGlzIGVsZW1lbnQgXG5cbi8vICAgICAgIC8vIHRvIGFub3RoZXIgY29udGFpbmVyIFxuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlc1wiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZFwiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7IFxuXG4vLyAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBwb3BVcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBvcC11cC1jb250ZW50XCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1maWVsZC1zdHlsZXNcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTsgXG5cbi8vICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4vLyAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi10by1kby1pbnB1dFwiKVxuXG4vLyAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2Nsb3NlLWNpcmNsZS5wbmdcIjsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIHVyZ2VuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICBsZXQgdXJnZW5jeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uY2xhc3NMaXN0LmFkZChcInVyZ2VuY3ktZHJvcGRvd24tc3R5bGVzXCIpO1xuXG5cblxuLy8gICAgICAgbGV0IHVyZ2VuY3lIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCIgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiOyBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7IFxuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBkYXRlUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuLy8gICAgICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUhpZ2gpO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeU1lZGl1bSk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TG93KTsgXG5cblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVPZlRvRG9JbnB1dEZvcm0pOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudExhYmVsKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lEcm9wRG93bik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bkNvbnRhaW5lcik7IFxuXG4gICAgXG5cbi8vICAgICAgIC8vIHNob3VsZCBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXI/IFxuXG4vLyAgICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4vLyAgICAgfSkgXG5cbi8vICAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCIvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZVxuXG4vLyBpbXBvcnQgXCJzcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qc1wiOyBcblxuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IFxuXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4gaW1wb3J0IGNyb3NzTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY3Jvc3MtbWFyay1zdmdyZXBvLWNvbS5wbmdcIjsgXG5cbiBpbXBvcnQgY2hlY2tNYXJrRm9yRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9jaGVjay1tYXJrLXN2Z3JlcG8tY29tLnBuZ1wiOyBcblxubGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG5sZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3ROYW1lTG9vcCgpIHsgICBcbmZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcblxuICAgICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuXG4gICAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG4gIFxucHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyAgXG5cblxuXG4vLyB0b2RheSwgZWRpdGluZyB0b2RvJ3MgXG5cbi8vIHVzaW5nIGdldHRlcnMgYW5kIHNldHRlcnMsIFxuXG4vLyBsb29rIGJhY2sgYXQgZXhhbXBsZSwgYW5kIHNlZSBob3cgeW91IGNhbiB3b3JrIHRoYXQgaW50byBjdXJyZW50IGNvZGUgXG5cbi8vIHRoZSBnZXR0ZXJzIGFuZCBzZXR0ZXJzLCBzaG91bGQgcHJvYmFibHkgYmUgaW5zaWRlIHlvdXIgZmFjdG9yeSBmdW5jdGlvbiBcblxuLy8gd2hhdCB3aWxsIHdlIGJlIHBhc3NpbmcgdG8gdGhlIGZhY3Rvcnk/IFxuXG4vLyBXaHkgYSBnZXR0ZXIgYW5kIHNldHRlcj8gSSBqdXN0IG5lZWQgdG8gb3ZlcndyaXRlIHRoZSBkYXRhIGF0IHRoYXQgcGFydGljdWxhciBpbmRleCB3aXRoIHRoZSBkYXRhLCBcblxuLy8gY2FuJ3QgSSBwYXNzIHRoZSB2YWx1ZXMgdG8gdGhlIHNhbWUgZmFjdG9yeT8gbWFrZSB0aGUgc2FtZSBvYmplY3QgYW5kIHRoZW4gdXNlIHRoYXQgb2JqZWN0IHRvIHNwbGljZSBvciBvdmVyd3JpdGUgcHJvcGVyaXRlcz8gXG5cbi8vIHlvdSBjYW4gcHJvYmFibHkgZG8gdGhlIHNhbWUgcHJvY2VzcywgbWFrZSBhbiBvYmplY3QsIGJ1dCB5b3UgbmVlZCB0byBvdmVyd3JpdGUgdGhhdCB0b2RvIGFuZCB0aGF0IGluZGV4IHdpdGggdGhlIG5ldyBpbmZvLiBcblxuLy8gXG5cblxuXG4vLyBvayBzbyBhIHNlcGVyYXRlIG1vZGFsIGlzIGNyZWF0ZWQsIHdpdGggdW5pcXVlIGVsZW1lbnRzLCAgXG5cbi8vIG5vdyB3ZSBtdXN0IGdldCB0aGUgdmFsdWVzIGZvciBlYWNoIGlucHV0IGZpZWxkIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgY3VycmVudCBwcm9qZWN0cyB0b2RvcyA/IFxuXG4vLyBzb21laG93IEkgYWxzbyBuZWVkIHRvIGluY2x1ZGUgdGhlIGRhdGFzZXQgXG5cblxuXG4vLyBoZXJlIHdlIGFyZSBiYWNrIHdpdGggYXZlbmdhbmNlIFxuXG4vLyBJIGFtIHJlY292ZXJpbmcsIEknbSBnb2luZyB0byBkbyBhIGxpdHRsZSB3b3JrIHRvZGF5IFxuXG4vLyBzbyByaWdodCBub3cgSSB3YW50IHRvIGVkaXQgdG9kbydzIFxuXG4vLyBidXR0b24gaXMgY2xpY2tlZCBhbmQgdGhhdCBzaG91bGQgZ2VuZXJhdGUgYSBmb3JtIFxuXG4vLyB0aGUgZm9ybSBpcyBpZGVudGljYWwgdG8gbWFraW5nIGEgdG9kbywgXG5cbi8vIHlvdSB3aWxsIGp1c3QgbmVlZCB0byBhc3NvY2lhdGUgdGhhdCBwYXJ0aWN1bGFyIHRvZG8gXG5cbi8vIHdpdGggYSBkYXRhc2V0LCBzaW1pbGFyIHRvIGRlbGV0aW5nIGEgdG9kbywgXG5cbi8vIG9uY2UgdGhlIGVkaXQgYnRuIGlzIGNsaWNrZWQsIGdpdmUgdGhhdCB0b2RvIGEgZGF0YXNldCBcblxuLy8gZ2VuZXJhdGUgZm9ybSwgd2hhdGV2ZXIgdXNlciBlbnRlcnMsIHdpbGwgdXBkYXRlL292ZXJ3cml0ZSB0aGUgaW5mbyBcblxuLy8gaXQgd29uJ3QgY3JlYXRlIGEgbmV3IG9uZSwgaXQgd2lsbCBqdXN0IHVwZGF0ZS9tb2RpZml5IFxuXG4vLyB5b3VyIHByZXZpb3VzIGFwcHJvYWNoIEkgZG9uJ3QgYmVsaWV2ZSB3aWxsIHdvcmsgXG5cbi8vIGJlY2F1c2UgeW91IGFyZSB0cnlpbmcgdG8gdXNlIHRoZSBzYW1lIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gdGhhdCBzZWVtcyBsaWtlIGl0IHdpbGwgb25seSBjYXVzZSBpc3N1ZXMsIFxuXG4vLyBsZXRzIHNlcGVyYXRlIHRoZW0sIG1lYW5pbmcgY29weSB0aGUgc2V0LXVwIGFuZCBjb2RlIGZvciBjcmVhdGluZyBhIHRvZG8gbW9kYWwgXG5cbi8vIHN0eWxlIGV4YWN0bHkgdGhlIHNhbWUsIFxuXG4vLyBhZGQgdG9kbywgYW5kIGVkaXQgdG9kbyBhcmUgdHdvIHNlcGVyYXRlIGxpc3RlbmVycywgXG5cbi8vIG9uZSBpcyBmb3IgY3JlYXRpbmcsIHRoZSBvdGhlciBpcyBmb3IgbW9kaWZ5aW5nLCBcblxuLy8gbGV0cyBiZWdpbiwgdGhlIGFwcHJvYWNoIHNlZW1zIHZhbGlkLCBzdGFydCB3aXRoIHRoZSBIVE1MIFxuXG4vLyBiYXNpY2FsbHkgY29weSB0aGUgY29kZSwgc2xpZ2hseSBjaGFuZ2UgY2xhc3MgbmFtZXMsIFxuXG4vLyBzYW1lIHN0eWxlcywgaHRtbCwgY3NzLCB0aGVuIGdyYWIgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbG9naWMsIFxuXG4vLyB3aXRoaW4gdGhlIGxpc3RlbmVyLCB3ZSBhcmUgbm90IGFkZGluZywgXG5cblxuXG5cbi8vIHBhc3MgdGhlIHVwZGF0ZWQgYXJyYXkgdG8gc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gSSB1cGRhdGUgdGhlIGFycmF5LCBcblxuLy8gY2FuIEkgcHVzaCB0aGluZ3MgdG8gaXQsIGFkZCB0aGluZ3MgdG8gaXQsIFxuXG4vLyBjYW4gSSB1c2UgZmlsdGVyLCBcblxuLy8gb2sgc28gbm93IEkgY2FuIGRlbGV0ZSBpbmRpdmlkdWFsIHByb2plY3RzIGFzIHdlbGwgYXMgdGhlIHByb2plY3QgYXMgYSB3aG9sZSBcblxuLy8gaG93IGNhbiBJIHJlZmxlY3QgdGhpcyBjaGFuZ2UgaW4gc3RvcmFnZT8gXG5cbi8vIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyBwbGFuIG9uIGhvdyBJIGNhbiBtYWtlIGFuIHVwZGF0ZSBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcmlnaHQgbm93IEl0IG9ubHkgZGVsZXRlcyBmcm9tIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIG15IGFycmF5IHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgaW4gdGhlIERPTT8gXG5cbi8vIGNhbiBJIGxvb2sgYmFjayBteSBkZWxldGUgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgZm9yIGluc3BpcmF0aW9uPyBcblxuLy8gdGhhdCBkZWxldGVzIGZyb20gYm90aCB0aGUgYXJyYXkgYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBmaXJzdCBjaGVjayB0aGF0IG91dCwgXG5cblxuXG5cbi8vIEkgYW0gZ2V0dGluZyB2ZXJ5IGNvbmZ1c2VkIG9uIGhvdyBJIGNhbiBkZWxldGUgYSBzaW5nbGUgdG9kbyBcblxuLy8gdXNpbmcgdGhlIFxuXG4vLyBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8sIGFuZCByZWZsZWN0IGluIHRoZSBET00sIFxuXG4vLyBidXQgYWxzbyBpbiBzdG9yYWdlLCBJIGNhbiByZW1vdmUgZnJvbSBET00sIFxuXG4vLyBidXQgSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGxvc3Qgb24gaG93IHRvIHJlbW92ZSBpdCBmcm9tIHN0b3JhZ2UsIFxuXG4vLyBJIHdhbnQgdG8gc2F5IHVzaW5nIGZpbHRlciB3b3VsZCBiZSBhIGdvb2Qgb3B0aW9uIFxuXG4vLyB0b2RheSB0aGUgZm9jdXMgaXMgZGVsZXRpbmcgYSBzaW5nbGUgdG9kbyBhbmQgcmVmbGVjdGluZyB0aGF0IFxuXG4vLyB3aXRoaW4gdGhlIHN0b3JhZ2UgYW5kIHdpdGhpbiB0aGUgRE9NLCBcblxuLy8gYWxzbyBpZiBJIGdldCBzdHVjayBvbiB0aGF0LCBcblxuLy8gZWRpdGluZyBhIHRvZG8sIHRoYXQgaWYgdXNlciBwcmVzc2VzIGVkaXQgYnRuLCBcblxuLy8gZ2VuZXJhdGUgdGhlIG1vZGFsIGFnYWluLCBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gZWRpdCB0aGF0IHRvZG8gXG5cbi8vIGFuZCB0aGVuIHJlZmxlY3QgdGhhdCBjaGFuZ2UgaW4gdGhlIERPTSBhbmQgaW4gc3RvcmFnZSwgXG5cbi8vIEkgd2lsbCBhc2sgdGhlIHF1ZXN0aW9uIHJpZ2h0IGF3YXkgYmVjYXVzZSBJIGFtIHN0dWNrLCBcblxuLy8gYnV0IHNwZW5kIGEgbGl0dGxlIHRpbWUgbG9va2luZyBvdmVyIHRoZSBjb2RlLCBcblxuXG5cblxuLy8gSSBtYWRlIGEgbmV3IGZvbGRlciBpbiBteSByZXBvcyBjYWxsZWQgdG9kbyBsaXN0LUIgXG5cbi8vIHRoZW4gSSBjbG9uZWQgd2l0aGluIHRoZXJlLCB0aGVuIGNvcGllZCBhbGwgbXkgY29kZSBmcm9tIG15IG1vZHVsZSBcblxuLy8gaW50byB0aGUgbmV3IHByb2plY3QsIHRoaW5ncyBzZWVtIHRvIGJlIHdvcmtpbmcgb2sgXG5cbi8vIGFtIEkgb2sgdG8gcHVzaCBhbmQgY29tbWl0IGNoYW5nZXMsIHdpbGwgdGhlc2UgY2hhbmdlcyBzdGlsbCBnbyB0byBcblxuLy8gdG9kbyBsaXN0LUEgPyBcblxuLy8gcmlnaHQgbm93IGEgcHJvYmxlbSBJIHNlZSBpcyB0aGF0IHByb2plY3RzIFxuXG4vLyBhcmUgbm90IGJlaW5nIGFkZGVkIHRvIHByb2plY3QgMiwgXG5cbi8vIHRoZSB0b2RvJ3Mgd29uJ3Qgc2hvdywgYW5kIGFueSBwcm9qZWN0IHRoYXQncyBub3QgMSwgZXJhc2VzIG9uIHJlZnJlc2gsIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5IGlzIGEgbmV3IGRheSwgXG5cbi8vIGxvb2sgYmFjayBvdmVyIHRoZSBtZXNzYWdlcywgZ2V0IGFuIGlkZWEsIFxuXG4vLyB0aGVuIGdyYWIgc29tZSBvZiB5b3VyIGZ1bmN0aW9ucywgXG5cbi8vIHRyeSB0byBpbXBsZW1lbnQgdGhlIHBsYW4gdGhhdCBleCBjYW1lIHVwIHdpdGgsIFxuXG4vLyBwYXNzIG9iamVjdHMgaW50byBhcnJheSBhbmQgbG9vcCB0aHJ1IHRoZW0sIFxuXG4vLyBmaXJzdCBsb29rIG92ZXIgdGhlIG1lc3NhZ2VzLCAgXG5cblxuLy8gb2sgc28gZ28gaW50byBjb2RlIHBlbiwgY29weSB0aGUgZGlzcGxheSBmdW5jdGlvbiBvdmVyLCBcblxuLy8gdHJ5IHRvIG1ha2UgYSBuZXcgb2JqZWN0LCBlYWNoIHRpbWUgeW91IGVudGVyIGZvcm0gZGF0YSwgXG5cbi8vIHRoZW4gYWRkIHRob3NlIHByb2plY3RzIHRvIHRoZSBhcnJheSwgXG5cblxuXG5cblxuLy8gb2sgc28gdG9kYXksIHRoZSB1bnFpdWUgdG9kb3MgYXJlIGJlaW5nIGRpc3BsYXllZCBcblxuLy8gbm93IHdlIG11c3Qgc3R5bGUgdGhlIHRvZG8ncyBcblxuLy8gZWFjaCBibG9jayBzaG91bGQgYmUgc3R5bGVkLCBcblxuLy8gbm90IGEgY29udGFpbmVyIHRoYW4gaGFzIGEgc3R5bGUgdGhhdCBob2xkcyBldmVyeXRoaW5nLCBcblxuLy8gdHJ5IHRvIG1ha2Ugc3VyZSBlYWNoIHNldCBvZiB0b2RvIGlzIGFwcGVuZGVkIHRvIGEgY29udGFpbmVyLCBcblxuLy8geW91IGFyZSBhcHBlbmRpbmcgZXZlcnl0aGluZyB0byB0aGF0IHNhbWUgY29udGFpbmVyLCBcblxuLy8gYXBwZW5kIHRvIG9uZSBjb250YWluZXIsIHN0eWxlIHRoYXQgdGhlbiBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIgXG5cblxuXG5cblxuXG5cbi8vIG9rIHdlIGhhdmUgc29tZXRoaW5nIHdvcmtpbmcgaGVyZSwgXG5cbi8vIHlvdSBoYXZlIHR3byBmdW5jdGlvbnMsIFxuXG4vLyBhdCBsZWFzdCBkYXRhIGlzIGJlaW5nIHByaW50ZWQgdG8gdGhlIERPTSwgYW5kIGlzIHN0b3JpbmcgaW4gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG5cbi8vIGNoZWNrIHlvdXIgZnVuY3Rpb25zIGFnYWluLCBcblxuLy8gcmVtZW1iZXIgb25lIHRvIGNyZWF0ZSB0aGUgZWxlbWVudHMvc3R5bGUsIG90aGVyIHRvIGp1c3QgZGlzcGxheSB0aGUgY3VycmVudFByb2plY3RzIHRvZG8ncyBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhcHBlbmQgdmFsdWVzLCBzdHlsZSwgXG5cbi8vIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQganVzdCBkaXNwbGF5IHRoZW0uIFxuXG5cblxuLy8gbGV0IGdldFRvZG9JdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0l0ZW1zXCIpOyBcblxuLy8gbGV0IHBhcnNlVG9kb0l0ZW1zID0gSlNPTi5wYXJzZShnZXRUb2RvSXRlbXMpOyBcblxuXG5cblxuLy8gZm9yIChsZXQgdG9kbyBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgbGV0IHRvZG9JdGVtID0gcGFyc2VUb2RvSXRlbXM7IFxuXG4vLyAgICAgIGxldCB2YWx1ZUluVG9kbyA9IHBhcnNlVG9kb0l0ZW1zW3RvZG9JdGVtXTsgXG5cbi8vICAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblRvZG8pOyBcblxuLy8gICAgICAvLyBjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG4vLyB9XG5cbi8vIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTtcblxuXG5cblxuXG5cbi8vIHN0b3JlIHRoZSB0b2RvcyBsaWtlIEkgZGlkIHdpdGggbmFtZXMsIFxuXG4vLyBsb29wIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRha2UgaW4gcHJvamVjdCwgYWRkIHRoZSB2YWx1ZXMsIFxuXG4vLyBwdXNoIHRoZSBwcm9qZWN0IGJhY2sgaW50byBwcm9qZWN0cyBhcnJheSwgYW5kIHRoZW4gXG5cbi8vIHBhc3MgdGhlIHByb2plY3RzQXJyYXkgYmFjayB0byBET00gZnVuY3Rpb24sIGFuZCBzdG9yYWdlLCBcblxuLy8gYWRkIHRoZSB0b2RvJ3Mgb24gYSBwcm9qZWN0LCB1cGRhdGUgaXQgYWdhaW4gXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBhcnNlVG9kb0l0ZW1zKTtcblxuXG4vLyBob3cgY2FuIEkga2VlcCBteSB0b2RvJ3MgYWZ0ZXIgcGFnZSByZWZyZXNoPyBZZXN0ZXJkYXkgaXQgc2VlbWVkIGxpa2UgaXQgd2FzIGEgcHJvYmxlbSBpbiBob3cgSSdtIHN0b3JpbmcgdGhlbSBhbmQgaG93IEkgcGFyc2UgdGhlbSBcblxuLy8gaXQgc2VlbXMgbGlrZSBpdCBpcyBhIHN0b3JhZ2UgcHJvYmxlbSwgaG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSB0b2RvIGFycmF5IHdpdGhpbiBlYWNoIHByb2plY3QsIFxuXG4vLyB0cnkgdG8gcGFyc2UgdGhlIGRhdGEgbGlrZSB1IGRpZCBiZWZvcmU/IFxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuLy8gZnVuY3Rpb24gcGFyc2VUb2RvKCkgeyBcbi8vICAgICAgZm9yIChsZXQgaXRlbSBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgICAgICBsZXQgdG9kbyA9IGl0ZW07IFxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gICAgICB9XG4vLyB9IFxuXG4vLyBwYXJzZURhdGEoKTtcblxuXG4vLyBPSyBzbyB0aGUgZGVsZXRpbmcgcHJvamVjdCBtZXRob2Qgd29ya3MhISBJIGFtIG5vdyBhYmxlIHRvIGRlbGV0ZSBhIHByb2plY3QgZnJvbSBtYWluIGFzIHdlbGwgYXMgdGhlIG5hdmJhciwgXG5cbi8vIG5leHQgSSBkaWQgdG8gYWRkIHRoZSBsb2dpYyBzbyB0aGUgdXNlciBjYW4gYWRkIHRvZG8ncywgXG5cbi8vIHJlbWVtYmVyIHRvZG8ncyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3Qgb2JqIGFycmF5LCBcblxuLy8gZmlyc3Qgd2UgcHJvYmFibHkgbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXB0dXJlIHRoZSB2YWx1ZSBcblxuLy8gb24gZWFjaCBpbnB1dCBmaWVsZCwgbGV0cyBzdGFydCB0aGVyZSwgXG5cbi8vIGEgZnVuY3Rpb24gd2lsbCBiZSBuZWVkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0IGlucHV0IGZpZWxkcyBcblxuLy8gYW5kIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGVtLCBcblxuXG5cblxuLy8gdGhpbmtpbmcgb2YgdGhlIG5leHQgc3RlcCBhZnRlciB0aGUgZGVsZXRpbmcgcHJvamVjdHMsIFxuXG4vLyB0aGF0IHdvdWxkIGJlIGdldHRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGlucHV0IGFuZCBcblxuLy8gcHVzaGluZyB0aGVtIGJhY2sgaW50byB0aGUgdG9kbyBhcnJheSB0aGF0IGVhY2ggcHJvamVjdCBjb250YWluZXJzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIGFjY2VzcyB0byB0aGF0IHRvZG8gYXJyYXksIHRyeSBhIHNpbXBsZSBsb2cgZmlyc3QgXG5cbi8vIGJ1dCB0aGUgdG9kbydzIHdpbGwgYmUgYWRkZWQgdG8gdGhlcmUgYnV0IGFsc28gaXQgbmVlZHMgdG8gYmUgXG5cbi8vIHJlZmxlY3RlZCBpbiB5b3VyIERPTSB0b28sIFxuXG4vLyBzbyB0aGlua2luZyBvZiBzb21lIHdheSB0byBhY2Nlc3MgdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoZSBvYmogXG5cblxuLy8gaWYgeW91IGNhbiBhY2Nlc3MgaXQgeW91IGFkZCB0aGUgdmFsdWVzIHRvIGl0LCBcblxuLy8gdGhlbiBvbmNlIHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBwcm9wZXJseSB3aXRoaW4gZWFjaCBvYmplY3QsIFxuXG4vLyB5b3Ugd2FudCB0byByZWZsZWN0IHRoYXQgaW4gdGhlIERPTSwgYWNjZXNzIHRoZSB0b2RvIGFuZCBkaXNwbGF5IGl0J3MgcHJvcGVydGllcyBcblxuLy8gdGhlbiBoYXZpbmcgYSB3YXkgdG8gZGVsZXRlIHRvZG8ncyBhbmQgaGF2aW5nIHRoYXQgdXBkYXRlIFxuXG4vLyB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTS4gXG5cblxuLy8gZ2V0dGluZyBwcm9qZWN0IElEIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4vLyAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuICAgICBcbi8vICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKTtcbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIGdldCB0aGUgcHJvamVjdCdzIElELCBnZXQgdGhlIElEJ3Mgd2l0aGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBhbmQgdGhlIElEJ3Mgd2l0aGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBjcmVhdGUgYSBsb29wIGluc2lkZSBlYWNoIHNlY3Rpb24gYW5kIGdldCB0aGUgdmFsdWUsIFxuXG5cblxuXG4vLyB3ZWxsIHlvdSBjYW4gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBidG4gY29udGFpbmVyIGZyb20gdGhlIERPTSwgXG5cbi8vIGNhbiB3ZSBmaWd1cmUgb3V0IGEgd2F5IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gbGV0cyB0YWtlIGEgbG9vayBhdCBob3cgdGhlIHZhbHVlIGlzIHN0b3JlZCwgXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBhbmQgc2VlIGlmIHNvbWVob3cgeW91ICBcblxuLy8gZ3JhYiBhIHZhbHVlLCBvciB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cblxuXG4vLyBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgdmFsdWVzIHd0aWhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBhIGxvb3AsIHRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdGhlIHZhbHVlJ3MgdGV4dCBjb250ZW50IG1hdGNoZXMsIHNldCB0aGUgdGV4dENvbnRlbnQgdG8gXCJcIiBvciBkZWxldGUgdGhlIGVsZW1lbnQsIFxuXG4vLyB0cnkgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHRoYXQgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdmFsdWVzIG1hdGNoLCBkZWxldGUgdGhlIHZhbHVlIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiB0aGF0IG1hdGNoZXMgbWFpbiBjb250ZW50cyB2YWx1ZSwgXG5cbi8vIGlkJ3MsIGVhY2ggcHJvamVjdCBoYXMgYSB1bnFpdWUgSUQsIGNvbXBhcmUgSUQncywgd2h5IGNhbnQgSSBkbywgaWYgdGhlIHRleHRDb250ZW50cy9zdHJpbmdzIG1hdGNoIHJlbW92ZT8gXG5cbi8vIEkgZ290IHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYWluLCBhbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB5b3VyIHByb2plY3RzLCBcblxuLy8gZG9lcyB0aGUgc3RyaW5nIG1hdGNoIHRoZSBvdGhlciBzdHJpbmcsIFxuXG4vLyBkbyBJRCdzIG1hdGNoPyBcblxuXG5cblxuXG4vLyBzYW1lIGlzc3VlLCBJIGFtIHRyeWluZyB0byBncmFiIHRoZSB2YWx1ZXMsIGFuZCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBkZWxldGUgdGhlIHByb2plY3QsIFxuXG4vLyBkZWxldGUgdGhlIHByb2plY3QgZnJvbSBib3RoIHBsYWNlcywgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGFuZCB0aGUgbGlzdCBvbiB2YWx1ZXMgaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGhvdyBjYW4gSSBkZWxldGUgYm90aCBpbiB0aGUgc2FtZSBwbGFjZSBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIFxuXG4vLyBqdXN0IGNoZWNrIHRvIHNlZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBET00sIHNlZSBpZiB5b3UgY2FuIGFkZCBhIGNsYXNzIHRvIGl0LCBcblxuXG4vLyB3aGlsZSB3ZXJlIHdhaXRpbmcgY2FuIHdlIGdldCB0aGUgcHJvamVjdHMgSUQ/IFxuXG4vLyBqdXN0IHNpbXBseSB0cnkgdG8gZ2V0IGEgcHJvamVjdHMgSUQuIGFuZCBsb2cgaXQsIFxuXG5cblxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cbi8vIG9rIHNvIEkgYW0gYWJsZSB0byB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIG9wZW5pbmcgdGhlIG1vZGFsIGFuZCBjbG9zaW5nIHRoZSBtb2RhbCwgXG5cbi8vIG5vdyB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgbG9naWMsIHRoYXQgd2lsbCBzZXQgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgbW9kYWwgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgaXQgd2lsbCBwb3AtdXAsIGNhbmNlbCBpdCB3aWxsIG5vdCBkaXNwbGF5IFxuXG4vLyBJIHRoaW5rIGp1c3QgZ3JhYmJpbmcgdGhlIHZhcmlhYmxlcyBhdCB0aGUgdG9wIGlzIGZpbmUsIGFuZCBqdXN0IGluIHRoZSBnbG9iYWwgc2NvcGUsIFxuXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHdvcmtzLCBzYXZlIGFuZCBjb21taXQsIHRoZW4gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSBkZWxldGUgYnRuIHdvcmtpbmcsIFxuXG4vLyBub3cgd291bGQgcHJvYmFibHkgYmUgdGhlIGJlc3QgdGltZSB0byBkbyB0aGF0LCBzaW5jZSB0aGUgYWRkIGJ0biBpcyB3b3JraW5nLCBub3cgd2UgY2FuXG5cbi8vIHdvcmsgb24gdGhlIGxvZ2ljLCB0aGF0IG9uY2UgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGFub3RoZXIgbW9kYWwsIGFza2luZyB0aGUgdXNlciBcblxuLy8gYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD8gSXQgd2lsbCBjbGVhciB0aGF0IHByb2plY3QgZm9yIHRoZSBET00gSW4gbWFpbiBcblxuLy8gYnV0IGFsc28gaW4gdGhlIHByb2plY3QncyBzZWN0aW9uLCBcblxuLy8vIHN0eWxlIHRoZSBtb2RhbCwgb25lIGJ0biB0byBjb25maXJtIGFuZCB0aGUgb3RoZXIgYnRuIHRvIGNhbmNlbCB0aGUgb3JkZXIsIFxuXG4vLyBPayBzbyB3ZSBoYXZlIHRoZSBwcmludCB2YWx1ZXMgdG8gdGhlIERPTSBmdW5jdGlvbiwgXG5cbi8vIGlmIHVzZXIgY2xpY2tzIHByb2plY3QgbmFtZSwgdmFsdWVzIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGlmIHVzZXIgcHJlc3NlcywgYWRkIG9yIGRlbGV0ZSwgbG9naWMgaXMgd2l0aGluIHRoZSBzYW1lIGZ1bmN0aW9uLCBcblxuLy8gSSBkb24ndCBzZWUgdGhhdCBiZWNvbWluZyBhIHByb2JsZW0sIG15IHRoaW5raW5nIGlzIHRoYXQgaXQncyBiZXR0ZXIgdG8gZG8gdGhhdCB0aGVyZSBcblxuLy8gdGhhbiBwYXNzaW5nIHRoZSB2YXJpYWJsZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBtaWdodCBhcyB3ZWxsIGRvIHRoYXQgYWxsIHRoZXJlLCBcblxuLy8gc28gdGhlIGRlbGV0ZSBidG4sIG1ha2UgdGhlIG1hcmt1cCBpbiB0aGUgSFRNTCBmaXJzdCwgZm9sbG93IHRoZSBndWlkZWxpbmVzIGJlZm9yZSwgZ28gc2xvdywgXG5cblxuLy8gbW9kYWwgaXMgd29ya2luZyBidXQganVzdCB0cnlpbmcgdG8gYWRkIHNwYWNlIFxuLy8gYmV0d2VlbiB0aGUgZWxlbWVudHMgdGhlIGNoZWNrIGFuZCB0aGUgeCwgZWxlbWVudCBcblxuLy8gb2sgZ290IHRoZSBkZWxldGUgYnRuIG1vZGFsIHdvcmtpbmcgYXMgSSB3YW50IHRvLCBuZXh0IEkgd2lsbCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LCBcblxuLy8gdGhhdCBvbmNlIGNsaWNrZWQgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwsIFxuXG4vLyBkb250IGZvcmdldCB0byBhZGQgdGhlIG92ZXJsYXkhIFxuXG5cblxuXG4vLyBuZXh0IHdpbGwgd29yayBvbiBkZWxldGluZyBhIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2ttYXJrLCBpdCBzaG91bGQgZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSwgdGhlIGFycmF5IFxuXG4vLyBhbmQgSSBiZWxpZXZlIGZyb20gbG9jYWwgc3RvcmFnZSB0b28sIHRoZW4gd29yayBvbiBzYXZpbmcgdG9kbyBpbmZvLCBmcm9tIHRoZSBtb2RhbCBhbmQgcHVzaGluZyBpbnRvIHRoZSBET00gYW5kIHN0b3JhZ2Ugd2hlcmUgXG5cbi8vIGVhY2ggcHJvamVjdCBoYXMgYSBsaXN0IG9mIHRvZG8ncywgaXQgd2lsbCBhZGRlZCB0aGVyZSB3aGlsZSBhbHNvIHJlZmxlY3RpbmcgdGhhdCBpbnRvIHRoZSBET00uIFxuXG4vLyB5ZXMgbmV4dCBzdGVwIGlzIGVpdGhlciBkZWxldGluZyB0aGUgcHJvamVjdCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBidG4sIGFuZCBnZXR0aW5nIGFsbCB0aGUgdXNlciBpbmZvIFxuXG4vLyB0aGF0IHdhcyBlbnRlcmVkIGFuZCBzYXZpbmcgdGhhdCB0b2RvLCB0byB0aGUgYXJyYXkgb2YgdG9kbydzIHRoYXQgZWFjaCBwcm9qZWN0IGhhcywgXG5cblxuXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cblxuLy8gc28gbm93IHdlIGZpZ3VyZWQgb3V0IGhvdyB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIG1vcmUgcHJvamVjdHMsIFxuXG4vLyBiYXNjaWNhbGx5IGNsZWFyIHRoZSBET00sIHRoZW4gYWRkIHByb2plY3RzLCBcblxuLy8gbm93IGFkZCB0aGUgbG9naWMsIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIG1vZGFsLCBmb3IgdGhlIHVzZXIgdG8gY3JlYXRlIGEgdG9kbywgXG5cbi8vIGZpcnN0IEkgd291bGQganVzdCB0cnkgaXQgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiBtYXliZSBzZWUgaWYgeW91IGNhbiBzcGxpdCB0aGUgY29kZSB1cCBhIGJpdCwgXG5cbi8vIHByaW50IGEgc2ltcGxlIG1lc3NhZ2Ugd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciBmaXJzdCwgXG5cbi8vIG9rIHdvcmtzIGdvb2QsIG5vdyBzdGFydCBjb25zdHJ1Y3RpbmcgeW91ciBtb2RhbCwgZm9sbG93IGFsb25nIHdpdGggdGhlIGFydGljbGUsIG9yIHZpZGVvLCBcblxuLy8gbmVlZHMgdGl0bGUsIHByaW9yaXR5LCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIFxuXG4vLyB0aG9zZSB2YWx1ZXMgYXJlIHRoZW4gYWRkZWQgdG8gdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoYXQgc3BlY2lmaWMgcHJvamVjdCwgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFNvIEkgbmVlZCB0byByZWNvbnNpZGVyIG15IGFwcHJvYWNoLCBpbnN0ZWFkIG9mIGhhdmluZyBzdG9yYWdlIHJlZmxlY3Qgd2hhdCBpcyBpbiB0aGUgRE9NLCBcblxuLy8gRE9NIGFuZCBzdG9yYWdlIGFyZSBzZXBlcmF0ZSwgd2hlbiBhIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkLCBzYXZlIHRvIHN0b3JhZ2UgYnV0IHlvdSBhbHNvIGhhdmUgcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYW5kIHdoYXRldmVyIGlzIGluc2lkZSBwcm9qZWN0cyBhcnJheSBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLCBpbiB0aGUgY29ycmVjdCBmb3JtYXQsIHlvdSBtYXkgaGF2ZSB0byBwYXJzZSBvciBzdHJpbmdpZnkgdGhlIGRhdGEgdG8gd29yaywgXG5cbi8vIHJlZmxlY3Qgd2hhdGV2ZXIgaXMgaW4gdGhlIHByb2plY3RzIGFycmF5IHRvIHRoZSBET00uIFxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbigpIHsgXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiSGV5IHRoaXMgd29ya3NcIik7XG4vLyAgICB9XG4gICBcblxuXG4vLyAtLSBvbmUgaXNzdWUgSSBub3RpY2UgaXMgdGhhdCBpZiBJIGFkZCBhIHByb2plY3QgbmFtZSwgSSBoYXZlIHRvIHJlZnJlc2ggZm9yIGl0IHRvIGdldCBpdCB0b28gc2hvdy4gISEhXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8gbmV4dCBpcyB0byB0YWtlIHRoZSB2YWx1ZXMvcHJvamVjdCBuYW1lcyB0aGF0IGFyZSBpbiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFuZCBhcHBlbmQgdGhvc2UgdG8gdGhlIERPTSwgXG4vLyBmaXJzdCBqdXN0IHRyeSB0byBncmFiIHRoZSBlbGVtbmVudCBhbmQgYXBwZW5kIHZhbHVlIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gd29yayBmcm9tIHRoZXJlLCBcblxuXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBkbyBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uIFxuXG4vLyBub3cgdHJ5IHRvIHNlcGVyYXRlIGl0LCBwdXQgdGhhdCBsb2dpYyB3aXRoaW4gdGhlIERPTSBNb2R1bGUsIHRoZW4gb25jZSB5b3UgZ2V0IHRoYXQgd29ya2luZywgc3R5bGUgd2l0aGluIHNlcGVyYXRlIHNoZWV0LCBcblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGJsYWggaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKGJsYWgpXG4vLyAgIG5ld0FycmF5LnB1c2goYmxhaCk7XG4vLyB9O1xuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBwcm9qZWN0IGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIG5ld0FycmF5LnB1c2gocHJvamVjdCk7XG4vLyB9OyAgICBcblxuXG5cbi8vIHRoaXNcbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGluZGV4IGluIHNvbWVBcnJheSkge1xuLy8gLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4vLyBsZXQgeCA9IE9iamVjdC52YWx1ZXMoc29tZUFycmF5KTtcblxuLy8gLy8gY29uc29sZS5sb2coeCk7XG5cbi8vICAgbmV3QXJyYXkucHVzaCh4KTtcblxuLy8gICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4vLyB9O1xuXG5cblxuXG5cblxuLy8gSSB3aWxsIG5leHQgd3JpdGUgYSBmdW5jdGlvbiB3aXRoaW4gRE9NIGxvZ2ljLCB0aGF0IHdpbGwgZ2V0IHRoZSBsb2NhbCBzdG9yYWdlLCBncmFiIHRoZSBwcm9qZWN0IG5hbWVzLCB0aGVuIHByaW50IHRoZW0gdG8gdGhlIERPTSwgd2l0aCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gaWYgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgYXR0YWNoIGEgbGlzdGVuZXIsIHRoZW4gd2l0aGluIGxpc3RlbmVyIGxvZ2ljIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBET00sIGluIGJvdGggcGxhY2VzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIHRvIGNsZWFyIG1haW4gY29udGVudCB0byBtYWtlIHdheSBmb3IgdGhlIG5ldyBjb250ZW50LCB1c2luZyByZXBsYWNlIGNoaWxkLCBcblxuLy8geW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG9iaiB0byBhIHN0cmluZywgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHByb3BlciBmb3JtYXQgYmVmb3JlIGFwcGVuZGluZywgXG5cbi8vIGlmIGp1c3QgbmVlZHMgdG8gYmUgdGhlIHN0cmFpZ2h0IHByb2plY3QgbmFtZSwgXG5cbi8vIHNvIG9uY2UgY2xpY2tlZCBwb3B1bGF0ZSB3aXRoIHR3byBidXR0b25zLCBkZWxldGUsIGFuZCBhZGQgYnRuLCBpZiBhZGQgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGZvcm0gd2hpY2ggd2lsbCBzYXZlIGRhdGEgYW5kIGFkZCB0byB0b2RvJ3Mgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhcHBlbmQgdGhvc2UgdG9kbydzIHRvIHRoZSBET00gYXMgdGhleSBhcmUgYWRkZWQsIGFuZCByZW1vdmUgaWYgdGhleSBhcmUgZGVsZXRlZC4gXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkuY2xlYXIoKTsgXG5cblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBwcm9ibGVtcywgb24gc3RvcmFnZSB3aXRoIHRvZG8gbGlzdCwgbXkgZGF0YSBpcyBiZWluZyBzdG9yZWQgY29ycmVjdGx5LCAgXG5cbi8vIGJ1dCBJIGFtIG5vdGljaW5nIG15IHByb2plY3QgbmFtZXMgYXJlIGtlZXAgZ2V0dGluZyBuZXN0ZWQgaW5zaWRlIG11bHRpcGxlIGFycmF5J3MsIGN1cnJlbnRseSBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYXJlIG1hZGUgaW50byBvYmplY3RzIHRoZW4gb2JqZWN0cyBhcmUgcGFzc2VkIHRvIGFycmF5IGZvciBzdG9yYWdlLCBvbmNlIHRoZSBwYWdlIHJlbG9hZHMsIFxuXG4vLyBJIHBhcnNlIHRocm91Z2ggdGhlIGRhdGEgaW4gc3RvcmFnZSwgYW5kIHB1c2ggdGhlIGRhdGEgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGRhdGEgaXMgc2F2ZWQsIFxuXG4vLyBsaWtlIEkgc2FpZCwgYXJyYXkncyBhcmUgYmVpbmcgbmVzdGVkIHdpdGhpbiBtdWx0aXBsZSBsZXZlbHMgYW5kIEknbSBub3Qgc3VyZSB3aHkuIFxuXG4vLyBwaWN0dXJlIGF0dGFjaGVkIGFuZCBzb21lIHNuaXBwZXRzIG9mIG15IGNvZGUgYXR0YWNoZWQgZm9yIGNvbnRleHQsIEkgY2FuIGFsc28gYXR0YWNoIG15IHJlcG8gaWYgdGhhdCBoZWxwcyB0byBmdXJ0aGVyIGRlYnVnIHRoaXMsIFxuXG5cblxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICIsIlxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG4vLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG4gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlU2V0SXRlbShuYW1lKSB7IFxuXG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTsgIFxuICAgIFxuICAgIFxuICAgIFxufSAgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBcnJheVN0b3JhZ2UoaXRlbSkgeyBcbi8vICAgICBsZXQgdGhpc1Byb2plY3QgPSBpdGVtOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXNQcm9qZWN0KTtcbi8vIH1cblxuXG4vLyB3aGF0IHByb3BlcnRpZXMgd291bGQgdGhlIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24gaGF2ZT8gXG5cbi8vIHdoYXQgd291bGQgaXQgdGFrZSBpbj8gXG5cbi8vIEkgdGhpbmsgeW91IG1pZ2h0IGhhdmUgdG8gdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIG9yIGZpbHRlciBvdXQgdGhlIGl0ZW1zIHRoYXQgd2VyZSBkZWxldGVkLCBcblxuLy8gdGhlbiBwYXNzIHRoYXQgdG8gdXBkYXRlIHN0b3JhZ2UsIFxuXG5cbi8vIHNvIG5vdyBuZXh0LCBJIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gXG5cbi8vIHVwZGF0ZSBteSBzdG9yYWdlIGFuZCBhcnJheSBiYXNlZCBvbiB3aGVuIHVzZXIgZGVsZXRlcyBcblxuLy8gYSBzaW5nbGUgdG9kbyBpdGVtLCBcblxuLy8gc29tZXRoaW5nIHdpbGwgbmVlZCB0byBiZSBwYXNzZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gc3RvcmFnZSByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIERPTSwgXG5cbi8vIHByb2plY3QgaXMgZGVsZXRpbmcgZnJvbSB0aGUgRE9NLCBidXQgaXQgc3RpbGwgc2hvd3MgaW4gYXJyYXkgXG5cbi8vIGFuZCBzdGlsbCBzaG93cyBpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYWZ0ZXIgdGhlIHByb2plY3QgaXMgZGVsZXRlZCBmcm9tIHRoZSBET00sIFxuXG4vLyB0aGUgcHJpbnRWYWx1ZVRvRE9NIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gXG5cbi8vIHNvIHRoYXQgY2FuIHJlZmxlY3QgdGhlIGxvY2FsIHN0b3JhZ2UgdG8gdGhlIERPTSwgXG5cbi8vIHNvIEkgdGhpbmsgdGhlIHByb2plY3QgYXJyYXkgaXMgZ29pbmcgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIHRoZSBwcmludHZhbHVlIHRvIGRvbSBmdW5jdGlvbiBuZWVkcyB0byBjYWxsZWQsIHNvIHNod28gdG8gdGhlIERPTSBcblxuLy8gd2hhdCBpcyBpbnNpZGUgbG9jYWwgc3RvcmFnZSBcblxuLy8gY29udGludWUgdG8gYnJhaW5zdG9ybSBob3cgdG8gcmVmbGVjdCB0aGUgY2hhbmdlIGluIGRlbGV0aW5nIFxuXG4vLyBwcm9qZWN0cyBmcm9tIHRoZSBET00gYW5kIGhvdyB0byB1cGRhdGUgdGhhdCBpbiBsb2NhbCBzdG9yYWdlLiBcblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlVG9kb0l0ZW1zKHByb2plY3QpIHsgXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7IFxuICAgIFxuLy8gIH1cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZSgpIHsgXG4vLyAgIGxldCBnZXROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbiAgXG4vLyAgIGNvbnNvbGUubG9nKGdldE5hbWUpOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmogPSBwcm9qZWN0TmFtZUZhY3RvcnkoZ2V0TmFtZSk7IFxuXG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG15IGdvYWwgaXMgdG8gaGF2ZSBpbmRpdmR1YWwgcHJvamVjdCBuYW1lIG9iamVjdHMsIFxuXG4vLyBJIGFtIGFibGUgdG8gY3JlYXRlIHByb2plY3QgbmFtZXMsIGJ1dCB3aGVuIEkgdXNlIG9iamVjdHMgaXQgb25seSBhZGRzIG9udG8sIGFuZCBkb2VzIG5vdCBjcmVhdGUgdW5pcXVlIHByb2plY3RzLiBcblxuLy8gXG5cblxuXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFyciA9IFtdO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB2YWx1ZVtpXTsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQpO1xuLy8gICAgICAgICBhcnIucHVzaChwcm9qZWN0TmFtZUlucHV0KTtcblxuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coYXJyKTsgXG4vLyAgICAgcmV0dXJuIGFycjsgXG4vLyB9IFxuXG4vLyBqdXN0IGFkZCB2YWx1ZXMgdG8gdGhlIGFycmF5IFxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0TmFtZSh2YWx1ZSkgeyBcblxuLy8gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlKTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lU3RvcmFnZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=