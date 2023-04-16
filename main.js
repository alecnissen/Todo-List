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

let modalForTodoDeleteBtn = document.getElementsByClassName("modal-for-delete-btn-todo")[0];

let overlayForTodoDeleteBtn = document.getElementsByClassName("overlay-for-todo-delete-btn")[0]; 

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

    let projectNameContainer = document.createElement("div"); 

    // console.log(projectNameContainer.id);

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
        // console.log("you clicked the cancel button");

        modalForTodoDeleteBtn.style.display = "flex"; 

        overlayForTodoDeleteBtn.style.display = "flex";

      })



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

      // getValue(projectNameValueClicked);

      // console.log(projectNameValueClicked); 

      projectNameValueContainerForStyles.append(projectNameValueClicked);
      
      mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

      mainContentContainerProjectNames.append(btnContainerAddandDelete); 

      // btnContainerAddandDelete.replaceChildren();

    })
  }
} 

 

formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
})  

let cancelBtnAddTodoModal = document.getElementsByClassName("close-the-todo-modal")[0];

// console.log(cancelBtnAddTodoModal);

cancelBtnAddTodoModal.addEventListener("click", (e) => { 

  modalContainerForTodo.style.display = "none"; 

  overlayForTodoModal.style.display = "none";

}) 


let cancelBtnForDeleteProjectModalX = document.getElementById("close-mark-x"); 

cancelBtnForDeleteProjectModalX.addEventListener("click", (e) => { 

  modalForTodoDeleteBtn.style.display = "none"; 

  overlayForTodoDeleteBtn.style.display = "none";
  
}) 

// for (let i = 0; i < projectArray.length; i++) { 
//   let projectIndex = projectArray[i]; 

//   let projectValue = projectIndex.id; 

//   // console.log(projectValue);
// }

let checkMarkWithinDeleteTodoModal = document.getElementById("check-mark"); 

checkMarkWithinDeleteTodoModal.addEventListener("click", (e) => {  

  let mainContentProjectNamesStyleContainer = document.getElementsByClassName("project-name-click-event-container-for-styles")[0]; 

  let addAndDeleteBtnTodoModal = document.getElementsByClassName("add-delete-btn-for-todo-container-styles")[0]; 
  
  let projectID = currentProject.id; 
  
  let value = currentProject; 
  
  console.log(projectID);
  
  console.log(value); 
  
  projectArray = projectArray.filter(project => project.id !== currentProject.id);
  
  mainContentProjectNamesStyleContainer.replaceChildren(); 

  addAndDeleteBtnTodoModal.replaceChildren();

  printValuesToDOM(projectArray); 

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  modalForTodoDeleteBtn.style.display = "none"; 

  overlayForTodoDeleteBtn.style.display = "none";  

  // able to get the project ID, and the name of the project, 

  // do I need to get the ID and name within the other section too? 

  // noticing with my current code that it will delete the first number 

  // why? well I have to current project selected and able to get it's id, 

  // how can I find the same project name within the your projects section. 
})  




// function getToDoValuesFromInput() { 
// }



let addBtnToDoModal = document.getElementById("add-task-todo-modal"); 

console.log(addBtnToDoModal);

// look back at how you got the values from naming the project, 


addBtnToDoModal.addEventListener("click", (e) => { 

  console.log(currentProject);

  // console.log(currentProject.todoItems);
  
  e.preventDefault(); 

  let titleInputForTodo = document.getElementById("title-of-todo-input-form"); 

  let titleInputValue = titleInputForTodo.value; 

  currentProject.todoItems.push(titleInputValue); 

  console.log(currentProject.todoItems);

  let descriptionForTodo = document.getElementById("description-for-todo"); 

  let descriptionForTodoValue = descriptionForTodo.value; 
  
  currentProject.todoItems.push(descriptionForTodoValue); 

  let dueDateForTodo = document.getElementById("due-date-for-todo-task"); 

  let dueDateForTodoValue = dueDateForTodo.value; 

  currentProject.todoItems.push(dueDateForTodoValue);

  let priorityForTodo = document.getElementById("priority-for-todo-task"); 

  let priorityForTodoValue = priorityForTodo.value;  

  currentProject.todoItems.push(priorityForTodoValue);

  console.log(currentProject.todoItems);

  
}) 

// get all the values, within the modal, 

// first get the values of all the input fields, 

// once user presses the add btn, values are saved, 

// passed to the specific projects todo array, 

// also passed to storage too so the todo array is the same as regular project array 

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





 


function arrayStorageSetItem(name) { 

    
    localStorage.setItem("Project-Names", JSON.stringify(name));  
    
    console.log(localStorage);
   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRW5FOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdNOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7OztBQUlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbUJBQW1CLHlCQUF5QjtBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsSUFBSTs7OztBQUlKOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2Qjs7QUFFaEQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGVBQWUsY0FBYztBQUM3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQSxNQUFNOzs7QUFHTjs7OztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVoQ0EsWUFBWSw4Q0FBOEM7QUFDMUQsWUFBWSxtQkFBbUI7OztBQUcvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7OztBQUdKOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7Ozs7Ozs7Ozs7QUFXSjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7Ozs7QUFJSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOzs7Ozs7OztBQVFOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7Ozs7O0FBS0E7Ozs7Ozs7QUFPQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJOzs7Ozs7Ozs7O0FBVUo7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BTQTs7QUFFQTs7QUFFK0I7O0FBRVg7O0FBRWlEOztBQUVsRDs7QUFFaUY7O0FBRXBHOztBQUVBOztBQUVBOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJEQUFnQixDQUFDLG1EQUFZOzs7Ozs7OztBQVE3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxeEJvQjs7QUFFc0I7O0FBRTFDOzs7QUFHZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7O0FBRUEsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQy9KQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9jb25kaXRpb25hbExvZ2ljLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9kb21Mb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZXZlbnRMaXN0ZW5lck1vZHVsZS5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjsgXG5cbi8vIGZ1bmN0aW9uIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpIHsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhFWVlZXCIpO1xuXG4vLyAgICAgLy8gbGV0IHRoZVByb2plY3RBcnJheSA9IGFycjtcblxuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIC8vICAgICBsZXQgcHJvamVjdEFycmF5SW5kZXggPSB0aGVQcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheUluZGV4KTtcbiAgICBcbi8vICAgICAvLyB9XG4vLyB9IFxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG4vLyBJIGFtIGdldHRpbmcgYSBsaXR0bGUgY29uZnVzZWQgb24gaG93IHRvIGFkZCBjb25kaXRpb25hbCBsb2dpYywgdGhhdCB3aWxsIHByZXZlbnQgYSB1c2VyIGZyb20gYWRkaW5nIG11dGxpcGxlIHByb2plY3RzIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gT25jZSBwcm9qZWN0IGlzIGNsaWNrZWQsIGRpc3BsYXkgdGhhdCBwcm9qZWN0LCBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcsIFxuXG4vLyBJJ3ZlIGJlZW4gdHJ5aW5nIHRvIGNhbGwgdGhlIGZ1bmN0aW9uIGJlZm9yZSB0aGUgdmFsdWVzIGFyZSBhcHBlbmRlZCwgdG8gY2hlY2sgaWYgSXQncyBzYWZlIHRvIGFwcGVuZCB0aGUgdmFsdWUgb3IgY2xlYXIgYW5kIG1ha2Ugd2F5IGZvciBhIG5ldyBvbmUsIFxuXG4vLyBob3cgY2FuIEkgcHJldmVudCB1c2VyIGZyb20gY2xpY2tpbmcgbXVsdGlwbGUgcHJvamVjdHMsIGFuZCBhZGRpbmcgdGhlbSBhbGwsIFxuXG4vLyB5b3UgY2FudCBkaXNhYmxlIHRoZSBidG4sIFxuXG4vLyB5b3UgY2Fubm90IG1peCB0aGUgRE9NIGxvZ2ljIGFuZCBjb25kaXRpb25hbCBsb2dpYywgXG5cbi8vIHRoaW5raW5nIGNvbmNlcHR1YWxseSwgcmlnaHQgbm93IHRoZSB1c2VyIGNhbiBwcmVzcyB0aGUgcHJvamVjdCBuYW1lIGFuZCBhcHBlbmQgbXVsdGlwbGUgcHJvamVjdHMsIFxuXG4vLyBob3cgY2FuIEkganVzdCBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBjbGVhciB0aGUgY29udGVudHMgb2Ygb25lIGFuZCBtYWtlIG5ldy4gIiwiXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjtcblxuaW1wb3J0IGFycmF5U3RvcmFnZVNldEl0ZW0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiIFxuXG5pbXBvcnQgZ2V0SXRlbVN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZS5qc1wiOyBcblxuaW1wb3J0ICBwcm9qZWN0TmFtZUxvb3AgZnJvbSBcIi4vaW5kZXguanNcIjtcblxuaW1wb3J0IHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljLmpzXCI7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbmxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG5sZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbmxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG5sZXQgY3VycmVudFByb2plY3QgXG5cbmZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cbnByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSlcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgXG5cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4gIHJldHVybiB7IFxuICAgIHByb2plY3Q6IG5hbWUsXG4gICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgdG9kb0l0ZW1zOiBbXSxcbiAgfVxufSBcblxuYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4gIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG59KSBcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4gIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4gICAgbGV0IHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUgPSBwcm9qZWN0SW5kZXgucHJvamVjdDsgXG5cbiAgICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lQ29udGFpbmVyLmlkKTtcblxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlKTtcblxuICAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7IFxuXG4gICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgICBcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIik7IFxuXG4gICAgICBsZXQgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbGV0IGFkZEJ0blRvQ3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KVxuXG4gICAgICBsZXQgZGVsZXRlQnRuVG9EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgdGhlIGNhbmNlbCBidXR0b25cIik7XG5cbiAgICAgICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICB9KVxuXG5cblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIC8vIGZ1bmN0aW9uIGNhbGwvY29uZGl0aW9uYWwgbG9naWMgY2FsbCBoZXJlIGJlZm9yZSB0aGUgdmFsdWVzIGFyZSBhcHBlbmRlZD8gXG5cbiAgICAgIC8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYyhwcm9qZWN0QXJyYXkpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChhZGRCdG5Ub0NyZWF0ZU1vZGFsKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoZGVsZXRlQnRuVG9EZWxldGVUb2RvKTsgXG5cbiAgICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcblxuICAgICAgLy8gZ2V0VmFsdWUocHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuXG4gICAgICAvLyBidG5Db250YWluZXJBZGRhbmREZWxldGUucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICB9KVxuICB9XG59IFxuXG4gXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuLy8gY29uc29sZS5sb2coY2FuY2VsQnRuQWRkVG9kb01vZGFsKTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSkgXG5cblxubGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbmNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG59KSBcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSk7XG4vLyB9XG5cbmxldCBjaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLW1hcmtcIik7IFxuXG5jaGVja01hcmtXaXRoaW5EZWxldGVUb2RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7ICBcblxuICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIilbMF07IFxuXG4gIGxldCBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKVswXTsgXG4gIFxuICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbiAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbiAgY29uc29sZS5sb2cocHJvamVjdElEKTtcbiAgXG4gIGNvbnNvbGUubG9nKHZhbHVlKTsgXG4gIFxuICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBcbiAgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbiAgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcblxuICAvLyBhYmxlIHRvIGdldCB0aGUgcHJvamVjdCBJRCwgYW5kIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LCBcblxuICAvLyBkbyBJIG5lZWQgdG8gZ2V0IHRoZSBJRCBhbmQgbmFtZSB3aXRoaW4gdGhlIG90aGVyIHNlY3Rpb24gdG9vPyBcblxuICAvLyBub3RpY2luZyB3aXRoIG15IGN1cnJlbnQgY29kZSB0aGF0IGl0IHdpbGwgZGVsZXRlIHRoZSBmaXJzdCBudW1iZXIgXG5cbiAgLy8gd2h5PyB3ZWxsIEkgaGF2ZSB0byBjdXJyZW50IHByb2plY3Qgc2VsZWN0ZWQgYW5kIGFibGUgdG8gZ2V0IGl0J3MgaWQsIFxuXG4gIC8vIGhvdyBjYW4gSSBmaW5kIHRoZSBzYW1lIHByb2plY3QgbmFtZSB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbi4gXG59KSAgXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGdldFRvRG9WYWx1ZXNGcm9tSW5wdXQoKSB7IFxuLy8gfVxuXG5cblxubGV0IGFkZEJ0blRvRG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stdG9kby1tb2RhbFwiKTsgXG5cbmNvbnNvbGUubG9nKGFkZEJ0blRvRG9Nb2RhbCk7XG5cbi8vIGxvb2sgYmFjayBhdCBob3cgeW91IGdvdCB0aGUgdmFsdWVzIGZyb20gbmFtaW5nIHRoZSBwcm9qZWN0LCBcblxuXG5hZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuICBsZXQgdGl0bGVJbnB1dEZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLW9mLXRvZG8taW5wdXQtZm9ybVwiKTsgXG5cbiAgbGV0IHRpdGxlSW5wdXRWYWx1ZSA9IHRpdGxlSW5wdXRGb3JUb2RvLnZhbHVlOyBcblxuICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMucHVzaCh0aXRsZUlucHV0VmFsdWUpOyBcblxuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG4gIFxufSkgXG5cbi8vIGdldCBhbGwgdGhlIHZhbHVlcywgd2l0aGluIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGdldCB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgaW5wdXQgZmllbGRzLCBcblxuLy8gb25jZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIHZhbHVlcyBhcmUgc2F2ZWQsIFxuXG4vLyBwYXNzZWQgdG8gdGhlIHNwZWNpZmljIHByb2plY3RzIHRvZG8gYXJyYXksIFxuXG4vLyBhbHNvIHBhc3NlZCB0byBzdG9yYWdlIHRvbyBzbyB0aGUgdG9kbyBhcnJheSBpcyB0aGUgc2FtZSBhcyByZWd1bGFyIHByb2plY3QgYXJyYXkgXG5cbi8vIFxuXG5cblxuXG4vLyBjb25zdCBBcHAgPSAgKCgpID0+IHtcbi8vICAgLy8gbGV0IHByb2plY3RBcnJheSA9IFtdXG4vLyAgIGxldCBjdXJyZW50UHJvamVjdFxuXG4vLyAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbi8vICAgICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QgPSBjdXJyZW50UHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdC5maWx0ZXIocCA9PiBwLmlkICE9PSBwcm9qZWN0LmlkKVxuLy8gICAgICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpXG4vLyAgIH1cblxuLy8gICByZXR1cm4ge3NldEN1cnJlbnRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCwgYWRkUHJvamVjdCwgZGVsZXRlUHJvamVjdH1cbi8vIH0pKClcblxuXG5cbi8vIEhlbGxvLCBJIGFtIHJ1bm5pbmcgaW50byBhIHNtYWxsIHByb2JsZW0gd2l0aCB0b2RvLCBJJ20gdHJ5aW5nIHRvIGltcGxlbWVudCBzb21lIGxvZ2ljIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBwcm9qZWN0IGJ0biwgaXQgd2lsbCBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgYW5kIGluIHRoZSBcInlvdXIgcHJvamVjdHNcIiBzZWN0aW9uLiBCYXNpY2FsbHkganVzdCB1c2luZyBhIGxpc3RlbmVyLCB0aGF0IHdoZW4gdGhlIHVzZXIgY29uZmlybXMgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgZGlzcGxheSwgdGhlbiByZW1vdmUgdGhlIHZhbHVlLiBUaGUgcHJvYmxlbSBpcyBJIGdldCB1bmRlZmluZWQgd2hlbiBJIHRyeSB0aGlzIGFwcHJvYWNoLCB3aGljaCBpcyBzdHJhbmdlIGJlY2F1c2UgSSdtIGdldHRpbmcgdGhlIGVsZW1lbnQsIHRoZXJlIGlzIGEgdmFsdWUgaW5zaWRlIHRoZXJlLCB0aGVuIGp1c3QgdXNpbmdyIC52YWx1ZS4gXG5cblxuXG4vLyBydW5uaW5nIGludG8gYSBwcm9ibGVtIHdpdGggdG9kbywgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSB0cmFzaCBpY29uL2RlbGV0ZSBidG4gYW5kIHRoZXkgY29uZmlybSBcblxuLy8gdGhleSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSB3YW50IHRvIGRlbGV0ZSBpdCBmcm9tIG1haW4gY29udGFpbmVyIGFzIHdlbGwgYXMgdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIE5vdCBzdXJlIElmIEknbSBkb2luZyB0aGlzIHJpZ2h0IGJ1dCBJIGNhbiBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYW5kIHRoZW4gdXNlIHJlcGxhY2VDaGlsZHJlbiB0byBjbGVhciB0aGUgRE9NIF1cblxuLy8gYnV0IEkgYW0gZ2V0dGluZyBwcmV0dHkgc3R1Y2sgb24gaG93IHRvIGRlbGV0ZSBpdCBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24/IFxuXG4vLyBCYXNpY2FsbHkgSSB0aGluayBvZiBzb21laG93IGdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIG1haW4gY29udGFpbmVyLCBhcyB3ZWxsIGFzIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gdGhlbiB1c2luZyByZW1vdmVDaGlsZCB0byBkZWxldGUgdGhlIHByb2plY3QgbmFtZSBpbiBib3RoIHBsYWNlcywgXG5cblxuXG4gIFxuLy8gT0sgd2VsbCB0aGlzIGlzIG9uZSB3YXkgdG8gY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIFxuXG4vLyBidXQgaG93IGNhbiBJIGFjY2VzcyB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiBhbmQgZGVsZXRlIHRoYXQ/IFxuXG4vLyBJIG5lZWQgdG8gYWxzbyBkZWxldGUgdGhhdCBzYW1lIHByb2plY3QgbmFtZSB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbi4gbG9vayB1cCByZXBsYWNlQ2hpbGRyZW5cblxuLy8gbm90IGdvaW5nIHRvIHdvcmsgYmVjYXVzZSB3aGF0IGFyZSB5b3UgcmVwbGFjaW5nIHdpdGg/IEhvdyBkbyB5b3Uga25vdyB3aGljaCBlbGVtZW50IHRvIHJlcGxhY2UgaXQgd2l0aD8gXG5cblxuXG4vLyBsZXQgY2FuY2VsQnRuQXJyYXkgPSBBcnJheS5mcm9tKGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCk7XG5cblxuXG4vLyBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGxldCBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyBjb25zb2xlLmxvZyhtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcyk7XG5cbi8vIGZ1bmN0aW9uIHByb2plY3ROYW1lc0NsaWNrRXZlbnQoYXJyYXkpIHsgXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcbiAgICBcbi8vICAgfVxuLy8gfVxuXG4vLyBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KHByb2plY3RBcnJheSk7XG5cblxuXG4vLyBJIHRoaW5rIEkgTmVlZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGRvbid0IHdhbnQgdG8gaGF2ZSB0b28gbXVjaCBnb2luZyBvbiBpbiBvbmUgZnVuY3Rpb24sIFxuXG4vLyB1c2UgdGhlIHNhbWUgbG9naWMsIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5LCBcbiBcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleC5wcm9qZWN0KTtcblxuLy8gICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gb2sgbmV4dCwgcHJvamVjdCBuYW1lcyBhcmUgYmVpbmcgYWRkZWQgZHluYW1pY2FsbHksIHRoZXkgYXJlIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIHRoZSBhcnJheSBhbmQgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG5leHQgd2hlbiBJIGNsaWNrIG9uIHRoZSBwcm9qZWN0LCB0aGF0IHByb2plY3QncyBuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgY2xlYXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBkaXNwbGF5IHRoZSBuZXcgcHJvamVjdCwgXG5cbi8vIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgaXMgYWRkZWQgYXQgYSB0aW1lLCBzaG91bGQgbm90IGFkZCBvbnRvLiBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIGFsb25nIHdpdGggdGhlIHR3byBidG5zLCBhZGQgYW5kIGRlbGV0ZSBmb3IgdGhlIHRvZG8ncyBcblxuLy8gcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIHNob3cgdGhhdCBwcm9qZWN0LCB1c2VyIGNhbm5vdCBhcHBlbmQgdGhhdCBwcm9qZWN0IG11bHRpcGxlIHRpbWVzIGJ5IGNsaWNraW5nLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgdGhlIG9sZCBhbmQgbWFrZSB3YXkgZm9yIHRoZSBuZXcgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gdGhpcyB3aWxsIGJlIGEgc2VwZXJhdGUgZnVuY3Rpb24sIGZpcnN0IEkgZmVlbCBsaWtlIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCB0aHJvdWdoIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QgZnJvbSB0aGUgYXJyYXksIGluc2lkZSB0aGUgbGlzdGVuZXIsIGxvZ2ljIHdpbGwgZ3JhYiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBhbmQgYXBwZW5kIHZhbHVlcyB0byBpdCwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIHRvIGRldGVybWluZSBpZiB0aGUgcHJvamVjdCBpcyBhbHJlYWR5IGFkZGVkIHN1Y2ggYXMgSUQncyBtYXRjaGluZywgXG5cbi8vIGlmIElEIG1hdGNoZXMgd2hhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCBmcm9tIGFkZGluZyBhZ2FpbiwgZWxzZSBpZiBhZGQgdGhlIHByb2plY3QgdG8gdGhlIGNvbnRhaW5lciwgXG5cbi8vIGJlZm9yZSB0aGUgcHJvamVjdCBuYW1lIGlzIGFwcGVuZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGlmIHRoYXQgbmFtZXMgaWQgbWF0Y2hlcyB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIEkgd291bGQgc2F5IGZpcnN0IGxldCdzIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGNhbiBncmFiIGFsbCB0aGUgcHJvamVjdCBuYW1lcyBhbmQgSUQ/IFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0LCBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgXG5cbi8vIEknbSBub3Qgc3VyZSB5b3UgbmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHRoZSBwcm9qZWN0cywgc2VlbXMgbGlrZSB5b3VyIGdldHRpbmcgcHJvamVjdCB0YXJnZXQgdmFsdWUsIHdpdGggZS50YXJnZXQudGV4dENvbnRlbnQgXG5cbi8vIG5vdyBJIGJlbGlldmUgd2hhdCB5b3UgbmVlZCB0byBmaWd1cmUgb3V0IGlzIGhvdyB0byBkaXNwbGF5IHRoZSBjZXJ0YWluIHByb2plY3QsIGJhc2VkIG9uIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyByZW1lbWJlciByZXBsYWNlIHRoZSBjb250ZW50IHdpdGhpbiBtYWluIGNvbnRhaW5lciwgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSBhbGwgYmFzZWQgb24gYnRuIGNsaWNrIFxuXG4vLyB0aGluayBiYWNrIHRvIHJlc3RhdXJhbnQgcGFnZSwgXG5cbi8vIEkgc29tZWhvdyBuZWVkIHRvIHRoaW5rIHRoaXMgb3V0LCBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgY2xlYXIgY29udGVudHMgb2YgcHJldmlvdXMgcHJvamVjdCBhbmQgbWFrZSB3YXkgZm9yIG5ldywgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHNvbWUgc29ydCBvZiBjb25kaXRpb25hbCwgaWYgdGhpcyBwcm9qZWN0IGlzIGNsaWNrZWQsIGNoYW5nZSB0byBhIHZhcmlhYmxlIHRoZW4gdXNlIHJlcGxhY2UgY2hpbGQuIFxuXG4vLyBpZiB0aGUgdmFyaWFibGUgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgb3IgdGhlIGRpdiwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCAgXG5cbi8vIFxuXG4vLyAtLSBob3cgdG8gbWFrZSBzdXJlIG9ubHkgdGhhdCB3aGVuIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaXQgd2lsbCBwb3B1bGF0ZSwgd2l0aCB0aGF0IHByb2plY3QgbmFtZSwgd2lwZSB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgXG5cbi8vIC0tIHdoeSBpcyB0aGUgcHJvamVjdCdzIHNlY3Rpb24gbm90IGR5bmFtaWNhbGx5IGFkZGluZyBwcm9qZWN0cz8gSSBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgZm9yIGl0IHRvIHNob3cgdXA/IFxuXG4vLyBoYW5kbGUgdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGZpcnN0LCBhbmQgY29ycmVjdGx5IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG1haW4gY29udGFpbmVyIGZpcnN0LCBcblxuLy8gc29tZSB0eXBlIG9mIGNvbmRpdGlvbmFsIGlzIG5lZWRlZCB0byBjb21wbGV0ZSB0aGlzLCByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGNhbiBiZSBkaXNwbGF5ZWQgYXQgYSB0aW1lLCBcblxuLy8gaWYgcHJvamVjdCBjb250YWluZXIgaW5jbHVkZXMgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsIFxuXG4vLyBzaG91bGQgaXQgYmUgc2ltaWxhciB0byByZXN0YXVyYW50IHBhZ2UsIGVhY2ggcHJvamVjdCBpcyBnaXZlbiBhIHZhcmlhYmxlLCB0aGVuIGlmIHRoYXQgcHJvamVjdCBpcyBjbGlja2VkIG9uIGl0J3MgZ2l2ZW4gYSB2YXJpYWJsZSBvciBpbmRleCwgXG5cbi8vIHRoZW4gY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QncyBJRCwgbWF0Y2hlcyB3aGF0IGlzIGluc2lkZSB0aGUgbWFpbiBjb250YWluZXIsIGlmIG5vdCBjbGlja2VkLCByZXBsYWNlIHdpdGggbmV3IGNsaWNrLCBcblxuLy8gaWYgaXQgaXMgY2xpY2tlZCBhZ2FpbiwgcHJldmVudCB0aGUgdXNlciBmcm9tIHJlcGxhY2luZyB0aGUgY29udGVudCwgXG5cbi8vIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aCB0aGUgcHJvamVjdHMgdW5xaXVlIElELCBpZiBwcm9qZWN0LmlkID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIHRoYXQgYnRuIGFnYWluLCBqdXN0IHJldHVybiwgXG5cbi8vIGNhbiB3ZSBnbyBiYWNrIGFuZCBsb29rIGF0IHdoYXQgeW91IGRpZCBwcmV2aW91c2x5IHdpdGggeW91ciBjb2RlP1xuXG4vLyBJIGRvbid0IHRoaW5rIGl0J3MgdGhlIHNhbWUgcHJldmlvdXNseSwgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgYSBkaXYgaGVyZSBpbnN0ZWFkIG9mIGEgYnV0dG9uLCBcblxuLy8gSSB3YW50IHRvIGZpbmQgYSB3YXkgdGhhdCBJIGNhbiBvbmx5IGRpc3BsYXkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiwgc2hvdWxkIGFkZCBkdXBsaWNhdGVzLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIHJlcGxhY2UgY29udGVudHMgb2Ygb2xkIGFuZCB3aXBlIHRoZSBuZXcsIFxuXG4vLyBJIHRoaW5rIHRoZSBET00gRGlzcGxheSBpcyBmaW5lLCBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIGEgZnVuY3Rpb24sIGNyZWF0aW5nIGEgZGl2IHRoYXQgc3RvcmVzIHRoZSBwcm9qZWN0cyBuYW1lLCBcblxuLy8gbm93IG9uY2UgdGhlIHByb2plY3QgaXMgY2xpY2tlZCBvbiwgbG9vcCB0aHJvdWdoIHN0b3JhZ2UsIGZpbmQgb3V0IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24gYW5kIGRpc3BsYXkncyBpdCdzIGNvbnRlbnRzLCBcblxuLy8gc3RpY2sgd2l0aCBob3cgeW91IGFyZSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgRE9NLCBcblxuLy8gaG93IHdpbGwgeW91IGFkZCB0aGluZ3MgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGRpc3BsYXkgb25seSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gbWFrZSBhIGxvb3AgZ2V0IHRoZSBwcm9qZWN0J3MgSUQsIGNvbXBhcmUgdGhlIElEIHRvIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkIG9uLCBcblxuXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbih2YWx1ZSkgeyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlID0gdmFsdWU7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWVJRCA9IHByb2plY3RWYWx1ZS5pZDsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gcHJvamVjdFZhbHVlW1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcblxuLy8gaGVyZSB0byB0b3Agb2YgZnVuY3Rpb24sIFxuXG5cblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICBsZXQgeCA9IHByb2plY3Q7IFxuICAvLyAgICAgbGV0IG5hbWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWVzKTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7IFxuICAvLyAgICAgbGV0IHkgPSBsb2NhbFN0b3JhZ2Uua2V5KFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAvLyAgIH1cbiAgLy8gfSBcbiAgLy8gICBmb3IobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgLy8gbGV0IHggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBsZXQgeCA9IHByb2plY3RbXCJrZXlcIl07IFxuXG4gIC8vICAgICAvLyBsZXQgeGlkID0gcHJvamVjdFtcImlkXCJdOyBcblxuICAvLyAgICAgLy8gY29uc29sZS5sb2coeGlkKTtcbiAgLy8gICAgIGNvbnNvbGUubG9nKHgpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuXG4gIC8vIG9sZCBsb2dpYyBiZWxvdyBcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgbGV0IHRhcmdldFZhbHVlUHJvamVjdE5hbWUgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG4gICAgXG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlSUQpO1xuXG4gIC8vICAgLy8gaWYgKHByb2plY3RWYWx1ZUlEID09PSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lKSB7IFxuICAvLyAgIC8vICAgICAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiKTtcbiAgXG4gIC8vICAgLy8gICAgfVxuXG5cblxuICAvLyAgIGxldCBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdi1zdHlsZXMtbWFpblwiKTtcbiAgICBcbiAgLy8gICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07XG5cbiAgLy8gICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIC8vICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdik7XG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuYXBwZW5kKHRhcmdldFZhbHVlUHJvamVjdE5hbWUpO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKTsgXG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChkZWxldGVCdXR0b24pO1xuXG4gIC8vIH0pXG5cbiAgLy8gaGVyZSB0byBib3R0b20gYnJhY2tldCBcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lcy1zdHlsZXMtbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhcik7XG5cbi8vIH1cblxuXG4vLyBmb3IgKGxldCB2YXJpYWJsZSBpbiBwYXJzZURhdGEpIHsgXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG4vLyAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSB2YWx1ZUluUHJvamVjdFtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3REaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmZvbnRTaXplID0gXCIycmVtXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuLy8gICBwcm9qZWN0RGl2LmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cblxuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdWYWx1ZSk7XG5cblxuXG5cbi8vICAgLy8gY29uc29sZS5sb2coeCk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBsZXQgcHJvamVjdFZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VEYXRhKTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVzKTtcbi8vICAgLy8gY29uc29sZS5sb2cocGFyc2VEYXRhKTtcbi8vICAgLy8gbGV0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0KTtcbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbi8vIH0gIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBcblxuXG5cblxuXG5cblxuXG5cbi8vIG1ha2UgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgY29udGVudHMgb2YgbG9jYWwgc3RvcmFnZSwgXG4vLyBhcHBlbmRzIHRoZSByZXN1bHQgdG8gdGhlIERPTS4gXG5cbi8vIGZ1bmN0aW9uIHByaW50U3RvcmFnZVRvRG9tKCkgeyBcbi8vICAgLy8gbGV0IGdldFN0b3JhZ2VJdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG4vLyAgIC8vIGxldCBwYXJzZWRJdGVtcyA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZUl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuXG4gXG5cbi8vICAgbGV0IG5hdlByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuLy8gICBuYXZQcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoc3R1cGlkVmFsdWUpO1xuLy8gfSBcblxuXG4vLyBwcmludFN0b3JhZ2VUb0RvbSgpO1xuXG5cblxuXG5cbiAgLy8gbGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG4gIC8vIGxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuICAvLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpOyBcblxuLy8gY29uc29sZS5sb2coZm9ybUVsZW1lbnQpO1xuXG4vLyBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuLy8gWWVhaCwgSSB0aGluayBmb2N1c2luZyBvbiB0aGUgYmFzaWMgaWRlYSBvZiBob3cgdG8gY3JlYXRlIGEgcHJvamVjdCBhbmQgXG4vLyB0byBkaXNwbGF5IHRoZSBjb3JyZWN0IHByb2plY3Qgd2hlbiBpdHMgc2lkZWJhciBidXR0b24gaXMgY2xpY2tlZCB3b3VsZCBiZSBteSBmaXJzdCBzdGVwLiBcbi8vIFRoZW4geW91IGNhbiB0aGluayBhYm91dCB3aGF0IHNob3VsZCBiZSBvbiB0aGUgcHJvamVjdCdzIHBhZ2U6IHRoZXkgd2lsbCBuZWVkIGJ1dHRvbnMgdG8gYWRkIGEgdGFzayBhbmQgd2hhdCBub3RcblxuLy8gaGF2ZSB0aGUgdXNlciBlbnRlciBhIHByb2plY3QgbmFtZSwgYW5kIHNhdmUgdGhlIHZhbHVlLCBwYXNzIHRoYXQgdmFsdWUgdG8gc3RvcmFnZS4gXG5cbi8vIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBzYXZlZCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBhZGQgYnRuLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBhZGQgYnRuLCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBnZXQgdGhlIGlucHV0IGZpZWxkLCBjYXB0dXJlIGl0J3MgdmFsdWUgdGhlbiBjb25zb2xlIGxvZyBpdCBcblxuLy8gdGhlIGlzc3VlIG9mIHRoZSB0ZXh0IGluIHRoZSBpbnB1dCBmaWVsZCBiZWluZyBjbGVhcmVkLCBcblxuLy8gd2VsbCBJIHdyYXBwZWQgaXQgaW5zaWRlIGEgZm9ybSB0YWcsIGl0IHdvcmtzIGJ1dCBpdCByZWZyZXNoZXMgdGhlIHBhZ2UsIEkgbWVhbiBpcyB0aGF0IGEgcHJvYmxlbSwgXG5cbi8vIEkgZ3Vlc3Mgbm93IEknbGwgd29yayBvbiBzdG9yaW5nIHRoZSBkYXRhLCBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgRE9NIGxvZ2ljXG4vLyBleHBvcnQgdGhlbiBpbXBvcnQgd2l0aGluIGFub3RoZXIgZmlsZSBcblxuLy8gaW1wb3J0IHsgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbi8vIC8vIGltcG9ydCB7IGNvbnRlbnRUeXBlIH0gZnJvbSBcIm1pbWUtdHlwZXNcIjtcbi8vIGltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiOyBcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RGb3JtSW5wdXQoKSB7IFxuXG4vLyAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGQtdGV4dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gXCJOYW1lIHlvdXIgcHJvamVjdFwiO1xuXG4vLyAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xuXG4vLyAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuLy8gICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbi8vICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuXCIpO1xuXG4vLyAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuLy8gICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuLy8gICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHZhbHVlKSB7IFxuXG4vLyAgIGxldCB1c2VySW5wdXRWYWx1ZSA9IHZhbHVlOyAgXG5cbi8vICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpOyBcblxuLy8gICBjb25zb2xlLmxvZyhtYWluQ29udGVudFByb2plY3RDb250YWluZXIuY2hpbGRyZW4pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuLy8gICAvLyBnZXQgdGhlIGVsZW1lbnQgYW5kIHRyeSB0byB1c2UgaXQgaW5zaWRlIGV2ZW50IGxpc3RlbmVyIG1vZHVsZSwgXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNlY3Rpb24tbmFtZS1idG4tZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7IFxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1zZWN0aW9uLXByb2plY3QtbmFtZS1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyBcblxuLy8gLy8gaWYgKHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5jbHVkZXMocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pKSB7IFxuLy8gLy8gICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4vLyAvLyB9XG5cbi8vICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXkgeW91IGNsaWNrZWQgdGhlIHByb2plY3QgbmFtZVwiKTtcblxuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAgIFxuLy8gICAgIC8vIHdoZW4gYnRuIGlzIGNsaWNrZWQgaXQgd2lsbCBnZW5lcmF0ZSBhIHBvcC11cCBmb3JtIFxuLy8gICAgIC8vIEkgdGhpbmsgeW91IG5lZWQgYSBjb250YWluZXIsIGEgZGl2IHRoYXQgaG9sZHMgdGhlIGNvbnRlbnQsIGFwcGVuZCB0aGUgZGl2IHRvIHRoZSBjb250YWluZXIsIFxuICAgIFxuLy8gICAgIGFkZFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7ICBcbiAgICAgIFxuLy8gICAgICAgLy8gaWYgKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5pbmNsdWRlcyhzb21lQnRuKSkge1xuLy8gICAgICAgLy8gICBzb21lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbi8vICAgICAgIC8vIH1cblxuICAgIFxuXG4vLyAgICAgICAvLyBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5kaXNhYmxlZCA9IHRydWU7IFxuXG4vLyAgICAgICAvLyBzb21lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gICAgICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1wb3AtdXAtY29udGFpbmVyXCIpOyBcblxuLy8gICAgICAgbGV0IHRpdGxlT2ZUb0RvSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIiBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIiB1bmRlcmxpbmVcIjtcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgICAgLy8gaW4gb3JkZXIgdG8gY2VudGVyIGl0IHlvdSBuZWVkIHRvIGFwcGVuZCB0aGlzIGVsZW1lbnQgXG5cbi8vICAgICAgIC8vIHRvIGFub3RoZXIgY29udGFpbmVyIFxuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tY29udGFpbmVyLXN0eWxlc1wiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLXBvcC11cC1maWVsZFwiKTtcblxuLy8gICAgICAgc3VibWl0VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvLURvXCI7IFxuXG4vLyAgICAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGxldCBwb3BVcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgICBwb3BVcENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInBvcC11cC1jb250ZW50XCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dC1maWVsZC1zdHlsZXNcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTsgXG5cbi8vICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudExhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4vLyAgICAgICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuLy8gICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0bi10by1kby1pbnB1dFwiKVxuXG4vLyAgICAgICBjbG9zZUJ0bi5zcmMgPSBcIi4uL2Nsb3NlLWNpcmNsZS5wbmdcIjsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIHVyZ2VuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICBsZXQgdXJnZW5jeURyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi50ZXh0Q29udGVudCA9IFwiVXJnZW5jeVwiO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uY2xhc3NMaXN0LmFkZChcInVyZ2VuY3ktZHJvcGRvd24tc3R5bGVzXCIpO1xuXG5cblxuLy8gICAgICAgbGV0IHVyZ2VuY3lIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCIgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiOyBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7IFxuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICBkYXRlUGlja2VyTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCI7XG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOyBcblxuLy8gICAgICAgZGF0ZVBpY2tlci50eXBlID0gXCJkYXRlXCI7XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUhpZ2gpO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeU1lZGl1bSk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TG93KTsgXG5cblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVPZlRvRG9JbnB1dEZvcm0pOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudExhYmVsKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lEcm9wRG93bik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXJMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bkNvbnRhaW5lcik7IFxuXG4gICAgXG5cbi8vICAgICAgIC8vIHNob3VsZCBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRlbnQgZGl2LCB0aGVuIGFwcGVuZCB0byBjb250YWluZXI/IFxuXG4vLyAgICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4vLyAgICAgfSkgXG5cbi8vICAgICBhZGRUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvRG9CdG4pOyBcblxuLy8gICB9KSBcblxuXG4vLyBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKTtcblxuXG5cbi8vIH0gXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUb01haW4oKSB7IFxuLy8gICBjb25zb2xlLmxvZyhcIkhleSBJJ20gaW4gaGVyZVwiKTtcbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgc29tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgc29tZUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lQnRuKTsgXG5cbi8vIH1cblxuXG5cbi8vIEknbSBhYmxlIHRvIGdldCB0aGUgdXNlciB2YWx1ZSwgSSBhbSBhYmxlIHRvIGxvZyBvdXQgaXQncyB2YWx1ZSwgSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBzZWN0aW9uLFxuXG4vLyBpdCBzdGlsbCByZXR1cm5zIGFuZCBIVE1MIGVsZW1lbnQsIEkgY2FuIHR1cm4gaXQgaW50byBhbiBhcnJheSwgYnV0IEkgYW0gdW5zdXJlIG9mIGhvdyB0byBhcHBlbmQgdG8gdGhlIERPTS4gXG5cblxuLy8gd2hhdCBJIHdhbnQsIHRoZSB1c2VyIHdpbGwgZW50ZXIgcHJvamVjdCBuYW1lLCBJIHdhbnQgdGhhdCBuYW1lIHRvIGFwcGVhciBpbiB0aGUgcHJvamVjdCdzIHNlY3Rpb24gYW5kIG1haW4gY29udGVudCBzZWN0aW9uKGJsdWUgcGFydCk7IFxuXG4vLyBQcm9ibGVtOiBJIGFtIGNvbmZ1c2VkIG9uIGhvdyB0byBhcHBlbmQgdGhpcyBwcm9qZWN0IG5hbWUgdG8gdGhlIERPTS4gXG5cbi8vIFdoYXQgSSd2ZSB0cmllZDogT25jZSB0aGUgYWRkIGJ0biBpcyBwcmVzc2VkLCB0aGUgdmFsdWUvbmFtZSBvZiBwcm9qZWN0IHdpbGwgYmUgc2F2ZWQsIGFuZCBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGF0IFxuXG4vLyB2YWx1ZSBhbmQgcHJpbnRzIHRvIHRoZSBET00uIFxuXG4vLyBJIGFtIGFibGUgdG8gYWNjZXNzIHRoZSBwcm9qZWN0IGNvbnRhaW5lciwgYW5kIHRoZSBtYWluIHNlY3Rpb24gYnV0IGl0J3MgYW4gSFRNTCBjb2xsZWN0aW9uLCBJIGNhbiBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXksIFxuXG4vLyBidXQgaG93IGNhbiBJIGFwcGVuZCBhbiBhcnJheSB0byB0aGUgRE9NPyAiLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCB7IGFkZFByb2plY3RGb3JtSW5wdXQsIGFwcGVuZFByb2plY3ROYW1lVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuLy8gaW1wb3J0IHsgc3RvcmVQcm9qZWN0TmFtZSB9IGZyb20gXCIuL2FycmF5U3RvcmFnZVwiOyBcblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7IFxuXG4vLyAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBcbi8vICAgYWRkUHJvamVjdEJ1dHRvbi5kaXNhYmxlZCA9IFwidHJ1ZVwiO1xuICBcbi8vICAgYWRkUHJvamVjdEZvcm1JbnB1dCgpOyBcbiAgXG4vLyAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIildIC5hdCgtMSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgXG4vLyAgICAgbGV0IHVzZXJWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnB1dC1maWVsZC10ZXh0XCIpWzBdLnZhbHVlOyBcblxuLy8gICAgIGlmICh1c2VyVmFsdWUgIT09IFwiXCIpIHsgXG4vLyAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4vLyAgICAgIH0gZWxzZSB7IFxuLy8gICAgICAgcmV0dXJuOyBcbi8vICAgICB9IFxuICAgICBcbi8vICAgICBzdG9yZVByb2plY3ROYW1lKHVzZXJWYWx1ZSk7XG5cbi8vICAgICBhcHBlbmRQcm9qZWN0TmFtZVRvRE9NKHVzZXJWYWx1ZSk7IFxuXG4vLyAgICAgbGV0IHByb2plY3RET01Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICAgIGxldCBpbnB1dEZpZWxkVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgICBsZXQgaW5wdXRGaWVsZFRleHRWYWx1ZSA9IGlucHV0RmllbGRUZXh0RWxlbWVudC52YWx1ZTsgXG5cbi8vICAgICBpZiAoaW5wdXRGaWVsZFRleHRWYWx1ZSA9PT0gdXNlclZhbHVlKSB7IFxuLy8gICAgICAgcHJvamVjdERPTUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4vLyAgICAgfSBlbHNlIHsgXG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfSBcbi8vICAgfSkgXG5cbi8vICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idG5cIik7IFxuXG4vLyAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuLy8gICAgIGxldCBwcm9qZWN0RE9NQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7IFxuLy8gICAgIHByb2plY3RET01Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuLy8gICAgIGFkZFByb2plY3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTsgXG4vLyAgICB9KSBcbi8vIH0pIFxuXG5cbi8vIGNvbnN0IG5hdmJhclByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1lbGVtZW50LWZyb20tbmF2YmFyLXNlY3Rpb25cIik7XG5cbi8vIGNvbnNvbGUubG9nKG5hdmJhclByb2plY3ROYW1lRWxlbWVudCk7IFxuXG5cblxuLy8gbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZpZWxkLXRleHRcIik7IFxuXG4vLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vIG5hdmJhclByb2plY3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhcImhleVwiKTsgXG4vLyAgIC8vIGNhbGwgdGhlIERPTSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIFxuLy8gfSlcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYXR0ZW1wdHMgXG5cbi8vIHByb2plY3RTZWN0aW9uTmFtZUJ1dHRvbkFycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcInByaW50IHNvbWV0aGluZ1wiKTtcbi8vIH0pXG5cbi8vIGxldCBwcm9qZWN0U2VjdGlvbk5hbWVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1zZWN0aW9uLWJ0blwiKVswXTtcblxuLy8gbGV0IGFyciA9IEFycmF5LmZyb20ocHJvamVjdFNlY3Rpb25OYW1lRGl2KTtcblxuLy8gY29uc29sZS5sb2coYXJyKTtcblxuLy8gYXJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIlRoaXMgcHJvamVjdCBzdWNrcyFcIik7XG4vLyB9KSBcblxuXG4vLyBwcm9qZWN0U2VjdGlvbk5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgIGNvbnNvbGUubG9nKFwiaGksIEkgYW0gd29ya2luZ1wiKTtcbi8vIH0pIFxuXG5cblxuLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pO1xuXG4vLyAgIH0pIFxuXG5cblxuXG5cblxuXG4vLyBpZiB1c2VyVmFsdWUgaXMgPT09ICcnIGVtcHR5LCB0aGVuIGRpc2FibGUgYnRuLCBpZiBub3QsIGVuYWJsZSBidG4gc28gaXQgY2FuIGJlIGNsaWNrZWQgYWdhaW4sIFxuXG4vLyB0cnlpbmcgdG8gdGhpbmsgb2YgdGhlIGxvZ2ljLCB0byBtYWtlIHN1cmUgb25seSBvbmUgaW5wdXQgZmllbGQgY2FuIGJlIGdlbmVyYXRlZCBhdCBhIHRpbWUsIFxuXG4vLyB1c2VyIHNob3VsZCBub3QgYmUgYWJsZSB0byBwcmVzcyBhZGQgcHJvamVjdCBhbmQgYWRkIG11bHRpcGxlIGlucHV0IGZpZWxkcywgXG5cbi8vIG9uY2UgdGhlIHZhbHVlIGlzIGVudGVyZWQsIHRoZSBidG4gY2FuIGJlIHByZXNzZWQgYWdhaW4uIFxuXG4gIC8vIGhlcmUsIHRoZSBmdW5jdGlvbiB3aWxsIG5lZWQgdG8gY2FsbGVkIHdoZW4gYSBjb25kaXRpb24gaXMgbWV0LiBcblxuICAvLyB3aGF0IGlzIHRoZSBjb25kaXRpb24/IGNhbm5vdCBwcmVzcyB0aGUgYnRuIHVubGVzcyB0aGUgY3VycmVudCBcblxuICAvLyBpZiAgXG5cblxuXG4vLyBjYW5jZWwgYnRuIGZ1bmN0aW9uYWxpdHkgd29ya3MsIHNhbWUgd2l0aCBhZGQgYnRuLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gZml4IHRoZSB1c2VyIGZyb20gaGl0dGluZyB0aGUgYWRkIHByb2plY3QgYnRuLCBiZWZvcmUgYSBwcm9qZWN0IGhhcyBiZWVuIGFkZGVkPyBcblxuLy8gYnRuIGNhbiBvbmx5IGJlIGNsaWNrZWQgb25jZSB0aGUgYWRkIGJ0biBoYXMgYmVlbiBwcmVzc2VkLCBcblxuXG4vLyBuZXh0IHN0ZXAgd291bGQgdG8gdHJ5IHRvIHdvcmsgb24gdGhlIGxvZ2ljIHRoYXQgcHJldmVudHMgYSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCBcblxuLy8gaWYgdGhlIHZhbHVlL25hbWUgaGFzIG5vdCBiZWVuIGFkZGVkLCBcblxuLy8gdW5kZXJzdGFuZCBob3cgdGhlIGVsZW1lbnQgaXMgYmVpbmcgYXBwZW5kZWQsIFxuXG4vLyBcblxuXG5cblxuLy8gYXBwbHkgdGhlIHNhbWUgbG9naWMgd2l0aCB0aGUgY2FuY2VsIGJ0biwgXG5cbi8vIGFjY2VzcyB0aGUgY2FuY2VsIGJ0biBlbGVtZW50LCB1c2UgYSBzZWxlY3RvciwgXG5cbi8vIFxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvLCBpcyBhZnRlciB0aGUgcHJvamVjdCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NIHNlY3Rpb24sIHJlbW92ZSB0aGUgY29udGFpbmVyLCBcblxuLy8gYnV0IGFsbG93IHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgd2l0aCBhbm90aGVyIG5hbWUgYW5kIGVudGVyIGl0LCBcblxuLy8gd2hlbiBJIHByZXNzIHRoZSBhZGQgcHJvamVjdCBidG4gYW5kIGVudGVyIGEgZGlmZmVyZW50IG5hbWUsIGl0IHdpbGwgb25seSBcblxuLy8gb3V0cHV0IHRoZSBmaXJzdCBuYW1lIHRoYXQgd2FzIGVudGVyZWQsIFxuXG4vLyB0aGUgZnVuY3Rpb25hbGl0eSBpcyB0aGF0IHRoZSB1c2VyIGNsaWNrcywgYWRkIHByb2plY3QsIGlucHV0IGZpZWxkIGdlbmVyYXRlZCwgbmFtZSBpcyBhZGRlZCwgXG5cbi8vIHdoZW4gdXNlciBwcmVzc2VzIGFkZCwgaXQgd2lsbCBnZXQgYWRkZWQgdG8gdGhlIGNvbnRhaW5lcnMsIGlucHV0IGZpZWxkIHJlbW92ZWQsIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIHNob3VsZCBzdGlsbCBoYXZlIGZ1bmN0aW9uYWxpdHksIGFsbG93aW5nIHRoZSB1c2VyIHRvIGVudGVyIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHRyeSB0byBwdXQgdGhlIGxvZ2ljIG91dHNpZGUgb2YgdGhlIGxvb3AgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGkgY2FuIGFjY2VzcyB0aGUgdmFsdWUsIHRoYXQgdGhlIHVzZXIgZW50ZXJlZCwgbm93IEkgbmVlZCB0byBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuLy8gYXBwZW5kaW5nIHZhbHVlIHdvcmtzLCBncmFiIHRoZSB0YXJnZXQgY29udGFpbmVycyBhbmQgYXBwZW5kIHRoZXJlLiBcblxuXG5cblxuLy8gYWNjZXNzIHRoZSBpbnB1dCBmaWVsZCBlbGVtZW50LCBhcHBlbmQgdG8gRE9NIFxuXG5cblxuXG5cblxuLy8gZ3JhYiBhZGQgYnRuIGVsZW1lbnQsIGFkZCBhIGxpc3RlbmVyIHRvIGl0IFxuXG4vLyBsZXQgYWRkUHJvamVjdFRvRE9NQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1idG5cIilbMF07IFxuXG5cblxuXG4vLyBjb25zdCBhZGRQcm9qZWN0VG9ET01CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIik7XG5cbi8vIGNvbnN0IG5ld0FyciA9IEFycmF5LmZyb20oYWRkUHJvamVjdFRvRE9NQnRuKTtcblxuLy8gbmV3QXJyLmZvckVhY2goYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIik7XG4vLyAgIH0pO1xuLy8gfSlcblxuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC1idG5cIikuZm9yRWFjaCggYnV0dG9uID0+IHtcbi8vICAgY29uc29sZS5sb2coYnV0dG9uKTtcbi8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSwgaW5zaWRlIGEgY2xpY2tlciFcIilcbi8vICAgfSk7XG4vLyB9KVxuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgbmV3QXJyYXkgPSBBcnJheS5mcm9tKGFkZFByb2plY3RUb0RPTUJ0bik7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcblxuLy8gIG5ld0FycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuLy8gICBjb25zb2xlLmxvZyhcIjEsIDIsIDEsIDJcIik7IFxuLy8gfSlcblxuLy8gY29uc3QgYXJyID0gQXJyYXkuZnJvbShhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG4vLyBjb25zb2xlLmxvZyhhcnIpO1xuXG4vLyBjb25zb2xlLmxvZyhhZGRQcm9qZWN0VG9ET01CdG4pO1xuXG5cblxuXG5cbiIsIi8vIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlXG5cbi8vIGltcG9ydCBcInNyYy9ldmVudExpc3RlbmVyTW9kdWxlLmpzXCI7XG5cbmltcG9ydCBcIi4vZXZlbnRMaXN0ZW5lck1vZHVsZVwiO1xuXG5pbXBvcnQgXCIuL2RvbUxvZ2ljXCI7XG5cbmltcG9ydCAgeyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgfSBmcm9tIFwiLi9jb25kaXRpb25hbExvZ2ljXCI7XG5cbmltcG9ydCBcIi4vc3RvcmFnZVwiOyBcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cbmxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxubGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuXG4vLyBsZXQgcHJvamVjdCBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIC8vIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlSW5Qcm9qZWN0KTtcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7IFxuXG4gICAgIFxuXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG5cblxuXG5cblxuXG4vLyBPSyBzbyB0aGUgZGVsZXRpbmcgcHJvamVjdCBtZXRob2Qgd29ya3MhISBJIGFtIG5vdyBhYmxlIHRvIGRlbGV0ZSBhIHByb2plY3QgZnJvbSBtYWluIGFzIHdlbGwgYXMgdGhlIG5hdmJhciwgXG5cbi8vIG5leHQgSSBkaWQgdG8gYWRkIHRoZSBsb2dpYyBzbyB0aGUgdXNlciBjYW4gYWRkIHRvZG8ncywgXG5cbi8vIHJlbWVtYmVyIHRvZG8ncyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3Qgb2JqIGFycmF5LCBcblxuLy8gZmlyc3Qgd2UgcHJvYmFibHkgbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXB0dXJlIHRoZSB2YWx1ZSBcblxuLy8gb24gZWFjaCBpbnB1dCBmaWVsZCwgbGV0cyBzdGFydCB0aGVyZSwgXG5cbi8vIGEgZnVuY3Rpb24gd2lsbCBiZSBuZWVkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0IGlucHV0IGZpZWxkcyBcblxuLy8gYW5kIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGVtLCBcblxuXG5cblxuLy8gdGhpbmtpbmcgb2YgdGhlIG5leHQgc3RlcCBhZnRlciB0aGUgZGVsZXRpbmcgcHJvamVjdHMsIFxuXG4vLyB0aGF0IHdvdWxkIGJlIGdldHRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGlucHV0IGFuZCBcblxuLy8gcHVzaGluZyB0aGVtIGJhY2sgaW50byB0aGUgdG9kbyBhcnJheSB0aGF0IGVhY2ggcHJvamVjdCBjb250YWluZXJzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIGFjY2VzcyB0byB0aGF0IHRvZG8gYXJyYXksIHRyeSBhIHNpbXBsZSBsb2cgZmlyc3QgXG5cbi8vIGJ1dCB0aGUgdG9kbydzIHdpbGwgYmUgYWRkZWQgdG8gdGhlcmUgYnV0IGFsc28gaXQgbmVlZHMgdG8gYmUgXG5cbi8vIHJlZmxlY3RlZCBpbiB5b3VyIERPTSB0b28sIFxuXG4vLyBzbyB0aGlua2luZyBvZiBzb21lIHdheSB0byBhY2Nlc3MgdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoZSBvYmogXG5cblxuLy8gaWYgeW91IGNhbiBhY2Nlc3MgaXQgeW91IGFkZCB0aGUgdmFsdWVzIHRvIGl0LCBcblxuLy8gdGhlbiBvbmNlIHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBwcm9wZXJseSB3aXRoaW4gZWFjaCBvYmplY3QsIFxuXG4vLyB5b3Ugd2FudCB0byByZWZsZWN0IHRoYXQgaW4gdGhlIERPTSwgYWNjZXNzIHRoZSB0b2RvIGFuZCBkaXNwbGF5IGl0J3MgcHJvcGVydGllcyBcblxuLy8gdGhlbiBoYXZpbmcgYSB3YXkgdG8gZGVsZXRlIHRvZG8ncyBhbmQgaGF2aW5nIHRoYXQgdXBkYXRlIFxuXG4vLyB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTS4gXG5cblxuLy8gZ2V0dGluZyBwcm9qZWN0IElEIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4vLyAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuICAgICBcbi8vICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKTtcbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIGdldCB0aGUgcHJvamVjdCdzIElELCBnZXQgdGhlIElEJ3Mgd2l0aGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBhbmQgdGhlIElEJ3Mgd2l0aGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBjcmVhdGUgYSBsb29wIGluc2lkZSBlYWNoIHNlY3Rpb24gYW5kIGdldCB0aGUgdmFsdWUsIFxuXG5cblxuXG4vLyB3ZWxsIHlvdSBjYW4gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBidG4gY29udGFpbmVyIGZyb20gdGhlIERPTSwgXG5cbi8vIGNhbiB3ZSBmaWd1cmUgb3V0IGEgd2F5IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gbGV0cyB0YWtlIGEgbG9vayBhdCBob3cgdGhlIHZhbHVlIGlzIHN0b3JlZCwgXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBhbmQgc2VlIGlmIHNvbWVob3cgeW91ICBcblxuLy8gZ3JhYiBhIHZhbHVlLCBvciB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cblxuXG4vLyBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgdmFsdWVzIHd0aWhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBhIGxvb3AsIHRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdGhlIHZhbHVlJ3MgdGV4dCBjb250ZW50IG1hdGNoZXMsIHNldCB0aGUgdGV4dENvbnRlbnQgdG8gXCJcIiBvciBkZWxldGUgdGhlIGVsZW1lbnQsIFxuXG4vLyB0cnkgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHRoYXQgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdmFsdWVzIG1hdGNoLCBkZWxldGUgdGhlIHZhbHVlIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiB0aGF0IG1hdGNoZXMgbWFpbiBjb250ZW50cyB2YWx1ZSwgXG5cbi8vIGlkJ3MsIGVhY2ggcHJvamVjdCBoYXMgYSB1bnFpdWUgSUQsIGNvbXBhcmUgSUQncywgd2h5IGNhbnQgSSBkbywgaWYgdGhlIHRleHRDb250ZW50cy9zdHJpbmdzIG1hdGNoIHJlbW92ZT8gXG5cbi8vIEkgZ290IHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYWluLCBhbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB5b3VyIHByb2plY3RzLCBcblxuLy8gZG9lcyB0aGUgc3RyaW5nIG1hdGNoIHRoZSBvdGhlciBzdHJpbmcsIFxuXG4vLyBkbyBJRCdzIG1hdGNoPyBcblxuXG5cblxuXG4vLyBzYW1lIGlzc3VlLCBJIGFtIHRyeWluZyB0byBncmFiIHRoZSB2YWx1ZXMsIGFuZCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBkZWxldGUgdGhlIHByb2plY3QsIFxuXG4vLyBkZWxldGUgdGhlIHByb2plY3QgZnJvbSBib3RoIHBsYWNlcywgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGFuZCB0aGUgbGlzdCBvbiB2YWx1ZXMgaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGhvdyBjYW4gSSBkZWxldGUgYm90aCBpbiB0aGUgc2FtZSBwbGFjZSBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIFxuXG4vLyBqdXN0IGNoZWNrIHRvIHNlZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBET00sIHNlZSBpZiB5b3UgY2FuIGFkZCBhIGNsYXNzIHRvIGl0LCBcblxuXG4vLyB3aGlsZSB3ZXJlIHdhaXRpbmcgY2FuIHdlIGdldCB0aGUgcHJvamVjdHMgSUQ/IFxuXG4vLyBqdXN0IHNpbXBseSB0cnkgdG8gZ2V0IGEgcHJvamVjdHMgSUQuIGFuZCBsb2cgaXQsIFxuXG5cblxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cbi8vIG9rIHNvIEkgYW0gYWJsZSB0byB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIG9wZW5pbmcgdGhlIG1vZGFsIGFuZCBjbG9zaW5nIHRoZSBtb2RhbCwgXG5cbi8vIG5vdyB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgbG9naWMsIHRoYXQgd2lsbCBzZXQgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgbW9kYWwgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgaXQgd2lsbCBwb3AtdXAsIGNhbmNlbCBpdCB3aWxsIG5vdCBkaXNwbGF5IFxuXG4vLyBJIHRoaW5rIGp1c3QgZ3JhYmJpbmcgdGhlIHZhcmlhYmxlcyBhdCB0aGUgdG9wIGlzIGZpbmUsIGFuZCBqdXN0IGluIHRoZSBnbG9iYWwgc2NvcGUsIFxuXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHdvcmtzLCBzYXZlIGFuZCBjb21taXQsIHRoZW4gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSBkZWxldGUgYnRuIHdvcmtpbmcsIFxuXG4vLyBub3cgd291bGQgcHJvYmFibHkgYmUgdGhlIGJlc3QgdGltZSB0byBkbyB0aGF0LCBzaW5jZSB0aGUgYWRkIGJ0biBpcyB3b3JraW5nLCBub3cgd2UgY2FuXG5cbi8vIHdvcmsgb24gdGhlIGxvZ2ljLCB0aGF0IG9uY2UgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGFub3RoZXIgbW9kYWwsIGFza2luZyB0aGUgdXNlciBcblxuLy8gYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD8gSXQgd2lsbCBjbGVhciB0aGF0IHByb2plY3QgZm9yIHRoZSBET00gSW4gbWFpbiBcblxuLy8gYnV0IGFsc28gaW4gdGhlIHByb2plY3QncyBzZWN0aW9uLCBcblxuLy8vIHN0eWxlIHRoZSBtb2RhbCwgb25lIGJ0biB0byBjb25maXJtIGFuZCB0aGUgb3RoZXIgYnRuIHRvIGNhbmNlbCB0aGUgb3JkZXIsIFxuXG4vLyBPayBzbyB3ZSBoYXZlIHRoZSBwcmludCB2YWx1ZXMgdG8gdGhlIERPTSBmdW5jdGlvbiwgXG5cbi8vIGlmIHVzZXIgY2xpY2tzIHByb2plY3QgbmFtZSwgdmFsdWVzIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGlmIHVzZXIgcHJlc3NlcywgYWRkIG9yIGRlbGV0ZSwgbG9naWMgaXMgd2l0aGluIHRoZSBzYW1lIGZ1bmN0aW9uLCBcblxuLy8gSSBkb24ndCBzZWUgdGhhdCBiZWNvbWluZyBhIHByb2JsZW0sIG15IHRoaW5raW5nIGlzIHRoYXQgaXQncyBiZXR0ZXIgdG8gZG8gdGhhdCB0aGVyZSBcblxuLy8gdGhhbiBwYXNzaW5nIHRoZSB2YXJpYWJsZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBtaWdodCBhcyB3ZWxsIGRvIHRoYXQgYWxsIHRoZXJlLCBcblxuLy8gc28gdGhlIGRlbGV0ZSBidG4sIG1ha2UgdGhlIG1hcmt1cCBpbiB0aGUgSFRNTCBmaXJzdCwgZm9sbG93IHRoZSBndWlkZWxpbmVzIGJlZm9yZSwgZ28gc2xvdywgXG5cblxuLy8gbW9kYWwgaXMgd29ya2luZyBidXQganVzdCB0cnlpbmcgdG8gYWRkIHNwYWNlIFxuLy8gYmV0d2VlbiB0aGUgZWxlbWVudHMgdGhlIGNoZWNrIGFuZCB0aGUgeCwgZWxlbWVudCBcblxuLy8gb2sgZ290IHRoZSBkZWxldGUgYnRuIG1vZGFsIHdvcmtpbmcgYXMgSSB3YW50IHRvLCBuZXh0IEkgd2lsbCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LCBcblxuLy8gdGhhdCBvbmNlIGNsaWNrZWQgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwsIFxuXG4vLyBkb250IGZvcmdldCB0byBhZGQgdGhlIG92ZXJsYXkhIFxuXG5cblxuXG4vLyBuZXh0IHdpbGwgd29yayBvbiBkZWxldGluZyBhIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2ttYXJrLCBpdCBzaG91bGQgZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSwgdGhlIGFycmF5IFxuXG4vLyBhbmQgSSBiZWxpZXZlIGZyb20gbG9jYWwgc3RvcmFnZSB0b28sIHRoZW4gd29yayBvbiBzYXZpbmcgdG9kbyBpbmZvLCBmcm9tIHRoZSBtb2RhbCBhbmQgcHVzaGluZyBpbnRvIHRoZSBET00gYW5kIHN0b3JhZ2Ugd2hlcmUgXG5cbi8vIGVhY2ggcHJvamVjdCBoYXMgYSBsaXN0IG9mIHRvZG8ncywgaXQgd2lsbCBhZGRlZCB0aGVyZSB3aGlsZSBhbHNvIHJlZmxlY3RpbmcgdGhhdCBpbnRvIHRoZSBET00uIFxuXG4vLyB5ZXMgbmV4dCBzdGVwIGlzIGVpdGhlciBkZWxldGluZyB0aGUgcHJvamVjdCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBidG4sIGFuZCBnZXR0aW5nIGFsbCB0aGUgdXNlciBpbmZvIFxuXG4vLyB0aGF0IHdhcyBlbnRlcmVkIGFuZCBzYXZpbmcgdGhhdCB0b2RvLCB0byB0aGUgYXJyYXkgb2YgdG9kbydzIHRoYXQgZWFjaCBwcm9qZWN0IGhhcywgXG5cblxuXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cblxuLy8gc28gbm93IHdlIGZpZ3VyZWQgb3V0IGhvdyB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIG1vcmUgcHJvamVjdHMsIFxuXG4vLyBiYXNjaWNhbGx5IGNsZWFyIHRoZSBET00sIHRoZW4gYWRkIHByb2plY3RzLCBcblxuLy8gbm93IGFkZCB0aGUgbG9naWMsIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIG1vZGFsLCBmb3IgdGhlIHVzZXIgdG8gY3JlYXRlIGEgdG9kbywgXG5cbi8vIGZpcnN0IEkgd291bGQganVzdCB0cnkgaXQgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiBtYXliZSBzZWUgaWYgeW91IGNhbiBzcGxpdCB0aGUgY29kZSB1cCBhIGJpdCwgXG5cbi8vIHByaW50IGEgc2ltcGxlIG1lc3NhZ2Ugd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciBmaXJzdCwgXG5cbi8vIG9rIHdvcmtzIGdvb2QsIG5vdyBzdGFydCBjb25zdHJ1Y3RpbmcgeW91ciBtb2RhbCwgZm9sbG93IGFsb25nIHdpdGggdGhlIGFydGljbGUsIG9yIHZpZGVvLCBcblxuLy8gbmVlZHMgdGl0bGUsIHByaW9yaXR5LCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIFxuXG4vLyB0aG9zZSB2YWx1ZXMgYXJlIHRoZW4gYWRkZWQgdG8gdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoYXQgc3BlY2lmaWMgcHJvamVjdCwgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFNvIEkgbmVlZCB0byByZWNvbnNpZGVyIG15IGFwcHJvYWNoLCBpbnN0ZWFkIG9mIGhhdmluZyBzdG9yYWdlIHJlZmxlY3Qgd2hhdCBpcyBpbiB0aGUgRE9NLCBcblxuLy8gRE9NIGFuZCBzdG9yYWdlIGFyZSBzZXBlcmF0ZSwgd2hlbiBhIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkLCBzYXZlIHRvIHN0b3JhZ2UgYnV0IHlvdSBhbHNvIGhhdmUgcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYW5kIHdoYXRldmVyIGlzIGluc2lkZSBwcm9qZWN0cyBhcnJheSBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLCBpbiB0aGUgY29ycmVjdCBmb3JtYXQsIHlvdSBtYXkgaGF2ZSB0byBwYXJzZSBvciBzdHJpbmdpZnkgdGhlIGRhdGEgdG8gd29yaywgXG5cbi8vIHJlZmxlY3Qgd2hhdGV2ZXIgaXMgaW4gdGhlIHByb2plY3RzIGFycmF5IHRvIHRoZSBET00uIFxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbigpIHsgXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiSGV5IHRoaXMgd29ya3NcIik7XG4vLyAgICB9XG4gICBcblxuXG4vLyAtLSBvbmUgaXNzdWUgSSBub3RpY2UgaXMgdGhhdCBpZiBJIGFkZCBhIHByb2plY3QgbmFtZSwgSSBoYXZlIHRvIHJlZnJlc2ggZm9yIGl0IHRvIGdldCBpdCB0b28gc2hvdy4gISEhXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8gbmV4dCBpcyB0byB0YWtlIHRoZSB2YWx1ZXMvcHJvamVjdCBuYW1lcyB0aGF0IGFyZSBpbiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFuZCBhcHBlbmQgdGhvc2UgdG8gdGhlIERPTSwgXG4vLyBmaXJzdCBqdXN0IHRyeSB0byBncmFiIHRoZSBlbGVtbmVudCBhbmQgYXBwZW5kIHZhbHVlIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gd29yayBmcm9tIHRoZXJlLCBcblxuXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBkbyBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uIFxuXG4vLyBub3cgdHJ5IHRvIHNlcGVyYXRlIGl0LCBwdXQgdGhhdCBsb2dpYyB3aXRoaW4gdGhlIERPTSBNb2R1bGUsIHRoZW4gb25jZSB5b3UgZ2V0IHRoYXQgd29ya2luZywgc3R5bGUgd2l0aGluIHNlcGVyYXRlIHNoZWV0LCBcblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGJsYWggaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKGJsYWgpXG4vLyAgIG5ld0FycmF5LnB1c2goYmxhaCk7XG4vLyB9O1xuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBwcm9qZWN0IGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIG5ld0FycmF5LnB1c2gocHJvamVjdCk7XG4vLyB9OyAgICBcblxuXG5cbi8vIHRoaXNcbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGluZGV4IGluIHNvbWVBcnJheSkge1xuLy8gLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4vLyBsZXQgeCA9IE9iamVjdC52YWx1ZXMoc29tZUFycmF5KTtcblxuLy8gLy8gY29uc29sZS5sb2coeCk7XG5cbi8vICAgbmV3QXJyYXkucHVzaCh4KTtcblxuLy8gICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4vLyB9O1xuXG5cblxuXG5cblxuLy8gSSB3aWxsIG5leHQgd3JpdGUgYSBmdW5jdGlvbiB3aXRoaW4gRE9NIGxvZ2ljLCB0aGF0IHdpbGwgZ2V0IHRoZSBsb2NhbCBzdG9yYWdlLCBncmFiIHRoZSBwcm9qZWN0IG5hbWVzLCB0aGVuIHByaW50IHRoZW0gdG8gdGhlIERPTSwgd2l0aCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gaWYgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgYXR0YWNoIGEgbGlzdGVuZXIsIHRoZW4gd2l0aGluIGxpc3RlbmVyIGxvZ2ljIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBET00sIGluIGJvdGggcGxhY2VzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIHRvIGNsZWFyIG1haW4gY29udGVudCB0byBtYWtlIHdheSBmb3IgdGhlIG5ldyBjb250ZW50LCB1c2luZyByZXBsYWNlIGNoaWxkLCBcblxuLy8geW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG9iaiB0byBhIHN0cmluZywgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHByb3BlciBmb3JtYXQgYmVmb3JlIGFwcGVuZGluZywgXG5cbi8vIGlmIGp1c3QgbmVlZHMgdG8gYmUgdGhlIHN0cmFpZ2h0IHByb2plY3QgbmFtZSwgXG5cbi8vIHNvIG9uY2UgY2xpY2tlZCBwb3B1bGF0ZSB3aXRoIHR3byBidXR0b25zLCBkZWxldGUsIGFuZCBhZGQgYnRuLCBpZiBhZGQgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGZvcm0gd2hpY2ggd2lsbCBzYXZlIGRhdGEgYW5kIGFkZCB0byB0b2RvJ3Mgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhcHBlbmQgdGhvc2UgdG9kbydzIHRvIHRoZSBET00gYXMgdGhleSBhcmUgYWRkZWQsIGFuZCByZW1vdmUgaWYgdGhleSBhcmUgZGVsZXRlZC4gXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkuY2xlYXIoKTsgXG5cblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBwcm9ibGVtcywgb24gc3RvcmFnZSB3aXRoIHRvZG8gbGlzdCwgbXkgZGF0YSBpcyBiZWluZyBzdG9yZWQgY29ycmVjdGx5LCAgXG5cbi8vIGJ1dCBJIGFtIG5vdGljaW5nIG15IHByb2plY3QgbmFtZXMgYXJlIGtlZXAgZ2V0dGluZyBuZXN0ZWQgaW5zaWRlIG11bHRpcGxlIGFycmF5J3MsIGN1cnJlbnRseSBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYXJlIG1hZGUgaW50byBvYmplY3RzIHRoZW4gb2JqZWN0cyBhcmUgcGFzc2VkIHRvIGFycmF5IGZvciBzdG9yYWdlLCBvbmNlIHRoZSBwYWdlIHJlbG9hZHMsIFxuXG4vLyBJIHBhcnNlIHRocm91Z2ggdGhlIGRhdGEgaW4gc3RvcmFnZSwgYW5kIHB1c2ggdGhlIGRhdGEgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGRhdGEgaXMgc2F2ZWQsIFxuXG4vLyBsaWtlIEkgc2FpZCwgYXJyYXkncyBhcmUgYmVpbmcgbmVzdGVkIHdpdGhpbiBtdWx0aXBsZSBsZXZlbHMgYW5kIEknbSBub3Qgc3VyZSB3aHkuIFxuXG4vLyBwaWN0dXJlIGF0dGFjaGVkIGFuZCBzb21lIHNuaXBwZXRzIG9mIG15IGNvZGUgYXR0YWNoZWQgZm9yIGNvbnRleHQsIEkgY2FuIGFsc28gYXR0YWNoIG15IHJlcG8gaWYgdGhhdCBoZWxwcyB0byBmdXJ0aGVyIGRlYnVnIHRoaXMsIFxuXG5cblxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICIsIlxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG4gXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlU2V0SXRlbShuYW1lKSB7IFxuXG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTsgIFxuICAgIFxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4gICBcbn0gXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZSgpIHsgXG4vLyAgIGxldCBnZXROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbiAgXG4vLyAgIGNvbnNvbGUubG9nKGdldE5hbWUpOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmogPSBwcm9qZWN0TmFtZUZhY3RvcnkoZ2V0TmFtZSk7IFxuXG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG15IGdvYWwgaXMgdG8gaGF2ZSBpbmRpdmR1YWwgcHJvamVjdCBuYW1lIG9iamVjdHMsIFxuXG4vLyBJIGFtIGFibGUgdG8gY3JlYXRlIHByb2plY3QgbmFtZXMsIGJ1dCB3aGVuIEkgdXNlIG9iamVjdHMgaXQgb25seSBhZGRzIG9udG8sIGFuZCBkb2VzIG5vdCBjcmVhdGUgdW5pcXVlIHByb2plY3RzLiBcblxuLy8gXG5cblxuXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFyciA9IFtdO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB2YWx1ZVtpXTsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQpO1xuLy8gICAgICAgICBhcnIucHVzaChwcm9qZWN0TmFtZUlucHV0KTtcblxuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coYXJyKTsgXG4vLyAgICAgcmV0dXJuIGFycjsgXG4vLyB9IFxuXG4vLyBqdXN0IGFkZCB2YWx1ZXMgdG8gdGhlIGFycmF5IFxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0TmFtZSh2YWx1ZSkgeyBcblxuLy8gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlKTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lU3RvcmFnZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==