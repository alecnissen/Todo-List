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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
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

      // console.log(currentProject.todoItems);
      
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

      btnContainerAddandDelete.append(addBtnToCreateModal); 

      btnContainerAddandDelete.append(deleteBtnToDeleteTodo); 

      let projectNameValueClicked = e.target.textContent; 

      projectNameValueContainerForStyles.append(projectNameValueClicked);
      
      mainContentContainerProjectNames.append(projectNameValueContainerForStyles);

      mainContentContainerProjectNames.append(btnContainerAddandDelete); 
      // old location of display todo function 
      // function displayCurrentProjectTodo() { 

      //   let projectTodoContainerDisplay = document.getElementById("project-todos-container"); 
        
      //   projectTodoContainerDisplay.style.display = "flex"; 

      //   projectTodoContainerDisplay.style.flexDirection = "column";
      //   // let div = document.createElement("div"); 

      //   // div.style.backgroundColor = "white"; 

      //   // div.style.fontSize = "2rem"; 

      //   projectTodoContainerDisplay.replaceChildren(); 

      //   for (let i = 0; i < currentProject.todoItems.length; i++) { 
      //     let taskHolder = document.createElement("div"); 

      //     projectTodoContainerDisplay.append(taskHolder);

      //     let selectedProject = currentProject.todoItems[i]; 
           
      //     taskHolder.append(selectedProject);

      //      projectTodoContainerDisplay.append(taskHolder);
          
      //   } 
        
      //  } 

      // displayCurrentProjectTodo(); 

      displayCurrentProjectTodo(); 
    })
  }
} 

 

formTagForModule.addEventListener("submit", (e) => { 
  e.preventDefault();
  modal.style.display = "none"; 
  overlay.style.display = "none";
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
  
  let projectID = currentProject.id; 
  
  let value = currentProject; 
  
  projectArray = projectArray.filter(project => project.id !== currentProject.id);
  
  mainContentProjectNamesStyleContainer.replaceChildren(); 

  addAndDeleteBtnTodoModal.replaceChildren();

  printValuesToDOM(projectArray); 

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray); 

  modalForTodoDeleteBtn.style.display = "none"; 

  overlayForTodoDeleteBtn.style.display = "none";  


})  


let addBtnToDoModal = document.getElementById("add-task-todo-modal"); 



let formInput = document.getElementById("input-form-for-creating-todo-task");

formInput.addEventListener("submit", (e) => { 
  e.preventDefault();
})



addBtnToDoModal.addEventListener("click", (e) => { 
  
  e.preventDefault(); 


  let titleInputForTodo = document.getElementById("title-of-todo-input-form"); 

  let titleInputValue = titleInputForTodo.value; 

  currentProject.todoItems.push(titleInputValue); 

  let descriptionForTodo = document.getElementById("description-for-todo"); 

  let descriptionForTodoValue = descriptionForTodo.value; 
  
  currentProject.todoItems.push(descriptionForTodoValue); 

  let dueDateForTodo = document.getElementById("due-date-for-todo-task"); 

  let dueDateForTodoValue = dueDateForTodo.value; 

  currentProject.todoItems.push(dueDateForTodoValue);

  let priorityForTodo = document.getElementById("priority-for-todo-task"); 

  let priorityForTodoValue = priorityForTodo.value;  

  currentProject.todoItems.push(priorityForTodoValue);

  let currentProjectsTodos = currentProject.todoItems; 

  let mainSectionContainer = document.getElementsByClassName("main-content-section-container")[0]; 

  (0,_storage__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray);

let todosForProject = todoObjectFactory(titleInputValue, descriptionForTodoValue, priorityForTodoValue, dueDateForTodoValue)

// printToDoValues(todosForProject);

// pushTodoObject(todosForProject);

todoObjectFactory(todosForProject); 

displayCurrentProjectTodo(); 

})   

function todoObjectFactory(title, description, priority, dueDate) { 
  return { 
    title: title, 
    description: description, 
    priority: priority, 
    dueDate: dueDate 
  }
}  




function displayCurrentProjectTodo() { 

  let projectTodoContainerDisplay = document.getElementById("project-todos-container"); 
  
  projectTodoContainerDisplay.style.display = "flex"; 

  projectTodoContainerDisplay.style.flexDirection = "row";
  // let div = document.createElement("div"); 

  // div.style.backgroundColor = "white"; 

  // div.style.fontSize = "2rem"; 

  projectTodoContainerDisplay.replaceChildren(); 

  for (let i = 0; i < currentProject.todoItems.length; i++) { 
    let taskHolder = document.createElement("div"); 

    taskHolder.style.color = "red";

    // taskHolder.style.backgroundColor = "wheat"; 

    // console.log(currentProject); 

    // console.log(currentProject.todoItems);


    projectTodoContainerDisplay.append(taskHolder);

    let selectedProject = currentProject.todoItems[i]; 

    // projectNameFactory.todoItems.push(selectedProject); 

    // console.log(selectedProject);

    // console.log(projectNameFactory(selectedProject)); 
     
    taskHolder.append(selectedProject); 

    projectTodoContainerDisplay.append(taskHolder);
    
  } 
  
 } 


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
/* harmony import */ var _domLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLogic */ "./src/domLogic.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
// add the event listener module

// import "src/eventListenerModule.js";



 



let getStorage = localStorage.getItem("Project-Names"); 

let parseData = JSON.parse(getStorage); 

function projectNameLoop() {   
for (let variable in parseData) { 

     let projectIndex = variable; 

     let valueInProject = parseData[projectIndex]; 

     _domLogic__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(valueInProject); 

}  

} 

projectNameLoop();
  
(0,_domLogic__WEBPACK_IMPORTED_MODULE_0__.printValuesToDOM)(_domLogic__WEBPACK_IMPORTED_MODULE_0__.projectArray);  











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





 


function arrayStorageSetItem(name) { 

    
    localStorage.setItem("Project-Names", JSON.stringify(name));  
    
    
    
} 


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRXJCOzs7O0FBSTlDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdNOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCOztBQUUvQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87Ozs7QUFJUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJCQUEyQixxQ0FBcUM7QUFDaEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7O0FBRUE7OztBQUdBLENBQUM7OztBQUdEOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFLG9EQUFtQjs7QUFFckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7Ozs7O0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCLHNDQUFzQztBQUM5RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7Ozs7O0FBUUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLElBQUk7Ozs7QUFJSjs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7O0FBRWhEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7O0FBTUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixlQUFlLGNBQWM7QUFDN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVE7O0FBRVI7O0FBRUE7O0FBRUEsTUFBTTs7O0FBR047Ozs7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2dkNBOztBQUVBOztBQUVvQjs7QUFFRDs7QUFFaUY7O0FBRXBHOztBQUVBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSyx3REFBaUI7O0FBRXRCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyREFBZ0IsQ0FBQyxtREFBWTs7Ozs7Ozs7Ozs7O0FBWTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5MUJvQjs7QUFFc0I7O0FBRTFDOzs7QUFHZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNsS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTsgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcblxuY29uc3QgY2xvc2VNb2RhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1idG5cIilbMF07IFxuXG5sZXQgbW9kYWxJbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG4td2l0aGluLW1vZGFsXCIpOyBcblxubGV0IGZvcm1UYWdGb3JNb2R1bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFnLWZvci1tb2RhbFwiKTsgXG5cbmxldCBtb2RhbENvbnRhaW5lckZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdG9kb1wiKVswXTsgXG5cbmxldCBvdmVybGF5Rm9yVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tbW9kYWxcIilbMF07IFxuXG5sZXQgbW9kYWxGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLWZvci1kZWxldGUtYnRuLXRvZG9cIilbMF07XG5cbmxldCBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLWRlbGV0ZS1idG5cIilbMF07IFxuXG5sZXQgY3VycmVudFByb2plY3QgXG5cbmZ1bmN0aW9uIHByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCkgeyBcbiAgXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0gXG5cbnByZXZlbnREb1lvdVdhbnRUb0RlbGV0ZU1vZGFsKCk7XG5cblxuZnVuY3Rpb24gcHJldmVudFRvZG9Nb2RhbFBvcFVwKCkgeyBcblxubW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbm92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudFRvZG9Nb2RhbFBvcFVwKCk7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107IFxuXG5mdW5jdGlvbiBwcmV2ZW50Rm9ybVBvcFVwKCkgeyBcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG59XG5cbnByZXZlbnRGb3JtUG9wVXAoKTtcblxuXG4gY2xvc2VNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIC8vIG1vZGFsSW5wdXRGaWVsZC5yZXNldCgpO1xuICAvLyB3aGVuIHlvdSBjbG9zZSBpdCwgc2hvdWxkIGNsZWFyIHRoZSBpbnB1dCBmaWVsZCxcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpO1xufSkgXG5cbiBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pIFxuXG5cbmZ1bmN0aW9uIHByb2plY3ROYW1lRmFjdG9yeShuYW1lKSB7IFxuICByZXR1cm4geyBcbiAgICBwcm9qZWN0OiBuYW1lLFxuICAgIGlkOiBjcnlwdG8ucmFuZG9tVVVJRCgpLFxuICAgIHRvZG9JdGVtczogW10sXG4gIH1cbn0gXG5cbmFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG1vZGFsSW5wdXRGaWVsZFZhbHVlID0gbW9kYWxJbnB1dEZpZWxkLnZhbHVlOyBcblxuICBsZXQgcHJvamVjdE5hbWVPYmplY3QgPSBwcm9qZWN0TmFtZUZhY3RvcnkobW9kYWxJbnB1dEZpZWxkVmFsdWUpOyBcbiAgXG4gIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lT2JqZWN0KTsgXG5cbiAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuICBcbiAgZm9ybVRhZ0Zvck1vZHVsZS5yZXNldCgpOyBcblxufSkgXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50VmFsdWVzVG9ET00oYXJyYXkpIHsgXG5cbiAgbGV0IHRoZVByb2plY3RzQXJyYXkgPSBhcnJheTsgXG5cbiAgbGV0IG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXItcHJvamVjdC1uYW1lcy1nby1oZXJlXCIpOyBcblxuICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhlUHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykgeyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4gICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUNvbnRhaW5lci5pZCk7XG5cbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG5cbiAgICAgIFxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIHRoZSBjYW5jZWwgYnV0dG9uXCIpO1xuXG4gICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgfSlcblxuXG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gXCIuLi9wbHVzLXNpZ24tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4gICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4gICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbiAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICAgLy8gb2xkIGxvY2F0aW9uIG9mIGRpc3BsYXkgdG9kbyBmdW5jdGlvbiBcbiAgICAgIC8vIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKSB7IFxuXG4gICAgICAvLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpOyBcbiAgICAgICAgXG4gICAgICAvLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4gICAgICAvLyAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgIC8vICAgLy8gbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgICAvLyAgIC8vIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4gICAgICAvLyAgIC8vIGRpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiOyBcblxuICAgICAgLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgLy8gICAgIGxldCB0YXNrSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICAgIC8vICAgICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKHRhc2tIb2xkZXIpO1xuXG4gICAgICAvLyAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4gICAgICAgICAgIFxuICAgICAgLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHNlbGVjdGVkUHJvamVjdCk7XG5cbiAgICAgIC8vICAgICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICAgICAgICBcbiAgICAgIC8vICAgfSBcbiAgICAgICAgXG4gICAgICAvLyAgfSBcblxuICAgICAgLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbiAgICB9KVxuICB9XG59IFxuXG4gXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSkgXG5cblxubGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbmNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG59KSBcblxuXG5sZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbiAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbiAgbGV0IHByb2plY3RJRCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcbiAgXG4gIGxldCB2YWx1ZSA9IGN1cnJlbnRQcm9qZWN0OyBcbiAgXG4gIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBjdXJyZW50UHJvamVjdC5pZCk7XG4gIFxuICBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICBhZGRBbmREZWxldGVCdG5Ub2RvTW9kYWwucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuXG5cbn0pICBcblxuXG5sZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5cbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cblxuXG5hZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG4gIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4gIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuICBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4gIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcblxubGV0IHRvZG9zRm9yUHJvamVjdCA9IHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlSW5wdXRWYWx1ZSwgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUsIHByaW9yaXR5Rm9yVG9kb1ZhbHVlLCBkdWVEYXRlRm9yVG9kb1ZhbHVlKVxuXG4vLyBwcmludFRvRG9WYWx1ZXModG9kb3NGb3JQcm9qZWN0KTtcblxuLy8gcHVzaFRvZG9PYmplY3QodG9kb3NGb3JQcm9qZWN0KTtcblxudG9kb09iamVjdEZhY3RvcnkodG9kb3NGb3JQcm9qZWN0KTsgXG5cbmRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbn0pICAgXG5cbmZ1bmN0aW9uIHRvZG9PYmplY3RGYWN0b3J5KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHsgXG4gIHJldHVybiB7IFxuICAgIHRpdGxlOiB0aXRsZSwgXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBcbiAgICBwcmlvcml0eTogcHJpb3JpdHksIFxuICAgIGR1ZURhdGU6IGR1ZURhdGUgXG4gIH1cbn0gIFxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCkgeyBcblxuICBsZXQgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG4gIFxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gIC8vIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuICAvLyBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuICAvLyBkaXYuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5sZW5ndGg7IGkrKykgeyBcbiAgICBsZXQgdGFza0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgdGFza0hvbGRlci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG5cbiAgICAvLyB0YXNrSG9sZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hlYXRcIjsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7IFxuXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3QudG9kb0l0ZW1zKTtcblxuXG4gICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcblxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4gICAgLy8gcHJvamVjdE5hbWVGYWN0b3J5LnRvZG9JdGVtcy5wdXNoKHNlbGVjdGVkUHJvamVjdCk7IFxuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lRmFjdG9yeShzZWxlY3RlZFByb2plY3QpKTsgXG4gICAgIFxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHNlbGVjdGVkUHJvamVjdCk7IFxuXG4gICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICBcbiAgfSBcbiAgXG4gfSBcblxuXG4vLyBMb29rIG92ZXIgY29kZSwgXG5cbi8vIEkgd2FudCB0byBkaXNwbGF5IHRoZSB0b2RvJ3MgZm9yIGVhY2ggcHJvamVjdCwgXG5cbi8vIGhvdyBhbSBJIGFkZGluZyB0aGUgdG9kbydzLCBcblxuLy8gc3RyaWNrbHkgbG9vayBhdCB0aGUgZnVuY3Rpb24sIFxuXG5cblxuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuXG5cbi8vIGZ1bmN0aW9uIHByaW50VG9Eb1ZhbHVlcyhwcm9qZWN0KSB7IFxuICBcbi8vICAgbGV0IG1haW5TZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRvZG9zLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbGV0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgbGV0IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QgPSBwcm9qZWN0OyBcblxuLy8gICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QubGVuZ3RoOyBpKyspIHsgXG4vLyAgIC8vICAgbGV0IHggPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0W2ldOyBcblxuLy8gICAvLyAgIGNvbnNvbGUubG9nKHgpOyBcbi8vICAgLy8gfVxuXG4vLyAgIGxldCBkaXNwbGF5VGl0bGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnRpdGxlOyBcblxuLy8gICBsZXQgZGlzcGxheURlc2NyaXB0aW9uID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC5kZXNjcmlwdGlvbjsgXG5cbi8vICAgbGV0IGRpc3BsYXlQcmlvcml0eSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QucHJpb3JpdHk7IFxuXG4vLyAgIGxldCBkaXNwbGF5RHVlRGF0ZSA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZHVlRGF0ZTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlUaXRsZSk7XG4gIFxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheURlc2NyaXB0aW9uKTsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEdWVEYXRlKTtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lci5hcHBlbmQoZGlzcGxheVByaW9yaXR5KTsgXG5cblxuLy8gfSBcblxuXG5cblxuXG5cblxuLy8gb2sgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWVzLCBJIGFtIGFibGUgdG8gcHJpbnQgdGhlIHZhbHVlcyB0byB0aGUgRE9NLCBcblxuLy8gaG93IGNhbiBJIHBlcm1hbmVudGx5IGFkZCB0aGVzZSB0b2RvIGl0ZW1zIG9udG8gZWFjaCBwcm9qZWN0IFxuXG4vLyBhbmQgc2F2ZSB0aGVtIGVhY2ggdGltZSBzbyB0aGV5IHJlbG9hZCBvbiByZWZyZXNoPyBcblxuLy8gSSBjYW4gZ3JhYiB0aGUgY3VycmVudCBwcm9qZWN0LCB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIGJldHdlZW4gcHJvamVjdHMgXG5cbi8vIHRoZW4gaG93IGNhbiBJIGFkZCB0aGVzZSBuZXdseSBhZGRlZCB0b2RvJ3MgYmFjayBpbnRvIHRoZSBhcnJheSwgXG5cbi8vIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyAgXG5cbi8vIEkgYWJsZSB0byBhZGQgdG9kbyBpdGVtcyBpbnRvIGEgcHJvamVjdCwgYnV0IGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgIHRoZW0/IFxuXG4vLyBkbyBJIG5lZWQgdG8gcHVzaCB0aGVtIGJhY2sgaW50byB0aGUgYXJyYXk/IFxuXG4vLyBcblxuXG5cblxuLy8gZ2V0IGFsbCB0aGUgdmFsdWVzLCB3aXRoaW4gdGhlIG1vZGFsLCBcblxuLy8gZmlyc3QgZ2V0IHRoZSB2YWx1ZXMgb2YgYWxsIHRoZSBpbnB1dCBmaWVsZHMsIFxuXG4vLyBvbmNlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgdmFsdWVzIGFyZSBzYXZlZCwgXG5cbi8vIHBhc3NlZCB0byB0aGUgc3BlY2lmaWMgcHJvamVjdHMgdG9kbyBhcnJheSwgXG5cbi8vIGFsc28gcGFzc2VkIHRvIHN0b3JhZ2UgdG9vIHNvIHRoZSB0b2RvIGFycmF5IGlzIHRoZSBzYW1lIGFzIHJlZ3VsYXIgcHJvamVjdCBhcnJheSBcblxuLy8gc28gd2UgaGF2ZSB0byBhYmlsaXR5IHRvIGdldCB0aGUgdmFsdWVzLCBcblxuLy8gYW5kIHB1c2ggdGhlbSB0byB0aGUgY29ycmVjdCBwcm9qZWN0LCBcblxuLy8gdGhleSBkbyBub3Qgc2F2ZSwgYW5kIGNsZWFyIHVwb24gcmVmcmVzaC4gXG5cbi8vIGhvdyBjYW4gSSBwdXNoIHRoZXNlIHZhbHVlcyBpbnRvIHRoZSBhcnJheSwgcGVybWFuZW50bHkgc2F2ZSB0aGVtLCBcblxuLy8gYW5kIHRoZW4gZGlzcGxheSB0aGVtPyBIb3cgY2FuIEkgZGlzcGxheSB0aGUgdG9kbydzPyBcblxuLy8gRG8gSSBoYXZlIHRvIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9qZWN0cyBhcnJheT8gXG5cbi8vIGRvIEkgaGF2ZSB0byBwYXNzIHByb2plY3QgYXJyYXkgYWdhaW4/IFxuXG4vLyB5b3Ugd2lsbCBoYXZlIHRvIGRpc3BsYXkgdGhlIHByb2plY3RzIGFnYWluIFxuXG4vLyB0aGUgdG9kbydzIGFyZSBiZWluZyB1cGRhdGVkIFxuXG4vLyBwdXNoIHRoZSB1cGRhdGVkIHByb2plY3RzQXJyYXksIGFuZCBmaW5kIGEgd2F5IHRvIGRpc3BsYXkgdG9kbydzLFxuXG4vLyBcblxuXG5cblxuLy8gY29uc3QgQXBwID0gICgoKSA9PiB7XG4vLyAgIC8vIGxldCBwcm9qZWN0QXJyYXkgPSBbXVxuLy8gICBsZXQgY3VycmVudFByb2plY3RcblxuLy8gICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4vLyAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0ID0gY3VycmVudFByb2plY3QpIHtcbi8vICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3QuZmlsdGVyKHAgPT4gcC5pZCAhPT0gcHJvamVjdC5pZClcbi8vICAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KVxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHtzZXRDdXJyZW50UHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3R9XG4vLyB9KSgpXG5cblxuXG4vLyBIZWxsbywgSSBhbSBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG9kbywgSSdtIHRyeWluZyB0byBpbXBsZW1lbnQgc29tZSBsb2dpYyB0aGF0IHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgcHJvamVjdCBidG4sIGl0IHdpbGwgY2xlYXIgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBET00sIGFuZCBpbiB0aGUgXCJ5b3VyIHByb2plY3RzXCIgc2VjdGlvbi4gQmFzaWNhbGx5IGp1c3QgdXNpbmcgYSBsaXN0ZW5lciwgdGhhdCB3aGVuIHRoZSB1c2VyIGNvbmZpcm1zIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgSSBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIGRpc3BsYXksIHRoZW4gcmVtb3ZlIHRoZSB2YWx1ZS4gVGhlIHByb2JsZW0gaXMgSSBnZXQgdW5kZWZpbmVkIHdoZW4gSSB0cnkgdGhpcyBhcHByb2FjaCwgd2hpY2ggaXMgc3RyYW5nZSBiZWNhdXNlIEknbSBnZXR0aW5nIHRoZSBlbGVtZW50LCB0aGVyZSBpcyBhIHZhbHVlIGluc2lkZSB0aGVyZSwgdGhlbiBqdXN0IHVzaW5nciAudmFsdWUuIFxuXG5cblxuLy8gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB3aXRoIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgdHJhc2ggaWNvbi9kZWxldGUgYnRuIGFuZCB0aGV5IGNvbmZpcm0gXG5cbi8vIHRoZXkgd2FudCB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgd2FudCB0byBkZWxldGUgaXQgZnJvbSBtYWluIGNvbnRhaW5lciBhcyB3ZWxsIGFzIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBOb3Qgc3VyZSBJZiBJJ20gZG9pbmcgdGhpcyByaWdodCBidXQgSSBjYW4gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIGFuZCB0aGVuIHVzZSByZXBsYWNlQ2hpbGRyZW4gdG8gY2xlYXIgdGhlIERPTSBdXG5cbi8vIGJ1dCBJIGFtIGdldHRpbmcgcHJldHR5IHN0dWNrIG9uIGhvdyB0byBkZWxldGUgaXQgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uPyBcblxuLy8gQmFzaWNhbGx5IEkgdGhpbmsgb2Ygc29tZWhvdyBnZXR0aW5nIHRoZSB2YWx1ZSBmcm9tIHRoZSBtYWluIGNvbnRhaW5lciwgYXMgd2VsbCBhcyB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gdXNpbmcgcmVtb3ZlQ2hpbGQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgaW4gYm90aCBwbGFjZXMsIFxuXG5cblxuICBcbi8vIE9LIHdlbGwgdGhpcyBpcyBvbmUgd2F5IHRvIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhY2Nlc3MgdGhhdCBzYW1lIHByb2plY3QgbmFtZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gYW5kIGRlbGV0ZSB0aGF0PyBcblxuLy8gSSBuZWVkIHRvIGFsc28gZGVsZXRlIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgd2l0aGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24uIGxvb2sgdXAgcmVwbGFjZUNoaWxkcmVuXG5cbi8vIG5vdCBnb2luZyB0byB3b3JrIGJlY2F1c2Ugd2hhdCBhcmUgeW91IHJlcGxhY2luZyB3aXRoPyBIb3cgZG8geW91IGtub3cgd2hpY2ggZWxlbWVudCB0byByZXBsYWNlIGl0IHdpdGg/IFxuXG5cblxuLy8gbGV0IGNhbmNlbEJ0bkFycmF5ID0gQXJyYXkuZnJvbShjYW5jZWxCdG5BZGRUb2RvTW9kYWwpO1xuXG5cblxuLy8gZ3JhYiB0aGUgbWFpbiBjb250YWluZXIsIFxuXG4vLyBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuLy8gY29uc29sZS5sb2cobWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMpO1xuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZXNDbGlja0V2ZW50KGFycmF5KSB7IFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICBsZXQgcHJvamVjdE5hbWVJbmRleCA9IHByb2plY3RBcnJheVtpXTsgXG4gICAgXG4vLyAgIH1cbi8vIH1cblxuLy8gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChwcm9qZWN0QXJyYXkpO1xuXG5cblxuLy8gSSB0aGluayBJIE5lZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBkb24ndCB3YW50IHRvIGhhdmUgdG9vIG11Y2ggZ29pbmcgb24gaW4gb25lIGZ1bmN0aW9uLCBcblxuLy8gdXNlIHRoZSBzYW1lIGxvZ2ljLCBsb29wIHRocm91Z2ggcHJvamVjdCBhcnJheSwgXG4gXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SW5kZXgucHJvamVjdCk7XG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG9rIG5leHQsIHByb2plY3QgbmFtZXMgYXJlIGJlaW5nIGFkZGVkIGR5bmFtaWNhbGx5LCB0aGV5IGFyZSBwcm9wZXJseSBiZWluZyBhZGRlZCB0byB0aGUgYXJyYXkgYW5kIHByb3Blcmx5IGJlaW5nIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBuZXh0IHdoZW4gSSBjbGljayBvbiB0aGUgcHJvamVjdCwgdGhhdCBwcm9qZWN0J3MgbmFtZSBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGNsZWFyIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgZGlzcGxheSB0aGUgbmV3IHByb2plY3QsIFxuXG4vLyByZW1lbWJlciBvbmx5IG9uZSBwcm9qZWN0IGlzIGFkZGVkIGF0IGEgdGltZSwgc2hvdWxkIG5vdCBhZGQgb250by4gc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBhbG9uZyB3aXRoIHRoZSB0d28gYnRucywgYWRkIGFuZCBkZWxldGUgZm9yIHRoZSB0b2RvJ3MgXG5cbi8vIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBzaG93IHRoYXQgcHJvamVjdCwgdXNlciBjYW5ub3QgYXBwZW5kIHRoYXQgcHJvamVjdCBtdWx0aXBsZSB0aW1lcyBieSBjbGlja2luZywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3IHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCwgXG5cbi8vIHRoaXMgd2lsbCBiZSBhIHNlcGVyYXRlIGZ1bmN0aW9uLCBmaXJzdCBJIGZlZWwgbGlrZSB5b3Ugd2lsbCBuZWVkIHRvIGxvb3AgdGhyb3VnaCBwcm9qZWN0J3MgYXJyYXksIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBwcm9qZWN0IGZyb20gdGhlIGFycmF5LCBpbnNpZGUgdGhlIGxpc3RlbmVyLCBsb2dpYyB3aWxsIGdyYWIgdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gYW5kIGFwcGVuZCB2YWx1ZXMgdG8gaXQsIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCB0byBkZXRlcm1pbmUgaWYgdGhlIHByb2plY3QgaXMgYWxyZWFkeSBhZGRlZCBzdWNoIGFzIElEJ3MgbWF0Y2hpbmcsIFxuXG4vLyBpZiBJRCBtYXRjaGVzIHdoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgZnJvbSBhZGRpbmcgYWdhaW4sIGVsc2UgaWYgYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBjb250YWluZXIsIFxuXG4vLyBiZWZvcmUgdGhlIHByb2plY3QgbmFtZSBpcyBhcHBlbmRlZCB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgY2FsbCBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBpZiB0aGF0IG5hbWVzIGlkIG1hdGNoZXMgdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyBJIHdvdWxkIHNheSBmaXJzdCBsZXQncyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBjYW4gZ3JhYiBhbGwgdGhlIHByb2plY3QgbmFtZXMgYW5kIElEPyBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCwgbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIFxuXG4vLyBJJ20gbm90IHN1cmUgeW91IG5lZWQgdG8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgcHJvamVjdHMsIHNlZW1zIGxpa2UgeW91ciBnZXR0aW5nIHByb2plY3QgdGFyZ2V0IHZhbHVlLCB3aXRoIGUudGFyZ2V0LnRleHRDb250ZW50IFxuXG4vLyBub3cgSSBiZWxpZXZlIHdoYXQgeW91IG5lZWQgdG8gZmlndXJlIG91dCBpcyBob3cgdG8gZGlzcGxheSB0aGUgY2VydGFpbiBwcm9qZWN0LCBiYXNlZCBvbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgcHJvamVjdCBuYW1lIGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gcmVtZW1iZXIgcmVwbGFjZSB0aGUgY29udGVudCB3aXRoaW4gbWFpbiBjb250YWluZXIsIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgYWxsIGJhc2VkIG9uIGJ0biBjbGljayBcblxuLy8gdGhpbmsgYmFjayB0byByZXN0YXVyYW50IHBhZ2UsIFxuXG4vLyBJIHNvbWVob3cgbmVlZCB0byB0aGluayB0aGlzIG91dCwgcHJvamVjdCBuYW1lIGlzIGNsaWNrZWQsIGNsZWFyIGNvbnRlbnRzIG9mIHByZXZpb3VzIHByb2plY3QgYW5kIG1ha2Ugd2F5IGZvciBuZXcsIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCBzb21lIHNvcnQgb2YgY29uZGl0aW9uYWwsIGlmIHRoaXMgcHJvamVjdCBpcyBjbGlja2VkLCBjaGFuZ2UgdG8gYSB2YXJpYWJsZSB0aGVuIHVzZSByZXBsYWNlIGNoaWxkLiBcblxuLy8gaWYgdGhlIHZhcmlhYmxlIHRhcmdldFZhbHVlUHJvamVjdE5hbWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIG9yIHRoZSBkaXYsIFxuXG4vLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgIFxuXG4vLyBcblxuLy8gLS0gaG93IHRvIG1ha2Ugc3VyZSBvbmx5IHRoYXQgd2hlbiB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBuYW1lLCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGl0IHdpbGwgcG9wdWxhdGUsIHdpdGggdGhhdCBwcm9qZWN0IG5hbWUsIHdpcGUgdGhlIGNvbnRlbnRzIG9mIHRoZSBwcmV2aW91cyBwcm9qZWN0IGFuZCBzaG93IHRoZSBjbGlja2VkIG9uIHByb2plY3QsIFxuXG4vLyAtLSB3aHkgaXMgdGhlIHByb2plY3QncyBzZWN0aW9uIG5vdCBkeW5hbWljYWxseSBhZGRpbmcgcHJvamVjdHM/IEkgaGF2ZSB0byByZWZyZXNoIHRoZSBwYWdlIGZvciBpdCB0byBzaG93IHVwPyBcblxuLy8gaGFuZGxlIHRoZSBjb25kaXRpb25hbCBsb2dpYyBmaXJzdCwgYW5kIGNvcnJlY3RseSBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWVzIGluIHRoZSBtYWluIGNvbnRhaW5lciBmaXJzdCwgXG5cbi8vIHNvbWUgdHlwZSBvZiBjb25kaXRpb25hbCBpcyBuZWVkZWQgdG8gY29tcGxldGUgdGhpcywgcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBjYW4gYmUgZGlzcGxheWVkIGF0IGEgdGltZSwgXG5cbi8vIGlmIHByb2plY3QgY29udGFpbmVyIGluY2x1ZGVzIHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBwcm9qZWN0LCBcblxuLy8gc2hvdWxkIGl0IGJlIHNpbWlsYXIgdG8gcmVzdGF1cmFudCBwYWdlLCBlYWNoIHByb2plY3QgaXMgZ2l2ZW4gYSB2YXJpYWJsZSwgdGhlbiBpZiB0aGF0IHByb2plY3QgaXMgY2xpY2tlZCBvbiBpdCdzIGdpdmVuIGEgdmFyaWFibGUgb3IgaW5kZXgsIFxuXG4vLyB0aGVuIGNvbmRpdGlvbmFsIHdpbGwgY2hlY2sgaWYgdGhhdCBwcm9qZWN0J3MgSUQsIG1hdGNoZXMgd2hhdCBpcyBpbnNpZGUgdGhlIG1haW4gY29udGFpbmVyLCBpZiBub3QgY2xpY2tlZCwgcmVwbGFjZSB3aXRoIG5ldyBjbGljaywgXG5cbi8vIGlmIGl0IGlzIGNsaWNrZWQgYWdhaW4sIHByZXZlbnQgdGhlIHVzZXIgZnJvbSByZXBsYWNpbmcgdGhlIGNvbnRlbnQsIFxuXG4vLyByZXBsYWNlIHRoZSBjb250ZW50IHdpdGggdGhlIHByb2plY3RzIHVucWl1ZSBJRCwgaWYgcHJvamVjdC5pZCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSwgcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyB0aGF0IGJ0biBhZ2FpbiwganVzdCByZXR1cm4sIFxuXG4vLyBjYW4gd2UgZ28gYmFjayBhbmQgbG9vayBhdCB3aGF0IHlvdSBkaWQgcHJldmlvdXNseSB3aXRoIHlvdXIgY29kZT9cblxuLy8gSSBkb24ndCB0aGluayBpdCdzIHRoZSBzYW1lIHByZXZpb3VzbHksIGJlY2F1c2Ugd2UgYXJlIHVzaW5nIGEgZGl2IGhlcmUgaW5zdGVhZCBvZiBhIGJ1dHRvbiwgXG5cbi8vIEkgd2FudCB0byBmaW5kIGEgd2F5IHRoYXQgSSBjYW4gb25seSBkaXNwbGF5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24sIHNob3VsZCBhZGQgZHVwbGljYXRlcywgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCByZXBsYWNlIGNvbnRlbnRzIG9mIG9sZCBhbmQgd2lwZSB0aGUgbmV3LCBcblxuLy8gSSB0aGluayB0aGUgRE9NIERpc3BsYXkgaXMgZmluZSwgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSBhIGZ1bmN0aW9uLCBjcmVhdGluZyBhIGRpdiB0aGF0IHN0b3JlcyB0aGUgcHJvamVjdHMgbmFtZSwgXG5cbi8vIG5vdyBvbmNlIHRoZSBwcm9qZWN0IGlzIGNsaWNrZWQgb24sIGxvb3AgdGhyb3VnaCBzdG9yYWdlLCBmaW5kIG91dCB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uIGFuZCBkaXNwbGF5J3MgaXQncyBjb250ZW50cywgXG5cbi8vIHN0aWNrIHdpdGggaG93IHlvdSBhcmUgZGlzcGxheWluZyB0aGUgcHJvamVjdHMgaW4gdGhlIERPTSwgXG5cbi8vIGhvdyB3aWxsIHlvdSBhZGQgdGhpbmdzIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBkaXNwbGF5IG9ubHkgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbj8gXG5cbi8vIG1ha2UgYSBsb29wIGdldCB0aGUgcHJvamVjdCdzIElELCBjb21wYXJlIHRoZSBJRCB0byB0aGUgSUQgdGhhdCB3YXMgY2xpY2tlZCBvbiwgXG5cblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24odmFsdWUpIHsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZSA9IHZhbHVlOyBcblxuLy8gICBsZXQgcHJvamVjdFZhbHVlSUQgPSBwcm9qZWN0VmFsdWUuaWQ7IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHByb2plY3RWYWx1ZVtcInByb2plY3RcIl07ICBcblxuLy8gICBsZXQgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXG5cbi8vIGhlcmUgdG8gdG9wIG9mIGZ1bmN0aW9uLCBcblxuXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGZvciAobGV0IHByb2plY3QgaW4gbG9jYWxTdG9yYWdlKSB7IFxuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0OyBcbiAgLy8gICAgIGxldCBuYW1lcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyhuYW1lcyk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykgeyBcbiAgLy8gICAgIGxldCB5ID0gbG9jYWxTdG9yYWdlLmtleShcIlByb2plY3QtTmFtZXNcIik7XG4gIC8vICAgICBjb25zb2xlLmxvZyh5KTtcbiAgLy8gICB9XG4gIC8vIH0gXG4gIC8vICAgZm9yKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIC8vIGxldCB4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgbGV0IHggPSBwcm9qZWN0W1wia2V5XCJdOyBcblxuICAvLyAgICAgLy8gbGV0IHhpZCA9IHByb2plY3RbXCJpZFwiXTsgXG5cbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHhpZCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyh4KTtcbiAgLy8gICB9XG4gIC8vIH0pXG5cblxuICAvLyBvbGQgbG9naWMgYmVsb3cgXG5cbiAgLy8gcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAvLyAgIGxldCB0YXJnZXRWYWx1ZVByb2plY3ROYW1lID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuICAgIFxuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZUlEKTtcblxuICAvLyAgIC8vIGlmIChwcm9qZWN0VmFsdWVJRCA9PT0gdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSkgeyBcbiAgLy8gICAvLyAgICAgICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIik7XG4gIFxuICAvLyAgIC8vICAgIH1cblxuXG5cbiAgLy8gICBsZXQgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgLy8gICBwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1kaXYtc3R5bGVzLW1haW5cIik7XG4gICAgXG4gIC8vICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdO1xuXG4gIC8vICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gIC8vICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAvLyAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZU1haW5Db250YWluZXJEaXYpO1xuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmFwcGVuZCh0YXJnZXRWYWx1ZVByb2plY3ROYW1lKTtcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbik7IFxuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcblxuICAvLyB9KVxuXG4gIC8vIGhlcmUgdG8gYm90dG9tIGJyYWNrZXQgXG5cbi8vICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZXMtc3R5bGVzLW5hdmJhci1zZWN0aW9uXCIpO1xuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFwcGVuZChzdHJpbmdWYWx1ZSk7XG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdk5hbWVCdG5OYXZiYXIpO1xuXG4vLyB9XG5cblxuLy8gZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuLy8gICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuLy8gICBsZXQgdmFsdWVJblByb2plY3QgPSBwYXJzZURhdGFbcHJvamVjdEluZGV4XTsgXG5cbi8vICAgbGV0IHN0cmluZ1ZhbHVlID0gdmFsdWVJblByb2plY3RbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiMnJlbVwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgcHJvamVjdERpdi5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG5cbi8vICAgY29uc29sZS5sb2coc3RyaW5nVmFsdWUpO1xuXG5cblxuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHgpOyBcblxuLy8gICBsZXQgbmF2YmFyUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBuYXZiYXJQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyh2YWx1ZUluUHJvamVjdCk7XG5cbi8vICAgLy8gbGV0IHByb2plY3RWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlRGF0YSk7XG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdFZhbHVlcyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHBhcnNlRGF0YSk7XG4vLyAgIC8vIGxldCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpOyBcbi8vICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9ICBcblxuXG5cblxuXG5cblxuXG5cblxuLy8gXG5cblxuXG5cblxuXG5cblxuXG4vLyBtYWtlIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIGNvbnRlbnRzIG9mIGxvY2FsIHN0b3JhZ2UsIFxuLy8gYXBwZW5kcyB0aGUgcmVzdWx0IHRvIHRoZSBET00uIFxuXG4vLyBmdW5jdGlvbiBwcmludFN0b3JhZ2VUb0RvbSgpIHsgXG4vLyAgIC8vIGxldCBnZXRTdG9yYWdlSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuLy8gICAvLyBsZXQgcGFyc2VkSXRlbXMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2VJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHBhcnNlZEl0ZW1zKTtcbi8vICAgLy8gbGV0IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHBhcnNlZEl0ZW1zKTtcblxuIFxuXG4vLyAgIGxldCBuYXZQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcbi8vICAgbmF2UHJvamVjdHNDb250YWluZXIuYXBwZW5kKHN0dXBpZFZhbHVlKTtcbi8vIH0gXG5cblxuLy8gcHJpbnRTdG9yYWdlVG9Eb20oKTtcblxuXG5cblxuXG4gIC8vIGxldCBnZXRTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcblxuICAvLyBsZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbiAgLy8gcHJvamVjdEFycmF5LnB1c2gocGFyc2VEYXRhKTtcblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTsgXG5cbi8vIGNvbnNvbGUubG9nKGZvcm1FbGVtZW50KTtcblxuLy8gZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KVxuXG5cbi8vIFllYWgsIEkgdGhpbmsgZm9jdXNpbmcgb24gdGhlIGJhc2ljIGlkZWEgb2YgaG93IHRvIGNyZWF0ZSBhIHByb2plY3QgYW5kIFxuLy8gdG8gZGlzcGxheSB0aGUgY29ycmVjdCBwcm9qZWN0IHdoZW4gaXRzIHNpZGViYXIgYnV0dG9uIGlzIGNsaWNrZWQgd291bGQgYmUgbXkgZmlyc3Qgc3RlcC4gXG4vLyBUaGVuIHlvdSBjYW4gdGhpbmsgYWJvdXQgd2hhdCBzaG91bGQgYmUgb24gdGhlIHByb2plY3QncyBwYWdlOiB0aGV5IHdpbGwgbmVlZCBidXR0b25zIHRvIGFkZCBhIHRhc2sgYW5kIHdoYXQgbm90XG5cbi8vIGhhdmUgdGhlIHVzZXIgZW50ZXIgYSBwcm9qZWN0IG5hbWUsIGFuZCBzYXZlIHRoZSB2YWx1ZSwgcGFzcyB0aGF0IHZhbHVlIHRvIHN0b3JhZ2UuIFxuXG4vLyB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgc2F2ZWQsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgYWRkIGJ0biwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgZ2V0IHRoZSBpbnB1dCBmaWVsZCwgY2FwdHVyZSBpdCdzIHZhbHVlIHRoZW4gY29uc29sZSBsb2cgaXQgXG5cbi8vIHRoZSBpc3N1ZSBvZiB0aGUgdGV4dCBpbiB0aGUgaW5wdXQgZmllbGQgYmVpbmcgY2xlYXJlZCwgXG5cbi8vIHdlbGwgSSB3cmFwcGVkIGl0IGluc2lkZSBhIGZvcm0gdGFnLCBpdCB3b3JrcyBidXQgaXQgcmVmcmVzaGVzIHRoZSBwYWdlLCBJIG1lYW4gaXMgdGhhdCBhIHByb2JsZW0sIFxuXG4vLyBJIGd1ZXNzIG5vdyBJJ2xsIHdvcmsgb24gc3RvcmluZyB0aGUgZGF0YSwgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBoYW5kbGVzIERPTSBsb2dpY1xuLy8gZXhwb3J0IHRoZW4gaW1wb3J0IHdpdGhpbiBhbm90aGVyIGZpbGUgXG5cbi8vIGltcG9ydCB7IHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250ZW50VHlwZSB9IGZyb20gXCJtaW1lLXR5cGVzXCI7XG4vLyBpbXBvcnQgXCIuL2V2ZW50TGlzdGVuZXJNb2R1bGVcIjsgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0Rm9ybUlucHV0KCkgeyBcblxuLy8gICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkLXRleHRcIik7XG5cbi8vICAgaW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiTmFtZSB5b3VyIHByb2plY3RcIjtcblxuLy8gICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29udGFpbmVyXCIpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuLy8gICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbi8vICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4vLyAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiKTtcblxuLy8gICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG5cbi8vICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLWNvbnRhaW5lclwiKTtcblxuLy8gICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbi8vICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuLy8gfSBcblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdE5hbWVUb0RPTSh2YWx1ZSkgeyBcblxuLy8gICBsZXQgdXNlcklucHV0VmFsdWUgPSB2YWx1ZTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKTtcblxuLy8gICBsZXQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbi8vICAgLy8gZ2V0IHRoZSBlbGVtZW50IGFuZCB0cnkgdG8gdXNlIGl0IGluc2lkZSBldmVudCBsaXN0ZW5lciBtb2R1bGUsIFxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uLW5hbWUtYnRuLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZWxlbWVudC1mcm9tLW5hdmJhci1zZWN0aW9uXCIpOyBcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1wcm9qZWN0LW5hbWUtZGl2XCIpO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgXG5cbi8vIC8vIGlmIChwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmluY2x1ZGVzKHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uKSkgeyBcbi8vIC8vICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuLy8gLy8gfVxuXG4vLyAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiSGV5IHlvdSBjbGlja2VkIHRoZSBwcm9qZWN0IG5hbWVcIik7XG5cbi8vICAgICBwcm9qZWN0TmFtZUVsZW1lbnRNYWluLmlubmVyVGV4dCA9IHVzZXJJbnB1dFZhbHVlO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBhZGRUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgICBcbi8vICAgICAvLyB3aGVuIGJ0biBpcyBjbGlja2VkIGl0IHdpbGwgZ2VuZXJhdGUgYSBwb3AtdXAgZm9ybSBcbi8vICAgICAvLyBJIHRoaW5rIHlvdSBuZWVkIGEgY29udGFpbmVyLCBhIGRpdiB0aGF0IGhvbGRzIHRoZSBjb250ZW50LCBhcHBlbmQgdGhlIGRpdiB0byB0aGUgY29udGFpbmVyLCBcbiAgICBcbi8vICAgICBhZGRUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpeyAgXG4gICAgICBcbi8vICAgICAgIC8vIGlmIChtYWluQ29udGVudFByb2plY3RDb250YWluZXIuaW5jbHVkZXMoc29tZUJ0bikpIHtcbi8vICAgICAgIC8vICAgc29tZUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4vLyAgICAgICAvLyB9XG5cbiAgICBcblxuLy8gICAgICAgLy8gcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uZGlzYWJsZWQgPSB0cnVlOyBcblxuLy8gICAgICAgLy8gc29tZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vICAgICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tcG9wLXVwLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgICAgIGxldCB0aXRsZU9mVG9Eb0lucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgICAgdGl0bGVPZlRvRG9JbnB1dEZvcm0udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCIgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCIgdW5kZXJsaW5lXCI7XG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICAgIC8vIGluIG9yZGVyIHRvIGNlbnRlciBpdCB5b3UgbmVlZCB0byBhcHBlbmQgdGhpcyBlbGVtZW50IFxuXG4vLyAgICAgICAvLyB0byBhbm90aGVyIGNvbnRhaW5lciBcblxuLy8gICAgICAgbGV0IHN1Ym1pdFRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgc3VibWl0VGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRhc2stYnRuLWNvbnRhaW5lci1zdHlsZXNcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1wb3AtdXAtZmllbGRcIik7XG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiOyBcblxuLy8gICAgICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBsZXQgcG9wVXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gICAgICAgcG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtY29udGVudFwiKTtcblxuLy8gICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXQtZmllbGQtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBsZXQgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjsgXG5cbi8vICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7IFxuXG4vLyAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuLy8gICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG4tdG8tZG8taW5wdXRcIilcblxuLy8gICAgICAgY2xvc2VCdG4uc3JjID0gXCIuLi9jbG9zZS1jaXJjbGUucG5nXCI7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgY29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4vLyAgICAgICB1cmdlbmN5TGFiZWwudGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lEcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7IFxuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlVyZ2VuY3lcIjtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmNsYXNzTGlzdC5hZGQoXCJ1cmdlbmN5LWRyb3Bkb3duLXN0eWxlc1wiKTtcblxuXG5cbi8vICAgICAgIGxldCB1cmdlbmN5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiIFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjsgXG5cbi8vICAgICAgIGxldCB1cmdlbmN5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTsgXG5cbi8vICAgICAgIHVyZ2VuY3lMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiOyBcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgZGF0ZVBpY2tlckxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiO1xuXG4vLyAgICAgICBsZXQgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbi8vICAgICAgIGRhdGVQaWNrZXIudHlwZSA9IFwiZGF0ZVwiO1xuXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lIaWdoKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lNZWRpdW0pO1xuXG4vLyAgICAgICB1cmdlbmN5RHJvcERvd24uYXBwZW5kQ2hpbGQodXJnZW5jeUxvdyk7IFxuXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0VGFza0J0bik7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlT2ZUb0RvSW5wdXRGb3JtKTsgXG4gICAgICBcbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnRMYWJlbCk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeUxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cmdlbmN5RHJvcERvd24pOyBcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyTGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG5Db250YWluZXIpOyBcblxuICAgIFxuXG4vLyAgICAgICAvLyBzaG91bGQgYXBwZW5kIGVsZW1lbnRzIHRvIHRoZSBjb250ZW50IGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyPyBcblxuLy8gICAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuLy8gICAgIH0pIFxuXG4vLyAgICAgYWRkVG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvRG9cIjtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb0RvQnRuKTsgXG5cbi8vICAgfSkgXG5cblxuLy8gcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbik7XG5cblxuXG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9NYWluKCkgeyBcbi8vICAgY29uc29sZS5sb2coXCJIZXkgSSdtIGluIGhlcmVcIik7XG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50TWFpbik7IFxuXG4vLyAgICAgbGV0IHNvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuLy8gICAgIHNvbWVCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZUJ0bik7IFxuXG4vLyB9XG5cblxuXG4vLyBJJ20gYWJsZSB0byBnZXQgdGhlIHVzZXIgdmFsdWUsIEkgYW0gYWJsZSB0byBsb2cgb3V0IGl0J3MgdmFsdWUsIEkgYW0gYWJsZSB0byBncmFiIHRoZSBwcm9qZWN0cyBjb250YWluZXIgc2VjdGlvbixcblxuLy8gaXQgc3RpbGwgcmV0dXJucyBhbmQgSFRNTCBlbGVtZW50LCBJIGNhbiB0dXJuIGl0IGludG8gYW4gYXJyYXksIGJ1dCBJIGFtIHVuc3VyZSBvZiBob3cgdG8gYXBwZW5kIHRvIHRoZSBET00uIFxuXG5cbi8vIHdoYXQgSSB3YW50LCB0aGUgdXNlciB3aWxsIGVudGVyIHByb2plY3QgbmFtZSwgSSB3YW50IHRoYXQgbmFtZSB0byBhcHBlYXIgaW4gdGhlIHByb2plY3QncyBzZWN0aW9uIGFuZCBtYWluIGNvbnRlbnQgc2VjdGlvbihibHVlIHBhcnQpOyBcblxuLy8gUHJvYmxlbTogSSBhbSBjb25mdXNlZCBvbiBob3cgdG8gYXBwZW5kIHRoaXMgcHJvamVjdCBuYW1lIHRvIHRoZSBET00uIFxuXG4vLyBXaGF0IEkndmUgdHJpZWQ6IE9uY2UgdGhlIGFkZCBidG4gaXMgcHJlc3NlZCwgdGhlIHZhbHVlL25hbWUgb2YgcHJvamVjdCB3aWxsIGJlIHNhdmVkLCBhbmQgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhhdCBcblxuLy8gdmFsdWUgYW5kIHByaW50cyB0byB0aGUgRE9NLiBcblxuLy8gSSBhbSBhYmxlIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBjb250YWluZXIsIGFuZCB0aGUgbWFpbiBzZWN0aW9uIGJ1dCBpdCdzIGFuIEhUTUwgY29sbGVjdGlvbiwgSSBjYW4gY29udmVydCBpdCBpbnRvIGFuIGFycmF5LCBcblxuLy8gYnV0IGhvdyBjYW4gSSBhcHBlbmQgYW4gYXJyYXkgdG8gdGhlIERPTT8gIiwiLy8gYWRkIHRoZSBldmVudCBsaXN0ZW5lciBtb2R1bGVcblxuLy8gaW1wb3J0IFwic3JjL2V2ZW50TGlzdGVuZXJNb2R1bGUuanNcIjtcblxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG5pbXBvcnQgXCIuL3N0b3JhZ2VcIjsgXG5cbmltcG9ydCB7IHByb2plY3RBcnJheSwgcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24sIHByaW50VmFsdWVzVG9ET00gfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG5sZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbmxldCBwYXJzZURhdGEgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UpOyBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdE5hbWVMb29wKCkgeyAgIFxuZm9yIChsZXQgdmFyaWFibGUgaW4gcGFyc2VEYXRhKSB7IFxuXG4gICAgIGxldCBwcm9qZWN0SW5kZXggPSB2YXJpYWJsZTsgXG5cbiAgICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTsgXG5cbn0gIFxuXG59IFxuXG5wcm9qZWN0TmFtZUxvb3AoKTtcbiAgXG5wcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7ICBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBvayB3ZSBoYXZlIHNvbWV0aGluZyB3b3JraW5nIGhlcmUsIFxuXG4vLyB5b3UgaGF2ZSB0d28gZnVuY3Rpb25zLCBcblxuLy8gYXQgbGVhc3QgZGF0YSBpcyBiZWluZyBwcmludGVkIHRvIHRoZSBET00sIGFuZCBpcyBzdG9yaW5nIGluIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuXG4vLyBjaGVjayB5b3VyIGZ1bmN0aW9ucyBhZ2FpbiwgXG5cbi8vIHJlbWVtYmVyIG9uZSB0byBjcmVhdGUgdGhlIGVsZW1lbnRzL3N0eWxlLCBvdGhlciB0byBqdXN0IGRpc3BsYXkgdGhlIGN1cnJlbnRQcm9qZWN0cyB0b2RvJ3MgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byBncmFiIHRoZSBtYWluIGNvbnRhaW5lciwgYXBwZW5kIHZhbHVlcywgc3R5bGUsIFxuXG4vLyB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIGp1c3QgZGlzcGxheSB0aGVtLiBcblxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuXG5cbi8vIGZvciAobGV0IHRvZG8gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgIGxldCB0b2RvSXRlbSA9IHBhcnNlVG9kb0l0ZW1zOyBcblxuLy8gICAgICBsZXQgdmFsdWVJblRvZG8gPSBwYXJzZVRvZG9JdGVtc1t0b2RvSXRlbV07IFxuXG4vLyAgICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Ub2RvKTsgXG5cbi8vICAgICAgLy8gY29uc29sZS5sb2codG9kb0l0ZW0pO1xuLy8gfVxuXG4vLyBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7XG5cblxuXG5cblxuXG4vLyBzdG9yZSB0aGUgdG9kb3MgbGlrZSBJIGRpZCB3aXRoIG5hbWVzLCBcblxuLy8gbG9vcCB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0YWtlIGluIHByb2plY3QsIGFkZCB0aGUgdmFsdWVzLCBcblxuLy8gcHVzaCB0aGUgcHJvamVjdCBiYWNrIGludG8gcHJvamVjdHMgYXJyYXksIGFuZCB0aGVuIFxuXG4vLyBwYXNzIHRoZSBwcm9qZWN0c0FycmF5IGJhY2sgdG8gRE9NIGZ1bmN0aW9uLCBhbmQgc3RvcmFnZSwgXG5cbi8vIGFkZCB0aGUgdG9kbydzIG9uIGEgcHJvamVjdCwgdXBkYXRlIGl0IGFnYWluIFxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhwYXJzZVRvZG9JdGVtcyk7XG5cblxuLy8gaG93IGNhbiBJIGtlZXAgbXkgdG9kbydzIGFmdGVyIHBhZ2UgcmVmcmVzaD8gWWVzdGVyZGF5IGl0IHNlZW1lZCBsaWtlIGl0IHdhcyBhIHByb2JsZW0gaW4gaG93IEknbSBzdG9yaW5nIHRoZW0gYW5kIGhvdyBJIHBhcnNlIHRoZW0gXG5cbi8vIGl0IHNlZW1zIGxpa2UgaXQgaXMgYSBzdG9yYWdlIHByb2JsZW0sIGhvdyBjYW4gSSBwcm9wZXJseSBzdG9yZSB0aGUgdG9kbyBhcnJheSB3aXRoaW4gZWFjaCBwcm9qZWN0LCBcblxuLy8gdHJ5IHRvIHBhcnNlIHRoZSBkYXRhIGxpa2UgdSBkaWQgYmVmb3JlPyBcblxuXG4vLyBsZXQgZ2V0VG9kb0l0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvSXRlbXNcIik7IFxuXG4vLyBsZXQgcGFyc2VUb2RvSXRlbXMgPSBKU09OLnBhcnNlKGdldFRvZG9JdGVtcyk7IFxuXG5cbi8vIGZ1bmN0aW9uIHBhcnNlVG9kbygpIHsgXG4vLyAgICAgIGZvciAobGV0IGl0ZW0gaW4gcGFyc2VUb2RvSXRlbXMpIHsgXG4vLyAgICAgICAgICAgbGV0IHRvZG8gPSBpdGVtOyBcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvKTtcbi8vICAgICAgfVxuLy8gfSBcblxuLy8gcGFyc2VEYXRhKCk7XG5cblxuLy8gT0sgc28gdGhlIGRlbGV0aW5nIHByb2plY3QgbWV0aG9kIHdvcmtzISEgSSBhbSBub3cgYWJsZSB0byBkZWxldGUgYSBwcm9qZWN0IGZyb20gbWFpbiBhcyB3ZWxsIGFzIHRoZSBuYXZiYXIsIFxuXG4vLyBuZXh0IEkgZGlkIHRvIGFkZCB0aGUgbG9naWMgc28gdGhlIHVzZXIgY2FuIGFkZCB0b2RvJ3MsIFxuXG4vLyByZW1lbWJlciB0b2RvJ3MgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0IG9iaiBhcnJheSwgXG5cbi8vIGZpcnN0IHdlIHByb2JhYmx5IG5lZWQgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FwdHVyZSB0aGUgdmFsdWUgXG5cbi8vIG9uIGVhY2ggaW5wdXQgZmllbGQsIGxldHMgc3RhcnQgdGhlcmUsIFxuXG4vLyBhIGZ1bmN0aW9uIHdpbGwgYmUgbmVlZGVkIHRvIGdldCB0aGUgY29ycmVjdCBpbnB1dCBmaWVsZHMgXG5cbi8vIGFuZCB0aGVuIGdldCB0aGUgdmFsdWVzIGZyb20gdGhlbSwgXG5cblxuXG5cbi8vIHRoaW5raW5nIG9mIHRoZSBuZXh0IHN0ZXAgYWZ0ZXIgdGhlIGRlbGV0aW5nIHByb2plY3RzLCBcblxuLy8gdGhhdCB3b3VsZCBiZSBnZXR0aW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBpbnB1dCBhbmQgXG5cbi8vIHB1c2hpbmcgdGhlbSBiYWNrIGludG8gdGhlIHRvZG8gYXJyYXkgdGhhdCBlYWNoIHByb2plY3QgY29udGFpbmVycyBcblxuLy8geW91IHdpbGwgbmVlZCBhY2Nlc3MgdG8gdGhhdCB0b2RvIGFycmF5LCB0cnkgYSBzaW1wbGUgbG9nIGZpcnN0IFxuXG4vLyBidXQgdGhlIHRvZG8ncyB3aWxsIGJlIGFkZGVkIHRvIHRoZXJlIGJ1dCBhbHNvIGl0IG5lZWRzIHRvIGJlIFxuXG4vLyByZWZsZWN0ZWQgaW4geW91ciBET00gdG9vLCBcblxuLy8gc28gdGhpbmtpbmcgb2Ygc29tZSB3YXkgdG8gYWNjZXNzIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGUgb2JqIFxuXG5cbi8vIGlmIHlvdSBjYW4gYWNjZXNzIGl0IHlvdSBhZGQgdGhlIHZhbHVlcyB0byBpdCwgXG5cbi8vIHRoZW4gb25jZSB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgcHJvcGVybHkgd2l0aGluIGVhY2ggb2JqZWN0LCBcblxuLy8geW91IHdhbnQgdG8gcmVmbGVjdCB0aGF0IGluIHRoZSBET00sIGFjY2VzcyB0aGUgdG9kbyBhbmQgZGlzcGxheSBpdCdzIHByb3BlcnRpZXMgXG5cbi8vIHRoZW4gaGF2aW5nIGEgd2F5IHRvIGRlbGV0ZSB0b2RvJ3MgYW5kIGhhdmluZyB0aGF0IHVwZGF0ZSBcblxuLy8gd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00uIFxuXG5cbi8vIGdldHRpbmcgcHJvamVjdCBJRCBcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4gICAgIFxuLy8gICAgICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgICBsZXQgcHJvamVjdFZhbHVlID0gcHJvamVjdEluZGV4LmlkOyBcbiAgICAgXG4vLyAgICAgIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZSk7XG4vLyB9IFxuXG5cblxuXG5cblxuXG4vLyBnZXQgdGhlIHByb2plY3QncyBJRCwgZ2V0IHRoZSBJRCdzIHdpdGhpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgYW5kIHRoZSBJRCdzIHdpdGhpbiB0aGUgbWFpbiBzZWN0aW9uLCBcblxuLy8gY3JlYXRlIGEgbG9vcCBpbnNpZGUgZWFjaCBzZWN0aW9uIGFuZCBnZXQgdGhlIHZhbHVlLCBcblxuXG5cblxuLy8gd2VsbCB5b3UgY2FuIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGFuZCB0aGUgYnRuIGNvbnRhaW5lciBmcm9tIHRoZSBET00sIFxuXG4vLyBjYW4gd2UgZmlndXJlIG91dCBhIHdheSB0byBkZWxldGUgdGhlIHByb2plY3QsIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGxldHMgdGFrZSBhIGxvb2sgYXQgaG93IHRoZSB2YWx1ZSBpcyBzdG9yZWQsIFxuXG4vLyBmaWd1cmUgb3V0IGhvdyB0aGUgdmFsdWVzIGFyZSBzdG9yZWQgYW5kIHNlZSBpZiBzb21laG93IHlvdSAgXG5cbi8vIGdyYWIgYSB2YWx1ZSwgb3IgdGhlIGNvbnRhaW5lciBkaXYgdGhhdCBjb250YWlucyB0aGUgdmFsdWUuXG5cblxuLy8gSSBhbSBhYmxlIHRvIGdyYWIgdGhlIHZhbHVlcyB3dGloaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyBJIHRoaW5rIEkgbmVlZCB0byB1c2UgYSBsb29wLCB0byBnZXQgYWxsIHRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHRoZSB2YWx1ZSdzIHRleHQgY29udGVudCBtYXRjaGVzLCBzZXQgdGhlIHRleHRDb250ZW50IHRvIFwiXCIgb3IgZGVsZXRlIHRoZSBlbGVtZW50LCBcblxuLy8gdHJ5IHRvIGxvb3AgdGhyb3VnaCB0aGUgZWxlbWVudHMgd2l0aCB0aGF0IHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGlmIHZhbHVlcyBtYXRjaCwgZGVsZXRlIHRoZSB2YWx1ZSBmcm9tIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24gdGhhdCBtYXRjaGVzIG1haW4gY29udGVudHMgdmFsdWUsIFxuXG4vLyBpZCdzLCBlYWNoIHByb2plY3QgaGFzIGEgdW5xaXVlIElELCBjb21wYXJlIElEJ3MsIHdoeSBjYW50IEkgZG8sIGlmIHRoZSB0ZXh0Q29udGVudHMvc3RyaW5ncyBtYXRjaCByZW1vdmU/IFxuXG4vLyBJIGdvdCB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgZWxlbWVudCBpbiB0aGUgbWFpbiwgYW5kIGFsbCB0aGUgZWxlbWVudHMgaW4geW91ciBwcm9qZWN0cywgXG5cbi8vIGRvZXMgdGhlIHN0cmluZyBtYXRjaCB0aGUgb3RoZXIgc3RyaW5nLCBcblxuLy8gZG8gSUQncyBtYXRjaD8gXG5cblxuXG5cblxuLy8gc2FtZSBpc3N1ZSwgSSBhbSB0cnlpbmcgdG8gZ3JhYiB0aGUgdmFsdWVzLCBhbmQgaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgbWFyaywgZGVsZXRlIHRoZSBwcm9qZWN0LCBcblxuLy8gZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gYm90aCBwbGFjZXMsIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlIGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBhbmQgdGhlIGxpc3Qgb24gdmFsdWVzIGluIHRoZSB5b3VyIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBob3cgY2FuIEkgZGVsZXRlIGJvdGggaW4gdGhlIHNhbWUgcGxhY2Ugb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBcblxuLy8ganVzdCBjaGVjayB0byBzZWUgd2hlbiB0aGUgZWxlbWVudCBpcyBjcmVhdGVkIGFuZCBhcHBlbmRlZCB0byB0aGUgRE9NLCBzZWUgaWYgeW91IGNhbiBhZGQgYSBjbGFzcyB0byBpdCwgXG5cblxuLy8gd2hpbGUgd2VyZSB3YWl0aW5nIGNhbiB3ZSBnZXQgdGhlIHByb2plY3RzIElEPyBcblxuLy8ganVzdCBzaW1wbHkgdHJ5IHRvIGdldCBhIHByb2plY3RzIElELiBhbmQgbG9nIGl0LCBcblxuXG5cblxuXG5cbi8vIE9LIHRvZGF5IHRoZSBnb2FsIGlzIHRvIGZpZ3VyZSBvdXQsIGhvdyB0byBkaXNhYmxlL2V4aXQgdGhlIG1vZGFsLCBhbmQgaG93IHRvIGFjdGl2YXRlIGl0IFxuXG4vLyBiYXNlZCB1cG9uIGEgYnV0dG9uIGNsaWNrLCBcblxuLy8gdGhlbiBvbmNlIHRob3NlIGFyZSBnb29kLCB0aGVuIHdlIGNhbiBmb2N1cyBvbiB0aGUgc3R5bGluZyBvZiB0aGUgbW9kYWwsIFxuXG4vLyBmaXJzdCBsZXQncyBhZGQgdGhlIGxvZ2ljIHRoYXQgY2FuIGV4aXQgdGhlIG1vZGFsLCBcblxuLy8gZ3JhYiB0aGUgaWQgb3IgY2xhc3MgZnJvbSBIVE1MLCBhbmQgZmlyc3QgbG9nIHRoZSBlbGVtZW50IGNvcnJlY3RseSwgXG5cbi8vIHRoZW4gYWRkIGV2ZW50IGxpc3RlbmVyLCB0aGF0IHNldHMgdGhlIG1vZGFscyBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZWQgdGhlICsgaWNvbiwgc2V0IHRoZSBkaXNwbGF5IHRvIGZsZXgsIFxuXG4vLyBvayBzbyBJIGFtIGFibGUgdG8gdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBvcGVuaW5nIHRoZSBtb2RhbCBhbmQgY2xvc2luZyB0aGUgbW9kYWwsIFxuXG4vLyBub3cgeW91IHdpbGwgbmVlZCB0byBtYWtlIGxvZ2ljLCB0aGF0IHdpbGwgc2V0IHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIG1vZGFsIHRvIG5vbmUsIFxuXG4vLyB0aGVuIGlmIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIGl0IHdpbGwgcG9wLXVwLCBjYW5jZWwgaXQgd2lsbCBub3QgZGlzcGxheSBcblxuLy8gSSB0aGluayBqdXN0IGdyYWJiaW5nIHRoZSB2YXJpYWJsZXMgYXQgdGhlIHRvcCBpcyBmaW5lLCBhbmQganVzdCBpbiB0aGUgZ2xvYmFsIHNjb3BlLCBcblxuLy8gc2V0IHRoZSBkaXNwbGF5IHRvIG5vbmUsIFxuXG4vLyB3b3Jrcywgc2F2ZSBhbmQgY29tbWl0LCB0aGVuIGZpZ3VyZSBvdXQgaG93IHRvIGdldCB0aGUgZGVsZXRlIGJ0biB3b3JraW5nLCBcblxuLy8gbm93IHdvdWxkIHByb2JhYmx5IGJlIHRoZSBiZXN0IHRpbWUgdG8gZG8gdGhhdCwgc2luY2UgdGhlIGFkZCBidG4gaXMgd29ya2luZywgbm93IHdlIGNhblxuXG4vLyB3b3JrIG9uIHRoZSBsb2dpYywgdGhhdCBvbmNlIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBhbm90aGVyIG1vZGFsLCBhc2tpbmcgdGhlIHVzZXIgXG5cbi8vIGFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHByb2plY3Q/IEl0IHdpbGwgY2xlYXIgdGhhdCBwcm9qZWN0IGZvciB0aGUgRE9NIEluIG1haW4gXG5cbi8vIGJ1dCBhbHNvIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiwgXG5cbi8vLyBzdHlsZSB0aGUgbW9kYWwsIG9uZSBidG4gdG8gY29uZmlybSBhbmQgdGhlIG90aGVyIGJ0biB0byBjYW5jZWwgdGhlIG9yZGVyLCBcblxuLy8gT2sgc28gd2UgaGF2ZSB0aGUgcHJpbnQgdmFsdWVzIHRvIHRoZSBET00gZnVuY3Rpb24sIFxuXG4vLyBpZiB1c2VyIGNsaWNrcyBwcm9qZWN0IG5hbWUsIHZhbHVlcyBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIsIFxuXG4vLyBpZiB1c2VyIHByZXNzZXMsIGFkZCBvciBkZWxldGUsIGxvZ2ljIGlzIHdpdGhpbiB0aGUgc2FtZSBmdW5jdGlvbiwgXG5cbi8vIEkgZG9uJ3Qgc2VlIHRoYXQgYmVjb21pbmcgYSBwcm9ibGVtLCBteSB0aGlua2luZyBpcyB0aGF0IGl0J3MgYmV0dGVyIHRvIGRvIHRoYXQgdGhlcmUgXG5cbi8vIHRoYW4gcGFzc2luZyB0aGUgdmFyaWFibGUgdG8gYW5vdGhlciBmdW5jdGlvbiwgbWlnaHQgYXMgd2VsbCBkbyB0aGF0IGFsbCB0aGVyZSwgXG5cbi8vIHNvIHRoZSBkZWxldGUgYnRuLCBtYWtlIHRoZSBtYXJrdXAgaW4gdGhlIEhUTUwgZmlyc3QsIGZvbGxvdyB0aGUgZ3VpZGVsaW5lcyBiZWZvcmUsIGdvIHNsb3csIFxuXG5cbi8vIG1vZGFsIGlzIHdvcmtpbmcgYnV0IGp1c3QgdHJ5aW5nIHRvIGFkZCBzcGFjZSBcbi8vIGJldHdlZW4gdGhlIGVsZW1lbnRzIHRoZSBjaGVjayBhbmQgdGhlIHgsIGVsZW1lbnQgXG5cbi8vIG9rIGdvdCB0aGUgZGVsZXRlIGJ0biBtb2RhbCB3b3JraW5nIGFzIEkgd2FudCB0bywgbmV4dCBJIHdpbGwgYWRkIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudCwgXG5cbi8vIHRoYXQgb25jZSBjbGlja2VkIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsLCBcblxuLy8gZG9udCBmb3JnZXQgdG8gYWRkIHRoZSBvdmVybGF5ISBcblxuXG5cblxuLy8gbmV4dCB3aWxsIHdvcmsgb24gZGVsZXRpbmcgYSB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrbWFyaywgaXQgc2hvdWxkIGRlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIHRoZSBET00sIHRoZSBhcnJheSBcblxuLy8gYW5kIEkgYmVsaWV2ZSBmcm9tIGxvY2FsIHN0b3JhZ2UgdG9vLCB0aGVuIHdvcmsgb24gc2F2aW5nIHRvZG8gaW5mbywgZnJvbSB0aGUgbW9kYWwgYW5kIHB1c2hpbmcgaW50byB0aGUgRE9NIGFuZCBzdG9yYWdlIHdoZXJlIFxuXG4vLyBlYWNoIHByb2plY3QgaGFzIGEgbGlzdCBvZiB0b2RvJ3MsIGl0IHdpbGwgYWRkZWQgdGhlcmUgd2hpbGUgYWxzbyByZWZsZWN0aW5nIHRoYXQgaW50byB0aGUgRE9NLiBcblxuLy8geWVzIG5leHQgc3RlcCBpcyBlaXRoZXIgZGVsZXRpbmcgdGhlIHByb2plY3QsIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2sgYnRuLCBhbmQgZ2V0dGluZyBhbGwgdGhlIHVzZXIgaW5mbyBcblxuLy8gdGhhdCB3YXMgZW50ZXJlZCBhbmQgc2F2aW5nIHRoYXQgdG9kbywgdG8gdGhlIGFycmF5IG9mIHRvZG8ncyB0aGF0IGVhY2ggcHJvamVjdCBoYXMsIFxuXG5cblxuXG4vLyBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKTsgXG5cblxuXG5cbi8vIHNvIG5vdyB3ZSBmaWd1cmVkIG91dCBob3cgdG8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBtb3JlIHByb2plY3RzLCBcblxuLy8gYmFzY2ljYWxseSBjbGVhciB0aGUgRE9NLCB0aGVuIGFkZCBwcm9qZWN0cywgXG5cbi8vIG5vdyBhZGQgdGhlIGxvZ2ljLCB0aGF0IHdpbGwgZ2VuZXJhdGUgYSBtb2RhbCwgZm9yIHRoZSB1c2VyIHRvIGNyZWF0ZSBhIHRvZG8sIFxuXG4vLyBmaXJzdCBJIHdvdWxkIGp1c3QgdHJ5IGl0IHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gbWF5YmUgc2VlIGlmIHlvdSBjYW4gc3BsaXQgdGhlIGNvZGUgdXAgYSBiaXQsIFxuXG4vLyBwcmludCBhIHNpbXBsZSBtZXNzYWdlIHdpdGhpbiB0aGUgZXZlbnQgbGlzdGVuZXIgZmlyc3QsIFxuXG4vLyBvayB3b3JrcyBnb29kLCBub3cgc3RhcnQgY29uc3RydWN0aW5nIHlvdXIgbW9kYWwsIGZvbGxvdyBhbG9uZyB3aXRoIHRoZSBhcnRpY2xlLCBvciB2aWRlbywgXG5cbi8vIG5lZWRzIHRpdGxlLCBwcmlvcml0eSwgZHVlIGRhdGUsIGRlc2NyaXB0aW9uLCBcblxuLy8gdGhvc2UgdmFsdWVzIGFyZSB0aGVuIGFkZGVkIHRvIHRoZSB0b2RvIGFycmF5IHdpdGhpbiB0aGF0IHNwZWNpZmljIHByb2plY3QsIFxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBTbyBJIG5lZWQgdG8gcmVjb25zaWRlciBteSBhcHByb2FjaCwgaW5zdGVhZCBvZiBoYXZpbmcgc3RvcmFnZSByZWZsZWN0IHdoYXQgaXMgaW4gdGhlIERPTSwgXG5cbi8vIERPTSBhbmQgc3RvcmFnZSBhcmUgc2VwZXJhdGUsIHdoZW4gYSBwcm9qZWN0IG5hbWUgaXMgY3JlYXRlZCwgc2F2ZSB0byBzdG9yYWdlIGJ1dCB5b3UgYWxzbyBoYXZlIHByb2plY3QncyBhcnJheSwgXG5cbi8vIGFuZCB3aGF0ZXZlciBpcyBpbnNpZGUgcHJvamVjdHMgYXJyYXkgbmVlZHMgdG8gYmUgYXBwZW5kZWQgdG8gdGhlIERPTSwgaW4gdGhlIGNvcnJlY3QgZm9ybWF0LCB5b3UgbWF5IGhhdmUgdG8gcGFyc2Ugb3Igc3RyaW5naWZ5IHRoZSBkYXRhIHRvIHdvcmssIFxuXG4vLyByZWZsZWN0IHdoYXRldmVyIGlzIGluIHRoZSBwcm9qZWN0cyBhcnJheSB0byB0aGUgRE9NLiBcblxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gcHJpbnRQcm9qZWN0TmFtZVRvTmF2YmFyUHJvamVjdFNlY3Rpb24oKSB7IFxuLy8gICAgICBjb25zb2xlLmxvZyhcIkhleSB0aGlzIHdvcmtzXCIpO1xuLy8gICAgfVxuICAgXG5cblxuLy8gLS0gb25lIGlzc3VlIEkgbm90aWNlIGlzIHRoYXQgaWYgSSBhZGQgYSBwcm9qZWN0IG5hbWUsIEkgaGF2ZSB0byByZWZyZXNoIGZvciBpdCB0byBnZXQgaXQgdG9vIHNob3cuICEhIVxuXG5cbi8vIHdoYXQgSSB3YW50IHRvIGRvIG5leHQgaXMgdG8gdGFrZSB0aGUgdmFsdWVzL3Byb2plY3QgbmFtZXMgdGhhdCBhcmUgaW4gbG9jYWwgc3RvcmFnZSwgXG4vLyBhbmQgYXBwZW5kIHRob3NlIHRvIHRoZSBET00sIFxuLy8gZmlyc3QganVzdCB0cnkgdG8gZ3JhYiB0aGUgZWxlbW5lbnQgYW5kIGFwcGVuZCB2YWx1ZSB3aXRoaW4gdGhlIGZ1bmN0aW9uLCB0aGVuIHdvcmsgZnJvbSB0aGVyZSwgXG5cblxuXG4vLyBPSyBJIGFtIGFibGUgdG8gZG8gaXQgd2l0aGluIHRoZSBmdW5jdGlvbiBcblxuLy8gbm93IHRyeSB0byBzZXBlcmF0ZSBpdCwgcHV0IHRoYXQgbG9naWMgd2l0aGluIHRoZSBET00gTW9kdWxlLCB0aGVuIG9uY2UgeW91IGdldCB0aGF0IHdvcmtpbmcsIHN0eWxlIHdpdGhpbiBzZXBlcmF0ZSBzaGVldCwgXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkucHVzaChwYXJzZURhdGEpO1xuXG5cblxuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBibGFoIGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhibGFoKVxuLy8gICBuZXdBcnJheS5wdXNoKGJsYWgpO1xuLy8gfTtcblxuLy8gY29uc3Qgc29tZUFycmF5ID0gWyB7YTogMX0sIHtiOiAyfSwge2M6IDN9IF07XG4vLyBjb25zdCBuZXdBcnJheSA9IFsgXTtcbi8vIGZvciAoY29uc3QgcHJvamVjdCBpbiBzb21lQXJyYXkpIHtcbi8vICAgY29uc29sZS5sb2cocHJvamVjdCk7IFxuLy8gICBuZXdBcnJheS5wdXNoKHByb2plY3QpO1xuLy8gfTsgICAgXG5cblxuXG4vLyB0aGlzXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBpbmRleCBpbiBzb21lQXJyYXkpIHtcbi8vIC8vICAgY29uc29sZS5sb2coaW5kZXgpO1xuLy8gbGV0IHggPSBPYmplY3QudmFsdWVzKHNvbWVBcnJheSk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKHgpO1xuXG4vLyAgIG5ld0FycmF5LnB1c2goeCk7XG5cbi8vICAgY29uc29sZS5sb2cobmV3QXJyYXkpO1xuLy8gfTtcblxuXG5cblxuXG5cbi8vIEkgd2lsbCBuZXh0IHdyaXRlIGEgZnVuY3Rpb24gd2l0aGluIERPTSBsb2dpYywgdGhhdCB3aWxsIGdldCB0aGUgbG9jYWwgc3RvcmFnZSwgZ3JhYiB0aGUgcHJvamVjdCBuYW1lcywgdGhlbiBwcmludCB0aGVtIHRvIHRoZSBET00sIHdpdGggaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIGlmIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUsIGF0dGFjaCBhIGxpc3RlbmVyLCB0aGVuIHdpdGhpbiBsaXN0ZW5lciBsb2dpYyBhcHBlbmQgcHJvamVjdCB0byB0aGUgRE9NLCBpbiBib3RoIHBsYWNlcyBcblxuLy8geW91IHdpbGwgbmVlZCB0byBjbGVhciBtYWluIGNvbnRlbnQgdG8gbWFrZSB3YXkgZm9yIHRoZSBuZXcgY29udGVudCwgdXNpbmcgcmVwbGFjZSBjaGlsZCwgXG5cbi8vIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHRoZSBvYmogdG8gYSBzdHJpbmcsIG1ha2Ugc3VyZSBpdCdzIGluIHRoZSBwcm9wZXIgZm9ybWF0IGJlZm9yZSBhcHBlbmRpbmcsIFxuXG4vLyBpZiBqdXN0IG5lZWRzIHRvIGJlIHRoZSBzdHJhaWdodCBwcm9qZWN0IG5hbWUsIFxuXG4vLyBzbyBvbmNlIGNsaWNrZWQgcG9wdWxhdGUgd2l0aCB0d28gYnV0dG9ucywgZGVsZXRlLCBhbmQgYWRkIGJ0biwgaWYgYWRkIGJ0biBpcyBjbGlja2VkLCBnZW5lcmF0ZSBmb3JtIHdoaWNoIHdpbGwgc2F2ZSBkYXRhIGFuZCBhZGQgdG8gdG9kbydzIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYXBwZW5kIHRob3NlIHRvZG8ncyB0byB0aGUgRE9NIGFzIHRoZXkgYXJlIGFkZGVkLCBhbmQgcmVtb3ZlIGlmIHRoZXkgYXJlIGRlbGV0ZWQuIFxuXG5cblxuXG5cblxuXG5cblxuLy8gcHJvamVjdEFycmF5LmNsZWFyKCk7IFxuXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgcHJvYmxlbXMsIG9uIHN0b3JhZ2Ugd2l0aCB0b2RvIGxpc3QsIG15IGRhdGEgaXMgYmVpbmcgc3RvcmVkIGNvcnJlY3RseSwgIFxuXG4vLyBidXQgSSBhbSBub3RpY2luZyBteSBwcm9qZWN0IG5hbWVzIGFyZSBrZWVwIGdldHRpbmcgbmVzdGVkIGluc2lkZSBtdWx0aXBsZSBhcnJheSdzLCBjdXJyZW50bHkgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFyZSBtYWRlIGludG8gb2JqZWN0cyB0aGVuIG9iamVjdHMgYXJlIHBhc3NlZCB0byBhcnJheSBmb3Igc3RvcmFnZSwgb25jZSB0aGUgcGFnZSByZWxvYWRzLCBcblxuLy8gSSBwYXJzZSB0aHJvdWdoIHRoZSBkYXRhIGluIHN0b3JhZ2UsIGFuZCBwdXNoIHRoZSBkYXRhIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBkYXRhIGlzIHNhdmVkLCBcblxuLy8gbGlrZSBJIHNhaWQsIGFycmF5J3MgYXJlIGJlaW5nIG5lc3RlZCB3aXRoaW4gbXVsdGlwbGUgbGV2ZWxzIGFuZCBJJ20gbm90IHN1cmUgd2h5LiBcblxuLy8gcGljdHVyZSBhdHRhY2hlZCBhbmQgc29tZSBzbmlwcGV0cyBvZiBteSBjb2RlIGF0dGFjaGVkIGZvciBjb250ZXh0LCBJIGNhbiBhbHNvIGF0dGFjaCBteSByZXBvIGlmIHRoYXQgaGVscHMgdG8gZnVydGhlciBkZWJ1ZyB0aGlzLCBcblxuXG5cblxuXG5cbi8vIEkgdGhpbmsgSSBjYW4ganVzdCBwdXQgdGhlIGFycmF5IHdpdGhpbiBzdG9yYWdlIGFuZCB3aXRoaW4gRE9NIGxvZ2ljIFxuXG4vLyBJIGNhbiBwYXNzIHRoZSBwcm9qZWN0IG9iamVjdCB0byB0aGUgXG5cblxuLy8gcmVhZCBiYWNrIG92ZXIgbWVzc2FnZXMgdG8gZGV0ZXJtaW5lIGdhbWUtcGxhbiwgXG5cbi8vIHByb3Blcmx5IHN0b3JlIHRoZSBkYXRhLCBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCB0aGUgYXJyYXkgaXMgYmVpbmcgb3ZlcndyaXR0ZW4gZWFjaCB0aW1lLCBcblxuLy8gcHV0IHRob3NlIGl0ZW1zIHRoYXQgd2VyZSBhZGRlZCB0byBsb2NhbCBzdG9yYWdlIGJhY2sgaW50byB0aGUgYXJyYXksIHNvIHRoZSBhcnJheSBjYW4ga2VlcCB0aG9zZSB2YWx1ZXMsIFxuXG4vLyBrZWVwIHRoZSB2YWx1ZXMgaW4gc3RvcmFnZSwgdmFsdWVzIGFyZSBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBrZWVwIHRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aGluIGFuIGFycmF5LCBnZXQgdGhlIHByb2plY3QgbmFtZSBvYmplY3QsIGFkZCB0byBsb2NhbCBzdG9yYWdlLCBnZXQgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZSwgYW5kIHBhc3MgYmFjayBpbnRvIGFycmF5Pz8gXG5cbi8vIG5vdyBzZWVtcyBsaWtlIHN0b3JhZ2UgZGF0YSBpcyBiZWluZyBvdmVyd3JpdHRlbiwgaXQncyBub3QgdXBkYXRpbmcsIGFuZCBub3Qga2VlcGluZyBkYXRhLCBcblxuXG5cblxuLy8gYW4gYXJyYXkgdGhhdCBzdG9yZXMgb2JqZWN0cywgXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gd2lsbCBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgdGl0bGUsIGdpdmUgaXQgYW4gSUQsIGFuZCB0b2RvJ3MgLyB0b2RvJ3Mgd2lsbCBiZSBhbiBhcnJheSwgXG5cbi8vIGhhdmUgYSBnbG9iYWwgYXJyYXksIFxuXG4vLyBkb3VibGUgY2hlY2sgeW91ciBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gZmFjdG9yeSBtdXN0IG1ha2UsIGEgbmFtZSBvZiBwcm9qZWN0LCBpZCwsIHRvZG8ncyBpbiBhbiBhcnJheSwgXG5cblxuLy8gaGF2ZSB0aGUgcHJvamVjdCBuYW1lcyBpbiBhbiBhcnJheSBhbmQgcGFzcyB0aGUgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSwgc28gdGhlIHZhbHVlcyBkb24ndCBnZXQgb3ZlcnJpZGRlbiBlYWNoIHRpbWUuIFxuXG4vLyBnZXQgYW4gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHR1cm4gaXQgaW50byBhbiBvYmogdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLCBcblxuLy8gSSB3YW50IHRvIG1ha2Ugc3VyZSBJIGFtIHByb3Blcmx5IHN0b3JpbmcgbXkgZGF0YSwgYm90aCBpbiB0aGUgYXJyYXkgdGhlIGdsb2JhbCBhcnJheSBcblxuLy8gYW5kIHdpdGhpbiBsb2NhbCBzdG9yYWdlLCBpZiB1c2VyIGVudGVycyBpbmZvLCBpdCBzaG91bGQgc2F2ZSBib3RoIG9mIHRob3NlIHZhbHVlcywgXG5cbi8vIGN1cnJlbnRseSBJIGNhbiBhZGQgdmFsdWVzIGFuZCBJIGFtIHB1dHRpbmcgbmFtZSBvYmplY3RzIHdpdGhpbiBhbiBhcnJheSBcblxuLy8gYnV0IGl0IGlzIG92ZXJ3cml0dGluZyBlYWNoIHRpbWUgYW5kIG5vdCBzYXZpbmcgdGhlIGRhdGEsIFxuXG4vLyBzdG9yZSB0aGUgYXJyYXkgZXZlcnkgdGltZSBzZXRJdGVtIGlzIGNhbGxlZCBcblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjsgXG5cblxuLy8gc2hvdWxkIEkga2VlcCBteSBldmVudCBsaXN0ZW5lcnMgaW4gYSBzZXBlcmF0ZSBtb2R1bGU/IFxuXG4vLyBsZXRzIHRlc3QgYnkgaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcsIFxuXG4vLyBPayBpbnB1dCBpcyBjbGVhcmVkLCBub3cgSSBuZWVkIHRvIGZvY3VzIG9uIGdldHRpbmcgdGhlIHZhbHVlIGFuZCBwYXNzaW5nIGl0IHRvIHN0b3JhZ2UuIFxuXG4vLyBnZXQgdGhlIHZhbHVlLCBsb2cgdGhlIHZhbHVlLCBzYXZlIHRvIHNvbWUgdHlwZSBvZiBkYXRhIHN0cnVjdHVyZSwgXG5cbi8vIFxuXG5cbi8vIE9LIHNvIEknbSBzb3J0YSBvbiB0aGUgcmlnaHQgdHJhY2sgaGVyZSwgSSBhbSBnZXR0aW5ndGhlIHVzZXIgdmFsdWUsIGFuZCBwYXNzaW5nIGl0IGEgbG9jYWwgc3RvcmFnZSBmdW5jdGlvbiwgXG5cbi8vIEkgbmVlZCBvbmUgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtLCB0aGUgcHJvamVjdCBuYW1lIFxuXG4vLyBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJvamVjdCBuYW1lLCBcblxuLy8gbWF5YmUgYW5vdGhlciBmdW5jdGlvbiB0byBnZXQgYWxsIHRoZSBhZGRlZCB0b2RvJ3Mgb2YgdGhlIHByb2plY3QsIFxuXG4vLyBhbmQgSSBiZWxpZXZlIHlvdSBuZWVkIHRvIHVzZSBvYmoncyBpbnN0ZWFkIG9mIGFycmF5J3MgXG5cbi8vIGJlY2F1c2UgdGhlIGtleSBvZiB0aGUgb2JqID09PSBwcm9qZWN0IG5hbWUsIHRoZSB2YWx1ZS9zIG9mIHRoZSBwcm9qZWN0ID09PSB0aGUgdG9kbydzID8/PyBcblxuXG5cbi8vIGZpcnN0IGxldHMgZml4IG91ciBzdG9yYWdlIGZ1bmN0aW9ucyB0byB1c2Ugb25lIHNldCBhbmQgb25lIGdldCBmdW5jdGlvbiwgXG5cbi8vIHdlbGwgSSdtIGNvbmZ1c2VkIG9uIHNldHRpbmcgYW5kIGdldHRpbmcgaXRlbXMsIEkgdHJpZWQgdG8gbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uIGJ1dCBpdCBkaWQgbm90IHdvcmssIFxuXG4vLyBvbmUgZnVuY3Rpb24gc2hvdWxkIHNldCB0aGUgaXRlbSwgdGhlIG90aGVyIGZ1bmN0aW9uIHNob3VsZCByZXRyaWV2ZSB0aGUgaXRlbS9wcm9qZWN0IG5hbWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBcblxuLy8gdGhlbiBvbmNlIHRoZSBwcm9qZWN0IGlzIHJldHJpZXZlZCwgY3JlYXRlIGxvZ2ljIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIGFkZCB0b2RvJ3MsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlLCBcblxuXG4vLyBtYWtlIHRoZSBwcm9qZWN0IG5hbWUgYW4gb2JqLCBcblxuLy8gaG93IHdpbGwgSSBzdG9yZSBteSBkYXRhPyBIb3cgY2FuIEkgY29ycmVjdGx5IHN0b3JlIG15IGRhdGE/IFxuXG4vLyBsb29rIG92ZXIgb2xkIHBvc3RzIHRvIGdhbWVwbGFuLCAgXG5cblxuLy8gSG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSBwcm9qZWN0cyBuYW1lIGluIHRvZG8sIFxuXG4vLyBvbmNlIHN0b3JlZCB3cml0ZSBhIGZ1bmN0aW9uIHdoaWNoIGRpc3BsYXlzIHRoZSBjb250ZW50cyBvZiB0aGUgc3RvcmFnZSwgdG8gdGhlIERPTS4gXG5cbi8vIHdoYXQgdHlwZSBvZiBkYXRhIHdpbGwgbXkgcHJvamVjdHMgYmU/IEkgdGhpbmsgb2JqJ3MsIGtleSBpcyBwcm9qZWN0IG5hbWUsIGl0J3MgdG9kbydzIGFyZSB0aGUgdmFsdWVzLCBcblxuLy8gd29yayBvbiBjaGFuZ2luZyB0aGUgcHJvamVjdCdzIG5hbWUgdG8gYW4gb2JqLCBpbnN0ZWFkIG9mIGFuIGFycmF5IFxuXG4vLyBob3cgY2FuIEkgYWRkIGl0ZW1zIHRvIGFuIG9iaj8gXG5cbi8vIGNhbiBJIGp1c3QgcGFzcyB0aGUgYXJyIHRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCB3aWxsIGNyZWF0ZSBhIHByb2plY3QgbmFtZSBvYmosIGtleSBpcyBuYW1lIHZhbHVlL3MgYXJlIHRoZSB0b2RvJ3NcblxuLy8gSSB3YW50IHRvIHByb3Blcmx5IHN0b3JlIHByb2plY3QgbmFtZXMgaW50byBsb2NhbCBzdG9yYWdlLCBJIGFtIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gdGhhdCBJIHdhbnQgdG8gbWFrZSBhIHByb2plY3QgbmFtZSBvYmosIFxuXG4vLyB0aGVuIHBhc3MgdGhhdCBvYmogdG8gbG9jYWwgc3RvcmFnZSwgSSBhbSBqdXN0IGhhdmluZyB0cm91YmxlLCB3aXRoIG15IGZhY3RvcnkgZnVuY3Rpb24sIFxuXG5cblxuXG5cblxuXG5cblxuLy8gY2hlY2sgYXJyYXkgYW5kIGxvY2FsIHN0b3JhZ2UsXG5cbi8vIGxvY2FsIHN0b3JhZ2UgYW5kIGFycmF5IHNlZW1zIHRvIGJlIHdvcmtpbmcgZmluZSwgaXQgaXMgYWRkaW5nIG9udG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyxcblxuLy8gSSB0aGluayBuZXh0IHdvdWxkIGJlIHRvIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgcHJvamVjdCBuYW1lcywgdG8gYmVnaW4gYWRkaW5nIHRvLWRvJ3MgdG8gcHJvamVjdHNcblxuLy8gb2sgc28gbG9va2luZyBhdCB0aGUgcHJvamVjdCBmb3IgaW5zcGlyYXRpb24sIFxuXG4vLyBwcm9qZWN0IG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gc2F2ZWQgdG8gYW4gYXJyYXkgYW5kIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIGlmIHRoZSBwcm9qZWN0IG5hbWVzIGFyZSBjbGlja2VkLCB0aGV5IGFyZSBkaXNwbGF5ZWQgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCBcblxuLy8gdGhlbiBvbmNlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgdXNlciBzaG91bGQgYmUgYWJsZSB0byBjbGljayBhIGFkZCBidG4gb3IgYSB0cmFzaCBidG4sIFxuXG4vLyBhZGQgYnRuIHdpbGwgbWFrZSBhIGZvcm0gZm9yIHRvZG9zIHRvIGJlIGFkZGVkLCB0aGVuIG9uY2UgYWRkZWQgdGhvc2UgdG9kb3Mgd2lsbCBiZSBkaXNwbGF5ZWQsIFxuXG4vLyBkZWxldGUgYnRuIHdpbGwgcGVybWFuYXRlbHkgZGVsZXRlIHRoZSB0b2RvL3Rhc2suIFxuXG4vLyBob3cgdG8gcHJldmVudCBkeW5hbWljYWxseSBjcmVhdGVkIGVsZW1lbnQgSlMgZWxlbWVudHMgZnJvbSBmb3JtaW5nIHdoZW4gZnVuY3Rpb24gaXMgY2FsbGVkPyBcblxuLy8gZml4IHVwIGN1cnJlbnQgY29kZSB0byB1c2UgbW9kdWxlcywgbW92ZSB0byBvd24gZnVuY3Rpb24gXG5cbi8vIHNlcGVyYXRpbmcgdGhlIGNvZGUgaXMgbm90IHdvcmtpbmcsIGNhbid0IGFkZCBhbiBldmVudCBsaXN0ZW5lciB0aGVyZSwgXG5cbi8vIEkgd2FudCB0byB1c2UgdGhlIHNhbWUgbG9naWMgSSBoYWQgYmVmb3JlIGJ1dCB0byBzcGxpdCB0aGUgbG9naWMgdXAgaW50byBkaWZmZXJlbnQgbW9kdWxlcywgXG5cbi8vIHRha2UgdGhlIGRpdiBlbGVtZW50IFxuXG4vLyB3aGVuIHlvdSBjbGljayBvbiBhIHByb2plY3QgbmFtZSwgdGhhdCBwcm9qZWN0IG5hbWUgc2hvdWxkIGFwcGVhciBpbiB0aGUgbWFpbiBzZWN0aW9uIChmaW5lKSBcblxuLy8gSXQgc2hvdWxkIGFsc28gYWRkIHRoZSBhZGQgdG9kbyBidG4gYWxvbmcgd2l0aCBjYW5jZWwgYnRuIFxuXG5cblxuLy8gd29yayBvbiBmaXhpbmcgdGhlIGJ0biBpc3N1ZSwgY3JlYXRpbmcgbXVsdGlwbGUgZWxlbWVudHMgb24gYnRuIGNsaWNrLCBcblxuLy8gaWYgdGhlIHVzZXIgdmFsdWUgaXMgZW1wdHkgZGlzYWJsZSB0aGUgYnRuIG9yIGhpZGUgaXQsIFxuXG4vLyBJIGhhdmUgdHJpZWQgYm90aCBtZXRob2RzIHdpdGggbm8gbHVjaywgXG5cbi8vIEkgd2FzIHdvcmtpbmcgd2l0aCBzb21lb25lIHllc3RlcmRheSwgYW5kIGl0IHNlZW1lZCBsaWtlIHRoZSByaWdodCBtZXRob2QsIFxuXG4vLyBidXQgSSBhbSB2ZXJ5IGNvbmZ1c2VkIG9uIHdoeSBpdCBpcyBub3Qgd29ya2luZywgSSB3b3VsZCB0aGluayBwbGFjaW5nIGl0IGJlZm9yZSB0aGUgZnVuY3Rpb24gY2FsbCB3b3VsZCBkbyB0aGUgdHJpY2ssIFxuXG4vLyBJIHdpbGwgZXhwZXJpZW1lbnQgd2l0aCB3aGVyZSB0aGUgY29kZSBpcyBwbGFjZWQuIFxuXG5cbi8vIGZpZ3VyaW5nIG91dCB0aGUgbG9naWMgZm9yIHRoZSBidXR0b25zLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGFkZCBtdWx0aXBsZSBwcm9qZWN0cywgXG5cbi8vIG9uZSBwcm9qZWN0IGF0IGEgdGltZSwgaWYgdXNlciBlbnRlcnMgbm90aGluZywgZGlzYWJsZSBidG4sIFxuXG4vLyBpZiBzb21ldGhpbmcgY2hhbmdlcyBpbiB0aGUgaW5wdXQgZmllbGQsIHJlLWVuYWJsZSB0aGUgYnRuICBcblxuLy8gSSBhbSBoYXZpbmcgdHJvdWJsZSBsb2dnaW5nIHRoZSBzdGF0ZW1lbnQgd2l0aGluIHRoZSBpbnB1dCBsaXN0ZW5lciwgXG5cbi8vIHByYWN0aWNlIGluIHNlcGVyYXRlIGZpbGUsIEkgd2FzIHNvbWVob3cgYWJsZSB0byBnZXQgaXQgdG8gd29yayB5ZXN0ZXJkYXksIFxuXG4vLyBwcmFjdGljZSBpbiBhIHNlcGVyYXRlLCBpZiBubyBsdWNrIG1vdmUgb250byBnZW5lcmF0aW5nIHRoZSBpbnB1dCBmaWVsZCBiYXNlZCBvbiB3aGVuIHVzZXIgXG5cbi8vIHByZXNzZXMgdGhlIHRvZG8gYnRuLiBcblxuLy8gc3BlbmQgdGhlIHJlc3Qgb2YgdGhlIHRpbWUsIHRyeWluZyB0byBmaWd1cmUgb3V0IGFuIGlucHV0IGZvcm0sIFxuXG4vLyBzbyB3aXRoIHRoZSBwb3AtdXAgZmllbGQsIGRvbid0IGZvcmdldCB0byB1c2UgdGhlIHNhbWUgbG9naWMgYXMgbGFzdCB0aW1lIHdpdGggZGlkYWJsaW5nIGJ0biBhdCB0aGUgY29ycmVjdCBtb21lbnQgXG4vLyBvbmNlIGJ0biBpcyBjbGlja2VkIGhhdmUgdGhlIHNhbWUgcG9wLXVwIGZpZWxkIGFzIHlvdSBkaWQgd2l0aCBsaWJhcnksIFxuXG4vLyB5b3Ugd2lsbCBwcm9iYWJseSBuZWVkIGEgY29udGFpbmVyIHRoZW4gYSBkaXYgdGhhdCdzIGFwcGVuZGVkIHRvIGl0IHdpdGggdGhlIGFjdHVhbCBjb250ZW50LCBcblxuLy8gY29udGFpbmVyIGFic29sdXRlLCBkaXYgaXMgcmVsYXRpdmUgXG5cbi8vIHRoZW4geW91IHdpbGwgbmVlZCBhbiBpbnB1dCBmb3IgbmFtZSwgXG5cbi8vIGR1ZSBkYXRlLCBub3RlcyBjYW4gdXNlIHRleHQgYXJlYSBhbmQgZGVzY3JpcHRpb24sIFxuXG4vLyBmaW5kIGEgd2F5IHRvIGFwcGVuZCB0byBtYWluIHByb2plY3Qgc2VjdGlvbiwgeW91IGNhbiBkZWxldGUgaXQsIG9yIGNob29zZSB0byBhZGQgbW9yZSB0b2RvcyBcblxuLy8gdGhhdCBnbyB3aXRoIHRoZSBzcGVjaWZpYyBwcm9qZWN0LiAgXG5cblxuXG5cbi8vIGdldCBmYW1pbGFyIHdpdGggdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGFwcCAuIFxuXG4vLyB0aGUgYWRkIHByb2plY3QgYnRuIGlzIG5vdyB3b3JraW5nLCBcblxuLy8gbm93IHlvdSBuZWVkIHRvIGNvbnNpZGVyIGhvdyB5b3VyIHByb2plY3QgbmFtZXMgYXJlIGdvaW5nIHRvIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuLy8gdGhlIG5hbWVzIGFyZSBhZGRlZCB0byB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIG9uY2UgY2xpY2tlZCB0aGV5IHNoYWxsIGJlIGFkZGVkIHRvIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBcblxuLy8gaWYgeW91IGNsaWNrIG9uIHRoZSBwcm9qZWN0IG5hbWUgaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB0aGUgdG8gZG8gZm9ybSBzaG91bGQgcG9wLXVwLCBcblxuLy8gcmVtZW1iZXIgb25lIGlucHV0IGZvcm0gYXQgYSB0aW1lLCB5b3UgbWF5IGhhdmUgdG8gZGlzYWJsZSB0aGUgYnRuIGFuZCByZS1lbmFibGUgdGhlIGJ0biwgXG5cbi8vIGJlZm9yZSBtb3Zpbmcgb24gSSB3b3VsZCBhbHNvIGNoZWNrLCBhbmQgcmV2aWV3IHlvdXIgY3VycmVudCBjb2RlLCByZW1vdmUgY29tbWVudGVkIG91dCBjb2RlIHRoYXQgZG9lcyBub3RoaW5nIGJ1dCB0YWtlIHVwIHNwYWNlIFxcXG5cbi8vIGNoZWNrIHRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMsIG1ha2Ugc3VyZSBpdCBtYWtlcyBzZW5zZSB0byB5b3UsIGJldHRlciB0byBkbyBpdCBub3csIGNoZWNrIGl0IG91dCBcblxuLy8gcGFydGlhbGx5IGhhdmUgdGhlIGxvZ2ljLCB0aGF0IGdlbmVyYXRlcyBpbnB1dCBmaWVsZCwgXG5cbi8vIHRyeSB0byBzZXBlcmF0ZSB0aGUgbG9naWMsIGdyYWIgdGhpcyBlbGVtZW50IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uIFxuXG4vLyBncmFiIHRoZSBlbGVtZW50IGFkZCBhIGxpc3RlbmVyIHRvIGl0LCBwZXJmb3JtIHRoZSBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgdGhlcmUsIFxuXG4vLyB0aGVuIGNhbGwgdGhlIERPTSBtb2R1bGUgdG8gYmVnaW4gYWRkaW5nIGl0J3MgcHJvcGVydGllcy4gIFxuXG4vLyBoZWxsbyBldmVyeW9uZSwgcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvIGRvLCBcblxuLy8gb3ZlcmFsbCB0cnlpbmcgdG8ga2VlcCBteSBET00gbG9naWMgYW5kIGV2ZW50IGxpc3RlbmVycyBpbiBzZXBlcmF0ZSBtb2R1bGVzIFxuXG4vLyBJIGFtIHRyeWluZyB0byBhY2Nlc3MgdGhlIHByb2plY3QgbmFtZSBlbGVtZW50IGZyb20gdGhlIERPTSBtb2R1bGUgXG5cbi8vIEkgYW0gZXhwb3J0aW5nIHRoZSBmdW5jdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSB2YXJpYWJsZSwgXG5cbi8vIHRoZW4gaW1wb3J0aW5nIGl0IGJ1dCB3aGVuIEkgdHJ5IHRvIGFjY2VzcyB0aGUgZWxlbWVudCBpbiB0aGUgbGlzdGVuZXIgbW9kdWxlLCBcblxuLy8gdXNpbmcgSUQsIGNsYXNzLCBxdWVyeSBzZWxlY3RvciwgSSBqc3V0IGdldCB1bmRlZmluZWQgYmFjaywgXG5cbi8vIEknbSByZWFsbHkgbm90IHN1cmUgd2h5IHRoaXMgaXMgaGFwcGVuaW5nLCBJIGhhdmUgbm90IHJhbiBpbnRvIHRoaXMgaXNzdWUgeWV0LCBcblxuLy8gaW1wb3J0aW5nIGFuZCBleHBvcnRpbmcgYW5kIHVzaW5nIGZ1bmN0aW9ucy92YXJpYWJsZXMgZnJvbSBvdGhlciBtb2R1bGVzIHNlZW1lZCB2ZXJ5IHN0cmFpZ2h0Zm9yd2FyZCwgXG5cbi8vIEkgd291bGQganVzdCB3b3JrIG9uIHRoZSBmdW5jdGlvbiBpbiB0aGUgbWVhbnRpbWUsIGtlZXBpbmcgZXZlcnl0aGluZyB3aXRoaW4gdGhlIHNhbWUgZmlsZSwgXG5cbi8vIHdvcmsgb24gaXNzdWUgb24gY2xpY2tpbmcgcHJvamVjdCBuYW1lIGluIHByb2plY3RzIHNlY3Rpb24gXG5cbi8vIGl0IHNob3VsZCBub3QgYXBwZW5kIG11bHRpcGxlIGJ0bnMuIFxuXG4vLyB0aGF0IHdpbGwgY2F1c2UgaXNzdWVzIFxuXG4vLyB3ZWxsIHRoaW5raW5nIGdlbmVyYWxseSwgc2ltaWxhciB0byB0aGUgcHJldmlvdXMgaXNzdWUsIFxuXG4vLyBJIG5lZWQgdG8gc29tZWhvdyBkaXNhYmxlIHRoZSBidG4vbmFtZSBvZiB0aGUgZWxlbWVudCwgYWZ0ZXIgaXQgaGFzIGJlZW4gY2xpY2tlZCBcblxuLy8gc28gdGhlIHVzZXIgY2Fubm90IGFkZCBhbm90aGVyIGJ0biwgXG5cbi8vIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgYW5vdGhlciBidG4sIGFmdGVyIGNsaWNraW5nIHRoZSBidG4sIFxuXG4vLyBJZiB0aGUgdXNlciB2YWx1ZSBtYXRjaGVzIHdoYXQgaXMgYWxyZWFkeSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24gXG5cblxuLy8gZmlyc3Qgd29yayBvbiB0aGUgYnRuIGFwcGVuZGluZyBpc3N1ZSwgaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IG5hbWUgYWdhaW4sIFxuXG4vLyBpdCB3aWxsIGtlZXAgYWRkaW5nIGJ0bidzLCBkb24ndCBhZGQgbW9yZSBidG4ncyBcblxuLy8gZG9uJ3QgYWRkIHRoZSBwcm9qZWN0IGFnYWluLCBpZiBpdCBhbHJlYWR5IEVYSVNUUyBJTiBUSEUgTUFJTiBDT05UQUlORVIgXG5cbi8vIE5PVyBUT0dHTElORyBCQUNLIEFORCBGT1JUSCBCRVRXRUVOIFRXTyBQUk9KRUNUUyBcblxuLy8gWU9VIEFSRSBTSU1QTFlJTkcgUkVQTEFDSU5HIFRIRSBQUk9KRUNUIFdJVEhJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gT05MWSBPTkUgUFJPSkVDVCBDQU4gQkUgU0hPV04gSU4gVEhFIENPTlRBSU5FUiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB0byBzdG9wIGFwcGVuZGluZyBtdWx0aXBsZSBwcm9qZXQncyB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGUgY29uZGl0aW9uYWwgd2lsbCBjaGVjayBpZiB0aGF0IHByb2plY3QgZWxlbWVudCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cbi8vIHRoZSBwcm9ibGVtIHNlZW1zIHRvIGJlIHRoZSBidXR0b25zIGFwcGVuZGluZywgSSBuZWVkIHRvIGZpbmQgYSB3YXkgdG8gcHJldmVudCB0aGUgYnRuJ3MgZnJvbSBrZWVwaW5nIG9uIGFwcGVuZGluZywgXG5cbi8vIGlmIHRoZSBidG4gYWxyZWFkeSBleGlzdHMgdGhlIG1haW4gY29udGFpbmVyLCB0aGVuIGRvbid0IGFwcGVuZCwgb3IgZGlzYWJsZSwgaGlkZSwgb3IgcmVtb3ZlIGVsZW1lbnQgXG5cbi8vIEkgYW0gcnVubmluZyBpbnRvIHNvbWUgbWFueSBwcm9ibGVtcyB3aXRoIHRvIGRvIGxpc3QsIFxuXG4vLyBJIGFtIHRyeWluZyB0byBrZWVwIHRoaW5ncyBpbiBtb2R1bGVzIGFuZCBrZWVwIHRoZSBsb2dpYy9ldmVudCBsaXN0ZW5lcnMgc2VwZXJhdGUgZnJvbSB0aGUgRE9NIExvZ2ljLCBcblxuLy8gSSB3YW50IGFjY2VzcyB0byB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciwgXG5cbi8vIHNvIGlmIHRoZSB1c2VyIGNsaWNrcyB0aGUgcHJvamVjdCBpbiB0aGUgbGl0dGxlIHNpZGViYXIgaXQgZ2V0cyBhcHBlbmRlZCB0byB0aGUgRE9NLCBcblxuLy8gd2VsbCByaWdodCBub3cgSSBhbSBwZXJmb3JtaW5nIERPTSBzdHVmZiB3aXRoIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGJ1dCB0aGF0IGVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgd2hlbiB0aGUgYnRuIGlzIGNsaWNrZWQsIFxuXG4vLyBJIGd1ZXNzIG15IHF1ZXN0aW9uIGlzIGNhbiBJIGtlZXAgbXkgY3VycmVudCBsb2dpYywgd2l0aGluIG15IERPTSBtb2R1bGU/IFxuXG4vLyBUaGUgcHJvYmxlbSBpcyB0aGF0IEkgd2FudCB0byBhY2Nlc3MgYSBwYXJ0aWN1bGFyIGJ1dCB0aGF0IGVsZW1lbnQgaXMgY3JlYXRlZCB3aXRoaW4gYSBsaXN0ZW5lciwgXG5cbi8vIGJhc2ljYWxseSB0aGUgdXNlciBlbnRlcnMgbmFtZSBvZiBwcm9qZWN0IHByZXNzZXMgYWRkIGJ0biwgdGhlIHZhbHVlIGdldHMgcGFzc2VkIHRvIGEgZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgXG5cbi8vIHN1Y2ggYXMgYXBwZW5kaW5nIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIGFuZCB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG5cblxuLy8gUnVubmluZyBpbnRvIGEgbG90IG9mIHByb2JsZW1zIHdpdGggdG8gZG8gXG5cbi8vIGJhc2ljYWxseSBJIHdhbnQgdG8gYWNjZXNzIGFuIGVsZW1lbnQgaW4gYSBkaWZmZXJlbnQgbW9kdWxlIFxuXG4vLyBwcm9ibGVtIGlzIHRoYXQgZWxlbWVudCBpcyBkeW5hbWljYWxseSBjcmVhdGVkIHdpdGhpbiBhbiBldmVudCBsaXN0ZW5lciwgXG5cbi8vIEkgd291bGQgbGlrZSB0byBrZWVwIG15IERPTSBhbmQgbG9naWMgc3R1ZmYgc2VwZXJhdGUsIFxuXG4vLyBjdXJyZW50bHkgSSBncmFiYmVkIHRoZSBlbGVtZW50IGluIHRoZSBET00gbW9kdWxlLCBhbmQgYWRkZWQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gaXQsIFxuXG4vLyBub3cgSSBoYXZlIHRvIHVzZSBsb2dpYywgdG8gbWFrZSBzdXJlIHRoZSB1c2VyIGNhbm5vdCBrZWVwIGFkZGluZyB0aGUgc2FtZSBidG4gdG8gdGhlIERPTSBiYXNlZCBvbiBidG4gY2xpY2ssIFxuXG4vLyBiYXNpY2FsbHkgbXkgcXVlc3Rpb24gaXMgbXkgY3VycmVudCBkb21Mb2dpYyBtb2R1bGUgb2s/IEFkZGluZyBhbiBldmVudCBsaXN0ZW5lciBhbmQgbG9naWMgd2l0aGluIHRoZSBkb20gbW9kdWxlIFxuXG4vLyBJdCBkb2VzIG5vdCBzZWVtIHJpZ2h0IGJ1dCBJIGRvbid0IHNlZSBhbnkgb3RoZXIgd2F5IHRvIGRvIHRoaXMuIFxuXG4vLyBob3cgY2FuIEkgc3RvcCB0aGUgYWRkIC10b2RvIGJ0bnMgZnJvbSBhcHBlbmRpbmcgdXBvbiBlYWNoIGJ1dHRvbiBjbGljaz8gXG5cbi8vIGV2ZXJ5dGhpbmcgaXMgYXR0YWNoZWQgd2l0aGluIGV2ZW50IGxpc3RlbmVycywgXG5cbi8vIGNsaWNrIGFkZCBwcm9qZWN0IGJ0biBmb3JtIGlzIGdlbmVyYXRlZCwgYWRkIGJ0biBpcyBwcmVzc2VkIHZhbHVlIGlzIHNhdmVkIFxuXG4vLyB0aGF0IHZhbHVlIGlzIHBhc3NlZCB0byBhbm90aGVyIGZ1bmN0aW9uLCB3ZWxsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhlbiwgXG5cbi8vIGNhbiB3ZSBjYWxsIHRoZSBmdW5jdGlvbiBhdCBhIGRpZmZlcmVudCB0aW1lLCB3aHk/IFxuXG4vLyBzaG91bGRudCBpdCBiZSBwYXNzZWQgYW5kIGNhbGxlZCBhcyBzb29uIGFzIHlvdSBnZXQgdmFsdWU/IFxuXG4vLyBjYW4gSSBqdXN0IGNyZWF0ZSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gb25lIHRoYXQgc3RvcmVzIHRoZSB1c2VyIHZhbHVlLCBcblxuLy8gb25lIHRoYXQgcmV0dXJucyB0aGUgdXNlciB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NPyBcblxuLy8geW91IHBhc3MgdGhlIHZhbHVlIHRvIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyB0aGF0IGZ1bmN0aW9uIHJldHVybnMgdGhhdCB1c2VyVmFsdWUgYXBwZW5kZWQgdG8gdGhlIERPTS9jb250YWluZXJzIFxuXG4vLyBjYXB0dXJlIGl0O3MgcmV0dXJuIHZhbHVlIGZyb20gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGF0IGZ1bmN0aW9uLCBcblxuLy8gc28gbGV0cyB0cnkgdG8gbWFrZSBhbm90aGVyIGZ1bmN0aW9uIDEgdGhhdCB0YWtlcyB0aGUgdmFsdWUgYW5kIGFwcGVuZHMgdG8gY29udGFpbmVyLCBET00gXG5cbi8vIEkgd2lsbCBub3cgdHJ5IHRvIGFkZCB0aGUgY2FsZW5kZXIgb3B0aW9uIHRvIG15IHRvZG8gZm9ybSBcblxuLy8gYW5vdGhlciB3aGljaCB0YWtlcyB0aGF0IGZ1bmN0aW9uIGFib3ZlIGFuZCBhZGRzIGEgbGlzdGVuZXIgdG8gaXQsIHVzaW5nIHRoZSBsb2dpYyBpbnNpZGUgLiBcblxuLy8gZXhwaWVybWVudCB3b3JraW5nIHdpdGggdHdvIGZ1bmN0aW9ucywgc2F2aW5nIG9uZSBmdW5jdGlvbiB0byB2YXJpYWJsZSwgYWRkaW5nIHRoZSBET00gc3R1ZmYgcmV0dXJuIGEgdmFsdWUsIFxuXG4vLyB0YWtlIHRoYXQgZnVuY3Rpb24gZXhwcmVzc2lvbiBhZGQgYSBsaXN0ZW5lciB0byBpdC4gXG5cbi8vIHdlbGwgdGhlIHByb2JsZW0gaXMgdGhhdCBldmVyeSB0aW1lIEkgY2xpY2sgdGhlIGFkZCBwcm9qZWN0IGJ0biBcblxuLy8gaXQgd2lsbCBrZWVwIGFwcGVuZGluZyBtb3JlIGFkZC10b2RvIGJ0bnMgdG8gdGhlIERPTSwgXG5cbi8vIGJlY2F1c2Ugd2hlbiB0aGUgZm9ybSBwb3BzIHVwIFxuXG4vLyBhbmQgdGhlIHVzZXIgaGl0cyB0aGUgYWRkIGJ0biwgXG5cbi8vIHRoZSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgRE9NIGlzIGNhbGxlZCwgXG5cbi8vIGlzIHRoZXJlIGEgd2F5IEkgY2FuIGlzb2xhdGUgdGhlIHByb2plY3Qgc2VjdGlvbiBuYW1lIGVsZW1lbnQ/IFxuXG4vLyB3ZWxsIHdoYXQgSSB3YXMgdGhpbmtpbmcgb2YgeWVzdGVyZGF5LCBcblxuLy8gaXMgY2FuIEkgbWFrZSBhIHNlcGVyYXRlIGZ1bmN0aW9uPyBcblxuLy8gY2FuIHRoYXQgZnVuY3Rpb24gc3RvcmUgYSB2YXJpYWJsZT8gdXNlclZhbHVlPyBcblxuLy8gdGhlbiBjYW4gdGhhdCBmdW5jdGlvbiBiZSBjYWxsZWQ/IFxuXG4vLyBJJ20gbm90IGV2ZW4gc3VyZSB3aGF0IHRoZSBoZWxsIHRvIGV2ZW4gZG8gXG5cbi8vIHRoYXQgZnVuY3Rpb24gaXMgYmVpbmcgY2FsbGVkIHdpdGhpbiB0aGUgbGlzdGVuZXIsIFxuXG4vLyBzbyBldmVyeSB0aW1lIHlvdSBjbGljayB0aGF0IGJ0biBvciBwcm9qZWN0IG5hbWUsIGl0IHdpbGwga2VlcCBtYWtpbmcgYnRucyBcblxuLy8gZGV0ZXJtaW5lIHdoZW4gaXQncyB0aW1lIHRvIGFwcGVuZCB0byB0aGUgRE9NID9cblxuLy8gb25lIGZ1bmN0aW9uIHRvIHN0b3JlIHZhbHVlIFxuXG4vLyBvbmUgZnVuY3Rpb24gdG8gdGFrZS9hY2Nlc3MgdGhhdCB2YWx1ZSBhbmQgdGhlbiBhcHBlbmQgdG8gRE9NIFxuXG4vLyBzdG9yZSB0aGUgdmFsdWUsIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHRoZXJlLCBcblxuLy8gdGhlbiAiLCJcbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxuIFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5U3RvcmFnZVNldEl0ZW0obmFtZSkgeyBcblxuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiLCBKU09OLnN0cmluZ2lmeShuYW1lKSk7ICBcbiAgICBcbiAgICBcbiAgICBcbn0gXG5cblxuLy8gIGV4cG9ydCBmdW5jdGlvbiBhcnJheVN0b3JhZ2VUb2RvSXRlbXMocHJvamVjdCkgeyBcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTsgXG4gICAgXG4vLyAgfVxuXG5cblxuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdG9yYWdlKCkgeyBcbi8vICAgbGV0IGdldE5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuICBcbi8vICAgY29uc29sZS5sb2coZ2V0TmFtZSk7IFxuXG4vLyAgIGxldCBwcm9qZWN0TmFtZU9iaiA9IHByb2plY3ROYW1lRmFjdG9yeShnZXROYW1lKTsgXG5cbi8vICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVPYmopO1xuLy8gfVxuXG5cblxuXG5cblxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGluZGl2ZHVhbCBwcm9qZWN0IG5hbWUgb2JqZWN0cywgXG5cbi8vIEkgYW0gYWJsZSB0byBjcmVhdGUgcHJvamVjdCBuYW1lcywgYnV0IHdoZW4gSSB1c2Ugb2JqZWN0cyBpdCBvbmx5IGFkZHMgb250bywgYW5kIGRvZXMgbm90IGNyZWF0ZSB1bmlxdWUgcHJvamVjdHMuIFxuXG4vLyBcblxuXG5cblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyID0gW107XG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7IFxuLy8gICAgICAgICBsZXQgcHJvamVjdE5hbWVJbnB1dCA9IHZhbHVlW2ldOyBcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE5hbWVJbnB1dCk7XG4vLyAgICAgICAgIGFyci5wdXNoKHByb2plY3ROYW1lSW5wdXQpO1xuXG4vLyAgICAgfSBcbi8vICAgICBjb25zb2xlLmxvZyhhcnIpOyBcbi8vICAgICByZXR1cm4gYXJyOyBcbi8vIH0gXG5cbi8vIGp1c3QgYWRkIHZhbHVlcyB0byB0aGUgYXJyYXkgXG4vLyBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3ROYW1lKHZhbHVlKSB7IFxuXG4vLyAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWUpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyLWlucHV0XCIsIHByb2plY3RBcnJheSk7IFxuXG4vLyAgICAgY29uc3QgcHJvamVjdE5hbWVTdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyLWlucHV0XCIpO1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVTdG9yYWdlKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4vLyB9IFxuXG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkgeyBcbi8vICAgICByZXR1cm4geyBcbi8vICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3ROYW1lLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gbGV0IG5ld1Byb2plY3QgPSBuZXcgY3JlYXRlUHJvamVjdE5hbWUoXCJhbGVjXCIpOyBcblxuLy8gY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4vLyBsZXQgZ0FycmF5ID0gKGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpO1xuLy8gICAgICAgICByZXR1cm4gYXJyYXk7XG4vLyAgICAgfVxuLy8gfSgpKTsgXG5cbi8vIGdBcnJheSgxKTsgXG4vLyBnQXJyYXkoMik7IFxuLy8gZ0FycmF5KDMpOyBcbi8vIGdBcnJheSg0KTsgXG5cbi8vICBmdW5jdGlvbiBzdG9yZVVzZXJWYWx1ZSh2YWx1ZSkgeyBcbi8vICAgICBsZXQgYXJyYXkgPSBbXTsgXG4vLyAgICAgY29uc29sZS5sb2coYXJyYXkpXG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIGNhbGxUaGlzICh2YWx1ZSkgeyBcbi8vICAgICAgICAgYXJyYXkucHVzaCh2YWx1ZSk7IFxuLy8gICAgICAgICByZXR1cm4gYXJyYXlcbi8vICAgICB9IFxuLy8gfSBcblxuLy8gc3RvcmVVc2VyVmFsdWUoKTtcblxuXG5cblxuXG5cbi8vIGZpbmQgd2F5IHRvIGFkZCBpdGVtcyBvbnRvIGFuIGFycmF5LCBJIGRvbid0IHRoaW5rIGl0J3Mgc21hcnQgdG8gYWRkIG9uZSBhdCBhIHRpbWUsIGJ1dCBtb3JlIHNvIGxpa2UgYWRkaW5nIHByb2plY3RzIG9udG8gYSBzaW5nbGUgYXJyYXkgXG5cbiAgICAvLyB0aGluayBvZiBhIHdheSB0byBhZGQgaW50byBhbiBhcnJheSwgbG9vayBpbnRvIGNsb3N1cmUgYW5kIGFkZGluZyBvbnRvIGFuIGFycmF5IHVzaW5nIGNsb3N1cmUuIFxuXG4gICAgLy8gY2xvc3VyZSBzZWVtcyBsaWtlIHRoZSByaWdodCBpZGVhIGJ1dCBob3cgY2FuIEkgbWFrZSB0aGlzIHdvcmsgd2l0aCB0aGUgY3VycmVudCBjb2RlIEkgaGF2ZT8gXG5cbiAgICAvLyB3ZWxsIEkgdGhpbmsgSSBkaWQgZmluZCBhIHdheSB0byBzdG9yZSB0aGUgcHJvamVjdCBuYW1lcywganVzdCBzb21ldGhpbmcgZG9lc24ndCBzZWVtIHJpZ2h0IGFib3V0IHRoZSBzdG9yYWdlXG5cbiAgICAvLyAgXG5cbi8vIHRoYXQgYXJyYXkgY2FuIGJlIHBhcnQgb2YgYW4gb2JqLCBrZXkgaW50byB0aGUgYXJyYXlcblxuLy8gYnRuIHByb2JsZW0sIGFwcGVuZGluZyB0b28gbWFueSBpbnB1dCBmaWVsZHMsIGNvbmRpdGlvbmFsIHRvIHByZXZlbnQgXG5cbi8vIGNvcnJlY3QgYXJyYXkgc3RvcmFnZSBcblxuLy8gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG4gXG4vLyBwcm9wZXJseSBpbnN0YWxsaW5nIGFuZCB1c2luZyBzYXNzIGFmdGVyIHRoZSBhYm92ZSBpcyBhY2NvbXBsaXNlZC4gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9