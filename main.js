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
/* harmony import */ var _cross_mark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cross-mark-svgrepo-com.svg */ "./src/cross-mark-svgrepo-com.svg");
/* harmony import */ var _check_mark_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-mark-svgrepo-com.svg */ "./src/check-mark-svgrepo-com.svg");
/* harmony import */ var _edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-svgrepo-com.svg */ "./src/edit-svgrepo-com.svg");



 

 





 

 



 

 



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

    editElement.src = _edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__; 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxTQUFTLEtBQUssUUFBUSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sUUFBUSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFdBQVcsTUFBTSxXQUFXLEtBQUss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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7Ozs7QUFNRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFtQjtBQUNyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxRQUFRLG9EQUFtQjs7QUFFM0I7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNCQUFzQixrREFBYzs7QUFFcEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLG9EQUFtQjs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUwscUJBQXFCLGtFQUFTOztBQUU5Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE2Qiw4QkFBOEI7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4TEE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCOztBQUVsRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVOzs7O0FBSVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixlQUFlLGNBQWM7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUEsTUFBTTs7O0FBR047Ozs7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL3JFQTs7QUFFQTs7QUFFc0I7O0FBRUY7O0FBRUQ7O0FBRWlGOzs7OztBQUtwRzs7QUFFQTs7QUFFZTtBQUNmOztBQUVBOztBQUVBOztBQUVBLEtBQUssd0RBQWlCOztBQUV0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQWdCLENBQUMsbURBQVk7Ozs7OztBQU03Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUEsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7Ozs7OztBQU9BOzs7OztBQUtBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxjQUFjOztBQUVkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ppQ29COztBQUVwQixZQUFZLGVBQWU7O0FBRTNCLENBQXFHOzs7QUFHdEY7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7O0FBRUEsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3R5bGVzLmNzcz8yM2RlIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2NvbmRpdGlvbmFsTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2RvbUxvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyAqL1xcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMC40cmVtOyAqL1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgLyogcGFkZGluZzogMS4zcmVtOyAqL1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uQWRkLVByb2plY3QtYnRuIHtcXG4gIC8qIHdpZHRoOiA0MHB4OyAgKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQtbW9kYWwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogcmlnaHQ6IDU1cHg7ICovXFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMjVweDtcXG4gIGxlZnQ6IC0yMTBweDtcXG4gIGJvdHRvbTogMTYwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXFwibmF2IG1haW5cXFwiIFxcXCJuYXYgbWFpblxcXCI7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7OyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNuYXZiYXItaG9tZS1jb250ZW50LXRleHQsXFxuI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICB3aWR0aDogYXV0bztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgMTc2LCAyMTgpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjI3LCAyMjcpO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3Qge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHVhIE9uZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQYXR1YSBPbmVcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uaW5wdXQtZmllbGQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdpZHRoOiAyNDBweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uYWRkLWJ0bixcXG4uY2FuY2VsLWJ0biB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0dWEgT25lXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi50b2RvLXBvcC11cC1jb250YWluZXIge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4MCU7XFxuICBsZWZ0OiA2MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICAvKiBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5wb3AtdXAtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG4uY3JlYXRlLXRvLWRvLWZvcm0tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ0bi10by1kby1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAtOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4vKiAucG9wLXVwLWNvbnRlbnQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuLnByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXYge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdiB7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIC5wcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvbiB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtc2l6ZTogM3JlbTsgXFxufSAgKi9cXG4vKiAucHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpbiB7IFxcbiAgZm9udC1zaXplOiA1cmVtOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxufSAgKi9cXG4jbmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4vKiAuYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlcyB7IFxcbiAgaGVpZ2h0OiAxZW07IFxcbiAgd2lkdGg6IDFlbTsgXFxufSAqL1xcbi5kZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXMsXFxuLmFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXMge1xcbiAgaGVpZ2h0OiAxZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG5cXG4uYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlcyB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLyogc3R5bGVzIGZvciBhZGQgdG9kbyBwb3AtdXAgbW9kYWwgKi9cXG4ubW9kYWwtdG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjRyZW07XFxuICB3aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjNyZW07XFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gLmZsZXgtZm9yLXRvZG8tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLm1vZGFsLXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiAubW9kYWwtdG9kbyBoMSB7IFxcbiBkaXNwbGF5OiBmbGV4O1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59ICovXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDM1cHg7XFxuICBsZWZ0OiAtMjk1cHg7XFxuICBib3R0b206IDU1cHg7XFxufVxcblxcbi5tb2RhbC10b2RvIGxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIGJlZ2luIGVkaXQgdG9kbyBtb2RhbCBzdHlsZXMgaGVyZSAqL1xcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gLmZsZXgtZm9yLWVkaXQtdG9kby1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtZWRpdC10b2RvIGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gPiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5vdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8ge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMzVweDtcXG4gIGxlZnQ6IC0yOTVweDtcXG4gIGJvdHRvbTogNTVweDtcXG59XFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBsYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1lZGl0LXRvZG8gaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgZGVsZXRlIGJ0biBmb3IgdG9kbyBtb2RhbCAqL1xcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogZ2FwOiAxLjRyZW07ICovXFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLyogZm9udC1zaXplOiAxcmVtOyAgKi9cXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZsZXgtZm9yLWRlbGV0ZS1idG4tbW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNWVtO1xcbn1cXG5cXG4ub3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyeSBwcmFjdGljZSB3b3JraW5nIG9uIHJlc3BvbnNlIGRlc2lnbiwgXFxuXFxubWFraW5nIHN1cmUgZXZlcnl0aGluZyBsb29rcyBvayBvbiBtb2JpbGUsIFxcblxcbmxldHMgc3BlbmQgYSBsaXR0bGUgdGltZSwganVzdCBwbGF5aW5nIGFyb3VuZCB3aXRoIHRoZSBsYXlvdXQgXFxuXFxuc2hyaW5raW5nIGl0J3Mgc2l6ZSAqL1xcbi8qIHNocmluayB0aGUgc2l6ZSBvZiB0aGUgbWFpbiBjb250ZW50IHRvZG8gaXRlbXMgd2hlbiBwYWdlIHJlc2l6ZXMgc28gbm8gY29udGVudCBjYW4gb3ZlcmZsb3cgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3Qge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIG1haW4ge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICB9XFxuICAjZm9ybS10YWctZm9yLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgYm90dG9tOiA1MCU7XFxuICAgIHdpZHRoOiAyZW07XFxuICB9XFxuICAubW9kYWwtaGVhZGVyLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5tb2RhbCB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG4gIC5tb2RhbCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqL1xcbiAgfVxcbiAgI3Byb2plY3QtdG9kb3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbWFpbiB7IFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIH1cXG59ICovXFxuLyogXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxcbiAgI2Zvcm0tdGFnLWZvci1tb2RhbCB7IFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDAlOyBcXG4gICAgYm90dG9tOiA1MCU7IFxcbiAgICB3aWR0aDogMmVtO1xcbiAgfSBcXG5cXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogNTBweDsgXFxuICB9XFxufSAqL1xcbi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7ICovXFxuLyogYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuLyogZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyOyAqL1xcbi8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCJcXG4gIFxcXCJuYXYgbWFpblxcXCI7ICovXFxuLyogfSAqL1xcbi8qIG5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn0gKi9cXG4vKiAubmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4ubmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59ICAqL1xcbi8qIGhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59ICAqL1xcbi8qIG1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTtcXG59ICovXFxuLyogLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gICovXFxuLyogLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG4vKiAjYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICAqL1xcbi8qICNhZGQtcHJvamVjdC1idG46aG92ZXIgeyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuLyogLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSAgKi9cXG4vKiAuaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gICovXFxuLyogLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSAgKi9cXG4vKiBcXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG4vKiAuYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSAgKi9cXG4vKiBcXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4vKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiA4MCU7IFxcbmxlZnQ6IDYwJTsgXFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbmZvbnQtc2l6ZTogMS41cmVtO1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5oZWlnaHQ6IDUwJTsgXFxud2lkdGg6IDUwJTsgKi9cXG4vKiBwYWRkaW5nOiAyNXB4OyAgKi9cXG4vKiBmb250LXNpemU6IDNyZW07XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY29sb3I6IGJsYWNrOyAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkIHsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gIHdpZHRoOiBhdXRvO1xcbn0gICovXFxuLyogXFxuLnBvcC11cC1jb250ZW50IHsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgO1xcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICAqL1xcbi8qIC50aXRsZS1pbnB1dC1maWVsZC1zdHlsZXMgeyBcXG4gIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG4vKiAuY2xvc2UtYnRuLXRvLWRvLWlucHV0IHsgXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC01cHg7IFxcbiAgbGVmdDogLThweDsgXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4OyBcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59ICAqL1xcbi8qIC5zdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlcyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxNXB4OyBcXG59ICovXFxuLyogLnBvcC11cC1jb250ZW50IHsgXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufSAqL1xcbi8qIC5wcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgXFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgICovXFxuLyogLm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXYgeyBcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBQTtBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtF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b0RBO0lBQ0UsZUFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQWxERjtFQXFEQTtJQUNFLGlCQUFBO0VBbkRGO0VBdURBO0lBQ0UsWUFBQTtFQXJERjtFQXdEQTtJQUNFLFdBQUE7RUF0REY7QUFDRjtBQTJEQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlFQUFBO0lBQ0Esc0JBQUE7RUF6REY7RUE0REE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpRUFBQTtFQTFERjtFQTZEQTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtFQTNERjtBQUNGO0FBK0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTtBQW1EQTs7NkxBQUE7QUFLQTs7O21CQUFBO0FBSUksdUNBQUE7QUFDRixzQ0FBQTtBQUNBOzs7ZUFBQTtBQUlGLE1BQUE7QUFFQTs7Ozs7OztHQUFBO0FBU0E7Ozs7OztJQUFBO0FBUUE7O0lBQUE7QUFJQTs7OztHQUFBO0FBTUE7Ozs7O0lBQUE7QUFPQTs7Ozs7R0FBQTtBQU9BOzs7Ozs7S0FBQTtBQVFBOzs7Ozs7SUFBQTtBQVFBOzs7Ozs7SUFBQTtBQVFBOzs7SUFBQTtBQUtBOzs7SUFBQTtBQUlBOzs7Ozs7O0lBQUE7QUFTQTs7SUFBQTtBQUdBOzs7NEJBQUE7QUFJRTs7Ozs7Ozs7OzthQUFBO0FBV0Esb0JBQUE7QUFDQTs7ZUFBQTtBQUtGOzs7Ozs7Ozs7SUFBQTtBQVVBOzs7Ozs7Ozs7O0tBQUE7QUFZQTs7R0FBQTtBQUlBOzs7Ozs7Ozs7O0lBQUE7QUFZQTs7OztHQUFBO0FBTUE7O0dBQUE7QUFJQTs7OztLQUFBO0FBTUE7Ozs7SUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBpbXBvcnQgXFxcIi9zdHlsZS5zY3NzXFxcIjsgKi8gXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytSYXNoaStIZWJyZXc6d2dodEAyMDAmZmFtaWx5PU5vdG8rU2FucytKUCZmYW1pbHk9UGF0dWErT25lJmZhbWlseT1QZXJtYW5lbnQrTWFya2VyJmZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcblxcbi5tb2RhbCB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBnYXA6IDAuNHJlbTsgKi9cXG4gIHdpZHRoOiA0NTBweDtcXG4gIC8qIHBhZGRpbmc6IDEuM3JlbTsgKi9cXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMztcXG59ICBcXG5cXG4ubW9kYWwtaGVhZGVyLXRleHQgeyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59IFxcblxcbi5BZGQtUHJvamVjdC1idG4geyBcXG4gIC8qIHdpZHRoOiA0MHB4OyAgKi9cXG4gIGZvbnQtc2l6ZTogMS41cmVtOyBcXG4gIFxcbn0gXFxuXFxuLmlucHV0LWZpZWxkLW1vZGFsIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuXFxuXFxuLmNsb3NlLWJ0biB7IFxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogcmlnaHQ6IDU1cHg7ICovXFxuICBmb250LXNpemU6IDFyZW07IFxcbiAgd2lkdGg6IDI1cHg7IFxcbiAgbGVmdDogLTIxMHB4OyBcXG4gIGJvdHRvbTogMTYwcHg7ICBcXG59XFxuXFxuLm92ZXJsYXkgeyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDFmcjtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTs7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI25hdmJhci1ob21lLWNvbnRlbnQtdGV4dCwgXFxuI25hdmJhci15b3VyLXByb2plY3RzLXRpdGxlLXRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSBcXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufSBcXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCAxNzYsIDIxOCk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMjcsIDIyNyk7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gXFxuXFxuLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgXFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTtcXG59IFxcblxcbi5wcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn0gXFxuXFxuLmlucHV0LWZpZWxkLXRleHQgeyBcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgd2lkdGg6IDI0MHB4OyBcXG59IFxcblxcbi5idG4tY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxZW07IFxcbn0gXFxuXFxuLmFkZC1idG4sIFxcbi5jYW5jZWwtYnRuIHsgXFxuICBmb250LXNpemU6IDEuMnJlbTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7IFxcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gXFxuXFxuLmFkZC1idG4geyBcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gXFxuXFxuLnRvZG8tcG9wLXVwLWNvbnRhaW5lcnsgXFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDgwJTsgXFxuICBsZWZ0OiA2MCU7IFxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwJTsgXFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjVweDsgXFxuICAvKiBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjazsgKi9cXG59ICAgXFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IGF1dG87XFxufSBcXG5cXG4ucG9wLXVwLWNvbnRlbnQgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7XFxuICBoZWlnaHQ6IDEwMCU7IFxcbiAgd2lkdGg6IDEwMCU7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAgXFxuXFxuLyogLnRpdGxlLWlucHV0LWZpZWxkLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDEwMCU7XFxufSAqLyBcXG5cXG4uY3JlYXRlLXRvLWRvLWZvcm0tYnRuIHsgXFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idG4tdG8tZG8taW5wdXQgeyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDsgXFxuICBsZWZ0OiAtOHB4OyBcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7IFxcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn0gXFxuXFxuLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7IFxcbn1cXG5cXG4vKiAucG9wLXVwLWNvbnRlbnQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuXFxuLnByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXYge1xcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICBcXG5cXG4ubWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdiB7IFxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59IFxcblxcbi8qIC5wcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvbiB7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIGZvbnQtc2l6ZTogM3JlbTsgXFxufSAgKi9cXG5cXG5cXG4vKiAucHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpbiB7IFxcbiAgZm9udC1zaXplOiA1cmVtOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxufSAgKi9cXG5cXG5cXG4jbmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZSB7IFxcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXMgeyBcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59IFxcblxcbi8qIC5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDFlbTsgXFxuICB3aWR0aDogMWVtOyBcXG59ICovIFxcblxcbi5kZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXMsIFxcbi5hZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzIHsgXFxuICBoZWlnaHQ6IDFlbTsgXFxuICB3aWR0aDogMWVtOyBcXG59XFxuXFxuLmFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXMgeyBcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtOyBcXG59XFxuXFxuXFxuLyogc3R5bGVzIGZvciBhZGQgdG9kbyBwb3AtdXAgbW9kYWwgKi8gXFxuXFxuLm1vZGFsLXRvZG8geyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNHJlbTtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuLm1vZGFsLXRvZG8gLmZsZXgtZm9yLXRvZG8tbW9kYWwgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tb2RhbC10b2RvIGlucHV0IHsgXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn0gXFxuXFxuLm1vZGFsLXRvZG8gPiBsYWJlbCB7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn0gXFxuXFxuXFxuLm92ZXJsYXktZm9yLXRvZG8tbW9kYWwgeyBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn0gXFxuXFxuLm1vZGFsLXRvZG8geyBcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi8qIC5tb2RhbC10b2RvIGgxIHsgXFxuIGRpc3BsYXk6IGZsZXg7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn0gKi9cXG5cXG4uY2xvc2UtdGhlLXRvZG8tbW9kYWwgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICBmb250LXNpemU6IDEuNXJlbTsgXFxuICB3aWR0aDogMzVweDsgXFxuICBsZWZ0OiAtMjk1cHg7IFxcbiAgYm90dG9tOiA1NXB4OyAgXFxuXFxufVxcblxcblxcblxcbi5tb2RhbC10b2RvIGxhYmVsIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC10b2RvIGgxIHsgXFxuICBmb250LXNpemU6IDIuNXJlbTsgXFxufSBcXG5cXG5cXG4vKiBiZWdpbiBlZGl0IHRvZG8gbW9kYWwgc3R5bGVzIGhlcmUgKi8gXFxuXFxuXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC40cmVtO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgbWluLWhlaWdodDogMjUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn0gXFxuXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyAuZmxleC1mb3ItZWRpdC10b2RvLW1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gXFxuXFxuLm1vZGFsLWVkaXQtdG9kbyBpbnB1dCB7IFxcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59IFxcblxcbi5tb2RhbC1lZGl0LXRvZG8gPiBsYWJlbCB7IFxcbiAgY29sb3I6IHdoaXRlO1xcbn0gXFxuXFxuLm92ZXJsYXktZm9yLXRvZG8tbW9kYWwtZWRpdCB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufSBcXG5cXG5cXG4ubW9kYWwtZWRpdC10b2RvIHsgXFxuICB6LWluZGV4OiAyO1xcbn0gXFxuXFxuLmNsb3NlLXRoZS10b2RvLW1vZGFsLWVkaXQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxuICBmb250LXNpemU6IDEuNXJlbTsgXFxuICB3aWR0aDogMzVweDsgXFxuICBsZWZ0OiAtMjk1cHg7IFxcbiAgYm90dG9tOiA1NXB4OyAgXFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvIGxhYmVsIHsgXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSBcXG5cXG4ubW9kYWwtZWRpdC10b2RvIGgxIHsgXFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogc3R5bGVzIGZvciBkZWxldGUgYnRuIGZvciB0b2RvIG1vZGFsICovIFxcblxcbi5tb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIGdhcDogMS40cmVtOyAqL1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAvKiBmb250LXNpemU6IDFyZW07ICAqL1xcbiAgY29sb3I6IHdoaXRlOyBcXG59IFxcblxcbi5mbGV4LWZvci1kZWxldGUtYnRuLW1vZGFsIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1ZW07IFxcbn0gXFxuXFxuXFxuLm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0biB7IFxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIHotaW5kZXg6IDE7XFxufSBcXG5cXG4ubW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kbyB7IFxcbiAgei1pbmRleDogMjtcXG59XFxuXFxuXFxuXFxuLyogbWVkaWEgcXVlcnkgcHJhY3RpY2Ugd29ya2luZyBvbiByZXNwb25zZSBkZXNpZ24sIFxcblxcbm1ha2luZyBzdXJlIGV2ZXJ5dGhpbmcgbG9va3Mgb2sgb24gbW9iaWxlLCBcXG5cXG5sZXRzIHNwZW5kIGEgbGl0dGxlIHRpbWUsIGp1c3QgcGxheWluZyBhcm91bmQgd2l0aCB0aGUgbGF5b3V0IFxcblxcbnNocmlua2luZyBpdCdzIHNpemUgKi8gXFxuXFxuXFxuLyogc2hyaW5rIHRoZSBzaXplIG9mIHRoZSBtYWluIGNvbnRlbnQgdG9kbyBpdGVtcyB3aGVuIHBhZ2UgcmVzaXplcyBzbyBubyBjb250ZW50IGNhbiBvdmVyZmxvdyAqLyBcXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHsgXFxuXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9IFxcblxcbiAgLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IFxcbiAgfSAgXFxuXFxuICBtYWluIHsgXFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87IFxcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICB3aWR0aDogYXV0bzsgXFxuICAgIGhlaWdodDogYXV0bzsgXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgfSBcXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTsgXFxuICAgIGJvdHRvbTogNTAlOyBcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH0gXFxuICBcXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogNTBweDsgXFxuICB9XFxuXFxufSBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHsgXFxuICBib2R5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqLyBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH0gXFxuXFxuICBtYWluIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpOyAqLyBcXG4gIH1cXG5cXG4gICNwcm9qZWN0LXRvZG9zLWNvbnRhaW5lciB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICB9XFxufVxcblxcbi8qIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgeyBcXG4gIGJvZHkgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfSBcXG5cXG4gIG5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9IFxcblxcbiAgbWFpbiB7IFxcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIH1cXG59ICovXFxuIFxcbi8qIFxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcXG4gICNmb3JtLXRhZy1mb3ItbW9kYWwgeyBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwJTsgXFxuICAgIGJvdHRvbTogNTAlOyBcXG4gICAgd2lkdGg6IDJlbTtcXG4gIH0gXFxuICBcXG4gIC5tb2RhbC1oZWFkZXItdGV4dCB7IFxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgXFxuXFxuICB9IFxcblxcbiAgLm1vZGFsIHtcXG4gICAgd2lkdGg6IDE1MHB4OyBcXG4gIH0gXFxuXFxuICAubW9kYWwgPiBpbnB1dCB7IFxcbiAgICB3aWR0aDogNTBweDsgXFxuICB9XFxufSAqL1xcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGltcG9ydCBcXFwiL3N0eWxlLnNjc3NcXFwiOyBcXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1Jhc2hpK0hlYnJldzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zK0pQJmZhbWlseT1QYXR1YStPbmUmZmFtaWx5PVBlcm1hbmVudCtNYXJrZXImZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwJyk7ICovXFxuXFxuXFxuLyogYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogd2lkdGg6IDEwMCU7IFxcbiAgICBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIC8qIGZvbnQtZmFtaWx5OiAnUGF0dWEgT25lJywgY3Vyc2l2ZTsgKi9cXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyOyAqLyBcXG4gIC8qIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCI7ICovXFxuLyogfSAqL1xcblxcbi8qIG5hdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAxZnI7XFxuICBncmlkLWFyZWE6IG5hdjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTA5LCAyOSk7O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn0gKi9cXG5cXG4vKiAubmF2YmFyLWhvbWUtY29udGVudC10ZXh0LCBcXG4ubmF2YmFyLXlvdXItcHJvamVjdHMtdGl0bGUtdGV4dCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59ICAqL1xcblxcbi8qIGhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59ICAqL1xcblxcbi8qIG1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDE3NiwgMjE4KTtcXG59ICovXFxuXFxuLyogLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMDksIDI5KTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn0gICovXFxuXFxuLyogLmhlYWRlci10aXRsZS10ZXh0LXRvLWRvLWxpc3QgeyBcXG4gZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn0gKi9cXG5cXG4vKiAjYWRkLXByb2plY3QtYnRuIHsgXFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICAqL1xcblxcbi8qICNhZGQtcHJvamVjdC1idG46aG92ZXIgeyBcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEwOSwgMjkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdQYXR1YSBPbmUnLCBjdXJzaXZlO1xcbn0gICovXFxuXFxuLyogLnByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufSAgKi9cXG5cXG4vKiAuaW5wdXQtZmllbGQtdGV4dCB7IFxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB3aWR0aDogMjQwcHg7IFxcbn0gICovXFxuXFxuLyogLmJ0bi1jb250YWluZXIgeyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFlbTsgXFxufSAgKi9cXG4vKiBcXG4uYWRkLWJ0biwgXFxuLmNhbmNlbC1idG4geyBcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTsgXFxuICBmb250LWZhbWlseTogJ1BhdHVhIE9uZScsIGN1cnNpdmU7XFxufSAgKi9cXG5cXG4vKiAuYWRkLWJ0biB7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufSAgKi9cXG4vKiBcXG4udG9kby1wb3AtdXAtY29udGFpbmVyeyBcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogODAlOyBcXG4gIGxlZnQ6IDYwJTsgXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTAlOyBcXG4gIHdpZHRoOiA1MCU7ICovXFxuICAvKiBwYWRkaW5nOiAyNXB4OyAgKi9cXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrOyAqL1xcbiAgXFxuXFxuLyogLnN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGQgeyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgd2lkdGg6IGF1dG87XFxufSAgKi9cXG4vKiBcXG4ucG9wLXVwLWNvbnRlbnQgeyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSA7XFxuICBoZWlnaHQ6IDEwMCU7IFxcbiAgd2lkdGg6IDEwMCU7IFxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAgICovXFxuXFxuLyogLnRpdGxlLWlucHV0LWZpZWxkLXN0eWxlcyB7IFxcbiAgd2lkdGg6IDEwMCU7XFxufSAqL1xcblxcbi8qIC5jbG9zZS1idG4tdG8tZG8taW5wdXQgeyBcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDsgXFxuICBsZWZ0OiAtOHB4OyBcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7IFxcbiAgd2lkdGg6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IFxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn0gICovXFxuXFxuLyogLnN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHg7IFxcbn0gKi9cXG5cXG4vKiAucG9wLXVwLWNvbnRlbnQgeyBcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59ICovXFxuXFxuLyogLnByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXYge1xcbiAgZm9udC1zaXplOiAycmVtOyBcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICAgKi9cXG5cXG4vKiAubWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdiB7IFxcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlOyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjsgXG5cbi8vIGZ1bmN0aW9uIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpIHsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhFWVlZXCIpO1xuXG4vLyAgICAgLy8gbGV0IHRoZVByb2plY3RBcnJheSA9IGFycjtcblxuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vICAgICBsZXQgcHJvamVjdEFycmF5SW5kZXggPSB0aGVQcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheUluZGV4KTtcbiAgICBcbi8vICAgICAvLyB9XG4vLyB9IFxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgYSBsaXR0bGUgY29uZnVzZWQgb24gaG93IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYywgdGhhdCB3aWxsIHByZXZlbnQgYSB1c2VyIGZyb20gYWRkaW5nIG11dGxpcGxlIHByb2plY3RzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gT25jZSBwcm9qZWN0IGlzIGNsaWNrZWQsIGRpc3BsYXkgdGhhdCBwcm9qZWN0LCBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcsIFxuXG4vLyBJJ3ZlIGJlZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIGZ1bmN0aW9uIGJlZm9yZSB0aGUgdmFsdWVzIGFyZSBhcHBlbmRlZCwgdG8gY2hlY2sgaWYgSXQncyBzYWZlIHRvIGFwcGVuZCB0aGUgdmFsdWUgb3IgY2xlYXIgYW5kIG1ha2Ugd2F5IGZvciBhIG5ldyBvbmUsIFxuXG4vLyBob3cgY2FuIEkgcHJldmVudCB1c2VyIGZyb20gY2xpY2tpbmcgbXVsdGlwbGUgcHJvamVjdHMsIGFuZCBhZGRpbmcgdGhlbSBhbGwsIFxuXG4vLyB5b3UgY2FudCBkaXNhYmxlIHRoZSBidG4sIFxuXG4vLyB5b3UgY2Fubm90IG1peCB0aGUgRE9NIGxvZ2ljIGFuZCBjb25kaXRpb25hbCBsb2dpYywgXG5cbi8vIHRoaW5raW5nIGNvbmNlcHR1YWxseSwgcmlnaHQgbm93IHRoZSB1c2VyIGNhbiBwcmVzcyB0aGUgcHJvamVjdCBuYW1lIGFuZCBhcHBlbmQgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG4vLyBob3cgY2FuIEkganVzdCBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBjbGVhciB0aGUgY29udGVudHMgb2Ygb25lIGFuZCBtYWtlIG5ldy4gIiwiXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG5pbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VUb2RvSXRlbXMgZnJvbSBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHBsdXNTaWduIGZyb20gXCIuL3BsdXMtc2lnbi1mb3ItdG9kby1tb2RhbC5zdmdcIjsgXG5cbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4vdHJhc2gtY2FuLWljb24tdG8tZGVsZXRlLXByb2plY3Quc3ZnXCI7XG5cbmltcG9ydCBjcm9zc01hcmtGb3JEZWxldGVQcm9qZWN0IGZyb20gXCIuL2Nyb3NzLW1hcmstc3ZncmVwby1jb20uc3ZnXCI7IFxuXG5pbXBvcnQgY2hlY2tNYXJrRm9yRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9jaGVjay1tYXJrLXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuaW1wb3J0IGVkaXRCdG5Gb3JUb2RvIGZyb20gXCIuL2VkaXQtc3ZncmVwby1jb20uc3ZnXCI7XG5cbi8vIGltcG9ydCB1cGRhdGVBcnJheVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbmxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG5sZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbmxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWVkaXQtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsLWVkaXRcIilbMF07IFxuXG5sZXQgZWRpdFRvZG9UYXNrc0Zvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItZWRpdGluZy10b2RvLXRhc2tzXCIpO1xuXG5sZXQgY3VycmVudFByb2plY3QgXG5cbmZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cbnByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxuXG5cbnByZXZlbnRUb2RvTW9kYWxQb3BVcCgpOyBcblxuXG5mdW5jdGlvbiBwcmV2ZW50RWRpdFRvZG9Nb2RhbFBvcFVwKCkgeyBcbiAgXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5wcmV2ZW50RWRpdFRvZG9Nb2RhbFBvcFVwKCk7IFxuXG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSkgXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pICBcblxuXG5cblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUZhY3RvcnkobmFtZSkgeyBcbiAgcmV0dXJuIHsgXG4gICAgcHJvamVjdDogbmFtZSxcbiAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICB0b2RvSXRlbXM6IFtdLFxuICB9XG59IFxuXG5hZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBtb2RhbElucHV0RmllbGRWYWx1ZSA9IG1vZGFsSW5wdXRGaWVsZC52YWx1ZTsgXG5cbiAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG4gIFxuICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZU9iamVjdCk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcbiAgXG4gIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTsgXG5cbn0pIFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludFZhbHVlc1RvRE9NKGFycmF5KSB7IFxuXG4gIGxldCB0aGVQcm9qZWN0c0FycmF5ID0gYXJyYXk7IFxuXG4gIGxldCBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZVwiKTsgXG5cbiAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbiAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG4gICAgLy8gcHJvamVjdCBuYW1lXG4gICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbiAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG4gICAgXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJbmRleDsgXG4gICAgICBcbiAgICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbiAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIH0pXG5cbiAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgIH0pXG5cblxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLnNyYyA9IHBsdXNTaWduOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0bi1zdmctcHJvamVjdC1uYW1lLXN0eWxlc1wiKTtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLnNyYyA9IHRyYXNoSWNvbjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTsgXG4gICAgIFxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbiAgICB9KVxuICB9XG59IFxuXG4gXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxuZWRpdFRvZG9UYXNrc0Zvcm1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG4gIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cblxubGV0IGNsb3NlQnRuRWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZWRpdC10b2RvLW1vZGFsLWJ0blwiKTsgXG5cbmNsb3NlQnRuRWRpdFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxGb3JFZGl0VG9kb1Rhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvckVkaXRUb2RvVGFza3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59KVxuXG5cbmxldCBjYW5jZWxCdG5BZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdGhlLXRvZG8tbW9kYWxcIilbMF07XG5cbmNhbmNlbEJ0bkFkZFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn0pIFxuXG5cbmxldCBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tYXJrLXhcIik7IFxuXG5jYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxufSkgXG5cblxubGV0IGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stbWFya1wiKTsgXG5cbmNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgIFxuXG4gIGxldCBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKVswXTsgXG5cbiAgbGV0IGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpWzBdOyBcbiAgXG4gIGxldCBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcblxuICBsZXQgdGFza0hvbGRlclN0eWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIilbMF07XG5cbiAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgXG4gIGxldCB2YWx1ZSA9IGN1cnJlbnRQcm9qZWN0OyBcbiAgXG4gIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIFxuICBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgLy8gaXQgaXMgZGVsZXRpbmcgZnJvbSBzdG9yYWdlLCBpdCBpcyBqdXN0IG5vdCBcblxuICAvLyBkZWxldGluZyB0aGUgdG9kbyBmcm9tIHRoZSBET00sIFxuICAvLyBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIucmVtb3ZlKCkgXG5cbiAgcHJvamVjdHNXaXRoaW5Ub2RvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG4gIFxuXG59KSAgXG5cblxuXG5cblxubGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItY3JlYXRpbmctdG9kby10YXNrXCIpO1xuXG5mb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxubGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cblxuYWRkQnRuVG9Eb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gIHsgXG4gIFxuICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG5cblxuICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbiAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbi1mb3ItdG9kb1wiKTsgXG5cbiAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlID0gZGVzY3JpcHRpb25Gb3JUb2RvLnZhbHVlOyBcbiAgXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlKTsgXG5cbiAgbGV0IGR1ZURhdGVGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZS1mb3ItdG9kby10YXNrXCIpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG9WYWx1ZSA9IGR1ZURhdGVGb3JUb2RvLnZhbHVlOyBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcblxuICBsZXQgcHJpb3JpdHlGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrXCIpOyBcblxuICBsZXQgcHJpb3JpdHlGb3JUb2RvVmFsdWUgPSBwcmlvcml0eUZvclRvZG8udmFsdWU7ICBcblxuICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChwcmlvcml0eUZvclRvZG9WYWx1ZSk7XG5cbiAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0c1RvZG9zID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zOyBcblxuICAvLyBsZXQgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICBcbiAgbGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKTtcbiAgXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRvZG9zRm9yUHJvamVjdCk7IFxuICBcbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuZm9ybUlucHV0LnJlc2V0KCk7XG5cbm1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG5vdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbn0pICAgXG5cbmZ1bmN0aW9uIHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgXG4gIFxuICByZXR1cm4geyBcbiAgICB0aXRsZTogdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbiAgICBkdWVEYXRlOiBkdWVEYXRlIFxuICB9IFxuICBcbn0gICAgXG5cblxuLy8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aGluIHRoZSB0b2RvIGZhY3RvcnkgXG4vLyB0aGF0IHRha2VzIHRoZSBpbmRleCwgXG5cbmxldCBnZXRQcm9qZWN0SWQgXG5cbmxldCBjbGlja2VkVG9kb0VkaXRJdGVtXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmdhcCA9IFwiMmVtXCI7IFxuXG4gIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuXG5cbiAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgIC8vIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgXG4gICAgdGFza0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1ob2xkZXItZm9yLXRvZG8tc3R5bGVzXCIpO1xuICBcbiAgICBcbiAgICBcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcblxuICAgIGdldFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkXG5cbiAgICBsZXQgcHJvamVjdFVuaXF1ZUlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuICAgIGxldCBjaGVja2JveEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4gICAgbGV0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4KTtcblxuICAgIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tlZGl0RWxlbWVudC5kYXRhc2V0LmluZGV4XTsgXG5cbiAgICAgIG1vZGFsRm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICBvdmVybGF5Rm9yRWRpdFRvZG9UYXNrcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICAgICBcbiAgICAgbGV0IGFkZEJ0bldpdGhpblRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbC1lZGl0XCIpOyBcbiAgICAgIFxuICAgICBhZGRCdG5XaXRoaW5Ub2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIGxldCB0aXRsZUlucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1lZGl0LWlucHV0LWZvcm1cIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWVFZGl0VG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG8tZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2stZWRpdFwiKS52YWx1ZTsgXG5cbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXRWYWx1ZUVkaXRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eS1mb3ItdG9kby10YXNrLWVkaXRcIikudmFsdWU7IFxuXG4gICAgICAgIGxldCBlZGl0VG9kb09iamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZUVkaXRUb2RvLCBkZXNjcmlwdGlvbklucHV0VmFsdWVFZGl0VG9kbywgZHVlRGF0ZUlucHV0VmFsdWVFZGl0VG9kbywgcHJpb3JpdHlJbnB1dFZhbHVlRWRpdFRvZG8pOyBcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlZGl0VG9kb09iamVjdCk7IFxuXG4gICAgICAgIC8vICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChlZGl0VG9kb09iamVjdCk7XG5cbiAgICAgICAgIC8vIGNsaWNrZWRUb2RvRWRpdEl0ZW0gPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbZWRpdEVsZW1lbnQuZGF0YXNldC5pbmRleF07IFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZFRvZG9FZGl0SXRlbSk7XG4gICAgICAgIFxuICAgICAgICBjbGlja2VkVG9kb0VkaXRJdGVtLnRpdGxlID0gdGl0bGVJbnB1dFZhbHVlRWRpdFRvZG87IFxuICAgICAgICBcbiAgICAgICAgY2xpY2tlZFRvZG9FZGl0SXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZUVkaXRUb2RvOyBcbiAgICAgICAgXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dFZhbHVlRWRpdFRvZG87IFxuXG4gICAgICAgIGNsaWNrZWRUb2RvRWRpdEl0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0VmFsdWVFZGl0VG9kbzsgXG5cbiAgICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICAgICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2VkaXRFbGVtZW50LmRhdGFzZXQuaW5kZXhdLnB1c2goeCkpO1xuXG4gICAgICB9KVxuICAgICAgXG4gICAgXG4gICAgfSkgXG5cbiAgICBlZGl0RWxlbWVudC5zcmMgPSBlZGl0QnRuRm9yVG9kbzsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjsgXG5cbiAgICBlZGl0RWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwLjIwZW1cIjtcblxuICAgIGNoZWNrYm94RWxlbWVudC50eXBlID0gXCJjaGVja2JveFwiOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuICAgIGNoZWNrYm94RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjtcblxuICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICBkZWxldGVJY29uLmlkID0gXCJkZWxldGUtYnRuLWluc2lkZS10b2RvXCI7IFxuXG4gIC8vICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgZGVsZXRlSWNvbi5kYXRhc2V0LmluZGV4ID0gaTsgXG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgLy8gdGFza0hvbGRlci5yZW1vdmUoKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuICAgICAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnNwbGljZShkZWxldGVJY29uLmRhdGFzZXQuaW5kZXgsIDEpO1xuICAgICAgXG4gICAgICBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG4gICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLmRhdGFzZXQuaW5kZXgpO1xuXG4gICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBwcm9qZWN0cyB0aGF0IGhhdmUgYmVlbiBkZWxldGVkLCBcblxuICAgICAgLy8gc29tZXdheSB0byB1cGRhdGUgcHJvamVjdEFycmF5LCBhbmQgdGhlbiBwYXNzIHRvIGEgc3RvcmFnZSBmdW5jdGlvbiBcblxuICAgICAgLy8gcHJvamVjdEFycmF5LnB1c2goY3VycmVudFByb2plY3QpOyBcbiAgICAgIFxuICAgICAgLy8gcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgICAgIC8vIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbiAgICAgIFxuXG4gICAgICAvLyBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4gICAgfSkgXG5cbiAgICBkZWxldGVJY29uLnNyYyA9IHRyYXNoSWNvbjsgXG5cbiAgICBkZWxldGVJY29uLnN0eWxlLndpZHRoID0gXCIzMHB4XCI7XG5cbiAgICBkZWxldGVJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjsgXG5cbiAgICAvLyBsZXQgY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAgIC8vIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyhcInRoZSBkZWxldGUgYnV0dG9uIHdpdGhpbiB0b2RvIGhhcyBiZWVuIHByZXNzZWQhXCIpO1xuICAgICBcbiAgICAvLyB9KVxuXG4gICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiOyBcblxuICAgIHRvZG9UaXRsZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnRpdGxlKTtcblxuICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCJcblxuICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIFxuICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnByaW9yaXR5KTtcbiAgICBcbiAgICB0b2RvRHVlRGF0ZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmR1ZURhdGUpO1xuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1RpdGxlKTsgIFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0Rlc2NyaXB0aW9uKTtcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9Qcmlvcml0eSk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0R1ZURhdGUpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoZGVsZXRlSWNvbik7IFxuXG4gICAgdGFza0hvbGRlci5hcHBlbmQoZWRpdEVsZW1lbnQpO1xuXG4gICAgdGFza0hvbGRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtibHVlXCI7XG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4gICAgdGFza0hvbGRlci5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxZW1cIjsgXG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IFxuXG4gICAgdGFza0hvbGRlci5zdHlsZS53aWR0aCA9IFwiMjc1cHhcIjsgXG5cbiAgICB0YXNrSG9sZGVyLnN0eWxlLmJvcmRlciA9IFwiNXB4IHNvbGlkIGJsYWNrXCI7XG5cbiAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuICAgIFxuICAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcbiAgfSAgXG5cbiAgIC8vIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vIGxldCBkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLWJ0bi1pbnNpZGUtdG9kb1wiKTsgXG5cbiAgLy8gLy8gY29uc29sZS5sb2coZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0pOyBcblxuICAvLyBsZXQgdGFza0hvbGRlckNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKVswXTsgXG5cbiAgLy8gLy8gY29uc29sZS5sb2codGFza0hvbGRlckNsYXNzKTtcblxuICAvLyBkZWxldGVCdG5XaXRoaW5Ub2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgLy8gICAgICAvLyBjb25zb2xlLmxvZyhcInRoZSBkZWxldGUgYnV0dG9uIHdpdGhpbiB0b2RvIGhhcyBiZWVuIHByZXNzZWQhXCIpO1xuICAvLyAgICAgIGxldCBjdXJyZW50UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vICAgICAvLyAgY29uc29sZS5sb2coY3VycmVudFByb2plY3RJZCk7IFxuXG4gIC8vICAgICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC5pZC5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIC8vICAgbGV0IGlkID0gY3VycmVudFByb2plY3QuaWQ7IFxuXG4gIC8vICAgICAvLyAgIGlmIChjdXJyZW50UHJvamVjdElkID09PSBpZCkgeyBcbiAgLy8gICAgIC8vICAgICAvLyBpZiBpZCdzIG1hdGNoIHJlbW92ZSB0aGUgc2VsZWN0ZWQgcHJvamVjdCwgXG4gIC8vICAgICAvLyAgIH0gZWxzZSB7IFxuICAvLyAgICAgLy8gICAgIHJldHVybjtcbiAgLy8gICAgIC8vICAgfVxuXG4gIC8vICAgICAvLyAgfSBcblxuICAvLyAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihmdW5jdGlvbihvbmVQcm9qZWN0SWQpIHsgXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICBcbiB9IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbi8vIGltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuLy8gaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbi8vIGltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbi8vIGltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG4vLyBpbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuLy8gY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuLy8gY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG4vLyBsZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG4vLyBsZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxuLy8gbGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbi8vIGxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbi8vIGxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG4vLyBsZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbi8vIGxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG4vLyBsZXQgY3VycmVudFByb2plY3QgXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0gXG5cbi8vIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuLy8gZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxuLy8gbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gfSBcblxuLy8gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7XG5cbi8vIGV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyB9XG5cbi8vIHByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4vLyAgY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuLy8gICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbi8vICAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xuLy8gfSkgXG5cbi8vICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbi8vIH0pIFxuXG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuLy8gICByZXR1cm4geyBcbi8vICAgICBwcm9qZWN0OiBuYW1lLFxuLy8gICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuLy8gICAgIHRvZG9JdGVtczogW10sXG4vLyAgIH1cbi8vIH0gXG5cbi8vIGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4vLyAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbi8vICAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxuLy8gfSkgXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbi8vICAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbi8vICAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuLy8gICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4vLyAgICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbi8vICAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuLy8gICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuLy8gICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuICAgICAgXG4vLyAgICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4vLyAgICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIik7IFxuXG4vLyAgICAgICBsZXQgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgbGV0IGFkZEJ0blRvQ3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgICAgICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgZGVsZXRlQnRuVG9EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgICAgICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4vLyAgICAgICB9KVxuXG5cblxuLy8gICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuLy8gICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbi8vICAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4vLyAgICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbi8vICAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4vLyAgICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTsgXG4gICAgIFxuLy8gICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9IFxuXG4gXG5cbi8vIGZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0pICBcblxuLy8gbGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuLy8gY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gfSkgXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbi8vIGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG4vLyB9KSBcblxuXG4vLyBsZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuLy8gY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuLy8gICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbi8vICAgbGV0IHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7XG5cbi8vICAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgXG4vLyAgIGxldCB2YWx1ZSA9IGN1cnJlbnRQcm9qZWN0OyBcbiAgXG4vLyAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIFxuLy8gICBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuLy8gICBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbi8vICAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4vLyAgIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXG5cblxuLy8gfSkgIFxuXG5cbi8vIGxldCBhZGRCdG5Ub0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLXRvZG8tbW9kYWxcIik7IFxuXG5cblxuLy8gbGV0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZm9ybS1mb3ItY3JlYXRpbmctdG9kby10YXNrXCIpO1xuXG4vLyBmb3JtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG5cbi8vIGFkZEJ0blRvRG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7IFxuXG5cbi8vICAgbGV0IHRpdGxlSW5wdXRGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1vZi10b2RvLWlucHV0LWZvcm1cIik7IFxuXG4vLyAgIGxldCB0aXRsZUlucHV0VmFsdWUgPSB0aXRsZUlucHV0Rm9yVG9kby52YWx1ZTsgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godGl0bGVJbnB1dFZhbHVlKTsgXG5cbi8vICAgbGV0IGRlc2NyaXB0aW9uRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb24tZm9yLXRvZG9cIik7IFxuXG4vLyAgIGxldCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSA9IGRlc2NyaXB0aW9uRm9yVG9kby52YWx1ZTsgXG4gIFxuLy8gICAvLyBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaChkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSk7IFxuXG4vLyAgIGxldCBkdWVEYXRlRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGUtZm9yLXRvZG8tdGFza1wiKTsgXG5cbi8vICAgbGV0IGR1ZURhdGVGb3JUb2RvVmFsdWUgPSBkdWVEYXRlRm9yVG9kby52YWx1ZTsgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG5cbi8vICAgbGV0IHByaW9yaXR5Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktZm9yLXRvZG8tdGFza1wiKTsgXG5cbi8vICAgbGV0IHByaW9yaXR5Rm9yVG9kb1ZhbHVlID0gcHJpb3JpdHlGb3JUb2RvLnZhbHVlOyAgXG5cbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2gocHJpb3JpdHlGb3JUb2RvVmFsdWUpO1xuXG4vLyAgIC8vIGxldCBjdXJyZW50UHJvamVjdHNUb2RvcyA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtczsgXG5cbi8vICAgLy8gbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgXG4vLyAgIGxldCB0b2Rvc0ZvclByb2plY3QgPSB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZUlucHV0VmFsdWUsIGRlc2NyaXB0aW9uRm9yVG9kb1ZhbHVlLCBwcmlvcml0eUZvclRvZG9WYWx1ZSwgZHVlRGF0ZUZvclRvZG9WYWx1ZSk7XG4gIFxuLy8gICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0b2Rvc0ZvclByb2plY3QpOyBcbiAgXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbi8vIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcyk7XG5cbi8vIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbi8vIH0pICAgXG5cbi8vIGZ1bmN0aW9uIHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHRpdGxlOiB0aXRsZSwgXG4vLyAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbi8vICAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuLy8gICAgIGR1ZURhdGU6IGR1ZURhdGUgXG4vLyAgIH1cbi8vIH0gICAgIFxuXG4vLyAvLyBwcm9ibGVtIGlzIGFwcGVuZGluZyBhbmQgZGlzcGxheWluZyB0b2RvIHZhbHVlcyBcblxuLy8gLy8gZm9yIGVhY2ggcHJvamVjdCwgXG5cbi8vIC8vIGlzc3VlIGlzIHNhdmluZyBldmVyeSBzaW5nbGUgaW5wdXQgYXMgYSBuZXcgYXJyYXkgZW50cnksIFxuXG4vLyAvLyBcblxuLy8gbGV0IGdldFByb2plY3RJZFxuXG4vLyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCkgeyBcblxuLy8gICBsZXQgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5nYXAgPSBcIjJlbVwiO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xuXG4vLyAgIC8vIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTsgXG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcbi8vICAgICBsZXQgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICBcbiAgICBcbi8vICAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3QudG9kb0l0ZW1zW2ldOyBcblxuLy8gICAgIGdldFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkXG4gICAgXG4vLyAgICAgbGV0IHByb2plY3RVbmlxdWVJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgICBcbi8vICAgICBsZXQgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcbiAgICBcbi8vICAgICBjaGVja2JveEVsZW1lbnQudHlwZSA9IFwiY2hlY2tib3hcIjsgXG5cbi8vICAgICBsZXQgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnNyYyA9IFwiLi4vZWRpdC1zdmdyZXBvLWNvbS5zdmdcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjMwcHhcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMzBweFwiOyBcblxuLy8gICAgIGVkaXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIwLjIwZW1cIjtcblxuXG5cbi8vICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCI7IFxuXG4vLyAgICAgdG9kb1RpdGxlLmFwcGVuZChzZWxlY3RlZFByb2plY3QudGl0bGUpO1xuXG4vLyAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG5cbi8vICAgICB0b2RvRGVzY3JpcHRpb24uYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kZXNjcmlwdGlvbik7XG5cbi8vICAgICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOiBcIlxuXG4vLyAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG4gICAgXG4vLyAgICAgdG9kb1ByaW9yaXR5LmFwcGVuZChzZWxlY3RlZFByb2plY3QucHJpb3JpdHkpO1xuICAgIFxuLy8gICAgIHRvZG9EdWVEYXRlLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZHVlRGF0ZSk7XG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvVGl0bGUpOyAgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRGVzY3JpcHRpb24pO1xuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1ByaW9yaXR5KTsgXG5cbi8vICAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvRHVlRGF0ZSk7IFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQoY2hlY2tib3hFbGVtZW50KTtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrYmx1ZVwiO1xuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUubGluZUhlaWdodCA9IFwiMWVtXCI7IFxuXG4vLyAgICAgdGFza0hvbGRlci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUud2lkdGggPSBcIjI3NXB4XCI7IFxuXG4vLyAgICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICBcbi8vICAgICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG4vLyAgIH0gXG4gIFxuLy8gIH0gXG5cblxuLy8gcHJhY3RpY2Ugd2l0aCBvYmplY3RzIFxuXG4vLyBsZXQgYXJyYXkxID0gW107XG5cbi8vIGNvbnN0IFRvZG8gPSBmdW5jdGlvbih0aXRsZSwgZGF0ZSkge1xuLy8gICB0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4vLyB9O1xuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuLy8gICBsZXQgeHl6ID0gbmV3IFRvZG8oYCR7aX0gdGl0bGVgLCBpKVxuLy8gICBhcnJheTEucHVzaCh4eXopO1xuLy8gfVxuXG4vLyBjb25zb2xlLmxvZyhhcnJheTEpIFxuXG5cbi8vIHByYWN0aWNlIG1ha2luZyBvYmplY3RzIFxuXG4vLyBwdXNoaW5nIGludG8gYW4gYXJyYXkgXG5cbi8vIGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBhcnJheSwgXG5cbi8vIGdldCBlYWNoIGZpZWxkIGJ5IGl0J3Mga2V5LCAgXG5cbi8vIGxldCBuZXdBcnIgPSBbXTsgXG5cbi8vIGZ1bmN0aW9uIGNyZWF0aW5nT2JqZWN0cyh0aXRsZSxkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHsgXG4vLyAgIGNvbnN0IG5ld09iamVjdCA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSB9IFxuLy8gICBuZXdBcnIucHVzaChuZXdPYmplY3QpOyBcbiAgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3QXJyLmxlbmd0aDsgaSsrKSB7IFxuICAgXG4vLyAgICAgbGV0IHRpdGxlID0gbmV3QXJyWzBdLnRpdGxlO1xuLy8gICAgIGxldCBkZXNjcmlwdGlvbiA9IG5ld0FyclswXS5kZXNjcmlwdGlvbjsgXG4vLyAgICAgbGV0IGR1ZURhdGUgPSBuZXdBcnJbMF0uZGF0ZTtcbi8vICAgICBsZXQgcHJpb3JpdHlMZXZlbCA9IG5ld0FyclswXS5wcmlvcml0eTtcbiAgICBcbiAgICBcbi8vICAgfVxuLy8gfSBcblxuLy8gY3JlYXRpbmdPYmplY3RzKFwiQWxlY1wiLCBcIndvcmtpbmcgb24gdG9kby1saXN0XCIsIFwiNC8yMC8yM1wiLCBcIkhpZ2hcIik7ICBcblxuLy8gY3JlYXRpbmdPYmplY3RzKFwiSGVsbG9cIiwgXCJDaGVjayAxLi4yXCIsIFwiNi8yMC8yM1wiLCBcIkhpZ2hcIik7IFxuXG4vLyBnZXR0aW5nIGFsbCB0aGUga2V5cyBmcm9tIHRoZSBmaXJzdCBvYmogaW4gdGhlIGFycmF5XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS50aXRsZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5kZXNjcmlwdGlvbik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5kYXRlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzBdLnByaW9yaXR5KTsgXG5cbi8vIGdldHRpbmcgYWxsIHRoZSBrZXlzIGZyb20gdGhlIHNlY29uZCBvYmogaW4gdGhlIGFycmF5IFxuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0udGl0bGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0uZGF0ZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclsxXS5wcmlvcml0eSk7IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gLy8gaXQgd2FzIHRoZSBsb29wLCBbaV0gd2FzIHRha2luZyBpbiBhIHNpbmdsZSB2YXJpYWJsZSBcblxuIC8vIG5vdyB3ZSBoYXZlIHRoZSB0b2RvIGl0ZW0gd2l0aGluIGEgc2luZ2xlIGRpdiBhbmQgc3R5bGUgXG5cbi8vIGVhY2ggdG9kbyBpdGVtIGlzIGluc2lkZSBpdCdzIG93biBkaXYsIFxuXG4vLyBlYWNoIHRvZG8gaXRlbSBuZWVkcyB0byBiZSBpbnNpZGUgb25lIGRpdiwgXG5cbi8vIE5PVCBFQUNIIFRPRE8gSVRFTSBJTlNJREUgQSBESVYsIFxuXG4vLyBnZXQgYWxsIHRoZSB0b2RvJ3MuIFxuXG5cbi8vIEkgZG9udCB1bmRlcnN0YW5kIHdoeSB0aGlzIGlzIHNvIGZ1Y2tpbmcgY29uZnVzaW5nLCBcblxuLy8gaSBqdXN0IHdhbnQgZWFjaCB0b2RvIHRvIGJlIGl0J3Mgb3duIGRpdiwgXG5cbi8vIHRoZW4gYXBwZW5kIHRvIHRoZSBGVUNLSU5HIENPTlRBSU5FUiEhISBcblxuLy8gdXNlIGEgbG9vcCwgZ2V0IHByb2plY3QsIGFwcGVuZCB0byBkaXYsIHRoZW4gYXBwZW5kIHRvIHNlY3Rpb24sIFxuXG4vLyB3aHkgYXJlIHRoZXkgc3RpbGwgYnVuY2hlZCB0b2dldGhlcj8/PyBcblxuXG4vLyBob3cgY2FuIEkgbWFrZSBlYWNoIHNldCBvZiB0b2RvcyBhIHNlcGVyYXRlIGRpdj8/IFxuXG4vLyBhcHBlbmQgdGhlIHRvZG8ncyB0byBhIGRpdiB0aGVuIGFwcGVuZCB0byBjb250YWluZXIsIFxuXG5cbi8vIHN0eWxlIGVhY2ggZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXIsIFxuXG4vLyBMb29rIG92ZXIgY29kZSwgXG5cbi8vIEkgd2FudCB0byBkaXNwbGF5IHRoZSB0b2RvJ3MgZm9yIGVhY2ggcHJvamVjdCwgXG5cbi8vIGhvdyBhbSBJIGFkZGluZyB0aGUgdG9kbydzLCBcblxuLy8gc3RyaWNrbHkgbG9vayBhdCB0aGUgZnVuY3Rpb24sIFxuXG5cblxuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50VG9Eb1ZhbHVlcyhwcm9qZWN0KSB7IFxuICBcbi8vICAgbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgbGV0IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QgPSBwcm9qZWN0OyBcblxuLy8gICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHsgXG4vLyAgIC8vICAgbGV0IHggPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0W2ldOyBcblxuLy8gICAvLyAgIGNvbnNvbGUubG9nKHgpOyBcbi8vICAgLy8gfVxuXG4vLyAgIGxldCBkaXNwbGF5VGl0bGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnRpdGxlOyBcblxuLy8gICBsZXQgZGlzcGxheURlc2NyaXB0aW9uID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjsgXG5cbi8vICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QucHJpb3JpdHk7IFxuXG4vLyAgIGxldCBkaXNwbGF5RHVlRGF0ZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZHVlRGF0ZTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlUaXRsZSk7XG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheURlc2NyaXB0aW9uKTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEdWVEYXRlKTtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVByaW9yaXR5KTsgXG5cblxuLy8gfSBcblxuXG5cblxuXG5cblxuLy8gb2sgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWVzLCBJIGFtIGFibGUgdG8gcHJpbnQgdGhlIHZhbHVlcyB0byB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCB0aGVzZSB0b2RvIGl0ZW1zIG9udG8gZWFjaCBwcm9qZWN0IFxuXG4vLyBhbmQgc2F2ZSB0aGVtIGVhY2ggdGltZSBzbyB0aGV5IHJlbG9hZCBvbiByZWZyZXNoPyBcblxuLy8gSSBjYW4gZ3JhYiB0aGUgY3VycmVudCBwcm9qZWN0LCB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIGJldHdlZW4gcHJvamVjdHMgXG5cbi8vIHRoZW4gaG93IGNhbiBJIGFkZCB0aGVzZSBuZXdseSBhZGRlZCB0b2RvJ3MgYmFjayBpbnRvIHRoZSBhcnJheSwgXG5cbi8vIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyAgXG5cbi8vIEkgYWJsZSB0byBhZGQgdG9kbyBpdGVtcyBpbnRvIGEgcHJvamVjdCwgYnV0IGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgIHRoZW0/IFxuXG4vLyBkbyBJIG5lZWQgdG8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/IFxuXG4vLyBcblxuXG5cblxuLy8gZ2V0IGFsbCB0aGUgdmFsdWVzLCB3aXRoaW4gdGhlIG1vZGFsLCBcblxuLy8gZmlyc3QgZ2V0IHRoZSB2YWx1ZXMgb2YgYWxsIHRoZSBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvbmNlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgdmFsdWVzIGFyZSBzYXZlZCwgXG5cbi8vIHBhc3NlZCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdHMgdG9kbyBhcnJheSwgXG5cbi8vIGFsc28gcGFzc2VkIHRvIHN0b3JhZ2UgdG9vIHNvIHRoZSB0b2RvIGFycmF5IGlzIHRoZSBzYW1lIGFzIHJlZ3VsYXIgcHJvamVjdCBhcnJheSBcblxuLy8gc28gd2UgaGF2ZSB0byBhYmlsaXR5IHRvIGdldCB0aGUgdmFsdWVzLCBcblxuLy8gYW5kIHB1c2ggdGhlbSB0byB0aGUgY29ycmVjdCBwcm9qZWN0LCBcblxuLy8gdGhleSBkbyBub3Qgc2F2ZSwgYW5kIGNsZWFyIHVwb24gcmVmcmVzaC4gXG5cbi8vIGhvdyBjYW4gSSBwdXNoIHRoZXNlIHZhbHVlcyBpbnRvIHRoZSBhcnJheSwgcGVybWFuZW50bHkgc2F2ZSB0aGVtLCBcblxuLy8gYW5kIHRoZW4gZGlzcGxheSB0aGVtPyBIb3cgY2FuIEkgZGlzcGxheSB0aGUgdG9kbydzPyBcblxuLy8gRG8gSSBoYXZlIHRvIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9qZWN0cyBhcnJheT8gXG5cbi8vIGRvIEkgaGF2ZSB0byBwYXNzIHByb2plY3QgYXJyYXkgYWdhaW4/IFxuXG4vLyB5b3Ugd2lsbCBoYXZlIHRvIGRpc3BsYXkgdGhlIHByb2plY3RzIGFnYWluIFxuXG4vLyB0aGUgdG9kbydzIGFyZSBiZWluZyB1cGRhdGVkIFxuXG4vLyBwdXNoIHRoZSB1cGRhdGVkIHByb2plY3RzQXJyYXksIGFuZCBmaW5kIGEgd2F5IHRvIGRpc3BsYXkgdG9kbydzLFxuXG4vLyBcblxuXG5cblxuLy8gY29uc3QgQXBwID0gICgoKSA9PiB7XG4vLyAgIC8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXVxuLy8gICBsZXQgY3VycmVudFByb2plY3RcblxuLy8gICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0ID0gY3VycmVudFByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3QuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdC5pZClcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3R9XG4vLyB9KSgpXG5cblxuXG4vLyBIZWxsbywgSSBhbSBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG9kbywgSSdtIHRyeWluZyB0byBpbXBsZW1lbnQgc29tZSBsb2dpYyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgcHJvamVjdCBidG4sIGl0IHdpbGwgY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIGFuZCBpbiB0aGUgXCJ5b3VyIHByb2plY3RzXCIgc2VjdGlvbi4gQmFzaWNhbGx5IGp1c3QgdXNpbmcgYSBsaXN0ZW5lciwgdGhhdCB3aGVuIHRoZSB1c2VyIGNvbmZpcm1zIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIGRpc3BsYXksIHRoZW4gcmVtb3ZlIHRoZSB2YWx1ZS4gVGhlIHByb2JsZW0gaXMgSSBnZXQgdW5kZWZpbmVkIHdoZW4gSSB0cnkgdGhpcyBhcHByb2FjaCwgd2hpY2ggaXMgc3RyYW5nZSBiZWNhdXNlIEknbSBnZXR0aW5nIHRoZSBlbGVtZW50LCB0aGVyZSBpcyBhIHZhbHVlIGluc2lkZSB0aGVyZSwgdGhlbiBqdXN0IHVzaW5nciAudmFsdWUuIFxuXG5cblxuLy8gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB3aXRoIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgYnRuIGFuZCB0aGV5IGNvbmZpcm0gXG5cbi8vIHRoZXkgd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgd2FudCB0byBkZWxldGUgaXQgZnJvbSBtYWluIGNvbnRhaW5lciBhcyB3ZWxsIGFzIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBOb3Qgc3VyZSBJZiBJJ20gZG9pbmcgdGhpcyByaWdodCBidXQgSSBjYW4gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIGFuZCB0aGVuIHVzZSByZXBsYWNlQ2hpbGRyZW4gdG8gY2xlYXIgdGhlIERPTSBdXG5cbi8vIGJ1dCBJIGFtIGdldHRpbmcgcHJldHR5IHN0dWNrIG9uIGhvdyB0byBkZWxldGUgaXQgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uPyBcblxuLy8gQmFzaWNhbGx5IEkgdGhpbmsgb2Ygc29tZWhvdyBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIHRoZSBtYWluIGNvbnRhaW5lciwgYXMgd2VsbCBhcyB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gdXNpbmcgcmVtb3ZlQ2hpbGQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgaW4gYm90aCBwbGFjZXMsIFxuXG5cblxuICBcbi8vIE9LIHdlbGwgdGhpcyBpcyBvbmUgd2F5IHRvIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhY2Nlc3MgdGhhdCBzYW1lIHByb2plY3QgbmFtZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gYW5kIGRlbGV0ZSB0aGF0PyBcblxuLy8gSSBuZWVkIHRvIGFsc28gZGVsZXRlIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgd2l0aGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24uIGxvb2sgdXAgcmVwbGFjZUNoaWxkcmVuXG5cbi8vIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Ugd2hhdCBhcmUgeW91IHJlcGxhY2luZyB3aXRoPyBIb3cgZG8geW91IGtub3cgd2hpY2ggZWxlbWVudCB0byByZXBsYWNlIGl0IHdpdGg/IFxuXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkFycmF5ID0gQXJyYXkuZnJvbShjYW5jZWxCdG5BZGRUb2RvTW9kYWwpO1xuXG5cblxuLy8gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIFxuXG4vLyBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMpO1xuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KGFycmF5KSB7IFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICBsZXQgcHJvamVjdE5hbWVJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG4gICAgXG4vLyAgIH1cbi8vIH1cblxuLy8gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChwcm9qZWN0QXJyYXkpO1xuXG5cblxuLy8gSSB0aGluayBJIE5lZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBkb24ndCB3YW50IHRvIGhhdmUgdG9vIG11Y2ggZ29pbmcgb24gaW4gb25lIGZ1bmN0aW9uLCBcblxuLy8gdXNlIHRoZSBzYW1lIGxvZ2ljLCBsb29wIHRocm91Z2ggcHJvamVjdCBhcnJheSwgXG4gXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXgucHJvamVjdCk7XG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG9rIG5leHQsIHByb2plY3QgbmFtZXMgYXJlIGJlaW5nIGFkZGVkIGR5bmFtaWNhbGx5LCB0aGV5IGFyZSBwcm9wZXJseSBiZWluZyBhZGRlZCB0byB0aGUgYXJyYXkgYW5kIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBuZXh0IHdoZW4gSSBjbGljayBvbiB0aGUgcHJvamVjdCwgdGhhdCBwcm9qZWN0J3MgbmFtZSBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGNsZWFyIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgZGlzcGxheSB0aGUgbmV3IHByb2plY3QsIFxuXG4vLyByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGlzIGFkZGVkIGF0IGEgdGltZSwgc2hvdWxkIG5vdCBhZGQgb250by4gc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBhbG9uZyB3aXRoIHRoZSB0d28gYnRucywgYWRkIGFuZCBkZWxldGUgZm9yIHRoZSB0b2RvJ3MgXG5cbi8vIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBzaG93IHRoYXQgcHJvamVjdCwgdXNlciBjYW5ub3QgYXBwZW5kIHRoYXQgcHJvamVjdCBtdWx0aXBsZSB0aW1lcyBieSBjbGlja2luZywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIHRoaXMgd2lsbCBiZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBmaXJzdCBJIGZlZWwgbGlrZSB5b3Ugd2lsbCBuZWVkIHRvIGxvb3AgdGhyb3VnaCBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0IGZyb20gdGhlIGFycmF5LCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBsb2dpYyB3aWxsIGdyYWIgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gYW5kIGFwcGVuZCB2YWx1ZXMgdG8gaXQsIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb2plY3QgaXMgYWxyZWFkeSBhZGRlZCBzdWNoIGFzIElEJ3MgbWF0Y2hpbmcsIFxuXG4vLyBpZiBJRCBtYXRjaGVzIHdoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgZnJvbSBhZGRpbmcgYWdhaW4sIGVsc2UgaWYgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBjb250YWluZXIsIFxuXG4vLyBiZWZvcmUgdGhlIHByb2plY3QgbmFtZSBpcyBhcHBlbmRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGF0IG5hbWVzIGlkIG1hdGNoZXMgdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyBJIHdvdWxkIHNheSBmaXJzdCBsZXQncyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBjYW4gZ3JhYiBhbGwgdGhlIHByb2plY3QgbmFtZXMgYW5kIElEPyBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIFxuXG4vLyBJJ20gbm90IHN1cmUgeW91IG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIHNlZW1zIGxpa2UgeW91ciBnZXR0aW5nIHByb2plY3QgdGFyZ2V0IHZhbHVlLCB3aXRoIGUudGFyZ2V0LnRleHRDb250ZW50IFxuXG4vLyBub3cgSSBiZWxpZXZlIHdoYXQgeW91IG5lZWQgdG8gZmlndXJlIG91dCBpcyBob3cgdG8gZGlzcGxheSB0aGUgY2VydGFpbiBwcm9qZWN0LCBiYXNlZCBvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gcmVtZW1iZXIgcmVwbGFjZSB0aGUgY29udGVudCB3aXRoaW4gbWFpbiBjb250YWluZXIsIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgYWxsIGJhc2VkIG9uIGJ0biBjbGljayBcblxuLy8gdGhpbmsgYmFjayB0byByZXN0YXVyYW50IHBhZ2UsIFxuXG4vLyBJIHNvbWVob3cgbmVlZCB0byB0aGluayB0aGlzIG91dCwgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIGNvbnRlbnRzIG9mIHByZXZpb3VzIHByb2plY3QgYW5kIG1ha2Ugd2F5IGZvciBuZXcsIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwsIGlmIHRoaXMgcHJvamVjdCBpcyBjbGlja2VkLCBjaGFuZ2UgdG8gYSB2YXJpYWJsZSB0aGVuIHVzZSByZXBsYWNlIGNoaWxkLiBcblxuLy8gaWYgdGhlIHZhcmlhYmxlIHRhcmdldFZhbHVlUHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIG9yIHRoZSBkaXYsIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgIFxuXG4vLyBcblxuLy8gLS0gaG93IHRvIG1ha2Ugc3VyZSBvbmx5IHRoYXQgd2hlbiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGl0IHdpbGwgcG9wdWxhdGUsIHdpdGggdGhhdCBwcm9qZWN0IG5hbWUsIHdpcGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIFxuXG4vLyAtLSB3aHkgaXMgdGhlIHByb2plY3QncyBzZWN0aW9uIG5vdCBkeW5hbWljYWxseSBhZGRpbmcgcHJvamVjdHM/IEkgaGF2ZSB0byByZWZyZXNoIHRoZSBwYWdlIGZvciBpdCB0byBzaG93IHVwPyBcblxuLy8gaGFuZGxlIHRoZSBjb25kaXRpb25hbCBsb2dpYyBmaXJzdCwgYW5kIGNvcnJlY3RseSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWVzIGluIHRoZSBtYWluIGNvbnRhaW5lciBmaXJzdCwgXG5cbi8vIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBpcyBuZWVkZWQgdG8gY29tcGxldGUgdGhpcywgcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBjYW4gYmUgZGlzcGxheWVkIGF0IGEgdGltZSwgXG5cbi8vIGlmIHByb2plY3QgY29udGFpbmVyIGluY2x1ZGVzIHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gc2hvdWxkIGl0IGJlIHNpbWlsYXIgdG8gcmVzdGF1cmFudCBwYWdlLCBlYWNoIHByb2plY3QgaXMgZ2l2ZW4gYSB2YXJpYWJsZSwgdGhlbiBpZiB0aGF0IHByb2plY3QgaXMgY2xpY2tlZCBvbiBpdCdzIGdpdmVuIGEgdmFyaWFibGUgb3IgaW5kZXgsIFxuXG4vLyB0aGVuIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0J3MgSUQsIG1hdGNoZXMgd2hhdCBpcyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyLCBpZiBub3QgY2xpY2tlZCwgcmVwbGFjZSB3aXRoIG5ldyBjbGljaywgXG5cbi8vIGlmIGl0IGlzIGNsaWNrZWQgYWdhaW4sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZXBsYWNpbmcgdGhlIGNvbnRlbnQsIFxuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IHdpdGggdGhlIHByb2plY3RzIHVucWl1ZSBJRCwgaWYgcHJvamVjdC5pZCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGF0IGJ0biBhZ2FpbiwganVzdCByZXR1cm4sIFxuXG4vLyBjYW4gd2UgZ28gYmFjayBhbmQgbG9vayBhdCB3aGF0IHlvdSBkaWQgcHJldmlvdXNseSB3aXRoIHlvdXIgY29kZT9cblxuLy8gSSBkb24ndCB0aGluayBpdCdzIHRoZSBzYW1lIHByZXZpb3VzbHksIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgZGl2IGhlcmUgaW5zdGVhZCBvZiBhIGJ1dHRvbiwgXG5cbi8vIEkgd2FudCB0byBmaW5kIGEgd2F5IHRoYXQgSSBjYW4gb25seSBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHNob3VsZCBhZGQgZHVwbGljYXRlcywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCByZXBsYWNlIGNvbnRlbnRzIG9mIG9sZCBhbmQgd2lwZSB0aGUgbmV3LCBcblxuLy8gSSB0aGluayB0aGUgRE9NIERpc3BsYXkgaXMgZmluZSwgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uLCBjcmVhdGluZyBhIGRpdiB0aGF0IHN0b3JlcyB0aGUgcHJvamVjdHMgbmFtZSwgXG5cbi8vIG5vdyBvbmNlIHRoZSBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGxvb3AgdGhyb3VnaCBzdG9yYWdlLCBmaW5kIG91dCB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uIGFuZCBkaXNwbGF5J3MgaXQncyBjb250ZW50cywgXG5cbi8vIHN0aWNrIHdpdGggaG93IHlvdSBhcmUgZGlzcGxheWluZyB0aGUgcHJvamVjdHMgaW4gdGhlIERPTSwgXG5cbi8vIGhvdyB3aWxsIHlvdSBhZGQgdGhpbmdzIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBkaXNwbGF5IG9ubHkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIG1ha2UgYSBsb29wIGdldCB0aGUgcHJvamVjdCdzIElELCBjb21wYXJlIHRoZSBJRCB0byB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCBvbiwgXG5cblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWUpIHsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZSA9IHZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlSUQgPSBwcm9qZWN0VmFsdWUuaWQ7IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHByb2plY3RWYWx1ZVtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG5cbi8vIGhlcmUgdG8gdG9wIG9mIGZ1bmN0aW9uLCBcblxuXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0OyBcbiAgLy8gICAgIGxldCBuYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIGxldCB5ID0gbG9jYWxTdG9yYWdlLmtleShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyh5KTtcbiAgLy8gICB9XG4gIC8vIH0gXG4gIC8vICAgZm9yKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIC8vIGxldCB4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0W1wia2V5XCJdOyBcblxuICAvLyAgICAgLy8gbGV0IHhpZCA9IHByb2plY3RbXCJpZFwiXTsgXG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHhpZCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyh4KTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cblxuICAvLyBvbGQgbG9naWMgYmVsb3cgXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGxldCB0YXJnZXRWYWx1ZVByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZUlEKTtcblxuICAvLyAgIC8vIGlmIChwcm9qZWN0VmFsdWVJRCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSkgeyBcbiAgLy8gICAvLyAgICAgICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIik7XG4gIFxuICAvLyAgIC8vICAgIH1cblxuXG5cbiAgLy8gICBsZXQgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW5cIik7XG4gICAgXG4gIC8vICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAvLyAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYpO1xuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmFwcGVuZCh0YXJnZXRWYWx1ZVByb2plY3ROYW1lKTtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbik7IFxuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICAvLyB9KVxuXG4gIC8vIGhlcmUgdG8gYm90dG9tIGJyYWNrZXQgXG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdk5hbWVCdG5OYXZiYXIpO1xuXG4vLyB9XG5cblxuLy8gZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuLy8gICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gdmFsdWVJblByb2plY3RbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgcHJvamVjdERpdi5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG5cbi8vICAgY29uc29sZS5sb2coc3RyaW5nVmFsdWUpO1xuXG5cblxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gbGV0IHByb2plY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlRGF0YSk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdFZhbHVlcyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG4vLyAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9ICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gXG5cblxuXG5cblxuXG5cblxuXG4vLyBtYWtlIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYXBwZW5kcyB0aGUgcmVzdWx0IHRvIHRoZSBET00uIFxuXG4vLyBmdW5jdGlvbiBwcmludFN0b3JhZ2VUb0RvbSgpIHsgXG4vLyAgIC8vIGxldCBnZXRTdG9yYWdlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuLy8gICAvLyBsZXQgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2VJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcblxuIFxuXG4vLyAgIGxldCBuYXZQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcbi8vICAgbmF2UHJvamVjdHNDb250YWluZXIuYXBwZW5kKHN0dXBpZFZhbHVlKTtcbi8vIH0gXG5cblxuLy8gcHJpbnRTdG9yYWdlVG9Eb20oKTtcblxuXG5cblxuXG4gIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuICAvLyBsZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbiAgLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKGZvcm1FbGVtZW50KTtcblxuLy8gZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cbi8vIFllYWgsIEkgdGhpbmsgZm9jdXNpbmcgb24gdGhlIGJhc2ljIGlkZWEgb2YgaG93IHRvIGNyZWF0ZSBhIHByb2plY3QgYW5kIFxuLy8gdG8gZGlzcGxheSB0aGUgY29ycmVjdCBwcm9qZWN0IHdoZW4gaXRzIHNpZGViYXIgYnV0dG9uIGlzIGNsaWNrZWQgd291bGQgYmUgbXkgZmlyc3Qgc3RlcC4gXG4vLyBUaGVuIHlvdSBjYW4gdGhpbmsgYWJvdXQgd2hhdCBzaG91bGQgYmUgb24gdGhlIHByb2plY3QncyBwYWdlOiB0aGV5IHdpbGwgbmVlZCBidXR0b25zIHRvIGFkZCBhIHRhc2sgYW5kIHdoYXQgbm90XG5cbi8vIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBwcm9qZWN0IG5hbWUsIGFuZCBzYXZlIHRoZSB2YWx1ZSwgcGFzcyB0aGF0IHZhbHVlIHRvIHN0b3JhZ2UuIFxuXG4vLyB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgc2F2ZWQsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkIGJ0biwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgZ2V0IHRoZSBpbnB1dCBmaWVsZCwgY2FwdHVyZSBpdCdzIHZhbHVlIHRoZW4gY29uc29sZSBsb2cgaXQgXG5cbi8vIHRoZSBpc3N1ZSBvZiB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgYmVpbmcgY2xlYXJlZCwgXG5cbi8vIHdlbGwgSSB3cmFwcGVkIGl0IGluc2lkZSBhIGZvcm0gdGFnLCBpdCB3b3JrcyBidXQgaXQgcmVmcmVzaGVzIHRoZSBwYWdlLCBJIG1lYW4gaXMgdGhhdCBhIHByb2JsZW0sIFxuXG4vLyBJIGd1ZXNzIG5vdyBJJ2xsIHdvcmsgb24gc3RvcmluZyB0aGUgZGF0YSwgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIERPTSBsb2dpY1xuLy8gZXhwb3J0IHRoZW4gaW1wb3J0IHdpdGhpbiBhbm90aGVyIGZpbGUgXG5cbi8vIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250ZW50VHlwZSB9IGZyb20gXCJtaW1lLXR5cGVzXCI7XG4vLyBpbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjsgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUlucHV0KCkgeyBcblxuLy8gICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIjtcblxuLy8gICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbi8vICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4vLyAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcblxuLy8gICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbi8vICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuLy8gfSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgdXNlcklucHV0VmFsdWUgPSB2YWx1ZTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbi8vICAgLy8gZ2V0IHRoZSBlbGVtZW50IGFuZCB0cnkgdG8gdXNlIGl0IGluc2lkZSBldmVudCBsaXN0ZW5lciBtb2R1bGUsIFxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpOyBcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgXG5cbi8vIC8vIGlmIChwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmluY2x1ZGVzKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKSkgeyBcbi8vIC8vICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuLy8gLy8gfVxuXG4vLyAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBjbGlja2VkIHRoZSBwcm9qZWN0IG5hbWVcIik7XG5cbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgICBcbi8vICAgICAvLyB3aGVuIGJ0biBpcyBjbGlja2VkIGl0IHdpbGwgZ2VuZXJhdGUgYSBwb3AtdXAgZm9ybSBcbi8vICAgICAvLyBJIHRoaW5rIHlvdSBuZWVkIGEgY29udGFpbmVyLCBhIGRpdiB0aGF0IGhvbGRzIHRoZSBjb250ZW50LCBhcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyLCBcbiAgICBcbi8vICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyAgXG4gICAgICBcbi8vICAgICAgIC8vIGlmIChtYWluQ29udGVudFByb2plY3RDb250YWluZXIuaW5jbHVkZXMoc29tZUJ0bikpIHtcbi8vICAgICAgIC8vICAgc29tZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4vLyAgICAgICAvLyB9XG5cbiAgICBcblxuLy8gICAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgICAgLy8gc29tZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wLXVwLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGxldCB0aXRsZU9mVG9Eb0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCIgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCIgdW5kZXJsaW5lXCI7XG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICAgIC8vIGluIG9yZGVyIHRvIGNlbnRlciBpdCB5b3UgbmVlZCB0byBhcHBlbmQgdGhpcyBlbGVtZW50IFxuXG4vLyAgICAgICAvLyB0byBhbm90aGVyIGNvbnRhaW5lciBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTsgXG5cbi8vICAgfSkgXG5cblxuLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cblxuXG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9NYWluKCkgeyBcbi8vICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7IFxuXG4vLyB9XG5cblxuXG4vLyBJJ20gYWJsZSB0byBnZXQgdGhlIHVzZXIgdmFsdWUsIEkgYW0gYWJsZSB0byBsb2cgb3V0IGl0J3MgdmFsdWUsIEkgYW0gYWJsZSB0byBncmFiIHRoZSBwcm9qZWN0cyBjb250YWluZXIgc2VjdGlvbixcblxuLy8gaXQgc3RpbGwgcmV0dXJucyBhbmQgSFRNTCBlbGVtZW50LCBJIGNhbiB0dXJuIGl0IGludG8gYW4gYXJyYXksIGJ1dCBJIGFtIHVuc3VyZSBvZiBob3cgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG5cbi8vIHdoYXQgSSB3YW50LCB0aGUgdXNlciB3aWxsIGVudGVyIHByb2plY3QgbmFtZSwgSSB3YW50IHRoYXQgbmFtZSB0byBhcHBlYXIgaW4gdGhlIHByb2plY3QncyBzZWN0aW9uIGFuZCBtYWluIGNvbnRlbnQgc2VjdGlvbihibHVlIHBhcnQpOyBcblxuLy8gUHJvYmxlbTogSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwZW5kIHRoaXMgcHJvamVjdCBuYW1lIHRvIHRoZSBET00uIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IE9uY2UgdGhlIGFkZCBidG4gaXMgcHJlc3NlZCwgdGhlIHZhbHVlL25hbWUgb2YgcHJvamVjdCB3aWxsIGJlIHNhdmVkLCBhbmQgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhhdCBcblxuLy8gdmFsdWUgYW5kIHByaW50cyB0byB0aGUgRE9NLiBcblxuLy8gSSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBjb250YWluZXIsIGFuZCB0aGUgbWFpbiBzZWN0aW9uIGJ1dCBpdCdzIGFuIEhUTUwgY29sbGVjdGlvbiwgSSBjYW4gY29udmVydCBpdCBpbnRvIGFuIGFycmF5LCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhcHBlbmQgYW4gYXJyYXkgdG8gdGhlIERPTT8gIiwiLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciBtb2R1bGVcblxuLy8gaW1wb3J0IFwic3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanNcIjsgXG5cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG5cblxuXG5sZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbmxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTsgXG5cbn0gIFxuXG59IFxuXG5wcm9qZWN0TmFtZUxvb3AoKTtcbiAgXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7ICBcblxuXG5cblxuXG4vLyB0b2RheSwgZWRpdGluZyB0b2RvJ3MgXG5cbi8vIHVzaW5nIGdldHRlcnMgYW5kIHNldHRlcnMsIFxuXG4vLyBsb29rIGJhY2sgYXQgZXhhbXBsZSwgYW5kIHNlZSBob3cgeW91IGNhbiB3b3JrIHRoYXQgaW50byBjdXJyZW50IGNvZGUgXG5cbi8vIHRoZSBnZXR0ZXJzIGFuZCBzZXR0ZXJzLCBzaG91bGQgcHJvYmFibHkgYmUgaW5zaWRlIHlvdXIgZmFjdG9yeSBmdW5jdGlvbiBcblxuLy8gd2hhdCB3aWxsIHdlIGJlIHBhc3NpbmcgdG8gdGhlIGZhY3Rvcnk/IFxuXG4vLyBXaHkgYSBnZXR0ZXIgYW5kIHNldHRlcj8gSSBqdXN0IG5lZWQgdG8gb3ZlcndyaXRlIHRoZSBkYXRhIGF0IHRoYXQgcGFydGljdWxhciBpbmRleCB3aXRoIHRoZSBkYXRhLCBcblxuLy8gY2FuJ3QgSSBwYXNzIHRoZSB2YWx1ZXMgdG8gdGhlIHNhbWUgZmFjdG9yeT8gbWFrZSB0aGUgc2FtZSBvYmplY3QgYW5kIHRoZW4gdXNlIHRoYXQgb2JqZWN0IHRvIHNwbGljZSBvciBvdmVyd3JpdGUgcHJvcGVyaXRlcz8gXG5cbi8vIHlvdSBjYW4gcHJvYmFibHkgZG8gdGhlIHNhbWUgcHJvY2VzcywgbWFrZSBhbiBvYmplY3QsIGJ1dCB5b3UgbmVlZCB0byBvdmVyd3JpdGUgdGhhdCB0b2RvIGFuZCB0aGF0IGluZGV4IHdpdGggdGhlIG5ldyBpbmZvLiBcblxuLy8gXG5cblxuXG4vLyBvayBzbyBhIHNlcGVyYXRlIG1vZGFsIGlzIGNyZWF0ZWQsIHdpdGggdW5pcXVlIGVsZW1lbnRzLCAgXG5cbi8vIG5vdyB3ZSBtdXN0IGdldCB0aGUgdmFsdWVzIGZvciBlYWNoIGlucHV0IGZpZWxkIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgY3VycmVudCBwcm9qZWN0cyB0b2RvcyA/IFxuXG4vLyBzb21laG93IEkgYWxzbyBuZWVkIHRvIGluY2x1ZGUgdGhlIGRhdGFzZXQgXG5cblxuXG4vLyBoZXJlIHdlIGFyZSBiYWNrIHdpdGggYXZlbmdhbmNlIFxuXG4vLyBJIGFtIHJlY292ZXJpbmcsIEknbSBnb2luZyB0byBkbyBhIGxpdHRsZSB3b3JrIHRvZGF5IFxuXG4vLyBzbyByaWdodCBub3cgSSB3YW50IHRvIGVkaXQgdG9kbydzIFxuXG4vLyBidXR0b24gaXMgY2xpY2tlZCBhbmQgdGhhdCBzaG91bGQgZ2VuZXJhdGUgYSBmb3JtIFxuXG4vLyB0aGUgZm9ybSBpcyBpZGVudGljYWwgdG8gbWFraW5nIGEgdG9kbywgXG5cbi8vIHlvdSB3aWxsIGp1c3QgbmVlZCB0byBhc3NvY2lhdGUgdGhhdCBwYXJ0aWN1bGFyIHRvZG8gXG5cbi8vIHdpdGggYSBkYXRhc2V0LCBzaW1pbGFyIHRvIGRlbGV0aW5nIGEgdG9kbywgXG5cbi8vIG9uY2UgdGhlIGVkaXQgYnRuIGlzIGNsaWNrZWQsIGdpdmUgdGhhdCB0b2RvIGEgZGF0YXNldCBcblxuLy8gZ2VuZXJhdGUgZm9ybSwgd2hhdGV2ZXIgdXNlciBlbnRlcnMsIHdpbGwgdXBkYXRlL292ZXJ3cml0ZSB0aGUgaW5mbyBcblxuLy8gaXQgd29uJ3QgY3JlYXRlIGEgbmV3IG9uZSwgaXQgd2lsbCBqdXN0IHVwZGF0ZS9tb2RpZml5IFxuXG4vLyB5b3VyIHByZXZpb3VzIGFwcHJvYWNoIEkgZG9uJ3QgYmVsaWV2ZSB3aWxsIHdvcmsgXG5cbi8vIGJlY2F1c2UgeW91IGFyZSB0cnlpbmcgdG8gdXNlIHRoZSBzYW1lIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gdGhhdCBzZWVtcyBsaWtlIGl0IHdpbGwgb25seSBjYXVzZSBpc3N1ZXMsIFxuXG4vLyBsZXRzIHNlcGVyYXRlIHRoZW0sIG1lYW5pbmcgY29weSB0aGUgc2V0LXVwIGFuZCBjb2RlIGZvciBjcmVhdGluZyBhIHRvZG8gbW9kYWwgXG5cbi8vIHN0eWxlIGV4YWN0bHkgdGhlIHNhbWUsIFxuXG4vLyBhZGQgdG9kbywgYW5kIGVkaXQgdG9kbyBhcmUgdHdvIHNlcGVyYXRlIGxpc3RlbmVycywgXG5cbi8vIG9uZSBpcyBmb3IgY3JlYXRpbmcsIHRoZSBvdGhlciBpcyBmb3IgbW9kaWZ5aW5nLCBcblxuLy8gbGV0cyBiZWdpbiwgdGhlIGFwcHJvYWNoIHNlZW1zIHZhbGlkLCBzdGFydCB3aXRoIHRoZSBIVE1MIFxuXG4vLyBiYXNpY2FsbHkgY29weSB0aGUgY29kZSwgc2xpZ2hseSBjaGFuZ2UgY2xhc3MgbmFtZXMsIFxuXG4vLyBzYW1lIHN0eWxlcywgaHRtbCwgY3NzLCB0aGVuIGdyYWIgdGhlIGVsZW1lbnQgYW5kIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbG9naWMsIFxuXG4vLyB3aXRoaW4gdGhlIGxpc3RlbmVyLCB3ZSBhcmUgbm90IGFkZGluZywgXG5cblxuXG5cbi8vIHBhc3MgdGhlIHVwZGF0ZWQgYXJyYXkgdG8gc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gSSB1cGRhdGUgdGhlIGFycmF5LCBcblxuLy8gY2FuIEkgcHVzaCB0aGluZ3MgdG8gaXQsIGFkZCB0aGluZ3MgdG8gaXQsIFxuXG4vLyBjYW4gSSB1c2UgZmlsdGVyLCBcblxuLy8gb2sgc28gbm93IEkgY2FuIGRlbGV0ZSBpbmRpdmlkdWFsIHByb2plY3RzIGFzIHdlbGwgYXMgdGhlIHByb2plY3QgYXMgYSB3aG9sZSBcblxuLy8gaG93IGNhbiBJIHJlZmxlY3QgdGhpcyBjaGFuZ2UgaW4gc3RvcmFnZT8gXG5cbi8vIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyBwbGFuIG9uIGhvdyBJIGNhbiBtYWtlIGFuIHVwZGF0ZSBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcmlnaHQgbm93IEl0IG9ubHkgZGVsZXRlcyBmcm9tIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIG15IGFycmF5IHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgaW4gdGhlIERPTT8gXG5cbi8vIGNhbiBJIGxvb2sgYmFjayBteSBkZWxldGUgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgZm9yIGluc3BpcmF0aW9uPyBcblxuLy8gdGhhdCBkZWxldGVzIGZyb20gYm90aCB0aGUgYXJyYXkgYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBmaXJzdCBjaGVjayB0aGF0IG91dCwgXG5cblxuXG5cbi8vIEkgYW0gZ2V0dGluZyB2ZXJ5IGNvbmZ1c2VkIG9uIGhvdyBJIGNhbiBkZWxldGUgYSBzaW5nbGUgdG9kbyBcblxuLy8gdXNpbmcgdGhlIFxuXG4vLyBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8sIGFuZCByZWZsZWN0IGluIHRoZSBET00sIFxuXG4vLyBidXQgYWxzbyBpbiBzdG9yYWdlLCBJIGNhbiByZW1vdmUgZnJvbSBET00sIFxuXG4vLyBidXQgSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGxvc3Qgb24gaG93IHRvIHJlbW92ZSBpdCBmcm9tIHN0b3JhZ2UsIFxuXG4vLyBJIHdhbnQgdG8gc2F5IHVzaW5nIGZpbHRlciB3b3VsZCBiZSBhIGdvb2Qgb3B0aW9uIFxuXG4vLyB0b2RheSB0aGUgZm9jdXMgaXMgZGVsZXRpbmcgYSBzaW5nbGUgdG9kbyBhbmQgcmVmbGVjdGluZyB0aGF0IFxuXG4vLyB3aXRoaW4gdGhlIHN0b3JhZ2UgYW5kIHdpdGhpbiB0aGUgRE9NLCBcblxuLy8gYWxzbyBpZiBJIGdldCBzdHVjayBvbiB0aGF0LCBcblxuLy8gZWRpdGluZyBhIHRvZG8sIHRoYXQgaWYgdXNlciBwcmVzc2VzIGVkaXQgYnRuLCBcblxuLy8gZ2VuZXJhdGUgdGhlIG1vZGFsIGFnYWluLCBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gZWRpdCB0aGF0IHRvZG8gXG5cbi8vIGFuZCB0aGVuIHJlZmxlY3QgdGhhdCBjaGFuZ2UgaW4gdGhlIERPTSBhbmQgaW4gc3RvcmFnZSwgXG5cbi8vIEkgd2lsbCBhc2sgdGhlIHF1ZXN0aW9uIHJpZ2h0IGF3YXkgYmVjYXVzZSBJIGFtIHN0dWNrLCBcblxuLy8gYnV0IHNwZW5kIGEgbGl0dGxlIHRpbWUgbG9va2luZyBvdmVyIHRoZSBjb2RlLCBcblxuXG5cblxuLy8gSSBtYWRlIGEgbmV3IGZvbGRlciBpbiBteSByZXBvcyBjYWxsZWQgdG9kbyBsaXN0LUIgXG5cbi8vIHRoZW4gSSBjbG9uZWQgd2l0aGluIHRoZXJlLCB0aGVuIGNvcGllZCBhbGwgbXkgY29kZSBmcm9tIG15IG1vZHVsZSBcblxuLy8gaW50byB0aGUgbmV3IHByb2plY3QsIHRoaW5ncyBzZWVtIHRvIGJlIHdvcmtpbmcgb2sgXG5cbi8vIGFtIEkgb2sgdG8gcHVzaCBhbmQgY29tbWl0IGNoYW5nZXMsIHdpbGwgdGhlc2UgY2hhbmdlcyBzdGlsbCBnbyB0byBcblxuLy8gdG9kbyBsaXN0LUEgPyBcblxuLy8gcmlnaHQgbm93IGEgcHJvYmxlbSBJIHNlZSBpcyB0aGF0IHByb2plY3RzIFxuXG4vLyBhcmUgbm90IGJlaW5nIGFkZGVkIHRvIHByb2plY3QgMiwgXG5cbi8vIHRoZSB0b2RvJ3Mgd29uJ3Qgc2hvdywgYW5kIGFueSBwcm9qZWN0IHRoYXQncyBub3QgMSwgZXJhc2VzIG9uIHJlZnJlc2gsIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5IGlzIGEgbmV3IGRheSwgXG5cbi8vIGxvb2sgYmFjayBvdmVyIHRoZSBtZXNzYWdlcywgZ2V0IGFuIGlkZWEsIFxuXG4vLyB0aGVuIGdyYWIgc29tZSBvZiB5b3VyIGZ1bmN0aW9ucywgXG5cbi8vIHRyeSB0byBpbXBsZW1lbnQgdGhlIHBsYW4gdGhhdCBleCBjYW1lIHVwIHdpdGgsIFxuXG4vLyBwYXNzIG9iamVjdHMgaW50byBhcnJheSBhbmQgbG9vcCB0aHJ1IHRoZW0sIFxuXG4vLyBmaXJzdCBsb29rIG92ZXIgdGhlIG1lc3NhZ2VzLCAgXG5cblxuLy8gb2sgc28gZ28gaW50byBjb2RlIHBlbiwgY29weSB0aGUgZGlzcGxheSBmdW5jdGlvbiBvdmVyLCBcblxuLy8gdHJ5IHRvIG1ha2UgYSBuZXcgb2JqZWN0LCBlYWNoIHRpbWUgeW91IGVudGVyIGZvcm0gZGF0YSwgXG5cbi8vIHRoZW4gYWRkIHRob3NlIHByb2plY3RzIHRvIHRoZSBhcnJheSwgXG5cblxuXG5cblxuLy8gb2sgc28gdG9kYXksIHRoZSB1bnFpdWUgdG9kb3MgYXJlIGJlaW5nIGRpc3BsYXllZCBcblxuLy8gbm93IHdlIG11c3Qgc3R5bGUgdGhlIHRvZG8ncyBcblxuLy8gZWFjaCBibG9jayBzaG91bGQgYmUgc3R5bGVkLCBcblxuLy8gbm90IGEgY29udGFpbmVyIHRoYW4gaGFzIGEgc3R5bGUgdGhhdCBob2xkcyBldmVyeXRoaW5nLCBcblxuLy8gdHJ5IHRvIG1ha2Ugc3VyZSBlYWNoIHNldCBvZiB0b2RvIGlzIGFwcGVuZGVkIHRvIGEgY29udGFpbmVyLCBcblxuLy8geW91IGFyZSBhcHBlbmRpbmcgZXZlcnl0aGluZyB0byB0aGF0IHNhbWUgY29udGFpbmVyLCBcblxuLy8gYXBwZW5kIHRvIG9uZSBjb250YWluZXIsIHN0eWxlIHRoYXQgdGhlbiBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIgXG5cblxuXG5cblxuXG5cbi8vIG9rIHdlIGhhdmUgc29tZXRoaW5nIHdvcmtpbmcgaGVyZSwgXG5cbi8vIHlvdSBoYXZlIHR3byBmdW5jdGlvbnMsIFxuXG4vLyBhdCBsZWFzdCBkYXRhIGlzIGJlaW5nIHByaW50ZWQgdG8gdGhlIERPTSwgYW5kIGlzIHN0b3JpbmcgaW4gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG5cbi8vIGNoZWNrIHlvdXIgZnVuY3Rpb25zIGFnYWluLCBcblxuLy8gcmVtZW1iZXIgb25lIHRvIGNyZWF0ZSB0aGUgZWxlbWVudHMvc3R5bGUsIG90aGVyIHRvIGp1c3QgZGlzcGxheSB0aGUgY3VycmVudFByb2plY3RzIHRvZG8ncyBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhcHBlbmQgdmFsdWVzLCBzdHlsZSwgXG5cbi8vIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQganVzdCBkaXNwbGF5IHRoZW0uIFxuXG5cblxuLy8gbGV0IGdldFRvZG9JdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0l0ZW1zXCIpOyBcblxuLy8gbGV0IHBhcnNlVG9kb0l0ZW1zID0gSlNPTi5wYXJzZShnZXRUb2RvSXRlbXMpOyBcblxuXG5cblxuLy8gZm9yIChsZXQgdG9kbyBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgbGV0IHRvZG9JdGVtID0gcGFyc2VUb2RvSXRlbXM7IFxuXG4vLyAgICAgIGxldCB2YWx1ZUluVG9kbyA9IHBhcnNlVG9kb0l0ZW1zW3RvZG9JdGVtXTsgXG5cbi8vICAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblRvZG8pOyBcblxuLy8gICAgICAvLyBjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG4vLyB9XG5cbi8vIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTtcblxuXG5cblxuXG5cbi8vIHN0b3JlIHRoZSB0b2RvcyBsaWtlIEkgZGlkIHdpdGggbmFtZXMsIFxuXG4vLyBsb29wIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRha2UgaW4gcHJvamVjdCwgYWRkIHRoZSB2YWx1ZXMsIFxuXG4vLyBwdXNoIHRoZSBwcm9qZWN0IGJhY2sgaW50byBwcm9qZWN0cyBhcnJheSwgYW5kIHRoZW4gXG5cbi8vIHBhc3MgdGhlIHByb2plY3RzQXJyYXkgYmFjayB0byBET00gZnVuY3Rpb24sIGFuZCBzdG9yYWdlLCBcblxuLy8gYWRkIHRoZSB0b2RvJ3Mgb24gYSBwcm9qZWN0LCB1cGRhdGUgaXQgYWdhaW4gXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBhcnNlVG9kb0l0ZW1zKTtcblxuXG4vLyBob3cgY2FuIEkga2VlcCBteSB0b2RvJ3MgYWZ0ZXIgcGFnZSByZWZyZXNoPyBZZXN0ZXJkYXkgaXQgc2VlbWVkIGxpa2UgaXQgd2FzIGEgcHJvYmxlbSBpbiBob3cgSSdtIHN0b3JpbmcgdGhlbSBhbmQgaG93IEkgcGFyc2UgdGhlbSBcblxuLy8gaXQgc2VlbXMgbGlrZSBpdCBpcyBhIHN0b3JhZ2UgcHJvYmxlbSwgaG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSB0b2RvIGFycmF5IHdpdGhpbiBlYWNoIHByb2plY3QsIFxuXG4vLyB0cnkgdG8gcGFyc2UgdGhlIGRhdGEgbGlrZSB1IGRpZCBiZWZvcmU/IFxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuLy8gZnVuY3Rpb24gcGFyc2VUb2RvKCkgeyBcbi8vICAgICAgZm9yIChsZXQgaXRlbSBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgICAgICBsZXQgdG9kbyA9IGl0ZW07IFxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gICAgICB9XG4vLyB9IFxuXG4vLyBwYXJzZURhdGEoKTtcblxuXG4vLyBPSyBzbyB0aGUgZGVsZXRpbmcgcHJvamVjdCBtZXRob2Qgd29ya3MhISBJIGFtIG5vdyBhYmxlIHRvIGRlbGV0ZSBhIHByb2plY3QgZnJvbSBtYWluIGFzIHdlbGwgYXMgdGhlIG5hdmJhciwgXG5cbi8vIG5leHQgSSBkaWQgdG8gYWRkIHRoZSBsb2dpYyBzbyB0aGUgdXNlciBjYW4gYWRkIHRvZG8ncywgXG5cbi8vIHJlbWVtYmVyIHRvZG8ncyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3Qgb2JqIGFycmF5LCBcblxuLy8gZmlyc3Qgd2UgcHJvYmFibHkgbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXB0dXJlIHRoZSB2YWx1ZSBcblxuLy8gb24gZWFjaCBpbnB1dCBmaWVsZCwgbGV0cyBzdGFydCB0aGVyZSwgXG5cbi8vIGEgZnVuY3Rpb24gd2lsbCBiZSBuZWVkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0IGlucHV0IGZpZWxkcyBcblxuLy8gYW5kIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGVtLCBcblxuXG5cblxuLy8gdGhpbmtpbmcgb2YgdGhlIG5leHQgc3RlcCBhZnRlciB0aGUgZGVsZXRpbmcgcHJvamVjdHMsIFxuXG4vLyB0aGF0IHdvdWxkIGJlIGdldHRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGlucHV0IGFuZCBcblxuLy8gcHVzaGluZyB0aGVtIGJhY2sgaW50byB0aGUgdG9kbyBhcnJheSB0aGF0IGVhY2ggcHJvamVjdCBjb250YWluZXJzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIGFjY2VzcyB0byB0aGF0IHRvZG8gYXJyYXksIHRyeSBhIHNpbXBsZSBsb2cgZmlyc3QgXG5cbi8vIGJ1dCB0aGUgdG9kbydzIHdpbGwgYmUgYWRkZWQgdG8gdGhlcmUgYnV0IGFsc28gaXQgbmVlZHMgdG8gYmUgXG5cbi8vIHJlZmxlY3RlZCBpbiB5b3VyIERPTSB0b28sIFxuXG4vLyBzbyB0aGlua2luZyBvZiBzb21lIHdheSB0byBhY2Nlc3MgdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoZSBvYmogXG5cblxuLy8gaWYgeW91IGNhbiBhY2Nlc3MgaXQgeW91IGFkZCB0aGUgdmFsdWVzIHRvIGl0LCBcblxuLy8gdGhlbiBvbmNlIHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBwcm9wZXJseSB3aXRoaW4gZWFjaCBvYmplY3QsIFxuXG4vLyB5b3Ugd2FudCB0byByZWZsZWN0IHRoYXQgaW4gdGhlIERPTSwgYWNjZXNzIHRoZSB0b2RvIGFuZCBkaXNwbGF5IGl0J3MgcHJvcGVydGllcyBcblxuLy8gdGhlbiBoYXZpbmcgYSB3YXkgdG8gZGVsZXRlIHRvZG8ncyBhbmQgaGF2aW5nIHRoYXQgdXBkYXRlIFxuXG4vLyB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTS4gXG5cblxuLy8gZ2V0dGluZyBwcm9qZWN0IElEIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4vLyAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuICAgICBcbi8vICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKTtcbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIGdldCB0aGUgcHJvamVjdCdzIElELCBnZXQgdGhlIElEJ3Mgd2l0aGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBhbmQgdGhlIElEJ3Mgd2l0aGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBjcmVhdGUgYSBsb29wIGluc2lkZSBlYWNoIHNlY3Rpb24gYW5kIGdldCB0aGUgdmFsdWUsIFxuXG5cblxuXG4vLyB3ZWxsIHlvdSBjYW4gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBidG4gY29udGFpbmVyIGZyb20gdGhlIERPTSwgXG5cbi8vIGNhbiB3ZSBmaWd1cmUgb3V0IGEgd2F5IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gbGV0cyB0YWtlIGEgbG9vayBhdCBob3cgdGhlIHZhbHVlIGlzIHN0b3JlZCwgXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBhbmQgc2VlIGlmIHNvbWVob3cgeW91ICBcblxuLy8gZ3JhYiBhIHZhbHVlLCBvciB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cblxuXG4vLyBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgdmFsdWVzIHd0aWhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBhIGxvb3AsIHRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdGhlIHZhbHVlJ3MgdGV4dCBjb250ZW50IG1hdGNoZXMsIHNldCB0aGUgdGV4dENvbnRlbnQgdG8gXCJcIiBvciBkZWxldGUgdGhlIGVsZW1lbnQsIFxuXG4vLyB0cnkgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHRoYXQgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdmFsdWVzIG1hdGNoLCBkZWxldGUgdGhlIHZhbHVlIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiB0aGF0IG1hdGNoZXMgbWFpbiBjb250ZW50cyB2YWx1ZSwgXG5cbi8vIGlkJ3MsIGVhY2ggcHJvamVjdCBoYXMgYSB1bnFpdWUgSUQsIGNvbXBhcmUgSUQncywgd2h5IGNhbnQgSSBkbywgaWYgdGhlIHRleHRDb250ZW50cy9zdHJpbmdzIG1hdGNoIHJlbW92ZT8gXG5cbi8vIEkgZ290IHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYWluLCBhbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB5b3VyIHByb2plY3RzLCBcblxuLy8gZG9lcyB0aGUgc3RyaW5nIG1hdGNoIHRoZSBvdGhlciBzdHJpbmcsIFxuXG4vLyBkbyBJRCdzIG1hdGNoPyBcblxuXG5cblxuXG4vLyBzYW1lIGlzc3VlLCBJIGFtIHRyeWluZyB0byBncmFiIHRoZSB2YWx1ZXMsIGFuZCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBkZWxldGUgdGhlIHByb2plY3QsIFxuXG4vLyBkZWxldGUgdGhlIHByb2plY3QgZnJvbSBib3RoIHBsYWNlcywgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGFuZCB0aGUgbGlzdCBvbiB2YWx1ZXMgaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGhvdyBjYW4gSSBkZWxldGUgYm90aCBpbiB0aGUgc2FtZSBwbGFjZSBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIFxuXG4vLyBqdXN0IGNoZWNrIHRvIHNlZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBET00sIHNlZSBpZiB5b3UgY2FuIGFkZCBhIGNsYXNzIHRvIGl0LCBcblxuXG4vLyB3aGlsZSB3ZXJlIHdhaXRpbmcgY2FuIHdlIGdldCB0aGUgcHJvamVjdHMgSUQ/IFxuXG4vLyBqdXN0IHNpbXBseSB0cnkgdG8gZ2V0IGEgcHJvamVjdHMgSUQuIGFuZCBsb2cgaXQsIFxuXG5cblxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cbi8vIG9rIHNvIEkgYW0gYWJsZSB0byB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIG9wZW5pbmcgdGhlIG1vZGFsIGFuZCBjbG9zaW5nIHRoZSBtb2RhbCwgXG5cbi8vIG5vdyB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgbG9naWMsIHRoYXQgd2lsbCBzZXQgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgbW9kYWwgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgaXQgd2lsbCBwb3AtdXAsIGNhbmNlbCBpdCB3aWxsIG5vdCBkaXNwbGF5IFxuXG4vLyBJIHRoaW5rIGp1c3QgZ3JhYmJpbmcgdGhlIHZhcmlhYmxlcyBhdCB0aGUgdG9wIGlzIGZpbmUsIGFuZCBqdXN0IGluIHRoZSBnbG9iYWwgc2NvcGUsIFxuXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHdvcmtzLCBzYXZlIGFuZCBjb21taXQsIHRoZW4gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSBkZWxldGUgYnRuIHdvcmtpbmcsIFxuXG4vLyBub3cgd291bGQgcHJvYmFibHkgYmUgdGhlIGJlc3QgdGltZSB0byBkbyB0aGF0LCBzaW5jZSB0aGUgYWRkIGJ0biBpcyB3b3JraW5nLCBub3cgd2UgY2FuXG5cbi8vIHdvcmsgb24gdGhlIGxvZ2ljLCB0aGF0IG9uY2UgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGFub3RoZXIgbW9kYWwsIGFza2luZyB0aGUgdXNlciBcblxuLy8gYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD8gSXQgd2lsbCBjbGVhciB0aGF0IHByb2plY3QgZm9yIHRoZSBET00gSW4gbWFpbiBcblxuLy8gYnV0IGFsc28gaW4gdGhlIHByb2plY3QncyBzZWN0aW9uLCBcblxuLy8vIHN0eWxlIHRoZSBtb2RhbCwgb25lIGJ0biB0byBjb25maXJtIGFuZCB0aGUgb3RoZXIgYnRuIHRvIGNhbmNlbCB0aGUgb3JkZXIsIFxuXG4vLyBPayBzbyB3ZSBoYXZlIHRoZSBwcmludCB2YWx1ZXMgdG8gdGhlIERPTSBmdW5jdGlvbiwgXG5cbi8vIGlmIHVzZXIgY2xpY2tzIHByb2plY3QgbmFtZSwgdmFsdWVzIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGlmIHVzZXIgcHJlc3NlcywgYWRkIG9yIGRlbGV0ZSwgbG9naWMgaXMgd2l0aGluIHRoZSBzYW1lIGZ1bmN0aW9uLCBcblxuLy8gSSBkb24ndCBzZWUgdGhhdCBiZWNvbWluZyBhIHByb2JsZW0sIG15IHRoaW5raW5nIGlzIHRoYXQgaXQncyBiZXR0ZXIgdG8gZG8gdGhhdCB0aGVyZSBcblxuLy8gdGhhbiBwYXNzaW5nIHRoZSB2YXJpYWJsZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBtaWdodCBhcyB3ZWxsIGRvIHRoYXQgYWxsIHRoZXJlLCBcblxuLy8gc28gdGhlIGRlbGV0ZSBidG4sIG1ha2UgdGhlIG1hcmt1cCBpbiB0aGUgSFRNTCBmaXJzdCwgZm9sbG93IHRoZSBndWlkZWxpbmVzIGJlZm9yZSwgZ28gc2xvdywgXG5cblxuLy8gbW9kYWwgaXMgd29ya2luZyBidXQganVzdCB0cnlpbmcgdG8gYWRkIHNwYWNlIFxuLy8gYmV0d2VlbiB0aGUgZWxlbWVudHMgdGhlIGNoZWNrIGFuZCB0aGUgeCwgZWxlbWVudCBcblxuLy8gb2sgZ290IHRoZSBkZWxldGUgYnRuIG1vZGFsIHdvcmtpbmcgYXMgSSB3YW50IHRvLCBuZXh0IEkgd2lsbCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LCBcblxuLy8gdGhhdCBvbmNlIGNsaWNrZWQgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwsIFxuXG4vLyBkb250IGZvcmdldCB0byBhZGQgdGhlIG92ZXJsYXkhIFxuXG5cblxuXG4vLyBuZXh0IHdpbGwgd29yayBvbiBkZWxldGluZyBhIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2ttYXJrLCBpdCBzaG91bGQgZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSwgdGhlIGFycmF5IFxuXG4vLyBhbmQgSSBiZWxpZXZlIGZyb20gbG9jYWwgc3RvcmFnZSB0b28sIHRoZW4gd29yayBvbiBzYXZpbmcgdG9kbyBpbmZvLCBmcm9tIHRoZSBtb2RhbCBhbmQgcHVzaGluZyBpbnRvIHRoZSBET00gYW5kIHN0b3JhZ2Ugd2hlcmUgXG5cbi8vIGVhY2ggcHJvamVjdCBoYXMgYSBsaXN0IG9mIHRvZG8ncywgaXQgd2lsbCBhZGRlZCB0aGVyZSB3aGlsZSBhbHNvIHJlZmxlY3RpbmcgdGhhdCBpbnRvIHRoZSBET00uIFxuXG4vLyB5ZXMgbmV4dCBzdGVwIGlzIGVpdGhlciBkZWxldGluZyB0aGUgcHJvamVjdCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBidG4sIGFuZCBnZXR0aW5nIGFsbCB0aGUgdXNlciBpbmZvIFxuXG4vLyB0aGF0IHdhcyBlbnRlcmVkIGFuZCBzYXZpbmcgdGhhdCB0b2RvLCB0byB0aGUgYXJyYXkgb2YgdG9kbydzIHRoYXQgZWFjaCBwcm9qZWN0IGhhcywgXG5cblxuXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cblxuLy8gc28gbm93IHdlIGZpZ3VyZWQgb3V0IGhvdyB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIG1vcmUgcHJvamVjdHMsIFxuXG4vLyBiYXNjaWNhbGx5IGNsZWFyIHRoZSBET00sIHRoZW4gYWRkIHByb2plY3RzLCBcblxuLy8gbm93IGFkZCB0aGUgbG9naWMsIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIG1vZGFsLCBmb3IgdGhlIHVzZXIgdG8gY3JlYXRlIGEgdG9kbywgXG5cbi8vIGZpcnN0IEkgd291bGQganVzdCB0cnkgaXQgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiBtYXliZSBzZWUgaWYgeW91IGNhbiBzcGxpdCB0aGUgY29kZSB1cCBhIGJpdCwgXG5cbi8vIHByaW50IGEgc2ltcGxlIG1lc3NhZ2Ugd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciBmaXJzdCwgXG5cbi8vIG9rIHdvcmtzIGdvb2QsIG5vdyBzdGFydCBjb25zdHJ1Y3RpbmcgeW91ciBtb2RhbCwgZm9sbG93IGFsb25nIHdpdGggdGhlIGFydGljbGUsIG9yIHZpZGVvLCBcblxuLy8gbmVlZHMgdGl0bGUsIHByaW9yaXR5LCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIFxuXG4vLyB0aG9zZSB2YWx1ZXMgYXJlIHRoZW4gYWRkZWQgdG8gdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoYXQgc3BlY2lmaWMgcHJvamVjdCwgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFNvIEkgbmVlZCB0byByZWNvbnNpZGVyIG15IGFwcHJvYWNoLCBpbnN0ZWFkIG9mIGhhdmluZyBzdG9yYWdlIHJlZmxlY3Qgd2hhdCBpcyBpbiB0aGUgRE9NLCBcblxuLy8gRE9NIGFuZCBzdG9yYWdlIGFyZSBzZXBlcmF0ZSwgd2hlbiBhIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkLCBzYXZlIHRvIHN0b3JhZ2UgYnV0IHlvdSBhbHNvIGhhdmUgcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYW5kIHdoYXRldmVyIGlzIGluc2lkZSBwcm9qZWN0cyBhcnJheSBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLCBpbiB0aGUgY29ycmVjdCBmb3JtYXQsIHlvdSBtYXkgaGF2ZSB0byBwYXJzZSBvciBzdHJpbmdpZnkgdGhlIGRhdGEgdG8gd29yaywgXG5cbi8vIHJlZmxlY3Qgd2hhdGV2ZXIgaXMgaW4gdGhlIHByb2plY3RzIGFycmF5IHRvIHRoZSBET00uIFxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbigpIHsgXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiSGV5IHRoaXMgd29ya3NcIik7XG4vLyAgICB9XG4gICBcblxuXG4vLyAtLSBvbmUgaXNzdWUgSSBub3RpY2UgaXMgdGhhdCBpZiBJIGFkZCBhIHByb2plY3QgbmFtZSwgSSBoYXZlIHRvIHJlZnJlc2ggZm9yIGl0IHRvIGdldCBpdCB0b28gc2hvdy4gISEhXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8gbmV4dCBpcyB0byB0YWtlIHRoZSB2YWx1ZXMvcHJvamVjdCBuYW1lcyB0aGF0IGFyZSBpbiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFuZCBhcHBlbmQgdGhvc2UgdG8gdGhlIERPTSwgXG4vLyBmaXJzdCBqdXN0IHRyeSB0byBncmFiIHRoZSBlbGVtbmVudCBhbmQgYXBwZW5kIHZhbHVlIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gd29yayBmcm9tIHRoZXJlLCBcblxuXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBkbyBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uIFxuXG4vLyBub3cgdHJ5IHRvIHNlcGVyYXRlIGl0LCBwdXQgdGhhdCBsb2dpYyB3aXRoaW4gdGhlIERPTSBNb2R1bGUsIHRoZW4gb25jZSB5b3UgZ2V0IHRoYXQgd29ya2luZywgc3R5bGUgd2l0aGluIHNlcGVyYXRlIHNoZWV0LCBcblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGJsYWggaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKGJsYWgpXG4vLyAgIG5ld0FycmF5LnB1c2goYmxhaCk7XG4vLyB9O1xuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBwcm9qZWN0IGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIG5ld0FycmF5LnB1c2gocHJvamVjdCk7XG4vLyB9OyAgICBcblxuXG5cbi8vIHRoaXNcbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGluZGV4IGluIHNvbWVBcnJheSkge1xuLy8gLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4vLyBsZXQgeCA9IE9iamVjdC52YWx1ZXMoc29tZUFycmF5KTtcblxuLy8gLy8gY29uc29sZS5sb2coeCk7XG5cbi8vICAgbmV3QXJyYXkucHVzaCh4KTtcblxuLy8gICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4vLyB9O1xuXG5cblxuXG5cblxuLy8gSSB3aWxsIG5leHQgd3JpdGUgYSBmdW5jdGlvbiB3aXRoaW4gRE9NIGxvZ2ljLCB0aGF0IHdpbGwgZ2V0IHRoZSBsb2NhbCBzdG9yYWdlLCBncmFiIHRoZSBwcm9qZWN0IG5hbWVzLCB0aGVuIHByaW50IHRoZW0gdG8gdGhlIERPTSwgd2l0aCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gaWYgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgYXR0YWNoIGEgbGlzdGVuZXIsIHRoZW4gd2l0aGluIGxpc3RlbmVyIGxvZ2ljIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBET00sIGluIGJvdGggcGxhY2VzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIHRvIGNsZWFyIG1haW4gY29udGVudCB0byBtYWtlIHdheSBmb3IgdGhlIG5ldyBjb250ZW50LCB1c2luZyByZXBsYWNlIGNoaWxkLCBcblxuLy8geW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG9iaiB0byBhIHN0cmluZywgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHByb3BlciBmb3JtYXQgYmVmb3JlIGFwcGVuZGluZywgXG5cbi8vIGlmIGp1c3QgbmVlZHMgdG8gYmUgdGhlIHN0cmFpZ2h0IHByb2plY3QgbmFtZSwgXG5cbi8vIHNvIG9uY2UgY2xpY2tlZCBwb3B1bGF0ZSB3aXRoIHR3byBidXR0b25zLCBkZWxldGUsIGFuZCBhZGQgYnRuLCBpZiBhZGQgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGZvcm0gd2hpY2ggd2lsbCBzYXZlIGRhdGEgYW5kIGFkZCB0byB0b2RvJ3Mgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhcHBlbmQgdGhvc2UgdG9kbydzIHRvIHRoZSBET00gYXMgdGhleSBhcmUgYWRkZWQsIGFuZCByZW1vdmUgaWYgdGhleSBhcmUgZGVsZXRlZC4gXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkuY2xlYXIoKTsgXG5cblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBwcm9ibGVtcywgb24gc3RvcmFnZSB3aXRoIHRvZG8gbGlzdCwgbXkgZGF0YSBpcyBiZWluZyBzdG9yZWQgY29ycmVjdGx5LCAgXG5cbi8vIGJ1dCBJIGFtIG5vdGljaW5nIG15IHByb2plY3QgbmFtZXMgYXJlIGtlZXAgZ2V0dGluZyBuZXN0ZWQgaW5zaWRlIG11bHRpcGxlIGFycmF5J3MsIGN1cnJlbnRseSBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYXJlIG1hZGUgaW50byBvYmplY3RzIHRoZW4gb2JqZWN0cyBhcmUgcGFzc2VkIHRvIGFycmF5IGZvciBzdG9yYWdlLCBvbmNlIHRoZSBwYWdlIHJlbG9hZHMsIFxuXG4vLyBJIHBhcnNlIHRocm91Z2ggdGhlIGRhdGEgaW4gc3RvcmFnZSwgYW5kIHB1c2ggdGhlIGRhdGEgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGRhdGEgaXMgc2F2ZWQsIFxuXG4vLyBsaWtlIEkgc2FpZCwgYXJyYXkncyBhcmUgYmVpbmcgbmVzdGVkIHdpdGhpbiBtdWx0aXBsZSBsZXZlbHMgYW5kIEknbSBub3Qgc3VyZSB3aHkuIFxuXG4vLyBwaWN0dXJlIGF0dGFjaGVkIGFuZCBzb21lIHNuaXBwZXRzIG9mIG15IGNvZGUgYXR0YWNoZWQgZm9yIGNvbnRleHQsIEkgY2FuIGFsc28gYXR0YWNoIG15IHJlcG8gaWYgdGhhdCBoZWxwcyB0byBmdXJ0aGVyIGRlYnVnIHRoaXMsIFxuXG5cblxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICIsIlxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG4vLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG4gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlU2V0SXRlbShuYW1lKSB7IFxuXG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTsgIFxuICAgIFxuICAgIFxuICAgIFxufSAgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBcnJheVN0b3JhZ2UoaXRlbSkgeyBcbi8vICAgICBsZXQgdGhpc1Byb2plY3QgPSBpdGVtOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXNQcm9qZWN0KTtcbi8vIH1cblxuXG4vLyB3aGF0IHByb3BlcnRpZXMgd291bGQgdGhlIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24gaGF2ZT8gXG5cbi8vIHdoYXQgd291bGQgaXQgdGFrZSBpbj8gXG5cbi8vIEkgdGhpbmsgeW91IG1pZ2h0IGhhdmUgdG8gdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIG9yIGZpbHRlciBvdXQgdGhlIGl0ZW1zIHRoYXQgd2VyZSBkZWxldGVkLCBcblxuLy8gdGhlbiBwYXNzIHRoYXQgdG8gdXBkYXRlIHN0b3JhZ2UsIFxuXG5cbi8vIHNvIG5vdyBuZXh0LCBJIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gXG5cbi8vIHVwZGF0ZSBteSBzdG9yYWdlIGFuZCBhcnJheSBiYXNlZCBvbiB3aGVuIHVzZXIgZGVsZXRlcyBcblxuLy8gYSBzaW5nbGUgdG9kbyBpdGVtLCBcblxuLy8gc29tZXRoaW5nIHdpbGwgbmVlZCB0byBiZSBwYXNzZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gc3RvcmFnZSByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIERPTSwgXG5cbi8vIHByb2plY3QgaXMgZGVsZXRpbmcgZnJvbSB0aGUgRE9NLCBidXQgaXQgc3RpbGwgc2hvd3MgaW4gYXJyYXkgXG5cbi8vIGFuZCBzdGlsbCBzaG93cyBpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYWZ0ZXIgdGhlIHByb2plY3QgaXMgZGVsZXRlZCBmcm9tIHRoZSBET00sIFxuXG4vLyB0aGUgcHJpbnRWYWx1ZVRvRE9NIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gXG5cbi8vIHNvIHRoYXQgY2FuIHJlZmxlY3QgdGhlIGxvY2FsIHN0b3JhZ2UgdG8gdGhlIERPTSwgXG5cbi8vIHNvIEkgdGhpbmsgdGhlIHByb2plY3QgYXJyYXkgaXMgZ29pbmcgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIHRoZSBwcmludHZhbHVlIHRvIGRvbSBmdW5jdGlvbiBuZWVkcyB0byBjYWxsZWQsIHNvIHNod28gdG8gdGhlIERPTSBcblxuLy8gd2hhdCBpcyBpbnNpZGUgbG9jYWwgc3RvcmFnZSBcblxuLy8gY29udGludWUgdG8gYnJhaW5zdG9ybSBob3cgdG8gcmVmbGVjdCB0aGUgY2hhbmdlIGluIGRlbGV0aW5nIFxuXG4vLyBwcm9qZWN0cyBmcm9tIHRoZSBET00gYW5kIGhvdyB0byB1cGRhdGUgdGhhdCBpbiBsb2NhbCBzdG9yYWdlLiBcblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlVG9kb0l0ZW1zKHByb2plY3QpIHsgXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7IFxuICAgIFxuLy8gIH1cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZSgpIHsgXG4vLyAgIGxldCBnZXROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbiAgXG4vLyAgIGNvbnNvbGUubG9nKGdldE5hbWUpOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmogPSBwcm9qZWN0TmFtZUZhY3RvcnkoZ2V0TmFtZSk7IFxuXG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG15IGdvYWwgaXMgdG8gaGF2ZSBpbmRpdmR1YWwgcHJvamVjdCBuYW1lIG9iamVjdHMsIFxuXG4vLyBJIGFtIGFibGUgdG8gY3JlYXRlIHByb2plY3QgbmFtZXMsIGJ1dCB3aGVuIEkgdXNlIG9iamVjdHMgaXQgb25seSBhZGRzIG9udG8sIGFuZCBkb2VzIG5vdCBjcmVhdGUgdW5pcXVlIHByb2plY3RzLiBcblxuLy8gXG5cblxuXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFyciA9IFtdO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB2YWx1ZVtpXTsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQpO1xuLy8gICAgICAgICBhcnIucHVzaChwcm9qZWN0TmFtZUlucHV0KTtcblxuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coYXJyKTsgXG4vLyAgICAgcmV0dXJuIGFycjsgXG4vLyB9IFxuXG4vLyBqdXN0IGFkZCB2YWx1ZXMgdG8gdGhlIGFycmF5IFxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0TmFtZSh2YWx1ZSkgeyBcblxuLy8gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlKTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lU3RvcmFnZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=