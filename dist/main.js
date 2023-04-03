/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/arrayStorage.js":
/*!*****************************!*\
  !*** ./src/arrayStorage.js ***!
  \*****************************/
/***/ (() => {

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

/***/ "./src/conditionalLogic.js":
/*!*********************************!*\
  !*** ./src/conditionalLogic.js ***!
  \*********************************/
/***/ (() => {

// import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic"; 

// import "./eventListenerModule"; 


// if the container, includes the element, remove it  

// What I want: after user enters name of project and hits add button, 
// I want the input field to be removed to make way for a new project, 
// 
// Problem: The input field container not being removed after using conditional logic, 

// what I've tried: After the element is added to the DOM, I call a function in a module 

// which checks if the container includes that element, if so remove the container, 

// remove the input field, after the value has been added to the DOM 

// to make way for a new element, 

// look at previous post for reason 

// What I am trying to do, is remove the projects container 

// once the user enters the name of project from the input field 

// I need a DOM method to remove the container, if the container 

// contains that value, 

// DOM methods for finding out if the container has the child 


// What I want: To add the functionality and logic behind my buttons. If the user presses add btn, it will add it to the DOM 

// then it will remove the input field container once the project has been added, 

// I also want the user to be able to click on add project btn again, so they can add another project, 

// problem: Currently user can only add one project, the btn logic does not work after, 

// What I've tried: I've tried using a conditional to check if the input field 

// if input field text field container userValue,  

// log it's variable 

// create a unique variable name, 

// this is the conditional logic function, 

// it determines if the book has been added remove it 

// console.log(userInputValue);

// export function removeInputFieldContainer() { 

//     // let projectDOMContainer = document.getElementById("input-field-container"); 

//     // let children = projectDOMContainer.children; 

//     // let lastChild = projectDOMContainer.lastChild;  

// //     let projectDOMContainer = document.getElementById("input-field-container");

// //     let inputFieldTextElement = document.querySelector(".input-field-text");

// //     let inputFieldTextValue = inputFieldTextElement.value; 

// //    console.log(inputFieldTextElement); 

// //    if (inputFieldTextValue === userInputValue) { 
// //      projectDOMContainer.textContent = "";
// //    } else { 
// //      return 
// //    }


// } 

// user value is not defined, 

/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ (() => {

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.querySelector(".btn-close");




























// import { add, intersection } from "lodash";


// const openModalButtonAddProjectName = document.querySelectorAll("[data-modal-target]"); 


// const closeModalButtons = document.querySelectorAll("[data-close-button]"); 

// const overlay = document.getElementById("overlay"); 

// openModalButtonAddProjectName.forEach(button => { 
  //   button.addEventListener("click", () => { 
    //     const modal = document.querySelector(button.dataset.modalTarget);
    //     openModal(modal);
    //   })
    // }) 
    
    // closeModalButtons.forEach(button => { 
      //   button.addEventListener("click", () => { 
        //     const modal = button.closest(".modal");
        //     closeModal(modal);
//   })
// }) 




// function openModal(modal) { 
  //   if (modal == null) return 
  //   modal.classList.add("active");
  //   overlay.classList.add("active");
  // } 
  
  
  // function closeModal(modal) { 
    //   if (modal == null) return 
    //   modal.classList.remove("active"); 
    //   overlay.classList.remove("active");
    // } 

    // let modal = document.getElementById("modal");
    
    // let addProjectButton = document.getElementById("add-project-btn"); 
    
    
    // let yourProjectsContainer = document.getElementById("navbar-your-projects-container");


    // let projectsContainer = document.getElementById("navbar-your-projects-container");

    // console.log(projectsContainer);


// console.log(addProjectButton); 

  //  let input = document.createElement("input");

  //  let btn = document.createElement("button");

  //  btn.textContent = "+";

  //  btn.style.fontSize = "1.5em";

 

  //  btn.style.height = "2.5em";

  //  btn.style.width = "2.5em";

  //  input.style.height = "2.2em";

  //  input.style.width = "18em";



  //  input.style.fontSize = "1.4rem";

  //  input.placeholder = "Name Your Project";














  // btn.textContent = "+";

  // btn.style.fontSize = "1.5em";

  // input.style.fontSize = "1.4rem";

  // input.placeholder = "Name Your Project"; 







  // add a class list and style in styles folder, 


// addProjectButton.addEventListener("click", () => { 
//   addProjectButton.style.display = "none";
//   // addProjectButton.visability = "none";

//   // hideAndShowDiv.style.display = "block";
//   projectsContainer.appendChild(input);
//   projectsContainer.appendChild(btn);
// })  
 
// when the user clicks out/focuses out on the input field, hide the input field, btn, and display the btn again? 

// input.addEventListener("focusout", () => { 
//   input.style.display = "none";
//   btn.style.display = "none"; 
//   // addProjectButton.style.display = "block";
//   // projectsContainer.appendChild(input);
//   // projectsContainer.appendChild(btn);
//   projectsContainer.appendChild(addProjectButton);
// })

// document.body.addEventListener("click", (e) => { 
//   if (e.target !== addProjectButton) {

//   }
// })

// document.body.append(input); 





// const modal = document.querySelector(".modal");

// const overlay = document.querySelector(".overlay"); 

// const addProjectButton = document.getElementById("add-project-btn");

// const closeModalBtn = document.querySelector(".btn-close");


// const openModal = function () {
//  modal.classList.remove("hidden");
//  overlay.classList.remove("hidden");
// }; 

// const closeModal = function () {
//   // modal.classList.add("hidden");
//   // overlay.classList.add("hidden");
//   modal.style.display = "none";
//   overlay.style.display = "none";
// }; 


// closeModalBtn.addEventListener("click", closeModal);

// addProjectButton.addEventListener("click", openModal); 























































































































































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

//     addToDoBtn.classList.add("create-to-do-form-btn");

    
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

//     addToDoBtn.textContent = "+ Add ToDo";

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

/***/ "./src/eventListenerModule.js":
/*!************************************!*\
  !*** ./src/eventListenerModule.js ***!
  \************************************/
/***/ (() => {











































































// import { addProjectFormInput, appendProjectNameToDOM } from "./domLogic";
// import { storeProjectName } from "./arrayStorage"; 


// const addProjectButton = document.getElementById("add-project-btn"); 

//  addProjectButton.addEventListener("click", () => {
  
//   addProjectButton.disabled = "true";
  
//   addProjectFormInput(); 
  
//   [...document.querySelectorAll(".add-btn")] .at(-1).addEventListener("click", (e) => {
    
//     let userValue = document.getElementsByClassName("input-field-text")[0].value; 

//     if (userValue !== "") { 
//       addProjectButton.disabled = false;
//      } else { 
//       return; 
//     } 
     
//     storeProjectName(userValue);

//     appendProjectNameToDOM(userValue); 

//     let projectDOMContainer = document.getElementById("input-field-container");

//     let inputFieldTextElement = document.querySelector(".input-field-text");

//     let inputFieldTextValue = inputFieldTextElement.value; 

//     if (inputFieldTextValue === userValue) { 
//       projectDOMContainer.textContent = "";
//     } else { 
//       return;
//     } 
//   }) 

//    let cancelBtn = document.querySelector(".cancel-btn"); 

//    cancelBtn.addEventListener("click", () =>{
//     let projectDOMContainer = document.getElementById("input-field-container"); 
//     projectDOMContainer.textContent = "";
//     addProjectButton.disabled = false; 
//    }) 
// }) 







// const navbarProjectNameElement = document.getElementById("project-element-from-navbar-section");

// console.log(navbarProjectNameElement); 



// let x = document.querySelectorAll(".input-field-text"); 

// console.log(x); 

// navbarProjectNameElement.addEventListener("click", () => {
//   console.log("hey"); 
//   // call the DOM function which handles 
// })










// attempts 

// projectSectionNameButtonArray.addEventListener("click", function(){
//   console.log("print something");
// })

// let projectSectionNameDiv = document.getElementsByClassName("project-section-btn")[0];

// let arr = Array.from(projectSectionNameDiv);

// console.log(arr);

// arr.addEventListener("click", function(){
//   console.log("This project sucks!");
// }) 


// projectSectionNameDiv.addEventListener("click", function(){
//   console.log("hi, I am working");
// }) 



// projectNameElementProjectSection.addEventListener("click", function(e){
//     console.log("Hey I'm in here");
//     projectNameElementMain.innerText = userInputValue;
//     mainContentProjectContainer.appendChild(projectNameElementMain); 

//     let someBtn = document.createElement("button"); 

//     someBtn.textContent = "Add ToDo";

//     mainContentProjectContainer.appendChild(someBtn);

//   }) 







// if userValue is === '' empty, then disable btn, if not, enable btn so it can be clicked again, 

// trying to think of the logic, to make sure only one input field can be generated at a time, 

// user should not be able to press add project and add multiple input fields, 

// once the value is entered, the btn can be pressed again. 

  // here, the function will need to called when a condition is met. 

  // what is the condition? cannot press the btn unless the current 

  // if  



// cancel btn functionality works, same with add btn, 

// is there a way I can fix the user from hitting the add project btn, before a project has been added? 

// btn can only be clicked once the add btn has been pressed, 


// next step would to try to work on the logic that prevents a user from adding another project 

// if the value/name has not been added, 

// understand how the element is being appended, 

// 




// apply the same logic with the cancel btn, 

// access the cancel btn element, use a selector, 

// 


// what I want to do, is after the project is appended to the DOM section, remove the container, 

// but allow the user to enter another project, with another name and enter it, 

// when I press the add project btn and enter a different name, it will only 

// output the first name that was entered, 

// the functionality is that the user clicks, add project, input field generated, name is added, 

// when user presses add, it will get added to the containers, input field removed, 

// the add project btn should still have functionality, allowing the user to enter another project, 

// try to put the logic outside of the loop 
















// i can access the value, that the user entered, now I need to find a way to append to the DOM. 

// appending value works, grab the target containers and append there. 




// access the input field element, append to DOM 






// grab add btn element, add a listener to it 

// let addProjectToDOMBtn = document.getElementsByClassName("add-btn")[0]; 




// const addProjectToDOMBtn = document.querySelectorAll(".add-btn");

// const newArr = Array.from(addProjectToDOMBtn);

// newArr.forEach(button => {
//   console.log(button);
//   button.addEventListener("click", function(e){
//     console.log("Hey, inside a clicker!");
//   });
// })


// document.querySelectorAll(".add-btn").forEach( button => {
//   console.log(button);
//   button.addEventListener("click", function(e){
//     console.log("Hey, inside a clicker!")
//   });
// })









// const newArray = Array.from(addProjectToDOMBtn);

// console.log(newArray);

//  newArray.addEventListener("click", function(){
//   console.log("1, 2, 1, 2"); 
// })

// const arr = Array.from(addProjectToDOMBtn);

// console.log(addProjectToDOMBtn);

// console.log(arr);

// console.log(addProjectToDOMBtn);







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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventListenerModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListenerModule */ "./src/eventListenerModule.js");
/* harmony import */ var _eventListenerModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventListenerModule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalLogic */ "./src/conditionalLogic.js");
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conditionalLogic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _arrayStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrayStorage */ "./src/arrayStorage.js");
/* harmony import */ var _arrayStorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_arrayStorage__WEBPACK_IMPORTED_MODULE_3__);
// Re-factor 

// first figure out how to properly display a project 

// change the add project btn that when clicked it will transform into an input form 

// hidden classes and onclick toggle a function which hides the btn and replaces it with something? An input field?

// add and remove classes depending on what the user 







 

// import "./style.scss";

// work on how you can, hide and show elements in JS depending on btn click, 

// I think you may need to make a elements in html, hide them, then call the element you want based

// upon a btn click, 

// hidden class can work, 

// next try to make an element visable when the add project btn is clicked, 

// add an input field, to the projects container, when the user clicks the add project

// Ok so when we click on the add project btn 

// it will hide the add project btn, 

// it will show an input field with an + btn, 

// now work on when the user clicks out of it, 

// it will bring back the add project btn, 

// wanted to find a way that when the input field is open and the user clicks away from it, it will bring back the +add project btn 

// and close the input field. 



// well now it seems like I need to make a pop-up field, to add the project name, 

// follow along on how to make a pop-up field, that includes an input field, 

// get value from input field, 

// pass the value to storage into an obj, and also into local storage 

// figure out how to make a function that displays the contents of the storage, to the DOM. 



// making the modal 

// btn can be used how you did with library, keep moving










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



// How can I stop the user from adding multiple btn's when user clicks on project? 

// the problem seems that I'm calling the function which does that within an event listener, 

// but where else can I call it? 

// Is there a way around this or do I need to major refactoing, this seemed like the right idea but now running into all these issues, 

// 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RHQSxZQUFZLDhDQUE4Qzs7QUFFMUQ7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7OztBQUdBOztBQUVBOzs7Ozs7Ozs7O0FDaEZBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxZQUFZLG9CQUFvQjs7O0FBR2hDOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7OztBQUtKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0pBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0aUJBLFlBQVksOENBQThDO0FBQzFELFlBQVksbUJBQW1COzs7QUFHL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJOzs7Ozs7OztBQVFKOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7QUFXSjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOzs7Ozs7OztBQVFOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7Ozs7O0FBS0E7Ozs7Ozs7QUFPQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7Ozs7Ozs7O0FBVUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztVQ3hVQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFK0I7O0FBRVg7O0FBRVE7O0FBRUo7O0FBRXhCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvYXJyYXlTdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9jb25kaXRpb25hbExvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdE5hbWUodmFsdWUpIHsgXG5cbi8vICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIGltcG9ydCB7IGFkZFByb2plY3RGb3JtSW5wdXQsIGFwcGVuZFByb2plY3ROYW1lVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiOyBcblxuLy8gaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7IFxuXG5cbi8vIGlmIHRoZSBjb250YWluZXIsIGluY2x1ZGVzIHRoZSBlbGVtZW50LCByZW1vdmUgaXQgIFxuXG4vLyBXaGF0IEkgd2FudDogYWZ0ZXIgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IGFuZCBoaXRzIGFkZCBidXR0b24sIFxuLy8gSSB3YW50IHRoZSBpbnB1dCBmaWVsZCB0byBiZSByZW1vdmVkIHRvIG1ha2Ugd2F5IGZvciBhIG5ldyBwcm9qZWN0LCBcbi8vIFxuLy8gUHJvYmxlbTogVGhlIGlucHV0IGZpZWxkIGNvbnRhaW5lciBub3QgYmVpbmcgcmVtb3ZlZCBhZnRlciB1c2luZyBjb25kaXRpb25hbCBsb2dpYywgXG5cbi8vIHdoYXQgSSd2ZSB0cmllZDogQWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWQgdG8gdGhlIERPTSwgSSBjYWxsIGEgZnVuY3Rpb24gaW4gYSBtb2R1bGUgXG5cbi8vIHdoaWNoIGNoZWNrcyBpZiB0aGUgY29udGFpbmVyIGluY2x1ZGVzIHRoYXQgZWxlbWVudCwgaWYgc28gcmVtb3ZlIHRoZSBjb250YWluZXIsIFxuXG4vLyByZW1vdmUgdGhlIGlucHV0IGZpZWxkLCBhZnRlciB0aGUgdmFsdWUgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIERPTSBcblxuLy8gdG8gbWFrZSB3YXkgZm9yIGEgbmV3IGVsZW1lbnQsIFxuXG4vLyBsb29rIGF0IHByZXZpb3VzIHBvc3QgZm9yIHJlYXNvbiBcblxuLy8gV2hhdCBJIGFtIHRyeWluZyB0byBkbywgaXMgcmVtb3ZlIHRoZSBwcm9qZWN0cyBjb250YWluZXIgXG5cbi8vIG9uY2UgdGhlIHVzZXIgZW50ZXJzIHRoZSBuYW1lIG9mIHByb2plY3QgZnJvbSB0aGUgaW5wdXQgZmllbGQgXG5cbi8vIEkgbmVlZCBhIERPTSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjb250YWluZXIsIGlmIHRoZSBjb250YWluZXIgXG5cbi8vIGNvbnRhaW5zIHRoYXQgdmFsdWUsIFxuXG4vLyBET00gbWV0aG9kcyBmb3IgZmluZGluZyBvdXQgaWYgdGhlIGNvbnRhaW5lciBoYXMgdGhlIGNoaWxkIFxuXG5cbi8vIFdoYXQgSSB3YW50OiBUbyBhZGQgdGhlIGZ1bmN0aW9uYWxpdHkgYW5kIGxvZ2ljIGJlaGluZCBteSBidXR0b25zLiBJZiB0aGUgdXNlciBwcmVzc2VzIGFkZCBidG4sIGl0IHdpbGwgYWRkIGl0IHRvIHRoZSBET00gXG5cbi8vIHRoZW4gaXQgd2lsbCByZW1vdmUgdGhlIGlucHV0IGZpZWxkIGNvbnRhaW5lciBvbmNlIHRoZSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkLCBcblxuLy8gSSBhbHNvIHdhbnQgdGhlIHVzZXIgdG8gYmUgYWJsZSB0byBjbGljayBvbiBhZGQgcHJvamVjdCBidG4gYWdhaW4sIHNvIHRoZXkgY2FuIGFkZCBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBwcm9ibGVtOiBDdXJyZW50bHkgdXNlciBjYW4gb25seSBhZGQgb25lIHByb2plY3QsIHRoZSBidG4gbG9naWMgZG9lcyBub3Qgd29yayBhZnRlciwgXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogSSd2ZSB0cmllZCB1c2luZyBhIGNvbmRpdGlvbmFsIHRvIGNoZWNrIGlmIHRoZSBpbnB1dCBmaWVsZCBcblxuLy8gaWYgaW5wdXQgZmllbGQgdGV4dCBmaWVsZCBjb250YWluZXIgdXNlclZhbHVlLCAgXG5cbi8vIGxvZyBpdCdzIHZhcmlhYmxlIFxuXG4vLyBjcmVhdGUgYSB1bmlxdWUgdmFyaWFibGUgbmFtZSwgXG5cbi8vIHRoaXMgaXMgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZ1bmN0aW9uLCBcblxuLy8gaXQgZGV0ZXJtaW5lcyBpZiB0aGUgYm9vayBoYXMgYmVlbiBhZGRlZCByZW1vdmUgaXQgXG5cbi8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dFZhbHVlKTtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlucHV0RmllbGRDb250YWluZXIoKSB7IFxuXG4vLyAgICAgLy8gbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAvLyBsZXQgY2hpbGRyZW4gPSBwcm9qZWN0RE9NQ29udGFpbmVyLmNoaWxkcmVuOyBcblxuLy8gICAgIC8vIGxldCBsYXN0Q2hpbGQgPSBwcm9qZWN0RE9NQ29udGFpbmVyLmxhc3RDaGlsZDsgIFxuXG4vLyAvLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vIC8vICAgICBsZXQgaW5wdXRGaWVsZFRleHRWYWx1ZSA9IGlucHV0RmllbGRUZXh0RWxlbWVudC52YWx1ZTsgXG5cbi8vIC8vICAgIGNvbnNvbGUubG9nKGlucHV0RmllbGRUZXh0RWxlbWVudCk7IFxuXG4vLyAvLyAgICBpZiAoaW5wdXRGaWVsZFRleHRWYWx1ZSA9PT0gdXNlcklucHV0VmFsdWUpIHsgXG4vLyAvLyAgICAgIHByb2plY3RET01Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuLy8gLy8gICAgfSBlbHNlIHsgXG4vLyAvLyAgICAgIHJldHVybiBcbi8vIC8vICAgIH1cblxuXG4vLyB9IFxuXG4vLyB1c2VyIHZhbHVlIGlzIG5vdCBkZWZpbmVkLCAiLCJjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jbG9zZVwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IHsgYWRkLCBpbnRlcnNlY3Rpb24gfSBmcm9tIFwibG9kYXNoXCI7XG5cblxuLy8gY29uc3Qgb3Blbk1vZGFsQnV0dG9uQWRkUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbW9kYWwtdGFyZ2V0XVwiKTsgXG5cblxuLy8gY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2xvc2UtYnV0dG9uXVwiKTsgXG5cbi8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7IFxuXG4vLyBvcGVuTW9kYWxCdXR0b25BZGRQcm9qZWN0TmFtZS5mb3JFYWNoKGJ1dHRvbiA9PiB7IFxuICAvLyAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbiAgICAvLyAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbi5kYXRhc2V0Lm1vZGFsVGFyZ2V0KTtcbiAgICAvLyAgICAgb3Blbk1vZGFsKG1vZGFsKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gfSkgXG4gICAgXG4gICAgLy8gY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4geyBcbiAgICAgIC8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAgICAgICAvLyAgICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdChcIi5tb2RhbFwiKTtcbiAgICAgICAgLy8gICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuLy8gICB9KVxuLy8gfSkgXG5cblxuXG5cbi8vIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkgeyBcbiAgLy8gICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuICAvLyAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIC8vICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAvLyB9IFxuICBcbiAgXG4gIC8vIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHsgXG4gICAgLy8gICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuIFxuICAgIC8vICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgXG4gICAgLy8gICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgLy8gfSBcblxuICAgIC8vIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gICAgXG4gICAgLy8gbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTsgXG4gICAgXG4gICAgXG4gICAgLy8gbGV0IHlvdXJQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG5cbiAgICAvLyBsZXQgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzQ29udGFpbmVyKTtcblxuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0QnV0dG9uKTsgXG5cbiAgLy8gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAvLyAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLy8gIGJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIC8vICBidG4uc3R5bGUuZm9udFNpemUgPSBcIjEuNWVtXCI7XG5cbiBcblxuICAvLyAgYnRuLnN0eWxlLmhlaWdodCA9IFwiMi41ZW1cIjtcblxuICAvLyAgYnRuLnN0eWxlLndpZHRoID0gXCIyLjVlbVwiO1xuXG4gIC8vICBpbnB1dC5zdHlsZS5oZWlnaHQgPSBcIjIuMmVtXCI7XG5cbiAgLy8gIGlucHV0LnN0eWxlLndpZHRoID0gXCIxOGVtXCI7XG5cblxuXG4gIC8vICBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IFwiMS40cmVtXCI7XG5cbiAgLy8gIGlucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lIFlvdXIgUHJvamVjdFwiO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgLy8gYnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgLy8gYnRuLnN0eWxlLmZvbnRTaXplID0gXCIxLjVlbVwiO1xuXG4gIC8vIGlucHV0LnN0eWxlLmZvbnRTaXplID0gXCIxLjRyZW1cIjtcblxuICAvLyBpbnB1dC5wbGFjZWhvbGRlciA9IFwiTmFtZSBZb3VyIFByb2plY3RcIjsgXG5cblxuXG5cblxuXG5cbiAgLy8gYWRkIGEgY2xhc3MgbGlzdCBhbmQgc3R5bGUgaW4gc3R5bGVzIGZvbGRlciwgXG5cblxuLy8gYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbi8vICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgIC8vIGFkZFByb2plY3RCdXR0b24udmlzYWJpbGl0eSA9IFwibm9uZVwiO1xuXG4vLyAgIC8vIGhpZGVBbmRTaG93RGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbi8vICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbi8vIH0pICBcbiBcbi8vIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dC9mb2N1c2VzIG91dCBvbiB0aGUgaW5wdXQgZmllbGQsIGhpZGUgdGhlIGlucHV0IGZpZWxkLCBidG4sIGFuZCBkaXNwbGF5IHRoZSBidG4gYWdhaW4/IFxuXG4vLyBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4geyBcbi8vICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICBidG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgLy8gYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuLy8gICAvLyBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4vLyAgIC8vIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4vLyAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuLy8gfSlcblxuLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGlmIChlLnRhcmdldCAhPT0gYWRkUHJvamVjdEJ1dHRvbikge1xuXG4vLyAgIH1cbi8vIH0pXG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kKGlucHV0KTsgXG5cblxuXG5cblxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG4vLyBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG4vLyBjb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2xvc2VcIik7XG5cblxuLy8gY29uc3Qgb3Blbk1vZGFsID0gZnVuY3Rpb24gKCkge1xuLy8gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4vLyAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuLy8gfTsgXG5cbi8vIGNvbnN0IGNsb3NlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4vLyAgIC8vIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4vLyAgIC8vIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH07IFxuXG5cbi8vIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4vLyBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTW9kYWwpOyBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIGFkZFRvRG9CdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10by1kby1mb3JtLWJ0blwiKTtcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IHsgYWRkUHJvamVjdEZvcm1JbnB1dCwgYXBwZW5kUHJvamVjdE5hbWVUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG4vLyBpbXBvcnQgeyBzdG9yZVByb2plY3ROYW1lIH0gZnJvbSBcIi4vYXJyYXlTdG9yYWdlXCI7IFxuXG5cbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTsgXG5cbi8vICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFxuLy8gICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gXCJ0cnVlXCI7XG4gIFxuLy8gICBhZGRQcm9qZWN0Rm9ybUlucHV0KCk7IFxuICBcbi8vICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKV0gLmF0KC0xKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBcbi8vICAgICBsZXQgdXNlclZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImlucHV0LWZpZWxkLXRleHRcIilbMF0udmFsdWU7IFxuXG4vLyAgICAgaWYgKHVzZXJWYWx1ZSAhPT0gXCJcIikgeyBcbi8vICAgICAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbi8vICAgICAgfSBlbHNlIHsgXG4vLyAgICAgICByZXR1cm47IFxuLy8gICAgIH0gXG4gICAgIFxuLy8gICAgIHN0b3JlUHJvamVjdE5hbWUodXNlclZhbHVlKTtcblxuLy8gICAgIGFwcGVuZFByb2plY3ROYW1lVG9ET00odXNlclZhbHVlKTsgXG5cbi8vICAgICBsZXQgcHJvamVjdERPTUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgICAgbGV0IGlucHV0RmllbGRUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dFZhbHVlID0gaW5wdXRGaWVsZFRleHRFbGVtZW50LnZhbHVlOyBcblxuLy8gICAgIGlmIChpbnB1dEZpZWxkVGV4dFZhbHVlID09PSB1c2VyVmFsdWUpIHsgXG4vLyAgICAgICBwcm9qZWN0RE9NQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbi8vICAgICB9IGVsc2UgeyBcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9IFxuLy8gICB9KSBcblxuLy8gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTsgXG5cbi8vICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTsgXG4vLyAgICAgcHJvamVjdERPTUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyBcbi8vICAgIH0pIFxuLy8gfSkgXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IG5hdmJhclByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vIGNvbnNvbGUubG9nKG5hdmJhclByb2plY3ROYW1lRWxlbWVudCk7IFxuXG5cblxuLy8gbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZpZWxkLXRleHRcIik7IFxuXG4vLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vIG5hdmJhclByb2plY3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImhleVwiKTsgXG4vLyAgIC8vIGNhbGwgdGhlIERPTSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIFxuLy8gfSlcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYXR0ZW1wdHMgXG5cbi8vIHByb2plY3RTZWN0aW9uTmFtZUJ1dHRvbkFycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcInByaW50IHNvbWV0aGluZ1wiKTtcbi8vIH0pXG5cbi8vIGxldCBwcm9qZWN0U2VjdGlvbk5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1zZWN0aW9uLWJ0blwiKVswXTtcblxuLy8gbGV0IGFyciA9IEFycmF5LmZyb20ocHJvamVjdFNlY3Rpb25OYW1lRGl2KTtcblxuLy8gY29uc29sZS5sb2coYXJyKTtcblxuLy8gYXJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIlRoaXMgcHJvamVjdCBzdWNrcyFcIik7XG4vLyB9KSBcblxuXG4vLyBwcm9qZWN0U2VjdGlvbk5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGksIEkgYW0gd29ya2luZ1wiKTtcbi8vIH0pIFxuXG5cblxuLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pO1xuXG4vLyAgIH0pIFxuXG5cblxuXG5cblxuXG4vLyBpZiB1c2VyVmFsdWUgaXMgPT09ICcnIGVtcHR5LCB0aGVuIGRpc2FibGUgYnRuLCBpZiBub3QsIGVuYWJsZSBidG4gc28gaXQgY2FuIGJlIGNsaWNrZWQgYWdhaW4sIFxuXG4vLyB0cnlpbmcgdG8gdGhpbmsgb2YgdGhlIGxvZ2ljLCB0byBtYWtlIHN1cmUgb25seSBvbmUgaW5wdXQgZmllbGQgY2FuIGJlIGdlbmVyYXRlZCBhdCBhIHRpbWUsIFxuXG4vLyB1c2VyIHNob3VsZCBub3QgYmUgYWJsZSB0byBwcmVzcyBhZGQgcHJvamVjdCBhbmQgYWRkIG11bHRpcGxlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdGhlIHZhbHVlIGlzIGVudGVyZWQsIHRoZSBidG4gY2FuIGJlIHByZXNzZWQgYWdhaW4uIFxuXG4gIC8vIGhlcmUsIHRoZSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gY2FsbGVkIHdoZW4gYSBjb25kaXRpb24gaXMgbWV0LiBcblxuICAvLyB3aGF0IGlzIHRoZSBjb25kaXRpb24/IGNhbm5vdCBwcmVzcyB0aGUgYnRuIHVubGVzcyB0aGUgY3VycmVudCBcblxuICAvLyBpZiAgXG5cblxuXG4vLyBjYW5jZWwgYnRuIGZ1bmN0aW9uYWxpdHkgd29ya3MsIHNhbWUgd2l0aCBhZGQgYnRuLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gZml4IHRoZSB1c2VyIGZyb20gaGl0dGluZyB0aGUgYWRkIHByb2plY3QgYnRuLCBiZWZvcmUgYSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkPyBcblxuLy8gYnRuIGNhbiBvbmx5IGJlIGNsaWNrZWQgb25jZSB0aGUgYWRkIGJ0biBoYXMgYmVlbiBwcmVzc2VkLCBcblxuXG4vLyBuZXh0IHN0ZXAgd291bGQgdG8gdHJ5IHRvIHdvcmsgb24gdGhlIGxvZ2ljIHRoYXQgcHJldmVudHMgYSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCBcblxuLy8gaWYgdGhlIHZhbHVlL25hbWUgaGFzIG5vdCBiZWVuIGFkZGVkLCBcblxuLy8gdW5kZXJzdGFuZCBob3cgdGhlIGVsZW1lbnQgaXMgYmVpbmcgYXBwZW5kZWQsIFxuXG4vLyBcblxuXG5cblxuLy8gYXBwbHkgdGhlIHNhbWUgbG9naWMgd2l0aCB0aGUgY2FuY2VsIGJ0biwgXG5cbi8vIGFjY2VzcyB0aGUgY2FuY2VsIGJ0biBlbGVtZW50LCB1c2UgYSBzZWxlY3RvciwgXG5cbi8vIFxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvLCBpcyBhZnRlciB0aGUgcHJvamVjdCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NIHNlY3Rpb24sIHJlbW92ZSB0aGUgY29udGFpbmVyLCBcblxuLy8gYnV0IGFsbG93IHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgd2l0aCBhbm90aGVyIG5hbWUgYW5kIGVudGVyIGl0LCBcblxuLy8gd2hlbiBJIHByZXNzIHRoZSBhZGQgcHJvamVjdCBidG4gYW5kIGVudGVyIGEgZGlmZmVyZW50IG5hbWUsIGl0IHdpbGwgb25seSBcblxuLy8gb3V0cHV0IHRoZSBmaXJzdCBuYW1lIHRoYXQgd2FzIGVudGVyZWQsIFxuXG4vLyB0aGUgZnVuY3Rpb25hbGl0eSBpcyB0aGF0IHRoZSB1c2VyIGNsaWNrcywgYWRkIHByb2plY3QsIGlucHV0IGZpZWxkIGdlbmVyYXRlZCwgbmFtZSBpcyBhZGRlZCwgXG5cbi8vIHdoZW4gdXNlciBwcmVzc2VzIGFkZCwgaXQgd2lsbCBnZXQgYWRkZWQgdG8gdGhlIGNvbnRhaW5lcnMsIGlucHV0IGZpZWxkIHJlbW92ZWQsIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIHNob3VsZCBzdGlsbCBoYXZlIGZ1bmN0aW9uYWxpdHksIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHRyeSB0byBwdXQgdGhlIGxvZ2ljIG91dHNpZGUgb2YgdGhlIGxvb3AgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGkgY2FuIGFjY2VzcyB0aGUgdmFsdWUsIHRoYXQgdGhlIHVzZXIgZW50ZXJlZCwgbm93IEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuLy8gYXBwZW5kaW5nIHZhbHVlIHdvcmtzLCBncmFiIHRoZSB0YXJnZXQgY29udGFpbmVycyBhbmQgYXBwZW5kIHRoZXJlLiBcblxuXG5cblxuLy8gYWNjZXNzIHRoZSBpbnB1dCBmaWVsZCBlbGVtZW50LCBhcHBlbmQgdG8gRE9NIFxuXG5cblxuXG5cblxuLy8gZ3JhYiBhZGQgYnRuIGVsZW1lbnQsIGFkZCBhIGxpc3RlbmVyIHRvIGl0IFxuXG4vLyBsZXQgYWRkUHJvamVjdFRvRE9NQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1idG5cIilbMF07IFxuXG5cblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0VG9ET01CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIik7XG5cbi8vIGNvbnN0IG5ld0FyciA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gbmV3QXJyLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIik7XG4vLyAgIH0pO1xuLy8gfSlcblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIikuZm9yRWFjaCggYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIilcbi8vICAgfSk7XG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgbmV3QXJyYXkgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcblxuLy8gIG5ld0FycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIjEsIDIsIDEsIDJcIik7IFxuLy8gfSlcblxuLy8gY29uc3QgYXJyID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhcnIpO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBSZS1mYWN0b3IgXG5cbi8vIGZpcnN0IGZpZ3VyZSBvdXQgaG93IHRvIHByb3Blcmx5IGRpc3BsYXkgYSBwcm9qZWN0IFxuXG4vLyBjaGFuZ2UgdGhlIGFkZCBwcm9qZWN0IGJ0biB0aGF0IHdoZW4gY2xpY2tlZCBpdCB3aWxsIHRyYW5zZm9ybSBpbnRvIGFuIGlucHV0IGZvcm0gXG5cbi8vIGhpZGRlbiBjbGFzc2VzIGFuZCBvbmNsaWNrIHRvZ2dsZSBhIGZ1bmN0aW9uIHdoaWNoIGhpZGVzIHRoZSBidG4gYW5kIHJlcGxhY2VzIGl0IHdpdGggc29tZXRoaW5nPyBBbiBpbnB1dCBmaWVsZD9cblxuLy8gYWRkIGFuZCByZW1vdmUgY2xhc3NlcyBkZXBlbmRpbmcgb24gd2hhdCB0aGUgdXNlciBcblxuaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7XG5cbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IFwiLi9jb25kaXRpb25hbExvZ2ljXCI7XG5cbmltcG9ydCBcIi4vYXJyYXlTdG9yYWdlXCI7IFxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuLy8gd29yayBvbiBob3cgeW91IGNhbiwgaGlkZSBhbmQgc2hvdyBlbGVtZW50cyBpbiBKUyBkZXBlbmRpbmcgb24gYnRuIGNsaWNrLCBcblxuLy8gSSB0aGluayB5b3UgbWF5IG5lZWQgdG8gbWFrZSBhIGVsZW1lbnRzIGluIGh0bWwsIGhpZGUgdGhlbSwgdGhlbiBjYWxsIHRoZSBlbGVtZW50IHlvdSB3YW50IGJhc2VkXG5cbi8vIHVwb24gYSBidG4gY2xpY2ssIFxuXG4vLyBoaWRkZW4gY2xhc3MgY2FuIHdvcmssIFxuXG4vLyBuZXh0IHRyeSB0byBtYWtlIGFuIGVsZW1lbnQgdmlzYWJsZSB3aGVuIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIGFkZCBhbiBpbnB1dCBmaWVsZCwgdG8gdGhlIHByb2plY3RzIGNvbnRhaW5lciwgd2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGFkZCBwcm9qZWN0XG5cbi8vIE9rIHNvIHdoZW4gd2UgY2xpY2sgb24gdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBoaWRlIHRoZSBhZGQgcHJvamVjdCBidG4sIFxuXG4vLyBpdCB3aWxsIHNob3cgYW4gaW5wdXQgZmllbGQgd2l0aCBhbiArIGJ0biwgXG5cbi8vIG5vdyB3b3JrIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dCBvZiBpdCwgXG5cbi8vIGl0IHdpbGwgYnJpbmcgYmFjayB0aGUgYWRkIHByb2plY3QgYnRuLCBcblxuLy8gd2FudGVkIHRvIGZpbmQgYSB3YXkgdGhhdCB3aGVuIHRoZSBpbnB1dCBmaWVsZCBpcyBvcGVuIGFuZCB0aGUgdXNlciBjbGlja3MgYXdheSBmcm9tIGl0LCBpdCB3aWxsIGJyaW5nIGJhY2sgdGhlICthZGQgcHJvamVjdCBidG4gXG5cbi8vIGFuZCBjbG9zZSB0aGUgaW5wdXQgZmllbGQuIFxuXG5cblxuLy8gd2VsbCBub3cgaXQgc2VlbXMgbGlrZSBJIG5lZWQgdG8gbWFrZSBhIHBvcC11cCBmaWVsZCwgdG8gYWRkIHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBmb2xsb3cgYWxvbmcgb24gaG93IHRvIG1ha2UgYSBwb3AtdXAgZmllbGQsIHRoYXQgaW5jbHVkZXMgYW4gaW5wdXQgZmllbGQsIFxuXG4vLyBnZXQgdmFsdWUgZnJvbSBpbnB1dCBmaWVsZCwgXG5cbi8vIHBhc3MgdGhlIHZhbHVlIHRvIHN0b3JhZ2UgaW50byBhbiBvYmosIGFuZCBhbHNvIGludG8gbG9jYWwgc3RvcmFnZSBcblxuLy8gZmlndXJlIG91dCBob3cgdG8gbWFrZSBhIGZ1bmN0aW9uIHRoYXQgZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuXG5cbi8vIG1ha2luZyB0aGUgbW9kYWwgXG5cbi8vIGJ0biBjYW4gYmUgdXNlZCBob3cgeW91IGRpZCB3aXRoIGxpYnJhcnksIGtlZXAgbW92aW5nXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIG5vdyB5b3UgbmVlZCB0byBjb25zaWRlciBob3cgeW91ciBwcm9qZWN0IG5hbWVzIGFyZSBnb2luZyB0byBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cbi8vIHRoZSBuYW1lcyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBvbmNlIGNsaWNrZWQgdGhleSBzaGFsbCBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIHlvdSBjbGljayBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdGhlIHRvIGRvIGZvcm0gc2hvdWxkIHBvcC11cCwgXG5cbi8vIHJlbWVtYmVyIG9uZSBpbnB1dCBmb3JtIGF0IGEgdGltZSwgeW91IG1heSBoYXZlIHRvIGRpc2FibGUgdGhlIGJ0biBhbmQgcmUtZW5hYmxlIHRoZSBidG4sIFxuXG4vLyBiZWZvcmUgbW92aW5nIG9uIEkgd291bGQgYWxzbyBjaGVjaywgYW5kIHJldmlldyB5b3VyIGN1cnJlbnQgY29kZSwgcmVtb3ZlIGNvbW1lbnRlZCBvdXQgY29kZSB0aGF0IGRvZXMgbm90aGluZyBidXQgdGFrZSB1cCBzcGFjZSBcXFxuXG4vLyBjaGVjayB0aGUgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zLCBtYWtlIHN1cmUgaXQgbWFrZXMgc2Vuc2UgdG8geW91LCBiZXR0ZXIgdG8gZG8gaXQgbm93LCBjaGVjayBpdCBvdXQgXG5cbi8vIHBhcnRpYWxseSBoYXZlIHRoZSBsb2dpYywgdGhhdCBnZW5lcmF0ZXMgaW5wdXQgZmllbGQsIFxuXG4vLyB0cnkgdG8gc2VwZXJhdGUgdGhlIGxvZ2ljLCBncmFiIHRoaXMgZWxlbWVudCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiBcblxuLy8gZ3JhYiB0aGUgZWxlbWVudCBhZGQgYSBsaXN0ZW5lciB0byBpdCwgcGVyZm9ybSB0aGUgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIHRoZXJlLCBcblxuLy8gdGhlbiBjYWxsIHRoZSBET00gbW9kdWxlIHRvIGJlZ2luIGFkZGluZyBpdCdzIHByb3BlcnRpZXMuICBcblxuLy8gaGVsbG8gZXZlcnlvbmUsIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0byBkbywgXG5cbi8vIG92ZXJhbGwgdHJ5aW5nIHRvIGtlZXAgbXkgRE9NIGxvZ2ljIGFuZCBldmVudCBsaXN0ZW5lcnMgaW4gc2VwZXJhdGUgbW9kdWxlcyBcblxuLy8gSSBhbSB0cnlpbmcgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCBmcm9tIHRoZSBET00gbW9kdWxlIFxuXG4vLyBJIGFtIGV4cG9ydGluZyB0aGUgZnVuY3Rpb24gdGhhdCBjb250YWlucyB0aGUgdmFyaWFibGUsIFxuXG4vLyB0aGVuIGltcG9ydGluZyBpdCBidXQgd2hlbiBJIHRyeSB0byBhY2Nlc3MgdGhlIGVsZW1lbnQgaW4gdGhlIGxpc3RlbmVyIG1vZHVsZSwgXG5cbi8vIHVzaW5nIElELCBjbGFzcywgcXVlcnkgc2VsZWN0b3IsIEkganN1dCBnZXQgdW5kZWZpbmVkIGJhY2ssIFxuXG4vLyBJJ20gcmVhbGx5IG5vdCBzdXJlIHdoeSB0aGlzIGlzIGhhcHBlbmluZywgSSBoYXZlIG5vdCByYW4gaW50byB0aGlzIGlzc3VlIHlldCwgXG5cbi8vIGltcG9ydGluZyBhbmQgZXhwb3J0aW5nIGFuZCB1c2luZyBmdW5jdGlvbnMvdmFyaWFibGVzIGZyb20gb3RoZXIgbW9kdWxlcyBzZWVtZWQgdmVyeSBzdHJhaWdodGZvcndhcmQsIFxuXG4vLyBJIHdvdWxkIGp1c3Qgd29yayBvbiB0aGUgZnVuY3Rpb24gaW4gdGhlIG1lYW50aW1lLCBrZWVwaW5nIGV2ZXJ5dGhpbmcgd2l0aGluIHRoZSBzYW1lIGZpbGUsIFxuXG4vLyB3b3JrIG9uIGlzc3VlIG9uIGNsaWNraW5nIHByb2plY3QgbmFtZSBpbiBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBpdCBzaG91bGQgbm90IGFwcGVuZCBtdWx0aXBsZSBidG5zLiBcblxuLy8gdGhhdCB3aWxsIGNhdXNlIGlzc3VlcyBcblxuLy8gd2VsbCB0aGlua2luZyBnZW5lcmFsbHksIHNpbWlsYXIgdG8gdGhlIHByZXZpb3VzIGlzc3VlLCBcblxuLy8gSSBuZWVkIHRvIHNvbWVob3cgZGlzYWJsZSB0aGUgYnRuL25hbWUgb2YgdGhlIGVsZW1lbnQsIGFmdGVyIGl0IGhhcyBiZWVuIGNsaWNrZWQgXG5cbi8vIHNvIHRoZSB1c2VyIGNhbm5vdCBhZGQgYW5vdGhlciBidG4sIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgYnRuLCBhZnRlciBjbGlja2luZyB0aGUgYnRuLCBcblxuLy8gSWYgdGhlIHVzZXIgdmFsdWUgbWF0Y2hlcyB3aGF0IGlzIGFscmVhZHkgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG5cbi8vIGZpcnN0IHdvcmsgb24gdGhlIGJ0biBhcHBlbmRpbmcgaXNzdWUsIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lIGFnYWluLCBcblxuLy8gaXQgd2lsbCBrZWVwIGFkZGluZyBidG4ncywgZG9uJ3QgYWRkIG1vcmUgYnRuJ3MgXG5cbi8vIGRvbid0IGFkZCB0aGUgcHJvamVjdCBhZ2FpbiwgaWYgaXQgYWxyZWFkeSBFWElTVFMgSU4gVEhFIE1BSU4gQ09OVEFJTkVSIFxuXG4vLyBOT1cgVE9HR0xJTkcgQkFDSyBBTkQgRk9SVEggQkVUV0VFTiBUV08gUFJPSkVDVFMgXG5cbi8vIFlPVSBBUkUgU0lNUExZSU5HIFJFUExBQ0lORyBUSEUgUFJPSkVDVCBXSVRISU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIE9OTFkgT05FIFBST0pFQ1QgQ0FOIEJFIFNIT1dOIElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgdG8gc3RvcCBhcHBlbmRpbmcgbXVsdGlwbGUgcHJvamV0J3MgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0IGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG4vLyB0aGUgcHJvYmxlbSBzZWVtcyB0byBiZSB0aGUgYnV0dG9ucyBhcHBlbmRpbmcsIEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIHByZXZlbnQgdGhlIGJ0bidzIGZyb20ga2VlcGluZyBvbiBhcHBlbmRpbmcsIFxuXG4vLyBpZiB0aGUgYnRuIGFscmVhZHkgZXhpc3RzIHRoZSBtYWluIGNvbnRhaW5lciwgdGhlbiBkb24ndCBhcHBlbmQsIG9yIGRpc2FibGUsIGhpZGUsIG9yIHJlbW92ZSBlbGVtZW50IFxuXG4vLyBJIGFtIHJ1bm5pbmcgaW50byBzb21lIG1hbnkgcHJvYmxlbXMgd2l0aCB0byBkbyBsaXN0LCBcblxuLy8gSSBhbSB0cnlpbmcgdG8ga2VlcCB0aGluZ3MgaW4gbW9kdWxlcyBhbmQga2VlcCB0aGUgbG9naWMvZXZlbnQgbGlzdGVuZXJzIHNlcGVyYXRlIGZyb20gdGhlIERPTSBMb2dpYywgXG5cbi8vIEkgd2FudCBhY2Nlc3MgdG8gdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBzbyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgaW4gdGhlIGxpdHRsZSBzaWRlYmFyIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIERPTSwgXG5cbi8vIHdlbGwgcmlnaHQgbm93IEkgYW0gcGVyZm9ybWluZyBET00gc3R1ZmYgd2l0aCBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBidXQgdGhhdCBlbGVtZW50IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdGhlIGJ0biBpcyBjbGlja2VkLCBcblxuLy8gSSBndWVzcyBteSBxdWVzdGlvbiBpcyBjYW4gSSBrZWVwIG15IGN1cnJlbnQgbG9naWMsIHdpdGhpbiBteSBET00gbW9kdWxlPyBcblxuLy8gVGhlIHByb2JsZW0gaXMgdGhhdCBJIHdhbnQgdG8gYWNjZXNzIGEgcGFydGljdWxhciBidXQgdGhhdCBlbGVtZW50IGlzIGNyZWF0ZWQgd2l0aGluIGEgbGlzdGVuZXIsIFxuXG4vLyBiYXNpY2FsbHkgdGhlIHVzZXIgZW50ZXJzIG5hbWUgb2YgcHJvamVjdCBwcmVzc2VzIGFkZCBidG4sIHRoZSB2YWx1ZSBnZXRzIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgdGhlIERPTSBlbGVtZW50IFxuXG4vLyBzdWNoIGFzIGFwcGVuZGluZyB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBhbmQgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG5cbi8vIFJ1bm5pbmcgaW50byBhIGxvdCBvZiBwcm9ibGVtcyB3aXRoIHRvIGRvIFxuXG4vLyBiYXNpY2FsbHkgSSB3YW50IHRvIGFjY2VzcyBhbiBlbGVtZW50IGluIGEgZGlmZmVyZW50IG1vZHVsZSBcblxuLy8gcHJvYmxlbSBpcyB0aGF0IGVsZW1lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCB3aXRoaW4gYW4gZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBJIHdvdWxkIGxpa2UgdG8ga2VlcCBteSBET00gYW5kIGxvZ2ljIHN0dWZmIHNlcGVyYXRlLCBcblxuLy8gY3VycmVudGx5IEkgZ3JhYmJlZCB0aGUgZWxlbWVudCBpbiB0aGUgRE9NIG1vZHVsZSwgYW5kIGFkZGVkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGl0LCBcblxuLy8gbm93IEkgaGF2ZSB0byB1c2UgbG9naWMsIHRvIG1ha2Ugc3VyZSB0aGUgdXNlciBjYW5ub3Qga2VlcCBhZGRpbmcgdGhlIHNhbWUgYnRuIHRvIHRoZSBET00gYmFzZWQgb24gYnRuIGNsaWNrLCBcblxuLy8gYmFzaWNhbGx5IG15IHF1ZXN0aW9uIGlzIG15IGN1cnJlbnQgZG9tTG9naWMgbW9kdWxlIG9rPyBBZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgYW5kIGxvZ2ljIHdpdGhpbiB0aGUgZG9tIG1vZHVsZSBcblxuLy8gSXQgZG9lcyBub3Qgc2VlbSByaWdodCBidXQgSSBkb24ndCBzZWUgYW55IG90aGVyIHdheSB0byBkbyB0aGlzLiBcblxuLy8gaG93IGNhbiBJIHN0b3AgdGhlIGFkZCAtdG9kbyBidG5zIGZyb20gYXBwZW5kaW5nIHVwb24gZWFjaCBidXR0b24gY2xpY2s/IFxuXG4vLyBldmVyeXRoaW5nIGlzIGF0dGFjaGVkIHdpdGhpbiBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBjbGljayBhZGQgcHJvamVjdCBidG4gZm9ybSBpcyBnZW5lcmF0ZWQsIGFkZCBidG4gaXMgcHJlc3NlZCB2YWx1ZSBpcyBzYXZlZCBcblxuLy8gdGhhdCB2YWx1ZSBpcyBwYXNzZWQgdG8gYW5vdGhlciBmdW5jdGlvbiwgd2VsbCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHRoZW4sIFxuXG4vLyBjYW4gd2UgY2FsbCB0aGUgZnVuY3Rpb24gYXQgYSBkaWZmZXJlbnQgdGltZSwgd2h5PyBcblxuLy8gc2hvdWxkbnQgaXQgYmUgcGFzc2VkIGFuZCBjYWxsZWQgYXMgc29vbiBhcyB5b3UgZ2V0IHZhbHVlPyBcblxuLy8gY2FuIEkganVzdCBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIG9uZSB0aGF0IHN0b3JlcyB0aGUgdXNlciB2YWx1ZSwgXG5cbi8vIG9uZSB0aGF0IHJldHVybnMgdGhlIHVzZXIgdmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTT8gXG5cbi8vIHlvdSBwYXNzIHRoZSB2YWx1ZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gdGhhdCBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdXNlclZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00vY29udGFpbmVycyBcblxuLy8gY2FwdHVyZSBpdDtzIHJldHVybiB2YWx1ZSBmcm9tIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhhdCBmdW5jdGlvbiwgXG5cbi8vIHNvIGxldHMgdHJ5IHRvIG1ha2UgYW5vdGhlciBmdW5jdGlvbiAxIHRoYXQgdGFrZXMgdGhlIHZhbHVlIGFuZCBhcHBlbmRzIHRvIGNvbnRhaW5lciwgRE9NIFxuXG4vLyBJIHdpbGwgbm93IHRyeSB0byBhZGQgdGhlIGNhbGVuZGVyIG9wdGlvbiB0byBteSB0b2RvIGZvcm0gXG5cbi8vIGFub3RoZXIgd2hpY2ggdGFrZXMgdGhhdCBmdW5jdGlvbiBhYm92ZSBhbmQgYWRkcyBhIGxpc3RlbmVyIHRvIGl0LCB1c2luZyB0aGUgbG9naWMgaW5zaWRlIC4gXG5cbi8vIGV4cGllcm1lbnQgd29ya2luZyB3aXRoIHR3byBmdW5jdGlvbnMsIHNhdmluZyBvbmUgZnVuY3Rpb24gdG8gdmFyaWFibGUsIGFkZGluZyB0aGUgRE9NIHN0dWZmIHJldHVybiBhIHZhbHVlLCBcblxuLy8gdGFrZSB0aGF0IGZ1bmN0aW9uIGV4cHJlc3Npb24gYWRkIGEgbGlzdGVuZXIgdG8gaXQuIFxuXG4vLyB3ZWxsIHRoZSBwcm9ibGVtIGlzIHRoYXQgZXZlcnkgdGltZSBJIGNsaWNrIHRoZSBhZGQgcHJvamVjdCBidG4gXG5cbi8vIGl0IHdpbGwga2VlcCBhcHBlbmRpbmcgbW9yZSBhZGQtdG9kbyBidG5zIHRvIHRoZSBET00sIFxuXG4vLyBiZWNhdXNlIHdoZW4gdGhlIGZvcm0gcG9wcyB1cCBcblxuLy8gYW5kIHRoZSB1c2VyIGhpdHMgdGhlIGFkZCBidG4sIFxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIERPTSBpcyBjYWxsZWQsIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBpc29sYXRlIHRoZSBwcm9qZWN0IHNlY3Rpb24gbmFtZSBlbGVtZW50PyBcblxuLy8gd2VsbCB3aGF0IEkgd2FzIHRoaW5raW5nIG9mIHllc3RlcmRheSwgXG5cbi8vIGlzIGNhbiBJIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbj8gXG5cbi8vIGNhbiB0aGF0IGZ1bmN0aW9uIHN0b3JlIGEgdmFyaWFibGU/IHVzZXJWYWx1ZT8gXG5cbi8vIHRoZW4gY2FuIHRoYXQgZnVuY3Rpb24gYmUgY2FsbGVkPyBcblxuLy8gSSdtIG5vdCBldmVuIHN1cmUgd2hhdCB0aGUgaGVsbCB0byBldmVuIGRvIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZCB3aXRoaW4gdGhlIGxpc3RlbmVyLCBcblxuLy8gc28gZXZlcnkgdGltZSB5b3UgY2xpY2sgdGhhdCBidG4gb3IgcHJvamVjdCBuYW1lLCBpdCB3aWxsIGtlZXAgbWFraW5nIGJ0bnMgXG5cbi8vIGRldGVybWluZSB3aGVuIGl0J3MgdGltZSB0byBhcHBlbmQgdG8gdGhlIERPTSA/XG5cbi8vIG9uZSBmdW5jdGlvbiB0byBzdG9yZSB2YWx1ZSBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIHRha2UvYWNjZXNzIHRoYXQgdmFsdWUgYW5kIHRoZW4gYXBwZW5kIHRvIERPTSBcblxuLy8gc3RvcmUgdGhlIHZhbHVlLCB0aGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB0aGVyZSwgXG5cblxuXG4vLyBIb3cgY2FuIEkgc3RvcCB0aGUgdXNlciBmcm9tIGFkZGluZyBtdWx0aXBsZSBidG4ncyB3aGVuIHVzZXIgY2xpY2tzIG9uIHByb2plY3Q/IFxuXG4vLyB0aGUgcHJvYmxlbSBzZWVtcyB0aGF0IEknbSBjYWxsaW5nIHRoZSBmdW5jdGlvbiB3aGljaCBkb2VzIHRoYXQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gYnV0IHdoZXJlIGVsc2UgY2FuIEkgY2FsbCBpdD8gXG5cbi8vIElzIHRoZXJlIGEgd2F5IGFyb3VuZCB0aGlzIG9yIGRvIEkgbmVlZCB0byBtYWpvciByZWZhY3RvaW5nLCB0aGlzIHNlZW1lZCBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBub3cgcnVubmluZyBpbnRvIGFsbCB0aGVzZSBpc3N1ZXMsIFxuXG4vLyAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=