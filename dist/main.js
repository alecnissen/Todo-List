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
___CSS_LOADER_EXPORT___.push([module.id, "#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2.5rem;\n  text-decoration: underline;\n}\n\n#navbar-project-names-go-here {\n  font-size: 2.3rem;\n  text-decoration: underline;\n}\n\n.header-title-text-to-do-list {\n  font-size: 5rem;\n  text-align: center;\n  text-decoration: underline;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AASA;EARC,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,0BAAA;AACD;;AAkBA;EACE,iBAAA;EACA,0BAAA;AAfF;;AAkBA;EACE,eAZqB;EAarB,kBAXsB;EAYtB,0BAV2B;EAW3B,YAjBkB;AAEpB","sourcesContent":["@mixin stylesForYourProjectsText { \n color: white;\n text-align: center;\n font-size: 2.5rem;\n text-decoration: underline;\n}\n\n\n\n#navbar-your-projects-title-text { \n  @include stylesForYourProjectsText;\n}\n\n\n\n  $mainHeaderColor: white; \n\n  $mainHeaderFontSize: 5rem; \n\n  $mainHeaderTextAlign: center; \n\n  $mainHeaderTextDecoration: underline; \n\n#navbar-project-names-go-here { \n  font-size: 2.3rem; \n  text-decoration: underline;\n} \n\n.header-title-text-to-do-list { \n  font-size: $mainHeaderFontSize;\n  text-align: $mainHeaderTextAlign; \n  text-decoration: $mainHeaderTextDecoration;\n  color: $mainHeaderColor;\n} \n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* import \"/style.scss\"; */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}\n\n.modal-header-text {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.Add-Project-btn {\n  /* width: 40px;  */\n  font-size: 1.5rem;\n}\n\n.input-field-modal {\n  font-size: 1.5rem;\n}\n\n.close-btn {\n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem;\n  width: 25px;\n  left: -210px;\n  bottom: 160px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n  font-family: \"Patua One\", cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas: \"header header\" \"nav main\" \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text,\n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  /* text-decoration: underline; */\n}\n\nheader {\n  grid-area: header;\n}\n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}\n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n#add-project-btn {\n  font-size: 1.5rem;\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: \"Patua One\", cursive;\n}\n\n#add-project-btn:hover {\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: \"Patua One\", cursive;\n}\n\n.project-input-field-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.input-field-text {\n  font-size: 1.5rem;\n  width: 240px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 1em;\n}\n\n.add-btn,\n.cancel-btn {\n  font-size: 1.2rem;\n  background-color: red;\n  color: white;\n  font-family: \"Patua One\", cursive;\n}\n\n.add-btn {\n  background-color: green;\n}\n\n.todo-pop-up-container {\n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 50%;\n  padding: 25px;\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}\n\n.submit-task-btn-pop-up-field {\n  display: flex;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px;\n  width: auto;\n}\n\n.pop-up-content {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n.create-to-do-form-btn {\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input {\n  position: absolute;\n  top: -5px;\n  left: -8px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n#project-todos-container {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5em;\n  flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles {\n  display: flex;\n  justify-content: center;\n  margin: 15px;\n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n.project-section-name-btn-div {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.main-content-section-project-name-div {\n  font-size: 5rem;\n  color: white;\n  text-align: center;\n}\n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n#navbar-project-names-go-here {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles {\n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n}\n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */\n.delete-btn-trash-can-svg-icon-styles,\n.add-btn-svg-project-name-styles {\n  height: 1em;\n  width: 1em;\n}\n\n.add-delete-btn-for-todo-container-styles {\n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n.edit-element-todo-item-styles {\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  margin-left: 0.2em;\n}\n\n.check-box-element-todo-styles {\n  width: 30px;\n  height: 30px;\n}\n\n.delete-icon-todo-item-styles {\n  width: 30px;\n  background-color: white;\n}\n\n.task-holder-for-todo-styles {\n  background-color: darkblue;\n  color: white;\n  line-height: 0.5em;\n  text-align: center;\n  width: 275px;\n  border: 5px solid black;\n}\n\n/* styles for add todo pop-up modal */\n.modal-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n/* experimenting with normal width btn size */\n#add-task-todo-modal {\n  font-size: 1.5rem;\n  background-color: darkblue;\n  color: white;\n  font-weight: bold;\n}\n\n.modal-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-todo {\n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n.close-the-todo-modal {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-todo label {\n  text-align: center;\n}\n\n.modal-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* begin edit todo modal styles here */\n.modal-edit-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-edit-todo .flex-for-edit-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-edit-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-edit-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal-edit {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-edit-todo {\n  z-index: 2;\n}\n\n.close-the-todo-modal-edit {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-edit-todo label {\n  text-align: center;\n}\n\n.modal-edit-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* styles for delete btn for todo modal */\n.modal-for-delete-btn-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white;\n}\n\n.flex-for-delete-btn-modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n}\n\n.overlay-for-todo-delete-btn {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-for-delete-btn-todo {\n  z-index: 2;\n}\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */\n/* shrink the size of the main content todo items when page resizes so no content can overflow */\n/* left off here, fix the modals for ipad */\n@media (max-width: 1800px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n  .modal-todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 40%;\n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  .modal-todo h1 {\n    font-size: 2rem;\n    text-align: center;\n  }\n  .modal-todo label {\n    font-size: 1rem;\n  }\n  .modal-todo input {\n    width: auto;\n    /* height: 150px  */\n  }\n  .close-the-todo-modal {\n    position: relative;\n    left: -75%;\n    top: -35px;\n  }\n  .modal-for-delete-btn-todo {\n    width: 250px;\n    position: absolute;\n    left: 40%;\n    top: 15%;\n  }\n  .modal-for-delete-btn-todo h1 {\n    font-size: 1rem;\n  }\n  .modal-edit-todo {\n    width: 250px;\n    position: absolute;\n    left: 40%;\n    top: 15%;\n  }\n  .close-the-todo-modal-edit {\n    /* width: 250px;  */\n    position: absolute;\n    left: 1%;\n    bottom: 90%;\n  }\n  .modal {\n    position: absolute;\n    /* left: 28%;  */\n    left: 30%;\n  }\n}\n@media (max-width: 430px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 2.2rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 255px;\n  }\n  .modal > input {\n    width: 230px;\n    font-size: 1rem;\n  }\n  .modal > button {\n    font-size: 1rem;\n  }\n  .close-btn {\n    position: relative;\n    left: -7em;\n  }\n  nav {\n    height: 500px;\n  }\n  .modal-todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  .modal-todo h1 {\n    font-size: 1.4rem;\n  }\n  .modal-todo label {\n    font-size: 1rem;\n  }\n  .modal-todo input {\n    width: auto;\n    /* height: 150px  */\n  }\n  .close-the-todo-modal {\n    position: relative;\n    left: -155px;\n    top: 2px;\n  }\n  /* left off here 5/8/23 */\n  .modal-for-delete-btn-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .modal-for-delete-btn-todo h1 {\n    font-size: 1rem;\n  }\n  .modal-edit-todo {\n    width: 250px;\n    position: absolute;\n    left: 20%;\n    top: 80%;\n  }\n  .close-the-todo-modal-edit {\n    /* width: 250px;  */\n    position: absolute;\n    left: 5%;\n    bottom: 90%;\n  }\n}\n@media (max-width: 400px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 2.2rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 255px;\n  }\n  .modal > input {\n    width: 230px;\n    font-size: 1rem;\n  }\n  .modal > button {\n    font-size: 1rem;\n  }\n  .close-btn {\n    position: relative;\n    left: -7em;\n  }\n  nav {\n    height: 500px;\n  }\n  .modal-todo {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n  .modal-todo h1 {\n    font-size: 1.4rem;\n  }\n  .modal-todo label {\n    font-size: 1rem;\n  }\n  .modal-todo input {\n    width: auto;\n    /* height: 150px  */\n  }\n  .close-the-todo-modal {\n    position: relative;\n    left: -155px;\n    top: 2px;\n  }\n  /* left off here 5/8/23 */\n  .modal-for-delete-btn-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .modal-for-delete-btn-todo h1 {\n    font-size: 1rem;\n  }\n  .modal-edit-todo {\n    width: 250px;\n    position: absolute;\n    left: 15%;\n    top: 15%;\n  }\n  .close-the-todo-modal-edit {\n    /* width: 250px;  */\n    position: absolute;\n    left: 5%;\n    bottom: 90%;\n  }\n}\n@media (max-width: 740px) {\n  body {\n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n    flex-direction: column;\n  }\n  main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media (max-width: 1120px) {\n  #project-todos-container {\n    display: flex;\n    font-size: 0.8rem;\n  }\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n}\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n\n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n/* font-family: 'Patua One', cursive; */\n/* grid-template-columns: 0.2fr 1fr; */\n/* grid-template-areas:\n  \"header header\"\n  \"nav main\"\n  \"nav main\"; */\n/* } */\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n/* header {\n  grid-area: header;\n}  */\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n/* position: absolute;\ntop: 80%; \nleft: 60%; \ntransform: translate(-50%, -50%);\ntext-align: center;\nbackground-color: white;\nfont-size: 1.5rem;\ndisplay: flex;\nflex-direction: column;\nheight: 50%; \nwidth: 50%; */\n/* padding: 25px;  */\n/* font-size: 3rem;\nbackground-color: white;\ncolor: black; */\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n/* .title-input-field-styles { \n  width: 100%;\n} */\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n/* .pop-up-content { \n  position: relative;\n} */\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0BAAA;AAMA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,UAAA;AAHF;;AAMA;EACE,kBAAA;EACA,eAAA;AAHF;;AAMA;EACE,kBAAA;EACA,iBAAA;AAHF;;AAOA;EACE,iBAAA;AAJF;;AASA;EACE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;AANF;;AASA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,0BAAA;EACA,WAAA;AANF;;AAcA;EACE,aAAA;EACA;mBAAA;EAEE,iCAAA;EACF,gCAAA;EACA,0DACE;AAZJ;;AAiBA;EACE,aAAA;EACA,6BAAA;EACA,cAAA;EACA,yCAAA;EACA,0BAAA;EACA,uBAAA;EACA,aAAA;AAdF;;AAiBA;;EAEE,YAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;AAdF;;AAiBA;EACE,iBAAA;AAdF;;AAiBA;EACE,eAAA;EACA,WAAA;EACA,yCAAA;EACA,oCAAA;AAdF;;AAiBA;EACE,wCAAA;EACA,0BAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;AAdF;;AAiBA;;;;;GAAA;AAOA;EACE,iBAAA;EACA,YAAA;EACA,wCAAA;EACA,0BAAA;EACA,YAAA;EACA,iCAAA;AAfF;;AAkBA;EACE,YAAA;EACA,wCAAA;EACA,0BAAA;EACA,YAAA;EACA,eAAA;EACA,iCAAA;AAfF;;AAkBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AAfF;;AAkBA;EACE,iBAAA;EACA,YAAA;AAfF;;AAkBA;EACE,aAAA;EACA,QAAA;AAfF;;AAkBA;;EAEE,iBAAA;EACA,qBAAA;EACA,YAAA;EACA,iCAAA;AAfF;;AAkBA;EACE,uBAAA;AAfF;;AAkBA;EACE;4BAAA;EAEA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,kBAAA;EACA,uBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA;;iBAAA;AAbF;;AAkBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;AAfF;;AAkBA;EACE,oCAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;;AAkBA;;GAAA;AAIA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;AAhBF;;AAmBA;EACE,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;AAhBF;;AAoBA;EACC,aAAA;EACA,mBAAA;EACA,UAAA;EACA,eAAA;AAjBD;;AAoBA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AAjBF;;AAoBA;;GAAA;AAIA;EACE,eAAA;EACA,YAAA;EACA,kBAAA;AAlBF;;AAqBA;EACE,eAAA;EACA,YAAA;EACA,kBAAA;AAlBF;;AAqBA;;;;IAAA;AAOA;;;;IAAA;AAOA;EACE,eAAA;EACA,YAAA;EACA,kBAAA;AAtBF;;AAyBA;EACE,eAAA;EACA,kBAAA;EACA,eAAA;AAtBF;;AAyBA;;;GAAA;AAKA;;EAEE,WAAA;EACA,UAAA;AAvBF;;AA0BA;EACE,eAAA;EACA,wBAAA;EACA,aAAA;EACA,uBAAA;EACA,QAAA;AAvBF;;AA0BA;EACE,YAAA;EACA,WAAA;EACA,uBAAA;EACA,kBAAA;AAvBF;;AA0BA;EACE,WAAA;EACA,YAAA;AAvBF;;AA0BA;EACE,WAAA;EACA,uBAAA;AAvBF;;AA0BA;EACE,0BAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AAvBF;;AA0BA,qCAAA;AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,sBAAA;EACA,mBAAA;AAxBF;;AA2BA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAxBF;;AA2BA;EACE,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AAxBF;;AA2BA,6CAAA;AAEA;EACC,iBAAA;EACA,0BAAA;EACA,YAAA;EACA,iBAAA;AAzBD;;AA4BA;EACE,YAAA;AAzBF;;AA6BA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,0BAAA;EACA,UAAA;AA1BF;;AA6BA;EACE,UAAA;AA1BF;;AA6BA;;;GAAA;AAKA;EACE,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AA3BF;;AAiCA;EACE,kBAAA;AA9BF;;AAiCA;EACE,iBAAA;AA9BF;;AAkCA,sCAAA;AAIA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,sBAAA;EACA,mBAAA;AAlCF;;AAsCA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AAnCF;;AAsCA;EACE,oBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AAnCF;;AAsCA;EACE,YAAA;AAnCF;;AAsCA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,0BAAA;EACA,UAAA;AAnCF;;AAuCA;EACE,UAAA;AApCF;;AAuCA;EACE,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;AApCF;;AAuCA;EACE,kBAAA;AApCF;;AAuCA;EACE,iBAAA;AApCF;;AA2CA,yCAAA;AAEA;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,0BAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,YAAA;AAzCF;;AA4CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAzCF;;AA6CA;EACE,eAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,8BAAA;EACA,0BAAA;EACA,UAAA;AA1CF;;AA6CA;EACE,UAAA;AA1CF;;AA+CA;;;;;;qBAAA;AASA,gGAAA;AAEA,2CAAA;AAGA;EACE;IACE,aAAA;IACA,sBAAA;EAjDF;EAoDA;IACE,aAAA;IACA,uBAAA;EAlDF;EAsDA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,0BAAA;IACA,sBAAA;IACA,mBAAA;EApDF;EAuDA;IACE,eAAA;IACA,kBAAA;EArDF;EAwDA;IACE,eAAA;EAtDF;EAyDA;IACE,WAAA;IACA,mBAAA;EAvDF;EA0DA;IACE,kBAAA;IACA,UAAA;IACA,UAAA;EAxDF;EA2DA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EAzDF;EA4DA;IACE,eAAA;EA1DF;EA4DA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EA1DF;EA6DA;IACE,mBAAA;IACA,kBAAA;IACA,QAAA;IACA,WAAA;EA3DF;EA8DA;IACE,kBAAA;IACA,gBAAA;IACA,SAAA;EA5DF;AACF;AAkEA;EACE;IACE,aAAA;IACA,sBAAA;EAhEF;EAmEA;IACE,iBAAA;EAjEF;EAoEA;IACE,WAAA;IACA,YAAA;IACA,aAAA;EAlEF;EAqEA;IACE,WAAA;IACA,YAAA;IACA,iBAAA;IACA;6BAAA;EAlEF;EAqEA;IACE,eAAA;IACA,QAAA;IACA,WAAA;IACA,UAAA;EAnEF;EAsEA;IACE,iBAAA;EApEF;EAwEA;IACE,YAAA;EAtEF;EAyEA;IACE,YAAA;IACA,eAAA;EAvEF;EA0EA;IACE,eAAA;EAxEF;EA2EA;IACE,kBAAA;IACA,UAAA;EAzEF;EA4EA;IACE,aAAA;EA1EF;EA6EA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,0BAAA;IACA,sBAAA;IACA,mBAAA;EA3EF;EA8EA;IACE,iBAAA;EA5EF;EA+EA;IACE,eAAA;EA7EF;EAgFA;IACE,WAAA;IACA,mBAAA;EA9EF;EAiFA;IACE,kBAAA;IACA,YAAA;IACA,QAAA;EA/EF;EAkFA,yBAAA;EAEA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EAjFF;EAoFA;IACE,eAAA;EAlFF;EAqFA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EAnFF;EAsFA;IACE,mBAAA;IACA,kBAAA;IACA,QAAA;IACA,WAAA;EApFF;AACF;AA0FA;EAEE;IACE,aAAA;IACA,sBAAA;EAzFF;EA4FA;IACE,iBAAA;EA1FF;EA6FA;IACE,WAAA;IACA,YAAA;IACA,aAAA;EA3FF;EA8FA;IACE,WAAA;IACA,YAAA;IACA,iBAAA;IACA;6BAAA;EA3FF;EA8FA;IACE,eAAA;IACA,QAAA;IACA,WAAA;IACA,UAAA;EA5FF;EA+FA;IACE,iBAAA;EA7FF;EAiGA;IACE,YAAA;EA/FF;EAkGA;IACE,YAAA;IACA,eAAA;EAhGF;EAmGA;IACE,eAAA;EAjGF;EAoGA;IACE,kBAAA;IACA,UAAA;EAlGF;EAqGA;IACE,aAAA;EAnGF;EAsGA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,WAAA;IACA,YAAA;IACA,eAAA;IACA,iBAAA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,0BAAA;IACA,sBAAA;IACA,mBAAA;EApGF;EAuGA;IACE,iBAAA;EArGF;EAwGA;IACE,eAAA;EAtGF;EAyGA;IACE,WAAA;IACA,mBAAA;EAvGF;EA0GA;IACE,kBAAA;IACA,YAAA;IACA,QAAA;EAxGF;EA2GA,yBAAA;EAEA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EA1GF;EA6GA;IACE,eAAA;EA3GF;EA8GA;IACE,YAAA;IACA,kBAAA;IACA,SAAA;IACA,QAAA;EA5GF;EA+GA;IACE,mBAAA;IACA,kBAAA;IACA,QAAA;IACA,WAAA;EA7GF;AACF;AAiHA;EACE;IACE,aAAA;IACA,iEAAA;IACA,sBAAA;EA/GF;EAkHA;IACE,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,kBAAA;IACA,iEAAA;EAhHF;EAmHA;IACE,aAAA;IACA,uBAAA;EAjHF;AACF;AAsHA;EACG;IACC,aAAA;IACA,iBAAA;EApHF;EAuHA;;KAAA;AAnHF;AAyHA;;;;;;;;;;;;;;;;;;;;GAAA;AAsBA;;;;;;;;;;;;;;;;;;;;;GAAA;AAmDA;;6LAAA;AAKA;;;mBAAA;AAII,uCAAA;AACF,sCAAA;AACA;;;eAAA;AAIF,MAAA;AAEA;;;;;;;GAAA;AASA;;;;;;IAAA;AAQA;;IAAA;AAIA;;;;GAAA;AAMA;;;;;IAAA;AAOA;;;;;GAAA;AAOA;;;;;;KAAA;AAQA;;;;;;IAAA;AAQA;;;;;;IAAA;AAQA;;;IAAA;AAKA;;;IAAA;AAIA;;;;;;;IAAA;AASA;;IAAA;AAGA;;;4BAAA;AAIE;;;;;;;;;;aAAA;AAWA,oBAAA;AACA;;eAAA;AAKF;;;;;;;;;IAAA;AAUA;;;;;;;;;;KAAA;AAYA;;GAAA;AAIA;;;;;;;;;;IAAA;AAYA;;;;GAAA;AAMA;;GAAA;AAIA;;;;KAAA;AAMA;;;;IAAA","sourcesContent":["/* import \"/style.scss\"; */ \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap');\n\n\n\n.modal { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}  \n\n.modal-header-text { \n  text-align: center;\n  font-size: 2rem;\n} \n\n.Add-Project-btn { \n  /* width: 40px;  */\n  font-size: 1.5rem; \n  \n} \n\n.input-field-modal { \n  font-size: 1.5rem;\n}\n\n\n\n.close-btn { \n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem; \n  width: 25px; \n  left: -210px; \n  bottom: 160px;  \n}\n\n.overlay { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\n\n\n\n\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    font-family: 'Patua One', cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text, \n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  /* text-decoration: underline; */\n} \n\nheader {\n  grid-area: header;\n} \n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n} \n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n\n#add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: 'Patua One', cursive;\n}  \n\n#add-project-btn:hover { \n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n} \n\n.project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n} \n\n.input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n} \n\n.btn-container { \n  display: flex;\n  gap: 1em; \n} \n\n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n} \n\n.add-btn { \n  background-color: green;\n} \n\n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%;\n  padding: 25px; \n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}   \n\n.submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n} \n\n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}  \n\n/* .title-input-field-styles { \n  width: 100%;\n} */ \n\n.create-to-do-form-btn { \n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n} \n\n#project-todos-container { \n display: flex;\n flex-direction: row;\n gap: 0.5em;\n flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n.project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}  \n\n.main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n} \n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n\n\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n\n\n#navbar-project-names-go-here { \n  font-size: 2rem; \n  color: white; \n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles { \n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n} \n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */ \n\n.delete-btn-trash-can-svg-icon-styles, \n.add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n}\n\n.add-delete-btn-for-todo-container-styles { \n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em; \n} \n\n.edit-element-todo-item-styles { \n  height: 30px; \n  width: 30px; \n  background-color: white;\n  margin-left: 0.20em;\n}\n\n.check-box-element-todo-styles { \n  width: 30px; \n  height: 30px; \n} \n\n.delete-icon-todo-item-styles { \n  width: 30px;\n  background-color: white;\n} \n\n.task-holder-for-todo-styles { \n  background-color: darkblue;\n  color: white; \n  line-height: 0.5em;\n  text-align: center;\n  width: 275px; \n  border: 5px solid black; \n}\n\n/* styles for add todo pop-up modal */ \n\n.modal-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n/* experimenting with normal width btn size */ \n\n#add-task-todo-modal { \n font-size: 1.5rem; \n background-color: darkblue;\n color: white; \n font-weight: bold;\n}\n\n.modal-todo > label { \n  color: white;\n} \n\n\n.overlay-for-todo-modal { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-todo { \n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n\n.close-the-todo-modal { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n\n}\n\n\n\n.modal-todo label { \n  text-align: center;\n}\n\n.modal-todo h1 { \n  font-size: 2.5rem; \n} \n\n\n/* begin edit todo modal styles here */ \n\n\n\n.modal-edit-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n} \n\n\n.modal-edit-todo .flex-for-edit-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n} \n\n.modal-edit-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-edit-todo > label { \n  color: white;\n} \n\n.overlay-for-todo-modal-edit { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n\n.modal-edit-todo { \n  z-index: 2;\n} \n\n.close-the-todo-modal-edit { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n} \n\n.modal-edit-todo label { \n  text-align: center;\n} \n\n.modal-edit-todo h1 { \n  font-size: 2.5rem;\n}\n\n\n\n\n\n/* styles for delete btn for todo modal */ \n\n.modal-for-delete-btn-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white; \n} \n\n.flex-for-delete-btn-modal { \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em; \n} \n\n\n.overlay-for-todo-delete-btn { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-for-delete-btn-todo { \n  z-index: 2;\n}\n\n\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */ \n\n\n/* shrink the size of the main content todo items when page resizes so no content can overflow */ \n\n/* left off here, fix the modals for ipad */ \n\n\n@media (max-width: 1800px) { \n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  } \n\n  .modal-todo { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 40%; \n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n\n  .modal-todo h1 { \n    font-size: 2rem;\n    text-align: center;\n  } \n\n  .modal-todo label { \n    font-size: 1rem;\n  }\n\n  .modal-todo input { \n    width: auto; \n    /* height: 150px  */\n  } \n\n  .close-the-todo-modal { \n    position: relative;\n    left: -75%;\n    top: -35px;\n  } \n\n  .modal-for-delete-btn-todo { \n    width: 250px;\n    position: absolute;\n    left: 40%; \n    top: 15%;\n  } \n\n  .modal-for-delete-btn-todo h1 { \n    font-size: 1rem;\n  } \n  .modal-edit-todo { \n    width: 250px; \n    position: absolute;\n    left: 40%; \n    top: 15%;\n  } \n\n  .close-the-todo-modal-edit { \n    /* width: 250px;  */\n    position: absolute;\n    left: 1%; \n    bottom: 90%;\n  } \n\n  .modal { \n    position: absolute;\n    /* left: 28%;  */\n    left: 30%; \n  }\n\n} \n\n\n\n@media (max-width: 430px) { \n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 2.2rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 255px; \n  } \n\n  .modal > input { \n    width: 230px; \n    font-size: 1rem;\n  } \n\n  .modal > button { \n    font-size: 1rem;\n  } \n\n  .close-btn { \n    position: relative;\n    left: -7em;\n  } \n\n  nav { \n    height: 500px; \n  } \n\n  .modal-todo { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%; \n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n\n  .modal-todo h1 { \n    font-size: 1.4rem;\n  } \n\n  .modal-todo label { \n    font-size: 1rem;\n  }\n\n  .modal-todo input { \n    width: auto; \n    /* height: 150px  */\n  } \n\n  .close-the-todo-modal { \n    position: relative;\n    left: -155px;\n    top: 2px;\n  } \n\n  /* left off here 5/8/23 */ \n\n  .modal-for-delete-btn-todo { \n    width: 250px;\n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .modal-for-delete-btn-todo h1 { \n    font-size: 1rem;\n  } \n\n  .modal-edit-todo { \n    width: 250px; \n    position: absolute;\n    left: 20%; \n    top: 80%;\n  } \n\n  .close-the-todo-modal-edit { \n    /* width: 250px;  */\n    position: absolute;\n    left: 5%; \n    bottom: 90%;\n  }\n}\n\n\n\n\n@media (max-width: 400px) { \n\n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 2.2rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 255px; \n  } \n\n  .modal > input { \n    width: 230px; \n    font-size: 1rem;\n  } \n\n  .modal > button { \n    font-size: 1rem;\n  } \n\n  .close-btn { \n    position: relative;\n    left: -7em;\n  } \n\n  nav { \n    height: 500px; \n  } \n\n  .modal-todo { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 0.4rem;\n    width: 250px;\n    padding: 1.3rem;\n    min-height: 250px;\n    position: absolute;\n    top: 10%;\n    left: 10%; \n    background-color: darkblue;\n    border: 1px solid #ddd;\n    border-radius: 15px;\n  }\n\n  .modal-todo h1 { \n    font-size: 1.4rem;\n  } \n\n  .modal-todo label { \n    font-size: 1rem;\n  }\n\n  .modal-todo input { \n    width: auto; \n    /* height: 150px  */\n  } \n\n  .close-the-todo-modal { \n    position: relative;\n    left: -155px;\n    top: 2px;\n  } \n\n  /* left off here 5/8/23 */ \n\n  .modal-for-delete-btn-todo { \n    width: 250px;\n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .modal-for-delete-btn-todo h1 { \n    font-size: 1rem;\n  } \n\n  .modal-edit-todo { \n    width: 250px; \n    position: absolute;\n    left: 15%; \n    top: 15%;\n  } \n\n  .close-the-todo-modal-edit { \n    /* width: 250px;  */\n    position: absolute;\n    left: 5%; \n    bottom: 90%;\n  }\n} \n\n\n@media (max-width: 740px) { \n  body { \n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n    flex-direction: column;\n  } \n\n  main { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n  }\n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  }\n} \n\n\n@media (max-width: 1120px) { \n   #project-todos-container { \n    display: flex;\n    font-size: 0.8rem;\n  } \n\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n\n}\n\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n \n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n\n\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    /* font-family: 'Patua One', cursive; */\n  /* grid-template-columns: 0.2fr 1fr; */ \n  /* grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\"; */\n/* } */\n\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n\n/* header {\n  grid-area: header;\n}  */\n\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  /* position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%; */\n  /* padding: 25px;  */\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n  \n\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sU0FBUyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sUUFBUSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sWUFBWSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sV0FBVyxNQUFNLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUs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O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2Qjs7QUFFbEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVTs7OztBQUlWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBSTs7O0FBR0o7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0Es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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsZUFBZSxjQUFjO0FBQzdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBLE1BQU07OztBQUdOOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JuRUE7O0FBRUE7OztBQUdzQjs7QUFFQTs7QUFFRjs7QUFFRDs7QUFFaUY7O0FBRXBHLENBQXNFOztBQUV0RSxDQUFzRTs7QUFFdEU7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLLHdEQUFpQjs7QUFFdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJEQUFnQixDQUFDLG1EQUFZOzs7O0FBSTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7Ozs7O0FBT0E7Ozs7O0FBS0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmlDb0I7O0FBRXBCLFlBQVksZUFBZTs7QUFFM0IsQ0FBcUc7OztBQUd0Rjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7QUFFQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25OQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9jb25kaXRpb25hbExvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNuYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQVJDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFDRDs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZUFacUI7RUFhckIsa0JBWHNCO0VBWXRCLDBCQVYyQjtFQVczQixZQWpCa0I7QUFFcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHN0eWxlc0ZvcllvdXJQcm9qZWN0c1RleHQgeyBcXG4gY29sb3I6IHdoaXRlO1xcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIGZvbnQtc2l6ZTogMi41cmVtO1xcbiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuXFxuXFxuI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQgeyBcXG4gIEBpbmNsdWRlIHN0eWxlc0ZvcllvdXJQcm9qZWN0c1RleHQ7XFxufVxcblxcblxcblxcbiAgJG1haW5IZWFkZXJDb2xvcjogd2hpdGU7IFxcblxcbiAgJG1haW5IZWFkZXJGb250U2l6ZTogNXJlbTsgXFxuXFxuICAkbWFpbkhlYWRlclRleHRBbGlnbjogY2VudGVyOyBcXG5cXG4gICRtYWluSGVhZGVyVGV4dERlY29yYXRpb246IHVuZGVybGluZTsgXFxuXFxuI25hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmUgeyBcXG4gIGZvbnQtc2l6ZTogMi4zcmVtOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gXFxuXFxuLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gIGZvbnQtc2l6ZTogJG1haW5IZWFkZXJGb250U2l6ZTtcXG4gIHRleHQtYWxpZ246ICRtYWluSGVhZGVyVGV4dEFsaWduOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogJG1haW5IZWFkZXJUZXh0RGVjb3JhdGlvbjtcXG4gIGNvbG9yOiAkbWFpbkhlYWRlckNvbG9yO1xcbn0gXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMC40cmVtOyAqL1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uQWRkLVByb2plY3QtYnRuIHtcXG4gIC8qIHdpZHRoOiA0MHB4OyAgKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQtbW9kYWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogcmlnaHQ6IDU1cHg7ICovXFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMjVweDtcXG4gIGxlZnQ6IC0yMTBweDtcXG4gIGJvdHRvbTogMTYwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwibmF2IG1haW5cXFwiIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZiYXItaG9tZS1jb250ZW50LXRleHQsXFxuI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICB3aWR0aDogYXV0bztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTc2LCAyMTgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjI3LCAyMjcpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmlucHV0LWZpZWxkLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmFkZC1idG4sXFxuLmNhbmNlbC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlO1xcbiAgbGVmdDogNjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgLyogZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuLmNyZWF0ZS10by1kby1mb3JtLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idG4tdG8tZG8taW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogLThweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiAucHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb24geyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LXNpemU6IDNyZW07IFxcbn0gICovXFxuLyogLnByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW4geyBcXG4gIGZvbnQtc2l6ZTogNXJlbTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbn0gICovXFxuI25hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi9cXG4uZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzLFxcbi5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuXFxuLmFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5lZGl0LWVsZW1lbnQtdG9kby1pdGVtLXN0eWxlcyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xcbn1cXG5cXG4uY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXMge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtaWNvbi10b2RvLWl0ZW0tc3R5bGVzIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsaW5lLWhlaWdodDogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjc1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBhZGQgdG9kbyBwb3AtdXAgbW9kYWwgKi9cXG4ubW9kYWwtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gLmZsZXgtZm9yLXRvZG8tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLyogZXhwZXJpbWVudGluZyB3aXRoIG5vcm1hbCB3aWR0aCBidG4gc2l6ZSAqL1xcbiNhZGQtdGFzay10b2RvLW1vZGFsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBsZWZ0OiAtMjk1cHg7XFxuICBib3R0b206IDU1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqL1xcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMzVweDtcXG4gIGxlZnQ6IC0yOTVweDtcXG4gIGJvdHRvbTogNTVweDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqL1xcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqL1xcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi9cXG4vKiBsZWZ0IG9mZiBoZXJlLCBmaXggdGhlIG1vZGFscyBmb3IgaXBhZCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAubW9kYWwtdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaDEge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgLyogaGVpZ2h0OiAxNTBweCAgKi9cXG4gIH1cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTc1JTtcXG4gICAgdG9wOiAtMzVweDtcXG4gIH1cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiAxNSU7XFxuICB9XFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IDE1JTtcXG4gIH1cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHtcXG4gICAgLyogd2lkdGg6IDI1MHB4OyAgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxJTtcXG4gICAgYm90dG9tOiA5MCU7XFxuICB9XFxuICAubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC8qIGxlZnQ6IDI4JTsgICovXFxuICAgIGxlZnQ6IDMwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICB9XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjVweDtcXG4gIH1cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgfVxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgfVxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMjU1cHg7XFxuICB9XFxuICAubW9kYWwgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmNsb3NlLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTdlbTtcXG4gIH1cXG4gIG5hdiB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICB9XFxuICAubW9kYWwtdG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaDEge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgLyogaGVpZ2h0OiAxNTBweCAgKi9cXG4gIH1cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTE1NXB4O1xcbiAgICB0b3A6IDJweDtcXG4gIH1cXG4gIC8qIGxlZnQgb2ZmIGhlcmUgNS84LzIzICovXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxNSU7XFxuICAgIHRvcDogMTUlO1xcbiAgfVxcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8gaDEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAubW9kYWwtZWRpdC10b2RvIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDIwJTtcXG4gICAgdG9wOiA4MCU7XFxuICB9XFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7XFxuICAgIC8qIHdpZHRoOiAyNTBweDsgICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNSU7XFxuICAgIGJvdHRvbTogOTAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9XFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgYm90dG9tOiA1MCU7XFxuICAgIHdpZHRoOiAyZW07XFxuICB9XFxuICAubW9kYWwtaGVhZGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAyNTVweDtcXG4gIH1cXG4gIC5tb2RhbCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAubW9kYWwgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuY2xvc2UtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtN2VtO1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gIH1cXG4gIC5tb2RhbC10b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxuICAubW9kYWwtdG9kbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcbiAgLm1vZGFsLXRvZG8gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAubW9kYWwtdG9kbyBpbnB1dCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IDE1MHB4ICAqL1xcbiAgfVxcbiAgLmNsb3NlLXRoZS10b2RvLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMTU1cHg7XFxuICAgIHRvcDogMnB4O1xcbiAgfVxcbiAgLyogbGVmdCBvZmYgaGVyZSA1LzgvMjMgKi9cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE1JTtcXG4gICAgdG9wOiAxNSU7XFxuICB9XFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTUlO1xcbiAgICB0b3A6IDE1JTtcXG4gIH1cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHtcXG4gICAgLyogd2lkdGg6IDI1MHB4OyAgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgYm90dG9tOiA5MCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgfVxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbiAgLyogLnRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlcyB7IFxcbiAgICBsaW5lLWhlaWdodDogMDsgXFxuICB9ICovXFxufVxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbWFpbiB7IFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIH1cXG59ICovXFxuLyogXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogNTBweDsgXFxuICB9XFxufSAqL1xcbi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7ICovXFxuLyogYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuLyogZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCI7ICovXFxuLyogfSAqL1xcbi8qIG5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn0gKi9cXG4vKiAubmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4ubmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59ICAqL1xcbi8qIGhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59ICAqL1xcbi8qIG1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTtcXG59ICovXFxuLyogLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gICovXFxuLyogLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG4vKiAjYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICAqL1xcbi8qICNhZGQtcHJvamVjdC1idG46aG92ZXIgeyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuLyogLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSAgKi9cXG4vKiAuaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gICovXFxuLyogLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSAgKi9cXG4vKiBcXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG4vKiAuYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSAgKi9cXG4vKiBcXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4vKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiA4MCU7IFxcbmxlZnQ6IDYwJTsgXFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmZvbnQtc2l6ZTogMS41cmVtO1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5oZWlnaHQ6IDUwJTsgXFxud2lkdGg6IDUwJTsgKi9cXG4vKiBwYWRkaW5nOiAyNXB4OyAgKi9cXG4vKiBmb250LXNpemU6IDNyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY29sb3I6IGJsYWNrOyAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gIHdpZHRoOiBhdXRvO1xcbn0gICovXFxuLyogXFxuLnBvcC11cC1jb250ZW50IHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgO1xcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICAqL1xcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG4vKiAuY2xvc2UtYnRuLXRvLWRvLWlucHV0IHsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7IFxcbiAgbGVmdDogLThweDsgXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4OyBcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59ICAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4OyBcXG59ICovXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi8qIC5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgICovXFxuLyogLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYgeyBcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBQTtBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtF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SEE7O0tBQUE7QUFuSEY7QUF5SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBbURBOzs2TEFBQTtBQUtBOzs7bUJBQUE7QUFJSSx1Q0FBQTtBQUNGLHNDQUFBO0FBQ0E7OztlQUFBO0FBSUYsTUFBQTtBQUVBOzs7Ozs7O0dBQUE7QUFTQTs7Ozs7O0lBQUE7QUFRQTs7SUFBQTtBQUlBOzs7O0dBQUE7QUFNQTs7Ozs7SUFBQTtBQU9BOzs7OztHQUFBO0FBT0E7Ozs7OztLQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7OztJQUFBO0FBS0E7OztJQUFBO0FBSUE7Ozs7Ozs7SUFBQTtBQVNBOztJQUFBO0FBR0E7Ozs0QkFBQTtBQUlFOzs7Ozs7Ozs7O2FBQUE7QUFXQSxvQkFBQTtBQUNBOztlQUFBO0FBS0Y7Ozs7Ozs7OztJQUFBO0FBVUE7Ozs7Ozs7Ozs7S0FBQTtBQVlBOztHQUFBO0FBSUE7Ozs7Ozs7Ozs7SUFBQTtBQVlBOzs7O0dBQUE7QUFNQTs7R0FBQTtBQUlBOzs7O0tBQUE7QUFNQTs7OztJQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyAqLyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuLm1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMC40cmVtOyAqL1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAzO1xcbn0gIFxcblxcbi5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn0gXFxuXFxuLkFkZC1Qcm9qZWN0LWJ0biB7IFxcbiAgLyogd2lkdGg6IDQwcHg7ICAqL1xcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgXFxufSBcXG5cXG4uaW5wdXQtZmllbGQtbW9kYWwgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG5cXG4uY2xvc2UtYnRuIHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiByaWdodDogNTVweDsgKi9cXG4gIGZvbnQtc2l6ZTogMXJlbTsgXFxuICB3aWR0aDogMjVweDsgXFxuICBsZWZ0OiAtMjEwcHg7IFxcbiAgYm90dG9tOiAxNjBweDsgIFxcbn1cXG5cXG4ub3ZlcmxheSB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4jbmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cXG59IFxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59IFxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyNywgMjI3KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSBcXG5cXG4vKiAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbiNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICBcXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gXFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSBcXG5cXG4uaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gXFxuXFxuLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSBcXG5cXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSBcXG5cXG4uYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSBcXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlOyBcXG4gIGxlZnQ6IDYwJTsgXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTAlOyBcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4OyBcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrOyAqL1xcbn0gICBcXG5cXG4uc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59IFxcblxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICBcXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovIFxcblxcbi5jcmVhdGUtdG8tZG8tZm9ybS1idG4geyBcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSBcXG5cXG4jcHJvamVjdC10b2Rvcy1jb250YWluZXIgeyBcXG4gZGlzcGxheTogZmxleDtcXG4gZmxleC1kaXJlY3Rpb246IHJvdztcXG4gZ2FwOiAwLjVlbTtcXG4gZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufVxcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG5cXG4ucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gIFxcblxcbi5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuLyogLnByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1zaXplOiAzcmVtOyBcXG59ICAqL1xcblxcblxcbi8qIC5wcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluIHsgXFxuICBmb250LXNpemU6IDVyZW07IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG59ICAqL1xcblxcblxcbiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHsgXFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn0gXFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi8gXFxuXFxuLmRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlcywgXFxuLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn1cXG5cXG4uYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07IFxcbn0gXFxuXFxuLmVkaXQtZWxlbWVudC10b2RvLWl0ZW0tc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDMwcHg7IFxcbiAgd2lkdGg6IDMwcHg7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC4yMGVtO1xcbn1cXG5cXG4uY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXMgeyBcXG4gIHdpZHRoOiAzMHB4OyBcXG4gIGhlaWdodDogMzBweDsgXFxufSBcXG5cXG4uZGVsZXRlLWljb24tdG9kby1pdGVtLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGxpbmUtaGVpZ2h0OiAwLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNzVweDsgXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi8qIHN0eWxlcyBmb3IgYWRkIHRvZG8gcG9wLXVwIG1vZGFsICovIFxcblxcbi5tb2RhbC10b2RvIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIC5mbGV4LWZvci10b2RvLW1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBpbnB1dCB7IFxcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59IFxcblxcbi8qIGV4cGVyaW1lbnRpbmcgd2l0aCBub3JtYWwgd2lkdGggYnRuIHNpemUgKi8gXFxuXFxuI2FkZC10YXNrLXRvZG8tbW9kYWwgeyBcXG4gZm9udC1zaXplOiAxLjVyZW07IFxcbiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gY29sb3I6IHdoaXRlOyBcXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tb2RhbC10b2RvID4gbGFiZWwgeyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcbi5tb2RhbC10b2RvIHsgXFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgd2lkdGg6IDM1cHg7IFxcbiAgbGVmdDogLTI5NXB4OyBcXG4gIGJvdHRvbTogNTVweDsgIFxcblxcbn1cXG5cXG5cXG5cXG4ubW9kYWwtdG9kbyBsYWJlbCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBoMSB7IFxcbiAgZm9udC1zaXplOiAyLjVyZW07IFxcbn0gXFxuXFxuXFxuLyogYmVnaW4gZWRpdCB0b2RvIG1vZGFsIHN0eWxlcyBoZXJlICovIFxcblxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59IFxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaW5wdXQgeyBcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvID4gbGFiZWwgeyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG59IFxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQgeyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyB7IFxcbiAgei1pbmRleDogMjtcXG59IFxcblxcbi5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgd2lkdGg6IDM1cHg7IFxcbiAgbGVmdDogLTI5NXB4OyBcXG4gIGJvdHRvbTogNTVweDsgIFxcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBoMSB7IFxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqLyBcXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDEuNHJlbTsgKi9cXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTsgXFxufSBcXG5cXG4uZmxleC1mb3ItZGVsZXRlLWJ0bi1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtOyBcXG59IFxcblxcblxcbi5vdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG4geyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8geyBcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcblxcblxcbi8qIG1lZGlhIHF1ZXJ5IHByYWN0aWNlIHdvcmtpbmcgb24gcmVzcG9uc2UgZGVzaWduLCBcXG5cXG5tYWtpbmcgc3VyZSBldmVyeXRoaW5nIGxvb2tzIG9rIG9uIG1vYmlsZSwgXFxuXFxubGV0cyBzcGVuZCBhIGxpdHRsZSB0aW1lLCBqdXN0IHBsYXlpbmcgYXJvdW5kIHdpdGggdGhlIGxheW91dCBcXG5cXG5zaHJpbmtpbmcgaXQncyBzaXplICovIFxcblxcblxcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi8gXFxuXFxuLyogbGVmdCBvZmYgaGVyZSwgZml4IHRoZSBtb2RhbHMgZm9yIGlwYWQgKi8gXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE4MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICAjcHJvamVjdC10b2Rvcy1jb250YWluZXIgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgfSBcXG5cXG4gIC5tb2RhbC10b2RvIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiA0MCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG5cXG4gIC5tb2RhbC10b2RvIGgxIHsgXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC10b2RvIGxhYmVsIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5tb2RhbC10b2RvIGlucHV0IHsgXFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gICAgLyogaGVpZ2h0OiAxNTBweCAgKi9cXG4gIH0gXFxuXFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtNzUlO1xcbiAgICB0b3A6IC0zNXB4O1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHsgXFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7IFxcbiAgICB0b3A6IDE1JTtcXG4gIH0gXFxuXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyBoMSB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcbiAgLm1vZGFsLWVkaXQtdG9kbyB7IFxcbiAgICB3aWR0aDogMjUwcHg7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTsgXFxuICAgIHRvcDogMTUlO1xcbiAgfSBcXG5cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbC1lZGl0IHsgXFxuICAgIC8qIHdpZHRoOiAyNTBweDsgICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMSU7IFxcbiAgICBib3R0b206IDkwJTtcXG4gIH0gXFxuXFxuICAubW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiBsZWZ0OiAyOCU7ICAqL1xcbiAgICBsZWZ0OiAzMCU7IFxcbiAgfVxcblxcbn0gXFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7IFxcbiAgYm9keSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfSBcXG5cXG4gIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHsgXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtOyBcXG4gIH0gIFxcblxcbiAgbWFpbiB7IFxcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG4gICAgcGFkZGluZzogMjVweDtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgd2lkdGg6IGF1dG87IFxcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIH0gXFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7IFxcbiAgICBib3R0b206IDUwJTsgXFxuICAgIHdpZHRoOiAyZW07XFxuICB9IFxcbiAgXFxuICAubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcblxcbiAgfSBcXG5cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAyNTVweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsID4gaW5wdXQgeyBcXG4gICAgd2lkdGg6IDIzMHB4OyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGJ1dHRvbiB7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcblxcbiAgLmNsb3NlLWJ0biB7IFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC03ZW07XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIGhlaWdodDogNTAwcHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbC10b2RvIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNHJlbTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiAxMCU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG5cXG4gIC5tb2RhbC10b2RvIGgxIHsgXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC10b2RvIGxhYmVsIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5tb2RhbC10b2RvIGlucHV0IHsgXFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gICAgLyogaGVpZ2h0OiAxNTBweCAgKi9cXG4gIH0gXFxuXFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMTU1cHg7XFxuICAgIHRvcDogMnB4O1xcbiAgfSBcXG5cXG4gIC8qIGxlZnQgb2ZmIGhlcmUgNS84LzIzICovIFxcblxcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8geyBcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE1JTsgXFxuICAgIHRvcDogMTUlO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIGgxIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAubW9kYWwtZWRpdC10b2RvIHsgXFxuICAgIHdpZHRoOiAyNTBweDsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjAlOyBcXG4gICAgdG9wOiA4MCU7XFxuICB9IFxcblxcbiAgLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQgeyBcXG4gICAgLyogd2lkdGg6IDI1MHB4OyAgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1JTsgXFxuICAgIGJvdHRvbTogOTAlO1xcbiAgfVxcbn1cXG5cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHsgXFxuXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9IFxcblxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gICAgZm9udC1zaXplOiAyLjJyZW07IFxcbiAgfSAgXFxuXFxuICBtYWluIHsgXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICB3aWR0aDogYXV0bzsgXFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgfSBcXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTsgXFxuICAgIGJvdHRvbTogNTAlOyBcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH0gXFxuICBcXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDI1NXB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogMjMwcHg7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsID4gYnV0dG9uIHsgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH0gXFxuXFxuICAuY2xvc2UtYnRuIHsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTdlbTtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgaGVpZ2h0OiA1MDBweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsLXRvZG8geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC40cmVtO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgbWluLWhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDEwJTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgfVxcblxcbiAgLm1vZGFsLXRvZG8gaDEgeyBcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsLXRvZG8gbGFiZWwgeyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm1vZGFsLXRvZG8gaW5wdXQgeyBcXG4gICAgd2lkdGg6IGF1dG87IFxcbiAgICAvKiBoZWlnaHQ6IDE1MHB4ICAqL1xcbiAgfSBcXG5cXG4gIC5jbG9zZS10aGUtdG9kby1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNTVweDtcXG4gICAgdG9wOiAycHg7XFxuICB9IFxcblxcbiAgLyogbGVmdCBvZmYgaGVyZSA1LzgvMjMgKi8gXFxuXFxuICAubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7IFxcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTUlOyBcXG4gICAgdG9wOiAxNSU7XFxuICB9IFxcblxcbiAgLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8gaDEgeyBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1lZGl0LXRvZG8geyBcXG4gICAgd2lkdGg6IDI1MHB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxNSU7IFxcbiAgICB0b3A6IDE1JTtcXG4gIH0gXFxuXFxuICAuY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7IFxcbiAgICAvKiB3aWR0aDogMjUwcHg7ICAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUlOyBcXG4gICAgYm90dG9tOiA5MCU7XFxuICB9XFxufSBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqLyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICBtYWluIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqLyBcXG4gIH1cXG5cXG4gICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICB9XFxufSBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7IFxcbiAgICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH0gXFxuXFxuICAvKiAudGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzIHsgXFxuICAgIGxpbmUtaGVpZ2h0OiAwOyBcXG4gIH0gKi9cXG5cXG59XFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxcbiAgYm9keSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBtYWluIHsgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcbn0gKi9cXG4gXFxuLyogXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG4gIFxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMTUwcHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gIH1cXG59ICovXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogaW1wb3J0IFxcXCIvc3R5bGUuc2Nzc1xcXCI7IFxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rUmFzaGkrSGVicmV3OndnaHRAMjAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PVBhdHVhK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTsgKi9cXG5cXG5cXG4vKiBib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7ICovIFxcbiAgLyogZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjsgKi9cXG4vKiB9ICovXFxuXFxuLyogbmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxufSAqL1xcblxcbi8qIC5uYXZiYXItaG9tZS1jb250ZW50LXRleHQsIFxcbi5uYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gICovXFxuXFxuLyogaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn0gICovXFxuXFxuLyogbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTc2LCAyMTgpO1xcbn0gKi9cXG5cXG4vKiAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSAgKi9cXG5cXG4vKiAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbi8qICNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgICovXFxuXFxuLyogI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG5cXG4vKiAucHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59ICAqL1xcblxcbi8qIC5pbnB1dC1maWVsZC10ZXh0IHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNDBweDsgXFxufSAgKi9cXG5cXG4vKiAuYnRuLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtOyBcXG59ICAqL1xcbi8qIFxcbi5hZGQtYnRuLCBcXG4uY2FuY2VsLWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjJyZW07IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcblxcbi8qIC5hZGQtYnRuIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59ICAqL1xcbi8qIFxcbi50b2RvLXBvcC11cC1jb250YWluZXJ7IFxcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MCU7IFxcbiAgbGVmdDogNjAlOyBcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MCU7IFxcbiAgd2lkdGg6IDUwJTsgKi9cXG4gIC8qIHBhZGRpbmc6IDI1cHg7ICAqL1xcbiAgLyogZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7ICovXFxuICBcXG5cXG4vKiAuc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59ICAqL1xcbi8qIFxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICAgKi9cXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLyogLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSAgKi9cXG5cXG4vKiAuc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufSAqL1xcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICAqL1xcblxcbi8qIC5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjsgXG5cbi8vIGZ1bmN0aW9uIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpIHsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhFWVlZXCIpO1xuXG4vLyAgICAgLy8gbGV0IHRoZVByb2plY3RBcnJheSA9IGFycjtcblxuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vICAgICBsZXQgcHJvamVjdEFycmF5SW5kZXggPSB0aGVQcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheUluZGV4KTtcbiAgICBcbi8vICAgICAvLyB9XG4vLyB9IFxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgYSBsaXR0bGUgY29uZnVzZWQgb24gaG93IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYywgdGhhdCB3aWxsIHByZXZlbnQgYSB1c2VyIGZyb20gYWRkaW5nIG11dGxpcGxlIHByb2plY3RzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gT25jZSBwcm9qZWN0IGlzIGNsaWNrZWQsIGRpc3BsYXkgdGhhdCBwcm9qZWN0LCBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcsIFxuXG4vLyBJJ3ZlIGJlZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIGZ1bmN0aW9uIGJlZm9yZSB0aGUgdmFsdWVzIGFyZSBhcHBlbmRlZCwgdG8gY2hlY2sgaWYgSXQncyBzYWZlIHRvIGFwcGVuZCB0aGUgdmFsdWUgb3IgY2xlYXIgYW5kIG1ha2Ugd2F5IGZvciBhIG5ldyBvbmUsIFxuXG4vLyBob3cgY2FuIEkgcHJldmVudCB1c2VyIGZyb20gY2xpY2tpbmcgbXVsdGlwbGUgcHJvamVjdHMsIGFuZCBhZGRpbmcgdGhlbSBhbGwsIFxuXG4vLyB5b3UgY2FudCBkaXNhYmxlIHRoZSBidG4sIFxuXG4vLyB5b3UgY2Fubm90IG1peCB0aGUgRE9NIGxvZ2ljIGFuZCBjb25kaXRpb25hbCBsb2dpYywgXG5cbi8vIHRoaW5raW5nIGNvbmNlcHR1YWxseSwgcmlnaHQgbm93IHRoZSB1c2VyIGNhbiBwcmVzcyB0aGUgcHJvamVjdCBuYW1lIGFuZCBhcHBlbmQgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG4vLyBob3cgY2FuIEkganVzdCBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBjbGVhciB0aGUgY29udGVudHMgb2Ygb25lIGFuZCBtYWtlIG5ldy4gIiwiXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG5pbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VUb2RvSXRlbXMgZnJvbSBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHBsdXNTaWduIGZyb20gXCIuL3BsdXMtc2lnbi1mb3ItdG9kby1tb2RhbC5zdmdcIjsgXG5cbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4vdHJhc2gtY2FuLWljb24tdG8tZGVsZXRlLXByb2plY3Quc3ZnXCI7XG5cbi8vIGltcG9ydCBjcm9zc01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2Nyb3NzLW1hcmstc3ZncmVwby1jb20uc3ZnXCI7IFxuXG4vLyBpbXBvcnQgY2hlY2tNYXJrRm9yRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9jaGVjay1tYXJrLXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuaW1wb3J0IGVkaXRCdG5Gb3JUb2RvIGZyb20gXCIuL2VkaXQtc3ZncmVwby1jb20uc3ZnXCI7XG5cbi8vIGltcG9ydCB1cGRhdGVBcnJheVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbmxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG5sZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbmxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWVkaXQtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXRcIilbMF07IFxuXG5sZXQgZWRpdFRvZG9UYXNrc0Zvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItZWRpdGluZy10b2RvLXRhc2tzXCIpO1xuXG5sZXQgY3VycmVudFByb2plY3QgXG5cbmZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cbnByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxuXG5cbnByZXZlbnRUb2RvTW9kYWxQb3BVcCgpOyBcblxuXG5mdW5jdGlvbiBwcmV2ZW50RWRpdFRvZG9Nb2RhbFBvcFVwKCkgeyBcbiAgXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5wcmV2ZW50RWRpdFRvZG9Nb2RhbFBvcFVwKCk7IFxuXG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSkgXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pICBcblxuXG5cblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUZhY3RvcnkobmFtZSkgeyBcbiAgcmV0dXJuIHsgXG4gICAgcHJvamVjdDogbmFtZSxcbiAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICB0b2RvSXRlbXM6IFtdLFxuICB9XG59IFxuXG5hZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBtb2RhbElucHV0RmllbGRWYWx1ZSA9IG1vZGFsSW5wdXRGaWVsZC52YWx1ZTsgXG5cbiAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG4gIFxuICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZU9iamVjdCk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcbiAgXG4gIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTsgXG5cbn0pIFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFZhbHVlc1RvRE9NKGFycmF5KSB7IFxuXG4gIGxldCB0aGVQcm9qZWN0c0FycmF5ID0gYXJyYXk7IFxuXG4gIGxldCBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZVwiKTsgXG5cbiAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbiAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG4gICAgLy8gcHJvamVjdCBuYW1lXG4gICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbiAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG4gICAgXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbmRleDsgXG4gICAgICBcbiAgICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbiAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIH0pXG5cbiAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgIH0pXG5cblxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLnNyYyA9IHBsdXNTaWduOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlc1wiKTtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLnNyYyA9IHRyYXNoSWNvbjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTsgXG4gICAgIFxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbiAgICB9KVxuICB9XG59IFxuXG4gXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxuZWRpdFRvZG9UYXNrc0Zvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cblxubGV0IGNsb3NlQnRuRWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZWRpdC10b2RvLW1vZGFsLWJ0blwiKTsgXG5cbmNsb3NlQnRuRWRpdFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59KVxuXG5cbmxldCBjYW5jZWxCdG5BZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdGhlLXRvZG8tbW9kYWxcIilbMF07XG5cbmNhbmNlbEJ0bkFkZFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn0pIFxuXG5cbmxldCBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tYXJrLXhcIik7IFxuXG5jYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxufSkgXG5cblxubGV0IGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stbWFya1wiKTsgXG5cbmNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgIFxuXG4gIGxldCBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKVswXTsgXG5cbiAgbGV0IGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpWzBdOyBcbiAgXG4gIGxldCBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuICBsZXQgdGFza0hvbGRlclN0eWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIilbMF07XG5cbiAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgXG4gIGxldCB2YWx1ZSA9IGN1cnJlbnRQcm9qZWN0OyBcbiAgXG4gIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIFxuICBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgLy8gaXQgaXMgZGVsZXRpbmcgZnJvbSBzdG9yYWdlLCBpdCBpcyBqdXN0IG5vdCBcblxuICAvLyBkZWxldGluZyB0aGUgdG9kbyBmcm9tIHRoZSBET00sIFxuICAvLyBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIucmVtb3ZlKCkgXG5cbiAgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG4gIFxuXG59KSAgXG5cblxuXG5cblxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItY3JlYXRpbmctdG9kby10YXNrXCIpO1xuXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxubGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cblxuYWRkQnRuVG9Eb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gIHsgXG4gIFxuICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG5cblxuICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbiAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kb1wiKTsgXG5cbiAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlID0gZGVzY3JpcHRpb25Gb3JUb2RvLnZhbHVlOyBcbiAgXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlKTsgXG5cbiAgbGV0IGR1ZURhdGVGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrXCIpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG9WYWx1ZSA9IGR1ZURhdGVGb3JUb2RvLnZhbHVlOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcblxuICBsZXQgcHJpb3JpdHlGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrXCIpOyBcblxuICBsZXQgcHJpb3JpdHlGb3JUb2RvVmFsdWUgPSBwcmlvcml0eUZvclRvZG8udmFsdWU7ICBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChwcmlvcml0eUZvclRvZG9WYWx1ZSk7XG5cbiAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0c1RvZG9zID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zOyBcblxuICAvLyBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICBcbiAgbGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcbiAgXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRvZG9zRm9yUHJvamVjdCk7IFxuICBcbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuZm9ybUlucHV0LnJlc2V0KCk7XG5cbm1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG5vdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbn0pICAgXG5cbmZ1bmN0aW9uIHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgXG4gIFxuICByZXR1cm4geyBcbiAgICB0aXRsZTogdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbiAgICBkdWVEYXRlOiBkdWVEYXRlIFxuICB9IFxuICBcbn0gICAgXG5cblxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aGluIHRoZSB0b2RvIGZhY3RvcnkgXG4vLyB0aGF0IHRha2VzIHRoZSBpbmRleCwgXG5cbmxldCBnZXRQcm9qZWN0SWQgXG5cbmxldCBjbGlja2VkVG9kb0VkaXRJdGVtXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMubGVuZ3RoOyBpKyspIHsgXG4gICAgIFxuICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgXG4gICAgdGFza0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpO1xuICBcbiAgICBcbiAgICBcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcblxuICAgIGdldFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkXG5cbiAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gICAgbGV0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbiAgICBjaGVja2JveEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoZWNrLWJveC1lbGVtZW50LXRvZG8tc3R5bGVzXCIpO1xuXG4gICAgbGV0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBlZGl0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1lbGVtZW50LXRvZG8taXRlbS1zdHlsZXNcIik7XG5cbiAgICBlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICBlZGl0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0gPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbZWRpdEVsZW1lbnQuZGF0YXNldC5pbmRleF07IFxuXG4gICAgICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcbiAgICAgXG4gICAgIGxldCBhZGRCdG5XaXRoaW5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWwtZWRpdFwiKTsgXG4gICAgICBcbiAgICAgYWRkQnRuV2l0aGluVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICBsZXQgdGl0bGVJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8tZWRpdC1pbnB1dC1mb3JtXCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFzay1lZGl0XCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgZWRpdFRvZG9PYmplY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWVFZGl0VG9kbywgZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG8sIGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG8sIHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvKTsgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkVG9kb0VkaXRJdGVtKTtcbiAgICAgICAgXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0udGl0bGUgPSB0aXRsZUlucHV0VmFsdWVFZGl0VG9kbzsgXG4gICAgICAgIFxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG87IFxuICAgICAgICBcbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbzsgXG5cbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvOyBcblxuICAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gICAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTtcblxuICAgICAgfSlcbiAgICAgIFxuICAgIFxuICAgIH0pIFxuXG4gICAgZWRpdEVsZW1lbnQuc3JjID0gZWRpdEJ0bkZvclRvZG87IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSBcImNoZWNrYm94XCI7IFxuXG4gICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uLXRvZG8taXRlbS1zdHlsZXNcIik7XG5cbiAgICBkZWxldGVJY29uLmlkID0gXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCI7IFxuXG4gIGRlbGV0ZUljb24uZGF0YXNldC5pbmRleCA9IGk7IFxuXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5zcGxpY2UoZGVsZXRlSWNvbi5kYXRhc2V0LmluZGV4LCAxKTtcbiAgICAgIFxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAgIH0pIFxuXG4gICAgZGVsZXRlSWNvbi5zcmMgPSB0cmFzaEljb247IFxuXG4gICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiOyBcblxuICAgIHRvZG9UaXRsZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnRpdGxlKTtcblxuICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCJcblxuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIFxuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnByaW9yaXR5KTtcbiAgICBcbiAgICB0b2RvRHVlRGF0ZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmR1ZURhdGUpO1xuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1RpdGxlKTsgIFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9Qcmlvcml0eSk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0R1ZURhdGUpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoZGVsZXRlSWNvbik7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoZWRpdEVsZW1lbnQpO1xuXG4gICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICBcbiAgfSAgXG5cbiAgIC8vIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vIGxldCBkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0bi1pbnNpZGUtdG9kb1wiKTsgXG5cbiAgLy8gLy8gY29uc29sZS5sb2coZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0pOyBcblxuICAvLyBsZXQgdGFza0hvbGRlckNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKVswXTsgXG5cbiAgLy8gLy8gY29uc29sZS5sb2codGFza0hvbGRlckNsYXNzKTtcblxuICAvLyBkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgLy8gICAgICAvLyBjb25zb2xlLmxvZyhcInRoZSBkZWxldGUgYnV0dG9uIHdpdGhpbiB0b2RvIGhhcyBiZWVuIHByZXNzZWQhXCIpO1xuICAvLyAgICAgIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vICAgICAvLyAgY29uc29sZS5sb2coY3VycmVudFByb2plY3RJZCk7IFxuXG4gIC8vICAgICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC5pZC5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIC8vICAgbGV0IGlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vICAgICAvLyAgIGlmIChjdXJyZW50UHJvamVjdElkID09PSBpZCkgeyBcbiAgLy8gICAgIC8vICAgICAvLyBpZiBpZCdzIG1hdGNoIHJlbW92ZSB0aGUgc2VsZWN0ZWQgcHJvamVjdCwgXG4gIC8vICAgICAvLyAgIH0gZWxzZSB7IFxuICAvLyAgICAgLy8gICAgIHJldHVybjtcbiAgLy8gICAgIC8vICAgfVxuXG4gIC8vICAgICAvLyAgfSBcblxuICAvLyAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihmdW5jdGlvbihvbmVQcm9qZWN0SWQpIHsgXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICBcbiB9IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbi8vIGltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuLy8gaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbi8vIGltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbi8vIGltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG4vLyBpbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuLy8gY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuLy8gY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG4vLyBsZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG4vLyBsZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxuLy8gbGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbi8vIGxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbi8vIGxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG4vLyBsZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbi8vIGxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG4vLyBsZXQgY3VycmVudFByb2plY3QgXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0gXG5cbi8vIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuLy8gZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxuLy8gbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSBcblxuLy8gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7XG5cbi8vIGV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyB9XG5cbi8vIHByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4vLyAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuLy8gICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbi8vICAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xuLy8gfSkgXG5cbi8vICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vIH0pIFxuXG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuLy8gICByZXR1cm4geyBcbi8vICAgICBwcm9qZWN0OiBuYW1lLFxuLy8gICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuLy8gICAgIHRvZG9JdGVtczogW10sXG4vLyAgIH1cbi8vIH0gXG5cbi8vIGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4vLyAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbi8vICAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxuLy8gfSkgXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbi8vICAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbi8vICAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuLy8gICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4vLyAgICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbi8vICAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuLy8gICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuLy8gICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuICAgICAgXG4vLyAgICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4vLyAgICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIik7IFxuXG4vLyAgICAgICBsZXQgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgbGV0IGFkZEJ0blRvQ3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgICAgICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgZGVsZXRlQnRuVG9EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgICAgICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4vLyAgICAgICB9KVxuXG5cblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4vLyAgICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbi8vICAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTsgXG4gICAgIFxuLy8gICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9IFxuXG4gXG5cbi8vIGZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0pICBcblxuLy8gbGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuLy8gY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gfSkgXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbi8vIGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG4vLyB9KSBcblxuXG4vLyBsZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuLy8gY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuLy8gICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbi8vICAgbGV0IHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7XG5cbi8vICAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgXG4vLyAgIGxldCB2YWx1ZSA9IGN1cnJlbnRQcm9qZWN0OyBcbiAgXG4vLyAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIFxuLy8gICBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuLy8gICBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbi8vICAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG5cblxuLy8gfSkgIFxuXG5cbi8vIGxldCBhZGRCdG5Ub0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWxcIik7IFxuXG5cblxuLy8gbGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItY3JlYXRpbmctdG9kby10YXNrXCIpO1xuXG4vLyBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG5cbi8vIGFkZEJ0blRvRG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG5cbi8vICAgbGV0IHRpdGxlSW5wdXRGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWlucHV0LWZvcm1cIik7IFxuXG4vLyAgIGxldCB0aXRsZUlucHV0VmFsdWUgPSB0aXRsZUlucHV0Rm9yVG9kby52YWx1ZTsgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godGl0bGVJbnB1dFZhbHVlKTsgXG5cbi8vICAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG9cIik7IFxuXG4vLyAgIGxldCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSA9IGRlc2NyaXB0aW9uRm9yVG9kby52YWx1ZTsgXG4gIFxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSk7IFxuXG4vLyAgIGxldCBkdWVEYXRlRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFza1wiKTsgXG5cbi8vICAgbGV0IGR1ZURhdGVGb3JUb2RvVmFsdWUgPSBkdWVEYXRlRm9yVG9kby52YWx1ZTsgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG5cbi8vICAgbGV0IHByaW9yaXR5Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFza1wiKTsgXG5cbi8vICAgbGV0IHByaW9yaXR5Rm9yVG9kb1ZhbHVlID0gcHJpb3JpdHlGb3JUb2RvLnZhbHVlOyAgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2gocHJpb3JpdHlGb3JUb2RvVmFsdWUpO1xuXG4vLyAgIC8vIGxldCBjdXJyZW50UHJvamVjdHNUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtczsgXG5cbi8vICAgLy8gbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgXG4vLyAgIGxldCB0b2Rvc0ZvclByb2plY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWUsIGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlLCBwcmlvcml0eUZvclRvZG9WYWx1ZSwgZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG4gIFxuLy8gICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2Rvc0ZvclByb2plY3QpOyBcbiAgXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbi8vIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcyk7XG5cbi8vIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbi8vIH0pICAgXG5cbi8vIGZ1bmN0aW9uIHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHRpdGxlOiB0aXRsZSwgXG4vLyAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbi8vICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuLy8gICAgIGR1ZURhdGU6IGR1ZURhdGUgXG4vLyAgIH1cbi8vIH0gICAgIFxuXG4vLyAvLyBwcm9ibGVtIGlzIGFwcGVuZGluZyBhbmQgZGlzcGxheWluZyB0b2RvIHZhbHVlcyBcblxuLy8gLy8gZm9yIGVhY2ggcHJvamVjdCwgXG5cbi8vIC8vIGlzc3VlIGlzIHNhdmluZyBldmVyeSBzaW5nbGUgaW5wdXQgYXMgYSBuZXcgYXJyYXkgZW50cnksIFxuXG4vLyAvLyBcblxuLy8gbGV0IGdldFByb2plY3RJZFxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCkgeyBcblxuLy8gICBsZXQgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5nYXAgPSBcIjJlbVwiO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuXG4vLyAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcbi8vICAgICBsZXQgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICBcbiAgICBcbi8vICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcblxuLy8gICAgIGdldFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkXG4gICAgXG4vLyAgICAgbGV0IHByb2plY3RVbmlxdWVJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgICBcbi8vICAgICBsZXQgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcbiAgICBcbi8vICAgICBjaGVja2JveEVsZW1lbnQudHlwZSA9IFwiY2hlY2tib3hcIjsgXG5cbi8vICAgICBsZXQgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnNyYyA9IFwiLi4vZWRpdC1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwLjIwZW1cIjtcblxuXG5cbi8vICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7IFxuXG4vLyAgICAgdG9kb1RpdGxlLmFwcGVuZChzZWxlY3RlZFByb2plY3QudGl0bGUpO1xuXG4vLyAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG5cbi8vICAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG5cbi8vICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIlxuXG4vLyAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgXG4vLyAgICAgdG9kb1ByaW9yaXR5LmFwcGVuZChzZWxlY3RlZFByb2plY3QucHJpb3JpdHkpO1xuICAgIFxuLy8gICAgIHRvZG9EdWVEYXRlLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZHVlRGF0ZSk7XG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvVGl0bGUpOyAgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1ByaW9yaXR5KTsgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZSk7IFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrYmx1ZVwiO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUubGluZUhlaWdodCA9IFwiMWVtXCI7IFxuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUud2lkdGggPSBcIjI3NXB4XCI7IFxuXG4vLyAgICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICBcbi8vICAgICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG4vLyAgIH0gXG4gIFxuLy8gIH0gXG5cblxuLy8gcHJhY3RpY2Ugd2l0aCBvYmplY3RzIFxuXG4vLyBsZXQgYXJyYXkxID0gW107XG5cbi8vIGNvbnN0IFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGF0ZSkge1xuLy8gICB0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4vLyB9O1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuLy8gICBsZXQgeHl6ID0gbmV3IFRvZG8oYCR7aX0gdGl0bGVgLCBpKVxuLy8gICBhcnJheTEucHVzaCh4eXopO1xuLy8gfVxuXG4vLyBjb25zb2xlLmxvZyhhcnJheTEpIFxuXG5cbi8vIHByYWN0aWNlIG1ha2luZyBvYmplY3RzIFxuXG4vLyBwdXNoaW5nIGludG8gYW4gYXJyYXkgXG5cbi8vIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBhcnJheSwgXG5cbi8vIGdldCBlYWNoIGZpZWxkIGJ5IGl0J3Mga2V5LCAgXG5cbi8vIGxldCBuZXdBcnIgPSBbXTsgXG5cbi8vIGZ1bmN0aW9uIGNyZWF0aW5nT2JqZWN0cyh0aXRsZSxkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHsgXG4vLyAgIGNvbnN0IG5ld09iamVjdCA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSB9IFxuLy8gICBuZXdBcnIucHVzaChuZXdPYmplY3QpOyBcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyLmxlbmd0aDsgaSsrKSB7IFxuICAgXG4vLyAgICAgbGV0IHRpdGxlID0gbmV3QXJyWzBdLnRpdGxlO1xuLy8gICAgIGxldCBkZXNjcmlwdGlvbiA9IG5ld0FyclswXS5kZXNjcmlwdGlvbjsgXG4vLyAgICAgbGV0IGR1ZURhdGUgPSBuZXdBcnJbMF0uZGF0ZTtcbi8vICAgICBsZXQgcHJpb3JpdHlMZXZlbCA9IG5ld0FyclswXS5wcmlvcml0eTtcbiAgICBcbiAgICBcbi8vICAgfVxuLy8gfSBcblxuLy8gY3JlYXRpbmdPYmplY3RzKFwiQWxlY1wiLCBcIndvcmtpbmcgb24gdG9kby1saXN0XCIsIFwiNC8yMC8yM1wiLCBcIkhpZ2hcIik7ICBcblxuLy8gY3JlYXRpbmdPYmplY3RzKFwiSGVsbG9cIiwgXCJDaGVjayAxLi4yXCIsIFwiNi8yMC8yM1wiLCBcIkhpZ2hcIik7IFxuXG4vLyBnZXR0aW5nIGFsbCB0aGUga2V5cyBmcm9tIHRoZSBmaXJzdCBvYmogaW4gdGhlIGFycmF5XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS50aXRsZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5kYXRlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLnByaW9yaXR5KTsgXG5cbi8vIGdldHRpbmcgYWxsIHRoZSBrZXlzIGZyb20gdGhlIHNlY29uZCBvYmogaW4gdGhlIGFycmF5IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0udGl0bGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0uZGF0ZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5wcmlvcml0eSk7IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gLy8gaXQgd2FzIHRoZSBsb29wLCBbaV0gd2FzIHRha2luZyBpbiBhIHNpbmdsZSB2YXJpYWJsZSBcblxuIC8vIG5vdyB3ZSBoYXZlIHRoZSB0b2RvIGl0ZW0gd2l0aGluIGEgc2luZ2xlIGRpdiBhbmQgc3R5bGUgXG5cbi8vIGVhY2ggdG9kbyBpdGVtIGlzIGluc2lkZSBpdCdzIG93biBkaXYsIFxuXG4vLyBlYWNoIHRvZG8gaXRlbSBuZWVkcyB0byBiZSBpbnNpZGUgb25lIGRpdiwgXG5cbi8vIE5PVCBFQUNIIFRPRE8gSVRFTSBJTlNJREUgQSBESVYsIFxuXG4vLyBnZXQgYWxsIHRoZSB0b2RvJ3MuIFxuXG5cbi8vIEkgZG9udCB1bmRlcnN0YW5kIHdoeSB0aGlzIGlzIHNvIGZ1Y2tpbmcgY29uZnVzaW5nLCBcblxuLy8gaSBqdXN0IHdhbnQgZWFjaCB0b2RvIHRvIGJlIGl0J3Mgb3duIGRpdiwgXG5cbi8vIHRoZW4gYXBwZW5kIHRvIHRoZSBGVUNLSU5HIENPTlRBSU5FUiEhISBcblxuLy8gdXNlIGEgbG9vcCwgZ2V0IHByb2plY3QsIGFwcGVuZCB0byBkaXYsIHRoZW4gYXBwZW5kIHRvIHNlY3Rpb24sIFxuXG4vLyB3aHkgYXJlIHRoZXkgc3RpbGwgYnVuY2hlZCB0b2dldGhlcj8/PyBcblxuXG4vLyBob3cgY2FuIEkgbWFrZSBlYWNoIHNldCBvZiB0b2RvcyBhIHNlcGVyYXRlIGRpdj8/IFxuXG4vLyBhcHBlbmQgdGhlIHRvZG8ncyB0byBhIGRpdiB0aGVuIGFwcGVuZCB0byBjb250YWluZXIsIFxuXG5cbi8vIHN0eWxlIGVhY2ggZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXIsIFxuXG4vLyBMb29rIG92ZXIgY29kZSwgXG5cbi8vIEkgd2FudCB0byBkaXNwbGF5IHRoZSB0b2RvJ3MgZm9yIGVhY2ggcHJvamVjdCwgXG5cbi8vIGhvdyBhbSBJIGFkZGluZyB0aGUgdG9kbydzLCBcblxuLy8gc3RyaWNrbHkgbG9vayBhdCB0aGUgZnVuY3Rpb24sIFxuXG5cblxuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50VG9Eb1ZhbHVlcyhwcm9qZWN0KSB7IFxuICBcbi8vICAgbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgbGV0IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QgPSBwcm9qZWN0OyBcblxuLy8gICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHsgXG4vLyAgIC8vICAgbGV0IHggPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0W2ldOyBcblxuLy8gICAvLyAgIGNvbnNvbGUubG9nKHgpOyBcbi8vICAgLy8gfVxuXG4vLyAgIGxldCBkaXNwbGF5VGl0bGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnRpdGxlOyBcblxuLy8gICBsZXQgZGlzcGxheURlc2NyaXB0aW9uID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjsgXG5cbi8vICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QucHJpb3JpdHk7IFxuXG4vLyAgIGxldCBkaXNwbGF5RHVlRGF0ZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZHVlRGF0ZTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlUaXRsZSk7XG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheURlc2NyaXB0aW9uKTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEdWVEYXRlKTtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVByaW9yaXR5KTsgXG5cblxuLy8gfSBcblxuXG5cblxuXG5cblxuLy8gb2sgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWVzLCBJIGFtIGFibGUgdG8gcHJpbnQgdGhlIHZhbHVlcyB0byB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCB0aGVzZSB0b2RvIGl0ZW1zIG9udG8gZWFjaCBwcm9qZWN0IFxuXG4vLyBhbmQgc2F2ZSB0aGVtIGVhY2ggdGltZSBzbyB0aGV5IHJlbG9hZCBvbiByZWZyZXNoPyBcblxuLy8gSSBjYW4gZ3JhYiB0aGUgY3VycmVudCBwcm9qZWN0LCB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIGJldHdlZW4gcHJvamVjdHMgXG5cbi8vIHRoZW4gaG93IGNhbiBJIGFkZCB0aGVzZSBuZXdseSBhZGRlZCB0b2RvJ3MgYmFjayBpbnRvIHRoZSBhcnJheSwgXG5cbi8vIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyAgXG5cbi8vIEkgYWJsZSB0byBhZGQgdG9kbyBpdGVtcyBpbnRvIGEgcHJvamVjdCwgYnV0IGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgIHRoZW0/IFxuXG4vLyBkbyBJIG5lZWQgdG8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/IFxuXG4vLyBcblxuXG5cblxuLy8gZ2V0IGFsbCB0aGUgdmFsdWVzLCB3aXRoaW4gdGhlIG1vZGFsLCBcblxuLy8gZmlyc3QgZ2V0IHRoZSB2YWx1ZXMgb2YgYWxsIHRoZSBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvbmNlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgdmFsdWVzIGFyZSBzYXZlZCwgXG5cbi8vIHBhc3NlZCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdHMgdG9kbyBhcnJheSwgXG5cbi8vIGFsc28gcGFzc2VkIHRvIHN0b3JhZ2UgdG9vIHNvIHRoZSB0b2RvIGFycmF5IGlzIHRoZSBzYW1lIGFzIHJlZ3VsYXIgcHJvamVjdCBhcnJheSBcblxuLy8gc28gd2UgaGF2ZSB0byBhYmlsaXR5IHRvIGdldCB0aGUgdmFsdWVzLCBcblxuLy8gYW5kIHB1c2ggdGhlbSB0byB0aGUgY29ycmVjdCBwcm9qZWN0LCBcblxuLy8gdGhleSBkbyBub3Qgc2F2ZSwgYW5kIGNsZWFyIHVwb24gcmVmcmVzaC4gXG5cbi8vIGhvdyBjYW4gSSBwdXNoIHRoZXNlIHZhbHVlcyBpbnRvIHRoZSBhcnJheSwgcGVybWFuZW50bHkgc2F2ZSB0aGVtLCBcblxuLy8gYW5kIHRoZW4gZGlzcGxheSB0aGVtPyBIb3cgY2FuIEkgZGlzcGxheSB0aGUgdG9kbydzPyBcblxuLy8gRG8gSSBoYXZlIHRvIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9qZWN0cyBhcnJheT8gXG5cbi8vIGRvIEkgaGF2ZSB0byBwYXNzIHByb2plY3QgYXJyYXkgYWdhaW4/IFxuXG4vLyB5b3Ugd2lsbCBoYXZlIHRvIGRpc3BsYXkgdGhlIHByb2plY3RzIGFnYWluIFxuXG4vLyB0aGUgdG9kbydzIGFyZSBiZWluZyB1cGRhdGVkIFxuXG4vLyBwdXNoIHRoZSB1cGRhdGVkIHByb2plY3RzQXJyYXksIGFuZCBmaW5kIGEgd2F5IHRvIGRpc3BsYXkgdG9kbydzLFxuXG4vLyBcblxuXG5cblxuLy8gY29uc3QgQXBwID0gICgoKSA9PiB7XG4vLyAgIC8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXVxuLy8gICBsZXQgY3VycmVudFByb2plY3RcblxuLy8gICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0ID0gY3VycmVudFByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3QuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdC5pZClcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3R9XG4vLyB9KSgpXG5cblxuXG4vLyBIZWxsbywgSSBhbSBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG9kbywgSSdtIHRyeWluZyB0byBpbXBsZW1lbnQgc29tZSBsb2dpYyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgcHJvamVjdCBidG4sIGl0IHdpbGwgY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIGFuZCBpbiB0aGUgXCJ5b3VyIHByb2plY3RzXCIgc2VjdGlvbi4gQmFzaWNhbGx5IGp1c3QgdXNpbmcgYSBsaXN0ZW5lciwgdGhhdCB3aGVuIHRoZSB1c2VyIGNvbmZpcm1zIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIGRpc3BsYXksIHRoZW4gcmVtb3ZlIHRoZSB2YWx1ZS4gVGhlIHByb2JsZW0gaXMgSSBnZXQgdW5kZWZpbmVkIHdoZW4gSSB0cnkgdGhpcyBhcHByb2FjaCwgd2hpY2ggaXMgc3RyYW5nZSBiZWNhdXNlIEknbSBnZXR0aW5nIHRoZSBlbGVtZW50LCB0aGVyZSBpcyBhIHZhbHVlIGluc2lkZSB0aGVyZSwgdGhlbiBqdXN0IHVzaW5nciAudmFsdWUuIFxuXG5cblxuLy8gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB3aXRoIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgYnRuIGFuZCB0aGV5IGNvbmZpcm0gXG5cbi8vIHRoZXkgd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgd2FudCB0byBkZWxldGUgaXQgZnJvbSBtYWluIGNvbnRhaW5lciBhcyB3ZWxsIGFzIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBOb3Qgc3VyZSBJZiBJJ20gZG9pbmcgdGhpcyByaWdodCBidXQgSSBjYW4gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIGFuZCB0aGVuIHVzZSByZXBsYWNlQ2hpbGRyZW4gdG8gY2xlYXIgdGhlIERPTSBdXG5cbi8vIGJ1dCBJIGFtIGdldHRpbmcgcHJldHR5IHN0dWNrIG9uIGhvdyB0byBkZWxldGUgaXQgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uPyBcblxuLy8gQmFzaWNhbGx5IEkgdGhpbmsgb2Ygc29tZWhvdyBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIHRoZSBtYWluIGNvbnRhaW5lciwgYXMgd2VsbCBhcyB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gdXNpbmcgcmVtb3ZlQ2hpbGQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgaW4gYm90aCBwbGFjZXMsIFxuXG5cblxuICBcbi8vIE9LIHdlbGwgdGhpcyBpcyBvbmUgd2F5IHRvIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhY2Nlc3MgdGhhdCBzYW1lIHByb2plY3QgbmFtZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gYW5kIGRlbGV0ZSB0aGF0PyBcblxuLy8gSSBuZWVkIHRvIGFsc28gZGVsZXRlIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgd2l0aGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24uIGxvb2sgdXAgcmVwbGFjZUNoaWxkcmVuXG5cbi8vIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Ugd2hhdCBhcmUgeW91IHJlcGxhY2luZyB3aXRoPyBIb3cgZG8geW91IGtub3cgd2hpY2ggZWxlbWVudCB0byByZXBsYWNlIGl0IHdpdGg/IFxuXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkFycmF5ID0gQXJyYXkuZnJvbShjYW5jZWxCdG5BZGRUb2RvTW9kYWwpO1xuXG5cblxuLy8gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIFxuXG4vLyBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMpO1xuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KGFycmF5KSB7IFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICBsZXQgcHJvamVjdE5hbWVJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG4gICAgXG4vLyAgIH1cbi8vIH1cblxuLy8gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChwcm9qZWN0QXJyYXkpO1xuXG5cblxuLy8gSSB0aGluayBJIE5lZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBkb24ndCB3YW50IHRvIGhhdmUgdG9vIG11Y2ggZ29pbmcgb24gaW4gb25lIGZ1bmN0aW9uLCBcblxuLy8gdXNlIHRoZSBzYW1lIGxvZ2ljLCBsb29wIHRocm91Z2ggcHJvamVjdCBhcnJheSwgXG4gXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXgucHJvamVjdCk7XG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG9rIG5leHQsIHByb2plY3QgbmFtZXMgYXJlIGJlaW5nIGFkZGVkIGR5bmFtaWNhbGx5LCB0aGV5IGFyZSBwcm9wZXJseSBiZWluZyBhZGRlZCB0byB0aGUgYXJyYXkgYW5kIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBuZXh0IHdoZW4gSSBjbGljayBvbiB0aGUgcHJvamVjdCwgdGhhdCBwcm9qZWN0J3MgbmFtZSBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGNsZWFyIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgZGlzcGxheSB0aGUgbmV3IHByb2plY3QsIFxuXG4vLyByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGlzIGFkZGVkIGF0IGEgdGltZSwgc2hvdWxkIG5vdCBhZGQgb250by4gc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBhbG9uZyB3aXRoIHRoZSB0d28gYnRucywgYWRkIGFuZCBkZWxldGUgZm9yIHRoZSB0b2RvJ3MgXG5cbi8vIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBzaG93IHRoYXQgcHJvamVjdCwgdXNlciBjYW5ub3QgYXBwZW5kIHRoYXQgcHJvamVjdCBtdWx0aXBsZSB0aW1lcyBieSBjbGlja2luZywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIHRoaXMgd2lsbCBiZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBmaXJzdCBJIGZlZWwgbGlrZSB5b3Ugd2lsbCBuZWVkIHRvIGxvb3AgdGhyb3VnaCBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0IGZyb20gdGhlIGFycmF5LCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBsb2dpYyB3aWxsIGdyYWIgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gYW5kIGFwcGVuZCB2YWx1ZXMgdG8gaXQsIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb2plY3QgaXMgYWxyZWFkeSBhZGRlZCBzdWNoIGFzIElEJ3MgbWF0Y2hpbmcsIFxuXG4vLyBpZiBJRCBtYXRjaGVzIHdoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgZnJvbSBhZGRpbmcgYWdhaW4sIGVsc2UgaWYgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBjb250YWluZXIsIFxuXG4vLyBiZWZvcmUgdGhlIHByb2plY3QgbmFtZSBpcyBhcHBlbmRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGF0IG5hbWVzIGlkIG1hdGNoZXMgdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyBJIHdvdWxkIHNheSBmaXJzdCBsZXQncyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBjYW4gZ3JhYiBhbGwgdGhlIHByb2plY3QgbmFtZXMgYW5kIElEPyBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIFxuXG4vLyBJJ20gbm90IHN1cmUgeW91IG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIHNlZW1zIGxpa2UgeW91ciBnZXR0aW5nIHByb2plY3QgdGFyZ2V0IHZhbHVlLCB3aXRoIGUudGFyZ2V0LnRleHRDb250ZW50IFxuXG4vLyBub3cgSSBiZWxpZXZlIHdoYXQgeW91IG5lZWQgdG8gZmlndXJlIG91dCBpcyBob3cgdG8gZGlzcGxheSB0aGUgY2VydGFpbiBwcm9qZWN0LCBiYXNlZCBvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gcmVtZW1iZXIgcmVwbGFjZSB0aGUgY29udGVudCB3aXRoaW4gbWFpbiBjb250YWluZXIsIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgYWxsIGJhc2VkIG9uIGJ0biBjbGljayBcblxuLy8gdGhpbmsgYmFjayB0byByZXN0YXVyYW50IHBhZ2UsIFxuXG4vLyBJIHNvbWVob3cgbmVlZCB0byB0aGluayB0aGlzIG91dCwgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIGNvbnRlbnRzIG9mIHByZXZpb3VzIHByb2plY3QgYW5kIG1ha2Ugd2F5IGZvciBuZXcsIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwsIGlmIHRoaXMgcHJvamVjdCBpcyBjbGlja2VkLCBjaGFuZ2UgdG8gYSB2YXJpYWJsZSB0aGVuIHVzZSByZXBsYWNlIGNoaWxkLiBcblxuLy8gaWYgdGhlIHZhcmlhYmxlIHRhcmdldFZhbHVlUHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIG9yIHRoZSBkaXYsIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgIFxuXG4vLyBcblxuLy8gLS0gaG93IHRvIG1ha2Ugc3VyZSBvbmx5IHRoYXQgd2hlbiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGl0IHdpbGwgcG9wdWxhdGUsIHdpdGggdGhhdCBwcm9qZWN0IG5hbWUsIHdpcGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIFxuXG4vLyAtLSB3aHkgaXMgdGhlIHByb2plY3QncyBzZWN0aW9uIG5vdCBkeW5hbWljYWxseSBhZGRpbmcgcHJvamVjdHM/IEkgaGF2ZSB0byByZWZyZXNoIHRoZSBwYWdlIGZvciBpdCB0byBzaG93IHVwPyBcblxuLy8gaGFuZGxlIHRoZSBjb25kaXRpb25hbCBsb2dpYyBmaXJzdCwgYW5kIGNvcnJlY3RseSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWVzIGluIHRoZSBtYWluIGNvbnRhaW5lciBmaXJzdCwgXG5cbi8vIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBpcyBuZWVkZWQgdG8gY29tcGxldGUgdGhpcywgcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBjYW4gYmUgZGlzcGxheWVkIGF0IGEgdGltZSwgXG5cbi8vIGlmIHByb2plY3QgY29udGFpbmVyIGluY2x1ZGVzIHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gc2hvdWxkIGl0IGJlIHNpbWlsYXIgdG8gcmVzdGF1cmFudCBwYWdlLCBlYWNoIHByb2plY3QgaXMgZ2l2ZW4gYSB2YXJpYWJsZSwgdGhlbiBpZiB0aGF0IHByb2plY3QgaXMgY2xpY2tlZCBvbiBpdCdzIGdpdmVuIGEgdmFyaWFibGUgb3IgaW5kZXgsIFxuXG4vLyB0aGVuIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0J3MgSUQsIG1hdGNoZXMgd2hhdCBpcyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyLCBpZiBub3QgY2xpY2tlZCwgcmVwbGFjZSB3aXRoIG5ldyBjbGljaywgXG5cbi8vIGlmIGl0IGlzIGNsaWNrZWQgYWdhaW4sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZXBsYWNpbmcgdGhlIGNvbnRlbnQsIFxuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IHdpdGggdGhlIHByb2plY3RzIHVucWl1ZSBJRCwgaWYgcHJvamVjdC5pZCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGF0IGJ0biBhZ2FpbiwganVzdCByZXR1cm4sIFxuXG4vLyBjYW4gd2UgZ28gYmFjayBhbmQgbG9vayBhdCB3aGF0IHlvdSBkaWQgcHJldmlvdXNseSB3aXRoIHlvdXIgY29kZT9cblxuLy8gSSBkb24ndCB0aGluayBpdCdzIHRoZSBzYW1lIHByZXZpb3VzbHksIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgZGl2IGhlcmUgaW5zdGVhZCBvZiBhIGJ1dHRvbiwgXG5cbi8vIEkgd2FudCB0byBmaW5kIGEgd2F5IHRoYXQgSSBjYW4gb25seSBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHNob3VsZCBhZGQgZHVwbGljYXRlcywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCByZXBsYWNlIGNvbnRlbnRzIG9mIG9sZCBhbmQgd2lwZSB0aGUgbmV3LCBcblxuLy8gSSB0aGluayB0aGUgRE9NIERpc3BsYXkgaXMgZmluZSwgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uLCBjcmVhdGluZyBhIGRpdiB0aGF0IHN0b3JlcyB0aGUgcHJvamVjdHMgbmFtZSwgXG5cbi8vIG5vdyBvbmNlIHRoZSBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGxvb3AgdGhyb3VnaCBzdG9yYWdlLCBmaW5kIG91dCB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uIGFuZCBkaXNwbGF5J3MgaXQncyBjb250ZW50cywgXG5cbi8vIHN0aWNrIHdpdGggaG93IHlvdSBhcmUgZGlzcGxheWluZyB0aGUgcHJvamVjdHMgaW4gdGhlIERPTSwgXG5cbi8vIGhvdyB3aWxsIHlvdSBhZGQgdGhpbmdzIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBkaXNwbGF5IG9ubHkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIG1ha2UgYSBsb29wIGdldCB0aGUgcHJvamVjdCdzIElELCBjb21wYXJlIHRoZSBJRCB0byB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCBvbiwgXG5cblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWUpIHsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZSA9IHZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlSUQgPSBwcm9qZWN0VmFsdWUuaWQ7IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHByb2plY3RWYWx1ZVtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG5cbi8vIGhlcmUgdG8gdG9wIG9mIGZ1bmN0aW9uLCBcblxuXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0OyBcbiAgLy8gICAgIGxldCBuYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIGxldCB5ID0gbG9jYWxTdG9yYWdlLmtleShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyh5KTtcbiAgLy8gICB9XG4gIC8vIH0gXG4gIC8vICAgZm9yKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIC8vIGxldCB4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0W1wia2V5XCJdOyBcblxuICAvLyAgICAgLy8gbGV0IHhpZCA9IHByb2plY3RbXCJpZFwiXTsgXG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHhpZCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyh4KTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cblxuICAvLyBvbGQgbG9naWMgYmVsb3cgXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGxldCB0YXJnZXRWYWx1ZVByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZUlEKTtcblxuICAvLyAgIC8vIGlmIChwcm9qZWN0VmFsdWVJRCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSkgeyBcbiAgLy8gICAvLyAgICAgICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIik7XG4gIFxuICAvLyAgIC8vICAgIH1cblxuXG5cbiAgLy8gICBsZXQgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW5cIik7XG4gICAgXG4gIC8vICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAvLyAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYpO1xuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmFwcGVuZCh0YXJnZXRWYWx1ZVByb2plY3ROYW1lKTtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbik7IFxuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICAvLyB9KVxuXG4gIC8vIGhlcmUgdG8gYm90dG9tIGJyYWNrZXQgXG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdk5hbWVCdG5OYXZiYXIpO1xuXG4vLyB9XG5cblxuLy8gZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuLy8gICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gdmFsdWVJblByb2plY3RbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgcHJvamVjdERpdi5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG5cbi8vICAgY29uc29sZS5sb2coc3RyaW5nVmFsdWUpO1xuXG5cblxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gbGV0IHByb2plY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlRGF0YSk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdFZhbHVlcyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG4vLyAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9ICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gXG5cblxuXG5cblxuXG5cblxuXG4vLyBtYWtlIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYXBwZW5kcyB0aGUgcmVzdWx0IHRvIHRoZSBET00uIFxuXG4vLyBmdW5jdGlvbiBwcmludFN0b3JhZ2VUb0RvbSgpIHsgXG4vLyAgIC8vIGxldCBnZXRTdG9yYWdlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuLy8gICAvLyBsZXQgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2VJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcblxuIFxuXG4vLyAgIGxldCBuYXZQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcbi8vICAgbmF2UHJvamVjdHNDb250YWluZXIuYXBwZW5kKHN0dXBpZFZhbHVlKTtcbi8vIH0gXG5cblxuLy8gcHJpbnRTdG9yYWdlVG9Eb20oKTtcblxuXG5cblxuXG4gIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuICAvLyBsZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbiAgLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKGZvcm1FbGVtZW50KTtcblxuLy8gZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cbi8vIFllYWgsIEkgdGhpbmsgZm9jdXNpbmcgb24gdGhlIGJhc2ljIGlkZWEgb2YgaG93IHRvIGNyZWF0ZSBhIHByb2plY3QgYW5kIFxuLy8gdG8gZGlzcGxheSB0aGUgY29ycmVjdCBwcm9qZWN0IHdoZW4gaXRzIHNpZGViYXIgYnV0dG9uIGlzIGNsaWNrZWQgd291bGQgYmUgbXkgZmlyc3Qgc3RlcC4gXG4vLyBUaGVuIHlvdSBjYW4gdGhpbmsgYWJvdXQgd2hhdCBzaG91bGQgYmUgb24gdGhlIHByb2plY3QncyBwYWdlOiB0aGV5IHdpbGwgbmVlZCBidXR0b25zIHRvIGFkZCBhIHRhc2sgYW5kIHdoYXQgbm90XG5cbi8vIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBwcm9qZWN0IG5hbWUsIGFuZCBzYXZlIHRoZSB2YWx1ZSwgcGFzcyB0aGF0IHZhbHVlIHRvIHN0b3JhZ2UuIFxuXG4vLyB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgc2F2ZWQsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkIGJ0biwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgZ2V0IHRoZSBpbnB1dCBmaWVsZCwgY2FwdHVyZSBpdCdzIHZhbHVlIHRoZW4gY29uc29sZSBsb2cgaXQgXG5cbi8vIHRoZSBpc3N1ZSBvZiB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgYmVpbmcgY2xlYXJlZCwgXG5cbi8vIHdlbGwgSSB3cmFwcGVkIGl0IGluc2lkZSBhIGZvcm0gdGFnLCBpdCB3b3JrcyBidXQgaXQgcmVmcmVzaGVzIHRoZSBwYWdlLCBJIG1lYW4gaXMgdGhhdCBhIHByb2JsZW0sIFxuXG4vLyBJIGd1ZXNzIG5vdyBJJ2xsIHdvcmsgb24gc3RvcmluZyB0aGUgZGF0YSwgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIERPTSBsb2dpY1xuLy8gZXhwb3J0IHRoZW4gaW1wb3J0IHdpdGhpbiBhbm90aGVyIGZpbGUgXG5cbi8vIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250ZW50VHlwZSB9IGZyb20gXCJtaW1lLXR5cGVzXCI7XG4vLyBpbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjsgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUlucHV0KCkgeyBcblxuLy8gICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIjtcblxuLy8gICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbi8vICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4vLyAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcblxuLy8gICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbi8vICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuLy8gfSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgdXNlcklucHV0VmFsdWUgPSB2YWx1ZTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbi8vICAgLy8gZ2V0IHRoZSBlbGVtZW50IGFuZCB0cnkgdG8gdXNlIGl0IGluc2lkZSBldmVudCBsaXN0ZW5lciBtb2R1bGUsIFxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpOyBcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgXG5cbi8vIC8vIGlmIChwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmluY2x1ZGVzKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKSkgeyBcbi8vIC8vICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuLy8gLy8gfVxuXG4vLyAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBjbGlja2VkIHRoZSBwcm9qZWN0IG5hbWVcIik7XG5cbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgICBcbi8vICAgICAvLyB3aGVuIGJ0biBpcyBjbGlja2VkIGl0IHdpbGwgZ2VuZXJhdGUgYSBwb3AtdXAgZm9ybSBcbi8vICAgICAvLyBJIHRoaW5rIHlvdSBuZWVkIGEgY29udGFpbmVyLCBhIGRpdiB0aGF0IGhvbGRzIHRoZSBjb250ZW50LCBhcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyLCBcbiAgICBcbi8vICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyAgXG4gICAgICBcbi8vICAgICAgIC8vIGlmIChtYWluQ29udGVudFByb2plY3RDb250YWluZXIuaW5jbHVkZXMoc29tZUJ0bikpIHtcbi8vICAgICAgIC8vICAgc29tZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4vLyAgICAgICAvLyB9XG5cbiAgICBcblxuLy8gICAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgICAgLy8gc29tZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wLXVwLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGxldCB0aXRsZU9mVG9Eb0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCIgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCIgdW5kZXJsaW5lXCI7XG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICAgIC8vIGluIG9yZGVyIHRvIGNlbnRlciBpdCB5b3UgbmVlZCB0byBhcHBlbmQgdGhpcyBlbGVtZW50IFxuXG4vLyAgICAgICAvLyB0byBhbm90aGVyIGNvbnRhaW5lciBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTsgXG5cbi8vICAgfSkgXG5cblxuLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cblxuXG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9NYWluKCkgeyBcbi8vICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7IFxuXG4vLyB9XG5cblxuXG4vLyBJJ20gYWJsZSB0byBnZXQgdGhlIHVzZXIgdmFsdWUsIEkgYW0gYWJsZSB0byBsb2cgb3V0IGl0J3MgdmFsdWUsIEkgYW0gYWJsZSB0byBncmFiIHRoZSBwcm9qZWN0cyBjb250YWluZXIgc2VjdGlvbixcblxuLy8gaXQgc3RpbGwgcmV0dXJucyBhbmQgSFRNTCBlbGVtZW50LCBJIGNhbiB0dXJuIGl0IGludG8gYW4gYXJyYXksIGJ1dCBJIGFtIHVuc3VyZSBvZiBob3cgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG5cbi8vIHdoYXQgSSB3YW50LCB0aGUgdXNlciB3aWxsIGVudGVyIHByb2plY3QgbmFtZSwgSSB3YW50IHRoYXQgbmFtZSB0byBhcHBlYXIgaW4gdGhlIHByb2plY3QncyBzZWN0aW9uIGFuZCBtYWluIGNvbnRlbnQgc2VjdGlvbihibHVlIHBhcnQpOyBcblxuLy8gUHJvYmxlbTogSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwZW5kIHRoaXMgcHJvamVjdCBuYW1lIHRvIHRoZSBET00uIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IE9uY2UgdGhlIGFkZCBidG4gaXMgcHJlc3NlZCwgdGhlIHZhbHVlL25hbWUgb2YgcHJvamVjdCB3aWxsIGJlIHNhdmVkLCBhbmQgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhhdCBcblxuLy8gdmFsdWUgYW5kIHByaW50cyB0byB0aGUgRE9NLiBcblxuLy8gSSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBjb250YWluZXIsIGFuZCB0aGUgbWFpbiBzZWN0aW9uIGJ1dCBpdCdzIGFuIEhUTUwgY29sbGVjdGlvbiwgSSBjYW4gY29udmVydCBpdCBpbnRvIGFuIGFycmF5LCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhcHBlbmQgYW4gYXJyYXkgdG8gdGhlIERPTT8gIiwiLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciBtb2R1bGVcblxuLy8gaW1wb3J0IFwic3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanNcIjsgXG5cblxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiOyBcblxuIGltcG9ydCBjcm9zc01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2Nyb3NzLW1hcmstc3ZncmVwby1jb20ucG5nXCI7IFxuXG4gaW1wb3J0IGNoZWNrTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY2hlY2stbWFyay1zdmdyZXBvLWNvbS5wbmdcIjsgXG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TmFtZUxvb3AoKSB7ICAgXG5mb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG5cbiAgICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcblxuICAgICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbiAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpOyBcblxufSAgXG5cbn0gXG5cbnByb2plY3ROYW1lTG9vcCgpO1xuICBcbnByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgIFxuXG5cblxuLy8gdG9kYXksIGVkaXRpbmcgdG9kbydzIFxuXG4vLyB1c2luZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzLCBcblxuLy8gbG9vayBiYWNrIGF0IGV4YW1wbGUsIGFuZCBzZWUgaG93IHlvdSBjYW4gd29yayB0aGF0IGludG8gY3VycmVudCBjb2RlIFxuXG4vLyB0aGUgZ2V0dGVycyBhbmQgc2V0dGVycywgc2hvdWxkIHByb2JhYmx5IGJlIGluc2lkZSB5b3VyIGZhY3RvcnkgZnVuY3Rpb24gXG5cbi8vIHdoYXQgd2lsbCB3ZSBiZSBwYXNzaW5nIHRvIHRoZSBmYWN0b3J5PyBcblxuLy8gV2h5IGEgZ2V0dGVyIGFuZCBzZXR0ZXI/IEkganVzdCBuZWVkIHRvIG92ZXJ3cml0ZSB0aGUgZGF0YSBhdCB0aGF0IHBhcnRpY3VsYXIgaW5kZXggd2l0aCB0aGUgZGF0YSwgXG5cbi8vIGNhbid0IEkgcGFzcyB0aGUgdmFsdWVzIHRvIHRoZSBzYW1lIGZhY3Rvcnk/IG1ha2UgdGhlIHNhbWUgb2JqZWN0IGFuZCB0aGVuIHVzZSB0aGF0IG9iamVjdCB0byBzcGxpY2Ugb3Igb3ZlcndyaXRlIHByb3Blcml0ZXM/IFxuXG4vLyB5b3UgY2FuIHByb2JhYmx5IGRvIHRoZSBzYW1lIHByb2Nlc3MsIG1ha2UgYW4gb2JqZWN0LCBidXQgeW91IG5lZWQgdG8gb3ZlcndyaXRlIHRoYXQgdG9kbyBhbmQgdGhhdCBpbmRleCB3aXRoIHRoZSBuZXcgaW5mby4gXG5cbi8vIFxuXG5cblxuLy8gb2sgc28gYSBzZXBlcmF0ZSBtb2RhbCBpcyBjcmVhdGVkLCB3aXRoIHVuaXF1ZSBlbGVtZW50cywgIFxuXG4vLyBub3cgd2UgbXVzdCBnZXQgdGhlIHZhbHVlcyBmb3IgZWFjaCBpbnB1dCBmaWVsZCBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGN1cnJlbnQgcHJvamVjdHMgdG9kb3MgPyBcblxuLy8gc29tZWhvdyBJIGFsc28gbmVlZCB0byBpbmNsdWRlIHRoZSBkYXRhc2V0IFxuXG5cblxuLy8gaGVyZSB3ZSBhcmUgYmFjayB3aXRoIGF2ZW5nYW5jZSBcblxuLy8gSSBhbSByZWNvdmVyaW5nLCBJJ20gZ29pbmcgdG8gZG8gYSBsaXR0bGUgd29yayB0b2RheSBcblxuLy8gc28gcmlnaHQgbm93IEkgd2FudCB0byBlZGl0IHRvZG8ncyBcblxuLy8gYnV0dG9uIGlzIGNsaWNrZWQgYW5kIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGEgZm9ybSBcblxuLy8gdGhlIGZvcm0gaXMgaWRlbnRpY2FsIHRvIG1ha2luZyBhIHRvZG8sIFxuXG4vLyB5b3Ugd2lsbCBqdXN0IG5lZWQgdG8gYXNzb2NpYXRlIHRoYXQgcGFydGljdWxhciB0b2RvIFxuXG4vLyB3aXRoIGEgZGF0YXNldCwgc2ltaWxhciB0byBkZWxldGluZyBhIHRvZG8sIFxuXG4vLyBvbmNlIHRoZSBlZGl0IGJ0biBpcyBjbGlja2VkLCBnaXZlIHRoYXQgdG9kbyBhIGRhdGFzZXQgXG5cbi8vIGdlbmVyYXRlIGZvcm0sIHdoYXRldmVyIHVzZXIgZW50ZXJzLCB3aWxsIHVwZGF0ZS9vdmVyd3JpdGUgdGhlIGluZm8gXG5cbi8vIGl0IHdvbid0IGNyZWF0ZSBhIG5ldyBvbmUsIGl0IHdpbGwganVzdCB1cGRhdGUvbW9kaWZpeSBcblxuLy8geW91ciBwcmV2aW91cyBhcHByb2FjaCBJIGRvbid0IGJlbGlldmUgd2lsbCB3b3JrIFxuXG4vLyBiZWNhdXNlIHlvdSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgc2FtZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHRoYXQgc2VlbXMgbGlrZSBpdCB3aWxsIG9ubHkgY2F1c2UgaXNzdWVzLCBcblxuLy8gbGV0cyBzZXBlcmF0ZSB0aGVtLCBtZWFuaW5nIGNvcHkgdGhlIHNldC11cCBhbmQgY29kZSBmb3IgY3JlYXRpbmcgYSB0b2RvIG1vZGFsIFxuXG4vLyBzdHlsZSBleGFjdGx5IHRoZSBzYW1lLCBcblxuLy8gYWRkIHRvZG8sIGFuZCBlZGl0IHRvZG8gYXJlIHR3byBzZXBlcmF0ZSBsaXN0ZW5lcnMsIFxuXG4vLyBvbmUgaXMgZm9yIGNyZWF0aW5nLCB0aGUgb3RoZXIgaXMgZm9yIG1vZGlmeWluZywgXG5cbi8vIGxldHMgYmVnaW4sIHRoZSBhcHByb2FjaCBzZWVtcyB2YWxpZCwgc3RhcnQgd2l0aCB0aGUgSFRNTCBcblxuLy8gYmFzaWNhbGx5IGNvcHkgdGhlIGNvZGUsIHNsaWdobHkgY2hhbmdlIGNsYXNzIG5hbWVzLCBcblxuLy8gc2FtZSBzdHlsZXMsIGh0bWwsIGNzcywgdGhlbiBncmFiIHRoZSBlbGVtZW50IGFuZCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGxvZ2ljLCBcblxuLy8gd2l0aGluIHRoZSBsaXN0ZW5lciwgd2UgYXJlIG5vdCBhZGRpbmcsIFxuXG5cblxuXG4vLyBwYXNzIHRoZSB1cGRhdGVkIGFycmF5IHRvIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIGNhbiBJIHB1c2ggdGhpbmdzIHRvIGl0LCBhZGQgdGhpbmdzIHRvIGl0LCBcblxuLy8gY2FuIEkgdXNlIGZpbHRlciwgXG5cbi8vIG9rIHNvIG5vdyBJIGNhbiBkZWxldGUgaW5kaXZpZHVhbCBwcm9qZWN0cyBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0IGFzIGEgd2hvbGUgXG5cbi8vIGhvdyBjYW4gSSByZWZsZWN0IHRoaXMgY2hhbmdlIGluIHN0b3JhZ2U/IFxuXG4vLyB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcGxhbiBvbiBob3cgSSBjYW4gbWFrZSBhbiB1cGRhdGUgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIHJpZ2h0IG5vdyBJdCBvbmx5IGRlbGV0ZXMgZnJvbSB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHVwZGF0ZSBteSBhcnJheSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIGluIHRoZSBET00/IFxuXG4vLyBjYW4gSSBsb29rIGJhY2sgbXkgZGVsZXRlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGZvciBpbnNwaXJhdGlvbj8gXG5cbi8vIHRoYXQgZGVsZXRlcyBmcm9tIGJvdGggdGhlIGFycmF5IGFuZCBpbiBzdG9yYWdlLCBcblxuLy8gZmlyc3QgY2hlY2sgdGhhdCBvdXQsIFxuXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgdmVyeSBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8gXG5cbi8vIHVzaW5nIHRoZSBcblxuLy8gY29uZnVzZWQgb24gaG93IEkgY2FuIGRlbGV0ZSBhIHNpbmdsZSB0b2RvLCBhbmQgcmVmbGVjdCBpbiB0aGUgRE9NLCBcblxuLy8gYnV0IGFsc28gaW4gc3RvcmFnZSwgSSBjYW4gcmVtb3ZlIGZyb20gRE9NLCBcblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBhIGxpdHRsZSBsb3N0IG9uIGhvdyB0byByZW1vdmUgaXQgZnJvbSBzdG9yYWdlLCBcblxuLy8gSSB3YW50IHRvIHNheSB1c2luZyBmaWx0ZXIgd291bGQgYmUgYSBnb29kIG9wdGlvbiBcblxuLy8gdG9kYXkgdGhlIGZvY3VzIGlzIGRlbGV0aW5nIGEgc2luZ2xlIHRvZG8gYW5kIHJlZmxlY3RpbmcgdGhhdCBcblxuLy8gd2l0aGluIHRoZSBzdG9yYWdlIGFuZCB3aXRoaW4gdGhlIERPTSwgXG5cbi8vIGFsc28gaWYgSSBnZXQgc3R1Y2sgb24gdGhhdCwgXG5cbi8vIGVkaXRpbmcgYSB0b2RvLCB0aGF0IGlmIHVzZXIgcHJlc3NlcyBlZGl0IGJ0biwgXG5cbi8vIGdlbmVyYXRlIHRoZSBtb2RhbCBhZ2FpbiwgYW5kIGFsbG93IHRoZSB1c2VyIHRvIGVkaXQgdGhhdCB0b2RvIFxuXG4vLyBhbmQgdGhlbiByZWZsZWN0IHRoYXQgY2hhbmdlIGluIHRoZSBET00gYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBJIHdpbGwgYXNrIHRoZSBxdWVzdGlvbiByaWdodCBhd2F5IGJlY2F1c2UgSSBhbSBzdHVjaywgXG5cbi8vIGJ1dCBzcGVuZCBhIGxpdHRsZSB0aW1lIGxvb2tpbmcgb3ZlciB0aGUgY29kZSwgXG5cblxuXG5cbi8vIEkgbWFkZSBhIG5ldyBmb2xkZXIgaW4gbXkgcmVwb3MgY2FsbGVkIHRvZG8gbGlzdC1CIFxuXG4vLyB0aGVuIEkgY2xvbmVkIHdpdGhpbiB0aGVyZSwgdGhlbiBjb3BpZWQgYWxsIG15IGNvZGUgZnJvbSBteSBtb2R1bGUgXG5cbi8vIGludG8gdGhlIG5ldyBwcm9qZWN0LCB0aGluZ3Mgc2VlbSB0byBiZSB3b3JraW5nIG9rIFxuXG4vLyBhbSBJIG9rIHRvIHB1c2ggYW5kIGNvbW1pdCBjaGFuZ2VzLCB3aWxsIHRoZXNlIGNoYW5nZXMgc3RpbGwgZ28gdG8gXG5cbi8vIHRvZG8gbGlzdC1BID8gXG5cbi8vIHJpZ2h0IG5vdyBhIHByb2JsZW0gSSBzZWUgaXMgdGhhdCBwcm9qZWN0cyBcblxuLy8gYXJlIG5vdCBiZWluZyBhZGRlZCB0byBwcm9qZWN0IDIsIFxuXG4vLyB0aGUgdG9kbydzIHdvbid0IHNob3csIGFuZCBhbnkgcHJvamVjdCB0aGF0J3Mgbm90IDEsIGVyYXNlcyBvbiByZWZyZXNoLCBcblxuXG5cblxuXG4vLyBvayBzbyB0b2RheSBpcyBhIG5ldyBkYXksIFxuXG4vLyBsb29rIGJhY2sgb3ZlciB0aGUgbWVzc2FnZXMsIGdldCBhbiBpZGVhLCBcblxuLy8gdGhlbiBncmFiIHNvbWUgb2YgeW91ciBmdW5jdGlvbnMsIFxuXG4vLyB0cnkgdG8gaW1wbGVtZW50IHRoZSBwbGFuIHRoYXQgZXggY2FtZSB1cCB3aXRoLCBcblxuLy8gcGFzcyBvYmplY3RzIGludG8gYXJyYXkgYW5kIGxvb3AgdGhydSB0aGVtLCBcblxuLy8gZmlyc3QgbG9vayBvdmVyIHRoZSBtZXNzYWdlcywgIFxuXG5cbi8vIG9rIHNvIGdvIGludG8gY29kZSBwZW4sIGNvcHkgdGhlIGRpc3BsYXkgZnVuY3Rpb24gb3ZlciwgXG5cbi8vIHRyeSB0byBtYWtlIGEgbmV3IG9iamVjdCwgZWFjaCB0aW1lIHlvdSBlbnRlciBmb3JtIGRhdGEsIFxuXG4vLyB0aGVuIGFkZCB0aG9zZSBwcm9qZWN0cyB0byB0aGUgYXJyYXksIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5LCB0aGUgdW5xaXVlIHRvZG9zIGFyZSBiZWluZyBkaXNwbGF5ZWQgXG5cbi8vIG5vdyB3ZSBtdXN0IHN0eWxlIHRoZSB0b2RvJ3MgXG5cbi8vIGVhY2ggYmxvY2sgc2hvdWxkIGJlIHN0eWxlZCwgXG5cbi8vIG5vdCBhIGNvbnRhaW5lciB0aGFuIGhhcyBhIHN0eWxlIHRoYXQgaG9sZHMgZXZlcnl0aGluZywgXG5cbi8vIHRyeSB0byBtYWtlIHN1cmUgZWFjaCBzZXQgb2YgdG9kbyBpcyBhcHBlbmRlZCB0byBhIGNvbnRhaW5lciwgXG5cbi8vIHlvdSBhcmUgYXBwZW5kaW5nIGV2ZXJ5dGhpbmcgdG8gdGhhdCBzYW1lIGNvbnRhaW5lciwgXG5cbi8vIGFwcGVuZCB0byBvbmUgY29udGFpbmVyLCBzdHlsZSB0aGF0IHRoZW4gYXBwZW5kIHRvIG1haW4gY29udGFpbmVyIFxuXG5cblxuXG5cblxuXG4vLyBvayB3ZSBoYXZlIHNvbWV0aGluZyB3b3JraW5nIGhlcmUsIFxuXG4vLyB5b3UgaGF2ZSB0d28gZnVuY3Rpb25zLCBcblxuLy8gYXQgbGVhc3QgZGF0YSBpcyBiZWluZyBwcmludGVkIHRvIHRoZSBET00sIGFuZCBpcyBzdG9yaW5nIGluIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuXG4vLyBjaGVjayB5b3VyIGZ1bmN0aW9ucyBhZ2FpbiwgXG5cbi8vIHJlbWVtYmVyIG9uZSB0byBjcmVhdGUgdGhlIGVsZW1lbnRzL3N0eWxlLCBvdGhlciB0byBqdXN0IGRpc3BsYXkgdGhlIGN1cnJlbnRQcm9qZWN0cyB0b2RvJ3MgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYXBwZW5kIHZhbHVlcywgc3R5bGUsIFxuXG4vLyB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIGp1c3QgZGlzcGxheSB0aGVtLiBcblxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuXG5cbi8vIGZvciAobGV0IHRvZG8gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgIGxldCB0b2RvSXRlbSA9IHBhcnNlVG9kb0l0ZW1zOyBcblxuLy8gICAgICBsZXQgdmFsdWVJblRvZG8gPSBwYXJzZVRvZG9JdGVtc1t0b2RvSXRlbV07IFxuXG4vLyAgICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Ub2RvKTsgXG5cbi8vICAgICAgLy8gY29uc29sZS5sb2codG9kb0l0ZW0pO1xuLy8gfVxuXG4vLyBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7XG5cblxuXG5cblxuXG4vLyBzdG9yZSB0aGUgdG9kb3MgbGlrZSBJIGRpZCB3aXRoIG5hbWVzLCBcblxuLy8gbG9vcCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0YWtlIGluIHByb2plY3QsIGFkZCB0aGUgdmFsdWVzLCBcblxuLy8gcHVzaCB0aGUgcHJvamVjdCBiYWNrIGludG8gcHJvamVjdHMgYXJyYXksIGFuZCB0aGVuIFxuXG4vLyBwYXNzIHRoZSBwcm9qZWN0c0FycmF5IGJhY2sgdG8gRE9NIGZ1bmN0aW9uLCBhbmQgc3RvcmFnZSwgXG5cbi8vIGFkZCB0aGUgdG9kbydzIG9uIGEgcHJvamVjdCwgdXBkYXRlIGl0IGFnYWluIFxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZVRvZG9JdGVtcyk7XG5cblxuLy8gaG93IGNhbiBJIGtlZXAgbXkgdG9kbydzIGFmdGVyIHBhZ2UgcmVmcmVzaD8gWWVzdGVyZGF5IGl0IHNlZW1lZCBsaWtlIGl0IHdhcyBhIHByb2JsZW0gaW4gaG93IEknbSBzdG9yaW5nIHRoZW0gYW5kIGhvdyBJIHBhcnNlIHRoZW0gXG5cbi8vIGl0IHNlZW1zIGxpa2UgaXQgaXMgYSBzdG9yYWdlIHByb2JsZW0sIGhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgdG9kbyBhcnJheSB3aXRoaW4gZWFjaCBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHBhcnNlIHRoZSBkYXRhIGxpa2UgdSBkaWQgYmVmb3JlPyBcblxuXG4vLyBsZXQgZ2V0VG9kb0l0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvSXRlbXNcIik7IFxuXG4vLyBsZXQgcGFyc2VUb2RvSXRlbXMgPSBKU09OLnBhcnNlKGdldFRvZG9JdGVtcyk7IFxuXG5cbi8vIGZ1bmN0aW9uIHBhcnNlVG9kbygpIHsgXG4vLyAgICAgIGZvciAobGV0IGl0ZW0gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgICAgICAgbGV0IHRvZG8gPSBpdGVtOyBcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbi8vICAgICAgfVxuLy8gfSBcblxuLy8gcGFyc2VEYXRhKCk7XG5cblxuLy8gT0sgc28gdGhlIGRlbGV0aW5nIHByb2plY3QgbWV0aG9kIHdvcmtzISEgSSBhbSBub3cgYWJsZSB0byBkZWxldGUgYSBwcm9qZWN0IGZyb20gbWFpbiBhcyB3ZWxsIGFzIHRoZSBuYXZiYXIsIFxuXG4vLyBuZXh0IEkgZGlkIHRvIGFkZCB0aGUgbG9naWMgc28gdGhlIHVzZXIgY2FuIGFkZCB0b2RvJ3MsIFxuXG4vLyByZW1lbWJlciB0b2RvJ3MgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG9iaiBhcnJheSwgXG5cbi8vIGZpcnN0IHdlIHByb2JhYmx5IG5lZWQgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FwdHVyZSB0aGUgdmFsdWUgXG5cbi8vIG9uIGVhY2ggaW5wdXQgZmllbGQsIGxldHMgc3RhcnQgdGhlcmUsIFxuXG4vLyBhIGZ1bmN0aW9uIHdpbGwgYmUgbmVlZGVkIHRvIGdldCB0aGUgY29ycmVjdCBpbnB1dCBmaWVsZHMgXG5cbi8vIGFuZCB0aGVuIGdldCB0aGUgdmFsdWVzIGZyb20gdGhlbSwgXG5cblxuXG5cbi8vIHRoaW5raW5nIG9mIHRoZSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGRlbGV0aW5nIHByb2plY3RzLCBcblxuLy8gdGhhdCB3b3VsZCBiZSBnZXR0aW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBpbnB1dCBhbmQgXG5cbi8vIHB1c2hpbmcgdGhlbSBiYWNrIGludG8gdGhlIHRvZG8gYXJyYXkgdGhhdCBlYWNoIHByb2plY3QgY29udGFpbmVycyBcblxuLy8geW91IHdpbGwgbmVlZCBhY2Nlc3MgdG8gdGhhdCB0b2RvIGFycmF5LCB0cnkgYSBzaW1wbGUgbG9nIGZpcnN0IFxuXG4vLyBidXQgdGhlIHRvZG8ncyB3aWxsIGJlIGFkZGVkIHRvIHRoZXJlIGJ1dCBhbHNvIGl0IG5lZWRzIHRvIGJlIFxuXG4vLyByZWZsZWN0ZWQgaW4geW91ciBET00gdG9vLCBcblxuLy8gc28gdGhpbmtpbmcgb2Ygc29tZSB3YXkgdG8gYWNjZXNzIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGUgb2JqIFxuXG5cbi8vIGlmIHlvdSBjYW4gYWNjZXNzIGl0IHlvdSBhZGQgdGhlIHZhbHVlcyB0byBpdCwgXG5cbi8vIHRoZW4gb25jZSB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgcHJvcGVybHkgd2l0aGluIGVhY2ggb2JqZWN0LCBcblxuLy8geW91IHdhbnQgdG8gcmVmbGVjdCB0aGF0IGluIHRoZSBET00sIGFjY2VzcyB0aGUgdG9kbyBhbmQgZGlzcGxheSBpdCdzIHByb3BlcnRpZXMgXG5cbi8vIHRoZW4gaGF2aW5nIGEgd2F5IHRvIGRlbGV0ZSB0b2RvJ3MgYW5kIGhhdmluZyB0aGF0IHVwZGF0ZSBcblxuLy8gd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00uIFxuXG5cbi8vIGdldHRpbmcgcHJvamVjdCBJRCBcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgIFxuLy8gICAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgICBsZXQgcHJvamVjdFZhbHVlID0gcHJvamVjdEluZGV4LmlkOyBcbiAgICAgXG4vLyAgICAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSk7XG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBnZXQgdGhlIHByb2plY3QncyBJRCwgZ2V0IHRoZSBJRCdzIHdpdGhpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgYW5kIHRoZSBJRCdzIHdpdGhpbiB0aGUgbWFpbiBzZWN0aW9uLCBcblxuLy8gY3JlYXRlIGEgbG9vcCBpbnNpZGUgZWFjaCBzZWN0aW9uIGFuZCBnZXQgdGhlIHZhbHVlLCBcblxuXG5cblxuLy8gd2VsbCB5b3UgY2FuIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGFuZCB0aGUgYnRuIGNvbnRhaW5lciBmcm9tIHRoZSBET00sIFxuXG4vLyBjYW4gd2UgZmlndXJlIG91dCBhIHdheSB0byBkZWxldGUgdGhlIHByb2plY3QsIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGxldHMgdGFrZSBhIGxvb2sgYXQgaG93IHRoZSB2YWx1ZSBpcyBzdG9yZWQsIFxuXG4vLyBmaWd1cmUgb3V0IGhvdyB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgYW5kIHNlZSBpZiBzb21laG93IHlvdSAgXG5cbi8vIGdyYWIgYSB2YWx1ZSwgb3IgdGhlIGNvbnRhaW5lciBkaXYgdGhhdCBjb250YWlucyB0aGUgdmFsdWUuXG5cblxuLy8gSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHZhbHVlcyB3dGloaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCB0byB1c2UgYSBsb29wLCB0byBnZXQgYWxsIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHRoZSB2YWx1ZSdzIHRleHQgY29udGVudCBtYXRjaGVzLCBzZXQgdGhlIHRleHRDb250ZW50IHRvIFwiXCIgb3IgZGVsZXRlIHRoZSBlbGVtZW50LCBcblxuLy8gdHJ5IHRvIGxvb3AgdGhyb3VnaCB0aGUgZWxlbWVudHMgd2l0aCB0aGF0IHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHZhbHVlcyBtYXRjaCwgZGVsZXRlIHRoZSB2YWx1ZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gdGhhdCBtYXRjaGVzIG1haW4gY29udGVudHMgdmFsdWUsIFxuXG4vLyBpZCdzLCBlYWNoIHByb2plY3QgaGFzIGEgdW5xaXVlIElELCBjb21wYXJlIElEJ3MsIHdoeSBjYW50IEkgZG8sIGlmIHRoZSB0ZXh0Q29udGVudHMvc3RyaW5ncyBtYXRjaCByZW1vdmU/IFxuXG4vLyBJIGdvdCB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbWFpbiwgYW5kIGFsbCB0aGUgZWxlbWVudHMgaW4geW91ciBwcm9qZWN0cywgXG5cbi8vIGRvZXMgdGhlIHN0cmluZyBtYXRjaCB0aGUgb3RoZXIgc3RyaW5nLCBcblxuLy8gZG8gSUQncyBtYXRjaD8gXG5cblxuXG5cblxuLy8gc2FtZSBpc3N1ZSwgSSBhbSB0cnlpbmcgdG8gZ3JhYiB0aGUgdmFsdWVzLCBhbmQgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgbWFyaywgZGVsZXRlIHRoZSBwcm9qZWN0LCBcblxuLy8gZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gYm90aCBwbGFjZXMsIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBhbmQgdGhlIGxpc3Qgb24gdmFsdWVzIGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBob3cgY2FuIEkgZGVsZXRlIGJvdGggaW4gdGhlIHNhbWUgcGxhY2Ugb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBcblxuLy8ganVzdCBjaGVjayB0byBzZWUgd2hlbiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgRE9NLCBzZWUgaWYgeW91IGNhbiBhZGQgYSBjbGFzcyB0byBpdCwgXG5cblxuLy8gd2hpbGUgd2VyZSB3YWl0aW5nIGNhbiB3ZSBnZXQgdGhlIHByb2plY3RzIElEPyBcblxuLy8ganVzdCBzaW1wbHkgdHJ5IHRvIGdldCBhIHByb2plY3RzIElELiBhbmQgbG9nIGl0LCBcblxuXG5cblxuXG5cbi8vIE9LIHRvZGF5IHRoZSBnb2FsIGlzIHRvIGZpZ3VyZSBvdXQsIGhvdyB0byBkaXNhYmxlL2V4aXQgdGhlIG1vZGFsLCBhbmQgaG93IHRvIGFjdGl2YXRlIGl0IFxuXG4vLyBiYXNlZCB1cG9uIGEgYnV0dG9uIGNsaWNrLCBcblxuLy8gdGhlbiBvbmNlIHRob3NlIGFyZSBnb29kLCB0aGVuIHdlIGNhbiBmb2N1cyBvbiB0aGUgc3R5bGluZyBvZiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBsZXQncyBhZGQgdGhlIGxvZ2ljIHRoYXQgY2FuIGV4aXQgdGhlIG1vZGFsLCBcblxuLy8gZ3JhYiB0aGUgaWQgb3IgY2xhc3MgZnJvbSBIVE1MLCBhbmQgZmlyc3QgbG9nIHRoZSBlbGVtZW50IGNvcnJlY3RseSwgXG5cbi8vIHRoZW4gYWRkIGV2ZW50IGxpc3RlbmVyLCB0aGF0IHNldHMgdGhlIG1vZGFscyBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZWQgdGhlICsgaWNvbiwgc2V0IHRoZSBkaXNwbGF5IHRvIGZsZXgsIFxuXG4vLyBvayBzbyBJIGFtIGFibGUgdG8gdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBvcGVuaW5nIHRoZSBtb2RhbCBhbmQgY2xvc2luZyB0aGUgbW9kYWwsIFxuXG4vLyBub3cgeW91IHdpbGwgbmVlZCB0byBtYWtlIGxvZ2ljLCB0aGF0IHdpbGwgc2V0IHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIG1vZGFsIHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIGl0IHdpbGwgcG9wLXVwLCBjYW5jZWwgaXQgd2lsbCBub3QgZGlzcGxheSBcblxuLy8gSSB0aGluayBqdXN0IGdyYWJiaW5nIHRoZSB2YXJpYWJsZXMgYXQgdGhlIHRvcCBpcyBmaW5lLCBhbmQganVzdCBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBcblxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB3b3Jrcywgc2F2ZSBhbmQgY29tbWl0LCB0aGVuIGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgZGVsZXRlIGJ0biB3b3JraW5nLCBcblxuLy8gbm93IHdvdWxkIHByb2JhYmx5IGJlIHRoZSBiZXN0IHRpbWUgdG8gZG8gdGhhdCwgc2luY2UgdGhlIGFkZCBidG4gaXMgd29ya2luZywgbm93IHdlIGNhblxuXG4vLyB3b3JrIG9uIHRoZSBsb2dpYywgdGhhdCBvbmNlIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBhbm90aGVyIG1vZGFsLCBhc2tpbmcgdGhlIHVzZXIgXG5cbi8vIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3Q/IEl0IHdpbGwgY2xlYXIgdGhhdCBwcm9qZWN0IGZvciB0aGUgRE9NIEluIG1haW4gXG5cbi8vIGJ1dCBhbHNvIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiwgXG5cbi8vLyBzdHlsZSB0aGUgbW9kYWwsIG9uZSBidG4gdG8gY29uZmlybSBhbmQgdGhlIG90aGVyIGJ0biB0byBjYW5jZWwgdGhlIG9yZGVyLCBcblxuLy8gT2sgc28gd2UgaGF2ZSB0aGUgcHJpbnQgdmFsdWVzIHRvIHRoZSBET00gZnVuY3Rpb24sIFxuXG4vLyBpZiB1c2VyIGNsaWNrcyBwcm9qZWN0IG5hbWUsIHZhbHVlcyBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIsIFxuXG4vLyBpZiB1c2VyIHByZXNzZXMsIGFkZCBvciBkZWxldGUsIGxvZ2ljIGlzIHdpdGhpbiB0aGUgc2FtZSBmdW5jdGlvbiwgXG5cbi8vIEkgZG9uJ3Qgc2VlIHRoYXQgYmVjb21pbmcgYSBwcm9ibGVtLCBteSB0aGlua2luZyBpcyB0aGF0IGl0J3MgYmV0dGVyIHRvIGRvIHRoYXQgdGhlcmUgXG5cbi8vIHRoYW4gcGFzc2luZyB0aGUgdmFyaWFibGUgdG8gYW5vdGhlciBmdW5jdGlvbiwgbWlnaHQgYXMgd2VsbCBkbyB0aGF0IGFsbCB0aGVyZSwgXG5cbi8vIHNvIHRoZSBkZWxldGUgYnRuLCBtYWtlIHRoZSBtYXJrdXAgaW4gdGhlIEhUTUwgZmlyc3QsIGZvbGxvdyB0aGUgZ3VpZGVsaW5lcyBiZWZvcmUsIGdvIHNsb3csIFxuXG5cbi8vIG1vZGFsIGlzIHdvcmtpbmcgYnV0IGp1c3QgdHJ5aW5nIHRvIGFkZCBzcGFjZSBcbi8vIGJldHdlZW4gdGhlIGVsZW1lbnRzIHRoZSBjaGVjayBhbmQgdGhlIHgsIGVsZW1lbnQgXG5cbi8vIG9rIGdvdCB0aGUgZGVsZXRlIGJ0biBtb2RhbCB3b3JraW5nIGFzIEkgd2FudCB0bywgbmV4dCBJIHdpbGwgYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudCwgXG5cbi8vIHRoYXQgb25jZSBjbGlja2VkIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsLCBcblxuLy8gZG9udCBmb3JnZXQgdG8gYWRkIHRoZSBvdmVybGF5ISBcblxuXG5cblxuLy8gbmV4dCB3aWxsIHdvcmsgb24gZGVsZXRpbmcgYSB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrbWFyaywgaXQgc2hvdWxkIGRlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBET00sIHRoZSBhcnJheSBcblxuLy8gYW5kIEkgYmVsaWV2ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgdG9vLCB0aGVuIHdvcmsgb24gc2F2aW5nIHRvZG8gaW5mbywgZnJvbSB0aGUgbW9kYWwgYW5kIHB1c2hpbmcgaW50byB0aGUgRE9NIGFuZCBzdG9yYWdlIHdoZXJlIFxuXG4vLyBlYWNoIHByb2plY3QgaGFzIGEgbGlzdCBvZiB0b2RvJ3MsIGl0IHdpbGwgYWRkZWQgdGhlcmUgd2hpbGUgYWxzbyByZWZsZWN0aW5nIHRoYXQgaW50byB0aGUgRE9NLiBcblxuLy8geWVzIG5leHQgc3RlcCBpcyBlaXRoZXIgZGVsZXRpbmcgdGhlIHByb2plY3QsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgYnRuLCBhbmQgZ2V0dGluZyBhbGwgdGhlIHVzZXIgaW5mbyBcblxuLy8gdGhhdCB3YXMgZW50ZXJlZCBhbmQgc2F2aW5nIHRoYXQgdG9kbywgdG8gdGhlIGFycmF5IG9mIHRvZG8ncyB0aGF0IGVhY2ggcHJvamVjdCBoYXMsIFxuXG5cblxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG5cbi8vIHNvIG5vdyB3ZSBmaWd1cmVkIG91dCBob3cgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBtb3JlIHByb2plY3RzLCBcblxuLy8gYmFzY2ljYWxseSBjbGVhciB0aGUgRE9NLCB0aGVuIGFkZCBwcm9qZWN0cywgXG5cbi8vIG5vdyBhZGQgdGhlIGxvZ2ljLCB0aGF0IHdpbGwgZ2VuZXJhdGUgYSBtb2RhbCwgZm9yIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIHRvZG8sIFxuXG4vLyBmaXJzdCBJIHdvdWxkIGp1c3QgdHJ5IGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gbWF5YmUgc2VlIGlmIHlvdSBjYW4gc3BsaXQgdGhlIGNvZGUgdXAgYSBiaXQsIFxuXG4vLyBwcmludCBhIHNpbXBsZSBtZXNzYWdlIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgZmlyc3QsIFxuXG4vLyBvayB3b3JrcyBnb29kLCBub3cgc3RhcnQgY29uc3RydWN0aW5nIHlvdXIgbW9kYWwsIGZvbGxvdyBhbG9uZyB3aXRoIHRoZSBhcnRpY2xlLCBvciB2aWRlbywgXG5cbi8vIG5lZWRzIHRpdGxlLCBwcmlvcml0eSwgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBcblxuLy8gdGhvc2UgdmFsdWVzIGFyZSB0aGVuIGFkZGVkIHRvIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGF0IHNwZWNpZmljIHByb2plY3QsIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIGltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICBcbn0gIFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJyYXlTdG9yYWdlKGl0ZW0pIHsgXG4vLyAgICAgbGV0IHRoaXNQcm9qZWN0ID0gaXRlbTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG4vLyB9XG5cblxuLy8gd2hhdCBwcm9wZXJ0aWVzIHdvdWxkIHRoZSB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uIGhhdmU/IFxuXG4vLyB3aGF0IHdvdWxkIGl0IHRha2UgaW4/IFxuXG4vLyBJIHRoaW5rIHlvdSBtaWdodCBoYXZlIHRvIHVwZGF0ZSB0aGUgYXJyYXksIFxuXG4vLyBvciBmaWx0ZXIgb3V0IHRoZSBpdGVtcyB0aGF0IHdlcmUgZGVsZXRlZCwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IHRvIHVwZGF0ZSBzdG9yYWdlLCBcblxuXG4vLyBzbyBub3cgbmV4dCwgSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIFxuXG4vLyB1cGRhdGUgbXkgc3RvcmFnZSBhbmQgYXJyYXkgYmFzZWQgb24gd2hlbiB1c2VyIGRlbGV0ZXMgXG5cbi8vIGEgc2luZ2xlIHRvZG8gaXRlbSwgXG5cbi8vIHNvbWV0aGluZyB3aWxsIG5lZWQgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIHN0b3JhZ2UgcmVmbGVjdCBjaGFuZ2VzIGluIHRoZSBET00sIFxuXG4vLyBwcm9qZWN0IGlzIGRlbGV0aW5nIGZyb20gdGhlIERPTSwgYnV0IGl0IHN0aWxsIHNob3dzIGluIGFycmF5IFxuXG4vLyBhbmQgc3RpbGwgc2hvd3MgaW4gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGFmdGVyIHRoZSBwcm9qZWN0IGlzIGRlbGV0ZWQgZnJvbSB0aGUgRE9NLCBcblxuLy8gdGhlIHByaW50VmFsdWVUb0RPTSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gYmUgY2FsbGVkIGFnYWluIFxuXG4vLyBzbyB0aGF0IGNhbiByZWZsZWN0IHRoZSBsb2NhbCBzdG9yYWdlIHRvIHRoZSBET00sIFxuXG4vLyBzbyBJIHRoaW5rIHRoZSBwcm9qZWN0IGFycmF5IGlzIGdvaW5nIHRvIGJlIHBhc3NlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiB0aGUgcHJpbnR2YWx1ZSB0byBkb20gZnVuY3Rpb24gbmVlZHMgdG8gY2FsbGVkLCBzbyBzaHdvIHRvIHRoZSBET00gXG5cbi8vIHdoYXQgaXMgaW5zaWRlIGxvY2FsIHN0b3JhZ2UgXG5cbi8vIGNvbnRpbnVlIHRvIGJyYWluc3Rvcm0gaG93IHRvIHJlZmxlY3QgdGhlIGNoYW5nZSBpbiBkZWxldGluZyBcblxuLy8gcHJvamVjdHMgZnJvbSB0aGUgRE9NIGFuZCBob3cgdG8gdXBkYXRlIHRoYXQgaW4gbG9jYWwgc3RvcmFnZS4gXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVRvZG9JdGVtcyhwcm9qZWN0KSB7IFxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpOyBcbiAgICBcbi8vICB9XG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0b3JhZ2UoKSB7IFxuLy8gICBsZXQgZ2V0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4gIFxuLy8gICBjb25zb2xlLmxvZyhnZXROYW1lKTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqID0gcHJvamVjdE5hbWVGYWN0b3J5KGdldE5hbWUpOyBcblxuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZU9iaik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBteSBnb2FsIGlzIHRvIGhhdmUgaW5kaXZkdWFsIHByb2plY3QgbmFtZSBvYmplY3RzLCBcblxuLy8gSSBhbSBhYmxlIHRvIGNyZWF0ZSBwcm9qZWN0IG5hbWVzLCBidXQgd2hlbiBJIHVzZSBvYmplY3RzIGl0IG9ubHkgYWRkcyBvbnRvLCBhbmQgZG9lcyBub3QgY3JlYXRlIHVuaXF1ZSBwcm9qZWN0cy4gXG5cbi8vIFxuXG5cblxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnIgPSBbXTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gdmFsdWVbaV07IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUlucHV0KTtcbi8vICAgICAgICAgYXJyLnB1c2gocHJvamVjdE5hbWVJbnB1dCk7XG5cbi8vICAgICB9IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycik7IFxuLy8gICAgIHJldHVybiBhcnI7IFxuLy8gfSBcblxuLy8ganVzdCBhZGQgdmFsdWVzIHRvIHRoZSBhcnJheSBcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUodmFsdWUpIHsgXG5cbi8vICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZVN0b3JhZ2UpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0TmFtZShcImFsZWNcIik7IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGxldCBnQXJyYXkgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4vLyAgICAgICAgIHJldHVybiBhcnJheTtcbi8vICAgICB9XG4vLyB9KCkpOyBcblxuLy8gZ0FycmF5KDEpOyBcbi8vIGdBcnJheSgyKTsgXG4vLyBnQXJyYXkoMyk7IFxuLy8gZ0FycmF5KDQpOyBcblxuLy8gIGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnJheSA9IFtdOyBcbi8vICAgICBjb25zb2xlLmxvZyhhcnJheSlcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gY2FsbFRoaXMgKHZhbHVlKSB7IFxuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTsgXG4vLyAgICAgICAgIHJldHVybiBhcnJheVxuLy8gICAgIH0gXG4vLyB9IFxuXG4vLyBzdG9yZVVzZXJWYWx1ZSgpO1xuXG5cblxuXG5cblxuLy8gZmluZCB3YXkgdG8gYWRkIGl0ZW1zIG9udG8gYW4gYXJyYXksIEkgZG9uJ3QgdGhpbmsgaXQncyBzbWFydCB0byBhZGQgb25lIGF0IGEgdGltZSwgYnV0IG1vcmUgc28gbGlrZSBhZGRpbmcgcHJvamVjdHMgb250byBhIHNpbmdsZSBhcnJheSBcblxuICAgIC8vIHRoaW5rIG9mIGEgd2F5IHRvIGFkZCBpbnRvIGFuIGFycmF5LCBsb29rIGludG8gY2xvc3VyZSBhbmQgYWRkaW5nIG9udG8gYW4gYXJyYXkgdXNpbmcgY2xvc3VyZS4gXG5cbiAgICAvLyBjbG9zdXJlIHNlZW1zIGxpa2UgdGhlIHJpZ2h0IGlkZWEgYnV0IGhvdyBjYW4gSSBtYWtlIHRoaXMgd29yayB3aXRoIHRoZSBjdXJyZW50IGNvZGUgSSBoYXZlPyBcblxuICAgIC8vIHdlbGwgSSB0aGluayBJIGRpZCBmaW5kIGEgd2F5IHRvIHN0b3JlIHRoZSBwcm9qZWN0IG5hbWVzLCBqdXN0IHNvbWV0aGluZyBkb2Vzbid0IHNlZW0gcmlnaHQgYWJvdXQgdGhlIHN0b3JhZ2VcblxuICAgIC8vICBcblxuLy8gdGhhdCBhcnJheSBjYW4gYmUgcGFydCBvZiBhbiBvYmosIGtleSBpbnRvIHRoZSBhcnJheVxuXG4vLyBidG4gcHJvYmxlbSwgYXBwZW5kaW5nIHRvbyBtYW55IGlucHV0IGZpZWxkcywgY29uZGl0aW9uYWwgdG8gcHJldmVudCBcblxuLy8gY29ycmVjdCBhcnJheSBzdG9yYWdlIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGNvcnJlY3RseSBcbiBcbi8vIHByb3Blcmx5IGluc3RhbGxpbmcgYW5kIHVzaW5nIHNhc3MgYWZ0ZXIgdGhlIGFib3ZlIGlzIGFjY29tcGxpc2VkLiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9