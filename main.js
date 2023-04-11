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
/* harmony export */   "printProjectNameToNavbarProjectSection": () => (/* binding */ printProjectNameToNavbarProjectSection),
/* harmony export */   "printValuesToDOM": () => (/* binding */ printValuesToDOM),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
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

// console.log(projectArray);


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

// Ok so we can add project names to the navbar section, 
// lets make a function that we can pass the project name object, key into it's title, 

// function will take in the project array, your job is to get the objects within, 

// append those the DOM, 

addProjectBtnWithinModal.addEventListener("click", (e) => { 
  // e.preventDefault();
  let modalInputFieldValue = modalInputField.value; 

  let projectNameObject = projectNameFactory(modalInputFieldValue); 

  // console.log(projectNameObject.project);

  // let mainContainer = document.getElementsByClassName("main-content-section-container")[0]; 

  // mainContainer.append(projectNameObject.project);

  // let navbarContainer = document.getElementById("navbar-your-projects-container"); 
  
  projectArray.push(projectNameObject); 

  // console.log(projectArray);

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  printValuesToDOM(projectArray); 

  // navbarContainer.append(projectNameObject.project);

  // let stringProjectArray = JSON.stringify(projectArray); 

  // let parseTheString = JSON.parse(stringProjectArray);

  // console.log(stringProjectArray);

  // mainContainer.append(projectArray);
  
  formTagForModule.reset(); 

  // let getStorage = localStorage.getItem("Project-Names"); 

  // let parseData = JSON.parse(getStorage); 

  // projectArray.push(parseData);
}) 

// an array of objects, I need to loop through the array, get the project name titles, append them to the DOM, on each loop iteration, 

// print title to the DOM, call the function so it continues to run, 

// well this function works, but only when the btn is pressed and we add a project, 

// Do I need two functions? One that handles the logic of adding new project names to the DOM, 

// one that displays, whats inside the project array? 

// that seems like an option, 

// adding new project to the array, 

// taking the array and getting the project names, printing them to the DOM"? 

// I just want a function to run which displays the contents of the project array, it still will only run and display when the btn is clicked, 

// export function printValuesToDOM(value) { 

//   let projectValue = value; 
  
//   // for (let i = 0; i < theProjectsArray.length; i++) { 

//     // let projectIndex = theProjectsArray[i]; 

//     let projectNameContainer = document.createElement("div"); 

//     projectNameContainer.append(projectValue);

//     let navbarContainer = document.getElementById("navbar-your-projects-container");

//     navbarContainer.append(projectNameContainer);
//   }
// } 



function printValuesToDOM(array) { 

  let theProjectsArray = array; 

  // let navbarContainer = document.getElementById("navbar-your-projects-container");

  // while(navbarContainer.firstChild) { 
  //   navbarContainer.removeChild(navbarContainer.lastChild);
  // }
  
  for (let i = 0; i < theProjectsArray.length; i++) { 

    let projectIndex = theProjectsArray[i]; 

    let projectNameContainer = document.createElement("div"); 

    projectNameContainer.append(projectIndex.project);

    let navbarContainer = document.getElementById("navbar-your-projects-container");

    navbarContainer.append(projectNameContainer);
  }
} 

// printValuesToDOM(projectArray); 

// printValuesToDOM();




formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
})

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

 function printProjectNameToNavbarProjectSection(value) { 

  let projectValue = value; 

  let projectValueID = projectValue.id; 

  let stringValue = projectValue["project"];  

  let projectDivNameBtnNavbar = document.createElement("div"); 

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

  projectDivNameBtnNavbar.classList.add("project-names-styles-navbar-section");

  projectDivNameBtnNavbar.append(stringValue);

  let navbarProjectContainer = document.getElementById("navbar-your-projects-container"); 

  navbarProjectContainer.append(projectDivNameBtnNavbar);

}


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
/* harmony import */ var _eventListenerModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListenerModule */ "./src/eventListenerModule.js");
/* harmony import */ var _eventListenerModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventListenerModule__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalLogic */ "./src/conditionalLogic.js");
/* harmony import */ var _conditionalLogic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conditionalLogic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
// add the event listener module

// import "src/eventListenerModule.js";







 



let getStorage = localStorage.getItem("Project-Names"); 

let parseData = JSON.parse(getStorage); 

// console.log(parseData);

// let project 

function projectNameLoop() {   
for (let variable in parseData) { 

     let projectIndex = variable; 

     let valueInProject = parseData[projectIndex]; 

     // printProjectNameToNavbarProjectSection(valueInProject);

     _domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray.push(valueInProject); 

}  

} 

projectNameLoop();

console.log(_domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray); 



// function printValuesToDOM(array) { 

//      let theProjectsArray = array; 
     
//      for (let i = 0; i < theProjectsArray.length; i++) { 
   
//        let projectIndex = theProjectsArray[i]; 
   
//        let projectNameContainer = document.createElement("div"); 
   
//        projectNameContainer.append(projectIndex.project);
   
//        let navbarContainer = document.getElementById("navbar-your-projects-container");
   
//        navbarContainer.append(projectNameContainer);
//      }
//    } 



// for (let i = 0; i < projectArray.length; i++) { 
//      let projectIndex = projectArray[i]; 

//       let projectValue = projectIndex.project; 

     
//      } 
     


     (0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.printValuesToDOM)(_domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray); 







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





 


function arrayStorageSetItem(name) { 

    
    localStorage.setItem("Project-Names", JSON.stringify(name));  
    
    
    // localStorage.clear();
   
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSwwQkFBMEIsZUFBZTtBQUN6Qzs7QUFFbUI7O0FBRTJCOztBQUVKOztBQUVBOztBQUUxQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFTzs7QUFFUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxvREFBbUI7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7O0FBRXJEOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlPOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2Qjs7QUFFL0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFROztBQUVSOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixlQUFlLGNBQWM7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUEsTUFBTTs7O0FBR047Ozs7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5dUJBLFlBQVksOENBQThDO0FBQzFELFlBQVksbUJBQW1COzs7QUFHL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJOzs7QUFHSjs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7Ozs7Ozs7Ozs7O0FBV0o7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQSxJQUFJOzs7O0FBSUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7Ozs7Ozs7QUFRTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUVBOzs7OztBQUtBOzs7Ozs7O0FBT0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTs7Ozs7Ozs7OztBQVVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwU0E7O0FBRUE7O0FBRStCOztBQUVYOztBQUVROztBQUVUOztBQUVpRjs7QUFFcEc7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLLHdEQUFpQjs7QUFFdEI7O0FBRUE7O0FBRUE7O0FBRUEsWUFBWSxtREFBWTs7OztBQUl4Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxtQkFBbUIseUJBQXlCO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSywyREFBZ0IsQ0FBQyxtREFBWTs7Ozs7Ozs7QUFRbEM7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7Ozs7OztBQU9BOzs7OztBQUtBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxjQUFjOztBQUVkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RsQm9COztBQUVzQjs7QUFFMUM7OztBQUdlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNoS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGFycmF5U3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG4vLyBpbXBvcnQgZGVmYXVsdEV4cG9ydCB7IGFycmF5U3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbi8vIGltcG9ydCBteUV4cG9ydCBmcm9tIFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG5pbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG5cblxuZnVuY3Rpb24gcHJldmVudEZvcm1Qb3BVcCgpIHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5wcmV2ZW50Rm9ybVBvcFVwKCk7XG5cblxuIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyBtb2RhbElucHV0RmllbGQucmVzZXQoKTtcbiAgLy8gd2hlbiB5b3UgY2xvc2UgaXQsIHNob3VsZCBjbGVhciB0aGUgaW5wdXQgZmllbGQsXG4gIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTtcbn0pXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pIFxuXG4vLyBzdG9yZSBkYXRhIGludG8gYXJyYXksIHRoZW4gYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBjcmVhdGUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHRzIGEgcGFyYW1ldGVyIChhbiBhcnIpIHRoZW4gc3RvcmVzIHRoYXQgYXJyIGluIGxvY2FsIHN0b3JhZ2UgXG5cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4gIHJldHVybiB7IFxuICAgIHByb2plY3Q6IG5hbWUsXG4gICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgdG9kb0l0ZW1zOiBbXSxcbiAgfVxufSBcblxuLy8gT2sgc28gd2UgY2FuIGFkZCBwcm9qZWN0IG5hbWVzIHRvIHRoZSBuYXZiYXIgc2VjdGlvbiwgXG4vLyBsZXRzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IHdlIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG5hbWUgb2JqZWN0LCBrZXkgaW50byBpdCdzIHRpdGxlLCBcblxuLy8gZnVuY3Rpb24gd2lsbCB0YWtlIGluIHRoZSBwcm9qZWN0IGFycmF5LCB5b3VyIGpvYiBpcyB0byBnZXQgdGhlIG9iamVjdHMgd2l0aGluLCBcblxuLy8gYXBwZW5kIHRob3NlIHRoZSBET00sIFxuXG5hZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBtb2RhbElucHV0RmllbGRWYWx1ZSA9IG1vZGFsSW5wdXRGaWVsZC52YWx1ZTsgXG5cbiAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG5cbiAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmplY3QucHJvamVjdCk7XG5cbiAgLy8gbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZU9iamVjdC5wcm9qZWN0KTtcblxuICAvLyBsZXQgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuICBcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuICAvLyBuYXZiYXJDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lT2JqZWN0LnByb2plY3QpO1xuXG4gIC8vIGxldCBzdHJpbmdQcm9qZWN0QXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpOyBcblxuICAvLyBsZXQgcGFyc2VUaGVTdHJpbmcgPSBKU09OLnBhcnNlKHN0cmluZ1Byb2plY3RBcnJheSk7XG5cbiAgLy8gY29uc29sZS5sb2coc3RyaW5nUHJvamVjdEFycmF5KTtcblxuICAvLyBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0QXJyYXkpO1xuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxuICAvLyBsZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbiAgLy8gbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4gIC8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG59KSBcblxuLy8gYW4gYXJyYXkgb2Ygb2JqZWN0cywgSSBuZWVkIHRvIGxvb3AgdGhyb3VnaCB0aGUgYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIHRpdGxlcywgYXBwZW5kIHRoZW0gdG8gdGhlIERPTSwgb24gZWFjaCBsb29wIGl0ZXJhdGlvbiwgXG5cbi8vIHByaW50IHRpdGxlIHRvIHRoZSBET00sIGNhbGwgdGhlIGZ1bmN0aW9uIHNvIGl0IGNvbnRpbnVlcyB0byBydW4sIFxuXG4vLyB3ZWxsIHRoaXMgZnVuY3Rpb24gd29ya3MsIGJ1dCBvbmx5IHdoZW4gdGhlIGJ0biBpcyBwcmVzc2VkIGFuZCB3ZSBhZGQgYSBwcm9qZWN0LCBcblxuLy8gRG8gSSBuZWVkIHR3byBmdW5jdGlvbnM/IE9uZSB0aGF0IGhhbmRsZXMgdGhlIGxvZ2ljIG9mIGFkZGluZyBuZXcgcHJvamVjdCBuYW1lcyB0byB0aGUgRE9NLCBcblxuLy8gb25lIHRoYXQgZGlzcGxheXMsIHdoYXRzIGluc2lkZSB0aGUgcHJvamVjdCBhcnJheT8gXG5cbi8vIHRoYXQgc2VlbXMgbGlrZSBhbiBvcHRpb24sIFxuXG4vLyBhZGRpbmcgbmV3IHByb2plY3QgdG8gdGhlIGFycmF5LCBcblxuLy8gdGFraW5nIHRoZSBhcnJheSBhbmQgZ2V0dGluZyB0aGUgcHJvamVjdCBuYW1lcywgcHJpbnRpbmcgdGhlbSB0byB0aGUgRE9NXCI/IFxuXG4vLyBJIGp1c3Qgd2FudCBhIGZ1bmN0aW9uIHRvIHJ1biB3aGljaCBkaXNwbGF5cyB0aGUgY29udGVudHMgb2YgdGhlIHByb2plY3QgYXJyYXksIGl0IHN0aWxsIHdpbGwgb25seSBydW4gYW5kIGRpc3BsYXkgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuICBcbi8vICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgICAgLy8gbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdFZhbHVlKTtcblxuLy8gICAgIGxldCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuLy8gICAgIG5hdmJhckNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gICB9XG4vLyB9IFxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgLy8gbGV0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gIC8vIHdoaWxlKG5hdmJhckNvbnRhaW5lci5maXJzdENoaWxkKSB7IFxuICAvLyAgIG5hdmJhckNvbnRhaW5lci5yZW1vdmVDaGlsZChuYXZiYXJDb250YWluZXIubGFzdENoaWxkKTtcbiAgLy8gfVxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4gICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4LnByb2plY3QpO1xuXG4gICAgbGV0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4gIH1cbn0gXG5cbi8vIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbi8vIHByaW50VmFsdWVzVG9ET00oKTtcblxuXG5cblxuZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSlcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIFxuXG4vLyBJJ20gbm90IHN1cmUgeW91IG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIHNlZW1zIGxpa2UgeW91ciBnZXR0aW5nIHByb2plY3QgdGFyZ2V0IHZhbHVlLCB3aXRoIGUudGFyZ2V0LnRleHRDb250ZW50IFxuXG4vLyBub3cgSSBiZWxpZXZlIHdoYXQgeW91IG5lZWQgdG8gZmlndXJlIG91dCBpcyBob3cgdG8gZGlzcGxheSB0aGUgY2VydGFpbiBwcm9qZWN0LCBiYXNlZCBvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gcmVtZW1iZXIgcmVwbGFjZSB0aGUgY29udGVudCB3aXRoaW4gbWFpbiBjb250YWluZXIsIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgYWxsIGJhc2VkIG9uIGJ0biBjbGljayBcblxuLy8gdGhpbmsgYmFjayB0byByZXN0YXVyYW50IHBhZ2UsIFxuXG4vLyBJIHNvbWVob3cgbmVlZCB0byB0aGluayB0aGlzIG91dCwgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIGNvbnRlbnRzIG9mIHByZXZpb3VzIHByb2plY3QgYW5kIG1ha2Ugd2F5IGZvciBuZXcsIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwsIGlmIHRoaXMgcHJvamVjdCBpcyBjbGlja2VkLCBjaGFuZ2UgdG8gYSB2YXJpYWJsZSB0aGVuIHVzZSByZXBsYWNlIGNoaWxkLiBcblxuLy8gaWYgdGhlIHZhcmlhYmxlIHRhcmdldFZhbHVlUHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIG9yIHRoZSBkaXYsIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgIFxuXG4vLyBcblxuLy8gLS0gaG93IHRvIG1ha2Ugc3VyZSBvbmx5IHRoYXQgd2hlbiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGl0IHdpbGwgcG9wdWxhdGUsIHdpdGggdGhhdCBwcm9qZWN0IG5hbWUsIHdpcGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIFxuXG4vLyAtLSB3aHkgaXMgdGhlIHByb2plY3QncyBzZWN0aW9uIG5vdCBkeW5hbWljYWxseSBhZGRpbmcgcHJvamVjdHM/IEkgaGF2ZSB0byByZWZyZXNoIHRoZSBwYWdlIGZvciBpdCB0byBzaG93IHVwPyBcblxuLy8gaGFuZGxlIHRoZSBjb25kaXRpb25hbCBsb2dpYyBmaXJzdCwgYW5kIGNvcnJlY3RseSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWVzIGluIHRoZSBtYWluIGNvbnRhaW5lciBmaXJzdCwgXG5cbi8vIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBpcyBuZWVkZWQgdG8gY29tcGxldGUgdGhpcywgcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBjYW4gYmUgZGlzcGxheWVkIGF0IGEgdGltZSwgXG5cbi8vIGlmIHByb2plY3QgY29udGFpbmVyIGluY2x1ZGVzIHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gc2hvdWxkIGl0IGJlIHNpbWlsYXIgdG8gcmVzdGF1cmFudCBwYWdlLCBlYWNoIHByb2plY3QgaXMgZ2l2ZW4gYSB2YXJpYWJsZSwgdGhlbiBpZiB0aGF0IHByb2plY3QgaXMgY2xpY2tlZCBvbiBpdCdzIGdpdmVuIGEgdmFyaWFibGUgb3IgaW5kZXgsIFxuXG4vLyB0aGVuIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0J3MgSUQsIG1hdGNoZXMgd2hhdCBpcyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyLCBpZiBub3QgY2xpY2tlZCwgcmVwbGFjZSB3aXRoIG5ldyBjbGljaywgXG5cbi8vIGlmIGl0IGlzIGNsaWNrZWQgYWdhaW4sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZXBsYWNpbmcgdGhlIGNvbnRlbnQsIFxuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IHdpdGggdGhlIHByb2plY3RzIHVucWl1ZSBJRCwgaWYgcHJvamVjdC5pZCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGF0IGJ0biBhZ2FpbiwganVzdCByZXR1cm4sIFxuXG4vLyBjYW4gd2UgZ28gYmFjayBhbmQgbG9vayBhdCB3aGF0IHlvdSBkaWQgcHJldmlvdXNseSB3aXRoIHlvdXIgY29kZT9cblxuLy8gSSBkb24ndCB0aGluayBpdCdzIHRoZSBzYW1lIHByZXZpb3VzbHksIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgZGl2IGhlcmUgaW5zdGVhZCBvZiBhIGJ1dHRvbiwgXG5cbi8vIEkgd2FudCB0byBmaW5kIGEgd2F5IHRoYXQgSSBjYW4gb25seSBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHNob3VsZCBhZGQgZHVwbGljYXRlcywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCByZXBsYWNlIGNvbnRlbnRzIG9mIG9sZCBhbmQgd2lwZSB0aGUgbmV3LCBcblxuLy8gSSB0aGluayB0aGUgRE9NIERpc3BsYXkgaXMgZmluZSwgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uLCBjcmVhdGluZyBhIGRpdiB0aGF0IHN0b3JlcyB0aGUgcHJvamVjdHMgbmFtZSwgXG5cbi8vIG5vdyBvbmNlIHRoZSBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGxvb3AgdGhyb3VnaCBzdG9yYWdlLCBmaW5kIG91dCB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uIGFuZCBkaXNwbGF5J3MgaXQncyBjb250ZW50cywgXG5cbi8vIHN0aWNrIHdpdGggaG93IHlvdSBhcmUgZGlzcGxheWluZyB0aGUgcHJvamVjdHMgaW4gdGhlIERPTSwgXG5cbi8vIGhvdyB3aWxsIHlvdSBhZGQgdGhpbmdzIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBkaXNwbGF5IG9ubHkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIG1ha2UgYSBsb29wIGdldCB0aGUgcHJvamVjdCdzIElELCBjb21wYXJlIHRoZSBJRCB0byB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCBvbiwgXG5cbiBleHBvcnQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWUpIHsgXG5cbiAgbGV0IHByb2plY3RWYWx1ZSA9IHZhbHVlOyBcblxuICBsZXQgcHJvamVjdFZhbHVlSUQgPSBwcm9qZWN0VmFsdWUuaWQ7IFxuXG4gIGxldCBzdHJpbmdWYWx1ZSA9IHByb2plY3RWYWx1ZVtcInByb2plY3RcIl07ICBcblxuICBsZXQgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4gIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cbiAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbiAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdk5hbWVCdG5OYXZiYXIpO1xuXG59XG5cblxuLy8gZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuLy8gICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gdmFsdWVJblByb2plY3RbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgcHJvamVjdERpdi5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG5cbi8vICAgY29uc29sZS5sb2coc3RyaW5nVmFsdWUpO1xuXG5cblxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gbGV0IHByb2plY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlRGF0YSk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdFZhbHVlcyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG4vLyAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9ICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gXG5cblxuXG5cblxuXG5cblxuXG4vLyBtYWtlIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYXBwZW5kcyB0aGUgcmVzdWx0IHRvIHRoZSBET00uIFxuXG4vLyBmdW5jdGlvbiBwcmludFN0b3JhZ2VUb0RvbSgpIHsgXG4vLyAgIC8vIGxldCBnZXRTdG9yYWdlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuLy8gICAvLyBsZXQgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2VJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcblxuIFxuXG4vLyAgIGxldCBuYXZQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcbi8vICAgbmF2UHJvamVjdHNDb250YWluZXIuYXBwZW5kKHN0dXBpZFZhbHVlKTtcbi8vIH0gXG5cblxuLy8gcHJpbnRTdG9yYWdlVG9Eb20oKTtcblxuXG5cblxuXG4gIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuICAvLyBsZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbiAgLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKGZvcm1FbGVtZW50KTtcblxuLy8gZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cbi8vIFllYWgsIEkgdGhpbmsgZm9jdXNpbmcgb24gdGhlIGJhc2ljIGlkZWEgb2YgaG93IHRvIGNyZWF0ZSBhIHByb2plY3QgYW5kIFxuLy8gdG8gZGlzcGxheSB0aGUgY29ycmVjdCBwcm9qZWN0IHdoZW4gaXRzIHNpZGViYXIgYnV0dG9uIGlzIGNsaWNrZWQgd291bGQgYmUgbXkgZmlyc3Qgc3RlcC4gXG4vLyBUaGVuIHlvdSBjYW4gdGhpbmsgYWJvdXQgd2hhdCBzaG91bGQgYmUgb24gdGhlIHByb2plY3QncyBwYWdlOiB0aGV5IHdpbGwgbmVlZCBidXR0b25zIHRvIGFkZCBhIHRhc2sgYW5kIHdoYXQgbm90XG5cbi8vIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBwcm9qZWN0IG5hbWUsIGFuZCBzYXZlIHRoZSB2YWx1ZSwgcGFzcyB0aGF0IHZhbHVlIHRvIHN0b3JhZ2UuIFxuXG4vLyB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgc2F2ZWQsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkIGJ0biwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgZ2V0IHRoZSBpbnB1dCBmaWVsZCwgY2FwdHVyZSBpdCdzIHZhbHVlIHRoZW4gY29uc29sZSBsb2cgaXQgXG5cbi8vIHRoZSBpc3N1ZSBvZiB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgYmVpbmcgY2xlYXJlZCwgXG5cbi8vIHdlbGwgSSB3cmFwcGVkIGl0IGluc2lkZSBhIGZvcm0gdGFnLCBpdCB3b3JrcyBidXQgaXQgcmVmcmVzaGVzIHRoZSBwYWdlLCBJIG1lYW4gaXMgdGhhdCBhIHByb2JsZW0sIFxuXG4vLyBJIGd1ZXNzIG5vdyBJJ2xsIHdvcmsgb24gc3RvcmluZyB0aGUgZGF0YSwgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIERPTSBsb2dpY1xuLy8gZXhwb3J0IHRoZW4gaW1wb3J0IHdpdGhpbiBhbm90aGVyIGZpbGUgXG5cbi8vIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250ZW50VHlwZSB9IGZyb20gXCJtaW1lLXR5cGVzXCI7XG4vLyBpbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjsgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUlucHV0KCkgeyBcblxuLy8gICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIjtcblxuLy8gICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbi8vICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4vLyAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcblxuLy8gICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbi8vICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuLy8gfSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgdXNlcklucHV0VmFsdWUgPSB2YWx1ZTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbi8vICAgLy8gZ2V0IHRoZSBlbGVtZW50IGFuZCB0cnkgdG8gdXNlIGl0IGluc2lkZSBldmVudCBsaXN0ZW5lciBtb2R1bGUsIFxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpOyBcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgXG5cbi8vIC8vIGlmIChwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmluY2x1ZGVzKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKSkgeyBcbi8vIC8vICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuLy8gLy8gfVxuXG4vLyAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBjbGlja2VkIHRoZSBwcm9qZWN0IG5hbWVcIik7XG5cbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgICBcbi8vICAgICAvLyB3aGVuIGJ0biBpcyBjbGlja2VkIGl0IHdpbGwgZ2VuZXJhdGUgYSBwb3AtdXAgZm9ybSBcbi8vICAgICAvLyBJIHRoaW5rIHlvdSBuZWVkIGEgY29udGFpbmVyLCBhIGRpdiB0aGF0IGhvbGRzIHRoZSBjb250ZW50LCBhcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyLCBcbiAgICBcbi8vICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyAgXG4gICAgICBcbi8vICAgICAgIC8vIGlmIChtYWluQ29udGVudFByb2plY3RDb250YWluZXIuaW5jbHVkZXMoc29tZUJ0bikpIHtcbi8vICAgICAgIC8vICAgc29tZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4vLyAgICAgICAvLyB9XG5cbiAgICBcblxuLy8gICAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgICAgLy8gc29tZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wLXVwLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGxldCB0aXRsZU9mVG9Eb0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCIgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCIgdW5kZXJsaW5lXCI7XG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICAgIC8vIGluIG9yZGVyIHRvIGNlbnRlciBpdCB5b3UgbmVlZCB0byBhcHBlbmQgdGhpcyBlbGVtZW50IFxuXG4vLyAgICAgICAvLyB0byBhbm90aGVyIGNvbnRhaW5lciBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTsgXG5cbi8vICAgfSkgXG5cblxuLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cblxuXG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9NYWluKCkgeyBcbi8vICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7IFxuXG4vLyB9XG5cblxuXG4vLyBJJ20gYWJsZSB0byBnZXQgdGhlIHVzZXIgdmFsdWUsIEkgYW0gYWJsZSB0byBsb2cgb3V0IGl0J3MgdmFsdWUsIEkgYW0gYWJsZSB0byBncmFiIHRoZSBwcm9qZWN0cyBjb250YWluZXIgc2VjdGlvbixcblxuLy8gaXQgc3RpbGwgcmV0dXJucyBhbmQgSFRNTCBlbGVtZW50LCBJIGNhbiB0dXJuIGl0IGludG8gYW4gYXJyYXksIGJ1dCBJIGFtIHVuc3VyZSBvZiBob3cgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG5cbi8vIHdoYXQgSSB3YW50LCB0aGUgdXNlciB3aWxsIGVudGVyIHByb2plY3QgbmFtZSwgSSB3YW50IHRoYXQgbmFtZSB0byBhcHBlYXIgaW4gdGhlIHByb2plY3QncyBzZWN0aW9uIGFuZCBtYWluIGNvbnRlbnQgc2VjdGlvbihibHVlIHBhcnQpOyBcblxuLy8gUHJvYmxlbTogSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwZW5kIHRoaXMgcHJvamVjdCBuYW1lIHRvIHRoZSBET00uIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IE9uY2UgdGhlIGFkZCBidG4gaXMgcHJlc3NlZCwgdGhlIHZhbHVlL25hbWUgb2YgcHJvamVjdCB3aWxsIGJlIHNhdmVkLCBhbmQgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhhdCBcblxuLy8gdmFsdWUgYW5kIHByaW50cyB0byB0aGUgRE9NLiBcblxuLy8gSSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBjb250YWluZXIsIGFuZCB0aGUgbWFpbiBzZWN0aW9uIGJ1dCBpdCdzIGFuIEhUTUwgY29sbGVjdGlvbiwgSSBjYW4gY29udmVydCBpdCBpbnRvIGFuIGFycmF5LCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhcHBlbmQgYW4gYXJyYXkgdG8gdGhlIERPTT8gIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgeyBhZGRQcm9qZWN0Rm9ybUlucHV0LCBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcbi8vIGltcG9ydCB7IHN0b3JlUHJvamVjdE5hbWUgfSBmcm9tIFwiLi9hcnJheVN0b3JhZ2VcIjsgXG5cblxuLy8gY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpOyBcblxuLy8gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgXG4vLyAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBcInRydWVcIjtcbiAgXG4vLyAgIGFkZFByb2plY3RGb3JtSW5wdXQoKTsgXG4gIFxuLy8gICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtYnRuXCIpXSAuYXQoLTEpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIFxuLy8gICAgIGxldCB1c2VyVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5wdXQtZmllbGQtdGV4dFwiKVswXS52YWx1ZTsgXG5cbi8vICAgICBpZiAodXNlclZhbHVlICE9PSBcIlwiKSB7IFxuLy8gICAgICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuLy8gICAgICB9IGVsc2UgeyBcbi8vICAgICAgIHJldHVybjsgXG4vLyAgICAgfSBcbiAgICAgXG4vLyAgICAgc3RvcmVQcm9qZWN0TmFtZSh1c2VyVmFsdWUpO1xuXG4vLyAgICAgYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh1c2VyVmFsdWUpOyBcblxuLy8gICAgIGxldCBwcm9qZWN0RE9NQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgICBsZXQgaW5wdXRGaWVsZFRleHRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1maWVsZC10ZXh0XCIpO1xuXG4vLyAgICAgbGV0IGlucHV0RmllbGRUZXh0VmFsdWUgPSBpbnB1dEZpZWxkVGV4dEVsZW1lbnQudmFsdWU7IFxuXG4vLyAgICAgaWYgKGlucHV0RmllbGRUZXh0VmFsdWUgPT09IHVzZXJWYWx1ZSkgeyBcbi8vICAgICAgIHByb2plY3RET01Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuLy8gICAgIH0gZWxzZSB7IFxuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH0gXG4vLyAgIH0pIFxuXG4vLyAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpOyBcblxuLy8gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9Pntcbi8vICAgICBsZXQgcHJvamVjdERPTUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpOyBcbi8vICAgICBwcm9qZWN0RE9NQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbi8vICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IFxuLy8gICAgfSkgXG4vLyB9KSBcblxuXG4vLyBjb25zdCBuYXZiYXJQcm9qZWN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4vLyBjb25zb2xlLmxvZyhuYXZiYXJQcm9qZWN0TmFtZUVsZW1lbnQpOyBcblxuXG5cbi8vIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1maWVsZC10ZXh0XCIpOyBcblxuLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyBuYXZiYXJQcm9qZWN0TmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJoZXlcIik7IFxuLy8gICAvLyBjYWxsIHRoZSBET00gZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBcbi8vIH0pXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGF0dGVtcHRzIFxuXG4vLyBwcm9qZWN0U2VjdGlvbk5hbWVCdXR0b25BcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coXCJwcmludCBzb21ldGhpbmdcIik7XG4vLyB9KVxuXG4vLyBsZXQgcHJvamVjdFNlY3Rpb25OYW1lRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3Qtc2VjdGlvbi1idG5cIilbMF07XG5cbi8vIGxldCBhcnIgPSBBcnJheS5mcm9tKHByb2plY3RTZWN0aW9uTmFtZURpdik7XG5cbi8vIGNvbnNvbGUubG9nKGFycik7XG5cbi8vIGFyci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coXCJUaGlzIHByb2plY3Qgc3Vja3MhXCIpO1xuLy8gfSkgXG5cblxuLy8gcHJvamVjdFNlY3Rpb25OYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcImhpLCBJIGFtIHdvcmtpbmdcIik7XG4vLyB9KSBcblxuXG5cbi8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTtcblxuLy8gICB9KSBcblxuXG5cblxuXG5cblxuLy8gaWYgdXNlclZhbHVlIGlzID09PSAnJyBlbXB0eSwgdGhlbiBkaXNhYmxlIGJ0biwgaWYgbm90LCBlbmFibGUgYnRuIHNvIGl0IGNhbiBiZSBjbGlja2VkIGFnYWluLCBcblxuLy8gdHJ5aW5nIHRvIHRoaW5rIG9mIHRoZSBsb2dpYywgdG8gbWFrZSBzdXJlIG9ubHkgb25lIGlucHV0IGZpZWxkIGNhbiBiZSBnZW5lcmF0ZWQgYXQgYSB0aW1lLCBcblxuLy8gdXNlciBzaG91bGQgbm90IGJlIGFibGUgdG8gcHJlc3MgYWRkIHByb2plY3QgYW5kIGFkZCBtdWx0aXBsZSBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvbmNlIHRoZSB2YWx1ZSBpcyBlbnRlcmVkLCB0aGUgYnRuIGNhbiBiZSBwcmVzc2VkIGFnYWluLiBcblxuICAvLyBoZXJlLCB0aGUgZnVuY3Rpb24gd2lsbCBuZWVkIHRvIGNhbGxlZCB3aGVuIGEgY29uZGl0aW9uIGlzIG1ldC4gXG5cbiAgLy8gd2hhdCBpcyB0aGUgY29uZGl0aW9uPyBjYW5ub3QgcHJlc3MgdGhlIGJ0biB1bmxlc3MgdGhlIGN1cnJlbnQgXG5cbiAgLy8gaWYgIFxuXG5cblxuLy8gY2FuY2VsIGJ0biBmdW5jdGlvbmFsaXR5IHdvcmtzLCBzYW1lIHdpdGggYWRkIGJ0biwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGZpeCB0aGUgdXNlciBmcm9tIGhpdHRpbmcgdGhlIGFkZCBwcm9qZWN0IGJ0biwgYmVmb3JlIGEgcHJvamVjdCBoYXMgYmVlbiBhZGRlZD8gXG5cbi8vIGJ0biBjYW4gb25seSBiZSBjbGlja2VkIG9uY2UgdGhlIGFkZCBidG4gaGFzIGJlZW4gcHJlc3NlZCwgXG5cblxuLy8gbmV4dCBzdGVwIHdvdWxkIHRvIHRyeSB0byB3b3JrIG9uIHRoZSBsb2dpYyB0aGF0IHByZXZlbnRzIGEgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QgXG5cbi8vIGlmIHRoZSB2YWx1ZS9uYW1lIGhhcyBub3QgYmVlbiBhZGRlZCwgXG5cbi8vIHVuZGVyc3RhbmQgaG93IHRoZSBlbGVtZW50IGlzIGJlaW5nIGFwcGVuZGVkLCBcblxuLy8gXG5cblxuXG5cbi8vIGFwcGx5IHRoZSBzYW1lIGxvZ2ljIHdpdGggdGhlIGNhbmNlbCBidG4sIFxuXG4vLyBhY2Nlc3MgdGhlIGNhbmNlbCBidG4gZWxlbWVudCwgdXNlIGEgc2VsZWN0b3IsIFxuXG4vLyBcblxuXG4vLyB3aGF0IEkgd2FudCB0byBkbywgaXMgYWZ0ZXIgdGhlIHByb2plY3QgaXMgYXBwZW5kZWQgdG8gdGhlIERPTSBzZWN0aW9uLCByZW1vdmUgdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJ1dCBhbGxvdyB0aGUgdXNlciB0byBlbnRlciBhbm90aGVyIHByb2plY3QsIHdpdGggYW5vdGhlciBuYW1lIGFuZCBlbnRlciBpdCwgXG5cbi8vIHdoZW4gSSBwcmVzcyB0aGUgYWRkIHByb2plY3QgYnRuIGFuZCBlbnRlciBhIGRpZmZlcmVudCBuYW1lLCBpdCB3aWxsIG9ubHkgXG5cbi8vIG91dHB1dCB0aGUgZmlyc3QgbmFtZSB0aGF0IHdhcyBlbnRlcmVkLCBcblxuLy8gdGhlIGZ1bmN0aW9uYWxpdHkgaXMgdGhhdCB0aGUgdXNlciBjbGlja3MsIGFkZCBwcm9qZWN0LCBpbnB1dCBmaWVsZCBnZW5lcmF0ZWQsIG5hbWUgaXMgYWRkZWQsIFxuXG4vLyB3aGVuIHVzZXIgcHJlc3NlcyBhZGQsIGl0IHdpbGwgZ2V0IGFkZGVkIHRvIHRoZSBjb250YWluZXJzLCBpbnB1dCBmaWVsZCByZW1vdmVkLCBcblxuLy8gdGhlIGFkZCBwcm9qZWN0IGJ0biBzaG91bGQgc3RpbGwgaGF2ZSBmdW5jdGlvbmFsaXR5LCBhbGxvd2luZyB0aGUgdXNlciB0byBlbnRlciBhbm90aGVyIHByb2plY3QsIFxuXG4vLyB0cnkgdG8gcHV0IHRoZSBsb2dpYyBvdXRzaWRlIG9mIHRoZSBsb29wIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpIGNhbiBhY2Nlc3MgdGhlIHZhbHVlLCB0aGF0IHRoZSB1c2VyIGVudGVyZWQsIG5vdyBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cbi8vIGFwcGVuZGluZyB2YWx1ZSB3b3JrcywgZ3JhYiB0aGUgdGFyZ2V0IGNvbnRhaW5lcnMgYW5kIGFwcGVuZCB0aGVyZS4gXG5cblxuXG5cbi8vIGFjY2VzcyB0aGUgaW5wdXQgZmllbGQgZWxlbWVudCwgYXBwZW5kIHRvIERPTSBcblxuXG5cblxuXG5cbi8vIGdyYWIgYWRkIGJ0biBlbGVtZW50LCBhZGQgYSBsaXN0ZW5lciB0byBpdCBcblxuLy8gbGV0IGFkZFByb2plY3RUb0RPTUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtYnRuXCIpWzBdOyBcblxuXG5cblxuLy8gY29uc3QgYWRkUHJvamVjdFRvRE9NQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtYnRuXCIpO1xuXG4vLyBjb25zdCBuZXdBcnIgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIG5ld0Fyci5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XG4vLyAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4vLyAgICAgY29uc29sZS5sb2coXCJIZXksIGluc2lkZSBhIGNsaWNrZXIhXCIpO1xuLy8gICB9KTtcbi8vIH0pXG5cblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGQtYnRuXCIpLmZvckVhY2goIGJ1dHRvbiA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XG4vLyAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4vLyAgICAgY29uc29sZS5sb2coXCJIZXksIGluc2lkZSBhIGNsaWNrZXIhXCIpXG4vLyAgIH0pO1xuLy8gfSlcblxuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IG5ld0FycmF5ID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG5cbi8vICBuZXdBcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coXCIxLCAyLCAxLCAyXCIpOyBcbi8vIH0pXG5cbi8vIGNvbnN0IGFyciA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gY29uc29sZS5sb2coYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gY29uc29sZS5sb2coYXJyKTtcblxuLy8gY29uc29sZS5sb2coYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuXG5cblxuXG4iLCIvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZVxuXG4vLyBpbXBvcnQgXCJzcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qc1wiO1xuXG5pbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjtcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL2NvbmRpdGlvbmFsTG9naWNcIjtcblxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxubGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG5sZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbi8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG5cbi8vIGxldCBwcm9qZWN0IFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0TmFtZUxvb3AoKSB7ICAgXG5mb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG5cbiAgICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcblxuICAgICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbiAgICAgLy8gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWVJblByb2plY3QpO1xuXG4gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTsgXG5cbn0gIFxuXG59IFxuXG5wcm9qZWN0TmFtZUxvb3AoKTtcblxuY29uc29sZS5sb2cocHJvamVjdEFycmF5KTsgXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFZhbHVlc1RvRE9NKGFycmF5KSB7IFxuXG4vLyAgICAgIGxldCB0aGVQcm9qZWN0c0FycmF5ID0gYXJyYXk7IFxuICAgICBcbi8vICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuICAgXG4vLyAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuICAgXG4vLyAgICAgICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICBcbi8vICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4LnByb2plY3QpO1xuICAgXG4vLyAgICAgICAgbGV0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgXG4vLyAgICAgICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4vLyAgICAgIH1cbi8vICAgIH0gXG5cblxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG5cbi8vICAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbiAgICAgXG4vLyAgICAgIH0gXG4gICAgIFxuXG5cbiAgICAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuXG5cblxuXG5cblxuLy8gU28gSSBuZWVkIHRvIHJlY29uc2lkZXIgbXkgYXBwcm9hY2gsIGluc3RlYWQgb2YgaGF2aW5nIHN0b3JhZ2UgcmVmbGVjdCB3aGF0IGlzIGluIHRoZSBET00sIFxuXG4vLyBET00gYW5kIHN0b3JhZ2UgYXJlIHNlcGVyYXRlLCB3aGVuIGEgcHJvamVjdCBuYW1lIGlzIGNyZWF0ZWQsIHNhdmUgdG8gc3RvcmFnZSBidXQgeW91IGFsc28gaGF2ZSBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhbmQgd2hhdGV2ZXIgaXMgaW5zaWRlIHByb2plY3RzIGFycmF5IG5lZWRzIHRvIGJlIGFwcGVuZGVkIHRvIHRoZSBET00sIGluIHRoZSBjb3JyZWN0IGZvcm1hdCwgeW91IG1heSBoYXZlIHRvIHBhcnNlIG9yIHN0cmluZ2lmeSB0aGUgZGF0YSB0byB3b3JrLCBcblxuLy8gcmVmbGVjdCB3aGF0ZXZlciBpcyBpbiB0aGUgcHJvamVjdHMgYXJyYXkgdG8gdGhlIERPTS4gXG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKCkgeyBcbi8vICAgICAgY29uc29sZS5sb2coXCJIZXkgdGhpcyB3b3Jrc1wiKTtcbi8vICAgIH1cbiAgIFxuXG5cbi8vIC0tIG9uZSBpc3N1ZSBJIG5vdGljZSBpcyB0aGF0IGlmIEkgYWRkIGEgcHJvamVjdCBuYW1lLCBJIGhhdmUgdG8gcmVmcmVzaCBmb3IgaXQgdG8gZ2V0IGl0IHRvbyBzaG93LiAhISFcblxuXG4vLyB3aGF0IEkgd2FudCB0byBkbyBuZXh0IGlzIHRvIHRha2UgdGhlIHZhbHVlcy9wcm9qZWN0IG5hbWVzIHRoYXQgYXJlIGluIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYW5kIGFwcGVuZCB0aG9zZSB0byB0aGUgRE9NLCBcbi8vIGZpcnN0IGp1c3QgdHJ5IHRvIGdyYWIgdGhlIGVsZW1uZW50IGFuZCBhcHBlbmQgdmFsdWUgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiB3b3JrIGZyb20gdGhlcmUsIFxuXG5cblxuLy8gT0sgSSBhbSBhYmxlIHRvIGRvIGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24gXG5cbi8vIG5vdyB0cnkgdG8gc2VwZXJhdGUgaXQsIHB1dCB0aGF0IGxvZ2ljIHdpdGhpbiB0aGUgRE9NIE1vZHVsZSwgdGhlbiBvbmNlIHlvdSBnZXQgdGhhdCB3b3JraW5nLCBzdHlsZSB3aXRoaW4gc2VwZXJhdGUgc2hlZXQsIFxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgYmxhaCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2coYmxhaClcbi8vICAgbmV3QXJyYXkucHVzaChibGFoKTtcbi8vIH07XG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IHByb2plY3QgaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgbmV3QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vIH07ICAgIFxuXG5cblxuLy8gdGhpc1xuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgaW5kZXggaW4gc29tZUFycmF5KSB7XG4vLyAvLyAgIGNvbnNvbGUubG9nKGluZGV4KTtcbi8vIGxldCB4ID0gT2JqZWN0LnZhbHVlcyhzb21lQXJyYXkpO1xuXG4vLyAvLyBjb25zb2xlLmxvZyh4KTtcblxuLy8gICBuZXdBcnJheS5wdXNoKHgpO1xuXG4vLyAgIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcbi8vIH07XG5cblxuXG5cblxuXG4vLyBJIHdpbGwgbmV4dCB3cml0ZSBhIGZ1bmN0aW9uIHdpdGhpbiBET00gbG9naWMsIHRoYXQgd2lsbCBnZXQgdGhlIGxvY2FsIHN0b3JhZ2UsIGdyYWIgdGhlIHByb2plY3QgbmFtZXMsIHRoZW4gcHJpbnQgdGhlbSB0byB0aGUgRE9NLCB3aXRoIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiBpZiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBhdHRhY2ggYSBsaXN0ZW5lciwgdGhlbiB3aXRoaW4gbGlzdGVuZXIgbG9naWMgYXBwZW5kIHByb2plY3QgdG8gdGhlIERPTSwgaW4gYm90aCBwbGFjZXMgXG5cbi8vIHlvdSB3aWxsIG5lZWQgdG8gY2xlYXIgbWFpbiBjb250ZW50IHRvIG1ha2Ugd2F5IGZvciB0aGUgbmV3IGNvbnRlbnQsIHVzaW5nIHJlcGxhY2UgY2hpbGQsIFxuXG4vLyB5b3UgbmVlZCB0byBtYWtlIHN1cmUgdG8gY29udmVydCB0aGUgb2JqIHRvIGEgc3RyaW5nLCBtYWtlIHN1cmUgaXQncyBpbiB0aGUgcHJvcGVyIGZvcm1hdCBiZWZvcmUgYXBwZW5kaW5nLCBcblxuLy8gaWYganVzdCBuZWVkcyB0byBiZSB0aGUgc3RyYWlnaHQgcHJvamVjdCBuYW1lLCBcblxuLy8gc28gb25jZSBjbGlja2VkIHBvcHVsYXRlIHdpdGggdHdvIGJ1dHRvbnMsIGRlbGV0ZSwgYW5kIGFkZCBidG4sIGlmIGFkZCBidG4gaXMgY2xpY2tlZCwgZ2VuZXJhdGUgZm9ybSB3aGljaCB3aWxsIHNhdmUgZGF0YSBhbmQgYWRkIHRvIHRvZG8ncyB3aXRoaW4gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGFwcGVuZCB0aG9zZSB0b2RvJ3MgdG8gdGhlIERPTSBhcyB0aGV5IGFyZSBhZGRlZCwgYW5kIHJlbW92ZSBpZiB0aGV5IGFyZSBkZWxldGVkLiBcblxuXG5cblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5jbGVhcigpOyBcblxuXG4vLyBJIGFtIHJ1bm5pbmcgaW50byBzb21lIHByb2JsZW1zLCBvbiBzdG9yYWdlIHdpdGggdG9kbyBsaXN0LCBteSBkYXRhIGlzIGJlaW5nIHN0b3JlZCBjb3JyZWN0bHksICBcblxuLy8gYnV0IEkgYW0gbm90aWNpbmcgbXkgcHJvamVjdCBuYW1lcyBhcmUga2VlcCBnZXR0aW5nIG5lc3RlZCBpbnNpZGUgbXVsdGlwbGUgYXJyYXkncywgY3VycmVudGx5IFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhcmUgbWFkZSBpbnRvIG9iamVjdHMgdGhlbiBvYmplY3RzIGFyZSBwYXNzZWQgdG8gYXJyYXkgZm9yIHN0b3JhZ2UsIG9uY2UgdGhlIHBhZ2UgcmVsb2FkcywgXG5cbi8vIEkgcGFyc2UgdGhyb3VnaCB0aGUgZGF0YSBpbiBzdG9yYWdlLCBhbmQgcHVzaCB0aGUgZGF0YSBiYWNrIGludG8gdGhlIGFycmF5LCBzbyB0aGUgZGF0YSBpcyBzYXZlZCwgXG5cbi8vIGxpa2UgSSBzYWlkLCBhcnJheSdzIGFyZSBiZWluZyBuZXN0ZWQgd2l0aGluIG11bHRpcGxlIGxldmVscyBhbmQgSSdtIG5vdCBzdXJlIHdoeS4gXG5cbi8vIHBpY3R1cmUgYXR0YWNoZWQgYW5kIHNvbWUgc25pcHBldHMgb2YgbXkgY29kZSBhdHRhY2hlZCBmb3IgY29udGV4dCwgSSBjYW4gYWxzbyBhdHRhY2ggbXkgcmVwbyBpZiB0aGF0IGhlbHBzIHRvIGZ1cnRoZXIgZGVidWcgdGhpcywgXG5cblxuXG5cblxuXG4vLyBJIHRoaW5rIEkgY2FuIGp1c3QgcHV0IHRoZSBhcnJheSB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTSBsb2dpYyBcblxuLy8gSSBjYW4gcGFzcyB0aGUgcHJvamVjdCBvYmplY3QgdG8gdGhlIFxuXG5cbi8vIHJlYWQgYmFjayBvdmVyIG1lc3NhZ2VzIHRvIGRldGVybWluZSBnYW1lLXBsYW4sIFxuXG4vLyBwcm9wZXJseSBzdG9yZSB0aGUgZGF0YSwgb2JqZWN0cyBhcmUgc3RvcmVkIHdpdGhpbiBhbiBhcnJheSwgdGhlIGFycmF5IGlzIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIHB1dCB0aG9zZSBpdGVtcyB0aGF0IHdlcmUgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSBiYWNrIGludG8gdGhlIGFycmF5LCBzbyB0aGUgYXJyYXkgY2FuIGtlZXAgdGhvc2UgdmFsdWVzLCBcblxuLy8ga2VlcCB0aGUgdmFsdWVzIGluIHN0b3JhZ2UsIHZhbHVlcyBhcmUgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8ga2VlcCB0aGUgY29udGVudHMgb2YgdGhlIGFycmF5IGFuZCBsb2NhbCBzdG9yYWdlLCBcblxuLy8gb2JqZWN0cyBhcmUgc3RvcmVkIHdpdGhpbiBhbiBhcnJheSwgZ2V0IHRoZSBwcm9qZWN0IG5hbWUgb2JqZWN0LCBhZGQgdG8gbG9jYWwgc3RvcmFnZSwgZ2V0IHRoZSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIGFuZCBwYXNzIGJhY2sgaW50byBhcnJheT8/IFxuXG4vLyBub3cgc2VlbXMgbGlrZSBzdG9yYWdlIGRhdGEgaXMgYmVpbmcgb3ZlcndyaXR0ZW4sIGl0J3Mgbm90IHVwZGF0aW5nLCBhbmQgbm90IGtlZXBpbmcgZGF0YSwgXG5cblxuXG5cbi8vIGFuIGFycmF5IHRoYXQgc3RvcmVzIG9iamVjdHMsIFxuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIHdpbGwgbWFrZSB0aGUgcHJvamVjdCBuYW1lIHRpdGxlLCBnaXZlIGl0IGFuIElELCBhbmQgdG9kbydzIC8gdG9kbydzIHdpbGwgYmUgYW4gYXJyYXksIFxuXG4vLyBoYXZlIGEgZ2xvYmFsIGFycmF5LCBcblxuLy8gZG91YmxlIGNoZWNrIHlvdXIgZmFjdG9yeSBmdW5jdGlvbiwgXG5cbi8vIGZhY3RvcnkgbXVzdCBtYWtlLCBhIG5hbWUgb2YgcHJvamVjdCwgaWQsLCB0b2RvJ3MgaW4gYW4gYXJyYXksIFxuXG5cbi8vIGhhdmUgdGhlIHByb2plY3QgbmFtZXMgaW4gYW4gYXJyYXkgYW5kIHBhc3MgdGhlIGFycmF5IHRvIGxvY2FsIHN0b3JhZ2UsIHNvIHRoZSB2YWx1ZXMgZG9uJ3QgZ2V0IG92ZXJyaWRkZW4gZWFjaCB0aW1lLiBcblxuLy8gZ2V0IGFuIGl0ZW0gZnJvbSBsb2NhbCBzdG9yYWdlLCB0dXJuIGl0IGludG8gYW4gb2JqIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbiwgXG5cbi8vIEkgd2FudCB0byBtYWtlIHN1cmUgSSBhbSBwcm9wZXJseSBzdG9yaW5nIG15IGRhdGEsIGJvdGggaW4gdGhlIGFycmF5IHRoZSBnbG9iYWwgYXJyYXkgXG5cbi8vIGFuZCB3aXRoaW4gbG9jYWwgc3RvcmFnZSwgaWYgdXNlciBlbnRlcnMgaW5mbywgaXQgc2hvdWxkIHNhdmUgYm90aCBvZiB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBjdXJyZW50bHkgSSBjYW4gYWRkIHZhbHVlcyBhbmQgSSBhbSBwdXR0aW5nIG5hbWUgb2JqZWN0cyB3aXRoaW4gYW4gYXJyYXkgXG5cbi8vIGJ1dCBpdCBpcyBvdmVyd3JpdHRpbmcgZWFjaCB0aW1lIGFuZCBub3Qgc2F2aW5nIHRoZSBkYXRhLCBcblxuLy8gc3RvcmUgdGhlIGFycmF5IGV2ZXJ5IHRpbWUgc2V0SXRlbSBpcyBjYWxsZWQgXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7IFxuXG5cbi8vIHNob3VsZCBJIGtlZXAgbXkgZXZlbnQgbGlzdGVuZXJzIGluIGEgc2VwZXJhdGUgbW9kdWxlPyBcblxuLy8gbGV0cyB0ZXN0IGJ5IGltcG9ydGluZyBhbmQgZXhwb3J0aW5nLCBcblxuLy8gT2sgaW5wdXQgaXMgY2xlYXJlZCwgbm93IEkgbmVlZCB0byBmb2N1cyBvbiBnZXR0aW5nIHRoZSB2YWx1ZSBhbmQgcGFzc2luZyBpdCB0byBzdG9yYWdlLiBcblxuLy8gZ2V0IHRoZSB2YWx1ZSwgbG9nIHRoZSB2YWx1ZSwgc2F2ZSB0byBzb21lIHR5cGUgb2YgZGF0YSBzdHJ1Y3R1cmUsIFxuXG4vLyBcblxuXG4vLyBPSyBzbyBJJ20gc29ydGEgb24gdGhlIHJpZ2h0IHRyYWNrIGhlcmUsIEkgYW0gZ2V0dGluZ3RoZSB1c2VyIHZhbHVlLCBhbmQgcGFzc2luZyBpdCBhIGxvY2FsIHN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyBJIG5lZWQgb25lIGZ1bmN0aW9uIHRvIHNldCB0aGUgaXRlbSwgdGhlIHByb2plY3QgbmFtZSBcblxuLy8gYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIG1heWJlIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IGFsbCB0aGUgYWRkZWQgdG9kbydzIG9mIHRoZSBwcm9qZWN0LCBcblxuLy8gYW5kIEkgYmVsaWV2ZSB5b3UgbmVlZCB0byB1c2Ugb2JqJ3MgaW5zdGVhZCBvZiBhcnJheSdzIFxuXG4vLyBiZWNhdXNlIHRoZSBrZXkgb2YgdGhlIG9iaiA9PT0gcHJvamVjdCBuYW1lLCB0aGUgdmFsdWUvcyBvZiB0aGUgcHJvamVjdCA9PT0gdGhlIHRvZG8ncyA/Pz8gXG5cblxuXG4vLyBmaXJzdCBsZXRzIGZpeCBvdXIgc3RvcmFnZSBmdW5jdGlvbnMgdG8gdXNlIG9uZSBzZXQgYW5kIG9uZSBnZXQgZnVuY3Rpb24sIFxuXG4vLyB3ZWxsIEknbSBjb25mdXNlZCBvbiBzZXR0aW5nIGFuZCBnZXR0aW5nIGl0ZW1zLCBJIHRyaWVkIHRvIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbiBidXQgaXQgZGlkIG5vdCB3b3JrLCBcblxuLy8gb25lIGZ1bmN0aW9uIHNob3VsZCBzZXQgdGhlIGl0ZW0sIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQgcmV0cmlldmUgdGhlIGl0ZW0vcHJvamVjdCBuYW1lIGZyb20gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIHRoZW4gb25jZSB0aGUgcHJvamVjdCBpcyByZXRyaWV2ZWQsIGNyZWF0ZSBsb2dpYyB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBhZGQgdG9kbydzLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWUgZGF0ZSwgXG5cblxuLy8gbWFrZSB0aGUgcHJvamVjdCBuYW1lIGFuIG9iaiwgXG5cbi8vIGhvdyB3aWxsIEkgc3RvcmUgbXkgZGF0YT8gSG93IGNhbiBJIGNvcnJlY3RseSBzdG9yZSBteSBkYXRhPyBcblxuLy8gbG9vayBvdmVyIG9sZCBwb3N0cyB0byBnYW1lcGxhbiwgIFxuXG5cbi8vIEhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgcHJvamVjdHMgbmFtZSBpbiB0b2RvLCBcblxuLy8gb25jZSBzdG9yZWQgd3JpdGUgYSBmdW5jdGlvbiB3aGljaCBkaXNwbGF5cyB0aGUgY29udGVudHMgb2YgdGhlIHN0b3JhZ2UsIHRvIHRoZSBET00uIFxuXG4vLyB3aGF0IHR5cGUgb2YgZGF0YSB3aWxsIG15IHByb2plY3RzIGJlPyBJIHRoaW5rIG9iaidzLCBrZXkgaXMgcHJvamVjdCBuYW1lLCBpdCdzIHRvZG8ncyBhcmUgdGhlIHZhbHVlcywgXG5cbi8vIHdvcmsgb24gY2hhbmdpbmcgdGhlIHByb2plY3QncyBuYW1lIHRvIGFuIG9iaiwgaW5zdGVhZCBvZiBhbiBhcnJheSBcblxuLy8gaG93IGNhbiBJIGFkZCBpdGVtcyB0byBhbiBvYmo/IFxuXG4vLyBjYW4gSSBqdXN0IHBhc3MgdGhlIGFyciB0byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggd2lsbCBjcmVhdGUgYSBwcm9qZWN0IG5hbWUgb2JqLCBrZXkgaXMgbmFtZSB2YWx1ZS9zIGFyZSB0aGUgdG9kbydzXG5cbi8vIEkgd2FudCB0byBwcm9wZXJseSBzdG9yZSBwcm9qZWN0IG5hbWVzIGludG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBydW5uaW5nIGludG8gYSBwcm9ibGVtIHRoYXQgSSB3YW50IHRvIG1ha2UgYSBwcm9qZWN0IG5hbWUgb2JqLCBcblxuLy8gdGhlbiBwYXNzIHRoYXQgb2JqIHRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0ganVzdCBoYXZpbmcgdHJvdWJsZSwgd2l0aCBteSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuXG5cblxuXG5cblxuXG5cbi8vIGNoZWNrIGFycmF5IGFuZCBsb2NhbCBzdG9yYWdlLFxuXG4vLyBsb2NhbCBzdG9yYWdlIGFuZCBhcnJheSBzZWVtcyB0byBiZSB3b3JraW5nIGZpbmUsIGl0IGlzIGFkZGluZyBvbnRvIHRoZSBjdXJyZW50IHNlbGVjdGlvbnMsXG5cbi8vIEkgdGhpbmsgbmV4dCB3b3VsZCBiZSB0byBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHByb2plY3QgbmFtZXMsIHRvIGJlZ2luIGFkZGluZyB0by1kbydzIHRvIHByb2plY3RzXG5cbi8vIG9rIHNvIGxvb2tpbmcgYXQgdGhlIHByb2plY3QgZm9yIGluc3BpcmF0aW9uLCBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIHNhdmVkIHRvIGFuIGFycmF5IGFuZCBzdG9yYWdlLCBcblxuLy8gdGhlbiBpZiB0aGUgcHJvamVjdCBuYW1lcyBhcmUgY2xpY2tlZCwgdGhleSBhcmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZW4gb25jZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gY2xpY2sgYSBhZGQgYnRuIG9yIGEgdHJhc2ggYnRuLCBcblxuLy8gYWRkIGJ0biB3aWxsIG1ha2UgYSBmb3JtIGZvciB0b2RvcyB0byBiZSBhZGRlZCwgdGhlbiBvbmNlIGFkZGVkIHRob3NlIHRvZG9zIHdpbGwgYmUgZGlzcGxheWVkLCBcblxuLy8gZGVsZXRlIGJ0biB3aWxsIHBlcm1hbmF0ZWx5IGRlbGV0ZSB0aGUgdG9kby90YXNrLiBcblxuLy8gaG93IHRvIHByZXZlbnQgZHluYW1pY2FsbHkgY3JlYXRlZCBlbGVtZW50IEpTIGVsZW1lbnRzIGZyb20gZm9ybWluZyB3aGVuIGZ1bmN0aW9uIGlzIGNhbGxlZD8gXG5cbi8vIGZpeCB1cCBjdXJyZW50IGNvZGUgdG8gdXNlIG1vZHVsZXMsIG1vdmUgdG8gb3duIGZ1bmN0aW9uIFxuXG4vLyBzZXBlcmF0aW5nIHRoZSBjb2RlIGlzIG5vdCB3b3JraW5nLCBjYW4ndCBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdGhlcmUsIFxuXG4vLyBJIHdhbnQgdG8gdXNlIHRoZSBzYW1lIGxvZ2ljIEkgaGFkIGJlZm9yZSBidXQgdG8gc3BsaXQgdGhlIGxvZ2ljIHVwIGludG8gZGlmZmVyZW50IG1vZHVsZXMsIFxuXG4vLyB0YWtlIHRoZSBkaXYgZWxlbWVudCBcblxuLy8gd2hlbiB5b3UgY2xpY2sgb24gYSBwcm9qZWN0IG5hbWUsIHRoYXQgcHJvamVjdCBuYW1lIHNob3VsZCBhcHBlYXIgaW4gdGhlIG1haW4gc2VjdGlvbiAoZmluZSkgXG5cbi8vIEl0IHNob3VsZCBhbHNvIGFkZCB0aGUgYWRkIHRvZG8gYnRuIGFsb25nIHdpdGggY2FuY2VsIGJ0biBcblxuXG5cbi8vIHdvcmsgb24gZml4aW5nIHRoZSBidG4gaXNzdWUsIGNyZWF0aW5nIG11bHRpcGxlIGVsZW1lbnRzIG9uIGJ0biBjbGljaywgXG5cbi8vIGlmIHRoZSB1c2VyIHZhbHVlIGlzIGVtcHR5IGRpc2FibGUgdGhlIGJ0biBvciBoaWRlIGl0LCBcblxuLy8gSSBoYXZlIHRyaWVkIGJvdGggbWV0aG9kcyB3aXRoIG5vIGx1Y2ssIFxuXG4vLyBJIHdhcyB3b3JraW5nIHdpdGggc29tZW9uZSB5ZXN0ZXJkYXksIGFuZCBpdCBzZWVtZWQgbGlrZSB0aGUgcmlnaHQgbWV0aG9kLCBcblxuLy8gYnV0IEkgYW0gdmVyeSBjb25mdXNlZCBvbiB3aHkgaXQgaXMgbm90IHdvcmtpbmcsIEkgd291bGQgdGhpbmsgcGxhY2luZyBpdCBiZWZvcmUgdGhlIGZ1bmN0aW9uIGNhbGwgd291bGQgZG8gdGhlIHRyaWNrLCBcblxuLy8gSSB3aWxsIGV4cGVyaWVtZW50IHdpdGggd2hlcmUgdGhlIGNvZGUgaXMgcGxhY2VkLiBcblxuXG4vLyBmaWd1cmluZyBvdXQgdGhlIGxvZ2ljIGZvciB0aGUgYnV0dG9ucywgdXNlciBzaG91bGQgYmUgYWJsZSB0byBhZGQgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG4vLyBvbmUgcHJvamVjdCBhdCBhIHRpbWUsIGlmIHVzZXIgZW50ZXJzIG5vdGhpbmcsIGRpc2FibGUgYnRuLCBcblxuLy8gaWYgc29tZXRoaW5nIGNoYW5nZXMgaW4gdGhlIGlucHV0IGZpZWxkLCByZS1lbmFibGUgdGhlIGJ0biAgXG5cbi8vIEkgYW0gaGF2aW5nIHRyb3VibGUgbG9nZ2luZyB0aGUgc3RhdGVtZW50IHdpdGhpbiB0aGUgaW5wdXQgbGlzdGVuZXIsIFxuXG4vLyBwcmFjdGljZSBpbiBzZXBlcmF0ZSBmaWxlLCBJIHdhcyBzb21laG93IGFibGUgdG8gZ2V0IGl0IHRvIHdvcmsgeWVzdGVyZGF5LCBcblxuLy8gcHJhY3RpY2UgaW4gYSBzZXBlcmF0ZSwgaWYgbm8gbHVjayBtb3ZlIG9udG8gZ2VuZXJhdGluZyB0aGUgaW5wdXQgZmllbGQgYmFzZWQgb24gd2hlbiB1c2VyIFxuXG4vLyBwcmVzc2VzIHRoZSB0b2RvIGJ0bi4gXG5cbi8vIHNwZW5kIHRoZSByZXN0IG9mIHRoZSB0aW1lLCB0cnlpbmcgdG8gZmlndXJlIG91dCBhbiBpbnB1dCBmb3JtLCBcblxuLy8gc28gd2l0aCB0aGUgcG9wLXVwIGZpZWxkLCBkb24ndCBmb3JnZXQgdG8gdXNlIHRoZSBzYW1lIGxvZ2ljIGFzIGxhc3QgdGltZSB3aXRoIGRpZGFibGluZyBidG4gYXQgdGhlIGNvcnJlY3QgbW9tZW50IFxuLy8gb25jZSBidG4gaXMgY2xpY2tlZCBoYXZlIHRoZSBzYW1lIHBvcC11cCBmaWVsZCBhcyB5b3UgZGlkIHdpdGggbGliYXJ5LCBcblxuLy8geW91IHdpbGwgcHJvYmFibHkgbmVlZCBhIGNvbnRhaW5lciB0aGVuIGEgZGl2IHRoYXQncyBhcHBlbmRlZCB0byBpdCB3aXRoIHRoZSBhY3R1YWwgY29udGVudCwgXG5cbi8vIGNvbnRhaW5lciBhYnNvbHV0ZSwgZGl2IGlzIHJlbGF0aXZlIFxuXG4vLyB0aGVuIHlvdSB3aWxsIG5lZWQgYW4gaW5wdXQgZm9yIG5hbWUsIFxuXG4vLyBkdWUgZGF0ZSwgbm90ZXMgY2FuIHVzZSB0ZXh0IGFyZWEgYW5kIGRlc2NyaXB0aW9uLCBcblxuLy8gZmluZCBhIHdheSB0byBhcHBlbmQgdG8gbWFpbiBwcm9qZWN0IHNlY3Rpb24sIHlvdSBjYW4gZGVsZXRlIGl0LCBvciBjaG9vc2UgdG8gYWRkIG1vcmUgdG9kb3MgXG5cbi8vIHRoYXQgZ28gd2l0aCB0aGUgc3BlY2lmaWMgcHJvamVjdC4gIFxuXG5cblxuXG4vLyBnZXQgZmFtaWxhciB3aXRoIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBhcHAgLiBcblxuLy8gdGhlIGFkZCBwcm9qZWN0IGJ0biBpcyBub3cgd29ya2luZywgXG5cbi8vIG5vdyB5b3UgbmVlZCB0byBjb25zaWRlciBob3cgeW91ciBwcm9qZWN0IG5hbWVzIGFyZSBnb2luZyB0byBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cbi8vIHRoZSBuYW1lcyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBvbmNlIGNsaWNrZWQgdGhleSBzaGFsbCBiZSBhZGRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIHlvdSBjbGljayBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdGhlIHRvIGRvIGZvcm0gc2hvdWxkIHBvcC11cCwgXG5cbi8vIHJlbWVtYmVyIG9uZSBpbnB1dCBmb3JtIGF0IGEgdGltZSwgeW91IG1heSBoYXZlIHRvIGRpc2FibGUgdGhlIGJ0biBhbmQgcmUtZW5hYmxlIHRoZSBidG4sIFxuXG4vLyBiZWZvcmUgbW92aW5nIG9uIEkgd291bGQgYWxzbyBjaGVjaywgYW5kIHJldmlldyB5b3VyIGN1cnJlbnQgY29kZSwgcmVtb3ZlIGNvbW1lbnRlZCBvdXQgY29kZSB0aGF0IGRvZXMgbm90aGluZyBidXQgdGFrZSB1cCBzcGFjZSBcXFxuXG4vLyBjaGVjayB0aGUgbmFtZXMgb2YgdGhlIHZhcmlhYmxlcyBhbmQgZnVuY3Rpb25zLCBtYWtlIHN1cmUgaXQgbWFrZXMgc2Vuc2UgdG8geW91LCBiZXR0ZXIgdG8gZG8gaXQgbm93LCBjaGVjayBpdCBvdXQgXG5cbi8vIHBhcnRpYWxseSBoYXZlIHRoZSBsb2dpYywgdGhhdCBnZW5lcmF0ZXMgaW5wdXQgZmllbGQsIFxuXG4vLyB0cnkgdG8gc2VwZXJhdGUgdGhlIGxvZ2ljLCBncmFiIHRoaXMgZWxlbWVudCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiBcblxuLy8gZ3JhYiB0aGUgZWxlbWVudCBhZGQgYSBsaXN0ZW5lciB0byBpdCwgcGVyZm9ybSB0aGUgY29uZGl0aW9uYWwgbG9naWMgaW5zaWRlIHRoZXJlLCBcblxuLy8gdGhlbiBjYWxsIHRoZSBET00gbW9kdWxlIHRvIGJlZ2luIGFkZGluZyBpdCdzIHByb3BlcnRpZXMuICBcblxuLy8gaGVsbG8gZXZlcnlvbmUsIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0byBkbywgXG5cbi8vIG92ZXJhbGwgdHJ5aW5nIHRvIGtlZXAgbXkgRE9NIGxvZ2ljIGFuZCBldmVudCBsaXN0ZW5lcnMgaW4gc2VwZXJhdGUgbW9kdWxlcyBcblxuLy8gSSBhbSB0cnlpbmcgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCBmcm9tIHRoZSBET00gbW9kdWxlIFxuXG4vLyBJIGFtIGV4cG9ydGluZyB0aGUgZnVuY3Rpb24gdGhhdCBjb250YWlucyB0aGUgdmFyaWFibGUsIFxuXG4vLyB0aGVuIGltcG9ydGluZyBpdCBidXQgd2hlbiBJIHRyeSB0byBhY2Nlc3MgdGhlIGVsZW1lbnQgaW4gdGhlIGxpc3RlbmVyIG1vZHVsZSwgXG5cbi8vIHVzaW5nIElELCBjbGFzcywgcXVlcnkgc2VsZWN0b3IsIEkganN1dCBnZXQgdW5kZWZpbmVkIGJhY2ssIFxuXG4vLyBJJ20gcmVhbGx5IG5vdCBzdXJlIHdoeSB0aGlzIGlzIGhhcHBlbmluZywgSSBoYXZlIG5vdCByYW4gaW50byB0aGlzIGlzc3VlIHlldCwgXG5cbi8vIGltcG9ydGluZyBhbmQgZXhwb3J0aW5nIGFuZCB1c2luZyBmdW5jdGlvbnMvdmFyaWFibGVzIGZyb20gb3RoZXIgbW9kdWxlcyBzZWVtZWQgdmVyeSBzdHJhaWdodGZvcndhcmQsIFxuXG4vLyBJIHdvdWxkIGp1c3Qgd29yayBvbiB0aGUgZnVuY3Rpb24gaW4gdGhlIG1lYW50aW1lLCBrZWVwaW5nIGV2ZXJ5dGhpbmcgd2l0aGluIHRoZSBzYW1lIGZpbGUsIFxuXG4vLyB3b3JrIG9uIGlzc3VlIG9uIGNsaWNraW5nIHByb2plY3QgbmFtZSBpbiBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBpdCBzaG91bGQgbm90IGFwcGVuZCBtdWx0aXBsZSBidG5zLiBcblxuLy8gdGhhdCB3aWxsIGNhdXNlIGlzc3VlcyBcblxuLy8gd2VsbCB0aGlua2luZyBnZW5lcmFsbHksIHNpbWlsYXIgdG8gdGhlIHByZXZpb3VzIGlzc3VlLCBcblxuLy8gSSBuZWVkIHRvIHNvbWVob3cgZGlzYWJsZSB0aGUgYnRuL25hbWUgb2YgdGhlIGVsZW1lbnQsIGFmdGVyIGl0IGhhcyBiZWVuIGNsaWNrZWQgXG5cbi8vIHNvIHRoZSB1c2VyIGNhbm5vdCBhZGQgYW5vdGhlciBidG4sIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgYnRuLCBhZnRlciBjbGlja2luZyB0aGUgYnRuLCBcblxuLy8gSWYgdGhlIHVzZXIgdmFsdWUgbWF0Y2hlcyB3aGF0IGlzIGFscmVhZHkgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG5cbi8vIGZpcnN0IHdvcmsgb24gdGhlIGJ0biBhcHBlbmRpbmcgaXNzdWUsIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lIGFnYWluLCBcblxuLy8gaXQgd2lsbCBrZWVwIGFkZGluZyBidG4ncywgZG9uJ3QgYWRkIG1vcmUgYnRuJ3MgXG5cbi8vIGRvbid0IGFkZCB0aGUgcHJvamVjdCBhZ2FpbiwgaWYgaXQgYWxyZWFkeSBFWElTVFMgSU4gVEhFIE1BSU4gQ09OVEFJTkVSIFxuXG4vLyBOT1cgVE9HR0xJTkcgQkFDSyBBTkQgRk9SVEggQkVUV0VFTiBUV08gUFJPSkVDVFMgXG5cbi8vIFlPVSBBUkUgU0lNUExZSU5HIFJFUExBQ0lORyBUSEUgUFJPSkVDVCBXSVRISU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIE9OTFkgT05FIFBST0pFQ1QgQ0FOIEJFIFNIT1dOIElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgdG8gc3RvcCBhcHBlbmRpbmcgbXVsdGlwbGUgcHJvamV0J3MgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0IGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG4vLyB0aGUgcHJvYmxlbSBzZWVtcyB0byBiZSB0aGUgYnV0dG9ucyBhcHBlbmRpbmcsIEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIHByZXZlbnQgdGhlIGJ0bidzIGZyb20ga2VlcGluZyBvbiBhcHBlbmRpbmcsIFxuXG4vLyBpZiB0aGUgYnRuIGFscmVhZHkgZXhpc3RzIHRoZSBtYWluIGNvbnRhaW5lciwgdGhlbiBkb24ndCBhcHBlbmQsIG9yIGRpc2FibGUsIGhpZGUsIG9yIHJlbW92ZSBlbGVtZW50IFxuXG4vLyBJIGFtIHJ1bm5pbmcgaW50byBzb21lIG1hbnkgcHJvYmxlbXMgd2l0aCB0byBkbyBsaXN0LCBcblxuLy8gSSBhbSB0cnlpbmcgdG8ga2VlcCB0aGluZ3MgaW4gbW9kdWxlcyBhbmQga2VlcCB0aGUgbG9naWMvZXZlbnQgbGlzdGVuZXJzIHNlcGVyYXRlIGZyb20gdGhlIERPTSBMb2dpYywgXG5cbi8vIEkgd2FudCBhY2Nlc3MgdG8gdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBzbyBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgaW4gdGhlIGxpdHRsZSBzaWRlYmFyIGl0IGdldHMgYXBwZW5kZWQgdG8gdGhlIERPTSwgXG5cbi8vIHdlbGwgcmlnaHQgbm93IEkgYW0gcGVyZm9ybWluZyBET00gc3R1ZmYgd2l0aCBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBidXQgdGhhdCBlbGVtZW50IGlzIG9ubHkgYXZhaWxhYmxlIHdoZW4gdGhlIGJ0biBpcyBjbGlja2VkLCBcblxuLy8gSSBndWVzcyBteSBxdWVzdGlvbiBpcyBjYW4gSSBrZWVwIG15IGN1cnJlbnQgbG9naWMsIHdpdGhpbiBteSBET00gbW9kdWxlPyBcblxuLy8gVGhlIHByb2JsZW0gaXMgdGhhdCBJIHdhbnQgdG8gYWNjZXNzIGEgcGFydGljdWxhciBidXQgdGhhdCBlbGVtZW50IGlzIGNyZWF0ZWQgd2l0aGluIGEgbGlzdGVuZXIsIFxuXG4vLyBiYXNpY2FsbHkgdGhlIHVzZXIgZW50ZXJzIG5hbWUgb2YgcHJvamVjdCBwcmVzc2VzIGFkZCBidG4sIHRoZSB2YWx1ZSBnZXRzIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgdGhlIERPTSBlbGVtZW50IFxuXG4vLyBzdWNoIGFzIGFwcGVuZGluZyB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBhbmQgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuXG5cbi8vIFJ1bm5pbmcgaW50byBhIGxvdCBvZiBwcm9ibGVtcyB3aXRoIHRvIGRvIFxuXG4vLyBiYXNpY2FsbHkgSSB3YW50IHRvIGFjY2VzcyBhbiBlbGVtZW50IGluIGEgZGlmZmVyZW50IG1vZHVsZSBcblxuLy8gcHJvYmxlbSBpcyB0aGF0IGVsZW1lbnQgaXMgZHluYW1pY2FsbHkgY3JlYXRlZCB3aXRoaW4gYW4gZXZlbnQgbGlzdGVuZXIsIFxuXG4vLyBJIHdvdWxkIGxpa2UgdG8ga2VlcCBteSBET00gYW5kIGxvZ2ljIHN0dWZmIHNlcGVyYXRlLCBcblxuLy8gY3VycmVudGx5IEkgZ3JhYmJlZCB0aGUgZWxlbWVudCBpbiB0aGUgRE9NIG1vZHVsZSwgYW5kIGFkZGVkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGl0LCBcblxuLy8gbm93IEkgaGF2ZSB0byB1c2UgbG9naWMsIHRvIG1ha2Ugc3VyZSB0aGUgdXNlciBjYW5ub3Qga2VlcCBhZGRpbmcgdGhlIHNhbWUgYnRuIHRvIHRoZSBET00gYmFzZWQgb24gYnRuIGNsaWNrLCBcblxuLy8gYmFzaWNhbGx5IG15IHF1ZXN0aW9uIGlzIG15IGN1cnJlbnQgZG9tTG9naWMgbW9kdWxlIG9rPyBBZGRpbmcgYW4gZXZlbnQgbGlzdGVuZXIgYW5kIGxvZ2ljIHdpdGhpbiB0aGUgZG9tIG1vZHVsZSBcblxuLy8gSXQgZG9lcyBub3Qgc2VlbSByaWdodCBidXQgSSBkb24ndCBzZWUgYW55IG90aGVyIHdheSB0byBkbyB0aGlzLiBcblxuLy8gaG93IGNhbiBJIHN0b3AgdGhlIGFkZCAtdG9kbyBidG5zIGZyb20gYXBwZW5kaW5nIHVwb24gZWFjaCBidXR0b24gY2xpY2s/IFxuXG4vLyBldmVyeXRoaW5nIGlzIGF0dGFjaGVkIHdpdGhpbiBldmVudCBsaXN0ZW5lcnMsIFxuXG4vLyBjbGljayBhZGQgcHJvamVjdCBidG4gZm9ybSBpcyBnZW5lcmF0ZWQsIGFkZCBidG4gaXMgcHJlc3NlZCB2YWx1ZSBpcyBzYXZlZCBcblxuLy8gdGhhdCB2YWx1ZSBpcyBwYXNzZWQgdG8gYW5vdGhlciBmdW5jdGlvbiwgd2VsbCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHRoZW4sIFxuXG4vLyBjYW4gd2UgY2FsbCB0aGUgZnVuY3Rpb24gYXQgYSBkaWZmZXJlbnQgdGltZSwgd2h5PyBcblxuLy8gc2hvdWxkbnQgaXQgYmUgcGFzc2VkIGFuZCBjYWxsZWQgYXMgc29vbiBhcyB5b3UgZ2V0IHZhbHVlPyBcblxuLy8gY2FuIEkganVzdCBjcmVhdGUgYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIG9uZSB0aGF0IHN0b3JlcyB0aGUgdXNlciB2YWx1ZSwgXG5cbi8vIG9uZSB0aGF0IHJldHVybnMgdGhlIHVzZXIgdmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTT8gXG5cbi8vIHlvdSBwYXNzIHRoZSB2YWx1ZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gdGhhdCBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdXNlclZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00vY29udGFpbmVycyBcblxuLy8gY2FwdHVyZSBpdDtzIHJldHVybiB2YWx1ZSBmcm9tIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhhdCBmdW5jdGlvbiwgXG5cbi8vIHNvIGxldHMgdHJ5IHRvIG1ha2UgYW5vdGhlciBmdW5jdGlvbiAxIHRoYXQgdGFrZXMgdGhlIHZhbHVlIGFuZCBhcHBlbmRzIHRvIGNvbnRhaW5lciwgRE9NIFxuXG4vLyBJIHdpbGwgbm93IHRyeSB0byBhZGQgdGhlIGNhbGVuZGVyIG9wdGlvbiB0byBteSB0b2RvIGZvcm0gXG5cbi8vIGFub3RoZXIgd2hpY2ggdGFrZXMgdGhhdCBmdW5jdGlvbiBhYm92ZSBhbmQgYWRkcyBhIGxpc3RlbmVyIHRvIGl0LCB1c2luZyB0aGUgbG9naWMgaW5zaWRlIC4gXG5cbi8vIGV4cGllcm1lbnQgd29ya2luZyB3aXRoIHR3byBmdW5jdGlvbnMsIHNhdmluZyBvbmUgZnVuY3Rpb24gdG8gdmFyaWFibGUsIGFkZGluZyB0aGUgRE9NIHN0dWZmIHJldHVybiBhIHZhbHVlLCBcblxuLy8gdGFrZSB0aGF0IGZ1bmN0aW9uIGV4cHJlc3Npb24gYWRkIGEgbGlzdGVuZXIgdG8gaXQuIFxuXG4vLyB3ZWxsIHRoZSBwcm9ibGVtIGlzIHRoYXQgZXZlcnkgdGltZSBJIGNsaWNrIHRoZSBhZGQgcHJvamVjdCBidG4gXG5cbi8vIGl0IHdpbGwga2VlcCBhcHBlbmRpbmcgbW9yZSBhZGQtdG9kbyBidG5zIHRvIHRoZSBET00sIFxuXG4vLyBiZWNhdXNlIHdoZW4gdGhlIGZvcm0gcG9wcyB1cCBcblxuLy8gYW5kIHRoZSB1c2VyIGhpdHMgdGhlIGFkZCBidG4sIFxuXG4vLyB0aGUgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIERPTSBpcyBjYWxsZWQsIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBpc29sYXRlIHRoZSBwcm9qZWN0IHNlY3Rpb24gbmFtZSBlbGVtZW50PyBcblxuLy8gd2VsbCB3aGF0IEkgd2FzIHRoaW5raW5nIG9mIHllc3RlcmRheSwgXG5cbi8vIGlzIGNhbiBJIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbj8gXG5cbi8vIGNhbiB0aGF0IGZ1bmN0aW9uIHN0b3JlIGEgdmFyaWFibGU/IHVzZXJWYWx1ZT8gXG5cbi8vIHRoZW4gY2FuIHRoYXQgZnVuY3Rpb24gYmUgY2FsbGVkPyBcblxuLy8gSSdtIG5vdCBldmVuIHN1cmUgd2hhdCB0aGUgaGVsbCB0byBldmVuIGRvIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIGlzIGJlaW5nIGNhbGxlZCB3aXRoaW4gdGhlIGxpc3RlbmVyLCBcblxuLy8gc28gZXZlcnkgdGltZSB5b3UgY2xpY2sgdGhhdCBidG4gb3IgcHJvamVjdCBuYW1lLCBpdCB3aWxsIGtlZXAgbWFraW5nIGJ0bnMgXG5cbi8vIGRldGVybWluZSB3aGVuIGl0J3MgdGltZSB0byBhcHBlbmQgdG8gdGhlIERPTSA/XG5cbi8vIG9uZSBmdW5jdGlvbiB0byBzdG9yZSB2YWx1ZSBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIHRha2UvYWNjZXNzIHRoYXQgdmFsdWUgYW5kIHRoZW4gYXBwZW5kIHRvIERPTSBcblxuLy8gc3RvcmUgdGhlIHZhbHVlLCB0aGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB0aGVyZSwgXG5cbi8vIHRoZW4gIiwiXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbiBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJheVN0b3JhZ2VTZXRJdGVtKG5hbWUpIHsgXG5cbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3QtTmFtZXNcIiwgSlNPTi5zdHJpbmdpZnkobmFtZSkpOyAgXG4gICAgXG4gICAgXG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICBcbn0gXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZSgpIHsgXG4vLyAgIGxldCBnZXROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbiAgXG4vLyAgIGNvbnNvbGUubG9nKGdldE5hbWUpOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmogPSBwcm9qZWN0TmFtZUZhY3RvcnkoZ2V0TmFtZSk7IFxuXG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG15IGdvYWwgaXMgdG8gaGF2ZSBpbmRpdmR1YWwgcHJvamVjdCBuYW1lIG9iamVjdHMsIFxuXG4vLyBJIGFtIGFibGUgdG8gY3JlYXRlIHByb2plY3QgbmFtZXMsIGJ1dCB3aGVuIEkgdXNlIG9iamVjdHMgaXQgb25seSBhZGRzIG9udG8sIGFuZCBkb2VzIG5vdCBjcmVhdGUgdW5pcXVlIHByb2plY3RzLiBcblxuLy8gXG5cblxuXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFyciA9IFtdO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB2YWx1ZVtpXTsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQpO1xuLy8gICAgICAgICBhcnIucHVzaChwcm9qZWN0TmFtZUlucHV0KTtcblxuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coYXJyKTsgXG4vLyAgICAgcmV0dXJuIGFycjsgXG4vLyB9IFxuXG4vLyBqdXN0IGFkZCB2YWx1ZXMgdG8gdGhlIGFycmF5IFxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0TmFtZSh2YWx1ZSkgeyBcblxuLy8gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlKTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lU3RvcmFnZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==