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
___CSS_LOADER_EXPORT___.push([module.id, "/* import \"/style.scss\"; */\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}\n\n.modal-header-text {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.Add-Project-btn {\n  /* width: 40px;  */\n  font-size: 1.5rem;\n}\n\n.input-field-modal {\n  font-size: 1.5rem;\n}\n\n.close-btn {\n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem;\n  width: 25px;\n  left: -210px;\n  bottom: 160px;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n  font-family: \"Patua One\", cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas: \"header header\" \"nav main\" \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text,\n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}\n\nheader {\n  grid-area: header;\n}\n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}\n\n.header-title-text-to-do-list {\n  font-size: 5rem;\n  text-align: center;\n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn {\n  font-size: 1.5rem;\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: \"Patua One\", cursive;\n}\n\n#add-project-btn:hover {\n  color: white;\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: \"Patua One\", cursive;\n}\n\n.project-input-field-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.input-field-text {\n  font-size: 1.5rem;\n  width: 240px;\n}\n\n.btn-container {\n  display: flex;\n  gap: 1em;\n}\n\n.add-btn,\n.cancel-btn {\n  font-size: 1.2rem;\n  background-color: red;\n  color: white;\n  font-family: \"Patua One\", cursive;\n}\n\n.add-btn {\n  background-color: green;\n}\n\n.todo-pop-up-container {\n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%;\n  left: 60%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  width: 50%;\n  padding: 25px;\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}\n\n.submit-task-btn-pop-up-field {\n  display: flex;\n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px;\n  width: auto;\n}\n\n.pop-up-content {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n.create-to-do-form-btn {\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input {\n  position: absolute;\n  top: -5px;\n  left: -8px;\n  background: #fff;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.submit-task-btn-container-styles {\n  display: flex;\n  justify-content: center;\n  margin: 15px;\n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n.project-section-name-btn-div {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.main-content-section-project-name-div {\n  font-size: 5rem;\n  color: white;\n  text-align: center;\n}\n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n#navbar-project-names-go-here {\n  font-size: 2rem;\n  color: white;\n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles {\n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n}\n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */\n.delete-btn-trash-can-svg-icon-styles,\n.add-btn-svg-project-name-styles {\n  height: 1em;\n  width: 1em;\n}\n\n.add-delete-btn-for-todo-container-styles {\n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n/* styles for add todo pop-up modal */\n.modal-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-todo {\n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n.close-the-todo-modal {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-todo label {\n  text-align: center;\n}\n\n.modal-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* begin edit todo modal styles here */\n.modal-edit-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-edit-todo .flex-for-edit-todo-modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-edit-todo input {\n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n}\n\n.modal-edit-todo > label {\n  color: white;\n}\n\n.overlay-for-todo-modal-edit {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-edit-todo {\n  z-index: 2;\n}\n\n.close-the-todo-modal-edit {\n  position: relative;\n  font-size: 1.5rem;\n  width: 35px;\n  left: -295px;\n  bottom: 55px;\n}\n\n.modal-edit-todo label {\n  text-align: center;\n}\n\n.modal-edit-todo h1 {\n  font-size: 2.5rem;\n}\n\n/* styles for delete btn for todo modal */\n.modal-for-delete-btn-todo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white;\n}\n\n.flex-for-delete-btn-modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em;\n}\n\n.overlay-for-todo-delete-btn {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.modal-for-delete-btn-todo {\n  z-index: 2;\n}\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */\n/* shrink the size of the main content todo items when page resizes so no content can overflow */\n@media (max-width: 400px) {\n  body {\n    display: flex;\n    flex-direction: column;\n  }\n  .header-title-text-to-do-list {\n    font-size: 1.5rem;\n  }\n  main {\n    width: auto;\n    height: auto;\n    padding: 25px;\n  }\n  nav {\n    width: auto;\n    height: auto;\n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  }\n  #form-tag-for-modal {\n    position: fixed;\n    left: 0%;\n    bottom: 50%;\n    width: 2em;\n  }\n  .modal-header-text {\n    font-size: 1.5rem;\n  }\n  .modal {\n    width: 150px;\n  }\n  .modal > input {\n    width: 50px;\n  }\n}\n@media (max-width: 740px) {\n  body {\n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n    flex-direction: column;\n  }\n  main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */\n  }\n  #project-todos-container {\n    display: flex;\n    justify-content: center;\n  }\n}\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n\n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n/* font-family: 'Patua One', cursive; */\n/* grid-template-columns: 0.2fr 1fr; */\n/* grid-template-areas:\n  \"header header\"\n  \"nav main\"\n  \"nav main\"; */\n/* } */\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n/* header {\n  grid-area: header;\n}  */\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n/* position: absolute;\ntop: 80%; \nleft: 60%; \ntransform: translate(-50%, -50%);\ntext-align: center;\nbackground-color: white;\nfont-size: 1.5rem;\ndisplay: flex;\nflex-direction: column;\nheight: 50%; \nwidth: 50%; */\n/* padding: 25px;  */\n/* font-size: 3rem;\nbackground-color: white;\ncolor: black; */\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n/* .title-input-field-styles { \n  width: 100%;\n} */\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n/* .pop-up-content { \n  position: relative;\n} */\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* import \"/style.scss\"; */ \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap');\n\n\n\n.modal { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* gap: 0.4rem; */\n  width: 450px;\n  /* padding: 1.3rem; */\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  color: white;\n  z-index: 3;\n}  \n\n.modal-header-text { \n  text-align: center;\n  font-size: 2rem;\n} \n\n.Add-Project-btn { \n  /* width: 40px;  */\n  font-size: 1.5rem; \n  \n} \n\n.input-field-modal { \n  font-size: 1.5rem;\n}\n\n\n\n.close-btn { \n  position: relative;\n  /* right: 55px; */\n  font-size: 1rem; \n  width: 25px; \n  left: -210px; \n  bottom: 160px;  \n}\n\n.overlay { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: -1;\n}\n\n\n\n\n\n\nbody {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    font-family: 'Patua One', cursive;\n  grid-template-columns: 0.2fr 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\";\n}\n\nnav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  /* background-color: rgb(29, 109, 29);; */\n  background-color: darkblue;\n  border: 5px solid black;\n  height: 100vh;\n}\n\n#navbar-home-content-text, \n#navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n} \n\nheader {\n  grid-area: header;\n} \n\nmain {\n  grid-area: main;\n  width: auto;\n  /* background-color: rgb(70, 176, 218); */\n  background-color: rgb(240, 227, 227);\n}\n\n.header-container {\n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n} \n\n.header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n}\n\n#add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-family: 'Patua One', cursive;\n}  \n\n#add-project-btn:hover { \n  color: white; \n  /* background-color: rgb(29, 109, 29); */\n  background-color: darkblue;\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n} \n\n.project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n} \n\n.input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n} \n\n.btn-container { \n  display: flex;\n  gap: 1em; \n} \n\n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n} \n\n.add-btn { \n  background-color: green;\n} \n\n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%;\n  padding: 25px; \n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n}   \n\n.submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n} \n\n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}  \n\n/* .title-input-field-styles { \n  width: 100%;\n} */ \n\n.create-to-do-form-btn { \n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n}\n\n.close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n} \n\n.submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n}\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n.project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}  \n\n.main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n} \n\n/* .project-names-styles-navbar-section { \n  text-align: center;\n  color: white; \n  font-size: 3rem; \n}  */\n\n\n/* .project-name-div-styles-main { \n  font-size: 5rem; \n  text-align: center;\n  color: white; \n}  */\n\n\n#navbar-project-names-go-here { \n  font-size: 2rem; \n  color: white; \n  text-align: center;\n}\n\n.project-name-click-event-container-for-styles { \n  font-size: 3rem;\n  text-align: center;\n  color: darkblue;\n} \n\n/* .add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n} */ \n\n.delete-btn-trash-can-svg-icon-styles, \n.add-btn-svg-project-name-styles { \n  height: 1em; \n  width: 1em; \n}\n\n.add-delete-btn-for-todo-container-styles { \n  font-size: 2rem;\n  /* text-align: center; */\n  display: flex;\n  justify-content: center;\n  gap: 1em; \n}\n\n\n/* styles for add todo pop-up modal */ \n\n.modal-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.modal-todo .flex-for-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.modal-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-todo > label { \n  color: white;\n} \n\n\n.overlay-for-todo-modal { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-todo { \n  z-index: 2;\n}\n\n/* .modal-todo h1 { \n display: flex;\n justify-content: center;\n} */\n\n.close-the-todo-modal { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n\n}\n\n\n\n.modal-todo label { \n  text-align: center;\n}\n\n.modal-todo h1 { \n  font-size: 2.5rem; \n} \n\n\n/* begin edit todo modal styles here */ \n\n\n\n.modal-edit-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.4rem;\n  width: 450px;\n  padding: 1.3rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n} \n\n\n.modal-edit-todo .flex-for-edit-todo-modal { \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n} \n\n.modal-edit-todo input { \n  padding: 0.7rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 0.9em;\n} \n\n.modal-edit-todo > label { \n  color: white;\n} \n\n.overlay-for-todo-modal-edit { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n\n.modal-edit-todo { \n  z-index: 2;\n} \n\n.close-the-todo-modal-edit { \n  position: relative; \n  font-size: 1.5rem; \n  width: 35px; \n  left: -295px; \n  bottom: 55px;  \n} \n\n.modal-edit-todo label { \n  text-align: center;\n} \n\n.modal-edit-todo h1 { \n  font-size: 2.5rem;\n}\n\n\n\n\n\n/* styles for delete btn for todo modal */ \n\n.modal-for-delete-btn-todo { \n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  /* gap: 1.4rem; */\n  width: 400px;\n  padding: 1rem;\n  min-height: 250px;\n  position: absolute;\n  top: 50%;\n  left: 50%; \n  background-color: darkblue;\n  border: 1px solid black;\n  border-radius: 15px;\n  /* font-size: 1rem;  */\n  color: white; \n} \n\n.flex-for-delete-btn-modal { \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5em; \n} \n\n\n.overlay-for-todo-delete-btn { \n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n} \n\n.modal-for-delete-btn-todo { \n  z-index: 2;\n}\n\n\n\n/* media query practice working on response design, \n\nmaking sure everything looks ok on mobile, \n\nlets spend a little time, just playing around with the layout \n\nshrinking it's size */ \n\n\n/* shrink the size of the main content todo items when page resizes so no content can overflow */ \n\n@media (max-width: 400px) { \n\n  body { \n    display: flex;\n    flex-direction: column;\n  } \n\n  .header-title-text-to-do-list { \n    font-size: 1.5rem; \n  }  \n\n  main { \n    width: auto;\n    height: auto; \n    padding: 25px;\n  } \n\n  nav { \n    width: auto; \n    height: auto; \n    font-size: 1.2rem;\n    /* display: flex;\n    flex-direction: column; */\n  } \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n\n} \n\n\n@media (max-width: 740px) { \n  body { \n    display: flex;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n    flex-direction: column;\n  } \n\n  main { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */ \n  }\n\n  #project-todos-container { \n    display: flex;\n    justify-content: center;\n    \n  }\n}\n\n/* @media (max-width: 600px) { \n  body { \n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n  } \n\n  nav { \n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  } \n\n  main { \n    overflow: auto;\n    flex-wrap: wrap;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n} */\n \n/* \n@media (max-width: 400px) { \n  #form-tag-for-modal { \n    position: fixed;\n    left: 0%; \n    bottom: 50%; \n    width: 2em;\n  } \n  \n  .modal-header-text { \n    font-size: 1.5rem; \n\n  } \n\n  .modal {\n    width: 150px; \n  } \n\n  .modal > input { \n    width: 50px; \n  }\n} */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* import \"/style.scss\"; \n\n@import url('https://fonts.googleapis.com/css2?family=Noto+Rashi+Hebrew:wght@200&family=Noto+Sans+JP&family=Patua+One&family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap'); */\n\n\n/* body {\n  display: grid;\n  /* width: 100%; \n    height: 100%; */\n    /* font-family: 'Patua One', cursive; */\n  /* grid-template-columns: 0.2fr 1fr; */ \n  /* grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"nav main\"; */\n/* } */\n\n/* nav {\n  display: grid;\n  grid-template-rows: 0.5fr 1fr;\n  grid-area: nav;\n  background-color: rgb(29, 109, 29);;\n  border: 5px solid black;\n  height: 100vh;\n} */\n\n/* .navbar-home-content-text, \n.navbar-your-projects-title-text {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n  text-decoration: underline;\n}  */\n\n/* header {\n  grid-area: header;\n}  */\n\n/* main {\n  grid-area: main;\n  width: auto;\n  background-color: rgb(70, 176, 218);\n} */\n\n/* .header-container {\n  background-color: rgb(29, 109, 29);\n  grid-area: header;\n  padding: 10px;\n  border: 5px solid black;\n}  */\n\n/* .header-title-text-to-do-list { \n font-size: 5rem;\n  text-align: center; \n  text-decoration: underline;\n  color: white;\n} */\n\n/* #add-project-btn { \n  font-size: 1.5rem;\n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-family: 'Patua One', cursive;\n}   */\n\n/* #add-project-btn:hover { \n  color: white; \n  background-color: rgb(29, 109, 29);\n  border: none;\n  font-size: 2rem;\n  font-family: 'Patua One', cursive;\n}  */\n\n/* .project-input-field-container { \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}  */\n\n/* .input-field-text { \n  font-size: 1.5rem;\n  width: 240px; \n}  */\n\n/* .btn-container { \n  display: flex;\n  gap: 1em; \n}  */\n/* \n.add-btn, \n.cancel-btn { \n  font-size: 1.2rem; \n  background-color: red;\n  color: white; \n  font-family: 'Patua One', cursive;\n}  */\n\n/* .add-btn { \n  background-color: green;\n}  */\n/* \n.todo-pop-up-container{ \n  /* display: flex;\n  justify-content: center; */\n  /* position: absolute;\n  top: 80%; \n  left: 60%; \n  transform: translate(-50%, -50%);\n  text-align: center;\n  background-color: white;\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  height: 50%; \n  width: 50%; */\n  /* padding: 25px;  */\n  /* font-size: 3rem;\n  background-color: white;\n  color: black; */\n  \n\n/* .submit-task-btn-pop-up-field { \n  display: flex; \n  justify-content: center;\n  color: white;\n  background-color: black;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 5px; \n  width: auto;\n}  */\n/* \n.pop-up-content { \n  background-color: rgba(0, 0, 0, 0.6) ;\n  height: 100%; \n  width: 100%; \n  position: absolute;\n  top: 0; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}   */\n\n/* .title-input-field-styles { \n  width: 100%;\n} */\n\n/* .close-btn-to-do-input { \n  position: absolute;\n  top: -5px; \n  left: -8px; \n  background: #fff;\n  height: 20px; \n  width: 20px;\n  border-radius: 50%; \n  cursor: pointer;\n\n}  */\n\n/* .submit-task-btn-container-styles { \n  display: flex;\n  justify-content: center;\n  margin: 15px; \n} */\n\n/* .pop-up-content { \n  position: relative;\n} */\n\n/* .project-section-name-btn-div {\n  font-size: 2rem; \n  color: white;\n  text-align: center;\n}   */\n\n/* .main-content-section-project-name-div { \n  font-size: 5rem;\n  color: white; \n  text-align: center;\n}  */\n\n"],"sourceRoot":""}]);
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
  
  projectTodoContainerDisplay.style.display = "flex"; 

  projectTodoContainerDisplay.style.flexDirection = "row"; 

  projectTodoContainerDisplay.style.gap = "2em"; 

  projectTodoContainerDisplay.style.flexWrap = "wrap";


  // projectTodoContainerDisplay.style.display = "block";

  projectTodoContainerDisplay.replaceChildren(); 
  
  for (let i = 0; i < currentProject.todoItems.length; i++) { 
    // let selectedProject = currentProject.todoItems[i]; 
    let taskHolder = document.createElement("div"); 
    
    taskHolder.classList.add("task-holder-for-todo-styles");
  
    
    
    let selectedProject = currentProject.todoItems[i]; 

    getProjectId = currentProject.id

    let projectUniqueId = currentProject.id; 

    // console.log(selectedProject);

    let checkboxElement = document.createElement("input"); 

    let editElement = document.createElement("img"); 

    editElement.dataset.index = i; 

    // console.log(editElement.dataset.index);

    editElement.addEventListener("click", (e) => { 

      // e.preventDefault(); 

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

        // console.log(editTodoObject); 

        //  currentProject.todoItems.push(editTodoObject);

         // clickedTodoEditItem = currentProject.todoItems[editElement.dataset.index]; 
        
        console.log(clickedTodoEditItem);
        
        clickedTodoEditItem.title = titleInputValueEditTodo; 
        
        clickedTodoEditItem.description = descriptionInputValueEditTodo; 
        
        clickedTodoEditItem.dueDate = dueDateInputValueEditTodo; 

        clickedTodoEditItem.priority = priorityInputValueEditTodo; 

        (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

        displayCurrentProjectTodo();

        // console.log(currentProject.todoItems[editElement.dataset.index].push(x));

      })
      
    
    }) 

    editElement.src = _edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__; 

    editElement.style.height = "30px"; 

    editElement.style.width = "30px"; 

    editElement.style.backgroundColor = "white"; 

    editElement.style.marginLeft = "0.20em";

    checkboxElement.type = "checkbox"; 

    checkboxElement.style.width = "30px"; 

    checkboxElement.style.height = "30px";

    let deleteIcon = document.createElement("img"); 

    deleteIcon.id = "delete-btn-inside-todo"; 

  //   projectArray = projectArray.filter(project => project.id !== currentProject.id);
  deleteIcon.dataset.index = i; 

    deleteIcon.addEventListener("click", (e) => { 
        // taskHolder.remove();

      // console.log(selectedProject);

      currentProject.todoItems.splice(deleteIcon.dataset.index, 1);
      
      displayCurrentProjectTodo(); 

      (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  

      // console.log(e.dataset.index);

      // filter out the projects that have been deleted, 

      // someway to update projectArray, and then pass to a storage function 

      // projectArray.push(currentProject); 
      
      // projectArray = projectArray.filter(project => project.id === currentProject.id);
      // arrayStorageSetItem(projectArray);
      

      // arrayStorageSetItem(projectArray);
    }) 

    deleteIcon.src = _trash_can_icon_to_delete_project_svg__WEBPACK_IMPORTED_MODULE_4__; 

    deleteIcon.style.width = "30px";

    deleteIcon.style.backgroundColor = "white"; 

    // let currentProjectId = currentProject.id; 

    // deleteIcon.addEventListener("click", () => { 
    //   // console.log("the delete button within todo has been pressed!");
     
    // })

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

    taskHolder.style.backgroundColor = "darkblue";

    taskHolder.style.color = "white";

    taskHolder.style.lineHeight = "1em"; 

    taskHolder.style.textAlign = "center"; 

    taskHolder.style.width = "275px"; 

    taskHolder.style.border = "5px solid black";

    projectTodoContainerDisplay.append(taskHolder);
    
    // projectTodoContainerDisplay.append(checkboxElement);
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
/* harmony import */ var _cross_mark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross-mark-svgrepo-com.svg */ "./src/cross-mark-svgrepo-com.svg");
/* harmony import */ var _check_mark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check-mark-svgrepo-com.svg */ "./src/check-mark-svgrepo-com.svg");
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

/***/ "./src/check-mark-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/check-mark-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94fe27b360bec90186df.svg";

/***/ }),

/***/ "./src/cross-mark-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/cross-mark-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06610d9ef92470276b4b.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxTQUFTLEtBQUssUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFdBQVcsTUFBTSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUsseUJBQXlCLEtBQUssMEJBQTBCLEtBQUssT0FBTyxNQUFNLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFNBQVMsS0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLE9BQU8sTUFBTSxjQUFjLEtBQUssV0FBVyxNQUFNLEtBQUssYUFBYSxLQUFLLGNBQWMsS0FBSyxNQUFNLEtBQUssY0FBYyxLQUFLLFFBQVEsS0FBSyxNQUFNLEtBQUssUUFBUSxLQUFLLFFBQVEsb0RBQW9ELGtNQUFrTSxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixtQkFBbUIsd0JBQXdCLHdCQUF3Qix1QkFBdUIsYUFBYSxjQUFjLCtCQUErQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixlQUFlLEtBQUsseUJBQXlCLHVCQUF1QixvQkFBb0IsSUFBSSx1QkFBdUIscUJBQXFCLHlCQUF5QixRQUFRLHlCQUF5QixzQkFBc0IsR0FBRyxxQkFBcUIsdUJBQXVCLG9CQUFvQix1QkFBdUIsaUJBQWlCLGtCQUFrQixvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQixXQUFXLGNBQWMsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsbUNBQW1DLCtCQUErQixnQkFBZ0IsR0FBRyxvQkFBb0Isa0JBQWtCLG9CQUFvQixvQkFBb0IsMENBQTBDLHFDQUFxQyxvRkFBb0YsR0FBRyxTQUFTLGtCQUFrQixrQ0FBa0MsbUJBQW1CLDRDQUE0QyxpQ0FBaUMsNEJBQTRCLGtCQUFrQixHQUFHLG1FQUFtRSxpQkFBaUIsdUJBQXVCLG9CQUFvQiwrQkFBK0IsSUFBSSxZQUFZLHNCQUFzQixJQUFJLFVBQVUsb0JBQW9CLGdCQUFnQiw0Q0FBNEMsMkNBQTJDLEdBQUcsdUJBQXVCLDJDQUEyQyxpQ0FBaUMsc0JBQXNCLGtCQUFrQiw0QkFBNEIsSUFBSSxvQ0FBb0MsbUJBQW1CLHdCQUF3QiwrQkFBK0IsaUJBQWlCLEdBQUcsdUJBQXVCLHNCQUFzQixrQkFBa0IsMkNBQTJDLGlDQUFpQyxpQkFBaUIsc0NBQXNDLEtBQUssNkJBQTZCLGtCQUFrQiwyQ0FBMkMsaUNBQWlDLGlCQUFpQixvQkFBb0Isc0NBQXNDLElBQUkscUNBQXFDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixlQUFlLElBQUksd0JBQXdCLHNCQUFzQixrQkFBa0IsSUFBSSxxQkFBcUIsa0JBQWtCLGNBQWMsSUFBSSw4QkFBOEIsdUJBQXVCLDBCQUEwQixrQkFBa0Isc0NBQXNDLElBQUksZUFBZSw0QkFBNEIsSUFBSSw0QkFBNEIscUJBQXFCLDZCQUE2Qix5QkFBeUIsY0FBYyxlQUFlLHFDQUFxQyx1QkFBdUIsNEJBQTRCLHNCQUFzQixrQkFBa0IsMkJBQTJCLGlCQUFpQixlQUFlLG1CQUFtQix1QkFBdUIsNEJBQTRCLGtCQUFrQixRQUFRLG9DQUFvQyxtQkFBbUIsNEJBQTRCLGlCQUFpQiw0QkFBNEIsb0JBQW9CLDhCQUE4Qix3QkFBd0IsZ0JBQWdCLElBQUksc0JBQXNCLDBDQUEwQyxrQkFBa0IsaUJBQWlCLHVCQUF1QixZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEtBQUssbUNBQW1DLGdCQUFnQixJQUFJLGdDQUFnQyxvQkFBb0Isa0JBQWtCLDRCQUE0QixHQUFHLDZCQUE2Qix1QkFBdUIsZUFBZSxnQkFBZ0IscUJBQXFCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLG9CQUFvQixNQUFNLHdDQUF3QyxrQkFBa0IsNEJBQTRCLGtCQUFrQixHQUFHLHlCQUF5Qix1QkFBdUIsSUFBSSxxQ0FBcUMscUJBQXFCLGlCQUFpQix1QkFBdUIsS0FBSyw2Q0FBNkMsb0JBQW9CLGtCQUFrQix1QkFBdUIsSUFBSSw4Q0FBOEMsdUJBQXVCLGtCQUFrQixxQkFBcUIsS0FBSywyQ0FBMkMscUJBQXFCLHVCQUF1QixrQkFBa0IsS0FBSyx3Q0FBd0MscUJBQXFCLGtCQUFrQix1QkFBdUIsR0FBRyxxREFBcUQsb0JBQW9CLHVCQUF1QixvQkFBb0IsSUFBSSwwQ0FBMEMsaUJBQWlCLGdCQUFnQixJQUFJLG1GQUFtRixpQkFBaUIsZ0JBQWdCLEdBQUcsZ0RBQWdELG9CQUFvQiwyQkFBMkIsb0JBQW9CLDRCQUE0QixjQUFjLEdBQUcsK0RBQStELGtCQUFrQiwyQkFBMkIsNEJBQTRCLGdCQUFnQixpQkFBaUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsYUFBYSxlQUFlLCtCQUErQiwyQkFBMkIsd0JBQXdCLEdBQUcsdUNBQXVDLGtCQUFrQix3QkFBd0IsNEJBQTRCLGlCQUFpQixHQUFHLHdCQUF3Qix5QkFBeUIsMkJBQTJCLHVCQUF1QixxQkFBcUIsSUFBSSwwQkFBMEIsaUJBQWlCLElBQUksZ0NBQWdDLG9CQUFvQixXQUFXLGNBQWMsWUFBWSxhQUFhLGdCQUFnQixpQkFBaUIsbUNBQW1DLCtCQUErQixlQUFlLElBQUksa0JBQWtCLGVBQWUsR0FBRyx3QkFBd0IsaUJBQWlCLDJCQUEyQixJQUFJLDhCQUE4Qix3QkFBd0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsbUJBQW1CLEtBQUssNEJBQTRCLHVCQUF1QixHQUFHLHFCQUFxQix1QkFBdUIsSUFBSSx5RUFBeUUsa0JBQWtCLDJCQUEyQiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixvQkFBb0Isc0JBQXNCLHVCQUF1QixhQUFhLGVBQWUsK0JBQStCLDJCQUEyQix3QkFBd0IsSUFBSSxtREFBbUQsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLElBQUksNkJBQTZCLHlCQUF5QiwyQkFBMkIsdUJBQXVCLHFCQUFxQixJQUFJLCtCQUErQixpQkFBaUIsSUFBSSxtQ0FBbUMsb0JBQW9CLFdBQVcsY0FBYyxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixtQ0FBbUMsK0JBQStCLGVBQWUsSUFBSSx5QkFBeUIsZUFBZSxJQUFJLGlDQUFpQyx3QkFBd0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsbUJBQW1CLElBQUksNkJBQTZCLHVCQUF1QixJQUFJLDBCQUEwQixzQkFBc0IsR0FBRyx3RkFBd0Ysa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLG9CQUFvQixtQkFBbUIsa0JBQWtCLHNCQUFzQix1QkFBdUIsYUFBYSxlQUFlLCtCQUErQiw0QkFBNEIsd0JBQXdCLHlCQUF5QixvQkFBb0IsSUFBSSxpQ0FBaUMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxJQUFJLHFDQUFxQyxvQkFBb0IsV0FBVyxjQUFjLFlBQVksYUFBYSxnQkFBZ0IsaUJBQWlCLG1DQUFtQywrQkFBK0IsZUFBZSxJQUFJLGlDQUFpQyxlQUFlLEdBQUcsZ1ZBQWdWLGFBQWEsb0JBQW9CLDZCQUE2QixNQUFNLHNDQUFzQyx5QkFBeUIsT0FBTyxhQUFhLGtCQUFrQixvQkFBb0Isb0JBQW9CLE1BQU0sWUFBWSxtQkFBbUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIsOEJBQThCLFFBQVEsMEJBQTBCLHNCQUFzQixnQkFBZ0IsbUJBQW1CLGlCQUFpQixNQUFNLDZCQUE2Qix5QkFBeUIsUUFBUSxjQUFjLG9CQUFvQixNQUFNLHVCQUF1QixtQkFBbUIsS0FBSyxNQUFNLGtDQUFrQyxXQUFXLG9CQUFvQixzRUFBc0UsZ0NBQWdDLE1BQU0sYUFBYSxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIseUJBQXlCLHNFQUFzRSxRQUFRLGlDQUFpQyxvQkFBb0IsOEJBQThCLFdBQVcsR0FBRyxtQ0FBbUMsV0FBVyxvQkFBb0IsNkJBQTZCLHNCQUFzQixNQUFNLFlBQVksb0JBQW9CLDBCQUEwQixzQkFBc0IsTUFBTSxhQUFhLHFCQUFxQixzQkFBc0IsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsS0FBSyxJQUFJLHdDQUF3QywwQkFBMEIsc0JBQXNCLGdCQUFnQixtQkFBbUIsaUJBQWlCLE1BQU0sNkJBQTZCLHlCQUF5QixRQUFRLGNBQWMsb0JBQW9CLE1BQU0sdUJBQXVCLG1CQUFtQixLQUFLLElBQUkseUZBQXlGLGdNQUFnTSxpQkFBaUIsa0JBQWtCLG9CQUFvQixvQkFBb0IsOENBQThDLDJDQUEyQywyRkFBMkYsU0FBUyxjQUFjLGtCQUFrQixrQ0FBa0MsbUJBQW1CLHdDQUF3Qyw0QkFBNEIsa0JBQWtCLElBQUksd0VBQXdFLGlCQUFpQix1QkFBdUIsb0JBQW9CLCtCQUErQixLQUFLLGlCQUFpQixzQkFBc0IsS0FBSyxlQUFlLG9CQUFvQixnQkFBZ0Isd0NBQXdDLElBQUksNEJBQTRCLHVDQUF1QyxzQkFBc0Isa0JBQWtCLDRCQUE0QixLQUFLLHlDQUF5QyxtQkFBbUIsd0JBQXdCLCtCQUErQixpQkFBaUIsSUFBSSw0QkFBNEIsc0JBQXNCLGtCQUFrQix1Q0FBdUMsaUJBQWlCLHNDQUFzQyxNQUFNLGtDQUFrQyxrQkFBa0IsdUNBQXVDLGlCQUFpQixvQkFBb0Isc0NBQXNDLEtBQUssMENBQTBDLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixlQUFlLEtBQUssNkJBQTZCLHNCQUFzQixrQkFBa0IsS0FBSywwQkFBMEIsa0JBQWtCLGNBQWMsS0FBSyxtQ0FBbUMsdUJBQXVCLDBCQUEwQixrQkFBa0Isc0NBQXNDLEtBQUssb0JBQW9CLDRCQUE0QixLQUFLLGlDQUFpQyxxQkFBcUIsNkJBQTZCLDRCQUE0QixjQUFjLGVBQWUscUNBQXFDLHVCQUF1Qiw0QkFBNEIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGdCQUFnQix5QkFBeUIseUJBQXlCLDRCQUE0QixrQkFBa0IsNkNBQTZDLG1CQUFtQiw0QkFBNEIsaUJBQWlCLDRCQUE0QixvQkFBb0IsOEJBQThCLHdCQUF3QixnQkFBZ0IsS0FBSywyQkFBMkIsMENBQTBDLGtCQUFrQixpQkFBaUIsdUJBQXVCLFlBQVksa0JBQWtCLDRCQUE0Qix3QkFBd0IsTUFBTSxxQ0FBcUMsZ0JBQWdCLElBQUksa0NBQWtDLHVCQUF1QixlQUFlLGdCQUFnQixxQkFBcUIsa0JBQWtCLGdCQUFnQix3QkFBd0Isb0JBQW9CLE9BQU8sNkNBQTZDLGtCQUFrQiw0QkFBNEIsa0JBQWtCLElBQUksMkJBQTJCLHVCQUF1QixJQUFJLHdDQUF3QyxxQkFBcUIsaUJBQWlCLHVCQUF1QixNQUFNLGtEQUFrRCxvQkFBb0Isa0JBQWtCLHVCQUF1QixLQUFLLHlCQUF5QjtBQUM3c2dDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLFlBQVkseUVBQXlFOztBQUVyRjs7QUFFQTs7QUFFQTs7QUFFQSwwQkFBMEIsNEJBQTRCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DbUI7O0FBRTJCOztBQUVKOztBQUVBOztBQUV5Qjs7QUFFckI7O0FBRVE7O0FBRVM7O0FBRS9EOztBQUVBOztBQUVvRDs7QUFFcEQ7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR007O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOzs7O0FBSVAsZ0NBQWdDLDBEQUFROztBQUV4Qzs7QUFFQSxrQ0FBa0Msa0VBQVM7O0FBRTNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRSxvREFBbUI7O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7OztBQU1EOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQW1CO0FBQ3JCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsb0RBQW1COztBQUUzQjs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUwsc0JBQXNCLGtEQUFjOztBQUVwQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sb0RBQW1COztBQUV6Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxxQkFBcUIsa0VBQVM7O0FBRTlCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCLDhCQUE4QjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThMQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFVBQVU7Ozs7QUFJVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBLElBQUk7OztBQUdKOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscUNBQXFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUIsMkJBQTJCLEdBQUc7QUFDOUI7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7Ozs7QUFNQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3QkFBd0Isc0NBQXNDO0FBQzlEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsSUFBSTs7OztBQUlKOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2Qjs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9yRUE7O0FBRUE7O0FBRXNCOztBQUVGOztBQUVEOztBQUVpRjs7QUFFL0I7O0FBRUE7O0FBRXJFOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyREFBZ0IsQ0FBQyxtREFBWTs7Ozs7O0FBTTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7Ozs7O0FBT0E7Ozs7O0FBS0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGlDb0I7O0FBRXBCLFlBQVksZUFBZTs7QUFFM0IsQ0FBcUc7OztBQUd0Rjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7QUFFQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25OQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdHlsZXMuY3NzPzIzZGUiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaW1wb3J0IFxcXCIvc3R5bGUuc2Nzc1xcXCI7ICovXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAwLjRyZW07ICovXFxuICB3aWR0aDogNDUwcHg7XFxuICAvKiBwYWRkaW5nOiAxLjNyZW07ICovXFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5BZGQtUHJvamVjdC1idG4ge1xcbiAgLyogd2lkdGg6IDQwcHg7ICAqL1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5pbnB1dC1maWVsZC1tb2RhbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiByaWdodDogNTVweDsgKi9cXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgbGVmdDogLTIxMHB4O1xcbiAgYm90dG9tOiAxNjBweDtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcXCJuYXYgbWFpblxcXCIgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdmJhci1ob21lLWNvbnRlbnQtdGV4dCxcXG4jbmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMjcsIDIyNyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5pbnB1dC1maWVsZC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5hZGQtYnRuLFxcbi5jYW5jZWwtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lciB7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgwJTtcXG4gIGxlZnQ6IDYwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjVweDtcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnBvcC11cC1jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLnRpdGxlLWlucHV0LWZpZWxkLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDEwMCU7XFxufSAqL1xcbi5jcmVhdGUtdG8tZG8tZm9ybS1idG4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnRuLXRvLWRvLWlucHV0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDtcXG4gIGxlZnQ6IC04cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7XFxufVxcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG4ucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogLnByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1zaXplOiAzcmVtOyBcXG59ICAqL1xcbi8qIC5wcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluIHsgXFxuICBmb250LXNpemU6IDVyZW07IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG59ICAqL1xcbiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlcyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi8qIC5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDFlbTsgXFxuICB3aWR0aDogMWVtOyBcXG59ICovXFxuLmRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlcyxcXG4uYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlcyB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxZW07XFxufVxcblxcbi5hZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIGFkZCB0b2RvIHBvcC11cCBtb2RhbCAqL1xcbi5tb2RhbC10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwtdG9kbyAuZmxleC1mb3ItdG9kby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyA+IGxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm92ZXJsYXktZm9yLXRvZG8tbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC10b2RvIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi8qIC5tb2RhbC10b2RvIGgxIHsgXFxuIGRpc3BsYXk6IGZsZXg7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gKi9cXG4uY2xvc2UtdGhlLXRvZG8tbW9kYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMzVweDtcXG4gIGxlZnQ6IC0yOTVweDtcXG4gIGJvdHRvbTogNTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gbGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyBoMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLyogYmVnaW4gZWRpdCB0b2RvIG1vZGFsIHN0eWxlcyBoZXJlICovXFxuLm1vZGFsLWVkaXQtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyAuZmxleC1mb3ItZWRpdC10b2RvLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyA+IGxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm92ZXJsYXktZm9yLXRvZG8tbW9kYWwtZWRpdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgbGVmdDogLTI5NXB4O1xcbiAgYm90dG9tOiA1NXB4O1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10b2RvIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBoMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBkZWxldGUgYnRuIGZvciB0b2RvIG1vZGFsICovXFxuLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDEuNHJlbTsgKi9cXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAvKiBmb250LXNpemU6IDFyZW07ICAqL1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZmxleC1mb3ItZGVsZXRlLWJ0bi1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1ZW07XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi8qIG1lZGlhIHF1ZXJ5IHByYWN0aWNlIHdvcmtpbmcgb24gcmVzcG9uc2UgZGVzaWduLCBcXG5cXG5tYWtpbmcgc3VyZSBldmVyeXRoaW5nIGxvb2tzIG9rIG9uIG1vYmlsZSwgXFxuXFxubGV0cyBzcGVuZCBhIGxpdHRsZSB0aW1lLCBqdXN0IHBsYXlpbmcgYXJvdW5kIHdpdGggdGhlIGxheW91dCBcXG5cXG5zaHJpbmtpbmcgaXQncyBzaXplICovXFxuLyogc2hyaW5rIHRoZSBzaXplIG9mIHRoZSBtYWluIGNvbnRlbnQgdG9kbyBpdGVtcyB3aGVuIHBhZ2UgcmVzaXplcyBzbyBubyBjb250ZW50IGNhbiBvdmVyZmxvdyAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICB9XFxuICBuYXYge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIH1cXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICBib3R0b206IDUwJTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH1cXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcbiAgLm1vZGFsID4gaW5wdXQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovXFxuICB9XFxuICAjcHJvamVjdC10b2Rvcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxcbiAgYm9keSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBtYWluIHsgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcbn0gKi9cXG4vKiBcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHsgXFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHsgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMCU7IFxcbiAgICBib3R0b206IDUwJTsgXFxuICAgIHdpZHRoOiAyZW07XFxuICB9IFxcblxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMTUwcHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gIH1cXG59ICovXFxuLyogaW1wb3J0IFxcXCIvc3R5bGUuc2Nzc1xcXCI7IFxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rUmFzaGkrSGVicmV3OndnaHRAMjAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PVBhdHVhK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTsgKi9cXG4vKiBib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4vKiBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7ICovXFxuLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7ICovXFxuLyogZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcIm5hdiBtYWluXFxcIlxcbiAgXFxcIm5hdiBtYWluXFxcIjsgKi9cXG4vKiB9ICovXFxuLyogbmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxufSAqL1xcbi8qIC5uYXZiYXItaG9tZS1jb250ZW50LXRleHQsIFxcbi5uYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gICovXFxuLyogaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn0gICovXFxuLyogbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTc2LCAyMTgpO1xcbn0gKi9cXG4vKiAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSAgKi9cXG4vKiAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufSAqL1xcbi8qICNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgICovXFxuLyogI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG4vKiAucHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59ICAqL1xcbi8qIC5pbnB1dC1maWVsZC10ZXh0IHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNDBweDsgXFxufSAgKi9cXG4vKiAuYnRuLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtOyBcXG59ICAqL1xcbi8qIFxcbi5hZGQtYnRuLCBcXG4uY2FuY2VsLWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjJyZW07IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcbi8qIC5hZGQtYnRuIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59ICAqL1xcbi8qIFxcbi50b2RvLXBvcC11cC1jb250YWluZXJ7IFxcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbi8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDgwJTsgXFxubGVmdDogNjAlOyBcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuZm9udC1zaXplOiAxLjVyZW07XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmhlaWdodDogNTAlOyBcXG53aWR0aDogNTAlOyAqL1xcbi8qIHBhZGRpbmc6IDI1cHg7ICAqL1xcbi8qIGZvbnQtc2l6ZTogM3JlbTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7ICovXFxuLyogLnN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IGF1dG87XFxufSAgKi9cXG4vKiBcXG4ucG9wLXVwLWNvbnRlbnQgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7XFxuICBoZWlnaHQ6IDEwMCU7IFxcbiAgd2lkdGg6IDEwMCU7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAgICovXFxuLyogLnRpdGxlLWlucHV0LWZpZWxkLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDEwMCU7XFxufSAqL1xcbi8qIC5jbG9zZS1idG4tdG8tZG8taW5wdXQgeyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDsgXFxuICBsZWZ0OiAtOHB4OyBcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7IFxcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn0gICovXFxuLyogLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7IFxcbn0gKi9cXG4vKiAucG9wLXVwLWNvbnRlbnQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuLyogLnByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXYge1xcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICAgKi9cXG4vKiAubWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdiB7IFxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUFBO0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7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QUE7RUFqREY7RUFvREE7SUFDRSxlQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBbERGO0VBcURBO0lBQ0UsaUJBQUE7RUFuREY7RUF1REE7SUFDRSxZQUFBO0VBckRGO0VBd0RBO0lBQ0UsV0FBQTtFQXRERjtBQUNGO0FBMkRBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsaUVBQUE7SUFDQSxzQkFBQTtFQXpERjtFQTREQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlFQUFBO0VBMURGO0VBNkRBO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0VBM0RGO0FBQ0Y7QUErREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBbURBOzs2TEFBQTtBQUtBOzs7bUJBQUE7QUFJSSx1Q0FBQTtBQUNGLHNDQUFBO0FBQ0E7OztlQUFBO0FBSUYsTUFBQTtBQUVBOzs7Ozs7O0dBQUE7QUFTQTs7Ozs7O0lBQUE7QUFRQTs7SUFBQTtBQUlBOzs7O0dBQUE7QUFNQTs7Ozs7SUFBQTtBQU9BOzs7OztHQUFBO0FBT0E7Ozs7OztLQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7Ozs7OztJQUFBO0FBUUE7OztJQUFBO0FBS0E7OztJQUFBO0FBSUE7Ozs7Ozs7SUFBQTtBQVNBOztJQUFBO0FBR0E7Ozs0QkFBQTtBQUlFOzs7Ozs7Ozs7O2FBQUE7QUFXQSxvQkFBQTtBQUNBOztlQUFBO0FBS0Y7Ozs7Ozs7OztJQUFBO0FBVUE7Ozs7Ozs7Ozs7S0FBQTtBQVlBOztHQUFBO0FBSUE7Ozs7Ozs7Ozs7SUFBQTtBQVlBOzs7O0dBQUE7QUFNQTs7R0FBQTtBQUlBOzs7O0tBQUE7QUFNQTs7OztJQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyAqLyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuLm1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMC40cmVtOyAqL1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAzO1xcbn0gIFxcblxcbi5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn0gXFxuXFxuLkFkZC1Qcm9qZWN0LWJ0biB7IFxcbiAgLyogd2lkdGg6IDQwcHg7ICAqL1xcbiAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgXFxufSBcXG5cXG4uaW5wdXQtZmllbGQtbW9kYWwgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG5cXG4uY2xvc2UtYnRuIHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiByaWdodDogNTVweDsgKi9cXG4gIGZvbnQtc2l6ZTogMXJlbTsgXFxuICB3aWR0aDogMjVweDsgXFxuICBsZWZ0OiAtMjEwcHg7IFxcbiAgYm90dG9tOiAxNjBweDsgIFxcbn1cXG5cXG4ub3ZlcmxheSB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMWZyO1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOzsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4jbmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59IFxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59IFxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIyNywgMjI3KTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSBcXG5cXG4uaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICBcXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gXFxuXFxuLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSBcXG5cXG4uaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gXFxuXFxuLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSBcXG5cXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSBcXG5cXG4uYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSBcXG5cXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlOyBcXG4gIGxlZnQ6IDYwJTsgXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTAlOyBcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyNXB4OyBcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrOyAqL1xcbn0gICBcXG5cXG4uc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59IFxcblxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICBcXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovIFxcblxcbi5jcmVhdGUtdG8tZG8tZm9ybS1idG4geyBcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSBcXG5cXG4uc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufVxcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG5cXG4ucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gIFxcblxcbi5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gXFxuXFxuLyogLnByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1zaXplOiAzcmVtOyBcXG59ICAqL1xcblxcblxcbi8qIC5wcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluIHsgXFxuICBmb250LXNpemU6IDVyZW07IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG59ICAqL1xcblxcblxcbiNuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlIHsgXFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn0gXFxuXFxuLyogLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn0gKi8gXFxuXFxuLmRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlcywgXFxuLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMgeyBcXG4gIGhlaWdodDogMWVtOyBcXG4gIHdpZHRoOiAxZW07IFxcbn1cXG5cXG4uYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07IFxcbn1cXG5cXG5cXG4vKiBzdHlsZXMgZm9yIGFkZCB0b2RvIHBvcC11cCBtb2RhbCAqLyBcXG5cXG4ubW9kYWwtdG9kbyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwtdG9kbyAuZmxleC1mb3ItdG9kby1tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQgeyBcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufSBcXG5cXG4ubW9kYWwtdG9kbyA+IGxhYmVsIHsgXFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1tb2RhbCB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufSBcXG5cXG4ubW9kYWwtdG9kbyB7IFxcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLyogLm1vZGFsLXRvZG8gaDEgeyBcXG4gZGlzcGxheTogZmxleDtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufSAqL1xcblxcbi5jbG9zZS10aGUtdG9kby1tb2RhbCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIHdpZHRoOiAzNXB4OyBcXG4gIGxlZnQ6IC0yOTVweDsgXFxuICBib3R0b206IDU1cHg7ICBcXG5cXG59XFxuXFxuXFxuXFxuLm1vZGFsLXRvZG8gbGFiZWwgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEgeyBcXG4gIGZvbnQtc2l6ZTogMi41cmVtOyBcXG59IFxcblxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqLyBcXG5cXG5cXG5cXG4ubW9kYWwtZWRpdC10b2RvIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufSBcXG5cXG5cXG4ubW9kYWwtZWRpdC10b2RvIC5mbGV4LWZvci1lZGl0LXRvZG8tbW9kYWwgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHsgXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyA+IGxhYmVsIHsgXFxuICBjb2xvcjogd2hpdGU7XFxufSBcXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1tb2RhbC1lZGl0IHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcblxcbi5tb2RhbC1lZGl0LXRvZG8geyBcXG4gIHotaW5kZXg6IDI7XFxufSBcXG5cXG4uY2xvc2UtdGhlLXRvZG8tbW9kYWwtZWRpdCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIHdpZHRoOiAzNXB4OyBcXG4gIGxlZnQ6IC0yOTVweDsgXFxuICBib3R0b206IDU1cHg7ICBcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gbGFiZWwgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEgeyBcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBzdHlsZXMgZm9yIGRlbGV0ZSBidG4gZm9yIHRvZG8gbW9kYWwgKi8gXFxuXFxuLm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG8geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC8qIGZvbnQtc2l6ZTogMXJlbTsgICovXFxuICBjb2xvcjogd2hpdGU7IFxcbn0gXFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVlbTsgXFxufSBcXG5cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHsgXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59IFxcblxcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHsgXFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqLyBcXG5cXG5cXG4vKiBzaHJpbmsgdGhlIHNpemUgb2YgdGhlIG1haW4gY29udGVudCB0b2RvIGl0ZW1zIHdoZW4gcGFnZSByZXNpemVzIHNvIG5vIGNvbnRlbnQgY2FuIG92ZXJmbG93ICovIFxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcXG5cXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuICB9ICBcXG5cXG4gIG1haW4geyBcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gICAgaGVpZ2h0OiBhdXRvOyBcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG4gIFxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMTUwcHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gIH1cXG5cXG59IFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfSBcXG5cXG4gIG1haW4geyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7ICovIFxcbiAgfVxcblxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gIH1cXG59XFxuXFxuLyogQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxcbiAgYm9keSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbmF2IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH0gXFxuXFxuICBtYWluIHsgXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgfVxcbn0gKi9cXG4gXFxuLyogXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG4gIFxcbiAgLm1vZGFsLWhlYWRlci10ZXh0IHsgXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyBcXG5cXG4gIH0gXFxuXFxuICAubW9kYWwge1xcbiAgICB3aWR0aDogMTUwcHg7IFxcbiAgfSBcXG5cXG4gIC5tb2RhbCA+IGlucHV0IHsgXFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gIH1cXG59ICovXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogaW1wb3J0IFxcXCIvc3R5bGUuc2Nzc1xcXCI7IFxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rUmFzaGkrSGVicmV3OndnaHRAMjAwJmZhbWlseT1Ob3RvK1NhbnMrSlAmZmFtaWx5PVBhdHVhK09uZSZmYW1pbHk9UGVybWFuZW50K01hcmtlciZmYW1pbHk9Um9ib3RvOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTsgKi9cXG5cXG5cXG4vKiBib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7ICovIFxcbiAgLyogZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjsgKi9cXG4vKiB9ICovXFxuXFxuLyogbmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxufSAqL1xcblxcbi8qIC5uYXZiYXItaG9tZS1jb250ZW50LXRleHQsIFxcbi5uYXZiYXIteW91ci1wcm9qZWN0cy10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn0gICovXFxuXFxuLyogaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn0gICovXFxuXFxuLyogbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTc2LCAyMTgpO1xcbn0gKi9cXG5cXG4vKiAuaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxufSAgKi9cXG5cXG4vKiAuaGVhZGVyLXRpdGxlLXRleHQtdG8tZG8tbGlzdCB7IFxcbiBmb250LXNpemU6IDVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufSAqL1xcblxcbi8qICNhZGQtcHJvamVjdC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgICovXFxuXFxuLyogI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG5cXG4vKiAucHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59ICAqL1xcblxcbi8qIC5pbnB1dC1maWVsZC10ZXh0IHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNDBweDsgXFxufSAgKi9cXG5cXG4vKiAuYnRuLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtOyBcXG59ICAqL1xcbi8qIFxcbi5hZGQtYnRuLCBcXG4uY2FuY2VsLWJ0biB7IFxcbiAgZm9udC1zaXplOiAxLjJyZW07IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59ICAqL1xcblxcbi8qIC5hZGQtYnRuIHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59ICAqL1xcbi8qIFxcbi50b2RvLXBvcC11cC1jb250YWluZXJ7IFxcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MCU7IFxcbiAgbGVmdDogNjAlOyBcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MCU7IFxcbiAgd2lkdGg6IDUwJTsgKi9cXG4gIC8qIHBhZGRpbmc6IDI1cHg7ICAqL1xcbiAgLyogZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7ICovXFxuICBcXG5cXG4vKiAuc3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZCB7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXFxuICB3aWR0aDogYXV0bztcXG59ICAqL1xcbi8qIFxcbi5wb3AtdXAtY29udGVudCB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpIDtcXG4gIGhlaWdodDogMTAwJTsgXFxuICB3aWR0aDogMTAwJTsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICAgKi9cXG5cXG4vKiAudGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzIHsgXFxuICB3aWR0aDogMTAwJTtcXG59ICovXFxuXFxuLyogLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyBcXG4gIGxlZnQ6IC04cHg7IFxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDsgXFxuICB3aWR0aDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufSAgKi9cXG5cXG4vKiAuc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweDsgXFxufSAqL1xcblxcbi8qIC5wb3AtdXAtY29udGVudCB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn0gKi9cXG5cXG4vKiAucHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdiB7XFxuICBmb250LXNpemU6IDJyZW07IFxcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICAqL1xcblxcbi8qIC5tYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2IHsgXFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gICovXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiOyBcblxuLy8gZnVuY3Rpb24gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCkgeyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSEVZWVlcIik7XG5cbi8vICAgICAvLyBsZXQgdGhlUHJvamVjdEFycmF5ID0gYXJyO1xuXG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgLy8gICAgIGxldCBwcm9qZWN0QXJyYXlJbmRleCA9IHRoZVByb2plY3RBcnJheVtpXTsgXG5cbi8vICAgICAvLyAgICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5SW5kZXgpO1xuICAgIFxuLy8gICAgIC8vIH1cbi8vIH0gXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cbi8vIEkgYW0gZ2V0dGluZyBhIGxpdHRsZSBjb25mdXNlZCBvbiBob3cgdG8gYWRkIGNvbmRpdGlvbmFsIGxvZ2ljLCB0aGF0IHdpbGwgcHJldmVudCBhIHVzZXIgZnJvbSBhZGRpbmcgbXV0bGlwbGUgcHJvamVjdHMgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBPbmNlIHByb2plY3QgaXMgY2xpY2tlZCwgZGlzcGxheSB0aGF0IHByb2plY3QsIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCBjbGVhciB0aGUgb2xkIGFuZCBtYWtlIHdheSBmb3IgdGhlIG5ldywgXG5cbi8vIEkndmUgYmVlbiB0cnlpbmcgdG8gY2FsbCB0aGUgZnVuY3Rpb24gYmVmb3JlIHRoZSB2YWx1ZXMgYXJlIGFwcGVuZGVkLCB0byBjaGVjayBpZiBJdCdzIHNhZmUgdG8gYXBwZW5kIHRoZSB2YWx1ZSBvciBjbGVhciBhbmQgbWFrZSB3YXkgZm9yIGEgbmV3IG9uZSwgXG5cbi8vIGhvdyBjYW4gSSBwcmV2ZW50IHVzZXIgZnJvbSBjbGlja2luZyBtdWx0aXBsZSBwcm9qZWN0cywgYW5kIGFkZGluZyB0aGVtIGFsbCwgXG5cbi8vIHlvdSBjYW50IGRpc2FibGUgdGhlIGJ0biwgXG5cbi8vIHlvdSBjYW5ub3QgbWl4IHRoZSBET00gbG9naWMgYW5kIGNvbmRpdGlvbmFsIGxvZ2ljLCBcblxuLy8gdGhpbmtpbmcgY29uY2VwdHVhbGx5LCByaWdodCBub3cgdGhlIHVzZXIgY2FuIHByZXNzIHRoZSBwcm9qZWN0IG5hbWUgYW5kIGFwcGVuZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIGhvdyBjYW4gSSBqdXN0IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIGNsZWFyIHRoZSBjb250ZW50cyBvZiBvbmUgYW5kIG1ha2UgbmV3LiAiLCJcbmltcG9ydCBcIi4vc3RvcmFnZVwiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlU2V0SXRlbSBmcm9tIFwiLi9zdG9yYWdlLmpzXCIgXG5cbmltcG9ydCBnZXRJdGVtU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7IFxuXG5pbXBvcnQgIHByb2plY3ROYW1lTG9vcCBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5pbXBvcnQgcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljIGZyb20gXCIuL2NvbmRpdGlvbmFsTG9naWMuanNcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVRvZG9JdGVtcyBmcm9tIFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgcGx1c1NpZ24gZnJvbSBcIi4vcGx1cy1zaWduLWZvci10b2RvLW1vZGFsLnN2Z1wiOyBcblxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4taWNvbi10by1kZWxldGUtcHJvamVjdC5zdmdcIjtcblxuLy8gaW1wb3J0IGNyb3NzTWFya0ZvckRlbGV0ZVByb2plY3QgZnJvbSBcIi4vY3Jvc3MtbWFyay1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbi8vIGltcG9ydCBjaGVja01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2NoZWNrLW1hcmstc3ZncmVwby1jb20uc3ZnXCI7IFxuXG5pbXBvcnQgZWRpdEJ0bkZvclRvZG8gZnJvbSBcIi4vZWRpdC1zdmdyZXBvLWNvbS5zdmdcIjtcblxuLy8gaW1wb3J0IHVwZGF0ZUFycmF5U3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxubGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbmxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxubGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbEZvckVkaXRUb2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZWRpdC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWwtZWRpdFwiKVswXTsgXG5cbmxldCBlZGl0VG9kb1Rhc2tzRm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1lZGl0aW5nLXRvZG8tdGFza3NcIik7XG5cbmxldCBjdXJyZW50UHJvamVjdCBcblxuZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG5mdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5cblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7IFxuXG5cbmZ1bmN0aW9uIHByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKSB7IFxuICBcbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRFZGl0VG9kb01vZGFsUG9wVXAoKTsgXG5cblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbmZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxucHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbiBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4gIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG59KSBcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgIFxuXG5cblxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcbiAgICAvLyBwcm9qZWN0IG5hbWVcbiAgICBsZXQgcHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3RJbmRleC5wcm9qZWN0OyBcblxuICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4gICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcbiAgICBcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgfSlcblxuXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gcGx1c1NpZ247IFxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gdHJhc2hJY29uO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlc1wiKTtcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcbiAgICAgXG4gICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuICAgIH0pXG4gIH1cbn0gXG5cbiBcblxuZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSkgIFxuXG5lZGl0VG9kb1Rhc2tzRm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTsgXG5cbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuXG5sZXQgY2xvc2VCdG5FZGl0VG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1lZGl0LXRvZG8tbW9kYWwtYnRuXCIpOyBcblxuY2xvc2VCdG5FZGl0VG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbEZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn0pXG5cblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSkgXG5cblxubGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbmNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG59KSBcblxuXG5sZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbiAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbiAgbGV0IHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4gIGxldCB0YXNrSG9sZGVyU3R5bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKVswXTtcblxuICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbiAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbiAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4gIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAvLyBpdCBpcyBkZWxldGluZyBmcm9tIHN0b3JhZ2UsIGl0IGlzIGp1c3Qgbm90IFxuXG4gIC8vIGRlbGV0aW5nIHRoZSB0b2RvIGZyb20gdGhlIERPTSwgXG4gIC8vIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5yZW1vdmUoKSBcblxuICBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcbiAgXG5cbn0pICBcblxuXG5cblxuXG5sZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1jcmVhdGluZy10b2RvLXRhc2tcIik7XG5cbmZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuXG5sZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5hZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiAgeyBcbiAgXG4gIGUucHJldmVudERlZmF1bHQoKTsgXG5cblxuXG4gIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuICAvLyBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4gIC8vIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIFxuICBsZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuICBcbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb3NGb3JQcm9qZWN0KTsgXG4gIFxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG5kaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5mb3JtSW5wdXQucmVzZXQoKTtcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxufSkgICBcblxuZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbiAgXG4gIHJldHVybiB7IFxuICAgIHRpdGxlOiB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgIGR1ZURhdGU6IGR1ZURhdGUgXG4gIH0gXG4gIFxufSAgICBcblxuXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiB3aXRoaW4gdGhlIHRvZG8gZmFjdG9yeSBcbi8vIHRoYXQgdGFrZXMgdGhlIGluZGV4LCBcblxubGV0IGdldFByb2plY3RJZCBcblxubGV0IGNsaWNrZWRUb2RvRWRpdEl0ZW1cblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpIHsgXG5cbiAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuICBcbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyBcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZ2FwID0gXCIyZW1cIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG5cblxuICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMubGVuZ3RoOyBpKyspIHsgXG4gICAgLy8gbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4gICAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICBcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIik7XG4gIFxuICAgIFxuICAgIFxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4gICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcblxuICAgIGxldCBwcm9qZWN0VW5pcXVlSWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgbGV0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbiAgICBsZXQgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGVkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXggPSBpOyBcblxuICAgIC8vIGNvbnNvbGUubG9nKGVkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgZWRpdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgICBjbGlja2VkVG9kb0VkaXRJdGVtID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2VkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXhdOyBcblxuICAgICAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gICAgIFxuICAgICBsZXQgYWRkQnRuV2l0aGluVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsLWVkaXRcIik7IFxuICAgICAgXG4gICAgIGFkZEJ0bldpdGhpblRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbGV0IHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWVkaXQtaW5wdXQtZm9ybVwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kby1lZGl0XCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFzay1lZGl0XCIpLnZhbHVlOyBcblxuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2stZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGVkaXRUb2RvT2JqZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlRWRpdFRvZG8sIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvLCBkdWVEYXRlSW5wdXRWYWx1ZUVkaXRUb2RvLCBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbyk7IFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVkaXRUb2RvT2JqZWN0KTsgXG5cbiAgICAgICAgLy8gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGVkaXRUb2RvT2JqZWN0KTtcblxuICAgICAgICAgLy8gY2xpY2tlZFRvZG9FZGl0SXRlbSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4XTsgXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkVG9kb0VkaXRJdGVtKTtcbiAgICAgICAgXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0udGl0bGUgPSB0aXRsZUlucHV0VmFsdWVFZGl0VG9kbzsgXG4gICAgICAgIFxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dFZhbHVlRWRpdFRvZG87IFxuICAgICAgICBcbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbzsgXG5cbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvOyBcblxuICAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gICAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbZWRpdEVsZW1lbnQuZGF0YXNldC5pbmRleF0ucHVzaCh4KSk7XG5cbiAgICAgIH0pXG4gICAgICBcbiAgICBcbiAgICB9KSBcblxuICAgIGVkaXRFbGVtZW50LnNyYyA9IGVkaXRCdG5Gb3JUb2RvOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4gICAgZWRpdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjAuMjBlbVwiO1xuXG4gICAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSBcImNoZWNrYm94XCI7IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiO1xuXG4gICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGRlbGV0ZUljb24uaWQgPSBcImRlbGV0ZS1idG4taW5zaWRlLXRvZG9cIjsgXG5cbiAgLy8gICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBkZWxldGVJY29uLmRhdGFzZXQuaW5kZXggPSBpOyBcblxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAvLyB0YXNrSG9sZGVyLnJlbW92ZSgpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMuc3BsaWNlKGRlbGV0ZUljb24uZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICBcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbiAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YXNldC5pbmRleCk7XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgdGhlIHByb2plY3RzIHRoYXQgaGF2ZSBiZWVuIGRlbGV0ZWQsIFxuXG4gICAgICAvLyBzb21ld2F5IHRvIHVwZGF0ZSBwcm9qZWN0QXJyYXksIGFuZCB0aGVuIHBhc3MgdG8gYSBzdG9yYWdlIGZ1bmN0aW9uIFxuXG4gICAgICAvLyBwcm9qZWN0QXJyYXkucHVzaChjdXJyZW50UHJvamVjdCk7IFxuICAgICAgXG4gICAgICAvLyBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gY3VycmVudFByb2plY3QuaWQpO1xuICAgICAgLy8gYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuICAgICAgXG5cbiAgICAgIC8vIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbiAgICB9KSBcblxuICAgIGRlbGV0ZUljb24uc3JjID0gdHJhc2hJY29uOyBcblxuICAgIGRlbGV0ZUljb24uc3R5bGUud2lkdGggPSBcIjMwcHhcIjtcblxuICAgIGRlbGV0ZUljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuICAgIC8vIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gICAgLy8gZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIHRvZG8gaGFzIGJlZW4gcHJlc3NlZCFcIik7XG4gICAgIFxuICAgIC8vIH0pXG5cbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7IFxuXG4gICAgdG9kb1RpdGxlLmFwcGVuZChzZWxlY3RlZFByb2plY3QudGl0bGUpO1xuXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG5cbiAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG5cbiAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIlxuXG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgXG4gICAgdG9kb1ByaW9yaXR5LmFwcGVuZChzZWxlY3RlZFByb2plY3QucHJpb3JpdHkpO1xuICAgIFxuICAgIHRvZG9EdWVEYXRlLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZHVlRGF0ZSk7XG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvVGl0bGUpOyAgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1ByaW9yaXR5KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZSk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChkZWxldGVJY29uKTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChlZGl0RWxlbWVudCk7XG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2JsdWVcIjtcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjFlbVwiOyBcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLndpZHRoID0gXCIyNzVweFwiOyBcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUuYm9yZGVyID0gXCI1cHggc29saWQgYmxhY2tcIjtcblxuICAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQodGFza0hvbGRlcik7XG4gICAgXG4gICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuICB9ICBcblxuICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gbGV0IGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCIpOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyhkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbSk7IFxuXG4gIC8vIGxldCB0YXNrSG9sZGVyQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpWzBdOyBcblxuICAvLyAvLyBjb25zb2xlLmxvZyh0YXNrSG9sZGVyQ2xhc3MpO1xuXG4gIC8vIGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAvLyAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhlIGRlbGV0ZSBidXR0b24gd2l0aGluIHRvZG8gaGFzIGJlZW4gcHJlc3NlZCFcIik7XG4gIC8vICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdElkKTsgXG5cbiAgLy8gICAgIC8vICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LmlkLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgLy8gICBsZXQgaWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgLy8gICAgIC8vICAgaWYgKGN1cnJlbnRQcm9qZWN0SWQgPT09IGlkKSB7IFxuICAvLyAgICAgLy8gICAgIC8vIGlmIGlkJ3MgbWF0Y2ggcmVtb3ZlIHRoZSBzZWxlY3RlZCBwcm9qZWN0LCBcbiAgLy8gICAgIC8vICAgfSBlbHNlIHsgXG4gIC8vICAgICAvLyAgICAgcmV0dXJuO1xuICAvLyAgICAgLy8gICB9XG5cbiAgLy8gICAgIC8vICB9IFxuXG4gIC8vICAgICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKGZ1bmN0aW9uKG9uZVByb2plY3RJZCkgeyBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gIC8vICAgICB9KVxuICAvLyAgIH0pXG4gIFxuIH0gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuLy8gaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG4vLyBpbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuLy8gaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuLy8gaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbi8vIGltcG9ydCBhcnJheVN0b3JhZ2VUb2RvSXRlbXMgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG4vLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG4vLyBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbi8vIGxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG4vLyBsZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxuLy8gbGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbi8vIGxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxuLy8gbGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbi8vIGxldCBjdXJyZW50UHJvamVjdCBcblxuLy8gZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSBcblxuLy8gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG4vLyBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9IFxuXG4vLyBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKTtcblxuLy8gZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIH1cblxuLy8gcHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbi8vICBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4vLyAgIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG4vLyB9KSBcblxuLy8gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gfSkgXG5cblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHByb2plY3Q6IG5hbWUsXG4vLyAgICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4vLyAgICAgdG9kb0l0ZW1zOiBbXSxcbi8vICAgfVxuLy8gfSBcblxuLy8gYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbi8vICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuLy8gICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG4vLyB9KSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuLy8gICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbi8vICAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuLy8gICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4vLyAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG4gICAgXG4vLyAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbmRleDsgXG4gICAgICBcbi8vICAgICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbi8vICAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICAgICAgICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbi8vICAgICAgIH0pXG5cblxuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLnNyYyA9IFwiLi4vcGx1cy1zaWduLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlc1wiKTtcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLnNyYyA9IFwiLi4vdHJhc2hjYW4tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG4tdHJhc2gtY2FuLXN2Zy1pY29uLXN0eWxlc1wiKTtcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpOyBcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuLy8gICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcbiAgICAgXG4vLyAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuLy8gICAgIH0pXG4vLyAgIH1cbi8vIH0gXG5cbiBcblxuLy8gZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSkgIFxuXG4vLyBsZXQgY2FuY2VsQnRuQWRkVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXRoZS10b2RvLW1vZGFsXCIpWzBdO1xuXG4vLyBjYW5jZWxCdG5BZGRUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyB9KSBcblxuXG4vLyBsZXQgY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWFyay14XCIpOyBcblxuLy8gY2FuY2VsQnRuRm9yRGVsZXRlUHJvamVjdE1vZGFsWC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbi8vIH0pIFxuXG5cbi8vIGxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG4vLyBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4vLyAgIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuLy8gICBsZXQgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTtcblxuLy8gICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbi8vICAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbi8vICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4vLyAgIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4vLyAgIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuLy8gICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcblxuXG4vLyB9KSAgXG5cblxuLy8gbGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cblxuXG4vLyBsZXQgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mb3JtLWZvci1jcmVhdGluZy10b2RvLXRhc2tcIik7XG5cbi8vIGZvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cblxuLy8gYWRkQnRuVG9Eb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTsgXG5cblxuLy8gICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbi8vICAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuLy8gICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kb1wiKTsgXG5cbi8vICAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlID0gZGVzY3JpcHRpb25Gb3JUb2RvLnZhbHVlOyBcbiAgXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlKTsgXG5cbi8vICAgbGV0IGR1ZURhdGVGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgZHVlRGF0ZUZvclRvZG9WYWx1ZSA9IGR1ZURhdGVGb3JUb2RvLnZhbHVlOyBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrXCIpOyBcblxuLy8gICBsZXQgcHJpb3JpdHlGb3JUb2RvVmFsdWUgPSBwcmlvcml0eUZvclRvZG8udmFsdWU7ICBcblxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChwcmlvcml0eUZvclRvZG9WYWx1ZSk7XG5cbi8vICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0c1RvZG9zID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zOyBcblxuLy8gICAvLyBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICBcbi8vICAgbGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcbiAgXG4vLyAgIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRvZG9zRm9yUHJvamVjdCk7IFxuICBcbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuLy8gLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuLy8gfSkgICBcblxuLy8gZnVuY3Rpb24gdG9kb09iamVjdEZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyBcbi8vICAgcmV0dXJuIHsgXG4vLyAgICAgdGl0bGU6IHRpdGxlLCBcbi8vICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIFxuLy8gICAgIHByaW9yaXR5OiBwcmlvcml0eSwgXG4vLyAgICAgZHVlRGF0ZTogZHVlRGF0ZSBcbi8vICAgfVxuLy8gfSAgICAgXG5cbi8vIC8vIHByb2JsZW0gaXMgYXBwZW5kaW5nIGFuZCBkaXNwbGF5aW5nIHRvZG8gdmFsdWVzIFxuXG4vLyAvLyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gLy8gaXNzdWUgaXMgc2F2aW5nIGV2ZXJ5IHNpbmdsZSBpbnB1dCBhcyBhIG5ldyBhcnJheSBlbnRyeSwgXG5cbi8vIC8vIFxuXG4vLyBsZXQgZ2V0UHJvamVjdElkXG5cbi8vIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmdhcCA9IFwiMmVtXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG5cbi8vICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuLy8gICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gIFxuICAgIFxuLy8gICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4vLyAgICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcbiAgICBcbi8vICAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuICAgIFxuLy8gICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuICAgIFxuLy8gICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuLy8gICAgIGxldCBlZGl0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3JjID0gXCIuLi9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjAuMjBlbVwiO1xuXG5cblxuLy8gICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjsgXG5cbi8vICAgICB0b2RvVGl0bGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC50aXRsZSk7XG5cbi8vICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcblxuLy8gICAgIHRvZG9EZXNjcmlwdGlvbi5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcblxuLy8gICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiXG5cbi8vICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBcbi8vICAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5wcmlvcml0eSk7XG4gICAgXG4vLyAgICAgdG9kb0R1ZURhdGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kdWVEYXRlKTtcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9UaXRsZSk7ICBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTsgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtibHVlXCI7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxZW1cIjsgXG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS53aWR0aCA9IFwiMjc1cHhcIjsgXG5cbi8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuLy8gICAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcbi8vICAgfSBcbiAgXG4vLyAgfSBcblxuXG4vLyBwcmFjdGljZSB3aXRoIG9iamVjdHMgXG5cbi8vIGxldCBhcnJheTEgPSBbXTtcblxuLy8gY29uc3QgVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkYXRlKSB7XG4vLyAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbi8vICAgdGhpcy5kYXRlID0gZGF0ZTtcbi8vIH07XG5cbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4vLyAgIGxldCB4eXogPSBuZXcgVG9kbyhgJHtpfSB0aXRsZWAsIGkpXG4vLyAgIGFycmF5MS5wdXNoKHh5eik7XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKGFycmF5MSkgXG5cblxuLy8gcHJhY3RpY2UgbWFraW5nIG9iamVjdHMgXG5cbi8vIHB1c2hpbmcgaW50byBhbiBhcnJheSBcblxuLy8gaXRlcmF0aW5nIHRocm91Z2ggdGhlIGFycmF5LCBcblxuLy8gZ2V0IGVhY2ggZmllbGQgYnkgaXQncyBrZXksICBcblxuLy8gbGV0IG5ld0FyciA9IFtdOyBcblxuLy8gZnVuY3Rpb24gY3JlYXRpbmdPYmplY3RzKHRpdGxlLGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkgeyBcbi8vICAgY29uc3QgbmV3T2JqZWN0ID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5IH0gXG4vLyAgIG5ld0Fyci5wdXNoKG5ld09iamVjdCk7IFxuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdBcnIubGVuZ3RoOyBpKyspIHsgXG4gICBcbi8vICAgICBsZXQgdGl0bGUgPSBuZXdBcnJbMF0udGl0bGU7XG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uID0gbmV3QXJyWzBdLmRlc2NyaXB0aW9uOyBcbi8vICAgICBsZXQgZHVlRGF0ZSA9IG5ld0FyclswXS5kYXRlO1xuLy8gICAgIGxldCBwcmlvcml0eUxldmVsID0gbmV3QXJyWzBdLnByaW9yaXR5O1xuICAgIFxuICAgIFxuLy8gICB9XG4vLyB9IFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJBbGVjXCIsIFwid29ya2luZyBvbiB0b2RvLWxpc3RcIiwgXCI0LzIwLzIzXCIsIFwiSGlnaFwiKTsgIFxuXG4vLyBjcmVhdGluZ09iamVjdHMoXCJIZWxsb1wiLCBcIkNoZWNrIDEuLjJcIiwgXCI2LzIwLzIzXCIsIFwiSGlnaFwiKTsgXG5cbi8vIGdldHRpbmcgYWxsIHRoZSBrZXlzIGZyb20gdGhlIGZpcnN0IG9iaiBpbiB0aGUgYXJyYXlcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLnRpdGxlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRlc2NyaXB0aW9uKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLmRhdGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0ucHJpb3JpdHkpOyBcblxuLy8gZ2V0dGluZyBhbGwgdGhlIGtleXMgZnJvbSB0aGUgc2Vjb25kIG9iaiBpbiB0aGUgYXJyYXkgXG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS50aXRsZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5kYXRlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLnByaW9yaXR5KTsgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAvLyBpdCB3YXMgdGhlIGxvb3AsIFtpXSB3YXMgdGFraW5nIGluIGEgc2luZ2xlIHZhcmlhYmxlIFxuXG4gLy8gbm93IHdlIGhhdmUgdGhlIHRvZG8gaXRlbSB3aXRoaW4gYSBzaW5nbGUgZGl2IGFuZCBzdHlsZSBcblxuLy8gZWFjaCB0b2RvIGl0ZW0gaXMgaW5zaWRlIGl0J3Mgb3duIGRpdiwgXG5cbi8vIGVhY2ggdG9kbyBpdGVtIG5lZWRzIHRvIGJlIGluc2lkZSBvbmUgZGl2LCBcblxuLy8gTk9UIEVBQ0ggVE9ETyBJVEVNIElOU0lERSBBIERJViwgXG5cbi8vIGdldCBhbGwgdGhlIHRvZG8ncy4gXG5cblxuLy8gSSBkb250IHVuZGVyc3RhbmQgd2h5IHRoaXMgaXMgc28gZnVja2luZyBjb25mdXNpbmcsIFxuXG4vLyBpIGp1c3Qgd2FudCBlYWNoIHRvZG8gdG8gYmUgaXQncyBvd24gZGl2LCBcblxuLy8gdGhlbiBhcHBlbmQgdG8gdGhlIEZVQ0tJTkcgQ09OVEFJTkVSISEhIFxuXG4vLyB1c2UgYSBsb29wLCBnZXQgcHJvamVjdCwgYXBwZW5kIHRvIGRpdiwgdGhlbiBhcHBlbmQgdG8gc2VjdGlvbiwgXG5cbi8vIHdoeSBhcmUgdGhleSBzdGlsbCBidW5jaGVkIHRvZ2V0aGVyPz8/IFxuXG5cbi8vIGhvdyBjYW4gSSBtYWtlIGVhY2ggc2V0IG9mIHRvZG9zIGEgc2VwZXJhdGUgZGl2Pz8gXG5cbi8vIGFwcGVuZCB0aGUgdG9kbydzIHRvIGEgZGl2IHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cblxuLy8gc3R5bGUgZWFjaCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lciwgXG5cbi8vIExvb2sgb3ZlciBjb2RlLCBcblxuLy8gSSB3YW50IHRvIGRpc3BsYXkgdGhlIHRvZG8ncyBmb3IgZWFjaCBwcm9qZWN0LCBcblxuLy8gaG93IGFtIEkgYWRkaW5nIHRoZSB0b2RvJ3MsIFxuXG4vLyBzdHJpY2tseSBsb29rIGF0IHRoZSBmdW5jdGlvbiwgXG5cblxuXG5cbi8vIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cblxuXG5cblxuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRUb0RvVmFsdWVzKHByb2plY3QpIHsgXG4gIFxuLy8gICBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gICBsZXQgcHJvamVjdFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICBsZXQgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdCA9IHByb2plY3Q7IFxuXG4vLyAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5sZW5ndGg7IGkrKykgeyBcbi8vICAgLy8gICBsZXQgeCA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3RbaV07IFxuXG4vLyAgIC8vICAgY29uc29sZS5sb2coeCk7IFxuLy8gICAvLyB9XG5cbi8vICAgbGV0IGRpc3BsYXlUaXRsZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QudGl0bGU7IFxuXG4vLyAgIGxldCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LmRlc2NyaXB0aW9uOyBcblxuLy8gICBsZXQgZGlzcGxheVByaW9yaXR5ID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5wcmlvcml0eTsgXG5cbi8vICAgbGV0IGRpc3BsYXlEdWVEYXRlID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kdWVEYXRlOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVRpdGxlKTtcbiAgXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RGVzY3JpcHRpb24pOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheUR1ZURhdGUpO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5UHJpb3JpdHkpOyBcblxuXG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBvayBJIGFtIGFibGUgdG8gZ2V0IHRoZSB2YWx1ZXMsIEkgYW0gYWJsZSB0byBwcmludCB0aGUgdmFsdWVzIHRvIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgcGVybWFuZW50bHkgYWRkIHRoZXNlIHRvZG8gaXRlbXMgb250byBlYWNoIHByb2plY3QgXG5cbi8vIGFuZCBzYXZlIHRoZW0gZWFjaCB0aW1lIHNvIHRoZXkgcmVsb2FkIG9uIHJlZnJlc2g/IFxuXG4vLyBJIGNhbiBncmFiIHRoZSBjdXJyZW50IHByb2plY3QsIHRvZ2dsZSBiYWNrIGFuZCBmb3J0aCwgYmV0d2VlbiBwcm9qZWN0cyBcblxuLy8gdGhlbiBob3cgY2FuIEkgYWRkIHRoZXNlIG5ld2x5IGFkZGVkIHRvZG8ncyBiYWNrIGludG8gdGhlIGFycmF5LCBcblxuLy8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/ICBcblxuLy8gSSBhYmxlIHRvIGFkZCB0b2RvIGl0ZW1zIGludG8gYSBwcm9qZWN0LCBidXQgaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCAgdGhlbT8gXG5cbi8vIGRvIEkgbmVlZCB0byBwdXNoIHRoZW0gYmFjayBpbnRvIHRoZSBhcnJheT8gXG5cbi8vIFxuXG5cblxuXG4vLyBnZXQgYWxsIHRoZSB2YWx1ZXMsIHdpdGhpbiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBnZXQgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCB2YWx1ZXMgYXJlIHNhdmVkLCBcblxuLy8gcGFzc2VkIHRvIHRoZSBzcGVjaWZpYyBwcm9qZWN0cyB0b2RvIGFycmF5LCBcblxuLy8gYWxzbyBwYXNzZWQgdG8gc3RvcmFnZSB0b28gc28gdGhlIHRvZG8gYXJyYXkgaXMgdGhlIHNhbWUgYXMgcmVndWxhciBwcm9qZWN0IGFycmF5IFxuXG4vLyBzbyB3ZSBoYXZlIHRvIGFiaWxpdHkgdG8gZ2V0IHRoZSB2YWx1ZXMsIFxuXG4vLyBhbmQgcHVzaCB0aGVtIHRvIHRoZSBjb3JyZWN0IHByb2plY3QsIFxuXG4vLyB0aGV5IGRvIG5vdCBzYXZlLCBhbmQgY2xlYXIgdXBvbiByZWZyZXNoLiBcblxuLy8gaG93IGNhbiBJIHB1c2ggdGhlc2UgdmFsdWVzIGludG8gdGhlIGFycmF5LCBwZXJtYW5lbnRseSBzYXZlIHRoZW0sIFxuXG4vLyBhbmQgdGhlbiBkaXNwbGF5IHRoZW0/IEhvdyBjYW4gSSBkaXNwbGF5IHRoZSB0b2RvJ3M/IFxuXG4vLyBEbyBJIGhhdmUgdG8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHByb2plY3RzIGFycmF5PyBcblxuLy8gZG8gSSBoYXZlIHRvIHBhc3MgcHJvamVjdCBhcnJheSBhZ2Fpbj8gXG5cbi8vIHlvdSB3aWxsIGhhdmUgdG8gZGlzcGxheSB0aGUgcHJvamVjdHMgYWdhaW4gXG5cbi8vIHRoZSB0b2RvJ3MgYXJlIGJlaW5nIHVwZGF0ZWQgXG5cbi8vIHB1c2ggdGhlIHVwZGF0ZWQgcHJvamVjdHNBcnJheSwgYW5kIGZpbmQgYSB3YXkgdG8gZGlzcGxheSB0b2RvJ3MsXG5cbi8vIFxuXG5cblxuXG4vLyBjb25zdCBBcHAgPSAgKCgpID0+IHtcbi8vICAgLy8gbGV0IHByb2plY3RBcnJheSA9IFtdXG4vLyAgIGxldCBjdXJyZW50UHJvamVjdFxuXG4vLyAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbi8vICAgICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QgPSBjdXJyZW50UHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdC5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0LmlkKVxuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICByZXR1cm4ge3NldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdH1cbi8vIH0pKClcblxuXG5cbi8vIEhlbGxvLCBJIGFtIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0b2RvLCBJJ20gdHJ5aW5nIHRvIGltcGxlbWVudCBzb21lIGxvZ2ljIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBwcm9qZWN0IGJ0biwgaXQgd2lsbCBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgYW5kIGluIHRoZSBcInlvdXIgcHJvamVjdHNcIiBzZWN0aW9uLiBCYXNpY2FsbHkganVzdCB1c2luZyBhIGxpc3RlbmVyLCB0aGF0IHdoZW4gdGhlIHVzZXIgY29uZmlybXMgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgZGlzcGxheSwgdGhlbiByZW1vdmUgdGhlIHZhbHVlLiBUaGUgcHJvYmxlbSBpcyBJIGdldCB1bmRlZmluZWQgd2hlbiBJIHRyeSB0aGlzIGFwcHJvYWNoLCB3aGljaCBpcyBzdHJhbmdlIGJlY2F1c2UgSSdtIGdldHRpbmcgdGhlIGVsZW1lbnQsIHRoZXJlIGlzIGEgdmFsdWUgaW5zaWRlIHRoZXJlLCB0aGVuIGp1c3QgdXNpbmdyIC52YWx1ZS4gXG5cblxuXG4vLyBydW5uaW5nIGludG8gYSBwcm9ibGVtIHdpdGggdG9kbywgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBidG4gYW5kIHRoZXkgY29uZmlybSBcblxuLy8gdGhleSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSB3YW50IHRvIGRlbGV0ZSBpdCBmcm9tIG1haW4gY29udGFpbmVyIGFzIHdlbGwgYXMgdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIE5vdCBzdXJlIElmIEknbSBkb2luZyB0aGlzIHJpZ2h0IGJ1dCBJIGNhbiBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYW5kIHRoZW4gdXNlIHJlcGxhY2VDaGlsZHJlbiB0byBjbGVhciB0aGUgRE9NIF1cblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBwcmV0dHkgc3R1Y2sgb24gaG93IHRvIGRlbGV0ZSBpdCBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24/IFxuXG4vLyBCYXNpY2FsbHkgSSB0aGluayBvZiBzb21laG93IGdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIG1haW4gY29udGFpbmVyLCBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiB1c2luZyByZW1vdmVDaGlsZCB0byBkZWxldGUgdGhlIHByb2plY3QgbmFtZSBpbiBib3RoIHBsYWNlcywgXG5cblxuXG4gIFxuLy8gT0sgd2VsbCB0aGlzIGlzIG9uZSB3YXkgdG8gY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIFxuXG4vLyBidXQgaG93IGNhbiBJIGFjY2VzcyB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiBhbmQgZGVsZXRlIHRoYXQ/IFxuXG4vLyBJIG5lZWQgdG8gYWxzbyBkZWxldGUgdGhhdCBzYW1lIHByb2plY3QgbmFtZSB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbi4gbG9vayB1cCByZXBsYWNlQ2hpbGRyZW5cblxuLy8gbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZSB3aGF0IGFyZSB5b3UgcmVwbGFjaW5nIHdpdGg/IEhvdyBkbyB5b3Uga25vdyB3aGljaCBlbGVtZW50IHRvIHJlcGxhY2UgaXQgd2l0aD8gXG5cblxuXG4vLyBsZXQgY2FuY2VsQnRuQXJyYXkgPSBBcnJheS5mcm9tKGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCk7XG5cblxuXG4vLyBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyk7XG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lc0NsaWNrRXZlbnQoYXJyYXkpIHsgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KHByb2plY3RBcnJheSk7XG5cblxuXG4vLyBJIHRoaW5rIEkgTmVlZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGRvbid0IHdhbnQgdG8gaGF2ZSB0b28gbXVjaCBnb2luZyBvbiBpbiBvbmUgZnVuY3Rpb24sIFxuXG4vLyB1c2UgdGhlIHNhbWUgbG9naWMsIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5LCBcbiBcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleC5wcm9qZWN0KTtcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gb2sgbmV4dCwgcHJvamVjdCBuYW1lcyBhcmUgYmVpbmcgYWRkZWQgZHluYW1pY2FsbHksIHRoZXkgYXJlIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIHRoZSBhcnJheSBhbmQgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG5leHQgd2hlbiBJIGNsaWNrIG9uIHRoZSBwcm9qZWN0LCB0aGF0IHByb2plY3QncyBuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgY2xlYXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCwgXG5cbi8vIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgaXMgYWRkZWQgYXQgYSB0aW1lLCBzaG91bGQgbm90IGFkZCBvbnRvLiBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIGFsb25nIHdpdGggdGhlIHR3byBidG5zLCBhZGQgYW5kIGRlbGV0ZSBmb3IgdGhlIHRvZG8ncyBcblxuLy8gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIHNob3cgdGhhdCBwcm9qZWN0LCB1c2VyIGNhbm5vdCBhcHBlbmQgdGhhdCBwcm9qZWN0IG11bHRpcGxlIHRpbWVzIGJ5IGNsaWNraW5nLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gdGhpcyB3aWxsIGJlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGZpcnN0IEkgZmVlbCBsaWtlIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgZnJvbSB0aGUgYXJyYXksIGluc2lkZSB0aGUgbGlzdGVuZXIsIGxvZ2ljIHdpbGwgZ3JhYiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBhbmQgYXBwZW5kIHZhbHVlcyB0byBpdCwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIHRvIGRldGVybWluZSBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IGFkZGVkIHN1Y2ggYXMgSUQncyBtYXRjaGluZywgXG5cbi8vIGlmIElEIG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCBmcm9tIGFkZGluZyBhZ2FpbiwgZWxzZSBpZiBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJlZm9yZSB0aGUgcHJvamVjdCBuYW1lIGlzIGFwcGVuZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoYXQgbmFtZXMgaWQgbWF0Y2hlcyB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIEkgd291bGQgc2F5IGZpcnN0IGxldCdzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGNhbiBncmFiIGFsbCB0aGUgcHJvamVjdCBuYW1lcyBhbmQgSUQ/IFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0LCBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgXG5cbi8vIEknbSBub3Qgc3VyZSB5b3UgbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgc2VlbXMgbGlrZSB5b3VyIGdldHRpbmcgcHJvamVjdCB0YXJnZXQgdmFsdWUsIHdpdGggZS50YXJnZXQudGV4dENvbnRlbnQgXG5cbi8vIG5vdyBJIGJlbGlldmUgd2hhdCB5b3UgbmVlZCB0byBmaWd1cmUgb3V0IGlzIGhvdyB0byBkaXNwbGF5IHRoZSBjZXJ0YWluIHByb2plY3QsIGJhc2VkIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyByZW1lbWJlciByZXBsYWNlIHRoZSBjb250ZW50IHdpdGhpbiBtYWluIGNvbnRhaW5lciwgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSBhbGwgYmFzZWQgb24gYnRuIGNsaWNrIFxuXG4vLyB0aGluayBiYWNrIHRvIHJlc3RhdXJhbnQgcGFnZSwgXG5cbi8vIEkgc29tZWhvdyBuZWVkIHRvIHRoaW5rIHRoaXMgb3V0LCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgY29udGVudHMgb2YgcHJldmlvdXMgcHJvamVjdCBhbmQgbWFrZSB3YXkgZm9yIG5ldywgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHNvbWUgc29ydCBvZiBjb25kaXRpb25hbCwgaWYgdGhpcyBwcm9qZWN0IGlzIGNsaWNrZWQsIGNoYW5nZSB0byBhIHZhcmlhYmxlIHRoZW4gdXNlIHJlcGxhY2UgY2hpbGQuIFxuXG4vLyBpZiB0aGUgdmFyaWFibGUgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgb3IgdGhlIGRpdiwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCAgXG5cbi8vIFxuXG4vLyAtLSBob3cgdG8gbWFrZSBzdXJlIG9ubHkgdGhhdCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaXQgd2lsbCBwb3B1bGF0ZSwgd2l0aCB0aGF0IHByb2plY3QgbmFtZSwgd2lwZSB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgXG5cbi8vIC0tIHdoeSBpcyB0aGUgcHJvamVjdCdzIHNlY3Rpb24gbm90IGR5bmFtaWNhbGx5IGFkZGluZyBwcm9qZWN0cz8gSSBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZm9yIGl0IHRvIHNob3cgdXA/IFxuXG4vLyBoYW5kbGUgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZpcnN0LCBhbmQgY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG1haW4gY29udGFpbmVyIGZpcnN0LCBcblxuLy8gc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGlzIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzLCByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGNhbiBiZSBkaXNwbGF5ZWQgYXQgYSB0aW1lLCBcblxuLy8gaWYgcHJvamVjdCBjb250YWluZXIgaW5jbHVkZXMgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBzaG91bGQgaXQgYmUgc2ltaWxhciB0byByZXN0YXVyYW50IHBhZ2UsIGVhY2ggcHJvamVjdCBpcyBnaXZlbiBhIHZhcmlhYmxlLCB0aGVuIGlmIHRoYXQgcHJvamVjdCBpcyBjbGlja2VkIG9uIGl0J3MgZ2l2ZW4gYSB2YXJpYWJsZSBvciBpbmRleCwgXG5cbi8vIHRoZW4gY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QncyBJRCwgbWF0Y2hlcyB3aGF0IGlzIGluc2lkZSB0aGUgbWFpbiBjb250YWluZXIsIGlmIG5vdCBjbGlja2VkLCByZXBsYWNlIHdpdGggbmV3IGNsaWNrLCBcblxuLy8gaWYgaXQgaXMgY2xpY2tlZCBhZ2FpbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIHJlcGxhY2luZyB0aGUgY29udGVudCwgXG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aCB0aGUgcHJvamVjdHMgdW5xaXVlIElELCBpZiBwcm9qZWN0LmlkID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIHRoYXQgYnRuIGFnYWluLCBqdXN0IHJldHVybiwgXG5cbi8vIGNhbiB3ZSBnbyBiYWNrIGFuZCBsb29rIGF0IHdoYXQgeW91IGRpZCBwcmV2aW91c2x5IHdpdGggeW91ciBjb2RlP1xuXG4vLyBJIGRvbid0IHRoaW5rIGl0J3MgdGhlIHNhbWUgcHJldmlvdXNseSwgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBkaXYgaGVyZSBpbnN0ZWFkIG9mIGEgYnV0dG9uLCBcblxuLy8gSSB3YW50IHRvIGZpbmQgYSB3YXkgdGhhdCBJIGNhbiBvbmx5IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgc2hvdWxkIGFkZCBkdXBsaWNhdGVzLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIHJlcGxhY2UgY29udGVudHMgb2Ygb2xkIGFuZCB3aXBlIHRoZSBuZXcsIFxuXG4vLyBJIHRoaW5rIHRoZSBET00gRGlzcGxheSBpcyBmaW5lLCBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIGEgZnVuY3Rpb24sIGNyZWF0aW5nIGEgZGl2IHRoYXQgc3RvcmVzIHRoZSBwcm9qZWN0cyBuYW1lLCBcblxuLy8gbm93IG9uY2UgdGhlIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgbG9vcCB0aHJvdWdoIHN0b3JhZ2UsIGZpbmQgb3V0IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24gYW5kIGRpc3BsYXkncyBpdCdzIGNvbnRlbnRzLCBcblxuLy8gc3RpY2sgd2l0aCBob3cgeW91IGFyZSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgRE9NLCBcblxuLy8gaG93IHdpbGwgeW91IGFkZCB0aGluZ3MgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGRpc3BsYXkgb25seSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gbWFrZSBhIGxvb3AgZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGNvbXBhcmUgdGhlIElEIHRvIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkIG9uLCBcblxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbih2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWVJRCA9IHByb2plY3RWYWx1ZS5pZDsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gcHJvamVjdFZhbHVlW1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcblxuLy8gaGVyZSB0byB0b3Agb2YgZnVuY3Rpb24sIFxuXG5cblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgLy8gaGVyZSB0byBib3R0b20gYnJhY2tldCBcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhcik7XG5cbi8vIH1cblxuXG4vLyBmb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG4vLyAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSB2YWx1ZUluUHJvamVjdFtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3REaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICBwcm9qZWN0RGl2LmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cblxuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdWYWx1ZSk7XG5cblxuXG5cbi8vICAgLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBsZXQgcHJvamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VEYXRhKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVzKTtcbi8vICAgLy8gY29uc29sZS5sb2cocGFyc2VEYXRhKTtcbi8vICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0KTtcbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBcblxuXG5cblxuXG5cblxuXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSwgXG4vLyBhcHBlbmRzIHRoZSByZXN1bHQgdG8gdGhlIERPTS4gXG5cbi8vIGZ1bmN0aW9uIHByaW50U3RvcmFnZVRvRG9tKCkgeyBcbi8vICAgLy8gbGV0IGdldFN0b3JhZ2VJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4vLyAgIC8vIGxldCBwYXJzZWRJdGVtcyA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZUl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuXG4gXG5cbi8vICAgbGV0IG5hdlByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuLy8gICBuYXZQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoc3R1cGlkVmFsdWUpO1xuLy8gfSBcblxuXG4vLyBwcmludFN0b3JhZ2VUb0RvbSgpO1xuXG5cblxuXG5cbiAgLy8gbGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG4gIC8vIGxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuICAvLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpOyBcblxuLy8gY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuXG4vLyBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuLy8gWWVhaCwgSSB0aGluayBmb2N1c2luZyBvbiB0aGUgYmFzaWMgaWRlYSBvZiBob3cgdG8gY3JlYXRlIGEgcHJvamVjdCBhbmQgXG4vLyB0byBkaXNwbGF5IHRoZSBjb3JyZWN0IHByb2plY3Qgd2hlbiBpdHMgc2lkZWJhciBidXR0b24gaXMgY2xpY2tlZCB3b3VsZCBiZSBteSBmaXJzdCBzdGVwLiBcbi8vIFRoZW4geW91IGNhbiB0aGluayBhYm91dCB3aGF0IHNob3VsZCBiZSBvbiB0aGUgcHJvamVjdCdzIHBhZ2U6IHRoZXkgd2lsbCBuZWVkIGJ1dHRvbnMgdG8gYWRkIGEgdGFzayBhbmQgd2hhdCBub3RcblxuLy8gaGF2ZSB0aGUgdXNlciBlbnRlciBhIHByb2plY3QgbmFtZSwgYW5kIHNhdmUgdGhlIHZhbHVlLCBwYXNzIHRoYXQgdmFsdWUgdG8gc3RvcmFnZS4gXG5cbi8vIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBzYXZlZCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGQgYnRuLCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBnZXQgdGhlIGlucHV0IGZpZWxkLCBjYXB0dXJlIGl0J3MgdmFsdWUgdGhlbiBjb25zb2xlIGxvZyBpdCBcblxuLy8gdGhlIGlzc3VlIG9mIHRoZSB0ZXh0IGluIHRoZSBpbnB1dCBmaWVsZCBiZWluZyBjbGVhcmVkLCBcblxuLy8gd2VsbCBJIHdyYXBwZWQgaXQgaW5zaWRlIGEgZm9ybSB0YWcsIGl0IHdvcmtzIGJ1dCBpdCByZWZyZXNoZXMgdGhlIHBhZ2UsIEkgbWVhbiBpcyB0aGF0IGEgcHJvYmxlbSwgXG5cbi8vIEkgZ3Vlc3Mgbm93IEknbGwgd29yayBvbiBzdG9yaW5nIHRoZSBkYXRhLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgLy8gaW4gb3JkZXIgdG8gY2VudGVyIGl0IHlvdSBuZWVkIHRvIGFwcGVuZCB0aGlzIGVsZW1lbnQgXG5cbi8vICAgICAgIC8vIHRvIGFub3RoZXIgY29udGFpbmVyIFxuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlc1wiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZFwiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7IFxuXG4vLyAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBwb3BVcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBvcC11cC1jb250ZW50XCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1maWVsZC1zdHlsZXNcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTsgXG5cbi8vICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4vLyAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi10by1kby1pbnB1dFwiKVxuXG4vLyAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2Nsb3NlLWNpcmNsZS5wbmdcIjsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIHVyZ2VuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICBsZXQgdXJnZW5jeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uY2xhc3NMaXN0LmFkZChcInVyZ2VuY3ktZHJvcGRvd24tc3R5bGVzXCIpO1xuXG5cblxuLy8gICAgICAgbGV0IHVyZ2VuY3lIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCIgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiOyBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7IFxuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBkYXRlUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuLy8gICAgICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUhpZ2gpO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeU1lZGl1bSk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TG93KTsgXG5cblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVPZlRvRG9JbnB1dEZvcm0pOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudExhYmVsKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lEcm9wRG93bik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bkNvbnRhaW5lcik7IFxuXG4gICAgXG5cbi8vICAgICAgIC8vIHNob3VsZCBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXI/IFxuXG4vLyAgICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4vLyAgICAgfSkgXG5cbi8vICAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCIvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZVxuXG4vLyBpbXBvcnQgXCJzcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qc1wiOyBcblxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjsgXG5cbmltcG9ydCBjcm9zc01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2Nyb3NzLW1hcmstc3ZncmVwby1jb20uc3ZnXCI7IFxuXG5pbXBvcnQgY2hlY2tNYXJrRm9yRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9jaGVjay1tYXJrLXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxubGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG5sZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3ROYW1lTG9vcCgpIHsgICBcbmZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcblxuICAgICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuXG4gICAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG4gIFxucHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyAgXG5cblxuXG5cblxuLy8gdG9kYXksIGVkaXRpbmcgdG9kbydzIFxuXG4vLyB1c2luZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzLCBcblxuLy8gbG9vayBiYWNrIGF0IGV4YW1wbGUsIGFuZCBzZWUgaG93IHlvdSBjYW4gd29yayB0aGF0IGludG8gY3VycmVudCBjb2RlIFxuXG4vLyB0aGUgZ2V0dGVycyBhbmQgc2V0dGVycywgc2hvdWxkIHByb2JhYmx5IGJlIGluc2lkZSB5b3VyIGZhY3RvcnkgZnVuY3Rpb24gXG5cbi8vIHdoYXQgd2lsbCB3ZSBiZSBwYXNzaW5nIHRvIHRoZSBmYWN0b3J5PyBcblxuLy8gV2h5IGEgZ2V0dGVyIGFuZCBzZXR0ZXI/IEkganVzdCBuZWVkIHRvIG92ZXJ3cml0ZSB0aGUgZGF0YSBhdCB0aGF0IHBhcnRpY3VsYXIgaW5kZXggd2l0aCB0aGUgZGF0YSwgXG5cbi8vIGNhbid0IEkgcGFzcyB0aGUgdmFsdWVzIHRvIHRoZSBzYW1lIGZhY3Rvcnk/IG1ha2UgdGhlIHNhbWUgb2JqZWN0IGFuZCB0aGVuIHVzZSB0aGF0IG9iamVjdCB0byBzcGxpY2Ugb3Igb3ZlcndyaXRlIHByb3Blcml0ZXM/IFxuXG4vLyB5b3UgY2FuIHByb2JhYmx5IGRvIHRoZSBzYW1lIHByb2Nlc3MsIG1ha2UgYW4gb2JqZWN0LCBidXQgeW91IG5lZWQgdG8gb3ZlcndyaXRlIHRoYXQgdG9kbyBhbmQgdGhhdCBpbmRleCB3aXRoIHRoZSBuZXcgaW5mby4gXG5cbi8vIFxuXG5cblxuLy8gb2sgc28gYSBzZXBlcmF0ZSBtb2RhbCBpcyBjcmVhdGVkLCB3aXRoIHVuaXF1ZSBlbGVtZW50cywgIFxuXG4vLyBub3cgd2UgbXVzdCBnZXQgdGhlIHZhbHVlcyBmb3IgZWFjaCBpbnB1dCBmaWVsZCBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIGN1cnJlbnQgcHJvamVjdHMgdG9kb3MgPyBcblxuLy8gc29tZWhvdyBJIGFsc28gbmVlZCB0byBpbmNsdWRlIHRoZSBkYXRhc2V0IFxuXG5cblxuLy8gaGVyZSB3ZSBhcmUgYmFjayB3aXRoIGF2ZW5nYW5jZSBcblxuLy8gSSBhbSByZWNvdmVyaW5nLCBJJ20gZ29pbmcgdG8gZG8gYSBsaXR0bGUgd29yayB0b2RheSBcblxuLy8gc28gcmlnaHQgbm93IEkgd2FudCB0byBlZGl0IHRvZG8ncyBcblxuLy8gYnV0dG9uIGlzIGNsaWNrZWQgYW5kIHRoYXQgc2hvdWxkIGdlbmVyYXRlIGEgZm9ybSBcblxuLy8gdGhlIGZvcm0gaXMgaWRlbnRpY2FsIHRvIG1ha2luZyBhIHRvZG8sIFxuXG4vLyB5b3Ugd2lsbCBqdXN0IG5lZWQgdG8gYXNzb2NpYXRlIHRoYXQgcGFydGljdWxhciB0b2RvIFxuXG4vLyB3aXRoIGEgZGF0YXNldCwgc2ltaWxhciB0byBkZWxldGluZyBhIHRvZG8sIFxuXG4vLyBvbmNlIHRoZSBlZGl0IGJ0biBpcyBjbGlja2VkLCBnaXZlIHRoYXQgdG9kbyBhIGRhdGFzZXQgXG5cbi8vIGdlbmVyYXRlIGZvcm0sIHdoYXRldmVyIHVzZXIgZW50ZXJzLCB3aWxsIHVwZGF0ZS9vdmVyd3JpdGUgdGhlIGluZm8gXG5cbi8vIGl0IHdvbid0IGNyZWF0ZSBhIG5ldyBvbmUsIGl0IHdpbGwganVzdCB1cGRhdGUvbW9kaWZpeSBcblxuLy8geW91ciBwcmV2aW91cyBhcHByb2FjaCBJIGRvbid0IGJlbGlldmUgd2lsbCB3b3JrIFxuXG4vLyBiZWNhdXNlIHlvdSBhcmUgdHJ5aW5nIHRvIHVzZSB0aGUgc2FtZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHRoYXQgc2VlbXMgbGlrZSBpdCB3aWxsIG9ubHkgY2F1c2UgaXNzdWVzLCBcblxuLy8gbGV0cyBzZXBlcmF0ZSB0aGVtLCBtZWFuaW5nIGNvcHkgdGhlIHNldC11cCBhbmQgY29kZSBmb3IgY3JlYXRpbmcgYSB0b2RvIG1vZGFsIFxuXG4vLyBzdHlsZSBleGFjdGx5IHRoZSBzYW1lLCBcblxuLy8gYWRkIHRvZG8sIGFuZCBlZGl0IHRvZG8gYXJlIHR3byBzZXBlcmF0ZSBsaXN0ZW5lcnMsIFxuXG4vLyBvbmUgaXMgZm9yIGNyZWF0aW5nLCB0aGUgb3RoZXIgaXMgZm9yIG1vZGlmeWluZywgXG5cbi8vIGxldHMgYmVnaW4sIHRoZSBhcHByb2FjaCBzZWVtcyB2YWxpZCwgc3RhcnQgd2l0aCB0aGUgSFRNTCBcblxuLy8gYmFzaWNhbGx5IGNvcHkgdGhlIGNvZGUsIHNsaWdobHkgY2hhbmdlIGNsYXNzIG5hbWVzLCBcblxuLy8gc2FtZSBzdHlsZXMsIGh0bWwsIGNzcywgdGhlbiBncmFiIHRoZSBlbGVtZW50IGFuZCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGxvZ2ljLCBcblxuLy8gd2l0aGluIHRoZSBsaXN0ZW5lciwgd2UgYXJlIG5vdCBhZGRpbmcsIFxuXG5cblxuXG4vLyBwYXNzIHRoZSB1cGRhdGVkIGFycmF5IHRvIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIGNhbiBJIHB1c2ggdGhpbmdzIHRvIGl0LCBhZGQgdGhpbmdzIHRvIGl0LCBcblxuLy8gY2FuIEkgdXNlIGZpbHRlciwgXG5cbi8vIG9rIHNvIG5vdyBJIGNhbiBkZWxldGUgaW5kaXZpZHVhbCBwcm9qZWN0cyBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0IGFzIGEgd2hvbGUgXG5cbi8vIGhvdyBjYW4gSSByZWZsZWN0IHRoaXMgY2hhbmdlIGluIHN0b3JhZ2U/IFxuXG4vLyB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcGxhbiBvbiBob3cgSSBjYW4gbWFrZSBhbiB1cGRhdGUgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIHJpZ2h0IG5vdyBJdCBvbmx5IGRlbGV0ZXMgZnJvbSB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHVwZGF0ZSBteSBhcnJheSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIGluIHRoZSBET00/IFxuXG4vLyBjYW4gSSBsb29rIGJhY2sgbXkgZGVsZXRlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGZvciBpbnNwaXJhdGlvbj8gXG5cbi8vIHRoYXQgZGVsZXRlcyBmcm9tIGJvdGggdGhlIGFycmF5IGFuZCBpbiBzdG9yYWdlLCBcblxuLy8gZmlyc3QgY2hlY2sgdGhhdCBvdXQsIFxuXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgdmVyeSBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8gXG5cbi8vIHVzaW5nIHRoZSBcblxuLy8gY29uZnVzZWQgb24gaG93IEkgY2FuIGRlbGV0ZSBhIHNpbmdsZSB0b2RvLCBhbmQgcmVmbGVjdCBpbiB0aGUgRE9NLCBcblxuLy8gYnV0IGFsc28gaW4gc3RvcmFnZSwgSSBjYW4gcmVtb3ZlIGZyb20gRE9NLCBcblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBhIGxpdHRsZSBsb3N0IG9uIGhvdyB0byByZW1vdmUgaXQgZnJvbSBzdG9yYWdlLCBcblxuLy8gSSB3YW50IHRvIHNheSB1c2luZyBmaWx0ZXIgd291bGQgYmUgYSBnb29kIG9wdGlvbiBcblxuLy8gdG9kYXkgdGhlIGZvY3VzIGlzIGRlbGV0aW5nIGEgc2luZ2xlIHRvZG8gYW5kIHJlZmxlY3RpbmcgdGhhdCBcblxuLy8gd2l0aGluIHRoZSBzdG9yYWdlIGFuZCB3aXRoaW4gdGhlIERPTSwgXG5cbi8vIGFsc28gaWYgSSBnZXQgc3R1Y2sgb24gdGhhdCwgXG5cbi8vIGVkaXRpbmcgYSB0b2RvLCB0aGF0IGlmIHVzZXIgcHJlc3NlcyBlZGl0IGJ0biwgXG5cbi8vIGdlbmVyYXRlIHRoZSBtb2RhbCBhZ2FpbiwgYW5kIGFsbG93IHRoZSB1c2VyIHRvIGVkaXQgdGhhdCB0b2RvIFxuXG4vLyBhbmQgdGhlbiByZWZsZWN0IHRoYXQgY2hhbmdlIGluIHRoZSBET00gYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBJIHdpbGwgYXNrIHRoZSBxdWVzdGlvbiByaWdodCBhd2F5IGJlY2F1c2UgSSBhbSBzdHVjaywgXG5cbi8vIGJ1dCBzcGVuZCBhIGxpdHRsZSB0aW1lIGxvb2tpbmcgb3ZlciB0aGUgY29kZSwgXG5cblxuXG5cbi8vIEkgbWFkZSBhIG5ldyBmb2xkZXIgaW4gbXkgcmVwb3MgY2FsbGVkIHRvZG8gbGlzdC1CIFxuXG4vLyB0aGVuIEkgY2xvbmVkIHdpdGhpbiB0aGVyZSwgdGhlbiBjb3BpZWQgYWxsIG15IGNvZGUgZnJvbSBteSBtb2R1bGUgXG5cbi8vIGludG8gdGhlIG5ldyBwcm9qZWN0LCB0aGluZ3Mgc2VlbSB0byBiZSB3b3JraW5nIG9rIFxuXG4vLyBhbSBJIG9rIHRvIHB1c2ggYW5kIGNvbW1pdCBjaGFuZ2VzLCB3aWxsIHRoZXNlIGNoYW5nZXMgc3RpbGwgZ28gdG8gXG5cbi8vIHRvZG8gbGlzdC1BID8gXG5cbi8vIHJpZ2h0IG5vdyBhIHByb2JsZW0gSSBzZWUgaXMgdGhhdCBwcm9qZWN0cyBcblxuLy8gYXJlIG5vdCBiZWluZyBhZGRlZCB0byBwcm9qZWN0IDIsIFxuXG4vLyB0aGUgdG9kbydzIHdvbid0IHNob3csIGFuZCBhbnkgcHJvamVjdCB0aGF0J3Mgbm90IDEsIGVyYXNlcyBvbiByZWZyZXNoLCBcblxuXG5cblxuXG4vLyBvayBzbyB0b2RheSBpcyBhIG5ldyBkYXksIFxuXG4vLyBsb29rIGJhY2sgb3ZlciB0aGUgbWVzc2FnZXMsIGdldCBhbiBpZGVhLCBcblxuLy8gdGhlbiBncmFiIHNvbWUgb2YgeW91ciBmdW5jdGlvbnMsIFxuXG4vLyB0cnkgdG8gaW1wbGVtZW50IHRoZSBwbGFuIHRoYXQgZXggY2FtZSB1cCB3aXRoLCBcblxuLy8gcGFzcyBvYmplY3RzIGludG8gYXJyYXkgYW5kIGxvb3AgdGhydSB0aGVtLCBcblxuLy8gZmlyc3QgbG9vayBvdmVyIHRoZSBtZXNzYWdlcywgIFxuXG5cbi8vIG9rIHNvIGdvIGludG8gY29kZSBwZW4sIGNvcHkgdGhlIGRpc3BsYXkgZnVuY3Rpb24gb3ZlciwgXG5cbi8vIHRyeSB0byBtYWtlIGEgbmV3IG9iamVjdCwgZWFjaCB0aW1lIHlvdSBlbnRlciBmb3JtIGRhdGEsIFxuXG4vLyB0aGVuIGFkZCB0aG9zZSBwcm9qZWN0cyB0byB0aGUgYXJyYXksIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5LCB0aGUgdW5xaXVlIHRvZG9zIGFyZSBiZWluZyBkaXNwbGF5ZWQgXG5cbi8vIG5vdyB3ZSBtdXN0IHN0eWxlIHRoZSB0b2RvJ3MgXG5cbi8vIGVhY2ggYmxvY2sgc2hvdWxkIGJlIHN0eWxlZCwgXG5cbi8vIG5vdCBhIGNvbnRhaW5lciB0aGFuIGhhcyBhIHN0eWxlIHRoYXQgaG9sZHMgZXZlcnl0aGluZywgXG5cbi8vIHRyeSB0byBtYWtlIHN1cmUgZWFjaCBzZXQgb2YgdG9kbyBpcyBhcHBlbmRlZCB0byBhIGNvbnRhaW5lciwgXG5cbi8vIHlvdSBhcmUgYXBwZW5kaW5nIGV2ZXJ5dGhpbmcgdG8gdGhhdCBzYW1lIGNvbnRhaW5lciwgXG5cbi8vIGFwcGVuZCB0byBvbmUgY29udGFpbmVyLCBzdHlsZSB0aGF0IHRoZW4gYXBwZW5kIHRvIG1haW4gY29udGFpbmVyIFxuXG5cblxuXG5cblxuXG4vLyBvayB3ZSBoYXZlIHNvbWV0aGluZyB3b3JraW5nIGhlcmUsIFxuXG4vLyB5b3UgaGF2ZSB0d28gZnVuY3Rpb25zLCBcblxuLy8gYXQgbGVhc3QgZGF0YSBpcyBiZWluZyBwcmludGVkIHRvIHRoZSBET00sIGFuZCBpcyBzdG9yaW5nIGluIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuXG4vLyBjaGVjayB5b3VyIGZ1bmN0aW9ucyBhZ2FpbiwgXG5cbi8vIHJlbWVtYmVyIG9uZSB0byBjcmVhdGUgdGhlIGVsZW1lbnRzL3N0eWxlLCBvdGhlciB0byBqdXN0IGRpc3BsYXkgdGhlIGN1cnJlbnRQcm9qZWN0cyB0b2RvJ3MgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYXBwZW5kIHZhbHVlcywgc3R5bGUsIFxuXG4vLyB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIGp1c3QgZGlzcGxheSB0aGVtLiBcblxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuXG5cbi8vIGZvciAobGV0IHRvZG8gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgIGxldCB0b2RvSXRlbSA9IHBhcnNlVG9kb0l0ZW1zOyBcblxuLy8gICAgICBsZXQgdmFsdWVJblRvZG8gPSBwYXJzZVRvZG9JdGVtc1t0b2RvSXRlbV07IFxuXG4vLyAgICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Ub2RvKTsgXG5cbi8vICAgICAgLy8gY29uc29sZS5sb2codG9kb0l0ZW0pO1xuLy8gfVxuXG4vLyBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7XG5cblxuXG5cblxuXG4vLyBzdG9yZSB0aGUgdG9kb3MgbGlrZSBJIGRpZCB3aXRoIG5hbWVzLCBcblxuLy8gbG9vcCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0YWtlIGluIHByb2plY3QsIGFkZCB0aGUgdmFsdWVzLCBcblxuLy8gcHVzaCB0aGUgcHJvamVjdCBiYWNrIGludG8gcHJvamVjdHMgYXJyYXksIGFuZCB0aGVuIFxuXG4vLyBwYXNzIHRoZSBwcm9qZWN0c0FycmF5IGJhY2sgdG8gRE9NIGZ1bmN0aW9uLCBhbmQgc3RvcmFnZSwgXG5cbi8vIGFkZCB0aGUgdG9kbydzIG9uIGEgcHJvamVjdCwgdXBkYXRlIGl0IGFnYWluIFxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZVRvZG9JdGVtcyk7XG5cblxuLy8gaG93IGNhbiBJIGtlZXAgbXkgdG9kbydzIGFmdGVyIHBhZ2UgcmVmcmVzaD8gWWVzdGVyZGF5IGl0IHNlZW1lZCBsaWtlIGl0IHdhcyBhIHByb2JsZW0gaW4gaG93IEknbSBzdG9yaW5nIHRoZW0gYW5kIGhvdyBJIHBhcnNlIHRoZW0gXG5cbi8vIGl0IHNlZW1zIGxpa2UgaXQgaXMgYSBzdG9yYWdlIHByb2JsZW0sIGhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgdG9kbyBhcnJheSB3aXRoaW4gZWFjaCBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHBhcnNlIHRoZSBkYXRhIGxpa2UgdSBkaWQgYmVmb3JlPyBcblxuXG4vLyBsZXQgZ2V0VG9kb0l0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvSXRlbXNcIik7IFxuXG4vLyBsZXQgcGFyc2VUb2RvSXRlbXMgPSBKU09OLnBhcnNlKGdldFRvZG9JdGVtcyk7IFxuXG5cbi8vIGZ1bmN0aW9uIHBhcnNlVG9kbygpIHsgXG4vLyAgICAgIGZvciAobGV0IGl0ZW0gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgICAgICAgbGV0IHRvZG8gPSBpdGVtOyBcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbi8vICAgICAgfVxuLy8gfSBcblxuLy8gcGFyc2VEYXRhKCk7XG5cblxuLy8gT0sgc28gdGhlIGRlbGV0aW5nIHByb2plY3QgbWV0aG9kIHdvcmtzISEgSSBhbSBub3cgYWJsZSB0byBkZWxldGUgYSBwcm9qZWN0IGZyb20gbWFpbiBhcyB3ZWxsIGFzIHRoZSBuYXZiYXIsIFxuXG4vLyBuZXh0IEkgZGlkIHRvIGFkZCB0aGUgbG9naWMgc28gdGhlIHVzZXIgY2FuIGFkZCB0b2RvJ3MsIFxuXG4vLyByZW1lbWJlciB0b2RvJ3MgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG9iaiBhcnJheSwgXG5cbi8vIGZpcnN0IHdlIHByb2JhYmx5IG5lZWQgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FwdHVyZSB0aGUgdmFsdWUgXG5cbi8vIG9uIGVhY2ggaW5wdXQgZmllbGQsIGxldHMgc3RhcnQgdGhlcmUsIFxuXG4vLyBhIGZ1bmN0aW9uIHdpbGwgYmUgbmVlZGVkIHRvIGdldCB0aGUgY29ycmVjdCBpbnB1dCBmaWVsZHMgXG5cbi8vIGFuZCB0aGVuIGdldCB0aGUgdmFsdWVzIGZyb20gdGhlbSwgXG5cblxuXG5cbi8vIHRoaW5raW5nIG9mIHRoZSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGRlbGV0aW5nIHByb2plY3RzLCBcblxuLy8gdGhhdCB3b3VsZCBiZSBnZXR0aW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBpbnB1dCBhbmQgXG5cbi8vIHB1c2hpbmcgdGhlbSBiYWNrIGludG8gdGhlIHRvZG8gYXJyYXkgdGhhdCBlYWNoIHByb2plY3QgY29udGFpbmVycyBcblxuLy8geW91IHdpbGwgbmVlZCBhY2Nlc3MgdG8gdGhhdCB0b2RvIGFycmF5LCB0cnkgYSBzaW1wbGUgbG9nIGZpcnN0IFxuXG4vLyBidXQgdGhlIHRvZG8ncyB3aWxsIGJlIGFkZGVkIHRvIHRoZXJlIGJ1dCBhbHNvIGl0IG5lZWRzIHRvIGJlIFxuXG4vLyByZWZsZWN0ZWQgaW4geW91ciBET00gdG9vLCBcblxuLy8gc28gdGhpbmtpbmcgb2Ygc29tZSB3YXkgdG8gYWNjZXNzIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGUgb2JqIFxuXG5cbi8vIGlmIHlvdSBjYW4gYWNjZXNzIGl0IHlvdSBhZGQgdGhlIHZhbHVlcyB0byBpdCwgXG5cbi8vIHRoZW4gb25jZSB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgcHJvcGVybHkgd2l0aGluIGVhY2ggb2JqZWN0LCBcblxuLy8geW91IHdhbnQgdG8gcmVmbGVjdCB0aGF0IGluIHRoZSBET00sIGFjY2VzcyB0aGUgdG9kbyBhbmQgZGlzcGxheSBpdCdzIHByb3BlcnRpZXMgXG5cbi8vIHRoZW4gaGF2aW5nIGEgd2F5IHRvIGRlbGV0ZSB0b2RvJ3MgYW5kIGhhdmluZyB0aGF0IHVwZGF0ZSBcblxuLy8gd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00uIFxuXG5cbi8vIGdldHRpbmcgcHJvamVjdCBJRCBcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgIFxuLy8gICAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgICBsZXQgcHJvamVjdFZhbHVlID0gcHJvamVjdEluZGV4LmlkOyBcbiAgICAgXG4vLyAgICAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSk7XG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBnZXQgdGhlIHByb2plY3QncyBJRCwgZ2V0IHRoZSBJRCdzIHdpdGhpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgYW5kIHRoZSBJRCdzIHdpdGhpbiB0aGUgbWFpbiBzZWN0aW9uLCBcblxuLy8gY3JlYXRlIGEgbG9vcCBpbnNpZGUgZWFjaCBzZWN0aW9uIGFuZCBnZXQgdGhlIHZhbHVlLCBcblxuXG5cblxuLy8gd2VsbCB5b3UgY2FuIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGFuZCB0aGUgYnRuIGNvbnRhaW5lciBmcm9tIHRoZSBET00sIFxuXG4vLyBjYW4gd2UgZmlndXJlIG91dCBhIHdheSB0byBkZWxldGUgdGhlIHByb2plY3QsIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGxldHMgdGFrZSBhIGxvb2sgYXQgaG93IHRoZSB2YWx1ZSBpcyBzdG9yZWQsIFxuXG4vLyBmaWd1cmUgb3V0IGhvdyB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgYW5kIHNlZSBpZiBzb21laG93IHlvdSAgXG5cbi8vIGdyYWIgYSB2YWx1ZSwgb3IgdGhlIGNvbnRhaW5lciBkaXYgdGhhdCBjb250YWlucyB0aGUgdmFsdWUuXG5cblxuLy8gSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHZhbHVlcyB3dGloaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCB0byB1c2UgYSBsb29wLCB0byBnZXQgYWxsIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHRoZSB2YWx1ZSdzIHRleHQgY29udGVudCBtYXRjaGVzLCBzZXQgdGhlIHRleHRDb250ZW50IHRvIFwiXCIgb3IgZGVsZXRlIHRoZSBlbGVtZW50LCBcblxuLy8gdHJ5IHRvIGxvb3AgdGhyb3VnaCB0aGUgZWxlbWVudHMgd2l0aCB0aGF0IHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHZhbHVlcyBtYXRjaCwgZGVsZXRlIHRoZSB2YWx1ZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gdGhhdCBtYXRjaGVzIG1haW4gY29udGVudHMgdmFsdWUsIFxuXG4vLyBpZCdzLCBlYWNoIHByb2plY3QgaGFzIGEgdW5xaXVlIElELCBjb21wYXJlIElEJ3MsIHdoeSBjYW50IEkgZG8sIGlmIHRoZSB0ZXh0Q29udGVudHMvc3RyaW5ncyBtYXRjaCByZW1vdmU/IFxuXG4vLyBJIGdvdCB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbWFpbiwgYW5kIGFsbCB0aGUgZWxlbWVudHMgaW4geW91ciBwcm9qZWN0cywgXG5cbi8vIGRvZXMgdGhlIHN0cmluZyBtYXRjaCB0aGUgb3RoZXIgc3RyaW5nLCBcblxuLy8gZG8gSUQncyBtYXRjaD8gXG5cblxuXG5cblxuLy8gc2FtZSBpc3N1ZSwgSSBhbSB0cnlpbmcgdG8gZ3JhYiB0aGUgdmFsdWVzLCBhbmQgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgbWFyaywgZGVsZXRlIHRoZSBwcm9qZWN0LCBcblxuLy8gZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gYm90aCBwbGFjZXMsIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBhbmQgdGhlIGxpc3Qgb24gdmFsdWVzIGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBob3cgY2FuIEkgZGVsZXRlIGJvdGggaW4gdGhlIHNhbWUgcGxhY2Ugb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBcblxuLy8ganVzdCBjaGVjayB0byBzZWUgd2hlbiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgRE9NLCBzZWUgaWYgeW91IGNhbiBhZGQgYSBjbGFzcyB0byBpdCwgXG5cblxuLy8gd2hpbGUgd2VyZSB3YWl0aW5nIGNhbiB3ZSBnZXQgdGhlIHByb2plY3RzIElEPyBcblxuLy8ganVzdCBzaW1wbHkgdHJ5IHRvIGdldCBhIHByb2plY3RzIElELiBhbmQgbG9nIGl0LCBcblxuXG5cblxuXG5cbi8vIE9LIHRvZGF5IHRoZSBnb2FsIGlzIHRvIGZpZ3VyZSBvdXQsIGhvdyB0byBkaXNhYmxlL2V4aXQgdGhlIG1vZGFsLCBhbmQgaG93IHRvIGFjdGl2YXRlIGl0IFxuXG4vLyBiYXNlZCB1cG9uIGEgYnV0dG9uIGNsaWNrLCBcblxuLy8gdGhlbiBvbmNlIHRob3NlIGFyZSBnb29kLCB0aGVuIHdlIGNhbiBmb2N1cyBvbiB0aGUgc3R5bGluZyBvZiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBsZXQncyBhZGQgdGhlIGxvZ2ljIHRoYXQgY2FuIGV4aXQgdGhlIG1vZGFsLCBcblxuLy8gZ3JhYiB0aGUgaWQgb3IgY2xhc3MgZnJvbSBIVE1MLCBhbmQgZmlyc3QgbG9nIHRoZSBlbGVtZW50IGNvcnJlY3RseSwgXG5cbi8vIHRoZW4gYWRkIGV2ZW50IGxpc3RlbmVyLCB0aGF0IHNldHMgdGhlIG1vZGFscyBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZWQgdGhlICsgaWNvbiwgc2V0IHRoZSBkaXNwbGF5IHRvIGZsZXgsIFxuXG4vLyBvayBzbyBJIGFtIGFibGUgdG8gdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBvcGVuaW5nIHRoZSBtb2RhbCBhbmQgY2xvc2luZyB0aGUgbW9kYWwsIFxuXG4vLyBub3cgeW91IHdpbGwgbmVlZCB0byBtYWtlIGxvZ2ljLCB0aGF0IHdpbGwgc2V0IHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIG1vZGFsIHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIGl0IHdpbGwgcG9wLXVwLCBjYW5jZWwgaXQgd2lsbCBub3QgZGlzcGxheSBcblxuLy8gSSB0aGluayBqdXN0IGdyYWJiaW5nIHRoZSB2YXJpYWJsZXMgYXQgdGhlIHRvcCBpcyBmaW5lLCBhbmQganVzdCBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBcblxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB3b3Jrcywgc2F2ZSBhbmQgY29tbWl0LCB0aGVuIGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgZGVsZXRlIGJ0biB3b3JraW5nLCBcblxuLy8gbm93IHdvdWxkIHByb2JhYmx5IGJlIHRoZSBiZXN0IHRpbWUgdG8gZG8gdGhhdCwgc2luY2UgdGhlIGFkZCBidG4gaXMgd29ya2luZywgbm93IHdlIGNhblxuXG4vLyB3b3JrIG9uIHRoZSBsb2dpYywgdGhhdCBvbmNlIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBhbm90aGVyIG1vZGFsLCBhc2tpbmcgdGhlIHVzZXIgXG5cbi8vIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3Q/IEl0IHdpbGwgY2xlYXIgdGhhdCBwcm9qZWN0IGZvciB0aGUgRE9NIEluIG1haW4gXG5cbi8vIGJ1dCBhbHNvIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiwgXG5cbi8vLyBzdHlsZSB0aGUgbW9kYWwsIG9uZSBidG4gdG8gY29uZmlybSBhbmQgdGhlIG90aGVyIGJ0biB0byBjYW5jZWwgdGhlIG9yZGVyLCBcblxuLy8gT2sgc28gd2UgaGF2ZSB0aGUgcHJpbnQgdmFsdWVzIHRvIHRoZSBET00gZnVuY3Rpb24sIFxuXG4vLyBpZiB1c2VyIGNsaWNrcyBwcm9qZWN0IG5hbWUsIHZhbHVlcyBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIsIFxuXG4vLyBpZiB1c2VyIHByZXNzZXMsIGFkZCBvciBkZWxldGUsIGxvZ2ljIGlzIHdpdGhpbiB0aGUgc2FtZSBmdW5jdGlvbiwgXG5cbi8vIEkgZG9uJ3Qgc2VlIHRoYXQgYmVjb21pbmcgYSBwcm9ibGVtLCBteSB0aGlua2luZyBpcyB0aGF0IGl0J3MgYmV0dGVyIHRvIGRvIHRoYXQgdGhlcmUgXG5cbi8vIHRoYW4gcGFzc2luZyB0aGUgdmFyaWFibGUgdG8gYW5vdGhlciBmdW5jdGlvbiwgbWlnaHQgYXMgd2VsbCBkbyB0aGF0IGFsbCB0aGVyZSwgXG5cbi8vIHNvIHRoZSBkZWxldGUgYnRuLCBtYWtlIHRoZSBtYXJrdXAgaW4gdGhlIEhUTUwgZmlyc3QsIGZvbGxvdyB0aGUgZ3VpZGVsaW5lcyBiZWZvcmUsIGdvIHNsb3csIFxuXG5cbi8vIG1vZGFsIGlzIHdvcmtpbmcgYnV0IGp1c3QgdHJ5aW5nIHRvIGFkZCBzcGFjZSBcbi8vIGJldHdlZW4gdGhlIGVsZW1lbnRzIHRoZSBjaGVjayBhbmQgdGhlIHgsIGVsZW1lbnQgXG5cbi8vIG9rIGdvdCB0aGUgZGVsZXRlIGJ0biBtb2RhbCB3b3JraW5nIGFzIEkgd2FudCB0bywgbmV4dCBJIHdpbGwgYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudCwgXG5cbi8vIHRoYXQgb25jZSBjbGlja2VkIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsLCBcblxuLy8gZG9udCBmb3JnZXQgdG8gYWRkIHRoZSBvdmVybGF5ISBcblxuXG5cblxuLy8gbmV4dCB3aWxsIHdvcmsgb24gZGVsZXRpbmcgYSB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrbWFyaywgaXQgc2hvdWxkIGRlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBET00sIHRoZSBhcnJheSBcblxuLy8gYW5kIEkgYmVsaWV2ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgdG9vLCB0aGVuIHdvcmsgb24gc2F2aW5nIHRvZG8gaW5mbywgZnJvbSB0aGUgbW9kYWwgYW5kIHB1c2hpbmcgaW50byB0aGUgRE9NIGFuZCBzdG9yYWdlIHdoZXJlIFxuXG4vLyBlYWNoIHByb2plY3QgaGFzIGEgbGlzdCBvZiB0b2RvJ3MsIGl0IHdpbGwgYWRkZWQgdGhlcmUgd2hpbGUgYWxzbyByZWZsZWN0aW5nIHRoYXQgaW50byB0aGUgRE9NLiBcblxuLy8geWVzIG5leHQgc3RlcCBpcyBlaXRoZXIgZGVsZXRpbmcgdGhlIHByb2plY3QsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgYnRuLCBhbmQgZ2V0dGluZyBhbGwgdGhlIHVzZXIgaW5mbyBcblxuLy8gdGhhdCB3YXMgZW50ZXJlZCBhbmQgc2F2aW5nIHRoYXQgdG9kbywgdG8gdGhlIGFycmF5IG9mIHRvZG8ncyB0aGF0IGVhY2ggcHJvamVjdCBoYXMsIFxuXG5cblxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG5cbi8vIHNvIG5vdyB3ZSBmaWd1cmVkIG91dCBob3cgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBtb3JlIHByb2plY3RzLCBcblxuLy8gYmFzY2ljYWxseSBjbGVhciB0aGUgRE9NLCB0aGVuIGFkZCBwcm9qZWN0cywgXG5cbi8vIG5vdyBhZGQgdGhlIGxvZ2ljLCB0aGF0IHdpbGwgZ2VuZXJhdGUgYSBtb2RhbCwgZm9yIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIHRvZG8sIFxuXG4vLyBmaXJzdCBJIHdvdWxkIGp1c3QgdHJ5IGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gbWF5YmUgc2VlIGlmIHlvdSBjYW4gc3BsaXQgdGhlIGNvZGUgdXAgYSBiaXQsIFxuXG4vLyBwcmludCBhIHNpbXBsZSBtZXNzYWdlIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgZmlyc3QsIFxuXG4vLyBvayB3b3JrcyBnb29kLCBub3cgc3RhcnQgY29uc3RydWN0aW5nIHlvdXIgbW9kYWwsIGZvbGxvdyBhbG9uZyB3aXRoIHRoZSBhcnRpY2xlLCBvciB2aWRlbywgXG5cbi8vIG5lZWRzIHRpdGxlLCBwcmlvcml0eSwgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBcblxuLy8gdGhvc2UgdmFsdWVzIGFyZSB0aGVuIGFkZGVkIHRvIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGF0IHNwZWNpZmljIHByb2plY3QsIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIGltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICBcbn0gIFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJyYXlTdG9yYWdlKGl0ZW0pIHsgXG4vLyAgICAgbGV0IHRoaXNQcm9qZWN0ID0gaXRlbTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdCk7XG4vLyB9XG5cblxuLy8gd2hhdCBwcm9wZXJ0aWVzIHdvdWxkIHRoZSB1cGRhdGVTdG9yYWdlIGZ1bmN0aW9uIGhhdmU/IFxuXG4vLyB3aGF0IHdvdWxkIGl0IHRha2UgaW4/IFxuXG4vLyBJIHRoaW5rIHlvdSBtaWdodCBoYXZlIHRvIHVwZGF0ZSB0aGUgYXJyYXksIFxuXG4vLyBvciBmaWx0ZXIgb3V0IHRoZSBpdGVtcyB0aGF0IHdlcmUgZGVsZXRlZCwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IHRvIHVwZGF0ZSBzdG9yYWdlLCBcblxuXG4vLyBzbyBub3cgbmV4dCwgSSBuZWVkIHRvIGZpZ3VyZSBvdXQgaG93IHRvIFxuXG4vLyB1cGRhdGUgbXkgc3RvcmFnZSBhbmQgYXJyYXkgYmFzZWQgb24gd2hlbiB1c2VyIGRlbGV0ZXMgXG5cbi8vIGEgc2luZ2xlIHRvZG8gaXRlbSwgXG5cbi8vIHNvbWV0aGluZyB3aWxsIG5lZWQgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBob3cgY2FuIHN0b3JhZ2UgcmVmbGVjdCBjaGFuZ2VzIGluIHRoZSBET00sIFxuXG4vLyBwcm9qZWN0IGlzIGRlbGV0aW5nIGZyb20gdGhlIERPTSwgYnV0IGl0IHN0aWxsIHNob3dzIGluIGFycmF5IFxuXG4vLyBhbmQgc3RpbGwgc2hvd3MgaW4gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGFmdGVyIHRoZSBwcm9qZWN0IGlzIGRlbGV0ZWQgZnJvbSB0aGUgRE9NLCBcblxuLy8gdGhlIHByaW50VmFsdWVUb0RPTSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gYmUgY2FsbGVkIGFnYWluIFxuXG4vLyBzbyB0aGF0IGNhbiByZWZsZWN0IHRoZSBsb2NhbCBzdG9yYWdlIHRvIHRoZSBET00sIFxuXG4vLyBzbyBJIHRoaW5rIHRoZSBwcm9qZWN0IGFycmF5IGlzIGdvaW5nIHRvIGJlIHBhc3NlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiB0aGUgcHJpbnR2YWx1ZSB0byBkb20gZnVuY3Rpb24gbmVlZHMgdG8gY2FsbGVkLCBzbyBzaHdvIHRvIHRoZSBET00gXG5cbi8vIHdoYXQgaXMgaW5zaWRlIGxvY2FsIHN0b3JhZ2UgXG5cbi8vIGNvbnRpbnVlIHRvIGJyYWluc3Rvcm0gaG93IHRvIHJlZmxlY3QgdGhlIGNoYW5nZSBpbiBkZWxldGluZyBcblxuLy8gcHJvamVjdHMgZnJvbSB0aGUgRE9NIGFuZCBob3cgdG8gdXBkYXRlIHRoYXQgaW4gbG9jYWwgc3RvcmFnZS4gXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVRvZG9JdGVtcyhwcm9qZWN0KSB7IFxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpOyBcbiAgICBcbi8vICB9XG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0b3JhZ2UoKSB7IFxuLy8gICBsZXQgZ2V0TmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4gIFxuLy8gICBjb25zb2xlLmxvZyhnZXROYW1lKTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqID0gcHJvamVjdE5hbWVGYWN0b3J5KGdldE5hbWUpOyBcblxuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZU9iaik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBteSBnb2FsIGlzIHRvIGhhdmUgaW5kaXZkdWFsIHByb2plY3QgbmFtZSBvYmplY3RzLCBcblxuLy8gSSBhbSBhYmxlIHRvIGNyZWF0ZSBwcm9qZWN0IG5hbWVzLCBidXQgd2hlbiBJIHVzZSBvYmplY3RzIGl0IG9ubHkgYWRkcyBvbnRvLCBhbmQgZG9lcyBub3QgY3JlYXRlIHVuaXF1ZSBwcm9qZWN0cy4gXG5cbi8vIFxuXG5cblxuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnIgPSBbXTtcblxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgICAgIGxldCBwcm9qZWN0TmFtZUlucHV0ID0gdmFsdWVbaV07IFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUlucHV0KTtcbi8vICAgICAgICAgYXJyLnB1c2gocHJvamVjdE5hbWVJbnB1dCk7XG5cbi8vICAgICB9IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycik7IFxuLy8gICAgIHJldHVybiBhcnI7IFxuLy8gfSBcblxuLy8ganVzdCBhZGQgdmFsdWVzIHRvIHRoZSBhcnJheSBcbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUodmFsdWUpIHsgXG5cbi8vICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZVN0b3JhZ2UpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7IFxuLy8gICAgIHJldHVybiB7IFxuLy8gICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdE5hbWUsXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBsZXQgbmV3UHJvamVjdCA9IG5ldyBjcmVhdGVQcm9qZWN0TmFtZShcImFsZWNcIik7IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbi8vIGxldCBnQXJyYXkgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4vLyAgICAgICAgIHJldHVybiBhcnJheTtcbi8vICAgICB9XG4vLyB9KCkpOyBcblxuLy8gZ0FycmF5KDEpOyBcbi8vIGdBcnJheSgyKTsgXG4vLyBnQXJyYXkoMyk7IFxuLy8gZ0FycmF5KDQpOyBcblxuLy8gIGZ1bmN0aW9uIHN0b3JlVXNlclZhbHVlKHZhbHVlKSB7IFxuLy8gICAgIGxldCBhcnJheSA9IFtdOyBcbi8vICAgICBjb25zb2xlLmxvZyhhcnJheSlcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gY2FsbFRoaXMgKHZhbHVlKSB7IFxuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTsgXG4vLyAgICAgICAgIHJldHVybiBhcnJheVxuLy8gICAgIH0gXG4vLyB9IFxuXG4vLyBzdG9yZVVzZXJWYWx1ZSgpO1xuXG5cblxuXG5cblxuLy8gZmluZCB3YXkgdG8gYWRkIGl0ZW1zIG9udG8gYW4gYXJyYXksIEkgZG9uJ3QgdGhpbmsgaXQncyBzbWFydCB0byBhZGQgb25lIGF0IGEgdGltZSwgYnV0IG1vcmUgc28gbGlrZSBhZGRpbmcgcHJvamVjdHMgb250byBhIHNpbmdsZSBhcnJheSBcblxuICAgIC8vIHRoaW5rIG9mIGEgd2F5IHRvIGFkZCBpbnRvIGFuIGFycmF5LCBsb29rIGludG8gY2xvc3VyZSBhbmQgYWRkaW5nIG9udG8gYW4gYXJyYXkgdXNpbmcgY2xvc3VyZS4gXG5cbiAgICAvLyBjbG9zdXJlIHNlZW1zIGxpa2UgdGhlIHJpZ2h0IGlkZWEgYnV0IGhvdyBjYW4gSSBtYWtlIHRoaXMgd29yayB3aXRoIHRoZSBjdXJyZW50IGNvZGUgSSBoYXZlPyBcblxuICAgIC8vIHdlbGwgSSB0aGluayBJIGRpZCBmaW5kIGEgd2F5IHRvIHN0b3JlIHRoZSBwcm9qZWN0IG5hbWVzLCBqdXN0IHNvbWV0aGluZyBkb2Vzbid0IHNlZW0gcmlnaHQgYWJvdXQgdGhlIHN0b3JhZ2VcblxuICAgIC8vICBcblxuLy8gdGhhdCBhcnJheSBjYW4gYmUgcGFydCBvZiBhbiBvYmosIGtleSBpbnRvIHRoZSBhcnJheVxuXG4vLyBidG4gcHJvYmxlbSwgYXBwZW5kaW5nIHRvbyBtYW55IGlucHV0IGZpZWxkcywgY29uZGl0aW9uYWwgdG8gcHJldmVudCBcblxuLy8gY29ycmVjdCBhcnJheSBzdG9yYWdlIFxuXG4vLyBsb2NhbCBzdG9yYWdlIGNvcnJlY3RseSBcbiBcbi8vIHByb3Blcmx5IGluc3RhbGxpbmcgYW5kIHVzaW5nIHNhc3MgYWZ0ZXIgdGhlIGFib3ZlIGlzIGFjY29tcGxpc2VkLiAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9