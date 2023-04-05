/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/conditionalLogic.js":
/*!*********************************!*\
  !*** ./src/conditionalLogic.js ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./src/domLogic.js":
/*!*************************!*\
  !*** ./src/domLogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
// import arrayStorage from "./storage";
// import defaultExport { arrayStorage } from "./storage";
// import myExport from "./storage"; 




 



const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

let modalInputField = document.getElementById("input-field-within-modal"); 

let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

let formTagForModule = document.getElementById("form-tag-for-modal"); 

let projectArray = []; 

console.log(projectArray);


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

// store data into array, then add to local storage, 

// create a function which accepts a parameter (an arr) then stores that arr in local storage 


function projectNameFactory(name) { 
  return { 
    project: name,
    id: crypto.randomUUID(),
    todoItems: [],
  }
} 

// let x = projectNameFactory("Alec"); 

// let y = projectNameFactory("Amy the little lab");

// console.log(x);

// console.log(y);


addProjectBtnWithinModal.addEventListener("click", (e) => { 
  // e.preventDefault();
  let modalInputFieldValue = modalInputField.value; 

  // let x = JSON.stringify(modalInputFieldValue); 

  // console.log(x);
  
  // let NameOfProject = projectNameFactory(modalInputFieldValue);

  // console.log(NameOfProject); 

  
  // printProjectNameDOM(modalInputFieldValue);

  // console.log(projectArray);
  
  // console.log(projectNameFactory);
  
  // get the project name obj then pass into local storage, 
  
  // arrayStorageSetItem(NameOfProject); 

  // objects into the array, 


  // getting the project name object here 
  
  let projectNameObject = projectNameFactory(modalInputFieldValue); 
  
  projectArray.push(projectNameObject); 

  // console.log(projectArray);
  // console.log(projectNameObject);

  // passing the project name obj, to localStorage 

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__["default"])(projectArray);
  
  formTagForModule.reset();
}) 



// function printProjectNameDOM(value) { 
//   let x = document.getElementById("navbar-your-projects-container")

//   x.append(value);
// }


formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
})


  let getStorage = localStorage.getItem("Project-Names"); 

  let parseData = JSON.parse(getStorage); 

  let string = JSON.stringify(parseData);

  projectArray.push(parseData);









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






// function projectNameFactory(name) { 
//   return { 
//     project: name,
//   } 
// } 

// pass the project name obj to local storage, 


function arrayStorageSetItem(name) { 

    // console.log("working") 

    // set the project name, 
    
    localStorage.setItem("Project-Names", JSON.stringify(name));  

    // let projectsContainer = document.getElementById("navbar-your-projects-container"); 

    // console.log(projectsContainer); 

    // get the project names, 

    // let getStorage = localStorage.getItem("Project-Names"); 


  // push the project names into local storage, 
    // projectArray.push(getStorage);

    // console.log(projectArray);

    // console.log(getStorage);

    // projectsContainer.append(JSON.stringify(localStorage));

    // console.log(localStorage);
    

  //  getItemStorage();

  //  arrayStorageGetItem(localStorage);


    // const projectNameStorage = localStorage.getItem("user-input");

    // console.log(projectNameStorage)
} 










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

/***/ "./node_modules/flatted/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flatted/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJSON": () => (/* binding */ fromJSON),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "toJSON": () => (/* binding */ toJSON)
/* harmony export */ });
/*! (c) 2020 Andrea Giammarchi */

const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

const toJSON = any => $parse(stringify(any));
const fromJSON = any => parse($stringify(any));


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
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalLogic */ "./src/conditionalLogic.js");
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conditionalLogic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
// add the event listener module

// import "src/eventListenerModule.js";







 



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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekM7O0FBRW9DO0FBQ2pCOztBQUUyQjs7QUFFSjs7QUFFMUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVA7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1CO0FBQ3JCO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsZUFBZSxjQUFjO0FBQzdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBLE1BQU07OztBQUdOOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmRBLFlBQVksOENBQThDO0FBQzFELFlBQVksbUJBQW1COzs7QUFHL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJOzs7QUFHSjs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7O0FBV0o7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7O0FBSUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7Ozs7Ozs7QUFRTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUVBOzs7OztBQUtBOzs7Ozs7O0FBT0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7Ozs7Ozs7OztBQVVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Tb0I7QUFDc0I7Ozs7QUFJMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR2U7O0FBRWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7O0FBRUEsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BNQTs7QUFFQSxPQUFPLHNDQUFzQztBQUM3QyxPQUFPLE1BQU07O0FBRWIsNEJBQTRCO0FBQzVCLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUSxhQUFhLFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRLGVBQWUsWUFBWTtBQUMvQyxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ0E7Ozs7Ozs7VUM3RlA7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUUrQjs7QUFFWDs7QUFFUTs7QUFFVDs7OztBQUluQjs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvZmxhdHRlZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXJyYXlTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbi8vIGltcG9ydCBkZWZhdWx0RXhwb3J0IHsgYXJyYXlTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuLy8gaW1wb3J0IG15RXhwb3J0IGZyb20gXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJmbGF0dGVkXCI7XG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG5pbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxubGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdOyBcblxuY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSlcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgXG5cbi8vIHN0b3JlIGRhdGEgaW50byBhcnJheSwgdGhlbiBhZGQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHdoaWNoIGFjY2VwdHMgYSBwYXJhbWV0ZXIgKGFuIGFycikgdGhlbiBzdG9yZXMgdGhhdCBhcnIgaW4gbG9jYWwgc3RvcmFnZSBcblxuXG5mdW5jdGlvbiBwcm9qZWN0TmFtZUZhY3RvcnkobmFtZSkgeyBcbiAgcmV0dXJuIHsgXG4gICAgcHJvamVjdDogbmFtZSxcbiAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbiAgICB0b2RvSXRlbXM6IFtdLFxuICB9XG59IFxuXG4vLyBsZXQgeCA9IHByb2plY3ROYW1lRmFjdG9yeShcIkFsZWNcIik7IFxuXG4vLyBsZXQgeSA9IHByb2plY3ROYW1lRmFjdG9yeShcIkFteSB0aGUgbGl0dGxlIGxhYlwiKTtcblxuLy8gY29uc29sZS5sb2coeCk7XG5cbi8vIGNvbnNvbGUubG9nKHkpO1xuXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICAvLyBsZXQgeCA9IEpTT04uc3RyaW5naWZ5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG5cbiAgLy8gY29uc29sZS5sb2coeCk7XG4gIFxuICAvLyBsZXQgTmFtZU9mUHJvamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7XG5cbiAgLy8gY29uc29sZS5sb2coTmFtZU9mUHJvamVjdCk7IFxuXG4gIFxuICAvLyBwcmludFByb2plY3ROYW1lRE9NKG1vZGFsSW5wdXRGaWVsZFZhbHVlKTtcblxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICBcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVGYWN0b3J5KTtcbiAgXG4gIC8vIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iaiB0aGVuIHBhc3MgaW50byBsb2NhbCBzdG9yYWdlLCBcbiAgXG4gIC8vIGFycmF5U3RvcmFnZVNldEl0ZW0oTmFtZU9mUHJvamVjdCk7IFxuXG4gIC8vIG9iamVjdHMgaW50byB0aGUgYXJyYXksIFxuXG5cbiAgLy8gZ2V0dGluZyB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCBoZXJlIFxuICBcbiAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG4gIFxuICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZU9iamVjdCk7IFxuXG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqZWN0KTtcblxuICAvLyBwYXNzaW5nIHRoZSBwcm9qZWN0IG5hbWUgb2JqLCB0byBsb2NhbFN0b3JhZ2UgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSkgXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lRE9NKHZhbHVlKSB7IFxuLy8gICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpXG5cbi8vICAgeC5hcHBlbmQodmFsdWUpO1xuLy8gfVxuXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cblxuICBsZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbiAgbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4gIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZURhdGEpO1xuXG4gIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7IFxuXG4vLyBjb25zb2xlLmxvZyhmb3JtRWxlbWVudCk7XG5cbi8vIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG4vLyBZZWFoLCBJIHRoaW5rIGZvY3VzaW5nIG9uIHRoZSBiYXNpYyBpZGVhIG9mIGhvdyB0byBjcmVhdGUgYSBwcm9qZWN0IGFuZCBcbi8vIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgcHJvamVjdCB3aGVuIGl0cyBzaWRlYmFyIGJ1dHRvbiBpcyBjbGlja2VkIHdvdWxkIGJlIG15IGZpcnN0IHN0ZXAuIFxuLy8gVGhlbiB5b3UgY2FuIHRoaW5rIGFib3V0IHdoYXQgc2hvdWxkIGJlIG9uIHRoZSBwcm9qZWN0J3MgcGFnZTogdGhleSB3aWxsIG5lZWQgYnV0dG9ucyB0byBhZGQgYSB0YXNrIGFuZCB3aGF0IG5vdFxuXG4vLyBoYXZlIHRoZSB1c2VyIGVudGVyIGEgcHJvamVjdCBuYW1lLCBhbmQgc2F2ZSB0aGUgdmFsdWUsIHBhc3MgdGhhdCB2YWx1ZSB0byBzdG9yYWdlLiBcblxuLy8gdGhlIHZhbHVlIGNhbiBvbmx5IGJlIHNhdmVkLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZCBidG4sIGluc2lkZSB0aGUgbGlzdGVuZXIsIGdldCB0aGUgaW5wdXQgZmllbGQsIGNhcHR1cmUgaXQncyB2YWx1ZSB0aGVuIGNvbnNvbGUgbG9nIGl0IFxuXG4vLyB0aGUgaXNzdWUgb2YgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkIGJlaW5nIGNsZWFyZWQsIFxuXG4vLyB3ZWxsIEkgd3JhcHBlZCBpdCBpbnNpZGUgYSBmb3JtIHRhZywgaXQgd29ya3MgYnV0IGl0IHJlZnJlc2hlcyB0aGUgcGFnZSwgSSBtZWFuIGlzIHRoYXQgYSBwcm9ibGVtLCBcblxuLy8gSSBndWVzcyBub3cgSSdsbCB3b3JrIG9uIHN0b3JpbmcgdGhlIGRhdGEsIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBET00gbG9naWNcbi8vIGV4cG9ydCB0aGVuIGltcG9ydCB3aXRoaW4gYW5vdGhlciBmaWxlIFxuXG4vLyBpbXBvcnQgeyBzb21lIH0gZnJvbSBcImxvZGFzaFwiO1xuLy8gLy8gaW1wb3J0IHsgY29udGVudFR5cGUgfSBmcm9tIFwibWltZS10eXBlc1wiO1xuLy8gaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7IFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1JbnB1dCgpIHsgXG5cbi8vICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1maWVsZC10ZXh0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCI7XG5cbi8vICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTtcblxuLy8gICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbi8vICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4vLyAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuLy8gICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIik7XG5cbi8vICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuXG4vLyAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbi8vIH0gXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3ROYW1lVG9ET00odmFsdWUpIHsgXG5cbi8vICAgbGV0IHVzZXJJbnB1dFZhbHVlID0gdmFsdWU7ICBcblxuLy8gICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIik7IFxuXG4vLyAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4vLyAgIC8vIGdldCB0aGUgZWxlbWVudCBhbmQgdHJ5IHRvIHVzZSBpdCBpbnNpZGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlLCBcbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTsgXG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7IFxuXG4vLyAvLyBpZiAocHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbmNsdWRlcyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbikpIHsgXG4vLyAvLyAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbi8vIC8vIH1cblxuLy8gICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSB5b3UgY2xpY2tlZCB0aGUgcHJvamVjdCBuYW1lXCIpO1xuXG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gICAgXG4vLyAgICAgLy8gd2hlbiBidG4gaXMgY2xpY2tlZCBpdCB3aWxsIGdlbmVyYXRlIGEgcG9wLXVwIGZvcm0gXG4vLyAgICAgLy8gSSB0aGluayB5b3UgbmVlZCBhIGNvbnRhaW5lciwgYSBkaXYgdGhhdCBob2xkcyB0aGUgY29udGVudCwgYXBwZW5kIHRoZSBkaXYgdG8gdGhlIGNvbnRhaW5lciwgXG4gICAgXG4vLyAgICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgIFxuICAgICAgXG4vLyAgICAgICAvLyBpZiAobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmluY2x1ZGVzKHNvbWVCdG4pKSB7XG4vLyAgICAgICAvLyAgIHNvbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuLy8gICAgICAgLy8gfVxuXG4gICAgXG5cbi8vICAgICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICAgIC8vIHNvbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcC11cC1jb250YWluZXJcIik7IFxuXG4vLyAgICAgICBsZXQgdGl0bGVPZlRvRG9JbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiIFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiIHVuZGVybGluZVwiO1xuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgICAvLyBpbiBvcmRlciB0byBjZW50ZXIgaXQgeW91IG5lZWQgdG8gYXBwZW5kIHRoaXMgZWxlbWVudCBcblxuLy8gICAgICAgLy8gdG8gYW5vdGhlciBjb250YWluZXIgXG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjsgXG5cbi8vICAgICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgbGV0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIHBvcFVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwLWNvbnRlbnRcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0LWZpZWxkLXN0eWxlc1wiKTtcblxuLy8gICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpOyBcblxuLy8gICAgICAgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbi8vICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuLXRvLWRvLWlucHV0XCIpXG5cbi8vICAgICAgIGNsb3NlQnRuLnNyYyA9IFwiLi4vY2xvc2UtY2lyY2xlLnBuZ1wiOyBcblxuLy8gICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgdXJnZW5jeUxhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIGxldCB1cmdlbmN5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpOyBcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwidXJnZW5jeS1kcm9wZG93bi1zdHlsZXNcIik7XG5cblxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIiBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7IFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjsgXG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGRhdGVQaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4vLyAgICAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcblxuLy8gICAgICAgY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5SGlnaCk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TWVkaXVtKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lMb3cpOyBcblxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZU9mVG9Eb0lucHV0Rm9ybSk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50TGFiZWwpOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeURyb3BEb3duKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlckxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuQ29udGFpbmVyKTsgXG5cbiAgICBcblxuLy8gICAgICAgLy8gc2hvdWxkIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgY29udGVudCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lcj8gXG5cbi8vICAgICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbi8vICAgICB9KSBcblxuLy8gICAgIGFkZFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7IFxuXG4vLyAgIH0pIFxuXG5cbi8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG5cblxuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvTWFpbigpIHsgXG4vLyAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pOyBcblxuLy8gfVxuXG5cblxuLy8gSSdtIGFibGUgdG8gZ2V0IHRoZSB1c2VyIHZhbHVlLCBJIGFtIGFibGUgdG8gbG9nIG91dCBpdCdzIHZhbHVlLCBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgcHJvamVjdHMgY29udGFpbmVyIHNlY3Rpb24sXG5cbi8vIGl0IHN0aWxsIHJldHVybnMgYW5kIEhUTUwgZWxlbWVudCwgSSBjYW4gdHVybiBpdCBpbnRvIGFuIGFycmF5LCBidXQgSSBhbSB1bnN1cmUgb2YgaG93IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuXG4vLyB3aGF0IEkgd2FudCwgdGhlIHVzZXIgd2lsbCBlbnRlciBwcm9qZWN0IG5hbWUsIEkgd2FudCB0aGF0IG5hbWUgdG8gYXBwZWFyIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBhbmQgbWFpbiBjb250ZW50IHNlY3Rpb24oYmx1ZSBwYXJ0KTsgXG5cbi8vIFByb2JsZW06IEkgYW0gY29uZnVzZWQgb24gaG93IHRvIGFwcGVuZCB0aGlzIHByb2plY3QgbmFtZSB0byB0aGUgRE9NLiBcblxuLy8gV2hhdCBJJ3ZlIHRyaWVkOiBPbmNlIHRoZSBhZGQgYnRuIGlzIHByZXNzZWQsIHRoZSB2YWx1ZS9uYW1lIG9mIHByb2plY3Qgd2lsbCBiZSBzYXZlZCwgYW5kIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoYXQgXG5cbi8vIHZhbHVlIGFuZCBwcmludHMgdG8gdGhlIERPTS4gXG5cbi8vIEkgYW0gYWJsZSB0byBhY2Nlc3MgdGhlIHByb2plY3QgY29udGFpbmVyLCBhbmQgdGhlIG1haW4gc2VjdGlvbiBidXQgaXQncyBhbiBIVE1MIGNvbGxlY3Rpb24sIEkgY2FuIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYXBwZW5kIGFuIGFycmF5IHRvIHRoZSBET00/ICIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IHsgYWRkUHJvamVjdEZvcm1JbnB1dCwgYXBwZW5kUHJvamVjdE5hbWVUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG4vLyBpbXBvcnQgeyBzdG9yZVByb2plY3ROYW1lIH0gZnJvbSBcIi4vYXJyYXlTdG9yYWdlXCI7IFxuXG5cbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTsgXG5cbi8vICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFxuLy8gICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gXCJ0cnVlXCI7XG4gIFxuLy8gICBhZGRQcm9qZWN0Rm9ybUlucHV0KCk7IFxuICBcbi8vICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKV0gLmF0KC0xKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBcbi8vICAgICBsZXQgdXNlclZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImlucHV0LWZpZWxkLXRleHRcIilbMF0udmFsdWU7IFxuXG4vLyAgICAgaWYgKHVzZXJWYWx1ZSAhPT0gXCJcIikgeyBcbi8vICAgICAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbi8vICAgICAgfSBlbHNlIHsgXG4vLyAgICAgICByZXR1cm47IFxuLy8gICAgIH0gXG4gICAgIFxuLy8gICAgIHN0b3JlUHJvamVjdE5hbWUodXNlclZhbHVlKTtcblxuLy8gICAgIGFwcGVuZFByb2plY3ROYW1lVG9ET00odXNlclZhbHVlKTsgXG5cbi8vICAgICBsZXQgcHJvamVjdERPTUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgICAgbGV0IGlucHV0RmllbGRUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dFZhbHVlID0gaW5wdXRGaWVsZFRleHRFbGVtZW50LnZhbHVlOyBcblxuLy8gICAgIGlmIChpbnB1dEZpZWxkVGV4dFZhbHVlID09PSB1c2VyVmFsdWUpIHsgXG4vLyAgICAgICBwcm9qZWN0RE9NQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbi8vICAgICB9IGVsc2UgeyBcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9IFxuLy8gICB9KSBcblxuLy8gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTsgXG5cbi8vICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTsgXG4vLyAgICAgcHJvamVjdERPTUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyBcbi8vICAgIH0pIFxuLy8gfSkgXG5cblxuLy8gY29uc3QgbmF2YmFyUHJvamVjdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTtcblxuLy8gY29uc29sZS5sb2cobmF2YmFyUHJvamVjdE5hbWVFbGVtZW50KTsgXG5cblxuXG4vLyBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtZmllbGQtdGV4dFwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gbmF2YmFyUHJvamVjdE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGV5XCIpOyBcbi8vICAgLy8gY2FsbCB0aGUgRE9NIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgXG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhdHRlbXB0cyBcblxuLy8gcHJvamVjdFNlY3Rpb25OYW1lQnV0dG9uQXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwicHJpbnQgc29tZXRoaW5nXCIpO1xuLy8gfSlcblxuLy8gbGV0IHByb2plY3RTZWN0aW9uTmFtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXNlY3Rpb24tYnRuXCIpWzBdO1xuXG4vLyBsZXQgYXJyID0gQXJyYXkuZnJvbShwcm9qZWN0U2VjdGlvbk5hbWVEaXYpO1xuXG4vLyBjb25zb2xlLmxvZyhhcnIpO1xuXG4vLyBhcnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhpcyBwcm9qZWN0IHN1Y2tzIVwiKTtcbi8vIH0pIFxuXG5cbi8vIHByb2plY3RTZWN0aW9uTmFtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coXCJoaSwgSSBhbSB3b3JraW5nXCIpO1xuLy8gfSkgXG5cblxuXG4vLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7XG5cbi8vICAgfSkgXG5cblxuXG5cblxuXG5cbi8vIGlmIHVzZXJWYWx1ZSBpcyA9PT0gJycgZW1wdHksIHRoZW4gZGlzYWJsZSBidG4sIGlmIG5vdCwgZW5hYmxlIGJ0biBzbyBpdCBjYW4gYmUgY2xpY2tlZCBhZ2FpbiwgXG5cbi8vIHRyeWluZyB0byB0aGluayBvZiB0aGUgbG9naWMsIHRvIG1ha2Ugc3VyZSBvbmx5IG9uZSBpbnB1dCBmaWVsZCBjYW4gYmUgZ2VuZXJhdGVkIGF0IGEgdGltZSwgXG5cbi8vIHVzZXIgc2hvdWxkIG5vdCBiZSBhYmxlIHRvIHByZXNzIGFkZCBwcm9qZWN0IGFuZCBhZGQgbXVsdGlwbGUgaW5wdXQgZmllbGRzLCBcblxuLy8gb25jZSB0aGUgdmFsdWUgaXMgZW50ZXJlZCwgdGhlIGJ0biBjYW4gYmUgcHJlc3NlZCBhZ2Fpbi4gXG5cbiAgLy8gaGVyZSwgdGhlIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBjYWxsZWQgd2hlbiBhIGNvbmRpdGlvbiBpcyBtZXQuIFxuXG4gIC8vIHdoYXQgaXMgdGhlIGNvbmRpdGlvbj8gY2Fubm90IHByZXNzIHRoZSBidG4gdW5sZXNzIHRoZSBjdXJyZW50IFxuXG4gIC8vIGlmICBcblxuXG5cbi8vIGNhbmNlbCBidG4gZnVuY3Rpb25hbGl0eSB3b3Jrcywgc2FtZSB3aXRoIGFkZCBidG4sIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBmaXggdGhlIHVzZXIgZnJvbSBoaXR0aW5nIHRoZSBhZGQgcHJvamVjdCBidG4sIGJlZm9yZSBhIHByb2plY3QgaGFzIGJlZW4gYWRkZWQ/IFxuXG4vLyBidG4gY2FuIG9ubHkgYmUgY2xpY2tlZCBvbmNlIHRoZSBhZGQgYnRuIGhhcyBiZWVuIHByZXNzZWQsIFxuXG5cbi8vIG5leHQgc3RlcCB3b3VsZCB0byB0cnkgdG8gd29yayBvbiB0aGUgbG9naWMgdGhhdCBwcmV2ZW50cyBhIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0IFxuXG4vLyBpZiB0aGUgdmFsdWUvbmFtZSBoYXMgbm90IGJlZW4gYWRkZWQsIFxuXG4vLyB1bmRlcnN0YW5kIGhvdyB0aGUgZWxlbWVudCBpcyBiZWluZyBhcHBlbmRlZCwgXG5cbi8vIFxuXG5cblxuXG4vLyBhcHBseSB0aGUgc2FtZSBsb2dpYyB3aXRoIHRoZSBjYW5jZWwgYnRuLCBcblxuLy8gYWNjZXNzIHRoZSBjYW5jZWwgYnRuIGVsZW1lbnQsIHVzZSBhIHNlbGVjdG9yLCBcblxuLy8gXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8sIGlzIGFmdGVyIHRoZSBwcm9qZWN0IGlzIGFwcGVuZGVkIHRvIHRoZSBET00gc2VjdGlvbiwgcmVtb3ZlIHRoZSBjb250YWluZXIsIFxuXG4vLyBidXQgYWxsb3cgdGhlIHVzZXIgdG8gZW50ZXIgYW5vdGhlciBwcm9qZWN0LCB3aXRoIGFub3RoZXIgbmFtZSBhbmQgZW50ZXIgaXQsIFxuXG4vLyB3aGVuIEkgcHJlc3MgdGhlIGFkZCBwcm9qZWN0IGJ0biBhbmQgZW50ZXIgYSBkaWZmZXJlbnQgbmFtZSwgaXQgd2lsbCBvbmx5IFxuXG4vLyBvdXRwdXQgdGhlIGZpcnN0IG5hbWUgdGhhdCB3YXMgZW50ZXJlZCwgXG5cbi8vIHRoZSBmdW5jdGlvbmFsaXR5IGlzIHRoYXQgdGhlIHVzZXIgY2xpY2tzLCBhZGQgcHJvamVjdCwgaW5wdXQgZmllbGQgZ2VuZXJhdGVkLCBuYW1lIGlzIGFkZGVkLCBcblxuLy8gd2hlbiB1c2VyIHByZXNzZXMgYWRkLCBpdCB3aWxsIGdldCBhZGRlZCB0byB0aGUgY29udGFpbmVycywgaW5wdXQgZmllbGQgcmVtb3ZlZCwgXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gc2hvdWxkIHN0aWxsIGhhdmUgZnVuY3Rpb25hbGl0eSwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gZW50ZXIgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHB1dCB0aGUgbG9naWMgb3V0c2lkZSBvZiB0aGUgbG9vcCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaSBjYW4gYWNjZXNzIHRoZSB2YWx1ZSwgdGhhdCB0aGUgdXNlciBlbnRlcmVkLCBub3cgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG4vLyBhcHBlbmRpbmcgdmFsdWUgd29ya3MsIGdyYWIgdGhlIHRhcmdldCBjb250YWluZXJzIGFuZCBhcHBlbmQgdGhlcmUuIFxuXG5cblxuXG4vLyBhY2Nlc3MgdGhlIGlucHV0IGZpZWxkIGVsZW1lbnQsIGFwcGVuZCB0byBET00gXG5cblxuXG5cblxuXG4vLyBncmFiIGFkZCBidG4gZWxlbWVudCwgYWRkIGEgbGlzdGVuZXIgdG8gaXQgXG5cbi8vIGxldCBhZGRQcm9qZWN0VG9ET01CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWJ0blwiKVswXTsgXG5cblxuXG5cbi8vIGNvbnN0IGFkZFByb2plY3RUb0RPTUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKTtcblxuLy8gY29uc3QgbmV3QXJyID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBuZXdBcnIuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICBjb25zb2xlLmxvZyhidXR0b24pO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5LCBpbnNpZGUgYSBjbGlja2VyIVwiKTtcbi8vICAgfSk7XG4vLyB9KVxuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKS5mb3JFYWNoKCBidXR0b24gPT4ge1xuLy8gICBjb25zb2xlLmxvZyhidXR0b24pO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5LCBpbnNpZGUgYSBjbGlja2VyIVwiKVxuLy8gICB9KTtcbi8vIH0pXG5cblxuXG5cblxuXG5cblxuXG4vLyBjb25zdCBuZXdBcnJheSA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyYXkpO1xuXG4vLyAgbmV3QXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiMSwgMiwgMSwgMlwiKTsgXG4vLyB9KVxuXG4vLyBjb25zdCBhcnIgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKGFycik7XG5cbi8vIGNvbnNvbGUubG9nKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cblxuXG5cblxuIiwiXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5cblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4vLyAgIHJldHVybiB7IFxuLy8gICAgIHByb2plY3Q6IG5hbWUsXG4vLyAgIH0gXG4vLyB9IFxuXG4vLyBwYXNzIHRoZSBwcm9qZWN0IG5hbWUgb2JqIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIC8vIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKSBcblxuICAgIC8vIHNldCB0aGUgcHJvamVjdCBuYW1lLCBcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3QtTmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkobmFtZSkpOyAgXG5cbiAgICAvLyBsZXQgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0c0NvbnRhaW5lcik7IFxuXG4gICAgLy8gZ2V0IHRoZSBwcm9qZWN0IG5hbWVzLCBcblxuICAgIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuXG4gIC8vIHB1c2ggdGhlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBcbiAgICAvLyBwcm9qZWN0QXJyYXkucHVzaChnZXRTdG9yYWdlKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhnZXRTdG9yYWdlKTtcblxuICAgIC8vIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChKU09OLnN0cmluZ2lmeShsb2NhbFN0b3JhZ2UpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICAgXG5cbiAgLy8gIGdldEl0ZW1TdG9yYWdlKCk7XG5cbiAgLy8gIGFycmF5U3RvcmFnZUdldEl0ZW0obG9jYWxTdG9yYWdlKTtcblxuXG4gICAgLy8gY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKVxufSBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdG9yYWdlKCkgeyBcbi8vICAgbGV0IGdldE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuICBcbi8vICAgY29uc29sZS5sb2coZ2V0TmFtZSk7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iaiA9IHByb2plY3ROYW1lRmFjdG9yeShnZXROYW1lKTsgXG5cbi8vICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmopO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGluZGl2ZHVhbCBwcm9qZWN0IG5hbWUgb2JqZWN0cywgXG5cbi8vIEkgYW0gYWJsZSB0byBjcmVhdGUgcHJvamVjdCBuYW1lcywgYnV0IHdoZW4gSSB1c2Ugb2JqZWN0cyBpdCBvbmx5IGFkZHMgb250bywgYW5kIGRvZXMgbm90IGNyZWF0ZSB1bmlxdWUgcHJvamVjdHMuIFxuXG4vLyBcblxuXG5cblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKHZhbHVlKSB7IFxuXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWUpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkgeyBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdE5hbWUoXCJhbGVjXCIpOyBcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4vLyBsZXQgZ0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gYXJyYXk7XG4vLyAgICAgfVxuLy8gfSgpKTsgXG5cbi8vIGdBcnJheSgxKTsgXG4vLyBnQXJyYXkoMik7IFxuLy8gZ0FycmF5KDMpOyBcbi8vIGdBcnJheSg0KTsgXG5cbi8vICBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyYXkgPSBbXTsgXG4vLyAgICAgY29uc29sZS5sb2coYXJyYXkpXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxUaGlzICh2YWx1ZSkgeyBcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7IFxuLy8gICAgICAgICByZXR1cm4gYXJyYXlcbi8vICAgICB9IFxuLy8gfSBcblxuLy8gc3RvcmVVc2VyVmFsdWUoKTtcblxuXG5cblxuXG5cbi8vIGZpbmQgd2F5IHRvIGFkZCBpdGVtcyBvbnRvIGFuIGFycmF5LCBJIGRvbid0IHRoaW5rIGl0J3Mgc21hcnQgdG8gYWRkIG9uZSBhdCBhIHRpbWUsIGJ1dCBtb3JlIHNvIGxpa2UgYWRkaW5nIHByb2plY3RzIG9udG8gYSBzaW5nbGUgYXJyYXkgXG5cbiAgICAvLyB0aGluayBvZiBhIHdheSB0byBhZGQgaW50byBhbiBhcnJheSwgbG9vayBpbnRvIGNsb3N1cmUgYW5kIGFkZGluZyBvbnRvIGFuIGFycmF5IHVzaW5nIGNsb3N1cmUuIFxuXG4gICAgLy8gY2xvc3VyZSBzZWVtcyBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBob3cgY2FuIEkgbWFrZSB0aGlzIHdvcmsgd2l0aCB0aGUgY3VycmVudCBjb2RlIEkgaGF2ZT8gXG5cbiAgICAvLyB3ZWxsIEkgdGhpbmsgSSBkaWQgZmluZCBhIHdheSB0byBzdG9yZSB0aGUgcHJvamVjdCBuYW1lcywganVzdCBzb21ldGhpbmcgZG9lc24ndCBzZWVtIHJpZ2h0IGFib3V0IHRoZSBzdG9yYWdlXG5cbiAgICAvLyAgXG5cbi8vIHRoYXQgYXJyYXkgY2FuIGJlIHBhcnQgb2YgYW4gb2JqLCBrZXkgaW50byB0aGUgYXJyYXlcblxuLy8gYnRuIHByb2JsZW0sIGFwcGVuZGluZyB0b28gbWFueSBpbnB1dCBmaWVsZHMsIGNvbmRpdGlvbmFsIHRvIHByZXZlbnQgXG5cbi8vIGNvcnJlY3QgYXJyYXkgc3RvcmFnZSBcblxuLy8gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG4gXG4vLyBwcm9wZXJseSBpbnN0YWxsaW5nIGFuZCB1c2luZyBzYXNzIGFmdGVyIHRoZSBhYm92ZSBpcyBhY2NvbXBsaXNlZC4gIiwiLyohIChjKSAyMDIwIEFuZHJlYSBHaWFtbWFyY2hpICovXG5cbmNvbnN0IHtwYXJzZTogJHBhcnNlLCBzdHJpbmdpZnk6ICRzdHJpbmdpZnl9ID0gSlNPTjtcbmNvbnN0IHtrZXlzfSA9IE9iamVjdDtcblxuY29uc3QgUHJpbWl0aXZlID0gU3RyaW5nOyAgIC8vIGl0IGNvdWxkIGJlIE51bWJlclxuY29uc3QgcHJpbWl0aXZlID0gJ3N0cmluZyc7IC8vIGl0IGNvdWxkIGJlICdudW1iZXInXG5cbmNvbnN0IGlnbm9yZSA9IHt9O1xuY29uc3Qgb2JqZWN0ID0gJ29iamVjdCc7XG5cbmNvbnN0IG5vb3AgPSAoXywgdmFsdWUpID0+IHZhbHVlO1xuXG5jb25zdCBwcmltaXRpdmVzID0gdmFsdWUgPT4gKFxuICB2YWx1ZSBpbnN0YW5jZW9mIFByaW1pdGl2ZSA/IFByaW1pdGl2ZSh2YWx1ZSkgOiB2YWx1ZVxuKTtcblxuY29uc3QgUHJpbWl0aXZlcyA9IChfLCB2YWx1ZSkgPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09IHByaW1pdGl2ZSA/IG5ldyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IHJldml2ZSA9IChpbnB1dCwgcGFyc2VkLCBvdXRwdXQsICQpID0+IHtcbiAgY29uc3QgbGF6eSA9IFtdO1xuICBmb3IgKGxldCBrZSA9IGtleXMob3V0cHV0KSwge2xlbmd0aH0gPSBrZSwgeSA9IDA7IHkgPCBsZW5ndGg7IHkrKykge1xuICAgIGNvbnN0IGsgPSBrZVt5XTtcbiAgICBjb25zdCB2YWx1ZSA9IG91dHB1dFtrXTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUpIHtcbiAgICAgIGNvbnN0IHRtcCA9IGlucHV0W3ZhbHVlXTtcbiAgICAgIGlmICh0eXBlb2YgdG1wID09PSBvYmplY3QgJiYgIXBhcnNlZC5oYXModG1wKSkge1xuICAgICAgICBwYXJzZWQuYWRkKHRtcCk7XG4gICAgICAgIG91dHB1dFtrXSA9IGlnbm9yZTtcbiAgICAgICAgbGF6eS5wdXNoKHtrLCBhOiBbaW5wdXQsIHBhcnNlZCwgdG1wLCAkXX0pO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB0bXApO1xuICAgIH1cbiAgICBlbHNlIGlmIChvdXRwdXRba10gIT09IGlnbm9yZSlcbiAgICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHZhbHVlKTtcbiAgfVxuICBmb3IgKGxldCB7bGVuZ3RofSA9IGxhenksIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7aywgYX0gPSBsYXp5W2ldO1xuICAgIG91dHB1dFtrXSA9ICQuY2FsbChvdXRwdXQsIGssIHJldml2ZS5hcHBseShudWxsLCBhKSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmNvbnN0IHNldCA9IChrbm93biwgaW5wdXQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUHJpbWl0aXZlKGlucHV0LnB1c2godmFsdWUpIC0gMSk7XG4gIGtub3duLnNldCh2YWx1ZSwgaW5kZXgpO1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2UgPSAodGV4dCwgcmV2aXZlcikgPT4ge1xuICBjb25zdCBpbnB1dCA9ICRwYXJzZSh0ZXh0LCBQcmltaXRpdmVzKS5tYXAocHJpbWl0aXZlcyk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXRbMF07XG4gIGNvbnN0ICQgPSByZXZpdmVyIHx8IG5vb3A7XG4gIGNvbnN0IHRtcCA9IHR5cGVvZiB2YWx1ZSA9PT0gb2JqZWN0ICYmIHZhbHVlID9cbiAgICAgICAgICAgICAgcmV2aXZlKGlucHV0LCBuZXcgU2V0LCB2YWx1ZSwgJCkgOlxuICAgICAgICAgICAgICB2YWx1ZTtcbiAgcmV0dXJuICQuY2FsbCh7Jyc6IHRtcH0sICcnLCB0bXApO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeSA9ICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSA9PiB7XG4gIGNvbnN0ICQgPSByZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgPT09IG9iamVjdCA/XG4gICAgICAgICAgICAoaywgdikgPT4gKGsgPT09ICcnIHx8IC0xIDwgcmVwbGFjZXIuaW5kZXhPZihrKSA/IHYgOiB2b2lkIDApIDpcbiAgICAgICAgICAgIChyZXBsYWNlciB8fCBub29wKTtcbiAgY29uc3Qga25vd24gPSBuZXcgTWFwO1xuICBjb25zdCBpbnB1dCA9IFtdO1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgbGV0IGkgPSArc2V0KGtub3duLCBpbnB1dCwgJC5jYWxsKHsnJzogdmFsdWV9LCAnJywgdmFsdWUpKTtcbiAgbGV0IGZpcnN0UnVuID0gIWk7XG4gIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgZmlyc3RSdW4gPSB0cnVlO1xuICAgIG91dHB1dFtpXSA9ICRzdHJpbmdpZnkoaW5wdXRbaSsrXSwgcmVwbGFjZSwgc3BhY2UpO1xuICB9XG4gIHJldHVybiAnWycgKyBvdXRwdXQuam9pbignLCcpICsgJ10nO1xuICBmdW5jdGlvbiByZXBsYWNlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgIGZpcnN0UnVuID0gIWZpcnN0UnVuO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBhZnRlciA9ICQuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGVvZiBhZnRlcikge1xuICAgICAgY2FzZSBvYmplY3Q6XG4gICAgICAgIGlmIChhZnRlciA9PT0gbnVsbCkgcmV0dXJuIGFmdGVyO1xuICAgICAgY2FzZSBwcmltaXRpdmU6XG4gICAgICAgIHJldHVybiBrbm93bi5nZXQoYWZ0ZXIpIHx8IHNldChrbm93biwgaW5wdXQsIGFmdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFmdGVyO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdG9KU09OID0gYW55ID0+ICRwYXJzZShzdHJpbmdpZnkoYW55KSk7XG5leHBvcnQgY29uc3QgZnJvbUpTT04gPSBhbnkgPT4gcGFyc2UoJHN0cmluZ2lmeShhbnkpKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZVxuXG4vLyBpbXBvcnQgXCJzcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qc1wiO1xuXG5pbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjtcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL2NvbmRpdGlvbmFsTG9naWNcIjtcblxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7IFxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==