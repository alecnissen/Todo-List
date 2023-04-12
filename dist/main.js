/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conditionalLogic.js */ "./src/conditionalLogic.js");
/* harmony import */ var _conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conditionalLogic_js__WEBPACK_IMPORTED_MODULE_2__);



 

 





const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay"); 

const addProjectButton = document.getElementById("add-project-btn");

const closeModalBtn = document.getElementsByClassName("close-btn")[0]; 

let modalInputField = document.getElementById("input-field-within-modal"); 

let addProjectBtnWithinModal = document.getElementById("add-project-btn-within-modal"); 

let formTagForModule = document.getElementById("form-tag-for-modal"); 

let modalContainerForTodo = document.getElementsByClassName("modal-todo")[0]; 

let overlayForTodoModal = document.getElementsByClassName("overlay-for-todo-modal")[0]; 

// console.log(overlayForTodoModal);

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

    let mainContentContainer = document.getElementsByClassName("main-content-section-container")[0]; 

    
    projectNameContainer.addEventListener("click", (e) => { 
      // works too
      // mainContentContainer.replaceChildren();

      // once the project name/container is clicked, clear the DOM and then create the elements, 

      // or clear the DOM before the btn is clicked, so that way a new element gets created each time, 
      
      let mainContentContainerProjectNames = document.getElementsByClassName("main-content-section-container")[0]; 

      mainContentContainerProjectNames.replaceChildren();
      
      let projectNameValueContainerForStyles = document.createElement("div"); 

      projectNameValueContainerForStyles.classList.add("project-name-click-event-container-for-styles"); 

      let btnContainerAddandDelete = document.createElement("div");

      let addBtnToCreateModal = document.createElement("img"); 

      addBtnToCreateModal.addEventListener("click", (e) => { 
        console.log("yo");
      })

      let deleteBtnToDeleteTodo = document.createElement("img"); 

      addBtnToCreateModal.src = "../plus-sign-svgrepo-com (1).svg";

      addBtnToCreateModal.classList.add("add-btn-svg-project-name-styles");

      deleteBtnToDeleteTodo.src = "../trashcan-svgrepo-com (1).svg";

      deleteBtnToDeleteTodo.classList.add("delete-btn-trash-can-svg-icon-styles");

      btnContainerAddandDelete.classList.add("add-delete-btn-for-todo-container-styles"); 

      // function call/conditional logic call here before the values are appended? 

      // projectDisplayConditionalLogic(projectArray); 

      btnContainerAddandDelete.append(addBtnToCreateModal); 

      btnContainerAddandDelete.append(deleteBtnToDeleteTodo); 

      let projectNameValueClicked = e.target.textContent; 

      projectNameValueContainerForStyles.append(projectNameValueClicked);
      
      mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

      mainContentContainerProjectNames.append(btnContainerAddandDelete); 

      // btnContainerAddandDelete.replaceChildren();

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

let cancelBtnAddTodoModal = document.getElementsByClassName("close-the-todo-modal")[0];

console.log(cancelBtnAddTodoModal);

cancelBtnAddTodoModal.addEventListener("click", (e) => { 

  modalContainerForTodo.style.display = "none"; 

  overlayForTodoModal.style.display = "none";


  // console.log("heyyyy"); 

  // log is working, can access the element, now grab the modal, and set the display to none, 
  // you can grab the variable above for reference, 
})





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

// console.log(projectArray); 

     

(0,_domLogic__WEBPACK_IMPORTED_MODULE_1__.printValuesToDOM)(_domLogic__WEBPACK_IMPORTED_MODULE_1__.projectArray); 



// OK today the goal is to figure out, how to disable/exit the modal, and how to activate it 

// based upon a button click, 

// then once those are good, then we can focus on the styling of the modal, 

// first let's add the logic that can exit the modal, 

// grab the id or class from HTML, and first log the element correctly, 

// then add event listener, that sets the modals display to none, 

// then if the user pressed the + icon, set the display to flex, 









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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRW5FOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdNOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2Qjs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzUyQkEsWUFBWSw4Q0FBOEM7QUFDMUQsWUFBWSxtQkFBbUI7OztBQUcvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7OztBQUdKOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7QUFXSjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOzs7Ozs7OztBQVFOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7Ozs7O0FBS0E7Ozs7Ozs7QUFPQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7Ozs7Ozs7O0FBVUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BTQTs7QUFFQTs7QUFFK0I7O0FBRVg7O0FBRWlEOztBQUVsRDs7QUFFaUY7O0FBRXBHOztBQUVBOztBQUVBOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJEQUFnQixDQUFDLG1EQUFZOzs7O0FBSTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7Ozs7OztBQU9BOzs7OztBQUtBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QixLQUFLLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxjQUFjOztBQUVkOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3htQm9COztBQUVzQjs7QUFFMUM7OztBQUdlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNoS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbmNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxubGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG5sZXQgbW9kYWxDb250YWluZXJGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRvZG9cIilbMF07IFxuXG5sZXQgb3ZlcmxheUZvclRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsXCIpWzBdOyBcblxuLy8gY29uc29sZS5sb2cob3ZlcmxheUZvclRvZG9Nb2RhbCk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSlcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgXG5cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4gIHJldHVybiB7IFxuICAgIHByb2plY3Q6IG5hbWUsXG4gICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgdG9kb0l0ZW1zOiBbXSxcbiAgfVxufSBcblxuYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4gIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG59KSBcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4gIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4gICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4gICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbiAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgIFxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgIC8vIHdvcmtzIHRvb1xuICAgICAgLy8gbWFpbkNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICAgIC8vIG9uY2UgdGhlIHByb2plY3QgbmFtZS9jb250YWluZXIgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIERPTSBhbmQgdGhlbiBjcmVhdGUgdGhlIGVsZW1lbnRzLCBcblxuICAgICAgLy8gb3IgY2xlYXIgdGhlIERPTSBiZWZvcmUgdGhlIGJ0biBpcyBjbGlja2VkLCBzbyB0aGF0IHdheSBhIG5ldyBlbGVtZW50IGdldHMgY3JlYXRlZCBlYWNoIHRpbWUsIFxuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBcbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKTsgXG5cbiAgICAgIGxldCBidG5Db250YWluZXJBZGRhbmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBsZXQgYWRkQnRuVG9DcmVhdGVNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b1wiKTtcbiAgICAgIH0pXG5cbiAgICAgIGxldCBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIC8vIGZ1bmN0aW9uIGNhbGwvY29uZGl0aW9uYWwgbG9naWMgY2FsbCBoZXJlIGJlZm9yZSB0aGUgdmFsdWVzIGFyZSBhcHBlbmRlZD8gXG5cbiAgICAgIC8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyhwcm9qZWN0QXJyYXkpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuICAgICAgXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQocHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyk7XG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChidG5Db250YWluZXJBZGRhbmREZWxldGUpOyBcblxuICAgICAgLy8gYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgfSlcbiAgfVxufSBcblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHVzZSB0aGlzIG9uZSBmdW5jdGlvbiwgaWYgeW91IGFyZSBhbHJlYWR5IG1ha2luZyB0aGUgbG9vcCwgZ3JhYmJpbmcgZWxlbWVudHMgd2h5IHNlcGVyYXRlIHRvIGFub3RoZXIgZnVuY3Rpb24/IFxuXG4vLyBuZXh0IGlmIHRoZSBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgYXBwZW5kIHRoZSB0ZXh0Q29udGVudCB0byB0aGUgbWFpbiBjb250YWluZXIgc2VjdGlvbiwgXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBncmFiIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBhbmQgYWRkIHRoZSBldmVudCB0YXJnZXQgdGV4dCBDb250ZW50LCBjYW4gSSBhbHNvIGFwcGVuZCB0aGUgYnRuJ3M/IFxuXG4vLyBvbmNlIHRoYXQgaXMgY29tcGxldGUsIGRvbid0IGZvcmdldCB0byBhZGQgYSBjbGFzcywgc28gdGhlIHRleHQgQ29udGVudCBjYW4gYmUgc3R5bGVkLCBcblxuLy8gb25jZSB5b3UgYXJlIGFibGUgdG8gZG8gdGhhdCwgeW91IG5lZWQgdG8gYWRkIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBsb2dpYywgdGhhdCB3aWxsIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgdGhlIHNhbWUgcHJvamVjdCBhZ2FpbiwgXG5cbi8vIFRISVMgV0lMTCBIQVZFIFRPIElOU0lERSBBTk9USEVSIEZVTkNUSU9OXG5cbi8vIHlvdSB3aWxsIGhhdmUgdG8gYXBwZW5kIHRoZSB0d28gYnRucyBmb3IgdGhlIHRvZG8ncywgYWRkIGFuZCBkZWxldGUsIHlvdSBjYW4gdXNlIHN2ZyBpY29ucywgXG5cbi8vIEkgZG9uJ3QgdGhpbmsgdGhlIHByb2plY3QgbmFtZXMgc2hvdWxkIHN0YXkgaW4gdGhlIGNvbnRhaW5lciwgb25lIHN0dWRlbnQgZGlkIG5vdCBoYXZlIHRoYXQgbG9naWMsIFxuXG4vLyBOZXh0IHJlcGxhY2UgdGhlIGJ0biB0ZXh0IHdpdGggYW4gc3ZnLCBvbiBhbiArIGljb24gYW5kIHRyYXNoIGJ0biwgXG5cbi8vIE9LIHN2ZyBpY29ucyBhcmUgYWRkZWQsIHNvbWV0aW1lcyBhIGxpdHRsZSBzbG93IHRvIHJlbmRlciBidXQgdGhhdCBjYW4gYmUgYWRkcmVzc2VkIGFub3RoZXIgdGltZSwgXG5cbi8vIGxldHMgbW92ZSBvbnRvIG1ha2luZyB0aGUgbG9naWMgdGhhdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGFkZGluZywgdGhlIHNhbWUgcHJvamVjdCBtdWx0aXBsZSB0aW1lcywgXG5cbi8vIG5vdyBiZWdpbnMsIGhvdyB3ZSBjYW4gcHJldmVudCB1c2VyIGZyb20gYWRkaW5nIHRoZSBzYW1lIHByb2plY3QgbXVsdGlwbGUgdGltZXMsIGFuZCBpZiB0aGUgdXNlciBjbGlja3MgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gcmVwbGFjZSB0aGUgbmV3IGFuZCBjbGVhciB0aGUgb2xkLCBcblxuLy8gc2VwZXJhdGUgZnVuY3Rpb24sIHdpdGhpbiBhIHRvdGFsbHkgZGlmZmVyZW50IG1vZHVsZSwgXG5cbi8vIGV4cG9ydCBhbmQgaW1wb3J0IHRoZSBjb3JyZWN0IGZ1bmN0aW9ucywgXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiwgbG9vcCB0aHJvdWdoIHByb2pldCBhcnJheSwgXG5cbi8vIGdldCB0aGUgcHJvamVjdCBJRCBvciB0aGUgdmFsdWUsIHByb2plY3RuYW1lLnByb2plY3QgaWYgdGhhdCBtYXRjaGVzIHdoYXQgd2FzIGNsaWNrZWQgb24sIGdlbmVyYXRlIHRoYXQgcHJvamVjdCwgZWxzZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyB0aGVyZSB3aWxsIGhhdmUgdG8gc29tZSBzb3J0IG9mIGNvbmRpdGlvbmFsIGxvZ2ljLCBcblxuLy8gc29tZXRoaW5nIG5lZWRzIHRvIGJlIGNoZWNrZWQgYmVmb3JlIGEgcHJvamVjdCBuYW1lIGNhbiBiZSBhZGRlZCB0byB0aGUgc2VjdGlvbiwgb3IgdG8gcHJldmVudCBhIHVzZXIgZnJvbSBhZGRpbmcgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuY29uc29sZS5sb2coY2FuY2VsQnRuQWRkVG9kb01vZGFsKTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gIC8vIGNvbnNvbGUubG9nKFwiaGV5eXl5XCIpOyBcblxuICAvLyBsb2cgaXMgd29ya2luZywgY2FuIGFjY2VzcyB0aGUgZWxlbWVudCwgbm93IGdyYWIgdGhlIG1vZGFsLCBhbmQgc2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUsIFxuICAvLyB5b3UgY2FuIGdyYWIgdGhlIHZhcmlhYmxlIGFib3ZlIGZvciByZWZlcmVuY2UsIFxufSlcblxuXG5cblxuXG4vLyBsZXQgY2FuY2VsQnRuQXJyYXkgPSBBcnJheS5mcm9tKGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCk7XG5cblxuXG4vLyBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyk7XG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lc0NsaWNrRXZlbnQoYXJyYXkpIHsgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KHByb2plY3RBcnJheSk7XG5cblxuXG4vLyBJIHRoaW5rIEkgTmVlZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGRvbid0IHdhbnQgdG8gaGF2ZSB0b28gbXVjaCBnb2luZyBvbiBpbiBvbmUgZnVuY3Rpb24sIFxuXG4vLyB1c2UgdGhlIHNhbWUgbG9naWMsIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5LCBcbiBcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleC5wcm9qZWN0KTtcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gb2sgbmV4dCwgcHJvamVjdCBuYW1lcyBhcmUgYmVpbmcgYWRkZWQgZHluYW1pY2FsbHksIHRoZXkgYXJlIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIHRoZSBhcnJheSBhbmQgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG5leHQgd2hlbiBJIGNsaWNrIG9uIHRoZSBwcm9qZWN0LCB0aGF0IHByb2plY3QncyBuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgY2xlYXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCwgXG5cbi8vIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgaXMgYWRkZWQgYXQgYSB0aW1lLCBzaG91bGQgbm90IGFkZCBvbnRvLiBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIGFsb25nIHdpdGggdGhlIHR3byBidG5zLCBhZGQgYW5kIGRlbGV0ZSBmb3IgdGhlIHRvZG8ncyBcblxuLy8gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIHNob3cgdGhhdCBwcm9qZWN0LCB1c2VyIGNhbm5vdCBhcHBlbmQgdGhhdCBwcm9qZWN0IG11bHRpcGxlIHRpbWVzIGJ5IGNsaWNraW5nLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gdGhpcyB3aWxsIGJlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGZpcnN0IEkgZmVlbCBsaWtlIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgZnJvbSB0aGUgYXJyYXksIGluc2lkZSB0aGUgbGlzdGVuZXIsIGxvZ2ljIHdpbGwgZ3JhYiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBhbmQgYXBwZW5kIHZhbHVlcyB0byBpdCwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIHRvIGRldGVybWluZSBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IGFkZGVkIHN1Y2ggYXMgSUQncyBtYXRjaGluZywgXG5cbi8vIGlmIElEIG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCBmcm9tIGFkZGluZyBhZ2FpbiwgZWxzZSBpZiBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJlZm9yZSB0aGUgcHJvamVjdCBuYW1lIGlzIGFwcGVuZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoYXQgbmFtZXMgaWQgbWF0Y2hlcyB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIEkgd291bGQgc2F5IGZpcnN0IGxldCdzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGNhbiBncmFiIGFsbCB0aGUgcHJvamVjdCBuYW1lcyBhbmQgSUQ/IFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0LCBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgXG5cbi8vIEknbSBub3Qgc3VyZSB5b3UgbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgc2VlbXMgbGlrZSB5b3VyIGdldHRpbmcgcHJvamVjdCB0YXJnZXQgdmFsdWUsIHdpdGggZS50YXJnZXQudGV4dENvbnRlbnQgXG5cbi8vIG5vdyBJIGJlbGlldmUgd2hhdCB5b3UgbmVlZCB0byBmaWd1cmUgb3V0IGlzIGhvdyB0byBkaXNwbGF5IHRoZSBjZXJ0YWluIHByb2plY3QsIGJhc2VkIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyByZW1lbWJlciByZXBsYWNlIHRoZSBjb250ZW50IHdpdGhpbiBtYWluIGNvbnRhaW5lciwgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSBhbGwgYmFzZWQgb24gYnRuIGNsaWNrIFxuXG4vLyB0aGluayBiYWNrIHRvIHJlc3RhdXJhbnQgcGFnZSwgXG5cbi8vIEkgc29tZWhvdyBuZWVkIHRvIHRoaW5rIHRoaXMgb3V0LCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgY29udGVudHMgb2YgcHJldmlvdXMgcHJvamVjdCBhbmQgbWFrZSB3YXkgZm9yIG5ldywgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHNvbWUgc29ydCBvZiBjb25kaXRpb25hbCwgaWYgdGhpcyBwcm9qZWN0IGlzIGNsaWNrZWQsIGNoYW5nZSB0byBhIHZhcmlhYmxlIHRoZW4gdXNlIHJlcGxhY2UgY2hpbGQuIFxuXG4vLyBpZiB0aGUgdmFyaWFibGUgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgb3IgdGhlIGRpdiwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCAgXG5cbi8vIFxuXG4vLyAtLSBob3cgdG8gbWFrZSBzdXJlIG9ubHkgdGhhdCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaXQgd2lsbCBwb3B1bGF0ZSwgd2l0aCB0aGF0IHByb2plY3QgbmFtZSwgd2lwZSB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgXG5cbi8vIC0tIHdoeSBpcyB0aGUgcHJvamVjdCdzIHNlY3Rpb24gbm90IGR5bmFtaWNhbGx5IGFkZGluZyBwcm9qZWN0cz8gSSBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZm9yIGl0IHRvIHNob3cgdXA/IFxuXG4vLyBoYW5kbGUgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZpcnN0LCBhbmQgY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG1haW4gY29udGFpbmVyIGZpcnN0LCBcblxuLy8gc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGlzIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzLCByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGNhbiBiZSBkaXNwbGF5ZWQgYXQgYSB0aW1lLCBcblxuLy8gaWYgcHJvamVjdCBjb250YWluZXIgaW5jbHVkZXMgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBzaG91bGQgaXQgYmUgc2ltaWxhciB0byByZXN0YXVyYW50IHBhZ2UsIGVhY2ggcHJvamVjdCBpcyBnaXZlbiBhIHZhcmlhYmxlLCB0aGVuIGlmIHRoYXQgcHJvamVjdCBpcyBjbGlja2VkIG9uIGl0J3MgZ2l2ZW4gYSB2YXJpYWJsZSBvciBpbmRleCwgXG5cbi8vIHRoZW4gY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QncyBJRCwgbWF0Y2hlcyB3aGF0IGlzIGluc2lkZSB0aGUgbWFpbiBjb250YWluZXIsIGlmIG5vdCBjbGlja2VkLCByZXBsYWNlIHdpdGggbmV3IGNsaWNrLCBcblxuLy8gaWYgaXQgaXMgY2xpY2tlZCBhZ2FpbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIHJlcGxhY2luZyB0aGUgY29udGVudCwgXG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aCB0aGUgcHJvamVjdHMgdW5xaXVlIElELCBpZiBwcm9qZWN0LmlkID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIHRoYXQgYnRuIGFnYWluLCBqdXN0IHJldHVybiwgXG5cbi8vIGNhbiB3ZSBnbyBiYWNrIGFuZCBsb29rIGF0IHdoYXQgeW91IGRpZCBwcmV2aW91c2x5IHdpdGggeW91ciBjb2RlP1xuXG4vLyBJIGRvbid0IHRoaW5rIGl0J3MgdGhlIHNhbWUgcHJldmlvdXNseSwgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBkaXYgaGVyZSBpbnN0ZWFkIG9mIGEgYnV0dG9uLCBcblxuLy8gSSB3YW50IHRvIGZpbmQgYSB3YXkgdGhhdCBJIGNhbiBvbmx5IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgc2hvdWxkIGFkZCBkdXBsaWNhdGVzLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIHJlcGxhY2UgY29udGVudHMgb2Ygb2xkIGFuZCB3aXBlIHRoZSBuZXcsIFxuXG4vLyBJIHRoaW5rIHRoZSBET00gRGlzcGxheSBpcyBmaW5lLCBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIGEgZnVuY3Rpb24sIGNyZWF0aW5nIGEgZGl2IHRoYXQgc3RvcmVzIHRoZSBwcm9qZWN0cyBuYW1lLCBcblxuLy8gbm93IG9uY2UgdGhlIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgbG9vcCB0aHJvdWdoIHN0b3JhZ2UsIGZpbmQgb3V0IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24gYW5kIGRpc3BsYXkncyBpdCdzIGNvbnRlbnRzLCBcblxuLy8gc3RpY2sgd2l0aCBob3cgeW91IGFyZSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgRE9NLCBcblxuLy8gaG93IHdpbGwgeW91IGFkZCB0aGluZ3MgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGRpc3BsYXkgb25seSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gbWFrZSBhIGxvb3AgZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGNvbXBhcmUgdGhlIElEIHRvIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkIG9uLCBcblxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbih2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWVJRCA9IHByb2plY3RWYWx1ZS5pZDsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gcHJvamVjdFZhbHVlW1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcblxuLy8gaGVyZSB0byB0b3Agb2YgZnVuY3Rpb24sIFxuXG5cblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgLy8gaGVyZSB0byBib3R0b20gYnJhY2tldCBcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhcik7XG5cbi8vIH1cblxuXG4vLyBmb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG4vLyAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSB2YWx1ZUluUHJvamVjdFtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3REaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICBwcm9qZWN0RGl2LmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cblxuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdWYWx1ZSk7XG5cblxuXG5cbi8vICAgLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBsZXQgcHJvamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VEYXRhKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVzKTtcbi8vICAgLy8gY29uc29sZS5sb2cocGFyc2VEYXRhKTtcbi8vICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0KTtcbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBcblxuXG5cblxuXG5cblxuXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSwgXG4vLyBhcHBlbmRzIHRoZSByZXN1bHQgdG8gdGhlIERPTS4gXG5cbi8vIGZ1bmN0aW9uIHByaW50U3RvcmFnZVRvRG9tKCkgeyBcbi8vICAgLy8gbGV0IGdldFN0b3JhZ2VJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4vLyAgIC8vIGxldCBwYXJzZWRJdGVtcyA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZUl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuXG4gXG5cbi8vICAgbGV0IG5hdlByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuLy8gICBuYXZQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoc3R1cGlkVmFsdWUpO1xuLy8gfSBcblxuXG4vLyBwcmludFN0b3JhZ2VUb0RvbSgpO1xuXG5cblxuXG5cbiAgLy8gbGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG4gIC8vIGxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuICAvLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpOyBcblxuLy8gY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuXG4vLyBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuLy8gWWVhaCwgSSB0aGluayBmb2N1c2luZyBvbiB0aGUgYmFzaWMgaWRlYSBvZiBob3cgdG8gY3JlYXRlIGEgcHJvamVjdCBhbmQgXG4vLyB0byBkaXNwbGF5IHRoZSBjb3JyZWN0IHByb2plY3Qgd2hlbiBpdHMgc2lkZWJhciBidXR0b24gaXMgY2xpY2tlZCB3b3VsZCBiZSBteSBmaXJzdCBzdGVwLiBcbi8vIFRoZW4geW91IGNhbiB0aGluayBhYm91dCB3aGF0IHNob3VsZCBiZSBvbiB0aGUgcHJvamVjdCdzIHBhZ2U6IHRoZXkgd2lsbCBuZWVkIGJ1dHRvbnMgdG8gYWRkIGEgdGFzayBhbmQgd2hhdCBub3RcblxuLy8gaGF2ZSB0aGUgdXNlciBlbnRlciBhIHByb2plY3QgbmFtZSwgYW5kIHNhdmUgdGhlIHZhbHVlLCBwYXNzIHRoYXQgdmFsdWUgdG8gc3RvcmFnZS4gXG5cbi8vIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBzYXZlZCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGQgYnRuLCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBnZXQgdGhlIGlucHV0IGZpZWxkLCBjYXB0dXJlIGl0J3MgdmFsdWUgdGhlbiBjb25zb2xlIGxvZyBpdCBcblxuLy8gdGhlIGlzc3VlIG9mIHRoZSB0ZXh0IGluIHRoZSBpbnB1dCBmaWVsZCBiZWluZyBjbGVhcmVkLCBcblxuLy8gd2VsbCBJIHdyYXBwZWQgaXQgaW5zaWRlIGEgZm9ybSB0YWcsIGl0IHdvcmtzIGJ1dCBpdCByZWZyZXNoZXMgdGhlIHBhZ2UsIEkgbWVhbiBpcyB0aGF0IGEgcHJvYmxlbSwgXG5cbi8vIEkgZ3Vlc3Mgbm93IEknbGwgd29yayBvbiBzdG9yaW5nIHRoZSBkYXRhLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgLy8gaW4gb3JkZXIgdG8gY2VudGVyIGl0IHlvdSBuZWVkIHRvIGFwcGVuZCB0aGlzIGVsZW1lbnQgXG5cbi8vICAgICAgIC8vIHRvIGFub3RoZXIgY29udGFpbmVyIFxuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlc1wiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZFwiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7IFxuXG4vLyAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBwb3BVcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBvcC11cC1jb250ZW50XCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1maWVsZC1zdHlsZXNcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTsgXG5cbi8vICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4vLyAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi10by1kby1pbnB1dFwiKVxuXG4vLyAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2Nsb3NlLWNpcmNsZS5wbmdcIjsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIHVyZ2VuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICBsZXQgdXJnZW5jeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uY2xhc3NMaXN0LmFkZChcInVyZ2VuY3ktZHJvcGRvd24tc3R5bGVzXCIpO1xuXG5cblxuLy8gICAgICAgbGV0IHVyZ2VuY3lIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCIgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiOyBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7IFxuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBkYXRlUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuLy8gICAgICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUhpZ2gpO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeU1lZGl1bSk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TG93KTsgXG5cblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVPZlRvRG9JbnB1dEZvcm0pOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudExhYmVsKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lEcm9wRG93bik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bkNvbnRhaW5lcik7IFxuXG4gICAgXG5cbi8vICAgICAgIC8vIHNob3VsZCBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXI/IFxuXG4vLyAgICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4vLyAgICAgfSkgXG5cbi8vICAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCB7IGFkZFByb2plY3RGb3JtSW5wdXQsIGFwcGVuZFByb2plY3ROYW1lVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuLy8gaW1wb3J0IHsgc3RvcmVQcm9qZWN0TmFtZSB9IGZyb20gXCIuL2FycmF5U3RvcmFnZVwiOyBcblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7IFxuXG4vLyAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBcbi8vICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IFwidHJ1ZVwiO1xuICBcbi8vICAgYWRkUHJvamVjdEZvcm1JbnB1dCgpOyBcbiAgXG4vLyAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIildIC5hdCgtMSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgXG4vLyAgICAgbGV0IHVzZXJWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1maWVsZC10ZXh0XCIpWzBdLnZhbHVlOyBcblxuLy8gICAgIGlmICh1c2VyVmFsdWUgIT09IFwiXCIpIHsgXG4vLyAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4vLyAgICAgIH0gZWxzZSB7IFxuLy8gICAgICAgcmV0dXJuOyBcbi8vICAgICB9IFxuICAgICBcbi8vICAgICBzdG9yZVByb2plY3ROYW1lKHVzZXJWYWx1ZSk7XG5cbi8vICAgICBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHVzZXJWYWx1ZSk7IFxuXG4vLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgICBsZXQgaW5wdXRGaWVsZFRleHRWYWx1ZSA9IGlucHV0RmllbGRUZXh0RWxlbWVudC52YWx1ZTsgXG5cbi8vICAgICBpZiAoaW5wdXRGaWVsZFRleHRWYWx1ZSA9PT0gdXNlclZhbHVlKSB7IFxuLy8gICAgICAgcHJvamVjdERPTUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgfSBlbHNlIHsgXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfSBcbi8vICAgfSkgXG5cbi8vICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idG5cIik7IFxuXG4vLyAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgIGxldCBwcm9qZWN0RE9NQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7IFxuLy8gICAgIHByb2plY3RET01Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuLy8gICAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTsgXG4vLyAgICB9KSBcbi8vIH0pIFxuXG5cbi8vIGNvbnN0IG5hdmJhclByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vIGNvbnNvbGUubG9nKG5hdmJhclByb2plY3ROYW1lRWxlbWVudCk7IFxuXG5cblxuLy8gbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZpZWxkLXRleHRcIik7IFxuXG4vLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vIG5hdmJhclByb2plY3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImhleVwiKTsgXG4vLyAgIC8vIGNhbGwgdGhlIERPTSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIFxuLy8gfSlcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYXR0ZW1wdHMgXG5cbi8vIHByb2plY3RTZWN0aW9uTmFtZUJ1dHRvbkFycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcInByaW50IHNvbWV0aGluZ1wiKTtcbi8vIH0pXG5cbi8vIGxldCBwcm9qZWN0U2VjdGlvbk5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1zZWN0aW9uLWJ0blwiKVswXTtcblxuLy8gbGV0IGFyciA9IEFycmF5LmZyb20ocHJvamVjdFNlY3Rpb25OYW1lRGl2KTtcblxuLy8gY29uc29sZS5sb2coYXJyKTtcblxuLy8gYXJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIlRoaXMgcHJvamVjdCBzdWNrcyFcIik7XG4vLyB9KSBcblxuXG4vLyBwcm9qZWN0U2VjdGlvbk5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGksIEkgYW0gd29ya2luZ1wiKTtcbi8vIH0pIFxuXG5cblxuLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pO1xuXG4vLyAgIH0pIFxuXG5cblxuXG5cblxuXG4vLyBpZiB1c2VyVmFsdWUgaXMgPT09ICcnIGVtcHR5LCB0aGVuIGRpc2FibGUgYnRuLCBpZiBub3QsIGVuYWJsZSBidG4gc28gaXQgY2FuIGJlIGNsaWNrZWQgYWdhaW4sIFxuXG4vLyB0cnlpbmcgdG8gdGhpbmsgb2YgdGhlIGxvZ2ljLCB0byBtYWtlIHN1cmUgb25seSBvbmUgaW5wdXQgZmllbGQgY2FuIGJlIGdlbmVyYXRlZCBhdCBhIHRpbWUsIFxuXG4vLyB1c2VyIHNob3VsZCBub3QgYmUgYWJsZSB0byBwcmVzcyBhZGQgcHJvamVjdCBhbmQgYWRkIG11bHRpcGxlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdGhlIHZhbHVlIGlzIGVudGVyZWQsIHRoZSBidG4gY2FuIGJlIHByZXNzZWQgYWdhaW4uIFxuXG4gIC8vIGhlcmUsIHRoZSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gY2FsbGVkIHdoZW4gYSBjb25kaXRpb24gaXMgbWV0LiBcblxuICAvLyB3aGF0IGlzIHRoZSBjb25kaXRpb24/IGNhbm5vdCBwcmVzcyB0aGUgYnRuIHVubGVzcyB0aGUgY3VycmVudCBcblxuICAvLyBpZiAgXG5cblxuXG4vLyBjYW5jZWwgYnRuIGZ1bmN0aW9uYWxpdHkgd29ya3MsIHNhbWUgd2l0aCBhZGQgYnRuLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gZml4IHRoZSB1c2VyIGZyb20gaGl0dGluZyB0aGUgYWRkIHByb2plY3QgYnRuLCBiZWZvcmUgYSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkPyBcblxuLy8gYnRuIGNhbiBvbmx5IGJlIGNsaWNrZWQgb25jZSB0aGUgYWRkIGJ0biBoYXMgYmVlbiBwcmVzc2VkLCBcblxuXG4vLyBuZXh0IHN0ZXAgd291bGQgdG8gdHJ5IHRvIHdvcmsgb24gdGhlIGxvZ2ljIHRoYXQgcHJldmVudHMgYSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCBcblxuLy8gaWYgdGhlIHZhbHVlL25hbWUgaGFzIG5vdCBiZWVuIGFkZGVkLCBcblxuLy8gdW5kZXJzdGFuZCBob3cgdGhlIGVsZW1lbnQgaXMgYmVpbmcgYXBwZW5kZWQsIFxuXG4vLyBcblxuXG5cblxuLy8gYXBwbHkgdGhlIHNhbWUgbG9naWMgd2l0aCB0aGUgY2FuY2VsIGJ0biwgXG5cbi8vIGFjY2VzcyB0aGUgY2FuY2VsIGJ0biBlbGVtZW50LCB1c2UgYSBzZWxlY3RvciwgXG5cbi8vIFxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvLCBpcyBhZnRlciB0aGUgcHJvamVjdCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NIHNlY3Rpb24sIHJlbW92ZSB0aGUgY29udGFpbmVyLCBcblxuLy8gYnV0IGFsbG93IHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgd2l0aCBhbm90aGVyIG5hbWUgYW5kIGVudGVyIGl0LCBcblxuLy8gd2hlbiBJIHByZXNzIHRoZSBhZGQgcHJvamVjdCBidG4gYW5kIGVudGVyIGEgZGlmZmVyZW50IG5hbWUsIGl0IHdpbGwgb25seSBcblxuLy8gb3V0cHV0IHRoZSBmaXJzdCBuYW1lIHRoYXQgd2FzIGVudGVyZWQsIFxuXG4vLyB0aGUgZnVuY3Rpb25hbGl0eSBpcyB0aGF0IHRoZSB1c2VyIGNsaWNrcywgYWRkIHByb2plY3QsIGlucHV0IGZpZWxkIGdlbmVyYXRlZCwgbmFtZSBpcyBhZGRlZCwgXG5cbi8vIHdoZW4gdXNlciBwcmVzc2VzIGFkZCwgaXQgd2lsbCBnZXQgYWRkZWQgdG8gdGhlIGNvbnRhaW5lcnMsIGlucHV0IGZpZWxkIHJlbW92ZWQsIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIHNob3VsZCBzdGlsbCBoYXZlIGZ1bmN0aW9uYWxpdHksIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHRyeSB0byBwdXQgdGhlIGxvZ2ljIG91dHNpZGUgb2YgdGhlIGxvb3AgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGkgY2FuIGFjY2VzcyB0aGUgdmFsdWUsIHRoYXQgdGhlIHVzZXIgZW50ZXJlZCwgbm93IEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuLy8gYXBwZW5kaW5nIHZhbHVlIHdvcmtzLCBncmFiIHRoZSB0YXJnZXQgY29udGFpbmVycyBhbmQgYXBwZW5kIHRoZXJlLiBcblxuXG5cblxuLy8gYWNjZXNzIHRoZSBpbnB1dCBmaWVsZCBlbGVtZW50LCBhcHBlbmQgdG8gRE9NIFxuXG5cblxuXG5cblxuLy8gZ3JhYiBhZGQgYnRuIGVsZW1lbnQsIGFkZCBhIGxpc3RlbmVyIHRvIGl0IFxuXG4vLyBsZXQgYWRkUHJvamVjdFRvRE9NQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1idG5cIilbMF07IFxuXG5cblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0VG9ET01CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIik7XG5cbi8vIGNvbnN0IG5ld0FyciA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gbmV3QXJyLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIik7XG4vLyAgIH0pO1xuLy8gfSlcblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIikuZm9yRWFjaCggYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIilcbi8vICAgfSk7XG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgbmV3QXJyYXkgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcblxuLy8gIG5ld0FycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIjEsIDIsIDEsIDJcIik7IFxuLy8gfSlcblxuLy8gY29uc3QgYXJyID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhcnIpO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG5cblxuXG5cbiIsIi8vIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlXG5cbi8vIGltcG9ydCBcInNyYy9ldmVudExpc3RlbmVyTW9kdWxlLmpzXCI7XG5cbmltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiO1xuXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCAgeyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgfSBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuXG4vLyBsZXQgcHJvamVjdCBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIC8vIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlSW5Qcm9qZWN0KTtcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7IFxuXG4gICAgIFxuXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG5cbi8vIHNvIG5vdyB3ZSBmaWd1cmVkIG91dCBob3cgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBtb3JlIHByb2plY3RzLCBcblxuLy8gYmFzY2ljYWxseSBjbGVhciB0aGUgRE9NLCB0aGVuIGFkZCBwcm9qZWN0cywgXG5cbi8vIG5vdyBhZGQgdGhlIGxvZ2ljLCB0aGF0IHdpbGwgZ2VuZXJhdGUgYSBtb2RhbCwgZm9yIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIHRvZG8sIFxuXG4vLyBmaXJzdCBJIHdvdWxkIGp1c3QgdHJ5IGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gbWF5YmUgc2VlIGlmIHlvdSBjYW4gc3BsaXQgdGhlIGNvZGUgdXAgYSBiaXQsIFxuXG4vLyBwcmludCBhIHNpbXBsZSBtZXNzYWdlIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgZmlyc3QsIFxuXG4vLyBvayB3b3JrcyBnb29kLCBub3cgc3RhcnQgY29uc3RydWN0aW5nIHlvdXIgbW9kYWwsIGZvbGxvdyBhbG9uZyB3aXRoIHRoZSBhcnRpY2xlLCBvciB2aWRlbywgXG5cbi8vIG5lZWRzIHRpdGxlLCBwcmlvcml0eSwgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBcblxuLy8gdGhvc2UgdmFsdWVzIGFyZSB0aGVuIGFkZGVkIHRvIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGF0IHNwZWNpZmljIHByb2plY3QsIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICAvLyBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgIFxufSBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdG9yYWdlKCkgeyBcbi8vICAgbGV0IGdldE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuICBcbi8vICAgY29uc29sZS5sb2coZ2V0TmFtZSk7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iaiA9IHByb2plY3ROYW1lRmFjdG9yeShnZXROYW1lKTsgXG5cbi8vICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmopO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGluZGl2ZHVhbCBwcm9qZWN0IG5hbWUgb2JqZWN0cywgXG5cbi8vIEkgYW0gYWJsZSB0byBjcmVhdGUgcHJvamVjdCBuYW1lcywgYnV0IHdoZW4gSSB1c2Ugb2JqZWN0cyBpdCBvbmx5IGFkZHMgb250bywgYW5kIGRvZXMgbm90IGNyZWF0ZSB1bmlxdWUgcHJvamVjdHMuIFxuXG4vLyBcblxuXG5cblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKHZhbHVlKSB7IFxuXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWUpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkgeyBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdE5hbWUoXCJhbGVjXCIpOyBcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4vLyBsZXQgZ0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gYXJyYXk7XG4vLyAgICAgfVxuLy8gfSgpKTsgXG5cbi8vIGdBcnJheSgxKTsgXG4vLyBnQXJyYXkoMik7IFxuLy8gZ0FycmF5KDMpOyBcbi8vIGdBcnJheSg0KTsgXG5cbi8vICBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyYXkgPSBbXTsgXG4vLyAgICAgY29uc29sZS5sb2coYXJyYXkpXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxUaGlzICh2YWx1ZSkgeyBcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7IFxuLy8gICAgICAgICByZXR1cm4gYXJyYXlcbi8vICAgICB9IFxuLy8gfSBcblxuLy8gc3RvcmVVc2VyVmFsdWUoKTtcblxuXG5cblxuXG5cbi8vIGZpbmQgd2F5IHRvIGFkZCBpdGVtcyBvbnRvIGFuIGFycmF5LCBJIGRvbid0IHRoaW5rIGl0J3Mgc21hcnQgdG8gYWRkIG9uZSBhdCBhIHRpbWUsIGJ1dCBtb3JlIHNvIGxpa2UgYWRkaW5nIHByb2plY3RzIG9udG8gYSBzaW5nbGUgYXJyYXkgXG5cbiAgICAvLyB0aGluayBvZiBhIHdheSB0byBhZGQgaW50byBhbiBhcnJheSwgbG9vayBpbnRvIGNsb3N1cmUgYW5kIGFkZGluZyBvbnRvIGFuIGFycmF5IHVzaW5nIGNsb3N1cmUuIFxuXG4gICAgLy8gY2xvc3VyZSBzZWVtcyBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBob3cgY2FuIEkgbWFrZSB0aGlzIHdvcmsgd2l0aCB0aGUgY3VycmVudCBjb2RlIEkgaGF2ZT8gXG5cbiAgICAvLyB3ZWxsIEkgdGhpbmsgSSBkaWQgZmluZCBhIHdheSB0byBzdG9yZSB0aGUgcHJvamVjdCBuYW1lcywganVzdCBzb21ldGhpbmcgZG9lc24ndCBzZWVtIHJpZ2h0IGFib3V0IHRoZSBzdG9yYWdlXG5cbiAgICAvLyAgXG5cbi8vIHRoYXQgYXJyYXkgY2FuIGJlIHBhcnQgb2YgYW4gb2JqLCBrZXkgaW50byB0aGUgYXJyYXlcblxuLy8gYnRuIHByb2JsZW0sIGFwcGVuZGluZyB0b28gbWFueSBpbnB1dCBmaWVsZHMsIGNvbmRpdGlvbmFsIHRvIHByZXZlbnQgXG5cbi8vIGNvcnJlY3QgYXJyYXkgc3RvcmFnZSBcblxuLy8gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG4gXG4vLyBwcm9wZXJseSBpbnN0YWxsaW5nIGFuZCB1c2luZyBzYXNzIGFmdGVyIHRoZSBhYm92ZSBpcyBhY2NvbXBsaXNlZC4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9