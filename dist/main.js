/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "/* import \"/style.scss\"; */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}\n\n.modal-header-text {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.Add-Project-btn {\n  /* width: 40px;  */\n  font-size: 1.5rem;\n}\n\n.input-field-modal {\n  font-size: 1.5rem;\n}\n\n.close-btn {\n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem;\n  width: 25px;\n  left: -210px;\n  bottom: 160px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n  font-family: \"Patua One\", cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas: \"header header\" \"nav main\" \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text,\n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\nheader {\n  grid-area: header;\n}\n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}\n\n.header-title-text-to-do-list {\n  font-size: 5rem;\n  text-align: center;\n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn {\n  font-size: 1.5rem;\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: \"Patua One\", cursive;\n}\n\n#add-project-btn:hover {\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: \"Patua One\", cursive;\n}\n\n.project-input-field-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.input-field-text {\n  font-size: 1.5rem;\n  width: 240px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 1em;\n}\n\n.add-btn,\n.cancel-btn {\n  font-size: 1.2rem;\n  background-color: red;\n  color: white;\n  font-family: \"Patua One\", cursive;\n}\n\n.add-btn {\n  background-color: green;\n}\n\n.todo-pop-up-container {\n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 50%;\n  padding: 25px;\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}\n\n.submit-task-btn-pop-up-field {\n  display: flex;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px;\n  width: auto;\n}\n\n.pop-up-content {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n.create-to-do-form-btn {\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input {\n  position: absolute;\n  top: -5px;\n  left: -8px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n#project-todos-container {\n  display: flex;\n  flex-direction: row;\n  gap: 0.5em;\n  flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles {\n  display: flex;\n  justify-content: center;\n  margin: 15px;\n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n.project-section-name-btn-div {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.main-content-section-project-name-div {\n  font-size: 5rem;\n  color: white;\n  text-align: center;\n}\n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n#navbar-project-names-go-here {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles {\n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n}\n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */\n.delete-btn-trash-can-svg-icon-styles,\n.add-btn-svg-project-name-styles {\n  height: 1em;\n  width: 1em;\n}\n\n.add-delete-btn-for-todo-container-styles {\n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n.edit-element-todo-item-styles {\n  height: 30px;\n  width: 30px;\n  background-color: white;\n  margin-left: 0.2em;\n}\n\n.check-box-element-todo-styles {\n  width: 30px;\n  height: 30px;\n}\n\n.delete-icon-todo-item-styles {\n  width: 30px;\n  background-color: white;\n}\n\n.task-holder-for-todo-styles {\n  background-color: darkblue;\n  color: white;\n  line-height: 0.5em;\n  text-align: center;\n  width: 275px;\n  border: 5px solid black;\n}\n\n/* styles for add todo pop-up modal */\n.modal-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-todo {\n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n.close-the-todo-modal {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-todo label {\n  text-align: center;\n}\n\n.modal-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* begin edit todo modal styles here */\n.modal-edit-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-edit-todo .flex-for-edit-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-edit-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-edit-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal-edit {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-edit-todo {\n  z-index: 2;\n}\n\n.close-the-todo-modal-edit {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-edit-todo label {\n  text-align: center;\n}\n\n.modal-edit-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* styles for delete btn for todo modal */\n.modal-for-delete-btn-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white;\n}\n\n.flex-for-delete-btn-modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n}\n\n.overlay-for-todo-delete-btn {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-for-delete-btn-todo {\n  z-index: 2;\n}\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */\n/* shrink the size of the main content todo items when page resizes so no content can overflow */\n@media (max-width: 400px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 1.5rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 275px;\n  }\n  .modal > input {\n    width: 50px;\n  }\n}\n@media (max-width: 740px) {\n  body {\n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n    flex-direction: column;\n  }\n  main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media (max-width: 1120px) {\n  #project-todos-container {\n    display: flex;\n    font-size: 0.8rem;\n  }\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n}\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n\n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n/* font-family: 'Patua One', cursive; */\n/* grid-template-columns: 0.2fr 1fr; */\n/* grid-template-areas:\n  \"header header\"\n  \"nav main\"\n  \"nav main\"; */\n/* } */\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n/* header {\n  grid-area: header;\n}  */\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n/* position: absolute;\ntop: 80%; \nleft: 60%; \ntransform: translate(-50%, -50%);\ntext-align: center;\nbackground-color: white;\nfont-size: 1.5rem;\ndisplay: flex;\nflex-direction: column;\nheight: 50%; \nwidth: 50%; */\n/* padding: 25px;  */\n/* font-size: 3rem;\nbackground-color: white;\ncolor: black; */\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n/* .title-input-field-styles { \n  width: 100%;\n} */\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n/* .pop-up-content { \n  position: relative;\n} */\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* import \"/style.scss\"; */ \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap');\n\n\n\n.modal { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}  \n\n.modal-header-text { \n  text-align: center;\n  font-size: 2rem;\n} \n\n.Add-Project-btn { \n  /* width: 40px;  */\n  font-size: 1.5rem; \n  \n} \n\n.input-field-modal { \n  font-size: 1.5rem;\n}\n\n\n\n.close-btn { \n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem; \n  width: 25px; \n  left: -210px; \n  bottom: 160px;  \n}\n\n.overlay { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\n\n\n\n\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    font-family: 'Patua One', cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text, \n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n} \n\nheader {\n  grid-area: header;\n} \n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n} \n\n.header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: 'Patua One', cursive;\n}  \n\n#add-project-btn:hover { \n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n} \n\n.project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n} \n\n.input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n} \n\n.btn-container { \n  display: flex;\n  gap: 1em; \n} \n\n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n} \n\n.add-btn { \n  background-color: green;\n} \n\n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%;\n  padding: 25px; \n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}   \n\n.submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n} \n\n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}  \n\n/* .title-input-field-styles { \n  width: 100%;\n} */ \n\n.create-to-do-form-btn { \n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n} \n\n#project-todos-container { \n display: flex;\n flex-direction: row;\n gap: 0.5em;\n flex-wrap: wrap;\n}\n\n.submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n.project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}  \n\n.main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n} \n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n\n\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n\n\n#navbar-project-names-go-here { \n  font-size: 2rem; \n  color: white; \n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles { \n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n} \n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */ \n\n.delete-btn-trash-can-svg-icon-styles, \n.add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n}\n\n.add-delete-btn-for-todo-container-styles { \n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em; \n} \n\n.edit-element-todo-item-styles { \n  height: 30px; \n  width: 30px; \n  background-color: white;\n  margin-left: 0.20em;\n}\n\n.check-box-element-todo-styles { \n  width: 30px; \n  height: 30px; \n} \n\n.delete-icon-todo-item-styles { \n  width: 30px;\n  background-color: white;\n} \n\n.task-holder-for-todo-styles { \n  background-color: darkblue;\n  color: white; \n  line-height: 0.5em;\n  text-align: center;\n  width: 275px; \n  border: 5px solid black; \n}\n\n/* styles for add todo pop-up modal */ \n\n.modal-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-todo > label { \n  color: white;\n} \n\n\n.overlay-for-todo-modal { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-todo { \n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n\n.close-the-todo-modal { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n\n}\n\n\n\n.modal-todo label { \n  text-align: center;\n}\n\n.modal-todo h1 { \n  font-size: 2.5rem; \n} \n\n\n/* begin edit todo modal styles here */ \n\n\n\n.modal-edit-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n} \n\n\n.modal-edit-todo .flex-for-edit-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n} \n\n.modal-edit-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-edit-todo > label { \n  color: white;\n} \n\n.overlay-for-todo-modal-edit { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n\n.modal-edit-todo { \n  z-index: 2;\n} \n\n.close-the-todo-modal-edit { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n} \n\n.modal-edit-todo label { \n  text-align: center;\n} \n\n.modal-edit-todo h1 { \n  font-size: 2.5rem;\n}\n\n\n\n\n\n/* styles for delete btn for todo modal */ \n\n.modal-for-delete-btn-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white; \n} \n\n.flex-for-delete-btn-modal { \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em; \n} \n\n\n.overlay-for-todo-delete-btn { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-for-delete-btn-todo { \n  z-index: 2;\n}\n\n\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */ \n\n\n/* shrink the size of the main content todo items when page resizes so no content can overflow */ \n\n@media (max-width: 400px) { \n\n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 1.5rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 275px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n\n} \n\n\n@media (max-width: 740px) { \n  body { \n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n    flex-direction: column;\n  } \n\n  main { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n  }\n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  }\n} \n\n\n@media (max-width: 1120px) { \n   #project-todos-container { \n    display: flex;\n    font-size: 0.8rem;\n  } \n\n  /* .task-holder-for-todo-styles { \n    line-height: 0; \n  } */\n\n}\n\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n \n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n\n\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    /* font-family: 'Patua One', cursive; */\n  /* grid-template-columns: 0.2fr 1fr; */ \n  /* grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\"; */\n/* } */\n\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n\n/* header {\n  grid-area: header;\n}  */\n\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  /* position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%; */\n  /* padding: 25px;  */\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n  \n\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _cross_mark_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross-mark-svgrepo-com.png */ "./src/cross-mark-svgrepo-com.png");
/* harmony import */ var _check_mark_svgrepo_com_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-mark-svgrepo-com.png */ "./src/check-mark-svgrepo-com.png");
// add the event listener module

// import "src/eventListenerModule.js"; 





 

 

  

  

let getStorage = localStorage.getItem("Project-Names"); 

let parseData = JSON.parse(getStorage); 

function projectNameLoop() {   
for (let variable in parseData) { 

     let projectIndex = variable; 

     let valueInProject = parseData[projectIndex]; 

     _domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(valueInProject); 

}  

} 

projectNameLoop();
  
(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.printValuesToDOM)(_domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray);  



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIsTUFBTSxnREFBZ0Qsb0JBQW9CLGtCQUFrQix1QkFBdUIsS0FBSyxTQUFTLHVGQUF1RixLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sU0FBUyxLQUFLLFFBQVEsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLFFBQVEsS0FBSyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFdBQVcsTUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE9BQU8sS0FBSyxNQUFNLHlCQUF5QixLQUFLLDBCQUEwQixLQUFLLE9BQU8sTUFBTSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFFBQVEsS0FBSyxTQUFTLEtBQUssU0FBUyxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxPQUFPLE1BQU0s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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCLDhCQUE4QjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThMQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFVBQVU7Ozs7QUFJVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLElBQUk7OztBQUdKOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUIsMkJBQTJCLEdBQUc7QUFDOUI7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7Ozs7QUFNQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0NBQXNDO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsSUFBSTs7OztBQUlKOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2Qjs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JuRUE7O0FBRUE7O0FBRXNCOztBQUVGOztBQUVEOztBQUVpRjs7QUFFcEcsQ0FBc0U7O0FBRXRFLENBQXNFOztBQUV0RTs7QUFFQTs7QUFFZTtBQUNmOztBQUVBOztBQUVBOztBQUVBLEtBQUssd0RBQWlCOztBQUV0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQWdCLENBQUMsbURBQVk7Ozs7QUFJN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoaUNvQjs7QUFFcEIsWUFBWSxlQUFlOztBQUUzQixDQUFxRzs7O0FBR3RGOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbk5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9jb25kaXRpb25hbExvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rUmFzaGkrSGVicmV3OndnaHRAMjAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PVBhdHVhK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgKi9cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDAuNHJlbTsgKi9cXG4gIHdpZHRoOiA0NTBweDtcXG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuLm1vZGFsLWhlYWRlci10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLkFkZC1Qcm9qZWN0LWJ0biB7XFxuICAvKiB3aWR0aDogNDBweDsgICovXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmlucHV0LWZpZWxkLW1vZGFsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHJpZ2h0OiA1NXB4OyAqL1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBsZWZ0OiAtMjEwcHg7XFxuICBib3R0b206IDE2MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcIm5hdiBtYWluXFxcIiBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2YmFyLWhvbWUtY29udGVudC10ZXh0LFxcbiNuYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyNywgMjI3KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmlucHV0LWZpZWxkLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmFkZC1idG4sXFxuLmNhbmNlbC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlO1xcbiAgbGVmdDogNjAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgLyogZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucG9wLXVwLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuLmNyZWF0ZS10by1kby1mb3JtLWJ0biB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idG4tdG8tZG8taW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogLThweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAwLjVlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiAucHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb24geyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LXNpemU6IDNyZW07IFxcbn0gICovXFxuLyogLnByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW4geyBcXG4gIGZvbnQtc2l6ZTogNXJlbTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbn0gICovXFxuI25hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi9cXG4uZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzLFxcbi5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuXFxuLmFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5lZGl0LWVsZW1lbnQtdG9kby1pdGVtLXN0eWxlcyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xcbn1cXG5cXG4uY2hlY2stYm94LWVsZW1lbnQtdG9kby1zdHlsZXMge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZWxldGUtaWNvbi10b2RvLWl0ZW0tc3R5bGVzIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsaW5lLWhlaWdodDogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjc1cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogc3R5bGVzIGZvciBhZGQgdG9kbyBwb3AtdXAgbW9kYWwgKi9cXG4ubW9kYWwtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gLmZsZXgtZm9yLXRvZG8tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBsZWZ0OiAtMjk1cHg7XFxuICBib3R0b206IDU1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqL1xcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMzVweDtcXG4gIGxlZnQ6IC0yOTVweDtcXG4gIGJvdHRvbTogNTVweDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqL1xcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqL1xcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9XFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgYm90dG9tOiA1MCU7XFxuICAgIHdpZHRoOiAyZW07XFxuICB9XFxuICAubW9kYWwtaGVhZGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gIH1cXG4gIC5tb2RhbCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgfVxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcXG4gICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcbiAgLyogLnRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlcyB7IFxcbiAgICBsaW5lLWhlaWdodDogMDsgXFxuICB9ICovXFxufVxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbWFpbiB7IFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIH1cXG59ICovXFxuLyogXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogNTBweDsgXFxuICB9XFxufSAqL1xcbi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7ICovXFxuLyogYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuLyogZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCI7ICovXFxuLyogfSAqL1xcbi8qIG5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn0gKi9cXG4vKiAubmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4ubmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59ICAqL1xcbi8qIGhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59ICAqL1xcbi8qIG1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTtcXG59ICovXFxuLyogLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gICovXFxuLyogLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG4vKiAjYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICAqL1xcbi8qICNhZGQtcHJvamVjdC1idG46aG92ZXIgeyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuLyogLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSAgKi9cXG4vKiAuaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gICovXFxuLyogLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSAgKi9cXG4vKiBcXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG4vKiAuYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSAgKi9cXG4vKiBcXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4vKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiA4MCU7IFxcbmxlZnQ6IDYwJTsgXFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmZvbnQtc2l6ZTogMS41cmVtO1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5oZWlnaHQ6IDUwJTsgXFxud2lkdGg6IDUwJTsgKi9cXG4vKiBwYWRkaW5nOiAyNXB4OyAgKi9cXG4vKiBmb250LXNpemU6IDNyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY29sb3I6IGJsYWNrOyAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gIHdpZHRoOiBhdXRvO1xcbn0gICovXFxuLyogXFxuLnBvcC11cC1jb250ZW50IHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgO1xcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICAqL1xcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG4vKiAuY2xvc2UtYnRuLXRvLWRvLWlucHV0IHsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7IFxcbiAgbGVmdDogLThweDsgXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4OyBcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59ICAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4OyBcXG59ICovXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi8qIC5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgICovXFxuLyogLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYgeyBcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBQTtBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFORjs7QUFjQTtFQUNFLGFBQUE7RUFDQTttQkFBQTtFQUVFLGlDQUFBO0VBQ0YsZ0NBQUE7RUFDQSwwREFDRTtBQVpKOztBQWlCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBZEY7O0FBaUJBOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQWRGOztBQWlCQTtFQUNFLGlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG9DQUFBO0FBZEY7O0FBaUJBO0VBQ0Us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OztLQUFBO0FBNURGO0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQW1EQTs7NkxBQUE7QUFLQTs7O21CQUFBO0FBSUksdUNBQUE7QUFDRixzQ0FBQTtBQUNBOzs7ZUFBQTtBQUlGLE1BQUE7QUFFQTs7Ozs7OztHQUFBO0FBU0E7Ozs7OztJQUFBO0FBUUE7O0lBQUE7QUFJQTs7OztHQUFBO0FBTUE7Ozs7O0lBQUE7QUFPQTs7Ozs7R0FBQTtBQU9BOzs7Ozs7S0FBQTtBQVFBOzs7Ozs7SUFBQTtBQVFBOzs7Ozs7SUFBQTtBQVFBOzs7SUFBQTtBQUtBOzs7SUFBQTtBQUlBOzs7Ozs7O0lBQUE7QUFTQTs7SUFBQTtBQUdBOzs7NEJBQUE7QUFJRTs7Ozs7Ozs7OzthQUFBO0FBV0Esb0JBQUE7QUFDQTs7ZUFBQTtBQUtGOzs7Ozs7Ozs7SUFBQTtBQVVBOzs7Ozs7Ozs7O0tBQUE7QUFZQTs7R0FBQTtBQUlBOzs7Ozs7Ozs7O0lBQUE7QUFZQTs7OztHQUFBO0FBTUE7O0dBQUE7QUFJQTs7OztLQUFBO0FBTUE7Ozs7SUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgKi8gXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcblxcbi5tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDAuNHJlbTsgKi9cXG4gIHdpZHRoOiA0NTBweDtcXG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMztcXG59ICBcXG5cXG4ubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59IFxcblxcbi5BZGQtUHJvamVjdC1idG4geyBcXG4gIC8qIHdpZHRoOiA0MHB4OyAgKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIFxcbn0gXFxuXFxuLmlucHV0LWZpZWxkLW1vZGFsIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuXFxuXFxuLmNsb3NlLWJ0biB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogcmlnaHQ6IDU1cHg7ICovXFxuICBmb250LXNpemU6IDFyZW07IFxcbiAgd2lkdGg6IDI1cHg7IFxcbiAgbGVmdDogLTIxMHB4OyBcXG4gIGJvdHRvbTogMTYwcHg7ICBcXG59XFxuXFxuLm92ZXJsYXkgeyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdmJhci1ob21lLWNvbnRlbnQtdGV4dCwgXFxuI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSBcXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufSBcXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMjcsIDIyNyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gXFxuXFxuLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgXFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59IFxcblxcbi5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn0gXFxuXFxuLmlucHV0LWZpZWxkLXRleHQgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4OyBcXG59IFxcblxcbi5idG4tY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07IFxcbn0gXFxuXFxuLmFkZC1idG4sIFxcbi5jYW5jZWwtYnRuIHsgXFxuICBmb250LXNpemU6IDEuMnJlbTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gXFxuXFxuLmFkZC1idG4geyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gXFxuXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lcnsgXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgwJTsgXFxuICBsZWZ0OiA2MCU7IFxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTsgXFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjVweDsgXFxuICAvKiBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjazsgKi9cXG59ICAgXFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IGF1dG87XFxufSBcXG5cXG4ucG9wLXVwLWNvbnRlbnQgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7XFxuICBoZWlnaHQ6IDEwMCU7IFxcbiAgd2lkdGg6IDEwMCU7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAgXFxuXFxuLyogLnRpdGxlLWlucHV0LWZpZWxkLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDEwMCU7XFxufSAqLyBcXG5cXG4uY3JlYXRlLXRvLWRvLWZvcm0tYnRuIHsgXFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idG4tdG8tZG8taW5wdXQgeyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDsgXFxuICBsZWZ0OiAtOHB4OyBcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7IFxcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn0gXFxuXFxuI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuIGRpc3BsYXk6IGZsZXg7XFxuIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuIGdhcDogMC41ZW07XFxuIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7IFxcbn1cXG5cXG4vKiAucG9wLXVwLWNvbnRlbnQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuXFxuLnByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXYge1xcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICBcXG5cXG4ubWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdiB7IFxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcbi8qIC5wcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvbiB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtc2l6ZTogM3JlbTsgXFxufSAgKi9cXG5cXG5cXG4vKiAucHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpbiB7IFxcbiAgZm9udC1zaXplOiA1cmVtOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxufSAgKi9cXG5cXG5cXG4jbmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZSB7IFxcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXMgeyBcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59IFxcblxcbi8qIC5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDFlbTsgXFxuICB3aWR0aDogMWVtOyBcXG59ICovIFxcblxcbi5kZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXMsIFxcbi5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDFlbTsgXFxuICB3aWR0aDogMWVtOyBcXG59XFxuXFxuLmFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtOyBcXG59IFxcblxcbi5lZGl0LWVsZW1lbnQtdG9kby1pdGVtLXN0eWxlcyB7IFxcbiAgaGVpZ2h0OiAzMHB4OyBcXG4gIHdpZHRoOiAzMHB4OyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMjBlbTtcXG59XFxuXFxuLmNoZWNrLWJveC1lbGVtZW50LXRvZG8tc3R5bGVzIHsgXFxuICB3aWR0aDogMzBweDsgXFxuICBoZWlnaHQ6IDMwcHg7IFxcbn0gXFxuXFxuLmRlbGV0ZS1pY29uLXRvZG8taXRlbS1zdHlsZXMgeyBcXG4gIHdpZHRoOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufSBcXG5cXG4udGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBsaW5lLWhlaWdodDogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjc1cHg7IFxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7IFxcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIGFkZCB0b2RvIHBvcC11cCBtb2RhbCAqLyBcXG5cXG4ubW9kYWwtdG9kbyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwtdG9kbyAuZmxleC1mb3ItdG9kby1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQgeyBcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufSBcXG5cXG4ubW9kYWwtdG9kbyA+IGxhYmVsIHsgXFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1tb2RhbCB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufSBcXG5cXG4ubW9kYWwtdG9kbyB7IFxcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLyogLm1vZGFsLXRvZG8gaDEgeyBcXG4gZGlzcGxheTogZmxleDtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufSAqL1xcblxcbi5jbG9zZS10aGUtdG9kby1tb2RhbCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIHdpZHRoOiAzNXB4OyBcXG4gIGxlZnQ6IC0yOTVweDsgXFxuICBib3R0b206IDU1cHg7ICBcXG5cXG59XFxuXFxuXFxuXFxuLm1vZGFsLXRvZG8gbGFiZWwgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEgeyBcXG4gIGZvbnQtc2l6ZTogMi41cmVtOyBcXG59IFxcblxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqLyBcXG5cXG5cXG5cXG4ubW9kYWwtZWRpdC10b2RvIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufSBcXG5cXG5cXG4ubW9kYWwtZWRpdC10b2RvIC5mbGV4LWZvci1lZGl0LXRvZG8tbW9kYWwgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHsgXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyA+IGxhYmVsIHsgXFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1tb2RhbC1lZGl0IHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8geyBcXG4gIHotaW5kZXg6IDI7XFxufSBcXG5cXG4uY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIHdpZHRoOiAzNXB4OyBcXG4gIGxlZnQ6IC0yOTVweDsgXFxuICBib3R0b206IDU1cHg7ICBcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gbGFiZWwgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEgeyBcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBzdHlsZXMgZm9yIGRlbGV0ZSBidG4gZm9yIHRvZG8gbW9kYWwgKi8gXFxuXFxuLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC8qIGZvbnQtc2l6ZTogMXJlbTsgICovXFxuICBjb2xvcjogd2hpdGU7IFxcbn0gXFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVlbTsgXFxufSBcXG5cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHsgXFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqLyBcXG5cXG5cXG4vKiBzaHJpbmsgdGhlIHNpemUgb2YgdGhlIG1haW4gY29udGVudCB0b2RvIGl0ZW1zIHdoZW4gcGFnZSByZXNpemVzIHNvIG5vIGNvbnRlbnQgY2FuIG92ZXJmbG93ICovIFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcXG5cXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuICB9ICBcXG5cXG4gIG1haW4geyBcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG4gIFxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMjc1cHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gIH1cXG5cXG59IFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgfVxcblxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gIH1cXG59IFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHsgXFxuICAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfSBcXG5cXG4gIC8qIC50YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXMgeyBcXG4gICAgbGluZS1oZWlnaHQ6IDA7IFxcbiAgfSAqL1xcblxcbn1cXG5cXG4vKiBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBuYXYgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICB9XFxufSAqL1xcbiBcXG4vKiBcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHsgXFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7IFxcbiAgICBib3R0b206IDUwJTsgXFxuICAgIHdpZHRoOiAyZW07XFxuICB9IFxcbiAgXFxuICAubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcblxcbiAgfSBcXG5cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxNTBweDsgXFxuICB9IFxcblxcbiAgLm1vZGFsID4gaW5wdXQgeyBcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgfVxcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcblxcblxcbi8qIGJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIHdpZHRoOiAxMDAlOyBcXG4gICAgaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICAvKiBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7ICovXFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjsgKi8gXFxuICAvKiBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiOyAqL1xcbi8qIH0gKi9cXG5cXG4vKiBuYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOztcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59ICovXFxuXFxuLyogLm5hdmJhci1ob21lLWNvbnRlbnQtdGV4dCwgXFxuLm5hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAgKi9cXG5cXG4vKiBoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufSAgKi9cXG5cXG4vKiBtYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7XFxufSAqL1xcblxcbi8qIC5oZWFkZXItY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59ICAqL1xcblxcbi8qIC5oZWFkZXItdGl0bGUtdGV4dC10by1kby1saXN0IHsgXFxuIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59ICovXFxuXFxuLyogI2FkZC1wcm9qZWN0LWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAgKi9cXG5cXG4vKiAjYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcblxcbi8qIC5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn0gICovXFxuXFxuLyogLmlucHV0LWZpZWxkLXRleHQgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4OyBcXG59ICAqL1xcblxcbi8qIC5idG4tY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07IFxcbn0gICovXFxuLyogXFxuLmFkZC1idG4sIFxcbi5jYW5jZWwtYnRuIHsgXFxuICBmb250LXNpemU6IDEuMnJlbTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuXFxuLyogLmFkZC1idG4geyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gICovXFxuLyogXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lcnsgXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgwJTsgXFxuICBsZWZ0OiA2MCU7IFxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTsgXFxuICB3aWR0aDogNTAlOyAqL1xcbiAgLyogcGFkZGluZzogMjVweDsgICovXFxuICAvKiBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjazsgKi9cXG4gIFxcblxcbi8qIC5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gIHdpZHRoOiBhdXRvO1xcbn0gICovXFxuLyogXFxuLnBvcC11cC1jb250ZW50IHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgO1xcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICAqL1xcblxcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4vKiAuY2xvc2UtYnRuLXRvLWRvLWlucHV0IHsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7IFxcbiAgbGVmdDogLThweDsgXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4OyBcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59ICAqL1xcblxcbi8qIC5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4OyBcXG59ICovXFxuXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcblxcbi8qIC5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgICovXFxuXFxuLyogLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYgeyBcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgKi9cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCBwbHVzU2lnbiBmcm9tIFwiLi9wbHVzLXNpZ24tZm9yLXRvZG8tbW9kYWwuc3ZnXCI7IFxuXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuL3RyYXNoLWNhbi1pY29uLXRvLWRlbGV0ZS1wcm9qZWN0LnN2Z1wiO1xuXG4vLyBpbXBvcnQgY3Jvc3NNYXJrRm9yRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9jcm9zcy1tYXJrLXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuLy8gaW1wb3J0IGNoZWNrTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY2hlY2stbWFyay1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbmltcG9ydCBlZGl0QnRuRm9yVG9kbyBmcm9tIFwiLi9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiO1xuXG4vLyBpbXBvcnQgdXBkYXRlQXJyYXlTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxubGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG5sZXQgbW9kYWxDb250YWluZXJGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRvZG9cIilbMF07IFxuXG5sZXQgb3ZlcmxheUZvclRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsXCIpWzBdOyBcblxubGV0IG1vZGFsRm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvXCIpWzBdO1xuXG5sZXQgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuXCIpWzBdOyBcblxubGV0IG1vZGFsRm9yRWRpdFRvZG9UYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1lZGl0LXRvZG9cIilbMF07IFxuXG5sZXQgb3ZlcmxheUZvckVkaXRUb2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbC1lZGl0XCIpWzBdOyBcblxubGV0IGVkaXRUb2RvVGFza3NGb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWVkaXRpbmctdG9kby10YXNrc1wiKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0IFxuXG5mdW5jdGlvbiBwcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpIHsgXG4gIFxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5wcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpO1xuXG5cbmZ1bmN0aW9uIHByZXZlbnRUb2RvTW9kYWxQb3BVcCgpIHsgXG5cbm1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG5vdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cblxuXG5wcmV2ZW50VG9kb01vZGFsUG9wVXAoKTsgXG5cblxuZnVuY3Rpb24gcHJldmVudEVkaXRUb2RvTW9kYWxQb3BVcCgpIHsgXG4gIFxuICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxucHJldmVudEVkaXRUb2RvTW9kYWxQb3BVcCgpOyBcblxuXG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdOyBcblxuZnVuY3Rpb24gcHJldmVudEZvcm1Qb3BVcCgpIHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5wcmV2ZW50Rm9ybVBvcFVwKCk7XG5cblxuIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyBtb2RhbElucHV0RmllbGQucmVzZXQoKTtcbiAgLy8gd2hlbiB5b3UgY2xvc2UgaXQsIHNob3VsZCBjbGVhciB0aGUgaW5wdXQgZmllbGQsXG4gIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTtcbn0pIFxuXG4gYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KSAgXG5cblxuXG5cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4gIHJldHVybiB7IFxuICAgIHByb2plY3Q6IG5hbWUsXG4gICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgdG9kb0l0ZW1zOiBbXSxcbiAgfVxufSBcblxuYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4gIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG59KSBcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4gIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuICAgIC8vIHByb2plY3QgbmFtZVxuICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4gICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIik7IFxuXG4gICAgICBsZXQgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbGV0IGFkZEJ0blRvQ3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KVxuXG4gICAgICBsZXQgZGVsZXRlQnRuVG9EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICB9KVxuXG5cblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBwbHVzU2lnbjsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSB0cmFzaEljb247XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICBcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG4gICAgfSlcbiAgfVxufSBcblxuIFxuXG5mb3JtVGFnRm9yTW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KSAgXG5cbmVkaXRUb2RvVGFza3NGb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cbmxldCBjbG9zZUJ0bkVkaXRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWVkaXQtdG9kby1tb2RhbC1idG5cIik7IFxuXG5jbG9zZUJ0bkVkaXRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSlcblxuXG5sZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG5jYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59KSBcblxuXG5sZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbn0pIFxuXG5cbmxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG5jaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4gIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuICBsZXQgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbiAgbGV0IHRhc2tIb2xkZXJTdHlsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpWzBdO1xuXG4gIGxldCBwcm9qZWN0SUQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gIFxuICBsZXQgdmFsdWUgPSBjdXJyZW50UHJvamVjdDsgXG4gIFxuICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBcbiAgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIC8vIGl0IGlzIGRlbGV0aW5nIGZyb20gc3RvcmFnZSwgaXQgaXMganVzdCBub3QgXG5cbiAgLy8gZGVsZXRpbmcgdGhlIHRvZG8gZnJvbSB0aGUgRE9NLCBcbiAgLy8gcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnJlbW92ZSgpIFxuXG4gIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuICBcblxufSkgIFxuXG5cblxuXG5cbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmxldCBhZGRCdG5Ub0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWxcIik7IFxuXG5cbmFkZEJ0blRvRG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+ICB7IFxuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG5cbiAgbGV0IHRpdGxlSW5wdXRGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWlucHV0LWZvcm1cIik7IFxuXG4gIGxldCB0aXRsZUlucHV0VmFsdWUgPSB0aXRsZUlucHV0Rm9yVG9kby52YWx1ZTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godGl0bGVJbnB1dFZhbHVlKTsgXG5cbiAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG9cIik7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSA9IGRlc2NyaXB0aW9uRm9yVG9kby52YWx1ZTsgXG4gIFxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSk7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IGR1ZURhdGVGb3JUb2RvVmFsdWUgPSBkdWVEYXRlRm9yVG9kby52YWx1ZTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFza1wiKTsgXG5cbiAgbGV0IHByaW9yaXR5Rm9yVG9kb1ZhbHVlID0gcHJpb3JpdHlGb3JUb2RvLnZhbHVlOyAgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2gocHJpb3JpdHlGb3JUb2RvVmFsdWUpO1xuXG4gIC8vIGxldCBjdXJyZW50UHJvamVjdHNUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtczsgXG5cbiAgLy8gbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgXG4gIGxldCB0b2Rvc0ZvclByb2plY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWUsIGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlLCBwcmlvcml0eUZvclRvZG9WYWx1ZSwgZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG4gIFxuICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2Rvc0ZvclByb2plY3QpOyBcbiAgXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcyk7XG5cbmRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbmZvcm1JbnB1dC5yZXNldCgpO1xuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG59KSAgIFxuXG5mdW5jdGlvbiB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7IFxuICBcbiAgcmV0dXJuIHsgXG4gICAgdGl0bGU6IHRpdGxlLCBcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSBcbiAgfSBcbiAgXG59ICAgIFxuXG5cbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGhpbiB0aGUgdG9kbyBmYWN0b3J5IFxuLy8gdGhhdCB0YWtlcyB0aGUgaW5kZXgsIFxuXG5sZXQgZ2V0UHJvamVjdElkIFxuXG5sZXQgY2xpY2tlZFRvZG9FZGl0SXRlbVxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCkgeyBcblxuICBsZXQgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgICBcbiAgICBsZXQgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgIFxuICAgIHRhc2tIb2xkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKTtcbiAgXG4gICAgXG4gICAgXG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG5cbiAgICBnZXRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZFxuXG4gICAgbGV0IHByb2plY3RVbmlxdWVJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGVjay1ib3gtZWxlbWVudC10b2RvLXN0eWxlc1wiKTtcblxuICAgIGxldCBlZGl0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgZWRpdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVkaXQtZWxlbWVudC10b2RvLWl0ZW0tc3R5bGVzXCIpO1xuXG4gICAgZWRpdEVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGk7IFxuXG4gICAgZWRpdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICBjbGlja2VkVG9kb0VkaXRJdGVtID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2VkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXhdOyBcblxuICAgICAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gICAgIFxuICAgICBsZXQgYWRkQnRuV2l0aGluVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsLWVkaXRcIik7IFxuICAgICAgXG4gICAgIGFkZEJ0bldpdGhpblRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbGV0IHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWVkaXQtaW5wdXQtZm9ybVwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kby1lZGl0XCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFzay1lZGl0XCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2stZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGVkaXRUb2RvT2JqZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlRWRpdFRvZG8sIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvLCBkdWVEYXRlSW5wdXRWYWx1ZUVkaXRUb2RvLCBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbyk7IFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZFRvZG9FZGl0SXRlbSk7XG4gICAgICAgIFxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLnRpdGxlID0gdGl0bGVJbnB1dFZhbHVlRWRpdFRvZG87IFxuICAgICAgICBcbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvOyBcbiAgICAgICAgXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG87IFxuXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbzsgXG5cbiAgICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7XG5cbiAgICAgIH0pXG4gICAgICBcbiAgICBcbiAgICB9KSBcblxuICAgIGVkaXRFbGVtZW50LnNyYyA9IGVkaXRCdG5Gb3JUb2RvOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvbi10b2RvLWl0ZW0tc3R5bGVzXCIpO1xuXG4gICAgZGVsZXRlSWNvbi5pZCA9IFwiZGVsZXRlLWJ0bi1pbnNpZGUtdG9kb1wiOyBcblxuICBkZWxldGVJY29uLmRhdGFzZXQuaW5kZXggPSBpOyBcblxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMuc3BsaWNlKGRlbGV0ZUljb24uZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICBcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbiAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgICB9KSBcblxuICAgIGRlbGV0ZUljb24uc3JjID0gdHJhc2hJY29uOyBcblxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjsgXG5cbiAgICB0b2RvVGl0bGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC50aXRsZSk7XG5cbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcblxuICAgIHRvZG9EZXNjcmlwdGlvbi5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiXG5cbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBcbiAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5wcmlvcml0eSk7XG4gICAgXG4gICAgdG9kb0R1ZURhdGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kdWVEYXRlKTtcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9UaXRsZSk7ICBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChjaGVja2JveEVsZW1lbnQpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGRlbGV0ZUljb24pOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGVkaXRFbGVtZW50KTtcblxuICAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQodGFza0hvbGRlcik7XG4gICAgXG4gIH0gIFxuXG4gICAvLyBsZXQgY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyBsZXQgZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1idG4taW5zaWRlLXRvZG9cIik7IFxuXG4gIC8vIC8vIGNvbnNvbGUubG9nKGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtKTsgXG5cbiAgLy8gbGV0IHRhc2tIb2xkZXJDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIilbMF07IFxuXG4gIC8vIC8vIGNvbnNvbGUubG9nKHRhc2tIb2xkZXJDbGFzcyk7XG5cbiAgLy8gZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIC8vICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gdG9kbyBoYXMgYmVlbiBwcmVzc2VkIVwiKTtcbiAgLy8gICAgICBsZXQgY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0SWQpOyBcblxuICAvLyAgICAgLy8gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QuaWQubGVuZ3RoOyBpKyspIHsgXG4gIC8vICAgICAvLyAgIGxldCBpZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyAgICAgLy8gICBpZiAoY3VycmVudFByb2plY3RJZCA9PT0gaWQpIHsgXG4gIC8vICAgICAvLyAgICAgLy8gaWYgaWQncyBtYXRjaCByZW1vdmUgdGhlIHNlbGVjdGVkIHByb2plY3QsIFxuICAvLyAgICAgLy8gICB9IGVsc2UgeyBcbiAgLy8gICAgIC8vICAgICByZXR1cm47XG4gIC8vICAgICAvLyAgIH1cblxuICAvLyAgICAgLy8gIH0gXG5cbiAgLy8gICAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIoZnVuY3Rpb24ob25lUHJvamVjdElkKSB7IFxuICAgICAgICBcblxuICAgICAgICBcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgXG4gfSBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3RvcmFnZVwiO1xuXG4vLyBpbXBvcnQgYXJyYXlTdG9yYWdlU2V0SXRlbSBmcm9tIFwiLi9zdG9yYWdlLmpzXCIgXG5cbi8vIGltcG9ydCBnZXRJdGVtU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7IFxuXG4vLyBpbXBvcnQgIHByb2plY3ROYW1lTG9vcCBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG4vLyBpbXBvcnQgcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljIGZyb20gXCIuL2NvbmRpdGlvbmFsTG9naWMuanNcIjtcblxuLy8gaW1wb3J0IGFycmF5U3RvcmFnZVRvZG9JdGVtcyBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuXG4vLyBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbi8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG4vLyBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbi8vIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxuLy8gbGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxuLy8gbGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbi8vIGxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG4vLyBsZXQgbW9kYWxDb250YWluZXJGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRvZG9cIilbMF07IFxuXG4vLyBsZXQgb3ZlcmxheUZvclRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsXCIpWzBdOyBcblxuLy8gbGV0IG1vZGFsRm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvXCIpWzBdO1xuXG4vLyBsZXQgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuXCIpWzBdOyBcblxuLy8gbGV0IGN1cnJlbnRQcm9qZWN0IFxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpIHsgXG4gIFxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9IFxuXG4vLyBwcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpO1xuXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnRUb2RvTW9kYWxQb3BVcCgpIHsgXG5cbi8vIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0gXG5cbi8vIHByZXZlbnRUb2RvTW9kYWxQb3BVcCgpO1xuXG4vLyBleHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdOyBcblxuLy8gZnVuY3Rpb24gcHJldmVudEZvcm1Qb3BVcCgpIHsgXG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gfVxuXG4vLyBwcmV2ZW50Rm9ybVBvcFVwKCk7XG5cblxuLy8gIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAvLyBtb2RhbElucHV0RmllbGQucmVzZXQoKTtcbi8vICAgLy8gd2hlbiB5b3UgY2xvc2UgaXQsIHNob3VsZCBjbGVhciB0aGUgaW5wdXQgZmllbGQsXG4vLyAgIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTtcbi8vIH0pIFxuXG4vLyAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4vLyB9KSBcblxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZUZhY3RvcnkobmFtZSkgeyBcbi8vICAgcmV0dXJuIHsgXG4vLyAgICAgcHJvamVjdDogbmFtZSxcbi8vICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbi8vICAgICB0b2RvSXRlbXM6IFtdLFxuLy8gICB9XG4vLyB9IFxuXG4vLyBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGxldCBtb2RhbElucHV0RmllbGRWYWx1ZSA9IG1vZGFsSW5wdXRGaWVsZC52YWx1ZTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG4gIFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZU9iamVjdCk7IFxuXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcbiAgXG4vLyAgIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTsgXG5cbi8vIH0pIFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBwcmludFZhbHVlc1RvRE9NKGFycmF5KSB7IFxuXG4vLyAgIGxldCB0aGVQcm9qZWN0c0FycmF5ID0gYXJyYXk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZVwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgICBsZXQgcHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3RJbmRleC5wcm9qZWN0OyBcblxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4vLyAgICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbi8vICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcbiAgICBcbi8vICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuLy8gICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuLy8gICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuLy8gICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuLy8gICAgICAgfSlcblxuXG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gXCIuLi9wbHVzLXNpZ24tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuLy8gICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4vLyAgICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICBcbi8vICAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSBcblxuIFxuXG4vLyBmb3JtVGFnRm9yTW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9KSAgXG5cbi8vIGxldCBjYW5jZWxCdG5BZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdGhlLXRvZG8tbW9kYWxcIilbMF07XG5cbi8vIGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIH0pIFxuXG5cbi8vIGxldCBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tYXJrLXhcIik7IFxuXG4vLyBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxuLy8gfSkgXG5cblxuLy8gbGV0IGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stbWFya1wiKTsgXG5cbi8vIGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgIFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKVswXTsgXG5cbi8vICAgbGV0IGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpWzBdOyBcbiAgXG4vLyAgIGxldCBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpO1xuXG4vLyAgIGxldCBwcm9qZWN0SUQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gIFxuLy8gICBsZXQgdmFsdWUgPSBjdXJyZW50UHJvamVjdDsgXG4gIFxuLy8gICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBcbi8vICAgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbi8vICAgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4vLyAgIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuXG5cbi8vIH0pICBcblxuXG4vLyBsZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5cbi8vIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuLy8gZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuXG4vLyBhZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG4vLyAgIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuLy8gICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4vLyAgIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuLy8gICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuLy8gICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4vLyAgIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4vLyAgIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4vLyAgIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuLy8gICAvLyBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4vLyAgIC8vIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIFxuLy8gICBsZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuICBcbi8vICAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb3NGb3JQcm9qZWN0KTsgXG4gIFxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG4vLyB9KSAgIFxuXG4vLyBmdW5jdGlvbiB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7IFxuLy8gICByZXR1cm4geyBcbi8vICAgICB0aXRsZTogdGl0bGUsIFxuLy8gICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4vLyAgICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbi8vICAgICBkdWVEYXRlOiBkdWVEYXRlIFxuLy8gICB9XG4vLyB9ICAgICBcblxuLy8gLy8gcHJvYmxlbSBpcyBhcHBlbmRpbmcgYW5kIGRpc3BsYXlpbmcgdG9kbyB2YWx1ZXMgXG5cbi8vIC8vIGZvciBlYWNoIHByb2plY3QsIFxuXG4vLyAvLyBpc3N1ZSBpcyBzYXZpbmcgZXZlcnkgc2luZ2xlIGlucHV0IGFzIGEgbmV3IGFycmF5IGVudHJ5LCBcblxuLy8gLy8gXG5cbi8vIGxldCBnZXRQcm9qZWN0SWRcblxuLy8gZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpIHsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuICBcbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZ2FwID0gXCIyZW1cIjtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZmxleFdyYXAgPSBcIndyYXBcIjtcblxuLy8gICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgLy8gbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4vLyAgICAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgXG4gICAgXG4vLyAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG5cbi8vICAgICBnZXRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZFxuICAgIFxuLy8gICAgIGxldCBwcm9qZWN0VW5pcXVlSWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gICAgXG4vLyAgICAgbGV0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG4gICAgXG4vLyAgICAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSBcImNoZWNrYm94XCI7IFxuXG4vLyAgICAgbGV0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zcmMgPSBcIi4uL2VkaXQtc3ZncmVwby1jb20uc3ZnXCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIzMHB4XCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjMwcHhcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMC4yMGVtXCI7XG5cblxuXG4vLyAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiOyBcblxuLy8gICAgIHRvZG9UaXRsZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnRpdGxlKTtcblxuLy8gICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuXG4vLyAgICAgdG9kb0Rlc2NyaXB0aW9uLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZGVzY3JpcHRpb24pO1xuXG4vLyAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCJcblxuLy8gICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIFxuLy8gICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnByaW9yaXR5KTtcbiAgICBcbi8vICAgICB0b2RvRHVlRGF0ZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmR1ZURhdGUpO1xuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1RpdGxlKTsgIFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0Rlc2NyaXB0aW9uKTtcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9Qcmlvcml0eSk7IFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0R1ZURhdGUpOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2JsdWVcIjtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjFlbVwiOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLndpZHRoID0gXCIyNzVweFwiOyBcblxuLy8gICAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQodGFza0hvbGRlcik7XG4gICAgXG4vLyAgICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuLy8gICB9IFxuICBcbi8vICB9IFxuXG5cbi8vIHByYWN0aWNlIHdpdGggb2JqZWN0cyBcblxuLy8gbGV0IGFycmF5MSA9IFtdO1xuXG4vLyBjb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRhdGUpIHtcbi8vICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICB0aGlzLmRhdGUgPSBkYXRlO1xuLy8gfTtcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbi8vICAgbGV0IHh5eiA9IG5ldyBUb2RvKGAke2l9IHRpdGxlYCwgaSlcbi8vICAgYXJyYXkxLnB1c2goeHl6KTtcbi8vIH1cblxuLy8gY29uc29sZS5sb2coYXJyYXkxKSBcblxuXG4vLyBwcmFjdGljZSBtYWtpbmcgb2JqZWN0cyBcblxuLy8gcHVzaGluZyBpbnRvIGFuIGFycmF5IFxuXG4vLyBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgYXJyYXksIFxuXG4vLyBnZXQgZWFjaCBmaWVsZCBieSBpdCdzIGtleSwgIFxuXG4vLyBsZXQgbmV3QXJyID0gW107IFxuXG4vLyBmdW5jdGlvbiBjcmVhdGluZ09iamVjdHModGl0bGUsZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7IFxuLy8gICBjb25zdCBuZXdPYmplY3QgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkgfSBcbi8vICAgbmV3QXJyLnB1c2gobmV3T2JqZWN0KTsgXG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKykgeyBcbiAgIFxuLy8gICAgIGxldCB0aXRsZSA9IG5ld0FyclswXS50aXRsZTtcbi8vICAgICBsZXQgZGVzY3JpcHRpb24gPSBuZXdBcnJbMF0uZGVzY3JpcHRpb247IFxuLy8gICAgIGxldCBkdWVEYXRlID0gbmV3QXJyWzBdLmRhdGU7XG4vLyAgICAgbGV0IHByaW9yaXR5TGV2ZWwgPSBuZXdBcnJbMF0ucHJpb3JpdHk7XG4gICAgXG4gICAgXG4vLyAgIH1cbi8vIH0gXG5cbi8vIGNyZWF0aW5nT2JqZWN0cyhcIkFsZWNcIiwgXCJ3b3JraW5nIG9uIHRvZG8tbGlzdFwiLCBcIjQvMjAvMjNcIiwgXCJIaWdoXCIpOyAgXG5cbi8vIGNyZWF0aW5nT2JqZWN0cyhcIkhlbGxvXCIsIFwiQ2hlY2sgMS4uMlwiLCBcIjYvMjAvMjNcIiwgXCJIaWdoXCIpOyBcblxuLy8gZ2V0dGluZyBhbGwgdGhlIGtleXMgZnJvbSB0aGUgZmlyc3Qgb2JqIGluIHRoZSBhcnJheVxuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0udGl0bGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0uZGF0ZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5wcmlvcml0eSk7IFxuXG4vLyBnZXR0aW5nIGFsbCB0aGUga2V5cyBmcm9tIHRoZSBzZWNvbmQgb2JqIGluIHRoZSBhcnJheSBcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLnRpdGxlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLmRlc2NyaXB0aW9uKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLmRhdGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0ucHJpb3JpdHkpOyBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIC8vIGl0IHdhcyB0aGUgbG9vcCwgW2ldIHdhcyB0YWtpbmcgaW4gYSBzaW5nbGUgdmFyaWFibGUgXG5cbiAvLyBub3cgd2UgaGF2ZSB0aGUgdG9kbyBpdGVtIHdpdGhpbiBhIHNpbmdsZSBkaXYgYW5kIHN0eWxlIFxuXG4vLyBlYWNoIHRvZG8gaXRlbSBpcyBpbnNpZGUgaXQncyBvd24gZGl2LCBcblxuLy8gZWFjaCB0b2RvIGl0ZW0gbmVlZHMgdG8gYmUgaW5zaWRlIG9uZSBkaXYsIFxuXG4vLyBOT1QgRUFDSCBUT0RPIElURU0gSU5TSURFIEEgRElWLCBcblxuLy8gZ2V0IGFsbCB0aGUgdG9kbydzLiBcblxuXG4vLyBJIGRvbnQgdW5kZXJzdGFuZCB3aHkgdGhpcyBpcyBzbyBmdWNraW5nIGNvbmZ1c2luZywgXG5cbi8vIGkganVzdCB3YW50IGVhY2ggdG9kbyB0byBiZSBpdCdzIG93biBkaXYsIFxuXG4vLyB0aGVuIGFwcGVuZCB0byB0aGUgRlVDS0lORyBDT05UQUlORVIhISEgXG5cbi8vIHVzZSBhIGxvb3AsIGdldCBwcm9qZWN0LCBhcHBlbmQgdG8gZGl2LCB0aGVuIGFwcGVuZCB0byBzZWN0aW9uLCBcblxuLy8gd2h5IGFyZSB0aGV5IHN0aWxsIGJ1bmNoZWQgdG9nZXRoZXI/Pz8gXG5cblxuLy8gaG93IGNhbiBJIG1ha2UgZWFjaCBzZXQgb2YgdG9kb3MgYSBzZXBlcmF0ZSBkaXY/PyBcblxuLy8gYXBwZW5kIHRoZSB0b2RvJ3MgdG8gYSBkaXYgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyLCBcblxuXG4vLyBzdHlsZSBlYWNoIGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyLCBcblxuLy8gTG9vayBvdmVyIGNvZGUsIFxuXG4vLyBJIHdhbnQgdG8gZGlzcGxheSB0aGUgdG9kbydzIGZvciBlYWNoIHByb2plY3QsIFxuXG4vLyBob3cgYW0gSSBhZGRpbmcgdGhlIHRvZG8ncywgXG5cbi8vIHN0cmlja2x5IGxvb2sgYXQgdGhlIGZ1bmN0aW9uLCBcblxuXG5cblxuLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFRvRG9WYWx1ZXMocHJvamVjdCkgeyBcbiAgXG4vLyAgIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIGxldCBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDsgXG5cbi8vICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAvLyAgIGxldCB4ID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdFtpXTsgXG5cbi8vICAgLy8gICBjb25zb2xlLmxvZyh4KTsgXG4vLyAgIC8vIH1cblxuLy8gICBsZXQgZGlzcGxheVRpdGxlID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC50aXRsZTsgXG5cbi8vICAgbGV0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZGVzY3JpcHRpb247IFxuXG4vLyAgIGxldCBkaXNwbGF5UHJpb3JpdHkgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnByaW9yaXR5OyBcblxuLy8gICBsZXQgZGlzcGxheUR1ZURhdGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LmR1ZURhdGU7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5VGl0bGUpO1xuICBcbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEZXNjcmlwdGlvbik7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RHVlRGF0ZSk7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlQcmlvcml0eSk7IFxuXG5cbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIG9rIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlcywgSSBhbSBhYmxlIHRvIHByaW50IHRoZSB2YWx1ZXMgdG8gdGhlIERPTSwgXG5cbi8vIGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgdGhlc2UgdG9kbyBpdGVtcyBvbnRvIGVhY2ggcHJvamVjdCBcblxuLy8gYW5kIHNhdmUgdGhlbSBlYWNoIHRpbWUgc28gdGhleSByZWxvYWQgb24gcmVmcmVzaD8gXG5cbi8vIEkgY2FuIGdyYWIgdGhlIGN1cnJlbnQgcHJvamVjdCwgdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBiZXR3ZWVuIHByb2plY3RzIFxuXG4vLyB0aGVuIGhvdyBjYW4gSSBhZGQgdGhlc2UgbmV3bHkgYWRkZWQgdG9kbydzIGJhY2sgaW50byB0aGUgYXJyYXksIFxuXG4vLyBwdXNoIHRoZW0gYmFjayBpbnRvIHRoZSBhcnJheT8gIFxuXG4vLyBJIGFibGUgdG8gYWRkIHRvZG8gaXRlbXMgaW50byBhIHByb2plY3QsIGJ1dCBob3cgY2FuIEkgcGVybWFuZW50bHkgYWRkICB0aGVtPyBcblxuLy8gZG8gSSBuZWVkIHRvIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyBcblxuLy8gXG5cblxuXG5cbi8vIGdldCBhbGwgdGhlIHZhbHVlcywgd2l0aGluIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGdldCB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgaW5wdXQgZmllbGRzLCBcblxuLy8gb25jZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIHZhbHVlcyBhcmUgc2F2ZWQsIFxuXG4vLyBwYXNzZWQgdG8gdGhlIHNwZWNpZmljIHByb2plY3RzIHRvZG8gYXJyYXksIFxuXG4vLyBhbHNvIHBhc3NlZCB0byBzdG9yYWdlIHRvbyBzbyB0aGUgdG9kbyBhcnJheSBpcyB0aGUgc2FtZSBhcyByZWd1bGFyIHByb2plY3QgYXJyYXkgXG5cbi8vIHNvIHdlIGhhdmUgdG8gYWJpbGl0eSB0byBnZXQgdGhlIHZhbHVlcywgXG5cbi8vIGFuZCBwdXNoIHRoZW0gdG8gdGhlIGNvcnJlY3QgcHJvamVjdCwgXG5cbi8vIHRoZXkgZG8gbm90IHNhdmUsIGFuZCBjbGVhciB1cG9uIHJlZnJlc2guIFxuXG4vLyBob3cgY2FuIEkgcHVzaCB0aGVzZSB2YWx1ZXMgaW50byB0aGUgYXJyYXksIHBlcm1hbmVudGx5IHNhdmUgdGhlbSwgXG5cbi8vIGFuZCB0aGVuIGRpc3BsYXkgdGhlbT8gSG93IGNhbiBJIGRpc3BsYXkgdGhlIHRvZG8ncz8gXG5cbi8vIERvIEkgaGF2ZSB0byBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcHJvamVjdHMgYXJyYXk/IFxuXG4vLyBkbyBJIGhhdmUgdG8gcGFzcyBwcm9qZWN0IGFycmF5IGFnYWluPyBcblxuLy8geW91IHdpbGwgaGF2ZSB0byBkaXNwbGF5IHRoZSBwcm9qZWN0cyBhZ2FpbiBcblxuLy8gdGhlIHRvZG8ncyBhcmUgYmVpbmcgdXBkYXRlZCBcblxuLy8gcHVzaCB0aGUgdXBkYXRlZCBwcm9qZWN0c0FycmF5LCBhbmQgZmluZCBhIHdheSB0byBkaXNwbGF5IHRvZG8ncyxcblxuLy8gXG5cblxuXG5cbi8vIGNvbnN0IEFwcCA9ICAoKCkgPT4ge1xuLy8gICAvLyBsZXQgcHJvamVjdEFycmF5ID0gW11cbi8vICAgbGV0IGN1cnJlbnRQcm9qZWN0XG5cbi8vICAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuLy8gICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuLy8gICAgICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4vLyAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSlcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0LmZpbHRlcihwID0+IHAuaWQgIT09IHByb2plY3QuaWQpXG4vLyAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSlcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7c2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0fVxuLy8gfSkoKVxuXG5cblxuLy8gSGVsbG8sIEkgYW0gcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvZG8sIEknbSB0cnlpbmcgdG8gaW1wbGVtZW50IHNvbWUgbG9naWMgdGhhdCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHRyYXNoIGljb24vZGVsZXRlIHByb2plY3QgYnRuLCBpdCB3aWxsIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBhbmQgaW4gdGhlIFwieW91ciBwcm9qZWN0c1wiIHNlY3Rpb24uIEJhc2ljYWxseSBqdXN0IHVzaW5nIGEgbGlzdGVuZXIsIHRoYXQgd2hlbiB0aGUgdXNlciBjb25maXJtcyB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBkaXNwbGF5LCB0aGVuIHJlbW92ZSB0aGUgdmFsdWUuIFRoZSBwcm9ibGVtIGlzIEkgZ2V0IHVuZGVmaW5lZCB3aGVuIEkgdHJ5IHRoaXMgYXBwcm9hY2gsIHdoaWNoIGlzIHN0cmFuZ2UgYmVjYXVzZSBJJ20gZ2V0dGluZyB0aGUgZWxlbWVudCwgdGhlcmUgaXMgYSB2YWx1ZSBpbnNpZGUgdGhlcmUsIHRoZW4ganVzdCB1c2luZ3IgLnZhbHVlLiBcblxuXG5cbi8vIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gd2l0aCB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIHRyYXNoIGljb24vZGVsZXRlIGJ0biBhbmQgdGhleSBjb25maXJtIFxuXG4vLyB0aGV5IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIHdhbnQgdG8gZGVsZXRlIGl0IGZyb20gbWFpbiBjb250YWluZXIgYXMgd2VsbCBhcyB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gTm90IHN1cmUgSWYgSSdtIGRvaW5nIHRoaXMgcmlnaHQgYnV0IEkgY2FuIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhbmQgdGhlbiB1c2UgcmVwbGFjZUNoaWxkcmVuIHRvIGNsZWFyIHRoZSBET00gXVxuXG4vLyBidXQgSSBhbSBnZXR0aW5nIHByZXR0eSBzdHVjayBvbiBob3cgdG8gZGVsZXRlIGl0IGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbj8gXG5cbi8vIEJhc2ljYWxseSBJIHRoaW5rIG9mIHNvbWVob3cgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSB0aGUgbWFpbiBjb250YWluZXIsIGFzIHdlbGwgYXMgdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIHVzaW5nIHJlbW92ZUNoaWxkIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGluIGJvdGggcGxhY2VzLCBcblxuXG5cbiAgXG4vLyBPSyB3ZWxsIHRoaXMgaXMgb25lIHdheSB0byBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYWNjZXNzIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uIGFuZCBkZWxldGUgdGhhdD8gXG5cbi8vIEkgbmVlZCB0byBhbHNvIGRlbGV0ZSB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLiBsb29rIHVwIHJlcGxhY2VDaGlsZHJlblxuXG4vLyBub3QgZ29pbmcgdG8gd29yayBiZWNhdXNlIHdoYXQgYXJlIHlvdSByZXBsYWNpbmcgd2l0aD8gSG93IGRvIHlvdSBrbm93IHdoaWNoIGVsZW1lbnQgdG8gcmVwbGFjZSBpdCB3aXRoPyBcblxuXG5cbi8vIGxldCBjYW5jZWxCdG5BcnJheSA9IEFycmF5LmZyb20oY2FuY2VsQnRuQWRkVG9kb01vZGFsKTtcblxuXG5cbi8vIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBcblxuLy8gbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vIGNvbnNvbGUubG9nKG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzKTtcblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChhcnJheSkgeyBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgbGV0IHByb2plY3ROYW1lSW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuICAgIFxuLy8gICB9XG4vLyB9XG5cbi8vIHByb2plY3ROYW1lc0NsaWNrRXZlbnQocHJvamVjdEFycmF5KTtcblxuXG5cbi8vIEkgdGhpbmsgSSBOZWVkIHRvIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZG9uJ3Qgd2FudCB0byBoYXZlIHRvbyBtdWNoIGdvaW5nIG9uIGluIG9uZSBmdW5jdGlvbiwgXG5cbi8vIHVzZSB0aGUgc2FtZSBsb2dpYywgbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXksIFxuIFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4LnByb2plY3QpO1xuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBvayBuZXh0LCBwcm9qZWN0IG5hbWVzIGFyZSBiZWluZyBhZGRlZCBkeW5hbWljYWxseSwgdGhleSBhcmUgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gdGhlIGFycmF5IGFuZCBwcm9wZXJseSBiZWluZyBhZGRlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gbmV4dCB3aGVuIEkgY2xpY2sgb24gdGhlIHByb2plY3QsIHRoYXQgcHJvamVjdCdzIG5hbWUgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBjbGVhciB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIGRpc3BsYXkgdGhlIG5ldyBwcm9qZWN0LCBcblxuLy8gcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBpcyBhZGRlZCBhdCBhIHRpbWUsIHNob3VsZCBub3QgYWRkIG9udG8uIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgYWxvbmcgd2l0aCB0aGUgdHdvIGJ0bnMsIGFkZCBhbmQgZGVsZXRlIGZvciB0aGUgdG9kbydzIFxuXG4vLyBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgc2hvdyB0aGF0IHByb2plY3QsIHVzZXIgY2Fubm90IGFwcGVuZCB0aGF0IHByb2plY3QgbXVsdGlwbGUgdGltZXMgYnkgY2xpY2tpbmcsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciB0aGUgb2xkIGFuZCBtYWtlIHdheSBmb3IgdGhlIG5ldyBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyB0aGlzIHdpbGwgYmUgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZmlyc3QgSSBmZWVsIGxpa2UgeW91IHdpbGwgbmVlZCB0byBsb29wIHRocm91Z2ggcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBmcm9tIHRoZSBhcnJheSwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgbG9naWMgd2lsbCBncmFiIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIGFuZCBhcHBlbmQgdmFsdWVzIHRvIGl0LCBcblxuLy8geW91IHdpbGwgcHJvYmFibHkgbmVlZCBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm9qZWN0IGlzIGFscmVhZHkgYWRkZWQgc3VjaCBhcyBJRCdzIG1hdGNoaW5nLCBcblxuLy8gaWYgSUQgbWF0Y2hlcyB3aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IGZyb20gYWRkaW5nIGFnYWluLCBlbHNlIGlmIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgY29udGFpbmVyLCBcblxuLy8gYmVmb3JlIHRoZSBwcm9qZWN0IG5hbWUgaXMgYXBwZW5kZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhhdCBuYW1lcyBpZCBtYXRjaGVzIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gSSB3b3VsZCBzYXkgZmlyc3QgbGV0J3MgbWFrZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGdyYWIgYWxsIHRoZSBwcm9qZWN0IG5hbWVzIGFuZCBJRD8gXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QsIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBcblxuLy8gSSdtIG5vdCBzdXJlIHlvdSBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBzZWVtcyBsaWtlIHlvdXIgZ2V0dGluZyBwcm9qZWN0IHRhcmdldCB2YWx1ZSwgd2l0aCBlLnRhcmdldC50ZXh0Q29udGVudCBcblxuLy8gbm93IEkgYmVsaWV2ZSB3aGF0IHlvdSBuZWVkIHRvIGZpZ3VyZSBvdXQgaXMgaG93IHRvIGRpc3BsYXkgdGhlIGNlcnRhaW4gcHJvamVjdCwgYmFzZWQgb24gd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHJlbWVtYmVyIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aGluIG1haW4gY29udGFpbmVyLCBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IGFsbCBiYXNlZCBvbiBidG4gY2xpY2sgXG5cbi8vIHRoaW5rIGJhY2sgdG8gcmVzdGF1cmFudCBwYWdlLCBcblxuLy8gSSBzb21laG93IG5lZWQgdG8gdGhpbmsgdGhpcyBvdXQsIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciBjb250ZW50cyBvZiBwcmV2aW91cyBwcm9qZWN0IGFuZCBtYWtlIHdheSBmb3IgbmV3LCBcblxuLy8gSSB0aGluayBJIG5lZWQgc29tZSBzb3J0IG9mIGNvbmRpdGlvbmFsLCBpZiB0aGlzIHByb2plY3QgaXMgY2xpY2tlZCwgY2hhbmdlIHRvIGEgdmFyaWFibGUgdGhlbiB1c2UgcmVwbGFjZSBjaGlsZC4gXG5cbi8vIGlmIHRoZSB2YXJpYWJsZSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBvciB0aGUgZGl2LCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsICBcblxuLy8gXG5cbi8vIC0tIGhvdyB0byBtYWtlIHN1cmUgb25seSB0aGF0IHdoZW4gdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBpdCB3aWxsIHBvcHVsYXRlLCB3aXRoIHRoYXQgcHJvamVjdCBuYW1lLCB3aXBlIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBcblxuLy8gLS0gd2h5IGlzIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBub3QgZHluYW1pY2FsbHkgYWRkaW5nIHByb2plY3RzPyBJIGhhdmUgdG8gcmVmcmVzaCB0aGUgcGFnZSBmb3IgaXQgdG8gc2hvdyB1cD8gXG5cbi8vIGhhbmRsZSB0aGUgY29uZGl0aW9uYWwgbG9naWMgZmlyc3QsIGFuZCBjb3JyZWN0bHkgZGlzcGxheWluZyB0aGUgcHJvamVjdCBuYW1lcyBpbiB0aGUgbWFpbiBjb250YWluZXIgZmlyc3QsIFxuXG4vLyBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgaXMgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMsIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgY2FuIGJlIGRpc3BsYXllZCBhdCBhIHRpbWUsIFxuXG4vLyBpZiBwcm9qZWN0IGNvbnRhaW5lciBpbmNsdWRlcyB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHNob3VsZCBpdCBiZSBzaW1pbGFyIHRvIHJlc3RhdXJhbnQgcGFnZSwgZWFjaCBwcm9qZWN0IGlzIGdpdmVuIGEgdmFyaWFibGUsIHRoZW4gaWYgdGhhdCBwcm9qZWN0IGlzIGNsaWNrZWQgb24gaXQncyBnaXZlbiBhIHZhcmlhYmxlIG9yIGluZGV4LCBcblxuLy8gdGhlbiBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCdzIElELCBtYXRjaGVzIHdoYXQgaXMgaW5zaWRlIHRoZSBtYWluIGNvbnRhaW5lciwgaWYgbm90IGNsaWNrZWQsIHJlcGxhY2Ugd2l0aCBuZXcgY2xpY2ssIFxuXG4vLyBpZiBpdCBpcyBjbGlja2VkIGFnYWluLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gcmVwbGFjaW5nIHRoZSBjb250ZW50LCBcblxuLy8gcmVwbGFjZSB0aGUgY29udGVudCB3aXRoIHRoZSBwcm9qZWN0cyB1bnFpdWUgSUQsIGlmIHByb2plY3QuaWQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUsIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgdGhhdCBidG4gYWdhaW4sIGp1c3QgcmV0dXJuLCBcblxuLy8gY2FuIHdlIGdvIGJhY2sgYW5kIGxvb2sgYXQgd2hhdCB5b3UgZGlkIHByZXZpb3VzbHkgd2l0aCB5b3VyIGNvZGU/XG5cbi8vIEkgZG9uJ3QgdGhpbmsgaXQncyB0aGUgc2FtZSBwcmV2aW91c2x5LCBiZWNhdXNlIHdlIGFyZSB1c2luZyBhIGRpdiBoZXJlIGluc3RlYWQgb2YgYSBidXR0b24sIFxuXG4vLyBJIHdhbnQgdG8gZmluZCBhIHdheSB0aGF0IEkgY2FuIG9ubHkgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBzaG91bGQgYWRkIGR1cGxpY2F0ZXMsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgcmVwbGFjZSBjb250ZW50cyBvZiBvbGQgYW5kIHdpcGUgdGhlIG5ldywgXG5cbi8vIEkgdGhpbmsgdGhlIERPTSBEaXNwbGF5IGlzIGZpbmUsIGdldHRpbmcgdGhlIHZhbHVlIGZyb20gYSBmdW5jdGlvbiwgY3JlYXRpbmcgYSBkaXYgdGhhdCBzdG9yZXMgdGhlIHByb2plY3RzIG5hbWUsIFxuXG4vLyBub3cgb25jZSB0aGUgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBsb29wIHRocm91Z2ggc3RvcmFnZSwgZmluZCBvdXQgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiBhbmQgZGlzcGxheSdzIGl0J3MgY29udGVudHMsIFxuXG4vLyBzdGljayB3aXRoIGhvdyB5b3UgYXJlIGRpc3BsYXlpbmcgdGhlIHByb2plY3RzIGluIHRoZSBET00sIFxuXG4vLyBob3cgd2lsbCB5b3UgYWRkIHRoaW5ncyB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgZGlzcGxheSBvbmx5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBtYWtlIGEgbG9vcCBnZXQgdGhlIHByb2plY3QncyBJRCwgY29tcGFyZSB0aGUgSUQgdG8gdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQgb24sIFxuXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWUgPSB2YWx1ZTsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZUlEID0gcHJvamVjdFZhbHVlLmlkOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSBwcm9qZWN0VmFsdWVbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXZOYW1lQnRuTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuXG4vLyBoZXJlIHRvIHRvcCBvZiBmdW5jdGlvbiwgXG5cblxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdDsgXG4gIC8vICAgICBsZXQgbmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2cobmFtZXMpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHsgXG4gIC8vICAgICBsZXQgeSA9IGxvY2FsU3RvcmFnZS5rZXkoXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2coeSk7XG4gIC8vICAgfVxuICAvLyB9IFxuICAvLyAgIGZvcihsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICAvLyBsZXQgeCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdFtcImtleVwiXTsgXG5cbiAgLy8gICAgIC8vIGxldCB4aWQgPSBwcm9qZWN0W1wiaWRcIl07IFxuXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh4aWQpO1xuICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG5cbiAgLy8gb2xkIGxvZ2ljIGJlbG93IFxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBsZXQgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVJRCk7XG5cbiAgLy8gICAvLyBpZiAocHJvamVjdFZhbHVlSUQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUpIHsgXG4gIC8vICAgLy8gICAgICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIpO1xuICBcbiAgLy8gICAvLyAgICB9XG5cblxuXG4gIC8vICAgbGV0IHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluXCIpO1xuICAgIFxuICAvLyAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTtcblxuICAvLyAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgLy8gICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2KTtcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5hcHBlbmQodGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSk7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pOyBcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG5cbiAgLy8gfSlcblxuICAvLyBoZXJlIHRvIGJvdHRvbSBicmFja2V0IFxuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvblwiKTtcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXZOYW1lQnRuTmF2YmFyKTtcblxuLy8gfVxuXG5cbi8vIGZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcbi8vICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHZhbHVlSW5Qcm9qZWN0W1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgIHByb2plY3REaXYuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuXG4vLyAgIGNvbnNvbGUubG9nKHN0cmluZ1ZhbHVlKTtcblxuXG5cblxuLy8gICAvLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdik7XG5cbi8vICAgLy8gY29uc29sZS5sb2codmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGxldCBwcm9qZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZURhdGEpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZXMpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuLy8gICAvLyBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3QpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSAgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFxuXG5cblxuXG5cblxuXG5cblxuLy8gbWFrZSBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBjb250ZW50cyBvZiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFwcGVuZHMgdGhlIHJlc3VsdCB0byB0aGUgRE9NLiBcblxuLy8gZnVuY3Rpb24gcHJpbnRTdG9yYWdlVG9Eb20oKSB7IFxuLy8gICAvLyBsZXQgZ2V0U3RvcmFnZUl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbi8vICAgLy8gbGV0IHBhcnNlZEl0ZW1zID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG5cbiBcblxuLy8gICBsZXQgbmF2UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG4vLyAgIG5hdlByb2plY3RzQ29udGFpbmVyLmFwcGVuZChzdHVwaWRWYWx1ZSk7XG4vLyB9IFxuXG5cbi8vIHByaW50U3RvcmFnZVRvRG9tKCk7XG5cblxuXG5cblxuICAvLyBsZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbiAgLy8gbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4gIC8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7IFxuXG4vLyBjb25zb2xlLmxvZyhmb3JtRWxlbWVudCk7XG5cbi8vIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG4vLyBZZWFoLCBJIHRoaW5rIGZvY3VzaW5nIG9uIHRoZSBiYXNpYyBpZGVhIG9mIGhvdyB0byBjcmVhdGUgYSBwcm9qZWN0IGFuZCBcbi8vIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgcHJvamVjdCB3aGVuIGl0cyBzaWRlYmFyIGJ1dHRvbiBpcyBjbGlja2VkIHdvdWxkIGJlIG15IGZpcnN0IHN0ZXAuIFxuLy8gVGhlbiB5b3UgY2FuIHRoaW5rIGFib3V0IHdoYXQgc2hvdWxkIGJlIG9uIHRoZSBwcm9qZWN0J3MgcGFnZTogdGhleSB3aWxsIG5lZWQgYnV0dG9ucyB0byBhZGQgYSB0YXNrIGFuZCB3aGF0IG5vdFxuXG4vLyBoYXZlIHRoZSB1c2VyIGVudGVyIGEgcHJvamVjdCBuYW1lLCBhbmQgc2F2ZSB0aGUgdmFsdWUsIHBhc3MgdGhhdCB2YWx1ZSB0byBzdG9yYWdlLiBcblxuLy8gdGhlIHZhbHVlIGNhbiBvbmx5IGJlIHNhdmVkLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZCBidG4sIGluc2lkZSB0aGUgbGlzdGVuZXIsIGdldCB0aGUgaW5wdXQgZmllbGQsIGNhcHR1cmUgaXQncyB2YWx1ZSB0aGVuIGNvbnNvbGUgbG9nIGl0IFxuXG4vLyB0aGUgaXNzdWUgb2YgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkIGJlaW5nIGNsZWFyZWQsIFxuXG4vLyB3ZWxsIEkgd3JhcHBlZCBpdCBpbnNpZGUgYSBmb3JtIHRhZywgaXQgd29ya3MgYnV0IGl0IHJlZnJlc2hlcyB0aGUgcGFnZSwgSSBtZWFuIGlzIHRoYXQgYSBwcm9ibGVtLCBcblxuLy8gSSBndWVzcyBub3cgSSdsbCB3b3JrIG9uIHN0b3JpbmcgdGhlIGRhdGEsIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBET00gbG9naWNcbi8vIGV4cG9ydCB0aGVuIGltcG9ydCB3aXRoaW4gYW5vdGhlciBmaWxlIFxuXG4vLyBpbXBvcnQgeyBzb21lIH0gZnJvbSBcImxvZGFzaFwiO1xuLy8gLy8gaW1wb3J0IHsgY29udGVudFR5cGUgfSBmcm9tIFwibWltZS10eXBlc1wiO1xuLy8gaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7IFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1JbnB1dCgpIHsgXG5cbi8vICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1maWVsZC10ZXh0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCI7XG5cbi8vICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTtcblxuLy8gICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbi8vICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4vLyAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuLy8gICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIik7XG5cbi8vICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuXG4vLyAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbi8vIH0gXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3ROYW1lVG9ET00odmFsdWUpIHsgXG5cbi8vICAgbGV0IHVzZXJJbnB1dFZhbHVlID0gdmFsdWU7ICBcblxuLy8gICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIik7IFxuXG4vLyAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4vLyAgIC8vIGdldCB0aGUgZWxlbWVudCBhbmQgdHJ5IHRvIHVzZSBpdCBpbnNpZGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlLCBcbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTsgXG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7IFxuXG4vLyAvLyBpZiAocHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbmNsdWRlcyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbikpIHsgXG4vLyAvLyAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbi8vIC8vIH1cblxuLy8gICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSB5b3UgY2xpY2tlZCB0aGUgcHJvamVjdCBuYW1lXCIpO1xuXG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gICAgXG4vLyAgICAgLy8gd2hlbiBidG4gaXMgY2xpY2tlZCBpdCB3aWxsIGdlbmVyYXRlIGEgcG9wLXVwIGZvcm0gXG4vLyAgICAgLy8gSSB0aGluayB5b3UgbmVlZCBhIGNvbnRhaW5lciwgYSBkaXYgdGhhdCBob2xkcyB0aGUgY29udGVudCwgYXBwZW5kIHRoZSBkaXYgdG8gdGhlIGNvbnRhaW5lciwgXG4gICAgXG4vLyAgICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgIFxuICAgICAgXG4vLyAgICAgICAvLyBpZiAobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmluY2x1ZGVzKHNvbWVCdG4pKSB7XG4vLyAgICAgICAvLyAgIHNvbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuLy8gICAgICAgLy8gfVxuXG4gICAgXG5cbi8vICAgICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICAgIC8vIHNvbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcC11cC1jb250YWluZXJcIik7IFxuXG4vLyAgICAgICBsZXQgdGl0bGVPZlRvRG9JbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiIFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiIHVuZGVybGluZVwiO1xuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgICAvLyBpbiBvcmRlciB0byBjZW50ZXIgaXQgeW91IG5lZWQgdG8gYXBwZW5kIHRoaXMgZWxlbWVudCBcblxuLy8gICAgICAgLy8gdG8gYW5vdGhlciBjb250YWluZXIgXG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjsgXG5cbi8vICAgICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgbGV0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIHBvcFVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwLWNvbnRlbnRcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0LWZpZWxkLXN0eWxlc1wiKTtcblxuLy8gICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpOyBcblxuLy8gICAgICAgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbi8vICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuLXRvLWRvLWlucHV0XCIpXG5cbi8vICAgICAgIGNsb3NlQnRuLnNyYyA9IFwiLi4vY2xvc2UtY2lyY2xlLnBuZ1wiOyBcblxuLy8gICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgdXJnZW5jeUxhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIGxldCB1cmdlbmN5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpOyBcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwidXJnZW5jeS1kcm9wZG93bi1zdHlsZXNcIik7XG5cblxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIiBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7IFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjsgXG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGRhdGVQaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4vLyAgICAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcblxuLy8gICAgICAgY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5SGlnaCk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TWVkaXVtKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lMb3cpOyBcblxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZU9mVG9Eb0lucHV0Rm9ybSk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50TGFiZWwpOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeURyb3BEb3duKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlckxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuQ29udGFpbmVyKTsgXG5cbiAgICBcblxuLy8gICAgICAgLy8gc2hvdWxkIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgY29udGVudCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lcj8gXG5cbi8vICAgICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbi8vICAgICB9KSBcblxuLy8gICAgIGFkZFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7IFxuXG4vLyAgIH0pIFxuXG5cbi8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG5cblxuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvTWFpbigpIHsgXG4vLyAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pOyBcblxuLy8gfVxuXG5cblxuLy8gSSdtIGFibGUgdG8gZ2V0IHRoZSB1c2VyIHZhbHVlLCBJIGFtIGFibGUgdG8gbG9nIG91dCBpdCdzIHZhbHVlLCBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgcHJvamVjdHMgY29udGFpbmVyIHNlY3Rpb24sXG5cbi8vIGl0IHN0aWxsIHJldHVybnMgYW5kIEhUTUwgZWxlbWVudCwgSSBjYW4gdHVybiBpdCBpbnRvIGFuIGFycmF5LCBidXQgSSBhbSB1bnN1cmUgb2YgaG93IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuXG4vLyB3aGF0IEkgd2FudCwgdGhlIHVzZXIgd2lsbCBlbnRlciBwcm9qZWN0IG5hbWUsIEkgd2FudCB0aGF0IG5hbWUgdG8gYXBwZWFyIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBhbmQgbWFpbiBjb250ZW50IHNlY3Rpb24oYmx1ZSBwYXJ0KTsgXG5cbi8vIFByb2JsZW06IEkgYW0gY29uZnVzZWQgb24gaG93IHRvIGFwcGVuZCB0aGlzIHByb2plY3QgbmFtZSB0byB0aGUgRE9NLiBcblxuLy8gV2hhdCBJJ3ZlIHRyaWVkOiBPbmNlIHRoZSBhZGQgYnRuIGlzIHByZXNzZWQsIHRoZSB2YWx1ZS9uYW1lIG9mIHByb2plY3Qgd2lsbCBiZSBzYXZlZCwgYW5kIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoYXQgXG5cbi8vIHZhbHVlIGFuZCBwcmludHMgdG8gdGhlIERPTS4gXG5cbi8vIEkgYW0gYWJsZSB0byBhY2Nlc3MgdGhlIHByb2plY3QgY29udGFpbmVyLCBhbmQgdGhlIG1haW4gc2VjdGlvbiBidXQgaXQncyBhbiBIVE1MIGNvbGxlY3Rpb24sIEkgY2FuIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYXBwZW5kIGFuIGFycmF5IHRvIHRoZSBET00/ICIsIi8vIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlXG5cbi8vIGltcG9ydCBcInNyYy9ldmVudExpc3RlbmVyTW9kdWxlLmpzXCI7IFxuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiOyBcblxuIGltcG9ydCBjcm9zc01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2Nyb3NzLW1hcmstc3ZncmVwby1jb20ucG5nXCI7IFxuXG4gaW1wb3J0IGNoZWNrTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY2hlY2stbWFyay1zdmdyZXBvLWNvbS5wbmdcIjsgXG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TmFtZUxvb3AoKSB7ICAgXG5mb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG5cbiAgICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcblxuICAgICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbiAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpOyBcblxufSAgXG5cbn0gXG5cbnByb2plY3ROYW1lTG9vcCgpO1xuICBcbnByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgIFxuXG5cblxuLy8gdG9kYXksIGVkaXRpbmcgdG9kbydzIFxuXG4vLyB1c2luZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzLCBcblxuLy8gbG9vayBiYWNrIGF0IGV4YW1wbGUsIGFuZCBzZWUgaG93IHlvdSBjYW4gd29yayB0aGF0IGludG8gY3VycmVudCBjb2RlIFxuXG4vLyB0aGUgZ2V0dGVycyBhbmQgc2V0dGVycywgc2hvdWxkIHByb2JhYmx5IGJlIGluc2lkZSB5b3VyIGZhY3RvcnkgZnVuY3Rpb24gXG5cbi8vIHdoYXQgd2lsbCB3ZSBiZSBwYXNzaW5nIHRvIHRoZSBmYWN0b3J5PyBcblxuLy8gV2h5IGEgZ2V0dGVyIGFuZCBzZXR0ZXI/IEkganVzdCBuZWVkIHRvIG92ZXJ3cml0ZSB0aGUgZGF0YSBhdCB0aGF0IHBhcnRpY3VsYXIgaW5kZXggd2l0aCB0aGUgZGF0YSwgXG5cbi8vIGNhbid0IEkgcGFzcyB0aGUgdmFsdWVzIHRvIHRoZSBzYW1lIGZhY3Rvcnk/IG1ha2UgdGhlIHNhbWUgb2JqZWN0IGFuZCB0aGVuIHVzZSB0aGF0IG9iamVjdCB0byBzcGxpY2Ugb3Igb3ZlcndyaXRlIHByb3Blcml0ZXM/IFxuXG4vLyB5b3UgY2FuIHByb2JhYmx5IGRvIHRoZSBzYW1lIHByb2Nlc3MsIG1ha2UgYW4gb2JqZWN0LCBidXQgeW91IG5lZWQgdG8gb3ZlcndyaXRlIHRoYXQgdG9kbyBhbmQgdGhhdCBpbmRleCB3aXRoIHRoZSBuZXcgaW5mby4gXG5cbi8vIFxuXG5cblxuLy8gb2sgc28gYSBzZXBlcmF0ZSBtb2RhbCBpcyBjcmVhdGVkLCB3aXRoIHVuaXF1ZSBlbGVtZW50cywgIFxuXG4vLyBub3cgd2UgbXVzdCBnZXQgdGhlIHZhbHVlcyBmb3IgZWFjaCBpbnB1dCBmaWVsZCBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGN1cnJlbnQgcHJvamVjdHMgdG9kb3MgPyBcblxuLy8gc29tZWhvdyBJIGFsc28gbmVlZCB0byBpbmNsdWRlIHRoZSBkYXRhc2V0IFxuXG5cblxuLy8gaGVyZSB3ZSBhcmUgYmFjayB3aXRoIGF2ZW5nYW5jZSBcblxuLy8gSSBhbSByZWNvdmVyaW5nLCBJJ20gZ29pbmcgdG8gZG8gYSBsaXR0bGUgd29yayB0b2RheSBcblxuLy8gc28gcmlnaHQgbm93IEkgd2FudCB0byBlZGl0IHRvZG8ncyBcblxuLy8gYnV0dG9uIGlzIGNsaWNrZWQgYW5kIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGEgZm9ybSBcblxuLy8gdGhlIGZvcm0gaXMgaWRlbnRpY2FsIHRvIG1ha2luZyBhIHRvZG8sIFxuXG4vLyB5b3Ugd2lsbCBqdXN0IG5lZWQgdG8gYXNzb2NpYXRlIHRoYXQgcGFydGljdWxhciB0b2RvIFxuXG4vLyB3aXRoIGEgZGF0YXNldCwgc2ltaWxhciB0byBkZWxldGluZyBhIHRvZG8sIFxuXG4vLyBvbmNlIHRoZSBlZGl0IGJ0biBpcyBjbGlja2VkLCBnaXZlIHRoYXQgdG9kbyBhIGRhdGFzZXQgXG5cbi8vIGdlbmVyYXRlIGZvcm0sIHdoYXRldmVyIHVzZXIgZW50ZXJzLCB3aWxsIHVwZGF0ZS9vdmVyd3JpdGUgdGhlIGluZm8gXG5cbi8vIGl0IHdvbid0IGNyZWF0ZSBhIG5ldyBvbmUsIGl0IHdpbGwganVzdCB1cGRhdGUvbW9kaWZpeSBcblxuLy8geW91ciBwcmV2aW91cyBhcHByb2FjaCBJIGRvbid0IGJlbGlldmUgd2lsbCB3b3JrIFxuXG4vLyBiZWNhdXNlIHlvdSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgc2FtZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHRoYXQgc2VlbXMgbGlrZSBpdCB3aWxsIG9ubHkgY2F1c2UgaXNzdWVzLCBcblxuLy8gbGV0cyBzZXBlcmF0ZSB0aGVtLCBtZWFuaW5nIGNvcHkgdGhlIHNldC11cCBhbmQgY29kZSBmb3IgY3JlYXRpbmcgYSB0b2RvIG1vZGFsIFxuXG4vLyBzdHlsZSBleGFjdGx5IHRoZSBzYW1lLCBcblxuLy8gYWRkIHRvZG8sIGFuZCBlZGl0IHRvZG8gYXJlIHR3byBzZXBlcmF0ZSBsaXN0ZW5lcnMsIFxuXG4vLyBvbmUgaXMgZm9yIGNyZWF0aW5nLCB0aGUgb3RoZXIgaXMgZm9yIG1vZGlmeWluZywgXG5cbi8vIGxldHMgYmVnaW4sIHRoZSBhcHByb2FjaCBzZWVtcyB2YWxpZCwgc3RhcnQgd2l0aCB0aGUgSFRNTCBcblxuLy8gYmFzaWNhbGx5IGNvcHkgdGhlIGNvZGUsIHNsaWdobHkgY2hhbmdlIGNsYXNzIG5hbWVzLCBcblxuLy8gc2FtZSBzdHlsZXMsIGh0bWwsIGNzcywgdGhlbiBncmFiIHRoZSBlbGVtZW50IGFuZCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGxvZ2ljLCBcblxuLy8gd2l0aGluIHRoZSBsaXN0ZW5lciwgd2UgYXJlIG5vdCBhZGRpbmcsIFxuXG5cblxuXG4vLyBwYXNzIHRoZSB1cGRhdGVkIGFycmF5IHRvIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIGNhbiBJIHB1c2ggdGhpbmdzIHRvIGl0LCBhZGQgdGhpbmdzIHRvIGl0LCBcblxuLy8gY2FuIEkgdXNlIGZpbHRlciwgXG5cbi8vIG9rIHNvIG5vdyBJIGNhbiBkZWxldGUgaW5kaXZpZHVhbCBwcm9qZWN0cyBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0IGFzIGEgd2hvbGUgXG5cbi8vIGhvdyBjYW4gSSByZWZsZWN0IHRoaXMgY2hhbmdlIGluIHN0b3JhZ2U/IFxuXG4vLyB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcGxhbiBvbiBob3cgSSBjYW4gbWFrZSBhbiB1cGRhdGUgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIHJpZ2h0IG5vdyBJdCBvbmx5IGRlbGV0ZXMgZnJvbSB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHVwZGF0ZSBteSBhcnJheSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIGluIHRoZSBET00/IFxuXG4vLyBjYW4gSSBsb29rIGJhY2sgbXkgZGVsZXRlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGZvciBpbnNwaXJhdGlvbj8gXG5cbi8vIHRoYXQgZGVsZXRlcyBmcm9tIGJvdGggdGhlIGFycmF5IGFuZCBpbiBzdG9yYWdlLCBcblxuLy8gZmlyc3QgY2hlY2sgdGhhdCBvdXQsIFxuXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgdmVyeSBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8gXG5cbi8vIHVzaW5nIHRoZSBcblxuLy8gY29uZnVzZWQgb24gaG93IEkgY2FuIGRlbGV0ZSBhIHNpbmdsZSB0b2RvLCBhbmQgcmVmbGVjdCBpbiB0aGUgRE9NLCBcblxuLy8gYnV0IGFsc28gaW4gc3RvcmFnZSwgSSBjYW4gcmVtb3ZlIGZyb20gRE9NLCBcblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBhIGxpdHRsZSBsb3N0IG9uIGhvdyB0byByZW1vdmUgaXQgZnJvbSBzdG9yYWdlLCBcblxuLy8gSSB3YW50IHRvIHNheSB1c2luZyBmaWx0ZXIgd291bGQgYmUgYSBnb29kIG9wdGlvbiBcblxuLy8gdG9kYXkgdGhlIGZvY3VzIGlzIGRlbGV0aW5nIGEgc2luZ2xlIHRvZG8gYW5kIHJlZmxlY3RpbmcgdGhhdCBcblxuLy8gd2l0aGluIHRoZSBzdG9yYWdlIGFuZCB3aXRoaW4gdGhlIERPTSwgXG5cbi8vIGFsc28gaWYgSSBnZXQgc3R1Y2sgb24gdGhhdCwgXG5cbi8vIGVkaXRpbmcgYSB0b2RvLCB0aGF0IGlmIHVzZXIgcHJlc3NlcyBlZGl0IGJ0biwgXG5cbi8vIGdlbmVyYXRlIHRoZSBtb2RhbCBhZ2FpbiwgYW5kIGFsbG93IHRoZSB1c2VyIHRvIGVkaXQgdGhhdCB0b2RvIFxuXG4vLyBhbmQgdGhlbiByZWZsZWN0IHRoYXQgY2hhbmdlIGluIHRoZSBET00gYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBJIHdpbGwgYXNrIHRoZSBxdWVzdGlvbiByaWdodCBhd2F5IGJlY2F1c2UgSSBhbSBzdHVjaywgXG5cbi8vIGJ1dCBzcGVuZCBhIGxpdHRsZSB0aW1lIGxvb2tpbmcgb3ZlciB0aGUgY29kZSwgXG5cblxuXG5cbi8vIEkgbWFkZSBhIG5ldyBmb2xkZXIgaW4gbXkgcmVwb3MgY2FsbGVkIHRvZG8gbGlzdC1CIFxuXG4vLyB0aGVuIEkgY2xvbmVkIHdpdGhpbiB0aGVyZSwgdGhlbiBjb3BpZWQgYWxsIG15IGNvZGUgZnJvbSBteSBtb2R1bGUgXG5cbi8vIGludG8gdGhlIG5ldyBwcm9qZWN0LCB0aGluZ3Mgc2VlbSB0byBiZSB3b3JraW5nIG9rIFxuXG4vLyBhbSBJIG9rIHRvIHB1c2ggYW5kIGNvbW1pdCBjaGFuZ2VzLCB3aWxsIHRoZXNlIGNoYW5nZXMgc3RpbGwgZ28gdG8gXG5cbi8vIHRvZG8gbGlzdC1BID8gXG5cbi8vIHJpZ2h0IG5vdyBhIHByb2JsZW0gSSBzZWUgaXMgdGhhdCBwcm9qZWN0cyBcblxuLy8gYXJlIG5vdCBiZWluZyBhZGRlZCB0byBwcm9qZWN0IDIsIFxuXG4vLyB0aGUgdG9kbydzIHdvbid0IHNob3csIGFuZCBhbnkgcHJvamVjdCB0aGF0J3Mgbm90IDEsIGVyYXNlcyBvbiByZWZyZXNoLCBcblxuXG5cblxuXG4vLyBvayBzbyB0b2RheSBpcyBhIG5ldyBkYXksIFxuXG4vLyBsb29rIGJhY2sgb3ZlciB0aGUgbWVzc2FnZXMsIGdldCBhbiBpZGVhLCBcblxuLy8gdGhlbiBncmFiIHNvbWUgb2YgeW91ciBmdW5jdGlvbnMsIFxuXG4vLyB0cnkgdG8gaW1wbGVtZW50IHRoZSBwbGFuIHRoYXQgZXggY2FtZSB1cCB3aXRoLCBcblxuLy8gcGFzcyBvYmplY3RzIGludG8gYXJyYXkgYW5kIGxvb3AgdGhydSB0aGVtLCBcblxuLy8gZmlyc3QgbG9vayBvdmVyIHRoZSBtZXNzYWdlcywgIFxuXG5cbi8vIG9rIHNvIGdvIGludG8gY29kZSBwZW4sIGNvcHkgdGhlIGRpc3BsYXkgZnVuY3Rpb24gb3ZlciwgXG5cbi8vIHRyeSB0byBtYWtlIGEgbmV3IG9iamVjdCwgZWFjaCB0aW1lIHlvdSBlbnRlciBmb3JtIGRhdGEsIFxuXG4vLyB0aGVuIGFkZCB0aG9zZSBwcm9qZWN0cyB0byB0aGUgYXJyYXksIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5LCB0aGUgdW5xaXVlIHRvZG9zIGFyZSBiZWluZyBkaXNwbGF5ZWQgXG5cbi8vIG5vdyB3ZSBtdXN0IHN0eWxlIHRoZSB0b2RvJ3MgXG5cbi8vIGVhY2ggYmxvY2sgc2hvdWxkIGJlIHN0eWxlZCwgXG5cbi8vIG5vdCBhIGNvbnRhaW5lciB0aGFuIGhhcyBhIHN0eWxlIHRoYXQgaG9sZHMgZXZlcnl0aGluZywgXG5cbi8vIHRyeSB0byBtYWtlIHN1cmUgZWFjaCBzZXQgb2YgdG9kbyBpcyBhcHBlbmRlZCB0byBhIGNvbnRhaW5lciwgXG5cbi8vIHlvdSBhcmUgYXBwZW5kaW5nIGV2ZXJ5dGhpbmcgdG8gdGhhdCBzYW1lIGNvbnRhaW5lciwgXG5cbi8vIGFwcGVuZCB0byBvbmUgY29udGFpbmVyLCBzdHlsZSB0aGF0IHRoZW4gYXBwZW5kIHRvIG1haW4gY29udGFpbmVyIFxuXG5cblxuXG5cblxuXG4vLyBvayB3ZSBoYXZlIHNvbWV0aGluZyB3b3JraW5nIGhlcmUsIFxuXG4vLyB5b3UgaGF2ZSB0d28gZnVuY3Rpb25zLCBcblxuLy8gYXQgbGVhc3QgZGF0YSBpcyBiZWluZyBwcmludGVkIHRvIHRoZSBET00sIGFuZCBpcyBzdG9yaW5nIGluIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuXG4vLyBjaGVjayB5b3VyIGZ1bmN0aW9ucyBhZ2FpbiwgXG5cbi8vIHJlbWVtYmVyIG9uZSB0byBjcmVhdGUgdGhlIGVsZW1lbnRzL3N0eWxlLCBvdGhlciB0byBqdXN0IGRpc3BsYXkgdGhlIGN1cnJlbnRQcm9qZWN0cyB0b2RvJ3MgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYXBwZW5kIHZhbHVlcywgc3R5bGUsIFxuXG4vLyB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIGp1c3QgZGlzcGxheSB0aGVtLiBcblxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuXG5cbi8vIGZvciAobGV0IHRvZG8gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgIGxldCB0b2RvSXRlbSA9IHBhcnNlVG9kb0l0ZW1zOyBcblxuLy8gICAgICBsZXQgdmFsdWVJblRvZG8gPSBwYXJzZVRvZG9JdGVtc1t0b2RvSXRlbV07IFxuXG4vLyAgICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Ub2RvKTsgXG5cbi8vICAgICAgLy8gY29uc29sZS5sb2codG9kb0l0ZW0pO1xuLy8gfVxuXG4vLyBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7XG5cblxuXG5cblxuXG4vLyBzdG9yZSB0aGUgdG9kb3MgbGlrZSBJIGRpZCB3aXRoIG5hbWVzLCBcblxuLy8gbG9vcCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0YWtlIGluIHByb2plY3QsIGFkZCB0aGUgdmFsdWVzLCBcblxuLy8gcHVzaCB0aGUgcHJvamVjdCBiYWNrIGludG8gcHJvamVjdHMgYXJyYXksIGFuZCB0aGVuIFxuXG4vLyBwYXNzIHRoZSBwcm9qZWN0c0FycmF5IGJhY2sgdG8gRE9NIGZ1bmN0aW9uLCBhbmQgc3RvcmFnZSwgXG5cbi8vIGFkZCB0aGUgdG9kbydzIG9uIGEgcHJvamVjdCwgdXBkYXRlIGl0IGFnYWluIFxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZVRvZG9JdGVtcyk7XG5cblxuLy8gaG93IGNhbiBJIGtlZXAgbXkgdG9kbydzIGFmdGVyIHBhZ2UgcmVmcmVzaD8gWWVzdGVyZGF5IGl0IHNlZW1lZCBsaWtlIGl0IHdhcyBhIHByb2JsZW0gaW4gaG93IEknbSBzdG9yaW5nIHRoZW0gYW5kIGhvdyBJIHBhcnNlIHRoZW0gXG5cbi8vIGl0IHNlZW1zIGxpa2UgaXQgaXMgYSBzdG9yYWdlIHByb2JsZW0sIGhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgdG9kbyBhcnJheSB3aXRoaW4gZWFjaCBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHBhcnNlIHRoZSBkYXRhIGxpa2UgdSBkaWQgYmVmb3JlPyBcblxuXG4vLyBsZXQgZ2V0VG9kb0l0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvSXRlbXNcIik7IFxuXG4vLyBsZXQgcGFyc2VUb2RvSXRlbXMgPSBKU09OLnBhcnNlKGdldFRvZG9JdGVtcyk7IFxuXG5cbi8vIGZ1bmN0aW9uIHBhcnNlVG9kbygpIHsgXG4vLyAgICAgIGZvciAobGV0IGl0ZW0gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgICAgICAgbGV0IHRvZG8gPSBpdGVtOyBcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbi8vICAgICAgfVxuLy8gfSBcblxuLy8gcGFyc2VEYXRhKCk7XG5cblxuLy8gT0sgc28gdGhlIGRlbGV0aW5nIHByb2plY3QgbWV0aG9kIHdvcmtzISEgSSBhbSBub3cgYWJsZSB0byBkZWxldGUgYSBwcm9qZWN0IGZyb20gbWFpbiBhcyB3ZWxsIGFzIHRoZSBuYXZiYXIsIFxuXG4vLyBuZXh0IEkgZGlkIHRvIGFkZCB0aGUgbG9naWMgc28gdGhlIHVzZXIgY2FuIGFkZCB0b2RvJ3MsIFxuXG4vLyByZW1lbWJlciB0b2RvJ3MgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG9iaiBhcnJheSwgXG5cbi8vIGZpcnN0IHdlIHByb2JhYmx5IG5lZWQgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FwdHVyZSB0aGUgdmFsdWUgXG5cbi8vIG9uIGVhY2ggaW5wdXQgZmllbGQsIGxldHMgc3RhcnQgdGhlcmUsIFxuXG4vLyBhIGZ1bmN0aW9uIHdpbGwgYmUgbmVlZGVkIHRvIGdldCB0aGUgY29ycmVjdCBpbnB1dCBmaWVsZHMgXG5cbi8vIGFuZCB0aGVuIGdldCB0aGUgdmFsdWVzIGZyb20gdGhlbSwgXG5cblxuXG5cbi8vIHRoaW5raW5nIG9mIHRoZSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGRlbGV0aW5nIHByb2plY3RzLCBcblxuLy8gdGhhdCB3b3VsZCBiZSBnZXR0aW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBpbnB1dCBhbmQgXG5cbi8vIHB1c2hpbmcgdGhlbSBiYWNrIGludG8gdGhlIHRvZG8gYXJyYXkgdGhhdCBlYWNoIHByb2plY3QgY29udGFpbmVycyBcblxuLy8geW91IHdpbGwgbmVlZCBhY2Nlc3MgdG8gdGhhdCB0b2RvIGFycmF5LCB0cnkgYSBzaW1wbGUgbG9nIGZpcnN0IFxuXG4vLyBidXQgdGhlIHRvZG8ncyB3aWxsIGJlIGFkZGVkIHRvIHRoZXJlIGJ1dCBhbHNvIGl0IG5lZWRzIHRvIGJlIFxuXG4vLyByZWZsZWN0ZWQgaW4geW91ciBET00gdG9vLCBcblxuLy8gc28gdGhpbmtpbmcgb2Ygc29tZSB3YXkgdG8gYWNjZXNzIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGUgb2JqIFxuXG5cbi8vIGlmIHlvdSBjYW4gYWNjZXNzIGl0IHlvdSBhZGQgdGhlIHZhbHVlcyB0byBpdCwgXG5cbi8vIHRoZW4gb25jZSB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgcHJvcGVybHkgd2l0aGluIGVhY2ggb2JqZWN0LCBcblxuLy8geW91IHdhbnQgdG8gcmVmbGVjdCB0aGF0IGluIHRoZSBET00sIGFjY2VzcyB0aGUgdG9kbyBhbmQgZGlzcGxheSBpdCdzIHByb3BlcnRpZXMgXG5cbi8vIHRoZW4gaGF2aW5nIGEgd2F5IHRvIGRlbGV0ZSB0b2RvJ3MgYW5kIGhhdmluZyB0aGF0IHVwZGF0ZSBcblxuLy8gd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00uIFxuXG5cbi8vIGdldHRpbmcgcHJvamVjdCBJRCBcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgIFxuLy8gICAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgICBsZXQgcHJvamVjdFZhbHVlID0gcHJvamVjdEluZGV4LmlkOyBcbiAgICAgXG4vLyAgICAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSk7XG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBnZXQgdGhlIHByb2plY3QncyBJRCwgZ2V0IHRoZSBJRCdzIHdpdGhpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgYW5kIHRoZSBJRCdzIHdpdGhpbiB0aGUgbWFpbiBzZWN0aW9uLCBcblxuLy8gY3JlYXRlIGEgbG9vcCBpbnNpZGUgZWFjaCBzZWN0aW9uIGFuZCBnZXQgdGhlIHZhbHVlLCBcblxuXG5cblxuLy8gd2VsbCB5b3UgY2FuIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGFuZCB0aGUgYnRuIGNvbnRhaW5lciBmcm9tIHRoZSBET00sIFxuXG4vLyBjYW4gd2UgZmlndXJlIG91dCBhIHdheSB0byBkZWxldGUgdGhlIHByb2plY3QsIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGxldHMgdGFrZSBhIGxvb2sgYXQgaG93IHRoZSB2YWx1ZSBpcyBzdG9yZWQsIFxuXG4vLyBmaWd1cmUgb3V0IGhvdyB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgYW5kIHNlZSBpZiBzb21laG93IHlvdSAgXG5cbi8vIGdyYWIgYSB2YWx1ZSwgb3IgdGhlIGNvbnRhaW5lciBkaXYgdGhhdCBjb250YWlucyB0aGUgdmFsdWUuXG5cblxuLy8gSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHZhbHVlcyB3dGloaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCB0byB1c2UgYSBsb29wLCB0byBnZXQgYWxsIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHRoZSB2YWx1ZSdzIHRleHQgY29udGVudCBtYXRjaGVzLCBzZXQgdGhlIHRleHRDb250ZW50IHRvIFwiXCIgb3IgZGVsZXRlIHRoZSBlbGVtZW50LCBcblxuLy8gdHJ5IHRvIGxvb3AgdGhyb3VnaCB0aGUgZWxlbWVudHMgd2l0aCB0aGF0IHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHZhbHVlcyBtYXRjaCwgZGVsZXRlIHRoZSB2YWx1ZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gdGhhdCBtYXRjaGVzIG1haW4gY29udGVudHMgdmFsdWUsIFxuXG4vLyBpZCdzLCBlYWNoIHByb2plY3QgaGFzIGEgdW5xaXVlIElELCBjb21wYXJlIElEJ3MsIHdoeSBjYW50IEkgZG8sIGlmIHRoZSB0ZXh0Q29udGVudHMvc3RyaW5ncyBtYXRjaCByZW1vdmU/IFxuXG4vLyBJIGdvdCB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbWFpbiwgYW5kIGFsbCB0aGUgZWxlbWVudHMgaW4geW91ciBwcm9qZWN0cywgXG5cbi8vIGRvZXMgdGhlIHN0cmluZyBtYXRjaCB0aGUgb3RoZXIgc3RyaW5nLCBcblxuLy8gZG8gSUQncyBtYXRjaD8gXG5cblxuXG5cblxuLy8gc2FtZSBpc3N1ZSwgSSBhbSB0cnlpbmcgdG8gZ3JhYiB0aGUgdmFsdWVzLCBhbmQgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgbWFyaywgZGVsZXRlIHRoZSBwcm9qZWN0LCBcblxuLy8gZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gYm90aCBwbGFjZXMsIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBhbmQgdGhlIGxpc3Qgb24gdmFsdWVzIGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBob3cgY2FuIEkgZGVsZXRlIGJvdGggaW4gdGhlIHNhbWUgcGxhY2Ugb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBcblxuLy8ganVzdCBjaGVjayB0byBzZWUgd2hlbiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgRE9NLCBzZWUgaWYgeW91IGNhbiBhZGQgYSBjbGFzcyB0byBpdCwgXG5cblxuLy8gd2hpbGUgd2VyZSB3YWl0aW5nIGNhbiB3ZSBnZXQgdGhlIHByb2plY3RzIElEPyBcblxuLy8ganVzdCBzaW1wbHkgdHJ5IHRvIGdldCBhIHByb2plY3RzIElELiBhbmQgbG9nIGl0LCBcblxuXG5cblxuXG5cbi8vIE9LIHRvZGF5IHRoZSBnb2FsIGlzIHRvIGZpZ3VyZSBvdXQsIGhvdyB0byBkaXNhYmxlL2V4aXQgdGhlIG1vZGFsLCBhbmQgaG93IHRvIGFjdGl2YXRlIGl0IFxuXG4vLyBiYXNlZCB1cG9uIGEgYnV0dG9uIGNsaWNrLCBcblxuLy8gdGhlbiBvbmNlIHRob3NlIGFyZSBnb29kLCB0aGVuIHdlIGNhbiBmb2N1cyBvbiB0aGUgc3R5bGluZyBvZiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBsZXQncyBhZGQgdGhlIGxvZ2ljIHRoYXQgY2FuIGV4aXQgdGhlIG1vZGFsLCBcblxuLy8gZ3JhYiB0aGUgaWQgb3IgY2xhc3MgZnJvbSBIVE1MLCBhbmQgZmlyc3QgbG9nIHRoZSBlbGVtZW50IGNvcnJlY3RseSwgXG5cbi8vIHRoZW4gYWRkIGV2ZW50IGxpc3RlbmVyLCB0aGF0IHNldHMgdGhlIG1vZGFscyBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZWQgdGhlICsgaWNvbiwgc2V0IHRoZSBkaXNwbGF5IHRvIGZsZXgsIFxuXG4vLyBvayBzbyBJIGFtIGFibGUgdG8gdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBvcGVuaW5nIHRoZSBtb2RhbCBhbmQgY2xvc2luZyB0aGUgbW9kYWwsIFxuXG4vLyBub3cgeW91IHdpbGwgbmVlZCB0byBtYWtlIGxvZ2ljLCB0aGF0IHdpbGwgc2V0IHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIG1vZGFsIHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIGl0IHdpbGwgcG9wLXVwLCBjYW5jZWwgaXQgd2lsbCBub3QgZGlzcGxheSBcblxuLy8gSSB0aGluayBqdXN0IGdyYWJiaW5nIHRoZSB2YXJpYWJsZXMgYXQgdGhlIHRvcCBpcyBmaW5lLCBhbmQganVzdCBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBcblxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB3b3Jrcywgc2F2ZSBhbmQgY29tbWl0LCB0aGVuIGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgZGVsZXRlIGJ0biB3b3JraW5nLCBcblxuLy8gbm93IHdvdWxkIHByb2JhYmx5IGJlIHRoZSBiZXN0IHRpbWUgdG8gZG8gdGhhdCwgc2luY2UgdGhlIGFkZCBidG4gaXMgd29ya2luZywgbm93IHdlIGNhblxuXG4vLyB3b3JrIG9uIHRoZSBsb2dpYywgdGhhdCBvbmNlIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBhbm90aGVyIG1vZGFsLCBhc2tpbmcgdGhlIHVzZXIgXG5cbi8vIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3Q/IEl0IHdpbGwgY2xlYXIgdGhhdCBwcm9qZWN0IGZvciB0aGUgRE9NIEluIG1haW4gXG5cbi8vIGJ1dCBhbHNvIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiwgXG5cbi8vLyBzdHlsZSB0aGUgbW9kYWwsIG9uZSBidG4gdG8gY29uZmlybSBhbmQgdGhlIG90aGVyIGJ0biB0byBjYW5jZWwgdGhlIG9yZGVyLCBcblxuLy8gT2sgc28gd2UgaGF2ZSB0aGUgcHJpbnQgdmFsdWVzIHRvIHRoZSBET00gZnVuY3Rpb24sIFxuXG4vLyBpZiB1c2VyIGNsaWNrcyBwcm9qZWN0IG5hbWUsIHZhbHVlcyBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIsIFxuXG4vLyBpZiB1c2VyIHByZXNzZXMsIGFkZCBvciBkZWxldGUsIGxvZ2ljIGlzIHdpdGhpbiB0aGUgc2FtZSBmdW5jdGlvbiwgXG5cbi8vIEkgZG9uJ3Qgc2VlIHRoYXQgYmVjb21pbmcgYSBwcm9ibGVtLCBteSB0aGlua2luZyBpcyB0aGF0IGl0J3MgYmV0dGVyIHRvIGRvIHRoYXQgdGhlcmUgXG5cbi8vIHRoYW4gcGFzc2luZyB0aGUgdmFyaWFibGUgdG8gYW5vdGhlciBmdW5jdGlvbiwgbWlnaHQgYXMgd2VsbCBkbyB0aGF0IGFsbCB0aGVyZSwgXG5cbi8vIHNvIHRoZSBkZWxldGUgYnRuLCBtYWtlIHRoZSBtYXJrdXAgaW4gdGhlIEhUTUwgZmlyc3QsIGZvbGxvdyB0aGUgZ3VpZGVsaW5lcyBiZWZvcmUsIGdvIHNsb3csIFxuXG5cbi8vIG1vZGFsIGlzIHdvcmtpbmcgYnV0IGp1c3QgdHJ5aW5nIHRvIGFkZCBzcGFjZSBcbi8vIGJldHdlZW4gdGhlIGVsZW1lbnRzIHRoZSBjaGVjayBhbmQgdGhlIHgsIGVsZW1lbnQgXG5cbi8vIG9rIGdvdCB0aGUgZGVsZXRlIGJ0biBtb2RhbCB3b3JraW5nIGFzIEkgd2FudCB0bywgbmV4dCBJIHdpbGwgYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudCwgXG5cbi8vIHRoYXQgb25jZSBjbGlja2VkIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsLCBcblxuLy8gZG9udCBmb3JnZXQgdG8gYWRkIHRoZSBvdmVybGF5ISBcblxuXG5cblxuLy8gbmV4dCB3aWxsIHdvcmsgb24gZGVsZXRpbmcgYSB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrbWFyaywgaXQgc2hvdWxkIGRlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBET00sIHRoZSBhcnJheSBcblxuLy8gYW5kIEkgYmVsaWV2ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgdG9vLCB0aGVuIHdvcmsgb24gc2F2aW5nIHRvZG8gaW5mbywgZnJvbSB0aGUgbW9kYWwgYW5kIHB1c2hpbmcgaW50byB0aGUgRE9NIGFuZCBzdG9yYWdlIHdoZXJlIFxuXG4vLyBlYWNoIHByb2plY3QgaGFzIGEgbGlzdCBvZiB0b2RvJ3MsIGl0IHdpbGwgYWRkZWQgdGhlcmUgd2hpbGUgYWxzbyByZWZsZWN0aW5nIHRoYXQgaW50byB0aGUgRE9NLiBcblxuLy8geWVzIG5leHQgc3RlcCBpcyBlaXRoZXIgZGVsZXRpbmcgdGhlIHByb2plY3QsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgYnRuLCBhbmQgZ2V0dGluZyBhbGwgdGhlIHVzZXIgaW5mbyBcblxuLy8gdGhhdCB3YXMgZW50ZXJlZCBhbmQgc2F2aW5nIHRoYXQgdG9kbywgdG8gdGhlIGFycmF5IG9mIHRvZG8ncyB0aGF0IGVhY2ggcHJvamVjdCBoYXMsIFxuXG5cblxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG5cbi8vIHNvIG5vdyB3ZSBmaWd1cmVkIG91dCBob3cgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBtb3JlIHByb2plY3RzLCBcblxuLy8gYmFzY2ljYWxseSBjbGVhciB0aGUgRE9NLCB0aGVuIGFkZCBwcm9qZWN0cywgXG5cbi8vIG5vdyBhZGQgdGhlIGxvZ2ljLCB0aGF0IHdpbGwgZ2VuZXJhdGUgYSBtb2RhbCwgZm9yIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIHRvZG8sIFxuXG4vLyBmaXJzdCBJIHdvdWxkIGp1c3QgdHJ5IGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gbWF5YmUgc2VlIGlmIHlvdSBjYW4gc3BsaXQgdGhlIGNvZGUgdXAgYSBiaXQsIFxuXG4vLyBwcmludCBhIHNpbXBsZSBtZXNzYWdlIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgZmlyc3QsIFxuXG4vLyBvayB3b3JrcyBnb29kLCBub3cgc3RhcnQgY29uc3RydWN0aW5nIHlvdXIgbW9kYWwsIGZvbGxvdyBhbG9uZyB3aXRoIHRoZSBhcnRpY2xlLCBvciB2aWRlbywgXG5cbi8vIG5lZWRzIHRpdGxlLCBwcmlvcml0eSwgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBcblxuLy8gdGhvc2UgdmFsdWVzIGFyZSB0aGVuIGFkZGVkIHRvIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGF0IHNwZWNpZmljIHByb2plY3QsIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIGltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICBcbn0gIFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJyYXlTdG9yYWdlKGl0ZW0pIHsgXG4vLyAgICAgbGV0IHRoaXNQcm9qZWN0ID0gaXRlbTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG4vLyB9XG5cblxuLy8gd2hhdCBwcm9wZXJ0aWVzIHdvdWxkIHRoZSB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uIGhhdmU/IFxuXG4vLyB3aGF0IHdvdWxkIGl0IHRha2UgaW4/IFxuXG4vLyBJIHRoaW5rIHlvdSBtaWdodCBoYXZlIHRvIHVwZGF0ZSB0aGUgYXJyYXksIFxuXG4vLyBvciBmaWx0ZXIgb3V0IHRoZSBpdGVtcyB0aGF0IHdlcmUgZGVsZXRlZCwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IHRvIHVwZGF0ZSBzdG9yYWdlLCBcblxuXG4vLyBzbyBub3cgbmV4dCwgSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIFxuXG4vLyB1cGRhdGUgbXkgc3RvcmFnZSBhbmQgYXJyYXkgYmFzZWQgb24gd2hlbiB1c2VyIGRlbGV0ZXMgXG5cbi8vIGEgc2luZ2xlIHRvZG8gaXRlbSwgXG5cbi8vIHNvbWV0aGluZyB3aWxsIG5lZWQgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIHN0b3JhZ2UgcmVmbGVjdCBjaGFuZ2VzIGluIHRoZSBET00sIFxuXG4vLyBwcm9qZWN0IGlzIGRlbGV0aW5nIGZyb20gdGhlIERPTSwgYnV0IGl0IHN0aWxsIHNob3dzIGluIGFycmF5IFxuXG4vLyBhbmQgc3RpbGwgc2hvd3MgaW4gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGFmdGVyIHRoZSBwcm9qZWN0IGlzIGRlbGV0ZWQgZnJvbSB0aGUgRE9NLCBcblxuLy8gdGhlIHByaW50VmFsdWVUb0RPTSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gYmUgY2FsbGVkIGFnYWluIFxuXG4vLyBzbyB0aGF0IGNhbiByZWZsZWN0IHRoZSBsb2NhbCBzdG9yYWdlIHRvIHRoZSBET00sIFxuXG4vLyBzbyBJIHRoaW5rIHRoZSBwcm9qZWN0IGFycmF5IGlzIGdvaW5nIHRvIGJlIHBhc3NlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiB0aGUgcHJpbnR2YWx1ZSB0byBkb20gZnVuY3Rpb24gbmVlZHMgdG8gY2FsbGVkLCBzbyBzaHdvIHRvIHRoZSBET00gXG5cbi8vIHdoYXQgaXMgaW5zaWRlIGxvY2FsIHN0b3JhZ2UgXG5cbi8vIGNvbnRpbnVlIHRvIGJyYWluc3Rvcm0gaG93IHRvIHJlZmxlY3QgdGhlIGNoYW5nZSBpbiBkZWxldGluZyBcblxuLy8gcHJvamVjdHMgZnJvbSB0aGUgRE9NIGFuZCBob3cgdG8gdXBkYXRlIHRoYXQgaW4gbG9jYWwgc3RvcmFnZS4gXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVRvZG9JdGVtcyhwcm9qZWN0KSB7IFxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpOyBcbiAgICBcbi8vICB9XG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0b3JhZ2UoKSB7IFxuLy8gICBsZXQgZ2V0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4gIFxuLy8gICBjb25zb2xlLmxvZyhnZXROYW1lKTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqID0gcHJvamVjdE5hbWVGYWN0b3J5KGdldE5hbWUpOyBcblxuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZU9iaik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBteSBnb2FsIGlzIHRvIGhhdmUgaW5kaXZkdWFsIHByb2plY3QgbmFtZSBvYmplY3RzLCBcblxuLy8gSSBhbSBhYmxlIHRvIGNyZWF0ZSBwcm9qZWN0IG5hbWVzLCBidXQgd2hlbiBJIHVzZSBvYmplY3RzIGl0IG9ubHkgYWRkcyBvbnRvLCBhbmQgZG9lcyBub3QgY3JlYXRlIHVuaXF1ZSBwcm9qZWN0cy4gXG5cbi8vIFxuXG5cblxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnIgPSBbXTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gdmFsdWVbaV07IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUlucHV0KTtcbi8vICAgICAgICAgYXJyLnB1c2gocHJvamVjdE5hbWVJbnB1dCk7XG5cbi8vICAgICB9IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycik7IFxuLy8gICAgIHJldHVybiBhcnI7IFxuLy8gfSBcblxuLy8ganVzdCBhZGQgdmFsdWVzIHRvIHRoZSBhcnJheSBcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUodmFsdWUpIHsgXG5cbi8vICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZVN0b3JhZ2UpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0TmFtZShcImFsZWNcIik7IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGxldCBnQXJyYXkgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4vLyAgICAgICAgIHJldHVybiBhcnJheTtcbi8vICAgICB9XG4vLyB9KCkpOyBcblxuLy8gZ0FycmF5KDEpOyBcbi8vIGdBcnJheSgyKTsgXG4vLyBnQXJyYXkoMyk7IFxuLy8gZ0FycmF5KDQpOyBcblxuLy8gIGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnJheSA9IFtdOyBcbi8vICAgICBjb25zb2xlLmxvZyhhcnJheSlcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gY2FsbFRoaXMgKHZhbHVlKSB7IFxuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTsgXG4vLyAgICAgICAgIHJldHVybiBhcnJheVxuLy8gICAgIH0gXG4vLyB9IFxuXG4vLyBzdG9yZVVzZXJWYWx1ZSgpO1xuXG5cblxuXG5cblxuLy8gZmluZCB3YXkgdG8gYWRkIGl0ZW1zIG9udG8gYW4gYXJyYXksIEkgZG9uJ3QgdGhpbmsgaXQncyBzbWFydCB0byBhZGQgb25lIGF0IGEgdGltZSwgYnV0IG1vcmUgc28gbGlrZSBhZGRpbmcgcHJvamVjdHMgb250byBhIHNpbmdsZSBhcnJheSBcblxuICAgIC8vIHRoaW5rIG9mIGEgd2F5IHRvIGFkZCBpbnRvIGFuIGFycmF5LCBsb29rIGludG8gY2xvc3VyZSBhbmQgYWRkaW5nIG9udG8gYW4gYXJyYXkgdXNpbmcgY2xvc3VyZS4gXG5cbiAgICAvLyBjbG9zdXJlIHNlZW1zIGxpa2UgdGhlIHJpZ2h0IGlkZWEgYnV0IGhvdyBjYW4gSSBtYWtlIHRoaXMgd29yayB3aXRoIHRoZSBjdXJyZW50IGNvZGUgSSBoYXZlPyBcblxuICAgIC8vIHdlbGwgSSB0aGluayBJIGRpZCBmaW5kIGEgd2F5IHRvIHN0b3JlIHRoZSBwcm9qZWN0IG5hbWVzLCBqdXN0IHNvbWV0aGluZyBkb2Vzbid0IHNlZW0gcmlnaHQgYWJvdXQgdGhlIHN0b3JhZ2VcblxuICAgIC8vICBcblxuLy8gdGhhdCBhcnJheSBjYW4gYmUgcGFydCBvZiBhbiBvYmosIGtleSBpbnRvIHRoZSBhcnJheVxuXG4vLyBidG4gcHJvYmxlbSwgYXBwZW5kaW5nIHRvbyBtYW55IGlucHV0IGZpZWxkcywgY29uZGl0aW9uYWwgdG8gcHJldmVudCBcblxuLy8gY29ycmVjdCBhcnJheSBzdG9yYWdlIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGNvcnJlY3RseSBcbiBcbi8vIHByb3Blcmx5IGluc3RhbGxpbmcgYW5kIHVzaW5nIHNhc3MgYWZ0ZXIgdGhlIGFib3ZlIGlzIGFjY29tcGxpc2VkLiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9