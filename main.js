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
/* harmony export */   "printValuesToDOM": () => (/* binding */ printValuesToDOM),
/* harmony export */   "projectArray": () => (/* binding */ projectArray)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



 

 



const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

let modalInputField = document.getElementById("input-field-within-modal"); 

let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

let formTagForModule = document.getElementById("form-tag-for-modal"); 

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

    let projectIndexProjectNameValue = projectIndex.project; 

    // console.log(projectIndexProjectNameValue);

    let projectNameContainer = document.createElement("div"); 

    projectNameContainer.append(projectIndexProjectNameValue);

    navbarProjectNameContainer.append(projectNameContainer); 

    projectNameContainer.addEventListener("click", (e) => { 
      
      let mainContentContainerProjectNames = document.getElementsByClassName("main-content-section-container")[0]; 

      let projectNameValueContainerForStyles = document.createElement("div"); 

      projectNameValueContainerForStyles.classList.add("project-name-click-event-container-for-styles"); 

      let btnContainerAddandDelete = document.createElement("div");

      let addBtnToCreateModal = document.createElement("img"); 

      let deleteBtnToDeleteTodo = document.createElement("img"); 

      addBtnToCreateModal.src = "../plus-sign-svgrepo-com (1).svg";

      addBtnToCreateModal.classList.add("add-btn-svg-project-name-styles");

      deleteBtnToDeleteTodo.src = "../trashcan-svgrepo-com (1).svg";

      deleteBtnToDeleteTodo.classList.add("delete-btn-trash-can-svg-icon-styles");

      btnContainerAddandDelete.classList.add("add-delete-btn-for-todo-container-styles"); 

      btnContainerAddandDelete.append(addBtnToCreateModal); 

      btnContainerAddandDelete.append(deleteBtnToDeleteTodo); 

      let projectNameValueClicked = e.target.textContent; 

      projectNameValueContainerForStyles.append(projectNameValueClicked);
      
      mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

      mainContentContainerProjectNames.append(btnContainerAddandDelete);
    })
  }
} 

// I think I can just use this one function, if you are already making the loop, grabbing elements why seperate to another function? 

// next if the project name is clicked, append the textContent to the main container section, 

// OK I am able to grab the main content container, and add the event target text Content, can I also append the btn's? 

// once that is complete, don't forget to add a class, so the text Content can be styled, 

// once you are able to do that, you need to add some type of conditional logic, that will prevent the user from adding the same project again, 

// THIS WILL HAVE TO INSIDE ANOTHER FUNCTION

// you will have to append the two btns for the todo's, add and delete, you can use svg icons, 

// I don't think the project names should stay in the container, one student did not have that logic, 

// Next replace the btn text with an svg, on an + icon and trash btn, 

// OK svg icons are added, sometimes a little slow to render but that can be addressed another time, 

// lets move onto making the logic that prevents the user from adding, the same project multiple times, 

// now begins, how we can prevent user from adding the same project multiple times, and if the user clicks another project, 

// replace the new and clear the old, 

// seperate function, within a totally different module, 

// export and import the correct functions, 

// make a function, loop through projet array, 

// get the project ID or the value, projectname.project if that matches what was clicked on, generate that project, else, prevent the user from adding another project, 

// there will have to some sort of conditional logic, 

// something needs to be checked before a project name can be added to the section, or to prevent a user from adding multiple projects, 


formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
}) 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFMUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR007O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7O0FBRS9DOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCOztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsZUFBZSxjQUFjO0FBQzdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBLE1BQU07OztBQUdOOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnpCQSxZQUFZLDhDQUE4QztBQUMxRCxZQUFZLG1CQUFtQjs7O0FBRy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsSUFBSTs7O0FBR0o7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7Ozs7Ozs7OztBQVdKOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0EsSUFBSTs7OztBQUlKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07Ozs7Ozs7O0FBUU47O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7OztBQU9BOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7Ozs7Ozs7Ozs7QUFVSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFNBOztBQUVBOztBQUUrQjs7QUFFWDs7QUFFUTs7QUFFVDs7QUFFaUY7O0FBRXBHOztBQUVBOztBQUVBOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBOztBQUVBLFlBQVksbURBQVk7O0FBRXhCOztBQUVBLDJEQUFnQixDQUFDLG1EQUFZOzs7Ozs7OztBQVE3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOzs7Ozs7O0FBT0E7Ozs7O0FBS0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGNBQWM7O0FBRWQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGpCb0I7O0FBRXNCOztBQUUxQzs7O0FBR2U7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7O0FBRUEsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQ2hLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBcIi4vc3RvcmFnZVwiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlU2V0SXRlbSBmcm9tIFwiLi9zdG9yYWdlLmpzXCIgXG5cbmltcG9ydCBnZXRJdGVtU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7IFxuXG5pbXBvcnQgIHByb2plY3ROYW1lTG9vcCBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxubGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdOyBcblxuZnVuY3Rpb24gcHJldmVudEZvcm1Qb3BVcCgpIHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufVxuXG5wcmV2ZW50Rm9ybVBvcFVwKCk7XG5cblxuIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyBtb2RhbElucHV0RmllbGQucmVzZXQoKTtcbiAgLy8gd2hlbiB5b3UgY2xvc2UgaXQsIHNob3VsZCBjbGVhciB0aGUgaW5wdXQgZmllbGQsXG4gIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTtcbn0pXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pIFxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTtcbiAgICB9KVxuICB9XG59IFxuXG4vLyBJIHRoaW5rIEkgY2FuIGp1c3QgdXNlIHRoaXMgb25lIGZ1bmN0aW9uLCBpZiB5b3UgYXJlIGFscmVhZHkgbWFraW5nIHRoZSBsb29wLCBncmFiYmluZyBlbGVtZW50cyB3aHkgc2VwZXJhdGUgdG8gYW5vdGhlciBmdW5jdGlvbj8gXG5cbi8vIG5leHQgaWYgdGhlIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBhcHBlbmQgdGhlIHRleHRDb250ZW50IHRvIHRoZSBtYWluIGNvbnRhaW5lciBzZWN0aW9uLCBcblxuLy8gT0sgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGFuZCBhZGQgdGhlIGV2ZW50IHRhcmdldCB0ZXh0IENvbnRlbnQsIGNhbiBJIGFsc28gYXBwZW5kIHRoZSBidG4ncz8gXG5cbi8vIG9uY2UgdGhhdCBpcyBjb21wbGV0ZSwgZG9uJ3QgZm9yZ2V0IHRvIGFkZCBhIGNsYXNzLCBzbyB0aGUgdGV4dCBDb250ZW50IGNhbiBiZSBzdHlsZWQsIFxuXG4vLyBvbmNlIHlvdSBhcmUgYWJsZSB0byBkbyB0aGF0LCB5b3UgbmVlZCB0byBhZGQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGxvZ2ljLCB0aGF0IHdpbGwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGUgc2FtZSBwcm9qZWN0IGFnYWluLCBcblxuLy8gVEhJUyBXSUxMIEhBVkUgVE8gSU5TSURFIEFOT1RIRVIgRlVOQ1RJT05cblxuLy8geW91IHdpbGwgaGF2ZSB0byBhcHBlbmQgdGhlIHR3byBidG5zIGZvciB0aGUgdG9kbydzLCBhZGQgYW5kIGRlbGV0ZSwgeW91IGNhbiB1c2Ugc3ZnIGljb25zLCBcblxuLy8gSSBkb24ndCB0aGluayB0aGUgcHJvamVjdCBuYW1lcyBzaG91bGQgc3RheSBpbiB0aGUgY29udGFpbmVyLCBvbmUgc3R1ZGVudCBkaWQgbm90IGhhdmUgdGhhdCBsb2dpYywgXG5cbi8vIE5leHQgcmVwbGFjZSB0aGUgYnRuIHRleHQgd2l0aCBhbiBzdmcsIG9uIGFuICsgaWNvbiBhbmQgdHJhc2ggYnRuLCBcblxuLy8gT0sgc3ZnIGljb25zIGFyZSBhZGRlZCwgc29tZXRpbWVzIGEgbGl0dGxlIHNsb3cgdG8gcmVuZGVyIGJ1dCB0aGF0IGNhbiBiZSBhZGRyZXNzZWQgYW5vdGhlciB0aW1lLCBcblxuLy8gbGV0cyBtb3ZlIG9udG8gbWFraW5nIHRoZSBsb2dpYyB0aGF0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gYWRkaW5nLCB0aGUgc2FtZSBwcm9qZWN0IG11bHRpcGxlIHRpbWVzLCBcblxuLy8gbm93IGJlZ2lucywgaG93IHdlIGNhbiBwcmV2ZW50IHVzZXIgZnJvbSBhZGRpbmcgdGhlIHNhbWUgcHJvamVjdCBtdWx0aXBsZSB0aW1lcywgYW5kIGlmIHRoZSB1c2VyIGNsaWNrcyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyByZXBsYWNlIHRoZSBuZXcgYW5kIGNsZWFyIHRoZSBvbGQsIFxuXG4vLyBzZXBlcmF0ZSBmdW5jdGlvbiwgd2l0aGluIGEgdG90YWxseSBkaWZmZXJlbnQgbW9kdWxlLCBcblxuLy8gZXhwb3J0IGFuZCBpbXBvcnQgdGhlIGNvcnJlY3QgZnVuY3Rpb25zLCBcblxuLy8gbWFrZSBhIGZ1bmN0aW9uLCBsb29wIHRocm91Z2ggcHJvamV0IGFycmF5LCBcblxuLy8gZ2V0IHRoZSBwcm9qZWN0IElEIG9yIHRoZSB2YWx1ZSwgcHJvamVjdG5hbWUucHJvamVjdCBpZiB0aGF0IG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgZ2VuZXJhdGUgdGhhdCBwcm9qZWN0LCBlbHNlLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHRoZXJlIHdpbGwgaGF2ZSB0byBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyBzb21ldGhpbmcgbmVlZHMgdG8gYmUgY2hlY2tlZCBiZWZvcmUgYSBwcm9qZWN0IG5hbWUgY2FuIGJlIGFkZGVkIHRvIHRoZSBzZWN0aW9uLCBvciB0byBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdWx0aXBsZSBwcm9qZWN0cywgXG5cblxuZm9ybVRhZ0Zvck1vZHVsZS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSkgXG5cbi8vIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBcblxuLy8gbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vIGNvbnNvbGUubG9nKG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzKTtcblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChhcnJheSkgeyBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgbGV0IHByb2plY3ROYW1lSW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuICAgIFxuLy8gICB9XG4vLyB9XG5cbi8vIHByb2plY3ROYW1lc0NsaWNrRXZlbnQocHJvamVjdEFycmF5KTtcblxuXG5cbi8vIEkgdGhpbmsgSSBOZWVkIHRvIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZG9uJ3Qgd2FudCB0byBoYXZlIHRvbyBtdWNoIGdvaW5nIG9uIGluIG9uZSBmdW5jdGlvbiwgXG5cbi8vIHVzZSB0aGUgc2FtZSBsb2dpYywgbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXksIFxuIFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4LnByb2plY3QpO1xuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBvayBuZXh0LCBwcm9qZWN0IG5hbWVzIGFyZSBiZWluZyBhZGRlZCBkeW5hbWljYWxseSwgdGhleSBhcmUgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gdGhlIGFycmF5IGFuZCBwcm9wZXJseSBiZWluZyBhZGRlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gbmV4dCB3aGVuIEkgY2xpY2sgb24gdGhlIHByb2plY3QsIHRoYXQgcHJvamVjdCdzIG5hbWUgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBjbGVhciB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIGRpc3BsYXkgdGhlIG5ldyBwcm9qZWN0LCBcblxuLy8gcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBpcyBhZGRlZCBhdCBhIHRpbWUsIHNob3VsZCBub3QgYWRkIG9udG8uIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgYWxvbmcgd2l0aCB0aGUgdHdvIGJ0bnMsIGFkZCBhbmQgZGVsZXRlIGZvciB0aGUgdG9kbydzIFxuXG4vLyBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgc2hvdyB0aGF0IHByb2plY3QsIHVzZXIgY2Fubm90IGFwcGVuZCB0aGF0IHByb2plY3QgbXVsdGlwbGUgdGltZXMgYnkgY2xpY2tpbmcsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciB0aGUgb2xkIGFuZCBtYWtlIHdheSBmb3IgdGhlIG5ldyBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyB0aGlzIHdpbGwgYmUgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZmlyc3QgSSBmZWVsIGxpa2UgeW91IHdpbGwgbmVlZCB0byBsb29wIHRocm91Z2ggcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBmcm9tIHRoZSBhcnJheSwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgbG9naWMgd2lsbCBncmFiIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIGFuZCBhcHBlbmQgdmFsdWVzIHRvIGl0LCBcblxuLy8geW91IHdpbGwgcHJvYmFibHkgbmVlZCBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm9qZWN0IGlzIGFscmVhZHkgYWRkZWQgc3VjaCBhcyBJRCdzIG1hdGNoaW5nLCBcblxuLy8gaWYgSUQgbWF0Y2hlcyB3aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IGZyb20gYWRkaW5nIGFnYWluLCBlbHNlIGlmIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgY29udGFpbmVyLCBcblxuLy8gYmVmb3JlIHRoZSBwcm9qZWN0IG5hbWUgaXMgYXBwZW5kZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhhdCBuYW1lcyBpZCBtYXRjaGVzIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gSSB3b3VsZCBzYXkgZmlyc3QgbGV0J3MgbWFrZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGdyYWIgYWxsIHRoZSBwcm9qZWN0IG5hbWVzIGFuZCBJRD8gXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QsIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBcblxuLy8gSSdtIG5vdCBzdXJlIHlvdSBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBzZWVtcyBsaWtlIHlvdXIgZ2V0dGluZyBwcm9qZWN0IHRhcmdldCB2YWx1ZSwgd2l0aCBlLnRhcmdldC50ZXh0Q29udGVudCBcblxuLy8gbm93IEkgYmVsaWV2ZSB3aGF0IHlvdSBuZWVkIHRvIGZpZ3VyZSBvdXQgaXMgaG93IHRvIGRpc3BsYXkgdGhlIGNlcnRhaW4gcHJvamVjdCwgYmFzZWQgb24gd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHJlbWVtYmVyIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aGluIG1haW4gY29udGFpbmVyLCBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IGFsbCBiYXNlZCBvbiBidG4gY2xpY2sgXG5cbi8vIHRoaW5rIGJhY2sgdG8gcmVzdGF1cmFudCBwYWdlLCBcblxuLy8gSSBzb21laG93IG5lZWQgdG8gdGhpbmsgdGhpcyBvdXQsIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciBjb250ZW50cyBvZiBwcmV2aW91cyBwcm9qZWN0IGFuZCBtYWtlIHdheSBmb3IgbmV3LCBcblxuLy8gSSB0aGluayBJIG5lZWQgc29tZSBzb3J0IG9mIGNvbmRpdGlvbmFsLCBpZiB0aGlzIHByb2plY3QgaXMgY2xpY2tlZCwgY2hhbmdlIHRvIGEgdmFyaWFibGUgdGhlbiB1c2UgcmVwbGFjZSBjaGlsZC4gXG5cbi8vIGlmIHRoZSB2YXJpYWJsZSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBvciB0aGUgZGl2LCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsICBcblxuLy8gXG5cbi8vIC0tIGhvdyB0byBtYWtlIHN1cmUgb25seSB0aGF0IHdoZW4gdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBpdCB3aWxsIHBvcHVsYXRlLCB3aXRoIHRoYXQgcHJvamVjdCBuYW1lLCB3aXBlIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBcblxuLy8gLS0gd2h5IGlzIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBub3QgZHluYW1pY2FsbHkgYWRkaW5nIHByb2plY3RzPyBJIGhhdmUgdG8gcmVmcmVzaCB0aGUgcGFnZSBmb3IgaXQgdG8gc2hvdyB1cD8gXG5cbi8vIGhhbmRsZSB0aGUgY29uZGl0aW9uYWwgbG9naWMgZmlyc3QsIGFuZCBjb3JyZWN0bHkgZGlzcGxheWluZyB0aGUgcHJvamVjdCBuYW1lcyBpbiB0aGUgbWFpbiBjb250YWluZXIgZmlyc3QsIFxuXG4vLyBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgaXMgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMsIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgY2FuIGJlIGRpc3BsYXllZCBhdCBhIHRpbWUsIFxuXG4vLyBpZiBwcm9qZWN0IGNvbnRhaW5lciBpbmNsdWRlcyB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHNob3VsZCBpdCBiZSBzaW1pbGFyIHRvIHJlc3RhdXJhbnQgcGFnZSwgZWFjaCBwcm9qZWN0IGlzIGdpdmVuIGEgdmFyaWFibGUsIHRoZW4gaWYgdGhhdCBwcm9qZWN0IGlzIGNsaWNrZWQgb24gaXQncyBnaXZlbiBhIHZhcmlhYmxlIG9yIGluZGV4LCBcblxuLy8gdGhlbiBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCdzIElELCBtYXRjaGVzIHdoYXQgaXMgaW5zaWRlIHRoZSBtYWluIGNvbnRhaW5lciwgaWYgbm90IGNsaWNrZWQsIHJlcGxhY2Ugd2l0aCBuZXcgY2xpY2ssIFxuXG4vLyBpZiBpdCBpcyBjbGlja2VkIGFnYWluLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gcmVwbGFjaW5nIHRoZSBjb250ZW50LCBcblxuLy8gcmVwbGFjZSB0aGUgY29udGVudCB3aXRoIHRoZSBwcm9qZWN0cyB1bnFpdWUgSUQsIGlmIHByb2plY3QuaWQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUsIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgdGhhdCBidG4gYWdhaW4sIGp1c3QgcmV0dXJuLCBcblxuLy8gY2FuIHdlIGdvIGJhY2sgYW5kIGxvb2sgYXQgd2hhdCB5b3UgZGlkIHByZXZpb3VzbHkgd2l0aCB5b3VyIGNvZGU/XG5cbi8vIEkgZG9uJ3QgdGhpbmsgaXQncyB0aGUgc2FtZSBwcmV2aW91c2x5LCBiZWNhdXNlIHdlIGFyZSB1c2luZyBhIGRpdiBoZXJlIGluc3RlYWQgb2YgYSBidXR0b24sIFxuXG4vLyBJIHdhbnQgdG8gZmluZCBhIHdheSB0aGF0IEkgY2FuIG9ubHkgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBzaG91bGQgYWRkIGR1cGxpY2F0ZXMsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgcmVwbGFjZSBjb250ZW50cyBvZiBvbGQgYW5kIHdpcGUgdGhlIG5ldywgXG5cbi8vIEkgdGhpbmsgdGhlIERPTSBEaXNwbGF5IGlzIGZpbmUsIGdldHRpbmcgdGhlIHZhbHVlIGZyb20gYSBmdW5jdGlvbiwgY3JlYXRpbmcgYSBkaXYgdGhhdCBzdG9yZXMgdGhlIHByb2plY3RzIG5hbWUsIFxuXG4vLyBub3cgb25jZSB0aGUgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBsb29wIHRocm91Z2ggc3RvcmFnZSwgZmluZCBvdXQgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiBhbmQgZGlzcGxheSdzIGl0J3MgY29udGVudHMsIFxuXG4vLyBzdGljayB3aXRoIGhvdyB5b3UgYXJlIGRpc3BsYXlpbmcgdGhlIHByb2plY3RzIGluIHRoZSBET00sIFxuXG4vLyBob3cgd2lsbCB5b3UgYWRkIHRoaW5ncyB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgZGlzcGxheSBvbmx5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBtYWtlIGEgbG9vcCBnZXQgdGhlIHByb2plY3QncyBJRCwgY29tcGFyZSB0aGUgSUQgdG8gdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQgb24sIFxuXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWUgPSB2YWx1ZTsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZUlEID0gcHJvamVjdFZhbHVlLmlkOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSBwcm9qZWN0VmFsdWVbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXZOYW1lQnRuTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuXG4vLyBoZXJlIHRvIHRvcCBvZiBmdW5jdGlvbiwgXG5cblxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdDsgXG4gIC8vICAgICBsZXQgbmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2cobmFtZXMpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHsgXG4gIC8vICAgICBsZXQgeSA9IGxvY2FsU3RvcmFnZS5rZXkoXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2coeSk7XG4gIC8vICAgfVxuICAvLyB9IFxuICAvLyAgIGZvcihsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICAvLyBsZXQgeCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdFtcImtleVwiXTsgXG5cbiAgLy8gICAgIC8vIGxldCB4aWQgPSBwcm9qZWN0W1wiaWRcIl07IFxuXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh4aWQpO1xuICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG5cbiAgLy8gb2xkIGxvZ2ljIGJlbG93IFxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBsZXQgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVJRCk7XG5cbiAgLy8gICAvLyBpZiAocHJvamVjdFZhbHVlSUQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUpIHsgXG4gIC8vICAgLy8gICAgICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIpO1xuICBcbiAgLy8gICAvLyAgICB9XG5cblxuXG4gIC8vICAgbGV0IHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluXCIpO1xuICAgIFxuICAvLyAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTtcblxuICAvLyAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgLy8gICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2KTtcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5hcHBlbmQodGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSk7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pOyBcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG5cbiAgLy8gfSlcblxuICAvLyBoZXJlIHRvIGJvdHRvbSBicmFja2V0IFxuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvblwiKTtcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXZOYW1lQnRuTmF2YmFyKTtcblxuLy8gfVxuXG5cbi8vIGZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcbi8vICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHZhbHVlSW5Qcm9qZWN0W1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgIHByb2plY3REaXYuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuXG4vLyAgIGNvbnNvbGUubG9nKHN0cmluZ1ZhbHVlKTtcblxuXG5cblxuLy8gICAvLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdik7XG5cbi8vICAgLy8gY29uc29sZS5sb2codmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGxldCBwcm9qZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZURhdGEpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZXMpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuLy8gICAvLyBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3QpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSAgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFxuXG5cblxuXG5cblxuXG5cblxuLy8gbWFrZSBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBjb250ZW50cyBvZiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFwcGVuZHMgdGhlIHJlc3VsdCB0byB0aGUgRE9NLiBcblxuLy8gZnVuY3Rpb24gcHJpbnRTdG9yYWdlVG9Eb20oKSB7IFxuLy8gICAvLyBsZXQgZ2V0U3RvcmFnZUl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbi8vICAgLy8gbGV0IHBhcnNlZEl0ZW1zID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG5cbiBcblxuLy8gICBsZXQgbmF2UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG4vLyAgIG5hdlByb2plY3RzQ29udGFpbmVyLmFwcGVuZChzdHVwaWRWYWx1ZSk7XG4vLyB9IFxuXG5cbi8vIHByaW50U3RvcmFnZVRvRG9tKCk7XG5cblxuXG5cblxuICAvLyBsZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbiAgLy8gbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4gIC8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7IFxuXG4vLyBjb25zb2xlLmxvZyhmb3JtRWxlbWVudCk7XG5cbi8vIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG4vLyBZZWFoLCBJIHRoaW5rIGZvY3VzaW5nIG9uIHRoZSBiYXNpYyBpZGVhIG9mIGhvdyB0byBjcmVhdGUgYSBwcm9qZWN0IGFuZCBcbi8vIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgcHJvamVjdCB3aGVuIGl0cyBzaWRlYmFyIGJ1dHRvbiBpcyBjbGlja2VkIHdvdWxkIGJlIG15IGZpcnN0IHN0ZXAuIFxuLy8gVGhlbiB5b3UgY2FuIHRoaW5rIGFib3V0IHdoYXQgc2hvdWxkIGJlIG9uIHRoZSBwcm9qZWN0J3MgcGFnZTogdGhleSB3aWxsIG5lZWQgYnV0dG9ucyB0byBhZGQgYSB0YXNrIGFuZCB3aGF0IG5vdFxuXG4vLyBoYXZlIHRoZSB1c2VyIGVudGVyIGEgcHJvamVjdCBuYW1lLCBhbmQgc2F2ZSB0aGUgdmFsdWUsIHBhc3MgdGhhdCB2YWx1ZSB0byBzdG9yYWdlLiBcblxuLy8gdGhlIHZhbHVlIGNhbiBvbmx5IGJlIHNhdmVkLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZCBidG4sIGluc2lkZSB0aGUgbGlzdGVuZXIsIGdldCB0aGUgaW5wdXQgZmllbGQsIGNhcHR1cmUgaXQncyB2YWx1ZSB0aGVuIGNvbnNvbGUgbG9nIGl0IFxuXG4vLyB0aGUgaXNzdWUgb2YgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkIGJlaW5nIGNsZWFyZWQsIFxuXG4vLyB3ZWxsIEkgd3JhcHBlZCBpdCBpbnNpZGUgYSBmb3JtIHRhZywgaXQgd29ya3MgYnV0IGl0IHJlZnJlc2hlcyB0aGUgcGFnZSwgSSBtZWFuIGlzIHRoYXQgYSBwcm9ibGVtLCBcblxuLy8gSSBndWVzcyBub3cgSSdsbCB3b3JrIG9uIHN0b3JpbmcgdGhlIGRhdGEsIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBET00gbG9naWNcbi8vIGV4cG9ydCB0aGVuIGltcG9ydCB3aXRoaW4gYW5vdGhlciBmaWxlIFxuXG4vLyBpbXBvcnQgeyBzb21lIH0gZnJvbSBcImxvZGFzaFwiO1xuLy8gLy8gaW1wb3J0IHsgY29udGVudFR5cGUgfSBmcm9tIFwibWltZS10eXBlc1wiO1xuLy8gaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7IFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1JbnB1dCgpIHsgXG5cbi8vICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1maWVsZC10ZXh0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCI7XG5cbi8vICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTtcblxuLy8gICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbi8vICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4vLyAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuLy8gICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIik7XG5cbi8vICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuXG4vLyAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbi8vIH0gXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3ROYW1lVG9ET00odmFsdWUpIHsgXG5cbi8vICAgbGV0IHVzZXJJbnB1dFZhbHVlID0gdmFsdWU7ICBcblxuLy8gICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIik7IFxuXG4vLyAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4vLyAgIC8vIGdldCB0aGUgZWxlbWVudCBhbmQgdHJ5IHRvIHVzZSBpdCBpbnNpZGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlLCBcbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTsgXG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7IFxuXG4vLyAvLyBpZiAocHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbmNsdWRlcyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbikpIHsgXG4vLyAvLyAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbi8vIC8vIH1cblxuLy8gICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSB5b3UgY2xpY2tlZCB0aGUgcHJvamVjdCBuYW1lXCIpO1xuXG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gICAgXG4vLyAgICAgLy8gd2hlbiBidG4gaXMgY2xpY2tlZCBpdCB3aWxsIGdlbmVyYXRlIGEgcG9wLXVwIGZvcm0gXG4vLyAgICAgLy8gSSB0aGluayB5b3UgbmVlZCBhIGNvbnRhaW5lciwgYSBkaXYgdGhhdCBob2xkcyB0aGUgY29udGVudCwgYXBwZW5kIHRoZSBkaXYgdG8gdGhlIGNvbnRhaW5lciwgXG4gICAgXG4vLyAgICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgIFxuICAgICAgXG4vLyAgICAgICAvLyBpZiAobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmluY2x1ZGVzKHNvbWVCdG4pKSB7XG4vLyAgICAgICAvLyAgIHNvbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuLy8gICAgICAgLy8gfVxuXG4gICAgXG5cbi8vICAgICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICAgIC8vIHNvbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcC11cC1jb250YWluZXJcIik7IFxuXG4vLyAgICAgICBsZXQgdGl0bGVPZlRvRG9JbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiIFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiIHVuZGVybGluZVwiO1xuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgICAvLyBpbiBvcmRlciB0byBjZW50ZXIgaXQgeW91IG5lZWQgdG8gYXBwZW5kIHRoaXMgZWxlbWVudCBcblxuLy8gICAgICAgLy8gdG8gYW5vdGhlciBjb250YWluZXIgXG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjsgXG5cbi8vICAgICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgbGV0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIHBvcFVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwLWNvbnRlbnRcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0LWZpZWxkLXN0eWxlc1wiKTtcblxuLy8gICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpOyBcblxuLy8gICAgICAgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbi8vICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuLXRvLWRvLWlucHV0XCIpXG5cbi8vICAgICAgIGNsb3NlQnRuLnNyYyA9IFwiLi4vY2xvc2UtY2lyY2xlLnBuZ1wiOyBcblxuLy8gICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgdXJnZW5jeUxhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIGxldCB1cmdlbmN5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpOyBcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwidXJnZW5jeS1kcm9wZG93bi1zdHlsZXNcIik7XG5cblxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIiBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7IFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjsgXG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGRhdGVQaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4vLyAgICAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcblxuLy8gICAgICAgY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5SGlnaCk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TWVkaXVtKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lMb3cpOyBcblxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZU9mVG9Eb0lucHV0Rm9ybSk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50TGFiZWwpOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeURyb3BEb3duKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlckxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuQ29udGFpbmVyKTsgXG5cbiAgICBcblxuLy8gICAgICAgLy8gc2hvdWxkIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgY29udGVudCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lcj8gXG5cbi8vICAgICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbi8vICAgICB9KSBcblxuLy8gICAgIGFkZFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7IFxuXG4vLyAgIH0pIFxuXG5cbi8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG5cblxuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvTWFpbigpIHsgXG4vLyAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pOyBcblxuLy8gfVxuXG5cblxuLy8gSSdtIGFibGUgdG8gZ2V0IHRoZSB1c2VyIHZhbHVlLCBJIGFtIGFibGUgdG8gbG9nIG91dCBpdCdzIHZhbHVlLCBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgcHJvamVjdHMgY29udGFpbmVyIHNlY3Rpb24sXG5cbi8vIGl0IHN0aWxsIHJldHVybnMgYW5kIEhUTUwgZWxlbWVudCwgSSBjYW4gdHVybiBpdCBpbnRvIGFuIGFycmF5LCBidXQgSSBhbSB1bnN1cmUgb2YgaG93IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuXG4vLyB3aGF0IEkgd2FudCwgdGhlIHVzZXIgd2lsbCBlbnRlciBwcm9qZWN0IG5hbWUsIEkgd2FudCB0aGF0IG5hbWUgdG8gYXBwZWFyIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBhbmQgbWFpbiBjb250ZW50IHNlY3Rpb24oYmx1ZSBwYXJ0KTsgXG5cbi8vIFByb2JsZW06IEkgYW0gY29uZnVzZWQgb24gaG93IHRvIGFwcGVuZCB0aGlzIHByb2plY3QgbmFtZSB0byB0aGUgRE9NLiBcblxuLy8gV2hhdCBJJ3ZlIHRyaWVkOiBPbmNlIHRoZSBhZGQgYnRuIGlzIHByZXNzZWQsIHRoZSB2YWx1ZS9uYW1lIG9mIHByb2plY3Qgd2lsbCBiZSBzYXZlZCwgYW5kIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoYXQgXG5cbi8vIHZhbHVlIGFuZCBwcmludHMgdG8gdGhlIERPTS4gXG5cbi8vIEkgYW0gYWJsZSB0byBhY2Nlc3MgdGhlIHByb2plY3QgY29udGFpbmVyLCBhbmQgdGhlIG1haW4gc2VjdGlvbiBidXQgaXQncyBhbiBIVE1MIGNvbGxlY3Rpb24sIEkgY2FuIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYXBwZW5kIGFuIGFycmF5IHRvIHRoZSBET00/ICIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaW1wb3J0IHsgYWRkUHJvamVjdEZvcm1JbnB1dCwgYXBwZW5kUHJvamVjdE5hbWVUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG4vLyBpbXBvcnQgeyBzdG9yZVByb2plY3ROYW1lIH0gZnJvbSBcIi4vYXJyYXlTdG9yYWdlXCI7IFxuXG5cbi8vIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTsgXG5cbi8vICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIFxuLy8gICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gXCJ0cnVlXCI7XG4gIFxuLy8gICBhZGRQcm9qZWN0Rm9ybUlucHV0KCk7IFxuICBcbi8vICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKV0gLmF0KC0xKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBcbi8vICAgICBsZXQgdXNlclZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImlucHV0LWZpZWxkLXRleHRcIilbMF0udmFsdWU7IFxuXG4vLyAgICAgaWYgKHVzZXJWYWx1ZSAhPT0gXCJcIikgeyBcbi8vICAgICAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbi8vICAgICAgfSBlbHNlIHsgXG4vLyAgICAgICByZXR1cm47IFxuLy8gICAgIH0gXG4gICAgIFxuLy8gICAgIHN0b3JlUHJvamVjdE5hbWUodXNlclZhbHVlKTtcblxuLy8gICAgIGFwcGVuZFByb2plY3ROYW1lVG9ET00odXNlclZhbHVlKTsgXG5cbi8vICAgICBsZXQgcHJvamVjdERPTUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgICAgbGV0IGlucHV0RmllbGRUZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dFZhbHVlID0gaW5wdXRGaWVsZFRleHRFbGVtZW50LnZhbHVlOyBcblxuLy8gICAgIGlmIChpbnB1dEZpZWxkVGV4dFZhbHVlID09PSB1c2VyVmFsdWUpIHsgXG4vLyAgICAgICBwcm9qZWN0RE9NQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbi8vICAgICB9IGVsc2UgeyBcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9IFxuLy8gICB9KSBcblxuLy8gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTsgXG5cbi8vICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4vLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTsgXG4vLyAgICAgcHJvamVjdERPTUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOyBcbi8vICAgIH0pIFxuLy8gfSkgXG5cblxuLy8gY29uc3QgbmF2YmFyUHJvamVjdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTtcblxuLy8gY29uc29sZS5sb2cobmF2YmFyUHJvamVjdE5hbWVFbGVtZW50KTsgXG5cblxuXG4vLyBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtZmllbGQtdGV4dFwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gbmF2YmFyUHJvamVjdE5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGV5XCIpOyBcbi8vICAgLy8gY2FsbCB0aGUgRE9NIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgXG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhdHRlbXB0cyBcblxuLy8gcHJvamVjdFNlY3Rpb25OYW1lQnV0dG9uQXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwicHJpbnQgc29tZXRoaW5nXCIpO1xuLy8gfSlcblxuLy8gbGV0IHByb2plY3RTZWN0aW9uTmFtZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXNlY3Rpb24tYnRuXCIpWzBdO1xuXG4vLyBsZXQgYXJyID0gQXJyYXkuZnJvbShwcm9qZWN0U2VjdGlvbk5hbWVEaXYpO1xuXG4vLyBjb25zb2xlLmxvZyhhcnIpO1xuXG4vLyBhcnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiVGhpcyBwcm9qZWN0IHN1Y2tzIVwiKTtcbi8vIH0pIFxuXG5cbi8vIHByb2plY3RTZWN0aW9uTmFtZURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgY29uc29sZS5sb2coXCJoaSwgSSBhbSB3b3JraW5nXCIpO1xuLy8gfSkgXG5cblxuXG4vLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7XG5cbi8vICAgfSkgXG5cblxuXG5cblxuXG5cbi8vIGlmIHVzZXJWYWx1ZSBpcyA9PT0gJycgZW1wdHksIHRoZW4gZGlzYWJsZSBidG4sIGlmIG5vdCwgZW5hYmxlIGJ0biBzbyBpdCBjYW4gYmUgY2xpY2tlZCBhZ2FpbiwgXG5cbi8vIHRyeWluZyB0byB0aGluayBvZiB0aGUgbG9naWMsIHRvIG1ha2Ugc3VyZSBvbmx5IG9uZSBpbnB1dCBmaWVsZCBjYW4gYmUgZ2VuZXJhdGVkIGF0IGEgdGltZSwgXG5cbi8vIHVzZXIgc2hvdWxkIG5vdCBiZSBhYmxlIHRvIHByZXNzIGFkZCBwcm9qZWN0IGFuZCBhZGQgbXVsdGlwbGUgaW5wdXQgZmllbGRzLCBcblxuLy8gb25jZSB0aGUgdmFsdWUgaXMgZW50ZXJlZCwgdGhlIGJ0biBjYW4gYmUgcHJlc3NlZCBhZ2Fpbi4gXG5cbiAgLy8gaGVyZSwgdGhlIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBjYWxsZWQgd2hlbiBhIGNvbmRpdGlvbiBpcyBtZXQuIFxuXG4gIC8vIHdoYXQgaXMgdGhlIGNvbmRpdGlvbj8gY2Fubm90IHByZXNzIHRoZSBidG4gdW5sZXNzIHRoZSBjdXJyZW50IFxuXG4gIC8vIGlmICBcblxuXG5cbi8vIGNhbmNlbCBidG4gZnVuY3Rpb25hbGl0eSB3b3Jrcywgc2FtZSB3aXRoIGFkZCBidG4sIFxuXG4vLyBpcyB0aGVyZSBhIHdheSBJIGNhbiBmaXggdGhlIHVzZXIgZnJvbSBoaXR0aW5nIHRoZSBhZGQgcHJvamVjdCBidG4sIGJlZm9yZSBhIHByb2plY3QgaGFzIGJlZW4gYWRkZWQ/IFxuXG4vLyBidG4gY2FuIG9ubHkgYmUgY2xpY2tlZCBvbmNlIHRoZSBhZGQgYnRuIGhhcyBiZWVuIHByZXNzZWQsIFxuXG5cbi8vIG5leHQgc3RlcCB3b3VsZCB0byB0cnkgdG8gd29yayBvbiB0aGUgbG9naWMgdGhhdCBwcmV2ZW50cyBhIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0IFxuXG4vLyBpZiB0aGUgdmFsdWUvbmFtZSBoYXMgbm90IGJlZW4gYWRkZWQsIFxuXG4vLyB1bmRlcnN0YW5kIGhvdyB0aGUgZWxlbWVudCBpcyBiZWluZyBhcHBlbmRlZCwgXG5cbi8vIFxuXG5cblxuXG4vLyBhcHBseSB0aGUgc2FtZSBsb2dpYyB3aXRoIHRoZSBjYW5jZWwgYnRuLCBcblxuLy8gYWNjZXNzIHRoZSBjYW5jZWwgYnRuIGVsZW1lbnQsIHVzZSBhIHNlbGVjdG9yLCBcblxuLy8gXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8sIGlzIGFmdGVyIHRoZSBwcm9qZWN0IGlzIGFwcGVuZGVkIHRvIHRoZSBET00gc2VjdGlvbiwgcmVtb3ZlIHRoZSBjb250YWluZXIsIFxuXG4vLyBidXQgYWxsb3cgdGhlIHVzZXIgdG8gZW50ZXIgYW5vdGhlciBwcm9qZWN0LCB3aXRoIGFub3RoZXIgbmFtZSBhbmQgZW50ZXIgaXQsIFxuXG4vLyB3aGVuIEkgcHJlc3MgdGhlIGFkZCBwcm9qZWN0IGJ0biBhbmQgZW50ZXIgYSBkaWZmZXJlbnQgbmFtZSwgaXQgd2lsbCBvbmx5IFxuXG4vLyBvdXRwdXQgdGhlIGZpcnN0IG5hbWUgdGhhdCB3YXMgZW50ZXJlZCwgXG5cbi8vIHRoZSBmdW5jdGlvbmFsaXR5IGlzIHRoYXQgdGhlIHVzZXIgY2xpY2tzLCBhZGQgcHJvamVjdCwgaW5wdXQgZmllbGQgZ2VuZXJhdGVkLCBuYW1lIGlzIGFkZGVkLCBcblxuLy8gd2hlbiB1c2VyIHByZXNzZXMgYWRkLCBpdCB3aWxsIGdldCBhZGRlZCB0byB0aGUgY29udGFpbmVycywgaW5wdXQgZmllbGQgcmVtb3ZlZCwgXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gc2hvdWxkIHN0aWxsIGhhdmUgZnVuY3Rpb25hbGl0eSwgYWxsb3dpbmcgdGhlIHVzZXIgdG8gZW50ZXIgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHB1dCB0aGUgbG9naWMgb3V0c2lkZSBvZiB0aGUgbG9vcCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gaSBjYW4gYWNjZXNzIHRoZSB2YWx1ZSwgdGhhdCB0aGUgdXNlciBlbnRlcmVkLCBub3cgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG4vLyBhcHBlbmRpbmcgdmFsdWUgd29ya3MsIGdyYWIgdGhlIHRhcmdldCBjb250YWluZXJzIGFuZCBhcHBlbmQgdGhlcmUuIFxuXG5cblxuXG4vLyBhY2Nlc3MgdGhlIGlucHV0IGZpZWxkIGVsZW1lbnQsIGFwcGVuZCB0byBET00gXG5cblxuXG5cblxuXG4vLyBncmFiIGFkZCBidG4gZWxlbWVudCwgYWRkIGEgbGlzdGVuZXIgdG8gaXQgXG5cbi8vIGxldCBhZGRQcm9qZWN0VG9ET01CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWJ0blwiKVswXTsgXG5cblxuXG5cbi8vIGNvbnN0IGFkZFByb2plY3RUb0RPTUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKTtcblxuLy8gY29uc3QgbmV3QXJyID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBuZXdBcnIuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICBjb25zb2xlLmxvZyhidXR0b24pO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5LCBpbnNpZGUgYSBjbGlja2VyIVwiKTtcbi8vICAgfSk7XG4vLyB9KVxuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLWJ0blwiKS5mb3JFYWNoKCBidXR0b24gPT4ge1xuLy8gICBjb25zb2xlLmxvZyhidXR0b24pO1xuLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5LCBpbnNpZGUgYSBjbGlja2VyIVwiKVxuLy8gICB9KTtcbi8vIH0pXG5cblxuXG5cblxuXG5cblxuXG4vLyBjb25zdCBuZXdBcnJheSA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyYXkpO1xuXG4vLyAgbmV3QXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiMSwgMiwgMSwgMlwiKTsgXG4vLyB9KVxuXG4vLyBjb25zdCBhcnIgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKGFycik7XG5cbi8vIGNvbnNvbGUubG9nKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cblxuXG5cblxuIiwiLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciBtb2R1bGVcblxuLy8gaW1wb3J0IFwic3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanNcIjtcblxuaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7XG5cbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IFwiLi9jb25kaXRpb25hbExvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuXG4vLyBsZXQgcHJvamVjdCBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIC8vIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlSW5Qcm9qZWN0KTtcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7IFxuXG4gICAgIFxuXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgIFxufSBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdG9yYWdlKCkgeyBcbi8vICAgbGV0IGdldE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuICBcbi8vICAgY29uc29sZS5sb2coZ2V0TmFtZSk7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iaiA9IHByb2plY3ROYW1lRmFjdG9yeShnZXROYW1lKTsgXG5cbi8vICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmopO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGluZGl2ZHVhbCBwcm9qZWN0IG5hbWUgb2JqZWN0cywgXG5cbi8vIEkgYW0gYWJsZSB0byBjcmVhdGUgcHJvamVjdCBuYW1lcywgYnV0IHdoZW4gSSB1c2Ugb2JqZWN0cyBpdCBvbmx5IGFkZHMgb250bywgYW5kIGRvZXMgbm90IGNyZWF0ZSB1bmlxdWUgcHJvamVjdHMuIFxuXG4vLyBcblxuXG5cblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKHZhbHVlKSB7IFxuXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWUpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkgeyBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdE5hbWUoXCJhbGVjXCIpOyBcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4vLyBsZXQgZ0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gYXJyYXk7XG4vLyAgICAgfVxuLy8gfSgpKTsgXG5cbi8vIGdBcnJheSgxKTsgXG4vLyBnQXJyYXkoMik7IFxuLy8gZ0FycmF5KDMpOyBcbi8vIGdBcnJheSg0KTsgXG5cbi8vICBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyYXkgPSBbXTsgXG4vLyAgICAgY29uc29sZS5sb2coYXJyYXkpXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxUaGlzICh2YWx1ZSkgeyBcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7IFxuLy8gICAgICAgICByZXR1cm4gYXJyYXlcbi8vICAgICB9IFxuLy8gfSBcblxuLy8gc3RvcmVVc2VyVmFsdWUoKTtcblxuXG5cblxuXG5cbi8vIGZpbmQgd2F5IHRvIGFkZCBpdGVtcyBvbnRvIGFuIGFycmF5LCBJIGRvbid0IHRoaW5rIGl0J3Mgc21hcnQgdG8gYWRkIG9uZSBhdCBhIHRpbWUsIGJ1dCBtb3JlIHNvIGxpa2UgYWRkaW5nIHByb2plY3RzIG9udG8gYSBzaW5nbGUgYXJyYXkgXG5cbiAgICAvLyB0aGluayBvZiBhIHdheSB0byBhZGQgaW50byBhbiBhcnJheSwgbG9vayBpbnRvIGNsb3N1cmUgYW5kIGFkZGluZyBvbnRvIGFuIGFycmF5IHVzaW5nIGNsb3N1cmUuIFxuXG4gICAgLy8gY2xvc3VyZSBzZWVtcyBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBob3cgY2FuIEkgbWFrZSB0aGlzIHdvcmsgd2l0aCB0aGUgY3VycmVudCBjb2RlIEkgaGF2ZT8gXG5cbiAgICAvLyB3ZWxsIEkgdGhpbmsgSSBkaWQgZmluZCBhIHdheSB0byBzdG9yZSB0aGUgcHJvamVjdCBuYW1lcywganVzdCBzb21ldGhpbmcgZG9lc24ndCBzZWVtIHJpZ2h0IGFib3V0IHRoZSBzdG9yYWdlXG5cbiAgICAvLyAgXG5cbi8vIHRoYXQgYXJyYXkgY2FuIGJlIHBhcnQgb2YgYW4gb2JqLCBrZXkgaW50byB0aGUgYXJyYXlcblxuLy8gYnRuIHByb2JsZW0sIGFwcGVuZGluZyB0b28gbWFueSBpbnB1dCBmaWVsZHMsIGNvbmRpdGlvbmFsIHRvIHByZXZlbnQgXG5cbi8vIGNvcnJlY3QgYXJyYXkgc3RvcmFnZSBcblxuLy8gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG4gXG4vLyBwcm9wZXJseSBpbnN0YWxsaW5nIGFuZCB1c2luZyBzYXNzIGFmdGVyIHRoZSBhYm92ZSBpcyBhY2NvbXBsaXNlZC4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9