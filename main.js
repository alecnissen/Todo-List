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


let addBtnToDoModal = document.getElementById("add-task-todo-modal"); 



let formInput = document.getElementById("input-form-for-creating-todo-task");

formInput.addEventListener("submit", (e) => { 
  e.preventDefault();
})



addBtnToDoModal.addEventListener("click", (e) => { 
  
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

})   

function todoObjectFactory(title, description, priority, dueDate) { 
  return { 
    title: title, 
    description: description, 
    priority: priority, 
    dueDate: dueDate 
  }
}     

// problem is appending and displaying todo values 

// for each project, 

// issue is saving every single input as a new array entry, 

// 

let getProjectId

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

    editElement.addEventListener("click", (e) => { 
      console.log("you clicked the edit button, HOLD STRONG!")
    })

    editElement.src = "../edit-svgrepo-com.svg"; 

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

    deleteIcon.src = "../trashcan-svgrepo-com (1).svg"; 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxZQUFZLHlFQUF5RTs7QUFFckY7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLDRCQUE0QjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ21COztBQUUyQjs7QUFFSjs7QUFFQTs7QUFFeUI7O0FBRXJCOztBQUU5Qzs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR007O0FBRVA7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOzs7O0FBSVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUUsb0RBQW1COztBQUVyQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQW1CO0FBQ3JCOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLG9EQUFtQjs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNkIsOEJBQThCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOExBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOzs7QUFHSjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2Qjs7QUFFbEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVTs7OztBQUlWOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7O0FBR0o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBSTs7O0FBR0o7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7OztBQUlKO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQiwyQkFBMkIsR0FBRztBQUM5QjtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7Ozs7OztBQU1BOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdCQUF3QixzQ0FBc0M7QUFDOUQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixJQUFJOzs7O0FBSUo7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCOztBQUVoRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxNQUFNOztBQUVOOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7OztBQU1BOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsZUFBZSxjQUFjO0FBQzdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBOztBQUVBLE1BQU07OztBQUdOOzs7O0FBSUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaGxFQTs7QUFFQTs7QUFFb0I7O0FBRUQ7O0FBRWlGOztBQUVwRzs7QUFFQTs7QUFFZTtBQUNmOztBQUVBOztBQUVBOztBQUVBLEtBQUssd0RBQWlCOztBQUV0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQWdCLENBQUMsbURBQVk7Ozs7Ozs7O0FBUTdCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7QUFNQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7O0FBS0E7OztBQUdBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7OztBQU1BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7OztBQUtBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7OztBQVVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7OztBQU9BOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQVlBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyOUJvQjs7QUFFcEIsWUFBWSxlQUFlOztBQUUzQixDQUFxRzs7O0FBR3RGOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNuTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvY29uZGl0aW9uYWxMb2dpYy5qcyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvLi9zcmMvZG9tTG9naWMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdnNjb2RlLWVzbGludC1leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly92c2NvZGUtZXNsaW50LWV4YW1wbGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3ZzY29kZS1lc2xpbnQtZXhhbXBsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7IFxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMoKSB7IFxuXG4vLyAgICAgY29uc29sZS5sb2coXCJIRVlZWVwiKTtcblxuLy8gICAgIC8vIGxldCB0aGVQcm9qZWN0QXJyYXkgPSBhcnI7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAvLyAgICAgbGV0IHByb2plY3RBcnJheUluZGV4ID0gdGhlUHJvamVjdEFycmF5W2ldOyBcblxuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gfVxuLy8gfSBcblxuLy8gcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljKCk7IFxuXG5cblxuLy8gSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGNvbmZ1c2VkIG9uIGhvdyB0byBhZGQgY29uZGl0aW9uYWwgbG9naWMsIHRoYXQgd2lsbCBwcmV2ZW50IGEgdXNlciBmcm9tIGFkZGluZyBtdXRsaXBsZSBwcm9qZWN0cyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHByb2plY3QgbmFtZSwgXG5cbi8vIE9uY2UgcHJvamVjdCBpcyBjbGlja2VkLCBkaXNwbGF5IHRoYXQgcHJvamVjdCwgaWYgYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGNsZWFyIHRoZSBvbGQgYW5kIG1ha2Ugd2F5IGZvciB0aGUgbmV3LCBcblxuLy8gSSd2ZSBiZWVuIHRyeWluZyB0byBjYWxsIHRoZSBmdW5jdGlvbiBiZWZvcmUgdGhlIHZhbHVlcyBhcmUgYXBwZW5kZWQsIHRvIGNoZWNrIGlmIEl0J3Mgc2FmZSB0byBhcHBlbmQgdGhlIHZhbHVlIG9yIGNsZWFyIGFuZCBtYWtlIHdheSBmb3IgYSBuZXcgb25lLCBcblxuLy8gaG93IGNhbiBJIHByZXZlbnQgdXNlciBmcm9tIGNsaWNraW5nIG11bHRpcGxlIHByb2plY3RzLCBhbmQgYWRkaW5nIHRoZW0gYWxsLCBcblxuLy8geW91IGNhbnQgZGlzYWJsZSB0aGUgYnRuLCBcblxuLy8geW91IGNhbm5vdCBtaXggdGhlIERPTSBsb2dpYyBhbmQgY29uZGl0aW9uYWwgbG9naWMsIFxuXG4vLyB0aGlua2luZyBjb25jZXB0dWFsbHksIHJpZ2h0IG5vdyB0aGUgdXNlciBjYW4gcHJlc3MgdGhlIHByb2plY3QgbmFtZSBhbmQgYXBwZW5kIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gaG93IGNhbiBJIGp1c3QgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uPyBcblxuLy8gY2xlYXIgdGhlIGNvbnRlbnRzIG9mIG9uZSBhbmQgbWFrZSBuZXcuICIsIlxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7XG5cbmltcG9ydCBhcnJheVN0b3JhZ2VTZXRJdGVtIGZyb20gXCIuL3N0b3JhZ2UuanNcIiBcblxuaW1wb3J0IGdldEl0ZW1TdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2UuanNcIjsgXG5cbmltcG9ydCAgcHJvamVjdE5hbWVMb29wIGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0RGlzcGxheUNvbmRpdGlvbmFsTG9naWMgZnJvbSBcIi4vY29uZGl0aW9uYWxMb2dpYy5qc1wiO1xuXG5pbXBvcnQgYXJyYXlTdG9yYWdlVG9kb0l0ZW1zIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gaW1wb3J0IHVwZGF0ZUFycmF5U3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpOyBcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuXG5jb25zdCBjbG9zZU1vZGFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWJ0blwiKVswXTsgXG5cbmxldCBtb2RhbElucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkLXdpdGhpbi1tb2RhbFwiKTsgXG5cbmxldCBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0LWJ0bi13aXRoaW4tbW9kYWxcIik7IFxuXG5sZXQgZm9ybVRhZ0Zvck1vZHVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YWctZm9yLW1vZGFsXCIpOyBcblxubGV0IG1vZGFsQ29udGFpbmVyRm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10b2RvXCIpWzBdOyBcblxubGV0IG92ZXJsYXlGb3JUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1tb2RhbFwiKVswXTsgXG5cbmxldCBtb2RhbEZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtZm9yLWRlbGV0ZS1idG4tdG9kb1wiKVswXTtcblxubGV0IG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm92ZXJsYXktZm9yLXRvZG8tZGVsZXRlLWJ0blwiKVswXTsgXG5cbmxldCBjdXJyZW50UHJvamVjdCBcblxuZnVuY3Rpb24gcHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKSB7IFxuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbiAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSBcblxucHJldmVudERvWW91V2FudFRvRGVsZXRlTW9kYWwoKTtcblxuXG5mdW5jdGlvbiBwcmV2ZW50VG9kb01vZGFsUG9wVXAoKSB7IFxuXG5tb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxub3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59IFxuXG5wcmV2ZW50VG9kb01vZGFsUG9wVXAoKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTsgXG5cbmZ1bmN0aW9uIHByZXZlbnRGb3JtUG9wVXAoKSB7IFxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbn1cblxucHJldmVudEZvcm1Qb3BVcCgpO1xuXG5cbiBjbG9zZU1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gbW9kYWxJbnB1dEZpZWxkLnJlc2V0KCk7XG4gIC8vIHdoZW4geW91IGNsb3NlIGl0LCBzaG91bGQgY2xlYXIgdGhlIGlucHV0IGZpZWxkLFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7XG59KSBcblxuIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSkgXG5cblxuZnVuY3Rpb24gcHJvamVjdE5hbWVGYWN0b3J5KG5hbWUpIHsgXG4gIHJldHVybiB7IFxuICAgIHByb2plY3Q6IG5hbWUsXG4gICAgaWQ6IGNyeXB0by5yYW5kb21VVUlEKCksXG4gICAgdG9kb0l0ZW1zOiBbXSxcbiAgfVxufSBcblxuYWRkUHJvamVjdEJ0bldpdGhpbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbW9kYWxJbnB1dEZpZWxkVmFsdWUgPSBtb2RhbElucHV0RmllbGQudmFsdWU7IFxuXG4gIGxldCBwcm9qZWN0TmFtZU9iamVjdCA9IHByb2plY3ROYW1lRmFjdG9yeShtb2RhbElucHV0RmllbGRWYWx1ZSk7IFxuICBcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdE5hbWVPYmplY3QpOyBcblxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7IFxuXG4gIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG4gIFxuICBmb3JtVGFnRm9yTW9kdWxlLnJlc2V0KCk7IFxuXG59KSBcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRWYWx1ZXNUb0RPTShhcnJheSkgeyBcblxuICBsZXQgdGhlUHJvamVjdHNBcnJheSA9IGFycmF5OyBcblxuICBsZXQgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci1wcm9qZWN0LW5hbWVzLWdvLWhlcmVcIik7IFxuXG4gIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHRoZVByb2plY3RzQXJyYXlbaV07IFxuICAgIC8vIHByb2plY3QgbmFtZVxuICAgIGxldCBwcm9qZWN0SW5kZXhQcm9qZWN0TmFtZVZhbHVlID0gcHJvamVjdEluZGV4LnByb2plY3Q7IFxuXG4gICAgbGV0IHByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgICBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVDb250YWluZXIpOyBcblxuICAgIGxldCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuICAgIFxuICAgIHByb2plY3ROYW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SW5kZXg7IFxuICAgICAgXG4gICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcblxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtY2xpY2stZXZlbnQtY29udGFpbmVyLWZvci1zdHlsZXNcIik7IFxuXG4gICAgICBsZXQgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgbGV0IGFkZEJ0blRvQ3JlYXRlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KVxuXG4gICAgICBsZXQgZGVsZXRlQnRuVG9EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbiAgICAgICAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgICAgICAgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICB9KVxuXG5cblxuICAgICAgYWRkQnRuVG9DcmVhdGVNb2RhbC5zcmMgPSBcIi4uL3BsdXMtc2lnbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbiAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuY2xhc3NMaXN0LmFkZChcImFkZC1idG4tc3ZnLXByb2plY3QtbmFtZS1zdHlsZXNcIik7XG5cbiAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5zcmMgPSBcIi4uL3RyYXNoY2FuLXN2Z3JlcG8tY29tICgxKS5zdmdcIjtcblxuICAgICAgZGVsZXRlQnRuVG9EZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuLXRyYXNoLWNhbi1zdmctaWNvbi1zdHlsZXNcIik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiYWRkLWRlbGV0ZS1idG4tZm9yLXRvZG8tY29udGFpbmVyLXN0eWxlc1wiKTsgXG5cbiAgICAgIGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZS5hcHBlbmQoYWRkQnRuVG9DcmVhdGVNb2RhbCk7IFxuXG4gICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyk7IFxuXG4gICAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZUNsaWNrZWQgPSBlLnRhcmdldC50ZXh0Q29udGVudDsgXG5cbiAgICAgIHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDbGlja2VkKTtcbiAgICAgIFxuICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMpO1xuXG4gICAgICBtYWluQ29udGVudENvbnRhaW5lclByb2plY3ROYW1lcy5hcHBlbmQoYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlKTsgXG4gICAgIFxuICAgICAgZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcbiAgICB9KVxuICB9XG59IFxuXG4gXG5cbmZvcm1UYWdGb3JNb2R1bGUuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pICBcblxubGV0IGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS10aGUtdG9kby1tb2RhbFwiKVswXTtcblxuY2FuY2VsQnRuQWRkVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuICBtb2RhbENvbnRhaW5lckZvclRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuICBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxufSkgXG5cblxubGV0IGNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1hcmsteFwiKTsgXG5cbmNhbmNlbEJ0bkZvckRlbGV0ZVByb2plY3RNb2RhbFguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4gIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4gIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXG59KSBcblxuXG5sZXQgY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVjay1tYXJrXCIpOyBcblxuY2hlY2tNYXJrV2l0aGluRGVsZXRlVG9kb01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyAgXG5cbiAgbGV0IG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpWzBdOyBcblxuICBsZXQgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIilbMF07IFxuICBcbiAgbGV0IHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4gIGxldCB0YXNrSG9sZGVyU3R5bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staG9sZGVyLWZvci10b2RvLXN0eWxlc1wiKVswXTtcblxuICBsZXQgcHJvamVjdElEID0gY3VycmVudFByb2plY3QuaWQ7IFxuICBcbiAgbGV0IHZhbHVlID0gY3VycmVudFByb2plY3Q7IFxuICBcbiAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgXG4gIG1haW5Db250ZW50UHJvamVjdE5hbWVzU3R5bGVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7IFxuXG4gIGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICBwcmludFZhbHVlc1RvRE9NKHByb2plY3RBcnJheSk7IFxuXG4gIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuICAvLyBpdCBpcyBkZWxldGluZyBmcm9tIHN0b3JhZ2UsIGl0IGlzIGp1c3Qgbm90IFxuXG4gIC8vIGRlbGV0aW5nIHRoZSB0b2RvIGZyb20gdGhlIERPTSwgXG4gIC8vIHByb2plY3RzV2l0aGluVG9kb0NvbnRhaW5lci5yZW1vdmUoKSBcblxuICBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcbiAgbW9kYWxGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7ICBcbiAgXG5cbn0pICBcblxuXG5sZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5cbmxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cblxuXG5hZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG4gIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4gIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbiAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4gIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4gIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4gIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuICAvLyBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4gIC8vIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIFxuICBsZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuICBcbiAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb3NGb3JQcm9qZWN0KTsgXG4gIFxuICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG5kaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG59KSAgIFxuXG5mdW5jdGlvbiB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7IFxuICByZXR1cm4geyBcbiAgICB0aXRsZTogdGl0bGUsIFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbiAgICBkdWVEYXRlOiBkdWVEYXRlIFxuICB9XG59ICAgICBcblxuLy8gcHJvYmxlbSBpcyBhcHBlbmRpbmcgYW5kIGRpc3BsYXlpbmcgdG9kbyB2YWx1ZXMgXG5cbi8vIGZvciBlYWNoIHByb2plY3QsIFxuXG4vLyBpc3N1ZSBpcyBzYXZpbmcgZXZlcnkgc2luZ2xlIGlucHV0IGFzIGEgbmV3IGFycmF5IGVudHJ5LCBcblxuLy8gXG5cbmxldCBnZXRQcm9qZWN0SWRcblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpIHsgXG5cbiAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuICBcbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyBcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZ2FwID0gXCIyZW1cIjsgXG5cbiAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XG5cblxuICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuICBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMubGVuZ3RoOyBpKyspIHsgXG4gICAgLy8gbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4gICAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgICBcbiAgICB0YXNrSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIik7XG4gIFxuICAgIFxuICAgIFxuICAgIGxldCBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXNbaV07IFxuXG4gICAgZ2V0UHJvamVjdElkID0gY3VycmVudFByb2plY3QuaWRcblxuICAgIGxldCBwcm9qZWN0VW5pcXVlSWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgbGV0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG5cbiAgICBsZXQgZWRpdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGVkaXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgdGhlIGVkaXQgYnV0dG9uLCBIT0xEIFNUUk9ORyFcIilcbiAgICB9KVxuXG4gICAgZWRpdEVsZW1lbnQuc3JjID0gXCIuLi9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4gICAgZWRpdEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiOyBcblxuICAgIGVkaXRFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjAuMjBlbVwiO1xuXG4gICAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSBcImNoZWNrYm94XCI7IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LnN0eWxlLndpZHRoID0gXCIzMHB4XCI7IFxuXG4gICAgY2hlY2tib3hFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMzBweFwiO1xuXG4gICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyBcblxuICAgIGRlbGV0ZUljb24uaWQgPSBcImRlbGV0ZS1idG4taW5zaWRlLXRvZG9cIjsgXG5cbiAgLy8gICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBkZWxldGVJY29uLmRhdGFzZXQuaW5kZXggPSBpOyBcblxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICAgICAgICAvLyB0YXNrSG9sZGVyLnJlbW92ZSgpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgICBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMuc3BsaWNlKGRlbGV0ZUljb24uZGF0YXNldC5pbmRleCwgMSk7XG4gICAgICBcbiAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG5cbiAgICAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbiAgXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGUuZGF0YXNldC5pbmRleCk7XG5cbiAgICAgIC8vIGZpbHRlciBvdXQgdGhlIHByb2plY3RzIHRoYXQgaGF2ZSBiZWVuIGRlbGV0ZWQsIFxuXG4gICAgICAvLyBzb21ld2F5IHRvIHVwZGF0ZSBwcm9qZWN0QXJyYXksIGFuZCB0aGVuIHBhc3MgdG8gYSBzdG9yYWdlIGZ1bmN0aW9uIFxuXG4gICAgICAvLyBwcm9qZWN0QXJyYXkucHVzaChjdXJyZW50UHJvamVjdCk7IFxuICAgICAgXG4gICAgICAvLyBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gY3VycmVudFByb2plY3QuaWQpO1xuICAgICAgLy8gYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpO1xuICAgICAgXG5cbiAgICAgIC8vIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTtcbiAgICB9KSBcblxuICAgIGRlbGV0ZUljb24uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7IFxuXG4gICAgZGVsZXRlSWNvbi5zdHlsZS53aWR0aCA9IFwiMzBweFwiO1xuXG4gICAgZGVsZXRlSWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4gICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG5cbiAgICAvLyBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7IFxuICAgIC8vICAgLy8gY29uc29sZS5sb2coXCJ0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gdG9kbyBoYXMgYmVlbiBwcmVzc2VkIVwiKTtcbiAgICAgXG4gICAgLy8gfSlcblxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIjsgXG5cbiAgICB0b2RvVGl0bGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC50aXRsZSk7XG5cbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7IFxuXG4gICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcblxuICAgIHRvZG9EZXNjcmlwdGlvbi5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmRlc2NyaXB0aW9uKTtcblxuICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6IFwiXG5cbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICBcbiAgICB0b2RvUHJpb3JpdHkuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5wcmlvcml0eSk7XG4gICAgXG4gICAgdG9kb0R1ZURhdGUuYXBwZW5kKHNlbGVjdGVkUHJvamVjdC5kdWVEYXRlKTtcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9UaXRsZSk7ICBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EZXNjcmlwdGlvbik7XG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZCh0b2RvUHJpb3JpdHkpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9EdWVEYXRlKTsgXG5cbiAgICB0YXNrSG9sZGVyLmFwcGVuZChjaGVja2JveEVsZW1lbnQpOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGRlbGV0ZUljb24pOyBcblxuICAgIHRhc2tIb2xkZXIuYXBwZW5kKGVkaXRFbGVtZW50KTtcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrYmx1ZVwiO1xuXG4gICAgdGFza0hvbGRlci5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUubGluZUhlaWdodCA9IFwiMWVtXCI7IFxuXG4gICAgdGFza0hvbGRlci5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyBcblxuICAgIHRhc2tIb2xkZXIuc3R5bGUud2lkdGggPSBcIjI3NXB4XCI7IFxuXG4gICAgdGFza0hvbGRlci5zdHlsZS5ib3JkZXIgPSBcIjVweCBzb2xpZCBibGFja1wiO1xuXG4gICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZCh0YXNrSG9sZGVyKTtcbiAgICBcbiAgICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG4gIH0gIFxuXG4gICAvLyBsZXQgY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyBsZXQgZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlbGV0ZS1idG4taW5zaWRlLXRvZG9cIik7IFxuXG4gIC8vIC8vIGNvbnNvbGUubG9nKGRlbGV0ZUJ0bldpdGhpblRvZG9JdGVtKTsgXG5cbiAgLy8gbGV0IHRhc2tIb2xkZXJDbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWhvbGRlci1mb3ItdG9kby1zdHlsZXNcIilbMF07IFxuXG4gIC8vIC8vIGNvbnNvbGUubG9nKHRhc2tIb2xkZXJDbGFzcyk7XG5cbiAgLy8gZGVsZXRlQnRuV2l0aGluVG9kb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gIC8vICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGUgZGVsZXRlIGJ1dHRvbiB3aXRoaW4gdG9kbyBoYXMgYmVlbiBwcmVzc2VkIVwiKTtcbiAgLy8gICAgICBsZXQgY3VycmVudFByb2plY3RJZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyAgICAgLy8gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0SWQpOyBcblxuICAvLyAgICAgLy8gIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFByb2plY3QuaWQubGVuZ3RoOyBpKyspIHsgXG4gIC8vICAgICAvLyAgIGxldCBpZCA9IGN1cnJlbnRQcm9qZWN0LmlkOyBcblxuICAvLyAgICAgLy8gICBpZiAoY3VycmVudFByb2plY3RJZCA9PT0gaWQpIHsgXG4gIC8vICAgICAvLyAgICAgLy8gaWYgaWQncyBtYXRjaCByZW1vdmUgdGhlIHNlbGVjdGVkIHByb2plY3QsIFxuICAvLyAgICAgLy8gICB9IGVsc2UgeyBcbiAgLy8gICAgIC8vICAgICByZXR1cm47XG4gIC8vICAgICAvLyAgIH1cblxuICAvLyAgICAgLy8gIH0gXG5cbiAgLy8gICAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5maWx0ZXIoZnVuY3Rpb24ob25lUHJvamVjdElkKSB7IFxuICAgICAgICBcblxuICAgICAgICBcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgXG4gfSBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3RvcmFnZVwiO1xuXG4vLyBpbXBvcnQgYXJyYXlTdG9yYWdlU2V0SXRlbSBmcm9tIFwiLi9zdG9yYWdlLmpzXCIgXG5cbi8vIGltcG9ydCBnZXRJdGVtU3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7IFxuXG4vLyBpbXBvcnQgIHByb2plY3ROYW1lTG9vcCBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG4vLyBpbXBvcnQgcHJvamVjdERpc3BsYXlDb25kaXRpb25hbExvZ2ljIGZyb20gXCIuL2NvbmRpdGlvbmFsTG9naWMuanNcIjtcblxuLy8gaW1wb3J0IGFycmF5U3RvcmFnZVRvZG9JdGVtcyBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuXG4vLyBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cbi8vIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7IFxuXG4vLyBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG5cbi8vIGNvbnN0IGNsb3NlTW9kYWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtYnRuXCIpWzBdOyBcblxuLy8gbGV0IG1vZGFsSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmllbGQtd2l0aGluLW1vZGFsXCIpOyBcblxuLy8gbGV0IGFkZFByb2plY3RCdG5XaXRoaW5Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuLXdpdGhpbi1tb2RhbFwiKTsgXG5cbi8vIGxldCBmb3JtVGFnRm9yTW9kdWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhZy1mb3ItbW9kYWxcIik7IFxuXG4vLyBsZXQgbW9kYWxDb250YWluZXJGb3JUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRvZG9cIilbMF07IFxuXG4vLyBsZXQgb3ZlcmxheUZvclRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdmVybGF5LWZvci10b2RvLW1vZGFsXCIpWzBdOyBcblxuLy8gbGV0IG1vZGFsRm9yVG9kb0RlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC1mb3ItZGVsZXRlLWJ0bi10b2RvXCIpWzBdO1xuXG4vLyBsZXQgb3ZlcmxheUZvclRvZG9EZWxldGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3ZlcmxheS1mb3ItdG9kby1kZWxldGUtYnRuXCIpWzBdOyBcblxuLy8gbGV0IGN1cnJlbnRQcm9qZWN0IFxuXG4vLyBmdW5jdGlvbiBwcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpIHsgXG4gIFxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9IFxuXG4vLyBwcmV2ZW50RG9Zb3VXYW50VG9EZWxldGVNb2RhbCgpO1xuXG5cbi8vIGZ1bmN0aW9uIHByZXZlbnRUb2RvTW9kYWxQb3BVcCgpIHsgXG5cbi8vIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyBvdmVybGF5Rm9yVG9kb01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vIH0gXG5cbi8vIHByZXZlbnRUb2RvTW9kYWxQb3BVcCgpO1xuXG4vLyBleHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdOyBcblxuLy8gZnVuY3Rpb24gcHJldmVudEZvcm1Qb3BVcCgpIHsgXG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4gIFxuLy8gICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuLy8gfVxuXG4vLyBwcmV2ZW50Rm9ybVBvcFVwKCk7XG5cblxuLy8gIGNsb3NlTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG4vLyAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAvLyBtb2RhbElucHV0RmllbGQucmVzZXQoKTtcbi8vICAgLy8gd2hlbiB5b3UgY2xvc2UgaXQsIHNob3VsZCBjbGVhciB0aGUgaW5wdXQgZmllbGQsXG4vLyAgIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTtcbi8vIH0pIFxuXG4vLyAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4vLyB9KSBcblxuXG4vLyBmdW5jdGlvbiBwcm9qZWN0TmFtZUZhY3RvcnkobmFtZSkgeyBcbi8vICAgcmV0dXJuIHsgXG4vLyAgICAgcHJvamVjdDogbmFtZSxcbi8vICAgICBpZDogY3J5cHRvLnJhbmRvbVVVSUQoKSxcbi8vICAgICB0b2RvSXRlbXM6IFtdLFxuLy8gICB9XG4vLyB9IFxuXG4vLyBhZGRQcm9qZWN0QnRuV2l0aGluTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuLy8gICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGxldCBtb2RhbElucHV0RmllbGRWYWx1ZSA9IG1vZGFsSW5wdXRGaWVsZC52YWx1ZTsgXG5cbi8vICAgbGV0IHByb2plY3ROYW1lT2JqZWN0ID0gcHJvamVjdE5hbWVGYWN0b3J5KG1vZGFsSW5wdXRGaWVsZFZhbHVlKTsgXG4gIFxuLy8gICBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0TmFtZU9iamVjdCk7IFxuXG4vLyAgIGFycmF5U3RvcmFnZVNldEl0ZW0ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgcHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyBcbiAgXG4vLyAgIGZvcm1UYWdGb3JNb2R1bGUucmVzZXQoKTsgXG5cbi8vIH0pIFxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBwcmludFZhbHVlc1RvRE9NKGFycmF5KSB7IFxuXG4vLyAgIGxldCB0aGVQcm9qZWN0c0FycmF5ID0gYXJyYXk7IFxuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyLXByb2plY3QtbmFtZXMtZ28taGVyZVwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoZVByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHsgXG5cbi8vICAgICBsZXQgcHJvamVjdEluZGV4ID0gdGhlUHJvamVjdHNBcnJheVtpXTsgXG5cbi8vICAgICBsZXQgcHJvamVjdEluZGV4UHJvamVjdE5hbWVWYWx1ZSA9IHByb2plY3RJbmRleC5wcm9qZWN0OyBcblxuLy8gICAgIGxldCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4vLyAgICAgcHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3RJbmRleFByb2plY3ROYW1lVmFsdWUpO1xuXG4vLyAgICAgbmF2YmFyUHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kKHByb2plY3ROYW1lQ29udGFpbmVyKTsgXG5cbi8vICAgICBsZXQgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50LXNlY3Rpb24tY29udGFpbmVyXCIpWzBdOyBcbiAgICBcbi8vICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEluZGV4OyBcbiAgICAgIFxuLy8gICAgICAgbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLnJlcGxhY2VDaGlsZHJlbigpOyBcblxuLy8gICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDb250YWluZXJGb3JTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICAgICAgcHJvamVjdE5hbWVWYWx1ZUNvbnRhaW5lckZvclN0eWxlcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWNsaWNrLWV2ZW50LWNvbnRhaW5lci1mb3Itc3R5bGVzXCIpOyBcblxuLy8gICAgICAgbGV0IGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIGxldCBhZGRCdG5Ub0NyZWF0ZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICAgIG1vZGFsQ29udGFpbmVyRm9yVG9kby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgICAgICAgIG92ZXJsYXlGb3JUb2RvTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IGRlbGV0ZUJ0blRvRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuXG4vLyAgICAgICAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxuXG4vLyAgICAgICAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuLy8gICAgICAgfSlcblxuXG5cbi8vICAgICAgIGFkZEJ0blRvQ3JlYXRlTW9kYWwuc3JjID0gXCIuLi9wbHVzLXNpZ24tc3ZncmVwby1jb20gKDEpLnN2Z1wiO1xuXG4vLyAgICAgICBhZGRCdG5Ub0NyZWF0ZU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnRuLXN2Zy1wcm9qZWN0LW5hbWUtc3R5bGVzXCIpO1xuXG4vLyAgICAgICBkZWxldGVCdG5Ub0RlbGV0ZVRvZG8uc3JjID0gXCIuLi90cmFzaGNhbi1zdmdyZXBvLWNvbSAoMSkuc3ZnXCI7XG5cbi8vICAgICAgIGRlbGV0ZUJ0blRvRGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0bi10cmFzaC1jYW4tc3ZnLWljb24tc3R5bGVzXCIpO1xuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuY2xhc3NMaXN0LmFkZChcImFkZC1kZWxldGUtYnRuLWZvci10b2RvLWNvbnRhaW5lci1zdHlsZXNcIik7IFxuXG4vLyAgICAgICBidG5Db250YWluZXJBZGRhbmREZWxldGUuYXBwZW5kKGFkZEJ0blRvQ3JlYXRlTW9kYWwpOyBcblxuLy8gICAgICAgYnRuQ29udGFpbmVyQWRkYW5kRGVsZXRlLmFwcGVuZChkZWxldGVCdG5Ub0RlbGV0ZVRvZG8pOyBcblxuLy8gICAgICAgbGV0IHByb2plY3ROYW1lVmFsdWVDbGlja2VkID0gZS50YXJnZXQudGV4dENvbnRlbnQ7IFxuXG4vLyAgICAgICBwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ2xpY2tlZCk7XG4gICAgICBcbi8vICAgICAgIG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzLmFwcGVuZChwcm9qZWN0TmFtZVZhbHVlQ29udGFpbmVyRm9yU3R5bGVzKTtcblxuLy8gICAgICAgbWFpbkNvbnRlbnRDb250YWluZXJQcm9qZWN0TmFtZXMuYXBwZW5kKGJ0bkNvbnRhaW5lckFkZGFuZERlbGV0ZSk7IFxuICAgICBcbi8vICAgICAgIGRpc3BsYXlDdXJyZW50UHJvamVjdFRvZG8oKTsgXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSBcblxuIFxuXG4vLyBmb3JtVGFnRm9yTW9kdWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbi8vICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyB9KSAgXG5cbi8vIGxldCBjYW5jZWxCdG5BZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtdGhlLXRvZG8tbW9kYWxcIilbMF07XG5cbi8vIGNhbmNlbEJ0bkFkZFRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG5cbi8vICAgbW9kYWxDb250YWluZXJGb3JUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXG5cbi8vICAgb3ZlcmxheUZvclRvZG9Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbi8vIH0pIFxuXG5cbi8vIGxldCBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tYXJrLXhcIik7IFxuXG4vLyBjYW5jZWxCdG5Gb3JEZWxldGVQcm9qZWN0TW9kYWxYLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcblxuLy8gICBtb2RhbEZvclRvZG9EZWxldGVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcblxuLy8gICBvdmVybGF5Rm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFxuLy8gfSkgXG5cblxuLy8gbGV0IGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stbWFya1wiKTsgXG5cbi8vIGNoZWNrTWFya1dpdGhpbkRlbGV0ZVRvZG9Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgIFxuXG4vLyAgIGxldCBtYWluQ29udGVudFByb2plY3ROYW1lc1N0eWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtbmFtZS1jbGljay1ldmVudC1jb250YWluZXItZm9yLXN0eWxlc1wiKVswXTsgXG5cbi8vICAgbGV0IGFkZEFuZERlbGV0ZUJ0blRvZG9Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhZGQtZGVsZXRlLWJ0bi1mb3ItdG9kby1jb250YWluZXItc3R5bGVzXCIpWzBdOyBcbiAgXG4vLyAgIGxldCBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdG9kb3MtY29udGFpbmVyXCIpO1xuXG4vLyAgIGxldCBwcm9qZWN0SUQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gIFxuLy8gICBsZXQgdmFsdWUgPSBjdXJyZW50UHJvamVjdDsgXG4gIFxuLy8gICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0QXJyYXkuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gY3VycmVudFByb2plY3QuaWQpO1xuICBcbi8vICAgbWFpbkNvbnRlbnRQcm9qZWN0TmFtZXNTdHlsZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTsgXG5cbi8vICAgYWRkQW5kRGVsZXRlQnRuVG9kb01vZGFsLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4vLyAgIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTsgXG5cbi8vICAgYXJyYXlTdG9yYWdlU2V0SXRlbShwcm9qZWN0QXJyYXkpOyBcblxuLy8gICBwcm9qZWN0c1dpdGhpblRvZG9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgIG1vZGFsRm9yVG9kb0RlbGV0ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuXG4vLyAgIG92ZXJsYXlGb3JUb2RvRGVsZXRlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuXG5cbi8vIH0pICBcblxuXG4vLyBsZXQgYWRkQnRuVG9Eb01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay10b2RvLW1vZGFsXCIpOyBcblxuXG5cbi8vIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZvcm0tZm9yLWNyZWF0aW5nLXRvZG8tdGFza1wiKTtcblxuLy8gZm9ybUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vIH0pXG5cblxuXG4vLyBhZGRCdG5Ub0RvTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IFxuICBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcblxuXG4vLyAgIGxldCB0aXRsZUlucHV0Rm9yVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtb2YtdG9kby1pbnB1dC1mb3JtXCIpOyBcblxuLy8gICBsZXQgdGl0bGVJbnB1dFZhbHVlID0gdGl0bGVJbnB1dEZvclRvZG8udmFsdWU7IFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHRpdGxlSW5wdXRWYWx1ZSk7IFxuXG4vLyAgIGxldCBkZXNjcmlwdGlvbkZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uLWZvci10b2RvXCIpOyBcblxuLy8gICBsZXQgZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUgPSBkZXNjcmlwdGlvbkZvclRvZG8udmFsdWU7IFxuICBcbi8vICAgLy8gY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2goZGVzY3JpcHRpb25Gb3JUb2RvVmFsdWUpOyBcblxuLy8gICBsZXQgZHVlRGF0ZUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlLWZvci10b2RvLXRhc2tcIik7IFxuXG4vLyAgIGxldCBkdWVEYXRlRm9yVG9kb1ZhbHVlID0gZHVlRGF0ZUZvclRvZG8udmFsdWU7IFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuXG4vLyAgIGxldCBwcmlvcml0eUZvclRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5LWZvci10b2RvLXRhc2tcIik7IFxuXG4vLyAgIGxldCBwcmlvcml0eUZvclRvZG9WYWx1ZSA9IHByaW9yaXR5Rm9yVG9kby52YWx1ZTsgIFxuXG4vLyAgIC8vIGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtcy5wdXNoKHByaW9yaXR5Rm9yVG9kb1ZhbHVlKTtcblxuLy8gICAvLyBsZXQgY3VycmVudFByb2plY3RzVG9kb3MgPSBjdXJyZW50UHJvamVjdC50b2RvSXRlbXM7IFxuXG4vLyAgIC8vIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4gIFxuLy8gICBsZXQgdG9kb3NGb3JQcm9qZWN0ID0gdG9kb09iamVjdEZhY3RvcnkodGl0bGVJbnB1dFZhbHVlLCBkZXNjcmlwdGlvbkZvclRvZG9WYWx1ZSwgcHJpb3JpdHlGb3JUb2RvVmFsdWUsIGR1ZURhdGVGb3JUb2RvVmFsdWUpO1xuICBcbi8vICAgY3VycmVudFByb2plY3QudG9kb0l0ZW1zLnB1c2godG9kb3NGb3JQcm9qZWN0KTsgXG4gIFxuLy8gICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSk7XG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50b2RvSXRlbXMpO1xuXG4vLyBkaXNwbGF5Q3VycmVudFByb2plY3RUb2RvKCk7IFxuXG4vLyB9KSAgIFxuXG4vLyBmdW5jdGlvbiB0b2RvT2JqZWN0RmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7IFxuLy8gICByZXR1cm4geyBcbi8vICAgICB0aXRsZTogdGl0bGUsIFxuLy8gICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiwgXG4vLyAgICAgcHJpb3JpdHk6IHByaW9yaXR5LCBcbi8vICAgICBkdWVEYXRlOiBkdWVEYXRlIFxuLy8gICB9XG4vLyB9ICAgICBcblxuLy8gLy8gcHJvYmxlbSBpcyBhcHBlbmRpbmcgYW5kIGRpc3BsYXlpbmcgdG9kbyB2YWx1ZXMgXG5cbi8vIC8vIGZvciBlYWNoIHByb2plY3QsIFxuXG4vLyAvLyBpc3N1ZSBpcyBzYXZpbmcgZXZlcnkgc2luZ2xlIGlucHV0IGFzIGEgbmV3IGFycmF5IGVudHJ5LCBcblxuLy8gLy8gXG5cbi8vIGxldCBnZXRQcm9qZWN0SWRcblxuLy8gZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpIHsgXG5cbi8vICAgbGV0IHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuICBcbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiOyBcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZ2FwID0gXCIyZW1cIjtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZmxleFdyYXAgPSBcIndyYXBcIjtcblxuLy8gICAvLyBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuLy8gICBwcm9qZWN0VG9kb0NvbnRhaW5lckRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7IFxuICBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UHJvamVjdC50b2RvSXRlbXMubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgLy8gbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG4vLyAgICAgbGV0IHRhc2tIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbiAgXG4gICAgXG4vLyAgICAgbGV0IHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0LnRvZG9JdGVtc1tpXTsgXG5cbi8vICAgICBnZXRQcm9qZWN0SWQgPSBjdXJyZW50UHJvamVjdC5pZFxuICAgIFxuLy8gICAgIGxldCBwcm9qZWN0VW5pcXVlSWQgPSBjdXJyZW50UHJvamVjdC5pZDsgXG4gICAgXG4vLyAgICAgbGV0IGNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTsgXG4gICAgXG4vLyAgICAgY2hlY2tib3hFbGVtZW50LnR5cGUgPSBcImNoZWNrYm94XCI7IFxuXG4vLyAgICAgbGV0IGVkaXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zcmMgPSBcIi4uL2VkaXQtc3ZncmVwby1jb20uc3ZnXCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCIzMHB4XCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjMwcHhcIjsgXG5cbi8vICAgICBlZGl0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7IFxuXG4vLyAgICAgZWRpdEVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMC4yMGVtXCI7XG5cblxuXG4vLyAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiOyBcblxuLy8gICAgIHRvZG9UaXRsZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnRpdGxlKTtcblxuLy8gICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuXG4vLyAgICAgdG9kb0Rlc2NyaXB0aW9uLmFwcGVuZChzZWxlY3RlZFByb2plY3QuZGVzY3JpcHRpb24pO1xuXG4vLyAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpOyBcblxuLy8gICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTogXCJcblxuLy8gICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgIFxuLy8gICAgIHRvZG9Qcmlvcml0eS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LnByaW9yaXR5KTtcbiAgICBcbi8vICAgICB0b2RvRHVlRGF0ZS5hcHBlbmQoc2VsZWN0ZWRQcm9qZWN0LmR1ZURhdGUpO1xuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb1RpdGxlKTsgIFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0Rlc2NyaXB0aW9uKTtcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKHRvZG9Qcmlvcml0eSk7IFxuXG4vLyAgICAgdGFza0hvbGRlci5hcHBlbmQodG9kb0R1ZURhdGUpOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuYXBwZW5kKGNoZWNrYm94RWxlbWVudCk7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2JsdWVcIjtcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjFlbVwiOyBcblxuLy8gICAgIHRhc2tIb2xkZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG5cbi8vICAgICB0YXNrSG9sZGVyLnN0eWxlLndpZHRoID0gXCIyNzVweFwiOyBcblxuLy8gICAgIHByb2plY3RUb2RvQ29udGFpbmVyRGlzcGxheS5hcHBlbmQodGFza0hvbGRlcik7XG4gICAgXG4vLyAgICAgLy8gcHJvamVjdFRvZG9Db250YWluZXJEaXNwbGF5LmFwcGVuZChjaGVja2JveEVsZW1lbnQpO1xuLy8gICB9IFxuICBcbi8vICB9IFxuXG5cbi8vIHByYWN0aWNlIHdpdGggb2JqZWN0cyBcblxuLy8gbGV0IGFycmF5MSA9IFtdO1xuXG4vLyBjb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRhdGUpIHtcbi8vICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICB0aGlzLmRhdGUgPSBkYXRlO1xuLy8gfTtcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbi8vICAgbGV0IHh5eiA9IG5ldyBUb2RvKGAke2l9IHRpdGxlYCwgaSlcbi8vICAgYXJyYXkxLnB1c2goeHl6KTtcbi8vIH1cblxuLy8gY29uc29sZS5sb2coYXJyYXkxKSBcblxuXG4vLyBwcmFjdGljZSBtYWtpbmcgb2JqZWN0cyBcblxuLy8gcHVzaGluZyBpbnRvIGFuIGFycmF5IFxuXG4vLyBpdGVyYXRpbmcgdGhyb3VnaCB0aGUgYXJyYXksIFxuXG4vLyBnZXQgZWFjaCBmaWVsZCBieSBpdCdzIGtleSwgIFxuXG4vLyBsZXQgbmV3QXJyID0gW107IFxuXG4vLyBmdW5jdGlvbiBjcmVhdGluZ09iamVjdHModGl0bGUsZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7IFxuLy8gICBjb25zdCBuZXdPYmplY3QgPSB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkgfSBcbi8vICAgbmV3QXJyLnB1c2gobmV3T2JqZWN0KTsgXG4gIFxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0Fyci5sZW5ndGg7IGkrKykgeyBcbiAgIFxuLy8gICAgIGxldCB0aXRsZSA9IG5ld0FyclswXS50aXRsZTtcbi8vICAgICBsZXQgZGVzY3JpcHRpb24gPSBuZXdBcnJbMF0uZGVzY3JpcHRpb247IFxuLy8gICAgIGxldCBkdWVEYXRlID0gbmV3QXJyWzBdLmRhdGU7XG4vLyAgICAgbGV0IHByaW9yaXR5TGV2ZWwgPSBuZXdBcnJbMF0ucHJpb3JpdHk7XG4gICAgXG4gICAgXG4vLyAgIH1cbi8vIH0gXG5cbi8vIGNyZWF0aW5nT2JqZWN0cyhcIkFsZWNcIiwgXCJ3b3JraW5nIG9uIHRvZG8tbGlzdFwiLCBcIjQvMjAvMjNcIiwgXCJIaWdoXCIpOyAgXG5cbi8vIGNyZWF0aW5nT2JqZWN0cyhcIkhlbGxvXCIsIFwiQ2hlY2sgMS4uMlwiLCBcIjYvMjAvMjNcIiwgXCJIaWdoXCIpOyBcblxuLy8gZ2V0dGluZyBhbGwgdGhlIGtleXMgZnJvbSB0aGUgZmlyc3Qgb2JqIGluIHRoZSBhcnJheVxuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0udGl0bGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0uZGVzY3JpcHRpb24pO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMF0uZGF0ZSk7XG5cbi8vIGNvbnNvbGUubG9nKG5ld0FyclswXS5wcmlvcml0eSk7IFxuXG4vLyBnZXR0aW5nIGFsbCB0aGUga2V5cyBmcm9tIHRoZSBzZWNvbmQgb2JqIGluIHRoZSBhcnJheSBcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLnRpdGxlKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLmRlc2NyaXB0aW9uKTtcblxuLy8gY29uc29sZS5sb2cobmV3QXJyWzFdLmRhdGUpO1xuXG4vLyBjb25zb2xlLmxvZyhuZXdBcnJbMV0ucHJpb3JpdHkpOyBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIC8vIGl0IHdhcyB0aGUgbG9vcCwgW2ldIHdhcyB0YWtpbmcgaW4gYSBzaW5nbGUgdmFyaWFibGUgXG5cbiAvLyBub3cgd2UgaGF2ZSB0aGUgdG9kbyBpdGVtIHdpdGhpbiBhIHNpbmdsZSBkaXYgYW5kIHN0eWxlIFxuXG4vLyBlYWNoIHRvZG8gaXRlbSBpcyBpbnNpZGUgaXQncyBvd24gZGl2LCBcblxuLy8gZWFjaCB0b2RvIGl0ZW0gbmVlZHMgdG8gYmUgaW5zaWRlIG9uZSBkaXYsIFxuXG4vLyBOT1QgRUFDSCBUT0RPIElURU0gSU5TSURFIEEgRElWLCBcblxuLy8gZ2V0IGFsbCB0aGUgdG9kbydzLiBcblxuXG4vLyBJIGRvbnQgdW5kZXJzdGFuZCB3aHkgdGhpcyBpcyBzbyBmdWNraW5nIGNvbmZ1c2luZywgXG5cbi8vIGkganVzdCB3YW50IGVhY2ggdG9kbyB0byBiZSBpdCdzIG93biBkaXYsIFxuXG4vLyB0aGVuIGFwcGVuZCB0byB0aGUgRlVDS0lORyBDT05UQUlORVIhISEgXG5cbi8vIHVzZSBhIGxvb3AsIGdldCBwcm9qZWN0LCBhcHBlbmQgdG8gZGl2LCB0aGVuIGFwcGVuZCB0byBzZWN0aW9uLCBcblxuLy8gd2h5IGFyZSB0aGV5IHN0aWxsIGJ1bmNoZWQgdG9nZXRoZXI/Pz8gXG5cblxuLy8gaG93IGNhbiBJIG1ha2UgZWFjaCBzZXQgb2YgdG9kb3MgYSBzZXBlcmF0ZSBkaXY/PyBcblxuLy8gYXBwZW5kIHRoZSB0b2RvJ3MgdG8gYSBkaXYgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyLCBcblxuXG4vLyBzdHlsZSBlYWNoIGRpdiwgdGhlbiBhcHBlbmQgdG8gY29udGFpbmVyLCBcblxuLy8gTG9vayBvdmVyIGNvZGUsIFxuXG4vLyBJIHdhbnQgdG8gZGlzcGxheSB0aGUgdG9kbydzIGZvciBlYWNoIHByb2plY3QsIFxuXG4vLyBob3cgYW0gSSBhZGRpbmcgdGhlIHRvZG8ncywgXG5cbi8vIHN0cmlja2x5IGxvb2sgYXQgdGhlIGZ1bmN0aW9uLCBcblxuXG5cblxuLy8gZGlzcGxheUN1cnJlbnRQcm9qZWN0VG9kbygpOyBcblxuXG5cblxuXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFRvRG9WYWx1ZXMocHJvamVjdCkgeyBcbiAgXG4vLyAgIGxldCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIilbMF07IFxuXG4vLyAgIGxldCBwcm9qZWN0VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10b2Rvcy1jb250YWluZXJcIik7IFxuXG4vLyAgIGxldCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgIGxldCBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDsgXG5cbi8vICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0Lmxlbmd0aDsgaSsrKSB7IFxuLy8gICAvLyAgIGxldCB4ID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdFtpXTsgXG5cbi8vICAgLy8gICBjb25zb2xlLmxvZyh4KTsgXG4vLyAgIC8vIH1cblxuLy8gICBsZXQgZGlzcGxheVRpdGxlID0gZGlzcGxheVRvZG9DdXJyZW50UHJvamVjdC50aXRsZTsgXG5cbi8vICAgbGV0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRpc3BsYXlUb2RvQ3VycmVudFByb2plY3QuZGVzY3JpcHRpb247IFxuXG4vLyAgIGxldCBkaXNwbGF5UHJpb3JpdHkgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LnByaW9yaXR5OyBcblxuLy8gICBsZXQgZGlzcGxheUR1ZURhdGUgPSBkaXNwbGF5VG9kb0N1cnJlbnRQcm9qZWN0LmR1ZURhdGU7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5VGl0bGUpO1xuICBcbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlEZXNjcmlwdGlvbik7IFxuXG4vLyAgIHByb2plY3RUb2RvQ29udGFpbmVyLmFwcGVuZChkaXNwbGF5RHVlRGF0ZSk7XG5cbi8vICAgcHJvamVjdFRvZG9Db250YWluZXIuYXBwZW5kKGRpc3BsYXlQcmlvcml0eSk7IFxuXG5cbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIG9rIEkgYW0gYWJsZSB0byBnZXQgdGhlIHZhbHVlcywgSSBhbSBhYmxlIHRvIHByaW50IHRoZSB2YWx1ZXMgdG8gdGhlIERPTSwgXG5cbi8vIGhvdyBjYW4gSSBwZXJtYW5lbnRseSBhZGQgdGhlc2UgdG9kbyBpdGVtcyBvbnRvIGVhY2ggcHJvamVjdCBcblxuLy8gYW5kIHNhdmUgdGhlbSBlYWNoIHRpbWUgc28gdGhleSByZWxvYWQgb24gcmVmcmVzaD8gXG5cbi8vIEkgY2FuIGdyYWIgdGhlIGN1cnJlbnQgcHJvamVjdCwgdG9nZ2xlIGJhY2sgYW5kIGZvcnRoLCBiZXR3ZWVuIHByb2plY3RzIFxuXG4vLyB0aGVuIGhvdyBjYW4gSSBhZGQgdGhlc2UgbmV3bHkgYWRkZWQgdG9kbydzIGJhY2sgaW50byB0aGUgYXJyYXksIFxuXG4vLyBwdXNoIHRoZW0gYmFjayBpbnRvIHRoZSBhcnJheT8gIFxuXG4vLyBJIGFibGUgdG8gYWRkIHRvZG8gaXRlbXMgaW50byBhIHByb2plY3QsIGJ1dCBob3cgY2FuIEkgcGVybWFuZW50bHkgYWRkICB0aGVtPyBcblxuLy8gZG8gSSBuZWVkIHRvIHB1c2ggdGhlbSBiYWNrIGludG8gdGhlIGFycmF5PyBcblxuLy8gXG5cblxuXG5cbi8vIGdldCBhbGwgdGhlIHZhbHVlcywgd2l0aGluIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGdldCB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgaW5wdXQgZmllbGRzLCBcblxuLy8gb25jZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIHZhbHVlcyBhcmUgc2F2ZWQsIFxuXG4vLyBwYXNzZWQgdG8gdGhlIHNwZWNpZmljIHByb2plY3RzIHRvZG8gYXJyYXksIFxuXG4vLyBhbHNvIHBhc3NlZCB0byBzdG9yYWdlIHRvbyBzbyB0aGUgdG9kbyBhcnJheSBpcyB0aGUgc2FtZSBhcyByZWd1bGFyIHByb2plY3QgYXJyYXkgXG5cbi8vIHNvIHdlIGhhdmUgdG8gYWJpbGl0eSB0byBnZXQgdGhlIHZhbHVlcywgXG5cbi8vIGFuZCBwdXNoIHRoZW0gdG8gdGhlIGNvcnJlY3QgcHJvamVjdCwgXG5cbi8vIHRoZXkgZG8gbm90IHNhdmUsIGFuZCBjbGVhciB1cG9uIHJlZnJlc2guIFxuXG4vLyBob3cgY2FuIEkgcHVzaCB0aGVzZSB2YWx1ZXMgaW50byB0aGUgYXJyYXksIHBlcm1hbmVudGx5IHNhdmUgdGhlbSwgXG5cbi8vIGFuZCB0aGVuIGRpc3BsYXkgdGhlbT8gSG93IGNhbiBJIGRpc3BsYXkgdGhlIHRvZG8ncz8gXG5cbi8vIERvIEkgaGF2ZSB0byBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcHJvamVjdHMgYXJyYXk/IFxuXG4vLyBkbyBJIGhhdmUgdG8gcGFzcyBwcm9qZWN0IGFycmF5IGFnYWluPyBcblxuLy8geW91IHdpbGwgaGF2ZSB0byBkaXNwbGF5IHRoZSBwcm9qZWN0cyBhZ2FpbiBcblxuLy8gdGhlIHRvZG8ncyBhcmUgYmVpbmcgdXBkYXRlZCBcblxuLy8gcHVzaCB0aGUgdXBkYXRlZCBwcm9qZWN0c0FycmF5LCBhbmQgZmluZCBhIHdheSB0byBkaXNwbGF5IHRvZG8ncyxcblxuLy8gXG5cblxuXG5cbi8vIGNvbnN0IEFwcCA9ICAoKCkgPT4ge1xuLy8gICAvLyBsZXQgcHJvamVjdEFycmF5ID0gW11cbi8vICAgbGV0IGN1cnJlbnRQcm9qZWN0XG5cbi8vICAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuLy8gICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuLy8gICAgICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuLy8gICAgICAgcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4vLyAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSlcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0KSB7XG4vLyAgICAgICBwcm9qZWN0QXJyYXkgPSBwcm9qZWN0LmZpbHRlcihwID0+IHAuaWQgIT09IHByb2plY3QuaWQpXG4vLyAgICAgICBhcnJheVN0b3JhZ2VTZXRJdGVtKHByb2plY3RBcnJheSlcbi8vICAgfVxuXG4vLyAgIHJldHVybiB7c2V0Q3VycmVudFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0LCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0fVxuLy8gfSkoKVxuXG5cblxuLy8gSGVsbG8sIEkgYW0gcnVubmluZyBpbnRvIGEgc21hbGwgcHJvYmxlbSB3aXRoIHRvZG8sIEknbSB0cnlpbmcgdG8gaW1wbGVtZW50IHNvbWUgbG9naWMgdGhhdCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIHRyYXNoIGljb24vZGVsZXRlIHByb2plY3QgYnRuLCBpdCB3aWxsIGNsZWFyIHRoZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgRE9NLCBhbmQgaW4gdGhlIFwieW91ciBwcm9qZWN0c1wiIHNlY3Rpb24uIEJhc2ljYWxseSBqdXN0IHVzaW5nIGEgbGlzdGVuZXIsIHRoYXQgd2hlbiB0aGUgdXNlciBjb25maXJtcyB0byBkZWxldGUgdGhlIHByb2plY3QsIEkgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBkaXNwbGF5LCB0aGVuIHJlbW92ZSB0aGUgdmFsdWUuIFRoZSBwcm9ibGVtIGlzIEkgZ2V0IHVuZGVmaW5lZCB3aGVuIEkgdHJ5IHRoaXMgYXBwcm9hY2gsIHdoaWNoIGlzIHN0cmFuZ2UgYmVjYXVzZSBJJ20gZ2V0dGluZyB0aGUgZWxlbWVudCwgdGhlcmUgaXMgYSB2YWx1ZSBpbnNpZGUgdGhlcmUsIHRoZW4ganVzdCB1c2luZ3IgLnZhbHVlLiBcblxuXG5cbi8vIHJ1bm5pbmcgaW50byBhIHByb2JsZW0gd2l0aCB0b2RvLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIHRyYXNoIGljb24vZGVsZXRlIGJ0biBhbmQgdGhleSBjb25maXJtIFxuXG4vLyB0aGV5IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0LCBJIHdhbnQgdG8gZGVsZXRlIGl0IGZyb20gbWFpbiBjb250YWluZXIgYXMgd2VsbCBhcyB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gTm90IHN1cmUgSWYgSSdtIGRvaW5nIHRoaXMgcmlnaHQgYnV0IEkgY2FuIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhbmQgdGhlbiB1c2UgcmVwbGFjZUNoaWxkcmVuIHRvIGNsZWFyIHRoZSBET00gXVxuXG4vLyBidXQgSSBhbSBnZXR0aW5nIHByZXR0eSBzdHVjayBvbiBob3cgdG8gZGVsZXRlIGl0IGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbj8gXG5cbi8vIEJhc2ljYWxseSBJIHRoaW5rIG9mIHNvbWVob3cgZ2V0dGluZyB0aGUgdmFsdWUgZnJvbSB0aGUgbWFpbiBjb250YWluZXIsIGFzIHdlbGwgYXMgdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyB0aGVuIHVzaW5nIHJlbW92ZUNoaWxkIHRvIGRlbGV0ZSB0aGUgcHJvamVjdCBuYW1lIGluIGJvdGggcGxhY2VzLCBcblxuXG5cbiAgXG4vLyBPSyB3ZWxsIHRoaXMgaXMgb25lIHdheSB0byBjbGVhciB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIERPTSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYWNjZXNzIHRoYXQgc2FtZSBwcm9qZWN0IG5hbWUgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uIGFuZCBkZWxldGUgdGhhdD8gXG5cbi8vIEkgbmVlZCB0byBhbHNvIGRlbGV0ZSB0aGF0IHNhbWUgcHJvamVjdCBuYW1lIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLiBsb29rIHVwIHJlcGxhY2VDaGlsZHJlblxuXG4vLyBub3QgZ29pbmcgdG8gd29yayBiZWNhdXNlIHdoYXQgYXJlIHlvdSByZXBsYWNpbmcgd2l0aD8gSG93IGRvIHlvdSBrbm93IHdoaWNoIGVsZW1lbnQgdG8gcmVwbGFjZSBpdCB3aXRoPyBcblxuXG5cbi8vIGxldCBjYW5jZWxCdG5BcnJheSA9IEFycmF5LmZyb20oY2FuY2VsQnRuQWRkVG9kb01vZGFsKTtcblxuXG5cbi8vIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBcblxuLy8gbGV0IG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTsgXG5cbi8vIGNvbnNvbGUubG9nKG1haW5Db250ZW50Q29udGFpbmVyUHJvamVjdE5hbWVzKTtcblxuLy8gZnVuY3Rpb24gcHJvamVjdE5hbWVzQ2xpY2tFdmVudChhcnJheSkgeyBcbi8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHsgXG4vLyAgICAgbGV0IHByb2plY3ROYW1lSW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuICAgIFxuLy8gICB9XG4vLyB9XG5cbi8vIHByb2plY3ROYW1lc0NsaWNrRXZlbnQocHJvamVjdEFycmF5KTtcblxuXG5cbi8vIEkgdGhpbmsgSSBOZWVkIHRvIG1ha2UgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZG9uJ3Qgd2FudCB0byBoYXZlIHRvbyBtdWNoIGdvaW5nIG9uIGluIG9uZSBmdW5jdGlvbiwgXG5cbi8vIHVzZSB0aGUgc2FtZSBsb2dpYywgbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXksIFxuIFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGVQcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0SW5kZXggPSB0aGVQcm9qZWN0c0FycmF5W2ldOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcblxuLy8gICBwcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEluZGV4LnByb2plY3QpO1xuXG4vLyAgIG5hdmJhclByb2plY3ROYW1lQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4vLyB9XG5cblxuXG5cblxuXG4vLyBvayBuZXh0LCBwcm9qZWN0IG5hbWVzIGFyZSBiZWluZyBhZGRlZCBkeW5hbWljYWxseSwgdGhleSBhcmUgcHJvcGVybHkgYmVpbmcgYWRkZWQgdG8gdGhlIGFycmF5IGFuZCBwcm9wZXJseSBiZWluZyBhZGRlZCB0byBsb2NhbCBzdG9yYWdlLCBcblxuLy8gbmV4dCB3aGVuIEkgY2xpY2sgb24gdGhlIHByb2plY3QsIHRoYXQgcHJvamVjdCdzIG5hbWUgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgXG5cbi8vIGlmIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBjbGVhciB0aGUgY29udGVudHMgb2YgdGhlIHByZXZpb3VzIHByb2plY3QgYW5kIGRpc3BsYXkgdGhlIG5ldyBwcm9qZWN0LCBcblxuLy8gcmVtZW1iZXIgb25seSBvbmUgcHJvamVjdCBpcyBhZGRlZCBhdCBhIHRpbWUsIHNob3VsZCBub3QgYWRkIG9udG8uIHNob3cgdGhlIGNsaWNrZWQgb24gcHJvamVjdCwgYWxvbmcgd2l0aCB0aGUgdHdvIGJ0bnMsIGFkZCBhbmQgZGVsZXRlIGZvciB0aGUgdG9kbydzIFxuXG4vLyBwcm9qZWN0IG5hbWUgaXMgY2xpY2tlZCwgc2hvdyB0aGF0IHByb2plY3QsIHVzZXIgY2Fubm90IGFwcGVuZCB0aGF0IHByb2plY3QgbXVsdGlwbGUgdGltZXMgYnkgY2xpY2tpbmcsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciB0aGUgb2xkIGFuZCBtYWtlIHdheSBmb3IgdGhlIG5ldyBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQsIFxuXG4vLyB0aGlzIHdpbGwgYmUgYSBzZXBlcmF0ZSBmdW5jdGlvbiwgZmlyc3QgSSBmZWVsIGxpa2UgeW91IHdpbGwgbmVlZCB0byBsb29wIHRocm91Z2ggcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggcHJvamVjdCBmcm9tIHRoZSBhcnJheSwgaW5zaWRlIHRoZSBsaXN0ZW5lciwgbG9naWMgd2lsbCBncmFiIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIGFuZCBhcHBlbmQgdmFsdWVzIHRvIGl0LCBcblxuLy8geW91IHdpbGwgcHJvYmFibHkgbmVlZCBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgdG8gZGV0ZXJtaW5lIGlmIHRoZSBwcm9qZWN0IGlzIGFscmVhZHkgYWRkZWQgc3VjaCBhcyBJRCdzIG1hdGNoaW5nLCBcblxuLy8gaWYgSUQgbWF0Y2hlcyB3aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IGZyb20gYWRkaW5nIGFnYWluLCBlbHNlIGlmIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgY29udGFpbmVyLCBcblxuLy8gYmVmb3JlIHRoZSBwcm9qZWN0IG5hbWUgaXMgYXBwZW5kZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIGNhbGwgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgaWYgdGhhdCBuYW1lcyBpZCBtYXRjaGVzIHRoZSBJRCB0aGF0IHdhcyBjbGlja2VkLCBcblxuLy8gSSB3b3VsZCBzYXkgZmlyc3QgbGV0J3MgbWFrZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGdyYWIgYWxsIHRoZSBwcm9qZWN0IG5hbWVzIGFuZCBJRD8gXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBlYWNoIHByb2plY3QsIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBcblxuLy8gSSdtIG5vdCBzdXJlIHlvdSBuZWVkIHRvIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3RzLCBzZWVtcyBsaWtlIHlvdXIgZ2V0dGluZyBwcm9qZWN0IHRhcmdldCB2YWx1ZSwgd2l0aCBlLnRhcmdldC50ZXh0Q29udGVudCBcblxuLy8gbm93IEkgYmVsaWV2ZSB3aGF0IHlvdSBuZWVkIHRvIGZpZ3VyZSBvdXQgaXMgaG93IHRvIGRpc3BsYXkgdGhlIGNlcnRhaW4gcHJvamVjdCwgYmFzZWQgb24gd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHJlbWVtYmVyIHJlcGxhY2UgdGhlIGNvbnRlbnQgd2l0aGluIG1haW4gY29udGFpbmVyLCBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IGFsbCBiYXNlZCBvbiBidG4gY2xpY2sgXG5cbi8vIHRoaW5rIGJhY2sgdG8gcmVzdGF1cmFudCBwYWdlLCBcblxuLy8gSSBzb21laG93IG5lZWQgdG8gdGhpbmsgdGhpcyBvdXQsIHByb2plY3QgbmFtZSBpcyBjbGlja2VkLCBjbGVhciBjb250ZW50cyBvZiBwcmV2aW91cyBwcm9qZWN0IGFuZCBtYWtlIHdheSBmb3IgbmV3LCBcblxuLy8gSSB0aGluayBJIG5lZWQgc29tZSBzb3J0IG9mIGNvbmRpdGlvbmFsLCBpZiB0aGlzIHByb2plY3QgaXMgY2xpY2tlZCwgY2hhbmdlIHRvIGEgdmFyaWFibGUgdGhlbiB1c2UgcmVwbGFjZSBjaGlsZC4gXG5cbi8vIGlmIHRoZSB2YXJpYWJsZSB0YXJnZXRWYWx1ZVByb2plY3ROYW1lIGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgY29udGFpbmVyLCBvciB0aGUgZGl2LCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIHByb2plY3QsICBcblxuLy8gXG5cbi8vIC0tIGhvdyB0byBtYWtlIHN1cmUgb25seSB0aGF0IHdoZW4gdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgaW4gdGhlIHByb2plY3RzIHNlY3Rpb24sIFxuXG4vLyBpdCB3aWxsIHBvcHVsYXRlLCB3aXRoIHRoYXQgcHJvamVjdCBuYW1lLCB3aXBlIHRoZSBjb250ZW50cyBvZiB0aGUgcHJldmlvdXMgcHJvamVjdCBhbmQgc2hvdyB0aGUgY2xpY2tlZCBvbiBwcm9qZWN0LCBcblxuLy8gLS0gd2h5IGlzIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBub3QgZHluYW1pY2FsbHkgYWRkaW5nIHByb2plY3RzPyBJIGhhdmUgdG8gcmVmcmVzaCB0aGUgcGFnZSBmb3IgaXQgdG8gc2hvdyB1cD8gXG5cbi8vIGhhbmRsZSB0aGUgY29uZGl0aW9uYWwgbG9naWMgZmlyc3QsIGFuZCBjb3JyZWN0bHkgZGlzcGxheWluZyB0aGUgcHJvamVjdCBuYW1lcyBpbiB0aGUgbWFpbiBjb250YWluZXIgZmlyc3QsIFxuXG4vLyBzb21lIHR5cGUgb2YgY29uZGl0aW9uYWwgaXMgbmVlZGVkIHRvIGNvbXBsZXRlIHRoaXMsIHJlbWVtYmVyIG9ubHkgb25lIHByb2plY3QgY2FuIGJlIGRpc3BsYXllZCBhdCBhIHRpbWUsIFxuXG4vLyBpZiBwcm9qZWN0IGNvbnRhaW5lciBpbmNsdWRlcyB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIGFub3RoZXIgcHJvamVjdCwgXG5cbi8vIHNob3VsZCBpdCBiZSBzaW1pbGFyIHRvIHJlc3RhdXJhbnQgcGFnZSwgZWFjaCBwcm9qZWN0IGlzIGdpdmVuIGEgdmFyaWFibGUsIHRoZW4gaWYgdGhhdCBwcm9qZWN0IGlzIGNsaWNrZWQgb24gaXQncyBnaXZlbiBhIHZhcmlhYmxlIG9yIGluZGV4LCBcblxuLy8gdGhlbiBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCdzIElELCBtYXRjaGVzIHdoYXQgaXMgaW5zaWRlIHRoZSBtYWluIGNvbnRhaW5lciwgaWYgbm90IGNsaWNrZWQsIHJlcGxhY2Ugd2l0aCBuZXcgY2xpY2ssIFxuXG4vLyBpZiBpdCBpcyBjbGlja2VkIGFnYWluLCBwcmV2ZW50IHRoZSB1c2VyIGZyb20gcmVwbGFjaW5nIHRoZSBjb250ZW50LCBcblxuLy8gcmVwbGFjZSB0aGUgY29udGVudCB3aXRoIHRoZSBwcm9qZWN0cyB1bnFpdWUgSUQsIGlmIHByb2plY3QuaWQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUsIHByZXZlbnQgdGhlIHVzZXIgZnJvbSBhZGRpbmcgdGhhdCBidG4gYWdhaW4sIGp1c3QgcmV0dXJuLCBcblxuLy8gY2FuIHdlIGdvIGJhY2sgYW5kIGxvb2sgYXQgd2hhdCB5b3UgZGlkIHByZXZpb3VzbHkgd2l0aCB5b3VyIGNvZGU/XG5cbi8vIEkgZG9uJ3QgdGhpbmsgaXQncyB0aGUgc2FtZSBwcmV2aW91c2x5LCBiZWNhdXNlIHdlIGFyZSB1c2luZyBhIGRpdiBoZXJlIGluc3RlYWQgb2YgYSBidXR0b24sIFxuXG4vLyBJIHdhbnQgdG8gZmluZCBhIHdheSB0aGF0IEkgY2FuIG9ubHkgZGlzcGxheSB0aGUgcHJvamVjdCB0aGF0IHdhcyBjbGlja2VkIG9uLCBzaG91bGQgYWRkIGR1cGxpY2F0ZXMsIFxuXG4vLyBpZiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgcmVwbGFjZSBjb250ZW50cyBvZiBvbGQgYW5kIHdpcGUgdGhlIG5ldywgXG5cbi8vIEkgdGhpbmsgdGhlIERPTSBEaXNwbGF5IGlzIGZpbmUsIGdldHRpbmcgdGhlIHZhbHVlIGZyb20gYSBmdW5jdGlvbiwgY3JlYXRpbmcgYSBkaXYgdGhhdCBzdG9yZXMgdGhlIHByb2plY3RzIG5hbWUsIFxuXG4vLyBub3cgb25jZSB0aGUgcHJvamVjdCBpcyBjbGlja2VkIG9uLCBsb29wIHRocm91Z2ggc3RvcmFnZSwgZmluZCBvdXQgdGhlIHByb2plY3QgdGhhdCB3YXMgY2xpY2tlZCBvbiBhbmQgZGlzcGxheSdzIGl0J3MgY29udGVudHMsIFxuXG4vLyBzdGljayB3aXRoIGhvdyB5b3UgYXJlIGRpc3BsYXlpbmcgdGhlIHByb2plY3RzIGluIHRoZSBET00sIFxuXG4vLyBob3cgd2lsbCB5b3UgYWRkIHRoaW5ncyB0byB0aGUgbWFpbiBjb250ZW50IGNvbnRhaW5lciwgZGlzcGxheSBvbmx5IHRoZSBwcm9qZWN0IHRoYXQgd2FzIGNsaWNrZWQgb24/IFxuXG4vLyBtYWtlIGEgbG9vcCBnZXQgdGhlIHByb2plY3QncyBJRCwgY29tcGFyZSB0aGUgSUQgdG8gdGhlIElEIHRoYXQgd2FzIGNsaWNrZWQgb24sIFxuXG5cblxuXG4vLyAgZXhwb3J0IGZ1bmN0aW9uIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uKHZhbHVlKSB7IFxuXG4vLyAgIGxldCBwcm9qZWN0VmFsdWUgPSB2YWx1ZTsgXG5cbi8vICAgbGV0IHByb2plY3RWYWx1ZUlEID0gcHJvamVjdFZhbHVlLmlkOyBcblxuLy8gICBsZXQgc3RyaW5nVmFsdWUgPSBwcm9qZWN0VmFsdWVbXCJwcm9qZWN0XCJdOyAgXG5cbi8vICAgbGV0IHByb2plY3REaXZOYW1lQnRuTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuXG4vLyBoZXJlIHRvIHRvcCBvZiBmdW5jdGlvbiwgXG5cblxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBmb3IgKGxldCBwcm9qZWN0IGluIGxvY2FsU3RvcmFnZSkgeyBcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdDsgXG4gIC8vICAgICBsZXQgbmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlkXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2cobmFtZXMpO1xuICAvLyAgIH1cbiAgLy8gfSlcblxuICAvLyBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHsgXG4gIC8vICAgICBsZXQgeSA9IGxvY2FsU3RvcmFnZS5rZXkoXCJQcm9qZWN0LU5hbWVzXCIpO1xuICAvLyAgICAgY29uc29sZS5sb2coeSk7XG4gIC8vICAgfVxuICAvLyB9IFxuICAvLyAgIGZvcihsZXQgcHJvamVjdCBpbiBsb2NhbFN0b3JhZ2UpIHsgXG4gIC8vICAgICAvLyBsZXQgeCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTtcbiAgLy8gICAgIGxldCB4ID0gcHJvamVjdFtcImtleVwiXTsgXG5cbiAgLy8gICAgIC8vIGxldCB4aWQgPSBwcm9qZWN0W1wiaWRcIl07IFxuXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh4aWQpO1xuICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gIC8vICAgfVxuICAvLyB9KVxuXG5cbiAgLy8gb2xkIGxvZ2ljIGJlbG93IFxuXG4gIC8vIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbiAgLy8gICBsZXQgdGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50OyBcbiAgICBcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0VmFsdWVJRCk7XG5cbiAgLy8gICAvLyBpZiAocHJvamVjdFZhbHVlSUQgPT09IHRhcmdldFZhbHVlUHJvamVjdE5hbWUpIHsgXG4gIC8vICAgLy8gICAgICAgcHJvamVjdERpdk5hbWVCdG5OYXZiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIpO1xuICBcbiAgLy8gICAvLyAgICB9XG5cblxuXG4gIC8vICAgbGV0IHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuXG4gIC8vICAgcHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2LXN0eWxlcy1tYWluXCIpO1xuICAgIFxuICAvLyAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tY29udGVudC1zZWN0aW9uLWNvbnRhaW5lclwiKVswXTtcblxuICAvLyAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyBcblxuICAvLyAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgLy8gICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbiAgLy8gICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXG4gIC8vICAgbWFpbkNvbnRhaW5lci5hcHBlbmQocHJvamVjdE5hbWVNYWluQ29udGFpbmVyRGl2KTtcblxuICAvLyAgIHByb2plY3ROYW1lTWFpbkNvbnRhaW5lckRpdi5hcHBlbmQodGFyZ2V0VmFsdWVQcm9qZWN0TmFtZSk7XG5cbiAgLy8gICBtYWluQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pOyBcblxuICAvLyAgIG1haW5Db250YWluZXIuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XG5cbiAgLy8gfSlcblxuICAvLyBoZXJlIHRvIGJvdHRvbSBicmFja2V0IFxuXG4vLyAgIHByb2plY3REaXZOYW1lQnRuTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVzLXN0eWxlcy1uYXZiYXItc2VjdGlvblwiKTtcblxuLy8gICBwcm9qZWN0RGl2TmFtZUJ0bk5hdmJhci5hcHBlbmQoc3RyaW5nVmFsdWUpO1xuXG4vLyAgIGxldCBuYXZiYXJQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXIteW91ci1wcm9qZWN0cy1jb250YWluZXJcIik7IFxuXG4vLyAgIG5hdmJhclByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3REaXZOYW1lQnRuTmF2YmFyKTtcblxuLy8gfVxuXG5cbi8vIGZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcbi8vICAgbGV0IHByb2plY3RJbmRleCA9IHZhcmlhYmxlOyBcbi8vICAgbGV0IHZhbHVlSW5Qcm9qZWN0ID0gcGFyc2VEYXRhW3Byb2plY3RJbmRleF07IFxuXG4vLyAgIGxldCBzdHJpbmdWYWx1ZSA9IHZhbHVlSW5Qcm9qZWN0W1wicHJvamVjdFwiXTsgIFxuXG4vLyAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdERpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4vLyAgIHByb2plY3REaXYuc3R5bGUuZm9udFNpemUgPSBcIjJyZW1cIjtcblxuLy8gICBwcm9qZWN0RGl2LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuXG4vLyAgIHByb2plY3REaXYuYXBwZW5kKHN0cmluZ1ZhbHVlKTtcblxuXG4vLyAgIGNvbnNvbGUubG9nKHN0cmluZ1ZhbHVlKTtcblxuXG5cblxuLy8gICAvLyBjb25zb2xlLmxvZyh4KTsgXG5cbi8vICAgbGV0IG5hdmJhclByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG5cbi8vICAgbmF2YmFyUHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdik7XG5cbi8vICAgLy8gY29uc29sZS5sb2codmFsdWVJblByb2plY3QpO1xuXG4vLyAgIC8vIGxldCBwcm9qZWN0VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZURhdGEpO1xuXG4vLyAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RWYWx1ZXMpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwYXJzZURhdGEpO1xuLy8gICAvLyBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3QpO1xuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlSW5Qcm9qZWN0KTtcblxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSAgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFxuXG5cblxuXG5cblxuXG5cblxuLy8gbWFrZSBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBjb250ZW50cyBvZiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFwcGVuZHMgdGhlIHJlc3VsdCB0byB0aGUgRE9NLiBcblxuLy8gZnVuY3Rpb24gcHJpbnRTdG9yYWdlVG9Eb20oKSB7IFxuLy8gICAvLyBsZXQgZ2V0U3RvcmFnZUl0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbi8vICAgLy8gbGV0IHBhcnNlZEl0ZW1zID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlSXRlbXMpO1xuLy8gICAvLyBsZXQgc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocGFyc2VkSXRlbXMpO1xuLy8gICAvLyBsZXQgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwYXJzZWRJdGVtcyk7XG4vLyAgIC8vIGxldCBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXJzZWRJdGVtcyk7XG5cbiBcblxuLy8gICBsZXQgbmF2UHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhci15b3VyLXByb2plY3RzLWNvbnRhaW5lclwiKTsgXG4vLyAgIG5hdlByb2plY3RzQ29udGFpbmVyLmFwcGVuZChzdHVwaWRWYWx1ZSk7XG4vLyB9IFxuXG5cbi8vIHByaW50U3RvcmFnZVRvRG9tKCk7XG5cblxuXG5cblxuICAvLyBsZXQgZ2V0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdC1OYW1lc1wiKTsgXG5cbiAgLy8gbGV0IHBhcnNlRGF0YSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSk7IFxuXG4gIC8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIik7IFxuXG4vLyBjb25zb2xlLmxvZyhmb3JtRWxlbWVudCk7XG5cbi8vIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gfSlcblxuXG4vLyBZZWFoLCBJIHRoaW5rIGZvY3VzaW5nIG9uIHRoZSBiYXNpYyBpZGVhIG9mIGhvdyB0byBjcmVhdGUgYSBwcm9qZWN0IGFuZCBcbi8vIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgcHJvamVjdCB3aGVuIGl0cyBzaWRlYmFyIGJ1dHRvbiBpcyBjbGlja2VkIHdvdWxkIGJlIG15IGZpcnN0IHN0ZXAuIFxuLy8gVGhlbiB5b3UgY2FuIHRoaW5rIGFib3V0IHdoYXQgc2hvdWxkIGJlIG9uIHRoZSBwcm9qZWN0J3MgcGFnZTogdGhleSB3aWxsIG5lZWQgYnV0dG9ucyB0byBhZGQgYSB0YXNrIGFuZCB3aGF0IG5vdFxuXG4vLyBoYXZlIHRoZSB1c2VyIGVudGVyIGEgcHJvamVjdCBuYW1lLCBhbmQgc2F2ZSB0aGUgdmFsdWUsIHBhc3MgdGhhdCB2YWx1ZSB0byBzdG9yYWdlLiBcblxuLy8gdGhlIHZhbHVlIGNhbiBvbmx5IGJlIHNhdmVkLCBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGFkZCBidG4sIFxuXG4vLyBhZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGFkZCBidG4sIGluc2lkZSB0aGUgbGlzdGVuZXIsIGdldCB0aGUgaW5wdXQgZmllbGQsIGNhcHR1cmUgaXQncyB2YWx1ZSB0aGVuIGNvbnNvbGUgbG9nIGl0IFxuXG4vLyB0aGUgaXNzdWUgb2YgdGhlIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkIGJlaW5nIGNsZWFyZWQsIFxuXG4vLyB3ZWxsIEkgd3JhcHBlZCBpdCBpbnNpZGUgYSBmb3JtIHRhZywgaXQgd29ya3MgYnV0IGl0IHJlZnJlc2hlcyB0aGUgcGFnZSwgSSBtZWFuIGlzIHRoYXQgYSBwcm9ibGVtLCBcblxuLy8gSSBndWVzcyBub3cgSSdsbCB3b3JrIG9uIHN0b3JpbmcgdGhlIGRhdGEsIFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjYWxsIGEgZnVuY3Rpb24gd2hpY2ggaGFuZGxlcyBET00gbG9naWNcbi8vIGV4cG9ydCB0aGVuIGltcG9ydCB3aXRoaW4gYW5vdGhlciBmaWxlIFxuXG4vLyBpbXBvcnQgeyBzb21lIH0gZnJvbSBcImxvZGFzaFwiO1xuLy8gLy8gaW1wb3J0IHsgY29udGVudFR5cGUgfSBmcm9tIFwibWltZS10eXBlc1wiO1xuLy8gaW1wb3J0IFwiLi9ldmVudExpc3RlbmVyTW9kdWxlXCI7IFxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEZvcm1JbnB1dCgpIHsgXG5cbi8vICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1maWVsZC10ZXh0XCIpO1xuXG4vLyAgIGlucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIk5hbWUgeW91ciBwcm9qZWN0XCI7XG5cbi8vICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNvbnRhaW5lclwiKTtcblxuLy8gICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG5cbi8vICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuLy8gICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4vLyAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbi8vICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuLy8gICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1idG5cIik7XG5cbi8vICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtYnRuXCIpO1xuXG4vLyAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1maWVsZC1jb250YWluZXJcIik7XG5cbi8vICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXQtZmllbGQtY29udGFpbmVyXCIpO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4vLyAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4vLyAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbi8vIH0gXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3ROYW1lVG9ET00odmFsdWUpIHsgXG5cbi8vICAgbGV0IHVzZXJJbnB1dFZhbHVlID0gdmFsdWU7ICBcblxuLy8gICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLXlvdXItcHJvamVjdHMtY29udGFpbmVyXCIpOyBcblxuLy8gICBsZXQgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnQtc2VjdGlvbi1jb250YWluZXJcIik7IFxuXG4vLyAgIGNvbnNvbGUubG9nKG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XG5cbi8vICAgbGV0IHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4vLyAgIC8vIGdldCB0aGUgZWxlbWVudCBhbmQgdHJ5IHRvIHVzZSBpdCBpbnNpZGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlLCBcbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvbi1uYW1lLWJ0bi1kaXZcIik7XG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWVsZW1lbnQtZnJvbS1uYXZiYXItc2VjdGlvblwiKTsgXG5cbi8vICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG4vLyAgIGxldCBwcm9qZWN0TmFtZUVsZW1lbnRNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50LXNlY3Rpb24tcHJvamVjdC1uYW1lLWRpdlwiKTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICBwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7IFxuXG4vLyAvLyBpZiAocHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbmNsdWRlcyhwcm9qZWN0TmFtZUVsZW1lbnRQcm9qZWN0U2VjdGlvbikpIHsgXG4vLyAvLyAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbi8vIC8vIH1cblxuLy8gICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICBjb25zb2xlLmxvZyhcIkhleSB5b3UgY2xpY2tlZCB0aGUgcHJvamVjdCBuYW1lXCIpO1xuXG4vLyAgICAgcHJvamVjdE5hbWVFbGVtZW50TWFpbi5pbm5lclRleHQgPSB1c2VySW5wdXRWYWx1ZTtcblxuLy8gICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUVsZW1lbnRNYWluKTsgXG5cbi8vICAgICBsZXQgYWRkVG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4gICAgXG4vLyAgICAgLy8gd2hlbiBidG4gaXMgY2xpY2tlZCBpdCB3aWxsIGdlbmVyYXRlIGEgcG9wLXVwIGZvcm0gXG4vLyAgICAgLy8gSSB0aGluayB5b3UgbmVlZCBhIGNvbnRhaW5lciwgYSBkaXYgdGhhdCBob2xkcyB0aGUgY29udGVudCwgYXBwZW5kIHRoZSBkaXYgdG8gdGhlIGNvbnRhaW5lciwgXG4gICAgXG4vLyAgICAgYWRkVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgIFxuICAgICAgXG4vLyAgICAgICAvLyBpZiAobWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmluY2x1ZGVzKHNvbWVCdG4pKSB7XG4vLyAgICAgICAvLyAgIHNvbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuLy8gICAgICAgLy8gfVxuXG4gICAgXG5cbi8vICAgICAgIC8vIHByb2plY3ROYW1lRWxlbWVudFByb2plY3RTZWN0aW9uLmRpc2FibGVkID0gdHJ1ZTsgXG5cbi8vICAgICAgIC8vIHNvbWVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4vLyAgICAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250YWluZXJcIik7IFxuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXBvcC11cC1jb250YWluZXJcIik7IFxuXG4vLyAgICAgICBsZXQgdGl0bGVPZlRvRG9JbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTsgXG5cbi8vICAgICAgIHRpdGxlT2ZUb0RvSW5wdXRGb3JtLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiIFxuXG4vLyAgICAgICB0aXRsZU9mVG9Eb0lucHV0Rm9ybS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwiIHVuZGVybGluZVwiO1xuXG4vLyAgICAgICBsZXQgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7IFxuXG4vLyAgICAgICAvLyBpbiBvcmRlciB0byBjZW50ZXIgaXQgeW91IG5lZWQgdG8gYXBwZW5kIHRoaXMgZWxlbWVudCBcblxuLy8gICAgICAgLy8gdG8gYW5vdGhlciBjb250YWluZXIgXG5cbi8vICAgICAgIGxldCBzdWJtaXRUYXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG5cbi8vICAgICAgIHN1Ym1pdFRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10YXNrLWJ0bi1jb250YWluZXItc3R5bGVzXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtdGFzay1idG4tcG9wLXVwLWZpZWxkXCIpO1xuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIjsgXG5cbi8vICAgICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgbGV0IHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICAgIHBvcFVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwLWNvbnRlbnRcIik7XG5cbi8vICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0LWZpZWxkLXN0eWxlc1wiKTtcblxuLy8gICAgICAgbGV0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7IFxuXG4vLyAgICAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpOyBcblxuLy8gICAgICAgbGV0IGRlc2NyaXB0aW9uRWxlbWVudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpOyBcblxuLy8gICAgICAgZGVzY3JpcHRpb25FbGVtZW50TGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbi8vICAgICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7IFxuXG4vLyAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuLXRvLWRvLWlucHV0XCIpXG5cbi8vICAgICAgIGNsb3NlQnRuLnNyYyA9IFwiLi4vY2xvc2UtY2lyY2xlLnBuZ1wiOyBcblxuLy8gICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfSlcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuLy8gICAgICAgdXJnZW5jeUxhYmVsLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIGxldCB1cmdlbmN5RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpOyBcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLnRleHRDb250ZW50ID0gXCJVcmdlbmN5XCI7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwidXJnZW5jeS1kcm9wZG93bi1zdHlsZXNcIik7XG5cblxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIiBcblxuLy8gICAgICAgbGV0IHVyZ2VuY3lNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpOyBcblxuLy8gICAgICAgdXJnZW5jeU1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7IFxuXG4vLyAgICAgICBsZXQgdXJnZW5jeUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7IFxuXG4vLyAgICAgICB1cmdlbmN5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjsgXG5cbi8vICAgICAgIGxldCBkYXRlUGlja2VyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbi8vICAgICAgIGRhdGVQaWNrZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuLy8gICAgICAgbGV0IGRhdGVQaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7IFxuXG4vLyAgICAgICBkYXRlUGlja2VyLnR5cGUgPSBcImRhdGVcIjtcblxuLy8gICAgICAgY29uc29sZS5sb2coZGF0ZVBpY2tlcik7XG4gICAgICBcbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5SGlnaCk7XG5cbi8vICAgICAgIHVyZ2VuY3lEcm9wRG93bi5hcHBlbmRDaGlsZCh1cmdlbmN5TWVkaXVtKTtcblxuLy8gICAgICAgdXJnZW5jeURyb3BEb3duLmFwcGVuZENoaWxkKHVyZ2VuY3lMb3cpOyBcblxuXG4vLyAgICAgICBzdWJtaXRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFRhc2tCdG4pO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZU9mVG9Eb0lucHV0Rm9ybSk7IFxuICAgICAgXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50TGFiZWwpOyBcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkVsZW1lbnQpO1xuXG4vLyAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHVyZ2VuY3lMYWJlbCk7XG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodXJnZW5jeURyb3BEb3duKTsgXG5cbi8vICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlckxhYmVsKTtcblxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcbiAgICAgIFxuLy8gICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUYXNrQnRuQ29udGFpbmVyKTsgXG5cbiAgICBcblxuLy8gICAgICAgLy8gc2hvdWxkIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgY29udGVudCBkaXYsIHRoZW4gYXBwZW5kIHRvIGNvbnRhaW5lcj8gXG5cbi8vICAgICAgIG1haW5Db250ZW50UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbi8vICAgICB9KSBcblxuLy8gICAgIGFkZFRvRG9CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUb0RvXCI7XG5cbi8vICAgICBtYWluQ29udGVudFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVG9Eb0J0bik7IFxuXG4vLyAgIH0pIFxuXG5cbi8vIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24pO1xuXG5cblxuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gYXBwZW5kUHJvamVjdFRvTWFpbigpIHsgXG4vLyAgIGNvbnNvbGUubG9nKFwiSGV5IEknbSBpbiBoZXJlXCIpO1xuLy8gICAgIHByb2plY3ROYW1lRWxlbWVudE1haW4uaW5uZXJUZXh0ID0gdXNlcklucHV0VmFsdWU7XG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRWxlbWVudE1haW4pOyBcblxuLy8gICAgIGxldCBzb21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgXG5cbi8vICAgICBzb21lQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG9Eb1wiO1xuXG4vLyAgICAgbWFpbkNvbnRlbnRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWVCdG4pOyBcblxuLy8gfVxuXG5cblxuLy8gSSdtIGFibGUgdG8gZ2V0IHRoZSB1c2VyIHZhbHVlLCBJIGFtIGFibGUgdG8gbG9nIG91dCBpdCdzIHZhbHVlLCBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgcHJvamVjdHMgY29udGFpbmVyIHNlY3Rpb24sXG5cbi8vIGl0IHN0aWxsIHJldHVybnMgYW5kIEhUTUwgZWxlbWVudCwgSSBjYW4gdHVybiBpdCBpbnRvIGFuIGFycmF5LCBidXQgSSBhbSB1bnN1cmUgb2YgaG93IHRvIGFwcGVuZCB0byB0aGUgRE9NLiBcblxuXG4vLyB3aGF0IEkgd2FudCwgdGhlIHVzZXIgd2lsbCBlbnRlciBwcm9qZWN0IG5hbWUsIEkgd2FudCB0aGF0IG5hbWUgdG8gYXBwZWFyIGluIHRoZSBwcm9qZWN0J3Mgc2VjdGlvbiBhbmQgbWFpbiBjb250ZW50IHNlY3Rpb24oYmx1ZSBwYXJ0KTsgXG5cbi8vIFByb2JsZW06IEkgYW0gY29uZnVzZWQgb24gaG93IHRvIGFwcGVuZCB0aGlzIHByb2plY3QgbmFtZSB0byB0aGUgRE9NLiBcblxuLy8gV2hhdCBJJ3ZlIHRyaWVkOiBPbmNlIHRoZSBhZGQgYnRuIGlzIHByZXNzZWQsIHRoZSB2YWx1ZS9uYW1lIG9mIHByb2plY3Qgd2lsbCBiZSBzYXZlZCwgYW5kIHBhc3NlZCB0byBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoYXQgXG5cbi8vIHZhbHVlIGFuZCBwcmludHMgdG8gdGhlIERPTS4gXG5cbi8vIEkgYW0gYWJsZSB0byBhY2Nlc3MgdGhlIHByb2plY3QgY29udGFpbmVyLCBhbmQgdGhlIG1haW4gc2VjdGlvbiBidXQgaXQncyBhbiBIVE1MIGNvbGxlY3Rpb24sIEkgY2FuIGNvbnZlcnQgaXQgaW50byBhbiBhcnJheSwgXG5cbi8vIGJ1dCBob3cgY2FuIEkgYXBwZW5kIGFuIGFycmF5IHRvIHRoZSBET00/ICIsIi8vIGFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgbW9kdWxlXG5cbi8vIGltcG9ydCBcInNyYy9ldmVudExpc3RlbmVyTW9kdWxlLmpzXCI7XG5cbmltcG9ydCBcIi4vZG9tTG9naWNcIjtcblxuaW1wb3J0IFwiLi9zdG9yYWdlXCI7IFxuXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXksIHByaW50UHJvamVjdE5hbWVUb05hdmJhclByb2plY3RTZWN0aW9uLCBwcmludFZhbHVlc1RvRE9NIH0gZnJvbSBcIi4vZG9tTG9naWNcIjtcblxubGV0IGdldFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3QtTmFtZXNcIik7IFxuXG5sZXQgcGFyc2VEYXRhID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3ROYW1lTG9vcCgpIHsgICBcbmZvciAobGV0IHZhcmlhYmxlIGluIHBhcnNlRGF0YSkgeyBcblxuICAgICBsZXQgcHJvamVjdEluZGV4ID0gdmFyaWFibGU7IFxuXG4gICAgIGxldCB2YWx1ZUluUHJvamVjdCA9IHBhcnNlRGF0YVtwcm9qZWN0SW5kZXhdOyBcblxuICAgICBwcm9qZWN0QXJyYXkucHVzaCh2YWx1ZUluUHJvamVjdCk7IFxuXG59ICBcblxufSBcblxucHJvamVjdE5hbWVMb29wKCk7XG4gIFxucHJpbnRWYWx1ZXNUb0RPTShwcm9qZWN0QXJyYXkpOyAgXG5cblxuXG5cblxuXG5cbi8vIHBhc3MgdGhlIHVwZGF0ZWQgYXJyYXkgdG8gc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gSSB1cGRhdGUgdGhlIGFycmF5LCBcblxuLy8gY2FuIEkgcHVzaCB0aGluZ3MgdG8gaXQsIGFkZCB0aGluZ3MgdG8gaXQsIFxuXG4vLyBjYW4gSSB1c2UgZmlsdGVyLCBcblxuLy8gb2sgc28gbm93IEkgY2FuIGRlbGV0ZSBpbmRpdmlkdWFsIHByb2plY3RzIGFzIHdlbGwgYXMgdGhlIHByb2plY3QgYXMgYSB3aG9sZSBcblxuLy8gaG93IGNhbiBJIHJlZmxlY3QgdGhpcyBjaGFuZ2UgaW4gc3RvcmFnZT8gXG5cbi8vIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24sIFxuXG4vLyBwbGFuIG9uIGhvdyBJIGNhbiBtYWtlIGFuIHVwZGF0ZSBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gcmlnaHQgbm93IEl0IG9ubHkgZGVsZXRlcyBmcm9tIHRoZSBET00sIFxuXG4vLyBob3cgY2FuIEkgdXBkYXRlIG15IGFycmF5IHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgaW4gdGhlIERPTT8gXG5cbi8vIGNhbiBJIGxvb2sgYmFjayBteSBkZWxldGUgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgZm9yIGluc3BpcmF0aW9uPyBcblxuLy8gdGhhdCBkZWxldGVzIGZyb20gYm90aCB0aGUgYXJyYXkgYW5kIGluIHN0b3JhZ2UsIFxuXG4vLyBmaXJzdCBjaGVjayB0aGF0IG91dCwgXG5cblxuXG5cbi8vIEkgYW0gZ2V0dGluZyB2ZXJ5IGNvbmZ1c2VkIG9uIGhvdyBJIGNhbiBkZWxldGUgYSBzaW5nbGUgdG9kbyBcblxuLy8gdXNpbmcgdGhlIFxuXG4vLyBjb25mdXNlZCBvbiBob3cgSSBjYW4gZGVsZXRlIGEgc2luZ2xlIHRvZG8sIGFuZCByZWZsZWN0IGluIHRoZSBET00sIFxuXG4vLyBidXQgYWxzbyBpbiBzdG9yYWdlLCBJIGNhbiByZW1vdmUgZnJvbSBET00sIFxuXG4vLyBidXQgSSBhbSBnZXR0aW5nIGEgbGl0dGxlIGxvc3Qgb24gaG93IHRvIHJlbW92ZSBpdCBmcm9tIHN0b3JhZ2UsIFxuXG4vLyBJIHdhbnQgdG8gc2F5IHVzaW5nIGZpbHRlciB3b3VsZCBiZSBhIGdvb2Qgb3B0aW9uIFxuXG4vLyB0b2RheSB0aGUgZm9jdXMgaXMgZGVsZXRpbmcgYSBzaW5nbGUgdG9kbyBhbmQgcmVmbGVjdGluZyB0aGF0IFxuXG4vLyB3aXRoaW4gdGhlIHN0b3JhZ2UgYW5kIHdpdGhpbiB0aGUgRE9NLCBcblxuLy8gYWxzbyBpZiBJIGdldCBzdHVjayBvbiB0aGF0LCBcblxuLy8gZWRpdGluZyBhIHRvZG8sIHRoYXQgaWYgdXNlciBwcmVzc2VzIGVkaXQgYnRuLCBcblxuLy8gZ2VuZXJhdGUgdGhlIG1vZGFsIGFnYWluLCBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gZWRpdCB0aGF0IHRvZG8gXG5cbi8vIGFuZCB0aGVuIHJlZmxlY3QgdGhhdCBjaGFuZ2UgaW4gdGhlIERPTSBhbmQgaW4gc3RvcmFnZSwgXG5cbi8vIEkgd2lsbCBhc2sgdGhlIHF1ZXN0aW9uIHJpZ2h0IGF3YXkgYmVjYXVzZSBJIGFtIHN0dWNrLCBcblxuLy8gYnV0IHNwZW5kIGEgbGl0dGxlIHRpbWUgbG9va2luZyBvdmVyIHRoZSBjb2RlLCBcblxuXG5cblxuLy8gSSBtYWRlIGEgbmV3IGZvbGRlciBpbiBteSByZXBvcyBjYWxsZWQgdG9kbyBsaXN0LUIgXG5cbi8vIHRoZW4gSSBjbG9uZWQgd2l0aGluIHRoZXJlLCB0aGVuIGNvcGllZCBhbGwgbXkgY29kZSBmcm9tIG15IG1vZHVsZSBcblxuLy8gaW50byB0aGUgbmV3IHByb2plY3QsIHRoaW5ncyBzZWVtIHRvIGJlIHdvcmtpbmcgb2sgXG5cbi8vIGFtIEkgb2sgdG8gcHVzaCBhbmQgY29tbWl0IGNoYW5nZXMsIHdpbGwgdGhlc2UgY2hhbmdlcyBzdGlsbCBnbyB0byBcblxuLy8gdG9kbyBsaXN0LUEgPyBcblxuLy8gcmlnaHQgbm93IGEgcHJvYmxlbSBJIHNlZSBpcyB0aGF0IHByb2plY3RzIFxuXG4vLyBhcmUgbm90IGJlaW5nIGFkZGVkIHRvIHByb2plY3QgMiwgXG5cbi8vIHRoZSB0b2RvJ3Mgd29uJ3Qgc2hvdywgYW5kIGFueSBwcm9qZWN0IHRoYXQncyBub3QgMSwgZXJhc2VzIG9uIHJlZnJlc2gsIFxuXG5cblxuXG5cbi8vIG9rIHNvIHRvZGF5IGlzIGEgbmV3IGRheSwgXG5cbi8vIGxvb2sgYmFjayBvdmVyIHRoZSBtZXNzYWdlcywgZ2V0IGFuIGlkZWEsIFxuXG4vLyB0aGVuIGdyYWIgc29tZSBvZiB5b3VyIGZ1bmN0aW9ucywgXG5cbi8vIHRyeSB0byBpbXBsZW1lbnQgdGhlIHBsYW4gdGhhdCBleCBjYW1lIHVwIHdpdGgsIFxuXG4vLyBwYXNzIG9iamVjdHMgaW50byBhcnJheSBhbmQgbG9vcCB0aHJ1IHRoZW0sIFxuXG4vLyBmaXJzdCBsb29rIG92ZXIgdGhlIG1lc3NhZ2VzLCAgXG5cblxuLy8gb2sgc28gZ28gaW50byBjb2RlIHBlbiwgY29weSB0aGUgZGlzcGxheSBmdW5jdGlvbiBvdmVyLCBcblxuLy8gdHJ5IHRvIG1ha2UgYSBuZXcgb2JqZWN0LCBlYWNoIHRpbWUgeW91IGVudGVyIGZvcm0gZGF0YSwgXG5cbi8vIHRoZW4gYWRkIHRob3NlIHByb2plY3RzIHRvIHRoZSBhcnJheSwgXG5cblxuXG5cblxuLy8gb2sgc28gdG9kYXksIHRoZSB1bnFpdWUgdG9kb3MgYXJlIGJlaW5nIGRpc3BsYXllZCBcblxuLy8gbm93IHdlIG11c3Qgc3R5bGUgdGhlIHRvZG8ncyBcblxuLy8gZWFjaCBibG9jayBzaG91bGQgYmUgc3R5bGVkLCBcblxuLy8gbm90IGEgY29udGFpbmVyIHRoYW4gaGFzIGEgc3R5bGUgdGhhdCBob2xkcyBldmVyeXRoaW5nLCBcblxuLy8gdHJ5IHRvIG1ha2Ugc3VyZSBlYWNoIHNldCBvZiB0b2RvIGlzIGFwcGVuZGVkIHRvIGEgY29udGFpbmVyLCBcblxuLy8geW91IGFyZSBhcHBlbmRpbmcgZXZlcnl0aGluZyB0byB0aGF0IHNhbWUgY29udGFpbmVyLCBcblxuLy8gYXBwZW5kIHRvIG9uZSBjb250YWluZXIsIHN0eWxlIHRoYXQgdGhlbiBhcHBlbmQgdG8gbWFpbiBjb250YWluZXIgXG5cblxuXG5cblxuXG5cbi8vIG9rIHdlIGhhdmUgc29tZXRoaW5nIHdvcmtpbmcgaGVyZSwgXG5cbi8vIHlvdSBoYXZlIHR3byBmdW5jdGlvbnMsIFxuXG4vLyBhdCBsZWFzdCBkYXRhIGlzIGJlaW5nIHByaW50ZWQgdG8gdGhlIERPTSwgYW5kIGlzIHN0b3JpbmcgaW4gbG9jYWwgc3RvcmFnZSBjb3JyZWN0bHkgXG5cbi8vIGNoZWNrIHlvdXIgZnVuY3Rpb25zIGFnYWluLCBcblxuLy8gcmVtZW1iZXIgb25lIHRvIGNyZWF0ZSB0aGUgZWxlbWVudHMvc3R5bGUsIG90aGVyIHRvIGp1c3QgZGlzcGxheSB0aGUgY3VycmVudFByb2plY3RzIHRvZG8ncyBcblxuLy8gb25lIGZ1bmN0aW9uIHRvIGdyYWIgdGhlIG1haW4gY29udGFpbmVyLCBhcHBlbmQgdmFsdWVzLCBzdHlsZSwgXG5cbi8vIHRoZSBvdGhlciBmdW5jdGlvbiBzaG91bGQganVzdCBkaXNwbGF5IHRoZW0uIFxuXG5cblxuLy8gbGV0IGdldFRvZG9JdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0l0ZW1zXCIpOyBcblxuLy8gbGV0IHBhcnNlVG9kb0l0ZW1zID0gSlNPTi5wYXJzZShnZXRUb2RvSXRlbXMpOyBcblxuXG5cblxuLy8gZm9yIChsZXQgdG9kbyBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgbGV0IHRvZG9JdGVtID0gcGFyc2VUb2RvSXRlbXM7IFxuXG4vLyAgICAgIGxldCB2YWx1ZUluVG9kbyA9IHBhcnNlVG9kb0l0ZW1zW3RvZG9JdGVtXTsgXG5cbi8vICAgICAgcHJvamVjdEFycmF5LnB1c2godmFsdWVJblRvZG8pOyBcblxuLy8gICAgICAvLyBjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG4vLyB9XG5cbi8vIHByaW50VmFsdWVzVG9ET00ocHJvamVjdEFycmF5KTtcblxuXG5cblxuXG5cbi8vIHN0b3JlIHRoZSB0b2RvcyBsaWtlIEkgZGlkIHdpdGggbmFtZXMsIFxuXG4vLyBsb29wIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRha2UgaW4gcHJvamVjdCwgYWRkIHRoZSB2YWx1ZXMsIFxuXG4vLyBwdXNoIHRoZSBwcm9qZWN0IGJhY2sgaW50byBwcm9qZWN0cyBhcnJheSwgYW5kIHRoZW4gXG5cbi8vIHBhc3MgdGhlIHByb2plY3RzQXJyYXkgYmFjayB0byBET00gZnVuY3Rpb24sIGFuZCBzdG9yYWdlLCBcblxuLy8gYWRkIHRoZSB0b2RvJ3Mgb24gYSBwcm9qZWN0LCB1cGRhdGUgaXQgYWdhaW4gXG5cblxuXG5cbi8vIGNvbnNvbGUubG9nKHBhcnNlVG9kb0l0ZW1zKTtcblxuXG4vLyBob3cgY2FuIEkga2VlcCBteSB0b2RvJ3MgYWZ0ZXIgcGFnZSByZWZyZXNoPyBZZXN0ZXJkYXkgaXQgc2VlbWVkIGxpa2UgaXQgd2FzIGEgcHJvYmxlbSBpbiBob3cgSSdtIHN0b3JpbmcgdGhlbSBhbmQgaG93IEkgcGFyc2UgdGhlbSBcblxuLy8gaXQgc2VlbXMgbGlrZSBpdCBpcyBhIHN0b3JhZ2UgcHJvYmxlbSwgaG93IGNhbiBJIHByb3Blcmx5IHN0b3JlIHRoZSB0b2RvIGFycmF5IHdpdGhpbiBlYWNoIHByb2plY3QsIFxuXG4vLyB0cnkgdG8gcGFyc2UgdGhlIGRhdGEgbGlrZSB1IGRpZCBiZWZvcmU/IFxuXG5cbi8vIGxldCBnZXRUb2RvSXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9JdGVtc1wiKTsgXG5cbi8vIGxldCBwYXJzZVRvZG9JdGVtcyA9IEpTT04ucGFyc2UoZ2V0VG9kb0l0ZW1zKTsgXG5cblxuLy8gZnVuY3Rpb24gcGFyc2VUb2RvKCkgeyBcbi8vICAgICAgZm9yIChsZXQgaXRlbSBpbiBwYXJzZVRvZG9JdGVtcykgeyBcbi8vICAgICAgICAgICBsZXQgdG9kbyA9IGl0ZW07IFxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuLy8gICAgICB9XG4vLyB9IFxuXG4vLyBwYXJzZURhdGEoKTtcblxuXG4vLyBPSyBzbyB0aGUgZGVsZXRpbmcgcHJvamVjdCBtZXRob2Qgd29ya3MhISBJIGFtIG5vdyBhYmxlIHRvIGRlbGV0ZSBhIHByb2plY3QgZnJvbSBtYWluIGFzIHdlbGwgYXMgdGhlIG5hdmJhciwgXG5cbi8vIG5leHQgSSBkaWQgdG8gYWRkIHRoZSBsb2dpYyBzbyB0aGUgdXNlciBjYW4gYWRkIHRvZG8ncywgXG5cbi8vIHJlbWVtYmVyIHRvZG8ncyBhcmUgYWRkZWQgdG8gdGhlIHByb2plY3Qgb2JqIGFycmF5LCBcblxuLy8gZmlyc3Qgd2UgcHJvYmFibHkgbmVlZCBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYXB0dXJlIHRoZSB2YWx1ZSBcblxuLy8gb24gZWFjaCBpbnB1dCBmaWVsZCwgbGV0cyBzdGFydCB0aGVyZSwgXG5cbi8vIGEgZnVuY3Rpb24gd2lsbCBiZSBuZWVkZWQgdG8gZ2V0IHRoZSBjb3JyZWN0IGlucHV0IGZpZWxkcyBcblxuLy8gYW5kIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGVtLCBcblxuXG5cblxuLy8gdGhpbmtpbmcgb2YgdGhlIG5leHQgc3RlcCBhZnRlciB0aGUgZGVsZXRpbmcgcHJvamVjdHMsIFxuXG4vLyB0aGF0IHdvdWxkIGJlIGdldHRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBmb3JtIGlucHV0IGFuZCBcblxuLy8gcHVzaGluZyB0aGVtIGJhY2sgaW50byB0aGUgdG9kbyBhcnJheSB0aGF0IGVhY2ggcHJvamVjdCBjb250YWluZXJzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIGFjY2VzcyB0byB0aGF0IHRvZG8gYXJyYXksIHRyeSBhIHNpbXBsZSBsb2cgZmlyc3QgXG5cbi8vIGJ1dCB0aGUgdG9kbydzIHdpbGwgYmUgYWRkZWQgdG8gdGhlcmUgYnV0IGFsc28gaXQgbmVlZHMgdG8gYmUgXG5cbi8vIHJlZmxlY3RlZCBpbiB5b3VyIERPTSB0b28sIFxuXG4vLyBzbyB0aGlua2luZyBvZiBzb21lIHdheSB0byBhY2Nlc3MgdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoZSBvYmogXG5cblxuLy8gaWYgeW91IGNhbiBhY2Nlc3MgaXQgeW91IGFkZCB0aGUgdmFsdWVzIHRvIGl0LCBcblxuLy8gdGhlbiBvbmNlIHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBwcm9wZXJseSB3aXRoaW4gZWFjaCBvYmplY3QsIFxuXG4vLyB5b3Ugd2FudCB0byByZWZsZWN0IHRoYXQgaW4gdGhlIERPTSwgYWNjZXNzIHRoZSB0b2RvIGFuZCBkaXNwbGF5IGl0J3MgcHJvcGVydGllcyBcblxuLy8gdGhlbiBoYXZpbmcgYSB3YXkgdG8gZGVsZXRlIHRvZG8ncyBhbmQgaGF2aW5nIHRoYXQgdXBkYXRlIFxuXG4vLyB3aXRoaW4gc3RvcmFnZSBhbmQgd2l0aGluIERPTS4gXG5cblxuLy8gZ2V0dGluZyBwcm9qZWN0IElEIFxuXG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykgeyBcbiAgICAgXG4vLyAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXlbaV07IFxuXG4vLyAgICAgIGxldCBwcm9qZWN0VmFsdWUgPSBwcm9qZWN0SW5kZXguaWQ7IFxuICAgICBcbi8vICAgICAgY29uc29sZS5sb2cocHJvamVjdFZhbHVlKTtcbi8vIH0gXG5cblxuXG5cblxuXG5cbi8vIGdldCB0aGUgcHJvamVjdCdzIElELCBnZXQgdGhlIElEJ3Mgd2l0aGluIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBhbmQgdGhlIElEJ3Mgd2l0aGluIHRoZSBtYWluIHNlY3Rpb24sIFxuXG4vLyBjcmVhdGUgYSBsb29wIGluc2lkZSBlYWNoIHNlY3Rpb24gYW5kIGdldCB0aGUgdmFsdWUsIFxuXG5cblxuXG4vLyB3ZWxsIHlvdSBjYW4gZGVsZXRlIHRoZSBwcm9qZWN0IG5hbWUgYW5kIHRoZSBidG4gY29udGFpbmVyIGZyb20gdGhlIERPTSwgXG5cbi8vIGNhbiB3ZSBmaWd1cmUgb3V0IGEgd2F5IHRvIGRlbGV0ZSB0aGUgcHJvamVjdCwgZnJvbSB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gbGV0cyB0YWtlIGEgbG9vayBhdCBob3cgdGhlIHZhbHVlIGlzIHN0b3JlZCwgXG5cbi8vIGZpZ3VyZSBvdXQgaG93IHRoZSB2YWx1ZXMgYXJlIHN0b3JlZCBhbmQgc2VlIGlmIHNvbWVob3cgeW91ICBcblxuLy8gZ3JhYiBhIHZhbHVlLCBvciB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB2YWx1ZS5cblxuXG4vLyBJIGFtIGFibGUgdG8gZ3JhYiB0aGUgdmFsdWVzIHd0aWhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIEkgdGhpbmsgSSBuZWVkIHRvIHVzZSBhIGxvb3AsIHRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIHdpdGhpbiB0aGUgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdGhlIHZhbHVlJ3MgdGV4dCBjb250ZW50IG1hdGNoZXMsIHNldCB0aGUgdGV4dENvbnRlbnQgdG8gXCJcIiBvciBkZWxldGUgdGhlIGVsZW1lbnQsIFxuXG4vLyB0cnkgdG8gbG9vcCB0aHJvdWdoIHRoZSBlbGVtZW50cyB3aXRoIHRoYXQgeW91ciBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gaWYgdmFsdWVzIG1hdGNoLCBkZWxldGUgdGhlIHZhbHVlIGZyb20gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiB0aGF0IG1hdGNoZXMgbWFpbiBjb250ZW50cyB2YWx1ZSwgXG5cbi8vIGlkJ3MsIGVhY2ggcHJvamVjdCBoYXMgYSB1bnFpdWUgSUQsIGNvbXBhcmUgSUQncywgd2h5IGNhbnQgSSBkbywgaWYgdGhlIHRleHRDb250ZW50cy9zdHJpbmdzIG1hdGNoIHJlbW92ZT8gXG5cbi8vIEkgZ290IHRoZSBzdHJpbmcgdmFsdWVzIG9mIHRoZSBlbGVtZW50IGluIHRoZSBtYWluLCBhbmQgYWxsIHRoZSBlbGVtZW50cyBpbiB5b3VyIHByb2plY3RzLCBcblxuLy8gZG9lcyB0aGUgc3RyaW5nIG1hdGNoIHRoZSBvdGhlciBzdHJpbmcsIFxuXG4vLyBkbyBJRCdzIG1hdGNoPyBcblxuXG5cblxuXG4vLyBzYW1lIGlzc3VlLCBJIGFtIHRyeWluZyB0byBncmFiIHRoZSB2YWx1ZXMsIGFuZCBpZiB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBtYXJrLCBkZWxldGUgdGhlIHByb2plY3QsIFxuXG4vLyBkZWxldGUgdGhlIHByb2plY3QgZnJvbSBib3RoIHBsYWNlcywgSSBhbSBhYmxlIHRvIGdldCB0aGUgdmFsdWUgaW4gdGhlIG1haW4gc2VjdGlvbiwgXG5cbi8vIGFuZCB0aGUgbGlzdCBvbiB2YWx1ZXMgaW4gdGhlIHlvdXIgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIGhvdyBjYW4gSSBkZWxldGUgYm90aCBpbiB0aGUgc2FtZSBwbGFjZSBvbmNlIHRoZSB1c2VyIHByZXNzZXMgdGhlIGNoZWNrIG1hcmssIFxuXG4vLyBqdXN0IGNoZWNrIHRvIHNlZSB3aGVuIHRoZSBlbGVtZW50IGlzIGNyZWF0ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBET00sIHNlZSBpZiB5b3UgY2FuIGFkZCBhIGNsYXNzIHRvIGl0LCBcblxuXG4vLyB3aGlsZSB3ZXJlIHdhaXRpbmcgY2FuIHdlIGdldCB0aGUgcHJvamVjdHMgSUQ/IFxuXG4vLyBqdXN0IHNpbXBseSB0cnkgdG8gZ2V0IGEgcHJvamVjdHMgSUQuIGFuZCBsb2cgaXQsIFxuXG5cblxuXG5cblxuLy8gT0sgdG9kYXkgdGhlIGdvYWwgaXMgdG8gZmlndXJlIG91dCwgaG93IHRvIGRpc2FibGUvZXhpdCB0aGUgbW9kYWwsIGFuZCBob3cgdG8gYWN0aXZhdGUgaXQgXG5cbi8vIGJhc2VkIHVwb24gYSBidXR0b24gY2xpY2ssIFxuXG4vLyB0aGVuIG9uY2UgdGhvc2UgYXJlIGdvb2QsIHRoZW4gd2UgY2FuIGZvY3VzIG9uIHRoZSBzdHlsaW5nIG9mIHRoZSBtb2RhbCwgXG5cbi8vIGZpcnN0IGxldCdzIGFkZCB0aGUgbG9naWMgdGhhdCBjYW4gZXhpdCB0aGUgbW9kYWwsIFxuXG4vLyBncmFiIHRoZSBpZCBvciBjbGFzcyBmcm9tIEhUTUwsIGFuZCBmaXJzdCBsb2cgdGhlIGVsZW1lbnQgY29ycmVjdGx5LCBcblxuLy8gdGhlbiBhZGQgZXZlbnQgbGlzdGVuZXIsIHRoYXQgc2V0cyB0aGUgbW9kYWxzIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlZCB0aGUgKyBpY29uLCBzZXQgdGhlIGRpc3BsYXkgdG8gZmxleCwgXG5cbi8vIG9rIHNvIEkgYW0gYWJsZSB0byB0b2dnbGUgYmFjayBhbmQgZm9ydGgsIG9wZW5pbmcgdGhlIG1vZGFsIGFuZCBjbG9zaW5nIHRoZSBtb2RhbCwgXG5cbi8vIG5vdyB5b3Ugd2lsbCBuZWVkIHRvIG1ha2UgbG9naWMsIHRoYXQgd2lsbCBzZXQgdGhlIGRlZmF1bHQgZGlzcGxheSBvZiB0aGUgbW9kYWwgdG8gbm9uZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHVzZXIgcHJlc3NlcyB0aGUgYWRkIGJ0biwgaXQgd2lsbCBwb3AtdXAsIGNhbmNlbCBpdCB3aWxsIG5vdCBkaXNwbGF5IFxuXG4vLyBJIHRoaW5rIGp1c3QgZ3JhYmJpbmcgdGhlIHZhcmlhYmxlcyBhdCB0aGUgdG9wIGlzIGZpbmUsIGFuZCBqdXN0IGluIHRoZSBnbG9iYWwgc2NvcGUsIFxuXG4vLyBzZXQgdGhlIGRpc3BsYXkgdG8gbm9uZSwgXG5cbi8vIHdvcmtzLCBzYXZlIGFuZCBjb21taXQsIHRoZW4gZmlndXJlIG91dCBob3cgdG8gZ2V0IHRoZSBkZWxldGUgYnRuIHdvcmtpbmcsIFxuXG4vLyBub3cgd291bGQgcHJvYmFibHkgYmUgdGhlIGJlc3QgdGltZSB0byBkbyB0aGF0LCBzaW5jZSB0aGUgYWRkIGJ0biBpcyB3b3JraW5nLCBub3cgd2UgY2FuXG5cbi8vIHdvcmsgb24gdGhlIGxvZ2ljLCB0aGF0IG9uY2UgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGFub3RoZXIgbW9kYWwsIGFza2luZyB0aGUgdXNlciBcblxuLy8gYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD8gSXQgd2lsbCBjbGVhciB0aGF0IHByb2plY3QgZm9yIHRoZSBET00gSW4gbWFpbiBcblxuLy8gYnV0IGFsc28gaW4gdGhlIHByb2plY3QncyBzZWN0aW9uLCBcblxuLy8vIHN0eWxlIHRoZSBtb2RhbCwgb25lIGJ0biB0byBjb25maXJtIGFuZCB0aGUgb3RoZXIgYnRuIHRvIGNhbmNlbCB0aGUgb3JkZXIsIFxuXG4vLyBPayBzbyB3ZSBoYXZlIHRoZSBwcmludCB2YWx1ZXMgdG8gdGhlIERPTSBmdW5jdGlvbiwgXG5cbi8vIGlmIHVzZXIgY2xpY2tzIHByb2plY3QgbmFtZSwgdmFsdWVzIGFwcGVuZCB0byBtYWluIGNvbnRhaW5lciwgXG5cbi8vIGlmIHVzZXIgcHJlc3NlcywgYWRkIG9yIGRlbGV0ZSwgbG9naWMgaXMgd2l0aGluIHRoZSBzYW1lIGZ1bmN0aW9uLCBcblxuLy8gSSBkb24ndCBzZWUgdGhhdCBiZWNvbWluZyBhIHByb2JsZW0sIG15IHRoaW5raW5nIGlzIHRoYXQgaXQncyBiZXR0ZXIgdG8gZG8gdGhhdCB0aGVyZSBcblxuLy8gdGhhbiBwYXNzaW5nIHRoZSB2YXJpYWJsZSB0byBhbm90aGVyIGZ1bmN0aW9uLCBtaWdodCBhcyB3ZWxsIGRvIHRoYXQgYWxsIHRoZXJlLCBcblxuLy8gc28gdGhlIGRlbGV0ZSBidG4sIG1ha2UgdGhlIG1hcmt1cCBpbiB0aGUgSFRNTCBmaXJzdCwgZm9sbG93IHRoZSBndWlkZWxpbmVzIGJlZm9yZSwgZ28gc2xvdywgXG5cblxuLy8gbW9kYWwgaXMgd29ya2luZyBidXQganVzdCB0cnlpbmcgdG8gYWRkIHNwYWNlIFxuLy8gYmV0d2VlbiB0aGUgZWxlbWVudHMgdGhlIGNoZWNrIGFuZCB0aGUgeCwgZWxlbWVudCBcblxuLy8gb2sgZ290IHRoZSBkZWxldGUgYnRuIG1vZGFsIHdvcmtpbmcgYXMgSSB3YW50IHRvLCBuZXh0IEkgd2lsbCBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LCBcblxuLy8gdGhhdCBvbmNlIGNsaWNrZWQgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwsIFxuXG4vLyBkb250IGZvcmdldCB0byBhZGQgdGhlIG92ZXJsYXkhIFxuXG5cblxuXG4vLyBuZXh0IHdpbGwgd29yayBvbiBkZWxldGluZyBhIHRvZG8sIG9uY2UgdGhlIHVzZXIgcHJlc3NlcyB0aGUgY2hlY2ttYXJrLCBpdCBzaG91bGQgZGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gdGhlIERPTSwgdGhlIGFycmF5IFxuXG4vLyBhbmQgSSBiZWxpZXZlIGZyb20gbG9jYWwgc3RvcmFnZSB0b28sIHRoZW4gd29yayBvbiBzYXZpbmcgdG9kbyBpbmZvLCBmcm9tIHRoZSBtb2RhbCBhbmQgcHVzaGluZyBpbnRvIHRoZSBET00gYW5kIHN0b3JhZ2Ugd2hlcmUgXG5cbi8vIGVhY2ggcHJvamVjdCBoYXMgYSBsaXN0IG9mIHRvZG8ncywgaXQgd2lsbCBhZGRlZCB0aGVyZSB3aGlsZSBhbHNvIHJlZmxlY3RpbmcgdGhhdCBpbnRvIHRoZSBET00uIFxuXG4vLyB5ZXMgbmV4dCBzdGVwIGlzIGVpdGhlciBkZWxldGluZyB0aGUgcHJvamVjdCwgb25jZSB0aGUgdXNlciBwcmVzc2VzIHRoZSBjaGVjayBidG4sIGFuZCBnZXR0aW5nIGFsbCB0aGUgdXNlciBpbmZvIFxuXG4vLyB0aGF0IHdhcyBlbnRlcmVkIGFuZCBzYXZpbmcgdGhhdCB0b2RvLCB0byB0aGUgYXJyYXkgb2YgdG9kbydzIHRoYXQgZWFjaCBwcm9qZWN0IGhhcywgXG5cblxuXG5cbi8vIHByb2plY3REaXNwbGF5Q29uZGl0aW9uYWxMb2dpYygpOyBcblxuXG5cblxuLy8gc28gbm93IHdlIGZpZ3VyZWQgb3V0IGhvdyB0byBwcmV2ZW50IHRoZSB1c2VyIGZyb20gYWRkaW5nIG1vcmUgcHJvamVjdHMsIFxuXG4vLyBiYXNjaWNhbGx5IGNsZWFyIHRoZSBET00sIHRoZW4gYWRkIHByb2plY3RzLCBcblxuLy8gbm93IGFkZCB0aGUgbG9naWMsIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIG1vZGFsLCBmb3IgdGhlIHVzZXIgdG8gY3JlYXRlIGEgdG9kbywgXG5cbi8vIGZpcnN0IEkgd291bGQganVzdCB0cnkgaXQgd2l0aGluIHRoZSBmdW5jdGlvbiwgdGhlbiBtYXliZSBzZWUgaWYgeW91IGNhbiBzcGxpdCB0aGUgY29kZSB1cCBhIGJpdCwgXG5cbi8vIHByaW50IGEgc2ltcGxlIG1lc3NhZ2Ugd2l0aGluIHRoZSBldmVudCBsaXN0ZW5lciBmaXJzdCwgXG5cbi8vIG9rIHdvcmtzIGdvb2QsIG5vdyBzdGFydCBjb25zdHJ1Y3RpbmcgeW91ciBtb2RhbCwgZm9sbG93IGFsb25nIHdpdGggdGhlIGFydGljbGUsIG9yIHZpZGVvLCBcblxuLy8gbmVlZHMgdGl0bGUsIHByaW9yaXR5LCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIFxuXG4vLyB0aG9zZSB2YWx1ZXMgYXJlIHRoZW4gYWRkZWQgdG8gdGhlIHRvZG8gYXJyYXkgd2l0aGluIHRoYXQgc3BlY2lmaWMgcHJvamVjdCwgXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFNvIEkgbmVlZCB0byByZWNvbnNpZGVyIG15IGFwcHJvYWNoLCBpbnN0ZWFkIG9mIGhhdmluZyBzdG9yYWdlIHJlZmxlY3Qgd2hhdCBpcyBpbiB0aGUgRE9NLCBcblxuLy8gRE9NIGFuZCBzdG9yYWdlIGFyZSBzZXBlcmF0ZSwgd2hlbiBhIHByb2plY3QgbmFtZSBpcyBjcmVhdGVkLCBzYXZlIHRvIHN0b3JhZ2UgYnV0IHlvdSBhbHNvIGhhdmUgcHJvamVjdCdzIGFycmF5LCBcblxuLy8gYW5kIHdoYXRldmVyIGlzIGluc2lkZSBwcm9qZWN0cyBhcnJheSBuZWVkcyB0byBiZSBhcHBlbmRlZCB0byB0aGUgRE9NLCBpbiB0aGUgY29ycmVjdCBmb3JtYXQsIHlvdSBtYXkgaGF2ZSB0byBwYXJzZSBvciBzdHJpbmdpZnkgdGhlIGRhdGEgdG8gd29yaywgXG5cbi8vIHJlZmxlY3Qgd2hhdGV2ZXIgaXMgaW4gdGhlIHByb2plY3RzIGFycmF5IHRvIHRoZSBET00uIFxuXG5cblxuXG5cblxuXG4vLyBmdW5jdGlvbiBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbigpIHsgXG4vLyAgICAgIGNvbnNvbGUubG9nKFwiSGV5IHRoaXMgd29ya3NcIik7XG4vLyAgICB9XG4gICBcblxuXG4vLyAtLSBvbmUgaXNzdWUgSSBub3RpY2UgaXMgdGhhdCBpZiBJIGFkZCBhIHByb2plY3QgbmFtZSwgSSBoYXZlIHRvIHJlZnJlc2ggZm9yIGl0IHRvIGdldCBpdCB0b28gc2hvdy4gISEhXG5cblxuLy8gd2hhdCBJIHdhbnQgdG8gZG8gbmV4dCBpcyB0byB0YWtlIHRoZSB2YWx1ZXMvcHJvamVjdCBuYW1lcyB0aGF0IGFyZSBpbiBsb2NhbCBzdG9yYWdlLCBcbi8vIGFuZCBhcHBlbmQgdGhvc2UgdG8gdGhlIERPTSwgXG4vLyBmaXJzdCBqdXN0IHRyeSB0byBncmFiIHRoZSBlbGVtbmVudCBhbmQgYXBwZW5kIHZhbHVlIHdpdGhpbiB0aGUgZnVuY3Rpb24sIHRoZW4gd29yayBmcm9tIHRoZXJlLCBcblxuXG5cbi8vIE9LIEkgYW0gYWJsZSB0byBkbyBpdCB3aXRoaW4gdGhlIGZ1bmN0aW9uIFxuXG4vLyBub3cgdHJ5IHRvIHNlcGVyYXRlIGl0LCBwdXQgdGhhdCBsb2dpYyB3aXRoaW4gdGhlIERPTSBNb2R1bGUsIHRoZW4gb25jZSB5b3UgZ2V0IHRoYXQgd29ya2luZywgc3R5bGUgd2l0aGluIHNlcGVyYXRlIHNoZWV0LCBcblxuXG5cblxuXG5cbi8vIHByb2plY3RBcnJheS5wdXNoKHBhcnNlRGF0YSk7XG5cblxuXG5cbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGJsYWggaW4gc29tZUFycmF5KSB7XG4vLyAgIGNvbnNvbGUubG9nKGJsYWgpXG4vLyAgIG5ld0FycmF5LnB1c2goYmxhaCk7XG4vLyB9O1xuXG4vLyBjb25zdCBzb21lQXJyYXkgPSBbIHthOiAxfSwge2I6IDJ9LCB7YzogM30gXTtcbi8vIGNvbnN0IG5ld0FycmF5ID0gWyBdO1xuLy8gZm9yIChjb25zdCBwcm9qZWN0IGluIHNvbWVBcnJheSkge1xuLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0KTsgXG4vLyAgIG5ld0FycmF5LnB1c2gocHJvamVjdCk7XG4vLyB9OyAgICBcblxuXG5cbi8vIHRoaXNcbi8vIGNvbnN0IHNvbWVBcnJheSA9IFsge2E6IDF9LCB7YjogMn0sIHtjOiAzfSBdO1xuLy8gY29uc3QgbmV3QXJyYXkgPSBbIF07XG4vLyBmb3IgKGNvbnN0IGluZGV4IGluIHNvbWVBcnJheSkge1xuLy8gLy8gICBjb25zb2xlLmxvZyhpbmRleCk7XG4vLyBsZXQgeCA9IE9iamVjdC52YWx1ZXMoc29tZUFycmF5KTtcblxuLy8gLy8gY29uc29sZS5sb2coeCk7XG5cbi8vICAgbmV3QXJyYXkucHVzaCh4KTtcblxuLy8gICBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4vLyB9O1xuXG5cblxuXG5cblxuLy8gSSB3aWxsIG5leHQgd3JpdGUgYSBmdW5jdGlvbiB3aXRoaW4gRE9NIGxvZ2ljLCB0aGF0IHdpbGwgZ2V0IHRoZSBsb2NhbCBzdG9yYWdlLCBncmFiIHRoZSBwcm9qZWN0IG5hbWVzLCB0aGVuIHByaW50IHRoZW0gdG8gdGhlIERPTSwgd2l0aCBpbiB0aGUgcHJvamVjdHMgc2VjdGlvbiwgXG5cbi8vIHRoZW4gaWYgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSwgYXR0YWNoIGEgbGlzdGVuZXIsIHRoZW4gd2l0aGluIGxpc3RlbmVyIGxvZ2ljIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBET00sIGluIGJvdGggcGxhY2VzIFxuXG4vLyB5b3Ugd2lsbCBuZWVkIHRvIGNsZWFyIG1haW4gY29udGVudCB0byBtYWtlIHdheSBmb3IgdGhlIG5ldyBjb250ZW50LCB1c2luZyByZXBsYWNlIGNoaWxkLCBcblxuLy8geW91IG5lZWQgdG8gbWFrZSBzdXJlIHRvIGNvbnZlcnQgdGhlIG9iaiB0byBhIHN0cmluZywgbWFrZSBzdXJlIGl0J3MgaW4gdGhlIHByb3BlciBmb3JtYXQgYmVmb3JlIGFwcGVuZGluZywgXG5cbi8vIGlmIGp1c3QgbmVlZHMgdG8gYmUgdGhlIHN0cmFpZ2h0IHByb2plY3QgbmFtZSwgXG5cbi8vIHNvIG9uY2UgY2xpY2tlZCBwb3B1bGF0ZSB3aXRoIHR3byBidXR0b25zLCBkZWxldGUsIGFuZCBhZGQgYnRuLCBpZiBhZGQgYnRuIGlzIGNsaWNrZWQsIGdlbmVyYXRlIGZvcm0gd2hpY2ggd2lsbCBzYXZlIGRhdGEgYW5kIGFkZCB0byB0b2RvJ3Mgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyBhcHBlbmQgdGhvc2UgdG9kbydzIHRvIHRoZSBET00gYXMgdGhleSBhcmUgYWRkZWQsIGFuZCByZW1vdmUgaWYgdGhleSBhcmUgZGVsZXRlZC4gXG5cblxuXG5cblxuXG5cblxuXG4vLyBwcm9qZWN0QXJyYXkuY2xlYXIoKTsgXG5cblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBwcm9ibGVtcywgb24gc3RvcmFnZSB3aXRoIHRvZG8gbGlzdCwgbXkgZGF0YSBpcyBiZWluZyBzdG9yZWQgY29ycmVjdGx5LCAgXG5cbi8vIGJ1dCBJIGFtIG5vdGljaW5nIG15IHByb2plY3QgbmFtZXMgYXJlIGtlZXAgZ2V0dGluZyBuZXN0ZWQgaW5zaWRlIG11bHRpcGxlIGFycmF5J3MsIGN1cnJlbnRseSBcblxuLy8gcHJvamVjdCBuYW1lcyBhcmUgYXJlIG1hZGUgaW50byBvYmplY3RzIHRoZW4gb2JqZWN0cyBhcmUgcGFzc2VkIHRvIGFycmF5IGZvciBzdG9yYWdlLCBvbmNlIHRoZSBwYWdlIHJlbG9hZHMsIFxuXG4vLyBJIHBhcnNlIHRocm91Z2ggdGhlIGRhdGEgaW4gc3RvcmFnZSwgYW5kIHB1c2ggdGhlIGRhdGEgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGRhdGEgaXMgc2F2ZWQsIFxuXG4vLyBsaWtlIEkgc2FpZCwgYXJyYXkncyBhcmUgYmVpbmcgbmVzdGVkIHdpdGhpbiBtdWx0aXBsZSBsZXZlbHMgYW5kIEknbSBub3Qgc3VyZSB3aHkuIFxuXG4vLyBwaWN0dXJlIGF0dGFjaGVkIGFuZCBzb21lIHNuaXBwZXRzIG9mIG15IGNvZGUgYXR0YWNoZWQgZm9yIGNvbnRleHQsIEkgY2FuIGFsc28gYXR0YWNoIG15IHJlcG8gaWYgdGhhdCBoZWxwcyB0byBmdXJ0aGVyIGRlYnVnIHRoaXMsIFxuXG5cblxuXG5cblxuLy8gSSB0aGluayBJIGNhbiBqdXN0IHB1dCB0aGUgYXJyYXkgd2l0aGluIHN0b3JhZ2UgYW5kIHdpdGhpbiBET00gbG9naWMgXG5cbi8vIEkgY2FuIHBhc3MgdGhlIHByb2plY3Qgb2JqZWN0IHRvIHRoZSBcblxuXG4vLyByZWFkIGJhY2sgb3ZlciBtZXNzYWdlcyB0byBkZXRlcm1pbmUgZ2FtZS1wbGFuLCBcblxuLy8gcHJvcGVybHkgc3RvcmUgdGhlIGRhdGEsIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIHRoZSBhcnJheSBpcyBiZWluZyBvdmVyd3JpdHRlbiBlYWNoIHRpbWUsIFxuXG4vLyBwdXQgdGhvc2UgaXRlbXMgdGhhdCB3ZXJlIGFkZGVkIHRvIGxvY2FsIHN0b3JhZ2UgYmFjayBpbnRvIHRoZSBhcnJheSwgc28gdGhlIGFycmF5IGNhbiBrZWVwIHRob3NlIHZhbHVlcywgXG5cbi8vIGtlZXAgdGhlIHZhbHVlcyBpbiBzdG9yYWdlLCB2YWx1ZXMgYXJlIGJlaW5nIG92ZXJ3cml0dGVuIGVhY2ggdGltZSwgXG5cbi8vIGtlZXAgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSwgXG5cbi8vIG9iamVjdHMgYXJlIHN0b3JlZCB3aXRoaW4gYW4gYXJyYXksIGdldCB0aGUgcHJvamVjdCBuYW1lIG9iamVjdCwgYWRkIHRvIGxvY2FsIHN0b3JhZ2UsIGdldCB0aGUgdmFsdWUgZnJvbSBsb2NhbCBzdG9yYWdlLCBhbmQgcGFzcyBiYWNrIGludG8gYXJyYXk/PyBcblxuLy8gbm93IHNlZW1zIGxpa2Ugc3RvcmFnZSBkYXRhIGlzIGJlaW5nIG92ZXJ3cml0dGVuLCBpdCdzIG5vdCB1cGRhdGluZywgYW5kIG5vdCBrZWVwaW5nIGRhdGEsIFxuXG5cblxuXG4vLyBhbiBhcnJheSB0aGF0IHN0b3JlcyBvYmplY3RzLCBcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiB3aWxsIG1ha2UgdGhlIHByb2plY3QgbmFtZSB0aXRsZSwgZ2l2ZSBpdCBhbiBJRCwgYW5kIHRvZG8ncyAvIHRvZG8ncyB3aWxsIGJlIGFuIGFycmF5LCBcblxuLy8gaGF2ZSBhIGdsb2JhbCBhcnJheSwgXG5cbi8vIGRvdWJsZSBjaGVjayB5b3VyIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBmYWN0b3J5IG11c3QgbWFrZSwgYSBuYW1lIG9mIHByb2plY3QsIGlkLCwgdG9kbydzIGluIGFuIGFycmF5LCBcblxuXG4vLyBoYXZlIHRoZSBwcm9qZWN0IG5hbWVzIGluIGFuIGFycmF5IGFuZCBwYXNzIHRoZSBhcnJheSB0byBsb2NhbCBzdG9yYWdlLCBzbyB0aGUgdmFsdWVzIGRvbid0IGdldCBvdmVycmlkZGVuIGVhY2ggdGltZS4gXG5cbi8vIGdldCBhbiBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSwgdHVybiBpdCBpbnRvIGFuIG9iaiB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24sIFxuXG4vLyBJIHdhbnQgdG8gbWFrZSBzdXJlIEkgYW0gcHJvcGVybHkgc3RvcmluZyBteSBkYXRhLCBib3RoIGluIHRoZSBhcnJheSB0aGUgZ2xvYmFsIGFycmF5IFxuXG4vLyBhbmQgd2l0aGluIGxvY2FsIHN0b3JhZ2UsIGlmIHVzZXIgZW50ZXJzIGluZm8sIGl0IHNob3VsZCBzYXZlIGJvdGggb2YgdGhvc2UgdmFsdWVzLCBcblxuLy8gY3VycmVudGx5IEkgY2FuIGFkZCB2YWx1ZXMgYW5kIEkgYW0gcHV0dGluZyBuYW1lIG9iamVjdHMgd2l0aGluIGFuIGFycmF5IFxuXG4vLyBidXQgaXQgaXMgb3ZlcndyaXR0aW5nIGVhY2ggdGltZSBhbmQgbm90IHNhdmluZyB0aGUgZGF0YSwgXG5cbi8vIHN0b3JlIHRoZSBhcnJheSBldmVyeSB0aW1lIHNldEl0ZW0gaXMgY2FsbGVkIFxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiOyBcblxuXG4vLyBzaG91bGQgSSBrZWVwIG15IGV2ZW50IGxpc3RlbmVycyBpbiBhIHNlcGVyYXRlIG1vZHVsZT8gXG5cbi8vIGxldHMgdGVzdCBieSBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZywgXG5cbi8vIE9rIGlucHV0IGlzIGNsZWFyZWQsIG5vdyBJIG5lZWQgdG8gZm9jdXMgb24gZ2V0dGluZyB0aGUgdmFsdWUgYW5kIHBhc3NpbmcgaXQgdG8gc3RvcmFnZS4gXG5cbi8vIGdldCB0aGUgdmFsdWUsIGxvZyB0aGUgdmFsdWUsIHNhdmUgdG8gc29tZSB0eXBlIG9mIGRhdGEgc3RydWN0dXJlLCBcblxuLy8gXG5cblxuLy8gT0sgc28gSSdtIHNvcnRhIG9uIHRoZSByaWdodCB0cmFjayBoZXJlLCBJIGFtIGdldHRpbmd0aGUgdXNlciB2YWx1ZSwgYW5kIHBhc3NpbmcgaXQgYSBsb2NhbCBzdG9yYWdlIGZ1bmN0aW9uLCBcblxuLy8gSSBuZWVkIG9uZSBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0sIHRoZSBwcm9qZWN0IG5hbWUgXG5cbi8vIGFub3RoZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcm9qZWN0IG5hbWUsIFxuXG4vLyBtYXliZSBhbm90aGVyIGZ1bmN0aW9uIHRvIGdldCBhbGwgdGhlIGFkZGVkIHRvZG8ncyBvZiB0aGUgcHJvamVjdCwgXG5cbi8vIGFuZCBJIGJlbGlldmUgeW91IG5lZWQgdG8gdXNlIG9iaidzIGluc3RlYWQgb2YgYXJyYXkncyBcblxuLy8gYmVjYXVzZSB0aGUga2V5IG9mIHRoZSBvYmogPT09IHByb2plY3QgbmFtZSwgdGhlIHZhbHVlL3Mgb2YgdGhlIHByb2plY3QgPT09IHRoZSB0b2RvJ3MgPz8/IFxuXG5cblxuLy8gZmlyc3QgbGV0cyBmaXggb3VyIHN0b3JhZ2UgZnVuY3Rpb25zIHRvIHVzZSBvbmUgc2V0IGFuZCBvbmUgZ2V0IGZ1bmN0aW9uLCBcblxuLy8gd2VsbCBJJ20gY29uZnVzZWQgb24gc2V0dGluZyBhbmQgZ2V0dGluZyBpdGVtcywgSSB0cmllZCB0byBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24gYnV0IGl0IGRpZCBub3Qgd29yaywgXG5cbi8vIG9uZSBmdW5jdGlvbiBzaG91bGQgc2V0IHRoZSBpdGVtLCB0aGUgb3RoZXIgZnVuY3Rpb24gc2hvdWxkIHJldHJpZXZlIHRoZSBpdGVtL3Byb2plY3QgbmFtZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIG9uY2UgdGhlIHByb2plY3QgaXMgcmV0cmlldmVkLCBjcmVhdGUgbG9naWMgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gYWRkIHRvZG8ncywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGUsIFxuXG5cbi8vIG1ha2UgdGhlIHByb2plY3QgbmFtZSBhbiBvYmosIFxuXG4vLyBob3cgd2lsbCBJIHN0b3JlIG15IGRhdGE/IEhvdyBjYW4gSSBjb3JyZWN0bHkgc3RvcmUgbXkgZGF0YT8gXG5cbi8vIGxvb2sgb3ZlciBvbGQgcG9zdHMgdG8gZ2FtZXBsYW4sICBcblxuXG4vLyBIb3cgY2FuIEkgcHJvcGVybHkgc3RvcmUgdGhlIHByb2plY3RzIG5hbWUgaW4gdG9kbywgXG5cbi8vIG9uY2Ugc3RvcmVkIHdyaXRlIGEgZnVuY3Rpb24gd2hpY2ggZGlzcGxheXMgdGhlIGNvbnRlbnRzIG9mIHRoZSBzdG9yYWdlLCB0byB0aGUgRE9NLiBcblxuLy8gd2hhdCB0eXBlIG9mIGRhdGEgd2lsbCBteSBwcm9qZWN0cyBiZT8gSSB0aGluayBvYmoncywga2V5IGlzIHByb2plY3QgbmFtZSwgaXQncyB0b2RvJ3MgYXJlIHRoZSB2YWx1ZXMsIFxuXG4vLyB3b3JrIG9uIGNoYW5naW5nIHRoZSBwcm9qZWN0J3MgbmFtZSB0byBhbiBvYmosIGluc3RlYWQgb2YgYW4gYXJyYXkgXG5cbi8vIGhvdyBjYW4gSSBhZGQgaXRlbXMgdG8gYW4gb2JqPyBcblxuLy8gY2FuIEkganVzdCBwYXNzIHRoZSBhcnIgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGEgcHJvamVjdCBuYW1lIG9iaiwga2V5IGlzIG5hbWUgdmFsdWUvcyBhcmUgdGhlIHRvZG8nc1xuXG4vLyBJIHdhbnQgdG8gcHJvcGVybHkgc3RvcmUgcHJvamVjdCBuYW1lcyBpbnRvIGxvY2FsIHN0b3JhZ2UsIEkgYW0gcnVubmluZyBpbnRvIGEgcHJvYmxlbSB0aGF0IEkgd2FudCB0byBtYWtlIGEgcHJvamVjdCBuYW1lIG9iaiwgXG5cbi8vIHRoZW4gcGFzcyB0aGF0IG9iaiB0byBsb2NhbCBzdG9yYWdlLCBJIGFtIGp1c3QgaGF2aW5nIHRyb3VibGUsIHdpdGggbXkgZmFjdG9yeSBmdW5jdGlvbiwgXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaGVjayBhcnJheSBhbmQgbG9jYWwgc3RvcmFnZSxcblxuLy8gbG9jYWwgc3RvcmFnZSBhbmQgYXJyYXkgc2VlbXMgdG8gYmUgd29ya2luZyBmaW5lLCBpdCBpcyBhZGRpbmcgb250byB0aGUgY3VycmVudCBzZWxlY3Rpb25zLFxuXG4vLyBJIHRoaW5rIG5leHQgd291bGQgYmUgdG8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwcm9qZWN0IG5hbWVzLCB0byBiZWdpbiBhZGRpbmcgdG8tZG8ncyB0byBwcm9qZWN0c1xuXG4vLyBvayBzbyBsb29raW5nIGF0IHRoZSBwcm9qZWN0IGZvciBpbnNwaXJhdGlvbiwgXG5cbi8vIHByb2plY3QgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uIFxuXG4vLyBzYXZlZCB0byBhbiBhcnJheSBhbmQgc3RvcmFnZSwgXG5cbi8vIHRoZW4gaWYgdGhlIHByb2plY3QgbmFtZXMgYXJlIGNsaWNrZWQsIHRoZXkgYXJlIGRpc3BsYXllZCBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIFxuXG4vLyB0aGVuIG9uY2UgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uLCB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNsaWNrIGEgYWRkIGJ0biBvciBhIHRyYXNoIGJ0biwgXG5cbi8vIGFkZCBidG4gd2lsbCBtYWtlIGEgZm9ybSBmb3IgdG9kb3MgdG8gYmUgYWRkZWQsIHRoZW4gb25jZSBhZGRlZCB0aG9zZSB0b2RvcyB3aWxsIGJlIGRpc3BsYXllZCwgXG5cbi8vIGRlbGV0ZSBidG4gd2lsbCBwZXJtYW5hdGVseSBkZWxldGUgdGhlIHRvZG8vdGFzay4gXG5cbi8vIGhvdyB0byBwcmV2ZW50IGR5bmFtaWNhbGx5IGNyZWF0ZWQgZWxlbWVudCBKUyBlbGVtZW50cyBmcm9tIGZvcm1pbmcgd2hlbiBmdW5jdGlvbiBpcyBjYWxsZWQ/IFxuXG4vLyBmaXggdXAgY3VycmVudCBjb2RlIHRvIHVzZSBtb2R1bGVzLCBtb3ZlIHRvIG93biBmdW5jdGlvbiBcblxuLy8gc2VwZXJhdGluZyB0aGUgY29kZSBpcyBub3Qgd29ya2luZywgY2FuJ3QgYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRoZXJlLCBcblxuLy8gSSB3YW50IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBJIGhhZCBiZWZvcmUgYnV0IHRvIHNwbGl0IHRoZSBsb2dpYyB1cCBpbnRvIGRpZmZlcmVudCBtb2R1bGVzLCBcblxuLy8gdGFrZSB0aGUgZGl2IGVsZW1lbnQgXG5cbi8vIHdoZW4geW91IGNsaWNrIG9uIGEgcHJvamVjdCBuYW1lLCB0aGF0IHByb2plY3QgbmFtZSBzaG91bGQgYXBwZWFyIGluIHRoZSBtYWluIHNlY3Rpb24gKGZpbmUpIFxuXG4vLyBJdCBzaG91bGQgYWxzbyBhZGQgdGhlIGFkZCB0b2RvIGJ0biBhbG9uZyB3aXRoIGNhbmNlbCBidG4gXG5cblxuXG4vLyB3b3JrIG9uIGZpeGluZyB0aGUgYnRuIGlzc3VlLCBjcmVhdGluZyBtdWx0aXBsZSBlbGVtZW50cyBvbiBidG4gY2xpY2ssIFxuXG4vLyBpZiB0aGUgdXNlciB2YWx1ZSBpcyBlbXB0eSBkaXNhYmxlIHRoZSBidG4gb3IgaGlkZSBpdCwgXG5cbi8vIEkgaGF2ZSB0cmllZCBib3RoIG1ldGhvZHMgd2l0aCBubyBsdWNrLCBcblxuLy8gSSB3YXMgd29ya2luZyB3aXRoIHNvbWVvbmUgeWVzdGVyZGF5LCBhbmQgaXQgc2VlbWVkIGxpa2UgdGhlIHJpZ2h0IG1ldGhvZCwgXG5cbi8vIGJ1dCBJIGFtIHZlcnkgY29uZnVzZWQgb24gd2h5IGl0IGlzIG5vdCB3b3JraW5nLCBJIHdvdWxkIHRoaW5rIHBsYWNpbmcgaXQgYmVmb3JlIHRoZSBmdW5jdGlvbiBjYWxsIHdvdWxkIGRvIHRoZSB0cmljaywgXG5cbi8vIEkgd2lsbCBleHBlcmllbWVudCB3aXRoIHdoZXJlIHRoZSBjb2RlIGlzIHBsYWNlZC4gXG5cblxuLy8gZmlndXJpbmcgb3V0IHRoZSBsb2dpYyBmb3IgdGhlIGJ1dHRvbnMsIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gYWRkIG11bHRpcGxlIHByb2plY3RzLCBcblxuLy8gb25lIHByb2plY3QgYXQgYSB0aW1lLCBpZiB1c2VyIGVudGVycyBub3RoaW5nLCBkaXNhYmxlIGJ0biwgXG5cbi8vIGlmIHNvbWV0aGluZyBjaGFuZ2VzIGluIHRoZSBpbnB1dCBmaWVsZCwgcmUtZW5hYmxlIHRoZSBidG4gIFxuXG4vLyBJIGFtIGhhdmluZyB0cm91YmxlIGxvZ2dpbmcgdGhlIHN0YXRlbWVudCB3aXRoaW4gdGhlIGlucHV0IGxpc3RlbmVyLCBcblxuLy8gcHJhY3RpY2UgaW4gc2VwZXJhdGUgZmlsZSwgSSB3YXMgc29tZWhvdyBhYmxlIHRvIGdldCBpdCB0byB3b3JrIHllc3RlcmRheSwgXG5cbi8vIHByYWN0aWNlIGluIGEgc2VwZXJhdGUsIGlmIG5vIGx1Y2sgbW92ZSBvbnRvIGdlbmVyYXRpbmcgdGhlIGlucHV0IGZpZWxkIGJhc2VkIG9uIHdoZW4gdXNlciBcblxuLy8gcHJlc3NlcyB0aGUgdG9kbyBidG4uIFxuXG4vLyBzcGVuZCB0aGUgcmVzdCBvZiB0aGUgdGltZSwgdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgYW4gaW5wdXQgZm9ybSwgXG5cbi8vIHNvIHdpdGggdGhlIHBvcC11cCBmaWVsZCwgZG9uJ3QgZm9yZ2V0IHRvIHVzZSB0aGUgc2FtZSBsb2dpYyBhcyBsYXN0IHRpbWUgd2l0aCBkaWRhYmxpbmcgYnRuIGF0IHRoZSBjb3JyZWN0IG1vbWVudCBcbi8vIG9uY2UgYnRuIGlzIGNsaWNrZWQgaGF2ZSB0aGUgc2FtZSBwb3AtdXAgZmllbGQgYXMgeW91IGRpZCB3aXRoIGxpYmFyeSwgXG5cbi8vIHlvdSB3aWxsIHByb2JhYmx5IG5lZWQgYSBjb250YWluZXIgdGhlbiBhIGRpdiB0aGF0J3MgYXBwZW5kZWQgdG8gaXQgd2l0aCB0aGUgYWN0dWFsIGNvbnRlbnQsIFxuXG4vLyBjb250YWluZXIgYWJzb2x1dGUsIGRpdiBpcyByZWxhdGl2ZSBcblxuLy8gdGhlbiB5b3Ugd2lsbCBuZWVkIGFuIGlucHV0IGZvciBuYW1lLCBcblxuLy8gZHVlIGRhdGUsIG5vdGVzIGNhbiB1c2UgdGV4dCBhcmVhIGFuZCBkZXNjcmlwdGlvbiwgXG5cbi8vIGZpbmQgYSB3YXkgdG8gYXBwZW5kIHRvIG1haW4gcHJvamVjdCBzZWN0aW9uLCB5b3UgY2FuIGRlbGV0ZSBpdCwgb3IgY2hvb3NlIHRvIGFkZCBtb3JlIHRvZG9zIFxuXG4vLyB0aGF0IGdvIHdpdGggdGhlIHNwZWNpZmljIHByb2plY3QuICBcblxuXG5cblxuLy8gZ2V0IGZhbWlsYXIgd2l0aCB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgYXBwIC4gXG5cbi8vIHRoZSBhZGQgcHJvamVjdCBidG4gaXMgbm93IHdvcmtpbmcsIFxuXG4vLyBub3cgeW91IG5lZWQgdG8gY29uc2lkZXIgaG93IHlvdXIgcHJvamVjdCBuYW1lcyBhcmUgZ29pbmcgdG8gYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uIFxuXG4vLyB0aGUgbmFtZXMgYXJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0cyBzZWN0aW9uLCBcblxuLy8gb25jZSBjbGlja2VkIHRoZXkgc2hhbGwgYmUgYWRkZWQgdG8gdGhlIG1haW4gY29udGVudCBjb250YWluZXIsIFxuXG4vLyBpZiB5b3UgY2xpY2sgb24gdGhlIHByb2plY3QgbmFtZSBpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb24sIHRoZSB0byBkbyBmb3JtIHNob3VsZCBwb3AtdXAsIFxuXG4vLyByZW1lbWJlciBvbmUgaW5wdXQgZm9ybSBhdCBhIHRpbWUsIHlvdSBtYXkgaGF2ZSB0byBkaXNhYmxlIHRoZSBidG4gYW5kIHJlLWVuYWJsZSB0aGUgYnRuLCBcblxuLy8gYmVmb3JlIG1vdmluZyBvbiBJIHdvdWxkIGFsc28gY2hlY2ssIGFuZCByZXZpZXcgeW91ciBjdXJyZW50IGNvZGUsIHJlbW92ZSBjb21tZW50ZWQgb3V0IGNvZGUgdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHRha2UgdXAgc3BhY2UgXFxcblxuLy8gY2hlY2sgdGhlIG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgYW5kIGZ1bmN0aW9ucywgbWFrZSBzdXJlIGl0IG1ha2VzIHNlbnNlIHRvIHlvdSwgYmV0dGVyIHRvIGRvIGl0IG5vdywgY2hlY2sgaXQgb3V0IFxuXG4vLyBwYXJ0aWFsbHkgaGF2ZSB0aGUgbG9naWMsIHRoYXQgZ2VuZXJhdGVzIGlucHV0IGZpZWxkLCBcblxuLy8gdHJ5IHRvIHNlcGVyYXRlIHRoZSBsb2dpYywgZ3JhYiB0aGlzIGVsZW1lbnQgcHJvamVjdE5hbWVFbGVtZW50UHJvamVjdFNlY3Rpb24gXG5cbi8vIGdyYWIgdGhlIGVsZW1lbnQgYWRkIGEgbGlzdGVuZXIgdG8gaXQsIHBlcmZvcm0gdGhlIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSB0aGVyZSwgXG5cbi8vIHRoZW4gY2FsbCB0aGUgRE9NIG1vZHVsZSB0byBiZWdpbiBhZGRpbmcgaXQncyBwcm9wZXJ0aWVzLiAgXG5cbi8vIGhlbGxvIGV2ZXJ5b25lLCBydW5uaW5nIGludG8gYSBzbWFsbCBwcm9ibGVtIHdpdGggdG8gZG8sIFxuXG4vLyBvdmVyYWxsIHRyeWluZyB0byBrZWVwIG15IERPTSBsb2dpYyBhbmQgZXZlbnQgbGlzdGVuZXJzIGluIHNlcGVyYXRlIG1vZHVsZXMgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGFjY2VzcyB0aGUgcHJvamVjdCBuYW1lIGVsZW1lbnQgZnJvbSB0aGUgRE9NIG1vZHVsZSBcblxuLy8gSSBhbSBleHBvcnRpbmcgdGhlIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIHZhcmlhYmxlLCBcblxuLy8gdGhlbiBpbXBvcnRpbmcgaXQgYnV0IHdoZW4gSSB0cnkgdG8gYWNjZXNzIHRoZSBlbGVtZW50IGluIHRoZSBsaXN0ZW5lciBtb2R1bGUsIFxuXG4vLyB1c2luZyBJRCwgY2xhc3MsIHF1ZXJ5IHNlbGVjdG9yLCBJIGpzdXQgZ2V0IHVuZGVmaW5lZCBiYWNrLCBcblxuLy8gSSdtIHJlYWxseSBub3Qgc3VyZSB3aHkgdGhpcyBpcyBoYXBwZW5pbmcsIEkgaGF2ZSBub3QgcmFuIGludG8gdGhpcyBpc3N1ZSB5ZXQsIFxuXG4vLyBpbXBvcnRpbmcgYW5kIGV4cG9ydGluZyBhbmQgdXNpbmcgZnVuY3Rpb25zL3ZhcmlhYmxlcyBmcm9tIG90aGVyIG1vZHVsZXMgc2VlbWVkIHZlcnkgc3RyYWlnaHRmb3J3YXJkLCBcblxuLy8gSSB3b3VsZCBqdXN0IHdvcmsgb24gdGhlIGZ1bmN0aW9uIGluIHRoZSBtZWFudGltZSwga2VlcGluZyBldmVyeXRoaW5nIHdpdGhpbiB0aGUgc2FtZSBmaWxlLCBcblxuLy8gd29yayBvbiBpc3N1ZSBvbiBjbGlja2luZyBwcm9qZWN0IG5hbWUgaW4gcHJvamVjdHMgc2VjdGlvbiBcblxuLy8gaXQgc2hvdWxkIG5vdCBhcHBlbmQgbXVsdGlwbGUgYnRucy4gXG5cbi8vIHRoYXQgd2lsbCBjYXVzZSBpc3N1ZXMgXG5cbi8vIHdlbGwgdGhpbmtpbmcgZ2VuZXJhbGx5LCBzaW1pbGFyIHRvIHRoZSBwcmV2aW91cyBpc3N1ZSwgXG5cbi8vIEkgbmVlZCB0byBzb21laG93IGRpc2FibGUgdGhlIGJ0bi9uYW1lIG9mIHRoZSBlbGVtZW50LCBhZnRlciBpdCBoYXMgYmVlbiBjbGlja2VkIFxuXG4vLyBzbyB0aGUgdXNlciBjYW5ub3QgYWRkIGFub3RoZXIgYnRuLCBcblxuLy8gcHJldmVudCB0aGUgdXNlciBmcm9tIGFkZGluZyBhbm90aGVyIGJ0biwgYWZ0ZXIgY2xpY2tpbmcgdGhlIGJ0biwgXG5cbi8vIElmIHRoZSB1c2VyIHZhbHVlIG1hdGNoZXMgd2hhdCBpcyBhbHJlYWR5IGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiBcblxuXG4vLyBmaXJzdCB3b3JrIG9uIHRoZSBidG4gYXBwZW5kaW5nIGlzc3VlLCBpZiB0aGUgdXNlciBjbGlja3MgdGhlIHByb2plY3QgbmFtZSBhZ2FpbiwgXG5cbi8vIGl0IHdpbGwga2VlcCBhZGRpbmcgYnRuJ3MsIGRvbid0IGFkZCBtb3JlIGJ0bidzIFxuXG4vLyBkb24ndCBhZGQgdGhlIHByb2plY3QgYWdhaW4sIGlmIGl0IGFscmVhZHkgRVhJU1RTIElOIFRIRSBNQUlOIENPTlRBSU5FUiBcblxuLy8gTk9XIFRPR0dMSU5HIEJBQ0sgQU5EIEZPUlRIIEJFVFdFRU4gVFdPIFBST0pFQ1RTIFxuXG4vLyBZT1UgQVJFIFNJTVBMWUlORyBSRVBMQUNJTkcgVEhFIFBST0pFQ1QgV0lUSElOIFRIRSBDT05UQUlORVIsIFxuXG4vLyBPTkxZIE9ORSBQUk9KRUNUIENBTiBCRSBTSE9XTiBJTiBUSEUgQ09OVEFJTkVSLCBcblxuLy8gdGhlIGNvbmRpdGlvbmFsIHRvIHN0b3AgYXBwZW5kaW5nIG11bHRpcGxlIHByb2pldCdzIHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cbi8vIHRoZSBjb25kaXRpb25hbCB3aWxsIGNoZWNrIGlmIHRoYXQgcHJvamVjdCBlbGVtZW50IGFscmVhZHkgZXhpc3RzIGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuLy8gdGhlIHByb2JsZW0gc2VlbXMgdG8gYmUgdGhlIGJ1dHRvbnMgYXBwZW5kaW5nLCBJIG5lZWQgdG8gZmluZCBhIHdheSB0byBwcmV2ZW50IHRoZSBidG4ncyBmcm9tIGtlZXBpbmcgb24gYXBwZW5kaW5nLCBcblxuLy8gaWYgdGhlIGJ0biBhbHJlYWR5IGV4aXN0cyB0aGUgbWFpbiBjb250YWluZXIsIHRoZW4gZG9uJ3QgYXBwZW5kLCBvciBkaXNhYmxlLCBoaWRlLCBvciByZW1vdmUgZWxlbWVudCBcblxuLy8gSSBhbSBydW5uaW5nIGludG8gc29tZSBtYW55IHByb2JsZW1zIHdpdGggdG8gZG8gbGlzdCwgXG5cbi8vIEkgYW0gdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIGluIG1vZHVsZXMgYW5kIGtlZXAgdGhlIGxvZ2ljL2V2ZW50IGxpc3RlbmVycyBzZXBlcmF0ZSBmcm9tIHRoZSBET00gTG9naWMsIFxuXG4vLyBJIHdhbnQgYWNjZXNzIHRvIHRoZSBwcm9qZWN0IG5hbWUgZWxlbWVudCB3aXRoaW4gdGhlIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gc28gaWYgdGhlIHVzZXIgY2xpY2tzIHRoZSBwcm9qZWN0IGluIHRoZSBsaXR0bGUgc2lkZWJhciBpdCBnZXRzIGFwcGVuZGVkIHRvIHRoZSBET00sIFxuXG4vLyB3ZWxsIHJpZ2h0IG5vdyBJIGFtIHBlcmZvcm1pbmcgRE9NIHN0dWZmIHdpdGggZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gYnV0IHRoYXQgZWxlbWVudCBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIHRoZSBidG4gaXMgY2xpY2tlZCwgXG5cbi8vIEkgZ3Vlc3MgbXkgcXVlc3Rpb24gaXMgY2FuIEkga2VlcCBteSBjdXJyZW50IGxvZ2ljLCB3aXRoaW4gbXkgRE9NIG1vZHVsZT8gXG5cbi8vIFRoZSBwcm9ibGVtIGlzIHRoYXQgSSB3YW50IHRvIGFjY2VzcyBhIHBhcnRpY3VsYXIgYnV0IHRoYXQgZWxlbWVudCBpcyBjcmVhdGVkIHdpdGhpbiBhIGxpc3RlbmVyLCBcblxuLy8gYmFzaWNhbGx5IHRoZSB1c2VyIGVudGVycyBuYW1lIG9mIHByb2plY3QgcHJlc3NlcyBhZGQgYnRuLCB0aGUgdmFsdWUgZ2V0cyBwYXNzZWQgdG8gYSBmdW5jdGlvbiB3aGljaCBjcmVhdGVzIHRoZSBET00gZWxlbWVudCBcblxuLy8gc3VjaCBhcyBhcHBlbmRpbmcgdG8gdGhlIHByb2plY3RzIHNlY3Rpb24gYW5kIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbiwgXG5cblxuXG4vLyBSdW5uaW5nIGludG8gYSBsb3Qgb2YgcHJvYmxlbXMgd2l0aCB0byBkbyBcblxuLy8gYmFzaWNhbGx5IEkgd2FudCB0byBhY2Nlc3MgYW4gZWxlbWVudCBpbiBhIGRpZmZlcmVudCBtb2R1bGUgXG5cbi8vIHByb2JsZW0gaXMgdGhhdCBlbGVtZW50IGlzIGR5bmFtaWNhbGx5IGNyZWF0ZWQgd2l0aGluIGFuIGV2ZW50IGxpc3RlbmVyLCBcblxuLy8gSSB3b3VsZCBsaWtlIHRvIGtlZXAgbXkgRE9NIGFuZCBsb2dpYyBzdHVmZiBzZXBlcmF0ZSwgXG5cbi8vIGN1cnJlbnRseSBJIGdyYWJiZWQgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSBtb2R1bGUsIGFuZCBhZGRlZCBhbiBldmVudCBsaXN0ZW5lciB0byBpdCwgXG5cbi8vIG5vdyBJIGhhdmUgdG8gdXNlIGxvZ2ljLCB0byBtYWtlIHN1cmUgdGhlIHVzZXIgY2Fubm90IGtlZXAgYWRkaW5nIHRoZSBzYW1lIGJ0biB0byB0aGUgRE9NIGJhc2VkIG9uIGJ0biBjbGljaywgXG5cbi8vIGJhc2ljYWxseSBteSBxdWVzdGlvbiBpcyBteSBjdXJyZW50IGRvbUxvZ2ljIG1vZHVsZSBvaz8gQWRkaW5nIGFuIGV2ZW50IGxpc3RlbmVyIGFuZCBsb2dpYyB3aXRoaW4gdGhlIGRvbSBtb2R1bGUgXG5cbi8vIEl0IGRvZXMgbm90IHNlZW0gcmlnaHQgYnV0IEkgZG9uJ3Qgc2VlIGFueSBvdGhlciB3YXkgdG8gZG8gdGhpcy4gXG5cbi8vIGhvdyBjYW4gSSBzdG9wIHRoZSBhZGQgLXRvZG8gYnRucyBmcm9tIGFwcGVuZGluZyB1cG9uIGVhY2ggYnV0dG9uIGNsaWNrPyBcblxuLy8gZXZlcnl0aGluZyBpcyBhdHRhY2hlZCB3aXRoaW4gZXZlbnQgbGlzdGVuZXJzLCBcblxuLy8gY2xpY2sgYWRkIHByb2plY3QgYnRuIGZvcm0gaXMgZ2VuZXJhdGVkLCBhZGQgYnRuIGlzIHByZXNzZWQgdmFsdWUgaXMgc2F2ZWQgXG5cbi8vIHRoYXQgdmFsdWUgaXMgcGFzc2VkIHRvIGFub3RoZXIgZnVuY3Rpb24sIHdlbGwgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB0aGVuLCBcblxuLy8gY2FuIHdlIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IGEgZGlmZmVyZW50IHRpbWUsIHdoeT8gXG5cbi8vIHNob3VsZG50IGl0IGJlIHBhc3NlZCBhbmQgY2FsbGVkIGFzIHNvb24gYXMgeW91IGdldCB2YWx1ZT8gXG5cbi8vIGNhbiBJIGp1c3QgY3JlYXRlIGFub3RoZXIgZnVuY3Rpb24sIFxuXG4vLyBvbmUgdGhhdCBzdG9yZXMgdGhlIHVzZXIgdmFsdWUsIFxuXG4vLyBvbmUgdGhhdCByZXR1cm5zIHRoZSB1c2VyIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBET00/IFxuXG4vLyB5b3UgcGFzcyB0aGUgdmFsdWUgdG8gYW5vdGhlciBmdW5jdGlvbiwgXG5cbi8vIHRoYXQgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHVzZXJWYWx1ZSBhcHBlbmRlZCB0byB0aGUgRE9NL2NvbnRhaW5lcnMgXG5cbi8vIGNhcHR1cmUgaXQ7cyByZXR1cm4gdmFsdWUgZnJvbSBhbm90aGVyIGZ1bmN0aW9uLCBcblxuLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoYXQgZnVuY3Rpb24sIFxuXG4vLyBzbyBsZXRzIHRyeSB0byBtYWtlIGFub3RoZXIgZnVuY3Rpb24gMSB0aGF0IHRha2VzIHRoZSB2YWx1ZSBhbmQgYXBwZW5kcyB0byBjb250YWluZXIsIERPTSBcblxuLy8gSSB3aWxsIG5vdyB0cnkgdG8gYWRkIHRoZSBjYWxlbmRlciBvcHRpb24gdG8gbXkgdG9kbyBmb3JtIFxuXG4vLyBhbm90aGVyIHdoaWNoIHRha2VzIHRoYXQgZnVuY3Rpb24gYWJvdmUgYW5kIGFkZHMgYSBsaXN0ZW5lciB0byBpdCwgdXNpbmcgdGhlIGxvZ2ljIGluc2lkZSAuIFxuXG4vLyBleHBpZXJtZW50IHdvcmtpbmcgd2l0aCB0d28gZnVuY3Rpb25zLCBzYXZpbmcgb25lIGZ1bmN0aW9uIHRvIHZhcmlhYmxlLCBhZGRpbmcgdGhlIERPTSBzdHVmZiByZXR1cm4gYSB2YWx1ZSwgXG5cbi8vIHRha2UgdGhhdCBmdW5jdGlvbiBleHByZXNzaW9uIGFkZCBhIGxpc3RlbmVyIHRvIGl0LiBcblxuLy8gd2VsbCB0aGUgcHJvYmxlbSBpcyB0aGF0IGV2ZXJ5IHRpbWUgSSBjbGljayB0aGUgYWRkIHByb2plY3QgYnRuIFxuXG4vLyBpdCB3aWxsIGtlZXAgYXBwZW5kaW5nIG1vcmUgYWRkLXRvZG8gYnRucyB0byB0aGUgRE9NLCBcblxuLy8gYmVjYXVzZSB3aGVuIHRoZSBmb3JtIHBvcHMgdXAgXG5cbi8vIGFuZCB0aGUgdXNlciBoaXRzIHRoZSBhZGQgYnRuLCBcblxuLy8gdGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBET00gaXMgY2FsbGVkLCBcblxuLy8gaXMgdGhlcmUgYSB3YXkgSSBjYW4gaXNvbGF0ZSB0aGUgcHJvamVjdCBzZWN0aW9uIG5hbWUgZWxlbWVudD8gXG5cbi8vIHdlbGwgd2hhdCBJIHdhcyB0aGlua2luZyBvZiB5ZXN0ZXJkYXksIFxuXG4vLyBpcyBjYW4gSSBtYWtlIGEgc2VwZXJhdGUgZnVuY3Rpb24/IFxuXG4vLyBjYW4gdGhhdCBmdW5jdGlvbiBzdG9yZSBhIHZhcmlhYmxlPyB1c2VyVmFsdWU/IFxuXG4vLyB0aGVuIGNhbiB0aGF0IGZ1bmN0aW9uIGJlIGNhbGxlZD8gXG5cbi8vIEknbSBub3QgZXZlbiBzdXJlIHdoYXQgdGhlIGhlbGwgdG8gZXZlbiBkbyBcblxuLy8gdGhhdCBmdW5jdGlvbiBpcyBiZWluZyBjYWxsZWQgd2l0aGluIHRoZSBsaXN0ZW5lciwgXG5cbi8vIHNvIGV2ZXJ5IHRpbWUgeW91IGNsaWNrIHRoYXQgYnRuIG9yIHByb2plY3QgbmFtZSwgaXQgd2lsbCBrZWVwIG1ha2luZyBidG5zIFxuXG4vLyBkZXRlcm1pbmUgd2hlbiBpdCdzIHRpbWUgdG8gYXBwZW5kIHRvIHRoZSBET00gP1xuXG4vLyBvbmUgZnVuY3Rpb24gdG8gc3RvcmUgdmFsdWUgXG5cbi8vIG9uZSBmdW5jdGlvbiB0byB0YWtlL2FjY2VzcyB0aGF0IHZhbHVlIGFuZCB0aGVuIGFwcGVuZCB0byBET00gXG5cbi8vIHN0b3JlIHRoZSB2YWx1ZSwgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgdGhlcmUsIFxuXG4vLyB0aGVuICIsIlxuaW1wb3J0IFwiLi9kb21Mb2dpY1wiO1xuXG4vLyBpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9kb21Mb2dpY1wiO1xuXG4gaW1wb3J0IHsgcHJvamVjdEFycmF5LCBwcmludFByb2plY3ROYW1lVG9OYXZiYXJQcm9qZWN0U2VjdGlvbiwgcHJpbnRWYWx1ZXNUb0RPTSB9IGZyb20gXCIuL2RvbUxvZ2ljXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlU2V0SXRlbShuYW1lKSB7IFxuXG4gICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIsIEpTT04uc3RyaW5naWZ5KG5hbWUpKTsgIFxuICAgIFxuICAgIFxuICAgIFxufSAgXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBcnJheVN0b3JhZ2UoaXRlbSkgeyBcbi8vICAgICBsZXQgdGhpc1Byb2plY3QgPSBpdGVtOyBcblxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXNQcm9qZWN0KTtcbi8vIH1cblxuXG4vLyB3aGF0IHByb3BlcnRpZXMgd291bGQgdGhlIHVwZGF0ZVN0b3JhZ2UgZnVuY3Rpb24gaGF2ZT8gXG5cbi8vIHdoYXQgd291bGQgaXQgdGFrZSBpbj8gXG5cbi8vIEkgdGhpbmsgeW91IG1pZ2h0IGhhdmUgdG8gdXBkYXRlIHRoZSBhcnJheSwgXG5cbi8vIG9yIGZpbHRlciBvdXQgdGhlIGl0ZW1zIHRoYXQgd2VyZSBkZWxldGVkLCBcblxuLy8gdGhlbiBwYXNzIHRoYXQgdG8gdXBkYXRlIHN0b3JhZ2UsIFxuXG5cbi8vIHNvIG5vdyBuZXh0LCBJIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gXG5cbi8vIHVwZGF0ZSBteSBzdG9yYWdlIGFuZCBhcnJheSBiYXNlZCBvbiB3aGVuIHVzZXIgZGVsZXRlcyBcblxuLy8gYSBzaW5nbGUgdG9kbyBpdGVtLCBcblxuLy8gc29tZXRoaW5nIHdpbGwgbmVlZCB0byBiZSBwYXNzZWQgdG8gbG9jYWwgc3RvcmFnZSwgXG5cbi8vIGhvdyBjYW4gc3RvcmFnZSByZWZsZWN0IGNoYW5nZXMgaW4gdGhlIERPTSwgXG5cbi8vIHByb2plY3QgaXMgZGVsZXRpbmcgZnJvbSB0aGUgRE9NLCBidXQgaXQgc3RpbGwgc2hvd3MgaW4gYXJyYXkgXG5cbi8vIGFuZCBzdGlsbCBzaG93cyBpbiBsb2NhbCBzdG9yYWdlLCBcblxuLy8gYWZ0ZXIgdGhlIHByb2plY3QgaXMgZGVsZXRlZCBmcm9tIHRoZSBET00sIFxuXG4vLyB0aGUgcHJpbnRWYWx1ZVRvRE9NIGZ1bmN0aW9uIHdpbGwgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gXG5cbi8vIHNvIHRoYXQgY2FuIHJlZmxlY3QgdGhlIGxvY2FsIHN0b3JhZ2UgdG8gdGhlIERPTSwgXG5cbi8vIHNvIEkgdGhpbmsgdGhlIHByb2plY3QgYXJyYXkgaXMgZ29pbmcgdG8gYmUgcGFzc2VkIHRvIGxvY2FsIHN0b3JhZ2UsIFxuXG4vLyB0aGVuIHRoZSBwcmludHZhbHVlIHRvIGRvbSBmdW5jdGlvbiBuZWVkcyB0byBjYWxsZWQsIHNvIHNod28gdG8gdGhlIERPTSBcblxuLy8gd2hhdCBpcyBpbnNpZGUgbG9jYWwgc3RvcmFnZSBcblxuLy8gY29udGludWUgdG8gYnJhaW5zdG9ybSBob3cgdG8gcmVmbGVjdCB0aGUgY2hhbmdlIGluIGRlbGV0aW5nIFxuXG4vLyBwcm9qZWN0cyBmcm9tIHRoZSBET00gYW5kIGhvdyB0byB1cGRhdGUgdGhhdCBpbiBsb2NhbCBzdG9yYWdlLiBcblxuXG5cbi8vICBleHBvcnQgZnVuY3Rpb24gYXJyYXlTdG9yYWdlVG9kb0l0ZW1zKHByb2plY3QpIHsgXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7IFxuICAgIFxuLy8gIH1cblxuXG5cblxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZSgpIHsgXG4vLyAgIGxldCBnZXROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0LU5hbWVzXCIpOyBcbiAgXG4vLyAgIGNvbnNvbGUubG9nKGdldE5hbWUpOyBcblxuLy8gICBsZXQgcHJvamVjdE5hbWVPYmogPSBwcm9qZWN0TmFtZUZhY3RvcnkoZ2V0TmFtZSk7IFxuXG4vLyAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lT2JqKTtcbi8vIH1cblxuXG5cblxuXG5cbi8vIG15IGdvYWwgaXMgdG8gaGF2ZSBpbmRpdmR1YWwgcHJvamVjdCBuYW1lIG9iamVjdHMsIFxuXG4vLyBJIGFtIGFibGUgdG8gY3JlYXRlIHByb2plY3QgbmFtZXMsIGJ1dCB3aGVuIEkgdXNlIG9iamVjdHMgaXQgb25seSBhZGRzIG9udG8sIGFuZCBkb2VzIG5vdCBjcmVhdGUgdW5pcXVlIHByb2plY3RzLiBcblxuLy8gXG5cblxuXG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXItaW5wdXRcIiwgcHJvamVjdEFycmF5KTsgXG5cbi8vICAgICBjb25zdCBwcm9qZWN0TmFtZVN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXItaW5wdXRcIik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFyciA9IFtdO1xuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykgeyBcbi8vICAgICAgICAgbGV0IHByb2plY3ROYW1lSW5wdXQgPSB2YWx1ZVtpXTsgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lSW5wdXQpO1xuLy8gICAgICAgICBhcnIucHVzaChwcm9qZWN0TmFtZUlucHV0KTtcblxuLy8gICAgIH0gXG4vLyAgICAgY29uc29sZS5sb2coYXJyKTsgXG4vLyAgICAgcmV0dXJuIGFycjsgXG4vLyB9IFxuXG4vLyBqdXN0IGFkZCB2YWx1ZXMgdG8gdGhlIGFycmF5IFxuLy8gbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0TmFtZSh2YWx1ZSkgeyBcblxuLy8gICAgIHByb2plY3RBcnJheS5wdXNoKHZhbHVlKTtcblxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlci1pbnB1dFwiLCBwcm9qZWN0QXJyYXkpOyBcblxuLy8gICAgIGNvbnN0IHByb2plY3ROYW1lU3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlci1pbnB1dFwiKTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lU3RvcmFnZSk7XG5cbi8vICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuLy8gfSBcblxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHsgXG4vLyAgICAgcmV0dXJuIHsgXG4vLyAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBuZXdQcm9qZWN0ID0gbmV3IGNyZWF0ZVByb2plY3ROYW1lKFwiYWxlY1wiKTsgXG5cbi8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuLy8gbGV0IGdBcnJheSA9IChmdW5jdGlvbiAoKSB7XG4vLyAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuLy8gICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbi8vICAgICAgICAgcmV0dXJuIGFycmF5O1xuLy8gICAgIH1cbi8vIH0oKSk7IFxuXG4vLyBnQXJyYXkoMSk7IFxuLy8gZ0FycmF5KDIpOyBcbi8vIGdBcnJheSgzKTsgXG4vLyBnQXJyYXkoNCk7IFxuXG4vLyAgZnVuY3Rpb24gc3RvcmVVc2VyVmFsdWUodmFsdWUpIHsgXG4vLyAgICAgbGV0IGFycmF5ID0gW107IFxuLy8gICAgIGNvbnNvbGUubG9nKGFycmF5KVxuLy8gICAgIHJldHVybiBmdW5jdGlvbiBjYWxsVGhpcyAodmFsdWUpIHsgXG4vLyAgICAgICAgIGFycmF5LnB1c2godmFsdWUpOyBcbi8vICAgICAgICAgcmV0dXJuIGFycmF5XG4vLyAgICAgfSBcbi8vIH0gXG5cbi8vIHN0b3JlVXNlclZhbHVlKCk7XG5cblxuXG5cblxuXG4vLyBmaW5kIHdheSB0byBhZGQgaXRlbXMgb250byBhbiBhcnJheSwgSSBkb24ndCB0aGluayBpdCdzIHNtYXJ0IHRvIGFkZCBvbmUgYXQgYSB0aW1lLCBidXQgbW9yZSBzbyBsaWtlIGFkZGluZyBwcm9qZWN0cyBvbnRvIGEgc2luZ2xlIGFycmF5IFxuXG4gICAgLy8gdGhpbmsgb2YgYSB3YXkgdG8gYWRkIGludG8gYW4gYXJyYXksIGxvb2sgaW50byBjbG9zdXJlIGFuZCBhZGRpbmcgb250byBhbiBhcnJheSB1c2luZyBjbG9zdXJlLiBcblxuICAgIC8vIGNsb3N1cmUgc2VlbXMgbGlrZSB0aGUgcmlnaHQgaWRlYSBidXQgaG93IGNhbiBJIG1ha2UgdGhpcyB3b3JrIHdpdGggdGhlIGN1cnJlbnQgY29kZSBJIGhhdmU/IFxuXG4gICAgLy8gd2VsbCBJIHRoaW5rIEkgZGlkIGZpbmQgYSB3YXkgdG8gc3RvcmUgdGhlIHByb2plY3QgbmFtZXMsIGp1c3Qgc29tZXRoaW5nIGRvZXNuJ3Qgc2VlbSByaWdodCBhYm91dCB0aGUgc3RvcmFnZVxuXG4gICAgLy8gIFxuXG4vLyB0aGF0IGFycmF5IGNhbiBiZSBwYXJ0IG9mIGFuIG9iaiwga2V5IGludG8gdGhlIGFycmF5XG5cbi8vIGJ0biBwcm9ibGVtLCBhcHBlbmRpbmcgdG9vIG1hbnkgaW5wdXQgZmllbGRzLCBjb25kaXRpb25hbCB0byBwcmV2ZW50IFxuXG4vLyBjb3JyZWN0IGFycmF5IHN0b3JhZ2UgXG5cbi8vIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5IFxuIFxuLy8gcHJvcGVybHkgaW5zdGFsbGluZyBhbmQgdXNpbmcgc2FzcyBhZnRlciB0aGUgYWJvdmUgaXMgYWNjb21wbGlzZWQuICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==